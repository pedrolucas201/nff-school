import section from '../assets/bg-features.png'
import man from '../assets/feat-man.png'

import iconbolsa from '../assets/bolsa-de-valores-icon.png'
import icontrader from '../assets/day-trader-icon.png'
import iconmentalidade from '../assets/mentalidade-icon.png'

export default function Features() {
  return (
    <section
      id="features"
      aria-label="Imagem de destaque da NFF Escola de Investimento"
      className="relative w-full overflow-hidden "
      style={{
        backgroundImage: `url('${section}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-[rgba(255,110,30,0.2)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-[14px]">

          <div className="w-full lg:w-5/12">
            <div className="mx-auto max-w-md lg:max-w-full">
              <div className="z-20 rounded-2xl">
                <img
                  src={man}
                  alt="Pessoa sorrindo"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div
              className="h-full relative lg:-ml-8 lg:pl-8 z-20 bg-gradient-to-r from-[rgba(255,140,60,0.95)] to-[rgba(255,110,30,0.88)] backdrop-blur-sm rounded-r-2xl py-10 px-6 sm:px-10 shadow-xl flex flex-col items-center text-white"
              role="group"
              aria-label="Serviços oferecidos"
            >
              <h2 className="font-nasal text-center text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-8">
                Te levamos ao novo patamar
              </h2>

              <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex flex-col items-center text-center space-y-3 flex-1">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img src={iconmentalidade} alt="Ícone mentalidade" className="w-20 h-20 object-contain" />
                  </div>
                  <span className="font-nasal text-sm sm:text-base font-semibold">Mentalidade</span>
                </div>

                <div className="flex flex-col items-center text-center space-y-3 flex-1">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img src={iconbolsa} alt="Ícone bolsa de valores" className="w-20 h-20 object-contain" />
                  </div>
                  <span className="font-nasal text-sm sm:text-base font-semibold">Bolsa de Valores</span>
                </div>

                <div className="flex flex-col items-center text-center space-y-3 flex-1">
                  <div className="w-20 h-20 flex items-center justify-center">
                    <img src={icontrader} alt="Ícone day trader" className="w-20 h-20 object-contain" />
                  </div>
                  <span className="font-nasal text-sm sm:text-base font-semibold">Day Trader</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
