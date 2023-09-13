import React, { useState, useEffect } from "react";
import { VidPopover } from "./shared/popover";

interface YoutubePopoverProps {
    width: string;
    height: string;
    youtubeUrl: string;
}

const YoutubePopover: React.FC<YoutubePopoverProps> = ({ width, height, youtubeUrl }) => {
    const [openPopover, setOpenPopover] = useState(false);


    const handleTogglePopover = (isOpen: boolean, event: React.MouseEvent) => {

        event.stopPropagation();
        setOpenPopover(isOpen);
        console.log(isOpen)

    };



    //? width = "500px"
    // height = "515"
    return (
        <div className="relative" >
            <VidPopover
                openPopover={openPopover}
                setOpenPopover={setOpenPopover}

                content={
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <iframe
                            width={width}
                            height={height}
                            src={youtubeUrl}
                            title="YouTube Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                        <button
                            className={
                                "bg-cyan-500 text-white hover:bg-cyan-600 active:bg-pink-600 " +
                                "  ml-10 mb-3 rounded px-4 py-2 text-xs font-bold uppercase shadow outline-none ring ring-blue-300 hover:shadow-md hover:ring-purple-500 focus:outline-none lg:my-5 lg:mr-10 lg:mb-0 absolute top-0 right-0"
                            }
                            type="button"
                            style={{ transition: "all .15s ease" }}
                            onClick={(event) => handleTogglePopover(false, event)}
                        >
                            X
                        </button>
                    </div>
                }
            >
                <button
                    className={
                        "bg-cyan-500 text-white hover:bg-cyan-600 active:bg-pink-600" +
                        "  ml-3 mb-3 rounded px-4 py-2 text-xs font-bold uppercase shadow outline-none ring ring-blue-300 hover:shadow-md hover:ring-purple-500 focus:outline-none lg:mr-8 lg:mb-0"
                    }
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={(event) => handleTogglePopover(true, event)}
                >
                    Learn More
                </button>
            </VidPopover>

        </div>

    );
}

export default YoutubePopover;
