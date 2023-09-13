import { FADE_IN_ANIMATION_SETTINGS } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import useScroll from "@/lib/hooks/use-scroll";
import Meta from "./meta";
import UserDropdown from "./user-dropdown";
import Navbar from '@/components/layout/Navbar'
import { MyContext } from "@/context/brains";
import { useContext } from "react";
import Footer from "@/components/layout/Footer"
export default function Layout({
  meta,
  children,
}: {
  meta?: {
    title?: string;
    description?: string;
    image?: string;
  };
  children: ReactNode;
}) {
  const scrolled = useScroll(50);
  const brains = useContext(MyContext);

  // console.log(brains,"index.tsx")

  return (
    <>
      <Meta {...meta} />
      <div className="fixed z-40 bg-gradient-to-br from-indigo-50 via-white" />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 backdrop-blur-xl bg-white/50"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <Navbar />
        
      </div>
      <main className="flex flex-col justify-center items-center w-full sm:py-0">
        
        {children}
      </main>
      <Footer/>
    </>
  );
}
