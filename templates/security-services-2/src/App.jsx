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
      

<header className="fixed top-0 w-full bg-zinc-50/80 backdrop-blur-md z-50 border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<iconify-icon className="text-xl text-zinc-950" icon="solar:shield-network-linear"></iconify-icon>
<span className="text-base font-semibold tracking-tighter text-zinc-950 uppercase">SunStalwart</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#approach">Our Approach</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Expertise</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#credentials">Credentials</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center h-10 px-5 rounded-md bg-zinc-900 text-zinc-50 text-sm font-medium hover:bg-zinc-800 transition-colors" href="#contact">
                    Client Portal
                </a>
<button className="md:hidden text-zinc-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow pt-20">

<section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 mb-8">
<span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
<span className="text-xs font-medium text-zinc-600 tracking-wide uppercase">KDN &amp; MOF Approved</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-zinc-950 leading-tight mb-6">
                        Intelligent assurance for the modern enterprise.
                    </h1>
<p className="text-lg text-zinc-500 leading-relaxed mb-10 max-w-xl">
                        We provide professional security services focused on precision, integrity, and proactive risk management. Partnering with organizations to ensure continuity and peace of mind.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-zinc-900 text-zinc-50 text-base font-medium hover:bg-zinc-800 transition-all shadow-sm" href="#contact">
                            Request Consultation
                        </a>
<a className="inline-flex items-center justify-center h-12 px-6 rounded-md bg-white border border-zinc-200 text-zinc-900 text-base font-medium hover:bg-zinc-50 transition-all" href="#credentials">
                            View Credentials
                        </a>
</div>
<div className="mt-12 flex items-center gap-6 pt-8 border-t border-zinc-200">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">Home Ministry (KDN) Licensed</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-600">MOF Registered Vendor</span>
</div>
</div>
</div>
<div className="relative hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-zinc-100 to-zinc-50 rounded-2xl transform rotate-3 scale-105 border border-zinc-200/50"></div>
<img alt="Modern corporate environment" className="relative rounded-2xl shadow-lg object-cover h-[600px] w-full grayscale-[20%] contrast-125 brightness-95" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-8 left-[-2rem] bg-white p-5 rounded-xl shadow-xl border border-zinc-100 flex items-start gap-4 max-w-xs">
<div className="h-10 w-10 rounded-full bg-zinc-50 flex items-center justify-center border border-zinc-100 shrink-0">
<iconify-icon className="text-xl text-zinc-900" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-zinc-900">Active Monitoring</p>
<p className="text-xs text-zinc-500 mt-1">Protocols verified and compliant across all active zones.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-200" id="approach">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-sm font-medium text-zinc-500 tracking-wide uppercase mb-3">Our Philosophy</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Security as a professional discipline.</h3>
<p className="text-base text-zinc-500 leading-relaxed">
                        We move beyond traditional enforcement models. SunStalwart treats security as an integrated professional service—requiring rigorous training, analytical thinking, and a commitment to your organizational culture.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12">

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="h-12 w-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-zinc-800" icon="solar:brain-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Intelligent Operations</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Deploying personnel who are trained to observe, analyze, and de-escalate. We prioritize situational awareness and preventative strategies over reactive measures.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="h-12 w-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-zinc-800" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Workforce Excellence</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Our team is our greatest asset. We maintain stringent vetting processes, continuous professional development, and fair compensation to ensure high retention and reliability.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-colors">
<div className="h-12 w-12 rounded-lg bg-white border border-zinc-200 flex items-center justify-center mb-6 shadow-sm">
<iconify-icon className="text-2xl text-zinc-800" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<h4 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Strategic Partnership</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                            We don't just supply guards; we integrate with your operations. Providing transparent reporting, regular audits, and adaptable security frameworks tailored to your needs.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Core Competencies</h2>
<p className="text-base text-zinc-500">Comprehensive protection strategies designed for corporate, commercial, and specialized environments.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#contact">
                        Discuss your requirements <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative bg-white rounded-2xl p-8 border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl text-zinc-400" icon="solar:arrow-up-right-linear"></iconify-icon>
</div>
<iconify-icon className="text-3xl text-zinc-800 mb-6" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Corporate &amp; Commercial Security</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                            Professional front-of-house security, access control management, and facility patrols. Designed to align with your corporate image while maintaining strict protocols.
                        </p>
</div>

<div className="group relative bg-white rounded-2xl p-8 border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl text-zinc-400" icon="solar:arrow-up-right-linear"></iconify-icon>
</div>
<iconify-icon className="text-3xl text-zinc-800 mb-6" icon="solar:user-id-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Executive &amp; Specialized Protection</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                            Discreet, highly trained personnel for VIP protection, high-value asset transit, and sensitive corporate events. Focused on minimal disruption and maximum safety.
                        </p>
</div>

<div className="group relative bg-white rounded-2xl p-8 border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl text-zinc-400" icon="solar:arrow-up-right-linear"></iconify-icon>
</div>
<iconify-icon className="text-3xl text-zinc-800 mb-6" icon="solar:monitor-camera-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Command Center &amp; Monitoring</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                            Integration of physical security with technological oversight. 24/7 remote monitoring, incident response coordination, and digital perimeter defense integration.
                        </p>
</div>

<div className="group relative bg-white rounded-2xl p-8 border border-zinc-200 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl text-zinc-400" icon="solar:arrow-up-right-linear"></iconify-icon>
</div>
<iconify-icon className="text-3xl text-zinc-800 mb-6" icon="solar:clipboard-check-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-3">Risk Assessment &amp; Consulting</h3>
<p className="text-sm text-zinc-500 leading-relaxed max-w-md">
                            Comprehensive site audits, vulnerability assessments, and the development of bespoke security master plans tailored to organizational risk profiles.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-white relative overflow-hidden" id="credentials">

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Built on a foundation of verified trust.</h2>
<p className="text-base text-zinc-400 leading-relaxed mb-10">
                            In an industry where reliability is paramount, our credentials speak to our commitment to regulatory compliance and operational excellence. SunStalwart operates with full transparency and state-sanctioned authority.
                        </p>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-700 before:to-transparent hidden">

</div>
<div className="space-y-6">
<div className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
<span className="text-xs font-semibold">2020</span>
</div>
<div>
<h4 className="text-base font-medium text-zinc-100">Foundation</h4>
<p className="text-sm text-zinc-400 mt-1">Established with a vision to modernize professional security services in Malaysia.</p>
</div>
</div>
<div className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
<span className="text-xs font-semibold">2022</span>
</div>
<div>
<h4 className="text-base font-medium text-zinc-100">KDN Approval</h4>
<p className="text-sm text-zinc-400 mt-1">Officially licensed and approved by the Home Ministry (KDN) of Malaysia.</p>
</div>
</div>
<div className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900/50 border border-zinc-800">
<div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
<iconify-icon className="text-lg text-zinc-300" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-100">MOF Registration</h4>
<p className="text-sm text-zinc-400 mt-1">Registered vendor with the Ministry of Finance, enabling government and large-scale corporate tenders.</p>
</div>
</div>
</div>
</div>
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 lg:p-12">
<div className="mb-8">
<iconify-icon className="text-4xl text-zinc-500 mb-4" icon="solar:shield-star-linear"></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Commitment to Integrity</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                                Our operational framework is governed by strict ethical guidelines. We conduct comprehensive background checks, regular drug screening, and ongoing psychological evaluations for all personnel.
                            </p>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-300 border-b border-zinc-800 pb-4">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Annual Regulatory Audits
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 border-b border-zinc-800 pb-4">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Certified Training Programs
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300 border-b border-zinc-800 pb-4">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Transparent Incident Reporting
                            </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                                Comprehensive Liability Coverage
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Ready to elevate your security standards?</h2>
<p className="text-base text-zinc-500 mb-10 max-w-2xl mx-auto">
                    Schedule a confidential consultation with our advisory team to discuss your operational vulnerabilities and discover how SunStalwart can provide intelligent assurance for your organization.
                </p>
<form className="max-w-md mx-auto flex flex-col gap-4">
<input className="h-12 w-full rounded-md border border-zinc-300 bg-white px-4 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900 transition-shadow" placeholder="Enter your work email" required="" type="email"/>
<button className="h-12 w-full rounded-md bg-zinc-950 text-white text-sm font-medium hover:bg-zinc-800 transition-colors" type="submit">
                        Request a Consultation
                    </button>
<p className="text-xs text-zinc-400 mt-2">Strictly confidential. No obligations.</p>
</form>
</div>
</section>
</main>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-xl text-zinc-900" icon="solar:shield-network-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tighter text-zinc-900 uppercase">SunStalwart</span>
</a>
<p className="text-xs text-zinc-500 max-w-sm leading-relaxed mb-6">
                        Professional security services providing intelligent assurance, precision, and strategic partnership for modern enterprises in Malaysia.
                    </p>
<div className="flex items-center gap-4">

<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Corporate Security</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Executive Protection</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Command Center</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Risk Consulting</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Credentials</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">
                    © 2024 SunStalwart Security Sdn Bhd. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-xs text-zinc-400">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
