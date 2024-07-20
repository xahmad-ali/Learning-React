import React from 'react'
import Header from './Header';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';  //acts as Window to switch between the screens 

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout