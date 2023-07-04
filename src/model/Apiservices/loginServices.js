import axios from 'axios';

const loginUser = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login', formData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'An error occurred. Please try again later.';
  }
};

export { loginUser };
