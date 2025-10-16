import React, { useState } from 'react';
import axios from 'axios'
const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullName: {
      firstName: '',
      lastName: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if(name === 'firstName' || name === 'lastName') {
      setFormData({
        ...formData,
        fullName: { ...formData.fullName, [name]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const submitData = {
    username: formData.username,
    email: formData.email,
    password: formData.password,
    firstName: formData.fullName.firstName,
    lastName: formData.fullName.lastName
  };

  try {
    const response = await axios.post('http://localhost:3000/api/auth/register', submitData);
    console.log('Server Response:', response.data);
    alert('Registration Successful!');
  } catch (error) {
    console.error('Error registering:', error);
    alert('Registration Failed! Try again.');
  }
};

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">Create Your Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* First and Last Name side by side */}
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.fullName.firstName}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-2 w-0 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.fullName.lastName}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-2 w-0 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-xl font-semibold mt-2 hover:bg-blue-700 transition-all"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
