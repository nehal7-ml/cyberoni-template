import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Facebook,
  MightyNetworks,
  LinkedIn,
} from "@/components/shared/icons";

type Variants = {
  [key: string]: {
    opacity: number;
    y: number;
    transition?: { duration: number };
  };
};

export default function SocialMediaLinks({ variants_prop }: { variants_prop: Variants }) {
  return (
    <div className="flex ">
      <motion.a
        variants={variants_prop}
        href="https://twitter.com/steventey/status/1613928948915920896"
        target="_blank"
        rel="noreferrer"
        className="flex-item mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
      >
        <LinkedIn className="h-5 w-5 text-[#1d9bf0]" />
        <p className="text-sm font-semibold text-[#1d9bf0]">Our LinkedIn</p>
      </motion.a>
      <motion.a
        variants={variants_prop}
        href="https://twitter.com/steventey/status/1613928948915920896"
        target="_blank"
        rel="noreferrer"
        className="flex-item mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
      >
        <MightyNetworks className="h-5 w-5 text-[#fda500]" />
        <p className="text-sm font-semibold text-[#00000]"></p>
      </motion.a>
      <motion.a
        variants={variants_prop}
        href="https://twitter.com/steventey/status/1613928948915920896"
        target="_blank"
        rel="noreferrer"
        className=" flex-item mx-auto mb-5 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
      >
        <Facebook className="h-5 w-5 text-[#1d9bf0]" />
        <p className="text-sm font-semibold text-[#1d9bf0]">Our Facebook</p>
      </motion.a>
    </div>
  );
}
