import Layout from "@/components/layout/Layout"
import Link from 'next/link'
import { MetaTagsProps, DEFAULT_OBJ } from '@/context/brains';
import { useContext, useEffect } from "react";
import { MyContext } from "@/context/brains";

const useBrains = () => {
    const brains = useContext(MyContext);
    // console.log("BrainsContext", brains);
    const brainKeys = Object.keys(brains);
    const brainsLoaded = brains.isLoaded;
    const brainsMobile = brains.isMobileState;
    const brainsSiteOwner = brains.siteOwner;
    const brainsMetaTags = brains.metaDataObj;
    const brainsSetMetaTags = brains.setMetaTags;



    return { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsMetaTags, brainsSetMetaTags };
};
const ErrorPage = () => {
    const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsSetMetaTags } =
        useBrains();

  


    useEffect(() => {
        let meta_obj: MetaTagsProps = {
            title: "Site Crash Issue | Cyberoni",
            description: "If you're experiencing a site crash issue, Cyberoni can help. Our team of experts can diagnose the issue and provide a data-driven solution to get your website back up and running. Contact us today to learn more about our services and how we can help your business.",
            image: 'https://res.cloudinary.com/djao481zq/image/upload/v1683991955/CyberOni/Assets/Services/stock_photos/9w7roqzkej6xc3vlm3bz.jpg',
            keyWords: "site crash, website down, website issue, website error, website outage"
        }
        brainsSetMetaTags(meta_obj)
        return () => { }
    },
        //eslint-disable-next-line
        []);
    return (
        <Layout><div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="container">
                <div className="p-5 mx-2 bg-white rounded-lg shadow-lg md:p-20">
                    <div className="text-center">
                        <h2 className="text-4xl font-extrabold tracking-tight leading-10 text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                            Site<span className="text-indigo-600">Error</span>
                        </h2>
                        <h3 className='mt-10 text-xl md:text-3xl'>Were Experiencing and Issue Please Provide us details if possible:</h3>
                        <p className="mt-10 text-md md:text-xl"><a className="hover:underline" href="https://www.quicktoolz.com">CyberOni</a> is a website help you provide simple productivity tools for your daily need online for free.</p>
                    </div>
                    <div className="flex flex-wrap justify-center mt-10">
                        <div className="m-3">
                            <a href="https://www.facebook.com/QuickToolz" title="Quicktoolz On Facebook"
                                className="inline-flex items-center px-6 py-2 font-bold tracking-wide text-gray-800 bg-white rounded border-2 border-blue-600 shadow-md md:w-32 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
                                <span className="mx-auto">Bug Bounty</span>
                            </a>
                        </div>
                        <div className="m-3">
                            <a href="https://twitter.com/quicktoolz" title="Quicktoolz On Twitter"
                                className="inline-flex items-center px-6 py-2 font-bold tracking-wide text-gray-800 bg-white rounded border-2 border-blue-500 shadow-md md:w-32 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                                <span className="mx-auto">Report</span>
                            </a>
                        </div>
                        <div className="m-3">
                            <a href="https://pinterest.com/quicktoolz/" title="Quicktoolz On Pinterest"
                                className="inline-flex items-center px-6 py-2 font-bold tracking-wide text-gray-800 bg-white rounded border-2 border-red-600 shadow-md md:w-32 hover:border-red-600 hover:bg-red-600 hover:text-white">
                                <span className="mx-auto">Severe</span>
                            </a>
                        </div>
                        <div className="m-3">
                            <a href="https://www.reddit.com/user/quicktoolz/" title="Quicktoolz On Facebook"
                                className="inline-flex items-center px-6 py-2 font-bold tracking-wide text-gray-800 bg-white rounded border-2 border-orange-500 shadow-md md:w-32 hover:border-orange-500 hover:bg-orange-500 hover:text-white">
                                <span className="mx-auto">Gotcha</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div></Layout>
    )
}

export default ErrorPage