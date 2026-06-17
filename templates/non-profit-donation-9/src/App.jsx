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
400: '#fbbf24', // Amber 400
500: '#f59e0b', // Amber 500
900: '#1e293b', // Slate 900
}
}
}
}
}



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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
<div className="watermark-text text-[20vw] font-bold leading-none tracking-tighter opacity-100 select-none rotate-12">
            MTR
        </div>
</div>

<nav className="absolute w-full z-50 top-0 start-0 border-b border-white/10 bg-transparent">
<div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">

<div className="w-10 h-10 rounded-full border-2 border-brand-400 flex items-center justify-center text-brand-400 bg-white/5 backdrop-blur-sm">
<i className="w-5 h-5 fill-current" data-lucide="heart"></i>
</div>
<div>
<span className="block text-lg font-medium tracking-tight text-white leading-none">Make Them Right</span>
<span className="block text-xs text-white/70 tracking-wide font-normal mt-1">Foundation</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-white/90 hover:text-brand-400 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-white/90 hover:text-brand-400 transition-colors" href="#">About Us</a>
<a className="text-sm font-medium text-white/90 hover:text-brand-400 transition-colors" href="#items">Needs List</a>
<a className="text-sm font-medium text-white/90 hover:text-brand-400 transition-colors" href="#donate">Contact</a>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:block text-sm font-medium text-white/90">EN <i className="inline w-3 h-3 ml-1" data-lucide="chevron-down"></i></span>
<a className="w-10 h-10 rounded-full bg-brand-400 hover:bg-brand-500 text-white flex items-center justify-center transition-all shadow-lg shadow-brand-400/20" href="#donate">
<i className="w-5 h-5" data-lucide="search"></i>
</a>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Smiling children" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
<div className="inline-flex items-center gap-2 mb-6 fade-in-up">
<span className="h-px w-8 bg-brand-400"></span>
<span className="text-brand-400 font-medium tracking-wide uppercase text-sm">Kingdom Worship Trust</span>
<span className="h-px w-8 bg-brand-400"></span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 leading-[1.1] fade-in-up delay-100">
                Write into <br className="hidden md:block"/>
                the <span className="text-brand-400">Future.</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 mb-12 max-w-2xl mx-auto font-normal leading-relaxed fade-in-up delay-200">
                We are sourcing stationery, hygiene essentials, and support for those in need. Join our campaign to build a brighter tomorrow for Zimbabwe's youth.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5 fade-in-up delay-300">
<a className="min-w-[180px] px-8 py-4 border border-brand-400 text-brand-400 hover:bg-brand-400 hover:text-slate-900 rounded-full font-medium text-base transition-all duration-300" href="#donate">
                    Become a Volunteer
                </a>
<a className="min-w-[180px] px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-medium text-base transition-all duration-300" href="#donate">
                    Donate Now
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-100 cursor-pointer"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-40 hover:opacity-100 transition-opacity cursor-pointer"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white opacity-40 hover:opacity-100 transition-opacity cursor-pointer"></div>
</div>
</section>

<section className="bg-brand-400 py-20 relative z-20">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                We are a non-profit Charity &amp; NGO Organization
            </h2>

<div className="h-32"></div>
</div>
</section>

<section className="relative z-30 -mt-40 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-xl shadow-xl shadow-slate-200/50 text-center border-b-4 border-transparent hover:border-brand-400 transition-all group">
<div className="w-16 h-16 mx-auto mb-6 text-brand-400 group-hover:scale-110 transition-transform">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.15-.49 2.87 2.87 0 0 1 1.45 2.5"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Donation</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                        Every bar of soap and every pencil counts towards dignity and education.
                    </p>
<a className="text-sm font-medium text-slate-400 uppercase tracking-wider group-hover:text-brand-400 transition-colors" href="#items">View Items</a>
</div>

<div className="bg-white p-10 rounded-xl shadow-xl shadow-slate-200/50 text-center border-b-4 border-brand-400 hover:border-brand-400 transition-all group">
<div className="w-16 h-16 mx-auto mb-6 text-brand-400 group-hover:scale-110 transition-transform">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Fundraising</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                        Financial support allows us to purchase items in bulk and distribute them locally.
                    </p>
<a className="text-sm font-medium text-slate-400 uppercase tracking-wider group-hover:text-brand-400 transition-colors" href="#donate">Donate Cash</a>
</div>

<div className="bg-white p-10 rounded-xl shadow-xl shadow-slate-200/50 text-center border-b-4 border-transparent hover:border-brand-400 transition-all group">
<div className="w-16 h-16 mx-auto mb-6 text-brand-400 group-hover:scale-110 transition-transform">
<svg className="w-full h-full" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><circle cx="12" cy="10" r="2"></circle><line x1="8" x2="8" y1="2" y2="4"></line><line x1="16" x2="16" y1="2" y2="4"></line></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Volunteer</h3>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
                        Join our mission to source essential supplies for underprivileged communities.
                    </p>
<a className="text-sm font-medium text-slate-400 uppercase tracking-wider group-hover:text-brand-400 transition-colors" href="#contact">Join Us</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-400/20 rounded-full blur-2xl"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Volunteers" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1542810634-71277d95dc24?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="relative z-10">
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 mb-8 tracking-tight leading-tight">
                        Welcome to <span className="text-brand-400">MTR</span> Charity
                    </h2>
<p className="text-lg text-slate-500 mb-6 leading-relaxed">
                        We are confident to confirm that all members in our foundation are professionals in the charity space. It means that human resources experience in the field with consultant, organization events for the needy.
                    </p>
<p className="text-lg text-slate-500 mb-10 leading-relaxed">
                        Our long-term working experience effectively brings us achievement. Our mission is to provide the great result for children on time. Especially, if they have any questions relating to the foundation, please send us &amp; we will try our best.
                    </p>
<a className="inline-flex items-center justify-center px-8 py-4 bg-brand-400 text-white rounded-full font-medium text-lg hover:bg-brand-500 transition-all shadow-lg shadow-brand-400/30" href="#donate">
                        More About Us
                        <i className="w-5 h-5 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="items">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="text-brand-400 font-medium tracking-wider uppercase text-sm mb-2 block">Our Needs</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Items You Can Donate</h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    We accept physical donations for our campaign drive. 
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100">
<div className="w-14 h-14 rounded-full bg-brand-400/10 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-400 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="book-open"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Stationery</h3>
<p className="text-lg text-slate-500">Books, pens, pencils, rulers, and school supplies to help children write into the future.</p>
</div>

<div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100">
<div className="w-14 h-14 rounded-full bg-brand-400/10 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-400 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="droplets"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Hygiene Essentials</h3>
<p className="text-lg text-slate-500">Bathing soap, washing powder, and dishwashing liquid to maintain health and dignity.</p>
</div>

<div className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-slate-100">
<div className="w-14 h-14 rounded-full bg-brand-400/10 text-brand-400 flex items-center justify-center mb-6 group-hover:bg-brand-400 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="smile"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-4 tracking-tight">Personal Care</h3>
<p className="text-lg text-slate-500">Toothpaste, toothbrushes, and Vaseline. Small items that make a massive difference.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="donate">

<div className="absolute right-0 bottom-0 text-white/5 transform translate-y-1/4 translate-x-1/4 pointer-events-none">
<i className="w-96 h-96" data-lucide="heart-handshake"></i>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
                        Help us reach our goal
                    </h2>
<p className="text-xl text-slate-400 mb-10 leading-relaxed">
                        Your financial support allows us to purchase items in bulk and distribute them where they are needed most in Zimbabwe.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-brand-400" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm font-medium text-brand-400 uppercase tracking-wide mb-1">Contact for Donations</p>
<p className="text-xl text-white">+263 78 304 5269</p>
<p className="text-xl text-white">+263 77 590 0457</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-brand-400" data-lucide="mail"></i>
</div>
<div>
<p className="text-sm font-medium text-brand-400 uppercase tracking-wide mb-1">Email Us</p>
<a className="text-xl text-white hover:text-brand-400 transition-colors break-all" href="mailto:makethemrightfoundation@gmail.com">
                                    makethemrightfoundation@gmail.com
                                </a>
</div>
</div>
</div>
</div>

<div className="bg-brand-400 rounded-2xl p-10 text-slate-900 relative shadow-2xl">
<div className="flex justify-between items-start mb-10">
<div>
<p className="text-slate-800 text-sm font-semibold uppercase tracking-wider mb-2">Verified Merchant</p>
<h3 className="text-3xl font-bold tracking-tight">EcoCash</h3>
</div>
<i className="w-8 h-8 text-slate-800" data-lucide="smartphone"></i>
</div>
<div className="space-y-6">
<div>
<p className="text-sm font-medium text-slate-700 uppercase tracking-wider mb-1">Merchant Name</p>
<p className="text-xl font-semibold tracking-tight">Nyasha Munyengeterwa</p>
</div>
<div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm border border-slate-900/10">
<p className="text-sm font-medium text-slate-800 uppercase tracking-wider mb-2">Dial Code</p>
<p className="text-3xl md:text-4xl font-mono font-bold tracking-tight select-all">
                                +263 77 263 2522
                            </p>
</div>
</div>
<div className="mt-8 text-center pt-8 border-t border-slate-900/10">
<p className="text-sm font-medium text-slate-800">
                            All proceeds go directly to the Kingdom Worship Trust initiatives.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 border-t border-white/10 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-brand-400 flex items-center justify-center text-slate-900">
<i className="w-4 h-4 fill-current" data-lucide="heart"></i>
</div>
<span className="text-lg font-medium text-white">Make Them Right Foundation</span>
</div>
<p className="text-base text-slate-400">
                © 2024 Kingdom Worship Trust. Zimbabwe.
            </p>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-400 hover:text-slate-900 transition-all" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-400 hover:text-slate-900 transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-brand-400 hover:text-slate-900 transition-all" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
