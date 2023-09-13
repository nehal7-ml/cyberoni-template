import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { getReviewById } from "../../../data/reviews";
import {
  Review,
  reviewsType,
  sample_data as reviews_sd,
} from "../../../data/sample_data/sample_reviews";

type Props = {
  data: reviewsType;
};

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState<Review>();
  const [index, setIndex] = useState(0);
  const [isLoaded, setLoaded] = useState(false);


  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setIndex((prevIndex) =>
        prevIndex === reviews_sd.reviews.length - 1 ? 0 : prevIndex + 1
      ),
    onSwipedRight: () =>
      setIndex((prevIndex) =>
        prevIndex === 0 ? reviews_sd.reviews.length - 1 : prevIndex - 1
      ),
  });

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === reviews_sd.reviews.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? reviews_sd.reviews.length - 1 : prevIndex - 1,
    );
  };

  const imageUrl = currentReview?.image ? currentReview.image : "";

  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1: number, e2: number, e3: number) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (r: number, g: number, b: number) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

  useEffect(() => {
    const image = new window.Image();
    image.src = imageUrl;
    image.onload = (): void => setLoaded(true);
    try {
      const newReview = getReviewById(index);
      console.log("newService");
      if (newReview) {
        setCurrentReview(newReview);
      } else {
        alert("No Service Found");
      }
    } catch (error) {
      console.error("Error occurred while retrieving the service:", error);
      alert("Error occurred while retrieving the service.");
    }
    console.log("currentReview", currentReview);
  }, [currentReview, imageUrl, index]);


  const placeholder = (
    <Image
      className="rounded-full object-cover shadow-md md:mx-6 md:h-[32rem] md:w-80 md:rounded-2xl lg:h-[36rem] lg:w-[26rem]"
      src={rgbDataURL(237, 181, 6)}
      alt={`${currentReview?.name} placeholder`}
      height="1920"
      width="1080"
    // {...props}
    />
  );

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="px-6 py-10 mx-auto max-w-6xl" {...handlers}>
        <p className="text-xl font-medium text-blue-500">Testimonials</p>
        <a
          className="text-sm text-blue-800 hover:underline"
          target="_blank"
          rel="noreferrer"
          href="https://l.facebook.com/l.php?u=https%3A%2F%2Fg.page%2Fr%2FCaYwoyoPFmKuEAI%2Freview%3Ffbclid%3DIwAR1gLtQ8WSeGYamInmkb8XBKQ7GAVUWhqOdFrfMO_zDfTg9cmb7zwmaMthI&h=AT1Hobb7Ige2zJqm4FV6YES_F_zQf_yg5r0hhuLWVSOTDHvERVdV8XRRMcmjd_W7BzNEEqu10oLkrn2pbjvf0KnKl8Qch_YkgRR6HcCjBbNXfgEQaB4VguMh7jk4pSCVwzkubA"
        >
          {" "}
          Leave a review
        </a>

        <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
          What our clients are saying?
        </h1>
        <main className="relative z-20 mt-8 w-full md:flex md:items-center xl:mt-12">
          <div className="absolute w-full bg-blue-600 rounded-2xl lg:h-5/5 -z-10 sm:h-4/5 md:h-4/5"></div>

          <div className="p-6 w-full bg-blue-600 rounded-2xl md:flex md:items-center md:justify-evenly md:bg-transparent md:p-0 lg:px-12">
            {isLoaded ?<Image
              className=" rounded-full object-cover shadow-md md:mx-6 md:h-[32rem] md:w-80 md:rounded-2xl lg:h-[36rem] lg:w-[26rem]"
              src={imageUrl}
              alt={`${currentReview?.name}'s photo`}
              height="1920"
              width="1080"
              blurDataURL={rgbDataURL(237, 181, 6)}
              priority
            /> : placeholder
}
            <div className="mt-2 md:mx-6 lg:m-5">
              <div>
                <p className="text-xl font-medium tracking-tight text-white">
                  {currentReview?.name}
                </p>
                <p className="text-blue-200">{currentReview?.title}</p>
              </div>

              <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                {currentReview?.content}
              </p>

              <div className="flex justify-between items-center mt-6 md:justify-start">
                <button
                  title="left arrow"
                  className="p-2 text-white rounded-full border transition-colors duration-300 hover:bg-blue-400 rtl:-scale-x-100"
                  onClick={handlePrev}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  title="right arrow"
                  className="p-2 text-white rounded-full border transition-colors duration-300 hover:bg-blue-400 rtl:-scale-x-100 md:mx-6"
                  onClick={handleNext}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </main>

        <div className="flex justify-center mt-10">
          <div className="flex space-x-2">
            {/* {sample_data.reviews.map((review, index) => (
              <button
                key={index}
                title={`Testimonial ${index + 1}`}
                className={`rounded-full p-2 hover:bg-gray-200 ${
                  index === currentReview?.id && "bg-blue-600 text-white"
                }`}
              >
                <span className="sr-only">{`Testimonial ${index + 1}`}</span>
                <span className="sr-only">{review.name}</span>
                <Image
                  className="object-cover rounded-full shadow-md md:h-16 md:w-16 lg:h-20 lg:w-20"
                  src={review.image}
                  alt={`${review.name}'s photo`}
                  height="10"
                  width="10"
                />
              </button>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
