import React, { useState } from 'react'
import Reveal from './Reveal'

export default function CTA(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  async function handleSubmit(e){ e.preventDefault(); setStatus('sending'); try{ const res = await fetch('https://formspree.io/f/mayplkdo', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email})}); if(!res.ok) throw new Error('fail'); setStatus('success'); setEmail(''); }catch(err){ setStatus('error') } }
  return (
    <section id="signup" className="py-12 fade-up" aria-labelledby="signup-heading">
      <Reveal>
      <div className="container">
        <div className="bg-white/5 rounded-lg p-8 text-center">
          <h3 id="signup-heading" className="text-2xl font-bold mb-3 text-white font-nasal">Inscreva-se e receba nossa trilha de estudos</h3>
          <p className="text-white/80 mb-4">Material gratuito, atualizações e descontos exclusivos.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto form-inline gap-2" aria-label="Formulário de inscrição">
            <input type="email" required placeholder="seu@exemplo.com" value={email} onChange={e=>setEmail(e.target.value)} className="flex-1 p-3 rounded bg-white/5" />
            <button className="btn btn-primary" type="submit" style={{minWidth: '120px'}}>Quero receber</button>
          </form>
          {status==='success' && <p className="text-green-400 mt-4">Obrigado! Verifique seu e-mail.</p>}
          {status==='error' && <p className="text-red-400 mt-4">Erro ao enviar.</p>}
        </div>
      </div>
      </Reveal>
    </section>
  )
}
