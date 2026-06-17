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
      

<div className="fixed bottom-0 left-0 right-0 z-[60] p-4 bg-[#111526]/95 backdrop-blur-md border-t border-white/10 md:hidden animate-fade-up delay-500">
<a className="w-full py-3.5 rounded-full text-sm transition-all duration-300 font-medium flex items-center justify-center gap-2 bg-[#c9a84c] text-[#111526] hover:bg-[#b5953e] shadow-lg shadow-[#c9a84c]/20" href="#contact">
      Get a Free Assessment
      <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass rounded-full pl-6 pr-2 py-2 flex items-center justify-between gap-4 md:gap-10 shadow-2xl shadow-black/50 w-full max-w-6xl transition-all duration-300">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="text-lg md:text-xl tracking-tight font-medium group-hover:text-[#c9a84c] transition-colors text-white uppercase tracking-wider">
          Helton Security
        </span>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-normal text-slate-300">
<a className="hover:text-[#c9a84c] transition-colors" href="#services">Services</a>
<a className="hover:text-[#c9a84c] transition-colors" href="#why-us">Why Helton</a>
<a className="hover:text-[#c9a84c] transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-[#c9a84c] transition-colors" href="#about">About</a>
<a className="hover:text-[#c9a84c] transition-colors" href="#contact">Contact</a>
</div>

<a className="text-xs px-5 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-medium group shadow-md hover:shadow-lg hover:shadow-[#c9a84c]/20 bg-[#c9a84c] text-[#111526] hover:bg-[#b5953e] shrink-0" href="#contact">
<span className="hidden sm:block">Get a Free Security Assessment</span>
<span className="sm:hidden">Free Assessment</span>
<iconify-icon className="text-base transition-transform group-hover:translate-x-0.5 hidden sm:block" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</nav>
</header>
<main className="max-w-7xl mx-auto pt-28 md:pt-32 px-4 md:px-6 pb-24">

<section className="relative rounded-[2rem] md:rounded-[2.5rem] p-6 py-16 md:p-16 lg:p-24 border shadow-2xl shadow-black/40 overflow-hidden text-center mb-12 md:mb-16 bg-[#1a1f36] border-white/5">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

<div className="animate-fade-up w-fit border px-4 py-1.5 rounded-full text-xs tracking-widest uppercase font-medium mb-6 md:mb-8 bg-[#c9a84c]/10 border-[#c9a84c]/30 text-[#c9a84c]">
          Commercial &amp; Construction Security
        </div>

<h1 className="animate-fade-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.15] md:leading-[1.1] tracking-tight mb-6 md:mb-8 font-normal text-white">
          Nashville's Most Trusted Security Team for 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#e6c875]">
            Commercial Properties
          </span>
</h1>

<p className="animate-fade-up delay-200 text-base md:text-xl text-slate-300 leading-relaxed max-w-3xl mb-8 md:mb-12 font-light px-2">
          Armed and unarmed guards, mobile patrol, construction site security, and firewatch. 25 years protecting Nashville's businesses with a 4.8 star reputation.
        </p>

<div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 md:gap-5 items-center justify-center w-full mb-12 md:mb-16">
<a className="w-full sm:w-auto px-8 py-4 rounded-full text-sm md:text-base hover:shadow-xl hover:shadow-[#c9a84c]/20 transition-all duration-300 flex items-center justify-center gap-2 font-medium group bg-[#c9a84c] text-[#111526] hover:bg-[#b5953e]" href="#contact">
            Get a Free Security Assessment
            <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto border px-8 py-4 rounded-full text-sm md:text-base transition-all duration-300 font-medium flex items-center justify-center gap-2 bg-[#111526]/50 border-[#c9a84c]/50 text-[#c9a84c] hover:bg-[#c9a84c]/10" href="tel:6158405442">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
            Call (615) 840-5442
          </a>
</div>

<div className="animate-fade-up delay-500 w-full pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-12">
<div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-medium">
<iconify-icon className="text-[#c9a84c] text-lg md:text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
            25 Years in Nashville
          </div>
<div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-medium">
<iconify-icon className="text-[#c9a84c] text-lg md:text-xl" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
            4.8 Stars, 200+ Reviews
          </div>
<div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-medium">
<iconify-icon className="text-[#c9a84c] text-lg md:text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
            Licensed, Insured, Vetted
          </div>
<div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm font-medium">
<iconify-icon className="text-[#c9a84c] text-lg md:text-xl" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
            24/7 Availability
          </div>
</div>
</div>
</section>

<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-normal text-white px-4">
        Tired of Security Providers That Let You Down?
      </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 bg-gradient-to-br from-[#1f253f] to-[#15192b] rounded-[1.5rem] p-6 shadow-lg shadow-black/20 border border-white/5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.02))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#1a1f36] text-[#c9a84c] border border-[#c9a84c]/20">
<iconify-icon className="text-xl md:text-2xl" icon="solar:user-cross-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-medium mb-3 text-white leading-tight">
            Unreliable Guards Who Don't Show Up
          </h3>
<p className="text-slate-400 font-light leading-relaxed text-sm">
            Your current provider sends undertrained officers who call out last minute. You end up scrambling to cover shifts or leaving your property unprotected.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 bg-gradient-to-br from-[#1f253f] to-[#15192b] rounded-[1.5rem] p-6 shadow-lg shadow-black/20 border border-white/5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.02))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#1a1f36] text-[#c9a84c] border border-[#c9a84c]/20">
<iconify-icon className="text-xl md:text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-medium mb-3 text-white leading-tight">
            Companies That Don't Understand Your Property
          </h3>
<p className="text-slate-400 font-light leading-relaxed text-sm">
            Cookie-cutter guard companies drop an officer at your site without learning your access points, tenant concerns, or high-risk areas.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 bg-gradient-to-br from-[#1f253f] to-[#15192b] rounded-[1.5rem] p-6 shadow-lg shadow-black/20 border border-white/5" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(201,168,76,0.02))', '--border-radius-before': '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#1a1f36] text-[#c9a84c] border border-[#c9a84c]/20">
<iconify-icon className="text-xl md:text-2xl" icon="solar:bill-cross-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-medium mb-3 text-white leading-tight">
            Surprise Invoices and Hidden Fees
          </h3>
<p className="text-slate-400 font-light leading-relaxed text-sm">
            You get a bill that is 40% higher than the quote. Overtime charges, admin fees, and fuel surcharges you never agreed to.
          </p>
</div>
</div>
</section>

<section className="py-12 md:py-20" id="why-us">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-normal text-white tracking-tight mb-4">
          Why Choose Helton Security
        </h2>
<p className="text-slate-400 max-w-2xl mx-auto font-light text-sm md:text-base">
          Built on principles of integrity, retention, and superior customer service.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-[#c9a84c]/30 bg-gradient-to-br from-[#1a1f36] to-[#111526] h-auto border border-white/5 rounded-[1.5rem] p-6 relative">
<h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 text-white">
            25 Years of Nashville Expertise
          </h3>
<p className="text-slate-400 font-light text-sm leading-relaxed z-10 relative">
            We have protected properties across Davidson, Williamson, Rutherford, and surrounding counties for a quarter century. We know the neighbourhoods, the risks, and the response times.
          </p>
<div className="mt-auto self-end pt-8 group-hover:text-[#c9a84c] transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="text-[5rem] md:text-[6rem]" icon="solar:routing-linear" strokeWidth="1"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-[#c9a84c]/30 bg-gradient-to-br from-[#1a1f36] to-[#111526] h-auto border border-white/5 rounded-[1.5rem] p-6 relative">
<h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 text-white">
            Officers Who Stay
          </h3>
<p className="text-slate-400 font-light text-sm leading-relaxed z-10 relative">
            We invest in retention, not turnover. Our guards are background checked, drug screened, CPR trained, and equipped with body armour and communication gear.
          </p>
<div className="mt-auto self-end pt-8 group-hover:text-[#c9a84c] transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="text-[5rem] md:text-[6rem]" icon="solar:user-id-linear" strokeWidth="1"></iconify-icon>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-[#c9a84c]/30 bg-gradient-to-br from-[#1a1f36] to-[#111526] h-auto border border-white/5 rounded-[1.5rem] p-6 relative">
<h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-4 text-white">
            Flexible Contracts, No Lock-Ins
          </h3>
<p className="text-slate-400 font-light text-sm leading-relaxed z-10 relative">
            Need a guard for one night or one year? We work on your timeline. No long-term contracts required to receive premium, reliable security services.
          </p>
<div className="mt-auto self-end pt-8 group-hover:text-[#c9a84c] transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<iconify-icon className="text-[5rem] md:text-[6rem]" icon="solar:document-text-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-[#1a1f36] border-y border-white/5 shadow-2xl" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-10 md:mb-16">
<span className="font-medium tracking-widest uppercase text-xs mb-4 block text-[#c9a84c]">
            Comprehensive Protection
          </span>
<h2 className="text-3xl md:text-5xl tracking-tight font-normal text-white">
            Our Security Services
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[#111526] border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#c9a84c]/30 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#1a1f36] flex items-center justify-center mb-6 text-[#c9a84c]">
<iconify-icon className="text-2xl" icon="solar:shield-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Armed Security Guards</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Highly trained, licensed armed officers equipped with body armor and communication gear. Ideal for high-risk properties requiring a strong visual deterrent.
            </p>
</div>

<div className="bg-[#111526] border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#c9a84c]/30 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#1a1f36] flex items-center justify-center mb-6 text-[#c9a84c]">
<iconify-icon className="text-2xl" icon="solar:user-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Unarmed Security Guards</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Professional, observant, and approachable officers to manage access control and site safety. Perfect for residential communities, retail, and corporate lobbies.
            </p>
</div>

<div className="bg-[#111526] border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#c9a84c]/30 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#1a1f36] flex items-center justify-center mb-6 text-[#c9a84c]">
<iconify-icon className="text-2xl" icon="solar:car-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Mobile Patrol &amp; Patrol Stops</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Randomized or scheduled vehicle patrols to lock down facilities, check perimeters, and deter trespassing. A cost-effective solution for large sites and after-hours coverage.
            </p>
</div>

<div className="bg-[#111526] border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#c9a84c]/30 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#1a1f36] flex items-center justify-center mb-6 text-[#c9a84c]">
<iconify-icon className="text-2xl" icon="solar:cone-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Construction Site Security</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Overnight and weekend protection to prevent copper theft, vandalism, and equipment tampering. We secure your materials so your crew can get to work on time.
            </p>
</div>

<div className="bg-[#111526] border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#c9a84c]/30 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#1a1f36] flex items-center justify-center mb-6 text-[#c9a84c]">
<iconify-icon className="text-2xl" icon="solar:fire-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Firewatch Services</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              OSHA and NFPA-compliant firewatch personnel deployed immediately when alarm or sprinkler systems fail. We maintain meticulous logs to keep your facility legally operational.
            </p>
</div>

<div className="bg-[#111526] border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#c9a84c]/30 transition-all duration-300">
<div className="w-12 h-12 rounded-full bg-[#1a1f36] flex items-center justify-center mb-6 text-[#c9a84c]">
<iconify-icon className="text-2xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3">Retail &amp; Loss Prevention</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
              Vigilant plainclothes or uniformed officers trained to deter theft, manage aggressive behavior, and protect staff. We safeguard your inventory and create a secure shopping environment.
            </p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 mt-16 rounded-[2rem] md:rounded-[2.5rem] border shadow-2xl shadow-black/40 text-center bg-[#1a1f36] border-white/5">
<div className="max-w-4xl mx-auto">
<div className="inline-flex justify-center mb-6 md:mb-8 text-[#c9a84c]">
<iconify-icon className="text-4xl md:text-5xl opacity-40" icon="solar:chat-square-quote-linear"></iconify-icon>
</div>
<h3 className="text-xl md:text-3xl lg:text-4xl leading-relaxed mb-8 md:mb-10 font-light italic text-white px-2">
          "We needed a security company short notice for the holiday season. I called numerous highly-rated companies and Helton Security was the only one to call me back. On-site, the security guard was clearly identifiable in Helton Security attire and was professional and friendly."
        </h3>
<div className="flex flex-col items-center">
<div className="flex items-center gap-1 text-[#c9a84c] mb-3">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<div className="font-medium text-white">
            Google Review
          </div>
<div className="text-xs md:text-sm font-light text-slate-400">
            Verified Client
          </div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<div className="text-center mb-12 md:mb-16">
<span className="text-xs font-medium tracking-widest uppercase mb-3 block text-[#c9a84c]">
          Our Process
        </span>
<h2 className="text-3xl md:text-5xl font-normal text-white">
          How It Works
        </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-2xl mb-5 md:mb-6 shadow-sm group-hover:border-[#c9a84c] group-hover:text-[#c9a84c] transition-colors bg-[#111526] border-white/10 text-slate-500">
<iconify-icon icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3 text-white">
            1. Free Assessment
          </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            We visit your property, identify vulnerabilities, and build a custom security plan tailored to your exact needs.
          </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-2xl mb-5 md:mb-6 shadow-sm group-hover:border-[#c9a84c] group-hover:text-[#c9a84c] transition-colors bg-[#111526] border-white/10 text-slate-500">
<iconify-icon icon="solar:user-speak-linear"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3 text-white">
            2. Officer Deployment
          </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            We assign trained, vetted officers matched specifically to your property type within 24 to 48 hours.
          </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-2xl mb-5 md:mb-6 shadow-sm group-hover:border-[#c9a84c] group-hover:text-[#c9a84c] transition-colors bg-[#111526] border-white/10 text-slate-500">
<iconify-icon icon="solar:shield-star-linear"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-medium mb-2 md:mb-3 text-white">
            3. Ongoing Protection
          </h3>
<p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            Regular check-ins, transparent incident reporting, and schedule adjustments as your security needs change.
          </p>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#1a1f36]/50 mb-16 md:mb-24">
<div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl md:text-4xl font-normal text-white mb-2">25+</div>
<div className="text-xs md:text-sm text-[#c9a84c] uppercase tracking-wider font-medium">Years in Nashville</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-normal text-white mb-2">200+</div>
<div className="text-xs md:text-sm text-[#c9a84c] uppercase tracking-wider font-medium">5-Star Reviews</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-normal text-white mb-2">24/7</div>
<div className="text-xs md:text-sm text-[#c9a84c] uppercase tracking-wider font-medium">Availability</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-normal text-white mb-2">100%</div>
<div className="text-xs md:text-sm text-[#c9a84c] uppercase tracking-wider font-medium">Background Checked</div>
</div>
</div>
</section>

<section className="py-12 md:py-16 mb-8" id="reviews">
<h2 className="text-3xl md:text-4xl text-center mb-10 md:mb-16 tracking-tight font-normal text-white">
        What Our Clients Say
      </h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl border shadow-sm bg-[#1a1f36] border-white/5 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-[#c9a84c] mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
              "We needed a security company short notice for the holiday season. I called numerous highly-rated companies and Helton Security was the only one to call me back. On-site, the security guard was clearly identifiable in Helton Security attire and was professional and friendly."
            </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#111526] flex items-center justify-center text-[#c9a84c]">
<iconify-icon className="text-xl" icon="solar:user-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Verified Client</div>
<div className="text-xs text-slate-500">Google Review</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border shadow-sm bg-[#1a1f36] border-white/5 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-[#c9a84c] mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
              "I needed an Armed Security Officer quickly at our warehouse. Charles and his team responded quickly and had someone out to us immediately. Highly recommend their services."
            </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#111526] flex items-center justify-center text-[#c9a84c]">
<iconify-icon className="text-xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Warehouse Manager</div>
<div className="text-xs text-slate-500">Google Review</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl border shadow-sm bg-[#1a1f36] border-white/5 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-[#c9a84c] mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm leading-relaxed mb-6">
              "Working with Charles at Helton Security has been a great experience. He is professional and prompt in his communication, and always goes above and beyond to ensure our property is secure."
            </p>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#111526] flex items-center justify-center text-[#c9a84c]">
<iconify-icon className="text-xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Property Owner</div>
<div className="text-xs text-slate-500">Google Review</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center border-t border-white/5" id="about">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-4xl mb-6 md:mb-8 tracking-tight font-normal text-white">
          About Helton Security
        </h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-slate-400 font-light leading-relaxed">
<p>
            Helton Security has been operating continuously for <span className="font-medium text-white">25 years</span> in Nashville, Tennessee and surrounding counties.
          </p>
<p>
            Founded on principles of integrity, retention, and customer service, Helton provides armed and unarmed security guard services for commercial properties, construction sites, hotels, retail locations, apartment complexes, and events.
          </p>
<p>
            Every officer is rigorously background checked, drug screened, and extensively trained in CPR, de-escalation, and emergency response to ensure your property and people remain safe.
          </p>
</div>
<a className="inline-block mt-8 font-medium border-b pb-0.5 transition-all text-[#c9a84c] border-[#c9a84c]/30 hover:border-[#c9a84c]" href="#contact">
          Work With Us
        </a>
</div>
<div className="relative order-1 lg:order-2 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-[#1a1f36] border border-white/5 shadow-2xl">

<div className="absolute inset-0 bg-gradient-to-tr from-[#111526] to-[#1a1f36] flex items-center justify-center">
<iconify-icon className="text-[8rem] md:text-[12rem] text-[#c9a84c]/20" icon="solar:shield-check-bold-duotone"></iconify-icon>
</div>
</div>
</section>

<section className="py-16 md:py-20 mb-8 border-t border-white/5">
<h2 className="text-3xl md:text-4xl text-center mb-10 md:mb-16 tracking-tight font-normal text-white">
        Who We Protect
      </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl border border-white/5 bg-[#1a1f36] hover:bg-[#1a1f36]/80 transition-colors">
<div className="w-10 h-10 rounded-lg bg-[#111526] flex items-center justify-center mb-4 text-[#c9a84c] border border-white/5">
<iconify-icon className="text-xl" icon="solar:city-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Property Managers</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light">
            Apartment complexes, mid-rise buildings, and commercial office properties needing consistent access control.
          </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-[#1a1f36] hover:bg-[#1a1f36]/80 transition-colors">
<div className="w-10 h-10 rounded-lg bg-[#111526] flex items-center justify-center mb-4 text-[#c9a84c] border border-white/5">
<iconify-icon className="text-xl" icon="solar:hard-hat-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">General Contractors</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light">
            Construction sites needing overnight security, firewatch, and heavy equipment protection from theft.
          </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-[#1a1f36] hover:bg-[#1a1f36]/80 transition-colors">
<div className="w-10 h-10 rounded-lg bg-[#111526] flex items-center justify-center mb-4 text-[#c9a84c] border border-white/5">
<iconify-icon className="text-xl" icon="solar:bed-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Facilities Directors</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light">
            Hotels, retail plazas, corporate campuses, and large mixed-use developments requiring reliable patrols.
          </p>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-[#1a1f36] hover:bg-[#1a1f36]/80 transition-colors">
<div className="w-10 h-10 rounded-lg bg-[#111526] flex items-center justify-center mb-4 text-[#c9a84c] border border-white/5">
<iconify-icon className="text-xl" icon="solar:home-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Building Owners &amp; HOAs</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light">
            Commercial real estate owners and residential communities needing regular, visible deterrence.
          </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 mb-16 md:mb-20 rounded-[2rem] md:rounded-[2.5rem] text-center px-4 md:px-6 relative overflow-hidden bg-[#1a1f36] border border-white/5 shadow-2xl" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#c9a84c]/10 via-transparent to-transparent"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight font-normal text-white">
          Get a Free Security Assessment
        </h2>
<p className="text-base md:text-lg mb-8 md:mb-10 font-light text-slate-300">
          Tell us about your property and we will put together a custom security plan within 24 hours. No obligation, no pressure.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 rounded-full text-base transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg hover:shadow-xl bg-[#c9a84c] text-[#111526] hover:bg-[#b5953e] shadow-[#c9a84c]/20" href="tel:6158405442">
            Request Your Free Assessment
          </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full text-base transition-all duration-300 font-medium flex items-center justify-center gap-2 text-white hover:bg-white/5 border border-transparent hover:border-white/10" href="tel:6158405442">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
            (615) 840-5442
          </a>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-normal text-white">
        Frequently Asked Questions
      </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#1a1f36] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium select-none text-white text-sm md:text-base">
            What areas do you serve?
            <iconify-icon className="text-xl transition-transform group-open:rotate-180 text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Nashville, Fairview, Franklin, Murfreesboro, and all surrounding counties in Middle Tennessee.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#1a1f36] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium select-none text-white text-sm md:text-base">
            How quickly can you deploy guards?
            <iconify-icon className="text-xl transition-transform group-open:rotate-180 text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Typically within 24 to 48 hours. For emergencies, same-day deployment is available.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#1a1f36] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium select-none text-white text-sm md:text-base">
            Are your officers armed?
            <iconify-icon className="text-xl transition-transform group-open:rotate-180 text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light border-t pt-4 border-white/5">
            We provide both armed and unarmed officers depending on your needs. Armed officers carry handcuffs, pepper spray, and bulletproof vests.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#1a1f36] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium select-none text-white text-sm md:text-base">
            Do you require long-term contracts?
            <iconify-icon className="text-xl transition-transform group-open:rotate-180 text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light border-t pt-4 border-white/5">
            No. We offer flexible arrangements from single-night assignments to ongoing contracts.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#1a1f36] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium select-none text-white text-sm md:text-base">
            What types of properties do you protect?
            <iconify-icon className="text-xl transition-transform group-open:rotate-180 text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Commercial buildings, construction sites, hotels, apartment complexes, retail stores, shopping plazas, events, and residential communities.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#1a1f36] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium select-none text-white text-sm md:text-base">
            Are your officers background checked?
            <iconify-icon className="text-xl transition-transform group-open:rotate-180 text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Yes. Every officer undergoes a thorough background check, drug screening, and is trained in CPR, de-escalation, and emergency response.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#1a1f36] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium select-none text-white text-sm md:text-base">
            How do I get a quote?
            <iconify-icon className="text-xl transition-transform group-open:rotate-180 text-slate-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-slate-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Call (615) 840-5442 or submit a request through our website. We provide free next-day estimates.
          </div>
</details>
</div>
</section>
</main>

<footer className="border-t pt-12 md:pt-16 pb-24 md:pb-10 px-4 md:px-6 bg-[#111526] border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="text-xl tracking-tight font-medium text-white uppercase" href="#">
          Helton Security
        </a>
<p className="text-xs mt-3 max-w-sm font-light text-slate-400 mx-auto md:mx-0 leading-relaxed">
          7012 City Center Way, Suite 274<br/>
          Fairview, TN 37062<br/>
          Licensed and Insured | Serving Nashville and Middle Tennessee
        </p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-base font-medium text-[#c9a84c] hover:text-[#e6c875] transition-colors mb-2" href="tel:6158405442">
          (615) 840-5442
        </a>
<a className="text-sm transition-colors font-light text-slate-400 hover:text-white" href="https://heltonsecurity.us">
          heltonsecurity.us
        </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-xs border-white/5 text-slate-500 font-light">
<p>© 2024 Helton Security. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
