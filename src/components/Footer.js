import React from 'react';
import { Link } from 'react-router-dom';

const links = [
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

const Footer = () => {
  return (
    <>
      <footer className="py-28  bg-[#00193D] font-poppins">
        <div className="p-4 container mx-auto flex lg:flex-row flex-col items-center justify-between lg:gap-0 gap-6">
          <h1 className="font-poppins text-4xl text-[#FFF] font-medium">
            Xofish
          </h1>
          <ul className="flex lg:flex-row flex-col items-center lg:gap-x-7 gap-x-4 lg:gap-y-0 gap-y-2 ">
            {links.map((item) => (
              <li
                key={item.name}
                className="text-lg font-medium text-white hover:underline"
              >
                <Link to={item.url}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <h3 className="text-[#A0A0A0] text-lg  text-center">
            Year Created @ 2023 |&nbsp;
            <a
              href="!#"
              rel="noopenner norefferer"
              target="_blank"
              className="hover:underline"
            >
              Xofish All rights reserved
            </a>{' '}
          </h3>
        </div>
      </footer>
    </>
  );
};

export default Footer;
