import { Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <Link
        to="/"
        className="text-2xl font-bold text-red-500"
      >
        Food App
      </Link>

      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <Link
              to="/profile"
              className="font-medium"
            >
              Profile
            </Link>

            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="font-medium"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;