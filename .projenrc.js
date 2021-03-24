const { web } = require('projen');

const project = new web.NextJsTypeScriptProject({
  defaultReleaseBranch: 'main',
  jsiiFqn: "projen.web.NextJsTypeScriptProject",
  name: 'sanity-nextjs',

  
});

project.synth();
