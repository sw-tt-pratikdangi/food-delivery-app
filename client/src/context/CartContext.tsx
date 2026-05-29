import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type CartItemType = {
  _id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItemType[];

  addToCart: (
    item: CartItemType
  ) => void;

  removeFromCart: (
    id: string
  ) => void;

  increaseQty: (
    id: string
  ) => void;

  decreaseQty: (
    id: string
  ) => void;
  clearCart: () => void;

  totalPrice: number;
};

const CartContext =
  createContext<CartContextType | null>(
    null
  );

export const CartProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] =
    useState<CartItemType[]>([]);

  useEffect(() => {
    const storedCart =
      localStorage.getItem('cart');

    if (storedCart) {
      setCartItems(
        JSON.parse(storedCart)
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      'cart',
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (
    item: CartItemType
  ) => {
    const existingItem =
      cartItems.find(
        (cartItem) =>
          cartItem._id === item._id
      );

    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? {
                ...cartItem,
                quantity:
                  cartItem.quantity + 1,
              }
            : cartItem
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...item,
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (
    id: string
  ) => {
    setCartItems(
      cartItems.filter(
        (item) => item._id !== id
      )
    );
  };

  const increaseQty = (
    id: string
  ) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQty = (
    id: string
  ) => {
    setCartItems(
      cartItems.map((item) =>
        item._id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  const totalPrice =
    cartItems.reduce(
      (acc, item) =>
        acc +
        item.price * item.quantity,
      0
    );

    const clearCart = () => {
        setCartItems([]);
    };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        totalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCart must be used inside CartProvider'
    );
  }

  return context;
};