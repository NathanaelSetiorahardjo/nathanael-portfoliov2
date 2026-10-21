# Portfolio V2 – rules for Claude

Personal portfolio for Nathanael Setiorahardjo: CS student and AI researcher, full-stack builder, chairman of the BDM orchestra.

## Stack

- React 19 + React Router 7 + Vite 8, plain JSX (no TypeScript).
- Styling: plain CSS in `src/index.css`. All colours, spacing and type sizes are CSS variables on `:root`. No Tailwind.
- Routes: `/`, `/projects`, `/leadership`, `/skills`, `/contact`.

## Design

- For any UI work, use the `portfolio-design` skill plus `studio-frontend-design` (or Anthropic's `frontend-design` plugin in Claude Code).
- Concept: **not chosen yet**. Once picked, write it here in one line and keep every page true to it.
- One signature interaction per page; everything around it stays calm.
- Fonts: pick distinctive ones for the concept. Never Inter, Roboto or Arial.
- Reference screenshots live in `design-refs/`. Look at them before designing a new section.

## Motion

- Motion (`motion/react`) for UI state, page transitions, layout morphs and drag.
- GSAP + `@gsap/react` (`useGSAP`) only for scroll-driven or text choreography. No third animation library.
- Animate `transform` and `opacity` only. Always honour `prefers-reduced-motion`.
- UI durations 150–400 ms, ease-out for entrances.

## Code

- Content lives in `src/data/*.js`, never hard-coded in components.
- Effects copied from outside (e.g. React Bits JS-CSS variants) go in `src/components/effects/` with a comment linking the source.
- Keep images under ~300 KB; resize before adding to `src/assets/`.
- Run `npm run lint` and `npm run build` before calling work done.
- When you add a library or change a rule, update this file in the same change.

## Git

- Repo: `NathanaelSetiorahardjo/nathanael-portfoliov2` (public). `main` = live site; never commit to it directly.
- Branch per change: `feat/`, `fix/`, `content/`, `style/`, `refactor/`, `chore/`, `docs/` + kebab-case description.
- Conventional Commits (`feat: add retro loading screen`); squash-merge PRs after the CI check (lint + build) is green.
