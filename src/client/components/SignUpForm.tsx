import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import UserContext from "../UserContext.jsx";
// import axios from "axios";

function SignUpForm() {
  // // same TODOs as login, instead navigate to '/'
  // const { user, setUser } = useContext(UserContext); // from the UserContext state
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (user !== null) {
  //     console.log(user);
  //     navigate('/home');
  //   }
  // },[user]);


  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const loginData = {
  //     username: username,
  //     password: password,
  //     firstName: firstName,
  //     lastName: lastName
  //   };
  //   axios.post('/api/users/signup', loginData, {
  //     headers: { "Content-Type": "application/json" },
  //   })
  //     .then((response) => {
  //       setUser(response.data); // update user context with response data
  //       // navigate('/home')
  //       console.log("user created and logged in on signuppage.jsx");
  //     })
  //     .catch((error) => {
  //       console.log("unable to signup user", error);
  //     });
  // };

  //RENDER
  return (
    <div className="signupForm">
      <h3>Create a new Account:</h3>
      <form>
        <div className="formLine">
          <label className="login-text" htmlFor="username">Username</label>
          <input className="user-input"type="text" required/>
        </div>
        <div className="formLine">
          <label className="login-text" htmlFor="password">Password</label>
          <input className="user-input" type="password" required/></div>
        <button type="submit">Submit</button>
      </form>
      <div className="login-footer">
        Already have an account? <Link to="/">Sign in here!</Link>
      </div>
    </div>
  );
}

export default SignUpForm;
