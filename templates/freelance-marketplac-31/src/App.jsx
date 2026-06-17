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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f2022',
}
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl tracking-tighter font-semibold flex items-center gap-2" href="#">
<span className="iconify" data-icon="lucide:hexagon" data-width="20" strokeWidth="1.5"></span>
                    WORKSPACE
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Find Talent</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Find Work</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Enterprise</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden lg:flex items-center bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-1.5 w-64 focus-within:ring-1 focus-within:ring-zinc-300 transition-all">
<span className="iconify text-zinc-400" data-icon="lucide:search" data-width="16"></span>
<input className="bg-transparent border-none outline-none text-sm ml-2 w-full placeholder:text-zinc-400" placeholder="Search for services..." type="text"/>
<span className="text-xs text-zinc-400 border border-zinc-200 rounded px-1.5 py-0.5">⌘K</span>
</div>
<button className="text-sm font-medium text-zinc-600 hover:text-zinc-900 px-3 py-2">Log In</button>
<button className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-sm shadow-zinc-500/20">Sign Up</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 px-6 border-b border-zinc-100">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Over 1,200 jobs posted today
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 leading-[1.1]">
                World-class talent,<br/>
<span className="text-zinc-400">ready to deploy.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 font-normal max-w-2xl mx-auto leading-relaxed">
                Connect with expert freelancers for development, design, and creative projects. Zero overhead, maximum output.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="group flex items-center justify-center gap-2 bg-zinc-900 text-white text-sm font-medium px-8 py-3.5 rounded-full hover:bg-zinc-800 transition-all w-full sm:w-auto shadow-lg shadow-zinc-500/20">
                    Hire Talent
                    <span className="iconify group-hover:translate-x-0.5 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="flex items-center justify-center gap-2 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium px-8 py-3.5 rounded-full hover:bg-zinc-50 transition-all w-full sm:w-auto">
                    Find Work
                </button>
</div>
</div>

<div className="mt-20 pt-10 border-t border-zinc-100/50">
<p className="text-center text-xs font-medium text-zinc-400 uppercase tracking-widest mb-8">Trusted by teams at</p>
<div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale">
<div className="flex items-center gap-2 text-zinc-900 font-bold tracking-tight text-lg"><span className="iconify" data-icon="lucide:triangle" data-width="20"></span> ACME</div>
<div className="flex items-center gap-2 text-zinc-900 font-bold tracking-tight text-lg"><span className="iconify" data-icon="lucide:circle-dashed" data-width="20"></span> SPHERE</div>
<div className="flex items-center gap-2 text-zinc-900 font-bold tracking-tight text-lg"><span className="iconify" data-icon="lucide:box" data-width="20"></span> CUBE</div>
<div className="flex items-center gap-2 text-zinc-900 font-bold tracking-tight text-lg"><span className="iconify" data-icon="lucide:layers" data-width="20"></span> STACK</div>
<div className="flex items-center gap-2 text-zinc-900 font-bold tracking-tight text-lg"><span className="iconify" data-icon="lucide:command" data-width="20"></span> CMD</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50/50">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Explore by category</h2>
<p className="text-sm text-zinc-500 mt-2">Find the perfect professional for your specific needs.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#">
                    View all
                    <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group p-6 bg-white border border-zinc-200 rounded-xl hover:shadow-md hover:border-zinc-300 transition-all duration-300" href="#">
<div className="h-10 w-10 bg-zinc-50 rounded-lg flex items-center justify-center border border-zinc-100 mb-4 group-hover:scale-105 transition-transform">
<span className="iconify text-zinc-900" data-icon="lucide:code-2" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Development</h3>
<p className="text-xs text-zinc-500">1,240 Skills</p>
</a>

<a className="group p-6 bg-white border border-zinc-200 rounded-xl hover:shadow-md hover:border-zinc-300 transition-all duration-300" href="#">
<div className="h-10 w-10 bg-zinc-50 rounded-lg flex items-center justify-center border border-zinc-100 mb-4 group-hover:scale-105 transition-transform">
<span className="iconify text-zinc-900" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Design &amp; Creative</h3>
<p className="text-xs text-zinc-500">980 Skills</p>
</a>

<a className="group p-6 bg-white border border-zinc-200 rounded-xl hover:shadow-md hover:border-zinc-300 transition-all duration-300" href="#">
<div className="h-10 w-10 bg-zinc-50 rounded-lg flex items-center justify-center border border-zinc-100 mb-4 group-hover:scale-105 transition-transform">
<span className="iconify text-zinc-900" data-icon="lucide:bar-chart-3" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-1">Sales &amp; Marketing</h3>
<p className="text-xs text-zinc-500">450 Skills</p>
</a>

<a className="group p-6 bg-white border border-zinc-200 rounded-xl hover:shadow-md hover:border-zinc-300 transition-all duration-300" href="#">
<div className="h-10 w-10 bg-zinc-50 rounded-lg flex items-center justify-center border border-zinc-100 mb-4 group-hover:scale-105 transition-transform">
<span className="iconify text-zinc-900" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-zinc-900 mb-1">AI Services</h3>
<p className="text-xs text-zinc-500">320 Skills</p>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">Top Rated</span>
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mt-2">Featured Freelancers</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-200 to-zinc-400 group-hover:from-zinc-800 group-hover:to-zinc-600 transition-all"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover border border-zinc-100" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Sarah J.</h3>
<p className="text-xs text-zinc-500">Product Designer</p>
</div>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-700 bg-zinc-50 border border-zinc-200 px-2 py-1 rounded-md">
<span className="iconify text-yellow-500 fill-yellow-500" data-icon="lucide:star" data-width="12"></span>
                            4.9
                        </div>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-6 line-clamp-2">
                        Specializing in minimal UI/UX for SaaS applications. 5+ years of experience delivering clean interfaces.
                    </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-xs text-zinc-600">Figma</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-xs text-zinc-600">React</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-xs text-zinc-600">Prototyping</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
<span className="text-sm font-medium text-zinc-900">$85<span className="text-zinc-400 font-normal">/hr</span></span>

<div className="flex items-center gap-2">
<span className="text-[10px] uppercase font-semibold tracking-wide text-zinc-400">Available</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 border-zinc-200 appearance-none cursor-pointer transition-all duration-200 checked:border-emerald-500 checked:bg-emerald-500" id="toggle1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-200 cursor-pointer" htmlFor="toggle1"></label>
</input></div>
</div>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-200 to-zinc-400 group-hover:from-zinc-800 group-hover:to-zinc-600 transition-all"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover border border-zinc-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<h3 className="text-sm font-semibold text-zinc-900">David K.</h3>
<p className="text-xs text-zinc-500">Full Stack Dev</p>
</div>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-700 bg-zinc-50 border border-zinc-200 px-2 py-1 rounded-md">
<span className="iconify text-yellow-500 fill-yellow-500" data-icon="lucide:star" data-width="12"></span>
                            5.0
                        </div>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-6 line-clamp-2">
                        Building scalable web apps with Next.js and Node. Expert in database architecture and API design.
                    </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-xs text-zinc-600">Next.js</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-xs text-zinc-600">Postgres</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-xs text-zinc-600">TypeScript</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
<span className="text-sm font-medium text-zinc-900">$120<span className="text-zinc-400 font-normal">/hr</span></span>
<button className="text-xs font-medium text-zinc-900 hover:underline">View Profile</button>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-zinc-200 to-zinc-400 group-hover:from-zinc-800 group-hover:to-zinc-600 transition-all"></div>
<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-12 h-12 rounded-full object-cover border border-zinc-100" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<h3 className="text-sm font-semibold text-zinc-900">Elena R.</h3>
<p className="text-xs text-zinc-500">Copywriter</p>
</div>
</div>
<div className="flex items-center gap-1 text-xs font-medium text-zinc-700 bg-zinc-50 border border-zinc-200 px-2 py-1 rounded-md">
<span className="iconify text-yellow-500 fill-yellow-500" data-icon="lucide:star" data-width="12"></span>
                            4.8
                        </div>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-6 line-clamp-2">
                        Crafting compelling narratives for tech brands. SEO-focused blog posts and high-conversion landing pages.
                    </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-xs text-zinc-600">SEO</span>
<span className="px-2.5 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-xs text-zinc-600">Content Strategy</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100">
<span className="text-sm font-medium text-zinc-900">$65<span className="text-zinc-400 font-normal">/hr</span></span>
<button className="text-xs font-medium text-zinc-900 hover:underline">View Profile</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-zinc-800 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-zinc-700 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">The new standard for modern work.</h2>
<p className="text-zinc-400 text-lg font-light leading-relaxed">
                        We handle the friction so you can focus on the output. From payments to contracts, WorkSpace creates a seamless layer between companies and talent.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px]">
<span className="iconify text-emerald-400" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Vetted Professionals</h4>
<p className="text-xs text-zinc-500 mt-1">Every freelancer passes a rigorous 5-step screening process.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px]">
<span className="iconify text-emerald-400" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Secure Payments</h4>
<p className="text-xs text-zinc-500 mt-1">Funds are held in escrow until you approve the work.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 min-w-[20px]">
<span className="iconify text-emerald-400" data-icon="lucide:zap" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Fast Hiring</h4>
<p className="text-xs text-zinc-500 mt-1">Average time to hire is less than 48 hours.</p>
</div>
</li>
</ul>
</div>

<div className="bg-zinc-800/50 border border-zinc-700/50 rounded-2xl p-8 backdrop-blur-sm relative">

<div className="space-y-4">
<div className="flex items-center justify-between pb-4 border-b border-zinc-700/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center">
<span className="iconify text-zinc-400" data-icon="lucide:file-text" data-width="14"></span>
</div>
<div className="space-y-1">
<div className="h-2 w-24 bg-zinc-700 rounded"></div>
<div className="h-1.5 w-16 bg-zinc-700/50 rounded"></div>
</div>
</div>
<div className="h-6 w-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center">
<span className="text-[10px] text-emerald-400 font-medium">Active</span>
</div>
</div>

<div className="pl-4 border-l border-zinc-700 space-y-6">
<div className="relative">
<div className="absolute -left-[21px] top-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-zinc-800"></div>
<div className="space-y-1">
<p className="text-xs text-zinc-300">Contract Signed</p>
<p className="text-[10px] text-zinc-500">Oct 24, 2:30 PM</p>
</div>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-0 h-2.5 w-2.5 rounded-full bg-zinc-600 ring-4 ring-zinc-800"></div>
<div className="space-y-1">
<p className="text-xs text-zinc-300">Milestone 1 Funded</p>
<p className="text-[10px] text-zinc-500">Oct 24, 2:35 PM</p>
</div>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-0 h-2.5 w-2.5 rounded-full bg-zinc-600 ring-4 ring-zinc-800"></div>
<div className="space-y-1">
<p className="text-xs text-zinc-300">Work Started</p>
<p className="text-[10px] text-zinc-500">Pending</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-zinc-100">
<div className="max-w-3xl mx-auto text-center space-y-6">
<h2 className="text-4xl font-semibold tracking-tighter text-zinc-900">Ready to start?</h2>
<p className="text-lg text-zinc-500 font-light">Join thousands of companies and freelancers building the future.</p>
<div className="flex items-center justify-center gap-4 pt-4">
<button className="bg-zinc-900 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-zinc-800 transition-all">Create Account</button>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg tracking-tighter font-semibold flex items-center gap-2 mb-4" href="#">
<span className="iconify" data-icon="lucide:hexagon" data-width="18"></span>
                        WORKSPACE
                    </a>
<p className="text-sm text-zinc-500 max-w-xs font-light">
                        Connecting the world's best talent with the most ambitious companies.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Browse Talent</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Browse Jobs</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-zinc-900 uppercase tracking-wide mb-4">Social</h4>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-400">© 2023 WorkSpace Inc. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
