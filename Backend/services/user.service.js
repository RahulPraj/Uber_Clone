const userModel = require('../models/user.model');

module.exports.createUser = async ({firstname,lastname,email,password})=>{
    //applying check if ye field nhi mile to give error message
    if(!firstname || !email || !password){
        throw new Error('All fields are required');
    }
    //nhi to create new user
    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password
    })

    //return krdo user
    return user;
}