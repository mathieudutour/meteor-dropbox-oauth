Package.describe({
  name: 'dropbox-oauth',
  summary: "Login service for dropbox accounts",
  version: '1.0.0',
  git: 'https://github.com/mathieudutour/meteor-dropbox-oauth'
});

Package.on_use(function (api) {
  api.use('oauth', ['client', 'server']);
  api.use('oauth2', ['client', 'server']);
  api.use('http', ['client', 'server']);
  api.use('templating', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.export('DropboxOauth');

  api.add_files(['dropbox_configure.html', 'dropbox_configure.js'], 'client');

  api.add_files('dropbox_server.js', 'server');
  api.add_files('dropbox_client.js', 'client');
});
