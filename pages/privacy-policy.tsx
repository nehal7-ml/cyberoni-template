import React from 'react'
import Layout from '@/components/layout'
import { MyContext } from "@/context/brains";

import { useContext,useEffect } from "react";

import { MetaTagsProps, DEFAULT_OBJ } from '@/context/brains';

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



const PrivacyPolicy = () => {
    const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsSetMetaTags } =
        useBrains();
    

    useEffect(() => {
        let meta_obj: MetaTagsProps = {
            title: "Privacy Policy | Cyberoni",
            description: "At Cyberoni, we are committed to protecting your privacy. This privacy policy outlines how we collect, use, and safeguard your personal information. We take your privacy seriously and will never sell or share your information without your consent. Contact us today to learn more about our privacy policy and how we can help you protect your data.",
            image: "https://res.cloudinary.com/djao481zq/image/upload/v1683991955/CyberOni/Assets/Privacy/stock_photos/jgmptelwuooyuzfe6kwe.jpg",
            keyWords: "Privacy Policy, Cyberoni, personal information, data protection"
        }
        brainsSetMetaTags(meta_obj)
        return () => { }
    },
        //eslint-disable-next-line
        []);
    return (
        <Layout><p className='p-10 m-20 text-center'>{brainsSiteOwner.descriptions.privacy_policy.content }</p></Layout>
    )
}

export default PrivacyPolicy