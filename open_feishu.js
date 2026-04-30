const { chromium } = require('playwright');

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://feishu.cn');
  console.log('Feishu opened. Please login if needed.');
  console.log('When ready, type "done" in the terminal.');
  await new Promise(() => {}); // Keep running
})();