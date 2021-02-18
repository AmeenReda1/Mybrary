////////////////////////////////old-commit----////////////////////////////////////

if(process.env.NODE_ENV !='production'){
    require('dotenv').config();
	}
    
    
const express=require('express');	
const mongoose=require('mongoose');	

const indexRouter=require('./routes/index')
const authorRouter=require('./routes/author')


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
const bodyParser=require('body-parser')
app.set('view engine','ejs');
app.use(expressLayout);
app.set('views','views')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({limit:'10mb',extended:false}))
app.set('layout','layouts/layout')


app.use('',indexRouter); 
app.use('/authors',authorRouter); 


app.listen(process.env.PORT ||3000);





