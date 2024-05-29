import axios from 'axios';

const API_URL = 'https://your-api-url.com/api/appointments';

const getAppointments = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

const bookAppointment = async (serviceId, date, time) => {
  const response = await axios.post(`${API_URL}/book`, { serviceId, date, time });
  return response.data;
};

const appointmentService = {
  getAppointments,
  bookAppointment,
};

export default appointmentService;
