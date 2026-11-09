# Agency OS — Atelier Glass / Command Center V2

A **design-first, functional browser prototype** for the existing Agency OS Command Center. It is an independent **public** GitHub repository and is deliberately not connected to production systems.

> **All missions, approvals, diagnostics, agent availability, model routing and status indicators shown are synthetic demonstration scenarios.** No actual Agency OS state is queried and no real work is performed. UI actions such as "simulate approval" modify only the JavaScript state of the open tab.

## Open

Visit the deployed Vercel site or run a static web server from the root:

```bash
python3 -m http.server 8080
# http://localhost:8080
```

No npm install, backend or secrets required. The interface works offline after its static files have loaded.

## Design direction

**Quiet operations, optical depth and precise evidence.** A macOS-inspired translucent navigation layer floats above restrained neutral content; moving light and refraction are used only in the presentation area, never to obscure important rows. Typography is editorial rather than another AI-company landing page. Dynamic status is presented without inventing success, and failures lead to a clear explanation and a next step.

- **A custom SVG visual identity** in `assets/aurion-mark.svg`, plus 21 editable module symbols in `assets/marks/*.svg` (original geometric iconography, not copied brand assets).
- **15 navigable product areas** inspired by the actual structure of the separate private Agency OS frontend: dashboard, director, missions, approvals, runs, agents, skills, models, brain, suppliers, Jarvis/access, infrastructure, memory, studio and preferences.
- **Useful demos**: command palette (Ctrl/⌘ + K), route switching, filtering missions & agents, inspectable failure, approval demonstration with simulated outcomes, director chat mock, design themes, responsive sidebar, demo form, disabled production access and reduced-motion preferences.
- **No invented telemetry**: costs, health status, availability and execution quality are explicitly marked fictitious, unknown or unconnected.

## Structure

| Location | Purpose |
| --- | --- |
| `index.html` | Accessible app shell and overlays |
| `app.js` | Navigation, scenarios, page views, keyboard interactions and demos |
| `styles.css` | Token-driven layout, glass surfaces, responsive behavior and dark mode |
| `assets/aurion-mark.svg` | Original brand artwork |
| `assets/marks/*.svg` | Original separate SVG module marks |
| `scripts/export_marks.py` | Source-controlled, reproducible mark exporter |
| `docs/DESIGN_DIRECTION.md` | Design rationale, token and icon rules |
| `docs/AGENCY_OS_HANDOFF.md` | React handoff and safe API wiring checklist |
| `CLAUDE.md` | Instructions for an implementation agent |
| `tests/static_checks.py` | Local static checks without dependencies |

## Source references / skills

These were **studied as methodology or reference**, not executed in this demo, and their content has **not** been vendored:

- [Apple Human Interface Guidelines — Materials](https://developer.apple.com/design/human-interface-guidelines/materials)
- [UI/UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
- [OpenDesign — Frontend UI Engineering](https://open-design.ai/skills/frontend-ui-engineering/)
- [Logo Design Skill](https://github.com/kaankiziltug/logo-design-skill)
- [21st.dev](https://21st.dev/), [React Bits](https://reactbits.dev/), [One Page Love MCP](https://onepagelove.com/mcp)

For Claude Code, after reviewing third-party plugin content:

```text
/plugin marketplace add nextlevelbuilder/ui-ux-pro-max-skill
/plugin install ui-ux-pro-max@ui-ux-pro-max-skill
/plugin marketplace add kaankiziltug/logo-design-skill
/plugin install logo-design@logo-design-skill
```

One Page Love is configured in `.mcp.json` as a documentation-backed MCP definition, but **its connection is not tested** in this sandbox. Verify it locally. Installation and access rights depend on the agent host.

## Tests

```bash
node --check app.js
python3 tests/static_checks.py
```

Full browser-based visual and interaction tests must be completed in an environment that permits local or deployed web navigation. The authoring sandbox blocked local browser navigation; no claim of a passing desktop/mobile browser suite is made.

## Security / public repository warning

Never commit private inventory, host addresses, service tokens, SSH keys, mail credentials, agent traces, live message history or other production secrets here. All connected actions must go through the **existing authenticated Agency OS backend**, not direct browser calls to Proxmox / LiteLLM / Jarvis / mail servers. Check permissions server-side, write audit logs, and require explicit confirmation for sensitive operations.

## Next

This repo is **not** a fork of the production frontend. Use it as the front-end art-direction source for an integration branch in the private Agency OS repository, carefully preserving the real React routes, API models, real-time queries, permissions and tests. See the handoff document for the suggested mapping.
