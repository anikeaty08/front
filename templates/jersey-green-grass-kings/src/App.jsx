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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tighter text-emerald-900">JGGK</span>
<iconify-icon className="text-amber-500 text-xl" icon="solar:crown-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="hidden md:flex items-center gap-10 text-sm font-medium text-emerald-900/70">
<a className="hover:text-emerald-600 transition-colors" href="#services">Services</a>
<a className="hover:text-emerald-600 transition-colors" href="#about">About</a>
<a className="hover:text-emerald-600 transition-colors" href="#gallery">Portfolio</a>
<a className="hover:text-emerald-600 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden sm:flex items-center gap-2 text-emerald-900 font-semibold" href="tel:8567258801">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    856-725-8801
                </a>
<a className="bg-emerald-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10 active:scale-95" href="#contact">
                    Free Quote
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 hero-gradient min-h-screen flex items-center">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 items-center gap-16">
<div className="text-white space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-semibold uppercase tracking-widest">
<iconify-icon icon="solar:star-linear"></iconify-icon>
                    New Jersey's #1 Rated
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                    Rule Your Lawn with the <span className="text-amber-400">Kings</span> of Green.
                </h1>
<p className="text-lg lg:text-xl text-emerald-50/80 max-w-lg leading-relaxed">
                    Elite lawn care meets absolute reliability. Experience the most pristine landscaping service in New Jersey at prices that make sense.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-amber-400 text-emerald-950 font-semibold rounded-full text-base hover:bg-amber-300 transition-all text-center" href="#contact">
                        Request Your Royal Quote
                    </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full text-base hover:bg-white/20 transition-all text-center flex items-center justify-center gap-2" href="tel:8567258801">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                        856-725-8801
                    </a>
</div>
<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-emerald-900 object-cover" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-emerald-900 object-cover" src="https://i.pravatar.cc/100?img=2"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-emerald-900 object-cover" src="https://i.pravatar.cc/100?img=3"/>
</div>
<p className="text-sm text-emerald-100/70 italic">Join 500+ Jersey homeowners living like kings.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
<h2 className="text-emerald-950 text-4xl lg:text-5xl font-semibold tracking-tight">Royal Treatment for Every Acre</h2>
<div className="h-1.5 w-20 bg-amber-400 mx-auto rounded-full"></div>
<p className="text-emerald-900/60 text-lg">Comprehensive landscaping solutions tailored to the New Jersey climate and high-end aesthetic standards.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

<div className="service-card group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
<div className="icon-box w-12 h-12 rounded-2xl bg-emerald-900 text-white flex items-center justify-center mb-6 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:crop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Mowing &amp; Maintenance</h3>
<p className="text-emerald-900/60 text-sm leading-relaxed">Precision cutting and edging that keeps your turf looking like a golf course, week after week.</p>
</div>

<div className="service-card group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
<div className="icon-box w-12 h-12 rounded-2xl bg-emerald-900 text-white flex items-center justify-center mb-6 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Landscape Design</h3>
<p className="text-emerald-900/60 text-sm leading-relaxed">Custom architectural planning to transform your outdoor space into a personal sanctuary.</p>
</div>

<div className="service-card group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
<div className="icon-box w-12 h-12 rounded-2xl bg-emerald-900 text-white flex items-center justify-center mb-6 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Sod Installation</h3>
<p className="text-emerald-900/60 text-sm leading-relaxed">Instant lawn transformations with premium New Jersey-grown Kentucky Bluegrass or Fescue.</p>
</div>

<div className="service-card group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
<div className="icon-box w-12 h-12 rounded-2xl bg-emerald-900 text-white flex items-center justify-center mb-6 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Mulching &amp; Beds</h3>
<p className="text-emerald-900/60 text-sm leading-relaxed">Refresh your garden beds with premium dark mulch and professional weed barrier installation.</p>
</div>

<div className="service-card group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
<div className="icon-box w-12 h-12 rounded-2xl bg-emerald-900 text-white flex items-center justify-center mb-6 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:scissors-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Tree &amp; Shrub Care</h3>
<p className="text-emerald-900/60 text-sm leading-relaxed">Artistic pruning and health management for your ornamental trees and privacy hedges.</p>
</div>

<div className="service-card group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
<div className="icon-box w-12 h-12 rounded-2xl bg-emerald-900 text-white flex items-center justify-center mb-6 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:wind-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Seasonal Cleanups</h3>
<p className="text-emerald-900/60 text-sm leading-relaxed">Complete leaf removal and debris clearing to prepare your property for the coming season.</p>
</div>

<div className="service-card group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
<div className="icon-box w-12 h-12 rounded-2xl bg-emerald-900 text-white flex items-center justify-center mb-6 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:dropper-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Weed Control</h3>
<p className="text-emerald-900/60 text-sm leading-relaxed">Strategic fertilization and weed management for a thick, vibrant, and pest-free lawn.</p>
</div>

<div className="service-card group p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500">
<div className="icon-box w-12 h-12 rounded-2xl bg-emerald-900 text-white flex items-center justify-center mb-6 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:structure-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Hardscaping</h3>
<p className="text-emerald-900/60 text-sm leading-relaxed">Custom patios, walkways, and stone retaining walls built to stand the test of time.</p>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Lawn Care Service" className="rounded-3xl shadow-2xl relative z-10" src="https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-400 rounded-3xl -z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-emerald-900/10 rounded-3xl scale-110"></div>
</div>
<div className="space-y-8">
<div className="inline-flex items-center gap-2 text-emerald-800 font-semibold tracking-wider text-xs uppercase">
<iconify-icon icon="solar:info-square-linear"></iconify-icon>
                        Our Heritage
                    </div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-emerald-950">The Regal Standard in NJ Turf Management.</h2>
<p className="text-lg text-emerald-900/70 leading-relaxed">
                        At Jersey Green Grass Kings, we believe every lawn is a kingdom. Locally owned and operated, we’ve built our reputation on the pillars of professionalism, consistency, and a "never-satisfied" attention to detail. 
                    </p>
<p className="text-emerald-900/70">
                        While other companies treat your property like just another stop, we treat it like our own crown jewel. Our elite team combines old-school hard work with modern agronomic techniques to ensure your grass is greener, thicker, and healthier than the rest.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 text-2xl" icon="solar:check-circle-linear"></iconify-icon>
<div>
<p className="font-semibold">Locally Owned</p>
<p className="text-xs text-emerald-900/60">Serving NJ since 2018</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-600 text-2xl" icon="solar:shield-check-linear"></iconify-icon>
<div>
<p className="font-semibold">Fully Insured</p>
<p className="text-xs text-emerald-900/60">Licensed &amp; bonded professionals</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-950 text-white rounded-[3rem] mx-4 my-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-4 gap-12 text-center">
<div className="space-y-4">
<iconify-icon className="text-4xl text-amber-400" icon="solar:tag-price-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">Fair Pricing</h3>
<p className="text-emerald-100/60 text-sm">Elite service doesn't have to carry a king's ransom. Premium care at honest rates.</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-4xl text-amber-400" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">Fast Service</h3>
<p className="text-emerald-100/60 text-sm">Quotes within 24 hours and a reliable schedule that respects your time.</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-4xl text-amber-400" icon="solar:medal-ribbon-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">Proven Quality</h3>
<p className="text-emerald-100/60 text-sm">We use top-shelf equipment and premium fertilizers for visible, lasting results.</p>
</div>
<div className="space-y-4">
<iconify-icon className="text-4xl text-amber-400" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight">NJ Experts</h3>
<p className="text-emerald-100/60 text-sm">We know Jersey soil, weather, and grass types better than anyone else.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-4xl font-semibold tracking-tight text-emerald-950">Visual Evidence of Our Dominance</h2>
<p className="text-emerald-900/60 mt-4">Browse our recent transformations across New Jersey neighborhoods.</p>
</div>
<a className="text-emerald-900 font-semibold flex items-center gap-2 group" href="#contact">
                    See All Projects 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="aspect-[4/3] overflow-hidden rounded-3xl group relative">
<img alt="Lawn 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<p className="text-white font-medium">Hardscape &amp; Sod Installation — Cherry Hill</p>
</div>
</div>
<div className="aspect-[4/3] overflow-hidden rounded-3xl group relative">
<img alt="Lawn 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<p className="text-white font-medium">Weekly Maintenance — Marlton</p>
</div>
</div>
<div className="aspect-[4/3] overflow-hidden rounded-3xl group relative">
<img alt="Lawn 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
<p className="text-white font-medium">Landscape Design — Medford</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-4xl font-semibold tracking-tight mb-16">The People Have Spoken.</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm space-y-4">
<div className="flex text-amber-400">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-emerald-900/80 italic leading-relaxed">"Jersey Green Grass Kings saved my lawn. It was a patchy mess, and now it's easily the best in the neighborhood. Professional and affordable."</p>
<div className="pt-4 border-t border-stone-50 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-900 text-xs">RJ</div>
<div>
<p className="font-semibold text-sm">Robert J.</p>
<p className="text-xs text-emerald-900/40">Haddonfield, NJ</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm space-y-4">
<div className="flex text-amber-400">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-emerald-900/80 italic leading-relaxed">"They are consistent. They show up when they say they will, and the quality is unbeatable. The 'kings' brand is no joke."</p>
<div className="pt-4 border-t border-stone-50 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-900 text-xs">SM</div>
<div>
<p className="font-semibold text-sm">Sarah M.</p>
<p className="text-xs text-emerald-900/40">Voorhees, NJ</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm space-y-4">
<div className="flex text-amber-400">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-emerald-900/80 italic leading-relaxed">"Transformed my backyard into a paradise with their landscape design. Exceeded every expectation. Highly recommended."</p>
<div className="pt-4 border-t border-stone-50 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-900 text-xs">DP</div>
<div>
<p className="font-semibold text-sm">David P.</p>
<p className="text-xs text-emerald-900/40">Moorestown, NJ</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20">
<div className="space-y-8">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-emerald-950">Claim Your Throne.</h2>
<p className="text-lg text-emerald-900/60 leading-relaxed">
                        Ready for the best lawn in town? Contact us today for a free, no-obligation estimate. We respond to all inquiries within 24 hours.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-emerald-900">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-emerald-900/40 font-semibold uppercase tracking-widest">Call or Text</p>
<a className="text-xl font-semibold hover:text-emerald-600 transition-colors" href="tel:8567258801">856-725-8801</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-emerald-900">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-emerald-900/40 font-semibold uppercase tracking-widest">Service Area</p>
<p className="text-xl font-semibold">South Jersey &amp; Surrounding Areas</p>
</div>
</div>
</div>
</div>
<div className="bg-stone-50 p-10 rounded-[2rem] border border-stone-200 shadow-sm">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-emerald-900/60 ml-1">Full Name</label>
<input className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl text-sm transition-all" placeholder="King J. Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-emerald-900/60 ml-1">Phone Number</label>
<input className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl text-sm transition-all" placeholder="856-000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-emerald-900/60 ml-1">Service Needed</label>
<select className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl text-sm transition-all appearance-none cursor-pointer">
<option>Weekly Lawn Maintenance</option>
<option>Landscape Design</option>
<option>Sod &amp; Seeding</option>
<option>Cleanup &amp; Mulching</option>
<option>Other Royalty Service</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-widest text-emerald-900/60 ml-1">Message</label>
<textarea className="w-full px-5 py-4 bg-white border border-stone-200 rounded-2xl text-sm transition-all resize-none" placeholder="Tell us about your lawn..." rows="4"></textarea>
</div>
<div className="flex items-center gap-3 py-2">
<input className="custom-checkbox" id="consent" type="checkbox"/>
<label className="text-xs text-emerald-900/60" htmlFor="consent">I consent to receive a call or text back regarding my quote.</label>
</div>
<button className="w-full py-4 bg-emerald-900 text-white font-semibold rounded-2xl hover:bg-emerald-805 transition-all active:scale-95 shadow-lg shadow-emerald-900/20" type="submit">
                            Send Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-50 border-t border-stone-200 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2 space-y-6">
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tighter text-emerald-900">JGGK</span>
<iconify-icon className="text-amber-500 text-xl" icon="solar:crown-minimalistic-linear"></iconify-icon>
</div>
<p className="max-w-xs text-emerald-900/60 text-sm leading-relaxed">
                        Jersey Green Grass Kings is New Jersey’s premier choice for elite lawn maintenance and landscaping. Transforming ordinary yards into royal landscapes since 2018.
                    </p>
</div>
<div>
<h4 className="font-semibold text-emerald-950 mb-6">Explore</h4>
<ul className="space-y-4 text-sm text-emerald-900/60">
<li><a className="hover:text-emerald-900 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-emerald-900 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-emerald-900 transition-colors" href="#gallery">Portfolio</a></li>
<li><a className="hover:text-emerald-900 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-emerald-950 mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-emerald-900/60">
<li>856-725-8801</li>
<li>New Jersey, USA</li>
<li className="flex items-center gap-4 pt-2">
<a className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-emerald-200 transition-colors" href="#">
<iconify-icon icon="solar:share-circle-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-emerald-200 transition-colors" href="#">
<iconify-icon icon="solar:video-library-linear"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
<div className="pt-10 border-t border-stone-200 flex flex-col md:row justify-between items-center gap-4">
<p className="text-xs text-emerald-900/40">© Copyright 2026. Build and design by Kamil</p>
<div className="flex items-center gap-6 text-xs text-emerald-900/40">
<a className="hover:text-emerald-900" href="#">Privacy Policy</a>
<a className="hover:text-emerald-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
