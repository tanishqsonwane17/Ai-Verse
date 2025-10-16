import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    identifier: '', // email OR username
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { identifier, password } = formData;
    if (!identifier || !password) {
      alert('Please fill all fields');
      return;
    }

    const payload = isEmail(identifier)
      ? { email: identifier.trim(), password }
      : { username: identifier.trim(), password };

    try {
      const response = await axios.post(
        'http://localhost:3000/api/auth/login',
        payload,
        { headers: { 'Content-Type': 'application/json' },withCredentials: true }
      );
      console.log('Login Response:', response.data);
      alert('Login Successful!');
      navigate('/metaverse');
      if (onClose) onClose();
    } catch (error) {
      console.error('Error logging in:', error.response?.data || error);
      alert('Login Failed! Check console for details.');
    }
  };

  return (
    <div className="text-white p-6 rounded-2xl bg-[#000934c7] shadow-2xl backdrop-blur-md border border-gray-700 w-[400px]">
      <h2 className="text-2xl font-semibold text-center mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        Login to Your Account
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          name="identifier"
          placeholder="Email or Username"
          value={formData.identifier}
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
