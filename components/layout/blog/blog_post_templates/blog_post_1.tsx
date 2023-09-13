import { blog,blogType } from '@/data/sample_data/sample_blog';
import { useState, useEffect } from 'react';
import { useBrains } from '@/context/synapse/connections';

import BlogContent from '../blog_content_1';
type BlogProps = {
  blog: blog;
  blogs: blogType
};


const Blogdefault = ({ blog,blogs }: BlogProps) => {

  const [relatedBlogs, setRelatedBlogs] = useState<blog[]>([]);
    const {
      brains,
      
    } = useBrains();
  
useEffect(() => {
 setRelatedBlogs(brains.findSimilarBlogs(blog, blogs));
}, []);
  return (
    <div className="mx-auto mt-20 max-w-screen-xl">
      <main className="mt-10">
        <BlogContent relatedBlogs={relatedBlogs} blog={blog} />
      </main>
    </div>
  );
};

export default Blogdefault;
