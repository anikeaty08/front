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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 text-white">
<i className="w-6 h-6 text-yellow-400" data-lucide="video" strokeWidth="1.5"></i>
<span className="font-semibold tracking-tight text-lg">FLYPACK NY</span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-200">
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<div className="group relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                    Live Events <i className="w-4 h-4 opacity-50" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="group relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                    Rentals <i className="w-4 h-4 opacity-50" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="group relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                    Crewing <i className="w-4 h-4 opacity-50" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="group relative flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                    Case Studies <i className="w-4 h-4 opacity-50" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</div>

<div className="hidden md:flex items-center relative">
<i className="w-4 h-4 absolute left-3 text-zinc-400" data-lucide="search" strokeWidth="1.5"></i>
<input className="bg-white/10 border border-white/20 text-white placeholder:text-zinc-400 rounded-full py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all w-48" placeholder="Search..." type="text"/>
</div>

<button className="lg:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="relative w-full min-h-[65vh] flex items-center justify-center overflow-hidden bg-zinc-950">
<img alt="Control Room" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 uppercase">
<span className="block text-yellow-400 mb-2">Flypack</span> New York
            </h1>
<p className="text-xl text-zinc-300 font-medium tracking-tight max-w-2xl mx-auto">
                Live, multi-camera production delivered flawlessly anywhere in the world.
            </p>
</div>
</header>

<section className="py-24 px-6 border-b border-zinc-100">
<div className="max-w-4xl mx-auto text-center">
<p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-12">
                Flypack New York is a production company specializing in live, multi-camera events of any scale. We provide both the talent and equipment necessary to ensure a flawless production every time. Whether you need a few cameras and operators, a remote control room for a REMI production, bonded cellular transmission, or a fully staffed and equipped team on location for a live broadcast, Flypack has you covered. We own all of our equipment and collaborate with the industry's top crews to deliver exceptional results.
            </p>
<div className="flex flex-col items-center justify-center pt-12 border-t border-zinc-100">
<p className="text-base text-zinc-500 font-medium mb-6">We even have a full service rental company,</p>
<div className="flex items-center gap-2 mb-6">
<i className="w-8 h-8 text-yellow-400" data-lucide="rss" strokeWidth="1.5"></i>
<span className="text-2xl font-semibold tracking-tight uppercase">Feed Central</span>
<i className="w-8 h-8 text-yellow-400 scale-x-[-1]" data-lucide="rss" strokeWidth="1.5"></i>
</div>
<p className="text-base text-zinc-500 font-medium">specific to remote production (REMI) if you need our expertise.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Our Productions</h2>
<p className="text-lg text-zinc-500">Expertise across a wide range of live event formats.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col">
<div className="aspect-video w-full overflow-hidden bg-zinc-100">
<img alt="Concerts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3 uppercase">Concerts</h3>
<p className="text-base text-zinc-600 leading-relaxed mb-6 flex-grow">
                            Multi-camera events, indoor arenas, or outdoor events: we capture and stream your musical experience seamlessly to audiences in any location.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors w-fit group/btn" href="#">
                            Read More 
                            <i className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</article>

<article className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col">
<div className="aspect-video w-full overflow-hidden bg-zinc-100">
<img alt="Sports" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3 uppercase">Sports</h3>
<p className="text-base text-zinc-600 leading-relaxed mb-6 flex-grow">
                            From sailing to boxing, and from e-sports tournaments to college and major league events, Flypack New York has done it all.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors w-fit group/btn" href="#">
                            Read More 
                            <i className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</article>

<article className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col">
<div className="aspect-video w-full overflow-hidden bg-zinc-100">
<img alt="Hybrid Events" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3 uppercase">Hybrid Events</h3>
<p className="text-base text-zinc-600 leading-relaxed mb-6 flex-grow">
                            Flypack New York helps you in expanding the reach of your panel discussion, red carpet event, or hybrid conference to audiences worldwide.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors w-fit group/btn" href="#">
                            Read More 
                            <i className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</article>

<article className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col">
<div className="aspect-video w-full overflow-hidden bg-zinc-100">
<img alt="Live News" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&amp;w=2080&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3 uppercase">Live News</h3>
<p className="text-base text-zinc-600 leading-relaxed mb-6 flex-grow">
                            Need a camera team for a news cut-in or a full crew for live event coverage? Flypack delivers top-quality gear, seamless transmission, and industry-leading professionals.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors w-fit group/btn" href="#">
                            Read More 
                            <i className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</article>

<article className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col">
<div className="aspect-video w-full overflow-hidden bg-zinc-100">
<img alt="Corporate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3 uppercase">Corporate</h3>
<p className="text-base text-zinc-600 leading-relaxed mb-6 flex-grow">
                            Broadcast your corporate presentations worldwide with professional live streaming. We ensure high-quality production, smooth connectivity, and an engaging experience.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors w-fit group/btn" href="#">
                            Read More 
                            <i className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</article>

<article className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 group flex flex-col">
<div className="aspect-video w-full overflow-hidden bg-zinc-100">
<img alt="REMI" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-3 uppercase">REMI</h3>
<p className="text-base text-zinc-600 leading-relaxed mb-6 flex-grow">
                            Flypack's REMI production is powered by our New York-based broadcast hub and global crewing network. We simplify complex productions by providing expert crew and top-tier equipment.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors w-fit group/btn" href="#">
                            Read More 
                            <i className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-8">Where We Work</h2>
<div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
<p>
                            We have extensive experience working in major venues across the United States. In the New York Metropolitan Area and along the Eastern Seaboard, we bring our own production truck and have in-depth knowledge of most venues, ensuring highly efficient shoots and effective overtime management.
                        </p>
<p>
                            Nationwide, our vast network of trusted broadcast professionals allows us to quickly staff all video, audio, production, and communications roles in any location—including California, Washington D.C., Chicago, Atlanta, Texas, and Nevada.
                        </p>
<p className="font-medium text-zinc-900">
                            Wherever your event takes place, Flypack delivers seamless production solutions with expert personnel and top-tier equipment.
                        </p>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-zinc-100 rounded-3xl -rotate-3 scale-105 transform origin-center -z-10"></div>
<img alt="Equipment Cases" className="rounded-3xl shadow-xl border border-zinc-200 w-full object-cover aspect-[4/3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-50 pt-20 pb-10 px-6 border-t border-zinc-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="md:col-span-12 lg:col-span-4">
<div className="flex items-center gap-2 text-zinc-900 mb-6">
<i className="w-6 h-6" data-lucide="video" strokeWidth="1.5"></i>
<span className="font-semibold tracking-tight text-lg">FLYPACK NY</span>
</div>
<p className="text-base text-zinc-500 leading-relaxed mb-6 pr-4">
                        Flypack New York combines extensive hybrid production experience with the latest technological innovations. Interested in our live video production solutions? <a className="text-zinc-900 font-medium hover:underline" href="#">Get in touch!</a>
</p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i></a>
<a className="hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>

<div className="md:col-span-4 lg:col-span-2 lg:col-start-6">
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Solutions</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact Us</a></li>
<li><a className="text-base text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Feed Central</a></li>
</ul>
</div>

<div className="md:col-span-8 lg:col-span-4">
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 mb-4">Subscribe</h4>
<p className="text-base text-zinc-500 mb-4">Subscribe to our newsletter to learn more about how we can help your company!</p>
<form className="space-y-3" onsubmit="event.preventDefault();">
<div>
<label className="sr-only" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-white text-base text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition-shadow shadow-sm" id="email" placeholder="Email Address Required" required="" type="email"/>
</div>
<button className="w-full px-4 py-2.5 rounded-lg bg-zinc-900 text-white text-base font-medium hover:bg-zinc-800 transition-colors shadow-sm active:scale-[0.98]" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-zinc-200 text-sm text-zinc-400">
<p>Copyright 2026. Built with <a className="text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Concrete CMS</a>.</p>
<a className="mt-4 sm:mt-0 hover:text-zinc-900 transition-colors" href="#">Log in</a>
</div>
</div>
</footer>


    </>
  );
}
