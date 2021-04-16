'use strict';

const proxyPath = '/tasks';

module.exports = function(app) {

  let proxyPort = 7071;
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  let proxy = require('http-proxy').createProxyServer({
    target: '\n' + 'https://azure-ember-serverless.azurewebsites.net'
  });

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res, next){
    // include root path in proxied request
    req.url = proxyPath + '/' + req.url;
    proxy.web(req, res, { target: '' });
  });
};
