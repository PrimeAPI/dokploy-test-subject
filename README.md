# dokploy-test-subject

Simple React web application that displays "Hello!" and the current time. Built with Vite for easy deployment with Dokploy.

## Features

- Real-time clock that updates every second
- Clean, modern UI
- Built with React + Vite
- Production-ready build configuration

## Development

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

## Building for Production

Build the application:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

The production build will be in the `dist/` directory, ready for deployment.

## Deployment with Dokploy

This repository is configured for easy deployment with Dokploy:

1. **Build Command**: `npm install && npm run build`
2. **Output Directory**: `dist`
3. **Start Command**: `npm run preview` (or use a static file server)

The app is a static site and can be deployed to any static hosting service or served with any web server.
