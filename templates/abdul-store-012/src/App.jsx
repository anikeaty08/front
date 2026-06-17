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



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('[data-animate]').forEach((el, index) => {
                el.style.opacity = "0";
                el.style.transform = "translateY(24px)";
                el.style.transition = `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`;
                observer.observe(el);
            });
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
      

<div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-blob"></div>
<div className="fixed top-[40%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10 animate-blob animation-delay-2000"></div>
<div className="fixed bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none -z-10 animate-blob animation-delay-4000"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-zinc-800/50" data-animate="">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="flex items-center gap-1.5 group" href="#">
<iconify-icon className="text-zinc-100 group-hover:text-blue-400 transition-colors" icon="ri:apple-fill" width="22"></iconify-icon>
<span className="text-lg font-medium tracking-tighter uppercase mt-0.5 text-zinc-100">ABDULS STORE</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#shop">Inventory</a>
<a className="hover:text-zinc-100 transition-colors" href="#location">Store</a>
<a className="hover:text-zinc-100 transition-colors" href="#sell">Trade-in</a>
</div>
<a className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-zinc-100 text-zinc-950 px-4 py-2 rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="https://wa.me/27699739461" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span className="hidden sm:inline">+27 69 973 9461</span>
<span className="sm:hidden">Contact</span>
</a>
</div>
</nav>

<main className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center" data-animate="">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel text-xs font-medium text-blue-400 mb-8 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Premium Devices in South Africa
        </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6 text-zinc-100 max-w-4xl mx-auto leading-[1.1]">
            Upgrade your tech. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Elevate your life.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 tracking-tight leading-relaxed">
            Discover the latest mobile devices with studio-grade quality. Whether you're buying brand new or trading in your old device, Abdul's Store offers a seamless premium experience.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center gap-2" href="#shop">
                Browse Inventory
            </a>
<a className="w-full sm:w-auto px-6 py-3 rounded-full glass-panel text-zinc-100 text-sm font-medium hover:bg-zinc-800/50 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2" href="#location">
                Visit Our Store <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</main>

<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10" id="shop">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4" data-animate="">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-2">Premium Inventory</h2>
<p className="text-sm text-zinc-400">High-end smartphones available right now.</p>
</div>
<div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
<button className="px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-medium whitespace-nowrap shadow-[0_0_10px_rgba(59,130,246,0.1)]">All Models</button>
<button className="px-4 py-1.5 rounded-full glass-panel text-zinc-300 hover:text-white hover:bg-zinc-800/50 text-xs font-medium whitespace-nowrap transition-colors">Apple</button>
<button className="px-4 py-1.5 rounded-full glass-panel text-zinc-300 hover:text-white hover:bg-zinc-800/50 text-xs font-medium whitespace-nowrap transition-colors">Samsung</button>
<button className="px-4 py-1.5 rounded-full glass-panel text-zinc-300 hover:text-white hover:bg-zinc-800/50 text-xs font-medium whitespace-nowrap transition-colors">Google &amp; Others</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">


<div className="glass-panel rounded-[24px] p-2.5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-blue-500/30 group relative flex flex-col" data-animate="">
<div className="aspect-[4/5] bg-zinc-900 rounded-[18px] mb-4 overflow-hidden relative border border-zinc-800/50">
<img alt="iPhone 15 Pro Max" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-tight text-zinc-200 uppercase border border-zinc-700/50">Apple</div>
</div>
<div className="px-2 pb-2 flex-1 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-zinc-100 leading-tight mb-1">iPhone 15 Pro Max</h3>
<p className="text-xs text-zinc-500 mb-5">Premium Titanium</p>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-sm font-medium text-blue-400 transition-all" href="https://wa.me/27699739461?text=I'm%20interested%20in%20buying%20the%20iPhone%2015%20Pro%20Max" target="_blank">
<iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Buy Now
                        </a>
</div>
</div>
</div>

<div className="glass-panel rounded-[24px] p-2.5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-blue-500/30 group relative flex flex-col" data-animate="">
<div className="aspect-[4/5] bg-zinc-900 rounded-[18px] mb-4 overflow-hidden relative border border-zinc-800/50">
<img alt="iPhone 15" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-tight text-zinc-200 uppercase border border-zinc-700/50">Apple</div>
</div>
<div className="px-2 pb-2 flex-1 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-zinc-100 leading-tight mb-1">iPhone 15</h3>
<p className="text-xs text-zinc-500 mb-5">Dynamic Island</p>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-sm font-medium text-blue-400 transition-all" href="https://wa.me/27699739461?text=I'm%20interested%20in%20buying%20the%20iPhone%2015" target="_blank">
<iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Buy Now
                        </a>
</div>
</div>
</div>

<div className="glass-panel rounded-[24px] p-2.5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-blue-500/30 group relative flex flex-col" data-animate="">
<div className="aspect-[4/5] bg-zinc-900 rounded-[18px] mb-4 overflow-hidden relative border border-zinc-800/50">
<img alt="iPhone 14 Pro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-tight text-zinc-200 uppercase border border-zinc-700/50">Apple</div>
</div>
<div className="px-2 pb-2 flex-1 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-zinc-100 leading-tight mb-1">iPhone 14 Pro</h3>
<p className="text-xs text-zinc-500 mb-5">Pro Camera System</p>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-sm font-medium text-blue-400 transition-all" href="https://wa.me/27699739461?text=I'm%20interested%20in%20buying%20the%20iPhone%2014%20Pro" target="_blank">
<iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Buy Now
                        </a>
</div>
</div>
</div>

<div className="glass-panel rounded-[24px] p-2.5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-blue-500/30 group relative flex flex-col" data-animate="">
<div className="aspect-[4/5] bg-zinc-900 rounded-[18px] mb-4 overflow-hidden relative border border-zinc-800/50">
<img alt="iPhone 13" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1632661674596-618d8b64d641?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-tight text-zinc-200 uppercase border border-zinc-700/50">Apple</div>
</div>
<div className="px-2 pb-2 flex-1 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-zinc-100 leading-tight mb-1">iPhone 13</h3>
<p className="text-xs text-zinc-500 mb-5">Super Retina XDR</p>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-sm font-medium text-blue-400 transition-all" href="https://wa.me/27699739461?text=I'm%20interested%20in%20buying%20the%20iPhone%2013" target="_blank">
<iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Buy Now
                        </a>
</div>
</div>
</div>

<div className="glass-panel rounded-[24px] p-2.5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-blue-500/30 group relative flex flex-col" data-animate="">
<div className="aspect-[4/5] bg-zinc-900 rounded-[18px] mb-4 overflow-hidden relative border border-zinc-800/50">
<img alt="iPhone 11" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1574852859542-1b41217a7815?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-tight text-zinc-200 uppercase border border-zinc-700/50">Apple</div>
</div>
<div className="px-2 pb-2 flex-1 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-zinc-100 leading-tight mb-1">iPhone 11</h3>
<p className="text-xs text-zinc-500 mb-5">Classic Design</p>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-sm font-medium text-blue-400 transition-all" href="https://wa.me/27699739461?text=I'm%20interested%20in%20buying%20the%20iPhone%2011" target="_blank">
<iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Buy Now
                        </a>
</div>
</div>
</div>


<div className="glass-panel rounded-[24px] p-2.5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-blue-500/30 group relative flex flex-col" data-animate="">
<div className="aspect-[4/5] bg-zinc-900 rounded-[18px] mb-4 overflow-hidden relative border border-zinc-800/50">
<img alt="Samsung Galaxy S24 Ultra" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-tight text-zinc-200 uppercase border border-zinc-700/50">Samsung</div>
</div>
<div className="px-2 pb-2 flex-1 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-zinc-100 leading-tight mb-1">Galaxy S24 Ultra</h3>
<p className="text-xs text-zinc-500 mb-5">Titanium &amp; AI</p>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-sm font-medium text-blue-400 transition-all" href="https://wa.me/27699739461?text=I'm%20interested%20in%20buying%20the%20Samsung%20Galaxy%20S24%20Ultra" target="_blank">
<iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Buy Now
                        </a>
</div>
</div>
</div>

<div className="glass-panel rounded-[24px] p-2.5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-blue-500/30 group relative flex flex-col" data-animate="">
<div className="aspect-[4/5] bg-zinc-900 rounded-[18px] mb-4 overflow-hidden relative border border-zinc-800/50">
<img alt="Samsung Galaxy S23 FE" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-tight text-zinc-200 uppercase border border-zinc-700/50">Samsung</div>
</div>
<div className="px-2 pb-2 flex-1 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-zinc-100 leading-tight mb-1">Galaxy S23 FE</h3>
<p className="text-xs text-zinc-500 mb-5">Fan Edition Value</p>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-sm font-medium text-blue-400 transition-all" href="https://wa.me/27699739461?text=I'm%20interested%20in%20buying%20the%20Samsung%20Galaxy%20S23%20FE" target="_blank">
<iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Buy Now
                        </a>
</div>
</div>
</div>

<div className="glass-panel rounded-[24px] p-2.5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-blue-500/30 group relative flex flex-col" data-animate="">
<div className="aspect-[4/5] bg-zinc-900 rounded-[18px] mb-4 overflow-hidden relative border border-zinc-800/50">
<img alt="Samsung Galaxy Z Fold 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1662967673551-dfebc62da7ed?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-tight text-zinc-200 uppercase border border-zinc-700/50">Samsung</div>
</div>
<div className="px-2 pb-2 flex-1 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-zinc-100 leading-tight mb-1">Galaxy Z Fold 5</h3>
<p className="text-xs text-zinc-500 mb-5">Productivity Master</p>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-sm font-medium text-blue-400 transition-all" href="https://wa.me/27699739461?text=I'm%20interested%20in%20buying%20the%20Samsung%20Galaxy%20Z%20Fold%205" target="_blank">
<iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Buy Now
                        </a>
</div>
</div>
</div>


<div className="glass-panel rounded-[24px] p-2.5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-blue-500/30 group relative flex flex-col" data-animate="">
<div className="aspect-[4/5] bg-zinc-900 rounded-[18px] mb-4 overflow-hidden relative border border-zinc-800/50">
<img alt="Google Pixel 8 Pro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-tight text-zinc-200 uppercase border border-zinc-700/50">Google</div>
</div>
<div className="px-2 pb-2 flex-1 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-zinc-100 leading-tight mb-1">Pixel 8 Pro</h3>
<p className="text-xs text-zinc-500 mb-5">Pure Android &amp; AI</p>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-sm font-medium text-blue-400 transition-all" href="https://wa.me/27699739461?text=I'm%20interested%20in%20buying%20the%20Google%20Pixel%208%20Pro" target="_blank">
<iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Buy Now
                        </a>
</div>
</div>
</div>

<div className="glass-panel rounded-[24px] p-2.5 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1 hover:border-blue-500/30 group relative flex flex-col" data-animate="">
<div className="aspect-[4/5] bg-zinc-900 rounded-[18px] mb-4 overflow-hidden relative border border-zinc-800/50">
<img alt="OnePlus 12" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-medium tracking-tight text-zinc-200 uppercase border border-zinc-700/50">OnePlus</div>
</div>
<div className="px-2 pb-2 flex-1 flex flex-col">
<h3 className="text-sm font-medium tracking-tight text-zinc-100 leading-tight mb-1">OnePlus 12</h3>
<p className="text-xs text-zinc-500 mb-5">Flagship Killer</p>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 hover:text-white border border-blue-500/20 text-sm font-medium text-blue-400 transition-all" href="https://wa.me/27699739461?text=I'm%20interested%20in%20buying%20the%20OnePlus%2012" target="_blank">
<iconify-icon icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> Buy Now
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10" id="location">
<div className="glass-panel rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden" data-animate="">
<div className="flex flex-col md:flex-row gap-10 items-center">
<div className="w-full md:w-1/3">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-4">Visit Our Store</h2>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        Experience the devices hands-on before you buy. Located centrally in South Africa, our showroom is designed to give you the ultimate premium tech experience.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<span>South Africa</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<div className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-500/20 text-blue-400">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</div>
<span>+27 69 973 9461</span>
</div>
</div>
</div>
<div className="w-full md:w-2/3 h-[300px] md:h-[400px] rounded-[1.5rem] overflow-hidden border border-zinc-800/80 relative bg-zinc-900">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14194098.665322987!2d14.881261314949214!3d-29.04351911422709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0', filter: 'invert(90%) hue-rotate(180deg)'}} width="100%">
</iframe>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10" data-animate="" id="sell">
<div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-900/40 to-zinc-950 border border-blue-500/20 rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4 relative z-10 leading-tight">Ready for an upgrade?</h2>
<p className="text-blue-200/70 text-sm md:text-base mb-10 max-w-lg mx-auto relative z-10 leading-relaxed">
                Sell us your current device for the best market rate in South Africa. Send us a message on WhatsApp with your phone's details for an instant quote.
            </p>
<a className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-zinc-100 text-zinc-950 text-sm font-medium hover:bg-white transition-all hover:scale-105 active:scale-95 relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="https://wa.me/27699739461?text=Hi,%20I%20would%20like%20to%20get%20a%20quote%20for%20my%20current%20phone." target="_blank">
<iconify-icon icon="solar:chat-round-money-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Get an Instant Quote
            </a>
</div>
</section>

<footer className="border-t border-zinc-800/60 glass-panel mt-10 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-10" data-animate="">
<div className="max-w-7xl mx-auto flex flex-col items-center text-center">
<div className="flex items-center gap-1.5 mb-6">
<iconify-icon className="text-zinc-100" icon="ri:apple-fill" width="24"></iconify-icon>
<span className="text-xl font-medium tracking-tighter uppercase text-zinc-100 mt-0.5">ABDULS STORE</span>
</div>
<p className="text-sm text-zinc-400 mb-6 max-w-xs">
                Your trusted destination for premium mobile devices in South Africa.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-300 bg-zinc-900/50 border border-zinc-800 px-6 py-2.5 rounded-xl hover:bg-zinc-800 hover:text-white transition-colors" href="https://wa.me/27699739461" target="_blank">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> 
                    +27 69 973 9461
                </a>
<div className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-300 bg-zinc-900/50 border border-zinc-800 px-6 py-2.5 rounded-xl cursor-default">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon> 
                    South Africa
                </div>
</div>
<div className="w-full pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
<p>© 2024 Abdul's Store. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
