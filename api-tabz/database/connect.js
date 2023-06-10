//mongodb > https://cloud.mongodb.com

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const mongoURL = process.env.MONGODB_USER && process.env.MONGODB_PASSWORD !== ''
  ? `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@tabz.naujusp.mongodb.net/?retryWrites=true&w=majority`
  : process.env.LOCAL;
  
mongoose.set('strictQuery', true)
const connectToDataBase = () =>{
    mongoose.connect(`${mongoURL}`)
    .then((res) => {
        console.log('connected to database');
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = connectToDataBase;
