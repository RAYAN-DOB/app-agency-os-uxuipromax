# Agency OS — Glass Experience

An independent, highly polished **UX/UI concept** for Agency OS. A living interface with Apple-inspired glass navigation, animated ambience, a connected agent constellation and a quiet editorial design language.

> **UI-only prototype** — every status, metric, agent, model, event and infrastructure state is simulated. This repository is not connected to Agency OS or any real API.

## Try it

Open [`index.html`](./index.html) in a recent browser. There is no build step, no backend, no secrets and no `npm install`.

For local development, optionally serve the directory with:

```bash
python3 -m http.server 8080
```

Visit `http://localhost:8080`.

## What works

- 7 navigable sections: overview, agents, missions, AI models, infrastructure, design studio and settings.
- 3 visual themes (Pearl, Midnight, Aurora) saved locally.
- Fluid ambient orbs and living constellation, with reduced-motion support.
- Command palette with `Ctrl+K` / `⌘K`, navigation and actions.
- Creation of local **demo** missions, persisted in `localStorage`.
- Agent-status filtering, notifications and click-through agent details in demo mode.
- Responsive navigation for laptop, tablet and mobile.
- Keyboard-accessible buttons, dialogs and visible focus states.

## Design principles

An original interpretation of optical glass and motion, not an Apple-affiliated product. Important control surfaces may be translucent, while information surfaces prioritize legibility. References: [Apple materials guidelines](https://developer.apple.com/design/human-interface-guidelines/materials), [Awwwards](https://www.awwwards.com/), [Siteinspire](https://siteinspire.com/), [Mobbin](https://mobbin.com/), [One Page Love](https://onepagelove.com/mcp), [21st.dev](https://21st.dev/), [React Bits](https://reactbits.dev/) and [Motion](https://motion.dev/).

## MCP for Claude Code

The `.mcp.json` file declares the public [One Page Love MCP](https://onepagelove.com/mcp/claude-code). Open this directory in Claude Code and verify the MCP connection before asking it to retrieve references. The separate [21st.dev Claude Code plugin](https://github.com/21st-dev/claude-code-plugin) requires installing its plugin and setting your `API_KEY_21ST` environment variable. Do not commit API keys or `.env` files.

Refer to [`CLAUDE.md`](./CLAUDE.md) for project-specific instructions. **No MCP server was invoked during initial authorship**; verified public documentation informed the reference list.

## Next phase

The real Agency OS backend should be connected via a separate secure API gateway with read-only discovery first, scoped permissions, server-side secrets, audit logs and explicit confirmation for state-changing actions. Do not point this prototype at Proxmox, LiteLLM or other production services directly from the browser.