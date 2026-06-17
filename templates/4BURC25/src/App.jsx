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
      

<header className="sticky top-0 z-50 bg-white/90 border-b border-[#e0f7fa] backdrop-blur">
<nav aria-label="main navigation" className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

<a className="flex items-center gap-2" href="#">
<svg aria-hidden="true" className="w-8 h-8 text-[#00a8cc]" fill="none" viewbox="0 0 32 32">
<circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"></circle>
<path d="M10 18c2-4 10-7 12-2s-3 9-10 9" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
<span className="text-xl font-bold text-[#004e7c] tracking-tight">Coderiam</span>
</a>

<ul className="flex-1 flex justify-center gap-6 md:gap-10 text-base font-semibold">
<li><a className="hover:text-[#00a8cc] transition-colors focus-ring" href="#">Home</a></li>
<li><a className="hover:text-[#00a8cc] transition-colors focus-ring" href="#products">Products</a></li>
<li><a className="hover:text-[#00a8cc] transition-colors focus-ring" href="#about">About Us</a></li>
<li><a className="hover:text-[#00a8cc] transition-colors focus-ring" href="#blog">Blog</a></li>
<li><a className="hover:text-[#00a8cc] transition-colors focus-ring" href="#contact">Contact</a></li>
</ul>

<div className="hidden sm:flex">
<a className="inline-block px-5 py-2 rounded-full bg-[#00a8cc] text-white font-semibold shadow-md transition hover:bg-[#0088a8] focus-ring text-base" href="#contact">Request a Demo</a>
</div>
</nav>
</header>

<section className="relative bg-gradient-to-br from-[#e0f7fa] via-white to-[#b3e4ee] pt-12 pb-16 lg:pt-20 lg:pb-28 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">

<div className="flex-1 text-center lg:text-left z-10">
<h1 className="text-3xl md:text-5xl font-extrabold text-[#004e7c] mb-4 leading-tight">
          AI-driven solutions for smarter fish farming
        </h1>
<p className="text-lg md:text-2xl text-[#256080] mb-8 max-w-xl mx-auto lg:mx-0">
          Boost efficiency and sustainability with intelligent aquaculture technologies, designed for today’s challenges.
        </p>
<a className="inline-block px-7 py-3 rounded-full bg-[#00a8cc] text-white font-semibold shadow-md transition hover:bg-[#007a99] focus-ring text-lg hover:-translate-y-1 hover:shadow-xl transform duration-200" href="#products">Explore Products</a>
</div>

<div className="flex-1 flex justify-center lg:justify-end relative">
<img alt="Modern fish farm with blue ocean water" className="w-80 h-80 rounded-3xl object-cover shadow-xl ring-4 ring-[#b3e4ee] animate-[float_3s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>

<svg aria-hidden="true" className="absolute -bottom-10 -left-10 w-32 h-16 opacity-40 text-[#e0f7fa]" viewbox="0 0 144 48">
<path d="M0 24c24-24 48 24 72 0s48 24 72 0" fill="none" stroke="currentColor" strokeWidth="6"></path>
</svg>
</div>
</div>

<div className="absolute top-8 right-12 w-16 h-16 bg-[#e0f7fa] rounded-full opacity-60 blur-2xl"></div>
<div className="absolute bottom-4 left-12 w-8 h-8 bg-[#00a8cc] rounded-full opacity-20 blur"></div>
</section>

<section className="max-w-5xl mx-auto px-4 py-10 md:py-16">
<h2 className="text-2xl md:text-3xl font-bold text-[#004e7c] mb-6 text-center">Who is Coderiam for?</h2>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="w-7 h-7 text-[#00a8cc] mt-1" fill="none" viewbox="0 0 24 24"><path d="M4 19v-2a3 3 0 013-3h10a3 3 0 013 3v2" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"></circle></svg>
<span>Fish farm operators seeking automated feeding &amp; real-time monitoring</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="w-7 h-7 text-[#00a8cc] mt-1" fill="none" viewbox="0 0 24 24"><path d="M12 6v6l4 2" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle></svg>
<span>Aquaculture engineers implementing sensor-based technology</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="w-7 h-7 text-[#00a8cc] mt-1" fill="none" viewbox="0 0 24 24"><path d="M3 11a9 9 0 0118 0v3a6 6 0 01-12 0V8" stroke="currentColor" strokeWidth="2"></path></svg>
<span>Sustainability officers aiming to reduce waste &amp; maximize yields</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="w-7 h-7 text-[#00a8cc] mt-1" fill="none" viewbox="0 0 24 24"><path d="M12 6v6l4 2" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path><rect height="16" rx="4" stroke="currentColor" strokeWidth="2" width="16" x="4" y="4"></rect></svg>
<span>Investors &amp; partners seeking innovative agri-tech opportunities</span>
</li>
</ul>
</section>

<section className="max-w-7xl mx-auto px-4 py-12 md:py-20" id="products">
<h2 className="text-2xl md:text-3xl font-bold text-[#004e7c] mb-10 text-center">Our Products</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 p-7 flex flex-col items-center border border-[#e0f7fa]">
<div className="bg-[#e0f7fa] rounded-full p-4 mb-4">
<svg aria-hidden="true" className="w-10 h-10 text-[#00a8cc]" fill="none" viewbox="0 0 32 32">
<rect height="10" rx="4" stroke="currentColor" strokeWidth="2" width="16" x="8" y="14"></rect>
<path d="M16 14V10a4 4 0 014-4h0" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-[#004e7c] mb-2">Feedix</h3>
<p className="text-[#256080] text-center mb-3">Advanced Feeding Automation</p>
<ul className="text-base text-gray-700 mb-5 space-y-1">
<li>• Optimizes feed schedules in real time</li>
<li>• Reduces feed waste by over 20%</li>
<li>• Cloud dashboard for monitoring intake</li>
</ul>
<a className="inline-block mt-auto px-5 py-2 rounded-full bg-[#00a8cc] text-white font-semibold transition hover:bg-[#0088a8] focus-ring shadow-md" href="#">Learn More</a>
</div>

<div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 p-7 flex flex-col items-center border border-[#e0f7fa]">
<div className="bg-[#e0f7fa] rounded-full p-4 mb-4">
<svg aria-hidden="true" className="w-10 h-10 text-[#00a8cc]" fill="none" viewbox="0 0 32 32">
<circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2"></circle>
<path d="M11 21c2-2 8-2 10 0" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-[#004e7c] mb-2">Samplix</h3>
<p className="text-[#256080] text-center mb-3">Automated Water Quality Sensing</p>
<ul className="text-base text-gray-700 mb-5 space-y-1">
<li>• Real-time water parameter monitoring</li>
<li>• Early alerts for issues</li>
<li>• Easy integration with farm systems</li>
</ul>
<a className="inline-block mt-auto px-5 py-2 rounded-full bg-[#00a8cc] text-white font-semibold transition hover:bg-[#0088a8] focus-ring shadow-md" href="#">Learn More</a>
</div>

<div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 p-7 flex flex-col items-center border border-[#e0f7fa]">
<div className="bg-[#e0f7fa] rounded-full p-4 mb-4">
<svg aria-hidden="true" className="w-10 h-10 text-[#00a8cc]" fill="none" viewbox="0 0 32 32">
<ellipse cx="16" cy="18" rx="9" ry="6" stroke="currentColor" strokeWidth="2"></ellipse>
<path d="M16 12c1 0 1-2 0-2s-1 2 0 2z" fill="currentColor"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-[#004e7c] mb-2">Countix</h3>
<p className="text-[#256080] text-center mb-3">Smart Stock Counting</p>
<ul className="text-base text-gray-700 mb-5 space-y-1">
<li>• Accurate fish counting with AI vision</li>
<li>• Reduces manual labor &amp; errors</li>
<li>• Tracks growth rates automatically</li>
</ul>
<a className="inline-block mt-auto px-5 py-2 rounded-full bg-[#00a8cc] text-white font-semibold transition hover:bg-[#0088a8] focus-ring shadow-md" href="#">Learn More</a>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 py-10 md:py-16" id="about">
<div className="bg-[#e0f7fa] rounded-2xl p-8 md:p-12 text-center flex flex-col items-center">
<h2 className="text-2xl md:text-3xl font-bold text-[#004e7c] mb-4">About Coderiam</h2>
<p className="text-lg text-[#256080] mb-6 max-w-2xl">
        At Coderiam, we pioneer the integration of AI and IoT in aquaculture to boost efficiency and sustainability. Our mission: empower fish farms with intelligent, easy-to-use solutions for a more productive and eco-friendly future.
      </p>
<a className="inline-block px-7 py-2 rounded-full bg-[#00a8cc] text-white font-semibold shadow-md transition hover:bg-[#0088a8] focus-ring text-base" href="#">About Us</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 py-12">
<h2 className="text-2xl md:text-3xl font-bold text-[#004e7c] mb-8 text-center">Why Choose Coderiam?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-7 text-center">
<div className="flex flex-col items-center px-4">
<span className="text-4xl font-bold text-[#00a8cc] mb-2">1</span>
<p className="font-semibold text-[#004e7c] mb-1">Increased Yield</p>
<p className="text-gray-700">Get more fish with intelligent, optimized feeding and growth monitoring.</p>
</div>
<div className="flex flex-col items-center px-4">
<span className="text-4xl font-bold text-[#00a8cc] mb-2">2</span>
<p className="font-semibold text-[#004e7c] mb-1">Real-time Insights</p>
<p className="text-gray-700">Make faster, data-driven decisions using live dashboards and alerts.</p>
</div>
<div className="flex flex-col items-center px-4">
<span className="text-4xl font-bold text-[#00a8cc] mb-2">3</span>
<p className="font-semibold text-[#004e7c] mb-1">Labor Savings</p>
<p className="text-gray-700">Automate tedious tasks to save hours and reduce operational costs.</p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-4 py-12 md:py-20" id="contact">
<div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-[#e0f7fa]">
<h2 className="text-2xl md:text-3xl font-bold text-[#004e7c] mb-4 text-center">Get in Touch</h2>
<p className="text-[#256080] text-center mb-8">Interested in our solutions? Request a demo or send us a message.</p>
<form aria-label="Contact form" className="space-y-5">
<div>
<label className="block text-base font-medium text-[#004e7c] mb-1" htmlFor="company">Company</label>
<input className="w-full px-4 py-3 rounded-lg border border-[#b3e4ee] focus:border-[#00a8cc] focus:ring-[#00a8cc] focus:ring-2 transition focus-ring" id="company" name="company" placeholder="Your company name" required="" type="text"/>
</div>
<div>
<label className="block text-base font-medium text-[#004e7c] mb-1" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-[#b3e4ee] focus:border-[#00a8cc] focus:ring-[#00a8cc] focus:ring-2 transition focus-ring" id="email" name="email" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-base font-medium text-[#004e7c] mb-1" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-[#b3e4ee] focus:border-[#00a8cc] focus:ring-[#00a8cc] focus:ring-2 transition focus-ring" id="message" name="message" placeholder="How can we help you?" required="" rows="4"></textarea>
</div>
<button className="w-full py-3 rounded-full bg-[#00a8cc] text-white font-semibold text-lg shadow-md hover:bg-[#0088a8] focus-ring transition hover:-translate-y-0.5 duration-200" type="submit">Send Message</button>
</form>
</div>
</section>

<footer className="bg-[#004e7c] text-white pt-10 pb-6 mt-10">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="w-8 h-8 text-[#00a8cc]" fill="none" viewbox="0 0 32 32">
<circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="2"></circle>
<path d="M10 18c2-4 10-7 12-2s-3 9-10 9" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
<span className="text-lg font-bold">Coderiam</span>
</div>
<ul className="flex gap-6 text-base font-medium">
<li><a className="hover:text-[#00a8cc] transition-colors focus-ring" href="#">Home</a></li>
<li><a className="hover:text-[#00a8cc] transition-colors focus-ring" href="#products">Products</a></li>
<li><a className="hover:text-[#00a8cc] transition-colors focus-ring" href="#about">About</a></li>
<li><a className="hover:text-[#00a8cc] transition-colors focus-ring" href="#blog">Blog</a></li>
<li><a className="hover:text-[#00a8cc] transition-colors focus-ring" href="#contact">Contact</a></li>
</ul>
<div className="flex gap-4">
<a aria-label="Email" className="hover:text-[#00a8cc] focus-ring" href="mailto:info@coderiam.com">
<svg aria-hidden="true" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M4 4h16v16H4z"></path><path d="M4 4l8 8 8-8"></path></svg>
</a>
<a aria-label="LinkedIn" className="hover:text-[#00a8cc] focus-ring" href="#">
<svg aria-hidden="true" className="w-6 h-6" fill="none" viewbox="0 0 24 24"><rect height="20" rx="4" stroke="currentColor" strokeWidth="2" width="20" x="2" y="2"></rect><path d="M7 10v6M7 7v.01M11 10v6m0 0v-3a2 2 0 014 0v3" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path></svg>
</a>
<a aria-label="Twitter" className="hover:text-[#00a8cc] focus-ring" href="#">
<svg aria-hidden="true" className="w-6 h-6" fill="none" viewbox="0 0 24 24"><path d="M22 5a8.87 8.87 0 01-2.6.7A4.48 4.48 0 0021.4 3a8.93 8.93 0 01-2.83 1.08A4.48 4.48 0 0012 8.09v1A12.94 12.94 0 013 4.8s-4 9 5 13a13 13 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A6.5 6.5 0 0022 5z" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="mt-8 text-center text-sm text-[#b3e4ee]">
      © 2024 Coderiam. All rights reserved.
    </div>
</footer>

<style>
    @keyframes float { 0%,100% { transform: translateY(0);} 50% { transform: translateY(-12px);} }
    .animate-\[float_3s_ease-in-out_infinite\] { animation: float 3s ease-in-out infinite; }
  </style>

    </>
  );
}
