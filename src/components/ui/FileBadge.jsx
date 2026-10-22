// src/components/ui/FileBadge.jsx
// A small coloured file-type mark, like an editor's file icon.
const marks = { ts: 'TS', dir: '▸', log: 'LOG', json: '{}', md: 'MD', pdf: 'PDF' };

export default function FileBadge({ type }) {
  return (
    <span className={`file-badge file-badge-${type}`} aria-hidden="true">
      {marks[type] ?? '·'}
    </span>
  );
}
