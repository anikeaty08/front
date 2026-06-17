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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
background: '#050505',
surface: '#0A0A0B',
surfaceHighlight: '#121214',
primary: '#6366f1',
border: "rgba(255, 255, 255, 0.08)",
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'beam': 'beam 4s infinite',
'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'marquee': 'marquee 40s linear infinite',
'pulse-ring': 'pulse-ring 3s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
}
}
}
}



      lucide.createIcons();

      // Spotlight effect
      document.querySelectorAll('.card-shine').forEach(card => {
          card.addEventListener('mousemove', e => {
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              card.style.setProperty('--mouse-x', `${x}px`);
              card.style.setProperty('--mouse-y', `${y}px`);
          });
      });

      // Scroll Reveal Logic
      document.addEventListener('DOMContentLoaded', () => {
          const steps = document.querySelectorAll('.step-content');
          const visuals = document.querySelectorAll('.visual-content');

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const index = entry.target.getAttribute('data-index');

                      // Update Text Opacity
                      steps.forEach(s => {
                          s.classList.remove('opacity-100');
                          s.classList.add('opacity-30');
                      });
                      entry.target.classList.remove('opacity-30');
                      entry.target.classList.add('opacity-100');

                      // Update Visuals
                      visuals.forEach(v => {
                          v.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
                          v.classList.add('opacity-0', 'translate-y-8', 'scale-95');
                      });

                      const activeVisual = document.querySelector(`.visual-content[data-index="${index}"]`);
                      if (activeVisual) {
                          activeVisual.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
                          activeVisual.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                      }
                  }
              });
          }, {
              threshold: 0.5,
              rootMargin: "-20% 0px -20% 0px"
          });

          steps.forEach(step => observer.observe(step));
      });
    


      function handleInstallHover(el) {
        if (el.dataset.animating || el.dataset.installed === 'true') return;
        el.dataset.animating = 'true';

        const btn = el.querySelector('.install-btn');
        const prog = el.querySelector('.install-progress');
        const bar = prog.querySelector('.bar-fill');
        const num = prog.querySelector('.progress-num');
        const done = el.querySelector('.install-done');

        btn.classList.add('opacity-0', 'scale-95');

        setTimeout(() => {
          btn.classList.add('hidden');
          prog.classList.remove('hidden');
          void prog.offsetWidth;
          prog.classList.remove('opacity-0', 'scale-95');

          setTimeout(() => {
            bar.style.width = '100%';
            let p = 0;
            const i = setInterval(() => {
              p += Math.floor(Math.random() * 5) + 3;
              if (p > 100) p = 100;
              num.innerText = p + '%';
              if (p === 100) clearInterval(i);
            }, 50);
          }, 100);

          setTimeout(() => {
            prog.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
              prog.classList.add('hidden');
              done.classList.remove('hidden');
              void done.offsetWidth;
              done.classList.remove('opacity-0', 'translate-y-2');
              el.dataset.installed = 'true';
              delete el.dataset.animating;
            }, 300);
          }, 2200);
        }, 300);
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-background to-background blur-[100px] opacity-40"></div>
<div className="bg-grid absolute inset-0 opacity-60"></div>
</div>

<nav className="fixed z-50 transition-all duration-300 border-white/5 border-b top-0 right-0 left-0 backdrop-blur-xl">
<div className="flex h-14 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group">
<div className="relative w-5 h-5 text-white">
<div className="absolute inset-0 bg-indigo-500 blur-sm opacity-20 group-hover:opacity-40 transition-opacity"></div>
<svg className="z-10 relative w-[20px] h-[20px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24">
<path className="" d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M2 17L12 22L22 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M2 12L12 17L22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<span className="text-sm font-medium text-white tracking-tight">
            Fluxloop
          </span>
</div>

<div className="hidden md:flex gap-8 text-[13px] font-medium text-neutral-400 gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Get Started</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Github</a>
</div>

<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<button className="hidden group text-[13px] hover:bg-neutral-200 transition-all overflow-hidden font-medium text-black bg-white rounded-full pt-1.5 pr-4 pb-1.5 pl-4 relative">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-beam"></div>
</button>
</div>
</div>
</nav>

<main className="flex flex-col z-10 text-center max-w-[90rem] mr-auto ml-auto pt-32 pr-4 pb-20 pl-4 relative items-center">

<div className="animate-fade-up delay-100 mb-8">
<a className="group inline-flex items-center gap-x-2 transition-all hover:bg-white/10 hover:border-white/20 bg-white/5 border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-1 shadow-[0_0_15px_-3px_rgba(99,102,241,0.15)] backdrop-blur-md" href="#">
<span className="rounded-full bg-indigo-500 px-2.5 py-0.5 text-[10px] font-medium text-white uppercase tracking-wide">
            New
          </span>
<span className="text-[13px] transition-colors group-hover:text-white font-medium text-neutral-300">
            FluxLoop Web: Early access waitlist now open
          </span>
<svg className="text-neutral-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<h1 className="animate-fade-up delay-200 md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-medium text-white tracking-tighter mb-8">
        Evaluate Agents,
        <br/>
<span className="font-light italic text-neutral-400 font-serif opacity-80 pr-2">
          where you code.
        </span>
</h1>
<p className="animate-fade-up delay-300 md:text-lg leading-relaxed text-base font-light text-neutral-400 max-w-xl mr-auto mb-8 ml-auto">
        No manual CSV files. No cloud uploads. No mysterious scores.
        <br/>
        Just instant agent testing with actionable insights. All in VS Code.
      </p>

<div className="animate-fade-up delay-400 flex flex-col sm:flex-row gap-4 w-full mb-12 gap-x-4 gap-y-4 justify-center">

<button className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white overflow-hidden text-sm font-medium text-white/80 tracking-tight bg-white/5 h-[54px] rounded-full pt-3 pr-6 pb-3 pl-6 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center" onclick="window.open('https://marketplace.visualstudio.com/items?itemName=fluxloop.fluxloop', '_blank')" role="button" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>

<span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0 pointer-events-none">
<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 -skew-x-12 transform origin-left"></span>
</span>

<svg className="lucide lucide-download w-[20px] h-[20px] relative z-10" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
<span className="uppercase z-10 text-sm relative">Get Extension</span>
<span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 z-10" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>

</div>

<div className="animate-fade-up delay-500 relative w-full max-w-5xl mx-auto mb-24 mt-8">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50"></div>

<div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-none overflow-hidden aspect-video group">


<video autoplay="" className="bg-black/20 w-full h-full object-cover z-0 ring-white/10 ring-1 relative shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]" controls="" loop="" muted="" playsinline="">
<source src="https://video.dogu.ooo/fluxloop.mp4" type="video/mp4"/>
</video>
</div>
</div>

</main>

<section className="md:py-24 z-20 border-white/5 border-t pt-12 pb-12 relative" id="features-scroll">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="relative z-10 flex flex-col">

<div className="step-content min-h-[90vh] flex flex-col transition-opacity duration-500 pt-12 pb-12 justify-center" data-index="0">
<div className="mb-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs">
              01
            </div>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
              Never Leave Your IDE
            </h3>
<p className="leading-relaxed text-lg text-neutral-400 max-w-lg">
              Install FluxLoop extension. Add
              <span className="text-indigo-400 font-mono text-sm bg-indigo-500/10 px-1.5 py-0.5 rounded">
                @fluxloop.agent()
              </span>
              decorator. That's it. Your tools, database, APIs work as-is.
            </p>
<p className="mt-4 text-neutral-500">
              Everything runs locally in VSCode.
            </p>
</div>

<div className="step-content min-h-[90vh] flex flex-col justify-center transition-opacity duration-500 py-12" data-index="1">
<div className="mb-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs">
              02
            </div>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
              Start with Only One Sentence
            </h3>
<p className="text-lg text-neutral-400 leading-relaxed max-w-md">
              Enter a single test input:
              <span className="text-white italic">"Book a flight to Tokyo"</span>
              .
            </p>
<p className="leading-relaxed text-neutral-400 max-w-lg mt-4">
              FluxLoop auto-generates variations: Verbose, adversarial, edge
              cases, different personas.
            </p>
<div className="mt-6 flex gap-2">
<span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                No CSV files
              </span>
<span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                No manual setup
              </span>
</div>
</div>

<div className="step-content min-h-[90vh] flex flex-col justify-center transition-opacity duration-500 py-12" data-index="2">
<div className="mb-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs">
              03
            </div>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
              Know What Broke and Why
            </h3>
<p className="leading-relaxed text-lg text-neutral-400 max-w-lg">
              Not "Score: 3.6". Get specific failures and recommendations.
            </p>
<div className="mt-6 pl-4 border-l-2 border-indigo-500/50 space-y-2">
<div className="text-red-400 text-sm font-mono">
                ✗ Response time exceeded 5s
              </div>
<div className="text-sm text-indigo-400 font-mono">
                → Optimize database query in booking flow
              </div>
</div>
<p className="text-neutral-500 mt-6">
              Clear diagnosis. Clear next steps.
            </p>
</div>

<div className="step-content min-h-[90vh] flex flex-col transition-opacity duration-500 pt-12 pb-12 justify-center" data-index="3">
<div className="mb-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white font-mono text-xs">
              04
            </div>
<h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
              Test with Your Actual Tools
            </h3>
<p className="leading-relaxed text-lg text-neutral-400 max-w-lg">
              Not mocked APIs or fake databases. Your real tools, real
              integrations, real environment.
            </p>
<p className="text-neutral-400 mt-4">
              See how your agent actually performs.
            </p>
</div>
</div>

<div className="hidden lg:block relative z-0">
<div className="sticky top-0 h-screen flex items-center justify-center">
<div className="relative w-full aspect-square max-w-[500px] bg-surface/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-grid opacity-30"></div>

<div className="visual-content absolute inset-0 p-8 flex flex-col items-center justify-center transition-all duration-700 ease-out" data-index="0">
<div className="w-full bg-[#0d0d0d] rounded-xl border border-white/10 shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
                      agent.ts
                    </div>
</div>
<div className="p-6 font-mono text-xs md:text-sm text-neutral-400 space-y-3 leading-loose">
<div className="flex gap-4">
<span className="text-neutral-700 select-none">1</span>
<span>
<span className="text-purple-400">import</span>
                        { Agent }
                        <span className="text-purple-400">from</span>
<span className="text-green-400">'@fluxloop/sdk'</span>
                        ;
                      </span>
</div>
<div className="flex gap-4">
<span className="text-neutral-700 select-none">2</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="text-neutral-700 select-none">3</span>
<span className="bg-indigo-500/10 text-indigo-300 px-1 rounded -ml-1">
<span className="text-indigo-400">@fluxloop.agent</span>
                        ({
                      </span>
</div>
<div className="flex gap-4">
<span className="text-neutral-700 select-none">4</span>
<span className="pl-4">
                        name:
                        <span className="text-green-400">'booking-assistant'</span>
                        ,
                      </span>
</div>
<div className="flex gap-4">
<span className="text-neutral-700 select-none">5</span>
<span className="pl-4">
                        model:
                        <span className="text-green-400">'gpt-4-turbo'</span>
</span>
</div>
<div className="flex gap-4">
<span className="text-neutral-700 select-none">6</span>
<span>})</span>
</div>
<div className="flex gap-4">
<span className="text-neutral-700 select-none">7</span>
<span>
<span className="text-purple-400">export class</span>
<span className="text-yellow-100">BookingAgent</span>
                        {
                      </span>
</div>
</div>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/20 blur-[60px] rounded-full"></div>
</div>

<div className="visual-content absolute inset-0 p-8 flex flex-col items-center justify-center transition-all duration-700 ease-out" data-index="1">
<div className="relative w-full max-w-sm">
<div className="relative z-20 bg-neutral-900 border border-white/20 rounded-full px-6 py-4 shadow-xl flex items-center justify-between mb-12">
<span className="text-sm text-white">
                      Book a flight to Tokyo
                    </span>
<div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-14 w-[1px] h-8 bg-gradient-to-b from-white/20 to-transparent"></div>
<div className="space-y-3 relative z-10">
<div className="bg-surface border border-white/5 p-3 rounded-xl flex items-center gap-3 animate-fade-up" style={{animationDelay: '0.1s'}}>
<span className="text-[10px] font-mono text-neutral-500 uppercase">
                        Verbose
                      </span>
<span className="text-xs text-neutral-300">
                        I would strictly like to book a flight immediately...
                      </span>
</div>
<div className="bg-surface border border-white/5 p-3 rounded-xl flex items-center gap-3 animate-fade-up" style={{animationDelay: '0.2s'}}>
<span className="text-[10px] font-mono text-neutral-500 uppercase">
                        Edge
                      </span>
<span className="text-xs text-neutral-300">
                        Flight to NRT, pay with crypto?
                      </span>
</div>
<div className="bg-surface border border-white/5 p-3 rounded-xl flex items-center gap-3 animate-fade-up" style={{animationDelay: '0.3s'}}>
<span className="text-[10px] font-mono text-neutral-500 uppercase">
                        Persona
                      </span>
<span className="text-xs text-neutral-300">
                        As a senior citizen, I need assistance...
                      </span>
</div>
</div>
</div>
</div>

<div className="visual-content absolute inset-0 p-8 flex flex-col items-center justify-center transition-all duration-700 ease-out" data-index="2">
<div className="w-full max-w-sm space-y-4">

<div className="bg-[#1a0505] border border-red-500/20 rounded-2xl p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-3 opacity-20">
<svg className="text-red-500" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="15" x2="9" y1="9" y2="15"></line>
<line x1="9" x2="15" y1="9" y2="15"></line>
</svg>
</div>
<div className="flex items-center gap-3 mb-2">
<div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<span className="text-sm font-medium text-red-200">
                        Performance Regression
                      </span>
</div>
<div className="text-xs text-red-400/80 font-mono mb-4">
                      Duration: 5.2s (Threshold: 2s)
                    </div>
</div>

<div className="flex justify-center text-neutral-600">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>

<div className="bg-[#051a0a] border border-emerald-500/20 rounded-2xl p-5">
<div className="flex items-center gap-3 mb-2">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-medium text-emerald-200">
                        Recommended Action
                      </span>
</div>
<div className="text-xs text-emerald-400/80 font-mono">
                      Add index to `flights` table on `destination_id`
                    </div>
</div>
</div>
</div>

<div className="visual-content absolute inset-0 p-8 flex flex-col items-center justify-center transition-all duration-700 ease-out" data-index="3">
<div className="relative w-64 h-64 flex items-center justify-center">

<div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="relative z-10 w-20 h-20 bg-neutral-900 border border-indigo-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
<div className="text-indigo-400">
<svg className="w-8 h-8" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M2 17L12 22L22 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M2 12L12 17L22 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-surface border border-white/10 p-2 rounded-lg shadow-lg">
<svg className="text-blue-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
</div>
<div className="absolute bottom-4 right-4 bg-surface border border-white/10 p-2 rounded-lg shadow-lg">
<svg className="text-emerald-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4 bg-surface border border-white/10 p-2 rounded-lg shadow-lg">
<svg className="text-orange-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
<line stroke="currentColor" stroke-dasharray="4 4" x1="50%" x2="50%" y1="50%" y2="10%"></line>
<line stroke="currentColor" stroke-dasharray="4 4" x1="50%" x2="80%" y1="50%" y2="80%"></line>
<line stroke="currentColor" stroke-dasharray="4 4" x1="50%" x2="20%" y1="50%" y2="80%"></line>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative">

<div className="flex flex-col md:flex-row gap-8 mb-16 gap-x-8 gap-y-8 items-start justify-between">
<div className="max-w-xl">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-4">
            How to install
            <span className="italic font-serif opacity-80">and use FluxLoop.</span>
</h2>
<p className="md:text-base text-sm text-neutral-400">
            From installation to first insights in under 5 minutes. One
            decorator. Instant evaluation. Everything in your IDE.
          </p>
</div>
<div className="hidden md:block text-right">
<div className="text-xs text-neutral-500 font-mono mb-1">
            INFRASTRUCTURE STATUS
          </div>
<div className="flex gap-2 text-xs font-medium text-emerald-500 gap-x-2 gap-y-2 items-center justify-end">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
            Operational
          </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 auto-rows-[minmax(300px,auto)] gap-x-6 gap-y-6">

<div className="md:col-span-3 lg:col-span-4 glass overflow-hidden group card-shine flex flex-col rounded-3xl pt-8 pr-8 pb-8 pl-8 relative justify-between" data-installed="true" onmouseenter="handleInstallHover(this)" style={{'--mouse-x': '384px', '--mouse-y': '244.21875px'}}>

<div className="z-10 flex flex-col h-full relative justify-between">
<div className="">

<div className="w-10 h-10 rounded-lg bg-neutral-900/50 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-neutral-500/50 transition-colors duration-300 shadow-inner shadow-white/5">
<svg className="lucide lucide-box text-neutral-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
</div>

<h3 className="text-lg font-medium text-white mb-2 tracking-tight">
                Install Extension
              </h3>
<p className="leading-relaxed text-sm text-neutral-400">
                Search "FluxLoop" in Marketplace. One-click setup. Ready in
                seconds.
              </p>
</div>

<div className="flex w-full h-10 mt-8 relative items-center justify-center">

<button className="install-btn w-full py-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white/50 hover:text-white/80 transition-all duration-300 flex items-center justify-center gap-2 text-xs font-medium backdrop-blur-sm z-10 absolute inset-0">
<svg className="lucide lucide-plus" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
<span className="">Add to VS Code</span>
</button>

<div className="install-progress w-full transition-all duration-300 ease-out transform absolute inset-0">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    Installing...
                  </span>
<span className="progress-num text-[10px] font-mono text-neutral-300">
                    0%
                  </span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden border border-white/5">
<div className="bar-fill w-0 h-full bg-white/80 rounded-full transition-all duration-[2000ms] ease-in-out box-border" style={{width: '100%'}}></div>
</div>
</div>

<div className="install-done w-full transition-all duration-500 ease-out flex items-center gap-3 p-2 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm absolute inset-0">
<div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex flex-col min-w-0">
<span className="text-xs font-medium text-white truncate">
                    Installed
                  </span>
<span className="text-[10px] text-neutral-500 truncate">
                    v2.4.0 active
                  </span>
</div>
<button className="ml-auto text-[10px] font-medium text-white/70 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded transition-colors border border-white/5">
                  Open
                </button>
</div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none overflow-hidden">

<div className="absolute -right-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-neutral-700/20 to-transparent rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-8 glass rounded-3xl p-0 relative overflow-hidden group card-shine min-h-[300px]" style={{'--mouse-x': '129.671875px', '--mouse-y': '284.34375px'}}>
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center z-0">

<div className="group-hover:opacity-100 transition-all duration-700 flex opacity-60 w-full h-full relative perspective-midrange items-center justify-end pr-10">

<div className="absolute w-[140%] h-[140%] bg-neutral-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-75 group-hover:scale-100 pointer-events-none"></div>

<div className="relative w-[280px] bg-[#0c0c0e] border border-white/10 rounded-xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:rotate-x-0 rotate-x-10 group-hover:scale-105 group-hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] origin-bottom group-hover:-translate-y-2">

<div className="h-9 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between backdrop-blur-md">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-red-500/20 transition-colors duration-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-yellow-500/20 transition-colors duration-500"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10 group-hover:bg-green-500/20 transition-colors duration-500"></div>
</div>
<div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest group-hover:text-neutral-400 transition-colors">
                    Settings
                  </div>
</div>

<div className="p-5 space-y-4">

<div className="space-y-1.5">
<div className="flex justify-between items-center">
<label className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">
                        API Key
                      </label>
<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-emerald-500 scale-75">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</span>
</div>
<div className="h-8 bg-black/40 border border-white/5 rounded-lg flex items-center px-3 relative overflow-hidden group/input">
<svg className="text-neutral-600 mr-2" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
</svg>
<div className="flex gap-0.5 mt-0.5 opacity-40 group-hover:opacity-100 transition-opacity duration-500">
<div className="w-1 h-1 rounded-full bg-white"></div>
<div className="w-1 h-1 rounded-full bg-white"></div>
<div className="w-1 h-1 rounded-full bg-white"></div>
<div className="w-1 h-1 rounded-full bg-white"></div>
<div className="w-1 h-1 rounded-full bg-white"></div>
<div className="w-1 h-1 rounded-full bg-white"></div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-beam"></div>
</div>
</div>

<div className="space-y-1.5">
<div className="flex justify-between items-center">
<label className="text-[10px] font-medium text-neutral-500 uppercase tracking-wider">
                        Workspace
                      </label>
<span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-emerald-500 scale-75">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-2">
<svg className="text-neutral-500 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path>
</svg>
<span className="text-[10px] font-mono text-neutral-400 group-hover:text-neutral-200 transition-colors">
                          /src/agents
                        </span>
</div>
</div>
</div>

<div className="pt-3 border-t border-white/5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-white/5">
<svg className="text-neutral-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
</div>
<span className="text-[10px] text-neutral-500 font-medium">
                        Auto-Sync
                      </span>
</div>
<div className="relative w-7 h-4 rounded-full bg-neutral-800 transition-colors duration-300 group-hover:bg-emerald-500/20 group-hover:border group-hover:border-emerald-500/30 border border-transparent">
<div className="absolute top-0.5 left-0.5 w-3 h-3 bg-neutral-600 rounded-full transition-all duration-300 group-hover:translate-x-3 group-hover:bg-emerald-400 shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gradient-to-t from-background to-transparent z-10 pt-8 pr-8 pb-8 pl-8 absolute right-0 bottom-0 left-0">
<h3 className="text-xl font-medium text-white mb-2">
              Workspace Settings
            </h3>
<p className="text-sm text-neutral-400 max-w-md">
              Set project folder, API key, and CLI. Flux agent guides you
              through integration—just click and wait.
            </p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-6 glass overflow-hidden group card-shine flex flex-col h-[320px] rounded-3xl pt-8 pr-8 pb-8 pl-8 relative justify-between" style={{'--mouse-x': '330px', '--mouse-y': '190.34375px'}}>
<div className="z-20 relative">
<div className="flex mb-6 items-center justify-between">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-indigo-500/20 transition-colors duration-300">
<svg className="lucide lucide-flask-conical w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"></path>
<path d="M8.5 2h7"></path>
<path d="M7 16h10"></path>
</svg>
</div>

<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 border-neutral-800 appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-indigo-600 cursor-pointer border border-indigo-500" htmlFor="toggle"></label>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-2">Playground</h3>
<p className="text-sm text-neutral-400">
              Generate test inputs from one sentence. Flux agent helps integrate
              your code. Run experiments with one click.
            </p>
</div>

<div className="absolute right-0 bottom-0 w-3/5 h-full pointer-events-none opacity-10 group-hover:opacity-60 transition-all duration-500 mask-linear-fade">

<div className="absolute bottom-8 right-8 font-mono text-[10px] text-indigo-300 space-y-2 text-right">
<div className="flex items-center justify-end gap-2 translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-75">
<span className="text-white">const</span>
<span className="text-neutral-400">test</span>
<span className="text-purple-400">=</span>
<span className="text-emerald-400">"edge_case"</span>
                ;
              </div>
<div className="flex items-center justify-end gap-2 translate-x-8 group-hover:translate-x-0 transition-transform duration-500 delay-100">
<span className="text-purple-400">await</span>
<span className="text-blue-300">agent.eval</span>
                (
                <span className="text-neutral-400">test</span>
                );
              </div>
<div className="flex items-center justify-end gap-2 translate-x-12 group-hover:translate-x-0 transition-transform duration-500 delay-150">
<span className="w-1.5 h-3 bg-indigo-500 animate-pulse block"></span>
</div>
</div>

<div className="absolute right-[-20%] bottom-[-20%] w-[80%] h-[80%] bg-indigo-500/10 blur-3xl rounded-full"></div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-6 glass overflow-hidden group card-shine h-[320px] rounded-3xl relative" style={{'--mouse-x': '39.0078125px', '--mouse-y': '249.34375px'}}>
<div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
<span className="ml-2 text-[10px] font-mono text-neutral-500">
              evaluation.json
            </span>
</div>

<div className="z-10 mt-4 pt-8 pr-8 pl-8 relative min-h-[200px]">
<style>
    /* Sequence Animations */
    .hover-sequence-card { 
      opacity: 0; 
      transform: translateY(10px);
    }
    .group:hover .hover-sequence-card { 
      animation: sequence-appear 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; 
    }
    
    .group:hover .seq-delay-1 { animation-delay: 0.05s; }
    .group:hover .seq-delay-2 { animation-delay: 0.1s; }
    .group:hover .seq-delay-3 { animation-delay: 0.15s; }
    .group:hover .seq-delay-4 { animation-delay: 0.2s; }

    @keyframes sequence-appear {
      from { opacity: 0; transform: translateY(10px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    /* Failed Card Selection Animation */
    .card-failed-pulse { border-color: rgba(255,255,255,0.05); }
    .group:hover .card-failed-pulse {
      animation: failed-select 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
    }
    @keyframes failed-select {
      0% { border-color: rgba(255,255,255,0.05); transform: scale(1); background-color: rgba(255,255,255,0.02); }
      50% { transform: scale(1.02); }
      100% { border-color: rgba(248,113,113,0.5); transform: scale(1); background-color: rgba(248,113,113,0.1); box-shadow: 0 0 20px -5px rgba(248,113,113,0.3); }
    }

    /* Summary Reveal Animation */
    .hover-sequence-summary { 
      opacity: 0; 
      transform: translateY(-10px);
      pointer-events: none;
    }
    .group:hover .hover-sequence-summary { 
      animation: summary-reveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards; 
      pointer-events: auto;
    }
    @keyframes summary-reveal {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Hide original content on hover */
    .original-content { transition: opacity 0.2s ease-out, transform 0.3s ease-out; }
    .group:hover .original-content { opacity: 0; transform: scale(0.98); pointer-events: none; }
  </style>

<div className="original-content space-y-5 h-full">

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-0 transition-opacity duration-700" preserveaspectratio="none">
<path d="M0 100 Q 100 80 200 90 T 400 60" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="space-y-1.5">
<div className="flex text-[10px] uppercase font-medium text-neutral-400 tracking-wider justify-between">
<span>Context Recall</span>
<span className="text-emerald-400 font-mono">98%</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[98%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.3)] relative">
<div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white opacity-50"></div>
</div>
</div>
</div>

<div className="space-y-1.5">
<div className="flex justify-between text-[10px] uppercase tracking-wider font-medium text-neutral-400">
<span>Latency</span>
<span className="text-emerald-400 font-mono">45ms</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-[85%] rounded-full shadow-[0_0_8px_rgba(16,185,129,0.3)]"></div>
</div>
</div>

<div className="space-y-1.5">
<div className="flex justify-between text-[10px] uppercase tracking-wider font-medium text-neutral-400">
<span>Safety Check</span>
<span className="text-amber-400 font-mono">Flagged</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-amber-600 to-amber-400 w-[60%] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.3)] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_4px_rgba(255,255,255,0.8)] animate-pulse"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col group-hover:pointer-events-auto pointer-events-none pt-8 pr-8 pl-8 absolute top-0 right-0 bottom-0 left-0">

<div className="grid grid-cols-4 gap-2 mb-4 w-full">

<div className="hover-sequence-card seq-delay-1 bg-white/[0.02] border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center gap-1.5">
<div className="w-6 h-6 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="text-center">
<div className="text-sm font-semibold text-white leading-none mb-0.5">8</div>
<div className="text-[9px] text-neutral-500 font-medium">Success</div>
</div>
</div>

<div className="hover-sequence-card seq-delay-2 bg-white/[0.02] border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center gap-1.5">
<div className="w-6 h-6 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<div className="text-center">
<div className="text-sm font-semibold text-white leading-none mb-0.5">2</div>
<div className="text-[9px] text-neutral-500 font-medium">Marginal</div>
</div>
</div>

<div className="hover-sequence-card seq-delay-3 card-failed-pulse bg-white/[0.02] border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center gap-1.5 relative overflow-hidden">
<div className="w-6 h-6 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center z-10">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<div className="text-center z-10">
<div className="text-sm font-semibold text-white leading-none mb-0.5">4</div>
<div className="text-[9px] text-neutral-500 font-medium">Failed</div>
</div>
</div>

<div className="hover-sequence-card seq-delay-4 bg-white/[0.02] border border-white/5 rounded-xl p-2 flex flex-col items-center justify-center gap-1.5">
<div className="w-6 h-6 rounded-md bg-neutral-500/10 text-neutral-400 flex items-center justify-center">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="text-center">
<div className="text-sm font-semibold text-white leading-none mb-0.5">0</div>
<div className="text-[9px] text-neutral-500 font-medium">Review</div>
</div>
</div>
</div>

<div className="hover-sequence-summary w-full bg-[#050505] border border-red-500/20 rounded-xl p-3 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-red-500/50"></div>
<div className="flex items-start gap-3 pl-2">
<div className="mt-0.5 text-red-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
</div>
<div className="space-y-1">
<div className="text-xs font-medium text-red-200">AssertionError: PII Leak Detected</div>
<div className="text-[10px] text-neutral-400 leading-relaxed font-mono">
            Agent output included plain-text credit card pattern in response body.
          </div>
<div className="pt-1 flex gap-2">
<span className="text-[9px] px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">Critical</span>
<span className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 border border-white/5">Auto-blocked</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/90 to-transparent w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0">
<h3 className="text-lg font-medium text-white">Insights</h3>
<p className="text-sm text-neutral-500">
              Get comprehensive evaluation reports. See what broke, why it
              failed, and how to fix it.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-white/5 border-t pt-32 pb-32 relative">
<div className="z-10 flex flex-col text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8">
          Global Sync
          <span className="text-neutral-500">in milliseconds</span>
</h2>

<div className="opacity-70 w-full h-64 max-w-4xl mt-10 relative">

<div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]">
<div className="absolute inset-0 rounded-full border border-white animate-pulse-ring"></div>
</div>
<div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-neutral-600 rounded-full"></div>
<div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]">
<div className="absolute inset-0 rounded-full border border-white animate-pulse-ring delay-500"></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<path className="opacity-30" d="M250,128 Q500,80 750,150" fill="none" stroke="url(#gradient-line)" stroke-dasharray="6 6" strokeWidth="1"></path>
<defs></defs>
</svg>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-12 text-center w-full max-w-4xl">
<div className="">
<div className="text-3xl font-serif italic text-white mb-1">99.99%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
              Uptime SLA
            </div>
</div>
<div className="">
<div className="text-3xl font-serif italic text-white mb-1">150+</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
              Countries
            </div>
</div>
<div className="">
<div className="text-3xl font-serif italic text-white mb-1">0.05s</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
              TTFT
            </div>
</div>
<div className="">
<div className="text-3xl font-serif italic text-white mb-1">
              Exabyte
            </div>
<div className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono">
              Scale Storage
            </div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t border-b pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="uppercase text-xs text-neutral-500 tracking-widest font-mono mb-12">
          Engineering Partners
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="hover:border-white/10 transition-colors border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-sm text-neutral-300 mb-6">
              "We reduced our inference costs by 40% while improving latency.
              The orchestration layer is simply brilliant."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white font-medium">
                AM
              </div>
<div className="text-xs text-neutral-500">
<span className="text-white font-medium block">Alex M.</span>
                VP Eng @ Vercel
              </div>
</div>
</div>

<div className="hover:border-white/10 transition-colors border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">
              "Aetheris abstracted away the complexity of managing GPU clusters.
              We just push code and it scales."
            </p>
<div className="flex items-center gap-3">
<div className="flex text-xs font-medium text-white bg-neutral-800 w-8 h-8 rounded-full items-center justify-center">
                SJ
              </div>
<div className="text-xs text-neutral-500">
<span className="text-white font-medium block">Sarah J.</span>
                Founder @ Linear
              </div>
</div>
</div>

<div className="p-8 rounded-2xl bg-background border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-1 text-indigo-400 mb-4">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">
              "The security features gave us the confidence to deploy our
              proprietary models in production."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white font-medium">
                DK
              </div>
<div className="text-xs text-neutral-500">
<span className="text-white font-medium block">David K.</span>
                CTO @ Stripe
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden pt-32 pb-12 relative">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col text-center mb-24 items-center">
<h2 className="md:text-6xl text-4xl font-medium text-white tracking-tight mb-8">
            Ready to
            <span className="italic font-serif opacity-80">simulate?</span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center">
<button className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white overflow-hidden text-sm font-medium text-white/80 tracking-tight bg-white/5 h-[54px] rounded-full pt-3 pr-6 pb-3 pl-6 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center" onclick="window.open('https://marketplace.visualstudio.com/items?itemName=fluxloop.fluxloop', '_blank')" role="button" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>

<span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0 pointer-events-none">
<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-1/2 -skew-x-12 transform origin-left"></span>
</span>

<svg className="lucide lucide-download w-[20px] h-[20px] relative z-10" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
<span className="uppercase z-10 text-sm relative">Get Extension</span>
<span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 z-10" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
<button className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border-gradient hover:text-white overflow-hidden text-sm font-medium text-white/80 tracking-tight bg-white/5 h-[54px] rounded-full pt-3 pr-6 pb-3 pl-6 relative backdrop-blur-xl gap-x-2 gap-y-2 items-center justify-center" onclick="window.open('https://github.com/chuckgu/fluxloop', '_blank')" role="button" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>

<span className="absolute inset-0 w-full h-full -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0 pointer-events-none">
<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2 -skew-x-12 transform origin-left"></span>
</span>

<svg className="lucide lucide-github z-10 relative w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path className="" d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
<span className="uppercase z-10 text-sm relative">GitHub</span>
<span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-60 opacity-10 w-[60%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2 z-10" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
<div className="flex flex-col md:flex-row border-white/5 border-t pt-12 gap-x-8 gap-y-8 justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 text-neutral-600">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(82, 82, 82)', width: '20px', height: '20px'}} viewbox="0 0 24 24">
<path className="" d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path>
</svg>
</div>
<span className="text-xs text-neutral-600">© 2025 Fluxloop.</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500 font-medium">
<a className="hover:text-white transition-colors" href="/#">
              X / Twitter
            </a>
<a className="hover:text-white transition-colors" href="https://github.com/chuckgu/fluxloop">
              GitHub
            </a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">License</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
