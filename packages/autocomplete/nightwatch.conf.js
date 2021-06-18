module.exports = {
  src_folders: ['test/Nightwatch'],
  webdriver: {
    start_process: true,
    port: 4444,
    log_path: 'tests_output',
    server_path: require('geckodriver').path,
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      screenshots: {
        enabled: false,
        path: '',
      },
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          // Enable this if you encounter unexpected SSL certificate errors in Firefox
          // acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            args: ['-headless'],
          },
        },
      },
    },
  },
};
