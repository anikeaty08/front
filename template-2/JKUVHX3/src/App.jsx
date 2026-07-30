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

  const carousel = document.getElementById('carousel');
  document.getElementById('prev').addEventListener('click', () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
  });
  document.getElementById('next').addEventListener('click', () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
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
      
<section className="max-w-7xl space-y-20 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="fade-in stagger-1">
<p className="flex items-center gap-3 text-sm font-medium text-violet-400">
<span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
      Enterprise Integration Platform
    </p>
</div>

<div className="grid lg:grid-cols-[minmax(0,480px)_1fr] gap-20">
<div className="slide-up stagger-2">
<h1 className="text-6xl/[1.05] bg-clip-text font-normal text-transparent tracking-tight font-pt-serif bg-gradient-to-r from-white via-violet-100 to-violet-300">
        Unify your workflow across every platform
      </h1>
</div>
<div className="space-y-6 slide-up stagger-3">
<p className="text-neutral-300 text-xl leading-relaxed">
        Transform scattered tools into a cohesive ecosystem. Our advanced integration suite connects your favorite applications, streamlines communication, and accelerates project delivery across distributed teams.
      </p>
<div className="flex items-center gap-8 text-sm text-neutral-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
          50+ integrations
        </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-yellow-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
          Real-time sync
        </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield w-4 h-4 text-blue-400" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          Enterprise security
        </div>
</div>
</div>
</div>

<div className="relative blur-in stagger-4">
<div className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6" id="carousel">

<article className="card snap-start group">
<div className="h-44 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mb-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent"></div>
<svg className="lucide lucide-message-square-heart w-12 h-12 text-blue-400" data-lucide="message-square-heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"></path></svg>
</div>
<div className="space-y-3">
<h3 className="text-xs uppercase tracking-wider text-blue-400 font-semibold">Customer Intelligence</h3>
<p className="leading-tight text-xl font-medium">Transform feedback into product breakthroughs</p>
<p className="text-sm text-neutral-400 leading-relaxed">Automatically capture, analyze, and prioritize customer requests from multiple channels into actionable development tasks.</p>
</div>
<button className="self-end mt-8 p-3 rounded-full border border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
<svg className="lucide lucide-arrow-right w-4 h-4 text-blue-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</article>

<article className="card snap-start group">
<div className="h-44 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center mb-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-transparent"></div>
<svg className="lucide lucide-git-branch w-12 h-12 text-green-400" data-lucide="git-branch" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
</div>
<div className="space-y-3">
<h3 className="text-xs uppercase tracking-wider text-green-400 font-semibold">DevOps Automation</h3>
<p className="leading-tight text-xl font-medium">Streamline code-to-deployment pipelines</p>
<p className="text-sm text-neutral-400 leading-relaxed">Intelligent Git workflows that automatically link commits, manage pull requests, and trigger deployment sequences.</p>
</div>
<button className="self-end mt-8 p-3 rounded-full border border-green-500/50 hover:bg-green-500/20 transition-all duration-300 group-hover:scale-110">
<svg className="lucide lucide-git-merge w-4 h-4 text-green-400" data-lucide="git-merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>
</button>
</article>

<article className="card snap-start group">
<div className="h-44 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center mb-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-transparent"></div>
<svg className="lucide lucide-smartphone w-12 h-12 text-purple-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="space-y-3">
<h3 className="text-xs uppercase tracking-wider text-purple-400 font-semibold">Mobile Command Center</h3>
<p className="leading-tight text-xl font-medium">Manage projects from anywhere, anytime</p>
<p className="text-sm text-neutral-400 leading-relaxed">Native mobile experience with offline capabilities, push notifications, and gesture-based project navigation.</p>
</div>
<button className="self-end mt-8 p-3 rounded-full border border-purple-500/50 hover:bg-purple-500/20 transition-all duration-300 group-hover:scale-110">
<svg className="lucide lucide-download w-4 h-4 text-purple-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
</button>
</article>

<article className="card snap-start group">
<div className="h-44 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center mb-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-transparent"></div>
<svg className="lucide lucide-users w-12 h-12 text-orange-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="space-y-3">
<h3 className="text-xs uppercase tracking-wider text-orange-400 font-semibold">Request Management</h3>
<p className="leading-tight text-xl font-medium">Convert chaos into organized workflows</p>
<p className="text-sm text-neutral-400 leading-relaxed">Smart intake system that categorizes, assigns, and tracks internal requests with automated escalation protocols.</p>
</div>
<button className="self-end mt-8 p-3 rounded-full border border-orange-500/50 hover:bg-orange-500/20 transition-all duration-300 group-hover:scale-110">
<svg className="lucide lucide-arrow-right w-4 h-4 text-orange-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</article>

<article className="card snap-start group">
<div className="h-44 rounded-xl bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border border-teal-500/30 flex items-center justify-center mb-8 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 to-transparent"></div>
<svg className="lucide lucide-activity w-12 h-12 text-teal-400" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div className="space-y-3">
<h3 className="text-xs uppercase tracking-wider text-teal-400 font-semibold">Analytics Engine</h3>
<p className="leading-tight text-xl font-medium">Data-driven project intelligence</p>
<p className="text-sm text-neutral-400 leading-relaxed">Advanced metrics and predictive insights to optimize team performance and project delivery timelines.</p>
</div>
<button className="self-end mt-8 p-3 rounded-full border border-teal-500/50 hover:bg-teal-500/20 transition-all duration-300 group-hover:scale-110">
<svg className="lucide lucide-trending-up w-4 h-4 text-teal-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</button>
</article>
</div>

<div className="flex items-center justify-center gap-6 mt-12 slide-up stagger-5">
<button className="w-12 h-12 rounded-full bg-neutral-800/80 hover:bg-violet-600/50 border border-neutral-700 hover:border-violet-500 grid place-content-center transition-all duration-300 backdrop-blur" id="prev">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-violet-400"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
<div className="w-2 h-2 rounded-full bg-neutral-600"></div>
</div>
<button className="w-12 h-12 rounded-full bg-neutral-800/80 hover:bg-violet-600/50 border border-neutral-700 hover:border-violet-500 grid place-content-center transition-all duration-300 backdrop-blur" id="next">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-neutral-800/50 slide-up stagger-6">
<div className="text-center space-y-2">
<div className="text-3xl font-bold text-violet-400">10M+</div>
<div className="text-sm text-neutral-400">Tasks automated daily</div>
</div>
<div className="text-center space-y-2">
<div className="text-3xl font-bold text-green-400">99.9%</div>
<div className="text-sm text-neutral-400">Integration uptime</div>
</div>
<div className="text-center space-y-2">
<div className="text-3xl font-bold text-blue-400">50K+</div>
<div className="text-sm text-neutral-400">Teams connected</div>
</div>
</div>
</section>


    </>
  );
}
