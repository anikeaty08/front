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
neutral: {
850: '#1A1A1A',
900: '#121212',
950: '#080808',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-black/50 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group relative z-50" href="#">
<img alt="Fixit Property Maintenance" className="h-10 w-auto logo-invert opacity-90 group-hover:opacity-100 transition-opacity" src="https://static.wixstatic.com/media/5f56e4_d5947a459f594dbe965df5564d718176~mv2.png/v1/crop/x_13,y_0,w_1121,h_696/fill/w_491,h_305,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fixit%20Logo2.png"/>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-300 hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="px-5 py-2 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 text-xs font-medium uppercase tracking-widest rounded-sm" href="tel:07975603802">
                    07975 603 802
                </a>
</div>

<button className="md:hidden text-white p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Property Maintenance Background" className="w-full h-full object-cover opacity-25 scale-105 animate-[pulse_10s_ease-in-out_infinite] grayscale" src="https://static.wixstatic.com/media/5f56e4_69f66ac2f2114656a46cbf8a161ca329~mv2.jpg/v1/crop/x_0,y_38,w_847,h_574/fill/w_777,h_526,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7622.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#050505]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
</div>

<div className="relative z-10 text-center max-w-4xl px-6 pt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] uppercase tracking-widest text-neutral-300">Available for hire in Cannock</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-6">
                Complete Property <br/> <span className="text-gradient font-normal">Solutions.</span>
</h1>
<p className="text-neutral-300 text-sm md:text-base font-light tracking-wide max-w-xl mx-auto mb-10 leading-relaxed">
                Professional maintenance, renovations, and handyman services. Serving Cannock, Heath Hayes, Hednesford, Burntwood, Rugeley, Lichfield, and Stafford.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-white text-black text-xs font-medium uppercase tracking-widest hover:bg-neutral-200 transition-colors min-w-[160px] rounded-sm" href="tel:07975603802">
                    Call Now
                </a>
<a className="px-8 py-3 border border-white/20 text-white text-xs font-medium uppercase tracking-widest hover:bg-white/5 transition-colors min-w-[160px] rounded-sm" href="#services">
                    View Trades
                </a>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
<span className="text-[10px] uppercase tracking-widest text-neutral-400">Scroll</span>
<iconify-icon className="text-white" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</div>
</header>

<section className="border-b border-white/5 bg-[#080808]">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="py-6 flex items-center justify-center gap-4 group">
<div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors text-white">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-xs font-medium text-white uppercase tracking-widest">Open Mon-Sat</h3>
<p className="text-[10px] text-neutral-500 mt-0.5">8:00 AM - 5:00 PM</p>
</div>
</div>
<div className="py-6 flex items-center justify-center gap-4 group">
<div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors text-white">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-xs font-medium text-white uppercase tracking-widest">Service Area</h3>
<p className="text-[10px] text-neutral-500 mt-0.5">Cannock &amp; Surroundings</p>
</div>
</div>
<div className="py-6 flex items-center justify-center gap-4 group">
<div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors text-white">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-xs font-medium text-white uppercase tracking-widest">Email Us</h3>
<p className="text-[10px] text-neutral-500 mt-0.5">Fixitpropertymaintenance@yahoo.com</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505]" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<span className="text-blue-500 text-xs font-medium uppercase tracking-widest mb-3 block">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Comprehensive Trade Services</h2>
</div>
<p className="text-sm text-neutral-500 max-w-xs leading-relaxed text-right md:text-right text-left">
                    One call solves it all. We coordinate multiple trades to deliver seamless project completion.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-sm">

<div className="group relative p-8 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-8 text-neutral-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:bath-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2 tracking-wide">Bathrooms</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Full suite installations, tiling, and plumbing for modern bathrooms.
                    </p>
</div>
<div className="group relative p-8 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-8 text-neutral-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:chef-hat-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2 tracking-wide">Kitchens</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Kitchen-diner renovations, cabinet fitting, and worktop installation.
                    </p>
</div>
<div className="group relative p-8 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-8 text-neutral-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:paint-roller-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2 tracking-wide">Decorating</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        High-finish interior painting, wallpapering, and plaster repairs.
                    </p>
</div>
<div className="group relative p-8 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-8 text-neutral-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:bolt-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2 tracking-wide">Electrics</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Lighting upgrades, socket additions, and electrical maintenance.
                    </p>
</div>
<div className="group relative p-8 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-8 text-neutral-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:drop-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2 tracking-wide">Plumbing</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Leaks, repairs, radiator installation and general plumbing tasks.
                    </p>
</div>
<div className="group relative p-8 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-8 text-neutral-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:hammer-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2 tracking-wide">Carpentry</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Door hanging, skirting boards, flooring, and bespoke storage.
                    </p>
</div>
<div className="group relative p-8 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-8 text-neutral-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2 tracking-wide">Tiling</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Wall and floor tiling for kitchens, hallways and bathrooms.
                    </p>
</div>
<div className="group relative p-8 bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors duration-500">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-8 text-neutral-400 group-hover:text-blue-400 transition-colors">
<iconify-icon icon="solar:leaf-linear" width="32"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2 tracking-wide">Gardening</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Landscaping, fencing, patios, and general garden maintenance.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1 space-y-8">
<div className="flex items-center gap-3 text-white/80">
<div className="h-px w-8 bg-blue-500"></div>
<span className="text-xs font-medium uppercase tracking-widest text-blue-400">About Fixit</span>
</div>
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tight leading-tight">
                        Give Your Home <br/> <span className="text-neutral-600">Some TLC.</span>
</h2>
<div className="space-y-6 text-sm text-neutral-400 leading-relaxed font-light">
<p>
                            If your home is in need of some TLC, Fixit Property Maintenance and Handyman Services are your trusted local partner. We cover Cannock, Heath Hayes, Hednesford, Burntwood, Rugeley, Lichfield, and Stafford.
                        </p>
<p>
                            Whether it's a kitchen-diner transformation, bedroom refresh, bathroom upgrade, study build, or exterior landscaping, we have multiple trades to choose from. We pride ourselves on reliability and high-quality workmanship.
                        </p>
<ul className="space-y-2 mt-4">
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Fully Insured
                            </li>
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Multi-skilled Tradesmen
                            </li>
<li className="flex items-center gap-3 text-xs text-white">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Free Quotations
                            </li>
</ul>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-widest hover:text-blue-400 transition-colors group" href="tel:07975603802">
                            Get a Free Quotation
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="order-1 lg:order-2 relative group">
<div className="absolute -inset-4 border border-white/5 rounded-sm translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
<div className="relative overflow-hidden aspect-[4/3] bg-neutral-900 rounded-sm">
<img alt="Fixit Tools" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 opacity-80 grayscale group-hover:grayscale-0" src="https://static.wixstatic.com/media/5f56e4_137e0a94c7bc4f9fa5561fa5be5d756b~mv2.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-neutral-900 border-y border-white/5">
<div className="absolute inset-0 z-0">

<img className="w-full h-full object-cover opacity-5 grayscale mix-blend-overlay" src="https://static.wixstatic.com/media/5f56e4_69f66ac2f2114656a46cbf8a161ca329~mv2.jpg/v1/crop/x_0,y_38,w_847,h_574/fill/w_777,h_526,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7622.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">Ready to start your project?</h2>
<p className="text-neutral-400 font-light text-sm leading-relaxed">
                    Contact Marc today to discuss your requirements. We are ready to help with any property maintenance needs.
                </p>
</div>
<div>
<a className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-sm border border-white/20 text-white hover:border-white transition-colors duration-300 block" href="tel:07975603802">
<span className="relative text-xs font-medium uppercase tracking-widest flex items-center gap-3">
                        Call 07975 603 802
                        <iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<footer className="bg-[#020202] pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">

<a className="block mb-6 opacity-80 hover:opacity-100 transition-opacity" href="#">
<img alt="Fixit Logo" className="h-12 w-auto logo-invert" src="https://static.wixstatic.com/media/5f56e4_d5947a459f594dbe965df5564d718176~mv2.png/v1/crop/x_13,y_0,w_1121,h_696/fill/w_491,h_305,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Fixit%20Logo2.png"/>
</a>
<p className="text-neutral-500 text-xs leading-relaxed">
                        Professional property maintenance and handyman services for Cannock, Staffordshire and surrounding areas.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Services</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Bathrooms &amp; Kitchens</a></li>
<li><a className="hover:text-white transition-colors" href="#">Plumbing &amp; Electrics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Painting &amp; Decorating</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gardening &amp; Landscaping</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Contact</h4>
<ul className="space-y-3 text-xs text-neutral-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-white/80" icon="solar:phone-linear"></iconify-icon>
                            07975 603 802
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white/80" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:Fixitpropertymaintenance@yahoo.com">Fixitpropertymaintenance@yahoo.com</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white/80" icon="solar:map-point-linear"></iconify-icon>
                            Cannock, Staffordshire
                        </li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-widest mb-6">Connect</h4>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-blue-500 transition-colors p-2 border border-white/5 rounded-full hover:bg-white/5" href="https://www.facebook.com/profile.php?id=61553160442732" target="_blank">
<iconify-icon icon="brandico:facebook-rect" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-pink-500 transition-colors p-2 border border-white/5 rounded-full hover:bg-white/5" href="https://www.instagram.com/fixit_property_maintenance?igsh=MXJ0eGFraGx3NnJsbA%3D%3D" target="_blank">
<iconify-icon icon="brandico:instagram-filled" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-blue-400 transition-colors p-2 border border-white/5 rounded-full hover:bg-white/5" href="https://www.linkedin.com/in/marc-edwards-1611a330b/" target="_blank">
<iconify-icon icon="brandico:linkedin-rect" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2024 by Marc J Edwards. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-[10px] text-neutral-600 hover:text-white uppercase tracking-widest transition-colors" href="#">Privacy Policy</a>
<a className="text-[10px] text-neutral-600 hover:text-white uppercase tracking-widest transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
