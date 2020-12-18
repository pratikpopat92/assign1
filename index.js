const express = require('express');
const mongoose=require('mongoose');
require('dotenv').config();
const bodyParser=require('body-parser');
const categoryRoute=require('./routes/category');
const productRoute=require('./routes/product');

const app=express();
mongoose.connect('mongodb://localhost:27017/assign1', {useNewUrlParser: true},function(err){
  console.log('Connection to Mongodb successful!');  
});
app.use(bodyParser.json());
app.use('/category',categoryRoute);
app.use('/product',productRoute);

app.listen(3000,()=>console.log('server started!'));