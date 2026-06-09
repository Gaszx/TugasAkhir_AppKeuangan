const puppeteer = require('puppeteer');
const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
<style>
  body { margin: 0; font-family: 'Google Sans', Roboto, Arial, sans-serif; background: #ffffff; color: #3c4043; }
  .header { background: #039be5; color: white; padding: 12px 24px; display: flex; align-items: center; font-size: 18px; font-weight: 500; }
  .header .project { margin-left: auto; font-size: 14px; background: rgba(255,255,255,0.2); padding: 4px 12px; border-radius: 4px; }
  .toolbar { border-bottom: 1px solid #e0e0e0; padding: 10px 24px; color: #5f6368; font-size: 14px; display: flex; gap: 20px; font-weight: 500;}
  .toolbar .active { color: #1a73e8; border-bottom: 2px solid #1a73e8; padding-bottom: 10px; margin-bottom: -11px; }
  .main { display: flex; height: 400px; }
  .panel { flex: 1; border-right: 1px solid #e0e0e0; padding: 0; }
  .panel-header { font-size: 12px; font-weight: bold; color: #5f6368; text-transform: uppercase; padding: 12px 16px; border-bottom: 1px solid #e0e0e0; background: #f8f9fa; }
  .list-item { padding: 12px 16px; font-size: 13px; border-bottom: 1px solid #f1f3f4; cursor: pointer; display: flex; align-items: center;}
  .list-item:hover { background: #f8f9fa; }
  .list-item.selected { background: #e8f0fe; color: #1a73e8; }
  .list-item .icon { font-size: 16px; margin-right: 12px; color: #f29900; }
  .doc-icon { color: #5f6368; margin-right: 12px; font-weight: bold;}
  .data-field { padding: 8px 16px; font-size: 13px; font-family: 'Roboto Mono', monospace; display: flex;}
  .data-field .key { color: #d93025; margin-right: 8px; }
  .data-field .type { color: #1a73e8; margin-right: 8px; font-size: 11px; align-self: center;}
  .data-field .val { color: #188038; }
  .data-field .val.str { color: #d93025; }
</style>
</head>
<body>
  <div class="header">
    <div style="display:flex; align-items:center;">
      <svg style="width:24px;height:24px;margin-right:12px;" viewBox="0 0 24 24" fill="white"><path d="M11.5,1.5C11.5,1.5 16,6.5 16,11.5C16,16.5 11.5,21.5 11.5,21.5C11.5,21.5 7,16.5 7,11.5C7,6.5 11.5,1.5 Z M12.5,2.5C12.5,2.5 17,7.5 17,12.5C17,17.5 12.5,22.5 12.5,22.5 C12.5,22.5 8,17.5 8,12.5C8,7.5 12.5,2.5 Z" /></svg>
      Firebase
    </div>
    <div class="project">bidadari-erp-2026</div>
  </div>
  <div style="padding: 16px 24px 0;">
    <h2 style="margin: 0 0 16px; font-size: 22px; font-weight: 400;">Firestore Database</h2>
  </div>
  <div class="toolbar">
    <div class="active">Data</div>
    <div>Rules</div>
    <div>Indexes</div>
    <div>Usage</div>
  </div>
  
  <div class="main">
    <!-- Collections -->
    <div class="panel" style="max-width: 200px;">
      <div class="panel-header">Collections</div>
      <div class="list-item"><span class="icon">📁</span> doors</div>
      <div class="list-item selected"><span class="icon">📁</span> transactions</div>
      <div class="list-item"><span class="icon">📁</span> users</div>
    </div>
    
    <!-- Documents -->
    <div class="panel" style="max-width: 250px;">
      <div class="panel-header">Documents</div>
      <div class="list-item"><span class="doc-icon">📄</span> 1717900800000</div>
      <div class="list-item selected"><span class="doc-icon">📄</span> TXN-8A9F-2B4C</div>
      <div class="list-item"><span class="doc-icon">📄</span> TXN-9F2D-4A1B</div>
      <div class="list-item"><span class="doc-icon">📄</span> TXN-B3C4-1E2F</div>
    </div>
    
    <!-- Data -->
    <div class="panel">
      <div class="panel-header">Document: TXN-8A9F-2B4C</div>
      <div style="padding: 8px 0;">
        <div class="data-field"><span class="key">amount:</span> <span class="type">(number)</span> <span class="val">12222</span></div>
        <div class="data-field"><span class="key">date:</span> <span class="type">(timestamp)</span> <span class="val">June 5, 2026 at 10:15:00 AM UTC+7</span></div>
        <div class="data-field"><span class="key">description:</span> <span class="type">(string)</span> <span class="val str">"Pendapatan Kelapa"</span></div>
        <div class="data-field"><span class="key">submittedBy:</span> <span class="type">(string)</span> <span class="val str">"GUEST"</span></div>
        <div class="data-field"><span class="key">type:</span> <span class="type">(string)</span> <span class="val str">"kelapa"</span></div>
        <div class="data-field"><span class="key">isIncome:</span> <span class="type">(boolean)</span> <span class="type" style="color:#1a73e8; margin-left:0;">true</span></div>
      </div>
    </div>
  </div>
</body>
</html>
`;

fs.writeFileSync('mock_firebase.html', htmlContent);

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 500, deviceScaleFactor: 2 });
  
  await page.goto(`file://${__dirname}/mock_firebase.html`);
  
  // Screenshot the main area
  await page.screenshot({ path: 'aset/screenshot/firebase_console.png' });
  
  await browser.close();
  console.log('[+] Firebase Console captured');
})();
