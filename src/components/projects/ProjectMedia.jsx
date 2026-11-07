// src/components/projects/ProjectMedia.jsx
// A project's picture(s), or its pixel drawing when there is none.
// Several `images` become a swipeable slider: native scroll-snap (touch, trackpad,
// arrow keys), prev/next buttons on hover and dots underneath.
// `viewTransitionName` lets the card media morph into the detail page media.
import { useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Icon from '../ui/Icon';
import ProjectIllustration from './ProjectIllustration';

// One shape for every project: [{ src, alt }]. A single `image` is treated as one slide.
function projectImages(project) {
  if (project.images?.length) return project.images;
  return project.image ? [{ src: project.image, alt: '' }] : [];
}

function Slider({ images, title, eager, linkTo }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const goTo = (i) => {
    const track = trackRef.current;
    const next = (i + images.length) % images.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const onScroll = (e) => {
    const track = e.currentTarget;
    const i = Math.round(track.scrollLeft / track.clientWidth);
    if (i !== index) setIndex(i);
  };

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  // On cards the slider sits above the card's stretched link, so a plain click
  // on a picture still opens the project. Swipes do not fire a click.
  const onClick = linkTo ? () => navigate(linkTo, { viewTransition: true }) : undefined;

  return (
    <div className="media-slider" role="region" aria-roledescription="carousel" aria-label={`${title} pictures`}>
      <div
        ref={trackRef}
        className="media-track"
        tabIndex={0}
        onScroll={onScroll}
        onKeyDown={onKeyDown}
        onClick={onClick}
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className="media-slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${images.length}`}
          >
            <img src={img.src} alt={img.alt} loading={eager && i === 0 ? 'eager' : 'lazy'} decoding="async" draggable="false" />
          </div>
        ))}
      </div>

      <button type="button" className="media-arrow media-prev" onClick={() => goTo(index - 1)} aria-label="Previous picture">
        <Icon name="chevron-left" size={18} />
      </button>
      <button type="button" className="media-arrow media-next" onClick={() => goTo(index + 1)} aria-label="Next picture">
        <Icon name="chevron-right" size={18} />
      </button>

      <div className="media-dots">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className="media-dot"
            aria-label={`Show picture ${i + 1} of ${images.length}`}
            aria-current={i === index ? 'true' : undefined}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
      <span className="media-count" aria-hidden="true">
        {index + 1}/{images.length}
      </span>
    </div>
  );
}

export default function ProjectMedia({ project, className = '', eager = false, linkTo }) {
  const style = { viewTransitionName: `project-media-${project.id}` };
  const images = projectImages(project);

  let content;
  if (images.length > 1) {
    content = <Slider images={images} title={project.title} eager={eager} linkTo={linkTo} />;
  } else if (images.length === 1) {
    content = <img src={images[0].src} alt={images[0].alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />;
  } else {
    content = <ProjectIllustration name={project.illustration} title={project.title} />;
  }

  return (
    <div className={`project-media ${images.length > 1 ? 'has-slider' : ''} ${className}`} style={style}>
      {content}
    </div>
  );
}
