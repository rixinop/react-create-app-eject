const proxy = require('http-proxy-middleware');

module.exports = function(app) {
//   app.use(proxy('/', { target: 'https://durianmanuat.caihcom.com' }));
//   app.use(proxy('/vehicle', { target: 'https://evaluatepre.jd.com' }));
  app.use(
    proxy("/international-master", {
      target: "https://durianmanuat.caihcom.com",
      changeOrigin: true
    })
  );
  
};