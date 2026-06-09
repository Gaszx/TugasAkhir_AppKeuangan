const puppeteer = require('puppeteer');
const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #1C1C1E; margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
  .snackbar { width: 350px; border-radius: 10px; padding: 14px 16px; display: flex; align-items: center; box-shadow: 0 8px 16px rgba(0,0,0,0.5); box-sizing: border-box; }
  .error { background-color: #FF5252; }
  .success { background-color: #006C5B; }
  .text { color: white; font-size: 14px; margin-left: 12px; font-weight: 500; letter-spacing: 0.1px;}
  .icon { display: flex; align-items: center; justify-content: center; }
  .icon svg { fill: white; width: 24px; height: 24px; }
</style>
</head>
<body>
  <div class="snackbar error" id="err">
    <div class="text">Error: Harap isi semua nominal dengan benar!</div>
  </div>
  <br>
  <div class="snackbar success" id="succ">
    <div class="icon">
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    </div>
    <div class="text">Transaksi Berhasil Disimpan!</div>
  </div>
</body>
</html>
`;

fs.writeFileSync('mock_snackbar.html', htmlContent);

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 800, height: 600, deviceScaleFactor: 2 });
  
  await page.goto(`file://${__dirname}/mock_snackbar.html`);
  
  const errElem = await page.$('#err');
  await errElem.screenshot({ path: 'aset/screenshot/snackbar_error.png' });
  
  const succElem = await page.$('#succ');
  await succElem.screenshot({ path: 'aset/screenshot/snackbar_success.png' });
  
  await browser.close();
  console.log('[+] Snackbars captured');
})();
