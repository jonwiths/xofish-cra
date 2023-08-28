import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { GrClose } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';

const navLinks = [
  {
    name: 'Home',
    url: '/'
  },
  {
    name: 'About Us',
    url: '/about-us'
  },
  {
    name: 'Fish',
    url: '/fish'
  },
  {
    name: 'Services',
    url: '/services'
  },
  {
    name: 'Shop',
    url: '/shop'
  }
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <nav className="p-4 mt-7">
        <div className="container w-full mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="font-poppins lg:text-4xl text-3xl text-[#194D93] font-medium "
          >
            Xofish
          </Link>

          <ul className="font-poppins hidden lg:flex items-center justify-center md:gap-14 flex-1  ">
            {navLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.url}
                  className="navbar-link text-[#454868] hover:text-[#194D93]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="">
            <Link
              to="/contact-us"
              className="hidden lg:flex font-poppins font-semibold py-2 px-6   gap-2 items-center justify-center text-[#007FFE] border-2 border-[#007FFE] rounded-xl hover:bg-[#007FFE] hover:text-gray-100"
            >
              <BsFillTelephoneFill size={'18px'} />
              <h2 className="text-xl font-medium">Contact Us</h2>
            </Link>
          </div>

          <div className="lg:hidden block">
            <IoMenu
              className="w-[35px] h-[35px] text-gray-700"
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          </div>
        </div>
      </nav>
      {isNavOpen && (
        <div className="fixed top-0 left-0 w-full p-4 shadow-md pt-11  z-50 bg-white overflow-hidden transition-all ease-in-out">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-poppins  text-3xl text-[#194D93] font-medium "
            >
              Xofish
            </Link>
            <GrClose
              className="w-[25px] h-[25px] text-gray-700"
              onClick={() => setIsNavOpen(!isNavOpen)}
            />
          </div>
          <div className="">
            <ul className="mt-10 w-full font-poppins font-semibold flex flex-col items-center  gap-4 flex-1  ">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.url}
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className="p-4  text-xl text-[#454868] hover:text-[#194D93]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <Link
              to="/contact-us"
              onClick={() => setIsNavOpen(!isNavOpen)}
              className="flex font-poppins font-semibold py-2 px-6   gap-2 items-center justify-center text-[#007FFE] border-2 border-[#007FFE] rounded-xl hover:bg-[#007FFE] hover:text-gray-100"
            >
              <BsFillTelephoneFill size={'18px'} />
              <h2 className="text-xl font-medium">Contact Us</h2>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
