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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="md:px-12 flex sticky bg-white w-full z-50 border-gray-100 border-b pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<a className="block shrink-0" href="index.html">
<img alt="Rupert Evill" className="h-8 md:h-10 w-auto" src="https://rupertevill.com/wp-content/uploads/2025/11/icon.png"/>
</a>
<div className="hidden md:flex space-x-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
<a className="hover:text-ei-red transition-colors" href="#about">Profile</a>
<a className="hover:text-ei-red transition-colors font-black text-ei-purple" href="#media">Topics</a>
<a className="hover:text-ei-red transition-colors" href="#publications">Publications</a>
<a className="hover:text-ei-red transition-colors" href="#contact">Connect</a>
</div>
</nav>

<header className="forensic-gradient pt-24 pb-0 px-6 md:px-12 border-b border-gray-100 overflow-hidden">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 relative">
<div className="max-w-2xl pb-20">
<span className="inline-block py-1 px-3 bg-ei-red text-white font-bold text-[10px] tracking-[0.3em] uppercase mb-6">
                        Institutional Integrity Partner
                    </span>
<h1 className="text-6xl md:text-9xl font-black text-ei-purple leading-[0.9] mb-8">
                        Rupert <br className="hidden md:block"/> Evill.
                    </h1>
<p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed italic border-l-4 border-ei-green pl-6">
                        "Finds small leaks before they become expensive disasters." — Forensic risk diagnostics.
                    </p>
<div className="mt-8">
<p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-2 text-ei-red">Lead Investigator</p>
<p className="text-sm font-bold text-ei-purple uppercase tracking-widest">Investigations · Intelligence <br/> Risk Assessment · Due Diligence</p>
</div>
</div>
<div className="md:w-1/3 lg:w-1/2 flex justify-end">
<img alt="Rupert Evill" className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto grayscale hover:grayscale-0 transition-all duration-700 transform md:translate-y-10 lg:translate-y-4" src="https://rupertevill.com/wp-content/uploads/2025/11/rupert3.png"/>
</div>
</div>
</div>
</header>

<section className="py-16 bg-white border-b border-gray-100" id="numbers">
<div className="max-w-6xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
<div className="stat-card pt-6">
<span className="block text-4xl font-black text-ei-purple">500+</span>
<span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Deal Assessments</span>
</div>
<div className="stat-card pt-6 border-ei-green">
<span className="block text-4xl font-black text-ei-purple">35,000+</span>
<span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Trained Professionals</span>
</div>
<div className="stat-card pt-6 border-ei-orange">
<span className="block text-4xl font-black text-ei-purple">200+</span>
<span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Resolved Incidents</span>
</div>
<div className="stat-card pt-6 border-ei-purple">
<span className="block text-4xl font-black text-ei-purple">70+</span>
<span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Countries Covered</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-ei-purple text-white" id="media">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-ei-green uppercase text-sm font-bold italic tracking-widest mb-4">Briefing Themes</h2>
<h3 className="text-4xl md:text-5xl font-black mb-6">Ground Truth.</h3>
<p className="text-gray-400 max-w-2xl mb-12">Direct insights into why high-performance systems fail when human behavior is ignored.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="block keynote-card border-l-2 border-ei-red pl-8 py-4">
<h4 className="text-xl font-black mb-2">Truth and Deception</h4>
<p className="text-xs text-gray-400 mb-4">Moving past spreadsheets to interpersonal reality. How to detect the "not quite lie" in high-stakes deal rooms.</p>
<span className="text-[10px] font-bold text-ei-red uppercase tracking-widest">Interpersonal Risk</span>
</div>
<div className="block keynote-card border-l-2 border-ei-green pl-8 py-4">
<h4 className="text-xl font-black mb-2">Risk Assessment and Due Diligence</h4>
<p className="text-xs text-gray-400 mb-4">Why standard audits check the locks while the building is on fire. A forensic look at real-world implementation.</p>
<span className="text-[10px] font-bold text-ei-green uppercase tracking-widest">Structural Integrity</span>
</div>
<div className="block keynote-card border-l-2 border-ei-orange pl-8 py-4">
<h4 className="text-xl font-black mb-2">AI: The Integrity Force Multiplier</h4>
<p className="text-xs text-gray-400 mb-4">Beyond the hype: how automation redlines failures faster and masks systemic friction for boards and investors.</p>
<span className="text-[10px] font-bold text-ei-orange uppercase tracking-widest">Emerging Tech Governance</span>
</div>
<div className="block keynote-card border-l-2 border-white border-opacity-30 pl-8 py-4">
<h4 className="text-xl font-black mb-2">The Human Sensor</h4>
<p className="text-xs text-gray-400 mb-4">Why the person in the seat is your best early warning sign, and why replacing "mechanics" with software is a terminal risk.</p>
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Behavioural Analysis</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-7">
<h2 className="text-sm font-bold text-ei-red tracking-widest uppercase mb-8 italic">The Specialist</h2>
<div className="space-y-8 text-gray-600 text-lg leading-relaxed">
<p>
                            Rupert Evill builds the integrity frameworks that keep investors out of headlines and in the black. Founder of <strong className="text-ei-purple font-black">Ethics Insight</strong>, he has spent 24 years in the trenches across 70+ countries.
                        </p>
<p>
                            A 
                            <a className="text-ei-purple font-bold border-b border-ei-purple border-opacity-30 hover:border-opacity-100 transition-all" href="https://www.acfe.com/" target="_blank">Certified Fraud Examiner</a> 
                            with an 
                            <a className="text-ei-purple font-bold border-b border-ei-purple border-opacity-30 hover:border-opacity-100 transition-all" href="https://www.emotionintell.com/course/msc-in-behaviour-and-credibility-analysis/" target="_blank">MSc in Behaviour and Credibility Analysis</a>, 
                            Rupert uses clinical deception detection to find the truth behind the paperwork.
                        </p>
<p>
                            He helps boards and deal teams uncover the behavioural and governance blind spots that destroy value long before the auditors arrive.
                        </p>
</div>
</div>
<div className="lg:col-span-5">
<div className="bg-[#FBFBFC] p-8 rounded-2xl border border-gray-100 clinical-shadow">
<h4 className="text-xs font-bold uppercase tracking-widest text-ei-purple mb-8 border-b pb-4">Specialist Toolkit</h4>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="text-ei-red font-black">01</span>
<div>
<strong className="text-sm block">Behavioural Risk Profiling</strong>
<p className="text-xs text-gray-400 mt-1">Mapping pressure, opportunity, and rationalisation.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="text-ei-green font-black">02</span>
<div>
<strong className="text-sm block">Deception Detection</strong>
<p className="text-xs text-gray-400 mt-1">Finding ground truth through clinical human reading.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="text-ei-orange font-black">03</span>
<div>
<strong className="text-sm block">Integrity Architecture</strong>
<p className="text-xs text-gray-400 mt-1">Practical frameworks that actually work in the trenches.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-[#FBFBFC] border-t border-gray-100">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="bg-white p-10 rounded-2xl clinical-shadow border-t-4 border-ei-green">
<p className="text-gray-600 mb-8 italic">“Particularly skilled at sensitively engaging with firm leadership on very tricky topics. He finds the truth behind the paperwork.”</p>
<p className="font-bold text-ei-purple text-xs uppercase tracking-widest">Impact Fund Denmark</p>
</div>
<div className="bg-white p-10 rounded-2xl clinical-shadow border-t-4 border-ei-red">
<p className="text-gray-600 mb-8 italic">“Success would not be possible without your commitment to finding the real-world operational reality.”</p>
<p className="font-bold text-ei-purple text-xs uppercase tracking-widest">Transparency International</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white border-y border-gray-100" id="publications">
<div className="max-w-6xl mx-auto">
<h2 className="text-sm font-bold text-ei-red tracking-widest uppercase mb-12 italic text-center">Selected Publications</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center">
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">Book</span>
<a className="text-xl font-black text-ei-purple block mb-2 pub-link leading-tight" href="https://www.amazon.com/dp/B0BM55Z5BH" target="_blank">Bootstrapping Ethics</a>
<p className="text-xs text-gray-500 italic">Practical risk management for the real world.</p>
</div>
<div className="text-center">
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">Analysis</span>
<a className="text-xl font-black text-ei-purple block mb-2 pub-link leading-tight" href="https://complianceandethics.org/trash-collection-and-compliance-plateaus/" target="_blank">Compliance &amp; Ethics Blog</a>
<p className="text-xs text-gray-500 italic">Trash Collection &amp; Compliance Plateaus.</p>
</div>
<div className="text-center">
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-4">Briefing</span>
<a className="text-xl font-black text-ei-purple block mb-2 pub-link leading-tight" href="https://www.grip.globalrelay.com/where-do-i-start-making-your-move-into-risk-and-compliance-work/" target="_blank">Grip / Global Relay</a>
<p className="text-xs text-gray-500 italic">Navigating the move into risk work.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white border-gray-100 border-b pt-16 pb-16">
<div className="max-w-6xl mx-auto px-6 md:px-12">
<div className="logo-strip flex flex-wrap gap-12 opacity-80 gap-x-12 gap-y-12 items-center justify-center">

<div className="flex items-center justify-center h-12 w-40">
<img alt="Impact Fund Denmark" className="max-h-full w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a98aa39d-4d90-4072-ba08-605522564251_320w.jpg"/>
</div>
<div className="flex items-center justify-center h-12 w-40">
<img alt="Norfund" className="w-auto max-h-full object-contain scale-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b2bd402-81f0-407e-bb09-e5cdff5d2c9f_320w.png"/>
</div>
<div className="flex items-center justify-center h-12 w-40">
<img alt="Swedfund" className="w-auto max-h-full object-contain scale-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c46c6f38-cfaa-4267-89c0-e2f42786f4a5_320w.png"/>
</div>
<div className="flex items-center justify-center h-12 w-40">
<img alt="British International Investment" className="max-h-full w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3690561-d087-47ef-9750-55fc2c2c1e12_320w.png"/>
</div>
<div className="flex items-center justify-center h-12 w-40">
<img alt="Asian Development Bank" className="w-auto max-h-full object-contain scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7364b94b-4980-4846-b539-c5c5f784408b_800w.png"/>
</div>

<div className="flex items-center justify-center h-12 w-40">
<img alt="Schneider Electric" className="w-auto max-h-full object-contain scale-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0afaf81-4472-4c1f-8877-13ad89e29960_320w.png"/>
</div>
<div className="flex items-center justify-center h-12 w-40">
<img alt="Prudential" className="w-auto max-h-full object-contain scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c50318ba-c27c-49c7-9b55-d48a15501df0_320w.png"/>
</div>
<div className="flex items-center justify-center h-12 w-40">
<img alt="Ericsson" className="w-auto max-h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66a11602-00a9-44aa-a120-1f6ebae0b2a5_320w.png"/>
</div>
<div className="flex w-40 h-12 scale-90 items-center justify-center">
<img alt="DBS Bank" className="w-auto max-h-full object-contain scale-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f29aa9fd-1b4b-44a3-a531-2f14b3dc254b_320w.png"/>
</div>
</div>
</div>
</section>

<section className="md:px-12 forensic-gradient text-center bg-white pt-32 pr-6 pb-32 pl-6" id="contact">
<div className="max-w-4xl mx-auto">
<h3 className="text-ei-purple leading-tight text-6xl font-black mb-10">Selective <span className="text-ei-red italic">Fit.</span></h3>
<p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto billboard-text">
                Engagements are prioritized based on strategic alignment and high-stakes impact. If you have a specific project or collaboration that requires a deep-dive into finding the ground truth, please reach out via the team inquiry desk.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-6">
<a className="bg-ei-purple text-white px-12 py-5 rounded font-bold text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-opacity-90 transition-all" href="mailto:hello@ethicsinsight.co">Inquiry Desk</a>
<a className="border-2 border-ei-purple text-ei-purple px-12 py-5 rounded font-bold text-sm uppercase tracking-[0.2em] hover:bg-ei-purple hover:text-white transition-all" href="https://www.linkedin.com/in/rupert-evill/" target="_blank">Connect</a>
</div>
<p className="mt-12 text-[10px] text-gray-400 font-bold uppercase tracking-widest">Global Operations</p>
</div>
</section>

<footer className="bg-white pt-16 pb-12 px-6 md:px-12 border-t border-gray-100">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
<div className="flex flex-col items-center md:items-start gap-4">
<img alt="Ethics Insight" className="h-6 opacity-30 grayscale" src="https://rupertevill.com/wp-content/uploads/2025/11/icon.png"/>
<p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">© 2026 Media Kit | Rupert Evill</p>
</div>
<div className="flex gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
<a className="hover:text-ei-red transition-colors" href="https://ethicsinsight.substack.com/" target="_blank">Integrity Gap</a>
<a className="hover:text-ei-purple transition-colors" href="https://www.ethicsinsight.co/book/" target="_blank">The Book</a>
</div>
</div>
</footer>

    </>
  );
}
