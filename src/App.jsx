import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marqee from './components/Marqee'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
function App() {
  const locomotiveScroll=new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
      <Navbar/>
      <LandingPage/>
      <Marqee/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
