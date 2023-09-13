import Layout from '@/components/layout';
import ServicesSection from '@/components/layout/services/dynamicServices';
import { MetaTagsProps, MyContext } from '@/context/brains';
import { ServiceWithID } from '@/data/sample_data/sample_services';
import { useContext, useEffect } from 'react';
const useBrains = () => {
  const brains = useContext(MyContext);
  console.log('BrainsContext', brains);
  const brainKeys = Object.keys(brains);
  const brainsLoaded = brains.isLoaded;
  const brainsMobile = brains.isMobileState;
  const brainsSiteOwner = brains.siteOwner;
  const brainsMetaTags = brains.metaDataObj;
  const brainsSetMetaTags = brains.setMetaTags;

  return {
    brains,
    brainKeys,
    brainsLoaded,
    brainsMobile,
    brainsSiteOwner,
    brainsMetaTags,
    brainsSetMetaTags,
  };
};

const Services = () => {
  const {
    brains,
    brainKeys,
    brainsLoaded,
    brainsMobile,
    brainsSiteOwner,
    brainsSetMetaTags,
  } = useBrains();

  function getUniqueTags(): string[] {
    const tags = brainsSiteOwner.services!.reduce(
      (acc: string[], service: ServiceWithID) => {
        service.tags?.forEach((tag: string) => {
          if (!acc.includes(tag)) {
            acc.push(tag);
          }
        });
        return acc;
      },
      []
    );
    return Array.from(new Set(tags));
  }

  const uniqueTags: string[] = getUniqueTags();
  const seoTags = uniqueTags.map((tag) => `${tag} | `).join('');

  useEffect(
    () => {
      let meta_obj: MetaTagsProps = {
        title: 'Data-Driven Solutions for Businesses | Cyberoni Services',
        description:
          "At Cyberoni, we understand the power of data science and its ability to drive business success. Our team of experts provides a range of services, including web development, SaaS, marketing, and graphic design. But what sets us apart is our focus on delivering data-driven solutions that help businesses achieve their goals. Whether you're looking to improve your website's performance, launch a new SaaS product, or create a killer marketing campaign, we can help. With Cyberoni on your side, you'll have the tools and expertise you need to stay ahead of the competition. Contact us today to learn more about our services and how we can help your business grow.",
        image:
          'https://res.cloudinary.com/djao481zq/image/upload/v1683991955/CyberOni/Assets/Services/stock_phots/gtxkjhvaqixrfi15ule7.jpg',
        keyWords: seoTags,
      };
      brainsSetMetaTags(meta_obj);
      return () => {};
    },
    //eslint-disable-next-line
    []
  );
  return (
    <Layout>
      <ServicesSection
        slogans={brainsSiteOwner.slogans}
        services={brainsSiteOwner.services!}
      />
    </Layout>
  );
};

export default Services;
