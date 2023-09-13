import { X } from "lucide-react";
import { useState } from 'react';

type Props = {
    tags: string[];
    filterByTag: (tag: string) => void;
    clearState: () => void;
    show: boolean
    className?: string | undefined
}

const TagList = ({ tags, filterByTag, clearState, show, className }: Props) => {
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const [showDialog, setShowDialog] = useState(false);

    const [selectedTag, setSelectedTag] = useState("");
    const handleTagClick = (tag: string) => {
        setActiveTag(tag);
        filterByTag(tag);
        setShowDialog(false)
        setSelectedTag(tag);
    }

    const handleClearClick = () => {
        setActiveTag(null);
        clearState();
        setSelectedTag("");
        setShowDialog(false)
    }

    function toggleDialog() {
        setShowDialog(!showDialog)
    }

    return (
        <>
            <div className={`flex m-1 ${className || "w-full h-20 justify-center"}`}>
                <div></div>
                <button onClick={toggleDialog} className="p-3 m-2 text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 focus:outline-none">Filter with TagList

                </button>
                <div>

                    {selectedTag !== "" ? <button
                        key={selectedTag}
                        className={`p-3 m-2 text-sm  md:lg:text-2xl text-gray-400 uppercase rounded-full rounded-br-none border  shadow-lg duration-200 outline-none hover:shadow-xl hover:rounded-full bg-black border-gray-100`}
                        onClick={() => handleClearClick()}
                    >
                        {selectedTag}
                    </button> : <></>}
                </div>
            </div>


            <div className={`fixed z-30 inset-0 w-screen h-screen bg-transparent flex items-center justify-center ${showDialog ? '' : 'hidden'} `}>
                <div className="bg-black backdrop-blur-lg bg-opacity-50 absolute inset-0 w-screen h-screen z-10"></div>
                <div className={`w-3/4 h-3/4 z-50`} >
                    <div className="bg-white flex flex-col justify-center items-center z-30 h-full">
                        <button className="self-end m-3" onClick={toggleDialog} ><X className="cursor-pointer" /></button>
                        <div className={`flex flex-wrap max-h-full h-full overflow-scroll justify-center items-center mb-6 bg-white`}>
                            <button
                                className={`p-3 m-2 text-sm md:lg:text-2xl  text-gray-400 uppercase rounded-full rounded-br-none border  shadow-lg duration-200 outline-none hover:shadow-xl hover:rounded-full ${!activeTag ? 'text-white bg-black border-black' : ''} border-gray-100`}
                                onClick={handleClearClick}
                            >
                                All
                            </button>
                            {tags.map(tag => (
                                <button
                                    key={tag}
                                    className={`p-3 m-2 text-sm  md:lg:text-2xl text-gray-400 uppercase rounded-full rounded-br-none border  shadow-lg duration-200 outline-none hover:shadow-xl hover:rounded-full ${activeTag === tag ? 'bg-black text-white border-black' : ''} border-gray-100`}
                                    onClick={() => handleTagClick(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TagList;
