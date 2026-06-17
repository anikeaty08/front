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



        lucide.createIcons({
            strokeWidth: 1.5
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
      

<div className="fixed inset-0 z-[-1] flex justify-center pointer-events-none">
<div className="absolute top-[-20%] w-[100%] h-[50%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#0A0A0A]/0 to-[#0A0A0A] blur-3xl opacity-50"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.05] bg-[#0A0A0A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-md bg-white text-black font-semibold tracking-tighter text-base">
                    SS
                </div>
<span className="text-white font-medium tracking-tight text-base">Sun Stalwart</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium">
<a className="text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#compliance">Compliance</a>
<a className="hover:text-white transition-colors" href="#leadership">Leadership</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div>
<button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-colors flex items-center gap-2">
                    Request Quote
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</nav>

<header className="pt-32 pb-16 md:pt-48 md:pb-24 px-6 border-b border-white/[0.05] relative overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-8 bg-indigo-500"></span>
<span className="text-sm font-medium text-indigo-400 tracking-widest uppercase">Company Overview</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white max-w-3xl leading-tight mb-8">
                The pinnacle of <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">reliability</span> in security services.
            </h1>
<p className="text-lg md:text-xl max-w-2xl leading-relaxed text-slate-400">
                Security and safety is our utmost priority. We provide unrivaled protection to businesses operating in the public and private sectors.
            </p>
</div>
</header>

<section className="py-24 px-6 relative" id="leadership">
<div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-7 space-y-12">
<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">
                        Founded in 2020 with a commitment to excellence.
                    </h2>
<div className="space-y-6 text-base leading-relaxed text-slate-400">
<p>
                            We have obtained regulatory approval from the Home Ministry of Malaysia in the year 2022 and are formally registered under the Ministry of Finance (MOF) Malaysia. The formation of this organization is focused on adding finer quality in the ever-evolving security industry with our extensive combined expertise.
                        </p>
<p>
                            We aim to strive to greater heights as per regulatory and industrial standards by providing unrivaled protection. Sun Stalwart Security Services has achieved much success through building on its policy of integrity, credibility, and partnership with all its clients.
                        </p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/[0.05]">
<div>
<div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-indigo-400" data-lucide="users"></i>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Investing in Workforce</h3>
<p className="text-base text-slate-500">
                            We recognize the importance of our team in providing outstanding service. We invest heavily in recruitment, training, and development.
                        </p>
</div>
<div>
<div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center mb-4">
<i className="w-5 h-5 text-indigo-400" data-lucide="target"></i>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Business Focus</h3>
<p className="text-base text-slate-500">
                            Our goal is to provide peace of mind, enabling clients to focus on achieving their business objectives rather than security worries.
                        </p>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-3xl blur-2xl"></div>
<div className="relative rounded-3xl border border-white/[0.08] bg-[#0A0A0A] overflow-hidden group p-2">
<div className="rounded-2xl overflow-hidden relative bg-white/[0.02] border border-white/[0.05] aspect-[4/5]">
<img alt="Chairman" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8">
<h3 className="text-xl font-medium text-white tracking-tight mb-1">LT JEN DATO SRI HJ ABDUL MUTALIB</h3>
<p className="text-sm text-indigo-400 uppercase tracking-widest font-medium mb-4">Chairman</p>
<p className="text-base text-slate-400 italic border-l-2 border-indigo-500/50 pl-4">
                                "Our foundation is absolute trust, ensuring our clients receive first-class service."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/[0.05] bg-white/[0.01]">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">
                    Organizational Structure
                </h2>
<p className="text-base text-slate-400 max-w-2xl mx-auto">
                    A dedicated and passionate group of leaders who drive our strategy and ensure operational excellence across all levels.
                </p>
</div>

<div className="w-full rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-8 md:p-16 relative overflow-hidden group cursor-crosshair">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10 flex flex-col items-center gap-8">

<div className="px-6 py-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md flex flex-col items-center">
<span className="text-xs text-indigo-400 font-medium tracking-widest uppercase mb-1">Chairman</span>
<span className="text-base text-white font-medium tracking-tight">Dato' Hj Norman</span>
</div>
<div className="w-px h-8 bg-white/20"></div>

<div className="px-6 py-4 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md flex flex-col items-center">
<span className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-1">Managing Director</span>
<span className="text-base text-white font-medium tracking-tight">Kavenshwari A/P Torairajo</span>
</div>
<div className="w-px h-8 bg-white/20"></div>
<div className="w-full max-w-3xl h-px bg-white/20 relative">
<div className="absolute left-0 top-0 w-px h-8 bg-white/20"></div>
<div className="absolute left-1/2 top-0 w-px h-8 bg-white/20 -translate-x-1/2"></div>
<div className="absolute right-0 top-0 w-px h-8 bg-white/20"></div>
</div>

<div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
<div className="flex flex-col items-center text-center">
<div className="px-6 py-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md w-full">
<span className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-1 block">Operation Director</span>
<div className="w-8 h-px bg-white/10 mx-auto my-3"></div>
<span className="text-sm text-slate-400 block mb-2">Senior Operation Manager</span>
<span className="text-sm text-slate-400 block">Operation Manager</span>
</div>
</div>
<div className="flex flex-col items-center text-center">
<div className="px-6 py-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md w-full">
<span className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-1 block">General Manager</span>
<span className="text-base text-white font-medium tracking-tight block">Nurul Ain Binti Zawawi</span>
<div className="w-8 h-px bg-white/10 mx-auto my-3"></div>
<span className="text-sm text-slate-400 block">Assistant Manager</span>
<span className="text-sm text-slate-400 block">Administrative Team</span>
</div>
</div>
<div className="flex flex-col items-center text-center">
<div className="px-6 py-4 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md w-full">
<span className="text-xs text-slate-500 font-medium tracking-widest uppercase mb-1 block">Managing Director</span>
<span className="text-base text-white font-medium tracking-tight block">Rahlee Bin Mohd Hashim</span>
<div className="w-8 h-px bg-white/10 mx-auto my-3"></div>
<span className="text-sm text-slate-400 block mb-2">Business Development</span>
<span className="text-sm text-slate-400 block">Marketing Executive</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[#0A0A0A]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
<button className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
<i className="w-4 h-4" data-lucide="download"></i>
                        Download Full Chart
                    </button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="compliance">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col items-center text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-300 mb-6 backdrop-blur-sm">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                    Fully Accredited &amp; Compliant
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    Licenses and Insurance
                </h2>
<p className="text-base md:text-lg text-slate-400 max-w-2xl">
                    Our operations are strictly governed by regulatory bodies. We maintain comprehensive licensing and insurance to guarantee absolute transparency and risk mitigation for our clients.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="group relative flex flex-col p-1 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent hover:from-white/[0.15] transition-colors duration-500">
<div className="relative h-full bg-[#0A0A0A] border border-white/[0.05] rounded-[23px] p-6 flex flex-col overflow-hidden">
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
<i className="w-6 h-6 text-blue-400" data-lucide="award"></i>
</div>
<span className="bg-white/5 border border-white/10 text-white text-[10px] px-2 py-1 rounded-full font-medium tracking-wide uppercase">Active</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 relative z-10">ISO 9001:2015</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow relative z-10">Certificate of Registration for Quality Management Systems.</p>

<div className="w-full aspect-[3/4] bg-white/[0.02] rounded-xl overflow-hidden relative border border-white/[0.05] group-hover:border-white/[0.15] transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>

<div className="absolute inset-4 bg-white/[0.03] border border-white/10 rounded shadow-sm p-4 flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="w-1/3 h-2 bg-slate-700/50 rounded"></div>
<div className="w-1/2 h-4 bg-blue-500/20 rounded mb-2"></div>
<div className="w-full h-1 bg-slate-700/30 rounded"></div>
<div className="w-5/6 h-1 bg-slate-700/30 rounded"></div>
<div className="w-full h-1 bg-slate-700/30 rounded"></div>
<div className="mt-auto flex justify-between">
<div className="w-8 h-8 rounded-full border border-slate-700/50"></div>
<div className="w-12 h-12 bg-blue-500/10 rounded-full"></div>
</div>
</div>
</div>
<a className="absolute inset-0 z-20" href="#"><span className="sr-only">View Certificate</span></a>
</div>
</div>

<div className="group relative flex flex-col p-1 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent hover:from-white/[0.15] transition-colors duration-500">
<div className="relative h-full bg-[#0A0A0A] border border-white/[0.05] rounded-[23px] p-6 flex flex-col overflow-hidden">
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
<i className="w-6 h-6 text-amber-400" data-lucide="shield"></i>
</div>
<span className="bg-white/5 border border-white/10 text-white text-[10px] px-2 py-1 rounded-full font-medium tracking-wide uppercase">Verified</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 relative z-10">PPKKM Member</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow relative z-10">Persatuan Perkhidmatan Kawalan Keselamatan Malaysia.</p>
<div className="w-full aspect-[3/4] bg-white/[0.02] rounded-xl overflow-hidden relative border border-white/[0.05] group-hover:border-white/[0.15] transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>
<div className="absolute inset-4 bg-amber-900/10 border border-amber-500/20 rounded shadow-sm p-4 flex flex-col items-center text-center gap-3 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="w-10 h-12 border-2 border-amber-500/30 rounded-t-full mt-2"></div>
<div className="w-3/4 h-3 bg-amber-500/20 rounded"></div>
<div className="w-full h-1 bg-slate-700/30 rounded mt-4"></div>
<div className="w-5/6 h-1 bg-slate-700/30 rounded"></div>
</div>
</div>
<a className="absolute inset-0 z-20" href="#"><span className="sr-only">View Certificate</span></a>
</div>
</div>

<div className="group relative flex flex-col p-1 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent hover:from-white/[0.15] transition-colors duration-500">
<div className="relative h-full bg-[#0A0A0A] border border-white/[0.05] rounded-[23px] p-6 flex flex-col overflow-hidden">
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
<i className="w-6 h-6 text-emerald-400" data-lucide="building-2"></i>
</div>
<span className="bg-white/5 border border-white/10 text-white text-[10px] px-2 py-1 rounded-full font-medium tracking-wide uppercase">Active</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 relative z-10">SSM Registration</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow relative z-10">Certificate of Incorporation of Private Company.</p>
<div className="w-full aspect-[3/4] bg-white/[0.02] rounded-xl overflow-hidden relative border border-white/[0.05] group-hover:border-white/[0.15] transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>
<div className="absolute inset-4 bg-white/[0.03] border border-white/10 rounded shadow-sm p-4 flex flex-col gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 bg-slate-700/50 rounded"></div>
<div className="w-8 h-8 border border-slate-700/50"></div>
</div>
<div className="w-full h-3 bg-emerald-500/20 rounded mb-2"></div>
<div className="w-full h-1 bg-slate-700/30 rounded"></div>
<div className="w-full h-1 bg-slate-700/30 rounded"></div>
<div className="w-2/3 h-1 bg-slate-700/30 rounded"></div>
</div>
</div>
<a className="absolute inset-0 z-20" href="#"><span className="sr-only">View Certificate</span></a>
</div>
</div>

<div className="group relative flex flex-col p-1 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent hover:from-white/[0.15] transition-colors duration-500">
<div className="relative h-full bg-[#0A0A0A] border border-white/[0.05] rounded-[23px] p-6 flex flex-col overflow-hidden">
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
<i className="w-6 h-6 text-purple-400" data-lucide="landmark"></i>
</div>
<span className="bg-white/5 border border-white/10 text-white text-[10px] px-2 py-1 rounded-full font-medium tracking-wide uppercase">Active</span>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2 relative z-10">MOF Approved</h3>
<p className="text-sm text-slate-500 mb-8 flex-grow relative z-10">Registered under the Ministry of Finance Malaysia.</p>
<div className="w-full aspect-[3/4] bg-white/[0.02] rounded-xl overflow-hidden relative border border-white/[0.05] group-hover:border-white/[0.15] transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>
<div className="absolute inset-4 bg-white/[0.03] border border-white/10 rounded shadow-sm p-4 flex flex-col items-center gap-2 transform group-hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 border-2 border-purple-500/30 rounded-full mb-2"></div>
<div className="w-3/4 h-2 bg-purple-500/20 rounded mb-4"></div>
<div className="w-full h-1 bg-slate-700/30 rounded"></div>
<div className="w-full h-1 bg-slate-700/30 rounded"></div>
<div className="w-1/2 h-1 bg-slate-700/30 rounded"></div>
</div>
</div>
<a className="absolute inset-0 z-20" href="#"><span className="sr-only">View Certificate</span></a>
</div>
</div>

<div className="md:col-span-2 lg:col-span-3 xl:col-span-4 mt-8">
<div className="rounded-2xl border border-white/[0.05] bg-[#0A0A0A] overflow-hidden divide-y divide-white/[0.05]">
<div className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
<i className="w-5 h-5 text-slate-300" data-lucide="file-text"></i>
</div>
<div>
<h4 className="text-base font-medium text-white tracking-tight">KDN License</h4>
<p className="text-sm text-slate-500">Home Ministry Approval Certificate</p>
</div>
</div>
<i className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
<i className="w-5 h-5 text-slate-300" data-lucide="file-check-2"></i>
</div>
<div>
<h4 className="text-base font-medium text-white tracking-tight">EPF (KWSP) Registration</h4>
<p className="text-sm text-slate-500">Sijil Pendaftaran Majikan</p>
</div>
</div>
<i className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
<div className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors group cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
<i className="w-5 h-5 text-slate-300" data-lucide="shield-alert"></i>
</div>
<div>
<h4 className="text-base font-medium text-white tracking-tight">Comprehensive Insurance Policies</h4>
<p className="text-sm text-slate-500">Public Liability, Professional Indemnity, Liberty Insurance</p>
</div>
</div>
<i className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/[0.05] relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#0A0A0A] to-[#0A0A0A]"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                Ready to secure your operations?
            </h2>
<p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
                Get a free quote or speak to our professional consultant today. We'll help you with any questions and inquiries regarding our protection services.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black text-base font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-3" href="tel:+60386821407">
<i className="w-5 h-5" data-lucide="phone"></i>
                    +603 8682 1407
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.05] border border-white/10 text-white text-base font-medium hover:bg-white/[0.1] transition-colors flex items-center justify-center gap-3" href="mailto:inquiry@sunstalwart.com">
<i className="w-5 h-5" data-lucide="mail"></i>
                    inquiry@sunstalwart.com
                </a>
</div>
</div>
</section>

<footer className="border-t border-white/[0.05] bg-[#0A0A0A] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/[0.05] pb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="flex items-center justify-center w-8 h-8 rounded-md bg-white text-black font-semibold tracking-tighter text-base">
                            SS
                        </div>
<span className="text-white font-medium tracking-tight text-base">Sun Stalwart Security</span>
</div>
<address className="text-base text-slate-500 max-w-sm leading-relaxed not-italic mb-6">
                        No 23-1M @ Eco Somerset,<br/>
                        Jalan Eco Santuari 8/1C,<br/>
                        Eco Santuari, Telok Panglima Garang,<br/>
                        42500 Shah Alam, Selangor.
                    </address>
</div>
<div>
<h4 className="text-white font-medium text-base tracking-tight mb-6">Main Menu</h4>
<ul className="space-y-4 text-base text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-base tracking-tight mb-6">Stay Updated</h4>
<p className="text-base text-slate-500 mb-4">Subscribe to our newsletter for the latest security insights.</p>
<div className="flex gap-2">
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-base text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Email address" type="email"/>
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-base font-medium transition-colors">
                            Subscribe
                        </button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
<p>© 2023 Sun Stalwart Security Services Sdn Bhd. All rights reserved.</p>
<div className="flex items-center gap-4">
<span>MOF Registered</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Home Ministry Approved</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
