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
      

<div className="absolute top-0 left-0 w-full h-[800px] overflow-hidden -z-10 pointer-events-none">
<div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-orange-200/20 blur-[100px] animate-pulse-slow"></div>
<div className="absolute top-40 -left-20 w-[500px] h-[500px] rounded-full bg-stone-200/40 blur-[80px]"></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="font-semibold tracking-tighter text-xl text-stone-900">Twin</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-stone-900 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-stone-900 transition-colors" href="#industries">Industries</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-stone-900 hover:text-orange-600 transition-colors" href="#">Sign In</a>
<a className="bg-stone-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-stone-800 transition-colors shadow-sm" href="#">
                    Contact Sales
                </a>
</div>
</div>
</header>

<section className="pt-40 pb-24 px-6 relative">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                European AI Enterprise Partner
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-stone-900 leading-[1.1] mb-6">
                Intelligence that augments the <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-900 to-orange-600">human</span> enterprise.
            </h1>
<p className="text-lg md:text-xl text-stone-500 font-normal max-w-2xl mx-auto leading-relaxed mb-10">
                We partner with CxOs in Insurance and Banking to drive digital transformation. Twin delivers AI systems designed to empower your people, ensuring technology serves the human intellect.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-md shadow-stone-900/10 flex items-center justify-center gap-2" href="#solutions">
                    Explore Solutions
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-white text-stone-700 border border-stone-200 rounded-full text-sm font-medium hover:bg-stone-50 transition-all flex items-center justify-center gap-2" href="#philosophy">
                    Our Philosophy
                </a>
</div>
</div>
</section>

<section className="px-6 pb-24">
<div className="max-w-6xl mx-auto">
<div className="relative rounded-3xl bg-white border border-stone-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">

<div className="absolute inset-0 bg-stone-50/50" style={{backgroundImage: 'radial-gradient(#e7e5e4 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 flex items-center gap-8 md:gap-16">

<div className="w-24 h-24 rounded-full bg-white shadow-xl shadow-stone-200/50 border border-stone-100 flex items-center justify-center relative z-20">
<iconify-icon className="text-3xl text-orange-500" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -bottom-8 text-xs font-medium text-stone-500 tracking-tight">Your Team</div>
</div>

<div className="w-32 md:w-48 h-px bg-gradient-to-r from-orange-300 via-stone-300 to-stone-300 relative flex items-center justify-center">
<div className="w-6 h-6 rounded-full bg-[#FDFCFB] border border-stone-200 flex items-center justify-center shadow-sm">
<iconify-icon className="text-xs text-stone-400" icon="solar:hand-shake-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<div className="w-24 h-24 rounded-full bg-stone-900 shadow-xl shadow-stone-900/20 border border-stone-800 flex items-center justify-center relative z-20">
<iconify-icon className="text-3xl text-stone-50" icon="solar:cpu-bolt-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute -bottom-8 text-xs font-medium text-stone-500 tracking-tight">Twin Systems</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-100" id="philosophy">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-stone-900 mb-6">
                        Technology with a human pulse.
                    </h2>
<p className="text-base text-stone-500 leading-relaxed mb-8">
                        We believe that the most powerful digital transformations don't replace human intuition—they scale it. Twin is built on a philosophy of collaboration, creating environments where your employees are augmented by AI, not managed by it.
                    </p>
<a className="text-sm font-medium text-orange-600 flex items-center gap-1 hover:text-orange-700 transition-colors" href="#">
                        Read our ethics statement
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-8">

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
<iconify-icon className="text-xl" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-stone-900">Empathetic Design</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            Interfaces and workflows built around how humans actually think and operate, reducing cognitive load.
                        </p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-stone-900">European Standards</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            Built with GDPR compliance, ethical AI principles, and uncompromising data privacy at its core.
                        </p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
<iconify-icon className="text-xl" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-stone-900">Augmented Capability</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            Turning complex data into actionable insights, allowing your team to focus on high-value strategic work.
                        </p>
</div>

<div className="flex flex-col gap-4">
<div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center text-stone-700">
<iconify-icon className="text-xl" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-stone-900">Seamless Integration</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                            Adapts to your existing corporate infrastructure, minimizing disruption while maximizing adoption.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-stone-900 mb-4">
                    A dual approach to transformation.
                </h2>
<p className="text-base text-stone-500">
                    Whether you need strategic guidance to navigate the AI landscape or ready-to-deploy tools to accelerate your workforce, Twin provides a comprehensive ecosystem.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative bg-stone-100/50 rounded-3xl p-8 md:p-12 hover:bg-stone-100 transition-colors border border-transparent hover:border-stone-200">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-stone-800 mb-8">
<iconify-icon className="text-2xl" icon="solar:branching-paths-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-4">Digital Transformation Strategy</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-8">
                        Strategic consulting tailored for CxOs. We audit your current infrastructure, identify high-impact AI opportunities, and design a roadmap that prioritizes human adoption and measurable ROI.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Readiness assessments
                        </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Custom AI governance frameworks
                        </li>
<li className="flex items-start gap-3 text-sm text-stone-600">
<iconify-icon className="text-stone-400 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Change management &amp; training
                        </li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 group-hover:gap-3 transition-all" href="#">
                        Learn about consulting <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="group relative bg-[#FDFCFB] rounded-3xl p-8 md:p-12 border border-stone-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/40 rounded-full blur-[60px] -z-10 group-hover:bg-orange-200/40 transition-colors"></div>
<div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 mb-8">
<iconify-icon className="text-2xl" icon="solar:widget-add-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-stone-900 mb-4">Twin Application Suite</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-8">
                        A collection of secure, enterprise-ready AI applications designed specifically for complex corporate environments. Instantly deploy tools that assist with data analysis, compliance checking, and workflow automation.
                    </p>

<div className="mb-8 p-4 rounded-xl border border-stone-100 bg-white/50 backdrop-blur-sm">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-stone-400">Available Modules</span>
<div className="flex gap-1">
<span className="w-2 h-2 rounded-full bg-stone-200"></span>
<span className="w-2 h-2 rounded-full bg-stone-200"></span>
<span className="w-2 h-2 rounded-full bg-stone-200"></span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-stone-100 shadow-sm">
<iconify-icon className="text-stone-400" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-stone-700">Contract Intelligence</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg bg-white border border-stone-100 shadow-sm">
<iconify-icon className="text-stone-400" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-medium text-stone-700">Risk Assessment Copilot</span>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 group-hover:gap-3 transition-all" href="#">
                        Explore the suite <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-900 text-stone-50" id="industries">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 justify-between items-start border-b border-stone-800 pb-16 mb-16">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        Built for complexity.<br/>Designed for clarity.
                    </h2>
<p className="text-base text-stone-400 leading-relaxed">
                        Highly regulated industries require technology that doesn't operate in a black box. Twin is engineered to provide transparent, explainable AI assistance for sectors where accuracy and compliance are non-negotiable.
                    </p>
</div>
<div className="flex flex-col gap-4 min-w-[240px]">
<div className="px-6 py-4 rounded-2xl bg-stone-800/50 border border-stone-700/50 flex items-center justify-between group cursor-pointer hover:bg-stone-800 transition-colors">
<span className="text-sm font-medium text-stone-200">Insurance</span>
<iconify-icon className="text-stone-500 group-hover:text-stone-300 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="px-6 py-4 rounded-2xl bg-stone-800/50 border border-stone-700/50 flex items-center justify-between group cursor-pointer hover:bg-stone-800 transition-colors">
<span className="text-sm font-medium text-stone-200">Banking</span>
<iconify-icon className="text-stone-500 group-hover:text-stone-300 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="px-6 py-4 rounded-2xl bg-stone-800/50 border border-stone-700/50 flex items-center justify-between group cursor-pointer hover:bg-stone-800 transition-colors">
<span className="text-sm font-medium text-stone-200">Asset Management</span>
<iconify-icon className="text-stone-500 group-hover:text-stone-300 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">SOC 2</div>
<div className="text-xs text-stone-500 font-medium tracking-wide uppercase">Type II Certified</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">GDPR</div>
<div className="text-xs text-stone-500 font-medium tracking-wide uppercase">Compliant by design</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">EU</div>
<div className="text-xs text-stone-500 font-medium tracking-wide uppercase">Data Residency</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-white mb-1">24/7</div>
<div className="text-xs text-stone-500 font-medium tracking-wide uppercase">Dedicated Support</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-100/50 blur-[120px] -z-10 rounded-[100%]"></div>
<div className="max-w-2xl mx-auto">
<h2 className="text-4xl font-semibold tracking-tight text-stone-900 mb-6">Ready to empower your workforce?</h2>
<p className="text-base text-stone-500 mb-10">
                Connect with our team to discuss how Twin can integrate into your corporate environment and elevate your team's potential.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-800 transition-all shadow-md" href="#">
                    Schedule a Consultation
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<span className="font-semibold tracking-tighter text-2xl text-stone-900 mb-4 block">Twin.</span>
<p className="text-sm text-stone-500 max-w-xs mb-6">
                        Human-centric AI for the modern European enterprise.
                    </p>
<div className="flex items-center gap-4 text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">App Suite</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Security &amp; Trust</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Our Philosophy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Cookie Policy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">DPA</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-stone-400">
                    © 2024 Twin Technologies EU. All rights reserved.
                </p>
<div className="flex items-center gap-2 text-xs text-stone-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                    All systems operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
