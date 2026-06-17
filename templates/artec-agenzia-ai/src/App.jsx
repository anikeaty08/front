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



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="590" style={{width: '100%', height: '100%'}} width="911"></canvas></div></div>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-gold w-6 h-6 iconify--lucide" data-icon="lucide:bot" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
<span className="text-lg font-semibold tracking-tight text-white">ARTEC <span className="text-neutral-500 font-light">AI</span></span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#soluzione">Soluzione</a>
<a className="hover:text-white transition-colors" href="#risultati">Risultati</a>
<a className="hover:text-white transition-colors" href="#roi">Calcolatore</a>
<a className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full transition-all border border-white/10" href="#booking">Prenota Analisi</a>
</div>

<div className="md:hidden text-white">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 left-1/4 w-96 h-96 bg-[#D4AF37] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
</div>
<div className="sm:px-6 animate-fade-up z-10 text-center max-w-5xl mr-auto ml-auto pr-4 pl-4 relative" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 text-[#D4AF37] text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
</span>
                Nuova Tecnologia AI Voice 2.0
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tighter leading-[1.1] mb-6">
                Trasforma Chiamate Perse in <br className="hidden sm:block"/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37]">€5.000+ di Fatturato</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                L'Assistente AI che risponde 24/7 con voce umana mentre tu tagli. <br/>Zero chiamate perse, zero no-show, agenda sempre piena.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] hover:bg-[#b59023] text-black font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 gold-glow flex items-center justify-center gap-2" href="#booking">
                    PRENOTA ANALISI GRATUITA
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="sm:w-auto hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-medium text-white bg-white/5 w-full border-white/10 border rounded-lg pt-4 pr-8 pb-4 pl-8" href="#demo">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    Ascolta Demo Audio
                </a>
</div>

<div className="max-w-4xl mt-20 mr-auto ml-auto relative">
<div className="overflow-hidden aspect-[16/9] group bg-[#1A1A1A] border-white/10 border rounded-xl relative shadow-2xl">

<div className="z-10 bg-gradient-to-t from-black via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"><img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/991bb79a-e3e5-47bc-9eb6-36c95ebd8a85_3840w.jpg"/>
</div>

<div className="absolute inset-0 flex items-center justify-center z-0 opacity-50">
<img alt="Barbershop Luxury Interior" className="w-full h-full object-cover grayscale opacity-40" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&amp;fit=crop&amp;q=80&amp;w=2074"/>
</div>

<div className="z-20 grid grid-cols-1 md:grid-cols-3 gap-4 absolute right-8 bottom-8 left-8 gap-x-4 gap-y-4">
<div className="glass-panel flex bg-neutral-950 opacity-90 rounded-lg pt-4 pr-4 pb-4 pl-4 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:phone-incoming" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 2v6h6m0-6l-6 6m-2.168 8.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<p className="text-xs text-neutral-400">Chiamata in arrivo</p>
<p className="text-sm font-medium text-white">AI sta rispondendo...</p>
</div>
</div>
<div className="glass-panel flex bg-neutral-950 opacity-90 rounded-lg pt-4 pr-4 pb-4 pl-4 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:calendar-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18M9 16l2 2l4-4"></path></g></svg>
</div>
<div className="">
<p className="text-xs text-neutral-400">Prenotazione</p>
<p className="text-sm font-medium text-white">Domani, 14:30 - Marco</p>
</div>
</div>
<div className="glass-panel flex gap-3 text-zinc-950 bg-neutral-950 opacity-90 rounded-lg pt-4 pr-4 pb-4 pl-4 gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
<svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" data-icon="lucide:credit-card" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
</div>
<div className="">
<p className="text-xs text-neutral-400">Recuperati</p>
<p className="text-sm font-medium text-white">+€150 (Chiamata salvata)</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-4 py-6 flex flex-wrap justify-around items-center gap-6 text-neutral-400 text-sm md:text-base">
<span className="flex items-center gap-2" style={{}}><svg aria-hidden="true" className="iconify text-[#D4AF37] iconify--lucide" data-icon="lucide:check-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Operativo in 72 ore</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-[#D4AF37] iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> ROI Garantito</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-[#D4AF37] iconify--lucide" data-icon="lucide:clock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg> 24/7 Sempre Attivo</span>
<span className="flex items-center gap-2"><svg aria-hidden="true" className="iconify text-[#D4AF37] iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Voce 100% Umana</span>
</div>
</div>

<section className="py-24 bg-black">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Stai Perdendo <span className="text-[#D4AF37]">€1.000+</span> Ogni Settimana?</h2>
<p className="text-neutral-400">La verità è che se non rispondi subito, il cliente chiama il prossimo barbershop.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-red-500/30 transition-colors group">
<div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-red-500 w-6 h-6 iconify--lucide" data-icon="lucide:phone-missed" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m16 2l6 6m0-6l-6 6m-2.168 8.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Chiamate Perse</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Ogni chiamata persa è un taglio da €35-50 regalato alla concorrenza. Moltiplica per 5 chiamate al giorno: sono soldi che bruci.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-red-500/30 transition-colors group">
<div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-red-500 w-6 h-6 iconify--lucide" data-icon="lucide:calendar-x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18m-7 4l-4 4m0-4l4 4"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Incubo No-Show</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Slot vuoti all'ultimo minuto costano tempo e denaro. Senza depositi o reminder intelligenti, il tuo incasso soffre.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-red-500/30 transition-colors group">
<div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-red-500 w-6 h-6 iconify--lucide" data-icon="lucide:ghost" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3l2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Clienti Dimenticati</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Il 30% dei clienti non torna se non sollecitato. Senza un sistema di riattivazione, la tua lista clienti perde valore ogni mese.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-950" id="soluzione">

<div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-block text-[#D4AF37] font-medium text-sm mb-4 tracking-wider uppercase">La Soluzione Definitiva</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">L'AI che Lavora per Te <br/>Mentre Tu Tagli</h2>
<p className="text-neutral-400 mb-8 text-lg">
                        Artec si integra perfettamente nel tuo flusso di lavoro. Nessuna app complicata, solo risultati.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-white font-medium">
<svg aria-hidden="true" className="iconify text-[#D4AF37] iconify--lucide" data-icon="lucide:mic" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg> Voice Agent Premium
                            </div>
<p className="text-sm text-neutral-500 ml-8">Dialoga con tono naturale, gestisce obiezioni e prenota direttamente in agenda.</p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-white font-medium">
<svg aria-hidden="true" className="iconify text-[#D4AF37] iconify--lucide" data-icon="lucide:message-circle" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> WhatsApp Automation
                            </div>
<p className="text-sm text-neutral-500 ml-8">Conferme immediate e follow-up automatici su WhatsApp.</p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-white font-medium">
<svg aria-hidden="true" className="iconify text-[#D4AF37] iconify--lucide" data-icon="lucide:shield" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Zero No-Show
                            </div>
<p className="text-sm text-neutral-500 ml-8">Reminder intelligenti e richieste di conferma riducono i buchi al 0%.</p>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-white font-medium">
<svg aria-hidden="true" className="iconify text-[#D4AF37] iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Reputazione 5 Stelle
                            </div>
<p className="text-sm text-neutral-500 ml-8">Chiede automaticamente una recensione Google ai clienti soddisfatti.</p>
</div>
</div>
<div className="mt-10">
<a className="text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors inline-flex items-center gap-2" href="#booking">
                            Scopri come funziona
                            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#B59023] rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
<div className="relative bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl">

<div className="flex flex-col gap-x-4 gap-y-4">
<div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-2">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:scissors" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
</div>
<div className="">
<div className="font-medium text-white">Artec Assistant</div>
<div className="text-xs text-[#D4AF37]">Online • Risponde in 1s</div>
</div>
</div>

<div className="flex flex-col gap-3 text-sm">
<div className="self-start bg-neutral-800 text-neutral-300 p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-[85%]">
                                    Ciao, vorrei tagliare i capelli giovedì pomeriggio. Avete posto?
                                </div>
<div className="self-end bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-white p-3 rounded-tl-lg rounded-bl-lg rounded-br-lg max-w-[85%]">
                                    Ciao! Certo. Giovedì ho disponibilità alle 16:30 o alle 17:15 con Marco. Cosa preferisci?
                                </div>
<div className="self-start bg-neutral-800 text-neutral-300 p-3 rounded-tr-lg rounded-br-lg rounded-bl-lg max-w-[85%]">
                                    17:15 va benissimo.
                                </div>
<div className="self-end bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-white p-3 rounded-tl-lg rounded-bl-lg rounded-br-lg max-w-[85%]">
                                    Perfetto! Prenotato per Giovedì alle 17:15. Ti ho appena inviato la conferma su WhatsApp. A presto! 💈
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-y border-white/5">
<div className="max-w-4xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-white mb-4">Operativo in 72 Ore</h2>
<p className="text-neutral-400">Nessun setup tecnico da parte tua. Facciamo tutto noi.</p>
</div>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-ml-[0.5px]"></div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-24 group">
<div className="md:w-[45%] mb-4 md:mb-0 md:text-right">
<h3 className="text-xl font-medium text-white mb-2">1. Integrazione</h3>
<p className="text-sm text-neutral-400">Colleghiamo l'AI al tuo sistema di prenotazione attuale (Fresha, Uala, Google Calendar, ecc.).</p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-black border-2 border-[#D4AF37] flex items-center justify-center transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
<span className="text-xs font-bold text-[#D4AF37]">1</span>
</div>
<div className="md:w-[45%] pl-12 md:pl-0"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between mb-12 md:mb-24 group">
<div className="md:w-[45%] order-2 md:order-1 pl-12 md:pl-0"></div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-black border-2 border-neutral-700 group-hover:border-[#D4AF37] flex items-center justify-center transform -translate-x-1/2 z-10 transition-colors">
<span className="text-xs font-bold text-white">2</span>
</div>
<div className="md:w-[45%] order-1 md:order-2 mb-4 md:mb-0 text-left">
<h3 className="text-xl font-medium text-white mb-2">2. Training AI</h3>
<p className="text-sm text-neutral-400">L'AI impara i tuoi prezzi, i tuoi servizi, il tono del tuo brand e come gestire eccezioni.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-center justify-between group">
<div className="md:w-[45%] mb-4 md:mb-0 md:text-right">
<h3 className="text-xl font-medium text-white mb-2">3. Go-Live</h3>
<p className="text-sm text-neutral-400">Attiviamo il trasferimento di chiamata. Inizi a recuperare fatturato dal primo minuto.</p>
</div>
<div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[#D4AF37] text-black flex items-center justify-center transform -translate-x-1/2 z-10">
<svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" data-icon="lucide:rocket" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<div className="md:w-[45%] pl-12 md:pl-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="risultati">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<h2 className="text-3xl font-semibold text-center text-white mb-16">Barbershop che Hanno Già Recuperato il Fatturato Perso</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl relative">
<svg aria-hidden="true" className="iconify text-[#D4AF37]/20 w-12 h-12 absolute top-4 right-4 iconify--lucide" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="mb-6 flex text-[#D4AF37]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-neutral-300 mb-6 italic">"Prima perdevo almeno 4-5 chiamate nei giorni pieni. Il primo mese con Artec ho fatturato €3.500 in più solo dalle chiamate recuperate."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold">A</div>
<div>
<div className="text-white font-medium">Alessandro R.</div>
<div className="text-xs text-neutral-500">Barber King, Milano</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl relative border border-[#D4AF37]/20">
<svg aria-hidden="true" className="iconify text-[#D4AF37]/20 w-12 h-12 absolute top-4 right-4 iconify--lucide" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="mb-6 flex text-[#D4AF37]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-neutral-300 mb-6 italic">"I no-show sono passati da 5 a settimana a ZERO. Il sistema di reminder e depositi gestito dall'AI è infallibile."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold">M</div>
<div>
<div className="text-white font-medium">Marco V.</div>
<div className="text-xs text-neutral-500">Gentlemen's Cut, Roma</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl relative">
<svg aria-hidden="true" className="iconify text-[#D4AF37]/20 w-12 h-12 absolute top-4 right-4 iconify--lucide" data-icon="lucide:quote" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="mb-6 flex text-[#D4AF37]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-neutral-300 mb-6 italic">"Non devo più fermarmi mentre taglio per rispondere al telefono. I clienti apprezzano l'attenzione e io lavoro sereno."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-white font-bold">S</div>
<div>
<div className="text-white font-medium">Stefano B.</div>
<div className="text-xs text-neutral-500">Old School Barber, Torino</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="roi">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="max-w-3xl mx-auto px-4 relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-white mb-2">Calcola Quanto Stai Perdendo Ora</h2>
<p className="text-neutral-400">Muovi gli slider per vedere il potenziale nascosto.</p>
</div>
<div className="bg-[#111] border border-white/10 p-8 rounded-2xl shadow-2xl">

<div className="mb-8">
<div className="flex justify-between text-sm mb-2">
<span className="text-neutral-300">Chiamate perse al giorno</span>
<span className="text-[#D4AF37] font-bold">4</span>
</div>
<input className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer" max="20" min="1" type="range" value="4"/>
</div>

<div className="mb-10">
<div className="flex justify-between text-sm mb-2">
<span className="text-neutral-300">Valore medio servizio (€)</span>
<span className="text-[#D4AF37] font-bold">€35</span>
</div>
<input className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer" max="100" min="15" type="range" value="35"/>
</div>

<div className="bg-gradient-to-r from-neutral-900 to-black border border-white/10 rounded-xl p-6 text-center">
<p className="text-neutral-400 text-sm mb-2 uppercase tracking-wide">Potenziale Perso Mensile</p>
<div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-white mb-4">
                        €3.360
                    </div>
<p className="text-xs text-neutral-500">*Calcolato su 24 giorni lavorativi</p>
<div className="mt-6">
<a className="inline-block bg-white text-black font-semibold px-6 py-3 rounded hover:bg-neutral-200 transition-colors" href="#booking">
                            Recupera Questo Fatturato →
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-neutral-900">
<div className="max-w-4xl mx-auto px-4">
<div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/40 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37] blur-[80px] opacity-20"></div>
<div className="flex-shrink-0">
<div className="w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-black/50">
<svg aria-hidden="true" className="iconify text-[#D4AF37] w-10 h-10 iconify--lucide" data-icon="lucide:shield-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
</div>
<div className="text-center md:text-left">
<h3 className="text-2xl font-bold text-white mb-2">Garanzia 7 Giorni Soddisfatto o Rimborsato</h3>
<p className="text-neutral-300 text-sm leading-relaxed mb-4">
                        Prova l'AI per 7 giorni nel tuo negozio. Se non vedi un aumento delle prenotazioni o non sei soddisfatto per qualsiasi motivo, ti rimborsiamo il 100% dell'investimento. Zero rischi.
                    </p>
<div className="text-xs text-[#D4AF37] font-medium tracking-wide uppercase">Nessuna domanda. Rimborso immediato.</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="booking">
<div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
                    Pronto a Non Perdere Mai Più Una Chiamata?
                </h2>
<p className="text-xl text-neutral-400 mb-10">
                    L'agenda piena che hai sempre voluto è a portata di click. Prenota una consulenza gratuita di 15 minuti per vedere l'AI in azione.
                </p>
<div className="flex flex-col gap-4 text-sm text-neutral-500">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Solo per Barbershop che vogliono scalare
                    </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Setup completo incluso
                    </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Assistenza prioritaria dedicata
                    </div>
</div>
</div>

<div className="bg-[#111] border border-white/10 p-8 rounded-2xl shadow-2xl relative">
<div className="absolute -top-4 -right-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded shadow-lg transform rotate-3">
                    POSTI LIMITATI MENSILI
                </div>
<h3 className="text-xl font-medium text-white mb-6">Richiedi Analisi Gratuita</h3>
<form className="space-y-4">
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-1 uppercase">Nome Completo</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-neutral-600" placeholder="Mario Rossi" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-1 uppercase">Nome Barbershop</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-neutral-600" placeholder="Mario's Barber" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-1 uppercase">Telefono</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors placeholder-neutral-600" placeholder="+39 ..." type="tel"/>
</div>
<button className="w-full bg-[#D4AF37] hover:bg-[#b59023] text-black font-bold py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg mt-4 text-base" type="button">
                        PRENOTA ANALISI ORA →
                    </button>
<div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-white/5 text-[10px] text-neutral-500 uppercase tracking-wider">
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg> Secure</span>
<span className="flex items-center gap-1"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Privacy Protected</span>
<span>No Spam</span>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-black border-white/10 border-t pt-16 pb-8">
<div className="sm:px-6 flex flex-col md:flex-row gap-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 gap-x-8 gap-y-8 items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bot" data-icon-replaced="true" data-icon-set="lucide" data-lucide="bot" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(212, 175, 55)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="text-xl font-bold text-white tracking-tight">ARTEC <span className="font-light text-neutral-500">AI</span></span>
</div>
<div className="flex gap-8 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Contatti</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 mt-12 text-center text-xs text-neutral-600">
            © 2024 Artec AI Agency. All rights reserved. Designed for Luxury Barbershops.
        </div>
</footer>

    </>
  );
}
