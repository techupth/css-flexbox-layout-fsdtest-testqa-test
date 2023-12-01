// @ts-check
const { test, expect } = require('@playwright/test');
import path from 'path';

test('ex-2-test', async ({ page }) => {
  const currentPath = path.join(process.cwd(), 'ex2-holygrail-layout/index.html');
  const url = "file:///" + currentPath
  await page.setViewportSize({
    width: 1920,
    height: 1080
  })
  await page.goto(url)
  expect(await page.screenshot({
    fullPage: true,
  })).toMatchSnapshot({
    threshold: 0.2,
    // maxDiffPixels: 10000,
    maxDiffPixelRatio: 0.02,
  },
  );
});