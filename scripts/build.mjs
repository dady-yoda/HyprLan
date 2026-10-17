import { cp, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { build } from 'vite';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');
const app = path.join(root, 'celestia');

// Clean previous output
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

// 1) Build the Celestia hackathon app, served under /celestia/
await build({
  root: app,
  configFile: path.join(app, 'vite.config.ts'),
  logLevel: 'info',
});

// 2) Copy the static HyprLan homepage to the deployment root
await cp(path.join(root, 'hyprlan', 'index.html'), path.join(dist, 'index.html'));
await cp(path.join(root, 'hyprlan', 'assets'), path.join(dist, 'assets'), { recursive: true });

console.log('Build complete: HyprLan at /, Celestia at /celestia');
