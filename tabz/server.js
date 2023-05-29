const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const port = 8080;

dotenv.config();
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get("/*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
})


app.listen(process.env.PORT || port, () => {console.log(`running on port:${port}`)});