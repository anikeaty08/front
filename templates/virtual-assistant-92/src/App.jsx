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
gold: {
50: '#fffbf0',
100: '#fbf5e1',
200: '#f3e6c0',
300: '#e8cf90',
400: '#deb562',
500: '#d49b3d', /* Primary Gold */
600: '#b8792e',
700: '#945826',
},
charcoal: {
800: '#292524',
900: '#1c1917', /* Primary Dark */
},
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200/60 transition-all">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-charcoal-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-charcoal-900 text-gold-200 rounded-lg flex items-center justify-center font-serif font-bold text-sm">MJ</div>
                Myra Jarenga
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-charcoal-900 transition-colors" href="#about">About</a>
<a className="hover:text-charcoal-900 transition-colors" href="#services">Services</a>
<a className="hover:text-charcoal-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="px-5 py-2.5 bg-charcoal-900 text-white rounded-lg hover:bg-charcoal-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#contact">
                    Book Discovery Call
                </a>
</div>

<button className="md:hidden text-charcoal-900">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-white to-stone-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="fade-up order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-50 border border-gold-100 text-gold-700 text-xs font-semibold tracking-wide uppercase mb-6">
<span className="w-2 h-2 rounded-full bg-gold-500"></span>
                        Available for new clients
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-charcoal-900 mb-6 leading-[1.1]">
                        Your Reliable, Organized <br className="hidden lg:block"/> 
                        &amp; Proactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-700">Virtual Assistant</span>
</h1>
<p className="text-lg text-stone-500 mb-8 max-w-lg leading-relaxed">
                        I help busy entrepreneurs save time, reduce stress, and stay on top of their priorities through expert operations management.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 bg-charcoal-900 text-white rounded-xl hover:bg-charcoal-800 transition-all font-medium flex items-center justify-center gap-2 shadow-lg shadow-charcoal-900/10" href="#contact">
                            Hire Me <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="px-8 py-4 bg-white border border-stone-200 text-charcoal-900 rounded-xl hover:border-gold-300 hover:text-gold-700 transition-all font-medium flex items-center justify-center" href="#portfolio">
                            View Portfolio
                        </a>
</div>
</div>

<div className="fade-up delay-100 order-1 lg:order-2 relative">
<div className="aspect-square md:aspect-[4/3] overflow-hidden shadow-stone-200/50 bg-stone-100 border-white border rounded-3xl relative shadow-2xl">

<div className="-translate-x-1/2 -translate-y-1/2 flex flex-col bg-white w-3/4 h-3/4 rounded-2xl pt-6 pr-6 pb-6 pl-6 absolute top-1/2 left-1/2 shadow-sm gap-x-4 gap-y-4">
<div className="flex border-stone-100 border-b pb-4 items-center justify-between">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="w-20 h-2 bg-stone-100 rounded-full"></div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-gold-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="h-2 w-32 bg-stone-200 rounded-full"></div>
</div>
<div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-gold-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<div className="h-2 w-48 bg-stone-200 rounded-full"></div>
</div>
<div className="flex items-center gap-3 p-3 bg-stone-50 rounded-lg">
<svg className="lucide lucide-mail w-5 h-5 text-gold-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div className="h-2 w-24 bg-stone-200 rounded-full"></div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-100 rounded-full blur-2xl opacity-50"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="about">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<span className="text-gold-600 font-medium text-sm tracking-wider uppercase">Professional Profile</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-charcoal-900 mt-3 mb-6 tracking-tight">Meet Myra Jarenga</h2>
<p className="text-lg text-stone-600 leading-relaxed">
                    “I’m a Virtual Assistant with over 7 years of hands-on experience managing operations, communication, schedules, logistics, and customer relations. While my past job titles weren’t always ‘Virtual Assistant,’ the work has always been VA work in disguise. I combine real-world experience with professional VA training to offer reliable, high-quality support that helps entrepreneurs stay focused on what matters most.”
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6 fade-up delay-100">
<div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-briefcase w-5 h-5 text-gold-600 mt-0.5" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-stone-700">7+ years operations &amp; communication experience</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-graduation-cap w-5 h-5 text-gold-600 mt-0.5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span className="text-stone-700">Professional Virtual Assistant training</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-layers w-5 h-5 text-gold-600 mt-0.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<span className="text-stone-700">Strong organization &amp; problem-solving mindset</span>
</li>
</ul>
</div>
<div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg className="lucide lucide-message-square w-5 h-5 text-gold-600 mt-0.5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="text-stone-700">Excellent verbal and written communication</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-globe w-5 h-5 text-gold-600 mt-0.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-stone-700">Expert in inbox, travel, research &amp; logistics</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-cpu w-5 h-5 text-gold-600 mt-0.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-stone-700">Tech-friendly (AI tools, Asana, Notion, Trello)</span>
</li>
</ul>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center gap-2 text-stone-500 hover:text-gold-600 font-medium transition-colors text-sm border-b border-transparent hover:border-gold-300 pb-0.5" href="#">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg> Download My Resume
                </a>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h2 className="text-3xl font-semibold text-charcoal-900 tracking-tight mb-4">Core Competencies</h2>
<p className="text-stone-500">Comprehensive support designed to streamline your business.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300 fade-up">
<div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center text-gold-600 mb-6">
<svg className="lucide lucide-inbox w-6 h-6" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-charcoal-900 mb-4">Inbox &amp; Communication</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex gap-2"><span className="text-gold-500">•</span> Managed 30–50+ daily messages</li>
<li className="flex gap-2"><span className="text-gold-500">•</span> Created custom response templates</li>
<li className="flex gap-2"><span className="text-gold-500">•</span> Prioritized urgent communication</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300 fade-up delay-100">
<div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center text-gold-600 mb-6">
<svg className="lucide lucide-calendar w-6 h-6" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 className="text-lg font-semibold text-charcoal-900 mb-4">Calendar Management</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex gap-2"><span className="text-gold-500">•</span> Scheduled 100+ staff shifts</li>
<li className="flex gap-2"><span className="text-gold-500">•</span> Time-blocking &amp; timezone coord.</li>
<li className="flex gap-2"><span className="text-gold-500">•</span> Reduced scheduling conflicts</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300 fade-up delay-200">
<div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center text-gold-600 mb-6">
<svg className="lucide lucide-plane w-6 h-6" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-charcoal-900 mb-4">Travel &amp; Logistics</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex gap-2"><span className="text-gold-500">•</span> Detailed itinerary planning</li>
<li className="flex gap-2"><span className="text-gold-500">•</span> Vendor &amp; supply coordination</li>
<li className="flex gap-2"><span className="text-gold-500">•</span> 100% supply availability (7 yrs)</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300 fade-up">
<div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center text-gold-600 mb-6">
<svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-charcoal-900 mb-4">Research &amp; Reporting</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex gap-2"><span className="text-gold-500">•</span> Competitive analysis</li>
<li className="flex gap-2"><span className="text-gold-500">•</span> Data-based recommendations</li>
<li className="flex gap-2"><span className="text-gold-500">•</span> Increased team efficiency 20%</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 hover:-translate-y-1 transition-all duration-300 fade-up delay-100">
<div className="w-12 h-12 bg-gold-50 rounded-xl flex items-center justify-center text-gold-600 mb-6">
<svg className="lucide lucide-kanban w-6 h-6" data-lucide="kanban" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 3v14"></path><path d="M12 3v8"></path><path d="M19 3v18"></path></svg>
</div>
<h3 className="text-lg font-semibold text-charcoal-900 mb-4">Project Management</h3>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex gap-2"><span className="text-gold-500">•</span> Asana, Notion, Trello expertise</li>
<li className="flex gap-2"><span className="text-gold-500">•</span> Daily briefings &amp; updates</li>
<li className="flex gap-2"><span className="text-gold-500">•</span> Checklist-driven operations</li>
</ul>
</div>

<div className="bg-charcoal-900 p-8 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center fade-up delay-200">
<h3 className="text-lg font-semibold text-white mb-2">Need something else?</h3>
<p className="text-stone-400 text-sm mb-6">I adapt quickly to new tools and processes.</p>
<a className="px-6 py-3 bg-white text-charcoal-900 rounded-lg text-sm font-medium hover:bg-gold-50 transition-colors" href="#contact">
                        Ask Me About It
                    </a>
</div>
</div>
</div>
</section>

<div className="bg-charcoal-900 py-16 text-white border-y border-charcoal-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="fade-up">
<div className="text-3xl md:text-4xl font-semibold text-gold-400 mb-2">90%</div>
<div className="text-xs uppercase tracking-widest text-stone-400">CommunicationSatisfaction</div>
</div>
<div className="fade-up delay-100">
<div className="text-3xl md:text-4xl font-semibold text-gold-400 mb-2">20%</div>
<div className="text-xs uppercase tracking-widest text-stone-400">EfficiencyImprovement</div>
</div>
<div className="fade-up delay-200">
<div className="text-3xl md:text-4xl font-semibold text-gold-400 mb-2">7+</div>
<div className="text-xs uppercase tracking-widest text-stone-400">Years OpsExperience</div>
</div>
<div className="fade-up delay-300">
<div className="text-3xl md:text-4xl font-semibold text-gold-400 mb-2">100%</div>
<div className="text-xs uppercase tracking-widest text-stone-400">LogisticsReliability</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-up">
<h2 className="text-3xl font-semibold text-charcoal-900 tracking-tight mb-4">Problem Solving in Action</h2>
<p className="text-stone-500">Real scenarios demonstrating my approach to challenges.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="group border border-stone-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 bg-stone-50/50 fade-up">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 rounded text-xs font-semibold bg-red-100 text-red-700 uppercase tracking-wide">Crisis Mgmt</span>
<span className="text-stone-300">|</span>
<span className="text-xs font-medium text-stone-400">Operations</span>
</div>
<h3 className="text-xl font-semibold text-charcoal-900 mb-3">System Breakdown During Rush</h3>
<p className="text-stone-600 text-sm mb-6 leading-relaxed">
                        POS system failed during peak hours. I immediately switched the team to manual tracking protocols I had prepared for contingencies.
                    </p>
<div className="border-t border-stone-200 pt-4">
<p className="text-sm font-semibold text-charcoal-900">Result:</p>
<p className="text-sm text-stone-500">Zero lost sales, kept operations smooth, customers barely noticed the disruption.</p>
</div>
</div>

<div className="group border border-stone-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 bg-stone-50/50 fade-up delay-100">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 rounded text-xs font-semibold bg-orange-100 text-orange-700 uppercase tracking-wide">Logistics</span>
<span className="text-stone-300">|</span>
<span className="text-xs font-medium text-stone-400">Vendor Rel</span>
</div>
<h3 className="text-xl font-semibold text-charcoal-900 mb-3">Missing Vendor Delivery</h3>
<p className="text-stone-600 text-sm mb-6 leading-relaxed">
                        Critical supplies failed to arrive. I contacted backup suppliers within minutes and adjusted the menu offerings proactively.
                    </p>
<div className="border-t border-stone-200 pt-4">
<p className="text-sm font-semibold text-charcoal-900">Result:</p>
<p className="text-sm text-stone-500">Zero complaints and actually increased sales of alternate featured flavors.</p>
</div>
</div>

<div className="group border border-stone-100 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 bg-stone-50/50 fade-up delay-200">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 rounded text-xs font-semibold bg-blue-100 text-blue-700 uppercase tracking-wide">Project Mgmt</span>
<span className="text-stone-300">|</span>
<span className="text-xs font-medium text-stone-400">Tech</span>
</div>
<h3 className="text-xl font-semibold text-charcoal-900 mb-3">Urgent Website Updates</h3>
<p className="text-stone-600 text-sm mb-6 leading-relaxed">
                        Last-minute changes were required for a critical investor meeting. I managed the content updates and QA testing instantly.
                    </p>
<div className="border-t border-stone-200 pt-4">
<p className="text-sm font-semibold text-charcoal-900">Result:</p>
<p className="text-sm text-stone-500">Delivered fully tested updates with hours to spare. Funding secured.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-5xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-charcoal-900 tracking-tight mb-12 text-center fade-up">Professional Communication</h2>
<div className="space-y-8">

<div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100 fade-up">
<div className="flex items-center gap-3 mb-4">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<h4 className="text-sm font-semibold text-stone-400 uppercase tracking-wide">De-escalation Sample</h4>
</div>
<blockquote className="text-lg text-charcoal-900 italic border-l-4 border-gold-400 pl-6 py-2">
                        “I completely understand your frustration regarding the delay. Let me fix this right away by contacting the logistics team to expedite a replacement, which will be at your door by tomorrow morning.”
                    </blockquote>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-stone-100 fade-up delay-100">
<div className="bg-stone-100 px-6 py-3 border-b border-stone-200 flex gap-2">
<div className="w-3 h-3 rounded-full bg-stone-300"></div>
<div className="w-3 h-3 rounded-full bg-stone-300"></div>
</div>
<div className="p-8">
<div className="text-sm text-stone-500 mb-6 font-mono">
                            Subject: Action Required: Supply Chain Adjustment for Q4
                            To: Vendor Relations Team
                        </div>
<div className="text-stone-700 leading-relaxed space-y-4">
<p>Hi Team,</p>
<p>Following our quarterly review, I've noticed a recurring delay in the delivery of packaging materials. To ensure we maintain our 100% availability metric, I recommend we adjust our ordering schedule to 3 days earlier.</p>
<p>I have already drafted the new schedule (attached) for your approval.</p>
<p>Best,Myra Jarenga</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-up">
<h2 className="text-3xl font-semibold text-charcoal-900 tracking-tight mb-6">Training &amp; Tools</h2>
<p className="text-stone-600 mb-8">
                    Continuous learning is part of my professional DNA. I stay updated with the latest productivity tools to serve you better.
                </p>
<div className="grid grid-cols-2 gap-4">
<div className="flex items-center gap-3 text-sm text-stone-700">
<svg className="lucide lucide-check w-4 h-4 text-gold-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Advanced Email Mgmt
                    </div>
<div className="flex items-center gap-3 text-sm text-stone-700">
<svg className="lucide lucide-check w-4 h-4 text-gold-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Calendar Optimization
                    </div>
<div className="flex items-center gap-3 text-sm text-stone-700">
<svg className="lucide lucide-check w-4 h-4 text-gold-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Travel Planning
                    </div>
<div className="flex items-center gap-3 text-sm text-stone-700">
<svg className="lucide lucide-check w-4 h-4 text-gold-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Research &amp; Reporting
                    </div>
<div className="flex items-center gap-3 text-sm text-stone-700">
<svg className="lucide lucide-check w-4 h-4 text-gold-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Asana, Notion, Trello
                    </div>
<div className="flex items-center gap-3 text-sm text-stone-700">
<svg className="lucide lucide-check w-4 h-4 text-gold-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> AI Tools for Productivity
                    </div>
</div>
</div>
<div className="relative fade-up delay-100">
<div className="absolute inset-0 bg-gold-100 rounded-3xl transform rotate-3"></div>
<div className="relative bg-charcoal-900 p-10 rounded-3xl text-white shadow-xl">
<div className="text-gold-400 mb-4">
<svg className="lucide lucide-award w-10 h-10" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<h3 className="text-2xl font-semibold mb-4">The Formula</h3>
<p className="text-stone-300 text-lg leading-relaxed">
                        "Experience + Training = A highly effective, trusted Virtual Assistant."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="fade-up">
<h2 className="text-3xl font-semibold text-charcoal-900 tracking-tight mb-6">Let’s Work Together</h2>
<p className="text-stone-600 mb-10">
                        Ready to reclaim your time? Send me a message or book a discovery call to discuss how I can support your business.
                    </p>
<div className="space-y-6">
<a className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-100 hover:border-gold-300 transition-colors group" href="mailto:myrajarenga1234@gmail.com">
<div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center text-charcoal-900 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<div className="text-xs text-stone-400 uppercase tracking-wide">Email</div>
<div className="font-medium text-charcoal-900">myrajarenga1234@gmail.com</div>
</div>
</a>
<a className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-100 hover:border-gold-300 transition-colors group" href="tel:+254712697989">
<div className="w-10 h-10 bg-stone-50 rounded-lg flex items-center justify-center text-charcoal-900 group-hover:bg-gold-50 group-hover:text-gold-600 transition-colors">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<div className="text-xs text-stone-400 uppercase tracking-wide">Phone</div>
<div className="font-medium text-charcoal-900">+254 712 697 989</div>
</div>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-lg shadow-stone-200/50 border border-stone-100 fade-up delay-100">
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Message sent! (Demo)')">
<div>
<label className="block text-sm font-medium text-charcoal-900 mb-2">Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-charcoal-900 mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-charcoal-900 mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all" placeholder="How can I help you?" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-charcoal-900 text-white font-medium rounded-xl hover:bg-charcoal-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<span className="text-lg font-bold tracking-tight text-charcoal-900">Myra Jarenga</span>
<p className="text-sm text-stone-500 mt-1">Virtual Assistant Services</p>
</div>
<div className="flex gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-charcoal-900 transition-colors" href="#about">About</a>
<a className="hover:text-charcoal-900 transition-colors" href="#services">Services</a>
<a className="hover:text-charcoal-900 transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-charcoal-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:text-white hover:bg-charcoal-900 transition-all" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:text-white hover:bg-charcoal-900 transition-all" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-stone-50 text-center">
<p className="text-xs text-stone-400">© 2023 Myra Jarenga. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
