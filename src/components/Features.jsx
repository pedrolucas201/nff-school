import React from 'react'
import Reveal from './Reveal'
import feat from '../assets/novo-patamar-nff.png'
export default function Features(){
  return (
    <section className="bg-black py-8">
      <Reveal>
      <div className="container py-6">
        <div className="grid md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2 text-white">
            <h3 className="text-2xl font-bold mb-3 font-nasal">Te levamos ao novo patamar</h3>
            <p className="text-white/90 max-w-2xl">Conteúdo prático, mentoria e sala de operações — aprenda com exemplos reais.</p>
          </div>
          <div className="md:col-span-1">
            <img src={feat} alt="Features" className="w-full rounded-lg shadow" loading="lazy" />
          </div>
        </div>
      </div>
      </Reveal>
    </section>
  )
}
