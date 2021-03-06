Package.describe({
  name: 'patrickml:admob',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'AdMob Package for Meteor JS',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/patrickml/admob',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
});

Cordova.depends({
  'cordova-plugin-admob': '2.9.9'
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('patrickml:admob');
  api.addFiles('admob-tests.js');
});
