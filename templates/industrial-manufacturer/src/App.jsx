import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
// Scroll Animations
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
// Modal Logic
window.openProjectModal = function(element) {
const imgSrc = element.getAttribute('data-img');
const title = element.getAttribute('data-title');
const desc = element.getAttribute('data-desc');
document.getElementById('modal-img').src = imgSrc;
document.getElementById('modal-title').textContent = title;
document.getElementById('modal-desc').textContent = desc;
const modal = document.getElementById('project-modal');
modal.classList.remove('hidden');
document.body.style.overflow = 'hidden'; // Prevent background scrolling
// Trigger transition
setTimeout(() => {
modal.classList.remove('opacity-0', 'scale-95');
modal.classList.add('opacity-100', 'scale-100');
}, 10);
};
window.closeProjectModal = function() {
const modal = document.getElementById('project-modal');
modal.classList.remove('opacity-100', 'scale-100');
modal.classList.add('opacity-0', 'scale-95');
document.body.style.overflow = 'auto'; // Restore scrolling
setTimeout(() => {
modal.classList.add('hidden');
document.getElementById('modal-img').src = '';
}, 300);
};
document.addEventListener("DOMContentLoaded", () => {
initInViewAnimations();
// Close modal on outside click
document.getElementById('project-modal').addEventListener('click', function(e) {
if (e.target === this) {
closeProjectModal();
}
});
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
      

<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<nav className="fixed top-0 w-full z-[60] transition-all duration-300">
<div className="max-w-[1600px] mx-auto px-6 py-6 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="text-[#EA580C] opacity-90 group-hover:opacity-100 transition-opacity">
<iconify-icon className="animate-[spin_10s_linear_infinite]" icon="solar:settings-minimalistic-linear" width="28"></iconify-icon>
</div>
<span className="text-white tracking-widest text-xl uppercase opacity-90 group-hover:opacity-100 transition-opacity font-oswald font-medium">TITAN.</span>
</div>

<div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-widest text-white/80">
<a className="hover:text-[#EA580C] transition-colors font-ibm" href="#">Capabilities</a>
<a className="hover:text-[#EA580C] transition-colors font-ibm" href="#">Industries</a>
<a className="hover:text-[#EA580C] transition-colors font-ibm" href="#">Process</a>
<a className="hover:text-[#EA580C] transition-colors font-ibm" href="#projects">Projects</a>
</div>

<button className="bg-[#EA580C] px-6 py-3 rounded-md text-white text-sm font-medium hover:bg-[#c24100] shadow-[0_0_15px_rgba(234,88,12,0.3)] transition-all flex items-center gap-2 font-ibm">
                Request Specs
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-[100vh] overflow-hidden bg-[#374151]">

<div className="absolute inset-0">
<img alt="Industrial Machining" className="w-full h-full object-cover opacity-30 scale-105 mix-blend-overlay" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1f2937]/90 via-[#374151]/80 to-[#374151]"></div>
</div>

<div className="absolute top-[20%] right-[5%] xl:right-[10%] hidden lg:block z-10 w-[500px] h-[400px] [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: '-1'}}>

<path d="M 128 80 C 128 200, 320 150, 320 270" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"></path>
<path className="animate-dash" d="M 128 80 C 128 200, 320 150, 320 270" fill="none" stroke="#EA580C" strokeWidth="2"></path>
<circle className="animate-pulse" cx="128" cy="80" fill="#EA580C" r="4"></circle>
<circle className="animate-pulse" cx="320" cy="270" fill="#EA580C" r="4"></circle>
</svg>

<div className="absolute top-0 left-0 glass-dark p-5 rounded-md w-64 transform hover:-translate-y-1 transition-transform duration-500">
<div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#EA580C]" icon="solar:ruler-cross-pen-linear" width="20"></iconify-icon>
<p className="text-xs text-white uppercase tracking-widest font-ibm font-medium">Live Inspection</p>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center text-sm font-ibm text-white">
<span className="text-white/70">Tolerance</span>
<span className="font-mono text-[#EA580C]">±0.0001"</span>
</div>
<div className="flex justify-between items-center text-sm font-ibm text-white">
<span className="text-white/70">Alloy Grade</span>
<span className="font-mono">7075-T6</span>
</div>
</div>
</div>

<div className="absolute top-[190px] left-[192px] glass-dark p-5 rounded-md w-64 transform hover:-translate-y-1 transition-transform duration-500 delay-100">
<div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#EA580C]" icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
<p className="text-xs text-white uppercase tracking-widest font-ibm font-medium">Mill 04 Status</p>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center text-sm font-ibm text-white">
<span className="text-white/70">Spindle Load</span>
<span className="font-mono">42%</span>
</div>
<div className="flex justify-between items-center text-sm font-ibm text-white">
<span className="text-white/70">Telemetry</span>
<span className="flex items-center gap-1 font-mono text-green-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                            SYNCED
                        </span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-32 left-0 w-full px-6 z-20">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-8">
<h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter mb-8 font-oswald font-medium uppercase [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
                        PRECISION COMPONENTS. <br/>
<span className="text-[#EA580C] pr-4 font-oswald">ZERO</span> TOLERANCE.
                    </h1>
</div>
<div className="lg:col-span-4 lg:mb-4 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll border-l border-white/20 pl-6">
<p className="text-white/80 text-lg leading-relaxed mb-8 max-w-md font-ibm">
                        OEM manufacturing partners delivering high-spec components for aerospace, automotive, and advanced industrial systems.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-[#EA580C] text-white px-8 py-4 rounded-md text-sm font-medium hover:bg-[#c24100] transition-colors flex items-center gap-2 font-ibm uppercase tracking-wide">
                            Request Specs
                            <iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</header>

<section className="py-16 border-b border-gray-200 bg-white">
<div className="max-w-[1600px] mx-auto px-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<p className="text-center text-xs font-medium uppercase tracking-widest text-gray-500 mb-10 font-ibm">Trusted by Aerospace, Automotive &amp; Defense Leaders</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-gray-900" icon="simple-icons:spacex" width="48"></iconify-icon>
<iconify-icon className="text-gray-900" icon="simple-icons:tesla" width="40"></iconify-icon>
<iconify-icon className="text-gray-900" icon="simple-icons:nasa" width="56"></iconify-icon>
<iconify-icon className="text-gray-900" icon="simple-icons:boeing" width="56"></iconify-icon>
<iconify-icon className="text-gray-900" icon="simple-icons:lockheedmartin" width="56"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 bg-gray-50 overflow-hidden border-b border-gray-200">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1 relative [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-[#EA580C]" icon="solar:cpu-bolt-linear" width="40"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest text-gray-400 font-ibm">Capabilities Overview</span>
</div>
<h2 className="text-5xl md:text-7xl text-gray-900 mb-10 leading-[1.05] tracking-tighter font-oswald font-medium uppercase">
                        Every Tolerance Measured. <br/>
<span className="text-gray-400 font-oswald">Every Unit Inspected.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-12">

<div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-md hover:border-[#EA580C] transition-colors">
<iconify-icon className="text-[#EA580C] mt-1" icon="solar:settings-linear" width="20"></iconify-icon>
<div>
<h3 className="text-base font-medium text-gray-900 mb-1 font-ibm">CNC Machining</h3>
<p className="text-sm text-gray-500 font-ibm">3, 4, and 5-axis precision milling.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-md hover:border-[#EA580C] transition-colors">
<iconify-icon className="text-[#EA580C] mt-1" icon="solar:layers-linear" width="20"></iconify-icon>
<div>
<h3 className="text-base font-medium text-gray-900 mb-1 font-ibm">Custom Fabrication</h3>
<p className="text-sm text-gray-500 font-ibm">Sheet metal and complex weldments.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-md hover:border-[#EA580C] transition-colors">
<iconify-icon className="text-[#EA580C] mt-1" icon="solar:box-linear" width="20"></iconify-icon>
<div>
<h3 className="text-base font-medium text-gray-900 mb-1 font-ibm">Injection Molding</h3>
<p className="text-sm text-gray-500 font-ibm">High-volume advanced polymers.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-md hover:border-[#EA580C] transition-colors">
<iconify-icon className="text-[#EA580C] mt-1" icon="solar:widget-add-linear" width="20"></iconify-icon>
<div>
<h3 className="text-base font-medium text-gray-900 mb-1 font-ibm">Advanced Assembly</h3>
<p className="text-sm text-gray-500 font-ibm">Electromechanical integration.</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-md hover:border-[#EA580C] transition-colors md:col-span-2">
<iconify-icon className="text-[#EA580C] mt-1" icon="solar:rocket-linear" width="20"></iconify-icon>
<div>
<h3 className="text-base font-medium text-gray-900 mb-1 font-ibm">Rapid Prototyping</h3>
<p className="text-sm text-gray-500 font-ibm">Turnaround from CAD to physical validation in 48 hours.</p>
</div>
</div>
</div>

<div className="bg-gray-900 rounded-md p-6 text-white border-l-4 border-[#EA580C]">
<h4 className="font-ibm font-medium uppercase tracking-wide text-sm mb-4">Quality Assurance Standards</h4>
<div className="flex flex-wrap gap-4">
<span className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-md text-xs font-mono font-medium tracking-wider">ISO 9001</span>
<span className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-md text-xs font-mono font-medium tracking-wider">AS9100</span>
<span className="bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-md text-xs font-mono font-medium tracking-wider">ITAR COMPLIANT</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[700px] w-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">

<div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-md overflow-hidden shadow-2xl border border-gray-200">
<img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&amp;fit=crop&amp;q=80"/>
</div>

<div className="absolute bottom-8 left-0 w-[50%] h-[40%] rounded-md overflow-hidden shadow-2xl border-4 border-white">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&amp;fit=crop&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-200">
<div className="max-w-[1600px] mx-auto px-6">
<div className="text-center mb-16 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-xs font-medium tracking-widest text-[#EA580C] uppercase mb-2 block font-ibm">Workflow</span>
<h2 className="text-4xl text-gray-900 tracking-tighter font-oswald font-medium uppercase">Manufacturing Process</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">

<div className="hidden md:block absolute top-[40px] left-[10%] w-[80%] h-0.5 bg-gray-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-md flex items-center justify-center mb-6 shadow-sm group hover:border-[#EA580C] transition-colors">
<iconify-icon className="text-gray-400 group-hover:text-[#EA580C] transition-colors" icon="solar:pen-new-square-linear" width="32"></iconify-icon>
</div>
<span className="text-xs font-mono font-medium text-gray-400 mb-2 block">PHASE 01</span>
<h4 className="text-lg font-medium text-gray-900 font-ibm mb-2">Design Validation</h4>
<p className="text-sm text-gray-500 font-ibm max-w-[200px]">DFM review and CAD optimization.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-md flex items-center justify-center mb-6 shadow-sm group hover:border-[#EA580C] transition-colors">
<iconify-icon className="text-gray-400 group-hover:text-[#EA580C] transition-colors" icon="solar:printer-minimalistic-linear" width="32"></iconify-icon>
</div>
<span className="text-xs font-mono font-medium text-gray-400 mb-2 block">PHASE 02</span>
<h4 className="text-lg font-medium text-gray-900 font-ibm mb-2">Prototyping</h4>
<p className="text-sm text-gray-500 font-ibm max-w-[200px]">Initial rapid prototyping run.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border-2 border-[#EA580C] rounded-md flex items-center justify-center mb-6 shadow-md group">
<iconify-icon className="text-[#EA580C]" icon="solar:server-square-linear" width="32"></iconify-icon>
</div>
<span className="text-xs font-mono font-medium text-[#EA580C] mb-2 block">PHASE 03</span>
<h4 className="text-lg font-medium text-gray-900 font-ibm mb-2">Production</h4>
<p className="text-sm text-gray-500 font-ibm max-w-[200px]">Scaled manufacturing &amp; machining.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-md flex items-center justify-center mb-6 shadow-sm group hover:border-[#EA580C] transition-colors">
<iconify-icon className="text-gray-400 group-hover:text-[#EA580C] transition-colors" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<span className="text-xs font-mono font-medium text-gray-400 mb-2 block">PHASE 04</span>
<h4 className="text-lg font-medium text-gray-900 font-ibm mb-2">QA Inspection</h4>
<p className="text-sm text-gray-500 font-ibm max-w-[200px]">CMM measurement and sign-off.</p>
</div>
</div>
</div>
</section>

<section className="pt-32 pb-16 bg-[#374151] text-gray-200">
<div className="max-w-[1600px] mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-xs font-medium tracking-widest text-[#EA580C] uppercase mb-4 font-ibm">Infrastructure</span>
<h2 className="text-5xl md:text-6xl text-white tracking-tighter mb-6 font-oswald font-medium uppercase">Partner With a Precision Manufacturer</h2>
<p className="text-gray-400 max-w-2xl text-lg font-ibm">Our 150,000 sq ft facility houses state-of-the-art multi-axis CNC machines and automated inspection bays, ensuring unparalleled output consistency.</p>
</div>

<div className="relative w-full h-[60vh] md:h-[70vh] rounded-md overflow-hidden group [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll shadow-2xl">

<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 mix-blend-luminosity" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&amp;fit=crop&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#1f2937] via-[#374151]/50 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-10 md:p-16 flex flex-col md:flex-row items-end justify-between gap-8">
<div>
<div className="flex items-center gap-4 mb-4">
<span className="bg-gray-900/60 backdrop-blur border border-white/10 px-3 py-1.5 rounded-md text-xs font-medium text-white uppercase tracking-wider font-ibm">
                                24/7 Operations
                            </span>
<span className="bg-[#EA580C]/80 backdrop-blur border border-[#EA580C] px-3 py-1.5 rounded-md text-xs font-medium text-white uppercase tracking-wider font-ibm">
                                Capacity Available
                            </span>
</div>
<h3 className="text-3xl md:text-5xl text-white tracking-tighter font-oswald font-medium uppercase">Ready to spec your project?</h3>
</div>
<div className="flex-shrink-0">
<button className="bg-[#EA580C] text-white px-8 py-5 rounded-md text-sm font-medium hover:bg-[#c24100] transition-colors flex items-center gap-3 font-ibm uppercase tracking-wider shadow-lg">
                            Request Technical Documentation
                            <iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="pb-32 pt-16 bg-[#374151]" id="projects">
<div className="max-w-[1600px] mx-auto px-6">
<div className="mb-12 border-b border-gray-600 pb-4 flex justify-between items-end [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div>
<span className="text-xs font-medium tracking-widest text-[#EA580C] uppercase mb-2 block font-ibm">Case Studies</span>
<h2 className="text-3xl text-white tracking-tighter font-oswald font-medium uppercase">Recent Projects</h2>
</div>
</div>

<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">

<div className="break-inside-avoid flex flex-col relative group cursor-pointer rounded-md overflow-hidden bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors shadow-lg" data-desc="Precision 5-axis milled titanium housing for next-generation orbital thrusters. Tolerances held to ±0.0002 inches with comprehensive CMM validation." data-img="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&amp;fit=crop&amp;q=80" data-title="Aerospace Turbine Housing" onclick="openProjectModal(this)">
<div className="relative w-full overflow-hidden">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="p-6 flex flex-col justify-start">
<span className="text-[#EA580C] text-xs font-mono font-medium tracking-widest mb-2 block uppercase">AEROSPACE</span>
<h4 className="text-white font-oswald text-2xl tracking-tight uppercase mb-3">Turbine Housing</h4>
<p className="text-gray-400 font-ibm text-sm leading-relaxed">Precision 5-axis milled titanium housing for next-generation orbital thrusters. Tolerances held to ±0.0002 inches with comprehensive CMM validation.</p>
</div>
</div>

<div className="break-inside-avoid flex flex-col relative group cursor-pointer rounded-md overflow-hidden bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors shadow-lg" data-desc="High-volume aluminum die-cast structural nodes for commercial electric vehicle chassis platforms, featuring automated secondary machining and inline QA." data-img="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&amp;fit=crop&amp;q=80" data-title="EV Chassis Node" onclick="openProjectModal(this)">
<div className="relative w-full overflow-hidden">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="p-6 flex flex-col justify-start">
<span className="text-[#EA580C] text-xs font-mono font-medium tracking-widest mb-2 block uppercase">AUTOMOTIVE</span>
<h4 className="text-white font-oswald text-2xl tracking-tight uppercase mb-3">EV Chassis Node</h4>
<p className="text-gray-400 font-ibm text-sm leading-relaxed">High-volume aluminum die-cast structural nodes for commercial electric vehicle chassis platforms, featuring automated secondary machining and inline QA.</p>
</div>
</div>

<div className="break-inside-avoid flex flex-col relative group cursor-pointer rounded-md overflow-hidden bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors shadow-lg" data-desc="Lightweight, stress-relieved optical payload mount. Integrates advanced composite materials with anodized 7075 aluminum interfaces." data-img="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&amp;fit=crop&amp;q=80" data-title="Defense Drone Optics Mount" onclick="openProjectModal(this)">
<div className="relative w-full overflow-hidden">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="p-6 flex flex-col justify-start">
<span className="text-[#EA580C] text-xs font-mono font-medium tracking-widest mb-2 block uppercase">DEFENSE</span>
<h4 className="text-white font-oswald text-2xl tracking-tight uppercase mb-3">Optics Mount</h4>
<p className="text-gray-400 font-ibm text-sm leading-relaxed">Lightweight, stress-relieved optical payload mount. Integrates advanced composite materials with anodized 7075 aluminum interfaces.</p>
</div>
</div>

<div className="break-inside-avoid flex flex-col relative group cursor-pointer rounded-md overflow-hidden bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors shadow-lg" data-desc="Surgical steel articulated joints requiring ISO Class 7 cleanroom final assembly and electropolished surface finishes." data-img="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&amp;fit=crop&amp;q=80" data-title="Medical Robotics Joint" onclick="openProjectModal(this)">
<div className="relative w-full overflow-hidden">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="p-6 flex flex-col justify-start">
<span className="text-[#EA580C] text-xs font-mono font-medium tracking-widest mb-2 block uppercase">MEDICAL</span>
<h4 className="text-white font-oswald text-2xl tracking-tight uppercase mb-3">Robotics Joint</h4>
<p className="text-gray-400 font-ibm text-sm leading-relaxed">Surgical steel articulated joints requiring ISO Class 7 cleanroom final assembly and electropolished surface finishes.</p>
</div>
</div>

<div className="break-inside-avoid flex flex-col relative group cursor-pointer rounded-md overflow-hidden bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors shadow-lg" data-desc="Inconel 718 forged valve body machined for deep-sea pressurized fluid control. Subjected to extensive ultrasonic NDT testing." data-img="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&amp;fit=crop&amp;q=80" data-title="Energy Sector Valve Body" onclick="openProjectModal(this)">
<div className="relative w-full overflow-hidden">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="p-6 flex flex-col justify-start">
<span className="text-[#EA580C] text-xs font-mono font-medium tracking-widest mb-2 block uppercase">ENERGY</span>
<h4 className="text-white font-oswald text-2xl tracking-tight uppercase mb-3">Valve Body</h4>
<p className="text-gray-400 font-ibm text-sm leading-relaxed">Inconel 718 forged valve body machined for deep-sea pressurized fluid control. Subjected to extensive ultrasonic NDT testing.</p>
</div>
</div>

<div className="break-inside-avoid flex flex-col relative group cursor-pointer rounded-md overflow-hidden bg-gray-800 border border-gray-700 hover:border-gray-500 transition-colors shadow-lg" data-desc="Extruded and skived copper heatsinks manufactured at scale for high-performance computing data centers." data-img="https://images.unsplash.com/photo-1535303311164-664fc9ce6cb1?auto=format&amp;fit=crop&amp;q=80" data-title="Commercial Electronics Heatsink" onclick="openProjectModal(this)">
<div className="relative w-full overflow-hidden">
<img className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1535303311164-664fc9ce6cb1?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="p-6 flex flex-col justify-start">
<span className="text-[#EA580C] text-xs font-mono font-medium tracking-widest mb-2 block uppercase">COMMERCIAL</span>
<h4 className="text-white font-oswald text-2xl tracking-tight uppercase mb-3">Data Heatsink</h4>
<p className="text-gray-400 font-ibm text-sm leading-relaxed">Extruded and skived copper heatsinks manufactured at scale for high-performance computing data centers.</p>
</div>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-[100] hidden bg-gray-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 opacity-0 scale-95 transition-all duration-300" id="project-modal">
<div className="bg-[#1f2937] border border-gray-700 rounded-md w-full max-w-4xl max-h-[90vh] overflow-y-auto no-scrollbar relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">

<button className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-[#EA580C] text-white p-2 rounded-md transition-colors backdrop-blur-sm border border-white/10" onclick="closeProjectModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0">

<div className="w-full h-[40vh] md:h-full bg-black relative">
<img className="absolute inset-0 w-full h-full object-cover" id="modal-img" src=""/>
</div>

<div className="p-8 md:p-12 flex flex-col justify-center">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#EA580C]" icon="solar:folder-with-files-linear" width="24"></iconify-icon>
<span className="text-xs font-medium tracking-widest text-gray-400 uppercase font-ibm">Project Spec File</span>
</div>
<h3 className="text-3xl md:text-4xl text-white tracking-tighter mb-6 font-oswald font-medium uppercase leading-tight" id="modal-title">Project Title</h3>
<p className="text-gray-400 font-ibm text-base leading-relaxed mb-8 border-l-2 border-gray-700 pl-4" id="modal-desc">
                        Project description will load here.
                    </p>
<div className="flex flex-col gap-4 mb-8">
<div className="flex justify-between items-center text-sm font-ibm border-b border-gray-700 pb-2">
<span className="text-gray-500">Inspection Status</span>
<span className="text-green-400 font-mono">PASSED</span>
</div>
<div className="flex justify-between items-center text-sm font-ibm border-b border-gray-700 pb-2">
<span className="text-gray-500">Documentation</span>
<span className="text-gray-300 font-mono">ARCHIVED</span>
</div>
</div>
<button className="w-full bg-transparent border border-[#EA580C] text-[#EA580C] px-6 py-4 rounded-md text-sm font-medium hover:bg-[#EA580C] hover:text-white transition-colors flex items-center justify-center gap-2 font-ibm uppercase tracking-wider">
                        Request Similar Build
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<footer className="bg-gray-950 text-white pt-24 pb-12 border-t border-gray-800">
<div className="max-w-[1600px] mx-auto px-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

<div className="md:col-span-4 flex flex-col items-start">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#EA580C]" icon="solar:settings-minimalistic-linear" width="32"></iconify-icon>
<span className="text-xl uppercase font-oswald font-medium tracking-widest text-white">TITAN.</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed max-w-sm font-ibm mb-8">
                        Industrial precision manufacturing delivering uncompromised quality components for aerospace, defense, and advanced commercial applications.
                    </p>
<div className="flex gap-4">

<a className="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center hover:bg-[#EA580C] transition-colors" href="#">
<iconify-icon icon="solar:buildings-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center hover:bg-[#EA580C] transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="font-ibm font-medium text-sm text-white mb-6 uppercase tracking-wider">Capabilities</h4>
<ul className="space-y-4 text-sm text-gray-400 font-ibm">
<li><a className="hover:text-[#EA580C] transition-colors" href="#">CNC Machining</a></li>
<li><a className="hover:text-[#EA580C] transition-colors" href="#">Custom Fabrication</a></li>
<li><a className="hover:text-[#EA580C] transition-colors" href="#">Injection Molding</a></li>
<li><a className="hover:text-[#EA580C] transition-colors" href="#">Assembly</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-ibm font-medium text-sm text-white mb-6 uppercase tracking-wider">Industries</h4>
<ul className="space-y-4 text-sm text-gray-400 font-ibm">
<li><a className="hover:text-[#EA580C] transition-colors" href="#">Aerospace</a></li>
<li><a className="hover:text-[#EA580C] transition-colors" href="#">Defense</a></li>
<li><a className="hover:text-[#EA580C] transition-colors" href="#">Automotive</a></li>
<li><a className="hover:text-[#EA580C] transition-colors" href="#">Energy</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="font-ibm font-medium text-sm text-white mb-6 uppercase tracking-wider">Engineering Updates</h4>
<p className="text-gray-400 text-sm mb-4 font-ibm">Subscribe for material insights, tooling updates, and capacity announcements.</p>
<form className="flex gap-2">
<input className="bg-gray-900 border border-gray-800 rounded-md px-4 py-3 w-full text-sm text-white focus:outline-none focus:border-[#EA580C] font-ibm placeholder:text-gray-600 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-[#EA580C] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[#c24100] transition-colors font-ibm uppercase tracking-wide" type="button">Join</button>
</form>
</div>
</div>

<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-ibm font-medium uppercase tracking-widest">
<p>© 2024 Titan Component Systems. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-gray-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-300 transition-colors" href="#">ISO Standards</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
