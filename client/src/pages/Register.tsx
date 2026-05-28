import { useState } from 'react';

import { registerUser } from '../services/authService';

import { useNavigate, Link } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

function Register() {
  const [name, setName] =
    useState<string>('');

  const [email, setEmail] =
    useState<string>('');

  const [password, setPassword] =
    useState<string>('');

  const navigate = useNavigate();

  const { setUser } = useAuth();

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const data = await registerUser({
        name,
        email,
        password,
      });

      localStorage.setItem(
        'user',
        JSON.stringify(data)
      );

      setUser(data);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        
        <h1 className="text-3xl font-bold text-center text-red-500 mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Register to continue
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 transition text-white font-semibold py-3 rounded-lg"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          
          <Link
            to="/login"
            className="text-red-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;