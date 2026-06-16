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



        document.addEventListener('DOMContentLoaded', () => {
            // Navbar Scroll Effect
            const navbar = document.getElementById('navbar');
            const logo = document.getElementById('logo');
            const navLinks = document.querySelectorAll('.nav-link');
            const navBtn = document.querySelector('.nav-btn');

            const handleScroll = () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-white/80', 'backdrop-blur-md', 'border-gray-200', 'shadow-sm', 'py-3');
                    navbar.classList.remove('border-transparent', 'py-4');
                    
                    logo.classList.replace('text-white', 'text-[#0B1F3A]');
                    
                    navLinks.forEach(link => {
                        link.classList.replace('text-white/80', 'text-gray-600');
                        link.classList.replace('hover:text-white', 'hover:text-[#0B1F3A]');
                        // For mobile hamburger icon
                        if(link.children.length > 0) {
                             link.classList.replace('text-white', 'text-[#0B1F3A]');
                        }
                    });

                    navBtn.classList.replace('bg-white/10', 'bg-[#0B1F3A]');
                    navBtn.classList.replace('text-white', 'text-white');
                    navBtn.classList.replace('border-white/20', 'border-transparent');
                    navBtn.classList.replace('hover:bg-white', 'hover:bg-[#0B1F3A]/90');
                    navBtn.classList.replace('hover:text-[#0B1F3A]', 'hover:text-white');

                } else {
                    navbar.classList.remove('bg-white/80', 'backdrop-blur-md', 'border-gray-200', 'shadow-sm', 'py-3');
                    navbar.classList.add('border-transparent', 'py-4');
                    
                    logo.classList.replace('text-[#0B1F3A]', 'text-white');
                    
                    navLinks.forEach(link => {
                        link.classList.replace('text-gray-600', 'text-white/80');
                        link.classList.replace('hover:text-[#0B1F3A]', 'hover:text-white');
                        // For mobile hamburger icon
                        if(link.children.length > 0) {
                             link.classList.replace('text-[#0B1F3A]', 'text-white');
                        }
                    });

                    navBtn.classList.replace('bg-[#0B1F3A]', 'bg-white/10');
                    // Resetting hover states requires a bit of class toggling hack or setting inline, 
                    // relying on standard initial classes defined in HTML
                    navBtn.className = "hidden md:flex bg-white/10 backdrop-blur-md text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-[#0B1F3A] transition-all duration-300 nav-btn";
                }
            };

            window.addEventListener('scroll', handleScroll);
            // Run once on load in case page is already scrolled
            handleScroll();

            // Intersection Observer for Reveal Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent py-4" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<a className="font-['Playfair_Display'] text-xl font-medium tracking-tighter text-white transition-colors duration-300" href="#" id="logo">VOYARA</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors nav-link" href="#destinations">Destinations</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors nav-link" href="#packages">Experiences</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors nav-link" href="#why-us">Philosophy</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors nav-link" href="#testimonials">Stories</a>
</div>
<button className="hidden md:flex bg-white/10 backdrop-blur-md text-white border border-white/20 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-[#0B1F3A] transition-all duration-300 nav-btn">
                Plan Your Trip
            </button>

<button className="md:hidden text-white nav-link">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-[90vh] flex flex-col justify-center items-center pt-20">

<div className="absolute inset-0 z-0">
<img alt="Cinematic Landscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/80 via-[#0B1F3A]/50 to-[#0B1F3A]/90"></div>
</div>
<div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center reveal mt-10">
<span className="inline-block text-[#F4A91F] text-xs font-medium uppercase tracking-widest mb-4">Elevate Your Wanderlust</span>
<h1 className="font-['Playfair_Display'] text-5xl md:text-7xl text-white font-medium tracking-tight mb-6 leading-tight">
                Your Journey <br className="hidden md:block"/> Begins Here.
            </h1>
<p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12">
                Discover curated experiences in the world's most breathtaking destinations. Tailored exclusively for the modern explorer.
            </p>

<div className="bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-3xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto shadow-2xl">
<div className="flex-1 w-full flex items-center bg-white/5 rounded-2xl px-4 py-3 border border-transparent focus-within:border-white/30 transition-colors">
<iconify-icon className="text-white/60 text-xl mr-3" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-transparent border-none outline-none text-white placeholder-white/60 text-sm w-full font-light focus:ring-0" placeholder="Where to?" type="text"/>
</div>
<div className="w-full md:w-px h-px md:h-10 bg-white/20 my-2 md:my-0"></div>
<div className="flex-1 w-full flex items-center bg-white/5 rounded-2xl px-4 py-3 border border-transparent focus-within:border-white/30 transition-colors">
<iconify-icon className="text-white/60 text-xl mr-3" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-transparent border-none outline-none text-white/80 text-sm w-full font-light focus:ring-0 uppercase tracking-wider" type="date"/>
</div>
<div className="w-full md:w-px h-px md:h-10 bg-white/20 my-2 md:my-0"></div>
<div className="flex-1 w-full flex items-center bg-white/5 rounded-2xl px-4 py-3 border border-transparent focus-within:border-white/30 transition-colors">
<iconify-icon className="text-white/60 text-xl mr-3" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<select className="bg-transparent border-none outline-none text-white text-sm w-full font-light focus:ring-0 appearance-none cursor-pointer">
<option className="text-gray-800" disabled="" selected="" value="">Travelers</option>
<option className="text-gray-800" value="1">1 Guest</option>
<option className="text-gray-800" value="2">2 Guests</option>
<option className="text-gray-800" value="3">3+ Guests</option>
</select>
</div>
<button className="w-full md:w-auto bg-[#F4A91F] text-[#0B1F3A] px-8 py-3.5 rounded-2xl text-sm font-medium hover:bg-[#e09b1c] transition-all flex items-center justify-center gap-2 mt-2 md:mt-0 shadow-lg shadow-[#F4A91F]/20">
<iconify-icon className="text-lg" icon="solar:magnifer-linear" strokeWidth="2"></iconify-icon>
                    Search
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
<span className="text-white text-xs font-light tracking-widest mb-2">SCROLL</span>
<iconify-icon className="text-white" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</header>

<section className="py-24 px-6 max-w-7xl mx-auto" id="destinations">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#0B1F3A] font-medium tracking-tight mb-3">Popular Destinations</h2>
<p className="text-gray-500 text-sm font-light max-w-lg">Explore our handpicked selection of the most sought-after locations around the globe, designed for the discerning traveler.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-[#0B1F3A] hover:text-[#F4A91F] transition-colors mt-4 md:mt-0" href="#">
                View All Locations <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer bg-white rounded-[2rem] p-2.5 shadow-[0_4px_20px_-4px_rgba(11,31,58,0.05)] hover:shadow-[0_8px_30px_rgba(11,31,58,0.12)] transition-all duration-500 border border-gray-100 reveal">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-gray-100">
<img alt="Santorini" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 text-[#0B1F3A] shadow-sm">
<iconify-icon className="text-[#F4A91F]" icon="solar:star-linear" strokeWidth="2"></iconify-icon> 4.9
                    </div>
</div>
<div className="p-5 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Playfair_Display'] text-xl font-medium text-[#0B1F3A] tracking-tight group-hover:text-[#F4A91F] transition-colors">Santorini</h3>
<span className="text-sm font-medium text-gray-500 line-through mr-2 hidden group-hover:inline-block">$1,400</span>
<span className="text-lg font-medium text-[#0B1F3A]">$1,200</span>
</div>
<div className="flex justify-between items-center">
<p className="text-sm text-gray-500 font-light flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Greece
                        </p>
<span className="text-xs font-medium text-[#F4A91F] bg-[#F4A91F]/10 px-2 py-1 rounded-md">Flights incl.</span>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-[2rem] p-2.5 shadow-[0_4px_20px_-4px_rgba(11,31,58,0.05)] hover:shadow-[0_8px_30px_rgba(11,31,58,0.12)] transition-all duration-500 border border-gray-100 reveal reveal-delay-1">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-gray-100">
<img alt="Kyoto" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 text-[#0B1F3A] shadow-sm">
<iconify-icon className="text-[#F4A91F]" icon="solar:star-linear" strokeWidth="2"></iconify-icon> 4.8
                    </div>
</div>
<div className="p-5 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Playfair_Display'] text-xl font-medium text-[#0B1F3A] tracking-tight group-hover:text-[#F4A91F] transition-colors">Kyoto</h3>
<span className="text-lg font-medium text-[#0B1F3A]">$1,850</span>
</div>
<div className="flex justify-between items-center">
<p className="text-sm text-gray-500 font-light flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Japan
                        </p>
<span className="text-xs font-medium text-[#F4A91F] bg-[#F4A91F]/10 px-2 py-1 rounded-md">Culture</span>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-[2rem] p-2.5 shadow-[0_4px_20px_-4px_rgba(11,31,58,0.05)] hover:shadow-[0_8px_30px_rgba(11,31,58,0.12)] transition-all duration-500 border border-gray-100 reveal reveal-delay-2">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-gray-100">
<img alt="Maldives" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 text-[#0B1F3A] shadow-sm">
<iconify-icon className="text-[#F4A91F]" icon="solar:star-linear" strokeWidth="2"></iconify-icon> 5.0
                    </div>
</div>
<div className="p-5 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Playfair_Display'] text-xl font-medium text-[#0B1F3A] tracking-tight group-hover:text-[#F4A91F] transition-colors">Malé Atoll</h3>
<span className="text-lg font-medium text-[#0B1F3A]">$3,200</span>
</div>
<div className="flex justify-between items-center">
<p className="text-sm text-gray-500 font-light flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> Maldives
                        </p>
<span className="text-xs font-medium text-[#F4A91F] bg-[#F4A91F]/10 px-2 py-1 rounded-md">Luxury Resort</span>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-[2rem] p-2.5 shadow-[0_4px_20px_-4px_rgba(11,31,58,0.05)] hover:shadow-[0_8px_30px_rgba(11,31,58,0.12)] transition-all duration-500 border border-gray-100 reveal">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-gray-100">
<img alt="Paris" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 text-[#0B1F3A] shadow-sm">
<iconify-icon className="text-[#F4A91F]" icon="solar:star-linear" strokeWidth="2"></iconify-icon> 4.7
                    </div>
</div>
<div className="p-5 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Playfair_Display'] text-xl font-medium text-[#0B1F3A] tracking-tight group-hover:text-[#F4A91F] transition-colors">Paris</h3>
<span className="text-lg font-medium text-[#0B1F3A]">$950</span>
</div>
<div className="flex justify-between items-center">
<p className="text-sm text-gray-500 font-light flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> France
                        </p>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-[2rem] p-2.5 shadow-[0_4px_20px_-4px_rgba(11,31,58,0.05)] hover:shadow-[0_8px_30px_rgba(11,31,58,0.12)] transition-all duration-500 border border-gray-100 reveal reveal-delay-1">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-gray-100">
<img alt="Taj Mahal" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 text-[#0B1F3A] shadow-sm">
<iconify-icon className="text-[#F4A91F]" icon="solar:star-linear" strokeWidth="2"></iconify-icon> 4.8
                    </div>
</div>
<div className="p-5 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Playfair_Display'] text-xl font-medium text-[#0B1F3A] tracking-tight group-hover:text-[#F4A91F] transition-colors">Agra</h3>
<span className="text-lg font-medium text-[#0B1F3A]">$820</span>
</div>
<div className="flex justify-between items-center">
<p className="text-sm text-gray-500 font-light flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> India
                        </p>
<span className="text-xs font-medium text-[#F4A91F] bg-[#F4A91F]/10 px-2 py-1 rounded-md">Guided Tour</span>
</div>
</div>
</div>

<div className="group cursor-pointer bg-white rounded-[2rem] p-2.5 shadow-[0_4px_20px_-4px_rgba(11,31,58,0.05)] hover:shadow-[0_8px_30px_rgba(11,31,58,0.12)] transition-all duration-500 border border-gray-100 reveal reveal-delay-2">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] bg-gray-100">
<img alt="London" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 text-[#0B1F3A] shadow-sm">
<iconify-icon className="text-[#F4A91F]" icon="solar:star-linear" strokeWidth="2"></iconify-icon> 4.9
                    </div>
</div>
<div className="p-5 pb-4">
<div className="flex justify-between items-start mb-2">
<h3 className="font-['Playfair_Display'] text-xl font-medium text-[#0B1F3A] tracking-tight group-hover:text-[#F4A91F] transition-colors">London</h3>
<span className="text-lg font-medium text-[#0B1F3A]">$1,050</span>
</div>
<div className="flex justify-between items-center">
<p className="text-sm text-gray-500 font-light flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon> United Kingdom
                        </p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-gray-200 bg-white px-6 py-3 rounded-xl shadow-sm text-[#0B1F3A]" href="#">
                View All Locations <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-[#0B1F3A] text-white overflow-hidden relative" id="packages">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-12 reveal">
<span className="inline-block text-[#F4A91F] text-xs font-medium uppercase tracking-widest mb-3">Exclusive Offers</span>
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl font-medium tracking-tight">Featured Experiences</h2>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-12 pt-4 snap-x snap-mandatory no-scrollbar w-full relative z-10">

<div className="min-w-[1rem] md:min-w-[calc((100vw-80rem)/2)]"></div>

<div className="min-w-[85vw] md:min-w-[420px] snap-center bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 group hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium border border-[#F4A91F]/30 text-[#F4A91F] px-3 py-1 rounded-full flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 7 Days
                        </span>
<div className="text-right">
<span className="text-sm text-white/50 line-through block leading-none mb-1">$3,000</span>
<span className="text-xl font-medium text-white block leading-none">$2,499</span>
</div>
</div>
<h3 className="font-['Playfair_Display'] text-2xl font-medium text-white tracking-tight mb-3 group-hover:text-[#F4A91F] transition-colors">Bali Spiritual Retreat</h3>
<p className="text-sm text-white/60 font-light mb-6 leading-relaxed line-clamp-3">Immerse yourself in the spiritual heart of Bali. Includes curated temple visits, daily yoga sessions overlooking rice terraces, and a stay in a luxury secluded villa.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs bg-white/5 px-2.5 py-1 rounded text-white/70">Villa Stay</span>
<span className="text-xs bg-white/5 px-2.5 py-1 rounded text-white/70">Wellness</span>
<span className="text-xs bg-white/5 px-2.5 py-1 rounded text-white/70">Guided</span>
</div>
</div>
<button className="w-full py-3.5 rounded-xl bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white hover:text-[#0B1F3A] transition-all duration-300">
                    Reserve Experience
                </button>
</div>

<div className="min-w-[85vw] md:min-w-[420px] snap-center bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 group hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium border border-[#F4A91F]/30 text-[#F4A91F] px-3 py-1 rounded-full flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 10 Days
                        </span>
<div className="text-right">
<span className="text-xl font-medium text-white block leading-none">$4,850</span>
</div>
</div>
<h3 className="font-['Playfair_Display'] text-2xl font-medium text-white tracking-tight mb-3 group-hover:text-[#F4A91F] transition-colors">Swiss Alps Odyssey</h3>
<p className="text-sm text-white/60 font-light mb-6 leading-relaxed line-clamp-3">Experience the pinnacle of alpine luxury. Journey via the Glacier Express, enjoy private ski instruction, and unwind in thermal baths surrounded by snow-capped peaks.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs bg-white/5 px-2.5 py-1 rounded text-white/70">First-Class Train</span>
<span className="text-xs bg-white/5 px-2.5 py-1 rounded text-white/70">Skiing</span>
<span className="text-xs bg-white/5 px-2.5 py-1 rounded text-white/70">Spa</span>
</div>
</div>
<button className="w-full py-3.5 rounded-xl bg-[#F4A91F] border border-[#F4A91F] text-[#0B1F3A] font-medium text-sm hover:bg-[#e09b1c] transition-all duration-300 shadow-lg shadow-[#F4A91F]/10">
                    Reserve Experience
                </button>
</div>

<div className="min-w-[85vw] md:min-w-[420px] snap-center bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 group hover:bg-white/[0.06] transition-all duration-500 flex flex-col justify-between">
<div>
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium border border-[#F4A91F]/30 text-[#F4A91F] px-3 py-1 rounded-full flex items-center gap-1.5">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 5 Days
                        </span>
<div className="text-right">
<span className="text-xl font-medium text-white block leading-none">$1,890</span>
</div>
</div>
<h3 className="font-['Playfair_Display'] text-2xl font-medium text-white tracking-tight mb-3 group-hover:text-[#F4A91F] transition-colors">Amalfi Coast Escape</h3>
<p className="text-sm text-white/60 font-light mb-6 leading-relaxed line-clamp-3">Sail along dramatic coastlines on a private yacht. Savour authentic limoncello tasting, explore hidden grottos, and dine cliffside in Positano.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="text-xs bg-white/5 px-2.5 py-1 rounded text-white/70">Private Yacht</span>
<span className="text-xs bg-white/5 px-2.5 py-1 rounded text-white/70">Culinary</span>
<span className="text-xs bg-white/5 px-2.5 py-1 rounded text-white/70">Coastal</span>
</div>
</div>
<button className="w-full py-3.5 rounded-xl bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white hover:text-[#0B1F3A] transition-all duration-300">
                    Reserve Experience
                </button>
</div>

<div className="min-w-[1rem] md:min-w-[calc((100vw-80rem)/2)]"></div>
</div>
</section>

<section className="py-24 bg-white" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#0B1F3A] font-medium tracking-tight mb-4">The Voyara Standard</h2>
<p className="text-gray-500 text-sm font-light">We redefine luxury travel by focusing on seamless execution, exclusive access, and unparalleled personalized service.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="flex flex-col items-center text-center reveal">
<div className="w-16 h-16 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:headphones-round-sound-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="font-medium text-lg text-[#0B1F3A] mb-2 tracking-tight">24/7 Concierge</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">Round-the-clock dedicated support ensuring your journey is completely seamless, anywhere in the world.</p>
</div>

<div className="flex flex-col items-center text-center reveal reveal-delay-1">
<div className="w-16 h-16 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-5">
<iconify-icon icon="solar:star-ring-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="font-medium text-lg text-[#0B1F3A] mb-2 tracking-tight">Curated Experiences</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">Handpicked accommodations and itineraries crafted by local experts to provide authentic immersion.</p>
</div>

<div className="flex flex-col items-center text-center reveal reveal-delay-2">
<div className="w-16 h-16 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-5">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="font-medium text-lg text-[#0B1F3A] mb-2 tracking-tight">Best Value</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">Premium experiences negotiated at exclusive rates, guaranteeing exceptional value without compromise.</p>
</div>

<div className="flex flex-col items-center text-center reveal reveal-delay-3">
<div className="w-16 h-16 rounded-full bg-[#0B1F3A]/5 text-[#0B1F3A] flex items-center justify-center mb-5">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h4 className="font-medium text-lg text-[#0B1F3A] mb-2 tracking-tight">Trusted Globaly</h4>
<p className="text-sm text-gray-500 font-light leading-relaxed">Join over 50,000 satisfied travelers who have entrusted their precious memories to Voyara.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#0B1F3A] font-medium tracking-tight mb-12 text-center reveal">Traveler Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 reveal">
<div className="flex gap-1 mb-4 text-[#F4A91F]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-600 text-sm font-light mb-6 italic leading-relaxed">"From the moment we booked until we landed back home, Voyara handled every single detail. The private tour in Kyoto was breathtaking and far beyond our expectations."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#0B1F3A] font-medium text-sm">EL</div>
<div>
<h5 className="text-sm font-medium text-[#0B1F3A]">Elena Rodriguez</h5>
<span className="text-xs text-gray-400">Traveled to Japan</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 reveal reveal-delay-1">
<div className="flex gap-1 mb-4 text-[#F4A91F]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-600 text-sm font-light mb-6 italic leading-relaxed">"The level of service is unmatched. When our flight was delayed, the 24/7 concierge rearranged our transfers and dinner reservations seamlessly. True luxury."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#0B1F3A] font-medium text-sm">MC</div>
<div>
<h5 className="text-sm font-medium text-[#0B1F3A]">Michael Chang</h5>
<span className="text-xs text-gray-400">Traveled to Italy</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 reveal reveal-delay-2">
<div className="flex gap-1 mb-4 text-[#F4A91F]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-gray-600 text-sm font-light mb-6 italic leading-relaxed">"We wanted a secluded honeymoon and Voyara delivered a Maldivian overwater villa that felt like our own private island. The curated sunset cruise was the highlight."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-[#0B1F3A] font-medium text-sm">SJ</div>
<div>
<h5 className="text-sm font-medium text-[#0B1F3A]">Sarah Jenkins</h5>
<span className="text-xs text-gray-400">Traveled to Maldives</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="absolute inset-0 bg-[#0B1F3A]/[0.02] transform -skew-y-3 origin-top-left pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10 reveal">
<iconify-icon className="text-[#F4A91F] mb-6" icon="solar:letter-linear" strokeWidth="1.5" width="40"></iconify-icon>
<h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#0B1F3A] font-medium tracking-tight mb-4">Inspire Your Next Escape</h2>
<p className="text-gray-500 text-sm font-light mb-8 max-w-lg mx-auto">Subscribe to our digital magazine for exclusive travel insights, early access to new packages, and hidden gem recommendations.</p>
<form className="max-w-md mx-auto flex items-center p-1.5 bg-white border border-gray-200 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-[#0B1F3A]/10 transition-all focus-within:border-gray-300">
<input className="flex-1 bg-transparent border-none focus:ring-0 px-4 text-sm outline-none text-gray-700 font-light placeholder-gray-400" placeholder="Enter your email address" required="" type="email"/>
<button className="bg-[#0B1F3A] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#1a2f4c] transition-colors shadow-md" type="submit">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-[#0B1F3A] text-white pt-20 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:pr-8">
<a className="font-['Playfair_Display'] text-2xl font-medium tracking-tighter text-white block mb-4" href="#">VOYARA</a>
<p className="text-sm text-white/50 font-light leading-relaxed mb-6">Curating extraordinary journeys for those who seek the exceptional. Your passport to the world's most refined experiences.</p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#F4A91F] hover:text-[#0B1F3A] transition-all" href="#">
<iconify-icon icon="solar:global-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#F4A91F] hover:text-[#0B1F3A] transition-all" href="#">
<iconify-icon icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-[#F4A91F] hover:text-[#0B1F3A] transition-all" href="#">
<iconify-icon icon="solar:pen-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h6 className="font-medium text-white mb-5 tracking-wide text-sm">Destinations</h6>
<ul className="space-y-3">
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">Europe</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">Asia Pacific</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">Americas</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">Middle East</a></li>
</ul>
</div>
<div>
<h6 className="font-medium text-white mb-5 tracking-wide text-sm">Company</h6>
<ul className="space-y-3">
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">About Us</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">Careers</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">Travel Journal</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">Contact</a></li>
</ul>
</div>
<div>
<h6 className="font-medium text-white mb-5 tracking-wide text-sm">Legal</h6>
<ul className="space-y-3">
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">Terms of Service</a></li>
<li><a className="text-sm text-white/50 hover:text-white transition-colors font-light" href="#">Cancellation Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/40 font-light">© 2023 Voyara Travel. All rights reserved.</p>
<div className="flex gap-4 text-xs text-white/40 font-light">
<span>Designed for wanderlust.</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
