const puppeteer = require('puppeteer');
const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'build', 'web')));

const server = app.listen(port, async () => {
  console.log(`[+] Server running at http://localhost:${port}`);
  console.log(`[+] Starting FAST AUTOMATION for Galon & Kontrakan...`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=390,844']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });

  const modes = ['Light', 'Dark'];

  for (const mode of modes) {
    const isDark = mode === 'Dark';
    const prefix = mode;

    console.log(`\n===========================================`);
    console.log(`[=>] STARTING CAPTURE: ${mode} MODE (Galon & Kontrakan)`);
    console.log(`===========================================\n`);

    await page.goto(`http://localhost:${port}/#/`);
    await page.evaluate((dark) => {
      // Flutter web shared_preferences uses 'flutter.' prefix and stores booleans as "true" or "false"
      localStorage.setItem('flutter.is_dark', dark ? 'true' : 'false');
    }, isDark);

    // Force a full reload so the Flutter app restarts and reads the localStorage again
    await page.reload();

    // Go directly to Dashboard to see tabs
    await page.goto(`http://localhost:${port}/#/dashboard`);
    await new Promise(r => setTimeout(r, 4000));

    console.log(`Clicking Galon Tab...`);
    await page.mouse.click(230, 812);
    await page.mouse.click(240, 812);
    await page.mouse.click(250, 812);
    await page.mouse.click(260, 812);
    await page.mouse.click(270, 812);
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: `screenshot/${prefix}_04_GalonReportScreen.png` });

    console.log(`Clicking Kontrakan Tab...`);
    await page.mouse.click(320, 812);
    await page.mouse.click(330, 812);
    await page.mouse.click(340, 812);
    await page.mouse.click(350, 812);
    await page.mouse.click(360, 812);
    await page.mouse.click(370, 812);
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: `screenshot/${prefix}_05_KontrakanReportScreen.png` });
  }

  await browser.close();
  
  console.log(`\n[+] Galon and Kontrakan Screenshots successfully regenerated!`);
  
  server.close(() => {
    console.log(`Server closed. Automation complete.\n`);
    process.exit(0);
  });
});
