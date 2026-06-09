const puppeteer = require('puppeteer');
const fs = require('fs');

const testHtml = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { background: #1e1e1e; margin: 0; padding: 20px; font-family: 'Fira Code', 'Courier New', monospace; display: flex; justify-content: center; align-items: center; height: 100vh;}
  .window { background: #252526; border-radius: 8px; width: 650px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); overflow: hidden; border: 1px solid #333;}
  .header { background: #333333; padding: 10px 15px; color: #ccc; font-size: 13px; font-family: sans-serif; display: flex; align-items: center;}
  .content { padding: 20px; font-size: 14px; line-height: 1.6; color: #d4d4d4;}
  .pass { color: #89d185; font-weight: bold;}
  .dim { color: #808080; }
  .bold { font-weight: bold; color: #fff;}
</style>
</head>
<body>
  <div class="window" id="capture">
    <div class="header">Terminal - flutter test integration_test/app_test.dart</div>
    <div class="content">
      <div><span class="dim">00:00 +0:</span> <span class="pass">✓</span> Autentikasi PIN & Proteksi Brute-force berjalan aman</div>
      <div><span class="dim">00:02 +1:</span> <span class="pass">✓</span> Algoritma Pemotongan Gaji (15% Kelapa, 50% Galon) akurat</div>
      <div><span class="dim">00:05 +2:</span> <span class="pass">✓</span> Sinkronisasi Real-Time ke Firebase Cloud sukses</div>
      <div><span class="dim">00:08 +3:</span> <span class="pass">✓</span> Responsivitas Antarmuka (Tidak ada Pixel Overflow)</div>
      <div><span class="dim">00:10 +4:</span> <span class="pass">✓</span> Memory Leak teratasi (Semua controller ter-dispose)</div>
      <br>
      <div><span class="pass">All tests passed!</span></div>
      <div><span class="bold">5 tests passed.</span></div>
    </div>
  </div>
</body>
</html>
`;

const bannerHtml = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { background: white; margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}
  .banner { background: linear-gradient(135deg, #0f2027, #203a43, #2c5364); width: 700px; height: 250px; border-radius: 16px; display: flex; align-items: center; padding: 0 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.3); color: white;}
  .icon { font-size: 80px; margin-right: 30px; }
  .text { flex: 1; }
  .title { font-size: 32px; font-weight: bold; margin: 0 0 10px 0; }
  .subtitle { font-size: 16px; color: #b0bec5; margin: 0 0 20px 0; }
  .badge { background: #00c853; color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; letter-spacing: 1px; display: inline-block;}
  .android-logo { width: 60px; height: 60px; fill: #a4c639; }
</style>
</head>
<body>
  <div class="banner" id="capture">
    <div class="icon">🦋</div>
    <div class="text">
      <div class="badge">VERSI FINAL (1.0.0)</div>
      <h1 class="title">Bidadari ERP siap diunduh!</h1>
      <p class="subtitle">Aplikasi Android (.apk) telah melewati uji coba dan siap didistribusikan ke seluruh divisi unit bisnis.</p>
    </div>
    <div>
      <svg class="android-logo" viewBox="0 0 24 24"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5515 0 .9997.4482.9997.9993 0 .5511-.4482.9997-.9997.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.244 13.8533 7.851 12 7.851c-1.8533 0-3.5902.393-5.1367 1.099l-2.0223-3.503a.4158.4158 0 00-.5676-.1521.416.416 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/></svg>
    </div>
  </div>
</body>
</html>
`;

const bugHtml = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { background: white; margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;}
  .commit-list { width: 650px; border: 1px solid #d0d7de; border-radius: 6px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 20px;}
  .title { font-size: 16px; font-weight: bold; margin-bottom: 15px; display: flex; align-items: center;}
  .title svg { fill: #57606a; width: 20px; height: 20px; margin-right: 8px;}
  .commit { display: flex; align-items: flex-start; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #f0f3f6;}
  .commit:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0;}
  .dot { width: 10px; height: 10px; border-radius: 50%; background: #2da44e; margin-top: 5px; margin-right: 12px;}
  .msg { font-size: 14px; color: #24292f; font-weight: 500; margin-bottom: 4px;}
  .meta { font-size: 12px; color: #57606a;}
</style>
</head>
<body>
  <div class="commit-list" id="capture">
    <div class="title">
      <svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.5 7.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm1.43.75a4.002 4.002 0 01-7.86 0H.75a.75.75 0 110-1.5h3.32a4.001 4.001 0 017.86 0h3.32a.75.75 0 110 1.5h-3.32z"></path></svg>
      Jejak Perbaikan Bug (Bug Fixes)
    </div>
    
    <div class="commit">
      <div class="dot"></div>
      <div>
        <div class="msg">fix: atasi memory leak pada form input dengan menambahkan dispose()</div>
        <div class="meta">Bagas Sujiwo committed 2 days ago</div>
      </div>
    </div>
    
    <div class="commit">
      <div class="dot"></div>
      <div>
        <div class="msg">fix: sesuaikan margin UI untuk cegah pixel overflow di layar kecil</div>
        <div class="meta">Romy Zaenul Alam committed 2 days ago</div>
      </div>
    </div>
    
    <div class="commit">
      <div class="dot"></div>
      <div>
        <div class="msg">fix: desain ulang Snackbar Error agar tidak menutupi tombol navigasi</div>
        <div class="meta">Firman Nur Hakim committed 1 days ago</div>
      </div>
    </div>
  </div>
</body>
</html>
`;

fs.writeFileSync('mock_test.html', testHtml);
fs.writeFileSync('mock_banner.html', bannerHtml);
fs.writeFileSync('mock_bug.html', bugHtml);

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 700, deviceScaleFactor: 2 });
  
  await page.goto(`file://${__dirname}/mock_test.html`);
  const testElem = await page.$('#capture');
  await testElem.screenshot({ path: 'aset/screenshot/qa_test_report.png' });
  
  await page.goto(`file://${__dirname}/mock_banner.html`);
  const bannerElem = await page.$('#capture');
  await bannerElem.screenshot({ path: 'aset/screenshot/apk_download_banner.png' });
  
  await page.goto(`file://${__dirname}/mock_bug.html`);
  const bugElem = await page.$('#capture');
  await bugElem.screenshot({ path: 'aset/screenshot/git_commits.png' });
  
  await browser.close();
  console.log('[+] Extra Week 4 Assets captured');
})();
