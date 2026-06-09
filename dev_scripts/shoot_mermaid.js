const puppeteer = require('puppeteer');
const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<style>
  body { background: white; margin: 0; display: flex; align-items: center; justify-content: center; height: 100vh;}
  .mermaid { background: white; padding: 20px; border-radius: 8px; }
</style>
</head>
<body>
  <div class="mermaid" id="diagram">
    graph LR
      UI[Antarmuka Layar<br>UI Flutter] -->|Input Data| P(Finance Provider<br>State Manager)
      P -->|Kirim Request| DB[(Firebase<br>Firestore)]
      DB -.->|Real-time Sync| P
      P -.->|Update Layar| UI
  </div>
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true, theme: 'base', themeVariables: { primaryColor: '#e3f2fd', edgeLabelBackground:'#ffffff', tertiaryColor: '#fff' } });
  </script>
</body>
</html>
`;

fs.writeFileSync('mock_mermaid.html', htmlContent);

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 900, height: 400, deviceScaleFactor: 2 });
  
  await page.goto(`file://${__dirname}/mock_mermaid.html`, { waitUntil: 'networkidle0' });
  
  // Wait a moment for mermaid to render fully
  await new Promise(r => setTimeout(r, 1000));
  
  const element = await page.$('#diagram');
  await element.screenshot({ path: 'aset/screenshot/data_flow.png' });
  
  await browser.close();
  console.log('[+] Mermaid Diagram captured');
})();
