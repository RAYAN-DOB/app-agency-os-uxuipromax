// Inline shared assets into each standalone proposal (node proposals/build.mjs). No dependencies.
// Between markers <!-- @icons --> ... <!-- /@icons --> : proposals/_shared/icons.svg
// Between markers /*@meadow*/ ... /*/@meadow*/ : assets/meadow.webp as a data URI
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const icons = readFileSync(join(here, '_shared/icons.svg'), 'utf8').trim()
const meadow = `url("data:image/webp;base64,${readFileSync(join(here, '../assets/meadow.webp')).toString('base64')}")`

for (const p of ['A', 'B', 'C']) {
  const file = join(here, p, 'index.html')
  if (!existsSync(file)) continue
  let html = readFileSync(file, 'utf8')
  html = html.replace(/<!-- @icons -->[\s\S]*?<!-- \/@icons -->/, `<!-- @icons -->\n${icons}\n<!-- /@icons -->`)
  html = html.replace(/\/\*@meadow\*\/[\s\S]*?\/\*\/@meadow\*\//g, `/*@meadow*/${meadow}/*/@meadow*/`)
  writeFileSync(file, html)
  console.log(p, Math.round(html.length / 1024), 'Ko')
}
