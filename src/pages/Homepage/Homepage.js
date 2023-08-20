import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import bg from '../../assets/homepage/bg-1.png';
import fish from '../../assets/homepage/fish-1.png';
import prism from '../../assets/homepage/prism.png';
import xof from '../../assets/homepage/xof.png';
import thai from '../../assets/homepage/betta-thailand.png';
import BetaZone from './BetaZone';
import BiddingSection from './BiddingSection';
import ReviewsSection from './ReviewsSection';

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

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="container mx-auto mt-36 font-poppins relative">
        <div className="flex lg:flex-row flex-col justify-between items-center w-full">
          <div className="flex-1 p-4">
            <h1 className="lg:text-[70px] md:text-[40px] text-[35px] font-semibold leading-none lg:text-left text-center">
              The Best Place to <br />{' '}
              <span className="text-[#0046AA]">Discover</span> &{' '}
              <span className="text-[#0046AA]">Collect</span>
              <br /> Betta Fish.
            </h1>
            <p className="mt-4 lg:text-xl text-base text-[#8E8E8E] text-justify">
              There are many types of Betta Fish that you may not have seen,
              Xofish is the best place to discover and collect different strain
              of betta from popular breeders around the world.
            </p>

            <div className=" flex lg:justify-start justify-center gap-4 my-12">
              <button className="lg:w-[185px] w-[130px] lg:p-4 lg:px-4 p-2 bg-[#007FFE]  rounded-lg font-medium text-white hover:bg-[#0046AA]">
                <Link to="/">Login</Link>
              </button>
              <button className="lg:w-[185px] w-[130px] lg:p-4 lg:px-4 p-2 bg-white rounded-lg font-medium text-[#007FFE] border-2 border-[#007FFE]  hover:bg-blue-100">
                <Link to="/">Sign Up</Link>
              </button>
            </div>

            <div className="flex md:justify-between justify-evenly items-center max-w-[500px] mx-auto lg:mx-0 w-full">
              {fishInfo.map((info) => (
                <div key={info.name} className="">
                  <h2 className="md:text-4xl text-3xl font-medium text-[#065CB0]">
                    {info.count}
                  </h2>
                  <h4 className="md:text-xl text-base text-[#ABABAB]">
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
                className="relative lg:w-[400px] w-[250px]"
                alt="fish background"
              />
              <img
                src={fish}
                alt="fish"
                className="absolute lg:w-[350px] w-[205px] lg:-translate-x-24 -translate-x-14 lg:translate-y-0 -translate-y-16 ease-out transition-all delay-75 cursor-pointer animate-pulse"
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
        className="p-1 bg-[#065CB0] md:w-[800px] w-full md:rounded-r-3xl mb-4"
        data-aos="fade-right"
      >
        <div className="flex w-full items-end  justify-evenly">
          <span className="flex flex-col items-center">
            <img
              src={prism}
              alt="prism betta"
              className="md:w-[100px] w-[60px]"
            />
            <p className="text-center text-white font-semibold md:text-[20px] text-[16px]">
              Prism Betta
            </p>
          </span>
          <span className="flex flex-col items-center">
            <img
              src={thai}
              alt="netta thailand"
              className="md:w-[100px] w-[60px]"
            />
            <p className="text-center text-white font-semibold md:text-[20px] text-[16px]">
              Betta Thailand
            </p>
          </span>
          <span className="flex flex-col items-center ">
            <img src={xof} alt="xof betta" className="md:w-[50px]  w-[30px]" />
            <p className="text-center text-white font-semibold md:text-[20px] text-[16px]">
              Xof Betta
            </p>
          </span>
        </div>
      </div>

      <BetaZone />
      <BiddingSection />
      <ReviewsSection />
    </>
  );
};

export default Homepage;
