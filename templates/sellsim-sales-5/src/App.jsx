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
brand: {
teal: '#077968',
blue: '#001F3A',
},
base: '#0a0a0a',
},
fontFamily: {
sans: ['Manrope', 'sans-serif'],
display: ['Clash Display', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
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
      


<div aria-hidden="true" className="absolute inset-x-0 top-0 h-[150vh] pointer-events-none z-0 select-none overflow-hidden">

<div className="max-w-[1200px] mx-auto px-6 h-full border-x border-white/[0.02]">
<div className="grid grid-cols-12 gap-6 h-full">


<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>
<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>
<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>
<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>
<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>
<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>
<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>
<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>
<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>
<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>
<div className="col-span-1 border-r border-white/[0.02] h-full hidden md:block"></div>

</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-base/40 to-base"></div>
</div>

<header className="fixed top-0 w-full z-50 bg-base/80 backdrop-blur-sm border-b border-white/[0.03]">
<div className="max-w-[1200px] mx-auto px-6 h-20 grid grid-cols-12 items-center gap-6">

<div className="col-span-3">
<a className="text-lg font-medium tracking-tight uppercase" href="#">SellSim</a>
</div>

<nav className="col-span-6 hidden md:flex gap-8 text-sm text-gray-300">
<a className="hover:text-white transition-colors duration-300" href="#context">Context</a>
<a className="hover:text-white transition-colors duration-300" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors duration-300" href="#why-sellsim">Why SellSim</a>
<a className="hover:text-white transition-colors duration-300" href="#who-its-for">Who It’s For</a>
</nav>

<div className="col-span-3 flex justify-end">
<a className="bg-brand-teal text-white text-xs font-medium py-3 px-5 hover:bg-opacity-90 transition-all flex items-center gap-2" href="#">
                    Request a Strategic Conversation
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</header>
<main className="pt-20 relative z-10">

<section className="py-32 md:py-48 bg-transparent">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-6">
<div className="col-span-12 md:col-span-7 flex flex-col items-start text-left">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8 text-white">
                        Turn Your Sales Strategy<br/>
                        Into Consistent, Predictable<br/>
                        Revenue
                    </h1>
<p className="text-lg text-gray-400 mb-12 font-light leading-relaxed max-w-2xl">
                        SellSim is a sales performance system that translates strategy into behaviour, using bespoke courses and AI roleplays, all governed by a leadership performance layer.
                    </p>

<a className="bg-brand-teal text-white text-xs font-medium py-3 px-6 hover:bg-opacity-90 transition-all flex items-center gap-2" href="#">
                        Request a Strategic Conversation
                        <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-transparent border-t border-white/[0.03]" id="context">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-6">
<div className="col-span-12 md:col-span-6 flex flex-col items-start text-left">

<div className="flex items-center gap-2 font-display text-xs tracking-widest text-brand-teal mb-6 uppercase">
<span className="w-1 h-1 rounded-full bg-current"></span>
                        THE CONTEXT
                    </div>
<p className="text-xl md:text-2xl text-white font-medium tracking-tight mb-8">
                        Sales organisations fail on execution, not intent.
                    </p>
<div className="space-y-6 text-base text-gray-400 font-light leading-relaxed">
<p>
                            Strategy exists, but behaviour varies. Performance depends on individuals rather than the system.
                        </p>
<p>
                            Leaders see issues too late.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-32 elevated-plane border-y border-white/[0.03]">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-6">
<div className="col-span-12 md:col-span-8 text-left">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                        Strategy doesn’t drive results.<br/>
<span className="italic font-light text-gray-200">Behaviour does.</span>
</h2>
</div>
</div>
</section>

<section className="py-24 bg-base" id="how-it-works">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-6">

<div className="col-span-12 mb-16">

<div className="flex items-center gap-2 font-display text-xs tracking-widest text-brand-teal mb-4 uppercase">
<span className="w-1 h-1 rounded-full bg-current"></span>
                        THE SYSTEM
                    </div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-2">How SellSim Works</h3>
<p className="text-base text-gray-400 font-light">A three-part execution system, wrapped in performance management.</p>
</div>

<div className="col-span-12 flex flex-col gap-12">

<div className="flex flex-col items-start border-t border-white/[0.05] pt-6">

<span className="font-display text-5xl md:text-6xl text-white/20 mb-4 font-normal">01</span>
<h4 className="text-xl font-medium text-white tracking-tight">Strategic Profile</h4>
</div>

<div className="flex flex-col items-start border-t border-white/[0.05] pt-6">
<span className="font-display text-5xl md:text-6xl text-white/20 mb-4 font-normal">02</span>
<h4 className="text-xl font-medium text-white tracking-tight">Bespoke Courses</h4>
</div>

<div className="flex flex-col items-start border-t border-white/[0.05] pt-6">
<span className="font-display text-5xl md:text-6xl text-white/20 mb-4 font-normal">03</span>
<h4 className="text-xl font-medium text-white tracking-tight">AI Roleplays</h4>
</div>
</div>
</div>
</section>

<section className="py-24 elevated-plane border-y border-white/[0.03]">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-6">
<div className="col-span-12 md:col-span-7 text-left">

<div className="flex items-center gap-2 font-display text-xs tracking-widest text-brand-teal mb-6 uppercase">
<span className="w-1 h-1 rounded-full bg-current"></span>
                        VISIBILITY
                    </div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-8">
                        Performance Management Layer
                    </h3>
<p className="text-lg text-gray-300 font-light leading-relaxed mb-8">
                        Gain visibility into behaviour over time. See exactly how learning translates into execution. Identify capability gaps instantly and receive early intervention signals.
                    </p>
<p className="text-lg text-white font-light italic border-l-2 border-brand-teal pl-6 py-1">
                        This is not activity reporting. It is execution insight.
                    </p>
</div>
</div>
</section>

<section className="py-24 bg-base" id="why-sellsim">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-6">

<div className="col-span-12 md:col-span-5 mb-12 md:mb-0">

<div className="flex items-center gap-2 font-display text-xs tracking-widest text-gray-500 mb-6 uppercase">
<span className="w-1 h-1 rounded-full bg-current"></span>
                        WHAT SELLSIM IS NOT
                    </div>
<ul className="space-y-4 text-lg text-gray-400 font-light">
<li className="flex items-center gap-3">
<span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            Training library
                        </li>
<li className="flex items-center gap-3">
<span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            Coaching prompt engine
                        </li>
<li className="flex items-center gap-3">
<span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                            CRM replacement
                        </li>
</ul>
</div>

<div className="col-span-12 md:col-span-7 flex flex-col justify-start">

<div className="flex items-center gap-2 font-display text-xs tracking-widest text-brand-teal mb-6 uppercase">
<span className="w-1 h-1 rounded-full bg-current"></span>
                        WHAT SELLSIM IS
                    </div>
<h3 className="text-2xl md:text-3xl text-white font-medium tracking-tight">
                        SellSim is a sales execution system.
                    </h3>
</div>
</div>
</section>

<section className="py-24 bg-base border-t border-white/[0.03]" id="who-its-for">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-12 md:gap-6">

<div className="col-span-12 md:col-span-6">
<div className="flex items-center gap-2 font-display text-xs tracking-widest text-brand-teal mb-8 uppercase">
<span className="w-1 h-1 rounded-full bg-current"></span>
                        WHO IT’S FOR
                    </div>
<ul className="space-y-4 text-base text-gray-200 font-light">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 bg-brand-teal mt-2"></span>
                            £10m+ revenue organisations
                        </li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 bg-brand-teal mt-2"></span>
                            Complex or consultative sales
                        </li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 bg-brand-teal mt-2"></span>
                            Multi-stakeholder buying journeys
                        </li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 bg-brand-teal mt-2"></span>
                            Need for predictable performance
                        </li>
</ul>
</div>

<div className="col-span-12 md:col-span-6">
<div className="flex items-center gap-2 font-display text-xs tracking-widest text-gray-500 mb-8 uppercase">
<span className="w-1 h-1 rounded-full bg-current"></span>
                        WHO IT’S NOT
                    </div>
<ul className="space-y-4 text-base text-gray-400 font-light">
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 bg-gray-700 mt-2"></span>
                            High-volume transactional sales
                        </li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 bg-gray-700 mt-2"></span>
                            Low-cost AI tools
                        </li>
<li className="flex items-start gap-3">
<span className="w-1.5 h-1.5 bg-gray-700 mt-2"></span>
                            Self-serve experimentation
                        </li>
</ul>
</div>
</div>
</section>

<section className="py-24 elevated-plane border-y border-white/[0.03]">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-6">
<div className="col-span-12 md:col-span-6">

<div className="flex items-center gap-2 font-display text-xs tracking-widest text-brand-teal mb-8 uppercase">
<span className="w-1 h-1 rounded-full bg-current"></span>
                        OUTCOMES
                    </div>
<div className="flex flex-col gap-8">
<ul className="space-y-3 text-lg text-white font-normal">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-teal text-lg" icon="solar:arrow-right-linear"></iconify-icon>
                                Faster onboarding
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-teal text-lg" icon="solar:arrow-right-linear"></iconify-icon>
                                Stronger judgement
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-teal text-lg" icon="solar:arrow-right-linear"></iconify-icon>
                                Earlier leadership intervention
                            </li>
</ul>
<ul className="space-y-3 text-lg text-white font-normal pt-4">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-teal text-lg" icon="solar:arrow-right-linear"></iconify-icon>
                                Consistent execution
                            </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-teal text-lg" icon="solar:arrow-right-linear"></iconify-icon>
                                Reduced dependency on individuals
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 bg-base">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-6">
<div className="col-span-12 md:col-span-8 flex flex-col items-start text-left">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-10">
                        Start with a strategic conversation
                    </h2>
<a className="bg-brand-teal text-white text-sm font-medium py-4 px-8 hover:bg-opacity-90 transition-all flex items-center gap-3 mb-10" href="#">
                        Request a Strategic Conversation
                        <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<p className="text-sm text-gray-500 font-light">
                        We work with a small number of organisations annually.
                    </p>
</div>
</div>
</section>
</main>

<footer className="py-12 bg-base border-t border-white/[0.03]">
<div className="max-w-[1200px] mx-auto px-6 grid grid-cols-12 gap-6">
<div className="col-span-12 text-left">
<p className="text-xs text-gray-600 font-light">SellSim © 2024</p>
</div>
</div>
</footer>

    </>
  );
}
