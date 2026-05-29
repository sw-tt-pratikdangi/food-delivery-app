import { useEffect, useState } from 'react';

import FoodCard from '../components/FoodCard';

import { getFoods } from '../services/foodService';

type FoodType = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

function Foods() {
  const [foods, setFoods] = useState<
    FoodType[]
  >([]);

  useEffect(() => {
    fetchFoods();
  }, []);

  const fetchFoods = async () => {
    try {
      const data = await getFoods();

      setFoods(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      <div className="max-w-7xl mx-auto">
        
        <h1 className="text-4xl font-bold mb-10 text-center">
          Our Foods
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {foods.map((food) => (
            <FoodCard
              key={food._id}
              {...food}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Foods;