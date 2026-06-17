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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



          !function () {
            if (!window.UnicornStudio) {
              window.UnicornStudio = { isInitialized: !1 };
              var i = document.createElement("script");
              i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
              i.onload = function () {
                window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
              },
              (document.head || document.body).appendChild(i)
            }
          }();
        
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
      

<div className="fixed inset-0 -z-10 bg-black pointer-events-none">
<div className="aura-background-component absolute inset-0 w-full h-full" data-alpha-mask="80" style="
          /* Fade from solid to transparent near bottom */
          -webkit-mask-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%);
                  mask-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 80%, rgba(255,255,255,0) 100%);
          -webkit-mask-repeat: no-repeat;
                  mask-repeat: no-repeat;
          -webkit-mask-size: 100% 100%;
                  mask-size: 100% 100%;
        ">
<div className="absolute inset-0 w-full h-full bg-neutral-950" data-us-project="XxCmD31vVBmiINgvYCho">
</div>

</div>
</div>

<header className="px-4 sm:px-6 md:px-10 w-full max-w-7xl mt-4 sm:mt-6 mx-auto relative [animation:fadeSlideIn_0.8s_ease-out_0s_both]">
<div className="flex items-center justify-between gap-4">
<div className="flex gap-2 items-center">
<a className="inline-flex items-center justify-center gap-2 font-manrope font-bold text-xl tracking-tight text-white hover:text-blue-400 transition-colors" href="#">
            Syncra
          </a>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
<a className="hover:text-white transition-colors font-medium" href="#product">Product</a>
<a className="hover:text-white transition-colors font-medium" href="#method">Method</a>
<a className="hover:text-white transition-colors font-medium" href="#customers">Customers</a>
<a className="hover:text-white transition-colors font-medium" href="#pricing">Pricing</a>
</nav>
<div className="flex gap-3 items-center">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#login">Log in</a>
<a className="inline-flex items-center justify-center h-8 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full px-4 transition-colors shadow-[0_0_15px_-3px_rgba(37,99,235,0.4)]" href="#signup">
            Sign Up
          </a>
</div>
</div>
</header>
<div className="relative">

<section className="z-10 mt-20 sm:mt-24 md:mt-32 mb-16 sm:mb-20 pt-0 pb-0 relative">
<div className="text-center max-w-3xl mx-auto px-6">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.1] [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll font-manrope">
<span className="block text-white">
              The operating system
            </span>
<span className="block bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-600" style={{}}>for modern builders.</span>
</h1>
<p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto mt-6 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll font-medium leading-relaxed">
            Streamline your development lifecycle. From issue to deploy, Syncra connects your code, context, and customers in real-time.
          </p>
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 items-center justify-center [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll">
<a className="group inline-flex items-center justify-center gap-2 shadow-blue-900/20 transition duration-200 ease-out hover:-translate-y-0.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/10 rounded-full py-2.5 px-6 relative backdrop-blur-sm" href="#demo">
<span>Book a demo</span>
</a>
<a className="group inline-flex items-center justify-center gap-2 shadow-blue-900/20 transition duration-200 ease-out hover:-translate-y-0.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-full py-2.5 px-6 relative shadow-lg" href="#start">
<span>Start building</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>
</div>

<section className="px-4 sm:px-6 lg:px-8 pb-20 max-w-6xl mx-auto relative" id="features">
<div className="overflow-hidden rounded-xl border border-white/10 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] bg-[#050505] shadow-2xl relative">

<div className="flex h-12 border-b border-white/5 bg-white/[0.02] items-center justify-between px-4">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/10"></div>
</div>
<div className="text-[11px] text-neutral-500 font-mono tracking-wide">syncra.dev/v2/overview</div>
<div className="w-10"></div>
</div>
<div className="flex bg-[#0a0a0a] min-h-[500px]">

<aside className="hidden md:flex w-56 border-r border-white/5 flex-col py-4">
<div className="px-3 mb-6">
<div className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-100">
<span className="text-xs font-semibold tracking-tight">Acme Corp</span>
<svg className="w-3 h-3 ml-auto opacity-50" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="px-2 space-y-0.5">
<div className="flex items-center gap-3 px-3 py-1.5 rounded-md bg-white/5 text-xs font-medium text-white">
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path></svg>
                  Overview
               </div>
<div className="flex items-center gap-3 px-3 py-1.5 rounded-md hover:bg-white/5 text-xs font-medium text-neutral-400 transition-colors">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  Issues
               </div>
<div className="flex items-center gap-3 px-3 py-1.5 rounded-md hover:bg-white/5 text-xs font-medium text-neutral-400 transition-colors">
<svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M6 3v12"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>
                  Cycles
               </div>
</div>
<div className="mt-auto px-4 pb-2">
<div className="flex items-center gap-2 text-[11px] text-neutral-500">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  Systems Operational
                </div>
</div>
</aside>

<div className="flex-1 p-6">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-lg font-manrope font-semibold text-white tracking-tight">Cycle 24</h2>
<p className="text-xs text-neutral-500 mt-1">Nov 14 - Nov 28 • 64% Complete</p>
</div>
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-neutral-800 border border-black ring-2 ring-[#0a0a0a]"></div>
<div className="w-6 h-6 rounded-full bg-neutral-700 border border-black ring-2 ring-[#0a0a0a]"></div>
<div className="w-6 h-6 rounded-full bg-blue-600 border border-black ring-2 ring-[#0a0a0a] flex items-center justify-center text-[8px] font-bold text-white">+</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="space-y-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-400">Backlog</span>
<span className="text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">3</span>
</div>
<div className="p-3 bg-[#111] border border-white/5 rounded-lg">
<div className="text-[10px] text-neutral-500 mb-2 font-mono">SYN-1024</div>
<div className="text-xs font-medium text-neutral-300 mb-3">Refactor auth middleware</div>
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-orange-500/20 flex items-center justify-center"><svg className="w-2.5 h-2.5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></div>
</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-blue-400">In Progress</span>
<span className="text-[10px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded">2</span>
</div>
<div className="p-3 bg-[#111] border border-blue-500/20 rounded-lg shadow-[0_0_10px_-5px_rgba(59,130,246,0.3)]">
<div className="text-[10px] text-blue-400/70 mb-2 font-mono">SYN-998</div>
<div className="text-xs font-medium text-white mb-3">Update payment gateway hooks</div>
<div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
<div className="bg-blue-500 w-2/3 h-full"></div>
</div>
</div>
<div className="p-3 bg-[#111] border border-white/5 rounded-lg">
<div className="text-[10px] text-neutral-500 mb-2 font-mono">SYN-1002</div>
<div className="text-xs font-medium text-neutral-300">Optimize database queries</div>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-neutral-400">Done</span>
<span className="text-[10px] bg-neutral-800 text-neutral-400 px-1.5 py-0.5 rounded">12</span>
</div>
<div className="p-3 bg-[#111] border border-white/5 rounded-lg opacity-60">
<div className="text-[10px] text-neutral-500 mb-2 font-mono line-through">SYN-980</div>
<div className="text-xs font-medium text-neutral-400 line-through">Q4 Assets Deployment</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-8 py-20 max-w-6xl mx-auto relative" id="features-grid">
<div className="text-center mb-16 max-w-2xl mx-auto [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="text-2xl md:text-3xl text-white font-manrope font-bold tracking-tight mb-4">
            Built for velocity
          </h2>
<p className="text-base md:text-lg text-slate-400 leading-relaxed">
            Every feature is crafted to remove friction. We handle the noise so you can focus on the signal.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<article className="md:col-span-2 group relative overflow-hidden bg-[#0a0a0a] border border-white/10 rounded-xl p-8 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll hover:border-blue-500/30 transition-all duration-300">
<div className="flex items-start justify-between mb-4">
<h3 className="text-white text-xl font-manrope font-semibold tracking-tight">
                Instant Telemetry
              </h3>
<svg className="w-5 h-5 text-neutral-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M12 20v-6M6 20V10M18 20V4"></path></svg>
</div>
<p className="text-base text-slate-400 mb-8 max-w-md">
              Real-time insights into your team's pull request velocity, merge times, and review bottlenecks.
            </p>
<div className="relative h-[160px] w-full border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-transparent mt-auto">
<div className="absolute inset-0 flex items-end justify-around px-8 pb-0">
<div className="w-8 bg-blue-900/30 h-[30%] rounded-t mx-1 group-hover:bg-blue-600/30 transition-colors duration-500"></div>
<div className="w-8 bg-blue-900/40 h-[50%] rounded-t mx-1 group-hover:bg-blue-600/40 transition-colors duration-500"></div>
<div className="w-8 bg-blue-900/20 h-[40%] rounded-t mx-1 group-hover:bg-blue-600/20 transition-colors duration-500"></div>
<div className="w-8 bg-blue-900/50 h-[70%] rounded-t mx-1 group-hover:bg-blue-600/50 transition-colors duration-500"></div>
<div className="w-8 bg-blue-500/80 h-[90%] rounded-t mx-1 shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
</div>
</div>
</article>

<article className="group relative rounded-xl border border-white/10 bg-[#0a0a0a] p-8 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll hover:border-blue-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5 text-blue-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3z"></path><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path></svg>
</div>
<h3 className="text-white text-lg font-manrope font-semibold tracking-tight mb-2">
              Smart Routing
            </h3>
<p className="text-base text-slate-400">
              Issues are automatically tagged and routed to the right engineer based on codebase expertise.
            </p>
</article>

<article className="group relative rounded-xl border border-white/10 bg-[#0a0a0a] p-8 [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll hover:border-blue-500/30 transition-colors">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-5 text-blue-400">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="12" x2="12" y1="3" y2="21"></line><path d="M8 8l-4 4 4 4"></path><path d="M16 8l4 4-4 4"></path></svg>
</div>
<h3 className="text-white text-lg font-manrope font-semibold tracking-tight mb-2">
              Git-Native
            </h3>
<p className="text-base text-slate-400">
              Manage your entire workflow from your terminal. Full two-way sync with GitHub Issues.
            </p>
</article>

<article className="md:col-span-2 group relative overflow-hidden bg-[#0a0a0a] border border-white/10 rounded-xl p-8 [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] animate-on-scroll hover:border-blue-500/30 transition-colors">
<div className="flex items-start justify-between mb-4">
<h3 className="text-white text-xl font-manrope font-semibold tracking-tight">
                Global Search
              </h3>
<span className="text-[10px] font-mono text-blue-300 border border-blue-500/30 bg-blue-500/10 px-1.5 py-0.5 rounded">CMD + K</span>
</div>
<p className="text-base text-slate-400 mb-6 max-w-md">
              Traverse your entire knowledge base in milliseconds. Syncra understands context, not just keywords.
            </p>
<div className="w-full h-10 rounded bg-[#151515] border border-white/5 flex items-center px-3 text-neutral-500 font-mono text-sm">
<span className="text-blue-500 mr-2">➜</span> find deploy_scripts
               <span className="ml-1 w-1.5 h-4 bg-blue-500 animate-pulse"></span>
</div>
</article>
</div>
</section>

<section className="px-4 py-24 max-w-4xl mx-auto relative" id="testimonial">
<div className="text-center [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="mb-6 flex justify-center">
<div className="flex -space-x-2 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
<div className="w-8 h-8 rounded-full bg-blue-600"></div>
<div className="w-8 h-8 rounded-full bg-white"></div>
</div>
</div>
<h3 className="text-xl md:text-2xl font-manrope font-medium text-white tracking-tight leading-relaxed mb-8">
              "Syncra replaced Jira, Linear, and Notion for us. It's the first tool that actually <span className="text-blue-400">feels like it was built by engineers</span>, for engineers. The speed is unmatched."
            </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 bg-neutral-800 rounded-full overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
</div>
<div className="text-left">
<p className="text-sm font-semibold text-white">Sarah Jenkins</p>
<p className="text-xs text-neutral-500">CTO, Lumina Corp</p>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative mb-32" id="pricing">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-manrope font-bold text-white tracking-tight mb-3">Simple Pricing</h2>
<p className="text-slate-400 text-base">Start for free, scale when you're ready.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative max-w-5xl mx-auto">

<article className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6 flex flex-col hover:border-white/20 transition-all">
<div className="mb-4">
<h4 className="text-white text-base font-manrope font-semibold tracking-tight">Hobby</h4>
<p className="text-neutral-500 text-sm mt-1">For side projects.</p>
</div>
<div className="mt-2 mb-6">
<span className="text-white text-3xl font-manrope font-bold tracking-tight">$0</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                    Up to 5 members
                  </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                    Community Support
                  </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors">Start Building</button>
</article>

<article className="rounded-xl border border-blue-500/50 bg-[#0f0f16] p-6 flex flex-col relative shadow-[0_0_30px_-10px_rgba(37,99,235,0.2)]">
<div className="absolute top-0 right-0 p-4">
<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
</div>
<div className="mb-4">
<h4 className="text-white text-base font-manrope font-semibold tracking-tight">Startup</h4>
<p className="text-blue-200/60 text-sm mt-1">For growing teams.</p>
</div>
<div className="mt-2 mb-6">
<span className="text-white text-3xl font-manrope font-bold tracking-tight">$19</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                    Unlimited members
                  </li>
<li className="flex items-center gap-3 text-sm text-white">
<svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                    Advanced Insights
                  </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/25">Get Started</button>
</article>

<article className="rounded-xl border border-white/10 bg-[#0a0a0a] p-6 flex flex-col hover:border-white/20 transition-all">
<div className="mb-4">
<h4 className="text-white text-base font-manrope font-semibold tracking-tight">Scale</h4>
<p className="text-neutral-500 text-sm mt-1">For large orgs.</p>
</div>
<div className="mt-2 mb-6">
<span className="text-white text-3xl font-manrope font-bold tracking-tight">$49</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                    SSO &amp; SAML
                  </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M20 6 9 17l-5-5"></path></svg>
                    Audit Logs
                  </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors">Contact Sales</button>
</article>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020202]">
<div className="max-w-6xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="inline-flex items-center gap-2 font-manrope font-bold text-lg tracking-tight text-white mb-4" href="#">
                        Syncra
                    </a>
<p className="text-xs text-neutral-500 max-w-[160px] leading-relaxed">
                        The new standard for modern software development.
                    </p>
</div>
<div>
<h4 className="text-white font-semibold mb-3 text-xs font-manrope tracking-tight">Product</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Issues</a></li>
<li><a className="hover:text-white transition-colors" href="#">Roadmaps</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-3 text-xs font-manrope tracking-tight">Company</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-3 text-xs font-manrope tracking-tight">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-[10px] text-neutral-600">© 2024 Syncra Inc.</p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
