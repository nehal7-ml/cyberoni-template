import React from 'react'
import Image from 'next/image'
import SubProjectGrid from "@/layouts/services/dynamicSubprojects"
import Link from 'next/link'
import { ServiceWithID } from '@/data/sample_data/sample_services';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

interface Props {
    service: ServiceWithID;
}

const ServiceComponent = ({ service }: Props) => {
    return (
        <div className=''>

            <main className="flex flex-col justify-center items-center mt-32">


                <section className="flex flex-col justify-center items-center w-full">
                    <h1 className="mb-10 text-5xl font-semibold text-center lg:mt-5 dark:text-slate-900">
                        {service.preview.title}
                    </h1>
                    <div className="h-[500px] bg-cover bg-fixed bg-center relative w-full">
                        <Image
                            width={1920}
                            height={500}
                            src={
                                service.more_details.imageUrl ||
                                "https://res.cloudinary.com/djao481zq/image/upload/v1684945775/CyberOni/Assets/Services/stock_phots/sw2nsxtfegw1yp7aqsrm.jpg"
                            }
                            alt="Service Image"
                            className="object-cover w-full h-full transition-all duration-500 cursor-pointer hover:scale-105 scale"
                        />
                        <div className="flex absolute bottom-0 left-0 justify-center items-center w-full">
                            <div className="pb-4">
                                <ScrollLink
                                    to="key-features"
                                    smooth={true}
                                    duration={500}
                                    offset={-100}
                                    className="block px-8 py-4 mb-5 text-xs font-semibold tracking-wide leading-none text-center text-white bg-blue-500 rounded cursor-pointer 4 mb--4 my sm:mr-3 sm:mb-0 sm:inline-block sm:w-3.5 lg:w-full"
                                >
                                    Key Features
                                </ScrollLink>
                                {/* <ScrollLink
                                  to="content"
                                  smooth={true}
                                  duration={500}
                                  offset={-100}
                                  href="#content"
                                  className="block px-8 py-4 mt-5 w-24 text-xs font-semibold leading-none text-center bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500 sm:w-3.5 lg:w-full"
                              >
                                  How We Work?
                              </ScrollLink> */}
                            </div>
                        </div>
                    </div>
                </section>



                <section className="p-8 md:p-20 md:space-y-4 lg:space-y-8">
                    <div className="mt-6">
                        {service.more_details.description.map((paragraph, index) => (
                            <div id="content" key={index} className="mb-4">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{paragraph.title}</h2>
                                {paragraph.blockquote && (
                                    <blockquote className="pl-4 my-4 italic border-l-4 border-gray-300 dark:border-gray-700">
                                        {paragraph.blockquote}
                                    </blockquote>
                                )}
                                {paragraph.image && (
                                    <div className="relative w-full aspect-w-4 aspect-h-3 md:w-full md:aspect-w-16 md:aspect-h-9">
                                        <Image src={paragraph.image} alt="" layout="fill" objectFit="cover" className="rounded-md" />
                                    </div>
                                )}
                                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">{paragraph.content}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <div id="key-features">
                <SubProjectGrid subProjects={service.sub_projects} />
            </div>
        </div>
    )
}

export default ServiceComponent