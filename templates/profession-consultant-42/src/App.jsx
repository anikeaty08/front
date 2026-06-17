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



        lucide.createIcons();
    
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
      

<div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030712]/60 backdrop-blur-xl">
<nav className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="w-10 h-10 flex items-center justify-center rounded bg-white/[0.03] border border-white/10 backdrop-blur-md text-sm font-semibold tracking-wider text-white hover:bg-white/[0.08] transition-colors" href="#">
                KB
            </a>

<div className="hidden md:flex space-x-12 text-xs font-medium tracking-widest text-slate-400 uppercase">
<a className="hover:text-white transition-colors duration-300" href="#home">Home</a>
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#about">About</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex px-6 py-2.5 bg-white text-black text-xs font-semibold uppercase tracking-widest rounded-sm hover:bg-slate-200 transition-colors duration-300" href="#contact">
                    Contact
                </a>
<button className="md:hidden text-slate-300 hover:text-white flex items-center justify-center">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>
</header>

<main className="flex-grow flex flex-col relative z-10">

<section className="relative pt-40 pb-32 md:pt-52 md:pb-40 px-6 max-w-7xl mx-auto w-full flex flex-col items-center justify-center text-center min-h-[90vh]" id="home">

<div className="absolute w-full top-1/4 left-0 flex justify-between px-10 lg:px-32 text-xs font-medium tracking-widest text-slate-600 uppercase pointer-events-none hidden md:flex">
<span>Accounting</span>
<span>Controlling</span>
<span>Languages</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-semibold mb-8 bg-gradient-to-br from-white via-white to-slate-500 text-transparent bg-clip-text max-w-5xl leading-[1.1]">
                Struktura v číslech.<br/>Svoboda v řeči.
            </h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed mb-12">
                Elevating businesses through meticulous financial controlling and strategic accounting, seamlessly bridged with expert language instruction for global professionals.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
<a className="px-8 py-4 bg-white text-black text-base font-medium rounded-full hover:bg-slate-200 transition-colors duration-300 w-full sm:w-auto flex justify-center items-center" href="#contact">
                    Discuss a Project
                </a>
<a className="px-8 py-4 bg-white/[0.02] border border-white/10 backdrop-blur-md text-white text-base font-medium rounded-full hover:bg-white/[0.06] transition-all duration-300 w-full sm:w-auto flex justify-center items-center" href="#services">
                    Explore Expertise
                </a>
</div>
</section>

<section className="w-full py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-semibold mb-4">Core Expertise</h2>
<p className="text-lg text-slate-400 font-light">Comprehensive consulting tailored to specialized needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white/[0.02] p-10 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<i className="w-8 h-8 text-white mb-8 group-hover:scale-110 transition-transform duration-500" data-lucide="calculator" strokeWidth="1.5"></i>
<h3 className="text-xl md:text-2xl tracking-tight text-white font-semibold mb-4">Accounting</h3>
<p className="text-base text-slate-400 font-light leading-relaxed">
                            Meticulous bookkeeping, statutory reporting, and tax compliance ensuring complete financial clarity and regulatory adherence for modern enterprises.
                        </p>
</div>

<div className="bg-white/[0.02] p-10 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<i className="w-8 h-8 text-white mb-8 group-hover:scale-110 transition-transform duration-500" data-lucide="pie-chart" strokeWidth="1.5"></i>
<h3 className="text-xl md:text-2xl tracking-tight text-white font-semibold mb-4">Controlling</h3>
<p className="text-base text-slate-400 font-light leading-relaxed">
                            Strategic financial analysis, dynamic budgeting, and rigorous performance monitoring to identify opportunities and drive sustainable business growth.
                        </p>
</div>

<div className="bg-white/[0.02] p-10 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-white/[0.04] transition-colors duration-500 group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<i className="w-8 h-8 text-white mb-8 group-hover:scale-110 transition-transform duration-500" data-lucide="languages" strokeWidth="1.5"></i>
<h3 className="text-xl md:text-2xl tracking-tight text-white font-semibold mb-4">Languages</h3>
<p className="text-base text-slate-400 font-light leading-relaxed">
                            Bespoke language instruction designed for corporate professionals, emphasizing nuanced business communication, vocabulary, and confident fluency.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full py-32 border-t border-white/5 relative" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl tracking-tight text-white font-semibold mb-6">Analytical precision meets clear communication.</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-12">
                        I specialize in deciphering complex financial landscapes and transforming them into actionable strategies. Coupled with targeted language coaching, I empower professionals to navigate both numbers and global conversations with absolute confidence.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
<div>
<div className="text-5xl font-semibold tracking-tighter text-white mb-2">10+</div>
<div className="text-xs font-medium tracking-widest text-slate-500 uppercase">Years Experience</div>
</div>
<div>
<div className="text-5xl font-semibold tracking-tighter text-white mb-2">100%</div>
<div className="text-xs font-medium tracking-widest text-slate-500 uppercase">Discretion</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
<div className="relative w-full max-w-md aspect-square p-2 border border-white/20 bg-white/[0.01] backdrop-blur-sm">
<img alt="Portrait" className="w-full h-full object-cover filter grayscale contrast-125 brightness-90" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;grayscale=true"/>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-difference text-white/50">
<i className="w-8 h-8" data-lucide="plus" strokeWidth="1"></i>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full border-t border-white/5 bg-[#030712] relative z-10 pt-32 pb-16" id="contact">
<div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
<span className="text-xs font-medium tracking-widest text-slate-500 uppercase mb-8">Start a Conversation</span>
<a className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-white hover:text-slate-300 transition-colors duration-300 mb-20 block" href="mailto:contact@klaudia.com">
                hello@klaudia.com
            </a>
<div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5">
<div className="text-sm text-slate-500 font-light">
                    © 2024 Klaudia Brzostowska.
                </div>
<div className="flex space-x-8 text-sm font-medium tracking-wide text-slate-400 uppercase">
<a className="hover:text-white transition-colors duration-300" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors duration-300" href="#">Twitter</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
