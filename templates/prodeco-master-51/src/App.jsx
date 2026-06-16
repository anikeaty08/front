import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      function calculateQuote() {
          const rangeVal = document.getElementById('wall-range').value;
          const basePrice = 35; // base price per mq
          const total = rangeVal * basePrice;

          // Animation logic
          const formStep = document.getElementById('calculator-step-1');
          const resultStep = document.getElementById('calculator-result');
          const priceDisplay = document.getElementById('price-display');
          const container = document.getElementById('calculator-container');

          // Fade out form
          formStep.style.opacity = '0';

          setTimeout(() => {
              formStep.classList.add('hidden');
              resultStep.classList.remove('hidden');

              // Adjust container height animation if needed (tailwind transition handles standard props)

              // Trigger reflow for transition
              void resultStep.offsetWidth;

              resultStep.style.opacity = '1';

              // Counter animation for price
              animateValue(priceDisplay, 0, total, 1500);

          }, 500);
      }

      function animateValue(obj, start, end, duration) {
          let startTimestamp = null;
          const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              // Ease out cubic
              const easeProgress = 1 - Math.pow(1 - progress, 3);

              const currentVal = Math.floor(easeProgress * (end - start) + start);
              obj.innerHTML = new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(currentVal);

              if (progress < 1) {
                  window.requestAnimationFrame(step);
              }
          };
          window.requestAnimationFrame(step);
      }

      function resetCalculator() {
          const formStep = document.getElementById('calculator-step-1');
          const resultStep = document.getElementById('calculator-result');

          resultStep.style.opacity = '0';

          setTimeout(() => {
              resultStep.classList.add('hidden');
              formStep.classList.remove('hidden');

              void formStep.offsetWidth;
              formStep.style.opacity = '1';
          }, 500);
      }
    


      // Scroll Reveal Observer
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

          // Mouse Parallax for specific decorative elements
          document.addEventListener('mousemove', (e) => {
              const x = e.clientX / window.innerWidth;
              const y = e.clientY / window.innerHeight;

              document.querySelectorAll('.parallax-mouse').forEach(el => {
                  const speed = el.getAttribute('data-speed') || 20;
                  el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
              });
          });

          // 3D Tilt Effect for cards
          const cards = document.querySelectorAll('.group\\/card, .snap-center');
          cards.forEach(card => {
              card.addEventListener('mousemove', (e) => {
                  const rect = card.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  const centerX = rect.width / 2;
                  const centerY = rect.height / 2;
                  const rotateX = ((y - centerY) / centerY) * -5;
                  const rotateY = ((x - centerX) / centerX) * 5;

                  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                  card.style.transition = 'transform 0.1s ease';
              });

              card.addEventListener('mouseleave', () => {
                  card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                  card.style.transition = 'transform 0.5s ease';
              });
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="block hover:opacity-80 transition-opacity" href="#">
<svg className="h-6 md:h-7 w-auto text-white" fill="none" viewbox="0 0 145 30" xmlns="http://www.w3.org/2000/svg">
<text fill="none" fontFamily="'Inter', sans-serif" fontSize="28" font-weight="600" letter-spacing="-0.02em" stroke="currentColor" strokeWidth="1.2" x="0" y="24">
              PRODECO
            </text>
</svg>
</a>
<button className="md:hidden text-white flex items-center">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
<div className="hidden md:flex items-center gap-8">
<div className="flex gap-8 text-xs font-medium tracking-wide text-zinc-400">
<a className="hover:text-white transition-colors py-2" href="#about">
              Visione
            </a>
<a className="hover:text-white transition-colors py-2" href="#effects">
              Collezioni
            </a>
<a className="hover:text-white transition-colors py-2" href="#gallery">
              Galleria
            </a>
<a className="hover:text-white transition-colors py-2" href="#reviews">
              Clienti
            </a>
</div>
<a className="bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2" href="#calculator">
            Configura Progetto
          </a>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-float-gentle"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] mix-blend-screen opacity-30 animate-float-delayed"></div>
<div className="absolute inset-0 bg-grid-white opacity-40"></div>
</div>
<div className="absolute inset-0 z-0">
<img alt="Alessandro Testa Portrait" className="w-full h-full object-cover object-[center_30%] opacity-60 animate-fade-in filter contrast-125 brightness-75 grayscale" src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left mt-12">
<div className="animate-fade-in-up delay-100 mb-8 flex items-center gap-4 justify-center md:justify-start">
<span className="px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-widest text-white font-medium">
            Master Decorator
          </span>
<span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
<span className="iconify" data-icon="lucide:map-pin" data-width="12"></span>
            Italia
          </span>
</div>
<h1 className="animate-fade-in-up delay-200 text-6xl md:text-8xl lg:text-[10rem] font-semibold text-white tracking-tighter mb-8 leading-[0.85]">
          ALESSANDRO
          <br/>
<span className="text-zinc-700">TESTA</span>
</h1>
<p className="animate-fade-in-up delay-300 text-lg md:text-xl text-zinc-400 font-light tracking-tight max-w-lg mb-12 leading-relaxed">
          Trasformo pareti anonime in opere d'arte materica.
          <br/>
<span className="text-zinc-500">
            Precisione maniacale, pulizia assoluta.
          </span>
</p>
<div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 w-full md:w-auto items-center md:items-start">
<a className="group bg-white text-black rounded-full px-8 py-3.5 text-sm font-semibold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 min-w-[200px]" href="#calculator">
            Inizia il tuo progetto
            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="backdrop-blur-md bg-white/5 border border-white/10 text-white rounded-full px-8 py-3.5 text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2 min-w-[200px]" href="#gallery">
<span className="iconify" data-icon="lucide:image" data-width="16"></span>
            Guarda i lavori
          </a>
</div>
</div>
</header>

<section className="py-32 bg-[#050505] border-b border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2 block">
            Live from site
          </span>
<h2 className="text-4xl font-semibold text-white tracking-tight">
            Dettagli &amp; Reazioni
          </h2>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
<div className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest">
            Live Feed
          </div>
</div>
</div>

<div className="w-full overflow-hidden relative group">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
<div className="flex w-max gap-6 animate-scroll px-6" style={{animationDuration: '40s'}}>


<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-xl font-medium text-white mb-1">Texture Oro</h3>
<p className="text-xs text-zinc-400">Dettaglio ravvicinato</p>
</div>
</div>

<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex gap-1 text-yellow-500 mb-2">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
</div>
<h3 className="text-xl font-medium text-white mb-1">"Superba."</h3>
<p className="text-[10px] text-zinc-500 uppercase">
                CLIENT PRIVATO - ROMA
              </p>
</div>
</div>

<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<span className="text-[9px] font-bold bg-white/10 border border-white/10 text-zinc-300 px-2 py-0.5 rounded-sm uppercase tracking-wider mb-2 inline-block">
                WIP
              </span>
<h3 className="text-xl font-medium text-white mb-1">
                Pietra Spaccata
              </h3>
<p className="text-xs text-zinc-400">Fase 1: Stesura</p>
</div>
</div>

<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-xl font-medium text-white mb-1">Marmorino</h3>
<p className="text-xs text-zinc-400">Lucidatura a cera</p>
</div>
</div>

<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-xl font-medium text-white mb-1">Loft Milano</h3>
<p className="text-xs text-zinc-400">Tour finale</p>
</div>
</div>

<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex gap-1 text-yellow-500 mb-2">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
</div>
<h3 className="text-xl font-medium text-white mb-1">"Artista."</h3>
<p className="text-[10px] text-zinc-500 uppercase">
                MARCO T. - TORINO
              </p>
</div>
</div>

<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-xl font-medium text-white mb-1">Texture Oro</h3>
<p className="text-xs text-zinc-400">Dettaglio ravvicinato</p>
</div>
</div>
<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex gap-1 text-yellow-500 mb-2">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
</div>
<h3 className="text-xl font-medium text-white mb-1">"Superba."</h3>
<p className="text-[10px] text-zinc-500 uppercase">
                CLIENT PRIVATO - ROMA
              </p>
</div>
</div>
<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<span className="text-[9px] font-bold bg-white/10 border border-white/10 text-zinc-300 px-2 py-0.5 rounded-sm uppercase tracking-wider mb-2 inline-block">
                WIP
              </span>
<h3 className="text-xl font-medium text-white mb-1">
                Pietra Spaccata
              </h3>
<p className="text-xs text-zinc-400">Fase 1: Stesura</p>
</div>
</div>
<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-xl font-medium text-white mb-1">Marmorino</h3>
<p className="text-xs text-zinc-400">Lucidatura a cera</p>
</div>
</div>
<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1560448204-61dc36dc98c8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<h3 className="text-xl font-medium text-white mb-1">Loft Milano</h3>
<p className="text-xs text-zinc-400">Tour finale</p>
</div>
</div>
<div className="w-[320px] h-[560px] relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 group/card cursor-pointer hover:border-white/30 transition-all flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover/card:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm flex items-center justify-center group-hover/card:scale-110 transition-transform">
<span className="iconify text-white ml-1" data-icon="lucide:play" data-width="28"></span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="flex gap-1 text-yellow-500 mb-2">
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-icon="lucide:star" data-width="12"></span>
</div>
<h3 className="text-xl font-medium text-white mb-1">"Artista."</h3>
<p className="text-[10px] text-zinc-500 uppercase">
                MARCO T. - TORINO
              </p>
</div>
</div>
</div>
</div>
</section>

<div className="absolute bottom-[10%] left-[10%] w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse pointer-events-none parallax-mouse" data-speed="-30"></div>
<div className="absolute top-[20%] right-[20%] w-24 h-24 bg-zinc-700/10 rounded-full blur-xl animate-float pointer-events-none parallax-mouse" data-speed="20"></div>
<section className="py-32 bg-[#050505] relative overflow-hidden" id="calculator">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

<div className="absolute left-[5%] top-[25%] hidden xl:block animate-float pointer-events-none z-0">
<div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-4 rounded-2xl w-48 shadow-2xl rotate-[-6deg]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
<span className="iconify text-zinc-400" data-icon="lucide:palette" data-width="14"></span>
</div>
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                Palette
              </div>
<div className="text-xs text-white font-medium">Toni Naturali</div>
</div>
</div>
<div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-white/80 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute right-[5%] top-[40%] hidden xl:block animate-float-delayed pointer-events-none z-0">
<div className="bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-4 rounded-2xl w-48 shadow-2xl rotate-[6deg]">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
<span className="iconify text-zinc-400" data-icon="lucide:trowel" data-width="14"></span>
</div>
<div>
<div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                Strumento
              </div>
<div className="text-xs text-white font-medium">Spatola Inox</div>
</div>
</div>
<div className="flex items-center gap-2 mt-2">
<div className="text-[10px] text-zinc-600 font-mono">FINITURA_LVL</div>
<div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-[95%] bg-green-500/50 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute right-[12%] bottom-[15%] hidden xl:block animate-float delay-500 pointer-events-none z-0">
<div className="flex items-center gap-2 bg-zinc-900/40 backdrop-blur-md border border-white/5 px-3 py-1.5 rounded-full rotate-[-3deg]">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-[10px] text-zinc-300 font-medium">
            Disponibilità Immediata
          </span>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest border border-zinc-800 rounded-full px-3 py-1 bg-zinc-900/50">
            Configuratore Premium
          </span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mt-6 mb-4">
            Progetta la tua Atmosfera
          </h2>
<p className="text-zinc-400 font-light max-w-lg mx-auto leading-relaxed">
            Compila i dettagli per ricevere un preventivo personalizzato e una
            consulenza telefonica gratuita con Alessandro.
          </p>
</div>
<div className="bg-[#0a0a0a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative transition-all duration-700" id="calculator-container">

<div className="bg-zinc-900/50 px-8 py-5 border-b border-white/5 flex justify-between items-center">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-[10px] font-mono text-zinc-600 tracking-wider">
              PROJECT_ID: NEW_REQ
            </span>
</div>

<div className="p-8 md:p-12 space-y-12 transition-all duration-500" id="calculator-step-1">

<div className="space-y-6">
<div className="flex justify-between items-end">
<label className="text-sm font-medium text-white flex items-center gap-3">
<span className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-white font-mono">
                    1
                  </span>
                  Dimensioni Pareti
                </label>
<span className="text-3xl font-medium text-white tabular-nums tracking-tight">
<span id="range-val">40</span>
<span className="text-sm font-normal text-zinc-500 ml-1">mq</span>
</span>
</div>
<input className="w-full" id="wall-range" max="300" min="10" oninput="document.getElementById('range-val').innerText = this.value" type="range" value="40"/>
</div>

<div className="space-y-6">
<label className="text-sm font-medium text-white flex items-center gap-3">
<span className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-white font-mono">
                  2
                </span>
                Tipo di Ambiente
              </label>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="room" type="radio"/>
<div className="text-center py-3 rounded-lg border border-white/10 bg-zinc-900/30 text-zinc-400 text-sm peer-checked:bg-white peer-checked:text-black peer-checked:font-medium transition-all group-hover:bg-zinc-900 hover:border-white/20">
                    Living
                  </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="room" type="radio"/>
<div className="text-center py-3 rounded-lg border border-white/10 bg-zinc-900/30 text-zinc-400 text-sm peer-checked:bg-white peer-checked:text-black peer-checked:font-medium transition-all group-hover:bg-zinc-900 hover:border-white/20">
                    Bagno
                  </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="room" type="radio"/>
<div className="text-center py-3 rounded-lg border border-white/10 bg-zinc-900/30 text-zinc-400 text-sm peer-checked:bg-white peer-checked:text-black peer-checked:font-medium transition-all group-hover:bg-zinc-900 hover:border-white/20">
                    Camera
                  </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="room" type="radio"/>
<div className="text-center py-3 rounded-lg border border-white/10 bg-zinc-900/30 text-zinc-400 text-sm peer-checked:bg-white peer-checked:text-black peer-checked:font-medium transition-all group-hover:bg-zinc-900 hover:border-white/20">
                    Altro
                  </div>
</label>
</div>
</div>

<div className="space-y-6">
<label className="text-sm font-medium text-white flex items-center gap-3">
<span className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-[10px] text-white font-mono">
                  3
                </span>
                Famiglia Decorativa
              </label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="relative cursor-pointer group">
<input checked="" className="peer sr-only" name="family" type="radio"/>
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900 peer-checked:border-white peer-checked:bg-zinc-900 transition-all">
<div className="w-10 h-10 bg-zinc-800 rounded-lg overflow-hidden shrink-0 border border-white/10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-white font-medium text-sm">
                        Mondo Pietra
                      </div>
</div>
<div className="ml-auto opacity-0 peer-checked:opacity-100 text-white">
<span className="iconify" data-icon="lucide:check-circle" data-width="16"></span>
</div>
</div>
</label>
<label className="relative cursor-pointer group">
<input className="peer sr-only" name="family" type="radio"/>
<div className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-zinc-900/30 hover:bg-zinc-900 peer-checked:border-white peer-checked:bg-zinc-900 transition-all">
<div className="w-10 h-10 bg-zinc-800 rounded-lg overflow-hidden shrink-0 border border-white/10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-white font-medium text-sm">
                        Mondo Tessuto
                      </div>
</div>
<div className="ml-auto opacity-0 peer-checked:opacity-100 text-white">
<span className="iconify" data-icon="lucide:check-circle" data-width="16"></span>
</div>
</div>
</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
<input className="w-full bg-zinc-900/50 text-white rounded-lg px-4 py-3 border border-white/10 text-sm focus:border-white/30 focus:outline-none transition-colors" placeholder="Nome" type="text"/>
<input className="w-full bg-zinc-900/50 text-white rounded-lg px-4 py-3 border border-white/10 text-sm focus:border-white/30 focus:outline-none transition-colors" placeholder="Email" type="email"/>
</div>
<button className="group w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" onclick="calculateQuote()" type="button">
              Richiedi Preventivo Gratuito
              <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:send" data-width="16"></span>
</button>
</div>

<div className="hidden opacity-0 transition-opacity duration-700 ease-in-out p-8 md:p-12" id="calculator-result">
<div className="text-center mb-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-4">
<span className="iconify" data-icon="lucide:check-circle" data-width="14"></span>
                Preventivo Calcolato
              </div>
<div className="flex items-baseline justify-center gap-2">
<span className="text-6xl md:text-7xl font-bold text-white tracking-tighter" id="price-display">
                  €0
                </span>
<span className="text-zinc-500 text-xl">*</span>
</div>
<p className="text-zinc-500 text-sm mt-3 max-w-md mx-auto">
                Include materiali, manodopera specializzata e protezione
                ambienti. Prenota ora per bloccare il prezzo.
              </p>
</div>

<div className="bg-zinc-900/30 rounded-2xl border border-white/10 p-6 md:p-8 mb-8 backdrop-blur-sm">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-white font-medium text-lg">
                    Sopralluogo Gratuito
                  </h3>
<p className="text-zinc-500 text-xs">
                    Seleziona una data per la visita tecnica
                  </p>
</div>
<div className="flex items-center gap-3 bg-black/40 rounded-lg p-1 border border-white/5">
<button className="p-1 hover:bg-white/10 rounded text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:chevron-left" data-width="16"></span>
</button>
<span className="text-sm text-zinc-300 font-medium px-2">
                    Ottobre 2024
                  </span>
<button className="p-1 hover:bg-white/10 rounded text-zinc-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</button>
</div>
</div>
<div className="grid grid-cols-7 gap-1 md:gap-4 mb-2">
<span className="text-[10px] font-medium text-zinc-600 uppercase text-center pb-2">
                  Lun
                </span>
<span className="text-[10px] font-medium text-zinc-600 uppercase text-center pb-2">
                  Mar
                </span>
<span className="text-[10px] font-medium text-zinc-600 uppercase text-center pb-2">
                  Mer
                </span>
<span className="text-[10px] font-medium text-zinc-600 uppercase text-center pb-2">
                  Gio
                </span>
<span className="text-[10px] font-medium text-zinc-600 uppercase text-center pb-2">
                  Ven
                </span>
<span className="text-[10px] font-medium text-zinc-600 uppercase text-center pb-2">
                  Sab
                </span>
<span className="text-[10px] font-medium text-zinc-600 uppercase text-center pb-2">
                  Dom
                </span>
</div>
<div className="grid grid-cols-7 gap-1 md:gap-4 text-sm">
<span className="text-zinc-800 text-center py-2">29</span>
<span className="text-zinc-800 text-center py-2">30</span>
<button className="calendar-day">1</button>
<button className="calendar-day">2</button>
<button className="calendar-day">3</button>
<button className="calendar-day">4</button>
<button className="calendar-day">5</button>
<button className="calendar-day">6</button>
<button className="calendar-day">7</button>
<button className="calendar-day">8</button>
<button className="calendar-day selected">9</button>
<button className="calendar-day">10</button>
<button className="calendar-day disabled">11</button>
<button className="calendar-day disabled">12</button>
<button className="calendar-day">13</button>
<button className="calendar-day">14</button>
<button className="calendar-day">15</button>
<button className="calendar-day">16</button>
<button className="calendar-day">17</button>
<button className="calendar-day disabled">18</button>
<button className="calendar-day disabled">19</button>
</div>
</div>
<button className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5">
              Conferma Appuntamento
              <span className="iconify" data-icon="lucide:calendar-check" data-width="16"></span>
</button>
<div className="text-center mt-6">
<button className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center justify-center gap-1 mx-auto" onclick="resetCalculator()" type="button">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="12"></span>
                Ricalcola Preventivo
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-6 md:px-12 bg-[#050505]" id="about">
<div className="absolute right-[5%] top-20 z-0 hidden lg:block opacity-60">
<div className="cube-scene">
<div className="cube-wrapper">
<div className="cube-face"></div>
<div className="cube-face"></div>
<div className="cube-face"></div>
<div className="cube-face"></div>
<div className="cube-face"></div>
<div className="cube-face"></div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
<div className="w-full lg:w-1/3 lg:sticky lg:top-32 relative z-30 bg-[#050505]/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6 leading-tight reveal-on-scroll">
              La firma
              <br/>
              di chi crea.
            </h2>
<p className="text-zinc-400 leading-relaxed mb-8 font-light">
              Non sono un'azienda anonima. Sono Alessandro Testa. Dietro ogni
              finitura c'è la mia mano, la mia esperienza e il mio controllo
              maniacale sul dettaglio.
            </p>
<div className="inline-flex items-center gap-3 text-[10px] font-medium tracking-widest text-zinc-500 uppercase border-t border-white/10 pt-6 w-full">
<span className="iconify text-white" data-icon="lucide:fingerprint" data-width="20"></span>
              Garanzia Personale
            </div>
</div>
<div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
<div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:scan-eye" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">
                Analisi della Luce
              </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Non applico e basta. Studio come la luce naturale e artificiale
                colpisce le tue pareti per consigliarti la texture ideale.
              </p>
</div>
<div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 bg-zinc-900 border border-white/10 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:gem" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">
                Materiali Nobili
              </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Utilizzo esclusivamente grassello di calce invecchiato, polveri
                di marmo e pigmenti naturali. Niente resine plastiche.
              </p>
</div>
<div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 bg-zinc-900 border border-white/10 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">
                Cantiere Chirurgico
              </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Il mio standard è lasciare la casa più pulita di come l'ho
                trovata. Protezione totale di pavimenti e arredi garantita.
              </p>
</div>
<div className="bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 bg-zinc-900 border border-white/10 text-white rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:award" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-3">
                Unico Interlocutore
              </h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Nessun operaio mandato a caso. Dal sopralluogo all'ultima
                passata di cera, ci sono io. Risultato identico alla promessa.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-[#050505]" id="effects">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80%] bg-gradient-to-r from-transparent via-white/5 to-transparent blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2 reveal-on-scroll">
            Collezioni Esclusive
          </h2>
<p className="text-zinc-400 text-sm">
            Le texture più richieste dai migliori architetti.
          </p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<span className="iconify" data-icon="lucide:arrow-left" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x snap-mandatory no-scrollbar">

<div className="snap-center flex-shrink-0 w-[85vw] md:w-[400px] h-[500px] bg-zinc-900 rounded-xl overflow-hidden relative group border border-white/10 cursor-pointer">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594908900066-3f47337549d8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-[10px] text-zinc-400 uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full mb-3 inline-block">
              Best Seller
            </span>
<h3 className="text-2xl font-medium text-white mb-2">
              Pietra Spaccata
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
              Una texture profonda che replica la naturalezza della roccia viva.
              Ideale per pareti focus in living moderni.
            </p>
</div>
</div>

<div className="snap-center flex-shrink-0 w-[85vw] md:w-[400px] h-[500px] bg-zinc-900 rounded-xl overflow-hidden relative group border border-white/10 cursor-pointer">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-[10px] text-zinc-400 uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full mb-3 inline-block">
              Luxury
            </span>
<h3 className="text-2xl font-medium text-white mb-2">
              Seta &amp; Perle
            </h3>
<p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
              Riflessi metallici cangianti che mutano con la luce del giorno.
              Eleganza pura per camere da letto.
            </p>
</div>
</div>

<div className="snap-center flex-shrink-0 w-[85vw] md:w-[400px] h-[500px] bg-zinc-900 rounded-xl overflow-hidden relative group border border-white/10 cursor-pointer">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-[10px] text-zinc-400 uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full mb-3 inline-block">
              Industrial
            </span>
<h3 className="text-2xl font-medium text-white mb-2">Effetto Corten</h3>
<p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
              L'ossidazione del metallo riprodotta con pigmenti naturali.
              Carattere forte per ambienti contemporanei.
            </p>
</div>
</div>

<div className="snap-center flex-shrink-0 w-[85vw] md:w-[400px] h-[500px] bg-zinc-900 rounded-xl overflow-hidden relative group border border-white/10 cursor-pointer">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-[10px] text-zinc-400 uppercase tracking-widest border border-white/20 px-2 py-1 rounded-full mb-3 inline-block">
              Gold
            </span>
<h3 className="text-2xl font-medium text-white mb-2">Foglia Oro</h3>
<p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
              Dettagli preziosi applicati a mano. Il massimo del lusso per
              pareti che devono stupire.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] px-6 border-b border-white/5" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-2 block">
              Portfolio Completo
            </span>
<h2 className="text-3xl font-semibold text-white tracking-tight reveal-on-scroll">
              Archivio Opere
            </h2>
</div>
<div className="flex gap-4 text-xs font-medium text-zinc-500">
<span className="text-white border-b border-white pb-1 cursor-pointer">
              Tutti
            </span>
<span className="hover:text-white transition-colors cursor-pointer">
              Residenziale
            </span>
<span className="hover:text-white transition-colors cursor-pointer">
              Commerciale
            </span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[200px_200px_200px] md:grid-rows-[300px_300px] gap-4">

<div className="col-span-2 row-span-2 relative group rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-6 left-6">
<div className="text-white font-medium text-lg">Villa Serena</div>
<div className="text-zinc-400 text-xs">Istinto Pietra Spaccata</div>
</div>
</div>

<div className="col-span-1 row-span-1 relative group rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>

<div className="col-span-1 row-span-1 relative group rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>

<div className="col-span-2 row-span-1 relative group rounded-2xl overflow-hidden bg-zinc-900 cursor-pointer border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>
</div>
<div className="mt-8 text-center">
<button className="text-xs font-medium text-white border-b border-zinc-700 hover:border-white pb-0.5 transition-colors uppercase tracking-widest">
            Vedi tutti i progetti
          </button>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] px-6" id="reviews">
<div className="absolute top-20 right-10 z-0 pointer-events-none opacity-20">
<svg className="animate-spin-slow" height="200" style={{animationDuration: '40s'}} viewbox="0 0 200 200" width="200">
<path d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" fill="none" id="circlePath"></path>
<text fill="white" fontSize="14" letter-spacing="4">
<textpath xlink:href="#circlePath">
              ARCHITETTURA • MATERIA • LUCE • SPAZIO •
            </textpath>
</text>
</svg>
</div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2 reveal-on-scroll">
            Dicono di Me
          </h2>
<p className="text-zinc-500">Feedback verificati dai miei clienti.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all">
<div className="flex gap-1 mb-4 text-yellow-500">
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">
              "Alessandro ha trasformato il nostro soggiorno. Non pensavo che
              una semplice parete potesse cambiare così tanto l'atmosfera di
              casa. Pulizia impeccabile."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs font-bold">
                MB
              </div>
<div>
<div className="text-white text-sm font-medium">Marco B.</div>
<div className="text-zinc-500 text-xs">Milano</div>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all">
<div className="flex gap-1 mb-4 text-yellow-500">
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">
              "Un vero artigiano. Mi ha consigliato l'effetto pietra spaccata
              per il mio studio e il risultato è incredibile. Puntuale e
              professionale."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs font-bold">
                GT
              </div>
<div>
<div className="text-white text-sm font-medium">Giulia T.</div>
<div className="text-zinc-500 text-xs">Monza</div>
</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all">
<div className="flex gap-1 mb-4 text-yellow-500">
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
</div>
<p className="text-zinc-300 text-sm leading-relaxed mb-6">
              "Consiglio vivamente Prodeco. Non è il solito imbianchino, è un
              decoratore con una visione artistica. Prezzo onesto per la qualità
              offerta."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-white text-xs font-bold">
                LR
              </div>
<div>
<div className="text-white text-sm font-medium">Luca R.</div>
<div className="text-zinc-500 text-xs">Como</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">
          Domande Frequenti
        </h2>
<div className="space-y-4">
<details className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white hover:bg-zinc-900 transition-colors">
<span>Quanto costa al metro quadro?</span>
<span className="transition-transform duration-300 group-open:rotate-45 text-zinc-500">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="20"></span>
</span>
</summary>
<div className="text-zinc-400 text-sm px-6 pb-6 leading-relaxed border-t border-white/5 pt-4 animate-fade-in">
              Il prezzo varia in base all'effetto scelto, alle condizioni della
              parete e alla metratura totale.
            </div>
</details>
<details className="group bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/5">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white hover:bg-zinc-900 transition-colors">
<span>Quanto tempo ci vuole per una parete?</span>
<span className="transition-transform duration-300 group-open:rotate-45 text-zinc-500">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="20"></span>
</span>
</summary>
<div className="text-zinc-400 text-sm px-6 pb-6 leading-relaxed border-t border-white/5 pt-4 animate-fade-in">
              Per una parete "focus" standard (circa 10-15mq) servono
              generalmente 2-3 giorni lavorativi.
            </div>
</details>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 text-center bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<svg className="h-6 w-auto text-white mb-4" fill="none" viewbox="0 0 145 30" xmlns="http://www.w3.org/2000/svg">
<text fill="none" fontFamily="'Inter', sans-serif" fontSize="28" font-weight="600" letter-spacing="-0.02em" stroke="currentColor" strokeWidth="1.2" text-anchor="middle" x="50%" y="24">
            PRODECO
          </text>
</svg>
<p className="text-[10px] text-zinc-500 mb-8 tracking-[0.2em] uppercase">
          Alessandro Testa
        </p>
<p className="text-[10px] text-zinc-800">
          © 2024 Prodeco di Alessandro Testa.
        </p>
</div>
</footer>



    </>
  );
}
