function makeServer(done) {
  const express = require('express');
  const path = require('path');
  const app = express();

  app.use(express.static('src'));
  app.get('/autocomplete', function (req, res) {
    res
      .status(200)
      .sendFile(`test/autocomplete.html`, { root: path.resolve() });
  });

  return app.listen(3001, function () {
    done();
  });
}
module.exports = makeServer;
