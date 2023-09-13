import React, { useRef, useState, useEffect } from 'react';
import { SubProject } from '@/data/sample_data/sample_sub_services';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';

type SubProjectCardProps = {
    subProject: SubProject;
};
function getRandomImageUrl() {
    const imageUrls = [
        "https://tailus.io/sources/blocks/end-image/preview/images/ui-design.svg",
        "https://tailus.io/sources/blocks/end-image/preview/images/ux-design.svg",
        "https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg"
    ];

    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];
    return randomImageUrl;
}

const SubProjectCard: React.FC<SubProjectCardProps> = ({ subProject }) => {
    return (
        <div className="px-8 py-12 bg-white rounded-2xl shadow-xl sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-purple-900">{subProject.title}</h3>
                <p className="mb-6">{subProject.description}</p>
            </div>
            <Image width={900} height={600} src={getRandomImageUrl()} className="-mb-12 ml-auto w-2/3" alt={subProject.title} loading="lazy" />
        </div>
    );
};

type SubProjectGridProps = {
    subProjects: SubProject[];
};

const SubProjectGrid: React.FC<SubProjectGridProps> = ({ subProjects }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [numVisibleCards, setNumVisibleCards] = useState(3);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const handleResize = () => {
        if (window.innerWidth < 640) {
            setNumVisibleCards(1);
        } if (window.innerWidth > 640 && window.innerWidth < 1080) {
            setNumVisibleCards(2);
        } else {
            setNumVisibleCards(3);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleCarouselScroll = (direction: 'left' | 'right') => {
        const totalSlides = Math.ceil(subProjects.length / numVisibleCards);
        let newSlide: number = 0;

        if (direction === 'left') {
            newSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        } else if (direction === 'right') {
            newSlide = (currentSlide + 1) % totalSlides;
        }

        setCurrentSlide(newSlide);

        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: newSlide * carouselRef.current.offsetWidth,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="py-16 bg-purple-200">
            <div className="container px-6 m-auto text-gray-500 md:px-12 xl:px-0">
                <div
                    className={`flex overflow-hidden gap-6 mx-auto md:w-3/4 lg:w-full lg:grid-cols-${numVisibleCards}`}
                    ref={carouselRef}
                >
                    {subProjects
                        .slice(
                            currentSlide * numVisibleCards,
                            currentSlide * numVisibleCards + numVisibleCards
                        )
                        .map((subProject) => (
                            <motion.div
                                key={subProject.id}
                                variants={variants}
                                initial="hidden"
                                animate="visible"
                                className="w-full"
                            >
                                <SubProjectCard subProject={subProject} />
                            </motion.div>
                        ))}
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button
                        className="inline-block px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-lg"
                        onClick={() => handleCarouselScroll('left')}
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
                        className="inline-block px-4 py-2 text-lg font-medium text-white bg-purple-600 rounded-lg"
                        onClick={() => handleCarouselScroll('right')}
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

    );
};

export default SubProjectGrid;

