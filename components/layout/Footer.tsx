import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { ReactElement } from "react";
import Link from 'next/link';
function Footer(): ReactElement {
  return (
    <footer className="relative pt-8 pb-6 mt-10 bg-blue-500">
      <div
        className="overflow-hidden absolute top-0 right-0 left-0 bottom-auto -mt-20 w-full pointer-events-none"
        style={{ height: "80px" }}
      >
        <svg
          className="overflow-hidden absolute bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container px-4 mx-auto text-white">
        <div className="flex flex-wrap">
          <div className="px-4 w-full lg:w-6/12">
            <h4 className="text-3xl font-semibold">Let`s keep in touch!</h4>
            <h5 className="mt-0 mb-2 text-lg text-gray-800">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="flex my-4">
              <a
                href="http://www.cybershoptech.com/facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex justify-center items-center p-3 mr-2 w-10 h-10 font-normal text-blue-400 bg-white rounded-full shadow-lg outline-none focus:outline-none">
                  <div className="flex justify-center items-center">
                    <Facebook />
                  </div>
                </button>
              </a>
              <a
                href="http://www.cybershoptech.com/instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex justify-center items-center p-3 mr-2 w-10 h-10 font-normal text-blue-400 bg-white rounded-full shadow-lg outline-none focus:outline-none">
                  <div className="flex justify-center items-center">
                    <Instagram />
                  </div>
                </button>
              </a>
              <a
                href="http://www.cybershoptech.com/linked-in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex justify-center items-center p-3 mr-2 w-10 h-10 font-normal text-blue-400 bg-white rounded-full shadow-lg outline-none focus:outline-none">
                  <div className="flex justify-center items-center">
                    <Linkedin />
                  </div>
                </button>
              </a>
              <a
                href="http://www.cybershoptech.com/github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex justify-center items-center p-3 mr-2 w-10 h-10 font-normal text-blue-400 bg-white rounded-full shadow-lg outline-none focus:outline-none">
                  <div className="flex justify-center items-center">
                    <Github />
                  </div>
                </button>
              </a>
            </div>
          </div>
          <div className="px-4 w-full lg:w-6/12">
            <div className="flex flex-wrap mb-6 items-top">
              <div className="px-4 ml-auto w-full lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-white uppercase">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="/#about-us"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="/blogs"
                    >
                      Blog
                    </Link>
                  </li>
                
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href=" /hire-a-developer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hire A Developer
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="/full-stack-dev-application"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply To Become A Developer
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 w-full lg:w-4/12">
                <span className="block mb-2 text-sm font-semibold text-white uppercase">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="/freebees"
                    >
                      This Months Freebees
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="/mit-license"
                    >
                      MIT License
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="/terms-conditions"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="/privacy-policy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
                      href="/contact-us"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap justify-center items-center md:justify-between">
          <div className="px-4 mx-auto w-full text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-gray-600">
              Copyright © {new Date().getFullYear()} CyberOni LLC{" "}
              <a
                href="https://cybershoptech.com/linked-in"
                className="text-gray-600 hover:text-gray-900"
              >
                Software Solutions
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
