import Layout from "@/components/layout/Layout"
import Link from 'next/link'
import { MetaTagsProps, DEFAULT_OBJ } from '@/context/brains';
import { useContext, useEffect } from "react";
import { MyContext } from "@/context/brains";

const useBrains = () => {
    const brains = useContext(MyContext);
    console.log("BrainsContext", brains);
    const brainKeys = Object.keys(brains);
    const brainsLoaded = brains.isLoaded;
    const brainsMobile = brains.isMobileState;
    const brainsSiteOwner = brains.siteOwner;
    const brainsMetaTags = brains.metaDataObj;
    const brainsSetMetaTags = brains.setMetaTags;



    return { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsMetaTags, brainsSetMetaTags };
};
const PageNotFound = () => {
    const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsSetMetaTags } =
        useBrains();




    useEffect(() => {
        let meta_obj: MetaTagsProps = {
            title: "404 Error - Page Not Found | Cyberoni",
            description: "Oops! The page you are looking for is not available. At Cyberoni, we provide a range of data-driven products to help businesses achieve their goals. Our products include data analysis tools, machine learning models, data visualization software, smart home devices, home gadgets, and cybersecurity pentesting hardware. With Cyberoni's products, you'll have the tools and expertise you need to stay ahead of the competition. Contact us today to learn more about our products and how we can help your business grow.",
            image: 'https://res.cloudinary.com/djao481zq/image/upload/v1683991955/CyberOni/Assets/Errors/404-error.jpg',
            keyWords: "404 error, page not found, Cyberoni"
        }
        brainsSetMetaTags(meta_obj)
        return () => { }
    },
        //eslint-disable-next-line
        []);
    return (
        <Layout><main className="grid place-items-center px-6 py-24 my-20 min-h-full bg-white sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                <div className="flex gap-x-6 justify-center items-center mt-10">
                    <Link href="/" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
                    <Link href="/contact-us" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
                </div>
            </div>
        </main></Layout>
    )
}

export default PageNotFound