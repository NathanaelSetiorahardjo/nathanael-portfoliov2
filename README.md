# portfolio

Personal portfolio of Nathanael Setiorahardjo: computer science student, AI researcher and Apple Developer Intern.

**Live site:** _coming soon_

## Stack

- React 19, React Router 7, Vite 8 (plain JSX)
- Plain CSS with design tokens as CSS variables in `src/index.css`
- ESLint, checked on every pull request by GitHub Actions

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
| Projects | `src/data/projects.js` |
| Photos and thumbnails | `src/assets/` (resize to under ~300 KB first) |
| CV | `public/Nathanael_Setiorahardjo_CV.pdf` (keep the file name) |
| Colours, fonts, spacing | CSS variables at the top of `src/index.css` |

## Project layout

```
src/
  components/   one file per section or page
  data/         site content, kept out of components
  assets/       images imported by components
public/         files served as-is (CV, favicon)
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
