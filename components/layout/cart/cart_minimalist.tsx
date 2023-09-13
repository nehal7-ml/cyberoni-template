import React from "react";
import Image from "next/image";

type CheckoutHandler = (value: boolean) => void;

type Props = {
  checkoutHandler: CheckoutHandler;
};
const handleClick = () => {
  console.log("Button clicked!");
};
export const CheckOutHome: React.FC<Props> = ({ checkoutHandler }) => {
  return (
    <>
      <div
        className="sticky-0 fixed top-0 h-full w-full overflow-y-auto overflow-x-hidden bg-black bg-opacity-90 dark:bg-gray-900"
        id="chec-div"
      >
        <div
          className="absolute right-0 z-10 h-full w-full translate-x-0 transform overflow-x-hidden transition duration-700 ease-in-out"
          id="checkout"
        >
          <div
            className="flex flex-col items-end justify-end lg:flex-row"
            id="cart"
          >
            <div
              className="h-auto w-full overflow-x-hidden overflow-y-hidden bg-white px-4 py-4 dark:bg-gray-800 md:w-8/12 md:px-6 md:py-8 lg:h-screen lg:w-1/2 lg:px-8 lg:py-14"
              id="scroll"
            >
              <div
                className="flex cursor-pointer items-center text-gray-500 hover:text-gray-600 dark:text-white"
                onClick={handleClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
                <p className="pl-2 text-sm leading-none dark:hover:text-gray-200">
                  Back
                </p>
              </div>
              <p className="pt-3 text-3xl font-black leading-10 text-gray-800 dark:text-white lg:text-4xl">
                Bag
              </p>
              <div className="items-strech border-t border-gray-50 py-8 md:flex md:py-10 lg:py-8">
                <div className="w-full md:w-4/12 2xl:w-1/4">
                  <Image
                    src="https://i.ibb.co/SX762kX/Rectangle-36-1.png"
                    alt="Black Leather Bag"
                    className="hidden h-full object-cover object-center md:block"
                  />
                  <Image
                    src="https://i.ibb.co/g9xsdCM/Rectangle-37.pngg"
                    alt="Black Leather Bag"
                    className="h-full w-full object-cover object-center md:hidden"
                  />
                </div>
                <div className="flex flex-col justify-center md:w-8/12 md:pl-3 2xl:w-3/4">
                  <p className="pt-4 text-xs leading-3 text-gray-800 dark:text-white md:pt-0">
                    RF293
                  </p>
                  <div className="flex w-full items-center justify-between pt-1">
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                      North wolf bag
                    </p>
                    <select
                      aria-label="Select quantity"
                      className="mr-6 border border-gray-200 py-2 px-1 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p className="pt-2 text-xs leading-3 text-gray-600 dark:text-white">
                    Height: 10 inches
                  </p>
                  <p className="py-4 text-xs leading-3 text-gray-600 dark:text-white">
                    Color: Black
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="itemms-center flex">
                      <p className="cursor-pointer text-xs leading-3 text-gray-800 underline dark:text-white">
                        Add to favorites
                      </p>
                      <p className="cursor-pointer pl-5 text-xs leading-3 text-red-500 underline">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                      ,000
                    </p>
                  </div>
                </div>
              </div>
              <div className="items-strech border-t border-gray-50 py-8 md:flex md:py-10 lg:py-8">
                <div className="w-full md:w-4/12 2xl:w-1/4">
                  <Image
                    src="https://i.ibb.co/c6KyDXN/Rectangle-5-1.png"
                    alt="Gray Sneakers"
                    className="hidden h-full object-cover object-center md:block"
                  />
                  <Image
                    src="https://i.ibb.co/yVSpYqx/Rectangle-6.png"
                    alt="Gray Sneakers"
                    className="h-full w-full object-cover object-center md:hidden"
                  />
                </div>
                <div className="flex flex-col justify-center md:w-8/12 md:pl-3 2xl:w-3/4">
                  <p className="pt-4 text-xs leading-3 text-gray-800 dark:text-white md:pt-0">
                    RF293
                  </p>
                  <div className="flex w-full items-center justify-between pt-1">
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                      LW sneakers
                    </p>
                    <select
                      aria-label="Select quantity"
                      className="mr-6 border border-gray-200 py-2 px-1 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p className="pt-2 text-xs leading-3 text-gray-600 dark:text-white">
                    Height: 10 inches
                  </p>
                  <p className="py-4 text-xs leading-3 text-gray-600 dark:text-white">
                    Color: Black
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="itemms-center flex">
                      <p className="cursor-pointer text-xs leading-3 text-gray-800 underline dark:text-white">
                        Add to favorites
                      </p>
                      <p className="cursor-pointer pl-5 text-xs leading-3 text-red-500 underline">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                      ,000
                    </p>
                  </div>
                </div>
              </div>
              <div className="items-strech border-t border-gray-50 py-8 md:flex md:py-10 lg:py-8">
                <div className="w-full md:w-4/12 2xl:w-1/4">
                  <Image
                    src="https://i.ibb.co/6gzWwSq/Rectangle-20-1.png"
                    alt="Black Leather Purse"
                    className="hidden h-full object-cover object-center md:block"
                  />
                  <Image
                    src="https://i.ibb.co/TTnzMTf/Rectangle-21.png"
                    alt="Black Leather Purse"
                    className="h-full w-full object-cover object-center md:hidden"
                  />
                </div>
                <div className="flex flex-col justify-center md:w-8/12 md:pl-3 2xl:w-3/4">
                  <p className="pt-4 text-xs leading-3 text-gray-800 dark:text-white md:pt-0">
                    RF293
                  </p>
                  <div className="flex w-full items-center justify-between">
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                      Luxe card holder
                    </p>
                    <select
                      aria-label="Select quantity"
                      className="mr-6 border border-gray-200 py-2 px-1 focus:outline-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                    >
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                  <p className="pt-2 text-xs leading-3 text-gray-600 dark:text-white">
                    Height: 10 inches
                  </p>
                  <p className="py-4 text-xs leading-3 text-gray-600 dark:text-white">
                    Color: Black
                  </p>
                  <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">
                    Composition: 100% calf leather
                  </p>
                  <div className="flex items-center justify-between pt-5">
                    <div className="itemms-center flex">
                      <p className="cursor-pointer text-xs leading-3 text-gray-800 underline dark:text-white">
                        Add to favorites
                      </p>
                      <p className="cursor-pointer pl-5 text-xs leading-3 text-red-500 underline">
                        Remove
                      </p>
                    </div>
                    <p className="text-base font-black leading-none text-gray-800 dark:text-white">
                      ,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-full bg-gray-100 dark:bg-gray-900 md:w-8/12 lg:w-96">
              <div className="flex h-auto flex-col justify-between overflow-y-auto px-4 py-6 md:px-7 md:py-10 lg:h-screen lg:px-8 lg:py-20">
                <div>
                  <p className="text-3xl font-black leading-9 text-gray-800 dark:text-white lg:text-4xl">
                    Summary
                  </p>
                  <div className="flex items-center justify-between pt-16">
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      Subtotal
                    </p>
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      ,000
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      Shipping
                    </p>
                    <p className="text-base leading-none text-gray-800 dark:text-white"></p>
                  </div>
                  <div className="flex items-center justify-between pt-5">
                    <p className="text-base leading-none text-gray-800 dark:text-white">
                      Tax
                    </p>
                    <p className="text-base leading-none text-gray-800 dark:text-white"></p>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between pb-6 pt-20 lg:pt-5">
                    <p className="text-2xl leading-normal text-gray-800 dark:text-white">
                      Total
                    </p>
                    <p className="text-right text-2xl font-bold leading-normal text-gray-800 dark:text-white">
                      ,240
                    </p>
                  </div>
                  <button
                    onClick={handleClick}
                    className="w-full border border-gray-800 bg-gray-800 py-5 text-base leading-none text-white focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 dark:hover:bg-gray-700"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
