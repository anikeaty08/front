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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
red: '#DC2626',
blue: '#1D4ED8',
green: '#15803D',
dark: '#0F172A',
}
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<nav className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-white/80 border-slate-200">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-2">

<div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br shadow-sm from-orange-600 to-blue-600">
<div className="absolute top-0 h-3 w-3 rounded-full blur-[1px] bg-blue-400"></div>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-tight text-slate-900">PATHWAY TO</span>
<span className="text-sm font-semibold tracking-tight text-orange-600">POSSIBILITIES</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-slate-900" href="#about">Who We Are</a>
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-slate-900" href="#projects">What We Do</a>
<a className="text-sm font-medium transition-colors text-slate-500 hover:text-slate-900" href="#partner">Join Us</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-transform hover:scale-105 text-white bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/10" href="#donate">
<span>Donate</span>
<iconify-icon height="16" icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden p-2 text-slate-500">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="overflow-hidden pt-20 pb-24 relative" id="home">
<div className="mx-auto max-w-7xl px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-8 border-blue-200 bg-blue-50 text-blue-700">
<span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                Based in Milton Keynes &amp; Buckinghamshire
            </div>
<h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl text-slate-900">
                From vulnerability to <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-600 via-blue-600">endless possibility.</span>
</h1>
<p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-slate-500 leading-relaxed">
                Pathway to Possibilities is a dedicated humanitarian initiative committed to transforming lives through targeted, high-impact projects that address inequality, vulnerability, and social exclusion.
            </p>
<div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-medium transition-all shadow-lg text-white bg-orange-600 hover:bg-orange-700 shadow-orange-600/20" href="#projects">
                    View Our Projects
                    <iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 transition-all hover:border-slate-300 hover:bg-slate-50 text-base font-medium text-slate-700 bg-white border-slate-200 border rounded-lg pt-3 pr-6 pb-3 pl-6" href="#about">
                    Who We Are
                </a>
</div>
</div>

<div className="absolute top-0 -z-10 h-full w-full bg-white">
<div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full opacity-40 blur-[80px] bg-orange-100"></div>
<div className="absolute bottom-0 left-0 right-auto top-auto h-[500px] w-[500px] translate-x-[10%] -translate-y-[20%] rounded-full opacity-40 blur-[80px] bg-blue-50"></div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-white" id="about">
<div className="mx-auto max-w-7xl px-6">

<div className="mx-auto max-w-3xl text-center mb-20">
<h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-slate-900 mb-6">Who We Are</h2>
<p className="text-lg text-slate-500 leading-relaxed">
<strong className="text-slate-900 font-medium">Pathway to Possibilities</strong> is a humanitarian initiative committed to transforming lives by addressing inequality, vulnerability, and social exclusion. Based in <strong className="text-slate-900 font-medium">Milton Keynes and Buckinghamshire</strong>, we work locally in the UK and internationally in <strong className="text-slate-900 font-medium">The Gambia</strong>, supporting individuals at critical stages of life to move from adversity to opportunity.
                </p>
</div>

<div className="grid md:grid-cols-2 gap-8 mb-24">
<div className="rounded-2xl border p-8 bg-orange-50/50 border-orange-100">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Our Mission</h3>
<p className="text-slate-600 leading-relaxed">
                        To empower vulnerable individuals and communities through trauma‑informed support, education, advocacy, and practical care—creating clear pathways from hardship to possibility.
                    </p>
</div>
<div className="rounded-2xl border p-8 bg-blue-50/50 border-blue-100">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
<iconify-icon height="24" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Our Vision</h3>
<p className="text-slate-600 leading-relaxed">
                        A world where every girl, child, and older person lives free from harm, poverty, and neglect, with access to safety, opportunity, and dignity.
                    </p>
</div>
</div>

<div className="mb-24">
<h3 className="text-2xl font-semibold text-slate-900 mb-10">Our Values</h3>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="flex flex-col gap-3">
<div className="text-orange-600">
<iconify-icon height="28" icon="solar:medal-ribbon-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900">Dignity First</h4>
<p className="text-sm text-slate-500 leading-relaxed">We respect the inherent worth of every individual and place dignity at the heart of everything we do.</p>
</div>

<div className="flex flex-col gap-3">
<div className="text-blue-600">
<iconify-icon height="28" icon="solar:heart-angle-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900">Compassion in Action</h4>
<p className="text-sm text-slate-500 leading-relaxed">We respond to suffering with empathy, cultural sensitivity, and practical solutions.</p>
</div>

<div className="flex flex-col gap-3">
<div className="text-green-600">
<iconify-icon height="28" icon="solar:star-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900">Empowerment</h4>
<p className="text-sm text-slate-500 leading-relaxed">We focus on building confidence, skills, and independence rather than dependency.</p>
</div>

<div className="flex flex-col gap-3">
<div className="text-slate-600">
<iconify-icon height="28" icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900">Integrity &amp; Accountability</h4>
<p className="text-sm text-slate-500 leading-relaxed">We are transparent, ethical, and responsible in how we serve communities and manage resources.</p>
</div>

<div className="flex flex-col gap-3">
<div className="text-purple-600">
<iconify-icon height="28" icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900">Collaboration</h4>
<p className="text-sm text-slate-500 leading-relaxed">We work in partnership with communities, professionals, and organisations to achieve lasting impact.</p>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-16">

<div className="">
<h3 className="text-2xl font-semibold text-slate-900 mb-6">Where We Work</h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="shrink-0 mt-1">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xs font-bold">UK</span>
</div>
<div className="">
<h4 className="font-semibold text-slate-900">United Kingdom</h4>
<p className="text-slate-500 mt-1">Supporting girls and young women affected by FGM, with a focus on safeguarding, recovery, and empowerment.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 mt-1">
<span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-orange-600 text-xs font-bold">GM</span>
</div>
<div className="">
<h4 className="font-semibold text-slate-900">The Gambia</h4>
<p className="text-slate-500 mt-1">Partnering with local communities to support children, young people, and older adults facing poverty and social exclusion.</p>
</div>
</div>
</div>
</div>

<div className="">
<h3 className="text-2xl font-semibold text-slate-900 mb-6">Our Approach</h3>
<ul className="grid sm:grid-cols-2 gap-6">
<li className="rounded-xl border p-4 border-slate-200 hover:bg-slate-50 transition-colors">
<div className="text-slate-900 font-semibold mb-1 flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:heart-pulse-linear"></iconify-icon> Trauma‑Informed
                            </div>
<p className="text-xs text-slate-500">Promoting safety, trust, and healing.</p>
</li>
<li className="rounded-xl border p-4 border-slate-200 hover:bg-slate-50 transition-colors">
<div className="text-slate-900 font-semibold mb-1 flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:users-group-rounded-linear"></iconify-icon> Community‑Led
                            </div>
<p className="text-xs text-slate-500">Interventions tailored to real needs.</p>
</li>
<li className="rounded-xl border p-4 border-slate-200 hover:bg-slate-50 transition-colors">
<div className="text-slate-900 font-semibold mb-1 flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:pie-chart-2-linear"></iconify-icon> Holistic
                            </div>
<p className="text-xs text-slate-500">Addressing emotional, social &amp; practical needs.</p>
</li>
<li className="rounded-xl border p-4 border-slate-200 hover:bg-slate-50 transition-colors">
<div className="text-slate-900 font-semibold mb-1 flex items-center gap-2">
<iconify-icon className="text-teal-500" icon="solar:leaf-linear"></iconify-icon> Sustainable
                            </div>
<p className="text-xs text-slate-500">Building skills, resilience, and local capacity.</p>
</li>
</ul>
</div>
</div>

<div className="rounded-2xl bg-slate-900 p-8 text-white relative overflow-hidden">
<div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
<div className="shrink-0 h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-semibold text-white">Safeguarding &amp; Accountability</h4>
<p className="mt-2 text-slate-300 text-sm max-w-3xl leading-relaxed">
                            The safety and wellbeing of those we support is our highest priority. We operate robust safeguarding policies, particularly when working with children, survivors of abuse, and vulnerable adults. Our work is guided by ethical practice, confidentiality, and accountability at every level.
                        </p>
</div>
</div>

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl"></div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="projects">
<div className="mx-auto max-w-7xl px-6 relative z-10">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-slate-900">What We Do</h2>
<p className="mt-4 text-lg text-slate-500">We deliver targeted support through three core projects designed to address urgent needs while fostering long‑term resilience.</p>
</div>
<div className="grid gap-8 lg:grid-cols-3">

<div className="group relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
<iconify-icon height="24" icon="solar:shield-user-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900">Life After FGM (UK)</h3>
<p className="mt-4 flex-1 text-base leading-relaxed text-slate-500">
                        A specialist project supporting <strong>girls and young women affected by Female Genital Mutilation</strong>. We provide trauma‑informed counselling, advocacy, and life‑skills development to help survivors heal, rebuild confidence, and navigate the long‑term physical, emotional, and social impacts of FGM.
                    </p>
<div className="mt-8 pt-6 border-t border-slate-100">
<span className="inline-flex items-center text-sm font-medium text-orange-600 group-hover:text-orange-700">
                            Learn more <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>

<div className="group relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
<iconify-icon height="24" icon="solar:book-bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900">Gambia Youth Support</h3>
<p className="mt-4 flex-1 text-base leading-relaxed text-slate-500">
                        A sponsorship‑based initiative focused on <strong>breaking the cycle of poverty through education</strong>. We support disadvantaged children and orphans by providing access to schooling, nutritious food, clothing, and essential healthcare—enabling them to reach their full potential.
                    </p>
<div className="mt-8 pt-6 border-t border-slate-100">
<span className="inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-700">
                            Learn more <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>

<div className="group relative flex flex-col rounded-2xl border p-8 transition-all hover:-translate-y-1 bg-white border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
<iconify-icon height="24" icon="solar:user-heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900">Gambia Elder Care</h3>
<p className="mt-4 flex-1 text-base leading-relaxed text-slate-500">
                        A compassionate response to the lack of social support for <strong>older people living in poverty</strong>. This project provides daily practical assistance, wellness support, and advocacy to help elderly individuals live safely, comfortably, and with dignity.
                    </p>
<div className="mt-8 pt-6 border-t border-slate-100">
<span className="inline-flex items-center text-sm font-medium text-teal-600 group-hover:text-teal-700">
                            Learn more <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 border-t border-b border-slate-200 bg-white" id="partner">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium mb-6 border-slate-200 bg-slate-50 text-slate-600">
                        Join Us
                    </div>
<h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-slate-900">Partner with Purpose</h2>
<p className="mt-6 text-lg text-slate-500">
                        Pathway to Possibilities exists because of the commitment of compassionate supporters, partners, and volunteers. Together, we are creating meaningful change—one life, one family, and one community at a time.
                    </p>
<p className="mt-4 text-base font-medium italic text-slate-900">
                        "Every journey begins with a pathway. Every future holds possibility."
                    </p>
<div className="mt-10 grid gap-6 sm:grid-cols-2">

<div className="rounded-xl border p-6 border-slate-200 bg-slate-50/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg shadow-sm border bg-white border-slate-100 text-orange-600">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Community Focused</h3>
<p className="mt-2 text-base text-slate-500">Local roots in Bucks with international reach.</p>
</div>

<div className="rounded-xl border p-6 border-slate-200 bg-slate-50/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg shadow-sm border bg-white border-slate-100 text-blue-600">
<iconify-icon height="20" icon="solar:globe-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Global Impact</h3>
<p className="mt-2 text-base text-slate-500">Bridging the UK and The Gambia.</p>
</div>

<div className="rounded-xl border p-6 border-slate-200 bg-slate-50/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg shadow-sm border bg-white border-slate-100 text-blue-600">
<iconify-icon height="20" icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">Track Your Impact</h3>
<p className="mt-2 text-base text-slate-500">See exactly how your support helps.</p>
</div>

<div className="rounded-xl border p-6 border-slate-200 bg-slate-50/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg shadow-sm border bg-white border-slate-100 text-blue-600">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-slate-900">100% Transparent</h3>
<p className="mt-2 text-base text-slate-500">Accountability in every project.</p>
</div>
</div>
</div>
<div className="flex flex-col gap-8">
<div className="rounded-2xl border p-8 shadow-sm bg-white border-slate-200">
<h3 className="text-xl font-semibold text-slate-900">Ways to Partner</h3>
<div className="mt-6 space-y-6">
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
<iconify-icon height="20" icon="solar:hand-money-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Donate</h4>
<p className="mt-1 text-base text-slate-500">Provide essential resources and fuel our programs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
<iconify-icon height="20" icon="solar:hand-shake-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Volunteer</h4>
<p className="mt-1 text-base text-slate-500">Share your time and skills with us.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
<iconify-icon height="20" icon="solar:city-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Corporate Partnerships</h4>
<p className="mt-1 text-base text-slate-500">Demonstrate your company's commitment to social responsibility.</p>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between rounded-2xl border p-6 border-slate-200 bg-slate-50">
<div className="flex items-center gap-4">
<div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200 flex items-center justify-center text-slate-400">
<iconify-icon height="48" icon="solar:user-circle-bold" width="48"></iconify-icon>
</div>
<div>
<p className="font-medium text-slate-900">Partnerships Team</p>
<p className="text-sm text-slate-500">Based in Milton Keynes</p>
</div>
</div>
<a className="rounded-md px-4 py-2 text-sm font-medium shadow-sm ring-1 bg-white text-slate-700 ring-slate-900/5 hover:bg-slate-50" href="#">
                            Contact Us
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="border-b py-24 border-slate-100 bg-white" id="podcast">
<div className="mx-auto max-w-7xl px-6 text-center">
<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg from-blue-500 shadow-blue-500/20 to-blue-600">
<iconify-icon className="text-white" height="32" icon="solar:microphone-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-slate-900">Voices of Possibility</h2>
<p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
                Listen to inspiring stories of resilience from our beneficiaries in the UK and The Gambia.
            </p>
<div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border shadow-sm bg-white border-slate-200">
<div className="flex flex-col items-center gap-6 p-8 sm:flex-row">
<div className="h-24 w-24 shrink-0 rounded-lg sm:h-32 sm:w-32 bg-slate-100 border border-slate-200">
<div className="flex h-full w-full items-center justify-center text-slate-300">
<iconify-icon height="32" icon="solar:music-note-linear" width="32"></iconify-icon>
</div>
</div>
<div className="flex-1 text-center sm:text-left">
<div className="text-xs font-medium uppercase tracking-wider text-orange-600">Latest Episode</div>
<h3 className="mt-1 text-xl font-medium text-slate-900">Empowering Girls in the UK</h3>
<p className="mt-2 text-sm text-slate-500">A discussion on the Life After FGM project and the importance of trauma-informed care.</p>
<div className="mt-4 flex items-center justify-center gap-4 sm:justify-start">
<button className="flex h-10 w-10 items-center justify-center rounded-full text-white bg-slate-900 hover:bg-slate-800">
<iconify-icon height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</button>
<div className="h-1 w-full max-w-[200px] rounded-full bg-slate-100">
<div className="h-full w-1/3 rounded-full bg-blue-500"></div>
</div>
<span className="text-xs font-medium text-slate-500">18:30</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="shop">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Support the Cause</h2>
<a className="hidden text-sm font-medium md:block text-orange-600 hover:text-orange-700" href="#">View all products →</a>
</div>
<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative rounded-2xl border p-2 transition-all hover:shadow-md bg-white border-slate-200 hover:border-slate-300">
<div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
<div className="flex h-full w-full items-center justify-center text-slate-300">
<iconify-icon height="48" icon="solar:cup-hot-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="font-medium text-slate-900">Possibilities Mug</h3>
<p className="mt-1 text-sm text-slate-500">Start your day with impact.</p>
</div>
<span className="rounded-full px-2.5 py-0.5 text-sm font-medium bg-slate-100 text-slate-600">£12</span>
</div>
<button className="mt-4 w-full rounded-lg py-2.5 text-sm font-medium transition-colors text-white bg-slate-900 hover:bg-slate-800">
                            Add to Cart
                        </button>
</div>
</div>

<div className="group relative rounded-2xl border p-2 transition-all hover:shadow-md bg-white border-slate-200 hover:border-slate-300">
<div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
<div className="flex h-full w-full items-center justify-center text-slate-300">
<iconify-icon height="48" icon="solar:t-shirt-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div>
<h3 className="font-medium text-slate-900">Supporter T-Shirt</h3>
<p className="mt-1 text-sm text-slate-500">Soft, sustainable cotton.</p>
</div>
<span className="rounded-full px-2.5 py-0.5 text-sm font-medium bg-slate-100 text-slate-600">£20</span>
</div>
<button className="mt-4 w-full rounded-lg py-2.5 text-sm font-medium transition-colors text-white bg-slate-900 hover:bg-slate-800">
                            Add to Cart
                        </button>
</div>
</div>

<div className="group relative rounded-2xl border p-2 transition-all hover:shadow-md bg-white border-slate-200 hover:border-slate-300">
<div className="aspect-square w-full overflow-hidden rounded-xl bg-slate-50">
<div className="flex h-full w-full items-center justify-center text-slate-300">
<iconify-icon height="48" icon="solar:cloud-linear" width="48"></iconify-icon>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between">
<div className="">
<h3 className="font-medium text-slate-900 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc6461a8-5227-42d7-b4ea-11b1eb4a6ef9_800w.webp)] bg-cover bg-center">Impact Hoodie</h3>
<p className="mt-1 text-sm text-slate-500">Warmth for a great cause.</p>
</div>
<span className="rounded-full px-2.5 py-0.5 text-sm font-medium bg-slate-100 text-slate-600">£35</span>
</div>
<button className="mt-4 w-full rounded-lg py-2.5 text-sm font-medium transition-colors text-white bg-slate-900 hover:bg-slate-800">
                            Add to Cart
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-slate-200 border-t pt-24 pb-12" id="footer">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid gap-16 lg:grid-cols-2">
<div className="">
<div className="flex items-center gap-2 mb-6">
<div className="h-6 w-6 rounded-full bg-gradient-to-br from-orange-600 to-blue-600"></div>
<span className="font-semibold text-slate-900">Pathway to Possibilities</span>
</div>
<p className="text-lg text-slate-500 max-w-md">
                        Based in Milton Keynes and Buckinghamshire. Empowering individuals at critical stages of life to move from vulnerability to possibility.
                    </p>
<form className="mt-8 flex max-w-md gap-2">
<input className="w-full rounded-lg border px-4 py-2.5 text-base shadow-sm outline-none focus:ring-1 focus:border-orange-500 focus:ring-orange-500 bg-white border-slate-200" placeholder="your.email@example.com" required="" type="email"/>
<button className="rounded-lg px-6 py-2.5 text-base font-medium shadow-sm text-white bg-slate-900 hover:bg-slate-800" type="submit">Join</button>
</form>
</div>
<div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
<div className="">
<h3 className="font-medium text-slate-900">Organization</h3>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-base text-slate-500 hover:text-slate-900" href="#about">Who We Are</a></li>
<li className=""><a className="text-base text-slate-500 hover:text-slate-900" href="#about">Our Mission</a></li>
<li className=""><a className="text-base text-slate-500 hover:text-slate-900" href="#about">Transparency</a></li>
<li className=""><a className="text-base text-slate-500 hover:text-slate-900" href="#partner">Contact</a></li>
</ul>
</div>
<div className="">
<h3 className="font-medium text-slate-900">Projects</h3>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-base text-slate-500 hover:text-slate-900" href="#projects">Life After FGM</a></li>
<li className=""><a className="text-base text-slate-500 hover:text-slate-900" href="#projects">Gambia Youth</a></li>
<li className=""><a className="text-base text-slate-500 hover:text-slate-900" href="#projects">Gambia Elder Care</a></li>
</ul>
</div>
<div className="">
<h3 className="font-medium text-slate-900">Social</h3>
<ul className="mt-4 space-y-3">
<li className=""><a className="hover:text-slate-900 text-base text-slate-500 rotate-x-10 rotate-y-10" href="#">Twitter</a></li>
<li className=""><a className="text-base text-slate-500 hover:text-slate-900" href="#">Instagram</a></li>
<li className=""><a className="hover:text-slate-900 text-base text-slate-500" href="#">LinkedIn</a><a className="hover:text-slate-900 text-base text-slate-500" href="#">LinkedIn</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-24 border-t pt-8 text-center sm:text-left border-slate-200">
<p className="text-sm text-slate-400">© 2024 Pathway to Possibilities Foundation. All rights reserved. Registered Charity in England &amp; Wales.</p>
</div>
</div>
</footer>

    </>
  );
}
