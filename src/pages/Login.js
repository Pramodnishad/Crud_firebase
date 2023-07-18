import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const userLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => navigate('/displaytodo'));
  };

  return (
  <div className="bg-[url('./images/desktop.jpg')] bg-no-repeat bg-cover">
    <div className="flex justify-center h-[100vh] items-center ">
      <div className="grid h-[70vh] w-[90vw] sm:w-[80vw] md:w-[50vw] lg:w-[30vw] justify-center bg-transparent shadow-[inset_-1px_-1px_500px_10px_#84aff5]  text-white">
        <div className="mt-5 text-4xl font-bold ">
          <p>Welcome to Login!</p>
        </div>
        <div className="flex items-center">
          <label htmlFor="email" className=" mr-10 font-semibold text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Please Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 ml-2 w-full px-2 outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="password" className=" mr-5 font-semibold text-lg">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Please Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="h-10 w-full px-2 outline-none bg-transparent"
          />
        </div>
        <button className="bg-green-700 h-10 w-auto mt-5" onClick={userLogin}>
          Login
        </button>
        <div className="flex justify-around gap-4 mt-5">
          <div className="bg-blue-950 text-white h-10 p-2 rounded-md">
            Don't have an Account?
          </div>
          <div className="bg-blue-950 text-white h-10 p-2 rounded-md">
            Forgot Password?
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Login;
