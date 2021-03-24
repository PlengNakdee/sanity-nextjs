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
    '@sanity/core',
    'concurrently',
  ],
  
  devDeps: [

  ],

});

const devFrontend = project.addTask('dev:frontend', {
    description: 'Dev Next.js & Sanity',
    category: tasks.TaskCategory.BUILD,
});
devFrontend.exec('concurrently \"next dev\" \"cd studio && sanity start\"');

const buildFrontend = project.addTask('build:frontend', {
    description: 'Build Next.js & Sanity',
    category: tasks.TaskCategory.BUILD,
});
buildFrontend.exec('echo "Building Sanity to public/studio…" && cd studio && sanity build ../public/studio -y && cd .. && cross-env NODE_ENV=production next build');

const startNext = project.addTask('start:next', {
    description: 'Start Next.js',
    category: tasks.TaskCategory.BUILD,
});
startNext.exec('next start');

project.synth();
