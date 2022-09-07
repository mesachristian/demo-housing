import React, { useLayoutEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Navbar from './navbar';
import Body from './body';
const WebPage = () => {

  return (
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Body />
      </Wrapper>
    </BrowserRouter>
  )
}

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

export default WebPage;