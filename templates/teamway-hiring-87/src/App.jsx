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
      

<nav className="w-full px-6 py-6 md:px-12 flex items-center justify-between max-w-[1440px] mx-auto">

<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gray-900 text-white flex items-center justify-center rounded-br-lg rounded-tl-lg rounded-tr-sm rounded-bl-sm">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
<span className="text-xl font-semibold tracking-tight">Teamway</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-gray-900 transition-colors" href="#">Companies</a>
<a className="hover:text-gray-900 transition-colors" href="#">Members</a>
<a className="hover:text-gray-900 transition-colors" href="#">Society</a>
<a className="hover:text-gray-900 transition-colors" href="#">About</a>
<a className="hover:text-gray-900 transition-colors" href="#">Login</a>
</div>

<div className="hidden md:block">
<button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all">
                Hire talent
            </button>
</div>

<div className="md:hidden">
<i className="w-6 h-6 text-gray-900" data-lucide="menu"></i>
</div>
</nav>

<main className="w-full max-w-[1440px] mx-auto px-6 md:px-12 pt-8 pb-20 lg:flex lg:gap-16 items-center">

<div className="lg:w-[40%] flex flex-col justify-center mb-16 lg:mb-0">
<h1 className="text-5xl md:text-6xl lg:text-[5rem] leading-[1.1] font-semibold tracking-tight mb-8 text-gray-900">
                Build your <br/> dream team <br/> today.
            </h1>
<p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-md mb-10 font-normal">
                Unlock success with our handpicked dream team of experts. Hire now for unparalleled results.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

<button className="group bg-gray-900 text-white pl-6 pr-2 py-2 rounded-full flex items-center gap-4 transition-transform hover:scale-105">
<span className="font-medium text-sm">Hiring? Book a call</span>
<div className="bg-white text-gray-900 rounded-full p-2 group-hover:translate-x-1 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</button>

<div className="flex items-center -space-x-3">
<img alt="Avatar 1" className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Avatar 2" className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Avatar 3" className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 border-[#FDFBF7] bg-gray-200 flex items-center justify-center text-[10px] font-medium text-gray-600">
                        +728
                    </div>
</div>
</div>
</div>

<div className="lg:w-[60%] grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="flex flex-col gap-5 pt-8 md:pt-12">

<div className="relative group h-[340px] w-full rounded-3xl overflow-hidden bg-gray-200">
<img alt="Mike" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm py-2 px-3 rounded-2xl shadow-lg flex items-center gap-2">
<div className="flex flex-col">
<span className="text-xs font-semibold text-gray-900 flex items-center gap-1">
                                Mike <i className="w-3 h-3 text-black fill-current" data-lucide="check-circle-2"></i>
</span>
<span className="text-[10px] text-gray-500 font-medium">Frontend Dev.</span>
</div>
</div>
</div>

<div className="bg-[#E0D8F5] rounded-3xl p-6 flex flex-col justify-center min-h-[220px]">
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Remote Talent Pool</h3>
<p className="text-xs text-gray-700 leading-relaxed font-normal">
                        Pre-vetted remote developers, designers, and product managers with world-class technical and communication skills.
                    </p>
</div>
</div>

<div className="flex flex-col gap-5">

<div className="bg-gradient-to-br from-[#E1F3E6] to-[#EAF8EE] rounded-3xl p-6 flex flex-col justify-center min-h-[220px]">
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Quick <br/> and adaptable</h3>
<p className="text-xs text-gray-700 leading-relaxed font-normal">
                        Hire within a mere 72 hours. Easily adjust your team size from month to month as required.
                    </p>
</div>

<div className="relative group h-[340px] w-full rounded-3xl overflow-hidden bg-gray-200">
<img alt="Asger" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm py-2 px-3 rounded-2xl shadow-lg flex items-center gap-2">
<div className="flex flex-col">
<span className="text-xs font-semibold text-gray-900 flex items-center gap-1">
                                Asger <i className="w-3 h-3 text-black fill-current" data-lucide="check-circle-2"></i>
</span>
<span className="text-[10px] text-gray-500 font-medium">UI/UX Designer</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-5 pt-8 md:pt-4">

<div className="relative group h-[260px] w-full rounded-3xl overflow-hidden bg-gray-200">
<img alt="Latisha" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm py-2 px-3 rounded-2xl shadow-lg flex items-center gap-2">
<div className="flex flex-col">
<span className="text-xs font-semibold text-gray-900 flex items-center gap-1">
                                Latisha <i className="w-3 h-3 text-black fill-current" data-lucide="check-circle-2"></i>
</span>
<span className="text-[10px] text-gray-500 font-medium">Mobile Dev.</span>
</div>
</div>
</div>

<div className="bg-[#FBCBA5] relative overflow-hidden rounded-3xl p-6 flex flex-col justify-center flex-grow min-h-[300px]">

<div className="absolute -top-10 -right-10 w-40 h-40 border-[20px] border-white/20 rounded-full"></div>
<div className="absolute top-10 -right-20 w-40 h-40 border-[20px] border-white/20 rounded-full"></div>
<div className="relative z-10 mt-auto">
<p className="text-lg font-medium text-gray-900 leading-snug tracking-tight">
                            Rest assured, there are no crazy fees or legal hassle to worry about.
                        </p>
</div>
</div>
</div>
</div>
</main>

<section className="w-full bg-[#F4F2EE] py-16 px-6">
<div className="max-w-[1440px] mx-auto flex flex-col items-center">
<p className="text-gray-400 text-sm mb-10 text-center font-normal">
                Join 150+ companies trusting Teamway for their remote engineering needs.
            </p>
<div className="w-full flex flex-wrap justify-center items-center gap-x-10 gap-y-8 opacity-80 grayscale">

<div className="flex items-center gap-1 font-serif text-2xl text-gray-800">
<span className="font-light italic">&amp;</span>Open
                </div>

<div className="flex items-center gap-2 font-bold text-lg tracking-tight text-gray-900">
<div className="bg-gray-900 text-white p-0.5 text-xs font-serif italic">U</div>
                    unisport
                </div>

<div className="font-extrabold text-2xl text-gray-900">Aller</div>

<div className="flex items-center gap-2 font-bold text-xl text-gray-900">
<div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-[#F4F2EE] rounded-full"></div>
</div>
                    verisure
                </div>

<div className="flex items-center gap-1 font-bold text-xl text-gray-900">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i> Layerise
                </div>

<div className="flex items-center gap-2 font-bold text-lg text-gray-900">
<div className="border-2 border-gray-900 rounded p-0.5">
<div className="w-3 h-3 bg-gray-900"></div>
</div>
                    GamerPay
                </div>

<div className="flex items-center gap-2">
<div className="w-8 h-8 border border-gray-900 flex items-center justify-center rotate-45">
<span className="text-[10px] font-bold -rotate-45">BC</span>
</div>
<div className="flex flex-col leading-none text-xs font-bold tracking-widest uppercase">
<span>Better</span>
<span>Collective</span>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
