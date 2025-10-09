import React, { useState } from "react";
import Reveal from "./Reveal";
import CTA from "./CTA";
import bgcourses from "../assets/bg-courses.png";

import t11 from "/src/assets/educacao-financeira-infantil.png";
import t12 from "/src/assets/educacao-financeira-infantil.png";
import t21 from "/src/assets/day-trader.png";
import t22 from "/src/assets/day-trader.png";
import t31 from "/src/assets/mercado-financeiro.png";
import t32 from "/src/assets/mercado-financeiro.png";

const courses = [
  {
    title: "Educação Financeira Infantil",
    img1: t11,
    img2: t12,
    desc: "Nosso curso ensina crianças, de forna divertida e prática, a lidar com dinheiro desde cedo.",
  },
  {
    title: "Day Trader",
    img1: t21,
    img2: t22,
    desc: "Aprenda um método próprio, simples e validado para operar no mercado. transforme o Day Trade em uma nova fonte renda com segurança e consistência",
  },
  {
    title: "Mercado Financeiro",
    img1: t31,
    img2: t32,
    desc: "Aprenda a investir seu dinheiro, montar sua carteira de investimentos e gerar dividendos de forma consistente. Torne-se um especialist nessa área e construa um futuro de segurança e liberdade financeira.",
  },
];

const WHATSAPP_NUMBER = "5581993259534";

export default function CoursesGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  function openForCourse(courseName) {
    setSelectedCourse(courseName);
    setModalOpen(true);
  }

  return (
    <>
      <section
        id="courses"
        className="py-12 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bgcourses})`,
        }}
      >
        <div className="container text-center px-4">
          <h2 className="text-3xl font-bold mb-3 font-nasal">
            Transforme seus sonhos em realidade
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Mais do que aulas, oferecemos um caminho para{" "}
            <span className="font-extrabold text-white block lg:inline">
              resultados concretos.
            </span>
          </p>

          {/* Grade principal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-10">
            {courses.map((c, idx) => {
              // detecta se é o último e o número de cursos é ímpar
              const isLast = courses.length % 2 !== 0 && idx === courses.length - 1;

              return (
                <Reveal key={idx} className={isLast ? "sm:col-span-2" : ""}>
                  {/* 🔽 Alteração mínima aqui */}
                  <article
                    className={`course-card h-full rounded-lg py-10 flex ${
                      isLast ? "mb-10 flex-col sm:flex-row items-center sm:items-stretch text-left rounded-lg shadow-lg" : "flex-col"
                    }`}
                  >
                    {/* imagem */}
                    <div
                      className={`card-media flex justify-center ${
                        isLast
                          ? "sm:w-1/2 items-center justify-center rounded-lg py-4 px-4"
                          : "w-full flex-none flex items-center justify-center py-4 px-4"
                      }`}
                    >
                      <img
                        src={c.img1}
                        srcSet={c.img2 ? `${c.img2} 2x, ${c.img1} 1x` : undefined}
                        alt={c.title}
                        className={`rounded-lg object-contain h-auto ${
                          isLast
                            ? "transform transition-transform duration-200 hover:scale-105 max-w-full max-h-[200px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[320px]"
                            : "transform transition-transform duration-200 hover:scale-105 max-w-full max-h-[200px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[320px]"
                        }`}
                        loading="lazy"
                      />
                    </div>

                    {/* texto */}
                    <div
                      className={`card-body p-6 flex-1 flex flex-col justify-between ${
                        isLast ? "sm:pl-10 sm:text-left text-center" : ""
                      }`}
                    >
                      <div>
                        <h3
                          className={`text-white text-xl font-semibold mb-2 leading-snug font-nasal ${
                            isLast ? "pt-14 sm:pt-0 md:pt-0 lg:pt-0 " : "pt-14"
                          }`}
                        >
                          {c.title}
                        </h3>
                        <p className="text-sm text-white/80 mb-4">{c.desc}</p>
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
                  </article>
                </Reveal>
              );
            })}
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
  );
}
