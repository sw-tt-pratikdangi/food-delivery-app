import { useState } from 'react';

import API from '../../services/api';

import { useAuth } from '../../context/AuthContext';

function AddFood() {
  const { user } = useAuth();

  const [title, setTitle] =
    useState('');

  const [description, setDescription] =
    useState('');

  const [price, setPrice] =
    useState('');

  const [image, setImage] =
    useState('');

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await API.post(
        '/api/foods',
        {
          title,
          description,
          price,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      alert('Food Added');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        
        <h1 className="text-4xl font-bold mb-8">
          Add Food
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          
          <input
            type="text"
            placeholder="Food Title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-lg"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-lg"
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) =>
              setImage(
                e.target.value
              )
            }
            className="w-full border p-4 rounded-lg"
          />

          <button className="w-full bg-red-500 text-white py-4 rounded-lg hover:bg-red-600 transition">
            Add Food
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFood;