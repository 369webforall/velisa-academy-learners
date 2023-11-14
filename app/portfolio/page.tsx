import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Portfolio = () => {
  const service = [
    {
      img: '/ottoocs.png',
      title: 'Website link',
      sub: 'https://ottoocs.hu/',
    },
    {
      img: '/wolf.png',
      title: 'Website link',
      sub: 'https://blackwolf.com/',
    },
    {
      img: '/ubuntu.png',
      title: 'Website link',
      sub: 'https://ubuntu.renderforestsites.com/#comp-17b3f0c66be',
    },
    {
      img: '/cunun.png',
      title: 'Website link',
      sub: 'https://cununiacivila.renderforestsites.com/',
    },
    {
      img: '/beauty.png',
      title: 'Website link',
      sub: 'https://13559386-799317.renderforestsites.com/',
    },
    {
      img: '/mobila.png',
      title: 'Website link',
      sub: 'https://13559386-826105.renderforestsites.com/',
    },
  ];

  return (
    <div className="container mx-auto md:h-screen mt-20 p-4">
      <h2 className="text-xl text-purple-600  font-semibold text-center md:text-4xl">
        Explore Some of our projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-12 py-10">
        {service.map((ser, i) => {
          return (
            <div
              className="px-6 py-4  rounded-xl bg-gray-50 shadow-lg border border-gray-200 hover:bg-purple-600 group "
              key={i}
            >
              <Image
                className="w-full"
                src={ser.img}
                alt={ser.title}
                width="400"
                height="300"
              />

              <div className="flex justify-between items-center">
                <p className="text-lg mt-4 group-hover:text-white font-semibold line-clamp-1 md:text-2xl">
                  {ser.title}
                </p>
              </div>

              <p className="text-base group-hover:text-white pr-6 py-2">
                <Link href={ser.sub}>Live View</Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
