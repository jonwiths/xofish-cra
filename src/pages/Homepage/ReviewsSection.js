import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiTwotoneStar } from 'react-icons/ai';

import fish from '../../assets/homepage/fish-1.png';

const reviews = [
  {
    name: 'Jon Doe',
    status: 'Bidder',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et suscipit reiciendis fugiat earum, neque est animi non porro corrupti, laborum reprehenderit, nisi rerum esse magni?',
    stars: 4,
    img_url: fish
  },
  {
    name: 'Jane Doe',
    status: 'Bidder',
    comment: 'Good fish here!',
    stars: 5,
    img_url: fish
  },
  {
    name: 'Will Smith',
    status: 'Customer',
    comment: 'This is nice',
    stars: 5,
    img_url: fish
  }
];

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
            Our Happy Bidders .
          </h1>
          <h3 className="md:mb-16 mb-8 md:text-2xl text-xl text-center text-[#747474]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            placeat.
          </h3>
          <div className="grid grid-cols-3 gap-10">
            {reviews.map((item, i) => (
              <div
                className="p-10 border-[3px] border-gray-400 rounded-2xl"
                data-aos="flip-right"
              >
                <div className="flex items-end justify-between">
                  <div className="flex gap-4 items-center">
                    <img
                      src={item.img_url}
                      alt=""
                      className="rounded-full w-[80px] h-[80px] bg-blue-300 p-1"
                    />
                    <div className="flex flex-col">
                      <h4 className="text-2xl font-semibold">{item.name}</h4>
                      <p className="text-lg">{item.status}</p>
                    </div>
                  </div>
                  <div className="flex items-end gap-1">
                    <AiTwotoneStar className="text-[25px] text-yellow-500" />
                    <AiTwotoneStar className="text-[25px] text-yellow-500" />
                    <AiTwotoneStar className="text-[25px] text-yellow-500" />
                    <AiTwotoneStar className="text-[25px] text-yellow-500" />
                    <AiTwotoneStar className="text-[25px] text-yellow-500" />
                  </div>
                </div>
                <div className="mt-7 text-xl ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto, dolores fuga nisi dignissimos non veniam aliquam!
                  Omnis, quasi. Suscipit nulla voluptas, sit assumenda qui
                  architecto placeat exercitationem molestias iusto! Iusto,
                  numquam dolore commodi exercitationem aliquid praesentium quae
                  at dolorem vero id ad soluta blanditiis! Esse.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsSection;
