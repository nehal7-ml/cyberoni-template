import { ServiceWithID, servicesArrayType } from '@/data/sample_data/sample_services';
import { CollectionSlogans as SlogansType, } from '@/data/sample_dynamic_data/slogans';
import { Cpu, Database, Globe2, Home, LayoutTemplate, Send, SmartphoneCharging } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import TagList from '../FilterButtons';
import { createServiceLink, } from '@/data/services';
interface Props {
    services: servicesArrayType;
    slogans: SlogansType;
}

const ServicesSection: React.FC<Props> = ({ services, slogans }) => {
    
    const [statefulServices, setServices] = useState<servicesArrayType>(services);

    const icon = {
        width: 35,
        height: 35
    }

    let setServiceIcon = (tag: string) => {
        switch (tag) {
            case 'web':
                return <LayoutTemplate color="blue"  width={icon.width} height={icon.height} />;
            case 'data':
                return <Database color="blue" width={icon.width} height={icon.height} />;
            case 'mobile':
                return <SmartphoneCharging color="blue" width={icon.width} height={icon.height} />;
            case 'marketing':
                return <Send color="blue" width={icon.width} height={icon.height} />;
            case 'home':
                return <Home color="blue" width={icon.width} height={icon.height} />;
            default:
                return Math.random() < 0.5 ? <Globe2 color="blue" width={icon.width} height={icon.height} /> : <Cpu color="blue" width={icon.width} height={icon.height} />;
        }
    }


    function getUniqueTags(): string[] {
        const tags = services.reduce((acc: string[], service: ServiceWithID) => {
            service.tags?.forEach((tag: string) => {
                if (!acc.includes(tag)) {
                    acc.push(tag);
                }
            });
            return acc;
        }, []);
        return Array.from(new Set(tags));
    }
    
    const uniqueTags: string[] = getUniqueTags()

    function filterServicesByTag(tag: string): ServiceWithID[] {
        let newServices = services.filter((service) => service.tags?.includes(tag))
        setServices(newServices)
        return newServices;
    }

    let clear_state = () => {
        setServices(services)
    }

    useEffect(() => {
        
        return () => {}
    },
    //eslint-disable-next-line
    []);
    return (
      <section className=" w-11/12 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  {slogans.services?.title}
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  {slogans.services?.subtitle}
                </h2>
                {/* <p className="text-base text-body-color">
                                {slogans.services?.description}
                            </p> */}
              </div>
              <TagList
                show={true}
                tags={uniqueTags}
                clearState={clear_state}
                filterByTag={filterServicesByTag}
                className="h-20 flex text-center justify-center"
              />
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {statefulServices.map((service) => (
              <div
                className="w-full px-4 md:w-1/2 lg:w-1/3"
                key={Object.keys(services)[0]}
              >
                <div className="mb-8 rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10">
                  <div className="bg-primary mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl">
                    {setServiceIcon(
                      service.more_details.description[0].content
                    )}
                  </div>
                  <h4 className="text-dark mb-3 text-xl font-semibold">
                    {service.preview.title}
                  </h4>
                  <p className="text-body-color">{service.preview.content}</p>
                  <Link href={createServiceLink(service)}>
                    <span className="text-blue-500 underline">Learn More</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default ServicesSection;