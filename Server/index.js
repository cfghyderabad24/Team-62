const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const CompanyRouter=require("./routes/CompanyRouter.js")

const app=express()

app.use(cors())
app.use(express.json())

const dbName="company"

const mongoURI = `${process.env.MONGODB_URI}${dbName}`;

mongoose.connect(mongoURI).then(()=>{console.log("Connected!")})

app.use("/company",CompanyRouter)

app.listen(4000,()=>{
    console.log("Running.......")
})