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
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-neutral-950 rounded-full"></div>
</div>
                LUMINA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-200" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors duration-200" href="#process">Process</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium text-neutral-950 bg-white hover:bg-neutral-200 px-4 py-2 rounded-full transition-colors duration-200" href="#contact">
                Start Planning
                <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-grid">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center z-10 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white mb-8 animate-fade-in">
<span className="flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                Now booking for 2024 Season
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 animate-slide-up">
                Artistry in <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">Every Detail.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{animationDelay: '0.1s'}}>
                We architect experiences that transcend the ordinary. From intimate gatherings to grand corporate galas, Lumina curates moments that linger in memory.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-slide-up" style={{animationDelay: '0.2s'}}>
<button className="group w-full md:w-auto h-12 px-8 rounded-full bg-white text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                    Inquire Now
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full md:w-auto h-12 px-8 rounded-full border border-white/10 bg-transparent text-white text-sm font-medium hover:bg-white/5 transition-all">
                    View Portfolio
                </button>
</div>
</div>

<div className="mt-20 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-96">
<div className="relative overflow-hidden rounded-2xl group border border-white/5 bg-neutral-900">
<img alt="Event" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white text-sm font-medium">Corporate Galas</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl group border border-white/5 bg-neutral-900 md:col-span-2">
<img alt="Wedding" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<p className="text-white text-sm font-medium">Luxury Weddings</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs text-neutral-600 mb-8 uppercase tracking-widest font-medium">Trusted by world-class teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">

<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"><iconify-icon icon="lucide:hexagon" width="20"></iconify-icon> ACME CORP</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"><iconify-icon icon="lucide:triangle" width="20"></iconify-icon> VERDIAN</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"><iconify-icon icon="lucide:circle" width="20"></iconify-icon> SPHERE</div>
<div className="flex items-center gap-2 text-white font-semibold text-lg tracking-tight"><iconify-icon icon="lucide:box" width="20"></iconify-icon> KUBIX</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Curated Services</h2>
<p className="text-neutral-500 max-w-sm">Tailored planning for events that require precision, elegance, and a touch of the unexpected.</p>
</div>
<a className="text-sm text-white hover:text-neutral-300 transition-colors flex items-center gap-2 pb-1 border-b border-white/20 hover:border-white" href="#">
                    View all offerings 
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:glass-water" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Social Gatherings</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Intimate dinners, milestone birthdays, and private parties designed with personal touches and exquisite atmosphere.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Corporate Events</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Product launches, conferences, and galas that align perfectly with your brand identity and business objectives.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-white/5 bg-neutral-900/50 hover:bg-neutral-900 hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:calendar-clock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Full Coordination</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        End-to-end management. We handle logistics, vendors, and timelines so you can be a guest at your own event.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Precision in Planning.<br/>Chaos Free.</h2>
<p className="text-neutral-500 mb-8 leading-relaxed">
                        Our proprietary planning framework ensures no detail is overlooked. We use modern tools to keep you updated, not overwhelmed.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center text-white text-xs font-medium">1</div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Concept &amp; Vision</h4>
<p className="text-neutral-600 text-sm">We distil your ideas into a cohesive visual moodboard and strategic plan.</p>
</div>
</div>
<div className="w-px h-8 bg-white/10 ml-4"></div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center text-white text-xs font-medium">2</div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Sourcing &amp; Logistics</h4>
<p className="text-neutral-600 text-sm">Curating the best vendors and managing contracts with transparency.</p>
</div>
</div>
<div className="w-px h-8 bg-white/10 ml-4"></div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 bg-neutral-900 flex items-center justify-center text-white text-xs font-medium">3</div>
<div>
<h4 className="text-white text-sm font-medium mb-1">Execution</h4>
<p className="text-neutral-600 text-sm">On-site management ensuring a flawless flow from start to finish.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl"></div>
<div className="relative bg-neutral-900 border border-white/5 rounded-2xl p-6 overflow-hidden">

<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<span className="text-xs font-medium text-white">Event Timeline</span>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-red-500/50"></span>
<span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
<span className="w-2 h-2 rounded-full bg-green-500/50"></span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/40" icon="lucide:check-circle" width="16"></iconify-icon>
<span className="text-xs text-neutral-300">Venue Selection</span>
</div>
<span className="text-[10px] text-neutral-600">Completed</span>
</div>
<div className="flex items-center justify-between p-3 rounded bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/40" icon="lucide:check-circle" width="16"></iconify-icon>
<span className="text-xs text-neutral-300">Catering Menu Tasting</span>
</div>
<span className="text-[10px] text-neutral-600">Completed</span>
</div>
<div className="flex items-center justify-between p-3 rounded bg-white/10 border border-white/10 shadow-lg shadow-black/20">
<div className="flex items-center gap-3">
<iconify-icon className="text-white" icon="lucide:clock" width="16"></iconify-icon>
<span className="text-xs text-white">Guest List Finalization</span>
</div>
<span className="text-[10px] text-white bg-green-500/20 text-green-400 px-2 py-0.5 rounded">In Progress</span>
</div>
<div className="flex items-center justify-between p-3 rounded opacity-50">
<div className="flex items-center gap-3">
<iconify-icon className="text-white/20" icon="lucide:circle" width="16"></iconify-icon>
<span className="text-xs text-neutral-500">Decor Setup</span>
</div>
<span className="text-[10px] text-neutral-700">Upcoming</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight text-center mb-16">Words from our Clients</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-white/5">
<div className="mb-6 text-white/20">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">"Lumina transformed our annual summit. The attention to detail was unlike anything we've experienced. Simply flawless."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white">ES</div>
<div>
<p className="text-xs font-medium text-white">Elena S.</p>
<p className="text-[10px] text-neutral-600">CMO, TechFlow</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-white/5">
<div className="mb-6 text-white/20">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">"They handled our wedding with such grace. We didn't worry about a single thing on the big day. Magical."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white">MJ</div>
<div>
<p className="text-xs font-medium text-white">Michael J.</p>
<p className="text-[10px] text-neutral-600">Groom</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-900/50 border border-white/5">
<div className="mb-6 text-white/20">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">"The most professional team I've worked with. Creative, punctual, and budget-conscious without sacrificing quality."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs text-white">AR</div>
<div>
<p className="text-xs font-medium text-white">Alex R.</p>
<p className="text-[10px] text-neutral-600">Director, ArtHouse</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-grid relative overflow-hidden" id="contact">
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Let's Create Something Extraordinary</h2>
<p className="text-neutral-500 text-sm">Fill out the form below to begin your journey.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-neutral-400 ml-1" htmlFor="first-name">First Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all placeholder:text-neutral-700" id="first-name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-400 ml-1" htmlFor="last-name">Last Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all placeholder:text-neutral-700" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-400 ml-1" htmlFor="email">Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all placeholder:text-neutral-700" id="email" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-400 ml-1" htmlFor="type">Event Type</label>
<div className="relative">
<select className="w-full appearance-none bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/10 transition-all" id="type">
<option>Corporate Event</option>
<option>Wedding</option>
<option>Private Party</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-400 ml-1">Budget Range</label>
<div className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-6">

<input className="w-full h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:bg-white [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:border-2 [&amp;::-webkit-slider-thumb]:border-neutral-900" max="100" min="1" type="range" value="50"/>
<div className="flex justify-between mt-2 text-[10px] text-neutral-500 font-medium font-mono uppercase">
<span>$10k</span>
<span>$500k+</span>
</div>
</div>
</div>
<div className="pt-2 pb-4">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-600 peer-checked:bg-white peer-checked:border-white transition-colors flex items-center justify-center text-black">
<iconify-icon icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">I agree to the privacy policy</span>
</label>
</div>
<button className="w-full bg-white text-neutral-950 font-medium text-sm py-3 rounded-lg hover:bg-neutral-200 transition-colors" type="button">
                    Send Request
                </button>
</form>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-neutral-950 rounded-full"></div>
</div>
<span className="text-white text-sm font-medium tracking-tight">LUMINA</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<p className="text-xs text-neutral-600">
                © 2024 Lumina Events. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
