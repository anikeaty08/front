import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener('DOMContentLoaded', () => {
const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const el = entry.target;
const target = parseInt(el.getAttribute('data-value'));
const suffix = el.getAttribute('data-suffix') || '';
const duration = 2000; // Animation duration in ms
const startTime = performance.now();
const updateCount = (currentTime) => {
const elapsed = currentTime - startTime;
const progress = Math.min(elapsed / duration, 1);
// Easing function for smooth effect (easeOutQuart)
const ease = 1 - Math.pow(1 - progress, 4);
const current = Math.floor(ease * target);
el.innerText = current + suffix;
if (progress < 1) {
requestAnimationFrame(updateCount);
} else {
el.innerText = target + suffix; // Ensure final value is exact
}
};
requestAnimationFrame(updateCount);
observer.unobserve(el);
}
});
}, observerOptions);
document.querySelectorAll('.count-up').forEach(el => {
observer.observe(el);
});
});



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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight text-lg">AEX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#products">Products</a>
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#about">Company</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:border-slate-600 transition-all focus:ring-2 focus:ring-slate-600 focus:ring-offset-2 focus:ring-offset-slate-950" href="#contact">
                Request Demo
            </a>

<button className="md:hidden text-slate-300">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden hero-bg pt-48 pb-32 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/30 border border-blue-900/50 text-blue-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    The Future of American Manufacturing
                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6">
                    Autonomous systems for <span className="bg-clip-text glow-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">precision industry.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 mb-8 max-w-xl leading-relaxed">
                    Deploy intelligent robotics engineered in the USA. Enhance throughput, ensure safety, and scale your logistics with our next-gen automation stack.
                </p>
<div className="flex flex-col sm:flex-row gap-4">

<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)]" href="#contact">
                        Welcome here
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-300 bg-transparent border border-slate-700 rounded-lg hover:text-white hover:border-slate-500 transition-all" href="#products">
                        View Solutions
                    </a>
</div>
</div>
</div>

<div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full opacity-30 pointer-events-none hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-950 z-10"></div>

<div className="w-full h-full grid grid-cols-6 gap-4 transform -skew-x-12">
<div className="bg-blue-900/10 rounded-lg col-span-2 row-span-2 border border-blue-500/20"></div>
<div className="bg-blue-900/5 rounded-lg col-span-3 border border-blue-500/10"></div>
<div className="bg-slate-800/20 rounded-lg col-span-1 border border-slate-700/30"></div>
<div className="bg-blue-600/10 rounded-lg col-span-4 row-span-2 border border-blue-500/20 backdrop-blur-sm"></div>
</div>
</div>
</header>

<section className="border-y border-slate-900 bg-slate-950/50">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-start md:items-center justify-center">
<span className="text-3xl font-medium text-white tracking-tight count-up" data-suffix="+" data-value="10">0</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Years Experience</span>
</div>
<div className="flex flex-col items-start md:items-center justify-center">
<span className="text-3xl font-medium text-white tracking-tight count-up" data-suffix="%" data-value="100">0</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Made in USA</span>
</div>
<div className="flex flex-col items-start md:items-center justify-center">
<span className="text-3xl font-medium text-white tracking-tight count-up" data-suffix="/7" data-value="24">0</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Technical Support</span>
</div>
<div className="flex flex-col items-start md:items-center justify-center">
<span className="text-3xl font-medium text-white tracking-tight count-up" data-suffix="+" data-value="500">0</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1">Units Deployed</span>
</div>
</div>
</div>
</section>

<section className="py-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                        Engineering excellence rooted in American innovation.
                    </h2>
<p className="text-slate-400 mb-6 leading-relaxed">
                        Founded in Detroit, AEX Robotics has spent over a decade redefining the boundaries of industrial automation. We don't just assemble parts; we engineer complete ecosystems designed to withstand the rigorous demands of modern manufacturing.
                    </p>
<p className="text-slate-400 leading-relaxed">
                        Our systems are designed, sourced, and built entirely within the United States, ensuring supply chain security and unmatched build quality for our partners in logistics and production.
                    </p>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl opacity-20 blur-xl"></div>
<div className="relative bg-slate-900 border border-slate-800 rounded-xl p-8 overflow-hidden">
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-blue-900/20 rounded-lg text-blue-400">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Industrial Grade Security</h3>
<p className="text-sm text-slate-400">SOC2 compliant software architecture integrated with hardened hardware protocols.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-blue-900/20 rounded-lg text-blue-400">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Precision Engineering</h3>
<p className="text-sm text-slate-400">Sub-millimeter accuracy for assembly and pick-and-place operations.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/20" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Core Technologies</h2>
<p className="text-slate-400 max-w-2xl">Hardware and software solutions designed to integrate seamlessly into your existing workflow.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="h-12 w-12 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hand-stars-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">AEX-Arm Series</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        6-axis industrial robotic arms capable of heavy payloads (up to 500kg) with collaborative safety features for human-robot workspaces.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> IP67 Rated
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Zero-latency control
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="h-12 w-12 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Warehouse Flow</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Autonomous Mobile Robots (AMRs) for pallet transport and dynamic sorting. Integrates with major ERPs out of the box.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Lidar Navigation
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Auto-charging
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-300">
<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="h-12 w-12 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:code-scan-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Cortex AI Core</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Proprietary computer vision software that allows robots to learn new tasks via demonstration rather than complex coding.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Adaptive Learning
                        </li>
<li className="flex items-center gap-2 text-xs text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Cloud Analytics
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">
<div className="pr-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                        Why industry leaders scale with AEX.
                    </h2>
<p className="text-slate-400 mb-8">
                        We don't just sell robots; we sell a guaranteed increase in operational capacity. Our partners see ROI in an average of 8 months.
                    </p>
<a className="text-blue-400 text-sm font-medium hover:text-blue-300 inline-flex items-center gap-1" href="#contact">
                        Read success stories <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60">
<iconify-icon className="text-blue-500 mb-3" icon="solar:graph-up-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-white font-medium mb-1">Max Productivity</h4>
<p className="text-xs text-slate-400">Operate 24/7 with zero fatigue, increasing output by up to 300%.</p>
</div>
<div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60">
<iconify-icon className="text-blue-500 mb-3" icon="solar:wallet-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-white font-medium mb-1">Reduced Costs</h4>
<p className="text-xs text-slate-400">Minimize waste and lower overhead through precision handling.</p>
</div>
<div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60">
<iconify-icon className="text-blue-500 mb-3" icon="solar:headphones-round-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-white font-medium mb-1">24/7 Support</h4>
<p className="text-xs text-slate-400">US-based engineering teams ready to deploy or troubleshoot anytime.</p>
</div>
<div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/60">
<iconify-icon className="text-blue-500 mb-3" icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
<h4 className="text-white font-medium mb-1">Custom Config</h4>
<p className="text-xs text-slate-400">Tailored end-effectors and software integration for your niche.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-blue-950/20 border-y border-blue-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<span className="text-blue-400 font-medium text-xs tracking-wider uppercase mb-2 block">Case Study: AutoPart Mfg</span>
<h3 className="text-2xl text-white font-medium tracking-tight">"AEX systems increased our assembly line efficiency by 40% in just 3 months."</h3>
</div>
<div className="shrink-0">
<div className="inline-flex items-center gap-8">
<div>
<span className="block text-3xl font-medium text-white tracking-tight">40%</span>
<span className="text-xs text-slate-400">Efficiency Lift</span>
</div>
<div className="w-px h-10 bg-slate-800"></div>
<div>
<span className="block text-3xl font-medium text-white tracking-tight">&lt;1%</span>
<span className="text-xs text-slate-400">Error Rate</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-2xl">
<div className="grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Ready to automate?</h2>
<p className="text-slate-400 mb-8">
                            Schedule a free consultation with our solutions engineers. We'll analyze your floor plan and propose a custom automation strategy.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:map-point-linear"></iconify-icon>
<span>2001 Tech Blvd, Detroit, MI 48201</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:phone-calling-linear"></iconify-icon>
<span>+1 (800) 555-0199</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-blue-500" icon="solar:letter-linear"></iconify-icon>
<span>solutions@aexrobotics.com</span>
</div>
</div>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">First Name</label>
<input className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none transition-all placeholder-slate-600" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Last Name</label>
<input className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none transition-all placeholder-slate-600" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Company Email</label>
<input className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none transition-all placeholder-slate-600" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Interest</label>
<div className="relative">
<select className="w-full bg-slate-900 border border-slate-700 text-white text-sm rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none appearance-none cursor-pointer">
<option>Industrial Arms</option>
<option>Warehouse Automation</option>
<option>Software / AI</option>
<option>General Inquiry</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<button className="w-full text-white bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center transition-all mt-2" type="submit">
                            Get Free Consultation
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-slate-400 font-medium tracking-tight text-sm">AEX Robotics</span>
</div>
<div className="text-xs text-slate-600">
                    © 2023 AEX Robotics Inc. Made in USA. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-blue-500 transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-blue-500 transition-colors" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
