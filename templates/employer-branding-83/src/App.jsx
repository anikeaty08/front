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
      

<nav className="absolute top-0 z-50 w-full bg-transparent">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-24 items-center justify-between">
<div className="flex items-center gap-12">
<a className="font-['Martina_Plantin','Playfair_Display',serif] text-3xl font-medium tracking-tight text-[#1f2b37]" href="#">vouch</a>
<div className="hidden lg:flex lg:gap-8">
<a className="text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">Why Vouch</a>
<a className="flex items-center gap-1 text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">
                            Use Cases <iconify-icon className="opacity-50" height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">Pricing</a>
<a className="text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">Customers</a>
<a className="flex items-center gap-1 text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">
                            Resources <iconify-icon className="opacity-50" height="16" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="hidden lg:flex lg:items-center lg:gap-6">
<a className="rounded-full bg-[#52667a] px-6 py-2.5 text-base font-medium text-white shadow-sm hover:bg-[#3f5265] transition-colors" href="#">Book a demo</a>
<a className="text-base font-medium text-[#1f2b37] hover:text-[#52667a] transition-colors" href="#">Sign in</a>
</div>
<div className="lg:hidden flex items-center">
<button className="p-2 text-[#1f2b37]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex justify-center items-center opacity-40">
<svg className="w-[150%] h-[150%] text-[#e5e4de]" fill="none" viewbox="0 0 1440 800">
<path d="M-200 200C100 300 400 -100 800 100C1200 300 1300 600 1600 400" stroke="currentColor" strokeLinecap="round" strokeWidth="60"></path>
<path d="M-100 500C200 600 500 200 900 400C1300 600 1400 900 1700 700" stroke="currentColor" strokeLinecap="round" strokeWidth="60"></path>
</svg>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="max-w-2xl">
<h1 className="font-['Martina_Plantin','Playfair_Display',serif] text-5xl font-medium tracking-tight text-[#1f2b37] sm:text-6xl leading-[1.05]">
                        Bring your employer brand to life with authentic video.
                    </h1>
<p className="mt-8 text-xl text-[#4a5568] leading-relaxed max-w-lg">
                        Scale your recruitment marketing with real employee stories. Collect, edit, and share on-brand video content without the production overhead.
                    </p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<a className="rounded-full bg-[#52667a] px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-[#3f5265] transition-colors" href="#">
                            Book a demo
                        </a>
<a className="rounded-full bg-transparent border border-[#d1d0c9] px-8 py-3.5 text-base font-medium text-[#1f2b37] hover:bg-[#ebeae4] transition-colors" href="#">
                            Take a 5-min tour
                        </a>
</div>
</div>
<div className="relative w-full aspect-[4/3] rounded-2xl shadow-2xl overflow-hidden bg-white border border-[#e5e4de]">

<div className="bg-gray-50 px-4 py-3 flex items-center gap-2 border-b border-[#e5e4de]">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
</div>

<div className="relative w-full h-full bg-[#f5f4f0] p-6 flex flex-col gap-4">
<div className="flex items-center justify-between mb-2">
<div className="w-32 h-6 bg-[#e5e4de] rounded-md"></div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-[#e5e4de] shadow-sm">
<iconify-icon className="text-[#4a5568]" height="16" icon="solar:bell-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
<div className="flex-grow bg-white rounded-xl border border-[#e5e4de] shadow-sm overflow-hidden relative group">
<img alt="Team" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-[#1f2b37]/20 flex items-center justify-center">
<div className="w-16 h-16 bg-white/95 rounded-full flex items-center justify-center pl-1 cursor-pointer shadow-lg group-hover:scale-105 transition-transform">
<iconify-icon className="text-[#1f2b37]" height="24" icon="solar:play-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>

<div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg py-2 px-4 flex items-center gap-4 border border-white/20 shadow-sm">
<iconify-icon className="text-[#1f2b37]" height="16" icon="solar:pause-linear" strokeWidth="1.5" width="16"></iconify-icon>
<div className="h-1 bg-gray-200 flex-grow rounded-full overflow-hidden"><div className="h-full w-1/3 bg-[#52667a]"></div></div>
<span className="text-xs font-medium text-[#1f2b37]">0:45 / 2:10</span>
<iconify-icon className="text-[#1f2b37]" height="16" icon="solar:full-screen-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-[#e5e4de]">
<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
<p className="text-base font-medium text-[#1f2b37]">Trusted by 1,000+ people teams globally</p>
<div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-70 grayscale">
<span className="text-2xl font-medium tracking-tighter">Flutter</span>
<span className="text-xl font-medium tracking-widest">ERICSSON</span>
<span className="flex items-center gap-2 text-2xl font-medium tracking-tight">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon> Culture Amp
                </span>
<span className="text-2xl font-medium tracking-tight">HubSpot</span>
<span className="text-2xl font-medium flex items-center gap-1">
<iconify-icon height="24" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon> MongoDB
                </span>
<span className="text-2xl font-medium tracking-tight">GoDaddy</span>
<span className="text-2xl font-medium tracking-tight">Indeed</span>
<span className="text-2xl font-medium tracking-tighter uppercase">Aldi</span>
</div>
</div>
</section>

<section className="py-24 lg:py-32 overflow-hidden bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="max-w-xl">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] leading-[1.1]">
                        Collect employee videos globally. Zero friction.
                    </h2>
<p className="mt-6 text-xl text-[#4a5568] leading-relaxed">
                        Send a magic link to your team anywhere in the world. They record authentic stories straight from their phone or laptop. No apps, no passwords.
                    </p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Built-in teleprompter for nervous speakers.</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Step-by-step guidance to ensure perfect framing and audio.</p>
</li>
</ul>
<div className="mt-10">
<a className="rounded-full bg-white border border-[#d1d0c9] px-8 py-3.5 text-base font-medium text-[#1f2b37] hover:bg-[#ebeae4] transition-colors inline-block" href="#">
                            Explore Collection
                        </a>
</div>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-[5/4] bg-[#f5f4f0] rounded-2xl flex items-center justify-center p-8">

<div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border border-[#e5e4de]">
<div className="p-4 border-b border-[#e5e4de] flex items-center gap-3">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#52667a]">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-base font-medium text-[#1f2b37] leading-none">Video Request</div>
<div className="text-xs text-[#4a5568] mt-1">From the Talent Team</div>
</div>
</div>
<div className="p-6">
<p className="text-base text-[#4a5568] mb-5">Hi team, we're putting together a new careers page and would love to hear your story. It only takes 2 minutes!</p>
<div className="bg-gray-50 rounded-lg p-4 mb-5 border border-[#e5e4de]">
<p className="text-sm font-medium text-[#4a5568] uppercase tracking-wider mb-2">Questions to answer</p>
<p className="text-base font-medium text-[#1f2b37]">1. What's your favorite part about working here?</p>
</div>
<button className="w-full bg-[#52667a] text-white rounded-md py-3 text-base font-medium flex items-center justify-center gap-2 hover:bg-[#3f5265] transition-colors">
<iconify-icon height="20" icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon> Start Recording
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 overflow-hidden bg-[#f5f4f0]">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="order-2 lg:order-1 relative w-full aspect-[4/3] lg:aspect-[5/4] rounded-2xl flex items-center justify-center overflow-hidden shadow-sm">
<img alt="Professional" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80"/>

<div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-2xl p-5 border border-[#e5e4de] max-w-xs">
<p className="text-sm text-[#4a5568] font-medium mb-3">Brand Settings</p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-[#f5f4f0] border border-[#e5e4de] text-[#1f2b37] rounded-md text-xs font-medium flex items-center gap-1">
<iconify-icon height="14" icon="solar:pallete-2-linear" strokeWidth="1.5" width="14"></iconify-icon> Brand Colors
                            </span>
<span className="px-3 py-1.5 bg-[#f5f4f0] border border-[#e5e4de] text-[#1f2b37] rounded-md text-xs font-medium flex items-center gap-1">
<iconify-icon height="14" icon="solar:text-square-linear" strokeWidth="1.5" width="14"></iconify-icon> Captions
                            </span>
<span className="px-3 py-1.5 bg-[#52667a] text-white rounded-md text-xs font-medium flex items-center gap-1">
<iconify-icon height="14" icon="solar:play-linear" strokeWidth="1.5" width="14"></iconify-icon> Add Logo
                            </span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 max-w-xl lg:ml-auto">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] leading-[1.1]">
                        Turn raw clips into polished, branded assets.
                    </h2>
<p className="mt-6 text-xl text-[#4a5568] leading-relaxed">
                        Say goodbye to complex editing software. Automatically add your logo, brand colors, and accessible captions in a few clicks.
                    </p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Trim dead space and stitch the best responses together.</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">AI-generated captions available in over 30 languages.</p>
</li>
</ul>
<div className="mt-10">
<a className="rounded-full bg-[#52667a] px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-[#3f5265] transition-colors inline-block" href="#">
                            Book a demo
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 overflow-hidden bg-white">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
<div className="max-w-xl">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] leading-[1.1]">
                        Embed anywhere to convert top talent.
                    </h2>
<p className="mt-6 text-xl text-[#4a5568] leading-relaxed">
                        Showcase authentic employee voices exactly where candidates are looking. Drop videos onto your career site, job postings, or social media.
                    </p>
<ul className="mt-8 space-y-4">
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Lightning-fast, responsive embed codes.</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f2b37] shrink-0"></div>
<p className="text-lg text-[#1f2b37]">Track engagement and see which stories resonate most.</p>
</li>
</ul>
</div>
<div className="relative w-full aspect-[4/3] lg:aspect-[5/4] flex items-center justify-center">
<div className="absolute inset-0 bg-[#f5f4f0] rounded-2xl"></div>
<div className="relative z-10 w-full max-w-md p-6">

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="aspect-square bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e4de]"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/></div>
<div className="aspect-square bg-white rounded-xl overflow-hidden shadow-sm border border-[#e5e4de]"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-xl p-5 w-80 border border-[#e5e4de]">
<div className="flex items-center gap-2 mb-4 bg-[#52667a] text-white self-start inline-flex px-3 py-1.5 rounded-md">
<iconify-icon height="16" icon="solar:code-scan-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium">Embed Code</span>
</div>
<div className="bg-[#f5f4f0] p-3 rounded border border-[#e5e4de] overflow-hidden">
<p className="text-xs text-[#4a5568] font-mono whitespace-nowrap opacity-80">&lt;iframe src="https://vouch.com/embed/..."&gt;&lt;/iframe&gt;</p>
</div>
<div className="mt-4 flex gap-2">
<button className="text-sm font-medium text-[#52667a] flex items-center gap-1 hover:text-[#1f2b37] transition-colors">
<iconify-icon height="16" icon="solar:link-linear" strokeWidth="1.5" width="16"></iconify-icon> Copy Link
                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f5f4f0]">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37]">
                    How teams use Vouch
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl p-8 flex flex-col shadow-sm border border-[#e5e4de] hover:border-[#d1d0c9] hover:shadow-md transition-all">
<div className="aspect-[4/3] bg-[#f5f4f0] rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-[#e5e4de]/50 relative">
<img className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute inset-0 border-4 border-white/50 m-2 rounded"></div>
</div>
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium tracking-tight text-[#1f2b37] mb-2 text-center">Employer Branding</h3>
<a className="mt-auto pt-4 text-sm font-medium text-[#52667a] flex items-center justify-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-xl p-8 flex flex-col shadow-sm border border-[#e5e4de] hover:border-[#d1d0c9] hover:shadow-md transition-all">
<div className="aspect-[4/3] bg-[#f5f4f0] rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-[#e5e4de]/50 relative">
<img className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute inset-0 border-4 border-white/50 m-2 rounded"></div>
</div>
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium tracking-tight text-[#1f2b37] mb-2 text-center">Recruiter Enablement</h3>
<a className="mt-auto pt-4 text-sm font-medium text-[#52667a] flex items-center justify-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-xl p-8 flex flex-col shadow-sm border border-[#e5e4de] hover:border-[#d1d0c9] hover:shadow-md transition-all">
<div className="aspect-[4/3] bg-[#f5f4f0] rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-[#e5e4de]/50 relative">
<img className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute inset-0 border-4 border-white/50 m-2 rounded"></div>
</div>
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium tracking-tight text-[#1f2b37] mb-2 text-center">Employee Advocacy</h3>
<a className="mt-auto pt-4 text-sm font-medium text-[#52667a] flex items-center justify-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-xl p-8 flex flex-col shadow-sm border border-[#e5e4de] hover:border-[#d1d0c9] hover:shadow-md transition-all">
<div className="aspect-[4/3] bg-[#f5f4f0] rounded-lg mb-6 overflow-hidden flex items-center justify-center border border-[#e5e4de]/50 relative">
<img className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
<div className="absolute inset-0 border-4 border-white/50 m-2 rounded"></div>
</div>
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium tracking-tight text-[#1f2b37] mb-2 text-center">Internal Comms</h3>
<a className="mt-auto pt-4 text-sm font-medium text-[#52667a] flex items-center justify-center gap-1 hover:gap-2 transition-all" href="#">
                        Learn more <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative overflow-hidden bg-white">
<div className="absolute inset-0 z-0 opacity-40 pointer-events-none overflow-hidden">
<svg className="w-full h-full object-cover text-[#f5f4f0]" fill="none" viewbox="0 0 1440 800">
<path d="M-100 400C150 400 350 100 600 200C850 300 1050 600 1300 500C1550 400 1600 100 1800 100" stroke="currentColor" strokeLinecap="round" strokeWidth="100"></path>
</svg>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto lg:mx-0 border border-[#e5e4de]">
<img alt="Jackie Denner" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl shadow-md border border-white/20 flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
<div>
<p className="text-sm font-medium text-[#1f2b37] leading-none">Jackie Denner</p>
<p className="text-xs text-[#4a5568] mt-1">Recording...</p>
</div>
</div>
</div>
<div className="max-w-xl">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] leading-tight">
                        "Vouch makes it incredibly simple to capture video content from employees around the world."
                    </h2>
<div className="mt-12 flex items-center gap-6">
<div>
<p className="text-lg font-medium text-[#1f2b37]">Jackie Denner</p>
<p className="text-sm text-[#4a5568]">Global Employer Brand, MongoDB</p>
</div>
<div className="h-10 w-px bg-[#e5e4de]"></div>
<div className="flex items-center gap-2 text-xl font-medium text-[#1f2b37]">
<iconify-icon height="24" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon> MongoDB
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f5f4f0] border-t border-[#e5e4de]">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] mb-4">See what customers are saying</h2>
<div className="flex items-center gap-2">
<span className="text-base font-medium text-[#4a5568]">G2 Reviews</span>
<div className="flex text-[#ff5a5f]">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
<div className="flex flex-col">
<p className="text-base text-[#1f2b37] leading-relaxed mb-8 flex-grow">
                        Vouch has become almost a household name within Culture Amp, with how many different teams are using it. I use it to tell customers stories. Our recruitment team has used it during candidate screenings. Teams all across the company have used it for internal recognition, giving shoutouts over video.
                    </p>
<div>
<div className="flex items-center gap-3 mb-4">
<img className="w-12 h-12 rounded-full object-cover border border-[#e5e4de]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-base font-medium text-[#1f2b37] leading-none">Anna Bryan</p>
<p className="text-sm text-[#4a5568] mt-1.5">Senior Customer Marketing Manager</p>
</div>
</div>
<div className="flex items-center gap-1.5 text-lg font-medium text-[#1f2b37] mt-6">
<iconify-icon className="text-purple-600" height="24" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon> Culture Amp
                        </div>
</div>
</div>
<div className="flex flex-col">
<p className="text-base text-[#1f2b37] leading-relaxed mb-8 flex-grow">
                        Vouch helps us save so much time when recording employee video content. Things that used to take hours, now just take a few minutes. It saves time, not only for myself but saves time for any employee that we're featuring in the video and really helps us so much.
                    </p>
<div>
<div className="flex items-center gap-3 mb-4">
<img className="w-12 h-12 rounded-full object-cover border border-[#e5e4de]" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-base font-medium text-[#1f2b37] leading-none">Justin Stevens</p>
<p className="text-sm text-[#4a5568] mt-1.5">Senior Talent &amp; Comms Producer</p>
</div>
</div>
<div className="text-xl font-medium text-[#1f2b37] tracking-tight mt-6">
                            SevenRooms
                        </div>
</div>
</div>
<div className="flex flex-col">
<p className="text-base text-[#1f2b37] leading-relaxed mb-8 flex-grow">
                        I'd 100% recommend Vouch. I think it's a really versatile tool, and because of that could be used by anyone across any function in any business. If you're seeking feedback and you want to humanize it, then I think Vouch is the tool.
                    </p>
<div>
<div className="flex items-center gap-3 mb-4">
<img className="w-12 h-12 rounded-full object-cover border border-[#e5e4de]" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<p className="text-base font-medium text-[#1f2b37] leading-none">Claydan Krivan-Mutu</p>
<p className="text-sm text-[#4a5568] mt-1.5">Head of GTM Enablement</p>
</div>
</div>
<div className="text-2xl font-medium text-blue-500 font-['Martina_Plantin','Playfair_Display',serif] italic tracking-tighter mt-6">
                            Canva
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-t border-[#e5e4de]">
<div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
<h2 className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl lg:text-5xl font-medium tracking-tight text-[#1f2b37] sm:text-6xl leading-[1.1]">
                Ready to transform your employer brand?
            </h2>
<p className="mt-8 text-xl text-[#4a5568] leading-relaxed max-w-2xl mx-auto">
                See how Vouch helps Talent teams capture and share authentic stories without the hassle, all in one workspace.
            </p>
<div className="mt-12 flex flex-wrap items-center justify-center gap-4">
<a className="rounded-full bg-[#52667a] px-8 py-3.5 text-base font-medium text-white shadow-sm hover:bg-[#3f5265] transition-colors" href="#">
                    Book a demo
                </a>
<a className="rounded-full bg-transparent border border-[#d1d0c9] px-8 py-3.5 text-base font-medium text-[#1f2b37] hover:bg-[#ebeae4] transition-colors" href="#">
                    Take a 5-min tour
                </a>
</div>
</div>
</section>

<footer className="bg-[#4b5e71] text-white py-20">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
<div className="lg:col-span-4">
<span className="font-['Martina_Plantin','Playfair_Display',serif] text-4xl font-medium tracking-tight text-white mb-6 block">vouch</span>
<p className="text-base mt-6 max-w-xs text-gray-300 leading-relaxed">50 Stanley St, Darlinghurst, Sydney NSW 2010</p>
<p className="text-base mt-2 text-gray-300">hello@vouchfor.com</p>
<div className="mt-8 flex gap-4">
<a className="text-gray-400 hover:text-white transition-colors" href="#">
<iconify-icon height="24" icon="mdi:linkedin" width="24"></iconify-icon>
<span className="sr-only">LinkedIn</span>
</a>
</div>
</div>
<div className="lg:col-span-2">
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium text-white mb-6">Products</h3>
<ul className="space-y-4 text-sm text-gray-300">
<li><a className="hover:text-white transition-colors" href="#">Employer Branding</a></li>
<li><a className="hover:text-white transition-colors" href="#">Recruiter Enablement</a></li>
<li><a className="hover:text-white transition-colors" href="#">Employee Advocacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Internal Communication</a></li>
<li><a className="hover:text-white transition-colors" href="#">What's New</a></li>
<li><a className="hover:text-white transition-colors" href="#">Signal by Vouch</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium text-white mb-6">How it works</h3>
<ul className="space-y-4 text-sm text-gray-300">
<li><a className="hover:text-white transition-colors" href="#">Why Vouch</a></li>
<li><a className="hover:text-white transition-colors" href="#">Plans</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Browser Extension</a></li>
<li><a className="hover:text-white transition-colors" href="#">Developers</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium text-white mb-6">Compare Vouch</h3>
<ul className="space-y-4 text-sm text-gray-300">
<li><a className="hover:text-white transition-colors" href="#">vs Seenit</a></li>
<li><a className="hover:text-white transition-colors" href="#">vs VideoMyJob</a></li>
<li><a className="hover:text-white transition-colors" href="#">vs The Martec</a></li>
</ul>
</div>
<div className="lg:col-span-2">
<h3 className="font-['Martina_Plantin','Playfair_Display',serif] text-xl font-medium text-white mb-6">Resources</h3>
<ul className="space-y-4 text-sm text-gray-300">
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">What's New</a></li>
<li><a className="hover:text-white transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="mt-24 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row text-sm text-gray-400">
<p>© 2024 Vouch. All Rights Reserved.</p>
<div className="flex gap-6 mt-4 sm:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
