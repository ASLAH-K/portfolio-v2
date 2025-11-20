import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialBar from './components/SocialBar'

export default function App(){
  const [theme, setTheme] = useState(()=> localStorage.getItem('theme') || 'dark')
  useEffect(()=>{
    if(theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <div className="min-h-screen text-slate-100">
      <SocialBar />
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="container">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
