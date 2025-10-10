import React from "react";
import bgknowledge from "../assets/bg-knowledge.svg";

import iconEducacao from "../assets/icone-educacao-financeira.png";
import iconTrader from "../assets/icone-day-trader.png";
import iconCarteira from "../assets/icone-acompanhamento-de-investimentos.png";
import iconSala from "../assets/icone-sala-de-operacoes-ao-vivo.png";
import iconMentalidade from "../assets/icone-mentalidade-do-investidor.png";
import iconAnamnese from "../assets/icone-anamnese-financeira.png";
import iconContabilidade from "../assets/icone-contabilidade-para-investidores.png";
import iconCripto from "../assets/icone-criptomoedas.png";
import Reveal from "./Reveal";

const items = [
  { src: iconEducacao, label: "Educação Financeira" },
  { src: iconTrader, label: "Day Trader" },
  { src: iconCarteira, label: "Acompanhamento de Carteira de Investimentos" },
  { src: iconSala, label: "Sala de Operações ao vivo" },
  { src: iconMentalidade, label: "Mentalidade do Investidor" },
  { src: iconAnamnese, label: "Anamnese Financeira" },
  { src: iconContabilidade, label: "Contabilidade para Investidores" },
  { src: iconCripto, label: "Criptomoedas e Rastreador de Memecoins" },
];

export default function Conhecimento() {
  return (
    // bg branco em mobile, transparente quando a imagem aparecer (md+)
    <section
      id="conhecimento"
      className="relative w-full h-auto bg-white md:bg-transparent overflow-hidden"
    >
      {/* imagem de fundo: escondida em telas pequenas (mobile) */}
      <img
        src={bgknowledge}
        alt="Knowledge NFF Escola"
        className="hidden md:block absolute inset-0 w-full h-full object-cover pointer-events-none object-cover object-[10%_center] md:object-[10%_center] lg:object-[20%_center]"
        style={{ zIndex: 0 }}
        aria-hidden
      />

      {/* TINTA LARANJA SOBRE O BACKGROUND (leve) - z acima da imagem */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,110,30,0.06) 0%, rgba(255,110,30,0.18) 100%)",
          zIndex: 10,
        }}
      />

      {/* CONTEÚDO (sempre acima) */}
      <div className="relative z-30 max-w-7xl px-6 sm:px-10 py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* coluna esquerda: título + grade */}
          <div className="w-full lg:w-7/12">
            <div className="bg-transparent rounded-r-2xl py-2 lg:py-6 px-2 sm:px-4 lg:px-0">
              <h2 className="font-nasal text-center text-black text-[22px] sm:text-center sm:text-[30px] md:text-left lg:text-left lg:text-[40px] font-extrabold leading-tight mb-8">
                {/* primeira linha */}
                Desde o conhecimento
                {/* segunda linha forçada em todos os tamanhos; "estamos com você" em laranja */}
                <span className="block">
                  à ação{" "}
                  <span className="font-nasal text-[#ff5b2e]">
                    estamos com você
                  </span>
                </span>
              </h2>

              {/* GRID responsiva:
                  - mobile: 2 colunas
                  - sm: 3 colunas
                  - md+: 4 colunas (2 linhas x 4 itens)
              */}
              <Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-8 items-start">
                {items.map((it, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center w-full"
                  >
                    {/* box do ícone: usa tamanhos responsivos */}
                    <div
                      className="flex items-center justify-center bg-[#4b1f1f] rounded-tl-[20px] rounded-br-[20px] shadow-md
                                    w-20 h-20 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 transform transition-transform duration-200 hover:scale-105"
                    >
                      <img
                        src={it.src}
                        alt={it.label}
                        className="w-14 h-14 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain"
                      />
                    </div>

                    {/* label: permite quebra e centraliza */}
                    <span className="font-nasal mt-3 text-[12px] sm:text-[13px] md:text-sm leading-tight font-semibold text-black">
                      {it.label}
                    </span>
                  </div>
                ))}
              </div>
              </Reveal>
            </div>
          </div>

          {/* espaço direito para evitar sobreposição com ilustração */}
          <div className="hidden lg:block lg:flex-1" />
        </div>
      </div>

      {/* pequeno separador inferior, se preciso */}
      <div
        className="absolute left-0 right-0 bottom-0 h-8 pointer-events-none"
        style={{ zIndex: 15 }}
      />
    </section>
  );
}
