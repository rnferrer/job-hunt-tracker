import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Link, Route } from 'react-router-dom';
import App from '../App';


// export interface Application {
//   id: number;
//   position: string;
//   appDate: string;
//   mostRecentContact: string;
//   company: string;
//   status: string;
//   details: string;
// }

// // export interface Status {
// //   total: number;
// //   notStarted: number;
// //   inProgress: number;
// // }

const AddApplication = () => {
  const navigate = useNavigate();
  
  // Set default creation date as today
  const today = new Date();
  const defaultDate = today.toLocaleDateString('en-CA');

  // create a new application from user input
  // states
  const [position, setPosition] = useState('');
  const [status, setStatus] = useState('');
  const [appDate, setAppDate] = useState(defaultDate);
  const [company, setCompany] = useState('');
//   const [mostRecentContact, setMostRecentContact] = useState<string>('');
//   const [details, setDetails] = useState<string>('');

  const handleSubmit =(event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    
    const newApplication = {
      // id: Math.floor(Math.random() * 1000000),
      position,
      appDate,
      // mostRecentContact,
      company,
      status,
      // details,
    };

    console.log('newApp', newApplication);

    // // add new application to applications array
    // setApplications([...applications, newApplication]);
    // // reset form
    // setPosition('');
    // setAppDate('');
    // setMostRecentContact('');
    // setCompany('');
    // setStatus('');
    // setDetails('');
    // // navigate to applications page

    navigate('/applications');
  }

  return (
    <div>
      <div className="createApp">
        <h3>Create new application</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="position">Position</label>
            <input onChange= {(e) => setPosition(e.target.value)} type="text" required/>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select id="status" name="status" onChange= {(e) => setStatus(e.target.value)} required>
              <option value="not-started">Not started</option>
              <option value="applied">Applied</option>
              <option value="interviewing">Interviewing</option>
              <option value="accepted">Accepted</option>
              <option value="closed">Closed</option>
            </select>
          </div>
          <div>
            <label htmlFor="date">Applied Date</label>
            <input id="dateCreated" type="date" name="dateCreated" onChange= {(e) => setAppDate(e.target.value)} defaultValue={defaultDate} />
          </div>
          <div>
            <label htmlFor="company">Company</label>
            <input onChange= {(e) => setCompany(e.target.value)} type="text" required/>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddApplication;