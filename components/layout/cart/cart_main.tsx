import { Cart } from '@/data/sample_data/sample_users';
import { useContext, useEffect } from 'react';
import { MyContext } from '@/context/brains';
import { sample_data as sample_owner_data } from '@/data/sample_data/sample_site_owner';
import Image from "next/image";
import {
  sample_arr_data,
  productArrType,
  Product,
  getProductById,
  CartItem,
} from '@/data/sample_data/sample_products';
import { useBrains } from '@/context/synapse/connections';
import React, { useState } from 'react';
import { SalesTax } from '@/data/sample_data/sample_products';

const cart = sample_owner_data[0].cart;

const calculateTotal = (): number => {
  let total = 0;
  cart!.forEach((item) => {
    total += item.product.price * item.quantity;
  });
  return total;
};

type CartState = {
  items: CartItem[];
  total: number;
  taxes: SalesTax;
};
interface CartItemsProps {
  cart: Cart;
  incrementCartItem: (productId: string) => void;
  decrementCartItem: (productId: string) => void;
  setCart: (newCartItem: CartItem) => void;
  removeProductById: (productId: string) => void;
  removeProductByIdStateful: (productId: string) => void;
  clearCartStateFul: () => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  setCartState: React.Dispatch<
    React.SetStateAction<{
      items: CartItem[];
      total: number;
      taxes: {
        set: number;
        percent: number;
      };
    }>
  >;
}

const CartItems: React.FC<CartItemsProps> = ({
  cart,
  incrementCartItem,
  decrementCartItem,
  removeProductById,
  clearCartStateFul,
  removeProductByIdStateful,
  setCart,
  clearCart,
  addToWishlist,
}) => {
  const [first, setfirst] = useState(cart.items);
  const [taxTotal, setTaxTotal] = useState(0);
    const [promotions, setPromotionTotal] = useState(0);

  useEffect(() => {
    const calculatedTax = cart.taxes.percent
      ? (cart.total * cart.taxes.percent) / 100
      : cart.taxes.set;

    setTaxTotal(calculatedTax!);

  }, [cart.total, cart.taxes]);

  const {
    brains,
    brainKeys,
    brainsLoaded,
    brainsMobile,
    brainsSiteOwner,
    brainsSetMetaTags,
  } = useBrains();

  let baseShippingPrice: number | 'Free' = 0;

  function calculateTotal() {
    const basePrice =
      baseShippingPrice === 'Free' ? 0 : baseShippingPrice;
    const total = cart.total + basePrice + taxTotal - promotions;
    return total.toFixed(2);
  }
  const clearSateFulCart = () => {
    clearCart()
    clearCartStateFul()
  }
  return (
    <div className="h-screen bg-gray-100 pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart && cart.items && cart.items.length > 0 ? (
            cart.items.map((item, index) => (
              <CartItem
                key={index}
                product={item.product}
                selected_variant={item.selected_variant}
                removeProductByIdStateful={removeProductByIdStateful}
                quantity={item.quantity}
                incrementCartItem={incrementCartItem}
                decrementCartItem={decrementCartItem}
                setCart={setCart}
                clearCartStateFul={clearCartStateFul}
                removeProductById={removeProductById}
                clearCart={clearCart}
                addToWishlist={addToWishlist}
              />
            ))
          ) : (
            <span>Cart is empty, redirecting...</span>
          )}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${cart.total}</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Taxes</p>
            <p className="text-gray-700">${taxTotal.toFixed(2)}</p>
          </div>
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Promotions</p>
            <p className="text-green-700">${promotions}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Shipping</p>
            <p className="text-gray-700">
              {cart!.items!.reduce((total, item) => {
                baseShippingPrice =
                  item.product.suppliers[0].base_shipping_price;
                return (
                  total + (baseShippingPrice === 'Free' ? 0 : baseShippingPrice)
                );
              }, 0) === 0 ? (
                <p className="text-blue-500">Free</p>
              ) : (
                <p className="text-gray-700">
                  ${' '}
                  {cart!.items!.reduce((total, item) => {
                    baseShippingPrice =
                      item.product.suppliers[0].base_shipping_price;
                    return (
                      total +
                      (baseShippingPrice === 'Free' ? 0 : baseShippingPrice)
                    );
                  }, 0)}
                </p>
              )}
            </p>{' '}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">
                ${' '}
                {(
                  cart.total +
                  (String(baseShippingPrice) === 'Free'
                    ? 0
                    : baseShippingPrice) +
                  taxTotal -
                  promotions
                ).toFixed(2)}
              </p>
              <p className="text-sm text-gray-700">including VAT</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
          <button
            onClick={() => clearSateFulCart}
            className="mt-6 w-full rounded-md bg-red-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

interface CartItemProps extends CartItem {
  incrementCartItem: (productId: string) => void;
  decrementCartItem: (productId: string) => void;
  setCart: (newCartItem: CartItem) => void;
  removeProductById: (productId: string) => void;
  removeProductByIdStateful: (productId: string) => void;
  clearCartStateFul: () => void;
  clearCart: () => void;
  quantity: number;
  product: Product;
  addToWishlist: (product: Product) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  quantity: initialQuantity,
  selected_variant,
  product,clearCartStateFul,
  incrementCartItem,
  decrementCartItem,
  setCart,
  removeProductById,removeProductByIdStateful,
  clearCart,
  addToWishlist,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity); // using initialQuantity from props to set initial state

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value)); // convert input string to number before setting state
  };

  const deleteProductReactStateFul = (PID: string) => {
    removeProductById(PID);
    removeProductByIdStateful(PID);
  }
  const ScribeQuantity = (add: boolean, PID: string) => {
    if (add) {
      setQuantity(quantity + 1);
      incrementCartItem(PID);
    } else if (!add && quantity > 0) {
      setQuantity(quantity - 1);
      decrementCartItem(PID.toString());
    }
  };

  return (
    <div className="mb-6 justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
      <Image
        src={product.images[0].src}
        alt="product-image"
        className="w-full rounded-lg sm:w-40"
      />
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
          <p className="mt-1 text-xs text-gray-700">{product.description}</p>
        </div>
        <div className="mt-4 flex justify-between sm:mt-0 sm:block sm:space-y-6 sm:space-x-6">
          <div className="flex items-center border-gray-100">
            <span
              onClick={() => ScribeQuantity(false, product.id)}
              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              {' '}
              -{' '}
            </span>
            <span className="mx-3">{quantity}</span>

            <span
              onClick={() => ScribeQuantity(true, product.id)}
              className="cursor-pointer rounded-r bg-gray-100 px-3 py-1 duration-100 hover:bg-blue-500 hover:text-blue-50"
            >
              {' '}
              +{' '}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <p className="text-sm">{product.price}</p>
            <svg
              onClick={() => removeProductById(product.id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
