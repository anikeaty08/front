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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
blue: '#4B9BFE',
purple: '#B31FFF',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
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
      

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-semibold text-slate-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-slate-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:shop-linear" width="16"></iconify-icon>
</div>
                COMMERCE<span className="text-slate-400">LAB</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors duration-200" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors duration-200" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors duration-200" href="#work">Work</a>
<a className="hover:text-slate-900 transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Log in</a>
<a className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-full hover:bg-slate-800 transition-colors duration-200 flex items-center gap-2 shadow-lg shadow-slate-900/10" href="#contact">
                    Book Audit
                    <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-brand opacity-10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="absolute inset-0 bg-grid -z-20"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/50 text-xs text-slate-600 font-medium mb-8 backdrop-blur-sm shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B9BFE] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4B9BFE]"></span>
</span>
                Accepting new migration projects for Q4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight font-semibold text-slate-900 mb-6">
                Build performant <br/>
<span className="text-gradient">Shopify experiences.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
                We migrate, design, and engineer high-converting Shopify Plus stores. 
                Say goodbye to bloated themes and slow load times.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-gradient-brand text-white rounded-full text-sm font-medium hover:opacity-90 transition-all duration-200 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/20">
                    Start Project
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-50 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm">
<iconify-icon icon="solar:case-round-minimalistic-linear"></iconify-icon>
                    View Case Studies
                </button>
</div>

<div className="mt-20 pt-10 border-t border-slate-100">
<p className="text-xs text-slate-400 uppercase tracking-widest mb-8">Trusted by modern brands</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tight text-slate-900">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-bold tracking-tight italic text-slate-900">velocita</span>
<span className="text-xl font-bold tracking-tight text-slate-900">NEXUS</span>
<span className="text-xl font-bold tracking-tight text-slate-900">KROMA</span>
<span className="text-xl font-bold tracking-tight text-slate-900">PULSE</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Migration Nightmares?</h2>
<p className="text-slate-500 text-sm leading-relaxed">
                    Moving platforms shouldn't mean losing sleep. Most merchants delay migration because they fear the common pitfalls of replatforming.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center mb-6 relative z-10">
<iconify-icon icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 relative z-10">Data Integrity Loss</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">
                        Orders missing, customer accounts broken, or product variants mismatched. The "spaghetti data" syndrome.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-orange-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-6 relative z-10">
<iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 relative z-10">SEO Freefall</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">
                        Improper 301 redirects leading to 404 errors, causing organic traffic to plummet overnight post-launch.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-24 h-24 bg-slate-100 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center mb-6 relative z-10">
<iconify-icon icon="solar:server-square-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 relative z-10">Extended Downtime</h3>
<p className="text-sm text-slate-500 leading-relaxed relative z-10">
                        Maintenance windows that stretch from hours into days, resulting in significant lost revenue.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">The Antidote</h2>
<p className="text-slate-500 max-w-md text-sm">Everything you need to scale your store, engineered with precision.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-[#4B9BFE] hover:text-[#B31FFF] transition-colors font-medium" href="#">
                    View all capabilities
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

<div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl bg-gradient-brand p-[1px] relative overflow-hidden group">
<div className="bg-white rounded-[15px] h-full p-8 flex flex-col justify-between relative overflow-hidden">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-900">
<iconify-icon icon="solar:shop-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">Full Store Development</h3>
<p className="text-slate-500 text-sm max-w-sm">
                                End-to-end design and development. We take your brand guidelines and turn them into a pixel-perfect Shopify 2.0 theme.
                            </p>
</div>
<div className="relative z-10 mt-8">
<div className="bg-slate-50 border border-slate-100 rounded-lg p-4 space-y-3">
<div className="flex items-center justify-between text-xs text-slate-600 font-medium">
<span>Conversion Rate</span>
<span className="text-emerald-600">+45%</span>
</div>
<div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[75%]"></div>
</div>
<div className="flex items-center justify-between text-xs text-slate-600 font-medium">
<span>Avg. Order Value</span>
<span className="text-emerald-600">+22%</span>
</div>
<div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-[#4B9BFE] w-[60%]"></div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 row-span-1 rounded-2xl bg-white border border-slate-200 p-8 flex items-center justify-between group hover:shadow-md transition-all shadow-sm">
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Headless Commerce</h3>
<p className="text-slate-500 text-sm max-w-xs">React/Next.js frontends with Shopify backend for ultimate flexibility.</p>
</div>
<div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-[#4B9BFE] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:devices-linear" width="32"></iconify-icon>
</div>
</div>

<div className="col-span-1 row-span-1 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-all shadow-sm group">
<iconify-icon className="text-slate-400 group-hover:text-[#B31FFF] transition-colors" icon="solar:refresh-circle-linear" width="32"></iconify-icon>
<div>
<h4 className="text-slate-900 font-semibold mb-1 tracking-tight">Replatforming</h4>
<p className="text-xs text-slate-500">Secure data migration.</p>
</div>
</div>

<div className="col-span-1 row-span-1 rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md transition-all shadow-sm group">
<iconify-icon className="text-slate-400 group-hover:text-[#4B9BFE] transition-colors" icon="solar:widget-2-linear" width="32"></iconify-icon>
<div>
<h4 className="text-slate-900 font-semibold mb-1 tracking-tight">Custom Apps</h4>
<p className="text-xs text-slate-500">Solving unique needs.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="process">
<div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2 hidden md:block"></div>
<div className="max-w-4xl mx-auto px-6 relative">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">How we work</h2>
<p className="text-slate-500 text-sm">A transparent, sprint-based approach to delivery.</p>
</div>

<div className="flex flex-col md:flex-row items-center justify-between mb-16 md:mb-24 relative group">
<div className="md:w-5/12 text-center md:text-right md:pr-12 mb-6 md:mb-0">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Discovery &amp; Audit</h3>
<p className="text-sm text-slate-500">We analyze your current stack, traffic patterns, and pain points to define the migration roadmap.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 border-white bg-[#4B9BFE] shadow-[0_0_15px_rgba(75,155,254,0.3)] z-10 hidden md:block"></div>
<div className="md:w-5/12 md:pl-12 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="bg-white border border-slate-200 rounded-lg p-4 inline-block transform rotate-2 shadow-sm">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="space-y-2">
<div className="h-2 bg-slate-100 w-32 rounded"></div>
<div className="h-2 bg-slate-100 w-24 rounded"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center justify-between mb-16 md:mb-24 relative group">
<div className="md:w-5/12 text-center md:text-left md:pl-12 mb-6 md:mb-0">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Development &amp; QC</h3>
<p className="text-sm text-slate-500">Sprint-based development with weekly updates. Rigorous testing on staging environments.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white bg-slate-300 z-10 hidden md:block group-hover:bg-[#B31FFF] group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
<div className="md:w-5/12 md:pr-12 text-right opacity-80 group-hover:opacity-100 transition-opacity">
<div className="bg-white border border-slate-200 rounded-lg p-4 inline-block transform -rotate-2 shadow-sm">
<div className="font-mono text-xs text-slate-500 text-left">
<span className="text-[#B31FFF]">git</span> commit -m <span className="text-emerald-600">"feat: cart logic"</span><br/>
<span className="text-[#B31FFF]">git</span> push origin main
                        </div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between relative group">
<div className="md:w-5/12 text-center md:text-right md:pr-12 mb-6 md:mb-0">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Launch &amp; Support</h3>
<p className="text-sm text-slate-500">Seamless DNS cutover. Post-launch monitoring and 30 days of hyper-care support.</p>
</div>
<div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white bg-slate-300 z-10 hidden md:block group-hover:bg-[#4B9BFE] group-hover:w-8 group-hover:h-8 transition-all duration-300"></div>
<div className="md:w-5/12 md:pl-12 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="bg-white border border-slate-200 rounded-lg p-4 inline-block transform rotate-1 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-emerald-50 text-emerald-500 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="text-left">
<div className="text-xs text-slate-900 font-medium">Deployment Successful</div>
<div className="text-[10px] text-slate-400">2 mins ago</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Don't just take our word</h2>
<p className="text-slate-500 text-sm">Merchants scaling with our infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex text-[#B31FFF] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"The migration from Magento was flawless. We were terrified of losing SEO ranking, but traffic actually increased by 15% in the first month post-launch."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 text-xs font-bold flex items-center justify-center text-slate-600">JD</div>
<div>
<div className="text-sm font-semibold text-slate-900">James Doe</div>
<div className="text-xs text-slate-500">CTO, FashionBrand</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex text-[#B31FFF] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"We needed a custom product builder that existing apps couldn't handle. CommerceLab built a custom React solution that integrates perfectly."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 text-xs font-bold flex items-center justify-center text-slate-600">SK</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sarah Klein</div>
<div className="text-xs text-slate-500">Founder, DecorCo</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex text-[#B31FFF] mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"Our Core Web Vitals were a mess. They rebuilt our theme from scratch using Tailwind and our mobile conversion rate doubled."</p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 text-xs font-bold flex items-center justify-center text-slate-600">MR</div>
<div>
<div className="text-sm font-semibold text-slate-900">Mike Ross</div>
<div className="text-xs text-slate-500">VP Marketing, TechGear</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Simple Engagement</h2>
<p className="text-slate-500 text-sm">Choose how you want to work with us.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col hover:border-[#4B9BFE]/50 transition-colors shadow-sm">
<div className="mb-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Project Based</h3>
<p className="text-sm text-slate-500">Best for migrations and new builds.</p>
</div>
<div className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Custom <span className="text-sm text-slate-500 font-normal">/ project</span></div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#4B9BFE]" icon="solar:check-circle-linear"></iconify-icon> Fixed scope &amp; timeline
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#4B9BFE]" icon="solar:check-circle-linear"></iconify-icon> Dedicated Project Manager
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#4B9BFE]" icon="solar:check-circle-linear"></iconify-icon> QA &amp; UAT Period
                        </li>
</ul>
<a className="w-full py-3 border border-slate-200 rounded-lg text-center text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors" href="#contact">Get a Quote</a>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 flex flex-col relative overflow-hidden ring-1 ring-[#B31FFF]/10">
<div className="absolute top-0 right-0 px-3 py-1 bg-gradient-brand text-white text-[10px] uppercase font-bold tracking-wider rounded-bl-lg">Popular</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Retainer</h3>
<p className="text-sm text-slate-500">Continuous improvement &amp; CRO.</p>
</div>
<div className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">$3,500 <span className="text-sm text-slate-500 font-normal">/ month</span></div>
<ul className="space-y-4 mb-8 text-sm text-slate-600 flex-1">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#B31FFF]" icon="solar:check-circle-bold"></iconify-icon> 40 Hours / month
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#B31FFF]" icon="solar:check-circle-bold"></iconify-icon> Priority Support
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#B31FFF]" icon="solar:check-circle-bold"></iconify-icon> Bi-weekly Strategy Calls
                        </li>
</ul>
<a className="w-full py-3 bg-slate-900 rounded-lg text-center text-sm font-medium text-white hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" href="#contact">Start Retainer</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white" id="contact">

<div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-brand opacity-[0.03] skew-x-12 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Ready to scale your store?</h2>
<p className="text-slate-500 text-lg mb-10 font-normal">Join the forward-thinking brands that trust CommerceLab for their Shopify infrastructure.</p>
<div className="glass-card rounded-2xl p-8 text-left max-w-xl mx-auto shadow-xl">
<form className="space-y-5">
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#4B9BFE] focus:ring-1 focus:ring-[#4B9BFE] transition-all" placeholder="name@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-700 mb-1.5">Website URL</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-[#4B9BFE] focus:ring-1 focus:ring-[#4B9BFE] transition-all" placeholder="https://" type="url"/>
</div>
<div className="flex items-start gap-3 pt-2">

<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-slate-300 bg-white transition-all checked:border-[#B31FFF] checked:bg-[#B31FFF] hover:border-[#B31FFF]" id="audit" type="checkbox"/>
<iconify-icon className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<label className="text-xs text-slate-500 select-none cursor-pointer" htmlFor="audit">I'm interested in a free performance audit.</label>
</div>
<button className="w-full py-3 bg-gradient-brand text-white rounded-lg text-sm font-medium transition-all hover:opacity-90 shadow-md" type="button">
                        Book Consultation
                    </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-slate-100 bg-slate-50 pt-16 pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg tracking-tighter font-semibold text-slate-900 flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded bg-slate-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:shop-linear" width="14"></iconify-icon>
</div>
                        COMMERCE<span className="text-slate-400">LAB</span>
</a>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                        Shopify experts focused on speed, scalability, and custom development for high-growth brands.
                    </p>
</div>
<div>
<h4 className="text-slate-900 text-sm font-medium mb-4">Services</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#4B9BFE] transition-colors" href="#">Migration</a></li>
<li><a className="hover:text-[#4B9BFE] transition-colors" href="#">Theme Dev</a></li>
<li><a className="hover:text-[#4B9BFE] transition-colors" href="#">Headless</a></li>
<li><a className="hover:text-[#4B9BFE] transition-colors" href="#">App Dev</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-[#4B9BFE] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#4B9BFE] transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-[#4B9BFE] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#4B9BFE] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 text-sm font-medium mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:basketball-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:chat-round-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-200 text-xs text-slate-500">
<p>© 2024 CommerceLab Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-700" href="#">Privacy Policy</a>
<a className="hover:text-slate-700" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 left-6 right-6 z-40 sticky-bar">
<div className="max-w-xl mx-auto glass-card rounded-full p-2 pl-6 shadow-2xl border border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B9BFE] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4B9BFE]"></span>
</div>
<span className="text-xs font-medium text-slate-700 hidden sm:inline">Limited migration slots for this month</span>
<span className="text-xs font-medium text-slate-700 sm:hidden">Limited slots available</span>
</div>
<a className="px-6 py-2.5 bg-slate-900 text-white text-xs font-medium rounded-full hover:bg-slate-800 transition-colors shadow-lg" href="#contact">
                Book Audit
            </a>
</div>
</div>

    </>
  );
}
