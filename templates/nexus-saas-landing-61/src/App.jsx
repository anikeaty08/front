import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // 1. Vertical Text Clip Slide Down Animation (Letter by Letter)
        const titleText = "Unleash Creativity";
        const titleElement = document.getElementById('hero-title');
        
        // Split text and wrap in spans
        const letters = titleText.split('').map((char, index) => {
            if (char === ' ') return '<span class="inline-block w-4"></span>';
            const delay = 0.5 + (index * 0.05); // Start after 0.5s, stagger by 0.05s
            return `<span class="char-reveal" style="animation-delay: ${delay}s">${char}</span>`;
        }).join('');
        
        titleElement.innerHTML = letters;

        // 2. Animate on View Logic
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // 3. Flashlight Effect Logic
        const flashlightContainer = document.querySelector('.flashlight-group');
        
        flashlightContainer.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.flashlight-card');
            
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 z-0 flex w-full h-full pointer-events-none opacity-20">
<div className="bg-col h-full w-full border-r border-neutral-800 bg-neutral-900/20" style={{animationDelay: '0.0s'}}></div>
<div className="bg-col h-full w-full border-r border-neutral-800 bg-neutral-900/20" style={{animationDelay: '0.1s'}}></div>
<div className="bg-col h-full w-full border-r border-neutral-800 bg-neutral-900/20" style={{animationDelay: '0.2s'}}></div>
<div className="bg-col h-full w-full border-r border-neutral-800 bg-neutral-900/20" style={{animationDelay: '0.3s'}}></div>
<div className="bg-col h-full w-full border-r border-neutral-800 bg-neutral-900/20" style={{animationDelay: '0.4s'}}></div>
<div className="bg-col h-full w-full border-r border-neutral-800 hidden sm:block bg-neutral-900/20" style={{animationDelay: '0.5s'}}></div>
<div className="bg-col h-full w-full border-r border-neutral-800 hidden sm:block bg-neutral-900/20" style={{animationDelay: '0.6s'}}></div>
<div className="bg-col h-full w-full border-r border-neutral-800 hidden md:block bg-neutral-900/20" style={{animationDelay: '0.7s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" style={{}}>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-black rounded-full"></div>
</div>
<span className="text-white font-medium tracking-tight text-sm font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>NEXUS</span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Product</a>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Solutions</a>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Developers</a>
<a className="hover:text-white transition-colors font-geist-mono" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Pricing</a>
</div>
<div className="flex items-center gap-4" style={{}}>
<a className="text-xs font-medium hover:text-white transition-colors hidden sm:block font-geist-mono" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Log in</a>

<button className="beam-wrapper relative group" style={{}}>
<div className="beam-container absolute inset-0 rounded-full"></div>
<div className="relative bg-neutral-800 text-white text-xs font-medium px-4 py-2 rounded-full border border-neutral-700 hover:bg-neutral-700 transition-colors flex items-center gap-2" style={{}}>
<span className="font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Get Access</span>
<svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20" style={{}}>

<div className="max-w-7xl mx-auto px-6 mb-24 md:mb-32" style={{}}>
<div className="max-w-3xl" style={{}}>

<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8 overflow-hidden" id="hero-title" style={{}}><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '0.5s', transition: 'outline 0.1s ease-in-out'}}>U</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '0.55s', transition: 'outline 0.1s ease-in-out'}}>n</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '0.6s', transition: 'outline 0.1s ease-in-out'}}>l</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '0.65s', transition: 'outline 0.1s ease-in-out'}}>e</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '0.7s', transition: 'outline 0.1s ease-in-out'}}>a</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '0.75s', transition: 'outline 0.1s ease-in-out'}}>s</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '0.8s', transition: 'outline 0.1s ease-in-out'}}>h</span><span className="inline-block w-4"></span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '0.9s', transition: 'outline 0.1s ease-in-out'}}>C</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '0.95s', transition: 'outline 0.1s ease-in-out'}}>r</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '1s', transition: 'outline 0.1s ease-in-out'}}>e</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '1.05s', transition: 'outline 0.1s ease-in-out'}}>a</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '1.1s', transition: 'outline 0.1s ease-in-out'}}>t</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '1.15s', transition: 'outline 0.1s ease-in-out'}}>i</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '1.2s', transition: 'outline 0.1s ease-in-out'}}>v</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '1.25s', transition: 'outline 0.1s ease-in-out'}}>i</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '1.3s', transition: 'outline 0.1s ease-in-out'}}>t</span><span className="char-reveal font-geist-mono font-semibold" style={{animationDelay: '1.35s', transition: 'outline 0.1s ease-in-out'}}>y</span></h1>
<p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl reveal-on-scroll is-visible font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Orchestrate your workflow with intelligent automation. Built for teams who demand precision and speed at scale.
                </p>
<div className="mt-10 flex flex-wrap gap-4 reveal-on-scroll is-visible" style={{transitionDelay: '500ms'}}>
<button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Start Building
                        <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
<button className="px-6 py-3 rounded-full text-sm font-medium text-white border border-neutral-800 hover:bg-neutral-900 transition-colors font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Read Documentation
                    </button>
</div>
</div>
</div>

<div className="w-full border-y border-white/5 bg-black/50 py-10 mb-32 relative reveal-on-scroll is-visible">
<div className="marquee-mask w-full overflow-hidden">
<div className="flex w-max animate-marquee gap-16 md:gap-32 items-center">

<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-triangle w-5 h-5" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> VORTEX</span>
<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-circle w-5 h-5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> SPHERE</span>
<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> CUBE</span>
<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-hexagon w-5 h-5" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> POLYGON</span>
<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-diamond w-5 h-5" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg> PRISM</span>
<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-pyramid w-5 h-5" data-lucide="pyramid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"></path><path d="M12 2v20"></path></svg> APEX</span>

<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-triangle w-5 h-5" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> VORTEX</span>
<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-circle w-5 h-5" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> SPHERE</span>
<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> CUBE</span>
<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-hexagon w-5 h-5" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> POLYGON</span>
<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-diamond w-5 h-5" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg> PRISM</span>
<span className="text-xl font-medium tracking-tighter text-neutral-500 flex items-center gap-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}><svg className="lucide lucide-pyramid w-5 h-5" data-lucide="pyramid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"></path><path d="M12 2v20"></path></svg> APEX</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-4 reveal-on-scroll font-geist-mono font-semibold" style={{transition: 'outline 0.1s ease-in-out'}}>Engineered for perfection</h2>
<p className="text-neutral-500 text-lg max-w-xl reveal-on-scroll font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Every pixel, every interaction, and every line of code is crafted to provide the best possible experience.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 flashlight-group">

<div className="col-span-1 md:col-span-2 relative h-[400px] bg-neutral-900/30 border border-white/5 rounded-2xl overflow-hidden flashlight-card reveal-on-scroll group" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 p-8 z-10 flex flex-col justify-between pointer-events-none">
<div>
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 border border-white/10">
<svg className="lucide lucide-layers text-white w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Stack Rotation</h3>
<p className="text-sm text-neutral-500 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Dynamic layer management for complex interfaces.</p>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" style={{perspective: '1000px'}}>
<div className="relative w-64 h-40">

<div className="card-rotator bg-[#111] border border-white/10 p-4 shadow-2xl flex flex-col justify-between" style={{animationDelay: '0s'}}>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-2">
<div className="h-2 w-3/4 bg-neutral-800 rounded"></div>
<div className="h-2 w-1/2 bg-neutral-800 rounded"></div>
</div>
</div>

<div className="card-rotator bg-[#151515] border border-white/10 p-4 shadow-2xl flex flex-col justify-between" style={{animationDelay: '-3s'}}>
<div className="flex justify-between items-center">
<div className="h-4 w-4 rounded bg-indigo-500/20"></div>
<div className="h-2 w-12 bg-neutral-800 rounded"></div>
</div>
<div className="h-16 w-full bg-neutral-800/50 rounded mt-2 border border-dashed border-neutral-700"></div>
</div>

<div className="card-rotator bg-[#0a0a0a] border border-white/10 p-4 shadow-2xl flex flex-col justify-between" style={{animationDelay: '-6s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800"></div>
<div className="space-y-1">
<div className="h-1.5 w-16 bg-neutral-700 rounded"></div>
<div className="h-1.5 w-10 bg-neutral-800 rounded"></div>
</div>
</div>
<div className="flex justify-end">
<div className="px-2 py-1 rounded bg-indigo-500/20 text-[10px] text-indigo-400 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Approved</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 h-[400px] bg-neutral-900/30 border border-white/5 rounded-2xl p-8 relative flashlight-card reveal-on-scroll flex flex-col justify-between" style={{transitionDelay: '300ms'}}>
<div>
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 border border-white/10">
<svg className="lucide lucide-zap text-white w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Instant Deploy</h3>
<p className="text-sm text-neutral-500 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Push to production in seconds with zero configuration.</p>
</div>
<div className="w-full bg-neutral-900 border border-neutral-800 rounded-lg p-4">
<div className="flex justify-between items-center text-xs mb-3">
<span className="text-neutral-400 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Latency</span>
<span className="text-emerald-400 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>24ms</span>
</div>
<div className="flex items-end gap-1 h-16">
<div className="w-1/5 bg-neutral-800 h-[40%] rounded-sm"></div>
<div className="w-1/5 bg-neutral-800 h-[70%] rounded-sm"></div>
<div className="w-1/5 bg-neutral-800 h-[50%] rounded-sm"></div>
<div className="w-1/5 bg-neutral-800 h-[90%] rounded-sm"></div>
<div className="w-1/5 bg-emerald-500/80 h-[65%] rounded-sm"></div>
</div>
</div>
</div>

<div className="col-span-1 h-[300px] bg-neutral-900/30 border border-white/5 rounded-2xl p-8 relative flashlight-card reveal-on-scroll flex flex-col" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 border border-white/10">
<svg className="lucide lucide-shield text-white w-5 h-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Secure by Default</h3>
<p className="text-sm text-neutral-500 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Enterprise-grade security baked into the core.</p>
<div className="mt-auto pt-6 flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-black bg-neutral-700"></div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-600"></div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-500"></div>
<div className="w-8 h-8 rounded-full border border-black bg-neutral-800 flex items-center justify-center text-[10px] text-white font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>+</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 h-[300px] bg-neutral-900/30 border border-white/5 rounded-2xl p-8 relative flashlight-card reveal-on-scroll overflow-hidden" style={{transitionDelay: '400ms'}}>
<div className="relative z-10">
<div className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center mb-4 border border-white/10">
<svg className="lucide lucide-globe text-white w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2 font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Global Edge Network</h3>
<p className="text-sm text-neutral-500 max-w-sm font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Deploy your application to 35+ regions worldwide automatically.</p>
</div>

<div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 opacity-20">
<div className="grid grid-cols-6 gap-2">
<div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div><div className="w-2 h-2 rounded-full bg-white"></div>
</div>
</div>
</div>
</div>
</div>
</main>
<footer className="border-t border-white/5 bg-neutral-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-neutral-800 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
</div>
<span className="text-neutral-500 text-sm font-geist-mono" style={{transition: 'outline 0.1s ease-in-out'}}>Nexus Inc.</span>
</div>
<div className="flex gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-400 font-geist-mono" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Privacy</a>
<a className="hover:text-neutral-400 font-geist-mono" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Terms</a>
<a className="hover:text-neutral-400 font-geist-mono" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
