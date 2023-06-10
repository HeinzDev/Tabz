const express = require('express');
const path = require('path');
const port = 8080;

const dotenv = require('dotenv');

const connectToDataBase = require('./api-tabz/database/connect');
const File = require('./api-tabz/database/model/files.model.js');
const Riff = require('./api-tabz/database/model/riff.model.js');
dotenv.config();

connectToDataBase();

const app = express();
app.use(express.json());

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});

app.get("/create", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/saved", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
});
app.get("/favorites", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
  });

app.get("/api/pastas", async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/pastas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const file = await File.findById(id);
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/pastas/:pastaId/textos", async (req, res) => {
  try {
    const pastaId = req.params.pastaId;
    const textos = await Riff.find({ pastaId: pastaId });
    res.status(200).json(textos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/favorites", async (req, res) => {
  try {
    const textos = await Riff.find({ favorite: true });
    res.status(200).json(textos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/pastas", async (req, res) => {
  try {
    const { name } = req.body;
    const file = await File.create({ name });
    res.status(201).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/pastas/textos", async (req, res) => {
  try {
    const product = await Riff.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/pastas/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const file = await File.findByIdAndRemove(id);
    res.status(200).json(file);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/pastas/textos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const file = await Riff.findOneAndDelete({ _id: id })
    
    if (file) {
      res.status(200).json(file);
    } else {
      res.status(404).json({ message: "Arquivo não encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(process.env.PORT || port, () => {
  console.log(`running on port:${process.env.PORT || port}`);
});
