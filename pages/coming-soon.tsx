import Layout from "@/components/layout/Layout";
import EmailFormSection from "@/components/layout/ctas/newsletter_minimal";
import { MetaTagsProps, MyContext } from '@/context/brains';
import { useContext, useEffect } from "react";

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
const ComingSoon = () => {
    const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsSetMetaTags } =
        useBrains();




    useEffect(() => {
        let meta_obj: MetaTagsProps = {
            title: "Coming Soon | Cyberoni Products",
            description: "Get ready for Cyberoni's newest data-driven products, including data analysis tools, machine learning models, data visualization software, smart home devices, home gadgets, and cybersecurity pentesting hardware. Stay ahead of the competition with Cyberoni's cutting-edge solutions. Sign up now to be the first to know when our products are available.",
            image: 'https://res.cloudinary.com/djao481zq/image/upload/v1683991955/CyberOni/Assets/Products/stock_photos/rdu9cztgfpyg0xhugk7c.jpg',
            keyWords: 'Cyberoni, data-driven, products, coming soon, data analysis tools, machine learning models, data visualization software, smart home devices, home gadgets, cybersecurity pentesting hardware, sign up'
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
                            Coming<span className="text-indigo-600">Soon</span>
                        </h2>
                        <h3 className='mt-10 text-xl md:text-3xl'>Were working on bringing you the best experience possible keep up to date -</h3>
                        <p className="mt-10 text-md md:text-xl"><a className="hover:underline" href="https://www.quicktoolz.com">CyberOni</a> is a website help you provide simple productivity tools for your daily need online for free.</p>
                    </div>
                    <div className="flex flex-wrap justify-center mt-10">
                        <div className="m-3">
                            <a href="https:cybershoptech.com/facebook" title="Quicktoolz On Facebook"
                                className="inline-flex items-center px-6 py-2 font-bold tracking-wide text-gray-800 bg-white rounded border-2 border-blue-600 shadow-md md:w-32 hover:border-blue-600 hover:bg-blue-600 hover:text-white">
                                <span className="mx-auto">facebook</span>
                            </a>
                        </div>
                        <div className="m-3">
                            <a href="https:cybershoptech.com/instagram" title="Quicktoolz On Twitter"
                                className="inline-flex items-center px-6 py-2 font-bold tracking-wide text-gray-800 bg-white rounded border-2 border-blue-500 shadow-md md:w-32 hover:border-blue-500 hover:bg-blue-500 hover:text-white">
                                <span className="mx-auto">Instagram</span>
                            </a>
                        </div>
                        <div className="m-3">
                            <a href="https:cybershoptech.com/linked-in" title="Quicktoolz On Pinterest"
                                className="inline-flex items-center px-6 py-2 font-bold tracking-wide text-gray-800 bg-white rounded border-2 border-red-600 shadow-md md:w-32 hover:border-red-600 hover:bg-red-600 hover:text-white">
                                <span className="mx-auto">LinkedIn</span>
                            </a>
                        </div>

                    </div>
                </div>
                <EmailFormSection
                    buttonText="Subscribe"

                    placeholder="subscribe to software releases"
                    expirationText=""
                    onSubmit={() => console.log('Test')} title="Stay up to date with our latest software releases" key="coming-soon-form" />

            </div>
        </div></Layout>
    )
}

export default ComingSoon