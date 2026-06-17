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
      

<nav className="fixed w-full z-50 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex justify-between items-center h-24">

<div className="flex flex-col items-start leading-none group cursor-pointer">
<div className="flex items-center space-x-2 text-slate-900">
<span className="text-2xl font-semibold tracking-tight">HI</span>
<div className="h-px w-4 bg-slate-900"></div>
<span className="text-2xl font-semibold tracking-tight">END</span>
</div>
<span className="text-xs tracking-[0.25em] font-medium text-slate-500 mt-2 uppercase">Builders</span>
</div>

<div className="hidden lg:flex items-center space-x-12 text-sm font-semibold tracking-wide uppercase text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-slate-900 transition-colors" href="#process">Process</a>
<a className="hover:text-slate-900 transition-colors" href="#testimonials">Reviews</a>
</div>

<div className="hidden lg:flex">
<a className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-all" href="#contact">
                        Free Estimate
                    </a>
</div>

<div className="lg:hidden">
<button className="text-slate-900 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="32"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
<div className="z-10">
<div className="inline-block px-4 py-1 bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-widest mb-6">
                    Established 1994
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-8">
                    Craftsmanship that stands the test of time.
                </h1>
<p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
                    We specialize in transforming homes for the next chapter of your life. From roof to foundation, experience a seamless renovation journey.
                </p>
<div className="flex flex-col sm:flex-row gap-0 sm:gap-4">
<a className="inline-flex justify-center items-center px-10 py-5 bg-slate-900 text-white text-base font-semibold uppercase tracking-wider hover:bg-slate-800 transition-all" href="#contact">
                        Start Project
                    </a>
<a className="inline-flex justify-center items-center px-10 py-5 bg-white border border-slate-300 text-slate-900 text-base font-semibold uppercase tracking-wider hover:bg-slate-50 transition-colors" href="#expertise">
                        View Services
                    </a>
</div>
</div>
<div className="relative h-[600px] w-full">
<img alt="Luxury Home" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 bg-white p-6 md:p-8 max-w-xs shadow-none border-t border-r border-slate-200">
<p className="text-sm text-slate-500 uppercase tracking-wider mb-1">Featured</p>
<p className="text-xl font-semibold text-slate-900">The Estate Remodel</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-slate-900 mb-6" icon="solar:crown-star-linear" width="48"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-8">
                Integrity, Experience, and Attention to Detail.
            </h2>
<p className="text-xl text-slate-600 leading-loose">
                For over 30 years, we have served discerning homeowners who value quality above all else. We understand that your home is your sanctuary. Our team ensures every project, from a simple repair to a complex addition, is executed with precision and respect for your property.
            </p>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-slate-200 pb-8">
<div>
<span className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-2">Interiors</span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Living Spaces Reimagined</h2>
</div>
<p className="text-slate-600 max-w-md mt-4 md:mt-0 text-lg">Updating the heart of your home with modern amenities and timeless design.</p>
</div>
<div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">

<div className="bg-white p-12 hover:bg-slate-50 transition-colors group">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-slate-900 group-hover:scale-110 transition-transform duration-300" icon="solar:chef-hat-linear" width="40"></iconify-icon>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Kitchen Remodels</h3>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                        Chef-grade appliances, custom cabinetry, and improved layouts that make hosting family gatherings a joy.
                    </p>
<ul className="space-y-2 text-slate-600">
<li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 mr-3"></span>Custom Islands &amp; Countertops</li>
<li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 mr-3"></span>Lighting Plans</li>
</ul>
</div>

<div className="bg-white p-12 hover:bg-slate-50 transition-colors group">
<div className="flex justify-between items-start mb-8">
<iconify-icon className="text-slate-900 group-hover:scale-110 transition-transform duration-300" icon="solar:bath-linear" width="40"></iconify-icon>
<iconify-icon className="text-slate-300 group-hover:text-slate-900 transition-colors" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4">Bathroom Remodels</h3>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                        Turn your master bath into a spa retreat with walk-in showers, soaking tubs, and accessible design features.
                    </p>
<ul className="space-y-2 text-slate-600">
<li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 mr-3"></span>Walk-in Showers</li>
<li className="flex items-center"><span className="w-1.5 h-1.5 bg-slate-900 mr-3"></span>Safety &amp; Accessibility</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<img alt="Home Addition" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2">
<span className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-4">Space Solutions</span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-8">Expanding Your Footprint</h2>
<div className="space-y-10">
<div className="flex gap-6">
<div className="shrink-0 mt-1">
<iconify-icon className="text-slate-900" icon="solar:home-add-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Room Additions</h3>
<p className="text-slate-600 leading-relaxed">
                                    Need a new master suite, sunroom, or guest wing? We seamlessly integrate new structures with your existing home's architecture.
                                </p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 mt-1">
<iconify-icon className="text-slate-900" icon="solar:garage-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Garage Conversions</h3>
<p className="text-slate-600 leading-relaxed">
                                    Transform underutilized garage space into a functional home office, gym, or ADU (Accessory Dwelling Unit).
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="mb-16">
<span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-2">Exteriors</span>
<h2 className="text-4xl font-semibold text-white tracking-tight">Curb Appeal &amp; Protection</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="border border-slate-700 p-8 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-slate-400 mb-6" icon="solar:shield-up-linear" width="36"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-4">Roofing Systems</h3>
<p className="text-slate-400 mb-6 leading-relaxed">
                        Expert installation of durable roofing materials designed to withstand the elements.
                    </p>
<ul className="text-sm text-slate-300 space-y-3">
<li className="flex items-center"><iconify-icon className="mr-3 text-white" icon="solar:check-square-linear"></iconify-icon>Asphalt Shingles</li>
<li className="flex items-center"><iconify-icon className="mr-3 text-white" icon="solar:check-square-linear"></iconify-icon>Clay &amp; Concrete Tile</li>
<li className="flex items-center"><iconify-icon className="mr-3 text-white" icon="solar:check-square-linear"></iconify-icon>Metal Roofing</li>
</ul>
</div>

<div className="border border-slate-700 p-8 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-slate-400 mb-6" icon="solar:paint-roller-linear" width="36"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-4">Painting &amp; Repairs</h3>
<p className="text-slate-400 mb-6 leading-relaxed">
                        Meticulous preparation and high-quality finishes for both interior and exterior surfaces.
                    </p>
<ul className="text-sm text-slate-300 space-y-3">
<li className="flex items-center"><iconify-icon className="mr-3 text-white" icon="solar:check-square-linear"></iconify-icon>Exterior Stucco &amp; Wood</li>
<li className="flex items-center"><iconify-icon className="mr-3 text-white" icon="solar:check-square-linear"></iconify-icon>Interior Trim &amp; Walls</li>
<li className="flex items-center"><iconify-icon className="mr-3 text-white" icon="solar:check-square-linear"></iconify-icon>Drywall &amp; Siding Repair</li>
</ul>
</div>

<div className="border border-slate-700 p-8 hover:bg-slate-800 transition-colors">
<iconify-icon className="text-slate-400 mb-6" icon="solar:bricks-linear" width="36"></iconify-icon>
<h3 className="text-xl font-semibold text-white mb-4">Hardscaping</h3>
<p className="text-slate-400 mb-6 leading-relaxed">
                        Define your outdoor space with structural elegance and durable materials.
                    </p>
<ul className="text-sm text-slate-300 space-y-3">
<li className="flex items-center"><iconify-icon className="mr-3 text-white" icon="solar:check-square-linear"></iconify-icon>Paver Driveways</li>
<li className="flex items-center"><iconify-icon className="mr-3 text-white" icon="solar:check-square-linear"></iconify-icon>Retaining Walls</li>
<li className="flex items-center"><iconify-icon className="mr-3 text-white" icon="solar:check-square-linear"></iconify-icon>Walkways &amp; Patios</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-0">
<div className="grid lg:grid-cols-2 min-h-[500px]">
<div className="bg-slate-50 p-12 lg:p-24 flex flex-col justify-center">
<span className="text-sm font-bold text-slate-500 uppercase tracking-widest block mb-4">Outdoor Living</span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Pool Replaster &amp; Renovation</h2>
<p className="text-xl text-slate-600 leading-relaxed mb-8">
                    Is your pool looking tired? We specialize in pool resurfacing and replastering to restore its original beauty or give it a modern facelift with new tile and coping.
                </p>
<div className="grid grid-cols-2 gap-6">
<div className="border-l-2 border-slate-900 pl-4">
<p className="font-bold text-slate-900 text-lg">Resurfacing</p>
<p className="text-sm text-slate-500 mt-1">Pebble, Quartz, Plaster</p>
</div>
<div className="border-l-2 border-slate-900 pl-4">
<p className="font-bold text-slate-900 text-lg">Tile &amp; Coping</p>
<p className="text-sm text-slate-500 mt-1">Modern stone &amp; mosaic</p>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px]">
<img alt="Pool Renovation" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1572331165267-854da2b00ca1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-white" id="expertise">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-16">Our Expertise at a Glance</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white border border-slate-200 p-6 hover:border-slate-900 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:underline decoration-1 underline-offset-4">Kitchen Remodels</h3>
<p className="text-sm text-slate-500">Custom cabinetry &amp; layouts</p>
</div>

<div className="group bg-white border border-slate-200 p-6 hover:border-slate-900 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:underline decoration-1 underline-offset-4">Bathroom Remodels</h3>
<p className="text-sm text-slate-500">Spa-like renovations</p>
</div>

<div className="group bg-white border border-slate-200 p-6 hover:border-slate-900 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:underline decoration-1 underline-offset-4">Room Additions</h3>
<p className="text-sm text-slate-500">Expanding square footage</p>
</div>

<div className="group bg-white border border-slate-200 p-6 hover:border-slate-900 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:underline decoration-1 underline-offset-4">Garage Conversions</h3>
<p className="text-sm text-slate-500">ADUs and Home Offices</p>
</div>

<div className="group bg-white border border-slate-200 p-6 hover:border-slate-900 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:underline decoration-1 underline-offset-4">Hardscaping</h3>
<p className="text-sm text-slate-500">Pavers, walls &amp; patios</p>
</div>

<div className="group bg-white border border-slate-200 p-6 hover:border-slate-900 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:underline decoration-1 underline-offset-4">Pool Replaster</h3>
<p className="text-sm text-slate-500">Restoration &amp; tiling</p>
</div>

<div className="group bg-white border border-slate-200 p-6 hover:border-slate-900 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:underline decoration-1 underline-offset-4">Roofing</h3>
<p className="text-sm text-slate-500">Tile, Metal, Shingle</p>
</div>

<div className="group bg-white border border-slate-200 p-6 hover:border-slate-900 transition-colors">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:underline decoration-1 underline-offset-4">Painting &amp; Repairs</h3>
<p className="text-sm text-slate-500">Interior &amp; Exterior</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">A Seamless Experience</h2>
<p className="text-xl text-slate-600 leading-relaxed mb-8">
                        Renovating shouldn't be stressful. We handle the permits, the materials, and the schedule so you can focus on the excitement of your new space.
                    </p>
<a className="text-slate-900 font-semibold border-b-2 border-slate-900 hover:text-slate-700 hover:border-slate-700 transition-colors pb-1" href="#contact">
                        Schedule a Consultation
                    </a>
</div>
<div className="space-y-8">
<div className="flex items-start">
<span className="text-3xl font-bold text-slate-300 mr-6">01</span>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Consultation &amp; Estimate</h3>
<p className="text-slate-500">We visit your home, assess your needs, and provide a transparent, detailed quote.</p>
</div>
</div>
<div className="flex items-start">
<span className="text-3xl font-bold text-slate-300 mr-6">02</span>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Design &amp; Planning</h3>
<p className="text-slate-500">Material selection and scheduling. We prepare everything before a hammer is lifted.</p>
</div>
</div>
<div className="flex items-start">
<span className="text-3xl font-bold text-slate-300 mr-6">03</span>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Construction &amp; Cleanup</h3>
<p className="text-slate-500">Efficient work with daily site cleanup. We treat your home with total respect.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">What Our Clients Say</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-slate-50 p-10 border border-slate-100">
<div className="flex text-amber-500 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"The team did an incredible job on our roof replacement and exterior painting. They were on time, professional, and the cleanup was spotless."</p>
<p className="font-semibold text-slate-900">— James H.</p>
</div>
<div className="bg-slate-50 p-10 border border-slate-100">
<div className="flex text-amber-500 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Our kitchen remodel exceeded expectations. They managed the custom cabinetry installation perfectly. Highly recommended for complex projects."</p>
<p className="font-semibold text-slate-900">— Sarah &amp; Tom W.</p>
</div>
<div className="bg-slate-50 p-10 border border-slate-100">
<div className="flex text-amber-500 mb-4">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"We converted our garage into a guest suite. The process was smooth from permits to the final coat of paint. Great communication."</p>
<p className="font-semibold text-slate-900">— Michael B.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-4xl mx-auto px-6 lg:px-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Common Questions</h2>
<div className="space-y-6">
<div className="border border-slate-200 p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Do you handle permits?</h3>
<p className="text-slate-600">Yes, we handle all necessary permitting and city inspections for your project, ensuring everything is up to code.</p>
</div>
<div className="border border-slate-200 p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Are you licensed and insured?</h3>
<p className="text-slate-600">Absolutely. We carry full liability insurance and worker's compensation, and we are fully licensed for general building and roofing.</p>
</div>
<div className="border border-slate-200 p-6">
<h3 className="text-lg font-semibold text-slate-900 mb-2">What areas do you serve?</h3>
<p className="text-slate-600">We serve the greater metropolitan area and surrounding suburbs. Please contact us to confirm if we service your specific neighborhood.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl font-semibold text-white tracking-tight mb-6">Let's Discuss Your Project</h2>
<p className="text-xl text-slate-400 mb-12">
                        Fill out the form below to request a complimentary consultation. We look forward to hearing about your vision.
                    </p>
<div className="space-y-8">
<div className="flex items-center space-x-4 text-white">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
<span className="text-xl font-medium">(555) 123-4567</span>
</div>
<div className="flex items-center space-x-4 text-white">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
<span className="text-xl font-medium">hello@hiendbuilders.com</span>
</div>
<div className="flex items-center space-x-4 text-white">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
<span className="text-xl font-medium">123 Builder Lane, Suite 100</span>
</div>
</div>
</div>
<div className="bg-white p-8 md:p-12">
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">First Name</label>
<input className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" type="email"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">Service Needed</label>
<select className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors appearance-none">
<option>Kitchen Remodel</option>
<option>Bathroom Remodel</option>
<option>Room Addition</option>
<option>Roofing</option>
<option>Pool/Hardscape</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 uppercase tracking-wide mb-2">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-300 px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors" rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest py-4 hover:bg-slate-800 transition-colors" type="button">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white py-16 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start">
<div className="flex items-center space-x-2 text-slate-900 mb-2">
<span className="text-xl font-bold tracking-tight">HI</span>
<div className="h-px w-3 bg-slate-900"></div>
<span className="text-xl font-bold tracking-tight">END</span>
</div>
<p className="text-sm text-slate-500">© 2024 Premier Hi-End Builders. Licensed &amp; Insured.</p>
</div>
<div className="flex space-x-8 text-sm font-semibold uppercase tracking-wider text-slate-500">
<a className="hover:text-slate-900" href="#">Privacy</a>
<a className="hover:text-slate-900" href="#">Terms</a>
<a className="hover:text-slate-900" href="#">Sitemap</a>
</div>
</div>
</footer>

    </>
  );
}
