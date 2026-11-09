"""Export the original 24x24 Agency OS line symbols to editable SVG app marks.
No external downloads. Every shape comes from locally reviewed app.js glyphs.
"""
from pathlib import Path
import re

ROOT=Path(__file__).resolve().parents[1]
SOURCE=(ROOT/'app.js').read_text()
# Limited, auditable extraction of our own literal SVG snippets, never evaluation.
PART=SOURCE.split('const glyphs={',1)[1].split('\n};',1)[0]
GLYPHS={k:v for k,v in re.findall(r"\s*(\w+):'([^']*)',?",PART)}
PALETTE={
  'overview':('#e6f0f6','#8cb0c6','#3d667e'),
  'director':('#e1eef6','#a2c9d6','#3a7184'),
  'missions':('#ebf1f7','#a4bacf','#4a6b8b'),
  'approvals':('#f8f1e6','#dfc19d','#9c7552'),
  'runs':('#e9f5ef','#acd1bd','#568b76'),
  'agents':('#e9eefa','#b5c5df','#617fab'),
  'skills':('#f2eff9','#c1b6de','#816f9f'),
  'models':('#e4f3f1','#99cfc7','#447f7e'),
  'brain':('#f1ebf9','#c7b8e5','#7e70aa'),
  'suppliers':('#fbf1e9','#dfc29e','#9b794d'),
  'jarvis':('#fff0e5','#e3c3a4','#a87b50'),
  'infrastructure':('#e5edf3','#9cb6c9','#547388'),
  'memory':('#eceff8','#bac7e0','#617fa3'),
  'studio':('#f9edf2','#e4bfcc','#a6798e'),
  'settings':('#eff2f4','#c2cdd7','#647b8d'),
  'search':('#ebf3f7','#aecbda','#507d90'),
  'dev':('#f9edf2','#e4bfcc','#a6798e'),
  'quality':('#f8f1e6','#dfc19d','#9c7552'),
  'design':('#f9edf2','#e4bfcc','#a6798e'),
  'research':('#ebf3f7','#aecbda','#507d90'),
  'media':('#e6f0f6','#8cb0c6','#3d667e')
}
ALIASES={'dev':'studio','quality':'approvals','design':'studio','research':'search','media':'graph'}
TARGET=ROOT/'assets'/'marks'
TARGET.mkdir(parents=True,exist_ok=True)
for key,(c0,c1,ink) in PALETTE.items():
    path=GLYPHS.get(ALIASES.get(key,key))
    if not path: raise RuntimeError('Missing mark: '+key)
    path=path.replace('fill="var(--white)"','fill="#fff"')
    svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" role="img" aria-label="Icône {key}">
  <defs><linearGradient id="bg" x1=".04" y1="0" x2=".93" y2="1"><stop stop-color="{c0}"/><stop offset="1" stop-color="{c1}"/></linearGradient></defs>
  <rect x="1" y="1" width="62" height="62" rx="19" fill="url(#bg)"/>
  <rect x="1.5" y="1.5" width="61" height="61" rx="18.5" fill="none" stroke="#fff" stroke-opacity=".85"/>
  <path d="M9 9h17" stroke="#fff" stroke-opacity=".72" stroke-width="2" stroke-linecap="round"/>
  <g transform="translate(10 10) scale(1.8333)" fill="none" stroke="{ink}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">{path}</g>
</svg>'''
    (TARGET/(key+'.svg')).write_text(svg)
print(f'{len(PALETTE)} original SVG marks exported to {TARGET}')
