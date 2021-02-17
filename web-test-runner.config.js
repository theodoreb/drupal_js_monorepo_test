// eslint-disable-next-line import/no-extraneous-dependencies
import { puppeteerLauncher } from '@web/test-runner-puppeteer';

const chromeOptions = {
  executablePath: process.env.CHROME_BIN,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
};

const firefoxOptions = {
  product: 'firefox',
  executablePath: process.env.FIREFOX_BIN,
  headless: true,
  args: [],
};

export default {
  browsers: [
    puppeteerLauncher({
      launchOptions:
        process.env.PUPPETEER_PRODUCT === 'firefox'
          ? firefoxOptions
          : chromeOptions,
    }),
  ],
};
