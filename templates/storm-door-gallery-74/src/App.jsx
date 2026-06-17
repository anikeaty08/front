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
      

<nav className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-lg border-b border-[#DEDFE3]/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-['Libre_Baskerville',_serif] text-lg tracking-tighter text-[#262F40]" href="/">
                DENVER STORM DOOR
            </a>
<div className="hidden md:flex items-center space-x-10">
<a className="text-xs tracking-wider uppercase text-[#262F40] font-normal hover:text-[#D2562D] transition-colors" href="#">Home</a>
<a className="text-xs tracking-wider uppercase text-[#262F40] font-normal hover:text-[#D2562D] transition-colors" href="#">About</a>
<a className="text-xs tracking-wider uppercase text-[#262F40] font-normal hover:text-[#D2562D] transition-colors" href="#">Doors</a>
<a className="text-xs tracking-wider uppercase text-[#D2562D] font-medium" href="#">Gallery</a>
</div>
<div className="hidden md:flex items-center space-x-6">
<div className="flex items-center space-x-2 text-[#262F40]">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">720-707-2366</span>
</div>
<a className="bg-[#D2562D] text-white px-5 py-2.5 rounded text-xs tracking-wider uppercase font-medium hover:bg-[#D49256] transition-colors shadow-sm" href="#">
                    View Catalog
                </a>
</div>
<button className="md:hidden text-[#262F40] p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="pt-24 pb-16 px-6 text-center max-w-4xl mx-auto">
<h1 className="font-['Libre_Baskerville',_serif] text-4xl md:text-5xl text-[#262F40] tracking-tight mb-6">
            Our Recent Installations
        </h1>
<p className="text-base md:text-lg leading-relaxed text-[#576175]">
            Built for wind. Designed for Colorado living. Explore a selection of our custom storm and security doors installed throughout Parker, Castle Rock, and the greater Denver Metro area.
        </p>
</header>

<section className="max-w-7xl mx-auto px-6 mb-8 flex flex-wrap justify-center gap-4">
<button className="px-4 py-2 rounded-full border border-[#D2562D] bg-[#D2562D]/5 text-[#D2562D] text-xs uppercase tracking-wider font-medium transition-colors">All Projects</button>
<button className="px-4 py-2 rounded-full border border-[#DEDFE3] text-[#576175] text-xs uppercase tracking-wider font-normal hover:border-[#262F40] hover:text-[#262F40] transition-colors">Full View</button>
<button className="px-4 py-2 rounded-full border border-[#DEDFE3] text-[#576175] text-xs uppercase tracking-wider font-normal hover:border-[#262F40] hover:text-[#262F40] transition-colors">Security</button>
<button className="px-4 py-2 rounded-full border border-[#DEDFE3] text-[#576175] text-xs uppercase tracking-wider font-normal hover:border-[#262F40] hover:text-[#262F40] transition-colors">Custom Colors</button>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="group relative aspect-[4/5] bg-[#F5F5F5] rounded-xl overflow-hidden border border-[#DEDFE3]/50 shadow-sm cursor-pointer">
<img alt="Full View Storm Door" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#262F40]/90 via-[#262F40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 className="font-['Libre_Baskerville',_serif] text-white text-2xl tracking-tight mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Modern Full View</h3>
<p className="text-white/80 text-sm flex items-center space-x-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span>Castle Rock, CO</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-[#F5F5F5] rounded-xl overflow-hidden border border-[#DEDFE3]/50 shadow-sm cursor-pointer">
<img alt="Security Door Installation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#262F40]/90 via-[#262F40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 className="font-['Libre_Baskerville',_serif] text-white text-2xl tracking-tight mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Heavy-Duty Security</h3>
<p className="text-white/80 text-sm flex items-center space-x-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span>Parker, CO</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-[#F5F5F5] rounded-xl overflow-hidden border border-[#DEDFE3]/50 shadow-sm cursor-pointer">
<img alt="Ventilating Storm Door" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#262F40]/90 via-[#262F40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 className="font-['Libre_Baskerville',_serif] text-white text-2xl tracking-tight mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Ventilating Glass Style</h3>
<p className="text-white/80 text-sm flex items-center space-x-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span>Highlands Ranch, CO</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-[#F5F5F5] rounded-xl overflow-hidden border border-[#DEDFE3]/50 shadow-sm cursor-pointer">
<img alt="Custom Color Frame" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#262F40]/90 via-[#262F40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 className="font-['Libre_Baskerville',_serif] text-white text-2xl tracking-tight mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Custom Bronze Finish</h3>
<p className="text-white/80 text-sm flex items-center space-x-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span>Littleton, CO</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-[#F5F5F5] rounded-xl overflow-hidden border border-[#DEDFE3]/50 shadow-sm cursor-pointer">
<img alt="Decorative Security Door" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#262F40]/90 via-[#262F40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 className="font-['Libre_Baskerville',_serif] text-white text-2xl tracking-tight mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Decorative Ironwork</h3>
<p className="text-white/80 text-sm flex items-center space-x-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span>Centennial, CO</span>
</p>
</div>
</div>

<div className="group relative aspect-[4/5] bg-[#F5F5F5] rounded-xl overflow-hidden border border-[#DEDFE3]/50 shadow-sm cursor-pointer">
<img alt="Low-E Glass Storm Door" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#262F40]/90 via-[#262F40]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 className="font-['Libre_Baskerville',_serif] text-white text-2xl tracking-tight mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Low-E Glass Protection</h3>
<p className="text-white/80 text-sm flex items-center space-x-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span>Lone Tree, CO</span>
</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F5F5F5] border-y border-[#DEDFE3]/60 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-['Libre_Baskerville',_serif] text-3xl md:text-4xl text-[#262F40] tracking-tight mb-6">
                        Craftsmanship You Can See. Reliability You Can Feel.
                    </h2>
<p className="text-base text-[#576175] mb-8 leading-relaxed">
                        Every door in our gallery represents a careful process of measurement, custom sizing, and meticulous installation. We don't believe in shortcuts because we know what Colorado wind and weather demand from an entryway.
                    </p>
<div className="space-y-6">
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2562D]/10 flex items-center justify-center mt-1">
<iconify-icon className="text-[#D2562D] text-lg" icon="solar:ruler-pen-linear"></iconify-icon>
</div>
<div>
<h3 className="font-['Libre_Baskerville',_serif] text-[#262F40] text-lg tracking-tight mb-1">Precision Fit</h3>
<p className="text-sm text-[#576175]">Custom sizing ensures a tight weather seal and optimal wind resistance.</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#D2562D]/10 flex items-center justify-center mt-1">
<iconify-icon className="text-[#D2562D] text-lg" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h3 className="font-['Libre_Baskerville',_serif] text-[#262F40] text-lg tracking-tight mb-1">Heavy-Duty Hardware</h3>
<p className="text-sm text-[#576175]">Strong hinges and closers designed to handle repeated stress.</p>
</div>
</div>
</div>
</div>
<div className="relative aspect-square md:aspect-video lg:aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-[#DEDFE3]">
<img alt="Storm Door Installation Details" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-[#262F40] py-24 px-6 relative overflow-hidden">

<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="font-['Libre_Baskerville',_serif] text-3xl md:text-4xl text-white tracking-tight mb-6">
                Schedule Your Storm Door Consultation in Parker or Castle Rock
            </h2>
<p className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto font-light">
                If your home faces strong winds or seasonal drafts, upgrading your storm door can make a noticeable difference. Contact us today for a free in-person estimate.
            </p>
<a className="inline-flex items-center space-x-2 bg-[#D2562D] text-white px-8 py-4 rounded text-sm tracking-wider uppercase font-medium hover:bg-[#D49256] transition-colors shadow-sm" href="#">
<span>Get Your Free Estimate</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-[#F5F5F5] pt-20 pb-8 px-6 border-t border-[#DEDFE3]/60">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="lg:col-span-1">
<a className="block font-['Libre_Baskerville',_serif] text-lg tracking-tighter text-[#262F40] mb-6" href="/">
                    DENVER STORM DOOR
                </a>
<p className="text-sm leading-relaxed text-[#576175]">
                    Your trusted storm door and security door supplier in Colorado. Protecting homes with quality and craftsmanship since day one.
                </p>
</div>
<div>
<h4 className="text-[#262F40] font-normal uppercase tracking-wider text-xs mb-6">Contact</h4>
<ul className="space-y-4">
<li className="flex items-center space-x-3 text-sm text-[#576175]">
<iconify-icon className="text-lg text-[#262F40]" icon="solar:map-point-linear"></iconify-icon>
<span>Littleton, CO</span>
</li>
<li className="flex items-center space-x-3 text-sm text-[#576175]">
<iconify-icon className="text-lg text-[#262F40]" icon="solar:phone-linear"></iconify-icon>
<span>720-707-2366</span>
</li>
<li className="flex items-center space-x-3 text-sm text-[#576175]">
<iconify-icon className="text-lg text-[#262F40]" icon="solar:letter-linear"></iconify-icon>
<span>contact@denverstormdoor.com</span>
</li>
</ul>
</div>
<div>
<h4 className="text-[#262F40] font-normal uppercase tracking-wider text-xs mb-6">Hours</h4>
<ul className="space-y-4 text-sm text-[#576175]">
<li className="flex items-start space-x-3">
<iconify-icon className="text-lg text-[#262F40] mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<span>Mon-Fri: 8AM - 6PM<br/>Sat: 9AM - 4PM</span>
</li>
</ul>
</div>
<div>
<h4 className="text-[#262F40] font-normal uppercase tracking-wider text-xs mb-6">Service Areas</h4>
<p className="text-sm leading-relaxed text-[#576175]">
                    Serving the entire Denver Metro Area, including Littleton, Englewood, Lakewood, Golden, Arvada, Centennial, Castle Rock, Parker, and surrounding communities.
                </p>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-[#DEDFE3] flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#576175]">
                © 2025 Denver Storm Door. All rights reserved.
            </p>
<div className="flex space-x-6">
<a className="text-xs text-[#576175] hover:text-[#262F40] transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-[#576175] hover:text-[#262F40] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
