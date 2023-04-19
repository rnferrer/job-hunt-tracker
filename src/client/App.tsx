import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Applications from './components/Applications';
import AddApplication from './components/AddApplication';
// import ApplicationDetails from './components/ApplicationDetails';
import './styles/main.scss';


const App = () => {
  return (
    <div>
      <h1 className='hello'>Job Tracker</h1>
      <Routes>
        <Route path='/' element={<SignInForm />} />
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/applications' element={<Applications />} />
        <Route path='/add-application' element={<AddApplication />} />
        {/* <Route path='/applications/:id' element={<ApplicationDetails />} /> */}
        {/* <Route path='/interviews' Component={Interviews} />
        <Route path='/questions' Component={Questions} /> */ }
      </Routes>  
    </div>
  );
}

export default App;