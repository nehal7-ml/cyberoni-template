import React from 'react'
import ServicesSection from "@/components/layout/services/dynamicServices"
import Layout from '@/components/layout'
import { useContext,useEffect } from "react";
import { MyContext } from "@/context/brains";
import ProductList from '@/components/layout/products';
import { Product } from '@/data/sample_data/sample_products';
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


const Products  = () => {
    const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsSetMetaTags } =
        useBrains();
    
    function getUniqueTags(): string[] {
        const tags = brainsSiteOwner.products!.reduce((acc: string[], product: Product) => {
            product.tags?.forEach((tag: string) => {
                if (!acc.includes(tag)) {
                    acc.push(tag);
                }
            });
            return acc;
        }, []);
        return Array.from(new Set(tags));
    }

    const uniqueTags: string[] = getUniqueTags()
    const seoTags = uniqueTags.map(tag => `${tag} | `).join('');


    useEffect(() => {
        let meta_obj: MetaTagsProps = {
            title: "Data-Driven Solutions for Businesses | Cyberoni Products",
            description: "At Cyberoni, we provide a range of data-driven products to help businesses achieve their goals. Our products include data analysis tools, machine learning models, data visualization software, smart home devices, home gadgets, and cybersecurity pentesting hardware. With Cyberoni's products, you'll have the tools and expertise you need to stay ahead of the competition. Contact us today to learn more about our products and how we can help your business grow.",
            image: 'https://res.cloudinary.com/djao481zq/image/upload/v1683991955/CyberOni/Assets/Products/stock_photos/hvgj5z5g2mikhd8g5qfy.jpg',
            keyWords: seoTags
        }
        brainsSetMetaTags(meta_obj)
        return () => { }
    },
        //eslint-disable-next-line
        []);
    return (
        <Layout>
            <ProductList products={brainsSiteOwner.products} />
        </Layout>
    )
}

export default Products