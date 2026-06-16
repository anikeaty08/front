import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
navy: '#1D3557',
teal: '#2EC4B6',
slate: {
400: '#94A3B8',
500: '#64748B',
600: '#475569',
}
}
}
}
}



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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-heading font-semibold text-lg text-navy tracking-tighter hover:opacity-70 transition-opacity" href="#">
                AF
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-navy transition-colors" href="#about">Tentang</a>
<a className="hover:text-navy transition-colors" href="#skills">Keahlian</a>
<a className="hover:text-navy transition-colors" href="#experience">Pengalaman</a>
<a className="hover:text-navy transition-colors" href="#contact">Kontak</a>
</nav>

<button aria-label="Menu" className="md:hidden text-navy p-2 -mr-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow pt-16">

<section className="py-24 md:py-32 px-6" id="hero">
<div className="max-w-3xl mx-auto flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal mb-6">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                    Malang, Indonesia
                </div>
<h1 className="font-heading font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight text-navy leading-tight mb-6">
                    Konten konsisten.<br className="hidden md:block"/> Klien nyata. Hasil yang bisa diukur.
                </h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mb-10">
                    Azizah membangun audiens dan mengakuisisi klien UMKM lewat pendekatan operasional yang praktis setiap hari.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-6 py-3 bg-navy text-white text-sm font-medium rounded-lg hover:bg-navy/90 transition-colors text-center inline-flex justify-center items-center gap-2" href="#experience">
                        Lihat cara kerjaku
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 bg-white text-navy border border-slate-200 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors text-center inline-flex justify-center items-center gap-2" href="#">
<iconify-icon icon="solar:document-linear" strokeWidth="1.5"></iconify-icon>
                        Unduh CV
                    </a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50/50 border-y border-slate-100" id="pivot">
<div className="max-w-3xl mx-auto">
<h2 className="font-heading font-semibold text-2xl md:text-3xl tracking-tight text-navy mb-6">Dari Produksi ke Akuisisi</h2>
<p className="text-base leading-relaxed text-slate-600 mb-4">
                    Transisi saya menuju peran Community dan Sales Specialist bukanlah kebetulan. Ini adalah evolusi alami dari memahami bagaimana konten bekerja menjadi memahami bagaimana konten menghasilkan nilai.
                </p>
<p className="text-base leading-relaxed text-slate-600">
                    Keterampilan inti tetap sama: empati terhadap audiens, konsistensi eksekusi, dan iterasi berdasarkan data. Namun kini, fokus saya bergeser dari sekadar metrik vanity (likes) ke metrik yang memengaruhi pertumbuhan bisnis secara langsung (klien dan konversi).
                </p>
</div>
</section>

<section className="py-24 px-6" id="about">
<div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-start">
<div className="w-full md:w-1/3 aspect-[3/4] bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0 relative">

<img alt="Azizah Farhani" className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500" loading="lazy" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-full md:w-2/3 flex flex-col justify-center">
<h2 className="font-heading font-semibold text-2xl md:text-3xl tracking-tight text-navy mb-6">Tentang Saya</h2>
<div className="space-y-4 text-base leading-relaxed text-slate-600">
<p>
                            Saya Azizah Farhani, berbasis di Malang saya bekerja di persimpangan antara content operations dan outbound sales untuk bisnis skala kecil dan menengah.
                        </p>
<p>
                            Cara kerja saya cukup langsung: mencari platform yang relevan, produksi konten setiap hari, lacak performanya, lalu ulangi. Di ASAKITA Foundation, pendekatan itu menghasilkan 1.433 followers baru dalam 2 bulan.
                        </p>
<p>
                            Di infomalang.com, saya prospek lewat Instagram dan Google Maps setiap hari dan berhasil mendatangkan rata-rata 10 klien UMKM per bulan. Saya tertarik pada pekerjaan di mana eksekusi yang konsisten menghasilkan pertumbuhan yang terukur.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50 border-t border-slate-100" id="skills">
<div className="max-w-5xl mx-auto">
<h2 className="font-heading font-semibold text-2xl md:text-3xl tracking-tight text-navy mb-12">Keterampilan yang Ditransfer</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<article className="border-l-2 border-teal pl-5">
<h3 className="font-heading font-semibold text-lg tracking-tight text-navy mb-3 flex items-center gap-2">
<iconify-icon className="text-teal" icon="solar:pen-new-square-linear"></iconify-icon>
                            Content Operations
                        </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                            Mampu merencanakan, memproduksi, dan menjadwalkan konten secara harian tanpa kehilangan konsistensi suara brand. Fokus pada alur kerja yang efisien.
                        </p>
</article>
<article className="border-l-2 border-teal pl-5">
<h3 className="font-heading font-semibold text-lg tracking-tight text-navy mb-3 flex items-center gap-2">
<iconify-icon className="text-teal" icon="solar:magnifer-linear"></iconify-icon>
                            Outbound Prospecting
                        </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                            Terbiasa melakukan riset mandiri melalui platform sosial dan direktori pemetaan untuk menemukan prospek bisnis (B2B/UMKM) yang berkualitas secara rutin.
                        </p>
</article>
<article className="border-l-2 border-teal pl-5">
<h3 className="font-heading font-semibold text-lg tracking-tight text-navy mb-3 flex items-center gap-2">
<iconify-icon className="text-teal" icon="solar:chart-linear"></iconify-icon>
                            Data-Driven Iteration
                        </h3>
<p className="text-sm text-slate-600 leading-relaxed">
                            Tidak hanya mengeksekusi, tetapi juga melacak performa (follower growth, client acquisition rate) untuk memperbaiki strategi di siklus berikutnya.
                        </p>
</article>
</div>
</div>
</section>

<section className="py-24 px-6" id="experience">
<div className="max-w-4xl mx-auto">
<h2 className="font-heading font-semibold text-2xl md:text-3xl tracking-tight text-navy mb-12">Riwayat Eksekusi</h2>
<div className="space-y-12">

<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<header className="z-10 mb-2 mt-1 text-xs font-medium text-slate-400 sm:col-span-2 tracking-wide uppercase">
                            Des 2024 – Des 2025
                        </header>
<div className="z-10 sm:col-span-6 border-l pl-0 sm:border-l-0 sm:pl-0 border-slate-200">
<h3 className="font-heading font-semibold text-xl tracking-tight text-navy mb-2">
                                Marketing Sales <span className="text-slate-400 font-normal">@</span> infomalang.com
                            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
                                    10 Klien/Bulan
                                </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
                                    +30% Revenue (3 Bln)
                                </span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                Mengakuisisi rata-rata 10 klien UMKM per bulan lewat prospek harian via Instagram dan Google Maps, berkontribusi pada pertumbuhan revenue 30% dalam 3 bulan.
                            </p>
</div>
</div>

<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
<header className="z-10 mb-2 mt-1 text-xs font-medium text-slate-400 sm:col-span-2 tracking-wide uppercase">
                            Mei 2024 – Jul 2024
                        </header>
<div className="z-10 sm:col-span-6">
<h3 className="font-heading font-semibold text-xl tracking-tight text-navy mb-2">
                                Social Media Specialist <span className="text-slate-400 font-normal">@</span> ASAKITA Foundation
                            </h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-teal/10 text-teal">
<iconify-icon icon="solar:user-plus-linear"></iconify-icon>
                                    +1.433 Followers (2 Bln)
                                </span>
</div>
<p className="text-sm text-slate-600 leading-relaxed">
                                Menumbuhkan 1.433 followers Instagram dalam 2 bulan melalui produksi dan penjadwalan konten harian yang konsisten.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50/50 border-t border-slate-100" id="work">
<div className="max-w-5xl mx-auto">
<h2 className="font-heading font-semibold text-2xl md:text-3xl tracking-tight text-navy mb-12">Fokus Domain Baru</h2>
<article className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1 border-l-2 border-teal pl-6">
<h3 className="font-heading font-semibold text-xl tracking-tight text-navy mb-4">Ekosistem UMKM &amp; Pertumbuhan Berkelanjutan</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-6">
                            Membangun sistem dimana konten edukasi dan penawaran layanan berjalan beriringan. Membantu bisnis lokal memvisualisasikan nilai mereka sehingga prospek dingin (cold leads) lebih mudah dikonversi menjadi klien jangka panjang.
                        </p>
<div className="flex gap-2">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-600">SME Strategy</span>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-200 text-slate-600">B2B Outreach</span>
</div>
</div>
<div className="order-1 lg:order-2 w-full aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden">

<img alt="Flat lay of a content planning workspace" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</article>
</div>
</section>

<section className="py-32 px-6" id="contact">
<div className="max-w-2xl mx-auto text-center">
<h2 className="font-heading font-semibold text-3xl md:text-4xl tracking-tight text-navy mb-6">Butuh orang yang langsung eksekusi?</h2>
<p className="text-base text-slate-600 leading-relaxed mb-10">
                    Kalau kamu mencari seseorang yang bisa mulai dari hari pertama — konten, prospek, atau keduanya — saya terbuka untuk ngobrol. Kirim email atau lihat profil LinkedIn saya.
                </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-navy text-white text-sm font-medium rounded-lg hover:bg-navy/90 transition-colors inline-flex justify-center items-center gap-2" href="mailto:bahabahani03@gmail.com">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Email me
                    </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-navy border border-slate-200 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors inline-flex justify-center items-center gap-2" href="https://www.linkedin.com/in/azizah-farhani-089802318/" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        LinkedIn Profile
                    </a>
</div>
</div>
</section>
</main>

<footer className="py-8 text-center text-xs text-slate-400 border-t border-slate-100 mt-auto">
<p>© 2024 Azizah Farhani. Malang, Indonesia.</p>
</footer>

    </>
  );
}
