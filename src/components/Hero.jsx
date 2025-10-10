import Reveal from "./Reveal";
import hero from "../assets/bg-hero.svg";
import logonff from "../assets/logo-nff.png";

export default function Hero() {
  return (
    <header
      aria-label="Hero - NFF Escola"
      className="relative w-full h-screen overflow-hidden"
    >
      {/* background image - você já ajustou o foco */}
      <img
        src={hero}
        alt="Hero NFF Escola"
        className={`
          absolute inset-0 w-full h-full object-cover
          object-[65%_center] sm:object-[60%_center] md:object-[50%_center] lg:object-[40%_center] xl:object-[50%_center]
          z-0 filter brightness-95
        `}
        style={{ opacity: 0.3 }}
      />

      {/* overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(183,88,65,0.30) 0%, rgba(0,0,0,0.36) 30%, rgba(49,45,43,0.22) 100%)",
        }}
      />

      {/* conteúdo */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="container mx-auto px-6 py-10 md:py-16 lg:py-24">
          {/* LIMITE de largura do bloco que controla texto + botão */}
          <div className="max-w-[12rem] sm:max-w-[15rem] md:max-w-[21rem] lg:max-w-[27rem]">
            <Reveal>
              <div className="flex flex-col items-start gap-4">
                <img
                  src={logonff}
                  alt="Logo NFF"
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                />

                <h1
                  className={`text-white font-nasal font-extrabold leading-tight tracking-tight text-left
                              text-[22px] sm:text-[27px] md:text-[38px] lg:text-[49px]`}
                >
                  O conhecimento <br />
                  abre portas <br />
                  para um{" "}
                  <span className="underline decoration-brand1 decoration-[3px] underline-offset-4">
                    futuro
                  </span>{" "}
                  <br />
                  <span className="underline decoration-brand1 decoration-[3px] underline-offset-4">
                    extraordinário.
                  </span>
                </h1>
              </div>
            </Reveal>

            {/* CTA alinhado à esquerda e com largura igual ao bloco de texto */}
            <div className="mt-4 w-full">
              <a
                href="#courses"
                className="btn btn-primary block mx-0 px-8 py-4 text-[12px] sm:text-[14px] md:text-[20px] lg:text-[22px] text-center"
                aria-label="Quero mudar meu futuro"
              >
                Quero mudar meu futuro
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* decorative bottom SVG */}
      <div className="absolute left-0 right-0 bottom-0 pointer-events-none z-20" aria-hidden="true">
        <svg viewBox="0 0 1440 60" className="w-full h-6" preserveAspectRatio="none">
          <path d="M0 30 C360 0, 1080 60, 1440 30 L1440 60 L0 60 Z" fill="rgba(0,0,0,0.16)" />
        </svg>
      </div>
    </header>
  );
}
