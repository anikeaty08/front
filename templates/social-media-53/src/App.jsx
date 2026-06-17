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
serif: ['Playfair Display', 'serif'],
},
colors: {
background: '#030303',
surface: '#0A0A0A',
surfaceHighlight: '#121212',
border: '#222222',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'scroll': 'scroll 40s linear infinite',
'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
reveal: {
'0%': { opacity: '0', transform: 'translateY(20px) scale(0.98)' },
'100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
}
}
}
}
}



        const slides = document.querySelectorAll('#hero-slider img');
        let currentSlide = 0;
        
        setInterval(() => {
            slides[currentSlide].style.opacity = 0;
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].style.opacity = 1;
        }, 3000);

        // Smooth reveal animation on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-reveal');
                    entry.target.style.opacity = 1;
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Select elements to animate (cards, text)
        document.querySelectorAll('.group').forEach((el) => {
            // el.style.opacity = 0; // Initial state
            // observer.observe(el);
            // Simplified for this demo: animations handled by CSS classes on load for hero
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
      

<div className="fixed inset-0 z-[-1] grid-bg pointer-events-none opacity-50"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none"></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
<div className="max-w-5xl mx-auto glass-panel rounded-full px-6 py-3 flex items-center justify-between">
<div className="flex items-center gap-2.5 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-white"></div>
<span className="relative font-bold text-xs tracking-tighter">SG</span>
</div>
<span className="text-sm font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">Social Grow</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/5 px-4 py-2 rounded-full text-xs font-medium text-white transition-all group" href="#contact">
                Start Growing
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>

<button className="md:hidden text-white/80 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 animate-reveal">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest font-medium text-white/70">Accepting new clients for Q2</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.9] mb-8 max-w-4xl mx-auto animate-reveal" style={{animationDelay: '100ms'}}>
                Content that <br/>
<span className="font-serif italic text-white/50">actually</span> converts.
            </h1>
<p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 animate-reveal" style={{animationDelay: '200ms'}}>
                We combine algorithmic data strategy with high-fidelity production to help brands explode their reach and turn viewers into revenue.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-reveal" style={{animationDelay: '300ms'}}>
<button className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2">
                    Book Strategy Call
                    <iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</button>
<button className="px-8 py-3.5 rounded-full text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                    View Showreel
                </button>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto animate-reveal" style={{animationDelay: '400ms'}}>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex justify-center">

<div className="relative w-[300px] h-[600px] bg-black border-[6px] border-[#1a1a1a] rounded-[3rem] shadow-2xl overflow-hidden z-10 ring-1 ring-white/10">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-xl z-20"></div>

<div className="absolute inset-0 bg-surface">

<div className="relative h-full w-full" id="hero-slider">
<img alt="Slide 1" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-100" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Slide 2" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Slide 3" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80"></div>

<div className="absolute bottom-8 left-6 right-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<p className="text-white text-xs font-semibold">@socialgrow</p>
<p className="text-white/60 text-[10px]">Sponsored</p>
</div>
<button className="ml-auto bg-white/20 backdrop-blur-md text-white text-[10px] font-semibold px-3 py-1.5 rounded-full border border-white/10">Follow</button>
</div>
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 flex justify-between items-center">
<div>
<p className="text-white/50 text-[10px] uppercase tracking-wider">Engagement</p>
<p className="text-white text-sm font-semibold">+248% <span className="text-green-400">↑</span></p>
</div>
<div className="h-8 w-[1px] bg-white/10"></div>
<div>
<p className="text-white/50 text-[10px] uppercase tracking-wider">Reach</p>
<p className="text-white text-sm font-semibold">1.2M</p>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-1/4 -left-4 md:left-20 bg-surfaceHighlight border border-white/10 p-4 rounded-2xl shadow-2xl animate-float hidden md:block" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="bg-green-500/20 text-green-400 p-2 rounded-lg">
<iconify-icon icon="solar:chart-2-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-white/50">ROAS</div>
<div className="text-lg font-semibold text-white">4.2x</div>
</div>
</div>
</div>
<div className="absolute bottom-1/4 -right-4 md:right-20 bg-surfaceHighlight border border-white/10 p-4 rounded-2xl shadow-2xl animate-float hidden md:block" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3">
<div className="bg-purple-500/20 text-purple-400 p-2 rounded-lg">
<iconify-icon icon="solar:users-group-rounded-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-white/50">New Followers</div>
<div className="text-lg font-semibold text-white">+12.5k</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-white/5 bg-black/50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-6">
<p className="text-center text-xs font-medium text-white/40 uppercase tracking-widest">Trusted by 500+ forward-thinking brands</p>
</div>
<div className="flex gap-16 items-center animate-scroll w-max mask-linear grayscale opacity-40 hover:opacity-80 hover:grayscale-0 transition-all duration-500">

<iconify-icon icon="simple-icons:nike" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:shopify" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:spotify" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:netflix" width="70"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:framer" width="60"></iconify-icon>

<iconify-icon icon="simple-icons:nike" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:stripe" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:shopify" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:spotify" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:netflix" width="70"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:framer" width="60"></iconify-icon>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="services">
<div className="mb-16 md:flex justify-between items-end">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white max-w-lg">
                Full-stack <br/>
<span className="font-serif italic text-white/50">social infrastructure.</span>
</h2>
<a className="hidden md:flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors border-b border-white/10 hover:border-white pb-0.5" href="#">
                View all capabilities
                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-surface border border-white/5 card-hover transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Content Production</h3>
<p className="text-white/50 text-sm leading-relaxed max-w-md">End-to-end production of high-fidelity video and static assets tailored for algorithm retention and brand aesthetics.</p>
</div>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-full mask-linear opacity-30">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&amp;w=800&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale mix-blend-overlay"></div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl bg-surface border border-white/5 card-hover transition-all duration-300">
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-new-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Paid Strategy</h3>
<p className="text-white/50 text-sm leading-relaxed">Data-driven media buying to convert followers into customers efficiently.</p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl bg-surface border border-white/5 card-hover transition-all duration-300">
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Creator Network</h3>
<p className="text-white/50 text-sm leading-relaxed">Access to 500+ vetted creators for authentic UGC and influencer campaigns.</p>
</div>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-3xl bg-surface border border-white/5 card-hover transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Analytics</h3>
<p className="text-white/50 text-sm leading-relaxed max-w-md">Custom dashboards that track your ROI, engagement, and growth metrics in real-time, transparently.</p>
</div>
</div>

<div className="absolute bottom-8 right-8 flex items-end gap-2 opacity-50">
<div className="w-4 h-12 bg-white/10 rounded-t-sm"></div>
<div className="w-4 h-20 bg-white/20 rounded-t-sm"></div>
<div className="w-4 h-16 bg-white/10 rounded-t-sm"></div>
<div className="w-4 h-32 bg-white/40 rounded-t-sm"></div>
<div className="w-4 h-24 bg-white/20 rounded-t-sm"></div>
<div className="w-4 h-40 bg-white rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<span className="block text-xs font-semibold text-purple-400 uppercase tracking-widest mb-12">Selected Works</span>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
<div className="order-2 lg:order-1">
<h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                        Scaling Glowhaus <br/>
<span className="font-serif italic text-white/50">via Reels</span>
</h3>
<p className="text-white/60 text-lg mb-8 max-w-md">We re-engineered the content strategy for Glowhaus, focusing on high-frequency short-form video to drive organic reach.</p>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-medium text-white mb-1">128K</div>
<div className="text-xs text-white/40 uppercase tracking-wider">Views (30 Days)</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">245%</div>
<div className="text-xs text-white/40 uppercase tracking-wider">Engagement Lift</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 group cursor-pointer relative">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-9xl font-serif italic text-white tracking-tighter">Glow</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="group cursor-pointer relative">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10 relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-9xl font-serif italic text-white tracking-tighter">Theo</span>
</div>
</div>
</div>
<div>
<h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                        Launching Theo <br/>
<span className="font-serif italic text-white/50">collection</span>
</h3>
<p className="text-white/60 text-lg mb-8 max-w-md">Ahead of their Fall collection, Theo needed a brand refresh. We utilized 50+ micro-influencers to create a "surround sound" effect.</p>
<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-medium text-white mb-1">18K</div>
<div className="text-xs text-white/40 uppercase tracking-wider">New Followers</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">156%</div>
<div className="text-xs text-white/40 uppercase tracking-wider">Sales Attr. Social</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surfaceHighlight border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">The new standard.</h2>
<p className="text-white/50">Why leading brands are switching to Social Grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 md:p-12 rounded-3xl border border-white/5 bg-black/20">
<h3 className="text-lg font-medium text-white/40 mb-8">Other Agencies</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white/40">
<iconify-icon className="text-red-900/50" icon="solar:close-circle-linear"></iconify-icon>
                            Generic Canva templates
                        </li>
<li className="flex items-center gap-3 text-white/40">
<iconify-icon className="text-red-900/50" icon="solar:close-circle-linear"></iconify-icon>
                            Monthly reporting delays
                        </li>
<li className="flex items-center gap-3 text-white/40">
<iconify-icon className="text-red-900/50" icon="solar:close-circle-linear"></iconify-icon>
                            Long-term lock-in contracts
                        </li>
<li className="flex items-center gap-3 text-white/40">
<iconify-icon className="text-red-900/50" icon="solar:close-circle-linear"></iconify-icon>
                            Siloed platform teams
                        </li>
</ul>
</div>

<div className="p-8 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-black relative overflow-hidden shadow-2xl">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
<h3 className="text-lg font-medium text-white mb-8 flex items-center gap-2">
                        Social Grow <span className="text-[10px] bg-white text-black px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Pro</span>
</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon>
                            Bespoke, high-fidelity assets
                        </li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon>
                            Real-time dashboard access
                        </li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon>
                            Month-to-month flexibility
                        </li>
<li className="flex items-center gap-3 text-white">
<iconify-icon className="text-purple-400" icon="solar:check-circle-bold"></iconify-icon>
                            Holistic cross-channel strategy
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-3xl mx-auto">
<h2 className="text-3xl font-medium text-white mb-12 tracking-tight">Common Questions</h2>
<div className="space-y-4">

<details className="group bg-surface border border-white/5 rounded-2xl open:bg-surfaceHighlight transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white/80 hover:text-white font-medium">
                    How fast can we see results?
                    <iconify-icon className="group-open:rotate-45 transition-transform text-white/50" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed">
                    While organic growth compounds over time, our paid strategies typically show positive ROAS within the first 14 days. We work in 30-day sprints to ensure constant optimization.
                </div>
</details>

<details className="group bg-surface border border-white/5 rounded-2xl open:bg-surfaceHighlight transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white/80 hover:text-white font-medium">
                    What platforms do you specialize in?
                    <iconify-icon className="group-open:rotate-45 transition-transform text-white/50" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed">
                    We focus on vertical video platforms: TikTok, Instagram Reels, and YouTube Shorts. These currently offer the highest organic reach and conversion potential.
                </div>
</details>

<details className="group bg-surface border border-white/5 rounded-2xl open:bg-surfaceHighlight transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer text-white/80 hover:text-white font-medium">
                    What is your pricing structure?
                    <iconify-icon className="group-open:rotate-45 transition-transform text-white/50" icon="solar:add-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-white/50 leading-relaxed">
                    We offer tiered monthly retainers starting at $3k/mo. This includes strategy, content production, and community management. No hidden fees.
                </div>
</details>
</div>
</section>

<footer className="pt-24 pb-12 px-6 md:px-12 border-t border-white/5 bg-black relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
<div className="max-w-xl">
<h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6">
                        Ready to <span className="font-serif italic text-purple-400">grow?</span>
</h2>
<p className="text-white/50 text-lg mb-8">Book a free 30-minute discovery call. No pitch, just strategy.</p>
<div className="flex flex-wrap gap-4">
<button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                            Book Discovery Call
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-colors">
                            View Pricing
                        </button>
</div>
</div>
<div className="grid grid-cols-2 gap-12 md:gap-20">
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-white/40">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Socials</h4>
<ul className="space-y-3 text-sm text-white/40">
<li><a className="hover:text-white transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">TikTok</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-white/30">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-4 h-4 bg-white/20 rounded-full"></div>
<span>© 2024 Social Grow Inc.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
