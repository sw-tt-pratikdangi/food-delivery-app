import API from './api';

export const getFoods = async () => {
  const response = await API.get(
    '/api/foods'
  );

  return response.data;
};

export const getFoodById = async (
  id: string
) => {
  const response = await API.get(
    `/api/foods/${id}`
  );

  return response.data;
};