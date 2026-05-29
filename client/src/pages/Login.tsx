import { useState } from 'react';

import { loginUser } from '../services/authService';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

function Login() {
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
      const data = await loginUser({
        email,
        password,
      });

      localStorage.setItem(
        'user',
        JSON.stringify(data)
      );

      setUser(data);

      if (data.isAdmin) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;