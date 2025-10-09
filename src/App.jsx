import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import CoursesGrid from './components/CoursesGrid'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Conhecimento from './components/Conhecimento'
import Section6 from './components/Section6'
import Section7 from './components/Section7'

export default function App(){
  return (
    <div className="min-h-screen text-white flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <Conhecimento />
        <CoursesGrid />
        <Section6 />
        <Section7 />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
