const { web } = require('projen');

const project = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: 'main',
  jsiiFqn: "projen.web.NextJsTypeScriptProject",
  name: 'sanity-nextjs',

  deps: [
    'tailwindcss@npm:@tailwindcss/postcss7-compat',
    '@tailwindcss/postcss7-compat@^2',
    'postcss@^7', 
    'autoprefixer@^9',
    '@sanity/cli',
    '@sanity/core'
  ],
  
  devDeps: [

  ],

  
});

project.synth();
