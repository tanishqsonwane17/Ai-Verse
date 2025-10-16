import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
const Metaverse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/api/auth/metaverse', {
      withCredentials: true
    })
    .then((res) => {
      console.log(" Metaverse Data:", res.data);
    })
    .catch((err) => {
      console.error(" Access denied:", err.response?.data || err);
       navigate('/');
       alert('Access Denied! Please login first.');
    });
  }, []); // empty dependency -> sirf ek baar chalega

  return (
    <div className="text-white text-center text-2xl mt-10">
      🌌 Welcome to the Metaverse
    </div>
  );
}

export default Metaverse;
