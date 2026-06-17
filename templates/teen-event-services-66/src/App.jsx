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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-600/10 blur-[120px] glow-bg"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/10 blur-[120px] glow-bg" style={{animationDelay: '-4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-xl font-semibold tracking-tighter flex items-center gap-2" href="#">
<iconify-icon className="text-fuchsia-400 text-2xl" icon="solar:moon-stars-linear" strokeWidth="1.5"></iconify-icon>
                NIGHTLITE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-white transition-colors" href="#addons">Add-ons</a>
</div>
<a className="inline-flex items-center justify-center h-9 px-5 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors" href="#book">
                Book Event
            </a>
</div>
</nav>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 rounded-full bg-fuchsia-500"></span>
                    Now booking for NYC &amp; Surrounding Areas
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                    NYC’s Ultimate <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Teen Party</span> Experience
                </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Throw the party everyone at school will be talking about. We create high-energy, safe, and unforgettable club-style events designed specifically for teens.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-zinc-950 text-base font-medium hover:bg-zinc-200 transition-colors" href="#book">
                        Book Your Event Today
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 border border-zinc-800 text-white text-base font-medium hover:bg-zinc-800 transition-colors" href="#experience">
                        See The Vibe
                    </a>
</div>
</div>
</section>

<section className="py-10 border-y border-white/5 bg-zinc-900/20 backdrop-blur-sm overflow-hidden flex items-center justify-center">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3 md:gap-4">
<span className="text-sm font-medium text-zinc-500 mr-2 flex items-center">Perfect for:</span>
<span className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 font-medium">Sweet 16s</span>
<span className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 font-medium">Teen Birthdays</span>
<span className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 font-medium">School Celebrations</span>
<span className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 font-medium">Graduation Parties</span>
<span className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 font-medium">Private Events</span>
<span className="px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-xs text-zinc-300 font-medium">Holiday Parties</span>
</div>
</section>

<section className="py-24 px-6 relative" id="experience">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">The Party Starts Here</h2>
<p className="text-base text-zinc-400">
                        Whether you're celebrating a milestone or just want an epic get-together, we handle everything. You bring the friends, we bring the energy.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors group">
<div className="h-12 w-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-violet-500/20 transition-colors">
<iconify-icon className="text-2xl text-violet-400" icon="solar:turntable-music-note-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Club-Level DJ</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Professional DJs who know exactly what teens want to hear—from today’s hits to throwback favorites, keeping the floor packed.
                        </p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors group">
<div className="h-12 w-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-fuchsia-500/20 transition-colors">
<iconify-icon className="text-2xl text-fuchsia-400" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Immersive Effects</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            LED lighting, glow effects, and dance-floor visuals that transform any blank space into a real, high-energy party atmosphere.
                        </p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors group">
<div className="h-12 w-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-2xl text-blue-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Safe &amp; Supervised</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Designed to be incredibly fun while maintaining safety and structure, ensuring both teens and parents feel completely comfortable.
                        </p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/60 transition-colors group md:col-span-2 lg:col-span-2">
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="flex-1">
<div className="h-12 w-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Custom Themes</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                    Glow parties, neon nights, red-carpet events, TikTok-style dance parties, and more. We tailor the aesthetic to your exact vision.
                                </p>
</div>
<div className="flex-1">
<div className="h-12 w-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<iconify-icon className="text-2xl text-amber-400" icon="solar:city-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">NYC Energy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                    Inspired by the unmatched culture of the city’s nightlife, but created and curated exclusively for the teen demographic.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-zinc-950" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">How It Works</h2>
<p className="text-base text-zinc-400 max-w-xl">A seamless process from the first idea to the last dance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-800 z-0"></div>

<div className="relative z-10 flex flex-col items-start md:items-center md:text-center group">
<div className="h-12 w-12 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center text-white font-semibold text-lg mb-6 group-hover:border-violet-500 group-hover:bg-violet-500/10 transition-colors">1</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Choose Your Event</h3>
<p className="text-sm text-zinc-400">Tell us about your party—date, location, theme, and number of guests.</p>
</div>

<div className="relative z-10 flex flex-col items-start md:items-center md:text-center group mt-8 md:mt-0">
<div className="h-12 w-12 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center text-white font-semibold text-lg mb-6 group-hover:border-fuchsia-500 group-hover:bg-fuchsia-500/10 transition-colors">2</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Customize Everything</h3>
<p className="text-sm text-zinc-400">Pick your music style, lighting preferences, add-ons, and special moments.</p>
</div>

<div className="relative z-10 flex flex-col items-start md:items-center md:text-center group mt-8 md:mt-0">
<div className="h-12 w-12 rounded-full bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center text-white font-semibold text-lg mb-6 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-colors">3</div>
<h3 className="text-lg font-semibold text-white tracking-tight mb-2">Party Night</h3>
<p className="text-sm text-zinc-400">We arrive, set up, and run the entertainment while you just enjoy the night.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="addons">
<div className="max-w-4xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Popular Add-Ons</h2>
<p className="text-base text-zinc-400 mb-8">
                            Take your event to the next level with our premium enhancements designed to create an unforgettable VIP experience.
                        </p>
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-fuchsia-400 transition-colors text-sm" href="#book">
                            Ask about custom packages
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="w-full md:w-1/2">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
<iconify-icon className="text-violet-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">LED Dance Floors</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
<iconify-icon className="text-violet-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Photo Booths</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
<iconify-icon className="text-violet-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Glow Accessories</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
<iconify-icon className="text-violet-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">VIP Entrance</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
<iconify-icon className="text-violet-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Custom Playlists</span>
</div>
<div className="flex items-center gap-3 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
<iconify-icon className="text-violet-400 text-lg" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Event Host / MC</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="book">
<div className="max-w-5xl mx-auto rounded-3xl p-10 md:p-16 text-center relative overflow-hidden bg-zinc-900 border border-zinc-800">

<div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Book Your Night</h2>
<p className="text-base md:text-lg text-zinc-400 mb-2">Make your next celebration unforgettable with NightLite Events.</p>
<p className="text-sm text-fuchsia-400 font-medium mb-10">Dates fill quickly—especially weekends and school holidays.</p>
<a className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-white text-zinc-950 text-base font-medium hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.2)]" href="mailto:info@nightliteevents.com">
                        Contact for Availability
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
<div>
<a className="text-white text-xl font-semibold tracking-tighter flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-fuchsia-400" icon="solar:moon-stars-linear" strokeWidth="1.5"></iconify-icon>
                        NIGHTLITE
                    </a>
<p className="text-sm text-zinc-500 max-w-xs">
                        NYC’s premier teen party experience. High-energy, safe, and unforgettable events.
                    </p>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white font-medium text-sm mb-1">Contact</h4>
<a className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2" href="mailto:info@nightliteevents.com">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                        info@nightliteevents.com
                    </a>
<span className="text-sm text-zinc-400 flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                        Serving New York City &amp; Surrounding Areas
                    </span>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">
                    © 2024 NightLite Events. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-xs text-zinc-600">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
