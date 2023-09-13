
import {
  Product,
  productType,
  productArrType,
  ScoredProducts,
} from '@/data/sample_data/sample_products';
import { blog as Blog } from '@/data/sample_data/sample_blog';
 import { Service } from '@/data/sample_data/sample_services';
function tokenize(description: string): string[] {
  // Implementation will depend on your specific requirements.
  // For example, you might want to convert the description to lower case, split by spaces, and remove punctuation.
  return description.toLowerCase().split(' ');
}

function commonElements(arr1: string[], arr2: string[]): number {
  return arr1.filter((value) => arr2.includes(value)).length;
}

export function scoreBlog(service: Service, blog: Blog): number {
  const serviceKeywords = tokenize(service.preview.content);
  const blogKeywords = tokenize(blog.description);

  // The score is the number of common keywords
  return commonElements(serviceKeywords, blogKeywords);
}

export function scoreProduct(service: Service, product: Product): number {
  const serviceKeywords = tokenize(service.preview.content);
  const productKeywords = tokenize(product.description);

  // The score is the number of common keywords
  return commonElements(serviceKeywords, productKeywords);
}

export function findBestBlogsForService(
  service: Service,
  allBlogs: Blog[],
  limit: number = 5
): Blog[] {
  // Score all blogs
  let scoredBlogs = allBlogs.map((blog) => ({
    blog,
    score: scoreBlog(service, blog),
  }));

  // Sort blogs by score in descending order
  scoredBlogs.sort((a, b) => b.score - a.score);

  // Return the top "limit" blogs
  return scoredBlogs.slice(0, limit).map((item) => item.blog);
}

export function findBestProductsForService(
  service: Service,
  allProducts: Product[],
  limit: number = 5
): Product[] {
  // Score all products
  let scoredProducts = allProducts.map((product) => ({
    product,
    score: scoreProduct(service, product),
  }));

  // Sort products by score in descending order
  scoredProducts.sort((a, b) => b.score - a.score);

  // Return the top "limit" products
  return scoredProducts.slice(0, limit).map((item) => item.product);
}
