import React from 'react';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
const about = () => {
  const teams = [
    {
      id: 1,
      img: '/brham.jpg',
      name: 'Dev',
      role: 'Senior Developer',
    },
    {
      id: 2,
      img: '/woman.png',
      name: 'Pauli ',
      role: 'Manager',
    },
    {
      id: 3,
      img: 'https://media.licdn.com/dms/image/D4E03AQEW37OXH0uM2g/profile-displayphoto-shrink_200_200/0/1693997926787?e=1705536000&v=beta&t=FuTguKOgnwORMEqHKZ35RBKs_5HoaFi0hzDkxGY76pM',
      name: 'Olebogeng',
      role: 'Junior Developer',
    },
    {
      id: 4,
      img: '/woman.png',
      name: 'Zimbini',
      role: 'Junior Developer',
    },
    {
      id: 5,
      img: '/profile.png',
      name: 'Mzwandile',
      role: 'Junior Developer',
    },
    {
      id: 6,
      img: '/woman.png',
      name: 'Chuma',
      role: 'Junior Developer',
    },
    {
      id: 7,
      img: '/profile.png',
      name: 'Ryan',
      role: 'Junior Developer',
    },
    {
      id: 8,
      img: '/woman.png',
      name: 'Nokuzola',
      role: 'Junior Developer',
    },
    {
      id: 9,
      img: '/profile.png',
      name: 'Ryan',
      role: 'Junior Developer',
    },
    {
      id: 10,
      img: '/profile.png',
      name: 'Mohammed',
      role: 'Junior Developer',
    },
    {
      id: 11,
      img: '/profile.png',
      name: 'Calab',
      role: 'Junior Developer',
    },
    {
      id: 12,
      img: '/woman.png',
      name: 'Santana',
      role: 'Junior Developer',
    },
  ];
  return (
    <>
      <div className="w-full lg:w-[100%] lg:h-[100vh] flex flex-col lg:flex-row mx-auto px-4 lg:px-10 ">
        <div className="lg:flex-1  bg-no-repeat h-[200px] lg:h-[70vh] flex items-center justify-center">
          <Image
            src="https://velisaafrica.co.za/wp-content/uploads/2018/03/Velisa-Landscape-Logo.png"
            alt="logo"
            className="object-contain"
            width="400"
            height="300"
          />
        </div>
        <div className="lg:flex-1  ">
          <h1 className="text-3xl font-semibold mb-4 flex justify-center text-green-700 ">
            Velisa Africa Web Agency
          </h1>
          <p className="text-base lg:text-lg xl:text-xl mt-6 mb-6 ">
            We pride ourselves on delivering compelling Web Services that
            include modern web design. We do website design, development,
            hosting (through a third party hosting company) and maintenance.
          </p>

          <p className="text-base lg:text-lg xl:text-xl mb-6">
            Our design and copywriting processes follow SEO guidelines, so your
            beautiful website is seen by your target market. Good design,
            affordability and customer care are our priorities.
          </p>

          <p className="text-base lg:text-lg xl:text-xl mb-6">
            Innovation meets your business essence. Our approach seamlessly
            blends remarkable design, practical functionality, and user
            engagement.
          </p>

          <Button
            variant="destructive"
            className=" w-[100%] flex justify-center lg:mt-10"
          >
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4 flex justify-center text-green-700">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6  ">
          {teams.map((team) => (
            <div
              key={team.id}
              className=" p-4 rounded-lg shadow-md h-full flex flex-col justify-center items-center border-2"
            >
              <Image
                src={team.img}
                className="rounded-full object-contain"
                alt="our team"
                width="70"
                height="70"
              />
              <h3 className="text-lg font-semibold mb-2">{team.name}</h3>
              <p className="text-gray-600">Role: {team.role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-30 pt-30 bg-gradient-to-r from-transparent via-transparent to-transparent bg-repeat-x border-r-0 border-l-0 h-[100%] container mx-auto my-8">
        <h2 className="text-3xl font-semibold mb-4 flex justify-center text-green-700">
          Previous Clients
        </h2>
        <div className="flex flex-row justify-center space-x-5">
          <Image
            src="https://www.swervedesigns.co.za/wp-content/uploads/DND-LOGO.png"
            className="w-[10%] h-[10%]"
            alt="logo"
            width="100"
            height="100"
          />
          <Image
            src="https://www.swervedesigns.co.za/wp-content/uploads/DND-LOGO.png"
            className="w-[10%] h-[10%]"
            alt="logo"
            width="100"
            height="100"
          />
          <Image
            src="https://www.swervedesigns.co.za/wp-content/uploads/DND-LOGO.png"
            className="w-[10%] h-[10%]"
            alt="logo"
            width="100"
            height="100"
          />
          <Image
            src="https://www.swervedesigns.co.za/wp-content/uploads/DND-LOGO.png"
            className="w-[10%] h-[10%]"
            alt="logo"
            width="100"
            height="100"
          />
          <Image
            src="https://www.swervedesigns.co.za/wp-content/uploads/DND-LOGO.png"
            className="w-[10%] h-[10%]"
            alt="logo"
            width="50"
            height="50"
          />
        </div>
      </div>
    </>
  );
};

export default about;
