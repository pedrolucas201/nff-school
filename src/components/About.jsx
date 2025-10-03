// components/About.jsx
import React from 'react'
import Reveal from './Reveal'

export default function About() {
  return (
    <section
      id="about"
      aria-label="Sobre a NFF Escola de Investimento"
      className="w-full bg-[#817D75]"
    >
      <div className="container mx-auto py-8 sm:py-10 md:py-12 lg:py-14">
        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-start gap-6">
            <div className="w-full lg:w-2/3 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-3 font-nasal">
                O que somos?
              </h2>

              <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
                A NFF Escola de Investimento nasceu com propósito de democratizar a educação
                financeira no Brasil, oferecendo conteúdos práticos e aplicáveis para todos os
                perfis de investidor.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
