import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import healthService from '../../services/healthService';

const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await healthService.getServices();
      setServices(data);
    };

    fetchServices();
  }, []);

  return (
    <div>
      <h2>Health Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <Link to={`/services/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
