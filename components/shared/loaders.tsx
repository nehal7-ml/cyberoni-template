import { Inter, Monoton } from "@next/font/google";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RotatingTriangles } from "react-loader-spinner";
import Image from "next/image";

interface TrianglesProps {
  font: string;
}
export const Triangles: React.FC<TrianglesProps> = ({ font }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);


  return (
    <div
      className="flex h-screen flex-col justify-center text-center "
      style={{ backgroundColor: "#27283c", height: "100vh" }}
    >
      <AnimatePresence>
        <motion.div className=" mt-auto  h-full" initial="">
          <RotatingTriangles
            visible={true}
            height="10vh"
            width="100%"
            colors={["#a609e4", "#e78d39", "#3621f1"]}
            ariaLabel="rotating-triangles-loading"
            wrapperStyle={{}}
            wrapperClass="rotating-triangles-wrapper inline-block mt-40"
          />
          <motion.div
            className={` relative text-center font-default font-splash text-blue-500 `}
          >
            <Image
              src="https://res.cloudinary.com/djao481zq/image/upload/v1681511246/CyberOni/3D%20Superform/daxgzshebtwvnhh3vtcf.png"
              className="splash-img"
              width={200}
              height={200}
              alt="smiling cyberoni bringing software to you"
            />
          </motion.div>
          <span className="font-sfPro  subpixel-antialiased">CyberOniLLC</span>
          {/* <div
            className={` relative text-center font-default font-splash text-blue-500 `}
          >
            <Image
              src="https://res.cloudinary.com/djao481zq/image/upload/v1679354026/CyberOni/ID/smile_knq8e9_1_ewjse0.png"
              className="splash-text"
              width={200}
              height={200}
              alt="smiling cyberoni bringing software to you"
            />
          </div> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
