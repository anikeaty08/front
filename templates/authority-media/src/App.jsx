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



        // Toggle Mobile Menu
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            
            if (menu.classList.contains('opacity-0')) {
                // Open
                menu.classList.remove('opacity-0', 'pointer-events-none');
                menu.classList.add('opacity-100', 'pointer-events-auto');
                icon.setAttribute('icon', 'solar:close-circle-linear');
                document.body.style.overflow = 'hidden';
            } else {
                // Close
                menu.classList.remove('opacity-100', 'pointer-events-auto');
                menu.classList.add('opacity-0', 'pointer-events-none');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = 'auto';
            }
        }
        
        document.getElementById('mobile-menu-btn').addEventListener('click', toggleMenu);

        // Intersection Observer for Fade-Up Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const fadeElements = document.querySelectorAll('.fade-up');
            fadeElements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white font-medium tracking-tighter text-xl uppercase group hover:text-orange-500 transition-colors z-50 relative" href="#">
                AMN.
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#about">About</a>
<a className="hover:text-white transition-colors duration-200" href="#blueprint">The Blueprint</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm hover:text-white transition-colors" href="#">Login</a>
<a className="group flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded text-xs font-medium hover:bg-orange-500 transition-all shadow-[0_0_15px_rgba(234,88,12,0.3)] hover:shadow-[0_0_25px_rgba(234,88,12,0.5)]" href="#">
                    Book Strategy Call
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<button className="md:hidden text-white hover:text-orange-500 transition-colors z-50 relative" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-neutral-950 z-40 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<a className="text-2xl font-light text-white hover:text-orange-500" href="#services" onclick="toggleMenu()">Services</a>
<a className="text-2xl font-light text-white hover:text-orange-500" href="#about" onclick="toggleMenu()">About</a>
<a className="text-2xl font-light text-white hover:text-orange-500" href="#blueprint" onclick="toggleMenu()">The Blueprint</a>
<a className="mt-4 px-8 py-4 bg-orange-600 text-white rounded text-lg font-medium" href="#" onclick="toggleMenu()">Book Strategy Call</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-orange-900/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col gap-8 text-center lg:text-left">

<div className="fade-up inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit mx-auto lg:mx-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-white tracking-wide uppercase">Accepting New Clients</span>
</div>
<h1 className="fade-up delay-100 text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight leading-[1.1]">
                        The #1 strategy to grow your business is <span className="text-neutral-500 italic font-serif">authority marketing.</span>
</h1>
<p className="fade-up delay-200 text-lg font-light text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Stop chasing leads. Become the industry leader that everyone wants to work with. We build your entire media ecosystem for you.
                    </p>

<div className="fade-up delay-300 flex flex-col gap-6 items-center lg:items-start">
<button className="bg-orange-600 text-white px-8 py-4 rounded-md text-sm font-medium hover:bg-orange-500 transition-all w-full sm:w-auto flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(234,88,12,0.2)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] group">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:calendar-add-linear" width="18"></iconify-icon>
                            Book a Strategy Call
                        </button>
<div className="flex items-center gap-4 text-xs text-neutral-500 border-t border-white/5 pt-6 w-full justify-center lg:justify-start">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-950 flex items-center justify-center overflow-hidden"><img alt="User" className="opacity-80" src="https://i.pravatar.cc/100?img=11"/></div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-950 flex items-center justify-center overflow-hidden"><img alt="User" className="opacity-80" src="https://i.pravatar.cc/100?img=33"/></div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-950 flex items-center justify-center overflow-hidden"><img alt="User" className="opacity-80" src="https://i.pravatar.cc/100?img=12"/></div>
</div>
<div className="flex flex-col">
<div className="flex text-orange-500 gap-0.5">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<span>Trusted by 500+ CEOs</span>
</div>
</div>
</div>
</div>

<div className="fade-up delay-200 relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-orange-600/20 to-neutral-800 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative aspect-video rounded-lg bg-neutral-900 border border-white/10 overflow-hidden shadow-2xl flex items-center justify-center cursor-pointer">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-neutral-950/40"></div>
<button className="relative z-10 w-20 h-20 bg-orange-600/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(234,88,12,0.4)] transition-all hover:scale-110 hover:bg-orange-500 group-hover:shadow-[0_0_50px_rgba(234,88,12,0.6)]">
<iconify-icon className="ml-1" icon="solar:play-bold" width="32"></iconify-icon>
</button>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end text-xs font-medium text-white/80">
<span className="bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/5">How Authority Works</span>
<span className="bg-black/50 px-2 py-1 rounded backdrop-blur-sm border border-white/5">02:45</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6 mb-10 fade-up">
<h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-center text-neutral-500">
                Growing global brands for 30 years
            </h2>
</div>

<div className="relative w-full overflow-hidden group">

<div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-neutral-950 to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-neutral-950 to-transparent z-10"></div>

<div className="flex w-max animate-scroll">

<div className="flex items-center gap-12 px-6">
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">FORBES</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">TIME</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">WIRED</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">INC.</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">HBR</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">VOGUE</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">FORTUNE</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
</div>

<div className="flex items-center gap-12 px-6">
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">FORBES</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">TIME</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">WIRED</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">INC.</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">HBR</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">VOGUE</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
<div className="w-32 h-40 bg-neutral-900/50 border border-white/5 rounded-sm flex flex-col items-center justify-center p-4 hover:border-orange-500/30 hover:bg-neutral-800 transition-all cursor-default">
<span className="text-2xl font-serif text-white/40">FORTUNE</span>
<div className="w-8 h-[1px] bg-white/10 my-2"></div>
<div className="w-full h-16 bg-neutral-800 rounded-sm opacity-50"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="lg:grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-4 mb-12 lg:mb-0 sticky top-24 fade-up">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-6">
                        What is Authority Marketing?
                    </h2>
<p className="text-neutral-400 font-light leading-relaxed mb-6">
                        It's the shift from chasing clients to attracting them. By positioning your brand as the definitive expert, you create a gravitational pull that makes sales effortless.
                    </p>
<a className="text-orange-500 text-sm border-b border-orange-500/30 pb-0.5 hover:border-orange-500 transition-colors inline-flex items-center gap-1 group" href="#">
                        Learn more about our philosophy
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="lg:col-span-8 grid md:grid-cols-2 gap-6">

<div className="fade-up delay-100 p-6 rounded-lg bg-neutral-900/50 border border-white/5 hover:border-orange-500/20 transition-all duration-300 group hover:bg-neutral-900">
<div className="w-10 h-10 rounded-full bg-orange-600/10 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:microphone-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Strategic Podcasting</h3>
<p className="text-sm text-neutral-400 font-light">
                            Own the conversation in your niche with a done-for-you audio experience that builds intimacy and trust at scale.
                        </p>
</div>

<div className="fade-up delay-200 p-6 rounded-lg bg-neutral-900/50 border border-white/5 hover:border-orange-500/20 transition-all duration-300 group hover:bg-neutral-900">
<div className="w-10 h-10 rounded-full bg-orange-600/10 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:notebook-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Editorial Magazines</h3>
<p className="text-sm text-neutral-400 font-light">
                            Physical and digital publications that showcase your thought leadership and separate you from commodity competitors.
                        </p>
</div>

<div className="fade-up delay-300 p-6 rounded-lg bg-neutral-900/50 border border-white/5 hover:border-orange-500/20 transition-all duration-300 group hover:bg-neutral-900">
<div className="w-10 h-10 rounded-full bg-orange-600/10 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Technology &amp; Distribution</h3>
<p className="text-sm text-neutral-400 font-light">
                            Leverage our proprietary tech stack to distribute your content across hundreds of high-authority channels instantly.
                        </p>
</div>

<div className="fade-up delay-400 p-6 rounded-lg bg-neutral-900/50 border border-white/5 hover:border-orange-500/20 transition-all duration-300 group hover:bg-neutral-900">
<div className="w-10 h-10 rounded-full bg-orange-600/10 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Brand Positioning</h3>
<p className="text-sm text-neutral-400 font-light">
                            Refine your message and visual identity to resonate with high-ticket clients and command premium pricing.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-orange-900/5 blur-3xl rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-16 fade-up">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-6">
                    Who We Empower
                </h2>
<p className="text-lg font-light text-neutral-400 leading-relaxed">
                    We transform the expertise of high-achieving professionals into undeniable media influence.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">

<div className="fade-up delay-100 flex flex-col p-8 rounded-xl bg-neutral-900/20 border border-white/5 hover:border-orange-500/30 transition-all duration-300 group hover:bg-neutral-900/40 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-neutral-400 mb-6 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all">
<iconify-icon icon="solar:user-speak-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Thought Leaders</h3>
<p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-4 opacity-80">Coaches • Authors • Speakers</p>
<p className="text-sm text-neutral-400 font-light leading-relaxed flex-grow">
                        Ready to amplify your message and build a dedicated global following. We turn your voice into a platform that commands attention.
                    </p>
</div>

<div className="fade-up delay-200 flex flex-col p-8 rounded-xl bg-neutral-900/20 border border-white/5 hover:border-orange-500/30 transition-all duration-300 group hover:bg-neutral-900/40 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-neutral-400 mb-6 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all">
<iconify-icon icon="solar:diploma-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Professionals</h3>
<p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-4 opacity-80">Attorneys • Doctors • Planners</p>
<p className="text-sm text-neutral-400 font-light leading-relaxed flex-grow">
                        Looking to build credibility, attract high-value clients, and stand out in a crowded market. Elevate your practice above the competition.
                    </p>
</div>

<div className="fade-up delay-300 flex flex-col p-8 rounded-xl bg-neutral-900/20 border border-white/5 hover:border-orange-500/30 transition-all duration-300 group hover:bg-neutral-900/40 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center text-neutral-400 mb-6 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all">
<iconify-icon icon="solar:buildings-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Business Leaders</h3>
<p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-4 opacity-80">Founders • Owners • Visionaries</p>
<p className="text-sm text-neutral-400 font-light leading-relaxed flex-grow">
                        Who want to scale their impact and dominate their niche through earned media. Turn your personal brand into a business asset.
                    </p>
</div>
</div>

<div className="flex justify-center fade-up delay-400">
<a className="group inline-flex items-center gap-3 bg-white text-neutral-950 px-6 py-3 rounded font-medium text-sm hover:bg-neutral-200 transition-all" href="#">
                    Start Your Authority Journey
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-t border-white/5 relative" id="services">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 fade-up">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-4">
                    Our Media Solutions
                </h2>
<p className="text-lg font-light text-neutral-400 max-w-2xl mx-auto">
                    We have a solution for every stage of your journey. From foundational branding to a full-scale media operation.
                </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="fade-up delay-100 group relative rounded-xl bg-neutral-950 border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg">
<div className="h-32 bg-neutral-900/50 relative overflow-hidden">
<img className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950"></div>
<div className="absolute bottom-4 left-6 w-10 h-10 rounded-lg bg-neutral-800/80 backdrop-blur border border-white/10 flex items-center justify-center text-white group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:megaphone-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-6 pt-2">
<h3 className="text-lg font-medium text-white mb-2">Branding &amp; PR</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                            We handle all production and distribution, putting your voice in front of a new audience.
                        </p>
</div>
</div>

<div className="fade-up delay-200 group relative rounded-xl bg-neutral-950 border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg">
<div className="h-32 bg-neutral-900/50 relative overflow-hidden">
<img className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950"></div>
<div className="absolute bottom-4 left-6 w-10 h-10 rounded-lg bg-neutral-800/80 backdrop-blur border border-white/10 flex items-center justify-center text-white group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-6 pt-2">
<h3 className="text-lg font-medium text-white mb-2">Featured media interviews</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                            Get your own professionally designed digital and print magazine.
                        </p>
</div>
</div>

<div className="fade-up delay-300 group relative rounded-xl bg-neutral-950 border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg">
<div className="h-32 bg-neutral-900/50 relative overflow-hidden">
<img className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950"></div>
<div className="absolute bottom-4 left-6 w-10 h-10 rounded-lg bg-neutral-800/80 backdrop-blur border border-white/10 flex items-center justify-center text-white group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:headphones-round-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-6 pt-2">
<h3 className="text-lg font-medium text-white mb-2">Podcast setup &amp; launch</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                            Your SEO-optimized hub for all your content.
                        </p>
</div>
</div>

<div className="fade-up delay-100 group relative rounded-xl bg-neutral-950 border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg">
<div className="h-32 bg-neutral-900/50 relative overflow-hidden">
<img className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950"></div>
<div className="absolute bottom-4 left-6 w-10 h-10 rounded-lg bg-neutral-800/80 backdrop-blur border border-white/10 flex items-center justify-center text-white group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:book-2-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-6 pt-2">
<h3 className="text-lg font-medium text-white mb-2">Custom built magazines</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                            A direct line to your audience, building trust and engagement.
                        </p>
</div>
</div>

<div className="fade-up delay-200 group relative rounded-xl bg-neutral-950 border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg">
<div className="h-32 bg-neutral-900/50 relative overflow-hidden">
<img className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950"></div>
<div className="absolute bottom-4 left-6 w-10 h-10 rounded-lg bg-neutral-800/80 backdrop-blur border border-white/10 flex items-center justify-center text-white group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-6 pt-2">
<h3 className="text-lg font-medium text-white mb-2">Marketing, SEO &amp; AI tech</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                            We take your content and distribute it across all your social channels automatically.
                        </p>
</div>
</div>

<div className="fade-up delay-300 group relative rounded-xl bg-neutral-950 border border-white/5 overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg">
<div className="h-32 bg-neutral-900/50 relative overflow-hidden">
<img className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-all duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-950"></div>
<div className="absolute bottom-4 left-6 w-10 h-10 rounded-lg bg-neutral-800/80 backdrop-blur border border-white/10 flex items-center justify-center text-white group-hover:text-orange-500 transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
</div>
</div>
<div className="p-6 pt-2">
<h3 className="text-lg font-medium text-white mb-2">Full media company</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                            We turn one interview into over 100 media assets, maximizing your impact from a single hour of your time.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight mb-4">
                    How it Works
                </h2>
<p className="text-neutral-400 font-light max-w-lg mx-auto">
                    A simple, transparent process designed to take you from unknown to industry authority in record time.
                </p>
</div>
<div className="relative grid md:grid-cols-3 gap-8">

<div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-3/4 mx-auto z-0"></div>

<div className="fade-up delay-100 relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center mb-8 shadow-lg group-hover:border-orange-500/30 group-hover:shadow-[0_0_25px_rgba(234,88,12,0.15)] transition-all duration-300">
<div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:magnifer-linear" width="32"></iconify-icon>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-mono text-white group-hover:bg-orange-600 group-hover:border-orange-500 transition-colors">01</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">Discovery &amp; Audit</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">
                        We analyze your current brand footprint, identify gaps, and craft the high-level strategy to position you as the leader.
                    </p>
</div>

<div className="fade-up delay-200 relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center mb-8 shadow-lg group-hover:border-orange-500/30 group-hover:shadow-[0_0_25px_rgba(234,88,12,0.15)] transition-all duration-300">
<div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:hammer-linear" width="32"></iconify-icon>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-mono text-white group-hover:bg-orange-600 group-hover:border-orange-500 transition-colors">02</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">Create &amp; Build</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">
                        Our team produces your magazine, podcasts, and articles while building the digital infrastructure to host them.
                    </p>
</div>

<div className="fade-up delay-300 relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-neutral-900 border border-white/5 flex items-center justify-center mb-8 shadow-lg group-hover:border-orange-500/30 group-hover:shadow-[0_0_25px_rgba(234,88,12,0.15)] transition-all duration-300">
<div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:rocket-linear" width="32"></iconify-icon>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs font-mono text-white group-hover:bg-orange-600 group-hover:border-orange-500 transition-colors">03</div>
</div>
<h3 className="text-xl font-medium text-white mb-3">Launch &amp; Scale</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs">
                        We deploy your content across our network, launch your campaigns, and automate the inbound lead flow.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-t border-white/5" id="blueprint">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight mb-4">
                    Authority Media Provides a Blueprint<br/> to Grow Your Business
                </h2>
<p className="text-neutral-400 font-light max-w-2xl mx-auto">
                    The market has changed. The tactics that worked 5 years ago are now ignored. See the difference between the old way and the Authority Model.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">

<div className="fade-up delay-100 relative p-8 rounded-xl border border-white/5 bg-neutral-950/50 hover:bg-neutral-950 transition-colors">
<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
<h3 className="text-xl font-medium text-neutral-400">The Old Model</h3>
<iconify-icon className="text-neutral-600" icon="solar:close-circle-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 opacity-60">
<iconify-icon className="text-red-900/80 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light">Cold outreach and spammy DMs</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<iconify-icon className="text-red-900/80 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light">Rising ad costs with diminishing returns</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<iconify-icon className="text-red-900/80 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light">Fighting on price against competitors</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<iconify-icon className="text-red-900/80 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light">Low trust, high friction sales process</span>
</li>
<li className="flex items-start gap-3 opacity-60">
<iconify-icon className="text-red-900/80 mt-0.5" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-light">Inconsistent lead flow</span>
</li>
</ul>
</div>

<div className="fade-up delay-200 relative p-8 rounded-xl border border-orange-500/20 bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-2xl overflow-hidden group">

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"></div>
<div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 relative z-10">
<h3 className="text-xl font-medium text-white">The Authority Model</h3>
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<ul className="space-y-5 relative z-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm font-normal text-white">Inbound leads who already know &amp; trust you</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm font-normal text-white">Organic reach through content assets</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm font-normal text-white">Premium pricing power as the Expert</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm font-normal text-white">Shorter sales cycles, higher close rates</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-orange-500 mt-0.5" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm font-normal text-white">Predictable, scalable growth ecosystem</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-white/10 relative z-10">
<button className="w-full py-3 bg-orange-600 text-white rounded font-medium text-sm hover:bg-orange-500 transition-colors flex justify-center items-center gap-2 shadow-[0_0_20px_rgba(234,88,12,0.2)]">
                            Switch to Authority
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-0 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center mb-16 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/5 mb-6">
<span className="text-xs font-medium text-orange-500 tracking-wide">The expertise behind the Authority formula</span>
</div>
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight mb-6 max-w-2xl">
                    Built on 30+ Years of<br/> Global Brand Building
                </h2>
<p className="text-lg font-light text-neutral-400 leading-relaxed max-w-3xl mx-auto">
                    Our founders bring over three decades of experience in international brand building, publishing, and broadcasting. We've earned the trust of CEOs, thought leaders, and global entrepreneurs.
                </p>
</div>

<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10 bg-neutral-900/10 backdrop-blur-sm fade-up delay-200">

<div className="flex flex-col items-center justify-center p-8 group">
<div className="text-4xl lg:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        100K+
                    </div>
<div className="flex items-center gap-2 text-neutral-500">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-widest">Readers</span>
</div>
</div>

<div className="flex flex-col items-center justify-center p-8 group">
<div className="text-4xl lg:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        $1B
                    </div>
<div className="flex items-center gap-2 text-neutral-500">
<iconify-icon icon="solar:wallet-money-linear" width="18"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-widest">Global Client Revenue</span>
</div>
</div>

<div className="flex flex-col items-center justify-center p-8 group">
<div className="text-4xl lg:text-5xl font-semibold text-white tracking-tighter mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        5K+
                    </div>
<div className="flex items-center gap-2 text-neutral-500">
<iconify-icon icon="solar:microphone-3-linear" width="18"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-widest">Featured Interviews</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight mb-4">
                    The Ultimate Authority Formula
                </h2>
<p className="text-neutral-400 font-light max-w-2xl mx-auto text-lg">
                    Our proven four-step formula broken down into actionable deliverables.
                </p>
</div>

<div className="grid lg:grid-cols-2 gap-8">

<div className="fade-up delay-100 group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-orange-500/50 transition-all duration-500"></div>

<div className="relative h-56 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent z-10"></div>
<img alt="Strategy" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950/80 border border-white/10 text-orange-500 text-sm font-mono backdrop-blur-sm shadow-lg">01</span>
</div>
</div>

<div className="p-8 pt-4 flex-1 flex flex-col relative z-20">
<h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                            Strategy &amp; Positioning
                            <iconify-icon className="text-neutral-500 group-hover:text-orange-500 transition-colors" icon="solar:route-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 font-light leading-relaxed mb-6">
                            We map out your unique positioning, define your audience avatar, and craft the high-level narrative that sets you apart.
                        </p>
<div className="border-t border-white/5 my-2"></div>

<ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4 mt-4">
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Authority Brand Audit</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Niche Identification</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Audience Avatar Creation</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>High-Ticket Offer Design</span>
</li>
</ul>
</div>
</div>

<div className="fade-up delay-200 group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-orange-500/50 transition-all duration-500"></div>

<div className="relative h-56 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent z-10"></div>
<img alt="Exposure" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1485579149621-3123dd979885?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950/80 border border-white/10 text-orange-500 text-sm font-mono backdrop-blur-sm shadow-lg">02</span>
</div>
</div>

<div className="p-8 pt-4 flex-1 flex flex-col relative z-20">
<h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                            Content &amp; Exposure
                            <iconify-icon className="text-neutral-500 group-hover:text-orange-500 transition-colors" icon="solar:camera-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 font-light leading-relaxed mb-6">
                            We create high-fidelity content assets—podcasts, articles, and video—that showcase your expertise to the world.
                        </p>
<div className="border-t border-white/5 my-2"></div>

<ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4 mt-4">
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Podcast Production</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Professional Photoshoots</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Article Ghostwriting</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Video Sales Letters (VSL)</span>
</li>
</ul>
</div>
</div>

<div className="fade-up delay-100 group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-orange-500/50 transition-all duration-500"></div>

<div className="relative h-56 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent z-10"></div>
<img alt="AI &amp; Automation" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950/80 border border-white/10 text-orange-500 text-sm font-mono backdrop-blur-sm shadow-lg">03</span>
</div>
</div>

<div className="p-8 pt-4 flex-1 flex flex-col relative z-20">
<h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                            Automation &amp; AI
                            <iconify-icon className="text-neutral-500 group-hover:text-orange-500 transition-colors" icon="solar:cpu-bolt-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 font-light leading-relaxed mb-6">
                            Proprietary systems repurpose your core content into hundreds of micro-assets, maximizing reach with minimal effort.
                        </p>
<div className="border-t border-white/5 my-2"></div>

<ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4 mt-4">
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>AI Content Repurposing</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Short-form Video Clipping</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Automated Scheduling</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Performance Dashboards</span>
</li>
</ul>
</div>
</div>

<div className="fade-up delay-200 group relative bg-neutral-900/40 border border-white/5 rounded-xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-orange-500/50 transition-all duration-500"></div>

<div className="relative h-56 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent z-10"></div>
<img alt="Distribution" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute top-6 left-6 z-20">
<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-neutral-950/80 border border-white/10 text-orange-500 text-sm font-mono backdrop-blur-sm shadow-lg">04</span>
</div>
</div>

<div className="p-8 pt-4 flex-1 flex flex-col relative z-20">
<h3 className="text-xl font-medium text-white mb-3 flex items-center gap-2">
                            Distribution &amp; Media
                            <iconify-icon className="text-neutral-500 group-hover:text-orange-500 transition-colors" icon="solar:globus-linear"></iconify-icon>
</h3>
<p className="text-neutral-400 font-light leading-relaxed mb-6">
                            We broadcast your message across major media networks, news outlets, and social channels to build omnipresence.
                        </p>
<div className="border-t border-white/5 my-2"></div>

<ul className="grid sm:grid-cols-2 gap-y-3 gap-x-4 mt-4">
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Press Release Distribution</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Magazine Features</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>Podcast Guesting</span>
</li>
<li className="flex items-start gap-2.5 text-sm text-neutral-400">
<iconify-icon className="text-orange-500 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear" width="16"></iconify-icon>
<span>SEO Blog Optimization</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-neutral-950 relative">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16 fade-up">
<h3 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-2">Results That Speak Volumes</h3>
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">Real Authority. Real Outcomes.</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-24 opacity-60 fade-up delay-100">

<div className="flex items-center gap-2 text-white/70 hover:text-white hover:opacity-100 transition-all cursor-default group">
<iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:layers-bold" width="24"></iconify-icon>
<span className="font-bold tracking-tight text-lg">Acme Corp</span>
</div>
<div className="flex items-center gap-2 text-white/70 hover:text-white hover:opacity-100 transition-all cursor-default group">
<iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:infinity-bold" width="24"></iconify-icon>
<span className="font-medium tracking-tight text-lg">Nexus</span>
</div>
<div className="flex items-center gap-2 text-white/70 hover:text-white hover:opacity-100 transition-all cursor-default group">
<iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:globus-bold" width="24"></iconify-icon>
<span className="font-serif italic text-lg">Global</span>
</div>
<div className="flex items-center gap-2 text-white/70 hover:text-white hover:opacity-100 transition-all cursor-default group">
<iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:atom-bold" width="24"></iconify-icon>
<span className="font-mono text-sm tracking-wider">QUANTUM</span>
</div>
<div className="flex items-center gap-2 text-white/70 hover:text-white hover:opacity-100 transition-all cursor-default group">
<iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:shield-bold" width="24"></iconify-icon>
<span className="font-bold text-lg">SecureTech</span>
</div>
<div className="flex items-center gap-2 text-white/70 hover:text-white hover:opacity-100 transition-all cursor-default group">
<iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:bolt-bold" width="24"></iconify-icon>
<span className="font-extrabold italic text-lg">VOLT</span>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">

<div className="fade-up delay-100 group relative rounded-2xl bg-neutral-900/40 border border-white/5 p-6 hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="solar:book-2-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full">
<span className="text-xs font-medium text-orange-500 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon> Editorial Placement
                        </span>
<h4 className="text-lg font-medium text-white mb-2">Industry Authority Magazine</h4>
<p className="text-sm text-neutral-400 mb-8">Clients featured on covers of premier industry publications.</p>

<div className="mt-auto flex justify-center">
<div className="relative w-40 aspect-[3/4] bg-neutral-800 rounded-sm shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-500 border-l border-t border-white/10 group-hover:shadow-orange-500/10">

<div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-neutral-950 p-3 flex flex-col items-center">
<div className="w-full text-[10px] font-serif text-center text-white tracking-widest border-b border-white/20 pb-1 mb-2">AUTHORITY</div>
<div className="w-full h-24 bg-neutral-700/50 mb-2 overflow-hidden relative">
<img alt="Cover" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="w-full space-y-1">
<div className="h-1 w-3/4 bg-white/40"></div>
<div className="h-1 w-1/2 bg-white/40"></div>
<div className="h-1 w-full bg-white/20 mt-2"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fade-up delay-200 group relative rounded-2xl bg-neutral-900/40 border border-white/5 p-6 hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="solar:microphone-2-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full">
<span className="text-xs font-medium text-blue-400 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:play-circle-bold" width="12"></iconify-icon> Top 1% Podcast
                        </span>
<h4 className="text-lg font-medium text-white mb-2">The Executive Series</h4>
<p className="text-sm text-neutral-400 mb-8">Deep-dive interviews distributed to Apple, Spotify &amp; Google.</p>

<div className="mt-auto">
<div className="bg-neutral-950 border border-white/10 rounded-lg p-3 flex items-center gap-4 transform group-hover:scale-[1.02] transition-transform shadow-lg">
<div className="w-12 h-12 bg-neutral-800 rounded relative overflow-hidden flex-shrink-0">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex-1 min-w-0">
<div className="h-1.5 w-1/2 bg-white/20 rounded mb-1.5"></div>
<div className="h-1.5 w-3/4 bg-white/10 rounded"></div>
</div>
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-blue-500/20 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:play-bold" width="12"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-between gap-1 mt-4 h-6 px-2 opacity-30">
<div className="w-1 bg-orange-500 h-2 rounded-full"></div>
<div className="w-1 bg-orange-500 h-4 rounded-full animate-pulse"></div>
<div className="w-1 bg-orange-500 h-6 rounded-full"></div>
<div className="w-1 bg-orange-500 h-3 rounded-full"></div>
<div className="w-1 bg-orange-500 h-5 rounded-full animate-pulse"></div>
<div className="w-1 bg-orange-500 h-2 rounded-full"></div>
<div className="w-1 bg-orange-500 h-4 rounded-full"></div>
<div className="w-1 bg-orange-500 h-6 rounded-full animate-pulse"></div>
<div className="w-1 bg-orange-500 h-3 rounded-full"></div>
<div className="w-1 bg-orange-500 h-2 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="fade-up delay-300 group relative rounded-2xl bg-neutral-900/40 border border-white/5 p-6 hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="solar:document-text-linear" width="64"></iconify-icon>
</div>
<div className="relative z-10 flex flex-col h-full">
<span className="text-xs font-medium text-green-400 mb-4 flex items-center gap-1">
<iconify-icon icon="solar:check-read-bold" width="12"></iconify-icon> Tier 1 Press
                        </span>
<h4 className="text-lg font-medium text-white mb-2">Featured Expert Articles</h4>
<p className="text-sm text-neutral-400 mb-8">Opinion pieces and expert commentary in major outlets.</p>

<div className="mt-auto">
<div className="bg-white text-black p-4 rounded shadow-xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500 h-40 overflow-hidden relative">
<div className="flex items-center gap-2 mb-3 border-b border-black/10 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="text-[8px] font-bold uppercase tracking-wider text-neutral-500">Breaking News</div>
</div>
<div className="font-serif text-lg font-bold leading-tight mb-2">
                                    Why Authority Marketing is the New Standard
                                </div>
<div className="space-y-1">
<div className="h-1 w-full bg-neutral-200"></div>
<div className="h-1 w-full bg-neutral-200"></div>
<div className="h-1 w-2/3 bg-neutral-200"></div>
</div>
<div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h3 className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-2">Wall of Love</h3>
<h2 className="text-3xl lg:text-4xl font-medium text-white tracking-tight">What Industry Leaders Are Saying</h2>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="fade-up delay-100 flex flex-col p-8 rounded-xl bg-neutral-900/30 border border-white/5 relative group hover:border-orange-500/20 transition-all">
<div className="absolute top-8 right-8 text-neutral-800 group-hover:text-orange-900/40 transition-colors">
<iconify-icon icon="solar:quote-up-bold" width="48"></iconify-icon>
</div>
<div className="flex gap-1 text-orange-500 mb-6 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-serif text-lg text-neutral-300 italic mb-8 relative z-10 leading-relaxed">
                        "The ROI was immediate. Before working with AMN, I was just another consultant. Now, I'm the authority my prospects reference during our first call."
                    </p>
<div className="mt-auto flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=68"/>
</div>
<div>
<div className="text-sm font-medium text-white">Sarah Jenkins</div>
<div className="text-xs text-neutral-500">Founder, Apex Consulting</div>
</div>
</div>
</div>

<div className="fade-up delay-200 flex flex-col p-8 rounded-xl bg-neutral-900/30 border border-white/5 relative group hover:border-orange-500/20 transition-all">
<div className="absolute top-8 right-8 text-neutral-800 group-hover:text-orange-900/40 transition-colors">
<iconify-icon icon="solar:quote-up-bold" width="48"></iconify-icon>
</div>
<div className="flex gap-1 text-orange-500 mb-6 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-serif text-lg text-neutral-300 italic mb-8 relative z-10 leading-relaxed">
                        "Finally, a strategy that separates us from the noise. The editorial magazine they produced for us has become our most powerful sales asset by far."
                    </p>
<div className="mt-auto flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=15"/>
</div>
<div>
<div className="text-sm font-medium text-white">David Ross</div>
<div className="text-xs text-neutral-500">CEO, Ross Capital</div>
</div>
</div>
</div>

<div className="fade-up delay-300 flex flex-col p-8 rounded-xl bg-neutral-900/30 border border-white/5 relative group hover:border-orange-500/20 transition-all">
<div className="absolute top-8 right-8 text-neutral-800 group-hover:text-orange-900/40 transition-colors">
<iconify-icon icon="solar:quote-up-bold" width="48"></iconify-icon>
</div>
<div className="flex gap-1 text-orange-500 mb-6 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="font-serif text-lg text-neutral-300 italic mb-8 relative z-10 leading-relaxed">
                        "My personal brand is now my business's biggest asset. The podcast series AMN produced opened doors to partnerships I couldn't access before."
                    </p>
<div className="mt-auto flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=44"/>
</div>
<div>
<div className="text-sm font-medium text-white">Elena Rodriguez</div>
<div className="text-xs text-neutral-500">Author &amp; Speaker</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 pt-20 pb-10 border-t border-white/5 font-sans relative">

<div className="absolute top-0 right-0 w-96 h-96 bg-orange-900/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-16 border-b border-white/5">
<div className="max-w-lg">
<h3 className="text-xl font-medium text-white mb-2">Subscribe to our intelligence briefing.</h3>
<p className="text-sm text-neutral-400 font-light">Join 10,000+ leaders receiving weekly insights on authority marketing and media strategy.</p>
</div>
<form className="flex w-full md:w-auto gap-2">
<input className="w-full md:w-64 bg-neutral-900 border border-white/10 rounded-md px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-orange-600 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-orange-500 transition-colors shadow-[0_0_15px_rgba(234,88,12,0.2)]" type="button">
                        Subscribe
                    </button>
</form>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 pt-16 pb-12">

<div className="col-span-2 lg:col-span-4 flex flex-col gap-6 pr-8">
<a className="text-white font-medium tracking-tighter text-2xl uppercase hover:text-orange-500 transition-colors" href="#">
                        AMN.
                    </a>
<p className="text-sm text-neutral-500 font-light leading-relaxed max-w-sm">
                        Authority Media Network transforms experts into industry icons. We build, manage, and scale your personal brand ecosystem through premium media assets.
                    </p>
<div className="flex items-center gap-2 text-xs text-neutral-600 mt-auto">
<div className="flex items-center gap-1">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span>Systems Operational</span>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2">
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="flex flex-col gap-4 text-sm font-light text-neutral-400">
<li><a className="hover:text-orange-500 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#blueprint">The Blueprint</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Success Stories</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="col-span-1 lg:col-span-2">
<h4 className="text-white font-medium mb-6">Solutions</h4>
<ul className="flex flex-col gap-4 text-sm font-light text-neutral-400">
<li><a className="hover:text-orange-500 transition-colors" href="#">Brand Strategy</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Podcasting</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Editorial Magazines</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Public Relations</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Content Distribution</a></li>
</ul>
</div>

<div className="col-span-2 lg:col-span-4 grid grid-cols-2 gap-8">
<div>
<h4 className="text-white font-medium mb-6">Legal</h4>
<ul className="flex flex-col gap-4 text-sm font-light text-neutral-400">
<li><a className="hover:text-orange-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Connect</h4>
<ul className="flex flex-col gap-4 text-sm font-light text-neutral-400">
<li className="flex items-center gap-2 group cursor-pointer">
<iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:letter-linear"></iconify-icon>
<span className="group-hover:text-white transition-colors">hello@amn.media</span>
</li>
<li className="flex items-center gap-2 group cursor-pointer">
<iconify-icon className="group-hover:text-orange-500 transition-colors" icon="solar:map-point-linear"></iconify-icon>
<span className="group-hover:text-white transition-colors">New York, NY</span>
</li>
</ul>

<div className="flex gap-4 mt-8">
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-600 hover:border-orange-500 transition-all duration-300" href="#">
<iconify-icon icon="ri:facebook-line" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-600 hover:border-orange-500 transition-all duration-300" href="#">
<iconify-icon icon="ri:instagram-line" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-600 hover:border-orange-500 transition-all duration-300" href="#">
<iconify-icon icon="ri:linkedin-line" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-orange-600 hover:border-orange-500 transition-all duration-300" href="#">
<iconify-icon icon="ri:youtube-line" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2024 Authority Media Network. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-orange-500 transition-colors" href="#">Sitemap</a>
<a className="hover:text-orange-500 transition-colors" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
