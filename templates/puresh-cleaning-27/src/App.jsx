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
      

<div className="hidden lg:flex w-full text-sm py-2 px-8 justify-between items-center bg-slate-900 text-slate-300">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-yellow-400" data-lucide="clock" strokeWidth="1.5"></i>
<span>08:00 - 17:00</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-yellow-400" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>2nd Lorem Ipsum Street</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-yellow-400" data-lucide="mail" strokeWidth="1.5"></i>
<span>example@gmail.com</span>
</div>
</div>
<div className="flex items-center gap-4">
<a className="transition-colors hover:text-yellow-400" href="#"><i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="transition-colors hover:text-yellow-400" href="#"><i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="transition-colors hover:text-yellow-400" href="#"><i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="transition-colors hover:text-yellow-400" href="#"><i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur-md border-b bg-white/80 border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-2">
<div className="relative flex items-center justify-center w-8 h-8">
<div className="absolute w-6 h-6 rounded-full left-0 opacity-90 bg-slate-900"></div>
<div className="absolute w-6 h-6 rounded-full right-0 mix-blend-multiply opacity-90 bg-yellow-400"></div>
</div>
<span className="text-2xl font-semibold tracking-tight text-slate-900">Puresh</span>
</div>

<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-medium flex items-center gap-1 hover:text-yellow-500 transition-colors text-slate-900" href="#">Home <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="text-base font-medium transition-colors text-slate-600 hover:text-slate-900" href="#">About</a>
<a className="text-base font-medium flex items-center gap-1 transition-colors text-slate-600 hover:text-slate-900" href="#">Service <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="text-base font-medium flex items-center gap-1 transition-colors text-slate-600 hover:text-slate-900" href="#">Pages <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="text-base font-medium transition-colors text-slate-600 hover:text-slate-900" href="#">Contact Us</a>
</nav>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center text-base font-semibold px-6 py-2.5 rounded-lg hover:bg-yellow-500 transition-colors shadow-sm bg-yellow-400 text-slate-900" href="#">
                        Get A Quote
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</header>

<section className="overflow-hidden bg-slate-50 pt-20 pb-32 relative">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-yellow-400/10 blur-[100px]"></div>
<div className="absolute top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[80px]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
<p className="font-medium text-sm text-slate-700">Top Rated Cleaning Company in City</p>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900">
                        Sparkling Clean <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Peace of Mind.</span>
</h1>
<p className="text-lg mb-8 leading-relaxed max-w-lg text-slate-600">
                        Experience the joy of coming home to a spotless space. Our vetted professionals deliver top-tier cleaning tailored to your lifestyle.
                    </p>

<div className="flex flex-col sm:flex-row gap-5 mb-10">
<div className="flex items-center gap-2.5 text-slate-700 font-medium text-sm">
<div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:leaf-linear" width="16"></iconify-icon>
</div>
                            Eco-friendly
                        </div>
<div className="flex items-center gap-2.5 text-slate-700 font-medium text-sm">
<div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
</div>
                            Vetted Staff
                        </div>
<div className="flex items-center gap-2.5 text-slate-700 font-medium text-sm">
<div className="w-7 h-7 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
                            24/7 Support
                        </div>
</div>

<div className="flex flex-wrap items-center gap-4 mb-12">
<a className="inline-flex items-center gap-2 text-base font-semibold px-8 py-4 rounded-xl hover:bg-yellow-500 transition-all shadow-sm group bg-yellow-400 text-slate-900" href="#">
                            Book Now
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center gap-3 text-base font-semibold px-8 py-4 rounded-xl transition-all group bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm" href="#">
<div className="flex items-center justify-center text-slate-400 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
                            Watch Video
                        </a>
</div>

<div className="flex items-center gap-4 pt-8 border-t border-slate-200">
<div className="flex -space-x-3">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-slate-50 flex items-center justify-center text-xs font-semibold text-slate-600">+2k</div>
</div>
<div className="text-sm">
<div className="flex text-yellow-400 mb-1">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="font-medium text-slate-900">4.9/5</span> from happy customers
                        </div>
</div>
</div>

<div className="relative hidden lg:block">

<div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
<img alt="Professional cleaner" className="w-full h-[600px] object-cover" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
</div>

<div className="absolute -bottom-8 -left-12 z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white w-64 h-48 hover:-translate-y-2 transition-transform duration-500">
<img alt="Clean surface" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="absolute top-16 -right-6 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition-transform duration-300">
<div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600">
<iconify-icon icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-0.5">Award Winning</p>
<p className="font-semibold tracking-tight text-slate-900">#1 Agency 2023</p>
</div>
</div>

<div className="absolute bottom-20 -right-6 z-20 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hover:-translate-y-1 transition-transform duration-300">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<div className="pr-2">
<p className="font-semibold tracking-tight text-slate-900">100% Safe</p>
<p className="text-xs text-slate-500">Products used</p>
</div>
</div>

<div className="absolute -z-10 top-8 -right-8 text-yellow-400/30">
<svg fill="none" height="120" viewbox="0 0 100 100" width="120">
<pattern height="20" id="dots-pattern" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<circle cx="2" cy="2" fill="currentColor" r="2"></circle>
</pattern>
<rect fill="url(#dots-pattern)" height="100" width="100"></rect>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<img alt="Cleaning window" className="w-4/5 rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<img alt="Cleaning plant" className="absolute bottom-[-10%] right-0 w-2/3 rounded-2xl shadow-xl border-8 border-white" src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>

<div className="absolute top-1/2 left-[-5%] p-6 rounded-2xl shadow-xl flex items-center gap-4 border bg-white border-slate-100">
<span className="text-4xl font-semibold tracking-tight text-slate-900">20+</span>
<span className="text-base font-medium leading-tight text-slate-600">Years<br/>Experience</span>
</div>
</div>

<div className="lg:pl-8 mt-12 lg:mt-0">
<p className="font-medium tracking-wide text-base uppercase mb-3 text-blue-600">About Us</p>
<h2 className="text-4xl font-semibold tracking-tight mb-6 text-slate-900">
                        Best Cleaning Services Provider Since 2001
                    </h2>
<p className="text-lg mb-8 leading-relaxed text-slate-600">
                        Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Tellus rutrum tellus pellentesque eu tincidunt tortor.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<i className="w-6 h-6 shrink-0 mt-0.5 text-slate-900" data-lucide="check-square" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700">Loaded with Professional and Honest Cleaners</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 shrink-0 mt-0.5 text-slate-900" data-lucide="check-square" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700">Provide the Finest Cleaning Supplies</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 shrink-0 mt-0.5 text-slate-900" data-lucide="check-square" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700">100% Satisfaction Cleaning Service</span>
</li>
<li className="flex items-start gap-3">
<i className="w-6 h-6 shrink-0 mt-0.5 text-slate-900" data-lucide="check-square" strokeWidth="1.5"></i>
<span className="text-lg font-medium text-slate-700">We are bonded and insured</span>
</li>
</ul>
<a className="inline-flex items-center justify-center text-lg font-semibold px-8 py-3.5 rounded-lg hover:bg-yellow-500 transition-colors shadow-sm bg-yellow-400 text-slate-900" href="#">
                        More About Us
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="font-medium tracking-wide text-base uppercase mb-3 text-blue-600">What We Do</p>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-slate-900">
                    We Offer Different Services to Clean Your Area
                </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="p-10 rounded-2xl shadow-sm border hover:shadow-md transition-shadow text-center group bg-white border-slate-100">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform bg-blue-50 text-blue-600">
<i className="w-8 h-8" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900">House Cleaning</h3>
<p className="text-lg text-slate-600">Ut venenatis tellus in metus vulputate eu nunc id cursus metus aliquam</p>
</div>

<div className="p-10 rounded-2xl shadow-sm border hover:shadow-md transition-shadow text-center group bg-white border-slate-100">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform bg-blue-50 text-blue-600">
<i className="w-8 h-8" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900">Office Cleaning</h3>
<p className="text-lg text-slate-600">Et pharetra pharetra massa massa ultricies. Euismod in pellentesque</p>
</div>

<div className="p-10 rounded-2xl shadow-sm border hover:shadow-md transition-shadow text-center group bg-white border-slate-100">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform bg-blue-50 text-blue-600">
<i className="w-8 h-8" data-lucide="sofa" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900">Furniture Cleaning</h3>
<p className="text-lg text-slate-600">Ut venenatis tellus in metus vulputate eu nunc id cursus metus aliquam</p>
</div>

<div className="p-10 rounded-2xl shadow-sm border hover:shadow-md transition-shadow text-center group bg-white border-slate-100">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform bg-blue-50 text-blue-600">
<i className="w-8 h-8" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900">Construction Cleaning</h3>
<p className="text-lg text-slate-600">Ut venenatis tellus in metus vulputate eu nunc id cursus metus aliquam</p>
</div>

<div className="p-10 rounded-2xl shadow-sm border hover:shadow-md transition-shadow text-center group bg-white border-slate-100">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform bg-blue-50 text-blue-600">
<i className="w-8 h-8" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900">Carpet Cleaning</h3>
<p className="text-lg text-slate-600">Ut venenatis tellus in metus vulputate eu nunc id cursus metus aliquam</p>
</div>

<div className="p-10 rounded-2xl shadow-sm border hover:shadow-md transition-shadow text-center group bg-white border-slate-100">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 group-hover:scale-110 transition-transform bg-blue-50 text-blue-600">
<i className="w-8 h-8" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900">Glass Cleaning</h3>
<p className="text-lg text-slate-600">Ut venenatis tellus in metus vulputate eu nunc id cursus metus aliquam</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<p className="font-medium tracking-wide text-base uppercase mb-3 text-blue-600">Why Choose Us</p>
<h2 className="text-4xl font-semibold tracking-tight mb-12 max-w-md text-slate-900">
                        Why Choose Our Service Provider
                    </h2>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative bg-blue-50 text-slate-900">
<i className="w-6 h-6 z-10" data-lucide="shield-check" strokeWidth="1.5"></i>
<div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-400"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-slate-900">Satisfaction Guaranteed</h3>
<p className="text-base text-slate-600">Integer vitae justo eget magna fermentum iaculis eu. Laoreet non</p>
</div>
<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative bg-blue-50 text-slate-900">
<i className="w-6 h-6 z-10" data-lucide="users" strokeWidth="1.5"></i>
<div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-400"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-slate-900">Screened &amp; Trained Team</h3>
<p className="text-base text-slate-600">Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec</p>
</div>
<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative bg-blue-50 text-slate-900">
<i className="w-6 h-6 z-10" data-lucide="clock" strokeWidth="1.5"></i>
<div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-400"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-slate-900">Flexible Arrival Time</h3>
<p className="text-base text-slate-600">Egestas egestas fringilla phasellus faucibus scelerisque.</p>
</div>
<div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative bg-blue-50 text-slate-900">
<i className="w-6 h-6 z-10" data-lucide="target" strokeWidth="1.5"></i>
<div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-yellow-400"></div>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2 text-slate-900">Competetive Pricing</h3>
<p className="text-base text-slate-600">Nisi nisi scelerisque eu ultrices vitae auctor eu. In nisl nisi</p>
</div>
</div>
</div>

<div className="relative">
<img alt="Cleaner working" className="w-full rounded-2xl shadow-xl object-cover h-[600px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-12 left-[-10%] p-6 rounded-2xl shadow-xl border text-center w-48 bg-slate-900 border-slate-800">
<span className="block text-3xl font-semibold tracking-tight mb-1 text-white">500k++</span>
<span className="text-base font-medium text-slate-300">Customers</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="font-medium tracking-wide text-base uppercase mb-3 text-yellow-400">Our Team</p>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-white">
                    Our Expert Team
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-12">

<div className="group rounded-2xl overflow-hidden shadow-lg bg-white">
<div className="relative h-80 overflow-hidden">
<img alt="Adam Leon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 bg-slate-900/40">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
</div>
</div>
<div className="p-6 text-center">
<h3 className="text-2xl font-semibold tracking-tight mb-1 text-slate-900">Adam Leon</h3>
<p className="text-lg text-slate-500">Carpet Cleaning</p>
</div>
</div>

<div className="group rounded-2xl overflow-hidden shadow-lg bg-white">
<div className="relative h-80 overflow-hidden">
<img alt="Shafani Mona" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 bg-slate-900/40">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
</div>
</div>
<div className="p-6 text-center">
<h3 className="text-2xl font-semibold tracking-tight mb-1 text-slate-900">Shafani Mona</h3>
<p className="text-lg text-slate-500">House Cleaning</p>
</div>
</div>

<div className="group rounded-2xl overflow-hidden shadow-lg bg-white">
<div className="relative h-80 overflow-hidden">
<img alt="Han Lucky" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 bg-slate-900/40">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
</div>
</div>
<div className="p-6 text-center">
<h3 className="text-2xl font-semibold tracking-tight mb-1 text-slate-900">Han Lucky</h3>
<p className="text-lg text-slate-500">Furniture Cleaning</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center text-lg font-semibold px-8 py-3.5 rounded-lg hover:bg-yellow-500 transition-colors shadow-sm bg-yellow-400 text-slate-900" href="#">
                    More Team
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<p className="font-medium tracking-wide text-base uppercase mb-3 text-blue-600">How We Work</p>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-slate-900">
                    Puresh Working Process
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 border-t-2 border-dashed z-0 border-slate-200"></div>

<div className="text-center relative z-10">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-md">
<img alt="Consultation" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold shadow-md border-4 bg-yellow-400 text-slate-900 border-white">
                            1
                        </div>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 mt-10 text-slate-900">Choose a Cleaning Plan</h3>
<p className="text-lg leading-relaxed px-4 text-slate-600">Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper.</p>
</div>

<div className="text-center relative z-10">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-md">
<img alt="Cleaning" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold shadow-md border-4 bg-yellow-400 text-slate-900 border-white">
                            2
                        </div>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 mt-10 text-slate-900">We Clean</h3>
<p className="text-lg leading-relaxed px-4 text-slate-600">Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper</p>
</div>

<div className="text-center relative z-10">
<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 shadow-md">
<img alt="Clean Room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-xl font-semibold shadow-md border-4 bg-yellow-400 text-slate-900 border-white">
                            3
                        </div>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 mt-10 text-slate-900">Back to comfortable</h3>
<p className="text-lg leading-relaxed px-4 text-slate-600">Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="font-medium tracking-wide text-base uppercase mb-3 text-blue-600">Price</p>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-slate-900">
                    We Offer Best Price to Help You
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 items-center">

<div className="rounded-2xl overflow-hidden shadow-sm border flex flex-col h-full bg-white border-slate-100">
<div className="text-center py-10 px-6 rounded-b-[2rem] mx-2 mt-2 bg-slate-900">
<h3 className="text-2xl font-semibold tracking-tight mb-2 text-white">Basic</h3>
<div className="flex items-start justify-center text-white">
<span className="text-xl mt-2 mr-1">$</span>
<span className="text-6xl font-semibold tracking-tight">45</span>
</div>
<span className="text-base mt-1 block text-slate-400">/Visit</span>
</div>
<div className="p-8 flex-grow flex flex-col">
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check" strokeWidth="2"></i> Egestas sed tempus urna
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check" strokeWidth="2"></i> Turpis egestas sed tempus
                            </li>
<li className="flex items-center gap-3 text-lg line-through text-slate-400 decoration-slate-300">
<i className="w-5 h-5 shrink-0 text-red-400" data-lucide="x" strokeWidth="2"></i> Egestas fringilla phasellus
                            </li>
<li className="flex items-center gap-3 text-lg line-through text-slate-400 decoration-slate-300">
<i className="w-5 h-5 shrink-0 text-red-400" data-lucide="x" strokeWidth="2"></i> Nunc mattis enim
                            </li>
</ul>
<button className="w-full text-lg font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors bg-yellow-400 text-slate-900">Select Plan</button>
</div>
</div>

<div className="rounded-2xl overflow-hidden shadow-xl border flex flex-col h-full transform md:-translate-y-4 relative z-10 bg-white border-slate-100">
<div className="text-center py-12 px-6 rounded-b-[2rem] mx-2 mt-2 bg-slate-900">
<h3 className="text-2xl font-semibold tracking-tight mb-2 text-white">Standard</h3>
<div className="flex items-start justify-center text-white">
<span className="text-xl mt-2 mr-1">$</span>
<span className="text-6xl font-semibold tracking-tight">78</span>
</div>
<span className="text-base mt-1 block text-slate-400">/Visit</span>
</div>
<div className="p-8 flex-grow flex flex-col">
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check" strokeWidth="2"></i> Egestas sed tempus urna
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check" strokeWidth="2"></i> Turpis egestas sed tempus
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check" strokeWidth="2"></i> Egestas fringilla phasellus
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check" strokeWidth="2"></i> Nunc mattis enim
                            </li>
</ul>
<button className="w-full text-lg font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors bg-yellow-400 text-slate-900">Select Plan</button>
</div>
</div>

<div className="rounded-2xl overflow-hidden shadow-sm border flex flex-col h-full bg-white border-slate-100">
<div className="text-center py-10 px-6 rounded-b-[2rem] mx-2 mt-2 bg-slate-900">
<h3 className="text-2xl font-semibold tracking-tight mb-2 text-white">Super</h3>
<div className="flex items-start justify-center text-white">
<span className="text-xl mt-2 mr-1">$</span>
<span className="text-6xl font-semibold tracking-tight">98</span>
</div>
<span className="text-base mt-1 block text-slate-400">/Visit</span>
</div>
<div className="p-8 flex-grow flex flex-col">
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check" strokeWidth="2"></i> Egestas sed tempus urna
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check" strokeWidth="2"></i> Turpis egestas sed tempus
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check" strokeWidth="2"></i> Egestas fringilla phasellus
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-600">
<i className="w-5 h-5 text-green-500 shrink-0" data-lucide="check" strokeWidth="2"></i> Nunc mattis enim
                            </li>
</ul>
<button className="w-full text-lg font-semibold py-3 rounded-lg hover:bg-yellow-500 transition-colors bg-yellow-400 text-slate-900">Select Plan</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<p className="font-medium tracking-wide text-base uppercase mb-3 text-blue-600">Testimonial</p>
<h2 className="text-4xl font-semibold tracking-tight max-w-md text-slate-900">
                        What Says Our Happy Costumer
                    </h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors border-slate-200 text-slate-400 hover:text-slate-900 hover:border-slate-900">
<i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors border-slate-900 bg-slate-900 text-white hover:bg-slate-800">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-10 rounded-2xl relative bg-slate-50">
<i className="w-20 h-20 absolute top-10 right-10 opacity-50 text-slate-200" data-lucide="quote" strokeWidth="1"></i>
<div className="flex items-center gap-4 mb-6">
<img alt="Roseanne" className="w-16 h-16 rounded-full object-cover border-2 shadow-sm border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<h4 className="text-xl font-semibold tracking-tight text-slate-900">Roseanne</h4>
<p className="text-sm text-slate-500 mb-1">Customer</p>
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="2"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="2"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="2"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="2"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="2"></i>
</div>
</div>
</div>
<p className="text-lg leading-relaxed relative z-10 text-slate-600">
                        "Parturient montes nascetur ridiculus mus mauris. Purus ut faucibus pulvinar elementum integer enim sed faucibus turpis in eu."
                    </p>
</div>

<div className="p-10 rounded-2xl shadow-lg border relative bg-white border-slate-100">
<i className="w-20 h-20 absolute top-10 right-10 text-slate-100" data-lucide="quote" strokeWidth="1"></i>
<div className="flex items-center gap-4 mb-6">
<img alt="Patrick Herman" className="w-16 h-16 rounded-full object-cover border-2 shadow-sm border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<h4 className="text-xl font-semibold tracking-tight text-slate-900">Patrick Herman</h4>
<p className="text-sm text-slate-500 mb-1">Customer &amp; CEO</p>
<div className="flex text-yellow-400">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="2"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="2"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="2"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="2"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="2"></i>
</div>
</div>
</div>
<p className="text-lg leading-relaxed relative z-10 text-slate-600">
                        "Fermentum dui faucibus in ornare quam viverra orci sagittis. Malesuada fames ac turpis egestas. Morbi tristique senectus et netus et malesuada."
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<p className="font-medium tracking-wide text-base uppercase mb-3 text-blue-600">Blog</p>
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-slate-900">
                    Our Latest News From Blog
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-12">

<article className="rounded-2xl overflow-hidden shadow-sm border group bg-white border-slate-100">
<div className="relative h-60 overflow-hidden">
<img alt="Plant Cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i> June 12, 2021</span>
<span className="text-slate-300">|</span>
<span className="font-medium text-slate-900">Nature</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 leading-snug group-hover:text-blue-600 transition-colors text-slate-900">
<a href="#">How to Prepare for the Plant Cleaning</a>
</h3>
<p className="text-base mb-6 line-clamp-3 text-slate-600">
                            Est ante in nibh mauris cursus mattis molestie a. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.
                        </p>
<a className="inline-flex items-center gap-2 font-semibold transition-colors text-slate-900 hover:text-blue-600" href="#">
                            Read More...
                        </a>
</div>
</article>

<article className="rounded-2xl overflow-hidden shadow-sm border group bg-white border-slate-100">
<div className="relative h-60 overflow-hidden">
<img alt="Reasons Why" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i> June 11, 2021</span>
<span className="text-slate-300">|</span>
<span className="font-medium text-slate-900">Clean &amp; Service</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 leading-snug group-hover:text-blue-600 transition-colors text-slate-900">
<a href="#">Reasons Why You Should Hire a Cleaning Service</a>
</h3>
<p className="text-base mb-6 line-clamp-3 text-slate-600">
                            Velit egestas dui id ornare arcu odio ut mi sit amet mauris commodo quis imperdiet massa. Integer quis auctor elit sed.
                        </p>
<a className="inline-flex items-center gap-2 font-semibold transition-colors text-slate-900 hover:text-blue-600" href="#">
                            Read More...
                        </a>
</div>
</article>

<article className="rounded-2xl overflow-hidden shadow-sm border group bg-white border-slate-100">
<div className="relative h-60 overflow-hidden">
<img alt="Tile Cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i> June 09, 2021</span>
<span className="text-slate-300">|</span>
<span className="font-medium text-slate-900">Clean &amp; Service</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 leading-snug group-hover:text-blue-600 transition-colors text-slate-900">
<a href="#">Tile and Grout Cleaning Maintenance Tips</a>
</h3>
<p className="text-base mb-6 line-clamp-3 text-slate-600">
                            Tellus in hac habitasse platea dictumst vestibulum rhoncus. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus.
                        </p>
<a className="inline-flex items-center gap-2 font-semibold transition-colors text-slate-900 hover:text-blue-600" href="#">
                            Read More...
                        </a>
</div>
</article>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center text-lg font-semibold px-8 py-3.5 rounded-lg hover:bg-yellow-500 transition-colors shadow-sm bg-yellow-400 text-slate-900" href="#">
                    View More Blog
                </a>
</div>
</div>
</section>

<footer className="pt-20 pb-10 bg-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="relative flex items-center justify-center w-8 h-8">
<div className="absolute w-6 h-6 rounded-full left-0 opacity-90 bg-white"></div>
<div className="absolute w-6 h-6 rounded-full right-0 mix-blend-screen opacity-90 bg-yellow-400"></div>
</div>
<span className="text-2xl font-semibold tracking-tight">Puresh</span>
</div>
<p className="text-base mb-8 leading-relaxed text-slate-400">
                        Est ante in nibh mauris cursus mattis molestie a tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-yellow-400 text-slate-900 hover:bg-white" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>

<div>
<h4 className="text-xl font-semibold tracking-tight mb-6 text-white">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-base transition-colors text-slate-400 hover:text-yellow-400" href="#">About Us</a></li>
<li><a className="text-base transition-colors text-slate-400 hover:text-yellow-400" href="#">Service</a></li>
<li><a className="text-base transition-colors text-slate-400 hover:text-yellow-400" href="#">Project</a></li>
<li><a className="text-base transition-colors text-slate-400 hover:text-yellow-400" href="#">Pricing &amp; Rates</a></li>
</ul>
</div>

<div>
<h4 className="text-xl font-semibold tracking-tight mb-6 text-white">Service</h4>
<ul className="space-y-4">
<li><a className="text-base transition-colors text-slate-400 hover:text-yellow-400" href="#">House Cleaning</a></li>
<li><a className="text-base transition-colors text-slate-400 hover:text-yellow-400" href="#">Office Cleaning</a></li>
<li><a className="text-base transition-colors text-slate-400 hover:text-yellow-400" href="#">Furniture Cleaning</a></li>
<li><a className="text-base transition-colors text-slate-400 hover:text-yellow-400" href="#">Construction Cleaning</a></li>
</ul>
</div>

<div>
<h4 className="text-xl font-semibold tracking-tight mb-6 text-white">Newsletter</h4>
<p className="text-base mb-6 leading-relaxed text-slate-400">
                        Est ante in nibh mauris cursus mattis molestie a tincidunt nunc pulvinar sapien.
                    </p>
<form className="flex">
<input className="w-full px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base bg-white text-slate-900" placeholder="Enter your email..." type="email"/>
<button className="px-4 py-3 rounded-r-lg hover:bg-yellow-500 transition-colors flex-shrink-0 bg-yellow-400 text-slate-900" type="submit">
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-slate-800">
<p className="text-sm text-slate-500">Copyright © 2023 Puresh. All Rights Reserved</p>
<div className="flex gap-6">
<a className="text-sm text-slate-500 transition-colors hover:text-white" href="#">Privacy Policy</a>
<a className="text-sm text-slate-500 transition-colors hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
