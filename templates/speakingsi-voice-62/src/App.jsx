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



        // Hero Image/Avatar Switcher Logic
        function changeHeroImage(imageUrl, buttonElement) {
            // 1. Update Active State on Buttons
            const buttons = document.querySelectorAll('.avatar-btn');
            buttons.forEach(btn => btn.classList.remove('avatar-active'));
            buttonElement.classList.add('avatar-active');

            // 2. Handle Image Switching
            const heroImages = document.querySelectorAll('.js-hero-image');
            const statusText = document.querySelectorAll('.js-status-text');
            const industry = buttonElement.getAttribute('data-industry');

            heroImages.forEach(img => {
                if (imageUrl) {
                    // Changing to a static industry image
                    img.src = imageUrl;
                    img.classList.remove('opacity-0');
                    img.classList.add('opacity-100');
                } else {
                    // Reverting to the default video/iframe (Plumber)
                    img.classList.remove('opacity-100');
                    img.classList.add('opacity-0');
                }
            });

            // 3. Update Status Text based on industry
            const responses = {
                'plumber': "Listening...",
                'lawyer': "Legal Assistant Active",
                'medical': "Triage Nurse Ready",
                'builder': "Quote Assistant Ready",
                'salon': "Booking Agent Active"
            };
            
            statusText.forEach(el => {
                el.textContent = responses[industry] || "Listening...";
            });
        }

        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.3
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Animate Revenue Chart
                        if (entry.target.id === 'revenue-chart') {
                            entry.target.classList.add('animate-graph');
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe the chart
            const chartElement = document.getElementById('revenue-chart');
            if (chartElement) observer.observe(chartElement);
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
      

<div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
<div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] pointer-events-none z-0"></div>

<nav className="relative z-50 w-full border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 bg-white/5 group-hover:border-[#ccff00]/50 transition-colors">
<svg className="lucide lucide-mic w-5 h-5 text-neon" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
<div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-neon rounded-full animate-pulse"></div>
</div>
<span className="text-xl font-medium tracking-tight text-white">Speaking<span className="text-gray-400">Sites</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-black bg-neon rounded-full hover:bg-white transition-colors" href="#try-demo">
                Try The Demo
            </a>
<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative z-10 pt-6 lg:pt-16 pb-8 lg:pb-32 overflow-hidden" id="try-demo">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
<div className="space-y-8 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neon">
<span className="w-1.5 h-1.5 rounded-full bg-neon"></span>
                    Now available for all industries
                </div>
<h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
<span className="text-neon">Voice-Powered</span> <br/> Websites!
                </h1>

<div className="lg:hidden block w-full max-w-sm mx-auto mt-10 mb-8 relative">

<div className="absolute w-[300px] h-[300px] bg-neon/10 rounded-full blur-[80px] -z-10 animate-pulse left-1/2 -translate-x-1/2 top-10"></div>

<div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] h-[480px] group ring-1 ring-white/5">
<div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 to-transparent z-50 flex items-center justify-between px-5 pt-2 pointer-events-none">
<div className="flex items-center gap-2">
<div className="relative w-2 h-2">
<div className="absolute w-2 h-2 rounded-full bg-red-500 pulse-ring"></div>
<div className="w-2 h-2 rounded-full bg-red-500 relative z-10"></div>
</div>
<span className="text-xs font-bold text-white tracking-wide drop-shadow-md">LIVE</span>
</div>
<div className="flex gap-1">
<div className="w-1 h-1 rounded-full bg-white/60"></div>
<div className="w-1 h-1 rounded-full bg-white/60"></div>
</div>
</div>
<div className="absolute inset-0 z-10 bg-gray-900 overflow-hidden">
<div className="avatar-zoom-container relative">

<img alt="Fallback" className="js-fallback-image w-full h-full object-cover object-top absolute inset-0 z-10 opacity-60" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<iframe allow="microphone; camera; autoplay; clipboard-write; encrypted-media" allowtransparency="true" className="js-hero-iframe w-full h-full border-none absolute inset-0 z-20" id="heygen-iframe-mobile" src="https://embed.liveavatar.com/v1/40511b08-242a-44cd-9243-a8cd4dc030b4?start=true&amp;autoplay=true&amp;listen=true&amp;background=transparent&amp;volume=1.0" style={{aspectRatio: '16/9', display: 'block', background: 'transparent'}} title="LiveAvatar Embed"></iframe>

<img alt="AI Assistant" className="js-hero-image w-full h-full object-cover object-top transition-all duration-700 ease-out opacity-0 absolute inset-0 z-30 pointer-events-none" src=""/>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent z-30 pointer-events-none"></div>
</div>
<div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none mt-20">
<div className="flex gap-1.5 h-12 items-center opacity-80">
<div className="w-1 bg-neon/80 rounded-full bar"></div>
<div className="w-1 bg-neon/80 rounded-full bar"></div>
<div className="w-1 bg-neon/80 rounded-full bar"></div>
<div className="w-1 bg-neon/80 rounded-full bar"></div>
<div className="w-1 bg-neon/80 rounded-full bar"></div>
</div>
</div>
<div className="absolute bottom-5 left-4 right-4 z-40 pointer-events-none">
<div className="mb-3 flex flex-col gap-2">
<div className="self-start bg-white/10 backdrop-blur-md text-white text-[11px] px-3 py-2 rounded-xl rounded-tl-none border border-white/5 max-w-[90%] shadow-lg transform transition-all duration-500 translate-y-0 opacity-100">
<span className="text-neon block text-[9px] mb-0.5 font-bold uppercase tracking-wider">Assistant</span>
                                    I'm ready! Ask me anything about our services.
                                </div>
</div>
<div className="p-2.5 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 flex items-center gap-2.5 shadow-2xl pointer-events-auto">
<button className="w-8 h-8 rounded-full bg-neon text-black flex items-center justify-center relative group/mic hover:bg-white transition-colors">
<div className="absolute inset-0 bg-neon/30 rounded-full animate-ping group-hover/mic:animate-none"></div>
<svg className="lucide lucide-mic w-4 h-4 relative z-10" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<div className="flex-1 min-w-0">
<p className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold">Status</p>
<p className="js-status-text text-xs font-bold text-white truncate animate-pulse">
                                        Listening...
                                    </p>
</div>
<button className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
<svg className="lucide lucide-phone-off w-3.5 h-3.5" data-lucide="phone-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" x2="1" y1="1" y2="23"></line></svg>
</button>
</div>
</div>
</div>

<div className="mt-8 flex flex-col items-center">
<p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-4">Pick your industry</p>
<div className="flex flex-wrap justify-center gap-6">

<div className="avatar-btn avatar-active flex flex-col items-center gap-3 group cursor-pointer transition-all" data-industry="plumber" onclick="changeHeroImage(null, this)">
<div className="avatar-ring w-14 h-14 rounded-full p-0.5 border-2 border-neon bg-black overflow-hidden relative transition-all duration-300 transform scale-110">
<img alt="Plumber" className="transition-all duration-300 w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wider text-white group-hover:text-white transition-colors">Plumber</span>
</div>
<div className="avatar-btn flex flex-col items-center gap-3 group cursor-pointer transition-all" data-industry="lawyer" onclick="changeHeroImage('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=800', this)">
<div className="avatar-ring w-14 h-14 rounded-full p-0.5 border border-white/20 bg-black overflow-hidden relative transition-all duration-300 group-hover:border-[#ccff00]">
<img alt="Lawyer" className="w-full h-full object-cover rounded-full filter grayscale opacity-70 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">Lawyer</span>
</div>
<div className="avatar-btn flex flex-col items-center gap-3 group cursor-pointer transition-all" data-industry="medical" onclick="changeHeroImage('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=800', this)">
<div className="avatar-ring w-14 h-14 rounded-full p-0.5 border border-white/20 bg-black overflow-hidden relative transition-all duration-300 group-hover:border-[#ccff00]">
<img alt="Medical" className="w-full h-full object-cover rounded-full filter grayscale opacity-70 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">Medical</span>
</div>
<div className="avatar-btn flex flex-col items-center gap-3 group cursor-pointer transition-all" data-industry="builder" onclick="changeHeroImage('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=800', this)">
<div className="avatar-ring w-14 h-14 rounded-full p-0.5 border border-white/20 bg-black overflow-hidden relative transition-all duration-300 group-hover:border-[#ccff00]">
<img alt="Builder" className="w-full h-full object-cover rounded-full filter grayscale opacity-70 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">Builder</span>
</div>
<div className="avatar-btn flex flex-col items-center gap-3 group cursor-pointer transition-all" data-industry="salon" onclick="changeHeroImage('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=800', this)">
<div className="avatar-ring w-14 h-14 rounded-full p-0.5 border border-white/20 bg-black overflow-hidden relative transition-all duration-300 group-hover:border-[#ccff00]">
<img alt="Salon" className="w-full h-full object-cover rounded-full filter grayscale opacity-70 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">Salon</span>
</div>
</div>
</div>
</div>
<div className="max-w-lg">
<p className="text-xl text-gray-400 leading-relaxed mb-4">
                        Stop losing customers to missed calls. I answer enquiries, book appointments &amp; capture leads — 24/7. You're looking at one right now.
                    </p>
<p className="text-sm text-neon mb-8 flex items-center gap-2">
<svg className="lucide lucide-volume-2 w-4 h-4" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                        I'm listening! Speak to test the demo.
                    </p>
<button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#ccff00] text-black text-sm font-bold rounded-full shadow-[0_0_40px_-10px_rgba(204,255,0,0.6)] hover:shadow-[0_0_60px_-10px_rgba(204,255,0,0.8)] border-t border-white/50 hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
<div className="absolute inset-x-0 top-0 h-1/2 glass-shine opacity-60 pointer-events-none"></div>
<span className="relative z-10 flex items-center gap-2">
<svg className="lucide lucide-mic w-5 h-5 fill-black/10" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
                            START TALKING
                        </span>
<svg className="lucide lucide-arrow-right w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="pt-8 hidden lg:block">
<p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-6">Pick your industry</p>
<div className="flex flex-wrap gap-6" id="avatar-container">

<div className="avatar-btn avatar-active flex flex-col items-center gap-3 group cursor-pointer transition-all" data-industry="plumber" onclick="changeHeroImage(null, this)">
<div className="avatar-ring w-16 h-16 rounded-full p-0.5 border-2 border-neon bg-black overflow-hidden relative transition-all duration-300 transform scale-110">
<img alt="Plumber" className="transition-all duration-300 w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">Plumber</span>
</div>

<div className="avatar-btn flex flex-col items-center gap-3 group cursor-pointer transition-all" data-industry="lawyer" onclick="changeHeroImage('https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=800', this)">
<div className="avatar-ring w-16 h-16 rounded-full p-0.5 border border-white/20 bg-black overflow-hidden relative transition-all duration-300 group-hover:border-[#ccff00]">
<img alt="Lawyer" className="w-full h-full object-cover rounded-full filter grayscale opacity-70 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">Lawyer</span>
</div>

<div className="avatar-btn flex flex-col items-center gap-3 group cursor-pointer transition-all" data-industry="medical" onclick="changeHeroImage('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=800', this)">
<div className="avatar-ring w-16 h-16 rounded-full p-0.5 border border-white/20 bg-black overflow-hidden relative transition-all duration-300 group-hover:border-[#ccff00]">
<img alt="Medical" className="w-full h-full object-cover rounded-full filter grayscale opacity-70 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">Medical</span>
</div>

<div className="avatar-btn flex flex-col items-center gap-3 group cursor-pointer transition-all" data-industry="builder" onclick="changeHeroImage('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=800', this)">
<div className="avatar-ring w-16 h-16 rounded-full p-0.5 border border-white/20 bg-black overflow-hidden relative transition-all duration-300 group-hover:border-[#ccff00]">
<img alt="Builder" className="w-full h-full object-cover rounded-full filter grayscale opacity-70 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">Builder</span>
</div>

<div className="avatar-btn flex flex-col items-center gap-3 group cursor-pointer transition-all" data-industry="salon" onclick="changeHeroImage('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=800', this)">
<div className="avatar-ring w-16 h-16 rounded-full p-0.5 border border-white/20 bg-black overflow-hidden relative transition-all duration-300 group-hover:border-[#ccff00]">
<img alt="Salon" className="w-full h-full object-cover rounded-full filter grayscale opacity-70 group-hover:opacity-100 transition-all duration-300" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-[10px] uppercase font-semibold tracking-wider text-gray-400 group-hover:text-white transition-colors">Salon</span>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex relative h-full min-h-[500px] items-center justify-center">

<div className="absolute w-[400px] h-[400px] bg-neon/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

<div className="relative z-10 w-full max-w-md mx-auto">

<div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] h-[550px] group ring-1 ring-white/5">

<div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/80 to-transparent z-50 flex items-center justify-between px-5 pt-2 pointer-events-none">
<div className="flex items-center gap-2">
<div className="relative w-2 h-2">
<div className="absolute w-2 h-2 rounded-full bg-red-500 pulse-ring"></div>
<div className="w-2 h-2 rounded-full bg-red-500 relative z-10"></div>
</div>
<span className="text-xs font-bold text-white tracking-wide drop-shadow-md">LIVE</span>
</div>
<div className="flex gap-1">
<div className="w-1 h-1 rounded-full bg-white/60"></div>
<div className="w-1 h-1 rounded-full bg-white/60"></div>
</div>
</div>

<div className="absolute inset-0 z-10 bg-gray-900 overflow-hidden" id="embed-container">

<div className="avatar-zoom-container relative">

<img alt="Fallback" className="js-fallback-image w-full h-full object-cover object-top absolute inset-0 z-10 opacity-60" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>

<iframe allow="microphone; camera; autoplay; clipboard-write; encrypted-media" allowtransparency="true" className="js-hero-iframe w-full h-full border-none absolute inset-0 z-20" id="heygen-iframe-desktop" src="https://embed.liveavatar.com/v1/40511b08-242a-44cd-9243-a8cd4dc030b4?start=true&amp;autoplay=true&amp;listen=true&amp;background=transparent&amp;volume=1.0" style={{aspectRatio: '16/9', display: 'block', background: 'transparent'}} title="LiveAvatar Embed"></iframe>

<img alt="AI Assistant" className="js-hero-image w-full h-full object-cover object-top transition-all duration-700 ease-out opacity-0 absolute inset-0 z-30 pointer-events-none" src=""/>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent z-30 pointer-events-none"></div>
</div>

<div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none mt-20">
<div className="flex gap-1.5 h-12 items-center opacity-80">
<div className="w-1 bg-neon/80 rounded-full bar"></div>
<div className="w-1 bg-neon/80 rounded-full bar"></div>
<div className="w-1 bg-neon/80 rounded-full bar"></div>
<div className="w-1 bg-neon/80 rounded-full bar"></div>
<div className="w-1 bg-neon/80 rounded-full bar"></div>
</div>
</div>

<div className="absolute bottom-5 left-4 right-4 z-40 pointer-events-none">

<div className="mb-3 flex flex-col gap-2">
<div className="self-start bg-white/10 backdrop-blur-md text-white text-[11px] px-3 py-2 rounded-xl rounded-tl-none border border-white/5 max-w-[90%] shadow-lg transform transition-all duration-500 translate-y-0 opacity-100">
<span className="text-neon block text-[9px] mb-0.5 font-bold uppercase tracking-wider">Assistant</span>
                                    I'm ready! Ask me anything about our services.
                                </div>
</div>

<div className="p-2.5 bg-black/80 backdrop-blur-xl rounded-xl border border-white/10 flex items-center gap-2.5 shadow-2xl pointer-events-auto">
<button className="w-8 h-8 rounded-full bg-neon text-black flex items-center justify-center relative group/mic hover:bg-white transition-colors">
<div className="absolute inset-0 bg-neon/30 rounded-full animate-ping group-hover/mic:animate-none"></div>
<svg className="lucide lucide-mic w-4 h-4 relative z-10" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</button>
<div className="flex-1 min-w-0">
<p className="text-[9px] text-gray-400 uppercase tracking-wider font-semibold">Status</p>
<p className="js-status-text text-xs font-bold text-white truncate animate-pulse">
                                        Listening...
                                    </p>
</div>
<button className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center hover:bg-red-600 hover:text-white hover:border-red-600 transition-all">
<svg className="lucide lucide-phone-off w-3.5 h-3.5" data-lucide="phone-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" x2="1" y1="1" y2="23"></line></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-12 lg:py-24 bg-[#0a0a0a] border-t border-white/5" id="features">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-4xl font-medium tracking-tight text-white mb-2">Your trusted <span className="text-neon">24/7 sales assistant.</span></h2>
<p className="xl:bg-clip-text xl:text-transparent text-lg bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-white/50 via-white to-white/50 max-w-2xl mb-16">Small businesses lose thousands in revenue every year to missed calls. &lt;Br&gt; 
We fix that by speaking with potential new clients instantly, 24 hours a day.</p>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl bg-[#111] border border-[#ccff00]/40 hover:border-[#ccff00] transition-all duration-300 shadow-[0_0_20px_-12px_rgba(204,255,0,0.1)]">
<span className="text-6xl font-medium text-neon transition-colors">01.</span>
<h3 className="text-3xl font-medium text-white mt-6 mb-3">Never Miss a Lead</h3>
<p className="text-gray-400 text-base leading-relaxed mb-8">I answer every enquiry instantly — even at 3am on a Sunday. Your customers get help immediately, you get the lead.</p>
<a className="inline-flex items-center text-sm font-medium text-neon hover:text-white transition-colors" href="#">
                        Learn More <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="p-8 rounded-3xl bg-neon text-black border border-neon relative overflow-hidden transform md:-translate-y-4">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
<span className="text-6xl font-medium text-black">02.</span>
<h3 className="text-3xl font-medium text-black mt-6 mb-3">Industry Trained</h3>
<p className="text-black/80 text-base leading-relaxed mb-8 font-medium">I know your business inside out. Services, prices, availability — I answer questions just like one of your own team.</p>
<a className="inline-flex items-center text-sm font-bold text-black hover:opacity-70 transition-opacity" href="#">
                        Learn More <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group p-8 rounded-3xl bg-[#111] border border-[#ccff00]/40 hover:border-[#ccff00] transition-all duration-300 shadow-[0_0_20px_-12px_rgba(204,255,0,0.1)]">
<span className="text-6xl font-medium text-neon transition-colors">03.</span>
<h3 className="text-3xl font-medium text-white mt-6 mb-3">Books Appointments</h3>
<p className="text-gray-400 text-base leading-relaxed mb-8">I don't just capture details — I book jobs straight into your calendar. Wake up to a full schedule.</p>
<a className="inline-flex items-center text-sm font-medium text-neon hover:text-white transition-colors" href="#">
                        Learn More <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-12 lg:py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative bg-[#0F0F0F] rounded-2xl border border-red-500/30 p-8 overflow-hidden">
<div className="flex justify-between items-start mb-12 relative z-10">
<div>
<p className="text-sm text-gray-500 mb-1">Average Annual Loss</p>
<p className="text-4xl font-medium text-white tracking-tight">£126,000</p>
<p className="text-xs text-red-500 mt-2 flex items-center gap-1">
<svg className="lucide lucide-trending-down w-3 h-3" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
                                Lost to missed calls
                            </p>
</div>
<div className="bg-red-500/10 border border-red-500/20 px-3 py-1 rounded text-xs text-red-400">
                            Callers who never call back <span className="text-lg font-bold text-red-500">85%</span>
</div>
</div>

<div className="grid grid-cols-3 gap-4 mb-6">
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<p className="text-xs text-gray-500">Calls unanswered</p>
<p className="text-2xl font-bold text-red-400">62%</p>
</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<p className="text-xs text-gray-500">Cost per missed call</p>
<p className="text-2xl font-bold text-red-400">£1,200</p>
</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10">
<p className="text-xs text-gray-500">SMBs losing £500+/mo</p>
<p className="text-2xl font-bold text-red-400">42%</p>
</div>
</div>

<div className="relative h-48 w-full" id="revenue-chart">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 40">
<defs>
<lineargradient id="gradientRed" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ef4444" stop-opacity="0.25"></stop>
<stop offset="100%" stop-color="#ef4444" stop-opacity="0"></stop>
</lineargradient>
</defs>

<line stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" x1="0" x2="100" y1="10" y2="10"></line>
<line stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" x1="0" x2="100" y1="20" y2="20"></line>
<line stroke="rgba(255,255,255,0.05)" strokeWidth="0.2" x1="0" x2="100" y1="30" y2="30"></line>

<path className="chart-area" d="M0,40 L0,35 C20,35 30,15 50,25 C70,35 80,5 100,5 L100,40 Z" fill="url(#gradientRed)"></path>

<path className="chart-line" d="M0,35 C20,35 30,15 50,25 C70,35 80,5 100,5" fill="none" stroke="#ef4444" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>

<circle className="chart-dot" cx="100" cy="5" fill="#ef4444" r="1.5" stroke="#0F0F0F" strokeWidth="0.5"></circle>
</svg>

<div className="absolute top-0 right-0 mt-2 transform translate-x-2 chart-tooltip-html z-20 pointer-events-none">
<div className="bg-[#1a1a1a]/90 border border-white/10 rounded-lg p-3 shadow-2xl backdrop-blur-md">
<div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Monthly Loss</div>
<div className="text-sm text-white font-bold">£10,500+</div>
<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1a1a] border-r border-b border-white/10 rotate-45"></div>
</div>
</div>
</div>

<div className="flex justify-between text-[10px] text-gray-600 mt-2 px-1">
<span>Jan</span>
<span>Mar</span>
<span>Jun</span>
<span>Sep</span>
<span>Dec</span>
</div>
</div>

<div className="">
<h2 className="text-4xl font-medium tracking-tight text-white mb-6">
                        Available <span className="text-neon">24/7</span>, 
                        anytime &amp; anywhere.
                    </h2>
<div className="flex gap-1 mb-6">
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-lg text-gray-400 mb-8 leading-relaxed">
                        While you're under a sink, in court, or treating a patient — I'm on your website handling enquiries and booking your next job.
                    </p>
<div className="flex items-start gap-4 mb-10 pl-4 border-l-2 border-neon">
<p className="text-sm text-gray-500 italic">
                            "Your competitors are investing in AI. The businesses that adopt early will capture the leads that others miss."
                        </p>
</div>
<div className="flex items-center gap-6" id="pricing">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-black bg-neon rounded-full hover:bg-white transition-colors" href="#">
                            See Pricing
                        </a>
<a className="inline-flex items-center text-sm font-medium text-white hover:text-neon transition-colors" href="#">
                            Learn More <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
<span className="text-sm text-gray-400">Plans from</span>
<span className="text-lg font-bold text-neon">£297/month</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-12 lg:py-24 bg-[#0a0a0a] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">What Our Clients Say</h2>
<p className="text-gray-400">Local businesses winning more leads with SpeakingSites</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-[#111] border border-neon/30">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"I was missing calls while out on jobs. Now my website handles enquiries 24/7 and books appointments directly into my diary. Game changer."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center text-neon font-bold text-sm">JM</div>
<div>
<p className="text-white text-sm font-medium">John Mitchell</p>
<p className="text-gray-500 text-xs">Mitchell Plumbing, Manchester</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#111] border border-neon/30">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"Our clinic was losing consultation requests outside hours. SpeakingSites answers questions about treatments and books consultations automatically. Brilliant."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center text-neon font-bold text-sm">SC</div>
<div>
<p className="text-white text-sm font-medium">Sarah Chen</p>
<p className="text-gray-500 text-xs">Radiance Aesthetics, London</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#111] border border-neon/30">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-neon fill-neon" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-300 text-sm leading-relaxed mb-6">"Potential clients used to leave our website without engaging. Now the AI greets them, answers questions, and we've seen a 40% increase in consultations booked."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon/20 to-neon/5 flex items-center justify-center text-neon font-bold text-sm">DT</div>
<div>
<p className="text-white text-sm font-medium">David Thompson</p>
<p className="text-gray-500 text-xs">Thompson Legal, Birmingham</p>
</div>
</div>
</div>
</div>

<div className="mt-16 text-center">
<div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neon/10 border border-neon/20">
<svg className="lucide lucide-message-circle-question w-5 h-5 text-neon" data-lucide="message-circle-question" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="text-sm text-neon">Got questions? Try the demo above — I'll answer them for you!</span>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#0a0a0a] z-10 border-white/5 py-24 lg:py-32 relative" id="how-it-works">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="md:text-6xl text-5xl font-medium text-white tracking-tight mb-16">
                How <span className="text-neon">Speaking Sites</span> Works
                <span className="block text-lg font-normal text-gray-400 mt-6 tracking-normal">Three simple steps to never miss another lead.</span>
</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative p-8 rounded-2xl bg-[#0F0F0F] border border-[#ccff00]/40 group hover:border-[#ccff00] transition-colors">
<div className="w-12 h-12 rounded-full bg-neon text-black flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-building-2 w-6 h-6" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Pick Your Industry</h3>
<p className="text-gray-400 text-sm">Select your trade or profession. Our AI comes pre-loaded with industry knowledge.</p>
</div>

<div className="relative p-8 rounded-2xl bg-neon text-black transform scale-105 shadow-[0_0_50px_-12px_rgba(204,255,0,0.3)] z-10">
<div className="w-12 h-12 rounded-full border border-black/20 text-black flex items-center justify-center mx-auto mb-6 bg-black/5">
<svg className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-2xl font-bold text-black mb-3">We Train The AI</h3>
<p className="text-black/80 text-sm font-medium mb-6">We scan your website and train me on your services, prices, and FAQs. I become YOUR expert.</p>
<button className="px-4 py-2 bg-black text-white text-xs font-bold rounded-full inline-flex items-center">
                        Learn More <svg className="lucide lucide-arrow-right w-3 h-3 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="group hover:border-[#ccff00] transition-colors bg-[#0F0F0F] border-[#ccff00]/40 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="w-12 h-12 rounded-full bg-neon text-black flex items-center justify-center mx-auto mb-6">
<svg className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-3">Go Live 24/7</h3>
<p className="text-gray-400 text-sm">I appear on your website instantly. Your customers can talk to me anytime — you never miss another lead.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-16 lg:py-24 overflow-hidden">
<div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-gradient-to-b from-neon/5 to-transparent blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">

<div className="flex flex-col justify-center">
<h2 className="text-5xl font-medium tracking-tight text-white mb-4">
                    Everything <span className="text-neon">You Need</span>
<span className="text-gray-400">to Capture More Leads</span>
</h2>
<div className="pl-4 border-l border-neon/50 mb-12 mt-6">
<p className="text-gray-400 text-sm max-w-sm">
                        Stop losing customers to missed calls. Your AI assistant handles everything while you focus on the job.
                    </p>
</div>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">

<div className="group">
<div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center text-black mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h4 className="text-lg font-medium text-white mb-2">24/7 Availability</h4>
<p className="text-base text-gray-400 leading-relaxed">Every enquiry answered instantly — day, night, weekends, bank holidays. Never miss another lead.</p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center text-black mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-calendar-check w-5 h-5" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h4 className="text-lg font-medium text-white mb-2">Instant Booking</h4>
<p className="text-base text-gray-400 leading-relaxed">I connect directly to your calendar. Appointments appear on your phone automatically without you lifting a finger.</p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center text-black mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-brain-circuit w-5 h-5" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h4 className="text-lg font-medium text-white mb-2">Smart Knowledge</h4>
<p className="text-base text-gray-400 leading-relaxed">Trained on your specific business. I know your prices, your service areas, and your opening times perfectly.</p>
</div>

<div className="group">
<div className="w-10 h-10 rounded-full bg-neon flex items-center justify-center text-black mb-4 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h4 className="text-lg font-medium text-white mb-2">Lead Analytics</h4>
<p className="text-base text-gray-400 leading-relaxed">See exactly how many leads I've captured and how much revenue I've generated for you in your dashboard.</p>
</div>
</div>
</div>

<div className="relative flex items-center justify-center lg:h-auto h-[400px]">

<div className="relative w-full max-w-md aspect-[4/5] bg-[#0F0F0F] rounded-2xl border border-white/10 overflow-hidden shadow-2xl group">

<div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-white/5">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>

<div className="p-6 space-y-6">

<div className="p-4 rounded-xl bg-[#1a1a1a] border border-white/5">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-gray-400">Leads this week</span>
<span className="text-xs text-neon font-bold">+12%</span>
</div>
<div className="text-3xl font-bold text-white">42</div>
</div>

<div className="space-y-3">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
<div className="bg-[#1a1a1a] p-3 rounded-2xl rounded-tl-none border border-white/5 text-xs text-gray-400">
                                    Hi, do you have any appointments available for a boiler service this Tuesday?
                                </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-neon flex-shrink-0 flex items-center justify-center">
<svg className="text-black" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<div className="bg-neon/10 p-3 rounded-2xl rounded-tr-none border border-neon/20 text-xs text-white">
                                    Yes! We have a slot at 10:00 AM or 2:30 PM on Tuesday. Which one works best for you?
                                </div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 flex-shrink-0"></div>
<div className="bg-[#1a1a1a] p-3 rounded-2xl rounded-tl-none border border-white/5 text-xs text-gray-400">
                                    10:00 AM is perfect.
                                </div>
</div>

<div className="mt-4 p-3 rounded-lg bg-neon/5 border border-neon/30 flex items-center gap-3">
<div className="h-10 w-10 bg-neon rounded flex items-center justify-center text-black">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-xs text-neon font-bold uppercase tracking-wider">Booked Automatically</div>
<div className="text-white text-sm font-medium">Boiler Service • Tue 10:00 AM</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-neon/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="relative py-20 border-t border-white/10 overflow-hidden z-10">
<div className="absolute inset-0 bg-neon/5"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to stop losing leads?</h2>
<p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Join hundreds of local businesses using Voice AI to capture customers while they sleep.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-neon text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_30px_-5px_rgba(204,255,0,0.5)]" href="#try-demo">
                    Try The Demo Now
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all" href="#pricing">
                    View Pricing
                </a>
</div>
<p className="mt-6 text-sm text-gray-500">No credit card required for demo • Setup in minutes</p>
</div>
</section>

<footer className="bg-black border-t border-white/5 pt-16 pb-12 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="relative flex items-center justify-center w-8 h-8 rounded-md border border-white/10 bg-white/5">
<svg className="lucide lucide-mic w-4 h-4 text-neon" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<span className="text-lg font-medium tracking-tight text-white">Speaking<span className="text-gray-400">Sites</span></span>
</div>
<p className="text-sm text-gray-300 mb-6 max-w-xs leading-relaxed">
                        Voice-powered AI agents that help local businesses capture every lead, 24/7.
                    </p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 4.1 9c-3.1.9-5.8-2.7-5.8-2.7s2.2.8 4.4 0c-3-.9-5.2-6-5.2-6 1.3 1.3 2.8 1.9 4.3 2 0 0 .5-6.3 5.4-8.8 2.2-1.1 5.3.1 5.3.1"></path></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#features">Features</a></li>
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#pricing">Pricing</a></li>
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#demo">Live Demo</a></li>
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#">Integrations</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-gray-400 hover:text-neon transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500">
                    © 2024 SpeakingSites AI. All rights reserved.
                </p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs text-gray-400">All Systems Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
