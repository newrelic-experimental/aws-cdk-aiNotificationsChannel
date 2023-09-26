import { awscdk, javascript, JsonFile } from 'projen';

const cdkVersion = '2.91.0';
const project = new awscdk.AwsCdkConstructLibrary({
   author: 'New Relic',
   authorAddress: 'https://newrelic.com',
   cdkVersion,
   defaultReleaseBranch: 'main',
   jsiiVersion: '~5.0.0',
   name: '@newrelic/aws-cdk-aiNotificationsChannel',
   projenrcTs: true,
   repositoryUrl: 'https://github.com/msummers/aiNotificationsChannelCDKL2.git',
   description: 'Sample AWS CDK Construct Library by projen',
   license: 'Apache-2.0',
   deps: [
      '@cdk-cloudformation/newrelic-observability-ainotificationsdestination@1.0.0-alpha.7',
      '@cdk-cloudformation/newrelic-observability-ainotificationschannel@1.0.0-alpha.7',
      'constructs',
   ],
   stability: 'experimental',
   gitignore: [
      '.idea',
      'scratch',
      'graphql.config.yml',
      'cdk.out',
      'package-lock.json',
   ],
   devDeps: [
      'esbuild',
      'constructs',
   ],

   keywords: [
      'cdk',
      'aws-cdk',
      'awscdk',
      'cloudformation',
      'cfn',
      'extensions',
      'constructs',
      'cfn-resources',
      'cloudformation-registry',
      'l2',
      'newrelic',
      'new-relic',
   ],
   npmAccess: javascript.NpmAccess.PUBLIC,
   majorVersion: 1,
   docgen: true,
   releaseToNpm: true,
});

new JsonFile(project, 'cdk.json', {
   obj: {
      app: 'npx ts-node --prefer-ts-exts src/integ.default.ts',
   },
});
// const eslintFile = project.tryFindObjectFile('.eslintrc.json');
// eslintFile?.addOverride('rules.@typescript-eslint/indent', ['error', 3]);

project?.eslint?.addRules({
   '@typescript-eslint/indent': ['error', 3],
   'no-trailing-spaces': ['error', { skipBlankLines: true }],
});

project.synth();
