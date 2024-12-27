const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const sharedTailwindConfig = require('../../libs/shared/tailwind-preset/tailwind.config.js');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedTailwindConfig],
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    "./node_modules/flowbite/**/*.js", // add this line
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  }
};
