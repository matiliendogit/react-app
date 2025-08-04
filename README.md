# React Practice Monorepo

A collection of React applications for practicing and improving React and JavaScript skills.

## Projects

1. **Ta Te Ti App**: A Tic Tac Toe game built with React
2. **Prueba Técnica Junior React**: Technical test implementation with React
3. **Cursor Pointer Move App**: Application for cursor movement effects

## Setup

1. Clone the repository
2. Install dependencies for all projects:
```bash
npm install
```

## Development

Each project can be run independently:

```bash
cd [project-directory]
npm run dev
```

## Code Style

This monorepo uses StandardJS for consistent code style across all projects. ESLint is configured to automatically format code on save.

### Key Features:
- Shared node_modules for all projects
- Consistent code formatting with StandardJS
- Automatic code formatting on save
- Centralized ESLint configuration

## Adding New Projects

1. Create your new project in the root directory
2. Add the project to the `workspaces` array in the root `package.json`
3. The project will automatically use the shared ESLint and StandardJS configuration
