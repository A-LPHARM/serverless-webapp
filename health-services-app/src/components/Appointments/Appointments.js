import React, { useEffect, useState } from 'react';
import appointmentService from '../../services/appointmentService';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const data = await appointmentService.getAppointments();
      setAppointments(data);
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.serviceName} on {appointment.date} at {appointment.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
