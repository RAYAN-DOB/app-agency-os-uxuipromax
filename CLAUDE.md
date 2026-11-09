# Handoff — Agency OS / Atelier Glass V1.5

This is a standalone public visual prototype, NOT the production frontend. The user strongly prefers V1. Do not replace its light, spacious composition with busy dashboards or generic AI neon aesthetics.

## Product mapping

The production Agency OS frontend is a React 19 / TypeScript / Vite application in `RAYAN-DOB/agency-os/services/aicos/orchestrator/ui/` with real pages, `src/lib/api.ts`, React Query hooks, authentication, SSE updates, approvals, agents, missions, models, infrastructure, skills and Jarvis access control.

- `overview` -> dashboard / overview, pending approvals, active tasks, spend, agents, services
- `director` -> `pages/chat.tsx`, streaming/thread and task decisions
- `missions` -> `pages/projects.tsx` and `pages/tasks.tsx`
- `agents` -> `pages/agents.tsx` and realtime presence
- `models` -> `pages/models.tsx` / spend queries
- `infrastructure` -> `pages/infra.tsx` / Gatus / Proxmox
- `approvals` -> `pages/approvals.tsx` with mandatory human confirmation
- `skills` -> `pages/skills.tsx` including design and quality skill inspection
- `jarvis` -> `pages/acces.tsx` (time-bounded, host-scoped authorization)
- `supplier` -> `pages/supplier-os.tsx`

## Migration strategy

1. Keep the original Agency OS repository and permissions untouched until work is tested.
2. Convert the V1.5 CSS tokens and layout to React components in an isolated feature branch; do not paste the simulated `app.js` over the production logic.
3. Reuse existing API contracts and React Query hooks, including loading, error, offline and no-data states. Never present a fabricated positive status when sources are unavailable.
4. The portrait and meadow are only decorative and should have no security/data meaning. Consider allowing them to be disabled on reduced-motion or low-bandwidth devices.
5. Fully audit contrast, mobile keyboard, screen readers and performance; check Chromium/WebKit/Firefox where possible.
6. Do not attempt mailbox creation or any system write from the public demo. The real app must evaluate Jarvis permissions and require human approval.
7. Do not ship to real production without the user's explicit approval and full test coverage.

## Design invariants

- V1 simplicity, vivid sky, living green landscape, dark translucent window and natural gradients
- Never use cheesy robot avatars, AI sparkle branding or generic purple gradients
- High-quality typography, gentle movement, layered depth, subtle tactile buttons
- State colours are semantic, primary actions are obvious, and real metrics must carry provenance
- Every failure view should show *what failed, why, evidence and next safe action*
- No screenshot-as-UI: recreate interaction with HTML, CSS and accessible components

## References and optional tools

For skill research and implementation: UI/UX Pro Max, frontend-design, Logo Design Skill, 21st.dev, React Bits, Playwright. Obtain actual packages only after checking licenses and compatibility. The presence of this note does NOT mean the MCPs or skills are installed or executed.
