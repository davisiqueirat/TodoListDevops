const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://todos-backend:5000',
      changeOrigin: true,
      onError: (err, req, res) => {
        console.error('Proxy error:', err);
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxying:', req.method, req.url, '→', 'http://todos-backend:5000' + req.url);
      }
    })
  );
};