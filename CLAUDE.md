# Portfolio V2 – rules for Claude

Personal portfolio for Nathanael Setiorahardjo: CS student and AI researcher, full-stack builder, chairman of the BDM orchestra.

## Stack

- React 19 + React Router 7 (data router in `src/router.jsx`) + Vite 8, plain JSX (no TypeScript).
- Styling: plain CSS in `src/index.css`. All colours, spacing and type sizes are CSS variables on `:root` (dark theme overrides on `[data-theme='dark']`). No Tailwind.
- Routes: `/`, `/projects`, `/projects/:id`, `/leadership`, `/skills`, `/contact`, plus a 404. Add a page in `src/router.jsx` and `src/data/navigation.js`.
- Libraries: `motion`, `cmdk` (⌘K palette, lazy-loaded), `pixelarticons` (icons, import one file per icon in `src/components/ui/Icon.jsx`), Fontsource (Pixelify Sans, Geist, Geist Mono).
- Hosting: Vercel. `vercel.json` rewrites every path to `index.html` so deep links work.

## Design

- For any UI work, use the `portfolio-design` skill plus `studio-frontend-design` (or Anthropic's `frontend-design` plugin in Claude Code).
- Concept: **Nathanael's Workbench**, a cute 8-bit drafting table that works like an IDE. 8-bit is the personality (pixel headings, mascot, icons), the blueprint holds the content (spec-sheet cards on a grid), the IDE is the navigation (file tabs, status bar, ⌘K), Apple is the feel (springs, frosted bars, generous spacing).
- Rule: surfaces are clean and modern, details are pixel. Body text, cards and photos are never pixelated.
- Palette: drafting film `#EEF3F8`, ink `#14213D`, blueprint blue `#2F5BEA` (the only accent that means "clickable"), sticky yellow `#FFC94A` and coral `#FF7A8A` for small delights only, never as text colour.
- Fonts: Pixelify Sans for display titles only; Geist for reading; Geist Mono for IDE chrome (tabs, status bar, meta, tags).
- Signature per page: home = workbench diagram; projects = card morphs into its spec sheet; leadership = build log; everywhere = ⌘K palette.
- Phone: the IDE status bar becomes the bottom tab bar. Test at 375 px.
- One signature interaction per page; everything around it stays calm.
- Reference screenshots live in `design-refs/`. Look at them before designing a new section.

## Motion

- Motion (`motion/react`) for UI state: toast, tab indicators, filter re-layout, diagram wires, loader.
- Page changes and the card-to-spec-sheet morph use the browser View Transitions API (`viewTransition` on links, `view-transition-name` styles). It degrades to a plain page change where unsupported.
- GSAP is not installed. Add it only for scroll-driven or text choreography, and record it here. No third animation library.
- Pixel things move in steps (`steps()`), UI things move with springs.
- Animate `transform` and `opacity` only. Always honour `prefers-reduced-motion`.
- UI durations 150–400 ms, ease-out for entrances.

## Code

- Content lives in `src/data/*.js` (profile, projects, leadership, skills, navigation), never hard-coded in components.
- Never invent personal facts (roles, dates, titles, results). Use only what is in `src/data/` or what Nathanael confirms.
- Projects without a real screenshot use `illustration` (`vit`, `lane`, `xray`) instead of `image`; drawings live in `src/components/projects/ProjectIllustration.jsx`.
- Effects copied from outside (e.g. React Bits JS-CSS variants) go in `src/components/effects/` with a comment linking the source.
- Keep images under ~300 KB; resize before adding to `src/assets/`.
- Run `npm run lint` and `npm run build` before calling work done.
- When you add a library or change a rule, update this file in the same change.

## Git

- Repo: `NathanaelSetiorahardjo/nathanael-portfoliov2` (public). `main` = live site; never commit to it directly.
- Branch per change: `feat/`, `fix/`, `content/`, `style/`, `refactor/`, `chore/`, `docs/` + kebab-case description.
- Conventional Commits (`feat: add retro loading screen`); squash-merge PRs after the CI check (lint + build) is green.
