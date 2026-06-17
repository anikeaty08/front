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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] glow-orb"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] glow-orb" style={{animationDelay: '4s'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-lg tracking-tighter shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                    B
                </div>
<div className="flex flex-col">
<span className="text-white font-bold tracking-tight text-lg leading-none">BIGROXIE</span>
<span className="text-[10px] text-indigo-400 font-medium tracking-widest uppercase">Digital</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-300 hover:text-white hover:text-shadow transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#work">Portfolio</a>
<a className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#about">About</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex px-5 py-2.5 rounded-full bg-white text-[#020617] font-semibold text-sm hover:bg-indigo-50 transition-all shadow-lg hover:shadow-indigo-500/20 items-center gap-2" href="#contact">
                    Let's Talk
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-semibold tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                    Digital Marketing Agency
                </div>
<h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                    We Scale Brands with <span className="text-gradient">Powerful</span> Digital Marketing
                </h1>
<p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                    Transform your online presence. We help startups and established businesses grow through data-driven SEO, creative design, and high-performance ad campaigns.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-sm hover:opacity-90 transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2" href="#contact">
                        Get Free Consultation
                        <iconify-icon icon="solar:chat-line-linear" width="18"></iconify-icon>
</a>
<a className="px-8 py-4 rounded-full border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-2" href="#work">
                        View Our Work
                        <iconify-icon icon="solar:gallery-wide-linear" width="18"></iconify-icon>
</a>
</div>
<div className="pt-8 flex items-center gap-8 border-t border-white/5">
<div>
<p className="text-2xl font-bold text-white">150+</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">Clients Scaled</p>
</div>
<div>
<p className="text-2xl font-bold text-white">10x</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">ROI Generated</p>
</div>
<div>
<p className="text-2xl font-bold text-white">5yr</p>
<p className="text-xs text-slate-500 uppercase tracking-wider">Experience</p>
</div>
</div>
</div>

<div className="relative lg:h-[600px] w-full hidden lg:block">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
<div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
<img alt="Digital Marketing Analytics Dashboard" className="object-cover w-full h-full opacity-60 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 p-4 glass rounded-xl border border-white/10 shadow-lg max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-400">Monthly Growth</p>
<p className="text-sm font-bold text-white">+127% Increase</p>
</div>
</div>
<div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 w-3/4 h-full rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-slate-900/30">
<div className="max-w-7xl mx-auto px-6 py-10">
<p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-8">Trusted by growing companies</p>
<div className="flex flex-wrap justify-center gap-12 lg:gap-20 opacity-40 grayscale">

<h3 className="text-xl font-bold text-white">NEXUS</h3>
<h3 className="text-xl font-bold text-white">VORTEX</h3>
<h3 className="text-xl font-bold text-white">STRATA</h3>
<h3 className="text-xl font-bold text-white">LUMINA</h3>
<h3 className="text-xl font-bold text-white">QUANTUM</h3>
</div>
</div>
</div>

<section className="py-24 px-6 relative" id="about">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">Who We Are</h2>
<h3 className="text-3xl md:text-5xl font-bold text-white mb-6">More than just an agency. <br/> We are your growth partners.</h3>
<p className="text-slate-400 text-lg leading-relaxed mb-10">
                BIGROXIE DIGITAL is a premium freelance digital marketing collective. We cut through the noise to deliver strategies that actually convert. From stunning visuals to complex SEO architectures, we handle the digital heavy lifting so you can focus on running your business.
            </p>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
<div className="p-6 rounded-xl border border-white/5 bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
<iconify-icon className="text-indigo-400 text-3xl mb-4" icon="solar:graph-up-linear"></iconify-icon>
<h4 className="text-white font-semibold mb-2">Result Driven</h4>
<p className="text-xs text-slate-500">We focus on ROI, leads, and sales, not just vanity metrics.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
<iconify-icon className="text-blue-400 text-3xl mb-4" icon="solar:wallet-money-linear"></iconify-icon>
<h4 className="text-white font-semibold mb-2">Affordable</h4>
<p className="text-xs text-slate-500">Premium quality services tailored to fit startup budgets.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
<iconify-icon className="text-purple-400 text-3xl mb-4" icon="solar:palette-linear"></iconify-icon>
<h4 className="text-white font-semibold mb-2">Creative Design</h4>
<p className="text-xs text-slate-500">Eye-catching visuals that capture attention instantly.</p>
</div>
<div className="p-6 rounded-xl border border-white/5 bg-slate-900/20 hover:bg-slate-800/40 transition-colors">
<iconify-icon className="text-pink-400 text-3xl mb-4" icon="solar:user-check-linear"></iconify-icon>
<h4 className="text-white font-semibold mb-2">Expert Team</h4>
<p className="text-xs text-slate-500">Certified professionals in Ads, SEO, and Development.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#03081c]" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Full-Stack Digital Solutions</h3>
</div>
<p className="text-slate-400 max-w-md text-sm leading-relaxed">Everything you need to dominate your niche. Integrated services working together for maximum impact.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group glass-card p-8 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="solar:laptop-minimalistic-linear" width="100"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<iconify-icon icon="solar:code-square-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-white mb-3">Web Development</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Custom, fast-loading websites built on modern tech stacks. Responsive designs that convert visitors into customers.</p>
<ul className="space-y-2 text-xs text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Landing Pages</li>
<li className="flex items-center gap-2"><iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> E-commerce Stores</li>
</ul>
</div>

<div className="group glass-card p-8 rounded-2xl hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="solar:smartphone-linear" width="100"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
<iconify-icon icon="solar:mention-circle-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-white mb-3">Social Media Marketing</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Strategic content management for Instagram, LinkedIn, and Facebook to build community and brand loyalty.</p>
<ul className="space-y-2 text-xs text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Content Creation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Community Management</li>
</ul>
</div>

<div className="group glass-card p-8 rounded-2xl hover:border-green-500/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="solar:magnifer-linear" width="100"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6 text-green-400">
<iconify-icon icon="solar:graph-new-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-white mb-3">SEO Optimization</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6">Rank higher on Google. We optimize your technical structure and content to drive organic traffic.</p>
<ul className="space-y-2 text-xs text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Keyword Research</li>
<li className="flex items-center gap-2"><iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> On-page &amp; Off-page SEO</li>
</ul>
</div>

<div className="group glass-card p-8 rounded-2xl hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="solar:dollar-minimalistic-linear" width="100"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-400">
<iconify-icon icon="solar:megaphone-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-white mb-3">Paid Ads (PPC)</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6">High-conversion campaigns on Google and Meta (Facebook/Instagram). Instant traffic and measurable results.</p>
<ul className="space-y-2 text-xs text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Meta Ads Manager</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Google Search Ads</li>
</ul>
</div>

<div className="group glass-card p-8 rounded-2xl hover:border-pink-500/50 transition-all duration-300 relative overflow-hidden lg:col-span-2">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="solar:pallete-2-linear" width="100"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-6 text-pink-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-white mb-3">Creative Design &amp; Branding</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-6">From logos to social media posters. We design visual identities that tell your brand's unique story.</p>
<div className="grid grid-cols-2 gap-4">
<ul className="space-y-2 text-xs text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon> Logo Design</li>
<li className="flex items-center gap-2"><iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon> Ad Creatives</li>
</ul>
<ul className="space-y-2 text-xs text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon> Brand Guidelines</li>
<li className="flex items-center gap-2"><iconify-icon className="text-pink-500" icon="solar:check-circle-linear"></iconify-icon> Marketing Collateral</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="work">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">Our Work</h2>
<h3 className="text-3xl md:text-5xl font-bold text-white">Recent Projects</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group rounded-xl overflow-hidden bg-slate-900 border border-white/5 relative">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Marketing Dashboard" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold">View Case Study</button>
</div>
</div>
<div className="p-6">
<p className="text-xs text-indigo-400 font-medium mb-2 uppercase">SEO &amp; Growth</p>
<h4 className="text-xl font-bold text-white mb-2">TechStart SaaS Growth</h4>
<p className="text-sm text-slate-400">Increased organic traffic by 200% in 3 months through technical SEO.</p>
</div>
</div>

<div className="group rounded-xl overflow-hidden bg-slate-900 border border-white/5 relative">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Creative Poster Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1626785774573-4b799314346d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold">View Case Study</button>
</div>
</div>
<div className="p-6">
<p className="text-xs text-purple-400 font-medium mb-2 uppercase">Social Media &amp; Design</p>
<h4 className="text-xl font-bold text-white mb-2">Fashion Week Campaign</h4>
<p className="text-sm text-slate-400">Viral Instagram campaign with custom poster designs and reels.</p>
</div>
</div>

<div className="group rounded-xl overflow-hidden bg-slate-900 border border-white/5 relative">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Website Development" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<button className="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold">View Case Study</button>
</div>
</div>
<div className="p-6">
<p className="text-xs text-blue-400 font-medium mb-2 uppercase">Web Development</p>
<h4 className="text-xl font-bold text-white mb-2">E-commerce Redesign</h4>
<p className="text-sm text-slate-400">Complete Shopify overhaul resulting in 45% higher conversion rate.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-slate-900/20">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-3">Testimonials</h2>
<h3 className="text-3xl font-bold text-white">What our clients say</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-[#020617] border border-white/5 relative">
<iconify-icon className="text-4xl text-indigo-500/20 mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"BIGROXIE transformed our lead generation. The ad campaigns are precise and the ROI has been incredible. Highly recommend their PPC team."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800"></div>
<div>
<p className="text-white text-sm font-bold">Sarah Jenkins</p>
<p className="text-slate-500 text-xs">CEO, TechFlow</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#020617] border border-white/5 relative">
<iconify-icon className="text-4xl text-indigo-500/20 mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"The website they built is stunning and blazing fast. Our bounce rate dropped significantly. True professionals."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800"></div>
<div>
<p className="text-white text-sm font-bold">David Chen</p>
<p className="text-slate-500 text-xs">Founder, Urban Wear</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#020617] border border-white/5 relative">
<iconify-icon className="text-4xl text-indigo-500/20 mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-slate-300 text-sm leading-relaxed mb-6">"Their creative designs for our social media are top notch. We've seen great engagement growth on Instagram."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800"></div>
<div>
<p className="text-white text-sm font-bold">Elena Rodriguez</p>
<p className="text-slate-500 text-xs">Marketing Lead, Foodie App</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contact">
<div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-white/10 overflow-hidden">
<div className="grid lg:grid-cols-2">
<div className="p-10 lg:p-16 flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to scale your business?</h2>
<p className="text-slate-400 mb-8">Fill out the form or reach out directly. We respond within 24 hours.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<span>+1 (555) 123-4567</span>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<span>hello@bigroxie.digital</span>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<span>New York, NY (Remote Worldwide)</span>
</div>
</div>
<div className="flex gap-4 mt-10">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon className="grayscale hover:grayscale-0" icon="logos:instagram-icon" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon className="grayscale hover:grayscale-0" icon="logos:linkedin-icon" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white hover:text-black transition-all" href="#">
<iconify-icon className="grayscale hover:grayscale-0" icon="logos:facebook" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="p-10 lg:p-16 bg-white/[0.02]">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Name</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:bg-slate-900 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Phone</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:bg-slate-900 transition-all" placeholder="+1 234..." type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Email</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:bg-slate-900 transition-all" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Service Interested In</label>
<select className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-400 focus:text-white focus:bg-slate-900 transition-all">
<option>SEO Optimization</option>
<option>Web Development</option>
<option>Paid Advertising</option>
<option>Social Media</option>
<option>Creative Design</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs text-slate-500 font-medium ml-1">Message</label>
<textarea className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-600 focus:bg-slate-900 transition-all" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 rounded-lg bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/30" type="button">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#010409] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">B</div>
<span className="text-white font-bold text-sm">BIGROXIE DIGITAL</span>
</div>
<p className="text-xs text-slate-600">© 2024 BIGROXIE Digital. All rights reserved.</p>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center text-white z-50 transition-all hover:-translate-y-1" href="#">
<iconify-icon icon="logos:whatsapp-icon" width="28"></iconify-icon>
</a>

    </>
  );
}
