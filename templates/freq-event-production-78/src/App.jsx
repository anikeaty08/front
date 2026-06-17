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



        // Initialize Icons
        lucide.createIcons();

        // 1. Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // 2. Flashlight / Spotlight Effect
        const spotlightGroups = document.querySelectorAll('.spotlight-group');
        spotlightGroups.forEach(group => {
            group.addEventListener('mousemove', (e) => {
                const rect = group.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Update CSS variables for all cards in the group
                group.querySelectorAll('.spotlight-card, .spotlight-border').forEach(card => {
                    // We need position relative to the card itself for some effects,
                    // but for the group spotlight, we can use group relative coordinates
                    // or calculate per card.
                    // Simpler approach for single group flashlight:
                    // Pass the mouse position relative to the CARD to the card.
                    const cardRect = card.getBoundingClientRect();
                    card.style.setProperty('--mouse-x', `${e.clientX - cardRect.left}px`);
                    card.style.setProperty('--mouse-y', `${e.clientY - cardRect.top}px`);
                });
            });
        });

        // 3. Carousel Logic
        const items = document.querySelectorAll('.carousel-item');
        let currentIndex = 0;
        
        function showItem(index) {
            items.forEach(item => item.classList.remove('active'));
            // Wrap around
            if (index >= items.length) currentIndex = 0;
            if (index < 0) currentIndex = items.length - 1;
            
            items[currentIndex].classList.add('active');
        }

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex++;
            showItem(currentIndex);
        });

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentIndex--;
            showItem(currentIndex);
        });

        // Auto rotate every 5 seconds
        setInterval(() => {
            currentIndex++;
            showItem(currentIndex);
        }, 5000);

    
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
      

<div className="bg-glow"></div>
<div className="laser-grid"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">

<svg fill="none" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="logo-grad" x1="0" x2="24" y1="0" y2="24">
<stop offset="0%" stop-color="#00aaff"></stop>
<stop offset="100%" stop-color="#0445f3"></stop>
</lineargradient>
</defs>
<path d="M18.5 20a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V12a1.5 1.5 0 0 1 .44-1.06l4-4a1.5 1.5 0 0 1 2.12 0l.707.707a1.5 1.5 0 0 1 0 2.121L11.5 11H16a2 2 0 0 1 2 2v1a2 2 0 0 1 .1 3.998L18.5 18v2z" stroke="url(#logo-grad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{display: 'none'}}></path>

<path d="M7 21V9.5M12 21V9.5M17 21V5M21 21V5M3 13C3 17.5 7 21 7 21H21" stroke="url(#logo-grad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
<span className="font-semibold text-lg tracking-tight text-white">FREQ</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#opportunity">Opportunity</a>
<a className="hover:text-white transition-colors" href="#products">Products</a>
<a className="hover:text-white transition-colors" href="#invest">Invest</a>
</div>
<a className="relative group" href="#invest">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#0445f3] to-blue-400 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-200"></div>
<button className="relative bg-black text-white px-5 py-2 rounded-full text-sm font-medium border border-white/10 hover:border-white/20 transition-colors">
                    Invest Now
                </button>
</a>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0445f3]/30 bg-[#0445f3]/10 text-[#0445f3] text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0445f3]"></span>
</span>
                FREQ INVESTMENT OPPORTUNITY
            </div>
<h1 className="reveal text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                Robots Don’t Party. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#0445f3]">Freqs Do.</span>
</h1>
<p className="reveal text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                As AI reshapes the world, we’re raising <span className="text-white">$2M</span> to empower the next generation of creative entrepreneurs with complete, festival-quality event production systems.
            </p>
<div className="reveal flex flex-col md:flex-row items-center justify-center gap-4">
<a className="border-beam-btn w-full md:w-auto px-8 py-4 rounded-full text-white font-medium hover:scale-[1.02] transition-transform" href="#invest">
<span className="relative z-10 flex items-center justify-center gap-2">
                        Invest Now <i className="w-5 h-5" data-lucide="arrow-right"></i>
</span>
</a>
<button className="w-full md:w-auto px-8 py-4 rounded-full text-white font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center justify-center gap-2">
<i className="w-5 h-5 text-[#0445f3]" data-lucide="play-circle"></i> Watch Vision Video
                </button>
</div>
</div>

<div className="reveal mt-20 max-w-6xl mx-auto relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/20 aspect-video group">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:scale-105 transition duration-1000"></div>
<div className="absolute bottom-8 left-8 z-20">
<p className="text-sm font-medium text-white/80 uppercase tracking-widest mb-1">Live Demo</p>
<h3 className="text-2xl font-semibold text-white">Small Festival Deployment</h3>
</div>
<div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition duration-500">
<div className="w-16 h-16 rounded-full bg-[#0445f3]/80 backdrop-blur flex items-center justify-center pl-1 cursor-pointer hover:bg-[#0445f3] transition">
<i className="w-8 h-8 text-white fill-white" data-lucide="play"></i>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 relative" id="opportunity">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="reveal text-4xl md:text-5xl font-semibold tracking-tight mb-6">The Gap That Changes Everything</h2>
<p className="reveal text-xl text-neutral-400">
                        Three massive trends are converging at the perfect moment. People are desperate to connect, yet starting an event business is impossibly hard—until now.
                    </p>
</div>
<div className="reveal flex gap-2">
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition" id="prevBtn"><i className="w-6 h-6" data-lucide="chevron-left"></i></button>
<button className="p-3 rounded-full border border-white/10 hover:bg-white/5 transition" id="nextBtn"><i className="w-6 h-6" data-lucide="chevron-right"></i></button>
</div>
</div>

<div className="spotlight-group relative min-h-[400px]" id="cardCarousel">

<div className="carousel-item active w-full">
<div className="grid md:grid-cols-3 gap-6">
<div className="spotlight-card p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-between group">
<div className="spotlight-border"></div>
<div>
<div className="w-12 h-12 rounded-lg bg-[#0445f3]/20 flex items-center justify-center mb-6 text-[#0445f3]">
<i className="w-6 h-6" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold mb-3">Live Events Boom</h3>
<p className="text-lg text-neutral-400">$1.3T global market by 2028. People are prioritizing real-world experiences over digital goods.</p>
</div>
</div>
<div className="spotlight-card p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-between group">
<div className="spotlight-border"></div>
<div>
<div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-6 text-purple-500">
<i className="w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold mb-3">Gig Economy Explosion</h3>
<p className="text-lg text-neutral-400">70M+ Americans transitioning to self-employment. AI is displacing jobs, driving talent to experiential work.</p>
</div>
</div>
<div className="spotlight-card p-8 rounded-2xl border border-white/10 h-full flex flex-col justify-between group">
<div className="spotlight-border"></div>
<div>
<div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mb-6 text-pink-500">
<i className="w-6 h-6" data-lucide="music" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold mb-3">Creator Economy</h3>
<p className="text-lg text-neutral-400">200M+ creators monetizing skills. Independent venues are struggling, creating demand for mobile outdoor events.</p>
</div>
</div>
</div>
</div>

<div className="carousel-item w-full">
<div className="grid md:grid-cols-2 gap-6 h-full">
<div className="spotlight-card p-10 rounded-2xl border border-white/10 h-full">
<div className="spotlight-border"></div>
<h3 className="text-red-400 font-medium tracking-wide mb-2 uppercase text-sm">The Problem</h3>
<h4 className="text-3xl font-semibold mb-4">Fragmented &amp; Hostile</h4>
<p className="text-xl text-neutral-400">Equipment is complicated and sold piecemeal. Training is fragmented. Online forums are gatekept. Most people give up before they start.</p>
</div>
<div className="spotlight-card p-10 rounded-2xl border border-white/10 h-full bg-[#0445f3]/5">
<div className="spotlight-border"></div>
<h3 className="text-[#0445f3] font-medium tracking-wide mb-2 uppercase text-sm">Our Solution</h3>
<h4 className="text-3xl font-semibold mb-4">A Complete Ecosystem</h4>
<p className="text-xl text-neutral-400">Everything in one box—speakers, lights, lasers, software, training, community. Show up, set up in minutes, bring the house down.</p>
</div>
</div>
</div>

<div className="carousel-item w-full">
<div className="spotlight-card rounded-2xl border border-white/10 overflow-hidden relative aspect-[21/9] flex items-center justify-center bg-neutral-900">
<div className="spotlight-border"></div>
<div className="text-center z-10 p-6">
<i className="w-12 h-12 text-[#0445f3] mx-auto mb-4" data-lucide="box"></i>
<h3 className="text-2xl font-semibold">3D Render: Freq System Assembling</h3>
<p className="text-neutral-500 mt-2">Visualizing the Business-in-a-Box setup process</p>
</div>

<div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal text-4xl md:text-5xl font-semibold tracking-tight mb-4">The Complete Event Production Ecosystem</h2>
<p className="reveal text-xl text-neutral-400">From hobbyist to professional festival production.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="reveal flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
<i className="text-white w-5 h-5" data-lucide="speaker"></i>
</div>
<div>
<h4 className="text-xl font-semibold mb-2">Turnkey Audio Systems</h4>
<p className="text-neutral-400 leading-relaxed">BASSBOSS + Freq™ Loudspeakers delivering studio precision to nightclub power.</p>
</div>
</div>

<div className="reveal flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
<i className="text-yellow-400 w-5 h-5" data-lucide="zap"></i>
</div>
<div>
<h4 className="text-xl font-semibold mb-2">Lighting &amp; Visuals</h4>
<p className="text-neutral-400 leading-relaxed">Immersive lighting, lasers, and projection-friendly modular systems.</p>
</div>
</div>

<div className="reveal flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
<i className="text-blue-400 w-5 h-5" data-lucide="package"></i>
</div>
<div>
<h4 className="text-xl font-semibold mb-2">Business-in-a-Box</h4>
<p className="text-neutral-400 leading-relaxed">Complete packages tailored for scalable, profitable businesses.</p>
</div>
</div>

<div className="reveal flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
<i className="text-green-400 w-5 h-5" data-lucide="graduation-cap"></i>
</div>
<div>
<h4 className="text-xl font-semibold mb-2">Education Platform</h4>
<p className="text-neutral-400 leading-relaxed">Comprehensive training taking creators from novice to certified professional.</p>
</div>
</div>

<div className="reveal flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
<i className="text-purple-400 w-5 h-5" data-lucide="cpu"></i>
</div>
<div>
<h4 className="text-xl font-semibold mb-2">Hive Mind Software</h4>
<p className="text-neutral-400 leading-relaxed">Unity-based 3D site planning, mesh-network comms, and collaborative tools.</p>
</div>
</div>

<div className="reveal flex gap-5">
<div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center border border-white/10">
<i className="text-pink-400 w-5 h-5" data-lucide="users"></i>
</div>
<div>
<h4 className="text-xl font-semibold mb-2">Thriving Community</h4>
<p className="text-neutral-400 leading-relaxed">Mentors, forums, real support—not just gear, but guidance.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0445f3]/5 pointer-events-none"></div>
<div className="max-w-7xl mx-auto text-center">
<h2 className="reveal text-sm font-semibold tracking-widest uppercase text-[#0445f3] mb-3">Proven Foundation</h2>
<h3 className="reveal text-3xl md:text-5xl font-semibold mb-12">Built on 25+ Years of Audio Innovation</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="reveal p-6 border-l border-white/10 text-left">
<div className="text-4xl font-semibold text-white mb-1">1999</div>
<div className="text-neutral-500">Established Excellence</div>
</div>
<div className="reveal p-6 border-l border-white/10 text-left">
<div className="text-4xl font-semibold text-white mb-1">27M+</div>
<div className="text-neutral-500">Social Views (2025)</div>
</div>
<div className="reveal p-6 border-l border-white/10 text-left">
<div className="text-4xl font-semibold text-white mb-1">30%</div>
<div className="text-neutral-500">YoY Revenue Growth</div>
</div>
<div className="reveal p-6 border-l border-white/10 text-left">
<div className="text-4xl font-semibold text-white mb-1">Global</div>
<div className="text-neutral-500">Dealer Network</div>
</div>
</div>
<div className="reveal relative h-48 md:h-64 overflow-hidden rounded-2xl w-full">

<div className="absolute inset-0 flex gap-4 animate-[scroll_30s_linear_infinite] w-[200%]">
<img className="h-full w-auto rounded-lg opacity-60 hover:opacity-100 transition" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img className="h-full w-auto rounded-lg opacity-60 hover:opacity-100 transition" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-full w-auto rounded-lg opacity-60 hover:opacity-100 transition" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img className="h-full w-auto rounded-lg opacity-60 hover:opacity-100 transition" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-full w-auto rounded-lg opacity-60 hover:opacity-100 transition" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
</div>
<style>
                @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
            </style>
</div>
</section>

<section className="py-24 px-6 bg-black" id="products">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="reveal text-4xl md:text-6xl font-semibold tracking-tight mb-4">Freq™ Loudspeakers</h2>
<p className="reveal text-xl text-neutral-400">The 22nd Century is Here.</p>
</div>
<button className="reveal mt-6 md:mt-0 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition flex items-center gap-2">
                    Explore Freq Systems <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="reveal group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 aspect-square md:aspect-[4/5]">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black group-hover:scale-105 transition duration-700">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 border border-white/20 rounded-xl bg-neutral-950 shadow-[0_0_50px_rgba(4,69,243,0.3)]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/10 bg-neutral-900 shadow-[inset_0_0_20px_black]"></div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<h3 className="text-3xl font-semibold mb-2">Carbon8</h3>
<p className="text-neutral-400 mb-4 line-clamp-2">The sexiest studio monitor ever designed. Bringing 22nd-century audio to content creators and audiophiles.</p>
<div className="flex gap-3">
<span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">Studio</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">Hi-Fi</span>
</div>
</div>
</div>

<div className="reveal group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 aspect-square md:aspect-[4/5]">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-10"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-black group-hover:scale-105 transition duration-700">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-96 border-x border-white/20 bg-neutral-950 flex flex-col justify-evenly items-center shadow-[0_0_80px_rgba(4,69,243,0.4)]">
<div className="w-24 h-24 rounded-full border border-white/10 bg-neutral-900"></div>
<div className="w-24 h-24 rounded-full border border-white/10 bg-neutral-900"></div>
<div className="w-24 h-24 rounded-full border border-white/10 bg-neutral-900"></div>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<h3 className="text-3xl font-semibold mb-2">HIVE Tower</h3>
<p className="text-neutral-400 mb-4 line-clamp-2">12-foot modular tower covering thousands. Epic design meets functional scalability.</p>
<div className="flex gap-3">
<span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">Festival</span>
<span className="px-3 py-1 rounded-full bg-white/10 text-xs font-medium">Modular</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="invest">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0445f3]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-white">The Investment</h2>
<p className="reveal text-2xl text-[#0445f3] font-medium mb-8">$2M to Scale the Movement</p>

<div className="reveal relative h-4 bg-neutral-800 rounded-full overflow-hidden mb-4 border border-white/10">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-[#0445f3] w-[35%] shadow-[0_0_20px_#0445f3]"></div>
</div>
<div className="reveal flex justify-between text-sm text-neutral-400 font-medium">
<span>Raised: $700,000</span>
<span>Goal: $2,000,000</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 mb-16">
<div className="reveal bg-neutral-900/50 backdrop-blur border border-white/10 p-8 rounded-2xl">
<h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
<i className="text-[#0445f3]" data-lucide="pie-chart"></i> Use of Funds
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-400">
<div className="mt-1 w-2 h-2 rounded-full bg-[#0445f3]"></div>
<span><strong className="text-white">Product:</strong> Launching full Freq speaker line &amp; Visual Effects systems.</span>
</li>
<li className="flex items-start gap-3 text-neutral-400">
<div className="mt-1 w-2 h-2 rounded-full bg-[#0445f3]"></div>
<span><strong className="text-white">Platform:</strong> Hive Mind software &amp; Mobile App development.</span>
</li>
<li className="flex items-start gap-3 text-neutral-400">
<div className="mt-1 w-2 h-2 rounded-full bg-[#0445f3]"></div>
<span><strong className="text-white">Growth:</strong> Marketing, Sales Team, inventory expansion.</span>
</li>
</ul>
</div>
<div className="reveal bg-neutral-900/50 backdrop-blur border border-white/10 p-8 rounded-2xl">
<h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
<i className="text-[#0445f3]" data-lucide="gift"></i> Investor Perks
                    </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-400">
<i className="w-4 h-4 mt-1 text-green-400" data-lucide="check"></i>
<span>Equity ownership in a mission-driven PBC.</span>
</li>
<li className="flex items-start gap-3 text-neutral-400">
<i className="w-4 h-4 mt-1 text-green-400" data-lucide="check"></i>
<span>Revenue sharing on specific product lines.</span>
</li>
<li className="flex items-start gap-3 text-neutral-400">
<i className="w-4 h-4 mt-1 text-green-400" data-lucide="check"></i>
<span>"Freq Fam Founder" status, VIP event access, and discounts.</span>
</li>
</ul>
</div>
</div>
<div className="reveal text-center">
<div className="p-8 border border-[#0445f3] bg-[#0445f3]/5 rounded-2xl">
<h3 className="text-2xl font-semibold mb-4">Ready to Join the Movement?</h3>
<p className="text-neutral-400 mb-8 max-w-lg mx-auto">
                        We’re creating thousands of creative careers. Building a powerhouse business with strong profits AND strong purpose.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="border-beam-btn px-8 py-4 rounded-full text-white font-bold text-lg bg-[#0445f3] hover:scale-105 transition shadow-lg shadow-blue-900/50">
                            Invest Now
                        </button>
<button className="px-8 py-4 rounded-full text-white font-medium border border-white/10 hover:bg-white/5 transition">
                            Download Deck
                        </button>
</div>
<p className="mt-6 text-xs text-neutral-500">
                        Reg CF Offering. Capital at risk.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto">
<h2 className="reveal text-4xl font-semibold mb-12 text-center">Experience Meets Vision</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="reveal p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/20 transition">
<div className="w-20 h-20 rounded-full bg-neutral-800 mb-4 overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold text-white">Lian Amber</h3>
<p className="text-[#0445f3] text-sm font-medium mb-3">Founder &amp; CEO</p>
<p className="text-neutral-400 text-sm">Visionary entrepreneur leading the expansion from BASSBOSS. Culture-driven leadership.</p>
</div>

<div className="reveal p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/20 transition">
<div className="w-20 h-20 rounded-full bg-neutral-800 mb-4 overflow-hidden">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold text-white">David Lee</h3>
<p className="text-[#0445f3] text-sm font-medium mb-3">Chief Product Officer</p>
<p className="text-neutral-400 text-sm">25+ years audio engineering excellence. The brain behind BASSBOSS and Freq™.</p>
</div>

<div className="reveal p-6 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/20 transition flex flex-col justify-center">
<h3 className="text-xl font-semibold text-white mb-2">Expert Advisory Team</h3>
<div className="flex gap-2 mb-4">
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div className="w-8 h-8 rounded-full bg-neutral-700"></div>
<div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-xs text-white">+5</div>
</div>
<p className="text-neutral-400 text-sm">Industry veterans in event production, software, hardware scaling, and legal.</p>
</div>
</div>
</div>
</section>

<footer className="py-16 px-6 border-t border-white/5 bg-black text-center md:text-left">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<div className="flex items-center gap-2 justify-center md:justify-start mb-4">
<svg fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 21V9.5M12 21V9.5M17 21V5M21 21V5M3 13C3 17.5 7 21 7 21H21" stroke="#0445f3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="font-bold text-white tracking-tight">FREQ</span>
</div>
<p className="text-neutral-500 text-sm">Freq Universe PBC | Austin, Texas</p>
<p className="text-neutral-500 text-sm">invest@freqloud.com</p>
</div>
<div className="flex gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition" href="#">FAQ</a>
<a className="hover:text-white transition" href="#">Legal</a>
<a className="hover:text-white transition" href="#">Financials</a>
</div>
<div className="flex gap-4">
<a className="p-2 rounded-full bg-neutral-900 border border-white/10 hover:border-[#0445f3] hover:text-[#0445f3] transition text-white" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="p-2 rounded-full bg-neutral-900 border border-white/10 hover:border-[#0445f3] hover:text-[#0445f3] transition text-white" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="p-2 rounded-full bg-neutral-900 border border-white/10 hover:border-[#0445f3] hover:text-[#0445f3] transition text-white" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</footer>



    </>
  );
}
