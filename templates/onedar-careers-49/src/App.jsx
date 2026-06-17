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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<div className="text-xl tracking-[0.2em] font-medium text-[#0F172A] uppercase">Onedar</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#0F172A] transition-colors" href="#">About</a>
<a className="text-xs font-medium uppercase tracking-widest text-slate-500 hover:text-[#0F172A] transition-colors" href="#">Projects</a>
<a className="text-xs font-medium uppercase tracking-widest text-[#0F172A]" href="#">Careers</a>
</div>
<button className="md:hidden text-slate-800">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-end pb-24 md:pb-32">

<div className="absolute inset-0 z-0">
<img alt="Abstract Architecture" className="w-full h-full object-cover object-center grayscale-[20%]" src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&amp;w=2676&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/40 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
<div className="max-w-3xl">
<span className="inline-block text-white/80 text-xs uppercase tracking-[0.2em] mb-6 border-l-2 border-[#D4AF37] pl-3">Careers at Onedar</span>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-tighter leading-[0.95] mb-8">
                    Build experiences <br/>
<span className="font-editorial italic pr-4">that move</span> people.
                </h1>
<p className="text-lg md:text-xl text-white/70 font-light max-w-xl leading-relaxed mb-10">
                    Join the team shaping how the world experiences Saudi Arabia. We are building the extraordinary, from concept to legacy.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
<a className="group flex items-center gap-3 bg-white text-[#0F172A] px-8 py-4 rounded-full transition-all hover:bg-[#D4AF37] hover:text-white" href="#open-roles">
<span className="text-sm font-medium tracking-wide">Explore Opportunities</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="text-white/80 hover:text-white text-sm font-medium border-b border-transparent hover:border-white transition-all pb-0.5" href="#culture">
                        Discover our culture
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/3 h-full bg-[#E5E7EB]/30 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-4">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#0F172A] mb-6 leading-tight">
                        More than a job.<br/>
<span className="text-slate-400">A destination.</span>
</h2>
<p className="text-slate-500 font-light leading-relaxed mb-8">
                        We don't offer standard career paths. We offer the chance to shape projects from their inception and define the future of hospitality and entertainment in the region.
                    </p>
<div className="hidden lg:block w-12 h-[1px] bg-[#0F172A]"></div>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group bg-white p-10 rounded-xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-6 text-[#0F172A]">
<iconify-icon icon="solar:compass-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#0F172A] tracking-tight mb-3">Early Stage Impact</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                            You aren't maintaining legacy systems. You are defining the operational DNA of world-class destinations before they open to the public.
                        </p>
</div>

<div className="group bg-white p-10 rounded-xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-1 md:mt-12">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-6 text-[#0F172A]">
<iconify-icon icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#0F172A] tracking-tight mb-3">Global Standards</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                            Work alongside industry leaders from global hospitality groups and strategic consultancies. Excellence is our baseline.
                        </p>
</div>

<div className="group bg-white p-10 rounded-xl shadow-[0_2px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-6 text-[#0F172A]">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#0F172A] tracking-tight mb-3">Real Ownership</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
                            We hire for trajectory, not just titles. Proximity to decision-making is high, and initiative is rewarded with expanded scope.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="mb-16">
<span className="text-xs font-medium uppercase tracking-widest text-[#D4AF37] mb-2 block">Departments</span>
<h2 className="text-3xl md:text-5xl font-light text-[#0F172A] tracking-tight">Find your place.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block p-8 rounded-2xl bg-slate-50 hover:bg-[#0F172A] transition-all duration-500" href="#">
<div className="mb-12 opacity-50 group-hover:opacity-100 group-hover:text-white transition-opacity">
<iconify-icon icon="solar:city-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#0F172A] group-hover:text-white mb-2 transition-colors">Destination Management</h3>
<p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed">
                        Operations, Logistics, Guest Experience, Facilities.
                    </p>
</a>

<a className="group block p-8 rounded-2xl bg-slate-50 hover:bg-[#0F172A] transition-all duration-500" href="#">
<div className="mb-12 opacity-50 group-hover:opacity-100 group-hover:text-white transition-opacity">
<iconify-icon icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#0F172A] group-hover:text-white mb-2 transition-colors">Experience Design</h3>
<p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed">
                        Product, Creative Strategy, Programming, Content.
                    </p>
</a>

<a className="group block p-8 rounded-2xl bg-slate-50 hover:bg-[#0F172A] transition-all duration-500" href="#">
<div className="mb-12 opacity-50 group-hover:opacity-100 group-hover:text-white transition-opacity">
<iconify-icon icon="solar:handshake-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#0F172A] group-hover:text-white mb-2 transition-colors">Sales &amp; Partnerships</h3>
<p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed">
                        Commercial, Business Development, Strategic Alliances.
                    </p>
</a>

<a className="group block p-8 rounded-2xl bg-slate-50 hover:bg-[#0F172A] transition-all duration-500" href="#">
<div className="mb-12 opacity-50 group-hover:opacity-100 group-hover:text-white transition-opacity">
<iconify-icon icon="solar:graph-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#0F172A] group-hover:text-white mb-2 transition-colors">Corporate Strategy</h3>
<p className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors leading-relaxed">
                        Finance, Legal, HR, Executive Office.
                    </p>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="open-roles">
<div className="max-w-5xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-light text-[#0F172A] tracking-tight mb-4">Open Positions</h2>
<p className="text-slate-500 font-light">Current opportunities to join the team in Riyadh.</p>
</div>
<div className="hidden md:block">
<span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Scroll to view</span>
</div>
</div>

<div className="border-t border-slate-200">

<div className="group border-b border-slate-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors cursor-pointer">
<div className="md:w-1/2">
<h3 className="text-xl font-medium text-[#0F172A] tracking-tight group-hover:text-blue-900 transition-colors">Director of Guest Experience</h3>
<p className="text-sm text-slate-500 mt-2 font-light">Operations · Riyadh · Full-time</p>
</div>
<div className="md:w-1/3 flex md:justify-end">
<span className="inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                            View Role <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group border-b border-slate-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors cursor-pointer">
<div className="md:w-1/2">
<h3 className="text-xl font-medium text-[#0F172A] tracking-tight group-hover:text-blue-900 transition-colors">Senior Content Strategist</h3>
<p className="text-sm text-slate-500 mt-2 font-light">Marketing · Riyadh · Full-time</p>
</div>
<div className="md:w-1/3 flex md:justify-end">
<span className="inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                            View Role <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>

<div className="group border-b border-slate-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors cursor-pointer">
<div className="md:w-1/2">
<h3 className="text-xl font-medium text-[#0F172A] tracking-tight group-hover:text-blue-900 transition-colors">Commercial Partnerships Manager</h3>
<p className="text-sm text-slate-500 mt-2 font-light">Sales · Riyadh · Full-time</p>
</div>
<div className="md:w-1/3 flex md:justify-end">
<span className="inline-flex items-center gap-2 text-sm font-medium text-[#0F172A] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                            View Role <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>

<div className="mt-16 bg-[#F8FAFC] rounded-2xl p-8 md:p-12 border border-slate-100 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-slate-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div className="max-w-lg">
<h3 className="text-2xl font-light text-[#0F172A] tracking-tight mb-3">Don't see your role?</h3>
<p className="text-slate-500 font-light leading-relaxed">
                            We are always interested in meeting exceptional people. If you believe you can create impact at Onedar, send us your portfolio or CV and tell us where you see yourself adding value.
                        </p>
</div>
<a className="whitespace-nowrap bg-[#0F172A] text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/10" href="#">
                        Send Open Application
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFAF6] border-y border-[#F3EFE9]">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-medium uppercase tracking-widest text-[#B89856] mb-4 block">Network</span>
<h2 className="text-3xl md:text-5xl font-light text-[#0F172A] tracking-tight mb-6 leading-tight">
                        Collaborate with us<br/>
<span className="font-editorial italic">as a specialist.</span>
</h2>
<p className="text-slate-600 font-light leading-relaxed mb-8 max-w-md">
                        Our projects often require niche expertise. We regularly collaborate with independent freelancers, local experts, and specialized studios.
                    </p>
<a className="inline-flex items-center gap-2 text-[#0F172A] border-b border-[#0F172A] pb-1 hover:opacity-70 transition-opacity text-sm font-medium" href="#">
                        Register as a Specialist <iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl shadow-[#B89856]/5">
<img alt="Collaboration" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#0F172A]/10 mix-blend-multiply"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="culture">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-5">
<h2 className="text-4xl md:text-6xl font-light text-[#0F172A] tracking-tighter leading-[0.9]">
                        Autonomy <br/>
                        is earned <br/>
                        through <br/>
<span className="text-[#D4AF37] font-editorial italic">ownership.</span>
</h2>
</div>
<div className="lg:col-span-7 flex flex-col justify-center">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<div className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-full mb-4">
<span className="text-xs font-medium text-slate-400">01</span>
</div>
<h3 className="text-lg font-medium text-[#0F172A] mb-3">Clarity &amp; Trust</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                                We operate with high trust. We expect you to seek clarity when needed, but once the direction is set, we trust you to execute without micromanagement.
                            </p>
</div>

<div>
<div className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-full mb-4">
<span className="text-xs font-medium text-slate-400">02</span>
</div>
<h3 className="text-lg font-medium text-[#0F172A] mb-3">Operational Truth</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                                We prefer uncomfortable truths over comfortable lies. If a project timeline is at risk, we discuss it immediately. We solve for the reality on the ground.
                            </p>
</div>

<div>
<div className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-full mb-4">
<span className="text-xs font-medium text-slate-400">03</span>
</div>
<h3 className="text-lg font-medium text-[#0F172A] mb-3">High Standards</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                                "Good enough" is rarely enough for a destination brand. We push the details because we know our guests will notice them.
                            </p>
</div>

<div>
<div className="w-8 h-8 flex items-center justify-center border border-slate-200 rounded-full mb-4">
<span className="text-xs font-medium text-slate-400">04</span>
</div>
<h3 className="text-lg font-medium text-[#0F172A] mb-3">Collective Ambition</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                                We win together. Individual egos are checked at the door. The project's success is the only metric that matters.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0F172A] text-white py-20">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start mb-20">
<div className="max-w-md">
<div className="text-2xl font-medium tracking-[0.1em] uppercase mb-8">Onedar</div>
<p className="text-slate-400 font-light leading-relaxed mb-8">
                        Part of SELA. Creating destinations that inspire, connect, and endure.
                    </p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0F172A] rounded-md font-medium text-sm hover:bg-slate-200 transition-colors" href="#">
                        Get in Touch
                    </a>
</div>
<div className="flex gap-12 md:gap-24 mt-12 md:mt-0">
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-6">Company</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Projects</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">News</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-6">Connect</h4>
<ul className="space-y-4">
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-sm text-slate-300 hover:text-white transition-colors" href="#">Instagram</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-light">
<p>© 2024 Onedar. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-300" href="#">Privacy Policy</a>
<a className="hover:text-slate-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
