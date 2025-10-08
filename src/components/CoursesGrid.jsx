import React, { useState } from 'react'
import Reveal from './Reveal'
import CTA from './CTA'
import bgcourses from '../assets/bg-courses.png'

import t11 from '/src/assets/educacao-financeira-infantil.png';
import t12 from '/src/assets/educacao-financeira-infantil.png';
import t21 from '/src/assets/day-trader.png';
import t22 from '/src/assets/day-trader.png';
import t31 from '/src/assets/mercado-financeiro.png';
import t32 from '/src/assets/mercado-financeiro.png';

const courses = [
  { title: 'Educação Financeira Infantil', img1: t11, img2: t12 },
  { title: 'Day Trader', img1: t21, img2: t22 },
  { title: 'Mercado Financeiro', img1: t31, img2: t32 },
]

const WHATSAPP_NUMBER = '5581993259534'

export default function CoursesGrid() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState('')

  function openForCourse(courseName) {
    setSelectedCourse(courseName)
    setModalOpen(true)
  }

  return (
    <>
      <section id="courses" className="py-12 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bgcourses})`,
        }}
      >
        <div className="container text-center px-4">
          <h2 className="text-3xl font-bold mb-3 font-nasal">Transforme seus sonhos em realidade</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">Mais do que aulas, oferecemos um caminho para resultados concretos.</p>

          {/* A grade principal continua com 2 colunas em telas maiores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-10">
            {courses.map((c, idx) => (

              // ===== A MÁGICA ACONTECE AQUI =====
              // Adicionamos uma classe condicional ao último item
              <Reveal
                key={idx}
                className={
                  // Se o número de cursos for ímpar E este for o último item...
                  courses.length % 2 !== 0 && idx === courses.length - 1
                    ? 'sm:col-span-2' // ...ele ocupa 2 colunas em telas 'sm' ou maiores
                    : ''
                }
              >
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

                    <div className="card-body p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-white text-xl font-semibold mb-2 leading-snug font-nasal pt-14">{c.title}</h3>
                        <p className="text-sm text-white/80 mb-4">Curso prático e objetivo.</p>
                      </div>

                      <div className="mt-4">
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

      <CTA
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCourse={selectedCourse}
        whatsappNumber={WHATSAPP_NUMBER}
      />
    </>
  )
}