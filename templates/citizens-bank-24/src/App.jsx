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
sans: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
brand: {
50: '#fef2f2',
100: '#fee2e2',
200: '#fecaca',
300: '#fca5a5',
400: '#f87171',
500: '#ef4444',
600: '#dc2626',
700: '#b91c1c',
800: '#991b1b', // Primary Deep Red
900: '#7f1d1d',
950: '#450a0a',
}
},
boxShadow: {
'glow': '0 0 20px rgba(153, 27, 27, 0.15)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
'card-hover': '0 0 0 1px rgba(153, 27, 27, 0.1), 0 8px 16px rgba(0,0,0,0.06)',
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
      

<div className="bg-brand-900 text-white/90 text-xs py-2.5 border-b border-brand-800">
<div className="container mx-auto px-6 flex justify-between items-center">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5 hover:text-white transition cursor-pointer">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
<span>16757</span>
</span>
<span className="hidden md:flex items-center gap-1.5 hover:text-white transition cursor-pointer">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
<span>info@citizensbankbd.com</span>
</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-white transition" href="#">Career</a>
<span className="w-px h-3 bg-white/20"></span>
<a className="hover:text-white transition" href="#">Branches</a>
<span className="w-px h-3 bg-white/20"></span>
<a className="hover:text-white transition" href="#">ATMs</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200 transition-all duration-300">
<div className="container mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 bg-gradient-to-br from-brand-800 to-brand-900 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div className="flex flex-col">
<span className="text-xl font-bold text-slate-900 leading-none tracking-tight">Citizens Bank</span>
<span className="text-[10px] font-semibold text-brand-800 uppercase tracking-widest mt-1">PLC</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
<a className="hover:text-brand-800 transition-colors py-2" href="#about">About Us</a>
<a className="hover:text-brand-800 transition-colors py-2" href="#retail">Retail</a>
<a className="hover:text-brand-800 transition-colors py-2" href="#sme">SME</a>
<a className="hover:text-brand-800 transition-colors py-2" href="#treasury">Treasury</a>
<a className="hover:text-brand-800 transition-colors py-2" href="#cards">Cards</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex p-2.5 text-slate-500 hover:text-brand-800 hover:bg-slate-50 rounded-full transition-all">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="flex items-center gap-2 bg-slate-900 hover:bg-brand-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg shadow-brand-900/20" href="#online-banking">
<iconify-icon icon="solar:login-2-linear" width="18"></iconify-icon>
<span>Internet Banking</span>
</a>
<button className="lg:hidden p-2 text-slate-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative bg-slate-50 overflow-hidden pt-16 pb-24 lg:py-32">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-brand-50/50 to-transparent pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
                        New Generation Bank
                    </div>
<h1 className="text-5xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-8">
                        Grow your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-brand-500">financial future</span>
                        today.
                    </h1>
<p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
                        Experience banking re-imagined with Citizens Bank PLC. Innovative solutions for Retail, SME, and Corporate needs with a touch of human care.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-brand-800 hover:bg-brand-900 text-white rounded-xl font-semibold shadow-xl shadow-brand-800/20 transition-all hover:-translate-y-0.5 flex items-center gap-2">
                            Open Account
                            <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 bg-white border border-slate-200 hover:border-brand-200 text-slate-700 hover:text-brand-800 rounded-xl font-semibold transition-all hover:-translate-y-0.5 flex items-center gap-2">
                            Explore Services
                        </button>
</div>
<div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-700" icon="solar:shield-check-linear" width="20"></iconify-icon>
<span>Secure Banking</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-700" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<span>24/7 Support</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-700" icon="solar:global-linear" width="20"></iconify-icon>
<span>Nationwide</span>
</div>
</div>
</div>

<div className="relative hidden lg:block h-[600px]">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-100 to-slate-100 rounded-[3rem] transform rotate-3 scale-95 opacity-50"></div>
<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 hover:rotate-0 transition-all duration-700 group">
<img alt="Banking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-10 left-10 right-10 bg-white/95 backdrop-blur p-6 rounded-2xl shadow-xl border border-white/50">
<div className="flex items-center justify-between mb-4">
<div>
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Current Balance</p>
<p className="text-2xl font-bold text-slate-900">৳ 2,450,000.00</p>
</div>
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-brand-600 w-3/4 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="container mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
<div className="lg:col-span-5 relative">
<div className="sticky top-32">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
<img alt="About Us" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556742049-0934605f3271?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-3xl font-bold">50+</p>
<p className="text-white/80 text-sm">Branches &amp; Sub-branches</p>
</div>
</div>

<div className="absolute -z-10 top-10 -left-10 w-full h-full border border-slate-200 rounded-3xl"></div>
</div>
</div>
<div className="lg:col-span-7 space-y-8">
<div>
<span className="text-brand-800 font-bold tracking-wider uppercase text-xs mb-2 block">About Citizens Bank</span>
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-6">Today. Tomorrow. Together.</h2>
<p className="text-slate-500 leading-relaxed text-lg mb-6">
                            Citizens Bank PLC emerged with a distinctive orientation and motto to serve the nation. The sponsors of this banking organization have a firm commitment to transform this bank into the most acceptable and trustworthy financial institution.
                        </p>
<p className="text-slate-500 leading-relaxed mb-8">
                            We are committed to providing high-quality service to our customers through the adoption of modern technology and by maintaining the highest standard of business ethics.
                        </p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-100 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Customer First</h3>
<p className="text-sm text-slate-500">We prioritize our customer's needs in every decision we make.</p>
</div>
<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-100 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Innovation</h3>
<p className="text-sm text-slate-500">Adopting latest technology for seamless banking experiences.</p>
</div>
</div>
<div className="pt-4">
<a className="text-brand-800 font-semibold hover:text-brand-900 flex items-center gap-2 group" href="#">
                            Read Chairman's Message
                            <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="retail">
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-brand-800 font-bold tracking-wider uppercase text-xs mb-2 block">Personal Banking</span>
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Retail Solutions</h2>
</div>
<p className="text-slate-500 max-w-md text-sm leading-relaxed">
                    Whether you are saving for the future, buying a home, or managing daily expenses, our retail products are designed for you.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-brand-100">
<div className="w-14 h-14 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wallet-money-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Deposit Products</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                        Secure your future with our range of savings, current, and fixed deposit accounts offering competitive rates.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Citizens Super Savings
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Monthly Benefit Scheme
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-brand-800 hover:text-brand-600 transition-colors" href="#">
                        Explore Deposits <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-brand-100">
<div className="w-14 h-14 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-smile-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Loan Products</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                        From home loans to personal loans, we offer flexible financing options to help you achieve your dreams.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Home Loan
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Car Loan
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-brand-800 hover:text-brand-600 transition-colors" href="#">
                        Explore Loans <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-brand-100">
<div className="w-14 h-14 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:card-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Cards</h3>
<p className="text-slate-500 text-sm mb-6 leading-relaxed">
                        Experience the freedom of cashless transactions with our secure Debit and Credit cards.
                    </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Dual Currency
                        </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Reward Points
                        </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-brand-800 hover:text-brand-600 transition-colors" href="#">
                        View Cards <iconify-icon className="ml-1" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="sme">
<div className="container mx-auto px-6">
<div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
</svg>
</div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div>
<span className="text-brand-400 font-bold tracking-wider uppercase text-xs mb-2 block">Business Growth</span>
<h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight mb-4">SME &amp; Corporate Banking</h2>
<p className="text-slate-400 text-lg leading-relaxed">
                                We support the backbone of the economy. Our SME solutions are tailored to help small and medium enterprises scale up efficiently.
                            </p>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-brand-400 mb-4" icon="solar:shop-2-linear" width="32"></iconify-icon>
<h4 className="text-white font-bold text-lg mb-1">SME Loans</h4>
<p className="text-slate-400 text-sm">Working capital &amp; term loans.</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-blue-400 mb-4" icon="solar:buildings-2-linear" width="32"></iconify-icon>
<h4 className="text-white font-bold text-lg mb-1">Corporate</h4>
<p className="text-slate-400 text-sm">Project financing &amp; syndicated loans.</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-purple-400 mb-4" icon="solar:case-round-linear" width="32"></iconify-icon>
<h4 className="text-white font-bold text-lg mb-1">Trade Finance</h4>
<p className="text-slate-400 text-sm">L/C, Guarantee &amp; Export finance.</p>
</div>
<div className="bg-white/5 backdrop-blur border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-green-400 mb-4" icon="solar:hand-money-linear" width="32"></iconify-icon>
<h4 className="text-white font-bold text-lg mb-1">Women Entrepreneur</h4>
<p className="text-slate-400 text-sm">Special schemes for women.</p>
</div>
</div>
</div>
<div className="hidden lg:block relative">
<img alt="Business Meeting" className="rounded-2xl shadow-2xl border-4 border-white/10" src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 bg-brand-600 p-6 rounded-2xl shadow-xl text-white">
<p className="text-xs uppercase opacity-80 mb-1">Trusted By</p>
<p className="text-3xl font-bold">1,000+</p>
<p className="text-sm">Businesses</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="treasury">
<div className="container mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand-800 font-bold tracking-wider uppercase text-xs mb-2 block">Global Markets</span>
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-4">Treasury Operations</h2>
<p className="text-slate-500">
                    Expert management of money market and foreign exchange operations to maximize returns and minimize risks.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-all">
<div className="w-12 h-12 mx-auto bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:dollar-minimalistic-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Money Market</h4>
<p className="text-xs text-slate-500">Call money, term placements &amp; repo operations.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-all">
<div className="w-12 h-12 mx-auto bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Forex</h4>
<p className="text-xs text-slate-500">Spot, forward &amp; swap transactions.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-all">
<div className="w-12 h-12 mx-auto bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Primary Dealer</h4>
<p className="text-xs text-slate-500">Government securities &amp; bonds.</p>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center hover:shadow-lg transition-all">
<div className="w-12 h-12 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:hand-stars-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Investment</h4>
<p className="text-xs text-slate-500">Capital market operations &amp; advisory.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="online-banking">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 space-y-8">
<h2 className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">Bank Anytime, Anywhere.</h2>
<p className="text-slate-500 text-lg">
                        Download our mobile app or use our internet banking portal to manage your finances on the go. Safe, secure, and simple.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:smartphone-2-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Mobile App</h4>
<p className="text-sm text-slate-500 mt-1">Transfer funds, pay bills, and check statements instantly.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:laptop-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-slate-900">Internet Banking</h4>
<p className="text-sm text-slate-500 mt-1">Corporate bulk payments and advanced account management.</p>
</div>
</div>
</div>
<div className="flex gap-4 pt-4">
<button className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:opacity-80 transition">
<iconify-icon icon="solar:apple-linear" width="20"></iconify-icon>
<div className="text-left leading-none">
<span className="text-[9px] uppercase block">Download on the</span>
<span className="text-xs font-bold">App Store</span>
</div>
</button>
<button className="bg-black text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:opacity-80 transition">
<iconify-icon icon="solar:play-bold" width="20"></iconify-icon>
<div className="text-left leading-none">
<span className="text-[9px] uppercase block">Get it on</span>
<span className="text-xs font-bold">Google Play</span>
</div>
</button>
</div>
</div>
<div className="lg:w-1/2 relative flex justify-center">
<div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-4 shadow-2xl border-8 border-slate-900">

<div className="bg-white w-full h-full rounded-[2.2rem] overflow-hidden relative">

<div className="bg-brand-800 text-white p-6 pt-10 rounded-b-3xl">
<div className="flex justify-between items-center mb-6">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:bell-linear" width="24"></iconify-icon>
</div>
<p className="text-xs opacity-80">Good Morning,</p>
<p className="text-xl font-bold">Mr. Rahman</p>
</div>

<div className="p-6">
<div className="bg-white shadow-lg rounded-xl p-4 -mt-12 mb-6">
<p className="text-xs text-slate-400">Total Balance</p>
<p className="text-xl font-bold text-slate-900">৳ 120,500.00</p>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-50 p-4 rounded-xl flex flex-col items-center gap-2">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:card-transfer-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold">Transfer</span>
</div>
<div className="bg-slate-50 p-4 rounded-xl flex flex-col items-center gap-2">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
<iconify-icon icon="solar:bill-list-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold">Bill Pay</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-brand-500" icon="solar:shield-star-bold" width="32"></iconify-icon>
<span className="text-2xl font-bold">Citizens Bank</span>
</div>
<p className="text-sm leading-relaxed text-slate-400">
                        Chini Shilpa Bhaban-2,<br/> 76 Motijheel C/A,<br/> Dhaka-1000, Bangladesh.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-600 hover:text-white transition" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-600 hover:text-white transition" href="#">
<iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div>
<h5 className="text-white font-bold mb-6">Banking</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-brand-400 transition" href="#">Retail Banking</a></li>
<li><a className="hover:text-brand-400 transition" href="#">SME Banking</a></li>
<li><a className="hover:text-brand-400 transition" href="#">Corporate Banking</a></li>
<li><a className="hover:text-brand-400 transition" href="#">Treasury</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-bold mb-6">Quick Links</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-brand-400 transition" href="#">About Us</a></li>
<li><a className="hover:text-brand-400 transition" href="#">Career</a></li>
<li><a className="hover:text-brand-400 transition" href="#">Contact Us</a></li>
<li><a className="hover:text-brand-400 transition" href="#">Exchange Rates</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-bold mb-6">Contact</h5>
<ul className="space-y-4 text-sm">
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="solar:phone-calling-linear"></iconify-icon>
<span>16757 (24/7)</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-brand-500" icon="solar:letter-linear"></iconify-icon>
<span>info@citizensbankbd.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
<p>© 2026 Citizens Bank PLC. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition" href="#">Privacy Policy</a>
<a className="hover:text-white transition" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
