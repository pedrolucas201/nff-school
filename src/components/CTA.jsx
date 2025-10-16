// src/components/CTA.jsx
import React, { useEffect, useRef, useState } from "react";

/**
 * Props:
 * - open: boolean (define se é modal; se falso, renderiza inline)
 * - onClose: () => void
 * - initialCourse: string (opcional)
 * - whatsappNumber: string -> formato internacional, ex: "5581993259534"
 * - inline: boolean -> se true, renderiza dentro da página (sem backdrop)
 */
export default function CTA({
  open = false,
  onClose = () => {},
  initialCourse = "",
  whatsappNumber,
  inline = false,
}) {
  const [name, setName] = useState("");
  const [course, setCourse] = useState(initialCourse || "");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const firstInputRef = useRef(null);
  const dialogRef = useRef(null);

  const courseOptions = [
    "Educação Financeira Infantil",
    "Day Trader",
    "Mercado Financeiro",
  ];

  useEffect(() => setCourse(initialCourse || ""), [initialCourse]);

  useEffect(() => {
    if (!inline && open) {
      setTimeout(() => firstInputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open, inline]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape" && open && !inline) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, inline]);

  if (!inline && !open) return null;

  function onlyDigits(s = "") {
    return String(s).replace(/\D/g, "");
  }

  // Formata o número progressivamente para (DD) NNNNN-NNNN ou (DD) NNNN-NNNN
  function formatPhoneInput(value) {
    const d = onlyDigits(value);
    if (!d) return "";
    if (d.length <= 2) {
      return `(${d}`;
    }
    if (d.length <= 6) {
      // até 6 dígitos: (DD) NNNN...
      return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    }
    if (d.length <= 10) {
      // entre 7 e 10 dígitos: (DD) NNNN-NNNN
      return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    }
    // 11+ dígitos (normalmente celular com 9 dígitos): (DD) NNNNN-NNNN (corta no máximo 11)
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7, 11)}`;
  }

  // Handler que mantém máscara enquanto usuário digita
  function handlePhoneChange(e) {
    const raw = e.target.value;
    const formatted = formatPhoneInput(raw);
    setPhone(formatted);
  }

  function validate() {
    if (!name.trim()) return "Preencha seu nome.";
    if (!course.trim()) return "Selecione o curso.";
    if (!address.trim()) return "Preencha seu endereço.";
    if (!phone.trim()) return "Preencha seu WhatsApp (ex: 11 99999-9999).";
    const digits = onlyDigits(phone);
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

  const form = (
    <form onSubmit={onSubmit} className="mt-4 space-y-4" noValidate>
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
        {inline ? (
          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 text-black"
            required
          >
            <option value="">Selecione um curso</option>
            {courseOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        ) : (
          <input
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 text-black bg-gray-100 cursor-not-allowed"
            placeholder="Curso desejado"
            readOnly
            required
          />
        )}
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
          onChange={handlePhoneChange}
          className="mt-1 block w-full rounded-md border-gray-300 px-3 py-2 shadow-sm focus:ring-2 focus:ring-orange-400 text-black"
          placeholder="Ex: (81) 99325-9534"
          required
          inputMode="tel"
          maxLength={18} // suficiente para máscara "(DD) 99999-9999"
        />
        <p className="text-xs text-gray-500 mt-1 font-nasal">
          Sem espaços ou símbolos obrigatórios — aceitaremos formatos comuns.
        </p>
      </div>

      <div className="flex items-center justify-end gap-3 pt-2">
        {!inline && (
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-gray-300 text-sm font-nasal"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          disabled={submitting}
          className="btn btn-primary pulse text-sm font-medium disabled:opacity-60 font-nasal"
        >
          {submitting ? "Abrindo WhatsApp..." : "Enviar e abrir WhatsApp"}
        </button>
      </div>
    </form>
  );

  if (inline) {
    // Inline (mesma aparência do modal)
    return (
      <div className="bg-white dark:bg-[#1f1f1f] rounded-lg w-full max-w-xl mx-auto shadow-xl p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-nasal text-xl font-semibold">Quero entender mais</h3>
        </div>
        {form}
      </div>
    );
  }

  // Modal
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
          {form}
        </div>
      </div>
    </div>
  );
}
