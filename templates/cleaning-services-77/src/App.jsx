import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
50: '#f0f9ff',
100: '#e0f2fe',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 border-b border-slate-200/60 glass transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white group-hover:bg-brand-600 transition-colors duration-300">
<span className="font-medium text-lg tracking-tighter">L</span>
</div>
<span className="font-medium text-slate-900 tracking-tight text-sm uppercase">LongBeth</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5" href="tel:+12425567768">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span>(242) 556 7768</span>
</a>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern opacity-50 -z-10 h-full w-full"></div>
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-teal-100 rounded-full blur-3xl opacity-30 -z-10"></div>
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-[fade-in_1s_ease-out]">
<span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Premier Cleaning in Nassau 🇧🇸</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-slate-900 tracking-tighter mb-6 leading-[1.1]">
                Restoring the beauty<br className="hidden md:block"/> of your fine surfaces.
            </h1>
<p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Specializing in fine fabrics, stone, wood, and hard surfaces. We bring IICRC certified expertise to your home in Melton View Close and beyond.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto bg-slate-900 text-white h-12 px-8 rounded-lg flex items-center justify-center gap-2 font-medium text-sm hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-200" href="tel:+12425567768">
<span>Book Service</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<button className="w-full md:w-auto bg-white text-slate-900 border border-slate-200 h-12 px-8 rounded-lg flex items-center justify-center gap-2 font-medium text-sm hover:bg-slate-50 transition-colors">
                    View Our Work
                </button>
</div>

<div className="mt-16 pt-8 border-t border-slate-200 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">7k+</span>
<span className="text-xs text-slate-500">Instagram Followers</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">100%</span>
<span className="text-xs text-slate-500">Satisfaction</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">IICRC</span>
<span className="text-xs text-slate-500">Certified Techs</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-semibold text-slate-900 tracking-tight">Nassau</span>
<span className="text-xs text-slate-500">Locally Owned</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Expertise &amp; Precision</h2>
<p className="text-slate-500 font-light max-w-md">We don't just clean; we restore. Our specialized techniques are safe for your most delicate and expensive surfaces.</p>
</div>
<a className="text-sm font-medium text-brand-600 hover:text-brand-800 flex items-center gap-1 transition-colors" href="#">
                    See all services <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-default">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:armchair-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Upholstery &amp; Fabrics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Delicate cleaning for fine fabrics, sofas, and drapes, removing stains while preserving texture.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-default">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:smart-home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Stone &amp; Tile</h3>
<p className="text-sm text-slate-500 leading-relaxed">Restoration for marble, granite, and tile. We clean grout lines and reseal surfaces for longevity.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-default">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:layers-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Wood Floors</h3>
<p className="text-sm text-slate-500 leading-relaxed">Deep cleaning and polishing for hardwood floors to bring back their natural shine and warmth.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 cursor-default">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-900 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:medal-ribbon-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">IICRC Certified</h3>
<p className="text-sm text-slate-500 leading-relaxed">Certified Textile Technicians ensuring industry-standard care for your home investments.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl shadow-slate-200 border border-slate-200 relative">

<div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-5">
<iconify-icon icon="solar:shield-check-linear" width="200"></iconify-icon>
</div>

<div className="absolute bottom-8 left-8 right-8 bg-white/80 backdrop-blur-md p-6 rounded-xl border border-white/50 shadow-lg">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-600" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Located in Nassau</p>
<p className="text-xs text-slate-500">Melton View Close</p>
</div>
</div>
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="16"></iconify-icon>
<span className="text-xs font-medium text-slate-600 ml-2">Consistent Excellence</span>
</div>
</div>
</div>
</div>

<div>
<div className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-brand-600 text-xs font-medium mb-6 uppercase tracking-wider">
                        Why Choose LongBeth
                    </div>
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">
                        Detail-oriented cleaning for discerning homeowners.
                    </h2>
<p className="text-slate-500 font-light mb-8 leading-relaxed">
                        At LongBeth Cleaning Solutions, we understand that your home features fine materials that require specific care. Regular cleaners often miss the science behind stone and fiber care. 
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-600 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Fine Fabric Specialists</h4>
<p className="text-xs text-slate-500 mt-1">We treat silk, velvet, and other delicate textiles.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-600 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Advanced Equipment</h4>
<p className="text-xs text-slate-500 mt-1">Using the latest technology for deep, restorative cleaning.</p>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-600 mt-1 flex-shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-slate-900">Local &amp; Trusted</h4>
<p className="text-xs text-slate-500 mt-1">Serving Melton View Close and Nassau with pride.</p>
</div>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:text-slate-600 hover:border-slate-600 transition-colors" href="https://instagram.com/longbethcleaningsolutions" target="_blank">
                        View our gallery on Instagram
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Ready to refresh your home?</h2>
<p className="text-slate-400 font-light text-lg mb-10 max-w-xl mx-auto">
                Join over 7,000 followers and satisfied clients in Nassau who trust LongBeth for their cleaning needs.
            </p>
<div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 inline-block w-full max-w-lg">
<div className="flex flex-col gap-6">
<div className="text-center">
<p className="text-sm text-slate-300 mb-2 uppercase tracking-wide">Call for a free quote</p>
<a className="text-3xl md:text-4xl font-semibold tracking-tight hover:text-brand-300 transition-colors" href="tel:+12425567768">
                            (242) 556 7768
                        </a>
</div>
<div className="w-full h-px bg-white/10"></div>
<div className="flex justify-between items-center text-sm text-slate-300">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>Mon - Sat</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
<span>Nassau, BS</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white text-xs">L</div>
<span className="font-medium text-slate-900 tracking-tight">LongBeth</span>
</a>
<p className="text-slate-500 text-sm font-light max-w-xs mb-6">
                        Professional Stone, Upholstery, Tile &amp; Grout Cleaning Services in Nassau, Bahamas.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-slate-900 transition-colors" href="#">Upholstery Cleaning</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Stone Restoration</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Tile &amp; Grout</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Wood Floors</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li>Melton View Close</li>
<li>Nassau, Bahamas</li>
<li><a className="hover:text-slate-900" href="tel:2425567768">(242) 556 7768</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-light">
                    © 2023 LongBeth Cleaning Solutions. All rights reserved.
                </p>
<div className="flex items-center gap-1 text-xs text-slate-400">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
<span>IICRC Certified Business</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
