import React from 'react'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Testimonials from './components/Testimonials/Testimonials'
import Contect from './components/Contect/Contect'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Navbar/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contect/>
      <Footer/>
    </>
  )
}

export default App
