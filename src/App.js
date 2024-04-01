import React from 'react'
import Navbar from './components/Headers/Navbar'
import Background from './components/Background/Background'
import Profile from './components/pages/Profile'
import About from './components/pages/About'
import Campus from './components/pages/Campus'
import Contact from './components/pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <Profile />
      <About />
      <Campus/>
      <Contact/>
    </div>
  )
}

export default App