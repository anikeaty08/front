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



        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3 // Trigger when 30% of section is visible
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Remove active class from all links
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            link.classList.add('border-transparent');
                            link.classList.remove('border-orange-500');
                        });
                        
                        // Add active class to corresponding link
                        const id = entry.target.getAttribute('id');
                        const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                        if (activeLink) {
                            activeLink.classList.add('active');
                            activeLink.classList.remove('border-transparent');
                        }
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
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
      

<nav className="lg:hidden fixed bottom-4 left-4 right-4 z-50 glass-card rounded-2xl p-3 shadow-2xl shadow-black">
<div className="flex justify-between items-center px-2">
<a className="p-2 text-neutral-400 hover:text-white transition-colors" href="#home"><span className="iconify" data-icon="lucide:home" data-width="20"></span></a>
<a className="p-2 text-neutral-400 hover:text-white transition-colors" href="#performance"><span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span></a>
<a className="p-2 text-neutral-400 hover:text-white transition-colors" href="#proof"><span className="iconify" data-icon="lucide:layers" data-width="20"></span></a>
<a className="p-2 text-white bg-gradient-to-r from-orange-600 to-red-600 rounded-lg shadow-lg shadow-orange-900/20" href="#contact"><span className="iconify" data-icon="lucide:mail" data-width="20"></span></a>
</div>
</nav>
<div className="lg:grid lg:grid-cols-[280px_1fr] min-h-screen">

<aside className="hidden lg:flex flex-col justify-between sticky top-0 h-screen border-r border-white/5 bg-neutral-950/50 backdrop-blur-xl p-8 z-40">
<div>

<div className="mb-12">
<div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white font-semibold text-xl tracking-tighter shadow-lg shadow-orange-900/20">
                        VE
                    </div>
<p className="mt-4 text-xs font-medium text-neutral-500 uppercase tracking-widest">Video Performance</p>
</div>

<nav className="space-y-1 relative">

<div className="absolute left-0 top-0 bottom-0 w-[1px] bg-neutral-800 ml-[2px]"></div>
<a className="nav-link group flex items-center gap-3 py-2 px-4 text-sm font-medium rounded-r-lg border-l-2 border-transparent hover:text-white hover:bg-white/5 transition-all duration-300" href="#home">
<span className="iconify group-hover:text-orange-400 transition-colors" data-icon="lucide:home" data-width="16"></span>
                        Home
                    </a>
<a className="nav-link group flex items-center gap-3 py-2 px-4 text-sm font-medium rounded-r-lg border-l-2 border-transparent hover:text-white hover:bg-white/5 transition-all duration-300" href="#skills">
<span className="iconify group-hover:text-orange-400 transition-colors" data-icon="lucide:zap" data-width="16"></span>
                        Skills
                    </a>
<a className="nav-link group flex items-center gap-3 py-2 px-4 text-sm font-medium rounded-r-lg border-l-2 border-transparent hover:text-white hover:bg-white/5 transition-all duration-300" href="#performance">
<span className="iconify group-hover:text-orange-400 transition-colors" data-icon="lucide:trending-up" data-width="16"></span>
                        Ads Revenue
                    </a>
<a className="nav-link group flex items-center gap-3 py-2 px-4 text-sm font-medium rounded-r-lg border-l-2 border-transparent hover:text-white hover:bg-white/5 transition-all duration-300" href="#social">
<span className="iconify group-hover:text-orange-400 transition-colors" data-icon="lucide:users" data-width="16"></span>
                        Social Growth
                    </a>
<a className="nav-link group flex items-center gap-3 py-2 px-4 text-sm font-medium rounded-r-lg border-l-2 border-transparent hover:text-white hover:bg-white/5 transition-all duration-300" href="#proof">
<span className="iconify group-hover:text-orange-400 transition-colors" data-icon="lucide:play-circle" data-width="16"></span>
                        Proof
                    </a>
<a className="nav-link group flex items-center gap-3 py-2 px-4 text-sm font-medium rounded-r-lg border-l-2 border-transparent hover:text-white hover:bg-white/5 transition-all duration-300" href="#contact">
<span className="iconify group-hover:text-orange-400 transition-colors" data-icon="lucide:message-square" data-width="16"></span>
                        Contact
                    </a>
</nav>
</div>
<div className="space-y-4">
<div className="p-4 rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-green-400">Available for March</span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">Specializing in high-ticket financial services and insurance lead gen.</p>
</div>
<div className="flex gap-4 px-2">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
</div>
</div>
</aside>

<main className="relative">

<div className="fixed -top-40 -right-40 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed top-40 right-20 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

<section className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-20 relative z-10 border-b border-white/5" id="home">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 w-fit mb-8">
<span className="iconify text-orange-400" data-icon="lucide:sparkles" data-width="14"></span>
<span className="text-xs font-medium text-orange-200">Driving ROI through Visual Storytelling</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    Performance Editing for <br/>
<span className="gradient-text">Insurance &amp; Finance.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl leading-relaxed mb-10">
                    I turn complex financial concepts into high-converting video assets. From UGC ads to long-form educational content, my edits are engineered to lower CPA and increase retention.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition-colors" href="#performance">
                        View Case Studies
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 glass-card text-white rounded-lg font-medium hover:bg-white/5 transition-colors" href="#contact">
                        Book a Discovery
                    </a>
</div>
<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-8">
<div>
<p className="text-3xl font-semibold text-white tracking-tight">$4.2M+</p>
<p className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">Ad Revenue Driven</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">120M+</p>
<p className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">Organic Views</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">35%</p>
<p className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">Avg. CPA Reduction</p>
</div>
<div>
<p className="text-3xl font-semibold text-white tracking-tight">500+</p>
<p className="text-xs text-neutral-500 mt-1 uppercase tracking-wide">Videos Delivered</p>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-20 border-b border-white/5 relative z-10" id="skills">
<div className="mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Core Competencies</h2>
<p className="text-neutral-400 max-w-xl">Technical proficiency combined with psychological marketing triggers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
<span className="iconify" data-icon="lucide:scissors" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Pacing &amp; Retention</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Expert cutting to eliminate dead air. Utilizing J-cuts and pattern interrupts to maintain 60%+ retention past 30 seconds.</p>
</div>

<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Visual Hooks</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Custom motion graphics and kinetic typography designed specifically to stop the scroll in the first 3 seconds.</p>
</div>

<div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 mb-4">
<span className="iconify" data-icon="lucide:line-chart" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Data-Driven Iteration</h3>
<p className="text-sm text-neutral-500 leading-relaxed">I analyze creative reports. If a hook fails, I iterate. If the CTA drops off, I restructure. Editing based on ROAS, not feelings.</p>
</div>

<div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-4">Tech Stack</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">Adobe Premiere Pro</span>
<span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">After Effects</span>
<span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">DaVinci Resolve</span>
<span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">CapCut Desktop</span>
<span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">Frame.io</span>
<span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">ElevenLabs AI</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-20 border-b border-white/5 relative z-10" id="performance">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Performance Ads</h2>
<p className="text-neutral-400 max-w-xl">Direct Response Video Ads for Meta, TikTok &amp; YouTube.</p>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-green-900/20 border border-green-500/20 rounded-lg">
<span className="iconify text-green-500" data-icon="lucide:trending-up" data-width="16"></span>
<span className="text-sm text-green-400 font-medium">Avg ROAS 3.5x</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-card rounded-2xl overflow-hidden group">
<div className="h-48 bg-neutral-900 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-4 left-6 z-20">
<span className="px-2 py-1 rounded bg-orange-500 text-white text-[10px] font-bold tracking-wide uppercase">Life Insurance</span>
</div>
</div>
<div className="p-8">
<h3 className="text-xl font-medium text-white mb-2">Term Life Lead Gen</h3>
<p className="text-sm text-neutral-400 mb-6">Restructured a 2-minute explainer into 3 distinct 45-second hooks focusing on "Family Protection" and "Cost of Waiting".</p>
<div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
<div>
<p className="text-2xl font-medium text-white tracking-tight">$450k</p>
<p className="text-[10px] text-neutral-500 uppercase mt-1">Revenue</p>
</div>
<div>
<p className="text-2xl font-medium text-white tracking-tight">-22%</p>
<p className="text-[10px] text-neutral-500 uppercase mt-1">CPA</p>
</div>
<div>
<p className="text-2xl font-medium text-white tracking-tight">4.2x</p>
<p className="text-[10px] text-neutral-500 uppercase mt-1">ROAS</p>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden group">
<div className="h-48 bg-neutral-900 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10"></div>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-4 left-6 z-20">
<span className="px-2 py-1 rounded bg-blue-600 text-white text-[10px] font-bold tracking-wide uppercase">FinTech App</span>
</div>
</div>
<div className="p-8">
<h3 className="text-xl font-medium text-white mb-2">Investment App UGC</h3>
<p className="text-sm text-neutral-400 mb-6">Edited raw UGC content with dynamic subtitles and rapid pacing to target Gen Z demographics on TikTok Ads.</p>
<div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
<div>
<p className="text-2xl font-medium text-white tracking-tight">1.2M</p>
<p className="text-[10px] text-neutral-500 uppercase mt-1">Impressions</p>
</div>
<div>
<p className="text-2xl font-medium text-white tracking-tight">3.8%</p>
<p className="text-[10px] text-neutral-500 uppercase mt-1">CTR</p>
</div>
<div>
<p className="text-2xl font-medium text-white tracking-tight">15k</p>
<p className="text-[10px] text-neutral-500 uppercase mt-1">Installs</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-20 border-b border-white/5 relative z-10 bg-neutral-950" id="social">
<div className="mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Social Growth</h2>
<p className="text-neutral-400 max-w-xl">Building authority for Financial Advisors &amp; Institutions.</p>
</div>
<div className="glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="md:col-span-1 flex flex-col justify-center">
<h3 className="text-2xl font-medium text-white mb-2">The Viral Formula</h3>
<p className="text-sm text-neutral-400 mb-6">Combining educational value with entertainment. My shorts format increased average account reach by 400% in 90 days.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="p-1 rounded bg-orange-500/10 text-orange-500"><span className="iconify" data-icon="lucide:check" data-width="12"></span></span>
                                    B-Roll Synchronization
                                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="p-1 rounded bg-orange-500/10 text-orange-500"><span className="iconify" data-icon="lucide:check" data-width="12"></span></span>
                                    Dynamic Captions
                                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<span className="p-1 rounded bg-orange-500/10 text-orange-500"><span className="iconify" data-icon="lucide:check" data-width="12"></span></span>
                                    Sound Design &amp; SFX
                                </li>
</ul>
</div>
<div className="md:col-span-2 flex items-end gap-4 h-64 pb-4">

<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="text-center text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">Month 1</div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] group-hover:bg-neutral-700 transition-colors"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="text-center text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">Month 2</div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[45%] group-hover:bg-neutral-700 transition-colors"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="text-center text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">Month 3</div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%] group-hover:bg-neutral-700 transition-colors"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group">
<div className="text-center text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium">+400%</div>
<div className="w-full bg-gradient-to-t from-orange-600 to-red-500 rounded-t-sm h-[90%] shadow-[0_0_20px_rgba(249,115,22,0.3)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-20 border-b border-white/5 relative z-10" id="proof">
<div className="mb-12 flex justify-between items-end">
<h2 className="text-3xl font-medium text-white tracking-tight">Recent Work</h2>
<a className="text-sm text-orange-400 hover:text-orange-300 flex items-center gap-1" href="#">
                        View All <span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">

<div className="aspect-[9/16] bg-neutral-900 rounded-xl relative group overflow-hidden cursor-pointer border border-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-20">
<span className="iconify text-white" data-icon="lucide:play-circle" data-width="48"></span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white text-sm font-medium">Hormozi Style Finance</p>
<p className="text-xs text-neutral-400">Shorts</p>
</div>
<div className="w-full h-full bg-neutral-800 animate-pulse"></div> 
</div>

<div className="aspect-[9/16] bg-neutral-900 rounded-xl relative group overflow-hidden cursor-pointer border border-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-20">
<span className="iconify text-white" data-icon="lucide:play-circle" data-width="48"></span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white text-sm font-medium">Credit Repair Ad</p>
<p className="text-xs text-neutral-400">Meta Ads</p>
</div>
<div className="w-full h-full bg-neutral-800 animate-pulse delay-75"></div>
</div>

<div className="aspect-[9/16] bg-neutral-900 rounded-xl relative group overflow-hidden cursor-pointer border border-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-20">
<span className="iconify text-white" data-icon="lucide:play-circle" data-width="48"></span>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-white text-sm font-medium">Crypto App Launch</p>
<p className="text-xs text-neutral-400">TikTok</p>
</div>
<div className="w-full h-full bg-neutral-800 animate-pulse delay-150"></div>
</div>
</div>
<div className="mt-8 flex justify-center">
<div className="inline-flex items-center gap-3 px-4 py-2 bg-neutral-900 rounded-full border border-white/10 text-xs text-neutral-400">
<span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        All videos optimized for 9:16 and 4:5 ratios
                    </div>
</div>
</section>

<section className="py-24 px-6 lg:px-20 relative z-10 pb-40" id="contact">
<div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500"></div>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to Scale?</h2>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-10">
                        Stop wasting ad spend on creatives that don't convert. Let's build a video strategy that brings measurable ROI to your finance business.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group" href="mailto:hello@videoeditor.com">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
                            Email Me
                        </a>
<a className="w-full sm:w-auto px-8 py-4 bg-neutral-800 text-white rounded-xl font-medium hover:bg-neutral-700 transition-all border border-white/5 flex items-center justify-center gap-2" href="#">
<span className="iconify" data-icon="lucide:calendar" data-width="18"></span>
                            Book Strategy Call
                        </a>
</div>
<div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
<div>
<p className="text-sm font-medium text-white">Turnaround Time</p>
<p className="text-xs text-neutral-500 mt-1">24-48 Hours for Ads</p>
</div>
<div>
<p className="text-sm font-medium text-white">Revisions</p>
<p className="text-xs text-neutral-500 mt-1">Unlimited until satisfaction</p>
</div>
<div>
<p className="text-sm font-medium text-white">Asset Mgmt</p>
<p className="text-xs text-neutral-500 mt-1">Secure Frame.io Portal</p>
</div>
</div>
</div>
<footer className="mt-20 text-center text-xs text-neutral-600">
<p>© 2024 Video Editor Performance. All Rights Reserved.</p>
</footer>
</section>
</main>
</div>



    </>
  );
}
