# Turborepo starter

This is an official pnpm starter turborepo.

## Apps and Packages

- `host-next`: a Next.js host application
- `remote-next`: a Next.js remote application
- `host-vite-react`: a Vite with React host application
- `remote-vite-react`: a Vite with React remote application

## Running

```bash
pnpm install
pnpm build --filter=remote-vite-react # build the vite remote application
pnpm dev
```

### NextJS

- Host: [localhost:3010](http://localhost:3010/)
- Remote: [localhost:3020](http://localhost:3020/)

### Vite React

- Host: [localhost:3011](http://localhost:3011/)
- Remote: [localhost:3021](http://localhost:3021/)
