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
      

<div className="fixed inset-0 z-0 pointer-events-none grid-bg"></div>
<div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-t from-[#050505] via-transparent to-transparent h-48 bottom-0 w-full"></div>

<nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 md:py-6 flex justify-between items-center mix-blend-difference">
<a className="group flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-[#3DF604] flex items-center justify-center text-black font-semibold font-['Unbounded'] rounded-sm group-hover:rotate-180 transition-transform duration-500">D</div>
<span className="font-['Unbounded'] font-semibold tracking-tight text-xl hidden md:block uppercase">Digi Verse 360</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-2 py-1">
<a className="text-xs hover:text-black hover:bg-[#3DF604] px-4 py-2 rounded-full transition-all" href="#services">SERVICES</a>
<a className="text-xs hover:text-black hover:bg-[#3DF604] px-4 py-2 rounded-full transition-all" href="#process">PROCESS</a>
<a className="text-xs hover:text-black hover:bg-[#3DF604] px-4 py-2 rounded-full transition-all" href="#why-us">WHY US</a>
<a className="text-xs hover:text-black hover:bg-[#3DF604] px-4 py-2 rounded-full transition-all" href="#contact">CONTACT</a>
</div>
<a className="flex items-center gap-2 text-xs font-semibold border border-white/20 px-4 py-2 rounded-full hover:bg-[#3DF604] hover:text-black hover:border-[#3DF604] transition-all cursor-pointer group" href="tel:+923095610889">
<iconify-icon className="w-4 h-4" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden md:block">+92 309 5610889</span>
</a>
</nav>

<a className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#3DF604] rounded-full flex items-center justify-center text-black shadow-[0_0_20px_rgba(61,246,4,0.3)] hover:scale-110 transition-transform duration-300" href="https://wa.me/923095610889" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-3xl" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
</a>

<main className="relative z-10 pt-32 pb-20 page-transition" id="home-view">

<section className="px-4 md:px-8 mb-20 relative max-w-[1800px] mx-auto">
<div className="absolute top-0 right-0 md:right-8 opacity-20 hidden md:block">
<iconify-icon className="text-9xl animate-spin-slow text-gray-500" icon="solar:maximize-linear" strokeWidth="1.5" style={{animationDuration: '20s'}}></iconify-icon>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-3 mb-2">
<span className="w-2 h-2 bg-[#3DF604] rounded-full animate-pulse"></span>
<span className="text-xs uppercase tracking-[0.2em] text-gray-400">Digital Marketing Agency</span>
</div>
<h1 className="font-['Unbounded'] font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.9] uppercase tracking-tight max-w-5xl">
                    We Build, <br/>
<span className="text-transparent" style={{WebkitTextStroke: '1px rgba(255,255,255,0.8)'}}>Scale &amp; Manage</span> <br/>
                    Your <span className="text-[#3DF604] italic pr-4">Online</span> Business
                </h1>
<div className="mt-4 max-w-2xl border-l-2 border-[#3DF604] pl-4">
<p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
                        Shopify + Digital Marketing + Influencer Marketing — All in One Place. We manage complete online business solutions from scratch to scaling.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#3DF604] text-black font-['Unbounded'] font-semibold text-xs px-8 py-4 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 uppercase tracking-wide" href="#contact">
                            Book a Free Consultation
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="border border-white/20 text-white font-['Unbounded'] font-semibold text-xs px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 uppercase tracking-wide" href="#services">
                            Start Your Journey
                        </a>
</div>
</div>
</div>
</section>

<div className="w-full border-t border-b border-white/10 py-4 mb-24 overflow-hidden bg-[#0A0A0A] relative">
<div className="whitespace-nowrap scrolling-text flex gap-8 items-center">
<span className="font-['Unbounded'] text-4xl md:text-5xl text-transparent font-semibold uppercase tracking-tight" style={{WebkitTextStroke: '1px #333'}}>Shopify Stores</span>
<span className="font-['Unbounded'] text-4xl md:text-5xl text-[#3DF604] font-semibold uppercase">×</span>
<span className="font-['Unbounded'] text-4xl md:text-5xl text-transparent font-semibold uppercase tracking-tight" style={{WebkitTextStroke: '1px #333'}}>Meta Ads</span>
<span className="font-['Unbounded'] text-4xl md:text-5xl text-[#3DF604] font-semibold uppercase">×</span>
<span className="font-['Unbounded'] text-4xl md:text-5xl text-transparent font-semibold uppercase tracking-tight" style={{WebkitTextStroke: '1px #333'}}>Influencer Marketing</span>
<span className="font-['Unbounded'] text-4xl md:text-5xl text-[#3DF604] font-semibold uppercase">×</span>
<span className="font-['Unbounded'] text-4xl md:text-5xl text-transparent font-semibold uppercase tracking-tight" style={{WebkitTextStroke: '1px #333'}}>Google Ads</span>
<span className="font-['Unbounded'] text-4xl md:text-5xl text-[#3DF604] font-semibold uppercase">×</span>
</div>
</div>

<section className="px-4 md:px-8 max-w-[1800px] mx-auto scroll-mt-24 mb-32" id="services">
<div className="flex items-end justify-between mb-8 border-b border-white/10 pb-4">
<h2 className="font-['Unbounded'] text-3xl uppercase tracking-tight">Our Services</h2>
<span className="text-xs text-[#3DF604] font-mono hidden md:block">[ALL UNDER ONE ROOF]</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(350px,auto)]">

<article className="bg-[#111] border border-white/10 p-8 flex flex-col group hover:border-[#3DF604] transition-colors rounded-sm">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-4xl text-[#3DF604]" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-gray-500">01</span>
</div>
<h3 className="font-['Unbounded'] text-2xl uppercase font-semibold mb-4 tracking-tight">Digital<br/>Marketing</h3>
<ul className="space-y-3 text-xs text-gray-400 font-mono flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-[#3DF604] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Meta Ads (Facebook &amp; Instagram)</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#3DF604] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Google &amp; YouTube Ads</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#3DF604] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> TikTok Ads &amp; Strategy</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#3DF604] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Campaign Setup &amp; Optimization</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#3DF604] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Retargeting &amp; Tracking</li>
</ul>
</article>

<article className="bg-[#3DF604] text-black border border-[#3DF604] p-8 flex flex-col group rounded-sm shadow-[0_0_30px_rgba(61,246,4,0.1)]">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-4xl" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-bold text-xs border border-black px-2 py-0.5 rounded-full uppercase">E-Commerce</span>
</div>
<h3 className="font-['Unbounded'] text-2xl uppercase font-semibold mb-4 tracking-tight">Shopify<br/>Solutions</h3>
<ul className="space-y-3 text-xs font-mono font-semibold opacity-80 flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Full Store Building &amp; Design</li>
<li className="flex items-start gap-2"><iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Winning Product Hunting</li>
<li className="flex items-start gap-2"><iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Complete Store Management</li>
<li className="flex items-start gap-2"><iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Fulfillment &amp; Payment Setup</li>
<li className="flex items-start gap-2"><iconify-icon className="text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Marketing Integration</li>
</ul>
</article>

<article className="bg-[#111] border border-white/10 p-8 flex flex-col group hover:border-[#3DF604] transition-colors rounded-sm">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-4xl text-[#3DF604]" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-mono text-xs text-gray-500">03</span>
</div>
<h3 className="font-['Unbounded'] text-2xl uppercase font-semibold mb-4 tracking-tight">Influencer<br/>&amp; Content</h3>
<ul className="space-y-3 text-xs text-gray-400 font-mono flex-1">
<li className="flex items-start gap-2"><iconify-icon className="text-[#3DF604] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Campaign Management</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#3DF604] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> UGC Content Creation</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#3DF604] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Premium Ads Creative Design</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#3DF604] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Social Media Page Handling</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#3DF604] text-base mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Canva &amp; Premiere Pro Editing</li>
</ul>
</article>
</div>
</section>

<section className="px-4 md:px-8 max-w-[1800px] mx-auto scroll-mt-24 mb-32" id="process">
<div className="border-t border-white/20"></div>
<div className="flex items-end justify-between mt-8 mb-8">
<h2 className="font-['Unbounded'] text-3xl uppercase tracking-tight">Our Process</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-white/20 border-y border-white/20">

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="font-['Unbounded'] text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#3DF604] transition-all">01</span>
<h3 className="text-sm font-semibold uppercase tracking-tight">Business Analysis</h3>
</div>

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="font-['Unbounded'] text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#3DF604] transition-all">02</span>
<h3 className="text-sm font-semibold uppercase tracking-tight">Strategy Planning</h3>
</div>

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="font-['Unbounded'] text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#3DF604] transition-all">03</span>
<h3 className="text-sm font-semibold uppercase tracking-tight">Store &amp; Ad Setup</h3>
</div>

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="font-['Unbounded'] text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#3DF604] transition-all">04</span>
<h3 className="text-sm font-semibold uppercase tracking-tight">Campaign Launch</h3>
</div>

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="font-['Unbounded'] text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#3DF604] transition-all">05</span>
<h3 className="text-sm font-semibold uppercase tracking-tight">Optimization</h3>
</div>

<div className="p-6 md:p-8 group hover:bg-[#111] transition-colors flex flex-col justify-between h-48 md:h-64">
<span className="font-['Unbounded'] text-4xl opacity-20 group-hover:opacity-100 group-hover:text-[#3DF604] transition-all">06</span>
<h3 className="text-sm font-semibold uppercase tracking-tight">Growth &amp; Scale</h3>
</div>
</div>
</section>

<section className="px-4 md:px-8 max-w-[1800px] mx-auto scroll-mt-24 mb-32" id="why-us">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
<div>
<h2 className="font-['Unbounded'] text-3xl uppercase tracking-tight border-b border-white/10 pb-4 mb-8">Why Choose Us</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-3xl text-[#3DF604]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="font-semibold uppercase text-sm mb-1 tracking-tight">Complete Management</h4>
<p className="text-xs text-gray-400">All your business needs under one roof, from store creation to ad scaling.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-3xl text-[#3DF604]" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="font-semibold uppercase text-sm mb-1 tracking-tight">Data-Driven Strategy</h4>
<p className="text-xs text-gray-400">Decisions backed by metrics to ensure result-oriented campaigns.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-3xl text-[#3DF604]" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<div>
<h4 className="font-semibold uppercase text-sm mb-1 tracking-tight">Long-Term Growth</h4>
<p className="text-xs text-gray-400">We partner with you for sustainable expansion, led by an experienced team.</p>
</div>
</li>
</ul>
</div>
<div className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#3DF604]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<h2 className="font-['Unbounded'] text-2xl uppercase tracking-tight mb-8 relative z-10">Who We Work With</h2>
<div className="flex flex-wrap gap-3 relative z-10">
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#3DF604] hover:text-[#3DF604] transition-colors cursor-default">Offline Businesses</span>
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#3DF604] hover:text-[#3DF604] transition-colors cursor-default">E-commerce Brands</span>
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#3DF604] hover:text-[#3DF604] transition-colors cursor-default">Shopify Owners</span>
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#3DF604] hover:text-[#3DF604] transition-colors cursor-default">Personal Brands</span>
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#3DF604] hover:text-[#3DF604] transition-colors cursor-default">Startups</span>
<span className="text-xs border border-white/20 px-4 py-2 rounded-full hover:border-[#3DF604] hover:text-[#3DF604] transition-colors cursor-default">Established Businesses</span>
</div>
</div>
</div>
</section>

<section className="px-4 md:px-8 max-w-[1800px] mx-auto pb-12 scroll-mt-24" id="contact">
<div className="bg-[#0A0A0A] border border-white/10 rounded-sm p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row gap-12 md:gap-24">

<div className="flex-1 relative z-10 flex flex-col justify-between">
<div>
<div className="text-xs font-semibold uppercase tracking-widest mb-4 border-b border-white/20 inline-block pb-1 text-[#3DF604]">Let's Work Together</div>
<h2 className="font-['Unbounded'] text-4xl md:text-6xl font-extrabold uppercase leading-[1.1] tracking-tight mb-6">
                            Ready to Grow<br/>Your Business?
                        </h2>
<p className="text-sm text-gray-400 mb-8 max-w-md leading-relaxed">
                            Book your free consultation now and let Digi Verse 360 handle your complete online business.
                        </p>
</div>
<div className="space-y-4">
<a className="inline-flex items-center gap-4 text-lg hover:text-[#3DF604] transition-colors font-mono" href="tel:+923095610889">
<iconify-icon className="text-2xl text-[#3DF604]" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
                            +92 309 5610889
                        </a>
<br/>
<a className="inline-flex items-center gap-4 text-lg hover:text-[#3DF604] transition-colors font-mono" href="https://wa.me/923095610889">
<iconify-icon className="text-2xl text-[#3DF604]" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
                            WhatsApp Us
                        </a>
</div>
</div>

<div className="flex-1 relative z-10">
<form className="space-y-8 bg-[#050505] p-8 border border-white/10 rounded-sm shadow-2xl" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#3DF604] outline-none font-mono text-sm transition-colors text-white placeholder-gray-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Email</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#3DF604] outline-none font-mono text-sm transition-colors text-white placeholder-gray-700" placeholder="contact@brand.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Phone</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#3DF604] outline-none font-mono text-sm transition-colors text-white placeholder-gray-700" placeholder="+1 234 567 890" type="tel"/>
</div>
<div className="space-y-2 relative group cursor-pointer">
<label className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Business Type</label>
<select className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#3DF604] outline-none font-mono text-sm transition-colors text-gray-300 appearance-none cursor-pointer">
<option className="bg-[#0A0A0A]" disabled="" selected="" value="">Select type...</option>
<option className="bg-[#0A0A0A]" value="ecommerce">E-commerce / Shopify</option>
<option className="bg-[#0A0A0A]" value="offline">Offline Business</option>
<option className="bg-[#0A0A0A]" value="startup">Startup / New Brand</option>
<option className="bg-[#0A0A0A]" value="personal">Personal Brand</option>
</select>
<div className="absolute right-0 bottom-3 pointer-events-none">
<iconify-icon className="text-gray-500" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase text-gray-500 font-semibold tracking-wider">Message</label>
<textarea className="w-full bg-transparent border-b border-white/20 py-2 focus:border-[#3DF604] outline-none font-mono text-sm transition-colors resize-none text-white placeholder-gray-700" placeholder="Tell us about your goals..." rows="3"></textarea>
</div>
<button className="w-full bg-[#3DF604] text-black font-['Unbounded'] font-semibold text-sm px-8 py-4 rounded-full hover:bg-white transition-colors flex items-center justify-center gap-2 uppercase tracking-wide">
                            Submit Inquiry <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
<footer className="mt-16 flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-8 gap-8">
<div className="flex flex-col gap-4 max-w-sm">
<a className="font-['Unbounded'] text-xl font-semibold tracking-tight uppercase" href="#">Digi Verse 360</a>
<p className="text-xs text-gray-500 font-mono leading-relaxed">
                        A full-service Digital Marketing, Shopify, and Influencer Marketing agency dedicated to scaling your brand online.
                    </p>
<div className="flex gap-4 text-gray-500 mt-2">
<a className="hover:text-[#3DF604] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#3DF604] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:facebook-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-[#3DF604] transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 gap-x-12 gap-y-4 text-xs text-gray-400 font-mono uppercase">
<div className="flex flex-col gap-2">
<span className="text-white font-semibold mb-1">Quick Links</span>
<a className="hover:text-[#3DF604]" href="#services">Services</a>
<a className="hover:text-[#3DF604]" href="#process">Process</a>
<a className="hover:text-[#3DF604]" href="#why-us">Why Us</a>
</div>
<div className="flex flex-col gap-2">
<span className="text-white font-semibold mb-1">Contact</span>
<a className="hover:text-[#3DF604]" href="tel:+923095610889">Call Us</a>
<a className="hover:text-[#3DF604]" href="https://wa.me/923095610889">WhatsApp</a>
<a className="hover:text-[#3DF604]" href="#contact">Consultation</a>
</div>
</div>
<div className="text-[10px] text-gray-600 font-mono uppercase text-right md:min-w-[200px]">
                    © 2026 Digi Verse 360.<br/>All Rights Reserved.
                </div>
</footer>
</section>
</main>

    </>
  );
}
