Package.describe({
  name: 'ericwangqing:underscore.inflection',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'inflection wrapper',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Thinking-Oriented-Programming/underscore-inflection-for-meteor.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.use('meteor', {unordered: true});
  api.use('underscore', ['client', 'server']);
  api.addFiles(['pre.js', 'underscore.inflection.js']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ericwangqing:underscore.inflection');
  api.addFiles('ericwangqing:underscore.inflection-tests.js');
});
