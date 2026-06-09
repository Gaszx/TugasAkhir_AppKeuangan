const puppeteer = require('puppeteer');
const express = require('express');
const path = require('path');

const app = express();
const port = 8085;
app.use(express.static(path.join(__dirname, 'build', 'web')));

const server = app.listen(port, async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  
  try {
    const page = await browser.newPage();
    // TABLET VIEWPORT (iPad size)
    await page.setViewport({ width: 1024, height: 768, deviceScaleFactor: 2 });
    
    await page.goto(`http://localhost:${port}/#/dashboard`);
    await page.evaluate(() => { localStorage.setItem('flutter.is_dark', 'true'); });
    await page.reload();
    
    // Wait for render
    await new Promise(r => setTimeout(r, 4000));
    
    await page.screenshot({ path: 'aset/screenshot/test_responsive_tablet.png' });
    console.log('[+] Responsive Tablet view captured');

  } catch(e) {
    console.log(e);
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
