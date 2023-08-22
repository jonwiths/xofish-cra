import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaFish } from 'react-icons/fa';
import { GiFlatfish, GiTropicalFish } from 'react-icons/gi';

import bg from '../../assets/homepage/bg-1.png';
import fish from '../../assets/homepage/fish-1.png';
import xof from '../../assets/homepage/xof.png';

const fishInfo = [
  {
    name: 'Tail Types',
    count: '15+'
  },
  {
    name: 'Strains',
    count: '40+'
  },
  {
    name: 'Bidders',
    count: '150+'
  }
];

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="container mx-auto mt-20 font-poppins relative ">
        <div className=" flex md:flex-row flex-col justify-between items-center w-full">
          <div className="flex-1 p-4">
            <h1 className="xl:text-[70px] lg:text-[50px] md:text-[40px] text-[35px] font-semibold leading-none md:text-left text-center">
              The Best Place to <br />{' '}
              <span className="text-[#0046AA]">Discover</span> &{' '}
              <span className="text-[#0046AA]">Collect</span>
              <br /> Betta Fish.
            </h1>
            <p className="mt-4 xl:text-xl lg:text-md text-base text-[#8E8E8E] text-justify">
              There are many types of Betta Fish that you may not have seen,
              Xofish is the best place to discover and collect different strain
              of betta from popular breeders around the world.
            </p>

            <div className=" flex md:justify-start justify-center gap-4 lg:my-12 my-6">
              <button className="xl:w-[185px] lg:w-[150px] w-[130px] xl:p-4 lg:p-3 lg:px-4 p-2 bg-[#007FFE]  rounded-lg font-medium text-white hover:bg-[#0046AA]">
                <Link to="/">Login</Link>
              </button>
              <button className="xl:w-[185px] lg:w-[150px] w-[130px] xl:p-4 lg:p-3 lg:px-4 p-2 bg-white rounded-lg font-medium text-[#007FFE] border-2 border-[#007FFE]  hover:bg-blue-100">
                <Link to="/">Sign Up</Link>
              </button>
            </div>

            <div className="flex md:justify-between justify-evenly items-center max-w-[500px] mx-auto lg:mx-0 w-full">
              {fishInfo.map((info) => (
                <div key={info.name} className="">
                  <h2 className="lg:text-4xl md:text-3xl text-2xl  font-medium text-[#065CB0]">
                    {info.count}
                  </h2>
                  <h4 className="lg:text-xl md:text-md text-base text-[#ABABAB]">
                    {info.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 md:mt-0 mt-10">
            <div className="flex flex-col items-center justify-center">
              <img
                src={bg}
                className="relative xl:w-[400px] lg:w-[300px] w-[250px]"
                alt="fish background"
              />
              <img
                src={fish}
                alt="fish"
                className="absolute xl:w-[350px] lg:w-[275px] w-[205px] lg:-translate-x-24 -translate-x-14 xl:translate-y-0 lg:-translate-y-10 -translate-y-16 ease-out transition-all delay-75 cursor-pointer animate-pulse"
              />
              <div className="lg:mt-10 mt-5 mb-8 font-poppins font-semibold">
                <p className="text-center">
                  Let's Meet{' '}
                  <span className="text-[#194D93]">The Dumbo Ear</span>
                </p>
                <p>The Most Popular Betta in this Week!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="py-4 mt-12 mb-4 bg-[#065CB0] md:w-[800px] w-full md:rounded-r-3xl "
        data-aos="fade-right"
      >
        <div className="flex w-full items-end  justify-evenly">
          <span className="flex flex-col items-center">
            <FaFish className="md:text-[50px] text-[40px] text-white" />
            <p className="text-center text-white font-semibold md:text-[20px] text-[16px]">
              Prism Betta
            </p>
          </span>
          <span className="flex flex-col items-center">
            <GiTropicalFish className="md:text-[50px] text-[40px] text-white" />
            <p className="text-center text-white font-semibold md:text-[20px] text-[16px]">
              Betta Thailand
            </p>
          </span>
          <span className="flex flex-col items-center ">
            <GiFlatfish className="md:text-[50px] text-[40px] text-white" />
            <p className="text-center text-white font-semibold md:text-[20px] text-[16px]">
              Xof Betta
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
