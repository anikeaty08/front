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
fontFamily: {
sans: ['Inter', 'ui-sans-serif', 'system-ui'],
serif: ['Playfair Display', 'ui-serif', 'Georgia']
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
'blur-in': 'blurIn 0.7s ease-out forwards'
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'tranindigoY(20px)' },
'100%': { opacity: '1', transform: 'tranindigoY(0)' }
},
slideUp: {
'0%': { opacity: '0', transform: 'tranindigoY(30px)' },
'100%': { opacity: '1', transform: 'tranindigoY(0)' }
},
blurIn: {
'0%': { opacity: '0', filter: 'blur(10px)' },
'100%': { opacity: '1', filter: 'blur(0px)' }
}
}
}
}
}



document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons({ strokeWidth: 1.5 });
  
  const buttons = document.querySelectorAll('[data-accordion-btn]');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      const chevron = btn.querySelector('.accordion-chevron');
      const isOpen = !content.classList.contains('hidden');

      // Close all
      document.querySelectorAll('[data-accordion-content]').forEach(c => c.classList.add('hidden'));
      document.querySelectorAll('.accordion-chevron').forEach(ch => ch.style.transform = 'rotate(0deg)');
      document.querySelectorAll('[data-accordion-btn]').forEach(b => b.classList.remove('bg-indigo-700/80'));

      // Toggle current
      if (!isOpen) {
        content.classList.remove('hidden');
        chevron.style.transform = 'rotate(180deg)';
        btn.classList.add('bg-indigo-700/80');
      }
    });
  });

  // Auto-open first item
  setTimeout(() => {
    buttons[0].click();
  }, 1500);
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
      
<main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

<section className="flex flex-col sm:px-8 md:px-12 lg:px-16 xl:px-24 lg:py-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0db4836-41ab-43d4-9f3e-1481aec32248_1600w.jpg)] bg-cover pt-16 pr-6 pb-16 pl-6 space-y-8 justify-center">
<div className="space-y-8 opacity-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="space-y-4">
<p className="uppercase tracking-[0.3em] text-xs font-medium text-blue-400 opacity-0 animate-slide-up" style={{animationDelay: '0.4s'}}>Why Choose Nexus</p>
<h1 className="sm:text-4xl md:text-5xl xl:text-6xl leading-tight opacity-0 animate-blur-in text-3xl font-bold tracking-tight font-serif" style={{animationDelay: '0.6s'}}>
          Advanced Platform<br/>
<span className="text-blue-300" style={{}}>Solutions</span>
</h1>
<p className="max-w-lg text-base sm:text-lg text-indigo-300 leading-relaxed opacity-0 animate-fade-in" style={{animationDelay: '0.8s'}}>
          Experience next-generation financial infrastructure designed for scalability, transparency, and seamless integration across modern ecosystems.
        </p>
</div>
<div className="space-y-6 opacity-0 animate-slide-up" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-4 p-4 bg-indigo-800/40 rounded-xl border border-indigo-700/50 hover:border-blue-400/30 transition-all duration-300" style={{}}>
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-400/20" style={{}}>
<svg className="lucide lucide-trending-up w-5 h-5 text-cyan-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<h3 className="font-medium text-white">98.7% Uptime</h3>
<p className="text-sm text-indigo-400" style={{}}>Enterprise-grade reliability</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-indigo-800/40 rounded-xl border border-indigo-700/50 hover:border-blue-400/30 transition-all duration-300" style={{}}>
<div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-400/20" style={{}}>
<svg className="lucide lucide-shield-check w-5 h-5 text-cyan-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="font-medium text-white">Bank-Level Security</h3>
<p className="text-sm text-indigo-400" style={{}}>Multi-layer protection protocols</p>
</div>
</div>
</div>
</div>
</section>

<section className="flex sm:px-8 md:px-12 lg:px-16 lg:py-24 bg-indigo-950 pt-16 pr-6 pb-16 pl-6 items-center justify-center" style={{}}>
<div className="w-full max-w-xl space-y-3">

<div className="rounded-xl overflow-hidden border border-indigo-700/50 opacity-0 animate-slide-up" style={{animationDelay: '0.3s'}}>
<button className="w-full flex hover:bg-indigo-700/60 transition-all duration-300 group bg-indigo-800/60 pt-5 pr-5 pb-5 pl-5 items-center justify-between" data-accordion-btn="" style={{}} type="button">
<div className="flex items-center gap-4">
<span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500/20 to-cyan-500/20 group-hover:from-cyan-500/30 group-hover:to-cyan-500/30 transition-all duration-300" style={{}}>
<svg className="lucide lucide-dollar-sign w-5 h-5 text-emerald-400" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</span>
<div className="text-left">
<span className="block font-medium text-white">Reduced Capital Costs</span>
<span className="text-sm text-indigo-400" style={{}}>Up to 40% savings</span>
</div>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 group-hover:text-cyan-400 transition-all duration-300 accordion-chevron text-indigo-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transform: 'rotate(0deg)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="bg-indigo-900/40 text-indigo-200 p-5 text-sm leading-relaxed border-t border-indigo-700/30 hidden" data-accordion-content="" style={{}}>
          Our decentralized architecture eliminates traditional intermediary costs through automated smart contracts and peer-to-peer settlements. This revolutionary approach reduces capital requirements by leveraging distributed liquidity pools and algorithmic risk assessment.
          <div className="mt-3 flex items-center gap-2 text-cyan-400" style={{}}>
<svg className="lucide lucide-check-circle w-4 h-4" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-xs font-medium">Automated cost optimization</span>
</div>
</div>
</div>

<div className="rounded-xl overflow-hidden border border-indigo-700/50 opacity-0 animate-slide-up" style={{animationDelay: '0.5s'}}>
<button className="w-full flex items-center justify-between bg-indigo-800/60 hover:bg-indigo-700/60 transition-all duration-300 p-5 group" data-accordion-btn="" style={{}} type="button">
<div className="flex items-center gap-4">
<span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 group-hover:from-blue-500/30 group-hover:to-indigo-500/30 transition-all duration-300" style={{}}>
<svg className="lucide lucide-eye w-5 h-5 text-blue-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</span>
<div className="text-left">
<span className="font-medium text-white block">Real-Time Transparency</span>
<span className="text-sm text-indigo-400" style={{}}>Immutable audit trails</span>
</div>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 group-hover:text-cyan-400 transition-all duration-300 accordion-chevron text-indigo-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transform: 'rotate(0deg)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="bg-indigo-900/40 text-indigo-200 p-5 text-sm leading-relaxed border-t border-indigo-700/30 hidden" data-accordion-content="" style={{}}>
          Complete visibility into all transactions and processes through blockchain-based ledgers. Every participant has access to real-time data, eliminating information asymmetry and building trust through cryptographic verification and immutable records.
          <div className="mt-3 flex items-center gap-2 text-blue-400" style={{}}>
<svg className="lucide lucide-activity w-4 h-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<span className="text-xs font-medium">Live monitoring dashboard</span>
</div>
</div>
</div>

<div className="rounded-xl overflow-hidden border border-indigo-700/50 opacity-0 animate-slide-up" style={{animationDelay: '0.7s'}}>
<button className="w-full flex hover:bg-indigo-700/60 transition-all duration-300 group bg-indigo-800/60 pt-5 pr-5 pb-5 pl-5 items-center justify-between" data-accordion-btn="" style={{}} type="button">
<div className="flex items-center gap-4">
<span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500/20 to-cyan-500/20 group-hover:from-cyan-500/30 group-hover:to-cyan-500/30 transition-all duration-300" style={{}}>
<svg className="lucide lucide-blocks w-5 h-5 text-purple-400" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</span>
<div className="text-left">
<span className="font-medium text-white block">DeFi-Native Architecture</span>
<span className="text-sm text-indigo-400" style={{}}>Seamless composability</span>
</div>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 group-hover:text-cyan-400 transition-all duration-300 accordion-chevron text-indigo-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transform: 'rotate(0deg)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="bg-indigo-900/40 text-indigo-200 p-5 text-sm leading-relaxed border-t border-indigo-700/30 hidden" data-accordion-content="" style={{}}>
          Built from the ground up for decentralized finance ecosystems. Native smart contract integration enables automatic yield farming, liquidity mining, and cross-protocol interactions that maximize capital efficiency across multiple DeFi protocols simultaneously.
          <div className="mt-3 flex items-center gap-2 text-cyan-400" style={{}}>
<svg className="lucide lucide-link w-4 h-4" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<span className="text-xs font-medium">Cross-chain compatibility</span>
</div>
</div>
</div>

<div className="rounded-xl overflow-hidden border border-indigo-700/50 opacity-0 animate-slide-up" style={{animationDelay: '0.9s'}}>
<button className="w-full flex hover:bg-indigo-700/60 transition-all duration-300 group bg-indigo-800/60 pt-5 pr-5 pb-5 pl-5 items-center justify-between" data-accordion-btn="" style={{}} type="button">
<div className="flex items-center gap-4">
<span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500/20 to-red-500/20 group-hover:from-blue-500/30 group-hover:to-red-500/30 transition-all duration-300" style={{}}>
<svg className="lucide lucide-share-2 w-5 h-5 text-orange-400" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</span>
<div className="text-left">
<span className="font-medium text-white block">Fractional Ownership</span>
<span className="text-sm text-indigo-400" style={{}}>Programmable rights</span>
</div>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 group-hover:text-cyan-400 transition-all duration-300 accordion-chevron text-indigo-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transform: 'rotate(0deg)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="bg-indigo-900/40 text-indigo-200 p-5 text-sm leading-relaxed border-t border-indigo-700/30 hidden" data-accordion-content="" style={{}}>
          Revolutionary tokenization enables granular ownership distribution with programmable governance rights. Instant settlement capabilities and global accessibility remove traditional barriers while maintaining compliance through embedded smart contract logic.
          <div className="mt-3 flex items-center gap-2 text-blue-400" style={{}}>
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-xs font-medium">Global distribution network</span>
</div>
</div>
</div>

<div className="rounded-xl overflow-hidden border border-indigo-700/50 opacity-0 animate-slide-up" style={{animationDelay: '1.1s'}}>
<button className="w-full flex items-center justify-between bg-indigo-800/60 hover:bg-indigo-700/60 transition-all duration-300 p-5 group" data-accordion-btn="" style={{}} type="button">
<div className="flex items-center gap-4">
<span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300" style={{}}>
<svg className="lucide lucide-scale w-5 h-5 text-teal-400" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
</span>
<div className="text-left">
<span className="font-medium text-white block">Regulatory Compliance</span>
<span className="text-sm text-indigo-400" style={{}}>Multi-jurisdiction support</span>
</div>
</div>
<svg className="lucide lucide-chevron-down w-5 h-5 group-hover:text-cyan-400 transition-all duration-300 accordion-chevron text-indigo-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{transform: 'rotate(0deg)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="bg-indigo-900/40 text-indigo-200 p-5 text-sm leading-relaxed border-t border-indigo-700/30 hidden" data-accordion-content="" style={{}}>
          Comprehensive regulatory framework designed with input from leading legal experts across major financial jurisdictions. Built-in KYC/AML procedures, automated reporting capabilities, and jurisdiction-specific compliance modules ensure legal clarity for all stakeholders.
          <div className="mt-3 flex items-center gap-2 text-cyan-400" style={{}}>
<svg className="lucide lucide-verified w-4 h-4" data-lucide="verified" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-medium">Certified compliance protocols</span>
</div>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
