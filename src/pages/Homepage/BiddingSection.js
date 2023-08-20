import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { BiSolidCalendar } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';

const biddingInfo = [
  {
    id: 1,
    title: 'Betta Thailand',
    date: 'September 1, 2023',
    start_time: '12:00 PM',
    end_time: '1:00 PM'
  },
  {
    id: 2,
    title: 'Prism Thailand',
    date: 'September 2, 2023',
    start_time: '1:00 PM',
    end_time: '3:00 PM'
  },
  {
    id: 3,
    title: 'Xof Betta',
    date: 'September 3, 2023',
    start_time: '12:00 PM',
    end_time: '1:00 PM'
  }
];

const BiddingSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className="container mx-auto mt-36 font-poppins relative">
        <div className="p-4">
          <h3
            className="md:mb-10 mb-5 md:text-3xl text-xl text-center text-[#747474]"
            data-aos="fade-up"
          >
            UPCOMING BIDDING
          </h3>
          <h1
            className="mb-20 lg:text-[70px] md:text-[40px] text-[35px] text-black font-semibold text-center leading-none"
            data-aos="fade-up"
          >
            Want to experience the intense fight between our bidders?
          </h1>

          {biddingInfo.map((item) => (
            <div
              key={item.id}
              className={
                item.id === 1
                  ? `py-10 px-24 w-full flex justify-between items-center border-2 border-gray-300 rounded-3xl shadow-gray-300 shadow-md md:mb-5 mb-4 text-white bg-[#003685]`
                  : `py-10 px-24 w-full flex justify-between items-center  border-2 border-gray-300 rounded-3xl shadow-gray-300 shadow-md md:mb-5 mb-4`
              }
              data-aos="fade-up"
            >
              <div className="flex flex-row">
                <BiSolidCalendar
                  className={
                    item.id !== 1
                      ? 'md:text-[70px] text-[#003685] mr-24'
                      : 'md:text-[70px] white mr-24'
                  }
                />
                <div
                  className={
                    item.id !== 1
                      ? `flex flex-col items-start gap-y-2 text-gray-700`
                      : `flex flex-col items-start gap-y-2 text-white`
                  }
                >
                  <h2 className="text-4xl font-medium ">
                    Bidding - {item.title}
                  </h2>
                  <h4 className="text-xl flex items-center gap-1">
                    {' '}
                    <AiOutlineClockCircle /> {item.start_time} - {item.end_time}
                  </h4>
                </div>
              </div>
              <button
                className={
                  item.id !== 1
                    ? `py-4 px-12 bg-[#003685] hover:bg-blue-700 text-white font-semibold text-xl rounded-full shadow-blue-200 shadow-xl transition ease-in`
                    : 'py-4 px-12 bg-white hover:bg-gray-100 text-[#003685] font-semibold text-xl rounded-full shadow-blue-800 shadow-xl transition ease-in'
                }
              >
                JOIN NOW
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BiddingSection;
