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
theme: {
extend: {
colors: {
primary: '#FFFFFF',
secondary: '#8A8F98',
accent: '#FF3366',
background: '#030303',
surface: '#0A0A0A',
surfaceHover: '#141414',
border: '#1E1E1E',
borderLight: '#2A2A2A',
},
fontFamily: {
display: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
body: ['Inter', 'system-ui', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
fontSize: {
'xs': 'clamp(0.7rem, 0.8vw, 0.75rem)',
'sm': 'clamp(0.8rem, 1vw, 0.875rem)',
'base': 'clamp(0.9rem, 1.1vw, 1rem)',
'lg': 'clamp(1.1rem, 1.5vw, 1.25rem)',
'xl': 'clamp(1.25rem, 2vw, 1.5rem)',
'2xl': 'clamp(1.5rem, 2.5vw, 2rem)',
'3xl': 'clamp(2rem, 3vw, 2.5rem)',
'h2': 'clamp(3rem, 5vw, 4.5rem)',
'h1': 'clamp(4rem, 8vw, 7.5rem)',
},
spacing: {
'section': 'clamp(6rem, 10vw, 10rem)',
'container': 'clamp(1.5rem, 5vw, 3rem)',
'card': 'clamp(1.5rem, 3vw, 2.5rem)',
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'marquee': 'marquee 40s linear infinite',
'marquee-fast': 'marquee 15s linear infinite',
'scanline': 'scanline 8s linear infinite',
'data-flow': 'dataFlow 2s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
scanline: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' },
},
dataFlow: {
'0%': { transform: 'translateX(-100%)', opacity: '0' },
'50%': { opacity: '1' },
'100%': { transform: 'translateX(100%)', opacity: '0' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                                for(let i=0; i<30; i++) {
                                    let h = Math.floor(Math.random() * 60) + 20;
                                    let isHigh = h > 70;
                                    let classes = isHigh ? 'bg-accent shadow-[0_0_10px_rgba(255,51,102,0.5)]' : 'bg-secondary/20 hover:bg-secondary/40 transition-colors';
                                    document.write(`
                                        <div class="flex-1 relative group h-full flex items-end">
                                            <div class="w-full ${classes} rounded-t-sm" style="height: ${h}%"></div>
                                            <div class="absolute -top-6 left-1/2 -translate-x-1/2 font-mono text-[8px] text-primary opacity-0 group-hover:opacity-100 transition-opacity bg-surface px-1 border border-borderLight z-20">${h}k</div>
                                        </div>
                                    `);
                                }
                            


        document.addEventListener('DOMContentLoaded', () => {

            // --- Scroll Reveal Logic (Intersection Observer) ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-revealed');
                        
                        // Counter animation for numbers
                        if (entry.target.querySelector('.counter-up')) {
                            const counter = entry.target.querySelector('.counter-up');
                            const target = parseInt(counter.getAttribute('data-target'), 10);
                            let current = 0;
                            const increment = target / 50; // speed
                            const format = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
                            
                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = format.format(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = format.format(target);
                                }
                            };
                            updateCounter();
                            counter.classList.remove('counter-up'); // run once
                        }
                        
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-fade').forEach(el => {
                observer.observe(el);
            });

            // --- Text Scramble Hover Effect ---
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_!@#$%^&*()';
            document.querySelectorAll('.scramble-text').forEach(el => {
                const originalText = el.getAttribute('data-text');
                let interval = null;

                el.parentElement.addEventListener('mouseenter', () => {
                    let iteration = 0;
                    clearInterval(interval);
                    
                    interval = setInterval(() => {
                        el.innerText = originalText
                            .split('')
                            .map((letter, index) => {
                                if(index < iteration) return originalText[index];
                                return chars[Math.floor(Math.random() * chars.length)];
                            })
                            .join('');
                        
                        if(iteration >= originalText.length) clearInterval(interval);
                        iteration += 1 / 2;
                    }, 30);
                });

                el.parentElement.addEventListener('mouseleave', () => {
                    clearInterval(interval);
                    el.innerText = originalText;
                });
            });

            // --- ROI Calculator Logic ---
            const slider = document.getElementById('roi-slider');
            const sdrValue = document.getElementById('sdr-value');
            const arrOutput = document.getElementById('arr-output');

            const calculateArr = (sdrCount) => {
                const baseArr = 850000;
                return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(sdrCount * baseArr);
            };

            slider.addEventListener('input', (e) => {
                const val = e.target.value;
                sdrValue.innerText = val;
                
                arrOutput.style.opacity = '0.5';
                arrOutput.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    arrOutput.innerText = calculateArr(val);
                    arrOutput.style.opacity = '1';
                    arrOutput.style.transform = 'scale(1)';
                }, 50);
            });

            // --- Terminal Tabs Logic ---
            const tabBtns = document.querySelectorAll('.tab-btn');
            const termTitle = document.getElementById('term-title');
            const termDesc = document.getElementById('term-desc');
            const copyData = {
                'sys-ingest': { title: '[ DEEP INTENT SCRAPING ]', desc: 'Continuously monitors 40+ data sources to identify buying intent before your competitors know the account exists.' },
                'sys-synth': { title: '[ LLM SYNTHESIS ]', desc: 'Generates hyper-personalized sequences using proprietary models trained exclusively on top-decile sales data.' },
                'sys-deploy': { title: '[ AUTONOMOUS DEPLOYMENT ]', desc: 'Manages inbox placement, handles objections in real-time, and routes booked meetings directly to your team.' }
            };

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Reset styling
                    tabBtns.forEach(b => {
                        b.classList.remove('text-accent', 'border-b', 'border-accent');
                        b.classList.add('text-secondary');
                    });
                    btn.classList.add('text-accent', 'border-b', 'border-accent');
                    btn.classList.remove('text-secondary');

                    // Switch tabs
                    const targetId = btn.getAttribute('data-target');
                    document.querySelectorAll('[id^="sys-"]').forEach(el => {
                        el.classList.remove('opacity-100');
                        el.classList.add('opacity-0', 'pointer-events-none');
                    });
                    document.getElementById(targetId).classList.remove('opacity-0', 'pointer-events-none');
                    document.getElementById(targetId).classList.add('opacity-100');

                    // Update Text
                    termTitle.innerText = copyData[targetId].title;
                    termDesc.innerText = copyData[targetId].desc;
                });
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
      
<div className="bg-noise"></div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-2xl border-b border-borderLight/50 reveal-fade">
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
<div className="max-w-[140rem] mx-auto px-container h-16 md:h-20 flex items-center justify-between">

<div className="flex items-center gap-6">
<a className="flex items-center gap-2 group" href="#">
<span className="font-display font-semibold tracking-[-0.08em] text-xl uppercase group-hover:text-accent transition-colors duration-500">Oktane</span>
</a>
<div className="hidden lg:flex items-center gap-3 px-3 py-1 border border-borderLight bg-surface rounded-full">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
</span>
<span className="font-mono text-[9px] text-secondary uppercase tracking-widest">Sys.Active // V_4.2</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 bg-surface/50 px-6 py-2 border border-borderLight rounded-full backdrop-blur-md">
<a className="font-mono text-[10px] text-secondary hover:text-primary transition-colors uppercase tracking-[0.15em]" href="#architecture">Architecture</a>
<a className="font-mono text-[10px] text-secondary hover:text-primary transition-colors uppercase tracking-[0.15em]" href="#data-models">Data Models</a>
<a className="font-mono text-[10px] text-secondary hover:text-primary transition-colors uppercase tracking-[0.15em]" href="#roi">ROI Analysis</a>
<a className="font-mono text-[10px] text-secondary hover:text-primary transition-colors uppercase tracking-[0.15em]" href="#deployment">Deployment</a>
</div>
<button className="relative inline-flex items-center justify-center px-6 py-2.5 font-mono text-[10px] font-semibold text-primary uppercase tracking-[0.15em] group overflow-hidden border border-borderLight hover:border-accent transition-colors duration-500 rounded-sm">
<div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
<span className="relative z-10 scramble-text" data-text="Initialize">Initialize</span>
</button>
</div>
</nav>
<main className="relative z-10 flex-grow pt-24">

<section className="relative min-h-[90vh] flex flex-col items-center justify-center px-container overflow-hidden pt-12 pb-24 border-b border-borderLight">

<div className="absolute inset-0 bg-grid-dense opacity-20 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
<div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-accent/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

<div className="hidden 2xl:flex flex-col justify-between absolute left-8 top-32 bottom-32 w-48 font-mono text-[9px] text-secondary tracking-widest uppercase border-l border-borderLight pl-4 reveal-fade delay-300">
<div className="space-y-6">
<div>
<div className="text-primary mb-1">LATENCY</div>
<div className="flex items-center gap-2"><div className="h-px w-4 bg-accent"></div> 12.4ms</div>
</div>
<div>
<div className="text-primary mb-1">DATA_STREAM</div>
<div className="text-accent animate-pulse">LIVE_INGEST</div>
</div>
</div>
<div className="space-y-2 opacity-50">
<div>[SYS] INIT SECURE_TUNNEL</div>
<div>[SYS] BYPASS_RATE: 99.9%</div>
<div>[SYS] SYNTHETIC_GEN: TRUE</div>
</div>
</div>
<div className="hidden 2xl:flex flex-col justify-between absolute right-8 top-32 bottom-32 w-48 font-mono text-[9px] text-secondary tracking-widest uppercase text-right border-r border-borderLight pr-4 reveal-fade delay-300">
<div>
<div className="mb-4">OP_MODE // <span className="text-primary">AUTONOMOUS</span></div>
<div className="flex flex-col gap-1 items-end">
<div className="h-1 w-full bg-borderLight"><div className="h-full bg-accent w-[85%]"></div></div>
<div className="h-1 w-full bg-borderLight"><div className="h-full bg-primary w-[60%]"></div></div>
<div className="h-1 w-full bg-borderLight"><div className="h-full bg-secondary w-[90%]"></div></div>
</div>
</div>
<div className="rotate-180" style={{writingMode: 'vertical-rl'}}>
                    SYNTHETIC_REVENUE_ARCHITECTURE_V_4
                </div>
</div>

<div className="text-center w-full max-w-6xl relative z-10 flex flex-col items-center">
<div className="reveal-scale">
<span className="font-mono text-[10px] text-primary tracking-[0.2em] mb-8 py-1.5 px-4 border border-borderLight bg-surface/80 backdrop-blur-md inline-flex items-center gap-3">
<iconify-icon className="text-accent" icon="solar:cpu-linear"></iconify-icon>
                        [NODE_001: ARCHITECTURE_ONLINE]
                    </span>
</div>
<h1 className="font-display text-h1 font-semibold tracking-[-0.05em] leading-[0.85] text-glow mb-8 uppercase reveal-up delay-100">
                    Outbound is dead.<br/>
<span className="text-secondary/60">Long live the algorithm.</span>
</h1>
<p className="font-body text-base md:text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-12 reveal-up delay-200">
                    Replace underperforming SDRs with an autonomous architecture that identifies, engages, and converts pipeline at <strong className="text-primary font-normal">100x human capacity</strong>. Stop hiring. Start scaling ruthlessly.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-6 reveal-up delay-300 w-full sm:w-auto">
<button className="relative w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 font-mono text-xs font-semibold text-primary uppercase tracking-[0.15em] bg-surface border border-borderLight group hover:border-accent transition-colors duration-500 overflow-hidden box-glow">
<div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
<div className="ui-corner ui-corner-tl"></div><div className="ui-corner ui-corner-tr"></div>
<div className="ui-corner ui-corner-bl"></div><div className="ui-corner ui-corner-br"></div>
<span className="relative z-10 transition-colors duration-300 flex items-center gap-3 scramble-text" data-text="Deploy Architecture">
                            Deploy Architecture
                        </span>
<iconify-icon className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="font-mono text-[10px] text-secondary hover:text-primary transition-colors flex items-center justify-center gap-2 uppercase tracking-[0.15em] py-4 group w-full sm:w-auto border-b border-transparent hover:border-primary">
<iconify-icon className="text-lg group-hover:text-accent transition-colors" icon="solar:play-circle-linear"></iconify-icon>
<span className="scramble-text" data-text="Access System Logs">Access System Logs</span>
</button>
</div>
</div>

<div className="w-full max-w-7xl mt-24 relative z-20 reveal-up delay-300">
<div className="absolute -inset-4 bg-gradient-to-b from-accent/5 to-transparent blur-2xl -z-10"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-borderLight p-px shadow-[0_20px_80px_rgba(0,0,0,0.8)] border border-borderLight">

<div className="col-span-full h-10 bg-surface flex items-center px-4 justify-between border-b border-borderLight">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-borderLight"></div>
<div className="w-2.5 h-2.5 rounded-full bg-borderLight"></div>
<div className="w-2.5 h-2.5 rounded-full bg-borderLight"></div>
</div>
<div className="w-px h-4 bg-borderLight"></div>
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase">OKTANE_CORE // TERMINAL</div>
</div>
<div className="font-mono text-[9px] text-accent tracking-widest uppercase flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div> Live
                        </div>
</div>

<div className="col-span-1 md:col-span-3 bg-surface p-6 flex flex-col gap-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
<div className="relative z-10 space-y-8">
<div>
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase mb-2">Active_Agents</div>
<div className="font-display text-4xl font-semibold tracking-tight">1,024</div>
</div>
<div>
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase mb-2">Pipeline_Gen_24H</div>
<div className="font-display text-4xl font-semibold tracking-tight text-accent counter-up" data-target="4250000">$0</div>
</div>
<div className="space-y-4 pt-4 border-t border-borderLight">
<div>
<div className="flex justify-between font-mono text-[9px] text-secondary mb-1"><span>INTENT_MATCH</span><span>98%</span></div>
<div className="h-0.5 w-full bg-borderLight overflow-hidden"><div className="h-full bg-accent w-[98%]"></div></div>
</div>
<div>
<div className="flex justify-between font-mono text-[9px] text-secondary mb-1"><span>CONVERSION_PROB</span><span>84%</span></div>
<div className="h-0.5 w-full bg-borderLight overflow-hidden"><div className="h-full bg-primary w-[84%]"></div></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-9 bg-[#0A0A0A] p-6 relative overflow-hidden flex flex-col">
<div className="absolute inset-0 bg-grid-dense opacity-20 pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-start mb-12">
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase border border-borderLight px-2 py-1 bg-background/50 backdrop-blur">
                                INGESTION_RATE_OVER_TIME
                            </div>
<div className="flex gap-2">
<div className="w-8 h-8 border border-borderLight flex items-center justify-center text-secondary"><iconify-icon icon="solar:maximize-linear"></iconify-icon></div>
</div>
</div>

<div className="flex-grow flex items-end gap-1 sm:gap-2 relative z-10 h-48 sm:h-64 mt-auto">
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-borderLight"></div>
<div className="absolute bottom-1/2 left-0 w-full h-[1px] bg-borderLight border-dashed border-b border-t-0"></div>

</div>
</div>
</div>
</div>
</section>

<section className="py-6 border-b border-borderLight bg-background relative overflow-hidden flex items-center reveal-fade">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
<div className="px-container shrink-0 z-20 bg-background flex items-center gap-4 pr-8 relative">
<div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
<span className="font-mono text-[9px] text-secondary tracking-[0.2em] uppercase">Architecting growth for market leaders</span>
<div className="w-px h-6 bg-borderLight ml-4 hidden sm:block"></div>
</div>
<div className="flex overflow-hidden relative w-full opacity-50">
<div className="flex animate-marquee-fast whitespace-nowrap gap-16 items-center">

<span className="font-display font-semibold text-xl tracking-tighter uppercase">Vercel</span>
<span className="font-display font-semibold text-xl tracking-tighter uppercase">Ramp</span>
<span className="font-display font-semibold text-xl tracking-tighter uppercase">Linear</span>
<span className="font-display font-semibold text-xl tracking-tighter uppercase">Retool</span>
<span className="font-display font-semibold text-xl tracking-tighter uppercase">Raycast</span>
<span className="font-display font-semibold text-xl tracking-tighter uppercase">Vercel</span>
<span className="font-display font-semibold text-xl tracking-tighter uppercase">Ramp</span>
<span className="font-display font-semibold text-xl tracking-tighter uppercase">Linear</span>
<span className="font-display font-semibold text-xl tracking-tighter uppercase">Retool</span>
<span className="font-display font-semibold text-xl tracking-tighter uppercase">Raycast</span>
</div>
</div>
</section>

<section className="py-section px-container relative bg-[#050505]" id="architecture">
<div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-borderLight text-right hidden lg:block">
                SEC_002<br/>INEFFICIENCY_MATRIX
            </div>
<div className="max-w-[140rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">

<div className="lg:col-span-5 lg:sticky lg:top-32 pr-0 lg:pr-12 reveal-up">
<div className="inline-flex items-center gap-2 mb-6 border border-borderLight px-3 py-1 bg-surface">
<div className="w-1.5 h-1.5 bg-accent"></div>
<span className="font-mono text-[9px] text-secondary tracking-[0.2em] uppercase">[DATA_002: SYSTEM_FAILURE]</span>
</div>
<h2 className="font-display text-h2 font-semibold tracking-[-0.04em] leading-[0.9] mb-8">
                        Your human capital is bleeding revenue.
                    </h2>
<p className="font-body text-base text-secondary leading-relaxed mb-8">
                        You pay $80k base for reps to spend 6 hours a day copying data from LinkedIn to Salesforce. It is a fundamental misallocation of resources. Oktane reclaims those hours instantly, executing perfectly at scale.
                    </p>
<div className="flex gap-4 font-mono text-[9px] text-primary uppercase tracking-widest border-t border-borderLight pt-6">
<div className="flex-1">
<div className="text-secondary mb-1">HUMAN_CAPACITY</div>
<div>~40 Leads/Day</div>
</div>
<div className="w-px bg-borderLight"></div>
<div className="flex-1">
<div className="text-secondary mb-1">OKTANE_CAPACITY</div>
<div className="text-accent">14,000 Leads/Sec</div>
</div>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="col-span-1 sm:col-span-2 bg-surface border border-borderLight p-card relative group hover:border-accent/50 transition-colors duration-500 overflow-hidden reveal-up delay-100 card-chamfer">
<div className="absolute inset-0 bg-grid opacity-10"></div>
<div className="ui-corner ui-corner-tl"></div><div className="ui-corner ui-corner-tr"></div>
<div className="ui-corner ui-corner-bl"></div><div className="ui-corner ui-corner-br"></div>
<div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
<div className="flex-1">
<div className="w-10 h-10 border border-borderLight flex items-center justify-center text-accent mb-6 bg-background">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase mb-2">METRIC_01 // TIME_SINK</div>
<h3 className="font-display text-2xl font-semibold tracking-tight">73% Wasted Hours</h3>
<p className="text-sm text-secondary mt-2 max-w-sm">Time spent on non-revenue generating data entry and list building.</p>
</div>

<div className="w-full sm:w-48 h-24 border border-borderLight bg-background flex items-center justify-center relative overflow-hidden shrink-0">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-accent/30 relative">
<div className="absolute top-1/2 left-0 w-8 h-8 -translate-y-1/2 bg-accent/20 border border-accent rounded-full animate-[marquee_2s_linear_infinite]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-surface border border-borderLight p-card relative group hover:border-primary transition-colors duration-500 reveal-up delay-200">
<div className="ui-corner ui-corner-tl"></div><div className="ui-corner ui-corner-tr"></div>
<div className="ui-corner ui-corner-bl"></div><div className="ui-corner ui-corner-br"></div>
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase mb-6 flex justify-between">
<span>METRIC_02</span>
<span className="text-accent">CRITICAL</span>
</div>
<h3 className="font-display text-4xl font-semibold tracking-tight mb-2">14%</h3>
<p className="font-mono text-xs text-primary mb-4 uppercase tracking-wider">Human Error Rate</p>

<div className="h-12 w-full flex items-end gap-1 opacity-50 group-hover:opacity-100 transition-opacity">
<div className="w-full h-px bg-borderLight relative">
<div className="absolute bottom-0 left-[20%] w-[10%] h-4 bg-accent"></div>
<div className="absolute bottom-0 left-[45%] w-[5%] h-8 bg-accent"></div>
<div className="absolute bottom-0 left-[70%] w-[15%] h-2 bg-accent"></div>
</div>
</div>
</div>

<div className="bg-surface border border-borderLight p-card relative group hover:border-primary transition-colors duration-500 reveal-up delay-300 flex flex-col justify-between">
<div className="ui-corner ui-corner-tl"></div><div className="ui-corner ui-corner-tr"></div>
<div className="ui-corner ui-corner-bl"></div><div className="ui-corner ui-corner-br"></div>
<div>
<div className="font-mono text-[9px] text-secondary tracking-widest uppercase mb-6 flex justify-between">
<span>METRIC_03</span>
<span>SIGNAL_LOSS</span>
</div>
<h3 className="font-display text-4xl font-semibold tracking-tight mb-2">89%</h3>
<p className="font-mono text-xs text-primary mb-4 uppercase tracking-wider">Missed Intent Signals</p>
</div>
<div className="relative w-full h-16 border border-borderLight overflow-hidden flex items-center justify-center mt-4">

<div className="w-full h-full border border-accent/20 rounded-full scale-150 absolute"></div>
<div className="w-1/2 h-full bg-gradient-to-r from-transparent to-accent/30 origin-left animate-[spin_3s_linear_infinite] absolute left-1/2"></div>
<div className="w-1.5 h-1.5 bg-accent rounded-full relative z-10 shadow-[0_0_10px_#FF3366]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section border-y border-borderLight relative overflow-hidden bg-background" id="data-models">
<div className="absolute inset-0 bg-noise z-0"></div>
<div className="max-w-[140rem] mx-auto px-container flex flex-col items-center text-center relative z-10 reveal-up">
<div className="inline-flex flex-col items-center mb-16">
<span className="font-mono text-[9px] text-secondary tracking-[0.2em] mb-4 border border-borderLight px-3 py-1 bg-surface">[UI_REVEAL_003: CORE_LOGIC]</span>
<h2 className="font-display text-h2 font-semibold tracking-[-0.04em] max-w-3xl leading-none">
                        Engineered for asymmetric output.
                    </h2>
</div>

<div className="w-full max-w-6xl bg-surface border border-borderLight flex flex-col shadow-[0_30px_100px_rgba(0,0,0,0.5)] card-chamfer relative group">
<div className="ui-corner ui-corner-tl"></div><div className="ui-corner ui-corner-tr"></div>
<div className="ui-corner ui-corner-bl"></div><div className="ui-corner ui-corner-br"></div>

<div className="h-12 border-b border-borderLight flex items-center px-4 bg-background">
<div className="flex gap-4 items-center flex-1">
<button className="tab-btn active text-[10px] font-mono tracking-widest uppercase text-accent border-b border-accent py-3" data-target="sys-ingest">01_Ingest</button>
<button className="tab-btn text-[10px] font-mono tracking-widest uppercase text-secondary hover:text-primary transition-colors py-3" data-target="sys-synth">02_Synthesize</button>
<button className="tab-btn text-[10px] font-mono tracking-widest uppercase text-secondary hover:text-primary transition-colors py-3" data-target="sys-deploy">03_Deploy</button>
</div>
<div className="flex gap-2 text-secondary">
<div className="w-3 h-3 border border-borderLight flex justify-center items-center text-[8px]">-</div>
<div className="w-3 h-3 border border-borderLight flex justify-center items-center text-[8px]">□</div>
<div className="w-3 h-3 border border-borderLight flex justify-center items-center text-[8px]">×</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 h-auto md:h-[500px] relative">

<div className="border-r border-borderLight p-6 bg-[#050505] flex flex-col justify-between">
<div>
<h4 className="font-mono text-xs text-primary mb-4" id="term-title">[ DEEP INTENT SCRAPING ]</h4>
<p className="text-sm text-secondary leading-relaxed" id="term-desc">
                                    Continuously monitors 40+ data sources to identify buying intent before your competitors know the account exists.
                                </p>
</div>
<div className="mt-8 pt-6 border-t border-borderLight font-mono text-[9px] text-secondary space-y-2">
<div className="flex justify-between"><span>STATUS:</span> <span className="text-accent">EXECUTING</span></div>
<div className="flex justify-between"><span>THREADS:</span> <span className="text-primary">256</span></div>
<div className="flex justify-between"><span>MEMORY:</span> <span className="text-primary">12.4GB / 64GB</span></div>
</div>
</div>

<div className="md:col-span-3 relative overflow-hidden bg-background">
<div className="absolute inset-0 bg-grid-dense opacity-10"></div>

<div className="absolute inset-0 p-6 flex flex-col transition-opacity duration-500 opacity-100 z-10" id="sys-ingest">
<div className="font-mono text-[10px] text-secondary mb-4">// Live Execution Log</div>
<div className="flex-grow bg-surface border border-borderLight p-4 font-mono text-[10px] leading-relaxed overflow-hidden relative">
<div className="text-secondary/50 select-none absolute left-4 top-4 bottom-4 flex flex-col text-right pr-4 border-r border-borderLight">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
</div>
<div className="pl-12 text-secondary space-y-1">
<p><span className="text-accent">async function</span> identifySignals(target) {</p>
<p className="pl-4">const stream = await <span className="text-primary">Oktane.connect</span>(target.url);</p>
<p className="pl-4">while (stream.active) {</p>
<p className="pl-8">let chunk = await stream.read();</p>
<p className="pl-8">if (chunk.intentScore &gt; 0.85) {</p>
<p className="pl-12 text-accent bg-accent/10 py-px">pipeline.push(chunk); // Matched High Intent</p>
<p className="pl-8">}</p>
<p className="pl-4">}</p>
</div>
</div>
</div>

<div className="absolute inset-0 p-6 flex flex-col transition-opacity duration-500 opacity-0 z-0 pointer-events-none" id="sys-synth">
<div className="font-mono text-[10px] text-secondary mb-4">// LLM Synthesis Matrix</div>
<div className="flex-grow flex items-center justify-center p-8">
<div className="w-full max-w-lg border border-borderLight bg-surface p-6 relative">
<div className="absolute top-0 left-0 w-full h-px bg-accent/50 shadow-[0_0_10px_#FF3366] animate-[scanline_3s_ease-in-out_infinite]"></div>
<div className="space-y-4">
<div className="h-2 bg-borderLight w-1/4"></div>
<div className="h-2 bg-borderLight w-full"></div>
<div className="h-2 bg-borderLight w-5/6"></div>
<div className="pt-4 border-t border-borderLight mt-4">
<div className="font-body text-sm text-primary leading-relaxed bg-accent/5 inline-block border-l-2 border-accent pl-4 py-2">
                                                    "Noticed your recent series B led by a16z. Scaling SDRs post-funding usually breaks unit economics. We automate it."
                                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 p-6 flex flex-col transition-opacity duration-500 opacity-0 z-0 pointer-events-none" id="sys-deploy">
<div className="font-mono text-[10px] text-secondary mb-4">// Outbound Topology</div>
<div className="flex-grow grid grid-cols-3 gap-4">
<div className="border border-borderLight bg-surface p-4 flex flex-col justify-between group hover:border-accent transition-colors">
<div className="font-mono text-[9px] text-accent mb-4">AE_CALENDAR</div>
<div className="font-display text-2xl">Meeting Set</div>
<div className="text-[10px] text-secondary mt-2">Acme Corp // 14:00</div>
</div>
<div className="border border-borderLight bg-surface p-4 flex flex-col justify-between group hover:border-primary transition-colors">
<div className="font-mono text-[9px] text-secondary mb-4">FOLLOW_UP_NODE</div>
<div className="font-display text-2xl text-secondary">Awaiting</div>
<div className="text-[10px] text-secondary mt-2">GlobalTech // T+2 Days</div>
</div>
<div className="border border-accent bg-accent/5 p-4 flex flex-col justify-between group shadow-[0_0_20px_rgba(255,51,102,0.1)]">
<div className="font-mono text-[9px] text-accent mb-4">AE_CALENDAR</div>
<div className="font-display text-2xl text-primary">Meeting Set</div>
<div className="text-[10px] text-primary mt-2">Stark Ind // 16:30</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section px-container relative bg-surface border-b border-borderLight" id="roi">
<div className="max-w-[140rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-up">
<div className="inline-flex items-center gap-2 mb-6 border border-borderLight px-3 py-1 bg-background">
<div className="w-1.5 h-1.5 bg-accent"></div>
<span className="font-mono text-[9px] text-secondary tracking-[0.2em] uppercase">[METRIC_004: PROJECTION]</span>
</div>
<h2 className="font-display text-h2 font-semibold tracking-[-0.04em] mb-6">
                        Calculate your synthetic advantage.
                    </h2>
<p className="font-body text-base text-secondary mb-12 max-w-lg">
                        Input your current human headcount to model the immediate ARR impact of transitioning to an autonomous revenue architecture.
                    </p>

<div className="space-y-4 border-l border-borderLight pl-6 font-mono text-[10px] uppercase tracking-widest text-secondary">
<div className="flex items-center gap-4"><iconify-icon className="text-accent text-sm" icon="solar:check-circle-linear"></iconify-icon> Zero Overhead Costs</div>
<div className="flex items-center gap-4"><iconify-icon className="text-accent text-sm" icon="solar:check-circle-linear"></iconify-icon> 24/7 Continuous Execution</div>
<div className="flex items-center gap-4"><iconify-icon className="text-accent text-sm" icon="solar:check-circle-linear"></iconify-icon> Infinite Scalability</div>
</div>
</div>

<div className="bg-background border border-borderLight p-8 md:p-12 card-chamfer relative reveal-up delay-200 group hover:border-accent/30 transition-colors duration-500">
<div className="ui-corner ui-corner-tl"></div><div className="ui-corner ui-corner-tr"></div>
<div className="ui-corner ui-corner-bl"></div><div className="ui-corner ui-corner-br"></div>
<div className="absolute top-4 right-4 font-mono text-[8px] text-secondary text-right tracking-widest uppercase">
                        MODEL: V_4.0.1<br/>STATUS: READY
                    </div>
<div className="space-y-12 mt-4">

<div className="bg-surface border border-borderLight p-6 relative">
<div className="flex justify-between items-end mb-6">
<label className="font-mono text-[10px] text-secondary uppercase tracking-widest">SDR Headcount Replaced</label>
<div className="font-display text-4xl font-semibold text-primary" id="sdr-value">5</div>
</div>
<div className="relative pt-2 pb-4">
<input className="w-full relative z-20" id="roi-slider" max="50" min="1" type="range" value="5"/>

<div className="absolute top-6 left-0 w-full flex justify-between px-1 pointer-events-none z-10 opacity-50">
<div className="h-2 w-px bg-borderLight"></div><div className="h-2 w-px bg-borderLight"></div>
<div className="h-2 w-px bg-borderLight"></div><div className="h-2 w-px bg-borderLight"></div>
<div className="h-2 w-px bg-borderLight"></div>
</div>
</div>
</div>

<div className="relative p-8 border border-accent/30 bg-accent/5 overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="absolute top-0 left-0 w-full h-px bg-accent shadow-[0_0_20px_#FF3366]"></div>
<div className="relative z-10 flex flex-col">
<div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
<div className="w-2 h-2 bg-accent animate-pulse"></div>
                                    Projected Net New ARR
                                </div>
<div className="font-display text-5xl md:text-7xl font-semibold text-primary tracking-tighter" id="arr-output">
                                    $4,250,000
                                </div>
<div className="font-mono text-[9px] text-secondary mt-4 uppercase tracking-widest">
                                    Calculated using base conversion matrix metrics
                                </div>
</div>
</div>
<button className="w-full relative inline-flex items-center justify-center px-8 py-5 font-mono text-xs font-semibold text-background uppercase tracking-[0.15em] bg-primary group overflow-hidden box-glow card-chamfer-reverse hover:bg-white transition-colors">
<span className="relative z-10 flex items-center gap-3">
                                Claim This Revenue
                                <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</div>
</section>

<section className="py-section relative overflow-hidden bg-[#020202]" id="deployment">
<div className="px-container max-w-[140rem] mx-auto mb-20 relative z-10 text-center reveal-up">
<span className="font-mono text-[9px] text-secondary tracking-[0.2em] mb-4 block uppercase">[ARCH_005: INTEGRATION]</span>
<h2 className="font-display text-h2 font-semibold tracking-[-0.04em] leading-none mb-6">
                    Integration takes minutes.
                </h2>
<p className="font-body text-base text-secondary max-w-xl mx-auto">
                    No messy implementations. Auth with your CRM, define your guardrails, and activate.
                </p>
</div>

<div className="relative w-full overflow-x-auto pb-16 hide-scrollbar reveal-fade delay-200">
<div className="min-w-[1200px] max-w-[140rem] mx-auto px-container flex items-center justify-between relative py-8">

<div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 h-px bg-borderLight z-0">
<div className="absolute top-0 left-0 w-32 h-[2px] bg-accent shadow-[0_0_10px_#FF3366] animate-data-flow"></div>
<div className="absolute top-0 left-1/3 w-32 h-[2px] bg-primary shadow-[0_0_10px_#FFF] animate-data-flow delay-200"></div>
</div>

<div className="relative z-10 flex flex-col items-center gap-6 group">
<div className="w-24 h-24 bg-surface border border-borderLight flex items-center justify-center rotate-45 group-hover:border-primary transition-all duration-500 shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-3xl -rotate-45 text-secondary group-hover:text-primary transition-colors" icon="solar:database-linear"></iconify-icon>
</div>
<div className="text-center">
<span className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold block mb-1">CRM Auth</span>
<span className="font-mono text-[8px] text-secondary uppercase tracking-widest">1 Click OAuth</span>
</div>
</div>
<div className="relative z-10 flex flex-col items-center gap-6 group">
<div className="w-24 h-24 bg-surface border border-borderLight flex items-center justify-center rotate-45 group-hover:border-primary transition-all duration-500 shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-3xl -rotate-45 text-secondary group-hover:text-primary transition-colors" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<div className="text-center">
<span className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold block mb-1">Guardrails</span>
<span className="font-mono text-[8px] text-secondary uppercase tracking-widest">Define Limits</span>
</div>
</div>

<div className="relative z-10 flex flex-col items-center gap-6 group scale-110 mx-8">
<div className="w-32 h-32 bg-background border border-accent flex items-center justify-center rotate-45 group-hover:scale-105 transition-transform duration-500 shadow-[0_0_40px_rgba(255,51,102,0.15)] relative overflow-hidden">
<div className="absolute inset-0 bg-grid-dense opacity-30 -rotate-45"></div>
<iconify-icon className="text-5xl -rotate-45 text-accent" icon="solar:cpu-bold-duotone"></iconify-icon>
<div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-accent"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-accent"></div>
</div>
<div className="text-center">
<span className="font-mono text-[12px] text-accent uppercase tracking-[0.2em] font-bold block mb-1 text-glow">Oktane Core</span>
<span className="font-mono text-[8px] text-primary uppercase tracking-widest">Autonomous Agent</span>
</div>
</div>
<div className="relative z-10 flex flex-col items-center gap-6 group">
<div className="w-24 h-24 bg-surface border border-borderLight flex items-center justify-center rotate-45 group-hover:border-primary transition-all duration-500 shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-3xl -rotate-45 text-secondary group-hover:text-primary transition-colors" icon="solar:mailbox-linear"></iconify-icon>
</div>
<div className="text-center">
<span className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold block mb-1">Execution</span>
<span className="font-mono text-[8px] text-secondary uppercase tracking-widest">Multi-Channel</span>
</div>
</div>
<div className="relative z-10 flex flex-col items-center gap-6 group">
<div className="w-24 h-24 bg-surface border border-borderLight flex items-center justify-center rotate-45 group-hover:border-primary transition-all duration-500 shadow-xl relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-3xl -rotate-45 text-secondary group-hover:text-primary transition-colors" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<div className="text-center">
<span className="font-mono text-[10px] text-primary uppercase tracking-widest font-bold block mb-1">Conversion</span>
<span className="font-mono text-[8px] text-secondary uppercase tracking-widest">Meetings Set</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-section px-container relative bg-surface border-y border-borderLight">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
<div className="max-w-[140rem] mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-up">
<div>
<span className="font-mono text-[9px] text-secondary tracking-[0.2em] mb-4 block uppercase border border-borderLight px-3 py-1 inline-block bg-background">[PROOF_006: SYSTEM_LOGS]</span>
<h2 className="font-display text-h2 font-semibold tracking-[-0.04em] leading-none">
                            Decrypted feedback.
                        </h2>
</div>
<div className="font-mono text-[9px] text-secondary border border-borderLight px-4 py-2 bg-background flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        VERIFIED_MARKET_LEADERS
                    </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="lg:col-span-2 bg-background border border-borderLight p-8 md:p-12 relative group hover:border-accent transition-colors duration-500 reveal-up delay-100 flex flex-col justify-between min-h-[400px]">
<div className="ui-corner ui-corner-tl"></div><div className="ui-corner ui-corner-tr"></div>
<div className="ui-corner ui-corner-bl"></div><div className="ui-corner ui-corner-br"></div>
<div className="absolute top-8 right-8 flex flex-col items-end gap-2">
<span className="font-mono text-[9px] text-background bg-primary px-2 py-1 uppercase tracking-widest font-bold">[Impact: +340% Pipeline]</span>
<span className="font-mono text-[8px] text-secondary uppercase tracking-widest">ID: 0x8A4B...99F2</span>
</div>
<div>
<iconify-icon className="text-4xl text-borderLight mb-6 block" icon="solar:quote-right-bold"></iconify-icon>
<p className="font-display text-2xl md:text-4xl leading-tight mb-12 text-primary tracking-[-0.02em] max-w-3xl">
                                "We stopped hiring SDRs entirely. Oktane booked 42 enterprise meetings in its first month. We literally had to throttle the system because our AEs couldn't keep up."
                            </p>
</div>
<div className="flex items-center gap-4 pt-6 border-t border-borderLight">
<div className="w-12 h-12 bg-surface border border-borderLight overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 relative">
<div className="absolute inset-0 bg-accent mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity"></div>
<img alt="CRO" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<div className="font-mono">
<div className="text-[11px] font-bold text-primary uppercase tracking-widest">Sarah Jenkins</div>
<div className="text-[9px] text-secondary mt-1 uppercase tracking-widest">CRO, Series C FinTech</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="flex-1 bg-background border border-borderLight p-8 relative group hover:border-primary transition-colors duration-500 reveal-up delay-200 flex flex-col justify-between">
<div>
<span className="font-mono text-[9px] text-secondary border border-borderLight px-2 py-1 bg-surface mb-6 inline-block uppercase tracking-widest">[10x Output]</span>
<p className="font-body text-sm text-secondary leading-relaxed mb-8">
                                    "The synthetic copy is indistinguishable from human writing, but it operates at a scale humans biologically cannot achieve."
                                </p>
</div>
<div className="font-mono pt-4 border-t border-borderLight">
<div className="text-[10px] font-bold text-primary uppercase tracking-widest">VP Growth</div>
<div className="text-[8px] text-secondary mt-1 uppercase tracking-widest">Enterprise SaaS</div>
</div>
</div>
<div className="flex-1 bg-background border border-borderLight p-8 relative group hover:border-primary transition-colors duration-500 reveal-up delay-300 flex flex-col justify-between">
<div>
<span className="font-mono text-[9px] text-secondary border border-borderLight px-2 py-1 bg-surface mb-6 inline-block uppercase tracking-widest">[Zero Error]</span>
<p className="font-body text-sm text-secondary leading-relaxed mb-8">
                                    "It doesn't sleep, it doesn't complain, and it never makes a data entry error. Pure leverage."
                                </p>
</div>
<div className="font-mono pt-4 border-t border-borderLight">
<div className="text-[10px] font-bold text-primary uppercase tracking-widest">Founder &amp; CEO</div>
<div className="text-[8px] text-secondary mt-1 uppercase tracking-widest">AI Infrastructure</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-container relative flex flex-col items-center justify-center text-center overflow-hidden bg-background border-b border-borderLight">
<div className="absolute inset-0 bg-grid-dense opacity-20 pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-accent/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl w-full border border-borderLight p-12 md:p-24 bg-background/80 backdrop-blur-md card-chamfer reveal-up">
<div className="ui-corner ui-corner-tl"></div><div className="ui-corner ui-corner-tr"></div>
<div className="ui-corner ui-corner-bl"></div><div className="ui-corner ui-corner-br"></div>
<span className="font-mono text-[10px] text-accent tracking-[0.2em] mb-8 block uppercase border border-accent/30 bg-accent/5 inline-block px-4 py-1.5">[INIT_007: DEPLOYMENT_READY]</span>
<h2 className="font-display text-h1 font-semibold tracking-[-0.05em] mb-8 leading-[0.9]">
                    Stop losing deals to teams using Oktane.
                </h2>
<p className="font-body text-lg text-secondary mb-12 max-w-2xl mx-auto">
                    Deploy your first autonomous agent in the next 120 seconds. Zero risk. Infinite upside.
                </p>
<button className="relative inline-flex items-center justify-center px-12 py-6 font-mono text-sm font-semibold text-background uppercase tracking-[0.2em] bg-primary group overflow-hidden box-glow card-chamfer-reverse hover:bg-white transition-colors">
<span className="relative z-10 flex items-center gap-4">
                        Initialize Setup
                        <iconify-icon className="text-xl group-hover:translate-x-2 transition-transform duration-300" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</section>
</main>

<footer className="bg-[#020202] relative z-20 pt-20 pb-8 px-container overflow-hidden">
<div className="absolute top-0 left-0 w-1/4 h-px bg-accent shadow-[0_0_10px_#FF3366] animate-marquee"></div>
<div className="max-w-[140rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20 relative z-10">
<div className="lg:col-span-2 space-y-8">
<a className="flex items-center gap-2 group" href="#">
<span className="font-display font-semibold tracking-[-0.08em] text-2xl uppercase group-hover:text-accent transition-colors duration-500">Oktane</span>
</a>
<p className="font-mono text-[10px] text-secondary leading-relaxed max-w-xs tracking-widest uppercase">
                    Synthetic Revenue Architecture.<br/>Engineered for asymmetric growth.
                </p>
</div>
<div className="space-y-6">
<h4 className="font-mono text-[9px] text-primary font-bold tracking-[0.2em] uppercase border-b border-borderLight pb-3 inline-block">Platform</h4>
<ul className="space-y-4 font-mono text-[10px] text-secondary uppercase tracking-widest">
<li><a className="hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block" href="#">Architecture</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block" href="#">Data Models</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block" href="#">Security</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block" href="#">Pricing</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="font-mono text-[9px] text-primary font-bold tracking-[0.2em] uppercase border-b border-borderLight pb-3 inline-block">Resources</h4>
<ul className="space-y-4 font-mono text-[10px] text-secondary uppercase tracking-widest">
<li><a className="hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block" href="#">Documentation</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block" href="#">API Reference</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block" href="#">Case Studies</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="font-mono text-[9px] text-primary font-bold tracking-[0.2em] uppercase border-b border-borderLight pb-3 inline-block">Company</h4>
<ul className="space-y-4 font-mono text-[10px] text-secondary uppercase tracking-widest">
<li><a className="hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block" href="#">About</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block" href="#">Careers</a></li>
<li><a className="hover:text-primary transition-colors hover:translate-x-1 duration-200 inline-block" href="#">Contact</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="font-mono text-[9px] text-primary font-bold tracking-[0.2em] uppercase border-b border-borderLight pb-3 inline-block">System</h4>
<div className="p-4 border border-borderLight bg-surface font-mono text-[9px] text-secondary uppercase tracking-widest">
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-primary">Operational</span>
</div>
<div>Latency: 12ms</div>
<div>Uptime: 99.99%</div>
</div>
</div>
</div>
<div className="max-w-[140rem] mx-auto pt-8 border-t border-borderLight flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
<p className="font-mono text-[9px] text-secondary uppercase tracking-widest">© 2026 Oktane Systems Inc. // All Rights Reserved.</p>
<div className="font-mono text-[9px] text-secondary uppercase tracking-widest flex gap-6">
<a className="hover:text-primary transition-colors" href="#">Privacy</a>
<a className="hover:text-primary transition-colors" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
