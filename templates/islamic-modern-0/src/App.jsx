import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="tracking-tighter font-semibold text-emerald-800 text-lg uppercase" href="#">
                Salsabila Al-Tapaq
            </a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#beranda">Beranda</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#sambutan">Sambutan</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#program">Program</a>
<a className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors" href="#profil">Profil</a>
</nav>
<a className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors" href="#daftar">
                Daftar Sekarang
            </a>
<button className="md:hidden text-slate-600">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="beranda">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl fade-in-up">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium mb-6">
<iconify-icon height="14" icon="solar:stars-linear" width="14"></iconify-icon>
                        Penerimaan Santri Baru 2024/2025
                    </span>
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.15] mb-6">
                        Mencetak Generasi Qur’ani yang <span className="text-emerald-600">Cakap</span>, <span className="text-emerald-600">Cendekia</span>, dan Berakhlak Mulia
                    </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Website resmi Pondok Modern SMP Salsabila Al-Tapaq. Kami memadukan ilmu pengetahuan modern dengan nilai-nilai luhur Islam untuk masa depan ananda.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-emerald-600 text-white text-base font-medium hover:bg-emerald-700 transition-all shadow-sm" href="#daftar">
                            Daftar Sekarang
                        </a>
<a className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-white text-slate-700 border border-slate-200 text-base font-medium hover:bg-slate-50 transition-all shadow-sm" href="#program">
                            Lihat Program
                        </a>
</div>
</div>
<div className="relative lg:ml-auto fade-in-up delay-200">
<div className="aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100/50 relative">
<div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply z-10"></div>
<img alt="Kegiatan belajar santri" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-400 rounded-full blur-3xl opacity-30 -z-10"></div>
<div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-20 -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100" id="sambutan">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col items-center text-center fade-in-up">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-8">Sambutan</h2>
<div className="w-12 h-1 bg-amber-400 rounded-full mb-10"></div>
<div className="prose prose-slate text-base text-slate-600 leading-relaxed text-left md:text-center w-full">
<p className="mb-4 text-emerald-800 font-medium italic">Assalamu’alaikum warahmatullahi wabarakatuh.</p>
<p className="mb-4">Selamat datang di website resmi Pondok Modern SMP Salsabila Al-Tapaq.</p>
<p className="mb-4">Website ini kami hadirkan sebagai sarana informasi dan komunikasi bagi orang tua, santri, serta masyarakat luas mengenai kegiatan dan program pendidikan di pondok kami.</p>
<p className="mb-4">Pondok Modern SMP Salsabila Al-Tapaq berkomitmen membentuk generasi yang berakhlak mulia, berilmu, dan mandiri melalui pendidikan terpadu antara ilmu pengetahuan dan nilai-nilai Islam.</p>
<p className="mb-6">Semoga website ini dapat memberikan manfaat dan menjadi jendela informasi yang transparan dan terpercaya.</p>
<p className="text-emerald-800 font-medium italic">Wassalamu’alaikum warahmatullahi wabarakatuh.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="program">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Program Unggulan</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto">Pendekatan komprehensif kami untuk memastikan perkembangan santri yang holistik, memadukan ilmu agama dan keterampilan masa depan.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow fade-in-up delay-100">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:book-bookmark-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Pendidikan Islam Ahlussunnah Wal Jama'ah</h3>
<p className="text-sm text-slate-600 leading-relaxed">Pendidikan yang berakar pada nilai-nilai Islam sejati, memprioritaskan pembentukan akhlak, adab, dan pemahaman akidah yang lurus.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow fade-in-up delay-200">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:lightbulb-bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Kurikulum Terpadu &amp; Modern</h3>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon> Tahsin &amp; Tahfidz Al-Qur’an</li>
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon> Kajian Kitab Kuning</li>
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon> Project Based Learning</li>
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon> HOTS Based &amp; Integrative Learning</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow fade-in-up delay-300">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:shield-user-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Pembentukan Karakter &amp; Life Skill</h3>
<ul className="text-sm text-slate-600 space-y-2">
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon> Islamic Habit Forming</li>
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon> Leadership Santri</li>
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon> Entrepreneurship</li>
<li className="flex items-start gap-2"><iconify-icon className="text-emerald-500 mt-0.5" icon="solar:check-read-linear" width="16"></iconify-icon> Keterampilan Hidup (Life Skill)</li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow fade-in-up delay-100">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:users-group-two-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Lingkungan Inklusif &amp; Nonpartisan</h3>
<p className="text-sm text-slate-600 leading-relaxed">Menciptakan ekosistem belajar yang terbuka, tidak berpihak pada politik praktis, dan merangkul semua golongan dengan damai.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow fade-in-up delay-200">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:hand-shake-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Sinergi Orang Tua &amp; Pondok</h3>
<p className="text-sm text-slate-600 leading-relaxed">Membangun keterlibatan aktif orang tua dalam perkembangan anak melalui komunikasi rutin dan program ngaji bersama wali santri.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow fade-in-up delay-300">
<div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Manajemen Terbuka &amp; Transparan</h3>
<p className="text-sm text-slate-600 leading-relaxed">Pengelolaan institusi yang profesional, akuntabel, dan transparan untuk memberikan kepercayaan penuh kepada masyarakat.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12 fade-in-up">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">Galeri Kegiatan</h2>
<p className="text-base text-slate-500">Momen kebersamaan dan pembelajaran di lingkungan pondok.</p>
</div>
<a className="hidden md:inline-flex text-sm font-medium text-emerald-600 hover:text-emerald-700 items-center gap-1" href="#">
                    Lihat semua <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group fade-in-up delay-100">
<div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 relative">
<img alt="Kegiatan Belajar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<p className="text-sm font-medium text-slate-700 mt-3 px-1">Kegiatan belajar mengajar</p>
</div>

<div className="group fade-in-up delay-200">
<div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 relative">
<img alt="Tahfidz Al-Qur'an" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<p className="text-sm font-medium text-slate-700 mt-3 px-1">Tahsin &amp; Tahfidz Al-Qur'an</p>
</div>

<div className="group fade-in-up delay-300">
<div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 relative">
<img alt="Olahraga" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p className="text-sm font-medium text-slate-700 mt-3 px-1">Kegiatan ekstrakurikuler &amp; olahraga</p>
</div>

<div className="group fade-in-up delay-400">
<div className="aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/60 relative">
<img alt="Kebersamaan Santri" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<p className="text-sm font-medium text-slate-700 mt-3 px-1">Momen kebersamaan santri</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Tenaga Pendidik</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto">Dibimbing oleh asatidz dan ustadzat yang berkompeten, berdedikasi tinggi, dan berpengalaman di bidangnya.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

<div className="text-center fade-in-up delay-100">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 bg-slate-200 border-4 border-white shadow-sm relative">
<img alt="Ust. Ahmad Syauqi" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=256"/>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Ust. Ahmad Syauqi, M.Pd.</h3>
<p className="text-sm text-emerald-600 font-medium mb-1">Kepala Sekolah</p>
<p className="text-xs text-slate-500">Pengampu Fiqih &amp; Akhlak</p>
</div>

<div className="text-center fade-in-up delay-200">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl font-semibold border-4 border-white shadow-sm relative">
                        NH
                    </div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Ustadzah Nurul Hidayah, S.Ag.</h3>
<p className="text-sm text-emerald-600 font-medium mb-1">Waka Kurikulum</p>
<p className="text-xs text-slate-500">Pengampu Tahfidz &amp; Tajwid</p>
</div>

<div className="text-center fade-in-up delay-300">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 bg-slate-200 border-4 border-white shadow-sm relative">
<img alt="Ust. Budi Santoso" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=256"/>
</div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Ust. Budi Santoso, S.Pd.</h3>
<p className="text-sm text-emerald-600 font-medium mb-1">Waka Kesiswaan</p>
<p className="text-xs text-slate-500">Pengampu Bahasa Arab</p>
</div>

<div className="text-center fade-in-up delay-400">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 bg-amber-50 text-amber-600 flex items-center justify-center text-3xl font-semibold border-4 border-white shadow-sm relative">
                        FA
                    </div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Ustadzah Fatimah Azzahra</h3>
<p className="text-sm text-emerald-600 font-medium mb-1">Pembina Asrama Putri</p>
<p className="text-xs text-slate-500">Pengampu Tarikh Islam</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden" id="profil">
<div className="absolute inset-0 bg-emerald-950/50 mix-blend-multiply"></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-600 rounded-full blur-[100px] opacity-20"></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-600 rounded-full blur-[100px] opacity-20"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<span className="text-amber-400 text-xs font-medium tracking-wider uppercase mb-4 block">Visi &amp; Misi</span>
<div className="mb-16 fade-in-up">
<iconify-icon className="text-emerald-500/30 mx-auto mb-6" icon="solar:quote-left-bold-duotone" width="48"></iconify-icon>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white leading-relaxed max-w-4xl mx-auto">
                    "Terwujudnya Generasi Emas Qur’ani Indonesia 2045 yang cakap, cendekia, dan berakhlak mulia."
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto fade-in-up delay-200">
<div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<span className="text-sm font-medium">1</span>
</div>
<p className="text-base text-slate-300 mt-1">Pembelajaran berbasis Al-Qur’an dan As-Sunnah</p>
</div>
<div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<span className="text-sm font-medium">2</span>
</div>
<p className="text-base text-slate-300 mt-1">Penanaman akhlak mulia dalam kehidupan sehari-hari</p>
</div>
<div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<span className="text-sm font-medium">3</span>
</div>
<p className="text-base text-slate-300 mt-1">Pengembangan life skill untuk kemandirian santri</p>
</div>
<div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<span className="text-sm font-medium">4</span>
</div>
<p className="text-base text-slate-300 mt-1">Pendampingan intensif sesuai bakat dan minat santri</p>
</div>
<div className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-2xl flex items-start gap-4 md:col-span-2 md:w-1/2 md:mx-auto">
<div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
<span className="text-sm font-medium">5</span>
</div>
<p className="text-base text-slate-300 mt-1">Membangun budaya mandiri membaca dan berkarya</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Testimoni Orang Tua</h2>
<p className="text-base text-slate-500 max-w-2xl mx-auto">Mendengar langsung pengalaman dan kesan dari orang tua santri yang telah mempercayakan pendidikan putra-putrinya kepada kami.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow fade-in-up delay-100 relative">
<iconify-icon className="text-slate-100 absolute top-6 right-6 -z-10" icon="solar:quote-right-bold-duotone" width="48"></iconify-icon>
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6 italic">"Alhamdulillah, sejak mondok di Salsabila Al-Tapaq, anak saya menunjukkan perkembangan akhlak yang luar biasa. Sholat selalu tepat waktu, lebih mandiri, dan hafalannya bertambah pesat."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-semibold text-sm">BF</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Bapak Fauzi</h4>
<p className="text-xs text-slate-500">Wali Santri Kelas VII</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow fade-in-up delay-200 relative">
<iconify-icon className="text-slate-100 absolute top-6 right-6 -z-10" icon="solar:quote-right-bold-duotone" width="48"></iconify-icon>
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6 italic">"Pilihan yang tepat memasukkan putri kami ke pondok ini. Lingkungannya sangat nyaman, fasilitas memadai, dan yang terpenting asatidznya sangat perhatian dengan perkembangan tiap anak."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center font-semibold text-sm">IA</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Ibu Aisyah</h4>
<p className="text-xs text-slate-500">Wali Santri Kelas VIII</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow fade-in-up delay-300 relative">
<iconify-icon className="text-slate-100 absolute top-6 right-6 -z-10" icon="solar:quote-right-bold-duotone" width="48"></iconify-icon>
<div className="flex gap-1 text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6 italic">"Program life skill dan entrepreneurship-nya sangat aplikatif. Anak saya sekarang punya rasa percaya diri yang tinggi dan pemahaman agama yang kuat untuk bekal masa depannya."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-semibold text-sm">DR</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Bapak Dermawan</h4>
<p className="text-xs text-slate-500">Wali Santri Kelas IX</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-emerald-700 relative overflow-hidden" id="daftar">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                Bergabunglah bersama kami mencetak generasi Qur’ani masa depan.
            </h2>
<p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                Pendaftaran santri baru tahun ajaran 2024/2025 telah dibuka. Kuota terbatas untuk menjaga kualitas pendidikan.
            </p>
<a className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-amber-400 text-amber-950 text-base font-semibold hover:bg-amber-300 transition-colors shadow-lg shadow-amber-500/20" href="#">
                Daftar Sekarang
            </a>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800 text-slate-400">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="tracking-tighter font-semibold text-white text-lg uppercase block mb-4">
                        Salsabila Al-Tapaq
                    </span>
<p className="text-sm leading-relaxed max-w-sm mb-6">
                        Pondok Modern SMP Salsabila Al-Tapaq berdedikasi untuk mencetak generasi muda yang tidak hanya unggul dalam ilmu pengetahuan, tetapi juga memiliki akhlak mulia berlandaskan Al-Qur'an.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-tight">Tautan Cepat</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-emerald-400 transition-colors" href="#beranda">Beranda</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#profil">Profil Sekolah</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#program">Program Unggulan</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#daftar">Pendaftaran Info</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 tracking-tight">Hubungi Kami</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-emerald-500" icon="solar:map-point-linear"></iconify-icon>
<span>Jl. Pendidikan Islam No. 123,<br/>Kota Cendekia, Indonesia 40123</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:phone-linear"></iconify-icon>
<span>+62 812 3456 7890</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" icon="solar:letter-linear"></iconify-icon>
<span>info@salsabila-altapaq.sch.id</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
<p>© 2024 Pondok Modern SMP Salsabila Al-Tapaq. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Kebijakan Privasi</a>
<a className="hover:text-white transition-colors" href="#">Syarat &amp; Ketentuan</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
