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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();
    
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
      

<header className="sticky top-0 z-50 w-full flex flex-col shadow-sm">

<div className="bg-[#A32020] text-white w-full">
<div className="max-w-7xl mx-auto px-4 lg:px-8 py-2.5 flex justify-between items-center">
<div className="hidden md:flex items-center space-x-8 text-base font-medium">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="map-pin"></i>
<span>Yellowknife, NWT</span>
</div>
<a className="flex items-center space-x-2 hover:text-gray-200 transition-colors" href="mailto:office@commercial-nds.ca">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="mail"></i>
<span>office@commercial-nds.ca</span>
</a>
</div>

<div className="flex justify-between md:justify-end w-full md:w-auto items-center">
<span className="md:hidden text-base font-medium">Yellowknife, NWT</span>
<a className="flex items-center space-x-2 bg-white/10 md:bg-transparent px-3 py-1 md:p-0 rounded-md hover:bg-white/20 md:hover:bg-transparent transition-colors group" href="tel:8678739415">
<i className="w-5 h-5 md:w-6 md:h-6 stroke-[1.5] group-hover:scale-110 transition-transform" data-lucide="phone"></i>
<span className="text-xl md:text-2xl font-semibold tracking-tight">(867) 873-9415</span>
</a>
</div>
</div>
</div>

<div className="bg-white border-b border-gray-100 w-full">
<div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex justify-between items-center">
<a className="flex items-center gap-3 group" href="/">

<div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold tracking-tight group-hover:bg-[#A32020] transition-colors">
                        NDS
                    </div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight leading-none text-gray-900">COMMERCIAL</span>
<span className="text-xs font-medium text-gray-500 tracking-widest uppercase">Disaster Services</span>
</div>
</a>
<nav className="hidden lg:flex items-center space-x-8 text-base font-medium text-gray-700">
<a className="hover:text-[#A32020] transition-colors" href="/">HOME</a>
<a className="flex items-center space-x-1 text-[#A32020] transition-colors" href="#">
<span>OUR SERVICES</span>
<i className="w-4 h-4 stroke-[1.5]" data-lucide="chevron-down"></i>
</a>
<a className="hover:text-[#A32020] transition-colors" href="/employment/">EMPLOYMENT</a>
<a className="hover:text-[#A32020] transition-colors" href="/our-team/">OUR TEAM</a>
<a className="hover:text-[#A32020] transition-colors" href="/contact/">CONTACT US</a>
</nav>
<div className="flex items-center space-x-4">
<a className="hidden md:flex bg-gray-900 text-white px-6 py-2.5 text-base font-medium hover:bg-[#A32020] transition-colors rounded-sm" href="#contact-form">
                        REQUEST NOW
                    </a>
<button className="lg:hidden p-2 text-gray-600 hover:text-gray-900">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative bg-gray-900 pt-16 pb-32 lg:pt-24 lg:pb-48 overflow-hidden">
<img alt="Construction Site Yellowknife" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 flex flex-col items-start">

<nav className="flex text-base font-medium text-gray-400 mb-6 space-x-2">
<a className="hover:text-white transition-colors" href="/">Home</a>
<span>»</span>
<a className="hover:text-white transition-colors" href="#">Our Restoration Services</a>
<span>»</span>
<span className="text-white">General contractor Yellowknife</span>
</nav>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-white max-w-4xl leading-[1.1]">
                General contractor Yellowknife
            </h1>
<p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
                YELLOWKNIFE CONTRACTORS FOR ALL YOUR CONSTRUCTION AND RENOVATION NEEDS
            </p>
<div className="mt-10 flex gap-4">
<a className="bg-[#A32020] text-white px-8 py-4 text-lg font-medium hover:bg-red-800 transition-colors rounded-sm" href="#contact-form">
                    Request Consultation
                </a>
</div>
</div>
</section>

<section className="relative z-20 max-w-7xl mx-auto px-4 lg:px-8 -mt-16 lg:-mt-24 mb-16">
<div className="bg-white shadow-xl border border-gray-100 rounded-sm p-8 md:p-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
<div className="flex flex-col items-start pt-6 md:pt-0 md:pl-0">
<div className="w-12 h-12 bg-red-50 text-[#A32020] flex items-center justify-center rounded-sm mb-5">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="clock"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Available 24/7</h3>
<p className="text-lg text-gray-600 leading-relaxed">We accept calls and handle emergencies around the clock, year-round.</p>
</div>
<div className="flex flex-col items-start pt-6 md:pt-0 md:pl-10">
<div className="w-12 h-12 bg-red-50 text-[#A32020] flex items-center justify-center rounded-sm mb-5">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">1-Year Warranty</h3>
<p className="text-lg text-gray-600 leading-relaxed">A comprehensive one-year warranty backs all our construction and renovation work.</p>
</div>
<div className="flex flex-col items-start pt-6 md:pt-0 lg:pl-10">
<div className="w-12 h-12 bg-red-50 text-[#A32020] flex items-center justify-center rounded-sm mb-5">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="history"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">30 Years Experience</h3>
<p className="text-lg text-gray-600 leading-relaxed">Our company has been a trusted local partner on the market for almost three decades.</p>
</div>
<div className="flex flex-col items-start pt-6 md:pt-0 lg:pl-10">
<div className="w-12 h-12 bg-red-50 text-[#A32020] flex items-center justify-center rounded-sm mb-5">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="smile"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Stress-Free Process</h3>
<p className="text-lg text-gray-600 leading-relaxed">Delivering a smooth, transparent construction project for every client is our priority.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20 flex flex-col lg:flex-row gap-16 relative">

<article className="lg:w-2/3 space-y-12">
<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
<p>
                    Commercial-NDS offers a comprehensive range of construction and renovation services tailored to the unique environmental and regulatory needs of Yellowknife. From replacing doorknobs to erecting commercial and residential buildings, no project is too large or small.
                </p>
<p>
                    Our specialists will support you through every step, ensuring open communication, logical budget justification, adherence to technical requirements, and timely completion.
                </p>
</div>
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Our Construction Services</h2>
<p className="text-lg text-gray-600 leading-relaxed">
                    As a specialised general contractor, we manage the full cycle of construction services: from initial estimate and visualizations to the final handover. The process is adapted based on your project's specifics. We start by conducting several meetings with you to pinpoint essential construction details. 
                </p>
<p className="text-lg text-gray-600 leading-relaxed">
                    Our expert decisions are not only well informed but also clearly communicated to ensure your full understanding and involvement. This approach guarantees that your expectations will align perfectly with the final outcome. We continuously monitor progress and quality control throughout the project.
                </p>
</div>

<div className="space-y-8 bg-gray-50 p-8 md:p-10 rounded-sm border border-gray-100">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">The Construction Process: From Planning to Completion</h3>
<p className="text-lg text-gray-600">The construction process includes the following stages with your local contractor:</p>
<div className="space-y-8 mt-8">
<div className="flex gap-4 md:gap-6">
<div className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#A32020] font-semibold text-lg">1</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Initial Consultations</h4>
<p className="text-lg text-gray-600">Meetings with our managers, architects, and foremen to help us understand the site conditions, gather your requirements, establish a preliminary budget and work plan.</p>
</div>
</div>
<div className="flex gap-4 md:gap-6">
<div className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#A32020] font-semibold text-lg">2</div>
<div className="space-y-4">
<h4 className="text-xl font-semibold tracking-tight text-gray-900">Design and Planning</h4>
<div className="space-y-3 pl-4 border-l-2 border-gray-200">
<div>
<strong className="text-gray-900 block mb-1">Architectural Design:</strong>
<p className="text-lg text-gray-600">We detail the general layout of the main building and any additions, including cross-sections, wall thickness, ceiling heights. We specify materials, foundation type, and calculate structural load.</p>
</div>
<div>
<strong className="text-gray-900 block mb-1">Structural and Mechanical Design:</strong>
<p className="text-lg text-gray-600">Detailed plans for heating, ventilation, HVAC systems, water supply, and sewage systems are prepared, ensuring all aspects meet regulatory standards.</p>
</div>
</div>
</div>
</div>
<div className="flex gap-4 md:gap-6">
<div className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#A32020] font-semibold text-lg">3</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Obtaining Permits and Starting Construction</h4>
<p className="text-lg text-gray-600">After final adjustments and approvals, we secure all necessary permits and begin the construction phase.</p>
</div>
</div>
<div className="flex gap-4 md:gap-6">
<div className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#A32020] font-semibold text-lg">4</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Construction Phase</h4>
<p className="text-lg text-gray-600">Our team works diligently to bring your vision to life, providing regular updates and ensuring every task meets our high standards.</p>
</div>
</div>
<div className="flex gap-4 md:gap-6">
<div className="flex-shrink-0 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-[#A32020] font-semibold text-lg">5</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Inspection</h4>
<p className="text-lg text-gray-600">Our experts confirm that all construction complies with the territorial regulation and standards.</p>
</div>
</div>
<div className="flex gap-4 md:gap-6">
<div className="flex-shrink-0 w-10 h-10 bg-[#A32020] rounded-full flex items-center justify-center text-white font-semibold text-lg">6</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">Project Handover</h4>
<p className="text-lg text-gray-600">We present you with the completed project and hand over the fully operational facility.</p>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Renovation Services</h2>
<p className="text-lg text-gray-600 leading-relaxed">
                    If you're looking for top-tier renovation contractors in Yellowknife, look no further. In addition to building commercial and residential structures, we offer interior and exterior renovations and upgrades, including but not limited to:
                </p>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-lg text-gray-700">
<li className="flex items-center gap-3 bg-gray-50 p-4 rounded-sm border border-gray-100">
<i className="w-6 h-6 text-[#A32020] shrink-0 stroke-[1.5]" data-lucide="check-circle-2"></i>
                        Insulation upgrade
                    </li>
<li className="flex items-center gap-3 bg-gray-50 p-4 rounded-sm border border-gray-100">
<i className="w-6 h-6 text-[#A32020] shrink-0 stroke-[1.5]" data-lucide="check-circle-2"></i>
                        Repair and replacement of exterior cladding
                    </li>
<li className="flex items-center gap-3 bg-gray-50 p-4 rounded-sm border border-gray-100">
<i className="w-6 h-6 text-[#A32020] shrink-0 stroke-[1.5]" data-lucide="check-circle-2"></i>
                        Structural alterations to a building envelope
                    </li>
<li className="flex items-center gap-3 bg-gray-50 p-4 rounded-sm border border-gray-100">
<i className="w-6 h-6 text-[#A32020] shrink-0 stroke-[1.5]" data-lucide="check-circle-2"></i>
                        Installing high efficiency windows and doors
                    </li>
</ul>
</div>
<div className="space-y-6 border-t border-gray-200 pt-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Your One-Stop Construction Solution</h2>
<p className="text-lg text-gray-600 leading-relaxed">
                    Choose Commercial-NDS as your general contractor in Yellowknife, or let our specialists handle specific tasks of your project. Our flexible, personalized approach ensures that we deliver the optimal solution for your budget and requirements.
                </p>
<div className="bg-gray-900 text-white p-8 md:p-10 rounded-sm mt-8">
<h3 className="text-2xl font-semibold tracking-tight mb-4">Comprehensive Construction Services</h3>
<p className="text-lg text-gray-300 leading-relaxed">
                        Unlike other local contractors who might only handle specific skills, we offer start-to-end construction services for every project. By partnering with us, you avoid the hassle of seeking out and coordinating multiple professionals. With 25+ years operating in the unique north, our staff is trained and ready to handle any obstacle.
                    </p>
</div>
</div>
</article>

<aside className="lg:w-1/3 space-y-8">
<div className="sticky top-32 space-y-8">

<div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4">
<a className="flex-1 bg-[#A32020] text-white py-4 px-6 flex items-center justify-center gap-3 rounded-sm hover:bg-red-800 transition-colors font-medium text-lg" href="tel:8678739415">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="phone"></i>
                        (867) 873-9415
                    </a>
<a className="flex-1 bg-gray-900 text-white py-4 px-6 flex items-center justify-center gap-3 rounded-sm hover:bg-gray-800 transition-colors font-medium text-lg" href="mailto:office@commercial-nds.ca">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="mail"></i>
                        Email Us
                    </a>
</div>

<div className="aspect-[4/3] w-full relative overflow-hidden rounded-sm group">
<img alt="Construction Equipment" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="bg-white border border-gray-200 shadow-sm p-6 md:p-8 rounded-sm" id="contact-form">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6 uppercase">Request a Free Consultation</h3>
<form className="space-y-5">
<div>
<label className="sr-only" htmlFor="name">Your full name</label>
<input className="w-full border border-gray-300 focus:border-[#A32020] focus:ring-1 focus:ring-[#A32020] outline-none rounded-sm px-4 py-3.5 text-lg bg-gray-50 focus:bg-white transition-colors placeholder:text-gray-400" id="name" placeholder="Your full name" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Your phone number</label>
<input className="w-full border border-gray-300 focus:border-[#A32020] focus:ring-1 focus:ring-[#A32020] outline-none rounded-sm px-4 py-3.5 text-lg bg-gray-50 focus:bg-white transition-colors placeholder:text-gray-400" id="phone" placeholder="Your phone number" type="tel"/>
</div>
<div>
<label className="sr-only" htmlFor="email">Your email address</label>
<input className="w-full border border-gray-300 focus:border-[#A32020] focus:ring-1 focus:ring-[#A32020] outline-none rounded-sm px-4 py-3.5 text-lg bg-gray-50 focus:bg-white transition-colors placeholder:text-gray-400" id="email" placeholder="Your email address" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="message">Your message</label>
<textarea className="w-full border border-gray-300 focus:border-[#A32020] focus:ring-1 focus:ring-[#A32020] outline-none rounded-sm px-4 py-3.5 text-lg bg-gray-50 focus:bg-white transition-colors placeholder:text-gray-400 resize-none" id="message" placeholder="Tell us about your project" rows="3"></textarea>
</div>

<div className="flex items-center gap-3 border border-gray-200 bg-gray-50 p-4 rounded-sm">
<div className="relative flex items-center justify-center w-6 h-6 border-2 border-gray-400 rounded-sm bg-white cursor-pointer hover:border-gray-500 overflow-hidden">
<input className="absolute opacity-0 w-full h-full cursor-pointer peer" id="captcha" type="checkbox"/>
<i className="w-4 h-4 text-green-600 opacity-0 peer-checked:opacity-100 transition-opacity stroke-[3]" data-lucide="check"></i>
</div>
<label className="text-base text-gray-700 font-medium select-none cursor-pointer" htmlFor="captcha">I'm not a robot</label>
<div className="ml-auto flex flex-col items-center">
<i className="w-6 h-6 text-gray-400 stroke-[1.5]" data-lucide="shield-check"></i>
<span className="text-[10px] text-gray-400 font-medium mt-1">reCAPTCHA</span>
</div>
</div>
<button className="w-full bg-[#A32020] text-white py-4 font-medium text-lg rounded-sm hover:bg-red-800 transition-colors shadow-sm" type="submit">
                            Submit Request
                        </button>
</form>
</div>
</div>
</aside>
</section>

<section className="bg-[#A32020] py-16 lg:py-20 mt-8">
<div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white max-w-3xl uppercase leading-tight">
                We will plan, design and execute your renovation or restoration desires
            </h2>
<a className="bg-white text-gray-900 px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors rounded-sm whitespace-nowrap shadow-sm" href="#contact-form">
                GET A FREE CONSULTATION
            </a>
</div>
</section>

<section className="py-20 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 uppercase mb-6">Trusted General Contractor</h2>
<p className="text-lg text-gray-600 leading-relaxed">
                    Embark on your construction or renovation project with Commercial-NDS, your reliable partner in Yellowknife. See firsthand how we can meet your needs with our fleet and expertise in the unique northern environment.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-200">
<img alt="Commercial Building Construction Yellowknife" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-white text-xl font-medium tracking-tight">Commercial Build</span>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-200">
<img alt="Heavy Machinery Operations" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-white text-xl font-medium tracking-tight">Site Preparation</span>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-200">
<img alt="Residential Renovation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-white text-xl font-medium tracking-tight">Residential Renovation</span>
</div>
</div>

<div className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-gray-200">
<img alt="Exterior Cladding Replacement" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1590496793907-471d09cd5f84?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<span className="text-white text-xl font-medium tracking-tight">Exterior Cladding</span>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-lg font-medium text-[#A32020] hover:text-gray-900 transition-colors" href="/contact/">
                    Schedule a site visit
                    <i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-12 uppercase text-center md:text-left">
                Our Other Commercial Construction Services
            </h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">

<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="home"></i>
<span className="text-lg font-medium text-gray-900">Home builders</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="building-2"></i>
<span className="text-lg font-medium text-gray-900">General contractor</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="hammer"></i>
<span className="text-lg font-medium text-gray-900">Renovation contractor</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="factory"></i>
<span className="text-lg font-medium text-gray-900">Commercial constructors</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="layers"></i>
<span className="text-lg font-medium text-gray-900">Deck contractors</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="layout-panel-left"></i>
<span className="text-lg font-medium text-gray-900">Exterior cladding</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="chef-hat"></i>
<span className="text-lg font-medium text-gray-900">Kitchen contractors</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="bath"></i>
<span className="text-lg font-medium text-gray-900">Bath contractors</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="arrow-down-square"></i>
<span className="text-lg font-medium text-gray-900">Basement repair</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="blocks"></i>
<span className="text-lg font-medium text-gray-900">Concrete services</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="sparkles"></i>
<span className="text-lg font-medium text-gray-900">Commercial cleaning</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="grid-3x3"></i>
<span className="text-lg font-medium text-gray-900">Fence construction</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="box"></i>
<span className="text-lg font-medium text-gray-900">SIP builders</span>
</a>
<a className="group border border-gray-100 p-6 flex flex-col items-center text-center hover:border-[#A32020] hover:shadow-md transition-all rounded-sm bg-white" href="#">
<i className="w-8 h-8 text-gray-400 group-hover:text-[#A32020] transition-colors mb-4 stroke-[1.5]" data-lucide="columns"></i>
<span className="text-lg font-medium text-gray-900">Window contractor</span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div className="md:w-1/2 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 uppercase">
                    About Our Residential Construction Company
                </h2>
<div className="space-y-4 text-lg text-gray-600 leading-relaxed">
<p>
                        Commercial-NDS specializes in 24/7 emergency for water, fire, sewer and oil spill, asbestos/mould remediation and testing, cleaning &amp; restoration after disaster. We are serving our clients 7 days a week, 365 days a year.
                    </p>
<p>
                        We have an extensive expertise and experience in our industry. We offer our customers, with compassion, an efficient, fast, high quality service and work. We do our best to restore their home or business to its pre-disaster condition.
                    </p>
</div>
</div>
<div className="md:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">

<div className="flex flex-col items-center gap-4 group">
<div className="w-32 h-32 bg-white border border-gray-200 rounded-full flex items-center justify-center p-6 shadow-sm group-hover:border-gray-300 transition-colors">
<i className="w-16 h-16 text-gray-900 stroke-[1.5]" data-lucide="award"></i>
</div>
<span className="text-base font-medium text-gray-600 tracking-tight">COR Certified</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="w-32 h-32 bg-white border border-gray-200 rounded-full flex items-center justify-center p-6 shadow-sm group-hover:border-gray-300 transition-colors">
<i className="w-16 h-16 text-gray-900 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<span className="text-base font-medium text-gray-600 tracking-tight">IICRC Standard</span>
</div>
</div>
</div>
</section>

<section className="w-full h-[400px] lg:h-[500px] bg-gray-200 relative">

<iframe allowfullscreen="" className="w-full h-full border-0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.606798059738!2d-114.39752535!3d62.4540203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53d1f12ca1ebbb8f%3A0x40fdb9b2a60b0941!2sYellowknife%2C%20NT%2C%20Canada!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus">
</iframe>

<div className="absolute top-8 left-4 md:left-8 bg-white p-6 shadow-lg border border-gray-100 max-w-sm rounded-sm z-10 hidden md:block">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold text-xs tracking-tight">NDS</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900">Commercial NDS</h4>
<p className="text-base text-gray-500">Local Contractor</p>
</div>
</div>
<a className="text-base font-medium text-blue-600 hover:text-blue-800 transition-colors" href="https://maps.google.com" target="_blank">
                Get Directions
            </a>
</div>
</section>

<footer className="bg-[#A32020] text-white pt-16 pb-8 mt-auto w-full">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 border-b border-red-800/50 pb-16">

<div>
<h4 className="text-xl font-semibold tracking-tight uppercase mb-6 text-white/90">Opening Hours</h4>
<div className="space-y-6 text-base text-white/80">
<div>
<strong className="block text-white mb-1 font-medium">Office hours:</strong>
<p>Monday - Friday 8:00am - 5:00pm</p>
</div>
<div>
<strong className="block text-white mb-1 font-medium">Car Wash</strong>
<p>summer hours: 7:00am - 10:00pm</p>
<p>spring hours: 8:00am - 7:00pm</p>
<p>winter hours: 8:00am - 5:00pm</p>
<p className="text-sm mt-2 opacity-70 italic">closed when daily average temperature drops below -20°C</p>
</div>
</div>
</div>

<div>
<h4 className="text-xl font-semibold tracking-tight uppercase mb-6 text-white/90">Address</h4>
<div className="space-y-4 text-base text-white/80">
<p>PO Box 1644</p>
<p>114 Taitheilei Dr<br/>Yellowknife, NT<br/>X1A 2P2</p>
<div className="pt-4 mt-4 border-t border-red-800/50">
<a className="inline-flex items-center gap-2 hover:text-white transition-colors group" href="/contact/">
<i className="w-5 h-5 stroke-[1.5] group-hover:scale-110 transition-transform" data-lucide="map"></i>
                                View on Map
                            </a>
</div>
</div>
</div>

<div className="bg-red-900/40 p-8 rounded-sm border border-red-800/50">
<h4 className="text-xl font-semibold tracking-tight uppercase mb-4 text-white/90 flex items-center gap-3">
<i className="w-6 h-6 stroke-[1.5] text-red-400" data-lucide="alert-triangle"></i>
                        24/7 Emergency
                    </h4>
<p className="text-base text-white/80 mb-6">Available year-round for immediate disaster response and restoration.</p>
<a className="text-3xl font-semibold tracking-tight hover:text-gray-200 transition-colors block" href="tel:8678739415">
                        (867) 873-9415
                    </a>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-white/60">
<p>COPYRIGHT © 2017-2024 COMMERCIAL-NDS. ALL RIGHTS RESERVED.</p>
<div className="flex space-x-6">
<a className="hover:text-white transition-colors" href="/sitemap/">Sitemap</a>
<a className="hover:text-white transition-colors" href="/privacy-policy/">Privacy Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
