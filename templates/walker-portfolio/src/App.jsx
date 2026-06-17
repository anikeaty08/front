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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Star Generation Logic
        const starContainer = document.getElementById('stars-container');
        const starCount = 100;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 1; // 1px to 3px
            const duration = Math.random() * 3 + 2; // 2s to 5s
            const opacity = Math.random() * 0.7 + 0.3;

            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.setProperty('--duration', `${duration}s`);
            star.style.setProperty('--opacity', opacity);

            starContainer.appendChild(star);
        }

        // Intersection Observer for Fade In Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-element').forEach((el) => {
            observer.observe(el);
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" id="stars-container">

</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-sm border-b border-white/5 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 group-hover:border-indigo-400 transition-colors">
<span className="text-indigo-300 font-medium text-sm">ZW</span>
</div>
<span className="text-sm font-medium text-slate-200 tracking-tight group-hover:text-white transition-colors">Zubair Walker</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-white transition-colors" href="#architecture">Architecture</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
</div>
<button className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/20 transition-all active:scale-95">
                Contact
            </button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/60 via-slate-950 to-slate-950 z-0"></div>
<div className="absolute top-20 right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] animate-pulse"></div>

<div className="absolute top-40 left-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-indigo-300 to-transparent rotate-[-15deg] opacity-20"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 max-w-2xl pt-10 lg:pt-0">
<div className="fade-in-element delay-100">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                        Available for hire
                    </span>
</div>
<h1 className="fade-in-element delay-200 text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                     Zubair Walker<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-indigo-200"></span>
</h1>
<div className="fade-in-element delay-300 space-y-1">
<p className="text-xl md:text-2xl text-slate-300 font-normal">
                        Backend Developer
                    </p>
<p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed max-w-lg">
                        Backend Developer specializing in scalable infrastructure, cloud architecture, and high-performance API design.
                    </p>
</div>
<div className="fade-in-element delay-500 flex flex-wrap gap-4 pt-4">
<button className="group px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_-5px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_-5px_rgba(79,70,229,0.5)] flex items-center gap-2 text-sm">
                        View Projects
                        <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-3.5 bg-slate-800/50 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 rounded-full font-medium transition-all text-sm backdrop-blur-sm">
                        Read Documentation
                    </button>
</div>
</div>

<div className="fade-in-element delay-700 relative h-[500px] w-full hidden lg:block">

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full h-full">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-indigo-500/10 rounded-full"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-indigo-500/20 rounded-full border-dashed"></div>

<div className="absolute top-[20%] left-[20%] p-3 rounded-2xl bg-slate-900 border border-indigo-500/30 shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] animate-bounce" style={{animationDuration: '3s'}}>
<i className="w-6 h-6 text-indigo-400" data-lucide="server"></i>
</div>
<div className="absolute bottom-[25%] right-[20%] p-3 rounded-2xl bg-slate-900 border border-indigo-500/30 shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] animate-bounce" style={{animationDuration: '4s'}}>
<i className="w-6 h-6 text-indigo-400" data-lucide="database"></i>
</div>
<div className="absolute top-[40%] right-[10%] p-3 rounded-2xl bg-slate-900 border border-indigo-500/30 shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] animate-bounce" style={{animationDuration: '5s'}}>
<i className="w-6 h-6 text-indigo-400" data-lucide="cloud"></i>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none stroke-indigo-500/20" style={{strokeDasharray: '4 4'}}>
<line strokeWidth="1" x1="24%" x2="50%" y1="24%" y2="50%"></line>
<line strokeWidth="1" x1="76%" x2="50%" y1="71%" y2="50%"></line>
<line strokeWidth="1" x1="86%" x2="50%" y1="44%" y2="50%"></line>
</svg>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-full blur-xl opacity-40"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-slate-900 rounded-full border border-indigo-500/50 flex items-center justify-center z-10 shadow-2xl">
<i className="w-8 h-8 text-white" data-lucide="code-2"></i>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full z-20">
<svg className="w-full h-auto block align-bottom" viewbox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="hill-gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#0f172a', stopOpacity: '0'}}></stop> 
<stop offset="20%" style={{stopColor: '#020617', stopOpacity: '0.8'}}></stop> 
<stop offset="100%" style={{stopColor: '#020617', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,229.3C840,235,960,213,1080,197.3C1200,181,1320,171,1380,165.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" fill="url(#hill-gradient)" fillOpacity="1"></path>
</svg>
</div>
</section>

<section className="relative z-30 bg-slate-950 py-24 border-t border-slate-900" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-xl font-normal text-indigo-400 mb-2">Technical Proficiency</h2>
<p className="text-3xl md:text-4xl text-white font-medium tracking-tight">Backend Advantage</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="group fade-in-element">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors duration-300">
<i className="w-6 h-6 text-indigo-400" data-lucide="cpu"></i>
</div>
<h3 className="text-xl text-slate-100 font-medium mb-3">System Architecture</h3>
<p className="text-lg text-slate-400 leading-relaxed font-normal">
                        Designing robust, fault-tolerant distributed systems. I specialize in microservices orchestration and containerization using Kubernetes and Docker to ensure maximum uptime.
                    </p>
</div>

<div className="group fade-in-element delay-100">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors duration-300">
<i className="w-6 h-6 text-indigo-400" data-lucide="zap"></i>
</div>
<h3 className="text-xl text-slate-100 font-medium mb-3">Performance &amp; Caching</h3>
<p className="text-lg text-slate-400 leading-relaxed font-normal">
                        Optimizing response times through intelligent caching strategies (Redis), database indexing, and asynchronous processing queues to handle high-concurrency loads.
                    </p>
</div>

<div className="group fade-in-element delay-200">
<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:bg-indigo-500/10 transition-colors duration-300">
<i className="w-6 h-6 text-indigo-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl text-slate-100 font-medium mb-3">Data Security</h3>
<p className="text-lg text-slate-400 leading-relaxed font-normal">
                        Implementing rigorous security protocols, OAuth/JWT authentication, and encryption at rest. Ensuring data integrity and compliance with industry standards.
                    </p>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden bg-slate-950" id="architecture">

<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-indigo-950/20 pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 fade-in-element">
<span className="text-xs font-bold tracking-widest text-indigo-500 uppercase mb-4 block">Analysis of your data</span>
<h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight leading-tight">
                    Helping you connect the dots.<br/>
                    So you can see what scale <br/>
                    looks like in the future.
                </h2>
<div className="space-y-6 text-lg text-slate-400 leading-relaxed">
<p>
                        Effective backend development isn't just about writing code; it's about predicting how data flows as your user base grows.
                    </p>
<p>
                        I build observable systems where bottlenecks are detected before they become outages. By leveraging advanced telemetry and logging, I ensure your infrastructure tells a clear story.
                    </p>
</div>
<div className="mt-10 flex items-center gap-4 text-sm font-medium text-indigo-300 cursor-pointer hover:text-indigo-200 transition-colors">
<span>Explore Methodology</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[500px] fade-in-element delay-200">

<svg className="absolute inset-0 w-full h-full" style={{overflow: 'visible'}}>

<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#6366f1', stopOpacity: '0.6'}}></stop>
<stop offset="100%" style={{stopColor: '#818cf8', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<path d="M100,400 Q250,350 300,200 T500,100" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5"></path>
<path d="M300,200 L450,300" fill="none" stroke="url(#lineGrad)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M100,400 L200,250" fill="none" stroke="url(#lineGrad)" stroke-opacity="0.3" strokeWidth="1.5"></path>

<circle cx="100" cy="400" fill="#1e1b4b" r="6" stroke="#6366f1" strokeWidth="2"></circle>
<circle cx="100" cy="400" fill="#6366f1" fillOpacity="0.2" r="12">
<animate attributename="r" dur="3s" repeatcount="indefinite" values="12;20;12"></animate>
</circle>
<circle cx="300" cy="200" fill="#1e1b4b" r="8" stroke="#ffffff" strokeWidth="2"></circle>
<circle cx="300" cy="200" fill="#ffffff" fillOpacity="0.1" r="30">
<animate attributename="r" dur="4s" repeatcount="indefinite" values="30;40;30"></animate>
</circle>
<circle cx="500" cy="100" fill="#818cf8" r="4"></circle>
<circle cx="450" cy="300" fill="#818cf8" fillOpacity="0.5" r="4"></circle>
<circle cx="200" cy="250" fill="#818cf8" fillOpacity="0.5" r="3"></circle>
</svg>

<div className="absolute bottom-0 right-10 w-64 h-80 opacity-90 pointer-events-none">

<div className="absolute bottom-0 right-0 w-48 h-64 bg-gradient-to-t from-black via-indigo-950 to-indigo-900 rounded-tl-[100px] rounded-tr-[60px]"></div>

<div className="absolute bottom-20 right-32 w-8 h-40 bg-indigo-950 origin-bottom rotate-[-15deg] rounded-full"></div>

<div className="absolute bottom-[230px] right-[180px] w-8 h-8 bg-white rounded-full shadow-[0_0_50px_10px_rgba(255,255,255,0.6)] animate-pulse"></div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-900 bg-slate-950 py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
<span className="text-xs text-slate-400">Z</span>
</div>
<span className="text-sm text-slate-500">© 2024 Zubair Walker. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
</footer>


    </>
  );
}
