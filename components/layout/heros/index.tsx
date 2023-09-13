import MainCard from "@/components/shared/card";
import { SiteOwnerData } from "@/data/sample_data/sample_site_owner";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link"
import { useEffect, useState } from "react";
import YoutubePopover from "@/components/youtubepopover";
import { useBrains } from "@/context/synapse/connections";
type HeroProps = {
  siteOwner: SiteOwnerData;
};

export const Hero = ({ siteOwner }: HeroProps) => {

  const {
    brains,
    brainKeys,
    brainsLoaded,
    brainsMobile,
    brainsSiteOwner,
    brainsSetMetaTags,
  } = useBrains();
  const { scrollYProgress } = useScroll();
  const backgroundImageUrl =
    siteOwner.images &&
    siteOwner.images.homeHeader &&
    siteOwner.images.homeHeader.links &&
    siteOwner.images.homeHeader.links.url;
  //  let scrollDistance = scrollYProgress.get()
  return (
    <motion.div
      className="rounded-br-lg bg-cover bg-no-repeat"
      style={{
        minHeight: '100vh',
        maxHeight: '100vh',
        backgroundImage: `url('/main_hero.webp')`,
        // dynamicbackgroundImage: `url('${backgroundImageUrl}') `,
      }}
    >
      <div className="w-full grid grid-cols-2">
        <div className="lg:w-50 sm:w-full h-full">
          <div className="mt-72">
            <MainCard
              title={siteOwner.slogans.intro?.title}
              subtitle={siteOwner.slogans.intro?.subtitle}
              message={siteOwner.slogans.intro?.message}
              buttonTitle="Download Our Brochure (ZIP)"
              links={siteOwner.slogans.intro?.links}
              contactUsPage={siteOwner.links.contact?.links.short_url}
              width="w-full"
              height=""
            />
          </div>
          <motion.div
            animate={{
              scale: [1, 2, 2, 1, 1],
              rotate: [0, 0, 130, 130, 0],
              borderRadius: ['20%', '20%', '50%', '50%', '20%'],
            }}
            transition={{
              repeat: Infinity,

              duration: 50,

              ease: 'easeInOut',
            }}
            whileHover={{ rotate: 2 }}
            className=""
            style={{ pointerEvents: 'none' }}
          >
            <Image
              src={brainsSiteOwner.images.starAssets?.links.url!}
              alt="Star Asset"
              className=" z-0 active:animate-[ping_1s_ease-in-out]"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div
            className="liquid-star"
            style={{ scaleY: scrollYProgress, pointerEvents: 'none' }}
          >
            <Image
              src={brainsSiteOwner.images.starAssets?.links.url!}
              alt="Star Asset"
              className="z-0"
              width={200}
              height={200}
            />
          </motion.div>
          <motion.div>
            <Image
              src={brainsSiteOwner.images.starAssets?.links.url!}
              alt="Star Asset"
              className="realistic-star z-0 animate-pulse"
              width={200}
              height={200}
            />
          </motion.div>
        </div>
        <div className="lg:w-49 sm:w-full h-full">
          <motion.div
            className=" contain no-repeat justify-right bg-right-center w-49 absolute top-0 order-2 h-full  bg-[length:68em] bg-auto bg-contain  bg-center bg-right bg-no-repeat md:order-none"
            animate={{ y: 50 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              delay: 5,
              repeat: 3,
              repeatType: 'reverse',
              duration: 10,
            }}
            style={{
              backgroundImage: 'url(/brown_man_superpose.webp)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export const MobileHero = ({ siteOwner }: HeroProps) => {
  const starDimensions = 150;
  const { scrollYProgress } = useScroll();
  //  let scrollDistance = scrollYProgress.get()

  const businesses = [
    "The data-driven healthcare provider",
    "The adaptable clothing brand",
    "The data driven digital marketing agency",
    "The fitness influencer",
    "The financial services provider",
    "The non-profit organization",
    "The government agency",
    "The education institution",
    "The manufacturing company",
    "The transportation company",
    "The every day entrepreneur "
  ];

  const [textShown, setTextShown] = useState(businesses[Math.floor(Math.random() * businesses.length)]);
  useEffect(() => {
    const interval = setInterval(() => {
      setTextShown(businesses[Math.floor(Math.random() * businesses.length)]);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textShown]);

  const TypingVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

    const {
      brains,
      brainKeys,
      brainsLoaded,
      brainsMobile,
      brainsSiteOwner,
      brainsSetMetaTags,
    } = useBrains();
  return (
    <>
      {/* //Top portion of hero */}
      <motion.div
        className="h-full w-full overflow-hidden bg-no-repeat bg-cover rounded-br-lg"
        style={{
          minHeight: "100vh",
          maxHeight: "100vh",
          backgroundImage:
            "url(/mobile_splash-home.webp)",
        }}
      >
        <div className="h-full w-full">
          <div className="my-5">
            <div className="p-4 h-full">
              <motion.div
                className="contain no-repeat w-full absolute top-0  my-5 sm:my-16 left-0 p-5 h-full bg-contain  bg-center bg-no-repeat  sm:bg-left"
                animate={{ y: 50 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 5,
                  repeat: 3,
                  repeatType: "reverse",
                  duration: 10,
                }}
                style={{
                  backgroundImage:
                    "url(/brown_man_superpose.webp)",
                }}
              />
            </div>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 130, 130, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                repeat: Infinity,

                duration: 50,

                ease: "easeInOut",
              }}
              whileHover={{ rotate: 2 }}
              className="overflow-hidden"
            >
              <Image
                src={brainsSiteOwner.images.mobileBrushAsset?.links.url!}
                alt="Easel  Asset"
                className=" z-40 active:animate-[ping_1s_ease-in-out]"
                width={starDimensions}
                height={starDimensions}
              />
            </motion.div>
          </div>


          <div className="absolute flex flex-col sm:items-end bottom-0 sm:bottom-1/4 w-full text-center  ">
            <div className="relative w-full  sm:w-1/2   text-center ">
              <YoutubePopover width="100%" height="200px" youtubeUrl="https://www.youtube.com/embed/erFZvwUhK-M" />
            </div>
            <motion.div className="relative w-full sm:ml-5 sm:w-1/2 my-2 text-center">
              <h3 className="text-white mobile-hero-title">Providing Innovative Solutions For</h3>
              <motion.small
                key={textShown}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-white mobile-hero-subtitle text-stroke text-stroke-white text-stroke-1"
              >
                {textShown}
              </motion.small>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div>
        <MainCard
          title={siteOwner.slogans.intro?.title}
          subtitle={siteOwner.slogans.intro?.subtitle}
          message={siteOwner.slogans.intro?.message}
          buttonTitle="Download Our Brochure (ZIP)"
          links={siteOwner.slogans.intro?.links}
          contactUsPage={siteOwner.links.contact?.links.short_url}
          width="w-full"
          height=""
        />{" "}
      </motion.div>
    </>
  );
};
