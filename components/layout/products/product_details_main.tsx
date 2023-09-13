import { CartItem, Product } from "@/data/sample_data/sample_products";
import { SiteOwnerData } from "@/data/sample_data/sample_site_owner";
import { Variant } from "@/data/sample_data/sample_variants";
import Link from 'next/link';
import { useEffect, useRef, useState } from "react";
import { ProductVariantButtons, } from "./productVariants";
import ProductImageCarousel from "./product_image_carousel";
type Props = {
    product: Product;
    brainsSiteOwner: SiteOwnerData; 
    addToCart: (newCartItem: CartItem) => void;
    addToWishlist: (product: Product) => void;
    removeProductById: (productId: string) => void;
    clearCartFunction: () => void;

};


const ProductDetails = ({ product, addToCart, addToWishlist, removeProductById, clearCartFunction, brainsSiteOwner }: Props) => {
    const [rotate, setRotate] = useState(false);
    const [count, setCount] = useState(1);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [inWishlist, setInWishlist] = useState(false);

    const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);
    const selectedVariantRef = useRef<Variant | null>(null);


    useEffect(() => {
        const checkWishlist = async () => {
            try {
                const wishlistData = brainsSiteOwner.wishlist!;
                const isInWishlist = wishlistData.some((item) => item.id === product.id);
                setInWishlist(isInWishlist);
            } catch (error) {
                console.error('Error fetching wishlist:', error);
            }
        };

        checkWishlist();
    }, [brainsSiteOwner.wishlist,product.id]);
    
    const handleVariantClick = (variant: Variant) => {
        setSelectedVariant(variant);
        selectedVariantRef.current = variant;
        

    };
    const addToCartFunc = (product: Product) => {
        const selected_product = {
            selectedVariant: selectedVariant,
            quantity: count,
            product: product
        };

        addToCart(selected_product);

        
    };


    const addToWishlistLocal = (product:Product) => {
        addToWishlist(product)
       setInWishlist(true)

 }

    return (
        <section className="overflow-hidden pt-12 pb-24 mt-5 w-11/12 bg-blueGray-100 rounded-b-10 xl">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="px-4 w-full">
                        <ul className="flex flex-wrap items-center mb-16">
                            <li className="mr-6">
                               <span className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" >
                                    <Link href="/">Home</Link>
                                    <svg className="ml-6" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </li>
                            <li className="mr-6">
                               <span className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" >
                                    <Link href="/products">Store</Link>
                                    <svg className="ml-6" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                            </li>
                            <li className="mr-8">
                                <span className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" >

                                {product.category}
                                <svg className="ml-6" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                                </svg>
                                </span>

                            </li>
                            <li className="mr-6">
                            {product.subcategory &&<span className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" >
                                {product.subcategory}
                                <svg className="ml-6" width="4" height="7" viewBox="0 0 4 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.150291 0.898704C-0.0500975 0.692525 -0.0500975 0.359292 0.150291 0.154634C0.35068 -0.0507836 0.674443 -0.0523053 0.874831 0.154634L3.7386 3.12787C3.93899 3.33329 3.93899 3.66576 3.7386 3.8727L0.874832 6.84594C0.675191 7.05135 0.35068 7.05135 0.150292 6.84594C-0.0500972 6.63976 -0.0500972 6.30652 0.150292 6.10187L2.49888 3.49914L0.150291 0.898704Z" fill="currentColor"></path>
                                </svg>
                            </span>}</li>
                            <li className="mr-6"><Link className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href={`/products${product.id}`}>{product.name}</Link></li>
                        </ul>
                    </div>
                    <div className="px-4 w-full">
                        <ProductImageCarousel images={product.images} />

                        <div className="mb-6 w-11/12">
                            <span className="text-xs tracking-wider text-gray-400">{product.name + " " + product.sku}</span>
                            <h2 className="mt-6 mb-4 text-5xl font-medium md:text-7xl lg:text-8xl font-heading">{product.name}</h2>
                            <p className="flex items-center mb-6">
                                <span className="mr-2 text-sm font-medium text-blue-500">$</span>
                                <span className="text-3xl font-medium text-blue-500">{product.price + product.price * product.profit_margin}</span>
                            </p>
                            <p className="text-lg text-gray-400">{product.description}</p>
                        </div>
                        {product.ratings &&
                            <div className="flex items-center mb-6">
                                <div className="inline-flex mr-4">
                                    <button className="mr-1">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                                        </svg>
                                    </button>
                                    <button className="mr-1">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                                        </svg>
                                    </button>
                                    <button className="mr-1">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                                        </svg>
                                    </button>
                                    <button className="mr-1">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                                        </svg>
                                    </button>
                                    <button>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z" fill="#C1C9D3"></path>
                                        </svg>
                                    </button>
                                </div>
                                <span className="text-gray-400 text-md">{product.ratings}</span>
                            </div>
                        }
                      

                        <QuantitySelection setCount={setCount} count={count} />
                        <div>
                            {product.variants && product.variants.map((variant, index) => (
                                <ProductVariantButtons onVariantClick={handleVariantClick} key={index} variant={variant} />
                            ))}</div>
                        <div className="flex flex-wrap -mx-2 mb-12">
                            <div className="px-2 mb-2 w-full md:w-2/3 md:mb-0"><button onClick={() => addToCartFunc(product,)} className="block px-2 py-4 text-xl font-medium tracking-tighter leading-8 text-center text-white bg-blue-500 rounded-xl font-heading focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600" >Add to bag</button></div>
                            <div className="px-2 w-full md:w-1/3">
                                {inWishlist ? (
                                    <span className="flex justify-center items-center px-2 py-4 w-full text-xl font-medium tracking-tighter leading-8 text-center bg-white rounded-xl font-heading focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60">
                                        <button onClick={() => addToWishlistLocal(product)} className="mr-2">Wishlist</button>
                                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z" fill="red" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                ) : (
                                    <span className="flex justify-center items-center px-2 py-4 w-full text-xl font-medium tracking-tighter leading-8 text-center bg-white rounded-xl font-heading focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 hover:bg-opacity-60">
                                            <button onClick={() => addToWishlistLocal(product)} className="mr-2">Add to Wishlist</button>
                                        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.3235 20.1324L2.52488 10.8515C1.75232 10.0706 1.24237 9.06367 1.06728 7.97339C0.8922 6.88311 1.06086 5.76477 1.54936 4.7768V4.7768C1.91837 4.03089 2.45739 3.3843 3.12201 2.89033C3.78663 2.39635 4.55781 2.06911 5.37203 1.93558C6.18626 1.80205 7.0202 1.86605 7.80517 2.1223C8.59013 2.37855 9.30364 2.81972 9.88691 3.40946L11.3235 4.86204L12.7601 3.40946C13.3434 2.81972 14.0569 2.37855 14.8419 2.1223C15.6269 1.86605 16.4608 1.80205 17.275 1.93558C18.0892 2.06911 18.8604 2.39635 19.525 2.89033C20.1897 3.3843 20.7287 4.03089 21.0977 4.7768V4.7768C21.5862 5.76477 21.7549 6.88311 21.5798 7.97339C21.4047 9.06367 20.8947 10.0706 20.1222 10.8515L11.3235 20.1324Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                )}

                            </div>
                        </div>
                        <div>
                            <h4 className="mb-6 font-medium font-heading">More information</h4>
                            <button
                                className={`flex justify-between items-center py-4 pr-6 pl-6 mb-4 w-full leading-7 rounded-2xl border-2 lg:pl-12 border-blueGray-200 hover:border-blueGray-300 ${isCollapsed ? "pb-0" : ""}`}
                                onClick={() => setIsCollapsed(!isCollapsed)}
                            >
                                <h3 className="text-lg font-medium font-heading">Shipping &amp; returns</h3>
                                {isCollapsed ? (
                                    <>
                                    
                                        <div><p>{product.shipping_return_policy}</p></div>
                                    </>
                                ) : <span>
                                    <svg
                                        width="12"
                                        height="8"
                                        viewBox="0 0 12 8"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z"
                                            fill="black"
                                        ></path>
                                    </svg>

                                </span>}
                            </button>
                            {product.product_breakdown &&
                                <button
                                    className={`flex justify-between items-center py-4 pr-6 pl-6 mb-4 w-full leading-7 rounded-2xl border-2 lg:pl-12 border-blueGray-200 hover:border-blueGray-300 ${isCollapsed ? "pb-0" : ""}`}
                                    onClick={() => setIsCollapsed(!isCollapsed)}
                                >
                                    <h3 className="text-lg font-medium font-heading">Product &amp; Breakdown</h3>
                                    {isCollapsed ? (
                                        <>

                                            <div><p>{product.product_breakdown}</p></div>
                                        </>
                                    ) : <span>
                                        <svg
                                            width="12"
                                            height="8"
                                            viewBox="0 0 12 8"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M10.4594 0.289848C10.8128 -0.096616 11.3841 -0.096616 11.7349 0.289848C12.0871 0.676312 12.0897 1.30071 11.7349 1.68718L6.63794 7.21015C6.28579 7.59662 5.71584 7.59662 5.36108 7.21015L0.264109 1.68718C-0.0880363 1.30215 -0.0880363 0.676312 0.264109 0.289848C0.617558 -0.096616 1.18882 -0.096616 1.53966 0.289848L6.00147 4.81927L10.4594 0.289848Z"
                                                fill="black"
                                            ></path>
                                        </svg>

                                    </span>}
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};


interface QuantitySelectionProps {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const QuantitySelection: React.FC<QuantitySelectionProps> = ({ count, setCount }) => {
    const addCount = () => {
        setCount(prev => prev + 1);
    };

    const minusCount = () => {
        if (count > 0) {
            setCount(prev => prev - 1);
        }
    };

    return (
        <div className="mb-10">
            <h4 className="mb-3 font-medium font-heading">Qty:</h4>
            <div className="flex items-center">
                <button
                    className="px-4 py-2 mr-2 text-sm text-white bg-blue-500 rounded-xl hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
                    onClick={minusCount}
                >
                    -
                </button>
                <input
                    className="px-3 py-2 w-24 text-center bg-white rounded-xl border-2 border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    type="text"
                    placeholder="1"
                    value={count}
                    readOnly
                />
                <button
                    className="px-4 py-2 ml-2 text-sm text-white bg-blue-500 rounded-xl hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
                    onClick={addCount}
                >
                    +
                </button>
            </div>
        </div>
    );
};


export default ProductDetails;


