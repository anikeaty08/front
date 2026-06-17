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



        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal, .reveal-scale').forEach((el) => {
            observer.observe(el);
        });
        
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
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-20%] right-[10%] w-[600px] h-[600px] bg-zinc-100/80 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
<div className="pointer-events-auto reveal-scale active flex items-center gap-1 p-1.5 pl-5 pr-1.5 bg-white/80 backdrop-blur-md border border-zinc-200/60 rounded-full shadow-lg shadow-zinc-200/20 ring-1 ring-white/50">

<div className="flex items-center gap-2 mr-6">
<span className="text-sm font-semibold tracking-tighter text-zinc-900">Kreator.</span>
</div>

<div className="hidden md:flex items-center gap-1 mr-2">
<a className="hover:text-zinc-900 transition-colors hover:bg-zinc-50 text-xs font-medium text-zinc-500 rounded-full py-1.5 px-3" href="#fitur">Fitur</a>
<a className="hover:text-zinc-900 transition-colors hover:bg-zinc-50 text-xs font-medium text-zinc-500 rounded-full py-1.5 px-3" href="#cara-kerja">Cara Kerja</a>
<a className="hover:text-zinc-900 transition-colors hover:bg-zinc-50 text-xs font-medium text-zinc-500 rounded-full py-1.5 px-3" href="#harga">Harga</a>
</div>

<button className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-lg shadow-zinc-900/10">
                Mulai Gratis
                <svg className="lucide lucide-arrow-right w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>

<section className="min-h-[85vh] flex flex-col w-full pt-32 pb-20 px-6 relative items-center justify-center">
<div className="absolute inset-0 bg-grid -z-10"></div>
<div className="max-w-4xl w-full text-center space-y-8 relative z-10 reveal active">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm text-zinc-600 text-[10px] font-medium tracking-wide uppercase shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                AI Video Generation V2.0
            </div>

<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-medium text-zinc-900 tracking-tighter">
                Satu Klik. <br/>
<span className="text-zinc-400">Langsung Jadi Konten.</span>
</h1>

<p className="md:text-lg leading-relaxed text-base font-light text-zinc-500 max-w-lg mx-auto">
                Platform otomatisasi video end-to-end. Kami menangani pembuatan karakter, pengeditan, hingga upload ke YouTube tanpa campur tangan Anda.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="h-10 px-6 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-900/10 hover:-translate-y-0.5">
                    Buat Video Pertama
                </button>
<button className="h-10 px-6 rounded-full bg-white border border-zinc-200 text-zinc-600 text-sm font-medium hover:bg-zinc-50 transition-all hover:border-zinc-300">
                    Lihat Demo
                </button>
</div>

<div className="mt-16 w-full max-w-5xl aspect-[16/9] relative rounded-2xl overflow-hidden border border-zinc-200 shadow-2xl shadow-zinc-200/50 bg-white reveal delay-200 active group">

<div className="absolute inset-0 flex flex-col">

<div className="h-10 border-b border-zinc-100 flex items-center px-4 gap-2 bg-zinc-50/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-200"></div>
</div>
<div className="mx-auto text-[10px] font-medium text-zinc-400">project_untitled_01.mp4</div>
</div>

<div className="flex-1 flex overflow-hidden">

<div className="w-64 border-r border-zinc-100 bg-zinc-50/30 p-4 hidden md:flex flex-col gap-4">
<div className="h-24 rounded-lg bg-zinc-100 animate-pulse w-full"></div>
<div className="space-y-2">
<div className="h-2 w-12 bg-zinc-200 rounded"></div>
<div className="h-2 w-20 bg-zinc-100 rounded"></div>
</div>
<div className="h-24 rounded-lg bg-zinc-100 w-full opacity-50"></div>
</div>

<div className="flex-1 bg-zinc-50 relative flex items-center justify-center overflow-hidden">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.3'}}></div>

<div className="relative z-10 flex gap-6 items-center">

<div className="w-32 h-40 bg-white rounded-xl shadow-lg border border-zinc-100 p-2 flex flex-col gap-2 transform -rotate-6 transition-transform group-hover:rotate-0 duration-700">
<div className="flex-1 bg-gradient-to-br from-indigo-100 to-purple-50 rounded-lg overflow-hidden relative">
<img alt="AI Face" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-1.5 w-16 bg-zinc-100 rounded-full"></div>
<div className="h-1.5 w-10 bg-zinc-100 rounded-full"></div>
</div>

<svg className="lucide lucide-arrow-right text-zinc-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>

<div className="w-48 h-32 bg-white rounded-xl shadow-lg border border-zinc-100 p-2 flex flex-col gap-2 transform rotate-3 transition-transform group-hover:rotate-0 duration-700">
<div className="flex-1 bg-zinc-900 rounded-lg relative overflow-hidden flex items-center justify-center group/play">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
<svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="flex justify-between items-center">
<div className="h-1.5 w-20 bg-zinc-100 rounded-full"></div>
<div className="text-[8px] font-mono text-zinc-400">00:59</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto pt-32 pb-32 px-6 relative" id="cara-kerja">
<div className="mb-24 text-center reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Otomatisasi Penuh</h2>
<p className="text-zinc-500 max-w-xl mx-auto text-sm leading-relaxed">
                Platform kami bekerja di latar belakang. Anda hanya perlu mengatur topik, sisanya biarkan AI yang menangani.
            </p>
</div>
<div className="relative">

<div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-[1px] timeline-gradient opacity-40"></div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32 relative group">

<div className="relative pl-16 md:pl-0 md:text-right md:pr-16 reveal order-1">
<div className="absolute left-[16px] md:left-auto md:-right-[5px] top-0 w-2.5 h-2.5 rounded-full border-[2px] border-white bg-zinc-400 ring-4 ring-zinc-50 z-10 group-hover:bg-indigo-500 transition-colors duration-500"></div>
<h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight">Generasi Karakter</h3>
<p className="text-zinc-500 leading-relaxed text-sm">
                        Pilih dari perpustakaan avatar fotorealistik atau buat karakter unik. Tentukan kepribadian, suara, dan gaya bahasa yang sesuai dengan brand channel Anda.
                    </p>
</div>

<div className="relative pl-12 md:pl-0 order-2 reveal-scale delay-200">
<div className="bg-white border border-zinc-100 rounded-2xl p-4 shadow-xl shadow-zinc-200/40 max-w-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
<svg className="lucide lucide-user w-5 h-5 text-indigo-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="text-xs font-semibold text-zinc-900">Avatar Generator</div>
<div className="text-[10px] text-zinc-500">Processing attributes...</div>
</div>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="aspect-square rounded-lg bg-zinc-100 relative overflow-hidden ring-2 ring-indigo-500 ring-offset-2">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg bg-zinc-50 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg bg-zinc-50 border border-zinc-200 border-dashed flex items-center justify-center">
<svg className="lucide lucide-plus w-4 h-4 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-32 relative group">

<div className="relative pl-12 md:pl-0 order-2 md:order-1 md:text-right flex md:justify-end reveal-scale">
<div className="bg-white border border-zinc-100 rounded-2xl p-4 shadow-xl shadow-zinc-200/40 w-full max-w-sm">
<div className="space-y-3">

<div className="flex gap-2 items-center">
<svg className="lucide lucide-video w-3 h-3 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
<div className="flex-1 h-8 bg-zinc-50 rounded border border-zinc-100 relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-2/3 bg-indigo-100 border-r-2 border-indigo-200"></div>
</div>
</div>
<div className="flex gap-2 items-center">
<svg className="lucide lucide-mic w-3 h-3 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
<div className="flex-1 h-8 bg-zinc-50 rounded border border-zinc-100 relative overflow-hidden flex items-center px-2">
<div className="w-1 bg-zinc-300 h-2 mx-0.5 rounded-full"></div>
<div className="w-1 bg-zinc-300 h-4 mx-0.5 rounded-full"></div>
<div className="w-1 bg-zinc-300 h-3 mx-0.5 rounded-full"></div>
<div className="w-1 bg-zinc-300 h-5 mx-0.5 rounded-full"></div>
<div className="w-1 bg-zinc-300 h-2 mx-0.5 rounded-full"></div>
</div>
</div>

<div className="mt-4 pt-3 border-t border-zinc-50 flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-600">AI Editing: Menambahkan B-Roll...</span>
</div>
</div>
</div>
</div>

<div className="relative pl-16 md:pl-16 order-1 md:order-2 reveal delay-200">
<div className="absolute left-[16px] md:-left-[5px] top-0 w-2.5 h-2.5 rounded-full border-[2px] border-white bg-zinc-400 ring-4 ring-zinc-50 z-10 group-hover:bg-indigo-500 transition-colors duration-500"></div>
<h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight">Pengeditan Otomatis</h3>
<p className="text-zinc-500 leading-relaxed text-sm">
                        AI menganalisis naskah untuk menambahkan B-roll, musik latar, transisi, dan subtitle dinamis. Video berdurasi 10 menit selesai dalam hitungan detik.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center relative group">

<div className="relative pl-16 md:pl-0 md:text-right md:pr-16 reveal order-1">
<div className="absolute left-[16px] md:left-auto md:-right-[5px] top-0 w-2.5 h-2.5 rounded-full border-[2px] border-white bg-zinc-400 ring-4 ring-zinc-50 z-10 group-hover:bg-indigo-500 transition-colors duration-500"></div>
<h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight">Upload ke YouTube</h3>
<p className="text-zinc-500 leading-relaxed text-sm">
                        Terintegrasi langsung dengan API YouTube Studio. Kami menangani judul yang SEO-friendly, deskripsi, tag, hingga jadwal posting otomatis.
                    </p>
</div>

<div className="relative pl-12 md:pl-0 order-2 reveal-scale delay-200">
<div className="bg-white border border-zinc-100 rounded-2xl p-4 shadow-xl shadow-zinc-200/40 max-w-sm">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-red-600 fill-current" viewbox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
<span className="text-xs font-semibold text-zinc-900">Upload Status</span>
</div>
<span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">Published</span>
</div>
<div className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 flex gap-3">
<div className="w-16 h-10 bg-zinc-200 rounded overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col gap-1">
<div className="h-2 w-32 bg-zinc-200 rounded"></div>
<div className="h-2 w-20 bg-zinc-100 rounded"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mt-1">
<div className="text-center p-2 rounded bg-zinc-50 border border-zinc-100">
<div className="text-[10px] text-zinc-400">Views</div>
<div className="text-sm font-semibold text-zinc-900">1.2k</div>
</div>
<div className="text-center p-2 rounded bg-zinc-50 border border-zinc-100">
<div className="text-[10px] text-zinc-400">CTR</div>
<div className="text-sm font-semibold text-zinc-900">8.4%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-100 bg-zinc-50/50" id="harga">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Pilih Paket Anda</h2>
<p className="text-zinc-500 text-sm mt-2">Mulai gratis, upgrade saat channel Anda berkembang.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

<div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-lg transition-all duration-300 reveal-scale">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-zinc-900">Kreator</h3>
<div className="p-2 bg-zinc-50 rounded-lg">
<svg className="lucide lucide-zap w-4 h-4 text-zinc-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-zinc-900">Rp 199rb</span>
<span className="text-zinc-500 text-xs">/bulan</span>
</div>
<p className="text-xs text-zinc-500 mb-6 leading-relaxed">
                        Sempurna untuk memulai channel faceless pertama Anda.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            5 Video per bulan
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Karakter Standar
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<svg className="w-4 h-4 text-indigo-500" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            720p HD Export
                        </li>
</ul>
<button className="w-full py-3 rounded-xl border border-zinc-200 text-zinc-900 text-sm font-medium hover:bg-zinc-50 transition-colors">
                        Pilih Kreator
                    </button>
</div>

<div className="relative p-8 rounded-3xl bg-zinc-900 border border-zinc-800 shadow-2xl reveal-scale delay-100">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase">
                        Paling Populer
                    </div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium text-white">Studio</h3>
<div className="p-2 bg-zinc-800 rounded-lg">
<svg className="lucide lucide-sparkles w-4 h-4 text-indigo-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">Rp 499rb</span>
<span className="text-zinc-400 text-xs">/bulan</span>
</div>
<p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                        Untuk serius membangun imperium media sosial otomatis.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            30 Video per bulan
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Karakter Custom Premium
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            4K Export &amp; Auto-Upload
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Prioritas Rendering
                        </li>
</ul>
<button className="w-full py-3 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/20">
                        Mulai Paket Studio
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-12 px-6 border-t border-zinc-200">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-4">
<span className="text-lg font-semibold tracking-tighter text-zinc-900">Kreator.</span>
<p className="text-zinc-500 text-xs max-w-xs leading-relaxed">
                    Membangun masa depan konten kreasi dengan kecerdasan buatan. Tanpa wajah, tanpa batas.
                </p>
</div>
<div className="flex gap-12 md:gap-24">
<div className="flex flex-col gap-3">
<span className="text-[10px] font-semibold text-zinc-900 uppercase tracking-wider">Produk</span>
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Fitur</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Showcase</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Roadmap</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] font-semibold text-zinc-900 uppercase tracking-wider">Legal</span>
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Privasi</a>
<a className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Syarat &amp; Ketentuan</a>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-zinc-100 flex justify-between items-center text-[10px] text-zinc-400">
<span>© 2024 Kreator AI Inc.</span>
<div className="flex gap-4">
<a className="hover:text-zinc-800" href="#">Twitter</a>
<a className="hover:text-zinc-800" href="#">Instagram</a>
</div>
</div>
</footer>



    </>
  );
}
