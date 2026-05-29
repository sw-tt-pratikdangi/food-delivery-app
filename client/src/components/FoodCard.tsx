import { Link } from 'react-router-dom';

type FoodProps = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: string;
};

function FoodCard({
  _id,
  title,
  description,
  price,
  image,
}: FoodProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      <img
        src={image}
        alt={title}
        className="w-full h-75 object-cover"
      />

      <div className="p-5">
        
        <h2 className="text-2xl font-bold mb-2">
          {title}
        </h2>

        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between">
          
          <span className="text-red-500 text-xl font-bold">
            ₹{price}
          </span>

          <Link
            to={`/foods/${_id}`}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;