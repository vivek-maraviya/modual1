require('dotenv').config({ path: '../.env'});

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");

const User = require("./user");

const app = express();

app.use(express.json());
app.use(cors());

// Force Google DNS
dns.setServers(["8.8.8.8","8.8.4.4"]);

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.post("/Registration", async(req,res)=>{

    try{

        const {name,email,password}=req.body;

        const data = new User({
            name,
            email,
            password
        });

        await data.save();

        res.send("User Registration Done");

    } catch(err){

        console.log(err);
        res.status(500).send("Error");

    }

});

app.listen(process.env.PORT || 8080 ,()=>{
    console.log(`Server running on port ${process.env.PORT || 8080}`);
});