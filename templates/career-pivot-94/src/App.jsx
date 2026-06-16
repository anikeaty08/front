import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
display: ['"Space Grotesk"', 'sans-serif'],
body: ['"IBM Plex Sans"', 'sans-serif'],
},
colors: {
brand: {
black: '#000000',
red: '#a80000',
neutral: '#FAF8F4',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // JS Logic for functional requirements (Countdown & Sticky CTA)
    document.addEventListener('DOMContentLoaded', () => {
        
        // --- Fake Countdown Logic (Looping 24h for demo visual) ---
        // Requirement: Build a countdown timer showing days:hours:minutes:seconds
        const formatTime = (time) => time < 10 ? `0${time}` : time;
        
        // Set target date 23h 59m from now on first load
        let targetDate = localStorage.getItem('rpk_target_date');
        if (!targetDate) {
            const date = new Date();
            date.setHours(date.getHours() + 23);
            date.setMinutes(date.getMinutes() + 59);
            targetDate = date.getTime();
            localStorage.setItem('rpk_target_date', targetDate);
        } else {
            targetDate = parseInt(targetDate);
        }

        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                // Reset if expired to keep the aesthetic active
                const newDate = new Date();
                newDate.setHours(newDate.getHours() + 24);
                localStorage.setItem('rpk_target_date', newDate.getTime());
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const elDays = document.getElementById('days');
            const elHours = document.getElementById('hours');
            const elMins = document.getElementById('minutes');
            const elSecs = document.getElementById('seconds');

            if(elDays) elDays.innerText = formatTime(days);
            if(elHours) elHours.innerText = formatTime(hours);
            if(elMins) elMins.innerText = formatTime(minutes);
            if(elSecs) elSecs.innerText = formatTime(seconds);
        };

        setInterval(updateTimer, 1000);
        updateTimer();

        // --- Sticky CTA Reveal ---
        const stickyCTA = document.getElementById('sticky-cta');
        const section1 = document.getElementById('section-1');
        
        if (stickyCTA && section1) {
            window.addEventListener('scroll', () => {
                const section1Bottom = section1.offsetTop + section1.offsetHeight;
                // Show if scrolled past section 1, hide if near very bottom to avoid double buttons
                const isNearBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200;
                
                if (window.scrollY > section1Bottom && !isNearBottom) {
                    stickyCTA.classList.remove('translate-y-full');
                } else {
                    stickyCTA.classList.add('translate-y-full');
                }
            }, { passive: true });
        }
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full flex flex-col">

<section className="bg-system-dark px-5 py-24 md:py-32 min-h-[90vh] justify-center relative w-full" id="section-1">
<div className="max-w-4xl mx-auto w-full flex flex-col items-start gap-8 md:gap-10 reveal-stagger">
<div className="flex items-center gap-3">
<div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse shadow-[0_0_8px_rgba(168,0,0,0.8)]"></div>
<span className="font-mono text-xs text-brand-red uppercase tracking-[0.2em]">STATUS: STUCK</span>
</div>
<h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-white w-full max-w-[15ch]">
                Kamu Capek. Tapi Kamu Belum Resign.
            </h2>
<h3 className="font-body text-base md:text-xl font-medium text-brand-neutral opacity-80 max-w-2xl leading-relaxed">
                Bukan karena tidak mau. CV belum siap, dan kamu tidak tahu harus mulai dari mana.
            </h3>
<p className="font-body text-base md:text-lg leading-[1.7] max-w-[65ch] text-brand-neutral opacity-90">
                Setiap hari kerja terasa lebih berat. Kamu sudah tahu harus pindah. Tapi dokumen lamaran tidak kunjung selesai, dan ketidaksiapan itu menahan kamu di <span className="text-brand-red font-medium">tempat yang sudah tidak cocok</span>.
            </p>
<div className="w-full md:w-auto pt-4">
<button className="btn-terminal w-full md:w-auto min-h-[52px] px-8 py-4 rounded-full font-display font-medium tracking-wide flex items-center justify-center gap-3 text-sm md:text-base" onclick="document.getElementById('section-3').scrollIntoView({behavior: 'smooth'})">
                    Lihat Sistemnya
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-system-light px-5 py-20 md:py-28 w-full">
<div className="max-w-3xl mx-auto w-full flex flex-col gap-12">
<h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tighter text-brand-black text-left">
                Dua Versi Kamu. Jaraknya Satu Hari.
            </h2>
<div className="flex flex-col w-full border border-[#e0ddd8] rounded overflow-hidden">

<div className="bg-brand-neutral p-6 md:p-10 flex flex-col gap-6 relative w-full">
<span className="font-mono text-xs tracking-widest text-gray-500 font-medium">SEBELUM</span>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-4">
<span className="text-gray-400 mt-1.5 text-[10px]">■</span>
<p className="font-body text-base md:text-lg leading-relaxed text-[#4a4a4a]">CV belum diperbarui. Tidak tahu mau apply ke mana.</p>
</li>
<li className="flex items-start gap-4">
<span className="text-gray-400 mt-1.5 text-[10px]">■</span>
<p className="font-body text-base md:text-lg leading-relaxed text-[#4a4a4a]">Scroll lowongan kerja tapi tidak ada yang terkirim.</p>
</li>
<li className="flex items-start gap-4">
<span className="text-gray-400 mt-1.5 text-[10px]">■</span>
<p className="font-body text-base md:text-lg leading-relaxed text-[#4a4a4a]">Nunda resign minggu ke minggu.</p>
</li>
</ul>
</div>

<div className="w-full h-[1px] bg-[#e0ddd8] relative flex items-center justify-center z-10">
<span className="absolute bg-brand-neutral px-4 font-display text-[10px] uppercase tracking-[0.2em] text-[#1A1614] font-semibold border border-[#e0ddd8] py-1 rounded-full">SHIFT</span>
</div>

<div className="bg-[#0a0a0a] p-6 md:p-10 flex flex-col gap-6 relative w-full">
<span className="font-mono text-xs tracking-widest text-brand-red font-medium">SESUDAH</span>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-4">
<span className="text-brand-red mt-1.5 text-[10px]">■</span>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-neutral">5 CV siap untuk 5 target berbeda. LinkedIn dioptimasi.</p>
</li>
<li className="flex items-start gap-4">
<span className="text-brand-red mt-1.5 text-[10px]">■</span>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-neutral">Portfolio dan cover letter selesai.</p>
</li>
<li className="flex items-start gap-4">
<span className="text-brand-red mt-1.5 text-[10px]">■</span>
<p className="font-body text-base md:text-lg leading-relaxed text-brand-neutral">Lamaran terkirim hari ini.</p>
</li>
</ul>
</div>
</div>
<div className="w-full md:w-auto pt-2">
<button className="btn-primary-dark w-full md:w-auto min-h-[52px] px-8 py-4 rounded-full font-display font-medium tracking-wide flex items-center justify-center text-sm md:text-base">
                    Mulai Perpindahan Ini
                </button>
</div>
</div>
</section>

<section className="bg-system-muted px-5 py-20 md:py-28 w-full border-t border-[#e0ddd8]" id="section-3">
<div className="max-w-3xl mx-auto w-full flex flex-col gap-16">
<div className="flex flex-col gap-4 w-full">
<h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tighter text-brand-black leading-tight">
                    Lima Langkah. Semua Dipandu. Selesai Hari Ini.
                </h2>
<h3 className="font-body text-base md:text-lg text-[#4a4a4a] leading-relaxed">
                    Tidak ada tebak-tebakan. Platform ini mengerjakan prosesnya bersamamu.
                </h3>
</div>
<div className="relative pl-6 md:pl-10 flex flex-col gap-12 border-l-[1px] border-brand-red ml-2 w-full">

<div className="relative w-full flex flex-col gap-3">
<div className="absolute -left-[30px] md:-left-[46px] top-1.5 w-[7px] h-[7px] rounded-full bg-brand-red ring-4 ring-system-muted"></div>
<span className="font-mono text-[11px] text-brand-red tracking-widest font-medium mb-1">01</span>
<h4 className="font-display text-base md:text-lg font-semibold text-brand-black">Ceritakan pengalaman kerja lewat Career Journal.</h4>
<img alt="Career Journal UI Interface" className="w-full h-auto mt-3 rounded shadow-sm border border-[#e0ddd8]" src="https://placehold.co/800x450/1A1614/FAF8F4?text=Career+Journal+UI+Placeholder"/>
</div>
<div className="relative w-full flex flex-col gap-3">
<div className="absolute -left-[30px] md:-left-[46px] top-1.5 w-[7px] h-[7px] rounded-full bg-brand-red ring-4 ring-system-muted"></div>
<span className="font-mono text-[11px] text-brand-red tracking-widest font-medium mb-1">02</span>
<h4 className="font-display text-base md:text-lg font-semibold text-brand-black">Riset target posisi paling cocok dengan Ideal Job Fit.</h4>
</div>
<div className="relative w-full flex flex-col gap-3">
<div className="absolute -left-[30px] md:-left-[46px] top-1.5 w-[7px] h-[7px] rounded-full bg-brand-red ring-4 ring-system-muted"></div>
<span className="font-mono text-[11px] text-brand-red tracking-widest font-medium mb-1">03</span>
<h4 className="font-display text-base md:text-lg font-semibold text-brand-black">Generate CV otomatis untuk tiap target yang kamu pilih.</h4>
<img alt="CV Generator Auto-build" className="w-full h-auto mt-3 rounded shadow-sm border border-[#e0ddd8]" src="https://placehold.co/800x450/1A1614/FAF8F4?text=CV+Generator+Active"/>
</div>
<div className="relative w-full flex flex-col gap-3">
<div className="absolute -left-[30px] md:-left-[46px] top-1.5 w-[7px] h-[7px] rounded-full bg-brand-red ring-4 ring-system-muted"></div>
<span className="font-mono text-[11px] text-brand-red tracking-widest font-medium mb-1">04</span>
<h4 className="font-display text-base md:text-lg font-semibold text-brand-black">Buat LinkedIn, Cover Letter, dan Portfolio.</h4>
</div>
<div className="relative w-full flex flex-col gap-3 pb-2">
<div className="absolute -left-[30px] md:-left-[46px] top-1.5 w-[7px] h-[7px] rounded-full bg-brand-red ring-4 ring-system-muted"></div>
<span className="font-mono text-[11px] text-brand-red tracking-widest font-medium mb-1">05</span>
<h4 className="font-display text-base md:text-lg font-semibold text-brand-black">Kirim lamaran hari ini.</h4>

<div className="absolute -bottom-2 -left-[4px] w-[9px] h-[9px] rounded-full bg-brand-red z-10"></div>
</div>
</div>
</div>
</section>

<section className="bg-system-dark px-5 py-20 md:py-28 w-full text-brand-neutral relative overflow-hidden">
<div className="max-w-4xl mx-auto w-full flex flex-col gap-16 relative z-10">
<div className="flex flex-col gap-4">
<h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tighter text-white">
                    Sekali Beli, Kamu Dapet Semuanya
                </h2>
<h3 className="font-body text-base md:text-lg text-brand-neutral opacity-70">
                    Bukan satu CV generik untuk semua posisi. Ini sistem lamaran yang bekerja per target.
                </h3>
</div>
<div className="flex flex-col gap-0 border-l border-[#2a2a2a] w-full">

<div className="w-full border-l-[2px] border-transparent hover:border-brand-red hover:bg-[#111] transition-colors py-5 px-5 md:px-8 border-b border-[#1a1a1a]">
<p className="font-display text-sm md:text-base font-medium tracking-wide">5 CV otomatis, masing-masing disesuaikan per target pekerjaan.</p>
</div>
<div className="w-full border-l-[2px] border-transparent hover:border-brand-red hover:bg-[#111] transition-colors py-5 px-5 md:px-8 border-b border-[#1a1a1a]">
<p className="font-display text-sm md:text-base font-medium tracking-wide">Unlimited Portfolio dan optimasi profil LinkedIn.</p>
</div>
<div className="w-full border-l-[2px] border-transparent hover:border-brand-red hover:bg-[#111] transition-colors py-5 px-5 md:px-8 border-b border-[#1a1a1a]">
<p className="font-display text-sm md:text-base font-medium tracking-wide">Cover Letter relevan per posisi.</p>
</div>

<div className="w-full border-l-[2px] border-brand-red bg-[#111]/50 py-5 px-5 md:px-8 border-b border-[#1a1a1a] flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
<span className="font-mono text-xs text-brand-red tracking-widest">BONUS:</span>
<p className="font-body text-sm md:text-base text-brand-neutral opacity-90">Interview Preparation Kit, dari persiapan sampai dapat offer.</p>
</div>
<div className="w-full border-l-[2px] border-brand-red bg-[#111]/50 py-5 px-5 md:px-8 border-b border-[#1a1a1a] flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
<span className="font-mono text-xs text-brand-red tracking-widest">BONUS:</span>
<p className="font-body text-sm md:text-base text-brand-neutral opacity-90">Support Group, tanya apa saja kapan saja.</p>
</div>
<div className="w-full border-l-[2px] border-brand-red bg-[#111]/50 py-5 px-5 md:px-8 border-b border-[#1a1a1a] flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3">
<span className="font-mono text-xs text-brand-red tracking-widest">BONUS:</span>
<p className="font-body text-sm md:text-base text-brand-neutral opacity-90">Job Matching Score, cek kecocokan CV sebelum kirim.</p>
</div>
</div>

<div className="flex flex-col gap-4 mt-4 p-6 md:p-8 border border-[#2a2a2a] bg-[#050505] rounded w-full">
<div className="font-display text-4xl md:text-6xl font-semibold tracking-tighter text-white">
                    70%
                </div>
<div className="w-full h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
<div className="h-full bg-brand-red w-[70%]"></div>
</div>
<p className="font-body text-sm md:text-base text-brand-neutral opacity-80 mt-2">
                    70% user mendapat panggilan interview dalam 2 minggu.
                </p>
</div>
<div className="w-full mt-4">
<button className="btn-primary-dark w-full min-h-[52px] py-4 rounded-full font-display font-medium tracking-wide flex items-center justify-center text-sm md:text-base">
                    Dapatkan Semuanya
                </button>
</div>
</div>
</section>

<section className="bg-system-light px-5 py-20 md:py-28 w-full border-b border-[#e0ddd8]">
<div className="max-w-4xl mx-auto w-full flex flex-col gap-12">
<h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tighter text-brand-black max-w-[20ch]">
                Opsi Lain Sudah Ada di Kepalamu. Ini Faktanya.
            </h2>

<div className="flex flex-col w-full border border-[#e0ddd8] rounded overflow-hidden">

<div className="hidden md:flex bg-brand-neutral border-b border-[#e0ddd8] p-4 items-center w-full">
<div className="flex-1 font-mono text-[10px] uppercase tracking-widest text-gray-500 font-medium">OPSI</div>
<div className="flex-[2] font-mono text-[10px] uppercase tracking-widest text-gray-500 font-medium pl-4 border-l border-[#e0ddd8]">FAKTA SISTEM</div>
</div>

<div className="flex flex-col md:flex-row bg-white border-b border-[#e0ddd8] w-full">
<div className="md:flex-1 p-5 md:p-6 bg-brand-neutral md:bg-transparent flex items-center border-b md:border-b-0 md:border-r border-[#e0ddd8]">
<span className="font-display text-base font-semibold text-brand-black">Template gratis</span>
</div>
<div className="md:flex-[2] p-5 md:p-6 flex items-center">
<p className="font-body text-base text-[#4a4a4a] leading-relaxed">
                            satu CV generik, tidak tepat per posisi, prosesnya makan waktu.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row bg-white border-b border-[#e0ddd8] w-full">
<div className="md:flex-1 p-5 md:p-6 bg-brand-neutral md:bg-transparent flex items-center border-b md:border-b-0 md:border-r border-[#e0ddd8]">
<span className="font-display text-base font-semibold text-brand-black">Joki CV</span>
</div>
<div className="md:flex-[2] p-5 md:p-6 flex items-center">
<p className="font-body text-base text-[#4a4a4a] leading-relaxed">
                            hasilnya tidak bisa ditweak, rawan asal apply ke mana-mana.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row bg-[#0a0a0a] w-full relative z-10 scale-[1.01] md:scale-105 shadow-xl border border-brand-red">
<div className="md:flex-1 p-5 md:p-6 flex items-center border-b md:border-b-0 md:border-r border-[#2a2a2a]">
<span className="font-display text-base md:text-lg font-semibold text-brand-neutral flex items-center gap-2">
<span className="text-brand-red">■</span> Tunggu sampai siap
                        </span>
</div>
<div className="md:flex-[2] p-5 md:p-6 flex items-center">
<p className="font-body text-base text-brand-neutral leading-relaxed">
                            kamu tidak akan siap sampai ada sistem yang membuat kamu siap.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-system-muted px-5 py-24 md:py-32 w-full">
<div className="max-w-3xl mx-auto w-full flex flex-col gap-10">
<div className="flex flex-col gap-4">
<h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tighter text-brand-black max-w-[20ch]">
                    Harga Naik Setiap 10 Pembeli. Bukan Countdown Palsu.
                </h2>
<h3 className="font-body text-base md:text-lg text-[#4a4a4a] font-medium">
                    Slot ke-100 sampai ke-110: Rp147.000. Setelah itu, naik Rp25.000.
                </h3>
</div>

<div className="bg-[#FAF8F4] border border-[#e0ddd8] p-6 md:p-10 flex flex-col gap-8 shadow-sm relative overflow-hidden w-full">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '8px 8px'}}></div>
<div className="relative z-10 flex flex-col gap-8 w-full">

<div className="flex flex-col gap-3 w-full">
<div className="flex justify-between items-end w-full">
<span className="font-mono text-xs font-medium text-gray-500 tracking-widest uppercase">SLOT CAPACITY</span>
<span className="font-display text-3xl md:text-4xl font-semibold text-brand-red tracking-tighter">82%</span>
</div>
<div className="w-full bg-[#1a1a1a] h-3 overflow-hidden">
<div className="h-full bg-brand-red w-[82%] relative">
<div className="absolute right-0 top-0 bottom-0 w-2 bg-white/30 animate-pulse"></div>
</div>
</div>
</div>

<div className="flex flex-wrap items-baseline gap-4 py-4 border-y border-[#e0ddd8] w-full">
<span className="font-display text-5xl md:text-6xl font-semibold tracking-tighter text-brand-black">Rp147.000</span>
<span className="font-body text-lg text-gray-400 line-through decoration-1">Rp589.000</span>
</div>

<div className="flex flex-col gap-2 w-full">
<span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">ESTIMATED TIME TO FULL</span>
<div className="flex items-center gap-3 md:gap-4 w-full">
<div className="flex flex-col"><span className="font-display text-3xl md:text-4xl font-medium text-brand-black" id="days">00</span><span className="font-mono text-[10px] text-gray-500">D</span></div>
<span className="text-2xl font-light text-gray-300 pb-3">:</span>
<div className="flex flex-col"><span className="font-display text-3xl md:text-4xl font-medium text-brand-black" id="hours">00</span><span className="font-mono text-[10px] text-gray-500">H</span></div>
<span className="text-2xl font-light text-gray-300 pb-3">:</span>
<div className="flex flex-col"><span className="font-display text-3xl md:text-4xl font-medium text-brand-black" id="minutes">00</span><span className="font-mono text-[10px] text-gray-500">M</span></div>
<span className="text-2xl font-light text-gray-300 pb-3">:</span>
<div className="flex flex-col"><span className="font-display text-3xl md:text-4xl font-medium text-brand-red animate-pulse" id="seconds">00</span><span className="font-mono text-[10px] text-brand-red">S</span></div>
</div>
</div>
<p className="font-body text-sm md:text-base leading-relaxed text-[#4a4a4a]">
                        Mekanismenya transparan. Setiap 10 pembeli berikutnya, harga naik otomatis. Tidak ada timer buatan. Hanya slot yang berkurang nyata.
                    </p>
<button className="btn-primary-dark w-full min-h-[56px] py-4 rounded-full font-display font-medium text-base tracking-wide flex items-center justify-center mt-2 relative overflow-hidden group">
<span className="relative z-10">Beli Sekarang di Rp147.000</span>
<div className="absolute inset-0 w-full h-full bg-brand-red transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
</button>
</div>
</div>
</div>
</section>

<section className="bg-system-dark px-5 py-24 md:py-32 w-full text-white">
<div className="max-w-3xl mx-auto w-full flex flex-col items-center">

<div className="w-full border border-[#2a2a2a] bg-[#050505] rounded-md overflow-hidden flex flex-col shadow-2xl">

<div className="bg-[#111] border-b border-[#2a2a2a] px-4 py-3 flex items-center gap-2 w-full">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
<span className="font-mono text-[10px] text-gray-500 tracking-widest ml-4">sys/faq_module.sh</span>
</div>

<div className="p-6 md:p-8 flex flex-col gap-6 font-mono w-full">
<div className="flex flex-col gap-1 w-full">
<span className="text-brand-red text-xs md:text-sm">root@system:~$ ./run_diagnostics --faq</span>
<span className="text-gray-400 text-xs md:text-sm">Loading user objections database... [OK]</span>
<span className="text-gray-400 text-xs md:text-sm">Analyzing intent... [OK]</span>
</div>
<div className="flex flex-col gap-4 mt-4 w-full">
<div className="flex items-start gap-3 w-full">
<span className="text-brand-red font-bold mt-1">&gt;</span>
<h2 className="font-display text-xl md:text-2xl font-semibold tracking-tight text-white m-0">
                                Pertanyaan Sudah Diantisipasi.
                            </h2>
</div>
<div className="flex items-start gap-3 w-full">
<span className="text-transparent font-bold mt-1">&gt;</span>
<p className="font-body text-base text-brand-neutral opacity-80 leading-relaxed m-0">
                                Sistem ini sudah tahu apa yang kamu tanyakan sebelum kamu mengetiknya.
                            </p>
</div>
</div>
<div className="mt-4 flex items-center text-brand-red w-full">
<span className="text-xs md:text-sm">root@system:~$ </span>
<span className="w-2 h-4 bg-brand-red animate-pulse ml-2 block"></span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-system-dark px-5 py-24 md:py-36 pb-40 w-full flex flex-col justify-center relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#a80000] to-transparent opacity-50"></div>
<div className="max-w-2xl mx-auto w-full flex flex-col items-center text-center gap-10 relative z-10">
<h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tighter leading-tight text-white max-w-[18ch]">
                Semua Dokumen Siap Hari Ini. Tinggal Kamu yang Mulai.
            </h2>
<div className="flex flex-col items-center gap-1 w-full">
<span className="font-body text-sm text-brand-neutral opacity-40 line-through">Rp589.000</span>
<h3 className="font-display text-5xl md:text-6xl font-semibold tracking-tighter text-white">
                    Rp147.000
                </h3>
<p className="font-body text-sm text-brand-neutral opacity-70 mt-2 font-medium">sebelum slot ini penuh dan harga naik.</p>
</div>
<div className="w-full max-w-lg text-left flex flex-col gap-4 mt-4 border-l-2 border-brand-red pl-5 w-full">
<p className="font-body text-sm md:text-base leading-relaxed text-brand-neutral flex flex-wrap gap-2">
                    Yang kamu dapat: 5 CV per target. Unlimited Portfolio. Unlimited LinkedIn. Cover Letter. Interview Preparation Kit. Support Group. Job Matching Score.
                </p>
<div className="w-8 h-[1px] bg-[#2a2a2a] my-1"></div>
<p className="font-body text-sm md:text-base font-medium text-brand-neutral flex items-center gap-2">
<span className="text-brand-red text-[10px]">■</span> Regenerasi tanpa batas sampai hasilnya sesuai.
                </p>
</div>
<div className="w-full mt-6 flex justify-center w-full">
<button className="btn-terminal-active w-full max-w-md min-h-[60px] py-4 rounded-full font-display font-semibold text-lg tracking-wide flex items-center justify-center">
                    Mulai Sekarang, Rp147.000
                </button>
</div>
</div>
</section>

<div className="fixed bottom-0 left-0 w-full p-4 bg-[#0a0a0a]/80 backdrop-blur-md border-t border-[#2a2a2a] z-50 transform translate-y-full transition-transform duration-500 flex flex-col items-center" id="sticky-cta">
<div className="max-w-3xl w-full mx-auto flex justify-between items-center gap-4">
<div className="hidden md:flex flex-col gap-0.5">
<span className="text-white font-display text-sm font-medium">Resign Preparation Kit</span>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></div>
<span className="text-brand-red font-mono text-[10px] tracking-widest uppercase">Slot terbatas</span>
</div>
</div>
<button className="btn-terminal-active w-full md:w-auto flex-1 md:flex-none min-h-[52px] px-8 rounded-full font-display font-medium text-sm md:text-base tracking-wide flex items-center justify-center shadow-lg" onclick="window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })">
                Mulai Sekarang, Rp147.000
            </button>
</div>
</div>
</main>


    </>
  );
}
