import  React, { useContext, useState, useEffect } from 'react';
import  { Link, Route } from 'react-router-dom';
import AddApplication  from './AddApplication';
// import ApplicationDetails from './ApplicationDetails'
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


    // // calculate status counts
    // let notStarted = 0;
    // let inProgress = 0;
    // fetchedApplications.forEach((application) => {
    //   if (application.status === "not started") {
    //     notStarted++;
    //   } else if (application.status !== "not started") {
    //     inProgress++;
    //   }
    // });
    // setStatus({
    //   total: fetchedApplications.length,
    //   notStarted,
    //   inProgress,
    // });

  }, []);


  let appList: any[] = [];
  applications.forEach((application) => {
    const newDateApplied = application["date_applied"] === null ? '' : new Date(application["date_applied"]).toDateString();
    const recentDateApplied = application["recent_contact_date"] === null ? '' : new Date(application["recent_contact_date"]).toDateString();
    appList.push(
      <tr className="applicationRow border-b hover:bg-gray-100" key={application["app_id"]}>
        <td className="applicationCol py-2 px-4">{application["position_title"]}</td>
        <td className="applicationCol py-2 px-4">{newDateApplied}</td>
        <td className="applicationCol py-2 px-4">{recentDateApplied}</td>
        <td className="applicationCol py-2 px-4">{application["company_name"]}</td>
        <td className="applicationCol py-2 px-4">{application["status"]}</td>
        <td className="applicationCol py-2 px-4">{application["notes"]}</td>
      </tr>
    )
  })
  

  return (
   <div className="container">
      <div id="statusTracker">
        <p>Total: {status.total}</p>
        <p>Not Yet Started</p>
        <p>In Progress: {status.inProgress}</p>
      </div>


      <Link to="/add-application">
          <button className="button"  id="addApplication" onClick={() => {
            setTimeout(() => document.getElementById("addApplicationInput").focus(), 50);
      
            setIsOpen(true);
          }}>
          Add Application
        </button>
      </Link>
    
      <div className='table-container'>
        <table className="applicationList border-collapse border border-gray-400">
          <thead>
            <tr className="headerRow">
              <th className="headerCol py-2 px-4">Position</th>
              <th className="headerCol py-2 px-4">App Date</th>
              <th className="headerCol py-2 px-4">Most Recent Contact Date</th>
              <th className="headerCol py-2 px-4">Company</th>
              <th className="headerCol py-2 px-4">Status</th>
              <th className="headerCol py-2 px-4">Details</th>
            </tr>
          </thead>
          <tbody className='divide-y bg-gray-50'>
            {appList};
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Applications;