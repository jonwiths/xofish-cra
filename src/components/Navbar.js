import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillTelephoneFill } from 'react-icons/bs';

const navLinks = [
  {
    name: 'Home',
    url: '/'
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
  },
  {
    name: 'About Us',
    url: '/about-us'
  }
];

const Navbar = () => {
  return (
    <>
      <nav className="p-4 mt-7">
        <div className="container w-full mx-auto flex justify-between items-center">
          <Link
            to="/"
            className="font-poppins text-4xl text-[#194D93] font-medium "
          >
            Xofish
          </Link>

          <ul className="font-poppins  flex items-center justify-center md:gap-14 flex-1 ">
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
              className="font-poppins font-semibold py-2 px-6 flex  gap-2 items-center justify-center text-[#007FFE] border-2 border-[#007FFE] rounded-xl hover:bg-[#007FFE] hover:text-gray-100"
            >
              <BsFillTelephoneFill size={'18px'} />
              <h2 className="text-xl font-medium">Contact Us</h2>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
