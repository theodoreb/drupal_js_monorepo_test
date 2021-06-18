// Creates an autocomplete endpoint for testing purposes.
function makeJsonServer(done) {
  const jsonServer = require('json-server');
  const jsonApp = jsonServer.create();
  const router = jsonServer.router('./testUtils/db.json');
  const middlewares = jsonServer.defaults();
  jsonApp.use(middlewares);
  jsonApp.use(router);
  return jsonApp.listen(3000, function () {
    done();
  });
}
module.exports = makeJsonServer;
