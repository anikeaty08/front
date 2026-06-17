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



        // Scroll Animation
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, observerOptions);
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Modal Logic
        function openModal(id, title = null) {
            const modal = document.getElementById(id);
            if (title && id === 'auth-modal') {
                document.getElementById('auth-modal-title').innerText = title;
            }
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before adding opacity class for transition
            requestAnimationFrame(() => {
                modal.classList.remove('modal-closed');
                modal.classList.add('modal-open');
            });
            document.body.style.overflow = 'hidden';
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            modal.classList.remove('modal-open');
            modal.classList.add('modal-closed');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300); // Match transition duration
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('[role="dialog"]').forEach(modal => {
                    if (!modal.classList.contains('hidden')) closeModal(modal.id);
                });
            }
        });

        // Pricing Toggle Logic
        const toggle = document.getElementById('price-toggle');
        const pricePro = document.querySelector('.price-pro');
        const priceTeam = document.querySelector('.price-team');
        const pricePeriods = document.querySelectorAll('.price-period');

        toggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                // Yearly Prices (20% off approx)
                animateValue(pricePro, 12, 10, 500);
                animateValue(priceTeam, 24, 19, 500);
                pricePeriods.forEach(p => p.textContent = '/mo billed yearly');
            } else {
                // Monthly Prices
                animateValue(pricePro, 10, 12, 500);
                animateValue(priceTeam, 19, 24, 500);
                pricePeriods.forEach(p => p.textContent = '/mo');
            }
        });

        function animateValue(obj, start, end, duration) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    
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
      

<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-white">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-[80px] animate-float"></div>
<div className="absolute top-[20%] right-[-10%] w-[30rem] h-[30rem] bg-blue-100/40 rounded-full mix-blend-multiply filter blur-[80px] animate-float" style={{animationDelay: '-5s'}}></div>
<div className="absolute bottom-[-10%] left-[20%] w-[25rem] h-[25rem] bg-purple-100/30 rounded-full mix-blend-multiply filter blur-[60px] animate-float" style={{animationDelay: '-10s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
<iconify-icon icon="solar:infinity-bold" width="18"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight text-slate-900">bubbles</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#features">Features</a>
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#integrations">Integrations</a>
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#pricing">Pricing</a>
<a className="text-xs font-medium text-slate-500 hover:text-indigo-600 transition-colors" href="#company">Company</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:block text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors" onclick="openModal('auth-modal', 'Log in')">Log in</button>
<button className="text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-indigo-500/20 hover:scale-105 flex items-center gap-2" onclick="openModal('auth-modal', 'Get Started')">
                    Get Started <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 relative reveal active">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-100 bg-white/50 backdrop-blur-sm mb-8 hover:bg-white transition-all cursor-pointer group shadow-sm hover:shadow-md transform hover:-translate-y-0.5 duration-300">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-indigo-900">v2.0 is live: See what's new</span>
<iconify-icon className="text-indigo-400 group-hover:translate-x-0.5 transition-transform" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.05]">
                Collaboration that <br/>
<span className="text-gradient relative">
                    actually flows.
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Stop drowning in meetings. Bubbles helps your team collaborate in context with <span className="text-indigo-600 font-medium bg-indigo-50 px-1 rounded">async video</span>, screen recording, and threaded discussions.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-500/30 transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-1" onclick="openModal('auth-modal', 'Start for free')">
                    Start for free
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full md:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-sm transform hover:-translate-y-1" onclick="openModal('video-modal')">
<iconify-icon className="text-indigo-500" icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Watch demo
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto relative group reveal delay-200">
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-blue-500/20 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
<div className="relative bg-white/90 backdrop-blur-xl border border-slate-200/60 rounded-3xl shadow-2xl shadow-indigo-500/10 overflow-hidden aspect-[16/10] md:aspect-[2.2/1] flex flex-col transform transition-transform duration-700 hover:scale-[1.01]">

<div className="h-10 border-b border-slate-100 flex items-center px-4 gap-2 bg-slate-50/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
</div>
<div className="ml-4 flex-1 max-w-sm h-6 bg-white rounded border border-slate-200 flex items-center px-2">
<span className="text-[10px] text-slate-400 flex items-center gap-1"><iconify-icon icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon> bubbles.com/design-review</span>
</div>
</div>
<div className="flex-1 relative overflow-hidden bg-slate-50 flex items-center justify-center">

<div className="w-3/4 aspect-video bg-white rounded-lg shadow-lg border border-slate-200 relative group/video cursor-pointer" onclick="openModal('video-modal')">
<div className="absolute inset-0 bg-slate-100/50 flex items-center justify-center">
<div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-indigo-600 scale-90 group-hover/video:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:play-bold" width="32"></iconify-icon>
</div>
</div>

<div className="absolute -right-12 top-10 bg-white p-3 rounded-xl shadow-xl border border-slate-100 w-48 animate-float z-10 pointer-events-none">
<div className="flex items-center gap-2 mb-2">
<img alt="John" className="w-6 h-6 rounded-full object-cover ring-2 ring-white" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="text-[10px] font-semibold text-slate-700">John Doe</div>
</div>
<div className="h-2 w-full bg-slate-100 rounded mb-1"></div>
<div className="h-2 w-2/3 bg-slate-100 rounded"></div>
</div>

<div className="absolute -left-8 bottom-12 bg-white p-3 rounded-xl shadow-xl border border-slate-100 w-48 animate-float delay-100 z-10 pointer-events-none" style={{animationDelay: '-2s'}}>
<div className="flex items-center gap-2 mb-2">
<img alt="Alice" className="w-6 h-6 rounded-full object-cover ring-2 ring-white" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
<div className="text-[10px] font-semibold text-slate-700">Alice Smith</div>
</div>
<div className="h-2 w-full bg-slate-100 rounded mb-1"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-b border-slate-200/60 bg-white relative overflow-hidden reveal">
<div className="absolute left-0 inset-y-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 inset-y-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="flex overflow-hidden">
<div className="flex gap-16 animate-scroll whitespace-nowrap py-2 items-center">

<div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"><iconify-icon className="text-indigo-600" icon="solar:box-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg text-slate-700">AcmeCorp</span></div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"><iconify-icon className="text-indigo-600" icon="solar:planet-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg text-slate-700">Orbit</span></div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"><iconify-icon className="text-indigo-600" icon="solar:asteroid-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg text-slate-700">Stellar</span></div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"><iconify-icon className="text-indigo-600" icon="solar:black-hole-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg text-slate-700">Vortex</span></div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"><iconify-icon className="text-indigo-600" icon="solar:galaxy-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg text-slate-700">Cosmos</span></div>

<div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"><iconify-icon className="text-indigo-600" icon="solar:box-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg text-slate-700">AcmeCorp</span></div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"><iconify-icon className="text-indigo-600" icon="solar:planet-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg text-slate-700">Orbit</span></div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"><iconify-icon className="text-indigo-600" icon="solar:asteroid-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg text-slate-700">Stellar</span></div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"><iconify-icon className="text-indigo-600" icon="solar:black-hole-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg text-slate-700">Vortex</span></div>
<div className="flex items-center gap-2 grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500"><iconify-icon className="text-indigo-600" icon="solar:galaxy-bold-duotone" width="24"></iconify-icon><span className="font-bold text-lg text-slate-700">Cosmos</span></div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="features">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal">
<span className="text-indigo-600 font-semibold tracking-wide uppercase text-xs mb-3 block">Features</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Designed for clarity.</h2>
<p className="text-slate-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">Everything you need to capture, share, and resolve issues without a single meeting.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[800px]">

<div className="bento-card md:col-span-2 md:row-span-2 rounded-[2rem] p-8 flex flex-col justify-between reveal delay-100 group">
<div>
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Async Video</h3>
<p className="text-slate-500">Record your screen, camera, or both. Explain complexity with clarity.</p>
</div>
<div className="mt-8 relative h-48 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-slate-100 to-transparent opacity-50 z-10"></div>
<div className="w-3/4 h-3/4 bg-white rounded-lg shadow-lg border border-slate-200 transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 animate-pulse">
<div className="w-3 h-3 bg-red-500 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="bento-card md:col-span-1 md:row-span-2 rounded-[2rem] p-8 flex flex-col reveal delay-200 group">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-dots-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Contextual</h3>
<p className="text-slate-500 text-sm mb-6">Comments are tied to time and pixels.</p>
<div className="flex-1 bg-slate-50 rounded-xl border border-slate-100 p-4 space-y-3 overflow-hidden">
<div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-xs transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-75 flex items-start gap-2">
<img alt="Sarah" className="w-6 h-6 rounded-full flex-shrink-0" src="https://i.pravatar.cc/150?u=a04258114e29026302a"/>
<div>
<span className="text-indigo-600 font-semibold block mb-0.5">@Sarah</span> Check the contrast here.
                            </div>
</div>
<div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100 text-xs transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-150 flex items-start gap-2">
<img alt="Mike" className="w-6 h-6 rounded-full flex-shrink-0" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div>
<span className="text-emerald-600 font-semibold block mb-0.5">@Mike</span> Fixed in v2.
                            </div>
</div>
</div>
</div>

<div className="bento-card md:col-span-1 md:row-span-1 rounded-[2rem] p-8 reveal delay-300 group">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<span className="text-2xl font-bold text-slate-900">98%</span>
</div>
<h3 className="text-lg font-semibold text-slate-900">Engagement</h3>
<p className="text-slate-500 text-xs mt-1">Track who watched.</p>
</div>

<div className="bento-card md:col-span-1 md:row-span-1 rounded-[2rem] p-8 reveal delay-100 group">
<div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900">Enterprise Ready</h3>
<p className="text-slate-500 text-xs mt-1">SSO &amp; SOC2 Compliant.</p>
</div>

<div className="bento-card md:col-span-2 md:row-span-1 rounded-[2rem] p-8 flex items-center justify-between relative overflow-hidden reveal delay-200 group">
<div className="relative z-10">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Connects with your tools</h3>
<p className="text-slate-500 text-sm">Slack, Linear, Notion, and more.</p>
</div>
<div className="flex -space-x-4 relative z-10">
<div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group-hover:translate-x-1 transition-transform"><iconify-icon className="text-purple-500" icon="solar:rocket-bold"></iconify-icon></div>
<div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group-hover:translate-x-2 transition-transform"><iconify-icon className="text-pink-500" icon="solar:figma-bold"></iconify-icon></div>
<div className="w-10 h-10 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group-hover:translate-x-3 transition-transform"><iconify-icon className="text-emerald-500" icon="solar:slack-bold"></iconify-icon></div>
</div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-indigo-50/50 to-transparent"></div>
</div>

<div className="bento-card md:col-span-2 md:row-span-1 rounded-[2rem] p-8 flex flex-col justify-center reveal delay-300 group">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:history-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900">Version Control</h3>
<p className="text-slate-500 text-sm">Keep history of every feedback loop.</p>
</div>
</div>
<div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-1/3 rounded-full group-hover:w-full transition-all duration-1000"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden reveal" id="integrations">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-indigo-400 font-semibold tracking-wide uppercase text-xs mb-3 block">Integrations</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Works where you work.</h2>
<p className="text-slate-400 text-lg font-light leading-relaxed mb-8">Bubbles embeds seamlessly into your existing workflow. No context switching required.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300 group cursor-pointer hover:text-white transition-colors">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<span>Preview links in <strong className="text-white">Slack</strong></span>
</li>
<li className="flex items-center gap-3 text-slate-300 group cursor-pointer hover:text-white transition-colors">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<span>Create issues in <strong className="text-white">Linear/Jira</strong></span>
</li>
<li className="flex items-center gap-3 text-slate-300 group cursor-pointer hover:text-white transition-colors">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-indigo-500 transition-colors">
<iconify-icon className="text-white" icon="solar:check-read-linear"></iconify-icon>
</div>
<span>Embed bubbles in <strong className="text-white">Notion</strong></span>
</li>
</ul>
</div>

<div className="relative h-[400px] flex items-center justify-center">
<div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] z-10 relative">
<div className="text-slate-900 font-bold text-2xl tracking-tighter">bubbles</div>
</div>
<div className="absolute border border-slate-700/50 rounded-full w-[200px] h-[200px]"></div>
<div className="absolute border border-slate-700/30 rounded-full w-[350px] h-[350px]"></div>
<div className="absolute w-[200px] h-[200px] animate-spin" style={{animationDuration: '15s'}}>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center">
<iconify-icon className="text-emerald-400" icon="solar:slack-bold"></iconify-icon>
</div>
</div>
<div className="absolute w-[350px] h-[350px] animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}>
<div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center">
<iconify-icon className="text-pink-400" icon="solar:figma-bold"></iconify-icon>
</div>
<div className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 bg-slate-800 border border-slate-600 rounded-full flex items-center justify-center">
<iconify-icon className="text-blue-400" icon="solar:trello-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 reveal" id="pricing">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 mb-6">Simple pricing for every stage.</h2>
<div className="flex items-center justify-center gap-3">
<span className="text-sm font-medium text-slate-500">Monthly</span>
<div className="relative inline-block w-12 align-middle select-none">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-transparent appearance-none cursor-pointer transition-all duration-300 top-0 left-0 shadow-sm z-10" id="price-toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="price-toggle"></label>
</div>
<span className="text-sm font-medium text-slate-900">Yearly <span className="text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
<h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
<div className="text-3xl font-bold text-slate-900 mb-6">$0<span className="text-base font-normal text-slate-400">/mo</span></div>
<p className="text-sm text-slate-500 mb-8">Perfect for individuals and freelancers getting started.</p>
<button className="w-full py-3 rounded-xl border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 transition-colors mb-8" onclick="openModal('auth-modal', 'Sign up for Starter')">Get Started</button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-slate-300" icon="solar:check-circle-bold"></iconify-icon> 10 bubbles/mo</li>
<li className="flex gap-2"><iconify-icon className="text-slate-300" icon="solar:check-circle-bold"></iconify-icon> 5 min limit</li>
<li className="flex gap-2"><iconify-icon className="text-slate-300" icon="solar:check-circle-bold"></iconify-icon> 7-day retention</li>
</ul>
</div>

<div className="bg-slate-900 p-8 rounded-[2rem] border border-slate-800 shadow-2xl hover:-translate-y-2 transition-all duration-300 relative z-10 transform scale-105">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg">POPULAR</div>
<h3 className="text-xl font-bold text-white mb-2">Pro</h3>
<div className="text-3xl font-bold text-white mb-6">$<span className="price-pro">12</span><span className="text-base font-normal text-slate-500 price-period">/mo</span></div>
<p className="text-sm text-slate-400 mb-8">For power users who need more control and storage.</p>
<button className="w-full py-3 rounded-xl bg-indigo-600 font-semibold text-white hover:bg-indigo-500 transition-colors mb-8 shadow-lg shadow-indigo-500/20" onclick="openModal('auth-modal', 'Start Pro Trial')">Start Free Trial</button>
<ul className="space-y-3 text-sm text-slate-300">
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Unlimited bubbles</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> No time limits</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Unlimited retention</li>
<li className="flex gap-2"><iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon> Remove branding</li>
</ul>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group">
<h3 className="text-xl font-bold text-slate-900 mb-2">Team</h3>
<div className="text-3xl font-bold text-slate-900 mb-6">$<span className="price-team">24</span><span className="text-base font-normal text-slate-400 price-period">/user</span></div>
<p className="text-sm text-slate-500 mb-8">Collaborative features for growing teams.</p>
<button className="w-full py-3 rounded-xl border border-slate-200 font-semibold text-slate-700 hover:bg-slate-50 transition-colors mb-8" onclick="openModal('auth-modal', 'Contact Team Sales')">Contact Sales</button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><iconify-icon className="text-slate-300" icon="solar:check-circle-bold"></iconify-icon> Everything in Pro</li>
<li className="flex gap-2"><iconify-icon className="text-slate-300" icon="solar:check-circle-bold"></iconify-icon> Shared workspaces</li>
<li className="flex gap-2"><iconify-icon className="text-slate-300" icon="solar:check-circle-bold"></iconify-icon> SSO &amp; SAML</li>
<li className="flex gap-2"><iconify-icon className="text-slate-300" icon="solar:check-circle-bold"></iconify-icon> Admin controls</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 reveal">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold text-center text-slate-900 mb-16">Loved by thousands.</h2>
<div className="columns-1 md:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<img alt="Sarah" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a04258114e29026302a"/>
<div>
<div className="font-semibold text-sm text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-500">@sarahj_design</div>
</div>
<iconify-icon className="ml-auto text-slate-300" icon="solar:brand-twitter-linear"></iconify-icon>
</div>
<p className="text-slate-600 text-sm leading-relaxed">Bubbles has completely changed how we do design reviews. No more "let's hop on a call". It's a game changer.</p>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<img alt="David" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div>
<div className="font-semibold text-sm text-slate-900">David Chen</div>
<div className="text-xs text-slate-500">PM @ TechFlow</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">The ability to comment on specific timeframes in a video is underrated. It clears up so much confusion.</p>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<img alt="Elena" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a04258114e29026708c"/>
<div>
<div className="font-semibold text-sm text-slate-900">Elena R.</div>
<div className="text-xs text-slate-500">Frontend Dev</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">I use this to report bugs. Recording my screen and narrating the issue is 10x faster than typing it out.</p>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<img alt="Marcus" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=a048581f4e29026701d"/>
<div>
<div className="font-semibold text-sm text-slate-900">Marcus T.</div>
<div className="text-xs text-slate-500">CTO @ Scale</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">Simple, fast, effective. The best tools just work, and Bubbles is one of them.</p>
</div>

<div className="break-inside-avoid bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-3 mb-4">
<img alt="Jessica" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=2042581f4e29026704d"/>
<div>
<div className="font-semibold text-sm text-slate-900">Jessica Wu</div>
<div className="text-xs text-slate-500">Marketing Lead</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed">Our remote team feels so much more connected now. It's like having a quick desk chat without the interruption.</p>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 border-t border-slate-200 bg-white relative">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
<div className="col-span-2 md:col-span-2 pr-10">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded-lg bg-slate-900 flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:infinity-bold" width="14"></iconify-icon>
</div>
<span className="text-base font-bold tracking-tight text-slate-900">bubbles</span>
</div>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">Contextual collaboration for teams that value their time. Asynchronous by default. Built for flow.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-5">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#">Integrations</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-5">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-5">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#">Privacy</a></li>
<li><a className="text-sm text-slate-500 hover:text-indigo-600 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100">
<p className="text-xs text-slate-400 font-medium">© 2024 Bubbles Inc. All rights reserved.</p>
<div className="flex gap-5 mt-4 md:mt-0">
<a className="text-slate-400 hover:text-slate-900 hover:scale-110 transition-all" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 hover:scale-110 transition-all" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>


<div aria-modal="true" className="fixed inset-0 z-[100] hidden modal-closed" id="auth-modal" role="dialog">
<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm modal-backdrop" onclick="closeModal('auth-modal')"></div>
<div className="flex min-h-full items-center justify-center p-4">
<div className="modal-content relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 shadow-2xl transition-all border border-slate-100">
<button className="absolute right-4 top-4 text-slate-400 hover:text-slate-600" onclick="closeModal('auth-modal')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="text-center mb-6">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:infinity-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900" id="auth-modal-title">Welcome to Bubbles</h3>
<p className="text-sm text-slate-500 mt-2">Sign in to collaborate seamlessly.</p>
</div>
<div className="space-y-4">
<button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
<iconify-icon icon="devicon:google" width="18"></iconify-icon>
                        Continue with Google
                    </button>
<button className="w-full flex items-center justify-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors">
<iconify-icon icon="devicon:github" width="18"></iconify-icon>
                        Continue with GitHub
                    </button>
<div className="relative flex items-center py-2">
<div className="flex-grow border-t border-slate-200"></div>
<span className="flex-shrink-0 mx-4 text-xs text-slate-400">or</span>
<div className="flex-grow border-t border-slate-200"></div>
</div>
<div>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-sm" placeholder="name@company.com" type="email"/>
</div>
<button className="w-full bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20">
                        Continue with Email
                    </button>
</div>
<p className="text-center text-xs text-slate-400 mt-6">By continuing, you agree to our Terms of Service and Privacy Policy.</p>
</div>
</div>
</div>

<div aria-modal="true" className="fixed inset-0 z-[100] hidden modal-closed" id="video-modal" role="dialog">
<div className="absolute inset-0 bg-black/90 backdrop-blur-sm modal-backdrop" onclick="closeModal('video-modal')"></div>
<div className="flex min-h-full items-center justify-center p-4">
<div className="modal-content relative w-full max-w-5xl aspect-video bg-black rounded-xl shadow-2xl overflow-hidden ring-1 ring-white/10">
<button className="absolute right-4 top-4 text-white/70 hover:text-white z-10 bg-black/50 rounded-full p-1 backdrop-blur-md" onclick="closeModal('video-modal')">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>

<div className="w-full h-full flex items-center justify-center bg-slate-900 relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-purple-900/20"></div>

<div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-110 hover:bg-white/20 transition-all border border-white/20">
<iconify-icon className="ml-1" icon="solar:play-bold" width="40"></iconify-icon>
</div>

<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
<div className="flex items-center gap-4 text-white/90">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
<div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-indigo-500 rounded-full"></div>
</div>
<span className="text-xs font-medium font-mono">01:23 / 03:45</span>
<iconify-icon icon="solar:volume-loud-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:full-screen-bold" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
