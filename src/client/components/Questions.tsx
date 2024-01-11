import  React, { useContext, useState, useEffect } from 'react';
import  { Link, Route } from 'react-router-dom';


const Questions = () => {




  return (
    <div>
      <h3>All Questions & Ansers</h3>
      <table>
        <thead>
          <tr>
            <th>Interview ID</th>
            <th>Company</th>
            <th>Date</th>
            <th>Completed/Upcoming</th>
          </tr>
        </thead>
        {/* <tbody>{list}</tbody> */}
      </table>
    </div>
  )
}

export default Questions;