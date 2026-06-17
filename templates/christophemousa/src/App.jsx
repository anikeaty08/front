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
      

<header className="fixed top-0 inset-x-0 z-50 bg-[#09090B]/80 backdrop-blur-md border-b border-zinc-800/50">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between text-sm">
<a className="text-lg font-medium text-zinc-50 tracking-tighter" href="/home">Christophe</a>
<nav className="flex gap-6 overflow-x-auto whitespace-nowrap scrollbar-hide font-medium text-zinc-400 gap-x-6 gap-y-6">
<a className="hover:text-zinc-50 transition-colors" href="#works">Works</a>
<a className="hover:text-zinc-50 transition-colors" href="#experience">Experience</a>
<a className="hover:text-zinc-50 transition-colors" href="#about">About</a>
</nav>
</div>
</header>
<main className="max-w-5xl mr-auto ml-auto pt-32 pr-6 pb-24 pl-6">

<header className="max-w-5xl mr-auto ml-auto pt-8 pr-0 pb-16 pl-0">
<h1 className="md:text-6xl leading-tight text-4xl font-medium text-white tracking-tight max-w-3xl mb-8">Crafting intuitive digital experiences with complex systems.</h1>
<p className="leading-relaxed md:text-lg text-lg font-normal text-slate-50/50 max-w-2xl mb-12">Product Designer specialising in human-centred interfaces, design systems and interaction. I bridge the gap between aesthetic vision and functional engineering to create scalable products.</p>
<div className="flex gap-x-4 gap-y-4 items-center">
<a className="inline-flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors text-sm font-medium text-black bg-white rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="/#works">
  Recent works
  <iconify-icon className="" height="16" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5', color: 'rgb(0, 0, 0)'}} width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-transparent border border-white/10 text-white/70 text-sm font-medium hover:bg-white/5 transition-colors" href="#contact">
            Contact
        </a>
</div>
</header>

<section className="pt-16" id="works">
<div className="space-y-32">

<article className="group">
<div className="flex flex-col md:flex-row md:items-baseline border-zinc-800 border-b mb-8 pb-4 space-y-3 justify-between">
<h3 className="text-2xl md:text-3xl tracking-tight font-medium text-zinc-50 flex items-center gap-3">
                        Dive
                        <a className="hover:text-zinc-50 transition-colors text-zinc-600" href="https://www.divenotes.co/">
<iconify-icon className="text-xl" height="20" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5', color: 'rgb(250, 250, 250)'}} width="20"></iconify-icon>
</a>
</h3>
<div className="flex gap-x-2 gap-y-2">
<span className="text-xs font-light text-white/40 bg-white/5 border-white/5 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Web platform</span>
<span className="text-xs font-light text-white/40 bg-white/5 border-white/5 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Music Tech</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12">

<div className="md:col-span-7 space-y-8">
<div className="flex flex-col gap-4">

<div className="aspect-[4/3] overflow-hidden group-hover:border-zinc-700 transition-colors flex flex-col bg-center bg-zinc-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc255b61-0048-4efb-b01a-aa2515dcb662_1600w.png)] bg-cover border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative gap-x-4 gap-y-4">
</div>
</div>
<div className="">
<h4 className="flex items-center gap-2 text-sm font-medium text-zinc-50 mb-2">
<iconify-icon icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Context &amp; Challenge
                            </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Modern music consumption is dominated by algorithmic feeds, leaving passionate listeners
                                without a space to share deep, thoughtful insights. The challenge was to create a
                                platform that encourages long-form writing and shapes music culture through human
                                curation rather than machine learning.
                            </p>
</div>
</div>

<div className="md:col-span-5 flex flex-col justify-between space-y-8">
<div className="">
<h4 className="text-sm font-medium text-zinc-50 mb-2 flex items-center gap-2">
<iconify-icon className="" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon> The Work
                            </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                I designed the core reading and writing experience, focusing on typography and
                                distraction-free interfaces. By building a structured yet expressive "Album Note"
                                editor, users interacted more deeply with content. The design prioritized content
                                hierarchy, making discovery feel organic and community-driven.
                            </p>
</div>
<div className="space-y-6">
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6">
<h4 className="uppercase text-xs font-medium text-zinc-500 tracking-wider mb-4">targets</h4>
<div className="grid grid-cols-2 gap-6">
<div className="">
<div className="text-2xl font-medium text-zinc-50 tracking-tight mb-1">1,000+</div>
<div className="leading-snug text-xs text-zinc-400">Monthly readers</div>
</div>
<div className="">
<div className="text-2xl font-medium text-zinc-50 tracking-tight mb-1">30%</div>
<div className="leading-snug text-xs text-zinc-400">returning visitors</div>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/5 hover:text-white transition-colors text-sm font-medium text-white/70 bg-transparent w-fit border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="/dive">
                                Learn more
                                <iconify-icon className="" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</article>

<article className="group">
<div className="flex flex-col md:flex-row md:items-baseline border-zinc-800 border-b mb-8 pb-4 space-y-3 justify-between">
<h3 className="md:text-3xl flex items-center gap-3 text-2xl font-medium text-zinc-50 tracking-tight">
                        Fairjungle
                        
                    </h3>
<div className="flex gap-x-2 gap-y-2">
<span className="text-xs font-light text-white/40 bg-white/5 border-white/5 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">SaaS Platform</span>
<span className="text-xs font-light text-white/40 bg-white/5 border-white/5 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">B2B Travel</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 gap-x-12 gap-y-12">
<div className="md:col-span-7 space-y-8">
<div className="flex flex-col gap-4">

<div className="aspect-[4/3] overflow-hidden group-hover:border-zinc-700 transition-colors flex flex-col bg-center bg-zinc-950 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6680fcbd-722e-422e-b7bd-fb5b5ef77fc6_1600w.jpg)] bg-cover border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative gap-x-4 gap-y-4">

</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-50 mb-2 flex items-center gap-2">
<iconify-icon className="" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Context &amp; Challenge
                            </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                The business travel industry, serving over 300 million travelers, relies on archaic,
                                non-sustainable software. Fairjungle aimed to transition this massive user base to a
                                tech-enabled, sustainable alternative, reinventing the management software from the
                                ground up.
                            </p>
</div>
</div>
<div className="md:col-span-5 flex flex-col justify-between space-y-8">
<div className="">
<h4 className="text-sm font-medium text-zinc-50 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon> The Work
                            </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                I led the redesign of the main booking dashboard and policy management tools. We
                                integrated real-time carbon tracking directly into the user's booking flow, creating
                                visual nudges that prioritized greener options without adding friction to the booking
                                speed. This mattered because it aligned corporate cost-saving with ecological
                                responsibility.
                            </p>
</div>
<div className="space-y-6">
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6">
<h4 className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-4">Impact &amp;
                                    Insights</h4>
<div className="grid grid-cols-2 gap-6">
<div className="">
<div className="text-2xl tracking-tight font-medium text-zinc-50 mb-1">3x</div>
<div className="text-xs text-zinc-400 leading-snug">Faster booking completion time for
                                            employees.</div>
</div>
<div className="">
<div className="text-2xl tracking-tight font-medium text-zinc-50 mb-1">-30%</div>
<div className="text-xs text-zinc-400 leading-snug">Average reduction in corporate
                                            travel carbon footprint.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</article>

<article className="group">
<div className="flex flex-col md:flex-row md:items-baseline border-zinc-800 border-b mb-8 pb-4 space-y-3 justify-between">
<h3 className="md:text-3xl flex items-center gap-3 text-2xl font-medium text-zinc-50 tracking-tight">Qiara</h3>
<div className="flex gap-x-2 gap-y-2">
<span className="text-xs font-light text-white/40 bg-white/5 border-white/5 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Smart Home</span>
<span className="text-xs font-light text-white/40 bg-white/5 border-white/5 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Connected Security</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 gap-x-12 gap-y-12">
<div className="md:col-span-7 space-y-8">
<div className="flex flex-col gap-4">

<div className="aspect-[4/3] overflow-hidden group-hover:border-zinc-700 transition-colors flex flex-col bg-center bg-zinc-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fbbda637-41c0-40eb-9a88-c944248b7e49_1600w.jpg)] bg-cover border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-50 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Context &amp; Challenge
                            </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Traditional home security systems are often expensive, complex to install, and invasive. Qiara aimed to disrupt this market by offering a smart, beautifully designed, and privacy-first alarm system. The challenge was to create an ecosystem that is truly accessible, empowering users to protect their homes effortlessly.
                            </p>
</div>
</div>
<div className="md:col-span-5 flex flex-col justify-between space-y-8">
<div className="">
<h4 className="text-sm font-medium text-zinc-50 mb-2 flex items-center gap-2">
<iconify-icon icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon> The Work
                            </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                I led the design of the end-to-end digital experience, including the intuitive mobile app to monitor the home and the seamless e-commerce platform. A key focus was designing the interface for the privacy-first camera shutter and ensuring the onboarding flow made the DIY installation foolproof and reassuring for all users.
                            </p>
</div>
<div className="space-y-6">
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6">
<h4 className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-4">Impact &amp;
                                    Insights</h4>
<div className="grid grid-cols-2 gap-6">
<div className="">
<div className="text-2xl tracking-tight font-medium text-zinc-50 mb-1">15 min</div>
<div className="text-xs text-zinc-400 leading-snug">Average time for users to fully install and activate.</div>
</div>
<div className="">
<div className="text-2xl tracking-tight font-medium text-zinc-50 mb-1">24/7</div>
<div className="text-xs text-zinc-400 leading-snug">Continuous protection with seamless mobile alerts.</div>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center gap-2 hover:bg-white/5 hover:text-white transition-colors text-sm font-medium text-white/70 bg-transparent w-fit border-white/10 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="/qiara" target="_blank">
                                Learn more
                                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</article><article className="group">
<div className="flex flex-col md:flex-row md:items-baseline border-zinc-800 border-b mb-8 pb-4 space-y-3 justify-between">
<h3 className="md:text-3xl flex items-center gap-3 text-2xl font-medium text-zinc-50 tracking-tight">
                        Virtuo
                        
                    </h3>
<div className="flex gap-x-2 gap-y-2">
<span className="text-xs font-light text-white/40 bg-white/5 border-white/5 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Car rental</span>
<span className="text-xs font-light text-white/40 bg-white/5 border-white/5 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">Apps</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 gap-x-12 gap-y-12">
<div className="md:col-span-7 space-y-8">
<div className="flex flex-col gap-4">

<div className="aspect-[4/3] overflow-hidden group-hover:border-zinc-700 transition-colors flex bg-center bg-zinc-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e3aa44e-44d5-44af-8513-4ec61df2674f_1600w.jpg)] bg-cover border-0 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative gap-x-6 gap-y-6 items-center justify-center">


</div>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-50 mb-2 flex items-center gap-2">
<iconify-icon className="" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Context &amp; Challenge
                            </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Renting a car typically involves queues, hassle, and paperwork. Virtuo wanted to make
                                escaping the city seamless, allowing users to book and unlock premium cars 24/7 using
                                only their phones. The challenge was building absolute trust in a completely human-less
                                physical interaction.
                            </p>
</div>
</div>
<div className="md:col-span-5 flex flex-col justify-between space-y-8">
<div className="">
<h4 className="flex items-center gap-2 text-sm font-medium text-zinc-50 mb-2">
<iconify-icon icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon> The Work
                            </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Designed the end-to-end "Digital Key" experience across iOS and Android. I focused
                                heavily on the Bluetooth unlocking interaction, employing haptic feedback and fluid
                                animations to assure users the car was communicating with their device. This eliminated
                                anxiety at the pick-up point and defined the brand's core magical moment.
                            </p>
</div>
<div className="space-y-6">
<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-6">
<h4 className="text-xs font-medium text-zinc-500 tracking-wider uppercase mb-4">Impact &amp;
                                    Insights</h4>
<div className="grid grid-cols-2 gap-6">
<div className="">
<div className="text-2xl tracking-tight font-medium text-zinc-50 mb-1">0</div>
<div className="text-xs text-zinc-400 leading-snug">Paperwork or physical keys required.
                                        </div>
</div>
<div className="">
<div className="text-2xl tracking-tight font-medium text-zinc-50 mb-1">4.9</div>
<div className="text-xs text-zinc-400 leading-snug">App Store rating maintained over 2
                                            years.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</article>

</div>
</section>

<section className="pt-16 border-t border-zinc-800/60 mt-24" id="experience">
<h2 className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-16">Experience</h2>
<div className="space-y-12">

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
<div className="md:col-span-3 text-sm font-medium text-zinc-500">2023 — Present</div>
<div className="md:col-span-9 space-y-3">
<h3 className="text-xl font-medium text-zinc-50 tracking-tight">Principal Product Designer <span className="text-zinc-500 font-normal">at</span> Fairjungle</h3>
<p className="leading-relaxed text-sm text-zinc-400 max-w-2xl">Led the design of the core enterprise platform. I established a new design system that increased design-to-development velocity by 40%. I collaborated closely with engineering and product leadership teams to launch key features.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pt-12 border-t border-zinc-800/50">
<div className="md:col-span-3 text-sm font-medium text-zinc-500">2022 — 2023</div>
<div className="md:col-span-9 space-y-3">
<h3 className="text-xl font-medium text-zinc-50 tracking-tight">Principal Product Designer <span className="text-zinc-500 font-normal">at</span> Qiara</h3>
<p className="leading-relaxed text-sm text-zinc-400 max-w-2xl">Owned the end-to-end mobile app design process: conducted user research, built prototypes, developed the design system, and delivered high-fidelity UI in collaboration with product and engineering teams.
Led the design of Qiara’s product ecosystem across physical and digital touchpoints, including brand identity, packaging, and the e-commerce website.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-zinc-800/50 border-t pt-12 gap-x-6 gap-y-6">
<div className="md:col-span-3 text-sm font-medium text-zinc-500">2017 — 2022</div>
<div className="md:col-span-9 space-y-3">
<h3 className="text-xl font-medium text-zinc-50 tracking-tight">Head of Product Design  <span className="text-zinc-500 font-normal">at</span> Virtuo</h3>
<p className="leading-relaxed text-sm text-zinc-400 max-w-2xl">Led design strategy and managed a multidisciplinary team of UX researchers and designers. Drove a user-centered, data-informed approach to product design, continuously improving digital experiences for simplicity and enjoyment.
Aligned design goals with product OKRs, championed rapid testing and iteration, and contributed to ideation and brand development as part of the company’s design thinking process. Ensured brand identity consistency and mentored designers to support their growth. Owned and maintained the design system.</p>
</div>
</div><div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-zinc-800/50 border-t pt-12 gap-x-6 gap-y-6">
<div className="md:col-span-3 text-sm font-medium text-zinc-500">2015 — 2017</div>
<div className="md:col-span-9 space-y-3">
<h3 className="text-xl font-medium text-zinc-50 tracking-tight">Lead Product Designer <span className="text-zinc-500 font-normal">at</span> Tapptic</h3>
<p className="leading-relaxed text-sm text-zinc-400 max-w-2xl">Led and mentored a team of product designers while shaping end-to-end design for a diverse portfolio of web and mobile projects. Drove a data-informed, user-centered design process—translating insights into concepts, wireframes, and high-impact digital experiences.
Facilitated team and client workshops, presenting design solutions that aligned stakeholder goals with measurable outcomes. Partnered closely with development teams to ensure design feasibility and successful delivery across products.</p>
</div>
</div><div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-zinc-800/50 border-t pt-12 gap-x-6 gap-y-6">
<div className="md:col-span-3 text-sm font-medium text-zinc-500">2013 — 2015</div>
<div className="md:col-span-9 space-y-3">
<h3 className="text-xl font-medium text-zinc-50 tracking-tight">Product Designer <span className="text-zinc-500 font-normal">at</span> Netco Sports</h3>
<p className="leading-relaxed text-sm text-zinc-400 max-w-2xl">Designed end-to-end digital experiences across mobile apps, using a user-centered approach to solve complex product challenges. Translated user insights and stakeholder discussions into concepts, wireframes, and polished UI designs.
Collaborated closely with cross-functional teams, including developers, to ensure design feasibility and successful product delivery.</p>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-12 border-t border-zinc-800/60 mt-24" id="about">
<h2 className="text-xs font-medium text-zinc-500 tracking-widest uppercase mb-16">About</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 gap-x-12 gap-y-12">
<div className="md:col-span-7 flex flex-col space-y-8 justify-center">
<h3 className="md:text-3xl leading-tight text-2xl font-medium text-zinc-50 tracking-tight">Product Designer driving data-driven, user-centered digital experiences aligned with business impact.</h3>
<div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
<p className="">With over 13 years in product design, I create clear, human-centered interfaces that connect user needs with business goals. I focus on crafting intuitive, elegant experiences backed by research, iteration, and collaboration. My work blends data-driven insight with thoughtful design systems to deliver products that feel effortless and true to the brand.</p>
<p className="">Projets:
Fairjungle (2025), Upway (2024), Qiara (2023), Virtuo App (2022), Virtuo Website (2022), Virtuo App Expert (2022), Virtuo Campaign advertising (2020), Track Town (2019), Chali (2019), Opéra de Paris (2017), 3ème Scène (2017), TV5 Monde (2017), 30 Millions d’Amis (2017), M6 (2017), Brussels Airlines (2017), D’ieteren (2017), Fortuneo (2017), Qobuz (2017), Talens Lyriques (2017), SeLoger (2016), Nomad Education (2016), We Love Football (2016), Hellotrip (2016), bpost (2016), EVS (2016), Festival de Cannes (2016), Fortuneo (2016), UEFA Euro 2016 (2016), SportFive (2015), AFC Asian Cup Australia (2015), FIFA World Cup 2014 (2014), beIN Sports (2014), Paris Saint Germain (2014), AS Monaco (2014), Stade de France (2014), Eurosport (2014), Canal+ (2014), Liverpool FC (2013), Ligue de Football Professionnel (2013), Fédération Française de Football (2013), Ligue Nationale de Rugby (2013), ESPN UK (2013), Longines (2013), Fédération Française d’Athlétisme (2013), SportPro (2013), RSC Anderlecht (2013), Racing Metro 92 (2013).</p>
</div>
<div className="pt-6">
<h4 className="text-xs font-medium text-zinc-50 uppercase tracking-widest mb-4">Core Capabilities</h4>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-medium text-zinc-400 bg-zinc-900 border-zinc-800 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3">Product Design</span>
<span className="text-xs font-medium text-zinc-400 bg-zinc-900 border-zinc-800 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3">Design Team Management</span>
<span className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">Design Systems</span>
<span className="px-3 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400">User Research</span>
<span className="text-xs font-medium text-zinc-400 bg-zinc-900 border-zinc-800 border rounded-md pt-1.5 pr-3 pb-1.5 pl-3">Design strategy</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/60 bg-[#09090B]">
<div className="flex flex-col md:flex-row gap-6 max-w-5xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="text-sm text-zinc-500">© 2026</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-zinc-50 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
