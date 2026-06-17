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
      

<div className="min-h-screen flex flex-col">

<header className="border-b backdrop-blur border-stone-200/80 bg-stone-50/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<div className="flex items-center gap-2">
<div className="flex bg-center text-xs font-semibold text-stone-900 tracking-tight bg-stone-100 w-8 h-9 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7aa08080-c25a-47e3-9115-64e33cea516e_320w.jpg?w=800&amp;q=80)] bg-cover border-stone-300 border rounded-md items-center"></div>
<div className="flex flex-col leading-tight">
<span className="text-sm font-semibold tracking-tight">
                  Ir. Norman
                </span>
<span className="text-[11px] text-stone-600">
                  Dosen Teknik Sipil · Universitas
                </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-6 text-xs font-medium">
<a className="transition-colors text-stone-700 hover:text-stone-950" href="#profil">
                Profil
              </a>
<a className="transition-colors text-stone-700 hover:text-stone-950" href="#materi">
                Materi Kuliah
              </a>
<a className="transition-colors text-stone-700 hover:text-stone-950" href="#video">
                Video
              </a>
<a className="transition-colors text-stone-700 hover:text-stone-950" href="#buku">
                Buku Digital
              </a>
<a className="transition-colors text-stone-700 hover:text-stone-950" href="#laporan">
                Laporan
              </a>
<a className="transition-colors text-stone-700 hover:text-stone-950" href="#galeri">
                Foto
              </a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-xs font-medium transition-colors border-stone-300 text-stone-900 hover:border-stone-600 hover:text-stone-950 hover:bg-stone-100/80" href="#kontak">
<i className="lucide lucide-mail w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
<span className="">Kontak</span>
</a>

<button aria-label="Menu" className="md:hidden inline-flex items-center justify-center rounded-md border p-1.5 transition-colors border-stone-300/80 hover:border-stone-600 hover:bg-stone-100/70">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="mail" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(41, 37, 36)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</button>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="border-b bg-gradient-to-b border-stone-200/60 from-stone-50 via-stone-50 to-stone-100/90">
<div className="sm:px-6 lg:px-8 sm:py-14 lg:py-16 max-w-6xl mr-auto ml-auto pt-10 pr-4 pb-10 pl-4">
<div className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,2.2fr)] gap-10 lg:gap-14 items-center">

<div className="">
<div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-2.5 py-1 mb-4">
<span className="h-1.5 w-1.5 rounded-full animate-pulse bg-orange-600"></span>
<span className="text-[11px] font-medium text-orange-700">
                    Dosen Teknik Sipil · Pengalaman &gt; 20 Tahun
                  </span>
</div>
<h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold tracking-tight text-stone-950">
  Ir. Norman
  <span className="font-normal text-stone-700">
                    · Dosen Teknik Sipil &amp; Konsultan Struktur
                  </span>
</h1>
<p className="mt-4 text-sm sm:text-[15px] max-w-2xl text-stone-700">
        Dosen tetap Program Studi Teknik Sipil dengan lebih dari
        20 tahun pengalaman di bidang perencanaan struktur,
        manajemen konstruksi, dan infrastruktur berkelanjutan.
        Tersertifikasi nasional, aktif sebagai konsultan dan narasumber
        pelatihan profesional.
      </p>
<div className="mt-5 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-xs font-medium transition-colors border bg-stone-950 text-stone-100 hover:bg-stone-800/90 hover:text-stone-50 border-stone-950/80" href="#materi">
<i className="lucide lucide-library-big w-4 h-4" style={{strokeWidth: '1.5'}}></i>
<span className="">akses materi kuliah</span>
</a>
<a className="inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-xs font-medium transition-colors border-stone-300 text-stone-900 hover:border-stone-600 hover:bg-stone-100/80" href="#profil">
<i className="lucide lucide-id-card w-4 h-4" style={{strokeWidth: '1.5'}}></i>
<span>profil &amp; portofolio</span>
</a>
</div>

<div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-[11px]">
<div className="rounded-lg border p-3 border-stone-200 bg-stone-100/40">
<div className="mb-1 text-stone-600">Pengalaman</div>
<div className="text-sm font-semibold text-stone-950">
            20+ tahun
          </div>
<div className="text-[11px] text-stone-500">
            Pengajaran &amp; praktik
          </div>
</div>
<div className="rounded-lg border p-3 border-stone-200 bg-stone-100/40">
<div className="mb-1 text-stone-600">Bidang</div>
<div className="text-sm font-semibold text-stone-950">
            Struktur &amp; Konstruksi
          </div>
<div className="text-[11px] text-stone-500">
            Gedung · Jembatan · Infrastruktur
          </div>
</div>
<div className="rounded-lg border p-3 border-stone-200 bg-stone-100/40">
<div className="mb-1 text-stone-600">Sertifikasi</div>
<div className="text-sm font-semibold text-stone-950">
            Insinyur Profesional
          </div>
<div className="text-[11px] text-orange-700">
            Terdaftar &amp; tersertifikasi
          </div>
</div>
<div className="rounded-lg border p-3 border-stone-200 bg-stone-100/40">
<div className="mb-1 text-stone-600">Publikasi</div>
<div className="text-sm font-semibold text-stone-950">
            &gt; 30 karya
          </div>
<div className="text-[11px] text-stone-500">
            Jurnal · Prosiding · Buku
          </div>
</div>
</div>
</div>

<div className="rounded-2xl border shadow-xl overflow-hidden border-stone-200 bg-stone-100/60 shadow-stone-50/40">
<div className="p-5 pb-4 border-b border-stone-200/80">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Foto dosen teknik sipil" className="w-26 h-28 object-cover border-stone-300 border rounded-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7aa08080-c25a-47e3-9115-64e33cea516e_320w.jpg"/>
<span className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-orange-500/90 border flex items-center justify-center border-stone-100">
<i className="lucide lucide-award w-3 h-3 text-stone-50" style={{strokeWidth: '1.5'}}></i>
</span>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight text-stone-950">
              Ir. Norman
            </div>
<div className="text-[11px] text-stone-600">
              Dosen Teknik Sipil · Universitas
            </div>
<div className="mt-1 flex flex-wrap gap-1">
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] bg-stone-200/80 text-stone-800">
<i className="lucide lucide-badge-check w-3 h-3 mr-1 text-orange-700" style={{strokeWidth: '1.5'}}></i>
                          Insinyur Profesional Tersertifikasi
                        </span>
</div>
</div>
</div>
</div>
<div className="p-5 space-y-4">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
<div className="space-y-2">
<div className="flex items-center gap-2">
<i className="lucide lucide-mail w-3.5 h-3.5 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div className="flex flex-col">
<span className="text-stone-600">Email akademik</span>
<span className="text-stone-900">
                            norman@universitas.ac.id
                          </span>
</div>
</div>
<div className="flex items-center gap-2">
<i className="lucide lucide-building-2 w-3.5 h-3.5 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div className="flex flex-col">
<span className="text-stone-600">Program Studi</span>
<span className="text-stone-900">
                            Teknik Sipil, Fakultas Teknik
                          </span>
</div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<i className="lucide lucide-map-pin w-3.5 h-3.5 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div className="flex flex-col">
<span className="text-stone-600">Kampus</span>
<span className="text-stone-900">
                            Jl. Pendidikan No. 123, Indonesia
                          </span>
</div>
</div>
<div className="flex items-center gap-2">
<i className="lucide lucide-globe-2 w-3.5 h-3.5 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div className="flex flex-col">
<span className="text-stone-600">Bahasa</span>
<span className="text-stone-900">
                            Indonesia · Inggris
                          </span>
</div>
</div>
</div>
</div>

<div className="pt-2 border-t border-stone-200/80">
<div className="text-[11px] font-medium mb-2 flex items-center justify-between text-stone-700">
<span>Akses cepat</span>
<span className="text-stone-500">
                        Untuk mahasiswa &amp; kolaborator
                      </span>
</div>
<div className="grid grid-cols-2 gap-2 text-[11px] sm:text-[11px]">
<a className="group flex items-center gap-2 rounded-md border px-2.5 py-2 transition-colors border-stone-200 bg-stone-100/40 hover:border-orange-600/80 hover:bg-stone-100" href="#materi">
<i className="lucide lucide-folders w-3.5 h-3.5 group-hover:text-orange-300 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="text-stone-900">Materi Kuliah</div>
<div className="text-[10px] text-stone-500">
                  Slide, modul, tugas
                </div>
</div>
</a>
<a className="group flex items-center gap-2 rounded-md border px-2.5 py-2 transition-colors border-stone-200 bg-stone-100/40 hover:border-orange-600/80 hover:bg-stone-100" href="#video">
<i className="lucide lucide-play-circle w-3.5 h-3.5 group-hover:text-orange-300 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="text-stone-900">Video Kuliah</div>
<div className="text-[10px] text-stone-500">
                  Rekaman perkuliahan
                </div>
</div>
</a>
<a className="group flex items-center gap-2 rounded-md border px-2.5 py-2 transition-colors border-stone-200 bg-stone-100/40 hover:border-orange-600/80 hover:bg-stone-100" href="#buku">
<i className="lucide lucide-book-open w-3.5 h-3.5 group-hover:text-orange-300 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="text-stone-900">Buku Digital</div>
<div className="text-[10px] text-stone-500">
                  E-book &amp; bahan bacaan
                </div>
</div>
</a>
<a className="group flex items-center gap-2 rounded-md border px-2.5 py-2 transition-colors border-stone-200 bg-stone-100/40 hover:border-orange-600/80 hover:bg-stone-100" href="#laporan">
<i className="lucide lucide-file-text w-3.5 h-3.5 group-hover:text-orange-300 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="text-stone-900">Laporan Kegiatan</div>
<div className="text-[10px] text-stone-500">
                  Pengabdian &amp; penelitian
                </div>
</div>
</a>
</div>
</div>
</div>

<div className="px-5 pb-4 pt-3 border-t border-stone-200/80">
<div className="flex items-center justify-between text-[11px]">
<div className="flex items-center gap-2">
<i className="lucide lucide-clock-3 w-3.5 h-3.5 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="text-stone-700">Waktu konsultasi</div>
<div className="text-stone-500">
                Selasa &amp; Kamis · 13.00–15.00 (by appointment)
              </div>
</div>
</div>
<a className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-medium text-orange-700 hover:text-orange-800" href="#kontak">
            atur jadwal
            <i className="lucide lucide-arrow-right w-3 h-3" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-stone-200/60 bg-stone-50/90" id="profil">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
<div className="grid lg:grid-cols-[minmax(0,3.2fr)_minmax(0,2.5fr)] gap-10 lg:gap-14 items-start">

<div>
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-950">
                      Profil Akademik
                    </h2>
<p className="text-sm mt-1 text-stone-600">
                      Ringkasan latar belakang pendidikan, bidang keahlian, dan
                      fokus kegiatan.
                    </p>
</div>
</div>
<div className="space-y-5 text-sm text-stone-700">
<p>
                    Ir. Norman adalah dosen tetap di Program Studi Teknik
                    Sipil dengan spesialisasi utama pada
                    <span className="text-stone-900">
                      rekayasa struktur, desain bangunan tahan gempa, dan
                      manajemen proyek konstruksi
                    </span>.
                    Selain mengajar di tingkat sarjana dan magister, beliau juga
                    aktif sebagai konsultan dan narasumber di berbagai
                    pelatihan profesional.
                  </p>
<p>
                    Memiliki lebih dari 20 tahun pengalaman di dunia akademik dan
                    industri, beliau terlibat dalam perencanaan dan pengawasan
                    berbagai proyek infrastruktur seperti gedung bertingkat,
                    jembatan, serta fasilitas publik. Beberapa proyek dilakukan
                    bekerja sama dengan pemerintah daerah, BUMN, dan pihak
                    swasta.
                  </p>
<p>
                    Di bidang penelitian, fokus utama meliputi
                    <span className="text-stone-900">
                      perilaku struktur beton bertulang, optimasi desain,
                      material konstruksi ramah lingkungan, dan evaluasi
                      kinerja struktur eksisting
                    </span>.
                    Hasil penelitian dipublikasikan di jurnal nasional dan
                    internasional, serta dipresentasikan dalam berbagai seminar
                    ilmiah.
                  </p>

<div className="mt-4 rounded-xl border p-4 border-stone-200 bg-stone-100/40">
<div className="text-xs font-medium mb-3 flex items-center gap-2 text-stone-700">
<i className="lucide lucide-target w-4 h-4 text-stone-800" style={{strokeWidth: '1.5'}}></i>
                      Fokus Keilmuan &amp; Minat
                    </div>
<div className="grid sm:grid-cols-2 gap-3 text-[11px]">
<div className="space-y-1.5">
<div className="font-medium text-stone-800">
                          Rekayasa Struktur
                        </div>
<ul className="list-disc list-inside space-y-0.5 text-stone-600">
<li>Bangunan tahan gempa</li>
<li>Analisis &amp; desain beton bertulang</li>
<li>Evaluasi dan retrofit struktur</li>
</ul>
</div>
<div className="space-y-1.5">
<div className="font-medium text-stone-800">
                          Manajemen Konstruksi
                        </div>
<ul className="list-disc list-inside space-y-0.5 text-stone-600">
<li>Perencanaan &amp; penjadwalan proyek</li>
<li>Pengendalian mutu &amp; biaya</li>
<li>Konstruksi berkelanjutan</li>
</ul>
</div>
</div>
</div>
</div>
</div>

<aside className="space-y-5">

<div className="rounded-xl border p-4 border-stone-200 bg-stone-100/50">
<div className="flex items-center justify-between mb-3 text-xs font-medium text-stone-700">
<div className="flex items-center gap-2">
<i className="lucide lucide-graduation-cap w-4 h-4" style={{strokeWidth: '1.5'}}></i>
                      Pendidikan
                    </div>
</div>
<div className="space-y-2 text-[11px]">
<div>
<div className="text-stone-900">S-1 Teknik Sipil</div>
<div className="text-stone-600">Universitas A</div>
<div className="text-stone-500">Struktur · Lulus dengan pujian</div>
</div>
<div className="pt-2 border-t border-stone-200/80">
<div className="text-stone-900">S-2 Teknik Sipil</div>
<div className="text-stone-600">Universitas B</div>
<div className="text-stone-500">
                        Rekayasa Struktur · Fokus bangunan tahan gempa
                      </div>
</div>
<div className="pt-2 border-t border-stone-200/80">
<div className="text-stone-900">
                        Pelatihan &amp; Sertifikasi
                      </div>
<ul className="list-disc list-inside text-stone-500 mt-1 space-y-0.5">
<li>Insinyur Profesional (IP) · PII</li>
<li>Sertifikasi Ahli Muda K3 Konstruksi</li>
<li>Pelatihan manajemen proyek konstruksi</li>
</ul>
</div>
</div>
</div>

<div className="rounded-xl border p-4 border-stone-200 bg-stone-100/50">
<div className="flex items-center justify-between mb-3 text-xs font-medium text-stone-700">
<div className="flex items-center gap-2">
<i className="lucide lucide-books w-4 h-4" style={{strokeWidth: '1.5'}}></i>
                      Mata Kuliah Diampu
                    </div>
</div>
<div className="grid grid-cols-1 gap-2 text-[11px]">
<div className="rounded-lg border px-3 py-2 border-stone-200 bg-stone-100/60">
<div className="text-stone-900">Analisis Struktur</div>
<div className="text-stone-500">
                        S-1 · Semester 3–4 · Teori &amp; praktikum
                      </div>
</div>
<div className="rounded-lg border px-3 py-2 border-stone-200 bg-stone-100/60">
<div className="text-stone-900">Beton Bertulang</div>
<div className="text-stone-500">
                        S-1 · Semester 5 · Desain &amp; perencanaan
                      </div>
</div>
<div className="rounded-lg border px-3 py-2 border-stone-200 bg-stone-100/60">
<div className="text-stone-900">
                        Manajemen Proyek Konstruksi
                      </div>
<div className="text-stone-500">
                        S-1 · Semester 6 · Studi kasus
                      </div>
</div>
<div className="rounded-lg border px-3 py-2 border-stone-200 bg-stone-100/60">
<div className="text-stone-900">
                        Struktur Tahan Gempa (S-2)
                      </div>
<div className="text-stone-500">
                        Program Magister · Mata kuliah pilihan
                      </div>
</div>
</div>
</div>

<div className="rounded-xl border p-4 border-stone-200 bg-stone-100/50">
<div className="flex items-center justify-between mb-3 text-xs font-medium text-stone-700">
<div className="flex items-center gap-2">
<i className="lucide lucide-handshake w-4 h-4" style={{strokeWidth: '1.5'}}></i>
                      Kolaborasi &amp; Layanan
                    </div>
</div>
<ul className="text-[11px] space-y-1.5 list-disc list-inside text-stone-700">
<li>Konsultasi perencanaan struktur gedung &amp; jembatan</li>
<li>Review desain &amp; second opinion teknis</li>
<li>Pelatihan singkat untuk praktisi &amp; pemerintah daerah</li>
</ul>
</div>
</aside>
</div>
</div>
</section>

<section className="border-b border-stone-200/60 bg-stone-50/95" id="materi">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-950">
                  Materi Kuliah
                </h2>
<p className="text-sm mt-1 text-stone-600">
                  Slide, modul, dan berkas pendukung perkuliahan yang dapat
                  diunduh oleh mahasiswa.
                </p>
</div>
<div className="text-[11px] text-stone-500">
                Untuk akses penuh, silakan gunakan akun institusi Anda.
              </div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

<article className="group rounded-xl border transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="p-4 pb-3 border-b border-stone-200/80">
<div className="flex items-start justify-between gap-2">
<div>
<div className="inline-flex items-center rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] border border-orange-500/30 mb-2 text-orange-700">
                        Struktur · S-1
                      </div>
<h3 className="text-sm font-semibold tracking-tight text-stone-950">
                        Analisis Struktur I
                      </h3>
<p className="mt-1 text-[11px] text-stone-600">
                        Materi dasar analisis statis struktur rangka batang dan
                        portal sederhana.
                      </p>
</div>
<i className="lucide lucide-folder-input w-4 h-4 group-hover:text-orange-300 text-stone-600" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="p-4 text-[11px] space-y-2">
<div className="flex items-center justify-between">
<span className="text-stone-600">File tersedia</span>
<span className="font-medium text-stone-800">
                      8 berkas · PDF, PPTX
                    </span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                      Silabus
                    </span>
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                      Slide pertemuan
                    </span>
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                      Soal latihan
                    </span>
</div>
<div className="pt-2 border-t flex justify-between items-center border-stone-200">
<span className="text-stone-500">
                      Terakhir diperbarui: Mar 2025
                    </span>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-900 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80">
<i className="lucide lucide-download w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
                      Unduh paket
                    </button>
</div>
</div>
</article>

<article className="group rounded-xl border transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="p-4 pb-3 border-b border-stone-200/80">
<div className="flex items-start justify-between gap-2">
<div>
<div className="inline-flex items-center rounded-full bg-pink-500/10 px-2 py-0.5 text-[10px] border border-pink-500/30 mb-2 text-pink-700">
                        Beton · S-1
                      </div>
<h3 className="text-sm font-semibold tracking-tight text-stone-950">
                        Beton Bertulang
                      </h3>
<p className="mt-1 text-[11px] text-stone-600">
                        Perencanaan elemen struktur beton bertulang berdasarkan
                        SNI terbaru.
                      </p>
</div>
<i className="lucide lucide-folder-input w-4 h-4 group-hover:text-orange-300 text-stone-600" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="p-4 text-[11px] space-y-2">
<div className="flex items-center justify-between">
<span className="text-stone-600">File tersedia</span>
<span className="font-medium text-stone-800">
                      10 berkas · PDF, Excel
                    </span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                      Modul desain balok
                    </span>
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                      Contoh perhitungan
                    </span>
</div>
<div className="pt-2 border-t flex justify-between items-center border-stone-200">
<span className="text-stone-500">
                      Terakhir diperbarui: Feb 2025
                    </span>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-900 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80">
<i className="lucide lucide-download w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
                      Unduh paket
                    </button>
</div>
</div>
</article>

<article className="group rounded-xl border transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="p-4 pb-3 border-b border-stone-200/80">
<div className="flex items-start justify-between gap-2">
<div>
<div className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] border border-red-500/30 mb-2 text-red-700">
                        Manajemen · S-1
                      </div>
<h3 className="text-sm font-semibold tracking-tight text-stone-950">
                        Manajemen Proyek Konstruksi
                      </h3>
<p className="mt-1 text-[11px] text-stone-600">
                        Konsep perencanaan, penjadwalan, dan pengendalian proyek
                        konstruksi.
                      </p>
</div>
<i className="lucide lucide-folder-input w-4 h-4 group-hover:text-orange-300 text-stone-600" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
<div className="p-4 text-[11px] space-y-2">
<div className="flex items-center justify-between">
<span className="text-stone-600">File tersedia</span>
<span className="font-medium text-stone-800">
                      6 berkas · PDF, XLSX
                    </span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                      Studi kasus
                    </span>
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                      Template penjadwalan
                    </span>
</div>
<div className="pt-2 border-t flex justify-between items-center border-stone-200">
<span className="text-stone-500">
                      Terakhir diperbarui: Jan 2025
                    </span>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-900 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80">
<i className="lucide lucide-download w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
                      Unduh paket
                    </button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="border-b border-stone-200/60 bg-stone-50/95" id="video">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
<div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2.6fr)] gap-10 lg:gap-14 items-start">

<div>
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-950">
                      Video Perkuliahan
                    </h2>
<p className="text-sm mt-1 text-stone-600">
                      Rekaman perkuliahan dan penjelasan materi teknis untuk
                      mendukung pembelajaran mandiri.
                    </p>
</div>
</div>
<div className="space-y-3">

<div className="rounded-xl border overflow-hidden border-stone-200 bg-stone-100/60">
<div className="relative h-44 sm:h-52 bg-stone-100">
<img alt="Ilustrasi perkuliahan teknik sipil" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-stone-50/95 via-stone-50/50"></div>
<button className="absolute inset-0 flex items-center justify-center">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-full border transition-colors bg-stone-50/80 border-stone-300 hover:border-orange-600 hover:bg-stone-50/90">
<i className="lucide lucide-play w-5 h-5 text-stone-900" style={{strokeWidth: '1.5'}}></i>
</span>
</button>
<div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
<div>
<div className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] border border-orange-500/40 mb-1 bg-stone-50/80 text-orange-700">
                            Playlist utama
                          </div>
<div className="text-sm font-semibold tracking-tight text-stone-950">
                            Pengantar Struktur Tahan Gempa
                          </div>
<div className="text-[11px] text-stone-700">
                            Ringkasan konsep sebelum perkuliahan tatap muka.
                          </div>
</div>
<div className="hidden sm:flex items-center text-[10px] text-stone-600">
<i className="lucide lucide-clock-3 w-3.5 h-3.5 mr-1" style={{strokeWidth: '1.5'}}></i>
                          32:10
                        </div>
</div>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-3 text-[11px]">
<div className="flex gap-3 rounded-lg border p-3 transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="h-14 w-20 rounded-md flex items-center justify-center bg-stone-200/80 text-stone-700">
<i className="lucide lucide-play-circle w-5 h-5" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="font-medium text-stone-900">
                            Analisis Portal 2D
                          </div>
<span className="text-stone-500">24:35</span>
</div>
<div className="text-stone-600">
                          Contoh penyelesaian soal analisis portal.
                        </div>
</div>
</div>
<div className="flex gap-3 rounded-lg border p-3 transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="h-14 w-20 rounded-md flex items-center justify-center bg-stone-200/80 text-stone-700">
<i className="lucide lucide-play-circle w-5 h-5" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="font-medium text-stone-900">
                            Desain Balok Beton
                          </div>
<span className="text-stone-500">29:12</span>
</div>
<div className="text-stone-600">
                          Demonstrasi penggunaan SNI dan spreadsheet desain.
                        </div>
</div>
</div>
<div className="flex gap-3 rounded-lg border p-3 transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="h-14 w-20 rounded-md flex items-center justify-center bg-stone-200/80 text-stone-700">
<i className="lucide lucide-play-circle w-5 h-5" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="font-medium text-stone-900">
                            Dasar Penjadwalan Proyek
                          </div>
<span className="text-stone-500">18:47</span>
</div>
<div className="text-stone-600">
                          Pengantar network planning dan kurva-S.
                        </div>
</div>
</div>
<div className="flex gap-3 rounded-lg border p-3 transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="h-14 w-20 rounded-md flex items-center justify-center bg-stone-200/80 text-stone-700">
<i className="lucide lucide-play-circle w-5 h-5" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<div className="font-medium text-stone-900">
                            Studi Kasus Kegagalan Struktur
                          </div>
<span className="text-stone-500">35:20</span>
</div>
<div className="text-stone-600">
                          Diskusi insiden nyata dan pelajaran yang diambil.
                        </div>
</div>
</div>
</div>
</div>
</div>

<div id="buku">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-950">
                      Buku Digital &amp; Modul
                    </h2>
<p className="text-sm mt-1 text-stone-600">
                      Buku ajar, monograf, dan modul yang disusun untuk
                      mendukung perkuliahan dan praktisi.
                    </p>
</div>
</div>
<div className="space-y-3">

<div className="flex gap-3 rounded-xl border p-4 transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="h-20 w-16 rounded-md flex items-center justify-center text-xs font-medium bg-stone-200/80 text-stone-800">
                      PDF
                    </div>
<div className="flex-1 text-[11px]">
<div className="flex items-start justify-between gap-2">
<div>
<div className="text-sm font-semibold tracking-tight text-stone-950">
                            Dasar-dasar Analisis Struktur
                          </div>
<div className="text-stone-600">
                            Buku ajar internal · 210 halaman
                          </div>
</div>
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] border border-orange-500/40 bg-stone-100 text-orange-700">
                          Terbuka
                        </span>
</div>
<p className="mt-1.5 text-stone-600">
                        Menjelaskan konsep fundamental analisis struktur dengan
                        contoh penerapan pada rangka batang dan portal.
                      </p>
<div className="mt-2 flex items-center justify-between">
<span className="text-stone-500">
                          Versi 2.1 · 2024 · ISBN internal
                        </span>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-900 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80">
<i className="lucide lucide-download w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
                          Unduh buku
                        </button>
</div>
</div>
</div>

<div className="flex gap-3 rounded-xl border p-4 transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="h-20 w-16 rounded-md flex items-center justify-center text-xs font-medium bg-stone-200/80 text-stone-800">
                      PDF
                    </div>
<div className="flex-1 text-[11px]">
<div className="flex items-start justify-between gap-2">
<div>
<div className="text-sm font-semibold tracking-tight text-stone-950">
                            Praktikum Beton Bertulang
                          </div>
<div className="text-stone-600">
                            Modul praktikum · 80 halaman
                          </div>
</div>
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] border bg-stone-100 text-stone-700 border-stone-300/80">
                          Untuk mahasiswa
                        </span>
</div>
<p className="mt-1.5 text-stone-600">
                        Panduan lengkap pelaksanaan praktikum beton bertulang,
                        termasuk format laporan dan contoh pengolahan data.
                      </p>
<div className="mt-2 flex items-center justify-between">
<span className="text-stone-500">
                          Versi 1.3 · 2023 · Revisi SNI
                        </span>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-900 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80">
<i className="lucide lucide-download w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
                          Unduh modul
                        </button>
</div>
</div>
</div>

<div className="flex gap-3 rounded-xl border p-4 transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="h-20 w-16 rounded-md flex items-center justify-center text-xs font-medium bg-stone-200/80 text-stone-800">
                      PDF
                    </div>
<div className="flex-1 text-[11px]">
<div className="flex items-start justify-between gap-2">
<div>
<div className="text-sm font-semibold tracking-tight text-stone-950">
                            Pengantar Manajemen Konstruksi
                          </div>
<div className="text-stone-600">
                            Monograf · 150 halaman
                          </div>
</div>
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[10px] border border-red-500/40 bg-stone-100 text-red-700">
                          Versi dosen
                        </span>
</div>
<p className="mt-1.5 text-stone-600">
                        Pembahasan terstruktur mengenai siklus hidup proyek
                        konstruksi, manajemen risiko, dan kendali mutu.
                      </p>
<div className="mt-2 flex items-center justify-between">
<span className="text-stone-500">
                          Versi 1.0 · 2022 · Draft publik
                        </span>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-900 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80">
<i className="lucide lucide-download w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
                          Unduh ringkasan
                        </button>
</div>
</div>
</div>
<div className="pt-1 text-[11px] text-stone-500">
                    Catatan: Beberapa buku hanya dapat diakses oleh mahasiswa
                    aktif atau mitra kolaborasi. Silakan hubungi melalui email
                    untuk permintaan akses penuh.
                  </div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-stone-200/60 bg-stone-50/95" id="laporan">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
<div className="grid lg:grid-cols-[minmax(0,2.6fr)_minmax(0,3fr)] gap-10 lg:gap-14 items-start">

<div>
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-950">
                      Laporan Kegiatan
                    </h2>
<p className="text-sm mt-1 text-stone-600">
                      Ringkasan kegiatan pengabdian kepada masyarakat, penelitian,
                      dan proyek kolaborasi.
                    </p>
</div>
</div>
<div className="space-y-3 text-[11px]">

<article className="rounded-xl border p-4 transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="flex items-start justify-between gap-3">
<div>
<div className="inline-flex items-center rounded-full bg-orange-500/10 px-2 py-0.5 text-[10px] border border-orange-500/30 mb-1.5 text-orange-700">
                          Pengabdian Masyarakat · 2024
                        </div>
<h3 className="text-sm font-semibold tracking-tight text-stone-950">
                          Pendampingan Evaluasi Struktur Gedung Sekolah
                        </h3>
<p className="mt-1 text-stone-600">
                          Kegiatan asesmen kondisi struktur beberapa gedung
                          sekolah di wilayah rawan gempa, dilaksanakan bersama
                          pemerintah daerah.
                        </p>
</div>
<i className="lucide lucide-file-text w-4 h-4 text-stone-600" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="mt-2 flex flex-wrap items-center justify-between gap-2">
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                          Laporan akhir
                        </span>
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                          Poster kegiatan
                        </span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-900 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80">
<i className="lucide lucide-download w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
                        Unduh ringkasan
                      </button>
</div>
</article>
<article className="rounded-xl border p-4 transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="flex items-start justify-between gap-3">
<div>
<div className="inline-flex items-center rounded-full bg-pink-500/10 px-2 py-0.5 text-[10px] border border-pink-500/30 mb-1.5 text-pink-700">
                          Penelitian · 2023
                        </div>
<h3 className="text-sm font-semibold tracking-tight text-stone-950">
                          Studi Perilaku Balok Beton Bertulang Mutu Tinggi
                        </h3>
<p className="mt-1 text-stone-600">
                          Penelitian eksperimental dan numerik terkait
                          kekakuan dan daktilitas balok beton bertulang dengan
                          variasi konfigurasi tulangan.
                        </p>
</div>
<i className="lucide lucide-flask-conical w-4 h-4 text-stone-600" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="mt-2 flex flex-wrap items-center justify-between gap-2">
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                          Ringkasan hasil
                        </span>
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                          Draft publikasi
                        </span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-900 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80">
<i className="lucide lucide-download w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
                        Lihat abstrak
                      </button>
</div>
</article>
<article className="rounded-xl border p-4 transition-colors border-stone-200 bg-stone-100/60 hover:border-orange-600/70 hover:bg-stone-100">
<div className="flex items-start justify-between gap-3">
<div>
<div className="inline-flex items-center rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] border border-red-500/30 mb-1.5 text-red-700">
                          Workshop · 2022
                        </div>
<h3 className="text-sm font-semibold tracking-tight text-stone-950">
                          Pelatihan Desain Struktur Gedung Bertingkat
                        </h3>
<p className="mt-1 text-stone-600">
                          Workshop dua hari bagi praktisi dan mahasiswa akhir
                          terkait desain gedung bertingkat menggunakan software
                          analisis struktur.
                        </p>
</div>
<i className="lucide lucide-presentation w-4 h-4 text-stone-600" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="mt-2 flex flex-wrap items-center justify-between gap-2">
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                          Materi workshop
                        </span>
<span className="inline-flex items-center rounded-full px-2 py-0.5 border text-[10px] bg-stone-100 border-stone-200 text-stone-700">
                          Sertifikat contoh
                        </span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-900 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80">
<i className="lucide lucide-download w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
                        Unduh materi
                      </button>
</div>
</article>
</div>
</div>

<div id="galeri">
<div className="flex items-center justify-between mb-4">
<div>
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-950">
                      Galeri Foto
                    </h2>
<p className="text-sm mt-1 text-stone-600">
                      Dokumentasi kegiatan perkuliahan, lapangan, dan
                      pengabdian masyarakat.
                    </p>
</div>
</div>
<div className="grid grid-cols-3 gap-2 sm:gap-3">

<div className="col-span-2 row-span-2 relative rounded-xl overflow-hidden group">
<img alt="Perkuliahan teknik sipil" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&amp;fit=crop&amp;w=900&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-stone-50/90"></div>
<div className="absolute bottom-2 left-2 right-2 text-[11px] text-stone-900">
<div className="font-medium">
                        Perkuliahan Analisis Struktur
                      </div>
<div className="text-stone-700">
                        Diskusi soal kasus nyata di studio perkuliahan.
                      </div>
</div>
</div>

<div className="relative rounded-xl overflow-hidden group h-24 sm:h-28">
<img alt="Kegiatan lapangan teknik sipil" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-50/30"></div>
<div className="absolute bottom-1 left-1 right-1 text-[10px] text-stone-900">
                      Survey struktur jembatan
                    </div>
</div>

<div className="relative rounded-xl overflow-hidden group h-24 sm:h-28">
<img alt="Laboratorium teknik sipil" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-50/30"></div>
<div className="absolute bottom-1 left-1 right-1 text-[10px] text-stone-900">
                      Pengujian bahan di laboratorium
                    </div>
</div>

<div className="relative rounded-xl overflow-hidden group h-24 sm:h-28">
<img alt="Proyek konstruksi" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-50/30"></div>
<div className="absolute bottom-1 left-1 right-1 text-[10px] text-stone-900">
                      Monitoring proyek konstruksi gedung
                    </div>
</div>

<div className="relative rounded-xl overflow-hidden group h-24 sm:h-28">
<img alt="Seminar teknik sipil" className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-50/30"></div>
<div className="absolute bottom-1 left-1 right-1 text-[10px] text-stone-900">
                      Seminar nasional teknik sipil
                    </div>
</div>
</div>
<div className="mt-3 text-[11px] text-stone-500">
                  Untuk penggunaan foto resolusi tinggi, silakan hubungi
                  langsung melalui kontak yang tersedia.
                </div>
</div>
</div>
</div>
</section>

<section className="border-b border-stone-200/60 bg-stone-50/98" id="kontak">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
<div className="grid lg:grid-cols-[minmax(0,2.6fr)_minmax(0,2.2fr)] gap-10 lg:gap-14 items-start">

<div>
<div className="mb-4">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-stone-950">
                    Kontak &amp; Kolaborasi
                  </h2>
<p className="text-sm mt-1 text-stone-600">
                    Silakan gunakan formulir berikut untuk keperluan konsultasi
                    akademik, undangan narasumber, atau kerja sama profesional.
                  </p>
</div>
<form action="#" aria-label="Formulir kontak Ir. Norman" className="space-y-4 text-[13px]" method="post">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs font-medium mb-1 text-stone-700" htmlFor="nama">
                        Nama lengkap
                      </label>
<input className="block w-full rounded-md border px-3 py-2 text-xs placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 border-stone-200 bg-stone-100/70 text-stone-900" id="nama" name="nama" placeholder="Nama Anda" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-stone-700" htmlFor="email">
                        Email
                      </label>
<input className="block w-full rounded-md border px-3 py-2 text-xs placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 border-stone-200 bg-stone-100/70 text-stone-900" id="email" name="email" placeholder="email@institusi.ac.id" required="" type="email"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs font-medium mb-1 text-stone-700" htmlFor="institusi">
                        Institusi / Organisasi
                      </label>
<input className="block w-full rounded-md border px-3 py-2 text-xs placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 border-stone-200 bg-stone-100/70 text-stone-900" id="institusi" name="institusi" placeholder="Universitas / Instansi" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-stone-700" htmlFor="topik">
                        Topik
                      </label>
<select className="block w-full rounded-md border px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 border-stone-200 bg-stone-100/70 text-stone-900" id="topik" name="topik">
<option value="">Pilih topik</option>
<option value="konsultasi">
                          Konsultasi akademik / tugas akhir
                        </option>
<option value="narasumber">
                          Undangan narasumber / pelatihan
                        </option>
<option value="kolaborasi">
                          Kolaborasi penelitian / proyek
                        </option>
<option value="lainnya">Lainnya</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1 text-stone-700" htmlFor="pesan">
                      Pesan
                    </label>
<textarea className="block w-full rounded-md border px-3 py-2 text-xs placeholder-stone-500 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:border-orange-400 resize-none border-stone-200 bg-stone-100/70 text-stone-900" id="pesan" name="pesan" placeholder="Tuliskan maksud dan kebutuhan Anda secara singkat dan jelas." required="" rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
<p className="text-[11px] text-stone-500 max-w-xs">
                      Balasan biasanya dikirim dalam waktu
                      <span className="text-stone-700">1–3 hari kerja</span>.
                      Untuk kebutuhan mendesak, gunakan kontak langsung di
                      samping.
                    </p>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-stone-950 transition-colors text-stone-50 hover:bg-orange-600" type="submit">
<i className="lucide lucide-send w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
<span>Kirim pesan</span>
</button>
</div>
</form>
</div>

<aside>
<div className="rounded-2xl border p-5 sm:p-6 shadow-xl border-stone-200 bg-stone-100/70 shadow-stone-50/40">
<div className="flex items-start justify-between gap-3 border-b pb-4 mb-4 border-stone-200/80">
<div className="flex gap-3">
<div className="relative">
<div className="h-12 w-12 rounded-xl border flex items-center justify-center text-sm font-semibold bg-stone-200/80 border-stone-300">
                          N
                        </div>
<span className="absolute -bottom-1 -right-1 inline-flex items-center justify-center h-4 w-4 rounded-full bg-orange-500 border border-stone-50">
<i className="lucide lucide-check w-3 h-3 text-stone-50" style={{strokeWidth: '1.5'}}></i>
</span>
</div>
<div className="text-[13px]">
<div className="text-sm font-semibold tracking-tight text-stone-950">
                          Ir. Norman
                        </div>
<div className="text-stone-600">
                          Dosen Teknik Sipil · Konsultan Struktur
                        </div>
<div className="mt-1 inline-flex items-center gap-1.5">
<i className="lucide lucide-map-pin w-3.5 h-3.5 text-stone-600" style={{strokeWidth: '1.5'}}></i>
<span className="text-[11px] text-stone-600">
                            Kota / Provinsi, Indonesia
                          </span>
</div>
</div>
</div>
<button className="inline-flex items-center justify-center rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80">
<i className="lucide lucide-copy w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
<span className="ml-1">Salin kontak</span>
</button>
</div>
<div className="grid grid-cols-1 gap-3 text-[11px] mb-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<i className="lucide lucide-mail w-3.5 h-3.5 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div className="flex flex-col">
<span className="text-stone-600">Email utama</span>
<span className="text-stone-900">
                            norman@universitas.ac.id
                          </span>
</div>
</div>
<a className="inline-flex items-center rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80" href="mailto:norman@universitas.ac.id">
                        Kirim
                      </a>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<i className="lucide lucide-phone w-3.5 h-3.5 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div className="flex flex-col">
<span className="text-stone-600">Kontak WhatsApp</span>
<span className="text-stone-900">
                            +62 812‑0000‑0000
                          </span>
</div>
</div>
<a className="inline-flex items-center rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80" href="https://wa.me/6281200000000">
                        Buka
                      </a>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<i className="lucide lucide-globe-2 w-3.5 h-3.5 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div className="flex flex-col">
<span className="text-stone-600">Google Scholar</span>
<span className="truncate max-w-[165px] text-stone-900">
                            scholar.google.com/citations?user=ID
                          </span>
</div>
</div>
<a className="inline-flex items-center rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80" href="#">
                        Lihat
                      </a>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<i className="lucide lucide-linkedin w-3.5 h-3.5 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div className="flex flex-col">
<span className="text-stone-600">LinkedIn</span>
<span className="truncate max-w-[165px] text-stone-900">
                            linkedin.com/in/ir-norman
                          </span>
</div>
</div>
<a className="inline-flex items-center rounded-md border px-2 py-1 text-[10px] border-stone-300 text-stone-800 hover:border-orange-600 hover:text-orange-800 hover:bg-stone-100/80" href="#">
                        Buka
                      </a>
</div>
</div>
<div className="rounded-xl border border-dashed p-3 flex items-center justify-between gap-3 text-[11px] border-stone-200 bg-stone-50/60">
<div className="flex items-center gap-2">
<i className="lucide lucide-qrcode w-5 h-5 text-stone-700" style={{strokeWidth: '1.5'}}></i>
<div>
<div className="font-medium text-stone-900">
                          Bagikan kartu nama digital
                        </div>
<div className="text-stone-500">
                          Scan QR di layar ponsel atau simpan sebagai gambar.
                        </div>
</div>
</div>
<div className="h-16 w-16 rounded-lg border flex items-center justify-center text-[9px] border-stone-300 bg-stone-100/80 text-stone-600">
                      QR Code
                    </div>
</div>
</div>
</aside>
</div>
</div>
</section>
</main>

<footer className="py-6 border-t bg-stone-50 border-stone-200/80">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
<div className="flex items-center gap-2 text-stone-500">
<i className="lucide lucide-copyright w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
<span>
<span className="text-stone-700">Ir. Norman</span> · Program Studi
              Teknik Sipil · Universitas
            </span>
</div>
<div className="flex flex-wrap items-center gap-3 text-stone-500">
<span>
              Situs ini ditujukan untuk kebutuhan akademik &amp; profesional.
            </span>
<a className="inline-flex items-center gap-1 text-stone-600 hover:text-stone-800" href="#profil">
              Kembali ke atas
              <i className="lucide lucide-arrow-up-right w-3 h-3" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
