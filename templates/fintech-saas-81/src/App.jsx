import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Staggered Character Animation logic
        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.animate-title');
            elements.forEach(el => {
                const text = el.innerText;
                el.innerHTML = '';
                [...text].forEach((char, index) => {
                    const span = document.createElement('span');
                    span.textContent = char === ' ' ? '\u00A0' : char; // Handle spaces
                    span.className = 'char-animate';
                    span.style.animationDelay = `${index * 30}ms`; // Faster delay for smoother feel
                    el.appendChild(span);
                });
            });

            // 3D Tilt Logic
            const cards = document.querySelectorAll('.tilt-card');
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    // Subtle tilt
                    const rotateX = ((y - centerY) / centerY) * -3; 
                    const rotateY = ((x - centerX) / centerX) * 3;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 scanlines pointer-events-none h-screen w-screen z-50 opacity-40"></div>
<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none bg-void opacity-60">
<div className="absolute top-[-10%] left-[-10%] w-2/3 h-2/3 bg-lime-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-2/3 h-2/3 bg-emerald-900/10 rounded-full blur-[120px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-brand text-lg text-white hover:text-lime-400 transition-colors tracking-widest flex items-center gap-2" href="#">
<svg className="lucide lucide-zap w-5 h-5 text-lime-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> ABACATE<span className="text-lime-500">PAY</span>
</a>
<div className="hidden md:flex gap-10 text-[0.65rem] font-medium tracking-[0.2em] uppercase">
<a className="hover:text-lime-400 transition-colors" href="#features">Recursos</a>
<a className="hover:text-lime-400 transition-colors" href="#developers">Devs</a>
<a className="hover:text-lime-400 transition-colors" href="#pricing">Preços</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-[0.65rem] font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 text-white px-6 py-3 rounded hover:bg-lime-500/10 hover:border-lime-500/50 hover:text-lime-400 transition-all" href="#">
                Login <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-52 md:pb-32 overflow-hidden pt-40 pr-6 pb-20 pl-6 relative">
<div className="max-w-7xl mx-auto relative z-10">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-3 px-3 py-1 rounded border border-lime-900/30 bg-lime-950/10 text-lime-400 text-[0.65rem] tracking-[0.2em] font-medium uppercase mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                    Status: Pix Online 24/7
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9] mb-8 font-brand animate-title mix-blend-screen"><span className="char-animate" style={{animationDelay: '0ms'}}>R</span><span className="char-animate" style={{animationDelay: '30ms'}}>E</span><span className="char-animate" style={{animationDelay: '60ms'}}>C</span><span className="char-animate" style={{animationDelay: '90ms'}}>E</span><span className="char-animate" style={{animationDelay: '120ms'}}>B</span><span className="char-animate" style={{animationDelay: '150ms'}}>A</span><span className="char-animate" style={{animationDelay: '180ms'}}> </span><span className="char-animate" style={{animationDelay: '210ms'}}>P</span><span className="char-animate" style={{animationDelay: '240ms'}}>I</span><span className="char-animate" style={{animationDelay: '270ms'}}>X</span><span className="char-animate" style={{animationDelay: '300ms'}}>
</span><span className="char-animate" style={{animationDelay: '330ms'}}>N</span><span className="char-animate" style={{animationDelay: '360ms'}}>O</span><span className="char-animate" style={{animationDelay: '390ms'}}> </span><span className="char-animate" style={{animationDelay: '420ms'}}>S</span><span className="char-animate" style={{animationDelay: '450ms'}}>E</span><span className="char-animate" style={{animationDelay: '480ms'}}>U</span><span className="char-animate" style={{animationDelay: '510ms'}}> </span><span className="char-animate" style={{animationDelay: '540ms'}}>S</span><span className="char-animate" style={{animationDelay: '570ms'}}>A</span><span className="char-animate" style={{animationDelay: '600ms'}}>A</span><span className="char-animate" style={{animationDelay: '630ms'}}>S</span><span className="char-animate" style={{animationDelay: '660ms'}}>.</span></h1>
<div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
<p className="text-lg text-slate-400 font-light leading-relaxed max-w-xl border-l-2 border-lime-500/50 pl-6 animate-title"><span className="char-animate" style={{animationDelay: '0ms'}}>A</span><span className="char-animate" style={{animationDelay: '30ms'}}> </span><span className="char-animate" style={{animationDelay: '60ms'}}>A</span><span className="char-animate" style={{animationDelay: '90ms'}}>P</span><span className="char-animate" style={{animationDelay: '120ms'}}>I</span><span className="char-animate" style={{animationDelay: '150ms'}}> </span><span className="char-animate" style={{animationDelay: '180ms'}}>d</span><span className="char-animate" style={{animationDelay: '210ms'}}>e</span><span className="char-animate" style={{animationDelay: '240ms'}}> </span><span className="char-animate" style={{animationDelay: '270ms'}}>p</span><span className="char-animate" style={{animationDelay: '300ms'}}>a</span><span className="char-animate" style={{animationDelay: '330ms'}}>g</span><span className="char-animate" style={{animationDelay: '360ms'}}>a</span><span className="char-animate" style={{animationDelay: '390ms'}}>m</span><span className="char-animate" style={{animationDelay: '420ms'}}>e</span><span className="char-animate" style={{animationDelay: '450ms'}}>n</span><span className="char-animate" style={{animationDelay: '480ms'}}>t</span><span className="char-animate" style={{animationDelay: '510ms'}}>o</span><span className="char-animate" style={{animationDelay: '540ms'}}>s</span><span className="char-animate" style={{animationDelay: '570ms'}}> </span><span className="char-animate" style={{animationDelay: '600ms'}}>f</span><span className="char-animate" style={{animationDelay: '630ms'}}>e</span><span className="char-animate" style={{animationDelay: '660ms'}}>i</span><span className="char-animate" style={{animationDelay: '690ms'}}>t</span><span className="char-animate" style={{animationDelay: '720ms'}}>a</span><span className="char-animate" style={{animationDelay: '750ms'}}> </span><span className="char-animate" style={{animationDelay: '780ms'}}>p</span><span className="char-animate" style={{animationDelay: '810ms'}}>a</span><span className="char-animate" style={{animationDelay: '840ms'}}>r</span><span className="char-animate" style={{animationDelay: '870ms'}}>a</span><span className="char-animate" style={{animationDelay: '900ms'}}> </span><span className="char-animate" style={{animationDelay: '930ms'}}>d</span><span className="char-animate" style={{animationDelay: '960ms'}}>e</span><span className="char-animate" style={{animationDelay: '990ms'}}>s</span><span className="char-animate" style={{animationDelay: '1020ms'}}>e</span><span className="char-animate" style={{animationDelay: '1050ms'}}>n</span><span className="char-animate" style={{animationDelay: '1080ms'}}>v</span><span className="char-animate" style={{animationDelay: '1110ms'}}>o</span><span className="char-animate" style={{animationDelay: '1140ms'}}>l</span><span className="char-animate" style={{animationDelay: '1170ms'}}>v</span><span className="char-animate" style={{animationDelay: '1200ms'}}>e</span><span className="char-animate" style={{animationDelay: '1230ms'}}>d</span><span className="char-animate" style={{animationDelay: '1260ms'}}>o</span><span className="char-animate" style={{animationDelay: '1290ms'}}>r</span><span className="char-animate" style={{animationDelay: '1320ms'}}>e</span><span className="char-animate" style={{animationDelay: '1350ms'}}>s</span><span className="char-animate" style={{animationDelay: '1380ms'}}> </span><span className="char-animate" style={{animationDelay: '1410ms'}}>e</span><span className="char-animate" style={{animationDelay: '1440ms'}}> </span><span className="char-animate" style={{animationDelay: '1470ms'}}>I</span><span className="char-animate" style={{animationDelay: '1500ms'}}>n</span><span className="char-animate" style={{animationDelay: '1530ms'}}>d</span><span className="char-animate" style={{animationDelay: '1560ms'}}>i</span><span className="char-animate" style={{animationDelay: '1590ms'}}>e</span><span className="char-animate" style={{animationDelay: '1620ms'}}> </span><span className="char-animate" style={{animationDelay: '1650ms'}}>H</span><span className="char-animate" style={{animationDelay: '1680ms'}}>a</span><span className="char-animate" style={{animationDelay: '1710ms'}}>c</span><span className="char-animate" style={{animationDelay: '1740ms'}}>k</span><span className="char-animate" style={{animationDelay: '1770ms'}}>e</span><span className="char-animate" style={{animationDelay: '1800ms'}}>r</span><span className="char-animate" style={{animationDelay: '1830ms'}}>s</span><span className="char-animate" style={{animationDelay: '1860ms'}}>.</span><span className="char-animate" style={{animationDelay: '1890ms'}}> </span><span className="char-animate" style={{animationDelay: '1920ms'}}>S</span><span className="char-animate" style={{animationDelay: '1950ms'}}>i</span><span className="char-animate" style={{animationDelay: '1980ms'}}>m</span><span className="char-animate" style={{animationDelay: '2010ms'}}>p</span><span className="char-animate" style={{animationDelay: '2040ms'}}>l</span><span className="char-animate" style={{animationDelay: '2070ms'}}>e</span><span className="char-animate" style={{animationDelay: '2100ms'}}>s</span><span className="char-animate" style={{animationDelay: '2130ms'}}>,</span><span className="char-animate" style={{animationDelay: '2160ms'}}> </span><span className="char-animate" style={{animationDelay: '2190ms'}}>t</span><span className="char-animate" style={{animationDelay: '2220ms'}}>r</span><span className="char-animate" style={{animationDelay: '2250ms'}}>a</span><span className="char-animate" style={{animationDelay: '2280ms'}}>n</span><span className="char-animate" style={{animationDelay: '2310ms'}}>s</span><span className="char-animate" style={{animationDelay: '2340ms'}}>p</span><span className="char-animate" style={{animationDelay: '2370ms'}}>a</span><span className="char-animate" style={{animationDelay: '2400ms'}}>r</span><span className="char-animate" style={{animationDelay: '2430ms'}}>e</span><span className="char-animate" style={{animationDelay: '2460ms'}}>n</span><span className="char-animate" style={{animationDelay: '2490ms'}}>t</span><span className="char-animate" style={{animationDelay: '2520ms'}}>e</span><span className="char-animate" style={{animationDelay: '2550ms'}}> </span><span className="char-animate" style={{animationDelay: '2580ms'}}>e</span><span className="char-animate" style={{animationDelay: '2610ms'}}> </span><span className="char-animate" style={{animationDelay: '2640ms'}}>c</span><span className="char-animate" style={{animationDelay: '2670ms'}}>o</span><span className="char-animate" style={{animationDelay: '2700ms'}}>m</span><span className="char-animate" style={{animationDelay: '2730ms'}}> </span><span className="char-animate" style={{animationDelay: '2760ms'}}>w</span><span className="char-animate" style={{animationDelay: '2790ms'}}>e</span><span className="char-animate" style={{animationDelay: '2820ms'}}>b</span><span className="char-animate" style={{animationDelay: '2850ms'}}>h</span><span className="char-animate" style={{animationDelay: '2880ms'}}>o</span><span className="char-animate" style={{animationDelay: '2910ms'}}>o</span><span className="char-animate" style={{animationDelay: '2940ms'}}>k</span><span className="char-animate" style={{animationDelay: '2970ms'}}>s</span><span className="char-animate" style={{animationDelay: '3000ms'}}> </span><span className="char-animate" style={{animationDelay: '3030ms'}}>q</span><span className="char-animate" style={{animationDelay: '3060ms'}}>u</span><span className="char-animate" style={{animationDelay: '3090ms'}}>e</span><span className="char-animate" style={{animationDelay: '3120ms'}}> </span><span className="char-animate" style={{animationDelay: '3150ms'}}>f</span><span className="char-animate" style={{animationDelay: '3180ms'}}>u</span><span className="char-animate" style={{animationDelay: '3210ms'}}>n</span><span className="char-animate" style={{animationDelay: '3240ms'}}>c</span><span className="char-animate" style={{animationDelay: '3270ms'}}>i</span><span className="char-animate" style={{animationDelay: '3300ms'}}>o</span><span className="char-animate" style={{animationDelay: '3330ms'}}>n</span><span className="char-animate" style={{animationDelay: '3360ms'}}>a</span><span className="char-animate" style={{animationDelay: '3390ms'}}>m</span><span className="char-animate" style={{animationDelay: '3420ms'}}> </span><span className="char-animate" style={{animationDelay: '3450ms'}}>e</span><span className="char-animate" style={{animationDelay: '3480ms'}}>m</span><span className="char-animate" style={{animationDelay: '3510ms'}}> </span><span className="char-animate" style={{animationDelay: '3540ms'}}>t</span><span className="char-animate" style={{animationDelay: '3570ms'}}>e</span><span className="char-animate" style={{animationDelay: '3600ms'}}>m</span><span className="char-animate" style={{animationDelay: '3630ms'}}>p</span><span className="char-animate" style={{animationDelay: '3660ms'}}>o</span><span className="char-animate" style={{animationDelay: '3690ms'}}> </span><span className="char-animate" style={{animationDelay: '3720ms'}}>r</span><span className="char-animate" style={{animationDelay: '3750ms'}}>e</span><span className="char-animate" style={{animationDelay: '3780ms'}}>a</span><span className="char-animate" style={{animationDelay: '3810ms'}}>l</span><span className="char-animate" style={{animationDelay: '3840ms'}}>.</span></p>

<div className="hidden md:block">
<div className="flex gap-4">
<div className="p-3 border border-white/10 rounded bg-black/50 backdrop-blur hover:border-lime-500/50 transition-colors group">
<svg className="lucide lucide-code-2 w-6 h-6 text-slate-500 group-hover:text-lime-400 transition-colors" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="p-3 border border-white/10 rounded bg-black/50 backdrop-blur hover:border-lime-500/50 transition-colors group">
<svg className="lucide lucide-smartphone w-6 h-6 text-slate-500 group-hover:text-lime-400 transition-colors" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="p-3 border border-white/10 rounded bg-black/50 backdrop-blur hover:border-lime-500/50 transition-colors group">
<svg className="lucide lucide-dollar-sign w-6 h-6 text-slate-500 group-hover:text-lime-400 transition-colors" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 mt-12">
<button className="inline-flex items-center justify-center gap-2 bg-lime-600 text-black px-8 py-4 rounded font-bold text-xs tracking-[0.2em] uppercase hover:bg-lime-500 transition-all border border-transparent shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)]">
                        Criar Conta Grátis
                    </button>
<button className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/10 text-white px-8 py-4 rounded font-medium text-xs tracking-[0.2em] uppercase hover:bg-white/5 hover:border-lime-500/50 hover:text-lime-400 transition-all">
                        Ler Documentação
                    </button>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-black/40 py-6 overflow-hidden">
<div className="flex gap-10 items-center whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-60 hover:opacity-100 transition-opacity">

<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-lime-400/80"><svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Pix Automático</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">REST API</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-lime-400/80"><svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Webhooks Reais</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">Sem Mensalidade</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-lime-400/80"><svg className="lucide lucide-code w-4 h-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg> Node.js &amp; Python</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">Saque Rápido</div>

<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-lime-400/80"><svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Pix Automático</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">REST API</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-lime-400/80"><svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Webhooks Reais</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">Sem Mensalidade</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-lime-400/80"><svg className="lucide lucide-code w-4 h-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg> Node.js &amp; Python</div>
<div className="flex items-center gap-2 uppercase tracking-[0.25em] text-[0.7rem] text-slate-500">Saque Rápido</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="features">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-6">
<div>
<h2 className="text-3xl font-brand text-white tracking-tight mb-2">INFRAESTRUTURA PIX</h2>
<p className="text-slate-500 max-w-sm font-light text-sm">Focamos na experiência do desenvolvedor para que você foque no seu produto.</p>
</div>
<span className="text-lime-500 font-mono text-xs tracking-widest">01 // RECURSOS</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="tilt-card group md:col-span-2 glass-panel p-10 rounded-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-lime-900/10 rounded-full blur-[60px] -mr-16 -mt-16 transition group-hover:bg-lime-800/20"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded bg-lime-500/10 flex items-center justify-center border border-lime-500/20 mb-6 text-lime-400 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-code-2 w-6 h-6" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">API Developer-First</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed max-w-md">
                            Nossa API foi desenhada para ser intuitiva. Crie cobranças Pix, gerencie clientes e consulte status com poucas linhas de código. Documentação completa e exemplos em Node, Python e PHP.
                        </p>
</div>
</div>

<div className="tilt-card group glass-panel p-10 rounded-xl relative overflow-hidden">
<div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10 mb-6 text-white group-hover:text-lime-400 transition-colors">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Webhooks</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                        Esqueça o polling. Notificamos seu backend instantaneamente assim que um pagamento Pix é confirmado.
                    </p>
</div>

<div className="tilt-card group glass-panel p-10 rounded-xl relative overflow-hidden">
<div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center border border-white/10 mb-6 text-white group-hover:text-lime-400 transition-colors">
<svg className="lucide lucide-wallet w-6 h-6" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3">Sem Mensalidade</h3>
<p className="text-slate-400 font-light text-sm leading-relaxed">
                        Zero custo fixo. Você só paga uma pequena taxa quando vende. Ideal para startups e projetos indie.
                    </p>
</div>

<div className="tilt-card group md:col-span-2 glass-panel p-10 rounded-xl relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-lime-950/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-700"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-xl font-medium text-white mb-2">Compatibilidade Total</h3>
<p className="text-slate-400 font-light text-sm">Integre com qualquer stack ou framework moderno.</p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 rounded border border-white/10 text-[0.6rem] uppercase tracking-wider text-slate-300 bg-black/50">Node.js</span>
<span className="px-3 py-1 rounded border border-white/10 text-[0.6rem] uppercase tracking-wider text-slate-300 bg-black/50">Python</span>
<span className="px-3 py-1 rounded border border-white/10 text-[0.6rem] uppercase tracking-wider text-slate-300 bg-black/50">Go</span>
<span className="px-3 py-1 rounded border border-white/10 text-[0.6rem] uppercase tracking-wider text-slate-300 bg-black/50">PHP</span>
<span className="px-3 py-1 rounded border border-white/10 text-[0.6rem] uppercase tracking-wider text-slate-300 bg-black/50">Bubble</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="developers">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
<h2 className="text-3xl font-brand text-white tracking-tight">INTEGRAÇÃO SIMPLES</h2>
<span className="text-lime-500 font-mono text-xs tracking-widest">02 // CODIGO</span>
</div>
<div className="space-y-32">

<div className="group grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="relative rounded-xl overflow-hidden border border-white/10 bg-[#0d1117] aspect-video group-hover:border-lime-500/50 transition duration-500 shadow-2xl">

<div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
<div className="ml-4 text-[0.6rem] text-slate-500 font-mono">create-billing.js</div>
</div>
<div className="p-6 pt-16 font-mono text-xs md:text-sm text-slate-300 leading-relaxed overflow-hidden">
<span className="text-purple-400">const</span> abacate = <span className="text-purple-400">require</span>(<span className="text-green-400">'abacatepay'</span>);
                            <span className="text-purple-400">const</span> cobranca = <span className="text-purple-400">await</span> abacate.create({
                              amount: <span className="text-orange-400">2990</span>, <span className="text-slate-500">// R$ 29,90</span>
                              customer: {
                                name: <span className="text-green-400">"Cliente Teste"</span>,
                                email: <span className="text-green-400">"cliente@email.com"</span>
                              }
                            });
                            console.<span className="text-blue-400">log</span>(cobranca.pixLink);
                        </div>
<div className="absolute inset-0 bg-gradient-to-t from-lime-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>
<div>
<div className="flex items-center gap-3 mb-4">
<span className="text-lime-500 font-mono text-xs tracking-widest uppercase">Node.js</span>
<span className="h-px w-8 bg-white/10"></span>
<span className="text-slate-500 font-mono text-xs tracking-widest uppercase">SDK</span>
</div>
<h3 className="text-4xl font-medium text-white mb-4 group-hover:text-lime-400 transition-colors">Crie uma cobrança</h3>
<p className="text-slate-400 font-light mb-8 leading-relaxed">
                            Com apenas algumas linhas de código, você gera um QR Code Pix dinâmico pronto para ser pago. Nossa biblioteca cuida da comunicação segura com o Banco Central.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-white border-b border-lime-500 pb-1 hover:text-lime-400 transition-colors" href="#">
                            Ver Documentação <svg className="lucide lucide-arrow-up-right w-4 h-4 text-lime-500" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative bg-black/50" id="pricing">
<div className="absolute right-0 top-0 w-1/3 h-full bg-lime-900/5 blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 text-lime-500 font-mono text-xs tracking-widest uppercase mb-6">
<svg className="lucide lucide-tag w-4 h-4" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg> Transparência Total
                    </div>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6 font-brand">
                        PREÇO <br/> SIMPLIFICADO.
                    </h2>
<p className="text-slate-400 font-light text-lg mb-8 max-w-md">
                        Sem taxas de adesão. Sem mensalidade. Sem letras miúdas. Você só paga quando seu cliente paga você.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-300 text-sm font-light">
<svg className="lucide lucide-check w-4 h-4 text-lime-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Saque D+1 (Dia seguinte)
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm font-light">
<svg className="lucide lucide-check w-4 h-4 text-lime-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Painel de controle completo
                        </li>
<li className="flex items-center gap-3 text-slate-300 text-sm font-light">
<svg className="lucide lucide-check w-4 h-4 text-lime-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Suporte humanizado
                        </li>
</ul>
</div>
<div className="glass-panel p-12 rounded-2xl border-lime-500/20 text-center relative overflow-hidden group">
<div className="absolute inset-0 bg-lime-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<p className="text-slate-500 uppercase tracking-widest text-xs font-semibold mb-4">Taxa única por transação</p>
<div className="text-7xl md:text-8xl font-bold text-white tracking-tighter mb-2 font-brand">
                        1.99<span className="text-lime-500 text-4xl">%</span>
</div>
<p className="text-slate-400 font-light text-sm">Receba em D+1 automaticamente.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative bg-black">
<div className="max-w-7xl mx-auto">
<div className="flex items-end justify-between mb-16 border-b border-white/10 pb-6">
<h2 className="text-3xl font-brand text-white tracking-tight">COMUNIDADE</h2>
<span className="text-lime-500 font-mono text-xs tracking-widest">03 // PROOF</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl hover:border-lime-500/30 transition duration-300">
<div className="mb-6 text-lime-500">
<svg className="lucide lucide-quote w-6 h-6 rotate-180 fill-current opacity-20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-slate-300 font-light mb-8 leading-relaxed text-sm">
                        "Finalmente uma solução de Pix que entende quem desenvolve software. A integração demorou literalmente <span className="text-white font-medium">15 minutos</span> e os webhooks nunca falham."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-lime-900/20 border border-lime-500/30 flex items-center justify-center text-xs text-lime-400 font-mono">RS</div>
<div>
<div className="text-xs font-bold text-white uppercase tracking-wider">Ricardo Silva</div>
<div className="text-[0.6rem] text-slate-500 uppercase tracking-widest">SaaS Founder</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-lime-500/30 transition duration-300">
<div className="mb-6 text-lime-500">
<svg className="lucide lucide-quote w-6 h-6 rotate-180 fill-current opacity-20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-slate-300 font-light mb-8 leading-relaxed text-sm">
                        "A AbacatePay removeu toda a burocracia de receber pagamentos no meu projeto paralelo. Interface limpa e preço justo. <span className="text-white font-medium">Recomendo para todo indie hacker.</span>"
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-lime-900/20 border border-lime-500/30 flex items-center justify-center text-xs text-lime-400 font-mono">MA</div>
<div>
<div className="text-xs font-bold text-white uppercase tracking-wider">Marina Alves</div>
<div className="text-[0.6rem] text-slate-500 uppercase tracking-widest">Dev Fullstack</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-lime-500/30 transition duration-300">
<div className="mb-6 text-lime-500">
<svg className="lucide lucide-quote w-6 h-6 rotate-180 fill-current opacity-20" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-slate-300 font-light mb-8 leading-relaxed text-sm">
                        "O dashboard é incrível. Consigo ver exatamente quanto vendi no dia e o saque é super rápido. O suporte também me ajudou muito na implementação."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-lime-900/20 border border-lime-500/30 flex items-center justify-center text-xs text-lime-400 font-mono">BP</div>
<div>
<div className="text-xs font-bold text-white uppercase tracking-wider">Bruno Pereira</div>
<div className="text-[0.6rem] text-slate-500 uppercase tracking-widest">CTO, TechStart</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-24 px-6 relative overflow-hidden z-20" id="contact">

<div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-lime-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-6">
<div className="flex text-lime-400 gap-0.5">
<svg className="lucide lucide-star w-3 h-3 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-[0.6rem] uppercase tracking-[0.25em] text-slate-500">Aprovado pela Comunidade</span>
</div>
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-8 font-brand leading-none">
                        PRONTO PARA <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-600 animate-pulse">VENDER MAIS?</span>
</h2>
<p className="text-slate-400 font-light mb-10 max-w-md">Crie sua conta gratuitamente agora mesmo e comece a receber Pix no seu SaaS.</p>
<a className="group flex items-center gap-4 text-xl text-white hover:text-lime-400 transition-colors" href="mailto:suporte@abacatepay.com">
<div className="p-3 border border-white/10 rounded-full group-hover:border-lime-400 transition-colors bg-black/50">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<span className="font-light tracking-wide">suporte@abacatepay.com</span>
</a>
</div>
<div className="w-full md:w-auto glass-panel p-8 rounded-xl border-lime-500/20 max-w-md">
<h4 className="text-xl font-light text-white mb-6 tracking-tight">Criar Conta</h4>
<form className="space-y-4">
<div className="space-y-1">
<label className="text-[0.6rem] uppercase tracking-widest text-slate-500">Nome da Empresa</label>
<input className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 transition-all placeholder:text-slate-700 text-sm" placeholder="Seu SaaS" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[0.6rem] uppercase tracking-widest text-slate-500">Email Corporativo</label>
<input className="w-full bg-black/50 border border-white/10 rounded p-3 text-white focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500/50 transition-all placeholder:text-slate-700 text-sm" placeholder="voce@empresa.com" type="email"/>
</div>
<button className="w-full bg-lime-600 hover:bg-lime-500 text-black py-3 rounded font-bold tracking-widest uppercase text-xs mt-2 shadow-[0_0_20px_rgba(132,204,22,0.3)] hover:shadow-[0_0_30px_rgba(132,204,22,0.5)] transition-all" type="button">
                            Começar Agora
                        </button>
</form>
</div>
</div>
<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] text-slate-600 uppercase tracking-widest">
<p>© 2024 ABACATEPAY. TODOS OS DIREITOS RESERVADOS.</p>
<div className="flex gap-6">
<a className="hover:text-lime-400 transition-colors" href="#">Termos</a>
<a className="hover:text-lime-400 transition-colors" href="#">Privacidade</a>
<a className="hover:text-lime-400 transition-colors" href="#">Twitter</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
