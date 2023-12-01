// @ts-check
const { test, expect } = require('@playwright/test');
// test.use({ viewport: { width: 1280, height: 720 }, })
import path from 'path';
test('ex-1-test', async ({ page }) => {
  const currentPath = path.join(process.cwd(), 'ex-1-pricing-grid/index.html');
  const url = "file:///" + currentPath
  await page.setViewportSize({
    width: 1715,
    height: 650
  })
  await page.goto(url)
  expect(await page.screenshot({
    fullPage: true,
  })).toMatchSnapshot({
    threshold: 0.5,
    maxDiffPixels: 30000,
    maxDiffPixelRatio: 0.2,
  },
  );
});