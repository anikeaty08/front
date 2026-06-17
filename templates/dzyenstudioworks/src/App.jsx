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
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
lime: {
400: '#d4ff00',
500: '#bfff00',
600: '#a3d900',
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
}
}
}
}



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 glass-strong">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 text-white">
<span className="font-serif italic text-lg">D</span>
</div>
<span className="text-lg font-medium tracking-tight text-white">Dzyen Studio</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a>
</div>
<button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
                Book a call
            </button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-[size:50px_50px] bg-grid-pattern opacity-[0.07] pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-lime-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-lime-500/20 bg-lime-500/5 text-lime-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                    Accepting new projects for Q4
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6 text-white">
                    Launch Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-lime-600">Business</span> In Just <br/>
                    7 Days.
                </h1>
<p className="text-lg text-neutral-400 max-w-lg mb-10 leading-relaxed">
                    We build stunning websites for visionary entrepreneurs. From portfolio sites to complex landing pages, we blend Indian sensibility with global design trends.
                </p>
<div className="flex items-center gap-4">
<button className="bg-lime-400 text-black px-8 py-4 rounded-full text-base font-medium hover:bg-lime-500 transition-colors flex items-center gap-2">
                        Get Free Consultation <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 rounded-full text-base font-medium text-white border border-white/10 hover:bg-white/5 transition-colors">
                        View Work
                    </button>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="glass rounded-2xl p-8 relative">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-medium text-white tracking-tight">Start your project</h3>
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>
<form className="space-y-4">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 ml-1">Service Type</label>
<div className="relative">
<select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-neutral-300 focus:outline-none focus:border-lime-500/50 appearance-none">
<option>Select a service</option>
<option>Landing Page</option>
<option>Full Website</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 ml-1">Goal</label>
<input className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-neutral-300 focus:outline-none focus:border-lime-500/50 placeholder:text-neutral-700" placeholder="e.g. Increase leads" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500 ml-1">Budget Range</label>
<input className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-lime-400" type="range"/>
<div className="flex justify-between text-xs text-neutral-500">
<span>$1k</span>
<span>$10k+</span>
</div>
</div>
<button className="w-full bg-white text-black py-3 rounded-lg text-sm font-medium mt-4 hover:bg-neutral-200 transition-colors" type="button">
                            Next Step
                        </button>
</form>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 py-8 bg-black/50 overflow-hidden flex relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="flex gap-16 items-center animate-[marquee_20s_linear_infinite] px-4 min-w-full">

<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="trello"></i> Trello</div>
<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="slack"></i> Slack</div>
<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="figma"></i> Figma</div>
<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="framer"></i> Framer</div>
<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="dribbble"></i> Dribbble</div>
<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="twitch"></i> Twitch</div>

<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="trello"></i> Trello</div>
<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="slack"></i> Slack</div>
<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="figma"></i> Figma</div>
<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="framer"></i> Framer</div>
<div className="flex items-center gap-2 text-neutral-500 font-medium text-lg"><i className="w-6 h-6" data-lucide="dribbble"></i> Dribbble</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-lime-500/20 to-purple-500/20 blur-2xl rounded-full opacity-20"></div>
<div className="glass rounded-2xl p-2 relative">
<img alt="Team" className="rounded-xl w-full object-cover h-[400px] grayscale hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-white/10 p-4 rounded-xl shadow-2xl w-64">
<div className="flex items-center gap-4 mb-3">
<img alt="Founder" className="w-12 h-12 rounded-full border border-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div>
<h4 className="text-white font-medium text-sm tracking-tight">Sangam Pandey</h4>
<p className="text-neutral-500 text-xs">Founder</p>
</div>
</div>
<p className="text-neutral-400 text-xs leading-relaxed">
                            "Delivering innovative design brands into success through Indian vision."
                        </p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<p className="text-lime-400 text-sm font-medium mb-4 tracking-wide uppercase">About Us</p>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    Bharat Ka Brand, <br/>
<span className="text-neutral-500">Ho Ya Startup.</span>
</h2>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                    At Dzyen Studio, we blend Indian sensibility with global design trends. Whether you're a homegrown startup or an evolving legacy brand, we shape your story into a visual masterpiece.
                </p>
<div className="grid sm:grid-cols-2 gap-6">
<div className="border-l border-lime-500/30 pl-4">
<h4 className="text-white font-medium mb-1 tracking-tight">Design Solutions</h4>
<p className="text-neutral-500 text-sm">Websites &amp; Apps optimized for Indian users, mobile-first always.</p>
</div>
<div className="border-l border-white/10 pl-4">
<h4 className="text-white font-medium mb-1 tracking-tight">True Creative Partner</h4>
<p className="text-neutral-500 text-sm">Local market insights? We've got our ear to the ground.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-900/20" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<i className="w-6 h-6 text-lime-400 mx-auto mb-4" data-lucide="sparkles"></i>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Innovative Web Services</h2>
<p className="text-lg text-neutral-400">For every Indian Visionary ready to scale.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative bg-black border border-white/10 rounded-2xl p-8 hover:border-lime-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center mb-6 text-lime-400 border border-white/5">
<i className="w-6 h-6" data-lucide="monitor"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Portfolio Design</h3>
<p className="text-neutral-400 text-base mb-8 min-h-[48px]">Showcase your work like a pro. Make first impressions last.</p>
<div className="overflow-hidden rounded-lg border border-white/5 relative h-40">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>

<div className="group relative bg-black border border-white/10 rounded-2xl p-8 hover:border-lime-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center mb-6 text-lime-400 border border-white/5">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Landing Pages</h3>
<p className="text-neutral-400 text-base mb-8 min-h-[48px]">Turn clicks into clients. Leads into loyalists with high conversion.</p>
<div className="overflow-hidden rounded-lg border border-white/5 relative h-40">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>

<div className="group relative bg-black border border-white/10 rounded-2xl p-8 hover:border-lime-500/30 transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center mb-6 text-lime-400 border border-white/5">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">E-Commerce Store</h3>
<p className="text-neutral-400 text-base mb-8 min-h-[48px]">Shop setups that sell like hot chai on a winter morning.</p>
<div className="overflow-hidden rounded-lg border border-white/5 relative h-40">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="portfolio">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
<span className="text-sm font-medium text-lime-400 tracking-wide uppercase">Portfolio Showcase</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">Watch Our Work In Action</h2>
</div>
<p className="text-lg text-neutral-400 max-w-sm text-right md:text-left">
                We record Loom walkthroughs for every project so you can see the strategy behind the pixels.
            </p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 relative group">
<div className="absolute -inset-1 bg-gradient-to-tr from-lime-500/20 to-transparent blur-xl rounded-2xl opacity-50"></div>
<div className="relative bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden aspect-video shadow-2xl">

<div className="h-8 bg-black/50 border-b border-white/5 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>
<div className="mx-auto text-[10px] text-neutral-500 font-mono bg-white/5 px-2 py-0.5 rounded">loom.com/share/dzyen-studio-demo</div>
</div>

<div className="relative w-full h-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&amp;fit=crop&amp;q=80&amp;w=1200')] bg-cover bg-center">
<div className="absolute inset-0 bg-black/40"></div>

<button className="relative group/btn">
<div className="absolute inset-0 bg-lime-400 rounded-full blur opacity-40 group-hover/btn:opacity-60 transition"></div>
<div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center relative z-10 transition transform group-hover/btn:scale-110">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</button>

<div className="absolute bottom-12 left-6 right-6 h-12 bg-[#1a1a1a]/90 backdrop-blur rounded-full flex items-center px-4 justify-between border border-white/10">
<div className="flex items-center gap-4">
<i className="w-4 h-4 text-white fill-white" data-lucide="play"></i>
<div className="text-xs text-neutral-400 font-mono">0:00 / 2:45</div>
</div>
<div className="flex-1 mx-4">
<div className="h-1 bg-white/10 rounded-full w-full">
<div className="h-full w-1/3 bg-lime-400 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow"></div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="px-2 py-1 bg-white/10 rounded text-[10px] text-white">1x</div>
<i className="w-4 h-4 text-neutral-400" data-lucide="volume-2"></i>
<i className="w-4 h-4 text-neutral-400" data-lucide="maximize"></i>
</div>
</div>

<div className="absolute bottom-12 left-6 w-16 h-16 rounded-full border-2 border-lime-400 overflow-hidden shadow-lg hidden md:block">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="bg-white/5 border border-white/10 p-4 rounded-xl flex gap-4 hover:bg-white/10 transition cursor-pointer group">
<div className="w-24 h-16 bg-neutral-800 rounded-lg overflow-hidden relative flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 rounded-full bg-black/50 flex items-center justify-center">
<i className="w-3 h-3 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium leading-tight mb-1 group-hover:text-lime-400 transition">Fintech Dashboard Redesign</h4>
<p className="text-neutral-500 text-xs">2:14 • UX Breakdown</p>
</div>
</div>
<div className="bg-transparent border border-transparent p-4 rounded-xl flex gap-4 hover:bg-white/5 hover:border-white/10 transition cursor-pointer group">
<div className="w-24 h-16 bg-neutral-800 rounded-lg overflow-hidden relative flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 rounded-full bg-black/50 flex items-center justify-center">
<i className="w-3 h-3 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium leading-tight mb-1 group-hover:text-lime-400 transition">SaaS Landing Page</h4>
<p className="text-neutral-500 text-xs">4:05 • Conversion Strategy</p>
</div>
</div>
<div className="bg-transparent border border-transparent p-4 rounded-xl flex gap-4 hover:bg-white/5 hover:border-white/10 transition cursor-pointer group">
<div className="w-24 h-16 bg-neutral-800 rounded-lg overflow-hidden relative flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-6 h-6 rounded-full bg-black/50 flex items-center justify-center">
<i className="w-3 h-3 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium leading-tight mb-1 group-hover:text-lime-400 transition">E-commerce Mobile App</h4>
<p className="text-neutral-500 text-xs">1:45 • Interaction Design</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="process">
<div className="absolute inset-0 bg-neutral-900/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Streamlined Process</h2>
<p className="text-lg text-neutral-400">Standout design in 3 steps.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-lime-500/30 to-transparent"></div>
<div className="relative bg-black border border-white/10 p-8 rounded-2xl">
<div className="w-10 h-10 bg-lime-400 text-black font-bold flex items-center justify-center rounded-lg mb-6 relative z-10">01</div>
<h3 className="text-xl font-medium text-white mb-3">Discovery &amp; Strategy</h3>
<p className="text-neutral-400 text-base leading-relaxed mb-4">We dig deep to understand your goals. Audience branding vision shapes a design path.</p>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check-circle-2"></i> Brand &amp; User Research</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check-circle-2"></i> Competitor Audit</li>
</ul>
</div>
<div className="relative bg-black border border-white/10 p-8 rounded-2xl">
<div className="w-10 h-10 bg-neutral-800 text-white border border-white/20 font-bold flex items-center justify-center rounded-lg mb-6 relative z-10">02</div>
<h3 className="text-xl font-medium text-white mb-3">Design &amp; Development</h3>
<p className="text-neutral-400 text-base leading-relaxed mb-4">From wireframe to high-fidelity. We build fully functional prototypes.</p>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check-circle-2"></i> UX Flow &amp; Wireframes</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check-circle-2"></i> UI Design System</li>
</ul>
</div>
<div className="relative bg-black border border-white/10 p-8 rounded-2xl">
<div className="w-10 h-10 bg-neutral-800 text-white border border-white/20 font-bold flex items-center justify-center rounded-lg mb-6 relative z-10">03</div>
<h3 className="text-xl font-medium text-white mb-3">Feedback &amp; Finalization</h3>
<p className="text-neutral-400 text-base leading-relaxed mb-4">Refining every detail based on your input ensuring the final product looks sharp.</p>
<ul className="text-sm text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check-circle-2"></i> Collaborative Iterations</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-lime-500" data-lucide="check-circle-2"></i> Launch-Ready Handoff</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-neutral-900/30">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-center text-2xl font-medium text-white mb-12 tracking-tight">Key Milestones That Shape Our <span className="text-lime-400">Journey</span></h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-4xl font-semibold text-lime-400 mb-2">3+</div>
<div className="text-sm text-neutral-400">Years of Experience</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-lime-400 mb-2">2+</div>
<div className="text-sm text-neutral-400">Award Winning</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-lime-400 mb-2">62+</div>
<div className="text-sm text-neutral-400">Satisfied Customers</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold text-lime-400 mb-2">50+</div>
<div className="text-sm text-neutral-400">Projects Complete</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="testimonials">
<div className="mb-12">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight">What our clients say</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-700"></div>
<div>
<div className="text-white font-medium text-sm">Emma Johnson</div>
<div className="text-neutral-500 text-xs">CEO Tech Wave</div>
</div>
</div>
<i className="w-5 h-5 text-lime-400/50 fill-lime-400/20" data-lucide="quote"></i>
</div>
<p className="text-neutral-300 text-base leading-relaxed">"Working with this team was a game changer. They brought our vision to life with creativity and precision."</p>
<div className="flex gap-1 mt-6 text-lime-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-700"></div>
<div>
<div className="text-white font-medium text-sm">Mark Johnson</div>
<div className="text-neutral-500 text-xs">Marketing Director</div>
</div>
</div>
<i className="w-5 h-5 text-lime-400/50 fill-lime-400/20" data-lucide="quote"></i>
</div>
<p className="text-neutral-300 text-base leading-relaxed">"The Loom videos in the portfolio section convinced us. The transparency in their process is unmatched."</p>
<div className="flex gap-1 mt-6 text-lime-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<div className="bg-white/5 border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-700"></div>
<div>
<div className="text-white font-medium text-sm">Devon Lane</div>
<div className="text-neutral-500 text-xs">Social Media Manager</div>
</div>
</div>
<i className="w-5 h-5 text-lime-400/50 fill-lime-400/20" data-lucide="quote"></i>
</div>
<p className="text-neutral-300 text-base leading-relaxed">"Absolutely flawless execution. The dark mode design they created for us increased engagement by 40%."</p>
<div className="flex gap-1 mt-6 text-lime-400">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-center text-white mb-12 tracking-tight">Frequently Asked <span className="text-lime-400">Questions</span></h2>
<div className="space-y-4">
<details className="group bg-neutral-900 border border-white/10 rounded-lg p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="text-white font-medium text-base">Do you offer ongoing support after project complete?</h3>
<span className="text-white transition group-open:rotate-45">
<i className="w-5 h-5" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-4 text-neutral-400 text-base leading-relaxed">
                    Yes, we provide 2 weeks of post-launch support free of charge. Extended maintenance packages are available.
                </p>
</details>
<details className="group bg-neutral-900 border border-lime-500/30 rounded-lg p-4 open:bg-neutral-800 transition [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="text-white font-medium text-base">Can you help with website development?</h3>
<span className="text-white transition group-open:rotate-45">
<i className="w-5 h-5" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-4 text-neutral-400 text-base leading-relaxed">
                    Absolutely! We provide both design and development services, creating fully responsive, user-friendly websites aligned with your brand.
                </p>
</details>
<details className="group bg-neutral-900 border border-white/10 rounded-lg p-4 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between cursor-pointer">
<h3 className="text-white font-medium text-base">What industries do you work with?</h3>
<span className="text-white transition group-open:rotate-45">
<i className="w-5 h-5" data-lucide="plus"></i>
</span>
</summary>
<p className="mt-4 text-neutral-400 text-base leading-relaxed">
                    We work primarily with SaaS, Fintech, and E-commerce brands, but we love a good challenge in any sector.
                </p>
</details>
</div>
</section>

<footer className="pt-32 pb-12 bg-gradient-to-b from-black to-neutral-900 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center justify-center text-center mb-24">
<p className="text-sm font-medium text-neutral-500 uppercase tracking-widest mb-6">Let's Collaborate</p>
<h2 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white leading-[0.8]">
                    LET'S WORK <br/> TOGETHER
                </h2>
<div className="relative mt-[-40px] md:mt-[-60px] z-10">
<button className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-lime-400 text-black font-medium text-lg flex items-center justify-center hover:scale-105 transition duration-300 shadow-[0_0_50px_rgba(191,255,0,0.3)]">
                        Get in <br/> touch
                    </button>
</div>
</div>
<div className="grid md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center bg-white/5 text-white">
<span className="font-serif italic text-lg">D</span>
</div>
<span className="text-lg font-medium tracking-tight text-white">Dzyen Studio</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                        Quality Work with No Limits. Responsibility Made Simple &amp; Successful.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-4 text-neutral-400 text-sm">
<li><a className="hover:text-lime-400 transition" href="#">Portfolio Website</a></li>
<li><a className="hover:text-lime-400 transition" href="#">Landing Page</a></li>
<li><a className="hover:text-lime-400 transition" href="#">E-Commerce</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Newsletter</h4>
<div className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-lime-500" placeholder="Enter Email" type="email"/>
<button className="bg-lime-400 text-black px-4 rounded-lg text-sm font-medium hover:bg-lime-500">
                            Join
                        </button>
</div>
<div className="flex gap-4 mt-8">
<i className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer transition" data-lucide="instagram"></i>
<i className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer transition" data-lucide="facebook"></i>
<i className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer transition" data-lucide="twitter"></i>
<i className="w-5 h-5 text-neutral-400 hover:text-white cursor-pointer transition" data-lucide="linkedin"></i>
</div>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>Copyright © 2024 All Rights Reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<p>+91 7470909189</p>
<p>sangamp880@gmail.com</p>
<p>Surat, Gujarat, India</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
