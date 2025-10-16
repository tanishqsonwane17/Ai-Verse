import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    fullName: {
      firstName: '',
      lastName: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'firstName' || name === 'lastName') {
      setFormData({
        ...formData,
        fullName: { ...formData.fullName, [name]: value },
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
      fullName: {
        firstName: formData.fullName.firstName,
        lastName: formData.fullName.lastName,
      },
    };

    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/register',
        submitData,
        { headers: { 'Content-Type': 'application/json' },withCredentials: true }
      );
      console.log('Server Response:', response.data);
      alert('Registration Successful!');
      navigate('/metaverse');
    } catch (error) {
      console.error('Error registering:', error.response?.data || error);
      alert('Registration Failed! Check console for details.');
    }
  };

  return (
    <div className="text-white p-6 rounded-2xl bg-[#000934c7] shadow-2xl backdrop-blur-md border border-gray-700 w-[400px]">
      <h2 className="text-2xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Create Your Account
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-xl border border-gray-600 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
        />

        {/* First & Last Name */}
        <div className="flex gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.fullName.firstName}
            onChange={handleChange}
            required
            className="flex-1 w-0 px-4 py-2 rounded-xl border border-gray-600 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.fullName.lastName}
            onChange={handleChange}
            required
            className="flex-1 w-0 px-4 py-2 rounded-xl border border-gray-600 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-xl border border-gray-600 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="px-4 py-2 rounded-xl border border-gray-600 bg-transparent text-gray-100 placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all duration-200"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-2 rounded-xl font-semibold mt-2 hover:scale-[1.02] hover:shadow-lg transition-all duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
