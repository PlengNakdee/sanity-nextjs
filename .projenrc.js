const { web, tasks, JsonFile } = require('projen');

const project = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: 'main',
  jsiiFqn: "projen.web.NextJsTypeScriptProject",
  name: 'sanity-nextjs',

  typescriptVersion: '4.1',
  eslint: true,
  gitignore: [
    'public/config.js',
  ],

  deps: [
    'tailwindcss@npm:@tailwindcss/postcss7-compat',
    '@tailwindcss/postcss7-compat@^2',
    '@tailwindcss/typography',
    '@tailwindcss/forms',
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/line-clamp',
    'postcss@^7',
    'autoprefixer@^9',
    'next-sanity',
    '@sanity/cli@^2',
    '@sanity/client',
    'next',
    'react',
    'react-dom',
    'react-router',
    'react-router-dom',
  ],

  devDeps: [
    'concurrently',
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

new JsonFile(project, '.theia/settings.json', {
  obj: {
    'typescript.implementationsCodeLens.enabled': true,
    'typescript.locale': 'en',
    'typescript.referencesCodeLens.enabled': true,
    'typescript.referencesCodeLens.showOnAllFunctions': true,
    'typescript.suggest.completeFunctionCalls': false,
    'typescript.surveys.enabled': false,
    'npm.packageManager': 'yarn',
    'editor.formatOnSave': true,
    'editor.formatOnPaste': true,
    'editor.formatOnType': true,
    'editor.tabSize': 2,
    'emmet.triggerExpansionOnTab': false,
    'eslint.alwaysShowStatus': true,
    'eslint.format.enable': true,
    'eslint.packageManager': 'yarn',
    'typescript.tsdk': './node_modules/typescript/lib',
    'css.validate': false,
    'editor.quickSuggestions': { strings: true },
    'tailwindCSS.colorDecorators': 'on',
    'tailwindCSS.validate': true,
    'tailwindCSS.emmetCompletions': true,
  },
  readonly: false,
});

project.synth();
