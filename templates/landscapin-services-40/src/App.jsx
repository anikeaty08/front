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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
800: '#166534', // Dark green accents
900: '#14532d',
},
charcoal: {
600: '#4b5563',
800: '#1f2937',
900: '#111827',
}
}
}
}
}



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
      

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 transition-all">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-2xl font-semibold tracking-tight text-charcoal-900 uppercase">
          LNDSCP
        </div>
<div className="hidden md:flex gap-8 text-sm font-medium text-charcoal-600">
<a className="hover:text-brand-800 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-brand-800 transition-colors" href="#why-us">
            Why Us
          </a>
<a className="hover:text-brand-800 transition-colors" href="#process">
            Process
          </a>
<a className="hover:text-brand-800 transition-colors" href="#testimonials">
            Testimonials
          </a>
</div>
<div>
<a className="bg-brand-800 text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-brand-900 transition-colors" href="#contact">
            Get a Quote
          </a>
</div>
</div>
</nav>

<header className="bg-white pt-32 pb-24 border-b border-zinc-200 flex flex-col items-center justify-center text-center px-6">
<div className="max-w-4xl mx-auto">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-charcoal-900 tracking-tight mb-6 leading-tight">
          Professional Landscaping Built to Elevate Your Property
        </h1>
<p className="text-xl text-charcoal-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Reliable lawn care, landscape design, and hardscape services delivered
          with precision.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="bg-brand-800 text-white px-8 py-4 rounded text-base font-medium hover:bg-brand-900 hover:shadow-lg transform hover:-translate-y-0.5 transition-all w-full sm:w-auto" href="#contact">
            Request a Free Estimate
          </a>
<a className="bg-white text-charcoal-900 border border-zinc-300 px-8 py-4 rounded text-base font-medium hover:bg-zinc-50 hover:border-zinc-400 transition-all w-full sm:w-auto" href="#services">
            See Our Services
          </a>
</div>
</div>
</header>

<section className="py-16 bg-zinc-50 border-b border-zinc-200" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-3xl text-brand-800" icon="lucide:shield-check"></iconify-icon>
<span className="text-sm font-medium text-charcoal-900">
              Licensed &amp; Insured
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-3xl text-brand-800" icon="lucide:users"></iconify-icon>
<span className="text-sm font-medium text-charcoal-900">
              Experienced Team
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-3xl text-brand-800" icon="lucide:calendar-clock"></iconify-icon>
<span className="text-sm font-medium text-charcoal-900">
              Reliable Scheduling
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-3xl text-brand-800" icon="lucide:badge-dollar-sign"></iconify-icon>
<span className="text-sm font-medium text-charcoal-900">
              Transparent Pricing
            </span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-3xl text-brand-800" icon="lucide:thumbs-up"></iconify-icon>
<span className="text-sm font-medium text-charcoal-900">
              Satisfaction Guaranteed
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-b border-zinc-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold text-charcoal-900 tracking-tight mb-6">
            Expert Services
          </h2>
<p className="text-lg text-charcoal-600">
            Comprehensive landscaping solutions tailored to your unique outdoor
            space.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="bg-white border border-zinc-200 p-8 rounded hover:shadow-xl hover:border-brand-800 transform hover:-translate-y-2 transition-all duration-300 group">
<div className="w-14 h-14 bg-zinc-50 rounded flex items-center justify-center mb-8 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl text-brand-800 group-hover:text-white transition-colors" icon="lucide:pen-tool"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-charcoal-900 tracking-tight mb-4">
              Landscape Design
            </h3>
<p className="text-charcoal-600 leading-relaxed text-sm">
              Strategic planning and beautiful plant selections tailored to your
              local climate and personal aesthetic.
            </p>
</div>
<div className="bg-white border border-zinc-200 p-8 rounded hover:shadow-xl hover:border-brand-800 transform hover:-translate-y-2 transition-all duration-300 group">
<div className="w-14 h-14 bg-zinc-50 rounded flex items-center justify-center mb-8 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl text-brand-800 group-hover:text-white transition-colors" icon="lucide:leaf"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-charcoal-900 tracking-tight mb-4">
              Lawn Maintenance
            </h3>
<p className="text-charcoal-600 leading-relaxed text-sm">
              Consistent, professional mowing, fertilization, and care programs
              that keep your grass lush and green.
            </p>
</div>
<div className="bg-white border border-zinc-200 p-8 rounded hover:shadow-xl hover:border-brand-800 transform hover:-translate-y-2 transition-all duration-300 group">
<div className="w-14 h-14 bg-zinc-50 rounded flex items-center justify-center mb-8 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl text-brand-800 group-hover:text-white transition-colors" icon="lucide:droplets"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-charcoal-900 tracking-tight mb-4">
              Irrigation Systems
            </h3>
<p className="text-charcoal-600 leading-relaxed text-sm">
              Efficient watering solutions installed and maintained to protect
              your landscape investment while conserving water.
            </p>
</div>
<div className="bg-white border border-zinc-200 p-8 rounded hover:shadow-xl hover:border-brand-800 transform hover:-translate-y-2 transition-all duration-300 group">
<div className="w-14 h-14 bg-zinc-50 rounded flex items-center justify-center mb-8 group-hover:bg-brand-800 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl text-brand-800 group-hover:text-white transition-colors" icon="lucide:hammer"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-charcoal-900 tracking-tight mb-4">
              Hardscape &amp; Patios
            </h3>
<p className="text-charcoal-600 leading-relaxed text-sm">
              Durable stone patios, retaining walls, and walkways constructed
              with precision for lasting outdoor enjoyment.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-50 border-b border-zinc-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold text-charcoal-900 tracking-tight mb-6">
            Our 3-Step Process
          </h2>
<p className="text-lg text-charcoal-600">
            We make improving your property straightforward, transparent, and
            hassle-free.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
<div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-zinc-300"></div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-zinc-300 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-800 group-hover:border-brand-800 group-hover:text-white transition-colors duration-300 text-brand-800 text-2xl font-semibold">
              1
            </div>
<h3 className="text-2xl font-semibold text-charcoal-900 tracking-tight mb-4">
              Consultation
            </h3>
<p className="text-charcoal-600 leading-relaxed text-sm">
              We visit your property, discuss your goals, evaluate the space,
              and provide a clear, detailed estimate.
            </p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white border border-zinc-300 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-800 group-hover:border-brand-800 group-hover:text-white transition-colors duration-300 text-brand-800 text-2xl font-semibold">
              2
            </div>
<h3 className="text-2xl font-semibold text-charcoal-900 tracking-tight mb-4">
              Design &amp; Planning
            </h3>
<p className="text-charcoal-600 leading-relaxed text-sm">
              We create a customized plan, select premium materials, and
              establish a reliable timeline for execution.
            </p>
</div>
<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-brand-800 border border-brand-800 text-white rounded-full flex items-center justify-center mb-8 shadow-sm text-2xl font-semibold">
              3
            </div>
<h3 className="text-2xl font-semibold text-charcoal-900 tracking-tight mb-4">
              Installation
            </h3>
<p className="text-charcoal-600 leading-relaxed text-sm">
              Our experienced crew handles the hard work efficiently, leaving
              you with a perfectly finished landscape.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-b border-zinc-200" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold text-charcoal-900 tracking-tight mb-6">
            Trusted by Homeowners
          </h2>
<p className="text-lg text-charcoal-600">
            See what our clients have to say about our premium landscaping
            services.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-zinc-50 p-10 rounded border border-zinc-200 hover:shadow-lg transition-shadow duration-300">
<div className="flex text-brand-800 mb-6 gap-1">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-charcoal-800 mb-8 leading-relaxed italic text-sm">
              "They completely transformed our front yard. The crew was
              professional, always on time, and left the site immaculate every
              day. Highly recommended for any hardscaping needs."
            </p>
<div className="font-semibold text-charcoal-900">John D.</div>
<div className="text-sm text-charcoal-500 mt-1">Homeowner</div>
</div>
<div className="bg-zinc-50 p-10 rounded border border-zinc-200 hover:shadow-lg transition-shadow duration-300">
<div className="flex text-brand-800 mb-6 gap-1">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-charcoal-800 mb-8 leading-relaxed italic text-sm">
              "We hired them for regular lawn maintenance and a new irrigation
              system. Our grass has never looked greener. Transparent pricing
              with no hidden fees."
            </p>
<div className="font-semibold text-charcoal-900">Sarah M.</div>
<div className="text-sm text-charcoal-500 mt-1">Property Manager</div>
</div>
<div className="bg-zinc-50 p-10 rounded border border-zinc-200 hover:shadow-lg transition-shadow duration-300">
<div className="flex text-brand-800 mb-6 gap-1">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
<p className="text-charcoal-800 mb-8 leading-relaxed italic text-sm">
              "The stone patio they built in our backyard is stunning. From the
              initial 3D design to the final day of planting, the communication
              was excellent."
            </p>
<div className="font-semibold text-charcoal-900">Robert T.</div>
<div className="text-sm text-charcoal-500 mt-1">Homeowner</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-brand-900 border-b border-brand-800 flex items-center justify-center text-center px-6">
<div className="max-w-4xl mx-auto">
<h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight mb-8 leading-tight">
          Ready to Transform Your Outdoor Space?
        </h2>
<a className="inline-block bg-white text-brand-900 px-10 py-5 rounded text-lg font-semibold hover:bg-zinc-100 hover:shadow-xl transform hover:-translate-y-1 transition-all" href="#contact">
          Get Your Free Quote Today
        </a>
</div>
</section>

<section className="py-32 bg-white border-b border-zinc-200" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold text-charcoal-900 tracking-tight mb-4">
            Contact Us
          </h2>
<p className="text-lg text-charcoal-600">
            Fill out the form below, and we'll get back to you within 24 hours.
          </p>
</div>
<div className="bg-white">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-charcoal-900 mb-2" htmlFor="name">
                  Full Name
                </label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded px-5 py-4 text-sm text-charcoal-900 focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800 transition-colors" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-charcoal-900 mb-2" htmlFor="email">
                  Email Address
                </label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded px-5 py-4 text-sm text-charcoal-900 focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800 transition-colors" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-charcoal-900 mb-2" htmlFor="phone">
                Phone Number
              </label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded px-5 py-4 text-sm text-charcoal-900 focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800 transition-colors" id="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-charcoal-900 mb-2" htmlFor="message">
                Message
              </label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded px-5 py-4 text-sm text-charcoal-900 focus:outline-none focus:border-brand-800 focus:ring-1 focus:ring-brand-800 transition-colors resize-none" id="message" placeholder="Tell us about your project..." rows="5"></textarea>
</div>
<button className="w-full bg-brand-800 text-white px-6 py-5 rounded text-base font-semibold hover:bg-brand-900 hover:shadow-lg transform hover:-translate-y-0.5 transition-all" type="submit">
              Send Message
            </button>
</form>
</div>
</div>
</section>

<footer className="bg-charcoal-900 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-16 text-center md:text-left">
<div>
<div className="text-3xl font-semibold tracking-tight text-white uppercase mb-4">
              LNDSCP
            </div>
<p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              Professional landscaping built to elevate your property.
            </p>
</div>
<div className="flex flex-col gap-3 text-sm">
<h4 className="text-white font-semibold mb-2 uppercase tracking-wider">
              Contact
            </h4>
<a className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start" href="tel:+15551234567">
<iconify-icon className="text-lg" icon="lucide:phone"></iconify-icon>
              (555) 123-4567
            </a>
<a className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-start" href="mailto:info@landscaping.com">
<iconify-icon className="text-lg" icon="lucide:mail"></iconify-icon>
              info@landscaping.com
            </a>
</div>
</div>
<div className="border-t border-charcoal-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
<p>© 2026 LNDSCP. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
