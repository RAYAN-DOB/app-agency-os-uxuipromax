# Agency OS — Atelier Glass V1.5

A standalone **interactive UI concept** for the Agency OS Command Center, based on the approved V1 direction and the natural-glass visual references. The public demo intentionally has **no backend connection**, no credentials and no production data.

## Run locally

```bash
python3 -m http.server 5173
# http://localhost:5173
```

No npm dependencies, no build step. Static HTML/CSS/JavaScript, compatible with Vercel static deployments.

## Features

- Cinematic sky / meadow hero and an accessible smoked-glass Command Center
- Responsive desktop and mobile navigation
- Real interactive views: Overview, Director (local scripted demo only), Missions, Agents, Models, Infrastructure, Approvals, Skills, Jarvis, Supplier OS, Settings
- Search via Ctrl+K / Cmd+K, mission details, approval explanatory sheets, status filter and local ambient preferences
- Respects `prefers-reduced-motion`; clear demo badges and graceful empty/offline status
- Original SVG brand mark, local optimized WebP assets derived from the user's concept artwork

## Safety and handoff

No API calls are performed. No credentials, infrastructure identifiers or private repository code are included. Example task statuses and counts are explicitly fictional. Controls such as authorization, rerun, approval and account creation do not execute production actions.

For production, migrate components into `RAYAN-DOB/agency-os/services/aicos/orchestrator/ui`, preserving the existing authentication, routes, access rights, React Query, SSE and authorization gates. See [CLAUDE.md](CLAUDE.md).

## Visual references

The landing and dashboard visual art direction follows the reference images approved by the user: luminous outdoors, editorial typography, smoked glass and cinematic product UI. The typography can fall back to system fonts when Google Fonts is unavailable.
