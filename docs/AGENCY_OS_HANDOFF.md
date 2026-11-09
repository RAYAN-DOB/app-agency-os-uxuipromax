# Handoff to the private Agency OS application

This document describes a safe UI migration. The **private** `RAYAN-DOB/agency-os` repository already contains a React 19 + TypeScript + Vite + TanStack Query + Tailwind command center in `services/aicos/orchestrator/ui` with actual auth, SSE and routes. This separate static public repository is only the visual UX concept.

## Route equivalence (concept → production)

| UX concept | Existing frontend | Data source through authenticated backend |
| --- | --- | --- |
| Overview | `/tableau-de-bord` | `useOverview`, `useTasks`, `useApprovals`, `useAgents` |
| Director | `/` | `useMessages`, `api.chat`, existing turn tracking |
| Missions | `/projets`, `/projets/:id` | `useObjectives`, `useObjective` |
| Approvals | `/validations`, `/validations/:id` | `useApprovals`, `useApproval`, existing reviewed mutations |
| Execution timeline | `/activite` and task detail | `useEvents`, per-task runs & evidence |
| Agents | `/agents` | `useAgents` and presence from server |
| Skills | `/competences` | `api.skillsCatalog`, `skillsDiscover`, `skillsInspect` |
| Models | `/modeles` | `useModels`, `useSpend` |
| Brain | `/cerveau` | Existing Brain OS APIs |
| Supplier OS | `/supplier-os` | Existing supplier routes, human approvals |
| Jarvis & access | `/acces` | Existing `useQuery(['acces'])` / access mutations |
| Infrastructure | `/infrastructure` | `useServices`, `useProxmox` |
| Memory | `/memoire` | Existing memory backend |
| Design studio | new internal design system view | Pure local design tokens + components |
| Preferences | `/parametres` | Existing theme, session and settings |

The private app also has important pages that must be retained: enterprise/business, autonomy, platform, code/Git, projects/tasks detail, settings and dedicated supplier views. **Do not delete them or silently omit their navigation.**

## Technical approach

1. Inspect current private HEAD and confirm route/API contracts. This document is a point-in-time map.
2. In a new private feature branch, create design tokens (`styles`/Tailwind), an original `BrandMark` and semantic navigation icons, consistent buttons/pills/sheets and an accessible responsive shell.
3. Convert individual prototype views from vanilla JS into typed React components and map **existing** TanStack Query hooks. Keep `Protected`, access control and query invalidations.
4. Begin with shell, dashboard, approvals, Director and Jarvis access. Prioritize failure and permission UX because those were user-reported pain points.
5. Gradually migrate other modules; display loading/error/offline/empty states with server truth.
6. Test real flows in staging with harmless read-only actions, then safely reviewed mutations (when explicitly permitted). Inspect SSE, auth, timeouts, mobile behavior, keyboard navigation and theme persistence.
7. Release through the private project CI/CD. Keep rollback and do not auto-promote unsafe changes.

## Failure-first product requirement

For any command which produces effects (e.g. account provisioning), the user needs:

- Intent and exact target (masked or server-scoped)
- Worker identity and authorization scope
- Capability-check result **before** an attempt
- Attempts, idempotency key and correlated event records
- Service or tool error as a concise, non-secret reason
- Whether the action was attempted, committed and independently verified
- Safe retry guidance when an access dependency is resolved
- Human validation at appropriate risk level

A 200 response from an LLM or a completed orchestration turn is not proof that an external service was modified. The backend must perform actual verification; UX displays its evidence, not guessed success.

## Security and privacy constraints

The design repo is public. **Never** copy secrets, private hostnames, mailboxes, credentials, internal logs, SSH output, personal user data, or actual incident payloads here. No sensitive actions from the browser. Permission checks must be server-side. Preserve existing feature flags and fallback workflows. Keep log redaction in mind when designing error sheets.

## Quality gates

- Visual comparison at 1440×900, 1024×768, 390×844 and zoom 200%.
- Keyboard-only navigation through menus, dialogs, command palette and forms; focus visible & restored.
- WCAG color contrast testing for content labels and state badges.
- `prefers-reduced-motion` and manual motion preference.
- Empty/loading/error/offline views, including optimistic state rollback for actual mutations.
- Test screenshots and user review before replacing the live Command Center.
