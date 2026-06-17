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

        function toggleModal() {
            const modal = document.getElementById('shareModal');
            const content = document.getElementById('modalContent');
            
            if (modal.classList.contains('opacity-0')) {
                // Open
                modal.classList.remove('opacity-0', 'pointer-events-none');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            } else {
                // Close
                modal.classList.add('opacity-0', 'pointer-events-none');
                content.classList.remove('scale-100');
                content.classList.add('scale-95');
            }
        }

        function copyToClipboard(button) {
            const input = button.previousElementSibling.querySelector('input');
            input.select();
            document.execCommand('copy'); // Fallback for older browsers
            navigator.clipboard.writeText(input.value); // Modern API
            
            const originalText = button.innerText;
            button.innerText = 'Copied!';
            button.classList.add('bg-lime-400', 'text-black');
            button.classList.remove('bg-white');
            
            setTimeout(() => {
                button.innerText = originalText;
                button.classList.remove('bg-lime-400', 'text-black');
                button.classList.add('bg-white');
            }, 2000);
        }
    
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
      

<div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-neutral-900/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

<nav className="w-18 h-full bg-[#0a0a0a] border-r border-white/5 flex flex-col items-center py-8 gap-6 z-20 flex-shrink-0 hidden md:flex">
<div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] mb-4">
<span className="font-bold text-lg tracking-tighter">M</span>
</div>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"><i className="w-5 h-5" data-lucide="layout-grid"></i></button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"><i className="w-5 h-5" data-lucide="folder"></i></button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"><i className="w-5 h-5" data-lucide="calendar"></i></button>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"><i className="w-5 h-5" data-lucide="mail"></i></button>
<div className="flex-1"></div>
<button className="p-3 text-neutral-500 hover:text-white hover:bg-white/5 rounded-xl transition-all"><i className="w-5 h-5" data-lucide="settings-2"></i></button>
</nav>

<main className="flex-1 flex flex-col lg:flex-row h-full relative overflow-hidden z-10">

<header className="absolute top-0 left-0 w-full h-20 flex items-center justify-between px-6 z-20 pointer-events-none">
<div className="pointer-events-auto bg-[#111] backdrop-blur-md px-4 py-2 rounded-full border border-white/10 hover:border-white/20 transition-all cursor-pointer flex items-center gap-2.5 group">
<i className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" data-lucide="panel-left"></i>
<span className="text-xs font-medium tracking-tight text-neutral-400 group-hover:text-white">Menu</span>
</div>
<div className="flex items-center gap-3 pointer-events-auto">
<div className="bg-[#111] backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
<span className="text-xs font-semibold tracking-wide text-neutral-300">OPEN FOR WORK</span>
</div>
</div>
</header>

<section className="w-full lg:w-[420px] xl:w-[500px] p-8 lg:p-12 flex flex-col justify-center items-start flex-shrink-0 pt-28 lg:pt-0 animate-fade-up">
<div className="relative">

<div className="relative w-24 h-24 mb-8">
<div className="absolute -inset-4 bg-gradient-to-br from-lime-500/20 to-transparent rounded-full blur-2xl"></div>
<img alt="Avatar" className="relative w-full h-full rounded-full border border-white/10 shadow-2xl bg-[#111]" src="https://api.dicebear.com/7.x/notionists/svg?seed=Made&amp;backgroundColor=b6e3f4"/>
</div>
<h1 className="text-4xl xl:text-5xl font-bold tracking-tighter text-white mb-3">Made Supardi</h1>
<p className="text-lg xl:text-xl text-neutral-400 font-medium tracking-tight mb-6">Building digital products at <span className="text-white border-b border-lime-500/50 hover:border-lime-400 transition-colors cursor-pointer">Portolabs</span></p>
<p className="text-neutral-500 leading-relaxed max-w-sm font-normal">
                    Crafting high-performance interfaces and scalable systems. Focused on shipping clean code and delightful user experiences.
                </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
<button className="bg-white text-black hover:bg-neutral-200 px-6 py-2.5 rounded-lg text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all flex items-center justify-center gap-2">
                        Start Project <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-[#111] border border-white/10 hover:border-white/20 text-neutral-300 px-6 py-2.5 rounded-lg text-sm font-medium hover:text-white transition-all">
                        Copy Email
                    </button>
</div>

<div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/5 pt-8 w-full max-w-sm">
<div>
<div className="text-2xl font-bold text-white tracking-tight">50+</div>
<div className="text-xs text-neutral-500 font-medium mt-1">Projects</div>
</div>
<div>
<div className="text-2xl font-bold text-white tracking-tight">12</div>
<div className="text-xs text-neutral-500 font-medium mt-1">Products</div>
</div>
<div>
<div className="text-2xl font-bold text-white tracking-tight">5y</div>
<div className="text-xs text-neutral-500 font-medium mt-1">Exp.</div>
</div>
</div>
</div>
</section>

<section className="flex-1 h-full overflow-y-auto hide-scrollbar p-6 lg:p-12 pt-0 lg:pt-32 pb-40">
<div className="max-w-5xl mx-auto animate-fade-up" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-4 mb-8">
<h2 className="text-sm font-semibold tracking-wide text-neutral-500 uppercase">Connect</h2>
<div className="h-px bg-white/10 flex-1"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="bg-[#0f0f0f] hover:bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<i className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">WhatsApp</h3>
<p className="text-sm text-neutral-500 mt-1">+62 812 3456 78</p>
</div>

<div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-6 border border-lime-500/20 shadow-[0_0_30px_rgba(132,204,22,0.05)] flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="flex items-center gap-2 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
<span className="text-xs font-bold text-lime-400 tracking-wide uppercase">Priority</span>
</div>
<button className="bg-lime-400 hover:bg-lime-300 text-black px-4 py-2 rounded-lg text-sm font-bold w-full transition-all flex items-center justify-center gap-2">
                            Send Message <i className="w-3.5 h-3.5" data-lucide="send"></i>
</button>
</div>

<div className="bg-[#0f0f0f] hover:bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="github"></i>
</div>
<i className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Github</h3>
<p className="text-sm text-neutral-500 mt-1">@madesupardi</p>
</div>

<div className="bg-[#0f0f0f] hover:bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 group">
<div className="flex justify-between items-start mb-8">
<div className="w-10 h-10 rounded-lg bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</div>
<i className="w-4 h-4 text-neutral-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Linkedin</h3>
<p className="text-sm text-neutral-500 mt-1">Connect</p>
</div>


<div className="col-span-1 xl:col-span-2 bg-[#0f0f0f] hover:bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between h-48 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<span className="bg-[#1a1a1a] border border-white/5 text-neutral-400 px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider">Agency</span>
</div>
<div>
<h3 className="text-xl font-bold tracking-tight text-white">Portolabs</h3>
<p className="text-sm text-neutral-500 mt-1">High-velocity engineering &amp; design partner for startups.</p>
</div>
</div>

<div className="bg-[#0f0f0f] hover:bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-between h-48">
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded-md bg-[#1a1a1a] border border-white/5 text-xs text-neutral-400">React</span>
<span className="px-2 py-1 rounded-md bg-[#1a1a1a] border border-white/5 text-xs text-neutral-400">Next.js</span>
<span className="px-2 py-1 rounded-md bg-[#1a1a1a] border border-white/5 text-xs text-neutral-400">Tailwind</span>
<span className="px-2 py-1 rounded-md bg-[#1a1a1a] border border-white/5 text-xs text-neutral-400">Node</span>
<span className="px-2 py-1 rounded-md bg-[#1a1a1a] border border-white/5 text-xs text-neutral-400">TS</span>
</div>
<div>
<h3 className="font-semibold tracking-tight text-white">Tech Stack</h3>
<p className="text-sm text-neutral-500 mt-1">Modern &amp; Scalable</p>
</div>
</div>

<div className="bg-[#0f0f0f] hover:bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col justify-center items-center text-center h-48 relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-500/10 via-[#0f0f0f] to-[#0f0f0f] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<p className="text-sm font-medium text-neutral-400 mb-2">Current Status</p>
<h3 className="text-2xl font-bold tracking-tighter text-white mb-4">Taking New Clients</h3>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-lime-400"></span>
                                Available
                            </span>
</div>
</div>


<div className="col-span-1 xl:col-span-2 bg-[#0f0f0f] rounded-2xl p-2 border border-white/5 hover:border-white/10 transition-all group">
<div className="w-full h-48 rounded-xl bg-[#1a1a1a] overflow-hidden relative opacity-80 group-hover:opacity-100 transition-opacity">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-lime-500/10 rounded-full blur-2xl animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="w-3 h-3 bg-lime-400 rounded-full shadow-[0_0_10px_rgba(163,230,53,0.8)] relative z-10"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-lime-400/30 rounded-full animate-ping"></div>
</div>
<div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-md">
<span className="text-[10px] font-mono text-neutral-300">BALI, INDONESIA</span>
</div>
</div>
</div>

<div className="col-span-1 xl:col-span-2 bg-[#0f0f0f] hover:bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all flex items-center justify-between group">
<div>
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="instagram"></i>
<span className="text-xs font-mono text-neutral-500">SOCIAL</span>
</div>
<h3 className="text-lg font-bold text-white tracking-tight">Personal Blog</h3>
<p className="text-sm text-neutral-500 mt-1 max-w-xs">Thoughts on design, code, and digital nomad lifestyle.</p>
</div>
<div className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</div>

<div className="h-32"></div>
</section>
</main>

<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-fade-up" style={{animationDelay: '0.5s'}}>
<div className="bg-[#111]/80 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)] rounded-full px-2 py-2 flex items-center gap-2">

<button className="bg-white hover:bg-neutral-200 text-black px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2" onclick="toggleModal()">
                Share <i className="w-3.5 h-3.5" data-lucide="share-2"></i>
</button>
<div className="w-px h-5 bg-white/10 mx-1"></div>
<button className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all" title="Copy Link">
<i className="w-4 h-4" data-lucide="link"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all" title="QR Code">
<i className="w-4 h-4" data-lucide="qr-code"></i>
</button>
<button className="w-10 h-10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all" title="Download Resume">
<i className="w-4 h-4" data-lucide="download"></i>
</button>
</div>
</div>

<div className="fixed inset-0 z-[100] flex items-center justify-center opacity-0 pointer-events-none transition-all duration-300" id="shareModal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="toggleModal()"></div>

<div className="bg-[#111] w-[90%] max-w-[400px] rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] p-6 relative transform scale-95 transition-all duration-300 z-10" id="modalContent">
<div className="flex justify-between items-center mb-6">
<h3 className="text-base font-bold text-white tracking-tight">Share Profile</h3>
<button className="text-neutral-500 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-1.5 rounded-full" onclick="toggleModal()">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="space-y-4">

<div>
<label className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-2 block">Profile Link</label>
<div className="flex gap-2">
<div className="flex-1 bg-black border border-white/10 rounded-lg px-3 py-2.5 flex items-center">
<i className="w-4 h-4 text-neutral-500 mr-2" data-lucide="globe"></i>
<input className="bg-transparent border-none text-sm text-neutral-300 w-full focus:outline-none font-mono" readonly="" type="text" value="https://madesupardi.com"/>
</div>
<button className="bg-white hover:bg-neutral-200 text-black px-4 rounded-lg text-sm font-semibold transition-colors flex items-center whitespace-nowrap" onclick="copyToClipboard(this)">
                            Copy
                        </button>
</div>
</div>

<div>
<label className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mb-2 block mt-6">Share via</label>
<div className="grid grid-cols-4 gap-3">
<a className="aspect-square rounded-xl bg-[#1a1a1a] border border-white/5 hover:border-white/20 hover:bg-[#222] transition-all flex flex-col items-center justify-center gap-2 group" href="#">
<i className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors" data-lucide="twitter"></i>
<span className="text-[10px] text-neutral-500 font-medium">X</span>
</a>
<a className="aspect-square rounded-xl bg-[#1a1a1a] border border-white/5 hover:border-white/20 hover:bg-[#222] transition-all flex flex-col items-center justify-center gap-2 group" href="#">
<i className="w-5 h-5 text-neutral-400 group-hover:text-blue-500 transition-colors" data-lucide="linkedin"></i>
<span className="text-[10px] text-neutral-500 font-medium">Post</span>
</a>
<a className="aspect-square rounded-xl bg-[#1a1a1a] border border-white/5 hover:border-white/20 hover:bg-[#222] transition-all flex flex-col items-center justify-center gap-2 group" href="#">
<i className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-colors" data-lucide="facebook"></i>
<span className="text-[10px] text-neutral-500 font-medium">Story</span>
</a>
<a className="aspect-square rounded-xl bg-[#1a1a1a] border border-white/5 hover:border-white/20 hover:bg-[#222] transition-all flex flex-col items-center justify-center gap-2 group" href="#">
<i className="w-5 h-5 text-neutral-400 group-hover:text-lime-400 transition-colors" data-lucide="mail"></i>
<span className="text-[10px] text-neutral-500 font-medium">Email</span>
</a>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
