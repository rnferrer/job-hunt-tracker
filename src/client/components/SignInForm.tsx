import React, { useState, useEffect } from 'react';
import { useNavigate, Link, Route } from 'react-router-dom';

const SignInForm = () => {
  const navigate = useNavigate();

  // // handle input 
  // const onInput = () => {

  // }

  // // handle sign in form submission
  // const handleSubmit = () => {

  // }

  // // handle sign up redirect
  // const handleSignUpClick (e) => {
  //   e.preventDefault();
  //   navigate('/')
  // }

  return (
    <div className="signinForm">
      <h1>I am sign-in form</h1>
      <form>
        <h1>Sign-in</h1>
        <div>
          <label htmlFor="name">Email</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input type="text" name="email" required />
        </div>
        <button type="submit">Sign-in</button>
        <a>Sign-up</a>
      </form>
    </div>
  );


}

export default SignInForm;