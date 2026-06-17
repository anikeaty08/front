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



        // Load Bar Animation
        setTimeout(() => { document.getElementById('load-bar').style.transform = 'scaleX(1)'; }, 100);

        // Scroll Reveal (Enhanced with Stagger support via CSS)
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    const counters = entry.target.querySelectorAll('.js-counter');
                    counters.forEach(counter => {
                        if(!counter.classList.contains('counted')) {
                            const target = parseFloat(counter.getAttribute('data-target'));
                            animateValue(counter, 0, target, 2500);
                            counter.classList.add('counted');
                        }
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Counter Animation
        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                // Ease out expo
                const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                obj.innerHTML = (easeProgress * (end - start) + start).toFixed(2);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        // Wealth Matrix Logic
        const sliderInit = document.getElementById('slider-initial');
        const sliderMo = document.getElementById('slider-monthly');
        const sliderYrs = document.getElementById('slider-years');
        
        const valInit = document.getElementById('val-initial');
        const valMo = document.getElementById('val-monthly');
        const valYrs = document.getElementById('val-years');
        const valLost = document.getElementById('val-lost');
        const labelYrEnd = document.getElementById('label-year-end');
        
        const pathArea = document.getElementById('path-area');
        const pathAxiom = document.getElementById('path-axiom');
        const pathTrad = document.getElementById('path-trad');

        const formatCurrency = (num) => '$' + Math.round(num).toLocaleString('en-US');

        function updateMatrix() {
            const P = parseFloat(sliderInit.value);
            const PMT = parseFloat(sliderMo.value) * 12;
            const t = parseFloat(sliderYrs.value);
            
            valInit.innerText = formatCurrency(P);
            valMo.innerText = formatCurrency(PMT/12);
            valYrs.innerText = t + ' YRS';
            labelYrEnd.innerText = `T=${t}`;

            const rAxiom = 0.079;
            const rTrad = 0.059;

            let ptsAxiom = [];
            let ptsTrad = [];
            let maxVal = 0;

            for(let i=0; i<=t; i++) {
                const fvAxiom = P * Math.pow(1 + rAxiom, i) + PMT * ((Math.pow(1 + rAxiom, i) - 1) / rAxiom);
                const fvTrad = P * Math.pow(1 + rTrad, i) + PMT * ((Math.pow(1 + rTrad, i) - 1) / rTrad);
                ptsAxiom.push(fvAxiom);
                ptsTrad.push(fvTrad);
                if(fvAxiom > maxVal) maxVal = fvAxiom;
            }

            const lost = ptsAxiom[t] - ptsTrad[t];
            valLost.innerText = formatCurrency(lost);

            let dArea = `M0,100 `;
            let dAxiom = ``;
            let dTrad = ``;

            for(let i=0; i<=t; i++) {
                const x = (i / t) * 100;
                const yAx = 100 - ((ptsAxiom[i] / maxVal) * 100);
                const yTr = 100 - ((ptsTrad[i] / maxVal) * 100);
                
                if(i===0) {
                    dAxiom += `M${x},${yAx} `;
                    dTrad += `M${x},${yTr} `;
                } else {
                    dAxiom += `L${x},${yAx} `;
                    dTrad += `L${x},${yTr} `;
                }
                dArea += `L${x},${yAx} `;
            }

            for(let i=t; i>=0; i--) {
                const x = (i / t) * 100;
                const yTr = 100 - ((ptsTrad[i] / maxVal) * 100);
                dArea += `L${x},${yTr} `;
            }
            dArea += `Z`;

            pathAxiom.setAttribute('d', dAxiom);
            pathTrad.setAttribute('d', dTrad);
            pathArea.setAttribute('d', dArea);
        }

        sliderInit.addEventListener('input', updateMatrix);
        sliderMo.addEventListener('input', updateMatrix);
        sliderYrs.addEventListener('input', updateMatrix);
        
        updateMatrix();
    
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
      
<div className="noise-overlay"></div>

<div className="fixed top-0 left-0 w-full h-1 bg-[#CCFF00] z-50 shadow-[0_0_15px_rgba(204,255,0,0.5)] scale-x-0 origin-left transition-transform duration-1000 ease-out" id="load-bar"></div>
<div className="hidden md:flex justify-between items-center px-[clamp(1.5rem,5vw,4rem)] py-1 border-b border-[#27272A] bg-[#000] text-[#555] font-mono text-[clamp(0.6rem,0.6vw,0.7rem)] uppercase tracking-widest relative z-40">
<span className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#CCFF00] rounded-full animate-pulse"></span> SYS.STAT: OPTIMAL</span>
<span>LAT: 34.0522° N / LON: 118.2437° W</span>
<span>DATA.RATE: 1.2 TB/S</span>
</div>

<nav className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-2xl border-b border-[#27272A] px-[clamp(1.5rem,5vw,4rem)] py-[clamp(1rem,1.5vw,1.5rem)] flex justify-between items-center group/nav">
<a className="font-mono font-medium text-[clamp(1.25rem,1.5vw,1.5rem)] tracking-tighter text-[#FAFAFA] hover:text-[#CCFF00] transition-colors relative flex items-center gap-2" href="#">
<span className="opacity-0 group-hover/nav:opacity-100 transition-opacity text-[#555] text-[clamp(0.75rem,1vw,1rem)] -ml-4 absolute -left-6">&gt;</span>
            [AXIOM]
        </a>
<div className="hidden md:flex gap-[clamp(2rem,3vw,3rem)] items-center font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest text-[#555]">
<a className="hover:text-[#FAFAFA] hover:-translate-y-px transition-all duration-300" href="#thesis">/ Problem</a>
<a className="hover:text-[#FAFAFA] hover:-translate-y-px transition-all duration-300" href="#matrix">/ Calculator</a>
<a className="hover:text-[#FAFAFA] hover:-translate-y-px transition-all duration-300" href="#curriculum">/ Protocol</a>
<a className="hover:text-[#FAFAFA] hover:-translate-y-px transition-all duration-300" href="#alumni">/ Data</a>
</div>
<a className="relative px-[clamp(1.25rem,2vw,1.75rem)] py-[clamp(0.5rem,1vw,0.75rem)] text-[#CCFF00] text-[clamp(0.75rem,0.8vw,0.875rem)] font-mono font-medium uppercase tracking-widest transition-all active:scale-[0.98] group overflow-hidden border border-[#CCFF00]/30 hover:border-[#CCFF00]" href="#enroll">
<span className="absolute inset-0 bg-[#CCFF00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>
<span className="relative z-10 group-hover:text-[#050505] transition-colors duration-300">Initialize</span>
</a>
</nav>
<main className="flex-grow">

<section className="border-b border-[#27272A] relative overflow-hidden flex flex-col justify-center min-h-[90vh] pb-[clamp(4rem,8vw,6rem)]">
<div className="absolute left-[clamp(1.5rem,5vw,4rem)] top-0 bottom-0 w-px bg-gradient-to-b from-[#27272A] to-transparent pointer-events-none opacity-50 z-0"></div>
<div className="absolute right-[clamp(1.5rem,5vw,4rem)] top-0 bottom-0 w-px bg-gradient-to-b from-[#27272A] to-transparent pointer-events-none opacity-50 z-0"></div>
<div className="crosshair top-[20%] left-[10%] hidden lg:block"></div>
<div className="crosshair bottom-[30%] right-[15%] hidden lg:block"></div>
<div className="px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,12vw,10rem)] relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,4vw,4rem)] items-end">
<div className="lg:col-span-8 relative reveal z-20">
<div className="ui-corners p-[clamp(1rem,2vw,1.5rem)] -ml-[clamp(1rem,2vw,1.5rem)] mb-[clamp(1rem,2vw,1.5rem)] inline-block">
<div className="flex items-center gap-4 font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#555]">
<span className="border border-[#27272A] px-2 py-1 text-[#CCFF00]">VOL. 01</span>
<span>FINANCIAL SOVEREIGNTY</span>
<span className="hidden sm:inline">|| REVISION 4.2</span>
</div>
</div>
<h1 className="font-sans font-medium text-[clamp(4rem,8vw,8rem)] leading-[0.9] tracking-tighter text-[#FAFAFA] mb-[clamp(2rem,3vw,3rem)] uppercase group cursor-default">
                        Wall Street <br/>
<span className="relative inline-block text-[#333] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#CCFF00] group-hover:to-[#FAFAFA] transition-all duration-700">
                            Destroys
                            <div className="absolute inset-0 bg-[#CCFF00] mix-blend-difference scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 pointer-events-none"></div>
</span> <br/>
                        Your Wealth.
                    </h1>
<div className="flex flex-col md:flex-row gap-[clamp(2rem,4vw,4rem)] items-start md:items-center">
<p className="text-[clamp(1.125rem,1.5vw,1.5rem)] text-[#A1A1AA] max-w-xl font-light leading-[1.5] border-l border-[#CCFF00]/30 pl-[clamp(1rem,2vw,1.5rem)]">
                            Stop paying millions in hidden fees for guesswork. We provide the structural blueprint to automate your portfolio with absolute mathematical certainty.
                        </p>
</div>
<div className="mt-[clamp(3rem,5vw,4rem)] flex flex-wrap gap-[clamp(1rem,2vw,1.5rem)] items-center">
<a className="hover-target-arrow group px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(1rem,1.5vw,1.25rem)] bg-[#CCFF00] text-[#050505] font-mono font-medium text-[clamp(0.875rem,1vw,1rem)] uppercase tracking-widest transition-all flex items-center gap-3 relative overflow-hidden" href="#enroll">
<span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[scan_1s_ease-in-out]"></span>
                            Execute Protocol
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] text-[#555] flex flex-col gap-1 uppercase tracking-widest">
<span>Avg. Rescue: $485k</span>
<span>Time Req: 2hr/yr</span>
</div>
</div>
</div>
<div className="lg:col-span-4 relative reveal delay-1">
<div className="border border-[#27272A] bg-[#0A0A0A] p-[clamp(2rem,3vw,3rem)] relative data-reveal-bg hover-lift">
<div className="scanline"></div>
<div className="absolute top-0 right-0 p-3 font-mono text-[clamp(0.6rem,0.6vw,0.7rem)] text-[#555] border-b border-l border-[#27272A]">DATA.STREAM</div>
<p className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#A1A1AA] mb-4 pb-2 border-b border-[#27272A]">Capital Extracted via Members</p>
<div className="font-mono text-[clamp(3.5rem,4.5vw,5rem)] text-[#FAFAFA] tracking-tighter mb-2 leading-none flex items-start gap-1">
<span className="text-[#CCFF00] text-[clamp(1.5rem,2vw,2rem)] mt-2">$</span>
<span className="js-counter" data-target="140.75">0.00</span>
<span className="text-[clamp(1.5rem,2vw,2rem)] text-[#555] mt-auto mb-2">M</span>
</div>
<div className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] text-[#555] leading-[1.6] uppercase pt-4 flex gap-2 items-start mt-4 bg-[#050505] p-3 border border-[#27272A]">
<span className="text-[#CCFF00] animate-pulse">●</span>
                            Funds permanently secured from advisory drain. Compound interest re-routed to user structure.
                        </div>
</div>
</div>
</div>
</section>

<section className="border-b border-[#27272A] overflow-hidden bg-[#CCFF00] py-[clamp(0.75rem,1vw,1rem)] relative z-20 shadow-[0_10px_30px_-15px_rgba(204,255,0,0.2)]">
<div className="marquee-content font-mono font-medium text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#050505] flex items-center">
<div className="flex items-center whitespace-nowrap px-4">
<span>// PROTOCOL BACKED BY DATA FROM:</span>
<span className="mx-8 opacity-50">||</span>
<span>THE WALL STREET JOURNAL</span>
<span className="mx-8 opacity-50">||</span>
<span>FINANCIAL TIMES</span>
<span className="mx-8 opacity-50">||</span>
<span>BLOOMBERG TERMINAL</span>
<span className="mx-8 opacity-50">||</span>
<span>BARRON'S</span>
<span className="mx-8 opacity-50">||</span>
</div>
<div className="flex items-center whitespace-nowrap px-4">
<span>// PROTOCOL BACKED BY DATA FROM:</span>
<span className="mx-8 opacity-50">||</span>
<span>THE WALL STREET JOURNAL</span>
<span className="mx-8 opacity-50">||</span>
<span>FINANCIAL TIMES</span>
<span className="mx-8 opacity-50">||</span>
<span>BLOOMBERG TERMINAL</span>
<span className="mx-8 opacity-50">||</span>
<span>BARRON'S</span>
<span className="mx-8 opacity-50">||</span>
</div>
</div>
</section>

<section className="px-[clamp(1.5rem,5vw,4rem)] py-[clamp(5rem,10vw,10rem)] border-b border-[#27272A] relative" id="thesis">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_right_center,rgba(204,255,0,0.02)_0%,transparent_50%)] pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(1.5rem,2vw,2rem)]">

<div className="md:col-span-12 lg:col-span-7 p-[clamp(2rem,4vw,4rem)] border border-[#27272A] flex flex-col justify-between relative overflow-hidden group hover-lift bg-[#0A0A0A] reveal">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#27272A] to-transparent opacity-20 pointer-events-none"></div>
<div>
<div className="flex justify-between items-start mb-[clamp(3rem,5vw,4rem)]">
<span className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#CCFF00] flex items-center gap-2">
<iconify-icon icon="solar:target-linear"></iconify-icon> 01 // THE 2% ILLUSION
                            </span>
<span className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] text-[#555] uppercase tracking-widest border border-[#27272A] px-2 py-1">Critical Fault</span>
</div>
<h2 className="font-sans font-medium text-[clamp(3rem,4.5vw,5rem)] tracking-tighter text-[#FAFAFA] mb-[clamp(1.5rem,3vw,2rem)] leading-[0.95] uppercase">
                            The Fee <br/>Destroying<br/> Your Future.
                        </h2>
</div>
<div className="border-t border-[#27272A] pt-6 relative z-10">
<p className="text-[clamp(1.125rem,1.2vw,1.25rem)] text-[#A1A1AA] leading-[1.6] max-w-[45ch] font-light">
                            The financial industry engineers complexity solely to justify exorbitant fees. They sell the fiction of 'active management'—a mathematically flawed system designed to siphon your capital.
                        </p>
</div>
</div>

<div className="md:col-span-12 lg:col-span-5 grid grid-rows-2 gap-[clamp(1.5rem,2vw,2rem)]">
<div className="bg-[#050505] border border-[#27272A] p-[clamp(2rem,3vw,3rem)] relative flex flex-col justify-center hover-lift reveal delay-1 ui-corners">
<div className="absolute top-4 right-4 font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555]">RISK_ALLOCATION</div>
<p className="font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest text-[#A1A1AA] mb-4 flex items-center gap-2">
<iconify-icon className="text-[#555] text-lg" icon="solar:user-broken"></iconify-icon> Who takes the risk?
                        </p>
<div className="font-mono text-[clamp(4rem,5vw,6rem)] text-[#FAFAFA] tracking-tighter leading-none mb-2">100<span className="text-[#555] text-[clamp(2rem,3vw,3rem)]">%</span></div>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#555] mt-auto pt-4 border-t border-[#27272A]">Risk assumed entirely by you.</p>
</div>
<div className="bg-[#0A0A0A] border border-[#FF3333]/20 relative flex flex-col justify-center hover-lift reveal delay-2 overflow-hidden group">
<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,51,51,0.02)_10px,rgba(255,51,51,0.02)_20px)]"></div>
<div className="p-[clamp(2rem,3vw,3rem)] relative z-10 h-full flex flex-col">
<div className="absolute top-4 right-4 font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#FF3333]">FEE_EXTRACTION</div>
<p className="font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest text-[#A1A1AA] mb-4 flex items-center gap-2">
<iconify-icon className="text-[#FF3333] text-lg" icon="solar:hand-money-linear"></iconify-icon> Who takes the reward?
                            </p>
<div className="font-mono text-[clamp(4rem,5vw,6rem)] text-[#FF3333] tracking-tighter leading-none mb-2 group-hover:scale-105 transition-transform origin-left">40<span className="text-[#555] text-[clamp(2rem,3vw,3rem)]">%</span></div>
<p className="text-[clamp(0.875rem,0.9vw,1rem)] text-[#A1A1AA] mt-auto pt-4 border-t border-[#FF3333]/20">Of lifetime returns cannibalized by standard 2% fees.</p>
</div>
</div>
</div>

<div className="md:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-[clamp(1.5rem,2vw,2rem)] mt-[clamp(1rem,2vw,2rem)] reveal delay-3">
<div className="p-[clamp(1.5rem,2vw,2rem)] bg-[#050505] border border-[#27272A] hover-lift group relative data-reveal-bg flex flex-col h-full">
<div className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#555] flex justify-between mb-8 border-b border-[#27272A] pb-2">
<span>MOD.01</span><span>SIMPLICITY</span>
</div>
<iconify-icon className="text-[#CCFF00] mb-6 group-hover:rotate-12 transition-transform" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h3 className="font-mono text-[clamp(1.1rem,1.2vw,1.25rem)] text-[#FAFAFA] mb-4 uppercase tracking-widest">Mechanics</h3>
<p className="text-[clamp(0.875rem,0.9vw,0.95rem)] text-[#A1A1AA] leading-[1.6] font-light mt-auto">
                            Exact, repeatable mechanics to manage a 7-figure portfolio with less than 2 hours of active management per year.
                        </p>
</div>
<div className="p-[clamp(1.5rem,2vw,2rem)] bg-[#050505] border border-[#27272A] hover-lift group relative data-reveal-bg flex flex-col h-full">
<div className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#555] flex justify-between mb-8 border-b border-[#27272A] pb-2">
<span>MOD.02</span><span>CLARITY</span>
</div>
<iconify-icon className="text-[#CCFF00] mb-6 group-hover:scale-110 transition-transform" icon="solar:chart-square-linear" width="32"></iconify-icon>
<h3 className="font-mono text-[clamp(1.1rem,1.2vw,1.25rem)] text-[#FAFAFA] mb-4 uppercase tracking-widest">Indexing</h3>
<p className="text-[clamp(0.875rem,0.9vw,0.95rem)] text-[#A1A1AA] leading-[1.6] font-light mt-auto">
                            Replace advisors with proven quantitative rules. Execute the exact asset allocation models used by elite institutions.
                        </p>
</div>
<div className="p-[clamp(1.5rem,2vw,2rem)] bg-[#050505] border border-[#27272A] hover-lift group relative data-reveal-bg flex flex-col h-full">
<div className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#555] flex justify-between mb-8 border-b border-[#27272A] pb-2">
<span>MOD.03</span><span>CONTROL</span>
</div>
<iconify-icon className="text-[#CCFF00] mb-6 group-hover:-translate-y-1 transition-transform" icon="solar:key-minimalistic-linear" width="32"></iconify-icon>
<h3 className="font-mono text-[clamp(1.1rem,1.2vw,1.25rem)] text-[#FAFAFA] mb-4 uppercase tracking-widest">Sovereignty</h3>
<p className="text-[clamp(0.875rem,0.9vw,0.95rem)] text-[#A1A1AA] leading-[1.6] font-light mt-auto">
                            Stop funding someone else's firm. Recapture your compound interest and engineer absolute financial independence.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vw,10rem)] border-b border-[#27272A] relative bg-[#050505] overflow-hidden">
<div className="absolute right-0 top-1/2 -translate-y-1/2 text-[15vw] font-mono font-medium text-[#111] leading-none pointer-events-none tracking-tighter mix-blend-color-dodge">
                DATA
            </div>
<div className="px-[clamp(1.5rem,5vw,4rem)] mb-[clamp(3rem,5vw,4rem)] max-w-5xl relative z-10 reveal">
<div className="flex items-center gap-4 mb-6">
<span className="w-12 h-px bg-[#CCFF00]"></span>
<span className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#CCFF00]">02 // COST ANALYSIS TERMINAL</span>
</div>
<h2 className="font-sans font-medium text-[clamp(3rem,5vw,5rem)] tracking-tighter text-[#FAFAFA] leading-[1] uppercase">Ignorance costs <br/> half your net worth.</h2>
</div>
<div className="w-full overflow-x-auto px-[clamp(1.5rem,5vw,4rem)] pb-8 reveal delay-1 relative z-10">
<div className="min-w-[900px] border border-[#27272A] font-mono bg-[#0A0A0A] ui-corners shadow-2xl">

<div className="flex items-center gap-2 px-4 py-2 border-b border-[#27272A] bg-[#050505]">
<div className="w-3 h-3 rounded-full border border-[#555]"></div>
<div className="w-3 h-3 rounded-full border border-[#555]"></div>
<div className="w-3 h-3 rounded-full border border-[#CCFF00] bg-[#CCFF00]/20"></div>
<span className="text-[#555] text-[clamp(0.6rem,0.65vw,0.7rem)] ml-4">root@axiom-matrix:~# ./compare_structures</span>
</div>

<div className="grid grid-cols-4 border-b border-[#27272A] bg-[#050505]">
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#555] border-r border-[#27272A]">Variable</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#A1A1AA] border-r border-[#27272A] flex items-center gap-2"><iconify-icon icon="solar:ghost-linear"></iconify-icon> DIY Default</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#A1A1AA] border-r border-[#27272A] flex items-center gap-2"><iconify-icon icon="solar:buildings-linear"></iconify-icon> Trad. Advisor</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#050505] bg-[#CCFF00] flex items-center gap-2"><iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Axiom Protocol</div>
</div>

<div className="grid grid-cols-4 border-b border-[#27272A] hover:bg-[#111] transition-colors group">
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,0.9vw,1rem)] text-[#FAFAFA] border-r border-[#27272A] flex items-center gap-4">
<span className="text-[#555] text-xs opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> Mgmt_Fee_Ann
                        </div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,1vw,1rem)] text-[#A1A1AA] border-r border-[#27272A]">0.00%</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,1vw,1rem)] text-[#A1A1AA] border-r border-[#27272A]">1.00% - 2.00%</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,1vw,1rem)] text-[#CCFF00] bg-[#CCFF00]/5 border-l border-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">0.00%</div>
</div>
<div className="grid grid-cols-4 border-b border-[#27272A] hover:bg-[#111] transition-colors group">
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,0.9vw,1rem)] text-[#FAFAFA] border-r border-[#27272A] flex items-center gap-4">
<span className="text-[#555] text-xs opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> Fund_Exp_Ratio
                        </div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,1vw,1rem)] text-[#A1A1AA] border-r border-[#27272A]">~0.50%</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,1vw,1rem)] text-[#A1A1AA] border-r border-[#27272A]">0.75% - 1.50%</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,1vw,1rem)] text-[#CCFF00] bg-[#CCFF00]/5 border-l border-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">0.03% - 0.05%</div>
</div>
<div className="grid grid-cols-4 border-b border-[#27272A] hover:bg-[#111] transition-colors group">
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,0.9vw,1rem)] text-[#FAFAFA] border-r border-[#27272A] flex items-center gap-4">
<span className="text-[#555] text-xs opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> Tax_Efficiency
                        </div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,1vw,1rem)] text-[#A1A1AA] border-r border-[#27272A]">Unstructured</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,1vw,1rem)] text-[#A1A1AA] border-r border-[#27272A]">Standard</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(0.875rem,1vw,1rem)] text-[#CCFF00] bg-[#CCFF00]/5 border-l border-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">Max_Shield</div>
</div>
<div className="grid grid-cols-4 hover:bg-[#1A1A1A] transition-colors group bg-[#0A0A0A]">
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(1rem,1.1vw,1.125rem)] text-[#FAFAFA] border-r border-[#27272A] font-medium flex items-center gap-4">
<span className="text-[#FF3333] text-xs opacity-0 group-hover:opacity-100 transition-opacity animate-pulse">&gt;</span> 30YR_LOSS_PROJ
                        </div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(1rem,1.1vw,1.125rem)] text-[#A1A1AA] border-r border-[#27272A]">$142,000</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(1rem,1.1vw,1.125rem)] text-[#FF3333] border-r border-[#27272A] font-medium">$485,000+</div>
<div className="p-[clamp(1.25rem,2vw,1.5rem)] text-[clamp(1rem,1.1vw,1.125rem)] text-[#050505] bg-[#CCFF00] group-hover:bg-white transition-colors flex items-center justify-between">
<span>&lt; $15,000</span>
<span className="text-[clamp(0.6rem,0.65vw,0.7rem)] border border-[#050505] px-1 bg-transparent hidden sm:inline-block">OPTIMAL</span>
</div>
</div>
</div>
</div>
<div className="px-[clamp(1.5rem,5vw,4rem)] mt-4 reveal delay-2">
<p className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#555] uppercase border-l-2 border-[#555] pl-3">
                    *SYS.NOTE: Base params: $100k init, $1k/mo contrib, 8% gross return over 360 months.
                </p>
</div>
</section>

<section className="px-[clamp(1.5rem,5vw,4rem)] py-[clamp(5rem,10vw,10rem)] border-b border-[#27272A] relative bg-[#0A0A0A]" id="matrix">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(3rem,5vw,6rem)]">

<div className="lg:col-span-5 flex flex-col gap-[clamp(2rem,3vw,3rem)] reveal">
<div>
<div className="flex items-center gap-4 mb-4">
<span className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#CCFF00] bg-[#CCFF00]/10 px-2 py-1 border border-[#CCFF00]/20">03 // SIMULATOR</span>
</div>
<h2 className="font-sans font-medium text-[clamp(3rem,3.5vw,4rem)] tracking-tighter mb-4 leading-[1] text-[#FAFAFA] uppercase">Calculate<br/>The Bleed.</h2>
<p className="text-[clamp(1rem,1.1vw,1.125rem)] text-[#A1A1AA] font-light leading-[1.6]">Input your parameters to reveal the exact volume of capital extracted by standard advisory fees.</p>
</div>
<div className="space-y-[clamp(2.5rem,3vw,3rem)] border border-[#27272A] p-[clamp(1.5rem,2vw,2.5rem)] bg-[#050505] ui-corners">

<div className="space-y-6 relative group">
<div className="flex justify-between font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest border-b border-[#27272A] pb-2">
<span className="text-[#555] flex items-center gap-2"><iconify-icon icon="solar:wallet-linear"></iconify-icon> Initial_Cap</span>
<span className="text-[#FAFAFA] text-lg transition-colors group-hover:text-[#CCFF00]" id="val-initial">$100,000</span>
</div>
<div className="relative">
<input id="slider-initial" max="1000000" min="10000" step="10000" type="range" value="100000"/>
<div className="absolute w-full flex justify-between top-4 px-1 pointer-events-none opacity-30">
<div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div>
</div>
</div>
</div>

<div className="space-y-6 relative group">
<div className="flex justify-between font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest border-b border-[#27272A] pb-2">
<span className="text-[#555] flex items-center gap-2"><iconify-icon icon="solar:round-transfer-horizontal-linear"></iconify-icon> Mo_Contrib</span>
<span className="text-[#FAFAFA] text-lg transition-colors group-hover:text-[#CCFF00]" id="val-monthly">$1,000</span>
</div>
<div className="relative">
<input id="slider-monthly" max="10000" min="0" step="100" type="range" value="1000"/>
<div className="absolute w-full flex justify-between top-4 px-1 pointer-events-none opacity-30">
<div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div>
</div>
</div>
</div>

<div className="space-y-6 relative group">
<div className="flex justify-between font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest border-b border-[#27272A] pb-2">
<span className="text-[#555] flex items-center gap-2"><iconify-icon icon="solar:history-linear"></iconify-icon> Time_Horizon</span>
<span className="text-[#FAFAFA] text-lg transition-colors group-hover:text-[#CCFF00]" id="val-years">30 YRS</span>
</div>
<div className="relative">
<input id="slider-years" max="50" min="10" step="1" type="range" value="30"/>
<div className="absolute w-full flex justify-between top-4 px-1 pointer-events-none opacity-30">
<div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div><div className="h-1 w-[1px] bg-[#FAFAFA]"></div>
</div>
</div>
</div>
</div>
<div className="bg-[#050505] p-[clamp(1.5rem,2vw,2rem)] border border-[#FF3333]/30 border-l-4 border-l-[#FF3333] hover:bg-[#111] transition-colors group relative overflow-hidden">
<div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#FF3333]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"></div>
<p className="font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest text-[#555] mb-2">Total Wealth Stolen</p>
<div className="font-mono text-[clamp(2.5rem,3.5vw,4rem)] text-[#FF3333] tracking-tighter leading-none" id="val-lost">$0</div>
<p className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] uppercase mt-2 group-hover:text-[#FF3333]/70 transition-colors">&gt; Diverted to advisory firm</p>
</div>
</div>

<div className="lg:col-span-7 bg-[#050505] border border-[#27272A] p-[clamp(1.5rem,3vw,3rem)] relative h-[500px] lg:h-auto flex flex-col reveal delay-1 ui-corners group">

<div className="flex justify-between font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest mb-8 border-b border-[#27272A] pb-4">
<span className="flex items-center gap-3 text-[#FAFAFA]">
<span className="w-2 h-2 bg-[#CCFF00] animate-pulse"></span> Axiom Trajectory
                        </span>
<span className="flex items-center gap-3 text-[#555]">
<span className="w-2 h-2 bg-transparent border border-[#555]"></span> Std_Advisor
                        </span>
</div>

<div className="absolute inset-0 top-[6rem] bottom-[4rem] left-[clamp(1.5rem,3vw,3rem)] right-[clamp(1.5rem,3vw,3rem)] pointer-events-none flex flex-col justify-between opacity-20">
<div className="w-full border-t border-dashed border-[#555] relative"><span className="absolute -left-8 top-[-0.5rem] text-[0.5rem] font-mono text-[#555]">100%</span></div>
<div className="w-full border-t border-dashed border-[#555] relative"><span className="absolute -left-8 top-[-0.5rem] text-[0.5rem] font-mono text-[#555]">75%</span></div>
<div className="w-full border-t border-dashed border-[#555] relative"><span className="absolute -left-8 top-[-0.5rem] text-[0.5rem] font-mono text-[#555]">50%</span></div>
<div className="w-full border-t border-dashed border-[#555] relative"><span className="absolute -left-8 top-[-0.5rem] text-[0.5rem] font-mono text-[#555]">25%</span></div>
<div className="w-full border-t border-dashed border-[#555] relative"><span className="absolute -left-8 top-[-0.5rem] text-[0.5rem] font-mono text-[#555]">0%</span></div>

<div className="absolute top-0 bottom-0 left-[25%] border-l border-[#27272A]"></div>
<div className="absolute top-0 bottom-0 left-[50%] border-l border-[#27272A]"></div>
<div className="absolute top-0 bottom-0 left-[75%] border-l border-[#27272A]"></div>
</div>

<div className="flex-grow relative w-full h-full overflow-hidden" id="chart-container">
<svg className="w-full h-full absolute inset-0 overflow-visible drop-shadow-[0_0_10px_rgba(204,255,0,0.3)]" id="projection-svg" preserveaspectratio="none" viewbox="0 0 100 100">

<path d="M0,100 L100,100 Z" fill="url(#grad-loss)" id="path-area"></path>
<defs>
<lineargradient id="grad-loss" x1="0" x2="0" y1="1" y2="0">
<stop offset="0%" stop-color="#FF3333" stop-opacity="0.05"></stop>
<stop offset="100%" stop-color="#FF3333" stop-opacity="0.2"></stop>
</lineargradient>
</defs>

<path d="M0,100 L100,0" fill="none" id="path-axiom" stroke="#CCFF00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,100 L100,50" fill="none" id="path-trad" stroke="#555555" stroke-dasharray="4,4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>

<div className="flex justify-between font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] mt-6 uppercase border-t border-[#27272A] pt-4">
<span>T=0 (Init)</span>
<span className="text-[#FAFAFA] bg-[#27272A] px-2 py-1" id="label-year-end">T=30</span>
</div>
</div>
</div>
</section>

<section className="px-[clamp(1.5rem,5vw,4rem)] py-[clamp(5rem,10vw,10rem)] border-b border-[#27272A] relative bg-[#050505]" id="curriculum">
<div className="max-w-4xl mb-[clamp(4rem,6vw,6rem)] reveal">
<div className="flex items-center gap-4 mb-6">
<span className="w-12 h-px bg-[#CCFF00]"></span>
<span className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#CCFF00]">04 // SYSTEM ARCHITECTURE</span>
</div>
<h2 className="font-sans font-medium text-[clamp(3rem,4.5vw,5rem)] tracking-tighter text-[#FAFAFA] leading-[1] uppercase">Four steps to <br/>Sovereignty.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(1.5rem,2vw,2rem)]">

<article className="md:col-span-12 lg:col-span-7 group relative border border-[#27272A] bg-[#0A0A0A] p-[clamp(2rem,4vw,4rem)] hover-lift reveal">
<div className="absolute top-0 right-0 p-4 font-mono text-[clamp(4rem,8vw,10rem)] text-[#111] group-hover:text-[#CCFF00]/10 transition-colors leading-[0.8] pointer-events-none tracking-tighter select-none">01</div>
<div className="absolute bottom-4 right-4 crosshair"></div>
<span className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] border border-[#27272A] px-2 py-1 text-[#555] mb-6 inline-block uppercase tracking-widest bg-[#050505]">Phase_One</span>
<h3 className="font-sans font-medium text-[clamp(2rem,3vw,3.5rem)] text-[#FAFAFA] mb-8 uppercase tracking-tighter relative z-10 leading-[1.1]">Audit &amp; <br/>Eradicate.</h3>
<ul className="space-y-6 text-[clamp(0.95rem,1vw,1.1rem)] text-[#A1A1AA] font-light relative z-10 border-l border-[#27272A] pl-6 ml-2">
<li className="relative"><span className="absolute -left-[1.95rem] top-1.5 w-2 h-2 bg-[#CCFF00]"></span> Realize 'beating the market' is a statistical myth designed to sell mutual funds.</li>
<li className="relative"><span className="absolute -left-[1.95rem] top-1.5 w-2 h-2 bg-[#CCFF00]"></span> Audit current accounts to expose every hidden basis point draining the balance.</li>
<li className="relative"><span className="absolute -left-[1.95rem] top-1.5 w-2 h-2 bg-[#CCFF00]"></span> Erase emotional biases causing sub-optimal buy/sell execution.</li>
</ul>
</article>

<article className="md:col-span-12 lg:col-span-5 group relative border border-[#27272A] bg-[#0A0A0A] p-[clamp(2rem,4vw,4rem)] hover-lift reveal delay-1">
<div className="absolute top-0 right-0 p-4 font-mono text-[clamp(4rem,6vw,8rem)] text-[#111] group-hover:text-[#CCFF00]/10 transition-colors leading-[0.8] pointer-events-none tracking-tighter select-none">02</div>
<span className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] border border-[#27272A] px-2 py-1 text-[#555] mb-6 inline-block uppercase tracking-widest bg-[#050505]">Phase_Two</span>
<h3 className="font-sans font-medium text-[clamp(1.5rem,2vw,2.5rem)] text-[#FAFAFA] mb-8 uppercase tracking-tighter relative z-10 leading-[1.1]">Structure <br/>Assembly.</h3>
<ul className="space-y-4 text-[clamp(0.875rem,0.9vw,1rem)] text-[#A1A1AA] font-light relative z-10">
<li className="flex items-start gap-3"><iconify-icon className="text-[#555] mt-1 shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon> Implement the elegant, 3-fund strategy.</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#555] mt-1 shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon> Capture total market growth automatically.</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#555] mt-1 shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon> Engineer unbreakable fixed-income buffers.</li>
</ul>
</article>

<article className="md:col-span-12 lg:col-span-5 group relative border border-[#27272A] bg-[#0A0A0A] p-[clamp(2rem,4vw,4rem)] hover-lift reveal">
<div className="absolute top-0 right-0 p-4 font-mono text-[clamp(4rem,6vw,8rem)] text-[#111] group-hover:text-[#CCFF00]/10 transition-colors leading-[0.8] pointer-events-none tracking-tighter select-none">03</div>
<span className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] border border-[#27272A] px-2 py-1 text-[#555] mb-6 inline-block uppercase tracking-widest bg-[#050505]">Phase_Three</span>
<h3 className="font-sans font-medium text-[clamp(1.5rem,2vw,2.5rem)] text-[#FAFAFA] mb-8 uppercase tracking-tighter relative z-10 leading-[1.1]">Tax <br/>Shielding.</h3>
<ul className="space-y-4 text-[clamp(0.875rem,0.9vw,1rem)] text-[#A1A1AA] font-light relative z-10">
<li className="flex items-start gap-3"><iconify-icon className="text-[#555] mt-1 shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon> Optimize asset location to zero taxes.</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#555] mt-1 shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon> Harvest losses during market downturns.</li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#555] mt-1 shrink-0" icon="solar:alt-arrow-right-linear"></iconify-icon> Execute Backdoor Roth maneuvers.</li>
</ul>
</article>

<article className="md:col-span-12 lg:col-span-7 group relative border border-[#CCFF00]/30 bg-[#0A0A0A] p-[clamp(2rem,4vw,4rem)] hover-lift reveal delay-1 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#CCFF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-0 right-0 p-4 font-mono text-[clamp(4rem,8vw,10rem)] text-[#111] group-hover:text-[#CCFF00]/20 transition-colors leading-[0.8] pointer-events-none tracking-tighter select-none">04</div>
<div className="absolute top-0 left-0 w-full h-1 bg-[#CCFF00]"></div>
<span className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] border border-[#CCFF00]/30 text-[#CCFF00] px-2 py-1 mb-6 inline-block uppercase tracking-widest bg-[#CCFF00]/5">Final_Phase</span>
<h3 className="font-sans font-medium text-[clamp(2rem,3vw,3.5rem)] text-[#FAFAFA] mb-8 uppercase tracking-tighter relative z-10 leading-[1.1]">Full <br/>Autopilot.</h3>
<ul className="space-y-6 text-[clamp(0.95rem,1vw,1.1rem)] text-[#A1A1AA] font-light relative z-10 border-l border-[#CCFF00]/30 pl-6 ml-2">
<li className="relative"><span className="absolute -left-[1.95rem] top-1.5 w-2 h-2 bg-[#CCFF00]"></span> Transfer funds seamlessly without triggering massive tax events.</li>
<li className="relative"><span className="absolute -left-[1.95rem] top-1.5 w-2 h-2 bg-[#CCFF00]"></span> Automate deposits so human intervention is removed from investing.</li>
<li className="relative"><span className="absolute -left-[1.95rem] top-1.5 w-2 h-2 bg-[#CCFF00]"></span> Execute the 15-minute annual rebalancing protocol. Done.</li>
</ul>
</article>
</div>
</section>

<section className="py-[clamp(5rem,10vw,10rem)] border-b border-[#27272A] bg-[#0A0A0A] relative" id="alumni">
<div className="absolute top-0 left-[20%] w-px h-full bg-[#27272A] opacity-30 pointer-events-none hidden lg:block"></div>
<div className="absolute top-0 left-[80%] w-px h-full bg-[#27272A] opacity-30 pointer-events-none hidden lg:block"></div>
<div className="px-[clamp(1.5rem,5vw,4rem)] mb-[clamp(4rem,6vw,6rem)] reveal">
<div className="flex items-center gap-4 mb-6">
<span className="w-12 h-px bg-[#CCFF00]"></span>
<span className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#CCFF00]">05 // DATA_LOGS</span>
</div>
<h2 className="font-sans font-medium text-[clamp(3rem,4.5vw,5rem)] tracking-tighter text-[#FAFAFA] leading-[1] uppercase">Verified <br/>Extractions.</h2>
</div>

<div className="px-[clamp(1.5rem,5vw,4rem)] grid grid-cols-1 md:grid-cols-12 gap-[clamp(1.5rem,2vw,2rem)] max-w-7xl mx-auto">

<div className="md:col-span-12 lg:col-span-7 border border-[#27272A] bg-[#050505] ui-corners hover-lift reveal flex flex-col group relative overflow-hidden">
<div className="absolute -right-10 -top-10 text-[10rem] text-[#111] font-mono leading-none tracking-tighter group-hover:text-[#222] transition-colors pointer-events-none">F.01</div>
<div className="p-[clamp(1.5rem,2vw,2.5rem)] border-b border-[#27272A] flex justify-between items-center bg-[#0A0A0A]">
<div className="flex items-center gap-4">
<span className="w-8 h-8 rounded-full bg-[#111] border border-[#27272A] flex items-center justify-center font-mono text-xs text-[#555]">M.T.</span>
<span className="font-mono text-[clamp(0.85rem,0.9vw,1rem)] text-[#FAFAFA] uppercase tracking-widest">Marcus T.</span>
</div>
<span className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#050505] bg-[#CCFF00] px-2 py-1 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:shield-check-bold"></iconify-icon> Verified_Node
                        </span>
</div>
<div className="p-[clamp(2rem,3vw,3.5rem)] flex-grow relative z-10">
<p className="text-[clamp(1.125rem,1.2vw,1.3rem)] text-[#A1A1AA] leading-[1.6] font-light italic">
                            "I realized I was paying $9,000 a year for someone to simply put my money in underperforming mutual funds. Axiom gave me the exact structural steps to move my money and automate it myself in 4 hours. The clarity is brutal, in the best way."
                        </p>
</div>
<div className="grid grid-cols-3 border-t border-[#27272A] bg-[#0A0A0A]">
<div className="p-4 border-r border-[#27272A]">
<p className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] uppercase mb-1">Extracted_Cap</p>
<p className="font-mono text-[clamp(1rem,1.1vw,1.25rem)] text-[#CCFF00] tracking-tighter">$450k</p>
</div>
<div className="p-4 border-r border-[#27272A]">
<p className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] uppercase mb-1">Time_Req</p>
<p className="font-mono text-[clamp(1rem,1.1vw,1.25rem)] text-[#FAFAFA] tracking-tighter">4 Hours</p>
</div>
<div className="p-4">
<p className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] uppercase mb-1">Prev_System</p>
<p className="font-mono text-[clamp(0.85rem,0.9vw,1rem)] text-[#A1A1AA] tracking-tighter truncate">Edward Jones</p>
</div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-5 border border-[#27272A] bg-[#050505] ui-corners hover-lift reveal delay-1 flex flex-col group relative overflow-hidden lg:mt-12">
<div className="absolute -right-4 -top-4 text-[6rem] text-[#111] font-mono leading-none tracking-tighter group-hover:text-[#222] transition-colors pointer-events-none">F.02</div>
<div className="p-[clamp(1.25rem,1.5vw,2rem)] border-b border-[#27272A] flex justify-between items-center bg-[#0A0A0A]">
<span className="font-mono text-[clamp(0.85rem,0.9vw,1rem)] text-[#FAFAFA] uppercase tracking-widest">Dr. Sarah L.</span>
<iconify-icon className="text-[#CCFF00]" icon="solar:shield-check-bold"></iconify-icon>
</div>
<div className="p-[clamp(1.5rem,2vw,2.5rem)] flex-grow relative z-10">
<p className="text-[clamp(1rem,1.1vw,1.125rem)] text-[#A1A1AA] leading-[1.6] font-light italic">
                            "The section on tax optimization alone paid for this 50 times over. I had no idea how much drag my advisor's active trading was creating in taxable accounts. Pure, cold math."
                        </p>
</div>
<div className="grid grid-cols-2 border-t border-[#27272A] bg-[#0A0A0A]">
<div className="p-4 border-r border-[#27272A]">
<p className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] uppercase mb-1">Extracted_Cap</p>
<p className="font-mono text-[clamp(1rem,1.1vw,1.25rem)] text-[#CCFF00] tracking-tighter">$1.2M</p>
</div>
<div className="p-4">
<p className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] uppercase mb-1">Prev_System</p>
<p className="font-mono text-[clamp(0.85rem,0.9vw,1rem)] text-[#A1A1AA] tracking-tighter truncate">Morgan Stanley</p>
</div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-5 border border-[#27272A] bg-[#050505] ui-corners hover-lift reveal delay-2 flex flex-col group relative overflow-hidden lg:-mt-12">
<div className="absolute -right-4 -top-4 text-[6rem] text-[#111] font-mono leading-none tracking-tighter group-hover:text-[#222] transition-colors pointer-events-none">F.03</div>
<div className="p-[clamp(1.25rem,1.5vw,2rem)] border-b border-[#27272A] flex justify-between items-center bg-[#0A0A0A]">
<span className="font-mono text-[clamp(0.85rem,0.9vw,1rem)] text-[#FAFAFA] uppercase tracking-widest">David K.</span>
<iconify-icon className="text-[#CCFF00]" icon="solar:shield-check-bold"></iconify-icon>
</div>
<div className="p-[clamp(1.5rem,2vw,2.5rem)] flex-grow relative z-10">
<p className="text-[clamp(1rem,1.1vw,1.125rem)] text-[#A1A1AA] leading-[1.6] font-light italic">
                            "Finance always intimidated us. Axiom strips away all the jargon. We now run the portfolio ourselves, knowing exactly what every single dollar is doing within the architecture."
                        </p>
</div>
<div className="grid grid-cols-2 border-t border-[#27272A] bg-[#0A0A0A]">
<div className="p-4 border-r border-[#27272A]">
<p className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] uppercase mb-1">Extracted_Cap</p>
<p className="font-mono text-[clamp(1rem,1.1vw,1.25rem)] text-[#CCFF00] tracking-tighter">$800k</p>
</div>
<div className="p-4">
<p className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] uppercase mb-1">Prev_System</p>
<p className="font-mono text-[clamp(0.85rem,0.9vw,1rem)] text-[#A1A1AA] tracking-tighter truncate">Fisher Inv.</p>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-7"></div>
</div>
</section>

<section className="border-b border-[#27272A] grid grid-cols-1 lg:grid-cols-2 bg-[#050505] relative">
<div className="absolute inset-0 bg-grid pointer-events-none opacity-50"></div>
<div className="h-[50vh] lg:h-auto border-b lg:border-b-0 lg:border-r border-[#27272A] relative overflow-hidden flex items-center justify-center p-[clamp(2rem,4vw,4rem)] group reveal z-10">

<div className="absolute top-4 left-4 font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] flex flex-col gap-1">
<span>ID: ARCHITECT_001</span>
<span>STAT: OFFLINE_MODE</span>
</div>
<div className="absolute inset-0 bg-[#CCFF00] mix-blend-overlay opacity-0 group-hover:opacity-[0.05] transition-opacity duration-1000"></div>
<svg className="w-full max-w-sm h-auto text-[#27272A] group-hover:text-[#444] transition-colors duration-1000 relative z-10" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 200 200">

<path d="M100 20 C140 20, 160 50, 160 90 C160 130, 140 160, 100 180 C60 160, 40 130, 40 90 C40 50, 60 20, 100 20 Z"></path>
<path d="M100 20 L100 180" stroke-dasharray="2 4"></path>
<path d="M40 90 L160 90" stroke-dasharray="2 4"></path>
<circle cx="100" cy="90" r="40" stroke-dasharray="1 6"></circle>
<circle cx="100" cy="90" fill="currentColor" r="2"></circle>

<g className="group-hover:opacity-100 opacity-0 transition-opacity duration-700 font-mono text-[4px] fill-[#CCFF00]" stroke="none">
<text x="140" y="50">+2.4% ALPHA_LOST</text>
<text x="40" y="140">SYS.DRAIN.DETECTED</text>
</g>
</svg>
<div className="absolute bottom-[clamp(1.5rem,3vw,3rem)] left-[clamp(1.5rem,3vw,3rem)] flex items-center gap-4">
<div className="w-12 h-px bg-[#27272A]"></div>
<span className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] text-[#FAFAFA] uppercase tracking-widest">
                        System Architect
                    </span>
</div>
</div>
<div className="p-[clamp(3rem,6vw,6rem)] flex flex-col justify-center bg-[#050505]/80 backdrop-blur-sm relative z-10 reveal delay-1">
<h2 className="font-sans font-medium text-[clamp(3rem,4.5vw,5rem)] tracking-tighter text-[#FAFAFA] mb-[clamp(2rem,3vw,3rem)] leading-[1] uppercase">
                    I built the <br/>system.<br/>
<span className="text-[#555]">Then I walked.</span>
</h2>
<div className="space-y-6 text-[clamp(1rem,1.1vw,1.125rem)] text-[#A1A1AA] leading-[1.6] font-light max-w-[45ch] relative">
<div className="absolute -left-[clamp(1.5rem,3vw,3rem)] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#CCFF00] to-transparent"></div>
<p>
                        "I used to be the entity charging you 2%. For over a decade managing institutional capital, I watched hard-working people lose half their retirement to fees because they lacked the structural code."
                    </p>
<p>
                        "The industry runs on an asymmetry of information. They sell 'peace of mind' while skimming the compound growth."
                    </p>
<p>
                        "Axiom is the unredacted framework I use to manage my own 8-figure portfolio. No secrets. Just harsh math. Paying someone to hold your money is financial self-harm."
                    </p>
</div>
<div className="mt-[clamp(3rem,4vw,4rem)] font-mono text-[#FAFAFA] text-[clamp(1.5rem,2vw,2rem)] tracking-tighter flex items-center gap-4 border-t border-[#27272A] pt-6 inline-flex">
<span className="text-[#CCFF00] text-sm">SIG //</span> J.R.
                </div>
</div>
</section>

<section className="px-[clamp(1.5rem,5vw,4rem)] py-[clamp(6rem,10vw,12rem)] border-b border-[#27272A] flex justify-center relative bg-[#0A0A0A]" id="enroll">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,255,0,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="w-full max-w-5xl relative z-10 reveal">
<div className="text-center mb-[clamp(4rem,5vw,5rem)]">
<span className="inline-flex items-center gap-2 font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#050505] bg-[#CCFF00] px-4 py-1.5 mb-8 font-medium">
<span className="w-2 h-2 bg-[#050505] rounded-full animate-pulse"></span> SYSTEM_ACCESS_OPEN
                    </span>
<h2 className="font-sans font-medium text-[clamp(3rem,6vw,6rem)] tracking-tighter text-[#FAFAFA] mb-6 leading-[0.9] uppercase">
                        Stop Renting. <br/> Own The Protocol.
                    </h2>
</div>

<div className="relative ui-corners p-1 bg-gradient-to-b from-[#27272A] to-[#111] hover-lift">
<div className="grid grid-cols-1 md:grid-cols-12 gap-0 bg-[#050505] relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
<div className="md:col-span-5 p-[clamp(3rem,4vw,4rem)] bg-[#0A0A0A] border-b md:border-b-0 md:border-r border-[#27272A] flex flex-col justify-center items-center text-center relative z-10">
<span className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] text-[#555] border border-[#27272A] px-2 py-1 mb-6 uppercase tracking-widest">LIFETIME_LICENSE</span>
<div className="font-mono text-[clamp(4rem,6vw,7rem)] text-[#FAFAFA] tracking-tighter leading-none mb-2 relative">
<span className="text-[#CCFF00] text-[clamp(2rem,3vw,3.5rem)] absolute -left-10 top-2">$</span>895
                            </div>
<p className="text-[#A1A1AA] font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest mt-6 border-t border-[#27272A] pt-4 w-full">
                                Zero Recurring Fees. Ever.
                            </p>
</div>
<div className="md:col-span-7 p-[clamp(3rem,4vw,4rem)] flex flex-col justify-center relative z-10">
<ul className="space-y-6 font-mono text-[clamp(0.85rem,0.9vw,1rem)] text-[#FAFAFA] mb-10">
<li className="flex items-start gap-4"><iconify-icon className="text-[#CCFF00] text-xl shrink-0 mt-0.5" icon="solar:check-square-linear"></iconify-icon> <span className="font-light">The complete 4-step structural blueprint</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-[#CCFF00] text-xl shrink-0 mt-0.5" icon="solar:check-square-linear"></iconify-icon> <span className="font-light">Step-by-step account migration logic</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-[#CCFF00] text-xl shrink-0 mt-0.5" icon="solar:check-square-linear"></iconify-icon> <span className="font-light">Automated rebalancing calculation models</span></li>
<li className="flex items-start gap-4"><iconify-icon className="text-[#CCFF00] text-xl shrink-0 mt-0.5" icon="solar:check-square-linear"></iconify-icon> <span className="font-light">Advanced tax-shielding maneuvers (US)</span></li>
</ul>
<button className="w-full group px-[clamp(1.5rem,3vw,2.5rem)] py-[clamp(1.25rem,1.5vw,1.5rem)] bg-[#CCFF00] text-[#050505] font-mono font-medium text-[clamp(1rem,1.1vw,1.125rem)] tracking-widest uppercase transition-all active:scale-[0.99] flex justify-between items-center relative overflow-hidden hover:bg-[#FAFAFA]">
<span className="absolute inset-0 w-full h-full bg-white/20 -translate-x-full group-hover:animate-[scan_1s_ease-in-out]"></span>
<span className="relative z-10">Initialize Download</span>
<iconify-icon className="relative z-10" icon="solar:download-square-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="mt-[clamp(3rem,4vw,4rem)] p-6 border border-[#27272A] bg-[#050505] max-w-3xl mx-auto flex items-start gap-6 relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#27272A] group-hover:bg-[#CCFF00] transition-colors"></div>
<iconify-icon className="text-[#555] text-4xl group-hover:text-[#CCFF00] transition-colors" icon="solar:shield-warning-linear"></iconify-icon>
<div>
<p className="font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#FAFAFA] uppercase tracking-widest mb-2">Mathematical Guarantee</p>
<p className="text-[clamp(0.9rem,0.95vw,1rem)] text-[#A1A1AA] font-light leading-[1.6]">
                            If the architecture does not locate at least <span className="text-[#FAFAFA] font-medium border-b border-[#CCFF00]/50">$5,000</span> in extracted lifetime fees compared to your current setup, submit a ping within 100 days for an immediate protocol refund.
                        </p>
</div>
</div>
</div>
</section>

<section className="px-[clamp(1.5rem,5vw,4rem)] py-[clamp(5rem,10vw,10rem)] border-b border-[#27272A] reveal bg-[#050505] relative" id="faq">
<div className="crosshair top-[10%] right-[10%] hidden lg:block"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-[clamp(3rem,5vw,6rem)] max-w-7xl mx-auto">
<div className="md:col-span-5 md:sticky md:top-32 h-max">
<div className="flex items-center gap-4 mb-6">
<span className="w-12 h-px bg-[#CCFF00]"></span>
<span className="font-mono text-[clamp(0.7rem,0.75vw,0.8rem)] uppercase tracking-widest text-[#CCFF00]">06 // QUERY_DATABASE</span>
</div>
<h2 className="font-sans font-medium text-[clamp(3rem,4vw,5rem)] tracking-tighter text-[#FAFAFA] leading-[1] mb-6 uppercase">System <br/>Queries.</h2>
</div>
<div className="md:col-span-7 border-t border-[#27272A]">

<details className="group border-b border-[#27272A] bg-[#0A0A0A] hover:bg-[#111] transition-colors" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-[clamp(1.5rem,2vw,2rem)] text-[#FAFAFA] text-[clamp(1.1rem,1.2vw,1.25rem)] hover:text-[#CCFF00] transition-colors tracking-tight uppercase">
<span className="flex items-center gap-4"><span className="text-[#555] font-mono text-sm group-open:text-[#CCFF00]">Q.01</span> Bank Migration Required?</span>
<div className="relative w-4 h-4">
<span className="absolute top-1/2 left-0 w-full h-px bg-current transition-transform group-open:rotate-180"></span>
<span className="absolute top-0 left-1/2 w-px h-full bg-current transition-transform group-open:rotate-90"></span>
</div>
</summary>
<div className="text-[#A1A1AA] text-[clamp(1rem,1.05vw,1.1rem)] leading-[1.6] px-[clamp(1.5rem,2vw,2rem)] pb-[clamp(1.5rem,2vw,2rem)] pl-[clamp(4.5rem,5vw,5rem)] font-light border-l-2 border-[#CCFF00]/0 group-open:border-[#CCFF00]/50 transition-colors">
                            Usually, no. The protocol functions with major infrastructure like Fidelity, Vanguard, or Schwab. If trapped in a high-fee platform, we provide specific templates to transfer assets "in-kind" (without selling) to a zero-fee environment, nullifying tax events.
                        </div>
</details>

<details className="group border-b border-[#27272A] bg-[#0A0A0A] hover:bg-[#111] transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-[clamp(1.5rem,2vw,2rem)] text-[#FAFAFA] text-[clamp(1.1rem,1.2vw,1.25rem)] hover:text-[#CCFF00] transition-colors tracking-tight uppercase">
<span className="flex items-center gap-4"><span className="text-[#555] font-mono text-sm group-open:text-[#CCFF00]">Q.02</span> International Viability?</span>
<div className="relative w-4 h-4">
<span className="absolute top-1/2 left-0 w-full h-px bg-current transition-transform group-open:rotate-180"></span>
<span className="absolute top-0 left-1/2 w-px h-full bg-current transition-transform group-open:rotate-90"></span>
</div>
</summary>
<div className="text-[#A1A1AA] text-[clamp(1rem,1.05vw,1.1rem)] leading-[1.6] px-[clamp(1.5rem,2vw,2rem)] pb-[clamp(1.5rem,2vw,2rem)] pl-[clamp(4.5rem,5vw,5rem)] font-light border-l-2 border-[#CCFF00]/0 group-open:border-[#CCFF00]/50 transition-colors">
                            The core mathematics—fee eradication and global index ownership—are universally applicable. However, Phase 03 (Tax Shielding) references US tax codes (401k, IRA, Roth). Global nodes must apply local tax laws to the core strategy.
                        </div>
</details>

<details className="group border-b border-[#27272A] bg-[#0A0A0A] hover:bg-[#111] transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-[clamp(1.5rem,2vw,2rem)] text-[#FAFAFA] text-[clamp(1.1rem,1.2vw,1.25rem)] hover:text-[#CCFF00] transition-colors tracking-tight uppercase">
<span className="flex items-center gap-4"><span className="text-[#555] font-mono text-sm group-open:text-[#CCFF00]">Q.03</span> Monthly Time Drain?</span>
<div className="relative w-4 h-4">
<span className="absolute top-1/2 left-0 w-full h-px bg-current transition-transform group-open:rotate-180"></span>
<span className="absolute top-0 left-1/2 w-px h-full bg-current transition-transform group-open:rotate-90"></span>
</div>
</summary>
<div className="text-[#A1A1AA] text-[clamp(1rem,1.05vw,1.1rem)] leading-[1.6] px-[clamp(1.5rem,2vw,2rem)] pb-[clamp(1.5rem,2vw,2rem)] pl-[clamp(4.5rem,5vw,5rem)] font-light border-l-2 border-[#CCFF00]/0 group-open:border-[#CCFF00]/50 transition-colors">
                            Zero hours. The objective is absolute automation. Post-initialization, the protocol runs independently. A 15-minute annual checklist is provided for rebalancing. Day trading is a flawed variable we eliminate.
                        </div>
</details>
</div>
</div>
</section>
</main>

<footer className="px-[clamp(1.5rem,5vw,4rem)] pt-[clamp(6rem,10vw,12rem)] pb-[clamp(2rem,3vw,4rem)] border-t border-[#27272A] bg-[#050505] relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
<div className="absolute bottom-0 right-0 text-[20vw] font-sans font-medium text-[#111] leading-none pointer-events-none tracking-tighter mix-blend-color-dodge uppercase">AXIOM</div>
<div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#27272A] pb-[clamp(4rem,8vw,6rem)] gap-[clamp(3rem,5vw,6rem)] relative z-10">
<div className="lg:col-span-5 pr-8 flex flex-col justify-between">
<div>
<a className="font-mono font-medium text-[clamp(2rem,3vw,3.5rem)] tracking-tighter text-[#FAFAFA] mb-6 inline-block leading-none hover:text-[#CCFF00] transition-colors" href="#">
                        [AXIOM]
                    </a>
<p className="font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] text-[#555] mb-12 max-w-sm uppercase tracking-widest leading-relaxed">
                        Protocol For Absolute <br/>Financial Sovereignty.
                    </p>
</div>
<div className="border border-[#27272A] p-[clamp(1.5rem,2vw,2rem)] bg-[#0A0A0A] ui-corners">
<p className="font-mono text-[clamp(0.65rem,0.7vw,0.75rem)] uppercase tracking-widest text-[#CCFF00] mb-4 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#CCFF00] animate-pulse"></span> Data_Stream_Sub
                    </p>
<p className="font-sans font-medium text-[clamp(1.25rem,1.5vw,1.5rem)] mb-2 tracking-tight text-[#FAFAFA] uppercase">The Raw Feed</p>
<p className="text-[clamp(0.85rem,0.9vw,0.95rem)] text-[#555] mb-6 font-light">One undeniable market truth transmitted weekly.</p>
<div className="flex gap-2 h-12 relative group">
<input className="bg-[#050505] border border-[#27272A] px-4 font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] w-full focus:outline-none focus:border-[#CCFF00] text-[#FAFAFA] placeholder:text-[#333] transition-colors uppercase" placeholder="ENTER_EMAIL" type="email"/>
<button className="bg-[#27272A] text-[#FAFAFA] px-6 text-[clamp(0.85rem,0.9vw,0.95rem)] uppercase font-mono tracking-widest group-hover:bg-[#CCFF00] group-hover:text-[#050505] transition-colors flex items-center justify-center">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 font-mono text-[clamp(0.75rem,0.8vw,0.875rem)] uppercase tracking-widest">
<div>
<span className="text-[#333] mb-6 block border-b border-[#27272A] pb-3">Sitemap</span>
<ul className="space-y-4 text-[#A1A1AA]">
<li><a className="hover:text-[#CCFF00] flex items-center gap-2 group transition-colors" href="#thesis"><span className="text-[#333] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> Problem</a></li>
<li><a className="hover:text-[#CCFF00] flex items-center gap-2 group transition-colors" href="#curriculum"><span className="text-[#333] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> Protocol</a></li>
<li><a className="hover:text-[#CCFF00] flex items-center gap-2 group transition-colors" href="#alumni"><span className="text-[#333] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> Data_Logs</a></li>
<li><a className="hover:text-[#CCFF00] flex items-center gap-2 group transition-colors" href="#enroll"><span className="text-[#333] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> Initialize</a></li>
</ul>
</div>
<div>
<span className="text-[#333] mb-6 block border-b border-[#27272A] pb-3">Assets</span>
<ul className="space-y-4 text-[#A1A1AA]">
<li><a className="hover:text-[#CCFF00] flex items-center gap-2 group transition-colors" href="#matrix"><span className="text-[#333] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> Simulator</a></li>
<li><a className="hover:text-[#CCFF00] flex items-center gap-2 group transition-colors" href="#"><span className="text-[#333] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> Tax_Shields</a></li>
<li><a className="hover:text-[#CCFF00] flex items-center gap-2 group transition-colors" href="#"><span className="text-[#333] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> API_Docs</a></li>
<li><a className="hover:text-[#CCFF00] flex items-center gap-2 group transition-colors" href="#faq"><span className="text-[#333] opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span> Queries</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<span className="text-[#333] mb-6 block border-b border-[#27272A] pb-3">Legal_Sys</span>
<ul className="space-y-4 text-[#A1A1AA]">
<li><a className="hover:text-[#CCFF00] transition-colors" href="#">T_O_S</a></li>
<li><a className="hover:text-[#CCFF00] transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-[#CCFF00] transition-colors" href="#">Disclosures</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-[clamp(2rem,4vw,3rem)] flex flex-col lg:flex-row justify-between items-start gap-6 relative z-10">
<p className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#555] uppercase tracking-widest flex-shrink-0 flex items-center gap-2">
<span className="w-1 h-1 bg-[#555]"></span> SYS_BUILD 4.2.0 // © 2026 AXIOM
            </p>
<p className="font-mono text-[clamp(0.6rem,0.65vw,0.7rem)] text-[#333] text-left lg:text-right max-w-3xl leading-relaxed uppercase tracking-widest">
                Axiom provides structural protocols. Not a registered advisor. Execution involves risk. Mathematics are sound, market variables fluctuate.
            </p>
</div>
</footer>


    </>
  );
}
