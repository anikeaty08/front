import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function router() {
            const hash = window.location.hash;
            const homePage = document.getElementById('page-home');
            const aboutPage = document.getElementById('page-about');
            
            // Check if route is exact About page
            if (hash === '#/about') {
                homePage.classList.add('hidden');
                aboutPage.classList.remove('hidden');
                window.scrollTo(0, 0);
            } else {
                // Default to Home for empty, #/home, or standard section anchors like #pricing
                homePage.classList.remove('hidden');
                aboutPage.classList.add('hidden');
                
                // If it's a standard anchor (e.g., #features), smooth scroll to it
                if (hash && hash !== '#/home' && !hash.startsWith('#/')) {
                    const el = document.querySelector(hash);
                    if (el) {
                        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
                    }
                } else if (hash === '#/home' || hash === '') {
                    window.scrollTo(0, 0);
                }
            }
            
            // Update navigation active states
            document.querySelectorAll('.nav-route').forEach(link => {
                const linkHref = link.getAttribute('href');
                const isHomeRoute = hash === '' || hash === '#/home' || (hash && !hash.startsWith('#/'));
                
                if ((linkHref === '#/home' && isHomeRoute) || (linkHref === '#/about' && hash === '#/about')) {
                    link.classList.add('text-white');
                    link.classList.remove('text-zinc-400');
                } else {
                    link.classList.remove('text-white');
                    link.classList.add('text-zinc-400');
                }
            });
        }

        // Listen for navigation changes and initial load
        window.addEventListener('hashchange', router);
        window.addEventListener('load', router);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#/home">
<div className="w-8 h-8 rounded bg-lime-400 text-zinc-950 flex items-center justify-center transition-transform group-hover:rotate-12">
<iconify-icon className="text-lg" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter text-lg">GYM JUNKIES</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="nav-route text-white hover:text-white transition-colors" href="#/home">Home</a>
<a className="nav-route text-zinc-400 hover:text-white transition-colors" href="#/about">About Us</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#programs">Programs</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-white hover:text-lime-400 transition-colors" href="#">Log In</a>
<a className="h-9 px-4 inline-flex items-center justify-center rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-lime-400 transition-colors" href="#pricing">
                    Join Now
                </a>
</div>
</div>
</header>
<main id="app-container">

<div className="transition-opacity duration-300" id="page-home">

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-lime-400 mb-8">
<span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
                        New location opening downtown
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl">
                        Redefine your limits. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Fuel your addiction.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 font-light">
                        The ultimate destination for those who refuse to settle. State-of-the-art equipment, elite coaching, and a community built on relentless progress.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center rounded-full bg-lime-400 text-zinc-950 text-base font-medium hover:bg-lime-500 transition-colors gap-2" href="#pricing">
                            Start Free Trial
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-12 px-8 inline-flex items-center justify-center rounded-full bg-transparent border border-zinc-700 text-white text-base font-medium hover:bg-zinc-900 transition-colors" href="#programs">
                            View Programs
                        </a>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-800/50 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60">
<div className="flex items-center gap-2 text-xl tracking-tighter font-semibold text-white"><iconify-icon icon="solar:medal-ribbon-linear"></iconify-icon> ROGUE</div>
<div className="flex items-center gap-2 text-xl tracking-tighter font-semibold text-white"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> ELEIKO</div>
<div className="flex items-center gap-2 text-xl tracking-tighter font-semibold text-white"><iconify-icon icon="solar:heart-pulse-linear"></iconify-icon> CONCEPT2</div>
<div className="flex items-center gap-2 text-xl tracking-tighter font-semibold text-white"><iconify-icon icon="solar:dumbbell-large-linear"></iconify-icon> HAMMER</div>
</div>
</section>

<section className="py-24" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Why we are different.</h2>
<p className="text-base text-zinc-400 max-w-xl">We stripped away the fluff and focused on what actually matters: your results. No distractions, just performance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 transition-colors flex flex-col items-start group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-lime-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:dumbbell-large-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Elite Equipment</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Competition-grade racks, calibrated plates, and specialized machines designed for serious lifters.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 transition-colors flex flex-col items-start group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-lime-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:stopwatch-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">24/7 Access</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Your goals don't sleep, and neither do we. Secure, round-the-clock access to fit your schedule.</p>
</div>
<div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 transition-colors flex flex-col items-start group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-lime-400 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Iron Community</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Surround yourself with individuals who push harder. A culture built on mutual respect and intensity.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-zinc-800/50" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Choose your suffering.</h2>
<p className="text-base text-zinc-400 max-w-xl">Specialized programs designed to break you down and build you back stronger.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-lime-400 hover:text-lime-300 transition-colors" href="#">
                            View Full Schedule
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group relative h-80 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col justify-end p-6">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10"></div>
<div className="absolute inset-0 bg-zinc-800/50 opacity-20 group-hover:scale-105 transition-transform duration-700 blur-xl"></div>
<div className="relative z-20">
<div className="w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur flex items-center justify-center text-white mb-4 border border-zinc-700">
<iconify-icon icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1">HIIT Burn</h3>
<p className="text-xs text-zinc-400">High intensity, maximum calorie output.</p>
</div>
</div>
<div className="group relative h-80 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col justify-end p-6">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10"></div>
<div className="absolute inset-0 bg-lime-900/20 opacity-20 group-hover:scale-105 transition-transform duration-700 blur-xl"></div>
<div className="relative z-20">
<div className="w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur flex items-center justify-center text-white mb-4 border border-zinc-700">
<iconify-icon icon="solar:bone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1">Powerlifting</h3>
<p className="text-xs text-zinc-400">Squat, bench, deadlift. Pure strength.</p>
</div>
</div>
<div className="group relative h-80 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col justify-end p-6">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10"></div>
<div className="absolute inset-0 bg-zinc-800/50 opacity-20 group-hover:scale-105 transition-transform duration-700 blur-xl"></div>
<div className="relative z-20">
<div className="w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur flex items-center justify-center text-white mb-4 border border-zinc-700">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1">Functional</h3>
<p className="text-xs text-zinc-400">Agility, mobility, and core power.</p>
</div>
</div>
<div className="group relative h-80 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex flex-col justify-end p-6">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10"></div>
<div className="absolute inset-0 bg-zinc-800/50 opacity-20 group-hover:scale-105 transition-transform duration-700 blur-xl"></div>
<div className="relative z-20">
<div className="w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur flex items-center justify-center text-white mb-4 border border-zinc-700">
<iconify-icon icon="solar:body-shape-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-1">Bodybuilding</h3>
<p className="text-xs text-zinc-400">Hypertrophy focused isolation work.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Invest in yourself.</h2>
<p className="text-base text-zinc-400 mb-8">Transparent pricing. No hidden fees or lock-in contracts.</p>
<div className="inline-flex items-center p-1 rounded-full bg-zinc-900 border border-zinc-800">
<button className="px-6 py-2 rounded-full bg-zinc-800 text-white text-sm font-medium shadow-sm transition-all">Monthly</button>
<button className="px-6 py-2 rounded-full text-zinc-400 hover:text-white text-sm font-medium transition-all">Annually <span className="text-xs text-lime-400 ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
<div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50">
<h3 className="text-lg font-medium text-white mb-2">Drop-in</h3>
<p className="text-sm text-zinc-400 mb-6">Perfect for travelers or commitment-phobes.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tight text-white">$25</span>
<span className="text-sm text-zinc-500">/day</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-lime-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Full gym access
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lime-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Valid for 24 hours
                                </li>
<li className="flex items-start gap-3 opacity-40">
<iconify-icon className="text-lg shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                                    Class access
                                </li>
</ul>
<a className="w-full h-10 inline-flex items-center justify-center rounded-xl bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors" href="#">
                                Get Day Pass
                            </a>
</div>
<div className="p-8 rounded-3xl bg-zinc-900 border border-lime-400/30 relative shadow-2xl shadow-lime-900/10 md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-lime-400 text-zinc-950 text-xs font-semibold tracking-tight rounded-full uppercase">
                                Most Popular
                            </div>
<h3 className="text-lg font-medium text-white mb-2">Unlimited</h3>
<p className="text-sm text-zinc-400 mb-6">Everything you need to reach your peak.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tight text-white">$89</span>
<span className="text-sm text-zinc-500">/month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-lime-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    24/7 Gym access
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lime-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    All group classes included
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lime-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Sauna &amp; recovery zone
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lime-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    1 PT session / month
                                </li>
</ul>
<a className="w-full h-10 inline-flex items-center justify-center rounded-xl bg-lime-400 text-zinc-950 text-sm font-medium hover:bg-lime-500 transition-colors" href="#">
                                Subscribe Now
                            </a>
</div>
<div className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800/50">
<h3 className="text-lg font-medium text-white mb-2">Coached</h3>
<p className="text-sm text-zinc-400 mb-6">Bespoke programming and 1-on-1 attention.</p>
<div className="mb-8">
<span className="text-4xl font-semibold tracking-tight text-white">$249</span>
<span className="text-sm text-zinc-500">/month</span>
</div>
<ul className="space-y-4 mb-8 text-sm text-zinc-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-lime-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Unlimited Gym access
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lime-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Custom monthly programming
                                </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lime-400 text-lg shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Weekly 1-on-1 PT sessions
                                </li>
</ul>
<a className="w-full h-10 inline-flex items-center justify-center rounded-xl bg-zinc-800 text-white text-sm font-medium hover:bg-zinc-700 transition-colors" href="#">
                                Apply for Coaching
                            </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-lime-900/10 border-y border-lime-900/20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Stop thinking. Start doing.</h2>
<p className="text-base md:text-lg text-zinc-400 mb-10 max-w-2xl">Join the ranks of those who demand more from themselves. Claim your 7-day free trial today.</p>
<a className="h-14 px-10 inline-flex items-center justify-center rounded-full bg-white text-zinc-950 text-base font-medium hover:bg-lime-400 transition-colors" href="#pricing">
                        Claim Free Trial
                    </a>
</div>
</section>
</div>

<div className="hidden transition-opacity duration-300" id="page-about">

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-zinc-800/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-lime-400 mb-8">
                        Our Story
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl">
                        More than a gym. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">A relentless pursuit.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light">
                        Founded in 2024, Gym Junkies was born out of frustration with commercialized fitness. We wanted a space devoid of distractions, built purely for performance, grit, and those who demand more from themselves.
                    </p>
</div>
</section>

<section className="py-24 border-t border-zinc-800/50 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Our Values</h2>
<p className="text-base text-zinc-400 max-w-xl mx-auto">The unshakeable principles that guide our training, our community, and our facility every single day.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 transition-colors flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-lime-400">
<iconify-icon className="text-2xl" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">No Excuses</h3>
<p className="text-sm text-zinc-400 leading-relaxed">We provide the elite tools, but you bring the relentless effort. Extreme accountability is the foundation of every success story built inside these walls.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 transition-colors flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-lime-400">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Iron Brotherhood</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Egos are left entirely at the door. We support, push, and naturally elevate each other. When one of us wins, the entire community wins.</p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 transition-colors flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-6 text-lime-400">
<iconify-icon className="text-2xl" icon="solar:sort-vertical-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Constant Evolution</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Complacency is our ultimate enemy. We constantly upgrade our equipment, meticulously refine our coaching methods, and continuously push the limits.</p>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-zinc-950 border-t border-zinc-800/50 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#/home">
<div className="w-6 h-6 rounded bg-lime-400 text-zinc-950 flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter text-base">GYM JUNKIES</span>
</a>
<p className="text-sm text-zinc-500 mb-6 max-w-xs">Fueling addictions to iron, sweat, and progress since 2024. No excuses.</p>
<div className="flex items-center gap-4 text-zinc-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm tracking-tight">Facility</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">Equipment List</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Class Schedule</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Rules &amp; Etiquette</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm tracking-tight">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-lime-400 transition-colors" href="#/about">About Us</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Trainers</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm tracking-tight">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-lime-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Waiver</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
<p>© 2024 Gym Junkies. All rights reserved.</p>
<div className="flex gap-4">
<span>Designed for performance.</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
