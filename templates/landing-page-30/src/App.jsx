import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function updateTimer() {
            const secsEl = document.getElementById('secs');
            let secs = parseInt(secsEl.innerText);
            if (secs > 0) {
                secs--;
                secsEl.innerText = secs < 10 ? '0' + secs : secs;
            } else {
                secsEl.innerText = '59';
                const minsEl = document.getElementById('mins');
                let mins = parseInt(minsEl.innerText);
                if (mins > 0) {
                    mins--;
                    minsEl.innerText = mins < 10 ? '0' + mins : mins;
                }
            }
        }
        setInterval(updateTimer, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-[#1D1F28]">
<div className="absolute inset-0 bg-grid-light"></div>
<div className="container mx-auto px-6 relative z-10 max-w-4xl pt-20 pb-12">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-[#FFFAF6] max-w-3xl">
                Kamu Sudah Coba Semuanya.<br/>
<span className="text-[#FFFAF6]/60">LP-nya Masih Belum Convert.</span>
</h1>
<div className="w-16 h-px bg-[#1D2DB8] my-8"></div>
<div className="space-y-6 max-w-2xl text-sm md:text-base font-light leading-relaxed text-[#FFFAF6]/80">
<p>
                    Hire orang buat design dan benerin copywriting udah, beli template design dan sampe pelajari formula copy sendiri. Tapi hasilnya sama: conversion rate stagnan segitu aja, padahal juga ada produk baru yang nunggu dirilis juga.
                </p>
<p>
                    Ini bukan soal kamu kurang kerja keras. Masalahnya ada di celah antara copy dan desain yang tidak pernah dikerjakan dalam satu alur. Kamu harus koordinasi dua hal terpisah, dan di sela itulah waktu habis dan momentum hilang. Landing Page Engine bantu kamu nutup celah itu, mulai dari bikin deskripsi produk sampai generate HTML yang siap pakai, dalam satu sesi di bawah 30 menit.
                </p>
</div>
<div className="mt-12">
<a className="inline-block w-full md:w-auto text-center bg-[#1D2DB8] text-[#FFFAF6] font-medium text-sm tracking-wide px-8 py-4 hover:bg-[#1D2DB8]/90 transition-colors" href="#mechanism">
                    Lihat Cara Kerjanya
                </a>
</div>
</div>
<div className="absolute bottom-6 right-6 font-mono text-xs text-[#FFFAF6]/10 select-none">
            &lt;!-- init_engine.html --&gt;
        </div>
</section>

<section className="py-24 bg-[#FFFAF6] text-[#1D1F28] relative">
<div className="absolute inset-0 bg-grid-dark opacity-50"></div>
<div className="container mx-auto px-6 max-w-3xl relative z-10">
<div className="font-mono text-xs tracking-widest text-[#1D1F28]/50 mb-12 uppercase">
                Temuan: Audit Situasi
            </div>
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Empat Situasi. Satu Akar Masalah.</h2>
<p className="text-sm font-light text-[#1D1F28]/70 mt-2 italic">Kalau salah satunya familiar, kamu tahu ini untuk siapa.</p>
</div>
<div className="border-l-2 border-[#1D2DB8] pl-0">
<div className="flex gap-6 py-6 border-b border-[#1D1F28]/10 pl-6">
<span className="font-mono text-[#1D2DB8] text-sm">01</span>
<p className="font-mono text-sm leading-relaxed">Bayar freelancer, LP selesai, conversion tidak naik.</p>
</div>
<div className="flex gap-6 py-6 border-b border-[#1D1F28]/10 pl-6">
<span className="font-mono text-[#1D2DB8] text-sm">02</span>
<p className="font-mono text-sm leading-relaxed">Ada perubahan kecil, proses benerinnya manual dari awal, waktu berjam-jam pun hilang.</p>
</div>
<div className="flex gap-6 py-6 border-b border-[#1D1F28]/10 pl-6">
<span className="font-mono text-[#1D2DB8] text-sm">03</span>
<p className="font-mono text-sm leading-relaxed">Tahu copy harus dibenerin, tapi tidak tahu framework mana yang relevan.</p>
</div>
<div className="flex gap-6 py-6 border-b border-[#1D1F28]/10 pl-6">
<span className="font-mono text-[#1D2DB8] text-sm">04</span>
<p className="font-mono text-sm leading-relaxed">Produk siap, iklan siap, tapi LP belum beres. Peluncuran produk baru pun tertunda lagi.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FFFAF6] text-[#1D1F28] border-t border-[#1D1F28]/5" id="mechanism">
<div className="container mx-auto px-6 max-w-4xl">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Lima Langkah. Satu Output. Nol Handoff.</h2>
<p className="text-sm font-light text-[#1D1F28]/70 mt-3 max-w-xl">Dari deskripsi produk sampai HTML yang siap pakai dan tinggal paste aja.</p>
</div>
<div className="space-y-16 border-l pl-8 ml-2 border-[#1D1F28]/10 relative">

<div className="relative group">
<div className="absolute -left-[45px] top-1 bg-[#FFFAF6] text-[#1D2DB8] font-mono text-xs font-medium px-2 py-1">S_01</div>
<div className="md:flex gap-8 items-start">
<div className="md:w-1/3 mb-4 md:mb-0">
<h3 className="text-lg font-semibold tracking-tight">Konteks Produk</h3>
<p className="font-mono text-xs text-[#1D1F28]/60 mt-2 leading-relaxed">Deskripsikan produk dan brand. Sistem membaca profil.</p>
</div>
<div className="md:w-2/3 h-48 bg-[#1D1F28] flex items-center justify-center border border-[#1D1F28]/10">
<span className="font-mono text-[#FFFAF6]/40 text-xs tracking-widest">[ ANIMASI LANGKAH 1 ]</span>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[45px] top-1 bg-[#FFFAF6] text-[#1D2DB8] font-mono text-xs font-medium px-2 py-1">S_02</div>
<div className="md:flex gap-8 items-start">
<div className="md:w-1/3 mb-4 md:mb-0">
<h3 className="text-lg font-semibold tracking-tight">Visual Direction</h3>
<p className="font-mono text-xs text-[#1D1F28]/60 mt-2 leading-relaxed">Sistem akan merekomendasikan style visual yang sesuai.</p>
</div>
<div className="md:w-2/3 h-48 bg-[#1D1F28] flex items-center justify-center border border-[#1D1F28]/10">
<span className="font-mono text-[#FFFAF6]/40 text-xs tracking-widest">[ ANIMASI LANGKAH 2 ]</span>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[45px] top-1 bg-[#FFFAF6] text-[#1D2DB8] font-mono text-xs font-medium px-2 py-1">S_03</div>
<div className="md:flex gap-8 items-start">
<div className="md:w-1/3 mb-4 md:mb-0">
<h3 className="text-lg font-semibold tracking-tight">Inject Formula</h3>
<p className="font-mono text-xs text-[#1D1F28]/60 mt-2 leading-relaxed">Pilih formula copy: AIDA, PAS, StoryBrand, atau custom.</p>
</div>
<div className="md:w-2/3 h-48 bg-[#1D1F28] flex items-center justify-center border border-[#1D1F28]/10">
<span className="font-mono text-[#FFFAF6]/40 text-xs tracking-widest">[ ANIMASI LANGKAH 3 ]</span>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[45px] top-1 bg-[#FFFAF6] text-[#1D2DB8] font-mono text-xs font-medium px-2 py-1">S_04</div>
<div className="md:flex gap-8 items-start">
<div className="md:w-1/3 mb-4 md:mb-0">
<h3 className="text-lg font-semibold tracking-tight">Review &amp; Refine</h3>
<p className="font-mono text-xs text-[#1D1F28]/60 mt-2 leading-relaxed">Lihat draft copywriting, edit seperlunya sebelum render.</p>
</div>
<div className="md:w-2/3 h-48 bg-[#1D1F28] flex items-center justify-center border border-[#1D1F28]/10">
<span className="font-mono text-[#FFFAF6]/40 text-xs tracking-widest">[ ANIMASI LANGKAH 4 ]</span>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -left-[45px] top-1 bg-[#FFFAF6] text-[#1D2DB8] font-mono text-xs font-medium px-2 py-1">S_05</div>

<div className="absolute -left-[34px] top-0 bottom-0 w-[2px] bg-[#1D2DB8]"></div>
<div className="md:flex gap-8 items-start">
<div className="md:w-1/3 mb-4 md:mb-0">
<h3 className="text-lg font-semibold tracking-tight">Generate Code</h3>
<p className="font-mono text-xs text-[#1D1F28]/60 mt-2 leading-relaxed">Dapatkan HTML. Paste ke Shopify, WordPress, atau Scalev tanpa plugin.</p>
</div>
<div className="md:w-2/3 h-48 bg-[#1D1F28] flex items-center justify-center border border-[#1D1F28]/10 relative overflow-hidden">
<div className="absolute inset-0 bg-grid-light opacity-20"></div>
<span className="font-mono text-[#FFFAF6]/80 text-xs tracking-widest z-10 bg-[#1D1F28] px-4 py-2 border border-[#FFFAF6]/10">&lt;div id="lp-ready"&gt;...&lt;/div&gt;</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block w-full md:w-auto text-center bg-[#1D1F28] text-[#FFFAF6] font-medium text-sm tracking-wide px-10 py-4 hover:bg-[#1D1F28]/90 transition-colors uppercase font-mono" href="#offer">
                    Lihat Cara Kerjanya
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#1D1F28] border-t border-[#FFFAF6]/5 overflow-hidden">
<div className="container mx-auto px-6 mb-12 max-w-6xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#FFFAF6]">Ini Output-nya. Bukan Mockup Aja dan Beneran Kepake</h2>
<p className="text-sm font-light text-[#FFFAF6]/60 mt-3 max-w-xl">Niche berbeda. Style berbeda. Satu tool. Sistem merekomendasikan visual berdasarkan deskripsi produk, bukan template generik yang dipakai semua orang.</p>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-8 hide-scrollbar max-w-[100vw]">

<div className="shrink-0 w-[260px] aspect-[240/380] border border-[#FFFAF6]/20 bg-[#15171e] relative group flex flex-col">
<div className="absolute top-0 left-0 bg-[#1D2DB8] text-[#FFFAF6] font-mono text-[10px] tracking-wider px-2 py-1 uppercase z-10">Skincare</div>
<div className="flex-1 bg-[#1A1C23] m-2 border border-[#FFFAF6]/5 flex items-center justify-center">
<span className="font-mono text-xs text-[#FFFAF6]/30">Render_01</span>
</div>
</div>
<div className="shrink-0 w-[260px] aspect-[240/380] border border-[#FFFAF6]/20 bg-[#15171e] relative group flex flex-col">
<div className="absolute top-0 left-0 bg-[#1D2DB8] text-[#FFFAF6] font-mono text-[10px] tracking-wider px-2 py-1 uppercase z-10">Digital Course</div>
<div className="flex-1 bg-[#1A1C23] m-2 border border-[#FFFAF6]/5 flex items-center justify-center">
<span className="font-mono text-xs text-[#FFFAF6]/30">Render_02</span>
</div>
</div>
<div className="shrink-0 w-[260px] aspect-[240/380] border border-[#FFFAF6]/20 bg-[#15171e] relative group flex flex-col">
<div className="absolute top-0 left-0 bg-[#1D2DB8] text-[#FFFAF6] font-mono text-[10px] tracking-wider px-2 py-1 uppercase z-10">Fashion Apparel</div>
<div className="flex-1 bg-[#1A1C23] m-2 border border-[#FFFAF6]/5 flex items-center justify-center">
<span className="font-mono text-xs text-[#FFFAF6]/30">Render_03</span>
</div>
</div>
<div className="shrink-0 w-[260px] aspect-[240/380] border border-[#FFFAF6]/20 bg-[#15171e] relative group flex flex-col">
<div className="absolute top-0 left-0 bg-[#1D2DB8] text-[#FFFAF6] font-mono text-[10px] tracking-wider px-2 py-1 uppercase z-10">SaaS Tool</div>
<div className="flex-1 bg-[#1A1C23] m-2 border border-[#FFFAF6]/5 flex items-center justify-center">
<span className="font-mono text-xs text-[#FFFAF6]/30">Render_04</span>
</div>
</div>
<div className="shrink-0 w-[260px] aspect-[240/380] border border-[#FFFAF6]/20 bg-[#15171e] relative group flex flex-col">
<div className="absolute top-0 left-0 bg-[#1D2DB8] text-[#FFFAF6] font-mono text-[10px] tracking-wider px-2 py-1 uppercase z-10">Herbal Health</div>
<div className="flex-1 bg-[#1A1C23] m-2 border border-[#FFFAF6]/5 flex items-center justify-center">
<span className="font-mono text-xs text-[#FFFAF6]/30">Render_05</span>
</div>
</div>
<div className="shrink-0 w-[260px] aspect-[240/380] border border-[#FFFAF6]/20 bg-[#15171e] relative group flex flex-col">
<div className="absolute top-0 left-0 bg-[#1D2DB8] text-[#FFFAF6] font-mono text-[10px] tracking-wider px-2 py-1 uppercase z-10">Tech Gadget</div>
<div className="flex-1 bg-[#1A1C23] m-2 border border-[#FFFAF6]/5 flex items-center justify-center">
<span className="font-mono text-xs text-[#FFFAF6]/30">Render_06</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F9FA] text-[#1D1F28] overflow-hidden">
<div className="container mx-auto px-6 max-w-4xl text-center mb-16">
<div className="flex items-baseline justify-center gap-4 mb-4">
<span className="text-7xl font-bold tracking-tighter text-[#1D2DB8]">28</span>
<span className="text-3xl font-bold tracking-tight text-[#1D1F28]">Menit</span>
</div>
<h2 className="text-xl font-medium tracking-tight">Rata-rata Aktual.</h2>
<p className="text-sm font-light text-[#1D1F28]/60 mt-2">Bukan estimasi. Ini angka dari pengguna yang sudah buat LP mereka.</p>
</div>
<div className="relative w-full flex overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#F8F9FA] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-[#F8F9FA] after:to-transparent">
<div className="flex w-[200%] animate-marquee-content gap-6 px-3">

<div className="flex gap-6 w-1/2 justify-around">
<div className="shrink-0 w-[280px] h-[400px] border border-[#1D1F28]/15 bg-[#E5E7EB] relative flex flex-col justify-end p-4">
<span className="font-mono text-[9px] text-[#1D1F28]/50 tracking-wider">SCREENSHOT WA_01</span>
</div>
<div className="shrink-0 w-[280px] h-[400px] border border-[#1D1F28]/15 bg-[#E5E7EB] relative flex flex-col justify-end p-4">
<span className="font-mono text-[9px] text-[#1D1F28]/50 tracking-wider">SCREENSHOT WA_02</span>
</div>
<div className="shrink-0 w-[280px] h-[400px] border border-[#1D1F28]/15 bg-[#E5E7EB] relative flex flex-col justify-end p-4">
<span className="font-mono text-[9px] text-[#1D1F28]/50 tracking-wider">SCREENSHOT WA_03</span>
</div>
<div className="shrink-0 w-[280px] h-[400px] border border-[#1D1F28]/15 bg-[#E5E7EB] relative flex flex-col justify-end p-4">
<span className="font-mono text-[9px] text-[#1D1F28]/50 tracking-wider">SCREENSHOT WA_04</span>
</div>
</div>
<div className="flex gap-6 w-1/2 justify-around">
<div className="shrink-0 w-[280px] h-[400px] border border-[#1D1F28]/15 bg-[#E5E7EB] relative flex flex-col justify-end p-4">
<span className="font-mono text-[9px] text-[#1D1F28]/50 tracking-wider">SCREENSHOT WA_01</span>
</div>
<div className="shrink-0 w-[280px] h-[400px] border border-[#1D1F28]/15 bg-[#E5E7EB] relative flex flex-col justify-end p-4">
<span className="font-mono text-[9px] text-[#1D1F28]/50 tracking-wider">SCREENSHOT WA_02</span>
</div>
<div className="shrink-0 w-[280px] h-[400px] border border-[#1D1F28]/15 bg-[#E5E7EB] relative flex flex-col justify-end p-4">
<span className="font-mono text-[9px] text-[#1D1F28]/50 tracking-wider">SCREENSHOT WA_03</span>
</div>
<div className="shrink-0 w-[280px] h-[400px] border border-[#1D1F28]/15 bg-[#E5E7EB] relative flex flex-col justify-end p-4">
<span className="font-mono text-[9px] text-[#1D1F28]/50 tracking-wider">SCREENSHOT WA_04</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1D1F28] pt-24" id="offer">
<div className="container mx-auto px-6 max-w-3xl mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Apa yang Kamu Dapat Seharga Rp 147.000</h2>
<p className="text-sm font-light text-[#FFFAF6]/60 mt-2 italic">Baca ini sebelum bilang mahal.</p>
</div>
<div className="container mx-auto px-6 max-w-3xl mb-16">
<div className="font-mono text-sm space-y-0">

<div className="flex justify-between items-end py-4 border-b border-[#FFFAF6]/10">
<span className="text-[#FFFAF6]/80 pr-4">Akses Lifetime Landing Page Engine</span>
<span className="text-[#1D2DB8] shrink-0 text-xs">TERMASUK</span>
</div>
<div className="flex justify-between items-end py-4 border-b border-[#FFFAF6]/10">
<span className="text-[#FFFAF6]/80 pr-4">Unlimited LP Generation</span>
<span className="text-[#1D2DB8] shrink-0 text-xs">TERMASUK</span>
</div>
<div className="flex justify-between items-end py-4 border-b border-[#FFFAF6]/10">
<span className="text-[#FFFAF6]/80 pr-4">Video Panduan Lengkap</span>
<span className="text-[#1D2DB8] shrink-0 text-xs">TERMASUK</span>
</div>
<div className="flex justify-between items-end py-4 border-b border-[#FFFAF6]/10">
<span className="text-[#FFFAF6]/80 pr-4">Akses Group Support</span>
<span className="text-[#1D2DB8] shrink-0 text-xs">TERMASUK</span>
</div>

<div className="flex justify-between items-end py-4 border-b border-[#FFFAF6]/10 mt-8">
<span className="text-[#FFFAF6]/60 pr-4 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
                        Bonus: Brand Builder
                    </span>
<span className="text-[#1D2DB8] shrink-0">Rp 197.000</span>
</div>
<div className="flex justify-between items-end py-4 border-b border-[#FFFAF6]/10">
<span className="text-[#FFFAF6]/60 pr-4 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:graph-up-linear"></iconify-icon>
                        Bonus: Ads Performance Analyzer
                    </span>
<span className="text-[#1D2DB8] shrink-0">Rp 197.000</span>
</div>
<div className="flex justify-between items-end py-4 border-b border-[#FFFAF6]/10">
<span className="text-[#FFFAF6]/60 pr-4 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:document-text-linear"></iconify-icon>
                        Bonus: Business Prompt Library
                    </span>
<span className="text-[#1D2DB8] shrink-0">Rp 127.000</span>
</div>
<div className="flex justify-between items-end py-4 border-b border-[#FFFAF6]/10 bg-[#1D2DB8]/10 px-4 -mx-4 mt-2">
<span className="text-[#FFFAF6] pr-4 text-xs tracking-widest uppercase">Total Nilai Bonus</span>
<span className="text-[#1D2DB8] shrink-0 font-medium">Rp 521.000</span>
</div>
</div>
</div>
<div className="bg-[#1D2DB8] text-[#FFFAF6] py-16 px-6">
<div className="container mx-auto max-w-3xl text-center">
<p className="font-mono text-sm opacity-80 mb-4 tracking-widest uppercase">Total Nilai Keseluruhan: Rp 668.000+</p>
<div className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 tabular-nums">
                    Rp 147.000
                </div>
<p className="text-base font-light mb-10 max-w-xl mx-auto opacity-90 leading-relaxed">
                    Bonusnya saja sudah 3,5x lipat harga yang kamu bayar, sebelum tool utamanya dihitung.
                </p>
<a className="block w-full bg-[#FFFAF6] text-[#1D1F28] py-5 text-lg font-semibold tracking-wide hover:bg-white transition-colors" href="#checkout">
                    Klaim Sekarang, Rp 147.000
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#FFFAF6] text-[#1D1F28]">
<div className="container mx-auto px-6 max-w-3xl">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Tiga Pertanyaan yang Wajar.</h2>
<p className="text-sm font-light text-[#1D1F28]/60 mt-2 italic">Jawaban langsung, tanpa basa-basi.</p>
</div>
<div className="space-y-0 border-t border-[#1D1F28]">

<details className="group">
<summary className="font-semibold tracking-tight cursor-pointer py-6 border-b border-[#1D1F28] flex gap-6 items-center hover:bg-[#1D1F28]/5 transition-colors px-2">
<span className="font-mono text-[#1D2DB8] text-xs shrink-0">01</span>
<span className="text-lg">Prosesnya rumit?</span>
</summary>
<div className="font-mono text-sm py-6 px-2 text-[#1D1F28]/80 leading-relaxed pl-[44px] bg-[#1D1F28]/[0.02]">
                        Tidak. Lima langkah linear, tidak ada percabangan, tidak ada setting teknis. Rata-rata pengguna selesai dalam 28 menit. Ada video panduan dan group support kalau macet di tengah jalan.
                    </div>
</details>

<details className="group">
<summary className="font-semibold tracking-tight cursor-pointer py-6 border-b border-[#1D1F28] flex gap-6 items-center hover:bg-[#1D1F28]/5 transition-colors px-2">
<span className="font-mono text-[#1D2DB8] text-xs shrink-0">02</span>
<span className="text-lg">Copy-nya kaku dan generik?</span>
</summary>
<div className="font-mono text-sm py-6 px-2 text-[#1D1F28]/80 leading-relaxed pl-[44px] bg-[#1D1F28]/[0.02]">
                        Sebelum kode di-generate, ada tahap edit penuh. Kamu pilih style dari rekomendasi AI berdasarkan deskripsi brand, bukan template kosong. Output-nya titik awal yang sudah punya arah, bukan teks lorem ipsum.
                    </div>
</details>

<details className="group">
<summary className="font-semibold tracking-tight cursor-pointer py-6 border-b border-[#1D1F28] flex gap-6 items-center hover:bg-[#1D1F28]/5 transition-colors px-2">
<span className="font-mono text-[#1D2DB8] text-xs shrink-0">03</span>
<span className="text-lg">Desainnya tidak sesuai brand?</span>
</summary>
<div className="font-mono text-sm py-6 px-2 text-[#1D1F28]/80 leading-relaxed pl-[44px] bg-[#1D1F28]/[0.02]">
                        AI membaca deskripsi produk dan brand kamu, lalu menyarankan style yang relevan. Bukan satu pilihan, bukan acak. Kalau belum yakin, lihat galeri output dari delapan niche berbeda di section sebelumnya.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-[#1D1F28] relative overflow-hidden text-center" id="checkout">
<div className="absolute inset-0 bg-grid-light opacity-30"></div>
<div className="container mx-auto px-6 max-w-3xl relative z-10">

<div className="flex justify-center gap-4 md:gap-8 mb-12">
<div className="flex flex-col items-center">
<span className="font-mono text-5xl md:text-7xl text-[#1D2DB8] font-light tabular-nums" id="days">04</span>
<span className="font-mono text-[10px] text-[#FFFAF6]/40 mt-2 uppercase tracking-widest">Hari</span>
</div>
<span className="font-mono text-5xl md:text-7xl text-[#1D2DB8]/50 font-light">:</span>
<div className="flex flex-col items-center">
<span className="font-mono text-5xl md:text-7xl text-[#1D2DB8] font-light tabular-nums" id="hours">11</span>
<span className="font-mono text-[10px] text-[#FFFAF6]/40 mt-2 uppercase tracking-widest">Jam</span>
</div>
<span className="font-mono text-5xl md:text-7xl text-[#1D2DB8]/50 font-light">:</span>
<div className="flex flex-col items-center">
<span className="font-mono text-5xl md:text-7xl text-[#1D2DB8] font-light tabular-nums" id="mins">59</span>
<span className="font-mono text-[10px] text-[#FFFAF6]/40 mt-2 uppercase tracking-widest">Mnt</span>
</div>
<span className="font-mono text-5xl md:text-7xl text-[#1D2DB8]/50 font-light">:</span>
<div className="flex flex-col items-center">
<span className="font-mono text-5xl md:text-7xl text-[#1D2DB8] font-light tabular-nums" id="secs">34</span>
<span className="font-mono text-[10px] text-[#FFFAF6]/40 mt-2 uppercase tracking-widest">Dtk</span>
</div>
</div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#FFFAF6] mb-4">Harga Rp 147.000 Cuma Sampai Timer Ini Habis</h2>
<p className="text-sm font-light text-[#FFFAF6]/60 mb-8 italic">Setelah deadline, harga kembali normal ke Rp 589.000.</p>
<div className="w-full h-px bg-[#FFFAF6]/10 mb-12"></div>
<div className="space-y-6 max-w-xl mx-auto mb-12">
<p className="text-base font-light text-[#FFFAF6]/80 leading-relaxed">
                    Setelah kamu checkout hari ini, kamu tidak perlu hire copywriter lagi, tidak perlu tunggu desainer selesai, tidak perlu mulai dari nol setiap ada produk baru. LP profesional selesai dalam satu sesi, HTML-nya langsung bisa di-paste.
                </p>
<p className="text-sm font-medium text-[#FFFAF6]">
                    Bayar via QRIS atau Virtual Account. Akses langsung aktif.
                </p>
</div>
<div className="max-w-md mx-auto">
<a className="block w-full bg-[#1D2DB8] text-[#FFFAF6] py-5 text-base font-medium tracking-wide hover:bg-[#1D2DB8]/90 transition-colors mb-4" href="#">
                    Akses Sekarang, Rp 147.000
                </a>
<div className="font-mono text-xs text-[#FFFAF6]/40 flex justify-center items-center gap-2">
<span>QRIS</span>
<span>·</span>
<span>Virtual Account</span>
</div>
</div>
</div>
</section>



    </>
  );
}
