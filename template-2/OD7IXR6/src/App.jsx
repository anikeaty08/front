import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
    lucide.createIcons();

    // Animation keyframes
    document.querySelectorAll('.animate-fade-in').forEach((el, idx) => {
      el.style.opacity = 0;
      setTimeout(() => {
        el.style.transition = 'opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
        el.style.opacity = 1;
      }, idx * 80 + 150);
    });
    document.querySelectorAll('.animate-slide-up-fade').forEach((el, idx) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(24px) scale(.97)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1)';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0) scale(1)';
      }, idx * 80 + 200);
    });

    // Form validation & button activation
    function validateForm() {
      const nome = document.getElementById('nome').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const cidade = document.getElementById('cidade').value.trim();
      const telPattern = /^\d{10,11}$/;
      const isFilled = nome.length > 1 && telPattern.test(telefone) && cidade.length > 1;
      document.getElementById('whatsappButton').disabled = !isFilled;
    }

    // WhatsApp redirect with filled info
    function redirectWhatsapp() {
      const nome = encodeURIComponent(document.getElementById('nome').value.trim());
      const telefone = encodeURIComponent(document.getElementById('telefone').value.trim());
      const cidade = encodeURIComponent(document.getElementById('cidade').value.trim());
      const base = 'https://api.whatsapp.com/send/?phone=5531985167248&text=';
      const msg = `Olá, vim pelo site e gostaria de mais informações.%0a%0aNome: ${nome}%0aWhatsApp: ${telefone}%0aCidade: ${cidade}`;
      window.open(`${base}${msg}&type=phone_number&app_absent=0`, '_blank');
    }

    // Close popup
    function closePopup() {
      // Fade out for smooth UX
      document.body.querySelector('.fixed.inset-0.bg-black\\/60').style.opacity = 0;
      document.body.querySelector('.fixed.z-30').style.opacity = 0;
      setTimeout(() => {
        document.body.innerHTML = '';
      }, 400);
    }

    // Enter key submits if all valid
    document.getElementById('solarForm').addEventListener('keydown', function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        if (!document.getElementById('whatsappButton').disabled) redirectWhatsapp();
      }
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 animate-fade-in" style={{animationDelay: `0ms`, opacity: `1`, transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`}}></div>

<div className="fixed z-30 inset-0 flex items-center justify-center">
<div className="max-w-md w-full relative flex flex-col gap-6 animate-slide-up-fade bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-sky-200 to-blue-700 border-neutral-800 border rounded-2xl mr-4 ml-4 pt-8 pr-8 pb-8 pl-8 shadow-2xl" style={{animationDelay: `120ms`, animationDuration: `600ms`, opacity: `1`, transform: `translateY(0px) scale(1)`, transition: `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`}}>

<button aria-label="Fechar formulário" className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-800 focus:outline-none transition-colors" onClick={(e) => { closePopup() }} style={{animationDelay: `180ms`}}>
<svg className="lucide lucide-x w-5 h-5 text-neutral-400" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<h2 className="md:text-3xl animate-fade-in text-2xl font-semibold text-white tracking-tight mb-1" style={{animationDelay: `200ms`, opacity: `1`, transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`}}>Receba seu orçamento gratuito em minutos</h2>
<form className="flex flex-col gap-5 animate-fade-in" id="solarForm" style={{animationDelay: `300ms`, opacity: `1`, transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`}}>

<div className="flex flex-col gap-2">
<label className="text-sm font-bold text-slate-50 shadow" htmlFor="nome">Nome</label>
<input autocomplete="name" className="focus:border-emerald-400 outline-none transition-all placeholder-neutral-500 text-base font-normal text-neutral-100 bg-slate-50 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="nome" name="nome" onInput={(e) => { validateForm() }} placeholder="Digite o seu nome" required type="text" />
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-50" htmlFor="telefone">Telefone / WhatsApp</label>
<input autocomplete="tel" className="focus:border-emerald-400 outline-none transition-all placeholder-neutral-500 text-base font-normal text-neutral-100 bg-slate-50 border-neutral-700 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="telefone" maxlength="11" name="telefone" onInput={(e) => { validateForm() }} pattern="^\d{10,11}$" placeholder="DDD+ número" required type="tel" />
</div>

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-50" htmlFor="cidade">Cidade</label>
<input autocomplete="address-level2" className="focus:border-emerald-400 outline-none transition-all placeholder-neutral-500 text-base font-normal text-neutral-100 bg-slate-50 border-neutral-700 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="cidade" name="cidade" onInput={(e) => { validateForm() }} placeholder="Sua cidade" required type="text" />
</div>
<div className="h-px bg-neutral-800 my-2"></div>

<button className="flex items-center justify-center gap-3 w-full bg-emerald-500 hover:bg-emerald-600 transition-colors text-white font-semibold text-base px-4 py-3 rounded-xl focus:outline-none shadow-xl hover:shadow-emerald-900/30 disabled:opacity-50 disabled:cursor-not-allowed outline outline-0 hover:outline-2 hover:outline-emerald-400/40 animate-fade-in" disabled id="whatsappButton" onClick={(e) => { redirectWhatsapp() }} style={{animationDelay: `350ms`, opacity: `1`, transition: `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)`}} type="button">
<i className="w-5 h-5" data-lucide="whatsapp"></i>
          Fale com um especialista agora
        </button>
</form>
</div>
</div>



    </>
  );
}
