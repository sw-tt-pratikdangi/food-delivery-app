import CartItem from '../components/CartItem';

import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const {
    cartItems,
    totalPrice,
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-10">
          Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <h2>Your cart is empty</h2>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              
              {cartItems.map((item) => (
                <CartItem
                  key={item._id}
                  item={item}
                />
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-xl shadow-md p-6 h-fit">
              
              <h2 className="text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between mb-4">
                <span>Total</span>

                <span className="font-bold text-xl">
                  ₹{totalPrice}
                </span>
              </div>

                <Link
                    to="/checkout"
                    className="block text-center w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
                    >
                    Checkout
                </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;