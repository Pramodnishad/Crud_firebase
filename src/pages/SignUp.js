import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth();

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("User Created Successfully"))
      .catch((error) => console.log("Error creating user:", error));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex justify-center">
      <div className="grid h-[60vh] w-[30vw] shadow-2xl mt-16 justify-center ">
     <div className="mt-5 text-4xl font-bold"> <p>Create New Account !</p></div>
        <div className="flex items-center">
          <label htmlFor="email" className="ml-5 mr-5 font-semibold w-62">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Please Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-56 "
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="password" className="ml-5 mr-5 font-semibold w-52">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Please Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
           className="w-56"
          />
        </div>
        <button onClick={createUser}>Create Account</button>
      </div>
    </div>
  );
};

export default SignUp;
