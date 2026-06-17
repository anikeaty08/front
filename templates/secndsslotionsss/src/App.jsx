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
      

<div className="fixed top-6 right-6 z-50 flex flex-col gap-4 items-end">

<div className="relative group">
<button className="w-10 h-10 rounded-full bg-[#0a1912]/60 backdrop-blur-md border border-white/10 hover:border-[#B6FF3C]/50 flex items-center justify-center text-white hover:text-[#B6FF3C] transition-colors">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="absolute right-0 top-12 w-64 bg-[#0a1912]/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-2xl shadow-black">
<p className="text-xs text-[#A0B3A8] uppercase tracking-wide mb-2">Admin Access</p>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm text-white/80 font-light">
<iconify-icon className="text-[#B6FF3C]" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate">rtfriderm@gmail.com</span>
</div>
<div className="flex items-center gap-2 text-sm text-white/80 font-light">
<iconify-icon className="text-[#B6FF3C]" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
<span>xxxxxxxx</span>
</div>
<a className="mt-3 block w-full text-center py-2 text-xs bg-[#B6FF3C]/10 text-[#B6FF3C] rounded-lg border border-[#B6FF3C]/20 hover:bg-[#B6FF3C]/20 transition-colors font-medium" href="#contact">Login to Dashboard</a>
</div>
</div>
</div>

<a className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white [box-shadow:0_0_15px_rgba(37,211,102,0.5)] hover:[box-shadow:0_0_25px_rgba(37,211,102,0.8)] hover:scale-105 transition-all duration-300 relative group" href="https://wa.me/918475046358" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute right-14 bg-[#050807]/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 font-light">Chat on WhatsApp</span>
</a>
</div>

<nav className="fixed top-0 w-full z-40 bg-[#050807]/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight text-[#B6FF3C] flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-[#B6FF3C] [box-shadow:0_0_10px_rgba(182,255,60,0.6)]"></span>
                HEMESH EDITOR
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-[#A0B3A8]">
<a className="hover:text-[#B6FF3C] transition-colors" href="#about">About</a>
<a className="hover:text-[#B6FF3C] transition-colors" href="#services">Services</a>
<a className="hover:text-[#B6FF3C] transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-[#B6FF3C] transition-colors" href="#pricing">Pricing</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[radial-gradient(circle_at_center,#0B1410_0%,#050807_100%)] [background-size:200%_200%] [animation:subtlePan_20s_ease_infinite]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B6FF3C] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0a1912]/60 backdrop-blur-md border border-[#b6ff3c]/15 text-xs text-[#B6FF3C] mb-8 font-medium animate-fade-in opacity-0">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B6FF3C] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#B6FF3C]"></span>
</span>
                Available for freelance work
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-tight mb-6 animate-fade-in delay-200 opacity-0">
                Hemesh Editor <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#A0B3A8] to-white text-4xl md:text-6xl lg:text-7xl [text-shadow:0_0_30px_rgba(255,255,255,0.1)]">Cinematic Video Editor</span>
</h1>
<p className="text-lg md:text-xl text-[#A0B3A8] max-w-2xl mx-auto mb-10 font-light tracking-wide animate-fade-in delay-400 opacity-0">
                Turning your vision into cinematic reality. Elevating brands and creators through high-end motion graphics, editing, and typography.
            </p>
<div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-fade-in delay-600 opacity-0">
<a className="group relative px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] text-white text-sm hover:bg-white/5 transition-all overflow-hidden flex items-center gap-2" href="#portfolio">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>View Portfolio</span>
</a>
<a className="group relative px-6 py-3 rounded-full bg-[#B6FF3C] text-[#050807] text-sm font-medium hover:scale-[1.02] transition-all [box-shadow:0_0_20px_rgba(182,255,60,0.2)] hover:[box-shadow:0_0_30px_rgba(182,255,60,0.4)] overflow-hidden flex items-center gap-2" href="#contact">
<iconify-icon className="text-lg" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<span>Hire Me</span>
</a>
</div>
<div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-800 opacity-0">
<a className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-white/80 text-xs hover:bg-white/10 hover:text-white transition-all font-light" href="https://youtube.com/@sb.tech.ax7?si=0VIsodl7vmKYDq9P" target="_blank">
<iconify-icon className="text-base" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
                    YouTube
                </a>
<a className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-white/80 text-xs hover:bg-white/10 hover:text-white transition-all font-light" href="https://instagram.com/__ankit_777r" target="_blank">
<iconify-icon className="text-base" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
                    Instagram
                </a>
<a className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-white/80 text-xs hover:bg-white/10 hover:text-white transition-all font-light" href="mailto:rtfriderm@gmail.com">
<iconify-icon className="text-base" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                    Email
                </a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
<span className="text-xs font-light tracking-widest text-[#A0B3A8] uppercase">Scroll</span>
<iconify-icon className="animate-bounce text-[#B6FF3C]" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</section>

<section className="py-24 relative z-10 border-t border-white/5" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-[#00FFC6]/10 to-[#B6FF3C]/10 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
<div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 p-2">
<div className="w-full h-full rounded-xl bg-[#0B1410] relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 opacity-40 mix-blend-luminosity bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent"></div>
<iconify-icon className="text-6xl text-[#A0B3A8] opacity-20" icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-10">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Architect of <span className="text-[#B6FF3C]">Visuals</span></h2>
<p className="text-[#A0B3A8] text-base font-light">Crafting stories through lenses and timelines.</p>
</div>
<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<span className="text-xs text-[#6B7F75] uppercase tracking-wide">Name</span>
<span className="text-sm font-medium">Hemesh Kumar</span>
</div>
<div className="flex justify-between items-center border-b border-white/5 pb-4">
<span className="text-xs text-[#6B7F75] uppercase tracking-wide">Education</span>
<span className="text-sm font-medium">BBA (F&amp;T), ADCA</span>
</div>
<div className="flex justify-between items-center pb-2">
<span className="text-xs text-[#6B7F75] uppercase tracking-wide">Highlights</span>
<span className="text-sm font-medium text-right max-w-[240px]">Worked with global creators &amp; emerging brands</span>
</div>
</div>
<div>
<p className="text-xs text-[#6B7F75] uppercase tracking-wide mb-4">Core Expertise</p>
<div className="flex flex-wrap gap-3">
<div className="px-4 py-2 rounded-lg bg-[#0a1912]/40 border border-[#b6ff3c]/10 text-xs font-light flex items-center gap-2">
<iconify-icon className="text-[#B6FF3C]" icon="solar:video-frame-linear" strokeWidth="1.5"></iconify-icon> Video Editing
                            </div>
<div className="px-4 py-2 rounded-lg bg-[#001916]/40 border border-[#00FFC6]/10 text-xs font-light flex items-center gap-2">
<iconify-icon className="text-[#00FFC6]" icon="solar:camera-add-linear" strokeWidth="1.5"></iconify-icon> Photography
                            </div>
<div className="px-4 py-2 rounded-lg bg-[#0a1912]/40 border border-[#b6ff3c]/10 text-xs font-light flex items-center gap-2">
<iconify-icon className="text-[#B6FF3C]" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon> Motion Graphics
                            </div>
<div className="px-4 py-2 rounded-lg bg-[#001916]/40 border border-[#00FFC6]/10 text-xs font-light flex items-center gap-2">
<iconify-icon className="text-[#00FFC6]" icon="solar:text-field-focus-linear" strokeWidth="1.5"></iconify-icon> Typography
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#0B1410] border-t border-white/5" id="services">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Professional <span className="text-[#B6FF3C]">Services</span></h2>
<p className="text-base font-light text-[#A0B3A8] max-w-xl mx-auto">High-end deliverables tailored for modern digital platforms.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-[#050807]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 overflow-hidden hover:bg-[#0a1912]/40 hover:border-[#b6ff3c]/20 transition-all duration-300 flex flex-col h-full">
<div className="mb-6 w-12 h-12 rounded-xl bg-white/[0.02] border border-[#B6FF3C]/20 flex items-center justify-center text-[#B6FF3C] group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:clapperboard-edit-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Cinematic Editing</h3>
<p className="text-sm font-light text-[#A0B3A8] mb-8 flex-grow">Color grading, seamless transitions, and narrative-driven cuts for YouTube &amp; Ads.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white">₹400</span>
<a className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-[#B6FF3C] hover:text-[#050807] hover:border-[#B6FF3C] transition-all" href="upi://pay?pa=8475046358@upi&amp;pn=Hemesh&amp;cu=INR&amp;am=400">
                            Order Now
                        </a>
</div>
</div>

<div className="group relative bg-[#050807]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 overflow-hidden hover:bg-[#001916]/40 hover:border-[#00FFC6]/20 transition-all duration-300 flex flex-col h-full">
<div className="mb-6 w-12 h-12 rounded-xl bg-white/[0.02] border border-[#00FFC6]/20 flex items-center justify-center text-[#00FFC6] group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Motion Graphics</h3>
<p className="text-sm font-light text-[#A0B3A8] mb-8 flex-grow">Custom animations, lower thirds, and dynamic visual effects to elevate your content.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white">₹500</span>
<a className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-[#00FFC6] hover:text-[#050807] hover:border-[#00FFC6] transition-all" href="upi://pay?pa=8475046358@upi&amp;pn=Hemesh&amp;cu=INR&amp;am=500">
                            Order Now
                        </a>
</div>
</div>

<div className="group relative bg-[#050807]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 overflow-hidden hover:bg-[#0a1912]/40 hover:border-[#b6ff3c]/20 transition-all duration-300 flex flex-col h-full">
<div className="mb-6 w-12 h-12 rounded-xl bg-white/[0.02] border border-[#B6FF3C]/20 flex items-center justify-center text-[#B6FF3C] group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:text-underline-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Typography</h3>
<p className="text-sm font-light text-[#A0B3A8] mb-8 flex-grow">Kinetic typography, animated subtitles, and stylish text overlays for maximum retention.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white">₹250</span>
<a className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-[#B6FF3C] hover:text-[#050807] hover:border-[#B6FF3C] transition-all" href="upi://pay?pa=8475046358@upi&amp;pn=Hemesh&amp;cu=INR&amp;am=250">
                            Order Now
                        </a>
</div>
</div>

<div className="group relative bg-[#050807]/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 overflow-hidden hover:bg-[#001916]/40 hover:border-[#00FFC6]/20 transition-all duration-300 flex flex-col h-full">
<div className="mb-6 w-12 h-12 rounded-xl bg-white/[0.02] border border-[#00FFC6]/20 flex items-center justify-center text-[#00FFC6] group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:gallery-wide-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Thumbnail Design</h3>
<p className="text-sm font-light text-[#A0B3A8] mb-8 flex-grow">High-CTR, eye-catching thumbnails designed to dominate algorithms and drive clicks.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-xl font-medium text-white">₹100</span>
<a className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-medium hover:bg-[#00FFC6] hover:text-[#050807] hover:border-[#00FFC6] transition-all" href="upi://pay?pa=8475046358@upi&amp;pn=Hemesh&amp;cu=INR&amp;am=100">
                            Order Now
                        </a>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-xs font-light text-[#6B7F75]">* Intro / Outro creation available upon request</p>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B6FF3C] to-[#00FFC6]">Works</span></h2>
<p className="text-base font-light text-[#A0B3A8]">A glimpse into recent cinematic projects.</p>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-[#B6FF3C]/10 text-[#B6FF3C] border border-[#B6FF3C]/20 text-xs font-medium transition-colors">All</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 text-[#A0B3A8] border border-white/5 text-xs hover:text-white transition-colors font-light">Editing</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 text-[#A0B3A8] border border-white/5 text-xs hover:text-white transition-colors font-light">Motion</button>
<button className="px-4 py-1.5 rounded-full bg-white/5 text-[#A0B3A8] border border-white/5 text-xs hover:text-white transition-colors font-light">Ads</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-video rounded-2xl overflow-hidden bg-[#0a1912]/20 border border-white/5 cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-90" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-[#B6FF3C]/30 flex items-center justify-center text-[#B6FF3C]">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-[#B6FF3C]">Cinematic</span>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">Urban Tech Brand Ad</h3>
</div>
</div>

<div className="group relative aspect-video rounded-2xl overflow-hidden bg-[#001916]/20 border border-white/5 cursor-pointer lg:col-span-2">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-90" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-[#00FFC6]/30 flex items-center justify-center text-[#00FFC6]">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-[#00FFC6]">Motion Graphics</span>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">Fintech App Explainer</h3>
</div>
</div>

<div className="group relative aspect-video rounded-2xl overflow-hidden bg-[#0a1912]/20 border border-white/5 cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-90" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-[#B6FF3C]/30 flex items-center justify-center text-[#B6FF3C]">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-[#B6FF3C]">Vlog Edit</span>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">Travel Series - Tokyo</h3>
</div>
</div>

<div className="group relative aspect-video rounded-2xl overflow-hidden bg-[#0a1912]/20 border border-white/5 cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-90" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-[#B6FF3C]/30 flex items-center justify-center text-[#B6FF3C]">
<iconify-icon icon="solar:gallery-wide-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-[#B6FF3C]">Thumbnail</span>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">High CTR Designs</h3>
</div>
</div>

<div className="group relative aspect-video rounded-2xl overflow-hidden bg-[#0a1912]/20 border border-white/5 cursor-pointer">
<div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-50 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-90" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050807] via-transparent to-transparent opacity-80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-[#B6FF3C]/30 flex items-center justify-center text-[#B6FF3C]">
<iconify-icon icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<div className="flex items-center gap-2 mb-2">
<span className="text-xs font-medium text-[#B6FF3C]">Effects</span>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">Gaming Montage VFX</h3>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/[0.02] text-sm hover:bg-white/5 transition-colors font-light" href="https://youtube.com/@sb.tech.ax7?si=0VIsodl7vmKYDq9P" target="_blank">
                    View More on YouTube <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 relative bg-[#0B1410] border-t border-white/5" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Transparent <span className="text-[#B6FF3C]">Pricing</span></h2>
<p className="text-base font-light text-[#A0B3A8] max-w-xl mx-auto">Straightforward tiers for standard projects. For custom requirements, contact directly.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 items-center">

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
<h3 className="text-lg font-medium tracking-tight text-[#A0B3A8] mb-2">Basic Editing</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight">₹400</span>
<span className="text-sm font-light text-[#6B7F75]">/video</span>
</div>
<ul className="space-y-4 mb-8 text-sm font-light text-[#A0B3A8]">
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFC6] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Basic Cuts &amp; Trims</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFC6] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Standard Color Grading</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFC6] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Simple Text Overlays</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFC6] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> 1 Revision</li>
</ul>
<a className="block w-full text-center py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium" href="upi://pay?pa=8475046358@upi&amp;pn=Hemesh&amp;cu=INR&amp;am=400">Pay Now</a>
</div>

<div className="bg-[#0a1912]/40 backdrop-blur-md border border-[#B6FF3C]/30 rounded-2xl p-8 relative transform md:-translate-y-4 [box-shadow:0_0_40px_-10px_rgba(182,255,60,0.1)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-[#B6FF3C] text-[#050807] text-xs uppercase tracking-wide font-medium rounded-full">Most Popular</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Advanced Editing</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight text-[#B6FF3C]">₹800+</span>
<span className="text-sm font-light text-[#6B7F75]">/project</span>
</div>
<ul className="space-y-4 mb-8 text-sm font-light text-white/90">
<li className="flex items-center gap-3"><iconify-icon className="text-[#B6FF3C] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Cinematic Color Grading</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#B6FF3C] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Motion Graphics &amp; VFX</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#B6FF3C] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Advanced Audio Mixing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#B6FF3C] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> 3 Revisions included</li>
</ul>
<a className="block w-full text-center py-3 rounded-xl bg-[#B6FF3C] text-[#050807] hover:scale-[1.02] transition-transform text-sm font-medium [box-shadow:0_0_15px_rgba(182,255,60,0.3)]" href="upi://pay?pa=8475046358@upi&amp;pn=Hemesh&amp;cu=INR">Pay Now</a>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8">
<h3 className="text-lg font-medium tracking-tight text-[#A0B3A8] mb-2">Thumbnail Design</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-medium tracking-tight">₹100</span>
<span className="text-sm font-light text-[#6B7F75]">/design</span>
</div>
<ul className="space-y-4 mb-8 text-sm font-light text-[#A0B3A8]">
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFC6] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> High CTR Focus</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFC6] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Custom Typography</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFC6] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Image Manipulation</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#00FFC6] text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Source File included</li>
</ul>
<a className="block w-full text-center py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors text-sm font-medium" href="upi://pay?pa=8475046358@upi&amp;pn=Hemesh&amp;cu=INR&amp;am=100">Pay Now</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight">Client <span className="text-[#B6FF3C]">Trust</span></h2>
<p className="text-base font-light text-[#A0B3A8] mt-4">What creators are saying.</p>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x no-scrollbar">

<div className="min-w-[300px] md:min-w-[400px] bg-white/[0.02] border border-white/5 p-8 rounded-2xl snap-center shrink-0 hover:border-[#B6FF3C]/20 transition-colors">
<div className="flex text-[#B6FF3C] mb-6 gap-1">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-base font-light text-white/90 mb-8">"Hemesh completely transformed my vlog. The cinematic grading and subtle motion graphics retained viewers 30% longer!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-[#A0B3A8]">AJ</div>
<div><p className="text-sm font-medium tracking-tight">Arjun J.</p><p className="text-xs font-light text-[#6B7F75]">Tech YouTuber</p></div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white/[0.02] border border-white/5 p-8 rounded-2xl snap-center shrink-0 hover:border-[#B6FF3C]/20 transition-colors">
<div className="flex text-[#B6FF3C] mb-6 gap-1">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-base font-light text-white/90 mb-8">"The thumbnails alone paid for the service. Impressions skyrocketed. Highly recommend his typography skills."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-[#A0B3A8]">SR</div>
<div><p className="text-sm font-medium tracking-tight">Sarah R.</p><p className="text-xs font-light text-[#6B7F75]">Finance Creator</p></div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white/[0.02] border border-white/5 p-8 rounded-2xl snap-center shrink-0 hover:border-[#B6FF3C]/20 transition-colors">
<div className="flex text-[#B6FF3C] mb-6 gap-1">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-base font-light text-white/90 mb-8">"Fast turnaround, incredible quality. Hemesh understands exactly what pacing is needed for modern social media ads."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-[#A0B3A8]">MK</div>
<div><p className="text-sm font-medium tracking-tight">Mike K.</p><p className="text-xs font-light text-[#6B7F75]">E-com Brand Owner</p></div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white/[0.02] border border-white/5 p-8 rounded-2xl snap-center shrink-0 hover:border-[#B6FF3C]/20 transition-colors">
<div className="flex text-[#B6FF3C] mb-6 gap-1">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-base font-light text-white/90 mb-8">"I've worked with many editors, but the cinematic vibe Hemesh brings is on another international level. Pure art."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-[#A0B3A8]">DP</div>
<div><p className="text-sm font-medium tracking-tight">David P.</p><p className="text-xs font-light text-[#6B7F75]">Filmmaker</p></div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white/[0.02] border border-white/5 p-8 rounded-2xl snap-center shrink-0 hover:border-[#B6FF3C]/20 transition-colors">
<div className="flex text-[#B6FF3C] mb-6 gap-1">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-base font-light text-white/90 mb-8">"He took raw, shaky footage and made it look like a high-budget documentary. Simply mind-blowing."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-[#A0B3A8]">NT</div>
<div><p className="text-sm font-medium tracking-tight">Nina T.</p><p className="text-xs font-light text-[#6B7F75]">Travel Blogger</p></div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white/[0.02] border border-white/5 p-8 rounded-2xl snap-center shrink-0 hover:border-[#B6FF3C]/20 transition-colors">
<div className="flex text-[#B6FF3C] mb-6 gap-1">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-base font-light text-white/90 mb-8">"Great communication and nailed the brief on the first draft. The motion graphics were crisp and modern."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-[#A0B3A8]">RJ</div>
<div><p className="text-sm font-medium tracking-tight">Rahul J.</p><p className="text-xs font-light text-[#6B7F75]">Agency Director</p></div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white/[0.02] border border-white/5 p-8 rounded-2xl snap-center shrink-0 hover:border-[#B6FF3C]/20 transition-colors">
<div className="flex text-[#B6FF3C] mb-6 gap-1">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-base font-light text-white/90 mb-8">"Very professional. The pricing is completely justified by the premium output. My go-to editor now."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-[#A0B3A8]">KL</div>
<div><p className="text-sm font-medium tracking-tight">Kevin L.</p><p className="text-xs font-light text-[#6B7F75]">Podcast Host</p></div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white/[0.02] border border-white/5 p-8 rounded-2xl snap-center shrink-0 hover:border-[#B6FF3C]/20 transition-colors">
<div className="flex text-[#B6FF3C] mb-6 gap-1">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-base font-light text-white/90 mb-8">"Hemesh's typography edits made my boring educational videos dynamic and engaging. Audience retention is up!"</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-[#A0B3A8]">SM</div>
<div><p className="text-sm font-medium tracking-tight">Sneha M.</p><p className="text-xs font-light text-[#6B7F75]">Educator</p></div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white/[0.02] border border-white/5 p-8 rounded-2xl snap-center shrink-0 hover:border-[#B6FF3C]/20 transition-colors">
<div className="flex text-[#B6FF3C] mb-6 gap-1">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-base font-light text-white/90 mb-8">"10/10 for creativity. He added a specular sweep effect to my intro that I didn't even know I needed. Brilliant."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-[#A0B3A8]">CH</div>
<div><p className="text-sm font-medium tracking-tight">Chris H.</p><p className="text-xs font-light text-[#6B7F75]">Gaming Creator</p></div>
</div>
</div>
<div className="min-w-[300px] md:min-w-[400px] bg-white/[0.02] border border-white/5 p-8 rounded-2xl snap-center shrink-0 hover:border-[#B6FF3C]/20 transition-colors">
<div className="flex text-[#B6FF3C] mb-6 gap-1">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<p className="text-base font-light text-white/90 mb-8">"Reliable, incredibly skilled, and has a true eye for cinematic aesthetics. Best investment for my channel."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-medium text-[#A0B3A8]">AM</div>
<div><p className="text-sm font-medium tracking-tight">Ali M.</p><p className="text-xs font-light text-[#6B7F75]">Lifestyle Vlogger</p></div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-[#0B1410] border-t border-white/5" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#00FFC60a,transparent_40%)]"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Let's build something <span className="text-[#B6FF3C]">cinematic</span>.</h2>
<p className="text-base font-light text-[#A0B3A8] mb-12 max-w-md">Ready to elevate your content? Drop a message or reach out directly through any of the channels below.</p>
<div className="space-y-4">
<a className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#B6FF3C]/30 transition-colors" href="mailto:rtfriderm@gmail.com">
<div className="w-12 h-12 rounded-full bg-[#0a1912]/40 border border-[#b6ff3c]/10 flex items-center justify-center text-[#B6FF3C] group-hover:bg-[#B6FF3C] group-hover:text-[#050807] transition-colors">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#A0B3A8] uppercase tracking-wide">Email</p>
<p className="text-sm font-medium tracking-tight">rtfriderm@gmail.com</p>
</div>
</a>
<a className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00FFC6]/30 transition-colors" href="tel:8475046358">
<div className="w-12 h-12 rounded-full bg-[#001916]/40 border border-[#00FFC6]/10 flex items-center justify-center text-[#00FFC6] group-hover:bg-[#00FFC6] group-hover:text-[#050807] transition-colors">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#A0B3A8] uppercase tracking-wide">Phone / WhatsApp</p>
<p className="text-sm font-medium tracking-tight">+91 8475046358</p>
</div>
</a>
<a className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#B6FF3C]/30 transition-colors" href="https://instagram.com/__ankit_777r" target="_blank">
<div className="w-12 h-12 rounded-full bg-[#0a1912]/40 border border-[#b6ff3c]/10 flex items-center justify-center text-[#B6FF3C] group-hover:bg-[#B6FF3C] group-hover:text-[#050807] transition-colors">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#A0B3A8] uppercase tracking-wide">Instagram</p>
<p className="text-sm font-medium tracking-tight">@__ankit_777r</p>
</div>
</a>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 p-8 rounded-2xl">
<form className="space-y-6">
<div>
<label className="block text-xs font-light text-[#A0B3A8] mb-2 uppercase tracking-wide">Name</label>
<input className="w-full bg-[#050807]/50 border border-white/10 rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:border-[#B6FF3C] focus:ring-1 focus:ring-[#B6FF3C] transition-all placeholder:text-white/20" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-light text-[#A0B3A8] mb-2 uppercase tracking-wide">Email</label>
<input className="w-full bg-[#050807]/50 border border-white/10 rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:border-[#B6FF3C] focus:ring-1 focus:ring-[#B6FF3C] transition-all placeholder:text-white/20" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-light text-[#A0B3A8] mb-2 uppercase tracking-wide">Project Details</label>
<textarea className="w-full bg-[#050807]/50 border border-white/10 rounded-xl px-4 py-3 text-sm font-light focus:outline-none focus:border-[#B6FF3C] focus:ring-1 focus:ring-[#B6FF3C] transition-all placeholder:text-white/20 resize-none" placeholder="Tell me about your vision..." rows="4"></textarea>
</div>
<button className="w-full py-4 rounded-xl bg-[#B6FF3C] text-[#050807] font-medium hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 [box-shadow:0_0_20px_rgba(182,255,60,0.2)]" type="button">
<span>Let's Work Together</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050807] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-xl font-medium tracking-tight text-[#B6FF3C]">
<span className="w-2 h-2 rounded-full bg-[#B6FF3C] [box-shadow:0_0_10px_rgba(182,255,60,0.6)]"></span>
                HEMESH EDITOR
            </div>
<div className="flex gap-6 text-sm font-light text-[#A0B3A8]">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#portfolio">Work</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-[#A0B3A8] hover:text-[#B6FF3C] hover:border-[#B6FF3C]/30 hover:bg-[#0a1912]/40 transition-colors" href="https://youtube.com/@sb.tech.ax7?si=0VIsodl7vmKYDq9P" target="_blank">
<iconify-icon icon="solar:play-stream-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center text-[#A0B3A8] hover:text-[#B6FF3C] hover:border-[#B6FF3C]/30 hover:bg-[#0a1912]/40 transition-colors" href="https://instagram.com/__ankit_777r" target="_blank">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="text-center text-xs font-light text-[#6B7F75] mt-12">
            © 2024 Hemesh Kumar. All cinematic rights reserved.
        </div>
</footer>

    </>
  );
}
