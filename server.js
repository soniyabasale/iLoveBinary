var express=require("express");
var app=new express();

app.get("/",()=>{

    console.log("hey there!")
}
)

app.listen(3450,()=>{
    console.log("listening to port 3450....")
})
