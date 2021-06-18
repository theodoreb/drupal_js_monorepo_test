let jsonServer;
let server;

module.exports = {
  before(browser, done) {
    // eslint-disable-next-line global-require
    server = require('../../testUtils/server')(done);
    // eslint-disable-next-line global-require
    jsonServer = require('../../testUtils/jsonServer')(done);
  },
  after() {
    server.close();
    jsonServer.close();
  },
  beforeEach(browser) {
    browser
      .url('http://localhost:3001/autocomplete')
      .waitForElementPresent('#autocomplete');
  },
  'minchars with data attribute': (browser) => {
    browser
      .execute(
        // eslint-disable-next-line func-names, prefer-arrow-callback
        function () {
          const input = document.querySelector('#autocomplete');
          input.setAttribute(
            'data-autocomplete-path',
            'http://localhost:3000/countries',
          );
          input.setAttribute('data-autocomplete-min-chars', '2');
          return A11yAutocomplete(input);
        },
        [],
        (result) => {
          browser.assert.equal(
            result.value.options.minChars,
            '2',
            'minchars option set to "2"',
          );
        },
      )
      .setValue('#autocomplete', 'u')
      // Wait long enough that a list would have appeared if it was going to.
      .pause(500)
      .waitForElementNotVisible('[data-drupal-autocomplete-list]')
      .setValue('#autocomplete', 'g')
      .waitForElementVisible('[data-drupal-autocomplete-list]')
      .expect.elements('[data-drupal-autocomplete-list] li')
      .count.to.equal(3);
  },
  // @todo, there needs to be more than just the proof-of-concept test above.
};
