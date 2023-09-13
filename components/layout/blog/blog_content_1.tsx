import Image from 'next/image';
import Link from 'next/link';


import type { blog, blogType } from '@/data/sample_data/sample_blog';
import { createBlogLink } from '@/data/blogs';
const BlogContent = ({
  blog,
  relatedBlogs,
}: {
  blog: blog;
  relatedBlogs: blogType;
}) => {
  const formattedDate =
    typeof blog.date === 'string' ? blog.date : blog.date.toString();

  return (
    <div className=" flex flex-col justify-center align-middle items-center md:lg:flex-row mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mt-10 w-3/4">
        <div className="items-center justify-between sm:flex">
          {blog.author.image && (
            <div className="mx-auto sm:flex-shrink-0">
              <Image
                src={blog.author.image || '/avatar-placeholder.png'}
                alt={blog.author.name}
                className="mx-auto max-w-xs rounded-full object-cover object-top"
                width={48}
                height={48}
              />
            </div>
          )}
          <div className="mt-5 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {blog.author.name}
            </p>
            {blog.author.title && (
              <p className="text-sm font-medium text-gray-400 dark:text-gray-500">
                {blog.author.title}
              </p>
            )}
          </div>
          <div className="mt-4 text-center sm:mt-0 sm:ml-6 sm:text-left">
            <p className="text-sm font-medium text-gray-400 dark:text-gray-500">
              {formattedDate}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-black">
            {blog.title}
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            {blog.description}
          </p>
          <div className="mt-6">
            {blog.images.map((image, index) => (
              <div key={index} className="relative h-64 w-full">
                <Image
                  src={image}
                  alt=""
                  height={200}
                  width={200}
                  className="h-48 w-full rounded-md object-cover object-center"
                />
              </div>
            ))}
          </div>
          <div className="mt-6">
            {blog.content.map((paragraph, index) => (
              <div key={index} className="mb-4">
                <h2 className="dark:text-cyan-950 text-2xl font-bold text-gray-900">
                  {paragraph.title}
                </h2>
                {paragraph.blockquote && (
                  <blockquote className="my-4 border-l-4 border-gray-300 pl-4 italic dark:border-gray-700">
                    {paragraph.blockquote}
                  </blockquote>
                )}
                {paragraph.yt_video && (
                  <div
                    className="relative h-0 w-full"
                    style={{ paddingTop: '56.25%' }}
                  >
                    <iframe
                      className="absolute top-0 left-0 h-full w-full"
                      src={paragraph.yt_video.replace('http://', 'https://')}
                      title="YouTube Video"
                      allowFullScreen
                      frameBorder={0}
                    ></iframe>
                  </div>
                )}
                {paragraph.embed && (
                  <div className="w-full">
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        className="h-full w-full"
                        src={paragraph.embed.link}
                        title={paragraph.title}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                )}
                {paragraph.embed && paragraph.embed.o_embed_link && (
                  <div className="w-full">
                    <div className="aspect-w-16 aspect-h-9">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: paragraph.embed.o_embed_link,
                        }}
                      />
                    </div>
                  </div>
                )}
                {paragraph.image && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={paragraph.image}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                )}
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                  {paragraph.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
                      
      <div className="flex mt-10 lg:self-baseline lg:ml-6 lg:mt-20  lg:w-1/4 flex-col  space-y-4">
        <h1 className="text-xl font-bold text-gray-800 text-center ">You might also like these blogs</h1>

        <div className="grid">
          {relatedBlogs.map((relatedBlog: blog) => (
            <div className="my-2 mx-5" key={relatedBlog.id + relatedBlog.title}>
              <Link
                key={relatedBlog.id}
                href={createBlogLink(relatedBlog)}
                className="text-blue-500 hover:underline"
              >
                {relatedBlog.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
