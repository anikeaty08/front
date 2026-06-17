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
      

<nav className="fixed top-0 w-full z-50 bg-[#FCFBF8]/90 backdrop-blur-md border-b border-[#EBE8E0]" style={{animation: 'fadeIn 1s ease-out forwards'}}>
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-xl font-semibold text-[#2D2A26] tracking-tighter font-serif">Neer Interior &amp; Architects</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-[#7A756D]">
<a className="hover:text-[#B39359] transition-colors" href="#services">সেবাসমূহ</a>
<a className="hover:text-[#B39359] transition-colors" href="#portfolio">পোর্টফোলিও</a>
<a className="hover:text-[#B39359] transition-colors" href="#about">আমাদের সম্পর্কে</a>
<a className="hover:text-[#B39359] transition-colors" href="#contact">যোগাযোগ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full bg-[#B39359] text-white text-xs font-medium hover:bg-[#967A48] transition-colors" href="#contact">
                পরামর্শের জন্য বুক করুন
            </a>
<button className="md:hidden text-[#2D2A26]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>
<main className="flex-grow w-full max-w-6xl mr-auto ml-auto pt-32 pr-6 pb-16 pl-6 space-y-32">

<section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="" style={{opacity: '0', animation: 'fadeUp 0.8s ease-out forwards'}}>
<span className="text-xs font-medium text-[#B39359] tracking-widest uppercase mb-4 block">কনসেপ্ট ডিজাইন</span>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight text-[#2D2A26] leading-[1.25] font-serif">
                        আপনার স্পেস রূপান্তর করুন,<br/>
<span className="text-[#7A756D] italic">জীবনযাত্রার মান উন্নত করুন।</span>
</h1>
</div>
<p className="text-base text-[#7A756D] max-w-md leading-relaxed" style={{opacity: '0', animation: 'fadeUp 0.8s ease-out 0.1s forwards'}}>
                    বাংলাদেশের হৃদয়ে আধুনিক লাক্সারি জীবনযাপনের নতুন সংজ্ঞা। আমরা আপনার স্পেসকে অনন্য রূপ দিতে সমসাময়িক ডিজাইনের সাথে স্থানীয় নান্দনিকতার নিখুঁত সমন্বয় করি।
                </p>
<div className="flex items-center gap-6" style={{opacity: '0', animation: 'fadeUp 0.8s ease-out 0.2s forwards'}}>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#2D2A26] text-white text-sm font-medium hover:bg-[#1A1816] transition-all shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10" href="#contact">
                        পরামর্শের জন্য বুক করুন
                    </a>
<div className="flex items-center gap-2 text-sm font-medium text-[#7A756D]">
<div className="flex -space-x-2">
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-[#FCFBF8]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-[#FCFBF8]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-[#FCFBF8]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
</div>
<span className="ml-2">৫০০+ গ্রাহকের আস্থাশীল</span>
</div>
</div>
</div>
<div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-t-full overflow-hidden bg-[#EBE8E0]" style={{opacity: '0', animation: 'fadeUp 0.8s ease-out 0.3s forwards'}}>
<img alt="Luxurious modern living room" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-t-full pointer-events-none"></div>
</div>
</section>

<section className="space-y-12" id="services">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#EBE8E0] pb-6">
<div>
<span className="text-xs font-medium text-[#B39359] tracking-widest uppercase mb-2 block">আমাদের দক্ষতা</span>
<h2 className="text-3xl font-medium tracking-tight text-[#2D2A26] font-serif">সমন্বিত ডিজাইন সেবাসমূহ</h2>
</div>
<p className="text-sm text-[#7A756D] max-w-sm">ধারণা থেকে বাস্তবায়ন পর্যন্ত, আপনার স্বপ্ন পূরণে আমরা কাস্টমাইজড সমাধান প্রদান করি।</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white border border-[#EBE8E0] hover:border-[#B39359]/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#FCFBF8] flex items-center justify-center mb-6 group-hover:bg-[#B39359] transition-colors">
<iconify-icon className="text-[#B39359] group-hover:text-white transition-colors" height="24" icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#2D2A26] mb-3 tracking-tight">রেসিডেনশিয়াল ডিজাইন</h3>
<p className="text-sm text-[#7A756D] leading-relaxed">আপনার জীবনযাত্রার সাথে মানানসই উষ্ণ এবং মার্জিত ঘর তৈরি করা, বসার ঘর থেকে শুরু করে শান্ত বেডরুম পর্যন্ত।</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-[#EBE8E0] hover:border-[#B39359]/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#FCFBF8] flex items-center justify-center mb-6 group-hover:bg-[#B39359] transition-colors">
<iconify-icon className="text-[#B39359] group-hover:text-white transition-colors" height="24" icon="solar:buildings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#2D2A26] mb-3 tracking-tight">কমার্শিয়াল ডিজাইন</h3>
<p className="text-sm text-[#7A756D] leading-relaxed">কার্যকরী এবং ব্র্যান্ড-কেন্দ্রিক ইন্টেরিয়র আর্কিটেকচারের মাধ্যমে ওয়ার্কস্পেস, বুটিক এবং রেস্তোরাঁর মান উন্নয়ন।</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-[#EBE8E0] hover:border-[#B39359]/50 transition-colors group">
<div className="w-12 h-12 rounded-full bg-[#FCFBF8] flex items-center justify-center mb-6 group-hover:bg-[#B39359] transition-colors">
<iconify-icon className="text-[#B39359] group-hover:text-white transition-colors" height="24" icon="solar:hammer-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#2D2A26] mb-3 tracking-tight">রেনোভেশন এবং রিমডেলিং</h3>
<p className="text-sm text-[#7A756D] leading-relaxed">সঠিক পরিকল্পনা, দেশীয় উপকরণ এবং দক্ষ সম্পাদনের মাধ্যমে পুরনো স্পেসে নতুন প্রাণের সঞ্চার।</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-[#EBE8E0] hover:border-[#B39359]/50 transition-colors group md:col-span-1">
<div className="w-12 h-12 rounded-full bg-[#FCFBF8] flex items-center justify-center mb-6 group-hover:bg-[#B39359] transition-colors">
<iconify-icon className="text-[#B39359] group-hover:text-white transition-colors" height="24" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#2D2A26] mb-3 tracking-tight">থ্রিডি ভিজ্যুয়ালাইজেশন</h3>
<p className="text-sm text-[#7A756D] leading-relaxed">বাস্তবসম্মত রেন্ডারিং, যা আপনাকে কাজ শুরুর আগেই আপনার স্পেসটি অনুভব করতে সাহায্য করে।</p>
</div>

<div className="p-8 rounded-2xl bg-white border border-[#EBE8E0] hover:border-[#B39359]/50 transition-colors group md:col-span-2">
<div className="w-12 h-12 rounded-full bg-[#FCFBF8] flex items-center justify-center mb-6 group-hover:bg-[#B39359] transition-colors">
<iconify-icon className="text-[#B39359] group-hover:text-white transition-colors" height="24" icon="solar:sofa-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#2D2A26] mb-3 tracking-tight">ফার্নিচার সোর্সিং ও সিলেকশন</h3>
<p className="text-sm text-[#7A756D] leading-relaxed">আপনার আর্কিটেকচারাল স্টাইলের সাথে পরিপূর্ণভাবে মানানসই দেশি-বিদেশি প্রিমিয়াম ফার্নিচার নির্বাচন।</p>
</div>
</div>
</section>

<section className="space-y-10" id="portfolio">
<div className="text-center space-y-4 mb-12">
<h2 className="text-3xl font-medium tracking-tight text-[#2D2A26] font-serif">নির্বাচিত কাজসমূহ</h2>
<p className="text-sm text-[#7A756D] max-w-xl mx-auto">আমাদের রেসিডেনশিয়াল এবং কমার্শিয়াল প্রোজেক্টের বিভিন্ন কাজের এক ঝলক।</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
<img alt="Modern Living Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-white font-medium tracking-tight text-lg">গুলশান রেসিডেন্স</span>
<span className="text-white/80 text-xs">লিভিং রুম ডিজাইন</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl aspect-[4/3]">
<img alt="Elegant Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-white font-medium tracking-tight text-lg">বনানী পেন্টহাউস</span>
<span className="text-white/80 text-xs">মাস্টার বেডরুম</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl aspect-[4/3] md:col-span-1">
<img alt="Contemporary Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-white font-medium tracking-tight text-lg">ধানমন্ডি ভিলা</span>
<span className="text-white/80 text-xs">কিচেন রিমডেলিং</span>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl aspect-[4/3] md:col-span-1">
<img alt="Corporate Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-white font-medium tracking-tight text-lg">টেক হাব সিটি</span>
<span className="text-white/80 text-xs">কর্পোরেট অফিস</span>
</div>
</div>
</div>
</section>

<div className="w-full h-[1px] bg-[#EBE8E0] relative overflow-hidden my-16">
<div className="absolute top-0 left-0 h-full bg-[#B39359]" style={{animation: 'revealLine 1.5s ease-in-out forwards'}}></div>
</div>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" id="about">
<div className="relative w-full aspect-square rounded-2xl overflow-hidden">
<img alt="Design Materials" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl"></div>

<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white shadow-xl flex items-center gap-4">
<div className="text-[#B39359]">
<iconify-icon height="32" icon="solar:cup-star-linear" width="32"></iconify-icon>
</div>
<div>
<span className="block text-xl font-medium text-[#2D2A26] leading-none tracking-tight mb-1">১০+ বছর</span>
<span className="text-xs text-[#7A756D]">ডিজাইনে উৎকর্ষ</span>
</div>
</div>
</div>
<div className="space-y-10">
<div className="space-y-4">
<h2 className="text-3xl font-medium tracking-tight text-[#2D2A26] font-serif">শিল্প ও ঐতিহ্যের সমন্বয়ে গড়া স্টুডিও</h2>
<p className="text-sm text-[#7A756D] leading-relaxed">
                        কনসেপ্ট ডিজাইনে আমরা বিশ্বাস করি আপনার চারপাশের পরিবেশ আপনার জীবনযাত্রার মানকে গভীরভাবে প্রভাবিত করে। আমাদের কাজের মূল দর্শন হলো দেশীয় কারুশিল্পের সাথে আধুনিক, বৈশ্বিক ডিজাইন ট্রেন্ডের মেলবন্ধন। আমরা ঐতিহ্যকে সম্মান জানিয়ে একটি ছিমছাম, সমসাময়িক লাক্সারি প্রদান করি।
                    </p>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-3">
<iconify-icon className="text-[#B39359]" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-[#2D2A26]">স্থানীয় অভিজ্ঞতা</h4>
<p className="text-xs text-[#7A756D]">স্থানীয় আবহাওয়া, উপকরণ এবং কারিগরদের নেটওয়ার্ক সম্পর্কে গভীর ধারণা।</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-[#B39359]" height="24" icon="solar:wallet-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-[#2D2A26]">সাশ্রয়ী লাক্সারি</h4>
<p className="text-xs text-[#7A756D]">স্বচ্ছ এবং যুক্তিসঙ্গত বাজেটের সাথে প্রিমিয়াম নান্দনিকতার সতর্ক ভারসাম্য।</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-[#B39359]" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-[#2D2A26]">শুরু থেকে শেষ পর্যন্ত সেবা</h4>
<p className="text-xs text-[#7A756D]">প্রাথমিক স্কেচ থেকে শুরু করে চূড়ান্ত ফার্নিচার ইনস্টলেশন পর্যন্ত নিরবচ্ছিন্ন ব্যবস্থাপনা।</p>
</div>
<div className="space-y-3">
<iconify-icon className="text-[#B39359]" height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-[#2D2A26]">বিশ্বস্ত পার্টনার</h4>
<p className="text-xs text-[#7A756D]">বাংলাদেশের প্রধান শহরগুলোতে ৫০০ জনেরও বেশি সন্তুষ্ট গ্রাহক।</p>
</div>
</div>
</div>
</section>

<section className="space-y-12 bg-[#F5F3EC] -mx-6 px-6 py-20 lg:-mx-[calc(50vw-50%)] lg:px-[calc(50vw-50%)]">
<div className="max-w-6xl mx-auto w-full">
<div className="text-center space-y-4 mb-12">
<h2 className="text-3xl font-medium tracking-tight text-[#2D2A26] font-serif">ক্লায়েন্টদের গল্প</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl border border-[#EBE8E0] relative">
<iconify-icon className="text-[#EBE8E0] absolute top-6 right-6" height="32" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-sm text-[#7A756D] leading-relaxed mb-6 mt-4">
                            "কনসেপ্ট ডিজাইন আমাদের গুলশানের পুরনো অ্যাপার্টমেন্টটিকে একটি আধুনিক আশ্রয়ে রূপান্তরিত করেছে। ছোট ছোট বিষয়ে তাদের মনোযোগ এবং পরিচ্ছন্ন ডিজাইনের সাথে উষ্ণ রঙের সমন্বয় সত্যিই অতুলনীয়।"
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FCFBF8] flex items-center justify-center text-[#B39359] font-serif font-medium text-sm">F</div>
<div>
<h5 className="text-sm font-medium text-[#2D2A26]">ফারাহ এন.</h5>
<span className="text-xs text-[#B39359]">গুলশান, ঢাকা</span>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-[#EBE8E0] relative">
<iconify-icon className="text-[#EBE8E0] absolute top-6 right-6" height="32" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-sm text-[#7A756D] leading-relaxed mb-6 mt-4">
                            "তাদের রিমোট কনসালটেশন প্রক্রিয়া অবিশ্বাস্যভাবে সাবলীল ছিল। তারা আমাদের চট্টগ্রামের অফিসের রেনোভেশন নিখুঁতভাবে পরিচালনা করেছে এবং প্রতিটি পদক্ষেপে আমাদের আপডেট রেখেছে।"
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FCFBF8] flex items-center justify-center text-[#B39359] font-serif font-medium text-sm">R</div>
<div>
<h5 className="text-sm font-medium text-[#2D2A26]">রাকিব এইচ.</h5>
<span className="text-xs text-[#B39359]">খুলশী, চট্টগ্রাম</span>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-[#EBE8E0] relative">
<iconify-icon className="text-[#EBE8E0] absolute top-6 right-6" height="32" icon="solar:quote-right-linear" width="32"></iconify-icon>
<p className="text-sm text-[#7A756D] leading-relaxed mb-6 mt-4">
                            "আমি এমন একটি বাড়ি চেয়েছিলাম যা দেখতে বিলাসবহুল কিন্তু আমাদের শেকড়ের সাথে যুক্ত। তারা আধুনিক মিনিমালিস্ট লেআউটের সাথে চমৎকার দেশীয় কাঠের কাজের সমন্বয় করেছে। আমি ফলাফল দেখে মুগ্ধ।"
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FCFBF8] flex items-center justify-center text-[#B39359] font-serif font-medium text-sm">S</div>
<div>
<h5 className="text-sm font-medium text-[#2D2A26]">সারাহ এ.</h5>
<span className="text-xs text-[#B39359]">সুবিদবাজার, সিলেট</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start" id="contact">

<div className="lg:col-span-2 space-y-8">
<div>
<h2 className="text-3xl font-medium tracking-tight text-[#2D2A26] font-serif mb-3">আপনার প্রোজেক্ট শুরু করুন</h2>
<p className="text-sm text-[#7A756D]">নিচে আপনার তথ্য দিন, পরামর্শের সময় নির্ধারণ করতে আমাদের প্রধান ডিজাইনার আপনার সাথে যোগাযোগ করবেন।</p>
</div>
<form className="space-y-4">
<div className="">
<label className="block text-xs font-medium text-[#2D2A26] mb-1.5" htmlFor="name">সম্পূর্ণ নাম</label>
<input className="w-full h-11 px-4 text-sm bg-white border border-[#EBE8E0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B39359]/20 focus:border-[#B39359] transition-all placeholder:text-[#D5CDC4]" id="name" placeholder="আপনার নাম" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-[#2D2A26] mb-1.5" htmlFor="phone">ফোন নম্বর</label>
<input className="w-full h-11 px-4 text-sm bg-white border border-[#EBE8E0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B39359]/20 focus:border-[#B39359] transition-all placeholder:text-[#D5CDC4]" id="phone" placeholder="+৮৮০ ১..." type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-[#2D2A26] mb-1.5" htmlFor="email">ইমেইল অ্যাড্রেস</label>
<input className="w-full h-11 px-4 text-sm bg-white border border-[#EBE8E0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B39359]/20 focus:border-[#B39359] transition-all placeholder:text-[#D5CDC4]" id="email" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-[#2D2A26] mb-1.5" htmlFor="project-type">প্রোজেক্টের ধরন</label>
<div className="relative">
<select className="w-full h-11 px-4 pr-10 text-sm bg-white border border-[#EBE8E0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B39359]/20 focus:border-[#B39359] transition-all appearance-none text-[#2D2A26]" id="project-type">
<option disabled="" selected="" value="">একটি অপশন বেছে নিন</option>
<option value="residential">রেসিডেনশিয়াল ডিজাইন</option>
<option value="commercial">কমার্শিয়াল ডিজাইন</option>
<option value="renovation">রেনোভেশন</option>
<option value="other">অন্যান্য</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#7A756D]">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full h-11 rounded-xl bg-[#2D2A26] text-white text-sm font-medium hover:bg-[#1A1816] transition-colors mt-2" type="button">
                        রিকোয়েস্ট সাবমিট করুন
                    </button>
</form>
</div>

<div className="lg:col-span-3 space-y-6 h-full flex flex-col">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="flex items-start gap-4 p-5 rounded-2xl border border-[#EBE8E0] bg-white">
<div className="w-10 h-10 rounded-full bg-[#FCFBF8] flex items-center justify-center shrink-0">
<iconify-icon className="text-[#B39359]" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-[#2D2A26] font-medium mb-1">হেড স্টুডিও</span>
<span className="text-xs text-[#7A756D] leading-relaxed">লেভেল ৫, রহমান টাওয়ার<br/>গুলশান এভিনিউ, গুলশান ২<br/>ঢাকা ১২১২, বাংলাদেশ</span>
</div>
</div>
<div className="flex bg-white border-[#EBE8E0] border rounded-2xl pt-5 pr-5 pb-5 pl-5 gap-x-4 gap-y-4 items-start">
<div className="w-10 h-10 rounded-full bg-[#FCFBF8] flex items-center justify-center shrink-0">
<iconify-icon className="text-[#B39359]" height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm text-[#2D2A26] font-medium mb-1">যোগাযোগের তথ্য</span>
<span className="leading-relaxed text-xs text-[#7A756D] mb-2">+৮৮0 1868126126<br/>hello@neerinteriors.com</span>
<span className="text-xs font-medium text-[#B39359] flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> এখন খোলা (সকাল ৯টা - সন্ধ্যা ৬টা)
                            </span>
</div>
</div>
</div>

<div className="w-full flex-grow min-h-[300px] rounded-2xl overflow-hidden border border-[#EBE8E0] bg-[#EBE8E0] relative group">
<img alt="Map View" className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="backdrop-blur-[2px] bg-[#FCFBF8]/40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center flex flex-col items-center">
<div className="w-12 h-12 bg-[#2D2A26] rounded-full flex items-center justify-center text-white mb-3 shadow-lg shadow-black/10 animate-bounce">
<iconify-icon height="24" icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#2D2A26] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">গুগল ম্যাপে দেখুন</span>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-[#EBE8E0] bg-[#FCFBF8] mt-auto">
<div className="flex flex-col md:flex-row max-w-6xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="text-2xl font-semibold text-[#2D2A26] tracking-tighter font-serif">Neer Interior &amp; Architects</span>
<p className="text-xs text-[#7A756D]">বাংলাদেশে মার্জিত স্পেস তৈরি করা।</p>
</div>
<div className="flex items-center gap-4 text-[#7A756D]">
<a className="w-10 h-10 rounded-full border border-[#EBE8E0] flex items-center justify-center hover:bg-[#2D2A26] hover:text-white hover:border-[#2D2A26] transition-all" href="#">
<iconify-icon height="18" icon="solar:user-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#EBE8E0] flex items-center justify-center hover:bg-[#2D2A26] hover:text-white hover:border-[#2D2A26] transition-all" href="#">
<iconify-icon height="18" icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-[#EBE8E0] flex items-center justify-center hover:bg-[#2D2A26] hover:text-white hover:border-[#2D2A26] transition-all" href="#">
<iconify-icon height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
</a>
</div>
<p className="text-xs text-[#7A756D]">© ২০২৪ কনসেপ্ট ডিজাইন। সর্বস্বত্ব সংরক্ষিত।</p>
</div>
</footer>

    </>
  );
}
