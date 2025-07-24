# ESLint Configuration for Next.js 15 with TypeScript

## Overview

This project is configured with ESLint 8.57.1 (the latest version compatible with Next.js 15) using modern best practices for TypeScript projects.

## Key Features

1. **Root Configuration**: Added `"root": true` to prevent ESLint from looking for configuration files in parent directories
2. **TypeScript Support**: Full TypeScript support with `@typescript-eslint/parser` and appropriate rules
3. **Import Organization**: Automatic import sorting and grouping with `eslint-plugin-import`
4. **Unused Imports Detection**: Automatic detection and removal of unused imports with `eslint-plugin-unused-imports`
5. **Next.js Integration**: Uses `next/core-web-vitals` and `next/typescript` for Next.js-specific rules

## Configuration Files

- `.eslintrc.json`: Main ESLint configuration
- `.eslintignore`: Specifies files and directories to exclude from linting
- `.vscode/settings.json`: VS Code integration for automatic ESLint fixes on save

## Available Scripts

```bash
# Run ESLint
npm run lint

# Run ESLint and automatically fix issues
npm run lint:fix

# Run ESLint with strict mode (no warnings allowed)
npm run lint:strict

# Run TypeScript type checking
npm run type-check
```

## Key Rules

### Code Style

- 2-space indentation
- Single quotes for strings
- Semicolons required
- Object curly spacing enforced
- Unix line endings

### TypeScript

- Consistent type imports enforced
- Explicit any warnings
- Unused variables detection (handled by unused-imports plugin)

### Import Organization

- Imports are automatically sorted and grouped:
  1. Built-in modules
  2. External packages (React and Next.js first)
  3. Internal imports
  4. Relative imports
  5. Type imports

### Next.js Specific

- Enforces use of `Link` component for internal navigation
- Core Web Vitals rules for performance
- TypeScript-specific Next.js rules

## VS Code Integration

The project includes VS Code settings that:

- Enable ESLint validation for JavaScript and TypeScript files
- Automatically fix ESLint issues on save
- Configure TypeScript to use the workspace version

## Notes

- The project uses ESLint 8.57.1 to maintain compatibility with Next.js 15
- The `package.json` includes an override to ensure all dependencies use the same ESLint version
- TypeScript is configured with strict mode for better type safety
