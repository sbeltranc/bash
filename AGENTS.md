## Development Commands
- Dev server: `bun run dev`
- Build: `bun run build`
- Preview: `bun run preview`
- Lint: `bun run lint`
- Typecheck: `bun run typecheck`
- Generate migration: `bun run db:generate`
- Migrate DB: `bun run db:migrate`
- Push schema: `bun run db:push`
- Open Drizzle Studio: `bun run db:studio`

## Practical Editing Guidance

- Prefer targeted changes over broad rewrites. This app already mixes polished flows with partially-finished internal tools.
- When touching onboarding, inspect both frontend state management and server persistence.
- When touching internal review features, inspect migration snapshots as well as `server/db/schema.ts`.
- Keep audit logging in mind when adding create/update/delete flows.
- Be careful with user-facing auth redirects. There is both client middleware and server middleware in play.
- Preserve the project’s playful product language and art-driven UI when editing public pages.
- For one-off request body types in API handlers, prefer inline `readBody<...>()` annotations over creating a named type that is only used once.
- Prefer `thisTypeOfVariableFormatting` for variable and field naming in code you add or edit. Avoid introducing new snake_case-style names unless you are matching an existing external API, database column, or other fixed interface.

## Validation

For most changes, start with:

```sh
bun run lint
bun run typecheck
```

If you changed runtime behavior substantially, also run:

```sh
bun run build
```

If a task touches DB shape or review logic, validate both:

- the TypeScript schema in `server/db/schema.ts`
- the historical snapshots in `drizzle/meta/`

## Avoid

- Do not hardcode secrets or bypass Doppler config.
- Do not remove or rewrite migrations unless explicitly asked.
- Do not assume internal APIs are fully finished; several pages are clearly partial stubs.
- Do not “fix” schema mismatches casually without first confirming the intended live database shape.
