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
        fontFamily: { sans: ['Inter', 'ui-sans-serif'] },
        extend: {
          colors: {
            primary: "#5169CD",
            accent: "#F6F8FB"
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
      

<header className="bg-white border-b shadow-sm">
<div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6">
<div className="flex items-center gap-3">
<div className="rounded-lg bg-primary w-9 h-9 flex items-center justify-center text-white text-lg font-bold">D</div>
<span className="text-2xl font-bold text-gray-900 tracking-tight">DariData</span>
</div>
<nav className="hidden md:flex gap-7 text-base">
<a className="text-gray-600 hover:text-primary transition" href="#fitur">Fitur</a>
<a className="text-gray-600 hover:text-primary transition" href="#solusi">Solusi</a>
<a className="text-gray-600 hover:text-primary transition" href="#tentang">Tentang</a>
<a className="ml-4 bg-primary text-white px-4 py-2 rounded-lg font-semibold shadow-sm hover:bg-primary/90 transition" href="#daftar">Daftar Gratis</a>
</nav>
</div>
</header>

<section className="max-w-5xl mx-auto px-6 pt-16 pb-10">
<div className="text-center">
<div className="flex justify-center mb-4">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-primary font-medium text-sm shadow-sm">
          Increase Efficiency · Reduce Costs · Drive Growth
        </div>
</div>
<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
        Mengubah Data Mentah Jadi <span className="text-primary">Insight Bisnis</span>
</h1>
<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-7">
        Aplikasi berbasis Machine Learning untuk mengubah data mentah menjadi insight yang relevan bagi UMKM.
      </p>
<a className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold shadow transition mb-3" href="#daftar">Coba Gratis</a>
<div className="flex justify-center gap-6 mt-4 text-sm text-gray-500">
<div>Tanpa komitmen</div>
<span className="mx-1">·</span>
<div>Tidak perlu kartu kredit</div>
</div>
</div>
<div className="mt-14 flex justify-center">
<div className="rounded-2xl bg-accent border border-gray-100 shadow-sm p-6 w-full max-w-3xl">
<img alt="Dashboard" className="rounded-xl w-full h-56 object-cover object-center border border-gray-200 shadow-sm" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col">
<div className="flex items-center gap-2 mb-3">
<span className="text-primary font-bold text-lg">Problem</span>
<span className="text-2xl">😕</span>
</div>
<p className="text-gray-800 mb-2 font-semibold">Perusahaan besar tumbuh karena data analytics.<br/>Mayoritas UMKM belum memanfaatkan data mereka.</p>
<ul className="text-gray-600 ml-5 list-disc space-y-1 text-base">
<li>Sudah coba promo tapi hasilnya nihil.</li>
<li>Keputusan masih berdasarkan feeling, bukan data.</li>
<li>Data menumpuk, tidak tahu cara mulai.</li>
</ul>
</div>

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 flex flex-col">
<div className="flex items-center gap-2 mb-3">
<span className="text-primary font-bold text-lg">Solusi</span>
<span className="text-2xl">🚀</span>
</div>
<p className="text-gray-800 mb-2 font-semibold">Platform analitik yang siap pakai untuk UMKM.</p>
<ul className="text-gray-600 ml-5 list-disc space-y-1 text-base">
<li>Upload data Excel atau POS, langsung dapat insight bisnis.</li>
<li>Machine Learning membersihkan, menganalisis, dan memvisualisasikan data otomatis.</li>
<li>Rekomendasi bisnis yang mudah dipahami &amp; actionable.</li>
</ul>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-14" id="fitur">
<div className="mb-12 text-center">
<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Apa yang Membuat DariData Berbeda?</h2>
<p className="text-gray-600 max-w-xl mx-auto">Analitik canggih sekelas enterprise, didesain ulang untuk UMKM. Mudah, praktis, dan langsung terasa manfaatnya.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 flex flex-col items-start">
<div className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
<svg fill="none" height="24" width="24"><path d="M11 17l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" fill="#5169CD"></path></svg>
</div>
<div className="font-semibold text-gray-900 mb-1">Actionable Recommendations</div>
<div className="text-sm text-gray-600">Saran bisnis berbasis Machine Learning, langsung bisa diterapkan.</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 flex flex-col items-start">
<div className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
<svg fill="none" height="24" width="24"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h12v2H3v-2z" fill="#5169CD"></path></svg>
</div>
<div className="font-semibold text-gray-900 mb-1">Automasi Data Cleaning</div>
<div className="text-sm text-gray-600">Upload data mentah, sistem kami akan membersihkan &amp; menyiapkan insight.</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 flex flex-col items-start">
<div className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
<svg fill="none" height="24" width="24"><circle cx="12" cy="12" r="8" stroke="#5169CD" strokeWidth="2"></circle><path d="M12 8v4l3 3" stroke="#5169CD" strokeLinecap="round" strokeWidth="2"></path></svg>
</div>
<div className="font-semibold text-gray-900 mb-1">Insight Tren Pasar</div>
<div className="text-sm text-gray-600">Pantau tren yang relevan, khusus untuk kebutuhan UMKM.</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-7 flex flex-col items-start">
<div className="w-9 h-9 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
<svg fill="none" height="24" width="24"><rect height="16" rx="5" stroke="#5169CD" strokeWidth="2" width="16" x="4" y="4"></rect></svg>
</div>
<div className="font-semibold text-gray-900 mb-1">User Friendly</div>
<div className="text-sm text-gray-600">Antarmuka sederhana, bisa langsung dipakai tanpa pelatihan.</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-14" id="solusi">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Cara Kerja DariData</h2>
<p className="text-gray-600 max-w-lg mx-auto">Mulai dalam 3 langkah mudah. Tidak perlu teknis, fokus pada pertumbuhan bisnis Anda.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center">
<div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 text-xl font-bold">1</div>
<div className="font-semibold text-gray-900 mb-1">Upload Data</div>
<div className="text-sm text-gray-600">Unggah file Excel, Google Sheets, atau hubungkan POS Anda.</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center">
<div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 text-xl font-bold">2</div>
<div className="font-semibold text-gray-900 mb-1">Analisis Otomatis</div>
<div className="text-sm text-gray-600">Sistem secara otomatis membersihkan data &amp; menganalisis pola penting.</div>
</div>
<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 flex flex-col items-center text-center">
<div className="w-11 h-11 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 text-xl font-bold">3</div>
<div className="font-semibold text-gray-900 mb-1">Lihat Insight &amp; Saran</div>
<div className="text-sm text-gray-600">Dapatkan insight visual dan rekomendasi bisnis siap pakai.</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-14 text-center" id="tentang">
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-10 px-6">
<h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Misi &amp; Keyakinan Kami</h2>
<p className="text-lg text-gray-700 mb-2">Setiap bisnis, sekecil apapun, bisa tumbuh dengan data.</p>
<p className="text-base text-gray-600">Misi kami adalah membuat analitik jadi mudah, bermanfaat, dan terjangkau bagi UKM. DariData hadir agar UMKM bisa naik kelas tanpa biaya besar atau tim IT khusus.</p>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-16" id="daftar">
<div className="rounded-2xl bg-white border border-gray-100 shadow-md py-12 px-6 text-center">
<h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Mulai Gunakan DariData Sekarang</h2>
<p className="text-lg text-gray-600 mb-7">Bawa UMKM Anda naik kelas. Dapatkan insight tanpa ribet dan <span className="text-primary font-semibold">coba gratis</span> hari ini.</p>
<a className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow transition" href="#">Daftar Gratis</a>
<div className="mt-5 text-sm text-gray-400">Tanpa komitmen — Tidak perlu kartu kredit</div>
</div>
</section>

<footer className="bg-white border-t py-8 mt-6">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-2">
<div className="flex items-center gap-2">
<div className="rounded-lg bg-primary w-7 h-7 flex items-center justify-center text-white text-base font-bold">D</div>
<span className="font-semibold text-primary">DariData</span> © 2024
      </div>
<div className="flex gap-3">
<a className="hover:text-primary transition" href="#">Kebijakan Privasi</a>
<span>|</span>
<a className="hover:text-primary transition" href="#">Kontak</a>
</div>
</div>
</footer>

    </>
  );
}
