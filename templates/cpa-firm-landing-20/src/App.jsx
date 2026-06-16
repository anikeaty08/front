import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
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
      

<nav className="fixed w-full z-50 top-0 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 bg-slate-900 rounded flex items-center justify-center text-white font-medium text-sm group-hover:bg-blue-600 transition-colors duration-300">
                    A
                </div>
<span className="text-slate-900 font-medium tracking-tight text-sm">APEX FINANCIAL</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#team">Our CPAs</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded hover:bg-slate-800 transition-colors" href="#contact">Client Portal</a>
</div>
</div>
</nav>

<header className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
<span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Tax Season 2024 Open</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Precision accounting for wealth preservation.
                </h1>
<p className="text-lg lg:text-xl text-slate-500 font-light leading-relaxed max-w-2xl mb-10">
                    Strategic tax planning and audit services for high-net-worth individuals and corporations. We turn compliance into opportunity across the Tri-State area.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-6 rounded bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200" href="#contact">
                        Schedule Consultation
                    </a>
<a className="inline-flex items-center justify-center h-12 px-6 rounded border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 transition-colors" href="#areas">
                        View Areas Served
                    </a>
</div>
</div>
</div>
</header>

<section className="border-y border-slate-100 bg-slate-50 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Accredited &amp; Recognized Members of</p>
<div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">

<div className="flex items-center gap-2">
<span className="iconify text-3xl" data-icon="lucide:shield-check"></span>
<span className="font-semibold text-lg tracking-tight">AICPA</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-3xl" data-icon="lucide:award"></span>
<span className="font-semibold text-lg tracking-tight">State CPA Society</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-3xl" data-icon="lucide:landmark"></span>
<span className="font-semibold text-lg tracking-tight">Chamber of Commerce</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-3xl" data-icon="lucide:file-check-2"></span>
<span className="font-semibold text-lg tracking-tight">IRS Enrolled Agents</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Specialized Financial Services</h2>
<p className="text-slate-500 text-lg mb-16 max-w-2xl">Tailored accounting solutions designed for compliance and growth.</p>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="lucide:pie-chart"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Corporate Tax Planning</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Strategic filing and liability reduction strategies for businesses incorporated in the Metro Region.</p>
<a className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-700" href="#">
                        Tax Services
                        <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group p-8 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="lucide:search-check"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Forensic Audit &amp; Assurance</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Rigorous financial examination and attest services for nonprofits and private entities.</p>
<a className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-700" href="#">
                        Audit Services
                        <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>

<div className="group p-8 rounded-xl border border-slate-200 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300">
<div className="h-10 w-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<span className="iconify text-xl" data-icon="lucide:building-2"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Small Business Advisory</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Virtual CFO, bookkeeping, and payroll management specifically for local startups and SMEs.</p>
<a className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-700" href="#">
                        Advisory Services
                        <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden" id="areas">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 items-start">
<div className="md:w-1/3">
<h2 className="text-3xl font-medium tracking-tight mb-4">Areas We Serve</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-8">
                    While we utilize modern cloud technology to serve clients globally, our physical presence and specialized local tax knowledge is rooted in the Greater Metro Area.
                </p>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded bg-slate-800 border border-slate-700">
<span className="iconify text-emerald-400" data-icon="lucide:map-pin"></span>
<span className="text-sm font-medium">Headquartered in Downtown Metro</span>
</div>
</div>
<div className="md:w-2/3 w-full">
<div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8">
<div className="space-y-3">
<h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">Central District</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="hover:text-white transition-colors cursor-default">Downtown</li>
<li className="hover:text-white transition-colors cursor-default">Financial District</li>
<li className="hover:text-white transition-colors cursor-default">Midtown</li>
<li className="hover:text-white transition-colors cursor-default">Waterfront</li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">West Side</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="hover:text-white transition-colors cursor-default">West Hills</li>
<li className="hover:text-white transition-colors cursor-default">Marina District</li>
<li className="hover:text-white transition-colors cursor-default">Pacific Heights</li>
<li className="hover:text-white transition-colors cursor-default">Oceanview</li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wide">Surrounding Area</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li className="hover:text-white transition-colors cursor-default">North County</li>
<li className="hover:text-white transition-colors cursor-default">Tech Valley</li>
<li className="hover:text-white transition-colors cursor-default">South Shore</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50" id="team">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">Our Partners</h2>
<p className="text-slate-500">Expertise you can trust. Meet the certified professionals handling your finances.</p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-slate-900 hover:text-blue-600 mt-4 md:mt-0" href="#">
                    View full team <span className="iconify ml-1" data-icon="lucide:arrow-right"></span>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
<div className="aspect-w-3 aspect-h-2 bg-slate-200">
<img alt="Marcus Thorne CPA" className="object-cover w-full h-64 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-slate-900">Marcus Thorne</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-700 border border-blue-200">CPA</span>
</div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-4">Managing Partner</p>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Specializes in corporate tax strategy and mergers &amp; acquisitions. Member of the AICPA Council.</p>
<div className="flex gap-3 mt-4 border-t border-slate-100 pt-4">
<span className="text-xs text-slate-400 flex items-center gap-1"><span className="iconify" data-icon="lucide:award"></span> 15+ Years Exp.</span>
<span className="text-xs text-slate-400 flex items-center gap-1"><span className="iconify" data-icon="lucide:graduation-cap"></span> MBA, Finance</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
<div className="aspect-w-3 aspect-h-2 bg-slate-200">
<img alt="Elena Rostova EA" className="object-cover w-full h-64 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-slate-900">Elena Rostova</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-700 border border-emerald-200">EA</span>
</div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-4">Tax Director</p>
<p className="text-sm text-slate-500 leading-relaxed mb-4">IRS Enrolled Agent specializing in complex tax resolution and international tax compliance.</p>
<div className="flex gap-3 mt-4 border-t border-slate-100 pt-4">
<span className="text-xs text-slate-400 flex items-center gap-1"><span className="iconify" data-icon="lucide:award"></span> Ex-IRS Auditor</span>
<span className="text-xs text-slate-400 flex items-center gap-1"><span className="iconify" data-icon="lucide:graduation-cap"></span> MST, Taxation</span>
</div>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm">
<div className="aspect-w-3 aspect-h-2 bg-slate-200">
<img alt="David Chen CPA" className="object-cover w-full h-64 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-slate-900">David Chen</h3>
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-100 text-blue-700 border border-blue-200">CPA</span>
</div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wide mb-4">Audit Partner</p>
<p className="text-sm text-slate-500 leading-relaxed mb-4">Leads the assurance practice. Expert in GAAP compliance for technology and healthcare sectors.</p>
<div className="flex gap-3 mt-4 border-t border-slate-100 pt-4">
<span className="text-xs text-slate-400 flex items-center gap-1"><span className="iconify" data-icon="lucide:award"></span> CFE Certified</span>
<span className="text-xs text-slate-400 flex items-center gap-1"><span className="iconify" data-icon="lucide:graduation-cap"></span> BS, Accounting</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-100" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-10">
<div className="bg-white border border-slate-200 h-10 w-10 rounded-full flex items-center justify-center shadow-sm">

<span className="font-bold text-lg text-slate-800" style={{fontFamily: '\'Inter\', sans-serif'}}>G</span>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 leading-tight">Client Testimonials</h3>
<div className="flex items-center gap-1">
<span className="text-xs font-semibold text-slate-900">4.9</span>
<div className="flex text-amber-400 text-[10px]">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<span className="text-xs text-slate-400">based on 84 reviews</span>
</div>
</div>
</div>

<div className="flex overflow-x-auto gap-6 pb-8 snap-x">

<div className="min-w-[320px] md:min-w-[400px] snap-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">JR</div>
<div className="text-sm font-medium text-slate-900">James Robinson</div>
</div>
<span className="iconify text-slate-300 h-5 w-5" data-icon="lucide:quote"></span>
</div>
<div className="flex text-amber-400 text-xs mb-3">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">"Apex Financial transformed how we handle our corporate taxes. Marcus and his team are incredibly knowledgeable about the local tax codes in the Metro area. Highly recommended for any growing business."</p>
<p className="text-xs text-slate-400 mt-4">1 month ago</p>
</div>

<div className="min-w-[320px] md:min-w-[400px] snap-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">SL</div>
<div className="text-sm font-medium text-slate-900">Sarah Langford</div>
</div>
<span className="iconify text-slate-300 h-5 w-5" data-icon="lucide:quote"></span>
</div>
<div className="flex text-amber-400 text-xs mb-3">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">"I was facing a complex audit situation and Elena Rostova handled it with absolute professionalism. She explained everything clearly and resolved the issue faster than I expected. True experts."</p>
<p className="text-xs text-slate-400 mt-4">3 months ago</p>
</div>

<div className="min-w-[320px] md:min-w-[400px] snap-center bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">MT</div>
<div className="text-sm font-medium text-slate-900">Michael Torres</div>
</div>
<span className="iconify text-slate-300 h-5 w-5" data-icon="lucide:quote"></span>
</div>
<div className="flex text-amber-400 text-xs mb-3">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">"The best accounting firm in Downtown. Their attention to detail on our quarterly filings has saved us significant money this year. Friendly, professional, and accurate."</p>
<p className="text-xs text-slate-400 mt-4">5 months ago</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-100" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Secure Your Financial Future</h2>
<p className="text-slate-500 text-sm">Fill out the form below to request a consultation with one of our partners.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">First Name</label>
<input className="w-full h-10 px-3 rounded border border-slate-300 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Last Name</label>
<input className="w-full h-10 px-3 rounded border border-slate-300 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Email Address</label>
<input className="w-full h-10 px-3 rounded border border-slate-300 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Service Interest</label>
<div className="relative">
<select className="w-full h-10 px-3 rounded border border-slate-300 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 appearance-none text-slate-600">
<option>Tax Planning</option>
<option>Audit Services</option>
<option>Bookkeeping</option>
<option>Other Advisory</option>
</select>
<span className="iconify absolute right-3 top-3 text-slate-400 pointer-events-none" data-icon="lucide:chevron-down"></span>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Message</label>
<textarea className="w-full h-32 px-3 py-2 rounded border border-slate-300 bg-white text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow resize-none"></textarea>
</div>
<button className="w-full h-11 rounded bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors shadow-sm mt-2" type="button">
                    Request Consultation
                </button>
</form>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-slate-200 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="h-6 w-6 bg-slate-900 rounded flex items-center justify-center text-white font-medium text-[10px]">A</div>
<span className="text-slate-900 font-medium tracking-tight text-sm">APEX FINANCIAL</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Providing world-class accounting and tax strategies for the modern economy.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#">Tax Preparation</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Audit &amp; Assurance</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Payroll Services</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">IRS Representation</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-blue-600 transition-colors" href="#team">About Us</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#areas">Locations</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Contact (NAP)</h4>
<address className="not-italic space-y-4 text-xs text-slate-500">
<div className="space-y-1">
<span className="font-medium text-slate-900 block">Apex Financial Partners</span>
<span>123 Financial District Blvd, Suite 400</span><br/>
<span>Metro City, ST 90210</span>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:phone" data-width="14"></span>
<a className="hover:text-slate-900 transition-colors" href="tel:+15550123456">(555) 012-3456</a>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:mail" data-width="14"></span>
<a className="hover:text-slate-900 transition-colors" href="mailto:info@apexfinancial.com">info@apexfinancial.com</a>
</div>
<div className="flex items-center gap-2">
<span className="iconify text-slate-400" data-icon="lucide:clock" data-width="14"></span>
<span>Mon-Fri: 9am - 5pm EST</span>
</div>
</address>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-400 uppercase tracking-wider">
<p>© 2024 Apex Financial Partners. All rights reserved.</p>
<div className="flex gap-4">
<span>CPA License #123456</span>
<span>State Board of Accountancy</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
