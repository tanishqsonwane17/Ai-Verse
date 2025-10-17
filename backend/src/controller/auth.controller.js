const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function registerUser(req, res) {
    const {username, email, password, fullName: {firstName, lastName}} = req.body;

    try {
        const existingUser = await userModel.findOne({$or: [{username}, {email}]});
        if (existingUser) {
            return res.status(400).json({message: 'Username or email already exists'});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userModel.create({
            username,
            email,
            password: hashedPassword,
            fullName: {firstName, lastName}
        });

       const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
       res.cookie('token', token, {
       httpOnly: true,         
       secure: false,          
       sameSite: 'lax',      
       maxAge: 3600000,
       path: '/'         
       });

       return res.status(201).json({
        message: 'User registered successfully',
        user:{
            id: user._id,
            username: user.username,
            email: user.email,
            fullName: user.fullName

        },token
       })
    }
    catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({message: 'Server error'});
    }
}
async function loginUser(req, res) {
    const {username, email, password} = req.body;
    try{
        const user = await userModel.findOne({$or: [{username}, {email}]});
        if(!user){
            return res.status(400).json({message: 'Invalid username or email'})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: 'Invalid credentials'});
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: '1h'})
       res.cookie('token', token, {
         httpOnly: true,         
         secure: false,          
         sameSite: 'lax',        
         maxAge: 3600000,
         path: '/'        
  });
        return res.status(200).json({
            message: 'Login successful',
            user:{
                id: user._id,
                username: user.username,
                email: user.email,
                fullName: user.fullName
            },
            token
        })
    }
    catch(error){
        console.error('Error logging in user:', error);
        res.status(500).json({message: 'Server error'});
    }
}

async function logoutUser(req, res) {
    try{
        res.clearCookie('token', {
            httpOnly: true,
            secure: false, 
            sameSite: 'lax',
            path: '/' 
        });
        return res.status(200).json({message: 'Logout successful'});
    }
    catch(error){
        console.error('Error logging out user:', error);
        res.status(500).json({message: 'Server error'});
    }
}

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};