# Claude Code · Agency OS V2 visual handoff

## Mission

Turn the `Atelier Glass` prototype into a real, elegant front-end improvement for **Agency OS** without weakening operational safety. The user specifically wants an unusually good native-feeling application, not an AI-dashboard aesthetic with glowy spheres and star icons.

## First actions

1. Inspect THIS repository to understand the new visual system and its interactions. Read `docs/DESIGN_DIRECTION.md` and `docs/AGENCY_OS_HANDOFF.md`.
2. With permitted access, inspect the live, private Agency OS `services/aicos/orchestrator/ui` React application. Do not assume the deployed backend equals the README snapshot; inspect its current source and API.
3. Create a feature branch in the private application. Do **not** overwrite the production frontend with the static prototype.
4. Make screenshots at desktop and mobile widths, and perform a keyboard + reduced-motion audit on every changed view.

## Reference workflow / skills

- Use **UI/UX Pro Max** to search product-specific patterns and derive a design system; never blindly combine unrelated styles.
- Use **OpenDesign / frontend-ui-engineering** for production-quality component architecture, accessibility, responsive behavior, error/loading/empty states and tests.
- Use **Logo Design Skill** as a process for checking originality, optical balance, monochrome legibility and small-size rendering of the authored SVG symbols. Never copy a trademark logo from its reference library.
- One Page Love, 21st.dev and React Bits are optional inspiration sources; review licenses. Do not load arbitrary untrusted code or run unknown installation scripts with production credentials.
- The third-party skills/MCP were not run by this prototype author. Verify locally.

## Design guardrails

- Navigation and interactive controls may be optical glass; dense data and evidence layers must remain opaque, readable and predictable.
- Apple-like is a quality standard for hierarchy, motion and finish, not permission to copy Apple's branding.
- Use our original marks in `assets/marks/`. Do not use `sparkles`, robots, rockets or emojis as a default icon for agents.
- Reserve red for actual error, amber for attention, green for measured success. **Unknown is not green.**
- Prioritize: what must I decide? what failed? why? what proof? what is safe to do next?
- Every action must have an accessible focus state, proper disabled and busy states, failure explanation, and clear confirmation where risky.
- Reduced-motion, touch target sizes and keyboard navigation are essential.

## Integration safety

- UI only. Never create real mailboxes, authorize Jarvis, move Proxmox resources or send messages from this public demo.
- Preserve existing backend auth and every server-side policy. Never make this public Vercel UI fetch private networks, credentials or tokens.
- Real data should be read via existing authenticated application routes and TanStack Query, not reimplemented through direct fetches to infrastructure.
- For blockers, show cause and permission details; do not claim a task succeeded based solely on a successful HTTP request.
- Require proof of side effects before showing completion, particularly for mail provisioning and SSH actions.
- Before publication: `npm run typecheck`, `npm run test`, `npm run lint`, `npm run build`, visual smoke tests and careful deployment approval in the existing private project.

## Definition of done

The finished application should be delightful, **quieter** than the current interface, more explainable when agents fail, fast on phones, and fully compatible with the real Agency OS routes and APIs. Do not remove any real features during the visual redesign.
