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
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
indigo: {
50: '#eef2ff',
100: '#e0e7ff',
500: '#6366f1',
600: '#4f46e5',
700: '#4338ca',
900: '#312e81',
},
gray: {
850: '#1f2937',
900: '#111827',
}
},
boxShadow: {
'aura': '0 20px 40px -10px rgba(79, 70, 229, 0.1)',
'aura-hover': '0 25px 50px -12px rgba(79, 70, 229, 0.15)',
'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
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
      

<div className="blob bg-indigo-300 w-96 h-96 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
<div className="blob bg-blue-200 w-[30rem] h-[30rem] top-20 right-0 translate-x-1/3"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-gray-100/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:aperture" data-strokeWidth="2" data-width="20"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-gray-900">Aura</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" href="#">Personal</a>
<a className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" href="#">Business</a>
<a className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors" href="#">Company</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-gray-900 hover:text-indigo-600 transition-colors" href="#">Log in</a>
<a className="px-5 py-2.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg shadow-gray-900/10" href="#">
                        Get Started
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-900">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold mb-6 tracking-wide uppercase">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
</span>
                        New Generation Banking
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-gray-900 tracking-tighter leading-[1.1] mb-6">
                        Banking, <br/>Reinvented for <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">the Digital Era.</span>
</h1>
<p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
                        Buka rekening dalam 5 menit. Transaksi cepat, aman, tanpa biaya tersembunyi. Pengalaman finansial yang sesungguhnya.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 hover:-translate-y-0.5 transition-all duration-200 shadow-xl shadow-indigo-600/20" href="#">
                            Buka Rekening
                            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
<a className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-700 text-sm font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200" href="#">
                            Pelajari Fitur
                        </a>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-gray-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs overflow-hidden">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs overflow-hidden">
<span className="iconify" data-icon="lucide:smile" data-width="16"></span>
</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-xs overflow-hidden">
<span className="iconify" data-icon="lucide:heart" data-width="16"></span>
</div>
</div>
<p><span className="font-semibold text-gray-900">2.5M+</span> pengguna mempercayai Aura</p>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">

<div className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-indigo-100 to-blue-50 rounded-full blur-3xl opacity-60 -z-10"></div>

<div className="relative w-80 bg-white rounded-[2rem] shadow-2xl border border-gray-100 p-6 z-10 transform transition-transform duration-500 hover:scale-[1.02] rotate-y-6 rotate-x-6">

<div className="flex justify-between items-center mb-8">
<div>
<p className="text-xs text-gray-400 font-medium">Total Balance</p>
<p className="text-2xl font-bold text-gray-900 tracking-tight">$42,593.00</p>
</div>
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
<span className="iconify text-gray-600" data-icon="lucide:bell" data-width="20"></span>
</div>
</div>

<div className="w-full h-44 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-5 text-white shadow-lg mb-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-8">
<span className="text-lg font-semibold tracking-wider">Aura</span>
<span className="iconify" data-icon="lucide:nfc" data-width="24"></span>
</div>
<div className="mt-auto">
<p className="font-mono text-sm opacity-80 mb-1">**** **** **** 8829</p>
<div className="flex justify-between items-end">
<p className="text-xs font-medium opacity-80">ALEXANDER D.</p>
<div className="w-8 h-5 bg-white/20 rounded-sm"></div>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="18"></span>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Apple Store</p>
<p className="text-xs text-gray-400">Electronics</p>
</div>
</div>
<p className="text-sm font-semibold text-gray-900">-$299</p>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:arrow-down-left" data-width="18"></span>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Spotify</p>
<p className="text-xs text-gray-400">Subscription</p>
</div>
</div>
<p className="text-sm font-semibold text-gray-900">-$12</p>
</div>
</div>
</div>

<div className="absolute top-20 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-aura border border-white flex items-center gap-3 animate-bounce" style={{animationDuration: '4s'}}>
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:check" data-width="20"></span>
</div>
<div>
<p className="text-xs text-gray-500">Transfer Success</p>
<p className="text-sm font-semibold text-gray-900">+$1,250.00</p>
</div>
</div>

<div className="absolute bottom-32 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-aura border border-white flex items-center gap-3 animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}}>
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
<span className="iconify" data-icon="lucide:shield-check" data-width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Secure</p>
<p className="text-xs text-gray-500">Encrypted 24/7</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Buka Rekening Dalam 5 Menit</h3>
<p className="text-gray-500 leading-relaxed text-sm">Tidak perlu antre di cabang. Verifikasi identitas digital instan dan akun langsung aktif.</p>
</div>

<div className="group">
<div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Transfer Instan 24/7</h3>
<p className="text-gray-500 leading-relaxed text-sm">Kirim uang ke bank manapun secara realtime tanpa batasan waktu, kapanpun dimanapun.</p>
</div>

<div className="group">
<div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:percent" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Biaya Admin 0 Rupiah</h3>
<p className="text-gray-500 leading-relaxed text-sm">Nikmati kebebasan finansial tanpa potongan bulanan yang membebani tabungan Anda.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Semua Kebutuhan Finansial <br/>Dalam Satu Aplikasi</h2>
<p className="text-gray-500">Kelola uang Anda dengan cerdas menggunakan fitur-fitur canggih.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-aura hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:pie-chart" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Budgeting</h3>
<p className="text-sm text-gray-500 leading-relaxed">Analisis pengeluaran otomatis untuk menjaga cashflow Anda tetap sehat.</p>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-aura hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:bell-ring" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Realtime Notif</h3>
<p className="text-sm text-gray-500 leading-relaxed">Notifikasi instan untuk setiap transaksi masuk dan keluar.</p>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-aura hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:credit-card" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Virtual Debit</h3>
<p className="text-sm text-gray-500 leading-relaxed">Buat kartu virtual sekali pakai untuk belanja online yang lebih aman.</p>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-aura hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:coins" data-width="24"></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Auto-Saving</h3>
<p className="text-sm text-gray-500 leading-relaxed">Bulatkan transaksi receh Anda dan tabung selisihnya otomatis.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="mb-16 text-center">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Mulai Dalam Hitungan Menit</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-gray-100 via-indigo-100 to-gray-100 z-0"></div>
<div className="grid md:grid-cols-3 gap-12 text-center relative z-10">

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-indigo-50 flex items-center justify-center text-2xl font-bold text-indigo-600 shadow-sm mb-6">1</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Verifikasi KTP</h3>
<p className="text-sm text-gray-500">Foto KTP &amp; Selfie untuk verifikasi identitas yang aman.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-indigo-50 flex items-center justify-center text-2xl font-bold text-indigo-600 shadow-sm mb-6">2</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Aktivasi Akun</h3>
<p className="text-sm text-gray-500">Buat PIN dan password untuk mengamankan akses Anda.</p>
</div>

<div className="flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-indigo-50 flex items-center justify-center text-2xl font-bold text-indigo-600 shadow-sm mb-6">3</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Mulai Transaksi</h3>
<p className="text-sm text-gray-500">Top up saldo dan nikmati kemudahan bertransaksi.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 text-xs font-semibold mb-6 uppercase tracking-wide">
<span className="iconify" data-icon="lucide:shield" data-width="14"></span>
                Bank-Grade Security
            </div>
<h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-6">Keamanan Adalah Prioritas Utama</h2>
<p className="text-gray-500 mb-12 max-w-2xl mx-auto">Sistem kami dilindungi oleh enkripsi kelas dunia dan diawasi oleh otoritas keuangan resmi.</p>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">

<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
<div className="flex-shrink-0 mt-1 text-indigo-600">
<span className="iconify" data-icon="lucide:lock" data-width="24"></span>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-sm">ISO-Grade Encryption</h4>
<p className="text-xs text-gray-500 mt-1">Data Anda dienkripsi end-to-end.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
<div className="flex-shrink-0 mt-1 text-indigo-600">
<span className="iconify" data-icon="lucide:scan-face" data-width="24"></span>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-sm">Biometric Security</h4>
<p className="text-xs text-gray-500 mt-1">Login aman dengan wajah atau jari.</p>
</div>
</div>

<div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200">
<div className="flex-shrink-0 mt-1 text-indigo-600">
<span className="iconify" data-icon="lucide:brain-circuit" data-width="24"></span>
</div>
<div>
<h4 className="font-semibold text-gray-900 text-sm">Fraud Detection AI</h4>
<p className="text-xs text-gray-500 mt-1">Deteksi aktivitas mencurigakan 24/7.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-12 text-center">Kata Mereka Tentang Aura</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-2xl shadow-sm hover:shadow-aura transition-all duration-300">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"Aplikasi perbankan paling smooth yang pernah saya pakai. UI-nya bersih, transaksinya instan."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">

<svg className="w-full h-full text-gray-400" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Sarah M.</p>
<p className="text-xs text-gray-500">Freelancer</p>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl shadow-sm hover:shadow-aura transition-all duration-300">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"Fitur budgeting otomatis sangat membantu saya mengatur cashflow bulanan. Recommended!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<svg className="w-full h-full text-gray-400" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Budi Santoso</p>
<p className="text-xs text-gray-500">Entrepreneur</p>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-2xl shadow-sm hover:shadow-aura transition-all duration-300">
<div className="flex gap-1 text-yellow-400 mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"Akhirnya ada bank digital yang mengerti kebutuhan user. Tidak ada biaya aneh-aneh."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<svg className="w-full h-full text-gray-400" fill="currentColor" viewbox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Jessica L.</p>
<p className="text-xs text-gray-500">Designer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gray-900"></div>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-900/50 to-gray-900"></div>
<div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-8">Mulai Perbankan <br/>Masa Depan Hari Ini.</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="px-8 py-4 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-500 hover:scale-105 transition-all duration-200 shadow-lg shadow-indigo-600/30 w-full sm:w-auto" href="#">
                    Download Aplikasi
                </a>
<a className="px-8 py-4 rounded-full bg-transparent border border-gray-600 text-white text-sm font-semibold hover:bg-white/10 hover:border-white transition-all duration-200 w-full sm:w-auto" href="#">
                    Hubungi Sales
                </a>
</div>
</div>
</section>

<footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:aperture" data-width="16"></span>
</div>
<span className="text-lg font-semibold text-gray-900">Aura</span>
</div>
<p className="text-sm text-gray-500 max-w-xs mb-6">Membantu jutaan orang mencapai kebebasan finansial melalui teknologi yang aman dan transparan.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-indigo-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-gray-400 hover:text-indigo-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-gray-400 hover:text-indigo-600 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Product</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Checking</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Savings</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Credit Cards</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Investments</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Support</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 Aura Financial Technologies. All rights reserved.</p>
<div className="flex gap-6 text-xs text-gray-400">
<a className="hover:text-gray-600" href="#">Privacy Policy</a>
<a className="hover:text-gray-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
