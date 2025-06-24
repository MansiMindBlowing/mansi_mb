// const http = require('http');
const express = require('express');
const bodyparser = require("body-parser")

const adminRoutes = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')

const app = express();

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
res.status(404).send('<h1>page not found</h1>')
next()
})

app.listen(3000,()=>console.log("running"));