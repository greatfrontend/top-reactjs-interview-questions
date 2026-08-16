<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, but it invokes Vite through `vp dev` and `vp build`.

## Vite+ Workflow

`vp` is a global binary that handles the full development lifecycle. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

### Start

- create - Create a new project from a template
- migrate - Migrate an existing project to Vite+
- config - Configure hooks and agent integration
- staged - Run linters on staged files
- install (`i`) - Install dependencies
- env - Manage Node.js versions

### Develop

- dev - Run the development server
- check - Run format, lint, and TypeScript type checks
- lint - Lint code
- fmt - Format code
- test - Run tests

### Execute

- run - Run monorepo tasks
- exec - Execute a command from local `node_modules/.bin`
- dlx - Execute a package binary without installing it as a dependency
- cache - Manage the task cache

### Build

- build - Build for production
- pack - Build libraries
- preview - Preview production build

### Manage Dependencies

Vite+ automatically detects and wraps the underlying package manager such as pnpm, npm, or Yarn through the `packageManager` field in `package.json` or package manager-specific lockfiles.

- add - Add packages to dependencies
- remove (`rm`, `un`, `uninstall`) - Remove packages from dependencies
- update (`up`) - Update packages to latest versions
- dedupe - Deduplicate dependencies
- outdated - Check for outdated packages
- list (`ls`) - List installed packages
- why (`explain`) - Show why a package is installed
- info (`view`, `show`) - View package information from the registry
- link (`ln`) / unlink - Manage local package links
- pm - Forward a command to the package manager

### Maintain

- upgrade - Update `vp` itself to the latest version

These commands map to their corresponding tools. For example, `vp dev --port 3000` runs Vite's dev server and works the same as Vite. `vp test` runs JavaScript tests through the bundled Vitest. The version of all tools can be checked using `vp --version`. This is useful when researching documentation, features, and bugs.

## Common Pitfalls

- **Using the package manager directly:** Do not use pnpm, npm, or Yarn directly. Vite+ can handle all package manager operations.
- **Always use Vite commands to run tools:** Don't attempt to run `vp vitest` or `vp oxlint`. They do not exist. Use `vp test` and `vp lint` instead.
- **Running scripts:** Vite+ built-in commands (`vp dev`, `vp build`, `vp test`, etc.) always run the Vite+ built-in tool, not any `package.json` script of the same name. To run a custom script that shares a name with a built-in command, use `vp run <script>`. For example, if you have a custom `dev` script that runs multiple services concurrently, run it with `vp run dev`, not `vp dev` (which always starts Vite's dev server).
- **Do not install Vitest, Oxlint, Oxfmt, or tsdown directly:** Vite+ wraps these tools. They must not be installed directly. You cannot upgrade these tools by installing their latest versions. Always use Vite+ commands.
- **Use Vite+ wrappers for one-off binaries:** Use `vp dlx` instead of package-manager-specific `dlx`/`npx` commands.
- **Import JavaScript modules from `vite-plus`:** Instead of importing from `vite` or `vitest`, all modules should be imported from the project's `vite-plus` dependency. For example, `import { defineConfig } from 'vite-plus';` or `import { expect, test, vi } from 'vite-plus/test';`. You must not install `vitest` to import test utilities.
- **Type-Aware Linting:** There is no need to install `oxlint-tsgolint`, `vp lint --type-aware` works out of the box.

## CI Integration

For GitHub Actions, consider using [`voidzero-dev/setup-vp`](https://github.com/voidzero-dev/setup-vp) to replace separate `actions/setup-node`, package-manager setup, cache, and install steps with a single action.

```yaml
- uses: voidzero-dev/setup-vp@v1
  with:
    cache: true
- run: vp check
- run: vp test
```

## Review Checklist for Agents

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to validate changes.
<!--VITE PLUS END-->

## Content maintenance

Do not author question or generated README changes in this repository.

## React content contract (reference only)

These guidelines document the existing question content contract.

Treat these rules as normative for new questions and substantial rewrites. Preserve good legacy content that is outside the scope of the requested change; do not rewrite an answer solely for stylistic uniformity.

### Folder and source contract

Each question lives in its own slug directory:

```text
questions/<slug>/
  metadata.json
  en-US.mdx
  zh-CN.mdx (generated translation, when available)
  en-US.langnostic.json (generated translation state, when available)
```

- Treat `en-US.mdx` as the source locale.
- Localized files are generated through GFE's translation workflow. Do not manually edit `*.langnostic.json` files here.
- Keep the directory name, `metadata.json` slug, internal links, and asset paths consistent.
- Treat each question's frontmatter title and its `metadata.json` `ranking` and `section` values as authoritative; there is no separate local catalog.
- Follow the live metadata schema. Use `access`, not the legacy `premium` field, and include the current `frameworks` and `section` fields.
- Do not treat `published: true` as permission to leave incomplete or placeholder content.

### Answer structure

Every `en-US.mdx` answer should use this outer structure:

1. Frontmatter containing `title`.
2. `## TL;DR` immediately after frontmatter.
3. A horizontal-rule delimiter (`---`) after the TL;DR.
4. A flexible detailed answer organized around the question.
5. `## Further reading` as the final section when meaningful references exist.

The TL;DR is extracted into the repository README, so it must stand on its own outside the full article:

- Answer the question directly before adding nuance.
- Keep it concise and useful as an interview response.
- Do not use headings or callouts within the TL;DR.
- Do not depend on definitions, examples, or links that appear only later in the article.
- Keep the terminating `---` delimiter in place so README generation can find the section.

The detailed answer does not need one universal heading template. Use only the sections the topic needs, such as how an API works, when to use it, tradeoffs, pitfalls, or a focused example. Explain the core answer before historical background or advanced edge cases.

Use `## Further reading` only for meaningful references. Prefer primary sources, especially official React, React DOM, framework, and library documentation. Do not leave an empty section.

### Writing style and tone

- Write for interview-prep learners and practicing React engineers, not repository maintainers.
- Teach the answer a candidate should give before expanding into deeper reference material.
- Use a concise, direct, practical tone. Be decisive without becoming academic or hard to follow.
- Use sentence case for headings and bullet points.
- Keep prose scannable with short paragraphs, purposeful bullets, and tables only when they add clarity.
- Prefer explicit conditions, tradeoffs, and explanations of why over broad theory dumps or generic "it depends" phrasing.
- Use precise terminology and consistent names for React APIs, component boundaries, rendering phases, and state.
- State assumptions, caveats, environment boundaries, and exclusions explicitly.
- Avoid first-person voice, hype, rhetorical filler, unresolved brainstorming, and self-referential article language.
- Replace vague or promotional phrases such as "enhance user experience", "foster", "seamless", and "dynamic and responsive" with the concrete behavior, benefit, or cost.
- Make section introductions useful. They should orient the reader, explain why the section matters, or preview the decision being discussed rather than repeat the heading.

### React-specific technical accuracy

- Distinguish React core behavior from React DOM, framework, data library, compiler, and bundler behavior.
- Name the relevant environment when behavior differs between client rendering, server rendering, hydration, React Server Components, and Client Components.
- Verify version-sensitive claims against primary sources. Identify the relevant React version and whether an API is stable, experimental, legacy, or deprecated.
- Prefer function components and Hooks for modern examples. Use class components only for legacy context or an explicit comparison.
- Use precise distinctions such as render versus commit, re-render versus remount, queued state update versus immediate mutation, and read-only props versus deeply immutable data.
- Do not present framework-specific behavior or third-party Suspense, caching, routing, or data-fetching behavior as a guarantee made by React itself.
- Avoid unqualified performance claims. Explain the actual cost, state the conditions under which an optimization helps, or recommend profiling.
- Keep historical background subordinate to current guidance unless the question explicitly asks about history or internals.

### Code examples

- Keep examples minimal, internally consistent, and directly relevant to the claim they support.
- Use `jsx` or `tsx` fences for component code and `js` or `ts` for non-JSX code.
- Include imports when readers need them to identify where an API comes from.
- Model correct Hook dependencies, Effect cleanup, stable list keys, immutable updates, semantic HTML, and accessible behavior where applicable.
- Do not introduce imaginary APIs, pseudocode that appears runnable, or correctness bugs merely to shorten an example.
- Prefer modern React APIs. If an example uses a legacy API, label it and explain why it remains relevant.
- Do not add a large example when a smaller snippet or precise prose makes the point more clearly.

### Callouts and admonitions

Use GitHub-flavored admonitions for high-value points in the detailed answer. They render on GitHub and in the GreatFrontEnd MDX pipeline.

| Type | Use for |
| --- | --- |
| `[!WARNING]` | Correctness and production footguns, such as stale closures, missing cleanup, unstable keys, conditional Hook calls, accessibility regressions, and hydration mismatches. |
| `[!IMPORTANT]` | Central conceptual distinctions, anti-patterns, and scope boundaries. |
| `[!TIP]` | Actionable defaults and recommendations, such as deriving values during render or profiling before memoizing. |
| `[!NOTE]` | Version, renderer, framework, environment, and other non-obvious clarifications. |

Use only these four variants. Do not introduce `[!CAUTION]`; use `[!WARNING]` for hazards and `[!IMPORTANT]` for anti-patterns.

Formatting rules:

- Put `> [!TYPE] Short title` on the first line, followed by a quoted blank line and one focused body paragraph.
- Keep the title concise and omit a trailing period.
- Use the body to explain why or when the point matters rather than restating the title.
- Use callouts sparingly. Do not wrap every recommendation or caveat.
- Keep callouts out of the TL;DR; reserve them for the detailed answer.

Example:

```markdown
> [!WARNING] Do not omit reactive dependencies
>
> Missing dependencies can leave an Effect synchronized with stale props or state. Change the Effect's structure instead of suppressing the `exhaustive-deps` warning.
```

### Content quality rules

- No `TODO`, `Work-in-progress`, placeholder text, commented-out draft notes, or unfinished examples in ready-quality content.
- No empty `Further reading` sections.
- Every explanatory heading should be followed by framing prose before a table, list, code block, or another heading. `## Further reading` is exempt because it naturally contains a link list.
- Avoid back-to-back explanatory headings.
- Prefer concrete guidance and tradeoffs over encyclopedic background or broad historical surveys.
- Cross-link related questions when that reduces duplication, but summarize the local point instead of outsourcing the explanation entirely.
- Verify internal links, code behavior, API status, and version-sensitive claims before finishing.
- Preserve good existing structure whenever possible.

### Quiz exercises

Exercises are not part of this repository. Never add or restore `questions/*/exercises` here.

### Literal braces in MDX

MDX parses `{...}` as a JSX expression, so any literal curly braces in prose or example strings will try to evaluate an identifier and fail at build time (e.g. `"hello {user}"` throws because `user` is not defined).

When writing literal braces in MDX prose, use one of:

- Escape the opening brace: `\{user}` → renders as `{user}`
- Inline code: `` `{user}` ``
- HTML entities: `&#123;user&#125;`

This does not apply inside fenced code blocks (` ``` `), where braces are already treated as literal text.

### Validation

Run these checks for substantive question changes:

```bash
vp run gen
vp check
vp test
git diff --check
```

- Review the generated `README.md` diff after `vp run gen`, especially the extracted TL;DR and question ordering.
- Translation validation belongs in GFE when localized content is intentionally in scope.
