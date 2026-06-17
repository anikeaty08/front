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



        // Smooth scroll implementation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
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
      

<div className="noise-overlay"></div>

<div className="fixed top-0 left-0 w-full h-screen overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[var(--blush)] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
<div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[var(--amber)] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-[var(--twilight)] rounded-full mix-blend-multiply filter blur-[100px] opacity-[0.08] animate-float" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-[var(--ink)]/5 backdrop-blur-md bg-[var(--cream)]/80">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-sans-custom font-bold text-xl tracking-tight gradient-text group flex items-center gap-2" href="#">
<span className="iconify text-[var(--twilight)]" data-icon="lucide:aperture" data-width="24" style={{strokeWidth: '1.5'}}></span>
                Wild Pixels
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium font-sans-custom text-[var(--ink)]/70">
<a className="hover:text-[var(--twilight)] transition-colors" href="#work">Work</a>
<a className="hover:text-[var(--twilight)] transition-colors" href="#studio">Studio</a>
<a className="hover:text-[var(--twilight)] transition-colors" href="#services">Services</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex font-sans-custom text-xs font-semibold uppercase tracking-widest px-5 py-2.5 border border-[var(--ink)]/10 rounded-full hover:border-[var(--coral)] hover:text-[var(--coral)] transition-all bg-white/50" href="#contact">
                    Let's Talk
                </a>
<button className="md:hidden text-[var(--ink)]">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--twilight)]/5 text-[var(--twilight)] text-xs font-sans-custom font-semibold tracking-wide mb-8 border border-[var(--twilight)]/10">
<span className="w-1.5 h-1.5 rounded-full bg-[var(--coral)]"></span>
                    Digital Alchemy
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] mb-8 font-sans-custom font-semibold text-[var(--ink)]">
                    We craft digital <br/>
<span className="italic font-serif font-normal text-[var(--coral)]">daydreams</span> with <br/>
                    analog soul.
                </h1>
<p className="text-lg md:text-xl text-[var(--ink)]/70 max-w-xl leading-relaxed mb-10">
                    Wild Pixels is an inventive creative agency blending modern precision with the warmth of the past. We build brands that feel human in a digital world.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="font-sans-custom font-semibold text-sm bg-[var(--twilight)] text-[var(--cream)] px-8 py-3.5 rounded-full hover:bg-[var(--coral)] transition-colors shadow-lg shadow-[var(--twilight)]/10 flex items-center gap-2">
                        Start a Project
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="font-sans-custom font-semibold text-sm px-8 py-3.5 rounded-full border border-[var(--ink)]/10 hover:bg-white transition-colors flex items-center gap-2 text-[var(--ink)]/80">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                        Showreel
                    </button>
</div>
</div>

<div className="md:col-span-4 relative hidden md:block">
<div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-[var(--ink)]/5 shadow-2xl bg-white/20 backdrop-blur-sm group">

<div className="absolute inset-0 bg-[var(--amber)]/10 z-10 mix-blend-multiply pointer-events-none"></div>
<div className="absolute inset-0 halftone-pattern opacity-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-tr from-[var(--twilight)] to-[var(--coral)] rounded-full blur-xl opacity-80 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-md rounded-lg border border-white/40 shadow-sm z-20">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-sans-custom font-semibold text-[var(--ink)]">Texture.vhs</span>
<span className="iconify text-[var(--ink)]/40" data-icon="lucide:layers" data-width="14"></span>
</div>
<div className="h-1 w-full bg-[var(--ink)]/10 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-[var(--coral)]"></div>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="w-full bg-[var(--twilight)] text-[var(--cream)] py-4 overflow-hidden border-y border-[var(--ink)]/10 relative z-10">
<div className="whitespace-nowrap flex items-center gap-12 animate-scroll font-sans-custom text-sm font-semibold tracking-widest uppercase opacity-80">

<span>Brand Identity</span> <span className="iconify text-[var(--coral)]" data-icon="lucide:sparkles" data-width="14"></span>
<span>Web Design</span> <span className="iconify text-[var(--coral)]" data-icon="lucide:sparkles" data-width="14"></span>
<span>Art Direction</span> <span className="iconify text-[var(--coral)]" data-icon="lucide:sparkles" data-width="14"></span>
<span>Development</span> <span className="iconify text-[var(--coral)]" data-icon="lucide:sparkles" data-width="14"></span>
<span>Motion</span> <span className="iconify text-[var(--coral)]" data-icon="lucide:sparkles" data-width="14"></span>
<span>Brand Identity</span> <span className="iconify text-[var(--coral)]" data-icon="lucide:sparkles" data-width="14"></span>
<span>Web Design</span> <span className="iconify text-[var(--coral)]" data-icon="lucide:sparkles" data-width="14"></span>
<span>Art Direction</span> <span className="iconify text-[var(--coral)]" data-icon="lucide:sparkles" data-width="14"></span>
<span>Development</span> <span className="iconify text-[var(--coral)]" data-icon="lucide:sparkles" data-width="14"></span>
<span>Motion</span> <span className="iconify text-[var(--coral)]" data-icon="lucide:sparkles" data-width="14"></span>
</div>
</div>

<section className="py-24 px-6 relative z-10" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-sans-custom font-semibold text-[var(--ink)] tracking-tight mb-4">Selected Works</h2>
<p className="text-[var(--ink)]/60 font-serif italic text-lg">Curated artifacts from the digital frontier.</p>
</div>
<a className="font-sans-custom text-sm font-semibold text-[var(--twilight)] hover:text-[var(--coral)] transition-colors flex items-center gap-1" href="#">
                    View Archive <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-6 border border-[var(--ink)]/5 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">

<div className="absolute inset-0 bg-[#E8E6E1]"></div>
<div className="absolute inset-8 border border-[var(--ink)]/10 flex items-center justify-center bg-white/40 backdrop-blur-sm">
<div className="text-center">
<span className="iconify text-[var(--coral)] w-12 h-12 mb-4 mx-auto" data-icon="lucide:mountain-snow"></span>
<span className="block font-sans-custom font-bold text-[var(--ink)] tracking-tight text-xl">Alpine Ventures</span>
</div>
</div>
<div className="absolute inset-0 bg-[var(--twilight)]/0 group-hover:bg-[var(--twilight)]/5 transition-colors duration-300"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-sans-custom font-semibold text-[var(--ink)] mb-1 group-hover:text-[var(--coral)] transition-colors">Alpine Ventures</h3>
<p className="text-[var(--ink)]/60 text-sm font-sans-custom">Rebranding / Web Design</p>
</div>
<span className="iconify text-[var(--ink)]/30 group-hover:text-[var(--coral)] transition-colors" data-icon="lucide:arrow-right" data-width="24"></span>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-6 border border-[var(--ink)]/5 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
<div className="absolute inset-0 bg-[#2E2E2E]"></div>
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[var(--coral)] to-transparent opacity-30"></div>
<div className="absolute inset-8 flex items-center justify-center">
<div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center relative">
<div className="w-16 h-16 rounded-full bg-[var(--amber)] blur-md absolute opacity-60"></div>
<span className="iconify text-white relative z-10" data-icon="lucide:music" data-width="32"></span>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-sans-custom font-semibold text-[var(--ink)] mb-1 group-hover:text-[var(--coral)] transition-colors">Echo Magazine</h3>
<p className="text-[var(--ink)]/60 text-sm font-sans-custom">Digital Editorial / Interaction</p>
</div>
<span className="iconify text-[var(--ink)]/30 group-hover:text-[var(--coral)] transition-colors" data-icon="lucide:arrow-right" data-width="24"></span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-6 border border-[var(--ink)]/5 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
<div className="absolute inset-0 bg-[var(--blush)]"></div>
<div className="halftone-pattern absolute inset-0 opacity-20"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--twilight)]/20 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center">
<h4 className="font-serif text-5xl text-[var(--twilight)] italic opacity-90">Velour.</h4>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-sans-custom font-semibold text-[var(--ink)] mb-1 group-hover:text-[var(--coral)] transition-colors">Velour Skincare</h3>
<p className="text-[var(--ink)]/60 text-sm font-sans-custom">Packaging / Commerce</p>
</div>
<span className="iconify text-[var(--ink)]/30 group-hover:text-[var(--coral)] transition-colors" data-icon="lucide:arrow-right" data-width="24"></span>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden mb-6 border border-[var(--ink)]/5 shadow-sm transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
<div className="absolute inset-0 bg-white"></div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: '0.05'}}></div>
<div className="absolute inset-12 border-2 border-[var(--coral)] rounded-full flex items-center justify-center">
<span className="iconify text-[var(--twilight)]" data-icon="lucide:globe" data-width="48"></span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-sans-custom font-semibold text-[var(--ink)] mb-1 group-hover:text-[var(--coral)] transition-colors">Global Canvas</h3>
<p className="text-[var(--ink)]/60 text-sm font-sans-custom">Non-Profit Identity</p>
</div>
<span className="iconify text-[var(--ink)]/30 group-hover:text-[var(--coral)] transition-colors" data-icon="lucide:arrow-right" data-width="24"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[var(--twilight)] text-[var(--cream)] relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--coral)] rounded-full mix-blend-screen filter blur-[120px] opacity-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--blush)] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid md:grid-cols-2 gap-16 mb-20">
<h2 className="text-4xl md:text-6xl font-sans-custom font-semibold tracking-tight">
                    Inventive strategies <br/>
                    for the bold.
                </h2>
<div className="flex flex-col justify-end">
<p className="text-xl font-serif text-[var(--cream)]/80 leading-relaxed">
                        We don't just pixel-push. We weave narratives, design systems, and digital experiences that feel collected, not just constructed.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--cream)]/10 border border-[var(--cream)]/10 rounded-2xl overflow-hidden">

<div className="bg-[var(--twilight)] p-10 hover:bg-[#2A2655] transition-colors group">
<div className="w-12 h-12 rounded-lg bg-[var(--coral)]/10 flex items-center justify-center mb-8 text-[var(--coral)] group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:palette" data-width="24"></span>
</div>
<h3 className="text-xl font-sans-custom font-semibold mb-3">Brand Identity</h3>
<p className="text-[var(--cream)]/60 text-sm leading-relaxed">
                        Visual systems that speak volumes. From logos to comprehensive guidelines.
                    </p>
</div>

<div className="bg-[var(--twilight)] p-10 hover:bg-[#2A2655] transition-colors group">
<div className="w-12 h-12 rounded-lg bg-[var(--amber)]/10 flex items-center justify-center mb-8 text-[var(--amber)] group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:monitor" data-width="24"></span>
</div>
<h3 className="text-xl font-sans-custom font-semibold mb-3">Digital Design</h3>
<p className="text-[var(--cream)]/60 text-sm leading-relaxed">
                        Websites and apps with tactile interfaces and fluid interactions.
                    </p>
</div>

<div className="bg-[var(--twilight)] p-10 hover:bg-[#2A2655] transition-colors group">
<div className="w-12 h-12 rounded-lg bg-[var(--blush)]/10 flex items-center justify-center mb-8 text-[var(--blush)] group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-xl font-sans-custom font-semibold mb-3">Creative Direction</h3>
<p className="text-[var(--cream)]/60 text-sm leading-relaxed">
                        Guiding the vision from spark to launch with adventurous spirit.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-b border-[var(--ink)]/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
<div>
<p className="text-xs font-sans-custom font-bold tracking-widest uppercase text-[var(--ink)]/40 mb-2">Trusted By</p>
<div className="flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="iconify w-8 h-8" data-icon="lucide:triangle"></span>
<span className="iconify w-8 h-8" data-icon="lucide:circle"></span>
<span className="iconify w-8 h-8" data-icon="lucide:square"></span>
<span className="iconify w-8 h-8" data-icon="lucide:hexagon"></span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<span className="block text-4xl font-sans-custom font-bold text-[var(--ink)] mb-1">85+</span>
<span className="text-sm text-[var(--ink)]/60 font-medium">Projects Launched</span>
</div>
<div>
<span className="block text-4xl font-sans-custom font-bold text-[var(--ink)] mb-1">12</span>
<span className="text-sm text-[var(--ink)]/60 font-medium">Awards Won</span>
</div>
<div className="hidden md:block">
<span className="block text-4xl font-sans-custom font-bold text-[var(--ink)] mb-1">100%</span>
<span className="text-sm text-[var(--ink)]/60 font-medium">Analog Soul</span>
</div>
</div>
</div>
</section>

<footer className="pt-32 pb-12 px-6 relative overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto relative z-10">
<div className="max-w-3xl mb-24">
<h2 className="text-5xl md:text-7xl font-sans-custom font-semibold tracking-tighter text-[var(--ink)] mb-8">
                    Ready to get <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--coral)] to-[var(--blush)]">Wild?</span>
</h2>
<p className="text-xl md:text-2xl font-serif text-[var(--ink)]/70 mb-10">
                    Let's build something inventive together. Drop us a line or send a carrier pigeon.
                </p>
<a className="inline-flex items-center gap-3 bg-[var(--ink)] text-[var(--cream)] px-8 py-4 rounded-full font-sans-custom font-semibold hover:bg-[var(--coral)] hover:scale-105 transition-all duration-300" href="mailto:hello@wildpixels.agency">
                    Start a Conversation
                    <span className="iconify" data-icon="lucide:send" data-width="18"></span>
</a>
</div>
<div className="grid md:grid-cols-4 gap-12 border-t border-[var(--ink)]/10 pt-12">
<div className="md:col-span-1">
<a className="font-sans-custom font-bold text-xl tracking-tight gradient-text mb-4 inline-block" href="#">
                        Wild Pixels
                    </a>
<p className="text-sm text-[var(--ink)]/50">
                        © 2024 Wild Pixels Agency.<br/>
                        Crafted with soul.
                    </p>
</div>
<div>
<h4 className="font-sans-custom font-bold text-sm uppercase tracking-widest text-[var(--ink)]/40 mb-4">Socials</h4>
<ul className="space-y-2 text-sm font-medium text-[var(--ink)]/70">
<li><a className="hover:text-[var(--coral)] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[var(--coral)] transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-[var(--coral)] transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-[var(--coral)] transition-colors" href="#">Dribbble</a></li>
</ul>
</div>
<div>
<h4 className="font-sans-custom font-bold text-sm uppercase tracking-widest text-[var(--ink)]/40 mb-4">Sitemap</h4>
<ul className="space-y-2 text-sm font-medium text-[var(--ink)]/70">
<li><a className="hover:text-[var(--coral)] transition-colors" href="#">Work</a></li>
<li><a className="hover:text-[var(--coral)] transition-colors" href="#">Services</a></li>
<li><a className="hover:text-[var(--coral)] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[var(--coral)] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-sans-custom font-bold text-sm uppercase tracking-widest text-[var(--ink)]/40 mb-4">Location</h4>
<p className="text-sm text-[var(--ink)]/70">
                        123 Twilight Ave,<br/>
                        Creative District,<br/>
                        NY 10012
                    </p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[var(--blush)]/20 via-transparent to-transparent -z-10 pointer-events-none"></div>
</footer>


    </>
  );
}
