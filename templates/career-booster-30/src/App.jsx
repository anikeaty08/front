import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
'inter': ['Inter', 'sans-serif'],
'plex': ['"IBM Plex Sans"', 'sans-serif'],
},
colors: {
brand: {
primary: '#fe1616',
accent: '#000000',
dark: '#0a0a0a',
card: '#1a1a1a',
offwhite: '#f2f2f2',
muted: '#f5f5f5',
}
},
transitionTimingFunction: {
'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
},
scale: {
'97': '0.97',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Reveal Animations on Scroll
    const revealElements = document.querySelectorAll('.reveal-up');
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, revealOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Sticky CTA Logic
    const stickyCta = document.getElementById('sticky-cta');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        stickyCta.classList.remove('translate-y-full');
      } else {
        stickyCta.classList.add('translate-y-full');
      }
    });

    // Countdown Logic (Target: 25 April 2025, 19:00 WIB)
    // Adjusting timezone offset for WIB (UTC+7)
    const targetDate = new Date("2025-04-25T19:00:00+07:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("mins").innerText = "00";
        document.getElementById("secs").innerText = "00";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerText = String(days).padStart(2, '0');
      document.getElementById("hours").innerText = String(hours).padStart(2, '0');
      document.getElementById("mins").innerText = String(minutes).padStart(2, '0');
      document.getElementById("secs").innerText = String(seconds).padStart(2, '0');
    };

    setInterval(updateCountdown, 1000);
    updateCountdown();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full relative pb-24">

<section className="noise-overlay bg-brand-dark pt-24 pb-20 px-5 md:px-8 lg:px-12 min-h-[90vh] justify-center items-start">
<div className="content-layer w-full max-w-[800px] mx-auto flex flex-col items-start gap-8 reveal-up">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 mt-8">
<span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
<span className="font-inter font-medium text-xs tracking-tight text-brand-offwhite uppercase">25 April 2025 · 19.00 WIB</span>
</div>
<h1 className="font-inter font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl text-brand-offwhite leading-tight pr-4">
          Capek apply ratusan kali tapi tetep <span className="text-brand-offwhite [text-shadow:0_0_12px_#fe1616] whitespace-nowrap">ga dapet panggilan?</span>
</h1>
<div className="flex flex-col gap-6 text-lg text-brand-offwhite/90 leading-relaxed pr-8 md:pr-24 max-w-[65ch]">
<p>Bukan karena kamu nggak layak buat dapet kerja, tapi pasti ada yang masih salah di proses cari kerjamu.</p>
<p className="font-medium text-brand-offwhite">dan kamu bisa dapetin jawabannya di sini</p>
</div>
<div className="flex flex-col gap-3 w-full mt-4">
<p className="font-inter text-sm text-brand-offwhite/70">Webinar Career Booster. Gratis. Live via Zoom.<br/>25 April 2025, pukul 19.00 WIB.</p>
<button className="w-full min-h-[52px] py-4 px-8 mt-2 rounded-full bg-brand-primary text-white font-inter font-semibold text-base shadow-[0_0_16px_4px_rgba(254,22,22,0.35)] transition-all duration-300 ease-out-expo active:scale-97 active:shadow-[0_0_24px_6px_rgba(254,22,22,0.5)] md:max-w-md" onclick="document.getElementById('registration').scrollIntoView({behavior: 'smooth'})">
            Daftar Sekarang, Gratis
          </button>
</div>
</div>
</section>

<section className="bg-brand-muted text-brand-dark py-24 px-5 md:px-8 lg:px-12">
<div className="w-full max-w-[800px] mx-auto flex flex-col gap-12 reveal-up">
<div className="flex flex-col gap-3 pr-8">
<h2 className="font-inter font-bold tracking-tight text-3xl md:text-4xl leading-tight">Bingung ya tiap kali gagal salahnya di mana?</h2>
<h3 className="font-inter font-medium text-lg text-brand-dark/70 lowercase">stop salahin dirimu sendiri, karena bisa jadi alasannya karna ini</h3>
</div>
<div className="flex flex-col gap-8">

<div className="flex items-start gap-5 group">
<span className="font-inter font-bold text-2xl text-brand-primary shrink-0 mt-0.5">01</span>
<p className="text-base md:text-lg leading-relaxed text-brand-dark/90 group-hover:text-brand-dark transition-colors">CV kamu nggak lolos ATS padahal rekruter belum sempet baca</p>
</div>

<div className="flex items-start gap-5 group pr-4">
<span className="font-inter font-bold text-2xl text-brand-primary shrink-0 mt-0.5">02</span>
<p className="text-base md:text-lg leading-relaxed text-brand-dark/90 group-hover:text-brand-dark transition-colors">CV yang masuk nggak cocok sama posisi yang kamu lamar dan kamu nggak punya cara buat ukur itu</p>
</div>

<div className="flex items-start gap-5 group">
<span className="font-inter font-bold text-2xl text-brand-primary shrink-0 mt-0.5">03</span>
<p className="text-base md:text-lg leading-relaxed text-brand-dark/90 group-hover:text-brand-dark transition-colors">waktu dapet panggilan interview kamu ngeblank dan jawabanmu nggak terstruktur</p>
</div>
</div>
<div className="mt-4 pl-6 border-l-2 border-brand-dark/10">
<p className="italic text-lg md:text-xl text-brand-dark font-medium leading-relaxed">Jadi ini bukan soal layak atau enggak, tapi strateginya udah bener atau belum?</p>
</div>
</div>
</section>

<section className="relative pt-24 px-5 md:px-8 lg:px-12 bg-white pb-0">
<div className="w-full max-w-[800px] mx-auto flex flex-col gap-12 z-10 relative reveal-up">
<div className="flex flex-col gap-3">
<span className="font-plex font-medium text-sm tracking-wide text-brand-primary uppercase">ga cuma sekedar materi yang lewat aja di telinga, tapi bisa langsung kamu terapin</span>
<h2 className="font-inter font-bold tracking-tight text-3xl md:text-4xl text-brand-dark leading-tight pr-6">Trus di webinar ini kamu bakal dapetin apa?</h2>
</div>
<div className="flex flex-col gap-0 border-l border-brand-primary/20 ml-2">

<div className="pl-6 py-5 border-l-2 border-brand-primary -ml-[1px] bg-gradient-to-r from-brand-muted/50 to-transparent">
<p className="font-inter text-base md:text-lg text-brand-dark/90">Cara susun CV-ATS friendly yang relevan sama posisi yang kamu incar</p>
</div>

<div className="pl-6 py-5 border-l-2 border-transparent -ml-[1px] hover:border-brand-primary/50 transition-colors">
<p className="font-inter text-base md:text-lg text-brand-dark/80">Cara nilai kecocokan CV kamu sama lowongan yang kamu targetin</p>
</div>

<div className="pl-6 py-5 border-l-2 border-transparent -ml-[1px] hover:border-brand-primary/50 transition-colors">
<p className="font-inter text-base md:text-lg text-brand-dark/80">Cara buat "contekan" interview biar jawabanmu lebih terstruktur</p>
</div>
</div>
</div>

<div className="w-full h-32 bg-brand-card mt-16 rounded-t-3xl border-t border-brand-dark/10 noise-overlay"></div>
</section>

<section className="bg-white text-brand-dark py-20 px-5 md:px-8 lg:px-12 -mt-4 relative z-20 rounded-b-3xl">
<div className="w-full max-w-[800px] mx-auto flex flex-col gap-10 reveal-up">
<div className="flex flex-col gap-2">
<h2 className="font-inter font-bold tracking-tight text-3xl md:text-4xl">Ini cocok buat siapa?</h2>
<h3 className="font-plex text-base text-brand-dark/70">pastinya buat kamu yang:</h3>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-center gap-4 bg-brand-muted/30 p-4 rounded-2xl border border-brand-dark/5">
<div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-primary" icon="solar:user-speak-rounded-linear" width="24"></iconify-icon>
</div>
<p className="text-base leading-relaxed text-brand-dark/90">Fresh graduate yang udah apply banyak tapi belum dapat panggilan</p>
</div>
<div className="flex items-center gap-4 bg-brand-muted/30 p-4 rounded-2xl border border-brand-dark/5 ml-4">
<div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-primary" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<p className="text-base leading-relaxed text-brand-dark/90">Yang udah kerja tapi pingin punya opportunity baru</p>
</div>
<div className="flex items-center gap-4 bg-brand-muted/30 p-4 rounded-2xl border border-brand-dark/5">
<div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-brand-primary" icon="solar:branching-paths-up-linear" width="24"></iconify-icon>
</div>
<p className="text-base leading-relaxed text-brand-dark/90">Career switcher yang gak yakin bisa pindah haluan atau enggak</p>
</div>
</div>
</div>
</section>

<section className="noise-overlay bg-brand-dark text-brand-offwhite py-24 px-5 md:px-8 lg:px-12">
<div className="content-layer w-full max-w-[800px] mx-auto flex flex-col gap-12 reveal-up">
<div className="flex flex-col gap-4">
<h2 className="font-inter font-bold tracking-tight text-3xl md:text-4xl leading-tight">Kamu bakal belajar langsung bareng ahlinya</h2>
<h3 className="font-plex text-base text-brand-offwhite/80 pr-8">Gandhi Surya Buana, Recruitment Consultant dan Labour Market Intelligence Research.</h3>
</div>
<div className="flex flex-col w-full bg-brand-card/50 rounded-3xl border border-brand-offwhite/10 p-2 relative overflow-hidden">
<div className="w-full aspect-[4/5] md:aspect-video rounded-2xl border border-dashed border-brand-primary/50 relative overflow-hidden bg-brand-dark">
<img alt="Gandhi Surya Buana" className="w-full h-full object-cover mix-blend-luminosity opacity-80" src="https://placehold.co/800x1000/0a0a0a/333333?text=Speaker+Photo"/>
<div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
<div className="absolute bottom-6 left-6 right-6 flex flex-col items-start">
<div className="bg-brand-dark/80 backdrop-blur-sm border border-brand-offwhite/10 p-4 rounded-xl flex flex-col gap-1 shadow-2xl">
<span className="font-inter font-bold text-4xl text-brand-primary tracking-tight">300+</span>
<span className="font-plex text-sm text-brand-offwhite/90">orang mendapat pekerjaan</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-brand-muted py-24 px-5 md:px-8 lg:px-12 overflow-hidden relative">
<div className="w-full max-w-[800px] mx-auto flex flex-col gap-16 reveal-up">

<div className="w-screen relative -ml-5 md:-ml-8 lg:-ml-12 flex overflow-hidden border-y border-brand-dark/5 py-3 opacity-60">
<div className="flex whitespace-nowrap animate-marquee-scroll">
<div className="flex gap-8 items-center font-inter font-semibold text-xs tracking-widest text-brand-primary uppercase px-4">
<span>Ilmu nendang banget</span><span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50"></span>
<span>Lolos interview</span><span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50"></span>
<span>CV tembus ATS</span><span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50"></span>
<span>Strategi daging</span><span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50"></span>
<span>Ilmu nendang banget</span><span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50"></span>
<span>Lolos interview</span><span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50"></span>
<span>CV tembus ATS</span><span className="w-1.5 h-1.5 rounded-full bg-brand-primary/50"></span>
<span>Strategi daging</span>
</div>
</div>
</div>
<h2 className="font-inter font-bold tracking-tight text-3xl md:text-4xl text-brand-dark px-2">Kata mereka yang pernah ikut webinar kita</h2>
<div className="flex flex-col gap-6">

<div className="bg-brand-card rounded-2xl p-6 md:p-8 border border-[#2a2a2a] flex flex-col gap-6 relative shadow-lg mr-4">
<iconify-icon className="text-brand-primary/40 absolute top-4 right-4" icon="solar:quote-left-linear" width="40"></iconify-icon>
<p className="font-plex text-base text-brand-offwhite leading-relaxed z-10 relative mt-4">
              "Soo lucky ketemu postingan event Hyred bulan kemarin dan memutuskan untuk ikut webinarnya dan ternyata nendang banget ilmu dari kakak-kakak Hyred."
            </p>
<div className="pt-4 border-t border-brand-offwhite/10 mt-auto">
<p className="font-inter font-semibold text-xs text-brand-primary uppercase tracking-wide">Kahfi Prawitasari</p>
</div>
</div>

<div className="bg-brand-card rounded-2xl p-6 md:p-8 border border-[#2a2a2a] flex flex-col gap-6 relative shadow-lg ml-4 mt-4">
<div className="absolute -top-3 right-6 bg-brand-primary text-white font-inter font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-[0_0_10px_rgba(254,22,22,0.4)]">
              Lolos Kemnaker
            </div>
<iconify-icon className="text-brand-primary/40 absolute top-4 left-4" icon="solar:quote-left-linear" width="40"></iconify-icon>
<p className="font-plex text-base text-brand-offwhite leading-relaxed z-10 relative mt-10">
              "Thank you Hyred, CV sama interview aku tembus di maganghub kemnaker batch 3 ini."
            </p>
<div className="pt-4 border-t border-brand-offwhite/10 mt-auto">
<p className="font-inter font-semibold text-xs text-brand-primary uppercase tracking-wide">Fathunajah Elsha C</p>
</div>
</div>
</div>
</div>
</section>

<section className="noise-overlay bg-brand-primary text-white py-24 px-5 md:px-8 lg:px-12 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent mix-blend-multiply"></div>
<div className="content-layer w-full max-w-[800px] mx-auto flex flex-col gap-10 reveal-up items-start">
<div className="flex flex-col gap-4">
<h2 className="font-inter font-bold tracking-tight text-4xl md:text-5xl leading-none shadow-sm">Bonus Career Check Up Gratis</h2>
<h3 className="font-plex text-base md:text-lg text-white/90">terbatas hanya untuk <span className="underline underline-offset-4 decoration-white/50">100 peserta</span> yang mengikuti webinar</h3>
</div>

<div className="w-full flex justify-start gap-4 my-2">
<div className="flex flex-col items-center">
<span className="font-inter font-bold text-3xl md:text-4xl tabular-nums tracking-tighter" id="days">00</span>
<span className="font-plex text-xs text-white/70 uppercase tracking-widest mt-1">Hari</span>
</div>
<span className="font-inter font-bold text-3xl md:text-4xl text-white/50 pb-5">:</span>
<div className="flex flex-col items-center">
<span className="font-inter font-bold text-3xl md:text-4xl tabular-nums tracking-tighter" id="hours">00</span>
<span className="font-plex text-xs text-white/70 uppercase tracking-widest mt-1">Jam</span>
</div>
<span className="font-inter font-bold text-3xl md:text-4xl text-white/50 pb-5">:</span>
<div className="flex flex-col items-center">
<span className="font-inter font-bold text-3xl md:text-4xl tabular-nums tracking-tighter" id="mins">00</span>
<span className="font-plex text-xs text-white/70 uppercase tracking-widest mt-1">Mnt</span>
</div>
<span className="font-inter font-bold text-3xl md:text-4xl text-white/50 pb-5">:</span>
<div className="flex flex-col items-center">
<span className="font-inter font-bold text-3xl md:text-4xl tabular-nums tracking-tighter" id="secs">00</span>
<span className="font-plex text-xs text-white/70 uppercase tracking-widest mt-1">Dtk</span>
</div>
</div>
<div className="flex flex-col w-full bg-black/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm">
<p className="font-inter font-semibold mb-4 text-sm uppercase tracking-wide text-white/80">Di Career Check Up kamu bisa check:</p>
<div className="flex flex-col w-full">
<div className="py-3 border-b border-white/20 font-plex text-sm md:text-base">Keterbacaan CV di ATS</div>
<div className="py-3 border-b border-white/20 font-plex text-sm md:text-base">Kecocokan CV sama posisi yang kamu lamar</div>
<div className="py-3 font-plex text-sm md:text-base">Kualitas jawaban interviewmu</div>
</div>
</div>
<button className="w-full min-h-[52px] py-4 px-8 rounded-full bg-white text-brand-primary font-inter font-semibold text-lg shadow-[0_0_20px_6px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out-expo active:scale-97 md:max-w-md mt-4" onclick="document.getElementById('registration').scrollIntoView({behavior: 'smooth'})">
          Daftar Sekarang Sebelum Penuh
        </button>
</div>
</section>

<section className="noise-overlay bg-brand-dark text-brand-offwhite pt-32 pb-48 px-5 md:px-8 lg:px-12 flex flex-col items-center text-center" id="registration">
<div className="content-layer w-full max-w-[600px] mx-auto flex flex-col items-center gap-8 reveal-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20">
<iconify-icon className="text-brand-primary" icon="solar:calendar-date-linear" width="16"></iconify-icon>
<span className="font-inter font-medium text-xs tracking-tight text-brand-primary uppercase">25 April 2025, 19.00 WIB via Zoom.</span>
</div>
<h2 className="font-inter font-bold tracking-tight text-4xl md:text-5xl leading-tight">Daftar webinar career booster sekarang, gratis!</h2>
<div className="flex flex-col gap-6 text-base text-brand-offwhite/80 leading-loose max-w-[50ch]">
<p>kapan lagi kamu bisa dapetin jawaban dari keresahanmu selama ini dan juga strategi yang kamu butuhin untuk cari kerja lebih efektif kalau bukan sekarang!</p>
<p className="font-medium text-brand-offwhite">buruan amanin kursimu sebelum kehabisan</p>
</div>

<button className="w-full min-h-[52px] py-4 px-8 mt-4 rounded-full bg-brand-primary text-white font-inter font-semibold text-lg shadow-[0_0_20px_6px_rgba(254,22,22,0.45)] transition-all duration-300 ease-out-expo active:scale-97 active:shadow-[0_0_30px_8px_rgba(254,22,22,0.6)] md:max-w-xs">
          Daftar di sini
        </button>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full z-50 transform translate-y-full transition-transform duration-500 ease-out" id="sticky-cta">
<div className="absolute bottom-full left-0 w-full h-12 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none"></div>
<div className="bg-brand-dark/90 backdrop-blur-md border-t border-brand-offwhite/10 p-4 pb-6">
<button className="w-full max-w-[800px] mx-auto block min-h-[52px] py-4 rounded-full bg-brand-primary text-white font-inter font-semibold text-base shadow-[0_0_16px_4px_rgba(254,22,22,0.35)] transition-all duration-300 ease-out-expo active:scale-97">
        Daftar di sini
      </button>
</div>
</div>


    </>
  );
}
