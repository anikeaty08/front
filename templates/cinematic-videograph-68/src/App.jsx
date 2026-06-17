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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
                        observer.unobserve(entry.target);
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
      

<nav className="fixed z-50 flex px-4 top-6 right-0 left-0 justify-center">
<div className="flex items-center justify-between glass-panel rounded-full py-3 px-6 shadow-2xl gap-12 transition-all duration-300 hover:border-white/20">
<a className="flex items-center" href="#">
<span className="w-8 h-8 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e52be77d-5f76-406d-93e7-ead640b6d6d6_320w.png')] bg-cover bg-center rounded-full opacity-90 hover:opacity-100 transition-opacity"></span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-normal uppercase tracking-widest text-neutral-400">
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-white text-black hover:bg-neutral-200 transition-transform hover:scale-105" href="#contact">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-neutral-400 hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">

<div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 flex items-center justify-center">
<div className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-orange-900/20 rounded-full blur-[100px] animate-blob delay-1"></div>
<div className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-amber-900/10 rounded-full blur-[100px] animate-blob delay-2 translate-x-1/4 -translate-y-1/4"></div>
<div className="absolute w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] bg-orange-800/15 rounded-full blur-[120px] animate-blob delay-3 -translate-x-1/4 translate-y-1/4"></div>
</div>
<div className="w-full max-w-5xl mx-auto px-6 relative z-20 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 fade-up">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
<span className="inline-flex bg-orange-500 w-1.5 h-1.5 rounded-full relative"></span>
</span>
<span className="text-xs uppercase font-medium text-neutral-300 tracking-[0.15em]">Videographer / Content / AI</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-9xl leading-[0.95] font-medium text-white tracking-tight mb-6 fade-up">
                The visual power <br/>
<span className="text-gradient">of communication.</span>
</h1>
<p className="text-lg md:text-xl font-light text-neutral-400 max-w-2xl mx-auto mb-12 fade-up leading-relaxed">
                I am an independent creator of video content, photography, and AI projects. I help brands and artists stand out from the crowd.
            </p>

<div className="w-full max-w-4xl mx-auto mb-12 fade-up">
<div className="relative aspect-[21/9] md:aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-[0_0_40px_rgba(0,0,0,0.5)]">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg">
<source src="https://videos.pexels.com/video-files/3205647/3205647-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
<div className="w-16 h-16 rounded-full glass-panel flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-300">
<iconify-icon height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
<div className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white/60 w-1/3 rounded-full"></div>
</div>
<span className="text-xs font-medium tracking-widest uppercase text-white/60">Showreel 24'</span>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up">
<a className="group flex items-center gap-2 text-sm font-medium text-black bg-white rounded-full py-3 px-8 hover:bg-neutral-200 transition-colors" href="#portfolio">
                    View my work
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-sm font-medium text-white border border-white/10 rounded-full py-3 px-8 hover:bg-white/5 transition-colors" href="#contact">
                    Start a project
                </a>
</div>
</div>

<div className="w-full border-y border-white/5 py-5 overflow-hidden absolute bottom-0 z-20 bg-black/50 backdrop-blur-sm text-neutral-600">
<div className="flex whitespace-nowrap w-[200%] animate-scroll">
<div className="flex items-center gap-8 mx-4">
<span className="text-2xl font-medium uppercase tracking-tight">Cinematography</span>
<span className="text-orange-600/50">✦</span>
<span className="text-2xl font-medium uppercase tracking-tight">Production</span>
<span className="text-orange-600/50">✦</span>
<span className="text-2xl font-medium uppercase tracking-tight">Post-Production</span>
<span className="text-orange-600/50">✦</span>
<span className="text-2xl font-medium uppercase tracking-tight">Color Grading</span>
<span className="text-orange-600/50">✦</span>
<span className="text-2xl font-medium uppercase tracking-tight">Sound Design</span>
<span className="text-orange-600/50">✦</span>
</div>
<div className="flex items-center gap-8 mx-4">
<span className="text-2xl font-medium uppercase tracking-tight">AI Projects</span>
<span className="text-orange-600/50">✦</span>
<span className="text-2xl font-medium uppercase tracking-tight">Production</span>
<span className="text-orange-600/50">✦</span>
<span className="text-2xl font-medium uppercase tracking-tight">Post-Production</span>
<span className="text-orange-600/50">✦</span>
<span className="text-2xl font-medium uppercase tracking-tight">Color Grading</span>
<span className="text-orange-600/50">✦</span>
<span className="text-2xl font-medium uppercase tracking-tight">Sound Design</span>
<span className="text-orange-600/50">✦</span>
</div>
</div>
</div>
</header>

<section className="py-32 relative bg-black/40" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 fade-up sticky top-32">
<span className="uppercase block text-xs text-neutral-500 tracking-widest mb-4">01 / About DXM</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                        Elevating brand narratives through <br/>
<span className="text-neutral-500">conversion-driven visuals.</span>
</h2>
<p className="text-base font-light text-neutral-400 mb-10 leading-relaxed">
                        DXM is a premier B2B video production agency partnering with forward-thinking brands to enhance their visual identity. We engineer high-end, strategic video content designed to captivate audiences, elevate market positioning, and drive measurable conversions.
                    </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
<div>
<span className="block text-3xl font-medium text-white mb-2 tracking-tight">50+</span>
<span className="uppercase text-xs text-neutral-500 tracking-widest">Delivered campaigns</span>
</div>
<div>
<span className="block text-3xl font-medium text-white mb-2 tracking-tight">37</span>
<span className="uppercase text-xs text-neutral-500 tracking-widest">Brand partners</span>
</div>
</div>
</div>
<div className="lg:col-span-7 grid gap-6 fade-up">
<div className="relative aspect-video group overflow-hidden rounded-2xl border border-white/10">
<img alt="Cinematic Narrative" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1518135714426-c18f5ffb6f4d?q=80&amp;w=2996&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-lg font-medium text-white tracking-tight">Strategic narrative</h3>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="relative aspect-[4/5] group overflow-hidden rounded-2xl border border-white/10">
<img alt="Cinematic Lighting" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1585647347384-2593bc35786b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-lg font-medium text-white tracking-tight">Premium aesthetics</h3>
</div>
</div>
<div className="relative aspect-[4/5] group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
<img alt="Cinematic Composition" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100 filter grayscale" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<h3 className="text-lg font-medium text-white tracking-tight">Audience retention</h3>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black/80 pt-32 pb-32 relative" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 fade-up">
<div>
<span className="uppercase block text-xs text-neutral-500 tracking-widest mb-4">02 / Portfolio</span>
<h2 className="text-4xl font-medium text-white tracking-tight">Selected works</h2>
</div>
<div className="flex items-center gap-6 mt-6 md:mt-0">
<button className="text-white text-sm font-medium border-b border-white pb-1">All</button>
<button className="text-neutral-500 hover:text-white transition-colors text-sm font-medium pb-1">Reels</button>
<button className="text-neutral-500 hover:text-white transition-colors text-sm font-medium pb-1">Ad Campaigns</button>
<button className="text-neutral-500 hover:text-white transition-colors text-sm font-medium pb-1">Polaroids</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-2xl border border-white/10 fade-up bg-neutral-900">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg">
<source src="https://videos.pexels.com/video-files/3015511/3015511-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs tracking-widest text-white border border-white/10">2023</span>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Automotive</p>
<h3 className="text-2xl font-medium text-white tracking-tight">Apex Velocity</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-2xl border border-white/10 fade-up bg-neutral-900">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg">
<source src="https://videos.pexels.com/video-files/4057317/4057317-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs tracking-widest text-white border border-white/10">2024</span>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Music Video</p>
<h3 className="text-2xl font-medium text-white tracking-tight">Neon Nights</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-2xl border border-white/10 fade-up bg-neutral-900">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=2874&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/3205915/3205915-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs tracking-widest text-white border border-white/10">2023</span>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Fashion</p>
<h3 className="text-2xl font-medium text-white tracking-tight">Vogue Noir</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-2xl border border-white/10 fade-up bg-neutral-900">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&amp;w=2788&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/3752535/3752535-hd_1920_1080_24fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs tracking-widest text-white border border-white/10">2023</span>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Experimental</p>
<h3 className="text-2xl font-medium text-white tracking-tight">Chromatic Echo</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-2xl border border-white/10 fade-up bg-neutral-900">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2942&amp;auto=format&amp;fit=crop">
<source src="https://videos.pexels.com/video-files/853870/853870-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs tracking-widest text-white border border-white/10">2024</span>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Documentary</p>
<h3 className="text-2xl font-medium text-white tracking-tight">Terra Firma</h3>
</div>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-2xl border border-white/10 fade-up bg-neutral-900">
<video autoplay="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-70 group-hover:opacity-100 filter grayscale group-hover:grayscale-0" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp">
<source src="https://videos.pexels.com/video-files/3195394/3195394-hd_1920_1080_25fps.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between">
<div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
<span className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs tracking-widest text-white border border-white/10">2023</span>
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-neutral-400 text-xs uppercase tracking-widest mb-2">Tech</p>
<h3 className="text-2xl font-medium text-white tracking-tight">Quantum Leap</h3>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center fade-up">
<a className="inline-flex items-center justify-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors uppercase tracking-widest group" href="#">
                    View Full Archive
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 relative bg-black" id="services">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 fade-up">
<span className="uppercase block text-xs text-neutral-500 tracking-widest mb-4">03 / Expertise</span>
<h2 className="text-4xl font-medium tracking-tight text-white">Services</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group glass-panel rounded-2xl p-8 hover:bg-white/[0.04] transition-colors fade-up border border-white/5">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" height="24" icon="solar:clapperboard-play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Pre-Production</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Concept development, scriptwriting, and storyboarding. We lay the foundation for visual excellence.</p>
</div>
<div className="group glass-panel rounded-2xl p-8 hover:bg-white/[0.04] transition-colors fade-up border border-white/5">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" height="24" icon="solar:videocamera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Production</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">High-end cinematography, directing, and on-set management using state-of-the-art cinema gear.</p>
</div>
<div className="group glass-panel rounded-2xl p-8 hover:bg-white/[0.04] transition-colors fade-up border border-white/5">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" height="24" icon="solar:scissors-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Post-Production</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Editing, VFX, and sound mixing. We sculpt the raw footage into a polished narrative.</p>
</div>
<div className="group glass-panel rounded-2xl p-8 hover:bg-white/[0.04] transition-colors fade-up border border-white/5">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" height="24" icon="solar:palette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Color Grading</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Defining mood and tone through expert color science. Davinci Resolve certified workflow.</p>
</div>
<div className="group glass-panel rounded-2xl p-8 hover:bg-white/[0.04] transition-colors fade-up border border-white/5">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" height="24" icon="solar:music-note-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Sound Design</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">Immersive audio landscapes that heighten emotional impact. Composition and SFX.</p>
</div>
<div className="group glass-panel rounded-2xl p-8 hover:bg-white/[0.04] transition-colors fade-up border border-white/5">
<div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" height="24" icon="solar:monitor-camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Motion Graphics</h3>
<p className="text-sm text-neutral-500 leading-relaxed font-light">2D and 3D animation to explain complex concepts or add flair to your visual identity.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-neutral-950 border-t border-white/5 overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative z-10">
<div className="fade-up">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">
                    Let's make <br/>
<span className="text-neutral-600">history.</span>
</h2>
<p className="text-neutral-400 text-base font-light mb-16 max-w-md leading-relaxed">
                    We are currently accepting new projects for Q4 2024. Reach out to discuss your vision.
                </p>
<div className="space-y-8">
<a className="group flex items-center gap-6 text-white hover:text-neutral-300 transition-colors" href="mailto:hello@kabovelo.com">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Email me</span>
<span className="text-lg font-medium tracking-tight">contact@creator.com</span>
</div>
</a>
<a className="group flex items-center gap-6 text-white hover:text-neutral-300 transition-colors" href="#">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors" height="20" icon="solar:camera-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs text-neutral-500 uppercase tracking-widest mb-1">Follow me</span>
<span className="text-lg font-medium tracking-tight">@mwmotion</span>
</div>
</a>
</div>
</div>
<div className="glass-panel p-8 md:p-10 border border-white/10 rounded-2xl fade-up">
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white" htmlFor="name">Name</label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white" htmlFor="email">Email</label>
</div>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-transparent" id="budget" placeholder="Budget" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white" htmlFor="budget">Estimated Budget</label>
</div>
<div className="group relative">
<textarea className="peer w-full bg-transparent border-b border-neutral-800 py-3 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-transparent resize-none" id="message" placeholder="Message" rows="4"></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-white" htmlFor="message">Project Details</label>
</div>
<button className="w-full py-4 bg-white text-black text-sm font-medium uppercase tracking-widest rounded-full hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group" type="button">
                        Send Inquiry
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="w-8 h-8 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e52be77d-5f76-406d-93e7-ead640b6d6d6_320w.png')] bg-cover bg-center rounded-full opacity-50 hover:opacity-100 transition-opacity"></span>
<p className="text-neutral-600 text-xs font-light">© 2024 DXM Production. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
