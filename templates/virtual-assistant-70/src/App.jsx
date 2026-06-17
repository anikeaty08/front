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
      

<nav className="fixed w-full z-50 top-0 left-0 bg-[#FCFBF9]/90 backdrop-blur-md border-b border-stone-100">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-serif tracking-tight transition-colors duration-300 text-stone-800 hover:text-rose-900" href="#">
                MV.
            </a>
<div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide text-stone-500">
<a className="transition-colors hover:text-stone-800" href="#about">About</a>
<a className="transition-colors hover:text-stone-800" href="#services">Services</a>
<a className="transition-colors hover:text-stone-800" href="#projects">Projects</a>
<a className="transition-colors hover:text-stone-800" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2 border rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 border-stone-200 hover:bg-stone-800 hover:text-white hover:border-stone-800" href="#contact">
                Get in touch
            </a>

<button className="md:hidden text-stone-800">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] via-[#FCFBF9] -z-10 from-rose-50/50 to-stone-50"></div>
<div className="absolute top-1/4 left-10 w-64 h-64 rounded-full blur-3xl -z-10 bg-rose-100/20"></div>
<div className="max-w-5xl mx-auto px-6 text-center grid gap-8 md:gap-12 animate-fade-up">

<div className="mx-auto w-40 h-40 md:w-56 md:h-56 relative group">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr blur opacity-50 group-hover:opacity-75 transition-opacity duration-500 from-rose-100 to-stone-200"></div>
<div className="overflow-hidden flex w-full h-full border-4 rounded-full relative shadow-xl items-center justify-center bg-stone-100 border-white">

<svg aria-hidden="true" className="iconify iconify--lucide w-[64px] h-[64px]" data-height="64" data-icon="lucide:user" data-icon-replaced="true" data-width="64" height="64" role="img" strokeWidth="2" style={{width: '64px', height: '64px', color: 'rgb(214, 211, 209)'}} viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
</div>
<div className="space-y-4 md:space-y-6">
<h2 className="text-sm md:text-base uppercase tracking-[0.2em] font-semibold delay-100 animate-fade-up text-stone-400">Hello, I am</h2>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] delay-200 animate-fade-up text-stone-800">
                    Maria Vibar
                </h1>
<p className="font-light text-lg md:text-2xl text-stone-500 max-w-2xl mx-auto delay-300 animate-fade-up">
                    Virtual Assistant &amp; Business Support Specialist
                </p>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4 delay-300 animate-fade-up">
<a className="px-8 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 w-full md:w-auto bg-stone-800 text-white shadow-stone-200" href="#contact">
                    Work With Me
                </a>
<a className="px-8 py-3.5 border rounded-full text-sm font-medium tracking-wide transition-all duration-300 w-full md:w-auto bg-white text-stone-700 border-stone-200 hover:bg-stone-50" href="#about">
                    Learn More
                </a>
</div>
</div>
</header>

<section className="md:py-32 pt-24 pb-24 relative bg-white" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative order-2 md:order-1">
<div className="aspect-[4/5] rounded-t-[100px] rounded-b-3xl overflow-hidden relative shadow-2xl bg-stone-100 shadow-stone-200/50">
<div className="flex text-stone-400 bg-stone-200 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">

<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:image" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect className="" height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle className="" cx="9" cy="9" r="2"></circle>
<path d="m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</g>
</svg>
</div>
</div>

<div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full -z-10 bg-rose-50"></div>
</div>

<div className="order-1 md:order-2 space-y-8">
<div className="">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-4 text-stone-800">Elevating businesses through organized excellence.</h2>
<div className="w-12 h-0.5 bg-rose-300/50"></div>
</div>
<div className="space-y-6 text-stone-500 font-light text-lg leading-relaxed">
<p>
                            I’m Maria, a dedicated Virtual Assistant and Business Support Specialist with a passion for streamlining operations and bringing calm to chaos. My approach combines professional efficiency with a touch of personal care.
                        </p>
<p className="">
                            With a background in diverse administrative roles, I understand that every business has a unique heartbeat. My goal is to handle the intricacies of your daily operations so you can focus on the big picture—growing your vision.
                        </p>
<ul className="grid grid-cols-1 gap-3 pt-4 text-base font-normal text-stone-600">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide text-rose-300" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Detail-oriented planning
                            </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide text-rose-300" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Proactive communication
                            </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify iconify--lucide text-rose-300" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                                Tech-savvy solutions
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FCFBF9]">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-bold tracking-widest uppercase mb-2 block text-rose-900/60">My Journey</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-800">Professional Experience</h2>
</div>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-rose-200 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border-rose-100 bg-white">
<svg aria-hidden="true" className="iconify iconify--lucide text-rose-400" data-icon="lucide:briefcase" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border transition-colors duration-300 bg-white border-stone-50 hover:border-rose-100">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
<h3 className="font-serif text-xl text-stone-800">Idara Aesthetic</h3>
<span className="text-xs font-semibold uppercase tracking-wide mt-1 md:mt-0 text-rose-400">Robinsons Place</span>
</div>
<p className="text-stone-500 font-light mb-4">Business Support &amp; Administration</p>
<p className="text-sm leading-relaxed text-stone-400">Managed daily branch operations, client scheduling, and inventory systems ensuring smooth aesthetic service delivery.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border-rose-100 bg-white">
<svg aria-hidden="true" className="iconify iconify--lucide text-rose-400" data-icon="lucide:briefcase" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border transition-colors duration-300 bg-white border-stone-50 hover:border-rose-100">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
<h3 className="font-serif text-xl text-stone-800">Idara Aesthetic</h3>
<span className="text-xs font-semibold uppercase tracking-wide mt-1 md:mt-0 text-rose-400">Cubao Branch</span>
</div>
<p className="text-stone-500 font-light mb-4">Customer Relations</p>
<p className="text-sm leading-relaxed text-stone-400">Spearheaded customer retention programs and managed social media inquiries, increasing client booking rates.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border shadow-sm shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 border-rose-100 bg-white">
<svg aria-hidden="true" className="iconify iconify--lucide text-rose-400" data-icon="lucide:sparkles" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border transition-colors duration-300 bg-white border-stone-50 hover:border-rose-100">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
<h3 className="font-serif text-xl text-stone-800">Nail Lah Lash</h3>
<span className="text-xs font-semibold uppercase tracking-wide mt-1 md:mt-0 text-rose-400">Beauty Lounge</span>
</div>
<p className="text-stone-500 font-light mb-4">Operational Assistant</p>
<p className="text-sm leading-relaxed text-stone-400">Coordinated staff schedules, handled procurement of beauty supplies, and maintained high standards of salon hygiene and presentation.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-xs font-bold tracking-widest uppercase mb-2 block text-rose-900/60">What I Do</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6 text-stone-800">Tailored support for your growing business</h2>
<p className="text-stone-500 font-light">Comprehensive virtual assistance designed to give you back your time.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-[#FCFBF9] border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border-stone-100 hover:shadow-stone-200/50">
<div className="w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center mb-6 group-hover:border-rose-200 transition-colors bg-white border-stone-100">
<svg aria-hidden="true" className="iconify group-hover:text-rose-400 transition-colors iconify--lucide text-stone-700" data-icon="lucide:calendar-clock" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 14v2.2l1.6 1M16 2v4m5 1.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5M3 10h5m0-8v4"></path><circle cx="16" cy="16" r="6"></circle></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-800">Admin &amp; Scheduling</h3>
<p className="text-sm text-stone-500 leading-relaxed">Calendar management, email correspondence, and appointment setting to keep your day organized.</p>
</div>

<div className="p-8 rounded-2xl bg-[#FCFBF9] border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border-stone-100 hover:shadow-stone-200/50">
<div className="w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center mb-6 group-hover:border-rose-200 transition-colors bg-white border-stone-100">
<svg aria-hidden="true" className="iconify group-hover:text-rose-400 transition-colors iconify--lucide text-stone-700" data-icon="lucide:shopping-bag" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-800">E-Commerce Support</h3>
<p className="text-sm text-stone-500 leading-relaxed">Product listing, order processing, and customer support specifically for Shopify and online boutiques.</p>
</div>

<div className="p-8 rounded-2xl bg-[#FCFBF9] border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border-stone-100 hover:shadow-stone-200/50">
<div className="w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center mb-6 group-hover:border-rose-200 transition-colors bg-white border-stone-100">
<svg aria-hidden="true" className="iconify group-hover:text-rose-400 transition-colors iconify--lucide text-stone-700" data-icon="lucide:instagram" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-800">Social Media Mgmt</h3>
<p className="text-sm text-stone-500 leading-relaxed">Content scheduling, community engagement, and basic graphic design to maintain your online presence.</p>
</div>

<div className="p-8 rounded-2xl bg-[#FCFBF9] border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border-stone-100 hover:shadow-stone-200/50">
<div className="w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center mb-6 group-hover:border-rose-200 transition-colors bg-white border-stone-100">
<svg aria-hidden="true" className="iconify group-hover:text-rose-400 transition-colors iconify--lucide text-stone-700" data-icon="lucide:mail" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-800">Inbox Management</h3>
<p className="text-sm text-stone-500 leading-relaxed">Decluttering inboxes, organizing folders, and drafting responses to ensure no lead is missed.</p>
</div>

<div className="p-8 rounded-2xl bg-[#FCFBF9] border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border-stone-100 hover:shadow-stone-200/50">
<div className="w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center mb-6 group-hover:border-rose-200 transition-colors bg-white border-stone-100">
<svg aria-hidden="true" className="iconify group-hover:text-rose-400 transition-colors iconify--lucide text-stone-700" data-icon="lucide:database" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-800">Data Entry</h3>
<p className="text-sm text-stone-500 leading-relaxed">Accurate data organization, CRM updates, and file management for streamlined operations.</p>
</div>

<div className="p-8 rounded-2xl bg-[#FCFBF9] border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group border-stone-100 hover:shadow-stone-200/50">
<div className="w-12 h-12 rounded-xl shadow-sm border flex items-center justify-center mb-6 group-hover:border-rose-200 transition-colors bg-white border-stone-100">
<svg aria-hidden="true" className="iconify group-hover:text-rose-400 transition-colors iconify--lucide text-stone-700" data-icon="lucide:heart-handshake" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 text-stone-800">Client Relations</h3>
<p className="text-sm text-stone-500 leading-relaxed">Managing inquiries, feedback loops, and customer onboarding with a warm, professional touch.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="projects">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<span className="text-xs font-bold tracking-widest uppercase mb-2 block text-rose-900/60">Portfolio</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-800">Recent Work</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-500 transition-colors group hover:text-stone-800" href="#contact">
                    Start a project <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden border shadow-sm relative mb-6 bg-white border-stone-200">
<div className="absolute inset-0 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 bg-stone-100 text-stone-400">

<svg aria-hidden="true" className="iconify mb-2 opacity-50 iconify--lucide" data-icon="lucide:shopping-cart" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></g></svg>
<span className="text-xs uppercase tracking-widest opacity-50">Shopify Training Store</span>
</div>

<div className="group-hover:bg-stone-900/5 transition-colors duration-300 absolute top-0 right-0 bottom-0 left-0 bg-stone-900/0"></div>
</div>
<h3 className="font-serif text-xl group-hover:text-rose-900 transition-colors text-stone-800">Shopify E-Commerce Setup</h3>
<p className="text-stone-500 text-sm mt-2">Store configuration, product upload, and inventory management simulation.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden border shadow-sm relative mb-6 bg-white border-stone-200">
<div className="absolute inset-0 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 bg-rose-50 text-rose-300">

<svg aria-hidden="true" className="iconify mb-2 opacity-50 iconify--lucide" data-icon="lucide:layout-template" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
<span className="text-xs uppercase tracking-widest opacity-50">Social Media Content</span>
</div>

<div className="group-hover:bg-stone-900/5 transition-colors duration-300 absolute top-0 right-0 bottom-0 left-0 bg-stone-900/0"></div>
</div>
<h3 className="font-serif text-xl group-hover:text-rose-900 transition-colors text-stone-800">Aesthetic Content Planning</h3>
<p className="text-stone-500 text-sm mt-2">Feed curation, caption writing, and engagement strategy for beauty brand.</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-stone-200 bg-white">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs font-bold tracking-widest uppercase mb-8 text-stone-400">Tools I Use</p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
<div className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium border-stone-100 bg-stone-50 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg> Shopify
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium border-stone-100 bg-stone-50 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trello" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M7 7h3v9H7zm7 0h3v5h-3z"></path></g></svg> Trello
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium border-stone-100 bg-stone-50 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:figma" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5M12 2h3.5a3.5 3.5 0 1 1 0 7H12z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0m-7 7A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0m0-7A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5"></path></g></svg> Canva
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium border-stone-100 bg-stone-50 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg> Gmail
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium border-stone-100 bg-stone-50 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sheet" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M3 9h18M3 15h18M9 9v12m6-12v12"></path></g></svg> Google Sheets
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium border-stone-100 bg-stone-50 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:slack" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="1.5" width="3" x="13" y="2"></rect><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path><rect height="8" rx="1.5" width="3" x="8" y="14"></rect><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path><rect height="3" rx="1.5" width="8" x="14" y="13"></rect><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path><rect height="3" rx="1.5" width="8" x="2" y="8"></rect><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path></g></svg> Slack
                </div>
</div>
</div>
</section>

<section className="py-24 bg-rose-50/30">
<div className="max-w-4xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl shadow-sm border relative bg-white border-stone-100">
<svg aria-hidden="true" className="iconify absolute top-6 left-6 iconify--lucide text-rose-200" data-icon="lucide:quote" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="font-serif italic text-lg mb-6 pt-6 relative z-10 text-stone-600">
                        "Maria has an incredible eye for detail. She completely reorganized our inventory system and saved us hours of work every week."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200"></div>
<div>
<p className="text-sm font-bold text-stone-800">Sarah Jenkins</p>
<p className="text-xs text-stone-400">Owner, Bloom Boutique</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl shadow-sm border relative bg-white border-stone-100">
<svg aria-hidden="true" className="iconify absolute top-6 left-6 iconify--lucide text-rose-200" data-icon="lucide:quote" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="font-serif italic text-lg mb-6 pt-6 relative z-10 text-stone-600">
                        "Reliable, professional, and proactive. Hiring Maria was the best investment I made for my business operations this year."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-200"></div>
<div>
<p className="text-sm font-bold text-stone-800">Elena Cruz</p>
<p className="text-xs text-stone-400">Director, Idara Aesthetic</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<span className="text-xs font-bold tracking-widest uppercase mb-2 block text-rose-900/60">Contact</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4 text-stone-800">Let's work together.</h2>
<p className="text-stone-500 font-light text-lg">Ready to streamline your business? Send me a message and let's discuss how I can support your goals.</p>
</div>
<div className="space-y-4 pt-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center bg-stone-50 border-stone-100 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<a className="transition-colors text-stone-600 hover:text-rose-900" href="mailto:hello@mariavibar.com">hello@mariavibar.com</a>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center bg-stone-50 border-stone-100 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</div>
<a className="transition-colors text-stone-600 hover:text-rose-900" href="#">LinkedIn Profile</a>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center bg-stone-50 border-stone-100 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<span className="text-stone-600">Manila, Philippines (Remote Worldwide)</span>
</div>
</div>
</div>

<div className="bg-[#FCFBF9] p-8 md:p-10 rounded-3xl border shadow-lg border-stone-100 shadow-stone-100">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide" htmlFor="firstName">First Name</label>
<input className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 transition-all placeholder-stone-300 bg-white border-stone-200 text-stone-800" id="firstName" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide" htmlFor="lastName">Last Name</label>
<input className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 transition-all placeholder-stone-300 bg-white border-stone-200 text-stone-800" id="lastName" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 transition-all placeholder-stone-300 bg-white border-stone-200 text-stone-800" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-stone-500 uppercase tracking-wide" htmlFor="message">Message</label>
<textarea className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-100 focus:border-rose-200 transition-all placeholder-stone-300 bg-white border-stone-200 text-stone-800" id="message" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full font-medium tracking-wide py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 bg-stone-800 text-white hover:bg-stone-900 shadow-stone-200" type="button">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 bg-white border-stone-100">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-xl font-serif font-bold text-stone-800">MV.</span>
</div>
<p className="text-sm text-stone-400">© 2023 Maria Vibar. All rights reserved.</p>
<div className="flex gap-6">
<a className="transition-colors text-stone-400 hover:text-stone-800" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="transition-colors text-stone-400 hover:text-stone-800" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
</footer>

    </>
  );
}
