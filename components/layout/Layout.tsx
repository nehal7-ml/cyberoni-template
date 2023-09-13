import { PropsWithChildren } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { MyContext } from "@/context/brains";
import { motion } from "framer-motion";
import { useContext } from "react";
interface Props {
  title?: string,
  transparent?: boolean
}


const useBrains = () => {
  const brains = useContext(MyContext);
  // console.log("BrainsContext", brains);
  const brainKeys = Object.keys(brains);
  const brainsLoaded = brains.isLoaded;
  const brainsMobile = brains.isMobileState;
  const brainsSiteOwner = brains.siteOwner;
  const brainsMetaTags = brains.metaDataObj;


  return { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsMetaTags };
};


const Layout = (props: PropsWithChildren<Props>) => {
  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsMetaTags } =
    useBrains();

  return (

    <div>
      <Head>
        <style>
          {`
      html {
        scroll-behavior: smooth;
      }
    `}
        </style>
        <title>{brainsMetaTags.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={brainsMetaTags.description} />
        <meta name="keywords" content={brainsMetaTags.keyWords} />
        {brainsMetaTags.image && <meta property="og:image" content={brainsMetaTags.image} />}
        {brainsMetaTags.keyDomain && <meta property="og:site_name" content={brainsMetaTags.keyDomain} />}
      </Head>
      <header>
        <Navbar transparent={true} />
      </header>
      <main>
        {props.children}
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Layout
