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
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
},
colors: {
// Official ULTANGBER Palette
primary: {
50: '#eff6ff',
100: '#dbeafe',
600: '#2563EB', // Primary Blue
700: '#1d4ed8',
},
accent: {
600: '#0D9488', // Accent Teal
},
status: {
positive: '#10B981', // Positive Green
warning: '#F97316', // Warning Orange
error: '#EF4444',   // Error Red
},
neutral: {
body: '#1E293B',    // Text/Body
bg: '#F8FAFC',      // Background Light
surface: '#FFFFFF', // Card/Surface
border: '#e2e8f0'
}
}
}
}
}



    lucide.createIcons();
  
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
      

<nav className="fixed w-full z-50 top-0 border-b border-neutral-border/80 bg-neutral-surface/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center" href="#">

<img alt="ULTANGBER Logo" className="bg-center w-80 h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/563127fc-d7b9-4315-adb1-3e2d9dfe1d42_320w.png?w=800&amp;q=80"/>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-primary-600 transition-colors text-sm font-medium text-neutral-body" href="#utama">
              Utama
            </a>
<a className="hover:text-primary-600 transition-colors text-sm font-medium text-neutral-body" href="#pengenalan">
              Pengenalan
            </a>
<a className="hover:text-primary-600 transition-colors text-sm font-medium text-neutral-body" href="#komponen">
              Komponen &amp; Cara Bermain
            </a>
<a className="hover:text-primary-600 transition-colors text-neutral-body text-sm font-medium" href="#keberkesanan">
              Keberkesanan
            </a>
<a className="hover:text-primary-600 transition-colors text-sm font-medium text-neutral-body" href="#sumber">
              Sumber
            </a>
<a className="hover:text-primary-600 transition-colors text-sm font-medium text-neutral-body" href="#galeri">
              Galeri
            </a>
</div>
</div>
</div>
</nav>

<section className="overflow-hidden border-neutral-border bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c864fee3-3ca8-4156-a839-c697f9e31b50_1600w.png)] bg-cover border-b pt-32 pb-24 relative" id="utama">
<div className="absolute inset-0 grid-bg -z-10 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="sm:px-6 text-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c864fee3-3ca8-4156-a839-c697f9e31b50_1600w.png)] max-w-7xl bg-cover bg-center mr-auto ml-auto pr-4 pl-4">
<h1 className="sm:text-6xl md:text-7xl text-neutral-body leading-[1.1] text-5xl font-semibold tracking-tight font-display max-w-4xl mr-auto mb-8 ml-auto">
    Matematik bukan lagi
    <br/>
<span className="text-primary-600">sekadar nombor di kertas.</span>
</h1>
<p className="leading-relaxed text-neutral-body/80 text-lg font-normal max-w-2xl mr-auto mb-10 ml-auto">Transformasi
    pembelajaran Algebra dan Integer melalui gamifikasi papan permainan klasik. Bina kefahaman, tingkatkan minat, dan
    kuasai silibus Tingkatan 1-3.</p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="inline-flex items-center justify-center gap-2 hover:bg-primary-700 transition-all shadow-primary-600/30 sm:w-auto text-base font-semibold text-stone-400 w-full h-12 rounded-full pr-8 pl-8 shadow-xl" href="/#pengenalan">Apa
      itu ULTANGBER?</a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl opacity-10 blur-2xl">
</div>
</div>
</div>
</section>

<section className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c864fee3-3ca8-4156-a839-c697f9e31b50_1600w.png)] bg-cover bg-center pt-24 pb-24" id="pengenalan">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="">
<h2 className="font-display font-semibold text-3xl text-primary-600 tracking-tight mb-6">
              Merapatkan Jurang
              <br/>
<span className="text-neutral-body">Teori &amp; Praktikal</span>
</h2>
<p className="text-neutral-body/80 text-lg leading-relaxed mb-6">
              Ramai pelajar Tingkatan 1-3 bergelut dengan konsep abstrak seperti
              Integer dan Algebra. Kaedah tradisional 'chalk and talk' sering
              gagal menarik minat mereka.
            </p>
<p className="text-neutral-body/80 leading-relaxed text-lg mb-8" style={{}}>ULTANGBER dicipta sebagai intervensi didik hibur. Ia menukar latihan tubi yang membosankan menjadi persaingan sihat yang menyeronokkan.</p>
<div className="grid grid-cols-2 gap-6">
<div className="pl-4 border-l-4 border-accent-600">
<h4 className="font-semibold text-neutral-body">Pembelajaran Aktif</h4>
<p className="text-sm text-neutral-body/70 mt-1">
                  Pelajar bergerak, berbincang, dan bersaing secara sihat.
                </p>
</div>
<div className="pl-4 border-l-4 border-primary-600">
<h4 className="font-semibold text-neutral-body">Berpusatkan Murid</h4>
<p className="text-sm text-neutral-body/70 mt-1">
                  Guru hanya sebagai fasilitator (pembimbing).
                </p>
</div>
</div>
</div>
<div className="grid gap-6">
<div className="p-6 rounded-2xl bg-neutral-bg border border-neutral-border hover:border-primary-600/30 transition-colors">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-neutral-border text-accent-600 mb-4">
<svg className="lucide lucide-bar-chart-2 w-6 h-6" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="font-semibold text-neutral-body mb-2 text-lg">Selaras DSKP</h3>
<p className="text-sm text-neutral-body/70 leading-relaxed">
                Isi kandungan dibina merujuk Buku Teks Matematik KSSM Tingkatan
                1, 2 dan 3 untuk memastikan relevansi akademik.
              </p>
</div>
<div className="p-6 rounded-2xl bg-neutral-bg border border-neutral-border hover:border-primary-600/30 transition-colors">
<div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border border-neutral-border text-primary-600 mb-4">
<svg className="lucide lucide-layout w-6 h-6" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="font-semibold text-neutral-body mb-2 text-lg">Fleksibel</h3>
<p className="text-sm text-neutral-body/70 leading-relaxed">
                Sesuai untuk aktiviti dalam kelas, minggu STEM, atau kelas
                pemulihan untuk pengukuhan asas.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-neutral-border bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c864fee3-3ca8-4156-a839-c697f9e31b50_1600w.png)] bg-cover bg-center border-t pt-24 pb-24" id="komponen">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="font-display font-semibold text-3xl text-primary-600 tracking-tight mb-4">
            Komponen &amp; Cara Bermain
          </h2>
<p className="text-neutral-body/80 text-lg">
            Segalanya yang anda perlu tahu untuk memulakan sesi permainan dalam
            masa kurang 5 minit.
          </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
<div className="bg-white p-6 rounded-xl border border-neutral-border shadow-sm hover:shadow-md hover:border-primary-600 transition-all group">
<div className="h-16 w-16 bg-primary-50 rounded-lg mb-4 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-grid w-8 h-8" data-lucide="grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</div>
<h4 className="font-semibold text-neutral-body text-sm mb-1">
              Papan Permainan
            </h4>
<p className="text-xs text-neutral-body/70">
              Grid 1-40 dengan ilustrasi ular &amp; tangga.
            </p>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-border shadow-sm hover:shadow-md hover:border-accent-600 transition-all group">
<div className="h-16 w-16 bg-accent-600/10 rounded-lg mb-4 flex items-center justify-center text-accent-600 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-file-question w-8 h-8" data-lucide="file-question" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M12 17h.01"></path><path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"></path></svg>
</div>
<h4 className="font-semibold text-neutral-body text-sm mb-1">Kad Soalan</h4>
<p className="text-xs text-neutral-body/70">
              3 Aras: Mudah, Sederhana, Sukar.
            </p>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-border shadow-sm hover:shadow-md hover:border-status-warning transition-all group">
<div className="h-16 w-16 bg-status-warning/10 rounded-lg mb-4 flex items-center justify-center text-status-warning group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-8 h-8" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h4 className="font-semibold text-neutral-body text-sm mb-1">Kad Kuasa</h4>
<p className="text-xs text-neutral-body/70">
<span className="text-status-warning font-semibold">Freeze Formula</span> &amp; elemen kejutan.
            </p>
</div>
<div className="bg-white p-6 rounded-xl border border-neutral-border shadow-sm hover:shadow-md hover:border-neutral-body transition-all group">
<div className="h-16 w-16 bg-neutral-100 rounded-lg mb-4 flex items-center justify-center text-neutral-body group-hover:scale-110 transition-transform">
<svg className="lucide lucide-dices w-8 h-8" data-lucide="dices" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" ry="2" width="12" x="2" y="10"></rect><path d="m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"></path><path d="M6 18h.01"></path><path d="M10 14h.01"></path><path d="M15 6h.01"></path><path d="M18 9h.01"></path></svg>
</div>
<h4 className="font-semibold text-neutral-body text-sm mb-1">
              Dadu &amp; Token
            </h4>
<p className="text-xs text-neutral-body/70">
              Gunakan apa sahaja bahan maujud.
            </p>
</div>
</div>

<div className="relative">
<div className="absolute left-8 top-8 bottom-8 w-px bg-neutral-border hidden md:block"></div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row gap-8 relative">
<div className="flex-none w-16 h-16 rounded-full bg-white border-4 border-primary-50 shadow-sm flex items-center justify-center z-10 font-display font-bold text-xl text-primary-600">
                1
              </div>
<div className="flex-1 border-neutral-border hover:border-primary-600 transition-colors bg-white border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<h3 className="font-semibold text-primary-600 text-lg mb-2">
                  Baling &amp; Gerak
                </h3>
<p className="text-neutral-body leading-relaxed text-sm">Para pemain menentukan giliran. Pemain membaling dadu mengikut giliran. Gerakkan token mengikut nombor pada dadu.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 relative">
<div className="flex-none w-16 h-16 rounded-full bg-white border-4 border-accent-600/20 shadow-sm flex items-center justify-center z-10 font-display font-bold text-xl text-accent-600">
                2
              </div>
<div className="flex-1 border-neutral-border hover:border-accent-600 transition-colors bg-white border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<h3 className="text-accent-600 text-lg font-semibold mb-2">
                  Cabaran Minda
                </h3>
<p className="text-neutral-body leading-relaxed text-sm">Apabila mendarat di petak khas, pemain wajib mengambil satu <span className="text-accent-600 font-semibold">Kad Cabaran</span>. Kad soalan mempunyai tiga tahap kesukaran.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-8 relative">
<div className="flex-none w-16 h-16 rounded-full bg-white border-4 border-status-positive/20 shadow-sm flex items-center justify-center z-10 font-display font-bold text-xl text-status-positive">
                3
              </div>
<div className="flex-1 border-neutral-border hover:border-status-positive transition-colors bg-white border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<h3 className="text-status-positive text-lg font-semibold mb-2">
                  Ganjaran &amp; Denda
                </h3>
<p className="text-neutral-body leading-relaxed text-sm">Jawapan pemain akan mempengaruhi kedudukan token pemain tersebut pada papan cabaran. Kad Cabaran aras tiga akan memberi manfaat tambahan kepada pemain.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c864fee3-3ca8-4156-a839-c697f9e31b50_1600w.png)] bg-cover bg-center pt-24 pb-24 relative" id="keberkesanan">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-8">
<div className="max-w-2xl">
<h2 className="font-display font-semibold text-3xl text-primary-600 tracking-tight mb-4">
              Impak &amp; Data
            </h2>
<p className="text-neutral-body/80 text-lg">
              Diuji ke atas 30 pelajar SMK Apin-Apin. Data menunjukkan
              peningkatan ketara dalam kedua-dua prestasi akademik dan motivasi
              pelajar.
            </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-neutral-bg border border-neutral-border">
<div className="flex items-end gap-2 mb-2">
<span className="text-5xl font-display font-semibold text-primary-600 tracking-tighter">
                85%
              </span>
</div>
<p className="text-sm font-semibold text-neutral-body mb-1">
              Peningkatan Minat
            </p>
<p className="text-xs text-neutral-body/70">
              Pelajar menyatakan matematik lebih menyeronokkan berbanding kaedah
              tradisional.
            </p>
</div>

<div className="p-8 rounded-2xl bg-primary-50 border border-primary-100">
<div className="flex items-end gap-2 mb-2">
<span className="text-5xl font-display font-semibold text-status-positive tracking-tighter">
                +20
              </span>
<span className="text-lg font-medium text-status-positive mb-2">Markah</span>
</div>
<p className="text-sm font-semibold text-primary-700 mb-1">
              Purata Peningkatan Gred
            </p>
<p className="text-xs text-primary-600/80">
              Peningkatan markah purata ujian pra vs ujian pasca.
            </p>
</div>

<div className="p-8 rounded-2xl bg-neutral-bg border border-neutral-border">
<div className="flex items-end gap-2 mb-2">
<span className="text-5xl font-display font-semibold text-accent-600 tracking-tighter">
                100%
              </span>
</div>
<p className="text-sm font-semibold text-neutral-body mb-1">
              Penglibatan Aktif
            </p>
<p className="text-xs text-neutral-body/70">
              Setiap pelajar terlibat secara aktif dalam sesi pengajaran.
            </p>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8 mt-12">
<div className="sm:p-10 p-8 overflow-hidden bg-primary-600 rounded-2xl relative shadow-xl shadow-primary-600/20">
<div className="absolute top-0 right-0 p-6 opacity-10">
<svg className="lucide lucide-quote w-20 h-20 text-white fill-current" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="relative z-10">
<p className="text-lg sm:text-xl text-white font-medium leading-relaxed font-display">
                  "Sebagai guru, saya lihat pelajar yang biasanya pasif mula berani
                  mencuba. Ketakutan mereka terhadap Algebra hilang kerana fokus
                  mereka adalah untuk menang dalam permainan."
                </p>
<footer className="mt-8 flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-accent-600 flex items-center justify-center text-white font-semibold text-sm border-2 border-white/20">
                    CF
                  </div>
<div className="">
<div className="font-semibold text-white">Cikgu Faridah</div>
<div className="text-primary-100 text-sm">
                      Guru Matematik SMK Apin-Apin
                    </div>
</div>
</footer>
</blockquote>
</div>
<div className="sm:p-10 p-8 overflow-hidden bg-primary-700 rounded-2xl relative shadow-xl shadow-primary-700/20">
<div className="absolute top-0 right-0 p-6 opacity-10">
<svg className="lucide lucide-quote w-20 h-20 text-white fill-current" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<blockquote className="relative z-10">
<p className="text-lg sm:text-xl font-medium text-white font-display leading-relaxed">"Saya susah belajar matematik, tapi main game ni rasa macam bukan belajar pun. Seronok bila dapat jawab soalan."</p>
<footer className="mt-8 flex items-center gap-4">
<div className="flex text-sm font-semibold text-white bg-accent-600 w-10 h-10 rounded-full items-center justify-center border-2 border-white/20">YN</div>
<div className="">
<div className="font-semibold text-white">Aryan</div>
<div className="text-primary-100 text-sm">Pelajar Tingkatan 3</div>
</div>
</footer>
</blockquote>
</div>
</div>
</div>
</section>

<section className="border-neutral-border bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c864fee3-3ca8-4156-a839-c697f9e31b50_1600w.png)] bg-cover border-t pt-24 pb-24" id="sumber">
<div className="max-w-4xl mx-auto px-4 sm:px-6">
<div className="text-center mb-12">
<h2 className="font-display font-semibold text-3xl text-primary-600 tracking-tight mb-4">
            Muat Turun Bahan
          </h2>
<p className="text-neutral-body/80">
            Semua bahan adalah percuma untuk kegunaan pendidikan (Open Source Education).
          </p>
</div>
<div className="bg-white rounded-xl shadow-sm border border-neutral-border overflow-hidden divide-y divide-neutral-border">

<div className="p-6 flex items-center justify-between group hover:bg-neutral-bg transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-status-error/10 text-status-error flex items-center justify-center border border-status-error/20">
<svg className="lucide lucide-file-text w-6 h-6" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-body group-hover:text-primary-600 transition-colors">
                  Papan Permainan (A3)
                </h4>
<p className="text-xs text-neutral-body/70">
                  PDF • 2.4 MB • High Resolution
                </p>
</div>
</div>
<button className="px-4 py-2 text-xs font-semibold text-primary-600 bg-white border border-neutral-border rounded-md hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all flex items-center gap-2">
              Muat Turun
            </button>
</div>

<div className="p-6 flex items-center justify-between group hover:bg-neutral-bg transition-colors">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center border border-primary-100">
<svg className="lucide lucide-folder-archive w-6 h-6" data-lucide="folder-archive" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="19" r="2"></circle><path d="M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"></path><path d="M15 11v-1"></path><path d="M15 17v-2"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-body group-hover:text-primary-600 transition-colors">
                  Set Kad Soalan Lengkap
                </h4>
<p className="text-xs text-neutral-body/70">
                  ZIP • 5.1 MB • Tingkatan 1-3
                </p>
</div>
</div>
<button className="px-4 py-2 text-xs font-semibold text-primary-600 bg-white border border-neutral-border rounded-md hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all flex items-center gap-2">
              Muat Turun
            </button>
</div>
</div>
</div>
</section>

<section className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c864fee3-3ca8-4156-a839-c697f9e31b50_1600w.png?w=800&amp;q=80)] bg-auto pt-24 pb-24" id="galeri">
<div className="sm:px-6 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<h2 className="font-display font-semibold text-3xl text-primary-600 tracking-tight mb-8">
          Galeri Aktiviti
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group border border-neutral-border">
<div className="absolute inset-0 bg-neutral-200"></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary-600/50 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-semibold text-lg">Sesi Berkumpulan</p>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group bg-neutral-100 border border-neutral-border hover:border-primary-600 transition-colors">
<div className="flex text-neutral-300 absolute top-0 right-0 bottom-0 left-0 items-center justify-center group-hover:text-primary-400 transition-colors">
<svg className="lucide lucide-image w-8 h-8" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group bg-neutral-100 border border-neutral-border hover:border-primary-600 transition-colors">
<div className="absolute inset-0 flex items-center justify-center text-neutral-300 group-hover:text-primary-400 transition-colors">
<svg className="lucide lucide-image w-8 h-8" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
</div>

<div className="col-span-2 relative rounded-2xl overflow-hidden group bg-neutral-100 border border-neutral-border hover:border-primary-600 transition-colors">
<div className="absolute inset-0 flex items-center justify-center text-neutral-300 group-hover:text-primary-400 transition-colors">
<svg className="lucide lucide-image w-8 h-8" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
</div>
<div className="absolute bottom-4 left-4 text-primary-600 bg-white/90 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm backdrop-blur-sm">
              Pameran Inovasi
            </div>
</div>
</div>
<div className="flex flex-col md:flex-row border-neutral-border border-t mt-16 pt-8 gap-x-4 gap-y-4 items-center justify-between">
<div className="text-center md:text-left">
<p className="text-sm font-semibold text-primary-600">
              SEMEKAP STEM's Club
            </p>
<p className="text-xs text-neutral-body/60 mt-1">
              © 2025 Hak Cipta Terpelihara.
            </p>
</div>
<div className="flex gap-4">
<a className="text-neutral-body/50 hover:text-primary-600 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-neutral-body/50 hover:text-primary-600 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
</section>


    </>
  );
}
