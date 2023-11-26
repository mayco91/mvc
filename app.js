const express = require("express");
const app = express();
const path = require("path");
const routerMain = require("./routers/main.js");


app.get("/", routerMain);

app.get("/about", (req,res)=>{
    res.sendFile("/views/about.html")
});

app.use(express.static("public"))


app.listen(3000, ()=>{
console.log("servidor funcionando")})
