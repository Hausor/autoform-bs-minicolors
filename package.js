Package.describe({
  name: 'hausor:autoform-bs-minicolors',
  summary: 'Custom bootstrap-minicolors input type for AutoForm',
  version: '1.0.0',
  git: 'https://github.com/Hausor/autoform-bs-minicolors'
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
  api.use(['mike:mocha-package', 'practicalmeteor:chai']);
  api.use('hausor:autoform-bs-minicolors');
  api.use('coffeescript');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.addFiles('test/client/schema.coffee');
  api.addFiles('test/client/form_wrapper.html');
  api.addFiles('test/client/minicolors-tests.coffee', "client");
});
