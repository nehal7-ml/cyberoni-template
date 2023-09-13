import { MyContext } from "@/context/brains";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';
import { ReactElement, useContext, useState } from "react";
import { Facebook, Linkedin, AlignRight, AlignCenter, LucideMailQuestion, NewspaperIcon, Contact, Building2, LucideSeparatorVertical, LogOut, LogInIcon } from "lucide-react";
import UserDropdown from "./user-dropdown";
interface Props {
  transparent?: boolean
}
const useBrains = () => {
  const brains = useContext(MyContext);
  console.log("BrainsContext", brains);
  const brainKeys = Object.keys(brains);
  const brainsLoaded = brains.isLoaded;
  const brainsMobile = brains.isMobileState;
  const brainsSiteOwner = brains.siteOwner;

  return { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner };
};
function Navbar(props: Props): ReactElement {
  const { user, error, isLoading } = useUser();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner } =
    useBrains();

  console.log("users: ", user);
  return (
    <nav
      className={
        (props.transparent
          ? "absolute top-0 z-50 w-full"
          : "relative bg-white shadow-lg") +

        " flex flex-wrap items-center justify-between rounded-b bg-gradient-to-r from-cyan-500 from-indigo-500 to-blue-500 to-transparent px-2 py-3"
      }
    >
      <div className="container flex flex-wrap justify-between items-center px-4 mx-auto">
        <div className="flex relative justify-between w-full lg:static lg:block lg:w-auto lg:justify-start">
          <Link href="/" className="flex items-center text-2xl font-display">
            <motion.div>
              <Image
                src={brainsSiteOwner.images.logo?.links.url || "/logo"}
                alt="CyberOni logo"
                width="30"
                height="30"
                className="mr-2 rounded-sm animate-bounce"
              ></Image>
            </motion.div>
            <p className="subpixel-antialiased text-white">
              {brainsSiteOwner.business_information?.business_alias}
            </p>
          </Link>
          <button
            className="block px-3 py-1 text-xl leading-none bg-transparent rounded border border-transparent border-solid cursor-pointer outline-none focus:outline-none lg:hidden"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen
              ? <AlignCenter className="focus:animate-ping" />
              : <AlignRight />
            }
          </button>
        </div>
        <div
          className={
            `flex flex-grow flex-col items-center bg-white ${navbarOpen ? " block shadow-lg" : " hidden"} lg:flex md:lg:flex-none md:lg:flex-row lg:bg-transparent lg:shadow-none `
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col justify-center items-center list-none lg:flex-row">
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600") +
                  " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                }
                href="/#about-us"
              >
                {brainsMobile && <LucideMailQuestion />}
                About Us
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600") +
                  " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                }
                href="/contact-us"
              >
                {brainsMobile && <Contact />}
                Contact Us
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600") +
                  " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                }
                href="/services"
              >
                {brainsMobile && <Building2 />}
                Services
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600") +
                  " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                }
                href="/products"
              >
                {brainsMobile && <LucideSeparatorVertical />}
                Shop 🔜
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={
                  (props.transparent
                    ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600") +
                  " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                }
                href="/blogs"
              >
                {brainsMobile && <NewspaperIcon />}
                Blogs
              </Link>
            </li>

            {
              !user ? (<> <li className="flex items-center">
                <Link
                  className={
                    (props.transparent
                      ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                      : "text-gray-800 hover:text-gray-600") +
                    " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                  }
                  href="/api/auth/login"
                >
                  {brainsMobile && <LogInIcon />}
                  Login/SignUp
                </Link>
              </li></>) : (<> <li className="flex items-center">
                <UserDropdown />
              </li></>)
            }


          </ul>
          <ul className="flex flex-col justify-center items-center list-none lg:flex-row">


            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600") +
                  " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                }
                href="https://www.cybershoptech.com/facebook"
              >
                <i
                  className={
                    (props.transparent
                      ? "text-gray-500 lg:text-gray-300"
                      : "text-gray-500") +
                    " fab fa-twitter leading-lg text-lg "
                  }
                />
                {brainsMobile && <Facebook />}
                <span className="inline-block ml-2 lg:hidden">Facebook</span>
              </a>
            </li>

            <li className="flex items-center">
              <a
                className={
                  (props.transparent
                    ? "text-gray-800 lg:text-white lg:hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600") +
                  " flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                }
                href="https://www.cybershoptech.com/linked-in"
              >

                <i
                  className={
                    (props.transparent
                      ? "text-gray-500 lg:text-gray-300"
                      : "text-gray-500") +
                    " fab fa-github leading-lg text-lg "
                  }
                />
                {brainsMobile && <Linkedin />}
                <span className="inline-block ml-2 lg:hidden">Linked-In</span>
              </a>
            </li>

            <li className="flex items-center lg:ml-auto sm:mx-auto">
              <button
                className={
                  (props.transparent
                    ? "bg-white text-gray-800 active:bg-gray-100"
                    : "bg-cyan-500 text-white hover:bg-cyan-600 active:bg-pink-600") +
                  " ml-3 mb-3 rounded px-4 py-2 text-xs font-bold uppercase shadow outline-none ring ring-blue-300 hover:shadow-md hover:ring-purple-500 focus:outline-none lg:mr-1 lg:mb-0"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <a href="https://calendly.com/oni_development/15min" target="_blank" rel="noreferrer">
                  <i className="fas fa-arrow-alt-circle-down"></i> Free Quote
                </a>

              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
