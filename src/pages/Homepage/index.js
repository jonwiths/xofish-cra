import React from 'react';

import Hero from './Hero';
import BetaZone from './BetaZone';
import BiddingSection from './BiddingSection';
import ReviewsSection from './ReviewsSection';

const Homepage = () => {
  return (
    <>
      <Hero />
      <BetaZone />
      <BiddingSection />
      <ReviewsSection />
    </>
  );
};

export default Homepage;
