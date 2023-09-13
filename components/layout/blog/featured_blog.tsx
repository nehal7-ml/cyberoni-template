import Image from "next/image";
import Link from "next/link";
import { blog as BlogType } from "@/data/sample_data/sample_blog";



interface FeaturedBlogProps {
    blog: BlogType;
}
export const FeaturedBlog = ({ blog }: FeaturedBlogProps) => {
    return (
        <div key={blog.id} className="relative mt-4 sm:mt-0 sm:w-1/2">
            <div>
                {blog.date instanceof Date ? (
                    <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                        {blog.date.toLocaleDateString()}
                    </p>
                ) : (
                    <p className="absolute top-0 right-0 p-6 text-xs font-medium leading-3 text-white">
                        {blog.date}
                    </p>
                )}
                <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold text-white 5">
                        {blog.title || "Blog Title"}
                    </h2>
                    <p className="mt-2 text-base leading-4 text-white">
                        {blog.sub_title || "Blog Subtitle"}
                    </p>
                    <div className="flex items-center mt-4 text-white cursor-pointer hover:text-gray-200 hover:underline">
                        <Link href={`/blogs/${blog.id}`}>
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
                src={blog.images[0] || "https://via.placeholder.com/500x500"}
                className="w-full"
                alt="wall design"
            />
        </div>
    );
};
