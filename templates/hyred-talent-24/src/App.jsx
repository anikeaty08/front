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
      
<div className="flex-grow flex flex-col relative" x-data="{ 
        mobileMenu: false,
        processing: false,
        uploadSuccess: false,
        scrolled: false,
        
        init() {
            window.addEventListener('scroll', () =&gt; {
                this.scrolled = window.scrollY &gt; 50;
            });
        },

        startUpload() {
            this.processing = true;
            // Simulate AI Processing
            setTimeout(() =&gt; {
                this.processing = false;
                this.uploadSuccess = true;
                // Optional: Scroll to success message or form
            }, 2500);
        },

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }">

<nav :className="scrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-100 h-16' : 'bg-transparent h-20'" className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
<div @click="scrollToTop()" className="flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-red-500/20">
                        H
                    </div>
<span className="font-semibold tracking-tight text-lg">Hyred</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-zinc-900 transition-colors" href="#cara-kerja">Cara Kerja</a>
<a className="hover:text-zinc-900 transition-colors" href="#keamanan">Keamanan</a>
<a className="hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</div>
<button @click="scrollToTop()" className="hidden md:flex bg-zinc-900 hover:bg-black text-white text-xs font-medium py-2 px-4 rounded-full transition-all">
                    Upload CV
                </button>
</div>
</nav>
<main className="flex-grow w-full">

<section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-red-50/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-semibold text-red-600 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                    HYRED'S TALENT MATCHING
                </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.1] mb-6">
                    Dicarriin Kerja Lewat <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Hyred's Talent Matching</span>
</h1>
<p className="text-zinc-500 text-lg font-light leading-relaxed max-w-xl mx-auto mb-8">
                    Upload CVmu sekali, kita bantu cariin di partner company terverifikasi. Biar kamu bisa dapet panggilan interview berkali kali.
                </p>

<div className="flex flex-wrap justify-center gap-3 mb-10">
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-medium text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:wallet-money-linear"></iconify-icon>
                        Gak Pake Bayar
                    </div>
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-full text-xs font-medium text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:magnifer-linear"></iconify-icon>
                        Gak Ribet Cari Lowongan
                    </div>
</div>

<div className="max-w-md mx-auto relative group">

<div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-4 text-center animate-fade-in-up" x-cloak="" x-show="uploadSuccess">
<div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
<iconify-icon icon="solar:check-circle-bold" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-zinc-900 mb-1">Mantap! CV berhasil diproses</h3>
<p className="text-xs text-zinc-500">Bentar lagi profil anonim kamu jadi.</p>
</div>

<div className="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm rounded-2xl border border-zinc-200 flex flex-col items-center justify-center" x-cloak="" x-show="processing">
<div className="w-16 h-20 border-2 border-zinc-200 rounded-lg relative overflow-hidden bg-white mb-4">
<div className="absolute w-full h-1 bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] animate-scan z-10"></div>
<div className="p-2 space-y-2 opacity-30">
<div className="h-2 bg-zinc-300 rounded w-3/4"></div>
<div className="h-2 bg-zinc-300 rounded w-1/2"></div>
<div className="h-2 bg-zinc-300 rounded w-full"></div>
<div className="h-2 bg-zinc-300 rounded w-full"></div>
</div>
</div>
<p className="text-sm font-medium text-zinc-900 animate-pulse">AI lagi baca CV kamu...</p>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-2 shadow-xl shadow-zinc-200/50 hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-200 transition-all duration-300" x-show="!uploadSuccess">
<div className="bg-zinc-50 border border-zinc-200/50 rounded-xl border-dashed p-6 flex items-center gap-4 group-hover:bg-red-50/30 transition-colors">
<div className="w-12 h-12 bg-white rounded-lg border border-zinc-200 shadow-sm flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:file-text-bold-duotone" width="24"></iconify-icon>
</div>
<div className="text-left flex-grow min-w-0">
<p className="text-sm font-semibold text-zinc-900 truncate">CV_Education_Full name.pdf</p>
<p className="text-xs text-zinc-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    Status: Siap di-upload
                                </p>
</div>
<button @click="startUpload()" className="hidden sm:flex text-xs font-medium text-red-600 hover:text-red-700 underline decoration-red-200 underline-offset-4">
                                Ganti file
                            </button>
</div>
<div className="p-2 mt-1">
<button :disabled="processing" @click="startUpload()" className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3.5 px-4 rounded-xl transition-all shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 group/btn">
<span>Lanjut</span>
<iconify-icon className="transition-transform group-hover/btn:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="text-[10px] text-zinc-400 mt-2">Support: PDF, Docx (Max 5MB)</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-50 border-y border-zinc-100" id="cara-kerja">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 space-y-2">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Gimana Cara Kerjanya?</h2>
<p className="text-zinc-500 max-w-lg mx-auto">Bukan magic, tapi sistem pinter yang bikin hidup kamu gampang.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-200 via-zinc-200 to-transparent -z-10"></div>

<div className="relative group">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 font-bold text-sm shadow-sm mb-6 z-10 mx-auto md:mx-0">1</div>
<div className="h-12 w-12 bg-red-50 rounded-xl text-red-600 flex items-center justify-center mb-4 mx-auto md:mx-0">
<iconify-icon icon="solar:cloud-upload-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-zinc-900 mb-2 text-center md:text-left">Upload CV Sekali Aja</h3>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">
                                Gak perlu isi form panjang. Cukup upload CV terbaikmu, biar AI kita yang kerja ekstra.
                            </p>
</div>

<div className="relative group">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 font-bold text-sm shadow-sm mb-6 z-10 mx-auto md:mx-0">2</div>
<div className="h-12 w-12 bg-blue-50 rounded-xl text-blue-600 flex items-center justify-center mb-4 mx-auto md:mx-0">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-zinc-900 mb-2 text-center md:text-left">Profil Jadi "Glowing"</h3>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">
                                Sistem merapikan data (skill, tools) jadi profil profesional standar recruiter.
                            </p>
</div>

<div className="relative group">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 font-bold text-sm shadow-sm mb-6 z-10 mx-auto md:mx-0">3</div>
<div className="h-12 w-12 bg-purple-50 rounded-xl text-purple-600 flex items-center justify-center mb-4 mx-auto md:mx-0">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-zinc-900 mb-2 text-center md:text-left">Matching Otomatis</h3>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">
                                Profil "terbang" ke dashboard partner recruiter terverifikasi yang cari skill kamu.
                            </p>
</div>

<div className="relative group">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center text-zinc-900 font-bold text-sm shadow-sm mb-6 z-10 mx-auto md:mx-0">4</div>
<div className="h-12 w-12 bg-green-50 rounded-xl text-green-600 flex items-center justify-center mb-4 mx-auto md:mx-0">
<iconify-icon icon="solar:user-check-linear" width="24"></iconify-icon>
</div>
<h3 className="font-semibold text-zinc-900 mb-2 text-center md:text-left">Lo Pegang Kendali</h3>
<p className="text-xs text-zinc-500 leading-relaxed text-center md:text-left">
                                Recruiter kirim request. Kamu bisa Terima buat interview, atau Tolak. Simple.
                            </p>
</div>
</div>
<div className="mt-12 text-center">
<button @click="scrollToTop()" className="inline-flex items-center gap-2 text-red-600 font-medium text-sm hover:gap-3 transition-all">
                            Mulai Upload CV
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-5xl mx-auto" id="keamanan">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Privasi Aman, <br/> <span className="text-zinc-400">Hati Tenang.</span></h2>
<div className="space-y-4">

<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:ghost-smile-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Ghost Mode</h4>
<p className="text-xs text-zinc-500 mt-1">Identitas kamu baru kebuka setelah kamu kasih izin "YES".</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Verified Only</h4>
<p className="text-xs text-zinc-500 mt-1">Kita cuma kerja sama perusahaan yang ada kantor dan legalitasnya.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:settings-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900">Control Panel</h4>
<p className="text-xs text-zinc-500 mt-1">Hapus data atau matiin profil kapanpun. Permanen.</p>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-2xl p-6 text-white shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-600 blur-[80px] opacity-20"></div>
<div className="flex items-center justify-between mb-6 border-b border-zinc-700 pb-4">
<span className="text-xs font-mono text-zinc-400">STATUS: GHOST MODE ON</span>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
<div className="space-y-3 font-mono text-xs text-zinc-300">
<div className="flex justify-between">
<span>Name:</span>
<span className="blur-sm select-none">John Doe</span>
</div>
<div className="flex justify-between">
<span>Email:</span>
<span className="blur-sm select-none">john@gmail.com</span>
</div>
<div className="flex justify-between">
<span>Phone:</span>
<span className="blur-sm select-none">+62 812 0000</span>
</div>
<div className="flex justify-between text-white font-bold pt-2 border-t border-zinc-700 mt-2">
<span>Skills:</span>
<span className="">React, Node.js (Visible)</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-50 border-y border-zinc-100">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Intip Dashboard Recruiter</h2>
<p className="text-zinc-500 text-sm mt-2">Ini yang dilihat perusahaan sebelum kamu accept request mereka.</p>
</div>
<div className="grid md:grid-cols-2 gap-4">

<div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center gap-2 mb-4 text-green-600">
<iconify-icon icon="solar:eye-linear" width="20"></iconify-icon>
<h3 className="font-semibold text-sm uppercase tracking-wide">Recruiter Bisa Liat</h3>
</div>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-zinc-700">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Summary Karir &amp; Pencapaian
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-700">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Tech Stack &amp; Skill Utama
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-700">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Industri yang Dikuasai
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-700">
<iconify-icon className="text-green-500 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                                    Skor Kecocokan sama Job
                                </li>
</ul>
</div>

<div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm relative overflow-hidden">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBMODAgMCIgc3Ryb2tlPSIjZjRmNHY1IiBzdHJva2Utd2lkdGg9IjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none"></div>
<div className="flex items-center gap-2 mb-4 text-red-600 relative z-10">
<iconify-icon icon="solar:eye-closed-linear" width="20"></iconify-icon>
<h3 className="font-semibold text-sm uppercase tracking-wide">Recruiter GAK BISA Liat</h3>
</div>
<ul className="space-y-3 relative z-10">
<li className="flex items-start gap-2 text-sm text-zinc-500">
<iconify-icon className="text-red-500 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                                    Nama Lengkap Kamu
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-500">
<iconify-icon className="text-red-500 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                                    Alamat Rumah (Cuma Kota)
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-500">
<iconify-icon className="text-red-500 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                                    Email &amp; Nomor WhatsApp
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-500">
<iconify-icon className="text-red-500 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
                                    Foto Profil
                                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-5xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Kenapa Harus Hyred?</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-5 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-red-500 text-3xl mb-3" icon="solar:magnet-linear"></iconify-icon>
<h3 className="font-medium text-zinc-900 mb-2">Peluang Datang Sendiri</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Mending 100 perusahaan yang liat profil kamu daripada capek apply satu-satu.</p>
</div>

<div className="p-5 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-red-500 text-3xl mb-3" icon="solar:clock-circle-linear"></iconify-icon>
<h3 className="font-medium text-zinc-900 mb-2">Hemat Waktu</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Gak perlu pantengin job board. Biar sistem kita jadi "asisten" kamu.</p>
</div>

<div className="p-5 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-red-500 text-3xl mb-3" icon="solar:filter-linear"></iconify-icon>
<h3 className="font-medium text-zinc-900 mb-2">Filter Kualitas</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Kita cuma nyariin lowongan yang match skill kamu, bukan asal lowongan.</p>
</div>

<div className="p-5 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-shadow">
<iconify-icon className="text-red-500 text-3xl mb-3" icon="solar:tag-price-linear"></iconify-icon>
<h3 className="font-medium text-zinc-900 mb-2">Gratis Selamanya</h3>
<p className="text-xs text-zinc-500 leading-relaxed">Gak ada potongan gaji atau biaya admin di awal/akhir.</p>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-50 border-t border-zinc-100" id="faq">
<div className="max-w-2xl mx-auto space-y-8">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 text-center">FAQ</h2>
<div className="space-y-2">

<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden" x-data="{ open: false }">
<button @click="open = !open" className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-zinc-50/50">
<span className="text-sm font-medium text-zinc-900">Beneran gratis?</span>
<iconify-icon :className="open ? 'rotate-180' : ''" className="transition-transform duration-200 text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-4 text-xs text-zinc-500 leading-relaxed" x-collapse="" x-show="open">
                                Iya, serius. Hyred dapet komisi dari perusahaan partner, bukan dari kamu. 100% Gratis buat talent.
                            </div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden" x-data="{ open: false }">
<button @click="open = !open" className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-zinc-50/50">
<span className="text-sm font-medium text-zinc-900">Gimana kalau aku nolak request recruiter?</span>
<iconify-icon :className="open ? 'rotate-180' : ''" className="transition-transform duration-200 text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-4 text-xs text-zinc-500 leading-relaxed" x-collapse="" x-show="open">
                                Ya gapapa. Gak ada pinalti, gak ada drama. Kita bakal cariin match yang lain buat kamu.
                            </div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden" x-data="{ open: false }">
<button @click="open = !open" className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-zinc-50/50">
<span className="text-sm font-medium text-zinc-900">Bisa buat semua jenis pekerjaan?</span>
<iconify-icon :className="open ? 'rotate-180' : ''" className="transition-transform duration-200 text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-4 text-xs text-zinc-500 leading-relaxed" x-collapse="" x-show="open">
                                Saat ini fokus kita ke partner di bidang Tech, Kreatif, dan Profesional Services.
                            </div>
</div>

<div className="bg-white rounded-xl border border-zinc-200 overflow-hidden" x-data="{ open: false }">
<button @click="open = !open" className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-zinc-50/50">
<span className="text-sm font-medium text-zinc-900">Berapa lama dataku disimpan?</span>
<iconify-icon :className="open ? 'rotate-180' : ''" className="transition-transform duration-200 text-zinc-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-4 text-xs text-zinc-500 leading-relaxed" x-collapse="" x-show="open">
                                Sampai kamu yang mutusin buat hapus. Kami patuh sama aturan perlindungan data.
                            </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 text-center">
<div className="max-w-2xl mx-auto space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900">
                        Siap Dapet Interview Tanpa <br/> Apply Berkali-kali?
                    </h2>
<p className="text-zinc-500 text-lg font-light">
                        Luangin waktu 1 menit buat upload CV, dan biarin sistem kita bukain pintu buat karir barumu.
                    </p>
<div className="pt-4 pb-20 md:pb-0">
<button @click="scrollToTop()" className="bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-full text-lg transition-all shadow-xl shadow-red-500/20 hover:scale-105">
                            Mulai Upload CV
                        </button>
</div>
</div>
</section>
</main>

<div className="fixed bottom-6 left-6 right-6 z-40 md:hidden" x-show="scrolled" x-transition:enter="transition ease-out duration-300" x-transition:enter-end="translate-y-0 opacity-100" x-transition:enter-start="translate-y-20 opacity-0">
<button @click="scrollToTop()" className="w-full bg-zinc-900 text-white font-medium py-3.5 px-4 rounded-xl shadow-2xl flex items-center justify-center gap-2 border border-zinc-800">
                Mulai Upload CV
                <iconify-icon icon="solar:arrow-up-linear" width="18"></iconify-icon>
</button>
</div>

<footer className="bg-white border-t border-zinc-200 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-200 rounded text-zinc-500 flex items-center justify-center font-bold text-xs">H</div>
<span className="font-semibold tracking-tight text-sm text-zinc-900">Hyred</span>
</div>
<p className="text-xs text-zinc-400">© 2023 Hyred Inc. All rights reserved.</p>
</div>
</footer>
</div>

    </>
  );
}
