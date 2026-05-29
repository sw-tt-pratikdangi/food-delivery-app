import { useCart } from '../context/CartContext';

type Props = {
  item: {
    _id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
};

function CartItem({ item }: Props) {
  const {
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex gap-4 items-center">
      
      <img
        src={item.image}
        alt={item.title}
        className="w-28 h-28 object-cover rounded-lg"
      />

      <div className="flex-1">
        
        <h2 className="text-xl font-bold">
          {item.title}
        </h2>

        <p className="text-gray-600">
          ₹{item.price}
        </p>

        <div className="flex items-center gap-3 mt-3">
          
          <button
            onClick={() =>
              decreaseQty(item._id)
            }
            className="bg-gray-200 px-3 py-1 rounded"
          >
            -
          </button>

          <span className="font-bold">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              increaseQty(item._id)
            }
            className="bg-gray-200 px-3 py-1 rounded"
          >
            +
          </button>
        </div>
      </div>

      <div>
        
        <button
          onClick={() =>
            removeFromCart(item._id)
          }
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;