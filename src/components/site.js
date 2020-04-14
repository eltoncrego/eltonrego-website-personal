import React from 'react';
import Nav from './nav/nav';
import Landing from './landing/landing';
import About from './about/about';

const Site = () => {
  return (
    <div>
      <Nav></Nav>
      <Landing nextSection='about'></Landing>
      <About></About>
    </div>
  );
};

export default Site;
