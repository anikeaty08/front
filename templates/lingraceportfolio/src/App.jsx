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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-stone-900 font-semibold tracking-tighter text-lg" href="#">LG</a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-500 tracking-wide">
<a className="hover:text-stone-900 transition-colors duration-300" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#experience">Experience</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#studio">Studio</a>
<a className="hover:text-stone-900 transition-colors duration-300" href="#contact">Contact</a>
</div>

<button className="md:hidden text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:menu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden">
<div className="absolute inset-0 z-0 opacity-30 pointer-events-none">

<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<line stroke="#E7E5E4" strokeWidth="1" x1="20%" x2="20%" y1="0" y2="100%"></line>
<line stroke="#E7E5E4" strokeWidth="1" x1="80%" x2="80%" y1="0" y2="100%"></line>
</svg>
</div>
<div className="max-w-5xl mx-auto px-6 relative z-10 w-full grid md:grid-cols-2 gap-12 items-center">
<div className="max-w-xl order-2 md:order-1">
<p className="text-stone-500 text-sm tracking-widest uppercase mb-6 fade-in font-medium">Lin Grace</p>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-stone-900 leading-[1.1] mb-8 fade-in">
                    Architect. <br/>
                    Strategist. <br/>
<span className="text-stone-400">Building spaces — <br className="md:hidden"/>and life — with intention.</span>
</h1>
<div className="fade-in-delay">
<p className="text-stone-600 text-lg md:text-xl font-light leading-relaxed max-w-lg mb-10">
                        Based in Singapore. Integrating cultural depth with structural precision.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-400 transition-all duration-300" href="#about">
                        View Profile
                        <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="order-1 md:order-2 flex justify-center md:justify-end fade-in-delay">
<div className="relative w-full max-w-xs md:max-w-sm">

<div className="aspect-[3/4] bg-stone-200 rounded-sm overflow-hidden relative shadow-2xl shadow-stone-200 border border-stone-100 z-10">

<img alt="Architecture Detail" className="hover:grayscale-0 transition-all duration-1000 ease-out hover:opacity-100 opacity-90 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6f1ba9e-917d-41ec-8895-a2ef96401ddf_800w.jpg" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-stone-900/60 to-transparent">
<p className="text-white text-xs font-mono tracking-widest uppercase">Form &amp; Function</p>
</div>
</div>

<div className="absolute top-4 -right-4 w-full h-full border border-stone-300 rounded-sm -z-0 hidden md:block"></div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white border-y border-stone-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<svg aria-hidden="true" className="iconify mx-auto text-stone-300 mb-8 iconify--lucide" data-height="24" data-icon="lucide:quote" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<blockquote className="serif-quote text-2xl md:text-4xl text-stone-800 leading-relaxed italic">
                “Using strength to protect softness, while softness is the ultimate meaning of strength.”
            </blockquote>
</div>
</section>

<section className="py-24 md:py-32" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-4">
<div className="aspect-[3/4] bg-stone-200 w-full relative overflow-hidden rounded-sm">

<div className="absolute inset-0 bg-gradient-to-br from-stone-300 to-stone-400 opacity-20"></div>
<div className="absolute bottom-6 left-6">
<p className="text-xs font-mono text-stone-500 uppercase tracking-widest">Est. Taipei  Based. Singapore</p>
</div>
</div>
</div>
<div className="md:col-span-8 md:pl-8">
<h2 className="text-2xl font-medium tracking-tight text-stone-900 mb-8">About Me</h2>
<div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
<p>
                            Born in Taiwan and refining my practice in Singapore, I operate at the intersection of heritage and modernity. With a Bachelor of Architecture from National Taiwan University, my foundation is built on discipline and cultural responsiveness.
                        </p>
<p>
                            I believe that architecture is not merely about physical structures but about the human interactions they facilitate. As a Project Director and a mother, I value stability, boundaries, and the quiet power of consistency.
                        </p>
<p>
                            My approach—both in design and life—prioritizes long-term value over temporary trends, grounded in emotional maturity and financial independence.
                        </p>
</div>
<div className="grid grid-cols-2 gap-6 mt-12 border-t border-stone-200 pt-8">
<div>
<h3 className="text-sm font-medium text-stone-900 uppercase tracking-wide mb-2">Education</h3>
<p className="text-stone-500 text-sm">B.Arch, National Taiwan University</p>
</div>
<div>
<h3 className="text-sm font-medium text-stone-900 uppercase tracking-wide mb-2">Focus</h3>
<p className="text-stone-500 text-sm">Human-Centric Design, Cultural Redevelopment</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="experience">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
<h2 className="text-2xl font-medium tracking-tight text-stone-900">Architectural Practice</h2>
<span className="text-sm text-stone-400 mt-2 md:mt-0">Singapore Based</span>
</div>
<div className="space-y-0">

<div className="group border-l border-stone-200 pl-8 pb-12 relative">
<span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-stone-300 group-hover:bg-emerald-800/60 transition-colors duration-300"></span>
<h3 className="text-lg font-medium text-stone-900 mb-1">Project Director</h3>
<p className="text-stone-500 text-sm mb-4">Leading Architecture Firm, Singapore</p>
<p className="text-stone-600 font-light leading-relaxed max-w-2xl">
                        Overseeing end-to-end delivery of high-value cultural and community redevelopment projects. Responsible for cross-cultural team coordination, stakeholder management, and ensuring design integrity aligns with long-term strategic goals.
                    </p>
</div>

<div className="group border-l border-stone-200 pl-8 pb-12 relative">
<span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-stone-300 group-hover:bg-emerald-800/60 transition-colors duration-300"></span>
<h3 className="text-lg font-medium text-stone-900 mb-1">Senior Architect</h3>
<p className="text-stone-500 text-sm mb-4">Focus: Adaptive Reuse</p>
<p className="text-stone-600 font-light leading-relaxed max-w-2xl">
                        Specialized in transforming heritage structures into modern functional spaces. Navigated complex regulatory frameworks while preserving historical narratives through material and spatial selection.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100/50" id="studio">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">
<div>
<span className="inline-block py-1 px-3 rounded-full bg-emerald-900/5 text-emerald-900 text-xs font-medium tracking-wide mb-6">Founding Partner</span>
<h2 className="text-3xl font-medium tracking-tight text-stone-900 mb-6">Cross-Cultural Strategy Studio</h2>
<p className="text-stone-600 font-light leading-relaxed mb-8">
                        Beyond the built environment, I apply architectural thinking to business strategy. My boutique consulting studio aids international brands in navigating the Southeast Asian digital market.
                    </p>
<ul className="space-y-4">
<li className="flex items-start">
<svg aria-hidden="true" className="iconify text-stone-400 mr-3 mt-1 flex-shrink-0 iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-stone-700 text-sm">Localization Strategy &amp; Market Insight</span>
</li>
<li className="flex items-start">
<svg aria-hidden="true" className="iconify text-stone-400 mr-3 mt-1 flex-shrink-0 iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-stone-700 text-sm">Operational Optimization for SEA</span>
</li>
<li className="flex items-start">
<svg aria-hidden="true" className="iconify text-stone-400 mr-3 mt-1 flex-shrink-0 iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-stone-700 text-sm">Analytical Frameworks for Growth</span>
</li>
</ul>
</div>
<div className="bg-white p-10 shadow-sm border border-stone-200 rounded-sm flex flex-col justify-center">
<div className="mb-6">
<svg aria-hidden="true" className="iconify text-stone-800 iconify--lucide" data-height="32" data-icon="lucide:layers" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Analytical Clarity</h3>
<p className="text-stone-500 text-sm font-light leading-relaxed">
                        "Just as a building requires a strong foundation, market entry requires rigorous data analysis and cultural empathy. I bridge the gap between data and human behavior."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-sm font-medium uppercase tracking-widest text-stone-400 text-center mb-16">Rituals &amp; Interests</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="group">
<div className="w-12 h-12 mx-auto bg-stone-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-stone-100 transition-colors">
<svg aria-hidden="true" className="iconify text-stone-600 iconify--lucide" data-height="20" data-icon="lucide:activity" data-width="20" height="20" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-sm font-medium text-stone-800">Yoga &amp; Light Sports</h4>
</div>
<div className="group">
<div className="w-12 h-12 mx-auto bg-stone-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-stone-100 transition-colors">
<svg aria-hidden="true" className="iconify text-stone-600 iconify--lucide" data-height="20" data-icon="lucide:book-open" data-width="20" height="20" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-sm font-medium text-stone-800">Design Research</h4>
</div>
<div className="group">
<div className="w-12 h-12 mx-auto bg-stone-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-stone-100 transition-colors">
<svg aria-hidden="true" className="iconify text-stone-600 iconify--lucide" data-height="20" data-icon="lucide:coffee" data-width="20" height="20" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2m4-2v2m2 4a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1M6 2v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-sm font-medium text-stone-800">Quiet Reflection</h4>
</div>
<div className="group">
<div className="w-12 h-12 mx-auto bg-stone-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-stone-100 transition-colors">
<svg aria-hidden="true" className="iconify text-stone-600 iconify--lucide" data-height="20" data-icon="lucide:clock" data-width="20" height="20" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h4 className="text-sm font-medium text-stone-800">Structured Living</h4>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-900 text-stone-300" id="contact">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Let’s connect.</h2>
<p className="text-stone-400 font-light text-lg mb-10 max-w-lg mx-auto">
                Open to discussions regarding architectural collaborations or strategic market consultation.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center">
<a className="group bg-stone-800 hover:bg-stone-700 text-white px-8 py-3 rounded text-sm font-medium transition-all duration-300 border border-stone-700 flex items-center gap-2" href="https://www.instagram.com/gracylone/" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
                    Instagram
                </a>
</div>
<div className="mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
<p>© 2025 Lin Grace. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<span>Singapore</span>
<span>Taipei</span>
</div>
</div>
</div>
</section>

    </>
  );
}
