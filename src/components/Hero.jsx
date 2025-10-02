import React from 'react'
import Reveal from './Reveal'
import hero1 from '../assets/hero.png'
import hero2 from '../assets/hero@2x.png'

export default function Hero(){
  return (
    <header className="relative pt-6 hero-accent">
      <div className="bg-gradient-to-r from-[color:var(--brand2)] to-[color:var(--brand1)]">
        <div className="container flex flex-col md:flex-row items-center gap-8 py-16">
          <div className="md:w-1/2 text-white">
            <Reveal><h1 className="text-3xl md:text-5xl font-extrabold leading-tight font-nasal">O conhecimento abre portas para um futuro extraordinário.</h1></Reveal>
            <Reveal><p className="mt-4 text-white/90">NFF Escola de Investimento — conteúdo prático e aplicável para todos os níveis.</p></Reveal>
            <div className="mt-6 flex gap-3">
              <a href="#signup" className="btn btn-primary pulse">Quero estudar na ANFF</a>
              <a href="#courses" className="btn btn-ghost">Ver cursos</a>
            </div>
          </div>
          <div className="md:w-1/2">
            <Reveal><img src={hero1} srcSet={`${hero2} 2x, ${hero1} 1x`} alt="Hero" className="w-full rounded-lg shadow-2xl object-cover" loading="lazy" /></Reveal>
          </div>
        </div>
      </div>
    </header>
  )
}
