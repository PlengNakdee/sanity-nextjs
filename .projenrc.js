const { web, tasks } = require('projen');

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
    'concurrently',
    'next-sanity',
    'next',
    'react',
    'react-dom',
    'react-router',
    'react-router-dom',
    'react-bootstrap',
    'bootstrap'
  ],
  
  devDeps: [

  ],

});
// const build = project.tasks.tryFind('build');
// build.reset();
// build.description = 'Perform a full build of frontend and backend';
// build.exec('yarn build:frontend');
// build.exec('yarn build:backend');

// const devFrontend = project.addTask('dev:frontend', {
//     description: 'Dev Next.js & Sanity',
//     category: tasks.TaskCategory.BUILD,
// });
// devFrontend.exec('concurrently \"next dev\" \"cd studio && sanity start\"');

// const buildFrontend = project.addTask('build:frontend', {
//     description: 'Build Next.js & Sanity',
//     category: tasks.TaskCategory.BUILD,
// });
// buildFrontend.exec('echo "Building Sanity to public/studio…" && cd studio && sanity build ../public/studio -y && cd .. && cross-env NODE_ENV=production next build');

// const startNext = project.addTask('start:next', {
//     description: 'Start Next.js',
//     category: tasks.TaskCategory.BUILD,
// });
// startNext.exec('next start');

project.synth();
