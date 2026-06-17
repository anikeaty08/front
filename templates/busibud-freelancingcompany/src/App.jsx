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
      

<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-slate-100">
<img alt="Woman Working From Home on Sofa" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdef9978-b81b-4b67-b6bc-9caa49fe4e16_320w.jpg"/>
</div>
<a className="font-semibold tracking-tighter text-lg text-slate-900 uppercase" href="#">Busibud</a>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#careers">Careers</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm" href="#careers">
                    Join Our Team
                </a>
<button className="md:hidden text-slate-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-24 pb-32 overflow-hidden bg-white border-b border-slate-200/60">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Hiring globally for remote roles
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
                        Work from the <span className="text-indigo-600">comfort</span> of your homes.
                    </h1>
<p className="text-base md:text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
                        We are a dedicated Consumer Services company based in Chandigarh. We connect exceptional talent with flexible opportunities to deliver outstanding customer experiences worldwide.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-sm" href="#careers">
                            View Opportunities
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all shadow-sm" href="#about">
                            Learn More
                        </a>
</div>
</div>
<div className="lg:w-1/2 w-full relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 relative border border-slate-100 bg-slate-100">
<img alt="Team collaborating remotely" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80" />
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
</img></div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 hidden md:flex">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Company Size</p>
<p className="text-lg font-semibold tracking-tight text-slate-900">11-50 Employees</p>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-200/60 py-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:briefcase-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-slate-900">Industry</p>
<p className="text-xs text-slate-500 mt-1">Consumer Services</p>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-slate-900">Primary Location</p>
<p className="text-xs text-slate-500 mt-1">Chandigarh, IN</p>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:user-check-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-slate-900">Associated Members</p>
<p className="text-xs text-slate-500 mt-1">91+ on LinkedIn</p>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<iconify-icon className="text-2xl text-slate-400 mb-2" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-sm font-medium text-slate-900">Work Style</p>
<p className="text-xs text-slate-500 mt-1">100% Remote / Flexible</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-slate-50 relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-sm font-medium text-indigo-600 uppercase tracking-widest mb-3">Overview</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Empowering people through flexible opportunities.</h3>
<div className="prose prose-slate prose-lg text-slate-600">
<p className="mb-6">
                                We are looking for unique people that enjoy providing excellent customer service and posses great problem solving abilities. 
                            </p>
<p className="mb-6">
                                Busibud Solutions Private Ltd is built on the foundation that great work doesn't have to happen in a traditional office. This opportunity offers part time/full time workload from the comfort of your own home. It also offers you the flexibility to choose your schedule for work.
                            </p>
</div>
<div className="mt-8 flex items-center gap-6">
<div className="flex -space-x-4">
<img alt="Team member" className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Team member" className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Team member" className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">+88</div>
</div>
<p className="text-sm text-slate-500">Join our growing team</p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-8">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon className="text-xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Remote First</h4>
<p className="text-sm text-slate-500">Work from anywhere. Your comfort is our priority.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Flexible Hours</h4>
<p className="text-sm text-slate-500">Choose a schedule that fits your lifestyle perfectly.</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon className="text-xl" icon="solar:pie-chart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Workload Choice</h4>
<p className="text-sm text-slate-500">Options for both part-time and full-time engagements.</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-slate-900 mb-2">Supportive Culture</h4>
<p className="text-sm text-slate-500">We value problem solvers and unique individuals.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200/60" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">What we do</h2>
<p className="text-base text-slate-600">We specialize in delivering exceptional consumer services by leveraging a distributed, highly capable workforce.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 transition-all bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:headphones-round-sound-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Customer Support</h3>
<p className="text-sm text-slate-600 leading-relaxed">Providing top-tier, empathetic customer service. Our team handles inquiries with care, ensuring every consumer feels heard and valued.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 transition-all bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:lightbulb-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Problem Solving</h3>
<p className="text-sm text-slate-600 leading-relaxed">We look for unique individuals who excel at untangling complex issues and delivering prompt, effective solutions to consumers.</p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 transition-all bg-slate-50/50 hover:bg-white">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-indigo-600 group-hover:border-indigo-200 transition-colors mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-3">Flexible Staffing</h3>
<p className="text-sm text-slate-600 leading-relaxed">Scaling operations dynamically with a reliable network of part-time and full-time remote professionals tailored to business needs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="careers">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to design your own schedule?</h2>
<p className="text-base md:text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
                    We are actively seeking individuals with great problem-solving abilities to join our remote consumer services team. Take control of your career today.
                </p>
<div className="bg-white/10 border border-white/20 p-8 rounded-3xl backdrop-blur-md mb-10 text-left grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-bold"></iconify-icon>
                            What we offer
                        </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 opacity-60" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                100% Work from home setup
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 opacity-60" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Choose between part-time or full-time
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 opacity-60" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Total flexibility in scheduling
                            </li>
</ul>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:user-id-bold"></iconify-icon>
                            Who we need
                        </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 opacity-60" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Excellent customer service skills
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 opacity-60" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Strong problem-solving abilities
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-300">
<iconify-icon className="mt-0.5 opacity-60" icon="solar:alt-arrow-right-linear"></iconify-icon>
                                Unique and dedicated individuals
                            </li>
</ul>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-slate-900 bg-white rounded-full hover:bg-slate-50 hover:scale-105 transition-all shadow-xl shadow-white/10" href="mailto:careers@busibud.com">
                    Apply Now
                </a>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-200/60 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-md overflow-hidden shrink-0 bg-slate-100">
<img alt="Woman Working From Home on Sofa" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdef9978-b81b-4b67-b6bc-9caa49fe4e16_320w.jpg"/>
</div>
<span className="font-semibold tracking-tighter text-base text-slate-900 uppercase">Busibud</span>
</div>
<p className="text-sm text-slate-500 mb-6">
                        Providing excellent consumer services globally, straight from the comfort of our homes.
                    </p>
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                        Chandigarh, IN
                    </div>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#careers">Careers</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900 mb-4">Connect</h4>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2]/20 transition-colors text-sm font-medium" href="https://www.linkedin.com/company/freelancing-opportunities/about/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="carbon:logo-linkedin"></iconify-icon>
                        Follow our Page
                    </a>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">
                    © 2023 Busibud Solutions Private Ltd. All rights reserved.
                </p>
<div className="flex gap-4">

<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
