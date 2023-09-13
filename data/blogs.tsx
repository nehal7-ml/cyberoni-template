 import React from "react";
import { sample_data as blog_data,blog } from './sample_data/sample_blog';
let r = React


// export function splitIntoParagraphs(text: string): string[] {
//   return text.split("\n\n");
// }
// export const blogsWithParagraphs = blog_data.map((blog) => {
//   return {
//     ...blog,
//     paragraphs: splitIntoParagraphs(blog.content),
//   };
// });


export const getBlogById = (id: number): blog | undefined => {
  return blog_data.find((blog) => blog.id === id);
};

export const getBlogByTitle = (title: string): blog | undefined => {
  // Replace dashes with spaces and convert to lower case
  const formattedTitle = title.replace(/-/g, ' ').toLowerCase();

  return blog_data.find((blog) => blog.title.toLowerCase() === formattedTitle);
}; 


export function createBlogLink(blog: blog) {
  let title = blog.title;

  // To lowercase
  title = title.toLowerCase();

  // Replace spaces with dashes
  title = title.replace(/\s+/g, '-');

 

  return `/blogs/${title}`;
}