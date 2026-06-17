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



        // Custom Cursor
        const cursor = document.getElementById('cursor');
        const cursorDot = document.getElementById('cursor-dot');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = "translate(-50%, -50%) scale(0.8)";
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = "translate(-50%, -50%) scale(1)";
        });

        // Hover effect for links
        const links = document.querySelectorAll('a, button');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
                cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            });
            link.addEventListener('mouseleave', () => {
                cursor.style.width = '20px';
                cursor.style.height = '20px';
                cursor.style.backgroundColor = 'transparent';
            });
        });

        // Navbar Blur on Scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
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
      

<div className="hidden md:block" id="cursor"></div>
<div className="hidden md:block" id="cursor-dot"></div>

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
</div>

<nav className="fixed w-full z-50 top-0 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-black/10 backdrop-blur-md border-b border-white/5"></div>
<div className="max-w-7xl mx-auto px-6 py-4 relative flex justify-between items-center">
<a className="text-xl font-bold tracking-tight z-10 group" href="#">
<span className="text-white">MOHD </span><span className="text-cyan-400 group-hover:text-amber-400 transition-colors">SUBHAN</span>
</a>
<div className="hidden md:flex space-x-8 text-sm font-medium z-10">
<a className="text-slate-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#skills">Skills</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="px-5 py-2 rounded-full border border-white/10 text-white hover:bg-white/10 transition-all" href="#contact">Let's Talk</a>
</div>

<button className="md:hidden text-white z-10 text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

<div className="order-2 md:order-1 space-y-6 z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 tracking-wider uppercase">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Available for Freelance
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-tight text-white">
                    Hi, I'm <br/>
<span className="text-gold-gradient block mt-2"><b>Mohd Subhan</b></span>
</h1>
<div className="text-xl md:text-2xl text-slate-400 font-light flex items-center gap-2">
<span>I am a</span>
<div className="word-carousel text-cyan-400 font-medium h-[1.5em] overflow-hidden">
<div>
<span>Web Designer</span>
<span>Graphic Designer</span>
<span>Creative Coder</span>
<span>Digital Creator</span>
<span>Web Designer</span> 
</div>
</div>
</div>
<p className="text-slate-400 max-w-lg text-lg leading-relaxed">
                    I design visually powerful, performance-driven digital experiences that blend creativity with modern technology.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="px-8 py-4 bg-white text-black font-medium rounded-full hover:scale-105 transition-transform duration-300 flex items-center gap-2" href="#portfolio">
                        View Portfolio
                        <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300" href="#contact">
                        Hire Me
                    </a>
</div>
</div>

<div className="order-1 md:order-2 flex justify-center items-center relative h-[400px]">

<div className="scene-3d">
<div className="cube">
<div className="face front"></div>
<div className="face back"></div>
<div className="face right"></div>
<div className="face left"></div>
<div className="face top"></div>
<div className="face bottom"></div>
</div>
</div>

<div className="absolute w-full h-full animate-[spin_20s_linear_infinite] opacity-30">
<div className="absolute top-0 right-0 w-4 h-4 bg-gold rounded-full shadow-[0_0_15px_#fbbf24]"></div>
<div className="absolute bottom-10 left-10 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]"></div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
<iconify-icon icon="solar:mouse-linear" width="30"></iconify-icon>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative glass-card rounded-2xl p-2 aspect-[4/5] flex items-center justify-center overflow-hidden">

<div className="w-full h-full bg-slate-900/50 rounded-xl relative flex items-end justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"><img src="https://scontent-del2-3.xx.fbcdn.net/v/t39.30808-6/602905681_844065638606512_615413257261496638_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=1d70fc&amp;_nc_ohc=2a24_SvIIs8Q7kNvwFPVTsm&amp;_nc_oc=Adr8ElmBCCZLKURAjVQa_1opGPXN-vRhHAN9FCYHjD9KA4QPnDY9YNQIpvVFPex9yZwMz5fMkNksK-JieCPlV74W&amp;_nc_zt=23&amp;_nc_ht=scontent-del2-3.xx&amp;_nc_gid=1sn-GRCRXu3ycHM86_fDew&amp;_nc_ss=7a3a8&amp;oh=00_Af1vj67nfVaCVgOnadUXVdsVF8YFBpswEJBfy9pRW1VyoA&amp;oe=69D41049"/></div>
<iconify-icon className="text-[20rem] text-slate-800 opacity-50 absolute bottom-[-4rem]" icon="solar:user-circle-linear"></iconify-icon>
<div className="z-20 p-6 text-center">
<p className="text-gold text-lg font-serif italic">"Design is intelligence made visible."</p>
</div>
</div>

<div className="absolute top-8 right-[-20px] glass-card px-4 py-2 rounded-lg flex items-center gap-3 animate-[float-ambient_6s_infinite]">
<iconify-icon className="text-cyan-400 text-2xl" icon="solar:code-square-linear"></iconify-icon>
<span className="text-xs font-semibold">Clean Code</span>
</div>
<div className="absolute bottom-20 left-[-20px] glass-card px-4 py-2 rounded-lg flex items-center gap-3 animate-[float-ambient_8s_infinite_reverse]">
<iconify-icon className="text-purple-400 text-2xl" icon="solar:palette-linear"></iconify-icon>
<span className="text-xs font-semibold">Pixel Perfect</span>
</div>
</div>
</div>

<div className="space-y-8">
<div>
<h2 className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-2">About Me</h2>
<h3 className="text-4xl md:text-5xl font-semibold text-white mb-6">Designing the Future, <br/>One Pixel at a Time.</h3>
<p className="text-slate-400 leading-relaxed text-lg">
                            I am a passionate creative professional with expertise in web design, graphic design, and creative coding. My focus is on creating clean UI, powerful branding, and user-centric designs that leave a lasting impression.
                        </p>
<div className="mt-4 flex items-center gap-2 text-slate-300">
<iconify-icon className="text-amber-400" icon="solar:map-point-linear"></iconify-icon>
<span>Based in <strong className="text-white">Miranpur Katra, Shahjahanpur</strong></span>
</div>
</div>

<div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
<div>
<h4 className="text-3xl font-bold text-white mb-1">50+</h4>
<p className="text-xs text-slate-500 uppercase tracking-wide">Projects Completed</p>
</div>
<div>
<h4 className="text-3xl font-bold text-white mb-1">02+</h4>
<p className="text-xs text-slate-500 uppercase tracking-wide">Years Exp.</p>
</div>
<div>
<h4 className="text-3xl font-bold text-white mb-1">100%</h4>
<p className="text-xs text-slate-500 uppercase tracking-wide">Client Satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black/20" id="skills">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-white mb-4">Technical <span className="text-cyan-400">Arsenal</span></h2>
<p className="text-slate-400">Tools and technologies I use to bring ideas to life.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-6 rounded-2xl tilt-card group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
<iconify-icon icon="solar:laptop-linear" width="32"></iconify-icon>
</div>
<span className="text-white font-bold">75%</span>
</div>
<h3 className="text-xl font-medium text-white mb-1">Web Design &amp; Dev</h3>
<p className="text-sm text-slate-500 mb-4">HTML, CSS, Coding</p>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-cyan-400 w-[95%] animate-fill"></div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl tilt-card group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
<iconify-icon icon="solar:figma-linear" width="32"></iconify-icon>
</div>
<span className="text-white font-bold">80%</span>
</div>
<h3 className="text-xl font-medium text-white mb-1">UI/UX Design</h3>
<p className="text-sm text-slate-500 mb-4">Figma, Adobe XD</p>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-purple-400 w-[90%] animate-fill"></div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl tilt-card group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-amber-500/10 rounded-xl text-amber-400">
<iconify-icon icon="solar:code-circle-linear" width="32"></iconify-icon>
</div>
<span className="text-white font-bold">70%</span>
</div>
<h3 className="text-xl font-medium text-white mb-1">JavaScript</h3>
<p className="text-sm text-slate-500 mb-4">ES6+, React basics</p>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[85%] animate-fill"></div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl tilt-card group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
<iconify-icon icon="solar:gallery-edit-linear" width="32"></iconify-icon>
</div>
<span className="text-white font-bold">78%</span>
</div>
<h3 className="text-xl font-medium text-white mb-1">Photoshop Expert</h3>
<p className="text-sm text-slate-500 mb-4">Manipulation, Retouching</p>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-blue-400 w-[98%] animate-fill"></div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl tilt-card group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-green-500/10 rounded-xl text-green-400">
<iconify-icon icon="solar:pen-new-square-linear" width="32"></iconify-icon>
</div>
<span className="text-white font-bold">82%</span>
</div>
<h3 className="text-xl font-medium text-white mb-1">CorelDRAW Expert</h3>
<p className="text-sm text-slate-500 mb-4">Vector Art, Print Design</p>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-green-400 w-[92%] animate-fill"></div>
</div>
</div>

<div className="glass-card p-6 rounded-2xl tilt-card group">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-red-500/10 rounded-xl text-red-400">
<iconify-icon icon="solar:document-add-linear" width="32"></iconify-icon>
</div>
<span className="text-white font-bold">95%</span>
</div>
<h3 className="text-xl font-medium text-white mb-1">MS Office Advanced</h3>
<p className="text-sm text-slate-500 mb-4">Documentation, Data</p>
<div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
<div className="h-full bg-red-400 w-[90%] animate-fill"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-4xl font-semibold text-white mb-2">Selected <span className="text-amber-400">Work</span></h2>
<p className="text-slate-400">A curation of my best digital projects.</p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full bg-white/10 text-white text-sm hover:bg-white hover:text-black transition-all">All</button>
<button className="px-4 py-2 rounded-full border border-white/10 text-slate-400 text-sm hover:border-cyan-400 hover:text-cyan-400 transition-all">Web Design</button>
<button className="px-4 py-2 rounded-full border border-white/10 text-slate-400 text-sm hover:border-purple-400 hover:text-purple-400 transition-all">Branding</button>
<button className="px-4 py-2 rounded-full border border-white/10 text-slate-400 text-sm hover:border-green-400 hover:text-green-400 transition-all">UI Concepts</button>
</div>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="glass-card rounded-2xl overflow-hidden relative group break-inside-avoid">
<div className="aspect-[4/3] bg-slate-800 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-6xl text-white/5 font-bold">PROJECT 01</span>
</div>

<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Neon Agency</h3>
<p className="text-sm text-slate-300 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Web Design &amp; Branding</p>
<button className="mt-6 px-6 py-2 rounded-full border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all translate-y-4 group-hover:translate-y-0 duration-300 delay-100 text-sm">View Project</button>
</div>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden relative group break-inside-avoid">
<div className="aspect-[3/4] bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-900 to-slate-900 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-6xl text-white/5 font-bold">UI KIT</span>
</div>

<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Finance App</h3>
<p className="text-sm text-slate-300 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Mobile UI/UX</p>
<button className="mt-6 px-6 py-2 rounded-full border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all translate-y-4 group-hover:translate-y-0 duration-300 delay-100 text-sm">View Project</button>
</div>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden relative group break-inside-avoid">
<div className="aspect-[4/3] bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900 to-slate-900 group-hover:scale-110 transition-transform duration-700"></div>

<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Eco Brand</h3>
<p className="text-sm text-slate-300 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Logo &amp; Identity</p>
<button className="mt-6 px-6 py-2 rounded-full border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all translate-y-4 group-hover:translate-y-0 duration-300 delay-100 text-sm">View Project</button>
</div>
</div>
</div>

<div className="glass-card rounded-2xl overflow-hidden relative group break-inside-avoid">
<div className="aspect-[3/4] bg-slate-800 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-rose-900 to-slate-900 group-hover:scale-110 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-6xl text-white/5 font-bold">POSTER</span>
</div>

<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
<h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Event Poster</h3>
<p className="text-sm text-slate-300 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Graphic Design</p>
<button className="mt-6 px-6 py-2 rounded-full border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all translate-y-4 group-hover:translate-y-0 duration-300 delay-100 text-sm">View Project</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-black to-slate-950" id="services">
<div className="max-w-7xl mx-auto px-6 mb-12">
<h2 className="text-4xl font-semibold text-white mb-2">My <span className="text-purple-400">Services</span></h2>
<p className="text-slate-400">What I can do for you.</p>
</div>

<div className="flex overflow-x-auto gap-6 px-6 pb-12 snap-x snap-mandatory scroll-smooth max-w-7xl mx-auto no-scrollbar" style={{scrollbarWidth: 'none'}}>

<div className="min-w-[300px] md:min-w-[350px] glass-card p-8 rounded-2xl snap-center neon-border-cyan border border-transparent transition-all">
<div className="w-14 h-14 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400 mb-6 text-3xl">
<iconify-icon icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Website Design</h3>
<p className="text-slate-400 text-sm leading-relaxed">Modern, responsive, and high-performance websites tailored to your brand needs using latest tech.</p>
</div>

<div className="min-w-[300px] md:min-w-[350px] glass-card p-8 rounded-2xl snap-center neon-border-gold border border-transparent transition-all">
<div className="w-14 h-14 rounded-full bg-amber-900/30 flex items-center justify-center text-amber-400 mb-6 text-3xl">
<iconify-icon icon="solar:bookmark-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Business Branding</h3>
<p className="text-slate-400 text-sm leading-relaxed">Complete identity design including logos, color palettes, and brand guidelines for businesses.</p>
</div>

<div className="min-w-[300px] md:min-w-[350px] glass-card p-8 rounded-2xl snap-center border border-transparent hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all">
<div className="w-14 h-14 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 mb-6 text-3xl">
<iconify-icon icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Posters &amp; Banners</h3>
<p className="text-slate-400 text-sm leading-relaxed">Eye-catching marketing materials for events, social media, and advertising campaigns.</p>
</div>

<div className="min-w-[300px] md:min-w-[350px] glass-card p-8 rounded-2xl snap-center border border-transparent hover:border-pink-500/50 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all">
<div className="w-14 h-14 rounded-full bg-pink-900/30 flex items-center justify-center text-pink-400 mb-6 text-3xl">
<iconify-icon icon="solar:share-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Social Media Graphics</h3>
<p className="text-slate-400 text-sm leading-relaxed">Engaging content design to boost your online presence across all major platforms.</p>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(251,191,36,0.05)_0%,_rgba(0,0,0,0)_60%)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold text-white mb-12">Client <span className="text-gold">Stories</span></h2>
<div className="relative glass-card p-8 md:p-12 rounded-3xl mx-auto">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-900 rounded-full border border-white/10 flex items-center justify-center text-amber-400 text-xl">
<iconify-icon icon="solar:quote-up-square-linear"></iconify-icon>
</div>

<p className="text-lg md:text-xl text-slate-300 italic mb-6">
                    "Mohd Subhan transformed our digital presence completely. The 3D elements and smooth animations made our portfolio stand out. Highly professional and creative!"
                </p>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600"></div>
<div className="text-left">
<h4 className="text-white font-medium text-sm">Sp Gupta</h4>
<p className="text-slate-500 text-xs">Web Designer &amp; Graphic Designer </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">
<div>
<h2 className="text-5xl font-semibold text-white mb-6">Let's Work <br/><span className="text-cyan-400">Together</span></h2>
<p className="text-slate-400 mb-8 text-lg">Have a project in mind? Let's build something extraordinary. I'm currently available for freelance projects.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white group-hover:text-cyan-400 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:letter-linear" text-2xl=""></iconify-icon>
</div>
<div>
<p className="text-slate-500 text-xs uppercase tracking-wider">Email Me</p>
<p className="text-white text-lg font-medium">masoodisubhan27@gmail.com</p>
</div>
</div>
<div className="flex items-center gap-4 group cursor-pointer">
<div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white group-hover:text-green-400 group-hover:scale-110 transition-all">
<iconify-icon icon="solar:phone-calling-linear" text-2xl=""></iconify-icon>
</div>
<div>
<p className="text-slate-500 text-xs uppercase tracking-wider">Call Me</p>
<p className="text-white text-lg font-medium">+91 7355902387</p>
</div>
</div>
</div>
<div className="flex gap-4 mt-12">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-cyan-600 hover:border-cyan-600 transition-all" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all" href="#">
<iconify-icon icon="solar:link-circle-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-black hover:border-white transition-all" href="#">
<iconify-icon icon="solar:brand-github-linear"></iconify-icon>
</a>
</div>
</div>

<form className="glass-card p-8 rounded-3xl space-y-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/20 blur-2xl rounded-full pointer-events-none"></div>
<div className="group">
<label className="block text-slate-400 text-sm mb-2 ml-2">Your Name</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all" placeholder="Sp Gupta" type="text"/>
</div>
<div className="group">
<label className="block text-slate-400 text-sm mb-2 ml-2">Your Email</label>
<input className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all" placeholder="Sp27@gmail.com" type="email"/>
</div>
<div className="group">
<label className="block text-slate-400 text-sm mb-2 ml-2">Message</label>
<textarea className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group" type="button">
<span className="relative z-10">Send Message</span>
<div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h2 className="text-2xl font-bold text-white tracking-tight">MOHD SUBHAN</h2>
<p className="text-slate-500 text-sm mt-1">Designed with Creativity &amp; Code</p>
</div>
<div className="flex gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Portfolio</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
</div>
<p className="text-slate-600 text-sm">
                © 2026 Mohd Subhan. All rights reserved.
            </p>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-[100] group flex items-center justify-center" href="https://wa.me/917355902387?text=Hello%20Mohd%20Subhan,%20I%20would%20like%20to%20discuss%20a%20project." target="_blank">

<span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>

<div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full text-white text-3xl shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-all hover:scale-110">
<iconify-icon icon="ic:baseline-whatsapp"></iconify-icon>
</div>

<span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 shadow-lg whitespace-nowrap hidden md:block">
            Chat on WhatsApp
        </span>
</a>



    </>
  );
}
