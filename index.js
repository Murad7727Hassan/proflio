const express=require("express");//return core express
const app =express();

app.set("view engine","ejs");//
app.set('views','application');
app.listen('3000');
console.log("server strtaed");
app.use('/app_style',express.static('application/css'));//type middelware exiet before respons //one method
app.use('/app_image',express.static('application/image'));//type middelware exiet before respons //one method
 app.get("/",(req,res)=>{
     res.render("index");
});