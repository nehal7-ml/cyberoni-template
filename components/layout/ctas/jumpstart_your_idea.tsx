import React from "react";

export type FeatureSectionProps = {
  backgroundImage: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonUrl: string;
};

const FeatureSection: React.FC<FeatureSectionProps> = ({
  backgroundImage,
  title,
  description,
  buttonLabel,
  buttonUrl,
}) => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 lg:flex lg:justify-center lg:py-12">
      <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:w-full lg:max-w-6xl lg:rounded-xl lg:shadow-md">
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
        </div>

        <div className="px-6 py-12 max-w-xl lg:w-1/2 lg:max-w-5xl">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            {title}
          </h2>

          <p className="mt-4 text-gray-500 dark:text-gray-300">{description}</p>

          <div className="inline-flex mt-6 w-full sm:w-auto">
            <a
              href={buttonUrl}
              className="inline-flex justify-center items-center px-6 py-2 w-full text-sm text-white bg-gray-800 rounded-lg duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              {buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
