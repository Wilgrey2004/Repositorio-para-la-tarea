import http from "node:http";
import path from "node:path";
import fs from "node:fs";

import http from "node:http";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rutaDelArchivo = `${__dirname}/index.html`;

const server = http.createServer((req, res) => {
  const contenidoHtml = readFileSync(rutaDelArchivo, "utf-8");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(contenidoHtml);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Servidor listo en http://localhost:3000/");
});
