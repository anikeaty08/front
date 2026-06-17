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



        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
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
      

<nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-lg tracking-tight">CP</span>
</div>
<span className="font-semibold text-xl tracking-tight text-slate-900">CleanPro</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-600 hover:text-slate-900 transition" href="#services">Services</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition" href="#industries">Industries</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition" href="#process">How It Works</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition" href="#gallery">Gallery</a>
<a className="text-sm text-slate-600 hover:text-slate-900 transition" href="#faq">FAQ</a>
<a className="flex items-center gap-2 text-sm font-medium text-blue-600" href="tel:5551234567">
<span className="iconify" data-icon="lucide:phone" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        (555) 123-4567
                    </a>
</div>
<button className="md:hidden p-2">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</nav>

<section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml, %3Csvg width=&quot', http: '//www.w3.org/2000/svg&quot'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
<span className="iconify text-blue-400" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium text-blue-300">Fully Licensed &amp; Insured</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
                        Your Property's First Impression Starts at the <span className="text-blue-400">Curb</span>
</h1>
<p className="text-lg text-slate-300 mb-8 max-w-xl">
                        Professional exterior cleaning that drives customer traffic, protects your investment, and keeps your commercial property looking its absolute best—guaranteed.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition" href="#contact">
                            Get Your Free Property Assessment
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg border border-white/30 text-white font-medium text-sm hover:bg-white/10 transition" href="#gallery">
<span className="iconify" data-icon="lucide:image" data-width="18" style={{strokeWidth: '1.5'}}></span>
                            See Our Work
                        </a>
</div>
<p className="text-sm text-slate-400">Trusted by 200+ commercial properties. Same-day quotes. No contracts required.</p>

<div className="flex flex-wrap items-center gap-6 pt-6 mt-6 border-t border-slate-700/50">
<div className="flex items-center gap-2 text-slate-400">
<span className="iconify text-blue-400" data-icon="lucide:home" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs">Family Owned Since 2008</span>
</div>
<div className="flex items-center gap-2 text-slate-400">
<span className="iconify text-blue-400" data-icon="lucide:shield" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs">$2M Liability Coverage</span>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:ml-8">
<div className="text-center mb-6">
<h2 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Get Your Free Property Assessment</h2>
<p className="text-sm text-slate-500">No obligation • Quote within 24 hours</p>
</div>
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Your Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="John Smith" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Company/Property Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="ABC Properties" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Property Address</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="123 Main St, City, State" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="(555) 123-4567" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="john@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Property Type</label>
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none bg-white" style={{backgroundImage: 'url(\'data:image/svg+xml, %3Csvg xmlns=&quot', http: '//www.w3.org/2000/svg&quot', backgroundPosition: 'right 12px center', backgroundRepeat: 'no-repeat', backgroundSize: '20px'}}>
<option>Select property type</option>
<option>Restaurant / Food Service</option>
<option>Gas Station / Convenience Store</option>
<option>HOA / Multi-Family</option>
<option>Industrial / Manufacturing</option>
<option>Retail / Shopping Center</option>
<option>Office Building</option>
<option>Other Commercial</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Services Needed</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
<span className="text-sm text-slate-600">Pressure Washing</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
<span className="text-sm text-slate-600">Building Exterior</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
<span className="text-sm text-slate-600">Parking Lot</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" type="checkbox"/>
<span className="text-sm text-slate-600">Graffiti Removal</span>
</label>
</div>
</div>
<button className="w-full py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition flex items-center justify-center gap-2" type="submit">
                            Get My Free Assessment
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
<p className="text-xs text-slate-400 text-center">
<span className="iconify inline mr-1" data-icon="lucide:clock" data-width="12" style={{strokeWidth: '1.5'}}></span>
                            Response within 2 hours during business hours
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8">
<div className="text-center">
<div className="text-3xl font-semibold text-blue-600 tracking-tight">2,500+</div>
<div className="text-sm text-slate-500 mt-1">Properties Cleaned</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-blue-600 tracking-tight">15+</div>
<div className="text-sm text-slate-500 mt-1">Years Experience</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-blue-600 tracking-tight">98%</div>
<div className="text-sm text-slate-500 mt-1">Customer Retention</div>
</div>
<div className="text-center">
<div className="text-3xl font-semibold text-blue-600 tracking-tight">$2M</div>
<div className="text-sm text-slate-500 mt-1">Liability Coverage</div>
</div>
<div className="text-center col-span-2 md:col-span-1">
<div className="text-3xl font-semibold text-blue-600 tracking-tight">A+</div>
<div className="text-sm text-slate-500 mt-1">BBB Rating</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-red-50 border-b border-red-100">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-8">
<h2 className="text-2xl lg:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Is Your Property Driving Customers Away Before They Even Walk In?</h2>
</div>
<div className="bg-white rounded-xl border border-red-200 shadow-sm p-6 lg:p-8">
<p className="text-slate-600 mb-6">Your parking lot, sidewalks, and building exterior are working against you every single day. Oil stains. Gum. Grime. Graffiti. That green slime creeping across your driveway.</p>
<p className="text-slate-700 font-medium mb-4">Customers make snap judgments in 7 seconds. A dirty exterior tells them:</p>
<div className="space-y-3 mb-6">
<div className="flex items-start gap-3 text-slate-600">
<span className="iconify text-red-500 mt-0.5 flex-shrink-0" data-icon="lucide:x-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span>"This place doesn't care about details"</span>
</div>
<div className="flex items-start gap-3 text-slate-600">
<span className="iconify text-red-500 mt-0.5 flex-shrink-0" data-icon="lucide:x-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span>"If they can't keep the outside clean, what about the inside?"</span>
</div>
<div className="flex items-start gap-3 text-slate-600">
<span className="iconify text-red-500 mt-0.5 flex-shrink-0" data-icon="lucide:x-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span>"Maybe I should try their competitor down the street"</span>
</div>
</div>
<div className="bg-red-50 border border-red-200 rounded-lg p-4">
<p className="text-slate-700 font-medium"><span className="text-red-600">Worse?</span> Every day you wait, that dirt becomes harder to remove—and more expensive to fix. Your property is losing you business right now. <strong>Let's fix that.</strong></p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 mb-4">Our Services</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Commercial Exterior Cleaning That Actually Solves Your Problem</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Not just clean. Pristine. Protected. Professional.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition group">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:droplets" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Pressure Washing &amp; Soft Washing</h3>
<p className="text-sm text-slate-600">Remove years of buildup without damaging your surfaces. We use commercial-grade equipment and the right pressure for every material—from delicate stucco to tough concrete.</p>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition group">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:car" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Parking Lot &amp; Driveway Cleaning</h3>
<p className="text-sm text-slate-600">Eliminate oil stains, tire marks, and gum that make your lot look neglected. Clean pavement lasts longer and reduces liability risks.</p>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition group">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:building-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Building Exterior Washing</h3>
<p className="text-sm text-slate-600">Safely clean siding, brick, stone, and stucco. Remove algae, mildew, and oxidation that ages your building prematurely.</p>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition group">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:spray-can" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Graffiti Removal</h3>
<p className="text-sm text-slate-600">Fast response for vandalism. We'll have your property looking professional again within 24-48 hours.</p>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition group">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:home" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Gutter Cleaning &amp; Brightening</h3>
<p className="text-sm text-slate-600">Prevent water damage and restore that like-new appearance to dirty, streaked gutters.</p>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition group">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:footprints" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Sidewalk &amp; Concrete Restoration</h3>
<p className="text-sm text-slate-600">Remove stains, gum, and organic growth. Restore the brightness your customers remember.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white" id="industries">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 mb-4">Industries We Serve</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Specialized Cleaning for Your Type of Property</h2>
</div>
<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200">
<div className="flex items-start gap-4 mb-6">
<div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:utensils" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Restaurant &amp; Food Service</h3>
<p className="text-slate-600 text-sm">Health inspectors notice exterior cleanliness. So do your customers. We remove grease, grime, and organic buildup that can attract pests and create slip hazards.</p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Eliminate grease buildup from dumpster areas
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Remove food stains from loading zones
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Create welcoming outdoor dining spaces
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Pass health inspections with confidence
                        </div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200">
<div className="flex items-start gap-4 mb-6">
<div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:fuel" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Gas Stations &amp; Convenience Stores</h3>
<p className="text-slate-600 text-sm">Your pumps, canopy, and parking area take a beating from fuel spills, gum, and constant traffic. We specialize in high-traffic properties that need to look clean 24/7.</p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Remove stubborn fuel stains and oil spots
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Brighten concrete under canopies
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Eliminate gum and tire marks
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Increase curb appeal that drives traffic
                        </div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200">
<div className="flex items-start gap-4 mb-6">
<div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:building" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">HOA &amp; Multi-Family Properties</h3>
<p className="text-slate-600 text-sm">Residents notice when their community looks neglected. Keep property values high and residents happy with regular exterior maintenance.</p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Consistent, professional appearance
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Increased property values
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Higher resident satisfaction
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Reduced long-term maintenance costs
                        </div>
</div>
</div>

<div className="bg-slate-50 rounded-2xl p-6 lg:p-8 border border-slate-200">
<div className="flex items-start gap-4 mb-6">
<div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
<span className="iconify text-white" data-icon="lucide:factory" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Industrial &amp; Manufacturing</h3>
<p className="text-slate-600 text-sm">Heavy equipment, forklifts, and constant operations create unique cleaning challenges. We handle oil stains, tire marks, chemical residue, and heavy buildup.</p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Safer, cleaner work areas
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Improved employee morale
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            OSHA compliance support
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<span className="iconify text-green-500" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Reduced slip-and-fall liability
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 mb-4">Simple Process</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">How We Make This Easy for You</h2>
<p className="text-slate-500 max-w-2xl mx-auto">From first contact to completed cleaning, we handle everything so you can focus on your business.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="relative">
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center mb-4 text-white font-semibold text-xl">1</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Free Property Assessment</h3>
<p className="text-slate-500 text-sm">We visit your property, assess what needs cleaning, and identify any special concerns. Detailed quote via email within 24 hours—no pressure.</p>
</div>
<div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200" style={{width: 'calc(100% - 4rem)', left: 'calc(50% + 2rem)'}}></div>
</div>
<div className="relative">
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center mb-4 text-white font-semibold text-xl">2</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Schedule at Your Convenience</h3>
<p className="text-slate-500 text-sm">We work around YOUR schedule. Early morning, after-hours, weekends—whatever minimizes disruption to your business.</p>
</div>
<div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200" style={{width: 'calc(100% - 4rem)', left: 'calc(50% + 2rem)'}}></div>
</div>
<div className="relative">
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center mb-4 text-white font-semibold text-xl">3</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">We Handle Everything</h3>
<p className="text-slate-500 text-sm">Our team arrives with all equipment, protects your landscaping and vehicles, and completes the work efficiently. You don't lift a finger.</p>
</div>
<div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200" style={{width: 'calc(100% - 4rem)', left: 'calc(50% + 2rem)'}}></div>
</div>
<div className="text-center">
<div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center mb-4 text-white font-semibold text-xl">4</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Walkthrough &amp; Guarantee</h3>
<p className="text-slate-500 text-sm">We walk you through the completed work. If you're not 100% satisfied, we'll make it right immediately—no excuses.</p>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition" href="#contact">
                    Schedule My Free Assessment
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 mb-4">Before &amp; After</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">See the Transformation</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Real results from real commercial properties we've cleaned.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
<div className="aspect-video bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center relative">
<div className="absolute inset-0 flex">
<div className="w-1/2 bg-slate-400 flex items-center justify-center">
<span className="text-white/60 text-sm font-medium">BEFORE</span>
</div>
<div className="w-1/2 bg-slate-200 flex items-center justify-center">
<span className="text-slate-500 text-sm font-medium">AFTER</span>
</div>
</div>
<div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg transform -translate-x-1/2 flex items-center justify-center">
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
<span className="iconify text-slate-400" data-icon="lucide:move-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="p-4">
<p className="text-sm font-medium text-slate-900">Restaurant Parking Lot</p>
<p className="text-xs text-slate-500">10 years of oil and grime removed</p>
</div>
</div>

<div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
<div className="aspect-video bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center relative">
<div className="absolute inset-0 flex">
<div className="w-1/2 bg-slate-400 flex items-center justify-center">
<span className="text-white/60 text-sm font-medium">BEFORE</span>
</div>
<div className="w-1/2 bg-slate-200 flex items-center justify-center">
<span className="text-slate-500 text-sm font-medium">AFTER</span>
</div>
</div>
<div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg transform -translate-x-1/2 flex items-center justify-center">
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
<span className="iconify text-slate-400" data-icon="lucide:move-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="p-4">
<p className="text-sm font-medium text-slate-900">Gas Station Canopy</p>
<p className="text-xs text-slate-500">Dramatic brightness improvement</p>
</div>
</div>

<div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
<div className="aspect-video bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center relative">
<div className="absolute inset-0 flex">
<div className="w-1/2 bg-slate-400 flex items-center justify-center">
<span className="text-white/60 text-sm font-medium">BEFORE</span>
</div>
<div className="w-1/2 bg-slate-200 flex items-center justify-center">
<span className="text-slate-500 text-sm font-medium">AFTER</span>
</div>
</div>
<div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg transform -translate-x-1/2 flex items-center justify-center">
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
<span className="iconify text-slate-400" data-icon="lucide:move-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="p-4">
<p className="text-sm font-medium text-slate-900">HOA Sidewalks</p>
<p className="text-xs text-slate-500">Like new again</p>
</div>
</div>

<div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
<div className="aspect-video bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center relative">
<div className="absolute inset-0 flex">
<div className="w-1/2 bg-slate-400 flex items-center justify-center">
<span className="text-white/60 text-sm font-medium">BEFORE</span>
</div>
<div className="w-1/2 bg-slate-200 flex items-center justify-center">
<span className="text-slate-500 text-sm font-medium">AFTER</span>
</div>
</div>
<div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg transform -translate-x-1/2 flex items-center justify-center">
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
<span className="iconify text-slate-400" data-icon="lucide:move-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="p-4">
<p className="text-sm font-medium text-slate-900">Industrial Loading Dock</p>
<p className="text-xs text-slate-500">Safe and professional</p>
</div>
</div>

<div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
<div className="aspect-video bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center relative">
<div className="absolute inset-0 flex">
<div className="w-1/2 bg-slate-400 flex items-center justify-center">
<span className="text-white/60 text-sm font-medium">BEFORE</span>
</div>
<div className="w-1/2 bg-slate-200 flex items-center justify-center">
<span className="text-slate-500 text-sm font-medium">AFTER</span>
</div>
</div>
<div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg transform -translate-x-1/2 flex items-center justify-center">
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
<span className="iconify text-slate-400" data-icon="lucide:move-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="p-4">
<p className="text-sm font-medium text-slate-900">Graffiti Removal</p>
<p className="text-xs text-slate-500">Completely gone in one treatment</p>
</div>
</div>

<div className="bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
<div className="aspect-video bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center relative">
<div className="absolute inset-0 flex">
<div className="w-1/2 bg-slate-400 flex items-center justify-center">
<span className="text-white/60 text-sm font-medium">BEFORE</span>
</div>
<div className="w-1/2 bg-slate-200 flex items-center justify-center">
<span className="text-slate-500 text-sm font-medium">AFTER</span>
</div>
</div>
<div className="absolute inset-y-0 left-1/2 w-1 bg-white shadow-lg transform -translate-x-1/2 flex items-center justify-center">
<div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
<span className="iconify text-slate-400" data-icon="lucide:move-horizontal" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<div className="p-4">
<p className="text-sm font-medium text-slate-900">Building Exterior</p>
<p className="text-xs text-slate-500">Years of algae eliminated</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<div className="flex items-center justify-center gap-1 mb-4">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="24" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="24" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="24" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="24" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="24" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
</div>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Trusted by Property Managers Who Demand Results</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
<div className="flex items-center gap-1 mb-4">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
</div>
<p className="text-slate-600 text-sm mb-6">"We manage 12 restaurant locations, and cleanliness is everything in our business. Their attention to detail is incredible—they even clean areas we didn't ask for. Our inspectors notice, our customers notice."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">MT</div>
<div>
<div className="font-medium text-slate-900 text-sm">Michael Torres</div>
<div className="text-xs text-slate-500">Regional Manager, Restaurant Chain</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
<div className="flex items-center gap-1 mb-4">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
</div>
<p className="text-slate-600 text-sm mb-6">"Our gas station was losing customers to the newer station down the street. One customer said 'When did you guys remodel?' We didn't—we just got clean. Best $800 I've spent."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">JP</div>
<div>
<div className="font-medium text-slate-900 text-sm">Jennifer Patel</div>
<div className="text-xs text-slate-500">Owner, QuickStop Gas &amp; Convenience</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
<div className="flex items-center gap-1 mb-4">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
</div>
<p className="text-slate-600 text-sm mb-6">"We tried handling exterior maintenance in-house. It was a disaster. CleanPro transformed our entire complex in one day. Residents immediately started complimenting us."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">DR</div>
<div>
<div className="font-medium text-slate-900 text-sm">David Reynolds</div>
<div className="text-xs text-slate-500">HOA Board President, Oakmont Village</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
<div className="flex items-center gap-1 mb-4">
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
<span className="iconify text-yellow-400" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: '#facc15'}}></span>
</div>
<p className="text-slate-600 text-sm mb-6">"Had graffiti on our warehouse that I thought would never come out without repainting. They removed it completely—you can't even tell it was there. Saved us thousands."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium text-sm">LC</div>
<div>
<div className="font-medium text-slate-900 text-sm">Lisa Cunningham</div>
<div className="text-xs text-slate-500">Facilities Manager, Industrial Co.</div>
</div>
</div>
</div>
</div>

<div className="mt-10 text-center">
<div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 border border-slate-200 shadow-sm">
<img alt="Google" className="w-5 h-5" src="https://www.google.com/favicon.ico"/>
<span className="text-sm text-slate-600">Rated <strong className="text-slate-900">4.9</strong> based on <strong className="text-slate-900">187 reviews</strong></span>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 mb-4">FAQ</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Common Questions From Property Managers Like You</h2>
</div>
<div className="space-y-4">

<div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-2">"How much does this cost?"</h3>
<p className="text-slate-600 text-sm">Every property is different, but most commercial properties range from $400-$2,500 depending on size and scope. We provide transparent, detailed quotes with no hidden fees. Most clients tell us we're worth every penny when they see the transformation.</p>
</div>

<div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-2">"Will this damage my property?"</h3>
<p className="text-slate-600 text-sm">Never. We're trained in proper pressure levels for every surface type. We use soft washing for delicate materials and adjust our equipment for everything from wood to concrete. We've cleaned thousands of properties with zero damage claims.</p>
</div>

<div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-2">"How long does it last?"</h3>
<p className="text-slate-600 text-sm">Depends on your environment, but most commercial properties benefit from quarterly or bi-annual cleaning. High-traffic areas (gas stations, restaurants) may need more frequent service. We'll recommend a schedule based on your specific needs.</p>
</div>

<div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-2">"Do I need to be there?"</h3>
<p className="text-slate-600 text-sm">Nope. Most of our commercial clients aren't on-site during service. We can work with your property manager, maintenance team, or complete the job independently. You'll get before/after photos and can inspect at your convenience.</p>
</div>

<div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-2">"What if it rains after you clean?"</h3>
<p className="text-slate-600 text-sm">Rain doesn't undo our work—it actually helps! We're removing organic matter, oils, and contaminants. Clean surfaces shed water beautifully. If there's an issue (which is rare), we're back to fix it free of charge.</p>
</div>

<div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-2">"Are you insured?"</h3>
<p className="text-slate-600 text-sm">Absolutely. We carry $2 million in general liability insurance and workers' compensation for all employees. You'll receive a certificate of insurance before we start work. Your property is protected.</p>
</div>

<div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-2">"Can you remove that stubborn stain/graffiti/gum?"</h3>
<p className="text-slate-600 text-sm">Probably yes. We've successfully removed oil stains that were "permanent," graffiti from porous surfaces, gum that's been there for years, and oxidation that owners thought was irreversible. We'll give you an honest assessment during the site visit.</p>
</div>

<div className="bg-slate-50 rounded-xl border border-slate-200 p-6">
<h3 className="font-semibold text-slate-900 mb-2">"Do you use harsh chemicals?"</h3>
<p className="text-slate-600 text-sm">We use commercial-grade, biodegradable cleaning solutions that are tough on dirt but safe for landscaping, pets, and the environment. We're also happy to discuss any specific concerns you have.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 mb-4">Why CleanPro</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">What Makes Us Different From Every Other "Guy With a Pressure Washer"</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white rounded-xl p-6 border border-slate-200">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:settings" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Professional Equipment, Not DIY Tools</h3>
<p className="text-sm text-slate-600">We invest in commercial-grade equipment designed for large properties. Our hot water systems, surface cleaners, and specialized nozzles deliver results that homeowner-level equipment can't touch.</p>
</div>
<div className="bg-white rounded-xl p-6 border border-slate-200">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:graduation-cap" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Trained, Experienced Technicians</h3>
<p className="text-sm text-slate-600">Our team receives ongoing training in surface assessment, chemical selection, and safety protocols. We know the difference between brick that needs 500 PSI and concrete that can handle 3000 PSI.</p>
</div>
<div className="bg-white rounded-xl p-6 border border-slate-200">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:message-circle" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Transparent Communication</h3>
<p className="text-sm text-slate-600">You'll know exactly what we're doing, why we're doing it, and what it costs before we start. No surprises. No upsells. No pressure.</p>
</div>
<div className="bg-white rounded-xl p-6 border border-slate-200">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:heart-handshake" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Respect for Your Business</h3>
<p className="text-sm text-slate-600">We minimize disruption, protect your property, clean up completely, and treat your business with the respect it deserves. We've never left a mess or damaged a property.</p>
</div>
<div className="bg-white rounded-xl p-6 border border-slate-200">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:badge-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Guaranteed Results</h3>
<p className="text-sm text-slate-600">If you're not completely satisfied, we come back and make it right. Period. No arguments, no excuses. We've built our reputation on this promise.</p>
</div>
<div className="bg-white rounded-xl p-6 border border-slate-200">
<div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
<span className="iconify text-blue-600" data-icon="lucide:users" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Family Owned &amp; Operated</h3>
<p className="text-sm text-slate-600">We're not a franchise or corporate chain. When you call, you're talking to owners who care about every job. Your success is our success.</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-blue-600">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-2xl lg:text-3xl font-semibold text-white tracking-tight mb-4">Book Your Assessment This Week</h2>
<p className="text-blue-100 mb-6">We're scheduling properties for this month. Our calendar fills quickly during busy season, and we limit bookings to ensure quality service for every client.</p>
<div className="bg-white/10 border border-white/20 rounded-xl p-6 mb-6">
<p className="text-white font-medium mb-4">Schedule your free property assessment today and get:</p>
<div className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
<div className="flex items-center gap-2 text-blue-100">
<span className="iconify text-blue-200" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">Priority scheduling</span>
</div>
<div className="flex items-center gap-2 text-blue-100">
<span className="iconify text-blue-200" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">10% off when booking within 48hrs</span>
</div>
<div className="flex items-center gap-2 text-blue-100">
<span className="iconify text-blue-200" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">Free spot treatment included</span>
</div>
<div className="flex items-center gap-2 text-blue-100">
<span className="iconify text-blue-200" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm">Maintenance recommendations</span>
</div>
</div>
</div>
<p className="text-blue-200 text-sm">Limited spots available this month.</p>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-900" id="contact">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">Your Property Deserves to Look Its Best</h2>
<p className="text-slate-300 mb-8 max-w-2xl mx-auto">Every day your property looks neglected is a day you're losing business, frustrating tenants, or reducing property value. The solution is simpler than you think.</p>
<p className="text-slate-400 mb-8">Get your free assessment. See exactly what we can do. No obligation, no pressure—just honest answers and a clear path to a cleaner property.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm transition" href="#">
                    Get Your Free Assessment Today
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-sm text-white border border-white/30 hover:bg-white/10 transition" href="tel:5551234567">
<span className="iconify" data-icon="lucide:phone" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    (555) 123-4567
                </a>
</div>
<div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-sm">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    info@cleanpro.com
                </div>
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:clock" data-width="16" style={{strokeWidth: '1.5'}}></span>
                    Response under 2 hours
                </div>
</div>
<div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-slate-300 text-sm">
<div className="flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:check-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Free Assessment
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:check-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    No Contracts Required
                </div>
<div className="flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:check-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    100% Satisfaction Guarantee
                </div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
<span className="text-white font-semibold text-lg tracking-tight">CP</span>
</div>
<span className="font-semibold text-xl tracking-tight text-white">CleanPro</span>
</div>
<p className="text-sm">Professional commercial exterior cleaning for restaurants, gas stations, HOAs &amp; industrial properties.</p>
<div className="mt-4 flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:shield-check" data-width="16" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs">$2M Liability Coverage</span>
</div>
</div>
<div>
<h4 className="font-medium text-white mb-4">Services</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition" href="#">Pressure Washing</a></li>
<li><a className="hover:text-white transition" href="#">Building Exterior</a></li>
<li><a className="hover:text-white transition" href="#">Parking Lot Cleaning</a></li>
<li><a className="hover:text-white transition" href="#">Graffiti Removal</a></li>
<li><a className="hover:text-white transition" href="#">Gutter Cleaning</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4">Industries</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition" href="#">Restaurants</a></li>
<li><a className="hover:text-white transition" href="#">Gas Stations</a></li>
<li><a className="hover:text-white transition" href="#">HOA &amp; Multi-Family</a></li>
<li><a className="hover:text-white transition" href="#">Industrial</a></li>
<li><a className="hover:text-white transition" href="#">Retail</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-4">Contact</h4>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:phone" data-width="14" style={{strokeWidth: '1.5'}}></span>
                            (555) 123-4567
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:mail" data-width="14" style={{strokeWidth: '1.5'}}></span>
                            info@cleanpro.com
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:map-pin" data-width="14" style={{strokeWidth: '1.5'}}></span>
                            Serving Greater Metro Area
                        </li>
<li className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:clock" data-width="14" style={{strokeWidth: '1.5'}}></span>
                            Response under 2 hours
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-wrap items-center gap-4 text-xs">
<span>Family Owned Since 2008</span>
<span>•</span>
<span>BBB A+ Rating</span>
<span>•</span>
<span>Fully Licensed &amp; Insured</span>
</div>
<div className="flex items-center gap-6 text-xs">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Terms of Service</a>
</div>
</div>
<div className="mt-6 text-center text-xs text-slate-500">
                © 2024 CleanPro Commercial Exterior Cleaning. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
