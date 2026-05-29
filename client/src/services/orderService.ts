import API from './api';

export const createOrder = async (
  orderData: any,
  token: string
) => {
  const response = await API.post(
    '/api/orders',
    orderData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getMyOrders = async (
  token: string
) => {
  const response = await API.get(
    '/api/orders/my-orders',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};