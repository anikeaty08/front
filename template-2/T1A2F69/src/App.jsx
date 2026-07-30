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



        let isAnnual = true;
        
        function togglePricing() {
            isAnnual = !isAnnual;
            const toggle = document.getElementById('toggle-switch');
            const prices = document.querySelectorAll('.price');
            
            if (isAnnual) {
                toggle.style.transform = 'translateX(24px)';
                toggle.style.background = '#000';
                prices[0].textContent = '$15';
                prices[1].textContent = '$39';
                prices[2].textContent = '$159';
            } else {
                toggle.style.transform = 'translateX(0)';
                toggle.style.background = '#fff';
                prices[0].textContent = '$19';
                prices[1].textContent = '$49';
                prices[2].textContent = '$199';
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            const toggle = document.getElementById('toggle-switch');
            toggle.style.transform = 'translateX(24px)';
            toggle.style.background = '#000';
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
      

<div className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">

<div className="text-center mb-8 dimension-line dimension-v">
<div className="inline-block border border-black px-4 py-2 mb-4">
<span className="text-xs tracking-wider">SPECIFICATION SHEET</span>
</div>
<h1 className="text-4xl font-bold text-black mb-3 tracking-wider">PRICING MATRIX</h1>
<p className="text-black text-base max-w-xl mx-auto px-4 font-mono">TECHNICAL CONFIGURATIONS & RESOURCE ALLOCATION</p>
</div>

<div className="mb-10 flex items-center justify-center gap-4 dimension-line dimension-h">
<span className="text-black text-sm font-mono">MONTHLY</span>
<div className="relative inline-block w-12 h-6 bg-white border-2 border-black cursor-pointer" onClick={(e) => { togglePricing() }}>
<div className="absolute left-0 top-0 w-6 h-6 bg-white border border-black transition-transform duration-300" id="toggle-switch"></div>
</div>
<span className="text-black text-sm font-mono">ANNUAL <span className="text-xs">[-20%]</span></span>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl dimension-bracket bracket-top">

<div className="tech-card p-6 flex flex-col dimension-line dimension-h">
<div className="flex items-center mb-6">
<div className="w-10 h-10 border border-black flex items-center justify-center bg-white">
<i className="fas fa-rocket text-black text-sm"></i>
</div>
<div className="ml-4">
<h3 className="text-xl font-bold text-black tracking-wider">STARTER</h3>
<span className="text-xs font-mono">CONFIG-001</span>
</div>
</div>
<div className="mb-6 border-b border-black pb-4">
<div className="flex items-baseline">
<span className="price text-4xl font-bold text-black font-mono">$15</span>
<span className="text-black ml-2 text-sm font-mono">/MONTH</span>
</div>
<p className="text-black text-sm mt-1 font-mono">INDIVIDUAL DEPLOYMENT</p>
</div>
<ul className="space-y-3 mb-8 flex-grow text-sm font-mono">
<li className="flex items-center text-black">
<span className="mr-3 w-3 text-xs">▪</span>
<span>1M TOKENS/MONTH</span>
</li>
<li className="flex items-center text-black">
<span className="mr-3 w-3 text-xs">▪</span>
<span>5 CUSTOM MODELS</span>
</li>
<li className="flex items-center text-black">
<span className="mr-3 w-3 text-xs">▪</span>
<span>BASIC API ACCESS</span>
</li>
<li className="flex items-center text-black">
<span className="mr-3 w-3 text-xs">▪</span>
<span>EMAIL SUPPORT</span>
</li>
</ul>
<button className="w-full py-3 border-2 border-black text-black text-sm font-mono tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
                    INITIALIZE
                </button>
<p className="text-black text-xs text-center mt-2 font-mono">NO PAYMENT REQUIRED</p>
</div>

<div className="popular-card p-6 flex flex-col relative transform lg:scale-105 dimension-line dimension-v">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="bg-black text-white px-4 py-1 text-xs font-mono tracking-wider border border-white">RECOMMENDED</span>
</div>
<div className="flex items-center mb-6">
<div className="w-10 h-10 border border-white flex items-center justify-center bg-black">
<i className="fas fa-bolt text-white text-sm"></i>
</div>
<div className="ml-4">
<h3 className="text-xl font-bold text-white tracking-wider">PROFESSIONAL</h3>
<span className="text-xs font-mono text-gray-300">CONFIG-002</span>
</div>
</div>
<div className="mb-6 border-b border-white pb-4">
<div className="flex items-baseline">
<span className="price text-4xl font-bold text-white font-mono">$39</span>
<span className="text-white ml-2 text-sm font-mono">/MONTH</span>
</div>
<p className="text-white text-sm mt-1 font-mono">TEAM DEPLOYMENT</p>
</div>
<ul className="space-y-3 mb-8 flex-grow text-sm font-mono">
<li className="flex items-center text-white">
<span className="mr-3 w-3 text-xs">▪</span>
<span>10M TOKENS/MONTH</span>
</li>
<li className="flex items-center text-white">
<span className="mr-3 w-3 text-xs">▪</span>
<span>20 CUSTOM MODELS</span>
</li>
<li className="flex items-center text-white">
<span className="mr-3 w-3 text-xs">▪</span>
<span>ADVANCED API</span>
</li>
<li className="flex items-center text-white">
<span className="mr-3 w-3 text-xs">▪</span>
<span>PRIORITY SUPPORT</span>
</li>
<li className="flex items-center text-white">
<span className="mr-3 w-3 text-xs">▪</span>
<span>CUSTOM TRAINING</span>
</li>
</ul>
<button className="w-full py-3 bg-white text-black border-2 border-white text-sm font-mono tracking-wider hover:bg-black hover:text-white hover:border-black transition-colors duration-300">
                    DEPLOY
                </button>
<p className="text-gray-300 text-xs text-center mt-2 font-mono">14-DAY TRIAL PERIOD</p>
</div>

<div className="tech-card p-6 flex flex-col dimension-line dimension-h">
<div className="flex items-center mb-6">
<div className="w-10 h-10 border border-black flex items-center justify-center bg-white">
<i className="fas fa-building text-black text-sm"></i>
</div>
<div className="ml-4">
<h3 className="text-xl font-bold text-black tracking-wider">ENTERPRISE</h3>
<span className="text-xs font-mono">CONFIG-003</span>
</div>
</div>
<div className="mb-6 border-b border-black pb-4">
<div className="flex items-baseline">
<span className="price text-4xl font-bold text-black font-mono">$159</span>
<span className="text-black ml-2 text-sm font-mono">/MONTH</span>
</div>
<p className="text-black text-sm mt-1 font-mono">ENTERPRISE DEPLOYMENT</p>
</div>
<ul className="space-y-3 mb-8 flex-grow text-sm font-mono">
<li className="flex items-center text-black">
<span className="mr-3 w-3 text-xs">▪</span>
<span>UNLIMITED TOKENS</span>
</li>
<li className="flex items-center text-black">
<span className="mr-3 w-3 text-xs">▪</span>
<span>UNLIMITED MODELS</span>
</li>
<li className="flex items-center text-black">
<span className="mr-3 w-3 text-xs">▪</span>
<span>FULL API ECOSYSTEM</span>
</li>
<li className="flex items-center text-black">
<span className="mr-3 w-3 text-xs">▪</span>
<span>24/7 SUPPORT</span>
</li>
<li className="flex items-center text-black">
<span className="mr-3 w-3 text-xs">▪</span>
<span>DEDICATED RESOURCES</span>
</li>
</ul>
<button className="w-full py-3 border-2 border-black text-black text-sm font-mono tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
                    CONTACT ENGINEERING
                </button>
<p className="text-black text-xs text-center mt-2 font-mono">CUSTOM ARCHITECTURE</p>
</div>
</div>

<div className="mt-12 text-center max-w-4xl px-4 dimension-bracket bracket-left">
<div className="border border-black p-4 bg-white">
<p className="text-black text-sm mb-4 font-mono">ALL CONFIGURATIONS INCLUDE: 99.9% UPTIME SLA • ENTERPRISE SECURITY • COMMUNITY ACCESS</p>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-3 py-1 border border-black text-black text-xs font-mono">GDPR-COMPLIANT</span>
<span className="px-3 py-1 border border-black text-black text-xs font-mono">SOC-2-CERTIFIED</span>
<span className="px-3 py-1 border border-black text-black text-xs font-mono">HIPAA-READY</span>
</div>
</div>
</div>
</div>

    </>
  );
}
