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
purple: {
50: '#faf5ff',
100: '#f3e8ff',
200: '#e9d5ff',
300: '#d8b4fe',
400: '#c084fc',
500: '#a855f7',
600: '#9333ea',
700: '#7e22ce',
800: '#6b21a8',
900: '#581c87',
}
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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center text-white">
<iconify-icon icon="lucide:snowflake" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg tracking-tight font-semibold text-slate-900 uppercase">Cryo Sculpt</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#">Cryotherapy</a>
<a className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#">Skin Tightening</a>
<a className="text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#">Membership</a>
<a className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg shadow-purple-900/10" href="#">
                        Book Now
                    </a>
</div>

<div className="md:hidden">
<button className="p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Wellness Spa Background" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-b from-purple-900/40 via-purple-900/20 to-white/10 backdrop-blur-[1px]"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-transparent to-transparent h-32 bottom-0"></div>

<div className="relative z-20 max-w-4xl mx-auto px-4 text-center mt-16">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white mb-8">
<span className="text-xs font-medium tracking-wide uppercase">Advanced Body Contouring</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-8 leading-[1.1] drop-shadow-sm">
                Transform Your Body <br className="hidden sm:block"/> Without Surgery
            </h1>
<p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed mb-10 drop-shadow-sm">
                Experience the latest in non-invasive technology to sculpt, tone, and rejuvenate your appearance in a calm, luxurious setting.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-purple-900 hover:bg-purple-50 rounded-full font-medium transition-all shadow-xl shadow-purple-900/20 text-sm tracking-wide" href="#">
                    Explore Treatments
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-purple-600/90 backdrop-blur-sm border border-purple-400/30 text-white hover:bg-purple-600 rounded-full font-medium transition-all text-sm tracking-wide flex items-center justify-center gap-2" href="#">
<iconify-icon icon="lucide:calendar" width="18"></iconify-icon>
                    Book Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-purple-50/50">

<div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="max-w-md mx-auto">

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-purple-900/5 border border-purple-100 text-center transform hover:-translate-y-1 transition-all duration-300">
<div className="inline-block p-3 rounded-full bg-purple-100 text-purple-600 mb-6">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Mummy Tummy Rescue</h2>
<p className="text-sm text-slate-500 mb-6">Restore your confidence with our signature package.</p>
<div className="flex items-baseline justify-center mb-8">
<span className="text-4xl font-semibold text-slate-900 tracking-tight">$249</span>
<span className="ml-2 text-sm text-slate-500">/ session</span>
</div>
<div className="space-y-4 mb-8 text-left bg-slate-50 p-6 rounded-2xl">
<div className="flex items-start gap-3">
<iconify-icon className="text-purple-600 mt-0.5 shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Targeted Cryo Fat Freezing</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-purple-600 mt-0.5 shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Skin Tightening Therapy</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-purple-600 mt-0.5 shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Abdominal Muscle Toning</span>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-purple-600 mt-0.5 shrink-0" icon="lucide:check-circle-2" width="18"></iconify-icon>
<span className="text-sm text-slate-700">Post-Treatment Wellness Plan</span>
</div>
</div>
<button className="w-full py-3 px-6 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-purple-600 transition-colors shadow-lg shadow-purple-900/10">
                        Claim Offer
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Advanced Body Sculpting</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Non-invasive solutions tailored to your unique goals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-purple-100 hover:shadow-xl hover:shadow-purple-900/5">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:thermometer-snowflake" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Cryo Slimming</h3>
<p className="text-sm text-slate-500 leading-relaxed">Destroy fat cells permanently using precise cooling technology for targeted reduction.</p>
</div>

<div className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-purple-100 hover:shadow-xl hover:shadow-purple-900/5">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:waves" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Skin Tightening</h3>
<p className="text-sm text-slate-500 leading-relaxed">Boost collagen production to firm and smooth skin texture effectively.</p>
</div>

<div className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-purple-100 hover:shadow-xl hover:shadow-purple-900/5">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:activity" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Muscle Toning</h3>
<p className="text-sm text-slate-500 leading-relaxed">Stimulate deep muscle contractions to define and strengthen your core.</p>
</div>

<div className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 transition-all duration-300 border border-transparent hover:border-purple-100 hover:shadow-xl hover:shadow-purple-900/5">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-600 shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:smile" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3 tracking-tight">Facial Rejuvenation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Reduce fine lines and wrinkles for a youthful, radiant glow without needles.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">

<div className="absolute inset-0 z-0 opacity-5">
<img alt="texture" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-16">What Our Happy Clients Say</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"I was skeptical at first, but the results speak for themselves. The staff made me feel so comfortable during the Cryo sessions. My waistline has never looked better!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">SJ</div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah Jenkins</div>
<div className="text-xs text-slate-400">Verified Client</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-lg shadow-purple-900/5 border border-purple-100 relative top-0 md:-top-4">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"The 'Mummy Tummy' package was a lifesaver. After two kids, I struggled with loose skin. This treatment tightened everything up. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">MR</div>
<div>
<div className="text-sm font-medium text-slate-900">Michelle Ross</div>
<div className="text-xs text-slate-400">Verified Client</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Professional, clean, and effective. The team explained every step of the process. I saw a visible difference in just three sessions."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">DL</div>
<div>
<div className="text-sm font-medium text-slate-900">David L.</div>
<div className="text-xs text-slate-400">Verified Client</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-medium uppercase tracking-wide mb-6">
<span className="w-2 h-2 rounded-full bg-purple-600"></span>
                        Why Choose Us
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Transform Your Body &amp; Confidence</h2>
<p className="text-slate-500 mb-6 leading-relaxed">
                        At Cryo Sculpt Solutions, we believe everyone deserves to feel comfortable in their own skin. Our state-of-the-art technology allows us to target stubborn areas without surgery or downtime.
                    </p>
<p className="text-slate-500 mb-8 leading-relaxed">
                        Whether you are looking to lose inches, tighten skin, or simply rejuvenate your appearance, our expert team creates personalized plans to help you achieve your goals safely and effectively.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-600" icon="lucide:check" width="20"></iconify-icon>
<span className="text-slate-700 font-medium">FDA-Cleared Technology</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-600" icon="lucide:check" width="20"></iconify-icon>
<span className="text-slate-700 font-medium">Non-Invasive &amp; Painless</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-purple-600" icon="lucide:check" width="20"></iconify-icon>
<span className="text-slate-700 font-medium">Zero Downtime</span>
</li>
</ul>
<a className="text-purple-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all" href="#">
                        Learn more about our technology <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>

<div className="relative h-[600px] w-full">

<div className="absolute right-0 top-0 w-3/4 h-5/6 bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl">
<img alt="Confidence" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute left-0 bottom-8 w-2/5 h-2/5 bg-white p-2 rounded-[2rem] shadow-xl">
<div className="w-full h-full rounded-[1.5rem] overflow-hidden">
<img alt="Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="absolute right-12 bottom-0 bg-white p-6 rounded-3xl shadow-lg border border-slate-100 max-w-[200px]">
<div className="text-4xl font-semibold text-purple-600 mb-1">98%</div>
<p className="text-xs text-slate-500">Client satisfaction rate based on post-treatment surveys.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900 opacity-90"></div>
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="flex justify-center md:justify-end pr-0 md:pr-12">
<div className="relative w-[280px] h-[560px] bg-slate-950 border-8 border-slate-800 rounded-[3rem] shadow-2xl overflow-hidden">

<div className="w-full h-full bg-white flex flex-col">
<div className="h-6 w-full bg-slate-100 flex items-center justify-center gap-1">
<div className="w-16 h-4 bg-black rounded-b-xl"></div>
</div>

<div className="p-6 flex-1 bg-slate-50">
<div className="flex justify-between items-center mb-6">
<div className="w-8 h-8 rounded-full bg-purple-100"></div>
<div className="w-6 h-6 rounded bg-slate-200"></div>
</div>
<div className="text-lg font-bold text-slate-900 mb-1">Hello, Sarah</div>
<div className="text-xs text-slate-400 mb-6">Gold Member</div>
<div className="bg-purple-600 rounded-2xl p-4 text-white mb-4 shadow-lg shadow-purple-600/20">
<div className="text-xs opacity-80 mb-1">Next Appointment</div>
<div className="font-semibold text-sm">Tomorrow, 10:00 AM</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="h-24 bg-white rounded-xl shadow-sm"></div>
<div className="h-24 bg-white rounded-xl shadow-sm"></div>
<div className="h-24 bg-white rounded-xl shadow-sm"></div>
<div className="h-24 bg-white rounded-xl shadow-sm"></div>
</div>
</div>

<div className="h-16 bg-white border-t flex justify-around items-center px-4">
<div className="w-6 h-6 rounded bg-purple-600"></div>
<div className="w-6 h-6 rounded bg-slate-200"></div>
<div className="w-6 h-6 rounded bg-slate-200"></div>
</div>
</div>
</div>
</div>

<div className="text-white">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Manage Your Journey</h2>
<p className="text-purple-100 mb-8 max-w-md leading-relaxed">
                        Download our app to schedule appointments, track your progress, access exclusive member perks, and manage your payment plans seamlessly.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-xl font-medium inline-flex items-center gap-3 transition-colors">
<iconify-icon icon="lucide:apple" width="20"></iconify-icon>
<span>App Store</span>
</button>
<button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-6 py-3 rounded-xl font-medium inline-flex items-center gap-3 transition-colors">
<iconify-icon icon="lucide:play" width="20"></iconify-icon>
<span>Google Play</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Gift the Gift of Confidence</h2>

<div className="relative w-full max-w-md mx-auto aspect-[1.58] rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 shadow-2xl shadow-purple-900/20 p-8 flex flex-col justify-between text-white mb-16 transform hover:scale-105 transition-transform duration-500">
<div className="flex justify-between items-start">
<span className="text-xs font-mono opacity-70">GIFT CARD</span>
<iconify-icon className="opacity-80" icon="lucide:snowflake" width="24"></iconify-icon>
</div>
<div className="text-left">
<div className="text-2xl font-bold tracking-tight mb-1">Cryo Sculpt</div>
<div className="text-sm opacity-80">Solutions</div>
</div>
<div className="flex justify-between items-end">
<div className="flex gap-2 text-xs font-mono opacity-60">
<span>••••</span><span>••••</span><span>••••</span><span>4821</span>
</div>
<div className="text-xs font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">$50 - $500</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 rounded-2xl bg-slate-50">
<div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm mb-4">
<iconify-icon icon="lucide:gift" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Flexible Amounts</h3>
<p className="text-xs text-slate-500">Choose any value perfect for your budget.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50">
<div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm mb-4">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Instant Delivery</h3>
<p className="text-xs text-slate-500">Sent directly to their email inbox instantly.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50">
<div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-purple-600 shadow-sm mb-4">
<iconify-icon icon="lucide:calendar-check" width="18"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">No Expiration</h3>
<p className="text-xs text-slate-500">Valid forever on all services and products.</p>
</div>
</div>
<button className="mt-12 px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-purple-600 transition-colors shadow-lg">
                Purchase Gift Card
            </button>
</div>
</section>

<section className="py-24 relative">
<div className="absolute inset-0">
<img alt="Spa bg" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="text-white">
<h2 className="text-4xl font-semibold tracking-tight mb-6">Ready to Start Your Transformation?</h2>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-lg opacity-90">Personalized treatment plans</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-lg opacity-90">Certified cryotherapy experts</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
<span className="text-lg opacity-90">Relaxing, spa-like environment</span>
</li>
</ul>
</div>
<div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
<h3 className="text-2xl font-semibold text-slate-900 mb-2">Book Your Free Consultation</h3>
<p className="text-slate-500 mb-6 text-sm">Take the first step towards the body you deserve.</p>
<form className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
<input className="w-full rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 bg-slate-50 py-3 px-4 text-sm" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 bg-slate-50 py-3 px-4 text-sm" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Interested In</label>
<select className="w-full rounded-xl border-slate-200 focus:border-purple-500 focus:ring-purple-500 bg-slate-50 py-3 px-4 text-sm">
<option>Cryo Slimming</option>
<option>Skin Tightening</option>
<option>General Inquiry</option>
</select>
</div>
<button className="w-full py-4 bg-purple-600 text-white rounded-xl font-medium hover:bg-purple-700 transition-colors shadow-lg shadow-purple-600/20 mt-2">
                            Request Appointment
                        </button>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:shadow-purple-900/5 open:border-transparent transition-all border border-transparent hover:border-purple-100">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<span>Is the treatment painful?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3 group-open:bg-purple-100 group-open:text-purple-600 transition-colors">
<iconify-icon icon="lucide:chevron-down" width="18"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 text-sm">
                        Most clients report little to no discomfort. The sensation is often described as intense cold followed by numbness. You can relax, read, or check your phone during the session.
                    </p>
</details>
<details className="group bg-slate-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:shadow-purple-900/5 transition-all border border-transparent hover:border-purple-100">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<span>How many sessions do I need?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3 group-open:bg-purple-100 group-open:text-purple-600 transition-colors">
<iconify-icon icon="lucide:chevron-down" width="18"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 text-sm">
                        This varies by individual goals and body type. Typically, a series of 3-5 sessions is recommended for optimal results. We will create a custom plan during your consultation.
                    </p>
</details>
<details className="group bg-slate-50 rounded-2xl p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:shadow-purple-900/5 transition-all border border-transparent hover:border-purple-100">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900 font-medium">
<span>Is there any downtime?</span>
<span className="shrink-0 rounded-full bg-white p-1.5 text-slate-900 sm:p-3 group-open:bg-purple-100 group-open:text-purple-600 transition-colors">
<iconify-icon icon="lucide:chevron-down" width="18"></iconify-icon>
</span>
</summary>
<p className="mt-4 leading-relaxed text-slate-500 text-sm">
                        No, our treatments are completely non-invasive. You can return to your normal daily activities, including exercise, immediately after your appointment.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-purple-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Have Questions? We're Here to Help</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-4">
<iconify-icon icon="lucide:phone" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Call Us</h3>
<p className="text-sm text-slate-500 mb-4">Speak directly with our front desk.</p>
<a className="text-purple-600 font-semibold text-lg hover:underline" href="tel:+1234567890">(555) 123-4567</a>
</div>
<div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mx-auto mb-4">
<iconify-icon icon="lucide:map-pin" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 mb-2">Visit Us</h3>
<p className="text-sm text-slate-500 mb-4">123 Wellness Blvd, Suite 100<br/>Cityville, ST 12345</p>
<a className="text-purple-600 font-medium text-sm hover:underline flex items-center justify-center gap-1" href="#">
                        Get Directions <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-white text-xs">
<iconify-icon icon="lucide:snowflake" width="14"></iconify-icon>
</div>
<span className="text-white font-semibold tracking-tight uppercase">Cryo Sculpt</span>
</div>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Redefining body contouring with advanced non-surgical technology.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-purple-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-purple-400 transition-colors" href="#">Cryo Slimming</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Skin Tightening</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Cellulite Reduction</a></li>
<li><a className="hover:text-purple-400 transition-colors" href="#">Facials</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Hours</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex justify-between"><span>Mon - Fri:</span> <span>9am - 7pm</span></li>
<li className="flex justify-between"><span>Saturday:</span> <span>10am - 4pm</span></li>
<li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2023 Cryo Sculpt Solutions. All rights reserved.</p>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
