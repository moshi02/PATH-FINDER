/* eslint-disable no-unused-vars */
import React from 'react'
import Careers from "./pages/Careers/Careers"
import Navbar from './components/Navbar';
import Newscover from './components/Newscover';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      {/* inavbar disable krdena is neeeded */}
      <Navbar/>
      <Careers/>
      <Newscover />
      <Footer />
      
    </div>
  )
}

export default App
