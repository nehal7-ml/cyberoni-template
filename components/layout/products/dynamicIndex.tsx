import { Product } from '@/data/sample_data/sample_products';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Pagination } from '../Pagination';
type Props = {
  products: Product[] | undefined;
};

const ProductList = ({ products }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [shownProducts, setShownProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(12);

  useEffect(() => {
    if (products) {
      setShownProducts(products.slice(0, productsPerPage));
    }
  }, [products, productsPerPage]);

  const categories = [
    ...(new Set(products?.map((product) => product.category)) || []),
  ];

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = shownProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const filterProductsByCategory = (category: string): Product[] => {
    const tempProducts = products?.filter(
      (product) => product.category === category
    );
    if (tempProducts) {
      setShownProducts(tempProducts.slice(0, productsPerPage));
      setCurrentPage(1);
    }
    return tempProducts || [];
  };

  const handleFilterClick = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    filterProductsByCategory(category);
  };

  return (
    <>
      <div>
        {/* Title */}
        <div className="bg-white pt-32">
          <h1 className="text-center text-2xl font-bold text-gray-800">
            All Products
          </h1>
        </div>

        {/* Tab Menu */}
        <div className="flex flex-wrap items-center justify-center overflow-x-auto overflow-y-hidden bg-white py-10 text-gray-800">
          {categories.map((category) => (
            <button
              key={category}
              className={`flex flex-shrink-0 items-center space-x-2 rounded-lg px-5 py-3 ${
                category === selectedCategory
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600'
              }`}
              onClick={() => handleFilterClick(category)}
            >
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Product List */}
        <section className="bg-gray-100 py-10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentProducts.map((product: Product) => (
              <div
                key={product.id}
                className="flex-shrink-0 rounded-xl bg-white p-3 shadow-lg duration-300 hover:scale-105 hover:transform hover:shadow-xl"
              >
                <Link href={`/products/${product.id}`}>
                  <div className="flex overflow-hidden rounded-xl">
                    <Image
                      width={500}
                      height={500}
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                    />
                  </div>
                  <div className="mt-5 flex flex-col items-center space-y-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M6 3h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Add to cart</span>
                  </div>
                  <div className="flex flex-grow flex-col">
                    <h2 className="mt-3 text-lg font-bold text-gray-800">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      {product.description.length > 300
                        ? product.description.substring(0, 300) + '...'
                        : product.description}
                    </p>
                    <p className="mt-2 text-xl font-bold text-gray-800">
                      ${product.price}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Pagination */}

        <Pagination
          postsPerPage={productsPerPage}
          totalPosts={products!.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default ProductList;
