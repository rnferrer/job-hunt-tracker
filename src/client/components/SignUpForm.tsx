import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../UserContext";
import axios from "axios";

function SignUpForm() {
  // // same TODOs as login, instead navigate to '/'
  const { user, setUser } = useContext(UserContext); // from the UserContext state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      console.log(user);
      navigate('/');
    }
  },[user]);


  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const registerData = {
      username: username,
      password: password,
    };
    axios.post('/api/signup', registerData, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log('resdata', res.data)
        setUser(res.data); // update user context with response data
        // navigate('/applications')
        console.log("user created and logged in on signuppage.jsx");
      })
      .catch((error) => {
        console.log("unable to signup user", error);
      });
  };


  //RENDER
  return (
    <div className="signupForm">
      <h3>Create a new Account:</h3>
      <form onSubmit={handleSubmit}>
        <div className="formLine">
          <label className="login-text" htmlFor="username">Username</label>
          <input onChange= {(e) => setUsername(e.target.value)} type="text" required/>
        </div>
        <div className="formLine">
          <label className="login-text" htmlFor="password">Password</label>
          <input onChange= {(e) => setPassword(e.target.value)} type="password" required/>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="login-footer">
        Already have an account? <Link to="/">Sign in here!</Link>
      </div>
    </div>
  );
}

export default SignUpForm;
