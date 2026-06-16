import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-dark border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center text-slate-950 font-medium text-lg tracking-tighter">N</div>
<span className="text-white font-medium tracking-tight text-lg uppercase letter-spacing-wide">NGT Glass</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-400">
<a className="hover:text-white transition-colors" href="#capabilities">Capabilities</a>
<a className="hover:text-white transition-colors" href="#products">Products</a>
<a className="hover:text-white transition-colors" href="#industries">Industries</a>
<a className="hover:text-white transition-colors" href="#quality">Quality</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
                    Capabilities PDF
                </a>
<a className="bg-white text-slate-950 hover:bg-slate-200 transition-colors px-5 py-2.5 rounded-full text-sm font-medium" href="#rfq">
                    Request Quote
                </a>
</div>
</div>
</header>

<a className="fixed bottom-6 right-6 z-40 bg-slate-800/80 backdrop-blur-md border border-white/10 hover:bg-slate-700 hover:border-white/20 text-white p-4 rounded-full shadow-2xl transition-all group flex items-center gap-3" href="#rfq">
<iconify-icon icon="solar:calculator-minimalistic-linear" width="24"></iconify-icon>
<span className="text-sm font-medium pr-2 hidden group-hover:block whitespace-nowrap">Start RFQ</span>
</a>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center z-10">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-white/10 text-xs font-normal text-slate-300 mb-8 animate-enter">
<span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                    Custom Engineered Glass for Critical Industries
                </div>
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-gradient mb-6 leading-[1.1] animate-enter delay-100">
                    Precision Glass Manufacturing Since 1927.
                </h1>
<p className="text-base md:text-lg text-slate-400 font-light leading-relaxed mb-10 animate-enter delay-200">
                    Custom fabricated technical glass components for aerospace, automotive, medical, and specialty industrial applications. Tolerances engineered to exact specifications.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-enter delay-300">
<a className="w-full sm:w-auto bg-white text-slate-950 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors text-center" href="#rfq">
                        Request a Quote
                    </a>
<a className="w-full sm:w-auto glass-card px-8 py-3.5 rounded-full text-sm font-normal text-white hover:bg-white/5 transition-colors text-center flex items-center justify-center gap-2" href="#capabilities">
                        View Capabilities
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="relative animate-enter delay-200 hidden lg:block">
<div className="aspect-[4/5] rounded-2xl overflow-hidden glass-card p-2 relative">

<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
<img alt="Precision CNC Glass Manufacturing" className="w-full h-full object-cover rounded-xl filter grayscale contrast-125 opacity-80" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 z-20 glass-dark p-6 rounded-xl border border-white/10 flex items-center justify-between">
<div>
<p className="text-xs text-slate-400 font-light mb-1">Dimensional Tolerance</p>
<p className="text-xl font-normal tracking-tight text-white">±0.001"</p>
</div>
<iconify-icon className="text-indigo-400" icon="solar:ruler-cross-pen-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="flex flex-wrap items-center justify-center lg:justify-between gap-8 opacity-60">
<div className="flex items-center gap-3 text-sm font-normal text-slate-400">
<iconify-icon icon="solar:history-linear" width="20"></iconify-icon>
                    Since 1927
                </div>
<div className="flex items-center gap-3 text-sm font-normal text-slate-400">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
                    ISO 9001:2015 Certified
                </div>
<div className="flex items-center gap-3 text-sm font-normal text-slate-400">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
                    Tier 1 OEM Supplier
                </div>
<div className="flex items-center gap-3 text-sm font-normal text-slate-400">
<iconify-icon icon="solar:flag-linear" width="20"></iconify-icon>
                    USA Manufacturing
                </div>
<div className="flex items-center gap-3 text-sm font-normal text-slate-400">
<iconify-icon icon="solar:target-linear" width="20"></iconify-icon>
                    Micro-Precision Tolerances
                </div>
</div>
</div>
</section>

<section className="py-32 relative" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">Engineered Components</h2>
<p className="text-base text-slate-400 font-light">Purpose-built glass solutions designed for extreme environments, optical clarity, and mechanical stability.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group block glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300" href="#">
<div className="aspect-[16/9] overflow-hidden bg-slate-900 relative">
<img alt="Optics" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 grayscale mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-normal text-white mb-2 tracking-tight flex items-center justify-between">
                            Precision Optics &amp; Lenses
                            <iconify-icon className="text-slate-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</h3>
<p className="text-sm text-slate-400 font-light line-clamp-2">Custom ground and polished optics for aerospace instruments, medical devices, and defense applications.</p>
</div>
</a>

<a className="group block glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300" href="#">
<div className="aspect-[16/9] overflow-hidden bg-slate-900 relative">
<img alt="Display" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<h3 className="text-lg font-normal text-white mb-2 tracking-tight flex items-center justify-between">
                            Ruggedized Display Glass
                            <iconify-icon className="text-slate-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</h3>
<p className="text-sm text-slate-400 font-light line-clamp-2">Chemically strengthened, anti-reflective cover glass for industrial HMI, marine, and vehicular displays.</p>
</div>
</a>

<a className="group block glass-card rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300" href="#">
<div className="aspect-[16/9] overflow-hidden bg-slate-900 relative">
<img alt="Gauge" className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 grayscale mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6">
<h3 className="text-lg font-normal text-white mb-2 tracking-tight flex items-center justify-between">
                            Sight Glasses &amp; Gauges
                            <iconify-icon className="text-slate-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</h3>
<p className="text-sm text-slate-400 font-light line-clamp-2">High-pressure, temperature-resistant borosilicate and quartz sight glasses for fluid monitoring.</p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/50 border-y border-white/5" id="industries">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">Critical Applications</h2>
<p className="text-base text-slate-400 font-light">Serving sectors where material failure is not an option. We understand the stringent regulatory and performance requirements of your industry.</p>
</div>
<a className="text-sm font-normal text-white hover:text-slate-300 flex items-center gap-2 pb-2" href="#">
                    View All Industries <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:rocket-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-white mb-1">Aerospace</h4>
<p className="text-xs text-slate-500 font-light">Avionics &amp; lighting</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:wheel-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-white mb-1">Automotive</h4>
<p className="text-xs text-slate-500 font-light">Displays &amp; sensors</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:heart-pulse-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-white mb-1">Medical</h4>
<p className="text-xs text-slate-500 font-light">Imaging &amp; diagnostics</p>
</div>
</div>

<div className="glass-card p-6 rounded-2xl flex flex-col items-start gap-4 hover:bg-white/[0.02] transition-colors">
<div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/10 flex items-center justify-center text-slate-300">
<iconify-icon icon="solar:factory-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-normal text-white mb-1">Industrial</h4>
<p className="text-xs text-slate-500 font-light">Automation &amp; optics</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="capabilities">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16">

<div className="lg:col-span-5">
<div className="sticky top-32">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">Vertical Integration. Complete Control.</h2>
<p className="text-base text-slate-400 font-light mb-10">From raw material sourcing to final inspection, our end-to-end manufacturing capabilities ensure unmatched quality control, faster lead times, and IP protection.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Rapid Prototyping</h4>
<p className="text-xs text-slate-500 font-light">Dedicated engineering cells for fast-turn R&amp;D validation.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Scalable Volume</h4>
<p className="text-xs text-slate-500 font-light">Seamless transition from 10 prototypes to 100,000 production units.</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-white shrink-0 mt-0.5" icon="solar:check-circle-linear" width="24"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Advanced Metrology</h4>
<p className="text-xs text-slate-500 font-light">In-house optical measurement and automated vision inspection.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">

<div className="glass-card p-6 rounded-2xl border border-white/10 group">
<iconify-icon className="text-slate-400 mb-6 group-hover:text-white transition-colors" icon="solar:ruler-angular-linear" width="28"></iconify-icon>
<h3 className="text-base font-normal text-white mb-2">CNC Machining</h3>
<p className="text-sm text-slate-500 font-light">Multi-axis glass milling, drilling, and edging with micron-level precision.</p>
</div>

<div className="glass-card p-6 rounded-2xl border border-white/10 group">
<iconify-icon className="text-slate-400 mb-6 group-hover:text-white transition-colors" icon="solar:flame-linear" width="28"></iconify-icon>
<h3 className="text-base font-normal text-white mb-2">Thermal Tempering</h3>
<p className="text-sm text-slate-500 font-light">Increasing mechanical strength and thermal shock resistance.</p>
</div>

<div className="glass-card p-6 rounded-2xl border border-white/10 group">
<iconify-icon className="text-slate-400 mb-6 group-hover:text-white transition-colors" icon="solar:test-tube-linear" width="28"></iconify-icon>
<h3 className="text-base font-normal text-white mb-2">Chemical Strengthening</h3>
<p className="text-sm text-slate-500 font-light">Ion-exchange processing for ultra-thin display and cover glass.</p>
</div>

<div className="glass-card p-6 rounded-2xl border border-white/10 group">
<iconify-icon className="text-slate-400 mb-6 group-hover:text-white transition-colors" icon="solar:layers-linear" width="28"></iconify-icon>
<h3 className="text-base font-normal text-white mb-2">Optical Coatings</h3>
<p className="text-sm text-slate-500 font-light">Anti-reflective (AR), Anti-glare (AG), and conductive ITO coatings.</p>
</div>

<div className="glass-card p-6 rounded-2xl border border-white/10 group sm:col-span-2">
<iconify-icon className="text-slate-400 mb-6 group-hover:text-white transition-colors" icon="solar:printer-minimalistic-linear" width="28"></iconify-icon>
<h3 className="text-base font-normal text-white mb-2">Precision Screen Printing</h3>
<p className="text-sm text-slate-500 font-light">High-durability ceramic frits and conductive silver inks for borders, fiducials, and integrated circuitry directly on the glass substrate.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950" id="quality">
<div className="max-w-7xl mx-auto px-6">

<div className="glass-card rounded-3xl p-8 md:p-12 mb-24 flex flex-col md:flex-row items-center justify-between gap-8 border-l-4 border-l-white">
<div className="max-w-xl">
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-4">Zero-Defect Culture</h2>
<p className="text-sm text-slate-400 font-light leading-relaxed">Our quality management system is certified to ISO 9001:2015. Every component undergoes rigorous statistical process control and final inspection before leaving our facility.</p>
</div>
<div className="flex flex-col gap-4 min-w-[200px]">
<div className="bg-slate-900 border border-white/10 rounded-lg px-6 py-4 text-center">
<p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Standard</p>
<p className="text-lg font-medium text-white">ISO 9001:2015</p>
</div>
<div className="bg-slate-900 border border-white/10 rounded-lg px-6 py-4 text-center">
<p className="text-xs text-slate-500 uppercase tracking-widest mb-1">ITAR</p>
<p className="text-lg font-medium text-white">Registered</p>
</div>
</div>
</div>

<div className="mb-12">
<h2 className="text-3xl font-normal tracking-tight text-white mb-2">Engineering Success</h2>
<p className="text-base text-slate-400 font-light">How we solve complex material challenges.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-slate-900">
<img alt="Aerospace Case Study" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale" src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-3 items-center mb-3">
<span className="text-xs font-medium text-slate-950 bg-white px-2 py-1 rounded">Aerospace</span>
<span className="text-xs text-slate-500">Cockpit Instrumentation</span>
</div>
<h3 className="text-xl font-normal text-white mb-2 tracking-tight group-hover:text-slate-300 transition-colors">Reducing Glare in High-Altitude Environments</h3>
<p className="text-sm text-slate-400 font-light line-clamp-2">Engineered a custom multi-layer anti-reflective coating stack on chemically strengthened glass to meet rigorous military specifications.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-slate-900">
<img alt="Industrial Case Study" className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale" src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-3 items-center mb-3">
<span className="text-xs font-medium text-slate-950 bg-white px-2 py-1 rounded">Industrial</span>
<span className="text-xs text-slate-500">Harsh Environment HMI</span>
</div>
<h3 className="text-xl font-normal text-white mb-2 tracking-tight group-hover:text-slate-300 transition-colors">Enhancing Impact Resistance by 400%</h3>
<p className="text-sm text-slate-400 font-light line-clamp-2">Replaced standard polycarbonate with a custom thermally tempered borosilicate composite, eliminating chemical degradation issues.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-slate-800 mb-8" icon="solar:quote-left-linear" width="48"></iconify-icon>
<p className="text-xl md:text-3xl font-light text-slate-300 leading-relaxed mb-8">
                "NGT Glass isn't just a supplier; they are an extension of our engineering team. Their ability to hold micro-tolerances on complex geometries has been critical to our product launches."
            </p>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-500 font-medium">J</div>
<div className="text-left">
<p className="text-sm font-medium text-white">VP of Engineering</p>
<p className="text-xs text-slate-500">Tier 1 Automotive OEM</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="rfq">

<div className="absolute inset-0 bg-slate-900"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-800/50 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-6 z-10 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">Ready to engineer your solution?</h2>
<p className="text-base text-slate-400 font-light mb-8">Upload your CAD files or specifications. Our technical team will review your requirements and provide a detailed manufacturing assessment within 24 hours.</p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear" width="20"></iconify-icon> NDA protected file transfer
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear" width="20"></iconify-icon> DFM (Design for Manufacturing) feedback
                    </div>
<div className="flex items-center gap-3 text-sm text-slate-300 font-light">
<iconify-icon className="text-slate-500" icon="solar:check-circle-linear" width="20"></iconify-icon> Transparent pricing &amp; lead times
                    </div>
</div>
</div>

<div className="glass-card p-8 rounded-3xl border border-white/10">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">First Name</label>
<input className="w-full px-4 py-3 rounded-xl text-sm transition-colors" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl text-sm transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Work Email</label>
<input className="w-full px-4 py-3 rounded-xl text-sm transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Application Type</label>
<select className="w-full px-4 py-3 rounded-xl text-sm transition-colors appearance-none cursor-pointer">
<option value="">Select Application</option>
<option value="aerospace">Aerospace / Defense</option>
<option value="automotive">Automotive</option>
<option value="medical">Medical Device</option>
<option value="industrial">Industrial / Other</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1.5">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-xl text-sm transition-colors resize-none" placeholder="Briefly describe tolerances, volume, and material requirements..." rows="4"></textarea>
</div>

<div className="border border-dashed border-white/20 rounded-xl p-6 text-center hover:bg-white/[0.02] transition-colors cursor-pointer group">
<iconify-icon className="text-slate-500 mb-2 group-hover:text-white transition-colors" icon="solar:cloud-upload-linear" width="28"></iconify-icon>
<p className="text-sm font-medium text-white mb-1">Upload CAD or Drawings</p>
<p className="text-xs text-slate-500 font-light">PDF, STEP, IGES up to 50MB</p>
</div>
<button className="w-full bg-white text-slate-950 font-medium py-3.5 rounded-xl text-sm hover:bg-slate-200 transition-colors mt-2" type="button">
                        Submit RFQ
                    </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center text-slate-950 font-medium text-lg tracking-tighter">N</div>
<span className="text-white font-medium tracking-tight text-lg uppercase">NGT Glass</span>
</div>
<p className="text-sm text-slate-500 font-light max-w-xs mb-6">Precision engineered glass components for the world's most demanding applications. Since 1927.</p>
<div className="flex items-center gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Capabilities</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">CNC Machining</a></li>
<li><a className="hover:text-white transition-colors" href="#">Thermal Tempering</a></li>
<li><a className="hover:text-white transition-colors" href="#">Chemical Strengthening</a></li>
<li><a className="hover:text-white transition-colors" href="#">Optical Coatings</a></li>
<li><a className="hover:text-white transition-colors" href="#">Screen Printing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Quality &amp; ISO</a></li>
<li><a className="hover:text-white transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400 font-light">
<li>sales@ngtglass.com</li>
<li>+1 (800) 555-0199</li>
<li className="pt-2">100 Precision Way<br/>Industrial Park, IL 60601</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-light">
<p>© 2026 NGT Glass Manufacturing. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
