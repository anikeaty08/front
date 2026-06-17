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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex group-hover:bg-slate-800 transition-colors text-lg font-semibold text-white tracking-tighter bg-slate-900 w-10 h-10 rounded-lg items-center justify-center">
  AB
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-semibold tracking-tight text-sm leading-none">AB Event</span>
<span className="text-slate-400 text-xs tracking-tight">Organizer</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#home">Beranda</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">Tentang Kami</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Layanan</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#portfolio">Portofolio</a>
<a className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all shadow-sm" href="#contact">
                    Hubungi Kami
                </a>
</div>

<button className="md:hidden text-slate-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900" id="home">

<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-950 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Professional Event Management</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-tight mb-8">
                Wujudkan Event Spektakuler<br/>
<span className="text-slate-400">Dengan Eksekusi Sempurna.</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Mitra strategis Anda dalam merancang pengalaman acara yang profesional, terorganisir, dan tak terlupakan. Dari konsep hingga realisasi.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded-lg transition-all shadow-lg shadow-amber-900/20 flex items-center justify-center gap-2" href="#contact">
                    Konsultasi Gratis
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-lg transition-all border border-slate-700 flex items-center justify-center gap-2" href="#services">
                    Lihat Layanan
                </a>
</div>
</div>
</section>

<section className="py-12 border-b border-slate-100 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Dipercaya oleh Perusahaan Terkemuka</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-center font-bold text-slate-800 text-xl tracking-tighter">CORP<span className="text-slate-300">ONE</span></div>
<div className="text-center font-bold text-slate-800 text-xl tracking-tighter">NEX<span className="text-slate-300">TECH</span></div>
<div className="text-center font-bold text-slate-800 text-xl tracking-tighter">GLOBAL<span className="text-slate-300">IND</span></div>
<div className="text-center font-bold text-slate-800 text-xl tracking-tighter">BUMN<span className="text-slate-300">KITA</span></div>
<div className="text-center font-bold text-slate-800 text-xl tracking-tighter">INDO<span className="text-slate-300">BRAND</span></div>
<div className="text-center font-bold text-slate-800 text-xl tracking-tighter">ROYAL<span className="text-slate-300">GRP</span></div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Tentang Kami</h2>
<div className="space-y-6 text-slate-600 leading-relaxed">
<p>
<strong className="text-slate-900">AB Event Organizer</strong>, di bawah naungan PT Maju Inspirasi Bangsa, adalah penyedia layanan manajemen acara profesional yang berbasis di Jakarta. Kami berdedikasi untuk mengubah visi klien menjadi realitas yang mengesankan.
                        </p>
<p>
                            Dengan pengalaman menangani berbagai skala acara, mulai dari pertemuan korporat tertutup hingga festival berskala besar, tim kami mengedepankan presisi, kreativitas, dan kepuasan klien sebagai prioritas utama.
                        </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<span className="block text-2xl font-semibold text-slate-900 mb-1">5+</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Tahun Pengalaman</span>
</div>
<div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
<span className="block text-2xl font-semibold text-slate-900 mb-1">200+</span>
<span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Event Sukses</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden relative shadow-2xl shadow-slate-200/50">
<img alt="Tim Event Organizer" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?q=80&amp;w=2573&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-medium text-lg">PT Maju Inspirasi Bangsa</p>
<p className="text-sm opacity-80">Profesionalisme Tanpa Batas</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-amber-600 font-medium text-xs tracking-widest uppercase mb-3 block">Layanan Kami</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Solusi All-in-One untuk Event Anda</h2>
<p className="text-slate-500">Kami menyediakan layanan komprehensif untuk memastikan setiap detail acara Anda tertangani dengan sempurna.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:presentation" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20m-1 0v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3m4 18l5-5l5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Meeting &amp; Seminars</h3>
<p className="text-sm text-slate-500 leading-relaxed">Pengaturan ruang pertemuan yang kondusif, perlengkapan audio-visual mutakhir, dan manajemen peserta yang efisien.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mic-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m11 7.601l-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"></path><path d="M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2s-2.775-3.369-1.5-4.5"></path><circle cx="16" cy="7" r="5"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Conference</h3>
<p className="text-sm text-slate-500 leading-relaxed">Manajemen konferensi skala besar dengan sistem registrasi digital, pengaturan stage, dan hospitality tamu VIP.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:store" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Exhibition</h3>
<p className="text-sm text-slate-500 leading-relaxed">Desain booth, layout pameran, manajemen tenant, dan promosi acara untuk memastikan traffic pengunjung maksimal.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:party-popper" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5.8 11.3L2 22l10.7-3.79M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10m8 3l-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17M11 2l.33.82c.34.86-.2 1.82-1.11 1.98c-.7.1-1.22.72-1.22 1.43V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5s-3.07-.07-5-2s-2.83-4.17-2-5s3.07.07 5 2"></path></g></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Gathering &amp; Gala Dinner</h3>
<p className="text-sm text-slate-500 leading-relaxed">Konsep acara yang hangat dan menghibur, katering berkualitas, dan hiburan yang disesuaikan dengan budaya perusahaan.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Team Building</h3>
<p className="text-sm text-slate-500 leading-relaxed">Aktivitas outdoor dan indoor yang dirancang untuk memperkuat kerjasama tim, kepemimpinan, dan semangat kerja.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-slate-900 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:monitor-play" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56zM12 17v4m-4 0h8"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect></g></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Virtual &amp; Hybrid Event</h3>
<p className="text-sm text-slate-500 leading-relaxed">Solusi streaming berkualitas tinggi untuk menjangkau audiens global tanpa batasan geografis.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-6">Kenapa Memilih AB Event?</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Kami memahami bahwa setiap acara membawa reputasi brand Anda. Oleh karena itu, kami menerapkan standar operasional yang ketat untuk menjamin kesuksesan.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-amber-500 mt-1 iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<div>
<span className="text-slate-400 text-sm">Personel yang terlatih menangani berbagai situasi lapangan.</span>
</div>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-amber-500 mt-1 iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<div>
<span className="text-slate-400 text-sm">Penawaran yang jujur, efisien, dan tanpa biaya tersembunyi.</span>
</div>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-amber-500 mt-1 iconify--lucide" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<div>
<span className="text-slate-400 text-sm">Kami mengurus segalanya, mulai dari perizinan hingga pembersihan pasca-acara.</span>
</div>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
<svg aria-hidden="true" className="iconify text-amber-500 mb-4 iconify--lucide" data-icon="lucide:clock" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<h4 className="font-medium text-white mb-2">Tepat Waktu</h4>
<p className="text-xs text-slate-400">Rundown yang presisi dan disiplin waktu yang tinggi.</p>
</div>
<div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
<svg aria-hidden="true" className="iconify text-amber-500 mb-4 iconify--lucide" data-icon="lucide:shield-check" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<h4 className="font-medium text-white mb-2">Terpercaya</h4>
<p className="text-xs text-slate-400">Legalitas PT Maju Inspirasi Bangsa yang jelas dan resmi.</p>
</div>
<div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
<svg aria-hidden="true" className="iconify text-amber-500 mb-4 iconify--lucide" data-icon="lucide:lightbulb" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5c1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5c.7.7 1.3 1.5 1.5 2.5m0 4h6m-5 4h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-medium text-white mb-2">Kreatif</h4>
<p className="text-xs text-slate-400">Ide segar yang relevan dengan tren masa kini.</p>
</div>
<div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
<svg aria-hidden="true" className="iconify text-amber-500 mb-4 iconify--lucide" data-icon="lucide:heart-handshake" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-medium text-white mb-2">Komunikatif</h4>
<p className="text-xs text-slate-400">Laporan berkala dan respons cepat kepada klien.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-amber-600 font-medium text-xs tracking-widest uppercase mb-3 block">Portofolio</span>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Karya Terbaik Kami</h2>
</div>
<a className="text-sm font-medium text-slate-900 flex items-center gap-2 hover:text-amber-600 transition-colors" href="#">
                    Lihat Semua Event <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl bg-slate-200 aspect-[4/3] mb-4 relative">
<img alt="Corporate Summit" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">National Tech Summit 2023</h3>
<p className="text-sm text-slate-500 mt-1">Conference &amp; Exhibition • Jakarta</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl bg-slate-200 aspect-[4/3] mb-4 relative">
<img alt="Annual Gathering" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">BUMN Annual Gathering</h3>
<p className="text-sm text-slate-500 mt-1">Gala Dinner &amp; Awarding • Bali</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-xl bg-slate-200 aspect-[4/3] mb-4 relative">
<img alt="Product Launch" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&amp;w=2612&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">Automotive Brand Launch</h3>
<p className="text-sm text-slate-500 mt-1">Product Launching • Tangerang</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">Mulai Rencanakan Event Anda</h2>
<p className="text-slate-500 mb-10 leading-relaxed">
                        Hubungi tim kami untuk konsultasi gratis mengenai kebutuhan acara Anda. Kami siap memberikan penawaran terbaik sesuai dengan anggaran dan ekspektasi Anda.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Kantor Pusat</h4>
<p className="text-slate-500 text-sm mt-1">Jl. Jendral Sudirman No. Kav 52-53,Jakarta Selatan, 12190</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">Email</h4>
<p className="text-slate-500 text-sm mt-1">hello@abevent.co.id</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-900 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm">WhatsApp / Telepon</h4>
<p className="text-slate-500 text-sm mt-1">+62 812 3456 7890</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Nama Lengkap</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 transition-shadow" placeholder="Nama Anda" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Perusahaan</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 transition-shadow" placeholder="Nama Perusahaan" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Email</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 transition-shadow" placeholder="email@perusahaan.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Jenis Event</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 transition-shadow appearance-none bg-white text-slate-500">
<option>Pilih jenis event...</option>
<option>Corporate Gathering</option>
<option>Conference / Seminar</option>
<option>Exhibition</option>
<option>Team Building</option>
<option>Lainnya</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700">Pesan / Kebutuhan</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-1 transition-shadow" placeholder="Ceritakan detail rencana acara Anda..." rows="4"></textarea>
</div>
<button className="w-full py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" type="button">
                            Kirim Pesan
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-md font-semibold text-sm">AB</div>
<span className="text-slate-900 font-semibold tracking-tight">AB Event Organizer</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                        PT Maju Inspirasi Bangsa.<br/>
                        Mitra terpercaya untuk solusi event management yang profesional, kreatif, dan berorientasi pada hasil.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Perusahaan</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#home">Beranda</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#about">Tentang Kami</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#services">Layanan</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Legal &amp; Support</h4>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Hubungi Kami</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2023 PT Maju Inspirasi Bangsa. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
