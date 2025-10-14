import React, { useState } from "react";
import Reveal from "./Reveal";
import bgsection from "../assets/bg-section7.svg";
import CTA from "./CTA";

export default function Section7({ whatsappNumber = "5581999999999" /* default */ }) {
  const [openModal, setOpenModal] = useState(false);
  const initialCourse = ""; // se quiser prefiltrar, coloca aqui ou passe por props

  return (
    <section
      id="section7"
      aria-label="Transforme a sua vida com a NFF Escola de Investimento"
      className="bg-cover bg-no-repeat bg-center py-10"
      style={{
        backgroundImage: `url(${bgsection})`,
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-20 sm:py-10 md:py-20 lg:py-28 px-4">
        {/* LADO ESQUERDO - TEXTO */}
        <Reveal>
          <div className="flex flex-col items-start text-white max-w-xl">
            <h1 className="font-nasal text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-4">
              O seu sucesso é o nosso sucesso
            </h1>

            <p className="font-mont text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
              <span className="font-bold font-mont">Preencha o formulário</span> e um de
              nossos vendedores entrará em contato com você.
            </p>

            {/* on mobile: abrir modal. on desktop the CTA inline will be visible */}
            <button
              onClick={() => setOpenModal(true)}
              className="w-full sm:w-auto transform transition-transform duration-200 hover:scale-105 bg-[#FF3B00] hover:bg-[#ff5722] text-white font-semibold px-6 py-3 rounded-tl-[20px] rounded-br-[20px] text-base sm:text-lg transition-all shadow-lg text-center"
              aria-expanded={openModal}
            >
              Irei mudar meu futuro
            </button>
          </div>
        </Reveal>

        {/* LADO DIREITO - FORMULÁRIO */}
        <div className="w-full lg:w-1/2 flex justify-center">
          {/* Show inline form only on lg and above. On smaller screens, the button opens modal */}
          <div className="hidden lg:block w-full">
            <CTA
              inline
              initialCourse={initialCourse}
              whatsappNumber={whatsappNumber}
              onClose={() => {
                /* inline close can clear or do nothing — para manter simples, não escondemos o inline */
              }}
            />
          </div>

          {/* Modal CTA (for mobile / when button clicked) */}
          <CTA
            open={openModal}
            onClose={() => setOpenModal(false)}
            initialCourse={initialCourse}
            whatsappNumber={whatsappNumber}
          />
        </div>
      </div>
    </section>
  );
}
