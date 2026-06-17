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
      

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

<svg className="absolute top-0 right-0 w-[140%] h-[140%] -translate-y-1/4 translate-x-1/4 opacity-40" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
<path className="opacity-10" d="M-100 500 C 200 600, 400 200, 1100 500" fill="none" stroke="#00843d" strokeWidth="1.5"></path>
<path className="opacity-10" d="M-100 600 C 300 700, 500 300, 1100 600" fill="none" stroke="#00843d" strokeWidth="1.5" style={{animationDelay: '-5s'}}></path>
<path className="opacity-10" d="M-100 400 C 100 500, 300 100, 1100 400" fill="none" stroke="#00843d" strokeWidth="1"></path>

<circle className="blur-[120px] opacity-[0.08]" cx="800" cy="300" fill="#00843d" r="200"></circle>
<circle className="blur-[100px] opacity-[0.05]" cx="200" cy="800" fill="#00843d" r="250"></circle>
</svg>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[#F8F9FA]/80 backdrop-blur-md border-b border-[#1B211A]/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="text-[#00843d]">
<iconify-icon icon="solar:command-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-lg tracking-tight font-bold text-[#1B211A] font-manrope">AURORA</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-[#1B211A]/70 hover:text-[#00843d] transition-colors font-manrope" href="#">Solutions</a>
<a className="text-sm font-medium text-[#1B211A]/70 hover:text-[#00843d] transition-colors font-manrope" href="#">Platform</a>
<a className="text-sm font-medium text-[#1B211A]/70 hover:text-[#00843d] transition-colors font-manrope" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-[#1B211A] hover:text-[#00843d] transition-colors font-manrope" href="#">Sign in</a>
<a className="text-sm font-semibold bg-[#1B211A] text-white px-5 py-2.5 rounded-full hover:bg-[#00843d] transition-all shadow-lg shadow-[#00843d]/10 font-manrope" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<main className="flex-grow flex items-center relative z-10 pt-32 pb-20 px-6">
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">

<div className="animate-enter inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00843d]/5 border border-[#00843d]/10 text-[#00843d] mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00843d] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#00843d]"></span>
</span>
<span className="text-xs font-bold tracking-wide uppercase font-manrope">Australian Sovereign Cloud</span>
</div>
<h1 className="animate-enter text-5xl lg:text-7xl font-semibold text-[#1B211A] tracking-tight leading-[1.1] mb-6" style={{animationDelay: '100ms'}}>
                    Intelligent <br/>
<span className="text-[#00843d]">Software</span> Logic.
                </h1>
<p className="animate-enter text-lg text-[#1B211A]/60 leading-relaxed mb-10 max-w-lg font-manrope font-medium" style={{animationDelay: '200ms'}}>
                    Deploy enterprise-grade solutions with unmatched reliability. We engineer the digital infrastructure that powers Australia's leading organizations.
                </p>
<div className="animate-enter flex flex-col sm:flex-row items-start sm:items-center gap-4" style={{animationDelay: '300ms'}}>
<button className="group h-14 px-8 rounded-full bg-[#00843d] text-white text-sm font-semibold hover:bg-[#006630] transition-all shadow-xl shadow-[#00843d]/20 flex items-center gap-2">
<span>Request Demo</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="h-14 px-8 rounded-full bg-white border border-[#1B211A]/10 text-[#1B211A] text-sm font-semibold hover:border-[#00843d]/30 hover:text-[#00843d] transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
<span>View Case Studies</span>
</button>
</div>
<div className="animate-enter mt-12 pt-8 border-t border-[#1B211A]/5 flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500" style={{animationDelay: '400ms'}}>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase">Secure</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase">Local</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bolt-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-bold tracking-widest uppercase">Fast</span>
</div>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:block animate-enter" style={{animationDelay: '300ms'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#00843d]/10 to-transparent rounded-full blur-3xl"></div>

<div className="absolute top-10 right-0 w-[400px] h-[480px] glass-card rounded-3xl p-6 opacity-60 transform scale-95 translate-y-4 animate-float-delayed z-10 flex flex-col justify-between">
<div className="flex justify-between items-center mb-6">
<div className="w-24 h-3 bg-[#1B211A]/5 rounded-full"></div>
<iconify-icon className="text-[#1B211A]/20" icon="solar:menu-dots-bold"></iconify-icon>
</div>

<div className="space-y-4">
<div className="flex gap-4 items-center">
<div className="w-8 h-8 rounded-full bg-[#00843d]/10 flex items-center justify-center text-[#00843d]">
<iconify-icon icon="solar:cloud-upload-linear"></iconify-icon>
</div>
<div className="w-full h-2 bg-[#1B211A]/5 rounded-full"></div>
</div>
<div className="flex gap-4 items-center">
<div className="w-8 h-8 rounded-full bg-[#1B211A]/5 flex items-center justify-center text-[#1B211A]/40">
<iconify-icon icon="solar:code-file-linear"></iconify-icon>
</div>
<div className="w-2/3 h-2 bg-[#1B211A]/5 rounded-full"></div>
</div>
<div className="flex gap-4 items-center">
<div className="w-8 h-8 rounded-full bg-[#1B211A]/5 flex items-center justify-center text-[#1B211A]/40">
<iconify-icon icon="solar:settings-linear"></iconify-icon>
</div>
<div className="w-1/2 h-2 bg-[#1B211A]/5 rounded-full"></div>
</div>
</div>
<div className="h-32 bg-[#1B211A]/5 rounded-xl mt-auto"></div>
</div>

<div className="absolute top-20 right-20 w-[420px] h-[520px] glass-card rounded-3xl p-8 transform animate-float z-20 flex flex-col">

<div className="flex items-center justify-between mb-8">
<div>
<p className="text-xs font-semibold text-[#1B211A]/40 uppercase tracking-wider mb-1">Total Revenue</p>
<h3 className="text-3xl font-semibold text-[#1B211A] tracking-tight">$842,050</h3>
</div>
<div className="w-10 h-10 rounded-full border border-[#1B211A]/5 flex items-center justify-center bg-white/50 text-[#00843d]">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
</div>

<div className="flex items-end justify-between h-32 mb-8 gap-3">
<div className="w-full bg-[#00843d]/10 rounded-t-sm h-[40%] relative group">
<div className="absolute bottom-0 w-full bg-[#00843d] h-0 group-hover:h-full transition-all duration-500 rounded-t-sm opacity-20"></div>
</div>
<div className="w-full bg-[#00843d]/10 rounded-t-sm h-[65%] relative group">
<div className="absolute bottom-0 w-full bg-[#00843d] h-0 group-hover:h-full transition-all duration-500 rounded-t-sm opacity-20"></div>
</div>
<div className="w-full bg-[#00843d]/10 rounded-t-sm h-[50%] relative group">
<div className="absolute bottom-0 w-full bg-[#00843d] h-0 group-hover:h-full transition-all duration-500 rounded-t-sm opacity-20"></div>
</div>
<div className="w-full bg-[#00843d] rounded-t-sm h-[85%] shadow-lg shadow-[#00843d]/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
</div>
<div className="w-full bg-[#00843d]/10 rounded-t-sm h-[60%] relative group">
<div className="absolute bottom-0 w-full bg-[#00843d] h-0 group-hover:h-full transition-all duration-500 rounded-t-sm opacity-20"></div>
</div>
</div>

<div className="space-y-4 mt-auto">
<div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/40 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="bg-blue-500/10 text-blue-600 p-2 rounded-lg">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#1B211A]">New Users</p>
<p className="text-xs text-[#1B211A]/50">+12% from last week</p>
</div>
</div>
<span className="text-sm font-bold text-[#1B211A]">2,540</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/40 transition-colors cursor-default">
<div className="flex items-center gap-3">
<div className="bg-orange-500/10 text-orange-600 p-2 rounded-lg">
<iconify-icon icon="solar:widget-4-linear" width="18"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-[#1B211A]">Active Sessions</p>
<p className="text-xs text-[#1B211A]/50">+5% from last week</p>
</div>
</div>
<span className="text-sm font-bold text-[#1B211A]">845</span>
</div>
</div>
</div>

<div className="absolute bottom-32 -left-4 glass-card p-3 rounded-2xl flex items-center gap-3 animate-float-delayed z-30">
<div className="bg-[#00843d] text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-md">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<div className="pr-2">
<p className="text-xs font-bold text-[#1B211A]">System Optimal</p>
<p className="text-[10px] text-[#1B211A]/50 font-semibold uppercase tracking-wide">99.9% Uptime</p>
</div>
</div>
</div>
</div>
</main>

    </>
  );
}
