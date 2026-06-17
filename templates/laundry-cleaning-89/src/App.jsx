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
colors: {
brand: {
blue: '#0ea5e9',
darkblue: '#0284c7',
orange: '#fb923c',
light: '#f8fafc',
}
},
fontSize: {
'xxs': '0.65rem',
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
      

<nav className="sticky bg-slate-50/80 z-[60] border-slate-100 border-b pb-4 top-0 backdrop-blur-md">
<div className="container flex h-30 mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center">
<img alt="Fairy Dusted Cleaning Services" className="w-auto h-[100px] object-contain" src="https://cdn.shopify.com/s/files/1/0740/2169/9875/files/logo-small.png?v=1770939125"/>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="text-brand-orange" href="#">Home</a>
<a className="hover:text-brand-blue transition-colors" href="#">Services</a>
<a className="hover:text-brand-blue transition-colors" href="#">Pricing</a>
<a className="hover:text-brand-blue transition-colors" href="#">Find Location</a>
<a className="hover:text-brand-blue transition-colors" href="#">Blog</a>
</div>
<button className="bg-brand-blue hover:bg-brand-darkblue text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-brand-blue/20">
                Contact Us
            </button>
</div>
</nav>

<section className="lg:pt-20 overflow-hidden pt-12 pb-20 relative">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/4"></div>
<div className="container grid lg:grid-cols-2 mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="max-w-xl z-10 order-2 lg:order-1">
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tighter mb-8 drop-shadow-sm">
    Simplify Your Life with <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-sky-400 inline-block">Fairy Dusted</span> <br/>
<span className="text-brand-orange">Cleaning Service</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-md">
                    For over 5 years, we have been dedicated to providing exceptional customer service and top quality cleaning and laundry services.
                </p>
<div className="flex items-center gap-6 mb-12">
<button className="bg-brand-blue text-white pl-6 pr-8 py-3.5 rounded-full text-base font-medium flex items-center gap-2 shadow-xl shadow-brand-blue/20 hover:translate-y-[-2px] transition-transform">
<iconify-icon className="stroke-[1.5]" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
                        Get Started
                    </button>
<button className="w-12 h-12 rounded-full border border-brand-orange/30 text-brand-orange flex items-center justify-center hover:bg-brand-orange/10 transition-colors">
<iconify-icon height="20" icon="solar:play-bold" width="20"></iconify-icon>
</button>
<span className="text-slate-400 text-sm hidden sm:inline-block relative">
<svg className="absolute -top-6 -right-6 w-12 h-12 text-brand-orange opacity-50" fill="none" stroke="currentColor" viewbox="0 0 100 100">
<path d="M10,80 Q50,10 90,80" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
</span>
</div>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-12 h-12 rounded-full border-4 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div className="">
<div className="flex text-brand-orange mb-0.5 gap-0.5">
<iconify-icon className="" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon className="" height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-600"><span className="font-semibold text-slate-900">4.8</span> (150k Reviews)</p>
</div>
</div>
</div>

<div className="relative order-1 lg:order-2 h-[500px] flex items-center justify-center">

<div className="lg:left-0 z-20 animate-float-fast bg-white/90 border-sky-100 border rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute top-10 left-4 shadow-lg backdrop-blur-sm">
<iconify-icon className="text-brand-orange" height="32" icon="solar:t-shirt-linear" strokeWidth="1.5" style={{color: 'rgb(251, 146, 60)'}} width="32"></iconify-icon>
</div>
<div className="absolute bottom-12 right-4 lg:right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-sky-100 z-20 animate-float-medium">
<iconify-icon className="text-brand-blue" height="32" icon="solar:washing-machine-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="absolute top-1/3 right-0 lg:-right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl shadow-lg border border-sky-100 z-20 animate-float-slow">
<iconify-icon className="text-yellow-500" height="28" icon="solar:sparkles-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>

<div className="relative z-10 w-full h-full flex items-center justify-center">
<img alt="Fairy Magic Laundry" className="object-contain drop-shadow-2xl" src="https://cdn.shopify.com/s/files/1/0740/2169/9875/files/fairy-banner.png?v=1770939125"/>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-sky-200 via-sky-100 to-transparent rounded-full blur-3xl -z-10 scale-90 translate-y-10 opacity-50"></div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="container mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    We are here to make our customers smile with <span className="text-brand-orange">our services</span>
</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-3xl overflow-hidden h-72">
<img alt="Wash" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-100">
<div className="flex items-start gap-4">
<div className="bg-sky-50 p-3 rounded-xl text-brand-blue">
<iconify-icon height="24" icon="solar:water-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 text-lg">Wash and Fold</h3>
<a className="text-sm text-brand-orange mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                    View Details <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden h-72">
<img alt="Dry Clean" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-100">
<div className="flex items-start gap-4">
<div className="bg-orange-50 p-3 rounded-xl text-brand-orange">
<iconify-icon height="24" icon="solar:t-shirt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 text-lg">Dry Cleaning</h3>
<a className="text-sm text-brand-orange mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                    View Details <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden h-72">
<img alt="Iron" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-100">
<div className="flex items-start gap-4">
<div className="bg-sky-50 p-3 rounded-xl text-brand-blue">
<iconify-icon height="24" icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 text-lg">Iron Clothes</h3>
<a className="text-sm text-brand-orange mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                    View Details <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden h-72">
<img alt="Stain" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1567113463300-102a7eb3cb26?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-100">
<div className="flex items-start gap-4">
<div className="bg-orange-50 p-3 rounded-xl text-brand-orange">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 text-lg">Stain Removal</h3>
<a className="text-sm text-brand-orange mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                    View Details <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden h-72">
<img alt="Sewing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550963295-019d8a8a61c5?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-100">
<div className="flex items-start gap-4">
<div className="bg-sky-50 p-3 rounded-xl text-brand-blue">
<iconify-icon height="24" icon="solar:scissors-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 text-lg">Clothe Sewing</h3>
<a className="text-sm text-brand-orange mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                    View Details <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden h-72">
<img alt="Bedding" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-slate-100">
<div className="flex items-start gap-4">
<div className="bg-orange-50 p-3 rounded-xl text-brand-orange">
<iconify-icon height="24" icon="solar:bed-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-slate-900 text-lg">Bedding Cleaning</h3>
<a className="text-sm text-brand-orange mt-1 inline-flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                    View Details <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="container mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">
                    Why <span className="text-brand-orange">Choose Us</span>
</h2>
<p className="text-slate-500 max-w-lg mx-auto">At QuickFold, we understand that you have options when it comes to laundry services.</p>
</div>

<div className="relative max-w-4xl mx-auto h-[600px] hidden md:block">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 z-20">
<img alt="Iron and Clothes" className="w-full h-full object-contain drop-shadow-2xl" src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&amp;auto=format&amp;fit=crop&amp;q=80"/>
</div>

<div className="absolute top-2/3 left-1/2 -translate-x-1/2 translate-y-24 z-30">
<button className="bg-brand-orange text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-orange-500 transition-colors">Order Now</button>
</div>


<div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
<div className="w-28 h-28 rounded-full bg-orange-50 border-2 border-brand-orange/20 flex items-center justify-center text-center p-2 shadow-sm">
<span className="text-xs font-semibold text-slate-800">Exceptional<br/>Quality</span>
</div>
<div className="h-16 w-px border-l-2 border-dashed border-orange-200"></div>
</div>

<div className="absolute top-12 right-0 w-64 p-4 bg-orange-200 rounded-2xl rounded-bl-none text-xs font-medium text-slate-800 shadow-md">
                    More free time, less laundry stress. Pickup and delivery available.
                </div>

<div className="absolute top-1/3 right-10 flex items-center gap-4">
<div className="w-24 h-px border-t-2 border-dashed border-orange-200"></div>
<div className="w-24 h-24 rounded-full bg-brand-orange text-white flex items-center justify-center text-center p-2 shadow-lg">
<span className="text-xs font-semibold">Convenience</span>
</div>
</div>

<div className="absolute bottom-1/3 right-4 flex items-center gap-4">
<div className="w-16 h-px border-t-2 border-dashed border-orange-200 rotate-12 origin-left"></div>
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center text-center p-2 shadow-md">
<span className="text-xs font-semibold text-slate-800">Personalized<br/>Care</span>
</div>
</div>

<div className="absolute bottom-10 right-20 flex flex-col items-center gap-4">
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center text-center p-2 shadow-md">
<span className="text-xs font-semibold text-slate-800">Transparent<br/>Pricing</span>
</div>
<div className="h-12 w-px border-l-2 border-dashed border-orange-200 rotate-12"></div>
</div>

<div className="absolute bottom-10 left-20 flex flex-col items-center gap-4">
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center text-center p-2 shadow-md">
<span className="text-xs font-semibold text-slate-800">Customer<br/>Satisfaction</span>
</div>
<div className="h-12 w-px border-l-2 border-dashed border-orange-200 -rotate-12"></div>
</div>

<div className="absolute top-1/3 left-10 flex items-center gap-4 flex-row-reverse">
<div className="w-16 h-px border-t-2 border-dashed border-orange-200"></div>
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center text-center p-2 shadow-md">
<span className="text-xs font-semibold text-slate-800">Expertise and<br/>Experience</span>
</div>
</div>

<div className="absolute bottom-1/3 left-4 flex items-center gap-4 flex-row-reverse">
<div className="w-16 h-px border-t-2 border-dashed border-orange-200 -rotate-12 origin-right"></div>
<div className="w-24 h-24 rounded-full bg-white border border-slate-100 flex items-center justify-center text-center p-2 shadow-md">
<span className="text-xs font-semibold text-slate-800">Timely Service</span>
</div>
</div>
</div>

<div className="md:hidden grid grid-cols-2 gap-4">
<div className="p-6 bg-white rounded-xl shadow-sm text-center">
<h3 className="font-semibold text-brand-orange mb-2">Quality</h3>
<p className="text-xs text-slate-500">Top notch materials used.</p>
</div>
<div className="p-6 bg-brand-orange text-white rounded-xl shadow-sm text-center">
<h3 className="font-semibold mb-2">Convenience</h3>
<p className="text-xs opacity-90">Pickup &amp; Delivery.</p>
</div>
<div className="p-6 bg-white rounded-xl shadow-sm text-center">
<h3 className="font-semibold text-slate-800 mb-2">Timely</h3>
<p className="text-xs text-slate-500">Always on schedule.</p>
</div>
<div className="p-6 bg-white rounded-xl shadow-sm text-center">
<h3 className="font-semibold text-slate-800 mb-2">Pricing</h3>
<p className="text-xs text-slate-500">Transparent costs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-blue">
<div className="container mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                    Our Customers <span className="text-brand-orange">Feedback</span>
</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 relative">

<button className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-blue z-10 hidden lg:flex">
<iconify-icon height="24" icon="solar:alt-arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-brand-blue z-10 hidden lg:flex">
<iconify-icon height="24" icon="solar:alt-arrow-right-linear" width="24"></iconify-icon>
</button>

<div className="bg-brand-darkblue rounded-2xl p-8 relative shadow-xl">
<span className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2 block">Service Quality</span>
<p className="leading-relaxed text-lg font-medium text-white mb-6">
                        "I can't thank QuickFold enough for their impeccable service. My clothes have never looked better, and the convenience is unbeatable!"
                    </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Esther" className="w-12 h-12 rounded-full border-2 border-brand-orange" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="text-white font-semibold">Esther Miles</h4>
<div className="flex text-brand-orange text-xs mt-1 gap-0.5">
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
</div>
<iconify-icon className="text-white/20 rotate-180" height="40" icon="solar:quote-up-linear" width="40"></iconify-icon>
</div>
</div>

<div className="bg-brand-darkblue rounded-2xl p-8 relative shadow-xl">
<span className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2 block">Service Quality</span>
<p className="text-white text-lg font-medium mb-6 leading-relaxed">
                        "I've been using QuickFold for months now, and I'm consistently impressed by their attention to detail and commitment to satisfaction."
                    </p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Kristin" className="w-12 h-12 rounded-full border-2 border-brand-orange" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop"/>
<div>
<h4 className="text-white font-semibold">Kristin Cooper</h4>
<div className="flex text-brand-orange text-xs mt-1 gap-0.5">
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
</div>
</div>
</div>
<iconify-icon className="text-white/20 rotate-180" height="40" icon="solar:quote-up-linear" width="40"></iconify-icon>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-8">
<div className="w-2 h-2 rounded-full bg-white/40"></div>
<div className="w-2 h-2 rounded-full bg-white"></div>
<div className="w-2 h-2 rounded-full bg-white/40"></div>
</div>
</div>
</section>

<section className="py-24 bg-sky-50 overflow-hidden">
<div className="container mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
                    Our Working <span className="text-brand-orange">Process</span>
</h2>
</div>
<div className="flex flex-col md:flex-row justify-between relative gap-8">

<div className="flex flex-col items-center text-center relative z-10 flex-1">
<div className="w-32 h-32 rounded-full bg-sky-200 flex items-center justify-center mb-6 relative border-4 border-white shadow-xl">
<div className="absolute inset-0 rounded-full border border-sky-300 scale-110 border-dashed"></div>
<iconify-icon className="text-brand-blue" height="48" icon="solar:calendar-linear" strokeWidth="1.5" width="48"></iconify-icon>
<div className="absolute bottom-2 right-2 bg-brand-orange rounded-full p-1.5 border-2 border-white">
<span className="block w-2 h-2 bg-white rounded-full"></span>
</div>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Schedule Pickup</h3>
<p className="text-sm text-slate-500 max-w-[200px]">Book online or by phone, choose your time.</p>
</div>

<div className="hidden md:block absolute top-16 left-[20%] w-[15%] h-12 z-0">
<svg className="w-full h-full text-brand-orange/40" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,20 Q50,0 100,20" fill="none" marker-end="url(#arrowhead)" stroke="currentColor" stroke-dasharray="6 4" strokeWidth="2"></path>
</svg>
</div>

<div className="flex flex-col items-center text-center relative z-10 flex-1">
<div className="w-32 h-32 rounded-full bg-sky-200 flex items-center justify-center mb-6 relative border-4 border-white shadow-xl">
<div className="absolute inset-0 rounded-full border border-sky-300 scale-110 border-dashed"></div>
<iconify-icon className="text-brand-blue" height="48" icon="solar:box-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Laundry Collection</h3>
<p className="text-sm text-slate-500 max-w-[200px]">Our team collects your bagged laundry at your doorstep.</p>
</div>

<div className="hidden md:block absolute top-16 left-[45%] w-[15%] h-12 z-0">
<svg className="w-full h-full text-brand-orange/40" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,20 Q50,40 100,20" fill="none" stroke="currentColor" stroke-dasharray="6 4" strokeWidth="2"></path>
</svg>
</div>

<div className="flex flex-col items-center text-center relative z-10 flex-1">
<div className="w-32 h-32 rounded-full bg-sky-200 flex items-center justify-center mb-6 relative border-4 border-white shadow-xl">
<div className="absolute inset-0 rounded-full border border-sky-300 scale-110 border-dashed"></div>
<iconify-icon className="text-brand-blue" height="48" icon="solar:t-shirt-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Expert Cleaning</h3>
<p className="text-sm text-slate-500 max-w-[200px]">We use top tier techniques and detergents.</p>
</div>

<div className="hidden md:block absolute top-16 left-[70%] w-[15%] h-12 z-0">
<svg className="w-full h-full text-brand-orange/40" preserveaspectratio="none" viewbox="0 0 100 40">
<path d="M0,20 Q50,0 100,20" fill="none" stroke="currentColor" stroke-dasharray="6 4" strokeWidth="2"></path>
</svg>
</div>

<div className="flex flex-col items-center text-center relative z-10 flex-1">
<div className="w-32 h-32 rounded-full bg-sky-200 flex items-center justify-center mb-6 relative border-4 border-white shadow-xl">
<div className="absolute inset-0 rounded-full border border-sky-300 scale-110 border-dashed"></div>
<iconify-icon className="text-brand-blue" height="48" icon="solar:delivery-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h3 className="font-semibold text-lg text-slate-900 mb-2">Convenient Delivery</h3>
<p className="text-sm text-slate-500 max-w-[200px]">We deliver neatly folded laundry on time.</p>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="container mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
                    Lets <span className="text-brand-orange">Talk</span> With Us
                </h2>
</div>
<div className="flex flex-col lg:flex-row shadow-2xl rounded-3xl overflow-hidden max-w-6xl mx-auto">

<div className="bg-brand-blue p-12 lg:w-1/3 text-white relative overflow-hidden flex flex-col justify-between">
<div className="relative z-10">
<h3 className="text-2xl font-semibold mb-2">Contact Information</h3>
<p className="text-sky-100 text-sm mb-12">Fill up the form and our Team will get back to you within 24 hours.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<iconify-icon height="20" icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">+1 (828) 325 - 4480</span>
</div>
<div className="flex items-center gap-4">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">hello.laundry@quickfold.com</span>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="mt-1" height="20" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm">69853 Harvey Shoals Apt. 358, Rosenbaumborough, New Jersey, USA.</span>
</div>
</div>
</div>
<div className="relative z-10 flex gap-4 mt-12">
<a className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition" href="#"><iconify-icon height="20" icon="ri:facebook-fill" width="20"></iconify-icon></a>
<a className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition" href="#"><iconify-icon height="20" icon="ri:instagram-line" width="20"></iconify-icon></a>
<a className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition" href="#"><iconify-icon height="20" icon="ri:linkedin-fill" width="20"></iconify-icon></a>
<a className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition" href="#"><iconify-icon height="20" icon="ri:twitter-x-line" width="20"></iconify-icon></a>
</div>

<div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-brand-orange z-0"></div>
<div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white/10 z-0"></div>
</div>

<div className="bg-white p-12 lg:w-2/3">
<form className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-2">Name</label>
<input className="focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all text-sm bg-slate-50 w-full border-slate-200 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Your full name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-2">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" placeholder="Your email" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-2">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" placeholder="Enter your number" type="tel"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-2">Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all" placeholder="Enter your full address" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-slate-700 mb-2">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 focus:border-brand-blue transition-all resize-none" placeholder="Enter your message" rows="4"></textarea>
</div>
<div>
<button className="bg-brand-blue hover:bg-brand-darkblue text-white px-8 py-3 rounded-full text-sm font-medium transition-colors shadow-lg shadow-brand-blue/20" type="submit">
                                Send Message
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sky-50">
<div className="container mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">
                    Read Our <span className="text-brand-orange">Latest News</span>
</h2>
<button className="bg-brand-blue text-white px-6 py-2 rounded-full text-xs font-medium hover:bg-brand-darkblue transition-colors">View All Blogs</button>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
<div className="flex justify-between text-xxs text-slate-400 mb-4 px-1">
<span>Friday, March 15, 2024</span>
<span>2 Min Read</span>
</div>
<img alt="Blog" className="w-full h-48 object-cover rounded-xl mb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<span className="text-xs text-brand-orange border border-brand-orange/20 px-2 py-1 rounded-full bg-orange-50">Laundry</span>
<h3 className="font-semibold text-slate-900 mt-3 text-lg leading-tight">Essential Laundry Hacks Every Homeowner Should Know</h3>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
<div className="flex justify-between text-xxs text-slate-400 mb-4 px-1">
<span>Tuesday, March 12, 2024</span>
<span>8 Min Read</span>
</div>
<img alt="Blog" className="w-full h-48 object-cover rounded-xl mb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<span className="text-xs text-brand-orange border border-brand-orange/20 px-2 py-1 rounded-full bg-orange-50">Laundry</span>
<h3 className="font-semibold text-slate-900 mt-3 text-lg leading-tight">The Ultimate Guide to Removing Common Stain</h3>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
<div className="flex justify-between text-xxs text-slate-400 mb-4 px-1">
<span>Sunday, March 10, 2024</span>
<span>6 Min Read</span>
</div>
<img alt="Blog" className="w-full h-48 object-cover rounded-xl mb-4" src="https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=600&amp;q=80"/>
<span className="text-xs text-brand-orange border border-brand-orange/20 px-2 py-1 rounded-full bg-orange-50">Laundry</span>
<h3 className="font-semibold text-slate-900 mt-3 text-lg leading-tight">Efficient Laundry Sorting Techniques for Busy Families</h3>
</div>
</div>
</div>
</section>

<section className="bg-brand-blue relative overflow-hidden mt-12">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-2 items-center">
<div className="relative pt-12 lg:pt-0">
<img alt="Newsletter" className="z-10 lg:w-[120%] lg:h-[400px] lg:rounded-tr-[10rem] lg:-ml-20 w-full h-80 object-cover border-white rounded-tr-[5rem] border-t-8 border-r-8 relative" src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?w=800&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
<div className="py-16 px-6 lg:pl-16 text-white">
<h2 className="text-3xl lg:text-4xl font-semibold mb-4">Join Our Newsletter</h2>
<p className="text-sky-100 mb-8 max-w-md text-sm">Subscribe for news, promos, and laundry tips. Get exclusive offers in your inbox. Do not miss updates.</p>
<button className="bg-brand-orange hover:bg-orange-500 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors shadow-lg">
                        Subscribe Now
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-orange-50 pt-20 pb-10">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-brand-blue" height="24" icon="solar:layers-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-xl font-semibold text-slate-900">Quick<span className="text-brand-blue">Fold</span></span>
</div>
<p className="text-slate-500 text-xs leading-relaxed mb-6">
                        Laundry service providers offer professional laundering solutions to assist individuals and businesses in achieving optimal garment care and cleanliness.
                    </p>
<div className="mb-4">
<h4 className="text-sm font-semibold text-slate-900 mb-3">Follow Us</h4>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-brand-darkblue transition" href="#"><iconify-icon className="" height="16" icon="ri:facebook-fill" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-brand-darkblue transition" href="#"><iconify-icon className="" height="16" icon="ri:twitter-x-line" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-brand-darkblue transition" href="#"><iconify-icon className="" height="16" icon="ri:instagram-line" width="16"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center hover:bg-brand-darkblue transition" href="#"><iconify-icon className="" height="16" icon="ri:linkedin-fill" width="16"></iconify-icon></a>
</div>
</div>
</div>

<div className="">
<h4 className="text-slate-900 font-semibold mb-6">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className=""><a className="hover:text-brand-blue transition" href="#">About</a></li>
<li className=""><a className="hover:text-brand-blue transition" href="#">Contact</a></li>
<li className=""><a className="hover:text-brand-blue transition" href="#">Home</a></li>
<li className=""><a className="hover:text-brand-blue transition" href="#">Services</a></li>
<li className=""><a className="hover:text-brand-blue transition" href="#">Latest Posts</a></li>
</ul>
</div>

<div className="">
<h4 className="text-slate-900 font-semibold mb-6">Further Links</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-blue transition" href="#">Terms and Condition</a></li>
<li className=""><a className="hover:text-brand-blue transition" href="#">News</a></li>
<li><a className="hover:text-brand-blue transition" href="#">Recruitments</a></li>
<li><a className="hover:text-brand-blue transition" href="#">Privacy Policy</a></li>
</ul>
</div>

<div className="">
<h4 className="text-slate-900 font-semibold mb-6">Contact Info</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-blue" height="16" icon="solar:phone-calling-linear" width="16"></iconify-icon>
                            +1 (828) 325 - 4480
                        </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-blue" height="16" icon="solar:letter-linear" width="16"></iconify-icon>
                            hello.laundry@quickfold.com
                        </li>
<li className="flex items-start gap-3">
<iconify-icon className="text-brand-blue mt-1" height="16" icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="">69853 Harvey Shoals Apt. 358,<br/> Rosenbaumborough, New Jersey, USA</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 text-center">
<p className="text-xs text-slate-400">Copyright © 2024 QuickFold. All rights reserved</p>
</div></div></footer>
    </>
  );
}
