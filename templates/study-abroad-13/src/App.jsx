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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">OCI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-slate-900 transition-colors" href="#benefits">Why UK</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#success">Success Stories</a>
</div>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2" href="#consultation">
                Free Assessment
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10 opacity-70"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
<span>Now accepting applications for upcoming intake</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Study in the United Kingdom with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Scholarship &amp; PSW Visa</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Build your global career with a British degree. We provide structured admission planning, scholarship negotiation, and strong visa preparation for Bangladeshi students.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group" href="#consultation">
                    Get Free UK Profile Assessment
                    <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-full transition-all flex items-center justify-center gap-2" href="#eligibility">
<iconify-icon icon="solar:diploma-verified-linear" width="18"></iconify-icon>
                    Check Scholarship Eligibility
                </a>
</div>

<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-slate-600">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
                    2-Year Graduate Route (PSW)
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
                    MOI Accepted (Select Cases)
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" width="18"></iconify-icon>
                    Strong UKVI Visa Prep
                </div>
</div>
</div>
</header>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Facing uncertainty about your UK study plans?</h2>
<p className="text-slate-500 mb-8">Many capable Bangladeshi students miss out due to lack of strategic planning. Do these sound familiar?</p>
<div className="space-y-4">
<div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
<iconify-icon icon="solar:hand-money-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">High Tuition Anxiety</h3>
<p className="text-sm text-slate-500 mt-1">Worried that a UK degree is financially out of reach without proper funding.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
<iconify-icon icon="solar:danger-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">Visa Rejection Fear</h3>
<p className="text-sm text-slate-500 mt-1">Concerned about the complexity of UKVI documentation and strict compliance.</p>
</div>
</div>
<div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
<div className="p-2 bg-red-50 text-red-600 rounded-lg shrink-0">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-slate-900">IELTS Pressure</h3>
<p className="text-sm text-slate-500 mt-1">Struggling to meet the exact band scores required for top-tier universities.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100 rounded-2xl transform rotate-3"></div>
<div className="relative bg-white rounded-2xl border border-slate-200 p-8 shadow-xl">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
<div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900">The Cost of Poor Planning</h3>
</div>
<ul className="space-y-4">
<li className="flex gap-3 text-slate-600 text-sm">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Risk of immediate visa refusal due to poor financial documentation.</span>
</li>
<li className="flex gap-3 text-slate-600 text-sm">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Missed deadlines for scholarship applications worth up to £5,000.</span>
</li>
<li className="flex gap-3 text-slate-600 text-sm">
<iconify-icon className="text-slate-400 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>Selecting "blacklisted" or low-tier universities that hurt career prospects.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="benefits">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Why Choose the UK?</h2>
<p className="text-slate-500 mt-3">World-class education meets career acceleration.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg transition-all group">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:case-round-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">2-Year Graduate Route (PSW)</h3>
<p className="text-sm text-slate-500 leading-relaxed">Stay and work in the UK for 2 years after graduation (3 years for PhD) to gain international experience.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg transition-all group">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Fast-Track Degrees</h3>
<p className="text-sm text-slate-500 leading-relaxed">Complete a Bachelor's in 3 years and a Master's in just 1 year, saving both time and living costs.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-lg transition-all group">
<div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:earth-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Global Recognition</h3>
<p className="text-sm text-slate-500 leading-relaxed">Degrees from UK universities are respected worldwide, opening doors to global job markets.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-slate-300" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-16">
<div>
<span className="text-blue-400 font-medium tracking-wide uppercase text-xs mb-2 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight">Comprehensive support from application to arrival.</h2>
</div>
<div className="flex items-end">
<p className="text-slate-400">We don't just fill forms. We build a strategy to maximize your chances of admission, scholarships, and visa approval.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-blue-400 mb-4" icon="solar:tuning-2-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-3">Strategic Selection</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Budget-focused filtering</li>
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Career-aligned courses</li>
</ul>
</div>

<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-blue-400 mb-4" icon="solar:wallet-money-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-3">Scholarship Support</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Merit-based guidance</li>
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Tuition discount negotiation</li>
</ul>
</div>

<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-blue-400 mb-4" icon="solar:passport-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-3">UKVI Visa Prep</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Financial sponsor guidance</li>
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Mock interview sessions</li>
</ul>
</div>

<div className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-blue-400 mb-4" icon="solar:plane-linear" width="32"></iconify-icon>
<h3 className="text-white font-medium mb-3">Pre-Departure</h3>
<ul className="space-y-2 text-sm text-slate-400">
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Accommodation assistance</li>
<li className="flex gap-2"><iconify-icon className="text-blue-500" icon="solar:check-read-linear"></iconify-icon> Travel &amp; cultural briefing</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white" id="process">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Your Roadmap to the UK</h2>
<p className="text-slate-500 mt-2">A transparent 5-step process designed for success.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<div className="w-10 h-10 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold mb-3">1</div>
<h4 className="font-medium text-slate-900 text-sm">Profile Assessment</h4>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<div className="w-10 h-10 mx-auto bg-white border-2 border-slate-200 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mb-3">2</div>
<h4 className="font-medium text-slate-900 text-sm">University Shortlist</h4>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<div className="w-10 h-10 mx-auto bg-white border-2 border-slate-200 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mb-3">3</div>
<h4 className="font-medium text-slate-900 text-sm">Application</h4>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<div className="w-10 h-10 mx-auto bg-white border-2 border-slate-200 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mb-3">4</div>
<h4 className="font-medium text-slate-900 text-sm">Visa Filing</h4>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 text-center shadow-sm">
<div className="w-10 h-10 mx-auto bg-white border-2 border-slate-200 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold mb-3">5</div>
<h4 className="font-medium text-slate-900 text-sm">Fly to UK</h4>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t border-slate-100" id="success">
<div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
<div>
<div className="text-3xl font-semibold text-slate-900 mb-1">98%</div>
<div className="text-sm text-slate-500">Visa Success Rate</div>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 mb-1">UKVI</div>
<div className="text-sm text-slate-500">Compliant Process</div>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 mb-1">100+</div>
<div className="text-sm text-slate-500">University Partners</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="consultation">
<div className="max-w-4xl mx-auto">
<div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl overflow-hidden relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4 relative z-10">
                    Start Your UK Journey with the Right Strategy
                </h2>
<p className="text-slate-300 mb-8 max-w-xl mx-auto relative z-10">
                    Avoid costly mistakes. Secure your admission and scholarship with expert guidance.
                </p>
<div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg inline-block px-4 py-2 mb-8 relative z-10">
<p className="text-blue-200 text-sm font-medium flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                        Limited intake slots available for upcoming semester
                    </p>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
<button className="bg-white text-slate-900 hover:bg-slate-50 font-semibold px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2">
                        Book Free UK Consultation
                        <iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</button>
<button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50">
                        Get Scholarship Assessment
                        <iconify-icon icon="solar:diploma-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:global-linear" width="14"></iconify-icon>
</div>
<span className="font-semibold text-slate-900">OCI</span>
</div>
<p className="text-sm text-slate-400">© 2023 OCI. Helping Bangladeshi students study globally.</p>
<div className="flex gap-6 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:whatsapp-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
