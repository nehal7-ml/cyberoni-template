import WebVitals from "@/components/home/web-vitals";
import Layout from "@/components/layout";
import BlogSection from "@/components/layout/blog/blog_card";
import ContactSection from "@/components/layout/ctas/contact_forms/contact_bg_color";
import { Hero, MobileHero } from "@/components/layout/heros";
import  Services  from "@/components/layout/services";
import Testimonials from "@/components/layout/swipeable_carousels/reviews_carousel_large";
import EmailFormSection from "@/components/shared/email-form-section-minimal";
import FeatureSection from "@/components/shared/jumpstart_minimalist";
import HeavyWaves from "@/components/shared/waves";
import { MyContext } from "@/context/brains";
import { motion } from "framer-motion";
import { useContext,useEffect } from "react";
import Footer from "@/components/layout/Footer";
import { FeatureSectionProps } from "@/components/layout/ctas/jumpstart_your_idea";
import { servicesCollectionType } from "@/data/sample_data/sample_services";
import { MetaTagsProps,DEFAULT_OBJ } from "@/context/brains"
//? Use get static props because doesn't change often

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


const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Home() {
  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsSetMetaTags } =
    useBrains();

  
  useEffect(() => {
    let meta_obj: MetaTagsProps = DEFAULT_OBJ
    brainsSetMetaTags(meta_obj)
    return () => {}
},
//eslint-disable-next-line
[]);

  type CheckoutHandler = (value: boolean) => void;

  type Props = {
    checkoutHandler: CheckoutHandler;
  };

  const handleCheckout: CheckoutHandler = () => {
    console.log("checkout");
  };

  let content;
  
  const featureSectionProps: FeatureSectionProps = {
    backgroundImage:
      "https://res.cloudinary.com/djao481zq/image/upload/v1683169196/CyberOni/Assets/Stock%20Photos/c3oyfz53wigewzrjglev.jpg",
    title: brainsSiteOwner.slogans.homeCta!.title,
    description: brainsSiteOwner.slogans.homeCta!.description,
    buttonLabel: brainsSiteOwner.slogans.homeCta!.links!.title || "Click Me!",
    buttonUrl: brainsSiteOwner.slogans.homeCta!.links!.url,
  };
  
  const serviceKeys: string[] = [];

  if (brainsSiteOwner?.services) {
    serviceKeys.push(...Object.keys(brainsSiteOwner.servicesCollection!));
  }
  return (
    <>
      <Layout>
        
        <EmailFormSection key="email-section-home-1" />
      </Layout>
    </>
  );
}

const features = [
  {
    title: "Performance first",
    description:
      "Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.",
    demo: <WebVitals />,
  },
];

const Main = () => {
  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner } =
    useBrains();

  let homeHeader;
  if (brainsMobile) {
    console.log(brainsMobile);
    homeHeader = <MobileHero siteOwner={brainsSiteOwner} />;
  } else {
    homeHeader = <Hero siteOwner={brainsSiteOwner} />;
  }
  return (
    <>
      <motion.div className="h-full w-full sm:max-w-96">
        <motion.div
          className=""
          initial="hidden"
          whileInView="show"
          animate="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {homeHeader}
        </motion.div>
      </motion.div>
    </>
  );
};
