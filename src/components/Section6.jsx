// components/About.jsx
import React from "react";
import Reveal from "./Reveal";
import bgsection from "../assets/bg-section6.svg";

export default function Section6() {
  return (
    <section
      id="Section6"
      aria-label="Transforme a sua vida com a NFF Escola de Investimento"
      className="w-full bg-cover bg-no-repeat bg-right py-20 mt-[8px]"
      style={{
        backgroundImage: `url(${bgsection})`,
      }}
    >
      <div className="container mx-auto py-20 sm:py-20 md:py-28 lg:py-40">
        <Reveal>
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
            <div className="w-[300px] sm:w-2/3 md:w-2/3 lg:w-2/3 text-white">
              <h1 className="font-nasal text-white text-2xl sm:text-3xl md:text-3xl lg:text-3xl max-w-3xl leading-relaxed font-extrabold text-wrap break-words">
                Transforme sua vida financeira:{" "}
                <span className="font-mont text-2xl sm:text-3xl md:text-3xl lg:text-3xl max-w-2xl leading-relaxed text-wrap font-normal">
                  e entenda a como gerar nova renda com nosso{" "}
                </span>
                metódo único de Day Trader de forma consistente.
              </h1>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
