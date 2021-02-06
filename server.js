`use Strict`;
if(process.env.NODE_ENV !='production'){
    require('dotenv').config();
}

const express = require('express');
const { connect } = require('mongoose');
const expressLayout = ('express-ejs-layouts');
//IMPORTED ROUTE
const indexRouter = require('./routes/index')

const app = express();

connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err) => {
        if (err) console.log("Error connecting to Database")
        else console.log("Connected to database successfully");
})


app.set('view engine', 'ejs');
app.set('views', 'views')
app.set('layout', 'layouts/layout')

app.use(expressLayout);
app.use(express.static('public'))
//ROUTE MIDDLEWARE
app.use('/',indexRouter);

const PORT = process.env.PORT ||3000

//Server listening  
app.listen(PORT, (err) => {
    if (err) console.log(`Error connecting server on port:${PORT}`)
    console.log(`Server connected on port ${PORT}`);
});