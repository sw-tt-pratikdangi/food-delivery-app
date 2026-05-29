import {
  useEffect,
  useState,
} from 'react';

import { useAuth } from '../context/AuthContext';

import { getMyOrders } from '../services/orderService';

type OrderType = {
  _id: string;
  totalPrice: number;
  orderStatus: string;

  createdAt: string;

  items: {
    title: string;
    quantity: number;
  }[];
};

function Orders() {
  const [orders, setOrders] =
    useState<OrderType[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      if (!user) {
        return;
      }

      const data =
        await getMyOrders(
          user.token
        );

      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-5xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-8">
          My Orders
        </h1>

        <div className="space-y-6">
          
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-md p-6"
            >
              
              <div className="flex justify-between mb-4">
                
                <div>
                  <h2 className="text-xl font-bold">
                    Order ID:
                  </h2>

                  <p className="text-gray-500">
                    {order._id}
                  </p>
                </div>

                <div>
                  <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">
                    {
                      order.orderStatus
                    }
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                
                {order.items.map(
                  (
                    item,
                    index
                  ) => (
                    <div
                      key={index}
                      className="flex justify-between"
                    >
                      <span>
                        {
                          item.title
                        }{' '}
                        ×{' '}
                        {
                          item.quantity
                        }
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="flex justify-between items-center">
                
                <h3 className="text-2xl font-bold text-red-500">
                  ₹
                  {
                    order.totalPrice
                  }
                </h3>

                <p className="text-gray-500">
                  {new Date(
                    order.createdAt
                  ).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;