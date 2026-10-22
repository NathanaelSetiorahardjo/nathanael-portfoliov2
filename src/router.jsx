// src/router.jsx
// All routes. Add a page here and to src/data/navigation.js.
import { createBrowserRouter } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import LeadershipPage from './pages/LeadershipPage';
import NotFoundPage from './pages/NotFoundPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'projects/:id', element: <ProjectDetailPage /> },
      { path: 'leadership', element: <LeadershipPage /> },
      { path: 'skills', element: <SkillsPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
