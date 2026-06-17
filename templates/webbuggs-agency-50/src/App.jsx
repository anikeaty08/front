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



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
dark: '#020408',
brand: '#0066cc',
brandLight: '#60a5fa',
glass: 'rgba(255, 255, 255, 0.03)',
},
animation: {
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'text-shimmer': 'textShimmer 3s ease-out infinite alternate',
'scan': 'scan 4s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(40px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
textShimmer: {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '100% 50%' },
},
scan: {
'0%': { top: '-10%', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '110%', opacity: '0' },
}
}
}
}
}



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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 opacity-0 animate-slide-up" href="#" style={{animationDelay: '0.1s'}}>
<img alt="WebBuggs Logo" className="h-8 md:h-10 w-auto" src="https://cdn.prod.website-files.com/666c65a627fecfa580276cc7/668311ecf8374c451aaf62cd_Group%2010300.svg"/>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400 opacity-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
<a className="hover:text-white transition-colors duration-200" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#work">Work</a>
<a className="hover:text-white transition-colors duration-200" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold px-5 py-2.5 rounded-full border border-white/10 transition-all duration-300 opacity-0 animate-slide-up" href="#contact" style={{animationDelay: '0.3s'}}>
                Start Project
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 overflow-hidden perspective-container">

<div className="absolute inset-0 grid-bg -z-10 pointer-events-none opacity-50"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-brand/10 to-transparent blur-[100px] -z-10"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
<div className="max-w-5xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-xs font-semibold text-brandLight mb-8 opacity-0 animate-slide-up shadow-[0_0_20px_rgba(0,102,204,0.2)]" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
                Accepting new clients for Q4
            </div>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.15]">
<div className="opacity-0 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    Elevating brands with
                </div>
<div className="opacity-0 animate-slide-up" style={{animationDelay: '0.35s'}}>
<span className="animated-gradient-text animate-text-shimmer">futuristic digital excellence.</span>
</div>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light opacity-0 animate-slide-up" style={{animationDelay: '0.5s'}}>
                We engineer high-performance web experiences that feel alive. Precision code meets dimension-defying design at WebBuggs.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-slide-up" style={{animationDelay: '0.65s'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-brand text-white rounded-full font-medium text-sm hover:bg-brand/90 transition-all duration-300 shadow-[0_0_40px_rgba(0,102,204,0.4)] flex items-center justify-center gap-2 border border-brand/50 group hover:scale-105" href="#contact">
                    Request Services
                    <iconify-icon className="group-hover:rotate-180 transition-transform duration-500" height="18" icon="solar:stars-minimalistic-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2 group" href="#work">
                    View Portfolio
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>

<div className="mt-20 relative w-full max-w-5xl mx-auto opacity-0 animate-slide-up" style={{animationDelay: '0.8s'}}>
<div className="tilt-card relative rounded-xl border border-white/10 bg-[#050A14] p-2 backdrop-blur-xl">

<div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none z-20">
<div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-brandLight/50 to-transparent animate-scan shadow-[0_0_20px_#60a5fa]"></div>
</div>

<div className="relative overflow-hidden rounded-lg border border-white/5">
<img alt="Dashboard Preview" className="w-full h-auto opacity-80" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent"></div>

<div className="absolute top-4 left-4 flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
</div>
</div>

<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-[50px] bg-brand/20 blur-[60px] rounded-[100%] -z-10"></div>
</div>
</div>
</section>

<section className="px-6 pb-20 border-b border-white/5 relative z-20">
<div className="max-w-5xl mx-auto">
<div className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
<div className="flex items-center gap-4 w-full md:w-auto group">
<div className="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">#1</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Market Leader</div>
</div>
</div>
<div className="hidden md:block w-px h-12 bg-white/10"></div>
<div className="flex items-center gap-4 w-full md:w-auto group">
<div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">98%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Client Retention</div>
</div>
</div>
<div className="hidden md:block w-px h-12 bg-white/10"></div>
<div className="flex items-center gap-4 w-full md:w-auto group">
<div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight">100+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider">Projects Shipped</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="process">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">The Workflow</h2>
<p className="text-neutral-500 max-w-lg mx-auto">From concept to deployment, our process is streamlined for speed and quality.</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>

<div className="relative group">
<div className="w-24 h-24 mx-auto rounded-full glass-card border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:bg-brand/10 transition-all duration-300 z-10 relative shadow-[0_0_20px_rgba(0,102,204,0.1)] group-hover:shadow-[0_0_30px_rgba(0,102,204,0.3)] group-hover:scale-110">
<iconify-icon icon="solar:magnifer-linear" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-xs font-mono shadow-md">01</div>
</div>
<div className="text-center px-4">
<h3 className="text-lg font-medium text-white mb-2">Discovery</h3>
<p className="text-sm text-neutral-400">We analyze your niche, competitors, and goals to build a winning strategy.</p>
</div>
</div>
<div className="relative group">
<div className="w-24 h-24 mx-auto rounded-full glass-card border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:bg-brand/10 transition-all duration-300 z-10 relative shadow-[0_0_20px_rgba(0,102,204,0.1)] group-hover:shadow-[0_0_30px_rgba(0,102,204,0.3)] group-hover:scale-110">
<iconify-icon icon="solar:figma-linear" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-xs font-mono shadow-md">02</div>
</div>
<div className="text-center px-4">
<h3 className="text-lg font-medium text-white mb-2">Design</h3>
<p className="text-sm text-neutral-400">We craft high-fidelity mockups focusing on UX and visual impact.</p>
</div>
</div>
<div className="relative group">
<div className="w-24 h-24 mx-auto rounded-full glass-card border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:bg-brand/10 transition-all duration-300 z-10 relative shadow-[0_0_20px_rgba(0,102,204,0.1)] group-hover:shadow-[0_0_30px_rgba(0,102,204,0.3)] group-hover:scale-110">
<iconify-icon icon="solar:code-circle-linear" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-xs font-mono shadow-md">03</div>
</div>
<div className="text-center px-4">
<h3 className="text-lg font-medium text-white mb-2">Develop</h3>
<p className="text-sm text-neutral-400">Clean code implementation for maximum speed and responsiveness.</p>
</div>
</div>
<div className="relative group">
<div className="w-24 h-24 mx-auto rounded-full glass-card border-brand/20 flex items-center justify-center text-brand mb-6 group-hover:bg-brand/10 transition-all duration-300 z-10 relative shadow-[0_0_20px_rgba(0,102,204,0.1)] group-hover:shadow-[0_0_30px_rgba(0,102,204,0.3)] group-hover:scale-110">
<iconify-icon icon="solar:rocket-2-linear" width="32"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-xs font-mono shadow-md">04</div>
</div>
<div className="text-center px-4">
<h3 className="text-lg font-medium text-white mb-2">Launch</h3>
<p className="text-sm text-neutral-400">Deployment, SEO configuration, and hand-off. Your site goes live.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white/[0.01]" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Our Expertise</h2>
<p className="text-neutral-500 max-w-lg">Explore how we combine design and technology to create industry-leading digital products.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 glass-card rounded-3xl overflow-hidden relative group hover:border-brand/40 transition-all duration-500">
<div className="absolute inset-0 z-0">
<img alt="Analytics Blue" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-end">
<div className="w-10 h-10 rounded-lg bg-brand/20 backdrop-blur-md flex items-center justify-center text-brandLight mb-4 border border-brand/20">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">SEO &amp; Performance Ranking</h3>
<p className="text-sm text-neutral-300 max-w-md">We structure your site's DNA to rank higher. Lightning fast load times and semantic HTML ensure you stay at the top of search results.</p>
</div>
</div>

<div className="md:row-span-2 glass-card rounded-3xl overflow-hidden relative group hover:border-brand/40 transition-all duration-500 bg-[#001133]">
<div className="absolute inset-0 z-0">
<img alt="Abstract Blue Design" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div className="mt-4 p-4 border border-white/10 rounded-xl bg-black/40 backdrop-blur-sm self-center w-full max-w-[200px] animate-float shadow-lg">
<div className="flex gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-2">
<div className="h-2 bg-white/20 rounded w-3/4"></div>
<div className="h-2 bg-white/10 rounded w-1/2"></div>
<div className="h-8 bg-gradient-to-r from-brand/60 to-blue-400/20 rounded mt-4 border border-brand/30 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-white/10 -translate-x-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
<div>
<div className="w-10 h-10 rounded-lg bg-brand/20 backdrop-blur-md flex items-center justify-center text-brandLight mb-4 border border-brand/20">
<iconify-icon icon="solar:pallete-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Futuristic UI/UX</h3>
<p className="text-sm text-neutral-300">Interfaces that feel like magic. Smooth interactions and accessible contrast.</p>
</div>
</div>
</div>

<div className="glass-card rounded-3xl overflow-hidden relative group hover:border-brand/40 transition-all duration-500 min-h-[300px]">
<div className="absolute inset-0 z-0">
<img alt="Code Blue" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-end">
<div className="w-10 h-10 rounded-lg bg-brand/20 backdrop-blur-md flex items-center justify-center text-brandLight mb-4 border border-brand/20">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Clean Development</h3>
<p className="text-sm text-neutral-300">Scalable architecture. No bloat, just performance.</p>
</div>
</div>

<div className="glass-card rounded-3xl overflow-hidden relative group hover:border-brand/40 transition-all duration-500 min-h-[300px]">
<div className="absolute inset-0 z-0">
<img alt="Digital Commerce" className="w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&amp;w=2064&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent"></div>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-end">
<div className="w-10 h-10 rounded-lg bg-brand/20 backdrop-blur-md flex items-center justify-center text-brandLight mb-4 border border-brand/20">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">E-Commerce Ready</h3>
<p className="text-sm text-neutral-300">Conversion-focused layouts that drive sales and retain customers.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-[#010204]" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Client Success</h2>
<p className="text-neutral-500">Don't just take our word for it.</p>
</div>
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#020408]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#020408]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#020408]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64" />
<div className="w-10 h-10 rounded-full border-2 border-[#020408] bg-brand text-white flex items-center justify-center text-[10px] font-medium">99+</div>
</img></img></img></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl border border-white/5 relative hover:border-brand/30 transition-all duration-300 hover:transform hover:-translate-y-1">
<div className="absolute top-8 right-8 text-brand/20">
<iconify-icon icon="solar:quote-up-linear" width="40"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-brand mb-6 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"WebBuggs transformed our online presence. Our search ranking jumped to position #1 within three weeks of the redesign. The dark blue aesthetic perfectly matches our corporate identity."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden">
<img alt="Sarah" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="text-white text-sm font-medium">Sarah Jenkins</div>
<div className="text-neutral-500 text-xs">CTO, Vertex Logic</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border border-white/5 relative hover:border-brand/30 transition-all duration-300 hover:transform hover:-translate-y-1">
<div className="absolute top-8 right-8 text-brand/20">
<iconify-icon icon="solar:quote-up-linear" width="40"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-brand mb-6 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"Incredible attention to detail. The UI is fluid, and the custom development meant we didn't have to deal with clunky website builders. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden">
<img alt="Marcus" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="text-white text-sm font-medium">Marcus Chen</div>
<div className="text-neutral-500 text-xs">Founder, Nebulon</div>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl border border-white/5 relative hidden lg:block hover:border-brand/30 transition-all duration-300 hover:transform hover:-translate-y-1">
<div className="absolute top-8 right-8 text-brand/20">
<iconify-icon icon="solar:quote-up-linear" width="40"></iconify-icon>
</div>
<div className="flex items-center gap-1 text-brand mb-6 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">"We needed a high-performance landing page for our new app launch. The team delivered a site that converts at 15%. The visuals are stunning."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 overflow-hidden">
<img alt="Elena" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="text-white text-sm font-medium">Elena Rodriguez</div>
<div className="text-neutral-500 text-xs">Director, Pulse App</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden border-t border-white/5" id="contact">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Initialize Project</h2>
<p className="text-neutral-500">Configure your requirements below to receive a custom proposal.</p>
</div>
<form className="glass-card rounded-3xl p-8 md:p-12 border border-brand/20 shadow-[0_0_50px_rgba(0,102,204,0.05)]">
<div className="mb-10">
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">Project Type</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<label className="cursor-pointer group">
<input checked="" className="peer sr-only" name="type" type="radio"/>
<div className="h-full px-4 py-4 rounded-xl border border-white/10 bg-black/20 text-neutral-400 hover:bg-white/5 peer-checked:bg-brand peer-checked:text-white peer-checked:border-brand/50 transition-all text-center flex flex-col items-center gap-2 group-hover:scale-[1.02]">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Landing Page</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<div className="h-full px-4 py-4 rounded-xl border border-white/10 bg-black/20 text-neutral-400 hover:bg-white/5 peer-checked:bg-brand peer-checked:text-white peer-checked:border-brand/50 transition-all text-center flex flex-col items-center gap-2 group-hover:scale-[1.02]">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">E-Commerce</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="type" type="radio"/>
<div className="h-full px-4 py-4 rounded-xl border border-white/10 bg-black/20 text-neutral-400 hover:bg-white/5 peer-checked:bg-brand peer-checked:text-white peer-checked:border-brand/50 transition-all text-center flex flex-col items-center gap-2 group-hover:scale-[1.02]">
<iconify-icon icon="solar:cube-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Web App UI</span>
</div>
</label>
</div>
</div>
<div className="mb-10">
<div className="flex justify-between items-center mb-4">
<label className="block text-xs font-medium text-neutral-400 uppercase tracking-wider">Estimated Budget</label>
<span className="text-white font-mono text-sm text-brandLight">$<span id="budget-val">2,500</span>+</span>
</div>
<input className="w-full" max="10000" min="500" oninput="document.getElementById('budget-val').innerText = this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')" step="500" type="range" value="2500"/>
</div>
<div className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs text-neutral-500 mb-2 ml-1">Name</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-700 text-sm focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-xs text-neutral-500 mb-2 ml-1">Email</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-700 text-sm focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="group">
<label className="block text-xs text-neutral-500 mb-2 ml-1">Project Details</label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-neutral-700 text-sm focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all resize-none" placeholder="Tell us about your goals, timeline, and inspiration..." rows="4"></textarea>
</div>
<label className="flex items-start gap-3 cursor-pointer group">
<input className="sr-only peer" type="checkbox"/>
<div className="w-5 h-5 rounded border border-white/20 bg-black/50 peer-checked:bg-brand peer-checked:border-brand flex items-center justify-center transition-all mt-0.5">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">I agree to process my personal data for the project estimation.</span>
</label>
</div>
<div className="mt-10">
<button className="w-full bg-brand text-white font-medium py-3 rounded-lg hover:bg-brand/90 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(0,102,204,0.3)] border border-brand/50 hover:shadow-[0_0_30px_rgba(0,102,204,0.5)]" type="button">
<span>Launch Request</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
<p className="text-center text-[10px] text-neutral-600 mt-4">Typically responds within 24 hours.</p>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-[#020408] py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<img alt="WebBuggs Logo" className="h-6 w-auto grayscale hover:grayscale-0 transition-all duration-300" src="https://cdn.prod.website-files.com/666c65a627fecfa580276cc7/668311ecf8374c451aaf62cd_Group%2010300.svg"/>
</div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-brandLight transition-colors" href="#">Privacy</a>
<a className="hover:text-brandLight transition-colors" href="#">Terms</a>
<a className="hover:text-brandLight transition-colors" href="#">Twitter</a>
<a className="hover:text-brandLight transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-[10px] text-neutral-700 font-mono">
                © 2024 WebBuggs. All systems operational.
            </div>
</div>
</footer>

    </>
  );
}
