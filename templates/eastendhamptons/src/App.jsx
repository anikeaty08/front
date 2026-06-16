import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
emerald: {
850: '#064e3b',
950: '#022c22',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/90 backdrop-blur-md border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="group flex flex-col justify-center" href="#">
<span className="font-serif text-xl tracking-tight text-emerald-950 font-medium group-hover:opacity-80 transition-opacity">EAST END</span>
<span className="text-[0.65rem] tracking-[0.2em] uppercase text-slate-500">Hamptons</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-emerald-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-900 transition-colors" href="#process">Our Process</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-900 transition-colors" href="#realtors">Realtor Partners</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-900 transition-colors" href="#projects">Portfolio</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:block text-xs font-medium uppercase tracking-wider text-emerald-900 hover:underline" href="#login">Partner Login</a>
<a className="bg-emerald-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20" href="#contact">
                        Get a Quote
                    </a>
</div>
</div>
</div>
</nav>

<header className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Hamptons Home" className="w-full h-full object-cover brightness-[0.65] scale-105 animate-slow-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white mt-16">
<span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-widest uppercase mb-6 bg-white/10 backdrop-blur-sm">Suffolk County's Premier Team</span>
<h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-6 leading-[1.1]">
                Building Quality. <br/> <span className="italic text-emerald-100">Building Trust.</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light mb-10 leading-relaxed">
                The complete luxury home services team for the Hamptons. Specialized in painting, remodeling, and estate management.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-emerald-950 font-medium hover:bg-slate-100 transition-colors min-w-[180px]">
                    Get a Free Quote
                </button>
<button className="w-full sm:w-auto px-8 py-3.5 border border-white/40 text-white font-medium hover:bg-white/10 backdrop-blur-sm transition-colors min-w-[180px] flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:key" data-width="18"></span>
                    Realtor Partner Login
                </button>
</div>
</div>
</header>

<section className="py-24 bg-white overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">Masterfully Crafted Services</h2>
<p className="text-slate-500 max-w-md">White-glove service for every corner of your estate, from manicured exteriors to refined interiors.</p>
</div>
<div className="flex gap-2">
<button className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<button className="p-3 border border-slate-200 rounded-full hover:bg-slate-50 text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>

<div className="flex overflow-x-auto hide-scroll pb-12 px-6 gap-6 snap-x snap-mandatory lg:justify-center">

<div className="group relative min-w-[300px] w-[350px] h-[450px] flex-shrink-0 snap-center rounded-none overflow-hidden cursor-pointer">
<img alt="Painting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-3 mb-2 text-emerald-400">
<span className="iconify" data-icon="lucide:paint-brush" data-width="24"></span>
</div>
<h3 className="text-2xl font-serif text-white mb-2 tracking-tight">Painting</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
<p className="text-sm text-slate-300 leading-relaxed mb-4">Flawless interior &amp; exterior finishes. High-gloss lacquer, cabinetry refinishing, and historic restoration.</p>
<span className="text-xs font-medium text-white uppercase tracking-wider flex items-center gap-2">
                            Explore Service <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</div>
</div>
</div>

<div className="group relative min-w-[300px] w-[350px] h-[450px] flex-shrink-0 snap-center rounded-none overflow-hidden cursor-pointer">
<img alt="Remodeling" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-3 mb-2 text-emerald-400">
<span className="iconify" data-icon="lucide:hammer" data-width="24"></span>
</div>
<h3 className="text-2xl font-serif text-white mb-2 tracking-tight">Remodeling</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
<p className="text-sm text-slate-300 leading-relaxed mb-4">Luxury kitchen &amp; bath renovations. Custom millwork and structural modifications.</p>
<span className="text-xs font-medium text-white uppercase tracking-wider flex items-center gap-2">
                            Explore Service <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</div>
</div>
</div>

<div className="group relative min-w-[300px] w-[350px] h-[450px] flex-shrink-0 snap-center rounded-none overflow-hidden cursor-pointer">
<img alt="Power Washing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-3 mb-2 text-emerald-400">
<span className="iconify" data-icon="lucide:droplets" data-width="24"></span>
</div>
<h3 className="text-2xl font-serif text-white mb-2 tracking-tight">Power Washing</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
<p className="text-sm text-slate-300 leading-relaxed mb-4">Soft wash technology for cedar shake, roofing, and delicate stonework restoration.</p>
<span className="text-xs font-medium text-white uppercase tracking-wider flex items-center gap-2">
                            Explore Service <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</div>
</div>
</div>

<div className="group relative min-w-[300px] w-[350px] h-[450px] flex-shrink-0 snap-center rounded-none overflow-hidden cursor-pointer">
<img alt="Management" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex items-center gap-3 mb-2 text-emerald-400">
<span className="iconify" data-icon="lucide:clipboard-check" data-width="24"></span>
</div>
<h3 className="text-2xl font-serif text-white mb-2 tracking-tight">Property Management</h3>
<div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
<p className="text-sm text-slate-300 leading-relaxed mb-4">Complete absentee owner care. Weekly inspections, vendor coordination, and storm prep.</p>
<span className="text-xs font-medium text-white uppercase tracking-wider flex items-center gap-2">
                            Explore Service <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl text-slate-900 tracking-tight mb-4">The East End Standard</h2>
<p className="text-slate-500">We don't just work on homes; we preserve investments. Our "White-Glove" guarantee ensures punctuality, cleanliness, and perfection.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-emerald-900" data-icon="lucide:shield-check" data-width="80"></span>
</div>
<div className="w-12 h-12 bg-emerald-50 text-emerald-900 flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Licensed &amp; Insured</h3>
<p className="text-sm text-slate-500 leading-relaxed">Full liability coverage and proper licensing for Suffolk County. Your property is protected at every step.</p>
</div>

<div className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-emerald-900" data-icon="lucide:file-text" data-width="80"></span>
</div>
<div className="w-12 h-12 bg-emerald-50 text-emerald-900 flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:file-text" data-width="24"></span>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Transparent Proposals</h3>
<p className="text-sm text-slate-500 leading-relaxed">Detailed, itemized quotes with no hidden fees. We believe in fair, competitive pricing for premium work.</p>
</div>

<div className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="iconify text-emerald-900" data-icon="lucide:clock" data-width="80"></span>
</div>
<div className="w-12 h-12 bg-emerald-50 text-emerald-900 flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:clock" data-width="24"></span>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-3">Professional &amp; Punctual</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our uniformed team runs like a well-oiled machine. We respect your time and your privacy.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<span className="text-emerald-800 font-semibold text-xs tracking-widest uppercase mb-2 block">Visual Proof</span>
<h2 className="font-serif text-4xl text-slate-900 tracking-tight mb-6">Transforming the Hamptons, One Estate at a Time.</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                    From cedar restoration to full kitchen remodels, witness the difference of East End Hamptons craftsmanship. Drag the slider to see the restoration detail.
                </p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div>
<h4 className="font-serif text-lg text-slate-900 mb-1">Kitchen Remodel</h4>
<p className="text-xs text-slate-400">Southampton, NY</p>
</div>
<div className="text-right">
<h4 className="font-serif text-lg text-slate-900 mb-1">4 Weeks</h4>
<p className="text-xs text-slate-400">Project Duration</p>
</div>
</div>
<a className="inline-flex items-center text-emerald-900 font-medium hover:text-emerald-700" href="#portfolio">
                    View Full Gallery <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="lg:w-1/2 w-full relative h-[400px] shadow-2xl shadow-emerald-900/10 select-none overflow-hidden group">

<img alt="After Kitchen" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 z-20">AFTER</div>

<div className="absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white z-10" style={{width: '50%'}}>
<img alt="Before Kitchen" className="absolute inset-0 w-[200%] h-full max-w-none object-cover" src="https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{left: '0'}}/>
<div className="absolute top-4 left-4 bg-black/70 px-3 py-1 text-xs font-bold text-white">BEFORE</div>
</div>

<div className="slider-handle">
<div className="slider-button">
<span className="iconify text-emerald-900" data-icon="lucide:move-horizontal" data-width="20"></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 relative overflow-hidden" id="realtors">

<div className="absolute top-0 right-0 opacity-10">
<svg fill="none" height="400" viewbox="0 0 100 100" width="400" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="0" r="50" stroke="white" strokeWidth="0.5"></circle>
<circle cx="100" cy="0" r="70" stroke="white" strokeWidth="0.5"></circle>
<circle cx="100" cy="0" r="90" stroke="white" strokeWidth="0.5"></circle>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-800 bg-emerald-900/50 text-emerald-100 text-xs tracking-wider uppercase mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Realtor Partner Program
                    </div>
<h2 className="font-serif text-4xl text-white tracking-tight mb-6">Partner with Confidence. Sell with Speed.</h2>
<p className="text-emerald-100/80 mb-8 leading-relaxed max-w-lg">
                        We understand that in real estate, time is money. Our partner program offers priority scheduling for urgent pre-listing projects and exclusive benefits.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-4">
<div className="mt-1 bg-emerald-800 p-1 rounded">
<span className="iconify text-emerald-200" data-icon="lucide:percent" data-width="16"></span>
</div>
<div>
<h4 className="text-white font-medium">10% Courtesy Discount</h4>
<p className="text-sm text-emerald-200/60">Pass the savings to your client or use it for staging budget.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-emerald-800 p-1 rounded">
<span className="iconify text-emerald-200" data-icon="lucide:zap" data-width="16"></span>
</div>
<div>
<h4 className="text-white font-medium">Fast-Track Service</h4>
<p className="text-sm text-emerald-200/60">Priority scheduling for "Coming Soon" listings.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-emerald-800 p-1 rounded">
<span className="iconify text-emerald-200" data-icon="lucide:briefcase" data-width="16"></span>
</div>
<div>
<h4 className="text-white font-medium">Co-Branded Materials</h4>
<p className="text-sm text-emerald-200/60">Professional flyers showcasing the home's potential improvements.</p>
</div>
</li>
</ul>
</div>
<div className="bg-white p-8 rounded-sm shadow-2xl max-w-md w-full ml-auto">
<h3 className="font-serif text-2xl text-slate-900 mb-2">Join the Partner Network</h3>
<p className="text-sm text-slate-500 mb-6">Register to receive your unique referral code.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Agency / Brokerage</label>
<input className="w-full bg-slate-50 border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all" type="email"/>
</div>
<button className="w-full bg-emerald-900 text-white py-3 text-sm font-medium hover:bg-emerald-800 transition-colors mt-2">
                            Request Partner Code
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl text-slate-900 tracking-tight">Meet the Leadership</h2>
<p className="text-slate-500 mt-4 max-w-xl mx-auto">Structured for success. From Finance to Field Management, our specialized departments ensure your project stays on track.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group">
<div className="aspect-[4/5] bg-slate-200 mb-4 overflow-hidden relative">
<img alt="Steven" className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-lg text-slate-900">Steven</h4>
<p className="text-xs font-medium text-emerald-800 uppercase tracking-widest mt-1">Founder &amp; CEO</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-slate-200 mb-4 overflow-hidden relative">
<img alt="Katie" className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-lg text-slate-900">Katie</h4>
<p className="text-xs font-medium text-emerald-800 uppercase tracking-widest mt-1">Head of Finance</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-slate-200 mb-4 overflow-hidden relative">
<img alt="Ricardo" className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-lg text-slate-900">Ricardo</h4>
<p className="text-xs font-medium text-emerald-800 uppercase tracking-widest mt-1">Field Operations</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-slate-200 mb-4 overflow-hidden relative">
<img alt="Anthony" className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="font-serif text-lg text-slate-900">Anthony</h4>
<p className="text-xs font-medium text-emerald-800 uppercase tracking-widest mt-1">Sales Director</p>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-200" id="contact">
<div className="grid lg:grid-cols-2">

<div className="px-6 py-20 lg:p-24 flex flex-col justify-center">
<h2 className="font-serif text-3xl text-slate-900 tracking-tight mb-2">Let's Discuss Your Project</h2>
<p className="text-slate-500 mb-10">Fill out the details below for a preliminary estimate. We typically respond within 2 hours.</p>
<form className="space-y-6">
<div>
<label className="block text-sm font-medium text-slate-900 mb-2">What service do you need?</label>
<div className="grid grid-cols-2 gap-3">
<label className="border border-slate-200 p-4 cursor-pointer hover:border-emerald-900 hover:bg-emerald-50 transition-all group rounded-sm">
<input className="hidden peer" name="service" type="radio"/>
<div className="flex flex-col items-center text-center peer-checked:text-emerald-900">
<span className="iconify text-slate-400 group-hover:text-emerald-900 mb-2" data-icon="lucide:paint-brush" data-width="24"></span>
<span className="text-sm font-medium">Painting</span>
</div>
</label>
<label className="border border-slate-200 p-4 cursor-pointer hover:border-emerald-900 hover:bg-emerald-50 transition-all group rounded-sm">
<input className="hidden peer" name="service" type="radio"/>
<div className="flex flex-col items-center text-center peer-checked:text-emerald-900">
<span className="iconify text-slate-400 group-hover:text-emerald-900 mb-2" data-icon="lucide:hammer" data-width="24"></span>
<span className="text-sm font-medium">Remodeling</span>
</div>
</label>
<label className="border border-slate-200 p-4 cursor-pointer hover:border-emerald-900 hover:bg-emerald-50 transition-all group rounded-sm">
<input className="hidden peer" name="service" type="radio"/>
<div className="flex flex-col items-center text-center peer-checked:text-emerald-900">
<span className="iconify text-slate-400 group-hover:text-emerald-900 mb-2" data-icon="lucide:droplets" data-width="24"></span>
<span className="text-sm font-medium">Power Wash</span>
</div>
</label>
<label className="border border-slate-200 p-4 cursor-pointer hover:border-emerald-900 hover:bg-emerald-50 transition-all group rounded-sm">
<input className="hidden peer" name="service" type="radio"/>
<div className="flex flex-col items-center text-center peer-checked:text-emerald-900">
<span className="iconify text-slate-400 group-hover:text-emerald-900 mb-2" data-icon="lucide:home" data-width="24"></span>
<span className="text-sm font-medium">Management</span>
</div>
</label>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
<input className="w-full border-b border-slate-300 py-2 text-slate-900 focus:outline-none focus:border-emerald-900 transition-colors bg-transparent" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
<input className="w-full border-b border-slate-300 py-2 text-slate-900 focus:outline-none focus:border-emerald-900 transition-colors bg-transparent" placeholder="(631) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Property Location</label>
<select className="w-full border-b border-slate-300 py-2 text-slate-900 focus:outline-none focus:border-emerald-900 bg-transparent">
<option>Select Town...</option>
<option>Southampton</option>
<option>East Hampton</option>
<option>Bridgehampton</option>
<option>Sag Harbor</option>
<option>Westhampton Beach</option>
<option>Montauk</option>
<option>Other Suffolk County</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
<textarea className="w-full border border-slate-300 p-3 text-slate-900 focus:outline-none focus:border-emerald-900 focus:ring-1 focus:ring-emerald-900 transition-all bg-slate-50 rounded-sm" placeholder="Tell us about the scope of work..." rows="3"></textarea>
</div>
<button className="w-full bg-emerald-900 text-white py-4 text-sm font-semibold tracking-wide uppercase hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/20">
                        Submit Inquiry
                    </button>
</form>
</div>

<div className="bg-slate-100 relative min-h-[400px] lg:min-h-full flex flex-col items-center justify-center p-12 text-center">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/USA_New_York_Suffolk_County_location_map.svg/1200px-USA_New_York_Suffolk_County_location_map.svg.png\')', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)'}}></div>
<div className="relative z-10 bg-white p-8 shadow-xl max-w-sm w-full border border-slate-100">
<div className="mb-6">
<span className="iconify text-emerald-900 mx-auto" data-icon="lucide:map-pin" data-width="32"></span>
</div>
<h3 className="font-serif text-xl text-slate-900 mb-2">Serving the East End</h3>
<p className="text-sm text-slate-500 mb-6">From Manorville to Montauk, we cover all of Suffolk County's luxury estates.</p>
<div className="space-y-4 border-t border-slate-100 pt-6">
<div className="flex items-center justify-center gap-3">
<span className="iconify text-emerald-800" data-icon="lucide:phone" data-width="18"></span>
<a className="text-slate-900 font-medium hover:text-emerald-900" href="tel:6316576260">631-657-6260</a>
</div>
<div className="flex items-center justify-center gap-3">
<span className="iconify text-emerald-800" data-icon="lucide:mail" data-width="18"></span>
<a className="text-slate-900 font-medium hover:text-emerald-900" href="mailto:info@eastendhamptons.com">info@eastendhamptons.com</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="font-serif text-lg text-white tracking-tight">EAST END HAMPTONS</span>
<p className="text-xs mt-4 leading-relaxed">Premier home services delivering craftsmanship, reliability, and trust to Long Island's most prestigious communities.</p>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-4">Services</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Interior Painting</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Kitchen Remodeling</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Cedar Cleaning</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Estate Management</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-4">Company</h5>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Realtor Partners</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h5 className="text-white text-sm font-medium mb-4">Service Area</h5>
<ul className="space-y-2 text-sm">
<li>Southampton</li>
<li>East Hampton</li>
<li>Sag Harbor</li>
<li>Westhampton</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2023 East End Hamptons. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-emerald-900 text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-800 transition-transform hover:scale-110 cursor-pointer border-2 border-white/20" href="tel:6316576260">
<span className="iconify" data-icon="lucide:phone" data-width="24"></span>
</a>

    </>
  );
}
