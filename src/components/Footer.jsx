import React from 'react'
import Reveal from './Reveal'
export default function Footer(){
  return (
    <Reveal>
    <footer className="bg-black text-gray-300 py-8">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} NFF Escola — Todos os direitos reservados</p>
        <nav className="flex gap-4">
          <a className="text-sm" href="#">Privacidade</a>
          <a className="text-sm" href="#">Termos</a>
        </nav>
      </div>
    </footer>
    </Reveal>
  )
}
