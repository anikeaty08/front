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



        // Initialize Lucide icons
        lucide.createIcons();

        // Fade in animation observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all fade-in elements
        document.querySelectorAll('.fade-in').forEach(el => {
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
      

<div className="fixed inset-0 opacity-20">
<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
</div>

<section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">

<div className="text-center mb-16 sm:mb-20 lg:mb-24 fade-in visible">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
<svg className="lucide lucide-help-circle w-4 h-4 text-red-400" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="text-xs sm:text-sm font-medium text-red-400 tracking-wider uppercase">Frequently Asked Questions</span>
</div>
<h1 className="font-fraunces text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6">
<span className="block text-white mb-2">QUESTIONS</span>
<span className="block bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">ANSWERS</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                Get instant answers to the most common questions about our digital transformation services, AI solutions, and creative partnerships.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">

<article className="fade-in card-hover gradient-border sm:p-10 flex flex-col h-full visible rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{animationDelay: '0.1s'}}>

<div className="absolute top-4 left-4">
<svg className="lucide lucide-plus lucide-zap w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute top-4 right-4">
<svg className="lucide lucide-plus lucide-trending-up w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 left-4">
<svg className="lucide lucide-plus lucide-cpu w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 right-4">
<svg className="lucide lucide-plus lucide-brain-circuit w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20">
<svg className="lucide lucide-bot w-3 h-3 text-red-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
<span className="text-xs font-medium text-red-400 tracking-wider uppercase">AI Development &amp; Consulting</span>
</div>
<h3 className="font-fraunces text-xl sm:text-2xl lg:text-3xl leading-tight text-white">
                        Is artificial intelligence worth the investment for growing companies?
                    </h3>
<p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                        Discover how AI can transform your business operations, reduce costs by up to 40%, and accelerate growth through intelligent automation.
                    </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-300 hover:text-white transition-all duration-300">
                    Read Full Answer
                    <svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</article>

<article className="fade-in card-hover gradient-border rounded-2xl p-8 sm:p-10 flex flex-col h-full visible" style={{animationDelay: '0.2s'}}>
<div className="absolute top-4 left-4">
<svg className="lucide lucide-plus lucide-video w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute top-4 right-4">
<svg className="lucide lucide-plus lucide-film w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 left-4">
<svg className="lucide lucide-plus lucide-camera w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 right-4">
<svg className="lucide lucide-plus lucide-edit-3 w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
<svg className="lucide lucide-play-circle w-3 h-3 text-blue-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
<span className="text-xs font-medium text-blue-400 tracking-wider uppercase">Video Production &amp; Content</span>
</div>
<h3 className="font-fraunces text-xl sm:text-2xl lg:text-3xl leading-tight text-white">
                        Can I repurpose video content across multiple channels and campaigns?
                    </h3>
<p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                        Learn our proven content multiplication strategy that turns one video shoot into 15+ pieces of content for maximum ROI.
                    </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-300 hover:text-white transition-all duration-300">
                    Read Full Answer
                    <svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</article>

<article className="fade-in card-hover gradient-border rounded-2xl p-8 sm:p-10 flex flex-col h-full visible" style={{animationDelay: '0.3s'}}>
<div className="absolute top-4 left-4">
<svg className="lucide lucide-plus lucide-users w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute top-4 right-4">
<svg className="lucide lucide-plus lucide-globe w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 left-4">
<svg className="lucide lucide-plus lucide-headphones w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 right-4">
<svg className="lucide lucide-plus lucide-clock w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
<svg className="lucide lucide-heart-handshake w-3 h-3 text-green-400" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path><path d="m18 15-2-2"></path><path d="m15 18-2-2"></path></svg>
<span className="text-xs font-medium text-green-400 tracking-wider uppercase">Client Experience &amp; Support</span>
</div>
<h3 className="font-fraunces text-xl sm:text-2xl lg:text-3xl leading-tight text-white">
                        Can Nexus Digital collaborate with international and remote teams?
                    </h3>
<p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                        Absolutely! We work across 15+ time zones with seamless project management and 24/7 communication channels.
                    </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-300 hover:text-white transition-all duration-300">
                    Read Full Answer
                    <svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</article>

<article className="fade-in card-hover gradient-border rounded-2xl p-8 sm:p-10 flex flex-col h-full md:col-span-2 lg:col-span-1 visible" style={{animationDelay: '0.4s'}}>
<div className="absolute top-4 left-4">
<svg className="lucide lucide-plus lucide-rocket w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute top-4 right-4">
<svg className="lucide lucide-plus lucide-target w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 left-4">
<svg className="lucide lucide-plus lucide-briefcase w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 right-4">
<svg className="lucide lucide-plus lucide-award w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
<svg className="lucide lucide-lightbulb w-3 h-3 text-purple-400" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span className="text-xs font-medium text-purple-400 tracking-wider uppercase">Strategy &amp; Innovation</span>
</div>
<h3 className="font-fraunces text-xl sm:text-2xl lg:text-3xl leading-tight text-white">
                        How long does a typical digital transformation project take?
                    </h3>
<p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                        Project timelines vary from 4-16 weeks depending on complexity. We use agile sprints for rapid deployment and continuous improvement.
                    </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-300 hover:text-white transition-all duration-300">
                    Read Full Answer
                    <svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</article>

<article className="fade-in card-hover gradient-border sm:p-10 flex flex-col h-full visible rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{animationDelay: '0.5s'}}>
<div className="absolute top-4 left-4">
<svg className="lucide lucide-plus lucide-shield-check w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute top-4 right-4">
<svg className="lucide lucide-plus lucide-lock w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 left-4">
<svg className="lucide lucide-plus lucide-key w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 right-4">
<svg className="lucide lucide-plus lucide-eye-off w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
<svg className="lucide lucide-shield w-3 h-3 text-orange-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-xs font-medium text-orange-400 tracking-wider uppercase">Security &amp; Privacy</span>
</div>
<h3 className="font-fraunces text-xl sm:text-2xl lg:text-3xl leading-tight text-white">
                        How do you ensure data security and client confidentiality?
                    </h3>
<p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                        We maintain SOC 2 compliance, use end-to-end encryption, and sign comprehensive NDAs. Your data security is our top priority.
                    </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-300 hover:text-white transition-all duration-300">
                    Read Full Answer
                    <svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</article>

<article className="fade-in card-hover gradient-border sm:p-10 flex flex-col h-full visible rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{animationDelay: '0.6s'}}>
<div className="absolute top-4 left-4">
<svg className="lucide lucide-plus lucide-dollar-sign w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute top-4 right-4">
<svg className="lucide lucide-plus lucide-calculator w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 left-4">
<svg className="lucide lucide-plus lucide-credit-card w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="absolute bottom-4 right-4">
<svg className="lucide lucide-plus lucide-pie-chart w-[16px] h-[16px]" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
<svg className="lucide lucide-banknote w-3 h-3 text-emerald-400" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
<span className="text-xs font-medium text-emerald-400 tracking-wider uppercase">Pricing &amp; Investment</span>
</div>
<h3 className="font-fraunces text-xl sm:text-2xl lg:text-3xl leading-tight text-white">
                        What are your pricing models and payment options?
                    </h3>
<p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
                        We offer flexible pricing: project-based, retainer, or revenue-share models. Monthly payments available with no hidden fees.
                    </p>
</div>
<button className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-300 hover:text-white transition-all duration-300">
                    Read Full Answer
                    <svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</article>
</div>

<div className="fade-in text-center visible" style={{animationDelay: '0.7s'}}>
<div className="inline-flex flex-col sm:flex-row gap-4">
<a className="group inline-flex items-center gap-3 rounded-xl border border-neutral-700/50 bg-neutral-800/30 backdrop-blur-sm px-8 py-4 text-sm font-medium tracking-wide hover:bg-neutral-800/60 hover:border-neutral-600 transition-all duration-300" href="#">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                    Browse All 47 FAQs
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 text-sm font-semibold tracking-wide text-white hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300" href="#">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                    Ask Our Experts
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<p className="mt-6 text-sm text-neutral-500">
                Still have questions? Our team responds within 2 hours during business days.
            </p>
</div>
</section>


    </>
  );
}
