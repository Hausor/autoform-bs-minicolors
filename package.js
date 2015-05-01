Package.describe({
  name: 'hausor:autoform-bs-minicolors',
  summary: 'Custom bootstrap-minicolors input type for AutoForm',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.addFiles('jquery.minicolors.js', "client");
  api.addFiles('jquery.minicolors.css', "client");
  api.addFiles('public/jquery.minicolors.png', "client");
  api.addFiles('autoform.bootstrap.minicolors.html', "client");
  api.addFiles('autoform.minicolors.js', "client");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('hausor:autoform-bs-minicolors');
  api.addFiles('minicolors-tests.js');
});
