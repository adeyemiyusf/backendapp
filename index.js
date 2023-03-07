import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();

mongoose.set('strictQuery', true);

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongo Database")
      } catch (error) {
        handleError(error);
      }
}


app.listen(8800, () =>{
    connect()
    console.log("Backend server is working fine")
})