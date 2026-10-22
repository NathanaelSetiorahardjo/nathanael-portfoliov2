// src/components/layout/AppShell.jsx
// The editor window around every page.
// Desktop: title bar, activity bar, explorer, open-file tabs, editor, status bar.
// Phone: title bar, editor and a bottom tab bar.
import { lazy, Suspense, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import ActivityBar from './ActivityBar';
import EditorTabs from './EditorTabs';
import Explorer from './Explorer';
import LineGutter from './LineGutter';
import Providers from './Providers';
import SiteFooter from './SiteFooter';
import StatusBar from './StatusBar';
import TitleBar from './TitleBar';
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
  const [explorerOpen, setExplorerOpen] = useState(true);

  return (
    <MotionConfig reducedMotion="user">
      <Providers>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <TitleBar />
        <div className="workspace">
          <ActivityBar explorerOpen={explorerOpen} onToggleExplorer={() => setExplorerOpen((o) => !o)} />
          <Explorer open={explorerOpen} />
          <div className="editor">
            <EditorTabs />
            <div className="editor-body">
              <LineGutter />
              <div className="editor-content">
                <main id="content" className="page">
                  <Outlet />
                </main>
                <SiteFooter />
              </div>
            </div>
          </div>
        </div>
        <StatusBar />
        <PaletteLoader />
        <ScrollRestoration />
      </Providers>
    </MotionConfig>
  );
}
