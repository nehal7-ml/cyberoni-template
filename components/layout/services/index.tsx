import ServiceCarousel from "@/components/layout/swipeable_carousels/services_carousel";
import Tabs from "@/components/shared/tabs";
import { MyContext } from "@/context/brains";
import { ArrSlogans, Slogan, arr_sample_data as slogans_arr_sd, sample_data as slogans_sd } from "@/data/sample_dynamic_data/slogans";
import { AlignVerticalSpaceBetween, Cpu, Smartphone } from "lucide-react";
import { useContext } from "react";
import SwipeAbleTabs from "@/components/shared/swipeableIcons";
interface ServicesProps {
  slogan: Slogan;
  slogans: ArrSlogans;
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

const Services: React.FC<ServicesProps> = ({ slogans = slogans_arr_sd, slogan = slogans_sd.whyus }) => {
  const { brains, brainKeys, brainsLoaded, brainsMobile, brainsSiteOwner } = useBrains();
  return (
    <section id="about-us" className="pb-20 -mt-24 bg-gradient-to-r rounded-lg from-cyan-800/25 to-cyan-100/50 w-90">
      <div className="container px-4 mx-auto lg:mt-10">
        <div className="flex flex-wrap">
          <div className="px-4 pt-6 w-full text-center md:w-4/12 lg:pt-12">
            <div className="flex relative flex-col mb-8 w-full min-w-0 break-words bg-white rounded-lg shadow-lg">
              <div className="flex-auto px-4 py-5">
                <div className="inline-flex justify-center items-center p-3 mb-5 w-12 h-12 text-center text-white bg-red-400 rounded-full shadow-lg">
                  <Cpu color="white" />
                </div>
                <h6 className="text-xl font-semibold">Technical expertise</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Our team of experienced professionals with deep technical
                  knowledge and skills in the latest technologies, tools, and
                  methodologies relevant to their clients needs. They provide
                  valuable insights, recommendations, and solutions that align
                  with their clients business goals, ensuring successful
                  outcomes.`
                </p>
              </div>

            </div>
          </div>

          <div className="px-4 w-full text-center md:w-4/12">
            <div className="flex relative flex-col mb-8 w-full min-w-0 break-words bg-white rounded-lg shadow-lg">
              <div className="flex-auto px-4 py-5">
                <div className="inline-flex justify-center items-center p-3 mb-5 w-12 h-12 text-center text-white bg-blue-400 rounded-full shadow-lg">
                  <Smartphone color="white" />
                </div>
                <h6 className="text-xl font-semibold">Effective Communication</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  At Cyberoni, strong communication skills are our top priority.
                  We understand our clients needs, explain complex technical
                  concepts to non-technical stakeholders, and maintain a
                  collaborative relationship throughout the project. We
                  communicate clearly, concisely, and effectively in verbal and
                  written form, making sure everyone is on the same page.
                </p>
              </div>
            </div>
          </div>

          <div className="px-4 pt-6 w-full text-center md:w-4/12">
            <div className="flex relative flex-col mb-8 w-full min-w-0 break-words bg-white rounded-lg shadow-lg">
              <div className="flex-auto px-4 py-5">
                <div className="inline-flex justify-center items-center p-3 mb-5 w-12 h-12 text-center text-white bg-green-400 rounded-full shadow-lg">
                  <AlignVerticalSpaceBetween color="white" />
                </div>
                <h6 className="text-xl font-semibold">
                  Flexibility and Adaptability
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  Cyberoni is a flexible and adaptable tech consulting company
                  that can adjust to their clients changing needs and preferences.
                  We are willing to adjust their approach, scope, and timeline
                  based on feedback and new information to ensure the best
                  possible outcome. Additionally, we offer free revisions if
                  necessary to ensure their clients are fully satisfied with the
                  final result.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center mt-5">
          <div className="px-4 mr-auto ml-auto w-full text-center">
            <h3 className="mb-2 text-3xl font-semibold leading-normal">
              {slogan!.title}
            </h3>
            <p className="mt-4 mb-4 text-lg font-light leading-relaxed text-gray-700">
              {slogan!.subtitle}
            </p>
            <div className="mx-auto max-w-70">      <Tabs slogans={ brainsSiteOwner.slogansArr} isMobile={brainsMobile} />
            </div>
          </div>
          <ServiceCarousel />
        </div>
      </div>
    </section>
  )
}
  ;


export default Services