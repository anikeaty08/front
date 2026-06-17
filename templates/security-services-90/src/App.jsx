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
      

<header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<a className="font-semibold tracking-tighter text-xl flex items-center gap-2" href="#">
                AURA.
            </a>

<nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
<a className="hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#">Industries</a>
<a className="hover:text-slate-900 transition-colors" href="#">Careers</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden lg:block text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Client Portal</a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-sm" href="#">
                    Request Consultation
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-slate-200/40 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium text-slate-600 bg-slate-100 rounded-full border border-slate-200/60">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    Delivering intelligent assurance since 2020
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-slate-900 mb-6">
                    Professional security that protects what matters most.
                </h1>
<p className="text-base md:text-lg text-slate-500 mb-10 max-w-2xl leading-relaxed">
                    We provide intelligent risk reduction and operational continuity for Malaysia’s leading organizations. A trusted partnership built on calm authority, regulatory compliance, and human excellence.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-sm" href="#">
                        Schedule an Assessment
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm" href="#services">
                        Explore Our Services
                    </a>
</div>
</div>
</section>

<section className="border-y border-slate-200/60 bg-white py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-xs font-medium text-slate-500 uppercase tracking-wider">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
                        KDN Approved (2022)
                    </div>
<div className="hidden sm:block w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
                        MOF Registered
                    </div>
<div className="hidden sm:block w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
                        ISO Compliance Standards
                    </div>
<div className="hidden md:block w-px h-4 bg-slate-200"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
                        Vetted Professionals
                    </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="services">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Strategic protection capabilities.</h2>
<p className="text-slate-500 text-sm md:text-base leading-relaxed">
                    Moving beyond traditional guarding, we deploy comprehensive security architectures combining specialized personnel, procedural discipline, and active monitoring.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all group flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl text-slate-700" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Corporate Asset Protection</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                        Highly trained personnel maintaining calm authority in premium corporate environments, ensuring operational continuity and staff safety.
                    </p>
<div className="flex items-center gap-2 text-sm font-medium text-slate-900 mt-auto">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all group flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl text-slate-700" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Risk &amp; Vulnerability Consulting</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                        Intelligence-led assessments to identify physical and procedural vulnerabilities, delivering actionable frameworks for risk mitigation.
                    </p>
<div className="flex items-center gap-2 text-sm font-medium text-slate-900 mt-auto">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all group flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl text-slate-700" icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Executive Assurance</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                        Discreet, highly professional protection protocols for key personnel, emphasizing logistical precision and minimal operational friction.
                    </p>
<div className="flex items-center gap-2 text-sm font-medium text-slate-900 mt-auto">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all group flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl text-slate-700" icon="solar:monitor-camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Centralized Monitoring</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                        24/7 technological oversight integrating with physical operations for rapid incident verification and measured response deployment.
                    </p>
<div className="flex items-center gap-2 text-sm font-medium text-slate-900 mt-auto">
                        Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-2xl p-8 border border-slate-200/60 hover:border-slate-300 hover:shadow-sm transition-all group flex flex-col h-full md:col-span-2 lg:col-span-2 relative overflow-hidden">
<div className="relative z-10">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-6 text-xs font-medium text-slate-600 bg-slate-50 rounded-md border border-slate-200/60">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon> Specialized
                        </div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-2">Integrated Site Management</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-md">
                            A holistic approach combining access control, perimeter integrity, and visitor management into a seamless, highly professional experience for premium facilities.
                        </p>
<div className="flex items-center gap-2 text-sm font-medium text-slate-900 mt-auto">
                            View case studies <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-1/4 translate-y-1/4">
<iconify-icon height="200" icon="solar:network-linear" strokeWidth="1" width="200"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Intelligence over force. Partnership over provision.</h2>
<p className="text-base text-slate-500 mb-8 leading-relaxed">
                            We designed Aura to be the antithesis of the traditional security model. We believe true security feels like calm assurance, not aggressive control. Our methodology treats security as a critical business function that requires the same level of analytical rigor, compliance, and professional excellence as your financial or legal operations.
                        </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-xl text-slate-900" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Strict Regulatory Compliance</h4>
<p className="text-sm text-slate-500 leading-relaxed">Fully vetted by the Home Ministry, ensuring your corporate liability is minimized through rigorous adherence to national standards.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-xl text-slate-900" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Data-Driven Deployment</h4>
<p className="text-sm text-slate-500 leading-relaxed">We don't just place personnel; we deploy resources based on active threat assessments and operational intelligence.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1">
<iconify-icon className="text-xl text-slate-900" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-1">Discreet Professionalism</h4>
<p className="text-sm text-slate-500 leading-relaxed">Our personnel blend seamlessly into premium environments, reflecting your brand's standards while maintaining unwavering vigilance.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl border border-slate-200/60 p-8 h-full min-h-[400px] flex flex-col justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 space-y-4 max-w-sm mx-auto w-full">

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-900">Site Alpha Status</div>
<div className="text-xs text-slate-500">All protocols optimal</div>
</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
</div>

<div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between opacity-80 translate-x-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-900">Shift Transition</div>
<div className="text-xs text-slate-500">Verified at 08:00 MYT</div>
</div>
</div>
<div className="text-xs font-medium text-slate-400">Log</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 mb-8">
<iconify-icon className="text-2xl text-slate-300" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 max-w-2xl mx-auto text-white">
                    Excellence in security begins with people.
                </h2>
<p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    We do not outsource our standards. Every individual wearing the Aura insignia has undergone rigorous background verification, situational judgment training, and ongoing professional development. We invest heavily in our workforce because your peace of mind depends entirely on their competence.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-8 text-sm font-medium text-slate-300">
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon> Minimum 120hrs Initial Training
                    </div>
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon> Conflict De-escalation Certified
                    </div>
<div className="flex items-center justify-center gap-2">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon> First Aid &amp; Emergency Response
                    </div>
</div>
<div className="mt-12 pt-12 border-t border-slate-800">
<a className="text-sm font-medium text-white hover:text-slate-300 transition-colors inline-flex items-center gap-2" href="#">
                        Explore careers at Aura <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<iconify-icon className="text-4xl text-slate-300 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<blockquote className="text-xl md:text-2xl font-medium tracking-tight text-slate-900 mb-8 leading-snug">
                    "Aura transformed our approach from simply 'having guards' to implementing a cohesive security strategy. Their personnel are indistinguishable from our own corporate staff in terms of professionalism, yet consistently maintain absolute perimeter integrity."
                </blockquote>
<div className="text-sm font-semibold text-slate-900">Director of Facilities</div>
<div className="text-sm text-slate-500">Tier-1 Financial Institution, Kuala Lumpur</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200/60">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Focus on your business.<br/>We handle your security.</h2>
<p className="text-slate-500 mb-10 text-base leading-relaxed">
                    Contact our advisory team to discuss a tailored security architecture for your organization. Confidentiality assured.
                </p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-grow px-4 py-3 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-shadow placeholder:text-slate-400" placeholder="Enter your work email" type="email"/>
<button className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors shadow-sm whitespace-nowrap" type="button">
                        Request Callback
                    </button>
</form>
<p className="mt-4 text-xs text-slate-400">Or call our Kuala Lumpur headquarters at +60 3-XXXX XXXX</p>
</div>
</section>
</main>

<footer className="bg-slate-50 border-t border-slate-200/60 py-12 md:py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="font-semibold tracking-tighter text-lg mb-4 text-slate-900">AURA.</div>
<p className="text-xs text-slate-500 mb-6 max-w-xs leading-relaxed">
                        Intelligent security solutions for forward-thinking enterprises. Licensed by the Ministry of Home Affairs Malaysia.
                    </p>
<div className="text-xs text-slate-400 space-y-1">
<p>KDN License: XXXXXX-X</p>
<p>MOF Registration: XXXXXX-X</p>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Corporate Guarding</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Risk Consulting</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Executive Protection</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Asset Monitoring</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Leadership</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Compliance</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">
                    © 2024 Aura Security Services Sdn. Bhd. All rights reserved.
                </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon className="text-lg" icon="solar:minimalistic-linkedin-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
