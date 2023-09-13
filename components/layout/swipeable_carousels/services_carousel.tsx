import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { v4 as uuidv4 } from "uuid";
import QuoteCard from "../services/card";
import {
  servicesWithId,
  servicesWithIdObj,
  getObjectById,servicesKeys,
  
} from "../../../data/services";
import {
  
  Service,ServiceWithID
} from "../../../data/sample_data/sample_services";
import { getServiceByID } from "@/data/services";

const services = servicesWithId;

// console.log("servicesWithIdObj", servicesWithIdObj);

const ServiceCarousel = () => {
  const [index, setIndex] = useState(0);
  const [selected_service, setService] = useState<ServiceWithID>();

  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setIndex((prevIndex) =>
        prevIndex === servicesKeys.length - 1 ? 0 : prevIndex + 1
      ),
    onSwipedRight: () =>
      setIndex((prevIndex) =>
        prevIndex === 0 ? servicesKeys.length - 1 : prevIndex - 1
      ),
  });

  useEffect(() => {
    try {
      const newService = getServiceByID(index);
      console.log("newService");
      if (newService) {
        setService(newService);
      } else {
        alert("No Service Found");
      }
    } catch (error) {
      console.error("Error occurred while retrieving the service:", error);
      alert("Error occurred while retrieving the service.");
    }
    // console.log("selected_service", selected_service);
  }, [index]);

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === servicesKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? servicesKeys.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex" {...handlers}>
        <button
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-l-lg px-4 py-2 text-black hover:bg-gray-600"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-r-lg px-4 py-2 text-black hover:bg-gray-600"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

        <div className="relative h-full w-full items-center justify-center overflow-hidden">
          <div className="flex h-full items-center justify-center">
            {selected_service && (
              <div className="flex h-full items-center justify-center">
                <QuoteCard
                  service={selected_service}
                  key={selected_service.preview.id}
                  imageUrl={selected_service.preview.imageUrl}
                  title={selected_service.preview.title}
                  content={selected_service.preview.content}
                  id={selected_service.id!}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCarousel;
