import axios from 'axios';

const registerUser = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8000/api/register', formData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : 'An error occurred. Please try again later.';
  }
};

export { registerUser };
