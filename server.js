////////////////////////////////old-commit----////////////////////////////////////

if(process.env.NODE_ENV !='production'){
    require('dotenv').config();
	}
    
    
const express=require('express');	
const mongoose=require('mongoose');	

mongoose.connect(process.env.DATABASE_URL,{	
    useNewUrlParser:true	//IMPORTED ROUTE
})
const db=mongoose.connection
db.on('error',error=>{
    console.log(error);
})
db.once('open',()=>{
    console.log('connected to  mongoose');
})
const app=express();
const expressLayout=require('express-ejs-layouts');
const indexRouter=require('./routes/index')
app.set('view engine','ejs');
// app.use(expressLayout);
app.set('views','views')
app.use(express.static('public'))
app.set('layout','layouts/layout')
app.use('',indexRouter);
app.listen(process.env.PORT ||3000);