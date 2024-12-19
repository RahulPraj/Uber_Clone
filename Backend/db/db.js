const mongoose = require('mongoose');

//we are creating a function to create 
//a conncection to our db

function connectToDb(){

    mongoose.connect(process.env.DB_CONNECT
    ).then(() => {
        console.log('Connected to DB');
    }).catch(err => console.log(err));
}

module.exports = connectToDb;