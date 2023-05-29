const express = require('express');
const path = require('path');
const port = 3000;
const cors = require('cors');

const dotenv = require('dotenv');

const connectToDataBase = require('./database/connect');
const File = require('./database/model/files.model.js');
const Riff = require('./database/model/riff.model.js');
dotenv.config();

connectToDataBase();

const app = express();
app.use(express.json())
app.use(cors());

app.get("/pastas", async (req,res)=>{
    try {
        const files = await File.find();
        res.status(200).json(files);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

app.get("/pastas/:id", async (req,res)=>{
    try {
        const id = req.params.id;
        const file = await File.findById(id);
    
        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get("/pastas/:pastaId/textos", async (req, res) => {
    try {
      const pastaId = req.params.pastaId;
      const textos = await Riff.find({ pasta: pastaId });
      res.status(200).json(textos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

app.get("/favorites", async (req, res) => {
    try {
      const textos = await Riff.find({ favorite: true });
      res.status(200).json(textos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});
  

app.post("/pastas", async (req,res) => {    
    try {
        const {name} = req.body;
        const file = await File.create({name});
        res.status(201).json(file);
    } catch (error) {
        res.status(500).json({message: error.message});   
    }
})

app.post("/pastas/textos/", async (req,res)=>{
	try{
	const product = await Riff.create(req.body);
	res.status(201).json(product);
	
	}catch(error){
		res.status(500).json({message: error.message})
	}	
})

app.delete("/pastas/:id", async (req,res)=>{
    try {
        const id = req.params.id;
        const file = await File.findByIdAndRemove(id);

        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({message: error.message});   
    }
})

app.delete("/pastas/textos/:id", async (req,res)=>{
    try {
        const id = req.params.id;
        const file = await File.findByIdAndRemove(id);

        res.status(200).json(file);
    } catch (error) {
        res.status(500).json({message: error.message});   
    }
})

app.listen(process.env.PORT || port, () => {console.log(`running on port:${process.env.PORT || port}`)});