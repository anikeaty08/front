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



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<span className="text-lg font-semibold tracking-tight">AutoMate</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="#work">Work</a>
<a className="hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="hover:text-neutral-900 transition-colors" href="#youtube">YouTube</a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors">
<i className="w-5 h-5" data-lucide="sun"></i>
</button>
<a className="hidden md:inline-flex px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors" href="#contact">
                    Let's Talk
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Available for new projects
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-neutral-900 mb-6 leading-[1.1]">
                Building intelligent marketing systems that scale revenue.
            </h1>
<p className="text-xl md:text-2xl text-neutral-500 mb-10 max-w-2xl font-light leading-relaxed">
                I help 7-figure agencies and businesses automate the boring stuff using GoHighLevel, Zapier, and custom code.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="px-8 py-4 bg-neutral-900 text-white text-lg font-medium rounded-xl hover:bg-neutral-800 transition-all flex items-center justify-center gap-2">
                    View My Work <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 bg-white border border-neutral-200 text-neutral-900 text-lg font-medium rounded-xl hover:bg-neutral-50 transition-all flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle"></i> Watch Demo
                </button>
</div>

<div className="mt-20 pt-10 border-t border-neutral-100 w-full">
<p className="text-sm font-medium text-neutral-400 mb-6 uppercase tracking-wider">Expertise in</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-semibold text-neutral-800"><i className="text-blue-600" data-lucide="layers"></i> GoHighLevel</div>
<div className="flex items-center gap-2 text-xl font-semibold text-neutral-800"><i className="text-orange-500" data-lucide="zap"></i> Zapier</div>
<div className="flex items-center gap-2 text-xl font-semibold text-neutral-800"><i className="text-purple-600" data-lucide="infinity"></i> Make</div>
<div className="flex items-center gap-2 text-xl font-semibold text-neutral-800"><i className="text-green-600" data-lucide="code-2"></i> Python</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">Trusted by growth-focused teams</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-white rounded-2xl shadow-sm border border-neutral-100 flex flex-col h-full">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-600 mb-8 flex-grow leading-relaxed">
                        "The automation workflows completely transformed our lead nurturing. We saved 20+ hours a week immediately after launch."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div>
<div>
<p className="font-semibold text-neutral-900">Sarah Jenkins</p>
<p className="text-sm text-neutral-500">CMO, TechFlow Inc.</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-2xl shadow-sm border border-neutral-100 flex flex-col h-full">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-600 mb-8 flex-grow leading-relaxed">
                        "Incredible attention to detail. The GHL setup was flawless and the Spanish localization for our LATAM market was spot on."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div>
<div>
<p className="font-semibold text-neutral-900">Miguel Alvarez</p>
<p className="text-sm text-neutral-500">Founder, ScaleUp Agency</p>
</div>
</div>
</div>

<div className="p-8 bg-white rounded-2xl shadow-sm border border-neutral-100 flex flex-col h-full">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-neutral-600 mb-8 flex-grow leading-relaxed">
                        "Best technical partner we've worked with. The custom Make.com integrations connected tools we thought were incompatible."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div>
<div>
<p className="font-semibold text-neutral-900">David Ross</p>
<p className="text-sm text-neutral-500">Operations Director, Velt</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-neutral-100 to-neutral-50 rounded-3xl transform rotate-2 transition-transform group-hover:rotate-1"></div>
<div className="relative h-[500px] w-full bg-neutral-200 rounded-2xl overflow-hidden shadow-lg">

<div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-500">
<i className="w-24 h-24 opacity-20" data-lucide="user"></i>
</div>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur border border-white/20 rounded-xl">
<div className="flex items-center justify-between">
<div>
<p className="text-sm font-semibold text-neutral-900">Experience</p>
<p className="text-xs text-neutral-500">8+ Years in Automation</p>
</div>
<i className="w-6 h-6 text-neutral-900" data-lucide="award"></i>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Architecting the systems behind your success.</h2>
<div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
<p>
                        I'm not just a technician; I'm a strategic partner. With over 8 years of deep-dive experience in marketing automation, I bridge the gap between complex technical requirements and revenue goals.
                    </p>
<p>
                        Being bilingual (English/Spanish), I help global teams streamline operations across borders. My expertise lies in <span className="text-neutral-900 font-medium">GoHighLevel</span>, custom API integrations, and building self-sustaining ecosystems.
                    </p>
<p>
                        When I'm not coding workflows, I'm creating educational content to help others master the art of automation.
                    </p>
</div>
<div className="mt-10 flex flex-col sm:flex-row gap-4">
<button className="px-6 py-3 bg-neutral-900 text-white font-medium rounded-lg hover:bg-neutral-800 transition-colors">
                        Book a Call
                    </button>
<button className="px-6 py-3 bg-white border border-neutral-200 text-neutral-900 font-medium rounded-lg hover:bg-neutral-50 transition-colors">
                        Learn More
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Core Services</h2>
<p className="text-lg text-neutral-400">High-impact solutions designed to eliminate manual work and increase conversion rates.</p>
</div>
<a className="hidden md:inline-flex items-center text-white hover:text-neutral-300 transition-colors mt-4 md:mt-0" href="#">
                    View Pricing <i className="w-4 h-4 ml-1" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-neutral-800/50 rounded-2xl border border-neutral-700/50 hover:border-neutral-600 transition-all group">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-700 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="database"></i>
</div>
<h3 className="text-xl font-semibold mb-3">CRM Integration &amp; Setup</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">
                        Complete architecture design and implementation for GoHighLevel and HubSpot. Migration, field mapping, and pipeline optimization.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-neutral-800 text-xs font-medium rounded text-neutral-300 border border-neutral-700">GHL</span>
<span className="px-2 py-1 bg-neutral-800 text-xs font-medium rounded text-neutral-300 border border-neutral-700">HubSpot</span>
</div>
</div>

<div className="p-8 bg-neutral-800/50 rounded-2xl border border-neutral-700/50 hover:border-neutral-600 transition-all group">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-700 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="workflow"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Marketing Workflows</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">
                        Intelligent nurturing sequences, SMS marketing loops, and appointment setting bots that work 24/7 without human input.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-neutral-800 text-xs font-medium rounded text-neutral-300 border border-neutral-700">Email</span>
<span className="px-2 py-1 bg-neutral-800 text-xs font-medium rounded text-neutral-300 border border-neutral-700">SMS</span>
<span className="px-2 py-1 bg-neutral-800 text-xs font-medium rounded text-neutral-300 border border-neutral-700">AI</span>
</div>
</div>

<div className="p-8 bg-neutral-800/50 rounded-2xl border border-neutral-700/50 hover:border-neutral-600 transition-all group">
<div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-neutral-700 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="webhook"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Custom API Integrations</h3>
<p className="text-neutral-400 mb-6 leading-relaxed">
                        Connecting disconnected tools using Make (Integromat), Zapier, and custom webhooks. If it has an API, I can automate it.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-neutral-800 text-xs font-medium rounded text-neutral-300 border border-neutral-700">Make</span>
<span className="px-2 py-1 bg-neutral-800 text-xs font-medium rounded text-neutral-300 border border-neutral-700">Webhooks</span>
<span className="px-2 py-1 bg-neutral-800 text-xs font-medium rounded text-neutral-300 border border-neutral-700">JSON</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="work">
<h2 className="text-3xl font-semibold tracking-tight mb-12">Featured Automations</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="group border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
<div className="aspect-video bg-neutral-100 relative flex items-center justify-center">
<div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors"></div>
<i className="w-12 h-12 text-neutral-300" data-lucide="image"></i>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-neutral-900 border border-neutral-200">
                            Real Estate
                        </span>
</div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-semibold text-neutral-900">Multi-Channel Lead Capture System</h3>
<a className="p-2 rounded-full hover:bg-neutral-100 transition-colors" href="#"><i className="w-5 h-5 text-neutral-900" data-lucide="arrow-up-right"></i></a>
</div>
<p className="text-lg text-neutral-600 mb-6">
                        Designed a centralized lead ingestion system for a brokerage handling 500+ leads/day. Integrated FB Ads, Zillow, and GHL.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-neutral-50 rounded-xl">
<p className="text-2xl font-semibold text-neutral-900">40%</p>
<p className="text-sm text-neutral-500">Increase in booked appts</p>
</div>
<div className="p-4 bg-neutral-50 rounded-xl">
<p className="text-2xl font-semibold text-neutral-900">15hrs</p>
<p className="text-sm text-neutral-500">Saved weekly per agent</p>
</div>
</div>
</div>
</div>

<div className="group border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
<div className="aspect-video bg-neutral-100 relative flex items-center justify-center">
<div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/0 transition-colors"></div>
<i className="w-12 h-12 text-neutral-300" data-lucide="image"></i>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-semibold text-neutral-900 border border-neutral-200">
                            E-Commerce
                        </span>
</div>
</div>
<div className="p-8">
<div className="flex justify-between items-start mb-4">
<h3 className="text-2xl font-semibold text-neutral-900">Abandoned Cart Recovery AI</h3>
<a className="p-2 rounded-full hover:bg-neutral-100 transition-colors" href="#"><i className="w-5 h-5 text-neutral-900" data-lucide="arrow-up-right"></i></a>
</div>
<p className="text-lg text-neutral-600 mb-6">
                        Implemented a complex recovery flow using dynamic SMS and AI voice drops, personalized based on cart value.
                    </p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-neutral-50 rounded-xl">
<p className="text-2xl font-semibold text-neutral-900">$12k</p>
<p className="text-sm text-neutral-500">Recovered revenue (Mo 1)</p>
</div>
<div className="p-4 bg-neutral-50 rounded-xl">
<p className="text-2xl font-semibold text-neutral-900">Active</p>
<p className="text-sm text-neutral-500">System Status</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-100" id="youtube">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-semibold tracking-tight">Latest from YouTube</h2>
<a className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 font-medium text-sm" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i> Subscribe
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-200 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all flex items-center justify-center">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-neutral-900 fill-current" data-lucide="play"></i>
</div>
</div>
<span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">12:45</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                        How to Automate Client Onboarding in GHL (Step-by-Step)
                    </h3>
<p className="text-sm text-neutral-500">2.4K views • 2 days ago</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-200 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all flex items-center justify-center">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-neutral-900 fill-current" data-lucide="play"></i>
</div>
</div>
<span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">08:20</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                        Top 5 Make.com Mistakes Beginners Make
                    </h3>
<p className="text-sm text-neutral-500">5.1K views • 1 week ago</p>
</div>

<div className="group cursor-pointer">
<div className="relative aspect-video bg-neutral-200 rounded-xl overflow-hidden mb-4">
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all flex items-center justify-center">
<div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-neutral-900 fill-current" data-lucide="play"></i>
</div>
</div>
<span className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs font-medium rounded">15:30</span>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                        Building a $10k/mo Agency with Automation
                    </h3>
<p className="text-sm text-neutral-500">8.9K views • 2 weeks ago</p>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-4xl mx-auto px-6 text-center" id="contact">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
            Ready to reclaim your time?
        </h2>
<p className="text-xl text-neutral-500 mb-12 max-w-xl mx-auto leading-relaxed">
            Stop doing manual work. Let's build a system that operates while you sleep.
        </p>
<button className="px-10 py-5 bg-neutral-900 text-white text-lg font-medium rounded-xl hover:bg-neutral-800 transition-transform hover:-translate-y-1 shadow-xl shadow-neutral-200">
            Book a Free Consultation
        </button>
<div className="mt-24 pt-12 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-400">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<i className="w-4 h-4" data-lucide="zap"></i>
<span>© 2024 AutoMate. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-neutral-900" href="#">Twitter</a>
<a className="hover:text-neutral-900" href="#">LinkedIn</a>
<a className="hover:text-neutral-900" href="#">YouTube</a>
</div>
</div>
</section>


    </>
  );
}
