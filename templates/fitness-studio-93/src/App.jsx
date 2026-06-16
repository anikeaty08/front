import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Progressive Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Stop observing once revealed
                    // observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Simple Navbar blur effect on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-sm', 'bg-white/80');
                navbar.classList.remove('bg-white/70');
            } else {
                navbar.classList.remove('shadow-sm', 'bg-white/80');
                navbar.classList.add('bg-white/70');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-teal-200/30 blur-[120px] mix-blend-multiply animate-float-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-slate-200/50 blur-[150px] mix-blend-multiply animate-float-delayed"></div>
<div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent_80%)]"></div>
</div>

<nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-slate-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex items-center gap-3 cursor-pointer group">
<div className="relative w-10 h-10 flex items-center justify-center">
<svg className="w-full h-full transform transition-transform duration-500 group-hover:scale-105" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M20 70 L30 40 L70 40 L60 70 Z" fill="#334155"></path>
<path d="M40 85 L35 70 L75 70 L85 40 L95 40 L80 85 Z" fill="#14B8A6"></path>
<path d="M30 40 L45 20 L85 20 L75 40 Z" fill="#334155"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tight text-slate-800 leading-none">FITNEXUS</span>
<span className="text-xs font-medium tracking-widest text-slate-500 mt-0.5">STUDIO</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#spaces">Spaces</a>
<button className="relative inline-flex h-10 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#14B8A6_50%,#E2E8F0_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-900 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-colors group-hover:bg-slate-800">
                            Member Login
                        </span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
<div className="max-w-5xl mx-auto px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-200/60 shadow-sm mb-8 reveal">
<span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
<span className="text-sm font-medium text-slate-600">Now Open in Mumbai</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.05] reveal reveal-delay-1">
                Peak performance. <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-teal-700 to-slate-900 animate-[shimmer_8s_infinite] bg-[length:200%_auto]">Holistically redefined.</span>
</h1>
<p className="mt-6 text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed reveal reveal-delay-2 font-light">
                Mumbai's premier sanctuary for absolute well-being. A meticulously designed ecosystem connecting fitness, recovery, and play.
            </p>
<div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center reveal reveal-delay-3">
<a className="rounded-full bg-slate-900 text-white px-8 py-4 text-lg font-medium hover:bg-slate-800 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-900/20 flex items-center gap-2" href="#spaces">
                    Explore Spaces
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="rounded-full bg-white text-slate-900 border border-slate-200 px-8 py-4 text-lg font-medium hover:bg-slate-50 transition-all hover:-translate-y-0.5 shadow-sm flex items-center gap-2 group" href="#contact">
                    Book a Tour
                    <i className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" data-lucide="calendar" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white relative" id="philosophy">
<div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
                        More than a facility. <br/>A complete ecosystem.
                    </h2>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-8">
                        True performance isn't just about lifting heavier or running faster. It's the synthesis of movement, focus, play, and recovery. Fitnexus Studio brings every discipline you need under one meticulously engineered roof.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center shrink-0 text-teal-600">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-1">Uncompromising Standards</h3>
<p className="text-lg text-slate-500">From Olympic-grade weights to precision climate control, every detail serves your goals.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 text-slate-700">
<i className="w-6 h-6" data-lucide="git-merge" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-medium text-slate-900 mb-1">Holistic Integration</h3>
<p className="text-lg text-slate-500">Seamlessly transition from intense MMA striking to deep restorative physiotherapy.</p>
</div>
</li>
</ul>
</div>
<div className="relative h-[600px] rounded-3xl overflow-hidden bg-slate-100 reveal reveal-delay-2 group">

<div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
<div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==')]"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center p-8">
<div className="w-full max-w-sm aspect-square border border-white/20 rounded-full flex items-center justify-center relative animate-[spin_40s_linear_infinite]">
<div className="w-3/4 h-3/4 border border-white/10 rounded-full"></div>
<div className="absolute top-0 w-4 h-4 bg-teal-500 rounded-full blur-sm"></div>
<div className="absolute bottom-10 right-10 w-3 h-3 bg-white rounded-full blur-sm"></div>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 transform transition-transform duration-500 group-hover:-translate-y-2">
<p className="text-lg text-white font-medium mb-1">Architecture of Movement</p>
<p className="text-sm text-white/70">Designed for intuitive flow between disciplines.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 relative" id="spaces">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Designed for every dimension of you.</h2>
<p className="text-lg md:text-xl text-slate-500">Curated zones specifically engineered to push boundaries, foster play, and accelerate recovery.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 lg:p-12 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 reveal hover:-translate-y-1">
<div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
<div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center mb-8">
<i className="w-7 h-7 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" data-lucide="dumbbell" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Strength &amp; Combat</h3>
<p className="text-lg text-slate-500 mb-8 max-w-md">Elite performance gym flooring, state-of-the-art free weights, and dedicated MMA &amp; Boxing rings for striking and grappling.</p>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">Performance Gym</span>
<span className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">Boxing Arena</span>
<span className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">MMA Octagon</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 reveal reveal-delay-1 hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-8">
<i className="w-7 h-7 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-12" data-lucide="tangent" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Courts</h3>
<p className="text-lg text-slate-500 mb-8">Professional-grade surfaces engineered for speed, agility, and joint protection.</p>
<div className="flex flex-col gap-3 mt-auto">
<div className="flex items-center justify-between border-b border-slate-100 pb-3">
<span className="text-lg font-medium text-slate-700">Badminton</span>
<i className="w-4 h-4 text-teal-500" data-lucide="check" strokeWidth="2"></i>
</div>
<div className="flex items-center justify-between pb-3">
<span className="text-lg font-medium text-slate-700">Squash</span>
<i className="w-4 h-4 text-teal-500" data-lucide="check" strokeWidth="2"></i>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 reveal hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-8">
<i className="w-7 h-7 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" data-lucide="mountain" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Vertical &amp; Air</h3>
<p className="text-lg text-slate-500 mb-8">Defy gravity. Build core strength and spatial awareness through dynamic movement.</p>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">Wall Climbing</span>
<span className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">Trampoline Park</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 reveal reveal-delay-1 hover:-translate-y-1">
<div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-8">
<i className="w-7 h-7 transform transition-transform duration-300 group-hover:scale-110" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Flow &amp; Rhythm</h3>
<p className="text-lg text-slate-500 mb-8">Endurance and mindfulness spaces designed to steady the heart rate and clear the mind.</p>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">Swimming Pool</span>
<span className="px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-600">Group Studio</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-500 reveal reveal-delay-2 hover:-translate-y-1">
<div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent pointer-events-none"></div>
<div className="w-14 h-14 rounded-full bg-white/10 text-teal-400 flex items-center justify-center mb-8 backdrop-blur-md">
<i className="w-7 h-7 transform transition-transform duration-300 group-hover:scale-110" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-white">Clinical Recovery</h3>
<p className="text-lg text-slate-300 mb-8">The most crucial part of training. Expert-led rehabilitation and advanced thermal therapies.</p>
<div className="flex flex-wrap gap-2">
<span className="px-4 py-2 rounded-full bg-white/10 border border-white/5 text-sm font-medium text-slate-200">Physiotherapy</span>
<span className="px-4 py-2 rounded-full bg-white/10 border border-white/5 text-sm font-medium text-slate-200">Sauna</span>
<span className="px-4 py-2 rounded-full bg-white/10 border border-white/5 text-sm font-medium text-slate-200">Spa</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-slate-200 bg-slate-50 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-slate-200/60">
<div className="text-center reveal pl-0">
<div className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-2">11</div>
<div className="text-lg font-medium text-slate-500">Disciplines</div>
</div>
<div className="text-center reveal reveal-delay-1">
<div className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-2">25<span className="text-3xl text-teal-500">+</span></div>
<div className="text-lg font-medium text-slate-500">Expert Coaches</div>
</div>
<div className="text-center reveal reveal-delay-2">
<div className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-2">3</div>
<div className="text-lg font-medium text-slate-500">Recovery Zones</div>
</div>
<div className="text-center reveal reveal-delay-3">
<div className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-2">1</div>
<div className="text-lg font-medium text-slate-500">Unified Approach</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-slate-900">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full bg-teal-500/10 blur-[100px]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 reveal">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
<svg className="w-8 h-8" fill="none" viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<path d="M40 85 L35 70 L75 70 L85 40 L95 40 L80 85 Z" fill="#14B8A6"></path>
</svg>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
                Where fitness connects.
            </h2>
<p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light">
                Join Mumbai's most comprehensive wellness ecosystem. Limited founder memberships currently available.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="w-full sm:w-auto rounded-full bg-white text-slate-900 px-8 py-4 text-lg font-medium hover:bg-slate-100 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2 group">
                    Start Your Journey
                    <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<p className="mt-8 text-sm text-slate-500">
                Located in the heart of Mumbai. Open 6AM - 11PM.
            </p>
</div>
</section>

<footer className="bg-slate-950 py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight text-white">FITNEXUS</span>
<span className="text-slate-500">© 2024</span>
</div>
<div className="flex gap-6 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
