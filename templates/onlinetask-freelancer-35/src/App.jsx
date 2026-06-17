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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[5000ms]"></div>
<div className="absolute top-[10%] right-[10%] w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[100px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-[30%] w-[50rem] h-[30rem] bg-blue-600/5 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-white" icon="solar:bolt-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-widest text-white uppercase">TASKS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-white transition-colors" href="#rewards">Rewards</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="https://www.chesy.site/2L2F1XML/9XWD88J/?sub1=Try">Log in</a>
<a className="group relative px-4 py-2 text-xs font-semibold text-white bg-white/10 rounded-full border border-white/10 overflow-hidden hover:bg-white/15 transition-all" href="https://www.chesy.site/2L2F1XML/9XWD88J/?sub1=Try">
<span className="relative z-10 flex items-center gap-2">
                        Get Started
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
<div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500"></div>
</a>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20 relative">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-reveal opacity-0">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-indigo-200">New tasks available for instant payout</span>
</div>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 animate-reveal delay-100 opacity-0 leading-[1.1]">
<span className="text-gradient">Monetize your time</span><br/>
<span className="text-neutral-500">with global tasks.</span>
</h1>

<p className="text-lg text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed animate-reveal delay-200 opacity-0">
                The modern platform for digital freelancers. Complete simple online tasks and get paid securely, instantly, and globally.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-reveal delay-300 opacity-0">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="https://www.chesy.site/2L2F1XML/9XWD88J/?sub1=Try">
                    Start Earning Now
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/10 transition-all" href="#features">
                    View Opportunities
                </a>
</div>

<div className="mt-16 pt-8 border-t border-white/5 animate-reveal delay-300 opacity-0">
<p className="text-xs font-medium text-neutral-500 mb-6 uppercase tracking-widest">Trusted by 10,000+ Freelancers</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">

<span className="text-lg font-semibold tracking-tight">Acme Inc.</span>
<span className="text-lg font-semibold tracking-tight">Quantum</span>
<span className="text-lg font-semibold tracking-tight">Echo</span>
<span className="text-lg font-semibold tracking-tight">Nebula</span>
</div>
</div>
</div>
</main>

<section className="relative max-w-6xl mx-auto px-6 pb-24">
<div className="relative rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-[16/9] md:aspect-[21/9] group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

<div className="absolute inset-0 p-8 md:p-12 flex flex-col items-center justify-center">
<div className="w-full max-w-3xl grid grid-cols-3 gap-4 md:gap-6">

<div className="glass-panel p-6 rounded-xl flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-300">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="h-2 w-16 bg-white/10 rounded-full"></div>
<div className="h-2 w-24 bg-white/5 rounded-full"></div>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col gap-3 border-indigo-500/30 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-300">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="h-2 w-20 bg-white/20 rounded-full"></div>
<div className="h-2 w-12 bg-white/10 rounded-full"></div>
</div>

<div className="glass-panel p-6 rounded-xl flex flex-col gap-3">
<div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-300">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="h-2 w-14 bg-white/10 rounded-full"></div>
<div className="h-2 w-20 bg-white/5 rounded-full"></div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-neutral-400">Real-time earnings dashboard</p>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24" id="features">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="border-gradient rounded-2xl p-8 relative group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Secure Payments</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Your earnings are held in escrow until approval. Withdraw instantly to your preferred method with zero hidden fees.
                    </p>
</div>
</div>

<div className="border-gradient rounded-2xl p-8 relative group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Work Anywhere</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Access tasks from 150+ countries. All you need is a reliable internet connection and a device to get started.
                    </p>
</div>
</div>

<div className="border-gradient rounded-2xl p-8 relative group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:border-indigo-500/50 group-hover:text-indigo-400 transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">High Approval Rate</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Our verified partners ensure fair task assessment. 98% of completed tasks are approved within 24 hours.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.02]" id="how-it-works">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center mb-16 tracking-tight text-white">How it works</h2>
<div className="space-y-12 relative">

<div className="absolute left-[27px] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-1/2 md:-ml-px hidden md:block"></div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1 md:text-right">
<h4 className="text-lg font-medium text-white mb-2">Create Account</h4>
<p className="text-sm text-neutral-400">Sign up in seconds. No credit card required. Just verify your email and start browsing.</p>
</div>
<div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-neutral-900 group-hover:border-indigo-500 transition-colors">
<span className="text-lg font-medium text-white">1</span>
</div>
<div className="flex-1 md:invisible"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1 md:order-last">
<h4 className="text-lg font-medium text-white mb-2">Select Tasks</h4>
<p className="text-sm text-neutral-400">Browse thousands of available micro-tasks ranging from data entry to app testing.</p>
</div>
<div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-neutral-900 group-hover:border-indigo-500 transition-colors">
<span className="text-lg font-medium text-white">2</span>
</div>
<div className="flex-1 md:text-right md:invisible"></div>
</div>

<div className="relative flex flex-col md:flex-row items-center gap-8 group">
<div className="flex-1 md:text-right">
<h4 className="text-lg font-medium text-white mb-2">Get Paid</h4>
<p className="text-sm text-neutral-400">Withdraw your earnings directly to your bank account, PayPal, or crypto wallet.</p>
</div>
<div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full border border-white/10 bg-neutral-900 group-hover:border-indigo-500 transition-colors">
<span className="text-lg font-medium text-white">3</span>
</div>
<div className="flex-1 md:invisible"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-white/10 bg-neutral-900">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-neutral-900/0 to-neutral-900/0"></div>
<div className="relative z-10 px-6 py-20 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to start earning?</h2>
<p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
                    Join the community of earners today. It's free, fast, and secure.
                </p>
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform duration-200" href="https://www.chesy.site/2L2F1XML/9XWD88J/?sub1=Try">
                    Create Free Account
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:bolt-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-widest text-white uppercase">TASKS</span>
</div>
<div className="flex gap-8 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Support</a>
</div>
<div className="text-sm text-neutral-600">
                © 2024 OnlineTasks Inc.
            </div>
</div>
</footer>

    </>
  );
}
