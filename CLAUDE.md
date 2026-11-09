# Agency OS — UX/UI Pro Max

## Mission
Create exceptional web interfaces: quiet, luminous, alive. Inspiration: Apple Liquid Glass, selected Awwwards, Siteinspire, Mobbin, One Page Love, 21st.dev, React Bits, Motion and shadcn/ui.

## Ground rules
- **Do not copy proprietary designs** or reuse visual assets without permission. Analyze composition, spacing, typography and interaction patterns, then create original implementations.
- **Research before generating**: use the configured One Page Love MCP for real-world design references. If unavailable, say so; do not fabricate search results.
- If the 21st.dev plugin/MCP is installed and authenticated locally, search suitable components before coding. Inspect component licenses, dependency versions, accessibility and bundle size first.
- Avoid stereotypical AI dashboard tropes, excessive violet gradients, unnecessary animations, inaccessible translucent controls or visual clutter.
- Give navigation/controls a liquid-glass treatment; prefer legible surfaces for data. Support reduced motion and mobile layouts.
- Maintain a clear separation between this demo and any Agency OS production API. Do not embed access tokens, server IPs, credentials or other production secrets.
- Changes must keep demo interactions working: routing, search palette, themes, settings, custom mission creation, filtering and responsive layout.

## Current implementation
This first release is intentionally **dependency-free HTML, CSS and JavaScript**. The site can be deployed as a static site or opened locally. All displayed status, agent activity and metrics are illustrative, not live data. Only personal demo missions and display preferences are stored in browser localStorage.

## Roadmap (only after design approval)
- Optional migration to React + TypeScript + Motion + shadcn/ui, preserving visual identity.
- Typed read-only adapters for Agency OS status and model catalog, with an auth gateway, never direct privileged browser calls.
- Real user permissions, streaming events, observability and isolated integration tests.
- Visual regression tests with Playwright in a controlled runner; Lighthouse accessibility/performance checks.

## Recommended MCP setup
One Page Love is configured by `.mcp.json` for compatible Claude Code installations. Confirm with `claude mcp list` and `/mcp`.

To enable the **21st.dev** Claude Code plugin, obtain an API key on `https://21st.dev/settings/api-keys`, export it as `API_KEY_21ST` in the local shell (never commit it), then inside Claude Code:

```
/plugin marketplace add 21st-dev/claude-code-plugin
/plugin install 21st@21st
```

Restart Claude Code and verify the plugin in `/mcp`. Search can be free, code retrieval is rate-limited by the provider's plan. These integrations are configuration suggestions, **not proof that a remote MCP was used to author this V1**.