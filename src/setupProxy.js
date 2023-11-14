const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/keyword-search", // specify the API route you want to proxy
    createProxyMiddleware({
      target: "http://localhost:5000", // specify the address of your Node.js server
      changeOrigin: true,
    })
  );
};
