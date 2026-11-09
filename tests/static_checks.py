"""Conservative source-level quality gate. Does not replace Playwright."""
from pathlib import Path
from html.parser import HTMLParser
from xml.etree import ElementTree as ET
import re, subprocess
R=Path(__file__).resolve().parents[1]
JS=(R/'app.js').read_text()
CSS=(R/'styles.css').read_text()
HTML=(R/'index.html').read_text()
class Scan(HTMLParser):
  def __init__(self): super().__init__(); self.ids=[]; self.scripts=[]
  def handle_starttag(self,tag,attrs):
    d=dict(attrs)
    if 'id' in d:self.ids.append(d['id'])
    if tag=='script':self.scripts.append(d.get('src'))
s=Scan();s.feed(HTML)
required=['page-root','sidebar-nav','command-input','drawer','overlay','toast','main']
assert all(x in s.ids for x in required),f'missing {set(required)-set(s.ids)}'
assert len(s.ids)==len(set(s.ids)),'duplicate HTML IDs'
assert 'app.js' in s.scripts
assert '@media(max-width:660px)' in CSS
assert 'prefers-reduced-motion:reduce' in CSS
assert 'PROTOTYPE' in HTML
assert 'Aucune API connectée' in HTML
assert "const glyphs={" in JS
assert JS.count('data-nav=')>=8
assert 'const pages={' in JS
for svg in [R/'favicon.svg',R/'assets'/'aurion-mark.svg',*(R/'assets'/'marks').glob('*.svg')]:
  assert svg.stat().st_size>100,svg
  ET.parse(svg)
assert len(list((R/'assets'/'marks').glob('*.svg')))>=15
result=subprocess.run(['node','--check',str(R/'app.js')],capture_output=True,text=True)
assert result.returncode==0,result.stderr
print('PASS: HTML landmarks, nav, icons, SVG parse, responsive/reduced-motion and JS syntax')
