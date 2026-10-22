// src/components/home/codeTokens.js
// Turns a plain object into syntax-highlighted lines of TypeScript-looking code.
// Each line is a list of [tokenType, text] pairs; token types map to .tok-* colours.

function valueTokens(value) {
  if (Array.isArray(value)) {
    const items = value.flatMap((v, i) => [...valueTokens(v), ...(i < value.length - 1 ? [['punc', ', ']] : [])]);
    return [['punc', '['], ...items, ['punc', ']']];
  }
  if (typeof value === 'number') return [['num', String(value)]];
  return [['str', `'${value}'`]];
}

export function objectToLines(name, object) {
  const lines = [[['kw', 'const '], ['var', name], ['punc', ' = {']]];
  Object.entries(object).forEach(([key, value]) => {
    lines.push([['punc', '  '], ['prop', key], ['punc', ': '], ...valueTokens(value), ['punc', ',']]);
  });
  lines.push([['punc', '};']]);
  return lines;
}

export function countChars(lines) {
  return lines.reduce((sum, line) => sum + line.reduce((s, [, text]) => s + text.length, 0) + 1, 0);
}

// The first `typed` characters of `lines`, plus the line the caret sits on.
export function sliceLines(lines, typed) {
  let left = typed;
  let caretLine = -1;
  const visible = lines.map((line, i) => {
    const out = [];
    line.forEach(([type, text]) => {
      const part = text.slice(0, Math.max(0, left));
      left -= part.length;
      if (part) out.push([type, part]);
    });
    if (left > 0) left -= 1; // the line break
    else if (caretLine === -1) caretLine = i;
    return out;
  });
  return { visible, caretLine: caretLine === -1 ? lines.length - 1 : caretLine };
}
