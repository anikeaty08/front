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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
<div className="max-w-6xl mx-auto flex items-center justify-between glass-panel border border-zinc-200/50 rounded-full px-6 py-3 shadow-sm">
<a className="text-lg font-semibold tracking-tighter text-zinc-900 flex items-center gap-2" href="#">
<span className="bg-zinc-900 text-white w-8 h-8 flex items-center justify-center rounded-lg rotate-3">Q</span>
                QUIRK.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#work">Work</a>
<a className="hover:text-zinc-900 transition-colors" href="#process">Process</a>
<a className="hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
</div>
<a className="group relative px-5 py-2 rounded-full bg-zinc-900 text-white text-sm font-medium overflow-hidden transition-all hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-500/20" href="#contact">
<span className="relative z-10">Let's Talk</span>
</a>
</div>
</nav>

<section className="relative pt-40 pb-20 px-6 overflow-hidden">

<div className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
<div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 shadow-sm mb-8 rotate-[-2deg]">
<iconify-icon className="text-orange-500" icon="solar:star-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium text-zinc-600 tracking-wide uppercase">Open for new projects</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-zinc-900 leading-[1.1] mb-8">
                Websites that feel <br/>
<span className="relative inline-block">
<span className="relative z-10">human</span>
<svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-300 -z-10" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path>
</svg>
</span>
                again.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                We design digital experiences that break the grid. No boring templates, just hand-crafted personality for brands who aren't afraid to be themselves.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 bg-zinc-900 text-white rounded-xl font-medium shadow-xl shadow-zinc-900/10 hover:translate-y-[-2px] transition-transform" href="#contact">
                    Start a Project
                </a>
<a className="px-8 py-4 bg-white border border-zinc-200 text-zinc-700 rounded-xl font-medium hover:bg-zinc-50 transition-colors flex items-center gap-2" href="#work">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                    View Showreel
                </a>
</div>

<div className="absolute right-[10%] bottom-0 hidden lg:block transform rotate-12 translate-y-full">
<span className="font-hand text-xl text-zinc-400 block -rotate-6 mb-2">seriously good design</span>
<svg className="text-zinc-300" fill="none" height="40" stroke="currentColor" viewbox="0 0 50 50" width="40">
<path d="M40 5 C 20 20, 50 40, 10 40" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M10 40 L 18 35 M 10 40 L 15 30" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</section>

<section className="py-20 px-6" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Our Craft</h2>
<p className="text-zinc-500">Precision engineering meets playful creativity.</p>
</div>
<div className="hidden md:block">
<iconify-icon className="text-zinc-300 animate-bounce" icon="solar:mouse-circle-linear" width="32"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="group relative bg-white border border-zinc-200 rounded-3xl p-8 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="absolute top-8 right-8 w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pallete-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-end">
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Brand Identity</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Logos and systems that look great on billboards and browser tabs alike.</p>
</div>

<svg className="absolute top-1/3 left-8 w-24 h-24 text-zinc-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" viewbox="0 0 100 100">
<path d="M10 50 Q 25 25 50 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="4"></path>
</svg>
</div>

<div className="md:col-span-2 group relative bg-zinc-900 rounded-3xl p-8 overflow-hidden text-white shadow-2xl shadow-zinc-900/10 rotate-1 md:rotate-0 hover:rotate-1 transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 -z-10"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="flex justify-between items-start">
<div className="bg-zinc-800/50 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-zinc-300">Most Popular</div>
<iconify-icon className="text-orange-300" icon="solar:monitor-smartphone-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold mb-3">Web Design &amp; Dev</h3>
<p className="text-zinc-400 max-w-md text-sm leading-relaxed">
                                We build fast, accessible, and delightfully interactive websites using the modern stack. Tailwind, React, Astro—you name it, we ship it.
                            </p>
</div>
</div>
</div>

<div className="md:row-span-1 group relative bg-[#FDFCF8] border border-zinc-200 rounded-3xl p-8 overflow-hidden hover:border-orange-200 transition-colors">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-purple-100 rounded-full blur-xl opacity-50"></div>
<div className="h-full flex flex-col justify-between">
<div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Illustration</h3>
<p className="text-sm text-zinc-500">Custom assets that give your brand a unique voice.</p>
</div>
</div>
</div>

<div className="md:col-span-2 bg-white border border-zinc-200 rounded-3xl p-8 flex items-center justify-between relative overflow-hidden group">
<div className="relative z-10 max-w-sm">
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Content Strategy</h3>
<p className="text-sm text-zinc-500">We help you find the words that convert visitors into superfans.</p>
</div>
<div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full border border-dashed border-zinc-300 text-zinc-400 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-colors rotate-12">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-y border-dashed border-zinc-200">
<div className="max-w-4xl mx-auto text-center relative">
<iconify-icon className="text-zinc-200 absolute -top-8 left-1/2 -translate-x-1/2" icon="solar:quote-up-linear" width="48"></iconify-icon>
<blockquote className="text-2xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-8 leading-snug">
                "They took our boring corporate site and turned it into something that actually makes people <span className="text-orange-500 font-hand -rotate-2 inline-block">smile</span>. Conversion went up 40%."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 bg-zinc-100 rounded-full overflow-hidden border border-zinc-200">
<img alt="Client" className="w-full h-full object-cover grayscale opacity-80" src="https://ui-avatars.com/api/?name=Alex+R&amp;background=random&amp;color=fff"/>
</div>
<div className="text-left">
<div className="text-sm font-semibold text-zinc-900">Alex Rivers</div>
<div className="text-xs text-zinc-500">Founder, Stacked</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">Let's build something weird.</h2>
<p className="text-zinc-500">Fill out the form below. We promise not to ghost you.</p>
</div>
<form className="space-y-6 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-zinc-200/40 border border-zinc-100 relative">

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-orange-100/50 rounded-b-xl border-b border-x border-orange-200/50 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider ml-1">Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider ml-1">Email</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-3">
<label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider ml-1">I'm interested in...</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm text-zinc-600 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all hover:bg-zinc-50">
<iconify-icon className="text-lg" icon="solar:laptop-linear"></iconify-icon>
                                Web Design
                            </span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm text-zinc-600 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all hover:bg-zinc-50">
<iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon>
                                Development
                            </span>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 bg-white text-sm text-zinc-600 peer-checked:bg-zinc-900 peer-checked:text-white peer-checked:border-zinc-900 transition-all hover:bg-zinc-50">
<iconify-icon className="text-lg" icon="solar:rocket-linear"></iconify-icon>
                                Branding
                            </span>
</label>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center ml-1">
<label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider">Budget Range</label>
<span className="text-xs text-zinc-400 font-mono">$5k - $10k</span>
</div>
<input className="w-full h-2 bg-zinc-100 rounded-lg appearance-none cursor-pointer accent-zinc-900" max="100" min="1" type="range" value="30"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-zinc-700 uppercase tracking-wider ml-1">Message</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-900/5 focus:border-zinc-900 transition-all resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-zinc-900 text-white font-medium py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-zinc-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group" type="button">
                        Send Inquiry
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-400 mt-4">We usually respond within 24 hours.</p>
</div>
</form>

<div className="hidden xl:block absolute -right-24 top-1/2 -rotate-12 w-32 text-center">
<span className="font-hand text-lg text-zinc-400">no spam,<br/>promise!</span>
<svg className="w-8 h-8 mx-auto text-zinc-300 rotate-90" fill="none" stroke="currentColor" viewbox="0 0 50 50">
<path d="M10 25 Q 25 10 40 25" strokeLinecap="round" strokeWidth="1.5"></path>
<path d="M40 25 L 35 30 M 40 25 L 35 20" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 bg-white pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<a className="text-lg font-bold tracking-tighter text-zinc-900 flex items-center gap-2 mb-6" href="#">
<span className="bg-zinc-900 text-white w-6 h-6 flex items-center justify-center rounded text-sm">Q</span>
                         QUIRK.
                    </a>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-500 hover:bg-zinc-900 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:dribbble" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-zinc-900">Sitemap</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Work</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Agency</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-zinc-900">Legal</h4>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Privacy</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900" href="#">Terms</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-semibold text-zinc-900">Office</h4>
<p className="text-sm text-zinc-500">
                            123 Creative Blvd<br/>
                            Design District, NY
                        </p>
</div>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
<p>© 2024 Studio Quirk Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
