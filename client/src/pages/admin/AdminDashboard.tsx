import { Link } from 'react-router-dom';

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-6xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-10">
          Admin Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          
          <Link
            to="/admin/add-food"
            className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-2">
              Add Food
            </h2>

            <p className="text-gray-500">
              Create new food items
            </p>
          </Link>

          <Link
            to="/foods"
            className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-2">
              Manage Foods
            </h2>

            <p className="text-gray-500">
              Edit and delete foods
            </p>
          </Link>

          <Link
            to="/admin/orders"
            className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-bold mb-2">
              Manage Orders
            </h2>

            <p className="text-gray-500">
              Update order status
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;