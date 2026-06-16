import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  mobileMenuBtn.addEventListener('click', openMobileMenu);
  mobileMenuClose.addEventListener('click', closeMobileMenu);
  mobileMenuOverlay.addEventListener('click', closeMobileMenu);
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('[data-animate]').forEach((el) => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  // Countdown timer
  const targetDate = new Date('2025-04-12T09:00:00+07:00').getTime();
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="top-0 w-full h-screen bg-cover bg-center fixed mix-blend-overlay opacity-50" data-alpha-mask="75" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c355df0f-ebda-4fba-8104-001bece7cae7_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 75%, transparent)'}}></div>

<div className="min-h-screen flex flex-col">

<header className="sticky z-50 w-full border-b top-0 backdrop-blur-md bg-neutral-950/80 border-neutral-800/70">
<div className="max-w-7xl mx-auto flex items-center justify-between gap-4 lg:gap-6 py-3 md:py-4 px-4 md:px-6 xl:px-8">

<div className="flex items-center gap-2 flex-shrink-0">
<div className="h-7 w-7 md:h-8 md:w-8 rounded-lg bg-gradient-to-tr flex items-center justify-center shadow-md shadow-blue-500/40 to-blue-500 from-blue-400 via-indigo-400">
<span className="text-[0.65rem] md:text-xs font-geist text-neutral-950" style={{}}>RKN</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-xs md:text-sm font-geist" style={{}}>Ruang Kolaborasi Nusantara</span>
<span className="text-[0.65rem] md:text-xs font-geist text-neutral-400" style={{}}>Ekosistem Kolaborasi UMKM</span>
</div>
</div>

<nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
<a className="transition-colors font-geist hover:text-blue-300 text-neutral-200" href="#hero" style={{}}>Home</a>
<a className="transition-colors font-geist hover:text-blue-300 text-neutral-200" href="#registrasi" style={{}}>Registrasi Kami</a>
<a className="transition-colors font-geist text-neutral-200 hover:text-blue-300" href="#belajar" style={{}}>Belajar Bisnis</a>
<a className="transition-colors font-geist hover:text-blue-300 text-neutral-200" href="#faq" style={{}}>FAQ</a>
<a className="transition-colors font-geist hover:text-blue-300 text-neutral-200" href="#kegiatan" style={{}}>Kegiatan</a>
</nav>

<nav className="hidden md:flex lg:hidden items-center gap-4 text-xs font-medium">
<a className="transition-colors font-geist hover:text-blue-300 text-neutral-200" href="#hero" style={{}}>Home</a>
<a className="transition-colors font-geist hover:text-blue-300 text-neutral-200" href="#registrasi" style={{}}>Registrasi</a>
<a className="transition-colors font-geist text-neutral-200 hover:text-blue-300" href="#belajar" style={{}}>Belajar</a>
<a className="transition-colors font-geist hover:text-blue-300 text-neutral-200" href="#kegiatan" style={{}}>Kegiatan</a>
</nav>

<div className="hidden md:flex items-center gap-3 flex-shrink-0">
<button className="hidden lg:inline-flex items-center gap-2 text-xs lg:text-sm font-medium transition-colors text-neutral-200 hover:text-blue-300">
<span className="font-geist" style={{}}>Masuk Mitra</span>
</button>
<a className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r text-xs lg:text-sm font-semibold tracking-tight px-3 lg:px-5 py-1.5 lg:py-2 shadow-lg shadow-blue-500/40 transition-transform transform hover:-translate-y-0.5 from-blue-400 via-indigo-400 to-cyan-400 text-neutral-950 hover:shadow-blue-400/60" href="#registrasi">
<span className="font-geist" style={{}}>Bergabung</span>
<svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
</div>

<button className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg border transition-colors border-neutral-700/80 bg-neutral-900/80 text-neutral-200 hover:text-blue-300" id="mobile-menu-btn">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(29, 78, 216)', width: '20px', height: '20px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="6" y2="6"></line>
<line className="" x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>
</header>

<div className="fixed inset-0 backdrop-blur-sm z-40 hidden md:hidden bg-neutral-950/80" id="mobile-menu-overlay"></div>
<div className="mobile-menu fixed top-0 left-0 bottom-0 w-72 border-r z-50 md:hidden overflow-y-auto bg-neutral-950 border-neutral-800/80" id="mobile-menu">
<div className="flex items-center justify-between p-4 border-b border-neutral-800/80">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-gradient-to-tr flex items-center justify-center shadow-md shadow-blue-500/40 to-blue-500 from-blue-400 via-indigo-400">
<span className="text-[0.65rem] font-geist text-neutral-950" style={{}}>RKN</span>
</div>
<span className="text-xs font-geist" style={{}}>Menu</span>
</div>
<button className="flex items-center justify-center h-8 w-8 rounded-lg border transition-colors border-neutral-700/80 bg-neutral-900/80 text-neutral-200 hover:text-blue-300" id="mobile-menu-close">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<nav className="flex flex-col p-4 space-y-1">
<a className="mobile-menu-link px-4 py-3 rounded-lg text-sm font-geist transition-colors text-neutral-200 hover:bg-neutral-900/80 hover:text-blue-300" href="#hero" style={{}}>Home</a>
<a className="mobile-menu-link px-4 py-3 rounded-lg text-sm font-geist transition-colors text-neutral-200 hover:bg-neutral-900/80 hover:text-blue-300" href="#registrasi" style={{}}>Registrasi Kami</a>
<a className="mobile-menu-link px-4 py-3 rounded-lg text-sm font-geist transition-colors text-neutral-200 hover:bg-neutral-900/80 hover:text-blue-300" href="#belajar" style={{}}>Belajar Bisnis</a>
<a className="mobile-menu-link px-4 py-3 rounded-lg text-sm font-geist transition-colors text-neutral-200 hover:bg-neutral-900/80 hover:text-blue-300" href="#faq" style={{}}>FAQ</a>
<a className="mobile-menu-link px-4 py-3 rounded-lg text-sm font-geist transition-colors text-neutral-200 hover:bg-neutral-900/80 hover:text-blue-300" href="#kegiatan" style={{}}>Kegiatan</a>
</nav>
<div className="p-4 space-y-3 border-t border-neutral-800/80">
<a className="mobile-menu-link inline-flex items-center justify-center w-full gap-2 rounded-full bg-gradient-to-r text-sm font-semibold tracking-tight px-5 py-2.5 shadow-lg shadow-blue-500/40 from-blue-400 via-indigo-400 to-cyan-400 text-neutral-950" href="#registrasi">
<span className="font-geist" style={{}}>Bergabung Sekarang</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
<button className="mobile-menu-link w-full text-center px-4 py-2.5 rounded-full text-sm font-geist border transition-colors text-neutral-200 border-neutral-700/80 bg-neutral-900/80 hover:bg-neutral-800/80" style={{}}>
        Masuk Mitra
      </button>
</div>
</div>

<div className="fixed inset-0 -z-10 overflow-hidden">
<img alt="Abstract Digital Handshake of Glowing Particles" className="w-full h-full object-cover opacity-40" src="default"/>
<div className="absolute inset-0 backdrop-blur-2xl bg-neutral-950/80"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(59,130,246,0.24),_transparent_55%)]"></div>
</div>
<main className="flex-1">

<section className="relative" id="hero">
<div className="sm:px-6 lg:px-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

<div className="space-y-5 md:space-y-6 lg:space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs animate-fade-in border-indigo-400/40 bg-neutral-900/70 text-blue-100">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-neutral-400"></span>
<span className="font-geist" style={{}}>Program Kolaborasi Sosial • 2025</span>
</div>
<div className="space-y-3 animate-slide-up delay-100">
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-jakarta leading-tight font-medium tracking-tighter text-neutral-50" style={{transition: 'outline 0.1s ease-in-out'}}>
                RKN: Ruang Kolaborasi
                <span className="font-jakarta font-medium tracking-tighter text-indigo-300" style={{transition: 'outline 0.1s ease-in-out'}}>Nusantara</span>
</h1>
<p className="text-sm sm:text-base lg:text-lg max-w-xl font-geist text-neutral-200/90" style={{}}>
                Kolaborator pengembangan <span className="font-geist text-indigo-200" style={{}}>UMKM Indonesia</span> melalui ekosistem digital, pendampingan, dan komunitas lintas daerah.
              </p>
</div>
<div className="flex flex-wrap gap-2 animate-fade-in delay-200">
<span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-geist bg-neutral-900/70 border-neutral-700/60 text-neutral-200" style={{}}>
                #UMKMNaikKelas
              </span>
<span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-geist bg-neutral-900/70 border-neutral-700/60 text-neutral-200" style={{}}>
                #EkonomiBerdaya
              </span>
<span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-geist bg-neutral-900/70 border-neutral-700/60 text-neutral-200" style={{}}>
                #DigitalisasiUMKM
              </span>
</div>
<div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 animate-slide-up delay-300">
<a className="inline-flex items-center justify-center shadow-indigo-500/40 transition-transform transform hover:-translate-y-0.5 hover:shadow-indigo-300/60 text-sm text-neutral-950 font-geist bg-gradient-to-br from-blue-400 via-indigo-400 to-cyan-400 rounded-full px-5 py-2.5 shadow-lg" href="#registrasi">
                Daftar Sebagai UMKM
              </a>
<button className="inline-flex items-center gap-2 text-sm transition-colors text-neutral-100 hover:text-indigo-300">
<div className="h-8 w-8 rounded-full border flex items-center justify-center border-neutral-600/80 bg-neutral-950/70">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
<span className="font-geist" style={{}}>Lihat cerita kolaborasi</span>
</button>
</div>
<div className="flex flex-col sm:flex-row flex-wrap gap-4 text-xs animate-fade-in delay-400 text-neutral-300/90">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full border flex items-center justify-center flex-shrink-0 bg-blue-400/15 border-blue-400/40">
<svg className="w-3.5 h-3.5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13"></path>
<path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
</svg>
</div>
<span className="font-geist" style={{}}>Akses program gratis &amp; subsidi</span>
</div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full border flex items-center justify-center flex-shrink-0 bg-neutral-400/10 border-neutral-400/40">
<svg className="w-3.5 h-3.5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="3"></circle>
<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15 1.65 1.65 0 0 0 3 14H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6 1.65 1.65 0 0 0 10 3.09V3a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09A1.65 1.65 0 0 0 19.4 15z"></path>
</svg>
</div>
<span className="font-geist" style={{}}>Didukung jejaring komunitas lokal</span>
</div>
</div>
</div>

<div className="animate-blur-in delay-300">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-tr to-cyan-500/40 blur-xl opacity-70 group-hover:opacity-95 transition-opacity from-blue-400/60 via-indigo-400/40"></div>
<div className="relative rounded-2xl border overflow-hidden shadow-2xl bg-neutral-950/85 border-neutral-700/70 shadow-neutral-900">
<div className="aspect-video">
<div className="w-full h-full relative flex items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-950">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.2),_transparent_55%)]"></div>
<div className="relative flex flex-col items-center gap-4 px-4">
<button className="h-12 w-12 md:h-16 md:w-16 rounded-full flex items-center justify-center shadow-xl shadow-indigo-500/70 hover:scale-105 transition-transform bg-indigo-400 text-neutral-950">
<svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</button>
<div className="text-center space-y-1">
<p className="text-xs md:text-sm font-geist text-neutral-100" style={{}}>Video: Jejak Kolaborasi UMKM Nusantara</p>
<p className="text-[0.65rem] md:text-xs max-w-xs font-geist text-neutral-300/85" style={{}}>
                          Cerita dampak nyata dari pelaku UMKM yang bertumbuh lewat jejaring kolaborasi RKN di berbagai provinsi.
                        </p>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 border-t border-neutral-800/80 bg-neutral-950/95">
<div className="flex items-center gap-2 text-[0.65rem] md:text-xs text-neutral-300">
<div className="h-5 w-5 md:h-6 md:w-6 rounded-full flex items-center justify-center flex-shrink-0 bg-neutral-800">
<svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
</div>
<span className="font-geist" style={{}}>Lebih dari 4.800 UMKM telah terhubung</span>
</div>
<span className="text-[0.6rem] md:text-[0.7rem] font-geist text-neutral-400" style={{}}>Durasi 3:27</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t relative border-neutral-800/70" id="registrasi">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-14">
<div className="text-center space-y-2 animate-fade-in" data-animate="" style={{animationPlayState: 'running'}}>
<span className="text-xs uppercase font-geist text-indigo-300" style={{}}>Upcoming Event</span>
<h2 className="text-xl sm:text-2xl md:text-3xl font-jakarta font-medium tracking-tighter text-neutral-50" style={{transition: 'outline 0.1s ease-in-out'}}>
            RKN Impact Sprint: UMKM Terkoneksi 2025
          </h2>
<p className="text-sm md:text-base max-w-2xl mx-auto font-geist text-neutral-300" style={{}}>
            Program intensif 5 minggu untuk membantu UMKM menghubungkan bisnisnya ke ekosistem digital, keuangan, dan komunitas regional.
          </p>
</div>

<div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4 animate-scale-in delay-100" data-animate="" style={{animationPlayState: 'running'}}>
<div className="flex flex-col items-center rounded-2xl border px-3 md:px-4 py-2 md:py-3 min-w-[3.5rem] md:min-w-[4.5rem] bg-neutral-950/85 border-neutral-800/80">
<span className="text-lg md:text-xl font-geist text-indigo-300" id="days" style={{}}>00</span>
<span className="text-[0.65rem] md:text-xs font-geist text-neutral-400" style={{}}>Hari</span>
</div>
<div className="flex flex-col items-center rounded-2xl border px-3 md:px-4 py-2 md:py-3 min-w-[3.5rem] md:min-w-[4.5rem] bg-neutral-950/85 border-neutral-800/80">
<span className="text-lg md:text-xl font-geist text-indigo-300" id="hours" style={{}}>00</span>
<span className="text-[0.65rem] md:text-xs font-geist text-neutral-400" style={{}}>Jam</span>
</div>
<div className="flex flex-col items-center rounded-2xl border px-3 md:px-4 py-2 md:py-3 min-w-[3.5rem] md:min-w-[4.5rem] bg-neutral-950/85 border-neutral-800/80">
<span className="text-lg md:text-xl font-geist text-indigo-300" id="minutes" style={{}}>00</span>
<span className="text-[0.65rem] md:text-xs font-geist text-neutral-400" style={{}}>Menit</span>
</div>
<div className="flex flex-col items-center rounded-2xl border px-3 md:px-4 py-2 md:py-3 min-w-[3.5rem] md:min-w-[4.5rem] bg-neutral-950/85 border-neutral-800/80">
<span className="text-lg md:text-xl font-geist text-indigo-300" id="seconds" style={{}}>00</span>
<span className="text-[0.65rem] md:text-xs font-geist text-neutral-400" style={{}}>Detik</span>
</div>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6 md:gap-8 items-start">

<div className="relative animate-slide-left delay-200" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="absolute -inset-0.5 bg-gradient-to-tr to-cyan-500/45 blur-2xl opacity-60 from-blue-400/60 via-indigo-400/45"></div>
<div className="relative rounded-2xl border overflow-hidden shadow-xl bg-neutral-950/90 border-neutral-800/80">
<div className="aspect-[4/3] bg-gradient-to-br relative flex from-neutral-900 via-neutral-950 to-neutral-950">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25),_transparent_55%)]"></div>
<div className="relative flex flex-col justify-between p-4 md:p-5">
<div className="space-y-2">
<span className="inline-flex rounded-full border text-[0.65rem] md:text-[0.7rem] px-2 py-0.5 font-geist bg-neutral-900/70 border-indigo-400/50 text-indigo-100" style={{}}>
                      Hybrid • Surabaya &amp; Online
                    </span>
<h3 className="text-base md:text-lg font-geist text-neutral-50" style={{}}>
                      Impact Sprint: UMKM Terkoneksi 2025
                    </h3>
<p className="text-xs max-w-xs font-geist text-neutral-200/90" style={{}}>
                      Pendampingan praktis bersama praktisi marketplace, fintech, dan komunitas akar rumput.
                    </p>
</div>
<div className="space-y-2">
<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-xs text-neutral-200">
<div className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 flex-shrink-0 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4"></path>
<path d="M8 2v4"></path>
<path d="M3 10h18"></path>
</svg>
<span className="font-geist" style={{}}>12 April – 16 Mei 2025</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="w-3.5 h-3.5 flex-shrink-0 text-indigo-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 21v-8"></path>
<path d="M4 10V3"></path>
<path d="M12 21V12"></path>
<path d="M12 9V3"></path>
<path d="M20 21v-5"></path>
<path d="M20 12V3"></path>
<path d="M1 10h6"></path>
<path d="M9 9h6"></path>
<path d="M17 16h6"></path>
</svg>
<span className="font-geist" style={{}}>Kuota: 220 UMKM</span>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex -space-x-2">
<div className="h-6 w-6 md:h-7 md:w-7 rounded-full border bg-gradient-to-br flex items-center justify-center text-[0.6rem] md:text-[0.65rem] font-geist border-neutral-900 from-blue-400 to-indigo-400 text-neutral-950" style={{}}>
                          A
                        </div>
<div className="h-6 w-6 md:h-7 md:w-7 rounded-full border bg-gradient-to-br flex items-center justify-center text-[0.6rem] md:text-[0.65rem] font-geist border-neutral-900 from-cyan-400 to-indigo-400 text-neutral-950" style={{}}>
                          B
                        </div>
<div className="h-6 w-6 md:h-7 md:w-7 rounded-full border flex items-center justify-center text-[0.6rem] md:text-[0.65rem] font-geist border-neutral-900 bg-neutral-800 text-neutral-100" style={{}}>
                          +7
                        </div>
</div>
<span className="text-[0.65rem] md:text-[0.7rem] font-geist text-neutral-200/90" style={{}}>
                        Kolaborasi 9 komunitas &amp; lembaga
                      </span>
</div>
</div>
</div>
</div>
<div className="px-3 md:px-4 py-2 md:py-2.5 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 text-[0.65rem] md:text-xs border-neutral-800/80 bg-neutral-950/95 text-neutral-300">
<span className="font-geist" style={{}}>Sesi offline: Surabaya, Malang, Denpasar</span>
<span className="font-geist text-indigo-300" style={{}}>Beasiswa untuk UMKM terpilih</span>
</div>
</div>
</div>

<div className="space-y-4 md:space-y-5 animate-slide-right delay-300" data-animate="" style={{animationPlayState: 'paused'}}>
<p className="text-sm md:text-base font-geist text-neutral-200/90" style={{}}>
              Impact Sprint difokuskan untuk UMKM yang sudah berjalan dan siap membangun sistem usaha yang lebih rapi. 
              Peserta akan mengerjakan tugas berbasis bisnis mereka sendiri dengan pendamping yang memahami konteks lokal.
            </p>
<ul className="space-y-3 text-sm text-neutral-200">
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full border flex items-center justify-center flex-shrink-0 bg-blue-400/15 border-blue-400/50">
<svg className="w-3 h-3 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div>
<span className="font-geist text-neutral-100" style={{}}>Klinik Model Bisnis</span>
<p className="text-xs font-geist text-neutral-300" style={{}}>
                    Membongkar ulang alur usaha, margin, dan kapasitas produksi agar usaha lebih siap berkembang.
                  </p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full border flex items-center justify-center flex-shrink-0 bg-blue-400/15 border-blue-400/50">
<svg className="w-3 h-3 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div>
<span className="font-geist text-neutral-100" style={{}}>Kelas Digital &amp; Data</span>
<p className="text-xs font-geist text-neutral-300" style={{}}>
                    Belajar mengukur performa kanal online, membuat katalog, serta membaca data penjualan untuk keputusan harian.
                  </p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full border flex items-center justify-center flex-shrink-0 bg-blue-400/15 border-blue-400/50">
<svg className="w-3 h-3 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
<div>
<span className="font-geist text-neutral-100" style={{}}>Akses Jaringan Kolaborasi</span>
<p className="text-xs font-geist text-neutral-300" style={{}}>
                    Sesi temu mitra, co-host komunitas, dan jejaring alumni untuk membuka peluang pasar bersama.
                  </p>
</div>
</li>
</ul>
<div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 pt-1">
<a className="inline-flex items-center justify-center rounded-full text-sm px-5 py-2.5 shadow-md shadow-indigo-500/40 transition-colors font-geist bg-indigo-400 text-neutral-950 hover:bg-indigo-300" href="#contact" style={{}}>
                Daftar Sekarang
              </a>
<span className="text-xs font-geist text-neutral-300" style={{}}>
                Periode pendaftaran hingga <span className="font-geist text-indigo-200" style={{}}>28 Maret 2025</span>.
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-800/70" id="belajar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

<div className="order-2 lg:order-1 animate-blur-in" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="absolute -inset-0.5 bg-gradient-to-tr blur-2xl opacity-70 from-indigo-400/45 via-blue-400/40 to-cyan-400/40"></div>
<div className="relative rounded-3xl border p-4 sm:p-5 lg:p-7 shadow-2xl bg-neutral-950/90 border-neutral-800/80">
<div className="grid grid-cols-2 gap-3 md:gap-4">
<div className="space-y-3 md:space-y-4">
<div className="rounded-2xl border p-3 bg-neutral-900/80 border-indigo-400/50">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-geist text-neutral-100" style={{}}>Ruang Kelas</span>
<span className="text-[0.6rem] md:text-[0.65rem] font-geist text-indigo-200" style={{}}>Live &amp; Rekaman</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs text-neutral-200">
<span className="font-geist" style={{}}>Strategi Harga</span>
<span className="font-geist text-indigo-300" style={{}}>+214</span>
</div>
<div className="h-1.5 rounded-full overflow-hidden bg-neutral-800">
<div className="h-full w-4/5 bg-gradient-to-r from-blue-400 to-indigo-400"></div>
</div>
<div className="flex items-center justify-between text-xs text-neutral-200">
<span className="font-geist" style={{}}>Foto Produk</span>
<span className="font-geist text-neutral-300" style={{}}>+167</span>
</div>
<div className="h-1.5 rounded-full overflow-hidden bg-neutral-800">
<div className="h-full w-3/4 bg-gradient-to-r from-neutral-400 to-indigo-400"></div>
</div>
</div>
</div>
<div className="rounded-2xl border p-3 space-y-2 bg-neutral-900/80 border-neutral-700/80">
<div className="flex items-center justify-between">
<span className="text-xs font-geist text-neutral-200" style={{}}>Rata-rata kenaikan omzet</span>
<span className="text-xs font-geist text-indigo-300" style={{}}>+35%</span>
</div>
<div className="flex items-center gap-2 text-[0.65rem] md:text-[0.7rem] text-neutral-400">
<span className="inline-flex h-1.5 w-1.5 rounded-full flex-shrink-0 bg-indigo-300"></span>
<span className="font-geist" style={{}}>Dalam 3–6 bulan setelah pendampingan bagi UMKM yang konsisten mengerjakan tugasnya.</span>
</div>
</div>
</div>
<div className="space-y-3 md:space-y-4 pt-3">
<div className="rounded-2xl border p-3 space-y-2 bg-neutral-900/80 border-neutral-700/80">
<div className="flex items-start gap-2">
<div className="h-6 w-6 md:h-7 md:w-7 rounded-full bg-gradient-to-br flex items-center justify-center flex-shrink-0 from-blue-400 to-indigo-400">
<svg className="w-3 md:w-3.5 h-3 md:h-3.5 text-slate-950" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 11 2-2 4 4 6-6"></path>
<path d="M21 12V3h-9"></path>
<path d="M3 12a9 9 0 0 0 9 9"></path>
</svg>
</div>
<div>
<p className="text-xs font-geist text-neutral-100" style={{}}>Program Bersertifikat</p>
<p className="text-[0.65rem] md:text-[0.7rem] font-geist text-neutral-400" style={{}}>Sertifikat kolaborasi mitra komunitas &amp; lembaga.</p>
</div>
</div>
</div>
<div className="rounded-2xl border p-3 space-y-3 bg-neutral-900/80 border-neutral-700/80">
<div className="flex items-center justify-between text-xs text-neutral-200">
<span className="font-geist" style={{}}>UMKM aktif komunitas</span>
<span className="font-geist text-indigo-300" style={{}}>2.780+</span>
</div>
<div className="flex items-center justify-between text-xs text-neutral-200">
<span className="font-geist" style={{}}>Kota/Kabupaten terjangkau</span>
<span className="font-geist text-neutral-300" style={{}}>47</span>
</div>
<div className="flex items-start gap-2 text-[0.65rem] md:text-[0.7rem] text-neutral-400">
<svg className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-slate-400" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="m19 9-5 5-4-4-3 3"></path>
</svg>
<span className="font-geist" style={{}}>Data kumulatif program RKN 2022–2024.</span>
</div>
</div>
<div className="rounded-2xl border p-3 bg-neutral-900/80 border-indigo-400/50">
<p className="text-[0.65rem] md:text-[0.7rem] font-geist text-neutral-300" style={{}}>
                        "Kami percaya UMKM bukan hanya angka ekonomi, tapi wajah ketahanan sebuah kampung. 
                        RKN hadir sebagai jembatan agar dukungan lintas pihak bisa lebih terarah dan terasa."
                      </p>
<p className="mt-2 text-[0.65rem] md:text-[0.7rem] font-geist text-indigo-200" style={{}}>
                        Tim Kolaborasi RKN
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 space-y-4 md:space-y-5 animate-slide-right delay-100" data-animate="" style={{animationPlayState: 'paused'}}>
<h2 className="text-xl sm:text-2xl md:text-3xl font-jakarta font-medium tracking-tighter text-neutral-50" style={{transition: 'outline 0.1s ease-in-out'}}>
              Mengapa RKN Hadir Untuk UMKM Indonesia
            </h2>
<p className="text-sm md:text-base font-geist text-neutral-200/90" style={{}}>
              Di banyak kota dan desa, pelaku UMKM sudah memiliki produk yang kuat, namun sering berjalan sendiri tanpa panduan yang jelas. 
              Akses ke pengetahuan, jaringan, dan permodalan masih terputus-putus dan sulit dijangkau.
            </p>
<p className="text-sm md:text-base font-geist text-neutral-200/90" style={{}}>
              RKN dibangun sebagai ruang bersama di mana UMKM, komunitas, kampus, dan lembaga dapat belajar, bereksperimen, dan tumbuh bersama. 
              Pendekatan kami berangkat dari konteks lokal: apa yang benar-benar dibutuhkan pelaku usaha di lapangan.
            </p>
<p className="text-sm md:text-base font-geist text-neutral-200/90" style={{}}>
              Melalui rangkaian kelas, klinik satu-satu, dan proyek kolaborasi, kami membantu UMKM menyusun fondasi usaha, 
              memanfaatkan teknologi secara sederhana, dan terhubung ke peluang pasar yang relevan.
            </p>
<div className="grid sm:grid-cols-3 gap-3 pt-2">
<div className="rounded-2xl border px-3 py-3 bg-neutral-950/85 border-neutral-800/80">
<p className="text-lg md:text-xl font-geist text-indigo-300" style={{}}>72%</p>
<p className="text-xs font-geist text-neutral-300" style={{}}>
                  peserta melanjutkan kolaborasi bersama mitra atau sesama UMKM setelah program.
                </p>
</div>
<div className="rounded-2xl border px-3 py-3 bg-neutral-950/85 border-neutral-800/80">
<p className="text-lg md:text-xl font-geist text-indigo-300" style={{}}>5</p>
<p className="text-xs font-geist text-neutral-300" style={{}}>jalur pembelajaran: dasar, digital, keuangan, kolaborasi, dan keberlanjutan.</p>
</div>
<div className="rounded-2xl border px-3 py-3 bg-neutral-950/85 border-neutral-800/80">
<p className="text-lg md:text-xl font-geist text-indigo-300" style={{}}>15</p>
<p className="text-xs font-geist text-neutral-300" style={{}}>komunitas lokal menjadi co-host program RKN di berbagai daerah.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-800/70" id="kegiatan">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
<div className="text-center mb-6 md:mb-7 animate-fade-in" data-animate="" style={{animationPlayState: 'paused'}}>
<h2 className="text-xl sm:text-2xl md:text-3xl font-jakarta font-medium tracking-tighter text-neutral-50" style={{transition: 'outline 0.1s ease-in-out'}}>
            Kegiatan Kami
          </h2>
<p className="text-sm md:text-base max-w-xl mx-auto mt-2 font-geist text-neutral-200" style={{}}>
            Rangkaian aktivitas yang dirancang untuk menjawab kebutuhan nyata pelaku UMKM, dari belajar dasar hingga membuka akses kolaborasi.
          </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">

<div className="rounded-2xl border overflow-hidden flex flex-col animate-slide-up delay-100 bg-neutral-950/90 border-neutral-800/80" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="aspect-[4/3] bg-gradient-to-tr from-indigo-500/40 via-blue-500/30 flex items-end p-3 to-neutral-900">
<div className="rounded-xl px-3 py-1.5 bg-neutral-950/85">
<p className="text-xs font-geist text-neutral-100" style={{}}>Kelas Dasar UMKM</p>
<p className="text-[0.65rem] md:text-[0.7rem] font-geist text-neutral-300" style={{}}>Offline &amp; online dengan modul praktis.</p>
</div>
</div>
<div className="flex-1 p-4 space-y-2.5">
<h3 className="text-sm font-geist text-neutral-50" style={{}}>RKN Fundamentals</h3>
<p className="text-xs font-geist text-neutral-300" style={{}}>
                Program fondasi bagi UMKM yang baru mulai, membahas penentuan produk, pencatatan keuangan sederhana, dan kesiapan legalitas.
              </p>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 text-[0.65rem] md:text-[0.7rem] text-neutral-400">
<span className="font-geist" style={{}}>Durasi: 4 sesi</span>
<span className="font-geist" style={{}}>Batch berikutnya: Mei 2025</span>
</div>
</div>
<div className="px-4 pt-0 pb-4">
<a className="inline-flex items-center justify-center w-full rounded-full text-xs py-2 transition-colors font-geist bg-neutral-900 text-neutral-100 hover:bg-neutral-800" href="#contact" style={{}}>
                Ikuti program ini
              </a>
</div>
</div>

<div className="rounded-2xl border overflow-hidden flex flex-col animate-slide-up delay-200 bg-neutral-950/90 border-neutral-800/80" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="aspect-[4/3] bg-gradient-to-tr from-cyan-500/40 via-indigo-500/30 flex items-end p-3 to-neutral-900">
<div className="rounded-xl px-3 py-1.5 bg-neutral-950/85">
<p className="text-xs font-geist text-neutral-100" style={{}}>Klinik Satu-Satu</p>
<p className="text-[0.65rem] md:text-[0.7rem] font-geist text-neutral-300" style={{}}>Konsultasi bisnis bersama pendamping.</p>
</div>
</div>
<div className="flex-1 p-4 space-y-2.5">
<h3 className="text-sm font-geist text-neutral-50" style={{}}>RKN Business Clinic</h3>
<p className="text-xs font-geist text-neutral-300" style={{}}>
                Sesi konsultasi terjadwal untuk membahas tantangan spesifik UMKM, mulai dari arus kas, pemasaran, hingga pengembangan tim kecil.
              </p>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 text-[0.65rem] md:text-[0.7rem] text-neutral-400">
<span className="font-geist" style={{}}>Slot: 8 UMKM / minggu</span>
<span className="font-geist" style={{}}>Prioritas alumni program</span>
</div>
</div>
<div className="px-4 pt-0 pb-4">
<a className="inline-flex items-center justify-center w-full rounded-full text-xs py-2 shadow-md shadow-indigo-500/40 transition-colors font-geist bg-indigo-400 text-neutral-950 hover:bg-indigo-300" href="#contact" style={{}}>
                Ajukan jadwal klinik
              </a>
</div>
</div>

<div className="rounded-2xl border overflow-hidden flex flex-col animate-slide-up delay-300 bg-neutral-950/90 border-neutral-800/80" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="aspect-[4/3] bg-gradient-to-tr from-neutral-500/40 via-blue-500/30 flex items-end p-3 to-neutral-900">
<div className="rounded-xl px-3 py-1.5 bg-neutral-950/85">
<p className="text-xs font-geist text-neutral-100" style={{}}>Pasar Kolaborasi</p>
<p className="text-[0.65rem] md:text-[0.7rem] font-geist text-neutral-300" style={{}}>Kurasi produk di berbagai kanal.</p>
</div>
</div>
<div className="flex-1 p-4 space-y-2.5">
<h3 className="text-sm font-geist text-neutral-50" style={{}}>RKN Market Link</h3>
<p className="text-xs font-geist text-neutral-300" style={{}}>
                Inisiatif menghubungkan UMKM dengan peluang pasar baru melalui bazar tematik, katalog kurasi, dan kanal penjualan digital mitra.
              </p>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 text-[0.65rem] md:text-[0.7rem] text-neutral-400">
<span className="font-geist" style={{}}>Kolaborasi 20 mitra</span>
<span className="font-geist" style={{}}>Fokus produk siap pasar</span>
</div>
</div>
<div className="px-4 pt-0 pb-4">
<a className="inline-flex items-center justify-center w-full rounded-full text-xs py-2 transition-colors font-geist bg-neutral-900 text-neutral-100 hover:bg-neutral-800" href="#contact" style={{}}>
                Daftar sebagai peserta
              </a>
</div>
</div>
</div>
<div className="mt-6 md:mt-7 text-center text-xs animate-fade-in delay-400 font-geist text-neutral-400" data-animate="" id="faq" style={{animationPlayState: 'paused'}}>
          Punya pertanyaan tentang program? Hubungi kami melalui form kolaborasi di bawah.
        </div>
</div>
</section>

<section className="border-t relative border-neutral-800/70">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
<div className="text-center mb-5 animate-fade-in" data-animate="" style={{animationPlayState: 'paused'}}>
<h2 className="text-lg sm:text-xl md:text-2xl font-jakarta font-medium tracking-tighter text-neutral-50" style={{transition: 'outline 0.1s ease-in-out'}}>
            Mitra Kami
          </h2>
<p className="text-xs sm:text-sm mt-1.5 max-w-md mx-auto font-geist text-neutral-200" style={{}}>
            Ekosistem RKN dibangun bersama mitra lintas sektor yang memiliki komitmen yang sama terhadap penguatan UMKM.
          </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-5 items-center">
<div className="flex items-center justify-center animate-scale-in delay-100" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="w-full rounded-xl border py-2.5 md:py-3 flex items-center justify-center border-neutral-800/80 bg-neutral-950/90">
<span className="text-xs sm:text-sm font-geist text-neutral-100" style={{}}>BNM Bank</span>
</div>
</div>
<div className="flex items-center justify-center animate-scale-in delay-200" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="w-full rounded-xl border py-2.5 md:py-3 flex items-center justify-center border-neutral-800/80 bg-neutral-950/90">
<span className="text-xs sm:text-sm font-geist text-neutral-100" style={{}}>KampusIN</span>
</div>
</div>
<div className="flex items-center justify-center animate-scale-in delay-300" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="w-full rounded-xl border py-2.5 md:py-3 flex items-center justify-center border-neutral-800/80 bg-neutral-950/90">
<span className="text-xs sm:text-sm font-geist text-neutral-100" style={{}}>Pasar.id</span>
</div>
</div>
<div className="flex items-center justify-center animate-scale-in delay-400" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="w-full rounded-xl border py-2.5 md:py-3 flex items-center justify-center border-neutral-800/80 bg-neutral-950/90">
<span className="text-xs sm:text-sm font-geist text-neutral-100" style={{}}>LokalHub</span>
</div>
</div>
<div className="flex items-center justify-center animate-scale-in delay-500" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="w-full rounded-xl border py-2.5 md:py-3 flex items-center justify-center border-neutral-800/80 bg-neutral-950/90">
<span className="text-xs sm:text-sm font-geist text-neutral-100" style={{}}>DanaMitra</span>
</div>
</div>
<div className="flex items-center justify-center animate-scale-in delay-600" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="w-full rounded-xl border py-2.5 md:py-3 flex items-center justify-center border-neutral-800/80 bg-neutral-950/90">
<span className="text-xs sm:text-sm font-geist text-neutral-100" style={{}}>ImpactLab</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-neutral-800/70" id="contact">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
<div className="text-center mb-6 md:mb-7 animate-fade-in" data-animate="" style={{animationPlayState: 'paused'}}>
<h2 className="text-xl sm:text-2xl md:text-3xl font-jakarta font-medium tracking-tighter text-neutral-50" style={{transition: 'outline 0.1s ease-in-out'}}>
            Ayo Kolaborasi Bersama
          </h2>
<p className="text-sm md:text-base max-w-2xl mx-auto mt-2 font-geist text-neutral-200" style={{}}>
            Gunakan form ini untuk mendaftar program, mengundang RKN ke kota Anda, atau menjajaki kemitraan strategis.
          </p>
</div>
<div className="rounded-3xl border shadow-2xl animate-slide-up delay-100 bg-neutral-950/90 border-neutral-800/80 shadow-neutral-900" data-animate="" style={{animationPlayState: 'paused'}}>
<div className="grid lg:grid-cols-[1.1fr_minmax(0,0.9fr)] gap-0">

<form aria-label="Form Kolaborasi RKN" className="p-4 sm:p-5 md:p-6 space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs mb-1 font-geist text-neutral-200" htmlFor="name" style={{}}>Nama Lengkap</label>
<input autocomplete="name" className="w-full rounded-xl border px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-neutral-950/80 border-neutral-700/80 text-neutral-100" id="name" name="name" placeholder="Tuliskan nama Anda" type="text"/>
</div>
<div>
<label className="block text-xs mb-1 font-geist text-neutral-200" htmlFor="business" style={{}}>Nama Usaha / Organisasi</label>
<input className="w-full rounded-xl border px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-neutral-950/80 border-neutral-700/80 text-neutral-100" id="business" name="business" placeholder="Contoh: Kopi Kampung Nusantara" type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs mb-1 font-geist text-neutral-200" htmlFor="email" style={{}}>Email</label>
<input autocomplete="email" className="w-full rounded-xl border px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-neutral-950/80 border-neutral-700/80 text-neutral-100" id="email" name="email" placeholder="nama@contoh.id" type="email"/>
</div>
<div>
<label className="block text-xs mb-1 font-geist text-neutral-200" htmlFor="phone" style={{}}>No. WhatsApp</label>
<input className="w-full rounded-xl border px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-neutral-950/80 border-neutral-700/80 text-neutral-100" id="phone" name="phone" placeholder="08xxxxxxxxxx" type="tel"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs mb-1 font-geist text-neutral-200" htmlFor="region" style={{}}>Domisili Kota/Kabupaten</label>
<input className="w-full rounded-xl border px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-neutral-950/80 border-neutral-700/80 text-neutral-100" id="region" name="region" placeholder="Contoh: Bandung, Kab. Gowa" type="text"/>
</div>
<div>
<label className="block text-xs mb-1 font-geist text-neutral-200" htmlFor="role" style={{}}>Saya adalah</label>
<select className="w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-neutral-950/80 border-neutral-700/80 text-neutral-100" id="role" name="role">
<option className="font-geist bg-neutral-900" style={{}}>Pelaku UMKM</option>
<option className="font-geist bg-neutral-900" style={{}}>Perwakilan Komunitas</option>
<option className="font-geist bg-neutral-900" style={{}}>Kampus / Sekolah</option>
<option className="font-geist bg-neutral-900" style={{}}>Perusahaan / Lembaga</option>
<option className="font-geist bg-neutral-900" style={{}}>Individu yang ingin relawan</option>
</select>
</div>
</div>
<div>
<span className="block text-xs mb-1 font-geist text-neutral-200" style={{}}>Tujuan utama Anda</span>
<div className="grid sm:grid-cols-2 gap-2 text-xs text-neutral-200">
<label className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer transition-colors bg-neutral-950/70 border-neutral-700/80 hover:border-indigo-400/70 hover:bg-neutral-900/80">
<input className="h-3.5 w-3.5 rounded focus:ring-indigo-400 border-neutral-600 bg-neutral-900 text-indigo-400" type="checkbox"/>
<span className="font-geist" style={{}}>Daftar program Impact Sprint</span>
</label>
<label className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer transition-colors bg-neutral-950/70 border-neutral-700/80 hover:border-indigo-400/70 hover:bg-neutral-900/80">
<input className="h-3.5 w-3.5 rounded focus:ring-indigo-400 border-neutral-600 bg-neutral-900 text-indigo-400" type="checkbox"/>
<span className="font-geist" style={{}}>Mengundang RKN ke kota/kampus</span>
</label>
<label className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer transition-colors bg-neutral-950/70 border-neutral-700/80 hover:border-indigo-400/70 hover:bg-neutral-900/80">
<input className="h-3.5 w-3.5 rounded focus:ring-indigo-400 border-neutral-600 bg-neutral-900 text-indigo-400" type="checkbox"/>
<span className="font-geist" style={{}}>Eksplorasi kemitraan program</span>
</label>
<label className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 cursor-pointer transition-colors bg-neutral-950/70 border-neutral-700/80 hover:border-indigo-400/70 hover:bg-neutral-900/80">
<input className="h-3.5 w-3.5 rounded focus:ring-indigo-400 border-neutral-600 bg-neutral-900 text-indigo-400" type="checkbox"/>
<span className="font-geist" style={{}}>Lainnya</span>
</label>
</div>
</div>
<div>
<label className="block text-xs mb-1 font-geist text-neutral-200" htmlFor="message" style={{}}>Cerita singkat &amp; kebutuhan Anda</label>
<textarea className="w-full rounded-xl border px-3 py-2 text-sm placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-neutral-950/80 border-neutral-700/80 text-neutral-100" id="message" name="message" placeholder="Ceritakan kondisi usaha/komunitas Anda dan bentuk dukungan yang diharapkan." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center justify-between gap-3 pt-2">
<button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r px-5 py-2.5 text-sm font-geist font-medium shadow-lg shadow-indigo-500/40 hover:-translate-y-0.5 transform transition from-blue-400 via-indigo-400 to-cyan-400 text-neutral-950 hover:shadow-indigo-300/60" type="submit">
<span className="font-geist" style={{}}>Kirim Form Kolaborasi</span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</button>
<p className="text-[0.65rem] md:text-[0.7rem] max-w-xs font-geist text-neutral-400" style={{}}>
                  Kami akan menghubungi Anda maksimal 3 hari kerja melalui email atau WhatsApp yang tercantum.
                </p>
</div>
</form>

<div className="border-t lg:border-l lg:border-t-0 p-4 sm:p-5 md:p-6 flex flex-col justify-between border-neutral-800/80 bg-neutral-950/95">
<div className="space-y-4">
<div>
<p className="text-xs uppercase mb-1.5 font-geist text-indigo-300" style={{}}>Kontak Tim RKN</p>
<p className="text-xs font-geist text-neutral-300" style={{}}>
                    Kami terbuka untuk kolaborasi dengan skala kecil maupun besar. 
                    Sesi diskusi awal dapat dilakukan secara online.
                  </p>
</div>
<div className="space-y-2 text-xs text-neutral-200">
<div className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 flex-shrink-0 text-sky-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12 18 8 15 11 9 5 2 12"></path>
<path d="M22 12 18 16 15 13 9 19 2 12"></path>
</svg>
<span className="font-geist" style={{}}>email@rkn.id</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 flex-shrink-0 text-emerald-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5v14"></path>
<path d="M21 5v14"></path>
<path d="M7 5v14"></path>
<path d="M17 5v14"></path>
</svg>
<span className="font-geist" style={{}}>WhatsApp: +62-811-0000-123</span>
</div>
<div className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 flex-shrink-0 text-indigo-300" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 10a7 7 0 0 1-7 7H5l-2 2"></path>
<path d="M8 9h8"></path>
<path d="M8 13h5"></path>
</svg>
<span className="font-geist" style={{}}>Instagram: @ruangkolaborasinusantara</span>
</div>
</div>
<div className="mt-4 rounded-2xl border px-3 py-3 space-y-2 border-neutral-800/80 bg-neutral-900/80">
<p className="text-xs font-geist text-neutral-100" style={{}}>Jam Respons</p>
<p className="text-[0.65rem] md:text-[0.7rem] font-geist text-neutral-300" style={{}}>
                    Senin–Jumat, 09.00–17.00 WIB (kecuali hari libur nasional). 
                    Di luar jam tersebut, tim kami akan merespons pada hari kerja berikutnya.
                  </p>
</div>
</div>
<div className="mt-5 pt-4 border-t space-y-2 border-neutral-800/80">
<p className="text-[0.65rem] md:text-[0.7rem] font-geist text-neutral-400" style={{}}>
                  Dengan mengirim form ini, Anda menyetujui bahwa RKN dapat mengolah data yang Anda kirimkan untuk kebutuhan komunikasi program dan pelaporan dampak.
                </p>
<a className="inline-flex items-center gap-1 text-[0.6rem] md:text-[0.65rem] font-geist text-indigo-300 hover:text-indigo-200" href="#" style={{}}>
                  Lihat kebijakan privasi
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5l7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-800/80 bg-neutral-950/95">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
<div className="space-y-1">
<div className="flex items-center gap-2">
<div className="h-6 w-6 md:h-7 md:w-7 rounded-lg bg-gradient-to-tr to-blue-500 flex items-center justify-center text-[0.65rem] md:text-[0.7rem] font-geist from-blue-400 via-indigo-400 text-neutral-950" style={{}}>
              RKN
            </div>
<span className="text-xs md:text-sm font-geist text-neutral-100" style={{}}>Ruang Kolaborasi Nusantara</span>
</div>
<p className="text-[0.65rem] md:text-[0.7rem] max-w-md font-geist text-neutral-400" style={{}}>
            Inisiatif kolaborasi untuk menghubungkan pelaku UMKM dengan pengetahuan, jejaring, dan dukungan lintas sektor di berbagai daerah Indonesia.
          </p>
</div>
<div className="flex flex-wrap items-center gap-3 md:gap-4 text-[0.65rem] md:text-[0.7rem] text-neutral-400">
<a className="font-geist hover:text-indigo-300" href="#hero" style={{}}>Kembali ke atas</a>
<span className="hidden sm:inline-block h-3 w-px bg-neutral-700/80"></span>
<span className="font-geist" style={{}}>© 2025 RKN. Semua hak dilindungi.</span>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
