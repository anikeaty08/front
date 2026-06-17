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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
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
      

<nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100/50 transition-all duration-300" id="navbar">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group z-50" href="#">
<div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white transition-transform duration-500 group-hover:rotate-12">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-xl font-semibold text-slate-900 tracking-tighter" style={{}}>NatureNap</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-emerald-700 transition-colors text-sm font-medium text-slate-600" href="#products">Products</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors" href="#sustainability">Sustainability</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors" href="#solutions">Enterprise</a>
</div>
<div className="flex items-center gap-4">
<a className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded hover:bg-emerald-700 hover:scale-105 transition-all duration-300" href="#contact">
                    Contact Sales
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl relative z-10">
<h1 className="reveal text-6xl sm:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter text-slate-900 leading-[0.95] mb-8 active">
                    Softness that <br/>
<span className="text-emerald-600">means business.</span>
</h1>
<p className="reveal delay-100 text-xl lg:text-2xl text-slate-500 mb-10 leading-relaxed max-w-lg tracking-tight active">
                    Premium, sustainable tissue solutions for commercial spaces. Bulk ordering, automated.
                </p>
<div className="reveal delay-200 flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-medium rounded hover:bg-emerald-700 transition-all text-base hover:-translate-y-1 duration-300 shadow-lg shadow-emerald-600/20" href="#catalog">
                        View Catalog
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-900 font-medium rounded hover:bg-slate-50 transition-all text-base group hover:-translate-y-1 duration-300" href="#contact">
<span>Get a Quote</span>
<iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<div className="reveal delay-300 mt-10 flex items-center gap-6 text-sm text-slate-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="lucide:check-circle" width="18"></iconify-icon>
<span>Min. 50 units</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="lucide:check-circle" width="18"></iconify-icon>
<span>Net-30 Terms</span>
</div>
</div>
</div>
<div className="relative reveal delay-200 image-reveal active">
<div className="relative z-10 rounded-2xl overflow-hidden bg-slate-100 aspect-[4/5] shadow-2xl">
<img alt="Premium Tissue Stack" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1583947581924-860bda6a26df?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md shadow-xl p-6 rounded-xl border border-white/50 max-w-xs transform hover:scale-105 transition-transform duration-500 cursor-default">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-emerald-100 rounded-full text-emerald-700">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900 tracking-tight">100% Bamboo Fiber</span>
</div>
<p className="text-xs text-slate-600 leading-relaxed">Sourced from sustainable forests. Luxury without the guilt.</p>
</div>
</div>

<div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-[100px] -z-10 mix-blend-multiply"></div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-slate-50/50 py-16 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center reveal">
<p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Trusted by procurement teams at</p>
</div>
<div className="relative w-full overflow-hidden group">
<div className="animate-marquee flex gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:building-2" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">VANTAGE</span></div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:hotel" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">LUXE STAY</span></div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:landmark" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">APEX CORP</span></div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:plane" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">AERO</span></div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:heart-handshake" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">CAREPLUS</span></div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:zap" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">BOLT INC</span></div>

<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:building-2" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">VANTAGE</span></div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:hotel" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">LUXE STAY</span></div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:landmark" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">APEX CORP</span></div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:plane" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">AERO</span></div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:heart-handshake" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">CAREPLUS</span></div>
<div className="flex items-center gap-2 shrink-0"><iconify-icon icon="lucide:zap" width="28"></iconify-icon><span className="font-bold text-2xl tracking-tighter">BOLT INC</span></div>
</div>

<div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
<div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
</div>
</section>

<section className="py-32" id="sustainability">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-16">

<div className="flex flex-col gap-6 reveal">
<div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-2 hover:bg-emerald-100 hover:text-emerald-700 transition-colors duration-300">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Eco-Conscious Supply</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Sourced responsibly using bamboo and recycled fibers. Reduce your company's carbon footprint with every order.
                    </p>
</div>

<div className="flex flex-col gap-6 reveal delay-100">
<div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-2 hover:bg-emerald-100 hover:text-emerald-700 transition-colors duration-300">
<iconify-icon icon="lucide:box" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Automated Restocking</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Smart inventory management integrates with your systems to trigger shipments before you run low.
                    </p>
</div>

<div className="flex flex-col gap-6 reveal delay-200">
<div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900 mb-2 hover:bg-emerald-100 hover:text-emerald-700 transition-colors duration-300">
<iconify-icon icon="lucide:sliders-horizontal" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Custom Specification</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        From ply-count to box branding. We offer white-labeling services to match your corporate identity.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row">

<div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 flex items-center justify-center py-20 lg:py-0 order-2 lg:order-1">
<div className="reveal relative bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl w-full max-w-lg mx-auto transform transition-all duration-700 hover:shadow-emerald-900/20">

<div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl"></div>

<div className="relative z-10">
<div className="flex items-center justify-between mb-8 border-b border-slate-600 pb-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
<iconify-icon icon="lucide:package" width="24"></iconify-icon>
</div>
<div>
<div className="text-lg font-medium tracking-tight">Order #88392</div>
<div className="text-sm text-slate-400">Shipped via Freight</div>
</div>
</div>
<div className="px-4 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm rounded-full border border-emerald-500/20 font-medium">
                                    In Transit
                                </div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 bg-slate-700/50 p-4 rounded-xl border border-slate-600/50 hover:bg-slate-700 transition-colors">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
<iconify-icon className="text-slate-900" icon="lucide:layers" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Ultra-Soft Facial Tissue</div>
<div className="text-xs text-slate-400">200 Boxes • 3-Ply</div>
</div>
<div className="ml-auto text-sm font-medium">$420.00</div>
</div>
<div className="flex items-center gap-4 bg-slate-700/50 p-4 rounded-xl border border-slate-600/50 hover:bg-slate-700 transition-colors">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
<iconify-icon className="text-slate-900" icon="lucide:scroll" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Commercial Roll Towel</div>
<div className="text-xs text-slate-400">50 Cases • Recycled</div>
</div>
<div className="ml-auto text-sm font-medium">$850.00</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-600 flex justify-between items-center">
<span className="text-slate-400 text-sm">Total Estimate</span>
<span className="text-2xl font-semibold tracking-tight">$1,270.00</span>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 py-20 lg:py-0 order-1 lg:order-2">

<div className="min-h-[70vh] flex flex-col justify-center px-6 lg:pl-20 reveal">
<div className="w-12 h-12 bg-emerald-900/50 text-emerald-400 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
<iconify-icon icon="lucide:layout-dashboard" width="24"></iconify-icon>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">Unified procurement.</h2>
<p className="text-xl text-slate-400 leading-relaxed max-w-md">
                            Manage orders for multiple locations from a single dashboard. Real-time tracking and consolidated billing.
                        </p>
</div>

<div className="min-h-[70vh] flex flex-col justify-center px-6 lg:pl-20 reveal">
<div className="w-12 h-12 bg-emerald-900/50 text-emerald-400 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
<iconify-icon icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">Cost analytics.</h2>
<p className="text-xl text-slate-400 leading-relaxed max-w-md">
                            Visualize spend across departments. Volume-based discounts are automatically applied to your account.
                        </p>
</div>

<div className="min-h-[70vh] flex flex-col justify-center px-6 lg:pl-20 reveal">
<div className="w-12 h-12 bg-emerald-900/50 text-emerald-400 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
<iconify-icon icon="lucide:repeat" width="24"></iconify-icon>
</div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter mb-6">Set and forget.</h2>
<p className="text-xl text-slate-400 leading-relaxed max-w-md">
                            Establish recurring orders based on consumption usage. Never run out of stock during peak seasons.
                        </p>
<div className="mt-8">
<a className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-2 transition-colors" href="#">
                                Explore Enterprise Solutions 
                                <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:flex justify-between items-end reveal">
<div className="max-w-xl">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter text-slate-900 mb-6">Our Product Range</h2>
<p className="text-xl text-slate-500 leading-relaxed">High-quality paper products engineered for comfort, durability, and commercial scale.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 mt-4 md:mt-0 group" href="#">
                    View Full Catalog <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="group cursor-pointer reveal image-reveal">
<div className="bg-slate-50 rounded-2xl aspect-[4/3] overflow-hidden mb-6 relative">
<img alt="Facial Tissue" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Quick View</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-slate-900 mb-1 tracking-tight group-hover:text-emerald-700 transition-colors">Premium Facial Tissues</h3>
<p className="text-sm text-slate-500">3-Ply • Aloe Infused Option</p>
</div>
<span className="text-sm font-semibold text-slate-900 bg-slate-100 px-2 py-1 rounded">$1.20 / box</span>
</div>
</div>

<div className="group cursor-pointer reveal image-reveal delay-100">
<div className="bg-slate-50 rounded-2xl aspect-[4/3] overflow-hidden mb-6 relative">
<img alt="Paper Towels" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Quick View</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-slate-900 mb-1 tracking-tight group-hover:text-emerald-700 transition-colors">Commercial Paper Towels</h3>
<p className="text-sm text-slate-500">High Absorbency • C-Fold</p>
</div>
<span className="text-sm font-semibold text-slate-900 bg-slate-100 px-2 py-1 rounded">$24.00 / case</span>
</div>
</div>

<div className="group cursor-pointer reveal image-reveal delay-200">
<div className="bg-slate-50 rounded-2xl aspect-[4/3] overflow-hidden mb-6 relative">
<img alt="Napkins" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">Quick View</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-slate-900 mb-1 tracking-tight group-hover:text-emerald-700 transition-colors">Dispenser Napkins</h3>
<p className="text-sm text-slate-500">Recycled Fiber • Bleach Free</p>
</div>
<span className="text-sm font-semibold text-slate-900 bg-slate-100 px-2 py-1 rounded">$18.50 / case</span>
</div>
</div>
</div>
<div className="mt-12 md:hidden text-center reveal">
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">
                    View Full Catalog <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 bg-slate-50" id="contact">
<div className="max-w-3xl mx-auto px-6 reveal">
<div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden transform transition-all hover:shadow-2xl hover:shadow-emerald-900/5">
<div className="p-8 md:p-14">
<div className="text-center mb-12">
<h2 className="text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Partner with NatureNap</h2>
<p className="text-lg text-slate-500">Request a wholesale quote or sample kit.</p>
</div>
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-3 group">
<label className="text-xs font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-emerald-600 transition-colors" htmlFor="firstName">First Name</label>
<input className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 text-slate-900 text-lg focus:outline-none focus:border-emerald-600 transition-all placeholder:text-slate-300" id="firstName" placeholder="Jane" type="text"/>
</div>
<div className="space-y-3 group">
<label className="text-xs font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-emerald-600 transition-colors" htmlFor="lastName">Last Name</label>
<input className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 text-slate-900 text-lg focus:outline-none focus:border-emerald-600 transition-all placeholder:text-slate-300" id="lastName" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-3 group">
<label className="text-xs font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-emerald-600 transition-colors" htmlFor="email">Work Email</label>
<input className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 text-slate-900 text-lg focus:outline-none focus:border-emerald-600 transition-all placeholder:text-slate-300" id="email" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-3 group">
<label className="text-xs font-bold text-slate-500 uppercase tracking-widest group-focus-within:text-emerald-600 transition-colors" htmlFor="volume">Monthly Volume</label>
<div className="relative">
<select className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-200 text-slate-900 text-lg focus:outline-none focus:border-emerald-600 transition-all appearance-none cursor-pointer" id="volume">
<option>Less than $1,000</option>
<option>$1,000 - $5,000</option>
<option>$5,000 - $20,000</option>
<option>$20,000+</option>
</select>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full py-5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-all text-lg shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98]" type="button">
                                Request Quote
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-10 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20 reveal">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:leaf" strokeWidth="2" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">NatureNap</span>
</a>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs mb-8">
                        Revolutionizing commercial hygiene with sustainable, soft, and reliable tissue products. 
                    </p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-emerald-600 transition-colors p-2 hover:bg-slate-50 rounded-full" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
<a className="hover:text-emerald-600 transition-colors p-2 hover:bg-slate-50 rounded-full" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-emerald-600 transition-colors p-2 hover:bg-slate-50 rounded-full" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6 text-sm tracking-tight">Products</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Facial Tissues</a></li>
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Paper Towels</a></li>
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Napkins</a></li>
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Dispensers</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6 text-sm tracking-tight">Company</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Sustainability</a></li>
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Careers</a></li>
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-6 text-sm tracking-tight">Resources</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Blog</a></li>
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Help Center</a></li>
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-600 transition-colors block hover:translate-x-1 duration-200" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4 text-xs text-slate-400">
<p>© 2023 NatureNap Inc. All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="font-medium">Systems Operational</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
