const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
        fullname: {
            firstname: {
                type: String,
                required: true,
                minLenght: [3, 'First name must be at least 3 characters long'],
                trim : true
            },
            lastname: {
                type: String,
                minLenght: [3, 'last name must be at least 3 characters long'],
                trim : true
            }
        },
        email: {
            type: String,
            required: true,
            minLenght: [5, 'email must be at least 3 characters long'],
            trim : true
        },
        password: {
            type: String,
            required: true,
            select:false, //
            minLenght: [6, 'Password must be at least 6 characters long'],
            trim : true
        },
        //it is used to live track the location of driver
        socketId:{
            type: String
        }
})


//creating 3 methods
userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

//creating model
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;