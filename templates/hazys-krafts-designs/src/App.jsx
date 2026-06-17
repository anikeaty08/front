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



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
});

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
      

<div className="bg-grain"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="flex h-20 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="flex group-hover:scale-105 transition-transform text-lg font-bold text-black font-heading bg-gradient-to-br from-orange-500 to-amber-600 w-8 h-8 rounded items-center justify-center">
  H</div>
<span className="group-hover:text-orange-400 transition-colors text-lg font-bold text-white tracking-tight font-heading">Hazys Kraft<span className="text-orange-500">.</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#testimonials">Reviews</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#packages">Packages</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
</div>

<a className="hidden md:inline-flex items-center justify-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors" href="#contact">
<iconify-icon className="" icon="solar:chat-round-dots-linear" width="18"></iconify-icon>
<span className="">Let's Talk</span>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="animate-on-scroll inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-900/10 mb-8 backdrop-blur-sm animate">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-semibold text-orange-200 uppercase tracking-widest font-heading">
          Freelance Visual Designer
        </span>
</div>

<h1 className="animate-on-scroll delay-100 md:text-7xl leading-[1.1] animate text-5xl font-bold text-white tracking-tight font-heading mb-6">
        Turn Your Food Photos Into <br className="hidden md:block"/>
<span className="text-gradient">More Orders</span>
</h1>

<p className="animate-on-scroll delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 animate">
        I help restaurants and cloud kitchens get more clicks and orders using premium food image enhancement, reels, and menu visuals.
      </p>

<div className="animate-on-scroll delay-300 flex flex-col sm:flex-row animate gap-x-4 gap-y-4 items-center justify-center">
<a className="sm:w-auto inline-flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all hover:scale-105 text-base font-bold text-black bg-[#25D366] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(37,211,102,0.3)]" href="https://wa.me/919607998001">
<iconify-icon className="" icon="solar:phone-calling-linear" width="20"></iconify-icon>
          WhatsApp Me
        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 px-8 py-4 rounded-full text-base font-medium transition-all" href="#work">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
          View Work
        </a>
</div>

<div className="animate-on-scroll delay-400 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-zinc-500 animate">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:user-circle-linear"></iconify-icon>
<span className="">Independent Freelancer (Haziq)</span>
</div>
<div className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:verified-check-linear"></iconify-icon>
<span className="" style={{}}>Specialized in Food Visuals</span>
</div>
<div className="hidden md:block w-1 h-1 bg-zinc-800 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:clock-circle-linear"></iconify-icon>
<span>Fast Turnaround</span>
</div>
</div>
</div>
</header>

<section className="py-20 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">

<div className="animate-on-scroll flex flex-col items-center text-center animate">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-orange-500 shadow-lg">
<iconify-icon icon="solar:eye-broken" width="32"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-bold text-white mb-3">Eat With Their Eyes</h3>
<p className="text-zinc-400 leading-relaxed">
            93% of customers look at photos before ordering. Dull photos mean skipped meals. Vibrant photos create cravings.
          </p>
</div>

<div className="animate-on-scroll delay-100 flex flex-col items-center text-center animate">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-orange-500 shadow-lg">
<iconify-icon className="" icon="solar:cursor-square-broken" width="32"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-bold text-white mb-3">Increase Click-Throughs</h3>
<p className="text-zinc-400 leading-relaxed">
            On Zomato and Swiggy, your main image is your billboard. Better visuals directly lead to higher click-through rates.
          </p>
</div>

<div className="animate-on-scroll delay-200 flex flex-col items-center text-center animate">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-orange-500 shadow-lg">
<iconify-icon icon="solar:shield-check-broken" width="32"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-bold text-white mb-3">Build Premium Trust</h3>
<p className="text-zinc-400 leading-relaxed">
            High-quality consistency across Google and Social Media tells customers you care about quality in the kitchen too.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="work">
<div className="max-w-6xl mx-auto">
<div className="mb-16 text-center animate-on-scroll">
<h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">See the <span className="text-orange-500">Difference</span></h2>
<p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Don't let bad lighting ruin your best dish. I enhance texture, correct color, and make your food pop.
        </p>
</div>

<div className="animate-on-scroll relative w-full max-w-4xl mx-auto h-[400px] md:h-[500px] rounded-2xl border border-white/10 shadow-2xl overflow-hidden group">

<img alt="Dull Burger" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop&amp;sat=-50&amp;bri=-20"/>

<div className="comparison-overlay absolute inset-0 w-1/2 overflow-hidden border-r-2 border-white/80 bg-black">
<img alt="Enhanced Burger" className="w-[200%] h-full max-w-none object-cover absolute top-0 left-0" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" style={{transform: 'translateX(0)'}}/>
</div>

<div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-white pointer-events-none border border-white/10">
          Hover image to compare
        </div>

<div className="absolute bottom-6 right-6 bg-black/80 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Original</div>
<div className="absolute bottom-6 left-6 bg-orange-600 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider z-20">Enhanced</div>

<div className="absolute inset-y-0 left-1/2 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none group-hover:opacity-0 transition-opacity">
<div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
<iconify-icon icon="solar:code-scan-linear"></iconify-icon>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
<div className="animate-on-scroll delay-100 rounded-xl overflow-hidden aspect-square border border-white/10 relative group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-sm font-bold text-white">Salad Bowls</span>
</div>
</div>
<div className="animate-on-scroll delay-200 rounded-xl overflow-hidden aspect-square border border-white/10 relative group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&amp;auto=format&amp;fit=crop"/>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 bg-black/50 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-sm font-bold text-white">Italian Pizza</span>
</div>
</div>
<div className="animate-on-scroll delay-300 rounded-xl overflow-hidden aspect-square border border-white/10 relative group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1626074353765-517a681e40be?w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="text-sm font-bold text-white">Grill &amp; BBQ</span>
</div>
</div>
<div className="animate-on-scroll delay-400 rounded-xl overflow-hidden aspect-square border border-white/10 relative group cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=500&amp;auto=format&amp;fit=crop"/>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 bg-black/50 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-sm font-bold text-white">Cocktails</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#080808] pt-24 pr-6 pb-24 pl-6" id="services">
<div className="max-w-6xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 animate-on-scroll">
<div className="max-w-2xl">
<h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Services Tailored for <span className="text-orange-500">Restaurants</span></h2>
<p className="text-lg text-zinc-400">Everything you need to create a premium online presence, from menu cards to Instagram reels.</p>
</div>
<a className="hidden md:inline-block text-orange-500 font-medium hover:text-orange-400 transition-colors mt-4 md:mt-0" href="#contact">
                Get a Custom Quote →
            </a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="animate-on-scroll group hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 bg-zinc-900/50 border-zinc-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-bold text-white mb-3">Food Image Upscaling</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Make your existing phone photos look professional. I enhance lighting, color grading, and sharpness to make dishes look premium.
                </p>
</div>

<div className="animate-on-scroll delay-100 group hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-zinc-900/50 border-zinc-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8" onclick="window.location.href='/www.aipoool.com';window.location.href='/www.aipoool.com';window.location.href='/aipoool.com';window.location.href='/';window.location.href='https://www.youtube.com/shorts/DWmKkDlffbw';window.location.href='https://www.youtube.com/shorts/DWmKkDlffbw';window.location.href='https://www.youtube.com/shorts/DWmKkDlffbw'" role="button">
<div className="flex group-hover:bg-orange-500 group-hover:text-white transition-colors text-orange-500 bg-orange-500/10 w-12 h-12 rounded-lg mb-6 items-center justify-center">
<iconify-icon className="" icon="solar:clapperboard-play-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white font-heading mb-3">Short Food Reels</h3>
<p className="leading-relaxed text-sm text-zinc-400">
        Engaging 15-30 second reels for Instagram and Google Maps. Show the steam, the pour, and the atmosphere.
    </p>
</div>

<div className="animate-on-scroll delay-200 group hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 bg-zinc-900/50 border-zinc-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-bold text-white mb-3">Listing Optimization</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Optimize visuals specifically for Zomato, Swiggy, and Google My Business to fit their aspect ratios and algorithms.
                </p>
</div>

<div className="animate-on-scroll group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:tag-price-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-bold text-white mb-3">Promo Creatives</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Eye-catching designs for Festival offers, Weekend Combos, and Happy Hours designed to stop the scroll.
                </p>
</div>

<div className="animate-on-scroll delay-100 group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-bold text-white mb-3">Branding &amp; Identity</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Logo refreshes, digital menu design, and cohesive brand color palettes to give your outlet a distinct personality.
                </p>
</div>

<div className="animate-on-scroll delay-200 group p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="font-heading text-xl font-bold text-white mb-3">Digital Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    General graphic design support for your digital needs, from QR code stands to social media story templates.
                </p>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="testimonials">
<div className="max-w-6xl mr-auto ml-auto">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">What Restaurant <span className="text-orange-500">Owners Say</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="animate-on-scroll p-8 rounded-2xl bg-zinc-900/30 border border-white/5 h-full flex flex-col hover:border-white/10 transition-colors">
<iconify-icon className="text-orange-500 text-3xl mb-6 opacity-80" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-zinc-300 text-lg mb-8 leading-relaxed flex-1">“Our food looks irresistible now. We’ve seen more clicks on Zomato within weeks.”</p>
<div className="border-t border-white/5 pt-4">
<div className="font-bold text-white font-heading" style={{}}>Rohit Shukla</div>
<div className="text-sm text-zinc-500" style={{}}>Cloud x Kitchen</div>
</div>
</div>

<div className="animate-on-scroll delay-100 flex flex-col hover:border-white/10 transition-colors bg-zinc-900/30 h-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<iconify-icon className="text-orange-500 text-3xl mb-6 opacity-80" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-zinc-300 text-lg mb-8 leading-relaxed flex-1">“The images feel premium and consistent. Customers notice the difference.”</p>
<div className="border-t border-white/5 pt-4">
<div className="font-bold text-white font-heading" style={{}}>Pramod Bhagate</div>
<div className="text-sm text-zinc-500">Urban Cafe</div>
</div>
</div>

<div className="animate-on-scroll delay-200 p-8 rounded-2xl bg-zinc-900/30 border border-white/5 h-full flex flex-col hover:border-white/10 transition-colors">
<iconify-icon className="text-orange-500 text-3xl mb-6 opacity-80" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-zinc-300 text-lg mb-8 leading-relaxed flex-1">“Simple process, fast delivery, and great results.”</p>
<div className="border-t border-white/5 pt-4">
<div className="font-bold text-white font-heading" style={{}}>Azad Sheikh</div>
<div className="text-sm text-zinc-500" style={{}}>LA BISTRO</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pr-6 pb-24 pl-6 relative" id="about">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="animate-on-scroll order-2 md:order-1">
<h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">Not an Agency.<br/>Your <span className="text-orange-500">Personal Design Partner</span>.</h2>
<div className="space-y-6 text-zinc-400 text-lg">
<p className="">
                    Agencies are great, but they can be slow and expensive. I'm a freelance specialist focused solely on the food industry.
                </p>
<p className="">
                    When you work with me, you talk directly to the designer (me). I understand the urgency of the restaurant business—menus change, offers expire, and weekends are busy.
                </p>
<ul className="space-y-3 mt-4">
<li className="flex items-center gap-3 text-white font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Direct Communication (No Account Managers)
                    </li>
<li className="flex items-center gap-3 text-white font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Fast Turnaround for Urgent Promos
                    </li>
<li className="flex items-center gap-3 text-white font-medium">
<iconify-icon className="text-orange-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Cost-Effective (Pay for work, not overhead)
                    </li>
</ul>
</div>
</div>
<div className="animate-on-scroll order-1 md:order-2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent rounded-2xl transform rotate-3 scale-105 blur-sm"></div>
<img alt="Workspace" className="relative rounded-2xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#080808]" id="packages">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Simple <span className="text-orange-500">Packages</span></h2>
<p className="text-zinc-400 text-lg">Transparent pricing. No hidden fees. Choose what fits your stage.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="animate-on-scroll flex flex-col p-8 rounded-2xl bg-black border border-zinc-800 hover:border-zinc-600 transition-colors">
<div className="mb-2 text-zinc-400 font-medium uppercase tracking-wider text-sm">The Starter</div>
<h3 className="font-heading text-3xl font-bold text-white mb-6">Menu Refresh</h3>
<p className="text-sm text-zinc-500 mb-8 border-b border-zinc-800 pb-8 h-12">
                    Perfect for updating your main delivery platform images.
                </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500 text-lg mt-0.5" icon="solar:check-read-linear"></iconify-icon>
                        10 Premium Image Enhancements
                    </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500 text-lg mt-0.5" icon="solar:check-read-linear"></iconify-icon>
                        Color Correction &amp; Grading
                    </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500 text-lg mt-0.5" icon="solar:check-read-linear"></iconify-icon>
                        Zomato/Swiggy Aspect Ratio Crops
                    </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-zinc-700 text-white font-medium hover:bg-zinc-800 transition-colors" href="https://wa.me/?text=I'm%20interested%20in%20the%20Starter%20Package">
                    Get Started
                </a>
</div>

<div className="animate-on-scroll delay-100 flex flex-col p-8 rounded-2xl bg-zinc-900 border border-orange-500/30 relative shadow-[0_0_30px_rgba(249,115,22,0.1)]">
<div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
                    Most Popular
                </div>
<div className="mb-2 text-orange-400 font-medium uppercase tracking-wider text-sm">The Growth</div>
<h3 className="font-heading text-3xl font-bold text-white mb-6">Visual Overhaul</h3>
<p className="text-sm text-zinc-400 mb-8 border-b border-white/10 pb-8 h-12">
                    A complete visual upgrade to drive orders and engagement.
                </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-orange-500 text-lg mt-0.5" icon="solar:check-read-linear"></iconify-icon>
                        20 Premium Image Enhancements
                    </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-orange-500 text-lg mt-0.5" icon="solar:check-read-linear"></iconify-icon>
                        2 Professional Food Reels (15s)
                    </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-orange-500 text-lg mt-0.5" icon="solar:check-read-linear"></iconify-icon>
                        Google Business Profile Setup
                    </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg bg-orange-600 text-white font-bold hover:bg-orange-500 transition-colors shadow-lg shadow-orange-900/20" href="https://wa.me/?text=I'm%20interested%20in%20the%20Growth%20Package">
                    Boost My Orders
                </a>
</div>

<div className="animate-on-scroll delay-200 flex flex-col p-8 rounded-2xl bg-black border border-zinc-800 hover:border-zinc-600 transition-colors">
<div className="mb-2 text-zinc-400 font-medium uppercase tracking-wider text-sm">The Partner</div>
<h3 className="font-heading text-3xl font-bold text-white mb-6">Monthly Retainer</h3>
<p className="text-sm text-zinc-500 mb-8 border-b border-zinc-800 pb-8 h-12">
                    Ongoing design support for busy kitchens with regular offers.
                </p>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500 text-lg mt-0.5" icon="solar:check-read-linear"></iconify-icon>
                        Weekly Creative Updates (4/mo)
                    </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500 text-lg mt-0.5" icon="solar:check-read-linear"></iconify-icon>
                        1 New Reel Every Month
                    </li>
<li className="flex items-start gap-3 text-sm text-zinc-300">
<iconify-icon className="text-orange-500 text-lg mt-0.5" icon="solar:check-read-linear"></iconify-icon>
                        Priority Support (Fast Lane)
                    </li>
</ul>
<a className="w-full block text-center py-3 rounded-lg border border-zinc-700 text-white font-medium hover:bg-zinc-800 transition-colors" href="https://wa.me/?text=I'm%20interested%20in%20Monthly%20Retainer">
                    Inquire Now
                </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-900/10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center animate-on-scroll">
<h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to Upgrade Your <br/><span className="text-gradient">Brand Presence?</span>
</h2>
<p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Stop losing customers to your competitors' better photos. Let's make your online presence as good as your food.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<a className="group md:w-auto flex items-center justify-center gap-3 hover:bg-[#20bd5a] transition-all hover:scale-105 text-lg font-bold text-black bg-[#25D366] w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" href="https://wa.me/919607998001">
<iconify-icon className="" icon="solar:chat-square-call-linear" width="24"></iconify-icon>
<span className="">Chat on WhatsApp</span>
</a>
<a className="w-full md:w-auto flex items-center justify-center gap-3 bg-zinc-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-700 transition-all" href="mailto:hello@example.com">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
<span>Get Free Visual Audit</span>
</a>
</div>
<p className="mt-8 text-sm text-zinc-600">
            Usually reply within 2 hours. No agency fluff, just results.
        </p>
</div>
</section>

<footer className="border-t border-zinc-800 bg-black py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-black font-bold font-heading text-xs">H</div>
<span className="font-heading font-bold text-lg text-white">Hazys Kraft<span className="text-orange-500">.</span></span>
</div>
<div className="text-sm text-zinc-500">
            © 2024 Freelance Visual Designer. All rights reserved.
        </div>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
