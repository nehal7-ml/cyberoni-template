import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { ServiceWithID } from '@/data/sample_data/sample_services';
import { getServiceByID } from '@/data/services';
import { arr_sample_data } from '@/data/sample_data/sample_services';
import Layout from '@/components/layout';
import Services from '../services';
import ServiceComponent from '@/components/layout/services/service';
import { MyContext, MetaTagsProps } from '@/context/brains';
import { useContext, useEffect, useState } from 'react';
import Blogdefault from '@/components/layout/blog/blog_post_templates/blog_post_1';
import {
  sample_data as blog_data,
  blogType as BlogType,
  blog,
} from '@/data/sample_data/sample_blog';
import { getBlogById,getBlogByTitle } from '@/data/blogs';
import { DynamicProductList } from '@/components/layout/products';
import { useBrains } from '@/context/synapse/connections';
import { ScoredProducts } from '@/data/sample_data/sample_products';

interface BlogPageProps {
  blog: blog;
}

export default function BlogPage({ blog = blog_data[0] }: BlogPageProps) {
  const [scoredProducts, setScoredProducts] = useState<ScoredProducts>([]); // state to hold scored products

  const {
    brains,
    setCart,
    incrementCartItem,
    decrimentCartItem,
    clearCartItems,
    deleteCartProduct,
    addToWishList,
    brainKeys,
    brainsLoaded,
    brainsMobile,
    brainsSiteOwner,
    brainsSetMetaTags,
  } = useBrains();
  const tagsString = blog.tags.join(', ');

  useEffect(
    () => {
      let meta_obj: MetaTagsProps = {
        title: blog.title,
        description: blog.description,
        image: blog.images[0],
        keyWords: tagsString,
      };
      brainsSetMetaTags(meta_obj);
      return () => {
        const scoredProds = brains.scoreProducts(
          blog,
          brains.siteOwner.products!
        );
        setScoredProducts(scoredProds);
      };
    },
    //eslint-disable-next-line
    []
  );

  // Render the service page using the data passed in as props
  return (
    <Layout>
      <div className="flex flex-col space-y-8">
        <Blogdefault blog={blog} blogs={brains.siteOwner.blogs!} />
        <DynamicProductList
          title="Check Out These Products"
          subtitle="You might like these products"
          products={scoredProducts.map(
            (scoredProduct) => scoredProduct.product
          )}
        />
      </div>
    </Layout>
  );
}


function createBlogLink(blog: blog) {
  let title = blog.title;

  // To lowercase
  title = title.toLowerCase();

  // Replace spaces with dashes
  title = title.replace(/\s+/g, '-');

  // // Remove special characters
  // title = title.replace(/[^\w\-]+/g, '');

  // // Remove leading or trailing dashes
  // title = title.replace(/^-+|-+$/g, '');

  // // Replace accented characters
  // title = title.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return title;
}
// Generate the paths for all services at build time
export const getStaticPaths: GetStaticPaths = async () => {
  const blogs: BlogType = blog_data;

  // Use the blog's title as the path parameter
  const paths = blogs.map((blog) => ({
    params: { title: createBlogLink(blog) }, // Replace "id" with "title"
  }));

  return { paths, fallback: false };
};

// Fetch the data for a single service at build time
export const getStaticProps: GetStaticProps<BlogPageProps> = async ({
  params,
}) => {
  const titleWithSpaces = (params!.title as string).replace(/-/g, ' ');

  const blog: blog | undefined = getBlogByTitle(titleWithSpaces);

  if (!blog) {
    return {
      notFound: true,
    };
  }
  const isoDateString = (date: Date | string) => {
    if (date instanceof Date) {
      return date.toISOString();
    }
    return date;
  };

  return {
    props: {
      blog: {
        ...blog,
        date: isoDateString(blog.date),
      },
    },
    revalidate: 1,
  };
};
