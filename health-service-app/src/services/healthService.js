import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/health';

const getServices = async () => {
  const response = await axios.get(`${API_URL}/services`);
  return response.data;
};

const getServiceById = async (id) => {
  const response = await axios.get(`${API_URL}/services/${id}`);
  return response.data;
};

const healthService = {
  getServices,
  getServiceById,
};

export default healthService;


