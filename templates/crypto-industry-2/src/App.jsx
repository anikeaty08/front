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

        // Case Study Slideshow Logic
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.case-study-slide');
            const navContainer = document.getElementById('slider-nav');
            let currentIndex = 0;
            const intervalTime = 5000; // 5 seconds

            // Create indicators
            slides.forEach((_, index) => {
                const btn = document.createElement('div');
                // Structure: bg track with inner filling bar
                btn.className = 'relative h-1 w-12 bg-slate-800 rounded-full overflow-hidden cursor-pointer';
                const fill = document.createElement('div');
                fill.className = 'progress-bar h-full bg-emerald-500 w-0'; // Start empty
                fill.id = `nav-fill-${index}`;
                
                btn.appendChild(fill);
                navContainer.appendChild(btn);

                btn.onclick = () => {
                    currentIndex = index;
                    updateSlides();
                    resetInterval();
                };
            });

            function updateSlides() {
                // Remove active class
                slides.forEach(slide => slide.classList.remove('active'));
                // Reset all progress bars
                document.querySelectorAll('.progress-bar').forEach(bar => {
                    bar.style.width = '0%';
                    bar.style.transition = 'width 0.1s linear';
                });

                // Add active to current
                slides[currentIndex].classList.add('active');

                // Animate current progress bar
                const activeFill = document.getElementById(`nav-fill-${currentIndex}`);
                // Small delay to ensure CSS transition sees the change from 0
                setTimeout(() => {
                    activeFill.style.transition = `width ${intervalTime}ms linear`;
                    activeFill.style.width = '100%';
                }, 50);
            }

            let slideInterval = setInterval(nextSlide, intervalTime);

            function nextSlide() {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlides();
            }

            function resetInterval() {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime);
            }

            // Initialize
            updateSlides();
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1.5 select-none group" href="#">
<div className="flex items-center transition-opacity group-hover:opacity-80">
<span className="text-2xl font-semibold text-white tracking-tighter">KYX</span>
<svg className="w-4 h-4 text-cyan-400 fill-current ml-1" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3L19 12L5 21V3Z" strokeLinejoin="round"></path>
</svg>
<span className="text-2xl font-normal text-white tracking-tighter ml-0.5">START</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-200" href="#">Solutions</a>
<a className="hover:text-white transition-colors duration-200" href="#">Industries</a>
<a className="hover:text-white transition-colors duration-200" href="#">Use Cases</a>
<a className="hover:text-white transition-colors duration-200" href="#">Resources</a>
<a className="hover:text-white transition-colors duration-200" href="#">Company</a>
</div>

<div className="flex items-center gap-5">
<a className="hidden md:block text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-slate-950 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#">
                    Book a Demo
                </a>
</div>
</div>
</nav>

<main className="relative pt-20 pb-20 lg:pb-32 overflow-hidden border-b border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50rem] bg-slate-900/50 -z-10 blur-3xl rounded-full opacity-50 pointer-events-none"></div>
<div className="absolute top-20 right-0 w-[40rem] h-[40rem] bg-emerald-500/10 -z-10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="max-w-2xl relative z-10 pt-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 mb-8 hover:border-slate-700 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-slate-300 tracking-wide uppercase">New API v2.0 Live</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1] mb-8">
                    Trust Layer for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400">Identity</span> and <br/>
                    Payments Verification
                </h1>
<p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
                    Blend cutting-edge KYC, KYB, KYP and AML capabilities to meet even the most complex regulatory requirements while reinforcing customer trust and safety.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="group bg-white text-slate-950 h-12 px-8 rounded-full font-medium text-base hover:bg-slate-100 transition-all flex items-center gap-2">
                        Get Started
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="h-12 px-8 rounded-full font-medium text-base text-slate-300 border border-slate-800 hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle" strokeWidth="1.5"></i>
                        View Demo
                    </button>
</div>
<div className="mt-12 flex items-center gap-6 text-slate-500">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm">SOC2 Type II</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm">GDPR Compliant</span>
</div>
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-500" data-lucide="check-circle-2" strokeWidth="1.5"></i>
<span className="text-sm">ISO 27001</span>
</div>
</div>
</div>

<div className="relative w-full h-[600px] flex items-center justify-center lg:justify-end">

<div className="relative w-full max-w-md h-[500px] bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-4 shadow-2xl overflow-hidden animate-float">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl z-10 group">
<img alt="Identity Verification" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute inset-x-0 h-1 bg-emerald-400/80 shadow-[0_0_20px_rgba(52,211,153,0.6)] z-20 animate-scan"></div>
<div className="absolute inset-0 bg-emerald-500/10 z-10 animate-pulse"></div>

<div className="absolute inset-4 border border-white/30 rounded-lg opacity-50 flex flex-col justify-between">
<div className="flex justify-between">
<div className="w-4 h-4 border-l-2 border-t-2 border-white"></div>
<div className="w-4 h-4 border-r-2 border-t-2 border-white"></div>
</div>
<div className="flex justify-between">
<div className="w-4 h-4 border-l-2 border-b-2 border-white"></div>
<div className="w-4 h-4 border-r-2 border-b-2 border-white"></div>
</div>
</div>
</div>

<div className="absolute top-12 -right-8 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-float-delayed z-20 w-64 backdrop-blur-md">
<div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center animate-pulse-ring">
<i className="text-emerald-400 w-5 h-5" data-lucide="scan-face" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium text-white">Identity Verified</div>
<div className="text-xs text-slate-400">Match confidence 99.8%</div>
</div>
<div className="ml-auto">
<i className="text-emerald-500 w-5 h-5 fill-emerald-500/20" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
</div>

<div className="absolute bottom-12 -left-8 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-float z-30 w-72 backdrop-blur-md">
<div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
<i className="text-blue-400 w-5 h-5" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Payment Authorized</div>
<div className="text-xs text-slate-400 flex items-center gap-2 mt-1">
<span className="block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                AML Check Passed
                            </div>
</div>
</div>

<div className="absolute bottom-32 -right-4 bg-slate-950/90 backdrop-blur border border-slate-800 px-4 py-3 rounded-lg shadow-lg z-10">
<div className="flex flex-col gap-1.5 font-mono text-xs">
<div className="flex items-center gap-2 text-slate-500">
<span className="text-emerald-500">GET</span> /api/v2/verify
                             </div>
<div className="flex items-center gap-2 text-slate-300">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span> 200 OK
                             </div>
<div className="h-1 w-24 bg-slate-800 rounded-full mt-1 overflow-hidden">
<div className="h-full bg-emerald-500 w-full animate-[loading_1s_ease-in-out_infinite]"></div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-800/50 rounded-full -z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-slate-800/50 rounded-full -z-10"></div>
</div>
</div>
</main>

<section className="border-b border-white/5 bg-slate-900/30 py-10 relative overflow-hidden hover-pause">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

<div className="flex w-max animate-scroll">

<div className="flex items-center gap-20 px-10 text-slate-500 select-none">
<span className="text-2xl font-bold tracking-tighter hover:text-white transition-colors cursor-default">stripe</span>
<span className="text-lg font-medium tracking-tight uppercase hover:text-white transition-colors cursor-default">Bank of America</span>
<span className="text-2xl font-bold italic tracking-tight hover:text-white transition-colors cursor-default">PayPal</span>
<span className="text-lg font-normal tracking-wide uppercase hover:text-white transition-colors cursor-default">J.P. Morgan</span>
<span className="text-xl font-normal tracking-tight font-[JetBrains_Mono] hover:text-white transition-colors cursor-default">cybrid.xyz</span>
<span className="text-xl font-bold tracking-tighter hover:text-white transition-colors cursor-default">coinbase</span>
<span className="text-lg font-bold tracking-[0.2em] uppercase hover:text-white transition-colors cursor-default">BINANCE</span>
</div>

<div className="flex items-center gap-20 px-10 text-slate-500 select-none">
<span className="text-2xl font-bold tracking-tighter hover:text-white transition-colors cursor-default">stripe</span>
<span className="text-lg font-medium tracking-tight uppercase hover:text-white transition-colors cursor-default">Bank of America</span>
<span className="text-2xl font-bold italic tracking-tight hover:text-white transition-colors cursor-default">PayPal</span>
<span className="text-lg font-normal tracking-wide uppercase hover:text-white transition-colors cursor-default">J.P. Morgan</span>
<span className="text-xl font-normal tracking-tight font-[JetBrains_Mono] hover:text-white transition-colors cursor-default">cybrid.xyz</span>
<span className="text-xl font-bold tracking-tighter hover:text-white transition-colors cursor-default">coinbase</span>
<span className="text-lg font-bold tracking-[0.2em] uppercase hover:text-white transition-colors cursor-default">BINANCE</span>
</div>

<div className="flex items-center gap-20 px-10 text-slate-500 select-none">
<span className="text-2xl font-bold tracking-tighter hover:text-white transition-colors cursor-default">stripe</span>
<span className="text-lg font-medium tracking-tight uppercase hover:text-white transition-colors cursor-default">Bank of America</span>
<span className="text-2xl font-bold italic tracking-tight hover:text-white transition-colors cursor-default">PayPal</span>
<span className="text-lg font-normal tracking-wide uppercase hover:text-white transition-colors cursor-default">J.P. Morgan</span>
<span className="text-xl font-normal tracking-tight font-[JetBrains_Mono] hover:text-white transition-colors cursor-default">cybrid.xyz</span>
<span className="text-xl font-bold tracking-tighter hover:text-white transition-colors cursor-default">coinbase</span>
<span className="text-lg font-bold tracking-[0.2em] uppercase hover:text-white transition-colors cursor-default">BINANCE</span>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 relative bg-slate-950 overflow-hidden hover-pause">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Trusted by engineering teams</h2>
<p className="text-slate-400 max-w-2xl mx-auto">See how fast-moving companies are automating compliance.</p>
</div>

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

<div className="flex w-max animate-scroll gap-6 pb-4">

<div className="flex gap-6">

<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"KYXstart allowed us to launch in 4 new markets in just 3 weeks. The API documentation is genuinely world-class."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">ES</div>
<div>
<div className="text-sm font-medium text-white">Elena S.</div>
<div className="text-xs text-slate-500">CTO, FinFlow</div>
</div>
</div>
</div>

<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"We replaced three different vendors with just one integration. The reduction in false positives has been incredible."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">MJ</div>
<div>
<div className="text-sm font-medium text-white">Marcus J.</div>
<div className="text-xs text-slate-500">VP Eng, PayStack</div>
</div>
</div>
</div>

<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"Compliance used to be our bottleneck. Now it's a competitive advantage. The realtime webhooks are lifesavers."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">AL</div>
<div>
<div className="text-sm font-medium text-white">Anna L.</div>
<div className="text-xs text-slate-500">Lead Dev, CryptoSafe</div>
</div>
</div>
</div>

<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"The sandbox environment is actually identical to production. It made our integration testing absolutely seamless."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">DK</div>
<div>
<div className="text-sm font-medium text-white">David K.</div>
<div className="text-xs text-slate-500">Architect, NeoBank</div>
</div>
</div>
</div>
</div>

<div className="flex gap-6">
<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"KYXstart allowed us to launch in 4 new markets in just 3 weeks. The API documentation is genuinely world-class."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">ES</div>
<div>
<div className="text-sm font-medium text-white">Elena S.</div>
<div className="text-xs text-slate-500">CTO, FinFlow</div>
</div>
</div>
</div>
<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"We replaced three different vendors with just one integration. The reduction in false positives has been incredible."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">MJ</div>
<div>
<div className="text-sm font-medium text-white">Marcus J.</div>
<div className="text-xs text-slate-500">VP Eng, PayStack</div>
</div>
</div>
</div>
<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"Compliance used to be our bottleneck. Now it's a competitive advantage. The realtime webhooks are lifesavers."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">AL</div>
<div>
<div className="text-sm font-medium text-white">Anna L.</div>
<div className="text-xs text-slate-500">Lead Dev, CryptoSafe</div>
</div>
</div>
</div>
<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"The sandbox environment is actually identical to production. It made our integration testing absolutely seamless."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">DK</div>
<div>
<div className="text-sm font-medium text-white">David K.</div>
<div className="text-xs text-slate-500">Architect, NeoBank</div>
</div>
</div>
</div>
</div>

<div className="flex gap-6">
<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"KYXstart allowed us to launch in 4 new markets in just 3 weeks. The API documentation is genuinely world-class."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold text-sm">ES</div>
<div>
<div className="text-sm font-medium text-white">Elena S.</div>
<div className="text-xs text-slate-500">CTO, FinFlow</div>
</div>
</div>
</div>
<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"We replaced three different vendors with just one integration. The reduction in false positives has been incredible."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">MJ</div>
<div>
<div className="text-sm font-medium text-white">Marcus J.</div>
<div className="text-xs text-slate-500">VP Eng, PayStack</div>
</div>
</div>
</div>
<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"Compliance used to be our bottleneck. Now it's a competitive advantage. The realtime webhooks are lifesavers."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-sm">AL</div>
<div>
<div className="text-sm font-medium text-white">Anna L.</div>
<div className="text-xs text-slate-500">Lead Dev, CryptoSafe</div>
</div>
</div>
</div>
<div className="w-[350px] bg-slate-900/40 backdrop-blur border border-white/10 p-6 rounded-2xl hover:border-emerald-500/30 transition-colors group">
<p className="text-slate-300 text-sm leading-relaxed mb-6 group-hover:text-white transition-colors">"The sandbox environment is actually identical to production. It made our integration testing absolutely seamless."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-sm">DK</div>
<div>
<div className="text-sm font-medium text-white">David K.</div>
<div className="text-xs text-slate-500">Architect, NeoBank</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-white mb-6">Proven at scale</h2>
<p className="text-lg text-slate-400 max-w-xl">
                        Our platform processes over 10M+ verifications daily for the world's most demanding financial institutions.
                    </p>
</div>

<div className="flex gap-3 mb-2" id="slider-nav">

</div>
</div>

<div className="relative w-full h-[500px] md:h-[400px] bg-slate-900 rounded-3xl border border-white/5 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-950 to-slate-950"></div>

<div className="relative w-full h-full p-8 md:p-12" id="slides-container">

<div className="case-study-slide active flex flex-col md:flex-row gap-10 items-center justify-between h-full">
<div className="flex-1 space-y-8 z-10">
<div className="flex items-center gap-3 text-emerald-400 font-mono text-sm">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span>CASE STUDY 01</span>
</div>
<h3 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">
                                How <span className="text-white border-b border-emerald-500/50">NovaBank</span> reduced onboarding fraud by 99.4% in just two months.
                            </h3>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">
                                Read full story <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="w-full md:w-1/3 bg-slate-800/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm z-10">
<div className="space-y-6">
<div>
<div className="text-sm text-slate-400 mb-1">Verifications/Day</div>
<div className="text-3xl font-semibold text-white tracking-tight">2.4M+</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div>
<div className="text-sm text-slate-400 mb-1">Time to Approve</div>
<div className="text-3xl font-semibold text-white tracking-tight">&lt; 1.2s</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div>
<div className="text-sm text-slate-400 mb-1">Cost Savings</div>
<div className="text-3xl font-semibold text-emerald-400 tracking-tight">45%</div>
</div>
</div>
</div>
</div>

<div className="case-study-slide flex flex-col md:flex-row gap-10 items-center justify-between h-full">
<div className="flex-1 space-y-8 z-10">
<div className="flex items-center gap-3 text-cyan-400 font-mono text-sm">
<i className="w-4 h-4" data-lucide="globe"></i>
<span>CASE STUDY 02</span>
</div>
<h3 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">
<span className="text-white border-b border-cyan-500/50">GlobalPay</span> simplified cross-border AML compliance across 140+ countries.
                            </h3>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">
                                Read full story <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="w-full md:w-1/3 bg-slate-800/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm z-10">
<div className="space-y-6">
<div>
<div className="text-sm text-slate-400 mb-1">Countries Scaled</div>
<div className="text-3xl font-semibold text-white tracking-tight">142</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div>
<div className="text-sm text-slate-400 mb-1">Manual Review Rate</div>
<div className="text-3xl font-semibold text-white tracking-tight">0.02%</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div>
<div className="text-sm text-slate-400 mb-1">Uptime</div>
<div className="text-3xl font-semibold text-cyan-400 tracking-tight">99.999%</div>
</div>
</div>
</div>
</div>

<div className="case-study-slide flex flex-col md:flex-row gap-10 items-center justify-between h-full">
<div className="flex-1 space-y-8 z-10">
<div className="flex items-center gap-3 text-purple-400 font-mono text-sm">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span>CASE STUDY 03</span>
</div>
<h3 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">
                                Securing the gig economy: How <span className="text-white border-b border-purple-500/50">TaskFlex</span> verifies 50k workers daily.
                            </h3>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#">
                                Read full story <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="w-full md:w-1/3 bg-slate-800/50 rounded-2xl p-8 border border-white/5 backdrop-blur-sm z-10">
<div className="space-y-6">
<div>
<div className="text-sm text-slate-400 mb-1">Worker Verified</div>
<div className="text-3xl font-semibold text-white tracking-tight">1.2M</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div>
<div className="text-sm text-slate-400 mb-1">Integration Time</div>
<div className="text-3xl font-semibold text-white tracking-tight">4 Days</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div>
<div className="text-sm text-slate-400 mb-1">Trust Score</div>
<div className="text-3xl font-semibold text-purple-400 tracking-tight">98/100</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-950 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-1.5 mb-6">
<span className="text-xl font-semibold text-white tracking-tighter">KYX</span>
<svg className="w-3 h-3 text-cyan-400 fill-current" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3L19 12L5 21V3Z" strokeLinejoin="round"></path>
</svg>
<span className="text-xl font-normal text-white tracking-tighter">START</span>
</div>
<p className="text-slate-400 text-sm mb-6 max-w-xs">
                        The modern standard for digital identity and compliance infrastructure.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="github"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Identity</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Payments</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Compliance</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">API Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-500 text-sm">© 2024 KYXstart Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-slate-400 text-sm">All systems operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
