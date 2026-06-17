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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-blue-950 rounded-lg flex items-center justify-center text-white font-serif italic font-bold text-lg leading-none">A</div>
<span className="text-blue-950 font-semibold tracking-tighter text-lg group-hover:opacity-80 transition-opacity">ADW</span>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium hover:text-blue-900 transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium hover:text-blue-900 transition-colors" href="#pillars">Pillars</a>
<a className="text-sm font-medium hover:text-blue-900 transition-colors" href="#testimonials">Clients</a>
<a className="text-sm font-medium hover:text-blue-900 transition-colors" href="#team">Team</a>
<a className="text-sm font-medium hover:text-blue-900 transition-colors" href="#insights">Insights</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex text-sm font-medium hover:text-blue-900" href="#">Sign in</a>
<a className="inline-flex items-center justify-center h-9 px-4 text-xs font-medium text-white bg-blue-950 rounded-full hover:bg-blue-900 transition-all shadow-sm shadow-blue-950/20 hover:shadow-md hover:shadow-blue-950/30" href="#contact">
                    Contact Us
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 blur-3xl rounded-[100%]"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 text-blue-800 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-amber-400"></span>
                Procurement Excellence
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-5xl mx-auto">
                We collaborate with clients to drive success through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900">Procurement Excellence.</span>
</h1>
<p className="text-lg text-slate-500 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                Combining deep industry knowledge, strategic foresight, and innovative approaches, we enable businesses to enhance their procurement operations and seize new opportunities.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium text-white bg-blue-950 rounded-full hover:bg-blue-900 transition-all shadow-lg shadow-blue-950/20 hover:shadow-xl hover:-translate-y-0.5 group" href="#contact">
                    Get Started
                    <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center gap-4 px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-xs font-medium text-slate-500">
<span className="flex items-center gap-1"><iconify-icon className="text-amber-500" icon="solar:medal-star-linear"></iconify-icon> Certified &amp; Registered</span>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-red-50 flex-shrink-0 flex items-center justify-center text-red-600">
<iconify-icon icon="solar:graph-down-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Cost Reduction</h3>
<p className="text-xs text-slate-500 leading-relaxed">How can we reduce procurement costs without sacrificing quality?</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-amber-50 flex-shrink-0 flex items-center justify-center text-amber-600">
<iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Risk Management</h3>
<p className="text-xs text-slate-500 leading-relaxed">How can we manage supplier risks more effectively?</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:star-circle-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-1">Best Practices</h3>
<p className="text-xs text-slate-500 leading-relaxed">What are the best practices to achieve procurement transformation?</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50" id="pillars">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="text-blue-900 font-medium text-xs tracking-wider uppercase mb-2 block">Our Foundation</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">Core Pillars</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">People</h3>
<p className="text-slate-500 text-sm leading-relaxed">Highly skilled professionals engaged in global-scale professional activities and national transformation initiatives.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6 text-amber-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:server-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Technology</h3>
<p className="text-slate-500 text-sm leading-relaxed">Latest Procurement 4.0 solutions including the eProcurement Shared Services Platform designed for corporations.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 text-emerald-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Information</h3>
<p className="text-slate-500 text-sm leading-relaxed">Centralized procurement portal with tender info, verified vendor listings, and data to improve decision-making.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all group">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:lightbulb-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Insights</h3>
<p className="text-slate-500 text-sm leading-relaxed">20+ years of experience anticipating future trends, implementing cutting-edge tech, and fostering continuous improvement.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<span className="text-amber-500 font-medium text-xs tracking-wider uppercase mb-2 block">Our Solutions</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Integrated Procurement Ecosystem</h2>
<p className="text-slate-500">We combine advanced technology adoption with innovative approaches to create new ways of working.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-5">
<iconify-icon className="text-slate-900" icon="solar:monitor-smartphone-linear" width="160"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-100 text-blue-800 text-[10px] font-bold uppercase mb-6">Flagship</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-2">iProc eProcurement Solutions</h3>
<p className="text-slate-500 max-w-md mb-8">Digital Procurement Transformation Services designed to optimize strategies and enhance supplier relationships.</p>
<div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm max-w-md">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded bg-blue-50 flex items-center justify-center text-blue-600"><iconify-icon icon="solar:chart-2-linear"></iconify-icon></div>
<div>
<div className="text-xs font-semibold text-slate-900">Performance</div>
<div className="text-[10px] text-slate-400">+62% Speed Efficiency</div>
</div>
</div>
<div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-600 w-3/4"></div>
</div>
</div>
</div>
</div>

<div className="bg-blue-950 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
<div>
<div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
<iconify-icon className="text-amber-400" icon="solar:globe-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-2">Pengadaan.com</h3>
<p className="text-blue-200 text-sm">Indonesia's collaborative portal for tender information and verified vendor listings.</p>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<div className="flex items-center justify-between">
<span className="text-xs text-blue-300">Verified Vendors</span>
<span className="text-lg font-bold">15,000+</span>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-amber-200 transition-colors">
<div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center mb-6 text-amber-600">
<iconify-icon icon="solar:case-round-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Business Transformation</h3>
<p className="text-slate-500 text-sm mb-4">Procurement Excellence Plus (PX+) and strategic consulting to modernize operations.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-slate-500"><iconify-icon className="mr-2 text-green-500" icon="solar:check-circle-linear"></iconify-icon> Strategy Optimization</li>
<li className="flex items-center text-xs text-slate-500"><iconify-icon className="mr-2 text-green-500" icon="solar:check-circle-linear"></iconify-icon> Risk Management</li>
</ul>
</div>

<div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-200 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center mb-6 text-slate-700">
<iconify-icon icon="solar:diploma-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Learning &amp; Professional Certification</h3>
<p className="text-slate-500 text-sm">Empowering professionals through CPSp (Certified Procurement Specialist) and CCMS programs to build the workforce of tomorrow.</p>
</div>
<div className="flex gap-2">
<div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-600 text-center">
                            CPSp<br/><span className="text-[10px] text-slate-400 font-normal">Certified</span>
</div>
<div className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-lg text-xs font-medium text-slate-600 text-center">
                            CCMS<br/><span className="text-[10px] text-slate-400 font-normal">Certified</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-center text-sm font-semibold text-slate-900 mb-8">Industries We Serve</h3>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-blue-300 transition-colors">Chemicals</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-blue-300 transition-colors">Consumer Packaged Goods</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-blue-300 transition-colors">Energy &amp; Utilities</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-blue-300 transition-colors">Financial Services</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-blue-300 transition-colors">Technology</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-blue-300 transition-colors">Oil &amp; Gas</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-blue-300 transition-colors">Pharma &amp; Life Sciences</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-blue-300 transition-colors">Government</span>
<span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:border-blue-300 transition-colors">Industrial Manufacturing</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-amber-500 font-medium text-xs tracking-wider uppercase mb-2 block">Our Impact</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-8">Trusted by Leaders</h2>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs font-medium text-slate-400 uppercase tracking-widest mb-12">
<span>Finance &amp; Banking</span>
<span className="text-slate-200">|</span>
<span>Government</span>
<span className="text-slate-200">|</span>
<span>Energy &amp; Mining</span>
<span className="text-slate-200">|</span>
<span>BUMN &amp; BUMD</span>
</div>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-slate-50 p-6 rounded-2xl border border-slate-100">
<p className="text-sm text-slate-600 italic mb-4">"Keuntungan yang paling saya rasakan saat menggunakan layanan perubahan akta perusahaan di Pengadaan.com adalah adanya efisiensi waktu, tenaga, dan biaya. Prosesnya cepat dan tidak berbelit-belit."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">AZ</div>
<div>
<div className="text-xs font-bold text-slate-900">Andri Zahamzah</div>
<div className="text-[10px] text-slate-400">PT Himawan Putra</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-slate-50 p-6 rounded-2xl border border-slate-100">
<p className="text-sm text-slate-600 italic mb-4">"PT. Bukit Asam mendapatkan efisiensi sebesar lebih dari Rp. 700 Milyar hanya pada tahun pertama implementasi aplikasi iProc karena keterbukaan informasi pengadaan."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs">MJ</div>
<div>
<div className="text-xs font-bold text-slate-900">M. Jamil</div>
<div className="text-[10px] text-slate-400">Direktur Keuangan - PT. Semen Baturaja</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-slate-50 p-6 rounded-2xl border border-slate-100">
<p className="text-sm text-slate-600 italic mb-4">"Pelatihan CPSp ini sangat bermanfaat dalam proses pengadaan di perusahaan kami Perumda Air Minum Tirta Sanjiwani Unit Usaha AMDK."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold text-xs">AD</div>
<div>
<div className="text-xs font-bold text-slate-900">Agus Dwi Raditya</div>
<div className="text-[10px] text-slate-400">PT. PDAM Sanjiwani</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-slate-50 p-6 rounded-2xl border border-slate-100">
<p className="text-sm text-slate-600 italic mb-4">"Penerapan aplikasi iProc merupakan bagian dari strategi WIKA dalam menjalankan konsep Procurement 4.0. Penerapan aplikasi iProc membuat proses pengadaan lebih cepat 62%."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs">GR</div>
<div>
<div className="text-xs font-bold text-slate-900">Gilang Ramadhan</div>
<div className="text-[10px] text-slate-400">Expert Associate SCM - PT Wijaya Karya</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-slate-50 p-6 rounded-2xl border border-slate-100">
<p className="text-sm text-slate-600 italic mb-4">"Implementasi Aplikasi iProc di Ancol telah bertransformasi dari fitur basic yang sederhana sejak tahun 2014... Selama tahun 2019 ada lebih dari 2.000 paket pengadaan dan mendapat efisiensi sebesar lebih dari 12%."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xs">EP</div>
<div>
<div className="text-xs font-bold text-slate-900">Eddy Prastiyo</div>
<div className="text-[10px] text-slate-400">VP Procurement – PT. Pembangunan Jaya Ancol</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-slate-50 p-6 rounded-2xl border border-slate-100">
<p className="text-sm text-slate-600 italic mb-4">"Menjadi member di Pengadaan.com memudahkan saya untuk mendapatkan info tender, karena langsung dikirim via email, jadi saya tidak perlu repot cek satu-satu di website."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-bold text-xs">II</div>
<div>
<div className="text-xs font-bold text-slate-900">Ifa Ikah</div>
<div className="text-[10px] text-slate-400">PT INTIMAP</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-blue-950 text-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<span className="text-amber-400 font-medium text-xs tracking-wider uppercase mb-2 block">Value-Based Approach</span>
<h3 className="text-2xl font-semibold mb-4">Emphasizing Outcomes &amp; Performance</h3>
<p className="text-blue-100 text-sm leading-relaxed mb-6">
                    Our approach of value-based procurement seeks to align procurement decisions with the organization’s broader goals, such as improving operational efficiency, fostering innovation, and supporting social or environmental objectives.
                </p>
<div className="flex gap-4">
<div className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">Operational Efficiency</div>
<div className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20">Innovation</div>
</div>
</div>
<div className="flex-1 w-full max-w-sm">

<div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 relative">
<div className="absolute top-4 right-4 text-xs text-amber-400 font-bold">+273% Efficiency</div>
<div className="flex items-end justify-between h-32 gap-2 mt-4">
<div className="w-full bg-blue-500/30 rounded-t h-[40%]"></div>
<div className="w-full bg-blue-500/50 rounded-t h-[60%]"></div>
<div className="w-full bg-blue-500/70 rounded-t h-[50%]"></div>
<div className="w-full bg-amber-500 rounded-t h-[90%] shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Meet Our Team</h2>
<p className="text-slate-500 max-w-xl">With extensive experience across various industry sectors, our team is ready to provide you with tailored and professional services.</p>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col md:flex-row gap-8 items-start mb-12">
<div className="w-full md:w-64 h-64 bg-slate-200 rounded-2xl flex-shrink-0 bg-[url('https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=400')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500"></div>
<div className="flex-1">
<div className="flex items-center gap-3 mb-2">
<h3 className="text-2xl font-bold text-slate-900">Sonny Sumarsono</h3>
<span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-bold uppercase">Managing Partner</span>
</div>
<p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-6">Principal Consultant &amp; Supply Chain Practitioner</p>
<p className="text-slate-600 text-sm leading-relaxed mb-6">
                        Principal Consultant enhancing Organizational Performance and Practitioners in Supply Chain Management, Project Management (PMO) and Information Technology areas, since 1991. Senior Trainer, Public Speaker, Competency Assessor and Mentor in Organizational Development and Business Transformation Programs.
                    </p>

<div className="inline-flex items-center gap-3 p-3 bg-white border border-amber-100 rounded-xl shadow-sm">
<div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center text-amber-500">
<iconify-icon icon="solar:cup-star-linear"></iconify-icon>
</div>
<div className="text-xs text-slate-600">
<span className="font-bold text-slate-900 block">Supply Chain Asia Awards</span>
                            Most Inspiring Professional 2024
                        </div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
<div className="p-4 rounded-xl border border-slate-100 bg-white hover:shadow-md transition-all text-center group">
<div className="w-12 h-12 mx-auto rounded-full bg-slate-100 mb-3 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-900 transition-colors">A</div>
<h4 className="text-sm font-semibold text-slate-900">Antariksa</h4>
<p className="text-[10px] text-slate-500">Business Support</p>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white hover:shadow-md transition-all text-center group">
<div className="w-12 h-12 mx-auto rounded-full bg-slate-100 mb-3 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-900 transition-colors">TK</div>
<h4 className="text-sm font-semibold text-slate-900">Tatok Kurnianto</h4>
<p className="text-[10px] text-slate-500">Business Transformation</p>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white hover:shadow-md transition-all text-center group">
<div className="w-12 h-12 mx-auto rounded-full bg-slate-100 mb-3 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-900 transition-colors">KI</div>
<h4 className="text-sm font-semibold text-slate-900">Katri Iskandar</h4>
<p className="text-[10px] text-slate-500">Digital Transformation</p>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white hover:shadow-md transition-all text-center group">
<div className="w-12 h-12 mx-auto rounded-full bg-slate-100 mb-3 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-900 transition-colors">YN</div>
<h4 className="text-sm font-semibold text-slate-900">Yubet Natsir</h4>
<p className="text-[10px] text-slate-500">GreatProcurement</p>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white hover:shadow-md transition-all text-center group">
<div className="w-12 h-12 mx-auto rounded-full bg-slate-100 mb-3 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-900 transition-colors">HH</div>
<h4 className="text-sm font-semibold text-slate-900">Heru Hermawan</h4>
<p className="text-[10px] text-slate-500">Engineering</p>
</div>
<div className="p-4 rounded-xl border border-slate-100 bg-white hover:shadow-md transition-all text-center group">
<div className="w-12 h-12 mx-auto rounded-full bg-slate-100 mb-3 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-900 transition-colors">RM</div>
<h4 className="text-sm font-semibold text-slate-900">Rahma Maulidya</h4>
<p className="text-[10px] text-slate-500">Pengadaan.com</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="insights">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-12">Insights &amp; Updates</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group cursor-pointer">
<div className="h-48 bg-slate-200 rounded-xl mb-4 overflow-hidden">
<div className="w-full h-full bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="text-xs text-blue-600 font-medium mb-2">9 December 2025</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">Modernisasi Pengadaan Di Era AI</h3>
<p className="text-xs text-slate-500 line-clamp-2">Dunia pengadaan sedang memasuki era transformasi besar. Jika sebelumnya fungsi procurement identik dengan proses manual...</p>
</div>
<div className="group cursor-pointer">
<div className="h-48 bg-slate-200 rounded-xl mb-4 overflow-hidden">
<div className="w-full h-full bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="text-xs text-blue-600 font-medium mb-2">27 November 2025</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">Digital Procurement Governance</h3>
<p className="text-xs text-slate-500 line-clamp-2">Menata Tata Kelola Pengadaan pada e-Procurement Cloud Organisasi, baik publik maupun swasta...</p>
</div>
<div className="group cursor-pointer">
<div className="h-48 bg-slate-200 rounded-xl mb-4 overflow-hidden">
<div className="w-full h-full bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
</div>
<div className="text-xs text-blue-600 font-medium mb-2">27 November 2025</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">Compliance Ready Procurement</h3>
<p className="text-xs text-slate-500 line-clamp-2">Membangun Pengadaan yang Transparan dan Kompetitif Sesuai Perpres 16/2018 dengan iProc Cloud...</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-blue-950 rounded flex items-center justify-center text-white font-serif italic font-bold text-xs">A</div>
<span className="text-blue-950 font-bold tracking-tight">ADW Consulting</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                        Your trustworthy partner in business. Providing integrated solutions for digital transformation in procurement and supply chain management.
                    </p>
</div>

<div className="col-span-1 lg:col-span-1">
<h4 className="font-semibold text-slate-900 text-sm mb-4">Reach Us</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        District 8 – Treasury Tower<br/>
                        SCBD Lot 28, 11th floor, Unit 11-K<br/>
                        Jl. Jend Sudirman Kav 52 – 53<br/>
                        Jakarta 12190, INDONESIA
                    </p>
</div>

<div className="col-span-1 lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
<h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Training &amp; Certification</h5>
<p className="text-sm font-medium text-slate-800">Yubet Natsir</p>
<a className="text-xs text-blue-600 hover:underline block mb-1" href="mailto:marketing@adw.co.id">marketing@adw.co.id</a>
<p className="text-xs text-slate-500">+62 812-1052-2353</p>
</div>
<div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
<h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">iProc, Consulting &amp; Platform</h5>
<p className="text-sm font-medium text-slate-800">Rani Eka</p>
<a className="text-xs text-blue-600 hover:underline block mb-1" href="mailto:rani@adw.co.id">rani@adw.co.id</a>
<p className="text-xs text-slate-500">+62 813‑1587‑0596</p>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-xs">© 2025 ADW Consulting. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-xs text-slate-400 hover:text-blue-900" href="#">Privacy</a>
<a className="text-xs text-slate-400 hover:text-blue-900" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
