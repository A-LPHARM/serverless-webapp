import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import healthService from '../../services/healthService';

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      const data = await healthService.getServiceById(id);
      setService(data);
    };

    fetchService();
  }, [id]);

  if (!service) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{service.name}</h2>
      <p>{service.description}</p>
    </div>
  );
};

export default ServiceDetails;
