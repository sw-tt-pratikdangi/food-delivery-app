import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useCart } from '../context/CartContext';

import { useAuth } from '../context/AuthContext';

import { createOrder } from '../services/orderService';

function Checkout() {
  const [address, setAddress] =
    useState<string>('');

  const {
    cartItems,
    totalPrice,
    clearCart,
  } = useCart();

  const { user } = useAuth();

  const navigate = useNavigate();

  const handleOrder = async () => {
    try {
      if (!user) {
        return;
      }

      await createOrder(
        {
          items: cartItems,
          totalPrice,
          deliveryAddress:
            address,
        },
        user.token
      );

      clearCart();

      alert('Order Placed');

      navigate('/orders');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        
        <h1 className="text-4xl font-bold mb-8">
          Checkout
        </h1>

        <div className="space-y-6">
          
          <div>
            <label className="block mb-2 font-medium">
              Delivery Address
            </label>

            <textarea
              rows={5}
              value={address}
              onChange={(e) =>
                setAddress(
                  e.target.value
                )
              }
              className="w-full border rounded-lg p-4"
              placeholder="Enter delivery address"
            />
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            
            <h2 className="text-2xl font-bold mb-4">
              Order Summary
            </h2>

            <div className="space-y-2">
              
              {cartItems.map(
                (item) => (
                  <div
                    key={item._id}
                    className="flex justify-between"
                  >
                    <span>
                      {item.title} ×{' '}
                      {
                        item.quantity
                      }
                    </span>

                    <span>
                      ₹
                      {item.price *
                        item.quantity}
                    </span>
                  </div>
                )
              )}
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-xl font-bold">
              
              <span>Total</span>

              <span>
                ₹{totalPrice}
              </span>
            </div>
          </div>

          <button
            onClick={handleOrder}
            className="w-full bg-red-500 text-white py-4 rounded-lg hover:bg-red-600 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;