const express = require('express');
const router = require('./router/route');
var cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use('/',router);

app.listen(5001,(err) => {
    if(!err){
        console.log('server is running...');    
    }else{
        console.log("server couldn't run !!!");
    }
})

var db = mongoose.connection;
db.on('connecting', function() {
    console.log('connecting to MongoDB...');
});

db.on('connected', function() {
    console.log('MongoDB connected!');
});
db.once('open', function() {
    console.log('MongoDB connection opened!');
});
db.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
});

db.on('disconnected', function() {
    console.log('MongoDB disconnected!');
});