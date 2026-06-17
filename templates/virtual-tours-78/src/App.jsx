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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
<div className="glass-panel border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2 group" href="#">
<span className="iconify group-hover:rotate-180 transition-transform duration-700" data-icon="lucide:aperture" data-width="20" style={{color: 'white'}}></span>
                    VIRTUOSO
                </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-white transition-colors" href="#demos">Live Demos</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-white/10 transition-colors tracking-tight" href="#contact">
                    Book Demo
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>

<button className="md:hidden text-white">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 animate-pan" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp'}}>
<div className="absolute inset-0 bg-zinc-950/70 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>
</div>

<div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center">
<div className="glass-panel p-8 md:p-12 rounded-3xl animate-float max-w-3xl border border-white/10 shadow-2xl shadow-black/50">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Next Gen Virtual Experiences
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                    Transform Your Business into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500">24/7 Open House.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                    Engage customers and boost bookings with immersive 360° virtual experiences. Perfect for daycares, restaurants, and gyms.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

<a className="group relative px-8 py-3 bg-white text-zinc-950 rounded-full font-medium text-sm transition-all hover:bg-zinc-200 focus:ring-2 focus:ring-white/20 overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)]" href="#demos">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
<span className="relative flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                            View Live Demo
                        </span>
</a>

<a className="px-8 py-3 glass-panel rounded-full font-medium text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2" href="#contact">
                        Get a Free Quote
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</header>

<section className="relative py-24 px-6 overflow-hidden" id="benefits">

<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-900/20 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Why Virtual Tours?</h2>
<p className="text-zinc-500 max-w-lg mx-auto">Elevate your digital presence and provide transparency that converts visitors into customers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl glass-card-hover transition-all duration-300 group">
<div className="h-10 w-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors">
<span className="iconify text-white group-hover:text-indigo-400" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Build Trust</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Give customers a transparent look inside your space before they arrive, establishing confidence and reducing anxiety.</p>
</div>

<div className="glass-panel p-8 rounded-2xl glass-card-hover transition-all duration-300 group">
<div className="h-10 w-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors">
<span className="iconify text-white group-hover:text-indigo-400" data-icon="lucide:clock" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Save Time</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Filter qualified leads by letting them tour remotely. Spend less time on physical walkthroughs and more on closing.</p>
</div>

<div className="glass-panel p-8 rounded-2xl glass-card-hover transition-all duration-300 group">
<div className="h-10 w-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 transition-colors">
<span className="iconify text-white group-hover:text-indigo-400" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Attract More Customers</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Boost your SEO and Google Maps ranking. Listings with virtual tours generate 2x more interest.</p>
</div>
</div>
</div>
</section>

<section className="relative py-12 px-6" id="demos">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-medium mb-4">
<span className="iconify text-indigo-400" data-icon="lucide:globe" data-width="12"></span>
                    Interactive Demo
                </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Experience the 24/7 Open House</h2>
<p className="text-zinc-500 max-w-lg mx-auto">Immerse yourself in our latest captures. Click and drag to explore.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="glass-panel border border-white/10 rounded-2xl h-[550px] overflow-hidden flex flex-col relative group">

<div className="h-14 border-b border-white/5 bg-white/5 backdrop-blur-md flex items-center px-6 justify-between shrink-0">
<div className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:graduation-cap" data-width="18"></span>
<h3 className="font-medium text-white text-sm tracking-tight">Educational Centers</h3>
</div>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>

<div className="flex-1 w-full relative bg-zinc-900">
<div className="w-full h-full flex items-center justify-center" id="i3rl7XNAxG_">

</div>
</div>
</div>

<div className="glass-panel border border-white/10 rounded-2xl h-[550px] overflow-hidden flex flex-col relative group">

<div className="h-14 border-b border-white/5 bg-white/5 backdrop-blur-md flex items-center px-6 justify-between shrink-0">
<div className="flex items-center gap-3">
<span className="iconify text-indigo-400" data-icon="lucide:utensils" data-width="18"></span>
<h3 className="font-medium text-white text-sm tracking-tight">Premium Dining &amp; Business</h3>
</div>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
</div>

<div className="flex-1 w-full relative bg-zinc-900">
<div className="w-full h-full flex items-center justify-center" id="cKFoBmxNvjWO">

</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/30 border-y border-white/5" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Featured Projects</h2>
<p className="text-zinc-500">Explore more of our recent immersive captures.</p>
</div>
<a className="text-sm font-medium text-white flex items-center gap-2 hover:text-indigo-400 transition-colors" href="#">
                    View All Projects
                    <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer">
<img alt="Daycare" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&amp;w=2340&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"></div>
<div className="absolute top-4 right-4 bg-zinc-950/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs font-medium text-white">Daycare</span>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-medium text-white mb-1">Little Stars Academy</h3>
<p className="text-zinc-400 text-sm mb-4 line-clamp-2">Complete facility walkthrough for prospective parents.</p>
<div className="flex items-center gap-2 text-indigo-400 text-sm font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            Start Tour <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer">
<img alt="Restaurant" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=2340&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"></div>
<div className="absolute top-4 right-4 bg-zinc-950/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs font-medium text-white">Hospitality</span>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-medium text-white mb-1">The Urban Fork</h3>
<p className="text-zinc-400 text-sm mb-4 line-clamp-2">Showcasing the ambiance and private dining areas.</p>
<div className="flex items-center gap-2 text-indigo-400 text-sm font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            Start Tour <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>

<div className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-panel border border-white/10 cursor-pointer">
<img alt="Gym" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2340&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"></div>
<div className="absolute top-4 right-4 bg-zinc-950/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
<span className="text-xs font-medium text-white">Fitness</span>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-medium text-white mb-1">Iron Pulse Gym</h3>
<p className="text-zinc-400 text-sm mb-4 line-clamp-2">Equipment overview and facility layout tour.</p>
<div className="flex items-center gap-2 text-indigo-400 text-sm font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                            Start Tour <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-7xl mx-auto text-center">
<p className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-widest">Trusted by innovative businesses</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">

<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-white">
<span className="iconify" data-icon="lucide:hexagon" data-width="24"></span> ACME Corp
                </div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-white">
<span className="iconify" data-icon="lucide:triangle" data-width="24"></span> VORTEX
                </div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-white">
<span className="iconify" data-icon="lucide:circle-dashed" data-width="24"></span> SPHERE
                </div>
<div className="flex items-center gap-2 text-xl font-semibold tracking-tighter text-white">
<span className="iconify" data-icon="lucide:box" data-width="24"></span> CUBE
                </div>
</div>
</div>
</section>

<section className="py-12 px-6">
<div className="max-w-5xl mx-auto">
<div className="relative rounded-3xl overflow-hidden p-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent">
<div className="glass-panel rounded-3xl p-8 md:p-16 relative overflow-hidden bg-zinc-950">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
<div className="flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
<span className="iconify" data-icon="lucide:sparkles" data-width="12"></span>
                                Coming Soon
                            </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Virtual Assistants</h2>
<p className="text-zinc-400 text-lg">Scale your operations with our upcoming Virtual Assistant solutions. Seamless integration with your virtual tours.</p>
</div>
<div className="w-full md:w-auto min-w-[300px]">
<form className="flex flex-col gap-3">
<label className="text-xs text-zinc-500 font-medium ml-1">Join the waitlist for early access</label>
<div className="flex gap-2">
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-600" placeholder="Enter your email" type="email"/>
<button className="bg-white text-zinc-950 px-5 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-200 transition-colors whitespace-nowrap" type="button">
                                        Join
                                    </button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="contact">
<div className="max-w-3xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/5 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 text-center mb-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:calendar-check" data-width="14"></span>
                    Limited Availability
                </div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Experience a Free Live Demo</h2>
<p className="text-zinc-400 max-w-lg mx-auto">See how a 360° virtual tour can specifically grow your business. No strings attached.</p>
</div>
<form className="relative z-10 space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Name</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Business Type</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all appearance-none">
<option>Daycare</option>
<option>Restaurant</option>
<option>Gym / Fitness</option>
<option>Real Estate</option>
<option>Other</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Email</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" type="email"/>
</div>

<div className="space-y-2">
<label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Preferred Demo Time</label>
<input className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all" type="datetime-local"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Message (Optional)</label>
<textarea className="w-full bg-zinc-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all resize-none" rows="3"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-semibold py-4 rounded-lg hover:from-indigo-500 hover:to-indigo-400 transition-all shadow-lg shadow-indigo-500/20 flex justify-center items-center gap-2 text-sm group" type="button">
                    Claim My Free Demo
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify" data-icon="lucide:aperture" data-width="20"></span>
<span className="font-semibold tracking-tight text-white">VIRTUOSO</span>
</div>
<div className="flex gap-8 text-xs text-zinc-500 font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
</div>
<p className="text-zinc-600 text-xs">© 2024 Virtuoso Inc. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
