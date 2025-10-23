// Base API SETUP
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const app=express();

// Middlewares
app.use(express.json());
app.use(cors());


// Connect mongo
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log("Mongo Error", err))


// Basic route
app.get("/", (req,res)=>{
    res.send("API is running...")
});


// Start server
const PORT= process.env.PORT||5000;
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`))