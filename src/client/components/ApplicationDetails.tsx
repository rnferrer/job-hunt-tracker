// import React, { useContext, useState, useEffect } from 'react';
// import { useNavigate, Link, Route } from 'react-router-dom';
// import { Application, Recruiter } from '../variables';
// import axios from 'axios';

// const ApplicationDetails = () => {
  
//   // when loaded, get the application detail per app id
//   // example data
//   const dummyApplication: Application = {
//     id: 1,
//     position: 'SW Engineer',
//     appDate: '04/01/2021',
//     mostRecentContact: '04/01/2021',
//     company: 'OpenAI',
//     status: 'not started',
//     notes: 'refered by friend',
//     companyContacts: {
//       contactName: 'Mary',
//       contactEmail: 'pikachu@pokemon.com',
//       contactPhone: '11111111',
//       LinkedIn: 'http://pikachu//mary'
//     },
//     recruiter: {
//       name: 'John',
//       email: 'john@pokemon.com',
//       phone: '334343434',
//       LinkedIn: 'http://pikachu//mary',
//     },
//     linkToApplicationURL: 'http://pikachu//mary',
//     addAdditionalNotes: 'Mary is a nice pikachu'
//   };

//   useEffect(() => {
//     // use API to fetch from database
//     axios
//       .get('/api/application')
//       .then((res) => {
//         // check the shape of data that comes back
//         console.log('resdata', res.data)
//         setApplications(res.data); // update application context with response data
//       })
//       .catch((error) => {
//         console.log("unable to signup user", error);
//       });
//   }, []) 

//   return (
//     <div>
//       <section className="detail-header">
//         <h2>Application Details</h2>
//         <p>Postion: {dummyApplication.position}</p>
//         <p>App ID: {dummyApplication.id}</p>
//       </section>
//       <section>
//         <div className="company-detail">
//           <h4>Company</h4>
//             <p>Contact Name: {dummyApplication.companyContacts.contactName}</p>
//           <h5>Recruiter</h5>
//         </div>
//       </section>
//     </div>
//   )
// };

// export default ApplicationDetails;