var bodyParser = require('body-parser');
var FastBootExpressMiddleware = require('fastboot-express-middleware');

module.exports = {
  name: 'fastboot-middleware',

  serverMiddleware(options) {

    var app = options.app;
    app.use(bodyParser.text()); // or bodyParser.json()
    app.use(function(req, resp, next) {
      var outputPath = process.env['EMBER_DIST_FOLDER'];

      if (req.serveUrl) {
        var fastbootMiddleware = FastBootExpressMiddleware({
          distPath: outputPath
        });

        fastbootMiddleware(req, resp, next);
      } else {
        next();
      }
    });
  }
};