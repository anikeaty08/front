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



// Add no-js class immediately, remove it if JS runs
document.documentElement.classList.remove('no-js');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


      // Initialize Intersection Observer for reveal animations
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of element is visible
      };

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once revealed
          }
        });
      }, observerOptions);

      // Start observing all reveal elements immediately
      document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
      });

      // Number Counter Logic using Observer
      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseFloat(counter.getAttribute('data-target'));
            const duration = 2000;
            const increment = target / (duration / 16);
            
            let current = 0;
            const updateCount = () => {
              current += increment;
              if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCount);
              } else {
                counter.innerText = target;
              }
            };
            updateCount();
            observer.unobserve(counter);
          }
        });
      }, { threshold: 0.5 });

      document.querySelectorAll('.counter').forEach(el => {
        counterObserver.observe(el);
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
      

<div className="fixed inset-0 -z-10 bg-[#0B0C10]">

<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen"></div>

<div className="aura-background-component absolute w-full h-full top-0 left-0 opacity-80" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>
</div>
</div>


<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#0B0C10]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0B0C10]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center">
<iconify-icon className="text-white group-hover:text-indigo-400 transition-colors duration-500" height="24" icon="solar:hexagon-linear" width="24"></iconify-icon>
<div className="absolute inset-0 bg-indigo-500/50 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="text-sm font-semibold text-white tracking-tight">NovaEdge</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#shop">Shop</a>
<a className="hover:text-white transition-colors duration-300" href="#collections">Collections</a>
<a className="hover:text-white transition-colors duration-300" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white border border-white/10 rounded-md hover:bg-white/5 hover:border-white/20 transition-all duration-300 shadow-[0_0_0_1px_rgba(0,0,0,1)] inset-shadow" href="#cart">
<iconify-icon height="14" icon="solar:bag-3-linear" width="14"></iconify-icon>
            Cart (0)
          </a>
<button className="md:hidden text-white flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">

<div className="reveal delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-medium text-indigo-200 mb-8 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all cursor-default shadow-[0_0_15px_-5px_rgba(99,102,241,0.3)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
          New Winter Collection Available
        </div>

<h1 className="reveal delay-200 text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-8 leading-[1.05]">
          Redefine Your Look with
          <br className="hidden md:block"/>
          Future-Ready Gear
        </h1>

<p className="reveal delay-300 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
          Experience the perfect blend of aesthetics and utility. Premium
          apparel and accessories designed for the modern creator.
        </p>

<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group w-full sm:w-auto px-6 py-3 bg-[#D9D9D9] text-black text-xs font-semibold rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] text-center flex items-center justify-center gap-2" href="#shop">
            Shop Collection
            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 border border-white/10 text-white text-xs font-medium rounded hover:bg-white/5 hover:border-white/20 transition-all text-center flex items-center justify-center" href="#lookbook">
            View Lookbook
          </a>
</div>
</div>
</header>

<section className="border-y border-white/[0.06] bg-white/[0.01] py-10 relative overflow-hidden reveal">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">
          As seen in
        </p>
</div>
<div className="mask-linear w-full overflow-hidden">
<div className="animate-scroll">

<div className="flex items-center gap-16 md:gap-24 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
<span className="text-lg font-semibold tracking-tighter text-white">ACME CORP</span>
<span className="text-lg font-semibold tracking-tighter text-white">GLOBEX</span>
<span className="text-lg font-semibold tracking-tighter text-white">SOYIENT</span>
<span className="text-lg font-semibold tracking-tighter text-white">INITECH</span>
<span className="text-lg font-semibold tracking-tighter text-white">UMBRELLA</span>
<span className="text-lg font-semibold tracking-tighter text-white">MASSIVE</span>
<span className="text-lg font-semibold tracking-tighter text-white">HOOLI</span>
<span className="text-lg font-semibold tracking-tighter text-white">VEHEMENT</span>
</div>

<div className="flex items-center gap-16 md:gap-24 px-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 shrink-0">
<span className="text-lg font-semibold tracking-tighter text-white">ACME CORP</span>
<span className="text-lg font-semibold tracking-tighter text-white">GLOBEX</span>
<span className="text-lg font-semibold tracking-tighter text-white">SOYIENT</span>
<span className="text-lg font-semibold tracking-tighter text-white">INITECH</span>
<span className="text-lg font-semibold tracking-tighter text-white">UMBRELLA</span>
<span className="text-lg font-semibold tracking-tighter text-white">MASSIVE</span>
<span className="text-lg font-semibold tracking-tighter text-white">HOOLI</span>
<span className="text-lg font-semibold tracking-tighter text-white">VEHEMENT</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/[0.06]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
<div className="reveal delay-100">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
<span className="counter" data-target="50">0</span>
              k+
            </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">
              Happy Customers
            </div>
</div>
<div className="reveal delay-200">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
<span className="counter" data-target="200">0</span>
              +
            </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">
              New Arrivals
            </div>
</div>
<div className="reveal delay-300">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
<span className="counter" data-target="24">0</span>
              /7
            </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">
              Customer Support
            </div>
</div>
<div className="reveal delay-300">
<div className="flex items-baseline justify-center md:justify-start gap-0.5 text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">
<span className="counter" data-target="100">0</span>
              %
            </div>
<div className="text-xs text-slate-500 uppercase tracking-widest">
              Secure Payment
            </div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:mb-28 reveal">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Curated For Creators
          </h2>
<p className="text-slate-400 max-w-xl text-lg font-light">
            Discover our exclusive categories engineered for performance, style,
            and durability. Built for the daily grind.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-300 border border-indigo-500/20 shadow-[0_0_15px_-5px_rgba(99,102,241,0.5)]">
<iconify-icon height="20" icon="solar:t-shirt-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
                Premium Apparel
              </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 h-20">
                Modern cuts meet technical fabrics. Designed for motion,
                comfort, and uncompromising style.
              </p>
<div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4"></div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-indigo-300 transition-colors" href="#">
                Shop Apparel
                <iconify-icon height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="reveal delay-200 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 text-purple-300 border border-purple-500/20 shadow-[0_0_15px_-5px_rgba(168,85,247,0.5)]">
<iconify-icon height="20" icon="solar:watch-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
                Everyday Carry
              </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 h-20">
                Essential accessories that blend seamlessly into your workflow.
                Watches, bags, and eyewear.
              </p>
<div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4"></div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-purple-300 transition-colors" href="#">
                Shop EDC
                <iconify-icon height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>

<div className="reveal delay-300 group relative p-8 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="h-10 w-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-6 text-emerald-300 border border-emerald-500/20 shadow-[0_0_15px_-5px_rgba(16,185,129,0.5)]">
<iconify-icon height="20" icon="solar:headphones-round-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">
                Audio &amp; Tech
              </h3>
<p className="text-sm text-slate-400 leading-relaxed mb-8 h-20">
                High-fidelity gear for the immersive creator. Noise-cancelling
                headphones and smart gadgets.
              </p>
<div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent mb-4"></div>
<a className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-emerald-300 transition-colors" href="#">
                Shop Tech
                <iconify-icon height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-gradient-to-b from-white/[0.01] to-transparent" id="results">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 text-center">
          Verified Reviews
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="reveal delay-100 p-8 md:p-10 rounded-xl bg-[#0B0C10] border border-white/[0.08] hover:border-white/[0.15] transition-colors relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-[50px] group-hover:bg-blue-500/20 transition-all duration-700 rounded-full"></div>
<div className="relative z-10">
<div className="mb-6 text-indigo-400 flex gap-0.5">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg text-slate-300 leading-relaxed mb-8 font-light">
                "The quality of the jacket is unmatched. Fits perfectly and the
                technical material feels incredibly premium. Definite
                <span className="text-white font-medium">must-have</span>."
              </p>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-xs text-white">
                  AR
                </div>
<div>
<div className="text-sm font-medium text-white">Alex Rivera</div>
<div className="text-xs text-slate-500">Verified Buyer</div>
</div>
</div>
</div>
</div>
<div className="reveal delay-200 p-8 md:p-10 rounded-xl bg-[#0B0C10] border border-white/[0.08] hover:border-white/[0.15] transition-colors relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-emerald-500/10 blur-[50px] group-hover:bg-emerald-500/20 transition-all duration-700 rounded-full"></div>
<div className="relative z-10">
<div className="mb-6 text-emerald-400 flex gap-0.5">
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon height="18" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg text-slate-300 leading-relaxed mb-8 font-light">
                "Fast shipping and the unboxing experience was top tier. The
                headphones have amazing sound clarity.
                <span className="text-white font-medium">Highly recommend</span>
                NovaStore"
              </p>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center text-xs text-white">
                  SL
                </div>
<div>
<div className="text-sm font-medium text-white">Sarah Lee</div>
<div className="text-xs text-slate-500">Verified Buyer</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/[0.06] relative overflow-hidden" id="insights">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="reveal text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">
          Unlock 10% Off
        </h2>
<p className="reveal delay-100 text-slate-400 mb-10 font-light">
          Sign up for our newsletter to get exclusive access to drops, sales,
          and a discount on your first order.
        </p>
<form className="reveal delay-200 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
<input className="flex-1 bg-white/[0.03] border border-white/10 rounded px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all shadow-inner" placeholder="work@company.com" required="" type="email"/>
<button className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-slate-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]" type="submit">
            Subscribe
          </button>
</form>
<p className="reveal delay-300 text-[10px] text-slate-600 mt-6 uppercase tracking-wider">
          No spam. Unsubscribe at any time.
        </p>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden border-t border-white/[0.06]" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
            Questions?
          </h2>
<p className="text-slate-400 text-lg font-light">
            Our support team is here to help with orders, sizing, and returns.
          </p>
</div>
<form className="reveal delay-100 space-y-6 bg-[#0E0F14] p-8 md:p-12 rounded-2xl border border-white/[0.08] shadow-2xl relative">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
<div className="space-y-2">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                Name
              </label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                Email
              </label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2 relative z-10 mt-6">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
              Order Number (Optional)
            </label>
<input className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors" placeholder="#NS-12345" type="text"/>
</div>
<div className="space-y-2 relative z-10 mt-6">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
              Message
            </label>
<textarea className="w-full bg-[#0B0C10] border border-white/10 rounded px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-colors resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>
<div className="pt-4 relative z-10 mt-6">
<button className="w-full bg-gradient-to-b from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-medium py-3.5 rounded text-sm transition-all shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] border border-indigo-400/20" type="button">
              Send Message
            </button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/[0.06] bg-[#0B0C10] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-white" height="20" icon="solar:hexagon-linear" width="20"></iconify-icon>
<span className="text-base font-semibold tracking-tight text-white">
                NovaEdge
              </span>
</div>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed font-light">
              Elevating your lifestyle with premium gear. Quality meets modern
              design for the creators of tomorrow.
            </p>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">
              Shop
            </h4>
<ul className="space-y-4 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  New Arrivals
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Apparel
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Accessories
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Sale
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-6">
              Support
            </h4>
<ul className="space-y-4 text-sm text-slate-500">
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Order Status
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Shipping &amp; Returns
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  FAQ
                </a>
</li>
<li>
<a className="hover:text-indigo-400 transition-colors" href="#">
                  Contact Us
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-600">
            © 2023 NovaEdge Solutions. All rights reserved.
          </p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon height="18" icon="ri:linkedin-line" width="18"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon height="18" icon="ri:twitter-x-line" width="18"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon height="18" icon="ri:github-line" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
