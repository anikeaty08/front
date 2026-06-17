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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-900 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-100 font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<span className="iconify text-zinc-100" data-icon="lucide:music" data-strokeWidth="1.5" data-width="20"></span>
                STRUM.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#repertoire">Repertoire</a>
</div>
<a className="group flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-200 transition-all" href="#booking">
                Book Event
                <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="14"></span>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-zinc-900/50 to-transparent opacity-40 blur-3xl -z-10 pointer-events-none"></div>
<div className="absolute top-20 right-0 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/30 px-3 py-1 rounded-full text-xs font-medium text-zinc-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Accepting bookings for 2024 Season
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-6 leading-[0.95]">
                Atmosphere,<br/>
<span className="text-zinc-500">Curated by Strings.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Elevate your weddings, galas, and intimate gatherings with bespoke acoustic serenades designed to linger in memory.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#booking">
<span className="iconify" data-icon="lucide:calendar" data-strokeWidth="1.5" data-width="16"></span>
                    Check Availability
                </a>
<a className="w-full sm:w-auto px-8 py-3 border border-zinc-800 text-zinc-300 rounded-full font-medium text-sm hover:border-zinc-600 hover:text-white transition-colors flex items-center justify-center gap-2" href="#about">
                    Listen to Samples
                </a>
</div>
</div>
</header>

<section className="border-y border-zinc-900 bg-zinc-950/50">
<div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-2">
<span className="iconify text-white" data-icon="lucide:mic-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">Acoustic Excellence</h3>
<p className="text-sm leading-relaxed">Studio-quality sound brought to your venue. No overpowering amps, just pure, resonant clarity.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-2">
<span className="iconify text-white" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">Tailored Setlists</h3>
<p className="text-sm leading-relaxed">From classical grandeur to modern pop arrangements. We curate the playlist to match your event's soul.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 mb-2">
<span className="iconify text-white" data-icon="lucide:clock-4" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg tracking-tight">Seamless Experience</h3>
<p className="text-sm leading-relaxed">Punctual setup, professional attire, and zero technical friction. I handle the sound, you enjoy the moment.</p>
</div>
</div>
</section>

<section className="py-24 relative" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-2 bg-gradient-to-r from-zinc-800 to-zinc-900 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
<img alt="Guitarist performing" className="object-cover w-full h-full grayscale hover:grayscale-0 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-black">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div>
<p className="text-xs text-zinc-400 uppercase tracking-widest mb-0.5">Latest Performance</p>
<p className="text-white text-sm font-medium">Summer Gala '23</p>
</div>
</div>
</div>
</div>
</div>
<div className="space-y-8">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tighter">More than just background noise.</h2>
<p className="text-zinc-400 leading-relaxed font-light">
                        My name is Julian. For over 15 years, I've transformed silence into emotion. I don't just play songs; I score the moments that matter most to you.
                    </p>
<p className="text-zinc-400 leading-relaxed font-light">
                        Whether it's walking down the aisle, a corporate cocktail hour, or a private dinner, my approach is minimalist yet deeply evocative. I blend classical technique with contemporary sensibilities to create a sonic landscape that enhances conversation rather than competing with it.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4 border-t border-zinc-900">
<div>
<span className="block text-3xl font-medium text-white tracking-tighter mb-1">500+</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Events Played</span>
</div>
<div>
<span className="block text-3xl font-medium text-white tracking-tighter mb-1">100%</span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">Client Satisfaction</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950/30 border-y border-zinc-900" id="gallery">
<div className="max-w-6xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl font-medium text-white tracking-tighter mb-2">Visual Diary</h2>
<p className="text-zinc-500 text-sm">Snapshots from recent venues and intimate sets.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-xs text-white border-b border-transparent hover:border-white transition-all pb-0.5" href="#">
                View Instagram
                <span className="iconify" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" data-width="12"></span>
</a>
</div>
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">

<div className="md:col-span-2 group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800">
<img alt="Event setup" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="bg-black/70 backdrop-blur px-2 py-1 rounded text-xs text-white">Wedding Processional</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800">
<img alt="Guitar detail" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800">
<img alt="Evening atmosphere" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="md:col-span-2 group relative overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800">
<img alt="Outdoor venue" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 left-4">
<span className="bg-black/70 backdrop-blur px-2 py-1 rounded text-xs text-white">Outdoor Gala</span>
</div>
</div>
</div>
</section>

<section className="py-32" id="booking">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-4">Secure your date.</h2>
<p className="text-zinc-500">Tell me about your event. I'll get back to you within 24 hours with a quote and availability.</p>
</div>
<form className="space-y-8 bg-zinc-900/20 p-8 md:p-12 rounded-2xl border border-zinc-800">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Full Name</label>
<input className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors text-sm" placeholder="Jane Doe" type="text"/>
</div>

<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Email Address</label>
<input className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors text-sm" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-2 relative">
<label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Event Date</label>
<input className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors text-sm [color-scheme:dark]" type="date"/>
</div>

<div className="space-y-2">
<label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Event Type</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-zinc-700 py-3 text-white focus:outline-none focus:border-white transition-colors text-sm appearance-none">
<option className="bg-zinc-900 text-zinc-400">Select type...</option>
<option className="bg-zinc-900">Wedding Ceremony</option>
<option className="bg-zinc-900">Cocktail Hour</option>
<option className="bg-zinc-900">Private Dinner</option>
<option className="bg-zinc-900">Corporate Event</option>
</select>
<span className="absolute right-0 top-3 text-zinc-500 pointer-events-none">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</div>
</div>
</div>

<div className="space-y-4 pt-4">
<label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Additional Requirements</label>
<div className="flex flex-wrap gap-4">
<label className="cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:border-zinc-600 transition-all select-none">
                                Microphones Needed
                            </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:border-zinc-600 transition-all select-none">
                                Outdoor Venue
                            </div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<div className="px-4 py-2 rounded-full border border-zinc-800 text-xs text-zinc-400 peer-checked:bg-white peer-checked:text-black peer-checked:border-white hover:border-zinc-600 transition-all select-none">
                                Special Song Request
                            </div>
</label>
</div>
</div>

<div className="space-y-2 pt-2">
<label className="text-xs uppercase tracking-wider text-zinc-500 font-medium">Message</label>
<textarea className="w-full bg-transparent border-b border-zinc-700 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-white transition-colors text-sm resize-none" placeholder="Tell me more about the vibe you are looking for..." rows="4"></textarea>
</div>
<div className="pt-6">
<button className="w-full bg-white text-black font-medium py-4 rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group" type="button">
                        Send Inquiry
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:send" data-strokeWidth="1.5" data-width="16"></span>
</button>
<p className="text-center text-xs text-zinc-600 mt-4">No deposit required for initial consultation.</p>
</div>
</form>
</div>
</section>

<footer className="border-t border-zinc-900 bg-black pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<a className="text-white font-semibold tracking-tighter text-xl flex items-center gap-2 mb-4" href="#">
                    STRUM.
                </a>
<p className="text-zinc-500 text-sm max-w-xs">
                    Crafting auditory landscapes for the discerning client. Based in New York, available worldwide.
                </p>
</div>
<div className="flex gap-12">
<div className="flex flex-col gap-3 text-sm">
<span className="text-white font-medium mb-1">Sitemap</span>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#booking">Booking</a>
</div>
<div className="flex flex-col gap-3 text-sm">
<span className="text-white font-medium mb-1">Social</span>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Spotify</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 Julian Strum. All rights reserved.</p>
<div className="flex items-center gap-4">
<span className="iconify text-zinc-600 hover:text-white transition-colors cursor-pointer" data-icon="lucide:instagram" data-width="16"></span>
<span className="iconify text-zinc-600 hover:text-white transition-colors cursor-pointer" data-icon="lucide:twitter" data-width="16"></span>
<span className="iconify text-zinc-600 hover:text-white transition-colors cursor-pointer" data-icon="lucide:music-2" data-width="16"></span>
</div>
</div>
</footer>

    </>
  );
}
