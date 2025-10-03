import React from 'react'
import feat from '../assets/novo-patamar-nff.png'

export default function Features() {
  return (
    <section
      id="about"
      role="img"
      aria-label="Imagem de destaque da NFF Escola de Investimento"
      className="w-full bg-no-repeat bg-cover bg-center shadow-lg"
      style={{
        backgroundImage: `url('${feat}')`,
      }}
    >
      <div
        className="
          min-h-[22vh]    /* celular compacto */
          sm:min-h-[28vh] /* celular maior / landscape */
          md:min-h-[32vh] /* tablets */
          lg:min-h-[38vh] /* desktop pequeno */
          xl:min-h-[44vh] /* desktop grande */
          2xl:min-h-[48vh] /* telas muito grandes */
          mx-auto
          max-w-7xl   /* limita largura em telas grandes */
          my-8        /* adiciona espaçamento em cima/baixo */
          rounded-2xl /* deixa cantos arredondados no container */
        "
      />
    </section>
  )
}
