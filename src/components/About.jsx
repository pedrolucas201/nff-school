import React from 'react'
import Reveal from './Reveal'
import about from '../assets/about1.png'

export default function About(){
  return (
    <section id="about" className="py-10 bg-gray-50/5">
      <Reveal>
      <div className="container flex flex-col md:flex-row items-center gap-6 py-6">
        <div className="md:w-2/3 text-white">
          <h2 className="text-2xl font-bold mb-3 font-nasal">O que somos?</h2>
          <p className="text-white/90 max-w-2xl">A NFF Escola de Investimento nasceu com propósito de democratizar a educação financeira no Brasil, oferecendo conteúdos práticos e aplicáveis para todos os perfis de investidor.</p>
        </div>
        <div className="md:w-1/3">
          <img src={about} alt="Sobre" className="w-full rounded-lg shadow" loading="lazy" />
        </div>
      </div>
      </Reveal>
    </section>
  )
}