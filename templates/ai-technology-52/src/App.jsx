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



  // Reveal on scroll logic
  document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Run once
        }
      });
    }, observerOptions);
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
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
      

<div className="fixed inset-0 z-[-1] bg-grid pointer-events-none"></div>

<nav className="sticky top-0 z-50 bg-[#050505]/70 backdrop-blur-xl border-b border-white/5">
<div className="flex h-16 max-w-[1440px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<a className="text-lg font-medium tracking-tight text-white" href="#">
        MindWalker
      </a>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Beranda</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Produk</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Solusi</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Tentang Kami</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#">Berita</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/5 px-4 py-1.5 rounded-full transition-all">
        Kontak Kami
      </button>
</div>
</div>
</nav>

<main className="sm:px-6 max-w-[1440px] mr-auto ml-auto pr-4 pb-20 pl-4 mt-8">

<div className="relative w-full rounded-[32px] sm:rounded-[40px] h-[700px] sm:h-[640px] overflow-hidden shadow-2xl glow-border bg-[#0a0a0a] isolate group">

<div className="absolute inset-0 z-0 overflow-hidden">

<div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-600/20 blur-[120px] animate-float-slow"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[100px] animate-float-medium"></div>
<div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[80px] animate-float-slow mix-blend-screen"></div>

<div className="absolute inset-0 opacity-[0.02] bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=2070')] bg-cover mix-blend-overlay"></div>
</div>

<div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-8 sm:px-12 md:px-16 z-10 w-full h-full">

<div className="flex flex-col justify-center items-start max-w-2xl lg:max-w-[55%] z-20 pt-20 lg:pt-0">

<div className="animate-fade-in-up">
<div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 mb-8">
<iconify-icon className="text-sm text-green-400" icon="solar:cpu-bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-neutral-300 tracking-wider uppercase">
              Bagian dari Nvidia Inception Program
            </span>
</div>
</div>

<h1 className="text-5xl sm:text-6xl md:text-[5.5rem] leading-[1.1] font-medium text-white tracking-tight mb-6">
<span className="block animate-word delay-[0ms]">Dari</span>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 relative inline-block animate-word delay-100 pb-2">Insight
            <span className="absolute inset-0 bg-blue-500/20 blur-2xl -z-10 rounded-full"></span>
</span>
<span className="block animate-word delay-200 mt-[-10px]">Menjadi Dampak</span>
</h1>

<p className="animate-fade-in-up delay-200 text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-lg font-light mb-10">
          Solusi AI untuk tantangan kompleks. Bukan sekadar teknologi, kami merancang dampak nyata untuk ekosistem digital Anda.
        </p>

<div className="animate-fade-in-up delay-300 flex items-center gap-6">
<a className="group inline-flex items-center justify-between gap-4 bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]" href="#">
<span>Mulai Sekarang</span>
<div className="w-8 h-8 rounded-full bg-neutral-200 group-hover:bg-neutral-300 flex items-center justify-center transition-colors">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-[#0a0a0a] flex items-center justify-center text-xs font-mono text-neutral-400">01</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-[#0a0a0a] flex items-center justify-center text-xs font-mono text-neutral-400">10</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-[#0a0a0a] flex items-center justify-center text-xs font-mono text-neutral-400">11</div>
</div>
<span className="text-sm font-medium text-neutral-400">Model Terlatih</span>
</div>
</div>
</div>

<div className="hidden lg:flex w-[45%] h-full relative items-center justify-center [perspective:1600px] z-10">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-40">
<div className="w-[500px] h-[500px] rounded-full border border-dashed border-blue-500/30 animate-[spin_60s_linear_infinite] relative"></div>
<div className="absolute w-[350px] h-[350px] rounded-full border border-purple-500/20 animate-[spin_40s_linear_infinite_reverse]"></div>
</div>

<div className="relative w-[420px] h-[500px] animate-float-showcase group cursor-pointer [transform-style:preserve-3d]">
<div className="relative w-full h-full transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] [transform-style:preserve-3d] [transform:rotateY(-12deg)_rotateX(8deg)] group-hover:[transform:rotateY(0deg)_rotateX(0deg)_scale(1.02)]">

<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl opacity-60 -z-10 [transform:translateZ(-40px)_translateX(20px)_translateY(20px)] blur-md"></div>

<div className="absolute inset-0 bg-[#0f1115]/80 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden [transform:translateZ(0px)] glow-border">

<div className="h-10 border-b border-white/10 bg-white/5 flex items-center px-4 justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
</div>
<div className="text-[10px] font-mono text-neutral-500">core_processing.py</div>
</div>

<div className="p-5 flex-1 flex flex-col font-mono text-xs">

<div className="w-full h-32 bg-white/[0.02] rounded-lg border border-white/5 mb-4 relative overflow-hidden flex items-end px-2 pb-2 gap-1">

<div className="w-full h-full absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070')] bg-cover opacity-20 mix-blend-screen"></div>
<div className="w-full bg-gradient-to-t from-blue-500/50 to-transparent h-[40%] rounded-sm relative z-10"></div>
<div className="w-full bg-gradient-to-t from-purple-500/50 to-transparent h-[70%] rounded-sm relative z-10"></div>
<div className="w-full bg-gradient-to-t from-blue-400/50 to-transparent h-[30%] rounded-sm relative z-10"></div>
<div className="w-full bg-gradient-to-t from-indigo-500/50 to-transparent h-[85%] rounded-sm relative z-10 animate-pulse"></div>
<div className="w-full bg-gradient-to-t from-blue-500/50 to-transparent h-[50%] rounded-sm relative z-10"></div>
</div>

<div className="space-y-2 text-neutral-400">
<p><span className="text-purple-400">import</span> mindwalker.ai <span className="text-purple-400">as</span> mw</p>
<p>&gt; initializing neural network...</p>
<p>&gt; connecting to <span className="text-blue-400">NVIDIA Tensor Cores</span></p>
<p className="flex items-center gap-2">
                    &gt; processing data streams 
                    <span className="flex gap-0.5"><span className="w-1 h-3 bg-blue-500 animate-pulse"></span><span className="w-1 h-3 bg-blue-500 animate-pulse delay-75"></span><span className="w-1 h-3 bg-blue-500 animate-pulse delay-150"></span></span>
</p>
<p className="text-green-400 mt-2">&gt; system operations optimal [100%]</p>
</div>
</div>
</div>

<div className="absolute -left-8 top-16 bg-[#16181d]/90 backdrop-blur-xl px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3 [transform:translateZ(40px)] transition-transform duration-500 group-hover:[transform:translateZ(60px)] shadow-xl">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white tracking-wide">Model Forge</span>
<span className="text-[10px] text-neutral-400 font-mono">Status: Active</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mt-24 mt-16 px-4">
<div className="flex flex-wrap items-center justify-center sm:justify-start gap-12 sm:gap-24 border-y border-white/5 py-12 reveal-on-scroll">
<div className="flex flex-col items-center sm:items-start">
<h3 className="text-5xl font-medium text-white tracking-tight">320<span className="text-blue-500">+</span></h3>
<p className="text-sm text-neutral-500 uppercase tracking-widest mt-2 font-medium">Projects</p>
</div>
<div className="w-px h-12 bg-white/10 hidden sm:block"></div>
<div className="flex flex-col items-center sm:items-start">
<h3 className="text-5xl font-medium text-white tracking-tight">112<span className="text-purple-500">+</span></h3>
<p className="text-sm text-neutral-500 uppercase tracking-widest mt-2 font-medium">Clients</p>
</div>
<div className="w-px h-12 bg-white/10 hidden sm:block"></div>
<div className="flex flex-col items-center sm:items-start">
<h3 className="text-5xl font-medium text-white tracking-tight">24<span className="text-indigo-400">/7</span></h3>
<p className="text-sm text-neutral-500 uppercase tracking-widest mt-2 font-medium">System Ops</p>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-2 sm:px-4">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white leading-tight">
<span className="inline-block animate-word delay-100">Solusi</span>
<span className="inline-block animate-word delay-200">yang</span>
<span className="inline-block animate-word delay-300 text-blue-400">Dirancang</span>
<br/>
<span className="inline-block animate-word delay-400">untuk</span>
<span className="inline-block animate-word delay-500">Dampak</span>
<span className="inline-block animate-word delay-600">Nyata</span>
</h2>
</div>
<a className="group inline-flex items-center gap-2 text-sm font-medium text-white bg-white/5 border border-white/10 hover:bg-white/10 px-5 py-2.5 rounded-full transition-all" href="#">
        Lihat Semua Produk
        <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">

<div className="lg:col-span-7 lg:h-full group overflow-hidden cursor-pointer h-[450px] rounded-[32px] relative reveal-on-scroll delay-100 bg-[#0a0a0a] glow-border">

<img alt="Model Forge" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=2065"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
<div className="flex flex-col p-8 sm:p-12 absolute inset-0 justify-end z-10">
<div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-tight mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
              Platform Visualisasi
            </div>
<h3 className="text-4xl sm:text-5xl font-medium text-white tracking-tight mb-3">Model Forge</h3>
<div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
<p className="text-neutral-400 text-base font-light mt-2 max-w-md pt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200 duration-500 leading-relaxed">
                Platform visualisasi sistem yang membantu tim enterprise merancang, menguji, dan mengoptimalkan alur kerja berbasis data. Digunakan untuk menyederhanakan integrasi.
              </p>
</div>
</div>
</div>

<div className="absolute top-8 right-8 w-12 h-12 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white opacity-0 -translate-y-4 translate-x-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500 ease-out">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 h-full">

<div className="relative flex-1 h-[300px] lg:h-auto group rounded-[32px] overflow-hidden cursor-pointer bg-[#0f1115] reveal-on-scroll delay-200 glow-border p-8 flex flex-col justify-between">

<div className="absolute inset-0 bg-grid opacity-50"></div>
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
<div className="relative z-10 flex justify-end">
<span className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
<iconify-icon className="text-lg" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
</div>
<div className="relative z-10">
<h3 className="text-3xl font-medium text-white tracking-tight">Mind Ops</h3>
<p className="text-neutral-400 text-sm mt-3 font-light leading-relaxed max-w-xs">
              From monitoring to resolution, IT operations must move with intelligence. Automate your core infrastructure.
            </p>
</div>
</div>

<div className="relative flex-1 h-[300px] lg:h-auto group rounded-[32px] overflow-hidden cursor-pointer bg-[#0a0a0a] border border-white/5 reveal-on-scroll delay-300 flex items-center justify-center">
<img alt="Servers" className="absolute inset-0 w-full h-full object-cover opacity-20 transition-transform duration-700 ease-out group-hover:scale-105 mix-blend-luminosity" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=2034"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="relative z-10 p-8 w-full h-full flex flex-col justify-end">
<h3 className="text-2xl font-medium text-white tracking-tight">Skalabilitas Enterprise</h3>
<div className="flex items-center gap-2 mt-4 text-blue-400 text-sm font-medium">
<span>Pelajari Arsitektur</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 sm:mt-32 px-4">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">
<span className="inline-block animate-word delay-100">Berita</span>
<span className="inline-block animate-word delay-200">&amp;</span>
<span className="inline-block animate-word delay-300">Kolaborasi</span>
</h2>
<p className="text-lg text-neutral-400 mt-3 font-light leading-relaxed">
          Update terbaru dari perjalanan kami menciptakan dampak digital.
        </p>
</div>
<div className="flex-shrink-0 mb-1">
<a className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors" href="#">
          Lihat Semua Berita
          <iconify-icon className="text-base transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div className="group relative w-full bg-[#0a0a0a] rounded-[32px] overflow-hidden flex flex-col lg:flex-row min-h-[450px] mb-6 glow-border reveal-on-scroll delay-100">

<div className="relative w-full lg:w-[45%] min-h-[250px] lg:min-h-full overflow-hidden bg-neutral-900">
<div className="absolute top-6 left-6 z-20 flex gap-2">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium text-white tracking-wide border border-white/10">
            Berita
          </span>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-md text-xs font-medium text-blue-300 tracking-wide border border-blue-500/20">
            Kolaborasi
          </span>
</div>

<img alt="Collaboration" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute inset-0 opacity-80 mix-blend-luminosity" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&amp;w=2070"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
</div>

<div className="w-full lg:w-[55%] p-8 sm:p-12 lg:p-14 flex flex-col justify-center relative bg-[#0f1115]">
<h3 className="text-2xl sm:text-3xl lg:text-4xl leading-tight font-medium text-white tracking-tight mb-6">
          Mindwalker Berkolaborasi dengan Pertamina untuk Inovasi HSSE
        </h3>
<p className="text-base text-neutral-400 leading-relaxed mb-10 font-light">
          Senin, 16 Februari 2026. Mindwalker resmi menjalin kerja sama dengan Pertamina dalam pengembangan video sosialisasi HSSE menggunakan teknologi VisionCraft untuk meningkatkan standar keamanan.
        </p>
<div className="mt-auto flex items-center justify-between w-full">
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-neutral-500 font-mono">16 Feb 2026</span>
</div>
<div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white text-neutral-400 transition-colors cursor-pointer border border-white/10">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="sm:mt-32 mt-20 border-y border-white/5 py-16 bg-[#030303] overflow-hidden reveal-on-scroll">
<div className="max-w-4xl mx-auto text-center mb-10 px-4">
<h2 className="text-lg md:text-xl font-medium tracking-widest text-neutral-500 uppercase">
        Technology Partners
      </h2>
</div>

<style>
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        display: flex;
        width: max-content;
        animation: marquee 30s linear infinite;
      }
      .partner-logo {
        height: 32px;
        opacity: 0.5;
        filter: grayscale(100%) brightness(200%);
        transition: opacity 0.3s, filter 0.3s;
      }
      .partner-logo:hover {
        opacity: 1;
        filter: grayscale(0%) brightness(100%);
      }
    </style>
<div className="relative flex overflow-x-hidden">

<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="animate-marquee flex items-center gap-24 px-12">

<div className="flex items-center gap-24">
<iconify-icon className="text-4xl partner-logo" icon="logos:nvidia"></iconify-icon>
<iconify-icon className="text-3xl partner-logo" icon="logos:aws"></iconify-icon>
<iconify-icon className="text-3xl partner-logo" icon="logos:google-cloud"></iconify-icon>
<iconify-icon className="text-3xl partner-logo" icon="logos:microsoft-azure"></iconify-icon>
<iconify-icon className="text-4xl partner-logo" icon="logos:ibm"></iconify-icon>
<iconify-icon className="text-4xl partner-logo" icon="logos:docker"></iconify-icon>
</div>
<div className="flex items-center gap-24">
<iconify-icon className="text-4xl partner-logo" icon="logos:nvidia"></iconify-icon>
<iconify-icon className="text-3xl partner-logo" icon="logos:aws"></iconify-icon>
<iconify-icon className="text-3xl partner-logo" icon="logos:google-cloud"></iconify-icon>
<iconify-icon className="text-3xl partner-logo" icon="logos:microsoft-azure"></iconify-icon>
<iconify-icon className="text-4xl partner-logo" icon="logos:ibm"></iconify-icon>
<iconify-icon className="text-4xl partner-logo" icon="logos:docker"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative mt-24 sm:mt-32">

<footer className="relative bg-[#0a0a0a] rounded-[32px] sm:rounded-[40px] overflow-hidden text-neutral-300 glow-border reveal-on-scroll border border-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="px-8 py-16 sm:px-16 sm:py-20 relative z-10">

<div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-16 border-b border-white/10">
<div className="max-w-xl text-center md:text-left">
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-3">Ready to Discover?</h2>
<p className="text-lg text-neutral-400 font-light">Looking for details? Leave your email, and we'll reach out.</p>
</div>
<div className="w-full md:w-auto flex-shrink-0">
<div className="flex items-center bg-white/5 border border-white/10 rounded-xl p-2 w-full md:w-[400px] backdrop-blur-sm">
<iconify-icon className="text-neutral-400 ml-3 mr-2 text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="bg-transparent border-none outline-none text-white placeholder:text-neutral-600 w-full px-2 text-base font-light" placeholder="talitharyn@gmail.com" type="email"/>
<button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                   Send
                 </button>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 pt-16">
<div className="max-w-sm">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-xl font-medium tracking-tight text-white">MindWalker</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-8 font-light">
              Komplek Ruko Grand Centro Bintaro<br/>
              JL. Raya Kodam bintaro No. A19<br/>
              Pesanggrahan, Jakarta Selatan<br/>
              Jakarta 12320, Indonesia
            </p>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:instagram"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-3xl -ml-1" icon="basil:linkedin-solid"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mynaui:github"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-10 flex-1">
<div>
<h4 className="font-medium text-white mb-6 tracking-tight text-base">Produk</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Model Forge</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mind Ops</a></li>
<li><a className="hover:text-white transition-colors" href="#">VisionCraft</a></li>
<li><a className="hover:text-white transition-colors" href="#">Enterprise API</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6 tracking-tight text-base">Perusahaan</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Tentang Kami</a></li>
<li><a className="hover:text-white transition-colors" href="#">Berita &amp; Media</a></li>
<li><a className="hover:text-white transition-colors" href="#">Karir</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kontak</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6 tracking-tight text-base">Legal</h4>
<ul className="space-y-4 text-sm text-neutral-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="mt-4 pt-6 border-t border-white/5 flex items-center justify-center relative z-10 pb-6">
<p className="text-sm text-neutral-500 font-light">© 2026 Mindwalker.ai | All Rights reserved.</p>
</div>
</footer>
</div>
</main>


    </>
  );
}
