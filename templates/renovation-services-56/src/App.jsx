import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showProject() {
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('project-view').classList.remove('hidden');
            window.scrollTo(0, 0);
        }

        function showHome() {
            document.getElementById('project-view').classList.add('hidden');
            document.getElementById('home-view').classList.remove('hidden');
            window.scrollTo(0, 0);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-5 flex justify-between items-center">
<a className="display-font text-2xl font-medium tracking-tight uppercase" href="javascript:showHome()">
                Struktura<span className="text-orange-600">.</span>
</a>
<div className="hidden md:flex space-x-10 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#services" onclick="showHome()">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#projects" onclick="showHome()">Projects</a>
<a className="hover:text-stone-900 transition-colors" href="#process" onclick="showHome()">Process</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide hover:bg-orange-700 transition-colors" href="#contact">
<span>Book Inspection</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</nav>

<main className="view-section" id="home-view">

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-stone-200 rounded-full bg-white">
<span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
<span className="text-xs font-medium text-stone-500 uppercase tracking-wide">Available for Q4 2023 Projects</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] text-stone-900">
                        Concrete <br/>
<span className="text-stone-400">results for</span> <br/>
                        modern living.
                    </h1>
<p className="text-lg md:text-xl text-stone-600 max-w-lg leading-relaxed font-light">
                        We specialize in structural renovation and high-end interior finishing. No shortcuts, just solid craftsmanship and transparent timelines.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="flex justify-center items-center gap-3 bg-orange-600 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-orange-700 transition-colors" href="#contact">
                            Get a Quote
                        </a>
<a className="flex justify-center items-center gap-3 border border-stone-300 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-stone-900 hover:border-stone-900 transition-colors" href="#projects">
                            View Gallery
                        </a>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-[4/5] overflow-hidden bg-stone-200 relative group">
<img alt="Interior renovation detail" className="w-full h-full object-cover smooth-image grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-white p-6 md:p-8 max-w-[80%] border-t border-r border-stone-100">
<p className="display-font text-3xl font-medium text-stone-900">15+</p>
<p className="text-xs text-stone-500 uppercase tracking-wider mt-1">Years of Experience</p>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-stone-200 bg-white">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-2">
<iconify-icon className="text-stone-400" icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Licensed &amp; Insured</h4>
<p className="text-sm text-stone-500">Full coverage for peace of mind.</p>
</div>
<div className="space-y-2">
<iconify-icon className="text-stone-400" icon="solar:calendar-date-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Fixed Deadlines</h4>
<p className="text-sm text-stone-500">We finish when we say we will.</p>
</div>
<div className="space-y-2">
<iconify-icon className="text-stone-400" icon="solar:ruler-pen-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Technical Precision</h4>
<p className="text-sm text-stone-500">Millimeter-perfect execution.</p>
</div>
<div className="space-y-2">
<iconify-icon className="text-stone-400" icon="solar:wallet-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide">Transparent Pricing</h4>
<p className="text-sm text-stone-500">Detailed quotes, no hidden fees.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-orange-600 font-medium tracking-wider uppercase text-xs mb-2 block">Our Expertise</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 max-w-xl">
                        Comprehensive renovation services.
                    </h2>
</div>
<a className="text-stone-900 border-b border-stone-900 pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors text-sm font-medium" href="#contact">Download Service Catalog</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-stone-200">

<div className="group border-r border-b border-stone-200 p-8 md:p-12 hover:bg-white transition-colors cursor-default">
<div className="mb-6 text-stone-400 group-hover:text-orange-600 transition-colors">
<iconify-icon icon="solar:home-angle-linear" strokeWidth="1.2" width="40"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-3">Full Gut Renovations</h3>
<p className="text-stone-500 leading-relaxed mb-6">Complete demolition and reconstruction of interiors. We handle structural changes, electrical, and plumbing upgrades.</p>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Structural Reinforcement</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Floor Plan Reconfiguration</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Insulation &amp; Drywall</li>
</ul>
</div>

<div className="group border-r border-b border-stone-200 p-8 md:p-12 hover:bg-white transition-colors cursor-default">
<div className="mb-6 text-stone-400 group-hover:text-orange-600 transition-colors">
<iconify-icon icon="solar:paint-roller-linear" strokeWidth="1.2" width="40"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-3">Interior Finishing</h3>
<p className="text-stone-500 leading-relaxed mb-6">High-end surface treatments and installations. From flooring to custom millwork, we focus on the visible details.</p>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Flooring &amp; Tiling</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Plaster &amp; Paint</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Cabinetry Installation</li>
</ul>
</div>

<div className="group border-r border-b border-stone-200 p-8 md:p-12 hover:bg-white transition-colors cursor-default">
<div className="mb-6 text-stone-400 group-hover:text-orange-600 transition-colors">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.2" width="40"></iconify-icon>
</div>
<h3 className="text-2xl font-medium mb-3">Kitchen &amp; Bath</h3>
<p className="text-stone-500 leading-relaxed mb-6">Specialized renovation for wet areas requiring precise waterproofing and fixture installation.</p>
<ul className="space-y-2 text-sm text-stone-600">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Waterproofing Systems</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Fixture Integration</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-stone-400 rounded-full"></span>Custom Countertops</li>
</ul>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-50 py-24 px-6 md:px-12" id="projects">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight">Recent Works</h2>
<div className="text-right hidden md:block">
<p className="text-stone-400 text-sm mb-1">Total Renovations</p>
<p className="display-font text-3xl">240+</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 group cursor-pointer relative" onclick="showProject()">
<div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 z-10">
<span className="text-xs font-medium text-white uppercase tracking-wider flex items-center gap-1">
                                Click for Details <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
<div className="aspect-[16/10] overflow-hidden bg-stone-800 mb-4">
<img alt="Modern Living Room" className="w-full h-full object-cover smooth-image opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-t border-stone-700 pt-4">
<div>
<h3 className="text-xl font-medium">The Highland Loft</h3>
<p className="text-stone-400 text-sm mt-1">Full Gut Renovation • 1,200 sqft</p>
</div>
<iconify-icon className="text-stone-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>

<div className="lg:col-span-4 group cursor-pointer">
<div className="aspect-[3/4] lg:aspect-[10/13] overflow-hidden bg-stone-800 mb-4">
<img alt="Minimalist Kitchen" className="w-full h-full object-cover smooth-image opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start border-t border-stone-700 pt-4">
<div>
<h3 className="text-xl font-medium">Stone Creek Kitchen</h3>
<p className="text-stone-400 text-sm mt-1">Cabinetry &amp; Stone</p>
</div>
<iconify-icon className="text-stone-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto" id="process">
<div className="mb-16">
<span className="text-orange-600 font-medium tracking-wider uppercase text-xs mb-2 block">Workflow</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">How we build.</h2>
</div>
<div className="relative">
<div className="absolute left-[15px] top-4 bottom-0 w-[2px] bg-stone-200 md:left-0 md:top-[28px] md:w-full md:h-[2px]"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
<div className="pl-12 md:pl-0 md:pt-12 relative">
<div className="absolute left-0 top-0 md:left-auto md:top-0 md:transform md:-translate-x-1/2 w-8 h-8 bg-white border-2 border-stone-900 rounded-full flex items-center justify-center z-10">
<span className="w-2 h-2 bg-stone-900 rounded-full"></span>
</div>
<span className="text-6xl font-medium text-stone-100 absolute -z-10 -top-4 left-4 md:left-0">01</span>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Consult &amp; Quote</h3>
<p className="text-sm text-stone-600 leading-relaxed">We inspect the site, discuss your vision, and provide a detailed, itemized breakdown of costs.</p>
</div>
<div className="pl-12 md:pl-0 md:pt-12 relative">
<div className="absolute left-0 top-0 md:left-auto md:top-0 md:transform md:-translate-x-1/2 w-8 h-8 bg-stone-50 border-2 border-stone-300 rounded-full z-10"></div>
<span className="text-6xl font-medium text-stone-100 absolute -z-10 -top-4 left-4 md:left-0">02</span>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Design &amp; Plan</h3>
<p className="text-sm text-stone-600 leading-relaxed">Material selection, blueprints, and permits. We organize everything before the first hammer swing.</p>
</div>
<div className="pl-12 md:pl-0 md:pt-12 relative">
<div className="absolute left-0 top-0 md:left-auto md:top-0 md:transform md:-translate-x-1/2 w-8 h-8 bg-stone-50 border-2 border-stone-300 rounded-full z-10"></div>
<span className="text-6xl font-medium text-stone-100 absolute -z-10 -top-4 left-4 md:left-0">03</span>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Construction</h3>
<p className="text-sm text-stone-600 leading-relaxed">Efficient execution with weekly progress reports. Our teams keep the site clean and organized.</p>
</div>
<div className="pl-12 md:pl-0 md:pt-12 relative">
<div className="absolute left-0 top-0 md:left-auto md:top-0 md:transform md:-translate-x-1/2 w-8 h-8 bg-stone-50 border-2 border-stone-300 rounded-full z-10"></div>
<span className="text-6xl font-medium text-stone-100 absolute -z-10 -top-4 left-4 md:left-0">04</span>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Final Inspection</h3>
<p className="text-sm text-stone-600 leading-relaxed">Walkthrough, snag list resolution, and handover. We ensure every detail meets our standard.</p>
</div>
</div>
</div>
</section>

<section className="bg-stone-100 py-24 px-6 md:px-12" id="reviews">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<iconify-icon className="text-orange-600 mb-8" icon="solar:quote-up-linear" strokeWidth="1.5" width="48"></iconify-icon>
<h3 className="text-3xl md:text-4xl font-medium leading-tight text-stone-900 mb-6">
                        "Struktura transformed our 1980s layout into a modern masterpiece. The transparency regarding costs and the clean job site were impressive."
                    </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-stone-300 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-semibold text-stone-900">David &amp; Sarah Miller</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Highland Project</p>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="bg-white p-8 border border-stone-200">
<p className="text-sm text-stone-600 mb-4">"Professional from start to finish. They caught structural issues early and fixed them."</p>
<p className="text-xs font-semibold text-stone-900">James R.</p>
</div>
<div className="bg-white p-8 border border-stone-200 mt-8">
<p className="text-sm text-stone-600 mb-4">"The finishing work on the tiling is absolutely flawless. Highly recommended."</p>
<p className="text-xs font-semibold text-stone-900">Elena T.</p>
</div>
</div>
</div>
</section>

<section className="px-6 md:px-12 py-24 max-w-screen-2xl mx-auto" id="contact">
<div className="bg-stone-900 text-stone-50 p-8 md:p-20 rounded-sm">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Ready to build?</h2>
<p className="text-stone-400 text-lg mb-12 max-w-md">Tell us about your project. We'll get back to you within 24 hours.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-orange-600 mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div><p className="font-medium">Main Office</p><p className="text-stone-400 text-sm">142 Industrial Ave, NY 10012</p></div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-orange-600 mt-1" icon="solar:phone-calling-linear" width="24"></iconify-icon>
<div><p className="font-medium">Phone</p><p className="text-stone-400 text-sm">+1 (555) 019-2834</p></div>
</div>
</div>
</div>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="group relative">
<input className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-50 focus:outline-none focus:border-orange-600 transition-colors placeholder-transparent peer" placeholder="Name" type="text"/>
<label className="absolute left-0 top-3 text-stone-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-orange-600 peer-[&amp;:not(:placeholder-shown)]:-top-4">Full Name</label>
</div>
<div className="group relative">
<input className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-50 focus:outline-none focus:border-orange-600 transition-colors placeholder-transparent peer" placeholder="Email" type="email"/>
<label className="absolute left-0 top-3 text-stone-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-orange-600 peer-[&amp;:not(:placeholder-shown)]:-top-4">Email Address</label>
</div>
</div>
<div className="group relative">
<select className="block w-full bg-transparent border-b border-stone-600 py-3 text-stone-50 focus:outline-none focus:border-orange-600 transition-colors appearance-none">
<option className="bg-stone-800 text-stone-400" value="">Select Service Type</option>
<option className="bg-stone-800" value="full">Full Home Renovation</option>
</select>
<div className="absolute right-0 top-4 pointer-events-none text-stone-400"><iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></div>
</div>
<button className="bg-orange-600 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-orange-700 transition-all w-full md:w-auto" type="button">Send Request</button>
</form>
</div>
</div>
</section>
</main>

<main className="view-section hidden pt-24" id="project-view">

<section className="relative h-[60vh] md:h-[75vh] w-full">
<img alt="Highland Loft Header" className="w-full h-full object-cover object-center grayscale-[10%]" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-stone-900/30"></div>
<div className="absolute top-8 left-6 md:left-12">
<button className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 transition-colors text-sm font-medium" onclick="showHome()">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Projects
                </button>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6 text-white">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="bg-orange-600 text-white px-2 py-0.5 text-[10px] uppercase tracking-widest font-bold">Completed</span>
<span className="text-stone-300 text-xs uppercase tracking-wider">Tribeca, New York</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-none">The Highland Loft</h1>
</div>
<div className="text-right">
<p className="display-font text-2xl md:text-3xl">2023</p>
<p className="text-xs text-stone-400 uppercase tracking-widest mt-1">Project Year</p>
</div>
</div>
</div>
</section>

<div className="border-b border-stone-200 bg-white">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="space-y-1">
<div className="flex items-center gap-2 text-stone-400 mb-1">
<iconify-icon icon="solar:ruler-angular-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-wider">Area</span>
</div>
<p className="text-lg font-medium text-stone-900">1,200 sqft</p>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-stone-400 mb-1">
<iconify-icon icon="solar:clock-square-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-wider">Duration</span>
</div>
<p className="text-lg font-medium text-stone-900">16 Weeks</p>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-stone-400 mb-1">
<iconify-icon icon="solar:dollar-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-wider">Budget Level</span>
</div>
<div className="flex text-stone-900 gap-0.5">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:dollar-minimalistic-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:dollar-minimalistic-linear" width="16"></iconify-icon>
<iconify-icon className="text-stone-300" icon="solar:dollar-minimalistic-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 text-stone-400 mb-1">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
<span className="text-xs uppercase tracking-wider">Client</span>
</div>
<p className="text-lg font-medium text-stone-900">Private</p>
</div>
</div>
</div>
</div>

<section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div className="lg:col-span-7 space-y-12">
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">The Challenge</h2>
<p className="text-stone-600 leading-relaxed text-lg font-light">
                            The original space was a fragmented 1920s warehouse unit with minimal natural light and outdated industrial plumbing. The client desired an open-concept living space that retained the industrial soul of the building while integrating modern thermal comfort and acoustic isolation.
                        </p>
<p className="text-stone-600 leading-relaxed text-lg font-light mt-4">
                            Major structural challenges included uneven concrete subfloors and a load-bearing column that interrupted the proposed kitchen flow.
                        </p>
</div>
<div>
<h2 className="text-3xl font-medium tracking-tight mb-6">The Solution</h2>
<p className="text-stone-600 leading-relaxed text-lg font-light">
                            We executed a full gut renovation, stripping the unit back to its brick shell. The load-bearing column was integrated into a custom 12-foot kitchen island, turning a structural necessity into a design centerpiece.
                        </p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
<li className="flex items-center gap-3 p-4 bg-stone-100 rounded-sm">
<iconify-icon className="text-orange-600 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Steel Beam Reinforcement</span>
</li>
<li className="flex items-center gap-3 p-4 bg-stone-100 rounded-sm">
<iconify-icon className="text-orange-600 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Acoustic Ceiling Systems</span>
</li>
<li className="flex items-center gap-3 p-4 bg-stone-100 rounded-sm">
<iconify-icon className="text-orange-600 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Radiant Floor Heating</span>
</li>
<li className="flex items-center gap-3 p-4 bg-stone-100 rounded-sm">
<iconify-icon className="text-orange-600 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium">Custom Smart Lighting</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-5 space-y-8">
<div className="bg-stone-50 p-8 border border-stone-200">
<h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-stone-900 border-b border-stone-200 pb-2">Material Palette</h3>
<div className="space-y-4">
<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#E5DBCF] rounded-full border border-stone-200"></div>
<span className="text-stone-600 font-medium group-hover:text-stone-900 transition-colors">White Oak (Rift Sawn)</span>
</div>
<span className="text-xs text-stone-400">Flooring</span>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#d4d4d8] rounded-full border border-stone-200"></div>
<span className="text-stone-600 font-medium group-hover:text-stone-900 transition-colors">Polished Concrete</span>
</div>
<span className="text-xs text-stone-400">Counters</span>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#292524] rounded-full border border-stone-200"></div>
<span className="text-stone-600 font-medium group-hover:text-stone-900 transition-colors">Matte Black Steel</span>
</div>
<span className="text-xs text-stone-400">Fixtures</span>
</div>
<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-[#f5f5f4] rounded-full border border-stone-200"></div>
<span className="text-stone-600 font-medium group-hover:text-stone-900 transition-colors">Lime Wash Paint</span>
</div>
<span className="text-xs text-stone-400">Walls</span>
</div>
</div>
</div>
<div className="p-8 border border-stone-200">
<h3 className="text-sm font-semibold uppercase tracking-wider mb-6 text-stone-900 border-b border-stone-200 pb-2">Project Team</h3>
<ul className="space-y-4 text-sm">
<li className="flex justify-between">
<span className="text-stone-500">Lead Contractor</span>
<span className="font-medium text-stone-900">Struktura Inc.</span>
</li>
<li className="flex justify-between">
<span className="text-stone-500">Architect</span>
<span className="font-medium text-stone-900">Mylin Studio</span>
</li>
<li className="flex justify-between">
<span className="text-stone-500">Site Supervisor</span>
<span className="font-medium text-stone-900">Robert Vance</span>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-20">
<h3 className="text-2xl font-medium mb-8">Process &amp; Details</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px] md:h-[400px]">
<div className="md:col-span-2 relative group overflow-hidden h-full">
<img alt="Detail 1" className="w-full h-full object-cover smooth-image grayscale-[10%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="grid grid-rows-2 gap-4 h-full">
<div className="relative group overflow-hidden h-full">
<img alt="Detail 2" className="w-full h-full object-cover smooth-image grayscale-[10%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="relative group overflow-hidden h-full">
<img alt="Detail 3" className="w-full h-full object-cover smooth-image grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&amp;w=2680&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t border-stone-200 flex justify-between items-center">
<button className="text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-2" onclick="showHome()">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Projects
                </button>
<button className="text-stone-900 font-medium hover:text-orange-600 transition-colors flex items-center gap-2">
                    Next Project <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="bg-stone-900 text-white py-16 text-center">
<h2 className="text-3xl font-medium mb-4">Like what you see?</h2>
<p className="text-stone-400 mb-8 max-w-lg mx-auto">This project was completed on time and within 3% of the initial budget estimate.</p>
<a className="inline-block bg-orange-600 px-8 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-orange-700 transition-colors" href="#contact" onclick="showHome()">Start your project</a>
</section>
</main>

<footer className="bg-stone-50 pt-16 pb-8 border-t border-stone-200">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<a className="display-font text-2xl font-medium tracking-tight uppercase text-stone-900" href="javascript:showHome()">
                    Struktura<span className="text-orange-600">.</span>
</a>
<p className="text-stone-500 text-sm">© 2023 Struktura Renovation Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:link-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
