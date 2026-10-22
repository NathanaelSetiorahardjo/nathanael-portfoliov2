// src/data/molly.js
// What Molly (Nathanael's cat, the site's companion) says when clicked, in order.
// `action` adds a button: 'search' opens the palette, 'cv' downloads the CV, 'email' copies the email.
export const mollyLines = [
  { text: 'Meow! I’m Molly, Nathanael’s cat. I keep an eye on this editor.' },
  { text: 'Looking for something? Search opens any file or action.', action: 'search', label: 'Open search' },
  { text: 'Hiring? The CV is the file right above me.', action: 'cv', label: 'Download CV' },
  { text: 'Want to say hi? I can copy the email for you.', action: 'email', label: 'Copy email' },
  { text: 'Psst. The tools on the home page can be dragged and thrown. Try it.' },
  { text: 'Purr. Thanks for the pets.', hearts: true },
];

export const mollySleeping = 'Zzz… (click to wake me)';
