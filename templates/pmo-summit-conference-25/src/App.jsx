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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function () {
      const overlay = document.getElementById('modal-overlay');
      const openers = document.querySelectorAll('[data-open-modal="true"]');
      const closers = document.querySelectorAll('[data-close-modal="true"]');

      let lastFocused = null;

      function openModal() {
        lastFocused = document.activeElement;
        overlay.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');

        const closeBtn = overlay.querySelector('[data-close-modal="true"][aria-label="Fechar"]');
        if (closeBtn) closeBtn.focus();
      }

      function closeModal() {
        overlay.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
      }

      openers.forEach(btn => btn.addEventListener('click', openModal));
      closers.forEach(btn => btn.addEventListener('click', closeModal));

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !overlay.classList.contains('hidden')) closeModal();
      });

      // FAQ accordion (single-open)
      const items = Array.from(document.querySelectorAll('#faq-accordion .faq-item'));
      items.forEach((item) => {
        const trigger = item.querySelector('.faq-trigger');
        const panel = item.querySelector('.faq-panel');
        const icon = item.querySelector('.faq-icon iconify-icon');

        function setOpen(isOpen) {
          trigger.setAttribute('aria-expanded', String(isOpen));
          panel.classList.toggle('grid-rows-[1fr]', isOpen);
          panel.classList.toggle('grid-rows-[0fr]', !isOpen);
          if (icon) icon.setAttribute('icon', isOpen ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear');
        }

        setOpen(false);

        trigger.addEventListener('click', () => {
          const isOpen = trigger.getAttribute('aria-expanded') === 'true';
          items.forEach((other) => {
            const t = other.querySelector('.faq-trigger');
            const p = other.querySelector('.faq-panel');
            const ic = other.querySelector('.faq-icon iconify-icon');
            const open = other === item ? !isOpen : false;
            t.setAttribute('aria-expanded', String(open));
            p.classList.toggle('grid-rows-[1fr]', open);
            p.classList.toggle('grid-rows-[0fr]', !open);
            if (ic) ic.setAttribute('icon', open ? 'solar:alt-arrow-up-linear' : 'solar:alt-arrow-down-linear');
          });
        });
      });
    })();
  
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
      

<div className="w-full border-b border-white/10 bg-black/10" id="top-bar">
<div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-2">
<p className="text-[0.6875rem] sm:text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">
        EXCLUSIVO PARA PMO LEADERS, HEADS, MANAGER E DIRECTORS
      </p>
</div>
</div>

<header className="relative overflow-hidden" id="hero">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[28rem] w-[28rem] sm:h-[34rem] sm:w-[34rem] rounded-full bg-[#2563EB]/20 blur-3xl"></div>
<div className="absolute -bottom-24 right-[-6rem] h-[20rem] w-[20rem] sm:h-[26rem] sm:w-[26rem] rounded-full bg-[#2563EB]/10 blur-3xl"></div>
</div>
<div className="relative mx-auto max-w-[1120px] px-4 sm:px-6 pt-10 sm:pt-14 pb-12 sm:pb-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

<div className="space-y-6">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            Antonio Nieto-Rodriguez: A Maior Autoridade Global em PMO Revela o Que Vem Depois do Ágil
          </h1>
<p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed font-normal max-w-2xl">
            Pela primeira vez na América Latina em 2026, Antonio Nieto-Rodriguez - ex-presidente do PMI e autor best-seller da Harvard Business Review - revela o futuro dos PMOs na era pós-Ágil.
            Fale com nossa equipe e garanta sua participação na conferência que reunirá +300 líderes de PMO das maiores empresas globais.
          </p>
<div className="space-y-3">
<button className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] transition-colors px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm shadow-[#2563EB]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0F1F]" data-open-modal="true">
<span>FALAR COM UM ESPECIALISTA →</span>
<iconify-icon className="text-white" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<p className="text-xs sm:text-sm text-[#9CA3AF] font-normal">
              🔒 Seus dados estão seguros. Sem compromisso de compra.
            </p>
</div>
<div className="rounded-2xl bg-[#111827]/80 backdrop-blur border border-white/10 shadow-sm p-5 sm:p-6">
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-[#2563EB]/15 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">Data</p>
<p className="text-sm sm:text-base font-medium text-[#F9FAFB] leading-snug">31 de março a 2 de abril de 2026</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-[#2563EB]/15 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">Local</p>
<p className="text-sm sm:text-base font-medium text-[#F9FAFB] leading-snug">Windsor Barra Hotel, Rio de Janeiro</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 rounded-lg bg-[#2563EB]/15 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:ticket-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">Ingressos</p>
<p className="text-sm sm:text-base font-medium text-[#F9FAFB] leading-snug">Presencial + Virtual</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 sm:-inset-6 rounded-[2rem] bg-gradient-to-b from-[#2563EB]/20 via-transparent to-transparent blur-2xl"></div>
<div className="relative rounded-[1.5rem] bg-[#111827]/70 backdrop-blur border border-white/10 shadow-sm overflow-hidden">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/15 via-transparent to-black/30"></div>
</div>
<div className="relative p-5 sm:p-6">
<div className="flex items-start justify-end">
<span className="inline-flex items-center rounded-full bg-[#2563EB]/15 border border-white/10 px-3 py-1 text-[0.6875rem] sm:text-xs font-semibold uppercase tracking-widest text-[#F9FAFB]">
                  Ex-Presidente PMI | Autor HBR
                </span>
</div>
<div className="mt-4 rounded-2xl border border-white/10 bg-black/20 overflow-hidden">
<div className="h-64 sm:h-80 lg:h-[26rem] w-full flex items-center justify-center relative" id="hero-speaker-image">
<div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/15 via-transparent to-black/40"></div>
<div className="absolute inset-0" style="background:
                    radial-gradient(circle at 30% 20%, rgba(37,99,235,0.25), transparent 50%),
                    radial-gradient(circle at 70% 60%, rgba(0,0,0,0.35), transparent 55%);">
</div>
<div className="relative z-10 text-center px-6">
<div className="mx-auto w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-[#F9FAFB]" height="28" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] font-medium">
                      Speaker photo placeholder (premium crop)
                    </p>
<p className="mt-1 text-xs text-[#9CA3AF]">
                      Substitua por imagem recortada (busto/meio corpo) com fundo azul/preto.
                    </p>
</div>
</div>
</div>
<div className="mt-5 grid grid-cols-3 gap-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<p className="text-[0.6875rem] sm:text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">Formato</p>
<p className="text-sm font-medium text-[#F9FAFB]">Presencial</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<p className="text-[0.6875rem] sm:text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">Formato</p>
<p className="text-sm font-medium text-[#F9FAFB]">Virtual</p>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3">
<p className="text-[0.6875rem] sm:text-xs uppercase tracking-widest text-[#9CA3AF] font-medium">Edição</p>
<p className="text-sm font-medium text-[#F9FAFB]">15ª</p>
</div>
</div>
<div className="mt-6">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 px-6 py-3 text-sm font-semibold text-[#F9FAFB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0F1F]" data-open-modal="true">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:chat-round-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>FALAR COM UM ESPECIALISTA →</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="relative" id="big-numbers">
<div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-12 sm:py-16">
<div className="flex items-end justify-between gap-6 flex-wrap">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          O Maior Evento de PMO da América Latina
        </h2>
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] transition-colors px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#2563EB]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0F1F]" data-open-modal="true">
<span>FALAR COM ESPECIALISTA →</span>
<iconify-icon className="text-white" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
<div className="mt-8 rounded-2xl bg-[#111827]/70 backdrop-blur border border-white/10 shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-4">
<div className="p-6 sm:p-7">
<div className="flex items-baseline gap-2">
<p className="text-3xl sm:text-4xl font-semibold tracking-tight">15ª</p>
</div>
<p className="mt-1 text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">EDIÇÃO</p>
<p className="mt-3 text-sm sm:text-base text-[#F9FAFB] font-medium leading-snug">
              A maior tradição em PMO LATAM
            </p>
</div>
<div className="p-6 sm:p-7 md:border-l border-white/20">
<p className="text-3xl sm:text-4xl font-semibold tracking-tight">+300</p>
<p className="mt-1 text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">LÍDERES DE PMO</p>
<p className="mt-3 text-sm sm:text-base text-[#F9FAFB] font-medium leading-snug">
              Natura, Google, Heineken, Alibaba, Bosch
            </p>
</div>
<div className="p-6 sm:p-7 md:border-l border-white/20">
<p className="text-3xl sm:text-4xl font-semibold tracking-tight">3 DIAS</p>
<p className="mt-1 text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">DE IMERSÃO</p>
<p className="mt-3 text-sm sm:text-base text-[#F9FAFB] font-medium leading-snug">
              Masterclass + Conferência + PMO Fest
            </p>
</div>
<div className="p-6 sm:p-7 md:border-l border-white/20">
<p className="text-3xl sm:text-4xl font-semibold tracking-tight">2</p>
<p className="mt-1 text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">KEYNOTES INTERNACIONAIS</p>
<p className="mt-3 text-sm sm:text-base text-[#F9FAFB] font-medium leading-snug">
              Antonio Nieto-Rodriguez + Faisal Jafri (Alibaba)
            </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="para-quem-e">
<div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-12 sm:py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Para Quem é o PMO Summit 2026
      </h2>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
<div className="rounded-2xl bg-[#111827]/70 backdrop-blur border border-white/10 shadow-sm p-6 sm:p-7">
<ul className="space-y-4 text-sm sm:text-base text-[#F9FAFB] font-medium">
<li className="flex gap-3">
<span className="mt-0.5 text-[#10B981] font-semibold">✓</span>
<span>Você é PMO Leader, Head, Manager ou Director</span>
</li>
<li className="flex gap-3">
<span className="mt-0.5 text-[#10B981] font-semibold">✓</span>
<span>Você lidera Escritório de Projetos, Programas ou Portfólio</span>
</li>
<li className="flex gap-3">
<span className="mt-0.5 text-[#10B981] font-semibold">✓</span>
<span>Você atua em Governança, Compliance ou Transformação Digital</span>
</li>
<li className="flex gap-3">
<span className="mt-0.5 text-[#10B981] font-semibold">✓</span>
<span>Você é Project Portfolio Manager ou Transformation Office</span>
</li>
<li className="flex gap-3">
<span className="mt-0.5 text-[#10B981] font-semibold">✓</span>
<span>Você busca elevar o PMO de operacional a estratégico</span>
</li>
</ul>
</div>
<div className="rounded-2xl bg-[#111827]/70 backdrop-blur border border-white/10 shadow-sm p-6 sm:p-7">
<ul className="space-y-4 text-sm sm:text-base text-[#F9FAFB] font-medium">
<li className="flex gap-3">
<span className="mt-0.5 text-[#10B981] font-semibold">✓</span>
<span>Você enfrenta resistência à mudança cultural na organização</span>
</li>
<li className="flex gap-3">
<span className="mt-0.5 text-[#10B981] font-semibold">✓</span>
<span>Você precisa integrar IA e automação sem saber por onde começar</span>
</li>
<li className="flex gap-3">
<span className="mt-0.5 text-[#10B981] font-semibold">✓</span>
<span>Você quer conquistar influência no C-level e sair da rotina operacional</span>
</li>
<li className="flex gap-3">
<span className="mt-0.5 text-[#10B981] font-semibold">✓</span>
<span>Você busca benchmarking com líderes de empresas referência</span>
</li>
<li className="flex gap-3">
<span className="mt-0.5 text-[#10B981] font-semibold">✓</span>
<span>Você quer estar à frente das tendências, não correr atrás</span>
</li>
</ul>
</div>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="rounded-2xl bg-[#111827]/60 backdrop-blur border border-white/10 shadow-sm p-6 sm:p-7">
<p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">Setores representados:</p>
<p className="mt-2 text-sm sm:text-base text-[#F9FAFB] font-medium leading-relaxed">
            TI, Financeiro, Manufatura, Energia, Saúde, Varejo, Construção, Mineração
          </p>
</div>
<div className="rounded-2xl bg-[#111827]/60 backdrop-blur border border-white/10 shadow-sm p-6 sm:p-7">
<p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">Empresas confirmadas:</p>

<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Natura</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Google</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Heineken</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Diageo</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Alibaba</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Bosch</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Gerdau</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Alcoa</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Vestas</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Copasa</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Aché</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">CBMM</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Grupo Boticário</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">DHL</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Hitachi Energy</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Mondelez</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">RHI Magnesita</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Citi</span></div>
<div className="rounded-xl bg-white/5 border border-white/10 p-3 text-center"><span className="text-xs sm:text-sm font-semibold tracking-tight text-[#F9FAFB]">Schneider Electric</span></div>
</div>
</div>
</div>
<div className="mt-8">
<button className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] transition-colors px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm shadow-[#2563EB]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0F1F]" data-open-modal="true">
<span>SOU LÍDER DE PMO - FALAR COM ESPECIALISTA →</span>
<iconify-icon className="text-white" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="relative" id="quem-e-antonio">
<div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-12 sm:py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        A Maior Referência Global em PMO Estratégico
      </h2>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

<div className="lg:col-span-2">
<div className="rounded-2xl bg-[#111827]/70 backdrop-blur border border-white/10 shadow-sm overflow-hidden">
<div className="h-72 sm:h-80 w-full flex items-center justify-center relative" id="quem-e-image">
<div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/10 via-transparent to-black/30"></div>
<div className="relative z-10 text-center px-6">
<div className="mx-auto w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-[#F9FAFB]" height="28" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<p className="mt-3 text-xs sm:text-sm text-[#9CA3AF] font-medium">
                  Casual keynote placeholder
                </p>
</div>
</div>
<div className="border-t border-white/10 p-4 sm:p-5">
<p className="text-xs sm:text-sm text-[#9CA3AF] font-medium">
                "Antonio Nieto-Rodriguez em keynote internacional"
              </p>
</div>
</div>
</div>

<div className="lg:col-span-3 space-y-4">
<div className="rounded-2xl bg-[#111827]/70 backdrop-blur border border-white/10 shadow-sm p-6 sm:p-7">
<div className="space-y-3 text-sm sm:text-base leading-relaxed">
<p className="text-[#F9FAFB] font-medium">
                Antonio Nieto-Rodriguez é a maior autoridade global em gestão de projetos estratégicos e PMOs de alto impacto.
              </p>
<p className="text-[#F9FAFB] font-semibold">Credenciais que Importam:</p>
<div className="space-y-3 text-[#9CA3AF] font-normal">
<p className="text-[#F9FAFB] font-medium">Ex-Presidente do Project Management Institute (PMI)</p>
<p>A voz que define padrões globais para 700 mil profissionais de gestão de projetos</p>
<p className="text-[#F9FAFB] font-medium">Autor Best-Seller da Harvard Business Review</p>
<p>"Harvard Business Review Project Management Handbook" - referência mundial em estratégia de projetos</p>
<p className="text-[#F9FAFB] font-medium">Criador do conceito "Project Economy"</p>
<p>Seu artigo "The Project Economy Has Arrived" revolucionou a forma como organizações pensam execução estratégica</p>
<p className="text-[#F9FAFB] font-medium">Palestrante em +90 países</p>
<p>Suas ideias moldaram PMOs de Fortune 500, governos e startups unicórnio</p>
<p className="text-[#F9FAFB] font-medium">Consultor de CEOs e Conselhos</p>
<p>Trabalhou com C-levels de empresas como Coca-Cola, GlaxoSmithKline, PwC e BNP Paribas</p>
</div>
</div>
<div className="mt-6 rounded-2xl bg-[#2563EB]/15 border border-white/10 p-5 sm:p-6">
<p className="text-sm sm:text-base text-[#F9FAFB] font-medium leading-relaxed">
                O Diferencial de Aprender com Antonio:
                Ele mostra o que realmente funciona em organizações que estão vencendo na execução estratégica - e expõe o que está condenando PMOs tradicionais a perderem relevância. Você aprende com casos reais de empresas globais, não com teorias acadêmicas.
              </p>
</div>
<div className="mt-6">
<button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] transition-colors px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm shadow-[#2563EB]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0F1F]" data-open-modal="true">
<span>FALAR COM ESPECIALISTA AGORA →</span>
<iconify-icon className="text-white" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="o-que-antonio-vai-ensinar">
<div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-12 sm:py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        O Que Você Vai Aprender com Antonio Nieto-Rodriguez
      </h2>
<p className="mt-3 text-sm sm:text-base text-[#9CA3AF] font-normal leading-relaxed max-w-3xl">
        Antonio apresenta 2 sessões exclusivas no PMO Summit 2026:
      </p>
<div className="mt-8 space-y-6">

<article className="rounded-2xl bg-[#111827]/70 backdrop-blur border border-white/10 shadow-sm p-6 sm:p-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<span className="inline-flex w-fit items-center rounded-full bg-[#2563EB]/15 border border-white/10 px-3 py-1 text-[0.6875rem] sm:text-xs font-semibold uppercase tracking-widest text-[#F9FAFB]">
              MASTERCLASS EXCLUSIVA - 4 HORAS | DIA 31/03
            </span>
<div className="inline-flex items-center gap-2 text-xs text-[#9CA3AF] font-medium">
<iconify-icon className="text-[#9CA3AF]" height="18" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>IA</span>
</div>
</div>
<h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-tight leading-snug">
            "Gestão Moderna de Projetos na Era da IA: Ferramentas, Mindsets e Práticas para PMOs de Alto Impacto"
          </h3>
<div className="mt-4 text-sm sm:text-base text-[#9CA3AF] leading-relaxed space-y-4 font-normal">
<p className="text-[#F9FAFB] font-medium">Nesta masterclass imersiva, você vivencia em tempo real a transformação radical da gestão de projetos.</p>
<div>
<p className="text-[#F9FAFB] font-semibold">Você vai dominar:</p>
<ul className="mt-3 space-y-2">
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>O arsenal de IA que está revolucionando planejamento, gestão de riscos e relatórios</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Abordagens híbridas que aumentam velocidade sem perder estrutura</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Métodos práticos para reduzir complexidade e eliminar sobrecarga</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Rituais de performance de nova geração: ownership, accountability e ritmo</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Como PMOs ampliam influência entre times de negócio e tecnologia</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Exercícios reais com fluxos de trabalho digitais modernos</span></li>
</ul>
</div>
<div className="rounded-2xl bg-black/20 border border-white/10 p-5">
<p className="text-[#F9FAFB] font-semibold">RESULTADO:</p>
<p className="mt-1">Você sai com um playbook imediatamente aplicável - execução afiada, entregas rápidas, PMO preparado para o futuro.</p>
<p className="mt-4 text-[#F9FAFB] font-semibold">IMPORTANTE:</p>
<p className="mt-1">Masterclass disponível apenas para participantes presenciais.</p>
</div>
</div>
</article>

<article className="rounded-2xl bg-[#111827]/70 backdrop-blur border border-white/10 shadow-sm p-6 sm:p-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
<span className="inline-flex w-fit items-center rounded-full bg-[#2563EB]/15 border border-white/10 px-3 py-1 text-[0.6875rem] sm:text-xs font-semibold uppercase tracking-widest text-[#F9FAFB]">
              KEYNOTE INTERNACIONAL | DIA 1º/04
            </span>
<div className="inline-flex items-center gap-2 text-xs text-[#9CA3AF] font-medium">
<iconify-icon className="text-[#9CA3AF]" height="18" icon="solar:mic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span>Keynote</span>
</div>
</div>
<h3 className="mt-5 text-xl sm:text-2xl font-semibold tracking-tight leading-snug">
            Organizações Orientadas a Projetos: Além do Ágil
          </h3>
<div className="mt-4 text-sm sm:text-base text-[#9CA3AF] leading-relaxed space-y-4 font-normal">
<p className="text-[#F9FAFB] font-medium">A palestra que vai fazer você repensar o futuro da performance organizacional.</p>
<div>
<p className="text-[#F9FAFB] font-semibold">Antonio responde:</p>
<ul className="mt-3 space-y-2">
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Por que o Ágil atingiu seu limite? E o que vem depois dele?</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>O que são Modelos Operacionais Orientados a Projetos? E por que são o próximo salto competitivo</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Como organizações líderes estão redesenhando estruturas em torno de portfólios de alto impacto</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>O surgimento do Chief Project Officer (CPO) nos conselhos corporativos</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>O papel crítico da IA para acelerar decisões, priorização e execução</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Um novo blueprint para o funcionamento das organizações na próxima década</span></li>
</ul>
</div>
<div className="rounded-2xl bg-black/20 border border-white/10 p-5">
<p className="text-[#F9FAFB] font-semibold">RESULTADO:</p>
<p className="mt-1">Você enxerga o futuro da gestão sob uma nova perspectiva - e sai preparado para liderar essa transformação.</p>
</div>
</div>
</article>
<div className="pt-2">
<button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] transition-colors px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm shadow-[#2563EB]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0F1F]" data-open-modal="true">
<span>FALAR COM ESPECIALISTA →</span>
<iconify-icon className="text-white" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="relative" id="comparacao">
<div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-12 sm:py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Por Que o PMO Summit 2026 é a Maior Conferência de PMO da América Latina
      </h2>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
<div className="rounded-2xl bg-[#111827]/60 backdrop-blur border border-white/10 shadow-sm p-6 sm:p-7">
<h3 className="text-sm sm:text-base font-semibold tracking-tight">PMO SUMMIT LATIN AMERICA</h3>
<ul className="mt-5 space-y-3 text-sm sm:text-base text-[#F9FAFB] font-medium">
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Antonio Nieto-Rodriguez (ex-presidente PMI, autor HBR)</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Faisal Jafri (Alibaba/Delivery Hero)</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Masterclass de 4h + Keynote internacional</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Cases reais de Natura, Google, Heineken, Diageo, Bosch</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>6 palestras práticas + 2 painéis estratégicos</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>3 dias completos (Masterclass + Conferência + PMO Fest)</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>+300 líderes de empresas globais presentes</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>Networking de elite (presencial + virtual)</span></li>
<li className="flex gap-3"><span className="text-[#10B981] font-semibold">✓</span><span>15ª edição - tradição e credibilidade consolidada</span></li>
</ul>
</div>
<div className="rounded-2xl bg-[#111827]/60 backdrop-blur border border-white/10 shadow-sm p-6 sm:p-7">
<h3 className="text-sm sm:text-base font-semibold tracking-tight">OUTROS EVENTOS DE PMO</h3>
<ul className="mt-5 space-y-3 text-sm sm:text-base text-[#F9FAFB] font-medium">
<li className="flex gap-3"><span className="text-[#DC2626] font-semibold">✗</span><span>Keynotes genéricos ou consultores locais</span></li>
<li className="flex gap-3"><span className="text-[#DC2626] font-semibold">✗</span><span>Sem palestrantes internacionais de peso</span></li>
<li className="flex gap-3"><span className="text-[#DC2626] font-semibold">✗</span><span>Palestras curtas (30-45min), superficiais</span></li>
<li className="flex gap-3"><span className="text-[#DC2626] font-semibold">✗</span><span>Cases teóricos ou vendas disfarçadas</span></li>
<li className="flex gap-3"><span className="text-[#DC2626] font-semibold">✗</span><span>Poucos cases práticos aplicáveis</span></li>
<li className="flex gap-3"><span className="text-[#DC2626] font-semibold">✗</span><span>1-2 dias, conteúdo comprimido</span></li>
<li className="flex gap-3"><span className="text-[#DC2626] font-semibold">✗</span><span>Público misto, pouco qualificado</span></li>
<li className="flex gap-3"><span className="text-[#DC2626] font-semibold">✗</span><span>Networking limitado ou inexistente</span></li>
<li className="flex gap-3"><span className="text-[#DC2626] font-semibold">✗</span><span>Patrocinadores com pitches de venda</span></li>
<li className="flex gap-3"><span className="text-[#DC2626] font-semibold">✗</span><span>Eventos pontuais, sem histórico</span></li>
</ul>
</div>
</div>
<div className="mt-8">
<button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] transition-colors px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm shadow-[#2563EB]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0F1F]" data-open-modal="true">
<span>FALAR COM ESPECIALISTA →</span>
<iconify-icon className="text-white" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="relative" id="onde-os-melhores-lideres-se-conectam">
<div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-12 sm:py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Onde os Melhores Líderes de PMO se Conectam e Definem o Futuro
      </h2>
<p className="mt-3 text-sm sm:text-base text-[#9CA3AF] font-normal leading-relaxed max-w-3xl">
        Não é sobre assistir palestras. É sobre estar no ambiente onde as transformações são desenhadas - antes de virarem tendência.
      </p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-2xl bg-[#1E293B]/50 border border-white/20 shadow-sm p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">1</p>
<h3 className="mt-2 text-sm sm:text-base font-semibold tracking-tight text-[#F9FAFB]">ACESSO AO CÍRCULO RESTRITO</h3>
</div>
<div className="shrink-0 rounded-xl bg-[#2563EB]/15 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div className="mt-4 space-y-3 text-sm sm:text-base text-[#9CA3AF] leading-relaxed font-normal">
<p>Enquanto a maioria dos PMOs aprende por tentativa e erro, você estará na mesma sala que os líderes que já resolveram os problemas que você enfrenta hoje.</p>
<p>Não é networking comum. É acesso direto a quem define padrões em Natura, Google, Alibaba, Heineken, Bosch.</p>
</div>
</div>
<div className="rounded-2xl bg-[#1E293B]/50 border border-white/20 shadow-sm p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">2</p>
<h3 className="mt-2 text-sm sm:text-base font-semibold tracking-tight text-[#F9FAFB]">VANTAGEM INFORMACIONAL</h3>
</div>
<div className="shrink-0 rounded-xl bg-[#2563EB]/15 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div className="mt-4 space-y-3 text-sm sm:text-base text-[#9CA3AF] leading-relaxed font-normal">
<p>As decisões estratégicas de 2027 estão sendo moldadas aqui, agora, em conversas reservadas entre Antonio Nieto e C-levels.</p>
<p>Você escolhe: estar dentro dessas conversas ou descobrir sobre elas quando já for tarde demais.</p>
</div>
</div>
<div className="rounded-2xl bg-[#1E293B]/50 border border-white/20 shadow-sm p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-widest text-[#9CA3AF] font-semibold">3</p>
<h3 className="mt-2 text-sm sm:text-base font-semibold tracking-tight text-[#F9FAFB]">RECONHECIMENTO PELO MERCADO</h3>
</div>
<div className="shrink-0 rounded-xl bg-[#2563EB]/15 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</div>
<div className="mt-4 space-y-3 text-sm sm:text-base text-[#9CA3AF] leading-relaxed font-normal">
<p>Participar do PMO Summit não é só desenvolvimento - é um sinal claro ao mercado:</p>
<p>"Estou onde os melhores estão. Invisto no que importa. Não sigo tendências, ajudo a criá-las."</p>
<p>Sua presença aqui posiciona você entre a elite de PMO da América Latina.</p>
</div>
</div>
</div>
<div className="mt-8">
<button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] transition-colors px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm shadow-[#2563EB]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0F1F]" data-open-modal="true">
<span>QUERO FAZER PARTE DESSE AMBIENTE →</span>
<iconify-icon className="text-white" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="relative" id="faq">
<div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-12 sm:py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
        Perguntas Frequentes
      </h2>
<div className="mt-8 rounded-2xl bg-[#111827]/60 backdrop-blur border border-white/10 shadow-sm overflow-hidden">
<div className="divide-y divide-white/10" id="faq-accordion">

<div className="faq-item">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="text-sm sm:text-base font-semibold tracking-tight text-[#F9FAFB]">1. Como funciona o processo de inscrição?</span>
<span className="faq-icon shrink-0 rounded-lg bg-white/5 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faq-panel grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#9CA3AF] font-normal leading-relaxed">
                  Ao falar com nossa equipe, você receberá todas as informações sobre programação, modalidades (presencial/virtual), investimento e formas de pagamento. Nossa equipe te orienta em cada etapa.
                </div>
</div>
</div>
</div>

<div className="faq-item">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="text-sm sm:text-base font-semibold tracking-tight text-[#F9FAFB]">2. Qual a diferença entre presencial e virtual?</span>
<span className="faq-icon shrink-0 rounded-lg bg-white/5 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faq-panel grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#9CA3AF] font-normal leading-relaxed">
                  Presencial: Acesso completo à Masterclass de 4h com Antonio Nieto, todas as palestras e painéis, coffee breaks, almoços, PMO Fest (networking exclusivo) e gravações por 1 ano.
                  Virtual: Acesso a todas as palestras e painéis ao vivo, gravações por 1 ano. Masterclass é exclusiva presencial.
                </div>
</div>
</div>
</div>

<div className="faq-item">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="text-sm sm:text-base font-semibold tracking-tight text-[#F9FAFB]">3. Qual o investimento?</span>
<span className="faq-icon shrink-0 rounded-lg bg-white/5 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faq-panel grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#9CA3AF] font-normal leading-relaxed">
                  O valor varia entre presencial e virtual. Nossa equipe apresentará as condições e formas de pagamento quando você entrar em contato. Aceitamos pagamento corporativo e parcelamento.
                </div>
</div>
</div>
</div>

<div className="faq-item">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="text-sm sm:text-base font-semibold tracking-tight text-[#F9FAFB]">4. Consigo aprovar internamente na minha empresa?</span>
<span className="faq-icon shrink-0 rounded-lg bg-white/5 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faq-panel grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#9CA3AF] font-normal leading-relaxed">
                  Sim! Nossa equipe fornece toda documentação necessária: programação completa, justificativa de investimento, lista de palestrantes e empresas participantes. Ajudamos você a construir o business case.
                </div>
</div>
</div>
</div>

<div className="faq-item">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="text-sm sm:text-base font-semibold tracking-tight text-[#F9FAFB]">5. Quantas vagas estão disponíveis?</span>
<span className="faq-icon shrink-0 rounded-lg bg-white/5 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faq-panel grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#9CA3AF] font-normal leading-relaxed">
                  A conferência tem capacidade limitada. Nas últimas edições, esgotamos em dias após abertura das inscrições.
                </div>
</div>
</div>
</div>

<div className="faq-item">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="text-sm sm:text-base font-semibold tracking-tight text-[#F9FAFB]">6. Posso levar minha equipe?</span>
<span className="faq-icon shrink-0 rounded-lg bg-white/5 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faq-panel grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#9CA3AF] font-normal leading-relaxed">
                  Sim! Temos condições especiais para grupos. Fale com nossa equipe para receber uma proposta personalizada.
                </div>
</div>
</div>
</div>

<div className="faq-item">
<button aria-expanded="false" className="faq-trigger w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left hover:bg-white/5 transition-colors focus:outline-none">
<span className="text-sm sm:text-base font-semibold tracking-tight text-[#F9FAFB]">7. O que está incluso no ingresso presencial?</span>
<span className="faq-icon shrink-0 rounded-lg bg-white/5 border border-white/10 p-2">
<iconify-icon className="text-[#F9FAFB]" height="18" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</button>
<div className="faq-panel grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#9CA3AF] font-normal leading-relaxed space-y-2">
<p>✓ Masterclass de 4h com Antonio Nieto-Rodriguez</p>
<p>✓ Acesso a todas as palestras e painéis (3 dias)</p>
<p>✓ Coffee breaks e almoços</p>
<p>✓ PMO Fest - networking exclusivo</p>
<p>✓ Gravações por 1 ano</p>
<p>✓ Certificado de participação</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8">
<button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] transition-colors px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm shadow-[#2563EB]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0C0F1F]" data-open-modal="true">
<span>FALAR COM ESPECIALISTA →</span>
<iconify-icon className="text-white" height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black/10" id="footer">
<div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-10 sm:py-12">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<span className="text-sm font-semibold tracking-tight text-[#F9FAFB]">B</span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-[#F9FAFB]">Blueprintt</p>
<p className="text-xs text-[#9CA3AF] font-medium">Logo placeholder</p>
</div>
</div>
<div className="text-xs sm:text-sm text-[#9CA3AF] font-normal leading-relaxed max-w-2xl">
          Ao utilizar nossos serviços, você concorda com nossos Termos de Uso e Política de Privacidade. Seus dados são tratados com segurança e em conformidade com a LGPD.
        </div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="modal-overlay">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" data-close-modal="true"></div>
<div className="relative min-h-full w-full flex items-center justify-center p-4 sm:p-6">
<div aria-labelledby="modal-title" aria-modal="true" className="w-full max-w-xl rounded-3xl bg-white text-slate-900 shadow-2xl overflow-hidden" role="dialog">
<div className="p-6 sm:p-8 relative">
<button aria-label="Fechar" className="absolute top-4 right-4 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]" data-close-modal="true">
<iconify-icon className="text-slate-700" height="20" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<div className="space-y-2 pr-10">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900" id="modal-title">
              Falar com um especialista
            </h3>
<p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Preencha seus dados e nossa equipe entrará em contato.
            </p>
</div>
<div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
<div className="min-h-28" id="hubspot-form-container">

</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row gap-3 sm:justify-end">
<button className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-colors px-5 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]" data-close-modal="true">
              Fechar
            </button>
<button className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-[#2563EB] hover:bg-[#3B82F6] transition-colors px-5 py-2.5 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]" data-close-modal="true">
              OK
            </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
