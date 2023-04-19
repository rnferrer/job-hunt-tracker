import React, { useState, useContext } from 'react';
import UserContext from "../UserContext";
import { Link } from 'react-router-dom';

const SignInForm = () => {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const { user, setUser } = useContext(UserContext);

  // // handle sign in form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const loginData = { username: username, password: password };

  //   // send username and password to backend
  //   axios.post('/', loginData, {
  //     headers: { "Content-Type": "application/json" },
  //   })
  //   .then((res) => {
  //     const newUser = res.data;
  //     console.log(newUser);
  //     setUser(newUser);
  //     setUsername("");
  //     setPassword("");
  //     console.log(user);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     alert(error.response.data);
  //   });
  // }


  // return (
  //   <div className="signinForm" onSubmit={handleSubmit}>
  //     <form>
  //       <h1>Sign-in</h1>
  //       <div>
  //         <label htmlFor="email">Email</label>
  //         <input onChange= {(e) => setUsername(e.target.value)} type="text" name="email" required />
  //       </div>
  //       <div>
  //         <label htmlFor="pwd">Password</label>
  //         <input onChange= {(e) => setPassword(e.target.value)} type="text" name="pwd" required />
  //       </div>
  //       <button type="submit">Sign-in</button>
  //       <div className="sign-up">
  //         Don't have an Account? <Link to="/signup">Sign up here!</Link>
  //       </div>
  //     </form>
  //   </div>
  // );


}

export default SignInForm;