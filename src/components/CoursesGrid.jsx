import React from 'react'
import Reveal from './Reveal'
import t11 from '/src/assets/educacao-financeira.png';
import t12 from '/src/assets/educacao-financeira.png';
import t21 from '/src/assets/day-trader.png';
import t22 from '/src/assets/day-trader.png';
import t31 from '/src/assets/carteira-investimentos.png';
import t32 from '/src/assets/carteira-investimentos.png';
import t41 from '/src/assets/sala-de-operacoes.png';
import t42 from '/src/assets/sala-de-operacoes.png';
import t51 from '/src/assets/mentalidade-investidor.png';
import t52 from '/src/assets/mentalidade-investidor.png';
import t61 from '/src/assets/anamnese-financeira.png';
import t62 from '/src/assets/anamnese-financeira.png';
import t71 from '/src/assets/contabilidade-para-investidores.png';
import t72 from '/src/assets/contabilidade-para-investidores.png';
import t81 from '/src/assets/criptomoedas.png';
import t82 from '/src/assets/criptomoedas.png';

const courses = [
  { title: 'Educação Financeira', img1: t11, img2: t12 },
  { title: 'Day Trader', img1: t21, img2: t22 },
  { title: 'Acompanhamento de Carteira de Investimentos', img1: t31, img2: t32 },
  { title: 'Sala de Operações ao vivo', img1: t41, img2: t42 },
  { title: 'Mentalidade do Investidor', img1: t51, img2: t52 },
  { title: 'Anamnese Financeira', img1: t61, img2: t62 },
  { title: 'Contabilidade para Investidores', img1: t71, img2: t72 },
  { title: 'Criptomoedas e Rastreador de Memecoins', img1: t81, img2: t82 }
]

export default function CoursesGrid(){
  return (
    <section id="courses" className="py-12 bg-gradient-to-b from-[#7b0f0f] to-[#4a0a0a]">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-3 font-nasal">Transforme seus sonhos em realidade</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-6">Mais do que aulas, oferecemos um caminho para resultados concretos.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((c, idx) => (
            <Reveal key={idx}>
              <article className="course-card bg-white/5 rounded-lg overflow-hidden shadow hover:scale-105 transition-transform">
                <div className="card-media bg-black/30">
                  <img
                    src={c.img1}
                    srcSet={c.img2 ? `${c.img2} 2x, ${c.img1} 1x` : undefined}
                    alt={c.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="card-body text-left">
                  <h3 className="text-white font-semibold mb-2 line-clamp-2">{c.title}</h3>
                  <p className="text-sm text-white/80 mb-3">Curso prático e objetivo.</p>

                  <div className="card-cta">
                    <a href="#signup" className="btn btn-primary text-sm">Saiba mais</a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
