import Layout from '@/components/layout';
import CartItems from '@/components/layout/cart/cart_main';
import { MetaTagsProps } from '@/context/brains';
import {
  DEFAULT_SALES_TAX_AMOUNT_PER_LOCATION,
  calculateSalesTax,
  calculateTotal,
} from '@/context/synapse/cart_brain';
import { useBrains } from '@/context/synapse/connections';
import { Product, sample_arr_data } from '@/data/sample_data/sample_products';
import { useEffect, useState } from 'react';

interface ProductPageProps {
  product: Product;
}

export default function ProductsPage({
  product = sample_arr_data[0],
}: ProductPageProps) {
  const {
    brains,
    setCart,
    incrementCartItem,
    decrimentCartItem,
    clearCartItems,
    deleteCartProduct,
    addToWishList,
    brainKeys,
    brainsLoaded,
    brainsMobile,
    brainsSiteOwner,
    brainsSetMetaTags,
  } = useBrains();

  const [cart, setCartSateful] = useState({
    items: brainsSiteOwner.cart!,
    total: calculateTotal(brainsSiteOwner.cart!),
    taxes: {
      set: calculateSalesTax(brainsSiteOwner.cart!),
      percent: DEFAULT_SALES_TAX_AMOUNT_PER_LOCATION,
    },
  });

  const removeProductByIdStateful = (productId: string) => {
    if (cart.items) {
      const updatedCartItems = cart.items.filter(
        (item) => item.product.id !== productId
      );

      setCartSateful({
        ...cart,
        items: updatedCartItems,
      });

      const existingCartItems = localStorage.getItem('cartItems');
      let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
    console.log('Item Removed:', cart.items);
  };

  const clearCartStateFul = () => {
    setCartSateful({
      items: [],
      total: 0,
      taxes: {
        set: 0,
        percent: DEFAULT_SALES_TAX_AMOUNT_PER_LOCATION,
      },
    });
  };

  const tagsString = product.tags.join(', ');

  useEffect(
    () => {
      let meta_obj: MetaTagsProps = {
        title: product.name!,
        description: product.description!,
        image: product.images[0].src,
        keyWords: tagsString,
      };
      brainsSetMetaTags(meta_obj);

      setCartSateful({
        items: brainsSiteOwner.cart!,
        total: calculateTotal(brainsSiteOwner.cart!),
        taxes: {
          set: calculateSalesTax(brainsSiteOwner.cart!),
          percent: DEFAULT_SALES_TAX_AMOUNT_PER_LOCATION,
        },
      });

      return () => {};
    },
    //eslint-disable-next-line
    [cart]
  );
  // Render the service page using the data passed in as props
  return (
    <Layout>
      <CartItems
        cart={cart!}
        setCartState={setCartSateful}
        incrementCartItem={incrementCartItem}
        decrementCartItem={decrimentCartItem}
        setCart={setCart}
        removeProductByIdStateful={removeProductByIdStateful}
        removeProductById={deleteCartProduct}
        clearCart={clearCartItems}
        clearCartStateFul={clearCartStateFul}
        addToWishlist={addToWishList}
      />
    </Layout>
  );
}
