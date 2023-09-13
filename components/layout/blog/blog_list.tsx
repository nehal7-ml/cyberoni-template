import { blog, blogType } from '@/data/sample_data/sample_blog';
import { useState, useEffect } from 'react';
import { Pagination } from '../Pagination';
import SearchBar from '../SearchBar';
import { CollectionSlogans } from '@/data/sample_dynamic_data/slogans';
import TagList from '../FilterButtons';
import BlogContent from './blog_content_1';
import Link from 'next/link';
import Image from 'next/image';
import { createBlogLink } from '@/data/blogs'


export const BlogList = ({ blogs, slogans }: { blogs: blogType, slogans: CollectionSlogans }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    const [dynamicBlogs, setBlogs] = useState<blogType>(blogs);

    const [showTags, setShowTags] = useState(false);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = dynamicBlogs.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const blog_tags = blogs
        .map((item) => item.tags)
        .reduce((acc, curr) => {
            curr.forEach((tag) => {
                if (!acc.includes(tag)) {
                    acc.push(tag);
                }
            });
            return acc;
        }, []);


    function clear_blogs() {
        setBlogs(blogs)
    }
    function searchBlogsByKeyword(keyword: string): blogType {
        const filteredBlogs = blogs.filter(blog => {
            let combinedContent = '';
            blog.content.forEach(paragraph => {
                combinedContent += paragraph.content + ' ';
            });

            const lowerCaseContent = combinedContent.toLowerCase(); const lowerCaseTitle = blog.title.toLowerCase();
            const lowerCaseKeyword = keyword.toLowerCase();

            return lowerCaseContent.includes(lowerCaseKeyword) || lowerCaseTitle.includes(lowerCaseKeyword);
        });

        console.log(filteredBlogs);
        setBlogs(filteredBlogs)
        return filteredBlogs;
    }

    function filterBlogsByTag(tag: string): blogType {
        const filtered_data = blogs.filter(blog => blog.tags.includes(tag))
        setBlogs(filtered_data)
        return filtered_data;
    }


    useEffect(() => {


    },
        //eslint-disable-next-line
        [dynamicBlogs]);

    return (
        <section className="mt-8 bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                        {slogans.blogs?.title}
                    </h1>


                    <p className="mx-auto mt-4 max-w-lg text-gray-500">
                        {slogans.blogs?.subtitle}
                    </p>
                </div>
                <div className='text-center'>
                    <SearchBar setShowTags={setShowTags} onClear={clear_blogs} onSubmit={searchBlogsByKeyword} placeholder='Search Blogs' />
                    <TagList show={true} tags={blog_tags} filterByTag={filterBlogsByTag} clearState={clear_blogs} />
                </div>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
                    {currentPosts.map((blog: blog, index: number) => (
                        <div key={index}>
                            <div className="relative">
                                <Image
                                    className="object-cover object-center h-64 rounded-lg w-90 lg:h-80"
                                    src={blog.images[0]}
                                    width={500}
                                    height={500}
                                    alt=""
                                />

                                <div className="flex absolute bottom-0 p-3 bg-white dark:bg-gray-900">
                                    <Image
                                        className="object-cover object-center w-10 h-10 rounded-full"
                                        src={""}
                                        alt=""
                                        width={10}
                                        height={10}
                                    />

                                    <div className="mx-4">
                                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{blog.author.name}</h1>
                                    </div>
                                </div>
                            </div>

                            <h1 className="mt-6 text-xl font-semibold text-gray-800 dark:text-white">{blog.title}</h1>

                            <hr className="my-6 w-32 text-blue-500" />

                            <p className="text-sm text-gray-500 dark:text-gray-400">{blog.description}...</p>

                            <Link href={createBlogLink(blog)} className="inline-block mt-4 text-blue-500 underline hover:text-blue-400">
                                Read more
                            </Link>
                        </div>
                    ))}
                </div>
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={blogs.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </section>
    )
}
