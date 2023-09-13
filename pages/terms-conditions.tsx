import React from 'react'
import Layout from '@/components/layout'

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
const TOS = () => {
  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsSetMetaTags } =
    useBrains();




  useEffect(() => {
    let meta_obj: MetaTagsProps = {
      title: "Terms and Conditions | Cyberoni",
      description: "Read our terms and conditions to understand how we provide our data-driven products to help businesses achieve their goals. Our products include data analysis tools, machine learning models, data visualization software, smart home devices, home gadgets, and cybersecurity pentesting hardware. With Cyberoni's products, you'll have the tools and expertise you need to stay ahead of the competition. Contact us today to learn more about our products and how we can help your business grow.",
      image: 'https://res.cloudinary.com/djao481zq/image/upload/v1683991955/CyberOni/Assets/Terms/terms-and-conditions.jpg',
      keyWords: "terms and conditions, data-driven products, Cyberoni"
    }
    brainsSetMetaTags(meta_obj)
    return () => { }
  },
    //eslint-disable-next-line
    []);
  return (
    <Layout><p className='p-10 m-20 text-center'>{brainsSiteOwner.descriptions.terms_conditions.content!}</p></Layout>
  )
}

export default TOS