import {
  useEffect,
  useState,
} from 'react';
import { useCart } from '../context/CartContext';
import {
  useParams,
} from 'react-router-dom';

import {
  getFoodById,
} from '../services/foodService';

type FoodType = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

function FoodDetails() {
  const { id } = useParams();

  const [food, setFood] =
    useState<FoodType | null>(null);

  useEffect(() => {
    if (id) {
      fetchFood(id);
    }
  }, [id]);

  const fetchFood = async (
    foodId: string
  ) => {
    try {
      const data =
        await getFoodById(foodId);

      setFood(data);
    } catch (error) {
      console.log(error);
    }
  };

  const { addToCart } = useCart();

  if (!food) {
    return (
      <h1 className="text-center mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:flex">
        
        <img
          src={food.image}
          alt={food.title}
          className="w-full md:w-1/2 h-[400px] object-cover"
        />

        <div className="p-8 flex-1">
          
          <h1 className="text-4xl font-bold mb-4">
            {food.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {food.description}
          </p>

          <h2 className="text-3xl font-bold text-red-500 mb-6">
            ₹{food.price}
          </h2>

          <button
            onClick={() =>
                addToCart({
                _id: food._id,
                title: food.title,
                price: food.price,
                image: food.image,
                quantity: 1,
                })
            }
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
            Add To Cart
            </button>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;