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



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


        document.addEventListener('DOMContentLoaded', () => {
            lucide.createIcons();

            const reveals = document.querySelectorAll('.reveal');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;
                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.remove('opacity-0', 'translate-y-8', 'scale-[0.98]', 'blur-md');
                        reveal.classList.add('opacity-100', 'translate-y-0', 'scale-100', 'blur-0');
                    }
                });
            };
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();

            const counters = document.querySelectorAll('.counter');
            let hasAnimated = false;
            
            const animateCounters = () => {
                counters.forEach(counter => {
                    const target = parseFloat(counter.getAttribute('data-target'));
                    const isFloat = target % 1 !== 0;
                    const duration = 2000;
                    const increment = target / (duration / 16);
                    let current = 0;
                    
                    const updateCount = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = isFloat ? current.toFixed(1) : Math.ceil(current);
                            requestAnimationFrame(updateCount);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCount();
                });
            };

            const metricsSection = document.querySelector('.counter')?.closest('section');
            if(metricsSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !hasAnimated) {
                            animateCounters();
                            hasAnimated = true;
                        }
                    });
                }, { threshold: 0.5 });
                observer.observe(metricsSection);
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
      
<div className="fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="pia5ESUYTMCLJATXcj8v"></div>

</div>
</div>
<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-slate-950/80 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col group" href="#">
<span className="group-hover:text-[#D4AF37] transition-colors duration-500 text-xl font-light text-white tracking-tight font-serif">AVOKATE</span>
<span className="text-xs font-light uppercase tracking-widest text-slate-400 group-hover:text-white/80">Këshillim Juridik</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#inicio">Kreu</a>
<a className="hover:text-white transition-colors duration-300" href="#quem-somos">Kush Jemi</a>
<a className="hover:text-white transition-colors duration-300" href="#filosofia">Filozofia</a>
<a className="hover:text-white transition-colors duration-300" href="#midia">Media</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-light text-[#D4AF37] border border-[#D4AF37]/30 bg-[#D4AF37]/5 rounded-md hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_15px_-5px_rgba(212,175,55,0.3)]" href="#">
<i className="w-4 h-4" data-lucide="alarm-clock" strokeWidth="1.5"></i>
                    Shërbim Emergjent 24h
                </a>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>
<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="inicio">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="text-left">
<div className="reveal transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 text-sm font-light text-[#D4AF37] mb-8 shadow-[0_0_15px_-5px_rgba(212,175,55,0.3)] opacity-100 translate-y-0 scale-100 blur-0">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D4AF37]"></span>
</span>
                    Avokati Penale e Specializuar
                </div>
<h1 className="reveal transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white mb-6 leading-[1.1] opacity-100 translate-y-0 scale-100 blur-0">
                    Mbrojtje Penale <br/>
<span className="italic bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent">Strategjike</span> &amp; <br/>
                    Njerëzore.
                </h1>
<p className="reveal transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 text-xl text-slate-400 max-w-xl mb-10 font-extralight leading-relaxed opacity-100 translate-y-0 scale-100 blur-0">
                    Këshillim juridik i plotë për individë dhe biznese. Duke mbrojtur lirinë tuaj brenda kufijve ligjorë dhe garancive të së drejtës penale.
                </p>
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 flex flex-col sm:flex-row items-center gap-4">
<a className="group w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-normal rounded hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center flex items-center justify-center gap-2" href="#">
                        Flisni me një Specialist
                        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 border border-white/10 text-white text-sm font-light rounded hover:bg-white/5 hover:border-white/20 transition-all text-center flex items-center justify-center" href="#quem-somos">
                        Njihuni me Studion
                    </a>
</div>
</div>
<div className="reveal transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900/10 backdrop-blur-sm opacity-100 translate-y-0 scale-100 blur-0">
</div>
</div>
</header>
<section className="border-y border-white/[0.06] bg-white/[0.01] py-10 relative overflow-hidden reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]" id="midia">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-sm font-light text-slate-500 uppercase tracking-widest">Studio në Media dhe Shtyp</p>
</div>
<div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] w-full inline-flex flex-nowrap overflow-hidden">
<div className="flex items-center justify-center md:justify-start [&amp;_li]:mx-8 hover:[animation-play-state:paused] w-max" style={{animation: 'scroll 40s linear infinite'}}>
<div className="flex items-center gap-16 md:gap-24 px-8 opacity-60 hover:opacity-100 transition-all duration-500">
<span className="flex items-center gap-2 text-xl font-serif font-light text-white tracking-tight"><i className="w-5 h-5" data-lucide="tv" strokeWidth="1.5"></i> Televizion</span>
<span className="flex items-center gap-2 text-xl font-serif font-light text-white tracking-tight"><i className="w-5 h-5" data-lucide="radio" strokeWidth="1.5"></i> Radio</span>
<span className="flex items-center gap-2 text-xl font-serif font-light text-white tracking-tight"><i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i> Gazeta</span>
<span className="flex items-center gap-2 text-xl font-serif font-light text-white tracking-tight"><i className="w-5 h-5" data-lucide="mic" strokeWidth="1.5"></i> Podkaste</span>
<span className="flex items-center gap-2 text-xl font-serif font-light text-white tracking-tight"><i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i> Portale Juridike</span>
</div>
<div className="flex items-center gap-16 md:gap-24 px-8 opacity-60 hover:opacity-100 transition-all duration-500">
<span className="flex items-center gap-2 text-xl font-serif font-light text-white tracking-tight"><i className="w-5 h-5" data-lucide="tv" strokeWidth="1.5"></i> Televizion</span>
<span className="flex items-center gap-2 text-xl font-serif font-light text-white tracking-tight"><i className="w-5 h-5" data-lucide="radio" strokeWidth="1.5"></i> Radio</span>
<span className="flex items-center gap-2 text-xl font-serif font-light text-white tracking-tight"><i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i> Gazeta</span>
<span className="flex items-center gap-2 text-xl font-serif font-light text-white tracking-tight"><i className="w-5 h-5" data-lucide="mic" strokeWidth="1.5"></i> Podkaste</span>
<span className="flex items-center gap-2 text-xl font-serif font-light text-white tracking-tight"><i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i> Portale Juridike</span>
</div>
</div>
</div>
</section>
<section className="py-24 border-b border-white/[0.06]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-serif font-light text-white tracking-tight mb-2">
                        +<span className="counter" data-target="10">1</span> Vite
                    </div>
<div className="text-sm font-light text-slate-500 uppercase tracking-widest">Përvojë Juridike</div>
</div>
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-serif font-light text-white tracking-tight mb-2">
<span className="counter" data-target="150">2</span>+
                    </div>
<div className="text-sm font-light text-slate-500 uppercase tracking-widest">Artikuj të Publikuar</div>
</div>
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-serif font-light text-white tracking-tight mb-2">
<span className="counter" data-target="24">1</span>h
                    </div>
<div className="text-sm font-light text-slate-500 uppercase tracking-widest">Shërbim Aktiv</div>
</div>
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-serif font-light text-white tracking-tight mb-2">
<span className="counter" data-target="100">1</span>%
                    </div>
<div className="text-sm font-light text-slate-500 uppercase tracking-widest">Konfidencialitet</div>
</div>
</div>
</div>
</section>
<section className="py-24 border-t border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent" id="quem-somos">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-5 reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<h2 className="font-serif font-light text-3xl md:text-4xl text-white mb-6 tracking-tight">
                        Udhëhequr nga <br/>
<span className="text-[#D4AF37]">Ekipi Ynë</span>
</h2>
<p className="text-slate-400 leading-relaxed mb-8 font-extralight text-xl">
                        Avokatë penalë aktivë prej vitesh. Me një mentalitet vizionar, kombinojmë teknikën e rafinuar juridike me menaxhimin e nivelit të lartë.
                    </p>
<div className="h-px w-24 bg-[#D4AF37] mb-6 shadow-[0_0_10px_#D4AF37]"></div>
<p className="text-sm font-light text-slate-500 uppercase tracking-widest">LICENCA: XX.XXX</p>
</div>
<div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 p-8 rounded-xl bg-[#0B0C10] border border-white/[0.08] hover:border-[#D4AF37]/30 transition-colors relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D4AF37]/5 blur-[50px] group-hover:bg-[#D4AF37]/10 transition-all duration-700 rounded-full"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 border border-[#D4AF37]/20">
<i className="w-5 h-5" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-serif font-light mb-2 text-xl tracking-tight">MBA në Menaxhim</h3>
<p className="text-base text-slate-400 font-extralight">Nga Institucioni (2024). Vizion strategjik i aplikuar në drejtësi.</p>
</div>
</div>
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 p-8 rounded-xl bg-[#0B0C10] border border-white/[0.08] hover:border-[#D4AF37]/30 transition-colors relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-[#D4AF37]/5 blur-[50px] group-hover:bg-[#D4AF37]/10 transition-all duration-700 rounded-full"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] mb-6 border border-[#D4AF37]/20">
<i className="w-5 h-5" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-white font-serif font-light mb-2 text-xl tracking-tight">Specialist Penal</h3>
<p className="text-base text-slate-400 font-extralight">Studime pasuniversitare në të Drejtën Penale, Procedurën Penale dhe Administrative.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative" id="filosofia">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:mb-28 reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<span className="text-[#D4AF37] text-sm font-light tracking-widest uppercase mb-2 block">Filozofia Jonë</span>
<h2 className="text-3xl md:text-4xl font-serif font-light text-white tracking-tight mb-4">Shtyllat e Studios</h2>
<p className="text-slate-400 max-w-xl text-xl font-extralight">Themelet që udhëheqin veprimtarinë tonë në mbrojtjen e të drejtave tuaja.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/30 duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/20 shadow-[0_0_15px_-5px_rgba(212,175,55,0.5)]">
<i className="w-5 h-5" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-serif font-light text-white tracking-tight mb-3">Misioni</h3>
<p className="text-base text-slate-400 leading-relaxed mb-6 font-extralight">
                            Të mbrojmë dhe përfaqësojmë juridikisht ata që janë viktima ose të akuzuar në procese penale, me qasje këshilluese, strategjike dhe njerëzore.
                        </p>
</div>
</div>
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/30 duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/20 shadow-[0_0_15px_-5px_rgba(212,175,55,0.5)]">
<i className="w-5 h-5" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-serif font-light text-white tracking-tight mb-3">Vizioni</h3>
<p className="text-base text-slate-400 leading-relaxed mb-6 font-extralight">
                            Të jemi referencë në të drejtën penale. Të zhvillojmë avokatinë në mënyrë inovative.
                        </p>
</div>
</div>
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/30 duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center mb-6 text-[#D4AF37] border border-[#D4AF37]/20 shadow-[0_0_15px_-5px_rgba(212,175,55,0.5)]">
<i className="w-5 h-5" data-lucide="diamond" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-serif font-light text-white tracking-tight mb-3">Vlerat</h3>
<p className="text-base text-slate-400 leading-relaxed mb-6 font-extralight">
                            Të punojmë në mënyrë etike, transparente, të ndershme dhe të synojmë cilësinë teknike dhe përsosmërinë në shërbim.
                        </p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 md:py-32 relative overflow-hidden border-t border-white/[0.06]" id="contato">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]">
<h2 className="text-3xl md:text-5xl font-serif font-light text-white tracking-tight mb-6">Shërbim <span className="italic text-[#D4AF37]">Konfidencial</span></h2>
<p className="text-slate-400 text-xl font-extralight">Caktoni takimin tuaj në një mjedis privat. Liria juaj është prioriteti ynë.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<form className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-100 space-y-6 bg-[#0E0F14]/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/[0.08] shadow-2xl relative">
<div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
<div className="space-y-2 relative z-10">
<label className="text-xs font-light text-slate-500 uppercase tracking-widest">Emri i Plotë</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-base text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors font-light" placeholder="Emri juaj" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
<div className="space-y-2">
<label className="text-xs font-light text-slate-500 uppercase tracking-widest">Email</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-base text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors font-light" placeholder="emaili@juaj.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-light text-slate-500 uppercase tracking-widest">Telefoni</label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-base text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors font-light" placeholder="+355 6X XXX XXXX" type="tel"/>
</div>
</div>
<div className="space-y-2 relative z-10">
<label className="text-xs font-light text-slate-500 uppercase tracking-widest">Mesazhi (Opsionale)</label>
<textarea className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-base text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors resize-none font-light" placeholder="Përshkrim i shkurtër i rastit..." rows="4"></textarea>
</div>
<div className="pt-4 relative z-10">
<button className="w-full bg-gradient-to-b from-[#D4AF37] to-[#b5952f] hover:from-[#b5952f] hover:to-[#967d29] text-black font-normal py-3.5 rounded text-base transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]" type="button">
                            Cakto Takimin
                        </button>
</div>
</form>
<div className="reveal opacity-0 translate-y-8 scale-[0.98] blur-md transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] delay-200 flex flex-col justify-center space-y-8">
<div className="flex items-start gap-4">
<div className="mt-1 p-2 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white font-light mb-1 text-lg">Zyra</h4>
<p className="text-slate-400 text-base leading-relaxed font-extralight">
                                Adresa Demo, Rruga Kryesore,<br/>
                                Qyteti, Shteti<br/>
                                Kodi Postar: 1000
                            </p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-2 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white font-light mb-1 text-lg">Telefoni</h4>
<p className="text-slate-400 text-base font-extralight">+355 4X XXX XXX</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="p-2 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37]">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-white font-light mb-1 text-lg">Email</h4>
<p className="text-slate-400 text-base font-extralight">kontakt@studiodemo.com</p>
</div>
</div>
<div className="pt-8 border-t border-white/5">
<p className="text-slate-500 text-sm font-light mb-2">Orari i Punës:</p>
<p className="text-slate-300 text-base font-light">E Hënë - E Premte: 08:00 - 18:00</p>
<p className="text-[#D4AF37] text-base mt-1 font-light">Shërbim emergjent 24 orë</p>
</div>
</div>
</div>
</div>
</section>
<footer className="border-t border-white/[0.06] bg-[#0B0C10] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<span className="font-serif text-xl font-medium tracking-tight text-white">STUDIO DEMO</span>
</div>
<p className="text-base text-slate-500 max-w-xs leading-relaxed font-extralight">
                        Përsosmëri teknike dhe përkushtim në mbrojtjen e të drejtave tuaja. Avokati penale e fokusuar në rezultate.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-light uppercase tracking-widest mb-6">Navigimi</h4>
<ul className="space-y-4 text-base text-slate-500 font-light">
<li><a className="hover:text-[#D4AF37] transition-colors" href="#inicio">Kreu</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#quem-somos">Kush Jemi</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#filosofia">Filozofia</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#midia">Media</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-light uppercase tracking-widest mb-6">Ligjore</h4>
<ul className="space-y-4 text-base text-slate-500 font-light">
<li>NIPT: XXXXXXXXX</li>
<li>Licenca: XX.XXX</li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Kushtet e Përdorimit</a></li>
<li><a className="hover:text-[#D4AF37] transition-colors" href="#">Privatësia</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-600 font-light">© 2024 Studio Ligjore Demo. Të gjitha të drejtat e rezervuara.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<i className="w-[18px] h-[18px]" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<i className="w-[18px] h-[18px]" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<i className="w-[18px] h-[18px]" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
