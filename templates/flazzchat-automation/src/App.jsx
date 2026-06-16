import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
teal: {
50: '#f0fdfa',
100: '#ccfbf1',
500: '#14b8a6',
600: '#0d9488',
700: '#0f766e',
900: '#134e4a',
},
slate: {
850: '#1e293b',
}
}
}
}
}



        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animations
        const heroTl = gsap.timeline();
        
        heroTl.from(".hero-badge", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        })
        .from(".hero-title", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.4")
        .from(".hero-desc", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "-=0.6")
        .from(".hero-cta", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.6")
        .from(".hero-trust", {
            opacity: 0,
            duration: 0.6
        }, "-=0.4")
        .from(".hero-visual", {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        }, "-=1");

        // Stagger Animations for Sections
        const staggerSections = document.querySelectorAll(".stagger-grid");
        staggerSections.forEach(section => {
            gsap.from(section.children, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        });

        // Section Headers
        const headers = document.querySelectorAll(".section-header");
        headers.forEach(header => {
            gsap.from(header, {
                scrollTrigger: {
                    trigger: header,
                    start: "top 85%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            });
        });

        // Workflow Animation
        gsap.from(".workflow-step", {
            scrollTrigger: {
                trigger: ".workflow-card",
                start: "top 70%",
            },
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)"
        });

        // Pricing Cards
        gsap.from(".pricing-card", {
            scrollTrigger: {
                trigger: "#harga",
                start: "top 75%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
        });

        // Chat Demo Animation
        const chatContainer = document.querySelector("#chat-container");
        if(chatContainer) {
            ScrollTrigger.create({
                trigger: "#work",
                start: "top 60%",
                onEnter: () => {
                    gsap.to(".chat-msg", {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 1.2, // Time between messages
                        ease: "power2.out"
                    });
                }
            });
        }
        
        // Form Focus Animation
        const formInputs = document.querySelectorAll("input, select");
        formInputs.forEach(input => {
            input.addEventListener('focus', () => {
                gsap.to(input, { scale: 1.02, duration: 0.2, ease: "power1.out" });
            });
            input.addEventListener('blur', () => {
                gsap.to(input, { scale: 1, duration: 0.2, ease: "power1.out" });
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-bold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:chat-round-line-duotone" width="20"></iconify-icon>
</div>
                flazzchat.id
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-teal-600 transition-colors" href="#solusi">Solusi</a>
<a className="hover:text-teal-600 transition-colors" href="#fitur">Fitur</a>
<a className="hover:text-teal-600 transition-colors" href="#harga">Harga</a>
</div>
<a className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-slate-800 transition-colors shadow-sm" href="#demo">
                Coba Gratis
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="hero-content relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium mb-6 hero-badge">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                    Solusi Automasi WhatsApp No.1 untuk UMKM
                </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6 hero-title">
                    Balas Chat, Catat Order, Follow-up — <span className="text-teal-600">Semua Otomatis</span> di WhatsApp
                </h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg hero-desc">
                    flazzchat.id membantu UMKM menghemat waktu, menekan biaya admin, dan meningkatkan penjualan dengan automasi WhatsApp &amp; AI yang mudah digunakan.
                </p>
<div className="flex flex-col sm:flex-row gap-4 hero-cta">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-600/20 transition-all duration-300" href="#demo">
                        Request Demo Gratis
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors" href="#work">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Lihat Cara Kerja
                    </a>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-slate-400 hero-trust">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<p>Dipercaya 500+ UMKM Indonesia</p>
</div>
</div>

<div className="relative hero-visual lg:h-[600px] flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-100/50 rounded-full blur-3xl -z-10"></div>

<div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">

<div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs font-medium text-slate-400">Dashboard Admin</div>
</div>

<div className="p-6 space-y-4">
<div className="flex items-start gap-4 p-3 bg-teal-50 rounded-xl border border-teal-100">
<div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:user-check-bold" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Order Baru Masuk</p>
<p className="text-xs text-slate-500">Budi Santoso • via WhatsApp</p>
</div>
<span className="ml-auto text-xs font-bold text-teal-600">Rp 150.000</span>
</div>
<div className="flex items-center gap-3">
<div className="h-2 w-24 bg-slate-100 rounded-full"></div>
<div className="h-2 w-full bg-slate-50 rounded-full"></div>
</div>

<div className="space-y-3 mt-6">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="bg-slate-100 p-3 rounded-r-xl rounded-bl-xl text-xs text-slate-600 max-w-[80%]">
                                    Halo kak, produk ini ready stock?
                                </div>
</div>
<div className="flex gap-3 flex-row-reverse">
<div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:robot-2-linear" width="16"></iconify-icon>
</div>
<div className="bg-teal-600 text-white p-3 rounded-l-xl rounded-br-xl text-xs max-w-[80%] shadow-lg shadow-teal-600/20">
                                    Halo Kak! 👋 Ready stock ya. Mau pesan berapa pcs?
                                </div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 top-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 floating-card-1">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
<iconify-icon icon="solar:whatsapp-bold" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-400">Status API</div>
<div className="text-sm font-semibold text-green-600">Connected</div>
</div>
</div>
</div>
<div className="absolute -left-4 bottom-20 bg-white p-4 rounded-xl shadow-xl border border-slate-100 floating-card-2">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:bell-bing-bold" width="24"></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Auto Follow-up</div>
<div className="text-xs text-slate-400">Terkirim ke 120 customer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="masalah">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 section-header">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Masalah yang Sering Dialami UMKM</h2>
<p className="text-slate-500">Mengelola chat pelanggan secara manual seringkali menghambat pertumbuhan bisnis Anda.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-grid">

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-square-call-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Chat Numpuk, Telat Balas</h3>
<p className="text-sm text-slate-500">Pelanggan kabur ke kompetitor karena respon yang lambat saat jam sibuk.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Lupa Follow-up</h3>
<p className="text-sm text-slate-500">Kehilangan potensi closing karena admin lupa menyapa kembali pelanggan lama.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-hand-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Owner Turun Tangan</h3>
<p className="text-sm text-slate-500">Waktu Anda habis untuk membalas chat receh, bukan fokus mengembangkan strategi bisnis.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Takut WhatsApp Diblokir</h3>
<p className="text-sm text-slate-500">Menggunakan tools blast tidak resmi yang beresiko tinggi nomor bisnis Anda hangus.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Promosi Tidak Efektif</h3>
<p className="text-sm text-slate-500">Broadcast promo tapi konversi kecil karena pesan tidak personal dan dianggap spam.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="solusi">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-6">Satu Sistem untuk Banyak Kebutuhan Bisnis</h2>
<p className="text-slate-500 mb-8 leading-relaxed">
                        flazzchat.id bukan sekadar chatbot biasa. Ini adalah asisten digital yang mengintegrasikan berbagai aspek operasional bisnis Anda langsung di WhatsApp.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mt-1 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">WhatsApp Chatbot Cerdas</h4>
<p className="text-sm text-slate-500 mt-1">Balas pesan otomatis 24/7 dengan bahasa natural.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mt-1 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Sales &amp; CRM Automation</h4>
<p className="text-sm text-slate-500 mt-1">Simpan data pelanggan otomatis dan jadwalkan follow-up.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mt-1 shrink-0">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-slate-900">Menggunakan API Resmi</h4>
<p className="text-sm text-slate-500 mt-1">Aman, legal, dan fitur Green Tick (Verified Badge).</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 bg-slate-50 rounded-2xl p-8 border border-slate-100 relative overflow-hidden workflow-card">
<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>

<div className="relative z-10 flex flex-col items-center gap-6">

<div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex items-center gap-3 w-64 workflow-step">
<div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
<iconify-icon icon="solar:user-bold" width="20"></iconify-icon>
</div>
<div className="text-sm">
<div className="font-semibold text-slate-900">Customer</div>
<div className="text-xs text-slate-500">Kirim pesan WhatsApp</div>
</div>
</div>
<iconify-icon className="text-slate-300" icon="solar:arrow-down-linear"></iconify-icon>

<div className="bg-teal-600 p-4 rounded-xl shadow-lg shadow-teal-600/20 border border-teal-500 flex items-center gap-3 w-64 workflow-step">
<div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:cpu-bolt-linear" width="20"></iconify-icon>
</div>
<div className="text-sm text-white">
<div className="font-semibold">Automation Engine</div>
<div className="text-xs text-teal-100">Proses &amp; Jawab Instan</div>
</div>
</div>
<div className="grid grid-cols-2 gap-8 w-full max-w-xs relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-px h-6 bg-slate-300"></div>
<div className="absolute top-0 left-1/4 right-1/4 -translate-y-6 h-px bg-slate-300"></div>
<div className="absolute top-0 left-1/4 -translate-y-6 h-6 w-px bg-slate-300"></div>
<div className="absolute top-0 right-1/4 -translate-y-6 h-6 w-px bg-slate-300"></div>

<div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 text-center workflow-step">
<iconify-icon className="text-blue-500 mb-2" icon="solar:database-bold" width="24"></iconify-icon>
<div className="text-xs font-semibold text-slate-900">Simpan Data</div>
</div>

<div className="bg-white p-3 rounded-xl shadow-sm border border-slate-200 text-center workflow-step">
<iconify-icon className="text-orange-500 mb-2" icon="solar:user-headset-bold" width="24"></iconify-icon>
<div className="text-xs font-semibold text-slate-900">Notif Admin</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="fitur">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 section-header">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Fitur Utama flazzchat.id</h2>
<p className="text-slate-500">Teknologi canggih yang disederhanakan untuk kebutuhan bisnis Anda.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-grid">

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors group">
<div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-4">
<iconify-icon icon="solar:clock-circle-bold" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Chatbot 24/7</h3>
<p className="text-sm text-slate-500">Sistem bekerja non-stop melayani pertanyaan pelanggan bahkan saat Anda tidur.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors group">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="solar:refresh-circle-bold" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Auto Follow-up</h3>
<p className="text-sm text-slate-500">Otomatis menyapa pelanggan yang belum checkout atau repeat order.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors group">
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-4">
<iconify-icon icon="solar:users-group-rounded-bold" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">CRM Otomatis</h3>
<p className="text-sm text-slate-500">Database pelanggan tersimpan rapi, bisa disegmentasi untuk promosi spesifik.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors group">
<div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-4">
<iconify-icon icon="solar:calendar-bold" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">HR &amp; Payroll Info</h3>
<p className="text-sm text-slate-500">Bisa digunakan internal untuk cek slip gaji atau jadwal shift via WA.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors group">
<div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center text-pink-600 mb-4">
<iconify-icon icon="solar:rocket-bold" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Trigger Marketing</h3>
<p className="text-sm text-slate-500">Kirim pesan berdasarkan aksi pelanggan, bukan spam blast massal.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-teal-200 transition-colors group">
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-4">
<iconify-icon icon="solar:chart-square-bold" width="20"></iconify-icon>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Dashboard &amp; Laporan</h3>
<p className="text-sm text-slate-500">Pantau performa CS, jumlah chat, dan konversi dalam satu layar.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Dipakai di Banyak Jenis Bisnis</h2>
<div className="flex flex-wrap justify-center gap-4">
<div className="px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-600 text-sm hover:border-teal-500 hover:text-teal-600 transition-colors cursor-default">
                    🛍️ Toko Online &amp; Retail
                </div>
<div className="px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-600 text-sm hover:border-teal-500 hover:text-teal-600 transition-colors cursor-default">
                    🏥 Klinik &amp; Layanan Kesehatan
                </div>
<div className="px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-600 text-sm hover:border-teal-500 hover:text-teal-600 transition-colors cursor-default">
                    🏠 Properti &amp; Real Estate
                </div>
<div className="px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-600 text-sm hover:border-teal-500 hover:text-teal-600 transition-colors cursor-default">
                    🎓 Edukasi &amp; Kursus
                </div>
<div className="px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-600 text-sm hover:border-teal-500 hover:text-teal-600 transition-colors cursor-default">
                    💼 Agency White-label
                </div>
</div>
</div>
</section>

<section className="py-20 bg-teal-900 relative overflow-hidden" id="work">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="text-white">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Contoh Cara Kerja Chatbot</h2>
<p className="text-teal-100 mb-8 text-lg font-light">
                    Lihat bagaimana flazzchat.id menangani pelanggan secara otomatis. Mulai dari sapaan, pilih menu, hingga closing penjualan tanpa campur tangan manusia.
                </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center text-teal-200 font-bold">1</div>
<p className="text-sm text-teal-50">Pelanggan mengirim pesan "Halo"</p>
</div>
<div className="w-px h-6 bg-teal-800 ml-4"></div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center text-teal-200 font-bold">2</div>
<p className="text-sm text-teal-50">Bot membalas dengan Menu Pilihan</p>
</div>
<div className="w-px h-6 bg-teal-800 ml-4"></div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-teal-800 flex items-center justify-center text-teal-200 font-bold">3</div>
<p className="text-sm text-teal-50">Pelanggan memilih, Bot memproses data</p>
</div>
</div>
<div className="mt-10">
<a className="bg-white text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors inline-flex items-center gap-2" href="#demo">
                        Coba Demo Sekarang
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex justify-center">
<div className="w-[320px] h-[600px] bg-white rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden relative flex flex-col">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-xl z-20"></div>

<div className="bg-teal-600 p-4 pt-10 flex items-center gap-3 text-white z-10 shadow-md">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
<div className="flex-1">
<div className="font-semibold text-sm">Toko Berkah</div>
<div className="text-[10px] opacity-80">Official Business Account</div>
</div>
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</div>

<div className="flex-1 bg-[#efe7dd] p-4 overflow-y-auto space-y-4 no-scrollbar relative" id="chat-container">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url(\'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png\')', backgroundSize: '300px'}}></div>

<div className="chat-msg opacity-0 translate-y-4 bg-white p-2 px-3 rounded-r-lg rounded-bl-lg max-w-[80%] text-xs shadow-sm ml-auto text-slate-800">
                            Halo, saya mau tanya paket bisnis?
                            <div className="text-[9px] text-slate-400 text-right mt-1">10:00</div>
</div>
<div className="chat-msg opacity-0 translate-y-4 bg-white p-2 px-3 rounded-l-lg rounded-br-lg max-w-[80%] text-xs shadow-sm mr-auto text-slate-800 flex flex-col gap-2">
<div>Halo Kak! Selamat datang di Toko Berkah Automasi 🤖</div>
<div>Silakan pilih menu di bawah ini:</div>
<div className="text-[9px] text-slate-400 text-right">10:00</div>
</div>
<div className="chat-msg opacity-0 translate-y-4 w-full flex flex-col gap-2 items-start">
<button className="bg-white text-teal-600 text-xs font-medium py-2 px-4 rounded-full shadow-sm border border-slate-100 w-full text-center hover:bg-slate-50">Info Harga</button>
<button className="bg-white text-teal-600 text-xs font-medium py-2 px-4 rounded-full shadow-sm border border-slate-100 w-full text-center hover:bg-slate-50">Konsultasi Admin</button>
</div>
<div className="chat-msg opacity-0 translate-y-4 bg-white p-2 px-3 rounded-r-lg rounded-bl-lg max-w-[80%] text-xs shadow-sm ml-auto text-slate-800">
                            Info Harga
                            <div className="text-[9px] text-slate-400 text-right mt-1">10:01</div>
</div>
<div className="chat-msg opacity-0 translate-y-4 bg-white p-2 px-3 rounded-l-lg rounded-br-lg max-w-[80%] text-xs shadow-sm mr-auto text-slate-800">
                            Untuk paket UMKM mulai dari Rp 199rb/bulan. Sudah termasuk fitur Auto-reply &amp; Broadcast.
                            <div className="text-[9px] text-slate-400 text-right mt-1">10:01</div>
</div>
</div>

<div className="p-3 bg-white flex items-center gap-2 border-t border-slate-200">
<iconify-icon className="text-slate-400" icon="solar:add-circle-linear" width="24"></iconify-icon>
<div className="flex-1 bg-slate-100 rounded-full h-8 px-3 text-xs flex items-center text-slate-400">Ketik pesan...</div>
<iconify-icon className="text-slate-400" icon="solar:microphone-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="harga">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 section-header">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Paket yang Fleksibel &amp; Transparan</h2>
<p className="text-slate-500">Pilih solusi yang sesuai dengan skala bisnis Anda saat ini.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all pricing-card">
<h3 className="font-semibold text-slate-900 text-lg">UMKM Starter</h3>
<p className="text-sm text-slate-500 mb-6">Untuk toko online pemula.</p>
<div className="mb-6">
<span className="text-3xl font-bold text-slate-900">Rp 199rb</span>
<span className="text-sm text-slate-500">/bulan</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-linear"></iconify-icon>
                            1 Nomor WhatsApp
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-linear"></iconify-icon>
                            Chatbot Dasar
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-linear"></iconify-icon>
                            Broadcast Promo
                        </li>
</ul>
<a className="block w-full py-3 text-center border border-slate-200 rounded-xl text-sm font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors" href="#demo">Pilih Paket</a>
</div>

<div className="bg-white p-8 rounded-2xl border-2 border-teal-500 shadow-xl relative transform scale-105 z-10 pricing-card">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Paling Laris</div>
<h3 className="font-semibold text-slate-900 text-lg">Business Growth</h3>
<p className="text-sm text-slate-500 mb-6">Untuk bisnis yang sedang scaling.</p>
<div className="mb-6">
<span className="text-3xl font-bold text-slate-900">Rp 499rb</span>
<span className="text-sm text-slate-500">/bulan</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-bold"></iconify-icon>
                            3 User Admin
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-bold"></iconify-icon>
                            Advanced Chatbot Logic
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-bold"></iconify-icon>
                            API Integrasi (Cek Ongkir dll)
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-bold"></iconify-icon>
                            Green Tick Assistance
                        </li>
</ul>
<a className="block w-full py-3 text-center bg-teal-600 text-white rounded-xl text-sm font-semibold hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20" href="#demo">Pilih Paket</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all pricing-card">
<h3 className="font-semibold text-slate-900 text-lg">Enterprise / Agency</h3>
<p className="text-sm text-slate-500 mb-6">Solusi custom atau white-label.</p>
<div className="mb-6">
<span className="text-3xl font-bold text-slate-900">Custom</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-600">
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited Admin
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-linear"></iconify-icon>
                            Custom Development
                        </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-teal-600" icon="solar:check-circle-linear"></iconify-icon>
                            Dedicated Support
                        </li>
</ul>
<a className="block w-full py-3 text-center border border-slate-200 rounded-xl text-sm font-semibold hover:border-teal-600 hover:text-teal-600 transition-colors" href="#demo">Hubungi Kami</a>
</div>
</div>
<p className="text-center text-xs text-slate-400 mt-8">
                *Biaya percakapan WhatsApp (BSP) dibayarkan langsung ke Meta sesuai pemakaian. Kami transparan tanpa markup tersembunyi.
            </p>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Kenapa flazzchat.id?</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
<div>
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-4">
<iconify-icon icon="solar:shield-check-bold" width="32"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Resmi Meta</h4>
<p className="text-sm text-slate-500">Menggunakan jalur resmi, minim resiko blokir nomor.</p>
</div>
<div>
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-4">
<iconify-icon icon="solar:wallet-bold" width="32"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Hemat Biaya</h4>
<p className="text-sm text-slate-500">Otomatisasi mengurangi kebutuhan jumlah admin CS manual.</p>
</div>
<div>
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-4">
<iconify-icon icon="solar:graph-up-bold" width="32"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Mudah Scale-up</h4>
<p className="text-sm text-slate-500">Sistem siap menangani 10 chat atau 10.000 chat sekaligus.</p>
</div>
<div>
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mx-auto mb-4">
<iconify-icon icon="solar:hand-heart-bold" width="32"></iconify-icon>
</div>
<h4 className="font-semibold text-slate-900 mb-2">Ramah UMKM</h4>
<p className="text-sm text-slate-500">Dashboard bahasa Indonesia yang mudah dipahami.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="demo">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-4">Konsultasi &amp; Demo Gratis</h2>
<p className="text-slate-500">Isi formulir singkat ini, tim kami akan menghubungi Anda via WhatsApp untuk demo langsung.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Nama Bisnis</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-sm" placeholder="Contoh: Kopi Senja" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Nama PIC</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-sm" placeholder="Nama Anda" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Nomor WhatsApp</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-sm" placeholder="0812xxxx" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Jenis Bisnis</label>
<select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-sm text-slate-600">
<option disabled="" selected="" value="">Pilih Kategori</option>
<option value="retail">Retail / Toko Online</option>
<option value="service">Jasa / Service</option>
<option value="fnb">F&amp;B (Kuliner)</option>
<option value="education">Pendidikan</option>
<option value="other">Lainnya</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-700">Kebutuhan Utama</label>
<select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all text-sm text-slate-600">
<option disabled="" selected="" value="">Pilih Kebutuhan</option>
<option value="chatbot">Chatbot Otomatis</option>
<option value="broadcast">Broadcast / Promosi</option>
<option value="crm">Manajemen Database Customer</option>
<option value="api">Integrasi API</option>
</select>
</div>
<button className="w-full bg-teal-600 text-white font-semibold py-4 rounded-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 mt-4 group" type="submit">
<span className="group-hover:scale-105 inline-block transition-transform">Request Demo Gratis</span>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:chat-round-line-duotone" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tighter text-slate-900">flazzchat.id</span>
</div>
<div className="text-sm text-slate-500 text-center md:text-right">
<p className="mb-2">Automasi WhatsApp &amp; Proses Bisnis Tanpa Ribet</p>
<p>© 2023 flazzchat.id. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
