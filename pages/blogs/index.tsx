import { BlogList } from '@/components/layout/blog/blog_list'
import { BlogHome } from '@/components/layout/blog/blog_home';
import Layout from "@/components/layout";
import { MyContext } from "@/context/brains";
import ProductList from '@/components/layout/products';
import { Product } from '@/data/sample_data/sample_products';
import { MetaTagsProps, DEFAULT_OBJ } from '@/context/brains';
import { useContext, useEffect } from 'react';
import { blog as BlogType } from '@/data/sample_data/sample_blog';
import { useBrains } from '@/context/synapse/connections';



const Blogs = () => {
  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner, brainsSetMetaTags } =
    useBrains();

  function getUniqueTags(): string[] {
    const tags = brainsSiteOwner.blogs!.reduce((acc: string[], blog: BlogType) => {
      blog.tags?.forEach((tag: string) => {
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
  const featuredBlogs = brainsSiteOwner.blogs!.filter((blog) => blog.featured)


  useEffect(() => {
    let meta_obj: MetaTagsProps = {
      title: "The Future of Data-Driven Business Strategies | Cyberoni Blog",
      description: "Stay ahead of the competition with data-driven business strategies from Cyberoni. Our expert team provides insights on data analysis, machine learning, data visualization, smart home devices, home gadgets, cybersecurity pentesting, and more. Learn how to leverage data to optimize your business operations and drive growth. Read our latest blog posts and contact us to learn more about our products and services.",
      image: 'https://res.cloudinary.com/djao481zq/image/upload/v1683991955/CyberOni/Assets/Blog/stock_photos/xe1gekmqoxxljcokbe7p.jpg',
      keyWords: seoTags
    }
    brainsSetMetaTags(meta_obj)
    return () => { }
  },
    //eslint-disable-next-line
    []);
  return (
    <Layout>
      <BlogList slogans={brainsSiteOwner.slogans} blogs={brainsSiteOwner.blogs!} />
      <BlogHome featuredBlogs={featuredBlogs} />

    </Layout>
  );
};

export default Blogs;