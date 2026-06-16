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
colors: {
cream: {
50: '#FDFCFB',
100: '#F9F8F6', // Main Bg
200: '#F0EFEA',
},
accent: {
DEFAULT: '#A39B8F', // Circle bg and text accent
dark: '#8A8276',
},
dark: '#1A1A1A',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // FAQ Accordion Logic
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const toggle = item.querySelector('.faq-toggle');
            const content = item.querySelector('.faq-content');
            const icon = item.querySelector('.icon');

            toggle.addEventListener('click', () => {
                // Close others
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.faq-content').classList.add('hidden');
                        otherItem.querySelector('.icon').style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle current
                content.classList.toggle('hidden');
                if (content.classList.contains('hidden')) {
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    icon.style.transform = 'rotate(45deg)'; // Transform plus to cross
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative z-50 w-full border-b border-black/5 bg-cream-100/80 backdrop-blur-md sticky top-0">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-24">

<div className="flex items-center gap-4 shrink-0">
<a className="text-3xl font-semibold tracking-tight text-dark" href="#">FORME</a>
<div className="flex flex-col border-l border-black/10 pl-4">
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase leading-tight">Custom</span>
<span className="text-xs font-medium tracking-widest text-gray-500 uppercase leading-tight">Closets</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 lg:gap-12">
<div className="relative group">
<button className="flex items-center gap-1.5 text-base font-medium text-dark/80 hover:text-dark transition-colors py-2">
                            Solutions <i className="w-4 h-4 opacity-50" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-lg border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
<div className="p-2 flex flex-col gap-1">
<a className="block px-4 py-2.5 text-base font-medium text-dark hover:bg-cream-50 rounded-lg transition-colors" href="#">Walk-in Closets</a>
<a className="block px-4 py-2.5 text-base font-medium text-dark hover:bg-cream-50 rounded-lg transition-colors" href="#">Reach-in Closets</a>
<a className="block px-4 py-2.5 text-base font-medium text-dark hover:bg-cream-50 rounded-lg transition-colors" href="#">Wardrobes</a>
</div>
</div>
</div>
<a className="text-base font-medium text-dark/80 hover:text-dark transition-colors py-2" href="#">Process</a>
<a className="text-base font-medium text-dark/80 hover:text-dark transition-colors py-2" href="#">Projects</a>
<a className="text-base font-medium text-dark/80 hover:text-dark transition-colors py-2" href="#">About</a>
<div className="relative group">
<button className="flex items-center gap-1.5 text-base font-medium text-dark/80 hover:text-dark transition-colors py-2">
                            Resources <i className="w-4 h-4 opacity-50" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white rounded-xl shadow-lg border border-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
<div className="p-2 flex flex-col gap-1">
<a className="block px-4 py-2.5 text-base font-medium text-dark hover:bg-cream-50 rounded-lg transition-colors" href="#">Blog</a>
<a className="block px-4 py-2.5 text-base font-medium text-dark hover:bg-cream-50 rounded-lg transition-colors" href="#">Material Guide</a>
<a className="block px-4 py-2.5 text-base font-medium text-dark hover:bg-cream-50 rounded-lg transition-colors" href="#">FAQ</a>
</div>
</div>
</div>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-3 bg-dark text-white rounded-full pl-6 pr-2 py-2 hover:bg-gray-800 transition-colors group" href="#">
<span className="text-base font-medium">Book a Free Design Call</span>
<div className="bg-white text-dark rounded-full p-2 group-hover:scale-105 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>
<button className="md:hidden p-2 text-dark" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-cream-100 border-b border-black/5 shadow-xl" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-4 text-lg font-medium text-dark border-b border-black/5" href="#">Solutions</a>
<a className="block px-3 py-4 text-lg font-medium text-dark border-b border-black/5" href="#">Process</a>
<a className="block px-3 py-4 text-lg font-medium text-dark border-b border-black/5" href="#">Projects</a>
<a className="block px-3 py-4 text-lg font-medium text-dark border-b border-black/5" href="#">About</a>
<a className="block px-3 py-4 text-lg font-medium text-dark border-b border-black/5" href="#">Resources</a>
<a className="flex items-center justify-between px-3 py-4 mt-4 bg-dark text-white rounded-2xl text-lg font-medium" href="#">
                    Book a Free Design Call
                    <i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</header>
<main>

<section className="relative pt-12 pb-32 overflow-hidden">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-5 flex flex-col items-start z-10">

<div className="flex gap-2 mb-8">
<div className="w-2 h-2 rounded-full bg-black/20"></div>
<div className="w-2 h-2 rounded-full bg-black/20"></div>
<div className="w-2 h-2 rounded-full bg-black/20"></div>
<div className="w-2 h-2 rounded-full bg-black/20"></div>
</div>
<h1 className="text-6xl sm:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[1.05] text-dark">
                            Closets,<br/>
<span className="text-accent">designed</span><br/>
                            around you.
                        </h1>
<p className="mt-8 text-xl text-dark/70 leading-relaxed max-w-md font-normal">
                            Custom closet design &amp; installation that fits your space, your style and the way you live.
                        </p>
<a className="mt-10 inline-flex items-center gap-4 bg-dark text-white rounded-full px-8 py-4 hover:bg-gray-800 transition-colors group" href="#">
<span className="text-lg font-medium">Start Your Custom Design</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<div className="mt-20 flex items-center gap-4 group cursor-pointer">
<div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center text-dark/50 group-hover:bg-black/5 transition-colors bg-black/5">
<i className="w-6 h-6" data-lucide="arrow-down-right" strokeWidth="1.5"></i>
</div>
<span className="text-base font-medium text-dark/50 uppercase tracking-widest w-20 leading-tight">Scroll to explore</span>
</div>
</div>

<div className="lg:col-span-7 relative w-full h-[500px] sm:h-[600px] lg:h-[750px] mt-12 lg:mt-0">
<div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[4rem] overflow-hidden shadow-2xl bg-gray-200">
<img alt="Luxury Custom Closet" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-black/5"></div>
</div>


<div className="hidden sm:flex absolute top-1/2 -left-32 -translate-y-1/2 w-64 h-64 bg-cream-100 rounded-full items-center justify-center z-10">

<div className="w-48 h-48 bg-accent rounded-full flex items-center justify-center text-center p-6 text-white shadow-xl">
<p className="text-lg font-medium leading-snug tracking-wide">Thoughtful<br/>design.<br/>Beautifully<br/>organized.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-20 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 -mt-24 sm:-mt-32 lg:-mt-24 mb-24">
<div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 p-8 sm:p-10 flex flex-wrap justify-between items-center gap-8 sm:gap-12 backdrop-blur-xl bg-white/90">
<div className="flex items-center gap-5">
<div className="text-dark">
<i className="w-8 h-8" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium leading-tight text-dark">Personalized<br/>Design</span>
</div>
<div className="hidden md:block w-px h-12 bg-black/5"></div>
<div className="flex items-center gap-5">
<div className="text-dark">
<i className="w-8 h-8" data-lucide="gem" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium leading-tight text-dark">Premium<br/>Materials</span>
</div>
<div className="hidden md:block w-px h-12 bg-black/5"></div>
<div className="flex items-center gap-5">
<div className="text-dark">
<i className="w-8 h-8" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium leading-tight text-dark">Expert<br/>Installation</span>
</div>
<div className="hidden lg:block w-px h-12 bg-black/5"></div>
<div className="flex items-center gap-5">
<div className="text-dark">
<i className="w-8 h-8" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium leading-tight text-dark">Made for<br/>You</span>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-dark leading-tight">
                            Your morning routine shouldn't start with a search party.
                        </h2>
<p className="mt-6 text-xl text-dark/70 leading-relaxed font-normal">
                            A cluttered space leads to a cluttered mind. We believe your closet should be an oasis of calm and organization, beautifully tailored to house your life effortlessly.
                        </p>
<div className="mt-10 space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 bg-cream-200 rounded-full p-1.5 text-accent">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg text-dark font-medium">Maximize every inch of awkward spaces.</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-cream-200 rounded-full p-1.5 text-accent">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg text-dark font-medium">Protect investments with proper storage.</p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-cream-200 rounded-full p-1.5 text-accent">
<i className="w-4 h-4" data-lucide="check" strokeWidth="2"></i>
</div>
<p className="text-lg text-dark font-medium">Elevate your home's value and aesthetic.</p>
</div>
</div>
</div>
<div className="relative h-[600px] rounded-3xl overflow-hidden bg-cream-100">
<img alt="Organized Details" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="py-32 bg-cream-100">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-dark">Spaces tailored to every need.</h2>
<p className="mt-4 text-xl text-dark/70 font-normal">From expansive master suites to efficient reach-ins, we engineer solutions for any footprint.</p>
</div>
<a className="inline-flex items-center gap-2 text-lg font-medium text-dark hover:text-accent transition-colors pb-1 border-b border-dark hover:border-accent" href="#">
                        View all solutions
                    </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group block" href="#">
<div className="relative h-[450px] rounded-3xl overflow-hidden bg-gray-200 mb-6">
<img alt="Walk-in Closets" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-2xl font-medium text-dark flex items-center justify-between">
                            Walk-in Closets
                            <i className="w-5 h-5 text-dark/50 group-hover:text-dark transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</h3>
<p className="mt-2 text-lg text-dark/60 font-normal">Spacious sanctuaries designed for comprehensive wardrobes.</p>
</a>

<a className="group block" href="#">
<div className="relative h-[450px] rounded-3xl overflow-hidden bg-gray-200 mb-6">
<img alt="Reach-in Closets" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-2xl font-medium text-dark flex items-center justify-between">
                            Reach-in Closets
                            <i className="w-5 h-5 text-dark/50 group-hover:text-dark transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</h3>
<p className="mt-2 text-lg text-dark/60 font-normal">Efficient layouts maximizing storage in compact areas.</p>
</a>

<a className="group block" href="#">
<div className="relative h-[450px] rounded-3xl overflow-hidden bg-gray-200 mb-6">
<img alt="Custom Wardrobes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="text-2xl font-medium text-dark flex items-center justify-between">
                            Custom Wardrobes
                            <i className="w-5 h-5 text-dark/50 group-hover:text-dark transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</h3>
<p className="mt-2 text-lg text-dark/60 font-normal">Freestanding or built-in furniture pieces of exceptional craft.</p>
</a>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-dark">From vision to reality.</h2>
<p className="mt-6 text-xl text-dark/70 font-normal">A seamless, collaborative journey ensuring your exact requirements are met with precision.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-black/10"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-cream-100 border-8 border-white rounded-full flex items-center justify-center text-2xl font-medium text-dark shadow-sm mb-6">
                                01
                            </div>
<h3 className="text-2xl font-medium text-dark mb-3">Consultation</h3>
<p className="text-lg text-dark/60 font-normal">We meet to understand your space, style preferences, and storage needs.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-cream-100 border-8 border-white rounded-full flex items-center justify-center text-2xl font-medium text-dark shadow-sm mb-6">
                                02
                            </div>
<h3 className="text-2xl font-medium text-dark mb-3">3D Design</h3>
<p className="text-lg text-dark/60 font-normal">Review detailed 3D renderings and material samples to visualize your space.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-cream-100 border-8 border-white rounded-full flex items-center justify-center text-2xl font-medium text-dark shadow-sm mb-6">
                                03
                            </div>
<h3 className="text-2xl font-medium text-dark mb-3">Craftsmanship</h3>
<p className="text-lg text-dark/60 font-normal">Your closet is manufactured using premium materials with exact tolerances.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-dark border-8 border-white rounded-full flex items-center justify-center text-2xl font-medium text-white shadow-sm mb-6">
                                04
                            </div>
<h3 className="text-2xl font-medium text-dark mb-3">Installation</h3>
<p className="text-lg text-dark/60 font-normal">Our expert team installs your new system flawlessly and leaves it ready to use.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#121212] text-white overflow-hidden">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative h-[500px] sm:h-[700px] rounded-[2rem] overflow-hidden">
<img alt="Wood Texture Detail" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/20"></div>

<div className="absolute top-12 right-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-[200px]">
<i className="w-6 h-6 text-white mb-3" data-lucide="sliders" strokeWidth="1.5"></i>
<h4 className="text-base font-medium text-white">Soft-close hardware</h4>
</div>
<div className="absolute bottom-12 left-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-[200px]">
<i className="w-6 h-6 text-white mb-3" data-lucide="lightbulb" strokeWidth="1.5"></i>
<h4 className="text-base font-medium text-white">Integrated LED lighting</h4>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">It's all in the<br/>unseen details.</h2>
<p className="mt-6 text-xl text-white/60 font-normal leading-relaxed">
                            A truly custom closet is defined by what you feel as much as what you see. From the solid thud of a soft-close drawer to the seamless integration of warm LED lighting, we source only the finest hardware and materials.
                        </p>
<div className="mt-12 space-y-8">
<div className="border-t border-white/10 pt-8">
<h3 className="text-2xl font-medium mb-2">Premium Wood Finishes</h3>
<p className="text-lg text-white/50 font-normal">Sustainably sourced veneers and high-pressure laminates that resist wear and maintain their beauty for decades.</p>
</div>
<div className="border-t border-white/10 pt-8">
<h3 className="text-2xl font-medium mb-2">Custom Accessories</h3>
<p className="text-lg text-white/50 font-normal">Velvet-lined jewelry trays, pull-out valets, tie racks, and perfectly angled shoe displays designed for your collection.</p>
</div>
</div>
<a className="mt-12 inline-flex items-center gap-3 bg-white text-dark rounded-full px-8 py-4 hover:bg-gray-200 transition-colors" href="#">
<span className="text-lg font-medium">Explore Materials</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-cream-100">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-dark">Recent Transformations</h2>
<p className="mt-4 text-xl text-dark/70 font-normal">A glimpse into spaces we've elevated.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="space-y-6">
<div className="relative rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Project" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<span className="bg-white text-dark px-6 py-3 rounded-full text-base font-medium">View Project</span>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Project" className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<span className="bg-white text-dark px-6 py-3 rounded-full text-base font-medium">View Project</span>
</div>
</div>
</div>
<div className="space-y-6 md:mt-12">
<div className="relative rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Project" className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1558211583-d26f610c1eb1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<span className="bg-white text-dark px-6 py-3 rounded-full text-base font-medium">View Project</span>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Project" className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<span className="bg-white text-dark px-6 py-3 rounded-full text-base font-medium">View Project</span>
</div>
</div>
</div>
<div className="space-y-6 lg:mt-24">
<div className="relative rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Project" className="w-full h-[350px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<span className="bg-white text-dark px-6 py-3 rounded-full text-base font-medium">View Project</span>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden group cursor-pointer">
<img alt="Project" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
<span className="bg-white text-dark px-6 py-3 rounded-full text-base font-medium">View Project</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-lg font-medium text-dark hover:text-accent transition-colors pb-1 border-b border-dark hover:border-accent" href="#">
                        View Complete Gallery
                    </a>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-dark">Loved by homeowners.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-cream-50 rounded-3xl p-10 border border-black/5">
<div className="flex gap-1 text-accent mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-xl text-dark leading-relaxed font-normal mb-8">"The design process was incredibly thoughtful. They managed to fit twice as much storage into my master closet while making it look like a high-end boutique."</p>
<div>
<p className="text-base font-medium text-dark">Sarah Jenkins</p>
<p className="text-base text-dark/50 font-normal">San Francisco, CA</p>
</div>
</div>

<div className="bg-cream-50 rounded-3xl p-10 border border-black/5">
<div className="flex gap-1 text-accent mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-xl text-dark leading-relaxed font-normal mb-8">"Impeccable craftsmanship. The installation team was professional, clean, and finished ahead of schedule. The soft-close drawers are a dream."</p>
<div>
<p className="text-base font-medium text-dark">Michael Chen</p>
<p className="text-base text-dark/50 font-normal">Austin, TX</p>
</div>
</div>

<div className="bg-cream-50 rounded-3xl p-10 border border-black/5">
<div className="flex gap-1 text-accent mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-xl text-dark leading-relaxed font-normal mb-8">"From the 3D renderings to the final reveal, Forme exceeded our expectations. It has completely changed how we start our mornings."</p>
<div>
<p className="text-base font-medium text-dark">Emma &amp; David L.</p>
<p className="text-base text-dark/50 font-normal">Denver, CO</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-cream-100 border-t border-black/5">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-dark">Common Questions</h2>
</div>
<div className="space-y-4">

<div className="border border-black/10 rounded-2xl bg-white overflow-hidden faq-item">
<button className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none faq-toggle">
<span className="text-xl font-medium text-dark">How long does the process take?</span>
<i className="w-6 h-6 text-dark/50 transition-transform duration-300 icon" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="px-8 pb-6 hidden faq-content">
<p className="text-lg text-dark/70 font-normal">From initial consultation to final installation, the process typically takes 4 to 6 weeks. This timeline ensures meticulous design, custom manufacturing, and quality control.</p>
</div>
</div>

<div className="border border-black/10 rounded-2xl bg-white overflow-hidden faq-item">
<button className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none faq-toggle">
<span className="text-xl font-medium text-dark">Do you offer warranties?</span>
<i className="w-6 h-6 text-dark/50 transition-transform duration-300 icon" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="px-8 pb-6 hidden faq-content">
<p className="text-lg text-dark/70 font-normal">Yes, we provide a lifetime warranty on all wood products and installation, ensuring your investment is protected for as long as you own your home.</p>
</div>
</div>

<div className="border border-black/10 rounded-2xl bg-white overflow-hidden faq-item">
<button className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none faq-toggle">
<span className="text-xl font-medium text-dark">Can you work with irregular shaped rooms?</span>
<i className="w-6 h-6 text-dark/50 transition-transform duration-300 icon" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="px-8 pb-6 hidden faq-content">
<p className="text-lg text-dark/70 font-normal">Absolutely. Our expertise lies in maximizing challenging spaces. Slanted ceilings, awkward corners, and tight alcoves are areas where custom design truly shines.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-dark text-white relative overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-5xl sm:text-6xl font-medium tracking-tight leading-tight">Ready to transform your space?</h2>
<p className="mt-6 text-xl text-white/60 font-normal">Book a complimentary design consultation today and take the first step towards a beautifully organized life.</p>
<div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-dark rounded-full px-8 py-4 hover:bg-gray-200 transition-colors group" href="#">
<span className="text-lg font-medium">Book a Free Design Call</span>
<div className="bg-dark text-white rounded-full p-1 group-hover:scale-105 transition-transform">
<i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</a>
<a className="w-full sm:w-auto flex items-center justify-center px-8 py-4 text-lg font-medium text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors" href="#">
                            Explore Pricing
                        </a>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white pt-24 pb-12 border-t border-black/5">
<div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

<div className="lg:col-span-4">
<div className="flex items-center gap-4 mb-6">
<span className="text-3xl font-semibold tracking-tight text-dark">FORME</span>
<div className="flex flex-col border-l border-black/10 pl-4">
<span className="text-[10px] font-medium tracking-widest text-gray-500 uppercase leading-tight">Custom</span>
<span className="text-[10px] font-medium tracking-widest text-gray-500 uppercase leading-tight">Closets</span>
</div>
</div>
<p className="text-lg text-dark/60 font-normal mb-8 max-w-sm">Designing and installing premium custom closet systems tailored to your exact lifestyle.</p>
<div className="flex gap-4 text-dark/40">
<a className="hover:text-dark transition-colors" href="#"><i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-dark transition-colors" href="#"><i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="hover:text-dark transition-colors" href="#"><i className="w-6 h-6" data-lucide="twitter" strokeWidth="1.5"></i></a>
</div>
</div>

<div className="lg:col-span-2 lg:col-start-7">
<h4 className="text-base font-medium text-dark mb-6">Solutions</h4>
<ul className="space-y-4">
<li><a className="text-base text-dark/60 hover:text-dark transition-colors font-normal" href="#">Walk-in Closets</a></li>
<li><a className="text-base text-dark/60 hover:text-dark transition-colors font-normal" href="#">Reach-in Closets</a></li>
<li><a className="text-base text-dark/60 hover:text-dark transition-colors font-normal" href="#">Wardrobes</a></li>
<li><a className="text-base text-dark/60 hover:text-dark transition-colors font-normal" href="#">Pantries</a></li>
<li><a className="text-base text-dark/60 hover:text-dark transition-colors font-normal" href="#">Home Office</a></li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-base font-medium text-dark mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-base text-dark/60 hover:text-dark transition-colors font-normal" href="#">About Us</a></li>
<li><a className="text-base text-dark/60 hover:text-dark transition-colors font-normal" href="#">Our Process</a></li>
<li><a className="text-base text-dark/60 hover:text-dark transition-colors font-normal" href="#">Gallery</a></li>
<li><a className="text-base text-dark/60 hover:text-dark transition-colors font-normal" href="#">Testimonials</a></li>
<li><a className="text-base text-dark/60 hover:text-dark transition-colors font-normal" href="#">Contact</a></li>
</ul>
</div>

<div className="lg:col-span-2">
<h4 className="text-base font-medium text-dark mb-6">Stay Updated</h4>
<p className="text-base text-dark/60 font-normal mb-4">Get design tips and inspiration delivered to your inbox.</p>
<form className="flex flex-col gap-3">
<input className="w-full px-4 py-3 rounded-xl border border-black/10 bg-cream-50 focus:outline-none focus:ring-2 focus:ring-dark/20 text-base" placeholder="Email address" required="" type="email"/>
<button className="w-full bg-dark text-white rounded-xl px-4 py-3 text-base font-medium hover:bg-gray-800 transition-colors" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-dark/40 font-normal">© 2024 Forme Custom Closets. All rights reserved.</p>
<div className="flex gap-6 text-sm text-dark/40 font-normal">
<a className="hover:text-dark transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-dark transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
