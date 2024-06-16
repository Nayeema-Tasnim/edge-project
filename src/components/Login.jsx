import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ls.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Welcome!');
    navigate('/home');
  };

  return (
    <div className="ls">
        <form action="">
            <label htmlFor="">Email</label><br /><br />
            <input type="email" placeholder='Enter email' /><br /><br />
            <label htmlFor="">Password</label><br />
            <input type="password" placeholder='password' /><br /><br />
            <button>Submit</button>
        </form>
				<div className="mt-4 text-center">
          <span className="text-gray-600">Or continue with</span>
          <div className="flex justify-center mt-2">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg mx-2">Google</button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg mx-2">GitHub</button>
          </div>
        </div>
        <p className="mt-4 text-center text-gray-600">
          Not a member? <a href="/signup" className="text-indigo-600 hover:underline">Start a 14-day free trial</a>
        </p>
      

    </div>
  );
};

export default Login;