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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.33/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="GE8mpmmCRgK6XBF57jgF"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#0C0C0F]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-base font-medium tracking-tighter text-zinc-100" href="#">NF</a>
<a className="text-xs sm:text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors duration-200" href="#services">Services</a>
</div>
</nav>

<section className="pt-40 pb-24 px-6 flex flex-col items-center text-center min-h-screen justify-center -mt-16 relative overflow-hidden" id="hero">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-900/30 rounded-full blur-3xl pointer-events-none" style={{zIndex: '-1'}}></div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tighter text-white mb-6">NeuroFlex AI</h1>
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-300 mb-6">AI Solutions for Smart Businesses</h2>
<p className="text-sm sm:text-base text-zinc-400 max-w-2xl mb-10 leading-relaxed font-normal">We help businesses automate workflows, improve efficiency, and build intelligent AI systems.</p>
<a className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 text-sm font-medium hover:bg-zinc-200 hover:scale-[0.98] transition-all duration-200" href="#services">
            Get Started
        </a>
</section>

<section className="py-24 px-6 border-t border-white/5 relative" id="overview">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
<div className="md:col-span-1">
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-100">Company Overview</h2>
</div>
<div className="md:col-span-2 space-y-6 text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
<p>NeuroFlex AI is a service-based company that provides artificial intelligence solutions for businesses.</p>
<p>We help organizations implement AI technologies to improve efficiency, automate workflows, and build intelligent systems.</p>
<p>Our focus is on delivering practical AI solutions that save time, reduce manual work, and improve customer experience.</p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative" id="services">
<div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-5xl mx-auto relative z-10">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-100 mb-12 text-center">Our Services</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 rounded-2xl bg-[#121215] border border-white/5 hover:border-white/10 hover:bg-[#16161A] transition-all duration-300 flex flex-col h-full">
<iconify-icon className="text-zinc-300 mb-6" height="24" icon="solar:lightbulb-minimalistic-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-3 group-hover:text-white transition-colors">AI Consulting</h3>
<p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mt-auto">Helping businesses identify AI opportunities and build strategy.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#121215] border border-white/5 hover:border-white/10 hover:bg-[#16161A] transition-all duration-300 flex flex-col h-full">
<iconify-icon className="text-zinc-300 mb-6" height="24" icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-3 group-hover:text-white transition-colors">AI Chatbot Development</h3>
<p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mt-auto">Building intelligent chatbots for customer interaction.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#121215] border border-white/5 hover:border-white/10 hover:bg-[#16161A] transition-all duration-300 flex flex-col h-full">
<iconify-icon className="text-zinc-300 mb-6" height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-3 group-hover:text-white transition-colors">AI Automation</h3>
<p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6">Automating workflows and repetitive tasks.</p>
<ul className="mt-auto space-y-3">
<li className="flex items-start text-xs sm:text-sm text-zinc-500 font-normal">
<span className="mr-3 text-zinc-600 border border-zinc-800 rounded px-1 text-[10px] uppercase tracking-tight mt-0.5">Eg</span>
                            business process automation
                        </li>
<li className="flex items-start text-xs sm:text-sm text-zinc-500 font-normal">
<span className="mr-3 text-zinc-600 border border-zinc-800 rounded px-1 text-[10px] uppercase tracking-tight mt-0.5">Eg</span>
                            workflow automation
                        </li>
<li className="flex items-start text-xs sm:text-sm text-zinc-500 font-normal">
<span className="mr-3 text-zinc-600 border border-zinc-800 rounded px-1 text-[10px] uppercase tracking-tight mt-0.5">Eg</span>
                            AI-powered task management
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-[#121215] border border-white/5 hover:border-white/10 hover:bg-[#16161A] transition-all duration-300 flex flex-col h-full">
<iconify-icon className="text-zinc-300 mb-6" height="24" icon="solar:robot-linear" width="24"></iconify-icon>
<h3 className="text-lg font-medium tracking-tight text-zinc-100 mb-3 group-hover:text-white transition-colors">AI Agent Development</h3>
<p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed mb-6">Creating advanced AI agents:</p>
<ul className="mt-auto space-y-3">
<li className="flex items-center text-xs sm:text-sm text-zinc-500 font-normal">
<div className="w-1 h-1 rounded-full bg-zinc-700 mr-3"></div>
                            AI voice agents
                        </li>
<li className="flex items-center text-xs sm:text-sm text-zinc-500 font-normal">
<div className="w-1 h-1 rounded-full bg-zinc-700 mr-3"></div>
                            customer support agents
                        </li>
<li className="flex items-center text-xs sm:text-sm text-zinc-500 font-normal">
<div className="w-1 h-1 rounded-full bg-zinc-700 mr-3"></div>
                            workflow assistants
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

<div>
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-100 mb-8">Why Choose NeuroFlex AI</h2>
<ul className="space-y-5">
<li className="flex items-center text-sm text-zinc-400 font-normal">
<iconify-icon className="text-zinc-600 mr-4" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        24/7 AI-powered solutions
                    </li>
<li className="flex items-center text-sm text-zinc-400 font-normal">
<iconify-icon className="text-zinc-600 mr-4" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Reduces manual work
                    </li>
<li className="flex items-center text-sm text-zinc-400 font-normal">
<iconify-icon className="text-zinc-600 mr-4" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Improves customer experience
                    </li>
</ul>
</div>

<div>
<h2 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-100 mb-8">Business Hours</h2>
<div className="p-6 rounded-2xl bg-[#121215] border border-white/5">
<div className="flex justify-between items-center mb-4 text-xs sm:text-sm font-normal">
<span className="text-zinc-500">Opening Time</span>
<span className="text-zinc-200 font-medium tracking-tight">9:00 AM</span>
</div>
<div className="flex justify-between items-center mb-6 text-xs sm:text-sm font-normal pb-6 border-b border-white/5">
<span className="text-zinc-500">Closing Time</span>
<span className="text-zinc-200 font-medium tracking-tight">10:00 PM</span>
</div>
<div className="flex items-start text-xs text-zinc-500 font-normal leading-relaxed">
<iconify-icon className="mr-2 mt-0.5 shrink-0 text-zinc-600" height="16" icon="solar:info-circle-linear" width="16"></iconify-icon>
<p>Appointments can only be scheduled between 9 AM and 10 PM.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-zinc-800/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-2xl mx-auto text-center relative z-10">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">Get in Touch</h2>
<p className="text-sm sm:text-base text-zinc-400 font-normal mb-10">Ready to transform your business with AI?</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<div className="flex items-center text-zinc-300 text-sm font-medium bg-[#121215] border border-white/10 px-6 py-3 rounded-full w-full sm:w-auto justify-center">
<iconify-icon className="mr-3 text-zinc-500" height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="tracking-tight">+1 681 250 5372</span>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white text-black px-8 py-3 text-sm font-medium hover:bg-zinc-200 hover:scale-[0.98] transition-all duration-200 w-full sm:w-auto" href="tel:+16812505372">
                    Call Now
                </a>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-white/5 text-center bg-[#0C0C0F]">
<p className="text-xs text-zinc-600 font-normal tracking-tight">© 2024 NeuroFlex AI. All rights reserved.</p>
</footer>

    </>
  );
}
