import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface Props {
  children: ReactNode;
}

const HeavyWaves: React.FC<Props> = ({ children }) => {
  

  const GradientWave: React.FC<{ className: string }> = ({ className }) => (
    <svg
      className={className}
      preserveAspectRatio="none"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <defs>
        <linearGradient id="liquidFill" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3B82F6" }} />
          <stop
            offset="50%"
            style={{ stopColor: "#3B82F6", stopOpacity: 0.5 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: "#3B82F6", stopOpacity: 0 }}
          />
        </linearGradient>
      </defs>
      <path
        d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,106.7C672,107,768,149,864,165.3C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        fill="url(#liquidFill)"
      ></path>
    </svg>
  );
  return (
    <div className="flex  w-full flex-col justify-center  bg-white pb-3">
      <GradientWave className="fill-blue-500" />
      <div className="bg-primary-600 h-100 z-[1] flex w-full flex-col items-center justify-center">
        {children}
      </div>
      <GradientWave className="z-[0] rotate-180 fill-blue-500" />
    </div>
  );
};

export default HeavyWaves;
