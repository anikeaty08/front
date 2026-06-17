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
      

<nav className="fixed top-0 w-full z-50 bg-[#0f0f0f]/80 bg-blur border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-white text-2xl font-semibold tracking-tighter">
                AIR<span className="text-[#ff4d00]">ADS</span>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#case-studies">Results</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<button className="bg-[#ff4d00] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#ff6a2a] transition-all glow-orange">
                Get Free Audit
            </button>
</div>
</nav>

<section className="pt-40 pb-20 px-6 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_#ff4d0015_0%,_transparent_70%)] -z-10"></div>
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ff4d00]/30 bg-[#ff4d00]/5 text-[#ff4d00] text-xs font-medium mb-8">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                Next-Gen Performance Marketing
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight mb-8">
                Scale Your Business With <span className="orange-text-gradient">High-Performance</span> Paid Ads
            </h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                We help brands grow faster using Google Ads, Meta Ads, and data-driven marketing strategies that actually convert.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full md:w-auto bg-[#ff4d00] text-white px-8 py-4 rounded-xl text-md font-semibold hover:scale-105 transition-transform">
                    Get Free Audit
                </button>
<button className="w-full md:w-auto bg-white/5 text-white border border-white/10 px-8 py-4 rounded-xl text-md font-semibold hover:bg-white/10 transition-colors">
                    Book Strategy Call
                </button>
</div>

<div className="relative max-w-5xl mx-auto p-4 gradient-border rounded-3xl bg-white/5 glow-orange">
<div className="bg-[#0f0f0f] rounded-2xl overflow-hidden border border-white/10 p-6">
<div className="flex items-center justify-between mb-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
</div>
<div className="text-xs text-gray-500">Ad Performance Dashboard • 2024</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-left">
<div className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Total ROAS</div>
<div className="text-3xl font-semibold text-white tracking-tight">8.42x</div>
<div className="text-xs text-green-400 mt-2 flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 12% vs last month
                            </div>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-left">
<div className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Revenue</div>
<div className="text-3xl font-semibold text-white tracking-tight">$428,290</div>
<div className="text-xs text-green-400 mt-2 flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 24% vs last month
                            </div>
</div>
<div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-left">
<div className="text-xs text-gray-500 mb-2 uppercase tracking-widest">Conversions</div>
<div className="text-3xl font-semibold text-white tracking-tight">1,204</div>
<div className="text-xs text-green-400 mt-2 flex items-center gap-1">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 8.2% vs last month
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium uppercase tracking-[0.2em] mb-12 text-gray-500">Trusted by fast-growing brands</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all">
<span className="text-xl font-semibold tracking-tighter text-white">LUMINA</span>
<span className="text-xl font-semibold tracking-tighter text-white">VERTEX</span>
<span className="text-xl font-semibold tracking-tighter text-white">ORBIT</span>
<span className="text-xl font-semibold tracking-tighter text-white">NOVA</span>
<span className="text-xl font-semibold tracking-tighter text-white">STRATOS</span>
</div>
</div>
</section>

<section className="py-32 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-xs font-medium text-[#ff4d00] uppercase tracking-widest mb-4">Our Expertise</h2>
<h3 className="text-4xl font-semibold text-white tracking-tight">Data-Driven Ad Solutions</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#ff4d00]/30 transition-all duration-500">
<div className="w-12 h-12 rounded-2xl bg-[#ff4d00]/10 flex items-center justify-center text-[#ff4d00] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-3">Google Ads</h4>
<p className="text-sm leading-relaxed">Dominating Search, Shopping, and Display to capture high-intent buyers.</p>
</div>

<div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#ff4d00]/30 transition-all duration-500">
<div className="w-12 h-12 rounded-2xl bg-[#ff4d00]/10 flex items-center justify-center text-[#ff4d00] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-3">Meta Ads</h4>
<p className="text-sm leading-relaxed">Scaling Facebook and Instagram campaigns with high-converting creative.</p>
</div>

<div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#ff4d00]/30 transition-all duration-500">
<div className="w-12 h-12 rounded-2xl bg-[#ff4d00]/10 flex items-center justify-center text-[#ff4d00] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-3">TikTok Ads</h4>
<p className="text-sm leading-relaxed">Engaging younger audiences through trend-led video marketing.</p>
</div>

<div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#ff4d00]/30 transition-all duration-500">
<div className="w-12 h-12 rounded-2xl bg-[#ff4d00]/10 flex items-center justify-center text-[#ff4d00] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-white mb-3">CRO Optimization</h4>
<p className="text-sm leading-relaxed">Improving landing pages to squeeze every drop of ROI from your traffic.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white/[0.01]" id="process">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-4xl font-semibold text-white tracking-tight">The Growth Engine</h2>
<p className="mt-4 text-gray-500">A systematic approach to scaling your brand.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative text-center">
<div className="w-8 h-8 rounded-full bg-[#ff4d00] text-white flex items-center justify-center mx-auto mb-6 relative z-10 text-sm font-bold">1</div>
<h4 className="text-white font-medium mb-2">Research</h4>
<p className="text-xs text-gray-500">Competitor analysis and audience mapping.</p>
</div>
<div className="relative text-center">
<div className="w-8 h-8 rounded-full bg-[#0f0f0f] border border-[#ff4d00] text-[#ff4d00] flex items-center justify-center mx-auto mb-6 relative z-10 text-sm font-bold">2</div>
<h4 className="text-white font-medium mb-2">Strategy</h4>
<p className="text-xs text-gray-500">Custom funnels and creative direction.</p>
</div>
<div className="relative text-center">
<div className="w-8 h-8 rounded-full bg-[#0f0f0f] border border-[#ff4d00] text-[#ff4d00] flex items-center justify-center mx-auto mb-6 relative z-10 text-sm font-bold">3</div>
<h4 className="text-white font-medium mb-2">Launch</h4>
<p className="text-xs text-gray-500">Technical setup and campaign deployment.</p>
</div>
<div className="relative text-center">
<div className="w-8 h-8 rounded-full bg-[#0f0f0f] border border-[#ff4d00] text-[#ff4d00] flex items-center justify-center mx-auto mb-6 relative z-10 text-sm font-bold">4</div>
<h4 className="text-white font-medium mb-2">Scale</h4>
<p className="text-xs text-gray-500">Optimizing ROAS and budget expansion.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="case-studies">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-16">Proof in Performance</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
<div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/5 aspect-video">
<img alt="Case study" className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 p-10 flex flex-col justify-end">
<span className="text-[#ff4d00] text-xs font-medium mb-2 uppercase tracking-widest">E-commerce Brand</span>
<h4 className="text-2xl font-semibold text-white mb-6">450% Increase in Revenue</h4>
<div className="flex gap-10">
<div>
<div className="text-2xl font-semibold text-white">6.2x</div>
<div className="text-xs text-gray-500">Avg ROAS</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">+142%</div>
<div className="text-xs text-gray-500">Conv. Rate</div>
</div>
</div>
</div>
</div>
<div className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/5 aspect-video">
<img alt="Case study" className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 p-10 flex flex-col justify-end">
<span className="text-[#ff4d00] text-xs font-medium mb-2 uppercase tracking-widest">SaaS Product</span>
<h4 className="text-2xl font-semibold text-white mb-6">85% Reduction in CAC</h4>
<div className="flex gap-10">
<div>
<div className="text-2xl font-semibold text-white">12k+</div>
<div className="text-xs text-gray-500">Monthly Leads</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">-45%</div>
<div className="text-xs text-gray-500">CPL Decrease</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#ff4d00]/5">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gray-800"></div>
<div>
<div className="text-sm font-semibold text-white">Sarah Jenkins</div>
<div className="text-xs text-gray-500">CEO, Bloomify</div>
</div>
</div>
<p className="text-md leading-relaxed">"AirAds completely transformed our Meta strategy. We went from struggling to break even to a consistent 5x ROAS in just 3 months."</p>
</div>
<div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gray-800"></div>
<div>
<div className="text-sm font-semibold text-white">David Chen</div>
<div className="text-xs text-gray-500">Marketing Lead, TechFlow</div>
</div>
</div>
<p className="text-md leading-relaxed">"The transparency and data-driven approach is unlike any agency we've worked with before. They feel like an extension of our team."</p>
</div>
<div className="p-8 rounded-3xl bg-[#0f0f0f] border border-white/5">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-gray-800"></div>
<div>
<div className="text-sm font-semibold text-white">Michael Ross</div>
<div className="text-xs text-gray-500">Founder, Velocity Labs</div>
</div>
</div>
<p className="text-md leading-relaxed">"Their CRO expertise is what really sets them apart. They don't just send traffic; they make sure that traffic actually buys."</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-4xl font-semibold text-white tracking-tight mb-4">Transparent Pricing</h2>
<p className="text-gray-500">Plans designed for every stage of growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
<h4 className="text-lg font-medium text-white mb-2">Starter</h4>
<div className="text-4xl font-semibold text-white mb-6">$2,500<span className="text-sm text-gray-500 font-normal">/mo</span></div>
<ul className="space-y-4 mb-10 text-sm">
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> Up to $10k Ad Spend</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> 2 Ad Channels</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> Bi-Weekly Reporting</li>
<li className="flex items-center gap-3 opacity-50"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> Landing Page Design</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors">Choose Starter</button>
</div>

<div className="p-10 rounded-3xl bg-white/[0.08] border border-[#ff4d00]/50 relative scale-105 glow-orange">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff4d00] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>
<h4 className="text-lg font-medium text-white mb-2">Growth</h4>
<div className="text-4xl font-semibold text-white mb-6">$5,000<span className="text-sm text-gray-500 font-normal">/mo</span></div>
<ul className="space-y-4 mb-10 text-sm">
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> Up to $50k Ad Spend</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> 4 Ad Channels</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> Weekly Strategy Calls</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> Landing Page Design</li>
</ul>
<button className="w-full py-3 rounded-xl bg-[#ff4d00] text-white text-sm font-semibold hover:bg-[#ff6a2a] transition-all">Choose Growth</button>
</div>

<div className="p-10 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
<h4 className="text-lg font-medium text-white mb-2">Scale</h4>
<div className="text-4xl font-semibold text-white mb-6">Custom</div>
<ul className="space-y-4 mb-10 text-sm">
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> Unlimited Ad Spend</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> All Ad Channels</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> Dedicated Slack Channel</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#ff4d00]" icon="solar:check-circle-linear"></iconify-icon> Creative Studio Access</li>
</ul>
<button className="w-full py-3 rounded-xl border border-white/10 text-white text-sm font-semibold hover:bg-white/5 transition-colors">Contact Us</button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group p-6 rounded-2xl bg-white/5 border border-white/5">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-white font-medium">How soon can we see results?</span>
<iconify-icon className="group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-400">Initial data usually starts coming in within 48 hours. However, full optimization and scaling typically take 30-90 days of consistent testing.</p>
</details>
<details className="group p-6 rounded-2xl bg-white/5 border border-white/5">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-white font-medium">Do you provide the ad creative?</span>
<iconify-icon className="group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-400">Yes, our Growth and Scale plans include creative direction and high-converting ad copies. We also offer professional video production as an add-on.</p>
</details>
<details className="group p-6 rounded-2xl bg-white/5 border border-white/5">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-white font-medium">Which platform is best for my brand?</span>
<iconify-icon className="group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-400">This depends on your audience. We conduct a thorough audit of your brand and competitors to recommend the highest potential channels first.</p>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[#ff4d00]/10 -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-8">Ready to Scale Your Brand to the Moon?</h2>
<p className="text-lg text-gray-400 mb-12">Stop wasting ad spend. Let our experts build you a high-performance marketing machine.</p>
<button className="bg-[#ff4d00] text-white px-10 py-5 rounded-full text-md font-semibold hover:scale-105 transition-transform glow-orange">
                Book Your Free Strategy Call
            </button>
</div>
</section>

<footer className="py-20 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div>
<div className="text-white text-2xl font-semibold tracking-tighter mb-6">
                    AIR<span className="text-[#ff4d00]">ADS</span>
</div>
<p className="text-sm leading-relaxed mb-6">The performance partner for the world's most ambitious brands.</p>
<div className="flex gap-4">
<iconify-icon className="text-white hover:text-[#ff4d00] cursor-pointer" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-white hover:text-[#ff4d00] cursor-pointer" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-white hover:text-[#ff4d00] cursor-pointer" icon="solar:star-linear"></iconify-icon>
</div>
</div>
<div>
<h5 className="text-white font-medium mb-6">Services</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Google Ads</a></li>
<li><a className="hover:text-white transition-colors" href="#">Meta Ads</a></li>
<li><a className="hover:text-white transition-colors" href="#">TikTok Ads</a></li>
<li><a className="hover:text-white transition-colors" href="#">Landing Pages</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-6">Company</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Process</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium mb-6">Contact</h5>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3"><iconify-icon icon="solar:letter-linear"></iconify-icon> hello@airads.io</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:phone-linear"></iconify-icon> +1 (555) 000-0000</li>
<li className="flex items-center gap-3"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Austin, TX</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 AirAds Performance Agency. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
