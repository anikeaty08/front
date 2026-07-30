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
      
        // Enhanced confetti function with better cross-browser support
        function createConfetti() {
            console.log('Confetti triggered!'); // Debug line
            
            const colors = ['#fbbf24', '#f59e0b', '#d97706', '#f97316', '#ea580c', '#dc2626', '#059669', '#0891b2', '#7c3aed', '#ec4899'];
            const shapes = ['circle', 'rect', 'triangle'];
            const confettiCount = 80;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                const shape = shapes[Math.floor(Math.random() * shapes.length)];
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                confetti.className = `confetti confetti-${shape}`;
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.top = '-20px';
                confetti.style.zIndex = '9999';
                confetti.style.pointerEvents = 'none';
                
                if (shape === 'triangle') {
                    confetti.style.borderBottomColor = color;
                    confetti.style.borderBottomWidth = '10px';
                    confetti.style.borderBottomStyle = 'solid';
                } else {
                    confetti.style.backgroundColor = color;
                }
                
                const animationType = Math.floor(Math.random() * 3) + 1;
                const duration = (Math.random() * 2 + 2) + 's';
                const delay = Math.random() * 0.5 + 's';
                
                confetti.style.animation = `confetti-fall-${animationType} ${duration} ${delay} ease-out forwards`;
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    if (confetti && confetti.parentNode) {
                        confetti.remove();
                    }
                }, 5000);
            }
        }

        // Event listener with enhanced compatibility
        document.addEventListener('DOMContentLoaded', function() {
            const btn = document.getElementById('confetti-btn');
            if (btn) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Button clicked!'); // Debug line
                    
                    createConfetti();
                    
                    // Visual feedback
                    this.style.transform = 'scale(0.95)';
                    this.innerHTML = '🎊 Woohoo! 20 Free Leads';
                    
                    setTimeout(() => {
                        this.style.transform = 'scale(1)';
                    }, 150);
                    
                    setTimeout(() => {
                        this.innerHTML = '🎉 20 Free Leads';
                    }, 3000);
                });
            }
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
      

<div className="spline-container">
<iframe frameborder="0" height="100%" src="https://my.spline.design/claritystream-a72K0KUwFoZV82QBzvu52Kai/" width="100%"></iframe>
</div>

<div className="content-container">

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">
<div className="flex items-center">
<svg className="w-[32px] h-[32px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: `rgb(251, 191, 36)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path className="" d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
<span className="text-xl font-bold tracking-tight ml-3 font-roboto">Enriched Leads</span>
</div>
<div className="hidden md:flex space-x-10 text-sm text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Case Studies</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="">
<button className="hover:bg-white/5 transition-all text-sm font-medium text-slate-950 bg-gradient-to-r from-yellow-400 to-orange-500 border-gray-700 border rounded-md pt-2 pr-4 pb-2 pl-4">📖 BOOK NOW!</button>
</div>
</div>
</nav>

<div className="container md:pt-24 mr-auto ml-auto pt-16 pr-6 pl-6">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<h1 className="md:text-6xl lg:text-7xl leading-tight text-5xl font-extrabold tracking-tighter mb-6 font-roboto"><span className="text-gradient-gold font-extrabold font-roboto pr-2 pl-2 scale-100">Supercharge</span><br />Your Sales Pipeline</h1>
<p className="md:text-2xl max-w-3xl text-xl font-light text-gray-300 tracking-wide mb-8">
                    Transform your B2B sales pipeline with AI-powered data enrichment, intelligent automation, and precision targeting that delivers measurable results.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4">
<button className="gradient-gold hover:opacity-90 transition-all font-medium text-slate-950 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-md pt-3 pr-8 pb-3 pl-8" id="confetti-btn" style={{transform: `scale(1)`}}>🎉 20 Free Leads</button>
<a className="flex items-center text-gray-300 hover:text-white transition-colors py-3 px-2 group" href="#features">
                        Explore Features
                        <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto">
<div className="text-center">
<p className="text-4xl font-light mb-1 tracking-tight text-gradient-gold">98%</p>
<p className="text-gray-400 font-extralight">Data Accuracy</p>
</div>
<div className="text-center">
<p className="text-4xl font-light mb-1 tracking-tight text-gradient-gold">2.5x</p>
<p className="text-gray-400 font-extralight">Conversion rates</p>
</div>
<div className="text-center">
<p className="text-4xl font-light mb-1 tracking-tight text-gradient-gold">90</p>
<p className="text-gray-400 font-extralight">Days to ROI</p>
</div>
<div className="text-center">
<p className="text-4xl font-light mb-1 tracking-tight text-gradient-gold">24/7</p>
<p className="text-gray-400 font-extralight">AI Receptionist & Meeting Scheduler</p>
</div>
</div>
</div>

<div className="container mr-auto ml-auto pt-32 pr-6 pb-20 pl-6" id="features">
<div className="max-w-6xl mr-auto ml-auto">
<div className="text-center mb-20">
<h2 className="md:text-5xl text-4xl font-bold tracking-tighter mb-6">
                        Built for <span className="text-gradient-gold font-bold">performance</span>
</h2>
<p className="text-gray-300 text-lg font-light max-w-2xl mx-auto">
                        Every feature designed to eliminate revenue leakage and accelerate your sales velocity
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:bg-white/10 transition-all">
<div className="text-amber-400 mb-4">
<span className="material-symbols-outlined text-3xl">psychology</span>
</div>
<h3 className="text-xl font-medium mb-4 tracking-tight">Lexi AI Sales Assistant</h3>
<p className="text-gray-400 font-light leading-relaxed">
                            24/7 AI-powered sales agent that qualifies leads, books meetings, and nurtures prospects with human-like conversations.
                        </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:bg-white/10 transition-all">
<div className="text-amber-400 mb-4">
<span className="material-symbols-outlined text-3xl">database</span>
</div>
<h3 className="text-xl font-medium mb-4 tracking-tight">Precision Data Enrichment</h3>
<p className="text-gray-400 font-light leading-relaxed">
                            Transform incomplete lead data into comprehensive prospect profiles with 98% accuracy guarantee.
                        </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:bg-white/10 transition-all">
<div className="text-amber-400 mb-4">
<span className="material-symbols-outlined text-3xl">integration_instructions</span>
</div>
<h3 className="text-xl font-medium mb-4 tracking-tight">Seamless CRM Integration</h3>
<p className="text-gray-400 font-light leading-relaxed">
                            Native integrations with Salesforce, HubSpot, Pipedrive, and 50+ CRM platforms for instant deployment.
                        </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:bg-white/10 transition-all">
<div className="text-amber-400 mb-4">
<span className="material-symbols-outlined text-3xl">analytics</span>
</div>
<h3 className="text-xl font-medium mb-4 tracking-tight">Revenue Intelligence</h3>
<p className="text-gray-400 font-light leading-relaxed">
                            Real-time analytics and predictive insights that identify high-value prospects and optimize conversion rates.
                        </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:bg-white/10 transition-all">
<div className="text-amber-400 mb-4">
<span className="material-symbols-outlined text-3xl">automation</span>
</div>
<h3 className="text-xl font-medium mb-4 tracking-tight">Smart Automation</h3>
<p className="text-gray-400 font-light leading-relaxed">
                            Automated workflows that nurture leads, trigger follow-ups, and maintain engagement without manual intervention.
                        </p>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:bg-white/10 transition-all">
<div className="text-amber-400 mb-4">
<span className="material-symbols-outlined text-3xl">security</span>
</div>
<h3 className="text-xl font-medium mb-4 tracking-tight">Enterprise Security</h3>
<p className="text-gray-400 font-light leading-relaxed">
                            SOC 2 compliant platform with end-to-end encryption, ensuring your data remains secure and compliant.
                        </p>
</div>
</div>

<div className="text-center mt-20">
<h3 className="text-3xl font-light tracking-tight mb-6">Ready to accelerate your revenue?</h3>
<p className="max-w-2xl font-light text-gray-400 mr-auto mb-8 ml-auto">Book a strategy call and we'll show you exactly how we'll get you there.</p>
<button className="gradient-gold hover:opacity-90 transition-all font-medium text-black rounded-md pt-3 pr-8 pb-3 pl-8">Book A Strategy Call</button>
</div>
</div>
</div>
</div>


    </>
  );
}
