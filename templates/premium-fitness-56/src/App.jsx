import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10" style={{background: 'radial-gradient(circle at 50% 0%, #1c1c1f 0%, #09090b 100%)'}}></div>
<div className="fixed top-0 left-0 w-full h-full -z-10 opacity-20 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'0.05\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center group-hover:scale-90 transition-transform duration-300">
<div className="w-2 h-2 bg-zinc-950 rounded-full"></div>
</div>
                KINETIC.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#method">Method</a>
<a className="hover:text-white transition-colors duration-200" href="#facility">Facility</a>
<a className="hover:text-white transition-colors duration-200" href="#membership">Membership</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium hover:text-white transition-colors" href="#">Login</a>
<a className="bg-white text-zinc-950 text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 hover:scale-105 transition-all duration-300" href="#">
                    Start Trial
                </a>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl mix-blend-screen opacity-50 animate-float"></div>
<div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-3 py-1 mb-8 animate-enter">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-zinc-300 tracking-wide">New location opening in SoHo</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight mb-6 leading-[1.1] animate-enter delay-100">
                The science of 
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500">human performance.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-enter delay-200">
                Not just a gym. A biometric-driven sanctuary for those who refuse to settle. Precision equipment, recovery suites, and data-backed coaching.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-enter delay-300">
<button className="group w-full sm:w-auto bg-white text-zinc-950 h-10 px-6 rounded-full text-sm font-medium hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]">
                    Join Membership
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto border border-white/10 bg-white/5 text-white h-10 px-6 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]">
<iconify-icon icon="lucide:play" strokeWidth="1.5" width="16"></iconify-icon>
                    Watch the Film
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-6 relative animate-enter delay-500">
<div className="relative rounded-t-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden h-64 md:h-96 mask-linear transition-transform duration-700 hover:scale-[1.01]">
<div className="absolute inset-0 grid grid-cols-6 gap-px bg-white/5 opacity-20">
<div className="bg-zinc-950/20"></div><div className="bg-zinc-950/20"></div><div className="bg-zinc-950/20"></div>
<div className="bg-zinc-950/20"></div><div className="bg-zinc-950/20"></div><div className="bg-zinc-950/20"></div>
</div>

<div className="absolute top-8 left-8 right-8 flex gap-4">
<div className="w-1/3 h-32 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300 cursor-default">
<div className="flex justify-between items-start">
<iconify-icon className="text-indigo-400" icon="lucide:activity" width="20"></iconify-icon>
<span className="text-xs text-zinc-500 font-mono">HRV</span>
</div>
<div className="text-2xl font-medium text-white">98<span className="text-zinc-500 text-sm ml-1">ms</span></div>
</div>
<div className="w-1/3 h-32 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300 cursor-default">
<div className="flex justify-between items-start">
<iconify-icon className="text-orange-400" icon="lucide:flame" width="20"></iconify-icon>
<span className="text-xs text-zinc-500 font-mono">BURN</span>
</div>
<div className="text-2xl font-medium text-white">840<span className="text-zinc-500 text-sm ml-1">kcal</span></div>
</div>
<div className="w-1/3 h-32 rounded-lg bg-white/5 border border-white/5 p-4 flex flex-col justify-between hover:bg-white/10 transition-colors duration-300 cursor-default">
<div className="flex justify-between items-start">
<iconify-icon className="text-emerald-400" icon="lucide:timer" width="20"></iconify-icon>
<span className="text-xs text-zinc-500 font-mono">ZONE 2</span>
</div>
<div className="text-2xl font-medium text-white">45:00</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 py-10 bg-black/20">
<div className="max-w-7xl mx-auto px-6 reveal">
<p className="text-center text-xs font-medium text-zinc-500 mb-8 uppercase tracking-widest">Powered by world class equipment</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
<span className="text-lg font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors cursor-default">ELEIKO</span>
<span className="text-lg font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors cursor-default">TECHNOGYM</span>
<span className="text-lg font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors cursor-default">ROGUE</span>
<span className="text-lg font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors cursor-default">HYPERICE</span>
<span className="text-lg font-semibold tracking-tight text-white hover:text-indigo-400 transition-colors cursor-default">WHOOP</span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="facility">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Engineered environment.</h2>
<p className="text-zinc-400 max-w-xl text-lg font-light">Every square inch of Kinetic is designed to optimize your focus and output.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="reveal md:col-span-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-8 relative overflow-hidden group hover:border-zinc-700 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon icon="lucide:dumbbell" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Olympic Standard</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md group-hover:text-zinc-300 transition-colors">Calibrated plates, competition racks, and platforms. The same equipment used in the Olympic village, available for your daily training.</p>
</div>
</div>

<div className="absolute right-0 bottom-0 w-64 h-64 translate-x-1/4 translate-y-1/4 opacity-20 group-hover:opacity-30 transition-all duration-500 group-hover:scale-110">
<svg viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M45.7,-76.3C58.9,-69.3,69.1,-55.6,76.3,-41.2C83.5,-26.8,87.6,-11.7,85.8,2.7C84,17.1,76.2,30.8,66.8,42.8C57.4,54.8,46.3,65.1,33.5,70.8C20.7,76.5,6.1,77.6,-7.1,75.4C-20.3,73.2,-32.1,67.7,-43.3,60.2C-54.5,52.7,-65.1,43.2,-72.6,31.4C-80.1,19.6,-84.5,5.5,-82.3,-7.8C-80.1,-21.1,-71.3,-33.6,-61,-43.3C-50.7,-53,-38.9,-59.9,-27,-66.1C-15.1,-72.3,-3,-77.8,10.1,-79.8C23.2,-81.8,32.5,-94.4,45.7,-76.3Z" fill="#6366F1" transform="translate(100 100)"></path>
</svg>
</div>
</div>

<div className="reveal delay-100 rounded-2xl border border-white/10 bg-zinc-900/40 p-8 relative overflow-hidden group hover:border-zinc-700 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon icon="lucide:wind" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">HEPA Filtration</h3>
<p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">Hospital-grade air purification cycling 6x per hour.</p>
</div>
</div>
</div>

<div className="reveal delay-200 rounded-2xl border border-white/10 bg-zinc-900/40 p-8 relative overflow-hidden group hover:border-zinc-700 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon icon="lucide:waves" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Contrast Therapy</h3>
<p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">Infrared saunas and cold plunges maintained at 42°F.</p>
</div>
</div>
</div>

<div className="reveal delay-100 md:col-span-2 rounded-2xl border border-white/10 bg-zinc-900/40 p-8 relative overflow-hidden group hover:border-zinc-700 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex items-end justify-between">
<div>
<h3 className="text-xl font-medium text-white mb-2">Digital Integration</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-sm group-hover:text-zinc-300 transition-colors">Seamlessly sync your Whoop or Apple Watch data with our facility stations for real-time load recommendations.</p>
</div>
<div className="hidden sm:flex -space-x-3">
<div className="w-10 h-10 rounded-full border border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform duration-300">AM</div>
<div className="w-10 h-10 rounded-full border border-zinc-900 bg-zinc-700 flex items-center justify-center text-xs group-hover:translate-x-2 transition-transform duration-300">JP</div>
<div className="w-10 h-10 rounded-full border border-zinc-900 bg-zinc-600 flex items-center justify-center text-xs group-hover:translate-x-3 transition-transform duration-300">+</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-zinc-900/30"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/5">
<div className="reveal flex flex-col items-center group cursor-default">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">24<span className="text-zinc-600 text-2xl">/7</span></span>
<span className="text-sm text-zinc-500 uppercase tracking-wide group-hover:text-zinc-400 transition-colors">Access</span>
</div>
<div className="reveal delay-100 flex flex-col items-center group cursor-default">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">150<span className="text-zinc-600 text-2xl">+</span></span>
<span className="text-sm text-zinc-500 uppercase tracking-wide group-hover:text-zinc-400 transition-colors">Stations</span>
</div>
<div className="reveal delay-200 flex flex-col items-center group cursor-default">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">3<span className="text-zinc-600 text-2xl">m</span></span>
<span className="text-sm text-zinc-500 uppercase tracking-wide group-hover:text-zinc-400 transition-colors">Ceiling Height</span>
</div>
<div className="reveal delay-300 flex flex-col items-center group cursor-default">
<span className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-2 group-hover:scale-110 transition-transform duration-300">0</span>
<span className="text-sm text-zinc-500 uppercase tracking-wide group-hover:text-zinc-400 transition-colors">Compromises</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="membership">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Simple, transparent access.</h2>
<div className="inline-flex bg-zinc-900 rounded-full p-1 border border-white/10">
<button className="px-6 py-2 rounded-full bg-white text-zinc-950 text-sm font-medium shadow-lg hover:scale-105 transition-transform duration-200">Monthly</button>
<button className="px-6 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium transition-colors">Yearly <span className="text-emerald-500 text-xs ml-1">-15%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal rounded-2xl border border-white/5 bg-zinc-900/20 p-8 flex flex-col hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Access</h3>
<p className="text-sm text-zinc-500 mb-6">Essential facility access for the disciplined.</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$89</span>
<span className="text-zinc-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300 group-hover:translate-x-1 transition-transform duration-300">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        Gym floor access (24/7)
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 group-hover:translate-x-1 transition-transform duration-300 delay-100">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        Locker room amenities
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 group-hover:translate-x-1 transition-transform duration-300 delay-200">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        1 Guest pass / month
                    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 bg-transparent text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">Select Plan</button>
</div>

<div className="reveal delay-100 relative rounded-2xl border border-indigo-500/30 bg-zinc-900/40 p-8 flex flex-col shadow-[0_0_50px_-12px_rgba(99,102,241,0.15)] hover:shadow-[0_0_50px_-12px_rgba(99,102,241,0.3)] hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2 scale-[1.02] group">
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3">
<span className="bg-indigo-500 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border border-indigo-400 shadow-lg">Popular</span>
</div>
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Performance</h3>
<p className="text-sm text-zinc-500 mb-6">Full biometric tracking and recovery access.</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$149</span>
<span className="text-zinc-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300 group-hover:translate-x-1 transition-transform duration-300">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon>
                        Everything in Access
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 group-hover:translate-x-1 transition-transform duration-300 delay-100">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon>
                        Unlimited Sauna &amp; Cold Plunge
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 group-hover:translate-x-1 transition-transform duration-300 delay-200">
<iconify-icon className="text-indigo-400" icon="lucide:check" width="16"></iconify-icon>
                        InBody Composition Scans
                    </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-all duration-300 hover:shadow-lg">Get Started</button>
</div>

<div className="reveal delay-200 rounded-2xl border border-white/5 bg-zinc-900/20 p-8 flex flex-col hover:border-white/20 transition-all duration-300 hover:-translate-y-2 group">
<div className="mb-8">
<h3 className="text-lg font-medium text-white mb-2">Elite</h3>
<p className="text-sm text-zinc-500 mb-6">Personalized coaching and priority booking.</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$299</span>
<span className="text-zinc-500">/mo</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-zinc-300 group-hover:translate-x-1 transition-transform duration-300">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        Everything in Performance
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 group-hover:translate-x-1 transition-transform duration-300 delay-100">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        4x Personal Training Sessions
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 group-hover:translate-x-1 transition-transform duration-300 delay-200">
<iconify-icon className="text-white" icon="lucide:check" width="16"></iconify-icon>
                        Private Locker
                    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 bg-transparent text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">Select Plan</button>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-zinc-900/30 reveal">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Ready to commit?</h2>
<p className="text-zinc-400 mb-8">Join the waitlist for our SoHo location or book a tour at our Chelsea flagship today.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto group">
<input className="flex-1 bg-zinc-950 border border-white/10 rounded-lg px-4 h-10 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-zinc-600 focus:ring-1 focus:ring-indigo-500/50" placeholder="Enter your email" type="email"/>
<button className="bg-white text-zinc-950 px-6 h-10 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                    Join Waitlist
                </button>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 text-sm reveal">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white font-medium tracking-tighter">
<div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
<div className="w-1 h-1 bg-zinc-950 rounded-full"></div>
</div>
                KINETIC.
            </div>
<div className="flex gap-8 text-zinc-500">
<a className="hover:text-white transition-colors duration-200" href="#">Terms</a>
<a className="hover:text-white transition-colors duration-200" href="#">Privacy</a>
<a className="hover:text-white transition-colors duration-200" href="#">Careers</a>
<a className="hover:text-white transition-colors duration-200" href="#">Instagram</a>
</div>
<div className="text-zinc-600">
                © 2024 Kinetic Systems Inc.
            </div>
</div>
</footer>


    </>
  );
}
