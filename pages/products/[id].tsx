import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { sample_arr_data, productArrType, Product, getProductById } from "@/data/sample_data/sample_products";
import Layout from "@/components/layout";
import Services from "../services";
import ServiceComponent from "@/components/layout/services/service";
import { MetaTagsProps, DEFAULT_OBJ } from '@/context/brains';
import { CartItem } from "@/data/sample_data/sample_products";
import ProductDetails from "@/components/layout/products/product_details_main";
import { useContext, useEffect } from "react";
import { MyContext } from "@/context/brains";
import { useBrains } from '@/context/synapse/connections';

interface ProductPageProps {
    product: Product;
}


export default function ProductsPage({ product = sample_arr_data[0] }: ProductPageProps) {
    const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsSetMetaTags } =
        useBrains();


    const incrementCartItem = (productId: string) => {
        const updatedCart = brainsSiteOwner.cart!.map((item) => {
            if (item.product.id === productId) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                };
            }
            return item;
        });

        brainsSiteOwner.cart = updatedCart; // Assign updatedCart to brainsSiteOwner.cart
        const existingCartItems = localStorage.getItem('cartItems');
        let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

        // Update the cart items with the new product


        // Store the updated cart items in local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
        cartItems = updatedCart;
        console.log('Quantity incremented:', updatedCart);
    };



    const decrementCartItem = (productId: string) => {
        const updatedCart = brainsSiteOwner.cart!.map((item) => {
            if (item.product.id === productId) {
                if (item.quantity > 1) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
                // Remove the item from the cart if the quantity becomes zero
                console.log('Item removed from cart:', productId);
                return null;
            }
            return item;
        }).filter((item) => item !== null) as CartItem[];

        brainsSiteOwner.cart = updatedCart; // Assign updatedCart to brainsSiteOwner.cart

        const existingCartItems = localStorage.getItem('cartItems');
        let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

        // Update the cart items with the new product
       

        // Store the updated cart items in local storage
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));

    };

    const setCart = (newCartItem: CartItem) => {
        const existingItemIndex = brainsSiteOwner.cart!.findIndex(
            (item) => item.product.id === newCartItem.product.id
        );

        if (existingItemIndex !== -1) {
            // Update existing item
            brainsSiteOwner.cart![existingItemIndex] = newCartItem;
        } else {
            // Add new item to the cart
            brainsSiteOwner.cart!.push(newCartItem);
        }
        // Get existing cart items from local storage
        const existingCartItems = localStorage.getItem('cartItems');
        let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

        // Update the cart items with the new product
        cartItems.push(newCartItem);
        console.log(newCartItem)

        // Store the updated cart items in local storage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    };

    const removeProductById = (productId: string) => {
        if (brainsSiteOwner.cart) {
            brainsSiteOwner.cart = brainsSiteOwner.cart.filter(
                (item) => item.product.id !== productId
            );

            const existingCartItems = localStorage.getItem('cartItems');
            let cartItems = existingCartItems ? JSON.parse(existingCartItems) : [];
            localStorage.setItem('cartItems', JSON.stringify(brainsSiteOwner.cart));
        };
        
    };

    const clearCart = () => {
        brainsSiteOwner.cart = [];
        localStorage.setItem('cartItems', JSON.stringify(brainsSiteOwner.cart));

    };

    const addToWishlist = (product: Product) => {
        if (!brainsSiteOwner.wishlist) {
            brainsSiteOwner.wishlist = [];
        }

        // Check if the product already exists in the wishlist
        const existingItemIndex = brainsSiteOwner.wishlist.findIndex(
            (item) => item.id === product.id
        );

        if (existingItemIndex === -1) {
            // Product does not exist in the wishlist, add it
            brainsSiteOwner.wishlist.push(product);
            console.log('Product added to wishlist:', product);
        } else {
            // Product already exists in the wishlist, remove it
            brainsSiteOwner.wishlist.splice(existingItemIndex, 1);
            console.log('Product removed from wishlist:', product);
        }

        // Update the wishlist in local storage
        localStorage.setItem('wishlist', JSON.stringify(brainsSiteOwner.wishlist));
    };

    const tagsString = product.tags.join(", ");

    useEffect(() => {
        let meta_obj: MetaTagsProps = {
            title: product.name!,
            description: product.description!,
            image: product.images[0].src,
            keyWords: tagsString
        }
        brainsSetMetaTags(meta_obj)
        return () => { }
    },
        //eslint-disable-next-line
        []);
    // Render the service page using the data passed in as props
    return (

        <Layout >

            <ProductDetails brainsSiteOwner={brainsSiteOwner} addToWishlist={addToWishlist} removeProductById={removeProductById} clearCartFunction={clearCart} addToCart={setCart} product={product} />


        </Layout>

    );
}

// Generate the paths for all services at build time
export const getStaticPaths: GetStaticPaths = async () => {
    const products: productArrType = sample_arr_data;
    const paths = products.map((product) => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: false };
};

// Fetch the data for a single service at build time
export const getStaticProps: GetStaticProps<ProductPageProps> = async ({ params }) => {
    const id = params!.id?.toString();


    const product: Product | undefined = getProductById(id);

    if (!product) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            product,
        },
    };
};
