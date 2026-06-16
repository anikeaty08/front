import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", function() {
// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
// Generate Leaves
const hero = document.getElementById('hero');
for(let i=0; i<8; i++) {
let leaf = document.createElement('div');
leaf.className = 'leaf';
leaf.style.left = Math.random() * 100 + '%';
leaf.style.animation = `float ${5 + Math.random() * 10}s linear infinite`;
leaf.style.animationDelay = `${Math.random() * 5}s`;
hero.appendChild(leaf);
}
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
<span className="font-semibold text-lg">T</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors">TERRASCULPT</span>
<span className="text-[0.6rem] uppercase tracking-widest text-stone-500">Landscaping Ltd</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 hover:scale-105 transition-all duration-300 flex items-center gap-1" href="#hero">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 hover:scale-105 transition-all duration-300 flex items-center gap-1" href="#about">About</a>
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 hover:scale-105 transition-all duration-300 flex items-center gap-1" href="#services">Services</a>
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 hover:scale-105 transition-all duration-300 flex items-center gap-1" href="#contact">Contact</a>
</div>

<button className="md:hidden text-stone-600">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">

<div className="absolute inset-0 z-0">
<img alt="Premium Garden" className="w-full h-full object-cover opacity-90 scale-105 hover:scale-100 transition-transform duration-[10s] ease-out" src="https://images.unsplash.com/photo-1558293842-c0fd3db86157?q=80&amp;w=2548&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-50/10 via-stone-50/20 to-stone-50"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-50/80 to-transparent"></div>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Now Available in Lagos
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1] mb-6">
                    Crafting <span className="text-emerald-700">Timeless</span><br/> Outdoor Spaces.
                </h1>
<p className="text-lg text-stone-600 max-w-lg mb-10 leading-relaxed font-light">
                    TerraSculpt Landscaping Ltd transforms ordinary terrain into living masterpieces through precision design, installation, and sustainable maintenance.
                </p>
<div className="flex flex-col sm:flex-row gap-4">

<a className="btn-robotic group relative inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white overflow-hidden rounded-lg transition-all duration-300 hover:bg-emerald-900 shadow-lg shadow-emerald-900/20" href="https://wa.link/0e4555" target="_blank">
<div className="absolute inset-0 border border-white/20 rounded-lg"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-300 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-300 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex items-center gap-3 font-medium tracking-wide">
                            Chat on WhatsApp
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</span>
</a>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-4 reveal delay-200">
<div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:-translate-y-2 transition-transform duration-500 mt-12">
<span className="iconify text-emerald-600 mb-4" data-icon="lucide:sprout" data-width="32"></span>
<h3 className="text-stone-900 font-medium mb-1">Eco-Design</h3>
<p className="text-xs text-stone-500">Sustainable irrigation &amp; flora.</p>
</div>
<div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:-translate-y-2 transition-transform duration-500">
<span className="iconify text-emerald-600 mb-4" data-icon="lucide:layers" data-width="32"></span>
<h3 className="text-stone-900 font-medium mb-1">Hardscaping</h3>
<p className="text-xs text-stone-500">Precision stone pathways.</p>
</div>
<div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:-translate-y-2 transition-transform duration-500 col-span-2 w-3/4 mx-auto">
<span className="iconify text-emerald-600 mb-4" data-icon="lucide:scan-face" data-width="32"></span>
<h3 className="text-stone-900 font-medium mb-1">Smart Maintenance</h3>
<p className="text-xs text-stone-500">Tech-driven lawn care scheduling.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-16">

<div className="md:col-span-5 reveal">
<span className="text-emerald-600 font-medium tracking-wide text-sm uppercase mb-2 block">Our Philosophy</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 mb-6 tracking-tight">Precision Meets Nature</h2>
<p className="text-stone-600 mb-6 leading-relaxed">
                        At TerraSculpt, we view landscaping as an architectural discipline. We don't just plant; we engineer environments that breathe. Our mission is to integrate modern living with the tranquility of nature.
                    </p>
<p className="text-stone-600 mb-8 leading-relaxed">
                        From the initial soil analysis to the final stone placement, our vision is executed with robotic precision and an artist's touch.
                    </p>
<div className="flex gap-8 border-t border-stone-100 pt-8">
<div>
<span className="block text-3xl font-semibold text-emerald-700">100+</span>
<span className="text-xs text-stone-500 uppercase tracking-wide">Projects Completed</span>
</div>
<div>
<span className="block text-3xl font-semibold text-emerald-700">15+</span>
<span className="text-xs text-stone-500 uppercase tracking-wide">Years Experience</span>
</div>
</div>
</div>

<div className="md:col-span-7 relative pl-8 border-l border-stone-200 reveal delay-100">
<div className="space-y-12">

<div className="relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-emerald-500 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all duration-300"></span>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">01. Consultation &amp; Planning</h3>
<p className="text-stone-500 text-sm">We analyze your site's topography, soil health, and your aesthetic goals to draft a preliminary roadmap.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-stone-200 border-4 border-white group-hover:bg-white group-hover:border-emerald-500 group-hover:scale-125 transition-all duration-300"></span>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">02. Design Development</h3>
<p className="text-stone-500 text-sm">Creation of 2D/3D visualizations and selection of flora suitable for the Lagos climate.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-stone-200 border-4 border-white group-hover:bg-white group-hover:border-emerald-500 group-hover:scale-125 transition-all duration-300"></span>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">03. Installation</h3>
<p className="text-stone-500 text-sm">Robotic-assisted grading, irrigation installation, planting, and hardscaping construction.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-stone-200 border-4 border-white group-hover:bg-white group-hover:border-emerald-500 group-hover:scale-125 transition-all duration-300"></span>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">04. Ongoing Maintenance</h3>
<p className="text-stone-500 text-sm">Scheduled care including weeding, pest control, and fertilizer application to ensure longevity.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-emerald-600 font-medium tracking-wide text-sm uppercase mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">Comprehensive Solutions</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">


<div className="reveal group bg-white rounded-xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-50 transition-colors">
<span className="iconify" data-icon="lucide:pen-tool" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Design &amp; Planning</h3>
<ul className="text-sm text-stone-500 space-y-2">
<li>• Landscape Design</li>
<li>• Site Planning &amp; Design</li>
<li>• Urban Planning</li>
</ul>
</div>

<div className="reveal delay-100 group bg-white rounded-xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-50 transition-colors">
<span className="iconify" data-icon="lucide:hammer" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Build &amp; Construct</h3>
<ul className="text-sm text-stone-500 space-y-2">
<li>• Landscape Installations</li>
<li>• Garden Construction</li>
<li>• Irrigation Systems</li>
</ul>
</div>

<div className="reveal delay-200 group bg-white rounded-xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-50 transition-colors">
<span className="iconify" data-icon="lucide:scissors" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Care &amp; Maintenance</h3>
<ul className="text-sm text-stone-500 space-y-2">
<li>• Lawn Care &amp; Weeding</li>
<li>• Pest Control</li>
<li>• Fertilizer Application</li>
</ul>
</div>
</div>
<div className="mt-16 text-center reveal">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium tracking-wide" href="https://wa.link/0e4555">
                    Start a Project
                    <span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-start">

<div className="reveal bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm">
<h2 className="text-2xl font-medium text-stone-900 mb-1">Get in Touch</h2>
<p className="text-sm text-stone-500 mb-8">Ready to transform your space? Send us a message.</p>
<form action="#" className="space-y-6">
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="name" placeholder=" " type="text"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="name">Your Name</label>
</div>
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="email" placeholder=" " type="email"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="email">Email Address</label>
</div>
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="phone" placeholder=" " type="tel"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="phone">Phone Number</label>
</div>
<div className="relative">
<textarea className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="message" placeholder=" " rows="4"></textarea>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="message">Project Details</label>
</div>
<button className="btn-robotic w-full py-4 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-all flex justify-center items-center gap-2 group" type="button">
                            Submit Request
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:send" data-width="16"></span>
</button>
</form>
</div>

<div className="reveal delay-100 flex flex-col h-full justify-between">
<div className="mb-8">
<h2 className="text-2xl font-medium text-stone-900 mb-6">Visit Us</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-emerald-600 shrink-0">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-stone-900">Headquarters</h4>
<p className="text-sm text-stone-500 leading-relaxed mt-1">29 Association Ave,<br/>Ilupeju, Lagos 100271, Lagos</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-emerald-600 shrink-0">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-stone-900">Contact</h4>
<a className="text-sm text-stone-500 hover:text-emerald-600 transition-colors block mt-1" href="https://wa.link/0e4555">WhatsApp Support</a>
<span className="text-sm text-stone-500 block">support@terrasculpt.com</span>
</div>
</div>
</div>
</div>

<div className="w-full h-64 rounded-2xl overflow-hidden shadow-md border border-stone-200 relative group">
<div className="absolute inset-0 bg-emerald-900/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<iframe allowfullscreen="" className="grayscale hover:grayscale-0 transition-all duration-700" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.977467657279!2d3.3592863!3d6.5293297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d9630c7937d%3A0xc3f58e0a6e5b7c7e!2s29%20Association%20Ave%2C%20Ilupeju%20100252%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-emerald-700 rounded flex items-center justify-center text-white text-xs">T</div>
<span className="text-white font-medium tracking-tight">TERRASCULPT</span>
</div>
<p className="text-xs max-w-sm leading-relaxed text-stone-500">
                    Engineered landscapes for the modern era. We combine robotic precision with organic beauty to create sustainable outdoor environments.
                </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Services</h4>
<ul className="space-y-2 text-xs">
<li className="hover:text-emerald-400 transition-colors cursor-pointer">Landscape Design</li>
<li className="hover:text-emerald-400 transition-colors cursor-pointer">Irrigation Systems</li>
<li className="hover:text-emerald-400 transition-colors cursor-pointer">Urban Planning</li>
<li className="hover:text-emerald-400 transition-colors cursor-pointer">Maintenance</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Connect</h4>
<a className="inline-flex items-center gap-2 text-xs hover:text-emerald-400 transition-colors group" href="https://wa.link/0e4555">
<span className="iconify" data-icon="lucide:message-circle" data-width="14"></span>
                    Chat on WhatsApp
                </a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-[0.65rem] uppercase tracking-wider text-stone-600">
<p>© 2023 TerraSculpt Landscaping Ltd. All rights reserved.</p>
<p>Designed for Future Living</p>
</div>
</footer>

    </>
  );
}
