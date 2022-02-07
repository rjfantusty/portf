
const express=require("express")
const path=require('path')
const port=process.env.PORT || 8000;

const staticpath=path.join(__dirname,'../public')
console.log(staticpath)
const server= express()
server.set("view engine","hbs")


server.use(express.static(staticpath))   // to serve static website
// we will use hbs to server dynamic website or data to client


// for install hbs cmd "npm install hbs"
// now create dir named "views" in which we create our hbs file which is mostly same  as html 
// now we declare the view engine for hbs



server.get("/myhbs",(req,res)=>{
    
    res.render("index",{myname:"Raj prajapati" , dynamic:"this is dynamic contect"})
})

server.get("/about",(req,res)=>{
    res.send("this is about page")
})
server.get("*",(req,res)=>{
    res.send("this is 404 error page")
})

server.listen(8000,()=>{
    console.log("server listening at 8000")
})
