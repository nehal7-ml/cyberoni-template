

import { Triangles } from "@/components/shared/loaders";
import CartItems from '@/components/layout/cart/cart_main';
import { Variant } from '@/data/sample_data/sample_variants';
import { Service } from "@/data/sample_data/sample_services";
import { incrementCartItem,
        decrementCartItem,
        setCart,
        removeProductById,
        clearCart,
        addToWishlist} from './synapse/cart_brain'
import {
  CartItem,
  Product,
  productArrType,
  sample_arr_data,
  ScoredProducts,
} from '@/data/sample_data/sample_products';
import {
  SiteOwnerData,
  getSiteOwnerById,
  sample_data as site_owner_sd,
} from "@/data/sample_data/sample_site_owner";
import { blog } from "@/data/sample_data/sample_blog";
import { createContext, useContext, useEffect, useRef, useState,useLayoutEffect } from "react";
import { addToMarketingCrm, getDatabase, CreatePageParams } from "./synapse/crm"
import { scoreProducts, scoreProduct, findSimilarBlogs } from './synapse/blog_brain';
import { findBestBlogsForService,findBestProductsForService } from "./synapse/service_brain";

const SAMPLE_SITE_OWNER_ID = "23bb9f36-1b32-48a3-99f3-3a40aa56a078";

type SharedState = {
  isLoggedIn: boolean;
  isMobileState: boolean;
  isLoaded: boolean;
  siteOwner: SiteOwnerData;
  metaDataObj: MetaTagsProps;
  findSimilarBlogs: (currentBlog: blog, allBlogs: blog[]) => blog[];
  checkSiteStatus: () => Promise<void>;
  setMetaTags: (props: MetaTagsProps) => Promise<void>;
  getSiteOwnerById: (id: string) => SiteOwnerData | undefined;
  addToMarketingCrm: (params: CreatePageParams) => Promise<void>;
  getDatabase: (params: { databaseId: string }) => Promise<any>;
  incrementCartItem: (productId: string) => void;
  decrementCartItem: (productId: string) => void;
  setCart: (newCartItem: CartItem) => void;
  removeProductById: (productId: string) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  scoreProducts: (blog: blog, products: productArrType) => ScoredProducts;
  findBestBlogsForService: (
    service: Service,
    allBlogs: blog[],
    limit?: number
  ) => blog[];
  findBestProductsForService: (
    service: Service,
    allProducts: Product[],
    limit?: number
  ) => Product[];
};

export const MyContext = createContext<
  SharedState & { setMetaTags: (props: MetaTagsProps) => Promise<void> }
>({
  isLoggedIn: false,
  isLoaded: false,
  isMobileState: true,
  siteOwner: site_owner_sd[0],
  checkSiteStatus: async () => {},
  metaDataObj: {
    title: '',
    description: '',
    image: '',
    keyDomain: '',
    keyWords: '',
  },
  setMetaTags: async () => {},
  getSiteOwnerById: (id: string) => undefined,
  addToMarketingCrm: async () => {},
  findSimilarBlogs: () => [],
  findBestBlogsForService: () => [],

  findBestProductsForService: () => [],

  getDatabase: async () => {},
  incrementCartItem: () => {},
  decrementCartItem: () => {},
  setCart: () => {},
  removeProductById: () => {},
  clearCart: () => {},
  addToWishlist: () => {},
  scoreProducts: () => [],
});

// Define the props for the provider component using interface
interface MyContextProviderProps {
  children: React.ReactNode;
}

export type MetaTagsProps = {
  title: string;
  description: string;
  image?: string;
  keyDomain?: string;
  keyWords: string;
};


const DEFAULT_DOMAIN = "https://cybershoptech.com";
const DEFAULT_DESCRIPTION =
  "CyberOni - Software taken from black and white to color";
const DEFAULT_TITLE = "CyberOni - Software taken from black and white to color";
const DEFAULT_KEYWORDS =
  "software development, data science, web development, SaaS, marketing, graphic design, data-driven solutions, business analytics, artificial intelligence, machine learning, cloud computing, cybersecurity, e-commerce, online shopping, website optimization, digital marketing, search engine optimization, content marketing, social media marketing, customer engagement, customer experience, mobile app development, UI/UX design, responsive design, front-end development, back-end development, software engineering, programming languages, software architecture, agile development, project management, team collaboration, IT consulting, technology trends, innovation in software";


export const DEFAULT_OBJ = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  image: "api/og",
  keyDomain: DEFAULT_DOMAIN,
  keyWords: DEFAULT_KEYWORDS,
}
// Create a provider component to wrap the app and pass down the context value
export const Brains: React.FC<MyContextProviderProps> = ({ children }) => {

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isMobile = useRef(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [siteOwner, setSiteOwner] = useState(site_owner_sd[0]);
  const [metaDataObj, setMetaData] = useState<MetaTagsProps>(DEFAULT_OBJ);

  const [isMobileState, setisMobileState] = useState(true);

  var isMobile_func = require("is-mobile");

  function check_is_mobile(): boolean {
    try {
      console.log(isMobile_func());
      isMobile.current = isMobile_func();
      console.log(isMobile.current);
      setisMobileState(isMobile.current);
      console.log(`Is Mobile :${isMobileState}`);
      return true;
    } catch {
      isMobile.current = isMobile_func();
      setisMobileState(isMobile.current);
      console.log(`Is Not Mobile :${isMobileState}`);
      return false;
    }
  }
  
  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true); // Set the isLoaded state to true when the site has finished loading
    };

    if (document.readyState === "complete") {
      handleLoad(); // If the document is already loaded, call the handleLoad function directly
    } else {
      window.addEventListener("load", handleLoad); // Add event listener for the load event

      return () => {
        window.removeEventListener("load", handleLoad); // Cleanup: remove the event listener
      };
    }
  }, []);

  const setMetaTags = (props: MetaTagsProps): Promise<void> => {
    // alert("run")
    return new Promise((resolve) => {
      setMetaData(props);
      console.log("Reset Meta Tags");
      resolve();
    });
  };
  const getSiteDetails = () => {
    try {
      let owner = getSiteOwnerById(SAMPLE_SITE_OWNER_ID);
      if (owner) {
        setSiteOwner(owner);
        // console.log("SITE OWNER:", owner);
        setSiteOwner(owner);
      }

      console.log(`Site Owner Data Found `);
    } catch (e) {
      setIsLoaded(false);
      console.log(`Site Owner Data Not Found `, e);
    }
  };


  const checkSiteStatus = async () => {
    try {
      check_is_mobile();
     
      getSiteDetails();
    } catch (error) {
      console.log("failed to get app state", error);
    }
  };

  useEffect(() => {

    check_is_mobile();
    getSiteDetails();
    
    const handleLoad = () => {
      setIsLoaded(true); // Set the isLoaded state to true when the site has finished loading
    };

    window.addEventListener("load", handleLoad); // Add event listener for the load event

    return () => {
      window.removeEventListener("load", handleLoad); // Cleanup: remove the event listener
    };
    

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Return the loading screen or the children of the provider based on isLoaded state
  return (
    <MyContext.Provider
      value={{
        isLoggedIn,
        findBestBlogsForService,
        findBestProductsForService,
        isMobileState,
        isLoaded,
        siteOwner,
        setMetaTags,
        metaDataObj,
        checkSiteStatus,
        findSimilarBlogs,
        getSiteOwnerById,
        addToMarketingCrm,
        scoreProducts,
        getDatabase,
        incrementCartItem,
        decrementCartItem,
        setCart,
        removeProductById,
        clearCart,
        addToWishlist,
      }}
    >
      {!isLoaded ? <Triangles font="" /> : children}
    </MyContext.Provider>
  );
};

// Create a custom hook to easily access the context from any component
export const BrainsContext = () => useContext(MyContext);
