import React, { useState } from 'react'
import Reveal from './Reveal'
import CTA from './CTA' // <- certifique-se de ter criado esse componente (veja nota abaixo)

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

const WHATSAPP_NUMBER = '5581993259534' // <-- número que você pediu

export default function CoursesGrid(){
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('')

  function openForCourse(courseName) {
    setSelectedCourse(courseName)
    setModalOpen(true)
  }

  return (
    <>
      <section id="courses" className="py-12 bg-gradient-to-b from-[#7b0f0f] to-[#4a0a0a]">
        <div className="container text-center px-4">
          <h2 className="text-3xl font-bold mb-3 font-nasal">Transforme seus sonhos em realidade</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">Mais do que aulas, oferecemos um caminho para resultados concretos.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {courses.map((c, idx) => (
              <Reveal key={idx}>
                <article className="course-card h-full rounded-lg py-10 shadow-lg flex flex-col">
                  <div className="card-inner transform transition-transform duration-200 hover:scale-105 flex flex-col h-full">
                    <div className="card-media w-full flex-none flex items-center justify-center py-4 px-4">
                      <img
                        src={c.img1}
                        srcSet={c.img2 ? `${c.img2} 2x, ${c.img1} 1x` : undefined}
                        alt={c.title}
                        className="
                          max-w-full h-auto object-contain
                          max-h-[200px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[320px]
                          rounded-lg
                        "
                        loading="lazy"
                      />
                    </div>

                    {/* ===== CORPO DO CARD ===== */}
                    <div className="card-body p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-white text-xl font-semibold mb-2 leading-snug font-nasal pt-10">{c.title}</h3>
                        <p className="text-sm text-white/80 mb-4">Curso prático e objetivo.</p>
                      </div>

                      <div className="mt-4">
                        {/* botão agora abre o modal e passa o curso */}
                        <button
                          onClick={() => openForCourse(c.title)}
                          className="btn btn-primary text-sm"
                          aria-label={`Quero entender mais sobre ${c.title}`}
                        >
                          Quero entender mais
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de contato. initialCourse já vem preenchido com selectedCourse */}
      <CTA
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCourse={selectedCourse}
        whatsappNumber={WHATSAPP_NUMBER}
      />
    </>
  )
}
