const puppeteer = require('puppeteer');
const express = require('express');
const path = require('path');

const app = express();
const port = 8081;

app.use(express.static(path.join(__dirname, 'build', 'web')));

const server = app.listen(port, async () => {
  console.log(`[+] Server running at http://localhost:${port}`);

  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // 1. Screenshot Google Fonts
    console.log('[+] Capturing Google Fonts...');
    const pageFonts = await browser.newPage();
    await pageFonts.setViewport({ width: 1200, height: 800 });
    await pageFonts.goto('https://fonts.google.com/?query=poppins', {waitUntil: 'networkidle2'});
    await pageFonts.screenshot({ path: 'aset/screenshot/google_fonts.png' });
    await pageFonts.close();

    // 2. Screenshot Bottom Navigation
    console.log('[+] Capturing Bottom Navigation Bar...');
    const pageApp = await browser.newPage();
    await pageApp.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true });
    
    await pageApp.goto(`http://localhost:${port}/#/dashboard`);
    await pageApp.evaluate(() => {
      localStorage.setItem('flutter.is_dark', 'true');
    });
    await pageApp.reload();
    
    // Wait for app to render
    await new Promise(r => setTimeout(r, 4000));
    
    // The bottom nav bar on a 390x844 device is roughly the bottom 80 pixels
    await pageApp.screenshot({ 
      path: 'aset/screenshot/bottom_nav.png',
      clip: { x: 0, y: 760, width: 390, height: 84 }
    });
    await pageApp.close();

  } catch (error) {
    console.error(error);
  } finally {
    await browser.close();
    server.close();
    console.log('[+] DONE!');
    process.exit(0);
  }
});
