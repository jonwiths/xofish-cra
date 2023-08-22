import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiTwotoneStar } from 'react-icons/ai';

import fish from '../../assets/homepage/fish-1.png';
import fish2 from '../../assets/homepage/fish-halfmoon.png';
import fish3 from '../../assets/homepage/prism.png';

const reviews = [
  {
    name: 'Jon Doe',
    status: 'Bidder',
    comment: 'The fish I bought is good, will bid again!',
    stars: 4,
    img_url: fish
  },
  {
    name: 'Jane Doe',
    status: 'Bidder',
    comment:
      'Good fish here! dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit.',
    stars: 5,
    img_url: fish2
  },
  {
    name: 'Will Smith',
    status: 'Customer',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, ut quidem commodi, voluptas quaerat architecto laudantium ipsum nesciunt fugiat, eligendi fugit magni hic dolor.',
    stars: 5,
    img_url: fish3
  }
];

const renderStars = (numStars) => {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(
      <AiTwotoneStar key={i} className="text-[25px] text-yellow-500" />
    );
  }
  return stars;
};

const ReviewsSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="container mx-auto my-36 font-poppins relative">
        <div className="p-4" data-aos="zoom-in">
          <h3 className="md:mb-10 mb-5 md:text-3xl text-xl text-center text-[#747474] uppercase">
            Xofish Reviews
          </h3>
          <h1 className="md:mb-12 mb-5 lg:text-[70px] md:text-[40px] text-[35px] text-black font-semibold text-center leading-none">
            Our Happy Bidders.
          </h1>
          <h3 className="md:mb-16 mb-8 md:text-2xl text-xl text-center text-[#747474]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            placeat.
          </h3>
          <div className="grid xl:grid-cols-3 gap-5">
            {reviews.map((item, i) => (
              <div
                key={i}
                className={
                  i === 1
                    ? `lg:p-10 px-4 py-8  border-[3px] bg-[#0046AA] rounded-2xl text-white xl:-mt-6 xl:mb-6`
                    : `lg:p-10 px-4 py-8  border-[3px] border-gray-400 rounded-2xl`
                }
                data-aos="flip-right"
              >
                <div className="flex items-end justify-between">
                  <div className="lg:mb-0 mb-5 w-full flex lg:flex-row flex-col gap-4 lg:justify-start justify-center items-center ">
                    <img
                      src={item.img_url}
                      alt=""
                      className="rounded-full w-[80px] h-[80px] bg-blue-300 p-1"
                    />
                    <div className="flex flex-col lg:text-start text-center">
                      <h4 className="text-2xl font-semibold">{item.name}</h4>
                      <p className="text-lg">{item.status}</p>
                    </div>
                  </div>
                </div>
                <div className="flex lg:justify-end justify-center lg:items-end items-center gap-1">
                  {renderStars(item.stars)}
                </div>
                <p className="mt-7 text-xl ">{item.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
