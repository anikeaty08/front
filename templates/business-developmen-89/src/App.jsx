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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-800">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<span className="text-base font-semibold tracking-tight">Portfolio</span>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#experience">Experience</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#achievements">Achievements</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden text-neutral-400">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="min-h-screen flex items-center justify-center pt-20 px-6">
<div className="max-w-6xl mx-auto w-full">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-emerald-400">Open to opportunities</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                        Strategic Business Development &amp; 
                        <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Ecosystem Growth</span> Expert.
                    </h1>
<p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-8">
                        Driving revenue and building high-impact partnerships across Venture Capital, Innovation Hubs, and Startups in the MENA region.
                    </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors" href="#contact">
                            Get in touch
                            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700" href="#experience">
                            View experience
                        </a>
</div>
</div>
<div className="order-1 lg:order-2 flex justify-center lg:justify-end">
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-violet-500/20 rounded-3xl blur-2xl"></div>
<img alt="Profile" className="relative w-64 h-80 md:w-80 md:h-96 object-cover rounded-2xl border border-neutral-800" src="https://c.top4top.io/p_3656q6tmj1.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-y border-neutral-800">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">200+</div>
<div className="text-sm text-neutral-400">Partnerships Secured</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">10+</div>
<div className="text-sm text-neutral-400">Organizations</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">5+</div>
<div className="text-sm text-neutral-400">Years Experience</div>
</div>
<div className="text-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">MENA</div>
<div className="text-sm text-neutral-400">Regional Reach</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-3 gap-12">
<div className="lg:col-span-1">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">Professional Summary</h2>
<div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
</div>
<div className="lg:col-span-2">
<p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-6">
                        Business Development &amp; Partnerships professional with a proven track record in venture capital, innovation hubs, and startup ecosystems.
                    </p>
<p className="text-base text-neutral-400 leading-relaxed mb-8">
                        I specialize in building high-impact strategic partnerships, leading market research, and driving revenue-focused growth across Egypt. Skilled in stakeholder management and turning opportunities into scalable, sustainable business outcomes.
                    </p>
<div className="grid sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-4 bg-neutral-900 rounded-xl border border-neutral-800">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-blue-400" data-lucide="handshake" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium">Strategic Partnerships</div>
<div className="text-xs text-neutral-500">Corporate &amp; Startup</div>
</div>
</div>
<div className="flex items-center gap-3 p-4 bg-neutral-900 rounded-xl border border-neutral-800">
<div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-violet-400" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium">Revenue Growth</div>
<div className="text-xs text-neutral-500">Scalable Outcomes</div>
</div>
</div>
<div className="flex items-center gap-3 p-4 bg-neutral-900 rounded-xl border border-neutral-800">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-emerald-400" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium">Startup Ecosystems</div>
<div className="text-xs text-neutral-500">VC &amp; Innovation</div>
</div>
</div>
<div className="flex items-center gap-3 p-4 bg-neutral-900 rounded-xl border border-neutral-800">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
<i className="w-5 h-5 text-amber-400" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium">Stakeholder Management</div>
<div className="text-xs text-neutral-500">Multi-level Relations</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/50" id="experience">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Work Experience</h2>
<p className="text-base text-neutral-400">A track record of building partnerships and driving growth</p>
</div>
<div className="relative">

<div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-emerald-500 transform md:-translate-x-1/2"></div>

<div className="space-y-12">

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right md:pr-16 pl-8 md:pl-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-3">
<span className="text-xs font-medium text-blue-400">Current</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-1">Business Development Executive</h3>
<p className="text-sm text-violet-400 font-medium mb-3">KenKo Ventures</p>
<p className="text-sm text-neutral-400 leading-relaxed">Drove strategic partnerships and ecosystem growth within a VC-backed platform, leading high-impact initiatives.</p>
</div>
<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-blue-500 transform md:-translate-x-1/2 ring-4 ring-neutral-950"></div>
<div className="md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/2"></div>
<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-violet-500 transform md:-translate-x-1/2 ring-4 ring-neutral-950"></div>
<div className="md:w-1/2 md:pl-16 pl-8">
<h3 className="text-xl font-semibold tracking-tight mb-1">Partnerships Executive</h3>
<p className="text-sm text-violet-400 font-medium mb-3">Creativa Tanta</p>
<p className="text-sm text-neutral-400 leading-relaxed">Closed and managed <span className="text-emerald-400 font-semibold">30+ strategic partnerships</span> with corporates and startups to scale innovation programs.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right md:pr-16 pl-8 md:pl-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
<i className="w-3 h-3 text-emerald-400" data-lucide="star" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-emerald-400">Key Achievement</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-1">Head of Partnerships</h3>
<p className="text-sm text-violet-400 font-medium mb-3">Rally Startup Festival (AAST)</p>
<p className="text-sm text-neutral-400 leading-relaxed">Secured <span className="text-emerald-400 font-semibold">200+ partnerships</span> in a compressed timeframe, maximizing ecosystem engagement for a large-scale festival.</p>
</div>
<div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-emerald-500 transform md:-translate-x-1/2 ring-4 ring-neutral-950 ring-offset-2 ring-offset-emerald-500/20"></div>
<div className="md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/2"></div>
<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-violet-500 transform md:-translate-x-1/2 ring-4 ring-neutral-950"></div>
<div className="md:w-1/2 md:pl-16 pl-8">
<h3 className="text-xl font-semibold tracking-tight mb-1">Business Developer</h3>
<p className="text-sm text-violet-400 font-medium mb-3">Tachy</p>
<p className="text-sm text-neutral-400 leading-relaxed">Led market research and analyzed competitor landscapes to identify growth opportunities.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right md:pr-16 pl-8 md:pl-0">
<h3 className="text-xl font-semibold tracking-tight mb-1">Business Developer</h3>
<p className="text-sm text-violet-400 font-medium mb-3">Plstka</p>
<p className="text-sm text-neutral-400 leading-relaxed">Built revenue-driven partnerships aligned with sustainability goals.</p>
</div>
<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-blue-500 transform md:-translate-x-1/2 ring-4 ring-neutral-950"></div>
<div className="md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/2"></div>
<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-violet-500 transform md:-translate-x-1/2 ring-4 ring-neutral-950"></div>
<div className="md:w-1/2 md:pl-16 pl-8">
<h3 className="text-xl font-semibold tracking-tight mb-1">Partnerships Team</h3>
<p className="text-sm text-violet-400 font-medium mb-3">Techne Drifts</p>
<p className="text-sm text-neutral-400 leading-relaxed">Enabled high-value partnerships that elevated execution quality.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right md:pr-16 pl-8 md:pl-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-3">
<i className="w-3 h-3 text-emerald-400" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="text-xs font-medium text-emerald-400">Founder</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-1">Co-Founder</h3>
<p className="text-sm text-emerald-400 font-medium mb-3">Let's Go Green</p>
<p className="text-sm text-neutral-400 leading-relaxed">Co-founded a green economy startup focused on sugarcane waste recycling and sustainable business models.</p>
</div>
<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-emerald-500 transform md:-translate-x-1/2 ring-4 ring-neutral-950"></div>
<div className="md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/2"></div>
<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-blue-500 transform md:-translate-x-1/2 ring-4 ring-neutral-950"></div>
<div className="md:w-1/2 md:pl-16 pl-8">
<h3 className="text-xl font-semibold tracking-tight mb-1">Head of Partnerships</h3>
<p className="text-sm text-violet-400 font-medium mb-3">The Insider Tanta | Rally Tanta | Enactus</p>
<p className="text-sm text-neutral-400 leading-relaxed">Led partnership strategies across innovation hubs and national entrepreneurship initiatives.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/2 md:text-right md:pr-16 pl-8 md:pl-0">
<h3 className="text-xl font-semibold tracking-tight mb-1">Project Manager</h3>
<p className="text-sm text-violet-400 font-medium mb-3">3D Printing Company (MENA)</p>
<p className="text-sm text-neutral-400 leading-relaxed">Managed profit-oriented partnerships supporting regional expansion.</p>
</div>
<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-violet-500 transform md:-translate-x-1/2 ring-4 ring-neutral-950"></div>
<div className="md:w-1/2"></div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 md:gap-16">
<div className="md:w-1/2"></div>
<div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-blue-500 transform md:-translate-x-1/2 ring-4 ring-neutral-950"></div>
<div className="md:w-1/2 md:pl-16 pl-8">
<h3 className="text-xl font-semibold tracking-tight mb-1">Project Manager</h3>
<p className="text-sm text-violet-400 font-medium mb-3">Educational Institutes Development</p>
<p className="text-sm text-neutral-400 leading-relaxed">Led instructor acquisition and multi-stakeholder coordination for institutional scale-up.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="achievements">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Key Achievements</h2>
<p className="text-base text-neutral-400">Measurable impact across the ecosystem</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="group p-8 bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-emerald-400" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-emerald-400 mb-2">200+</div>
<h3 className="text-lg font-medium mb-2">Partnerships at Rally Startup Festival</h3>
<p className="text-sm text-neutral-400">Secured in a compressed timeframe, maximizing ecosystem engagement for AAST's large-scale festival.</p>
</div>
</div>
</div>
<div className="group p-8 bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all">
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-blue-400" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-blue-400 mb-2">30+</div>
<h3 className="text-lg font-medium mb-2">Strategic Partnerships at Creativa</h3>
<p className="text-sm text-neutral-400">Closed and managed partnerships with corporates and startups to scale innovation programs.</p>
</div>
</div>
</div>
<div className="group p-8 bg-gradient-to-br from-violet-500/5 to-violet-500/10 rounded-2xl border border-violet-500/20 hover:border-violet-500/40 transition-all">
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-violet-400" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-violet-400 mb-2">Green</div>
<h3 className="text-lg font-medium mb-2">Sustainability Startup Founded</h3>
<p className="text-sm text-neutral-400">Co-founded Let's Go Green, focusing on sugarcane waste recycling and sustainable business models.</p>
</div>
</div>
</div>
<div className="group p-8 bg-gradient-to-br from-amber-500/5 to-amber-500/10 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all">
<div className="flex items-start gap-4">
<div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
<i className="w-7 h-7 text-amber-400" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-amber-400 mb-2">MENA</div>
<h3 className="text-lg font-medium mb-2">Regional Expansion</h3>
<p className="text-sm text-neutral-400">Managed profit-oriented partnerships supporting regional expansion for 3D printing operations.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/50" id="contact">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Let's Build Something Together</h2>
<p className="text-base text-neutral-400 mb-8">Open to partnership opportunities, consulting, and strategic collaborations in the MENA startup ecosystem.</p>
<div className="flex flex-wrap justify-center gap-4 mb-12">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors" href="mailto:contact@example.com">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
                    Email me
                </a>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white text-sm font-medium rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700" href="https://www.linkedin.com/in/abdelrahman-eltahan/">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
                    LinkedIn
                </a>
</div>
<div className="flex justify-center gap-6">
<a className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors" href="https://www.instagram.com/abdelrahman_eltahan74/">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<footer className="py-8 px-6 border-t border-neutral-800">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-500">© 2024 All rights reserved.</p>
<p className="text-sm text-neutral-500">Business Development &amp; Partnerships Professional</p>
</div>
</footer>


    </>
  );
}
