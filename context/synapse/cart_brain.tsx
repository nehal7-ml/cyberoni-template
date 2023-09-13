import { CartItem } from "@/data/sample_data/sample_products";
import { sample_data as siteOwnerData } from "@/data/sample_data/sample_site_owner";
import { Product, } from "@/data/sample_data/sample_products";
import { Variant } from "@/data/sample_data/sample_variants";
const siteOwner = siteOwnerData[0];

export const  DEFAULT_SALES_TAX_AMOUNT_PER_LOCATION = 12
  //!Cart Functions
 export const setCart = (newCartItem: CartItem) => {
   const existingItemIndex = siteOwner.cart!.findIndex(
     (item) => item.product.id === newCartItem.product.id
   );

   if (existingItemIndex !== -1) {
     // Update existing item
     siteOwner.cart![existingItemIndex] = newCartItem;
   } else {
     // Add new item to the cart
     siteOwner.cart!.push(newCartItem);
   }
   // Get existing cart items from local storage
   const existingCartItems = localStorage.getItem('cartItems');
   let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

   // Update the cart items with the new product
   cartItems.push(newCartItem);
   console.log(newCartItem);

   // Store the updated cart items in local storage
   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  };
  
   export const addToCartFunc = (product: Product, selectedVariant: Variant, count: number) => {
     const selected_product = {
       selectedVariant: selectedVariant,
       quantity: count,
       product: product,
     };

     setCart(selected_product);
   };

   export const addToWishlistLocal = (product: Product) => {
     addToWishlist(product);
     
   };
   export const incrementCartItem = (productId: string) => {
     const updatedCart = siteOwner.cart!.map((item) => {
       if (item.product.id === productId) {
         return {
           ...item,
           quantity: item.quantity + 1,
         };
       }
       return item;
     });

     siteOwner.cart = updatedCart; // Assign updatedCart to siteOwner.cart
     const existingCartItems = localStorage.getItem('cartItems');
     let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

     // Update the cart items with the new product

     // Store the updated cart items in local storage
     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
     cartItems = updatedCart;
     console.log('Quantity incremented:', updatedCart);
   };

   export const decrementCartItem = (productId: string) => {
     const updatedCart = siteOwner
       .cart!.map((item) => {
         if (item.product.id === productId) {
           if (item.quantity > 1) {
             return {
               ...item,
               quantity: item.quantity - 1,
             };
           }
           // Remove the item from the cart if the quantity becomes zero
           console.log('Item removed from cart:', productId);
           return null;
         }
         return item;
       })
       .filter((item) => item !== null) as CartItem[];

     siteOwner.cart = updatedCart; // Assign updatedCart to brainsSiteOwner.cart

     const existingCartItems = localStorage.getItem('cartItems');
     let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

     // Update the cart items with the new product

     // Store the updated cart items in local storage
     localStorage.setItem('cartItems', JSON.stringify(updatedCart));
     console.log('Quantity incremented:', updatedCart);
   };

  

   export const removeProductById = (productId: string) => {
     if (siteOwner.cart) {
       siteOwner.cart = siteOwner.cart.filter(
         (item) => item.product.id !== productId
       );

       const existingCartItems = localStorage.getItem('cartItems');
       let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
       localStorage.setItem('cartItems', JSON.stringify(siteOwner.cart));
     }
     console.log('Item Removed:', siteOwner.cart);
   };

   export const clearCart = () => {
     siteOwner.cart = [];
     localStorage.setItem('cartItems', JSON.stringify(siteOwner.cart));
   };

  export  const addToWishlist = (product: Product) => {
     if (!siteOwner.wishlist) {
       siteOwner.wishlist = [];
     }

     // Check if the product already exists in the wishlist
     const existingItemIndex = siteOwner.wishlist.findIndex(
       (item) => item.id === product.id
     );

     if (existingItemIndex === -1) {
       // Product does not exist in the wishlist, add it
       siteOwner.wishlist.push(product);
       console.log('Product added to wishlist:', product);
     } else {
       // Product already exists in the wishlist, remove it
       siteOwner.wishlist.splice(existingItemIndex, 1);
       console.log('Product removed from wishlist:', product);
     }

     // Update the wishlist in local storage
     localStorage.setItem('wishlist', JSON.stringify(siteOwner.wishlist));
   };
export function calculateSalesTax(cart: CartItem[]): number {
  let totalSalesTax = 0;

  for (let item of cart) {
    const { sales_tax, price } = item.product;

    // Ensure sales_tax is defined and has the required structure
    if (sales_tax && 'set' in sales_tax && 'percent' in sales_tax) {
      const fixedTax = sales_tax.set!;
      const percentTax = (price * sales_tax.percent) / 100;
      const itemTax = fixedTax + percentTax;
      totalSalesTax += itemTax * item.quantity;
    }
  }

  return totalSalesTax;
}

export function calculateTotal(cart: CartItem[]): number {
  let total = 0;

  for (let item of cart) {
    total += item.quantity * item.product.price;
  }

  return total;
}
