import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

function Home() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Hero Section */}
      <section className="bg-red-500 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          
          <h1 className="text-5xl font-bold mb-6">
            Delicious Food Delivered To Your Door
          </h1>

          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Order your favorite meals from the best restaurants near you.
          </p>

          {user ? (
            <div className="flex justify-center gap-4">
            <Link
              to="/profile"
              className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Go To Profile
            </Link>

            <Link
              to="/foods"
              className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Explore Foods
            </Link>
            </div>
            
          ) : (
            <div className="flex justify-center gap-4">
              
              <Link
                to="/login"
                className="bg-white text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-500 transition"
              >
                Register
              </Link>
              
            </div>
          )}
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              
              <div className="text-5xl mb-4">
                🍔
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Delicious Food
              </h3>

              <p className="text-gray-600">
                Fresh and tasty meals from top restaurants.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              
              <div className="text-5xl mb-4">
                🚚
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-600">
                Quick delivery right to your doorstep.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              
              <div className="text-5xl mb-4">
                💳
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Secure Payment
              </h3>

              <p className="text-gray-600">
                Safe and secure payment methods available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl font-bold mb-4">
            Start Ordering Today
          </h2>

          <p className="text-gray-600 mb-8">
            Discover amazing food and enjoy quick delivery service.
          </p>

          <Link
            to="/register"
            className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;