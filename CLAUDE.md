# Portfolio V2 – rules for Claude

Personal portfolio for Nathanael Setiorahardjo: CS student and AI researcher, full-stack builder, chairman of the BDM orchestra.

## Stack

- React 19 + React Router 7 (data router in `src/router.jsx`) + Vite 8, plain JSX (no TypeScript).
- Styling: plain CSS in `src/index.css`. All colours, spacing and type sizes are CSS variables on `:root` (dark theme overrides on `[data-theme='dark']`). No Tailwind.
- Routes: `/`, `/projects`, `/projects/:id`, `/leadership`, `/skills`, `/contact`, plus a 404. Add a page in `src/router.jsx` and `src/data/navigation.js`.
- Libraries: `motion`, `cmdk` (⌘K palette, lazy-loaded), `matter-js` (toolbox physics only, lazy-loaded when the toolbox scrolls into view), `pixelarticons` (icons, import one file per icon in `src/components/ui/Icon.jsx`), Fontsource (Geist, Geist Mono).
- Hosting: Vercel. `vercel.json` rewrites every path to `index.html` so deep links work.

## Design

- For any UI work, use the `portfolio-design` skill plus `studio-frontend-design` (or Anthropic's `frontend-design` plugin in Claude Code).
- Concept: **the portfolio is a code editor**, kept simple. Each page is a file (`nathanael.ts`, `projects/<id>.md`, `leadership.log`, `skills.json`, `contact.md`). Desktop shows the full editor: title bar, activity bar, explorer (file tree), open-file tabs, breadcrumb, line-number gutter, status bar. Phone shows a title bar and a bottom tab bar.
- Retro lives in the details only: pixel icons, the pixel avatar, the yellow block caret, pixel drawings for projects without photos. Never pixel fonts or pixel surfaces (the earlier "Workbench" version felt too toy-like).
- Palette: light editor `#FBFCFE` on chrome `#EEF1F6`, ink `#182033`, blue `#2F5BEA` (the only accent that means "clickable", also the status bar), yellow `#FFC94A` and coral `#FF7A8A` for small details only. Syntax colours are tokens (`--tok-kw`, `--tok-str`, `--tok-num`, `--tok-prop`) and must pass AA. Dark theme is a midnight editor (`#0F1729`).
- Fonts: Geist for headings and reading; Geist Mono for code and editor chrome (tabs, explorer, status bar, tags).
- Signature per page: home = code window that types out `const nathanael = {…}` from `heroCode` in `src/data/profile.js`, then a terminal; projects = card morphs into its `.md` page; leadership = git-style log; skills = JSON; everywhere = explorer, tabs and ⌘K.
- Phone: test at 375 px. Full editor from 960 px.
- Companion: **Molly**, Nathanael's real black and white cat, as an 8-bit sprite (`src/components/molly/`). Sits under CV.pdf at the bottom of the explorer on desktop and on the tab bar on phones. Blinks, swishes the tail, watches the pointer, naps after 40 s idle; a click shows the next line from `src/data/molly.js` (tips with shortcut buttons). Molly only says things that are true; edit lines there. Avoid gendered pronouns for Molly in copy.
- One signature interaction per page; everything around it stays calm.
- Reference screenshots live in `design-refs/`. Look at them before designing a new section.

## Motion

- Toolbox: chips drop into a physics pit (matter-js) and can be dragged and thrown. The loop stops when the chips rest or scroll off-screen; with reduced motion it is a plain list.
- Motion (`motion/react`) for UI state and reveals: section-title selection sweep, leadership branch line drawn on scroll (`useScroll`), card tilt and spotlight (mouse only), phone tab-bar pill, hero typing and terminal, tabs opening/closing, explorer collapse and folder toggle, active indicators (`layoutId`), filter re-layout, scroll reveals (`Reveal`, once only), toast.
- Page changes (only the page slides; the editor chrome stays still) and the card-to-detail morph use the browser View Transitions API (`viewTransition` on links, `view-transition-name` styles). It degrades to a plain page change where unsupported.
- GSAP is not installed. Add it only for scroll-driven or text choreography, and record it here. No third animation library.
- Pixel things move in steps (`steps()`, e.g. the caret and avatar blink), UI things move with springs.
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
