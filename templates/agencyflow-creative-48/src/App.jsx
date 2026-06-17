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
      

<nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
<div className="text-sm font-medium tracking-tight flex gap-6 text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">[ HOME ]</a>
<a className="hover:text-neutral-900 transition-colors" href="#">[ WORK ]</a>
<a className="hover:text-neutral-900 transition-colors" href="#">[ NEWS ]</a>
<a className="hover:text-neutral-900 transition-colors" href="#">[ CONTACT ]</a>
</div>
<div className="hidden md:block">
<span className="text-lg font-semibold tracking-tighter">AGENCYFLOW</span>
</div>
<div>
<button className="bg-neutral-900 text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-neutral-700 transition-colors flex items-center gap-2">
                    Get in touch <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</nav>

<main className="pt-24 pb-12 px-4 md:px-6 max-w-[1400px] mx-auto">

<header className="mb-8">
<div className="flex flex-col md:flex-row justify-between items-end border-b border-neutral-200 pb-2">
<h1 className="text-[12vw] md:text-[10vw] leading-[0.8] font-semibold tracking-tighter uppercase text-neutral-900">
                    AGENCY
                </h1>
<div className="mb-4 md:mb-8 text-right">
<p className="text-orange-600 font-medium text-xl tracking-tight">Growth Exclusive</p>
<p className="text-neutral-500 text-sm mt-1">EST. 2024</p>
</div>
</div>
</header>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-24">

<div className="lg:col-span-5 bg-neutral-900 text-white p-8 md:p-12 flex flex-col justify-between min-h-[500px] relative overflow-hidden rounded-sm group">
<div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
<i className="w-48 h-48" data-lucide="globe"></i>
</div>
<div className="relative z-10">
<h3 className="text-sm font-medium uppercase tracking-widest text-neutral-400 mb-2">San Francisco — USA</h3>
<div className="w-12 h-[1px] bg-orange-500 mb-6"></div>
<p className="text-neutral-400 max-w-xs text-lg">
                        Connect<br/>
<span className="text-white hover:underline cursor-pointer">@agencyflow.studio</span>
</p>
</div>
<div className="relative z-10">
<div className="bg-white/10 backdrop-blur-sm w-32 h-32 rounded-full flex items-center justify-center mb-6">
<svg className="w-16 h-16 text-white animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
<path d="M2 12h20"></path>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<h2 className="text-4xl font-semibold tracking-tight">Global Reach</h2>
</div>
</div>

<div className="lg:col-span-7 relative min-h-[500px] overflow-hidden rounded-sm group">
<img alt="Technology and hands" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent"></div>
<div className="absolute bottom-8 left-8">
<span className="bg-orange-600 text-white px-3 py-1 text-xs uppercase font-semibold tracking-wider mb-2 inline-block">Featured</span>
<p className="text-white text-2xl font-medium tracking-tight">Digital Infrastructure</p>
</div>
</div>
</div>

<section className="max-w-4xl mx-auto text-center mb-32">
<h2 className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-neutral-900 mb-8">
                We blend the power of design, and performance marketing to transform founders' visions into remarkable brands. See <span className="underline decoration-orange-500 decoration-2 underline-offset-4 hover:text-orange-600 cursor-pointer transition-colors">our services.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-16 border-t border-neutral-200 pt-12">
<div>
<h4 className="text-sm font-semibold uppercase text-neutral-400 mb-4 tracking-wider">Tomorrow's brands, today.</h4>
</div>
<div className="space-y-6">
<p className="text-lg text-neutral-600">
                        We are a growth accelerator. Since 2023, we have been recognized globally for helping founders build market-defining brands that drive sustainable revenue and shape culture.
                    </p>
<p className="text-lg text-neutral-600">
                        In 2024, we launched our Venture Model to further support founders. We partner with five clients a year to give each one the focus and care they deserve.
                    </p>
<a className="inline-flex items-center text-orange-600 font-semibold mt-4 hover:translate-x-1 transition-transform" href="#">
                        Learn More <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="mb-32">
<div className="flex justify-between items-end mb-6">
<h3 className="text-3xl font-semibold tracking-tight">Systemic Approach</h3>
<div className="hidden md:flex gap-2">
<span className="w-3 h-3 bg-orange-500 rounded-full"></span>
<span className="w-3 h-3 bg-neutral-300 rounded-full"></span>
<span className="w-3 h-3 bg-neutral-300 rounded-full"></span>
</div>
</div>
<div className="bg-neutral-100 p-8 md:p-16 rounded-sm relative overflow-hidden min-h-[600px] flex items-center justify-center">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<div className="relative z-10 text-center max-w-2xl">
<div className="grid grid-cols-2 gap-4 mb-12">
<div className="bg-white p-6 shadow-sm border border-neutral-200 text-left transform -rotate-3 hover:rotate-0 transition-transform duration-300">
<div className="w-8 h-8 bg-orange-100 text-orange-600 flex items-center justify-center rounded-sm mb-4">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<p className="font-semibold text-lg">Data-Driven</p>
<p className="text-neutral-500 mt-2 text-base">Decisions backed by real metrics.</p>
</div>
<div className="bg-orange-600 p-6 shadow-lg text-white text-left transform rotate-3 hover:rotate-0 transition-transform duration-300">
<div className="w-8 h-8 bg-white/20 flex items-center justify-center rounded-sm mb-4">
<i className="w-5 h-5 text-white" data-lucide="zap"></i>
</div>
<p className="font-semibold text-lg">High Velocity</p>
<p className="text-orange-100 mt-2 text-base">Speed as a competitive advantage.</p>
</div>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">A systemic approach that has worked for 800+ companies</h2>
<button className="bg-neutral-900 text-white px-6 py-3 rounded-sm font-medium hover:bg-orange-600 transition-colors">
                         View Case Studies
                     </button>
</div>

<div className="absolute top-10 left-10 w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
<div className="absolute bottom-20 right-20 w-3 h-3 bg-neutral-900 rounded-full"></div>
<div className="absolute top-1/2 left-10 text-neutral-400 text-xs tracking-widest uppercase rotate-90 origin-left">Success Stories</div>
</div>
</section>

<section className="mb-32">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-12">
<h2 className="text-[12vw] md:text-[8vw] leading-none font-semibold tracking-tighter uppercase">WORKS</h2>
<div className="mb-4 md:mb-8">
<button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full font-medium text-sm transition-colors flex items-center gap-2">
                        Start a Project <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[600px]">

<div className="group relative bg-neutral-100 overflow-hidden md:col-span-1 h-[400px] md:h-full">
<img alt="Work 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<span className="border border-white text-white px-4 py-2 uppercase tracking-widest text-sm">View Project</span>
</div>
<div className="absolute top-4 left-4">
<i className="w-8 h-8 text-white" data-lucide="arrow-up-right"></i>
</div>
</div>

<div className="group relative bg-neutral-900 overflow-hidden md:col-span-1 h-[400px] md:h-full flex flex-col justify-between p-8">
<div className="text-white">
<div className="flex justify-between items-start mb-12">
<span className="text-orange-500 font-mono">02</span>
<i className="w-6 h-6 text-neutral-400" data-lucide="layers"></i>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-2">Sports Bros</h3>
<p className="text-neutral-400 text-lg">Rebranding a global sports media giant.</p>
</div>
<div className="mt-auto">
<img alt="Thumbnail" className="w-24 h-24 object-cover rounded-sm border-2 border-neutral-700" src="https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="group relative bg-neutral-100 overflow-hidden md:col-span-1 h-[400px] md:h-full">
<img alt="Work 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute bottom-0 left-0 bg-white p-6 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-lg font-semibold text-neutral-900">Tech Retro</h4>
<p className="text-neutral-500">Web Design</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 bg-white rounded-sm border border-neutral-100 p-8 shadow-sm">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-4">At AgencyFlow</h3>
<p className="text-lg text-neutral-600 mb-12">
                    We specialize in innovative digital marketing strategies that drive results. Our team is dedicated to helping businesses grow and succeed online through data-first approaches.
                </p>
<div className="mb-8">
<span className="text-6xl font-semibold tracking-tighter block mb-2">65%</span>
<p className="text-neutral-500 text-sm">The average improvements across four key indicators for our clients within the first 3 months.</p>
</div>
<div className="w-full bg-neutral-100 h-[1px]"></div>
</div>
<div>
<div className="flex justify-between items-center mb-8">
<h3 className="text-xl font-medium">Conversion Rate</h3>
<div className="flex gap-2">
<div className="w-3 h-3 bg-neutral-200 rounded-sm"></div>
<div className="w-3 h-3 bg-orange-500 rounded-sm"></div>
</div>
</div>

<div className="relative h-64 flex items-end gap-2 md:gap-4 border-l border-b border-neutral-200 p-4">

<div className="absolute -left-8 top-0 h-full flex flex-col justify-between text-xs text-neutral-400 font-mono py-2">
<span>100</span>
<span>80</span>
<span>60</span>
<span>40</span>
<span>20</span>
<span>0</span>
</div>

<div className="w-1/4 bg-orange-600 h-[40%] rounded-t-sm relative group hover:opacity-90 transition-opacity"></div>
<div className="w-1/4 bg-neutral-200 h-[65%] rounded-t-sm relative group hover:bg-neutral-300 transition-colors"></div>
<div className="w-1/4 bg-orange-500 h-[85%] rounded-t-sm relative group hover:opacity-90 transition-opacity relative">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded-sm after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-neutral-900">
                             +125%
                         </div>

<div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)', backgroundSize: '1rem 1rem'}}></div>
</div>
<div className="w-1/4 bg-neutral-800 h-[55%] rounded-t-sm relative group hover:bg-neutral-700 transition-colors"></div>
</div>
</div>
</section>

<section className="mb-32">
<div className="flex justify-between items-start border-t border-neutral-200 pt-12">
<div className="w-1/3">
<h2 className="text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="w-2/3 pl-0 md:pl-16">
<div className="flex justify-between items-center mb-12">
<p className="text-neutral-500 max-w-sm text-sm">In 2023, we launched our Venture Model to further support founders.</p>
<button className="text-xs font-semibold bg-orange-600 text-white px-3 py-1 rounded-sm hover:bg-neutral-900 transition-colors">SEE ALL QUESTIONS</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
<div>
<h4 className="font-medium text-sm text-neutral-900 mb-2">Who do you work with?</h4>
<p className="text-neutral-500 text-sm leading-relaxed">
                                We work with professional sports teams, amateur clubs, athletes, sports brands, and event organizers looking to elevate their digital presence.
                            </p>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900 mb-2">What's your process?</h4>
<p className="text-neutral-500 text-sm leading-relaxed">
                                We start with a discovery phase to understand your goals, followed by strategy, design, and implementation with constant feedback loops.
                            </p>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900 mb-2">How long does a typical project take?</h4>
<p className="text-neutral-500 text-sm leading-relaxed">
                                Timelines vary based on scope. A full rebrand can take 6-12 weeks, while a landing page might take 2-3 weeks.
                            </p>
</div>
<div>
<h4 className="font-medium text-sm text-neutral-900 mb-2">How do I get started?</h4>
<p className="text-neutral-500 text-sm leading-relaxed">
                                Just fill out our contact form or send us an email. We'll schedule a discovery call to see if we're a good fit.
                            </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-950 text-neutral-400 py-20 px-4 md:px-6">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div className="lg:col-span-1">
<h4 className="text-white text-lg font-semibold mb-6">Do it once, <span className="text-orange-500">Do it right.</span></h4>
<p className="text-sm mb-6">New Business<br/><a className="text-white hover:text-orange-500 transition-colors" href="mailto:hello@agencyflow.com">hello@agencyflow.com</a></p>
<form className="flex border-b border-neutral-800 pb-2">
<input className="bg-transparent w-full outline-none text-sm text-white placeholder-neutral-600" placeholder="Sign up for our newsletter" type="email"/>
<button className="text-white hover:text-orange-500" type="submit"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</form>
</div>
<div className="lg:col-span-1"></div> 
<div className="lg:col-span-1">
<h5 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Home</h5>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Overview</a></li>
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Testimonials</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
<div className="lg:col-span-1">
<h5 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Legal</h5>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Agreement</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-800 pt-8">
<div className="text-xs text-neutral-600 mb-4 md:mb-0">
<p>San Diego — USA</p>
<p>Paris — France</p>
</div>
<div className="flex gap-6 text-xs text-neutral-600">
<a className="hover:text-white" href="#">Terms of use</a>
<span>© 13—25</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
