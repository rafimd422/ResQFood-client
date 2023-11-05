import React from 'react'
import Nav from './../../Sharable/Nav/Nav';
import Footer from './../../Sharable/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
<>
<Nav/>
<Outlet/>
<Footer />


</>
  )
}

export default Home
