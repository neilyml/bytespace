<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ByteSpace migration conventions

## Confirmed template baseline

- This repository is the initialized Next.js 16.3.8 App Router project, with React 19.2.8, TypeScript 5, Tailwind CSS v4, and npm (`package-lock.json`). Preserve the existing dependencies, lockfile, and scripts; do not scaffold or install another stack.
- Routes and the root layout live in `src/app/`. `src/app/layout.tsx` imports `src/app/globals.css`, which uses the compiled Tailwind v4 pipeline. The starter UI and Geist font setup remain the task 01 baseline.
- Read the relevant installed guides in `node_modules/next/dist/docs/` before changing Next.js code. Preserve the generated rules above.

## Sources and paths

- Read [`../AGENTS.md`](../AGENTS.md) and [`../spec/README.md`](../spec/README.md), including its linked contract, inventory, architecture, typography, design-token, and branch/PR instructions, before migration work.
- The static sources are outside this repository: `../index.html`, `../login.html`, `../resgiter.html`, `../styles.css`, `../scripts.js`, and `../assets/`. Keep them intact and use their exact content, layout, assets, and implemented behavior.
- Target paths in the specs are relative to this repository. Later asset work copies unchanged files into `public/assets/`, with `/assets/...` URLs. The registration route will be `/register`, despite the source filename typo.
- Use the existing App Router, TypeScript, and compiled Tailwind setup. Do not introduce the Tailwind Play CDN, load the legacy script, invent UI or behavior, or add dependencies without authorization. Follow the shared architecture and global token prerequisites in the specs.

## Task and Git workflow

- Run all Git and GitHub commands inside `bytespace-dointech/`; never run them in the parent static-source repository.
- Execute one numbered task at a time. From clean, updated `origin/main`, create a fresh `codex/bytespace-task-NN-<short-slug>` branch, following the branch naming required by `../AGENTS.md`.
- Run each task's required checks and `git diff --check`, commit only its scoped changes with `port(NN): ...`, push with `git push`, and open a PR against `main` using `gh pr create`. Update these instructions when a task changes structure, tooling, or behavior.
- Stop after opening the PR. The user must merge it; verify the previous PR is merged with `gh pr view` and fast-forward local `main` to updated `origin/main` before starting the next task. Do not merge PRs or push directly to `main`.
- Foundation tasks 01–04 each require their own merged PR before page or component work begins. Follow the numbered task checks; the template provides `npm run build` and `npm run lint`, and TypeScript can be checked with `npx tsc --noEmit` after route types are generated.
