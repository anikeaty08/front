import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-base font-semibold tracking-tight text-zinc-900">Naseer <span className="text-zinc-400 font-normal">Paper Mills</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#products">Products</a>
<a className="hover:text-zinc-900 transition-colors" href="#sustainability">Sustainability</a>
<a className="hover:text-zinc-900 transition-colors" href="#global">Global Trade</a>
<a className="hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
<button className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2">
                Inquire Now
                <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden paper-texture">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    ISO 9001:2015 Certified Manufacturer
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-zinc-900">
                    Engineered for <br/>
<span className="text-zinc-400">Strength &amp; Scale.</span>
</h1>
<p className="text-lg lg:text-xl text-zinc-500 leading-relaxed max-w-lg mb-8">
                    Pakistan's leading manufacturer of high-performance Kraft paper. 100% recycled materials designed for corrugated packaging and industrial resilience.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-zinc-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2">
                        View Products
                        <i className="w-4 h-4" data-lucide="package"></i>
</button>
<button className="bg-white border border-zinc-200 text-zinc-700 px-6 py-3 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
                        Supply Chain Data
                        <i className="w-4 h-4" data-lucide="bar-chart-3"></i>
</button>
</div>
</div>
<div className="relative reveal stagger-2">
<div className="aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-2xl relative">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628131336045-21d782046465?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale-[20%] sepia-[15%]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur rounded-xl border border-white/20 shadow-lg">
<div className="flex justify-between items-end">
<div>
<p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-1">Featured Product</p>
<h3 className="text-zinc-900 font-semibold">Naseer Kraft Liner</h3>
</div>
<div className="h-8 w-8 rounded-full bg-orange-600 flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-12 -right-12 w-64 h-64 bg-orange-200/30 rounded-full blur-3xl"></div>
<div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-zinc-300/30 rounded-full blur-3xl"></div>
</div>
</div>
</header>

<section className="py-12 border-y border-zinc-200 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center justify-center gap-3">
<i className="w-6 h-6 text-zinc-800" data-lucide="award"></i>
<span className="font-semibold text-zinc-800">ISO 9001:2015</span>
</div>
<div className="flex items-center justify-center gap-3">
<i className="w-6 h-6 text-green-700" data-lucide="leaf"></i>
<span className="font-semibold text-zinc-800">FSC® Certified</span>
</div>
<div className="flex items-center justify-center gap-3">
<i className="w-6 h-6 text-zinc-800" data-lucide="check-circle"></i>
<span className="font-semibold text-zinc-800">Halal Certified</span>
</div>
<div className="flex items-center justify-center gap-3">
<i className="w-6 h-6 text-blue-700" data-lucide="recycle"></i>
<span className="font-semibold text-zinc-800">100% Recycled</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="sustainability">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl reveal">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">Sustainable production at industrial scale.</h2>
<p className="text-lg text-zinc-500">We transform recycled materials into premium packaging solutions, serving corrugated box manufacturers and textile exporters with unwavering quality.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow reveal stagger-1 group">
<div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="refresh-ccw"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Eco-Friendly Loop</h3>
<p className="text-zinc-500 leading-relaxed">Utilizing 100% recycled waste paper to produce high-grade Kraft liners, reducing environmental footprint.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow reveal stagger-2 group">
<div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="box"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Industrial Strength</h3>
<p className="text-zinc-500 leading-relaxed">Our High-Performance Fluting and Cone Board are engineered for maximum durability in logistics and storage.</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow reveal stagger-3 group">
<div className="w-12 h-12 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="globe-2"></i>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-3">Global Standards</h3>
<p className="text-zinc-500 leading-relaxed">Trusted by textile, FMCG, and agricultural exporters. Compliant with international quality benchmarks.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="products">

<div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Our Core Products</h2>
<p className="text-zinc-400 text-lg max-w-xl">Precision-manufactured paper grades for every packaging need.</p>
</div>
<a className="text-orange-400 hover:text-orange-300 font-medium flex items-center gap-2 transition-colors" href="#">
                    View Full Catalog <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:bg-zinc-800 transition-all reveal stagger-1 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-white" data-lucide="layers"></i>
</div>
<div className="h-40 mb-6 bg-gradient-to-br from-orange-900/40 to-zinc-900 rounded-lg border border-white/5 flex items-center justify-center">

<div className="relative w-20 h-24 bg-[#a88b68] rounded-r-lg shadow-xl flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="absolute -left-4 w-4 h-24 bg-[#8c7354] rounded-l-md skew-y-12 origin-right"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] opacity-30"></div>
</div>
</div>
<h3 className="text-xl font-semibold mb-2">Naseer Kraft Liner</h3>
<p className="text-zinc-400 text-sm mb-4 line-clamp-2">High-strength packaging paper known for durability and printability. Ideal for e-commerce and FMCG.</p>
<ul className="text-xs text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-orange-500" data-lucide="check"></i> High Burst Factor</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-orange-500" data-lucide="check"></i> Smooth Finish</li>
</ul>
</div>

<div className="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:bg-zinc-800 transition-all reveal stagger-2 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-white" data-lucide="package-open"></i>
</div>
<div className="h-40 mb-6 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg border border-white/5 flex items-center justify-center">
<div className="w-32 h-20 bg-[#cbbfae] shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500 flex items-center justify-center">
<span className="text-[10px] text-zinc-600 font-bold tracking-widest uppercase opacity-40">Wrapper</span>
</div>
</div>
<h3 className="text-xl font-semibold mb-2">Wrapper Paper</h3>
<p className="text-zinc-400 text-sm mb-4 line-clamp-2">Versatile Kraft-based paper for protective wrapping. Flexible and durable for retail and industrial use.</p>
<ul className="text-xs text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-orange-500" data-lucide="check"></i> High Tear Resistance</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-orange-500" data-lucide="check"></i> Flexible</li>
</ul>
</div>

<div className="group relative bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-6 hover:bg-zinc-800 transition-all reveal stagger-3 overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<i className="w-24 h-24 text-white" data-lucide="cylinder"></i>
</div>
<div className="h-40 mb-6 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-lg border border-white/5 flex items-center justify-center">
<div className="w-24 h-24 rounded-full border-[12px] border-[#8c6b4a] shadow-2xl group-hover:scale-105 transition-transform duration-500"></div>
</div>
<h3 className="text-xl font-semibold mb-2">Cone Board</h3>
<p className="text-zinc-400 text-sm mb-4 line-clamp-2">Specialized heavy-duty board for textile cones and industrial tubes.</p>
<ul className="text-xs text-zinc-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><i className="w-3 h-3 text-orange-500" data-lucide="check"></i> Maximum Stiffness</li>
<li className="flex items-center gap-2"><i className="w-3 h-3 text-orange-500" data-lucide="check"></i> Textile Industry Standard</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-b border-zinc-200" id="global">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="flex items-center gap-2 text-orange-700 font-medium text-sm mb-4">
<i className="w-4 h-4" data-lucide="network"></i>
<span>Global Connectivity</span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-zinc-900 mb-6">International Supply Chain</h2>
<p className="text-lg text-zinc-500 mb-8">
                        Operating with a robust import-export network. We source premium raw materials globally and export finished goods to key markets in the Middle East.
                    </p>
<div className="space-y-6">
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4">
<div className="p-2 bg-blue-50 text-blue-600 rounded-lg mt-1">
<i className="w-5 h-5" data-lucide="container"></i>
</div>
<div>
<h4 className="font-semibold text-zinc-900">Key Imports</h4>
<p className="text-sm text-zinc-500 mt-1">Sourcing recycled pulp and machinery from <strong>China, Netherlands, USA, Singapore</strong>.</p>
</div>
</div>
<div className="bg-white p-5 rounded-xl border border-zinc-200 shadow-sm flex items-start gap-4">
<div className="p-2 bg-green-50 text-green-600 rounded-lg mt-1">
<i className="w-5 h-5" data-lucide="plane-takeoff"></i>
</div>
<div>
<h4 className="font-semibold text-zinc-900">Export Markets</h4>
<p className="text-sm text-zinc-500 mt-1">Supplying high-grade paper to <strong>Bahrain, United Arab Emirates</strong>, and domestic Pakistan markets.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[400px] bg-white rounded-2xl border border-zinc-200 shadow-xl overflow-hidden reveal stagger-2 flex items-center justify-center p-8">

<div className="absolute inset-0 opacity-5 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center"></div>
<div className="relative z-10 w-full max-w-sm">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest">Trade Volume</span>
<span className="text-xs text-zinc-400">Sample Data</span>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-sm mb-1">
<span className="font-medium text-zinc-700">Import Shipments</span>
<span className="font-mono text-zinc-500">64+</span>
</div>
<div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-[80%] bg-zinc-800 rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-1">
<span className="font-medium text-zinc-700">Suppliers</span>
<span className="font-mono text-zinc-500">32</span>
</div>
<div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full w-[60%] bg-zinc-400 rounded-full"></div>
</div>
</div>
<div className="pt-4 mt-4 border-t border-zinc-100">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<p className="text-xs text-zinc-500">Active trading with Asian &amp; Middle Eastern hubs.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="layers"></i>
</div>
<span className="text-lg font-semibold tracking-tight text-zinc-900">Naseer Paper &amp; Board Mills</span>
</div>
<p className="text-zinc-500 text-sm max-w-sm mb-6">
                        Pioneering sustainable paper manufacturing in Pakistan. Certified quality, global reach.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-zinc-200 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4">Headquarters</h4>
<address className="not-italic text-zinc-500 text-sm leading-relaxed">
                        House No. 306, J-2,<br/>
                        Johar Town, Lahore,<br/>
                        Pakistan.
                    </address>
</div>
<div>
<h4 className="font-semibold text-zinc-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-orange-600 transition-colors" href="#">Inquiry Form</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Sales Department</a></li>
<li className="flex items-center gap-2 mt-4 text-zinc-400 text-xs">
<i className="w-3 h-3" data-lucide="lock"></i> Secure Business Portal
                        </li>
</ul>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400">
<p>© 2024 Naseer Paper &amp; Board Mills Pvt Ltd. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-600" href="#">Privacy Policy</a>
<a className="hover:text-zinc-600" href="#">Terms of Trade</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
