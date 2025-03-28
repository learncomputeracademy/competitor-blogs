const fs = require("fs");

const htmlPath = "public/index.html";
let html = fs.readFileSync(htmlPath, "utf8");

const customHtml = `
  <footer style="text-align: center; padding: 10px; background-color: #16a085; color: white;">
    <p>Blogs - Powered by Computer Center © 2025</p>
  </footer>
`;
html = html.replace("</body>", `${customHtml}</body>`);

fs.writeFileSync(htmlPath, html);