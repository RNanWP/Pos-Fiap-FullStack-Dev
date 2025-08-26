# Copilot Instructions for AI Agents

## Project Overview
This project is a Node.js/TypeScript backend using Fastify, Zod for validation, and PostgreSQL (via `pg`). It follows a modular, DDD-inspired structure with clear separation between entities, use-cases, repositories, and HTTP controllers. The main entrypoint is `src/serve.ts`.

## Key Architectural Patterns
- **Controllers** (`src/http/controllers/`): Handle HTTP requests, validate input (Zod), and delegate to use-cases.
- **Use Cases** (`src/use-cases/`): Encapsulate business logic. Factories in `src/use-cases/factory/` wire up use-cases with repositories.
- **Repositories** (`src/repositories/`): Data access layer. Some are in `src/repositories/pg/` (PostgreSQL-specific).
- **Entities & Interfaces** (`src/entities/`, `src/entities/models/`): Domain models and TypeScript interfaces.
- **Environment** (`src/env/`): Loads and validates environment variables using Zod.

## Developer Workflows
- **Start server:** `npx tsx src/serve.ts` (uses Fastify, port from `.env`)
- **Lint:** `npx eslint .`
- **Format:** `npx prettier --check .`
- **Dependencies:** Managed via `package.json` (see devDependencies for tooling)
- **Environment:** Copy `.env.example` to `.env` and fill in required DB/JWT values

## Project-Specific Conventions
- Use Zod for all input validation (see controller examples)
- Use dependency injection via factory functions for use-cases
- All passwords must be hashed before persistence (see `bcryptjs` usage)
- Use `@/` alias for imports from `src/` (configured in `tsconfig.json`)
- Error handling: Use custom error classes in `src/use-cases/error/`

## Integration Points
- **Database:** PostgreSQL, connection details in `.env`
- **Authentication:** JWT secret required in `.env`, but implementation details may be in use-cases
- **External packages:** Fastify, Zod, bcryptjs, dotenv, pg

## Example: User Creation Flow
1. HTTP POST to user controller (`src/http/controllers/user/create.ts`)
2. Zod validates request body
3. Password is hashed
4. Use-case is resolved via factory (`makeCreateUserUseCase`)
5. Use-case persists user via repository
6. Response sent with user info (no password)

## Key Files/Directories
- `src/http/controllers/` — HTTP endpoints
- `src/use-cases/` — Business logic
- `src/repositories/` — Data access
- `src/entities/` — Domain models
- `src/env/` — Environment config
- `.env.example` — Required environment variables

## Tips for AI Agents
- Always validate input with Zod schemas
- Use factories for use-case instantiation
- Follow the import aliasing for maintainability
- Reference `.env.example` for required config
- Prefer custom error classes for business errors

