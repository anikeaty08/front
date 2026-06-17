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
      

<header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center h-16">

<div className="flex items-center gap-2 group cursor-pointer">
<iconify-icon className="text-[#d97706] text-2xl" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col">
<span className="font-serif font-semibold text-lg tracking-tighter leading-none text-slate-900">JAGDAMB</span>
<span className="text-[10px] font-medium text-slate-400 tracking-[0.2em] uppercase">Global Trade</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-[#d97706] transition-colors uppercase tracking-widest" href="#home">Home</a>
<a className="text-xs font-medium text-slate-500 hover:text-[#d97706] transition-colors uppercase tracking-widest" href="#about">About</a>
<a className="text-xs font-medium text-slate-500 hover:text-[#d97706] transition-colors uppercase tracking-widest" href="#services">Services</a>
<a className="text-xs font-medium text-slate-500 hover:text-[#d97706] transition-colors uppercase tracking-widest" href="#products">Products</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-semibold bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all" href="#contact">
                        Get a Quote
                    </a>
<button className="md:hidden text-slate-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center hero-gradient pt-16" id="home">
<div className="absolute inset-0 bg-slate-900/20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<span className="inline-block text-xs font-semibold text-[#d97706] uppercase tracking-[0.3em] mb-6 bg-[#d97706]/10 px-4 py-1.5 rounded-full backdrop-blur-sm">India's Gateway to the World</span>
<h1 className="font-serif text-4xl md:text-6xl text-white font-semibold mb-8 tracking-tight leading-[1.1]">
                Bridging Excellence with <br/>Global Markets
            </h1>
<p className="text-base md:text-lg text-slate-200 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
                Facilitating seamless international trade with transparency and integrity. From premium Indian commodities to global industrial solutions.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto bg-[#d97706] text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-[#b45309] transition-all flex items-center justify-center gap-2" href="#about">
                    Explore Solutions
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full font-medium text-sm hover:bg-white/20 transition-all flex items-center justify-center" href="#contact">
                    Contact Specialist
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-white/50 text-2xl" icon="solar:mouse-minimalistic-linear"></iconify-icon>
</div>
</section>

<div className="relative z-20 max-w-6xl mx-auto px-6 -mt-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50">
<div className="bg-white p-6 flex flex-col items-center text-center">
<span className="text-2xl font-serif font-semibold text-slate-900 tracking-tight">10+</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-tighter">Years Expertise</span>
</div>
<div className="bg-white p-6 flex flex-col items-center text-center">
<span className="text-2xl font-serif font-semibold text-slate-900 tracking-tight">50+</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-tighter">Global Partners</span>
</div>
<div className="bg-white p-6 flex flex-col items-center text-center">
<span className="text-2xl font-serif font-semibold text-slate-900 tracking-tight">100%</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-tighter">Compliance</span>
</div>
<div className="bg-white p-6 flex flex-col items-center text-center">
<span className="text-2xl font-serif font-semibold text-slate-900 tracking-tight">24/7</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-tighter">Trade Support</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-10 -left-10 w-64 h-64 bg-[#d97706]/5 rounded-full blur-3xl"></div>
<img alt="Logistics" className="relative rounded-2xl shadow-2xl border border-slate-100 z-10" src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute -bottom-6 -right-6 bg-slate-900 p-8 rounded-2xl shadow-xl hidden md:block z-20">
<iconify-icon className="text-[#d97706] text-4xl mb-2" icon="solar:verified-check-linear"></iconify-icon>
<p className="text-white font-serif text-lg">Trusted Globally</p>
<p className="text-slate-400 text-xs mt-1">Certified Indian Exporter</p>
</div>
</div>
<div className="flex flex-col">
<span className="text-[#d97706] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Legacy</span>
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-semibold mb-6 tracking-tight leading-snug">
                        Setting New Benchmarks in <br/>International Commerce
                    </h2>
<p className="text-slate-600 mb-8 leading-relaxed font-light">
                        Jagdamb Global Trade operates at the intersection of tradition and modern logistics. Based in India, we specialize in high-volume export and import cycles, ensuring that quality never compromises for speed.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-10">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#d97706] text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Strict Quality Control</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#d97706] text-xl" icon="solar:routing-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">End-to-end Logistics</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#d97706] text-xl" icon="solar:handshake-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Transparent Pricing</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[#d97706] text-xl" icon="solar:document-text-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Legal Compliance</span>
</div>
</div>
<button className="flex items-center gap-2 text-sm font-semibold text-slate-900 group">
                        Read Our Story
                        <iconify-icon className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#d97706] text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block">Core Services</span>
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight">Integrated Supply Chain</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
<div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#d97706] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-4 tracking-tight">Export Facilitation</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light mb-6">Navigating the complexities of bringing Indian goods to international markets with precision.</p>
<ul className="text-xs text-slate-600 space-y-2">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Market Research</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Export Documentation</li>
</ul>
</div>

<div className="bg-white p-10 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
<div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#d97706] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-4 tracking-tight">Import Sourcing</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light mb-6">Leveraging a global network to provide Indian industries with premium raw materials and technology.</p>
<ul className="text-xs text-slate-600 space-y-2">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Vendor Verification</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Price Negotiation</li>
</ul>
</div>

<div className="bg-white p-10 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all group">
<div className="w-12 h-12 bg-slate-50 text-slate-900 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#d97706] group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:bill-list-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-4 tracking-tight">Customs Advisory</h3>
<p className="text-sm text-slate-500 leading-relaxed font-light mb-6">Expert guidance on tariffs, tax implications, and regulatory frameworks to ensure zero delays.</p>
<ul className="text-xs text-slate-600 space-y-2">
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Duty Optimization</li>
<li className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Port Coordination</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<span className="text-[#d97706] text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block">Product Portfolio</span>
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 font-semibold tracking-tight">Premium Sourcing Categories</h2>
</div>
<button className="text-xs font-semibold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-[0.2em] flex items-center gap-2">
                    View Full Catalog <iconify-icon icon="solar:double-alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
<img alt="Spices" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
<h3 className="text-white font-serif text-xl tracking-tight mb-2">Organic Spices</h3>
<p className="text-slate-300 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">Handpicked turmeric, cumin, and saffron from India.</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
<img alt="Agro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
<h3 className="text-white font-serif text-xl tracking-tight mb-2">Agro Goods</h3>
<p className="text-slate-300 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">Premium long-grain Basmati rice and refined pulses.</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
<img alt="Textiles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
<h3 className="text-white font-serif text-xl tracking-tight mb-2">Sustainable Textiles</h3>
<p className="text-slate-300 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">Eco-friendly cotton fabrics and high-grade silk.</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
<img alt="Machinery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex flex-col justify-end p-8">
<h3 className="text-white font-serif text-xl tracking-tight mb-2">Industrial Tools</h3>
<p className="text-slate-300 text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">Precision machinery and heavy-duty industrial equipment.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="contact">
<div className="absolute top-0 right-0 w-1/2 h-full bg-[#d97706]/5 skew-x-12 translate-x-32"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
<div>
<span className="text-[#d97706] text-xs font-semibold tracking-[0.2em] uppercase mb-4 inline-block">Consultation</span>
<h2 className="font-serif text-3xl md:text-5xl text-white font-semibold mb-8 tracking-tight leading-tight">
                        Let's Expand Your <br/>Global Footprint
                    </h2>
<p className="text-slate-400 text-sm mb-12 font-light max-w-md leading-relaxed">
                        Whether you're starting your first export venture or looking for a more efficient supply chain partner, our experts are here to help.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#d97706]">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Headquarters</h4>
<p className="text-slate-500 text-xs mt-1">Mumbai, Maharashtra, India</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#d97706]">
<iconify-icon className="text-xl" icon="solar:outgoing-call-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Direct Line</h4>
<p className="text-slate-500 text-xs mt-1">+91 98765 43210</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#d97706]">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium">Email Inquiries</h4>
<p className="text-slate-500 text-xs mt-1">trade@jagdambglobal.in</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl">
<form className="space-y-5">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">First Name</label>
<input className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl text-sm transition-all focus:bg-white" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl text-sm transition-all focus:bg-white" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Business Email</label>
<input className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl text-sm transition-all focus:bg-white" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Inquiry Type</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl text-sm transition-all focus:bg-white appearance-none cursor-pointer">
<option>Export Inquiry</option>
<option>Import Sourcing</option>
<option>Logistics Support</option>
<option>General Collaboration</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-2">Detailed Message</label>
<textarea className="w-full bg-slate-50 border border-slate-100 px-4 py-3 rounded-xl text-sm transition-all focus:bg-white resize-none" placeholder="Describe your trade requirements..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-semibold py-4 rounded-xl text-xs uppercase tracking-widest hover:bg-[#d97706] transition-all">
                            Submit Inquiry
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-[#d97706] text-xl" icon="solar:global-linear"></iconify-icon>
<span className="font-serif font-semibold text-lg tracking-tighter text-slate-900">JAGDAMB</span>
</div>
<p className="text-xs text-slate-500 font-light leading-relaxed max-w-xs mb-8">
                        Connecting Bharat's rich heritage of quality with the ever-evolving demands of the global market.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#d97706] transition-colors" href="#"><iconify-icon icon="solar:link-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#d97706] transition-colors" href="#"><iconify-icon icon="solar:videocamera-record-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#d97706] transition-colors" href="#"><iconify-icon icon="solar:share-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-[10px] font-semibold text-slate-900 uppercase tracking-widest mb-6">Navigation</h4>
<ul className="space-y-4 text-xs font-medium text-slate-500">
<li><a className="hover:text-[#d97706] transition-colors" href="#home">Global Home</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#about">Our Ethos</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#products">Catalog</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-semibold text-slate-900 uppercase tracking-widest mb-6">Trade Support</h4>
<ul className="space-y-4 text-xs font-medium text-slate-500">
<li><a className="hover:text-[#d97706] transition-colors" href="#">Logistics Tracking</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#">Compliance Center</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-[#d97706] transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-semibold text-slate-900 uppercase tracking-widest mb-6">Newsletter</h4>
<p className="text-xs text-slate-500 mb-6 font-light">Get global market updates twice a month.</p>
<div className="flex">
<input className="w-full bg-slate-50 text-xs px-4 py-3 rounded-l-xl focus:outline-none border-y border-l border-slate-100" placeholder="Email" type="email"/>
<button className="bg-slate-900 text-white px-4 py-3 rounded-r-xl text-xs hover:bg-[#d97706] transition-colors">
<iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-400 font-medium">© 2024 JAGDAMB GLOBAL TRADE. ALL RIGHTS RESERVED.</p>
<div className="flex gap-6 text-[10px] text-slate-400 font-medium uppercase tracking-widest">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
