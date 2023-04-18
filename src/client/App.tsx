import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignInForm from './components/SignInForm';
import './styles/main.scss';


const App = () => {
  return (
    <div>
      <h1 className='hello'>Job Tracker</h1>
      <Routes>
        {/* <Route path='/' Component={SignInForm} /> */}
        <Route path='/' element={<SignInForm />} />
        {/* <Route path='/applications' Component={Applications} />
        <Route path='/appDetails' Component={AppDetails} />
        <Route path='/interviews' Component={Interviews} />
        <Route path='/questions' Component={Questions} /> */}
      </Routes>  
    </div>
  );
}

export default App;