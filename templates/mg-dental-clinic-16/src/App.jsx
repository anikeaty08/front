import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile menu toggle
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.getElementById('mobileMenu').classList.add('hidden');
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b bg-white/95 border-gray-100" style={{backdropFilter: 'blur(16px)'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex lg:h-20 h-16 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-transform group-hover:scale-110" style={{background: '#00D9A3'}}>
<svg className="lucide lucide-smile" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<span className="font-bold text-lg tracking-tight font-sans text-gray-900">MG Dental Clinic</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="transition-colors hover:text-gray-900 font-sans" href="#about">Tentang</a>
<a className="transition-colors hover:text-gray-900 font-sans" href="#services">Layanan</a>
<a className="transition-colors hover:text-gray-900 font-sans" href="#why-us">Keunggulan</a>
<a className="transition-colors hover:text-gray-900 font-sans" href="#reviews">Testimoni</a>
<a className="transition-colors hover:text-gray-900 font-sans" href="#location">Lokasi</a>
</div>
<a className="text-sm px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg flex items-center gap-2 text-white font-sans hover:-translate-y-0.5" href="https://wa.me/6281313616136" style={{background: '#00D9A3'}} target="_blank">
          Reservasi via WA
          <svg aria-hidden="true" className="iconify w-4 h-4 iconify--lucide" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="md:hidden p-2 text-gray-600" id="mobileMenuBtn">
<svg aria-hidden="true" className="iconify w-6 h-6 iconify--lucide" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden border-t px-4 py-4 bg-white border-gray-100" id="mobileMenu">
<div className="flex flex-col gap-4 text-sm font-medium text-gray-600">
<a className="py-2 font-sans" href="#about">Tentang Kami</a>
<a className="py-2 font-sans" href="#services">Layanan</a>
<a className="py-2 font-sans" href="#reviews">Testimoni</a>
<a className="py-2 font-sans" href="#location">Lokasi</a>
</div>
</div>
</nav>
<main>

<section className="lg:pt-32 lg:pb-24 sm:px-6 lg:px-8 pt-24 pr-4 pb-16 pl-4">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium mb-6 border border-green-100">
<svg className="text-yellow-400" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Rating 4.8 (62 Ulasan)
            </div>
<h1 className="sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-3xl tracking-tight mb-6 text-gray-900 font-sans font-semibold">
              Senyum Sehat &amp; Percaya Diri Bersama
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-500" style={{color: '#00D9A3'}}>MG Dental Clinic</span>
</h1>
<p className="text-base lg:text-lg leading-relaxed mb-8 max-w-xl text-gray-600 font-sans">
              Kami memberikan layanan perawatan gigi profesional, ramah, dan nyaman untuk seluruh keluarga. Mulai dari anak-anak hingga dewasa di Depok.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl hover:scale-105 text-white font-sans" href="https://wa.me/6281313616136" style={{background: '#00D9A3'}} target="_blank">
                Reservasi Sekarang
                <svg aria-hidden="true" className="iconify w-5 h-5 iconify--lucide" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 border-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 font-sans" href="https://wa.me/6281313616136" target="_blank">
<svg className="lucide lucide-phone" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Hubungi via WhatsApp
              </a>
</div>
<div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
<span className="flex items-center gap-2 font-sans"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg> Dokter Berpengalaman</span>
<span className="flex items-center gap-2 font-sans">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Peralatan Modern
              </span>
</div>
</div>

<div className="animate-fade-in relative hidden lg:block" style={{animationDelay: '0.2s'}}>
<div className="overflow-hidden border rounded-3xl relative shadow-2xl border-gray-100 aspect-square">
<img alt="Dokter Gigi Ramah" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{animationDuration: '3s'}}>
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-500">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 21.37z"></path><path d="M12 21.37z"></path><path d="M12 3a7 7 0 0 0-7 9c0 5.55 7 12 7 12s7-6.45 7-12a7 7 0 0 0-7-9z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="text-xs text-gray-500 font-medium">Lokasi</p>
<p className="text-sm font-bold text-gray-900">Cimanggis, Depok</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-50 border-y border-gray-100" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-sm font-bold tracking-widest text-green-500 uppercase mb-3">Tentang Kami</h2>
<h3 className="text-3xl font-bold text-gray-900 mb-6 font-sans">Mengutamakan Kenyamanan Pasien</h3>
<p className="text-lg text-gray-600 leading-relaxed font-sans">
                    MG Dental Clinic hadir untuk memberikan solusi kesehatan gigi yang menyeluruh. Kami berkomitmen menyediakan layanan perawatan gigi yang profesional dalam suasana yang nyaman dan bersahabat, baik untuk anak-anak maupun orang dewasa. Senyum sehat Anda adalah prioritas kami.
                </p>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900 font-sans font-semibold">
            Layanan Kami
          </h2>
<p className="text-gray-600 max-w-2xl mx-auto">Solusi lengkap untuk kesehatan gigi dan mulut Anda</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100 group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-green-50" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg className="iconify" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.3.3 0 1 0 .2.3V4a1 1 0 0 1 1 1v5a5 5 0 0 1-10 0V5a1 1 0 0 1 1-1z"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans">Pemeriksaan &amp; Konsultasi</h3>
<p className="text-sm text-gray-600 font-sans">Cek kondisi kesehatan gigi secara menyeluruh dengan dokter profesional kami.</p>
</div>

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100 group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-green-50" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg className="iconify" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans">Pembersihan Karang Gigi</h3>
<p className="text-sm text-gray-600 font-sans">Scaling untuk membersihkan plak dan karang gigi agar napas lebih segar.</p>
</div>

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100 group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-green-50" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg className="iconify" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans">Perawatan Gigi Anak</h3>
<p className="text-sm text-gray-600 font-sans">Pendekatan ramah anak agar si kecil tidak takut ke dokter gigi.</p>
</div>

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100 group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-green-50" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg className="iconify" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans">Tambal Gigi</h3>
<p className="text-sm text-gray-600 font-sans">Perbaikan gigi berlubang dengan bahan berkualitas dan tahan lama.</p>
</div>

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100 group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-green-50" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg className="iconify" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans">Cabut Gigi</h3>
<p className="text-sm text-gray-600 font-sans">Prosedur pencabutan gigi yang aman dengan minim rasa sakit.</p>
</div>

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-gray-100 group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors group-hover:bg-green-50" style={{background: 'rgba(0, 217, 163, 0.1)'}}>
<svg className="iconify" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: '#00D9A3'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-3 text-gray-900 font-sans">Perawatan Gigi Umum</h3>
<p className="text-sm text-gray-600 font-sans">Berbagai layanan medis gigi lainnya sesuai kebutuhan pasien.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" id="why-us">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900 font-sans font-semibold">
            Mengapa MG Dental Clinic?
          </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
<div className="rounded-2xl p-6 lg:p-8 border bg-white border-gray-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-green-50">
<svg className="text-green-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
</div>
<h3 className="text-base font-semibold mb-2 text-gray-900 font-sans">Dokter Berpengalaman</h3>
<p className="text-sm text-gray-600 font-sans">Ditangani oleh dokter gigi profesional dengan jam terbang tinggi.</p>
</div>
<div className="rounded-2xl p-6 lg:p-8 border bg-white border-gray-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-50">
<svg className="text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
<h3 className="text-base font-semibold mb-2 text-gray-900 font-sans">Pelayanan Ramah</h3>
<p className="text-sm text-gray-600 font-sans">Staf dan dokter yang komunikatif membuat Anda merasa nyaman.</p>
</div>
<div className="rounded-2xl p-6 lg:p-8 border bg-white border-gray-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-yellow-50">
<svg className="text-yellow-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<h3 className="text-base font-semibold mb-2 text-gray-900 font-sans">Rating Tinggi</h3>
<p className="text-sm text-gray-600 font-sans">Dipercaya oleh banyak pasien dengan rating 4.8 di Google.</p>
</div>
<div className="rounded-2xl p-6 lg:p-8 border bg-white border-gray-100">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-purple-50">
<svg className="text-purple-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="text-base font-semibold mb-2 text-gray-900 font-sans">Lokasi Strategis</h3>
<p className="text-sm text-gray-600 font-sans">Mudah dijangkau di area Ruko Permata Cimanggis, Depok.</p>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" id="reviews">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12 lg:mb-16">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900 font-sans font-semibold">
            Apa Kata Pasien Kami?
          </h2>
<div className="flex items-center justify-center gap-2 mb-2">
<div className="flex text-yellow-400">
<svg className="lucide lucide-star" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<span className="text-gray-600 font-medium">4.8 dari 62 Ulasan Google</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 bg-white border-gray-100">
<div className="flex gap-1 mb-4 text-yellow-400">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mb-6 leading-relaxed text-gray-700 font-sans text-sm">
              "Pelayanan sangat memuaskan, dokter sangat ramah dan detail dalam menjelaskan kondisi gigi saya. Tempatnya juga bersih dan nyaman. Sangat rekomendasi untuk warga Depok."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">A</div>
<div>
<p className="text-sm font-semibold text-gray-900 font-sans">Ahmad R.</p>
<p className="text-xs text-gray-500 font-sans">Pasien Cabut Gigi</p>
</div>
</div>
</div>

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 bg-white border-gray-100">
<div className="flex gap-1 mb-4 text-yellow-400">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mb-6 leading-relaxed text-gray-700 font-sans text-sm">
              "Anak saya biasanya takut ke dokter gigi, tapi di MG Dental Clinic dokternya sabar banget. Proses tambal gigi berjalan lancar tanpa drama. Terima kasih!"
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">S</div>
<div>
<p className="text-sm font-semibold text-gray-900 font-sans">Siti N.</p>
<p className="text-xs text-gray-500 font-sans">Ibu Rumah Tangga</p>
</div>
</div>
</div>

<div className="rounded-2xl p-8 border shadow-sm hover:shadow-xl transition-all duration-300 bg-white border-gray-100">
<div className="flex gap-1 mb-4 text-yellow-400">
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<p className="mb-6 leading-relaxed text-gray-700 font-sans text-sm">
              "Scaling di sini bersih banget dan ga sakit. Lokasinya strategis di Cimanggis, parkiran juga mudah. Pasti bakal balik lagi untuk check up rutin."
            </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold text-xs">B</div>
<div>
<p className="text-sm font-semibold text-gray-900 font-sans">Budi S.</p>
<p className="text-xs text-gray-500 font-sans">Karyawan Swasta</p>
</div>
</div>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center gap-2 text-green-600 font-medium hover:underline" href="https://maps.app.goo.gl/woqgKf7ZgtvHDcq57" target="_blank">
                Lihat semua ulasan di Google Maps
                <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
</a>
</div>
</div>
</section>

<section className="py-16 bg-gray-900 text-white" id="location">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-bold mb-8">Kunjungi Kami</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-green-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h3 className="font-semibold text-lg mb-1">Alamat</h3>
<p className="text-gray-400 leading-relaxed">
                                    Ruko Permata Cimanggis Blok CC No. 17,<br/>
                                    Kota Depok, Jawa Barat 16457<br/>
<span className="text-sm text-gray-500 mt-1 block">Area: HV39+VG Cimpaeun, Depok City</span>
</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-green-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div>
<h3 className="font-semibold text-lg mb-1">Jam Operasional</h3>
<p className="text-gray-400">
                                    Setiap Hari: 09.00 – 21.00<br/>
</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-green-400">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div>
<h3 className="font-semibold text-lg mb-1">Kontak</h3>
<p className="text-gray-400">WhatsApp / Telepon:<br/> <a className="hover:text-green-400 transition-colors" href="https://wa.me/6281313616136">0813-1361-6136</a></p>
</div>
</div>
</div>
</div>
<div className="h-80 w-full rounded-2xl overflow-hidden border border-gray-700 bg-gray-800 relative">

<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.055310166299!2d106.8876493!3d-6.3868641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eb3f0e047333%3A0xc3f8e5399589d870!2sRuko%20Permata%20Cimanggis!5e0!3m2!1sen!2sid!4v1715000000000!5m2!1sen!2sid" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8" style={{background: '#00D9A3'}}>
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6 text-white font-sans font-semibold">
          Siap Merawat Kesehatan Gigi Anda?
        </h2>
<p className="text-lg mb-10 max-w-2xl mx-auto text-white/90 font-sans">
          Jangan tunggu sakit gigi. Reservasi jadwal konsultasi Anda sekarang dengan mudah melalui WhatsApp.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl bg-white text-gray-900 font-sans" href="https://wa.me/6281313616136" target="_blank">
            Reservasi via WhatsApp
            <svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</a>
</div>
</div>
</section>

<footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-2">
<div className="w-6 h-6 rounded flex items-center justify-center text-white" style={{background: '#00D9A3'}}>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<span className="font-bold text-lg font-sans text-gray-900">MG Dental Clinic</span>
</div>
<p className="text-sm text-gray-500 font-sans">
                  Klinik Gigi Profesional di Depok, Jawa Barat.<br/>
                  Senyum sehat Anda adalah komitmen kami.
                </p>
</div>
<div className="flex gap-6 text-sm text-gray-500 font-medium">
<a className="hover:text-green-600 transition-colors" href="#about">Tentang</a>
<a className="hover:text-green-600 transition-colors" href="#services">Layanan</a>
<a className="hover:text-green-600 transition-colors" href="#location">Lokasi</a>
</div>
</div>
<div className="pt-8 mt-8 border-t text-center md:text-left border-gray-100 flex flex-col md:flex-row justify-between text-sm text-gray-400">
<p>© 2024 MG Dental Clinic. All Rights Reserved.</p>
</div>
</div>
</footer>
</main>


    </>
  );
}
