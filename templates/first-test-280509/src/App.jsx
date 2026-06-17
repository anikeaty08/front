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
      

<div className="px-4 sm:px-6 lg:px-8 pt-6 pb-2 max-w-[100rem] mx-auto">
<nav className="flex items-center justify-between bg-white/80 backdrop-blur-md rounded-full px-6 py-4 shadow-sm ring-1 ring-slate-900/5">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<span className="text-xl tracking-tight font-medium text-slate-900">DeclicEco</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#">About Us</a>
<a className="hover:text-slate-900 transition-colors" href="#">Eco Impact</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-400 hover:text-slate-900 transition-colors hidden sm:block">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<a className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-800 transition-colors" href="#">
                    Contact Us
                    <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>
</div>
<main>

<section className="px-4 sm:px-6 lg:px-8 pb-12 max-w-[100rem] mx-auto">
<div className="bg-white rounded-[2.5rem] shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 h-full min-h-[85vh]">

<div className="flex flex-col justify-center px-8 sm:px-16 py-20 lg:py-0">
<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] leading-[1.1] tracking-tight font-medium text-slate-900 max-w-2xl">
                            Caring for Your <br/>
<span className="font-serif italic text-blue-700 font-medium">Home,</span> One Visit <br/>
                            at a Time.
                        </h1>
<p className="mt-8 text-lg sm:text-xl text-slate-500 max-w-md leading-relaxed">
                            Your plumbing is more than just pipes and water. It's the foundation of a comfortable, healthy, and sustainable home.
                        </p>
<div className="mt-10">
<a className="inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-all hover:pr-6 group" href="#">
                                Book an Expert
                                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="mt-20 flex items-center gap-8 opacity-50 grayscale">
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-base font-medium">Certified Eco</span>
</div>
<div className="flex items-center gap-2">
<i className="w-6 h-6" data-lucide="award" strokeWidth="1.5"></i>
<span className="text-base font-medium">Master Plumber</span>
</div>
<div className="flex items-center gap-2 hidden sm:flex">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="text-base font-medium">Green Energy</span>
</div>
</div>
</div>

<div className="relative h-[60vh] lg:h-auto lg:p-4">
<div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-slate-100 isolate">
<img alt="Clean modern plumbing" className="absolute inset-0 w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/4 left-8 bg-white/70 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-lg flex items-center gap-4 w-64 transform -rotate-2">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
<i className="w-5 h-5" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Service Type</div>
<div className="text-base text-slate-900 font-medium tracking-tight leading-none">Eco Installation</div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 ml-auto shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
</div>
<div className="absolute bottom-1/4 right-8 bg-white/70 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-lg flex items-center gap-4 w-56 transform translate-y-4">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-base text-slate-900 font-medium tracking-tight">5.0 Rating</div>
<div className="text-xs text-slate-500 font-medium flex items-center gap-1">
<i className="w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
                                        2k+ reviews
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="flex justify-between items-center mb-16 text-base text-slate-400 font-medium border-b border-slate-200 pb-4">
<span>About Us</span>
<span>(01)</span>
</div>
<div className="max-w-4xl mx-auto text-center relative">
<h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight font-medium text-slate-900">
                    We create lasting relationships — built on <span className="font-serif italic text-blue-700">trust and care</span>. Our team is committed to making <span className="font-serif italic text-blue-700">every visit comfortable</span>, and fit for you.
                </h2>

<div className="absolute -top-12 -left-12 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg hidden md:block">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -right-8 w-32 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg hidden md:block">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-slate-200 pt-12 relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-4 text-sm text-slate-400 font-medium">Trusted by the local community</div>
<div className="text-center md:text-left">
<div className="flex items-baseline justify-center md:justify-start gap-1">
<span className="text-5xl tracking-tight font-medium text-slate-900">98</span>
<span className="text-2xl text-blue-600 font-medium">%</span>
</div>
<p className="mt-2 text-base text-slate-500">Satisfaction</p>
</div>
<div className="text-center md:text-left">
<div className="flex items-baseline justify-center md:justify-start gap-1">
<span className="text-5xl tracking-tight font-medium text-slate-900">15</span>
<span className="text-2xl text-blue-600 font-medium">+</span>
</div>
<p className="mt-2 text-base text-slate-500">Years Active</p>
</div>
<div className="text-center md:text-left">
<div className="flex items-baseline justify-center md:justify-start gap-1">
<span className="text-5xl tracking-tight font-medium text-slate-900">5,000</span>
<span className="text-2xl text-blue-600 font-medium">+</span>
</div>
<p className="mt-2 text-base text-slate-500">Homes Served</p>
</div>
<div className="text-center md:text-left">
<div className="flex items-baseline justify-center md:justify-start gap-1">
<span className="text-5xl tracking-tight font-medium text-slate-900">4.9</span>
<i className="w-6 h-6 fill-blue-600 text-blue-600 mb-1" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="mt-2 text-base text-slate-500">Star Rating</p>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="flex justify-between items-center mb-16 text-base text-slate-400 font-medium border-b border-slate-200 pb-4">
<span>Our Services</span>
<span>(02)</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-5 flex flex-col">
<div className="group cursor-pointer py-8 border-b border-slate-200 flex items-center justify-between">
<span className="text-3xl tracking-tight font-medium text-slate-900 group-hover:text-blue-700 transition-colors">Eco Installations</span>
<i className="w-6 h-6 text-slate-900" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
<div className="group cursor-pointer py-8 border-b border-slate-200 flex items-center justify-between">
<span className="text-3xl tracking-tight font-medium text-slate-400 group-hover:text-slate-900 transition-colors">Leak Detection</span>
<span className="text-base text-slate-300">02</span>
</div>
<div className="group cursor-pointer py-8 border-b border-slate-200 flex items-center justify-between">
<span className="text-3xl tracking-tight font-medium text-slate-400 group-hover:text-slate-900 transition-colors">Water Filtration</span>
<span className="text-base text-slate-300">03</span>
</div>
<div className="group cursor-pointer py-8 border-b border-slate-200 flex items-center justify-between">
<span className="text-3xl tracking-tight font-medium text-slate-400 group-hover:text-slate-900 transition-colors">Heating Systems</span>
<span className="text-base text-slate-300">04</span>
</div>
</div>

<div className="lg:col-span-7">
<div className="bg-blue-50 rounded-[2rem] p-8 sm:p-12 h-full flex flex-col md:flex-row gap-8 items-center border border-blue-100">
<div className="w-full md:w-1/2 aspect-square rounded-[1.5rem] overflow-hidden shadow-sm">
<img alt="Modern installation" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<p className="text-xl text-slate-700 leading-relaxed font-serif italic mb-6">
                                "A confident home changes everything! Our eco-installations enhance your property's efficiency while preserving natural resources."
                            </p>
<div className="flex items-center gap-4 mb-8">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-blue-600"><i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i></div>
<div className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-slate-600"><i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i></div>
</div>
<span className="text-sm font-medium text-slate-500">Our Eco Specialists</span>
</div>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-base font-medium hover:bg-slate-800 transition-colors w-max" href="#">
                                Read More
                                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
<div className="flex justify-between items-center mb-16 text-base text-slate-400 font-medium border-b border-slate-200 pb-4">
<span>Testimonials</span>
<span>(03)</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative w-full max-w-md mx-auto lg:mx-0 aspect-[4/5]">
<div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] transform -rotate-3"></div>
<div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
<img alt="Happy Customer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-[1.5rem] border-4 border-white shadow-xl overflow-hidden hidden sm:block">
<img alt="Customer smile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="flex flex-col">
<p className="text-3xl sm:text-4xl leading-tight tracking-tight font-medium text-slate-900">
                        — The best <span className="font-serif italic text-blue-700">plumbing experience</span> I've ever had! The team was so <span className="font-serif italic text-blue-700">professional, clean</span> and made me feel <span className="font-serif italic text-blue-700">confident</span>. Thanks DeclicEco, finally I love my home setup!
                    </p>
<div className="mt-8 flex justify-end">
<span className="text-lg text-slate-500 font-medium">Brenda - Customer</span>
</div>
<div className="mt-12 flex items-end justify-between border-t border-slate-200 pt-8">
<div>
<div className="text-sm text-slate-400 font-medium mb-1">Customer Satisfaction</div>
<div className="flex items-end gap-3">
<span className="text-4xl tracking-tight font-medium text-slate-900 leading-none">4.5<span className="text-xl text-slate-400">/5</span></span>
<div className="flex gap-1 mb-1">
<i className="w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star-half" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="flex items-center gap-8 text-slate-400 text-sm font-medium">
<button className="flex items-center gap-2 hover:text-slate-900 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i> Previous
                            </button>
<span>01 - 05</span>
<button className="flex items-center gap-2 hover:text-slate-900 transition-colors">
                                Next <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="mt-24 px-4 sm:px-6 lg:px-8 pb-8 max-w-[100rem] mx-auto">
<div className="bg-slate-50 rounded-[2.5rem] px-8 sm:px-16 py-16 border border-slate-200">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-slate-200 pb-16">

<div>
<h2 className="text-4xl sm:text-5xl leading-tight tracking-tight font-medium text-slate-900 max-w-md">
                        Upgrade Your <span className="font-serif italic text-blue-700">Home</span> with Confidence &amp; Care
                    </h2>
<div className="mt-8 flex items-center border-b border-slate-300 py-2 max-w-md focus-within:border-slate-900 transition-colors">
<input className="bg-transparent w-full outline-none text-lg text-slate-900 placeholder:text-slate-400 font-medium" placeholder="Send email to us" type="email"/>
<button className="text-slate-900 hover:text-blue-600 transition-colors p-2">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-8 text-base">
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Location</div>
<address className="not-italic text-slate-600">
                            4821 Washington Ave.<br/>
                            Manchester, 30404
                        </address>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Call Us</div>
<a className="text-slate-600 hover:text-slate-900" href="tel:+12015550124">+1 (201) 555-0124</a>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Email</div>
<a className="text-slate-600 hover:text-slate-900" href="mailto:hello@decliceco.com">hello@decliceco.com</a>
</div>
<div>
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Open Time</div>
<p className="text-slate-600">08:00am - 07:00pm</p>
</div>
</div>
</div>

<div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-base">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
<i className="text-white w-3 h-3" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<span className="text-lg tracking-tight font-medium text-slate-900">DeclicEco</span>
</div>
</div>
<div>
<ul className="space-y-4 text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Services</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Testimonial</a></li>
</ul>
</div>
<div>
<ul className="space-y-4 text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Culture</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium text-slate-900 mb-4">Social</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400 font-medium">
<p>© 2024, DeclicEco</p>
<div className="flex gap-6">
<a className="hover:text-slate-900 transition-colors" href="#">Terms &amp; Condition</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
