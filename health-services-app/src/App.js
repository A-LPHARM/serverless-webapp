import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard/Dashboard';
import ServicesList from './components/Services/ServicesList';
import ServiceDetails from './components/Services/ServiceDetails';
import Appointments from './components/Appointments/Appointments';
import BookAppointment from './components/Appointments/BookAppointment';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/services" exact component={ServicesList} />
        <Route path="/services/:id" component={ServiceDetails} />
        <Route path="/appointments" exact component={Appointments} />
        <Route path="/appointments/book" component={BookAppointment} />
      </Routes>
    </div>
  );
};

export default App;
