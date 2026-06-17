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



(function () {
const once = true;
// Number Counter Animation Function
const animateValue = (obj, start, end, duration) => {
let startTimestamp = null;
const step = (timestamp) => {
if (!startTimestamp) startTimestamp = timestamp;
const progress = Math.min((timestamp - startTimestamp) / duration, 1);
// Quartic ease out for a sexy, modern deceleration
const easeOut = 1 - Math.pow(1 - progress, 4);
obj.innerHTML = Math.floor(start + (end - start) * easeOut);
if (progress < 1) {
window.requestAnimationFrame(step);
} else {
obj.innerHTML = end; // Snap to final
}
};
window.requestAnimationFrame(step);
};
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
// Trigger counters inside the animated element
const counters = entry.target.querySelectorAll('.counter:not(.counted)');
counters.forEach(counter => {
counter.classList.add('counted');
const target = parseInt(counter.getAttribute('data-count'));
// Adding slight delay for visual sync with fade-in
setTimeout(() => animateValue(counter, 0, target, 2500), 200);
});
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.15, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="fixed top-0 inset-x-0 h-screen -z-10 overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-[#FAF7F2]/40 z-10 backdrop-blur-[100px]"></div>
<div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-b from-[#EFD5A8]/40 to-transparent opacity-60 mix-blend-multiply blur-3xl"></div>
<div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-t from-[#C9A472]/20 to-transparent opacity-60 mix-blend-multiply blur-3xl"></div>
<img alt="Background" className="w-full h-full object-cover opacity-20 animate-pulse-slow mix-blend-overlay" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>
</div>
<section className="min-h-screen overflow-hidden relative flex flex-col">

<header className="z-50 sticky top-0 w-full transition-all duration-300 glass-header">
<div className="mx-auto max-w-7xl px-6 lg:px-10">
<div className="flex h-20 items-center justify-between">
<a className="inline-flex items-center gap-3 group" href="#">

<div className="relative flex items-center justify-center w-10 h-6">
<div className="absolute left-0 w-6 h-6 rounded-full bg-[#EFD5A8] opacity-90 mix-blend-multiply transition-transform group-hover:scale-105 duration-500"></div>
<div className="absolute left-1.5 w-6 h-6 rounded-full bg-[#C9A472] opacity-90 mix-blend-multiply transition-transform group-hover:scale-105 duration-500 delay-75"></div>
<div className="absolute left-3 w-6 h-6 rounded-full bg-[#B07840] opacity-90 mix-blend-multiply transition-transform group-hover:scale-105 duration-500 delay-100"></div>
<div className="absolute left-4.5 w-6 h-6 rounded-full bg-[#8B5E30] opacity-90 mix-blend-multiply transition-transform group-hover:scale-105 duration-500 delay-150"></div>
</div>

<span className="text-xl font-medium tracking-widest text-[#8B5E30] font-[Cormorant_Garamond] uppercase mt-1">Sunya</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-[#6B6B6B] font-normal">
<a className="hover:text-[#B07840] transition duration-300" href="#como-funciona">Como funciona</a>
<a className="hover:text-[#B07840] transition duration-300" href="#funcionalidades">Funcionalidades</a>
<a className="hover:text-[#B07840] transition duration-300" href="#precos">Preços</a>
<a className="hover:text-[#B07840] transition duration-300 flex items-center gap-1.5" href="#">Marketplace <span className="text-xs bg-white/60 backdrop-blur-md border border-white/50 text-[#8B5E30] px-2 py-0.5 rounded-md font-medium shadow-sm">Em breve</span></a>
</nav>
<div className="hidden md:flex items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-[#6B6B6B] hover:text-[#B07840] transition font-normal" href="#">
              Entrar
            </a>
<a className="inline-flex items-center gap-2 rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 text-[#8B5E30] px-5 py-2.5 text-sm font-medium hover:bg-white/60 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-sm" href="#">
              Começar Grátis
              <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-white/60 backdrop-blur-md border border-white/50 text-[#2C2C2C] shadow-sm">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="z-10 relative flex-1 flex flex-col justify-center">
<div className="mx-auto max-w-7xl px-6 lg:px-10 w-full py-12 md:py-0">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/50 backdrop-blur-md border border-white/60 text-[#8B5E30] text-xs font-medium tracking-widest uppercase mb-6 shadow-sm">
<iconify-icon className="text-lg" icon="solar:sun-2-linear"></iconify-icon>
                Sua parceira de bronze
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-[Poppins] font-medium tracking-tight text-[#2C2C2C]">
              O app que organiza o seu estúdio de bronzeamento.
            </h1>
<p className="sm:text-lg text-base text-[#6B6B6B] max-w-2xl mt-6 font-normal leading-relaxed">
              Bom dia! Que tal focar no que você faz de melhor enquanto a Sunya organiza suas clientes, controla seus horários e cuida do seu financeiro?
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-2xl bg-[#B07840] text-white px-6 py-3.5 text-sm font-medium shadow-[0_8px_20px_rgba(176,120,64,0.3)] hover:bg-[#8B5E30] hover:-translate-y-0.5 transition-all duration-300" href="#comecar">
                Organizar meu estúdio
              </a>
<div className="inline-flex items-center justify-center gap-2 text-sm font-normal text-[#6B6B6B] bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl px-6 py-3.5 shadow-sm hover:bg-white/80 transition-all duration-300">
                 7 dias grátis · Sem cartão
               </div>
</div>

<div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
<div className="inline-flex items-center gap-2 text-[#6B6B6B]">
<div className="w-8 h-8 rounded-full bg-white/60 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm text-[#C9A472]">
<iconify-icon className="text-base" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span>Dados 100% seguros</span>
</div>
<div className="hidden sm:inline-flex h-4 w-px bg-[#8B5E30]/20"></div>
<div className="inline-flex items-center gap-2 text-[#6B6B6B]">
<div className="w-8 h-8 rounded-full bg-white/60 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm text-[#C9A472]">
<iconify-icon className="text-base" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span>Setup em 3 minutos</span>
</div>
<div className="hidden sm:inline-flex h-4 w-px bg-[#8B5E30]/20"></div>
<div className="inline-flex items-center gap-2 text-[#6B6B6B]">
<div className="w-8 h-8 rounded-full bg-white/60 backdrop-blur-md border border-white/50 flex items-center justify-center shadow-sm text-[#C9A472]">
<iconify-icon className="text-base" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span><span className="font-medium text-[#2C2C2C]">+<span className="counter" data-count="180">0</span>k</span> estúdios</span>
</div>
</div>
</div>

<div className="lg:col-span-5 lg:pl-8 mt-12 lg:mt-0 animate-on-scroll delay-200">
<div className="glass-panel p-6 max-w-sm rounded-3xl ml-auto relative z-10 hover:-translate-y-2 transition-transform duration-500">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-[#EFD5A8]/50 blur-3xl rounded-full -z-10"></div>
<div className="flex items-center justify-between mb-6 border-b border-[#E8E0D4]/50 pb-5">
<div>
<p className="text-xs uppercase tracking-widest text-[#6B6B6B] font-normal mb-1">Bom dia, Elianna!</p>
<p className="text-3xl text-[#2C2C2C] font-[Poppins] font-medium flex items-center">
                      R$ <span className="counter mx-1" data-count="1240">0</span>
<span className="text-xs text-[#B07840] font-[Inter] font-medium ml-2 bg-white/60 backdrop-blur-md border border-white/50 px-2 py-1 rounded-full shadow-sm">+18%</span>
</p>
</div>
<div className="text-right">
<p className="text-xs uppercase tracking-widest text-[#6B6B6B] font-normal mb-1">Clima</p>
<p className="text-sm text-[#B07840] font-medium flex items-center justify-end gap-1"><iconify-icon icon="solar:sun-2-bold" strokeWidth="1.5"></iconify-icon> UV 8.2</p>
</div>
</div>
<div className="bg-white/50 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-inner">
<p className="text-xs font-medium text-[#8B5E30] mb-3 flex items-center gap-1.5"><iconify-icon icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon> Sua primeira cliente está chegando!</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-[#C9A472] to-[#8B5E30] rounded-full flex items-center justify-center text-sm font-medium text-white shadow-md">MS</div>
<div>
<p className="text-sm font-medium text-[#2C2C2C]">Maria Silva · 14:30</p>
<p className="text-xs text-[#6B6B6B] mt-0.5 font-normal">Pacote Bronze 10 · 3 sessões restam</p>
</div>
</div>
</div>
</div>

<div className="mt-6 ml-auto max-w-sm flex flex-wrap justify-end gap-2 relative z-20">
<span className="text-xs bg-white/60 backdrop-blur-lg border border-white/60 px-4 py-2.5 rounded-2xl text-[#6B6B6B] font-medium shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
<div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#B07840] shadow-inner"><iconify-icon icon="solar:calendar-linear"></iconify-icon></div>
                    Agenda Inteligente
                </span>
<span className="text-xs bg-white/60 backdrop-blur-lg border border-white/60 px-4 py-2.5 rounded-2xl text-[#6B6B6B] font-medium shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
<div className="w-6 h-6 rounded-full bg-[#FAF7F2] flex items-center justify-center text-[#B07840] shadow-inner"><iconify-icon icon="solar:wallet-linear"></iconify-icon></div>
                    PIX Automático
                </span>
<span className="text-xs bg-gradient-to-r from-[#B07840] to-[#8B5E30] border border-[#B07840]/20 px-4 py-2.5 rounded-2xl text-white font-medium shadow-[0_8px_16px_rgba(176,120,64,0.3)] flex items-center gap-2 hover:-translate-y-1 transition-transform duration-300">
<iconify-icon className="text-base" icon="solar:chat-round-line-linear"></iconify-icon> Assistente 24/7
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full mx-auto max-w-7xl px-6 lg:px-10 mt-12 animate-on-scroll" id="como-funciona">
<div className="glass-panel w-full rounded-[32px] p-8 sm:p-12">
<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-16">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/60 border border-white/50 text-[#8B5E30] text-xs font-medium tracking-widest uppercase shadow-sm">
            Você reconhece isso?
          </div>
<h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-[#2C2C2C] font-[Poppins] font-medium tracking-tight">O estresse do papel está custando mais do que você imagina</h2>
<p className="text-[#6B6B6B] text-base mt-5 font-normal leading-relaxed">Enquanto você gerencia no caderninho, suas clientes procuram estúdios mais ágeis e organizados.</p>
<div className="h-px bg-gradient-to-r from-[#8B5E30]/20 to-transparent mt-8 mb-8 w-full max-w-md"></div>
<div className="space-y-8">
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 flex items-center justify-center shrink-0 text-[#B07840] shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:notebook-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-[#2C2C2C] font-[Poppins] font-medium">Agenda em papel</h3>
<p className="text-[#6B6B6B] text-sm mt-1.5 leading-relaxed font-normal">Rasuras, páginas perdidas. Impossível saber quem confirmou ou cancelou.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 flex items-center justify-center shrink-0 text-[#B07840] shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:smartphone-update-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-[#2C2C2C] font-[Poppins] font-medium">WhatsApp pessoal lotado</h3>
<p className="text-[#6B6B6B] text-sm mt-1.5 leading-relaxed font-normal">Mensagens de clientes misturadas com conversas pessoais. Zero controle.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 flex items-center justify-center shrink-0 text-[#B07840] shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-[#2C2C2C] font-[Poppins] font-medium">Sem controle financeiro</h3>
<p className="text-[#6B6B6B] text-sm mt-1.5 leading-relaxed font-normal">Não sabe exatamente quanto faturou. PIX perdidos, caderninhos imprecisos e clientes que desaparecem.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-[#EFD5A8]/30 to-[#C9A472]/10 blur-[80px] rounded-full -z-10"></div>
<div className="relative mx-auto w-full max-w-[500px]">
<div className="rounded-[32px] bg-white/40 backdrop-blur-2xl border border-white/60 p-3 shadow-xl hover:-translate-y-2 transition-transform duration-700">
<div className="relative overflow-hidden rounded-[24px] bg-white/80 border border-white/50">
<div className="flex items-center gap-2 px-5 py-4 border-b border-white/60 bg-white/50 backdrop-blur-md">
<span className="h-2.5 w-2.5 rounded-full bg-[#E8E0D4] shadow-inner"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#E8E0D4] shadow-inner"></span>
<span className="h-2.5 w-2.5 rounded-full bg-[#E8E0D4] shadow-inner"></span>
</div>
<div className="p-4 sm:p-5">
<div className="grid grid-cols-2 gap-3 sm:gap-4 h-[380px]">
<div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/40 shadow-sm group">
<img alt="Papel e bagunça" className="w-full h-full object-cover opacity-70 mix-blend-multiply sepia-[.2] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1586282391129-76a6df230234?w=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#8B5E30]/90 flex items-end p-4">
<span className="text-xs text-white font-medium flex items-center gap-1.5 backdrop-blur-md bg-black/20 px-3 py-1.5 rounded-xl border border-white/10"><iconify-icon icon="solar:graph-down-linear"></iconify-icon> 30% de no-show</span>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/40 shadow-sm group">
<img alt="WhatsApp lotado" className="w-full h-full object-cover opacity-70 mix-blend-multiply sepia-[.2] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#8B5E30]/90 flex items-end p-4">
<span className="text-xs text-white font-medium flex items-center gap-1.5 backdrop-blur-md bg-black/20 px-3 py-1.5 rounded-xl border border-white/10"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 4h perdidas/dia</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full mx-auto max-w-7xl px-6 lg:px-10 mt-20 animate-on-scroll" id="funcionalidades">
<div className="glass-panel w-full rounded-[32px] p-8 sm:p-12 relative overflow-hidden">

<div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-bl from-[#EFD5A8]/20 to-transparent blur-3xl rounded-full -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 sm:gap-16">

<div className="lg:col-span-6 order-2 lg:order-1">
<div className="relative mx-auto w-full max-w-[360px] hover:-translate-y-2 transition-transform duration-700">
<div className="rounded-[32px] bg-white/30 backdrop-blur-2xl border border-white/60 p-2.5 shadow-2xl">
<div className="relative overflow-hidden rounded-[24px] bg-[#FAF7F2]/80 border border-white/50 backdrop-blur-xl">

<div className="flex items-center gap-3 px-5 py-4 border-b border-white/60 bg-white/60 backdrop-blur-md">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#B07840] to-[#C9A472] flex items-center justify-center shadow-md">
<iconify-icon className="text-white text-lg" icon="solar:sun-2-bold"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-[#2C2C2C] leading-none">Sunya Assistente</p>
<p className="text-xs text-[#B07840] mt-1.5 font-normal flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#B07840] block animate-pulse"></span> Online agora</p>
</div>
</div>

<div className="p-5 space-y-4 bg-[url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=400&amp;auto=format&amp;fit=crop')] bg-cover bg-center relative min-h-[420px]">
<div className="absolute inset-0 bg-[#FAF7F2]/90 backdrop-blur-sm z-0"></div>
<div className="relative z-10 space-y-4 flex flex-col">

<div className="bg-gradient-to-r from-[#B07840] to-[#8B5E30] text-white text-sm p-3.5 rounded-l-[20px] rounded-tr-[20px] max-w-[85%] self-end shadow-md transform hover:scale-[1.02] transition-transform origin-bottom-right">
<p>Oii, queria marcar um bronze pra amanhã!</p>
<span className="text-[10px] text-white/70 text-right block mt-1">10:23</span>
</div>

<div className="bg-white/90 backdrop-blur-md text-[#2C2C2C] text-sm p-3.5 rounded-r-[20px] rounded-tl-[20px] max-w-[85%] self-start border border-white/60 shadow-sm transform hover:scale-[1.02] transition-transform origin-bottom-left">
<p>Bom dia, linda! Que tal aproveitar o UV perfeito de amanhã? ☀️ Tenho vagas às 10h ou 14h, qual fica melhor?</p>
<span className="text-[10px] text-[#6B6B6B] text-right block mt-1">10:23</span>
</div>

<div className="bg-gradient-to-r from-[#B07840] to-[#8B5E30] text-white text-sm p-3.5 rounded-l-[20px] rounded-tr-[20px] max-w-[85%] self-end shadow-md transform hover:scale-[1.02] transition-transform origin-bottom-right">
<p>As 10h fica ótimo</p>
<span className="text-[10px] text-white/70 text-right block mt-1">10:25</span>
</div>

<div className="bg-white/90 backdrop-blur-md text-[#2C2C2C] text-sm p-3.5 rounded-r-[20px] rounded-tl-[20px] max-w-[85%] self-start border border-white/60 shadow-sm transform hover:scale-[1.02] transition-transform origin-bottom-left">
<p>Perfeito! A sessão é R$ 150 e dura 2h. Pra garantir sua vaga e preparar tudo, me envia um sinalzinho de R$ 45 via PIX?</p>
<span className="text-[10px] text-[#6B6B6B] text-right block mt-1">10:25</span>
</div>

<div className="mx-auto bg-white/70 backdrop-blur-md border border-white/60 px-4 py-2 rounded-full text-xs font-medium text-[#8B5E30] shadow-sm mt-2 flex items-center gap-2">
<iconify-icon className="text-[#C9A472] text-base" icon="solar:check-circle-bold"></iconify-icon> Agendamento criado
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 order-1 lg:order-2">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/60 border border-white/50 text-[#8B5E30] text-xs font-medium tracking-widest uppercase shadow-sm mb-2">
            A virada de chave
          </div>
<h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-[#2C2C2C] font-[Poppins] font-medium tracking-tight">Sua vendedora digital que trabalha 24/7</h2>
<p className="text-[#6B6B6B] text-base mt-5 font-normal leading-relaxed">Enquanto você foca no atendimento, a Sunya Assistente conversa, negocia e agenda pra você. Tudo pelo WhatsApp, com o calor e a simpatia que suas clientes merecem.</p>
<div className="mt-8 space-y-6">
<div className="flex items-start gap-4 p-4 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 hover:bg-white/50 transition-colors">
<div className="w-10 h-10 rounded-2xl bg-white/60 border border-white/50 text-[#6B6B6B] flex items-center justify-center shrink-0 shadow-sm">
<iconify-icon className="text-xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-[#2C2C2C]">Sem Sunya</p>
<p className="text-sm text-[#6B6B6B] mt-1 leading-relaxed font-normal">Você para o que está fazendo para responder, anota no papel e a cliente espera horas por uma resposta.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 shadow-[0_8px_20px_rgba(139,94,48,0.05)] hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B07840] to-[#8B5E30] text-white flex items-center justify-center shrink-0 shadow-md">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-[#2C2C2C]">Com Sunya</p>
<p className="text-sm text-[#6B6B6B] mt-1 leading-relaxed font-normal">A IA responde na hora, como se fosse você. Cobra sinal, confirma e o agendamento já aparece no app.</p>
</div>
</div>
</div>
<div className="mt-10 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center h-12 px-6 rounded-2xl text-sm font-medium text-white bg-[#B07840] hover:bg-[#8B5E30] transition shadow-[0_8px_20px_rgba(176,120,64,0.3)] hover:-translate-y-0.5" href="#comecar">Quero a Sunya no meu estúdio</a>
<a className="inline-flex items-center justify-center h-12 px-6 rounded-2xl text-sm font-medium text-[#2C2C2C] bg-white/60 backdrop-blur-md border border-white/60 hover:bg-white transition shadow-sm hover:-translate-y-0.5" href="#precos">Ver Planos</a>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-16 sm:py-28 mx-auto max-w-7xl px-6 lg:px-10 animate-on-scroll">
<div className="mb-14 text-center">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/60 border border-white/50 text-[#8B5E30] text-xs font-medium tracking-widest uppercase shadow-sm mb-6">
        Resultados reais
      </div>
<h3 className="text-3xl sm:text-4xl lg:text-5xl leading-[1.1] font-medium text-[#2C2C2C] tracking-tight font-[Poppins] max-w-3xl mx-auto">A transformação que acontece em 7 dias.</h3>
<p className="sm:text-lg text-[#6B6B6B] max-w-2xl mx-auto mt-6 font-normal leading-relaxed">O aplicativo faz o trabalho pesado de recepção e finanças, liberando seu tempo para focar apenas em proporcionar o melhor bronze.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
<div className="glass-panel rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group">
<div className="w-12 h-12 rounded-2xl bg-white/80 border border-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-[#C9A472]" icon="solar:graph-up-bold-duotone"></iconify-icon>
</div>
<div>
<div className="text-4xl sm:text-5xl font-[Cormorant_Garamond] font-semibold text-[#8B5E30] mb-2">+<span className="counter" data-count="35">0</span>%</div>
<div className="text-sm text-[#6B6B6B] font-normal leading-relaxed">Faturamento médio com lembretes</div>
</div>
</div>
<div className="glass-panel rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group delay-100">
<div className="w-12 h-12 rounded-2xl bg-white/80 border border-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-[#C9A472]" icon="solar:users-group-rounded-bold-duotone"></iconify-icon>
</div>
<div>
<div className="text-4xl sm:text-5xl font-[Cormorant_Garamond] font-semibold text-[#8B5E30] mb-2">-<span className="counter" data-count="80">0</span>%</div>
<div className="text-sm text-[#6B6B6B] font-normal leading-relaxed">Redução nas taxas de no-show</div>
</div>
</div>
<div className="glass-panel rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group delay-200">
<div className="w-12 h-12 rounded-2xl bg-white/80 border border-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-[#C9A472]" icon="solar:clock-circle-bold-duotone"></iconify-icon>
</div>
<div>
<div className="text-4xl sm:text-5xl font-[Cormorant_Garamond] font-semibold text-[#8B5E30] mb-2"><span className="counter" data-count="4">0</span>h/dia</div>
<div className="text-sm text-[#6B6B6B] font-normal leading-relaxed">Economizadas em atendimento</div>
</div>
</div>
<div className="glass-panel rounded-[28px] p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group delay-300">
<div className="w-12 h-12 rounded-2xl bg-white/80 border border-white flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-[#C9A472]" icon="solar:heart-bold-duotone"></iconify-icon>
</div>
<div>
<div className="text-4xl sm:text-5xl font-[Cormorant_Garamond] font-semibold text-[#8B5E30] mb-2"><span className="counter" data-count="98">0</span>%</div>
<div className="text-sm text-[#6B6B6B] font-normal leading-relaxed">Satisfação das clientes com a agilidade</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl px-6 lg:px-10 mt-10 mx-auto animate-on-scroll">
<div className="glass-panel overflow-hidden rounded-[32px]">
<div className="flex items-end justify-between p-8 sm:p-10 border-b border-white/60 bg-white/30 backdrop-blur-md">
<div>
<p className="text-xs uppercase text-[#B07840] font-medium tracking-widest mb-3">Simples assim</p>
<h2 className="text-3xl sm:text-4xl text-[#2C2C2C] font-[Poppins] font-medium tracking-tight">3 passos para transformar seu estúdio</h2>
</div>
</div>
<div className="p-8 sm:p-10 border-b border-white/60 hover:bg-white/40 transition-colors duration-500 relative group overflow-hidden">

<div className="absolute -inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
<div className="md:col-span-1">
<div className="text-4xl sm:text-5xl text-[#C9A472]/30 tabular-nums font-[Cormorant_Garamond] font-semibold group-hover:text-[#B07840] group-hover:-translate-y-1 transition-all duration-500">01</div>
</div>
<div className="md:col-span-8">
<h3 className="text-lg sm:text-xl font-medium text-[#2C2C2C] font-[Poppins] mb-2">Crie sua conta</h3>
<p className="text-sm text-[#6B6B6B] leading-relaxed font-normal">Preencha nome, email e dados do estúdio. Leva menos de 3 minutos e você não precisa cadastrar cartão de crédito.</p>
</div>
<div className="md:col-span-3 md:text-right hidden md:block">
<div className="w-16 h-16 ml-auto rounded-full bg-white/60 border border-white/50 flex items-center justify-center text-[#B07840] shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:user-plus-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="p-8 sm:p-10 border-b border-white/60 hover:bg-white/40 transition-colors duration-500 relative group overflow-hidden">
<div className="absolute -inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
<div className="md:col-span-1">
<div className="text-4xl sm:text-5xl text-[#C9A472]/30 tabular-nums font-[Cormorant_Garamond] font-semibold group-hover:text-[#B07840] group-hover:-translate-y-1 transition-all duration-500">02</div>
</div>
<div className="md:col-span-8">
<h3 className="text-lg sm:text-xl font-medium text-[#2C2C2C] font-[Poppins] mb-2">Configure tudo</h3>
<p className="text-sm text-[#6B6B6B] leading-relaxed font-normal">Conecte seu WhatsApp, defina seus horários de atendimento, serviços e preços. O aplicativo faz o resto por você.</p>
</div>
<div className="md:col-span-3 md:text-right hidden md:block">
<div className="w-16 h-16 ml-auto rounded-full bg-white/60 border border-white/50 flex items-center justify-center text-[#B07840] shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="p-8 sm:p-10 hover:bg-white/40 transition-colors duration-500 relative group overflow-hidden">
<div className="absolute -inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
<div className="md:col-span-1">
<div className="text-4xl sm:text-5xl text-[#C9A472]/30 tabular-nums font-[Cormorant_Garamond] font-semibold group-hover:text-[#B07840] group-hover:-translate-y-1 transition-all duration-500">03</div>
</div>
<div className="md:col-span-8">
<h3 className="text-lg sm:text-xl font-medium text-[#2C2C2C] font-[Poppins] mb-2">Relaxe e cresça</h3>
<p className="text-sm text-[#6B6B6B] leading-relaxed font-normal">Clientes marcam sozinhas, pagam o sinal via PIX e recebem confirmação. Você só foca em entregar o bronze perfeito.</p>
</div>
<div className="md:col-span-3 md:text-right hidden md:block">
<div className="w-16 h-16 ml-auto rounded-full bg-white/60 border border-white/50 flex items-center justify-center text-[#B07840] shadow-sm group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-3xl" icon="solar:sun-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 sm:p-10 border-t border-white/60 bg-white/30 backdrop-blur-md">
<p className="text-sm text-[#6B6B6B] font-medium">Comece hoje e veja a diferença na primeira semana.</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center justify-center h-12 px-6 rounded-2xl text-sm font-medium text-white bg-gradient-to-r from-[#B07840] to-[#8B5E30] hover:scale-105 transition-transform duration-300 shadow-[0_8px_20px_rgba(176,120,64,0.3)]" href="#comecar">
            Começar Agora · 7 Dias Grátis
          </a>
</div>
</div>
</div>
</section>

<section className="max-w-7xl px-6 lg:px-10 mt-28 mx-auto animate-on-scroll" id="precos">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 bg-white/60 border border-white/50 text-[#8B5E30] text-xs font-medium tracking-widest uppercase shadow-sm mb-6">
        Preços justos, sem letras miúdas
      </div>
<h2 className="text-3xl sm:text-4xl text-[#2C2C2C] font-[Poppins] font-medium tracking-tight mb-4">O que você economiza já paga a mensalidade.</h2>
<p className="text-base text-[#6B6B6B] font-normal">Todo o poder da Sunya, com você no controle.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">

<div className="glass-panel p-8 rounded-[32px] flex flex-col hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-xl font-medium text-[#2C2C2C] font-[Poppins] mb-1">Brilho</h3>
<p className="text-sm text-[#6B6B6B] mb-6 min-h-[40px] font-normal">Estúdio pequeno · 20-50 agendamentos/mês</p>
<div className="mb-8 border-b border-white/60 pb-6">
<span className="text-4xl font-[Cormorant_Garamond] font-semibold text-[#8B5E30]">R$ 59</span><span className="text-[#6B6B6B] text-sm font-medium">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-[#2C2C2C] font-normal">
<iconify-icon className="text-[#B07840] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Agenda digital ilimitada</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2C2C2C] font-normal">
<iconify-icon className="text-[#B07840] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>CRM de clientes ilimitado</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2C2C2C] font-normal">
<iconify-icon className="text-[#B07840] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Cronômetro 4×30min</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2C2C2C] font-normal">
<iconify-icon className="text-[#B07840] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Controle financeiro completo</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#6B6B6B] opacity-50 font-normal">
<iconify-icon className="text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Sunya Assistente (IA)</span>
</li>
</ul>
<a className="w-full inline-flex justify-center items-center h-12 rounded-2xl bg-white/60 backdrop-blur-md text-[#2C2C2C] text-sm font-medium border border-white/60 hover:bg-white hover:shadow-md transition-all duration-300" href="#comecar">Começar Grátis</a>
</div>

<div className="bg-[#8B5E30]/90 backdrop-blur-2xl border border-white/20 p-8 rounded-[32px] flex flex-col relative transform md:-translate-y-6 shadow-[0_30px_60px_-15px_rgba(139,94,48,0.5)] z-10">

<div className="absolute inset-0 bg-gradient-to-tr from-[#B07840]/40 to-transparent blur-2xl rounded-[32px] -z-10 pointer-events-none"></div>
<div className="absolute -top-4 inset-x-0 flex justify-center">
<span className="bg-gradient-to-r from-[#EFD5A8] to-[#C9A472] text-[#8B5E30] text-[10px] font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg border border-white/40">Mais Escolhido</span>
</div>
<h3 className="text-xl font-medium text-white font-[Poppins] mb-1">Bronze</h3>
<p className="text-sm text-white/80 mb-6 min-h-[40px] font-normal">Estúdio médio · 50-120 agendamentos/mês</p>
<div className="mb-8 border-b border-white/20 pb-6">
<span className="text-5xl font-[Cormorant_Garamond] font-semibold text-white">R$ 139</span><span className="text-white/80 text-sm font-medium">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white font-medium">
<iconify-icon className="text-[#EFD5A8] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Tudo do plano Brilho, mais:</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/90 font-normal">
<iconify-icon className="text-[#EFD5A8] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Sunya Assistente (500 conversas)</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/90 font-normal">
<iconify-icon className="text-[#EFD5A8] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Confirmação automática</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/90 font-normal">
<iconify-icon className="text-[#EFD5A8] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Lembrete 2h antes</span>
</li>
<li className="flex items-start gap-3 text-sm text-white/90 font-normal">
<iconify-icon className="text-[#EFD5A8] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Agenda sincronizada com IA</span>
</li>
</ul>
<a className="w-full inline-flex justify-center items-center h-12 rounded-2xl bg-white text-[#8B5E30] text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.15)]" href="#comecar">Começar Grátis</a>
</div>

<div className="glass-panel p-8 rounded-[32px] flex flex-col hover:-translate-y-2 transition-transform duration-500">
<h3 className="text-xl font-medium text-[#2C2C2C] font-[Poppins] mb-1">Dourada</h3>
<p className="text-sm text-[#6B6B6B] mb-6 min-h-[40px] font-normal">Estúdio grande · 120+ agendamentos/mês</p>
<div className="mb-8 border-b border-white/60 pb-6">
<span className="text-4xl font-[Cormorant_Garamond] font-semibold text-[#8B5E30]">R$ 239</span><span className="text-[#6B6B6B] text-sm font-medium">/mês</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-[#2C2C2C] font-medium">
<iconify-icon className="text-[#B07840] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Tudo do plano Bronze, mais:</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2C2C2C] font-normal">
<iconify-icon className="text-[#B07840] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Sunya Assistente ILIMITADA</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2C2C2C] font-normal">
<iconify-icon className="text-[#B07840] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Feedback pós-sessão</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2C2C2C] font-normal">
<iconify-icon className="text-[#B07840] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Reativação inteligente</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#2C2C2C] font-normal">
<iconify-icon className="text-[#B07840] text-lg shrink-0 mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
<span>Até 3 usuários simultâneos</span>
</li>
</ul>
<a className="w-full inline-flex justify-center items-center h-12 rounded-2xl bg-white/60 backdrop-blur-md text-[#2C2C2C] text-sm font-medium border border-white/60 hover:bg-white hover:shadow-md transition-all duration-300" href="#comecar">Começar Grátis</a>
</div>
</div>
<div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-[#6B6B6B] font-medium glass-panel w-max mx-auto px-6 py-3 rounded-full">
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#C9A472] text-base" icon="solar:shield-check-bold"></iconify-icon> 7 Dias Grátis</span>
<span className="hidden sm:inline text-white/40">|</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#C9A472] text-base" icon="solar:card-bold"></iconify-icon> Sem cartão</span>
<span className="hidden sm:inline text-white/40">|</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#C9A472] text-base" icon="solar:close-circle-bold"></iconify-icon> Cancele quando quiser</span>
</div>
</section>

<section className="mt-32 mb-20 px-6 max-w-5xl mx-auto text-center animate-on-scroll">
<div className="bg-[#B07840]/90 backdrop-blur-2xl border border-white/20 rounded-[40px] p-10 sm:p-16 relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(139,94,48,0.4)] group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#EFD5A8]/30 via-transparent to-transparent group-hover:scale-110 transition-transform duration-1000"></div>
<div className="relative z-10">
<h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight text-white font-[Poppins] font-medium tracking-tight mb-6 max-w-2xl mx-auto">Pronta para o estúdio que você sempre sonhou?</h2>
<p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-10 font-normal">Chega de papel e estresse. Comece agora, receba suas clientes com mais conforto e veja seu faturamento crescer.</p>
<a className="inline-flex items-center justify-center h-14 px-8 rounded-2xl text-base font-medium text-[#8B5E30] bg-white hover:scale-105 transition-transform duration-300 shadow-[0_12px_30px_rgba(0,0,0,0.15)]" href="#comecar">
                Testar 7 Dias Grátis Agora
            </a>
</div>
</div>
</section>

<footer className="z-10 animate-on-scroll glass-header border-t relative mt-20">
<div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
<div className="flex flex-col lg:flex-row items-start justify-between gap-12">
<div className="max-w-sm">
<a className="inline-flex items-center gap-3" href="#">
<div className="relative flex items-center justify-center w-8 h-5">
<div className="absolute left-0 w-5 h-5 rounded-full bg-[#EFD5A8] opacity-90 mix-blend-multiply"></div>
<div className="absolute left-1.5 w-5 h-5 rounded-full bg-[#C9A472] opacity-90 mix-blend-multiply"></div>
<div className="absolute left-3 w-5 h-5 rounded-full bg-[#B07840] opacity-90 mix-blend-multiply"></div>
<div className="absolute left-4.5 w-5 h-5 rounded-full bg-[#8B5E30] opacity-90 mix-blend-multiply"></div>
</div>
<span className="text-lg font-medium tracking-widest text-[#8B5E30] font-[Cormorant_Garamond] uppercase mt-1">Sunya</span>
</a>
<p className="mt-6 text-sm text-[#6B6B6B] leading-relaxed font-normal">A plataforma de gestão mais completa e acolhedora para estúdios de bronzeamento do Brasil. Organize seu dia, encante suas clientes.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-auto">
<div>
<p className="text-sm font-medium text-[#2C2C2C] font-[Poppins]">Produto</p>
<ul className="mt-5 space-y-4 text-sm text-[#6B6B6B] font-normal">
<li><a className="hover:text-[#B07840] transition duration-300" href="#funcionalidades">Funcionalidades</a></li>
<li><a className="hover:text-[#B07840] transition duration-300" href="#precos">Preços</a></li>
<li><a className="hover:text-[#B07840] transition duration-300 flex items-center gap-2" href="#">Marketplace <span className="text-[10px] bg-white/60 border border-white/50 text-[#8B5E30] px-1.5 py-0.5 rounded shadow-sm">Em breve</span></a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-[#2C2C2C] font-[Poppins]">Empresa</p>
<ul className="mt-5 space-y-4 text-sm text-[#6B6B6B] font-normal">
<li><a className="hover:text-[#B07840] transition duration-300" href="#">Sobre a Sunya</a></li>
<li><a className="hover:text-[#B07840] transition duration-300" href="#">Blog</a></li>
<li><a className="hover:text-[#B07840] transition duration-300" href="#">Contato</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-[#2C2C2C] font-[Poppins]">Legal</p>
<ul className="mt-5 space-y-4 text-sm text-[#6B6B6B] font-normal">
<li><a className="hover:text-[#B07840] transition duration-300" href="#">Termos de Uso</a></li>
<li><a className="hover:text-[#B07840] transition duration-300" href="#">Privacidade</a></li>
<li><a className="hover:text-[#B07840] transition duration-300" href="#">Suporte</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/60 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-[#6B6B6B] font-normal">© 2026 Sunya. Todos os direitos reservados.</p>
<div className="flex items-center gap-4">
<a className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 hover:bg-white transition-all duration-300 text-[#B07840] shadow-sm hover:-translate-y-1" href="#">
<iconify-icon className="text-lg" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 hover:bg-white transition-all duration-300 text-[#B07840] shadow-sm hover:-translate-y-1" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
