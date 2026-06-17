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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                });
            });

            const toggleBtn = document.getElementById('simulate-toggle');
            const toggleCircle = document.getElementById('toggle-circle');
            const normalState = document.getElementById('app-state-normal');
            const anomalyState = document.getElementById('app-state-anomaly');
            const labelNormal = document.getElementById('label-normal');
            const labelAnomaly = document.getElementById('label-anomaly');

            if(toggleBtn) {
                toggleBtn.addEventListener('click', () => {
                    const isAnomaly = normalState.classList.contains('opacity-0');
                    
                    if (isAnomaly) {
                        anomalyState.classList.add('opacity-0');
                        setTimeout(() => {
                            anomalyState.classList.add('hidden');
                            anomalyState.classList.remove('pointer-events-auto');
                            anomalyState.classList.add('pointer-events-none');
                            
                            normalState.classList.remove('hidden');
                            setTimeout(() => { normalState.classList.remove('opacity-0'); }, 50);
                        }, 300);

                        toggleCircle.classList.remove('translate-x-7');
                        toggleBtn.classList.remove('bg-[#E53E3E]');
                        toggleBtn.classList.add('bg-[#1D9E75]');
                        
                        labelNormal.classList.remove('text-white/40');
                        labelNormal.classList.add('text-[#1D9E75]');
                        labelAnomaly.classList.remove('text-[#E53E3E]');
                        labelAnomaly.classList.add('text-white/40');
                    } else {
                        normalState.classList.add('opacity-0');
                        setTimeout(() => {
                            normalState.classList.add('hidden');
                            
                            anomalyState.classList.remove('hidden');
                            anomalyState.classList.remove('pointer-events-none');
                            anomalyState.classList.add('pointer-events-auto');
                            setTimeout(() => { anomalyState.classList.remove('opacity-0'); }, 50);
                        }, 300);

                        toggleCircle.classList.add('translate-x-7');
                        toggleBtn.classList.remove('bg-[#1D9E75]');
                        toggleBtn.classList.add('bg-[#E53E3E]');
                        
                        labelNormal.classList.remove('text-[#1D9E75]');
                        labelNormal.classList.add('text-white/40');
                        labelAnomaly.classList.remove('text-white/40');
                        labelAnomaly.classList.add('text-[#E53E3E]');
                    }
                });
            }

            const nav = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('backdrop-blur-xl', 'bg-[#FAF7F2]/90', 'border-b', 'border-[#085041]/5');
                    nav.classList.remove('bg-transparent', 'border-transparent');
                } else {
                    nav.classList.remove('backdrop-blur-xl', 'bg-[#FAF7F2]/90', 'border-b', 'border-[#085041]/5');
                    nav.classList.add('bg-transparent', 'border-transparent');
                }
            });

            const heroWords = document.querySelectorAll('.hero-word');
            heroWords.forEach((word, index) => {
                setTimeout(() => {
                    word.style.opacity = '1';
                    word.style.transform = 'translateY(0)';
                }, 100 + (index * 60));
            });

            setTimeout(() => {
                document.getElementById('hero-sub').style.opacity = '1';
                document.getElementById('hero-sub').style.transform = 'translateY(0)';
            }, 100 + (heroWords.length * 60) + 200);

            setTimeout(() => {
                document.getElementById('hero-cta').style.opacity = '1';
                document.getElementById('hero-cta').style.transform = 'scale(1)';
            }, 100 + (heroWords.length * 60) + 500);

            const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, revealOptions);

            document.querySelectorAll('.scroll-reveal').forEach(el => {
                revealObserver.observe(el);
            });
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
      
<div className="pointer-events-none fixed inset-0 z-50 opacity-[0.04]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<nav className="fixed top-0 w-full z-40 transition-all duration-300 py-4 backdrop-blur-xl bg-[#FAF7F2]/80 border-[#085041]/5" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-[#1D9E75] text-2xl group-hover:scale-105 transition-transform" icon="solar:drop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-['Fraunces',_serif] font-medium tracking-tighter text-xl">CUSTOS</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#085041]/80">
<a className="hover:text-[#1D9E75] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-4px] after:left-0 after:bg-[#1D9E75] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300" href="#com-funciona">Com funciona</a>
<a className="hover:text-[#1D9E75] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-4px] after:left-0 after:bg-[#1D9E75] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300" href="#experiencia-app">L'App</a>
<a className="hover:text-[#1D9E75] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-4px] after:left-0 after:bg-[#1D9E75] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300" href="#historia">La història</a>
<a className="hover:text-[#1D9E75] relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1.5px] after:bottom-[-4px] after:left-0 after:bg-[#1D9E75] after:origin-bottom-right hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300" href="#equip">L'Equip</a>
</div>
<div className="hidden lg:block">
<a className="inline-block bg-[#085041] text-[#FAF7F2] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#085041]/90 active:scale-[0.97] transition-all duration-200 shadow-sm relative overflow-hidden group" href="#comenca">
<span className="relative z-10">Prova Custos</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</a>
</div>
<button className="lg:hidden text-[#085041] p-2 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>
<div className="fixed inset-0 z-30 bg-[#FAF7F2] pt-24 px-6 hidden lg:hidden flex-col items-start gap-6 h-screen w-full transition-all duration-300" id="mobile-menu">
<a className="mobile-link text-2xl font-['Fraunces',_serif] tracking-tight font-medium text-[#085041] border-b border-[#085041]/10 w-full pb-4" href="#com-funciona">Com funciona</a>
<a className="mobile-link text-2xl font-['Fraunces',_serif] tracking-tight font-medium text-[#085041] border-b border-[#085041]/10 w-full pb-4" href="#experiencia-app">L'App</a>
<a className="mobile-link text-2xl font-['Fraunces',_serif] tracking-tight font-medium text-[#085041] border-b border-[#085041]/10 w-full pb-4" href="#historia">La història</a>
<a className="mobile-link text-2xl font-['Fraunces',_serif] tracking-tight font-medium text-[#085041] border-b border-[#085041]/10 w-full pb-4" href="#equip">L'Equip</a>
<a className="mobile-link mt-4 w-full text-center bg-[#085041] text-[#FAF7F2] text-base font-medium px-6 py-4 rounded-full shadow-sm" href="#comenca">
            Prova Custos
        </a>
</div>

<section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden">
<div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center opacity-40">
<svg className="w-full h-full max-w-screen-xl animate-[pulse_10s_ease-in-out_infinite] opacity-60" viewbox="0 0 1000 1000">
<path className="origin-center" d="M-200,500 C100,200 400,800 1200,500" fill="none" stroke="#E1F5EE" strokeLinecap="round" strokeWidth="80" style={{filter: 'blur(40px)'}}></path>
<path className="origin-center opacity-30" d="M-100,600 C200,300 500,900 1300,600" fill="none" stroke="#1D9E75" strokeLinecap="round" strokeWidth="40" style={{filter: 'blur(60px)'}}></path>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex flex-col items-start">
<h1 className="font-['Fraunces',_serif] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.1] max-w-4xl" id="hero-headline">
<span className="hero-word inline-block" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>Era</span>
<span className="hero-word inline-block" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>un</span>
<span className="hero-word inline-block" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>dimarts</span>
<span className="hero-word inline-block" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>al</span>
<span className="hero-word inline-block" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>matí.</span>
<br className="hidden md:block"/>
<span className="hero-word inline-block" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>La</span>
<span className="hero-word inline-block" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>iaia</span>
<span className="hero-word inline-block" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>no</span>
<span className="hero-word inline-block" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>havia</span>
<span className="hero-word inline-block" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>trucat.</span>
</h1>
<div className="mt-8 max-w-2xl" id="hero-sub" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 0.6s ease-out'}}>
<p className="text-lg md:text-xl text-[#085041]/80 leading-relaxed font-normal">
                    Custos és la primera solució que aprèn la rutina de la persona que estimes i t'avisa si alguna cosa no va bé. Sense càmeres. Sense que ella hagi de fer res.
                </p>
<p className="mt-4 text-xs md:text-sm text-[#085041]/50 font-medium tracking-wide">
                    Sensor d'aigua intel·ligent · IA personalitzada per llar · Alerta a l'app en menys de 5 minuts
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto" id="hero-cta" style={{opacity: '0', transform: 'scale(0.95)', transition: 'all 0.6s ease-out'}}>
<a className="w-full sm:w-auto text-center bg-[#085041] text-[#FAF7F2] text-base font-medium px-8 py-4 rounded-full hover:bg-[#085041]/90 active:scale-[0.97] transition-all duration-200 shadow-sm relative overflow-hidden group" href="#la-solucio">
<span className="relative z-10">Descobreix com funciona</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</a>
<a className="text-sm font-medium text-[#085041]/70 hover:text-[#1D9E75] transition-colors duration-200 flex items-center justify-center gap-2 w-full sm:w-auto" href="#historia">
                        Mira la nostra història <iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="absolute bottom-8 left-0 w-full px-6 lg:px-12 hidden md:block scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.8s ease-out'}}>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center text-xs text-[#085041]/50 font-medium">
<span className="flex items-center gap-2"><iconify-icon className="text-lg text-[#1D9E75]" icon="solar:shield-check-linear"></iconify-icon> 94% viuen amb por de no saber</span>
<span className="hidden md:inline text-[#085041]/20">|</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg text-[#1D9E75]" icon="solar:wallet-linear"></iconify-icon> 71% pagaria per una solució real</span>
<span className="hidden md:inline text-[#085041]/20">|</span>
<span className="flex items-center gap-2"><iconify-icon className="text-lg text-[#1D9E75]" icon="solar:graph-new-linear"></iconify-icon> Tecnologia validada precisió &gt;95%</span>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white relative" id="el-problema">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out'}}>
<span className="text-xs font-semibold tracking-widest text-[#1D9E75] uppercase block mb-4">El Problema</span>
<p className="text-2xl md:text-3xl font-['Fraunces',_serif] font-medium tracking-tight text-[#085041] max-w-3xl leading-snug">
                    No és por irracional. És que no existeix cap manera fiable de saber si la persona que estimes s'ha llevat aquest matí. I les solucions que existeixen ens han fallat a totes.
                </p>
</div>
<div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#FAF7F2] rounded-[1.5rem] p-6 md:p-8 shadow-[0_4px_24px_-8px_rgba(8,80,65,0.06)] border border-[#085041]/5 scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-[#E53E3E]" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#085041] mb-3">El botó de pànic no serveix si perd el coneixement</h3>
<p className="text-sm text-[#085041]/70 leading-relaxed">
                        Els accidents més greus —caigudes, ictus, pèrdua de consciència— impossibiliten qualsevol acció voluntària. El botó no es prem sol.
                    </p>
</div>
<div className="bg-[#FAF7F2] rounded-[1.5rem] p-6 md:p-8 shadow-[0_4px_24px_-8px_rgba(8,80,65,0.06)] border border-[#085041]/5 scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-[#085041]/40" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#085041] mb-3">Les càmeres vulneren la dignitat de la seva llar</h3>
<p className="text-sm text-[#085041]/70 leading-relaxed">
                        El 78% de les famílies rebutja instal·lar càmeres. Setanta anys construint un espai propi no es poden vigilar com un magatzem.
                    </p>
</div>
<div className="bg-[#FAF7F2] rounded-[1.5rem] p-6 md:p-8 shadow-[0_4px_24px_-8px_rgba(8,80,65,0.06)] border border-[#085041]/5 scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-[#085041]/40" icon="solar:watch-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#085041] mb-3">La polsera acaba al calaix</h3>
<p className="text-sm text-[#085041]/70 leading-relaxed">
                        Un wearable que no es porta no protegeix ningú. I trucar cada dia és un pedaç que no tapa la ferida: l'angoixa continua.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#E1F5EE]/40 relative" id="la-solucio">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out'}}>
<span className="text-xs font-semibold tracking-widest text-[#1D9E75] uppercase block mb-4">La Solució</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-['Fraunces',_serif] font-medium tracking-tight text-[#085041] mb-6 md:mb-8">
                    Custos no vigila. Cuida.
                </h2>
<p className="text-lg md:text-xl text-[#085041]/80 max-w-3xl leading-relaxed">
                    Hem construït el primer sistema que aprèn la rutina concreta de la teva mare —quan es lleva, quan cuina, quan es dutxa— i detecta si alguna cosa ha canviat. Sense cap càmera. Sense micròfons. Sense que ella hagi de fer absolutament res.
                </p>
</div>
<div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
<div className="scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '100ms'}}>
<iconify-icon className="text-4xl text-[#1D9E75] mb-4 md:mb-6" icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#085041] mb-3 md:mb-4">Invisible per disseny</h3>
<p className="text-base text-[#085041]/70 leading-relaxed">
                        El sensor s'instal·la a la canonada interior. No es veu. No es nota. La persona que estimes viu exactament igual que sempre.
                    </p>
</div>
<div className="scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '200ms'}}>
<iconify-icon className="text-4xl text-[#1D9E75] mb-4 md:mb-6" icon="solar:brain-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#085041] mb-3 md:mb-4">Intel·ligència personalitzada</h3>
<p className="text-base text-[#085041]/70 leading-relaxed">
                        El model d'IA aprèn els seus patrons, no les mitjanes d'un estudi. La signatura hídrica de la teva mare és única i irrepetible.
                    </p>
</div>
<div className="scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '300ms'}}>
<iconify-icon className="text-4xl text-[#1D9E75] mb-4 md:mb-6" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#085041] mb-3 md:mb-4">Alerta en menys de 5 minuts</h3>
<p className="text-base text-[#085041]/70 leading-relaxed">
                        Quan el sistema detecta una desviació significativa, t'envia una notificació graduada a l'app. Tu decideixes si truques o agafes el cotxe.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#085041] relative overflow-hidden text-[#FAF7F2]" id="experiencia-app">
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2 scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out'}}>
<span className="text-xs font-semibold tracking-widest text-[#1D9E75] uppercase block mb-4">L'App Custos</span>
<h2 className="text-4xl md:text-5xl font-['Fraunces',_serif] font-medium tracking-tight text-white mb-6 leading-tight">
                        La teva tranquil·litat, <br className="hidden md:block"/>a la butxaca.
                    </h2>
<p className="text-lg text-[#E1F5EE]/80 mb-10 leading-relaxed font-normal">
                        La nostra aplicació processa les dades recollides de l'aigua en temps real. Visualitza l'activitat de la llar de manera clara i rep alertes instantànies si el patró habitual es trenca. Simula els dos estats a continuació:
                    </p>
<div className="bg-[#FAF7F2]/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium tracking-tight">Mode de l'App</span>
<button aria-checked="false" className="relative inline-flex h-7 w-14 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-[#1D9E75] transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75" id="simulate-toggle" role="switch">
<span className="sr-only">Toggle App State</span>
<span aria-hidden="true" className="pointer-events-none inline-block h-6 w-6 translate-x-0 transform rounded-full bg-white shadow-lg ring-0 transition duration-300 ease-in-out" id="toggle-circle"></span>
</button>
</div>
<div className="flex items-center gap-4 text-sm">
<span className="font-medium text-[#1D9E75] transition-colors" id="label-normal">Tot en ordre (Habitual)</span>
<span className="text-white/20">/</span>
<span className="font-medium text-white/40 transition-colors" id="label-anomaly">Anomalia detectada</span>
</div>
</div>
</div>
<div className="w-full lg:w-1/2 flex justify-center scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '200ms'}}>
<div className="w-[300px] h-[600px] bg-gray-50 rounded-[3rem] border-[12px] border-gray-900 shadow-2xl relative overflow-hidden flex flex-col shrink-0 text-[#085041]">
<div className="h-10 w-full flex justify-between items-center px-6 pt-2 text-[10px] font-medium text-gray-800 absolute top-0 z-20">
<span>09:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:graph-new-bold"></iconify-icon>
<iconify-icon icon="solar:wifi-bold"></iconify-icon>
<iconify-icon className="text-xs" icon="solar:battery-charge-bold"></iconify-icon>
</div>
</div>
<div className="flex-grow pt-14 pb-6 px-5 flex flex-col relative z-10 w-full h-full bg-[#FAF7F2]">
<div className="flex justify-between items-center mb-6">
<h3 className="font-['Fraunces',_serif] font-medium tracking-tighter text-xl">CUSTOS</h3>
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
<p className="text-xs font-medium uppercase tracking-widest text-[#085041]/50 mb-2">Monitoritzant</p>
<h4 className="text-xl font-medium tracking-tight mb-6">Casa de la iaia</h4>
<div className="flex flex-col h-full transition-opacity duration-500 opacity-100" id="app-state-normal">
<div className="bg-gradient-to-br from-[#1D9E75] to-[#0d6e4f] rounded-3xl p-6 text-white shadow-lg mb-6 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="font-medium">Tot en ordre</span>
</div>
<p className="text-sm text-white/80 mt-4">La rutina s'està complint segons el patró habitual.</p>
<p className="text-xs text-white/60 mt-2">Última detecció: fa 15 min.</p>
</div>
<div className="bg-white rounded-2xl p-5 shadow-sm border border-black/5 mb-6">
<h5 className="text-xs font-medium text-[#085041]/60 mb-4">Activitat d'avui (Aigua)</h5>
<div className="h-24 flex items-end justify-between gap-1">
<div className="w-full bg-[#E1F5EE] rounded-t-sm h-[10%]"></div>
<div className="w-full bg-[#E1F5EE] rounded-t-sm h-[5%]"></div>
<div className="w-full bg-[#1D9E75] rounded-t-sm h-[60%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] bg-gray-800 text-white px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">Dutxa</div>
</div>
<div className="w-full bg-[#1D9E75]/40 rounded-t-sm h-[20%]"></div>
<div className="w-full bg-[#E1F5EE] rounded-t-sm h-[30%]"></div>
<div className="w-full bg-[#1D9E75] rounded-t-sm h-[40%]"></div>
<div className="w-full bg-[#E1F5EE] rounded-t-sm h-[10%]"></div>
<div className="w-full bg-[#E1F5EE] rounded-t-sm h-[5%]"></div>
<div className="w-full bg-[#E1F5EE] rounded-t-sm h-[15%]"></div>
</div>
<div className="flex justify-between mt-2 text-[9px] text-[#085041]/40 font-medium">
<span>06:00</span>
<span>09:00</span>
<span>Ara</span>
</div>
</div>
<div>
<h5 className="text-xs font-medium text-[#085041]/60 mb-3">Últims esdeveniments</h5>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1D9E75]" icon="solar:cup-linear"></iconify-icon>
<span className="font-medium">Aixeta cuina</span>
</div>
<span className="text-xs text-[#085041]/50">09:26</span>
</div>
<div className="flex justify-between items-center text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1D9E75]" icon="solar:bath-linear"></iconify-icon>
<span className="font-medium">Dutxa principal</span>
</div>
<span className="text-xs text-[#085041]/50">08:15</span>
</div>
</div>
</div>
</div>
<div className="flex flex-col h-full absolute inset-0 pt-14 pb-6 px-5 bg-[#FAF7F2] transition-opacity duration-500 opacity-0 pointer-events-none z-20 hidden" id="app-state-anomaly">
<div className="flex justify-between items-center mb-6">
<h3 className="font-['Fraunces',_serif] font-medium tracking-tighter text-xl">CUSTOS</h3>
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
<p className="text-xs font-medium uppercase tracking-widest text-[#085041]/50 mb-2">Monitoritzant</p>
<h4 className="text-xl font-medium tracking-tight mb-6">Casa de la iaia</h4>
<div className="bg-gradient-to-br from-[#E53E3E] to-[#c53030] rounded-3xl p-6 text-white shadow-[0_10px_25px_-5px_rgba(229,62,62,0.4)] mb-6 animate-pulse">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<span className="font-medium">Alerta de Patró</span>
</div>
<p className="text-sm text-white/90 mt-4 leading-snug">S'esperava ús d'aigua entre les 08:00 i les 09:00. Sense activitat detectada.</p>
<p className="text-xs text-white/70 mt-3 font-medium">Tractant-se de rutina de matí, recomanem verificar.</p>
</div>
<div className="bg-white rounded-2xl p-5 shadow-sm border border-black/5 mb-6">
<h5 className="text-xs font-medium text-[#085041]/60 mb-4">Activitat d'avui (Aigua)</h5>
<div className="h-24 flex items-end justify-between gap-1">
<div className="w-full bg-[#E1F5EE] rounded-t-sm h-[10%]"></div>
<div className="w-full bg-[#E1F5EE] rounded-t-sm h-[5%]"></div>
<div className="w-full border border-dashed border-[#E53E3E] bg-[#E53E3E]/5 rounded-t-sm h-[60%] relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[14px] text-[#E53E3E]">!</div>
</div>
<div className="w-full border border-dashed border-[#E53E3E] bg-[#E53E3E]/5 rounded-t-sm h-[20%]"></div>
<div className="w-full border border-dashed border-[#E53E3E] bg-[#E53E3E]/5 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-[#FAF7F2] rounded-t-sm h-[5%]"></div>
<div className="w-full bg-[#FAF7F2] rounded-t-sm h-[5%]"></div>
<div className="w-full bg-[#FAF7F2] rounded-t-sm h-[5%]"></div>
<div className="w-full bg-[#FAF7F2] rounded-t-sm h-[5%]"></div>
</div>
<div className="flex justify-between mt-2 text-[9px] text-[#085041]/40 font-medium">
<span>06:00</span>
<span className="text-[#E53E3E] font-medium">Patró absent</span>
<span>Ara</span>
</div>
</div>
<div className="mt-auto space-y-2">
<button className="w-full bg-[#085041] text-white rounded-xl py-3 text-sm font-medium flex justify-center items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Trucar a la iaia
                                    </button>
<button className="w-full bg-white border border-gray-200 text-[#085041]/70 rounded-xl py-3 text-sm font-medium">
                                        Falsa alarma
                                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#FAF7F2] relative overflow-hidden" id="com-funciona">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out'}}>
<span className="text-xs font-semibold tracking-widest text-[#1D9E75] uppercase block mb-4">El Procés</span>
<h2 className="text-3xl md:text-4xl font-['Fraunces',_serif] font-medium tracking-tight text-[#085041] mb-6">
                    Quatre passos. Vint minuts d'instal·lació. Tota la tranquil·litat.
                </h2>
</div>
<div className="mt-16 md:mt-24 relative">
<div className="hidden md:block absolute top-12 left-[10%] w-[80%] h-[1px] bg-gradient-to-r from-[#1D9E75]/0 via-[#1D9E75]/30 to-[#1D9E75]/0 -z-10 overflow-hidden">
<div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-[#1D9E75] to-transparent animate-[flow_3s_ease-in-out_infinite]"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 relative">
<div className="relative flex flex-col items-center md:items-start text-center md:text-left scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '100ms'}}>
<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#085041]/5 mb-6 z-10 relative">
<span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-[#E1F5EE] text-[#085041] text-xs font-medium rounded-full flex items-center justify-center border-2 border-white">1</span>
<iconify-icon className="text-2xl md:text-3xl text-[#1D9E75]" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#085041] mb-3">Instal·lació</h3>
<p className="text-sm text-[#085041]/70 leading-relaxed">
                            Un professional instal·la el sensor a la canonada interior. Menys de vint minuts. Sense obres. Cost inclòs.
                        </p>
</div>
<div className="relative flex flex-col items-center md:items-start text-center md:text-left scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '200ms'}}>
<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#085041]/5 mb-6 z-10 relative">
<span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-[#E1F5EE] text-[#085041] text-xs font-medium rounded-full flex items-center justify-center border-2 border-white">2</span>
<iconify-icon className="text-2xl md:text-3xl text-[#1D9E75]" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#085041] mb-3">Aprenentatge</h3>
<p className="text-sm text-[#085041]/70 leading-relaxed">
                            Durant dues setmanes, la IA aprèn la rutina de consum d'aquella persona concreta. No compara amb mitjanes.
                        </p>
</div>
<div className="relative flex flex-col items-center md:items-start text-center md:text-left scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '300ms'}}>
<div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-sm border border-[#085041]/5 mb-6 z-10 relative">
<span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-[#E1F5EE] text-[#085041] text-xs font-medium rounded-full flex items-center justify-center border-2 border-white">3</span>
<iconify-icon className="text-2xl md:text-3xl text-[#1D9E75]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#085041] mb-3">Vigilància silenciosa</h3>
<p className="text-sm text-[#085041]/70 leading-relaxed">
                            Monitoratge completament autònom. La persona protegida no fa res ni ho sap. Viu igual que sempre.
                        </p>
</div>
<div className="relative flex flex-col items-center md:items-start text-center md:text-left scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '400ms'}}>
<div className="w-20 h-20 md:w-24 md:h-24 bg-[#085041] rounded-full flex items-center justify-center shadow-md mb-6 z-10 relative">
<span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-[#E1F5EE] text-[#085041] text-xs font-medium rounded-full flex items-center justify-center border-2 border-[#085041]">4</span>
<iconify-icon className="text-2xl md:text-3xl text-[#FAF7F2]" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#085041] mb-3">Alerta a l'app</h3>
<p className="text-sm text-[#085041]/70 leading-relaxed">
                            Si el patró s'altera de manera significativa, reps una alerta graduada a l'app. Tu values i decideixes.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white relative" id="historia">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
<div className="w-full lg:w-1/2 scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out'}}>
<span className="text-xs font-semibold tracking-widest text-[#1D9E75] uppercase block mb-4">La Nostra Història</span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-['Fraunces',_serif] font-medium tracking-tight text-[#085041] mb-6">
                        Neix d'una necessitat real. Neix de casa.
                    </h2>
<p className="text-lg text-[#085041]/80 leading-relaxed mb-6 font-normal">
                        Custos no va néixer en un laboratori. Va néixer després d'un ensurt familiar que ens va fer adonar-nos que la tecnologia actual no estava resolent el problema real: la por constant de no saber si tot està bé.
                    </p>
<p className="text-lg text-[#085041]/80 leading-relaxed font-normal">
                        Mireu aquest breu vídeo sobre com vam dissenyar una solució invisible que prioritza la dignitat i la privacitat per sobre de tot.
                    </p>
</div>
<div className="w-full lg:w-1/2 scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '200ms'}}>
<div className="relative w-full aspect-video rounded-[2rem] overflow-hidden bg-[#085041] shadow-2xl group cursor-pointer border border-[#085041]/10">
<div className="absolute inset-0 bg-gradient-to-br from-[#1D9E75]/40 to-[#085041]/80 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80 z-10"></div>
<img alt="Custos Story Video Thumbnail" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out relative z-0" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center z-20">
<div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-[#1D9E75] ml-1" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#FAF7F2] relative border-t border-[#085041]/5" id="equip">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out'}}>
<span className="text-xs font-semibold tracking-widest text-[#1D9E75] uppercase block mb-4">L'Equip</span>
<h2 className="text-3xl md:text-4xl font-['Fraunces',_serif] font-medium tracking-tight text-[#085041]">
                    Persones cuidant de persones
                </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
<div className="scroll-reveal group" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '100ms'}}>
<div className="aspect-square rounded-[2rem] overflow-hidden mb-6 bg-[#E1F5EE] relative">
<img alt="Membres de l'equip" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-['Fraunces',_serif] font-medium tracking-tight text-[#085041] mb-1">Arnau Rovira</h3>
<p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-3">CEO &amp; Cofundador</p>
<p className="text-sm text-[#085041]/70 leading-relaxed font-normal">Enginyer de dades obsessionat amb aplicar la IA per resoldre problemes profundament humans de manera respectuosa.</p>
</div>
<div className="scroll-reveal group" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '200ms'}}>
<div className="aspect-square rounded-[2rem] overflow-hidden mb-6 bg-[#E1F5EE] relative">
<img alt="Membres de l'equip" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-['Fraunces',_serif] font-medium tracking-tight text-[#085041] mb-1">Marta Soler</h3>
<p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-3">CTO &amp; Cofundadora</p>
<p className="text-sm text-[#085041]/70 leading-relaxed font-normal">Arquitecta de sistemes IoT. Lidera el desenvolupament del sensor invisible i la xarxa de processament de dades.</p>
</div>
<div className="scroll-reveal group" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out', transitionDelay: '300ms'}}>
<div className="aspect-square rounded-[2rem] overflow-hidden mb-6 bg-[#E1F5EE] relative">
<img alt="Membres de l'equip" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-['Fraunces',_serif] font-medium tracking-tight text-[#085041] mb-1">Pol Garcia</h3>
<p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-3">Cap de Disseny</p>
<p className="text-sm text-[#085041]/70 leading-relaxed font-normal">Assegura que la tecnologia s'adapti a les persones grans, no al revés. Convertint l'invisible en útil i funcional.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#085041] text-[#FAF7F2] relative overflow-hidden" id="comenca">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
<svg className="w-full h-full max-w-screen-xl animate-[pulse_10s_ease-in-out_infinite]" viewbox="0 0 1000 1000">
<path d="M-200,800 C100,600 400,900 1200,700" fill="none" stroke="#1D9E75" strokeLinecap="round" strokeWidth="60" style={{filter: 'blur(40px)'}}></path>
</svg>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10 scroll-reveal" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 0.6s ease-out'}}>
<p className="text-lg md:text-xl text-[#E1F5EE]/80 mb-8 md:mb-10 leading-relaxed">
                Era un dimarts al matí. La iaia no havia trucat.<br/>
                Aquell moment no s'oblida.<br/>
                Però tampoc ha de repetir-se.
            </p>
<h2 className="text-4xl md:text-6xl font-['Fraunces',_serif] font-medium tracking-tight text-white mb-6 leading-tight">
                Cuida les persones que estimes. En silenci. Amb dignitat.
            </h2>
<p className="text-base md:text-lg text-[#E1F5EE]/70 mb-10 md:mb-12 max-w-2xl mx-auto font-normal">
                El primer mes és sense cost. Instal·lació inclosa. Cancel·lació en un clic. El que no té preu és la tranquil·litat.
            </p>
<button className="w-full sm:w-auto bg-[#FAF7F2] text-[#085041] text-base md:text-lg font-medium px-8 py-4 rounded-full hover:bg-white active:scale-[0.97] transition-all duration-200 shadow-lg group relative overflow-hidden inline-flex items-center justify-center gap-3">
<span className="relative z-10">Comença ara — 149€ + 9,99€/mes</span>
<iconify-icon className="relative z-10 text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
<div className="mt-8 text-xs text-[#E1F5EE]/50 font-medium tracking-wide px-4">
                Sense permanència · Sense càmeres · Sense que el teu familiar hagi de fer res
            </div>
</div>
</section>

<footer className="bg-[#FAF7F2] pt-16 pb-8 border-t border-[#085041]/10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-[#1D9E75] text-2xl" icon="solar:drop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-['Fraunces',_serif] font-medium tracking-tighter text-xl text-[#085041]">CUSTOS</span>
</div>
<p className="text-sm text-[#085041]/60 italic font-medium">Guardians of the ones you love.</p>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-[#085041] mb-4 md:mb-6">Navegació</h4>
<ul className="space-y-3 text-sm text-[#085041]/70">
<li><a className="hover:text-[#1D9E75] transition-colors" href="#com-funciona">Com funciona</a></li>
<li><a className="hover:text-[#1D9E75] transition-colors" href="#experiencia-app">L'App</a></li>
<li><a className="hover:text-[#1D9E75] transition-colors" href="#historia">Història</a></li>
<li><a className="hover:text-[#1D9E75] transition-colors" href="#equip">Equip</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-[#085041] mb-4 md:mb-6">Legal</h4>
<ul className="space-y-3 text-sm text-[#085041]/70">
<li><a className="hover:text-[#1D9E75] transition-colors" href="#">Política de privacitat</a></li>
<li><a className="hover:text-[#1D9E75] transition-colors" href="#">Avís legal</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-[#085041] mb-4 md:mb-6">Contacte</h4>
<ul className="space-y-3 text-sm text-[#085041]/70">
<li><a className="hover:text-[#1D9E75] transition-colors" href="https://custos.app">custos.app</a></li>
<li>Terrassa, Barcelona</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#085041]/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-[#085041]/40 font-medium">
<p>© 2026 Custos. Tots els drets reservats.</p>
<p className="mt-2 md:mt-0">Terrassa, Barcelona.</p>
</div>
</div>
</footer>


    </>
  );
}
