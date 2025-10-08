import Reveal from './Reveal'
import hero from '../assets/SECTION 1 - com personagem.png'
import logonff from '../assets/logo-nff.png'


export default function Hero() {
  return (
    <header
      aria-label="Hero - NFF Escola"
      className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden"
    >
      <img
        src={hero}
        alt="Hero NFF Escola"
        className="w-full h-full object-cover object-[70%_center] md:object-[70%_center]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#b75841]/75 via-[#db3915]/60 to-[#312d2b]/45"></div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-6 py-12 md:py-20 lg:py-28">
          <div className="min-w-[16rem] w-[16rem] sm:w-full sm:max-w-[22rem] md:max-w-[22rem] lg:max-w-[28rem]">
            <Reveal>
              <div className="w-full h-24 rounded-full flex items-center justify-center font-bold bg-cover bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${logonff})`,
                }} />
              <h1 className="text-[29px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-extrabold leading-tight text-white font-nasal">
                O conhecimento abre portas para um futuro extraordinário.
              </h1>
            </Reveal>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#courses" className="btn btn-primary w-full sm:w-auto">Quero mudar meu futuro</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-0 right-0 bottom-0">
        <svg viewBox="0 0 1440 60" className="w-full h-6" preserveAspectRatio="none">
          <path d="M0 30 C360 0, 1080 60, 1440 30 L1440 60 L0 60 Z" fill="rgba(0,0,0,0.16)" />
        </svg>
      </div>
    </header>
  )
}
