const fs = require("fs");

const htmlPath = "public/index.html";
let html = fs.readFileSync(htmlPath, "utf8");

// Inject custom.css link before </head>
const cssLink = '<link rel="stylesheet" href="custom.css">';
html = html.replace("</head>", `${cssLink}</head>`);

fs.writeFileSync(htmlPath, html);