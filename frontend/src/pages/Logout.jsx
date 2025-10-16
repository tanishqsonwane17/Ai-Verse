import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
 

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3000/api/auth/logout', {
      withCredentials: true
    })
    .then((res) => {
      console.log(" Logout Data:", res.data);
        navigate('/');
    })
    .catch((err) => {
      console.error(" Access denied:", err.response?.data || err);
       navigate('/');
       alert('Access Denied! Please login first.');
    });
  }, []); 
  return (
    <>
</>
  )
}

export default Logout