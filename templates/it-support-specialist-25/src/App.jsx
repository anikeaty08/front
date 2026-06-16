import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Scroll Observer for animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 glass-card transition-all duration-300">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-zinc-100 font-semibold tracking-tight text-lg flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center group-hover:border-zinc-500 group-hover:bg-zinc-800 transition-all duration-300 ease-out">
<span className="text-xs tracking-tighter group-hover:scale-110 transition-transform">TH</span>
</div>
<span className="hidden sm:inline-block opacity-90 group-hover:opacity-100 transition-opacity">Taufik Hidayat</span>
</a>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="hover:text-zinc-100 transition-colors relative group" href="#skills">
                    Keahlian
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-zinc-100 transition-colors relative group" href="#experience">
                    Pengalaman
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-zinc-100 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-zinc-100 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full hover:bg-zinc-800 hover:border-zinc-600 transition-all duration-300 flex items-center gap-2 group active:scale-95" href="mailto:taufik@example.com">
<span>Hubungi Saya</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 tech-grid opacity-20 -z-10 pointer-events-none animate-in"></div>
<div className="max-w-5xl mx-auto">
<div className="animate-in inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6 hover:bg-indigo-500/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Available for Work
            </div>
<h1 className="animate-in delay-100 text-5xl md:text-7xl font-medium text-zinc-100 tracking-tight mb-6 leading-[1.1]">
                Menjaga sistem Anda tetap <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500 animate-pulse">Online &amp; Optimal.</span>
</h1>
<p className="animate-in delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
                Saya Taufik Hidayat, seorang IT Support Specialist yang berdedikasi. Fokus pada penyelesaian masalah hardware, manajemen jaringan, dan memastikan infrastruktur digital berjalan tanpa henti.
            </p>
<div className="animate-in delay-300 flex flex-wrap gap-4">
<button className="bg-zinc-100 text-zinc-950 px-6 py-3 rounded hover:bg-zinc-300 transition-all duration-300 active:scale-95 font-medium text-sm flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_-5px_rgba(255,255,255,0.5)]">
<i className="w-4 h-4" data-lucide="download"></i>
                    Unduh CV
                </button>
<button className="px-6 py-3 rounded border border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:border-zinc-600 hover:text-zinc-100 transition-all duration-300 active:scale-95 font-medium text-sm">
                    Lihat Sertifikasi
                </button>
</div>

<div className="animate-in delay-500 grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 border-t border-zinc-800/50 pt-8">
<div className="group cursor-default">
<div className="text-3xl font-semibold text-zinc-100 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">3+</div>
<div className="text-sm text-zinc-500 mt-1">Tahun Pengalaman</div>
</div>
<div className="group cursor-default">
<div className="text-3xl font-semibold text-zinc-100 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">500+</div>
<div className="text-sm text-zinc-500 mt-1">Tiket Terselesaikan</div>
</div>
<div className="group cursor-default">
<div className="text-3xl font-semibold text-zinc-100 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">99%</div>
<div className="text-sm text-zinc-500 mt-1">Kepuasan User</div>
</div>
<div className="group cursor-default">
<div className="text-3xl font-semibold text-zinc-100 tracking-tight group-hover:text-indigo-400 transition-colors duration-300">24/7</div>
<div className="text-sm text-zinc-500 mt-1">Respon Cepat</div>
</div>
</div>
</div>
</header>

<section className="py-20 px-6 border-t border-zinc-900" id="skills">
<div className="max-w-5xl mx-auto">
<h2 className="reveal-on-scroll text-2xl font-semibold text-zinc-100 tracking-tight mb-12 flex items-center gap-3">
<i className="text-indigo-500" data-lucide="cpu"></i>
                Kompetensi Teknis
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-on-scroll hover-card-shadow group p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-indigo-500/30 transition-all duration-500 hover:bg-zinc-900/80 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:border-indigo-500/50 group-hover:text-indigo-400">
<i className="text-zinc-300 w-5 h-5 transition-colors" data-lucide="monitor"></i>
</div>
<h3 className="text-zinc-100 font-medium mb-2 group-hover:text-indigo-200 transition-colors">Hardware &amp; OS</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                        Instalasi, perbaikan, dan maintenance PC/Laptop. Ahli dalam Windows 10/11, MacOS, dan distribusi Linux dasar.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
<div className="w-1 h-1 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div> Perakitan PC
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
<div className="w-1 h-1 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div> Driver Troubleshooting
                        </li>
</ul>
</div>

<div className="reveal-on-scroll hover-card-shadow group p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-indigo-500/30 transition-all duration-500 hover:bg-zinc-900/80 hover:-translate-y-1" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:border-indigo-500/50 group-hover:text-indigo-400">
<i className="text-zinc-300 w-5 h-5 transition-colors" data-lucide="network"></i>
</div>
<h3 className="text-zinc-100 font-medium mb-2 group-hover:text-indigo-200 transition-colors">Networking</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                        Konfigurasi LAN/WAN, Mikrotik, Access Point, crimping kabel UTP, dan manajemen bandwidth kantor.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
<div className="w-1 h-1 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div> TCP/IP &amp; DNS
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
<div className="w-1 h-1 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div> Router Config
                        </li>
</ul>
</div>

<div className="reveal-on-scroll hover-card-shadow group p-6 rounded-xl bg-zinc-900/30 border border-zinc-800 hover:border-indigo-500/30 transition-all duration-500 hover:bg-zinc-900/80 hover:-translate-y-1" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 group-hover:border-indigo-500/50 group-hover:text-indigo-400">
<i className="text-zinc-300 w-5 h-5 transition-colors" data-lucide="users"></i>
</div>
<h3 className="text-zinc-100 font-medium mb-2 group-hover:text-indigo-200 transition-colors">Helpdesk &amp; Admin</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-4">
                        Manajemen user Active Directory, support printer/scanner, Office 365, dan remote troubleshooting (TeamViewer/AnyDesk).
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
<div className="w-1 h-1 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div> Ticketing System
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
<div className="w-1 h-1 bg-indigo-500 rounded-full group-hover:scale-150 transition-transform"></div> Asset Management
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="experience">
<div className="max-w-3xl mx-auto">
<h2 className="reveal-on-scroll text-2xl font-semibold text-zinc-100 tracking-tight mb-12 flex items-center gap-3">
<i className="text-indigo-500" data-lucide="briefcase"></i>
                Riwayat Pekerjaan
            </h2>
<div className="relative pl-8 border-l border-zinc-800 space-y-12">

<div className="reveal-on-scroll relative group">
<span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-indigo-400 transition-all duration-300 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
<h3 className="text-lg font-medium text-zinc-100 group-hover:text-indigo-300 transition-colors">Senior IT Support</h3>
<span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800 group-hover:border-zinc-700 transition-colors">PT Teknologi Maju • 2021 - Sekarang</span>
</div>
<p className="text-zinc-400 text-sm mb-4">Jakarta Selatan</p>
<ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 marker:text-zinc-600 marker:transition-colors group-hover:marker:text-indigo-500">
<li>Mengelola infrastruktur IT untuk 150+ karyawan dengan SLA 99%.</li>
<li>Melakukan migrasi sistem email perusahaan ke Google Workspace.</li>
<li>Setup dan maintenance server lokal serta backup data rutin.</li>
</ul>
</div>

<div className="reveal-on-scroll relative group">
<span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-zinc-500 group-hover:scale-125 transition-all duration-300"></span>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
<h3 className="text-lg font-medium text-zinc-100 group-hover:text-zinc-200 transition-colors">Junior Technical Support</h3>
<span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800 group-hover:border-zinc-700 transition-colors">PT Solusi Jaringan • 2019 - 2021</span>
</div>
<p className="text-zinc-400 text-sm mb-4">Bandung</p>
<ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 marker:text-zinc-600 marker:transition-colors group-hover:marker:text-zinc-500">
<li>Bertanggung jawab atas instalasi jaringan LAN/WLAN di lokasi klien.</li>
<li>Troubleshooting masalah koneksi internet dan konfigurasi router Mikrotik dasar.</li>
<li>Melakukan maintenance berkala pada perangkat keras komputer klien.</li>
</ul>
</div>

<div className="reveal-on-scroll relative group">
<span className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-zinc-500 group-hover:scale-125 transition-all duration-300"></span>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
<h3 className="text-lg font-medium text-zinc-100 group-hover:text-zinc-200 transition-colors">Intern IT Staff</h3>
<span className="text-xs font-medium text-zinc-500 bg-zinc-900 px-2 py-1 rounded border border-zinc-800 group-hover:border-zinc-700 transition-colors">Dinas Kominfo • 2018</span>
</div>
<p className="text-zinc-400 text-sm mb-4">Bandung</p>
<ul className="list-disc list-inside text-sm text-zinc-400 space-y-1 marker:text-zinc-600 marker:transition-colors group-hover:marker:text-zinc-500">
<li>Membantu staf senior dalam rekapitulasi aset IT.</li>
<li>Melakukan instalasi ulang sistem operasi pada unit komputer kantor.</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-zinc-900/20 border-y border-zinc-900">
<div className="reveal-on-scroll max-w-5xl mx-auto text-center">
<p className="text-sm text-zinc-500 mb-8 font-medium uppercase tracking-widest">Tools &amp; Technologies</p>
<div className="flex flex-wrap justify-center gap-8 grayscale opacity-60">
<span className="group text-xl font-semibold text-zinc-300 flex items-center gap-2 hover:grayscale-0 hover:opacity-100 hover:text-indigo-300 transition-all duration-300 cursor-default">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="command"></i> Windows Server
                </span>
<span className="group text-xl font-semibold text-zinc-300 flex items-center gap-2 hover:grayscale-0 hover:opacity-100 hover:text-indigo-300 transition-all duration-300 cursor-default">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="terminal"></i> Mikrotik RouterOS
                </span>
<span className="group text-xl font-semibold text-zinc-300 flex items-center gap-2 hover:grayscale-0 hover:opacity-100 hover:text-indigo-300 transition-all duration-300 cursor-default">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="cloud"></i> Google Workspace
                </span>
<span className="group text-xl font-semibold text-zinc-300 flex items-center gap-2 hover:grayscale-0 hover:opacity-100 hover:text-indigo-300 transition-all duration-300 cursor-default">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="shield-check"></i> TeamViewer
                </span>
<span className="group text-xl font-semibold text-zinc-300 flex items-center gap-2 hover:grayscale-0 hover:opacity-100 hover:text-indigo-300 transition-all duration-300 cursor-default">
<i className="w-5 h-5 group-hover:scale-110 transition-transform" data-lucide="database"></i> Ubuntu Server
                </span>
</div>
</div>
</section>

<footer className="py-20 px-6">
<div className="reveal-on-scroll max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<h2 className="text-2xl font-semibold text-zinc-100 tracking-tight mb-2">Siap Bekerjasama?</h2>
<p className="text-zinc-500 text-sm">Mari diskusikan bagaimana saya dapat membantu infrastruktur IT Anda.</p>
</div>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 hover:border-zinc-600 hover:-translate-y-1 transition-all duration-300" href="mailto:taufik@example.com">
<i className="w-5 h-5" data-lucide="mail"></i>
</a>
</div>
</div>
<div className="reveal-on-scroll max-w-5xl mx-auto mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2023 Taufik Hidayat. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span>Jakarta, Indonesia</span>
<span className="text-green-900 bg-green-900/20 px-2 rounded flex items-center gap-1">
<div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div> Online
                </span>
</div>
</div>
</footer>


    </>
  );
}
