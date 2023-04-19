// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate, Link, Route } from 'react-router-dom';
// import App from '../App';


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

// const AddApplication = () => {
//   const navigate = useNavigate();
  
//   // create a new application from user input
//   const [position, setPosition] = useState<string>('');
//   const [appDate, setAppDate] = useState<string>('');
//   const [mostRecentContact, setMostRecentContact] = useState<string>('');
//   const [company, setCompany] = useState<string>('');
//   const [status, setStatus] = useState<string>('');
//   const [details, setDetails] = useState<string>('');

//   const handleSubmit =(event: React.FormEvent<HTMLElement>) => {
//     event.preventDefault();
//     const newApplication: Application = {
//       id: Math.floor(Math.random() * 1000000),
//       position,
//       appDate,
//       mostRecentContact,
//       company,
//       status,
//       details,
//     };
//     // add new application to applications array
//     setApplications([...applications, newApplication]);
//     // reset form
//     setPosition('');
//     setAppDate('');
//     setMostRecentContact('');
//     setCompany('');
//     setStatus('');
//     setDetails('');
//     // navigate to applications page
//     navigate('/applications');
//   }

//   return (
//     <div>
//       <p>This is add application page</p>
//     </div>

//   )
// }

// export default AddApplication;