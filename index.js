var express = require('express')
const app =express();
const bodyparser = require('body-parser')



const userRoute=require('./routes/userroute')
app.use(bodyparser.urlencoded({extended:true}))


app.use("/user",userRoute);
app.listen(8000,() => {
    console.log('http://127.0.0.1:8000')
})