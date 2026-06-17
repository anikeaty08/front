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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth reveal or simple navbar transition
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('bg-[#0D0D0D]', 'h-14');
                nav.classList.remove('bg-[#0D0D0D]/90', 'h-16');
            } else {
                nav.classList.remove('bg-[#0D0D0D]', 'h-14');
                nav.classList.add('bg-[#0D0D0D]/90', 'h-16');
            }
        });
    
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
      

<nav className="fixed w-full z-50 bg-[#0D0D0D]/90 backdrop-blur-xl border-b border-white/5 transition-all duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="font-display text-2xl text-white tracking-tighter flex items-center gap-2" href="#">
<iconify-icon className="text-orange-500 text-2xl" icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
                JASON JOA
            </a>

<div className="hidden lg:flex items-center gap-10">
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase" href="#about">About</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase" href="#services">Services</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase" href="#process">Programs</a>
<a className="text-xs font-medium text-gray-400 hover:text-white transition-colors tracking-widest uppercase" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold py-2 px-5 rounded-full transition-all items-center gap-2 uppercase tracking-wider" href="#contact">
                    Free Call
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="lg:hidden text-white flex items-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center bg-[#0D0D0D] overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym" className="w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-[#0D0D0D]/50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-10">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Elite Online Coaching</span>
</div>
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-white mb-8 uppercase tracking-tighter">
                    Train Like You <br/><span className="text-orange-500">Perform.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed font-light">
                    Transform your physique without sacrificing your lifestyle. Science-based coaching for the modern professional.
                </p>
<div className="flex flex-col sm:flex-row gap-5 mb-20">
<a className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-5 px-10 rounded-full transition-all text-center flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20 uppercase tracking-widest" href="#contact">
                        Book Free Call
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-semibold py-5 px-10 rounded-full transition-all text-center uppercase tracking-widest backdrop-blur-sm" href="#services">
                        View Programs
                    </a>
</div>

<div className="flex flex-wrap items-center gap-12 pt-10 border-t border-white/5">
<div>
<p className="font-display text-4xl text-white mb-1">500+</p>
<p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Success Stories</p>
</div>
<div>
<p className="font-display text-4xl text-white mb-1">100%</p>
<p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Custom Plans</p>
</div>
<div>
<p className="font-display text-4xl text-white mb-1">24/7</p>
<p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Client Support</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-14 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center flex-wrap gap-10 grayscale opacity-40">
<span className="font-display text-3xl tracking-tighter text-[#111111]">VOGUE</span>
<span className="font-display text-3xl tracking-tighter text-[#111111]">MEN'S HEALTH</span>
<span className="font-display text-3xl tracking-tighter text-[#111111]">FORBES</span>
<span className="font-display text-3xl tracking-tighter text-[#111111]">BUSINESS INSIDER</span>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-40" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end mb-24">
<div>
<span className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase block mb-6">The Philosophy</span>
<h2 className="font-display text-5xl md:text-7xl text-[#111111] uppercase leading-none tracking-tighter">A Place To <br/>Belong.</h2>
</div>
<div>
<p className="text-lg text-gray-500 max-w-lg leading-relaxed font-light">
                        We're more than just a training program. We're a space built for every kind of journey — whether you're just starting or looking to push your limits.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="rounded-3xl overflow-hidden aspect-[3/4] group relative">
<img alt="Training" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
<p className="font-display text-3xl text-white uppercase">Discipline</p>
</div>
</div>
<div className="rounded-3xl overflow-hidden aspect-[3/4] group relative md:translate-y-12">
<img alt="Community" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
<p className="font-display text-3xl text-white uppercase">Community</p>
</div>
</div>
<div className="rounded-3xl overflow-hidden aspect-[3/4] group relative">
<img alt="Results" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
<p className="font-display text-3xl text-white uppercase">Growth</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0D0D0D] py-24 md:py-40 text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-10">
<div className="max-w-xl">
<span className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase block mb-6">The Services</span>
<h2 className="font-display text-5xl md:text-7xl uppercase leading-none tracking-tighter">Everything You Need <br/>To Win.</h2>
</div>
<div className="flex gap-4">
<iconify-icon className="text-orange-500 text-2xl" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-orange-500 text-2xl" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-orange-500 text-2xl" icon="solar:star-linear"></iconify-icon>
</div>
</div>
<div className="space-y-0 border-t border-white/5">

<div className="group py-12 flex flex-col md:flex-row md:items-center justify-between gap-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors -mx-6 px-6">
<div className="md:w-1/2">
<span className="text-orange-500 font-display text-xl mb-4 block">01</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-4 group-hover:text-orange-500 transition-colors">Custom Workout Architecture</h3>
<p className="text-gray-400 font-light leading-relaxed">Scientific programming built specifically for your body type, goals, and equipment availability.</p>
</div>
<iconify-icon className="text-6xl text-white/5 transition-all group-hover:text-orange-500/20 group-hover:scale-110" icon="solar:dumbbell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="group py-12 flex flex-col md:flex-row md:items-center justify-between gap-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors -mx-6 px-6">
<div className="md:w-1/2">
<span className="text-orange-500 font-display text-xl mb-4 block">02</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-4 group-hover:text-orange-500 transition-colors">Intuitive Nutrition Protocols</h3>
<p className="text-gray-400 font-light leading-relaxed">No restrictive dieting. We build a sustainable relationship with food that fuels your performance.</p>
</div>
<iconify-icon className="text-6xl text-white/5 transition-all group-hover:text-orange-500/20 group-hover:scale-110" icon="solar:plate-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="group py-12 flex flex-col md:flex-row md:items-center justify-between gap-10 border-b border-white/5 hover:bg-white/[0.02] transition-colors -mx-6 px-6">
<div className="md:w-1/2">
<span className="text-orange-500 font-display text-xl mb-4 block">03</span>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tighter mb-4 group-hover:text-orange-500 transition-colors">Bi-Weekly Biofeedback</h3>
<p className="text-gray-400 font-light leading-relaxed">Deep-dive video check-ins where we analyze sleep, stress, and recovery to optimize your path.</p>
</div>
<iconify-icon className="text-6xl text-white/5 transition-all group-hover:text-orange-500/20 group-hover:scale-110" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-40">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-gray-50 rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-20 border border-gray-100">
<div className="w-full lg:w-2/5 shrink-0">
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl">
<img alt="Jason" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full lg:w-3/5">
<div className="inline-block px-4 py-1.5 bg-orange-100 text-orange-600 rounded-full text-[10px] font-semibold uppercase tracking-widest mb-8">
                        The Founder
                    </div>
<h2 className="font-display text-6xl text-[#111111] uppercase leading-none mb-10 tracking-tighter">Jason Joa, CPT</h2>
<p className="text-xl text-gray-500 font-light leading-relaxed mb-10">
                        "I don't believe in quick fixes or cookie-cutter plans. My mission is to give you the tools to become the strongest, most capable version of yourself while maintaining the lifestyle you've worked hard to build."
                    </p>
<div className="grid grid-cols-2 gap-10 mb-12">
<div>
<p className="font-display text-4xl text-[#111111] mb-2 tracking-tighter">1.9K+</p>
<p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">Global Reach</p>
</div>
<div>
<p className="font-display text-4xl text-[#111111] mb-2 tracking-tighter">8 YEARS</p>
<p className="text-xs text-gray-400 font-semibold uppercase tracking-widest">Experience</p>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-5">
<a className="bg-[#111111] text-white py-4 px-8 rounded-full text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95" href="#">
                            Follow @jasonjoafit
                            <iconify-icon className="text-lg" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0D0D0D] py-24 md:py-40 text-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-24">
<span className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase block mb-6">Invest in yourself</span>
<h2 className="font-display text-5xl md:text-8xl uppercase leading-none tracking-tighter">Select Your Plan.</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col hover:border-orange-500/30 transition-all">
<h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Starter Protocol</h3>
<div className="flex items-baseline gap-2 mb-10 border-b border-white/5 pb-10">
<span className="font-display text-6xl text-white tracking-tighter">$245</span>
<span className="text-gray-500 text-sm font-light uppercase tracking-widest">/ Monthly</span>
</div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-start gap-4 text-sm font-light text-gray-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Custom Workout Block
                        </li>
<li className="flex items-start gap-4 text-sm font-light text-gray-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Basic Nutrition Targets
                        </li>
<li className="flex items-start gap-4 text-sm font-light text-gray-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Monthly Email Feedback
                        </li>
</ul>
<a className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-center transition-all" href="#">Select Plan</a>
</div>

<div className="bg-white border border-white rounded-[2.5rem] p-10 flex flex-col relative scale-105 shadow-2xl shadow-orange-500/20 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold py-1 px-4 rounded-full uppercase tracking-widest">Most Popular</div>
<h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-4">Master Coaching</h3>
<div className="flex items-baseline gap-2 mb-10 border-b border-gray-100 pb-10">
<span className="font-display text-6xl text-[#111111] tracking-tighter">$650</span>
<span className="text-gray-400 text-sm font-light uppercase tracking-widest">/ 3 Months</span>
</div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-start gap-4 text-sm font-medium text-[#111111]">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Everything in Starter
                        </li>
<li className="flex items-start gap-4 text-sm font-medium text-[#111111]">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Full Custom Meal Plans
                        </li>
<li className="flex items-start gap-4 text-sm font-medium text-[#111111]">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Weekly Video Check-ins
                        </li>
<li className="flex items-start gap-4 text-sm font-medium text-[#111111]">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            24/7 DM Support Access
                        </li>
</ul>
<a className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-center transition-all shadow-lg shadow-orange-500/20" href="#">Get Started</a>
</div>

<div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 flex flex-col hover:border-orange-500/30 transition-all">
<h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-4">Elite VIP</h3>
<div className="flex items-baseline gap-2 mb-10 border-b border-white/5 pb-10">
<span className="font-display text-6xl text-white tracking-tighter">$1.2K</span>
<span className="text-gray-500 text-sm font-light uppercase tracking-widest">/ 6 Months</span>
</div>
<ul className="space-y-5 mb-12 flex-1">
<li className="flex items-start gap-4 text-sm font-light text-gray-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Everything in Master
                        </li>
<li className="flex items-start gap-4 text-sm font-light text-gray-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Daily Accountability SMS
                        </li>
<li className="flex items-start gap-4 text-sm font-light text-gray-300">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            1x Live Virtual Workout
                        </li>
</ul>
<a className="w-full bg-white/10 hover:bg-white/20 text-white py-4 rounded-full text-xs font-semibold uppercase tracking-widest text-center transition-all" href="#">Apply Now</a>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-40" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-orange-500 text-xs font-semibold tracking-[0.3em] uppercase block mb-6">Expertise</span>
<h2 className="font-display text-5xl md:text-6xl text-[#111111] uppercase tracking-tighter leading-none">Frequently Asked.</h2>
</div>
<div className="space-y-4">
<details className="group border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:border-orange-500/30">
<summary className="flex justify-between items-center font-semibold cursor-pointer text-lg text-[#111111] outline-none tracking-tight">
<span>How quickly will I see results?</span>
<iconify-icon className="text-2xl transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-gray-500 mt-4 leading-relaxed font-light">
                        Most clients report feeling significantly better energy levels within 10 days. Visible body recomposition typically manifests between weeks 4 and 6, assuming consistent adherence to the protocol.
                    </div>
</details>
<details className="group border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:border-orange-500/30">
<summary className="flex justify-between items-center font-semibold cursor-pointer text-lg text-[#111111] outline-none tracking-tight">
<span>Do I need specific equipment?</span>
<iconify-icon className="text-2xl transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-gray-500 mt-4 leading-relaxed font-light">
                        No. I build the program around your environment. Whether you have a full commercial gym membership or just two dumbbells at home, we optimize the training for your reality.
                    </div>
</details>
<details className="group border border-gray-100 rounded-2xl p-6 transition-all duration-300 hover:border-orange-500/30">
<summary className="flex justify-between items-center font-semibold cursor-pointer text-lg text-[#111111] outline-none tracking-tight">
<span>What is the communication like?</span>
<iconify-icon className="text-2xl transition-transform duration-300 group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-gray-500 mt-4 leading-relaxed font-light">
                        We use a dedicated coaching app for all workouts and nutrition tracking. Bi-weekly video check-ins provide a space for deep tactical adjustments. I'm always available for urgent queries via the app's secure portal.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-orange-500 py-24 md:py-40 relative overflow-hidden" id="contact">

<div className="absolute -right-20 -bottom-20 font-display text-[20rem] text-orange-400 opacity-20 pointer-events-none select-none tracking-tighter">TRANSFORM</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-display text-6xl md:text-9xl text-white uppercase leading-none mb-10 tracking-tighter">
                Ready To Start <br/>Your Journey?
            </h2>
<p className="text-xl text-white/90 font-light mb-12 max-w-xl mx-auto">
                Stop guessing. Start performing. Book your free strategy call today.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-6">
<a className="bg-[#111111] text-white py-6 px-12 rounded-full text-xs font-semibold uppercase tracking-widest transition-all hover:bg-black hover:scale-105 shadow-2xl" href="#">
                    Book Discovery Call
                </a>
<a className="bg-white/10 backdrop-blur-md border border-white/20 text-white py-6 px-12 rounded-full text-xs font-semibold uppercase tracking-widest transition-all hover:bg-white/20" href="mailto:jason@jasonjoafit.com">
                    Send An Email
                </a>
</div>
</div>
</section>

<footer className="bg-[#0D0D0D] pt-24 pb-12 text-white/40 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-20">
<div className="max-w-sm">
<a className="font-display text-4xl text-white tracking-tighter mb-8 block uppercase" href="#">JASON JOA</a>
<p className="text-sm font-light leading-relaxed mb-10">
                        Performance coaching for the dedicated. We build physiques that match your ambition.
                    </p>
<div className="flex gap-6">
<a className="hover:text-orange-500 transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon></a>
<a className="hover:text-orange-500 transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:clapperboard-play-linear"></iconify-icon></a>
<a className="hover:text-orange-500 transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-20">
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-8">Navigation</h4>
<ul className="space-y-4 text-xs font-medium uppercase tracking-wider">
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-8">Programs</h4>
<ul className="space-y-4 text-xs font-medium uppercase tracking-wider">
<li><a className="hover:text-white transition-colors" href="#">Fat Loss</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hypertrophy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Longevity</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-white text-xs font-semibold uppercase tracking-widest mb-8">Newsletter</h4>
<form className="flex border-b border-white/20 pb-2">
<input className="bg-transparent text-white text-xs placeholder:text-white/20 grow outline-none" placeholder="YOUR EMAIL" type="email"/>
<button><iconify-icon className="text-white" icon="solar:arrow-right-linear"></iconify-icon></button>
</form>
</div>
</div>
</div>
<div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] font-semibold tracking-widest uppercase">
<p>© 2025 JASON JOA FITNESS. ALL RIGHTS RESERVED.</p>
<div className="flex gap-10">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
