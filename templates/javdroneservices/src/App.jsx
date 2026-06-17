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
      
function handleRouting() {
const hash = window.location.hash;
const viewHome = document.getElementById('view-home');
const viewPortfolio = document.getElementById('view-portfolio');
const viewAbout = document.getElementById('view-about');
if(viewHome) viewHome.classList.add('hidden');
if(viewPortfolio) viewPortfolio.classList.add('hidden');
if(viewAbout) viewAbout.classList.add('hidden');
if (hash === '#portfolio-page') {
if(viewPortfolio) viewPortfolio.classList.remove('hidden');
window.scrollTo(0, 0);
} else if (hash === '#about-page') {
if(viewAbout) viewAbout.classList.remove('hidden');
window.scrollTo(0, 0);
} else {
if(viewHome) viewHome.classList.remove('hidden');
if (hash && hash !== '#portfolio-page' && hash !== '#about-page' && hash !== '#') {
const el = document.querySelector(hash);
if (el) {
setTimeout(() => {
el.scrollIntoView({ behavior: 'smooth' });
}, 50);
}
} else if (!hash || hash === '#') {
window.scrollTo(0, 0);
}
}
}
window.addEventListener('hashchange', handleRouting);
window.addEventListener('DOMContentLoaded', handleRouting);



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex-shrink-0 flex items-center gap-2 cursor-pointer" href="#">
<iconify-icon className="text-xl text-blue-600" height="20" icon="mingcute:drone-line" strokeWidth="1.5" style={{color: 'rgb(234, 88, 12)'}} width="20"></iconify-icon>
<span className="uppercase cursor-pointer text-lg font-medium text-gray-900 tracking-widest" onclick="window.location.href='/home'" role="button">JAV Drone Services</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-500" href="#services">
              Services
            </a>
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-500" href="/portfolio">
              Portfolio
            </a>
<a className="hover:text-gray-900 transition-colors text-sm font-medium text-gray-500" href="#how-it-works">
              How it Works
            </a>
</div>

<div className="flex items-center">
<a className="inline-flex items-center justify-center hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-sm font-medium text-white bg-blue-600 border-transparent border rounded-md pt-2 pr-4 pb-2 pl-4 shadow-sm" href="#contact">
              Get a Quote
            </a>
</div>
</div>
</div>
</nav>

<div className="" id="view-home">

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-950">
<div className="absolute inset-0 z-0">
<img alt="Aerial view of a neighborhood" className="opacity-40 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/497f08d1-ade0-44a8-b51b-4f44bc267077_3840w.png"/>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="sm:px-6 lg:px-8 z-10 text-center max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Professional Drone Photography &amp; Inspections That Save Time and
            Close Deals Faster
          </h1>
<p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Elevate your perspective. We focus on speed, safety, and
            uncompromising quality to deliver actionable insights and stunning
            media.
          </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all" href="#contact">
              Get a Quote
            </a>
<a className="inline-flex items-center justify-center hover:bg-gray-800 hover:border-gray-500 transition-all text-base font-medium text-white bg-gray-800/50 border-gray-600 border rounded-md pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm" href="/portfolio">
              View Portfolio
            </a>
</div>
</div>
</section>

<div className="bg-white border-b border-gray-100 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
<iconify-icon className="text-xl text-blue-600" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">FAA Part 107 Certified</span>
</div>
<div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
</div>
<div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
</div>
<div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
<iconify-icon className="text-xl text-blue-600" icon="solar:hand-shake-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium">Reliable Service</span>
</div>
</div>
</div>
</div>

<section className="lg:py-28 bg-gray-50 pt-20 pb-20" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-gray-900">
              Specialized Aerial Solutions
            </h2>
<p className="mt-4 text-base text-gray-500">
              Comprehensive drone services tailored for real estate
              professionals, property managers, and construction teams.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
                Real Estate Media
              </h3>
<p className="text-sm text-gray-500 leading-relaxed">
                Showcase properties from breathtaking angles. High-res photos
                and cinematic 4K video to attract premium buyers.
              </p>
</div>
<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
                Roof Inspections
              </h3>
<p className="text-sm text-gray-500 leading-relaxed">
                Safe, fast, and highly detailed roof condition reports. Spot
                damage safely without putting boots on steep pitches.
              </p>
</div>
<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mb-4">
<iconify-icon className="text-2xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
                Property Management
              </h3>
<p className="leading-relaxed text-sm text-gray-500">Routine aerial inspections of commercial complexes, parking lots, and facades to streamline maintenance planning.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-gray-100" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 text-center mb-16">
            How It Works
          </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-gray-200 z-0"></div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-100 transition-colors">
<span className="text-3xl font-light text-blue-600">01</span>
</div>
<h4 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
                Request a Quote
              </h4>
<p className="text-sm text-gray-500 px-4">
                Tell us about your project needs, location, and timeline. We'll
                provide a fast, transparent estimate.
              </p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-100 transition-colors">
<span className="text-3xl font-light text-blue-600">02</span>
</div>
<h4 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
                Schedule a Flight
              </h4>
<p className="text-sm text-gray-500 px-4">
                We handle the airspace checks and logistics, scheduling a flight
                time that works best for optimal lighting and conditions.
              </p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-blue-100 transition-colors">
<span className="text-3xl font-light text-blue-600">03</span>
</div>
<h4 className="text-lg font-medium tracking-tight text-gray-900 mb-2">
                Receive Media
              </h4>
<p className="text-sm text-gray-500 px-4">
                Access your fully edited, high-resolution media or inspection
                data via a secure link within 24-48 hours.
              </p>
</div>
</div>
</div>
</section>
</div>

<div className="hidden min-h-screen pt-32 pb-20 bg-gray-50" id="view-portfolio">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-12">
<h1 className="text-4xl font-medium tracking-tight text-gray-900 mb-4">
            Our Portfolio
          </h1>
<p className="text-base text-gray-500">
            Explore our recent aerial photography, videography, and inspection
            projects across various industries.
          </p>
</div>

<div className="flex flex-wrap justify-center gap-2 mb-12">
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full shadow-sm">
            All Work
          </button>
<button className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            Real Estate
          </button>
<button className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            Inspections
          </button>
<button className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            Commercial
          </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-video mb-4 border border-gray-100">
<img alt="Modern Home Aerial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight">
              Luxury Estate Overview
            </h3>
<p className="text-sm text-gray-500 mt-1">
              Real Estate • Beverly Hills, CA
            </p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-video mb-4 border border-gray-100">
<img alt="Commercial Building" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight">
              Downtown Office Complex
            </h3>
<p className="text-sm text-gray-500 mt-1">Commercial • Chicago, IL</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-video mb-4 border border-gray-100">
<img alt="Roof Inspection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight">
              Tile Roof Damage Analysis
            </h3>
<p className="text-sm text-gray-500 mt-1">Inspection • Phoenix, AZ</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-video mb-4 border border-gray-100">
<img alt="Mansion Aerial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight">
              Suburban Property Showcase
            </h3>
<p className="text-sm text-gray-500 mt-1">Real Estate • Austin, TX</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-video mb-4 border border-gray-100">
<img alt="Construction Site" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight">
              Phase 2 Construction Progress
            </h3>
<p className="text-sm text-gray-500 mt-1">Commercial • Denver, CO</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-video mb-4 border border-gray-100">
<img alt="Land Mapping" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<h3 className="text-base font-medium text-gray-900 tracking-tight">
              Topographical Mapping
            </h3>
<p className="text-sm text-gray-500 mt-1">Mapping • Seattle, WA</p>
</div>
</div>
</div>
</div>
<div className="hidden min-h-screen pt-32 pb-20 bg-gray-50" id="view-about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-16">
<h1 className="text-4xl font-medium tracking-tight text-gray-900 mb-6">
            About JAV Studios
          </h1>
<p className="text-lg text-gray-500 leading-relaxed">
            We are passionate about capturing the world from above. Our team of
            certified drone pilots and media professionals deliver stunning
            aerial perspectives that elevate your brand and projects.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
<img alt="Drone pilot in action" className="w-full h-full object-cover aspect-square" src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-6">
              Our Mission
            </h2>
<p className="text-base text-gray-600 mb-6 leading-relaxed">
              At JAV Studios, our mission is to provide safe, reliable, and
              high-quality drone services that solve real-world problems.
              Whether it's showcasing a luxury property, inspecting a commercial
              roof, or tracking construction progress, we bring precision and
              creativity to every flight.
            </p>
<p className="text-base text-gray-600 mb-8 leading-relaxed">
              Founded on the principles of innovation and excellence, we utilize
              the latest drone technology and editing software to ensure our
              clients receive the best possible results.
            </p>
<div className="grid grid-cols-2 gap-6">
<div className="border-l-2 border-blue-600 pl-4">
<h4 className="text-2xl font-medium text-gray-900">500+</h4>
<p className="text-sm text-gray-500">Flights Completed</p>
</div>
<div className="border-l-2 border-blue-600 pl-4">
<h4 className="text-2xl font-medium text-gray-900">100%</h4>
<p className="text-sm text-gray-500">Safety Record</p>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="lg:py-28 text-white bg-gray-950 border-gray-800 border-t pt-20 pb-20" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6">
              Get a Fast Quote Today.
            </h2>
<p className="text-lg text-gray-400 mb-8 font-light">
              Fill out the form with your project details, and our team will get
              back to you within 24 hours to discuss logistics and pricing.
            </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-xl text-blue-500" height="20" icon="solar:phone-calling-outline" strokeWidth="1.5" style={{color: 'rgb(59, 130, 246)'}} width="20"></iconify-icon>
<span className="text-sm">540-630-1591</span>
</div>
<div className="flex items-center gap-3 text-gray-300">
<iconify-icon className="text-xl text-blue-500" height="20" icon="solar:mailbox-outline" strokeWidth="1.5" style={{color: 'rgb(59, 130, 246)'}} width="20"></iconify-icon>
<span className="text-sm">javdrones@gmail.com</span>
</div>
<div className="flex items-center gap-3 text-gray-300">
</div>
</div>
</div>

<div className="sm:p-8 bg-white rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-xl">
<form action="https://formspree.io/f/mgorekyo" className="space-y-6" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="name">
          Full Name
        </label>
<input className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="phone">
          Phone Number
        </label>
<input className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" id="phone" name="phone" placeholder="(555) 000-0000" required="" type="tel"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="email">
        Email Address
      </label>
<input className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="address">
        Property Address
      </label>
<input className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" id="address" name="address" placeholder="123 Main St, City, State" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="service">
        Service Needed
      </label>
<div className="relative">
<select className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow cursor-pointer pr-10" id="service" name="service" required="">
<option disabled="" selected="" value="">Select a service...</option>
<option value="real-estate">Real Estate Media</option>
<option value="roof-inspection">Roof Inspection</option>
<option value="property-management">Property Management</option>
<option value="mapping">Mapping &amp; 3D Modeling</option>
<option value="other">Other</option>
</select>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-gray-700 mb-1" htmlFor="message">
        Additional Details (Optional)
      </label>
<textarea className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow" id="message" name="message" placeholder="Briefly describe your project goals..." rows="3"></textarea>
</div>
<button className="w-full bg-blue-600 text-white font-medium py-3 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" type="submit">
      Request Quote
    </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 py-12 border-t border-gray-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-500 text-lg" icon="solar:camera-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="uppercase text-sm font-medium text-gray-400 tracking-widest">JAV Drone Services</span>
</div>
<p className="text-xs text-gray-600">© 2026 JAV Drone Services. All rights reserved. FAA Part 107 Certified.</p>
</div>
</footer>

    </>
  );
}
