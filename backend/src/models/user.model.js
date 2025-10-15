const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: [3, 'Username must be at least 3 characters long'],
    maxLength: [30, 'Username cannot exceed 30 characters']
  },
  fullName:{
    firstName:{
        type: String,
        required: true,
        trim: true,
        maxLength: [50, 'First name cannot exceed 50 characters']
    },
    lastName:{
        type: String,
        maxLength: [50, 'Last name cannot exceed 50 characters'],
        trim: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [
     /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please enter a valid email address',
    ],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, 'Password must be at least 3 characters long'],
  },
})


const User = mongoose.model('User', userSchema);
module.exports = User;