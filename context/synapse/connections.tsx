import { useContext, useEffect } from 'react';
import { MetaTagsProps, MyContext } from '@/context/brains';


export const useBrains = () => {
  const brains = useContext(MyContext);
  console.log('BrainsContext', brains);
  const brainKeys = Object.keys(brains);
  const brainsLoaded = brains.isLoaded;
  const brainsMobile = brains.isMobileState;
  const brainsSiteOwner = brains.siteOwner;
  const brainsMetaTags = brains.metaDataObj;

  const brainsSetMetaTags = brains.setMetaTags;
  //Cart

  const setCart = brains.setCart;

  const incrementCartItem = brains.incrementCartItem;
  const decrimentCartItem = brains.decrementCartItem;

  const clearCartItems = brains.clearCart;

  const deleteCartProduct = brains.removeProductById;

  const addToWishList = brains.addToWishlist;
  return {
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
    brainsMetaTags,
    brainsSetMetaTags,
  };
};
