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
      

<main className="">








</main>

<header className="fixed z-50 flex pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase text-xl font-semibold text-slate-950 tracking-tighter font-display inline-flex items-center" href="#"><img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/></a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#about">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#menu">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#reviews">find
        us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">contact</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#order">
        Order Online
      </a>
</div>
</nav>
</header><section className="sm:px-8 sm:pt-40 sm:pb-24 bg-[#F7F4EB] border-black/5 border-t pt-20 pr-4 pb-32 pl-4 relative" id="feedback-form">
<div className="max-w-4xl mr-auto ml-auto">
<h2 className="leading-tight sm:text-5xl text-4xl font-medium text-[#234220] tracking-tight text-center max-w-3xl mt-16 mr-auto mb-6 ml-auto">
      How was your recent experience with Rollicious?
    </h2>
<p className="text-lg sm:text-xl text-[#0f0f0f]/80 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
      We want each of our customers to have a positive experience, so please take a moment to explain what we can do to
      improve. Who knows, it might change the way we do business forever!
    </p>
<div className="max-w-2xl mx-auto">
<form className="space-y-8">
<input name="_webhook" type="hidden" value="https://hook.us2.make.com/s5lr4h5r12t2q7dvzxf1fk2e12egh7rs"/>
<input name="formtype" type="hidden" value="feedback"/>
<div className="flex flex-col gap-2">
<label className="font-medium text-[#0f0f0f] text-lg" htmlFor="name">Your Name *</label>
<input className="border border-black/10 bg-white rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all w-full shadow-sm" id="name" name="name" required="" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-medium text-[#0f0f0f] text-lg" htmlFor="email">Your Email *</label>
<input className="border border-black/10 bg-white rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all w-full shadow-sm" id="email" name="email" required="" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-medium text-[#0f0f0f] text-lg" htmlFor="phone">Your Phone Number *</label>
<input className="border border-black/10 bg-white rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all w-full shadow-sm" id="phone" name="phone" required="" type="tel"/>
</div>
<div className="flex flex-col gap-2">
<label className="font-medium text-[#0f0f0f] text-lg" htmlFor="message">Your Message *</label>
<textarea className="border border-black/10 bg-white rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#E85424]/20 focus:border-[#E85424] transition-all w-full resize-y shadow-sm" id="message" name="message" required="" rows="6"></textarea>
</div>
<div className="pt-6 flex justify-center">
<button className="bg-[#E85424] hover:bg-[#D01B1B] text-white font-light uppercase tracking-widest py-4 px-16 rounded-md transition-colors shadow-md text-lg" formaction="https://formsubmit.co/hello@socialcreatives.co.nz" formmethod="POST" type="submit">
            SEND
          </button>
</div>
</form>
</div>
</div>
</section><header className="fixed flex z-50 pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase inline-flex items-center text-xl font-semibold text-slate-950 tracking-tighter font-display" href="/homepage">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center cursor-pointer w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/>
</a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#about">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#menu">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#reviews">find
        us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">contact</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#order">
        Order Online
      </a>
</div>
</nav>
</header><header className="fixed z-50 flex pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
<a className="uppercase text-xl font-semibold text-slate-950 tracking-tighter font-display inline-flex items-center" href="#"><img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/></a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#about">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="#menu">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#reviews">find
        us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/#faq">contact</a>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="#order">
        Order Online
      </a>
</div>
</nav>
</header><header className="fixed flex z-50 pr-4 pl-4 top-4 right-0 left-0 justify-center">
<nav className="flex text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 shadow-2xl items-center justify-between">
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
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="https://order.rollicious.co.nz/">
  Order Online
</a>
</div>
</nav>
</header><footer className="text-white bg-[#f7f4eb] border-white/10 border-t pt-20 pb-10">
<div className="sm:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-20 gap-x-12 gap-y-12 justify-between">
<div className="max-w-sm">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 mx-auto md:mx-0 bg-center text-center w-auto object-cover pt-4 pb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6aaace39-7e06-49d7-b37b-924c6e273acf_320w.png"/>
<p className="leading-relaxed text-sm text-[#E85424]">Rollicious is a Christchurch-based Vietnamese shop
          specialising in Northern-style bánh mì, with light, balanced flavours and bread baked fresh daily at 5am for
          that perfect crispy outside and fluffy inside.</p>
<div className="flex justify-center md:justify-start gap-4 mt-6 gap-x-4 gap-y-4">
<a className="transition-colors hover:text-brand-orange text-[#000000]" href="https://www.instagram.com/rollicious_vietnamese/"><svg aria-hidden="true" className="lucide lucide-instagram w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(232, 84, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg></a>
<a className="transition-colors hover:text-brand-orange" href="https://www.facebook.com/RolliciousVietnamese/"><svg aria-hidden="true" className="lucide lucide-facebook w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(232, 84, 36)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg></a>
<a className="transition-colors hover:text-brand-orange" href="#"></a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-12 gap-y-12">
<div className="">
<h4 className="uppercase text-brand-orange text-lg font-semibold text-[#E85424] tracking-wider font-display mb-4">
            information</h4>
<ul className="text-sm text-white/60 space-y-3">
<li className=""><a className="hover:text-[#E85424] transition-colors text-[#E85424]" href="/story-page">Our
                Story</a>
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

    </>
  );
}
