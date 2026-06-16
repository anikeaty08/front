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



        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Accordion Toggle Logic
        document.querySelectorAll('.accordion-toggle').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const iconPlus = button.querySelector('.icon-plus');
                const iconMinus = button.querySelector('.icon-minus');
                
                // Toggle current accordion
                content.classList.toggle('hidden');
                iconPlus.classList.toggle('hidden');
                iconMinus.classList.toggle('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2" href="#">
<span className="text-xl font-semibold tracking-tighter uppercase text-slate-900">ChloDox</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-emerald-500 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">About us</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Investment</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-slate-900 bg-emerald-400 rounded-full hover:bg-emerald-500 transition-colors" href="#">
                        More information
                    </a>
<button className="md:hidden text-slate-600 hover:text-slate-900" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-slate-100 px-4 py-6 shadow-xl" id="mobile-menu">
<nav className="flex flex-col gap-4">
<a className="text-sm font-medium text-emerald-500" href="#">Home</a>
<a className="text-sm font-medium text-slate-600" href="#">About us</a>
<a className="text-sm font-medium text-slate-600" href="#">Investment</a>
<a className="text-sm font-medium text-slate-600" href="#">Contact</a>
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-slate-900 bg-emerald-400 rounded-full mt-2" href="#">
                    More information
                </a>
</nav>
</div>
</header>
<main>

<section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
<div className="absolute inset-0 z-0 bg-slate-900">
<img alt="Clean nature" className="w-full h-full object-cover opacity-60 animate-subtle-zoom" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white leading-tight mb-6">
                    Turn Pollution Into Progress. Invest in Clean Water with CHLODOX.
                </h1>
<p className="text-base md:text-lg text-slate-200 mb-10 max-w-2xl leading-relaxed">
                    Every day, billions of people and animals suffer from polluted water and air. CHLODOX transforms this crisis into opportunity—through cutting-edge technology, real-world impact, and tokenized investment.
                </p>
<div className="flex flex-wrap justify-center gap-6 mb-12">
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Proven biotech
                    </div>
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        30+ countries
                    </div>
<div className="flex items-center gap-2 text-white text-sm font-medium">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Carbon credit certified
                    </div>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-900 bg-emerald-400 rounded-full hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-400/20" href="#">
                        Get in Touch
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all" href="#how-it-works">
                        How it works
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Our mission, your role</h2>
<div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed mb-8">
<p>At CHLODOX, our mission is clear: make clean water and air accessible to all — now and for future generations.</p>
<p>More than 2.5 billion people and countless animals still lack access to safe drinking water. This is not just a problem. It’s a crisis. But it’s one we can solve — together.</p>
<p>With your support, CHLODOX brings innovative water purification technologies to the places that need them most. We clean rivers, reduce disease, and restore ecosystems — while you benefit from real-world impact and tokenized returns.</p>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-emerald-400 rounded-full hover:bg-emerald-500 transition-colors" href="#">
                            Become a Supporter
                        </a>
</div>
<div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-100">
<img alt="Children with water" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-200">
<img alt="Livestock near water" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Support CHLODOX and make a difference</h2>
<div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed mb-8">
<p>Your support is invaluable to CHLODOX. Our world desperately needs change, and with your help we can create a cleaner future together. CHLODOX needs the resources to fight pollution and make clean water and air accessible to all.</p>
<p>But your involvement goes beyond just helping; it's an opportunity to grow together. By investing now in the CHLODOX TOKEN ($DIO), you are not only taking a stake in making the world a cleaner place, but you are also being rewarded for your efforts. Your contribution makes a direct impact, and you can benefit from the positive changes we make together.</p>
<p>Don't wait until it's too late! Together, we can transform the world while getting a return on your involvement. Find out how you can contribute to this important mission and reap the benefits that come with it.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">What is CHLODOX &amp; how does it work?</h2>
<div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed mb-8">
<p>CHLODOX is a breakthrough in water and air purification. It’s a proprietary chlorine dioxide solution — stable, safe, and up to 10x more effective than traditional chemicals. Even in high temperatures, it stays potent, non-toxic, and environmentally friendly.</p>
<p>Using our patented biotechnology, CHLODOX eliminates harmful contaminants at their source, creating cleaner, safer environments for communities, industries, and ecosystems worldwide.</p>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-emerald-400 rounded-full hover:bg-emerald-500 transition-colors" href="#">
                            Become a Supporter
                        </a>
</div>
<div className="relative rounded-3xl overflow-hidden aspect-video bg-slate-900 flex items-center justify-center group cursor-pointer">
<img alt="Video placeholder" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="relative w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center text-slate-900 pl-1 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-50 rounded-[3rem] mx-4 sm:mx-6 lg:mx-8 px-4 sm:px-8 lg:px-16 my-12">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 max-w-xl">We eliminate 99% of the following impurities</h2>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shrink-0" href="#">
                        Get in Touch
                    </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
<div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden">
<img alt="Impurity 1" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden">
<img alt="Impurity 2" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden">
<img alt="Impurity 3" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&amp;fit=crop&amp;q=80&amp;w=500"/>
</div>
<div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden">
<img alt="Impurity 4" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<p className="text-sm md:text-base text-slate-900 font-medium mb-6">Unlike outdated treatments, CHLODOX:</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
<iconify-icon className="text-emerald-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Remains active up to 74°C</span>
</li>
<li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
<iconify-icon className="text-emerald-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Contains no harmful byproducts</span>
</li>
<li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
<iconify-icon className="text-emerald-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Stays effective for 24+ months</span>
</li>
<li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
<iconify-icon className="text-emerald-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Is approved for human and animal use</span>
</li>
<li className="flex items-start gap-3 text-sm md:text-base text-slate-600">
<iconify-icon className="text-emerald-500 text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Generates verified carbon credits as it purifies</span>
</li>
</ul>
</div>
<div>
<div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed">
<p>CHLODOX is a breakthrough in water and air purification. It’s a proprietary chlorine dioxide solution — stable, safe, and up to 10x more effective than traditional chemicals. Even in high temperatures, it stays potent, non-toxic, and environmentally friendly.</p>
<p>Using our patented biotechnology, CHLODOX eliminates harmful contaminants at their source, creating cleaner, safer environments for communities, industries, and ecosystems worldwide.</p>
<p className="font-medium text-slate-900 mt-8">One solution. Multiple benefits. Global impact.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
<div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
<img alt="Impact 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
<img alt="Impact 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
<img alt="Impact 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
</div>
<div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
<img alt="Impact 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
</div>
</div>
<div className="text-center max-w-3xl mx-auto">
<h4 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900 mb-8">The $DIO token is your gateway to a greener world — and a smarter investment</h4>
<div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 sm:gap-8">
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Backed by real-world usage
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Drives global ESG impact
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Built on blockchain for security
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-4">
<div className="sticky top-32">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Projects</h2>
<p className="text-sm md:text-base text-slate-600 leading-relaxed">Discover where CHLODOX is currently being implemented globally to create sustainable change.</p>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

<div>
<div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-slate-200">
<img alt="Congo" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Republic of Congo</h3>
<p className="text-sm text-slate-600 leading-relaxed">Collaboration with government to develop national water treatment systems, with expected revenue of $761 million.</p>
</div>

<div>
<div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-slate-200">
<img alt="Ghana" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Ghana</h3>
<p className="text-sm text-slate-600 leading-relaxed">Collaboration with government and local water utilities to treat rivers and municipal water, with expected revenue of $149 million.</p>
</div>

<div>
<div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-slate-200">
<img alt="Nigeria" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Burkina Faso &amp; Nigeria</h3>
<p className="text-sm text-slate-600 leading-relaxed">In early discussions to implement water projects.</p>
</div>

<div>
<div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-slate-200">
<img alt="Pakistan" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Pakistan</h3>
<p className="text-sm text-slate-600 leading-relaxed">Implementation of water treatment systems, with a contract worth $129 million that focuses on municipal water and sewerage.</p>
</div>

<div>
<div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-slate-200">
<img alt="Europe" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Campsites in Europe</h3>
<p className="text-sm text-slate-600 leading-relaxed">A contract worth $28 million for water treatment.</p>
</div>

<div>
<div className="rounded-2xl overflow-hidden aspect-[4/3] mb-6 bg-slate-200">
<img alt="Maldives" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-3">Maldives</h3>
<p className="text-sm text-slate-600 leading-relaxed">Upgrades of municipal systems with expected revenue of $211 million, including commitment for hotels and islands to use CHLODOX products.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-4">
<div className="sticky top-32">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">The CHLODOX ecosystem &amp; token flow</h2>
<p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
                                CHLODOX issues the $DIO token to fund innovative, sustainable projects that address some of the world’s most pressing environmental challenges — from water and air purification to large-scale carbon reduction.
                            </p>
<p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                Every token purchase directly supports projects that generate verified carbon credits, improve ecosystems, and contribute to the UN Sustainable Development Goals (SDGs).
                            </p>
</div>
</div>
<div className="lg:col-span-8">
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

<div className="relative flex items-start gap-6 md:justify-center">
<div className="hidden md:block w-1/2 text-right pr-12 pt-3">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">1. Project Selection &amp; Approval</h3>
<p className="text-sm text-slate-600 leading-relaxed">Sustainable projects are carefully selected, reviewed, and certified to ensure they meet strict environmental and social criteria for CO₂ offsetting.</p>
</div>
<div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-semibold shadow-sm ring-4 ring-white shrink-0 z-10 md:mt-3">
                                    1
                                </div>
<div className="md:hidden pt-3 pb-8">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">1. Project Selection &amp; Approval</h3>
<p className="text-sm text-slate-600 leading-relaxed">Sustainable projects are carefully selected, reviewed, and certified to ensure they meet strict environmental and social criteria for CO₂ offsetting.</p>
</div>
<div className="hidden md:block w-1/2 pl-12 pt-3">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon className="text-2xl" icon="solar:document-add-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative flex items-start gap-6 md:justify-center">
<div className="hidden md:flex w-1/2 justify-end pr-12 pt-3">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon className="text-2xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
</div>
<div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-semibold shadow-sm ring-4 ring-white shrink-0 z-10 md:mt-3">
                                    2
                                </div>
<div className="w-full md:w-1/2 pt-3 pb-8 md:pl-12">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">2. Implementation &amp; Impact Measurement</h3>
<p className="text-sm text-slate-600 leading-relaxed">Approved projects are deployed in the real world — from cleaning rivers and purifying municipal water to reducing industrial emissions. All impact is independently monitored and verified.</p>
</div>
</div>

<div className="relative flex items-start gap-6 md:justify-center">
<div className="hidden md:block w-1/2 text-right pr-12 pt-3">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">3. Digital Registration</h3>
<p className="text-sm text-slate-600 leading-relaxed">The resulting CO₂ credits are recorded on the blockchain for transparency and converted into tokens, ensuring traceable and secure digital representation.</p>
</div>
<div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-semibold shadow-sm ring-4 ring-white shrink-0 z-10 md:mt-3">
                                    3
                                </div>
<div className="md:hidden pt-3 pb-8">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">3. Digital Registration</h3>
<p className="text-sm text-slate-600 leading-relaxed">The resulting CO₂ credits are recorded on the blockchain for transparency and converted into tokens, ensuring traceable and secure digital representation.</p>
</div>
<div className="hidden md:block w-1/2 pl-12 pt-3">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon className="text-2xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative flex items-start gap-6 md:justify-center">
<div className="hidden md:flex w-1/2 justify-end pr-12 pt-3">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon className="text-2xl" icon="solar:global-linear"></iconify-icon>
</div>
</div>
<div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-semibold shadow-sm ring-4 ring-white shrink-0 z-10 md:mt-3">
                                    4
                                </div>
<div className="w-full md:w-1/2 pt-3 pb-8 md:pl-12">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">4. Listing on the CHLODOX Platform</h3>
<p className="text-sm text-slate-600 leading-relaxed">Tokens and their associated environmental impact data are published on the CHLODOX platform, making them accessible to investors worldwide.</p>
</div>
</div>

<div className="relative flex items-start gap-6 md:justify-center">
<div className="hidden md:block w-1/2 text-right pr-12 pt-3">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">5. Investor Selection &amp; Purchase</h3>
<p className="text-sm text-slate-600 leading-relaxed">Investors browse available projects, assess their environmental and financial impact, and select the tokens they wish to purchase.</p>
</div>
<div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-semibold shadow-sm ring-4 ring-white shrink-0 z-10 md:mt-3">
                                    5
                                </div>
<div className="md:hidden pt-3 pb-8">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">5. Investor Selection &amp; Purchase</h3>
<p className="text-sm text-slate-600 leading-relaxed">Investors browse available projects, assess their environmental and financial impact, and select the tokens they wish to purchase.</p>
</div>
<div className="hidden md:block w-1/2 pl-12 pt-3">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative flex items-start gap-6 md:justify-center">
<div className="hidden md:flex w-1/2 justify-end pr-12 pt-3">
<div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
<iconify-icon className="text-2xl" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 font-semibold shadow-sm ring-4 ring-white shrink-0 z-10 md:mt-3">
                                    6
                                </div>
<div className="w-full md:w-1/2 pt-3 pb-8 md:pl-12">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">6. Smart Contract Settlement</h3>
<p className="text-sm text-slate-600 leading-relaxed">Smart contracts automatically execute the transaction, ensuring secure token transfer and immediate ownership confirmation for the buyer.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Results &amp; Global impact highlights</h2>
<p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        CHLODOX delivers measurable impact — not just promises.<br/>
                        Our innovative purification technology is already transforming lives, ecosystems, and economies worldwide.
                    </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">

<div className="space-y-4">
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
<button className="accordion-toggle w-full flex items-center px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors">
<div className="text-emerald-500 mr-4 shrink-0">
<iconify-icon className="icon-plus text-xl" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="icon-minus text-xl hidden" icon="solar:minus-circle-linear"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">Public Health Improvements</span>
</button>
<div className="accordion-content hidden px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed">
                                CHLODOX helps reduce waterborne disease outbreaks and related hospitalizations, especially in high-risk areas. Cleaner water contributes directly to longer life expectancy and improved wellbeing in communities with limited access to healthcare infrastructure.
                            </div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
<button className="accordion-toggle w-full flex items-center px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors">
<div className="text-emerald-500 mr-4 shrink-0">
<iconify-icon className="icon-plus text-xl" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="icon-minus text-xl hidden" icon="solar:minus-circle-linear"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">Access to Clean Drinking Water</span>
</button>
<div className="accordion-content hidden px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed">
                                Our solution provides safe, drinkable water to communities that previously lacked reliable access. CHLODOX plays a key role in preventing disease and supporting better health in regions affected by malaria, poor sanitation, and contaminated groundwater.
                            </div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
<button className="accordion-toggle w-full flex items-center px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors">
<div className="text-emerald-500 mr-4 shrink-0">
<iconify-icon className="icon-plus text-xl" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="icon-minus text-xl hidden" icon="solar:minus-circle-linear"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">Stronger Ecosystem</span>
</button>
<div className="accordion-content hidden px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed">
                                Clean water and air are critical to protecting biodiversity and reversing the effects of pollution. CHLODOX helps restore aquatic and surrounding environments, supporting flora and fauna through natural purification without ecological side effects.
                            </div>
</div>
</div>

<div className="space-y-4">
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
<button className="accordion-toggle w-full flex items-center px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors">
<div className="text-emerald-500 mr-4 shrink-0">
<iconify-icon className="icon-plus text-xl" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="icon-minus text-xl hidden" icon="solar:minus-circle-linear"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">Local Economic Growth</span>
</button>
<div className="accordion-content hidden px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed">
                                Healthier populations are more productive, and lower treatment costs allow for greater public investment. CHLODOX reduces infrastructure strain and enables up to 75% savings on long-term water purification, unlocking economic resilience locally.
                            </div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
<button className="accordion-toggle w-full flex items-center px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors">
<div className="text-emerald-500 mr-4 shrink-0">
<iconify-icon className="icon-plus text-xl" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="icon-minus text-xl hidden" icon="solar:minus-circle-linear"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">Climate Action</span>
</button>
<div className="accordion-content hidden px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed">
                                Clean water actively absorbs CO₂, while polluted water reflects heat. By reducing the need for firewood and coal in boiling water, CHLODOX cuts emissions and generates verified carbon credits per ton of treated water, boosting sustainable impact.
                            </div>
</div>
<div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
<button className="accordion-toggle w-full flex items-center px-6 py-5 text-left bg-white hover:bg-slate-50 transition-colors">
<div className="text-emerald-500 mr-4 shrink-0">
<iconify-icon className="icon-plus text-xl" icon="solar:add-circle-linear"></iconify-icon>
<iconify-icon className="icon-minus text-xl hidden" icon="solar:minus-circle-linear"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">Awareness &amp; Education</span>
</button>
<div className="accordion-content hidden px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed">
                                We provide community training focused on water management, sanitation and sustainability. CHLODOX empowers local leaders to build environmental awareness and long-term responsibility through education tailored to each region’s challenges.
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 overflow-hidden">
<div className="absolute inset-0 z-0 bg-slate-900">
<img alt="Nature landscape" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1503756234508-e32369269deb?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
</div>
<div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tighter text-white mb-6">
                    Impact You Can Measure.<br/>Change You Can Trust.
                </h2>
<p className="text-base md:text-lg text-slate-300 mb-10 leading-relaxed">
                    Over 3.5 Billion People at Risk by 2030 — CHLODOX is taking action today to secure tomorrow. Join us in creating a future where clean water, better health, and climate resilience are accessible to all. Be part of the solution.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-slate-900 bg-emerald-400 rounded-full hover:bg-emerald-500 transition-all" href="#">
                        More information
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all" href="#">
                        Get in Touch
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

<div className="lg:col-span-1">
<a className="inline-block mb-6" href="#">
<span className="text-xl font-semibold tracking-tighter uppercase text-slate-900">ChloDox</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        CHLODOX combats global water pollution using biotech, driving health, climate resilience, and sustainable economic growth.
                    </p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-emerald-500 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h6 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Quick Links</h6>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-emerald-500 transition-colors" href="#">Home</a></li>
<li><a className="text-sm text-slate-500 hover:text-emerald-500 transition-colors" href="#">About us</a></li>
<li><a className="text-sm text-slate-500 hover:text-emerald-500 transition-colors" href="#">Investment</a></li>
<li><a className="text-sm text-slate-500 hover:text-emerald-500 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h6 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Legal</h6>
<ul className="space-y-4">
<li><a className="text-sm text-slate-500 hover:text-emerald-500 transition-colors" href="#">Token Risk Disclosure</a></li>
<li><a className="text-sm text-slate-500 hover:text-emerald-500 transition-colors" href="#">Terms and Conditions</a></li>
<li><a className="text-sm text-slate-500 hover:text-emerald-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-500 hover:text-emerald-500 transition-colors" href="#">Whitepaper</a></li>
<li><a className="text-sm text-slate-500 hover:text-emerald-500 transition-colors" href="#">Litepaper</a></li>
</ul>
</div>

<div>
<h6 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Get In Touch</h6>
<ul className="space-y-4 mb-6">
<li>
<a className="flex items-center gap-3 text-sm text-slate-500 hover:text-emerald-500 transition-colors" href="mailto:info@chlodox.com">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                                info@chlodox.com
                            </a>
</li>
</ul>
<p className="text-sm text-slate-500 leading-relaxed flex items-start gap-3">
<iconify-icon className="text-lg shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
                        House Of Francis, Ile Du Port, Mahe, Seychelles
                    </p>
</div>
</div>
</div>
<div className="bg-emerald-400 py-4">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs font-medium text-slate-900">CHLODOX © 2026 All Rights Reserved</p>
</div>
</div>
</footer>



    </>
  );
}
