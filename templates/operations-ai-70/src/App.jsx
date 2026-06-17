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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
},
teal: {
450: '#14b8a6',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="vTTCp5g4cVl9nwjlT56Z"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-black/80 border-emerald-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex-shrink-0 flex items-center gap-3">
<a className="flex items-center gap-3 text-lg font-semibold text-emerald-100 tracking-tight" href="#">

<svg className="w-[32px] h-[32px] text-emerald-500" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="7" style={{width: '32px', height: '32px'}} viewbox="0 0 100 100">
<path className="" d="M 44 10 L 44 38 Q 44 46 36 46 L 5 46"></path>
<path className="" d="M 44 10 Q 34 6 26 12" strokeWidth="6"></path>
<path className="" d="M 56 10 L 56 38 Q 56 46 64 46 L 95 46"></path>
<path className="" d="M 56 10 Q 66 6 74 12" strokeWidth="6"></path>
<path className="" d="M 5 54 L 44 54 L 44 95 A 45 45 0 0 1 5 54"></path>
<path className="" d="M 95 54 L 56 54 L 56 95 A 45 45 0 0 0 95 54"></path>
</svg>
    DONE DIGGING
</a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-emerald-500 transition-colors hover:text-emerald-100" href="#services">Services</a>
<a className="text-sm font-medium text-emerald-500 transition-colors hover:text-emerald-100" href="#how-it-works">How It Works</a>
<a className="text-sm font-medium text-emerald-500 transition-colors hover:text-emerald-100" href="#about">About</a>
<a className="px-4 py-2 rounded-md text-sm font-medium transition-colors bg-emerald-100 text-black hover:bg-emerald-200" href="#contact">Contact</a>
</div>

<div className="md:hidden">
<a className="text-sm font-medium text-cyan-400" href="https://calendly.com/jonah-donedigging/call-with-jonah-tulmau" target="_blank">Book Call</a>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-20 lg:pt-40 lg:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-medium text-emerald-100 tracking-tighter mb-6">
                Stop guessing. <br/>
<span className="text-emerald-600">Build systems that scale.</span>
</h1>
<p className="text-lg sm:text-xl text-emerald-500 mb-10 leading-relaxed max-w-2xl font-light">
                Done Digging LLC helps founders and teams turn messy operations into repeatable processes—then automate the boring parts with AI.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex justify-center items-center px-6 py-3 rounded-md font-medium text-sm transition-all shadow-sm hover:shadow-md bg-cyan-400 text-black hover:bg-cyan-300" href="https://calendly.com/jonah-donedigging/call-with-jonah-tulmau" target="_blank">
                    Book a Discovery Call
                </a>
</div>

<div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-emerald-900">
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0 text-cyan-400" icon="lucide:hammer" width="18"></iconify-icon>
<span className="text-sm leading-snug text-emerald-400">Operational foundations + execution support</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0 text-cyan-400" icon="lucide:file-text" width="18"></iconify-icon>
<span className="text-sm leading-snug text-emerald-400">Process design, documentation, and enablement</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0 text-cyan-400" icon="lucide:bot" width="18"></iconify-icon>
<span className="text-sm leading-snug text-emerald-400">AI automation models that actually ship</span>
</div>
</div>
</div>
</section>

<section className="py-20 border-y bg-emerald-950 border-emerald-800" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-3 text-emerald-100">Services</h2>
<p className="text-emerald-500">Pick the engagement that matches where you are right now.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-lg border hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all group flex flex-col h-full bg-black border-emerald-800">
<div className="w-10 h-10 rounded-md flex items-center justify-center mb-5 group-hover:bg-cyan-50 transition-colors bg-emerald-900">
<iconify-icon className="group-hover:text-cyan-600 text-emerald-300" icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-emerald-100">Bootstrap Operations</h3>
<p className="text-xs font-medium mb-4 uppercase tracking-wider text-cyan-400">For Early-Stage Teams</p>
<p className="text-sm text-emerald-500 mb-6 flex-grow">Rapidly establish clarity, consistency, and accountability.</p>
<div className="pt-6 border-t mt-auto border-emerald-900">
<ul className="space-y-3">
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                Operating rhythm &amp; priorities
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                KPI/Metrics dashboards
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                Tool stack cleanup
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                SOP starter pack
                            </li>
</ul>
</div>
</div>

<div className="p-6 rounded-lg border hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all group flex flex-col h-full bg-black border-emerald-800">
<div className="w-10 h-10 rounded-md flex items-center justify-center mb-5 group-hover:bg-cyan-50 transition-colors bg-emerald-900">
<iconify-icon className="group-hover:text-cyan-600 text-emerald-300" icon="lucide:git-merge" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-emerald-100">Process Building</h3>
<p className="text-xs font-medium mb-4 uppercase tracking-wider text-cyan-400">For Scaling Ops</p>
<p className="text-sm text-emerald-500 mb-6 flex-grow">Remove bottlenecks, reduce rework, and smooth out handoffs.</p>
<div className="pt-6 border-t mt-auto border-emerald-900">
<ul className="space-y-3">
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                Process mapping
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                SOPs &amp; Checklists
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                Role clarity &amp; Handoffs
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                QA &amp; Feedback loops
                            </li>
</ul>
</div>
</div>

<div className="p-6 rounded-lg border hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all group flex flex-col h-full bg-black border-emerald-800">
<div className="w-10 h-10 rounded-md flex items-center justify-center mb-5 group-hover:bg-cyan-50 transition-colors bg-emerald-900">
<iconify-icon className="group-hover:text-cyan-600 text-emerald-300" icon="lucide:rocket" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-emerald-100">Startup Creation</h3>
<p className="text-xs font-medium mb-4 uppercase tracking-wider text-cyan-400">0 → 1 Validation</p>
<p className="text-sm text-emerald-500 mb-6 flex-grow">Validate fast, build smart, and launch with clear direction.</p>
<div className="pt-6 border-t mt-auto border-emerald-900">
<ul className="space-y-3">
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                Idea validation plan
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                MVP scope &amp; Roadmap
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                GTM Basics (Offer/Pricing)
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                Launch execution support
                            </li>
</ul>
</div>
</div>

<div className="p-6 rounded-lg border hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/5 transition-all group flex flex-col h-full bg-black border-emerald-800">
<div className="w-10 h-10 rounded-md flex items-center justify-center mb-5 group-hover:bg-cyan-50 transition-colors bg-emerald-900">
<iconify-icon className="group-hover:text-cyan-600 text-emerald-300" icon="lucide:bot-message-square" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-2 text-emerald-100">AI Agency Models</h3>
<p className="text-xs font-medium mb-4 uppercase tracking-wider text-cyan-400">Automation</p>
<p className="text-sm text-emerald-500 mb-6 flex-grow">Automate repetitive work, speed up delivery, reduce overhead.</p>
<div className="pt-6 border-t mt-auto border-emerald-900">
<ul className="space-y-3">
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                AI Workflow Design
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                Automations (Zapier/Make)
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                Agent Playbooks
                            </li>
<li className="flex items-start gap-2 text-xs text-emerald-400">
<iconify-icon className="flex-shrink-0 mt-0.5 text-cyan-400" icon="lucide:check" width="14"></iconify-icon>
                                Governance &amp; Quality
                            </li>
</ul>
</div>
</div>
</div>

<div className="mt-12 text-center">
<span className="text-sm text-emerald-500 mr-3">Not sure which one fits?</span>
<a className="text-sm font-medium hover:underline text-cyan-400 hover:text-cyan-300" href="#contact">Tell me what you’re building →</a>
</div>
</div>
</section>

<section className="py-20 bg-black" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-12 text-center text-emerald-100">How We Work</h2>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] -z-10 bg-emerald-900"></div>

<div className="relative pt-4 md:text-center group bg-black">
<div className="w-16 h-16 rounded-full border flex items-center justify-center font-semibold text-xl mb-6 shadow-sm mx-auto z-10 bg-black border-emerald-800 text-emerald-100">1</div>
<h3 className="text-lg font-medium mb-2 text-emerald-100">Diagnose</h3>
<p className="text-sm text-emerald-500 leading-relaxed max-w-xs mx-auto">We dig into your current reality: constraints, workflows, goals, and bottlenecks.</p>
</div>

<div className="relative pt-4 md:text-center group bg-black">
<div className="w-16 h-16 rounded-full border flex items-center justify-center font-semibold text-xl mb-6 shadow-sm mx-auto z-10 bg-black border-emerald-800 text-emerald-100">2</div>
<h3 className="text-lg font-medium mb-2 text-emerald-100">Design</h3>
<p className="text-sm text-emerald-500 leading-relaxed max-w-xs mx-auto">We design the system: processes, responsibilities, tools, and automations.</p>
</div>

<div className="relative pt-4 md:text-center group bg-black">
<div className="w-16 h-16 rounded-full border flex items-center justify-center font-semibold text-xl mb-6 shadow-sm mx-auto z-10 bg-black border-emerald-800 text-emerald-100">3</div>
<h3 className="text-lg font-medium mb-2 text-emerald-100">Implement</h3>
<p className="text-sm text-emerald-500 leading-relaxed max-w-xs mx-auto">We ship: documentation + training + hands-on build support.</p>
</div>
</div>
<div className="mt-16 border rounded-lg p-6 text-center max-w-3xl mx-auto bg-emerald-950 border-emerald-900">
<p className="text-sm font-medium text-emerald-300">
<iconify-icon className="inline-block mr-2 relative top-[2px] text-cyan-400" icon="lucide:info"></iconify-icon>
                    Engagements available as: one-time sprint (1–2 weeks), monthly advisory, or build-and-implement.
                </p>
</div>
</div>
</section>

<section className="border-y bg-emerald-950 border-emerald-800 pt-20 pb-20" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-2/3">
<h2 className="text-2xl lg:text-3xl font-medium tracking-tight mb-6 text-emerald-100">About Done Digging</h2>
<p className="text-lg mb-8 font-light leading-relaxed text-emerald-400">
          Done Digging LLC exists to help founders and operators stop reinventing the wheel. I build practical operating
          systems—processes, tools, and automation—that make execution easier and growth repeatable.
        </p>
<h3 className="uppercase text-sm font-semibold text-emerald-100 tracking-wide mb-4">Who I Help</h3>
<ul className="grid sm:grid-cols-2 gap-3 mb-8">
<li className="flex items-center gap-3 text-sm text-emerald-400">
<iconify-icon className="text-cyan-400" icon="lucide:check-circle-2" width="16"></iconify-icon>
            Founders building from 0 → 1
          </li>
<li className="flex items-center gap-3 text-sm text-emerald-400">
<iconify-icon className="text-cyan-400" icon="lucide:check-circle-2" width="16"></iconify-icon>
            Small teams needing structure
          </li>
<li className="flex items-center gap-3 text-sm text-emerald-400">
<iconify-icon className="text-cyan-400" icon="lucide:check-circle-2" width="16"></iconify-icon>
            Agencies scaling delivery
          </li>
<li className="flex items-center gap-3 text-sm text-emerald-400">
<iconify-icon className="text-cyan-400" icon="lucide:check-circle-2" width="16"></iconify-icon>
            Teams wanting AI without chaos
          </li>
</ul>
</div>
<div className="lg:w-1/3 w-full">
<div className="p-6 rounded-lg border shadow-sm flex items-center gap-4 bg-black border-emerald-800">

<img className="flex-shrink-0 sm:w-32 sm:h-32 w-24 h-24 object-cover bg-center border-emerald-800 border-0 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9ff19dd-6178-4bf1-82aa-e496e864abd6_320w.jpg?w=800&amp;q=80"/>
<div className="">
<a className="font-medium text-emerald-100 hover:text-cyan-400 transition-colors" href="https://www.linkedin.com/in/jonah-tulmau" target="_blank">Jonah Tulmau</a>
<div className="text-sm text-emerald-500">Chief Strategist</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-b bg-black border-emerald-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h3 className="text-sm font-semibold uppercase tracking-widest mb-10 text-emerald-600">What you can expect</h3>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<h4 className="font-medium mb-2 text-emerald-100">Clear Processes</h4>
<p className="text-sm text-emerald-500">That people actually follow.</p>
</div>
<div>
<h4 className="font-medium mb-2 text-emerald-100">Less Busywork</h4>
<p className="text-sm text-emerald-500">Through smart automation.</p>
</div>
<div>
<h4 className="font-medium mb-2 text-emerald-100">Faster Delivery</h4>
<p className="text-sm text-emerald-500">With fewer nasty surprises.</p>
</div>
<div>
<h4 className="font-medium mb-2 text-emerald-100">Maintainable</h4>
<p className="text-sm text-emerald-500">A system you can keep using.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-emerald-100">Let's Dig In.</h2>
<p className="mb-8 text-emerald-400">Tell me what you’re building and where you’re stuck. I’ll reply within 1–2 business days.</p>
<form action="#" className="space-y-5" method="POST">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 sm:col-span-1">
<label className="block text-sm font-medium mb-1 text-emerald-300" htmlFor="name">Name</label>
<input className="focus:bg-black transition-colors text-emerald-100 bg-emerald-950 w-full border-emerald-700 border rounded-md pt-2.5 pr-3 pb-2.5 pl-3 shadow-sm" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="col-span-2 sm:col-span-1">
<label className="block text-sm font-medium mb-1 text-emerald-300" htmlFor="email">Email</label>
<input className="focus:bg-black transition-colors text-emerald-100 bg-emerald-950 w-full border-emerald-700 border rounded-md pt-2.5 pr-3 pb-2.5 pl-3 shadow-sm" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 text-emerald-300" htmlFor="company">Company <span className="font-normal text-emerald-600">(Optional)</span></label>
<input className="w-full rounded-md shadow-sm py-2.5 px-3 border focus:bg-black transition-colors border-emerald-700 text-emerald-100 bg-emerald-950" id="company" name="company" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 text-emerald-300" htmlFor="service">Interested In</label>
<select className="focus:bg-black transition-colors cursor-pointer text-emerald-100 bg-emerald-950 w-full border-emerald-700 border rounded-md pt-2.5 pr-3 pb-2.5 pl-3 shadow-sm" id="service" name="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="bootstrap">Bootstrap Operations</option>
<option value="process">Process Building</option>
<option value="startup">Startup Creation</option>
<option className="" value="ai">AI &amp; Automation</option>
<option value="unsure">Not sure yet</option>
</select>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 text-emerald-300" htmlFor="message">What are you trying to achieve?</label>
<textarea className="focus:bg-black transition-colors text-emerald-100 bg-emerald-950 w-full border-emerald-700 border rounded-md pt-2.5 pr-3 pb-2.5 pl-3 shadow-sm" id="message" name="message" placeholder="I need help with..." required="" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 rounded-md font-medium transition-all shadow-sm bg-emerald-100 text-black hover:bg-emerald-200" type="submit">
                                Submit
                            </button>
</div>
</form>
</div>

<div className="lg:pl-12 lg:border-l flex flex-col border-emerald-900 justify-center">
<div className="bg-emerald-950 border-emerald-800 border rounded-xl pr-8 pb-8 pl-8">
<div className="border-emerald-800 border-t mt-8 pt-8">
<p className="text-base text-emerald-500 mb-4">Prefer to skip the inbox?</p>
<a className="block transition-all hover:border-emerald-600 hover:bg-emerald-950 font-medium text-emerald-300 text-center bg-black w-full border-emerald-700 border rounded-md pt-3 pr-6 pb-3 pl-6" href="https://calendly.com/jonah-donedigging/call-with-jonah-tulmau" target="_blank">
                                Book a Discovery Call
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 bg-emerald-950 border-emerald-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="text-emerald-500 text-sm">
                    © 2025 Done Digging LLC. All rights reserved.
                </div>
<div className="flex items-center gap-6">
<a className="text-sm text-emerald-500 transition-colors hover:text-emerald-100" href="#">Privacy Policy</a>
<a className="transition-colors text-emerald-600 hover:text-sky-400" href="https://www.linkedin.com/in/jonah-tulmau" target="_blank">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
<span className="sr-only">LinkedIn</span>
</a>
</div>
</div>

<div className="pt-8 border-t border-emerald-900 text-[11px] leading-relaxed text-emerald-700/80 text-center md:text-left">
<p>
<strong>Disclaimer:</strong> The information and consulting services provided by Done Digging LLC are intended for educational and operational optimization purposes only. While we strive to implement best practices and industry-standard automations, specific business results, financial gains, or operational efficiencies cannot be guaranteed. Implementation success depends on various factors including team adoption, market conditions, and ongoing management. Done Digging LLC is not liable for any incidental or consequential damages resulting from the use of our services or reliance on the information provided.
                </p>
</div>
</div>
</footer>

    </>
  );
}
