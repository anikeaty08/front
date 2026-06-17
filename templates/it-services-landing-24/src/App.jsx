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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold text-xl tracking-tighter text-slate-900">DLIT</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#why-us">Why Us</a>
<a className="hover:text-slate-900 transition-colors" href="#case-studies">Case Studies</a>
</div>
<div>
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors" href="#contact">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-8 border border-blue-100">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                ServiceNow Certified Partners
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-tight">
                Unlock enterprise workflow <br className="hidden md:block"/>
<span className="text-slate-400">efficiency at scale.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                We design, implement, and optimize ServiceNow platforms to break down silos, automate processes, and elevate your entire organizational experience.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white px-8 py-3.5 text-base font-medium hover:bg-blue-700 transition-all shadow-sm" href="#contact">
                    Request an Assessment
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-700 border border-slate-200 px-8 py-3.5 text-base font-medium hover:bg-slate-50 transition-all" href="#services">
                    Explore Services
                </a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-100">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">The platform for digital business.</h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
                        ServiceNow isn't just an IT ticketing tool; it's a comprehensive platform that connects departments, systems, and people. At De Lune IT, we translate the platform's immense capabilities into tangible business outcomes tailored exactly to how you work.
                    </p>
<p className="text-base text-slate-600 leading-relaxed">
                        Whether you are migrating from legacy systems, expanding to new modules, or needing a complete architectural rescue, our methodology ensures maximum ROI with minimal disruption.
                    </p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
<iconify-icon className="text-2xl text-blue-500" icon="solar:cpu-bolt-linear"></iconify-icon>
<span className="text-sm font-medium">Process Automation</span>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
<iconify-icon className="text-2xl text-blue-500" icon="solar:layers-minimalistic-linear"></iconify-icon>
<span className="text-sm font-medium">Unified Platform</span>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
<iconify-icon className="text-2xl text-blue-500" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-sm font-medium">Employee Experience</span>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
<iconify-icon className="text-2xl text-blue-500" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-sm font-medium">Measurable ROI</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Why organizations choose ServiceNow</h2>
<p className="text-base text-slate-500">Transform reactive operations into proactive, automated workflows across the entire enterprise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-4">
<div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
<iconify-icon className="text-xl text-slate-700" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight">Single System of Record</h3>
<p className="text-sm text-slate-500 leading-relaxed">Eliminate data silos by consolidating systems. Create a single source of truth for IT, HR, Customer Service, and Security.</p>
</div>
<div className="flex flex-col gap-4">
<div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
<iconify-icon className="text-xl text-slate-700" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight">Intelligent Automation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Replace manual, repetitive tasks with automated workflows that speed up resolution times and reduce human error.</p>
</div>
<div className="flex flex-col gap-4">
<div className="h-12 w-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100">
<iconify-icon className="text-xl text-slate-700" icon="solar:presentation-graph-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight">Real-time Visibility</h3>
<p className="text-sm text-slate-500 leading-relaxed">Gain actionable insights with powerful dashboards and analytics that help leaders make data-driven decisions instantly.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">End-to-End Services</h2>
<p className="text-base text-slate-400 max-w-2xl">From initial blueprint to go-live and beyond, we provide the technical expertise needed to maximize your platform investment.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
<div className="h-12 w-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-blue-400" icon="solar:magnifier-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Assessment &amp; Strategy</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">We audit your current infrastructure, identify bottlenecks, and build a strategic roadmap aligned with your business objectives.</p>
<ul className="flex flex-col gap-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Health checks</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Maturity modeling</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> License optimization</li>
</ul>
</div>

<div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
<div className="h-12 w-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-blue-400" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Implementation</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Agile deployment of ServiceNow modules, ensuring seamless integration with existing tools and minimal disruption.</p>
<ul className="flex flex-col gap-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> ITSM, ITOM, HRSD setup</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Third-party integrations</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Data migration</li>
</ul>
</div>

<div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800 transition-colors">
<div className="h-12 w-12 rounded-full bg-slate-700/50 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-blue-400" icon="solar:code-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Customization &amp; Apps</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">When out-of-the-box isn't enough, we build custom applications on the Now Platform to solve unique business challenges.</p>
<ul className="flex flex-col gap-3 text-sm text-slate-300">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Custom Scoped Apps</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Portal design &amp; UX</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-400" icon="solar:check-circle-linear"></iconify-icon> Advanced workflow logic</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">
<div className="lg:w-1/3">
<h2 className="text-3xl font-semibold tracking-tight mb-4 sticky top-24">Solutions by Department</h2>
<p className="text-base text-slate-500">ServiceNow extends far beyond IT. Discover how we can digitize workflows across your entire enterprise.</p>
</div>
<div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-xl text-slate-700" icon="solar:monitor-linear"></iconify-icon>
<h4 className="text-base font-medium">IT Service Management</h4>
</div>
<p className="text-sm text-slate-500">Modernize IT operations, manage incidents efficiently, and deliver exceptional service to employees with standard ITSM protocols.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-xl text-slate-700" icon="solar:user-id-linear"></iconify-icon>
<h4 className="text-base font-medium">HR Service Delivery</h4>
</div>
<p className="text-sm text-slate-500">Streamline onboarding, automate routine inquiries, and provide a unified employee portal for all HR needs.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-xl text-slate-700" icon="solar:headphones-round-linear"></iconify-icon>
<h4 className="text-base font-medium">Customer Service</h4>
</div>
<p className="text-sm text-slate-500">Connect customer service with other departments to resolve complex issues faster and improve overall customer satisfaction.</p>
</div>
<div>
<div className="flex items-center gap-3 mb-3">
<iconify-icon className="text-xl text-slate-700" icon="solar:shield-warning-linear"></iconify-icon>
<h4 className="text-base font-medium">Security Operations</h4>
</div>
<p className="text-sm text-slate-500">Prioritize and resolve security threats faster by connecting security data with IT operations in a single dashboard.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-100" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center mb-16">Why partner with De Lune IT</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">10+</div>
<div className="text-sm text-slate-500 font-medium">Years Experience</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">50+</div>
<div className="text-sm text-slate-500 font-medium">Certifications</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">100%</div>
<div className="text-sm text-slate-500 font-medium">Delivery Rate</div>
</div>
<div className="text-center">
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-2">24/7</div>
<div className="text-sm text-slate-500 font-medium">Ongoing Support</div>
</div>
</div>
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="bg-white p-6 rounded-2xl border border-slate-200">
<h4 className="text-base font-medium mb-2">Deep Technical Expertise</h4>
<p className="text-sm text-slate-500 leading-relaxed">Our team consists of senior architects and developers who understand the core mechanics of the Now Platform, ensuring scalable and maintainable code.</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-200">
<h4 className="text-base font-medium mb-2">Business-First Approach</h4>
<p className="text-sm text-slate-500 leading-relaxed">We don't just implement technology; we align the platform with your specific business goals to ensure measurable improvements in efficiency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="case-studies">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-2">Proven Success</h2>
<p className="text-base text-slate-500">See how we've helped organizations transform.</p>
</div>
<div className="hidden md:block">
<a className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1" href="#">
                        View all stories <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-shadow flex flex-col justify-between group">
<div>
<div className="mb-8">
<span className="text-xl font-semibold tracking-tighter text-slate-300">FINCORP</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4 group-hover:text-blue-600 transition-colors">Global ITSM Consolidation</h3>
<div className="mb-6 space-y-4">
<div>
<span className="text-xs font-semibold text-slate-900 uppercase tracking-widest block mb-1">Challenge</span>
<p className="text-sm text-slate-500">Client had 5 fragmented legacy ticketing systems resulting in poor resolution times.</p>
</div>
<div>
<span className="text-xs font-semibold text-slate-900 uppercase tracking-widest block mb-1">Solution</span>
<p className="text-sm text-slate-500">Unified ITSM implementation with automated routing and custom employee portal.</p>
</div>
</div>
</div>
<div className="pt-6 border-t border-slate-100 mt-6">
<p className="text-sm font-medium text-slate-900">Result: 40% reduction in MTTR (Mean Time To Resolution).</p>
</div>
</div>

<div className="border border-slate-200 rounded-3xl p-8 hover:shadow-md transition-shadow flex flex-col justify-between group">
<div>
<div className="mb-8">
<span className="text-xl font-semibold tracking-tighter text-slate-300">HEALTHNET</span>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4 group-hover:text-blue-600 transition-colors">HR Onboarding Automation</h3>
<div className="mb-6 space-y-4">
<div>
<span className="text-xs font-semibold text-slate-900 uppercase tracking-widest block mb-1">Challenge</span>
<p className="text-sm text-slate-500">Manual, paper-based onboarding process taking an average of 14 days per employee.</p>
</div>
<div>
<span className="text-xs font-semibold text-slate-900 uppercase tracking-widest block mb-1">Solution</span>
<p className="text-sm text-slate-500">Deployed HRSD with automated workflows integrating IT provisioning, facilities, and HR.</p>
</div>
</div>
</div>
<div className="pt-6 border-t border-slate-100 mt-6">
<p className="text-sm font-medium text-slate-900">Result: Onboarding time reduced from 14 days to 2 days.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-8 uppercase tracking-widest">Our Team holds certifications in</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
<span className="text-lg font-semibold tracking-tight text-slate-800">ITSM Professional</span>
<span className="text-lg font-semibold tracking-tight text-slate-800">HRSD Implementation</span>
<span className="text-lg font-semibold tracking-tight text-slate-800">Certified System Admin</span>
<span className="text-lg font-semibold tracking-tight text-slate-800">Application Developer</span>
</div>
</div>
</section>

<section className="py-24" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-blue-600 rounded-[2.5rem] p-10 md:p-20 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-500 via-blue-600 to-blue-700 -z-10"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to optimize your workflows?</h2>
<p className="text-blue-100 text-base md:text-lg mb-10 max-w-2xl mx-auto">Schedule a free 30-minute discovery call with our ServiceNow architects. We'll discuss your current setup and identify quick wins for automation.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-blue-600 px-8 py-4 rounded-full text-base font-medium hover:bg-slate-50 transition-colors shadow-lg">
                        Book a Consultation
                    </button>
<button className="bg-blue-700/50 text-white border border-blue-500/30 px-8 py-4 rounded-full text-base font-medium hover:bg-blue-700/80 transition-colors backdrop-blur-sm">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<footer className="mt-auto border-t border-slate-100 py-12 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="font-semibold text-lg tracking-tighter text-slate-900">DLIT</span>
<p className="text-xs text-slate-500">© 2023 De Lune IT. All rights reserved. ServiceNow is a registered trademark of ServiceNow, Inc.</p>
</div>
</footer>

    </>
  );
}
