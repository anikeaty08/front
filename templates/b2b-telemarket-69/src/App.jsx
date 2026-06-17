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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 mix-blend-lighten brightness-200" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>

<nav className="glass-nav fixed top-0 w-full z-50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">

<a className="text-slate-900 text-lg font-semibold tracking-tight flex items-center gap-2" href="/">
<span className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-height="16" data-icon="lucide:phone" data-width="16" style={{strokeWidth: '1.5'}}></span>
</span>
                    FOUNDATION.
                </a>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#industries">Industries</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#resources">Resources</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="tel:800-290-8714">800-290-8714</a>
<a className="bg-slate-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-all shadow-sm ring-1 ring-slate-900/5" href="#contact">
                    Get a Quote
                </a>
</div>

<button className="md:hidden text-slate-500">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 subtle-grid -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Celebrating 40+ Years of Excellence
            </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                B2B Telemarketing That <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Delivers Results.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                When email falls flat and social media gets ignored, our executive-quality phone campaigns cut through the noise. Generate qualified leads, fill your events, and grow your membership.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center justify-center gap-2" href="#contact">
                    Get Consultation
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-white text-slate-700 text-sm font-medium rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#results">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    See Our Results
                </a>
</div>

<div className="mt-20 pt-10 border-t border-slate-100">
<p className="text-xs text-slate-400 font-medium tracking-wide uppercase mb-6">Trusted by Trade Associations &amp; Fortune 500 Companies</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tighter text-lg"><span className="iconify" data-icon="lucide:globe" data-width="20"></span> GlobalTrade</div>
<div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tighter text-lg"><span className="iconify" data-icon="lucide:building-2" data-width="20"></span> MetroAssoc</div>
<div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tighter text-lg"><span className="iconify" data-icon="lucide:stethoscope" data-width="20"></span> HealthConnect</div>
<div className="flex items-center gap-2 text-slate-900 font-semibold tracking-tighter text-lg"><span className="iconify" data-icon="lucide:factory" data-width="20"></span> ManufacGroup</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Marketing channels come and go.<br/>The phone still works.</h2>
<p className="text-slate-500 leading-relaxed">
                        In an age of inbox overload, direct conversation remains the most powerful way to reach decision-makers. We deliver informational, courtesy calls—not aggressive pitches.
                    </p>
</div>
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 group" href="#all-services">
                    View all services 
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:target" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Lead Generation</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Fill your sales pipeline with qualified, ready-to-buy prospects. We identify and score leads so your team can focus on closing.
                    </p>
<a className="text-xs font-medium text-slate-900 flex items-center gap-1 group/link" href="#">
                        Learn more <span className="iconify group-hover/link:translate-x-1 transition-transform" data-icon="lucide:chevron-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Event Attendance</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Transform "good" attendance into "great". We convert busy professionals into engaged attendees for conferences and webinars.
                    </p>
<a className="text-xs font-medium text-slate-900 flex items-center gap-1 group/link" href="#">
                        Learn more <span className="iconify group-hover/link:translate-x-1 transition-transform" data-icon="lucide:chevron-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:heart-handshake" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Membership Marketing</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Recruit new members and retain existing ones. We understand associations and what motivates professional membership.
                    </p>
<a className="text-xs font-medium text-slate-900 flex items-center gap-1 group/link" href="#">
                        Learn more <span className="iconify group-hover/link:translate-x-1 transition-transform" data-icon="lucide:chevron-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:store" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Exhibit &amp; Sponsorship</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Maximize revenue from your events. We reach potential exhibitors with compelling value propositions that close deals.
                    </p>
<a className="text-xs font-medium text-slate-900 flex items-center gap-1 group/link" href="#">
                        Learn more <span className="iconify group-hover/link:translate-x-1 transition-transform" data-icon="lucide:chevron-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:database" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Database Services</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Clean, accurate data drives results. We build, cleanse, and enhance your database to ensure every call reaches the right person.
                    </p>
<a className="text-xs font-medium text-slate-900 flex items-center gap-1 group/link" href="#">
                        Learn more <span className="iconify group-hover/link:translate-x-1 transition-transform" data-icon="lucide:chevron-right" data-width="14"></span>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
<div className="w-12 h-12 bg-violet-50 rounded-xl flex items-center justify-center text-violet-600 mb-6 group-hover:bg-violet-600 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:presentation" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-3">Consulting &amp; Training</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                        Build in-house capabilities. We provide expert consulting, script writing, and training to help your team succeed.
                    </p>
<a className="text-xs font-medium text-slate-900 flex items-center gap-1 group/link" href="#">
                        Learn more <span className="iconify group-hover/link:translate-x-1 transition-transform" data-icon="lucide:chevron-right" data-width="14"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Why Foundation Marketing?</h2>
<p className="text-slate-500 text-lg mb-8 leading-relaxed">
                        We've seen marketing trends come and go. Telemarketing works because human connection never goes out of style.
                    </p>
<div className="space-y-6">

<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="14" style={{strokeWidth: '3'}}></span>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Executive-Quality Calls</h4>
<p className="text-sm text-slate-500">Our team members are articulate, mature professionals with extensive B2B experience—not entry-level workers.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="14" style={{strokeWidth: '3'}}></span>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Brand Protection</h4>
<p className="text-sm text-slate-500">Your reputation is on the line. We represent your brand with informational, courteous conversations that build trust.</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
<span className="iconify text-blue-600" data-icon="lucide:check" data-width="14" style={{strokeWidth: '3'}}></span>
</div>
<div>
<h4 className="text-slate-900 font-medium mb-1">Measurable ROI</h4>
<p className="text-sm text-slate-500">Telemarketing is flexible, adaptable, and provides clear, trackable returns on your investment.</p>
</div>
</div>
</div>
</div>

<div className="relative bg-slate-50 rounded-3xl p-8 border border-slate-100">

<div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
<div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
<div className="relative space-y-4">

<div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Conversion Rate</div>
<div className="text-xl font-semibold text-slate-900">High Quality</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4 ml-8">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
<span className="iconify" data-icon="lucide:calendar-check" data-width="20"></span>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Experience</div>
<div className="text-xl font-semibold text-slate-900">40+ Years</div>
</div>
</div>

<div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
<div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Scope</div>
<div className="text-xl font-semibold text-slate-900">Nationwide</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-3xl font-semibold text-slate-900 tracking-tight mb-16">What our clients say</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="mb-6 text-blue-600">
<span className="iconify" data-icon="lucide:quote" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<blockquote className="text-lg text-slate-700 font-medium mb-6">
                        "Not only does Foundation Marketing Group deliver results, it adds value. The only question we ask ourselves is, 'Why didn't we get involved with them sooner?'"
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-semibold text-sm">TW</div>
<div>
<div className="text-sm font-semibold text-slate-900">Tim W.</div>
<div className="text-xs text-slate-500">Chief Revenue Officer, Financial Services</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<div className="mb-6 text-blue-600">
<span className="iconify" data-icon="lucide:quote" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<blockquote className="text-lg text-slate-700 font-medium mb-6">
                        "Your customer service is far above anyone else and we truly appreciate the care you show to our account and brand."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 font-semibold text-sm">TW</div>
<div>
<div className="text-sm font-semibold text-slate-900">Tina W.</div>
<div className="text-xs text-slate-500">Director, Trade Show Marketing</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Ready to see measurable results?</h2>
<p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Join the trade associations, event producers, and corporations that trust Foundation Marketing Group with their most critical campaigns.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/50" href="tel:800-290-8714">
                    Call 800-290-8714
                </a>
<a className="px-8 py-3 bg-transparent border border-slate-600 text-white font-medium rounded-lg hover:bg-white/10 transition-all" href="#contact">
                    Request a Proposal
                </a>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="text-slate-900 text-lg font-semibold tracking-tight flex items-center gap-2" href="/">
<span className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:phone" data-width="12"></span>
</span>
                        FOUNDATION.
                    </a>
<div className="space-y-3 text-sm text-slate-500">
<p>481 N Frederick Ave #220<br/>Gaithersburg, MD 20877</p>
<p className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                            Randyl@foundationmarketing.com
                        </p>
<p className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                            800-290-8714
                        </p>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">B2B Lead Generation</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Event Attendance</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Membership Marketing</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Exhibit Sales</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Database Services</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Our Team</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Why Choose Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Quick Contact</h4>
<form className="space-y-3">
<input className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all" placeholder="Your email" type="email"/>
<textarea className="w-full text-sm px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all" placeholder="Message" rows="2"></textarea>
<button className="w-full text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-all" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 Foundation Marketing Group, Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-600 transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
