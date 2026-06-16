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
sans: ['DM Sans', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
black: '#0f0f0f',
red: '#D01B1B',
cream: '#F7F4EB',
accent: '#F4EBD0'
}
},
animation: {
'scroll': 'scroll 25s linear infinite',
'bounce-slow': 'bounce 3s infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
        
        // Simple scroll to anchor behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<nav className="flex md:justify-between text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 relative shadow-2xl items-center justify-center">

<div className="md:hidden absolute top-1/2 left-6 -translate-y-1/2 z-[102]">
<button aria-label="Open menu" className="hover:text-[#E85424] transition-colors focus:outline-none cursor-pointer block text-slate-950 bg-transparent border-0 shadow-none p-2" onclick="let o=document.getElementById('mobile-menu-overlay'),s=document.getElementById('mobile-menu-sidebar');if(o&amp;&amp;s){o.classList.remove('hidden','opacity-0','pointer-events-none');o.classList.add('opacity-100','pointer-events-auto');s.classList.remove('hidden','-translate-x-full','opacity-0','pointer-events-none');s.classList.add('translate-x-0','opacity-100','pointer-events-auto');document.body.style.overflow='hidden';}">
<svg className="w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line className="" x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
<a className="uppercase inline-flex items-center text-xl font-semibold text-slate-950 tracking-tighter font-display" href="/homepage">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center cursor-pointer w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/>
</a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/story-page">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/menu-page">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/location-page">find
      us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/catering-page">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/contact-page">contact</a><a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/feedback-review">Reviews</a>
</div>
<div className="hidden md:flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="https://order.rollicious.co.nz/">
      Order Online
    </a>
</div>
</nav>
</header>

<div className="hidden md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] opacity-0 pointer-events-none transition-all duration-300" id="mobile-menu-overlay" onclick="let s=document.getElementById('mobile-menu-sidebar'),o=document.getElementById('mobile-menu-overlay');if(s){s.classList.remove('translate-x-0','opacity-100','pointer-events-auto');s.classList.add('-translate-x-full','opacity-0','pointer-events-none');setTimeout(function(){s.classList.add('hidden');},300);}if(o){o.classList.remove('opacity-100','pointer-events-auto');o.classList.add('opacity-0','pointer-events-none');setTimeout(function(){o.classList.add('hidden');},300);}document.body.style.overflow='';">
</div>

<div className="hidden md:hidden fixed top-0 left-0 w-[80%] max-w-[320px] h-screen bg-white z-[101] flex flex-col -translate-x-full opacity-0 pointer-events-none transition-all duration-300 overflow-y-auto text-left" id="mobile-menu-sidebar" onclick="event.stopPropagation()">

<div className="flex items-center justify-between border-b border-gray-200 p-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight font-display">Menu</h2>
<button aria-label="Close menu" className="p-2 -mr-2 text-slate-900 hover:text-[#E85424] transition-colors cursor-pointer" onclick="event.stopPropagation();let s=document.getElementById('mobile-menu-sidebar'),o=document.getElementById('mobile-menu-overlay');if(s){s.classList.remove('translate-x-0','opacity-100','pointer-events-auto');s.classList.add('-translate-x-full','opacity-0','pointer-events-none');setTimeout(function(){s.classList.add('hidden');},300);}if(o){o.classList.remove('opacity-100','pointer-events-auto');o.classList.add('opacity-0','pointer-events-none');setTimeout(function(){o.classList.add('hidden');},300);}document.body.style.overflow='';">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="flex flex-col py-2 border-b border-gray-200">
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/story-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Story</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/menu-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Menu</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/location-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Find Us</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/catering-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Catering</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/contact-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Contact</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/feedback-review">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Reviews</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
</div>

<div className="px-6 py-8 mt-auto">
<a className="flex items-center justify-center w-full uppercase transition-colors hover:bg-[#E85424] text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg py-3 shadow-lg cursor-pointer" href="https://order.rollicious.co.nz/">
    Order Online
  </a>
</div>
</div>
<section className="z-10 sm:px-8 overflow-hidden bg-[#F7F4EB] pt-32 pr-4 pb-24 pl-4 relative" id="contact">

<div className="absolute top-0 right-0 w-[50%] h-[80%] bg-[#E85424]/5 rounded-bl-full pointer-events-none -z-10 translate-x-1/3 -translate-y-1/4"></div>
<div className="max-w-4xl mx-auto relative z-10">

<div className="text-center mb-16 flex flex-col items-center">
<h2 className="uppercase text-5xl md:text-6xl lg:text-7xl font-semibold text-[#234220] tracking-tighter font-display mb-6 leading-[0.9]">
        Got Questions
      </h2>
<p className="md:text-xl leading-relaxed text-lg font-medium text-black/70 font-sans max-w-2xl mr-auto ml-auto">Don't be a stranger. Let's get on a first name basis. We will get back to you as soon as possible!</p>
</div>

<div className="bg-white rounded-[2rem] p-6 sm:p-10 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5">
<form action="https://formsubmit.co/hello@socialcreatives.co.nz" className="space-y-8" method="POST">
<input name="_webhook" type="hidden" value="https://hook.us2.make.com/s5lr4h5r12t2q7dvzxf1fk2e12egh7rs"/>
<input name="formtype" type="hidden" value="contact"/>

<div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-x-6 gap-y-6">

<div className="space-y-2.5">
<label className="block text-sm font-normal text-[#234220]" htmlFor="firstName">First name *</label>
<input className="w-full bg-[#F7F4EB]/60 border border-black/10 rounded-xl px-4 py-3.5 text-base text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all font-sans" id="firstName" name="first-name" placeholder="First name" required="" type="text"/>
</div>

<div className="space-y-2.5">
<label className="block text-sm font-normal text-[#234220]" htmlFor="lastName">Last name *</label>
<input className="placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all text-base text-black font-sans bg-[#F7F4EB]/60 w-full border-black/10 border rounded-xl pt-3.5 pr-4 pb-3.5 pl-4" id="lastName" name="last-name" placeholder="Last name" required="" type="text"/>
</div>

<div className="space-y-2.5">
<label className="block text-sm font-normal text-[#234220]" htmlFor="email">Email *</label>
<input className="w-full bg-[#F7F4EB]/60 border border-black/10 rounded-xl px-4 py-3.5 text-base text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all font-sans" id="email" name="email" placeholder="Enter your email address*" required="" type="email"/>
</div>

<div className="space-y-2.5">
<label className="block text-sm font-normal text-[#234220]" htmlFor="phone">Phone number *</label>
<input className="w-full bg-[#F7F4EB]/60 border border-black/10 rounded-xl px-4 py-3.5 text-base text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all font-sans" id="phone" name="phone" placeholder="Phone number" required="" type="tel"/>
</div>

<div className="space-y-2.5 relative">
<label className="block text-sm font-normal text-[#234220]" htmlFor="stores">Stores *</label>
<div className="relative group">
<select className="appearance-none focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all cursor-pointer text-base text-black font-sans bg-[#F7F4EB]/60 w-full border-black/10 border rounded-xl pt-3.5 pr-12 pb-3.5 pl-4" id="stores" name="store" required="">
<option className="text-black/40" disabled="" selected="" value="">- Select -</option>
<option value="the-sq">The SQ</option>
<option value="arts-centre">Arts Centre</option>
<option value="markets-events">Markets/Events</option>
<option value="Christchurch Football Club">Christchurch Football Club</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/40 group-focus-within:text-[#E85424] transition-colors">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>

<div className="space-y-2.5 relative">
<label className="block text-sm font-normal text-[#234220]" htmlFor="city">City *</label>
<div className="relative group">
<select className="appearance-none focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all cursor-pointer text-base text-black font-sans bg-[#F7F4EB]/60 w-full border-black/10 border rounded-xl pt-3.5 pr-12 pb-3.5 pl-4" id="city" name="city" required="">
<option disabled="" selected="" value="">- Select -</option>
<option value="christchurch">Christchurch</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black/40 group-focus-within:text-[#E85424] transition-colors">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="space-y-2.5 mt-8">
<label className="block text-sm font-normal text-[#234220]" htmlFor="message">Send us a message *</label>
<textarea className="w-full bg-[#F7F4EB]/60 border border-black/10 rounded-xl px-4 py-3.5 text-base text-black focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all font-sans resize-y" id="message" name="message" required="" rows="4"></textarea>
</div>

<div className="pt-8 mt-8 border-t border-black/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

<label className="flex items-center gap-4 cursor-pointer group">
<div className="relative flex items-center justify-center w-6 h-6 border-2 border-black/20 rounded-full group-hover:border-[#E85424] transition-colors shrink-0 bg-white">
<input className="peer sr-only" name="updates" type="checkbox"/>
<div className="absolute inset-0 rounded-full bg-[#E85424] scale-0 peer-checked:scale-100 transition-transform duration-200 ease-out flex items-center justify-center">
<svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
</div>
<span className="group-hover:text-black transition-colors select-none text-sm font-light text-black/70">Keep me updated on new upcoming locations, giveaways and new menu items</span>
</label>

<button className="shrink-0 md:w-auto inline-flex gap-3 uppercase transition-all hover:bg-[#234220] hover:shadow-xl hover:-translate-y-0.5 shadow-[#E85424]/20 text-sm font-normal text-white tracking-widest font-display bg-[#E85424] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg gap-x-3 gap-y-3 items-center justify-center" type="submit">
<span>Submit</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>
<main className="">







<section className="sm:px-8 text-white bg-[#234220] pt-20 pr-4 pb-20 pl-4" id="book">
<div className="grid lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto gap-x-12 gap-y-12 items-center">
<div className="" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))'}}>
<span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">Visit Us</span>
<h2 className="sm:text-6xl uppercase text-4xl font-semibold tracking-tight font-display mt-2">Opening Hours</h2>
<p className="text-white/60 max-w-md mt-4">270 Saint Asaph Street, Christchurch Central City, Christchurch 8011</p>
<div className="mt-10 space-y-6">
<div className="flex border-white/10 border-b pb-4 items-center justify-between">
<span className="uppercase text-lg tracking-wide font-display">Mon - Fri</span>
<span className="text-brand-orange text-sm font-mono">10AM - 3PM</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<span className="uppercase text-lg tracking-wide font-display">SAT - SUN</span>
<span className="text-brand-orange text-sm font-mono">Closed</span>
</div>
</div>
</div>
<div className="relative rounded-[2rem] p-10 overflow-hidden text-center bg-brand-orange">
<div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<h3 className="relative z-10 font-display text-3xl font-semibold uppercase mb-6">Food truck hours</h3>
<p className="relative z-10 text-sm text-white/90 mb-8 px-4">We have multiple food truck locations, weekly events,
        markets
        and festivals we serve at!</p>
<div className="text-center mt-16 gap-x-3 gap-y-3">
<a className="inline-flex items-center gap-3 uppercase transition-all hover:bg-brand-orange text-sm font-semibold text-white tracking-widest font-display bg-[#E85424] rounded-full pt-4 pr-8 pb-4 pl-8" href="/location-page">
<span className="">View location &amp; hours</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

</main>

<footer className="text-white bg-[#f7f4eb] border-white/10 border-t pt-20 pb-10">
<div className="sm:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row gap-12 mb-20 gap-x-12 gap-y-12 justify-between items-center md:items-start text-center md:text-left">
<div className="max-w-sm flex flex-col items-center md:items-start">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center text-center w-auto object-cover pt-4 pb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6aaace39-7e06-49d7-b37b-924c6e273acf_320w.png"/>
<p className="leading-relaxed text-sm text-[#E85424]">Rollicious is a Christchurch-based Vietnamese shop specialising in Northern-style bánh mì, with light, balanced flavours and bread baked fresh daily at 5am for that perfect crispy outside and fluffy inside.</p>
<div className="flex gap-4 mt-6 gap-x-4 gap-y-4 justify-center md:justify-start">
<a className="transition-colors hover:text-brand-orange text-[#000000]" href="https://www.instagram.com/rollicious_vietnamese/"><svg aria-hidden="true" className="lucide lucide-instagram w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(232, 84, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg></a>
<a className="transition-colors hover:text-brand-orange" href="https://www.facebook.com/RolliciousVietnamese/"><svg aria-hidden="true" className="lucide lucide-facebook w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(232, 84, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg></a>
<a className="transition-colors hover:text-brand-orange" href="#"></a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-12">
<div className="">
<h4 className="uppercase text-brand-orange text-lg font-semibold text-[#E85424] tracking-wider font-display mb-4">
          information</h4>
<ul className="text-sm text-white/60 space-y-3">
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="/story-page">Our Story</a>
</li>
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="/menu-page">Our Menu</a>
</li>
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="https://order.rollicious.co.nz/">Order Online</a></li>
<li className="">
<a className="text-[#E85424] hover:text-[#E85424] transition-colors" href="/catering-page">
              Catering
            </a>
</li>
</ul>
</div>
<div className="">
<h4 className="uppercase text-brand-orange text-lg font-semibold text-[#E85424] tracking-wider font-display mb-4">
          Get in
          touch</h4>
<ul className="space-y-3 text-sm text-white/60">
<li className="transition-colors select-text text-[#E85424]">
            020 434 8989
          </li>
<li className="text-[#E85424] transition-colors select-text">
            hello@rollicious.co.nz
          </li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 uppercase text-xs text-[#E85424] tracking-widest border-white/10 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="">© Rollicious, 2026</p>
<div className="flex gap-6">
<a className="hover:text-[#234220]" href="/privacy-page">Privacy Policy</a>
<a className="hover:text-[#234220]" href="/terms-page">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
