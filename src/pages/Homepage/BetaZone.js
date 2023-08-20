import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaCompass } from 'react-icons/fa';
import { PiNumberSquareOneFill } from 'react-icons/pi';
import { PiNumberSquareTwoFill } from 'react-icons/pi';
import { PiNumberSquareThreeFill } from 'react-icons/pi';

import dumbo from '../../assets/homepage/fish-1.png';
import halfmoon from '../../assets/homepage/fish-halfmoon.png';

const fishContent = [
  {
    id: 1,
    icon: <PiNumberSquareOneFill />,
    name: 'Platinum White Dumbo Ear',
    desc: 'Lorem ipsum dolor sit amet consectetur. Commodo at sed libero ac volutpat.',
    image: dumbo
  },
  {
    id: 2,
    icon: <PiNumberSquareTwoFill />,
    name: 'Pineapple Dumbo Ear',
    desc: 'Lorem ipsum dolor sit amet consectetur. Commodo at sed libero ac volutpat.',
    image: halfmoon
  },
  {
    id: 3,
    icon: <PiNumberSquareThreeFill />,
    name: 'Platinum White Dumbo Ear',
    desc: 'Lorem ipsum dolor sit amet consectetur. Commodo at sed libero ac volutpat.',
    image: dumbo
  }
];

const BetaZone = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        className="container mx-auto md:mt-36 mt-10 font-poppins relative"
        data-aos="fade-up"
      >
        <div className="p-4">
          <h3 className="md:mb-10 mb-5 md:text-3xl text-xl text-center text-[#747474] uppercase">
            Betta Zone
          </h3>
          <h1 className="md:mb-10 mb-5 lg:text-[70px] md:text-[40px] text-[35px] text-black font-semibold text-center leading-none">
            Our Bidders Favorite.
          </h1>
          <h3 className="md:mb-20 mb-5 md:text-xl text-center text-[#464646] max-w-[500px] mx-auto">
            Theese are the top three(3) most bought/bid fish of this month!
          </h3>

          {/* GRID VIEW */}
          <div
            className="my-4  grid lg:grid-cols-3 gap-4 items-center"
            data-aos="fade-right"
          >
            {fishContent.map((item) => (
              <div
                key={item.id}
                className="lg:mt-10 mt-24 p-2 bg-bg-2 bg-no-repeat w-full h-[500px] bg-cover bg-left rounded-3xl relative cursor-pointer transition ease-in-out hover:-translate-y-10"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute lg:-top-32 -top-20 lg:w-[340px] w-[300px]"
                />
                <p className="lg:w-fit w-full text-xl text-white font-medium absolute lg:bottom-44 bottom-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className=" flex flex-row gap-2 items-center">
                    <span className="text-2xl"> {item.icon}</span>
                    Number {item.id} Favorite
                  </span>
                </p>
                <div className="p-4 lg:w-[400px] w-full bg-white absolute rounded-xl bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                  <h3 className="mb-2 lg:text-2xl text-xl font-semibold text-black">
                    {item.name}
                  </h3>
                  <p className="text-[#828080] ">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="p-4 md:mt-8 mt-4 mb-36 text-[#007FFE] hover:text-white hover:bg-[#007FFE] flex items-center justify-center mx-auto gap-2 md:text-2xl text-md font-semibold border border-[#007FFE] rounded-full transition-all ease-in">
          <FaCompass className="md:text-[30px] text-[25px]" />
          See Betta Zone More
        </button>
      </section>
    </>
  );
};

export default BetaZone;
