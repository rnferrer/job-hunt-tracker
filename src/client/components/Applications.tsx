// import  React, { useContext, useState, useEffect } from 'react';
// import  { useNavigate, Link, Route } from 'react-router-dom';

// const Applications = ():JSX.Element => {
//   const [applications, setApplications] = useState([]);
//   const [status, setStatus] = useState({
//     total: 0,
//     notStarted: 0,
//     inProgress: 0,
//   });

//   useEffect(() => {
//     // fetch applications from database
//     const fetchedApplications = [{
//       // sample data
//       id: 1,
//       position: "Software Engineer",
//       appDate: "2021-01-01",
//       mostRecentContact: "2021-01-01",
//       company: "OpenAI",
//       status: "not started",
//       details: "link to details",
//     }];
//     // update state with fetched applications data
//     setApplications(fetchedApplications);

//     // calculate status counts
//     let notStarted = 0;
//     let inProgress = 0;
//     fetchedApplications.forEach((app) => {
//       if (app.status === "not started") {
//         notStarted++;
//       } else if (app.status !== "not started") {
//         inProgress++;
  
//   return (
//     <form action="">
//     <div id="statusTracker"></div>
//     <button>Filter</button>
//     <button>Add Application</button>
//     <div className="applicationsList"></div>

//     </form>
//   )
// }

// export default Applications;