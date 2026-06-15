//rafce shortcut to create react component
 //when use multiple line of html then we need to wrap it

 //do all render in this App.jsx, Hero.jsx and others components to
 //render in this jsx
import React from 'react'

import Hero from './Hero'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'

import './App.css'

const App = () => {
  return (

    <div className = "app-container">
      <Navbar/>
      <Hero/>
      <Home/>
      <Footer/>
      </div>

  )
}

export default App