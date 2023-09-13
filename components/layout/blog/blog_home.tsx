import { blogType } from "@/data/sample_data/sample_blog";
import Image from 'next/image';
import Link from 'next/link';
import { FeaturedBlog } from "./featured_blog";
import { blog } from "@/data/sample_data/sample_blog";
export const BlogHome = ({ featuredBlogs }: { featuredBlogs: blogType }) => {
  return (
    <div className="flex justify-center items-center w-11/12">
      <div className="px-4 py-9 w-96 2xl:container sm:w-auto md:py-12 md:px-6 lg:px-20 lg:py-16 2xl:mx-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="mt-5 text-4xl font-semibold leading-9 text-center text-gray-800">
            Featured Blogs
          </h1>
          <p className="mt-4 w-11/12 text-base leading-normal text-center text-gray-600 md:w-10/12 lg:w-1/2">
            Jump Into Our Recent Blog Posts!
          </p>
        </div>
        {featuredBlogs.length <= 4 ? (
          featuredBlogs.map((blog, index) => {
            return <FeaturedBlog key={blog.id} blog={blog} />;
          })
        ) : (
            <DynamicFeatured featuredBlogs={featuredBlogs} />
        )}
        </div>
      </div>
   
  );
};

interface Props {
  featuredBlogs: blogType;
}



 

const DynamicFeatured: React.FC<Props> = ({ featuredBlogs }) => {
     
  return (
    <div> <div className="items-stretch mt-8 md:mt-12 lg:flex">
      <div className="lg:w-1/2">
        <div className="gap-x-6 justify-between items-center sm:flex xl:gap-x-8">
          <div className="relative sm:w-1/2">
            <div>
              <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                {featuredBlogs[0].date instanceof Date ? featuredBlogs[0].date.toLocaleDateString() : featuredBlogs[0].date}



              </p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold text-white 5">
                  {featuredBlogs[0].title || "Blog Title"}
                </h2>
                <p className="mt-2 text-base leading-4 text-white">
                  {featuredBlogs[0].sub_title || "Blog Subtitle"}
                </p>
                <div className="flex items-center mt-4 text-white cursor-pointer hover:text-gray-200 hover:underline">
                  <Link href={`/blogs/${featuredBlogs[0].id}`}>

                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <Image
              height={500}
              width={500}
              src={featuredBlogs[0].images[0] || "https://via.placeholder.com/500x500 "}
              className="w-full"
              alt="chair"
            />
          </div>
          <div className="relative mt-4 sm:mt-0 sm:w-1/2">
            <div>
              <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                {featuredBlogs[1].date instanceof Date ? featuredBlogs[1].date.toLocaleDateString() : featuredBlogs[1].date}



              </p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold text-white 5">
                  {featuredBlogs[1].title || "Blog Title"}
                </h2>
                <p className="mt-2 text-base leading-4 text-white">
                  {featuredBlogs[1].sub_title || "Blog Subtitle"}
                </p>
                <div className="flex items-center mt-4 text-white cursor-pointer hover:text-gray-200 hover:underline">
                  <Link href={`/blogs/${featuredBlogs[1].id}`}>


                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                  </Link>
                </div>
              </div>
            </div>
            <Image
              height={500}
              width={500}
              src={featuredBlogs[1].images[0] || "https://via.placeholder.com/500x500"}
              className="w-full"
              alt="wall design"
            />
          </div>
        </div>

        <div className="relative">
          <div>
            <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white md:p-10">
              {featuredBlogs[2].date instanceof Date ? featuredBlogs[2].date.toLocaleDateString() : featuredBlogs[2].date}




            </p>
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <h2 className="text-xl font-semibold text-white 5">
                {featuredBlogs[2].title || "Blog Title"}

              </h2>
              <p className="mt-2 text-base leading-4 text-white">
                {featuredBlogs[2].sub_title || "Blog subtitle"}

              </p>
              <div className="flex items-center mt-4 text-white cursor-pointer hover:text-gray-200 hover:underline">
                <Link href={`/blogs/${featuredBlogs[2].id}`}>
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>

          </div>
          <Image
            height={500}
            width={500}
            src={featuredBlogs[2].images[0] || "https://via.placeholder.com/500x500"}
            alt="sitting place"
            className="hidden mt-8 w-full sm:block md:mt-6"
          />
          <Image
            height={500}
            width={500}
            className="mt-4 w-full sm:hidden"
            src={featuredBlogs[2].images[1] || featuredBlogs[2].images[0]}
            alt="sitting place"
          />
        </div>
      </div>
      <div className="flex-col justify-between mt-4 md:mt-6 lg:ml-4 lg:mt-0 lg:flex lg:w-1/2 xl:ml-8">
        <div className="relative">
          <div>

            <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white md:p-10">
              {featuredBlogs[3].date instanceof Date ? featuredBlogs[3].date.toLocaleDateString() : featuredBlogs[3].date}

            </p>
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <h2 className="text-xl font-semibold text-white 5">
                {featuredBlogs[3].title || "Blog Title "}

              </h2>
              <p className="mt-2 text-base leading-4 text-white">
                {featuredBlogs[3].sub_title || "Blog SubTitle "}
              </p>
              <div className="flex items-center mt-4 text-white cursor-pointer hover:text-gray-200 hover:underline">
                <Link href={`/blogs/${featuredBlogs[3].id}`}>

                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <Image
            height={500}
            width={500}
            src={featuredBlogs[3].images[0] || "https://via.placeholder.com/500x500"}
            alt="sitting place"
            className="hidden mt-8 w-full sm:block md:mt-6"
          />
          <Image
            height={500}
            width={500}
            className="mt-4 w-full sm:hidden"
            src={featuredBlogs[3].images[1] || featuredBlogs[2].images[0] || "https://via.placeholder.com/500x500"}
            alt="sitting place"
          />
        </div>
        <div className="gap-x-6 justify-between items-center mt-4 sm:flex md:mt-6 xl:gap-x-8">
          <div className="relative w-full">
            <div>
              <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                {featuredBlogs[4].date instanceof Date ? featuredBlogs[4].date.toLocaleDateString() : featuredBlogs[4].date}


              </p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold text-white 5">
                  {featuredBlogs[4].title || "Blog Title "}

                </h2>
                <p className="mt-2 text-base leading-4 text-white">
                  {featuredBlogs[4].sub_title || "Blog Subtitle "}

                </p>
                <div className="flex items-center mt-4 text-white cursor-pointer hover:text-gray-200 hover:underline">
                  <Link href={`/blogs/${featuredBlogs[4].id}`}>

                    <p className="pr-2 text-sm font-medium leading-none">
                      Read More
                    </p>
                    <svg
                      className="fill-stroke"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 12.5L10.25 8L5.75 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <Image
              height={500}
              width={500}
              src={featuredBlogs[4].images[0] || "https://via.placeholder.com/500x500"}
              className="w-full"
              alt="chair"
            />
          </div>
          {featuredBlogs[5] && (
            <div className="relative mt-4 w-full sm:mt-0">
              <div>
                <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                  {featuredBlogs[5]?.date instanceof Date ? featuredBlogs[5]?.date.toLocaleDateString() : featuredBlogs[5]?.date}
                </p>
                <div className="absolute bottom-0 left-0 p-6">
                  <h2 className="text-xl font-semibold text-white">
                    {featuredBlogs[5]?.title || "Blog Title "}
                  </h2>
                  <p className="mt-2 text-base leading-4 text-white">
                    {featuredBlogs[5]?.sub_title || "Blog Subtitle "}
                  </p>
                  <div className="flex items-center mt-4 text-white cursor-pointer hover:text-gray-200 hover:underline">
                    <Link href={`/blogs/${featuredBlogs[5]?.id}`}>
                      <p className="pr-2 text-sm font-medium leading-none">
                        Read More
                      </p>
                      <svg
                        className="fill-stroke"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.75 12.5L10.25 8L5.75 3.5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
          {featuredBlogs[5] && (<Image
            height={500}
            width={500}
            src={featuredBlogs[5].images[0] || "https://via.placeholder.com/500x500"}
            className="w-full"
            alt="chair"
          />
          )}
        </div>
      </div>
    </div></div>
  )
}
