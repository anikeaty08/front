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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const navButtons = document.querySelectorAll('[data-nav-target]');
            const views = document.querySelectorAll('.page-view');
            const mainNavLinks = document.querySelectorAll('.nav-btn');
            
            // Mobile Menu Logic
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuIcon = document.getElementById('mobile-menu-icon');

            function toggleMobileMenu() {
                const isHidden = mobileMenu.classList.contains('hidden');
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                    mobileMenu.classList.add('flex');
                    // Slight delay for opacity transition
                    setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
                    mobileMenuIcon.setAttribute('icon', 'solar:close-circle-linear');
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.add('opacity-0');
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.classList.remove('flex');
                    }, 500);
                    mobileMenuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                    document.body.style.overflow = '';
                }
            }

            mobileMenuBtn.addEventListener('click', toggleMobileMenu);

            function switchView(targetId) {
                // Hide all views
                views.forEach(view => {
                    view.classList.add('hidden');
                    view.classList.remove('block', 'flex'); 
                });

                // Show target view
                const targetView = document.getElementById(targetId);
                if (targetView) {
                    targetView.classList.remove('hidden');
                    if(targetId === 'view-home') {
                        targetView.classList.add('flex');
                    } else {
                        targetView.classList.add('block');
                    }
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }

                // Update active state on desktop nav items
                mainNavLinks.forEach(btn => {
                    if(btn.dataset.navTarget === targetId) {
                        btn.classList.add('text-white');
                        btn.classList.remove('text-zinc-400');
                    } else {
                        btn.classList.remove('text-white');
                        btn.classList.add('text-zinc-400');
                    }
                });

                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    toggleMobileMenu();
                }
            }

            // Attach listeners to all buttons with data-nav-target
            navButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    switchView(btn.dataset.navTarget);
                });
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none flex justify-center items-center">
<div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white/[0.02] rounded-full blur-[120px]"></div>
</div>

<nav className="fixed transition-all duration-500 bg-[#050505]/70 w-full z-50 border-white/[0.08] border-b pt-4 pb-4 top-0 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
<div className="md:px-12 flex max-w-[90rem] mr-auto ml-auto pr-6 pl-6 items-center justify-between gap-4">

<button className="group hover:opacity-80 transition-opacity z-50 flex items-center shrink-0" data-nav-target="view-home">
<img alt="OptiSite Logo" className="h-16 md:h-16 lg:h-20 w-auto object-contain mix-blend-screen grayscale contrast-200 brightness-75 drop-shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c70726e4-8b88-4d3b-922f-4fe55c4acbfd_320w.jpg"/>
</button>

<div className="hidden md:flex items-center gap-4 lg:gap-10 text-xs lg:text-sm font-medium text-zinc-400 bg-white/[0.03] px-6 lg:px-8 py-2.5 lg:py-3 rounded-full border border-white/[0.05] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md whitespace-nowrap">
<button className="nav-btn text-white hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-nav-target="view-home">Home</button>
<button className="nav-btn hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-nav-target="view-landowners">For Landowners</button>
<button className="nav-btn hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-nav-target="view-process">Our Process</button>
<button className="hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" data-nav-target="view-contact">Contact</button>
</div>

<button className="hidden md:flex shrink-0 whitespace-nowrap items-center gap-2 text-xs lg:text-sm font-medium text-black bg-white px-5 lg:px-6 py-2.5 lg:py-3 rounded-full hover:bg-zinc-100 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]" data-nav-target="view-contact">
                Free Assessment
            </button>

<button className="md:hidden text-zinc-400 hover:text-white transition-colors z-50 flex items-center justify-center p-2 rounded-full bg-white/[0.05] border border-white/10" id="mobile-menu-btn">
<iconify-icon className="" height="24" icon="solar:hamburger-menu-linear" id="mobile-menu-icon" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#050505]/98 backdrop-blur-3xl z-40 hidden flex-col items-center justify-center gap-10 px-6 transition-all duration-500 opacity-0" id="mobile-menu">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)] pointer-events-none"></div>
<div className="flex flex-col items-center gap-8 text-xl font-medium text-zinc-400 w-full relative z-10">
<button className="mobile-nav-btn hover:text-white transition-all duration-300 hover:scale-105 w-full py-2" data-nav-target="view-home">Home</button>
<button className="mobile-nav-btn hover:text-white transition-all duration-300 hover:scale-105 w-full py-2" data-nav-target="view-landowners">For Landowners</button>
<button className="mobile-nav-btn hover:text-white transition-all duration-300 hover:scale-105 w-full py-2" data-nav-target="view-process">Our Process</button>
<button className="mobile-nav-btn hover:text-white transition-all duration-300 hover:scale-105 w-full py-2" data-nav-target="view-contact">Contact</button>
</div>
<button className="mobile-nav-btn mt-6 w-full max-w-sm flex justify-center items-center gap-2 text-base font-medium text-black bg-white px-8 py-5 rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] relative z-10" data-nav-target="view-contact">
            Free Assessment
        </button>
</div>

<main className="flex-grow pt-24 md:pt-32 relative flex flex-col">

<section className="page-view flex-grow flex-col relative overflow-hidden flex min-h-[calc(100vh-80px)]" id="view-home">

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<video autoplay="" className="w-full h-full object-cover object-center opacity-60 grayscale contrast-125" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
<source src="https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-of-a-building-with-a-glass-facade-41876-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-[#050505]/30"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_100%)] opacity-80"></div>
</div>

<div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none mix-blend-screen">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_50%,transparent_100%)] opacity-40"></div>
<div className="absolute top-0 w-full h-[500px] md:h-[800px] bg-gradient-to-b from-zinc-800/20 via-zinc-900/5 to-transparent blur-[100px] rounded-full translate-y-[-50%]"></div>
</div>

<div className="flex-grow flex flex-col justify-center w-full z-10 relative">
<div className="md:px-12 md:py-16 text-center max-w-6xl mr-auto ml-auto pt-20 pr-6 pb-16 pl-6 relative">

<div className="flex justify-center mb-8 md:mb-10">
<span className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-zinc-300 tracking-wide bg-white/[0.03] border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.03)] hover:bg-white/[0.05] transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</span>
                            Site Optimisation Consultancy
                        </span>
</div>
<h1 className="sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.05] md:mb-10 text-5xl font-medium text-white tracking-tighter mb-8 drop-shadow-2xl">
                        Optimising unused space into <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600 relative">
                            high-value contracts.
                            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent blur-2xl -z-10"></div>
</span>
</h1>
<p className="text-zinc-400 text-lg md:text-xl lg:text-2xl font-normal md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-12 md:mb-16 px-4 md:px-0 drop-shadow-md">
                        We turn idle spaces into valuable assets through strategic partnerships. Generating substantial passive income with zero cost and zero disruption.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4 md:px-0">
<button className="nav-btn group hover:bg-zinc-100 transition-all duration-300 sm:w-auto flex text-sm md:text-base font-medium text-black text-center bg-white w-full rounded-full pt-5 pr-10 pb-5 pl-10 gap-x-2 gap-y-2 items-center justify-center hover:scale-[1.02] shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] whitespace-nowrap shrink-0" data-nav-target="view-contact">
                            Start Assessment 
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="nav-btn group hover:bg-white/[0.08] hover:border-white/20 hover:text-white transition-all duration-300 sm:w-auto text-sm md:text-base font-medium text-zinc-300 text-center bg-white/[0.03] w-full border-white/10 border rounded-full pt-5 pr-10 pb-5 pl-10 backdrop-blur-md whitespace-nowrap shrink-0" data-nav-target="view-landowners">
                            Explore Benefits
                        </button>
</div>
</div>
</div>

<div className="relative w-full text-center z-10 px-6 pt-6 pb-12 md:pb-16 shrink-0 mt-8 md:mt-0">
<p className="text-zinc-500 text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-6 md:mb-8 drop-shadow-md">Facilitating top-tier partnerships</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-80 hover:opacity-100 transition-opacity duration-700 drop-shadow-lg">
<span className="md:text-2xl text-xl font-medium text-zinc-300 tracking-tighter">LEADERS</span>
<span className="md:text-2xl flex items-center gap-2 text-xl font-medium text-zinc-300 tracking-tighter">
<iconify-icon className="text-emerald-500" height="28" icon="solar:leaf-linear" width="28"></iconify-icon> 
                        GREEN
                    </span>
<span className="md:text-2xl text-xl font-medium text-zinc-300 tracking-tighter">EXPERTS</span>
</div>
</div>
</section>

<section className="page-view hidden py-24 md:py-40 px-6 md:px-12 relative" id="view-landowners">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto relative z-10">
<div className="mb-16 md:mb-32 max-w-4xl">
<h2 className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 text-4xl md:text-6xl font-medium tracking-tighter mb-6 md:mb-8 leading-tight">Unlock the hidden value<br/>of your site.</h2>
<p className="md:text-xl leading-relaxed text-lg font-normal text-zinc-400">We act as your expert consultancy, identifying lucrative opportunities to generate revenue from your unused or spare space — with zero changes to your business operations. We introduce you to our network of specialist partners who handle the entire process at no cost to you, so you can simply enjoy the additional revenue.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

<div className="group p-8 md:p-10 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-3xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center mb-6 md:mb-8 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500">
<iconify-icon height="28" icon="solar:wallet-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white text-lg md:text-xl font-medium mb-3 md:mb-4 tracking-tight group-hover:text-white transition-colors">Passive Income</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">Transform dormant areas into reliable, premium long-term revenue streams without operational effort.</p>
</div>
</div>

<div className="group p-8 md:p-10 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-3xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center mb-6 md:mb-8 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500">
<iconify-icon height="28" icon="solar:document-text-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white text-lg md:text-xl font-medium mb-3 md:mb-4 tracking-tight group-hover:text-white transition-colors">Secure Contracts</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">All contracts secured through us are fully guaranteed, providing your business with complete financial stability and protection against cancellations.</p>
</div>
</div>

<div className="group p-8 md:p-10 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-3xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center mb-6 md:mb-8 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500">
<iconify-icon height="28" icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white text-lg md:text-xl font-medium mb-3 md:mb-4 tracking-tight group-hover:text-white transition-colors">Zero Cost</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">No capital expenditure required. Partners fund, install, and manage everything with zero impact.</p>
</div>
</div>

<div className="group p-8 md:p-10 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-3xl hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center mb-6 md:mb-8 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all duration-500">
<iconify-icon height="28" icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
</div>
<h3 className="text-white text-lg md:text-xl font-medium mb-3 md:mb-4 tracking-tight group-hover:text-white transition-colors">Expert Brokerage</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-zinc-300 transition-colors">As a brokerage, our core responsibility is to provide clients with only the very best options that specific market has to offer. Rest assured, we carefully select partners who are globally recognized leaders.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden py-24 md:py-40 px-6 md:px-12 relative" id="view-process">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="mb-16 md:mb-32 text-center">
<h2 className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 text-4xl md:text-6xl font-medium tracking-tighter mb-6 md:mb-8">A seamless journey.</h2>
<p className="text-zinc-400 text-lg md:text-xl font-normal max-w-3xl mx-auto">Designed to require minimal time from you, while maximizing the long-term value extracted from your site.</p>
</div>

<div className="space-y-10 md:space-y-16 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 md:before:-translate-x-px before:h-full before:w-[2px] before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 bg-[#050505] text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] shrink-0 absolute md:relative left-0 top-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/[0.05]">
<span className="text-sm md:text-base font-medium">01</span>
</div>
<div className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(50%-4rem)] p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
<h3 className="text-white text-lg md:text-xl font-medium mb-2 md:mb-3 tracking-tight">Assess Your Site</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed">Rapid review of your land/premises to evaluate its commercial potential.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-[#050505] text-zinc-500 shrink-0 absolute md:relative left-0 top-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/[0.05] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span className="text-sm md:text-base font-medium">02</span>
</div>
<div className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(50%-4rem)] p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
<h3 className="text-white text-lg md:text-xl font-medium mb-2 md:mb-3 tracking-tight">Identify Solutions</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed">Pinpointing lucrative, low-impact infrastructure solutions tailored specifically to your location.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-[#050505] text-zinc-500 shrink-0 absolute md:relative left-0 top-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/[0.05] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span className="text-sm md:text-base font-medium">03</span>
</div>
<div className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(50%-4rem)] p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
<h3 className="text-white text-lg md:text-xl font-medium mb-2 md:mb-3 tracking-tight">Introduce Partners</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed">Connecting you with our specialist network to discuss next steps.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 bg-[#050505] text-zinc-500 shrink-0 absolute md:relative left-0 top-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-110 group-hover:border-white/40 group-hover:bg-white/[0.05] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<span className="text-sm md:text-base font-medium">04</span>
</div>
<div className="w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(50%-4rem)] p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
<h3 className="text-white text-lg md:text-xl font-medium mb-2 md:mb-3 tracking-tight">Secure Contracts</h3>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed">Finalizing high-value, lengthy agreements that deliver ongoing returns with zero outlay.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden py-24 md:py-40 px-6 md:px-12 relative" id="view-contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(255,255,255,0.02)_0%,transparent_60%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20 items-start">

<div className="lg:col-span-2">
<h2 className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500 text-4xl md:text-6xl font-medium tracking-tighter mb-6 md:mb-8 leading-tight">Start your free assessment.</h2>
<p className="text-zinc-400 text-lg md:text-xl mb-12 leading-relaxed">
                            Discover the untapped revenue potential of your property. Confidential and no-obligation.
                        </p>
</div>

<div className="lg:col-span-3 bg-white/[0.02] p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.3)]">
<form className="space-y-6 md:space-y-8" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
<div className="relative group">
<input className="peer w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.05] border-b border-white/10 focus:border-white/40 py-4 px-4 rounded-t-xl text-white focus:outline-none transition-all text-base placeholder-transparent" id="fname" placeholder="First Name" type="text"/>
<label className="absolute left-4 -top-3 text-xs md:text-sm text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-zinc-300 pointer-events-none bg-[#0a0a0a] px-1 rounded" htmlFor="fname">First Name</label>
</div>
<div className="relative group">
<input className="peer w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.05] border-b border-white/10 focus:border-white/40 py-4 px-4 rounded-t-xl text-white focus:outline-none transition-all text-base placeholder-transparent" id="lname" placeholder="Last Name" type="text"/>
<label className="absolute left-4 -top-3 text-xs md:text-sm text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-zinc-300 pointer-events-none bg-[#0a0a0a] px-1 rounded" htmlFor="lname">Last Name</label>
</div>
</div>
<div className="relative group">
<input className="peer w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.05] border-b border-white/10 focus:border-white/40 py-4 px-4 rounded-t-xl text-white focus:outline-none transition-all text-base placeholder-transparent" id="email" placeholder="Email Address" type="email"/>
<label className="absolute left-4 -top-3 text-xs md:text-sm text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-zinc-300 pointer-events-none bg-[#0a0a0a] px-1 rounded" htmlFor="email">Email Address</label>
</div>
<div className="relative group">
<input className="peer w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.05] border-b border-white/10 focus:border-white/40 py-4 px-4 rounded-t-xl text-white focus:outline-none transition-all text-base placeholder-transparent" id="phone" placeholder="Phone Number" type="tel"/>
<label className="absolute left-4 -top-3 text-xs md:text-sm text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-zinc-300 pointer-events-none bg-[#0a0a0a] px-1 rounded" htmlFor="phone">Phone Number</label>
</div>
<div className="relative group">
<input className="peer w-full bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.05] border-b border-white/10 focus:border-white/40 py-4 px-4 rounded-t-xl text-white focus:outline-none transition-all text-base placeholder-transparent" id="postcode" placeholder="Business Type" type="text"/>
<label className="absolute left-4 -top-3 text-xs md:text-sm text-zinc-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-zinc-500 peer-placeholder-shown:top-4 peer-focus:-top-3 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-zinc-300 pointer-events-none bg-[#0a0a0a] px-1 rounded" htmlFor="postcode">Business Type</label>
</div>
<div className="pt-6">
<p className="text-sm text-zinc-400 mb-4 px-1">Premises / Land Size</p>
<div className="flex flex-col sm:flex-row flex-wrap gap-4">
<label className="cursor-pointer flex-1 text-center group">
<input checked="" className="peer sr-only" name="size" type="radio"/>
<div className="md:py-4 text-sm md:text-base peer-checked:bg-white peer-checked:text-black peer-checked:border-white peer-checked:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] text-zinc-400 bg-white/[0.02] w-full border-white/10 border rounded-2xl pt-4 pr-5 pb-4 pl-5">Small</div>
</label>
<label className="cursor-pointer flex-1 text-center group">
<input className="peer sr-only" name="size" type="radio"/>
<div className="md:py-4 text-sm md:text-base peer-checked:bg-white peer-checked:text-black peer-checked:border-white peer-checked:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] text-zinc-400 bg-white/[0.02] w-full border-white/10 border rounded-2xl pt-4 pr-5 pb-4 pl-5">Moderate</div>
</label>
<label className="cursor-pointer flex-1 text-center group">
<input className="peer sr-only" name="size" type="radio"/>
<div className="md:py-4 text-sm md:text-base peer-checked:bg-white peer-checked:text-black peer-checked:border-white peer-checked:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 hover:border-white/30 hover:bg-white/[0.05] text-zinc-400 bg-white/[0.02] w-full border-white/10 border rounded-2xl pt-4 pr-5 pb-4 pl-5">Large</div>
</label>
</div>
</div>
<button className="w-full bg-white text-black py-5 rounded-2xl font-medium text-base hover:bg-zinc-100 hover:scale-[1.02] transition-all duration-300 mt-8 md:mt-10 flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]" type="button">
                                Submit Request
                            </button>
<p className="text-zinc-600 text-xs md:text-sm text-center mt-6 tracking-wide uppercase">Strictly confidential. No obligations.</p>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#050505] py-10 border-t border-white/10 mt-auto relative z-10">
<div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm font-medium text-zinc-600 tracking-wide">© 2026 OptiSite Ltd.</div>
<div className="flex gap-8 text-sm text-zinc-500 font-medium">
<button className="hover:text-zinc-300 transition-colors">Privacy</button>
<button className="hover:text-zinc-300 transition-colors">Terms</button>
</div>
</div>
</footer>



    </>
  );
}
