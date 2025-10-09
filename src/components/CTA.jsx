// src/components/CTA.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Props:
 * - open: boolean
 * - onClose: () => void
 * - initialCourse: string (optional) -> prefills curso field
 * - whatsappNumber: string -> destination number in international format WITHOUT "+" or separators, ex: "5581993259534"
 */
export default function CTA({ open, onClose, initialCourse = "", whatsappNumber }) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState(initialCourse || "");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const firstInputRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => setCourse(initialCourse || ""), [initialCourse]);

  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  function validate() {
    if (!name.trim()) return "Preencha seu nome.";
    if (!course.trim()) return "Selecione/insira o curso.";
    if (!address.trim()) return "Preencha seu endereço.";
    if (!phone.trim()) return "Preencha seu WhatsApp (ex: 11999998888).";
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 8) return "Número de WhatsApp inválido.";
    return null;
  }

  function buildMessage() {
    return (
      `Olá! Tenho interesse em um curso.\n\n` +
      `Nome: ${name}\n` +
      `Curso: ${course}\n` +
      `Endereço: ${address}\n` +
      `WhatsApp do cliente: ${phone}\n\n` +
      `Origem: Site NFF`
    );
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (submitting) return;
    const err = validate();
    if (err) {
      alert(err);
      return;
    }

    setSubmitting(true);
    try {
      const message = buildMessage();
      const encoded = encodeURIComponent(message);
      const target = String(whatsappNumber || "").replace(/\D/g, "");
      if (!target) {
        alert("Número do WhatsApp de atendimento não configurado.");
        setSubmitting(false);
        return;
      }

      const url = `https://wa.me/${target}?text=${encoded}`;
      window.open(url, "_blank");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Erro ao processar. Tente novamente.");
    } finally {
      setSubmitting(false);
    }
  }

  function onBackdropClick(e) {
    if (e.target === dialogRef.current) onClose();
  }

  return (
    <div
      ref={dialogRef}
      onMouseDown={onBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      aria-modal="true"
      role="dialog"
      aria-labelledby="cta-modal-title"
    >
      <div className="bg-white dark:bg-[#1f1f1f] rounded-lg w-full max-w-xl mx-auto shadow-xl overflow-hidden">
        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 id="cta-modal-title" className="font-nasal text-xl font-semibold">
              Quero entender mais
            </h3>
            <button
              onClick={onClose}
              aria-label="Fechar"
              className="text-gray-600 hover:text-gray-800"
            >
              ✕
            </button>
          </div>

          <form onSubmit={onSubmit} className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 font-nasal">Nome</label>
              <input
                ref={firstInputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 text-black"
                placeholder="Seu nome completo"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 font-nasal">Curso</label>
              <input
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 text-black bg-gray-100 cursor-not-allowed"
                placeholder="Curso desejado"
                readOnly
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 font-nasal">Endereço</label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 text-black"
                placeholder="Rua, número, bairro, cidade"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 font-nasal">WhatsApp (do cliente)</label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 text-black"
                placeholder="Ex: 11999998888 (com DDD)"
                required
              />
              <p className="text-xs text-gray-500 mt-1 font-nasal">Sem espaços ou símbolos obrigatórios — aceitaremos formatos comuns.</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-md border border-gray-300 text-sm font-nasal"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="px-4 py-2 rounded-md bg-orange-600 text-white text-sm font-medium hover:bg-orange-700 disabled:opacity-60 font-nasal"
              >
                {submitting ? "Abrindo WhatsApp..." : "Enviar e abrir WhatsApp"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
