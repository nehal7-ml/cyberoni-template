import { ArrSlogans, arr_sample_data } from '@/data/sample_dynamic_data/slogans';
import { useState } from 'react';
import SwipeAbleTabs from './swipeableIcons';
import { Popover, PopoverTrigger, PopoverContent } from '@radix-ui/react-popover';
import { useEffect } from 'react';
interface TabsProps {
    slogans: ArrSlogans;
    isMobile: boolean;
}

const MAX_CHARACTERS = 200;

const Tabs: React.FC<TabsProps> = ({ slogans = arr_sample_data , isMobile = true}) => {
    const [activeTab, setActiveTab] = useState(slogans[0].title);
    const [isTabsActive, setIsTabsActive] = useState(false);
    const [showFullText, setShowFullText] = useState(false);

  
    const handleSetActiveTab = (event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>, title: string) => {
        event.preventDefault();
        setActiveTab(title);
    };

    const handleToggleTabs = () => {
        setIsTabsActive((prevIsTabsActive) => !prevIsTabsActive);
    };


    useEffect(() => {
        
        return () => {}
    },
    //eslint-disable-next-line
        [showFullText]);
    const renderTabs = () => {
        return slogans.map((slogan, index) => {
            const truncatedText = slogan.message.slice(0, MAX_CHARACTERS);
            const isTruncated = slogan.message.length > MAX_CHARACTERS;
            return (
                <li key={index} className={activeTab === slogan.title ? 'space-y-4 h-full' : 'hidden'}>
                    <h2 className="text-3xl text-gray-700">
                        {(new String(slogan.subtitle)).replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}
                    </h2>
                    <p className="mx-auto my-10 h-full text-base text-gray-500">
                        {showFullText ? slogan.message : truncatedText}
                        {isTruncated && (
                            <Popover>
                                <PopoverTrigger>
                                    <button
                                        className="ml-2 text-sm font-medium text-purple-500 hover:text-purple-700 focus:outline-none focus:underline"
                                        onClick={() => setShowFullText(true)}
                                    >
                                        Read more
                                    </button>
                                </PopoverTrigger>
                                {showFullText &&<PopoverContent>
                                    <div className="p-4 max-w-sm text-gray-800 bg-white shadow-lg">
                                        {slogan.message}
                                        <button
                                            className="absolute top-0 right-0 px-2 py-1 text-gray-500 hover:text-gray-800 focus:outline-none"
                                            onClick={() => setShowFullText(false)}
                                        >
                                            X
                                        </button>
                                    </div>
                                </PopoverContent>}
                            </Popover>
                        )}
                    </p>
                </li>
            );
        });
    };


    let isMobileButtons = () => {
        isMobile

        if (!isMobile) {
            return slogans.map((slogan, index) => {
                return (
                    <a
                        key={index}
                        href="#"
                        onClick={(event) => handleSetActiveTab(event, slogan.title)}
                        className="w-16 h-16 sm:w-20 sm:h-20"
                    >
                        <span className="sr-only">{slogan.title}</span>
                        <div
                            className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 transition-opacity duration-300 ${activeTab !== slogan.title ? 'opacity-100 pointer-events-auto' : 'opacity-70 pointer-events-none'
                                }`}
                            dangerouslySetInnerHTML={{ __html: slogan.links!.svg_icon! }}
                        />
                        <div
                            className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 transition-opacity duration-300 ${activeTab === slogan.title ? 'opacity-100 pointer-events-auto' : 'opacity-70 pointer-events-none'
                                }`}
                            dangerouslySetInnerHTML={{ __html: slogan.links!.svg_icon! }}
                        />
                    </a>
                );
            })
        } else {
            return <SwipeAbleTabs activeTab={activeTab} handleChange={handleSetActiveTab} />


        }
    }

    return (
        <div className="flex flex-col justify-center items-center my-5 w-full h-full antialiased sm:w-90">
            <div className="overflow-hidden rounded-2xl">
                {/* Tabs */}
                <div className="h-full bg-white rounded-t-2xl border-t-4 border-purple-500 border-x-4 min-h-80" >

                    <div id="tabs-container" className="overflow-hidden relative h-full">
                        <ul className="p-6 mx-auto w-80 h-full sm:w-90">{renderTabs()}</ul>
                    </div>
                </div>

                <div className="flex overflow-hidden relative items-center bg-white rounded-b-2xl border-4 border-purple-500 sm:w-90">
                    {/* Links */}
                    <nav className="flex gap-4 justify-center items-center px-6 sm:gap-8">
                        {isMobileButtons()}
                    </nav>

                    {/* Show/Hide button */}

                </div>
            </div>
        </div>
    );
};

export default Tabs;