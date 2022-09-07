import React from 'react';
import './styles.css';

import {
  Home,
  About,
  Contact,
  Marketplace,
  SearchSection,
  HouseInfoSection,
  Register,
  Login
} from './components';
import { Route, Routes } from 'react-router-dom';

const Body = ( ) => {
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='marketplace' element={<Marketplace/>}>
        <Route path='' element={<SearchSection/>}/>
        <Route path='listings/:houseId' element={<HouseInfoSection/>}/>
      </Route>
      <Route path='sign-up' element={<Register/>}/>
      <Route path='sign-in' element={<Login/>}/>
    </Routes>
  )
}

export default Body;