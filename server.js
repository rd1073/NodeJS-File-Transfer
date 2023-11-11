const mongoose = require("mongoose")
const { File }=require("./db.js")
const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true }))


 


//Start Server
app.listen(3000, () => {
    console.log("Server Has Started");
  });