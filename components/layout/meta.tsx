import { MyContext } from "@/context/brains";
import { GetServerSidePropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { useContext, useEffect } from "react";

const DEFAULT_DOMAIN = "https://cybershoptech.com";
const DEFAULT_DESCRIPTION =
  "CyberOni - Software taken from black and white to color";
const DEFAULT_TITLE = "CyberOni - Software taken from black and white to color";
const DEFAULT_KEYWORDS =
  "software development, data science, web development, SaaS, marketing, graphic design, data-driven solutions, business analytics, artificial intelligence, machine learning, cloud computing, cybersecurity, e-commerce, online shopping, website optimization, digital marketing, search engine optimization, content marketing, social media marketing, customer engagement, customer experience, mobile app development, UI/UX design, responsive design, front-end development, back-end development, software engineering, programming languages, software architecture, agile development, project management, team collaboration, IT consulting, technology trends, innovation in software";
//!
const GTM_ID = "G-3YKTJT9TGN";
const FBP_ID = "753721519670367";
const MAILCHIMP_ID = "05b13ec97d7595b6325705ed5";

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


interface MyPageProps extends GetServerSidePropsContext {
  myProp: object;
}



interface MetaProps {
  title?: string;
  description?: string;
  image?: string;
  domain?: string;
  default_keywords?: string;
}

let meta_tags_global: MetaProps = {};
export default function Meta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image = `${DEFAULT_DOMAIN}/api/og`,
  domain = DEFAULT_DOMAIN,
  default_keywords = DEFAULT_KEYWORDS,
}: MetaProps) {

  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsMetaTags } =
    useBrains();

  type MetaTagsProps = {
    title: string;
    description: string;
    image: string;
    keyDomain: string;
    keyWords: string;
  };

  const meta_tags: MetaTagsProps = {
    title: title,
    description: description,
    image: image,
    keyDomain: domain,
    keyWords: default_keywords,
  };
  // console.log("~meta.tsx brains:", brains);
  meta_tags_global = meta_tags;

  useEffect(
    () => {
      // alert('Meta Reloaded')
      return () => {};
    },
    //eslint-disable-next-line
    [],
  );

  return (
    <>
      <Head>
        <title>{brainsMetaTags.title}</title>
        <meta name="description" content={brainsMetaTags.description} />
        <link rel="icon" href="/favicon.ico" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta itemProp="image" content={brainsMetaTags.description} />
        <meta property="og:logo" content={`/api/og`} />
        <meta property="og:title" content={brainsMetaTags.title} />
        <meta property="og:description" content={brainsMetaTags.description} />
        <meta name="keywords" content={brainsMetaTags.keyWords} />
        <meta property="og:image" content={brainsMetaTags.image} />
        {/* // Additional */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@cyberoni" />
        <meta name="twitter:creator" content="@cyberoni" />
        <meta name="twitter:title" content={brainsMetaTags.title} />
        <meta name="twitter:description" content={brainsMetaTags.description} />
        <meta name="twitter:image" content={brainsMetaTags.image} />

        {/* // Analytics */}
      </Head>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        strategy="afterInteractive"
      />
      {/* <Script id="mcjs" strategy="lazyOnload">
        {`
    function loadScript() {
      const m = document.createElement('script');
      const p = document.getElementsByTagName('script')[0];
      m.async = true;
      m.src = 'https://chimpstatic.com/mcjs-connected/js/users/${MAILCHIMP_ID}/9000cbf7d32ac7869cf8d6ad9.js';
      p.parentNode.insertBefore(m, p);
    }
    loadScript();
  `}
      </Script> */}
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GTM_ID}');
        `}
      </Script>
      <Script
        strategy="lazyOnload"
        src={`https://connect.facebook.net/en_US/fbevents.js`}
      />
      <Script id="facebook-pixel" strategy="lazyOnload">
        {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', ${FBP_ID});
    fbq('track', 'PageView');
  `}
      </Script>
      <noscript>
        <Image
          alt="hidden-img"
          height="1"
          width="1"
          className="hidden"
          src={`https://www.facebook.com/tr?id=${FBP_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
