# Monorepo with Next.js, pnpm, and Turborepo

This project has been restructured into a monorepo using pnpm workspaces and Turborepo.

## Structure

- `apps`: Contains individual applications.
  - `web`: The main Next.js application.
- `packages`: Contains shared libraries, components, or utilities that can be used across different apps.
  - (This directory is ready for you to add new packages.)

## Key Technologies

- **pnpm:** A fast and disk space-efficient package manager.
- **Turborepo:** A high-performance build system for JavaScript and TypeScript codebases.
- **Next.js:** The React framework for production.

## Getting Started

### 1. Installation

Install all dependencies from the root of the project. pnpm will automatically link the workspace packages.

```bash
pnpm install
```

### 2. Development

To start the development server for the `web` application, run the following command from the root directory:

```bash
pnpm dev
```

Turborepo will intelligently run the `dev` script defined in `apps/web/package.json`.

### 3. Build

To build all applications and packages in the monorepo, run this command from the root:

```bash
pnpm build
```

Turborepo will cache the output and only rebuild what has changed, making the build process very fast.

### 4. Linting and Testing

You can run linting and testing for the entire monorepo from the root as well:

```bash
# Lint all packages
pnpm lint

# Run tests for all packages
pnpm test
```

## Adding a New Package

1.  Create a new directory inside the `packages` folder (e.g., `packages/ui-library`).
2.  Inside the new directory, create a `package.json` file with a unique name (e.g., `"name": "@your-scope/ui-library"`).
3.  Add any necessary dependencies and scripts to the new package's `package.json`.
4.  You can now use this new package in your other applications (like `web`) by adding it as a dependency:

    ```json
    // In apps/web/package.json
    "dependencies": {
      "@your-scope/ui-library": "workspace:*"
    }
    ```

5.  Run `pnpm install` from the root to link the new package.
