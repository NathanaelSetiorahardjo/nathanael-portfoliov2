// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import { usePageTitle } from '../hooks/usePageTitle';
import PixelMascot from '../components/ui/PixelMascot';
import Icon from '../components/ui/Icon';

export default function NotFoundPage() {
  usePageTitle('Not found');
  return (
    <section className="section page-top container narrow not-found">
      <span className="mascot-tile mascot-tile-large">
        <PixelMascot size={64} />
      </span>
      <h1 className="page-title">404: file not found</h1>
      <p className="lead">This page isn’t on the workbench. It may have moved, or the link has a typo.</p>
      <Link className="btn btn-primary" to="/" viewTransition>
        <Icon name="home" size={18} /> Back to home
      </Link>
    </section>
  );
}
