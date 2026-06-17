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



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
yellow: '#FACC15',
dark: '#0A0A0A',
gray: '#171717',
}
},
fontSize: {
'xxs': '0.65rem',
}
}
}
}

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
      

<div className="bg-white border-b border-gray-100 py-3 hidden md:block">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm font-medium text-gray-500">
<div className="flex items-center gap-4">
<div className="flex gap-3">
<span className="text-xs uppercase tracking-wider font-semibold text-brand-dark">Full Service Electrical Contractor</span>
</div>
</div>
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 font-geist hover:text-brand-dark transition-colors" href="contact.php">
<iconify-icon className="text-brand-yellow text-lg" icon="solar:phone-linear"></iconify-icon> Contact Us
                </a>
<span className="flex items-center gap-2 font-geist">
<iconify-icon className="text-brand-yellow text-lg" icon="solar:clock-circle-linear"></iconify-icon> Industrial &amp; Commercial
                </span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-yellow text-3xl" icon="solar:bolt-circle-bold"></iconify-icon>
<span className="text-2xl font-bold tracking-tight text-brand-dark font-space-grotesk">COATES</span>
</div>
<div className="hidden xl:flex items-center gap-6 text-sm font-medium text-gray-600">
<a className="hover:text-brand-dark transition-colors font-geist" href="index.php">Home</a>
<a className="hover:text-brand-dark transition-colors font-geist" href="history.php">Our History</a>
<a className="hover:text-brand-dark transition-colors font-geist" href="mission.php">Our Mission</a>
<a className="hover:text-brand-dark transition-colors font-geist" href="team.php">Our Team</a>
<a className="hover:text-brand-dark transition-colors font-geist" href="industrial.php">Services</a>
<a className="hover:text-brand-dark transition-colors font-geist" href="clients.php">Clients</a>
<a className="hover:text-brand-dark transition-colors font-geist" href="news.php">News</a>
</div>
<a className="bg-brand-yellow text-brand-dark px-6 py-3 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors hidden md:flex items-center gap-2 font-geist" href="contact.php">
                Get in Touch
            </a>
<button className="xl:hidden text-brand-dark">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative bg-brand-dark pt-20 pb-32 overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 opacity-10 bg-dot-pattern hidden xl:block pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal-element in-view">
<div className="flex items-center gap-3 mb-6">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Electrical &amp; Instrumentation Inc.</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 font-space-grotesk font-semibold uppercase">
                    Timely, Versatile, &amp; Guaranteed Services
                </h1>
<p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed font-geist">
                    A full service electrical contractor specializing in industrial electrical, communications, instrumentation, power, and control systems.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-brand-yellow text-brand-dark px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-yellow-400 transition-colors flex items-center gap-2 font-geist" href="industrial.php">
                        Explore Services <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="border border-gray-700 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:border-gray-500 transition-colors font-geist" href="contact.php">
                        Contact Us
                    </a>
</div>
<div className="mt-16 pt-8 border-t border-gray-800 grid sm:grid-cols-2 gap-8">
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-yellow">
<iconify-icon className="text-2xl" icon="solar:medal-ribbon-star-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-1 font-geist">Certified Experts</h4>
<p className="text-xs text-gray-500 leading-snug font-geist">ISA Certified Automation Professionals (CAP) &amp; CCST Technicians.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-brand-yellow">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-1 font-geist">Safety First</h4>
<p className="text-xs text-gray-500 leading-snug font-geist">Problem solving solutions in a safe, timely, and cost effective manner.</p>
</div>
</div>
</div>
</div>
<div className="relative reveal-element delay-300">
<div className="absolute inset-0 bg-brand-yellow/10 rounded-3xl transform translate-x-4 translate-y-4"></div>
<div className="relative rounded-3xl overflow-hidden h-[600px] border border-gray-800 bg-gray-900">

<img alt="Coates Electrical Industrial Work" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1565514020125-02102dc8eb28?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<p className="text-white/90 font-geist text-sm border-l-2 border-brand-yellow pl-4">
                            "We leverage our knowledge and experience to offer problem solving solutions that meet or exceed customer expectations."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3">
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Welcome</span>
</div>
<h2 className="text-4xl text-brand-dark tracking-tight font-space-grotesk font-semibold uppercase">Who We Are</h2>
</div>
<div className="md:w-2/3 space-y-6 text-gray-500 font-geist leading-relaxed">
<p>
                        Coates Electrical and Instrumentation Inc. (CE&amp;I) is a full service electrical contractor specializing in industrial electrical, communications, instrumentation, power, and control systems. CE&amp;I has installed systems in oil and gas, refining, manufacturing, material handling, mining applications, and commercial electrical construction.
                    </p>
<p>
                        We are a direct hire company with a highly skilled team of technicians, installers, and programmers. With design build capability, ISA Certified Automation Professionals (CAP) and Certified Control Systems Technicians (CCST), CE&amp;I can design and construct your entire electrical, communications, control systems, and instrumentation.
                    </p>
<p>
                        At CE&amp;I we work with our customers to custom tailor our services to meet their needs. We get to know the client company, their people, and their specifications. We adapt our systems to fit the customers needs and optimize results.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-16 justify-between">
<div>
<h2 className="text-4xl text-brand-dark tracking-tight font-space-grotesk font-semibold uppercase">Our Services</h2>
<p className="mt-4 max-w-md text-gray-500">From new construction and retrofits to maintenance and hot cutovers.</p>
</div>
<a className="text-brand-dark font-medium border-b border-brand-yellow hover:text-brand-yellow transition-colors font-geist pb-1" href="industrial.php">View all services</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden h-72">

<img className="legacy-img transition-transform duration-700 group-hover:scale-110" onerror="this.src='https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&amp;q=80'" src="images/industrial1.jpg"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Industrial Services</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72">

<img className="legacy-img transition-transform duration-700 group-hover:scale-110" onerror="this.src='https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&amp;q=80'" src="images/instrumentation1.jpg"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Instrumentation</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1531297461136-82lw8u22c71?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Process Control &amp; PLC</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Remote Handling &amp; Waste</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Maintenance &amp; Shutdowns</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden h-72">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end border-t border-white/10 bg-white/5 backdrop-blur-sm">
<span className="text-white font-medium text-lg font-geist">Commercial Construction</span>
<iconify-icon className="text-brand-yellow text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-dark text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="w-8 h-[1px] bg-brand-yellow"></span>
<span className="text-brand-yellow text-xs font-medium tracking-widest uppercase font-geist">Capabilities</span>
</div>
<h2 className="text-4xl tracking-tight mb-6 font-space-grotesk font-semibold uppercase">Comprehensive Solutions</h2>
<p className="text-gray-400 mb-6 text-base leading-relaxed font-geist">
                    CE&amp;I can design and construct your entire electrical, communications, control systems, and instrumentation. We also program the PLC/DCS and optimize the systems to improve overall plant reliability.
                </p>
<p className="text-gray-400 mb-10 text-base leading-relaxed font-geist">
                    Our comprehensive startup &amp; commissioning services come with a complete documentation package.
                </p>
<div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-800">
<div>
<span className="block text-4xl text-white mb-2 font-space-grotesk font-semibold">CAP</span>
<span className="text-sm text-gray-500 font-geist">Certified Automation Professionals</span>
</div>
<div>
<span className="block text-4xl text-white mb-2 font-space-grotesk font-semibold">CCST</span>
<span className="text-sm text-gray-500 font-geist">Certified Control Systems Technicians</span>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-brand-yellow/10 rounded-3xl transform -translate-x-4 -translate-y-4"></div>
<div className="relative rounded-3xl overflow-hidden h-[400px] border border-gray-700">

<img className="legacy-img" onerror="this.src='https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&amp;q=80'" src="images/team1.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8">
<h3 className="text-xl font-bold text-white mb-2 font-space-grotesk">Our Team</h3>
<p className="text-gray-300 text-sm font-geist">Highly skilled technicians, installers, and programmers.</p>
<a className="inline-block mt-4 text-brand-yellow text-sm hover:underline font-geist" href="team.php">Meet the team →</a>
</div>
</div>
</div>
</div>
</section>

<div className="bg-brand-yellow h-16 flex items-center overflow-hidden whitespace-nowrap">
<div className="flex gap-12 font-bold text-brand-dark text-lg uppercase tracking-wider opacity-80 px-6 font-space-grotesk">
<span>Oil &amp; Gas</span> <span>•</span>
<span>Refining</span> <span>•</span>
<span>Manufacturing</span> <span>•</span>
<span>Material Handling</span> <span>•</span>
<span>Mining Applications</span> <span>•</span>
<span>Commercial</span> <span>•</span>
<span>Process Control</span> <span>•</span>
<span>Oil &amp; Gas</span> <span>•</span>
<span>Refining</span>
</div>
</div>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-4xl lg:text-5xl text-brand-dark tracking-tight font-space-grotesk font-semibold mb-6">
                READY TO OPTIMIZE YOUR SYSTEMS?
            </h2>
<p className="text-gray-500 max-w-2xl mx-auto mb-10 font-geist">
                We get to know the client company, their people, and their specifications. Contact us today for timely and versatile electrical solutions.
            </p>
<div className="flex justify-center gap-4">
<a className="bg-brand-dark text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-gray-800 transition-colors flex items-center gap-3 font-geist" href="contact.php">
                    Contact Coates <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-brand-dark pt-20 pb-10 border-t border-gray-900 text-gray-400">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-brand-yellow text-2xl" icon="solar:bolt-circle-bold"></iconify-icon>
<span className="text-xl font-bold text-white tracking-tight font-space-grotesk">COATES</span>
</div>
<p className="text-sm mb-6 font-geist">
                        Electrical &amp; Instrumentation Inc.<br/>
                        Providing timely, versatile, and guaranteed services since 2009.
                    </p>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-space-grotesk tracking-wide">COMPANY</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="index.php">Home</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="history.php">Our History</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="mission.php">Our Mission</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="team.php">Our Team</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist text-brand-yellow" href="https://www.coateselectrical.com/employment.php">Employment Opportunities</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-space-grotesk tracking-wide">SERVICES</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="industrial.php">Industrial Services</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="instrumentation.php">Instrumentation</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="industrial.php">Process Control</a></li>
<li><a className="hover:text-brand-yellow transition-colors font-geist" href="clients.php">Our Clients</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 font-space-grotesk tracking-wide">CONTACT</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3 font-geist">
<iconify-icon className="text-brand-yellow mt-1" icon="solar:map-point-linear"></iconify-icon>
<span>Coates Electrical &amp;<br/>Instrumentation Inc.</span>
</li>
<li className="flex items-center gap-3 font-geist">
<iconify-icon className="text-brand-yellow" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand-yellow" href="contact.php">Contact Page</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
<p className="font-geist">© 2009-2024 CE&amp;I. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
