import isMobile from "is-mobile";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import {createServiceLink} from '@/data/services'
import Link from 'next/link';
import { ServiceWithID } from "@/data/sample_data/sample_services";

const MAX_CONTENT_LENGTH = 300;


interface QuoteCardProps {
  imageUrl: string;
  title: string;
  content: string;
  id: number;
  service: ServiceWithID;
}

const colors = ["bg-pink-600", "bg-cyan-600", "bg-sky-600"];

function QuoteCard({ imageUrl, title, content, id,service }: QuoteCardProps) {
  const [bgColor, setBgColor] = useState(colors[0]);

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  }, []);

  const isMobileDevice = isMobile();
  const truncatedContent = content!.substring(0, MAX_CONTENT_LENGTH);

  return (
    <div className="mx-auto max-w-screen-xl px-4 text-center lg:mx-20">
      <div
        className={`relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg shadow-lg ${bgColor}`}
      >
        {imageUrl && (
          <Link href={createServiceLink(service)}>
            <Image
              alt="..."
              src={imageUrl}
              className="w-full rounded-t-lg object-cover align-middle"
              layout={'responsive'}
              width={800}
              height={750}
            />
          </Link>
        )}

        <blockquote className="relative mb-4 p-8">
          <svg
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 583 95"
            className="absolute left-0 block w-full"
            style={{
              height: '95px',
              top: '-94px',
            }}
          >
            <polygon
              points="-30,95 583,95 583,65"
              className={`fill-current text-white ${bgColor}`}
            ></polygon>
          </svg>
          <Link href={createServiceLink(service)}>
            <h4 className="text-xl font-bold text-white">{title}</h4>
          </Link>
          {content!.length > MAX_CONTENT_LENGTH ? (
            <div className="flex items-center justify-center">
              <div className="text-center text-white">
                {truncatedContent}... <br />
                <Link href={createServiceLink(service)}>
                  <button className="mt-5 mb-3 ml-3 rounded bg-purple-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none ring ring-blue-300 hover:bg-cyan-600 hover:shadow-md hover:ring-cyan-500 focus:outline-none active:bg-pink-600 lg:mr-1 lg:mb-0">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <span className="text-white">{content!}</span>
            </div>
          )}{' '}
        </blockquote>
      </div>
    </div>
  );
}

export default QuoteCard;
