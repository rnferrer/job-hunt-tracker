import React, { useState, useEffect, useContext } from 'react';
import UserContext from "../UserContext";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignInForm = () => {
  // States
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);

  // React hook for navigation
  const navigate = useNavigate();

  // on load
  useEffect(() => {
    if (user !== null) {
      navigate('/signup')
    }
  }, [user])

  // handle sign in form submission
  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const loginData = { username: username, password: password };

    // send username and password to backend
    // PENDING FOR RESPONSE DATA SHAPE //
    axios.post('http://localhost:3000/', loginData, {
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      const existingUser = res.data;
      console.log('res', existingUser)
      setUser(existingUser);
      setUsername("");
      setPassword("");
    })
    .catch((error) => {
      console.log(error);
      alert(error.response.data);
    });
  }

  return (
    <div className="signinForm">
      <form onSubmit={handleSubmit}>
        <h1>Sign-in</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input onChange= {(e) => setUsername(e.target.value)} type="text" name="email" required />
        </div>
        <div>
          <label htmlFor="pwd">Password</label>
          <input onChange= {(e) => setPassword(e.target.value)} type="text" name="pwd" required />
        </div>
        <button type="submit">Sign-in</button>
        <div className="sign-up">
          Don't have an Account? <Link to="/signup">Sign up here!</Link>
        </div>
      </form>
    </div>
  );


}

export default SignInForm;