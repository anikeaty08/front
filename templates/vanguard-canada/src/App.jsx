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
serif: ['Instrument Serif', 'serif'],
},
colors: {
// Redefining white/black to be dynamic for smart inversion
white: 'rgb(var(--c-white) / <alpha-value>)',
black: 'rgb(var(--c-black) / <alpha-value>)',
brand: {
green: '#10B981',
glow: '#34D399',
dark: 'rgb(var(--c-bg-main) / <alpha-value>)',
panel: 'rgb(var(--c-bg-panel) / <alpha-value>)',
}
},
backgroundImage: {
'card-gradient': 'linear-gradient(180deg, rgba(var(--c-white), 0.03) 0%, rgba(var(--c-white), 0.01) 100%)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 40s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}


 
            (function() { 
                const section = document.getElementById('immersive-visual'); 
                const bg = document.getElementById('immersive-bg'); 
                const card = document.getElementById('immersive-3d-card'); 
                let ticking = false; 
                function update() { 
                    const rect = section.getBoundingClientRect(); 
                    const viewportHeight = window.innerHeight; 
                    if (rect.top < viewportHeight && rect.bottom > 0) { 
                        const progress = 1 - ((rect.top + rect.height) / (viewportHeight + rect.height)); 
                        const scale = 1 + (progress * 0.15); 
                        bg.style.transform = `scale(${scale})`; 
                    } 
                    ticking = false; 
                } 
                window.addEventListener('scroll', () => { if (!ticking) { window.requestAnimationFrame(update); ticking = true; } }); 
                section.addEventListener('mousemove', (e) => { 
                    const rect = section.getBoundingClientRect(); 
                    const x = e.clientX - rect.left; 
                    const y = e.clientY - rect.top; 
                    const centerX = rect.width / 2; 
                    const centerY = rect.height / 2; 
                    const rotateX = ((y - centerY) / centerY) * -12; 
                    const rotateY = ((x - centerX) / centerX) * 12; 
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; 
                }); 
                section.addEventListener('mouseleave', () => { card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`; }); 
            })(); 
            

 
        document.addEventListener('DOMContentLoaded', () => { 
            lucide.createIcons();

            // Theme Toggle Logic
            const toggleBtn = document.getElementById('theme-toggle');
            const body = document.body;
            
            toggleBtn.addEventListener('click', () => {
                body.classList.toggle('light-mode');
                toggleBtn.classList.toggle('light-mode-active');
                
                // Optional: Save preference
                const isLight = body.classList.contains('light-mode');
                localStorage.setItem('theme', isLight ? 'light' : 'dark');
            });

            // Check saved preference
            if (localStorage.getItem('theme') === 'light') {
                body.classList.add('light-mode');
                toggleBtn.classList.add('light-mode-active');
            }

            // Parallax 
            const bg = document.getElementById('parallax-bg'); 
            window.addEventListener('scroll', () => { 
                const scrolled = window.scrollY; 
                bg.style.transform = `translateY(${scrolled * 0.5}px)`; 
            }); 
            // Reveal Animation Observer 
            const observer = new IntersectionObserver((entries) => { 
                entries.forEach(entry => { 
                    if (entry.isIntersecting) { 
                        entry.target.classList.add('active'); 
                    } 
                }); 
            }, { threshold: 0.1 }); 
            document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); 
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
      

<button className="fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white hover:bg-brand-green hover:text-white hover:border-brand-green transition-all duration-300 shadow-2xl group" id="theme-toggle">
<i className="w-5 h-5 absolute scale-0 opacity-0 group-[.light-mode-active]:scale-100 group-[.light-mode-active]:opacity-100 transition-all" data-lucide="sun"></i>
<i className="w-5 h-5 absolute scale-100 opacity-100 group-[.light-mode-active]:scale-0 group-[.light-mode-active]:opacity-0 transition-all" data-lucide="moon"></i>
</button>

<div className="parallax-bg" id="parallax-bg" style={{transform: 'translateY(0px)'}}></div>

<nav className="fixed left-1/2 -translate-x-1/2 top-6 z-50 w-full max-w-[90vw] md:max-w-3xl">
<div className="glass-panel flex shadow-brand-green/5 rounded-full pt-2 pr-2 pb-2 pl-2 shadow-2xl items-center justify-between">
<div className="flex items-center gap-2 pl-4">
<div className="w-3 h-3 bg-brand-green rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
<span className="text-sm font-semibold tracking-tight text-white font-sans uppercase"> Vaguard </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#features"> Features </a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#solutions"> Locations </a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#pricing"> Pricing </a>
</div>

<button className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-brand-green hover:text-white transition-colors"> Get Started </button>
</div>
</nav>
<main className="flex flex-col z-10 w-full pt-40 relative items-center">

<section className="container flex flex-col text-center max-w-5xl mr-auto mb-32 ml-auto pr-6 pl-6 relative items-center">

<div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/5 backdrop-blur-sm mb-8 reveal active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-green"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
<span className="text-xs font-medium text-brand-green tracking-wide"> v2.0 is now live </span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] reveal active delay-100 text-5xl text-white tracking-tight font-serif mb-8"> 
                Invisible to everyone <br/>
<span className="italic text-white/50 font-sans">but</span> <span className="text-gradient font-sans">yourself.</span>
</h1>
<p className="leading-relaxed reveal active delay-200 text-lg font-light text-white/60 max-w-2xl mb-10"> 
                Experience the next generation of privacy. Military-grade encryption wrapped in a beautiful, lightning-fast interface. 
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center reveal active delay-300">
<button className="px-8 py-3.5 rounded-full text-sm font-medium text-white/70 hover:text-white transition-colors border border-white/10 hover:border-white/30 hover:bg-white/5"> 
                    View Locations 
                </button>
<button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 focus:ring-offset-black transition-all">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(var(--c-black),1)_0%,#10B981_50%,rgba(var(--c-black),1)_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-brand-panel px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-3xl transition-all group-hover:bg-brand-dark"> 
                        Start Free Trial 
                        <i className="w-4 h-4 text-brand-green transition-colors group-hover:text-white" data-lucide="arrow-right"></i>
</span>
</button>
</div>
</section>

<section className="border-y overflow-hidden bg-brand-dark/80 w-full border-white/5 mb-2 pt-24 pb-2 relative">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#10B981 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>
<div className="container mx-auto px-6 text-center">
<h2 className="leading-snug reveal md:text-6xl text-2xl font-medium text-white/90 tracking-tight font-sans max-w-3xl mr-auto ml-auto"> 
                    The AI-powered VPN built for the modern internet. 
                </h2>
</div>
</section>

<section className="container bg-brand-dark/95 max-w-6xl mr-auto mb-32 ml-auto pt-20 pr-6 pl-6 rounded-3xl">
<div className="text-center mb-10 reveal">
<h2 className="md:text-5xl text-3xl text-white font-serif mb-4"> Unified Privacy Control </h2>
<p className="text-white/50">Everything you need, all in one view.</p>
</div>
<div className="reveal delay-100 overflow-hidden group bg-brand-panel border-white/10 border rounded-xl relative shadow-2xl">

<div className="flex border-white/5 border-b pt-4 pr-6 pb-4 pl-6 -rotate-x-30 items-center justify-between">
<div className="flex gap-x-6 gap-y-6">
<button className="text-sm font-medium text-white border-b-2 border-brand-green pb-4 -mb-4.5"> Connection </button>
<button className="text-sm font-medium text-white/40 hover:text-white transition-colors pb-4 -mb-4.5"> Servers </button>
<button className="text-sm font-medium text-white/40 hover:text-white transition-colors pb-4 -mb-4.5"> Protocols </button>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-white/30"> Status: Protected </span>
<div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
</div>
</div>

<div className="md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[500px] pt-6 pr-6 pb-6 pl-6 gap-x-6 gap-y-6">

<div className="md:col-span-2 flex flex-col overflow-hidden bg-white/5 border-white/5 border rounded-lg pt-6 pr-6 pb-6 pl-6 relative">
<h4 className="text-sm text-white/70 mb-6 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="activity"></i>
                            Download Speed (Mbps) 
                        </h4>
<div className="flex-1 flex items-end justify-between gap-2 px-2 pb-2">

<div className="w-full bg-brand-green/20 h-[30%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[45%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[35%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[60%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[50%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[75%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[55%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-brand-green/20 h-[85%] rounded-t hover:bg-brand-green/40 transition-all duration-500 relative group/bar"></div>
<div className="w-full bg-gradient-to-t from-brand-green to-brand-glow h-[92%] rounded-t shadow-[0_0_20px_rgba(16,185,129,0.3)] animate-pulse"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-panel to-transparent opacity-20 pointer-events-none"></div>
</div>

<div className="flex flex-col gap-4">
<div className="bg-white/5 rounded-lg border border-white/5 p-5 flex flex-col justify-between h-1/2">
<span className="text-xs text-white/40 uppercase tracking-wider"> Encryption Level </span>
<div className="mt-2">
<div className="text-3xl font-light text-white font-sans"> AES-256 </div>
<span className="text-xs text-brand-green"> Military Grade </span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full mt-4 overflow-hidden">
<div className="bg-brand-green h-full w-[100%]"></div>
</div>
</div>
<div className="bg-white/5 rounded-lg border border-white/5 p-5 flex flex-col justify-between h-1/2">
<span className="text-xs text-white/40 uppercase tracking-wider"> Server Load </span>
<div className="mt-2">
<div className="text-3xl font-light text-white font-sans"> 12% </div>
<span className="text-xs text-white/40"> Optimal Performance </span>
</div>
<div className="flex -space-x-2 mt-4">
<div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-brand-panel flex items-center justify-center text-[10px] text-white">🇺🇸</div>
<div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-brand-panel flex items-center justify-center text-[10px] text-white">🇩🇪</div>
<div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-brand-panel flex items-center justify-center text-[10px] text-white">🇯🇵</div>
<div className="w-8 h-8 rounded-full bg-brand-green/20 border-2 border-brand-panel flex items-center justify-center text-[10px] text-brand-green font-medium"> +60 </div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="container mr-auto mb-32 ml-auto pr-6 pl-6" id="features">

<div className="mb-16 md:text-center max-w-3xl mx-auto reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-6 font-sans tracking-tight"> The Core of Your Security </h2>
<p className="text-lg text-white/50 leading-relaxed font-light"> Powerful automated tools designed to streamline privacy, anonymity, and speed in one unified platform. </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-x-4 gap-y-4">

<div className="reveal group p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-green/5 to-transparent hover:from-brand-green/10 hover:to-brand-green/5 hover:border-brand-green/40 transition-all duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-green group-hover:scale-110 transition-transform group-hover:bg-brand-green/20 group-hover:border-brand-green/30">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2"> Global Network </h3>
<p className="text-sm text-white/50 leading-relaxed"> Access over 5,000 servers in 60+ countries instantly. </p>
</div>

<div className="reveal delay-100 group p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-green/5 to-transparent hover:from-brand-green/10 hover:to-brand-green/5 hover:border-brand-green/40 transition-all duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-green group-hover:scale-110 transition-transform group-hover:bg-brand-green/20 group-hover:border-brand-green/30">
<i className="w-5 h-5" data-lucide="file-x"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2"> Zero-Log Policy </h3>
<p className="text-sm text-white/50 leading-relaxed"> We never track, collect, or share your private data. </p>
</div>

<div className="reveal delay-200 group p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-green/5 to-transparent hover:from-brand-green/10 hover:to-brand-green/5 hover:border-brand-green/40 transition-all duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-green group-hover:scale-110 transition-transform group-hover:bg-brand-green/20 group-hover:border-brand-green/30">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2"> Lightning Speed </h3>
<p className="text-sm text-white/50 leading-relaxed"> Optimized servers ensuring minimal latency for 4K streaming. </p>
</div>

<div className="reveal delay-300 group p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-green/5 to-transparent hover:from-brand-green/10 hover:to-brand-green/5 hover:border-brand-green/40 transition-all duration-500">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-brand-green group-hover:scale-110 transition-transform group-hover:bg-brand-green/20 group-hover:border-brand-green/30">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-white mb-2"> Kill Switch </h3>
<p className="text-sm text-white/50 leading-relaxed"> Automatically cuts internet if connection drops to prevent leaks. </p>
</div>
</div>
</section>
<section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden flex items-center justify-center my-32 group perspective-[1200px]" id="immersive-visual">

<div className="absolute inset-0 w-full h-full overflow-hidden">
<div className="w-full h-full bg-cover bg-center transition-transform duration-75 ease-linear will-change-transform" id="immersive-bg" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp', transform: 'scale(1)'}}>
<div className="absolute inset-0 bg-brand-dark/60 mix-blend-multiply transition-colors duration-500"></div>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark transition-colors duration-500"></div>
</div>
</div>

<div className="relative z-10 w-[280px] h-[360px] duration-100 ease-out will-change-transform" id="immersive-3d-card" style={{transformStyle: 'preserve-3d'}}>

<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent border border-white/20 backdrop-blur-xl rounded-[2rem] shadow-[0_0_80px_rgba(16,185,129,0.15)] flex flex-col items-center justify-center p-8 text-center" style={{transform: 'translateZ(40px)'}}>
<div className="w-16 h-16 rounded-full bg-brand-green/20 border border-brand-green/30 flex items-center justify-center mb-6 text-brand-green shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-pulse">
<i className="w-8 h-8" data-lucide="shield"></i>
</div>
<h3 className="text-3xl font-serif text-white mb-2">Global Protection</h3>
<p className="text-sm text-white/50 leading-relaxed"> Securing connections across 140+ countries in real-time. </p>
</div>

<div className="absolute inset-0 bg-brand-green/5 rounded-[2rem] border border-brand-green/10" style={{transform: 'translateZ(-20px) scale(0.95)'}}></div>

<div className="absolute inset-0 bg-brand-green/20 rounded-[2rem] blur-[60px] -z-10" style={{transform: 'translateZ(-40px)'}}></div>
</div>

</section>

<section className="container mx-auto px-6 mb-32 max-w-6xl" id="solutions">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="reveal">
<h3 className="text-2xl font-serif text-white mb-8 font-sans"> Why you are vulnerable </h3>
<div className="space-y-6">
<div className="flex gap-4 items-start opacity-50 hover:opacity-100 transition-opacity">
<div className="mt-1 text-red-400"> <i className="w-5 h-5" data-lucide="x-circle"></i> </div>
<div className="">
<h4 className="text-white font-medium"> ISP Tracking </h4>
<p className="text-sm text-white/60 mt-1"> Internet providers sell your browsing history to advertisers. </p>
</div>
</div>
<div className="flex gap-4 items-start opacity-50 hover:opacity-100 transition-opacity">
<div className="mt-1 text-red-400"> <i className="w-5 h-5" data-lucide="x-circle"></i> </div>
<div className="">
<h4 className="text-white font-medium"> Public Wi-Fi Risks </h4>
<p className="text-sm text-white/60 mt-1"> Hackers can intercept data on unsecured coffee shop networks. </p>
</div>
</div>
<div className="flex gap-4 items-start opacity-50 hover:opacity-100 transition-opacity">
<div className="mt-1 text-red-400"> <i className="w-5 h-5" data-lucide="x-circle"></i> </div>
<div className="">
<h4 className="text-white font-medium"> Geo-Restrictions </h4>
<p className="text-sm text-white/60 mt-1"> Content is blocked based on your physical location. </p>
</div>
</div>
</div>
</div>

<div className="reveal delay-200 relative p-8 rounded-3xl bg-brand-panel border border-brand-green/20 overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full pointer-events-none"></div>
<h3 className="text-2xl font-serif text-white mb-8 relative z-10 font-sans"> The Vaguard Shield </h3>
<div className="space-y-6 relative z-10">
<div className="flex gap-4 items-start">
<div className="mt-1 text-brand-green bg-brand-green/10 p-1 rounded-full"> <i className="w-3.5 h-3.5" data-lucide="check"></i> </div>
<div>
<h4 className="text-white font-medium"> End-to-End Encryption </h4>
<p className="text-sm text-white/60 mt-1"> Your data travels through a secure tunnel impossible to crack. </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-brand-green bg-brand-green/10 p-1 rounded-full"> <i className="w-3.5 h-3.5" data-lucide="check"></i> </div>
<div className="">
<h4 className="text-white font-medium"> IP Masking </h4>
<p className="text-sm text-white/60 mt-1"> Surf anonymously with a hidden IP address. </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1 text-brand-green bg-brand-green/10 p-1 rounded-full"> <i className="w-3.5 h-3.5" data-lucide="check"></i> </div>
<div>
<h4 className="text-white font-medium"> No Bandwidth Limits </h4>
<p className="text-sm text-white/60 mt-1"> Stream and download as much as you want without throttling. </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 mb-32 max-w-6xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="reveal relative h-[400px] flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-green/5 to-transparent rounded-full blur-3xl"></div>
<div className="relative w-full h-full border border-white/5 rounded-2xl bg-black/40 overflow-hidden">
<svg className="absolute inset-0 w-full h-full opacity-50" xmlns="http://www.w3.org/2000/svg">
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(var(--c-white),0.05)" strokeWidth="1"></path>
</pattern>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<div className="w-24 h-24 bg-brand-dark border border-brand-green/50 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center z-10 animate-float">
<i className="w-8 h-8 text-brand-green" data-lucide="lock"></i>
</div>

<div className="absolute w-64 h-64 border border-white/10 rounded-full animate-spin [animation-duration:10s]"></div>
<div className="absolute w-96 h-96 border border-white/5 rounded-full animate-spin [animation-duration:15s] [animation-direction:reverse]"></div>
</div>
</div>
</div>

<div className="reveal delay-100">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-300 text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="sparkles"></i>
                        Smart Location Tech 
                    </div>
<h3 className="text-3xl font-serif text-white mb-6 font-sans"> Auto-Connect. Stay Secure. </h3>
<p className="text-white/60 mb-8 leading-relaxed"> Our proprietary algorithm finds the fastest and most secure server for your location automatically. </p>

<div className="bg-white/5 rounded-xl p-5 border border-white/10 mb-8">
<div className="flex items-start gap-4">
<div className="mt-1 min-w-[24px] text-brand-green">
<i className="w-5 h-5" data-lucide="wifi"></i>
</div>
<div className="">
<h5 className="text-sm font-medium text-white mb-1"> Network Optimization </h5>
<p className="text-xs text-white/50 mb-3"> Switching to Frankfurt #482 will reduce latency by 14ms. </p>
<div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
<div className="bg-brand-green h-full w-[86%] animate-[width_2s_ease-out]"></div>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-4">
<div className="btn-wrapper">
<button className="btn px-5 py-2.5">
<svg className="btn-svg" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
</svg>
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter">C</span><span className="btn-letter">o</span><span className="btn-letter">n</span><span className="btn-letter">n</span><span className="btn-letter">e</span><span className="btn-letter">c</span><span className="btn-letter">t</span>
</div>
<div className="txt-2">
<span className="btn-letter">S</span><span className="btn-letter">e</span><span className="btn-letter">c</span><span className="btn-letter">u</span><span className="btn-letter">r</span><span className="btn-letter">e</span>
</div>
</div>
</button>
</div>
<span className="text-xs text-white/30 font-mono"> &lt; 0.2s connection </span>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 mb-32 max-w-6xl">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-serif text-white font-sans tracking-tight"> Why Professionals Choose Vaguard </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

<div className="md:col-span-2 relative group overflow-hidden rounded-[32px] bg-brand-panel border border-white/10 p-8 md:p-12 reveal transition-colors hover:border-white/20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-brand-green/80 to-transparent shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
<div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-green/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-12">
<div className="flex-1 max-w-xl">
<div className="text-[10px] font-mono font-medium text-brand-green mb-6 tracking-[0.2em] uppercase"> Advantage / 01 </div>
<h3 className="text-4xl md:text-5xl font-medium text-white mb-4 font-sans tracking-tighter leading-tight"> Privacy, Not Complexity. </h3>
<p className="text-white/50 text-base md:text-lg font-light leading-relaxed mb-8 max-w-sm"> Built-in protections for DNS leaks and WebRTC. We handle the technical security so you can browse freely. </p>
<button className="group flex items-center gap-3 text-xs font-semibold text-white bg-white/5 border border-white/10 px-5 py-2.5 rounded-full hover:bg-white/10 transition-all hover:border-brand-green/30 hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<span>View Protocols</span>
<i className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</button>
</div>

<div className="relative w-full md:w-[380px] h-[220px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl shadow-2xl flex flex-col items-center justify-center p-6 overflow-hidden group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-transparent opacity-50"></div>
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-brand-green mb-4 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
<i className="w-6 h-6" data-lucide="globe"></i>
</div>
<h4 className="text-white font-medium mb-1">Seamless Sync</h4>
<p className="text-xs text-white/40 max-w-[200px]"> Protected across iPhone, Mac, Windows &amp; Android. </p>
</div>

<div className="absolute -left-12 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="absolute -right-12 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-[32px] bg-brand-panel border border-white/10 p-8 min-h-[480px] flex flex-col justify-between reveal delay-100 transition-colors hover:border-white/20">

<div className="absolute top-0 right-10 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-brand-green/40 to-transparent blur-[1px]"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="text-[10px] font-mono font-medium text-brand-green/70 mb-6 tracking-[0.2em] uppercase"> Advantage / 02 </div>
<h3 className="text-3xl font-medium text-white mb-3 font-sans tracking-tight"> Automated Intelligence </h3>
<p className="text-white/50 text-sm font-light leading-relaxed max-w-xs"> Reduce manual configuration. One click secures your entire digital footprint. </p>
</div>

<div className="mt-12 relative w-full rounded-2xl border border-white/10 bg-brand-dark p-5 overflow-hidden">
<div className="absolute top-0 right-8 w-16 h-[1px] bg-brand-green shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green border border-brand-green/20">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<div>
<div className="text-sm text-white font-medium">Threat Blocking</div>
<div className="text-[10px] text-white/40"> 12,405 trackers blocked </div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-[10px] text-white/30 uppercase tracking-wider mb-1">
<span>Safety Score</span> <span className="text-brand-green">99.8%</span>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-brand-green w-[99%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
</div>
<div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-2">
<div className="h-full bg-white/20 w-[65%]"></div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<button className="text-xs font-semibold text-white/70 hover:text-white flex items-center gap-2 transition-colors"> 
                            Learn more <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="relative group overflow-hidden rounded-[32px] bg-brand-panel border border-white/10 p-8 min-h-[480px] flex flex-col justify-between reveal delay-200 transition-colors hover:border-white/20">

<div className="absolute top-0 left-10 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-[1px]"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<div className="text-[10px] font-mono font-medium text-white/40 mb-6 tracking-[0.2em] uppercase"> Advantage / 03 </div>
<h3 className="text-3xl font-medium text-white mb-3 font-sans tracking-tight"> Real-time Visibility </h3>
<p className="text-white/50 text-sm font-light leading-relaxed max-w-xs"> Enterprise-grade power with consumer-grade UX. See your connection stats the moment you connect. </p>
</div>

<div className="mt-12 relative w-full h-[140px] rounded-2xl border border-white/10 bg-brand-dark overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-32 h-32 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_10px_rgba(16,185,129,1)]"></div>
</div>
<div className="absolute w-20 h-20 border border-white/10 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
<div className="absolute w-2 h-2 bg-white rounded-full"></div>
</div>

<div className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></div>
<span className="text-[10px] text-white font-medium"> Live Monitoring </span>
</div>
<span className="text-[10px] text-white/40 font-mono">12ms</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/5">
<button className="text-xs font-semibold text-white/70 hover:text-white flex items-center gap-2 transition-colors"> 
                            Explore Dashboard <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="w-full py-20 bg-white/[0.02] border-y border-white/5 mb-24 relative">
<div className="container mx-auto px-6 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">

<div className="reveal p-8 rounded-2xl bg-black/40 border border-white/5">
<div className="flex gap-1 text-brand-green mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-white/80 font-serif italic mb-6"> "Vaguard transformed our remote work security. It's fast, invisible, and just works." </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<div className="text-sm font-medium text-white"> Sarah Jenkins </div>
<div className="text-xs text-white/40"> CTO, TechFlow </div>
</div>
</div>
</div>

<div className="reveal delay-100 p-8 rounded-2xl bg-black/40 border border-white/5">
<div className="flex gap-1 text-brand-green mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-white/80 font-serif italic mb-6"> "The only VPN that doesn't slow down my gigabit connection. Absolutely essential." </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<div className="text-sm font-medium text-white"> David Chen </div>
<div className="text-xs text-white/40"> Developer </div>
</div>
</div>
</div>
</div>

<div className="relative w-full overflow-hidden mask-gradient-fade">
<div className="flex animate-marquee w-max gap-32 items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-xl font-bold font-serif text-white">WIRED</div>
<div className="text-xl font-bold font-sans tracking-tight text-white"> TechCrunch </div>
<div className="text-xl font-bold font-mono text-white">TheVerge</div>
<div className="text-xl font-bold font-sans text-white">Forbes</div>
<div className="text-xl font-bold font-serif italic text-white"> Reuters </div>
<div className="text-xl font-bold font-mono text-white">CNET</div>

<div className="text-xl font-bold font-serif text-white">WIRED</div>
<div className="text-xl font-bold font-sans tracking-tight text-white"> TechCrunch </div>
<div className="text-xl font-bold font-mono text-white">TheVerge</div>
<div className="text-xl font-bold font-sans text-white">Forbes</div>
<div className="text-xl font-bold font-serif italic text-white"> Reuters </div>
<div className="text-xl font-bold font-mono text-white">CNET</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 mb-32 text-center" id="pricing">
<div className="reveal relative max-w-4xl mx-auto bg-gradient-to-b from-brand-green/10 to-transparent p-12 rounded-3xl border border-brand-green/20 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-green/20 to-transparent opacity-40"></div>
<h2 className="text-3xl md:text-5xl font-serif text-white mb-6 relative z-10 font-sans"> Start Reclaiming Your Privacy </h2>
<p className="text-white/60 mb-10 max-w-lg mx-auto relative z-10"> Transparent pricing. No hidden fees. 30-day money back guarantee. </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 relative z-10">
<div className="bg-black/40 border border-white/10 rounded-xl p-6 hover:border-brand-green/50 transition-colors">
<div className="text-sm text-white/50 mb-2">Monthly</div>
<div className="text-2xl font-bold text-white">$12<span className="text-sm font-normal text-white/40">/mo</span></div>
</div>
<div className="bg-brand-green/10 border border-brand-green/50 rounded-xl p-6 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-black text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Best Value</div>
<div className="text-sm text-brand-green mb-2">Yearly</div>
<div className="text-2xl font-bold text-white">$4<span className="text-sm font-normal text-white/40">/mo</span></div>
</div>
<div className="bg-black/40 border border-white/10 rounded-xl p-6 hover:border-brand-green/50 transition-colors">
<div className="text-sm text-white/50 mb-2">Business</div>
<div className="text-2xl font-bold text-white">$29<span className="text-sm font-normal text-white/40">/mo</span></div>
</div>
</div>
<button className="relative z-10 bg-white text-black px-10 py-4 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"> 
                    Get Started Now 
                </button>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-brand-panel pt-20 pb-10 px-6 relative z-10">
<div className="container mx-auto max-w-7xl">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

<div className="flex flex-col gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-brand-green rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
<span className="text-lg font-semibold tracking-tight text-white font-sans uppercase"> Vaguard </span>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-brand-green transition-colors text-white/50" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-brand-green transition-colors text-white/50" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-brand-green transition-colors text-white/50" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
<div>
<h4 className="text-white font-medium text-sm mb-4"> Product </h4>
<ul className="flex flex-col gap-3 text-sm text-white/40">
<li> <a className="hover:text-brand-green transition-colors" href="#"> Features </a> </li>
<li> <a className="hover:text-brand-green transition-colors" href="#"> Pricing </a> </li>
<li> <a className="hover:text-brand-green transition-colors" href="#"> Servers </a> </li>
<li> <a className="hover:text-brand-green transition-colors" href="#"> Download </a> </li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4"> Company </h4>
<ul className="flex flex-col gap-3 text-sm text-white/40">
<li> <a className="hover:text-brand-green transition-colors" href="#"> About </a> </li>
<li> <a className="hover:text-brand-green transition-colors" href="#"> Careers </a> </li>
<li> <a className="hover:text-brand-green transition-colors" href="#"> Blog </a> </li>
<li> <a className="hover:text-brand-green transition-colors" href="#"> Contact </a> </li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4"> Support </h4>
<ul className="flex flex-col gap-3 text-sm text-white/40">
<li> <a className="hover:text-brand-green transition-colors" href="#"> Help Center </a> </li>
<li> <a className="hover:text-brand-green transition-colors" href="#"> Setup Guides </a> </li>
<li> <a className="hover:text-brand-green transition-colors" href="#"> Status </a> </li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4"> Legal </h4>
<ul className="flex flex-col gap-3 text-sm text-white/40">
<li> <a className="hover:text-brand-green transition-colors" href="#"> Privacy Policy </a> </li>
<li> <a className="hover:text-brand-green transition-colors" href="#"> Terms </a> </li>
<li> <a className="hover:text-brand-green transition-colors" href="#"> Warrant Canary </a> </li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center md:text-left">
<p className="text-xs text-white/20 font-mono"> © 2024 Vaguard Inc. All rights reserved. </p>
</div>
</div>
</footer>



    </>
  );
}
