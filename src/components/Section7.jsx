// components/Section7.jsx
import React from "react";
import Reveal from "./Reveal";
import bgsection from "../assets/bg-section7.png";
import form from "../assets/form-page.png";

export default function Section7() {
  return (
    <section
      id="section7"
      aria-label="Transforme a sua vida com a NFF Escola de Investimento"
      className="bg-cover bg-no-repeat bg-center py-10 mt-[8px]"
      style={{
        backgroundImage: `url(${bgsection})`,
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 py-20 sm:py-10 md:py-20 lg:py-28">
        {/* LADO ESQUERDO - TEXTO */}
        <Reveal>
          <div className="flex flex-col items-start text-white max-w-xl px-4">
            <h1 className="font-nasal text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug mb-4">
              O seu sucesso é o nosso sucesso
            </h1>

            <p className="font-mont text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
              <span className="font-bold font-mont">Preencha o formulário</span> e um de
              nossos vendedores entrará em contato com você.
            </p>

            <a
              href="#courses"
              className="w-full transform transition-transform duration-200 hover:scale-105 bg-[#FF3B00] hover:bg-[#ff5722] text-white font-semibold px-6 py-3 rounded-tl-[20px] rounded-br-[20px] text-base sm:text-lg transition-all shadow-lg text-center"
            >
              Irei mudar meu futuro
            </a>
          </div>
        </Reveal>

        {/* LADO DIREITO - IMAGEM */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={form}
            alt="Formulário"
            className="w-[80%] sm:w-[70%] lg:w-[90%] max-w-[500px] bg-red p-4 rounded-2xl shadow-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
