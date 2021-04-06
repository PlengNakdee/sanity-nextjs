const { web, tasks, JsonFile } = require('projen');

const project = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: 'main',
  jsiiFqn: "projen.web.NextJsTypeScriptProject",
  name: 'sanity-nextjs',

  typescriptVersion: '4.1',
  eslint: true,
  gitignore: [
    'public/config.js',
    '.env.local'
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
    'next-router',
    '@sanity/client',
    'react',
    'swr',
    '@auth0/nextjs-auth0',
    'dotenv-keyvault',
  ],

  devDeps: [
    'concurrently',
    '@types/react-router',
    '@types/react-router-dom',
    '@sanity/cli',
    'azure-cli'
  ],

});

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
