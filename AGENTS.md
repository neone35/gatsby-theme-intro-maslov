# AGENTS.md

Guidance for coding agents operating in this repository.

## Repository Scope

- The actual app/theme code lives in `gatsby-theme-intro-maslov/`.
- The repository root currently contains this guide plus media/design assets.
- Run Yarn commands from `gatsby-theme-intro-maslov/` unless noted otherwise.
- Yarn workspaces are used: `site` and `gatsby-theme-intro-maslov`.

## Tooling and Stack

- Gatsby 5 + React 18.
- JavaScript (not TypeScript) in current source.
- Tailwind CSS + PostCSS + styled-components.
- PropTypes used for runtime component prop validation.
- Prettier is configured and should be treated as source-of-truth formatting.

## Cursor/Copilot Rules

- No `.cursorrules` file found.
- No `.cursor/rules/` directory found.
- No `.github/copilot-instructions.md` file found.
- If any of these are added later, treat them as higher-priority project rules.

## Build, Develop, Clean Commands

Run these from `gatsby-theme-intro-maslov/`:

- `yarn develop` - start the example site in development mode.
- `yarn build` - build the `site` workspace for production.
- `yarn clean` - clean Gatsby cache/artifacts in the `site` workspace.

Workspace-specific commands:

- `yarn workspace site develop` - run only the site workspace dev server.
- `yarn workspace site build` - build only the site workspace.
- `yarn workspace site clean` - clean only the site workspace.
- `yarn workspace gatsby-theme-intro-maslov develop` - develop theme workspace.
- `yarn workspace gatsby-theme-intro-maslov build` - build theme workspace.
- `yarn workspace gatsby-theme-intro-maslov clean` - clean theme workspace.
- `yarn workspace gatsby-theme-intro-maslov serve` - serve production build.

## Lint, Format, and Test Commands

Current status:

- No ESLint config found.
- No test framework config found (no Jest/Vitest setup).

Available formatting command:

- `yarn workspace gatsby-theme-intro-maslov format`

Agent expectations:

- Use Prettier formatting before finalizing large edits.
- Prefer narrow verification (targeted build or workspace command) over full rebuilds.
- Do not claim tests passed unless you actually executed them.

## Single-Test Guidance (Important)

There is no runnable single-test command today because tests are not configured.

If test tooling is added, prefer these patterns:

- Jest (single file): `yarn test path/to/test-file.test.js`
- Jest (single test name): `yarn test -- --testNamePattern="name fragment"`
- Vitest (single file): `yarn test path/to/test-file.test.js`
- Vitest (single test name): `yarn test -- -t "name fragment"`

When adding new tests, also add explicit scripts in `package.json` so agents can run them consistently.

## Code Style Guidelines

### Formatting

- Follow `gatsby-theme-intro-maslov/.prettierrc`.
- Key settings: no semicolons, double quotes, trailing commas `es5`, `tabWidth: 2`.
- Use LF line endings.
- Keep files ASCII unless file already requires Unicode.

### Imports

- Keep imports at top of file.
- Prefer grouping in this order:
  1. React/Gatsby imports.
  2. Third-party packages.
  3. Local project imports.
  4. Style imports.
- Prefer relative imports that match existing codebase conventions.
- Keep one import per line unless destructuring from same module.

### JavaScript and Types

- Use modern ES syntax (`const`/`let`, arrow functions, destructuring).
- Prefer `const`; use `let` only when reassignment is needed.
- This codebase currently uses PropTypes, not TypeScript.
- Add/update PropTypes when component props change.
- Keep GraphQL fragment fields aligned with component data usage.

### React Conventions

- Prefer functional components.
- Keep components focused and composable.
- Destructure props in function signatures where clear.
- Avoid unnecessary local state; derive values from props/data when possible.
- Use semantic HTML and accessible attributes (`alt`, labels, meaningful headings).

### Naming Conventions

- `camelCase` for variables/functions.
- `PascalCase` for React components and exported type-like objects (e.g., `ProfileType`).
- File names are generally kebab-case in components (`main-content.js`, `social-links.js`).
- Keep GraphQL fragment/query names descriptive and consistent.

### Error Handling and Resilience

- Validate optional data before rendering deeply nested fields.
- Guard against missing CMS/content data where reasonable.
- In async/node APIs, use `try/catch` when failures are plausible and actionable.
- Prefer failing with clear error messages over silent failures.

### Gatsby-Specific Practices

- Respect existing theme options: `basePath`, `contentPath`, `showThemeLogo`, `theme`.
- Keep `createPages` and source-node logic minimal and deterministic.
- Do not fetch unnecessary GraphQL fields.
- Keep YAML content schema compatibility to avoid breaking existing sites.

## File and Change Hygiene

- Make minimal, scoped changes for each task.
- Do not refactor unrelated files opportunistically.
- Preserve public APIs and theme option names unless task explicitly changes them.
- Update docs when behavior/configuration changes.
- Never commit secrets; treat `.env` values and access tokens as sensitive.

## Validation Checklist for Agents

Before finishing a change, run through:

- Project command executed from correct directory (`gatsby-theme-intro-maslov/`).
- Formatting applied (or verified) for touched files.
- Relevant build/dev command run for modified area when feasible.
- PropTypes/data queries updated consistently.
- No unrelated file churn introduced.
- Notes included for anything not verified locally.

## Commit Message Guidance

Use conventional commits:

- `feat:` new functionality.
- `fix:` bug fixes.
- `docs:` documentation changes.
- `refactor:` internal restructuring without behavior change.
- `style:` formatting-only changes.
- `chore:` tooling/maintenance.
- `test:` test additions/changes.

Keep subject lines concise and imperative.
