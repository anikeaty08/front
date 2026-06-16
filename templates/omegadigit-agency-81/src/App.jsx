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



        // Initialize Lucide icons
        lucide.createIcons();

        // Simple animation trigger for hero elements
        document.addEventListener("DOMContentLoaded", () => {
            const fadeInUpElements = document.querySelectorAll('.animate-\\[fadeInUp_1s_ease-out_forwards\\]');
            // Tailwind keyframes injected via style for the arbitrary values to work if CDN doesn't parse complex brackets perfectly in standard mode
            const style = document.createElement('style');
            style.textContent = `
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `;
            document.head.appendChild(style);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-[#2A2A2A]">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2 text-white font-semibold text-xl tracking-tight">
<i className="w-8 h-8 text-[#D7FF00]" data-lucide="infinity" strokeWidth="1.5"></i>
                OmegaDigital
            </div>
<nav className="hidden lg:flex items-center gap-8 text-base font-medium">
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
                    SEO Packages <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
                    Services <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
                    SEO Case Studies <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="group relative cursor-pointer flex items-center gap-1 hover:text-white transition-colors">
                    Tools <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<a className="hover:text-white transition-colors" href="#">Contact Us</a>
</nav>
<div className="flex items-center gap-6">
<button className="hidden lg:block text-[#A0A0A0] hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<a className="bg-[#D7FF00] text-black font-semibold text-base px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300" href="#">
                    GET IN TOUCH
                </a>
</div>
</div>
</header>

<section className="relative pt-40 pb-24 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D7FF00]/10 via-[#050505] to-[#050505] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="flex flex-col items-start gap-8 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
<h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                    Australia's Leading <span className="text-[#D7FF00]">SEO, AI/GEO, Content &amp; Digital PR</span> Agency
                </h1>
<p className="text-lg md:text-xl text-[#A0A0A0] max-w-xl leading-relaxed">
                    Our top tier SEO (Search Engine Optimisation), GEO, Content Marketing &amp; Digital PR services are exclusive with direct access to a 19 year SEO professional.
                </p>
<a className="bg-[#D7FF00] text-black font-semibold text-lg px-8 py-4 rounded-full hover:bg-white hover:scale-105 transition-all duration-300" href="#">
                    GET IN TOUCH
                </a>
</div>
<div className="relative opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]">
<img alt="Hero Illustration" className="w-full h-auto rounded-3xl border border-[#2A2A2A] shadow-2xl shadow-[#D7FF00]/5" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54cc64e0-5ec5-4ed3-92da-ce7f0e7a8544_1600w.webp"/>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

<div className="group bg-[#111111] border border-[#2A2A2A] rounded-3xl p-10 hover:border-[#D7FF00] hover:-translate-y-2 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#050505] border border-[#2A2A2A] flex items-center justify-center mb-8 group-hover:border-[#D7FF00] transition-colors">
<i className="w-8 h-8 text-white group-hover:text-[#D7FF00] transition-colors" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<h3 className="text-white text-2xl font-semibold tracking-tight mb-4">SEO &amp; Inbound Marketing</h3>
<p className="text-lg leading-relaxed text-[#A0A0A0]">
                    Omega Digital specialise in search engine optimisation services (SEO) to improve our client's online visibility on major search engines like Google and Bing. We are an exclusive digital marketing agency meaning, we do not work with our client's online competitors.
                </p>
</div>

<div className="group bg-[#111111] border border-[#2A2A2A] rounded-3xl p-10 hover:border-[#D7FF00] hover:-translate-y-2 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#050505] border border-[#2A2A2A] flex items-center justify-center mb-8 group-hover:border-[#D7FF00] transition-colors">
<i className="w-8 h-8 text-white group-hover:text-[#D7FF00] transition-colors" data-lucide="megaphone" strokeWidth="1.5"></i>
</div>
<h3 className="text-white text-2xl font-semibold tracking-tight mb-4">Content Marketing</h3>
<p className="text-lg leading-relaxed text-[#A0A0A0]">
                    Building online communities with your audience is vital and developing content marketing strategies that effectively engage with your customers is paramount to build brand awareness, equity and trust with your potential customers.
                </p>
</div>

<div className="group bg-[#111111] border border-[#2A2A2A] rounded-3xl p-10 hover:border-[#D7FF00] hover:-translate-y-2 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#050505] border border-[#2A2A2A] flex items-center justify-center mb-8 group-hover:border-[#D7FF00] transition-colors">
<i className="w-8 h-8 text-white group-hover:text-[#D7FF00] transition-colors" data-lucide="share-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-white text-2xl font-semibold tracking-tight mb-4">Digital PR</h3>
<p className="text-lg leading-relaxed text-[#A0A0A0]">
                    To create great content means to build a community, not just a list of customers. A great content marketing strategy involves creating compelling stories that empower, inspire, and engage with your target audience. Content marketing is a voice in a loud and disruptive world. Make it great!
                </p>
</div>
</div>
</section>

<section className="py-24 bg-[#111111] border-y border-[#2A2A2A]">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="flex justify-center items-center gap-12 mb-12">
<div className="text-center">
<img alt="Andrew Glyntzos" className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-[#2A2A2A] object-cover" src="https://placehold.co/150x150/050505/A0A0A0?text=AG"/>
<p className="text-base text-[#A0A0A0]">Andrew Glyntzos // 16+ Year SEO professional</p>
</div>
<div className="hidden md:block w-px h-24 bg-[#2A2A2A]"></div>
<div className="text-center">
<img alt="Darren Fort" className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-[#2A2A2A] object-cover" src="https://placehold.co/150x150/050505/A0A0A0?text=DF"/>
<p className="text-base text-[#A0A0A0]">Darren Forti // Business Development Manager</p>
</div>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-tight mb-8">
                SEO is a great way to increase your online brand awareness. But it is also a tool to build connections with your target market, build brand awareness &amp; increase sales.
            </h2>
<div className="w-16 h-1 bg-[#D7FF00] mx-auto mb-8"></div>
<p className="text-lg font-medium text-[#A0A0A0] tracking-widest uppercase">WE'RE A TALENTED TEAM, READY TO GROW YOUR BUSINESS.</p>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#D7FF00] transition-colors">
<i className="w-10 h-10 text-white mb-4" data-lucide="cloud-rain" strokeWidth="1.5"></i>
<h4 className="text-lg font-semibold text-white">Customer First</h4>
</div>
<div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#D7FF00] transition-colors">
<i className="w-10 h-10 text-white mb-4" data-lucide="bar-chart" strokeWidth="1.5"></i>
<h4 className="text-lg font-semibold text-white">Results Driven</h4>
</div>
<div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#D7FF00] transition-colors">
<i className="w-10 h-10 text-white mb-4" data-lucide="target" strokeWidth="1.5"></i>
<h4 className="text-lg font-semibold text-white">Revenue Focused</h4>
</div>
<div className="bg-[#111111] border border-[#2A2A2A] rounded-2xl p-8 flex flex-col items-center text-center hover:border-[#D7FF00] transition-colors">
<i className="w-10 h-10 text-white mb-4" data-lucide="thumbs-up" strokeWidth="1.5"></i>
<h4 className="text-lg font-semibold text-white">Happy Clients</h4>
</div>
</div>
</section>

<section className="py-32 bg-[#111111] relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[#D7FF00]/5 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-12 leading-tight">
                    Please fill out this form and let's discuss how we can help your business.
                </h2>
<img alt="Rocket Illustration" className="lg:mx-0 opacity-80 mix-blend-screen w-full max-w-md mr-auto ml-auto scale-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/398c9da4-774c-4d3d-accd-4b981d80f099_1600w.jpg"/>
</div>
<div className="bg-[#050505] border border-[#2A2A2A] rounded-3xl p-10 lg:p-12 shadow-2xl">
<h3 className="text-3xl font-semibold tracking-tight text-white mb-8">How Can We Help You?</h3>
<form className="space-y-6">
<div className="">
<input className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-6 py-4 text-white text-lg placeholder-[#A0A0A0] focus:outline-none focus:border-[#D7FF00] transition-colors" placeholder="Your Full Name" type="text"/>
</div>
<div>
<input className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-6 py-4 text-white text-lg placeholder-[#A0A0A0] focus:outline-none focus:border-[#D7FF00] transition-colors" placeholder="Email Address" type="email"/>
</div>
<div>
<input className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-6 py-4 text-white text-lg placeholder-[#A0A0A0] focus:outline-none focus:border-[#D7FF00] transition-colors" placeholder="Your Website URL" type="url"/>
</div>
<div>
<input className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-6 py-4 text-white text-lg placeholder-[#A0A0A0] focus:outline-none focus:border-[#D7FF00] transition-colors" placeholder="Phone Number" type="tel"/>
</div>
<div>
<textarea className="w-full bg-[#111111] border border-[#2A2A2A] rounded-xl px-6 py-4 text-white text-lg placeholder-[#A0A0A0] focus:outline-none focus:border-[#D7FF00] transition-colors resize-none" placeholder="How Can We Help You?" rows="4"></textarea>
</div>
<button className="w-full bg-[#D7FF00] text-black font-semibold text-lg py-4 rounded-xl hover:bg-white transition-colors flex justify-center items-center gap-2" type="submit">
                        Let's Chat <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
</form>
</div>
</div>
</section>

<section className="py-32 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">Our Key Specialisms</h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-center">

<div className="space-y-16 text-right order-2 lg:order-1">
<div className="relative pr-8 lg:pr-12">
<div className="absolute right-0 top-2 w-3 h-3 bg-[#D7FF00] rounded-full shadow-[0_0_15px_rgba(215,255,0,0.5)]"></div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Content Marketing</h3>
<p className="text-lg text-[#A0A0A0] leading-relaxed">We have an exceptional content creation team ready to deliver amazing content that is tailored for your target audience.</p>
</div>
<div className="relative pr-8 lg:pr-12">
<div className="absolute right-0 top-2 w-3 h-3 bg-[#D7FF00] rounded-full shadow-[0_0_15px_rgba(215,255,0,0.5)]"></div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Social Media Marketing</h3>
<p className="text-lg text-[#A0A0A0] leading-relaxed">Omega Digital understands people, and this is vital to create an effective social media strategy for our clients.</p>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center">
<img alt="Rocket" className="w-full max-w-sm mix-blend-screen opacity-90" src="https://placehold.co/400x600/111111/D7FF00?text=Specialism+Rocket"/>
</div>

<div className="space-y-16 text-left order-3">
<div className="relative pl-8 lg:pl-12">
<div className="absolute left-0 top-2 w-3 h-3 bg-[#D7FF00] rounded-full shadow-[0_0_15px_rgba(215,255,0,0.5)]"></div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Digital PR, Link Building &amp; Acquisition</h3>
<p className="text-lg text-[#A0A0A0] leading-relaxed">Link building is an absolutely essential SEO service that is required to build your domain authority. A website without links is like trying to win Bathurst 1000 without petrol.</p>
</div>
<div className="relative pl-8 lg:pl-12">
<div className="absolute left-0 top-2 w-3 h-3 bg-[#D7FF00] rounded-full shadow-[0_0_15px_rgba(215,255,0,0.5)]"></div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-4">Technical On-page Optimisation</h3>
<p className="text-lg text-[#A0A0A0] leading-relaxed">We provide high quality On-page Optimisation to ensure your website is meeting its technical obligations based on what matters most to your customers.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#111111] border-y border-[#2A2A2A]">
<div className="max-w-7xl mx-auto px-6 text-center mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Latest SEO Case Studies</h2>
<p className="text-lg text-[#A0A0A0] max-w-2xl mx-auto">We are continually adding our latest SEO case studies to our website. Click one below to read more.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

<div className="group bg-[#050505] border border-[#2A2A2A] rounded-3xl overflow-hidden hover:border-[#D7FF00] transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden bg-[#111111]">
<span className="absolute top-4 right-4 bg-[#050505]/80 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full border border-[#2A2A2A] z-10">CASE STUDY</span>
<img alt="All Mower Spares Case Study" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70" src="https://placehold.co/600x400/222/D7FF00?text=Chart"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-xl font-semibold text-white tracking-tight mb-4">All Mower Spares – SEO Case Study &amp; 5 Star Testimonial</h3>
<p className="text-base text-[#A0A0A0] mb-8 flex-grow">BACKGROUND All Mower Spares is Australia's largest online Lawn Mower, Small Engine &amp; Outdoor Power Parts store. Brett contacted Omega Digital (formally APG Web Studios)</p>
<a className="text-[#D7FF00] font-semibold text-base flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider" href="#">
                        READ MORE <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="2"></i>
</a>
</div>
</div>

<div className="group bg-[#050505] border border-[#2A2A2A] rounded-3xl overflow-hidden hover:border-[#D7FF00] transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden bg-[#111111]">
<span className="absolute top-4 right-4 bg-[#050505]/80 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full border border-[#2A2A2A] z-10">CASE STUDY</span>
<img alt="Top 20 SEO Reviews" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70" src="https://placehold.co/600x400/222/D7FF00?text=Review"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-xl font-semibold text-white tracking-tight mb-4">🌟 Celebrating Our Clients' Success: Top 20 SEO Reviews for Omega Digital</h3>
<p className="text-base text-[#A0A0A0] mb-8 flex-grow">At Omega Digital, we take immense pride in delivering exceptional SEO services that drive tangible results. Our clients' feedback is a testament to our commitment</p>
<a className="text-[#D7FF00] font-semibold text-base flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider" href="#">
                        READ MORE <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="2"></i>
</a>
</div>
</div>

<div className="group bg-[#050505] border border-[#2A2A2A] rounded-3xl overflow-hidden hover:border-[#D7FF00] transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden bg-[#111111] flex items-center justify-center">
<span className="absolute top-4 right-4 bg-[#050505]/80 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full border border-[#2A2A2A] z-10">CASE STUDY</span>
<img alt="Larsen Jewellery" className="w-32 h-auto opacity-70 group-hover:scale-110 transition-transform duration-500" src="https://placehold.co/400x400/222/FFF?text=LARSEN"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-xl font-semibold text-white tracking-tight mb-4">First Place for ENGAGEMENT RINGS case study (Larsen Jewellery)</h3>
<p className="text-base text-[#A0A0A0] mb-8 flex-grow">At Larsen Jewellery online enquiries is by far our most important source of enquiries. Unlike normal retail shops, we don't get any passing trade so</p>
<a className="text-[#D7FF00] font-semibold text-base flex items-center gap-2 hover:text-white transition-colors uppercase tracking-wider" href="#">
                        READ MORE <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="2"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
<div className="p-8 bg-[#111111] rounded-3xl border border-[#2A2A2A] flex flex-col">
<i className="w-8 h-8 text-[#D7FF00] mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-white mb-8 flex-grow leading-relaxed">Working with Andrew has been an absolute privilege, both professionally and personally. His expertise in SEO is unparalleled—his attention to detail, strategic insights, and dedication to results set him apart in the industry.</p>
<div className="flex items-center gap-4">
<img alt="Andy Jovanovic" className="w-12 h-12 rounded-full border border-[#2A2A2A]" src="https://placehold.co/100x100/050505/A0A0A0?text=AJ"/>
<div>
<h4 className="text-white font-medium text-base">Andy Jovanovic</h4>
<p className="text-sm text-[#A0A0A0]">COO at Workwearhub</p>
</div>
</div>
</div>
<div className="p-8 bg-[#111111] rounded-3xl border border-[#2A2A2A] flex flex-col">
<i className="w-8 h-8 text-[#D7FF00] mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-white mb-8 flex-grow leading-relaxed">Andrew is a SEO and digital GURU who's a genuinely great guy to work with. His knowledge of SEO is next level and he really knows what works best. Truly passionate about everything digital and really interesting to chat with and learn from!"</p>
<div className="flex items-center gap-4">
<img alt="George Graham" className="w-12 h-12 rounded-full border border-[#2A2A2A]" src="https://placehold.co/100x100/050505/A0A0A0?text=GG"/>
<div>
<h4 className="text-white font-medium text-base">George Graham</h4>
<p className="text-sm text-[#A0A0A0]">Healthcare Australia</p>
</div>
</div>
</div>
<div className="p-8 bg-[#111111] rounded-3xl border border-[#2A2A2A] flex flex-col">
<i className="w-8 h-8 text-[#D7FF00] mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-white mb-8 flex-grow leading-relaxed">To say Andrew is good at his job, is to say that Michelangelo was just a painter. Andrew is a visionary, with technical bravado and actually cares about clients getting results, being dynamic and embracing both the clients need, the best objectives of the business. Andrew will go over and above the call of duty every single time. You won't regret talking to Andrew, you will regret not</p>
<div className="flex items-center gap-4">
<img alt="Daniel Anania" className="w-12 h-12 rounded-full border border-[#2A2A2A]" src="https://placehold.co/100x100/050505/A0A0A0?text=DA"/>
<div>
<h4 className="text-white font-medium text-base">Daniel Anania</h4>
<p className="text-sm text-[#A0A0A0]">Director of Anania Jewellers</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#111111] border-y border-[#2A2A2A]">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-center text-2xl font-semibold text-white tracking-tight mb-10">Our Team Have Worked With The Best</h3>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="text-2xl font-bold text-white tracking-tighter">BING LEE</div>
<div className="text-xl font-bold text-white">United Rentals</div>
<div className="text-xl font-bold text-white">Kennards Self Storage</div>
<div className="text-xl font-medium text-white tracking-widest uppercase">CULLEN</div>
<div className="text-xl font-bold text-white">LARSEN</div>
<div className="text-3xl font-semibold text-white tracking-tighter">Chief.</div>
<div className="text-xl font-bold text-white">HCA</div>
<div className="text-xl font-bold text-white bg-[#2A2A2A] px-2 py-1 rounded">workwearhub</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
<div className="p-8 bg-[#111111] rounded-3xl border border-[#2A2A2A] flex flex-col">
<i className="w-8 h-8 text-[#D7FF00] mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-white mb-8 flex-grow leading-relaxed">Andrew is beyond a doubt a leader in the field of digital marketing...My business has had exceptional solid growth and I feel Andrew and his unique passion for marketing has been a huge part of my company's successes.</p>
<div className="flex items-center gap-4">
<img alt="Maria &amp; Danny Kelly" className="w-12 h-12 rounded-full border border-[#2A2A2A]" src="https://placehold.co/100x100/050505/A0A0A0?text=MK"/>
<div>
<h4 className="text-white font-medium text-base">Maria &amp; Danny Kelly</h4>
<p className="text-sm text-[#A0A0A0]">CEO at Pest-Ex Philippines</p>
</div>
</div>
</div>
<div className="p-8 bg-[#111111] rounded-3xl border border-[#2A2A2A] flex flex-col">
<i className="w-8 h-8 text-[#D7FF00] mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-white mb-8 flex-grow leading-relaxed">Working with Omega Digital Marketing we have seen great results for our brands online. Andrew is a pleasure to work with and highly experienced at what he does.</p>
<div className="flex items-center gap-4">
<img alt="Kerrie Dedes" className="w-12 h-12 rounded-full border border-[#2A2A2A]" src="https://placehold.co/100x100/050505/A0A0A0?text=KD"/>
<div>
<h4 className="text-white font-medium text-base">Kerrie Dedes</h4>
<p className="text-sm text-[#A0A0A0]">Director Dedes Group</p>
</div>
</div>
</div>
<div className="p-8 bg-[#111111] rounded-3xl border border-[#2A2A2A] flex flex-col">
<i className="w-8 h-8 text-[#D7FF00] mb-6 opacity-50" data-lucide="quote" strokeWidth="1.5"></i>
<p className="text-lg text-white mb-8 flex-grow leading-relaxed">We have worked with Andrew for many years and cannot recommend him more highly. He is incredibly knowledgeable when it comes to SEO and gets the results. If you are looking for an SEO expert to take your SEO to the next level, you should give him a call.</p>
<div className="flex items-center gap-4">
<img alt="Lars Larsen" className="w-12 h-12 rounded-full border border-[#2A2A2A]" src="https://placehold.co/100x100/050505/A0A0A0?text=LL"/>
<div>
<h4 className="text-white font-medium text-base">Lars Larsen</h4>
<p className="text-sm text-[#A0A0A0]">Managing Director</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#050505] border-t border-[#2A2A2A] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 mb-16">
<div>
<h4 className="text-white text-xl font-semibold tracking-tight mb-8">Quick Links</h4>
<ul className="space-y-4 text-base">
<li><a className="hover:text-[#D7FF00] transition-colors" href="#">SEO Packages</a></li>
<li><a className="hover:text-[#D7FF00] transition-colors" href="#">Content Marketing Services</a></li>
<li><a className="hover:text-[#D7FF00] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#D7FF00] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#D7FF00] transition-colors" href="#">Contact Us – Lets Talk</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xl font-semibold tracking-tight mb-8">Recent Posts</h4>
<ul className="space-y-6 text-base">
<li>
<a className="hover:text-[#D7FF00] transition-colors block" href="#">Jewellery SEO — Ultimate Guide</a>
<span className="text-sm text-[#A0A0A0]/60 mt-1 block">May 19, 2026</span>
</li>
<li>
<a className="hover:text-[#D7FF00] transition-colors block" href="#">Top 3 Best SEO Agencies in Sydney 2026</a>
<span className="text-sm text-[#A0A0A0]/60 mt-1 block">April 30, 2026</span>
</li>
<li>
<a className="hover:text-[#D7FF00] transition-colors block" href="#">10 Reasons Why SEO Fails in 2026 + Bonus</a>
<span className="text-sm text-[#A0A0A0]/60 mt-1 block">April 21, 2026</span>
</li>
<li>
<a className="hover:text-[#D7FF00] transition-colors block flex items-start gap-2" href="#">
<i className="w-4 h-4 mt-1 flex-shrink-0" data-lucide="pen-tool" strokeWidth="1.5"></i>
                            SEO Migration Checklist (2026 Edition): Preserve Rankings, Traffic &amp; Revenue
                        </a>
<span className="text-sm text-[#A0A0A0]/60 mt-1 block ml-6">April 13, 2026</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xl font-semibold tracking-tight mb-8">Locations</h4>
<div className="space-y-4 text-base">
<p className="leading-relaxed">(International Tower One) Level 35,<br/>100 Barangaroo Avenue, Sydney<br/>NSW 2000</p>
<p>Phone: <a className="text-white hover:text-[#D7FF00] transition-colors" href="tel:0410709839">0410 709 839</a></p>
<p>Email: <a className="text-[#D7FF00] hover:text-white transition-colors" href="mailto:hello@omegadigtial.com.au">hello@omegadigtial.com.au</a></p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-[#A0A0A0] flex flex-col gap-2">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="copyright" strokeWidth="1.5"></i>
<span>Copyright 2026 – OMEGAX PTY LTD trading as OMEGA DIGITAL | ACN: 660 244 762</span>
</div>
<div className="flex flex-wrap gap-x-2 gap-y-1">
<a className="hover:text-white transition-colors" href="#">SEO Sydney</a> | 
                    <a className="hover:text-white transition-colors" href="#">SEO SERVICES SYDNEY</a> | 
                    <a className="hover:text-white transition-colors" href="#">Ultimate Jewellery SEO Guide</a> | 
                    <a className="hover:text-white transition-colors" href="#">SEO for Jewellers</a> | 
                    <a className="hover:text-white transition-colors" href="#">SEO Campbelltown</a> | 
                    <a className="hover:text-white transition-colors" href="#">SEO Packages Sydney</a>
<a className="hover:text-[#D7FF00] transition-colors ml-2" href="#">Privacy Policy</a>
</div>
</div>
<div className="flex items-center gap-4 text-[#A0A0A0]">
<a className="hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="cloud" strokeWidth="1.5"></i></a>
<a className="hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
<a className="hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i></a>
<a className="hover:text-white hover:scale-110 transition-all" href="#"><i className="w-5 h-5" data-lucide="trello" strokeWidth="1.5"></i></a>
</div>
</div>

<button className="fixed bottom-8 right-8 w-12 h-12 bg-[#111111] border border-[#2A2A2A] rounded-full flex items-center justify-center text-white hover:border-[#D7FF00] hover:text-[#D7FF00] transition-all shadow-xl z-50" onclick="window.scrollTo(0,0)">
<i className="w-6 h-6" data-lucide="chevron-up" strokeWidth="2"></i>
</button>
</footer>


    </>
  );
}
