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

        // 3D Globe Initialization using Cobe
        import createGlobe from 'https://cdn.skypack.dev/cobe';

        const canvas = document.getElementById("cobe");

        let phi = 0;
        let width = 0;

        const onResize = () => canvas.width = canvas.offsetWidth * 2;
        window.addEventListener('resize', onResize);
        onResize();

        createGlobe(canvas, {
            devicePixelRatio: 2,
            width: 1000 * 2,
            height: 1000 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 12000,
            mapBrightness: 6,
            baseColor: [0.05, 0.05, 0.05], 
            markerColor: [0.2, 0.83, 0.6], // Emerald Green
            glowColor: [0.05, 0.2, 0.15],
            markers: [
                { location: [-6.2088, 106.8456], size: 0.03 }, // Jakarta
                { location: [35.6762, 139.6503], size: 0.03 }, // Tokyo
                { location: [1.3521, 103.8198], size: 0.03 }, // Singapore
                { location: [3.1390, 101.6869], size: 0.03 }, // Kuala Lumpur
                { location: [30.0444, 31.2357], size: 0.03 }, // Cairo
                { location: [14.5995, 120.9842], size: 0.03 }, // Manila
            ],
            onRender: (state) => {
                state.phi = phi;
                phi += 0.003;
                state.width = width * 2;
                state.height = width * 2;
            }
        });

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
      

<div className="fixed top-0 w-full h-9 bg-[#0f0f0f] border-b border-white/10 z-[60] flex items-center justify-center text-[10px] sm:text-xs font-medium text-neutral-400 tracking-wide backdrop-blur-md">
<span className="flex items-center gap-2">
<iconify-icon className="text-emerald-500 text-sm" icon="solar:info-circle-linear"></iconify-icon>
<span>DISCLAIMER: This website is not the real one. The real one is <a className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors font-semibold" href="https://timedooracademy.com/" target="_blank">timedooracademy.com</a></span>
</span>
</div>

<nav className="fixed top-9 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mx-auto px-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="Timedoor Logo" className="w-8 h-8 rounded-md" src="https://timedooracademy.com/wp-content/uploads/2022/11/cropped-favicon-white-green-bg-32x32.png"/>
<span className="text-lg font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    TIMEDOOR
                </span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-emerald-400 transition-colors" href="#curriculum">Curriculum</a>
<a className="hover:text-emerald-400 transition-colors" href="#about">Why Us</a>
<a className="hover:text-emerald-400 transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-emerald-400 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden lg:flex text-sm font-medium hover:text-white transition-colors" href="https://pro.timedooracademy.com/" target="_blank">
                    Pro Academy
                </a>
<a className="bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold tracking-wide hover:bg-emerald-400 hover:text-black transition-colors shadow-[0_0_15px_rgba(16,185,129,0.2)] uppercase" href="https://timedooracademy.com/book-free-trial/">
                    Book Free Trial
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

<div className="absolute inset-0 z-0 flex items-center justify-center globe-fade-in pointer-events-auto">
<canvas className="aspect-square opacity-40 mix-blend-plus-lighter w-full max-w-[1000px]" height="2000" id="cobe" style={{width: '1000px', height: '1000px'}} width="2000"></canvas>
</div>
<div className="container mx-auto px-6 text-center z-10 fade-in-up pointer-events-none" style={{animationDelay: '0.1s'}}>
<div className="inline-flex pointer-events-auto gap-2 bg-neutral-900/80 border-neutral-800 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-lg backdrop-blur-sm items-center">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
<span className="text-xs font-semibold tracking-wide text-neutral-300">
                    AVAILABLE ONLINE &amp; OFFLINE
                </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-8 leading-[1.05]">
                Coding the
                <span className="text-brand-gradient italic pr-2">
                    Future
                </span>
                Generation
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                The No.1 Kids Coding Academy in 20+ countries. 
                Japanese &amp; UK-based global curriculum empowering 10,000+ students to become future tech leaders.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 pointer-events-auto">
<a className="group relative px-8 py-3.5 bg-emerald-500 text-black rounded-full font-bold tracking-tight overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all hover:scale-105" href="https://timedooracademy.com/book-free-trial/">
<span className="relative z-10 flex items-center gap-2">
                        Start Free Trial
                        <svg className="w-4 h-4 stroke-[2.5px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
<a className="px-8 py-3.5 text-neutral-300 border border-neutral-800 rounded-full font-medium tracking-tight hover:bg-neutral-900 hover:text-white hover:border-neutral-700 transition-all bg-black/30 backdrop-blur-sm flex items-center gap-2" href="#video-intro">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    Watch Video
                </a>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-neutral-950/50 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs font-bold tracking-[0.2em] text-neutral-600 uppercase mb-8">
                Curriculum &amp; Certifications Supported By
            </p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
<img alt="IBM" className="h-8 w-auto object-contain brightness-0 invert" src="https://timedooracademy.com/wp-content/uploads/2022/04/IBM-Logo-Design-1972-present-e1650357769761.png"/>
<img alt="Google Developers" className="h-8 w-auto object-contain brightness-0 invert" src="https://timedooracademy.com/wp-content/uploads/2022/04/gd-1366x464.png"/>
<img alt="Roblox" className="h-8 w-auto object-contain brightness-0 invert" src="https://timedooracademy.com/wp-content/uploads/2022/11/Roblox-Logo.png"/>
<img alt="NTU" className="h-10 w-auto object-contain brightness-0 invert" src="https://timedooracademy.com/wp-content/uploads/2022/04/ntu.png"/>
<img alt="Stanford" className="h-8 w-auto object-contain brightness-0 invert" src="https://timedooracademy.com/wp-content/uploads/2022/11/Stanford-Logo.png"/>
</div>
</div>
</div>

<section className="py-24 relative z-20 bg-[#050505]" id="video-intro">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<span className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-4 block">
                        Our Philosophy
                    </span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6 leading-tight">
                        More Than Just a
                        <span className="text-neutral-500">Coding School.</span>
</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
                        We build 21st-century skills. From problem-solving and creative thinking to grit and confidence. 
                        Our goal isn't just to teach code, but to shift children from being passive consumers of technology to active creators.
                    </p>
<div className="grid grid-cols-2 gap-6 border-t border-neutral-800 pt-8">
<div>
<div className="text-4xl font-light text-emerald-400 mb-1">20+</div>
<div className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">Countries</div>
</div>
<div>
<div className="text-4xl font-light text-emerald-400 mb-1">10k+</div>
<div className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">Students</div>
</div>
<div>
<div className="text-4xl font-light text-emerald-400 mb-1">50+</div>
<div className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">Global Branches</div>
</div>
<div>
<div className="text-4xl font-light text-emerald-400 mb-1">300+</div>
<div className="text-xs text-neutral-500 font-semibold uppercase tracking-widest">Certified Teachers</div>
</div>
</div>
</div>
<div className="relative group rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<div className="aspect-video w-full relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/yCSHvae7jGo" title="Timedoor Academy Trial Video">
</iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative z-20 bg-[#080808]" id="curriculum">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:flex md:items-end md:justify-between border-b border-white/5 pb-10">
<div>
<span className="text-emerald-500 text-xs font-bold tracking-widest uppercase mb-3 block">
                        Academic Pathways
                    </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                        Curriculum
                    </h2>
</div>
<p className="mt-6 md:mt-0 text-neutral-400 max-w-md text-sm leading-relaxed">
                    A comprehensive journey from visual block programming to professional-grade software engineering.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-emerald-500/30 transition duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent blur-2xl rounded-bl-full pointer-events-none"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-6 text-white group-hover:text-emerald-400 transition-colors border border-white/5">
<iconify-icon height="24" icon="solar:gamepad-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Junior Coder</h3>
<p className="text-neutral-500 text-xs uppercase tracking-wider mb-4">Ages 5-7 • Foundation</p>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-12">
                        Develop logical thinking and creativity through visual programming tools like ScratchJr and Viscuit.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-400">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-bold"></iconify-icon> Logic Fundamentals
                        </li>
<li className="flex items-center text-xs text-neutral-400">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-bold"></iconify-icon> Basic Algorithms
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-emerald-500/30 transition duration-500 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-6 text-white group-hover:text-emerald-400 transition-colors border border-white/5">
<iconify-icon height="24" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Code Adventure</h3>
<p className="text-neutral-500 text-xs uppercase tracking-wider mb-4">Ages 8-12 • Intermediate</p>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-12">
                        Create games and interactive worlds using Scratch 3.0, Roblox Studio (Lua), and Construct 3.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-400">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-bold"></iconify-icon> Game Development
                        </li>
<li className="flex items-center text-xs text-neutral-400">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-bold"></iconify-icon> 2D &amp; 3D Design
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-emerald-500/30 transition duration-500 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-6 text-white group-hover:text-emerald-400 transition-colors border border-white/5">
<iconify-icon height="24" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Pro Developer</h3>
<p className="text-neutral-500 text-xs uppercase tracking-wider mb-4">Teens • Advanced</p>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-12">
                        Text-based coding mastering Python, JavaScript, AI, and Mobile App development.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-400">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-bold"></iconify-icon> Python &amp; AI
                        </li>
<li className="flex items-center text-xs text-neutral-400">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-bold"></iconify-icon> Web &amp; App Dev
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-emerald-500/30 transition duration-500 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-6 text-white group-hover:text-emerald-400 transition-colors border border-white/5">
<iconify-icon height="24" icon="solar:cpu-bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">IoT &amp; Robotics</h3>
<p className="text-neutral-500 text-xs uppercase tracking-wider mb-4">Ages 10+ • Engineering</p>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-12">
                        Connect hardware and software. Build Smart Home systems and robots using Arduino.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-400">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-bold"></iconify-icon> Circuit Assembly
                        </li>
<li className="flex items-center text-xs text-neutral-400">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-bold"></iconify-icon> C++ for Arduino
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/30 hover:bg-neutral-900/60 hover:border-emerald-500/30 transition duration-500 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-neutral-800/80 flex items-center justify-center mb-6 text-white group-hover:text-emerald-400 transition-colors border border-white/5">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">AI Engineer</h3>
<p className="text-neutral-500 text-xs uppercase tracking-wider mb-4">Advanced • Future Tech</p>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 h-12">
                        Dive into Machine Learning, Computer Vision, and Data Science using Python libraries.
                    </p>
<ul className="space-y-3 pt-6 border-t border-white/5">
<li className="flex items-center text-xs text-neutral-400">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-bold"></iconify-icon> Computer Vision
                        </li>
<li className="flex items-center text-xs text-neutral-400">
<iconify-icon className="text-emerald-500 mr-2" icon="solar:check-circle-bold"></iconify-icon> Machine Learning
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-[#050505]" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12 text-center">
                Student <span className="text-brand-gradient">Masterpieces</span>
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer">
<img alt="Crazy Road" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://timedooracademy.com/wp-content/uploads/2022/03/Crazy-Road-1.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Mobile Game</span>
<h4 className="text-white text-lg font-semibold">Crazy Road</h4>
<p className="text-neutral-400 text-xs">By Mathias (14 y.o)</p>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer">
<img alt="Underwater VR" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://timedooracademy.com/wp-content/uploads/2026/01/ali1_muhammad_harsye_ibra-1366x1307.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">VR &amp; AR</span>
<h4 className="text-white text-lg font-semibold">Underwater World</h4>
<p className="text-neutral-400 text-xs">By Alirizky (7 y.o)</p>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-900 border border-white/5 cursor-pointer">
<img alt="Python Game" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://timedooracademy.com/wp-content/uploads/2025/05/python_game_dev.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">Python Dev</span>
<h4 className="text-white text-lg font-semibold">Space Shooter</h4>
<p className="text-neutral-400 text-xs">By Python Class</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5" href="https://timedooracademy.com/portfolio/">
                    View Full Portfolio <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden bg-neutral-950 z-20">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
                Global Students
            </h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300">
<div className="flex items-center gap-4 mb-6">
<img alt="Ethan" className="w-12 h-12 rounded-full object-cover grayscale" src="https://timedooracademy.com/wp-content/uploads/2022/03/Student-Ethan.png"/>
<div>
<div className="text-white font-medium text-sm">Ethan</div>
<div className="text-neutral-500 text-xs uppercase">10 Years Old • UK</div>
</div>
</div>
<p className="text-neutral-300 text-sm leading-relaxed font-light">
                    "Learning coding has opened numerous paths to many amazing discoveries. I learned it the best way with Timedoor teachers."
                </p>
</div>

<div className="p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300">
<div className="flex items-center gap-4 mb-6">
<img alt="Sultan" className="w-12 h-12 rounded-full object-cover grayscale" src="https://timedooracademy.com/wp-content/uploads/2025/06/sultan_yusuf_albari_-aspect-ratio-0-0.webp"/>
<div>
<div className="text-white font-medium text-sm">Sultan</div>
<div className="text-neutral-500 text-xs uppercase">20 Years Old • Indonesia</div>
</div>
</div>
<p className="text-neutral-300 text-sm leading-relaxed font-light">
                    "Joining the Backend Bootcamp at Timedoor helped me switch careers. The mentors are friendly and the curriculum suits beginners."
                </p>
</div>

<div className="p-8 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition duration-300">
<div className="flex items-center gap-4 mb-6">
<img alt="Casper" className="w-12 h-12 rounded-full object-cover grayscale" src="https://timedooracademy.com/wp-content/uploads/2022/03/Student-Casper-1.png"/>
<div>
<div className="text-white font-medium text-sm">Casper</div>
<div className="text-neutral-500 text-xs uppercase">9 Years Old • Netherlands</div>
</div>
</div>
<p className="text-neutral-300 text-sm leading-relaxed font-light">
                    "Since I joined Timedoor Academy, my skill in critical thinking increases drastically along with my programming skill."
                </p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5 z-20 relative" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-12 text-center">
                Frequently Asked Questions
            </h2>
<div className="space-y-4">
<details className="group border-b border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4">
<span className="text-neutral-200 font-medium text-sm group-hover:text-emerald-400 transition-colors">
                            Do you provide a trial class?
                        </span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-2 leading-relaxed pb-4 px-2">
                        Yes! We provide 90 minutes of FREE TRIAL CLASS to find out your child’s interest in programming. You can book an online or offline trial via our booking page.
                    </div>
</details>
<details className="group border-b border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4">
<span className="text-neutral-200 font-medium text-sm group-hover:text-emerald-400 transition-colors">
                            Do you have offline classes?
                        </span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-2 leading-relaxed pb-4 px-2">
                        Yes, we have 50+ offline branches worldwide, including locations in Indonesia (Jakarta, Bali, Surabaya), Malaysia, Philippines, and Egypt.
                    </div>
</details>
<details className="group border-b border-white/5 pb-4">
<summary className="flex justify-between items-center cursor-pointer list-none py-4">
<span className="text-neutral-200 font-medium text-sm group-hover:text-emerald-400 transition-colors">
                            What is the appropriate age?
                        </span>
<span className="transition-transform duration-300 group-open:rotate-180 text-neutral-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-neutral-400 text-sm mt-2 leading-relaxed pb-4 px-2">
                        Junior Bracket (5-7 yo), Kids Bracket (8-12 yo), Teens Bracket (12-18 yo), and Adult Bracket (19+). We welcome everyone with an interest in coding.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative bg-neutral-950 z-20" id="booking">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-neutral-950 to-neutral-950"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Start Your Coding Journey
            </h2>
<p className="text-neutral-400 mb-12 text-lg max-w-xl mx-auto font-light">
                Join 10,000+ students worldwide. Book a free 90-minute trial class today to assess the best level for your child.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-full transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(16,185,129,0.3)]" href="https://timedooracademy.com/book-free-trial/">
                    Book Free Trial
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 text-white font-medium rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group" href="https://wa.link/6863li" target="_blank">
<iconify-icon className="text-xl" icon="dashicons:whatsapp"></iconify-icon>
                    Chat on WhatsApp
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-20 pb-10 z-20 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6 group" href="#">
<img alt="Logo" className="w-6 h-6 grayscale group-hover:grayscale-0 transition-all" src="https://timedooracademy.com/wp-content/uploads/2022/11/cropped-favicon-white-green-bg-32x32.png"/>
<span className="text-lg font-bold tracking-tighter text-white">
                            TIMEDOOR ACADEMY
                        </span>
</a>
<p className="text-neutral-500 text-sm max-w-sm mb-8 leading-relaxed">
                        PT Cerdas Digital Indonesia.<br/>
                        Expanding Global IT Education by 50+ branches over the world. We teach kids to think and code like real pros.
                    </p>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="https://www.instagram.com/timedooracademy/">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="https://www.facebook.com/timedooracademy/">
<iconify-icon icon="mdi:facebook" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">
                        Company
                    </h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-emerald-400 transition-colors" href="https://timedooracademy.com/about/">About Us</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="https://timedooracademy.com/our-branch/">Locations</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="https://timedooracademy.com/career/">Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="https://timedooracademy.com/partnership-franchise-investment/">Franchise</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6 text-sm tracking-wide">
                        Course
                    </h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Junior Coder</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Code Adventure</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Python Developer</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">AI Engineer</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-neutral-600">
                    © 2026 PT Cerdas Digital Indonesia. All rights reserved.
                </div>
<div className="text-xs text-neutral-700 font-bold tracking-widest uppercase">
                    Designed for Future Leaders
                </div>
</div>
</div>
</footer>


    </>
  );
}
