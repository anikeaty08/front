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



        // Navbar blur and border effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('border-zinc-200/50', 'bg-white/80');
                navbar.classList.remove('border-transparent', 'bg-white/70');
            } else {
                navbar.classList.remove('border-zinc-200/50', 'bg-white/80');
                navbar.classList.add('border-transparent', 'bg-white/70');
            }
        });

        // Intersection Observer for subtle reveal animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.05
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Service Enquiry Pre-fill
        function enquireFor(serviceName) {
            const inputEl = document.getElementById('enquiry-service');
            inputEl.value = serviceName;
            
            // Subtle pulse effect to indicate update
            inputEl.classList.add('ring-2', 'ring-zinc-900', 'bg-zinc-50');
            setTimeout(() => {
                inputEl.classList.remove('ring-2', 'ring-zinc-900', 'bg-zinc-50');
            }, 600);

            // Smooth scroll to form
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            
            // Focus input slightly after scroll
            setTimeout(() => {
                inputEl.focus();
            }, 800);
        }
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-transparent transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex flex-col group" href="#">
<span className="text-lg font-semibold tracking-tighter text-zinc-900 leading-none">MIKE</span>
<span className="text-[0.65rem] font-medium text-zinc-400 tracking-widest leading-tight uppercase mt-0.5 group-hover:text-zinc-600 transition-colors duration-300">Electrical &amp; Plumbing</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#projects">Projects</a>
<a className="text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-4 py-2 rounded-full transition-all shadow-sm ring-1 ring-inset ring-zinc-900/10" href="#contact">Get a Quote</a>
</div>

<button className="md:hidden text-zinc-900 text-2xl flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-200/40 via-zinc-50 to-zinc-50"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
<div className="max-w-2xl reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white ring-1 ring-inset ring-zinc-200/60 shadow-sm text-zinc-600 text-xs font-medium mb-8">
<iconify-icon className="text-zinc-900 text-sm" icon="solar:shield-check-linear"></iconify-icon>
                        Certified &amp; Registered Contractor
                    </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.05] mb-6">
                        Reliable utility solutions for <span className="bg-gradient-to-r from-zinc-900 to-zinc-500 text-gradient">your property.</span>
</h1>
<p className="text-base sm:text-lg text-zinc-500 mb-10 max-w-lg leading-relaxed">
                        Professional electrical, plumbing, and backup power installations across Johannesburg. Precision workmanship you can trust.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-6 py-3 rounded-full transition-all shadow-lg shadow-zinc-900/10 ring-1 ring-inset ring-zinc-900/20 group" href="#contact">
                            Request a Quote
                            <iconify-icon className="text-lg group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 text-sm font-medium text-zinc-700 bg-white ring-1 ring-inset ring-zinc-200 hover:bg-zinc-50 hover:ring-zinc-300 px-6 py-3 rounded-full transition-all shadow-sm" href="tel:+27780816586">
<iconify-icon className="text-lg text-zinc-400" icon="solar:phone-calling-linear"></iconify-icon>
                            Call Now
                        </a>
</div>
<div className="mt-12 flex items-center gap-6 border-t border-zinc-200/60 pt-6">
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                            Available for dispatch
                        </div>
<div className="w-px h-4 bg-zinc-200"></div>
<div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                            Reg: 2025/124004/07
                        </div>
</div>
</div>
<div className="relative lg:h-[640px] reveal rounded-3xl overflow-hidden ring-1 ring-inset ring-zinc-900/10 shadow-2xl shadow-zinc-900/10 bg-zinc-100">
<img alt="Professional Workmanship" className="w-full h-full object-cover scale-[1.02] hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 reveal">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-zinc-900 mb-4">Core Capabilities</h2>
<p className="text-base text-zinc-500 leading-relaxed">Comprehensive technical solutions designed for modern properties. Select a specialized service below to begin your consultation.</p>
</div>
</div>
<div className="space-y-24">

<div className="reveal">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-xl bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<iconify-icon className="text-xl" icon="solar:lightbulb-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Electrical Solutions</h3>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Electrical house wiring')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900 mb-8 block pr-8">Electrical house wiring</span>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Rewiring')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900 mb-8 block pr-8">Complete property rewiring</span>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Fault finding')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900 mb-8 block pr-8">Advanced fault finding</span>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Board tripping')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900 mb-8 block pr-8">No power &amp; board tripping</span>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Prepaid meter')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900 mb-8 block pr-8">Prepaid meter installation</span>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Appliance repairs')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-900 mb-8 block pr-8">Stove, oven &amp; pool pump wiring</span>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="reveal">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-xl bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<iconify-icon className="text-xl" icon="solar:solar-panel-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Backup &amp; Solar Energy</h3>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Solar installation')">
<div className="flex items-start gap-3 mb-8 pr-4">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors mt-0.5" icon="solar:solar-panel-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Solar panel systems</span>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Inverter installation')">
<div className="flex items-start gap-3 mb-8 pr-4">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors mt-0.5" icon="solar:battery-charge-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Inverter &amp; battery setups</span>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Generator installation')">
<div className="flex items-start gap-3 mb-8 pr-4">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors mt-0.5" icon="solar:bolt-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Generator integration</span>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('UPS systems')">
<div className="flex items-start gap-3 mb-8 pr-4">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors mt-0.5" icon="solar:server-square-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Seamless UPS systems</span>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="reveal">
<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-xl bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 shadow-sm">
<iconify-icon className="text-xl" icon="solar:drop-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Plumbing Solutions</h3>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Geyser installation')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex items-start gap-3 mb-8 pr-8">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors mt-0.5" icon="solar:waterdrop-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Geyser replacements</span>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Burst pipes')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex items-start gap-3 mb-8 pr-8">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors mt-0.5" icon="solar:danger-triangle-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Burst pipe repairs</span>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Drain unblocking')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex items-start gap-3 mb-8 pr-8">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors mt-0.5" icon="solar:refresh-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Drainage unblocking</span>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Plumbing COC')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex items-start gap-3 mb-8 pr-8">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors mt-0.5" icon="solar:document-check-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Plumbing COC issuance</span>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('Sanitary installation')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex items-start gap-3 mb-8 pr-8">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors mt-0.5" icon="solar:bath-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">Bath &amp; sanitary installations</span>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group relative flex flex-col justify-between p-5 rounded-2xl bg-white ring-1 ring-inset ring-zinc-200 hover:ring-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 transition-all duration-300 cursor-pointer overflow-hidden" onclick="enquireFor('General plumbing')">
<div className="absolute right-5 top-5 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex items-start gap-3 mb-8 pr-8">
<iconify-icon className="text-xl text-zinc-400 group-hover:text-zinc-900 transition-colors mt-0.5" icon="solar:settings-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900">General piping &amp; maintenance</span>
</div>
<div className="flex items-center justify-between mt-auto">
<span className="text-xs font-medium text-zinc-500">Enquire now</span>
<div className="w-7 h-7 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xs" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 lg:gap-12">
<div className="reveal">
<div className="w-10 h-10 rounded-xl bg-white ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
<iconify-icon className="text-lg" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 mb-2">Rapid Deployment</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Strategically positioned to respond swiftly to emergencies across the greater Johannesburg region.</p>
</div>
<div className="reveal delay-100">
<div className="w-10 h-10 rounded-xl bg-white ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 mb-2">Rigorous Standards</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Every project strictly adheres to national regulatory codes, ensuring complete safety and compliance.</p>
</div>
<div className="reveal delay-200">
<div className="w-10 h-10 rounded-xl bg-white ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 mb-2">Transparent Quoting</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Detailed, upfront pricing with zero hidden costs. Clarity from the initial assessment to project handover.</p>
</div>
<div className="reveal delay-300">
<div className="w-10 h-10 rounded-xl bg-white ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 mb-6 shadow-sm">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-zinc-900 mb-2">Expert Technicians</h4>
<p className="text-sm text-zinc-500 leading-relaxed">A specialized team equipped with modern diagnostic tools and years of field experience.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="reveal">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-zinc-900 mb-8">Precision engineering meets daily utility.</h2>
<div className="space-y-6 text-sm sm:text-base text-zinc-500 leading-relaxed">
<p>
                            Based in Newlands, Randburg, Mike Electrical and Plumbing Services operates as a premier contracting entity dedicated to elevating the standard of utility maintenance and installation.
                        </p>
<p>
                            From complex structural rewiring to seamless solar integration and emergency fault resolution, our operational framework is built on technical excellence. We bridge the gap between complex engineering requirements and reliable, everyday functionality for our clients.
                        </p>
</div>
<div className="mt-10 pt-10 border-t border-zinc-100 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-50 ring-1 ring-inset ring-zinc-200 flex items-center justify-center">
<iconify-icon className="text-zinc-900 text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-1">Coverage Area</p>
<p className="text-sm text-zinc-500">Johannesburg &amp; Surrounding Suburbs</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 sm:gap-6 reveal">
<div className="rounded-3xl overflow-hidden ring-1 ring-inset ring-zinc-900/10 shadow-lg bg-zinc-100 h-64 sm:h-80 transform translate-y-8">
<img alt="Electrical Panel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="rounded-3xl overflow-hidden ring-1 ring-inset ring-zinc-900/10 shadow-lg bg-zinc-100 h-64 sm:h-80 transform -translate-y-4">
<img alt="Precision Tools" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-t border-zinc-900" id="projects">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 reveal">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-white mb-4">Field Deployments</h2>
<p className="text-base text-zinc-400">A selection of recent technical installations and systemic upgrades.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">

<div className="group aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 relative ring-1 ring-inset ring-white/10">
<img alt="Installation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="group aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 relative ring-1 ring-inset ring-white/10">
<img alt="Wiring" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1542013936693-884638332954?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="group aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 relative ring-1 ring-inset ring-white/10">
<img alt="Plumbing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="group aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-900 relative ring-1 ring-inset ring-white/10">
<img alt="Solar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-20 reveal">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-zinc-900 mb-4">Client Endorsements</h2>
<p className="text-sm text-zinc-500">Feedback from residential and commercial partners.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-white ring-1 ring-inset ring-zinc-200 shadow-sm reveal">
<div className="flex gap-1.5 text-zinc-900 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-8">"Exceptional diagnostic capabilities. They isolated the fault in our main distribution board efficiently and restored power with minimal disruption. Highly professional."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-900">D</div>
<p className="text-sm font-medium text-zinc-900">David M.</p>
</div>
</div>
<div className="p-8 rounded-3xl bg-white ring-1 ring-inset ring-zinc-200 shadow-sm reveal delay-100">
<div className="flex gap-1.5 text-zinc-900 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-8">"The solar inverter integration was executed flawlessly. The cabling is immaculate and the system handover was thorough. A truly premium contracting service."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-900">S</div>
<p className="text-sm font-medium text-zinc-900">Sarah T.</p>
</div>
</div>
<div className="p-8 rounded-3xl bg-white ring-1 ring-inset ring-zinc-200 shadow-sm reveal delay-200">
<div className="flex gap-1.5 text-zinc-900 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-8">"Rapid response to a critical plumbing failure late in the day. The technicians were equipped, decisive, and fully resolved the issue to code."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-900">J</div>
<p className="text-sm font-medium text-zinc-900">James L.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200/60">
<div className="max-w-3xl mx-auto px-6 lg:px-8 reveal">
<h2 className="text-3xl font-semibold tracking-tighter text-zinc-900 mb-12">System Inquiries</h2>
<div className="space-y-0 border-t border-zinc-200">
<details className="group border-b border-zinc-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between py-6 font-medium text-zinc-900 cursor-pointer text-sm">
                        Do you issue Certificates of Compliance (COC)?
                        <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-sm text-zinc-500 leading-relaxed pr-8">
                        Affirmative. We are fully registered and authorized to issue rigorous Certificates of Compliance for both electrical and plumbing installations upon verification of regulatory standards.
                    </div>
</details>
<details className="group border-b border-zinc-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between py-6 font-medium text-zinc-900 cursor-pointer text-sm">
                        What is your standard deployment time for emergencies?
                        <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-sm text-zinc-500 leading-relaxed pr-8">
                        Critical failures (power loss, active leaks) are prioritized in our queue. We aim for immediate dispatch to locations within the greater Johannesburg area to mitigate further property risk.
                    </div>
</details>
<details className="group border-b border-zinc-200 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between py-6 font-medium text-zinc-900 cursor-pointer text-sm">
                        Are your solar systems scalable?
                        <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-zinc-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-sm text-zinc-500 leading-relaxed pr-8">
                        Yes. We engineer backup and solar power systems to fit your current load profile while ensuring the architecture allows for seamless expansion (adding more panels or battery capacity) in the future.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 border-t border-zinc-200/60" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

<div className="lg:col-span-2 reveal">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tighter text-zinc-900 mb-6">Initiate Request</h2>
<p className="text-sm text-zinc-500 mb-12 leading-relaxed">Submit your project details or service requirement via the secure portal, or contact our dispatch team directly. We prioritize rapid, clear communication.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 shadow-sm">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-1.5">Direct Line</p>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="tel:+27780816586">+27 78 081 6586</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 shadow-sm">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-1.5">Electronic Mail</p>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="mailto:info@mikeelectricalandplumb.co.za">info@mikeelectricalandplumb.co.za</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white ring-1 ring-inset ring-zinc-200 flex items-center justify-center text-zinc-900 shrink-0 shadow-sm">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-1.5">Headquarters</p>
<p className="text-sm font-medium text-zinc-500">16 Spring Rd, Newlands, Randburg, 2092</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 reveal">
<form className="bg-white rounded-3xl ring-1 ring-inset ring-zinc-200 p-8 sm:p-10 shadow-xl shadow-zinc-200/50 space-y-6" onsubmit="event.preventDefault(); alert('Request submitted successfully.');">
<div className="grid sm:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-2">Full Name</label>
<input className="w-full bg-white ring-1 ring-inset ring-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all placeholder:text-zinc-400 shadow-sm" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-2">Contact Number</label>
<input className="w-full bg-white ring-1 ring-inset ring-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all placeholder:text-zinc-400 shadow-sm" placeholder="078 000 0000" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-2">Service Requirement</label>
<input className="w-full bg-white ring-1 ring-inset ring-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 font-medium focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all placeholder:text-zinc-400 shadow-sm" id="enquiry-service" placeholder="E.g. Full property rewire" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-zinc-900 uppercase tracking-widest mb-2">Project Specifications</label>
<textarea className="w-full bg-white ring-1 ring-inset ring-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 transition-all placeholder:text-zinc-400 resize-none shadow-sm" placeholder="Briefly describe the current situation or requirements..." rows="4"></textarea>
</div>
<button className="w-full flex items-center justify-center gap-2 text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 px-6 py-3.5 rounded-xl transition-all shadow-md shadow-zinc-900/10" type="submit">
                            Submit Request
                            <iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 pt-20 pb-10 text-zinc-400">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-1">
<div className="flex flex-col mb-6">
<span className="text-lg font-semibold tracking-tighter text-white leading-none">MIKE</span>
<span className="text-[0.65rem] font-medium text-zinc-500 tracking-widest leading-tight uppercase mt-0.5">Electrical &amp; Plumbing</span>
</div>
<p className="text-sm text-zinc-500 leading-relaxed mb-6 pr-4">
                        Engineered solutions for utility stability. Precision installations and technical diagnostics across Johannesburg.
                    </p>
<div className="inline-flex px-2.5 py-1 rounded text-[10px] font-semibold tracking-widest uppercase bg-zinc-900 ring-1 ring-inset ring-white/10 text-zinc-300">
                        Reg: 2025/124004/07
                    </div>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">Navigation</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#services">Capabilities</a></li>
<li><a className="hover:text-white transition-colors" href="#about">Corporate Profile</a></li>
<li><a className="hover:text-white transition-colors" href="#projects">Deployments</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Client Portal</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">Specializations</h4>
<ul className="space-y-3 text-sm">
<li>Electrical Infrastructure</li>
<li>Solar &amp; UPS Integration</li>
<li>Sanitary &amp; Piping</li>
<li>Fault Diagnostics</li>
<li>Compliance Certification</li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-6 uppercase tracking-widest">Direct Contact</h4>
<ul className="space-y-4 text-sm">
<li>
<a className="hover:text-white transition-colors flex items-center gap-2" href="tel:+27780816586">
<iconify-icon className="text-zinc-600" icon="solar:phone-calling-linear"></iconify-icon>
                                +27 78 081 6586
                            </a>
</li>
<li>
<a className="hover:text-white transition-colors flex items-center gap-2 break-all" href="mailto:info@mikeelectricalandplumb.co.za">
<iconify-icon className="text-zinc-600" icon="solar:letter-linear"></iconify-icon>
                                info@mikeelectricalandplumb.co.za
                            </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-zinc-600">
<p>© 2025 Mike Electrical and Plumbing Services. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
