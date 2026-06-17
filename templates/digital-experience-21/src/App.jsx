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
      

<nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="text-xl font-semibold tracking-tighter text-slate-900">
                BD<span className="text-orange-500">.</span>
</div>
<div className="hidden space-x-8 text-sm font-medium text-slate-600 lg:flex">
<a className="hover:text-slate-900" href="#">Work</a>
<a className="hover:text-slate-900" href="#">Services</a>
<a className="hover:text-slate-900" href="#">Process</a>
<a className="hover:text-slate-900" href="#">Impact</a>
</div>
<button className="rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-slate-800">
                Schedule Consultation
            </button>
</div>
</nav>

<section className="relative overflow-hidden pt-12 lg:pt-24 pb-20">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col gap-12 lg:flex-row lg:items-center">

<div className="w-full lg:w-[40%]">
<h1 className="font-['Montserrat'] text-4xl font-semibold leading-tight tracking-tight text-slate-900 lg:text-6xl">
                        Digital Experiences That Move Brands Forward
                    </h1>
<p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-md">
                        Strategic Web Design, Marketing &amp; Brand Execution for Growth-Focused Organizations.
                    </p>
<div className="mt-10 flex flex-wrap gap-4">
<button className="rounded-lg bg-slate-900 px-8 py-4 text-sm font-semibold text-white hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                            View Our Work
                        </button>
<button className="rounded-lg border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-all">
                            Learn Strategy
                        </button>
</div>
</div>

<div className="relative w-full lg:w-[60%] flex justify-center items-center h-[400px] lg:h-[500px]">
<div className="relative w-full h-full flex items-center justify-center">

<div className="absolute z-20 w-[80%] aspect-[16/10] bg-slate-800 rounded-xl p-2 device-shadow transform -translate-x-4">
<div className="w-full h-full bg-slate-100 rounded-lg overflow-hidden relative">
<img alt="Project Preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>
</div>

<div className="absolute z-30 right-0 bottom-4 w-[40%] aspect-[3/4] bg-slate-900 rounded-2xl p-1.5 device-shadow transform translate-x-4">
<div className="w-full h-full bg-slate-200 rounded-xl overflow-hidden">
<img alt="Mobile View" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 py-12">
<div className="mx-auto max-w-7xl px-6">
<p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">Trusted by Organizations Making Impact</p>
<div className="overflow-hidden relative">
<div className="logo-carousel">

<div className="flex items-center gap-16 px-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<span className="text-xl font-bold tracking-tighter">URBAN LEAGUE</span>
<span className="text-xl font-bold tracking-tighter">METRO CORP</span>
<span className="text-xl font-bold tracking-tighter">UNITY NONPROFIT</span>
<span className="text-xl font-bold tracking-tighter">VANTAGE</span>
<span className="text-xl font-bold tracking-tighter">GLOBAL REACH</span>
<span className="text-xl font-bold tracking-tighter">IMPACT LABS</span>
</div>
<div className="flex items-center gap-16 px-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<span className="text-xl font-bold tracking-tighter">URBAN LEAGUE</span>
<span className="text-xl font-bold tracking-tighter">METRO CORP</span>
<span className="text-xl font-bold tracking-tighter">UNITY NONPROFIT</span>
<span className="text-xl font-bold tracking-tighter">VANTAGE</span>
<span className="text-xl font-bold tracking-tighter">GLOBAL REACH</span>
<span className="text-xl font-bold tracking-tighter">IMPACT LABS</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F7F8FA] py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-16 text-center">
<h2 className="font-['Montserrat'] text-3xl font-semibold tracking-tight text-slate-900">What We Do</h2>
<div className="mx-auto mt-4 h-1 w-12 bg-orange-500"></div>
</div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-slate-900 transition-colors group-hover:bg-orange-50 group-hover:text-orange-600">
<iconify-icon icon="solar:globus-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900">Web Design &amp; Dev</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-500">High-performance corporate sites optimized for both user experience and conversion metrics.</p>
<a className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-orange-600" href="#">
                        Learn More <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group rounded-2xl bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-slate-900 transition-colors group-hover:bg-orange-50 group-hover:text-orange-600">
<iconify-icon icon="solar:graph-up-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900">Digital Strategy</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-500">Data-driven roadmaps designed to align your brand goals with measurable market outcomes.</p>
<a className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-orange-600" href="#">
                        Learn More <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group rounded-2xl bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-50 text-slate-900 transition-colors group-hover:bg-orange-50 group-hover:text-orange-600">
<iconify-icon icon="solar:letter-linear" style={{fontSize: '24px'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900">Email Marketing</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-500">Automated nurturing campaigns that drive industry-leading open rates and engagement.</p>
<a className="mt-6 flex items-center text-xs font-bold uppercase tracking-wider text-slate-900 group-hover:text-orange-600" href="#">
                        Learn More <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="font-['Montserrat'] text-3xl font-semibold tracking-tight text-slate-900">Featured Work</h2>
<p className="mt-2 text-slate-500">Selected projects for industry leaders.</p>
</div>
<div className="flex gap-2">
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 hover:bg-slate-50"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="no-scrollbar flex gap-8 overflow-x-auto pb-8">

<div className="min-w-[320px] lg:min-w-[450px] group">
<div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
<img alt="ImpactLearn" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1481487196290-c152efe083f5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-900 backdrop-blur-md">Launching Soon</div>
</div>
<div className="mt-6">
<div className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Education Tech</div>
<h4 className="mt-1 text-xl font-semibold text-slate-900">ImpactLearn Platform</h4>
<p className="mt-2 text-sm text-slate-500">Reimagining digital literacy for underserved communities.</p>
</div>
</div>

<div className="min-w-[320px] lg:min-w-[450px] group">
<div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
<img alt="Urban League" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="mt-6">
<div className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Nonprofit</div>
<h4 className="mt-1 text-xl font-semibold text-slate-900">Urban League Portal</h4>
<p className="mt-2 text-sm text-slate-500">+42% increase in community member engagement.</p>
</div>
</div>

<div className="min-w-[320px] lg:min-w-[450px] group">
<div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
<img alt="Corporate Branding" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="mt-6">
<div className="text-xs font-semibold text-orange-500 uppercase tracking-widest">Corporate</div>
<h4 className="mt-1 text-xl font-semibold text-slate-900">Vantage Global Strategy</h4>
<p className="mt-2 text-sm text-slate-500">Full digital identity and lead-gen optimization.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-t border-slate-100">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-16 lg:grid-cols-2 lg:items-center">
<div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="rounded-xl bg-slate-50 p-6 border border-slate-100">
<div className="text-3xl font-semibold text-slate-900 font-['Montserrat'] tracking-tight">+42%</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Social Engagement</div>
</div>
<div className="rounded-xl bg-slate-900 p-6 text-white shadow-xl">
<div className="text-3xl font-semibold font-['Montserrat'] tracking-tight">3x</div>
<div className="text-xs font-medium text-slate-300 uppercase tracking-wider mt-1">Lead Generation</div>
</div>
</div>
<div className="pt-8 space-y-4">
<div className="rounded-xl bg-orange-500 p-6 text-white shadow-xl shadow-orange-100">
<div className="text-3xl font-semibold font-['Montserrat'] tracking-tight">30%</div>
<div className="text-xs font-medium text-white/80 uppercase tracking-wider mt-1">Email Open Rate</div>
</div>
<div className="rounded-xl bg-slate-50 p-6 border border-slate-100">
<div className="text-3xl font-semibold text-slate-900 font-['Montserrat'] tracking-tight">12+</div>
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1">Award Mentions</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="font-['Montserrat'] text-3xl font-semibold tracking-tight text-slate-900">Results-Driven Execution</h2>
<p className="mt-6 text-lg text-slate-500 leading-relaxed">
                        Corporate clients care about metrics. We don't just design for aesthetics; we design for performance. Our marketing strategies have consistently outperformed industry benchmarks.
                    </p>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Real-time performance dashboards
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Advanced A/B testing frameworks
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-orange-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Comprehensive ROI reporting
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-4xl px-6 text-center">
<h2 className="font-['Montserrat'] text-3xl font-semibold tracking-tight text-slate-900 lg:text-4xl">Strategy First. Design That Performs.</h2>
<div className="mt-10 space-y-6 text-lg leading-relaxed text-slate-500">
<p>We operate at the intersection of high-level brand strategy and technical excellence. Our approach is rooted in understanding the organizational objectives before a single pixel is moved.</p>
<p>Whether scaling a nonprofit's reach or revitalizing a lifestyle brand's digital presence, our methodology remains consistent: data leads the way, and design gives it a voice.</p>
</div>
<div className="mt-12 flex flex-col items-center">
<div className="h-16 w-16 overflow-hidden rounded-full border-2 border-orange-500 p-1">
<img alt="Director" className="h-full w-full rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div className="mt-4 text-sm font-semibold text-slate-900">Digital Strategy Director</div>
<div className="text-xs text-slate-400">Leadership &amp; Vision</div>
</div>
</div>
</section>

<section className="bg-white py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="relative">
<div className="text-6xl font-bold text-slate-50 absolute -top-8 left-0 z-0">01</div>
<div className="relative z-10 pt-4">
<h4 className="font-semibold text-slate-900 uppercase tracking-widest text-xs mb-2">Discovery</h4>
<p className="text-sm text-slate-500">Uncovering organizational goals and audience insights.</p>
</div>
</div>
<div className="relative">
<div className="text-6xl font-bold text-slate-50 absolute -top-8 left-0 z-0">02</div>
<div className="relative z-10 pt-4">
<h4 className="font-semibold text-slate-900 uppercase tracking-widest text-xs mb-2">Strategy</h4>
<p className="text-sm text-slate-500">Mapping the digital roadmap for long-term growth.</p>
</div>
</div>
<div className="relative">
<div className="text-6xl font-bold text-slate-50 absolute -top-8 left-0 z-0">03</div>
<div className="relative z-10 pt-4">
<h4 className="font-semibold text-slate-900 uppercase tracking-widest text-xs mb-2">Execution</h4>
<p className="text-sm text-slate-500">Precision design and development with focus on UI/UX.</p>
</div>
</div>
<div className="relative">
<div className="text-6xl font-bold text-slate-50 absolute -top-8 left-0 z-0">04</div>
<div className="relative z-10 pt-4">
<h4 className="font-semibold text-slate-900 uppercase tracking-widest text-xs mb-2">Optimization</h4>
<p className="text-sm text-slate-500">Iterative improvements based on real-world data.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="grid grid-cols-2 gap-4">
<img alt="Team Work" className="rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<img alt="Community" className="mt-8 rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
<div className="lg:w-1/2">
<div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-bold uppercase tracking-widest mb-6">Social Responsibility</div>
<h2 className="font-['Montserrat'] text-3xl font-semibold tracking-tight text-slate-900">Building for a More Inclusive Future</h2>
<p className="mt-6 text-slate-500 leading-relaxed">
                        Our work with organizations like the Urban League and various nonprofits is rooted in the belief that digital excellence should be accessible to all. We specialize in creating platforms that bridge the gap between community needs and organizational resources.
                    </p>
<div className="mt-8 flex gap-8">
<div>
<div className="text-xl font-bold text-slate-900">100%</div>
<div className="text-xs text-slate-500 font-medium">ADA Compliant</div>
</div>
<div>
<div className="text-xl font-bold text-slate-900">Diverse</div>
<div className="text-xs text-slate-500 font-medium">Talent Pipeline</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0F172A] py-24 text-center">
<div className="mx-auto max-w-7xl px-6">
<h2 className="font-['Montserrat'] text-3xl font-semibold tracking-tight text-white lg:text-5xl">Ready to Elevate Your Digital Presence?</h2>
<p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">Join the forward-thinking organizations scaling their impact through strategic design.</p>
<div className="mt-12">
<button className="group relative inline-flex items-center gap-2 rounded-full bg-orange-500 px-10 py-5 text-sm font-semibold text-white transition-all hover:bg-orange-600 shadow-xl shadow-orange-900/20">
                    Schedule a Strategy Call
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:calendar-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="border-t border-slate-100 py-12">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
<div className="text-xl font-semibold tracking-tighter text-slate-900">BD<span className="text-orange-500">.</span></div>
<div className="flex gap-8 text-xs font-medium text-slate-500 uppercase tracking-widest">
<a className="hover:text-slate-900" href="#">Privacy Policy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">LinkedIn</a>
<a className="hover:text-slate-900" href="#">Instagram</a>
</div>
<p className="text-xs text-slate-400">© 2024 Beautifuli Digital. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
