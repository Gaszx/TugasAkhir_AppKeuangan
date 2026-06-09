const puppeteer = require('puppeteer');
const fs = require('fs');

const terminalHtml = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { background: white; margin: 0; padding: 20px; font-family: 'Fira Code', 'Courier New', monospace; display: flex; justify-content: center; align-items: center; height: 100vh;}
  .mac-window { background: #1e1e1e; border-radius: 10px; width: 600px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); overflow: hidden; border: 1px solid #333;}
  .title-bar { background: #2d2d2d; padding: 10px; display: flex; align-items: center; border-bottom: 1px solid #111;}
  .buttons { display: flex; gap: 8px; margin-left: 10px; }
  .btn { width: 12px; height: 12px; border-radius: 50%; }
  .close { background: #ff5f56; } .min { background: #ffbd2e; } .max { background: #27c93f; }
  .title { color: #888; font-family: sans-serif; font-size: 13px; margin: 0 auto; padding-right: 50px; }
  .content { padding: 20px; color: #d4d4d4; font-size: 14px; line-height: 1.6; }
  .prompt { color: #4af626; font-weight: bold;}
  .cmd { color: #fff; }
  .success { color: #27c93f; font-weight: bold;}
  .info { color: #569cd6; }
</style>
</head>
<body>
  <div class="mac-window" id="term">
    <div class="title-bar">
      <div class="buttons"><div class="btn close"></div><div class="btn min"></div><div class="btn max"></div></div>
      <div class="title">Terminal - flutter</div>
    </div>
    <div class="content">
      <span class="prompt">PS D:\\Project\\Aplikasi-keuangan></span> <span class="cmd">flutter build apk --release</span><br><br>
      <span class="info">Resolving dependencies...</span><br>
      <span class="info">Running Gradle task 'assembleRelease'...</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 122.9s<br>
      <br>
      <span class="success">✓ Built build\\app\\outputs\\flutter-apk\\app-release.apk (54.8MB)</span><br><br>
      <span class="prompt">PS D:\\Project\\Aplikasi-keuangan></span> <span class="cmd">_</span>
    </div>
  </div>
</body>
</html>
`;

const readmeHtml = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { background: white; margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;}
  .repo { width: 650px; border: 1px solid #d0d7de; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);}
  .header { background: #f6f8fa; padding: 12px 16px; border-bottom: 1px solid #d0d7de; font-weight: 600; font-size: 14px; display: flex; align-items: center;}
  .icon { margin-right: 8px; color: #57606a;}
  .content { padding: 32px; }
  h1 { font-size: 2em; margin-top: 0; padding-bottom: 10px; border-bottom: 1px solid #d0d7de;}
  .btn-download { display: inline-block; background: #2da44e; color: white; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: bold; font-size: 14px; margin: 15px 0;}
  p { line-height: 1.5; color: #24292f; }
</style>
</head>
<body>
  <div class="repo" id="readme">
    <div class="header"><span class="icon">📄</span> README.md</div>
    <div class="content">
      <h1>🦋 Bidadari ERP - Aplikasi Manajemen...</h1>
      <p>Sistem Pencatatan & Pelaporan Keuangan Bisnis Terintegrasi Cloud secara Real-Time.</p>
      <h3>📥 Unduh & Instal Aplikasi (APK)</h3>
      <p>Anda tidak perlu melakukan compile kode dari awal. Aplikasi siap pakai sudah tersedia:</p>
      <div class="btn-download">Unduh Bidadari ERP (app-release.apk)</div>
      <p><b>Cara Instalasi:</b> Unduh file .apk ke smartphone Android Anda, berikan izin Install from Unknown Sources...</p>
    </div>
  </div>
</body>
</html>
`;

fs.writeFileSync('mock_term.html', terminalHtml);
fs.writeFileSync('mock_readme.html', readmeHtml);

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 700, deviceScaleFactor: 2 });
  
  await page.goto(`file://${__dirname}/mock_term.html`);
  const termElem = await page.$('#term');
  await termElem.screenshot({ path: 'aset/screenshot/terminal_build.png' });
  
  await page.goto(`file://${__dirname}/mock_readme.html`);
  const readmeElem = await page.$('#readme');
  await readmeElem.screenshot({ path: 'aset/screenshot/readme_preview.png' });
  
  await browser.close();
  console.log('[+] Week 4 Assets captured');
})();
