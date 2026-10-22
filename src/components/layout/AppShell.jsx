// src/components/layout/AppShell.jsx
// The frame around every page: top bar, page content, footer, status/tab bar, palette, loader.
import { lazy, Suspense } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import BootScreen from './BootScreen';
import Providers from './Providers';
import SiteFooter from './SiteFooter';
import StatusBar from './StatusBar';
import TopBar from './TopBar';
import { usePalette } from '../../hooks/usePalette';

// The palette (cmdk) loads the first time it is opened, keeping the first page light.
const CommandPalette = lazy(() => import('./CommandPalette'));

function PaletteLoader() {
  const { open, everOpened } = usePalette();
  if (!open && !everOpened) return null;
  return (
    <Suspense fallback={null}>
      <CommandPalette />
    </Suspense>
  );
}

export default function AppShell() {
  return (
    <MotionConfig reducedMotion="user">
      <Providers>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <TopBar />
        <main id="content" className="page">
          <Outlet />
        </main>
        <SiteFooter />
        <StatusBar />
        <PaletteLoader />
        <BootScreen />
        <ScrollRestoration />
      </Providers>
    </MotionConfig>
  );
}
