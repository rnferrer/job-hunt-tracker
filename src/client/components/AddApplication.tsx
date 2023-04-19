import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation, Link, Route } from 'react-router-dom';
import App from '../App';
import Modal from './Modal';
import { Application, Status, CompanyContacts, Recruiter } from '../variables';
import axios from 'axios';
import UserContext from "../UserContext";
// import {  AppContext, AppProvider } from './appContext';

const AddApplication = () => {

  // const location = useLocation();
  // const state = location.state;
  // const { position, company, dateApplied, status } = useContext(AppContext);
  
  const navigate = useNavigate();
  // Set default creation date as today
  const today = new Date();
  const defaultDate = today.toLocaleDateString('en-CA');

  
  // const [applications, setApplications] = useState<Application[]>([]);
  // open modal
  // const [isOpen, setIsOpen] = useState<boolean>(false);
  // create a new application from user input

  // trying out useContext, just temp commenting these
  const [position, setPosition] = useState<string>('');
  const [appDate, setAppDate] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [status, setStatus] = useState<string>('');


  const handleSubmit =(event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    // console.log('state', state);
    const newApplication = {
      position_title: position,
      date_applied: appDate,
      company_name: company,
      status: status,
    };
    
    axios
    .post('/api/application', newApplication, {
    headers: { "Content-Type": "application/json" },
    })
    .then((data) => {
        // new data to come back
        console.log('data', data);
        // add new application to applications array
        // setApplications([...applications]);
        // reset form
        setPosition('');
        setAppDate('');
        setCompany('');
        setStatus('');
    })
    .catch((error) => {
      console.log("unable to signup user", error);
    });
    
    // navigate to applications page
    navigate('/applications');
  }

  return (
    <div id="addApplicationContainer">
    

     <form onSubmit={handleSubmit} id="addApplicationInput">
       <label htmlFor="position">Position:</label>
       <input type="text" id="position" value={position} onChange={(e) => setPosition(e.target.value)} />
      
       <label htmlFor="company">Company:</label>
       <input type="text" id="company" value={company} onChange={(e) => setCompany(e.target.value)} />
      
       <label htmlFor="dateApplied">Date Applied:</label>
       <input id="dateCreated" type="date" name="dateCreated" onChange={(e) => setAppDate(e.target.value)} defaultValue={defaultDate} />
      
       <label htmlFor="status">Status</label>
       <select id="status" name="status" onChange={(e) => setStatus(e.target.value)} required>
         <option value="not-started">Not started</option>
         <option value="applied">Applied</option>
         <option value="interviewing">Interviewing</option>
         <option value="accepted">Accepted</option>
         <option value="closed">Closed</option>
       </select>
       <button type="submit">Save</button>
     </form>
  
    
    </div>

  );
};

export default AddApplication;