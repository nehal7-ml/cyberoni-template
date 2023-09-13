import { Product, sample_data as sd, productType } from "./sample_data/sample_products";

function searchProductsByName(query: string): Product[] {
  const results: Product[] = [];

  for (const productId in sd) {
    const product = sd[productId];

    if (product.name.toLowerCase().includes(query.toLowerCase())) {
      results.push(product);
    }
  }

  return results;
}

function searchProductsByDescription(query: string): Product[] {
  return Object.values(sd).filter((product) =>
    product.description.includes(query),
  );
}

function searchProductsByTags(tags: string[]): Product[] {
  return Object.values(sd).filter((product) =>
    tags.every((tag) => product.tags.includes(tag)),
  );
}

function searchProductsBySomeTags(
  products: productType,
  tags: string[],
): Product[] {
  return Object.values(products).filter((product) => {
    return tags.some((tag) => product.tags.includes(tag));
  });
}
