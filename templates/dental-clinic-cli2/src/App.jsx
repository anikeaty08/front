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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50">
<div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-[#0052CC] flex items-center justify-center text-white font-semibold text-lg tracking-tighter">
                    S
                </div>
<span className="font-semibold text-base tracking-tight text-slate-900 hidden sm:block">Shamim Dental</span>
</div>
<a className="flex items-center gap-2 bg-[#0052CC]/10 hover:bg-[#0052CC]/20 text-[#0052CC] px-4 py-2 rounded-full transition-colors font-medium text-sm" href="tel:01819824102">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>কল করুন</span>
</a>
</div>
</nav>

<section className="pt-28 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 max-w-6xl mx-auto overflow-hidden">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
<div className="flex-1 space-y-6 md:pr-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0052CC] text-xs font-medium">
<iconify-icon icon="solar:sparkles-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    আধুনিক ও ব্যথামুক্ত চিকিৎসা
                </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-slate-900 leading-[1.1]">
                    আপনার হাসির যত্নে <br/>আমরা <span className="text-[#0052CC]">প্রতিশ্রুতিবদ্ধ</span>
</h1>
<p className="text-base md:text-lg text-slate-500 font-normal leading-relaxed max-w-md">
                    Experience world-class, pain-free dental care right here in Chankharpul, Dhaka. Equipped with modern technology for your complete safety and hygiene.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-[#0052CC] hover:bg-[#0042a3] text-white px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(0,82,204,0.39)] hover:shadow-[0_6px_20px_rgba(0,82,204,0.23)] hover:-translate-y-0.5 font-medium text-sm" href="tel:01819824102">
<iconify-icon icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Book Appointment
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3.5 rounded-xl transition-colors font-medium text-sm" href="#location">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        View Location
                    </a>
</div>
</div>
<div className="flex-1 w-full relative">

<div className="absolute inset-0 bg-gradient-to-tr from-[#0052CC]/20 to-teal-400/20 blur-3xl -z-10 rounded-full scale-90"></div>
<div className="relative bg-white p-2 rounded-2xl shadow-sm border border-slate-100 rotate-1 hover:rotate-0 transition-transform duration-500">
<img alt="Modern Dental Care" className="w-full h-auto aspect-[4/3] object-cover rounded-xl grayscale-[20%] contrast-[1.05]" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute -bottom-4 -left-4 bg-white/80 backdrop-blur-md border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-4 rounded-xl flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon className="text-xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Open Everyday</p>
<p className="text-sm font-semibold text-slate-900 tracking-tight">Until 10:00 PM</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200/60 bg-white">
<div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-100 text-center md:text-left">
<div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:px-6 pt-4 md:pt-0">
<iconify-icon className="text-3xl text-[#0052CC]" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight">100% Hygiene Focus</h3>
<p className="text-sm text-slate-500 mt-1">Sterilized modern equipment.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:px-6 pt-4 md:pt-0">
<iconify-icon className="text-3xl text-[#0052CC]" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight">Pain-Free Procedures</h3>
<p className="text-sm text-slate-500 mt-1">Comfortable and gentle care.</p>
</div>
</div>
<div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:px-6 pt-4 md:pt-0">
<iconify-icon className="text-3xl text-[#0052CC]" icon="solar:user-speak-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<h3 className="text-base font-semibold text-slate-900 tracking-tight">Expert Consultations</h3>
<p className="text-sm text-slate-500 mt-1">Personalized treatment plans.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-4 md:px-6 max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">আমাদের সেবাসমূহ</h2>
<p className="text-sm md:text-base text-slate-500">Comprehensive dental care utilizing the latest technology to bring back your confident smile.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-6xl text-[#0052CC]" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0052CC] mb-6">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Dental Braces</h3>
<p className="text-xs text-slate-500 font-medium mb-1">আঁকাবাঁকা দাঁতের চিকিৎসা</p>
<p className="text-xs text-slate-400 leading-relaxed mt-3">Perfect alignment for a beautiful and confident smile.</p>
</div>

<div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-6xl text-[#0052CC]" icon="solar:sparkles-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:sparkles-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Scaling &amp; Polish</h3>
<p className="text-xs text-slate-500 font-medium mb-1">দাঁত পরিষ্কার করা</p>
<p className="text-xs text-slate-400 leading-relaxed mt-3">Remove plaque and stains for healthier, whiter teeth.</p>
</div>

<div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-6xl text-[#0052CC]" icon="solar:target-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-[#0052CC] mb-6">
<iconify-icon className="text-2xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Root Canal</h3>
<p className="text-xs text-slate-500 font-medium mb-1">রুট ক্যানেল</p>
<p className="text-xs text-slate-400 leading-relaxed mt-3">Save severely damaged teeth with pain-free precision.</p>
</div>

<div className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<iconify-icon className="text-6xl text-[#0052CC]" icon="solar:health-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Oral Surgery</h3>
<p className="text-xs text-slate-500 font-medium mb-1">ওরাল সার্জারী</p>
<p className="text-xs text-slate-400 leading-relaxed mt-3">Expert surgical extractions and advanced oral procedures.</p>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-t border-slate-100" id="location">
<div className="max-w-6xl mx-auto px-4 md:px-6">
<div className="flex flex-col lg:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Visit Our Clinic</h2>
<p className="text-sm text-slate-500 leading-relaxed">
                        Shamim Dental Surgery is conveniently located in the heart of Dhaka. We maintain the highest standards of cleanliness and utilize modern equipment to ensure you receive the best care possible.
                    </p>
<div className="space-y-4 pt-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Address</p>
<p className="text-sm text-slate-500 mt-0.5">78/3, Chankharpul Mor,<br/>Dhaka 1100, Bangladesh</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Opening Hours</p>
<p className="text-sm text-slate-500 mt-0.5">Everyday: 10:00 AM - 10:00 PM</p>
<span className="inline-block mt-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">Late appointments available</span>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-md">
<div className="bg-white/60 backdrop-blur-xl border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-8">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Connect With Us</h3>
<a className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-100 transition-colors group mb-4" href="tel:01819824102">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0052CC] shadow-sm">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Call for appointment</p>
<p className="text-sm font-semibold text-slate-900 group-hover:text-[#0052CC] transition-colors">01819-824102</p>
</div>
</div>
<iconify-icon className="text-slate-400 group-hover:text-[#0052CC]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>

<a className="flex items-center justify-between p-4 rounded-xl bg-[#1877F2]/5 hover:bg-[#1877F2]/10 border border-[#1877F2]/10 transition-colors group" href="#" target="_blank">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-sm">
<svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fill-rule="evenodd"></path>
</svg>
</div>
<div>
<p className="text-xs text-slate-500">Follow our updates</p>
<p className="text-sm font-semibold text-slate-900 group-hover:text-[#1877F2] transition-colors">Facebook Page</p>
</div>
</div>
<iconify-icon className="text-slate-400 group-hover:text-[#1877F2]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200/50 py-8 text-center">
<p className="text-xs text-slate-500 font-medium">
            © 2023 Shamim Dental Surgery (শামীম ডেন্টাল সার্জারী). All rights reserved.
        </p>
</footer>

<a className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 bg-[#0052CC] text-white rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(0,82,204,0.4)] hover:scale-105 transition-transform group" href="tel:01819824102">
<div className="absolute inset-0 rounded-full bg-[#0052CC] animate-ping opacity-20 group-hover:opacity-40"></div>
<iconify-icon className="text-2xl relative z-10" icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>

    </>
  );
}
