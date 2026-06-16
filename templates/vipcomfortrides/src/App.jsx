import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons with 1.5 stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-zinc-950 group-hover:scale-105 transition-transform">
<i data-lucide="crown"></i>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-semibold tracking-tight uppercase text-white">VIP Comfort</span>
<span className="text-xs text-yellow-400 tracking-widest uppercase">Rides</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-lg text-zinc-400 hover:text-white transition-colors" href="#gallery">Gallery</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-lg text-white hover:text-yellow-400 transition-colors font-medium" href="tel:2679655333">
<i className="w-5 h-5 text-yellow-400" data-lucide="phone"></i>
                    267-965-5333
                </a>
<a className="bg-yellow-400 hover:bg-yellow-500 text-zinc-950 px-5 py-2.5 rounded font-medium text-lg transition-colors flex items-center gap-2" href="#booking">
                    Book <span className="hidden sm:inline">Now</span>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Vehicle" className="w-full h-full object-cover object-center opacity-40" src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10 py-24 flex flex-col lg:flex-row items-center justify-between gap-16">

<div className="w-full lg:w-1/2 flex flex-col items-start relative">

<div className="absolute -top-12 -left-8 w-64 h-64 border-t-2 border-l-2 border-yellow-400/50 rounded-tl-3xl opacity-50 pointer-events-none hidden md:block"></div>
<div className="absolute -bottom-12 -right-8 w-64 h-64 border-b-2 border-r-2 border-yellow-400/50 rounded-br-3xl opacity-50 pointer-events-none hidden md:block"></div>
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-yellow-400"></div>
<span className="text-lg text-yellow-400 uppercase tracking-widest font-medium">Philadelphia's Finest</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
                    Luxury Group <br/>
                    Transportation <br/>
<span className="text-yellow-400">Made Simple</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-300 max-w-xl mb-10 leading-relaxed font-light">
                    Premium party bus rentals for up to 14 passengers. Professional chauffeur included. Experience unmatched nightlife energy for every celebration.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 w-full">
<a className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-zinc-950 px-8 py-4 rounded font-semibold uppercase tracking-wider text-lg transition-all flex items-center justify-center gap-2 group" href="#booking">
                        Book Your Ride
                        <i className="group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="w-full sm:w-auto border border-white/20 hover:border-yellow-400 hover:text-yellow-400 bg-white/5 backdrop-blur-sm px-8 py-4 rounded font-medium uppercase tracking-wider text-lg transition-colors flex items-center justify-center gap-2" href="tel:2679655333">
<i data-lucide="phone"></i> Call Now
                    </a>
</div>
</div>

<div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative mt-12 lg:mt-0">

<div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center group">
<div className="absolute inset-0 rounded-full border border-dashed border-yellow-400/50 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-white/10 backdrop-blur-md bg-zinc-950/50 flex flex-col items-center justify-center shadow-[0_0_50px_rgba(250,204,21,0.1)] group-hover:shadow-[0_0_80px_rgba(250,204,21,0.2)] transition-shadow duration-500">
<span className="text-lg text-zinc-400 uppercase tracking-widest mb-2">Base Rate</span>
<div className="flex items-start text-yellow-400">
<span className="text-3xl font-semibold mt-2">$</span>
<span className="text-7xl font-bold tracking-tight">175</span>
</div>
<span className="text-lg text-white uppercase tracking-widest mt-2 border-t border-white/10 pt-2 w-1/2 text-center">Per Hour</span>

<div className="absolute -left-4 top-1/4 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
<i className="w-4 h-4 text-yellow-400" data-lucide="users"></i>
<span className="text-sm font-medium">Up to 14</span>
</div>
<div className="absolute -right-4 bottom-1/4 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-xl">
<i className="w-4 h-4 text-yellow-400" data-lucide="user-check"></i>
<span className="text-sm font-medium">Driver Inc.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-zinc-950/50 py-8 relative z-20 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm text-zinc-500 uppercase tracking-widest mb-6 font-medium">Perfect for all your premium events</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl md:text-2xl font-semibold tracking-tight uppercase">Birthdays</span>
<span className="text-xl md:text-2xl font-semibold tracking-tight uppercase">Night Outs</span>
<span className="text-xl md:text-2xl font-semibold tracking-tight uppercase">Weddings</span>
<span className="text-xl md:text-2xl font-semibold tracking-tight uppercase">Proms</span>
<span className="text-xl md:text-2xl font-semibold tracking-tight uppercase">Corporate</span>
</div>
</div>
</div>

<section className="py-32 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">Elevate Your <span className="text-yellow-400">Journey</span></h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        VIP Comfort Rides redefines group transportation in Philadelphia. We don't just offer a ride; we provide an upscale mobile venue. Whether you're celebrating a milestone or orchestrating a seamless night out, our luxury party bus guarantees comfort, safety, and an unforgettable atmosphere.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center shrink-0 mt-1">
<i className="text-yellow-400" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-1">Professional Chauffeur</h3>
<p className="text-lg text-zinc-400">Sit back and relax. Every booking includes an experienced, professional driver dedicated to your safety.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/30 flex items-center justify-center shrink-0 mt-1">
<i className="text-yellow-400" data-lucide="sparkles"></i>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-1">Premium Interior</h3>
<p className="text-lg text-zinc-400">Spacious seating for 14, ambient club lighting, premium sound systems, and meticulous cleanliness.</p>
</div>
</li>
</ul>
</div>
<div className="relative h-[600px] rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Nightlife Vibe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/50 border-y border-white/5 relative" id="services">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">Designed For <span className="text-yellow-400">Celebration</span></h2>
<p className="text-lg text-zinc-400">Our luxury vehicles are perfectly equipped for any special occasion requiring sophisticated group transport.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-zinc-950 border border-white/5 hover:border-yellow-400/30 p-8 rounded-xl transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full -z-10 group-hover:bg-yellow-400/10 transition-colors"></div>
<i className="w-10 h-10 text-yellow-400 mb-6" data-lucide="cake"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Birthdays</h3>
<p className="text-lg text-zinc-400">Make your milestone unforgettable with a mobile VIP room for your entire crew.</p>
</div>
<div className="bg-zinc-950 border border-white/5 hover:border-yellow-400/30 p-8 rounded-xl transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full -z-10 group-hover:bg-yellow-400/10 transition-colors"></div>
<i className="w-10 h-10 text-yellow-400 mb-6" data-lucide="music-4"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Night Outs</h3>
<p className="text-lg text-zinc-400">Keep the energy high between venues. Safe, stylish transport for Philadelphia nightlife.</p>
</div>
<div className="bg-zinc-950 border border-white/5 hover:border-yellow-400/30 p-8 rounded-xl transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full -z-10 group-hover:bg-yellow-400/10 transition-colors"></div>
<i className="w-10 h-10 text-yellow-400 mb-6" data-lucide="ring"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Bridal Showers</h3>
<p className="text-lg text-zinc-400">Elegant and spacious transit for the bridal party to celebrate in supreme comfort.</p>
</div>
<div className="bg-zinc-950 border border-white/5 hover:border-yellow-400/30 p-8 rounded-xl transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full -z-10 group-hover:bg-yellow-400/10 transition-colors"></div>
<i className="w-10 h-10 text-yellow-400 mb-6" data-lucide="graduation-cap"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Graduations</h3>
<p className="text-lg text-zinc-400">Arrive at your ceremony or after-party in a vehicle that matches your achievement.</p>
</div>
<div className="bg-zinc-950 border border-white/5 hover:border-yellow-400/30 p-8 rounded-xl transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full -z-10 group-hover:bg-yellow-400/10 transition-colors"></div>
<i className="w-10 h-10 text-yellow-400 mb-6" data-lucide="glass-water"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Special Events</h3>
<p className="text-lg text-zinc-400">Concerts, sporting events, or galas. Upgrade your arrival and departure experience.</p>
</div>
<div className="bg-zinc-950 border border-white/5 hover:border-yellow-400/30 p-8 rounded-xl transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 rounded-bl-full -z-10 group-hover:bg-yellow-400/10 transition-colors"></div>
<i className="w-10 h-10 text-yellow-400 mb-6" data-lucide="baby"></i>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Baby Showers</h3>
<p className="text-lg text-zinc-400">Comfortable, smooth, and spacious transportation for family and friends.</p>
</div>
<div className="bg-zinc-950 border border-white/5 hover:border-yellow-400/30 p-8 rounded-xl transition-all duration-300 group relative overflow-hidden lg:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Custom Group Trips</h3>
<p className="text-lg text-zinc-400 max-w-md">Need transportation for something else? We offer flexible bookings tailored to your itinerary.</p>
</div>
<a className="shrink-0 bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded text-lg font-medium transition-colors" href="#contact">Get Custom Quote</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="pricing">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden shadow-2xl">

<div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-4">Transparent <br/><span className="text-yellow-400">Luxury Pricing</span></h2>
<p className="text-lg text-zinc-400 mb-8">No hidden fees, no complicated tiers. Just premium service at a straightforward rate.</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-lg text-zinc-300">
<i className="text-yellow-400 w-5 h-5 shrink-0" data-lucide="check"></i> Up to 14 Passengers
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-300">
<i className="text-yellow-400 w-5 h-5 shrink-0" data-lucide="check"></i> Professional Driver Included
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-300">
<i className="text-yellow-400 w-5 h-5 shrink-0" data-lucide="check"></i> Premium Sound &amp; Lighting
                            </li>
<li className="flex items-center gap-3 text-lg text-zinc-300">
<i className="text-yellow-400 w-5 h-5 shrink-0" data-lucide="check"></i> Flexible Routing
                            </li>
</ul>
</div>
<div className="w-full md:w-1/2 bg-zinc-950 border border-yellow-400/30 rounded-2xl p-8 text-center relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-zinc-950 text-sm font-bold uppercase tracking-widest px-4 py-1 rounded-full">Flat Rate</div>
<div className="text-zinc-500 font-medium uppercase tracking-widest mb-2 mt-4">Starting At</div>
<div className="flex items-end justify-center gap-1 mb-2 text-white">
<span className="text-4xl font-semibold mb-2">$</span>
<span className="text-7xl font-bold tracking-tight">175</span>
</div>
<div className="text-lg text-zinc-400 uppercase tracking-widest mb-8">Per Hour</div>
<a className="block w-full bg-yellow-400 hover:bg-yellow-500 text-zinc-950 py-4 rounded font-semibold uppercase tracking-wider text-lg transition-colors" href="#booking">Secure Your Date</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
<div>
<h2 className="text-4xl font-bold uppercase tracking-tight text-white mb-2">The <span className="text-yellow-400">Experience</span></h2>
<p className="text-lg text-zinc-400">A glimpse into your next unforgettable night.</p>
</div>
</div>

<div className="flex gap-6 overflow-x-auto hide-scrollbar px-6 pb-8 snap-x snap-mandatory">
<div className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-[4/3] rounded-2xl overflow-hidden snap-center relative group cursor-pointer">
<img alt="Party Vibe" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&amp;w=2079&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-[4/3] rounded-2xl overflow-hidden snap-center relative group cursor-pointer">
<img alt="Luxury Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-[4/3] rounded-2xl overflow-hidden snap-center relative group cursor-pointer">
<img alt="Nightlife City" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] aspect-[4/3] rounded-2xl overflow-hidden snap-center relative group cursor-pointer">
<img alt="Group Celebration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900 border-t border-white/10 relative overflow-hidden" id="booking">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-yellow-400/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">Reserve Your <br/><span className="text-yellow-400">Ride Today</span></h2>
<p className="text-lg text-zinc-400 mb-10">Dates book up quickly for weekends and holidays. Reach out now to secure VIP Comfort Rides for your event.</p>
<div className="space-y-8">
<a className="flex items-center gap-6 group" href="tel:2679655333">
<div className="w-16 h-16 bg-zinc-950 border border-white/10 rounded-full flex items-center justify-center group-hover:border-yellow-400 transition-colors">
<i className="w-6 h-6 text-yellow-400" data-lucide="phone"></i>
</div>
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-medium mb-1">Call Us Directly</div>
<div className="text-2xl font-semibold tracking-tight text-white group-hover:text-yellow-400 transition-colors">267-965-5333</div>
</div>
</a>
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-zinc-950 border border-white/10 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-yellow-400" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-medium mb-1">Location</div>
<div className="text-lg text-white">3616 President Street<br/>Philadelphia, PA 19114</div>
</div>
</div>
<div className="flex items-center gap-6">
<div className="w-16 h-16 bg-zinc-950 border border-white/10 rounded-full flex items-center justify-center">
<i className="w-6 h-6 text-yellow-400" data-lucide="clock"></i>
</div>
<div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-medium mb-1">Availability</div>
<div className="text-lg text-white">24/7 Service Available<br/>Booking required in advance</div>
</div>
</div>
</div>
</div>

<div className="bg-zinc-950 border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-8">Request a Booking</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm text-zinc-400 font-medium">First Name</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-zinc-600" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm text-zinc-400 font-medium">Last Name</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-zinc-600" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm text-zinc-400 font-medium">Phone Number</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-zinc-600" placeholder="(123) 456-7890" type="tel"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm text-zinc-400 font-medium">Event Date</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all [color-scheme:dark]" type="date"/>
</div>
<div className="space-y-2">
<label className="text-sm text-zinc-400 font-medium">Event Type</label>

<div className="relative">
<select className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all appearance-none">
<option disabled="" selected="" value="">Select an event...</option>
<option value="birthday">Birthday Party</option>
<option value="nightout">Night Out</option>
<option value="wedding">Wedding / Bridal</option>
<option value="prom">Prom / Graduation</option>
<option value="other">Other Event</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm text-zinc-400 font-medium">Additional Details</label>
<textarea className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-lg text-white focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition-all placeholder:text-zinc-600 resize-none" placeholder="Tell us about your event, locations, or special requests..." rows="3"></textarea>
</div>
<button className="w-full bg-yellow-400 hover:bg-yellow-500 text-zinc-950 py-4 rounded-lg font-semibold uppercase tracking-wider text-lg transition-colors mt-4" type="button">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<i className="text-yellow-400 w-6 h-6" data-lucide="crown"></i>
<span className="text-xl font-semibold tracking-tight uppercase text-white">VIP Comfort Rides</span>
</div>
<p className="text-zinc-500 text-sm">© 2024 VIP Comfort Rides. All rights reserved. Philadelphia, PA.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:bg-zinc-800 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-yellow-400 hover:bg-zinc-800 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
