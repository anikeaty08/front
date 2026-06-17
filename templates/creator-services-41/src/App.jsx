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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors">
<iconify-icon icon="solar:creativity-linear" width="18"></iconify-icon>
</div>
                CreatorArea
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#results">Results</a>
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
</div>
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all focus:ring-4 focus:ring-slate-200" href="#contact">
                Get Free Consultation
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-medium text-slate-600">Open for new projects</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Digital services that turn <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-slate-800">visitors into revenue.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                We bridge the gap between creative vision and business growth. Expert design, development, and content strategies for brands that refuse to blend in.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 focus:ring-4 focus:ring-blue-100" href="#contact">
                    Get a Free Consultation
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all" href="https://wa.me/919036742884">
<iconify-icon icon="logos:whatsapp-icon" width="16"></iconify-icon>
                    Chat on WhatsApp
                </a>
</div>
</div>

<div className="mt-24 border-t border-slate-200/60 pt-10">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Empowering ambitious brands</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800"><iconify-icon icon="solar:bolt-circle-bold-duotone"></iconify-icon> Spark</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800"><iconify-icon icon="solar:layers-minimalistic-bold-duotone"></iconify-icon> Layers</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800"><iconify-icon icon="solar:infinity-bold-duotone"></iconify-icon> Loop</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-slate-800"><iconify-icon icon="solar:atom-bold-duotone"></iconify-icon> Atom</div>
</div>
</div>

<div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Our Expertise</h2>
<p className="text-slate-500 max-w-lg leading-relaxed">Everything you need to scale your digital presence. We don't just complete tasks; we deliver strategic assets.</p>
</div>
<div className="text-right hidden md:block">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Services available</span>
<div className="text-slate-900 font-medium mt-1">Full-Service Digital Solutions</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Content &amp; Copywriting</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Persuasive words that rank on Google and sell to humans. We craft the voice of your brand.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> SEO Blog Articles</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Website Copy</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Newsletters</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-pink-300 hover:shadow-xl hover:shadow-pink-50 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Graphic Design</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Visual storytelling that captures attention instantly. Clean aesthetics tailored to your market.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon> Logo &amp; Branding</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon> Social Media Posts</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon> Marketing Posters</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clapperboard-play-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Video Editing</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">High-retention editing for the modern viewer. We turn raw footage into engaging stories.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Instagram Reels</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> YouTube Long-form</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Promo Videos</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Website Design</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">Fast, responsive, and conversion-optimized websites. Your 24/7 digital salesperson.</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Portfolio Sites</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> Business Landing Pages</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-indigo-500" icon="solar:check-circle-linear"></iconify-icon> E-commerce Stores</li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-200 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-50 transition-all duration-300 md:col-span-2 lg:col-span-2">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-12 h-12 shrink-0 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:hashtag-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-lg font-semibold text-slate-900 mb-3">Social Media Management</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed max-w-xl">Consistent growth strategies for Facebook and Instagram. We handle the posting, engagement, and analytics so you can focus on running your business.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Content Calendar Strategy</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Audience Engagement</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Analytics &amp; Reporting</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-teal-500" icon="solar:check-circle-linear"></iconify-icon> Growth Campaigns</li>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="results">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Real Client Results</h2>
<p className="text-slate-500">We don't measure success by output, but by the outcome.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Hospitality</span>
<iconify-icon className="text-slate-300" icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">The Spice Garden</h3>
<p className="text-sm text-slate-500 mb-4">A local restaurant struggling with low weekend footfall.</p>
<div className="space-y-3 pt-4 border-t border-slate-100">
<div className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:danger-linear"></iconify-icon>
<p className="text-xs text-slate-600">Zero social presence</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:star-circle-linear"></iconify-icon>
<p className="text-xs text-slate-900 font-medium">3x Engagement in 30 days via Instagram Reels</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">Real Estate</span>
<iconify-icon className="text-slate-300" icon="solar:city-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Urban Homes Realty</h3>
<p className="text-sm text-slate-500 mb-4">Agents needed better property showcase materials.</p>
<div className="space-y-3 pt-4 border-t border-slate-100">
<div className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:danger-linear"></iconify-icon>
<p className="text-xs text-slate-600">Unprofessional property videos</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:star-circle-linear"></iconify-icon>
<p className="text-xs text-slate-900 font-medium">Sold 2 luxury units within week of new video launch</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">E-Commerce</span>
<iconify-icon className="text-slate-300" icon="solar:bag-3-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">TechAccessorize</h3>
<p className="text-sm text-slate-500 mb-4">High traffic but low conversion on product pages.</p>
<div className="space-y-3 pt-4 border-t border-slate-100">
<div className="flex items-start gap-3">
<iconify-icon className="text-red-500 mt-0.5 shrink-0" icon="solar:danger-linear"></iconify-icon>
<p className="text-xs text-slate-600">Confusing product descriptions</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-500 mt-0.5 shrink-0" icon="solar:star-circle-linear"></iconify-icon>
<p className="text-xs text-slate-900 font-medium">25% increase in sales after copywriting overhaul</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300 mb-6">About CreatorArea</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Professional quality,<br/>freelance agility.</h2>
<p className="text-slate-400 text-lg leading-relaxed mb-6">
                        We are a collective of digital craftsmen. Born from the idea that freelance services shouldn't be a gamble, we standardized quality across design, writing, and development.
                    </p>
<p className="text-slate-400 text-lg leading-relaxed mb-8">
                        Our mission is simple: To provide agency-level quality without the bloat. You work directly with the creators who care about your business as much as you do.
                    </p>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300">
<iconify-icon icon="logos:adobe-photoshop" width="16"></iconify-icon> Photoshop
                        </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300">
<iconify-icon icon="logos:figma" width="16"></iconify-icon> Figma
                        </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300">
<iconify-icon icon="logos:wordpress-icon" width="16"></iconify-icon> WordPress
                        </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300">
<iconify-icon icon="logos:google-analytics" width="16"></iconify-icon> Analytics
                        </div>
</div>
</div>
<div className="relative">

<div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 relative z-10">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 italic mb-6">"CreatorArea completely transformed how we present ourselves online. The website design is sleek, but the copy is what actually sold our services."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 text-xs">JS</div>
<div>
<div className="font-semibold text-white text-sm">James Sullivan</div>
<div className="text-xs text-slate-500">CEO, Sullivan Arch.</div>
</div>
</div>
</div>
<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 absolute top-6 left-6 -z-0 w-full h-full scale-[0.95] origin-bottom"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-2xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Let's Build Something Great</h2>
<p className="text-slate-500">Fill out the form below or chat with us directly.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-100">
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="name">Name</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="service">Service Required</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all appearance-none text-slate-600" id="service">
<option>Content Writing</option>
<option>Graphic Design</option>
<option>Video Editing</option>
<option>Web Design</option>
<option>Social Media Management</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 uppercase tracking-wide" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-2.5 rounded-lg bg-slate-50 border border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none" id="message" placeholder="Tell us about your goals..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 px-6 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 flex items-center justify-center gap-2" type="button">
                        Send Request <iconify-icon icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
<div className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors w-full md:w-auto justify-center md:justify-start" href="mailto:pradeepbadiger000@gmail.com">
<div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div className="text-sm">
<span className="block text-slate-400 text-xs">Email us</span>
<span className="font-medium text-slate-700">pradeepbadiger000@gmail.com</span>
</div>
</a>
<a className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors w-full md:w-auto justify-center md:justify-start" href="https://wa.me/919036742884">
<div className="w-8 h-8 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="logos:whatsapp-icon" width="16"></iconify-icon>
</div>
<div className="text-sm">
<span className="block text-slate-400 text-xs">Chat on WhatsApp</span>
<span className="font-medium text-slate-700">+91 9036742884</span>
</div>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white text-xs">
<iconify-icon icon="solar:creativity-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-slate-900">CreatorArea</span>
</div>
<p className="text-sm text-slate-400">© 2024 CreatorArea. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-bold" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-bold" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-bold" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
