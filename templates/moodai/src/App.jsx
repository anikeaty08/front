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
const parallaxImages = document.querySelectorAll('.parallax-image');
const parallaxFloaters = document.querySelectorAll('[data-speed]');
let lastScrollY = window.scrollY;
let ticking = false;
function updateParallax() {
const scrollY = window.scrollY;
const windowHeight = window.innerHeight;
// Image Window Effect (Image moves inside container)
parallaxImages.forEach(img => {
const container = img.parentElement;
const rect = container.getBoundingClientRect();
// Only animate if in viewport (with buffer)
if (rect.top < windowHeight && rect.bottom > 0) {
// Calculate percentage of scroll through the element
const centerPosition = (rect.top + rect.height / 2) - (windowHeight / 2);
const intensity = 0.15; // Speed factor
const y = centerPosition * intensity;
img.style.transform = `translate3d(0, ${y}px, 0)`;
}
});
// Floating Element Effect (Elements move faster/slower than scroll)
parallaxFloaters.forEach(el => {
// Disable parallax for floaters on small screens to prevent layout shifting
if (window.innerWidth < 768) {
el.style.transform = 'none';
return;
}
const rect = el.getBoundingClientRect();
const speed = parseFloat(el.getAttribute('data-speed'));
if (rect.top < windowHeight && rect.bottom > 0) {
const centerPosition = (rect.top + rect.height / 2) - (windowHeight / 2);
const y = centerPosition * speed * 0.1;
el.style.transform = `translate3d(0, ${y}px, 0)`;
}
});
ticking = false;
}
window.addEventListener('scroll', () => {
lastScrollY = window.scrollY;
if (!ticking) {
window.requestAnimationFrame(updateParallax);
ticking = true;
}
}, { passive: true });
// Initial call
updateParallax();
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 bg-black/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

<a className="group flex flex-col items-start gap-1" href="#">
<div className="text-2xl tracking-tight leading-none text-white">
<span className="font-semibold">MOOD</span> <span className="font-light text-neutral-300">STUDIOS AI</span>
</div>
<div className="h-1 w-full bg-gradient-to-r from-orange-500 via-purple-600 to-blue-500 rounded-full opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-medium bg-white text-black px-5 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">Get in touch</a>
</div>
<button className="md:hidden text-white flex items-center">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="video-docker" data-speed="0.5"> 
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="opacity-50" frameborder="0" src="https://www.youtube.com/embed/j61ALLKPtfk?autoplay=1&amp;mute=1&amp;controls=0&amp;loop=1&amp;playlist=j61ALLKPtfk&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;enablejsapi=1&amp;disablekb=1">
</iframe>
</div>

<div className="relative z-20 max-w-7xl mx-auto px-6 text-center" data-speed="-0.3">
<div className="reveal-load">
<span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-wide text-neutral-400 mb-6 backdrop-blur-md">
                    THE NEXT ERA OF VISUAL STORYTELLING
                </span>
</div>
<h1 className="reveal-load delay-100 text-5xl md:text-7xl lg:text-9xl font-semibold text-white tracking-tight leading-[0.9] mb-8">
                Forget the rules.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-600 to-blue-500 animate-gradient-text">Follow the Mood.</span>
</h1>
<p className="reveal-load delay-200 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 font-light">
                Mood Studios AI fuses human taste with algorithmic power to create campaign visuals that feel intentional, cinematic, and culturally relevant.
            </p>
<div className="reveal-load delay-300 flex flex-col md:flex-row gap-4 justify-center items-center">
<a className="group relative px-8 py-4 bg-white text-black rounded-full font-medium overflow-hidden transition-all hover:pr-10 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="#work">
<span className="relative z-10 flex items-center gap-2">
                        View Projects 
                        <iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</a>
<a className="px-8 py-4 text-white border border-white/20 rounded-full font-medium hover:bg-white/5 transition-colors" href="#about">
                    Studio Philosophy
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse z-20">
<iconify-icon className="text-neutral-500" height="28" icon="solar:alt-arrow-down-linear" width="28"></iconify-icon>
</div>
</header>

<section className="py-32 bg-black relative z-10" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16" data-speed="0.1">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">Selected Works</h2>
<a className="hidden md:flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-lg group" href="#">
                    Full Archive <iconify-icon className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">

<div className="group relative overflow-hidden rounded-sm cursor-pointer mb-8 md:mb-0">
<div className="aspect-[4/5] parallax-wrapper overflow-hidden bg-neutral-900 rounded-sm">
<img alt="Editorial" className="parallax-image group-hover:opacity-100 transition-opacity duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f150c47-9677-4133-a5f3-714b0267ff73_1600w.jpg"/>
</div>
<div className="group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/90 to-transparent w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 translate-y-4">
<div className="text-xs text-orange-400 font-medium mb-2 tracking-wider uppercase">Campaign</div>
<h3 className="text-2xl font-medium text-white">Moon Boots</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-sm cursor-pointer md:mt-32">
<div className="aspect-[4/5] parallax-wrapper overflow-hidden bg-neutral-900 rounded-sm">
<img alt="Abstract Art" className="parallax-image opacity-80 group-hover:opacity-100 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73e87bbd-563c-4c73-8b8d-e5a9d9f17ec6_1600w.png"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
<div className="text-xs text-purple-400 font-medium mb-2 tracking-wider uppercase">Motion</div>
<h3 className="text-2xl font-medium text-white">David Yurman</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-sm cursor-pointer -mt-8 md:mt-0">
<div className="aspect-[4/5] parallax-wrapper overflow-hidden bg-neutral-900 rounded-sm">
<img alt="Fashion Show" className="parallax-image opacity-80 group-hover:opacity-100 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81de519e-4924-4f8b-9432-61c42cbf5da7_800w.png" style={{height: '115%', top: '-7.5%', objectPosition: 'center top'}}/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
<div className="text-xs text-blue-400 font-medium mb-2 tracking-wider uppercase">Virtual Models</div>
<h3 className="text-2xl font-medium text-white">Fenty</h3>
</div>
</div>

<div className="group relative overflow-hidden rounded-sm cursor-pointer md:mt-32">
<div className="aspect-[4/5] parallax-wrapper overflow-hidden bg-neutral-900 rounded-sm">
<img alt="Beauty" className="parallax-image opacity-80 group-hover:opacity-100 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8eb8096a-1b2e-43ed-8991-a963feba9b38_1600w.png"/>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500 pointer-events-none">
<div className="text-xs text-white/70 font-medium mb-2 tracking-wider uppercase">Creative Direction</div>
<h3 className="text-2xl font-medium text-white">Dior</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-y border-white/5 relative z-10" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 lg:sticky lg:top-24">
<h2 className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500 tracking-wider uppercase mb-6" style={{}}>About the Studio</h2>
<h3 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-8 leading-tight">
                        Pioneering the <br/>
<span className="text-neutral-500">Digital Avant-Garde</span>
</h3>
<div className="h-1 w-24 bg-white/20"></div>
</div>
<div className="lg:col-span-7 space-y-12">
<p className="text-xl md:text-2xl text-neutral-300 leading-relaxed font-light" style={{}}>
                        Mood Studios AI exists to push creative direction and visual storytelling forward through the fusion of <span className="text-white font-normal" style={{}}>human taste and AI-powered production</span>. We build concept-driven imagery that feels intentional, cinematic, and culturally relevant.
                    </p>

<div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm group my-8">
<div className="parallax-wrapper h-full w-full">
<img alt="Studio Editorial" className="parallax-image object-cover w-full h-[140%] top-[-20%] grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8eb8096a-1b2e-43ed-8991-a963feba9b38_1600w.png"/>
</div>
<div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
<div className="absolute bottom-4 right-4 text-xs text-neutral-500 font-mono tracking-widest">FIG. 001 — PROCESS</div>
</div>
<p className="text-xl md:text-2xl text-neutral-400 leading-relaxed font-light" style={{}}>
                        Our work is designed to elevate brand campaigns and editorial projects beyond the expected. Every visual is guided by strong art direction, clarity of vision, and an obsession with detail.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-black pt-32 pb-32 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-20" data-speed="-0.1">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Our Capabilities</h2>
<p className="text-xl text-neutral-400">A full-stack creative suite for the modern fashion &amp; beauty industry.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-10 border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/50 hover:border-white/20 rounded-lg transition-all duration-300 transform hover:-translate-y-2">
<div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Campaign Visuals</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        High-fidelity still and motion assets generated for seasonal campaigns, lookbooks, and social content.
                    </p>
</div>

<div className="group p-10 border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/50 hover:border-white/20 rounded-lg transition-all duration-300 transform hover:-translate-y-2 md:mt-8">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Creative Direction</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Concept development and moodboarding powered by generative engines to establish unique visual languages.
                    </p>
</div>

<div className="group p-10 border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/50 hover:border-white/20 rounded-lg transition-all duration-300 transform hover:-translate-y-2">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:user-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-4">AI Virtual Models</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Diverse, hyper-realistic, or stylized virtual talent tailored perfectly to brand aesthetics and demographics.
                    </p>
</div>

<div className="group p-10 border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/50 hover:border-white/20 rounded-lg transition-all duration-300 transform hover:-translate-y-2 md:mt-8">
<div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500 mb-8 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Motion &amp; Short-Form</h3>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Scroll-stopping video generation and animation for TikTok, Reels, and digital out-of-home displays.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 border-t border-white/10 overflow-hidden relative z-10" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">

<div className="relative h-96 lg:h-auto overflow-hidden group parallax-wrapper">
<div className="absolute inset-0 bg-neutral-900 animate-pulse z-0"></div>

<img alt="Contact Visual" className="parallax-image opacity-80 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d8f9ff8a-65d0-4f77-b3a6-fa3e528fbdc8_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black via-black/50 to-transparent z-20"></div>

<div className="absolute bottom-0 left-0 p-8 lg:p-16 w-full z-30" data-speed="0.1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-wide">ACCEPTING NEW PROJECTS</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-none mb-4">
                        Let's definethe mood.
                    </h2>
<p className="text-neutral-300 text-lg max-w-md hidden lg:block">
                        Ready to elevate your visual identity? Fill out the form or drop us a line directly.
                    </p>
<div className="mt-8 space-y-2 hidden lg:block">
<a className="flex items-center gap-3 text-white hover:text-orange-400 transition-colors" href="mailto:hello@moodstudios.ai">
<iconify-icon height="20" icon="solar:letter-linear" width="20"></iconify-icon>
                            hello@moodstudios.ai
                        </a>
<div className="flex items-center gap-3 text-neutral-400">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
                            Los Angeles · New York · Paris
                        </div>
</div>
</div>
</div>

<div className="flex md:p-12 lg:p-20 bg-black pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">

<div className="absolute top-20 right-20 p-12 opacity-20 pointer-events-none" data-speed="-0.2">
<iconify-icon className="text-purple-500" height="120" icon="solar:stars-minimalistic-linear" width="120"></iconify-icon>
</div>
<div className="absolute bottom-20 left-10 p-12 opacity-10 pointer-events-none" data-speed="0.2">
<div className="w-32 h-32 rounded-full border border-white"></div>
</div>
<form className="w-full max-w-lg space-y-6 relative z-10 bg-black/50 backdrop-blur-sm p-6 md:p-0 rounded-xl">

<div className="lg:hidden mb-8">
<p className="text-neutral-400 text-sm mb-2">GOT A VISION?</p>
<h3 className="text-2xl font-semibold text-white">Start the conversation</h3>
</div>

<div className="group relative">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors" htmlFor="name">Full Name</label>
<div className="relative">
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all duration-300" id="name" placeholder="Jane Doe" type="text"/>
<div className="absolute right-4 top-3.5 text-neutral-700 group-focus-within:text-white transition-colors">
<iconify-icon height="20" icon="solar:user-circle-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors" htmlFor="email">Email Address</label>
<div className="relative">
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all duration-300" id="email" placeholder="jane@company.com" type="email"/>
<div className="absolute right-4 top-3.5 text-neutral-700 group-focus-within:text-white transition-colors">
<iconify-icon height="20" icon="solar:mention-circle-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors" htmlFor="type">Inquiry Type</label>
<div className="relative">
<select className="focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all duration-300 appearance-none text-white bg-neutral-900 w-full border-neutral-800 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="type">
<option>Campaign Production</option>
<option>Creative Direction</option>
<option>Virtual Models</option>
<option>Other</option>
</select>
<div className="absolute right-4 top-3.5 text-neutral-700 group-focus-within:text-white transition-colors pointer-events-none">
<iconify-icon height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative">
<label className="block text-xs font-medium text-neutral-500 uppercase tracking-widest mb-2 group-focus-within:text-white transition-colors" htmlFor="message">Your Vision</label>
<textarea className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white placeholder-neutral-700 focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all duration-300 resize-none" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>

<div className="pt-4">
<button className="group w-full relative overflow-hidden rounded-lg bg-white p-4 text-center font-semibold text-black transition-transform active:scale-[0.98]" type="submit">
<span className="relative z-10 flex items-center justify-center gap-2">
                                Send Inquiry
                                <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" height="20" icon="solar:plain-3-linear" width="20"></iconify-icon>
</span>
<div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-neutral-200 to-white transition-transform duration-500 group-hover:translate-x-0"></div>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="py-8 bg-black border-t border-neutral-900 relative z-20">
<div className="flex flex-col md:flex-row gap-4 text-xs text-neutral-600 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-bold text-neutral-400" style={{}}>MOOD</span> STUDIOS AI © 2024
            </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div></div></footer>
    </>
  );
}
