<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ByteSpace migration conventions

## Confirmed template baseline

- This repository is the initialized Next.js 16.3.8 App Router project, with React 19.2.8, TypeScript 5, Tailwind CSS v4, and npm (`package-lock.json`). Preserve the existing dependencies, lockfile, and scripts; do not scaffold or install another stack.
- Routes and the root layout live in `src/app/`. `src/app/layout.tsx` imports `src/app/globals.css`, which uses the compiled Tailwind v4 pipeline. The starter page remains until its migration task.
- The root layout loads Poppins weights 300–700 through `next/font/google` and applies `font-body` globally. `src/app/globals.css` loads the unchanged Satoshi regular/italic variable WOFF2 files with weights 300–900 and `font-display: swap`. Use `font-heading` for Poppins, `font-body` or `font-sans` for Satoshi, and the 12 `text-heading-*`, `text-body-*`, and `text-label-*` roles from the global theme. Type roles define size, line height, and weight; pair them with the appropriate font utility.
- `src/app/globals.css` exposes the exact ByteSpace neutral, primary, and secondary palettes through Tailwind v4 `@theme static`. Shared `--layout-grid-*` and `--size-*` variables live in `:root`; consume them with utilities such as `w-[var(--size-course-card-width)]`. The universal reset is in `@layer base` so utilities can override it. Keep these definitions global and authoritative.
- The global stylesheet also owns the exact portrait drop shadows, ornament mask, and testimonial/professional glow classes copied from `../styles.css`. Reuse these classes without replacing their filters or gradients with approximate utilities. Ornament wrappers use `card-section-decoration` with `--decoration-mask-image`; their `card-section-decoration-mask` child uses `--decoration-mask-color` and hard-light blending. Keep both standard and WebKit mask properties and apply the asset alpha only on the wrapper.
- Shared primitives live in `src/components/shared/`. `Canvas` reproduces the source's relative, full-height, centered container capped by `--layout-grid-canvas-width`. Place `GridBackdrop` before `Canvas` inside the owning full-width, relative blue section so the grid stays aligned to the viewport. Its required `hero`/`auth` variant preserves neutral-50/white strokes, 120px cells, 2px paths, and 12% opacity. React `useId` gives each SVG pattern its own ID without a client boundary; keep the numeric SVG pattern geometry consistent with the global 120px grid-step token. Section height, background, and clipping belong to the section.
- `BrandLogo` preserves the 171×37px link and original SVG, with required `hero` (Poppins/light), `auth` (Satoshi/light), and `footer` (Satoshi/dark) wordmark variants. Its parent owns placement; retain the source `href="#"` and accessible home label. `SearchIcon`, `CourseRatingStarIcon` (24px lime), and `StudentRatingStarIcon` (16px blue) preserve their exact source paths, view boxes, and decorative `aria-hidden` attributes. Keep one-off SVGs local to their owning sections.
- `Ornament` takes a finite asset `source`, a matching exact `preset`, and a `neutral-50`/`secondary-400` tint token. Its presets preserve source wrapper dimensions, image/tint oversizing and offsets, and auth image max-width behavior. Position and rotate its parent, including `origin-top-left rotate-180` for compact spirals. Only the isolated wrapper is masked; its children are the unchanged PNG followed by the hard-light tint span. Keep `alt=""` and `aria-hidden`, and do not mask the children again or substitute optimized image output.
- Read the relevant installed guides in `node_modules/next/dist/docs/` before changing Next.js code. Preserve the generated rules above.

## Sources and paths

- Read [`../AGENTS.md`](../AGENTS.md) and [`../spec/README.md`](../spec/README.md), including its linked contract, inventory, architecture, typography, design-token, and branch/PR instructions, before migration work.
- The static sources are outside this repository: `../index.html`, `../login.html`, `../resgiter.html`, `../styles.css`, `../scripts.js`, and `../assets/`. Keep them intact and use their exact content, layout, assets, and implemented behavior.
- Target paths in the specs are relative to this repository. The complete static asset tree is copied unchanged into `public/assets/`, with `/assets/...` URLs. Preserve filenames, case, nested directories, font files, and licenses; reference public URLs rather than importing display assets into JavaScript bundles. The registration route will be `/register`, despite the source filename typo.
- `.gitattributes` exempts the supplied Satoshi web README and CSS from whitespace checks so their original bytes stay intact. Finder `.DS_Store` metadata remains ignored by Git.
- Use the existing App Router, TypeScript, and compiled Tailwind setup. Do not introduce the Tailwind Play CDN, load the legacy script, invent UI or behavior, or add dependencies without authorization. Follow the shared architecture and global token prerequisites in the specs.

## Task and Git workflow

- Run all Git and GitHub commands inside `bytespace-dointech/`; never run them in the parent static-source repository.
- Execute one numbered task at a time. From clean, updated `origin/main`, create a fresh `bytespace-<short-slug>` branch. Per the user's naming instruction, branch names must never contain `codex` or `task`; this overrides the conflicting branch pattern in `../AGENTS.md`.
- Run each task's required checks and `git diff --check`, commit only its scoped changes with a human readable conventional commit subject, push with `git push`, and open a PR against `main` using `gh pr create`. This overrides the numbered commit subject pattern in the parent specs. Update these instructions when a task changes structure, tooling, or behavior.
- Use conventional commit PR titles and short, natural descriptions covering the change and checks. Do not mention agents, AI, or generated content in PR titles or descriptions.
- Stop after opening the PR. The user must merge it; when the user says the PR is merged, rely on that confirmation, switch to `main`, run `git pull --ff-only origin main`, and create the next branch. Do not run `gh pr view` to recheck their confirmation. Do not merge PRs or push directly to `main`.
- Foundation tasks 01–04 each require their own merged PR before page or component work begins. Follow the numbered task checks; the template provides `npm run build` and `npm run lint`, and TypeScript can be checked with `npx tsc --noEmit` after route types are generated.
- Per the user's testing preference, do not start the app or open a browser for checks. Run compilation and static checks, then report the implementation for the user to test rendering and behavior.
