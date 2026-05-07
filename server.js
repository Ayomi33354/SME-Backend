// console.log ("Me")

const express = require("express")
const dotenv = require("dotenv")
const connectDatabase = require("./ConnectDatabase/DbConnect")
dotenv.config()
const app = express()


const port = process.env.PORTNUMBER
// console.log(port);
         
                                                                       
               

app.listen(port, ()=>{
    console.log(`Port Running at http://localhost:${port}`);
})
                       
               
                      
connectDatabase()
app.get("/", (req,res)=>{        
    res.send("Hello Ayomide")             
})