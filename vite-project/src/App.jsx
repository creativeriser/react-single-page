//rafce shortcut to create react component
 //when use multiple line of html then we need to wrap it

 //do all render in this App.jsx, Hero.jsx and others components to
 //render in this jsx
import React from 'react'


import Hero from './Hero'
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'

import Counter from './Counter'
import ToggleText from './ToggleText'
import LiveInput from './LiveInput'
import ColorBox from './ColorBox'
import ItemList from './ItemList'
import UserForm from './UserForm'

import './App.css'

const App = () => {
  return (
    <div className="app-container">
      <Navbar/>
      <Hero/>
      
      {/* Assignment Task Container */}
      <div className="task-grid">
        <Counter />
        <ToggleText />
        <LiveInput />
        <ColorBox />
        <ItemList />
        <UserForm />
      </div>

      <Home/>
      <Footer/>
    </div>
  )
}

export default App