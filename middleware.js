var bodyParser = require('body-parser');

const setupMiddleware = (app) => {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
};

module.exports = setupMiddleware;