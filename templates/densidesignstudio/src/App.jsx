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



{
"@context": "https://schema.org",
"@type": "ProfessionalService",
"name": "Densi Design Studio",
"image": "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=2940&auto=format&fit=crop",
"@id": "",
"url": "https://densidesignstudio.com",
"telephone": "+919925195694",
"priceRange": "$$",
"address": {
"@type": "PostalAddress",
"streetAddress": "Satellite",
"addressLocality": "Ahmedabad",
"addressRegion": "Gujarat",
"postalCode": "380015",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 23.0225,
"longitude": 72.5714
},
"openingHoursSpecification": {
"@type": "OpeningHoursSpecification",
"dayOfWeek": [
"Monday",
"Tuesday",
"Wednesday",
"Thursday",
"Friday",
"Saturday"
],
"opens": "09:00",
"closes": "18:00"
},
"sameAs": [
"https://www.instagram.com/densidesignstudio",
"https://www.linkedin.com/in/densigundaniya"
]
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4A5A5] opacity-10 blur-[120px] rounded-full"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#E6D5B8] opacity-20 blur-[120px] rounded-full"></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-[#FFFCFA]/80 backdrop-blur-md border-b border-stone-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg md:text-xl font-semibold tracking-tight text-stone-900 flex items-center gap-0.5" href="#">
                Densi Design Studio<span className="text-[#D4A5A5] text-2xl leading-none">.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-[#D4A5A5] transition-colors" href="#services">Services</a>
<a className="hover:text-[#D4A5A5] transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-[#D4A5A5] transition-colors" href="#about">About</a>
<a className="hover:text-[#D4A5A5] transition-colors" href="#process">Process</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-200 bg-[#D4A5A5] rounded-full hover:bg-[#C08E8E] hover:shadow-lg hover:shadow-[#D4A5A5]/20 focus:outline-none ring-offset-2 focus:ring-2 ring-[#D4A5A5]" href="#contact">
                Get a Quote
            </a>
<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100/50 border border-stone-200 text-xs font-medium text-stone-600 mb-6">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new projects
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.1]">
                Designs that make your <span className="font-serif italic text-[#D4A5A5]">brand</span> stand out
            </h1>
<p className="text-lg md:text-xl text-stone-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                Helping startups and small businesses grow with strategic, elegant, and beautiful visuals. Freelance graphic designer based in Ahmedabad.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-stone-900 text-white rounded-full font-medium text-sm hover:bg-stone-800 transition-all hover:translate-y-[-2px]" href="#services">
                    View Services
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-stone-900 border border-stone-200 rounded-full font-medium text-sm hover:border-[#D4A5A5] hover:text-[#D4A5A5] transition-all flex items-center justify-center gap-2 group" href="https://wa.me/919925195694">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Let's Chat
                </a>
</div>
</div>
<div className="mt-20 pt-10 border-t border-stone-100 max-w-5xl mx-auto">
<p className="text-center text-xs font-medium text-stone-400 uppercase tracking-widest mb-8">Design Tools I Master</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="logos:adobe-photoshop" width="28"></iconify-icon>
<iconify-icon icon="logos:adobe-illustrator" width="28"></iconify-icon>
<iconify-icon icon="logos:figma" width="20"></iconify-icon>
<iconify-icon icon="logos:canva" width="28"></iconify-icon>
<iconify-icon icon="logos:corel-icon" width="28"></iconify-icon>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-stone-100" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Curated Design Services</h2>
<p className="text-stone-500 max-w-lg mx-auto">Tailored solutions for social media brands, coaches, and local businesses.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-[#FFFCFA] border border-stone-100 hover:border-[#D4A5A5]/30 hover:shadow-xl hover:shadow-[#D4A5A5]/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#D4A5A5]/10 text-[#D4A5A5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pallete-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Brand Identity</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-stone-500">
<iconify-icon className="text-[#D4A5A5]" icon="solar:check-circle-linear"></iconify-icon> Logo Design
                        </li>
<li className="flex items-center gap-2 text-sm text-stone-500">
<iconify-icon className="text-[#D4A5A5]" icon="solar:check-circle-linear"></iconify-icon> Color Palette &amp; Typography
                        </li>
<li className="flex items-center gap-2 text-sm text-stone-500">
<iconify-icon className="text-[#D4A5A5]" icon="solar:check-circle-linear"></iconify-icon> Brand Guidelines
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-[#FFFCFA] border border-stone-100 hover:border-[#D4A5A5]/30 hover:shadow-xl hover:shadow-[#D4A5A5]/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#D4A5A5]/10 text-[#D4A5A5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Social Media Design</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-stone-500">
<iconify-icon className="text-[#D4A5A5]" icon="solar:check-circle-linear"></iconify-icon> Instagram Carousels
                        </li>
<li className="flex items-center gap-2 text-sm text-stone-500">
<iconify-icon className="text-[#D4A5A5]" icon="solar:check-circle-linear"></iconify-icon> Story &amp; Highlight Covers
                        </li>
<li className="flex items-center gap-2 text-sm text-stone-500">
<iconify-icon className="text-[#D4A5A5]" icon="solar:check-circle-linear"></iconify-icon> Ad Creatives
                        </li>
</ul>
</div>

<div className="group p-8 rounded-2xl bg-[#FFFCFA] border border-stone-100 hover:border-[#D4A5A5]/30 hover:shadow-xl hover:shadow-[#D4A5A5]/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-[#D4A5A5]/10 text-[#D4A5A5] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Web &amp; Marketing</h3>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-sm text-stone-500">
<iconify-icon className="text-[#D4A5A5]" icon="solar:check-circle-linear"></iconify-icon> Website UI Mockups
                        </li>
<li className="flex items-center gap-2 text-sm text-stone-500">
<iconify-icon className="text-[#D4A5A5]" icon="solar:check-circle-linear"></iconify-icon> Flyers &amp; Brochures
                        </li>
<li className="flex items-center gap-2 text-sm text-stone-500">
<iconify-icon className="text-[#D4A5A5]" icon="solar:check-circle-linear"></iconify-icon> Landing Pages
                        </li>
</ul>
</div>
</div>
<div className="mt-12 p-8 rounded-2xl bg-stone-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#D4A5A5] opacity-20 blur-[80px] rounded-full pointer-events-none"></div>
<div>
<h3 className="text-xl font-medium mb-2">Looking for a bundle?</h3>
<p className="text-stone-400 text-sm">Ask about my "Starter" and "Premium" packages for new businesses.</p>
</div>
<a className="shrink-0 px-6 py-3 bg-white text-stone-900 rounded-full text-sm font-medium hover:bg-[#D4A5A5] hover:text-white transition-colors" href="#contact">
                    Get Pricing Sheet
                </a>
</div>
</div>
</section>

<section className="py-20 px-6" id="portfolio">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-2">Featured Projects</h2>
<p className="text-stone-500">A glimpse into my creative journey.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 rounded-full text-xs font-medium bg-[#D4A5A5] text-white">All</button>
<button className="px-4 py-2 rounded-full text-xs font-medium border border-stone-200 text-stone-600 hover:border-[#D4A5A5] transition-colors">Branding</button>
<button className="px-4 py-2 rounded-full text-xs font-medium border border-stone-200 text-stone-600 hover:border-[#D4A5A5] transition-colors">Social Media</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-stone-100 mb-4">
<img alt="Minimalist Cosmetics Branding - Densi Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2727&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors"></div>
</div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-[#D4A5A5] transition-colors">Glow Skincare</h3>
<p className="text-sm text-stone-500">Brand Identity &amp; Packaging</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-stone-100 mb-4">
<img alt="Social Media Feed Design - Densi Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-[#D4A5A5] transition-colors">TechStart App</h3>
<p className="text-sm text-stone-500">Social Media Campaign</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-stone-100 mb-4">
<img alt="Website UI Design Mockup" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&amp;w=2855&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-[#D4A5A5] transition-colors">Urban Coffee</h3>
<p className="text-sm text-stone-500">Website UI Mockup</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-stone-100 mb-4">
<img alt="Fashion Magazine Layout Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&amp;w=2952&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-[#D4A5A5] transition-colors">Vogue Edit</h3>
<p className="text-sm text-stone-500">Editorial Layout</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-stone-100 mb-4">
<img alt="Instagram Story Templates Design" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-[#D4A5A5] transition-colors">Yoga Studio</h3>
<p className="text-sm text-stone-500">Instagram Story Templates</p>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-stone-100 mb-4">
<img alt="Minimal Logo Design Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-medium text-stone-900 group-hover:text-[#D4A5A5] transition-colors">Minimal Logos</h3>
<p className="text-sm text-stone-500">Vector Collection</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-stone-100" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative order-2 md:order-1">
<div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-stone-100 relative">
<img alt="Densi Gundaniya - Graphic Designer Ahmedabad" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-stone-100 hidden lg:block">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#D4A5A5] flex items-center justify-center text-white">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-2xl font-semibold text-stone-900">100%</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Client Satisfaction</p>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-[#D4A5A5] font-medium text-sm tracking-wide uppercase mb-2 block">About Me</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-6">Hello, I'm Densi.</h2>
<p className="text-stone-600 mb-6 leading-relaxed">
                        I am a diligent and enthusiastic Graphic Designer based in Ahmedabad, Gujarat. With a background in Information Technology and a passion for visual storytelling, I bridge the gap between technical precision and creative expression.
                    </p>
<p className="text-stone-600 mb-8 leading-relaxed">
                        My goal is to provide high-quality visual designs that help brands communicate effectively. Whether it's a new logo, a social media overhaul, or marketing collateral, I focus on meeting deadlines and exceeding expectations.
                    </p>
<div className="mb-8">
<h4 className="text-sm font-semibold text-stone-900 mb-4">Skills &amp; Capabilities</h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium border border-stone-200">Web Design</span>
<span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium border border-stone-200">Typography</span>
<span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium border border-stone-200">Color Theory</span>
<span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium border border-stone-200">Layout</span>
<span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium border border-stone-200">Branding</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#FFFCFA]" id="process">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">How We Work Together</h2>
<p className="text-stone-500">A simple, transparent process to bring your vision to life.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
<div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-stone-200 -z-10"></div>
<div className="relative bg-[#FFFCFA] pt-4 md:pt-0">
<div className="w-16 h-16 rounded-full bg-white border border-stone-200 flex items-center justify-center text-lg font-semibold text-stone-900 shadow-sm mx-auto mb-6 relative z-10">
                        01
                    </div>
<h3 className="text-lg font-medium text-center text-stone-900 mb-2">Discovery</h3>
<p className="text-sm text-center text-stone-500 px-2">We discuss your requirements, brand goals, and target audience.</p>
</div>
<div className="relative bg-[#FFFCFA] pt-4 md:pt-0">
<div className="w-16 h-16 rounded-full bg-white border border-stone-200 flex items-center justify-center text-lg font-semibold text-stone-900 shadow-sm mx-auto mb-6 relative z-10">
                        02
                    </div>
<h3 className="text-lg font-medium text-center text-stone-900 mb-2">Concept</h3>
<p className="text-sm text-center text-stone-500 px-2">I create initial concepts and layouts for your review.</p>
</div>
<div className="relative bg-[#FFFCFA] pt-4 md:pt-0">
<div className="w-16 h-16 rounded-full bg-white border border-stone-200 flex items-center justify-center text-lg font-semibold text-stone-900 shadow-sm mx-auto mb-6 relative z-10">
                        03
                    </div>
<h3 className="text-lg font-medium text-center text-stone-900 mb-2">Refine</h3>
<p className="text-sm text-center text-stone-500 px-2">We refine the designs based on your feedback until it's perfect.</p>
</div>
<div className="relative bg-[#FFFCFA] pt-4 md:pt-0">
<div className="w-16 h-16 rounded-full bg-[#D4A5A5] text-white flex items-center justify-center text-lg font-semibold shadow-lg shadow-[#D4A5A5]/30 mx-auto mb-6 relative z-10">
                        04
                    </div>
<h3 className="text-lg font-medium text-center text-stone-900 mb-2">Delivery</h3>
<p className="text-sm text-center text-stone-500 px-2">Final files are delivered in all necessary formats.</p>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-white border-y border-stone-100">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-4">
<div className="p-6 rounded-2xl bg-[#FFFCFA] border border-stone-100 flex items-start gap-4">
<div className="text-[#D4A5A5] mt-1"><iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon></div>
<div>
<h3 className="font-medium text-stone-900">On-Time Delivery</h3>
<p className="text-sm text-stone-500 mt-1">I respect your time. Deadlines are non-negotiable.</p>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#FFFCFA] border border-stone-100 flex items-start gap-4">
<div className="text-[#D4A5A5] mt-1"><iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon></div>
<div>
<h3 className="font-medium text-stone-900">Affordable Pricing</h3>
<p className="text-sm text-stone-500 mt-1">Premium design quality at startup-friendly rates.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-4xl mx-auto text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">What Clients Say</h2>
</div>
<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
<div className="p-8 bg-white border border-stone-100 rounded-2xl relative">
<div className="text-[#D4A5A5] absolute top-6 left-6 text-4xl opacity-20 font-serif">"</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6 relative z-10">
                    Densi completely transformed our Instagram presence. The templates are so easy to use and look stunning!
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200"></div>
<div>
<p className="text-xs font-semibold text-stone-900">Priya S.</p>
<p className="text-[10px] text-stone-400">Boutique Owner</p>
</div>
</div>
</div>
<div className="p-8 bg-white border border-stone-100 rounded-2xl relative">
<div className="text-[#D4A5A5] absolute top-6 left-6 text-4xl opacity-20 font-serif">"</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6 relative z-10">
                    Professional, creative, and very patient with my revisions. The logo she designed captured my vision perfectly.
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200"></div>
<div>
<p className="text-xs font-semibold text-stone-900">Rahul M.</p>
<p className="text-[10px] text-stone-400">Tech Startup</p>
</div>
</div>
</div>
<div className="p-8 bg-white border border-stone-100 rounded-2xl relative">
<div className="text-[#D4A5A5] absolute top-6 left-6 text-4xl opacity-20 font-serif">"</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6 relative z-10">
                    Highly recommend Densi for any graphic design work. She understands color theory and branding very well.
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200"></div>
<div>
<p className="text-xs font-semibold text-stone-900">Anjali K.</p>
<p className="text-[10px] text-stone-400">Content Creator</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-white border-t border-stone-100" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<span className="text-[#D4A5A5] font-medium text-sm tracking-wide uppercase mb-2 block">Get in Touch</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900 mb-4">Let's Create Something Beautiful</h2>
<p className="text-stone-500 text-sm">Fill out the form below or chat on WhatsApp for a quick quote.</p>
</div>
<form action="#" className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1" htmlFor="name">Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-[#FFFCFA] border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent transition-all placeholder:text-stone-300" id="name" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-lg bg-[#FFFCFA] border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent transition-all placeholder:text-stone-300" id="email" placeholder="hello@example.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1">I'm interested in...</label>
<div className="flex flex-wrap gap-2 mt-2">
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-white text-xs font-medium text-stone-600 peer-checked:bg-[#D4A5A5] peer-checked:text-white peer-checked:border-[#D4A5A5] transition-all">Branding</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-white text-xs font-medium text-stone-600 peer-checked:bg-[#D4A5A5] peer-checked:text-white peer-checked:border-[#D4A5A5] transition-all">Social Media</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-white text-xs font-medium text-stone-600 peer-checked:bg-[#D4A5A5] peer-checked:text-white peer-checked:border-[#D4A5A5] transition-all">Website</span>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<span className="px-4 py-2 rounded-full border border-stone-200 bg-white text-xs font-medium text-stone-600 peer-checked:bg-[#D4A5A5] peer-checked:text-white peer-checked:border-[#D4A5A5] transition-all">Other</span>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-[#FFFCFA] border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A5A5] focus:border-transparent transition-all placeholder:text-stone-300" id="message" placeholder="Tell me a bit about your project..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-stone-900 hover:bg-[#D4A5A5] text-white font-medium rounded-lg transition-colors shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2" type="submit">
                    Send Inquiry <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
<div className="mt-8 pt-8 border-t border-stone-100 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#D4A5A5]" icon="solar:letter-linear"></iconify-icon> densidesignstudio@gmail.com
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#D4A5A5]" icon="solar:map-point-linear"></iconify-icon> Ahmedabad, Gujarat
                </div>
</div>
</div>
</section>

<footer className="bg-[#FFFCFA] py-12 px-6 border-t border-stone-200">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<a className="text-lg font-semibold tracking-tight text-stone-900" href="#">
                    Densi Design Studio<span className="text-[#D4A5A5] text-2xl leading-none">.</span>
</a>
<p className="text-xs text-stone-400 mt-1">© 2023 Densi Design Studio. All rights reserved.</p>
</div>
<div className="flex gap-6">
<a className="text-stone-400 hover:text-[#D4A5A5] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-[#D4A5A5] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-[#D4A5A5] transition-colors" href="#"><iconify-icon icon="solar:behance-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform z-50 group" href="https://wa.me/919925195694" target="_blank">
<iconify-icon icon="logos:whatsapp-icon" width="28"></iconify-icon>
<span className="absolute right-full mr-3 px-3 py-1 bg-white text-stone-800 text-xs font-medium rounded-lg shadow-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
        </span>
</a>

    </>
  );
}
