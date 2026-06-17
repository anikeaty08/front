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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
},
colors: {
'emerald-DEFAULT': '#059669',
'emerald-dark': '#047857',
'emerald-light': '#10b981',
}
}
}
}



        // Fade-in animation on scroll
        const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in-visible');
            }
          });
        }, observerOptions);
        
        // Observe all sections except hero
        document.querySelectorAll('section:not(:first-of-type)').forEach(section => {
          section.classList.add('fade-in');
          observer.observe(section);
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
      

<div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-slate-200 md:hidden z-50">
<a className="flex items-center justify-center w-full py-3 text-sm font-semibold text-white bg-emerald-DEFAULT hover:bg-emerald-dark transition-colors rounded-lg shadow-lg shadow-emerald-900/10" href="#contact">
            Book Free Call →
        </a>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-slate-900 uppercase" href="#">
<div className="w-2 h-2 rounded-full bg-emerald-DEFAULT"></div>
                Factolink
            </a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-emerald-DEFAULT transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-DEFAULT transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-DEFAULT transition-colors" href="#standards">Standards</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-DEFAULT transition-colors" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-DEFAULT transition-colors" href="/blog/index.html">Blog</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-DEFAULT transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-emerald-DEFAULT rounded-md hover:bg-emerald-dark transition-colors shadow-sm shadow-emerald-500/20" href="#contact">
                    Book a Call
                </a>
<button className="lg:hidden text-slate-900 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
<div className="absolute inset-0 bg-grid -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center">

<div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100">
<span className="flex h-1.5 w-1.5 rounded-full bg-emerald-light animate-pulse"></span>
<span className="text-xs font-medium text-emerald-dark">Accepting 3 new brands for March 2025</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-slate-900 mb-6 leading-[1.1]">
                Your jewelry production partner in Asia.<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-dark to-emerald-light">Built on trust, delivered with precision.</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Direct access to 20+ vetted Asian manufacturers. Amy handles sourcing, quality control, and logistics—starting at €5k.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto hover:bg-emerald-dark bg-emerald-DEFAULT transition-all shadow-emerald-500/20 flex items-center justify-center gap-2 text-sm font-medium text-white w-full rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" href="#contact">
                    Start Production
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<button className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-slate-600 hover:text-emerald-DEFAULT bg-white border border-slate-200 hover:border-emerald-200 rounded-lg transition-colors flex items-center justify-center gap-2" onclick="document.getElementById('guide-modal').showModal()">
<iconify-icon icon="solar:document-add-linear" width="18"></iconify-icon>
                    Download Guide
                </button>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-emerald-50/30">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-medium tracking-tight text-emerald-dark mb-1">17</p>
<p className="text-sm text-slate-600 font-medium mb-1">Brands Launched</p>
<p className="text-xs text-slate-400">First collection to reorder in 6 months avg.</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-medium tracking-tight text-emerald-dark mb-1">20+</p>
<p className="text-sm text-slate-600 font-medium mb-1">ISO Factories</p>
<p className="text-xs text-slate-400">Personally audited by Amy in Bangkok</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-medium tracking-tight text-emerald-dark mb-1">6</p>
<p className="text-sm text-slate-600 font-medium mb-1">Asian Hubs</p>
<p className="text-xs text-slate-400">China, Thailand, Vietnam, Turkey, India, Indonesia</p>
</div>
<div className="text-center md:text-left">
<p className="text-3xl md:text-4xl font-medium tracking-tight text-emerald-dark mb-1">26%</p>
<p className="text-sm text-slate-600 font-medium mb-1">Cost Savings</p>
<p className="text-xs text-slate-400">vs EU/US production (landed cost)</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Why work with Factolink?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full">Your eyes in Asia</span>

<div className="h-48 w-full bg-slate-200 rounded-lg mb-6 flex items-center justify-center text-slate-400 text-xs">
                        [Photo: Amy portrait professionnel]
                    </div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">On-Ground Presence</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Amy is Belgian, based in Bangkok for 8 years. She personally visits every factory and audits production lines before you commit a single euro. With experience working for multiple factories and creators across Asia, she knows the ins and outs of the jewelry manufacturing ecosystem.
                    </p>
</div>

<div className="group p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full">&lt;2% defect rate</span>

<div className="h-48 w-full bg-slate-200 rounded-lg mb-6 flex items-center justify-center text-slate-400 text-xs">
                        [Photo: Process QC - inspection bijou]
                    </div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Rigorous Quality Control</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Double inspection: first at the factory during production, then at our independent Bangkok workshop before shipping. Defect rate &lt;2% vs 25% industry average. Every batch is photographed, weighed, and tested.
                    </p>
</div>

<div className="group p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full">From 50 pieces</span>

<div className="h-48 w-full bg-slate-200 rounded-lg mb-6 flex items-center justify-center text-slate-400 text-xs">
                        [Photo: Échantillons bijoux en production]
                    </div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Low MOQ from 50 Pieces</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Test your market without over-investing. Our network of 20+ factories allows MOQ as low as 50 pieces per model vs 300-500 standard market. Perfect for emerging brands and new collection testing.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Crystal Clear Process</h2>
<p className="text-slate-500 max-w-xl mx-auto mb-8">From sketch to showcase in 4 months.</p>

<div className="flex items-center justify-center gap-2 max-w-lg mx-auto mb-4 opacity-50">
<div className="flex-1 h-1 bg-emerald-DEFAULT rounded-full"></div>
<div className="flex-1 h-1 bg-emerald-DEFAULT rounded-full"></div>
<div className="flex-1 h-1 bg-emerald-DEFAULT rounded-full"></div>
<div className="flex-1 h-1 bg-slate-200 rounded-full"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-emerald-DEFAULT mb-4 shadow-sm group-hover:scale-110 transition-transform">
<span className="font-mono text-sm font-bold">01</span>
</div>
<span className="block text-xs font-mono font-medium text-emerald-dark uppercase mb-1">5-7 days</span>
<h3 className="text-base font-semibold text-slate-900 mb-2">Sourcing</h3>
<p className="text-sm text-slate-500 group-hover:text-emerald-900/70">Brief &amp; factory matching. Amy identifies the top 3 specialized manufacturers for your project.</p>
</div>

<div className="group p-6 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-emerald-DEFAULT mb-4 shadow-sm group-hover:scale-110 transition-transform">
<span className="font-mono text-sm font-bold">02</span>
</div>
<span className="block text-xs font-mono font-medium text-emerald-dark uppercase mb-1">15-20 days</span>
<h3 className="text-base font-semibold text-slate-900 mb-2">Sampling</h3>
<p className="text-sm text-slate-500 group-hover:text-emerald-900/70">Prototyping &amp; iterations. We refine samples until they perfectly match your vision.</p>
</div>

<div className="group p-6 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-emerald-DEFAULT mb-4 shadow-sm group-hover:scale-110 transition-transform">
<span className="font-mono text-sm font-bold">03</span>
</div>
<span className="block text-xs font-mono font-medium text-emerald-dark uppercase mb-1">30-45 days</span>
<h3 className="text-base font-semibold text-slate-900 mb-2">Production</h3>
<p className="text-sm text-slate-500 group-hover:text-emerald-900/70">Mass manufacturing with on-site QC. Real-time photo updates during production.</p>
</div>

<div className="group p-6 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-transparent hover:border-emerald-100 transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-emerald-DEFAULT mb-4 shadow-sm group-hover:scale-110 transition-transform">
<span className="font-mono text-sm font-bold">04</span>
</div>
<span className="block text-xs font-mono font-medium text-emerald-dark uppercase mb-1">15-20 days</span>
<h3 className="text-base font-semibold text-slate-900 mb-2">Delivery</h3>
<p className="text-sm text-slate-500 group-hover:text-emerald-900/70">Secure DDP shipping + customs clearance. Delivered directly to your warehouse.</p>
</div>
</div>
<div className="mt-10 text-center">
<p className="text-sm text-slate-500">
<strong className="text-emerald-dark">Total timeline:</strong> 60-90 days from order to your warehouse
                </p>
</div>
</div>
</section>

<section className="py-20 bg-emerald-50/20 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Complete Jewelry Ecosystem</h2>
<div className="flex flex-wrap justify-center gap-3 mt-4">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 border border-emerald-100 text-emerald-700">
<iconify-icon className="mr-1" icon="solar:shield-check-linear"></iconify-icon> Verified
                    </span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 border border-emerald-100 text-emerald-700">
<iconify-icon className="mr-1" icon="solar:leaf-linear"></iconify-icon> Ethical
                    </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-emerald-300 transition-all hover-lift">
<iconify-icon className="text-emerald-DEFAULT mb-4" icon="solar:medal-star-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Manufacturing</h3>
<p className="text-sm text-slate-500 mb-4">Gold vermeil, 925 silver, brass. High-end finishing.</p>
<div className="pt-4 border-t border-slate-100">
<p className="text-xs text-slate-400 font-mono">
                            MOQ: 50pcs • Lead: 45d
                        </p>
</div>
</div>

<div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-emerald-300 transition-all hover-lift">
<iconify-icon className="text-emerald-DEFAULT mb-4" icon="solar:globe-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Strategic Sourcing</h3>
<p className="text-sm text-slate-500 mb-4">We negotiate prices and terms with factories that match your niche.</p>
<div className="pt-4 border-t border-slate-100">
<p className="text-xs text-slate-400 font-mono">
                            Flat Fee or Commission
                        </p>
</div>
</div>

<div className="bg-white p-8 rounded-lg border border-slate-200 hover:border-emerald-300 transition-all hover-lift">
<iconify-icon className="text-emerald-DEFAULT mb-4" icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Logistics (DDP)</h3>
<p className="text-sm text-slate-500 mb-4">We handle customs, duties, and insurance. Zero headaches.</p>
<div className="pt-4 border-t border-slate-100">
<p className="text-xs text-slate-400 font-mono">
                            Global Coverage
                        </p>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-DEFAULT hover:text-emerald-dark transition-colors group" href="/services.html">
                    View all 7 services
                    <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 bg-emerald-50/20 border-y border-slate-200" id="standards">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Quality &amp; Ethics Guaranteed</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        At Factolink, we only work with factories that meet international standards for quality, safety, and ethical practices.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-DEFAULT shrink-0 mt-0.5" icon="solar:verified-check-linear" width="20"></iconify-icon>
<div>
<p className="text-sm font-semibold text-slate-900">ISO 9001 Certified</p>
<p className="text-xs text-slate-500">Quality Management Systems for manufacturing excellence</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-DEFAULT shrink-0 mt-0.5" icon="solar:verified-check-linear" width="20"></iconify-icon>
<div>
<p className="text-sm font-semibold text-slate-900">RJC Certified</p>
<p className="text-xs text-slate-500">Responsible Jewellery Council for ethical sourcing</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-DEFAULT shrink-0 mt-0.5" icon="solar:verified-check-linear" width="20"></iconify-icon>
<div>
<p className="text-sm font-semibold text-slate-900">REACH Compliant (EU)</p>
<p className="text-xs text-slate-500">Chemical regulations for safe jewelry materials</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-DEFAULT shrink-0 mt-0.5" icon="solar:verified-check-linear" width="20"></iconify-icon>
<div>
<p className="text-sm font-semibold text-slate-900">Prop 65 Compliant (US)</p>
<p className="text-xs text-slate-500">California standards for consumer safety</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-DEFAULT shrink-0 mt-0.5" icon="solar:verified-check-linear" width="20"></iconify-icon>
<div>
<p className="text-sm font-semibold text-slate-900">Nickel Release Test &lt;0.05%</p>
<p className="text-xs text-slate-500">Hypoallergenic certification for sensitive skin</p>
</div>
</li>
</ul>
<div className="mt-8 p-4 bg-slate-50 border border-slate-200 rounded-lg">
<p className="text-xs text-slate-600">
<strong className="text-emerald-dark">All certificates provided</strong> with each shipment for full traceability and compliance.
                        </p>
</div>
</div>

<div>

<div className="h-80 w-full bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 text-sm border border-slate-200 mb-6">
                        [Photo: Certificats ISO/RJC empilés ou ligne de production moderne]
                    </div>
<div className="grid grid-cols-5 gap-4">
<div className="aspect-square bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-slate-400">ISO</div>
<div className="aspect-square bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-slate-400">RJC</div>
<div className="aspect-square bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-slate-400">REACH</div>
<div className="aspect-square bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-slate-400">P65</div>
<div className="aspect-square bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center text-xs font-mono font-bold text-slate-400">Ni&lt;</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center md:text-left">
<div className="flex flex-col items-center text-center">
<div className="inline-block p-3 bg-emerald-50 rounded-full text-emerald-DEFAULT mb-4">
<iconify-icon icon="solar:leaf-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-6">Ethical Production Matters</h2>
<p className="text-lg text-slate-500 max-w-2xl leading-relaxed mb-10">
                    At Factolink, we believe jewelry should be beautiful and responsibly made. That's why we carefully vet every factory partner for ethical practices and sustainable operations.
                </p>
</div>
<div className="max-w-2xl mx-auto">
<div className="flex items-center gap-2 mb-4 text-emerald-dark font-medium">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
<h3>Our commitments</h3>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-DEFAULT shrink-0 mt-1" icon="solar:verified-check-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600">All factories guarantee <strong>fair wages and safe working conditions</strong> (ILO standards)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-DEFAULT shrink-0 mt-1" icon="solar:verified-check-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600">We prioritize <strong>traceable materials</strong>: recycled metals, conflict-free gemstones</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-DEFAULT shrink-0 mt-1" icon="solar:verified-check-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Long-term partnerships</strong> with manufacturers (5+ years average relationship)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-DEFAULT shrink-0 mt-1" icon="solar:verified-check-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Regular audits</strong> to ensure compliance with international labor and environmental standards</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-DEFAULT shrink-0 mt-1" icon="solar:verified-check-linear" width="18"></iconify-icon>
<span className="text-sm text-slate-600"><strong>Waste reduction programs</strong> in partner factories (metal recycling, water treatment)</span>
</li>
</ul>
<div className="bg-emerald-50 border-l-4 border-emerald-DEFAULT p-6 rounded-r-lg">
<p className="text-sm text-slate-700 leading-relaxed">
<strong className="text-emerald-dark">Our promise:</strong> We're not perfect, but we're committed to continuous improvement. Every project is an opportunity to raise the bar for ethical jewelry production in Asia. We report transparently on our progress and challenges.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Your Bridge Between Markets &amp; Manufacturers</h2>
<p className="text-slate-500 max-w-2xl mx-auto mb-10">
                We connect creators in developed markets with vetted factories across Asia, with Amy coordinating everything from our Bangkok hub.
            </p>
<div className="relative w-full h-96 bg-white border border-slate-200 rounded-xl mb-12 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-50"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl px-6">

<div className="text-left md:text-center">
<h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Clients</h4>
<div className="text-sm text-slate-500 space-y-1">
<p>🇪🇺 Europe</p>
<p>🇺🇸 United States</p>
<p>🇦🇪 Middle East</p>
<p>🇸🇬 Singapore</p>
<p>🇭🇰 Hong Kong</p>
</div>
</div>

<div className="text-left md:text-center p-4 bg-emerald-50 rounded-lg border border-emerald-100">
<h4 className="text-sm font-bold text-emerald-800 mb-2 uppercase tracking-wide">HUB</h4>
<div className="text-sm text-emerald-700 font-medium">
<p>📍 Bangkok, Thailand</p>
<p className="mt-2 text-xs opacity-80">Amy's HQ + QC Workshop</p>
</div>
</div>

<div className="text-left md:text-center">
<h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">Factories</h4>
<div className="text-sm text-slate-500 space-y-1">
<p>🇨🇳 China</p>
<p>🇹🇭 Thailand</p>
<p>🇻🇳 Vietnam</p>
<p>🇹🇷 Turkey</p>
<p>🇮🇳 India</p>
<p>🇮🇩 Indonesia</p>
</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4 text-center max-w-3xl mx-auto">
<div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
<p className="text-2xl font-semibold text-emerald-dark mb-1">→</p>
<p className="text-xs text-slate-600">Clients send designs to Amy</p>
</div>
<div className="p-4 bg-emerald-DEFAULT text-white rounded-lg shadow-md shadow-emerald-500/20">
<p className="text-2xl font-semibold mb-1">✓</p>
<p className="text-xs text-white/90">Amy coordinates with factories</p>
</div>
<div className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
<p className="text-2xl font-semibold text-emerald-dark mb-1">←</p>
<p className="text-xs text-slate-600">QC'd jewelry delivered worldwide</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Brands We've Launched</h2>
<p className="text-slate-500 max-w-xl mx-auto">Real projects, real results. See how we helped creators bring their vision to life.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
<div className="h-64 w-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
                        [Photo: Collier minimaliste or]
                    </div>
<div className="p-6">
<span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full">LUMIÈRE</span>
<div className="space-y-3 mb-6">
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Challenge</p>
<p className="text-sm text-slate-700">French creator, first collection, €8k budget</p>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Solution</p>
<p className="text-sm text-slate-700">50 MOQ, 3 models (necklace, bracelet, earrings), Thailand production</p>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Result</p>
<p className="text-sm font-medium text-emerald-dark">Sell-out in 6 weeks. 2nd order ×3 volume.</p>
</div>
</div>
<blockquote className="pl-4 border-l-4 border-emerald-DEFAULT text-xs italic text-slate-500">
                            "Amy made the impossible possible. I launched with confidence."
                            <footer className="mt-1 font-semibold not-italic text-slate-700">— Sophie M., Founder LUMIÈRE</footer>
</blockquote>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
<div className="h-64 w-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
                        [Photo: Bague argent avec pierres semi-précieuses]
                    </div>
<div className="p-6">
<span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full">AETHER</span>
<div className="space-y-3 mb-6">
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Challenge</p>
<p className="text-sm text-slate-700">US brand expanding into semi-precious stones</p>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Solution</p>
<p className="text-sm text-slate-700">Vietnam sourcing, gemstone certification, 100 MOQ</p>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Result</p>
<p className="text-sm font-medium text-emerald-dark">Zero customs issues. 15% cost savings vs previous supplier.</p>
</div>
</div>
<blockquote className="pl-4 border-l-4 border-emerald-DEFAULT text-xs italic text-slate-500">
                            "Professional, transparent, and reliable. Exactly what we needed."
                            <footer className="mt-1 font-semibold not-italic text-slate-700">— David K., AETHER Jewelry</footer>
</blockquote>
</div>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
<div className="h-64 w-full bg-slate-200 flex items-center justify-center text-slate-400 text-xs">
                        [Photo: Bracelet layering doré]
                    </div>
<div className="p-6">
<span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-full">NOVA</span>
<div className="space-y-3 mb-6">
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Challenge</p>
<p className="text-sm text-slate-700">Test new design line before full investment</p>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Solution</p>
<p className="text-sm text-slate-700">50 MOQ mixed models, rapid sampling (2 weeks)</p>
</div>
<div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Result</p>
<p className="text-sm font-medium text-emerald-dark">Market validation in 3 months. Scaled to 500 units.</p>
</div>
</div>
<blockquote className="pl-4 border-l-4 border-emerald-DEFAULT text-xs italic text-slate-500">
                            "The low MOQ saved us from a costly mistake. Now it's our bestseller."
                            <footer className="mt-1 font-semibold not-italic text-slate-700">— Clara V., Creative Director NOVA</footer>
</blockquote>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-emerald-50/20 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Trusted by Creators Worldwide</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-xl border border-slate-200">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-dark font-semibold flex items-center justify-center text-sm">ML</div>
<div>
<p className="text-sm font-bold text-slate-900">Marie L.</p>
<p className="text-xs text-slate-500">Fine Jewelry Designer, Paris</p>
</div>
</div>
<p className="text-sm text-slate-600 italic">"Amy is a lifesaver. She caught a production error before shipping that would have cost me €5k. Her eye for detail is unmatched."</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-dark font-semibold flex items-center justify-center text-sm">JR</div>
<div>
<p className="text-sm font-bold text-slate-900">James R.</p>
<p className="text-xs text-slate-500">Founder, ONYX Collective, London</p>
</div>
</div>
<p className="text-sm text-slate-600 italic">"We tried 3 agents before Factolink. Amy's the only one who actually visited factories and sent us real production photos. Total transparency."</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-dark font-semibold flex items-center justify-center text-sm">NK</div>
<div>
<p className="text-sm font-bold text-slate-900">Nadia K.</p>
<p className="text-xs text-slate-500">Creative Director, Belgium</p>
</div>
</div>
<p className="text-sm text-slate-600 italic">"The double QC process is worth every cent. We received 200 pieces, zero defects. Our customers are thrilled."</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-dark font-semibold flex items-center justify-center text-sm">LP</div>
<div>
<p className="text-sm font-bold text-slate-900">Lucas P.</p>
<p className="text-xs text-slate-500">Startup Jewelry Brand, Netherlands</p>
</div>
</div>
<p className="text-sm text-slate-600 italic">"Starting with 50 pieces was a game-changer. We validated our design before investing big. Now we're at 500/month."</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-dark font-semibold flex items-center justify-center text-sm">ST</div>
<div>
<p className="text-sm font-bold text-slate-900">Sarah T.</p>
<p className="text-xs text-slate-500">E-commerce Jewelry, Singapore</p>
</div>
</div>
<p className="text-sm text-slate-600 italic">"Amy negotiated a 20% better price than I could alone, AND got us faster delivery. She knows the Asian market inside out."</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-dark font-semibold flex items-center justify-center text-sm">TH</div>
<div>
<p className="text-sm font-bold text-slate-900">Tom H.</p>
<p className="text-xs text-slate-500">Accessories Brand, New York</p>
</div>
</div>
<p className="text-sm text-slate-600 italic">"Best decision for our brand. Amy's network saved us 6 months of trial and error. Professional, responsive, trustworthy."</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 text-white relative overflow-hidden" id="resources">
<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-emerald-700 blur-[120px]"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-emerald-800 blur-[120px]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6">Launch with Confidence</h2>
<p className="text-emerald-100/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
                Download our free guide on the 10 fatal mistakes brands make when producing jewelry in Asia.
            </p>
<button className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white border border-emerald-700 bg-emerald-900/50 backdrop-blur rounded-lg hover:bg-emerald-900 transition-colors" onclick="document.getElementById('guide-modal').showModal()">
<iconify-icon icon="solar:file-download-linear" width="20"></iconify-icon>
                Get the Free PDF Guide
            </button>
<p className="text-xs text-emerald-200/50 mt-6">
                No spam. Just actionable insights from 8 years of Asian manufacturing.
            </p>
</div>
</section>

<section className="py-20 bg-white" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-10">
<div className="inline-block p-2 bg-emerald-50 rounded-lg text-emerald-DEFAULT mb-4">
<iconify-icon icon="solar:chat-line-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Let's discuss your project</h2>
<p className="text-slate-500 text-sm">Fill out the form below. We usually reply within 2 hours.</p>
</div>

<div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 flex items-start gap-3">
<iconify-icon className="text-amber-600 mt-0.5 shrink-0" icon="solar:bell-linear"></iconify-icon>
<p className="text-xs text-amber-900 font-medium leading-snug">
                    ⚡  Book a call this week to get a free factory audit assessment (Value: $500).
                </p>
</div>
<form action="https://cal.com/factolink" className="space-y-5" method="GET">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700" htmlFor="email">Work Email</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm" id="email" name="email" placeholder="jane@brand.com" required="" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700" htmlFor="phone">Phone (optional)</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm" id="phone" name="phone" placeholder="+33 6 99 66 21 37" type="tel"/>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700" htmlFor="type">Project Type</label>
<select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm custom-select" id="type" name="type">
<option>New Collection</option>
<option>Test Project</option>
<option>Brand Expansion</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700" htmlFor="budget">Budget</label>
<select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm custom-select" id="budget" name="budget">
<option>€5k - €10k</option>
<option>€10k - €25k</option>
<option>€25k+</option>
</select>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-sm resize-none" id="message" name="message" placeholder="Briefly describe your vision..." rows="3"></textarea>
</div>
<button className="w-full py-3.5 text-sm font-semibold text-white bg-emerald-DEFAULT rounded-lg hover:bg-emerald-dark transition-colors shadow-lg shadow-emerald-500/20 transform active:scale-[0.99] duration-150" type="submit">
                    Get My Free Consultation →
                </button>
<p className="text-xs text-center text-slate-400 mt-3">
                    ✓ No spam  ✓ 30-min discovery call  ✓ Response within 24h
                </p>
</form>
<div className="mt-8 text-center border-t border-slate-100 pt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-emerald-DEFAULT hover:text-emerald-dark bg-emerald-50/50 hover:bg-emerald-50 px-5 py-2.5 rounded-full transition-colors" href="https://wa.me/33699662137">
<iconify-icon icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
                    Chat on WhatsApp instead
                </a>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-24 md:pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-slate-900 uppercase mb-4" href="#">
<div className="w-2 h-2 rounded-full bg-emerald-DEFAULT"></div>
                        Factolink
                    </a>
<p className="text-sm text-slate-500 max-w-xs mb-6">Your local partner in Asia for seamless jewelry production.</p>
<p className="text-xs text-slate-400 mt-4">
                        📧 hello@factolink.com<br/>
                        📱 +33 6 99 66 21 37 (WhatsApp)
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-DEFAULT transition-colors" href="#process">Sourcing</a></li>
<li><a className="hover:text-emerald-DEFAULT transition-colors" href="#services">Manufacturing</a></li>
<li><a className="hover:text-emerald-DEFAULT transition-colors" href="#services">Logistics</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-emerald-DEFAULT transition-colors" href="#">About</a></li>
<li><a className="hover:text-emerald-DEFAULT transition-colors" href="/blog/index.html">Blog</a></li>
<li><a className="hover:text-emerald-DEFAULT transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-emerald-DEFAULT transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2025 Factolink.</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-emerald-DEFAULT transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
<a className="hover:text-emerald-DEFAULT transition-colors" href="#"><iconify-icon icon="solar:phone-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<dialog className="p-0 rounded-2xl shadow-2xl backdrop:bg-slate-900/50 backdrop:backdrop-blur-sm bg-transparent open:animate-fade-in" id="guide-modal">
<div className="bg-white p-8 max-w-sm w-full rounded-2xl border border-slate-200 relative">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-900" onclick="document.getElementById('guide-modal').close()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="text-center mb-6">
<div className="w-12 h-12 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900">The 10 Fatal Mistakes</h3>
<p className="text-sm text-slate-500 mt-2">Where should we send the PDF checklist?</p>
</div>
<form className="space-y-4">
<input className="w-full px-4 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500" placeholder="Enter your email" type="email"/>
<button className="w-full py-2.5 bg-emerald-DEFAULT text-white text-sm font-medium rounded-lg hover:bg-emerald-dark">Send me the Guide</button>
</form>
</div>
</dialog>


    </>
  );
}
