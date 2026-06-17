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
sans: ['Inter', 'system-ui', 'sans-serif'],
display: ['Inter', 'system-ui', 'sans-serif'],
},
colors: {
medical: {
blue: '#0071CE',
teal: '#00A4BD',
dark: '#1D1D1F',
gray: '#5E6C84',
light: '#F5F5F7',
green: '#34C759',
red: '#FF3B30',
orange: '#FF9500'
}
},
boxShadow: {
'soft': '0 4px 20px rgba(0,0,0,0.03)',
'medium': '0 8px 30px rgba(0,0,0,0.06)',
'strong': '0 20px 40px rgba(0,0,0,0.08)',
'glow': '0 0 20px rgba(0, 113, 206, 0.15)'
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Loading Screen Logic
        window.addEventListener('load', () => {
            setTimeout(() => {
                const splash = document.getElementById('splash');
                splash.classList.add('splash-hidden');
                document.body.style.overflow = 'auto';
            }, 2500);
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
      

<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#0071CE] to-[#00A4BD] text-white" id="splash">
<div className="bg-center opacity-30 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ffc47bd-55cc-479d-acb8-3b92dbdffb50_1600w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 text-center space-y-6">
<h1 className="md:text-6xl animate-[fadeIn_0.8s_ease-out_0.2s_forwards] text-4xl font-extrabold tracking-tight opacity-0">Imagine a world where healthcare</h1>
<p className="md:text-5xl animate-[fadeIn_0.8s_ease-out_1.8s_forwards] text-2xl font-extrabold italic tracking-tight opacity-0">is delivered the right way...</p>
</div>
<div className="absolute bottom-12 opacity-0 animate-[fadeIn_1s_ease-out_2s_forwards]">
<iconify-icon className="animate-pulse" height="96" icon="solar:heart-pulse-linear" style={{color: 'rgb(255, 255, 255)'}} width="94"></iconify-icon>
</div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-[1400px] mx-auto px-6 h-[70px] flex items-center justify-between">
<div className="flex items-center gap-4">
<span className="font-semibold text-lg tracking-tight text-medical-dark">Elevated Wellness</span>
<div className="hidden md:block w-1 h-1 rounded-full bg-medical-green"></div>
<span className="hidden md:block text-xs text-medical-gray tracking-wide">Reclaiming Healthcare's Purpose</span>
</div>
<div className="hidden lg:flex items-center gap-10">
<a className="text-sm font-medium text-medical-dark hover:text-medical-blue transition-colors" href="#crisis">The Crisis</a>
<a className="text-sm font-medium text-medical-dark hover:text-medical-blue transition-colors" href="#solution">Our Solution</a>
<a className="text-sm font-medium text-medical-dark hover:text-medical-blue transition-colors" href="#stories">Success Stories</a>
<a className="text-sm font-medium text-medical-dark hover:text-medical-blue transition-colors" href="#pricing">Your Investment</a>
</div>
<a className="group flex items-center gap-2 bg-medical-blue hover:bg-[#005FAB] text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-px" href="#contact">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span>Reclaim Your Practice</span>
</a>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-20 flex items-center hero-gradient overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 space-y-8 opacity-0 animate-[slideUp_0.8s_ease-out_2.8s_forwards]">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-100">
<span className="text-[11px] font-bold uppercase tracking-[0.15em] text-medical-red">For Physicians Ready to Break Free</span>
</div>
<h1 className="text-5xl lg:text-[68px] leading-[1.05] font-bold tracking-tight text-medical-dark text-balance">
                    Are You Seeing 25+ Patients Daily Just to Stay Afloat?
                </h1>
<p className="text-xl text-medical-gray leading-relaxed max-w-2xl">
                    You entered medicine to heal, not to fight for <span className="text-medical-dark font-medium">35-40% reimbursement</span> or document for <span className="text-medical-dark font-medium">15-20 hours weekly</span>. You dreamed of 400 engaged patients, not a transactional treadmill of 2,500.
                </p>
<div className="py-6 border-t border-gray-200">
<p className="text-lg font-medium text-medical-red leading-relaxed">
                        Yet you spend 25-30% of your day on admin. Patients wait 18-24 days to see you. <br className="hidden md:block"/>The system is broken.
                    </p>
</div>
<div className="bg-blue-50/50 border-l-4 border-medical-blue p-4 rounded-r-xl max-w-xl">
<div className="flex items-center gap-2 mb-1">
<span className="text-[10px] font-bold uppercase bg-white/50 px-2 py-0.5 rounded text-medical-blue">Market Intelligence</span>
</div>
<p className="text-base text-medical-blue font-medium italic">
                        "Only 3-5% of physicians have transitioned. 95% are trapped—the path is wide open."
                    </p>
</div>
<div className="pt-4 flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-3 bg-medical-blue hover:bg-[#005FAB] text-white px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        See How Physicians Did It
                    </button>
<button className="flex items-center justify-center gap-3 bg-white border border-gray-200 hover:border-medical-blue hover:text-medical-blue text-medical-dark px-8 py-4 rounded-full text-base font-medium transition-all hover:-translate-y-0.5">
<iconify-icon icon="solar:calculator-linear" width="20"></iconify-icon>
                        Calculate Your ROI
                    </button>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-3 pt-4">
<div className="flex items-center gap-2 text-sm text-medical-gray">
<iconify-icon className="text-medical-green" icon="solar:check-circle-linear"></iconify-icon>
<span>Physician-founded</span>
</div>
<div className="flex items-center gap-2 text-sm text-medical-gray">
<iconify-icon className="text-medical-green" icon="solar:check-circle-linear"></iconify-icon>
<span>200-400% ROI typical</span>
</div>
<div className="flex items-center gap-2 text-sm text-medical-gray">
<iconify-icon className="text-medical-green" icon="solar:check-circle-linear"></iconify-icon>
<span>400-600 patient panels</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative opacity-0 animate-[fadeIn_1s_ease-out_3s_forwards]">
<div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[6/7] group">
<img alt="Physician connecting with patient" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-white">
<p className="font-semibold text-sm mb-1">Dr. Sarah Chen, Concierge Medicine</p>
<div className="flex items-center gap-2 text-xs opacity-90 mb-1">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
<span>Reduced to 450 patients</span>
</div>
<div className="flex items-center gap-2 text-xs font-medium text-medical-green">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
<span>+3.5 hours patient time daily</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-medical-light" id="crisis">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[11px] font-bold text-medical-red uppercase tracking-widest mb-4 block">The Data Doesn't Lie</span>
<h2 className="text-4xl md:text-5xl font-bold text-medical-dark tracking-tight mb-6">The System is Failing You</h2>
<p className="text-xl text-medical-gray text-balance">It's not your fault. But the math of the traditional model no longer supports the medicine you swore to practice.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-[28px] p-10 border border-gray-100 shadow-soft hover:shadow-strong transition-all duration-300 border-l-4 border-l-medical-red group">
<div className="flex justify-between items-start mb-6">
<div>
<span className="block text-6xl font-bold text-medical-red tracking-tight mb-2">25%</span>
<span className="text-sm text-medical-gray font-medium">Of your day lost to admin</span>
</div>
<div className="p-3 bg-red-50 rounded-xl text-medical-red">
<iconify-icon icon="solar:forbidden-circle-linear" width="32"></iconify-icon>
</div>
</div>
<div className="h-px bg-gray-100 w-full mb-6"></div>
<h3 className="text-2xl font-semibold text-medical-dark mb-3">Time Stolen</h3>
<p className="text-medical-gray leading-relaxed mb-4">
                        15-20 hours per week charting. 800+ hours a year stolen from your family and patients. An EMR designed for billing, not healing.
                    </p>
<span className="text-xs font-bold text-medical-red bg-red-50 px-3 py-1 rounded-full">Annual Impact: 800+ Hours</span>
</div>

<div className="bg-white rounded-[28px] p-10 border border-gray-100 shadow-soft hover:shadow-strong transition-all duration-300 border-l-4 border-l-medical-orange group">
<div className="flex justify-between items-start mb-6">
<div>
<span className="block text-6xl font-bold text-medical-orange tracking-tight mb-2">35%</span>
<span className="text-sm text-medical-gray font-medium">Avg. collection rate</span>
</div>
<div className="p-3 bg-orange-50 rounded-xl text-medical-orange">
<iconify-icon icon="solar:graph-down-linear" width="32"></iconify-icon>
</div>
</div>
<div className="h-px bg-gray-100 w-full mb-6"></div>
<h3 className="text-2xl font-semibold text-medical-dark mb-3">Financial Erosion</h3>
<p className="text-medical-gray leading-relaxed mb-4">
                        Overhead is 65%. Reimbursements drop 2-3% annually. You work harder to earn less, while concierge peers collect 90-95% directly.
                    </p>
<span className="text-xs font-bold text-medical-orange bg-orange-50 px-3 py-1 rounded-full">Down from 60% in 2010</span>
</div>

<div className="bg-white rounded-[28px] p-10 border border-gray-100 shadow-soft hover:shadow-strong transition-all duration-300 border-l-4 border-l-medical-gray group">
<div className="flex justify-between items-start mb-6">
<div>
<span className="block text-6xl font-bold text-medical-gray tracking-tight mb-2">2.5k</span>
<span className="text-sm text-medical-gray font-medium">Patients per panel</span>
</div>
<div className="p-3 bg-gray-50 rounded-xl text-medical-gray">
<iconify-icon icon="solar:heart-broken-linear" width="32"></iconify-icon>
</div>
</div>
<div className="h-px bg-gray-100 w-full mb-6"></div>
<h3 className="text-2xl font-semibold text-medical-dark mb-3">Soul Erosion</h3>
<p className="text-medical-gray leading-relaxed mb-4">
                        Rushing through 15-minute visits. Patients waiting 20 days. This isn't the dream. Your patients deserve better than a transactional number.
                    </p>
<span className="text-xs font-bold text-medical-gray bg-gray-100 px-3 py-1 rounded-full">Vs. 450 in Concierge</span>
</div>
</div>
<div className="mt-20 text-center">
<blockquote className="text-2xl md:text-3xl font-medium italic text-medical-dark max-w-2xl mx-auto relative">
<span className="absolute -top-8 -left-4 text-6xl text-medical-blue opacity-20">"</span>
                    First, do no harm. But what if the system itself is the harm?
                </blockquote>
</div>
</div>
</section>

<section className="py-24 bg-white" id="solution">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[11px] font-bold text-medical-green uppercase tracking-widest mb-4 block">The Path Forward</span>
<h2 className="text-4xl md:text-5xl font-bold text-medical-dark tracking-tight mb-6">Imagine Your Practice... Transformed</h2>
<p className="text-xl text-medical-gray max-w-3xl mx-auto">Physicians who transition report 200-400% ROI within 24 months and actually know their patients' names.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-5xl mx-auto border border-gray-200 rounded-[32px] overflow-hidden mb-24 shadow-medium">

<div className="p-10 bg-red-50/10 border-b md:border-b-0 md:border-r border-gray-200">
<h3 className="text-xl font-bold text-medical-dark mb-8 flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-medical-red"></span> Traditional Practice
                    </h3>
<div className="space-y-6">
<div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
<span className="text-medical-gray font-medium">Panel Size</span>
<span className="text-lg font-bold text-medical-red">2,500+</span>
</div>
<div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
<span className="text-medical-gray font-medium">Visit Length</span>
<span className="text-lg font-bold text-medical-red">15 mins</span>
</div>
<div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
<span className="text-medical-gray font-medium">Wait Time</span>
<span className="text-lg font-bold text-medical-red">18-24 days</span>
</div>
<div className="flex justify-between items-center border-b border-dashed border-gray-200 pb-2">
<span className="text-medical-gray font-medium">Collection</span>
<span className="text-lg font-bold text-medical-red">35-40%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-medical-gray font-medium">Admin Time</span>
<span className="text-lg font-bold text-medical-red">15-20 hrs/wk</span>
</div>
</div>
</div>

<div className="p-10 bg-green-50/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-medical-green opacity-5 rounded-full blur-3xl"></div>
<h3 className="text-xl font-bold text-medical-dark mb-8 flex items-center gap-3">
<span className="w-3 h-3 rounded-full bg-medical-green animate-pulse"></span> Your Future
                    </h3>
<div className="space-y-6 relative z-10">
<div className="flex justify-between items-center border-b border-dashed border-green-200 pb-2">
<span className="text-medical-dark font-medium">Panel Size</span>
<span className="text-lg font-bold text-medical-green">400-600</span>
</div>
<div className="flex justify-between items-center border-b border-dashed border-green-200 pb-2">
<span className="text-medical-dark font-medium">Visit Length</span>
<span className="text-lg font-bold text-medical-green">45-60 mins</span>
</div>
<div className="flex justify-between items-center border-b border-dashed border-green-200 pb-2">
<span className="text-medical-dark font-medium">Wait Time</span>
<span className="text-lg font-bold text-medical-green">Same/Next Day</span>
</div>
<div className="flex justify-between items-center border-b border-dashed border-green-200 pb-2">
<span className="text-medical-dark font-medium">Collection</span>
<span className="text-lg font-bold text-medical-green">90-95%</span>
</div>
<div className="flex justify-between items-center">
<span className="text-medical-dark font-medium">Admin Time</span>
<span className="text-lg font-bold text-medical-green">3-4 hrs/wk</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="md:col-span-2 bg-gradient-to-br from-[#F5F5F7] to-white rounded-[32px] p-8 hover:-translate-y-1 transition-transform shadow-sm hover:shadow-medium border border-gray-100">
<div className="text-medical-green mb-4"><iconify-icon icon="solar:clock-circle-linear" width="48"></iconify-icon></div>
<h3 className="text-4xl font-bold text-medical-green mb-1">3-4 Hours</h3>
<p className="text-xs font-semibold text-medical-gray uppercase tracking-wide mb-4">Reclaimed Daily</p>
<h4 className="text-xl font-bold text-medical-dark mb-2">More Time Where It Matters</h4>
<p className="text-medical-gray text-sm leading-relaxed">AI automation handles 70% of admin tasks. Your panel drops to 400-600 engaged patients. You actually practice medicine.</p>
</div>

<div className="md:col-span-2 bg-gradient-to-br from-[#F5F5F7] to-white rounded-[32px] p-8 hover:-translate-y-1 transition-transform shadow-sm hover:shadow-medium border border-gray-100">
<div className="text-medical-blue mb-4"><iconify-icon icon="solar:shield-check-linear" width="48"></iconify-icon></div>
<h3 className="text-4xl font-bold text-medical-blue mb-1">90-95%</h3>
<p className="text-xs font-semibold text-medical-gray uppercase tracking-wide mb-4">Collection Rate</p>
<h4 className="text-xl font-bold text-medical-dark mb-2">Financial Sovereignty</h4>
<p className="text-medical-gray text-sm leading-relaxed">No middlemen taking 60%. No denials. Practices typically achieve 200-400% ROI in 18 months.</p>
</div>

<div className="bg-white rounded-[32px] p-6 border border-gray-100 hover:shadow-medium transition-all">
<div className="text-medical-teal mb-3"><iconify-icon icon="solar:test-tube-linear" width="32"></iconify-icon></div>
<div className="text-2xl font-bold text-medical-teal mb-1">Deep Work</div>
<p className="text-xs text-medical-gray">45-60 min appointments to find root causes.</p>
</div>
<div className="bg-white rounded-[32px] p-6 border border-gray-100 hover:shadow-medium transition-all">
<div className="text-medical-green mb-3"><iconify-icon icon="solar:users-group-two-rounded-linear" width="32"></iconify-icon></div>
<div className="text-2xl font-bold text-medical-green mb-1">Partners</div>
<p className="text-xs text-medical-gray">20-30% of patients will convert to this model.</p>
</div>
<div className="bg-white rounded-[32px] p-6 border border-gray-100 hover:shadow-medium transition-all">
<div className="text-medical-blue mb-3"><iconify-icon icon="solar:diploma-verified-linear" width="32"></iconify-icon></div>
<div className="text-2xl font-bold text-medical-blue mb-1">Freedom</div>
<p className="text-xs text-medical-gray">Zero prior authorizations. Clinical autonomy.</p>
</div>
<div className="bg-white rounded-[32px] p-6 border border-gray-100 hover:shadow-medium transition-all">
<div className="text-medical-gray mb-3"><iconify-icon icon="solar:sun-2-linear" width="32"></iconify-icon></div>
<div className="text-2xl font-bold text-medical-gray mb-1">5 PM</div>
<p className="text-xs text-medical-gray">Go home on time. No evening charting.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#F5F5F7] to-white">
<div className="max-w-[1000px] mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-medical-dark tracking-tight mb-6">Three Pillars, One Transformation</h2>
<p className="text-xl text-medical-gray max-w-2xl mx-auto">A complete practice evolution engineered for one outcome: freeing you to heal.</p>
</div>
<div className="space-y-6">

<details className="group bg-white border border-gray-200 rounded-[28px] overflow-hidden transition-all duration-300 open:border-medical-green open:shadow-lg open:ring-1 open:ring-medical-green/20">
<summary className="flex items-center justify-between p-8 md:p-10 cursor-pointer list-none">
<div className="flex items-center gap-6 md:gap-8">
<div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-medical-green shrink-0">
<iconify-icon icon="solar:leaf-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold text-medical-dark group-hover:text-medical-green transition-colors">Premium Wellness Products</h3>
<p className="text-medical-gray mt-1">Evidence-Based Supplements &amp; Education</p>
<p className="text-sm font-semibold text-medical-green mt-2 md:hidden">40-50% margins</p>
</div>
</div>
<div className="flex items-center gap-6">
<span className="hidden md:block text-sm font-semibold text-medical-green bg-green-50 px-3 py-1 rounded-full">40-50% Margins</span>
<div className="w-8 h-8 flex items-center justify-center text-medical-gray transition-transform duration-300 group-open:rotate-45 group-open:text-medical-green">
<iconify-icon icon="solar:add-circle-linear" width="32"></iconify-icon>
</div>
</div>
</summary>
<div className="px-8 md:px-10 pb-10 pt-2 animate-fade-in">
<div className="pl-[88px] max-w-3xl">
<p className="text-medical-dark leading-relaxed mb-6">
                                Your patients buy supplements from Amazon. Offer them clinical-grade Quicksilver Scientific protocols instead.
                            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<div className="flex gap-3 text-sm text-medical-gray">
<iconify-icon className="text-medical-green shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    High bioavailability liposomal delivery
                                </div>
<div className="flex gap-3 text-sm text-medical-gray">
<iconify-icon className="text-medical-green shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Heavy metal detox protocols
                                </div>
</div>
<div className="bg-green-50/50 border-l-4 border-medical-green p-5 rounded-r-xl">
<p className="text-sm font-medium text-medical-dark">
<span className="font-bold">Impact:</span> Typical 400-patient practice generates $4,000-8,000/month recurring revenue.
                                </p>
</div>
</div>
</div>
</details>

<details className="group bg-white border border-gray-200 rounded-[28px] overflow-hidden transition-all duration-300 open:border-medical-blue open:shadow-lg open:ring-1 open:ring-medical-blue/20">
<summary className="flex items-center justify-between p-8 md:p-10 cursor-pointer list-none">
<div className="flex items-center gap-6 md:gap-8">
<div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-medical-blue shrink-0">
<iconify-icon icon="solar:medical-kit-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold text-medical-dark group-hover:text-medical-blue transition-colors">Advanced Medical Equipment</h3>
<p className="text-medical-gray mt-1">Cash-Pay Services Insurance Won't Touch</p>
<p className="text-sm font-semibold text-medical-blue mt-2 md:hidden">200-300% ROI</p>
</div>
</div>
<div className="flex items-center gap-6">
<span className="hidden md:block text-sm font-semibold text-medical-blue bg-blue-50 px-3 py-1 rounded-full">$47k/mo Potential</span>
<div className="w-8 h-8 flex items-center justify-center text-medical-gray transition-transform duration-300 group-open:rotate-45 group-open:text-medical-blue">
<iconify-icon icon="solar:add-circle-linear" width="32"></iconify-icon>
</div>
</div>
</summary>
<div className="px-8 md:px-10 pb-10 pt-2 animate-fade-in">
<div className="pl-[88px] max-w-3xl">
<p className="text-medical-dark leading-relaxed mb-6">
                                Add high-margin services your patients want. Accufit body contouring, PEMF therapy, and Red Light systems.
                            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<div className="flex gap-3 text-sm text-medical-gray">
<iconify-icon className="text-medical-blue shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Accufit: $250-400 per session
                                </div>
<div className="flex gap-3 text-sm text-medical-gray">
<iconify-icon className="text-medical-blue shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    PEMF: Chronic pain solutions
                                </div>
</div>
<div className="bg-blue-50/50 border-l-4 border-medical-blue p-5 rounded-r-xl">
<p className="text-sm font-medium text-medical-dark">
<span className="font-bold">Case Study:</span> Dr. Martinez added $47,000 monthly revenue in 7 months with 470 patients.
                                </p>
</div>
</div>
</div>
</details>

<details className="group bg-white border border-gray-200 rounded-[28px] overflow-hidden transition-all duration-300 open:border-medical-teal open:shadow-lg open:ring-1 open:ring-medical-teal/20">
<summary className="flex items-center justify-between p-8 md:p-10 cursor-pointer list-none">
<div className="flex items-center gap-6 md:gap-8">
<div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center text-medical-teal shrink-0">
<iconify-icon icon="solar:cpu-linear" width="32"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-semibold text-medical-dark group-hover:text-medical-teal transition-colors">AI-Powered Operations</h3>
<p className="text-medical-gray mt-1">Tech That Gives You 3-4 Hours Daily</p>
<p className="text-sm font-semibold text-medical-teal mt-2 md:hidden">70-80% admin reduction</p>
</div>
</div>
<div className="flex items-center gap-6">
<span className="hidden md:block text-sm font-semibold text-medical-teal bg-teal-50 px-3 py-1 rounded-full">Chart in 30 Mins</span>
<div className="w-8 h-8 flex items-center justify-center text-medical-gray transition-transform duration-300 group-open:rotate-45 group-open:text-medical-teal">
<iconify-icon icon="solar:add-circle-linear" width="32"></iconify-icon>
</div>
</div>
</summary>
<div className="px-8 md:px-10 pb-10 pt-2 animate-fade-in">
<div className="pl-[88px] max-w-3xl">
<p className="text-medical-dark leading-relaxed mb-6">
                                Ambient clinical listening writes your notes. AI scheduling optimizes your 8-12 daily slots.
                            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
<div className="flex gap-3 text-sm text-medical-gray">
<iconify-icon className="text-medical-teal shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Automated patient engagement
                                </div>
<div className="flex gap-3 text-sm text-medical-gray">
<iconify-icon className="text-medical-teal shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                    Revenue cycle automation
                                </div>
</div>
<div className="bg-teal-50/50 border-l-4 border-medical-teal p-5 rounded-r-xl">
<p className="text-sm font-medium text-medical-dark">
<span className="font-bold">Result:</span> Charting time drops from 15-20 hrs/week to 30 mins/day.
                                </p>
</div>
</div>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white" id="stories">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[11px] font-bold text-medical-green uppercase tracking-widest mb-4 block">Real Transformations</span>
<h2 className="text-4xl md:text-5xl font-bold text-medical-dark tracking-tight mb-4">Join the 3-5% Who Chose Freedom</h2>
<p className="text-medical-gray text-lg">They aren't superhuman. They just made a choice.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-medical-light rounded-[28px] p-8 border border-gray-100 hover:shadow-medium transition-all">
<div className="flex justify-center mb-6">
<div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<h3 className="text-center text-xl font-bold text-medical-dark">Dr. Sarah Chen</h3>
<p className="text-center text-sm text-medical-gray mb-6">Concierge Medicine • Transformed 2024</p>
<div className="bg-white rounded-xl p-4 mb-6 text-xs space-y-2 border border-gray-100">
<div className="flex justify-between">
<span className="text-medical-red">Before: 2,600 pts</span>
<span className="text-medical-green font-bold">After: 450 pts</span>
</div>
<div className="flex justify-between">
<span className="text-medical-red">35 daily visits</span>
<span className="text-medical-green font-bold">12 daily visits</span>
</div>
</div>
<p className="text-medical-dark italic text-sm leading-relaxed">
                        "I was drowning. Now I see 12 patients a day for 45 minutes each. My income is up 60%, but the best part is I actually know my patients."
                    </p>
</div>

<div className="bg-medical-light rounded-[28px] p-8 border border-gray-100 hover:shadow-medium transition-all">
<div className="flex justify-center mb-6">
<div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<h3 className="text-center text-xl font-bold text-medical-dark">Dr. James Martinez</h3>
<p className="text-center text-sm text-medical-gray mb-6">Medical Spa • Transformed 2024</p>
<div className="bg-white rounded-xl p-4 mb-6 text-xs space-y-2 border border-gray-100">
<div className="flex justify-between">
<span className="text-medical-red">Before: $0 Equip</span>
<span className="text-medical-green font-bold">After: $47k/mo</span>
</div>
<div className="flex justify-between">
<span className="text-medical-red">2,800 pts</span>
<span className="text-medical-green font-bold">470 pts</span>
</div>
</div>
<p className="text-medical-dark italic text-sm leading-relaxed">
                        "I thought cash-pay meant losing patients. I was wrong. My 470 engaged patients are committed. I regret not doing this 5 years ago."
                    </p>
</div>

<div className="bg-medical-light rounded-[28px] p-8 border border-gray-100 hover:shadow-medium transition-all">
<div className="flex justify-center mb-6">
<div className="w-24 h-24 rounded-full bg-gray-200 border-4 border-white shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<h3 className="text-center text-xl font-bold text-medical-dark">Dr. Emily Patel</h3>
<p className="text-center text-sm text-medical-gray mb-6">Functional Med • Transformed 2024</p>
<div className="bg-white rounded-xl p-4 mb-6 text-xs space-y-2 border border-gray-100">
<div className="flex justify-between">
<span className="text-medical-red">3 hrs admin/night</span>
<span className="text-medical-green font-bold">30 mins total</span>
</div>
<div className="flex justify-between">
<span className="text-medical-red">Burned out</span>
<span className="text-medical-green font-bold">Coach daughter</span>
</div>
</div>
<p className="text-medical-dark italic text-sm leading-relaxed">
                        "The AI documentation changed everything. I leave at 5pm. My 520 patients get 60-minute appointments. I love medicine again."
                    </p>
</div>
</div>
<div className="text-center max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-2xl border border-blue-100">
<p className="text-medical-blue font-medium text-lg mb-2">95% of physicians are still trapped.</p>
<p className="text-sm text-medical-gray">Seeing 2,500+ patients. Collecting 35%. Spending 20hrs on charts.</p>
</div>
</div>
</section>

<section className="relative py-32 bg-medical-dark overflow-hidden">
<div className="absolute inset-0 z-0 opacity-40">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1473187983305-f615310e7daa?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-br from-medical-blue/90 to-medical-teal/90 z-10"></div>
<div className="relative z-20 max-w-[1000px] mx-auto px-6 text-center text-white">
<iconify-icon className="mb-8 text-white/90" icon="solar:shield-star-linear" width="64"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">The Conversation Insurance Won't Let You Have</h2>
<p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12">
                PFAS in <span className="font-bold">45%</span> of water. <span className="font-bold">73%</span> ultra-processed food supply. <br className="hidden md:block"/>
                With 400-600 engaged patients, you can finally address the root causes.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
<div className="text-4xl font-bold mb-2">45%</div>
<div className="text-sm opacity-80">US tap water with PFAS</div>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
<div className="text-4xl font-bold mb-2">5g</div>
<div className="text-sm opacity-80">Microplastics consumed/week</div>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
<div className="text-4xl font-bold mb-2">$350</div>
<div className="text-sm opacity-80">Monthly fee patients pay</div>
</div>
</div>
<button className="bg-white text-medical-blue hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-all shadow-glow hover:scale-105">
                Learn Our Protocols
            </button>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1300px] mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[11px] font-bold text-medical-blue uppercase tracking-widest mb-4 block">Transformation Timeline</span>
<h2 className="text-4xl md:text-5xl font-bold text-medical-dark tracking-tight mb-4">8-14 Weeks to Freedom</h2>
<p className="text-xl text-medical-gray">Reduce panel by 75%. Increase time 4x. Achieve 200-400% ROI.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-medical-blue to-medical-green transform -translate-y-1/2 z-0"></div>

<div className="bg-white border border-gray-200 p-8 pt-12 rounded-[28px] relative hover:-translate-y-2 transition-transform shadow-soft z-10">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-medical-blue rounded-full flex items-center justify-center font-bold text-medical-blue">1</div>
<div className="text-center mb-4"><span className="bg-blue-50 text-medical-blue text-[10px] font-bold px-2 py-1 rounded uppercase">Weeks 1-2</span></div>
<h3 className="text-xl font-bold text-center mb-4">Discovery</h3>
<ul className="text-sm text-medical-gray space-y-3">
<li className="flex gap-2"><iconify-icon className="text-medical-blue" icon="solar:check-circle-linear"></iconify-icon> Financial Modeling</li>
<li className="flex gap-2"><iconify-icon className="text-medical-blue" icon="solar:check-circle-linear"></iconify-icon> 2,500 → 450 Plan</li>
<li className="flex gap-2"><iconify-icon className="text-medical-blue" icon="solar:check-circle-linear"></iconify-icon> ROI Projection</li>
</ul>
</div>

<div className="bg-white border border-gray-200 p-8 pt-12 rounded-[28px] relative hover:-translate-y-2 transition-transform shadow-soft z-10">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-medical-green rounded-full flex items-center justify-center font-bold text-medical-green">2</div>
<div className="text-center mb-4"><span className="bg-green-50 text-medical-green text-[10px] font-bold px-2 py-1 rounded uppercase">Weeks 3-4</span></div>
<h3 className="text-xl font-bold text-center mb-4">Design</h3>
<ul className="text-sm text-medical-gray space-y-3">
<li className="flex gap-2"><iconify-icon className="text-medical-green" icon="solar:check-circle-linear"></iconify-icon> Patient Comms</li>
<li className="flex gap-2"><iconify-icon className="text-medical-green" icon="solar:check-circle-linear"></iconify-icon> Staff Roles</li>
<li className="flex gap-2"><iconify-icon className="text-medical-green" icon="solar:check-circle-linear"></iconify-icon> Tech Selection</li>
</ul>
</div>

<div className="bg-white border border-gray-200 p-8 pt-12 rounded-[28px] relative hover:-translate-y-2 transition-transform shadow-soft z-10">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-medical-teal rounded-full flex items-center justify-center font-bold text-medical-teal">3</div>
<div className="text-center mb-4"><span className="bg-teal-50 text-medical-teal text-[10px] font-bold px-2 py-1 rounded uppercase">Weeks 5-8</span></div>
<h3 className="text-xl font-bold text-center mb-4">Launch</h3>
<ul className="text-sm text-medical-gray space-y-3">
<li className="flex gap-2"><iconify-icon className="text-medical-teal" icon="solar:check-circle-linear"></iconify-icon> Equipment Install</li>
<li className="flex gap-2"><iconify-icon className="text-medical-teal" icon="solar:check-circle-linear"></iconify-icon> Staff Training</li>
<li className="flex gap-2"><iconify-icon className="text-medical-teal" icon="solar:check-circle-linear"></iconify-icon> Soft Launch</li>
</ul>
</div>

<div className="bg-white border border-gray-200 p-8 pt-12 rounded-[28px] relative hover:-translate-y-2 transition-transform shadow-soft z-10">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-medical-gray rounded-full flex items-center justify-center font-bold text-medical-gray">4</div>
<div className="text-center mb-4"><span className="bg-gray-100 text-medical-gray text-[10px] font-bold px-2 py-1 rounded uppercase">Ongoing</span></div>
<h3 className="text-xl font-bold text-center mb-4">Growth</h3>
<ul className="text-sm text-medical-gray space-y-3">
<li className="flex gap-2"><iconify-icon className="text-medical-gray" icon="solar:check-circle-linear"></iconify-icon> Panel Maintenance</li>
<li className="flex gap-2"><iconify-icon className="text-medical-gray" icon="solar:check-circle-linear"></iconify-icon> Revenue Ops</li>
<li className="flex gap-2"><iconify-icon className="text-medical-gray" icon="solar:check-circle-linear"></iconify-icon> 24/7 Support</li>
</ul>
</div>
</div>
<div className="mt-16 bg-gradient-to-r from-[#F5F5F7] to-white border-l-4 border-medical-green p-8 rounded-r-2xl max-w-3xl mx-auto">
<p className="text-medical-dark text-lg italic">"Most physicians feel the shift by Week 6. By Week 12, going back to 15-minute visits is unimaginable. It's a proven path."</p>
</div>
</div>
</section>

<section className="py-24 bg-medical-light" id="pricing">
<div className="max-w-[1300px] mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-4">Transparent Investment</h2>
<p className="text-xl text-medical-gray">No hidden fees. 200-400% ROI within 18-24 months.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-white rounded-[32px] p-8 border border-gray-200 border-t-[6px] border-t-medical-green shadow-soft hover:shadow-strong transition-all">
<span className="inline-block px-3 py-1 rounded-full bg-green-50 text-medical-green text-[10px] font-bold uppercase tracking-wider mb-4">Launch</span>
<div className="mb-6">
<span className="text-4xl font-bold text-medical-dark">$25k-40k</span>
<p className="text-sm text-medical-gray mt-1">Initial investment</p>
</div>
<p className="text-sm font-medium text-medical-dark mb-6">For 300-600 Patient Panels</p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3 text-sm text-medical-gray"><iconify-icon className="text-medical-green shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Supplement Catalog</div>
<div className="flex items-start gap-3 text-sm text-medical-gray"><iconify-icon className="text-medical-green shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 1-2 Medical Devices</div>
<div className="flex items-start gap-3 text-sm text-medical-gray"><iconify-icon className="text-medical-green shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Basic AI Platform</div>
</div>
<div className="bg-green-50 rounded-xl p-4 text-center mb-6">
<div className="text-xs font-bold text-medical-green uppercase">Typical Return</div>
<div className="text-xl font-bold text-medical-dark">200% ROI</div>
<div className="text-xs text-medical-gray">in 18 months</div>
</div>
<button className="w-full py-3 border border-medical-green text-medical-green rounded-xl font-semibold hover:bg-green-50 transition-colors">Explore Foundation</button>
</div>

<div className="bg-white rounded-[32px] p-10 border border-gray-200 border-t-[6px] border-t-medical-blue shadow-strong transform md:-translate-y-4 relative z-10">
<div className="absolute top-0 right-0 bg-medical-blue text-white text-[10px] font-bold px-4 py-2 rounded-bl-xl rounded-tr-[26px]">MOST POPULAR</div>
<span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-medical-blue text-[10px] font-bold uppercase tracking-wider mb-4">Transformation</span>
<div className="mb-6">
<span className="text-5xl font-bold text-medical-dark">$50k-85k</span>
<p className="text-sm text-medical-gray mt-1">Initial investment</p>
</div>
<p className="text-sm font-medium text-medical-dark mb-6">600-1,200 → 400-600 Patients</p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3 text-sm text-medical-dark font-medium"><iconify-icon className="text-medical-blue shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Full Supplement Catalog</div>
<div className="flex items-start gap-3 text-sm text-medical-dark font-medium"><iconify-icon className="text-medical-blue shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 3-4 Medical Devices</div>
<div className="flex items-start gap-3 text-sm text-medical-dark font-medium"><iconify-icon className="text-medical-blue shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Complete AI Suite</div>
<div className="flex items-start gap-3 text-sm text-medical-dark font-medium"><iconify-icon className="text-medical-blue shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Community Forums</div>
</div>
<div className="bg-blue-50 rounded-xl p-4 text-center mb-6">
<div className="text-xs font-bold text-medical-blue uppercase">Typical Return</div>
<div className="text-2xl font-bold text-medical-dark">300% ROI</div>
<div className="text-xs text-medical-gray">$150-250k annual revenue</div>
</div>
<button className="w-full py-4 bg-medical-blue text-white rounded-xl font-semibold hover:bg-[#005FAB] transition-colors shadow-lg">Choose Professional</button>
</div>

<div className="bg-white rounded-[32px] p-8 border border-gray-200 border-t-[6px] border-t-medical-teal shadow-soft hover:shadow-strong transition-all">
<span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-medical-teal text-[10px] font-bold uppercase tracking-wider mb-4">Multi-Provider</span>
<div className="mb-6">
<span className="text-4xl font-bold text-medical-dark">$100k+</span>
<p className="text-sm text-medical-gray mt-1">Initial investment</p>
</div>
<p className="text-sm font-medium text-medical-dark mb-6">1,500+ Patients per Provider</p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3 text-sm text-medical-gray"><iconify-icon className="text-medical-teal shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Everything in Professional</div>
<div className="flex items-start gap-3 text-sm text-medical-gray"><iconify-icon className="text-medical-teal shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Custom EHR Integration</div>
<div className="flex items-start gap-3 text-sm text-medical-gray"><iconify-icon className="text-medical-teal shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Multi-Location Setup</div>
</div>
<div className="bg-teal-50 rounded-xl p-4 text-center mb-6">
<div className="text-xs font-bold text-medical-teal uppercase">Typical Return</div>
<div className="text-xl font-bold text-medical-dark">400% ROI</div>
<div className="text-xs text-medical-gray">$400-800k annual revenue</div>
</div>
<button className="w-full py-3 border border-medical-teal text-medical-teal rounded-xl font-semibold hover:bg-teal-50 transition-colors">Explore Complete</button>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-lg text-medical-dark font-medium">Can you afford NOT to make this change?</p>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="contact">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-7">
<h2 className="text-4xl md:text-5xl font-bold text-medical-dark mb-12">Five Years from Now...</h2>

<div className="mb-12 opacity-80 hover:opacity-100 transition-opacity">
<span className="bg-red-50 text-medical-red text-[10px] font-bold px-2 py-1 rounded uppercase mb-3 inline-block">95% Choose This</span>
<h3 className="text-2xl font-semibold text-medical-red mb-4">Stay the Course</h3>
<ul className="space-y-3 text-medical-gray">
<li className="flex gap-3"><iconify-icon className="text-medical-red shrink-0" icon="solar:danger-triangle-linear"></iconify-icon> 2,500+ transactional patients</li>
<li className="flex gap-3"><iconify-icon className="text-medical-red shrink-0" icon="solar:danger-triangle-linear"></iconify-icon> 35-40% collection, 65% overhead</li>
<li className="flex gap-3"><iconify-icon className="text-medical-red shrink-0" icon="solar:danger-triangle-linear"></iconify-icon> Retirement delayed, burnout increases</li>
</ul>
</div>
<div className="h-px bg-gray-100 w-full mb-12"></div>

<div>
<span className="bg-green-50 text-medical-green text-[10px] font-bold px-2 py-1 rounded uppercase mb-3 inline-block">3-5% Choose This</span>
<h3 className="text-2xl font-semibold text-medical-green mb-4">Transform Now</h3>
<ul className="space-y-3 text-medical-dark font-medium">
<li className="flex gap-3"><iconify-icon className="text-medical-green shrink-0" icon="solar:check-circle-linear"></iconify-icon> 400-600 engaged partners</li>
<li className="flex gap-3"><iconify-icon className="text-medical-green shrink-0" icon="solar:check-circle-linear"></iconify-icon> 90-95% direct collection</li>
<li className="flex gap-3"><iconify-icon className="text-medical-green shrink-0" icon="solar:check-circle-linear"></iconify-icon> Income +60%, Work -20%</li>
</ul>
</div>
</div>

<div className="lg:col-span-5 sticky top-24">
<div className="bg-gradient-to-br from-[#0071CE] to-[#00A4BD] rounded-[32px] p-8 md:p-10 shadow-2xl text-white">
<h3 className="text-3xl font-bold mb-6">Calculate Your Transformation</h3>
<div className="grid grid-cols-2 gap-4 mb-8 text-sm opacity-90">
<div>
<div className="font-bold text-lg">2,500 → 450</div>
<div>Patients</div>
</div>
<div>
<div className="font-bold text-lg">+$150k</div>
<div>Revenue</div>
</div>
</div>
<form className="space-y-4">
<div>
<input className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition-colors" placeholder="Dr. Name" type="text"/>
</div>
<div>
<input className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition-colors" placeholder="Email Address" type="email"/>
</div>
<div>
<input className="w-full bg-white/10 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition-colors" placeholder="Phone" type="tel"/>
</div>
<button className="w-full bg-white text-medical-blue font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2" type="submit">
<iconify-icon icon="solar:calculator-linear" width="20"></iconify-icon> Show Me My Numbers
                            </button>
</form>
<div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs opacity-75">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> No hidden fees</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Zero sales pressure</span>
</div>
<p className="mt-6 text-xs italic opacity-70 leading-relaxed">
                            Only 3-5% of physicians have transitioned. 95% are still trapped. Which group will you join?
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-medical-dark text-white pt-24 pb-12">
<div className="max-w-[1300px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-5">
<span className="text-xl font-semibold tracking-tight">Elevated Wellness</span>
<p className="text-white/60 text-sm mt-2">Transforming 2,500 to 400-600, One Practice at a Time</p>
<p className="mt-8 text-white/70 leading-relaxed max-w-sm">
                        We exist to free physicians from the broken system—where 35% collection is the norm—so they can serve 400 engaged patients at 95% collection and actually practice medicine.
                    </p>
</div>

<div className="md:col-span-3">
<h4 className="font-bold mb-6">Market Intel</h4>
<ul className="space-y-3 text-sm text-white/70">
<li>Only 3-5% have transitioned</li>
<li>95% still trapped</li>
<li>2,500+ patients typical</li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="font-bold mb-6">Solution</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-white" href="#">Products</a></li>
<li><a className="hover:text-white" href="#">Equipment</a></li>
<li><a className="hover:text-white" href="#">AI Operations</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="font-bold mb-6">Contact</h4>
<ul className="space-y-3 text-sm text-white/70">
<li>800-555-0123</li>
<li>hello@elevated.com</li>
<li>Austin, TX</li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
<p>© 2024 Elevated Wellness Consultants.</p>
<p>Built by physicians who chose the 3-5%.</p>
</div>
</div>
</footer>


    </>
  );
}
