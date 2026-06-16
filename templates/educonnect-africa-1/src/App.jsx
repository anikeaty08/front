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
primary: '#0F172A', // Slate 900 (Navy-ish)
secondary: '#1E293B', // Slate 800
accent: '#0D9488', // Teal 600
accentLight: '#14B8A6', // Teal 500
light: '#F8FAFC', // Slate 50
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
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between h-20 items-center">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
<i className="text-white w-5 h-5 stroke-[2]" data-lucide="book-open"></i>
</div>
<span className="font-bold text-xl tracking-tight text-primary">EduConnect <span className="text-accent font-medium">Africa</span></span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#why-us">Why Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#success">Success Stories</a>
<a className="bg-primary hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-900/20" href="#contact">
                        Get Started
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-primary focus:outline-none">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-accent text-xs font-semibold mb-6">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Transforming African Education
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold text-primary tracking-tight leading-[1.1] mb-6">
                        The Future of African Education. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-teal-400">Integrated Today.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Partner with Africa’s leading education solutions provider for certified staff recruitment, advanced digital platforms, and complete institutional development.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-slate-800 transition-all shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20" href="#contact">
                            Request Free Consultation
                            <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all" href="#services">
                            Explore Services
                        </a>
</div>

<div className="border-t border-slate-100 pt-8">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Trusted by 50+ Leading Institutions</p>
<div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="h-8 flex items-center font-bold text-slate-700 text-lg"><i className="mr-2 text-slate-400 fill-slate-200" data-lucide="hexagon"></i> Nexus</div>
<div className="h-8 flex items-center font-bold text-slate-700 text-lg"><i className="mr-2 text-slate-400 fill-slate-200" data-lucide="triangle"></i> Apex</div>
<div className="h-8 flex items-center font-bold text-slate-700 text-lg"><i className="mr-2 text-slate-400 fill-slate-200" data-lucide="circle"></i> Global</div>
<div className="h-8 flex items-center font-bold text-slate-700 text-lg"><i className="mr-2 text-slate-400 fill-slate-200" data-lucide="square"></i> Elite</div>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-teal-50 rounded-[3rem] transform rotate-3 scale-90 -z-10"></div>

<div className="relative w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
<div className="rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white">
<img alt="Students using technology" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
<i className="w-5 h-5" data-lucide="trending-up"></i>
</div>
<div>
<p className="text-sm font-semibold text-primary">Performance Boost</p>
<p className="text-xs text-slate-500 mt-1">Institutions see 40% improvement in operational efficiency.</p>
</div>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 animate-bounce-slow">
<div className="text-center">
<span className="block text-2xl font-bold text-accent">5k+</span>
<span className="text-xs text-slate-500 font-medium">Teachers Placed</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-accent font-semibold tracking-wide uppercase text-xs">Our Expertise</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold text-primary tracking-tight">Comprehensive Education Solutions</h2>
<p className="mt-4 text-slate-500">We address the core challenges facing African educational institutions with tailored, scalable pillars of service.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-accent/30 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div className="mb-4 text-xs font-semibold text-slate-400">01</div>
<h3 className="text-xl font-semibold text-primary mb-3">Certified Staffing</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Access a verified pool of local and international educators. We handle vetting to guarantee teaching excellence and cultural fit.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors" href="#">
                        Learn more <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-accent/30 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="laptop"></i>
</div>
<div className="mb-4 text-xs font-semibold text-slate-400">02</div>
<h3 className="text-xl font-semibold text-primary mb-3">Digital Solutions</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Implement secure CBT platforms and powerful School Management Systems (SMS) for automated efficiency and data-driven decisions.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors" href="#">
                        Learn more <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-accent/30 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="building"></i>
</div>
<div className="mb-4 text-xs font-semibold text-slate-400">03</div>
<h3 className="text-xl font-semibold text-primary mb-3">Institutional Development</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        From modern lab setup to structural design and security audits, we build the physical and strategic foundation for excellence.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors" href="#">
                        Learn more <i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 lg:px-8" id="why-us">
<div className="max-w-7xl mx-auto bg-primary rounded-[2.5rem] overflow-hidden shadow-2xl relative">

<div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="p-8 md:p-16 lg:p-20">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">WHY EDUCONNECT AFRICA?</h2>
<p className="mt-4 text-slate-400 max-w-2xl mx-auto">We combine deep local understanding with global standards to deliver results that matter.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-8">

<div className="flex group">
<div className="mr-6 mt-1 text-accent">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<div className="border-b border-slate-800 pb-8 w-full group-last:border-0">
<h4 className="text-xl font-semibold text-white mb-2">Verified Workforce</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                    Rigorous vetting process for all staff ensures you only get the most qualified and passionate educators.
                                </p>
</div>
</div>

<div className="flex group">
<div className="mr-6 mt-1 text-accent">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div className="border-b border-slate-800 pb-8 w-full group-last:border-0">
<h4 className="text-xl font-semibold text-white mb-2">Tailored Packages</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                    Custom solutions designed specifically for your institution's budget, size, and long-term goals.
                                </p>
</div>
</div>

<div className="flex group">
<div className="mr-6 mt-1 text-accent">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<div className="pb-8 w-full">
<h4 className="text-xl font-semibold text-white mb-2">Fast &amp; Flexible Deployment</h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                    Commitment to reliable and rapid service delivery to minimize downtime in your academic calendar.
                                </p>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
<h4 className="text-white font-medium mb-6">Full Service Breakdown</h4>
<div className="space-y-3">

<details className="group [&amp;_summary::-webkit-details-marker]:hidden" open="">
<summary className="flex items-center justify-between p-4 rounded-lg bg-white/5 cursor-pointer text-white hover:bg-white/10 transition-colors">
<span className="text-sm font-medium">Recruitment &amp; Training</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-4 py-3 text-sm text-slate-400">
                                    From head-hunting principals to training support staff, we manage the entire human resource lifecycle.
                                </div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 rounded-lg bg-white/5 cursor-pointer text-white hover:bg-white/10 transition-colors">
<span className="text-sm font-medium">ICT Infrastructure</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-4 py-3 text-sm text-slate-400">
                                    Smart classrooms, reliable internet networking, and hardware procurement strategies.
                                </div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-4 rounded-lg bg-white/5 cursor-pointer text-white hover:bg-white/10 transition-colors">
<span className="text-sm font-medium">Curriculum Development</span>
<span className="transition group-open:rotate-180">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-4 py-3 text-sm text-slate-400">
                                    Aligning local requirements with international standards (Cambridge, IB, etc.).
                                </div>
</details>
</div>
</div>
</div>
</div>

<div className="bg-accent/10 border-t border-white/10 p-6 md:p-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<span className="block text-accent font-semibold mb-1">Ready to upgrade?</span>
<h3 className="text-white text-lg font-medium">Schedule a free strategy session with our experts.</h3>
</div>
<a className="flex-shrink-0 bg-accent hover:bg-teal-500 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all flex items-center group" href="#contact">
                        Book Consultation
                        <i className="w-4 h-4 ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-light overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="relative rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-2xl">
<img alt="Team meeting" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-primary/10"></div>
</div>

<div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
</div>
<div className="order-1 lg:order-2">
<span className="text-accent font-semibold tracking-wide uppercase text-xs">Our Approach</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-6">Innovative Thinking, <br/>Practical Results.</h2>
<p className="text-slate-500 text-lg mb-6">
                        We don't just advise; we implement. Our methodology combines rigorous analysis of your institution's current state with forward-thinking strategies that leverage technology and human capital.
                    </p>
<ul className="space-y-4">
<li className="flex items-start">
<i className="w-5 h-5 text-accent mt-1 mr-3 shrink-0" data-lucide="target"></i>
<span className="text-slate-600">Needs assessment and gap analysis.</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-accent mt-1 mr-3 shrink-0" data-lucide="layout"></i>
<span className="text-slate-600">Custom strategy design and roadmap.</span>
</li>
<li className="flex items-start">
<i className="w-5 h-5 text-accent mt-1 mr-3 shrink-0" data-lucide="bar-chart-2"></i>
<span className="text-slate-600">Implementation support and performance monitoring.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-primary text-white relative overflow-hidden" id="success">
<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">CLIENT SUCCESS STORIES</h2>
<p className="mt-4 text-slate-400">See how we've transformed education across the continent.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-white/10 pb-12 mb-12">
<div className="text-center">
<div className="text-4xl font-bold text-accent mb-2">50+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest">Institutions</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold text-accent mb-2">5k+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest">Teachers Placed</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold text-accent mb-2">15%</div>
<div className="text-xs text-slate-400 uppercase tracking-widest">Avg Performance Boost</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold text-accent mb-2">100+</div>
<div className="text-xs text-slate-400 uppercase tracking-widest">Digital Upgrades</div>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="col-span-1 md:col-span-2 bg-accent rounded-2xl p-8 relative overflow-hidden">
<i className="absolute top-8 right-8 text-white/20 w-16 h-16" data-lucide="quote"></i>
<div className="relative z-10">
<p className="text-xl md:text-2xl font-medium leading-relaxed mb-8">
                            "EduConnect Africa transformed our recruitment process. The quality of staff we now attract has directly impacted our student performance by over 15% in just one academic year."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">JD</div>
<div>
<h4 className="font-semibold">John Doe</h4>
<p className="text-sm text-teal-100">Proprietor, Lagos Elite Academy</p>
</div>
</div>
</div>
</div>

<div className="col-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors cursor-pointer">
<div className="h-full flex flex-col justify-between">
<p className="text-slate-300 mb-6">
                            "The digital transformation roadmap provided by the team was clear, affordable, and executed flawlessly."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-sm font-bold">SA</div>
<div>
<h4 className="font-semibold text-sm">Sarah A.</h4>
<p className="text-xs text-slate-400">Principal, GreenValley High</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">

<div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden mb-20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-lg bg-accent/20 blur-[100px] pointer-events-none"></div>
<h2 className="relative text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">
                    Ready to Elevate Your <br/> School's Potential?
                </h2>
<p className="relative text-slate-400 mb-10 max-w-xl mx-auto">
                    Let's discuss a tailored strategy to implement modern solutions and ensure your institution leads in educational quality.
                </p>

<form className="relative max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Enter your email address" type="email"/>
<button className="px-8 py-4 rounded-full bg-accent hover:bg-teal-500 text-white font-semibold transition-all whitespace-nowrap shadow-lg shadow-teal-900/50" type="submit">
                        Get Started
                    </button>
</form>
</div>

<div className="grid md:grid-cols-4 gap-8 border-t border-slate-100 pt-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
<i className="text-white w-3 h-3" data-lucide="book-open"></i>
</div>
<span className="font-bold text-lg text-primary">EduConnect Africa</span>
</div>
<p className="text-sm text-slate-500 max-w-xs">
                        Empowering African institutions through technology, recruitment, and strategic development.
                    </p>
</div>
<div>
<h4 className="font-semibold text-primary mb-4">Services</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-accent" href="#">Staff Recruitment</a></li>
<li><a className="hover:text-accent" href="#">School Management Systems</a></li>
<li><a className="hover:text-accent" href="#">Curriculum Design</a></li>
<li><a className="hover:text-accent" href="#">Training</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-primary mb-4">Contact</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> hello@educonnect.africa</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> +234 800 123 4567</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map-pin"></i> Lagos, Nigeria</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2023 EduConnect Africa. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-primary" href="#">Privacy Policy</a>
<a className="hover:text-primary" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
