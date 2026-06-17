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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Select elements to animate
            document.querySelectorAll('section h2, section h3, section p, .grid > div').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                observer.observe(el);
            });
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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter z-50 mix-blend-difference" href="#">
                LOCALEDGE.AI
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#how-we-work">Process</a>
<a className="text-sm font-medium text-neutral-500 hover:text-black transition-colors" href="#about">About</a>
<a className="text-sm font-medium bg-black text-white px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors" href="#contact">
                    Start Project
                </a>
</div>

<button className="md:hidden p-2 text-neutral-900">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-7xl mx-auto w-full">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-100 mb-8 animate-fade-up">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wide">Accepting New Clients</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] mb-8 animate-fade-up delay-100 text-neutral-900">
                    Automation That Runs Your Business Smarter
                </h1>
<p className="text-lg md:text-xl text-neutral-500 leading-relaxed max-w-2xl mb-10 animate-fade-up delay-200 font-light">
                    Localedge.ai helps local and service-based businesses automate websites, lead capture, follow-ups, bookings, and customer support using AI-powered systems.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-up delay-300">
<a className="group flex items-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all duration-300" href="#contact">
                        Request Free Automation Audit
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="text-neutral-900 font-medium border-b border-transparent hover:border-neutral-900 transition-colors pb-0.5" href="#services">
                        View Services
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-neutral-100 pb-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter">Our Expertise</h2>
<p className="text-neutral-500 mt-4 md:mt-0 max-w-sm text-sm">
                    Tailored AI solutions designed to reclaim your time and maximize efficiency.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100 border border-neutral-100">

<div className="bg-white p-8 md:p-10 hover:bg-neutral-50 transition-colors duration-300 group">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all">
<span className="iconify text-neutral-900" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">AI Chatbots for Websites</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Intelligent conversational agents that engage visitors 24/7, answer queries instantly, and capture leads while you sleep.
                    </p>
</div>

<div className="bg-white p-8 md:p-10 hover:bg-neutral-50 transition-colors duration-300 group">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all">
<span className="iconify text-neutral-900" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">AI Voice Agents</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Seamless inbound and outbound voice handling for appointments, reminders, and customer support triage.
                    </p>
</div>

<div className="bg-white p-8 md:p-10 hover:bg-neutral-50 transition-colors duration-300 group">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all">
<span className="iconify text-neutral-900" data-icon="lucide:repeat" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Lead Follow-Up Automation</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Automated CRM workflows that nurture leads instantly via SMS and email to increase conversion rates.
                    </p>
</div>

<div className="bg-white p-8 md:p-10 hover:bg-neutral-50 transition-colors duration-300 group">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all">
<span className="iconify text-neutral-900" data-icon="lucide:layout-template" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Conversion-Focused Web Design</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Clean, modern websites architected specifically to convert traffic into paying customers.
                    </p>
</div>

<div className="bg-white p-8 md:p-10 hover:bg-neutral-50 transition-colors duration-300 group">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all">
<span className="iconify text-neutral-900" data-icon="lucide:calendar-clock" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Booking Automation</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Eliminate scheduling back-and-forth with systems that sync calendars and send automated reminders.
                    </p>
</div>

<div className="bg-white p-8 md:p-10 flex items-center justify-center group">
<a className="text-center group-hover:scale-105 transition-transform duration-300" href="#contact">
<span className="block text-lg font-medium mb-1">Custom Solution?</span>
<span className="text-neutral-400 text-sm flex items-center justify-center gap-1 group-hover:text-neutral-900 transition-colors">
                            Let's talk <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-neutral-50" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
<div className="lg:col-span-4">
<span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">Philosophy</span>
</div>
<div className="lg:col-span-8">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight mb-8">
                    We build practical AI systems that reduce manual work, drastically improve response times, and help your business scale without the need to hire more staff.
                </h2>
<div className="flex flex-col md:flex-row gap-12 pt-8 border-t border-neutral-200">
<div>
<span className="block text-4xl font-medium tracking-tighter mb-2">24/7</span>
<span className="text-sm text-neutral-500">Operation uptime</span>
</div>
<div>
<span className="block text-4xl font-medium tracking-tighter mb-2">0s</span>
<span className="text-sm text-neutral-500">Response delay</span>
</div>
<div>
<span className="block text-4xl font-medium tracking-tighter mb-2">100%</span>
<span className="text-sm text-neutral-500">Lead capture</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white" id="how-we-work">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter">How We Work</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="relative pl-8 md:pl-0 border-l md:border-l-0 md:border-t border-neutral-200 md:pt-8 group">
<span className="absolute left-[-5px] top-0 md:relative md:left-0 md:top-0 block w-2.5 h-2.5 bg-black rounded-full mb-6 md:group-hover:translate-x-2 transition-transform duration-300"></span>
<span className="block text-xs font-mono text-neutral-400 mb-2">01</span>
<h3 className="text-lg font-medium tracking-tight mb-3">Understand the Business</h3>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                        We analyze your current workflows, identify bottlenecks, and pinpoint high-impact opportunities for automation.
                    </p>
</div>

<div className="relative pl-8 md:pl-0 border-l md:border-l-0 md:border-t border-neutral-200 md:pt-8 group">
<span className="absolute left-[-5px] top-0 md:relative md:left-0 md:top-0 block w-2.5 h-2.5 bg-neutral-300 rounded-full mb-6 md:group-hover:translate-x-2 transition-transform duration-300"></span>
<span className="block text-xs font-mono text-neutral-400 mb-2">02</span>
<h3 className="text-lg font-medium tracking-tight mb-3">Build Smart Automations</h3>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                        We design and engineer custom AI agents and workflows tailored specifically to your operational needs.
                    </p>
</div>

<div className="relative pl-8 md:pl-0 border-l md:border-l-0 md:border-t border-neutral-200 md:pt-8 group">
<span className="absolute left-[-5px] top-0 md:relative md:left-0 md:top-0 block w-2.5 h-2.5 bg-neutral-300 rounded-full mb-6 md:group-hover:translate-x-2 transition-transform duration-300"></span>
<span className="block text-xs font-mono text-neutral-400 mb-2">03</span>
<h3 className="text-lg font-medium tracking-tight mb-3">Launch &amp; Optimize</h3>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs">
                        We deploy the solution, train your team, and continuously refine the system based on performance data.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden" id="contact">
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-4">Ready to Automate?</h2>
<p className="text-neutral-500">Tell us about your business needs.</p>
</div>

<form action="https://formspree.io/f/maqwdaaw" className="space-y-12" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="relative">
<input className="custom-input block w-full bg-transparent border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-black transition-colors" id="name" name="name" placeholder=" " required="" type="text"/>
<label className="absolute left-0 top-3 text-neutral-400 pointer-events-none transition-all duration-300 origin-left" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="custom-input block w-full bg-transparent border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-black transition-colors" id="email" name="email" placeholder=" " required="" type="email"/>
<label className="absolute left-0 top-3 text-neutral-400 pointer-events-none transition-all duration-300 origin-left" htmlFor="email">Business Email</label>
</div>
</div>
<div className="relative">
<input className="custom-input block w-full bg-transparent border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-black transition-colors" id="phone" name="phone" placeholder=" " type="tel"/>
<label className="absolute left-0 top-3 text-neutral-400 pointer-events-none transition-all duration-300 origin-left" htmlFor="phone">Phone Number</label>
</div>
<div className="relative">
<textarea className="custom-input block w-full bg-transparent border-b border-neutral-200 py-3 text-neutral-900 focus:outline-none focus:border-black transition-colors resize-none" id="message" name="message" placeholder=" " required="" rows="4"></textarea>
<label className="absolute left-0 top-3 text-neutral-400 pointer-events-none transition-all duration-300 origin-left" htmlFor="message">How can we help?</label>
</div>
<div className="pt-6 flex justify-center">
<button className="bg-black text-white px-10 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all duration-300 transform hover:-translate-y-1" type="submit">
                        Send Request
                    </button>
</div>
</form>
</div>
</section>

<footer className="py-12 px-6 md:px-12 border-t border-neutral-100 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-1">
<span className="text-lg font-medium tracking-tighter">LOCALEDGE.AI</span>
<span className="text-xs text-neutral-400">© Localedge.ai – All rights reserved</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<a className="text-sm font-medium text-neutral-600 hover:text-black transition-colors" href="mailto:omkar@localedge.space">
                    omkar@localedge.space
                </a>
</div>
</div>
</footer>



    </>
  );
}
