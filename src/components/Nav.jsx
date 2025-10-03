import React, { useState, useEffect } from 'react';

export default function Nav(){
  const [open, setOpen] = useState(false);
  useEffect(() => { if (open) { document.body.style.overflow = 'hidden'; } else { document.body.style.overflow = ''; } return () => { document.body.style.overflow = ''; } }, [open]);
  function handleLinkClick() { setOpen(false); }
  return (
    <nav className="inset-x-0 top-0 z-50 w-full bg-black">
      <div className="container flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[color:var(--brand2)] flex items-center justify-center font-bold">NFF</div>
          <span className="font-semibold">NFF Escola</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <a href="#courses" className="text-sm" onClick={handleLinkClick}>Cursos</a>
          <a href="#about" className="text-sm" onClick={handleLinkClick}>Sobre</a>
          <a href="#contact" className="text-sm" onClick={handleLinkClick}>Contato</a>
          <a href="#signup" className="btn btn-primary">Quero Acessar</a>
        </div>
        <div className="md:hidden">
          <button aria-label="Abrir menu" onClick={() => setOpen(v => !v)} className="p-2 rounded-md btn-ghost">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div aria-hidden={!open} className={`fixed inset-0 z-40 ${open ? 'opacity-100' : 'pointer-events-none opacity-0' }`}>
        <div className={`absolute inset-0 bg-black/60 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setOpen(false)}></div>
        <div className={`absolute top-0 right-0 w-11/12 max-w-xs h-full bg-gradient-to-b from-black/80 to-black/90 p-6 transform transition-all ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[color:var(--brand2)] flex items-center justify-center font-bold">AN</div>
              <span className="font-semibold">ANFF Escola</span>
            </div>
            <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="p-2 rounded-md btn-ghost">✕</button>
          </div>
          <nav className="flex flex-col gap-4">
            <a href="#courses" onClick={handleLinkClick} className="text-lg">Cursos</a>
            <a href="#about" onClick={handleLinkClick} className="text-lg">Sobre</a>
            <a href="#contact" onClick={handleLinkClick} className="text-lg">Contato</a>
            <a href="#signup" onClick={handleLinkClick} className="btn btn-primary mt-4">Quero Acessar</a>
          </nav>
        </div>
      </div>
    </nav>
  )
}
