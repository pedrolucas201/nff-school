// components/HeroLarge.jsx
import React from 'react'
import Reveal from './Reveal'
import hero from '../assets/hero.png'

export default function HeroLarge() {
  return (
    <header
      aria-label="Hero - NFF Escola"
      className="relative"
      style={{
        backgroundImage:
          "linear-gradient(0deg, rgba(183, 88, 65, 0.75) 0%, rgba(219,57,21,0.60) 45%, rgba(49, 45, 43, 0.45) 100%), url('" +
          hero +
          "')",
        backgroundSize: 'cover',           
        backgroundPosition: 'right right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative container mx-auto px-6 py-12 md:py-20 lg:py-28">
        <div className="min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] flex items-center">
          <div className="w-full max-w-3xl">
            <Reveal>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white font-nasal">
                O conhecimento abre portas para um futuro extraordinário.
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-4 text-white/90 text-sm sm:text-base max-w-xl">
                NFF Escola de Investimento — conteúdo prático e aplicável para todos os níveis.
              </p>
            </Reveal>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#signup" className="btn btn-primary w-full sm:w-auto">Quero estudar na NFF</a>
              <a href="#courses" className="btn btn-ghost w-full sm:w-auto">Ver cursos</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 -bottom-1">
        <svg viewBox="0 0 1440 60" className="w-full h-6" preserveAspectRatio="none">
          <path d="M0 30 C360 0, 1080 60, 1440 30 L1440 60 L0 60 Z" fill="rgba(0,0,0,0.16)" />
        </svg>
      </div>
    </header>
  )
}
