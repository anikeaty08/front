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



        // Inicializace ikon
        lucide.createIcons();

        // Mobilní Menu Logika
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        mobileMenuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28" height="28"></iconify-icon>';
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>';
            }
        });

        // Zavření menu po kliknutí na odkaz
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                mobileMenuBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28" height="28"></iconify-icon>';
            });
        });

        // FAQ Akordeon Logika
        document.querySelectorAll('.faq-item').forEach(item => {
            const header = item.querySelector('.faq-header');
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('.faq-icon');

            header.addEventListener('click', () => {
                const isOpen = !content.classList.contains('hidden');
                
                // Zavře všechny ostatní
                document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
                document.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

                // Otevře kliknutý pokud byl zavřený
                if (!isOpen) {
                    content.classList.remove('hidden');
                    icon.style.transform = 'rotate(45deg)';
                }
            });
        });

        // Sticky Mobile CTA Observer
        const sentinel = document.getElementById('hero-sentinel');
        const mobileCta = document.getElementById('mobile-cta');

        if (sentinel && mobileCta) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting && window.scrollY > 100) {
                        mobileCta.classList.remove('translate-y-full');
                    } else {
                        mobileCta.classList.add('translate-y-full');
                    }
                });
            }, { threshold: 0 });

            observer.observe(sentinel);
        }
    
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
      

<header className="w-full border-b bg-[#050505] sticky top-0 z-50 border-neutral-800">
<div className="border-x flex md:px-8 bg-[#050505] h-20 max-w-7xl border-neutral-800 mr-auto ml-auto pr-5 pl-5 items-center justify-between">

<a className="flex items-center gap-3 shrink-0 hover:opacity-80 transition-opacity" href="#">
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12H13" stroke="#D6FF33" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3"></path>
<path d="M4 8H13" stroke="#D6FF33" strokeLinecap="square" strokeWidth="3"></path>
</svg>
<span className="text-2xl font-semibold font-manrope whitespace-nowrap tracking-tight text-white">Web na míru</span>
</a>

<button className="md:hidden flex items-center justify-center text-neutral-400 hover:text-white transition-colors" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>

<nav className="hidden md:flex flex-1 items-center justify-center gap-8">
<a className="hover:text-white transition-colors whitespace-nowrap text-base font-normal text-neutral-400 font-geist" href="#navrh-zdarma">Jak to funguje</a>
<a className="hover:text-white transition-colors whitespace-nowrap text-base font-normal text-neutral-400 font-geist" href="#sluzby">Služby</a>
<a className="hover:text-white transition-colors whitespace-nowrap text-base font-normal text-neutral-400 font-geist" href="#reference">Reference</a>
<a className="hover:text-white transition-colors whitespace-nowrap text-base font-normal text-neutral-400 font-geist" href="#cenik">Ceník</a>
<a className="hover:text-white transition-colors whitespace-nowrap text-base font-normal text-neutral-400 font-geist" href="#faq">FAQ</a>
</nav>

<div className="hidden md:flex items-center justify-end shrink-0">
<a className="flex items-center gap-1.5 hover:bg-[#c6ec2d] transition-colors text-base font-semibold text-black font-geist bg-[#D6FF33] rounded-[4px] px-5 py-2.5 shadow-[0_0_15px_rgba(214,255,51,0.15)] whitespace-nowrap" href="#navrh-zdarma">
                    Chci návrh zdarma <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-[#050505] border-b border-neutral-800 py-6 px-5 flex-col gap-5 shadow-2xl" id="mobile-menu">
<a className="mobile-link text-neutral-400 hover:text-white font-geist text-lg font-medium transition-colors" href="#navrh-zdarma">Jak to funguje</a>
<a className="mobile-link text-neutral-400 hover:text-white font-geist text-lg font-medium transition-colors" href="#sluzby">Služby</a>
<a className="mobile-link text-neutral-400 hover:text-white font-geist text-lg font-medium transition-colors" href="#reference">Reference</a>
<a className="mobile-link text-neutral-400 hover:text-white font-geist text-lg font-medium transition-colors" href="#cenik">Ceník</a>
<a className="mobile-link text-neutral-400 hover:text-white font-geist text-lg font-medium transition-colors" href="#faq">FAQ</a>
<a className="mobile-link mt-2 flex justify-center items-center gap-1.5 bg-[#D6FF33] text-black text-base font-semibold px-5 py-3 rounded-[4px] font-geist w-full" href="#navrh-zdarma">
                Chci návrh zdarma <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</header>

<main className="w-full relative bg-[#050505] flex flex-col min-h-[calc(100vh-5rem)]">
<div className="w-full flex-1 flex">
<div className="max-w-7xl w-full mx-auto border-x flex flex-col relative bg-[#050505] border-neutral-800">
<div className="grid grid-cols-1 lg:grid-cols-2 flex-1">

<div className="md:p-12 lg:p-20 md:py-16 flex flex-col z-10 lg:border-r lg:border-b-0 border-neutral-800 border-b pt-12 pr-6 pb-12 pl-6 justify-center">
<div className="inline-flex whitespace-nowrap uppercase md:mb-8 md:text-xs text-xs text-neutral-400 tracking-widest font-mono w-fit border-white/5 border rounded-[4px] mb-6 pt-2 pr-4 pb-2 pl-4 gap-x-2.5 gap-y-2.5 items-center">
<span className="w-1.5 h-1.5 bg-[#D6FF33]"></span>
                            Návrh webu zdarma a bez závazků
                        </div>
<h1 className="leading-[1.05] md:text-6xl lg:text-[4rem] md:mb-6 text-4xl font-medium text-white tracking-tight font-manrope mb-5">
                            Krásné weby,<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-bl from-white to-white/50">které prodávají</span>
</h1>
<p className="leading-relaxed md:text-xl md:mb-10 text-lg text-neutral-400 font-geist max-w-md mb-8">Nekupujte zajíce v pytli. Tvoříme weby na míru, které vydělávají. Přesvědčte se o naší kvalitě dříve, než se k čemukoliv zavážete.</p>
<div className="flex flex-col gap-6">
<a className="bg-[#D6FF33] text-black text-base font-semibold px-6 md:px-8 py-3.5 md:py-4 w-fit flex items-center gap-2 hover:bg-[#c6ec2d] transition-colors rounded-[4px] font-geist whitespace-nowrap shadow-none" href="#navrh-zdarma">
                                Získat návrh zdarma <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<div className="flex flex-wrap items-center gap-4 md:gap-6">
<div className="flex items-center gap-2 text-sm text-neutral-400 font-geist">
<iconify-icon className="text-[#D6FF33] text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span><b>100%</b> garance spokojenosti</span>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-400 font-geist">
<iconify-icon className="text-[#D6FF33] text-xl" icon="solar:stopwatch-linear"></iconify-icon>
<span>Kapacita: <b>2 projekty</b> / měsíc</span>
</div>
</div>
</div>
</div>

<div className="p-4 py-12 md:p-12 lg:p-20 flex overflow-hidden relative items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#D6FF33]/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="w-full max-w-[440px] h-[400px] md:h-[520px] bg-[#0A0A0A] rounded-2xl md:rounded-[24px] relative z-10 flex flex-col border border-white/[0.03] shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
<div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay z-50" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '24px 24px', maskImage: 'radial-gradient(circle at 80% 80%, black, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at 80% 80%, black, transparent 70%)'}}></div>
<div className="absolute top-6 md:top-8 left-4 md:left-6 w-[calc(100%-3rem)] md:w-[280px] max-w-[280px] h-[180px] md:h-[240px] bg-gradient-to-br from-[#161616] to-[#050505] rounded-xl border border-white/[0.05] p-4 md:p-5 rotate-[-4deg] opacity-50 blur-[1px] transform origin-bottom-left transition-opacity duration-500 group-hover:opacity-40 z-10 shadow-lg flex flex-col">
<div className="flex justify-between items-center mb-4 md:mb-6">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>
<span className="text-xs font-mono text-neutral-600 uppercase tracking-widest">Předchozí stav</span>
</div>
<div className="w-full bg-white/[0.02] rounded-lg p-3 md:p-4 mb-2 md:mb-3 border border-white/[0.02]">
<div className="text-neutral-500 text-xs font-geist mb-1">Měsíční poptávky</div>
<div className="flex items-baseline gap-2">
<div className="text-xl md:text-2xl text-neutral-400 font-semibold font-manrope tracking-tight">2</div>
<div className="text-xs text-neutral-500 font-medium flex items-center">/ měsíc</div>
</div>
</div>
<div className="flex gap-2 md:gap-3 mt-auto opacity-50">
<div className="w-1/2 h-8 md:h-10 bg-white/5 rounded-lg border border-white/[0.02]"></div>
<div className="w-1/2 h-8 md:h-10 bg-white/5 rounded-lg border border-white/[0.02]"></div>
</div>
</div>
<div className="absolute bottom-6 md:bottom-8 right-4 w-[calc(100%-2rem)] md:w-[340px] max-w-[340px] bg-[#050505] rounded-xl border border-white/10 p-4 md:p-5 flex flex-col gap-3 md:gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl z-20 transition-all duration-500 group-hover:border-[#D6FF33]/20 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(214,255,51,0.05)]">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D6FF33]/60 to-transparent"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D6FF33]/10 blur-[40px] rounded-full pointer-events-none z-0"></div>
<div className="flex justify-between items-center mb-0.5 md:mb-1 relative z-10">
<div className="flex gap-1.5">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>
<div className="px-2 md:px-2.5 py-0.5 md:py-1 rounded-full bg-[#D6FF33]/10 border border-[#D6FF33]/20 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#D6FF33] shadow-[0_0_8px_rgba(214,255,51,0.8)]"></span>
<span className="text-xs font-mono text-[#D6FF33] uppercase tracking-widest font-semibold">Nový web</span>
</div>
</div>
<div className="w-full bg-gradient-to-br from-white/[0.04] to-transparent rounded-xl border border-white/[0.06] p-3 md:p-4 flex flex-col relative z-10 overflow-hidden shadow-inner">
<div className="absolute top-0 right-0 p-3 opacity-20">
<i className="w-10 h-10 md:w-12 md:h-12 text-[#D6FF33]" data-lucide="phone-call" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col relative z-10">
<span className="text-xs font-semibold text-neutral-400 font-geist tracking-wide mb-0.5 md:mb-1">Získané poptávky</span>
<div className="flex items-baseline gap-2 mb-0.5 md:mb-1">
<span className="text-3xl md:text-4xl font-semibold text-white tracking-tight font-manrope">18</span>
<span className="text-xs md:text-sm text-[#D6FF33] font-semibold flex items-center gap-0.5"><i className="w-3 h-3" data-lucide="arrow-up" strokeWidth="2"></i> +16</span>
</div>
<span className="text-xs text-neutral-500 font-geist">Za posledních 30 dní</span>
</div>
</div>
<div className="flex gap-2 md:gap-3 h-[76px] md:h-[90px] relative z-10">
<div className="w-[45%] h-full bg-white/[0.02] rounded-xl border border-white/[0.04] p-2.5 md:p-3 flex flex-col justify-between">
<span className="text-xs text-neutral-400 font-geist leading-tight">Kliknutí na telefon</span>
<div className="">
<div className="text-xl md:text-2xl text-white font-semibold tracking-tight font-manrope mt-1">42</div>
<div className="text-xs text-neutral-500 font-medium mt-0.5 leading-none md:leading-tight hidden sm:block">Potenciální klienti</div>
</div>
</div>
<div className="flex-1 h-full bg-gradient-to-b from-[#D6FF33]/[0.08] to-transparent rounded-xl border border-[#D6FF33]/20 relative overflow-hidden flex items-end p-1.5 md:p-2 transition-colors duration-500 group-hover:border-[#D6FF33]/30 shadow-[0_0_15px_rgba(214,255,51,0.05)]">
<span className="absolute top-1.5 md:top-2 left-2 md:left-3 text-xs text-[#D6FF33]/80 font-mono font-semibold z-10">NÁVŠTĚVY</span>
<svg className="absolute bottom-0 left-0 w-full h-[120%] opacity-100 transform translate-y-1" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0 40 L0 35 C 20 35, 40 25, 50 15 C 60 5, 80 15, 100 -5 L100 40 Z" fill="url(#neon-gradient-chart)"></path>
<path className="drop-shadow-[0_0_8px_rgba(214,255,51,0.6)]" d="M0 35 C 20 35, 40 25, 50 15 C 60 5, 80 15, 100 -5" fill="none" stroke="#D6FF33" strokeLinecap="round" strokeWidth="2"></path>
<defs>
<lineargradient id="neon-gradient-chart" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#D6FF33" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#D6FF33" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full h-[1px] pointer-events-none" id="hero-sentinel"></div>
</div>
</div>

<div className="w-full border-y border-neutral-800 bg-[#050505] shrink-0 z-20">
<div className="max-w-7xl mx-auto border-x border-neutral-800 h-16 md:h-20 flex relative overflow-hidden bg-[#050505]">
<div className="hidden md:flex px-8 border-r border-neutral-800 items-center w-[280px] shrink-0 z-20 bg-[#050505]">
<div className="flex gap-3 uppercase text-xs tracking-widest font-mono items-center font-geist text-neutral-400">
<span className="w-1.5 h-1.5 bg-[#D6FF33] shrink-0"></span> Pracovní nástroje
                    </div>
</div>
<div className="flex-1 relative overflow-hidden flex items-center bg-[#050505]">
<div className="flex animate-marquee hover:[animation-play-state:paused] w-max">

<div className="flex items-center shrink-0 border-l border-neutral-800 h-16 md:h-20">
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#25D366] transition-colors" icon="simple-icons:whatsapp"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">WhatsApp</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#4A154B] transition-colors" icon="simple-icons:slack"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Slack</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-white transition-colors" icon="simple-icons:github"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">GitHub</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#00C7B7] transition-colors" icon="simple-icons:netlify"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Netlify</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#F24E1E] transition-colors" icon="simple-icons:figma"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Figma</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#D97757] transition-colors" icon="simple-icons:anthropic"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Claude</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-white transition-colors" icon="simple-icons:openai"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">OpenAI</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#8E75B2] transition-colors" icon="simple-icons:googlegemini"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Gemini</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-white transition-colors" icon="simple-icons:notion"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Notion</span>
</div>
</div>

<div className="flex items-center shrink-0 border-l border-neutral-800 h-16 md:h-20">
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#25D366] transition-colors" icon="simple-icons:whatsapp"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">WhatsApp</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#4A154B] transition-colors" icon="simple-icons:slack"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Slack</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-white transition-colors" icon="simple-icons:github"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">GitHub</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#00C7B7] transition-colors" icon="simple-icons:netlify"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Netlify</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#F24E1E] transition-colors" icon="simple-icons:figma"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Figma</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#D97757] transition-colors" icon="simple-icons:anthropic"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Claude</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-white transition-colors" icon="simple-icons:openai"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">OpenAI</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-[#8E75B2] transition-colors" icon="simple-icons:googlegemini"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Gemini</span>
</div>
<div className="h-full px-6 md:px-8 flex items-center justify-center border-r border-neutral-800 shrink-0 gap-2.5 group cursor-default">
<iconify-icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-600 group-hover:text-white transition-colors" icon="simple-icons:notion"></iconify-icon>
<span className="text-neutral-500 font-geist text-sm md:text-base group-hover:text-white transition-colors">Notion</span>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="bg-[#050505] w-full border-neutral-800 border-b scroll-mt-20" id="navrh-zdarma">
<div className="max-w-7xl mx-auto border-x flex flex-col items-center border-neutral-800 pt-20 md:pt-32 lg:pt-[20vh] pb-16 md:pb-24 px-5 md:px-12 lg:px-24 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D6FF33]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="uppercase text-sm tracking-widest font-mono mb-4 font-geist text-[#D6FF33] flex items-center gap-2 relative z-10">
<span className="w-1.5 h-1.5 bg-[#D6FF33]"></span> Exkluzivní nabídka
            </div>
<h2 className="text-4xl leading-[1.1] z-10 font-semibold text-white tracking-tight font-manrope text-center mb-5 relative md:text-5xl md:mb-6 lg:text-5xl">
                Nekupujte zajíce v pytli.<br/>
<span className="font-semibold text-neutral-400 tracking-tight font-manrope">Získejte ukázku zdarma.</span>
</h2>
<p className="leading-relaxed md:mb-16 md:text-lg text-lg text-neutral-400 font-geist text-center max-w-2xl z-10 mb-12 relative">Žádné šablony ani obecné ukázky. Ručně připravíme individuální návrh přesně pro vaši značku a potřeby. Bez rizika, zdarma a zcela bez závazků. </p>
<div className="grid grid-cols-1 md:grid-cols-4 border border-neutral-800 rounded-2xl bg-[#0A0A0A] relative z-10 overflow-hidden w-full max-w-5xl shadow-2xl">
<div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-neutral-800 relative hover:bg-white/[0.02] transition-colors group">
<div className="text-[#D6FF33] font-mono text-base mb-5 md:mb-6 flex justify-between items-center">
                        01
                        <iconify-icon className="text-neutral-500 group-hover:text-[#D6FF33] transition-colors" height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold font-manrope text-xl md:text-2xl mb-3 tracking-tight">Zájem o návrh</h3>
<p className="text-neutral-400 font-geist text-base md:text-lg leading-relaxed">Zabere to chvilku. Stačí projevit zájem a doplnit nám pár základních informací o vaší firmě.</p>
</div>
<div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-neutral-800 relative hover:bg-white/[0.02] transition-colors group">
<div className="text-[#D6FF33] font-mono text-base mb-5 md:mb-6 flex justify-between items-center">
                        02
                        <iconify-icon className="text-neutral-500 group-hover:text-[#D6FF33] transition-colors" height="24" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold font-manrope text-xl md:text-2xl mb-3 tracking-tight">Personalizace</h3>
<p className="text-neutral-400 font-geist text-base md:text-lg leading-relaxed">Ihned se pustíme do práce a bleskurychle navrhneme vizuální ukázku struktury přesně pro váš byznys.</p>
</div>
<div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-neutral-800 relative hover:bg-white/[0.02] transition-colors group">
<div className="text-[#D6FF33] font-mono text-base mb-5 md:mb-6 flex justify-between items-center">
                        03
                        <iconify-icon className="text-neutral-500 group-hover:text-[#D6FF33] transition-colors" height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold font-manrope text-xl md:text-2xl mb-3 tracking-tight">Krátký call</h3>
<p className="text-neutral-400 font-geist text-base md:text-lg leading-relaxed">Během krátkých 5–10 minut si návrh společně projdeme. Rychle, úderně a čistě k věci.</p>
</div>
<div className="p-6 md:p-8 relative hover:bg-white/[0.02] transition-colors group">
<div className="text-[#D6FF33] font-mono text-base mb-5 md:mb-6 flex justify-between items-center">
                        04
                        <iconify-icon className="text-neutral-500 group-hover:text-[#D6FF33] transition-colors" height="24" icon="solar:check-read-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold font-manrope text-xl md:text-2xl mb-3 tracking-tight">Rozhodnutí</h3>
<p className="text-neutral-400 font-geist text-base md:text-lg leading-relaxed">Dává to smysl? Do 48 hodin od schválení máte web spuštěný. Ne? Nic se neděje, návrh si necháte.</p>
</div>
</div>
<div className="mt-12 md:mt-16 relative z-10 flex flex-col items-center">
<a className="bg-[#D6FF33] text-black text-base font-semibold px-8 py-4 md:px-10 md:py-5 w-fit flex items-center justify-center gap-2 hover:bg-[#c6ec2d] transition-colors rounded-[4px] shadow-[0_0_30px_rgba(214,255,51,0.2)] font-geist whitespace-nowrap" href="#kontakt">
                    Nezávazně získat návrh <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<span className="text-sm text-neutral-500 font-geist mt-4">Nezabere vám to více než 2 minuty.</span>
</div>
</div>
</section>

<section className="scroll-mt-20 bg-[#050505] w-full border-neutral-800 border-b" id="sluzby">
<div className="max-w-7xl mx-auto border-x w-full flex flex-col border-neutral-800">
<div className="grid grid-cols-1 lg:grid-cols-2 p-6 md:p-16 lg:p-24 pt-20 md:pt-32 lg:pt-[20vh] pb-12 md:pb-16 lg:gap-0 border-neutral-800 border-b gap-x-12 gap-y-10 md:gap-y-12">
<div className="flex flex-col justify-end">
<div className="uppercase text-sm tracking-widest font-mono mb-4 font-geist text-neutral-400">Náš přístup</div>
<h2 className="text-4xl md:text-5xl lg:text-7xl leading-[1.05] font-semibold font-manrope tracking-tight">
<span className="block md:text-5xl text-3xl text-white">Návrh ihned,</span>
<span className="block md:text-5xl text-3xl text-neutral-400">web do 48 hodin.</span>
</h2>
</div>
<div className="flex lg:pl-16 lg:pb-3 items-end">
<p className="leading-relaxed md:text-lg text-lg text-neutral-400 font-geist text-left max-w-sm">Svěřte nám svůj projekt. Postaráme se o precizní realizaci a rychlé nasazení. </p>
</div>
</div>
<div className="p-6 md:p-16 lg:p-32 flex flex-col items-center justify-center relative overflow-hidden bg-[#050505]">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D6FF33]/[0.03] blur-[100px] pointer-events-none rounded-full"></div>
<div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 relative z-10 w-full max-w-5xl">
<svg className="hidden lg:block absolute top-1/2 left-[20%] w-[60%] h-[2px] -translate-y-1/2 z-0" preserveaspectratio="none">
<line stroke="rgba(255,255,255,0.05)" stroke-dasharray="4 4" strokeWidth="2" x1="0" x2="100%" y1="1" y2="1"></line>
<line className="opacity-40" stroke="#D6FF33" stroke-dasharray="100" stroke-dashoffset="100" strokeWidth="2" x1="0" x2="100%" y1="1" y2="1"></line>
</svg>
<div className="w-full lg:w-[400px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 md:p-6 lg:p-8 flex flex-col relative group hover:border-white/20 transition-all duration-300 shadow-2xl z-10">
<div className="flex items-center gap-4 mb-5 md:mb-6">
<div className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-neutral-400" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base text-white font-semibold font-geist">Vy</span>
<span className="text-sm text-neutral-500 font-geist">Požadavek na web</span>
</div>
</div>
<div className="bg-neutral-900/40 border border-neutral-800/50 rounded-xl p-5 relative">
<p className="text-base font-geist text-neutral-400 leading-relaxed italic">
                                "Potřebuji moderní web, který mi přivede zákazníky a bude skvěle reprezentovat moji značku. Žádné šablony, čistý výkon."
                            </p>
</div>
</div>
<div className="w-12 h-12 shrink-0 rounded-full bg-[#111] border border-white/10 flex items-center justify-center relative z-10 shadow-xl">
<i className="w-5 h-5 text-neutral-500" data-lucide="arrow-right" strokeWidth="1.5"></i>
<div className="absolute inset-0 rounded-full border border-[#D6FF33]/20 opacity-20"></div>
</div>
<div className="w-full lg:w-[400px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-5 md:p-6 lg:p-8 flex flex-col relative group hover:border-[#D6FF33]/30 transition-all duration-500 shadow-2xl overflow-hidden z-10">
<div className="absolute inset-0 bg-gradient-to-br from-[#D6FF33]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-between mb-5 md:mb-6 relative z-10">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#D6FF33]/10 border border-[#D6FF33]/20 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-[#D6FF33]" data-lucide="code-2" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<span className="text-base text-white font-semibold font-geist">My</span>
<span className="text-sm text-[#D6FF33] font-geist">Návrh na míru</span>
</div>
</div>
<div className="flex gap-1.5 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
<span className="w-1.5 h-1.5 rounded-full bg-[#D6FF33] shadow-[0_0_8px_rgba(214,255,51,0.5)]"></span>
</div>
</div>
<div className="bg-black/40 border border-white/5 rounded-xl p-5 relative z-10">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="h-2 w-1/3 bg-white/10 rounded-full"></div>
<div className="h-4 w-4 rounded-full bg-white/5"></div>
</div>
<div className="h-16 w-full bg-gradient-to-r from-white/5 to-transparent rounded-lg border border-white/5 mt-2 flex items-center justify-center">
<i className="w-6 h-6 text-white/10" data-lucide="layout" strokeWidth="1.5"></i>
</div>
<div className="flex gap-2 mt-1">
<div className="h-2 w-1/4 bg-[#D6FF33]/20 rounded-full group-hover:bg-[#D6FF33]/50 transition-colors duration-500"></div>
<div className="h-2 w-1/2 bg-white/5 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 md:mt-20 text-xs md:text-sm font-mono tracking-widest text-neutral-500 uppercase flex flex-wrap items-center justify-center gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-4 text-center">
<span className="font-geist">Individuální design</span>
<span className="text-neutral-700 hidden sm:inline">•</span>
<span className="font-geist">Spuštění do 48 hodin</span>
<span className="text-neutral-700 hidden sm:inline">•</span>
<span className="font-geist">SEO optimalizace</span>
<span className="text-neutral-700 hidden sm:inline">•</span>
<span className="font-geist">Plná responzivita</span>
</div>
</div>
</div>
</section>

<section className="w-full border-b bg-[#0A0A0A] border-neutral-800">
<div className="max-w-7xl mx-auto border-x grid grid-cols-1 md:grid-cols-3 border-neutral-800">
<div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-neutral-800">
<i className="w-6 h-6 text-[#D6FF33] mb-6 md:mb-8" data-lucide="mouse-pointer-click" strokeWidth="1.5"></i>
<h3 className="md:text-2xl md:mb-4 text-xl font-semibold text-white tracking-tight font-manrope mb-3">Dokonalý na každém zařízení</h3>
<p className="text-lg leading-relaxed font-geist text-neutral-400 md:text-base">Váš web bude vypadat perfektně na mobilu, tabletu i počítači. Plně responzivní zážitek pro každého návštěvníka.</p>
</div>
<div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-neutral-800">
<i className="w-6 h-6 text-[#D6FF33] mb-6 md:mb-8" data-lucide="shield-check" strokeWidth="1.5"></i>
<h3 className="text-xl md:text-2xl text-white mb-3 md:mb-4 font-semibold font-manrope tracking-tight">Bezpečný a bleskově rychlý</h3>
<p className="text-lg leading-relaxed font-geist text-neutral-400 md:text-base">Optimalizovaný kód, bezchybné načítání a maximální zabezpečení dat vašich návštěvníků bereme jako naprostý standard.</p>
</div>
<div className="p-8 md:p-12 lg:p-16">
<i className="w-6 h-6 text-[#D6FF33] mb-6 md:mb-8" data-lucide="languages" strokeWidth="1.5"></i>
<h3 className="text-xl md:text-2xl text-white mb-3 md:mb-4 font-semibold font-manrope tracking-tight">Viditelný ve vyhledávačích</h3>
<p className="text-lg leading-relaxed font-geist text-neutral-400 md:text-base">Díky pokročilé SEO optimalizaci vás zákazníci na Googlu a Seznamu najdou přesně ve chvíli, kdy vás hledají.</p>
</div>
</div>
</section>

<section className="w-full border-b bg-[#050505] border-neutral-800 scroll-mt-20" id="reference">
<div className="max-w-7xl mx-auto border-x border-neutral-800">
<div className="pt-20 md:pt-32 lg:pt-[20vh] pb-12 md:pb-16 flex flex-col items-center justify-end border-b px-5 md:px-8 border-neutral-800">
<div className="uppercase text-sm tracking-widest font-mono mb-4 font-geist text-neutral-400">Reference</div>
<h2 className="text-4xl leading-[1.1] font-semibold text-white tracking-tight font-manrope text-center md:text-5xl lg:text-5xl">
                    Co o naší práci říkají<br/>
<span className="font-semibold text-neutral-400 tracking-tight font-manrope">naši spokojení klienti</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r flex flex-col justify-between min-h-[auto] md:min-h-[320px] border-neutral-800 gap-8 md:gap-0 hover:bg-white/[0.02] transition-colors">
<div>
<div className="flex gap-1 mb-4 md:mb-6">
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-white leading-relaxed mb-4 font-geist md:mb-12 md:text-lg">"Už samotný bezplatný návrh ukázal, že tým chápe, co dělá. Konečně máme web, za který se nemusíme stydět. Konverze ihned po spuštění vzrostly."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Jan Novák" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="text-base text-white font-semibold font-geist">Jan Novák</div>
<div className="text-sm mt-0.5 font-geist text-neutral-400">Instalatér</div>
</div>
</div>
</div>
<div className="p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r flex flex-col justify-between min-h-[auto] md:min-h-[320px] border-neutral-800 gap-8 md:gap-0 hover:bg-white/[0.02] transition-colors">
<div>
<div className="flex gap-1 mb-4 md:mb-6">
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-white leading-relaxed mb-4 font-geist md:mb-12 md:text-lg">"Líbil se mi přístup – žádné prázdné sliby, ale rovnou reálná ukázka zdarma. Od schůzky až po finální nasazení šlo všechno neuvěřitelně rychle. Za dva dny jsme byli online."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Petra Svobodová" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://i.pravatar.cc/150?img=5"/>
<div className="">
<div className="text-base text-white font-semibold font-geist">Petra Svobodová</div>
<div className="text-sm mt-0.5 font-geist text-neutral-400">Malířka</div>
</div>
</div>
</div>
<div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[auto] md:min-h-[320px] gap-8 md:gap-0 hover:bg-white/[0.02] transition-colors">
<div className="">
<div className="flex gap-1 mb-4 md:mb-6">
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-[#D6FF33]" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg text-white leading-relaxed mb-4 font-geist md:mb-12 md:text-lg">"Hledali jsme agenturu, která nedělá jen hezké obrázky, ale chápe byznys. Návrh zdarma nás přesvědčil a výsledek je absolutně špičkový."</p>
</div>
<div className="flex items-center gap-4">
<img alt="David Dvořák" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://i.pravatar.cc/150?img=33"/>
<div className="">
<div className="text-base text-white font-semibold font-geist">David Dvořák</div>
<div className="text-sm mt-0.5 font-geist text-neutral-400">Elektrikář</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-b bg-[#050505] border-neutral-800 scroll-mt-20" id="cenik">
<div className="max-w-7xl mx-auto border-x border-neutral-800">
<div className="pt-20 md:pt-32 lg:pt-[20vh] pb-12 md:pb-16 flex flex-col items-center justify-end border-b px-5 md:px-8 border-neutral-800">
<div className="uppercase text-sm tracking-widest font-mono mb-4 font-geist text-neutral-400">Ceník / Balíčky služeb</div>
<h2 className="leading-[1.1] text-4xl font-semibold text-white tracking-tight font-manrope text-center md:text-5xl lg:text-5xl">
                    Vyberte si balíček<br/>
<span className="font-semibold text-neutral-400 tracking-tight font-manrope">pro váš projekt</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 relative border-b border-neutral-800">
<div className="border-b lg:border-b-0 lg:border-r p-6 md:p-8 xl:p-12 flex flex-col bg-[#050505] border-neutral-800 group">
<div className="uppercase flex gap-2 text-sm tracking-widest font-mono mb-6 items-center font-geist text-neutral-400">
<span className="w-1.5 h-1.5 bg-neutral-600"></span> Základní balíček
                    </div>
<div className="flex items-baseline gap-1 mb-2">
<span className="md:text-6xl text-5xl font-semibold text-white tracking-tight font-manrope">7 990</span>
<span className="text-base font-geist text-neutral-400">Kč</span>
</div>
<p className="text-base md:text-lg mb-8 font-geist text-neutral-400">Ideální pro začínající podnikatele a malé projekty.</p>
<a className="w-full py-3 px-5 hover:bg-white/10 text-white rounded-[4px] text-base transition-colors flex items-center justify-center gap-2 mb-8 border font-semibold font-geist border-neutral-800 bg-white/0 whitespace-nowrap" href="#kontakt">
                        Získat návrh zdarma <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<p className="text-base md:text-lg mb-8 border-b pb-8 font-geist text-neutral-400 border-neutral-800 leading-relaxed">
                        Vytvoření kvalitní online vizitky. Perfektní startovní řešení, které vás profesionálně uvede do online světa.
                    </p>
<ul className="space-y-4 text-base md:text-lg text-neutral-300">
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-neutral-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> 1 podstránka
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-neutral-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Moderní, custom design na míru
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-neutral-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Spuštění webu do 48 hodin
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-neutral-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Rychlé načítání
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-neutral-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Základní SEO optimalizace
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-neutral-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Zabezpečení webu
                        </li>
</ul>
</div>
<div className="border-b lg:border-b-0 lg:border-r p-6 md:p-8 xl:p-12 flex flex-col bg-[#0A0A0A] relative overflow-hidden border-neutral-800">
<div className="absolute top-6 right-6 hidden md:flex items-center gap-2 border border-[#D6FF33]/30 bg-[#D6FF33]/10 px-3 py-1.5 rounded-full z-10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6FF33] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#D6FF33]"></span>
</span>
<span className="text-[#D6FF33] font-mono tracking-widest text-xs uppercase font-semibold">Nejžádanější</span>
</div>
<div className="uppercase flex gap-2 text-sm text-[#D6FF33] tracking-widest font-mono mb-6 items-center font-geist">
<span className="w-1.5 h-1.5 bg-[#D6FF33]"></span> Pro balíček
                    </div>
<div className="flex items-baseline gap-1 mb-2">
<span className="md:text-6xl text-5xl font-semibold text-white tracking-tight font-manrope">11 990</span>
<span className="text-base font-geist text-neutral-400">Kč</span>
</div>
<p className="text-base md:text-lg mb-8 font-geist text-neutral-400 pr-0 md:pr-12">Pro firmy, které chtějí profesionální prezentaci a růst.</p>
<a className="w-full py-3 px-5 bg-[#D6FF33] hover:bg-[#c6ec2d] text-black font-semibold rounded-[4px] text-base transition-colors flex items-center justify-center gap-2 mb-8 shadow-[0_0_20px_rgba(214,255,51,0.15)] font-geist whitespace-nowrap relative z-10" href="#kontakt">
                        Získat návrh zdarma <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<p className="text-base md:text-lg mb-8 border-b pb-8 font-geist text-neutral-400 border-neutral-800 leading-relaxed">
                        Komplexní řešení pro váš byznys s důrazem na výkon. Získáte jasný upgrade pro efektivní oslovení zákazníků.
                    </p>
<ul className="space-y-4 text-base md:text-lg text-neutral-300">
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-[#D6FF33]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> <span className="text-white">Až 5 podstránek</span>
</li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-[#D6FF33]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Prémiový, bleskurychlý redesign
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-[#D6FF33]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Moderní, custom design na míru
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-[#D6FF33]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Spuštění webu do 48 hodin
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-[#D6FF33]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Optimalizace rychlosti načítání
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-[#D6FF33]" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon> Pokročilá SEO optimalizace
                        </li>
</ul>
</div>
<div className="p-6 md:p-8 xl:p-12 flex flex-col bg-[#050505] border-neutral-800">
<div className="uppercase flex gap-2 text-sm tracking-widest font-mono mb-6 items-center font-geist text-neutral-400">
<span className="w-1.5 h-1.5 bg-neutral-600"></span> Projekt bez limitů
                    </div>
<div className="flex items-baseline gap-1 mb-2">
<span className="text-4xl md:text-5xl text-white font-semibold font-manrope tracking-tight py-1.5">Na míru</span>
</div>
<p className="text-base md:text-lg mb-8 font-geist text-neutral-400 mt-1 md:mt-2">Nevyhovují vám standardní balíčky?</p>
<a className="w-full py-3 px-5 hover:bg-white/10 text-white rounded-[4px] text-base transition-colors flex items-center justify-center gap-2 mb-8 border font-semibold font-geist border-neutral-800 bg-white/0 whitespace-nowrap" href="#kontakt">
                        Nezávazně poptat projekt <i className="w-4 h-4" data-lucide="message-square" strokeWidth="1.5"></i>
</a>
<p className="text-base md:text-lg mb-8 border-b pb-8 font-geist text-neutral-400 border-neutral-800 leading-relaxed">
                        Kontaktujte nás nezávazně. Společně probereme vaše cíle a navrhneme řešení přesně podle vašich specifických potřeb.
                    </p>
<ul className="space-y-4 text-base md:text-lg text-neutral-300">
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-neutral-500" height="20" icon="solar:star-linear" width="20"></iconify-icon> Individuální rozsah projektu
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-neutral-500" height="20" icon="solar:widget-add-linear" width="20"></iconify-icon> Specifické funkce na vyžádání
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-neutral-500" height="20" icon="solar:link-linear" width="20"></iconify-icon> Pokročilé integrace třetích stran
                        </li>
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="shrink-0 mt-0.5 text-neutral-500" height="20" icon="solar:graph-up-linear" width="20"></iconify-icon> Plně škálovatelné řešení
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] w-full border-neutral-800 border-b scroll-mt-20" id="faq">
<div className="max-w-7xl mx-auto border-x flex flex-col items-center border-neutral-800">
<div className="pt-20 md:pt-32 lg:pt-[20vh] pb-12 md:pb-16 flex flex-col items-center justify-end border-b w-full px-5 md:px-8 border-neutral-800">
<div className="uppercase text-sm tracking-widest font-mono mb-4 font-geist text-neutral-400">FAQ – Často kladené dotazy</div>
<h2 className="md:text-5xl lg:text-5xl text-4xl font-semibold text-white tracking-tight font-manrope text-center">Odpovědi na vše důležité</h2>
</div>
<div className="w-full border-x flex flex-col border-neutral-800">

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Je ukázka návrhu opravdu bezplatná a bez závazků?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<p className="mb-3">Ano. Nejde o statický obrázek ani grafický mockup. Připravíme funkční demo webu na míru vašemu byznysu, které si můžete reálně proklikat a vyzkoušet. Uvidíte strukturu, směr komunikace i potenciál výkonu.</p>
<p>Pokud se rozhodnete nepokračovat, nic neplatíte a návrh si můžete ponechat jako inspiraci.</p>
</div>
</div>

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Jak celý proces spolupráce probíhá?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<ul className="list-disc pl-5 mb-4 space-y-2">
<li>Vyplníte krátký formulář.</li>
<li>Připravíme personalizovaný funkční návrh webu.</li>
<li>Během 5–10 minutového callu si vše projdeme.</li>
<li>Pokud dává spolupráce smysl, hradí se 50 % ceny předem.</li>
<li>Web dokončíme, optimalizujeme a nasadíme.</li>
<li>Po spuštění probíhá doplatek zbývajících 50 %.</li>
</ul>
<p>Proces je rychlý, přímočarý a bez zbytečné administrativy.</p>
</div>
</div>

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Jak rychle bude můj web hotový?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<p className="mb-3">Od schválení návrhu a přijetí první platby je web spuštěný do 48 hodin (u standardních balíčků).</p>
<p>U rozsáhlejších projektů se termín stanovuje individuálně podle rozsahu.</p>
</div>
</div>

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Jak funguje platba?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<p className="mb-3">Platba je rozdělena na dvě části:</p>
<ul className="list-disc pl-5 mb-4 space-y-2">
<li>50 % před zahájením realizace</li>
<li>50 % po dokončení a spuštění webu</li>
</ul>
<p>Tento model chrání obě strany a umožňuje rychlé zahájení projektu.</p>
</div>
</div>

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Zajišťujete doménu a hosting?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<p className="mb-3">Doménu si klient registruje a hradí sám (na callu vás přesně navedeme, jak ji během několika minut koupit).</p>
<p>Hosting zajišťujeme my. Web spravujeme, aktualizujeme a dbáme na jeho bezpečnost, rychlost a stabilitu. Nemusíte řešit technické detaily.</p>
</div>
</div>

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Co když budu chtít web upravit nebo rozšířit?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<p className="mb-3">Veškeré úpravy řešíme za vás.</p>
<p>Pokud byste chtěli převzít kompletní správu nebo zdrojový kód, je možné se individuálně domluvit.</p>
</div>
</div>

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Je návrh opravdu individuální?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<p className="mb-3">Ano. Nepoužíváme univerzální šablony.</p>
<p>Každý návrh je připraven ručně podle vašeho oboru, cílové skupiny a obchodního cíle.</p>
</div>
</div>

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Pomůže mi web skutečně získávat zákazníky?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<p className="mb-3">Web stavíme primárně jako prodejní nástroj, ne jen jako vizitku. Součástí je struktura zaměřená na konverze, jasné výzvy k akci, technická optimalizace a SEO základ.</p>
<p>Cílem je generovat poptávky, ne jen „hezký design“.</p>
</div>
</div>

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Kolik projektů měsíčně realizujete?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<p className="mb-3">Kapacita je omezená na 2 projekty měsíčně.</p>
<p>Díky tomu se každému projektu věnujeme naplno a bez kompromisů.</p>
</div>
</div>

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Pro koho jsou vaše služby ideální?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<p className="mb-3">Pro podnikatele a firmy, které:</p>
<ul className="list-disc pl-5 space-y-2">
<li>chtějí rychlé spuštění</li>
<li>nechtějí se zabývat technickými detaily</li>
<li>chtějí web, který má obchodní smysl</li>
<li>preferují rychlou a přímou komunikaci</li>
</ul>
</div>
</div>

<div className="faq-item border-b border-neutral-800 group">
<div className="faq-header p-5 md:p-8 flex items-start md:items-center gap-5 md:gap-6 cursor-pointer hover:bg-white/[0.02] transition-colors">
<i className="faq-icon w-5 h-5 mt-0.5 md:mt-0 text-[#D6FF33] shrink-0 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
<span className="text-lg md:text-xl text-white font-semibold font-geist">Co když mi návrh nebude vyhovovat?</span>
</div>
<div className="faq-content hidden px-5 md:px-8 pb-5 md:pb-8 text-neutral-400 font-geist text-lg md:text-xl leading-relaxed">
<p className="mb-3">Nemusíte pokračovat.</p>
<p>Návrh je bez závazků a bez rizika.</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#050505] border-b border-neutral-800">
<div className="max-w-7xl mx-auto border-x border-neutral-800 h-24 md:h-32 lg:h-48"></div>
</section>

<section className="scroll-mt-20 bg-[#050505] w-full border-neutral-800 border-b" id="kontakt">
<div className="max-w-7xl mx-auto border-x border-neutral-800 bg-[#D6FF33] overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="md:p-12 lg:p-24 flex flex-col z-10 pt-8 pr-8 pb-8 pl-8 relative items-start justify-center">
<div className="uppercase text-xs font-mono font-semibold tracking-widest text-[#050505]/70 mb-5 md:mb-6">Připojte se k nám</div>
<h2 className="leading-[1.05] md:text-6xl md:mb-10 lg:text-6xl text-4xl font-semibold text-[#050505] tracking-tight font-manrope mb-8">Získejte návrh<br className=""/>ještě dnes</h2>
<a className="bg-[#050505] text-white text-base font-semibold px-8 py-4 flex items-center gap-2 hover:bg-neutral-900 transition-colors font-geist rounded-[2px]" href="mailto:webnamiruu@gmail.com">
                        Nezávazný návrh <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="2"></i>
</a>
</div>

<div className="hidden lg:flex relative items-end justify-end p-12 lg:p-16">
<div className="grid grid-cols-5 gap-3 xl:gap-4 relative right-0 -bottom-4">

<div className="col-start-4">
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4.5" viewbox="0 0 24 24">
<path d="M14 4 L6 12 L14 20 M22 4 L14 12 L22 20"></path>
</svg>
</div>
<div>
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="4.5" viewbox="0 0 24 24">
<rect height="18" width="18" x="3" y="3"></rect>
</svg>
</div>

<div className="col-start-2">
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4.5" viewbox="0 0 24 24">
<path d="M14 4 L6 12 L14 20 M22 4 L14 12 L22 20"></path>
</svg>
</div>
<div>
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="4.5" viewbox="0 0 24 24">
<rect height="18" width="18" x="3" y="3"></rect>
</svg>
</div>
<div>
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4.5" viewbox="0 0 24 24">
<path d="M10 4 L18 12 L10 20 M2 4 L10 12 L2 20"></path>
</svg>
</div>
<div>
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="4.5" viewbox="0 0 24 24">
<rect height="18" width="18" x="3" y="3"></rect>
</svg>
</div>

<div>
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4.5" viewbox="0 0 24 24">
<path d="M14 4 L6 12 L14 20 M22 4 L14 12 L22 20"></path>
</svg>
</div>
<div>
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="4.5" viewbox="0 0 24 24">
<rect height="18" width="18" x="3" y="3"></rect>
</svg>
</div>
<div>
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4.5" viewbox="0 0 24 24">
<path d="M10 4 L18 12 L10 20 M2 4 L10 12 L2 20"></path>
</svg>
</div>
<div>
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeWidth="4.5" viewbox="0 0 24 24">
<rect height="18" width="18" x="3" y="3"></rect>
</svg>
</div>
<div>
<svg className="w-12 h-12 xl:w-16 xl:h-16 text-[#050505]" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="4.5" viewbox="0 0 24 24">
<path d="M14 4 L6 12 L14 20 M22 4 L14 12 L22 20"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full bg-[#050505] relative z-10">
<div className="max-w-7xl mx-auto border-x border-neutral-800 px-5 md:px-8 py-10 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-3">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 8V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12H13" stroke="#D6FF33" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="3"></path>
<path d="M4 8H13" stroke="#D6FF33" strokeLinecap="square" strokeWidth="3"></path>
</svg>
<span className="text-xl font-semibold font-manrope tracking-tight text-white">Web na míru</span>
</div>
<div className="text-neutral-500 text-sm font-geist text-center md:text-left">
                © 2024 Web na míru. Všechna práva vyhrazena.
            </div>
<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-white transition-colors font-geist text-sm flex items-center gap-2" href="mailto:webnamiruu@gmail.com">
<i className="w-4 h-4" data-lucide="mail"></i> webnamiruu@gmail.com
                </a>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full p-4 pb-6 bg-gradient-to-t from-[#050505] via-[#050505] to-transparent z-40 md:hidden transition-transform duration-300 pointer-events-none" id="mobile-cta">
<a className="w-full bg-[#D6FF33] text-black text-base font-semibold px-6 py-4 flex items-center justify-center gap-2 hover:bg-[#c6ec2d] rounded-[4px] shadow-[0_0_20px_rgba(214,255,51,0.2)] pointer-events-auto font-geist" href="#navrh-zdarma">
            Chci návrh zdarma <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>





    </>
  );
}
