const express = require('express');
const connect = require('./connection');
const cors = require('cors')
const user = require('./routes/user');
const book = require('./routes/book')
const app = express();
app.use(cors());
connect();
app.use(user);
app.use(book);

app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Your Server is running on port 3000');       
    }
})