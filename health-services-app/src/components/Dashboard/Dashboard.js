import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <ul>
        <li><Link to="/services">View Services</Link></li>
        <li><Link to="/appointments">View Appointments</Link></li>
        <li><Link to="/appointments/book">Book Appointment</Link></li>
      </ul>
    </div>
  );
};

export default Dashboard;
