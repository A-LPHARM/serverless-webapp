import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import healthService from '../../services/healthService';
import appointmentService from '../../services/appointmentService';

const BookAppointment = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const history = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      const data = await healthService.getServices();
      setServices(data);
    };

    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await appointmentService.bookAppointment(selectedService, date, time);
      history.push('/appointments');
    } catch (error) {
      console.error('Booking failed', error);
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Service</label>
          <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
