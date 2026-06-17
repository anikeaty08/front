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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c579927e-c52a-42e7-a64e-1cd069029817_320w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-emerald-800 rounded-lg flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<a className="text-xl tracking-tighter font-semibold text-emerald-900 leading-tight flex flex-col justify-center" href="#">
<span>BSMHM</span>
</a>
</div>
<div className="hidden lg:flex space-x-6">
<a className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors" href="#departments">Academics</a>
<a className="text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors flex items-center gap-1" href="#donate">
<iconify-icon icon="solar:heart-linear"></iconify-icon> Orphan Care
                    </a>
<a className="text-sm font-medium text-gray-600 hover:text-emerald-700 transition-colors" href="#portal">Digital Portal</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex text-gray-600 hover:text-emerald-800 text-sm font-medium items-center gap-1.5 transition-colors" href="#portal">
<iconify-icon className="text-lg" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Parent Login
                    </a>
<a className="hidden sm:flex bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 shadow-sm items-center gap-1.5" href="#donate">
                        Donate
                    </a>
<a className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-5 py-2 rounded-full transition-all duration-200 shadow-sm flex items-center gap-1.5" href="#admission">
                        Admission
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<button className="lg:hidden text-gray-600 hover:text-emerald-800 ml-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-emerald-900 text-white">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-emerald-800 blur-3xl opacity-50"></div>
<div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-emerald-950 blur-3xl opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-800/50 border border-emerald-700/50 backdrop-blur-sm text-xs font-medium text-amber-400 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
</span>
                Admissions for Session 2024-25 are now open
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
                বালিঘোনা শাহ্ মাহমুদিয়া <br className="hidden md:block"/>
<span className="text-emerald-200">হাফেজী মাদ্রাসা এতিমখান ও লিল্লাহ বোর্ডিং </span>
</h1>
<p className="mt-4 text-base sm:text-lg text-emerald-100/80 max-w-2xl mx-auto mb-10 font-medium tracking-tight leading-relaxed">
                A center of excellence for Hifzul Qur'an, modern foundational education, and compassionate orphan care. Nurturing the next generation with beautiful character and digital transparency.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
<a className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2" href="#admission">
                    Apply Online
                    <iconify-icon className="text-lg" icon="solar:document-add-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white hover:bg-gray-50 text-emerald-900 text-sm font-medium px-8 py-3.5 rounded-full transition-all duration-200 flex items-center justify-center gap-2" href="#donate">
                    Sponsor an Orphan
                    <iconify-icon className="text-lg text-amber-500" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="max-w-xl mx-auto bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-left">
<div className="flex justify-between items-end mb-2">
<div>
<h4 className="text-xs font-semibold text-emerald-100 uppercase tracking-wider mb-1">Ramadan Orphan Fund 2024</h4>
<div className="text-2xl font-semibold tracking-tight text-white">৳ 50,000</div>
</div>
<div className="text-xs font-medium text-emerald-200 mb-1">Target: ৳ 1,000,000</div>
</div>
<div className="w-full bg-black/30 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-amber-400 h-1.5 rounded-full relative" style={{width: '45%'}}>
<div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 animate-pulse"></div>
</div>
</div>
<div className="flex justify-between text-[10px] text-emerald-200/70 font-medium">
<span>124 Donors Supported</span>
<span>45% Completed</span>
</div>
</div>
</div>
</section>

<section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
<div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
<div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-emerald-700" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Hifzul Qur'an</h3>
<p className="text-xs text-gray-500 leading-relaxed">Dedicated memorization program with specialized Ustadhs ensuring perfect Tajweed and retention.</p>
</div>
<div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
<div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-amber-600" icon="solar:pen-new-round-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Noorani Section</h3>
<p className="text-xs text-gray-500 leading-relaxed">Foundational Arabic reading alongside basic Bengali, English, and Math for young beginners.</p>
</div>
<div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 group">
<div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-emerald-700" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Orphanage &amp; Care</h3>
<p className="text-xs text-gray-500 leading-relaxed">Providing free education, nutritious food, and a loving residential environment for underprivileged children.</p>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gray-200 border border-gray-100 shadow-sm flex items-center justify-center group">
<div className="absolute inset-0 bg-emerald-900/5 mix-blend-multiply group-hover:bg-transparent transition-colors duration-500"></div>
<iconify-icon className="text-8xl text-gray-300" icon="solar:buildings-linear" strokeWidth="1"></iconify-icon>
</div>

<div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 max-w-[200px] hidden sm:block">
<div className="text-3xl font-semibold tracking-tight text-emerald-700 mb-1">100%</div>
<div className="text-xs text-gray-500 font-medium">Of donations go directly to student care &amp; operations.</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-emerald-700 text-xs font-semibold tracking-widest uppercase mb-3">Institution Overview</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                        Preserving the Divine Words for Generations
                    </h3>
<div className="space-y-4 text-sm text-gray-600 leading-relaxed mb-8">
<p>
                            Balighona Shah Mahmudia Hafezi Madrasa was established with the noble intention of creating pure bearers of the Holy Qur'an, focusing especially on orphans and those unable to afford education.
                        </p>
<p>
                            Our modern approach combines traditional memorization techniques with psychological understanding, ensuring learning is an act of joy. We emphasize Tarbiyah (moral upbringing) while integrating digital transparency for parents and donors worldwide.
                        </p>
</div>
<div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4 items-start">
<iconify-icon className="text-3xl text-amber-200 flex-shrink-0" icon="solar:quote-left-linear"></iconify-icon>
<div>
<p className="text-xs sm:text-sm text-gray-700 italic font-medium mb-2 leading-relaxed">"Our vision is to build a smart, transparent institution where every orphan feels the warmth of family, and every student excels in both Deen and character."</p>
<p className="text-xs font-semibold text-gray-900">— Message from Muhtamim</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-emerald-900 border-y border-emerald-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-emerald-800/50">
<div className="text-center px-2">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-400 mb-1">50+</div>
<div className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-emerald-100/80">Total Students</div>
</div>
<div className="text-center px-2">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">23</div>
<div className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-emerald-100/80">Orphans Supported</div>
</div>
<div className="text-center px-2">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-amber-400 mb-1">120+</div>
<div className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-emerald-100/80">Huffaz Graduated</div>
</div>
<div className="text-center px-2">
<div className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-1">৳50000</div>
<div className="text-[10px] md:text-xs font-medium uppercase tracking-wider text-emerald-100/80">Monthly Avg Expense</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 overflow-hidden relative" id="portal">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12 max-w-2xl mx-auto">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-emerald-300 mb-4">
<iconify-icon icon="solar:smartphone-update-linear"></iconify-icon> Smart Digital Management
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Parent Dashboard</h2>
<p className="text-sm text-gray-400">Track your child's daily progress, meals, health, and fee status in real-time from anywhere in the world.</p>
</div>

<div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-gray-800">

<div className="w-full md:w-64 bg-gray-50 border-r border-gray-200 p-4 hidden md:block">
<div className="flex items-center gap-3 mb-8 px-2">
<div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold text-xs">P</div>
<div>
<div className="text-xs font-semibold text-gray-900">Guardian Portal</div>
<div className="text-[10px] text-gray-500">Ahmed Family</div>
</div>
</div>
<nav className="space-y-1">
<div className="flex items-center gap-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg text-xs font-medium">
<iconify-icon icon="solar:widget-linear"></iconify-icon> Overview
                        </div>
<div className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-100">
<iconify-icon icon="solar:book-bookmark-linear"></iconify-icon> Academic Progress
                        </div>
<div className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-100">
<iconify-icon icon="solar:wallet-linear"></iconify-icon> Fee Management
                        </div>
<div className="flex items-center gap-2 px-3 py-2 text-gray-600 rounded-lg text-xs font-medium hover:bg-gray-100">
<iconify-icon icon="solar:bell-linear"></iconify-icon> Notices &amp; Events
                        </div>
</nav>
</div>

<div className="flex-1 p-6 bg-white">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Abdullah's Overview</h3>
<p className="text-[10px] text-gray-500">Student ID: #BSM-2024-104</p>
</div>
<span className="bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md text-[10px] font-semibold">Present Today</span>
</div>

<div className="grid grid-cols-3 gap-4 mb-6">
<div className="p-3 border border-gray-100 rounded-xl bg-gray-50/50">
<div className="text-[10px] text-gray-500 font-medium mb-1 flex items-center gap-1"><iconify-icon icon="solar:book-linear"></iconify-icon> Today's Sabak</div>
<div className="text-sm font-semibold text-gray-900">Surah Yaseen (Ayat 1-12)</div>
<div className="text-[10px] text-emerald-600 mt-1 font-medium">Grade: Excellent</div>
</div>
<div className="p-3 border border-gray-100 rounded-xl bg-gray-50/50">
<div className="text-[10px] text-gray-500 font-medium mb-1 flex items-center gap-1"><iconify-icon icon="solar:calendar-linear"></iconify-icon> Next Vacation</div>
<div className="text-sm font-semibold text-gray-900">Nov 15 - Nov 20</div>
<div className="text-[10px] text-amber-600 mt-1 font-medium">In 12 Days</div>
</div>
<div className="p-3 border border-gray-100 rounded-xl bg-gray-50/50">
<div className="text-[10px] text-gray-500 font-medium mb-1 flex items-center gap-1"><iconify-icon icon="solar:cup-hot-linear"></iconify-icon> Today's Meal</div>
<div className="text-sm font-semibold text-gray-900">Beef Tehari, Dal, Fruit</div>
<div className="text-[10px] text-gray-500 mt-1 font-medium">View Weekly Menu</div>
</div>
</div>

<div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
<iconify-icon icon="solar:bill-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-gray-900">October Fee Pending</div>
<div className="text-[10px] text-gray-600">Due by Oct 10th. Amount: ৳ 3,500</div>
</div>
</div>
<button className="bg-amber-500 text-white text-xs font-medium px-4 py-1.5 rounded-lg hover:bg-amber-600 shadow-sm transition-colors">
                            Pay via bKash
                        </button>
</div>
</div>
</div>
<div className="text-center mt-8 text-sm">
<a className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center justify-center gap-1 transition-colors" href="#">
                    Guardian Login <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="donate">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-emerald-700 text-xs font-semibold tracking-widest uppercase mb-3">Support the Mission</h2>
<h3 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Sponsor a Bearer of the Qur'an</h3>
<p className="text-sm text-gray-600 max-w-2xl mx-auto">
                    Your contribution provides free lodging, nutritious food, clothing, and Islamic education to orphans. You can set up a monthly recurring sponsorship or make a one-time donation.
                </p>
</div>

<div className="flex justify-center gap-2 mb-10">
<button className="px-5 py-2 rounded-full bg-emerald-900 text-white text-xs font-medium shadow-sm">Sponsor Orphan</button>
<button className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs font-medium transition-colors">Zakat Fund</button>
<button className="px-5 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs font-medium transition-colors">Lillah / Sadaqah</button>
<button className="hover:bg-gray-200 transition-colors text-xs font-medium text-gray-600 bg-gray-100 rounded-full pt-2 pr-5 pb-2 pl-5">Madrasa Construction</button>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 relative overflow-hidden group">
<div className="absolute top-0 right-0 bg-emerald-100 text-emerald-700 text-[9px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Needs Sponsor</div>
<div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400 group-hover:text-emerald-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:user-bold-duotone"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900">Student Profile #104</h4>
<p className="text-[11px] text-gray-500 mb-4">Hifz Dept • Age 9 • Orphan</p>
<div className="flex justify-between items-end mb-4 border-t border-gray-200/60 pt-3">
<span className="text-xs text-gray-600 font-medium">Monthly Cost</span>
<span className="text-sm font-semibold text-emerald-700">৳ 3,000</span>
</div>
<button className="w-full bg-white border border-gray-300 text-gray-700 text-xs font-semibold py-2.5 rounded-xl hover:border-emerald-500 hover:text-emerald-700 transition-all flex items-center justify-center gap-1">
                        Sponsor Now
                    </button>
</div>

<div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 relative overflow-hidden group">
<div className="absolute top-0 right-0 bg-amber-100 text-amber-700 text-[9px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Partially Sponsored</div>
<div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400 group-hover:text-emerald-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:user-bold-duotone"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900">Student Profile #142</h4>
<p className="text-[11px] text-gray-500 mb-4">Noorani Dept • Age 6 • Orphan</p>
<div className="flex justify-between items-end mb-4 border-t border-gray-200/60 pt-3">
<span className="text-xs text-gray-600 font-medium">Remaining</span>
<span className="text-sm font-semibold text-amber-600">৳ 1,500</span>
</div>
<button className="w-full bg-white border border-gray-300 text-gray-700 text-xs font-semibold py-2.5 rounded-xl hover:border-amber-500 hover:text-amber-700 transition-all flex items-center justify-center gap-1">
                        Complete Support
                    </button>
</div>

<div className="bg-gray-50 rounded-2xl p-5 border border-gray-200 relative overflow-hidden group">
<div className="absolute top-0 right-0 bg-emerald-100 text-emerald-700 text-[9px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Needs Sponsor</div>
<div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400 group-hover:text-emerald-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:user-bold-duotone"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900">Student Profile #089</h4>
<p className="text-[11px] text-gray-500 mb-4">Hifz Dept • Age 11 • Poor Family</p>
<div className="flex justify-between items-end mb-4 border-t border-gray-200/60 pt-3">
<span className="text-xs text-gray-600 font-medium">Monthly Cost</span>
<span className="text-sm font-semibold text-emerald-700">৳ 3,000</span>
</div>
<button className="w-full bg-white border border-gray-300 text-gray-700 text-xs font-semibold py-2.5 rounded-xl hover:border-emerald-500 hover:text-emerald-700 transition-all flex items-center justify-center gap-1">
                        Sponsor Now
                    </button>
</div>

<div className="bg-emerald-900 rounded-2xl p-5 border border-emerald-800 text-white flex flex-col justify-center text-center">
<div className="w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
<iconify-icon className="text-xl text-amber-400" icon="solar:hand-heart-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold tracking-tight mb-2">General Donation</h4>
<p className="text-[11px] text-emerald-200/80 mb-5">Contribute any amount to the general fund for food and operations.</p>
<button className="w-full bg-amber-500 text-emerald-950 text-xs font-semibold py-2.5 rounded-xl hover:bg-amber-400 transition-colors">
                        Donate Any Amount
                    </button>
</div>
</div>

<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="">
<h4 className="text-sm font-semibold text-gray-900 mb-1">Global Payment Gateway Enabled</h4>
<p className="text-xs text-gray-500">We accept mobile banking, bank transfers, and international cards securely.</p>
</div>
<div className="flex flex-wrap gap-3 items-center opacity-70">
<span className="text-xs font-semibold text-pink-600 bg-pink-50 px-2 py-1 rounded">bKash</span>
<span className="text-xs font-semibold text-orange-600 bg-orange-50 px-2 py-1 rounded">Nagad</span>
<span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded">Rocket</span>
<span className="text-xs font-semibold text-blue-800 bg-blue-50 px-2 py-1 border border-blue-100 rounded">VISA / Master</span>
<span className="text-xs font-semibold text-blue-500 bg-blue-50 px-2 py-1 border border-blue-100 rounded">Stripe / Wise</span>
</div>
</div>
<div className="mt-4 text-center">
<a className="text-xs font-medium text-emerald-700 hover:underline inline-flex items-center gap-1" href="#">
<iconify-icon icon="solar:document-linear"></iconify-icon> Download Latest Transparency &amp; Expense Report (PDF)
                 </a>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100" id="admission">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
<div className="bg-emerald-900 p-8 text-center relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl opacity-50 -mr-20 -mt-20 pointer-events-none"></div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2 relative z-10">Online Admission Application</h3>
<p className="text-sm text-emerald-100 relative z-10">Session 2024-2025 • Noorani &amp; Hifz Departments</p>
</div>
<div className="p-8">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5">Student's Full Name</label>
<input className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-400 bg-gray-50 focus:bg-white" placeholder="Abdullah Al Mahmud" type="text"/>
</div>

<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5">Date of Birth</label>
<input className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-gray-700 bg-gray-50 focus:bg-white" type="date"/>
</div>

<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5">Guardian's Name</label>
<input className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-400 bg-gray-50 focus:bg-white" placeholder="Father or Mother's Name" type="text"/>
</div>

<div>
<label className="block text-xs font-semibold text-gray-700 mb-1.5">Active Phone / WhatsApp</label>
<input className="w-full text-sm px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder:text-gray-400 bg-gray-50 focus:bg-white" placeholder="+880 1XXX XXXXXX" type="tel"/>
</div>
</div>
<hr className="border-gray-100"/>

<div>
<label className="block text-xs font-semibold text-gray-700 mb-3">Select Department</label>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<label className="relative flex cursor-pointer rounded-xl border bg-white p-4 shadow-sm focus:outline-none border-emerald-500 ring-1 ring-emerald-500 bg-emerald-50/30">
<input checked="" className="sr-only" name="dept" type="radio" value="hifz"/>
<span className="flex flex-1">
<span className="flex flex-col">
<span className="block text-sm font-semibold text-gray-900">Hifzul Qur'an</span>
<span className="mt-1 flex items-center text-[11px] text-gray-500">For students aged 8+</span>
</span>
</span>
<iconify-icon className="text-emerald-600 text-xl" icon="solar:check-circle-bold"></iconify-icon>
</label>
<label className="relative flex cursor-pointer rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:bg-gray-50 focus:outline-none">
<input className="sr-only" name="dept" type="radio" value="noorani"/>
<span className="flex flex-1">
<span className="flex flex-col">
<span className="block text-sm font-medium text-gray-900">Noorani Section</span>
<span className="mt-1 flex items-center text-[11px] text-gray-500">For beginners aged 5-7</span>
</span>
</span>
<iconify-icon className="text-gray-300 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</label>
</div>
</div>
<div className="flex items-center gap-2 pt-2">
<input className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500" id="residential" type="checkbox"/>
<label className="text-xs text-gray-600 font-medium" htmlFor="residential">Apply for Residential / Boarding Facility</label>
</div>
<div className="pt-4">
<button className="w-full bg-emerald-800 hover:bg-emerald-900 text-white text-sm font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm flex items-center justify-center gap-2" type="button">
                                Submit Application <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
<p className="text-[10px] text-gray-400 text-center mt-3">An SMS will be sent with further interview instructions and fee details.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-emerald-800 rounded flex items-center justify-center text-white">
<iconify-icon className="text-base" icon="solar:book-bookmark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg tracking-tighter font-semibold text-emerald-900">BSMHM Platform</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed mb-6">
                        A modern Islamic educational institution dedicated to nurturing righteous individuals and caring for orphans through transparent digital systems.
                    </p>
<div className="flex gap-3">
<span className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded text-gray-600">EN</span>
<span className="text-xs font-medium px-2 py-1 text-gray-400 hover:text-gray-600 cursor-pointer border border-transparent hover:border-gray-200 rounded">BN</span>
<span className="text-xs font-medium px-2 py-1 text-gray-400 hover:text-gray-600 cursor-pointer border border-transparent hover:border-gray-200 rounded">AR</span>
</div>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900 mb-6">Platform Links</h4>
<ul className="space-y-3 text-sm text-gray-600">
<li><a className="hover:text-emerald-700 transition-colors flex items-center gap-1.5" href="#portal"><iconify-icon icon="solar:lock-password-linear"></iconify-icon> Guardian Login</a></li>
<li><a className="hover:text-emerald-700 transition-colors flex items-center gap-1.5" href="#"><iconify-icon icon="solar:shield-keyhole-linear"></iconify-icon> Admin/Staff Login</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#donate">Sponsor an Orphan</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#">Transparency Reports</a></li>
<li><a className="hover:text-emerald-700 transition-colors" href="#admission">Online Admission Form</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900 mb-6">Contact &amp; Support</h4>
<ul className="space-y-4 text-sm text-gray-600">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-700 text-lg flex-shrink-0 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>Balighona, Post Office, Upazila, District, Bangladesh</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-700 text-lg flex-shrink-0" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<span>+880 1700 000000 <span className="text-[10px] text-gray-400 ml-1">(24/7 Support)</span></span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-700 text-lg flex-shrink-0" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span>info@bsmhm.edu.bd</span>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold tracking-tight text-gray-900 mb-6">Mobile Ready</h4>
<div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
<iconify-icon className="text-3xl text-gray-400 mb-2" icon="solar:smartphone-2-linear"></iconify-icon>
<p className="text-[11px] text-gray-500 leading-tight mb-3">Access the Parent Dashboard easily on any mobile device.</p>
<div className="text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">PWA Supported</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-100 gap-4">
<p className="text-[11px] text-gray-400">
                    © 2024 Balighona Shah Mahmudia Hafezi Madrasa &amp; Orphanage Platform. All rights reserved. Secure Cloud Storage active.
                </p>
<a className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 px-4 py-2 rounded-full text-xs font-semibold transition-colors border border-[#25D366]/20" href="#">
<iconify-icon className="text-base" icon="solar:whatsapp-linear" strokeWidth="2"></iconify-icon>
                    Chat on WhatsApp
                </a>
</div>
</div>
</footer>


ী
    </>
  );
}
