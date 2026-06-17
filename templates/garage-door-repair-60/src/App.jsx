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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())


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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<a className="flex items-center gap-2.5 focus:outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 hover:opacity-90 transition-opacity" href="#">

<svg className="h-10 sm:h-12 w-auto shrink-0" fill="none" viewbox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">

<path d="M20 50 L55 30 L95 50 V85 H40" fill="#1289ce"></path>

<rect fill="white" height="4" width="65" x="25" y="55"></rect>
<rect fill="white" height="4" width="65" x="25" y="65"></rect>
<rect fill="white" height="4" width="65" x="25" y="75"></rect>

<path d="M10 65 L40 95 L110 20" stroke="#40914e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>

<path d="M10 65 L40 95 L110 20" stroke="#68c071" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
</svg>

<div className="hidden md:flex flex-col text-gray-700 pt-1">
<span className="text-xl leading-none font-medium tracking-tight mb-1">Garage Door</span>
<span className="text-xl leading-none font-medium tracking-tight">Repair Brothers</span>
</div>
</a>
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 text-lg font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 px-2 py-1" href="tel:720-600-2043">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
<span className="hidden sm:inline">720-600-2043</span>
</a>
<a className="hidden sm:inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" href="https://longmontgaragedoorrepairbrothers.com/" rel="noopener noreferrer" target="_blank">
                    Website
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</nav>

<main className="flex-grow">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="max-w-3xl">
<div className="flex flex-wrap gap-3 mb-8">
<span className="inline-flex items-center rounded-full bg-blue-50 px-3.5 py-1 text-base font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Garage door repair company</span>
<span className="inline-flex items-center rounded-full bg-blue-50 px-3.5 py-1 text-base font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Garage door supplier</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
                    Expert repair and replacement you can trust.
                </h1>
<p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl font-normal">
                    Trust Garage Door Repair Brothers Longmont for all your garage door needs. We offer expert repair and replacement services for residential and commercial garage doors throughout Longmont, Mead, and Firestone, CO. Our skilled technicians are committed to delivering high-quality artistry with a strong focus on customer satisfaction. Whether it’s a minor repair or a complete replacement, count on us for reliable service.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" href="https://longmontgaragedoorrepairbrothers.com/" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
                        Visit our website
                    </a>
<a className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-200 px-6 py-3.5 rounded-xl text-lg font-medium hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" href="tel:720-600-2043">
<i className="w-5 h-5" data-lucide="phone-call" strokeWidth="1.5"></i>
                        Call 720-600-2043
                    </a>
</div>
</div>
</div>

<section className="border-t border-gray-200 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6 flex items-center gap-2">
<i className="w-6 h-6 text-gray-400" data-lucide="map-pin" strokeWidth="1.5"></i>
                                Contact Information
                            </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 bg-white p-2.5 rounded-lg border border-gray-200 shadow-sm text-gray-600">
<i className="w-5 h-5" data-lucide="building" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-medium text-gray-900 text-lg">Address</p>
<p className="text-gray-600 text-lg mt-1 leading-relaxed">357 Main St, Suite 6<br/>Longmont, CO 80501</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-white p-2.5 rounded-lg border border-gray-200 shadow-sm text-gray-600">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<p className="font-medium text-gray-900 text-lg">Email</p>
<a className="text-gray-600 text-lg hover:text-gray-900 transition-colors mt-1 block break-all" href="mailto:garagedoorsbrotherslongmont@gmail.com">garagedoorsbrotherslongmont@gmail.com</a>
</div>
</li>
</ul>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-gray-900 mb-4">Social Media</h3>
<div className="flex gap-4">
<a className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all shadow-sm" href="https://www.facebook.com/p/Garage-door-repair-brothers-100068574971348/" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
<span className="font-medium text-base">Facebook</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-600 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-all shadow-sm" href="https://www.yelp.com/biz/garage-door-repair-brothers-longmont" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="star" strokeWidth="1.5"></i>
<span className="font-medium text-base">Yelp</span>
</a>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6 flex items-center gap-2">
<i className="w-6 h-6 text-gray-400" data-lucide="clock" strokeWidth="1.5"></i>
                            Business Hours
                        </h2>
<div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
<ul className="divide-y divide-gray-100">
<li className="flex justify-between items-center px-6 py-4.5 hover:bg-gray-50 transition-colors">
<span className="font-medium text-gray-900 text-lg">Monday</span>
<span className="text-gray-600 text-lg">7 AM - 9 PM</span>
</li>
<li className="flex justify-between items-center px-6 py-4.5 hover:bg-gray-50 transition-colors">
<span className="font-medium text-gray-900 text-lg">Tuesday</span>
<span className="text-gray-600 text-lg">7 AM - 9 PM</span>
</li>
<li className="flex justify-between items-center px-6 py-4.5 hover:bg-gray-50 transition-colors">
<span className="font-medium text-gray-900 text-lg">Wednesday</span>
<span className="text-gray-600 text-lg">7 AM - 9 PM</span>
</li>
<li className="flex justify-between items-center px-6 py-4.5 hover:bg-gray-50 transition-colors">
<span className="font-medium text-gray-900 text-lg">Thursday</span>
<span className="text-gray-600 text-lg">7 AM - 9 PM</span>
</li>
<li className="flex justify-between items-center px-6 py-4.5 hover:bg-gray-50 transition-colors">
<span className="font-medium text-gray-900 text-lg">Friday</span>
<span className="text-gray-600 text-lg">7 AM - 9 PM</span>
</li>
<li className="flex justify-between items-center px-6 py-4.5 bg-gray-50">
<span className="font-medium text-gray-900 text-lg">Saturday</span>
<span className="text-gray-500 font-medium text-lg px-3 py-1 bg-gray-100 rounded-md">Closed</span>
</li>
<li className="flex justify-between items-center px-6 py-4.5 hover:bg-gray-50 transition-colors">
<span className="font-medium text-gray-900 text-lg">Sunday</span>
<span className="text-gray-600 text-lg">7 AM - 6 PM</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900">Our Location</h2>
<a className="hidden sm:flex items-center gap-2 text-base font-medium text-gray-600 hover:text-gray-900 transition-colors" href="https://maps.google.com/?q=357+Main+St,+Suite+6,+Longmont,+CO+80501" rel="noopener noreferrer" target="_blank">
                        Get Directions
                        <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
<div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-2 shadow-sm">
<iframe allowfullscreen="" className="w-full h-[400px] lg:h-[500px] rounded-xl bg-gray-100" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97574.7155004333!2d-105.03199455000001!3d40.159881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf97556a72b23%3A0x70c63ac990b52c6a!2sGarage%20door%20repair%20brothers!5e0!3m2!1sen!2sus!4v1773307673996!5m2!1sen!2sus" style={{border: '0'}} title="Google Maps Location of Garage Door Repair Brothers"></iframe>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-gray-200 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2.5 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
<svg className="h-8 w-auto shrink-0" fill="none" viewbox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
<path d="M20 50 L55 30 L95 50 V85 H40" fill="#1289ce"></path>
<rect fill="white" height="4" width="65" x="25" y="55"></rect>
<rect fill="white" height="4" width="65" x="25" y="65"></rect>
<rect fill="white" height="4" width="65" x="25" y="75"></rect>
<path d="M10 65 L40 95 L110 20" stroke="#40914e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path>
<path d="M10 65 L40 95 L110 20" stroke="#68c071" strokeLinecap="round" strokeLinejoin="round" strokeWidth="12"></path>
</svg>
<div className="flex flex-col text-gray-900 pt-0.5">
<span className="text-sm leading-none font-semibold tracking-tight mb-0.5">Garage Door</span>
<span className="text-sm leading-none font-semibold tracking-tight">Repair Brothers</span>
</div>
</div>
<p className="text-gray-500 text-lg text-center md:text-left">
                ©  Garage Door Repair Brothers. All rights reserved.
            </p>
</div>
</footer>


    </>
  );
}
