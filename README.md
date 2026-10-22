# nathanael-portfoliov2

Personal portfolio of Nathanael Setiorahardjo: computer science student, AI researcher and Apple Developer Intern.

**Design:** "Nathanael's Workbench", a cute 8-bit drafting table that works like an IDE. See [`CLAUDE.md`](CLAUDE.md) for the design rules.

## Stack

- React 19, React Router 7, Vite 8 (plain JSX)
- Plain CSS with design tokens as CSS variables in `src/index.css`
- [Motion](https://motion.dev) for animation, [cmdk](https://cmdk.paco.me) for the ⌘K palette, [pixelarticons](https://pixelarticons.com) for icons
- Fonts self-hosted with Fontsource: Pixelify Sans, Geist, Geist Mono
- ESLint and a production build, checked on every pull request by GitHub Actions
- Deployed on Vercel, with a preview link on every pull request

## Run it locally

Requires [Node.js](https://nodejs.org/) 22 or newer.

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run lint      # check code style
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Updating content

| To change | Edit |
| --- | --- |
| Name, intro, about text, email, socials | `src/data/profile.js` |
| Projects (each gets a page at `/projects/<id>`) | `src/data/projects.js` |
| Leadership roles | `src/data/leadership.js` |
| Skills and toolbox | `src/data/skills.js` |
| Pages in the tabs and tab bar | `src/data/navigation.js` and `src/router.jsx` |
| Photos and thumbnails | `src/assets/` (resize to under ~300 KB first) |
| CV | `public/Nathanael_Setiorahardjo_CV.pdf` (keep the file name) |
| Colours, fonts, spacing | CSS variables at the top of `src/index.css` |

To add a project, copy an entry in `src/data/projects.js`, give it a new `id`, and import its screenshot at the top of the file. No screenshot yet? Use `illustration: 'vit' | 'lane' | 'xray'` for now (Lane-Guard and TUBRIS use this).

## Project layout

```
src/
  router.jsx       every route
  pages/           one file per page
  components/
    layout/        top bar, status/tab bar, ⌘K palette, loader, footer, providers
    home/          hero and the workbench diagram
    projects/      project card, media and pixel illustrations
    leadership/    the build log
    ui/            icons, mascot, section header
  data/            site content, kept out of components
  hooks/           small shared hooks (theme, toast, palette, page title)
  context/         React contexts
  assets/          images imported by data files
public/            files served as-is (CV, favicon)
vercel.json        sends every path to index.html so deep links work
```

## Workflow

`main` always matches the live site. Every change goes through a branch and a pull request.

1. `git switch main && git pull`
2. `git switch -c <type>/<short-description>`, e.g. `feat/retro-loading-screen`
3. Make the change; run `npm run lint` and `npm run build`
4. Commit with [Conventional Commits](https://www.conventionalcommits.org/): `feat: add retro loading screen`
5. Push, open a pull request, wait for the green check, then squash and merge

Branch types: `feat`, `fix`, `content`, `style`, `refactor`, `chore`, `docs`.

Rules for working on this project with Claude Code are in [`CLAUDE.md`](CLAUDE.md).

## License

Source code: [MIT](LICENSE). Photos, CV and written content: © Nathanael Setiorahardjo, all rights reserved.
