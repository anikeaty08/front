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
          const reveals = document.querySelectorAll('.reveal');

          const revealOnScroll = () => {
              const windowHeight = window.innerHeight;
              const elementVisible = 100;

              reveals.forEach((reveal) => {
                  const elementTop = reveal.getBoundingClientRect().top;
                  if (elementTop < windowHeight - elementVisible) {
                      reveal.classList.add('active');
                  }
              });
          };

          window.addEventListener('scroll', revealOnScroll);
          revealOnScroll(); // Trigger once on load
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
      

<nav className="fixed top-0 w-full z-50 bg-slate-100/90 backdrop-blur-md border-b border-slate-200 py-4 reveal active">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="font-serif tracking-tight font-semibold text-xl text-slate-900">
            VRA
          </span>
<div className="h-4 w-[1px] bg-slate-400"></div>
<span className="text-xs uppercase tracking-widest text-slate-500 font-medium">
            VAS Division
          </span>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2 text-xs font-medium uppercase tracking-widest text-slate-900 border border-slate-300 hover:bg-slate-200 transition-colors duration-300" href="#assessment">
          Contact
        </a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Corporate Infrastructure" className="w-full h-full object-cover opacity-15 grayscale" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-0 left-10 w-[1px] h-full bg-slate-200/50 hidden lg:block"></div>
<div className="absolute top-0 right-10 w-[1px] h-full bg-slate-200/50 hidden lg:block"></div>
<div className="max-w-4xl mx-auto relative z-10 space-y-8">

<div className="inline-flex items-center gap-2 px-4 py-1.5 border border-slate-200 rounded-full bg-slate-50/50 backdrop-blur-sm reveal delay-100 active">
<span className="iconify text-green-500" data-icon="lucide:laurel-wreath" data-width="16"></span>
<span className="text-xs font-medium uppercase tracking-widest text-slate-600">
            Backed by 60 Years of Engineering Excellence
          </span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-slate-900 leading-[1.1] reveal delay-200 active">
          Beyond Power.
          <br/>
<span className="italic font-serif text-slate-600">
            Technical Mastery.
          </span>
</h1>

<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed reveal delay-300 active">
          Energy drives business, but inefficiency silently drains it. We
          protect your operations from hidden losses.
        </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 reveal delay-500 active">
<a className="neo-shadow bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-sm uppercase tracking-widest font-medium transition-transform hover:-translate-y-1 duration-300 w-full sm:w-auto" href="#assessment">
            Request Assessment
          </a>
<a className="group flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-widest font-medium text-slate-700 hover:text-green-600 transition-colors w-full sm:w-auto justify-center" href="#brochure">
            Download Brochure
            <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 border-b border-slate-200 bg-slate-50">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
<div className="lg:col-span-5 space-y-6 sticky top-24 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Why VRA Now Offers
            <br/>
            More Than Power
          </h2>
<div className="w-16 h-[2px] bg-green-500"></div>
<p className="text-slate-600 text-lg leading-relaxed">
            For six decades, we have powered a nation. To do so, we built an
            ecosystem of rigorous testing, safety protocols, and engineering
            precision.
          </p>
</div>
<div className="lg:col-span-7 space-y-12 reveal delay-200">
<div className="relative h-72 w-full mb-8 rounded-sm overflow-hidden shadow-xl reveal delay-100">
<img alt="Engineering Excellence" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
</div>
<div className="bg-white p-8 md:p-12 border border-slate-200 neo-shadow relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:columns-2" data-width="120" height="120" role="img" viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M12 3v18"></path></g></svg>
</div>
<p className="text-xl font-serif italic text-slate-800 mb-6">
              "After six decades of optimizing our own systems, we’re now
              opening that expertise to support yours."
            </p>
<p className="text-slate-600 leading-relaxed">
              VAS isn’t a new category—it’s VRA sharing the same systems,
              audits, and efficiency controls that kept Ghana’s power running
              reliably for decades. We are transitioning from a utility provider
              to a comprehensive technical excellence partner.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 pt-8 border-t border-slate-100">
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-green-500 mt-1 iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-slate-700">
                  Internal capacity developed over 60 years
                </span>
</div>
<div className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-green-500 mt-1 iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm text-slate-700">
                  Standards that meet international benchmarks
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<span className="text-xs font-medium uppercase tracking-widest text-green-600 mb-4 block">
            The Benefits
          </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">
            Tangible. Measurable. Lasting.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-8 border border-slate-200 hover:border-green-500/50 bg-white transition-all duration-500 hover:shadow-lg group reveal">
<div className="h-12 w-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-green-50 group-hover:border-green-200 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 group-hover:text-green-600 iconify--lucide" data-icon="lucide:trending-down" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 17h6v-6"></path><path d="m22 17l-8.5-8.5l-5 5L2 7"></path></g></svg>
</div>
<h3 className="text-xl font-semibold font-serif text-slate-900 mb-3">
              Reduce Operational Waste
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Identify and plug invisible energy leaks that inflate your
              overhead costs.
            </p>
</div>

<div className="p-8 border border-slate-200 hover:border-green-500/50 bg-white transition-all duration-500 hover:shadow-lg group reveal delay-100">
<div className="h-12 w-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-green-50 group-hover:border-green-200 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 group-hover:text-green-600 iconify--lucide" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold font-serif text-slate-900 mb-3">
              Improve Safety Outcomes
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Protect your workforce with protocols tested in high-voltage
              environments.
            </p>
</div>

<div className="p-8 border border-slate-200 hover:border-green-500/50 bg-white transition-all duration-500 hover:shadow-lg group reveal delay-200">
<div className="h-12 w-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-green-50 group-hover:border-green-200 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 group-hover:text-green-600 iconify--lucide" data-icon="lucide:activity" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold font-serif text-slate-900 mb-3">
              Minimize Downtime
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Predict equipment failures before they halt your production line.
            </p>
</div>

<div className="p-8 border border-slate-200 hover:border-green-500/50 bg-white transition-all duration-500 hover:shadow-lg group reveal">
<div className="h-12 w-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-green-50 group-hover:border-green-200 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 group-hover:text-green-600 iconify--lucide" data-icon="lucide:leaf" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
</div>
<h3 className="text-xl font-semibold font-serif text-slate-900 mb-3">
              Environmental Responsibility
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Meet regulatory standards and reduce your carbon footprint
              effortlessly.
            </p>
</div>

<div className="p-8 border border-slate-200 hover:border-green-500/50 bg-white transition-all duration-500 hover:shadow-lg group reveal delay-100">
<div className="h-12 w-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-green-50 group-hover:border-green-200 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 group-hover:text-green-600 iconify--lucide" data-icon="lucide:graduation-cap" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></g></svg>
</div>
<h3 className="text-xl font-semibold font-serif text-slate-900 mb-3">
              Expert Insights
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Access engineering consultancy previously unavailable to the
              private sector.
            </p>
</div>

<div className="p-8 border border-slate-200 hover:border-green-500/50 bg-white transition-all duration-500 hover:shadow-lg group reveal delay-200">
<div className="h-12 w-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-green-50 group-hover:border-green-200 transition-colors">
<svg aria-hidden="true" className="iconify text-slate-700 group-hover:text-green-600 iconify--lucide" data-icon="lucide:coins" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"></path><path d="m16.71 13.88l.7.71l-2.82 2.82"></path></g></svg>
</div>
<h3 className="text-xl font-semibold font-serif text-slate-900 mb-3">
              Lower Production Costs
            </h3>
<p className="text-sm text-slate-600 leading-relaxed">
              Optimize long-term efficiency to directly improve your bottom
              line.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-200">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-16 text-center reveal">
          What You Get With VAS
        </h2>
<div className="space-y-0 divide-y divide-slate-200 border-t border-b border-slate-200">

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 group hover:bg-slate-50 transition-colors reveal">
<div className="md:col-span-4 flex items-start gap-4">
<span className="text-3xl font-serif text-slate-300 group-hover:text-green-500 transition-colors">
                I.
              </span>
<h3 className="text-2xl font-serif font-medium text-slate-900">
                Energy &amp; Waste Auditing
              </h3>
<div className="mt-6 w-full h-40 rounded-sm overflow-hidden shadow-sm hidden md:block group-hover:shadow-md transition-shadow">
<img alt="Auditing" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-slate-400">
                  The Pain
                </span>
<p className="text-sm text-slate-600">
                  Companies unknowingly pay for energy that doesn't contribute
                  to production.
                </p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-slate-400">
                  The Promise
                </span>
<p className="text-sm text-slate-600">
                  We analyze consumption patterns to find leaks and
                  inefficiencies.
                </p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-green-600">
                  The Outcome
                </span>
<p className="text-sm text-slate-800 font-medium">
                  Recovered revenue and optimized utility spend.
                </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 group hover:bg-slate-50 transition-colors reveal">
<div className="md:col-span-4 flex items-start gap-4">
<span className="text-3xl font-serif text-slate-300 group-hover:text-green-500 transition-colors">
                II.
              </span>
<h3 className="text-2xl font-serif font-medium text-slate-900">
                Safety &amp; Process Auditing
              </h3>
<div className="mt-6 w-full h-40 rounded-sm overflow-hidden shadow-sm hidden md:block group-hover:shadow-md transition-shadow">
<img alt="Safety" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-slate-400">
                  The Pain
                </span>
<p className="text-sm text-slate-600">
                  Operational blind spots create risks for workers and
                  compliance.
                </p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-slate-400">
                  The Promise
                </span>
<p className="text-sm text-slate-600">
                  We identify technical risks that threaten productivity and
                  safety.
                </p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-green-600">
                  The Outcome
                </span>
<p className="text-sm text-slate-800 font-medium">
                  A safer workplace and minimized liability.
                </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 group hover:bg-slate-50 transition-colors reveal">
<div className="md:col-span-4 flex items-start gap-4">
<span className="text-3xl font-serif text-slate-300 group-hover:text-green-500 transition-colors">
                III.
              </span>
<h3 className="text-2xl font-serif font-medium text-slate-900">
                Technical &amp; Management Training
              </h3>
<div className="mt-6 w-full h-40 rounded-sm overflow-hidden shadow-sm hidden md:block group-hover:shadow-md transition-shadow">
<img alt="Training" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-slate-400">
                  The Pain
                </span>
<p className="text-sm text-slate-600">
                  Staff lack the specialized technical skills to maintain modern
                  systems.
                </p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-slate-400">
                  The Promise
                </span>
<p className="text-sm text-slate-600">
                  We build your internal capacity with real-world engineering
                  expertise.
                </p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-green-600">
                  The Outcome
                </span>
<p className="text-sm text-slate-800 font-medium">
                  An empowered, technically competent workforce.
                </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 group hover:bg-slate-50 transition-colors reveal">
<div className="md:col-span-4 flex items-start gap-4">
<span className="text-3xl font-serif text-slate-300 group-hover:text-green-500 transition-colors">
                IV.
              </span>
<h3 className="text-2xl font-serif font-medium text-slate-900">
                Equipment Testing &amp; Support
              </h3>
<div className="mt-6 w-full h-40 rounded-sm overflow-hidden shadow-sm hidden md:block group-hover:shadow-md transition-shadow">
<img alt="Equipment" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-slate-400">
                  The Pain
                </span>
<p className="text-sm text-slate-600">
                  Uncertainty about the reliability of critical infrastructure.
                </p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-slate-400">
                  The Promise
                </span>
<p className="text-sm text-slate-600">
                  We ensure critical equipment operates efficiently under expert
                  supervision.
                </p>
</div>
<div className="space-y-2">
<span className="text-xs uppercase tracking-widest text-green-600">
                  The Outcome
                </span>
<p className="text-sm text-slate-800 font-medium">
                  Maximum asset lifespan and operational continuity.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
<img alt="Background Texture" className="absolute inset-0 w-full h-full object-cover opacity-5 mix-blend-multiply pointer-events-none" src="https://images.unsplash.com/photo-1487875961445-47a00398c267?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-12 reveal">
          Why Businesses Trust Us
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-b border-slate-200 pb-12">
<div className="reveal">
<span className="block text-4xl font-serif text-slate-800 mb-2">
              60+
            </span>
<span className="text-xs uppercase tracking-widest text-slate-500">
              Years of Excellence
            </span>
</div>
<div className="reveal delay-100">
<span className="block text-4xl font-serif font-bold text-slate-800 mb-2 font-semibold">
              100%
            </span>
<span className="text-xs uppercase tracking-widest text-slate-500">
              Engineering Certified
            </span>
</div>
<div className="reveal delay-200">
<span className="block text-4xl font-serif font-bold text-slate-800 mb-2">
              24/7
            </span>
<span className="text-xs uppercase tracking-widest text-slate-500">
              Critical Uptime focus
            </span>
</div>
<div className="reveal delay-300">
<span className="block text-4xl font-serif font-bold text-slate-800 mb-2">
              Nat'l
            </span>
<span className="text-xs uppercase tracking-widest text-slate-500">
              Strategic Asset
            </span>
</div>
</div>

<div className="relative max-w-4xl mx-auto py-8 reveal">
<div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[1px] bg-slate-300"></div>
<div className="flex justify-between items-center w-full relative z-10">
<div className="bg-white px-4 py-2 border border-slate-200 text-sm font-medium shadow-sm">
              1961: Founded
            </div>
<div className="bg-white px-4 py-2 border border-slate-200 text-sm font-medium shadow-sm">
              2023: VAS Launch
            </div>
</div>
<p className="mt-8 text-slate-600 italic font-serif">
            "We’ve been doing this longer than most companies have existed."
          </p>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-green-600 mb-2 block">
              Case Snapshots
            </span>
<h2 className="text-4xl font-semibold tracking-tight text-slate-900">
              Real Impact.
            </h2>
</div>
<div className="hidden md:block h-[1px] bg-slate-200 flex-1 ml-12 mb-2"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="border-l-2 border-slate-200 pl-6 hover:border-green-500 transition-colors duration-300 reveal">
<div className="h-40 mb-5 overflow-hidden rounded-sm shadow-sm">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs uppercase tracking-widest text-slate-400 mb-2 block">
              Manufacturing
            </span>
<h3 className="text-lg text-slate-900 mb-2 font-semibold">
              High Energy Losses
            </h3>
<p className="text-sm text-slate-600 mb-4">
              Challenge: A factory facing spiraling utility costs despite stable
              production.
            </p>
<div className="text-sm border-t border-slate-100 pt-3">
<span className="font-semibold text-slate-800">Outcome:</span>
<span className="text-slate-600">
                22% energy recovered via VRA audit.
              </span>
</div>
</article>

<article className="border-l-2 border-slate-200 pl-6 hover:border-green-500 transition-colors duration-300 reveal delay-100">
<div className="h-40 mb-5 overflow-hidden rounded-sm shadow-sm">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1518335359781-6f4c39832712?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs uppercase tracking-widest text-slate-400 mb-2 block">
              Mining
            </span>
<h3 className="text-lg font-bold text-slate-900 mb-2">
              Compliance Risk
            </h3>
<p className="text-sm text-slate-600 mb-4">
              Challenge: New environmental regulations threatened closure.
            </p>
<div className="text-sm border-t border-slate-100 pt-3">
<span className="font-semibold text-slate-800">Outcome:</span>
<span className="text-slate-600">
                Full compliance achieved in 3 months.
              </span>
</div>
</article>

<article className="border-l-2 border-slate-200 pl-6 hover:border-green-500 transition-colors duration-300 reveal delay-200">
<div className="h-40 mb-5 overflow-hidden rounded-sm shadow-sm">
<img className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs uppercase tracking-widest text-slate-400 mb-2 block">
              Public Facility
            </span>
<h3 className="text-lg font-bold text-slate-900 mb-2">
              Equipment Failure
            </h3>
<p className="text-sm text-slate-600 mb-4">
              Challenge: Critical HVAC systems failing repeatedly.
            </p>
<div className="text-sm border-t border-slate-100 pt-3">
<span className="font-semibold text-slate-800">Outcome:</span>
<span className="text-slate-600">
                Root cause fixed, 99.9% uptime restored.
              </span>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-slate-300 relative overflow-hidden">

<div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1617128734662-66da6c1d3505?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
<div className="max-w-3xl mx-auto relative z-10 text-center reveal">
<svg aria-hidden="true" className="iconify mx-auto text-green-500 mb-8 iconify--lucide" data-icon="lucide:alert-triangle" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h2 className="text-3xl md:text-5xl font-serif font-semibold text-white mb-8 leading-tight">
          The Leak Becomes a Flood.
        </h2>
<p className="text-lg md:text-xl font-serif italic leading-relaxed text-slate-400 mb-8">
          Imagine a production line running smoothly. Yet, deep within the
          electrical infrastructure, a minor inefficiency is overheating a
          critical component. It’s invisible to the naked eye. It costs pennies
          per hour—until the day it fails completely, halting operations for
          weeks.
        </p>
<p className="text-base text-slate-300 font-sans">
          Most businesses don’t realize the leak until it’s too late. VRA helps
          you see it early.
        </p>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold text-center mb-16 text-slate-900 reveal">
          The VRA Difference
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-slate-200 shadow-sm reveal">

<div className="p-10 bg-slate-50 text-slate-500">
<h3 className="text-xl font-serif text-slate-700 mb-6">
              Without VRA VAS
            </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Unchecked energy waste
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Unexpected downtime
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Regulatory penalties
              </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                Reactive maintenance
              </li>
</ul>
</div>

<div className="p-10 bg-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-green-500"></div>
<h3 className="text-xl font-serif text-slate-900 mb-6">With VRA VAS</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-800 font-medium">
                  Measurable cost savings
                </span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-800 font-medium">
                  Business continuity
                </span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-800 font-medium">
                  Confident compliance
                </span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-slate-800 font-medium">Safer workforce</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-center mb-12 text-slate-900 reveal">
          Common Questions
        </h2>
<div className="space-y-4 reveal">
<details className="group bg-white border border-slate-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between font-serif text-lg font-medium text-slate-800">
              We’re a small business — is this service for us?
              <span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed group-open:animate-fadeIn">
              Yes. Our solutions are scalable. Whether you run a single factory
              or a nationwide operation, efficiency scales with you.
            </p>
</details>
<details className="group bg-white border border-slate-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between font-serif text-lg font-medium text-slate-800">
              Is VRA equipped to audit non-energy operations?
              <span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed group-open:animate-fadeIn">
              Absolutely. Our 60 years of operation involves complex logistics,
              safety protocols, and mechanical engineering that extends far
              beyond just electricity generation.
            </p>
</details>
<details className="group bg-white border border-slate-200 p-6 [&amp;_summary::-webkit-details-marker]:hidden cursor-pointer">
<summary className="flex items-center justify-between font-serif text-lg font-medium text-slate-800">
              Is this disruptive to our operations?
              <span className="transition group-open:rotate-180">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<p className="text-slate-600 mt-4 leading-relaxed group-open:animate-fadeIn">
              We prioritize business continuity. Most assessments are
              non-intrusive, and any necessary testing is scheduled around your
              downtime.
            </p>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative" id="assessment">
<div className="max-w-4xl mx-auto border border-slate-200 neo-shadow p-8 md:p-16 bg-slate-50 reveal">
<div className="text-center mb-10">
<h2 className="text-4xl font-semibold font-serif text-slate-900 mb-4">
            Request a Professional Assessment
          </h2>
<p className="text-slate-600">
            No obligation. Our experts will guide you through the first steps.
          </p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-slate-500">
                Name
              </label>
<input className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-green-500 transition-colors" placeholder="Full Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-slate-500">
                Company
              </label>
<input className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-green-500 transition-colors" placeholder="Company Name" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-slate-500">
              Service Interest
            </label>
<select className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-green-500 transition-colors text-slate-700">
<option>Energy &amp; Waste Auditing</option>
<option>Safety &amp; Process Auditing</option>
<option>Technical Training</option>
<option>Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-slate-500">
              Email
            </label>
<input className="w-full bg-white border border-slate-300 px-4 py-3 focus:outline-none focus:border-green-500 transition-colors" placeholder="work@email.com" type="email"/>
</div>
<button className="w-full bg-green-500 text-white font-medium uppercase tracking-widest py-4 hover:bg-green-600 transition-all shadow-md hover:shadow-lg mt-4" type="button">
            Submit Request
          </button>
</form>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-200" id="brochure">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 reveal">
<div className="md:w-1/2">
<span className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-2 block">
            Not Ready Yet?
          </span>
<h3 className="text-3xl font-serif font-semibold text-slate-900 mb-4">
            Start with Knowledge.
          </h3>
<p className="text-slate-600 mb-8">
            Download our "Energy Efficiency &amp; Safety Optimization Checklist
            for Ghanaian Businesses".
          </p>
<button className="flex items-center gap-2 text-green-600 font-medium hover:text-green-700 border-b border-green-600 pb-1">
            Download Checklist PDF
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:download" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</button>
</div>
<div className="md:w-1/2 flex justify-center">
<img alt="Brochure" className="w-64 h-80 object-cover shadow-2xl rotate-3 border-4 border-white hover:rotate-0 transition-all duration-500 rounded-sm" src="https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white py-24 px-6 border-t-4 border-green-500">
<div className="max-w-4xl mx-auto text-center space-y-8 reveal">
<div className="inline-block p-4 border border-slate-700 rounded-full">
<span className="font-serif text-2xl font-bold tracking-tight">VRA</span>
</div>
<h2 className="text-3xl md:text-4xl font-serif">The VRA Promise</h2>
<p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          "We built Ghana’s power backbone. Now we’re here to strengthen yours."
        </p>
<div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
<p>© 2023 Volta River Authority. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
