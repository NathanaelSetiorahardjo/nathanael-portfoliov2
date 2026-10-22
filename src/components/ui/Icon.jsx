// src/components/ui/Icon.jsx
// Pixel icons from pixelarticons (https://pixelarticons.com, MIT). Add a name here to use it.
import { ArrowLeft } from 'pixelarticons/react/ArrowLeft.js';
import { ArrowRight } from 'pixelarticons/react/ArrowRight.js';
import { Briefcase } from 'pixelarticons/react/Briefcase.js';
import { Check } from 'pixelarticons/react/Check.js';
import { Close } from 'pixelarticons/react/Close.js';
import { Copy } from 'pixelarticons/react/Copy.js';
import { Download } from 'pixelarticons/react/Download.js';
import { ExternalLink } from 'pixelarticons/react/ExternalLink.js';
import { Eye } from 'pixelarticons/react/Eye.js';
import { Folder } from 'pixelarticons/react/Folder.js';
import { Github } from 'pixelarticons/react/Github.js';
import { Home } from 'pixelarticons/react/Home.js';
import { Instagram } from 'pixelarticons/react/Instagram.js';
import { Linkedin } from 'pixelarticons/react/Linkedin.js';
import { Mail } from 'pixelarticons/react/Mail.js';
import { Moon } from 'pixelarticons/react/Moon.js';
import { Search } from 'pixelarticons/react/Search.js';
import { Sliders } from 'pixelarticons/react/Sliders.js';
import { Sun } from 'pixelarticons/react/Sun.js';
import { Users } from 'pixelarticons/react/Users.js';
import { Zap } from 'pixelarticons/react/Zap.js';

const icons = {
  'arrow-left': ArrowLeft,
  'arrow-right': ArrowRight,
  briefcase: Briefcase,
  check: Check,
  close: Close,
  copy: Copy,
  download: Download,
  external: ExternalLink,
  eye: Eye,
  folder: Folder,
  github: Github,
  home: Home,
  instagram: Instagram,
  linkedin: Linkedin,
  mail: Mail,
  moon: Moon,
  search: Search,
  sliders: Sliders,
  sun: Sun,
  users: Users,
  zap: Zap,
};

export default function Icon({ name, size = 20, className = '', label }) {
  const Svg = icons[name];
  if (!Svg) return null;
  return (
    <Svg
      width={size}
      height={size}
      className={`icon ${className}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? 'img' : undefined}
      focusable="false"
    />
  );
}
