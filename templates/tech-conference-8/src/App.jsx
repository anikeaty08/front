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

        // GLOBULAR CURSOR LOGIC
        const blob = document.getElementById('cursor-blob');
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let blobX = mouseX;
        let blobY = mouseY;
        let isMoving = false;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if(!isMoving) {
                blob.style.opacity = '1';
                isMoving = true;
            }
        });

        function animateBlob() {
            // Smooth trailing effect (Linear Interpolation)
            const speed = 0.08; // Lower value = more "drag" / liquid feel
            blobX += (mouseX - blobX) * speed;
            blobY += (mouseY - blobY) * speed;
            
            blob.style.transform = `translate(${blobX}px, ${blobY}px) translate(-50%, -50%)`;
            
            requestAnimationFrame(animateBlob);
        }
        
        animateBlob();
    
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
      

<div id="cursor-blob"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-400 shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
<span className="text-sm font-semibold tracking-tight text-white">Innovare’X 2026</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-gray-400 tracking-wide">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#agenda">Agenda</a>
<a className="hover:text-white transition-colors" href="#speakers">Speakers</a>
<a className="hover:text-white transition-colors" href="#sponsors">Sponsors</a>
</div>
<a className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-[10px] uppercase tracking-wider font-bold text-white border border-white/10 transition-all" href="#tickets">
                Get Tickets
            </a>
</div>
</nav>
<main className="relative pt-24 pb-20 overflow-hidden">

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-violet-900/10 rounded-full blur-[120px] -z-20 pointer-events-none"></div>

<section className="max-w-[1440px] mx-auto px-6 mb-32 relative">
<div className="flex flex-col items-center text-center space-y-8 pt-10 md:pt-20">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-[10px] font-bold uppercase tracking-wider mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
                    Unwire | Unplug | Unleash
                </div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 pb-2 uppercase relative z-10">
                    The Next Tech 1.0
                </h1>

<p className="text-lg md:text-xl text-gray-400 max-w-2xl font-light tracking-wide relative z-10">
                    A forum where the world meets the future.
                </p>
<div className="flex flex-col md:flex-row gap-4 items-center text-gray-400 text-xs md:text-sm border border-white/10 px-6 py-3 rounded-xl bg-white/5 tracking-wider relative z-10 backdrop-blur-sm">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span>Saturday, January 17th, 2026</span>
</div>
<div className="hidden md:block w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>DLF Cyberpark, Gurgaon</span>
</div>
</div>

<div className="flex flex-wrap justify-center gap-4 mt-8 w-full md:w-auto relative z-10">
<button className="px-6 py-3 rounded-lg bg-white text-black font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors w-full md:w-auto text-xs">
                        Get Tickets
                    </button>
<button className="px-6 py-3 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-white font-bold uppercase tracking-widest transition-colors w-full md:w-auto text-xs">
                        Sponsor
                    </button>
</div>

<div className="relative w-full max-w-5xl mt-16 aspect-video rounded-2xl border border-white/10 bg-black overflow-hidden group shadow-2xl shadow-violet-900/20 z-10">

<div className="absolute top-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2 z-10">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>

<div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8 text-center relative">
<i className="w-12 h-12 text-violet-500 mb-4 opacity-50" data-lucide="video"></i>
<p className="text-violet-200/80 text-[10px] font-medium border border-violet-500/30 bg-violet-500/10 px-4 py-2 rounded tracking-widest uppercase">
                            [AI-Generated Video — Networking + Fireside Chat + DS/AI Clips (Sora)]
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32 relative z-10" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">

<div className="relative rounded-2xl border border-white/10 bg-white/5 overflow-hidden aspect-square lg:aspect-[4/3] flex items-center justify-center backdrop-blur-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 to-transparent"></div>
<div className="text-center p-6">
<i className="w-10 h-10 text-gray-500 mx-auto mb-3" data-lucide="image"></i>
<p className="text-[10px] font-medium text-gray-500 tracking-widest uppercase">[Video/Image Placeholder]</p>
</div>
</div>

<div className="space-y-8">
<h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white uppercase leading-snug">
                        Harness the power of AI &amp; Future Tech.
                    </h2>
<p className="text-sm md:text-base text-gray-400 leading-relaxed font-light tracking-wide">
                        Join us at the forefront of innovation. Innovare'X 2026 brings together the brightest minds to explore how artificial intelligence and emerging technologies are reshaping our reality.
                    </p>
<div className="flex gap-4">
<button className="px-5 py-2.5 rounded-lg bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200">
                            Get Tickets
                        </button>
<button className="px-5 py-2.5 rounded-lg border border-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5">
                            Become a Sponsor
                        </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
<h3 className="text-3xl font-bold text-white mb-2 tracking-tight">10+</h3>
<p className="text-xs text-gray-400 group-hover:text-gray-300 font-light tracking-wide">
                        Thoughtfully curated sessions exploring the latest in AI, emerging tech, and the human edge.
                    </p>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
<h3 className="text-3xl font-bold text-white mb-2 tracking-tight">1</h3>
<p className="text-xs text-gray-400 group-hover:text-gray-300 font-light tracking-wide">
                        Full Day of High Impact Sessions driven by industry leaders.
                    </p>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
<h3 className="text-3xl font-bold text-white mb-2 tracking-tight">5k+</h3>
<p className="text-xs text-gray-400 group-hover:text-gray-300 font-light tracking-wide">
                        Visitors and online viewers expected to join the conversation.
                    </p>
</div>
<div className="glass-panel p-6 rounded-xl hover:bg-white/5 transition-colors group">
<h3 className="text-3xl font-bold text-white mb-2 tracking-tight">30+</h3>
<p className="text-xs text-gray-400 group-hover:text-gray-300 font-light tracking-wide">
                        Global and National Speakers sharing groundbreaking insights.
                    </p>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32 relative z-10" id="agenda">
<div className="border-t border-white/10 pt-16">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 md:mb-0 uppercase">Agenda</h2>
<p className="text-gray-400 max-w-md text-right text-sm tracking-wide">A packed schedule designed to inspire.</p>
</div>
<div className="w-full bg-white/5 border border-white/10 rounded-2xl p-12 text-center min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-md">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
<i className="w-12 h-12 text-violet-500 mb-6" data-lucide="clock"></i>
<h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Agenda Placeholder</h3>
<p className="text-gray-500 text-xs tracking-widest uppercase">Timewise Breakdown to be populated</p>
<div className="w-full max-w-2xl mt-12 space-y-4 opacity-30">
<div className="h-2 w-full bg-white/20 rounded-full"></div>
<div className="h-2 w-3/4 bg-white/20 rounded-full"></div>
<div className="h-2 w-5/6 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32 relative z-10" id="speakers">
<h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-12 text-center uppercase">World Class Speakers</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-900 border border-white/10 relative mb-4">
<div className="absolute inset-0 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
<div className="text-center p-4">
<i className="w-8 h-8 text-gray-600 mx-auto mb-2" data-lucide="user"></i>
<span className="block text-[10px] font-bold tracking-widest text-gray-500 border border-gray-800 bg-black/50 px-2 py-1 rounded uppercase">
                                    AI Video Placeholder
                                </span>
</div>
</div>
</div>
<h3 className="text-base font-bold text-white uppercase tracking-wide">Speaker Name</h3>
<p className="text-xs text-gray-500 tracking-wide">Designation, Company</p>
</div>
<div className="group relative">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-900 border border-white/10 relative mb-4">
<div className="absolute inset-0 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
<div className="text-center p-4">
<i className="w-8 h-8 text-gray-600 mx-auto mb-2" data-lucide="user"></i>
<span className="block text-[10px] font-bold tracking-widest text-gray-500 border border-gray-800 bg-black/50 px-2 py-1 rounded uppercase">
                                    AI Video Placeholder
                                </span>
</div>
</div>
</div>
<h3 className="text-base font-bold text-white uppercase tracking-wide">Speaker Name</h3>
<p className="text-xs text-gray-500 tracking-wide">Designation, Company</p>
</div>
<div className="group relative">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-900 border border-white/10 relative mb-4">
<div className="absolute inset-0 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
<div className="text-center p-4">
<i className="w-8 h-8 text-gray-600 mx-auto mb-2" data-lucide="user"></i>
<span className="block text-[10px] font-bold tracking-widest text-gray-500 border border-gray-800 bg-black/50 px-2 py-1 rounded uppercase">
                                    AI Video Placeholder
                                </span>
</div>
</div>
</div>
<h3 className="text-base font-bold text-white uppercase tracking-wide">Speaker Name</h3>
<p className="text-xs text-gray-500 tracking-wide">Designation, Company</p>
</div>
<div className="group relative">
<div className="aspect-[3/4] rounded-xl overflow-hidden bg-gray-900 border border-white/10 relative mb-4">
<div className="absolute inset-0 flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors">
<div className="text-center p-4">
<i className="w-8 h-8 text-gray-600 mx-auto mb-2" data-lucide="user"></i>
<span className="block text-[10px] font-bold tracking-widest text-gray-500 border border-gray-800 bg-black/50 px-2 py-1 rounded uppercase">
                                    AI Video Placeholder
                                </span>
</div>
</div>
</div>
<h3 className="text-base font-bold text-white uppercase tracking-wide">Speaker Name</h3>
<p className="text-xs text-gray-500 tracking-wide">Designation, Company</p>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32 relative z-10">
<div className="bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-3xl p-8 md:p-20 text-center backdrop-blur-md">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-8 uppercase">Why Join Innovare’X 2026?</h2>
<div className="space-y-6 text-base md:text-lg text-gray-300 font-light leading-relaxed tracking-wide">
<p>
                            Innovare’X isn't just a conference; it's a convergence of the most forward-thinking minds in technology.
                        </p>
<p>
                            We are building a platform that goes beyond passive listening. Expect immersive experiences, deep-dive workshops, and networking opportunities that actually convert into partnerships. Whether you are a startup founder, an enterprise leader, or a tech enthusiast, this is where the future is written.
                        </p>
</div>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32 relative z-10">
<h2 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4 uppercase tracking-widest">Opportunities</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full lg:col-span-2 group hover:border-violet-500/30 transition-colors">
<div>
<div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center mb-6 text-violet-300 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="handshake"></i>
</div>
<h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Partner with Innovare’X 2026</h3>
<p className="text-sm text-gray-400 mb-6 font-light">Align your brand with the future of technology. Strategic partnerships offer high-visibility branding and exclusive access.</p>
<ul className="text-xs text-gray-500 space-y-2 mb-8 tracking-wide font-medium">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-500" data-lucide="check"></i> Co-branded sessions</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-violet-500" data-lucide="check"></i> VIP Networking Access</li>
</ul>
</div>
<a className="text-white text-xs font-bold uppercase hover:underline tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Learn more <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full group hover:border-pink-500/30 transition-colors">
<div>
<div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-6 text-pink-300 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="gem"></i>
</div>
<h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Become a Summit Sponsor</h3>
<p className="text-xs text-gray-400 mb-4 font-light">Showcase your commitment to innovation. Multiple tiers available.</p>
</div>
<a className="text-white text-xs font-bold uppercase hover:underline tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Get Sponsor Kit <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full group hover:border-blue-500/30 transition-colors">
<div>
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-6 text-blue-300 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="mic"></i>
</div>
<h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Become a Speaker</h3>
<p className="text-xs text-gray-400 mb-4 font-light">Share your insights on the main stage. Call for papers open.</p>
</div>
<a className="text-white text-xs font-bold uppercase hover:underline tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Apply to speak <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full group hover:border-orange-500/30 transition-colors">
<div>
<div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-6 text-orange-300 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</div>
<h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Exhibit at the Expo</h3>
<p className="text-xs text-gray-400 mb-4 font-light">Demo your product to 5000+ attendees. Booths available now.</p>
</div>
<a className="text-white text-xs font-bold uppercase hover:underline tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Book a booth <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col justify-between h-full group hover:border-green-500/30 transition-colors">
<div>
<div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-6 text-green-300 group-hover:scale-110 transition-transform">
<i className="w-5 h-5" data-lucide="book-open"></i>
</div>
<h3 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Host a Workshop</h3>
<p className="text-xs text-gray-400 mb-4 font-light">Lead a masterclass. Deep dive into specific technologies.</p>
</div>
<a className="text-white text-xs font-bold uppercase hover:underline tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Propose topic <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32 relative z-10">
<p className="text-center text-xs text-gray-500 mb-8 uppercase tracking-[0.2em] font-bold">Trusted by Previous Partners</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-lg font-bold text-white flex items-center gap-2 tracking-widest"><div className="w-6 h-6 bg-white rounded-full"></div> ACME</div>
<div className="text-lg font-bold text-white flex items-center gap-2 tracking-widest"><div className="w-6 h-6 bg-white/50 rounded-sm"></div> APEX</div>
<div className="text-lg font-bold text-white flex items-center gap-2 tracking-widest"><div className="w-6 h-6 border border-white rounded-full"></div> ORBIT</div>
<div className="text-lg font-bold text-white flex items-center gap-2 tracking-widest"><div className="w-6 h-6 bg-white rotate-45"></div> FLUX</div>
<div className="text-lg font-bold text-white flex items-center gap-2 tracking-widest"><div className="w-6 h-6 border-2 border-white rounded-md"></div> WAVE</div>
<div className="text-lg font-bold text-white flex items-center gap-2 tracking-widest"><div className="w-6 h-6 bg-gradient-to-tr from-white to-gray-500 rounded-full"></div> CORE</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32 relative z-10">
<div className="text-center mb-16">
<span className="text-violet-400 text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Recognition</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">Award Night Categories</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">

<div className="bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors relative group">
<div className="absolute inset-0 bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-6 text-violet-400 relative z-10">
<i className="w-6 h-6" data-lucide="trophy"></i>
</div>
<h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide relative z-10">AI Startup Awards</h3>
<ul className="space-y-3 text-gray-400 text-xs tracking-wide font-medium relative z-10">
<li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-violet-500 block"></span> Best GenAI Solution</li>
<li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-violet-500 block"></span> Innovator of the Year</li>
<li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-violet-500 block"></span> Bootstrapped Hero</li>
</ul>
</div>

<div className="bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors relative group">
<div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400 relative z-10">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide relative z-10">Enterprise Impact Awards</h3>
<ul className="space-y-3 text-gray-400 text-xs tracking-wide font-medium relative z-10">
<li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 block"></span> Digital Transformation Lead</li>
<li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 block"></span> AI Implementation at Scale</li>
<li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-cyan-500 block"></span> Sustainability in Tech</li>
</ul>
</div>

<div className="bg-[#050505] p-8 hover:bg-[#0a0a0a] transition-colors relative group">
<div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400 relative z-10">
<i className="w-6 h-6" data-lucide="medal"></i>
</div>
<h3 className="text-lg font-bold text-white mb-4 uppercase tracking-wide relative z-10">Tech Leadership Awards</h3>
<ul className="space-y-3 text-gray-400 text-xs tracking-wide font-medium relative z-10">
<li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 block"></span> CTO of the Year</li>
<li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 block"></span> Emerging Tech Leader</li>
<li className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 block"></span> Women in Tech Excellence</li>
</ul>
</div>
</div>
</section>

<section className="max-w-[1440px] mx-auto px-6 mb-32 relative z-10">
<h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-wide">Honorable Jury</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center flex flex-col items-center justify-center aspect-square hover:bg-white/10 transition-colors">
<div className="w-20 h-20 rounded-full bg-white/10 mb-4 animate-pulse"></div>
<p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Jury Member</p>
<p className="text-[10px] text-gray-600 uppercase mt-1">To Be Updated</p>
</div>
<div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center flex flex-col items-center justify-center aspect-square hover:bg-white/10 transition-colors">
<div className="w-20 h-20 rounded-full bg-white/10 mb-4 animate-pulse"></div>
<p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Jury Member</p>
<p className="text-[10px] text-gray-600 uppercase mt-1">To Be Updated</p>
</div>
<div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center flex flex-col items-center justify-center aspect-square hover:bg-white/10 transition-colors">
<div className="w-20 h-20 rounded-full bg-white/10 mb-4 animate-pulse"></div>
<p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Jury Member</p>
<p className="text-[10px] text-gray-600 uppercase mt-1">To Be Updated</p>
</div>
<div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center flex flex-col items-center justify-center aspect-square hover:bg-white/10 transition-colors">
<div className="w-20 h-20 rounded-full bg-white/10 mb-4 animate-pulse"></div>
<p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Jury Member</p>
<p className="text-[10px] text-gray-600 uppercase mt-1">To Be Updated</p>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 relative z-10">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-5 h-5 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-400"></div>
<span className="text-xs font-bold text-white uppercase tracking-wider">Innovare’X 2026</span>
</div>
<p className="text-xs text-gray-500 mb-4 font-bold uppercase tracking-widest">Unwire. Unplug. Unleash.</p>
<div className="flex gap-4 text-gray-400">
<i className="w-5 h-5 cursor-pointer hover:text-white transition-colors" data-lucide="twitter"></i>
<i className="w-5 h-5 cursor-pointer hover:text-white transition-colors" data-lucide="linkedin"></i>
<i className="w-5 h-5 cursor-pointer hover:text-white transition-colors" data-lucide="instagram"></i>
</div>
</div>

<div>
<h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Sponsorship &amp; Exhibition</h4>
<div className="space-y-2 text-xs text-gray-400 tracking-wide font-medium">
<p className="font-bold text-gray-300">Vishal Parashar</p>
<p>+91 7217818206</p>
<a className="hover:text-violet-400 transition-colors" href="mailto:vishal.parashar@mastersunion.org">vishal.parashar@mastersunion.org</a>
</div>
</div>

<div>
<h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">Speaker Inquiries</h4>
<div className="space-y-2 text-xs text-gray-400 tracking-wide font-medium">
<p className="font-bold text-gray-300">Akshat Ghai</p>
<p>+91 7428 183 813</p>
<a className="hover:text-violet-400 transition-colors" href="mailto:akshat.ghai@mastersunion.org">akshat.ghai@mastersunion.org</a>
</div>
</div>

<div>
<h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">General Conference</h4>
<div className="space-y-2 text-xs text-gray-400 tracking-wide font-medium">
<p className="font-bold text-gray-300">Wani</p>
<a className="hover:text-violet-400 transition-colors" href="mailto:tasaduq.wani@mastersunion.org">tasaduq.wani@mastersunion.org</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 font-medium tracking-wide uppercase">
<p>© 2026 Innovare’X. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-gray-400" href="#">Terms of Service</a>
<a className="hover:text-gray-400" href="#">Code of Conduct</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
