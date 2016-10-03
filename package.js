/* global Package */

Package.describe({
  name: "antoniopresto:collection2",
  summary: "Automatic validation of insert and update operations on the client and server.",
  version: "2.10.0-rc2",
  git: "https://github.com/smartdemocracy/meteor-collection2.git"
});

Package.onUse(function(api) {
  // Automatically include all packages for now
  api.use([
    'antoniopresto:collection2-core@1.2.1-rc.1',
    'antoniopresto:schema-index@1.1.0',
    'antoniopresto:schema-deny@1.1.0',
  ]);

  api.imply([
    'antoniopresto:collection2-core',
    'antoniopresto:schema-index',
    'antoniopresto:schema-deny',
  ]);
});

Package.onTest(function(api) {
  api.use('antoniopresto:collection2');
  api.use('antoniopresto:simple-schema');
  api.use('tinytest@1.0.0');
  api.use('test-helpers@1.0.0');
  api.use('underscore@1.0.0');
  api.use('ejson@1.0.0');
  api.use('ordered-dict@1.0.0');
  api.use('random@1.0.0');
  api.use('deps@1.0.0');
  api.use('minimongo@1.0.0');

  api.addFiles([
    'tests/schemas.js',
    'tests/collections.js',
    'tests/pubsub.js',
    'tests/security.js',
    'tests/tests.js',
    'tests/tests-deny.js',
    'tests/tests-indexing.js'
  ]);
});
