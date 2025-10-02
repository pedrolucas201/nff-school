import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import CoursesGrid from './components/CoursesGrid'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen text-white flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <CoursesGrid />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
