import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(3333, () => console.log("App started"));
