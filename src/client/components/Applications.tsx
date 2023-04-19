import  React, { useContext, useState, useEffect } from 'react';
import  { Link, Route } from 'react-router-dom';
import AddApplication  from './AddApplication';
import { Application, Status } from '../variables';
import axios from 'axios';

// interface props {
//   applications: Array<Application>;
//   listApplications: React.Dispatch<React.SetStateAction<Application[]>>;
//   setStatus: React.Dispatch<React.SetStateAction<Status>>;
// }


const Applications: React.FC = () => {
  
  const [applications, setApplications] = useState<Application[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>({
    total: 0,
    notStarted: 0,
    inProgress: 0,
  });
  // save new inputs to db
  const saveApplication = (newApplication: Application) => {
    id: 1;
    position: 'SW Engineer';
    appDate: '04/01/2021';
    mostRecentContact: '04/01/2021';
    company: 'OpenAI';
    status: 'not started';
    notes: 'refered by friend';
    // setApplications([...applications, newApplication]);
  };

  useEffect(() => {
    // fetch applications from database
    const fetchedApplications: Application[] = [{
      id: 1,
      position: 'SW Engineer',
      appDate: '04/01/2021',
      mostRecentContact: '04/01/2021',
      company: 'OpenAI',
      status: 'not started',
      notes: 'refered by friend',
    }];

    // use API to fetch from database
    axios
      .get('/api/application')
      .then((res) => {
        // check the shape of data that comes back
        console.log('resdata', res.data)
        setApplications(res.data); // update application context with response data
      })
      .catch((error) => {
        console.log("unable to signup user", error);
      });

    // update state with fetched applications data
    setApplications(fetchedApplications);

    // calculate status counts
    let notStarted = 0;
    let inProgress = 0;
    fetchedApplications.forEach((application) => {
      if (application.status === "not started") {
        notStarted++;
      } else if (application.status !== "not started") {
        inProgress++;
      }
    });
    setStatus({
      total: fetchedApplications.length,
      notStarted,
      inProgress,
    });
  }, []);

  return (
   <div>
    <div id="statusTracker">
      <p>Total: {status.total}</p>
      <p>Not Yet Started</p>
      <p>In Progress: {status.inProgress}</p>
    </div>

    <button>Filter</button>

    <Link to="/applications/new">
      <button id="addApplication" onClick={() => {
        setTimeout(() => document.getElementById("addApplicationInput").focus(), 50);
  
        setIsOpen(true);
      }}>
      Add Application
    </button>
    </Link>
    
    <table className="applicationList">
      <thead>
        <tr className="headerRow">
          <th className="headerCol">Position</th>
          <th className="headerCol">App Date</th>
          <th className="headerCol">Most Recent Contact Date</th>
          <th className="headerCol">Company</th>
          <th className="headerCol">Status</th>
          <th className="headerCol">Details</th>
        </tr>
      </thead>
      <tbody>
        {applications.map((application) => (
          <tr className="applicationRow" key={application.id}>
            <td className="applicationCol">{application.position}</td>
            <td className="applicationCol">{application.appDate}</td>
            <td className="applicationCol">{application.mostRecentContact}</td>
            <td className="applicationCol">{application.company}</td>
            <td className="applicationCol">{application.status}</td>
            <td className="applicationCol">{application.notes}</td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>
  )
}

export default Applications;