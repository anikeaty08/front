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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight flex items-center gap-2 text-gray-900" href="#">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
                ARKON
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="hover:text-gray-900 transition-colors" href="#approach">Approach</a>
<a className="hover:text-gray-900 transition-colors" href="#testimonials">Insights</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-800 transition-all shadow-sm hover:shadow-md" href="#book">
                Book Consultation
                <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
<button className="md:hidden text-gray-500">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] opacity-30 pointer-events-none" style={{background: 'radial-gradient(circle at 50% 0%, #e5e7eb 0%, transparent 70%)'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-xs font-medium text-gray-600 mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Accepting new clients for Q4
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-6 leading-[1.1]">
                Strategic clarity for <br className="hidden md:block"/> complex enterprises.
            </h1>
<p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                We bridge the gap between ambitious vision and operational reality. Expert consulting to scale your business infrastructure.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-all shadow-sm flex items-center justify-center gap-2" href="#book">
                    Schedule a Discovery Call
                </a>
<a className="w-full sm:w-auto px-6 py-3 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2" href="#services">
                    View Services
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-gray-100 bg-white">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium text-gray-400 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-semibold tracking-tighter flex items-center gap-1"><span className="iconify" data-icon="lucide:hexagon" data-width="20"></span> ACME Corp</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-1"><span className="iconify" data-icon="lucide:triangle" data-width="20"></span> VORTEX</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-1"><span className="iconify" data-icon="lucide:circle" data-width="20"></span> SPHERE</span>
<span className="text-xl font-semibold tracking-tighter flex items-center gap-1"><span className="iconify" data-icon="lucide:square" data-width="20"></span> BLOCKS</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50" id="services">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">Areas of Expertise</h2>
<p className="text-gray-500 max-w-md">Tailored strategies designed to address specific friction points in your organization's growth trajectory.</p>
</div>
<a className="text-sm font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View full capabilities <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Growth Strategy</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Data-driven roadmaps to identify market opportunities and optimize revenue streams.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-gray-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="14"></span> Market Analysis
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="14"></span> Revenue Modeling
                        </li>
</ul>
</div>

<div className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Operational Efficiency</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Streamlining workflows and technology stacks to reduce overhead and increase velocity.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-gray-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="14"></span> Workflow Automation
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="14"></span> Resource Allocation
                        </li>
</ul>
</div>

<div className="group bg-white rounded-xl p-8 border border-gray-200 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300">
<div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100 mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:users" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Executive Coaching</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-6">Advisory services for C-suite leaders navigating organizational change and culture.</p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs text-gray-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="14"></span> Leadership Development
                        </li>
<li className="flex items-center gap-2 text-xs text-gray-600">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="14"></span> Change Management
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-gray-200 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="border-l border-gray-100 pl-6">
<div className="text-4xl font-medium tracking-tight text-gray-900 mb-2">12+</div>
<div className="text-sm text-gray-500">Years Experience</div>
</div>
<div className="border-l border-gray-100 pl-6">
<div className="text-4xl font-medium tracking-tight text-gray-900 mb-2">$50M</div>
<div className="text-sm text-gray-500">Revenue Optimized</div>
</div>
<div className="border-l border-gray-100 pl-6">
<div className="text-4xl font-medium tracking-tight text-gray-900 mb-2">85+</div>
<div className="text-sm text-gray-500">Clients Served</div>
</div>
<div className="border-l border-gray-100 pl-6">
<div className="text-4xl font-medium tracking-tight text-gray-900 mb-2">100%</div>
<div className="text-sm text-gray-500">Project Completion</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative" id="book">
<div className="absolute inset-0 bg-gray-50 skew-y-1 transform origin-bottom-right z-0 translate-y-20"></div>
<div className="max-w-5xl mx-auto relative z-10">
<div className="bg-white rounded-2xl shadow-xl shadow-gray-200 border border-gray-100 overflow-hidden flex flex-col md:flex-row">

<div className="p-10 md:w-2/5 bg-gray-900 text-white flex flex-col justify-between">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-4">Let's build something lasting.</h2>
<p className="text-gray-400 text-sm leading-relaxed mb-8">Select a service type to begin the booking process. We respond to all inquiries within 24 hours.</p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center flex-shrink-0">
<span className="iconify" data-icon="lucide:mail" data-width="16"></span>
</div>
<div>
<p className="text-sm font-medium">Email</p>
<p className="text-xs text-gray-400">hello@arkon.consulting</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center flex-shrink-0">
<span className="iconify" data-icon="lucide:calendar" data-width="16"></span>
</div>
<div>
<p className="text-sm font-medium">Availability</p>
<p className="text-xs text-gray-400">Mon-Fri, 9am - 6pm EST</p>
</div>
</div>
</div>
</div>
<div className="mt-12 flex items-center gap-4 text-gray-400">
<span className="iconify hover:text-white transition-colors cursor-pointer" data-icon="lucide:linkedin" data-width="20"></span>
<span className="iconify hover:text-white transition-colors cursor-pointer" data-icon="lucide:twitter" data-width="20"></span>
</div>
</div>

<div className="p-10 md:w-3/5">
<form className="space-y-6">
<div>
<label className="block text-xs font-medium text-gray-700 mb-4 uppercase tracking-wide">Select Service Type</label>
<div className="space-y-3">
<label className="block relative cursor-pointer group">
<input checked="" className="custom-radio sr-only" name="service" type="radio"/>
<div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-gray-300 relative radio-circle transition-colors"></div>
<div>
<span className="block text-sm font-medium text-gray-900">Discovery Call</span>
<span className="block text-xs text-gray-500">30 min • Free introduction</span>
</div>
</div>
<span className="text-sm font-medium text-gray-900">$0</span>
</div>
</label>
<label className="block relative cursor-pointer group">
<input className="custom-radio sr-only" name="service" type="radio"/>
<div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-gray-300 relative radio-circle transition-colors"></div>
<div>
<span className="block text-sm font-medium text-gray-900">Strategy Deep Dive</span>
<span className="block text-xs text-gray-500">2 hours • Intensive problem solving</span>
</div>
</div>
<span className="text-sm font-medium text-gray-900">$500</span>
</div>
</label>
<label className="block relative cursor-pointer group">
<input className="custom-radio sr-only" name="service" type="radio"/>
<div className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border border-gray-300 relative radio-circle transition-colors"></div>
<div>
<span className="block text-sm font-medium text-gray-900">Retainer Inquiry</span>
<span className="block text-xs text-gray-500">Long-term partnership</span>
</div>
</div>
<span className="text-sm font-medium text-gray-900">Custom</span>
</div>
</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Full Name</label>
<input className="w-full text-sm border-b border-gray-200 py-2 focus:outline-none focus:border-gray-900 transition-colors bg-transparent placeholder-gray-300" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-700">Email Address</label>
<input className="w-full text-sm border-b border-gray-200 py-2 focus:outline-none focus:border-gray-900 transition-colors bg-transparent placeholder-gray-300" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-1 pt-2">
<label className="text-xs font-medium text-gray-700">Project Details (Optional)</label>
<textarea className="w-full text-sm border-b border-gray-200 py-2 focus:outline-none focus:border-gray-900 transition-colors bg-transparent placeholder-gray-300 resize-none" placeholder="Briefly describe your challenge..." rows="2"></textarea>
</div>
<div className="pt-4">
<button className="w-full bg-gray-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-sm" type="button">
                                Confirm &amp; Book
                                <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-12">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tight flex items-center gap-2 text-gray-900 mb-6" href="#">
<span className="iconify" data-icon="lucide:layers" data-width="20"></span>
                        ARKON
                    </a>
<p className="text-xs text-gray-500 leading-relaxed">
                        Helping businesses navigate complexity with precision and clarity.
                    </p>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Services</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">Growth Strategy</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Operational Ops</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Digital Transformation</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Coaching</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Company</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Legal</h4>
<ul className="space-y-3 text-xs text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
<p className="text-xs text-gray-400">© 2023 Arkon Consulting. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-gray-500">All systems operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
