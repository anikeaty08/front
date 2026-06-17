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
      

<nav className="border-b border-white/5 relative z-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">

<div className="flex items-center gap-2">
<span className="text-3xl font-['Playfair_Display'] text-[#d1b37a] lowercase tracking-tight">aramis</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Expertise</a>
<a className="hover:text-white transition-colors" href="#">Team</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>

<a className="hidden md:flex items-center gap-2 hover:bg-white/5 transition-colors text-sm border-white/20 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5" href="#">Book a consultation</a>

<button className="md:hidden text-white">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="">

<section className="lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-16 pl-6">

<div className="flex items-center gap-3 mb-8">
<div className="w-8 h-px bg-[#d1b37a]"></div>
<span className="text-xs font-medium uppercase tracking-widest text-[#d1b37a]">Accepting new clients</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 gap-x-12 gap-y-12 items-start">

<div className="lg:col-span-8">
<h1 className="md:text-8xl leading-[1.1] text-5xl font-normal tracking-tight font-['Playfair_Display']"><span className="italic text-[#d1b37a]">Precision,</span><br/> in every case</h1>
</div>

<div className="lg:col-span-4 lg:pt-4 flex flex-col justify-end h-full">
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                        Comprehensive legal consulting with a human touch. We combine top-tier expertise with empathy to achieve the best results for your future.
                    </p>
</div>
</div>

<div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="flex items-center gap-3 hover:bg-white/5 transition-colors group border-white/20 border rounded-full pt-2 pr-2 pb-2 pl-6" href="#">
<span className="uppercase text-sm font-medium tracking-widest">Book a consultation</span>
<div className="w-10 h-10 bg-[#d1b37a] rounded-full flex items-center justify-center text-black group-hover:scale-105 transition-transform">
<iconify-icon className="" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</a>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] object-cover grayscale" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-[#0a0a0a] bg-neutral-800 flex items-center justify-center text-xs text-white/50">90+</div>
</div>
<span className="text-sm text-neutral-500 max-w-[120px] leading-tight">Join our satisfied clients.</span>
</div>
</div>

<div className="mt-16 relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9]">
<img alt="Lawyer" className="w-full h-full object-cover object-top opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/6008c96a-e5c1-4fd1-885f-3c0fbac2577d/1600w.jpg"/>
<div className="bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-black/60 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-sm flex gap-4">
<p className="leading-snug text-base font-light text-white/90 pt-1.5">
                        When it comes to crucial decisions, you need legal support that holds up under pressure.
                    </p>
</div>
</div>
</section>

<section className="bg-[#111111] border-y border-white/5 py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5">
<h2 className="text-3xl font-['Playfair_Display'] font-normal italic text-[#d1b37a] tracking-tight mb-2">Results that speak</h2>
<p className="text-base text-neutral-400">Our numbers reflect our dedication to your success.</p>
</div>
<div className="md:col-span-7 grid grid-cols-3 gap-8 text-center md:text-left">
<div className="">
<div className="text-4xl md:text-5xl font-light tracking-tight mb-2">20+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Years of practice</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-light tracking-tight mb-2">500+</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Cases</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-light tracking-tight mb-2">98%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Success rate</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
<h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-normal tracking-tight">
                    Comprehensive<br/>
<span className="italic text-[#d1b37a]">Legal Services</span>
</h2>
<div className="flex flex-col items-start lg:items-end justify-center">
<p className="text-lg text-neutral-400 font-light max-w-md lg:text-right mb-6">
                        We specialize in key areas of law with an emphasis on detail and strategic thinking. We provide tailored solutions for your needs.
                    </p>
<a className="text-xs font-medium uppercase tracking-widest text-[#d1b37a] flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
                        View all services
                        <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">

<div className="bg-[#0f0f0f] p-8 md:p-10 flex flex-col group relative">
<div className="absolute top-8 right-8 text-neutral-700">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4 mt-8">Compliance</h3>
<p className="text-base text-neutral-500 font-light leading-relaxed mb-12 flex-grow">
                        Increasing efficiency and protecting legal entities with an emphasis on compliance. Setting rules, competencies, responsibilities, and risk management.
                    </p>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all" href="#">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-[#0f0f0f] p-8 md:p-10 flex flex-col group relative">
<div className="absolute top-8 right-8 text-neutral-700">
<iconify-icon height="24" icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4 mt-8">Civil and Corporate Law</h3>
<p className="text-base text-neutral-500 font-light leading-relaxed mb-12 flex-grow">
                        Comprehensive legal services in civil law, real estate, construction law, family law, and corporate law.
                    </p>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all" href="#">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-[#0f0f0f] p-8 md:p-10 flex flex-col group relative">
<div className="absolute top-8 right-8 text-neutral-700">
<iconify-icon height="24" icon="solar:bank-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4 mt-8">Debt Recovery and Management</h3>
<p className="text-base text-neutral-500 font-light leading-relaxed mb-12 flex-grow">
                        Management of extensive debt portfolios. Comprehensive legal service from out-of-court collection to representation in enforcement proceedings.
                    </p>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all" href="#">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-[#0f0f0f] p-8 md:p-10 flex flex-col group relative">
<div className="absolute top-8 right-8 text-neutral-700">
<iconify-icon height="24" icon="solar:case-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4 mt-8">Insolvency Proceedings</h3>
<p className="text-base text-neutral-500 font-light leading-relaxed mb-12 flex-grow">
                        Representing clients before courts and arbitration courts. Comprehensive legal services for both debtors and creditors.
                    </p>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all" href="#">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-[#0f0f0f] p-8 md:p-10 flex flex-col group relative">
<div className="absolute top-8 right-8 text-neutral-700">
<iconify-icon height="24" icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4 mt-8">Energy Law</h3>
<p className="text-base text-neutral-500 font-light leading-relaxed mb-12 flex-grow">
                        Representing clients in proceedings before the energy regulatory office and recovering debts from joint energy supply contracts.
                    </p>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all" href="#">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-[#0f0f0f] p-8 md:p-10 flex flex-col group relative">
<div className="absolute top-8 right-8 text-neutral-700">
<iconify-icon height="24" icon="solar:briefcase-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4 mt-8">Labor Law</h3>
<p className="text-base text-neutral-500 font-light leading-relaxed mb-12 flex-grow">
                        We focus on disputes between participants in labor law disputes and resolve mutual claims arising from labor relations.
                    </p>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all" href="#">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative rounded-2xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square">
<img alt="Meeting" className="w-full h-full object-cover grayscale opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/770d740a-cf68-465b-93a2-783da4d332fa_1600w.webp"/>
<div className="bg-gradient-to-tr from-black/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="">
<div className="text-xs font-medium uppercase tracking-widest text-neutral-500 mb-6">Our Values</div>
<h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-normal tracking-tight mb-12">
                        Our approach makes a<br/>
<span className="italic text-[#d1b37a]">fundamental difference</span>
</h2>
<div className="space-y-10">

<div className="flex gap-6 relative">
<div className="absolute left-[11px] top-10 bottom-[-30px] w-px bg-white/10 hidden md:block"></div>
<div className="text-xs font-['Playfair_Display'] italic text-[#d1b37a] pt-1">01</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight mb-2">Strategic Thinking</h3>
<p className="text-base text-neutral-400 font-light leading-relaxed">
                                    We don't just look for legal loopholes, but real business solutions. We see connections that others miss.
                                </p>
</div>
</div>

<div className="flex gap-6 relative">
<div className="absolute left-[11px] top-10 bottom-[-30px] w-px bg-white/10 hidden md:block"></div>
<div className="text-xs font-['Playfair_Display'] italic text-[#d1b37a] pt-1">02</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight mb-2">Personal Partnership</h3>
<p className="text-base text-neutral-400 font-light leading-relaxed">
                                    Every client is a partner to us. We know your business and your concerns, and we are here for you.
                                </p>
</div>
</div>

<div className="flex gap-6">
<div className="text-xs font-['Playfair_Display'] italic text-[#d1b37a] pt-1">03</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight mb-2">Ethics and Transparency</h3>
<p className="text-base text-neutral-400 font-light leading-relaxed">
                                    Fair dealing and clear pricing policies are the foundations of our credibility.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-8 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="bg-[#121212] border border-white/5 rounded-3xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d1b37a]/5 rounded-full blur-[100px] pointer-events-none"></div>

<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-['Playfair_Display'] font-normal tracking-tight mb-6">
                        Do you need<br/>
<span className="italic text-[#d1b37a]">legal representation?</span>
</h2>
<p className="text-lg text-neutral-400 font-light mb-12 max-w-md">
                        Book an online consultation and let us handle your case. The first step to a solution starts here.
                    </p>
<div className="">
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Call us</div>
<div className="text-3xl font-light tracking-tight">(212) 555-1234</div>
</div>
</div>

<div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 relative z-10">
<form className="space-y-6">

<div className="">
<label className="block text-xs text-neutral-500 uppercase tracking-widest mb-3">Service type</label>
<div className="relative">
<select className="w-full appearance-none bg-[#141414] border border-white/10 text-white text-base rounded-xl px-4 py-4 pr-10 focus:outline-none focus:border-white/30 transition-colors cursor-pointer">
<option>Consultation</option>
<option>Legal representation</option>
<option>Contract drafting</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-neutral-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="">
<label className="block text-xs text-neutral-500 uppercase tracking-widest mb-3">Preferred contact</label>
<div className="relative">
<select className="w-full appearance-none bg-[#141414] border border-white/10 text-white text-base rounded-xl px-4 py-4 pr-10 focus:outline-none focus:border-white/30 transition-colors cursor-pointer">
<option>Email</option>
<option>Phone</option>
<option>In-person meeting</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-neutral-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="flex gap-2 hover:bg-[#dfc38f] transition-colors text-base font-medium text-black bg-[#d1b37a] w-full rounded-xl mt-4 pt-4 pb-4 gap-x-2 gap-y-2 items-center justify-center" type="button">Book a consultation</button>
</form>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 pt-16 pb-8 mt-12 bg-[#050505]">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="text-xl font-['Playfair_Display'] text-[#d1b37a] font-medium tracking-tight mb-4">Aramis Law</div>
<p className="text-base text-neutral-500 font-light mb-6 leading-relaxed">
                        A top-tier law agency providing comprehensive legal services with an emphasis on professionalism and a human touch.
                    </p>
<div className="flex gap-3">
<a className="flex items-center justify-center hover:text-white hover:border-white/30 transition-colors uppercase text-xs font-medium text-neutral-400 w-10 h-10 border-white/10 border rounded-full" href="#">Li</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-colors text-xs font-medium uppercase" href="#">Fb</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/30 transition-colors text-xs font-medium uppercase" href="#">Ig</a>
</div>
</div>

<div className="">
<h4 className="text-xs font-medium uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-4 text-base text-neutral-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Compliance</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Civil Law</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Debt Recovery</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Insolvency Proceedings</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-medium uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-4 text-base text-neutral-400 font-light">
<li className=""><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Our Team</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-medium uppercase tracking-widest mb-6">Address</h4>
<address className="text-base text-neutral-400 font-light not-italic space-y-4">
<p className="">511 Canal St, New York, NY 10013, Spojené státy</p>
<p className=""><a className="hover:text-white transition-colors" href="/mailto:consultation@aramis.com">consultation@aramis.com</a></p>
</address>
</div>
</div>

<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-light">
<p className="">© 2023 Aramis, Law Agency. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Cookies</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
