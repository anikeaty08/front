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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9', // Sky blue
600: '#0284c7',
900: '#0c4a6e',
950: '#082f49',
}
},
animation: {
'blob': 'blob 7s infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        // Initialize Icons
        lucide.createIcons();

        // Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const cardStack = document.getElementById('card-stack');
            const floatingUI = document.getElementById('floating-ui');
            const reveals = document.querySelectorAll('.reveal');

            // Scroll Logic
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                const windowHeight = window.innerHeight;

                // 3D Hero Rotation based on scroll
                if (cardStack) {
                    // subtle rotation and separation
                    const rotateX = scrollY * 0.05;
                    const rotateY = scrollY * 0.02;
                    // Limit the rotation
                    if (scrollY < 800) {
                        cardStack.style.transform = `rotateX(${rotateX}deg) rotateY(${-rotateY}deg) translateY(${scrollY * 0.2}px)`;
                        
                        // Parallax effect for cards inside
                        const cards = cardStack.children;
                        for(let i=0; i<cards.length; i++) {
                            // Separate them on Z axis as we scroll
                            const baseZ = (i - 1) * 25; // -25, 0, 25 roughly
                            const zOffset = scrollY * 0.1 * (i + 1);
                            cards[i].style.transform = `translateZ(${baseZ + zOffset}px) rotate(${6 - (i*3)}deg)`;
                        }
                    }
                }

                // Mid-section 3D Object Rotation
                if (floatingUI) {
                    const rect = floatingUI.getBoundingClientRect();
                    // Check if in view
                    if (rect.top < windowHeight && rect.bottom > 0) {
                        const relativePos = (windowHeight - rect.top) / windowHeight; 
                        // rotate between -10 and 10 deg based on scroll position
                        const rotX = (relativePos - 0.5) * 20;
                        const rotY = (relativePos - 0.5) * -20;
                        floatingUI.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(0.9)`;
                    }
                }

                // Intersection Observer for Reveal on Scroll
                reveals.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    if (elementTop < windowHeight - elementVisible) {
                        element.classList.add('active');
                    }
                });
            });

            // Initial trigger
            window.dispatchEvent(new Event('scroll'));
        });

        // Add subtle mouse move parallax to Hero 3D object
        const heroScene = document.getElementById('hero-scene');
        if(heroScene) {
            heroScene.addEventListener('mousemove', (e) => {
                const x = e.clientX / window.innerWidth;
                const y = e.clientY / window.innerHeight;
                
                const cardStack = document.getElementById('card-stack');
                // Subtle tilt opposite to mouse
                const tiltX = (0.5 - y) * 10;
                const tiltY = (x - 0.5) * 10;
                
                // Combine with scroll transform logic would be complex, 
                // so we just add a css variable or keep it simple for this demo
                // This is a simplified version just to show interactivity
            });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-200 opacity-30 saturate-200" data-alpha-mask="21" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 21%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 21%, transparent)'}}><div className="w-full h-full">
<div className="w-full h-full relative">
<div className="aura-background-component top-0 w-full absolute h-full">
<div className="absolute w-full h-full left-0 top-0" data-us-project="bKN5upvoulAmWvInmHza"></div>

</div>
</div>
</div></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] animate-blob bg-blue-600/20"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000 bg-indigo-600/20"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000 bg-cyan-600/10"></div>
<div className="absolute inset-0 bg-grid z-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg flex items-center gap-2 text-white font-manrope tracking-wide font-semibold" href="#" style={{}}>
<div className="w-5 h-5 bg-gradient-to-tr to-blue-500 rounded-sm from-indigo-400"></div>
                VELOCITY
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="transition-colors hover:text-white font-manrope tracking-wide font-semibold" href="#work" style={{}}>Work</a>
<a className="transition-colors hover:text-white font-manrope tracking-wide font-semibold" href="#services" style={{}}>Services</a>
<a className="transition-colors hover:text-white font-manrope tracking-wide font-semibold" href="#about" style={{}}>About</a>
<a className="transition-colors hover:text-white font-manrope tracking-wide font-semibold" href="#contact" style={{}}>Contact</a>
</div>
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border text-xs transition-all hover:scale-105 border-white/10 bg-white/5 text-white hover:bg-white/10 font-manrope tracking-wide font-semibold" style={{}}>
                Start Project <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="md:hidden text-neutral-400">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center scene-3d">

<div className="relative z-20 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs mb-6 text-indigo-400 font-manrope tracking-wide font-semibold" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Available for new partnerships
                </div>
<h1 className="text-5xl lg:text-7xl mb-6 leading-[1.1] text-white font-montserrat font-bold tracking-tighter" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Scale your brand <br/>
<span className="text-gradient-accent font-montserrat font-bold tracking-tighter" style={{transition: 'outline 0.1s ease-in-out'}}>beyond limits.</span>
</h1>
<p className="text-lg mb-8 max-w-lg leading-relaxed text-neutral-400 font-manrope tracking-wide font-semibold" style={{}}>
                    We craft digital experiences that merge data-driven strategy with immersive design. The future of marketing is interactive.
                </p>
<div className="flex items-center gap-4">
<button className="px-6 py-3 rounded-lg text-sm transition-colors bg-white text-black hover:bg-neutral-200 font-manrope tracking-wide font-semibold" style={{}}>
                        View Case Studies
                    </button>
<button className="px-6 py-3 rounded-lg border text-sm transition-colors border-white/10 text-white hover:bg-white/5 font-manrope tracking-wide font-semibold" style={{}}>
                        Our Process
                    </button>
</div>
</div>

<div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center scene-3d" id="hero-scene">

<div className="object-3d w-64 h-80 lg:w-80 lg:h-96 absolute transition-transform duration-75 ease-linear" id="card-stack" style={{transform: 'rotateX(25deg) rotateY(-10deg) translateY(100px)'}}>

<div className="absolute inset-0 glass-card rounded-2xl transform translate-z-[-50px] rotate-6 scale-95 border flex flex-col p-6 justify-between opacity-60 border-white/5" style={{transform: 'translateZ(25px) rotate(6deg)'}}>
<div className="w-full flex justify-between items-center border-b pb-4 border-white/10">
<div className="h-2 w-20 rounded-full bg-white/20"></div>
<div className="h-2 w-8 bg-cyan-500/50 rounded-full"></div>
</div>
<div className="space-y-3">
<div className="h-16 w-full bg-gradient-to-t from-indigo-500/20 to-transparent rounded-lg"></div>
<div className="flex gap-2">
<div className="h-20 w-1/3 rounded-lg bg-white/5"></div>
<div className="h-20 w-1/3 rounded-lg bg-white/5"></div>
<div className="h-20 w-1/3 rounded-lg bg-white/5"></div>
</div>
</div>
</div>

<div className="absolute inset-0 glass-card rounded-2xl transform translate-z-[-25px] -rotate-3 scale-95 border flex flex-col p-6 justify-between opacity-80 border-white/10" style={{transform: 'translateZ(100px) rotate(3deg)'}}>
<div className="flex items-center gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-blue-500/50"></div>
<div className="w-3 h-3 rounded-full bg-blue-500/50"></div>
<div className="w-3 h-3 rounded-full bg-cyan-500/50"></div>
</div>
<div className="space-y-2 font-mono text-[10px] text-neutral-400">
<div className="flex font-manrope tracking-wide font-semibold" style={{}}><span className="mr-2 text-cyan-400 font-manrope tracking-wide font-semibold" style={{}}>const</span> <span className="text-indigo-300 font-manrope tracking-wide font-semibold" style={{}}>growth</span> = <span className="text-white font-manrope tracking-wide font-semibold" style={{}}>true</span>;</div>
<div className="flex font-manrope tracking-wide font-semibold" style={{}}><span className="mr-2 text-cyan-400 font-manrope tracking-wide font-semibold" style={{}}>while</span>(success) {</div>
<div className="pl-4 text-neutral-500 font-manrope tracking-wide font-semibold" style={{}}>// optimization</div>
<div className="pl-4 font-manrope tracking-wide font-semibold" style={{}}>scale(<span className="text-indigo-400 font-manrope tracking-wide font-semibold" style={{}}>'global'</span>);</div>
<div className="font-manrope tracking-wide font-semibold" style={{}}>}</div>
</div>
<div className="h-12 w-full rounded mt-4 bg-white/5"></div>
</div>

<div className="absolute inset-0 glass-card rounded-2xl p-6 border-t shadow-[0_0_50px_-12px_rgba(56,189,248,0.3)] border-white/20" style={{transform: 'translateZ(175px) rotate(0deg)'}}>
<div className="flex items-start justify-between mb-8">
<div className="p-2 bg-gradient-to-br rounded-lg border from-white/10 to-white/0 border-white/10">
<svg className="lucide lucide-bar-chart-2 w-6 h-6 text-indigo-400" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<div className="text-right">
<div className="text-xs uppercase text-neutral-400 font-manrope tracking-wide font-semibold" style={{}}>Revenue</div>
<div className="text-2xl text-white font-montserrat font-bold tracking-tighter" style={{transition: 'outline 0.1s ease-in-out'}}>+124%</div>
</div>
</div>
<div className="relative h-32 w-full mb-6">

<div className="absolute bottom-0 left-0 w-4 h-12 bg-blue-500/30 rounded-t-sm"></div>
<div className="absolute bottom-0 left-6 w-4 h-16 bg-blue-500/40 rounded-t-sm"></div>
<div className="absolute bottom-0 left-12 w-4 h-10 bg-blue-500/30 rounded-t-sm"></div>
<div className="absolute bottom-0 left-18 w-4 h-24 bg-blue-500/60 rounded-t-sm"></div>
<div className="absolute bottom-0 left-24 w-4 h-20 bg-blue-500/50 rounded-t-sm"></div>
<div className="absolute bottom-0 left-30 w-4 h-32 bg-indigo-500 rounded-t-sm shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
</div>
<div className="flex items-center gap-3 mt-auto">
<div className="h-8 w-8 rounded-full border overflow-hidden bg-neutral-700 border-white/10">
<img alt="User" src="https://ui-avatars.com/api/?name=J+D&amp;background=random&amp;color=fff"/>
</div>
<div className="text-xs">
<div className="text-white font-manrope tracking-wide font-semibold" style={{}}>Active Campaign</div>
<div className="text-indigo-400 font-manrope tracking-wide font-semibold" style={{}}>Live now</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y backdrop-blur-sm border-white/5 bg-black/20">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-neutral-500 uppercase mb-8 font-manrope tracking-wide font-semibold" style={{}}>Trusted by innovators</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl text-white font-manrope tracking-wide font-semibold" style={{}}>ACME<span className="text-neutral-600 font-manrope tracking-wide font-semibold" style={{}}>CORP</span></div>
<div className="text-xl text-white font-manrope tracking-wide font-semibold" style={{}}>INTER<span className="text-neutral-600 font-manrope tracking-wide font-semibold" style={{}}>STELLAR</span></div>
<div className="text-xl text-white font-manrope tracking-wide font-semibold" style={{}}>POLY<span className="text-neutral-600 font-manrope tracking-wide font-semibold" style={{}}>MORPH</span></div>
<div className="text-xl text-white font-manrope tracking-wide font-semibold" style={{}}>OLIVIA<span className="text-neutral-600 font-manrope tracking-wide font-semibold" style={{}}>AI</span></div>
<div className="text-xl text-white font-manrope tracking-wide font-semibold" style={{}}>NEXUS<span className="text-neutral-600 font-manrope tracking-wide font-semibold" style={{}}>LABS</span></div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-2xl reveal">
<h2 className="text-3xl lg:text-4xl mb-6 text-white font-montserrat font-bold tracking-widest" style={{transition: 'outline 0.1s ease-in-out'}}>Built for speed. <br/><span className="text-neutral-500 font-montserrat font-bold tracking-widest" style={{transition: 'outline 0.1s ease-in-out'}}>Designed for impact.</span></h2>
<p className="text-lg text-neutral-400 font-manrope tracking-wide font-semibold" style={{}}>We don't just run ads. We build comprehensive digital ecosystems that nurture leads from first click to loyal advocate.</p>
</div>
<div className="grid lg:grid-cols-3 gap-6">

<div className="group glass rounded-xl p-8 transition-all duration-300 border hover:border-indigo-500/30 reveal hover:bg-white/5 border-white/5">
<div className="w-12 h-12 rounded-lg border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-indigo-900/20">
<svg className="lucide lucide-zap w-6 h-6 text-indigo-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg mb-3 text-white font-manrope tracking-wide font-semibold" style={{}}>Growth Hacking</h3>
<p className="text-sm leading-relaxed text-neutral-400 font-manrope tracking-wide font-semibold" style={{}}>Rapid experimentation across marketing channels to identify the most efficient ways to grow a business.</p>
</div>

<div className="group glass rounded-xl p-8 transition-all duration-300 border hover:border-cyan-500/30 reveal hover:bg-white/5 border-white/5">
<div className="w-12 h-12 rounded-lg border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-cyan-900/20">
<svg className="lucide lucide-layers w-6 h-6 text-cyan-400" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg mb-3 text-white font-manrope tracking-wide font-semibold" style={{}}>Brand Strategy</h3>
<p className="text-sm leading-relaxed text-neutral-400 font-manrope tracking-wide font-semibold" style={{}}>Crafting a unique identity that resonates with your audience and differentiates you from the noise.</p>
</div>

<div className="group glass rounded-xl p-8 transition-all duration-300 border hover:border-blue-500/30 reveal hover:bg-white/5 border-white/5">
<div className="w-12 h-12 rounded-lg border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-blue-900/20">
<svg className="lucide lucide-bar-chart w-6 h-6 text-blue-400" data-lucide="bar-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V9"></path><path d="M19 21V3"></path></svg>
</div>
<h3 className="text-lg mb-3 text-white font-manrope tracking-wide font-semibold" style={{}}>Data Analytics</h3>
<p className="text-sm leading-relaxed text-neutral-400 font-manrope tracking-wide font-semibold" style={{}}>Turning raw data into actionable insights to optimize conversion rates and maximize ROI.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent via-blue-950/20"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 scene-3d relative h-96 w-full reveal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-tr from-indigo-500 rounded-full blur-[80px] opacity-40 animate-pulse to-blue-600"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-64 glass-card rounded-xl border overflow-hidden object-3d shadow-2xl border-white/10" id="floating-ui">

<div className="h-8 border-b flex items-center px-4 gap-2 bg-white/5 border-white/5">
<div className="w-2 h-2 rounded-full bg-blue-400/50"></div>
<div className="w-2 h-2 rounded-full bg-blue-400/50"></div>
<div className="w-2 h-2 rounded-full bg-cyan-400/50"></div>
</div>

<div className="p-6 grid grid-cols-2 gap-4">
<div className="col-span-2 h-24 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded border p-3 relative overflow-hidden border-white/5">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-500/20 to-transparent"></div>
<div className="w-full h-full flex items-end justify-between gap-1">
<div className="w-full bg-indigo-500/40 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/60 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/50 h-[50%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/80 h-[90%] rounded-t-sm"></div>
<div className="w-full bg-indigo-500/40 h-[60%] rounded-t-sm"></div>
</div>
</div>
<div className="h-16 rounded bg-white/5"></div>
<div className="h-16 rounded bg-white/5"></div>
</div>
</div>

<div className="absolute top-10 right-10 p-3 glass rounded-lg border animate-float border-white/10">
<svg className="lucide lucide-trending-up w-5 h-5 text-cyan-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="absolute bottom-10 left-10 p-3 glass rounded-lg border animate-float border-white/10" style={{animationDelay: '1s'}}>
<svg className="lucide lucide-users w-5 h-5 text-indigo-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
</div>
<div className="order-1 lg:order-2 reveal">
<div className="inline-block px-3 py-1 mb-4 text-xs uppercase border border-blue-500/20 rounded-full bg-blue-500/10 text-blue-400 font-manrope tracking-wide font-semibold" style={{}}>
                    Precision Targeting
                </div>
<h2 className="text-3xl lg:text-5xl mb-6 text-white font-montserrat font-bold tracking-tighter" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Reach the right people,<br/>
<span className="text-neutral-500 font-montserrat font-bold tracking-tighter" style={{transition: 'outline 0.1s ease-in-out'}}>at the perfect moment.</span>
</h2>
<p className="text-lg mb-8 leading-relaxed text-neutral-400 font-manrope tracking-wide font-semibold" style={{}}>
                    Our proprietary targeting algorithms analyze millions of data points to identify high-intent audiences. We don't guess; we know.
                </p>
<ul className="space-y-4 text-sm font-medium text-neutral-300">
<li className="flex items-center gap-3 font-manrope tracking-wide font-semibold" style={{}}>
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                        Real-time audience segmentation
                    </li>
<li className="flex items-center gap-3 font-manrope tracking-wide font-semibold" style={{}}>
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                        Behavioral prediction models
                    </li>
<li className="flex items-center gap-3 font-manrope tracking-wide font-semibold" style={{}}>
<div className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                        Cross-channel attribution
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 border-y relative overflow-hidden bg-white/5 border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<div className="mb-8">
<svg className="lucide lucide-quote w-8 h-8 mx-auto text-neutral-600 fill-neutral-800" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<h3 className="text-2xl lg:text-4xl leading-snug mb-8 text-white font-montserrat font-bold tracking-widest" style={{transition: 'outline 0.1s ease-in-out'}}>
                "Velocity transformed our digital presence. In just three months, our conversion rate doubled and our CPA dropped by 40%. They are the future."
            </h3>
<div className="flex flex-col items-center justify-center gap-2">
<div className="w-12 h-12 rounded-full bg-gradient-to-br mb-2 from-neutral-200 to-neutral-400"></div>
<div className="text-base text-white font-manrope tracking-wide font-semibold" style={{}}>Sarah Jenkins</div>
<div className="text-xs text-neutral-500 uppercase font-manrope tracking-wide font-semibold" style={{}}>CMO, TechFlow</div>
</div>
</div>

<div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r via-transparent to-transparent pointer-events-none from-black"></div>
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l via-transparent to-transparent pointer-events-none from-black"></div>
</section>

<section className="py-32 relative text-center overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-neutral-950 to-neutral-950"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 reveal">
<h2 className="text-4xl lg:text-6xl mb-6 text-white font-montserrat font-bold tracking-tighter" style={{transition: 'outline 0.1s ease-in-out'}}>Ready to accelerate?</h2>
<p className="text-lg mb-10 text-neutral-400 font-manrope tracking-wide font-semibold" style={{}}>Join the forward-thinking brands redefining their industries.</p>
<form className="max-w-md mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 from-indigo-600 to-cyan-600"></div>
<div className="relative flex p-1 rounded-lg border bg-neutral-900 border-white/10">
<input className="flex-1 bg-transparent px-4 py-3 focus:outline-none placeholder-neutral-500 text-sm text-white" placeholder="Enter your email" type="email"/>
<button className="px-6 py-2 rounded-md text-sm transition-colors bg-white text-black hover:bg-neutral-200 font-manrope tracking-wide font-semibold" style={{}} type="button">
                        Get Started
                    </button>
</div>
</form>
</div>
</section>

<footer className="border-t pt-16 pb-8 border-white/10 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg flex items-center gap-2 mb-6 text-white font-manrope tracking-wide font-semibold" href="#" style={{}}>
<div className="w-4 h-4 bg-gradient-to-tr to-blue-500 rounded-sm from-indigo-400"></div>
                        VELOCITY
                    </a>
<p className="text-neutral-500 text-sm leading-relaxed font-manrope tracking-wide font-semibold" style={{}}>
                        Next-generation marketing for the digital age. San Francisco, CA.
                    </p>
</div>
<div>
<h4 className="text-sm mb-4 text-white font-manrope tracking-wide font-semibold" style={{}}>Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-white font-manrope tracking-wide font-semibold" href="#" style={{}}>About</a></li>
<li><a className="transition-colors hover:text-white font-manrope tracking-wide font-semibold" href="#" style={{}}>Careers</a></li>
<li><a className="transition-colors hover:text-white font-manrope tracking-wide font-semibold" href="#" style={{}}>Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm mb-4 text-white font-manrope tracking-wide font-semibold" style={{}}>Services</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-white font-manrope tracking-wide font-semibold" href="#" style={{}}>Strategy</a></li>
<li><a className="transition-colors hover:text-white font-manrope tracking-wide font-semibold" href="#" style={{}}>Creative</a></li>
<li><a className="transition-colors hover:text-white font-manrope tracking-wide font-semibold" href="#" style={{}}>Development</a></li>
</ul>
</div>
<div>
<h4 className="text-sm mb-4 text-white font-manrope tracking-wide font-semibold" style={{}}>Social</h4>
<div className="flex gap-4">
<a className="text-neutral-500 transition-colors hover:text-white" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-500 transition-colors hover:text-white" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-neutral-500 transition-colors hover:text-white" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs border-white/10 text-neutral-600">
<p className="font-manrope tracking-wide font-semibold" style={{}}>© 2023 Velocity Agency Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 font-manrope tracking-wide font-semibold" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-neutral-400 font-manrope tracking-wide font-semibold" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
