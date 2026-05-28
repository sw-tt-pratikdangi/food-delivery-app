import API from './api';

export const registerUser = async (userData: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await API.post(
    '/api/auth/register',
    userData
  );

  return response.data;
};

export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {
  const response = await API.post(
    '/api/auth/login',
    userData
  );

  return response.data;
};

export const getProfile = async () => {
  const response = await API.get('/api/auth/profile');
  return response.data;
};