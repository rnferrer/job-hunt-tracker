import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, Link, Route } from 'react-router-dom';
import App from '../App';
import Modal from './Modal';
import { Application, Status, CompanyContacts, Recruiter } from '../variables';



const AddApplication = () => {
  const navigate = useNavigate();
  // Set default creation date as today
  const today = new Date();
  const defaultDate = today.toLocaleDateString('en-CA');

  const [applications, setApplications] = useState<Application[]>([]);
  // open modal
  const [isOpen, setIsOpen] = useState<boolean>(false);
  // create a new application from user input
  const [position, setPosition] = useState<string>('');
  const [appDate, setAppDate] = useState<string>('');
  const [mostRecentContact, setMostRecentContact] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [status, setStatus] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const handleSubmit =(event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const newApplication: Application = {
      position,
      appDate,
      mostRecentContact,
      company,
      status,
      notes,
    };
    // add new application to applications array
    setApplications([...applications, newApplication]);
    // reset form
    setPosition('');
    setAppDate('');
    setMostRecentContact('');
    setCompany('');
    setStatus('');
    setNotes('');
    // navigate to applications page
    navigate('/applications');
  }

  return (
    <div id="addApplicationContainer">
      <button id="addApplication" onClick={() => {
        setTimeout(() => document.getElementById("addApplicationInput").focus(), 50)

        setIsOpen(true)
      }}>
        Add Application
        </button>
      {isOpen && (
        <Modal handleClick={() => setIsOpen(false)}>

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

            <label htmlFor="notes">Notes:</label>
            <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)} />
    
            <button type="submit">Save</button>
          </form>
       </Modal>
      )}
    </div>

  );
};

export default AddApplication;