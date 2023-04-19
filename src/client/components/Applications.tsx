import  React, { useContext, useState, useEffect } from 'react';
import  { Link, Route } from 'react-router-dom';
import AddApplication  from './AddApplication';
import { Application, Status } from '../variables';

// interface props {
//   applications: Array<Application>;
//   listApplications: React.Dispatch<React.SetStateAction<Application[]>>;
//   setStatus: React.Dispatch<React.SetStateAction<Status>>;
// }


const Applications: React.FC = () => {
  
  const [applications, setApplications] = useState<Application[]>([]);
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
    details: 'refered by friend';
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
      details: 'refered by friend',
    }];
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
    <Link to="/add-application"><button>Add Application</button></Link>

    <div className="applicationsList">
      <div className="headerRow">
        <div className="headerCol">Position</div>
        <div className="headerCol">App Date</div>
        <div className="headerCol">Most Recent Contact Date</div>
        <div className="headerCol">Company</div>
        <div className="headerCol">Status</div>
        <div className="headerCol">Details</div>
      </div>

    {applications.map((application) => (
      <div className="applicationRow" key={application.position}>
      <div className="applicationCol">{application.position}</div>
      <div className="applicationCol">{application.appDate}</div>
      <div className="applicationCol">{application.mostRecentContact}</div>
      <div className="applicationCol">{application.company}</div>
      <div className="applicationCol">{application.status}</div>
      <div className="applicationCol">{application.details}</div>
      </div>

    ))}
      </div>
    </div>
  )
}

export default Applications;