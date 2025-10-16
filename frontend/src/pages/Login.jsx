import React, { useState } from 'react';

const Login = ({ onClose }) => {
  const [formData, setFormData] = useState({
    identifier: '', // email OR username
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // simple email test
  const isEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { identifier, password } = formData;
    if (!identifier || !password) {
      alert('Please fill all fields');
      return;
    }

    // Build payload: if identifier looks like email, send { email }, else { username }
    const payload = isEmail(identifier)
      ? { email: identifier.trim(), password }
      : { username: identifier.trim(), password };

    console.log('Login Payload:', payload);
    // TODO: call your login API with `payload` here

    alert('Login Successful!');
    if (onClose) onClose();
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">Login to Your Account</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="identifier"
          placeholder="Email or Username"
          value={formData.identifier}
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
