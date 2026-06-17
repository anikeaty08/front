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
      

<nav className="fixed w-full top-0 z-50 backdrop-blur-md border-b transition-all duration-300 bg-slate-50/90 border-slate-200/50">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="font-serif text-xl tracking-tighter text-[#0B1F3B] uppercase font-medium" href="#">
                H&amp;W<span className="font-sans tracking-normal text-xs ml-2 align-middle text-slate-400">Atlanta</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#0B1F3B] transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-[#0B1F3B] transition-colors" href="#legacy">Firm Legacy</a>
<a className="hover:text-[#0B1F3B] transition-colors" href="#leadership">Leadership</a>
<a className="bg-[#0B1F3B] px-5 py-2.5 rounded-sm hover:bg-[#1A365D] transition-colors tracking-wide text-white" href="#contact">
                    Start a Conversation
                </a>
</div>

<button className="md:hidden text-[#0B1F3B]">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 flex flex-col lg:flex-row fade-in max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 gap-x-16 gap-y-16 items-center">
<div className="flex-1 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[#0B1F3B] text-xs font-medium tracking-wide bg-slate-200/50">
<span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3B]"></span>
                Exclusive Family Law Representation
            </div>
<h1 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-medium tracking-tight font-serif text-slate-950">
                Navigating Complex Family Transitions with Discretion &amp; Strategy.
            </h1>
<p className="text-base md:text-lg font-light leading-relaxed max-w-2xl text-slate-600">
                Providing white-glove legal counsel for high-net-worth individuals, executives, and business owners in Atlanta facing sophisticated divorce, custody, and asset protection matters.
            </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center bg-[#0B1F3B] px-8 py-3.5 text-sm font-medium tracking-wide rounded-sm hover:bg-[#1A365D] transition-all shadow-lg shadow-[#0B1F3B]/20 text-white" href="#contact">
                    Start a Conversation
                </a>
<a className="inline-flex justify-center items-center bg-transparent border text-[#0B1F3B] px-8 py-3.5 text-sm font-medium tracking-wide rounded-sm hover:border-[#0B1F3B] transition-all border-slate-300 hover:bg-slate-100/50" href="#contact">
                    Schedule a Consultation
                </a>
</div>
</div>
<div className="flex-1 w-full lg:w-auto relative">
<div className="aspect-[4/5] rounded-sm overflow-hidden relative bg-slate-200">

<img alt="Atlanta Architecture" className="object-cover w-full h-full grayscale opacity-90 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3B]/40 to-transparent"></div>
</div>
</div>
</section>

<section className="border-y border-slate-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale">
<span className="font-serif text-xl tracking-tight font-medium text-slate-800">AV Preeminent®</span>
<span className="font-serif text-xl tracking-tight font-medium text-slate-800">Super Lawyers</span>
<span className="font-serif text-xl tracking-tight font-medium text-slate-800">Best Lawyers</span>
<span className="font-serif text-xl tracking-tight font-medium text-slate-800">Atlanta Bar Association</span>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-slate-50" id="expertise">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#0B1F3B] font-medium">
                    Specialized Legal Expertise
                </h2>
<p className="font-light text-base text-slate-600">
                    Focused exclusively on high-stakes, financially complex, and emotionally sensitive family law matters.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="p-10 border rounded-sm shadow-sm hover:shadow-md transition-shadow group bg-white border-slate-100">
<div className="w-12 h-12 text-[#0B1F3B] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0B1F3B] group-hover:text-white transition-colors duration-300 bg-slate-50">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight text-[#0B1F3B] font-medium mb-3">High-Net-Worth Divorce</h3>
<p className="text-sm font-light leading-relaxed text-slate-600">
                        Strategic uncoupling for executives and business owners, ensuring accurate valuation and equitable distribution of complex portfolios.
                    </p>
</div>

<div className="p-10 border rounded-sm shadow-sm hover:shadow-md transition-shadow group bg-white border-slate-100">
<div className="w-12 h-12 text-[#0B1F3B] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0B1F3B] group-hover:text-white transition-colors duration-300 bg-slate-50">
<iconify-icon icon="solar:safe-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight text-[#0B1F3B] font-medium mb-3">Complex Asset Division</h3>
<p className="text-sm font-light leading-relaxed text-slate-600">
                        Meticulous tracing and division of corporate entities, closely held businesses, trusts, stock options, and international real estate.
                    </p>
</div>

<div className="p-10 border rounded-sm shadow-sm hover:shadow-md transition-shadow group bg-white border-slate-100">
<div className="w-12 h-12 text-[#0B1F3B] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0B1F3B] group-hover:text-white transition-colors duration-300 bg-slate-50">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight text-[#0B1F3B] font-medium mb-3">Child Custody &amp; Jurisdiction</h3>
<p className="text-sm font-light leading-relaxed text-slate-600">
                        Navigating high-conflict custody disputes, parental alienation claims, and interstate or international jurisdictional challenges.
                    </p>
</div>

<div className="p-10 border rounded-sm shadow-sm hover:shadow-md transition-shadow group bg-white border-slate-100">
<div className="w-12 h-12 text-[#0B1F3B] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#0B1F3B] group-hover:text-white transition-colors duration-300 bg-slate-50">
<iconify-icon icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl tracking-tight text-[#0B1F3B] font-medium mb-3">Estate &amp; Asset Protection</h3>
<p className="text-sm font-light leading-relaxed text-slate-600">
                        Drafting robust prenuptial and postnuptial agreements designed to withstand scrutiny and protect legacy wealth across generations.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#0B1F3B] py-24 md:py-32 px-6 text-white" id="legacy">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
<div className="flex-1 space-y-8">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight font-medium leading-tight">
                    A Legacy of Discretion &amp; Results Since 1988.
                </h2>
<div className="w-12 h-px bg-white/30"></div>
<p className="text-base font-light leading-relaxed text-slate-300">
                    For over three decades, we have served as trusted advisors to Atlanta's most prominent families. We view our role not merely as litigators, but as strategic partners guiding clients through their most vulnerable transitions.
                </p>
<div className="grid grid-cols-2 gap-8 pt-6">
<div>
<span className="block text-3xl font-serif tracking-tight mb-2">35+</span>
<span className="text-xs font-medium uppercase tracking-widest text-slate-400">Years Experience</span>
</div>
<div>
<span className="block text-3xl font-serif tracking-tight mb-2">Top 1%</span>
<span className="text-xs font-medium uppercase tracking-widest text-slate-400">Legal Counsel</span>
</div>
</div>
</div>
<div className="flex-1 w-full p-8 md:p-12 border rounded-sm backdrop-blur-sm bg-slate-800/50 border-slate-700/50">
<iconify-icon className="text-slate-500 mb-6" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="font-serif text-xl md:text-2xl leading-relaxed font-light italic mb-8 text-slate-200">
                    "In high-stakes family law, success is measured not by the noise generated, but by the quiet preservation of wealth, reputation, and familial bonds."
                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden bg-slate-600">
<img alt="Managing Partner" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-medium tracking-wide">Robert Harrison</div>
<div className="text-xs font-light text-slate-400">Managing Partner</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b px-6 bg-white border-slate-100">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="space-y-4 flex flex-col items-center">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-[#0B1F3B] bg-slate-50 border-slate-100">
<iconify-icon icon="solar:lock-keyhole-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="font-serif text-lg tracking-tight font-medium text-[#0B1F3B]">Absolute Discretion</h4>
<p className="text-sm font-light text-slate-600">Confidentiality is paramount. We protect your privacy and reputation from public scrutiny at every step.</p>
</div>
<div className="space-y-4 flex flex-col items-center">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-[#0B1F3B] bg-slate-50 border-slate-100">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="font-serif text-lg tracking-tight font-medium text-[#0B1F3B]">White-Glove Service</h4>
<p className="text-sm font-light text-slate-600">Direct access to senior partners and a highly responsive support team dedicated to your peace of mind.</p>
</div>
<div className="space-y-4 flex flex-col items-center">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-[#0B1F3B] bg-slate-50 border-slate-100">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h4 className="font-serif text-lg tracking-tight font-medium text-[#0B1F3B]">Strategic Guidance</h4>
<p className="text-sm font-light text-slate-600">We replace emotional decision-making with calculated, long-term legal and financial strategies.</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-slate-50" id="leadership">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-[#0B1F3B] font-medium mb-4">
                        Elite Legal Representation
                    </h2>
<p className="font-light text-base text-slate-600">
                        Led by recognized authorities in family law, our team brings decades of specialized experience to complex litigation and negotiation.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-slate-200">
<img alt="Attorney Portrait" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight text-[#0B1F3B] font-medium mb-1">Robert Harrison, Esq.</h3>
<p className="text-sm text-slate-500 font-medium tracking-wide uppercase mb-4">Managing Partner</p>
<p className="text-sm font-light leading-relaxed mb-4 text-slate-600">Specializing in high-net-worth divorce and intricate business valuations. Recognized continuously by Super Lawyers since 2010.</p>
<span className="text-xs text-[#0B1F3B] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Full Bio <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-slate-200">
<img alt="Attorney Portrait" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl tracking-tight text-[#0B1F3B] font-medium mb-1">Elena Wright, Esq.</h3>
<p className="text-sm text-slate-500 font-medium tracking-wide uppercase mb-4">Senior Partner</p>
<p className="text-sm font-light leading-relaxed mb-4 text-slate-600">Expert in interstate and international child custody disputes. Known for empathetic yet aggressive courtroom advocacy.</p>
<span className="text-xs text-[#0B1F3B] font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read Full Bio <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-t relative bg-white border-slate-200/60" id="contact">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[#0B1F3B]/[0.02] -skew-x-12 transform origin-top hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">

<div className="flex flex-col space-y-8 justify-center">
<div className="">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-[#0B1F3B] font-medium mb-4">
                        Start a Conversation.
                    </h2>
<p className="text-base font-light leading-relaxed max-w-md text-slate-600">
                        Contact our offices to schedule a strictly confidential consultation. We serve discerning clients across Georgia with primary offices in Atlanta and Alpharetta.
                    </p>
</div>
<div className="space-y-6 pt-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#0B1F3B] mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div className="">
<h5 className="font-serif text-lg tracking-tight font-medium text-[#0B1F3B]">Atlanta Headquarters</h5>
<p className="text-sm text-slate-500 font-light mt-1">1180 Peachtree St NE, Suite 3000<br/>Atlanta, GA 30309</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#0B1F3B] mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div className="">
<h5 className="font-serif text-lg tracking-tight font-medium text-[#0B1F3B]">Alpharetta Office</h5>
<p className="text-sm text-slate-500 font-light mt-1">Avalon Boulevard, Suite 200<br/>Alpharetta, GA 30009</p>
</div>
</div>
<div className="flex items-center gap-4 pt-4">
<iconify-icon className="text-[#0B1F3B]" icon="solar:phone-linear" width="24"></iconify-icon>
<a className="text-lg font-medium tracking-tight text-[#0B1F3B] hover:text-[#1A365D]" href="tel:+14045550198">(404) 555-0198</a>
</div>
</div>
</div>

<div className="p-8 md:p-12 border shadow-xl rounded-sm bg-white border-slate-100 shadow-slate-200/40">
<h3 className="font-serif text-2xl tracking-tight text-[#0B1F3B] font-medium mb-6">Confidential Inquiry</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">First Name</label>
<input className="w-full border px-4 py-3 text-sm focus:outline-none focus:border-[#0B1F3B] focus:bg-white transition-colors rounded-sm bg-slate-50 border-slate-200" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Last Name</label>
<input className="w-full border px-4 py-3 text-sm focus:outline-none focus:border-[#0B1F3B] focus:bg-white transition-colors rounded-sm bg-slate-50 border-slate-200" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Email Address</label>
<input className="w-full border px-4 py-3 text-sm focus:outline-none focus:border-[#0B1F3B] focus:bg-white transition-colors rounded-sm bg-slate-50 border-slate-200" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wide">Brief Message (Optional)</label>
<textarea className="w-full border px-4 py-3 text-sm focus:outline-none focus:border-[#0B1F3B] focus:bg-white transition-colors rounded-sm resize-none bg-slate-50 border-slate-200" placeholder="Please do not include sensitive legal details here." rows="4"></textarea>
</div>

<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center mt-0.5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border rounded-sm peer-checked:bg-[#0B1F3B] peer-checked:border-[#0B1F3B] transition-colors border-slate-300 bg-slate-50"></div>
<iconify-icon className="absolute inset-0 m-auto opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none text-white" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-light leading-relaxed">I understand that submitting this form does not create an attorney-client relationship. Information provided is kept strictly confidential.</span>
</label>
<button className="w-full bg-[#0B1F3B] py-4 text-sm font-medium tracking-wide rounded-sm hover:bg-[#1A365D] transition-colors text-white" type="button">
                        Request Consultation
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-[#0B1F3B] py-12 px-6 border-t border-slate-800">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<a className="font-serif text-xl tracking-tighter uppercase font-medium text-white" href="#">
                H&amp;W<span className="font-sans tracking-normal text-xs ml-2 align-middle text-slate-400">Atlanta</span>
</a>
<p className="text-xs font-light text-slate-400">
                © 2023 Harrison &amp; Wright LLC. All rights reserved. <a className="underline transition-colors ml-2 hover:text-white" href="#">Privacy Policy</a>
</p>
</div>
</footer>

    </>
  );
}
