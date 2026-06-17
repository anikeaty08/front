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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#0a0a0a',
},
purple: {
450: '#8b5cf6',
}
},
fontSize: {
'10xl': '10rem',
},
animation: {
'blob': 'blob 7s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shine-move': 'shine-move 1.5s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
'shine-move': {
'0%': { backgroundPosition: '100% 100%' },
'100%': { backgroundPosition: '0% 0%' }
}
}
}
}
}



        lucide.createIcons();

        // --- Scroll Reveal Animation ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    
                    // Trigger counters if present
                    const counters = entry.target.querySelectorAll('.counter');
                    if(counters.length > 0) {
                        counters.forEach(counter => startCounter(counter));
                    }
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-text').forEach(el => {
            observer.observe(el);
        });

        // --- Counter Animation ---
        function startCounter(counter) {
            const target = +counter.getAttribute('data-target');
            const duration = 2000;
            const start = 0;
            const startTime = performance.now();

            function update(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 4); // easeOutQuart
                
                const currentVal = Math.floor(ease * (target - start) + start);
                counter.innerText = currentVal;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.innerText = target;
                }
            }
            requestAnimationFrame(update);
        }

        // --- Custom Cursor Logic ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');
        const body = document.body;

        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
            
            cursorRing.style.left = `${mouseX}px`;
            cursorRing.style.top = `${mouseY}px`;

            const target = e.target;
            if (target.closest('.interactable') || target.closest('a') || target.closest('button')) {
                body.classList.add('hovering');
            } else {
                body.classList.remove('hovering');
            }
        });

        document.addEventListener('mousedown', () => {
            body.classList.add('grabbing');
            cursorRing.style.transform = 'translate(-50%, -50%) scale(0.5)';
        });

        document.addEventListener('mouseup', () => {
            body.classList.remove('grabbing');
            cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
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
      

<div className="cursor-dot" id="cursor-dot" style={{left: '1243px', top: '246px'}}></div>
<div className="cursor-ring" id="cursor-ring" style={{left: '1243px', top: '246px', transform: 'translate(-50%, -50%) scale(1)'}}></div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>

<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-40"></div>
<div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-40"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-pink-900/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 opacity-40"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#050505]/70 backdrop-blur-md border-b border-white/5">
<div className="max-w-[1400px] mx-auto px-6 h-20 flex justify-between items-center">
<div className="flex items-center gap-3 interactable">
<div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center bg-white/5 group hover:bg-white/10 transition-all">
<svg className="lucide lucide-user w-4 h-4 text-white group-hover:text-purple-400 transition-colors" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<span className="text-sm font-medium text-white tracking-wide font-manrope">Arthur</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-500 uppercase tracking-widest">
<a className="text-white interactable font-manrope" href="#">Home</a>
<a className="hover:text-white transition-colors interactable font-manrope" href="#about">About</a>
<a className="hover:text-white transition-colors interactable font-manrope" href="#contact">Contact Us</a>
<a className="hover:text-white transition-colors interactable font-manrope" href="#service">Service</a>
<a className="hover:text-white transition-colors interactable font-manrope" href="#pricing">Pricing Plan</a>
</div>
<div className="flex items-center gap-5 text-zinc-400">
<svg className="lucide lucide-twitter w-4 h-4 hover:text-white transition-colors cursor-pointer interactable" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-facebook w-4 h-4 hover:text-white transition-colors cursor-pointer interactable" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<svg className="lucide lucide-instagram w-4 h-4 hover:text-white transition-colors cursor-pointer interactable" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
</nav>

<section className="min-h-screen overflow-hidden pt-32 pb-20 relative">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">

<div className="absolute top-0 left-6 z-0 reveal-text revealed">
<h1 className="text-[8rem] lg:text-[10rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 leading-none opacity-20 lg:opacity-100 font-montserrat font-light">Crafting</h1>
</div>
<div className="absolute top-48 right-6 z-0 text-right reveal-text revealed" style={{}}>
<h1 className="text-[8rem] lg:text-[10rem] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500 leading-none opacity-20 lg:opacity-100 font-montserrat font-light">Visual</h1>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 mt-20">

<div className="lg:col-span-3 flex flex-col reveal-text revealed pb-20 space-y-6 justify-end" style={{}}>
<div className="glass-card p-6 rounded-2xl group relative overflow-hidden">
<div className="border-shine"></div>
<div className="space-y-6 relative z-10">
<div className="">
<div className="flex justify-between text-xs text-zinc-400 mb-2 font-medium">
<span className="font-manrope">Figma Tools</span>
<span className="text-purple-400 font-manrope">80%</span>
</div>
<div className="h-[2px] w-full bg-zinc-800 rounded-full">
<div className="h-full bg-purple-500 w-[80%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs text-zinc-400 mb-2 font-medium">
<span className="font-manrope">Adobe Illustrator</span>
<span className="text-purple-400 font-manrope">94%</span>
</div>
<div className="h-[2px] w-full bg-zinc-800 rounded-full">
<div className="h-full bg-purple-500 w-[94%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
</div>
</div>
<div className="">
<div className="flex justify-between text-xs text-zinc-400 mb-2 font-medium">
<span className="font-manrope">Adobe Photoshop</span>
<span className="text-purple-400 font-manrope">85%</span>
</div>
<div className="h-[2px] w-full bg-zinc-800 rounded-full">
<div className="h-full bg-purple-500 w-[85%] rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 flex justify-center items-end relative reveal-text interactable revealed">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/10 filter blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative w-full max-w-md mx-auto h-[600px] overflow-hidden rounded-[2rem] glass-card p-2 group">
<div className="border-shine"></div>
<div className="w-full h-full overflow-hidden rounded-[1.5rem] relative z-10">
<img alt="Arthur" className="w-full h-full object-cover object-top grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col pt-10 pb-20 justify-between reveal-text revealed" style={{}}>
<div className="space-y-6">
<h3 className="text-xs font-bold tracking-[0.2em] text-purple-400 uppercase font-manrope">Creative Portfolio</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed font-manrope">
                            I'm Arthur — a creative thinker, designer, and visual storyteller. I specialize in transforming abstract ideas into engage.
                        </p>
<button className="px-6 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/10 transition-all hover:scale-105 interactable relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<span className="relative font-manrope">Get Started</span>
</button>
</div>
<div className="mt-auto pt-12 glass-card p-6 rounded-2xl group relative overflow-hidden interactable">
<div className="border-shine"></div>

<div className="relative h-24 w-full z-10">
<svg className="absolute bottom-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0 50 Q 25 20 50 40 T 100 10 V 50 H 0 Z" fill="url(#grad1)" opacity="0.2"></path>
<path className="animate-dash" d="M0 50 Q 25 20 50 40 T 100 10" fill="none" stroke="#a855f7" stroke-dasharray="100" stroke-dashoffset="0" strokeWidth="0.5"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#a855f7', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="flex justify-between mt-2 text-[10px] text-zinc-500 uppercase tracking-wider font-medium relative z-10">
<span className="font-manrope">Design</span>
<span className="font-manrope">Build</span>
<span className="font-manrope">Style</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative">
<div className="z-10 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 reveal-text revealed">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white max-w-xl leading-tight interactable">
<span className="bg-clip-text font-light text-transparent font-montserrat bg-gradient-to-b from-white to-gray-500">Bold Creations with aPersonal Touch</span>
</h2>
<p className="text-xs text-zinc-500 max-w-xs mt-6 lg:mt-0 font-light leading-relaxed font-manrope">
                    Every project I take on blends strong visual direction with authentic storytelling. I design with bold intent.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-3 flex flex-col justify-between space-y-12 reveal-text revealed">
<div className="space-y-4">
<div className="glass-card p-6 rounded-2xl group interactable relative overflow-hidden">
<div className="border-shine"></div>
<span className="text-xs font-mono text-purple-400 mb-3 block relative z-10 font-manrope">01</span>
<p className="text-xs text-zinc-300 font-light leading-relaxed relative z-10 font-manrope">
                                I design with intention — combining bold aesthetics, thoughtful strategy, and personal expression.
                            </p>
</div>
<div className="glass-card p-6 rounded-2xl group interactable relative overflow-hidden">
<div className="border-shine"></div>
<span className="text-xs font-mono text-purple-400 mb-3 block relative z-10 font-manrope">02</span>
<p className="text-xs text-zinc-300 font-light leading-relaxed relative z-10 font-manrope">
                                Each project is more than just visuals; it's a reflection of your story, shaped through.
                            </p>
</div>
</div>
<div className="flex gap-3">
<button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors interactable">
<svg className="lucide lucide-instagram w-4 h-4 text-purple-400" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</button>
<button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors interactable">
<svg className="lucide lucide-globe w-4 h-4 text-purple-400" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>
<button className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors interactable">
<svg className="lucide lucide-twitter w-4 h-4 text-purple-400" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</button>
</div>
</div>

<div className="lg:col-span-5 reveal-text revealed" style={{}}>
<div className="glass-card p-2 rounded-2xl h-[450px] group relative overflow-hidden interactable">
<div className="border-shine"></div>
<div className="w-full h-full rounded-xl overflow-hidden relative z-10">
<img alt="Code" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-8 right-8 text-right">
<p className="text-2xl text-white tracking-tight leading-none drop-shadow-lg font-montserrat font-light">Lines of CodeDesigned</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 reveal-text revealed" style={{}}>
<div className="h-[450px] glass-card rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden group interactable">
<div className="border-shine"></div>

<div className="absolute top-1/2 right-0 w-32 h-[1px] bg-gradient-to-l from-zinc-600 to-transparent"></div>
<div className="relative z-10">
<p className="text-xs text-zinc-300 font-light leading-relaxed mb-6 font-manrope">
                                Designing and optimizing online shopping experiences that convert and feel effortless.
                            </p>
<a className="inline-flex items-center gap-2 text-xs text-purple-400 border-b border-purple-500/30 pb-1 hover:border-purple-400 transition-colors font-manrope" href="#">
                                Learn More
                            </a>
</div>
<div className="flex flex-wrap gap-2 mt-8 relative z-10">
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors cursor-default backdrop-blur-sm font-manrope">Design</span>
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors cursor-default backdrop-blur-sm font-manrope">Media</span>
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors cursor-default backdrop-blur-sm font-manrope">Brand</span>
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors cursor-default backdrop-blur-sm font-manrope">Visual</span>
<span className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors cursor-default backdrop-blur-sm font-manrope">Content</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="relative reveal-text interactable group">

<div className="absolute top-10 left-0 w-full h-[90%] bg-white/5 border border-white/5 rounded-[3rem] -z-10 rotate-[-3deg] backdrop-blur-sm transition-transform duration-700 group-hover:rotate-0"></div>
<img alt="Arthur" className="w-[85%] mx-auto block z-10 relative rounded-2xl shadow-2xl shadow-black/50 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="reveal-text pl-0 lg:pl-10" style={{}}>
<h2 className="text-4xl lg:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-8 leading-tight font-montserrat font-light">
                        Design That Speaks,
                        Code That Flows
                    </h2>
<div className="flex items-start gap-6 mb-12">
<button className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-medium rounded hover:bg-purple-500/20 transition-colors mt-1 interactable font-manrope">
                            Learn More
                        </button>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-sm font-manrope">
                            I merge striking design with clean, responsive code to build experiences that are both beautiful and functional. Every pixel has a purpose.
                        </p>
</div>
<div className="glass-card p-8 rounded-2xl border-l-4 border-l-purple-500 relative overflow-hidden group">
<div className="border-shine"></div>
<div className="flex items-center gap-6 mb-8 relative z-10">
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-[#18181b]" src="https://i.pravatar.cc/100?img=33"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-[#18181b]" src="https://i.pravatar.cc/100?img=47"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-[#18181b]" src="https://i.pravatar.cc/100?img=12"/>
</div>
<div>
<p className="text-white text-3xl tracking-tight font-montserrat font-light"><span className="counter font-montserrat font-light" data-target="27">0</span>+</p>
</div>
<div className="text-[10px] text-zinc-500 flex flex-col justify-center border-l border-white/10 pl-4 h-full">
<span className="font-manrope">Developed</span>
<span className="text-white font-manrope">Creative Concepts</span>
</div>
</div>

<div className="grid grid-cols-3 gap-8 pt-6 border-t border-white/5 relative z-10">
<div className="flex items-start gap-3">
<svg className="lucide lucide-calendar w-5 h-5 text-purple-500 mt-1" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<div>
<p className="text-xl font-medium text-white font-manrope"><span className="counter font-manrope" data-target="20">0</span>+</p>
<p className="text-[10px] text-zinc-500 mt-0.5 uppercase tracking-wide font-manrope">Experience</p>
</div>
</div>
<div className="flex items-start gap-3 border-l border-white/5 pl-6">
<svg className="lucide lucide-user-check w-5 h-5 text-purple-500 mt-1" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div>
<p className="text-xl font-medium text-white font-manrope"><span className="counter font-manrope" data-target="98">0</span>%</p>
<p className="text-[10px] text-zinc-500 mt-0.5 uppercase tracking-wide font-manrope">Satisfaction</p>
</div>
</div>
<div className="flex items-start gap-3 border-l border-white/5 pl-6">
<svg className="lucide lucide-users w-5 h-5 text-purple-500 mt-1" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div>
<p className="text-xl font-medium text-white font-manrope"><span className="counter font-manrope" data-target="40">0</span>+</p>
<p className="text-[10px] text-zinc-500 mt-0.5 uppercase tracking-wide font-manrope">Clients</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-start mb-16 reveal-text">
<h2 className="text-4xl lg:text-5xl tracking-tight text-white max-w-lg interactable font-montserrat font-light">
                    Frequently AskedQuestions
                </h2>
<p className="text-zinc-500 text-xs max-w-xs mt-4 lg:mt-0 font-light text-right font-manrope">
                    Got questions? I've got answers. Here are some of the most common things clients ask about my services.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-6 space-y-4 reveal-text">

<div className="glass-card rounded-xl px-6 py-5 group interactable relative overflow-hidden">
<div className="border-shine"></div>
<details className="group/detail relative z-10">
<summary className="flex items-center justify-between cursor-none text-sm font-medium text-white list-none font-manrope">
                                What type of clients do you usually work with?
                                <svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500 group-open/detail:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="pt-4 text-xs text-zinc-400 font-light leading-relaxed font-manrope">
                                I collaborate with startups, creative agencies, personal brands looking to elevate their visual identity through bold, thoughtful design.
                            </div>
</details>
</div>

<div className="glass-card rounded-xl px-6 py-5 group interactable relative overflow-hidden">
<div className="border-shine"></div>
<details className="group/detail relative z-10">
<summary className="flex items-center justify-between cursor-none text-sm font-medium text-white list-none font-manrope">
                                How long does a typical project take?
                                <svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500 group-open/detail:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="pt-4 text-xs text-zinc-400 font-light leading-relaxed font-manrope">
                                Typical landing pages take 2 weeks. Full web experiences can range from 4 to 8 weeks depending on complexity.
                            </div>
</details>
</div>

<div className="glass-card rounded-xl px-6 py-5 group interactable relative overflow-hidden">
<div className="border-shine"></div>
<details className="group/detail relative z-10">
<summary className="flex items-center justify-between cursor-none text-sm font-medium text-white list-none font-manrope">
                                Can you handle both design and development?
                                <svg className="lucide lucide-chevron-down w-4 h-4 text-zinc-500 group-open/detail:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="pt-4 text-xs text-zinc-400 font-light leading-relaxed font-manrope">
                                Yes, I am a full-stack creative. I handle everything from Figma prototypes to the final deployed code.
                            </div>
</details>
</div>
</div>

<div className="lg:col-span-6 flex gap-4 reveal-text" style={{}}>

<div className="flex flex-col justify-center gap-3">
<div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"></div>
<div className="w-2 h-2 rounded-full border border-zinc-700"></div>
<div className="w-2 h-2 rounded-full border border-zinc-700"></div>
<div className="w-2 h-2 rounded-full border border-zinc-700"></div>
</div>
<div className="relative w-full h-[350px] rounded-2xl glass-card p-2 group interactable">
<div className="w-full h-full rounded-xl overflow-hidden relative">
<img alt="FAQ" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-xs text-zinc-300 font-light leading-relaxed mb-4 text-center backdrop-blur-md bg-black/20 p-2 rounded-lg border border-white/5 font-manrope">
                                    Got questions about my services, workflow, or how we can work together? This section covers the essentials.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="mb-12 reveal-text">
<h2 className="text-4xl lg:text-5xl tracking-tight text-white mb-4 font-montserrat font-light">
                    Stay Inspired,<br/>Stay Connected
                </h2>
<p className="text-xs text-zinc-500 max-w-md font-light font-manrope">
                    Join my creative circle to receive exclusive updates, design insights, and behind-the-scenes content — straight to your inbox.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="relative h-[480px] rounded-2xl overflow-hidden group reveal-text glass-card p-2">
<div className="border-shine"></div>
<div className="w-full h-full rounded-xl overflow-hidden relative z-10">
<img alt="Contact" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50"></div>
<div className="absolute bottom-8 right-8 text-right">
<p className="text-[10px] text-purple-400 font-bold uppercase tracking-wider mb-2 font-manrope">Creative &amp; Friendly</p>
<p className="text-sm text-white max-w-[200px] ml-auto mb-4 font-light font-manrope">
                                Curious about how I work or what to expect? Here are the answers.
                            </p>
<a className="text-[10px] text-white underline decoration-purple-500 underline-offset-4 font-manrope" href="#">Learn More</a>
</div>
</div>
</div>

<div className="glass-card rounded-2xl p-10 reveal-text relative overflow-hidden" style={{}}>
<div className="border-shine"></div>
<h3 className="text-lg font-medium text-white mb-8 relative z-10 font-manrope">Subscription</h3>
<form className="space-y-5 relative z-10">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-[10px] font-medium text-zinc-500 uppercase font-manrope">First Name</label>
<input className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-md px-4 py-3 text-xs text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 transition-all" placeholder="Steve" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-medium text-zinc-500 uppercase font-manrope">Last Name</label>
<input className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-md px-4 py-3 text-xs text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 transition-all" placeholder="Rogers" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] font-medium text-zinc-500 uppercase font-manrope">Email</label>
<input className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-md px-4 py-3 text-xs text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 transition-all" placeholder="steve@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-medium text-zinc-500 uppercase font-manrope">Address</label>
<input className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-md px-4 py-3 text-xs text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 transition-all" placeholder="123 Chicago..." type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-medium text-zinc-500 uppercase font-manrope">Phone Number</label>
<input className="w-full bg-[#0a0a0a]/50 border border-white/10 rounded-md px-4 py-3 text-xs text-white placeholder:text-zinc-700 focus:outline-none focus:border-purple-500/50 transition-all" placeholder="+1 234 567" type="tel"/>
</div>
<button className="mt-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-medium rounded hover:brightness-110 transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:scale-[1.02] interactable w-full font-manrope" type="button">
                            Submit
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-end mb-16 reveal-text">
<h2 className="text-4xl lg:text-5xl tracking-tight text-white max-w-xl font-montserrat font-light">
                    Turning Concepts Into Aesthetic Realities
                </h2>
<p className="text-zinc-500 text-xs max-w-xs mt-4 lg:mt-0 font-light text-right font-manrope">
                    From abstract ideas to polished outcomes, I specialize in transforming creative vision into refined, visually compelling.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-card p-8 rounded-2xl reveal-text group interactable relative overflow-hidden">
<div className="border-shine"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<img alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<h4 className="text-sm text-white font-medium group-hover:text-purple-300 transition-colors font-manrope">Clara Jensen</h4>
<p className="text-[10px] text-zinc-500 font-manrope">Brand Manager</p>
</div>
</div>
<p className="text-xs text-zinc-400 leading-relaxed font-light mb-8 relative z-10 font-manrope">
                        His attention to detail and ability to translate abstract ideas into bold, cohesive visuals made the entire process seamless and inspiring. Highly recommend working with him.
                    </p>
<div className="flex justify-between items-center pt-4 border-t border-white/5 relative z-10">
<div className="flex gap-1 text-purple-400">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="flex items-center gap-1 text-[10px] text-zinc-600">
<span className="font-manrope">42</span>
<svg className="lucide lucide-message-square w-3 h-3" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl reveal-text group interactable relative overflow-hidden" style={{}}>
<div className="border-shine"></div>
<div className="flex items-center gap-4 mb-6 relative z-10">
<img alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div>
<h4 className="text-sm text-white font-medium group-hover:text-purple-300 transition-colors font-manrope">Miguel Alvarez</h4>
<p className="text-[10px] text-zinc-500 font-manrope">Founder of Drift Agency</p>
</div>
</div>
<p className="text-xs text-zinc-400 leading-relaxed font-light mb-8 relative z-10 font-manrope">
                        Arthur brought both artistic flair and structure to our web design project. The final result was polished, modern, and perfectly on brand.
                    </p>
<div className="flex justify-between items-center pt-4 border-t border-white/5 relative z-10">
<div className="flex gap-1 text-purple-400">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="flex items-center gap-1 text-[10px] text-zinc-600">
<span className="font-manrope">12</span>
<svg className="lucide lucide-message-square w-3 h-3" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-20 pb-12 bg-black relative z-10">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

<div className="lg:col-span-2 space-y-6">
<div className="flex items-center gap-3 interactable">
<div className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center bg-white/5">
<svg className="lucide lucide-user w-4 h-4 text-white" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<span className="text-sm font-medium text-white tracking-wide font-manrope">Arthur</span>
</div>
<p className="text-[10px] text-zinc-500 leading-relaxed max-w-xs font-light font-manrope">
                        A bold, modern portfolio built to showcase creativity with clarity. Arthur blends aesthetic with function.
                    </p>
<p className="text-[10px] text-zinc-600 mt-8 font-manrope">Arthur - Creative Portfolio Website</p>
</div>

<div className="space-y-4">
<h4 className="text-white text-xs font-medium uppercase tracking-wider font-manrope">Explore</h4>
<ul className="space-y-3 text-[10px] text-zinc-400 font-light">
<li><a className="hover:text-white transition-colors interactable font-manrope" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors interactable font-manrope" href="#">About</a></li>
<li><a className="hover:text-white transition-colors interactable font-manrope" href="#">Portfolio</a></li>
<li><a className="hover:text-white transition-colors interactable font-manrope" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors interactable font-manrope" href="#">Testimonials</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white text-xs font-medium uppercase tracking-wider font-manrope">Resources</h4>
<ul className="space-y-3 text-[10px] text-zinc-400 font-light">
<li><a className="hover:text-white transition-colors interactable font-manrope" href="#">Design Articles</a></li>
<li><a className="hover:text-white transition-colors interactable font-manrope" href="#">UI Inspiration</a></li>
<li><a className="hover:text-white transition-colors interactable font-manrope" href="#">Free Downloads</a></li>
<li><a className="hover:text-white transition-colors interactable font-manrope" href="#">Tools I Use</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-white text-xs font-medium uppercase tracking-wider font-manrope">Get in Touch</h4>
<ul className="space-y-4 text-[10px] text-zinc-400 font-light">
<li className="flex gap-3 items-start interactable">
<svg className="lucide lucide-map-pin w-3 h-3 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-manrope">123 Creative Lane, Brooklyn,NY 11201, United States</span>
</li>
<li className="flex gap-3 items-center interactable">
<svg className="lucide lucide-mail w-3 h-3" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-manrope">hello@arthurdesigns.com</span>
</li>
<li className="flex gap-3 items-center interactable">
<svg className="lucide lucide-phone w-3 h-3" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="font-manrope">+1 (347) 555-0194</span>
</li>
</ul>
</div>
</div>
</div>
</footer>


    </>
  );
}
