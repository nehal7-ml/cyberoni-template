import { useState } from 'react';
import { ArrSlogans, arr_sample_data } from '@/data/sample_dynamic_data/slogans';
import { BookOpen, Book } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';

interface TabsProps {
    slogans?: ArrSlogans;
    activeTab: string;
    handleChange: (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>, title: string) => void;
}

const SwipeAbleTabs: React.FC<TabsProps> = ({ slogans = arr_sample_data,handleChange,activeTab }) => {




    const handleSwipe = (eventData: any) => {
        if (eventData.dir === 'Left' || eventData.dir === 'Right') {
           
        }
    };

    const swipeHandlers = useSwipeable({
        onSwiped: handleSwipe,
        
        trackMouse: true,
    });


    return (
        <ul className="grid grid-cols-4 gap-4">
            {slogans.map((slogan) => {
                return (
                    <li key={slogan.title}>
                        <button
                           
                            onClick={(event) => handleChange(event, slogan.title)}
                        >
                            <div
                                className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 transition-opacity duration-300 ${activeTab !== slogan.title ? 'opacity-100 pointer-events-auto' : 'opacity-70 pointer-events-none'
                                    }`}
                                dangerouslySetInnerHTML={{ __html: slogan.links!.svg_icon! }}
                            />
                            <span className="sr-only">{slogan.title}</span>
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default SwipeAbleTabs;