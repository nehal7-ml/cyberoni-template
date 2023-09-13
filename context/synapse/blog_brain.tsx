import { Product,productType,productArrType,ScoredProducts } from "@/data/sample_data/sample_products";
import { blog as Blog } from "@/data/sample_data/sample_blog";
 
function tokenize(text: string): string[] {
  return text.split(' ');
}


//! Customize Scoring Systems just default for now
// New scoreProducts function
export function scoreProducts(
  blog: Blog,
  products: productArrType
): ScoredProducts {
  // Tokenize the blog description into individual words
  let blogKeywords = tokenize(blog.description);

  // Score each product and sort by score in descending order
  let scoredProducts = products.map((product) => ({
    product: product,
    score: scoreProduct(product, blogKeywords),
  }));

  scoredProducts.sort((a, b) => b.score - a.score);

  // Return the sorted array of scored products
  return scoredProducts;
}

export function scoreProduct(product: Product, keywords: string[]): number {
  let productKeywords = tokenize(product.description);
  let score = productKeywords.filter((word: string) =>
    keywords.includes(word)
  ).length;
  return score;
}

function findBestProduct(blog: Blog, products: Product[]): Product {
  let blogKeywords = tokenize(blog.description);

  let scoredProducts = products.map((product) => ({
    product: product,
    score: scoreProduct(product, blogKeywords),
  }));

  scoredProducts.sort((a, b) => b.score - a.score);

  let bestProduct = scoredProducts[0].product;

  return bestProduct;
}



function calculateSimilarity(blog1: Blog, blog2: Blog): number {
  const blog1Keywords = new Set([
    ...tokenize(blog1.title),
    ...tokenize(blog1.description),
    ...blog1.tags,
  ]);
  const blog2Keywords = new Set([
    ...tokenize(blog2.title),
    ...tokenize(blog2.description),
    ...blog2.tags,
  ]);

  const commonKeywords = new Set(
    [...blog1Keywords].filter((x) => blog2Keywords.has(x))
  );
  return commonKeywords.size / Math.max(blog1Keywords.size, blog2Keywords.size);
}

export function findSimilarBlogs(currentBlog: Blog, allBlogs: Blog[]): Blog[] {
  const similarBlogs = allBlogs
    .filter((blog) => blog.id !== currentBlog.id) // Exclude the current blog
    .map((blog) => ({
      blog,
      similarity: calculateSimilarity(currentBlog, blog),
    })) // Calculate similarity
    .sort((a, b) => b.similarity - a.similarity) // Sort by similarity descending
    .slice(0, 5) // Top 5 most similar
    .map(({ blog }) => blog); // Get the blog objects

  return similarBlogs;
}