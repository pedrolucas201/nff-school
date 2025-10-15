import Reveal from "./Reveal";
import hero from "../assets/bg-hero.png";
import logonff from "../assets/logo-nff.png";

export default function Hero() {
  return (
    <header
      aria-label="Hero - NFF Escola"
      className="relative w-full h-screen overflow-hidden"
    >
      <img
        src={hero}
        alt="Hero NFF Escola"
        className="absolute inset-0 w-full h-full object-cover object-[65%_center] sm:object-[60%_center] md:object-[60%_center] lg:object-[70%_center] xl:object-[50%_center] z-0 filter brightness-95"
        style={{ opacity: 0.3 }}
      />

      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(183,88,65,0.30) 0%, rgba(0,0,0,0.36) 30%, rgba(49,45,43,0.22) 100%)",
        }}
      />

      {/* conteúdo */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="container mx-auto px-6 flex flex-col items-center text-left sm:items-start sm:text-left">
          <Reveal>
            <img
              src={logonff}
              alt="Logo NFF"
              className="h-28 sm:h-32 md:h-36 lg:h-40 w-auto object-contain mb-4"
            />

            <h1
              className={`text-white font-nasal font-extrabold leading-tight tracking-tight whitespace-pre-line
                          text-[40px] sm:text-[36px] md:text-[44px] lg:text-[52px]`}
            >
              O conhecimento{"\n"}
              abre portas{"\n"}
              para um{" "}
              <span className="underline decoration-brand1 decoration-[3px] underline-offset-4">
                futuro
              </span>
              {"\n"}
              <span className="underline decoration-brand1 decoration-[3px] underline-offset-4">
                extraordinário.
              </span>
            </h1>
          </Reveal>

          <a
            href="#section7"
            className="w-[340px] sm:w-[300px] md:w-[365px] lg:w-[440px] mt-6 btn btn-primary px-10 py-4 text-[15px] sm:text-[17px] md:text-[20px] lg:text-[22px]"
          >
            Quero mudar meu futuro
          </a>
        </div>
      </div>
    </header>
  );
}
