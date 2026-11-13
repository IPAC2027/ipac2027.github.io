// Saves the printable program page of the built site (dist/) as a one-page
// PDF, using the locally installed Google Chrome. Runs after `astro build`
// (see package.json). Any problem, such as Chrome not being installed, only
// skips the PDF with a warning, so it never fails the site build.
// Set CHROME_PATH to use a specific Chrome/Chromium binary.
import { existsSync, statSync } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright-core';

const DIST = path.resolve('dist');
const PAGE = '/program/scientific-program-print/';
const OUTPUT = path.join(DIST, 'downloads', 'IPAC27-Scientific-Program.pdf');
// Placeholder origin; requests to it are answered from dist/
const ORIGIN = 'http://ipac27.local';

let browser;
try {
  browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: 'chrome' });
  const page = await browser.newPage();

  // Serve the built site straight from dist/ and block everything else
  await page.route('**/*', (route) => route.abort());
  await page.route(`${ORIGIN}/**`, (route) => {
    let file = path.join(DIST, decodeURIComponent(new URL(route.request().url()).pathname));
    if (existsSync(file) && statSync(file).isDirectory()) file = path.join(file, 'index.html');
    return existsSync(file) ? route.fulfill({ path: file }) : route.fulfill({ status: 404 });
  });

  await page.emulateMedia({ media: 'print' });
  await page.goto(ORIGIN + PAGE);
  // Set by the page once its text has been sized to fit one page
  await page.waitForSelector('html[data-ready]', { timeout: 15000 });

  await mkdir(path.dirname(OUTPUT), { recursive: true });
  await page.pdf({ path: OUTPUT, preferCSSPageSize: true, printBackground: true });
  console.log(`[program-pdf] Wrote ${path.relative(process.cwd(), OUTPUT)}`);
} catch (error) {
  console.warn(`[program-pdf] Skipped: ${error.message.split('\n')[0]}`);
} finally {
  await browser?.close();
}
