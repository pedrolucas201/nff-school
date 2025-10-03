import React from 'react'
import Reveal from './Reveal'
import hero1 from '../assets/hero.png'
import hero2 from '../assets/hero.png'

export default function Hero(){
  return (
    <header className="relative hero-accent">
      <div className="bg-gradient-to-r from-[color:var(--brand2)] to-[color:var(--brand1)]">
        <div className="container flex flex-col md:flex-row items-center gap-8 py-16">
          {/* texto */}
          <div className="md:w-1/2 text-white">
            <Reveal>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight font-nasal">
                O conhecimento abre portas para um futuro extraordinário.
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-4 text-white/90">
                NFF Escola de Investimento — conteúdo prático e aplicável para todos os níveis.
              </p>
            </Reveal>

            <div className="mt-6 flex gap-3">
              <a href="#signup" className="btn btn-primary pulse">Quero estudar na NFF</a>
              <a href="#courses" className="btn btn-ghost">Ver cursos</a>
            </div>
          </div>

          {/* coluna da imagem — overflow-visible para a imagem extrapolar sem cortar */}
          <div className="md:w-1/2 relative overflow-visible flex justify-end items-center">
            {/* Reveal anima o bloco externo (pai do scale-wrapper).
                O scale acontece no filho (.scale-x-y) para compor transform sem conflito. */}
            <Reveal>
              <div>
                <div className="scale-x-y">
                  <img
                    src={hero1}
                    srcSet={`${hero2} 2x, ${hero1} 1x`}
                    alt="Ilustração herói - pessoa comemorando com notebook"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </header>
  )
}
