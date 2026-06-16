import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Interaction Logic
        document.addEventListener('DOMContentLoaded', () => {
            const btnKinerja = document.getElementById('btn-kinerja');
            const detailKinerja = document.getElementById('detail-kinerja');
            const closeKinerja = document.getElementById('close-kinerja');
            const iconKinerjaChevron = document.getElementById('icon-kinerja-chevron');

            const btnDokumen = document.getElementById('btn-dokumen');
            const detailDokumen = document.getElementById('detail-dokumen');
            const closeDokumen = document.getElementById('close-dokumen');
            const iconDokumenChevron = document.getElementById('icon-dokumen-chevron');

            // Accordion toggle function
            function toggleAccordion(sectionToOpen, btnToActive, chevronToRotate, sectionToClose, btnToDeactive, chevronToReset) {
                const isHidden = sectionToOpen.classList.contains('hidden');
                
                if (isHidden) {
                    // Open clicked section
                    sectionToOpen.classList.remove('hidden');
                    btnToActive.classList.add('ring-2', 'ring-gray-200', 'border-gray-300');
                    if(chevronToRotate) chevronToRotate.classList.add('rotate-180');
                    
                    // Close the other section
                    sectionToClose.classList.add('hidden');
                    btnToDeactive.classList.remove('ring-2', 'ring-gray-200', 'border-gray-300');
                    if(chevronToReset) chevronToReset.classList.remove('rotate-180');
                } else {
                    // Close clicked section
                    sectionToOpen.classList.add('hidden');
                    btnToActive.classList.remove('ring-2', 'ring-gray-200', 'border-gray-300');
                    if(chevronToRotate) chevronToRotate.classList.remove('rotate-180');
                }
            }

            btnKinerja.addEventListener('click', () => {
                toggleAccordion(detailKinerja, btnKinerja, iconKinerjaChevron, detailDokumen, btnDokumen, iconDokumenChevron);
            });

            closeKinerja.addEventListener('click', () => {
                detailKinerja.classList.add('hidden');
                btnKinerja.classList.remove('ring-2', 'ring-gray-200', 'border-gray-300');
                if(iconKinerjaChevron) iconKinerjaChevron.classList.remove('rotate-180');
            });

            btnDokumen.addEventListener('click', () => {
                toggleAccordion(detailDokumen, btnDokumen, iconDokumenChevron, detailKinerja, btnKinerja, iconKinerjaChevron);
            });

            closeDokumen.addEventListener('click', () => {
                detailDokumen.classList.add('hidden');
                btnDokumen.classList.remove('ring-2', 'ring-gray-200', 'border-gray-300');
                if(iconDokumenChevron) iconDokumenChevron.classList.remove('rotate-180');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="md:p-8 max-w-[1400px] mr-auto ml-auto pt-4 pr-4 pb-4 pl-4">

<header className="mb-8">
<div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i>
<span>Dashboard</span>
</div>
<h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Dashboard</h1>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-10">

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Aanwijzing Online</span>
</div>
<span className="text-2xl font-semibold tracking-tight">0</span>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
<i className="w-5 h-5" data-lucide="file-text" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Berita Acara Aanwijzing</span>
</div>
<span className="text-2xl font-semibold tracking-tight">0</span>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm lg:col-span-2 xl:col-span-1">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
<i className="w-5 h-5" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Pengadaan Menunggu Penawaran</span>
</div>
<span className="text-2xl font-semibold tracking-tight">0</span>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm lg:col-span-2 xl:col-span-1">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
<i className="w-5 h-5" data-lucide="send" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Penawaran Sudah Dikirim</span>
</div>
<span className="text-2xl font-semibold tracking-tight">0</span>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
<i className="w-5 h-5" data-lucide="handshake" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Negosiasi</span>
</div>
<span className="text-2xl font-semibold tracking-tight">0</span>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
<i className="w-5 h-5" data-lucide="file-spreadsheet" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Berita Acara Negosiasi</span>
</div>
<span className="text-2xl font-semibold tracking-tight">0</span>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm lg:col-span-2 xl:col-span-1">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
<i className="w-5 h-5" data-lucide="file-up" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide leading-tight">Pengadaan Menunggu<br/>Dokumen Prakualifikasi</span>
</div>
<span className="text-2xl font-semibold tracking-tight">0</span>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm lg:col-span-2 xl:col-span-1">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
<i className="w-5 h-5" data-lucide="trophy" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Pengumuman Pemenang</span>
</div>
<span className="text-2xl font-semibold tracking-tight">0</span>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
<i className="w-5 h-5" data-lucide="gavel" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">E-Auction</span>
</div>
<span className="text-2xl font-semibold tracking-tight">0</span>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50/80 flex items-center justify-center text-blue-600 border border-blue-100/50">
<i className="w-5 h-5" data-lucide="file-badge" strokeWidth="1.5"></i>
</div>
<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">SPK/Perjanjian</span>
</div>
<span className="text-2xl font-semibold tracking-tight">0</span>
</div>
</div>

<div className="mb-10">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

<button className="group text-left bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full" id="btn-kinerja">
<div className="flex items-start sm:items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-gray-900 group-hover:bg-gray-100 transition-colors shrink-0">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-base font-semibold text-gray-900 mb-1">Kinerja Vendor</h3>
<p className="text-sm text-gray-500">Evaluasi performa periode terakhir</p>
</div>
</div>
<div className="flex items-center gap-4 self-start sm:self-auto ml-16 sm:ml-0">
<div className="text-right">
<div className="text-3xl font-semibold tracking-tight text-gray-900">4.8<span className="text-lg text-gray-400 font-medium">/5</span></div>
</div>
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Baik
                        </span>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" data-lucide="chevron-down" id="icon-kinerja-chevron" strokeWidth="1.5"></i>
</div>
</button>

<button className="group text-left bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 w-full" id="btn-dokumen">
<div className="flex items-start sm:items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 group-hover:text-gray-900 group-hover:bg-gray-100 transition-colors shrink-0">
<i className="w-6 h-6" data-lucide="folder-clock" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900 mb-1">Dokumen Kadaluarsa</h3>
<p className="text-sm text-gray-500">Status kelengkapan administrasi</p>
</div>
</div>
<div className="flex flex-col gap-2 self-start sm:self-auto ml-16 sm:ml-0">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="text-sm font-medium text-gray-700"><span className="text-red-600 font-semibold">2</span> Expired</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
<span className="text-sm font-medium text-gray-700"><span className="text-amber-600 font-semibold">3</span> Mendekati (&lt; 30 hari)</span>
</div>
</div>
<i className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors hidden sm:block ml-2" data-lucide="chevron-down" id="icon-dokumen-chevron" strokeWidth="1.5"></i>
</button>
</div>

<div className="hidden mt-4 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 relative" id="detail-kinerja">

<div className="border-b border-gray-100 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-start justify-between bg-gray-50/50">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Analisis Kinerja</h3>
<p className="text-sm text-gray-500 mt-1">Detail evaluasi dan riwayat performa vendor.</p>

<button className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
<i className="w-4 h-4 text-gray-500" data-lucide="calendar" strokeWidth="1.5"></i>
<span>Nov 2025 - Apr 2026</span>
<i className="w-4 h-4 text-gray-400 ml-2" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
<button className="absolute right-5 top-5 sm:relative sm:right-auto sm:top-auto p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none" id="close-kinerja">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 sm:p-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
<div className="text-sm font-medium text-gray-500 mb-3 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
                                    Evaluasi Terakhir • Apr 2026
                                </div>
<div className="flex items-end gap-3 mb-2">
<span className="text-5xl font-semibold tracking-tight text-gray-900 leading-none">4.8</span>
<span className="text-xl text-gray-400 font-medium mb-1">/5</span>
</div>
<div className="mt-4 flex items-center gap-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md text-sm font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
<i className="w-4 h-4 mr-1.5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                                        Status: Baik
                                    </span>
</div>
</div>

<div className="flex flex-col gap-6">

<div className="border border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center bg-white shadow-sm w-full">
<span className="text-sm font-semibold text-gray-900 mb-6 w-full text-left">Distribusi Kategori Penilaian</span>
<div className="relative w-36 h-36 mb-6">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 36 36">

<circle className="stroke-gray-50" cx="18" cy="18" fill="none" r="16" strokeWidth="4"></circle>

<circle className="stroke-emerald-500" cx="18" cy="18" fill="none" r="16" stroke-dasharray="60, 100" stroke-dashoffset="0" strokeWidth="4"></circle>

<circle className="stroke-blue-500" cx="18" cy="18" fill="none" r="16" stroke-dasharray="32, 100" stroke-dashoffset="-60" strokeWidth="4"></circle>

<circle className="stroke-red-500" cx="18" cy="18" fill="none" r="16" stroke-dasharray="8, 100" stroke-dashoffset="-92" strokeWidth="4"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-2xl font-semibold text-gray-900">25</span>
<span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-0.5">Total</span>
</div>
</div>

<div className="flex flex-col gap-3 w-full">
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-emerald-500"></span>
<span className="text-gray-600 font-medium">Sangat Baik</span>
</div>
<span className="font-semibold text-gray-900">15</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-blue-500"></span>
<span className="text-gray-600 font-medium">Baik</span>
</div>
<span className="font-semibold text-gray-900">8</span>
</div>
<div className="flex items-center justify-between text-sm">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-red-500"></span>
<span className="text-gray-600 font-medium">Tidak Baik</span>
</div>
<span className="font-semibold text-gray-900">2</span>
</div>
</div>
</div>

<div className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm w-full">
<span className="text-sm font-semibold text-gray-900 block mb-6">Tren Performa Historis</span>
<div className="w-full h-48 relative">
<svg className="w-full h-full overflow-visible font-sans" viewbox="0 0 130 65">

<text className="fill-gray-400 text-[5px] font-medium" text-anchor="end" x="10" y="7">5.0</text>
<line className="stroke-gray-100" strokeWidth="0.5" x1="14" x2="125" y1="5" y2="5"></line>
<text className="fill-gray-400 text-[5px] font-medium" text-anchor="end" x="10" y="15">4.0</text>
<line className="stroke-gray-100" strokeWidth="0.5" x1="14" x2="125" y1="13" y2="13"></line>
<text className="fill-gray-400 text-[5px] font-medium" text-anchor="end" x="10" y="23">3.0</text>
<line className="stroke-gray-100" stroke-dasharray="1,1" strokeWidth="0.5" x1="14" x2="125" y1="21" y2="21"></line>
<text className="fill-gray-400 text-[5px] font-medium" text-anchor="end" x="10" y="31">2.0</text>
<line className="stroke-gray-100" stroke-dasharray="1,1" strokeWidth="0.5" x1="14" x2="125" y1="29" y2="29"></line>
<text className="fill-gray-400 text-[5px] font-medium" text-anchor="end" x="10" y="39">1.0</text>
<line className="stroke-gray-100" stroke-dasharray="1,1" strokeWidth="0.5" x1="14" x2="125" y1="37" y2="37"></line>
<text className="fill-gray-400 text-[5px] font-medium" text-anchor="end" x="10" y="47">0</text>
<line className="stroke-gray-200" strokeWidth="1" x1="14" x2="125" y1="45" y2="45"></line>

<text className="fill-gray-500 text-[5px] font-medium" text-anchor="middle" x="14" y="55">Nov</text>
<text className="fill-gray-500 text-[5px] font-medium" text-anchor="middle" x="36.2" y="55">Des</text>
<text className="fill-gray-500 text-[5px] font-medium" text-anchor="middle" x="58.4" y="55">Jan</text>
<text className="fill-gray-500 text-[5px] font-medium" text-anchor="middle" x="80.6" y="55">Feb</text>
<text className="fill-gray-500 text-[5px] font-medium" text-anchor="middle" x="102.8" y="55">Mar</text>
<text className="fill-gray-500 text-[5px] font-medium" text-anchor="middle" x="125" y="55">Apr</text>


<path className="stroke-blue-500" d="M14,8.44 L36.2,14.12 L58.4,11.48 L80.6,10.68 L102.8,21.00 L125,5.00" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>

<circle className="fill-white stroke-blue-500" cx="14" cy="8.44" r="1.5" strokeWidth="1"></circle>
<circle className="fill-white stroke-blue-500" cx="36.2" cy="14.12" r="1.5" strokeWidth="1"></circle>
<circle className="fill-white stroke-blue-500" cx="58.4" cy="11.48" r="1.5" strokeWidth="1"></circle>
<circle className="fill-white stroke-blue-500" cx="80.6" cy="10.68" r="1.5" strokeWidth="1"></circle>
<circle className="fill-white stroke-blue-500" cx="102.8" cy="21.00" r="1.5" strokeWidth="1"></circle>
<circle className="fill-blue-500" cx="125" cy="5.00" r="2"></circle>

<text className="fill-blue-600 text-[5px] font-semibold" text-anchor="middle" x="125" y="1">5.00</text>
</svg>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8">
<div className="flex items-center justify-between mb-6">
<h4 className="text-base font-semibold text-gray-900">Breakdown per Kategori</h4>
<span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md">Threshold ≥ 3.0</span>
</div>
<div className="space-y-3.5">

<div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm transition-all hover:border-gray-200">
<div className="flex justify-between items-center mb-2.5">
<span className="text-sm font-medium text-gray-900">Keaktifan Rekanan</span>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900 w-6 text-right">4.5</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 w-24 justify-center uppercase tracking-wider">Sangat Baik</span>
</div>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '90%'}}></div>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm transition-all hover:border-gray-200">
<div className="flex justify-between items-center mb-2.5">
<span className="text-sm font-medium text-gray-900">Komunikatif</span>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900 w-6 text-right">3.8</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100 w-24 justify-center uppercase tracking-wider">Baik</span>
</div>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '76%'}}></div>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm transition-all hover:border-gray-200">
<div className="flex justify-between items-center mb-2.5">
<span className="text-sm font-medium text-gray-900">Kualitas Mutu</span>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900 w-6 text-right">4.8</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 w-24 justify-center uppercase tracking-wider">Sangat Baik</span>
</div>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '96%'}}></div>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm transition-all hover:border-gray-200">
<div className="flex justify-between items-center mb-2.5">
<span className="text-sm font-medium text-gray-900">Kemampuan Teknis</span>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900 w-6 text-right">4.3</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 w-24 justify-center uppercase tracking-wider">Sangat Baik</span>
</div>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '86%'}}></div>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm transition-all hover:border-gray-200">
<div className="flex justify-between items-center mb-2.5">
<span className="text-sm font-medium text-gray-900">Kesesuaian Progress</span>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900 w-6 text-right">3.5</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100 w-24 justify-center uppercase tracking-wider">Baik</span>
</div>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '70%'}}></div>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm transition-all hover:border-gray-200">
<div className="flex justify-between items-center mb-2.5">
<span className="text-sm font-medium text-gray-900">Dukungan Teknis</span>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900 w-6 text-right">4.3</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100 w-24 justify-center uppercase tracking-wider">Sangat Baik</span>
</div>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '86%'}}></div>
</div>
</div>

<div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm transition-all hover:border-gray-200">
<div className="flex justify-between items-center mb-2.5">
<span className="text-sm font-medium text-gray-900">Delivery</span>
<div className="flex items-center gap-3">
<span className="text-sm font-semibold text-gray-900 w-6 text-right">3.1</span>
<span className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-100 w-24 justify-center uppercase tracking-wider">Baik</span>
</div>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 rounded-full" style={{width: '62%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden mt-4 bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 relative" id="detail-dokumen">
<div className="border-b border-gray-100 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50/50">
<div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Manajemen Dokumen</h3>
<p className="text-sm text-gray-500 mt-1">Daftar dokumen yang memerlukan pembaruan segera.</p>
</div>
<button className="absolute right-5 top-5 sm:relative sm:right-auto sm:top-auto p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none" id="close-dokumen">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 sm:p-6 flex flex-col gap-8">

<div>
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-red-500" data-lucide="alert-octagon" strokeWidth="1.5"></i>
<h4 className="text-base font-semibold text-gray-900">Dokumen Telah Expired</h4>
<span className="ml-2 bg-red-100 text-red-700 text-xs font-medium px-2 py-0.5 rounded-full">2</span>
</div>
<div className="overflow-x-auto border border-gray-200 rounded-xl">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Nama Dokumen</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Kadaluarsa</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Aksi</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 text-sm text-gray-900 font-medium">Surat Izin Usaha Perdagangan (SIUP)</td>
<td className="px-4 py-3 text-sm text-gray-600">15 September 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-200">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Expired
                                            </span>
</td>
<td className="px-4 py-3 text-right">
<button className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-200 shadow-sm rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
<i className="w-4 h-4" data-lucide="upload-cloud" strokeWidth="1.5"></i> Perbarui
                                            </button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 text-sm text-gray-900 font-medium">Tanda Daftar Perusahaan (TDP)</td>
<td className="px-4 py-3 text-sm text-gray-600">01 Oktober 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-red-50 text-red-700 border border-red-200">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span> Expired
                                            </span>
</td>
<td className="px-4 py-3 text-right">
<button className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-200 shadow-sm rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
<i className="w-4 h-4" data-lucide="upload-cloud" strokeWidth="1.5"></i> Perbarui
                                            </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-amber-500" data-lucide="alert-triangle" strokeWidth="1.5"></i>
<h4 className="text-base font-semibold text-gray-900">Mendekati Expired (&lt; 30 Hari)</h4>
<span className="ml-2 bg-amber-100 text-amber-800 text-xs font-medium px-2 py-0.5 rounded-full">3</span>
</div>
<div className="overflow-x-auto border border-gray-200 rounded-xl">
<table className="w-full text-left border-collapse whitespace-nowrap">
<thead>
<tr className="bg-gray-50 border-b border-gray-200">
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Nama Dokumen</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal Kadaluarsa</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
<th className="px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-right">Aksi</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100">
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 text-sm text-gray-900 font-medium">Sertifikat Badan Usaha (SBU)</td>
<td className="px-4 py-3 text-sm text-gray-600">12 November 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Akan Expired dalam 8 hari
                                            </span>
</td>
<td className="px-4 py-3 text-right">
<button className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-200 shadow-sm rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
<i className="w-4 h-4" data-lucide="upload-cloud" strokeWidth="1.5"></i> Perbarui
                                            </button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 text-sm text-gray-900 font-medium">Laporan Pajak Tahunan</td>
<td className="px-4 py-3 text-sm text-gray-600">20 November 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Akan Expired dalam 13 hari
                                            </span>
</td>
<td className="px-4 py-3 text-right">
<button className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-200 shadow-sm rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
<i className="w-4 h-4" data-lucide="upload-cloud" strokeWidth="1.5"></i> Perbarui
                                            </button>
</td>
</tr>
<tr className="hover:bg-gray-50/50 transition-colors">
<td className="px-4 py-3 text-sm text-gray-900 font-medium">Surat Keterangan Domisili</td>
<td className="px-4 py-3 text-sm text-gray-600">25 November 2023</td>
<td className="px-4 py-3">
<span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Akan Expired dalam 24 hari
                                            </span>
</td>
<td className="px-4 py-3 text-right">
<button className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 border border-gray-200 shadow-sm rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
<i className="w-4 h-4" data-lucide="upload-cloud" strokeWidth="1.5"></i> Perbarui
                                            </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>

<div className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
<div className="bg-gray-50/80 px-6 py-4 border-b border-gray-200">
<h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Catatan</h3>
</div>
<div className="p-6">
<ul className="list-disc pl-5 space-y-3 text-sm text-gray-600">
<li>Kami menjamin setiap penawaran/transaksi yang Anda lakukan melalui aplikasi ini terjaga kerahasiaannya.</li>
<li>Sangatlah disarankan untuk mengirimkan penawaran Anda sesegera mungkin. Anda masih diberikan kesempatan melakukan perbaikan pada penawaran tersebut hingga masa kirim penawaran ditutup.</li>
<li>Aplikasi akan secara otomatis keluar (log out) bila browser Anda tidak melakukan aktivitas lebih dari 60 menit.</li>
<li>Untuk keamanan, dihimbau agar password Anda diganti secara berkala.</li>
</ul>
</div>
</div>
</div>


    </>
  );
}
