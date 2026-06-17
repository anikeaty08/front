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



        // Countdown
        const targetDate = new Date('2028-08-28T09:00:00');
        function updateCountdown() {
            const now = new Date();
            const diff = targetDate - now;

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Registration Flow
        function openRegistration() {
            document.getElementById('main-content').classList.add('hidden');
            document.getElementById('payment-section').classList.add('hidden');
            document.getElementById('registration-section').classList.remove('hidden');
            window.scrollTo(0,0);
        }

        function goHome() {
            document.getElementById('registration-section').classList.add('hidden');
            document.getElementById('payment-section').classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            window.scrollTo(0,0);
        }

        function goToPayment() {
            document.getElementById('registration-section').classList.add('hidden');
            document.getElementById('payment-section').classList.remove('hidden');
            window.scrollTo(0,0);
        }

        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            const logoText = document.getElementById('logo-text');
            const navLinks = document.querySelectorAll('.nav-link');
            const navBtn = document.getElementById('nav-btn');
            const mobileBtn = document.getElementById('mobile-menu-btn');

            if (window.scrollY > 20) {
                // Scrolled State
                nav.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
                nav.classList.remove('py-6');
                
                logoText.classList.remove('text-white');
                logoText.classList.add('text-slate-900');
                
                mobileBtn.classList.remove('text-white');
                mobileBtn.classList.add('text-slate-900');

                navLinks.forEach(link => {
                    link.classList.remove('text-white/90', 'hover:text-white');
                    link.classList.add('text-slate-600', 'hover:text-slate-900');
                });
                
                navBtn.classList.remove('bg-white', 'text-slate-900', 'hover:bg-slate-100');
                navBtn.classList.add('bg-slate-900', 'text-white', 'hover:bg-slate-800');

            } else {
                // Top State (Transparent)
                nav.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
                nav.classList.add('py-6');
                
                logoText.classList.add('text-white');
                logoText.classList.remove('text-slate-900');
                
                mobileBtn.classList.add('text-white');
                mobileBtn.classList.remove('text-slate-900');

                navLinks.forEach(link => {
                    link.classList.add('text-white/90', 'hover:text-white');
                    link.classList.remove('text-slate-600', 'hover:text-slate-900');
                });
                
                navBtn.classList.add('bg-white', 'text-slate-900', 'hover:bg-slate-100');
                navBtn.classList.remove('bg-slate-900', 'text-white', 'hover:bg-slate-800');
            }
        });
    
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-500 py-6" id="navbar">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between">

<div className="flex-shrink-0 cursor-pointer group flex items-center gap-2.5" onclick="goHome()">
<div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-red-600/20">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 11-6-6"></path><path d="M6.47 12.47A2.5 2.5 0 0 1 5 10a2.5 2.5 0 0 1 5 0c0 1.3-1.07 2.2-1.5 3.5a2.5 2.5 0 0 0 5 0c0-1.3 1-2.2 1.5-3.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-1.47 2.47"></path></svg>
</div>
<span className="text-base font-bold tracking-tight uppercase text-white transition-colors duration-300" id="logo-text">
                        28<span className="text-red-500">Zirveye</span>Dogru
                    </span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="nav-link text-xs font-medium uppercase tracking-wide text-white/90 hover:text-white transition-colors" href="#about">Haqqımızda</a>
<a className="nav-link text-xs font-medium uppercase tracking-wide text-white/90 hover:text-white transition-colors" href="#categories">Kateqoriyalar</a>
<a className="nav-link text-xs font-medium uppercase tracking-wide text-white/90 hover:text-white transition-colors" href="#green-life">Yaşıl Həyat</a>
<button className="ml-2 text-xs font-semibold py-2.5 px-5 rounded-full transition-all bg-white text-slate-900 hover:bg-slate-100" id="nav-btn" onclick="openRegistration()">
                        Qeydiyyat
                    </button>
</div>

<div className="md:hidden flex items-center">
<button className="p-2 text-white" id="mobile-menu-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<main className="" id="main-content">

<section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900" style={{}}>

<div className="absolute inset-0 z-0 select-none">
<img alt="Marathon Runners Worldwide" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb8ff70a-41ec-4793-adf4-5a03f91e1a93_1600w.jpg" style={{filter: 'brightness(0.85)'}}/>

<div className="absolute inset-0 bg-black/30" style={{}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center space-x-2 border backdrop-blur-md rounded-full px-4 py-1.5 mb-8 animate-fade-in bg-black/40 border-white/20">
<span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" style={{}}></span>
<span className="text-[10px] font-bold tracking-widest uppercase text-white" style={{}}>Qeydiyyat Başladı</span>
</div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter leading-[0.9] mb-8 max-w-4xl mx-auto text-white drop-shadow-lg">
                        Sərhədləri <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400" style={{}}>Aş.</span><br/>
                        Zirvəyə Doğru Qaç.
                    </h1>
<p className="text-base md:text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md text-white/95" style={{textShadow: '0 4px 12px rgba(0,0,0,0.8)'}}>
                        Qusarın möhtəşəm təbiətində 2028-ci ilin ən böyük idman hadisəsinə hazır olun. İradəni sına, tarix yaz.
                    </p>

<div className="grid grid-cols-4 gap-4 md:gap-8 mb-12">
<div className="flex flex-col items-center">
<span className="text-3xl md:text-5xl font-bold tracking-tight tabular-nums drop-shadow-lg text-white shadow-black" id="days">00</span>
<span className="text-[10px] uppercase tracking-widest mt-1 text-white/80 font-semibold drop-shadow-md">Gün</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-5xl font-bold tracking-tight tabular-nums drop-shadow-lg text-white shadow-black" id="hours">00</span>
<span className="text-[10px] uppercase tracking-widest mt-1 text-white/80 font-semibold drop-shadow-md">Saat</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-5xl font-bold tracking-tight tabular-nums drop-shadow-lg text-white shadow-black" id="minutes">00</span>
<span className="text-[10px] uppercase tracking-widest mt-1 text-white/80 font-semibold drop-shadow-md">Dəq</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-5xl font-bold text-red-500 tracking-tight tabular-nums drop-shadow-lg shadow-black" id="seconds" style={{}}>00</span>
<span className="text-[10px] uppercase tracking-widest mt-1 text-white/80 font-semibold drop-shadow-md">San</span>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto items-center justify-center pb-8">
<button className="whitespace-nowrap group relative inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full transition-all bg-red-600 text-white hover:bg-red-500 hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)] border border-red-500 z-20" onclick="openRegistration()">
<span className="mr-2">İndi qeydiyyatdan keç</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<a className="whitespace-nowrap inline-flex items-center justify-center px-8 py-4 text-sm font-semibold rounded-full transition-all text-white bg-white/10 hover:bg-white/20 border border-white/50 hover:border-white backdrop-blur-md shadow-lg z-20 hover:scale-105" href="#about">
                            Daha ətraflı
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white" id="about" style={{}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="grid grid-cols-1 lg:grid-cols-2 mb-32 gap-x-16 gap-y-16 items-center">

<div className="relative z-10">
<span className="font-semibold tracking-wider uppercase text-xs mb-3 block text-red-600" style={{}}>Haqqımızda</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 leading-tight text-slate-900" style={{}}>
                            Təbiətlə vəhdətdə<br/>yeni bir başlanğıc.
                        </h2>
<p className="mb-8 leading-relaxed text-lg font-light text-slate-600" style={{}}>
                            "28ZirveyeDogru" sadəcə bir qaçış deyil, bu bir hərəkatdır. 2028-ci ildə Qusarın dağlıq relyefində baş tutacaq bu tədbir, sağlam həyat tərzini, iradəni və təbiət sevgisini birləşdirir. Bizim məqsədimiz sərhədləri aşmaqdır.
                        </p>

<div className="grid grid-cols-2 gap-4">
<div className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-gray-100" style={{}}>
<svg aria-hidden="true" className="iconify mb-4 iconify--lucide text-slate-400" data-icon="lucide:users" data-width="24" height="24" role="img" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<div className="text-3xl font-bold tracking-tight tabular-nums text-slate-900" style={{}}>700+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1" style={{}}>Gözlənilən İştirakçı</div>
</div>
<div className="p-6 rounded-2xl border shadow-sm hover:shadow-md transition-shadow bg-white border-gray-100" style={{}}>
<svg aria-hidden="true" className="iconify mb-4 iconify--lucide text-slate-400" data-icon="lucide:mountain" data-width="24" height="24" role="img" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3l4 8l5-5l5 15H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="text-3xl font-bold tracking-tight tabular-nums text-slate-900" style={{}}>1200m</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide mt-1" style={{}}>Yüksəklik</div>
</div>
</div>
</div>

<div className="relative h-[550px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border group bg-white border-slate-200" style={{boxShadow: '0 25px 50px -12px rgba(100, 116, 139, 0.25)'}}>

<div className="absolute inset-0 z-0">
<img alt="Route Map" className="w-full h-full object-cover scale-100 grayscale-[10%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92cdfcaf-e238-4ae9-aa5d-54ed5e9f2d99_1600w.jpg"/>
</div>

<div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl p-6 rounded-3xl border z-20 bg-white/80 border-white/60 shadow-lg">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="font-bold text-slate-900 tracking-tight text-lg" style={{}}>Dağlıq Marşrut</h3>
<p className="text-xs text-slate-500 mt-1">Qusar - Laza - Şahdağ</p>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-[10px] font-bold uppercase tracking-wider text-slate-700">Canlı</span>
</div>
</div>

<div className="flex items-end h-16 gap-1 mb-4 w-full px-2 border-b border-slate-200/50 pb-4">
<div className="w-full bg-slate-300/50 rounded-t-sm h-[20%]"></div>
<div className="w-full bg-slate-300/50 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-slate-300/50 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-red-500/80 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-red-500 rounded-t-sm h-[70%]"></div>
<div className="w-full bg-red-500/80 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-slate-300/50 rounded-t-sm h-[45%]"></div>
<div className="w-full bg-slate-300/50 rounded-t-sm h-[30%]"></div>
</div>
<div className="grid grid-cols-3 gap-4 text-center">
<div>
<div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Start</div>
<div className="font-mono text-sm font-semibold text-slate-800">09:00</div>
</div>
<div>
<div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">Məsafə</div>
<div className="font-mono text-sm font-semibold text-slate-800">22 km</div>
</div>
<div>
<div className="text-[10px] uppercase text-slate-400 font-semibold tracking-wider">CP</div>
<div className="font-mono text-sm font-semibold text-slate-800">4 Nöqtə</div>
</div>
</div>
</div>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
<span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-red-600 border-2 border-white shadow-md"></span>
<div className="absolute left-6 bg-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg whitespace-nowrap">Laza Şəlaləsi</div>
</div>
</div>
</div>

<div className="relative pt-12 pb-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-12">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="px-2.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500">Arxiv</span>
<span className="h-px w-8 bg-slate-200"></span>
<span className="text-xs font-semibold text-slate-400">02.08.2025</span>
</div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 leading-[1.1]">
                                Tarix yazan
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-400">performanslar.</span>
</h3>
</div>
<div className="lg:text-right">
<a className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-medium hover:bg-slate-800 transition-all hover:shadow-lg" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
                                2025 Hesabatı (PDF)
                            </a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-1 relative group overflow-hidden rounded-[2rem] bg-slate-900 text-white p-8 flex flex-col justify-between h-96 shadow-2xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-6 text-yellow-400">
<svg className="animate-pulse" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<span className="text-xs font-bold uppercase tracking-widest">Çempionlar</span>
</div>
<div className="space-y-5">
<div className="flex items-center gap-4">
<div className="text-4xl font-bold tracking-tighter text-white/20">01</div>
<div>
<div className="font-semibold text-lg">Əli Məmmədov</div>
<div className="text-sm text-slate-400 font-mono">32:15 • Yeni Rekord</div>
</div>
</div>
<div className="w-full h-px bg-white/10"></div>
<div className="flex items-center gap-4">
<div className="text-4xl font-bold tracking-tighter text-white/20">02</div>
<div>
<div className="font-semibold text-lg">Aysel Quliyeva</div>
<div className="text-sm text-slate-400 font-mono">34:42 • Qadınlar Lideri</div>
</div>
</div>
</div>
</div>
<div className="relative z-10 pt-6">
<div className="flex items-center justify-between text-xs font-medium text-slate-400">
<span>Ümumi İştirakçı</span>
<span className="text-white">542 Nəfər</span>
</div>
<div className="w-full bg-white/10 h-1 mt-2 rounded-full overflow-hidden">
<div className="bg-red-500 h-full w-[85%] rounded-full"></div>
</div>
</div>
</div>

<div className="md:col-span-2 grid grid-rows-2 gap-6 h-96">

<div className="grid grid-cols-2 gap-6 h-full">
<div className="bg-slate-50 rounded-[2rem] p-8 border border-slate-100 flex flex-col justify-center items-center text-center hover:bg-white hover:shadow-xl transition-all duration-300 group">
<div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div className="text-4xl font-bold tracking-tighter text-slate-900">3h 12m</div>
<div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Orta Bitirmə Vaxtı</div>
</div>
<div className="relative rounded-[2rem] overflow-hidden group">
<img alt="Event Moment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4805310-2262-478d-9741-8e913aa7dfee_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
</div>
</div>

<div className="relative rounded-[2rem] overflow-hidden group">
<img alt="Start Line" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c63ac4ce-9eb1-4273-aac8-fc26add529d3_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex items-center p-8">
<div className="backdrop-blur-md bg-white/10 border border-white/20 p-4 rounded-2xl">
<span className="text-white font-bold text-lg tracking-tight block">Möhtəşəm Start</span>
<span className="text-white/80 text-xs">Şahdağ Milli Parkı</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="categories">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-slate-900" style={{}}>Məsafə Kateqoriyaları</h2>
<p className="text-slate-500 text-lg font-light" style={{}}>Gücünüzü sınamaq üçün sizə uyğun olan məsafəni seçin.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="group relative p-10 rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden cursor-default bg-white hover:bg-slate-900 border-slate-100 hover:border-slate-800" style={{}}>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
<span className="text-9xl font-bold tracking-tighter -mr-4 -mt-4 text-white">11</span>
</div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors bg-red-50 text-red-600" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-3xl font-bold group-hover:text-white mb-3 tracking-tight text-slate-900" style={{}}>11 KM</h3>
<p className="text-slate-500 group-hover:text-slate-400 text-base mb-10 leading-relaxed max-w-sm" style={{}}>Orta məsafəli qaçış üçün ideal seçim. Sürət və dözümlülüyün mükəmməl balansı.</p>
<div className="flex items-center text-sm font-medium group-hover:text-white cursor-pointer text-slate-900" style={{}}>
<span>Təfərrüatlar</span>
<svg aria-hidden="true" className="iconify ml-2 group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="group relative p-10 rounded-3xl border shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-white hover:bg-slate-900 border-slate-200 hover:border-slate-800 shadow-slate-200/50" style={{}}>
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity">
<span className="text-9xl font-bold tracking-tighter -mr-4 -mt-4 text-white">22</span>
</div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:bg-white/10 group-hover:text-white transition-colors bg-slate-900 text-white" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mountain" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m8 3l4 8l5-5l5 15H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-3xl font-bold group-hover:text-white mb-3 tracking-tight text-slate-900" style={{}}>22 KM</h3>
<p className="text-slate-500 group-hover:text-slate-400 text-base mb-10 leading-relaxed max-w-sm" style={{}}>Uzun məsafə. İradənin və fiziki gücün əsl sınağı. Peşəkarlar üçün tövsiyə olunur.</p>
<div className="flex items-center text-sm font-medium group-hover:text-white cursor-pointer text-red-600" style={{}}>
<span>Təfərrüatlar</span>
<svg aria-hidden="true" className="iconify ml-2 group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden" id="green-life">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[10%] left-[-10%] w-[40rem] h-[40rem] bg-green-500/5 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[10%] right-[-10%] w-[40rem] h-[40rem] bg-emerald-500/5 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-[10px] font-bold uppercase tracking-widest mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Net Zero Mission
                    </div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-6 text-slate-900">
                        Təbiəti <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-emerald-400">Canlandır.</span>
</h2>
<p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                        Hər addımınızla planetimizə nəfəs verin. Biz karbon izimizi sıfıra endirməyi hədəfləyirik.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

<div className="relative rounded-[2.5rem] p-8 border border-green-100 bg-gradient-to-br from-green-50 to-white hover:shadow-lg transition-all duration-300 group overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl group-hover:bg-green-500/20 transition-colors"></div>
<svg className="text-green-600 mb-6 relative z-10" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v-9"></path><path d="M7 19h10"></path><path d="M12 10a5 5 0 0 1 5-5c1.5 0 2.8.8 3.5 2a3 3 0 0 1-1 5.5H4.5a3 3 0 0 1-1-5.5 3 3 0 0 1 3.5-2 5 5 0 0 1 5 5Z"></path></svg>
<h4 className="text-xl font-bold text-slate-900 tracking-tight mb-2">1 Qeydiyyat = 1 Ağac</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                            Qusar Milli Parkında sizin adınıza ağac əkilir. Hər iştirakçı sertifikat əldə edir.
                        </p>
</div>

<div className="relative rounded-[2.5rem] p-8 border border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg transition-all duration-300 group overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-colors"></div>
<svg className="text-blue-500 mb-6 relative z-10" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<h4 className="text-xl font-bold text-slate-900 tracking-tight mb-2">Plastiksiz Zona</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                            Bioloji parçalanan su stansiyaları. Təbiətə zərər yoxdur.
                        </p>
</div>

<div className="relative rounded-[2.5rem] p-8 border border-orange-100 bg-gradient-to-br from-orange-50 to-white hover:shadow-lg transition-all duration-300 group overflow-hidden">
<div className="absolute -right-4 -top-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
<svg className="text-orange-500 mb-6 relative z-10" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881a1.79 1.79 0 0 1-.004-1.784L7.196 9.5M11 19h8.203a1.83 1.83 0 0 0 1.556-.89a1.78 1.78 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16l-3 3l3 3m-5.707-8.404L7.196 9.5L3.1 10.598m6.244-4.787l1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.78 1.78 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633l4.096 1.098l1.097-4.096"></path></svg>
<h4 className="text-xl font-bold text-slate-900 tracking-tight mb-2">Eko Medallar</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                            Bütün medallar təkrar emal olunmuş elektronikadan hazırlanır.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tighter text-center mb-12 text-slate-900" style={{}}>Tez-tez Verilən Suallar</h2>
<div className="space-y-4">
<details className="group rounded-2xl border border-transparent transition-all duration-300 bg-slate-50 hover:border-gray-200" style={{}}>
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span className="text-slate-900" style={{}}>Qeydiyyat haqqı nə qədərdir?</span>
<span className="transition group-open:rotate-180 text-slate-400" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-6 pt-0 text-sm leading-relaxed text-slate-600" style={{}}>
                            11 km kateqoriyası üçün 35 AZN, 22 km (Marafon) üçün 50 AZN təşkil edir. Bütün gəlirlər təşkilati xərclərə və ağac əkmə kampaniyasına yönəldilir.
                        </div>
</details>
<details className="group rounded-2xl border border-transparent transition-all duration-300 bg-slate-50 hover:border-gray-200" style={{}}>
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span className="text-slate-900" style={{}}>Tibbi arayış tələb olunurmu?</span>
<span className="transition group-open:rotate-180 text-slate-400" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-6 pt-0 text-sm leading-relaxed text-slate-600" style={{}}>
                            22 km kateqoriyası üçün tibbi arayış mütləqdir. 11 km üçün tövsiyə olunur, lakin məcburi deyil.
                        </div>
</details>
<details className="group rounded-2xl border border-transparent transition-all duration-300 bg-slate-50 hover:border-gray-200" style={{}}>
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span className="text-slate-900" style={{}}>Nəqliyyat təmin olunurmu?</span>
<span className="transition group-open:rotate-180 text-slate-400" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="p-6 pt-0 text-sm leading-relaxed text-slate-600" style={{}}>
                            Bəli, Bakıdan Qusara xüsusi komfortlu avtobuslar təşkil olunacaq. Qeydiyyat zamanı nəqliyyat seçimini edə bilərsiniz.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white" id="sponsors">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none" style={{}}></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl mix-blend-multiply pointer-events-none"></div>
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r to-transparent z-10 pointer-events-none from-white"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l to-transparent z-10 pointer-events-none from-white"></div>
<div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
<span className="inline-block h-0.5 w-12 bg-gradient-to-r to-orange-500 mb-6 from-red-600" style={{}}></span>
<h2 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400" style={{}}>Qlobal və Yerli Tərəfdaşlar</h2>
</div>
<div className="flex animate-scroll hover:pause gap-20 md:gap-32 w-max px-4 relative z-10 items-center">
<div className="group flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer">

<svg aria-hidden="true" className="text-[#0096D6]" data-icon="simple-icons:abbott" height="56" role="img" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg"><path d="M20.812 2.4H0v3.197h19.773V5.6a1.03 1.03 0 0 1 1.032 1.031v10.742l-.004.007a1.034 1.034 0 0 1-1.034 1.025H4.23c-.569 0-1.033-.46-1.033-1.033v-4.34c0-.57.464-1.032 1.033-1.032H17.6V8.803H3.188A3.185 3.185 0 0 0 0 11.99v6.423A3.19 3.19 0 0 0 3.188 21.6h17.624A3.187 3.187 0 0 0 24 18.412V5.587A3.186 3.186 0 0 0 20.812 2.4" fill="currentColor"></path></svg>
</div>
<div className="group flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer">

<svg aria-hidden="true" className="text-[#3679E0]" data-icon="simple-icons:tata" height="56" role="img" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg"><path d="M9.774 11.568c.193-1.322.168-2.013-1.768-1.906c-2.223.124-4.476.265-7.849 1.027A5.6 5.6 0 0 0 0 12c0 1.52.618 2.99 1.787 4.254c1.06 1.144 2.556 2.095 4.326 2.752a15.5 15.5 0 0 0 2.014.588c.13-.527.959-3.907 1.616-7.823l.03-.202m14.07-.88c-3.372-.762-5.624-.902-7.846-1.026c-1.937-.107-1.962.584-1.768 1.906l.046.298c.65 3.848 1.458 7.16 1.598 7.72C20.595 18.508 24 15.516 24 12q-.001-.665-.157-1.311m-.491-1.324a7.2 7.2 0 0 0-1.14-1.618c-1.06-1.144-2.555-2.095-4.325-2.752c-1.784-.662-3.82-1.011-5.887-1.011c-2.068 0-4.103.35-5.887 1.01c-1.77.658-3.266 1.61-4.326 2.753A7.2 7.2 0 0 0 .648 9.366c2.304-.557 6.245-1.293 9.904-1.37c.353-.008.596.105.756.307c.196.248.18 1.128.175 1.522l-.104 10.18a19 19 0 0 0 1.244 0l-.104-10.18c-.005-.394-.02-1.274.175-1.522c.16-.202.403-.315.756-.308c3.658.078 7.597.813 9.902 1.37" fill="currentColor"></path></svg>
</div>
<div className="group flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer">

<svg aria-hidden="true" className="text-black" data-icon="simple-icons:nike" height="64" role="img" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M24 7.8L6.442 15.276q-2.184.925-3.668.925q-1.68 0-2.437-1.177q-.475-.756-.28-1.918q.196-1.162 1.036-2.478q.7-1.065 2.297-2.8a6.1 6.1 0 0 0-.784 1.848q-.42 1.792.756 2.632q.56.392 1.54.392q.783 0 1.764-.252z" fill="currentColor"></path></svg>
</div>
<div className="group flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer">

<svg aria-hidden="true" className="text-[#2E97D3]" data-icon="simple-icons:bmw" height="56" role="img" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m0 .78C18.196.78 23.219 5.803 23.219 12c0 6.196-5.022 11.219-11.219 11.219S.781 18.196.781 12S5.804.78 12 .78m-.678.63q-.494.022-.992.078l-.107 2.944a10 10 0 0 1 .71-.094l.07-1.988l-.013-.137l.043.13l.664 1.489h.606l.664-1.488l.04-.131l-.01.137l.07 1.988c.232.022.473.054.71.094l-.109-2.944a15 15 0 0 0-.992-.078l-.653 1.625l-.023.12l-.023-.12zm6.696 1.824l-1.543 2.428c.195.15.452.371.617.522l1.453-.754l.092-.069l-.069.094l-.752 1.453c.163.175.398.458.53.63l2.43-1.544a16 16 0 0 0-.46-.568L18.777 6.44l-.105.092l.078-.115l.68-1.356l-.48-.48l-1.356.68l-.115.078l.091-.106l1.018-1.539c-.18-.152-.351-.291-.57-.46M5.5 3.785c-.36.037-.638.283-1.393 1.125a19 19 0 0 0-.757.914l2.074 1.967c.687-.76.966-1.042 1.508-1.613c.383-.405.6-.87.216-1.317c-.208-.242-.558-.295-.85-.175l-.028.01l.01-.026a.7.7 0 0 0-.243-.734a.72.72 0 0 0-.537-.15zm.006.615c.136-.037.277.06.308.2c.032.14-.056.272-.154.382c-.22.25-1.031 1.098-1.031 1.098l-.402-.383c.417-.51.861-.974 1.062-1.158a.55.55 0 0 1 .217-.139M12 4.883a7.114 7.114 0 0 0-7.08 6.388v.002a7.122 7.122 0 0 0 8.516 7.697a7.11 7.11 0 0 0 5.68-6.97A7.12 7.12 0 0 0 12 4.885zm-5.537.242q.072-.001.14.043c.088.059.128.16.106.26c-.026.119-.125.231-.205.318l-1.045 1.12l-.42-.4s.787-.832 1.045-1.099c.102-.106.168-.17.238-.205a.3.3 0 0 1 .14-.037zM12 5.818A6.175 6.175 0 0 1 18.182 12H12v6.182A6.175 6.175 0 0 1 5.818 12H12z" fill="currentColor"></path></svg>
</div>
<div className="group flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer">

<svg aria-hidden="true" className="text-[#EB0A1E]" data-icon="simple-icons:toyota" height="56" role="img" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.848C5.223 3.848 0 7.298 0 12s5.224 8.152 12 8.152S24 16.702 24 12s-5.223-8.152-12-8.152m7.334 3.839c0 1.08-1.725 1.913-4.488 2.246c-.26-2.58-1.005-4.279-1.963-4.913c2.948.184 6.45 1.227 6.45 2.667zM12 16.401c-.96 0-1.746-1.5-1.808-4.389q.866.071 1.808.072q.942 0 1.807-.072c-.061 2.89-.847 4.389-1.807 4.389m0-6.308q-.886 0-1.69-.054c.261-1.728.92-3.15 1.69-3.15s1.428 1.422 1.689 3.15q-.803.053-1.689.054m-.882-5.075c-.956.633-1.706 2.333-1.964 4.915C6.391 9.6 4.665 8.767 4.665 7.687c0-1.44 3.504-2.49 6.453-2.669M2.037 11.68a5.27 5.27 0 0 1 1.048-3.164c.27 1.547 2.522 2.881 5.972 3.37V12c0 3.772.879 6.203 2.087 6.97c-5.107-.321-9.107-3.48-9.107-7.29m10.823 7.29c1.207-.767 2.087-3.198 2.087-6.97v-.115c3.447-.488 5.704-1.826 5.972-3.37a5.26 5.26 0 0 1 1.049 3.165c-.004 3.81-4.008 6.969-9.109 7.29z" fill="currentColor"></path></svg>
</div>
<div className="group flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer">

<svg aria-hidden="true" className="text-[#1428A0]" data-icon="simple-icons:samsung" height="80" role="img" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m19.817 10.28l.046 2.694h-.023l-.78-2.693h-1.283v3.392h.848l-.046-2.785h.023l.836 2.785h1.227v-3.392zm-16.15 0l-.641 3.428h.928l.47-3.118h.023l.459 3.118h.916l-.63-3.427zm5.181 0l-.424 2.614h-.023l-.424-2.613H6.58l-.069 3.427h.86l.023-3.083h.011l.573 3.083h.871l.573-3.083h.023l.023 3.083h.86l-.08-3.427zm-7.266 2.454a.5.5 0 0 1 .011.252c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332H0v.264c0 .768.607.997 1.25.997c.618 0 1.134-.218 1.214-.78c.046-.298.012-.492 0-.561c-.16-.722-1.467-.929-1.559-1.33a.5.5 0 0 1 0-.183c.023-.115.104-.23.31-.23s.32.127.32.31v.206h.86v-.24c0-.745-.676-.86-1.157-.86c-.608 0-1.112.206-1.204.757a1.04 1.04 0 0 0 .012.458c.137.71 1.364.917 1.536 1.352m11.152 0c.034.08.022.184.011.253c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332h-.917v.264c0 .756.596.985 1.238.985c.619 0 1.123-.206 1.203-.779c.046-.298.012-.481 0-.562c-.137-.71-1.433-.928-1.524-1.318a.5.5 0 0 1 0-.183c.023-.115.103-.23.31-.23c.194 0 .32.127.32.31v.206h.848v-.24c0-.745-.665-.86-1.146-.86c-.607 0-1.1.195-1.192.757c-.023.149-.023.286.012.458c.137.71 1.34.905 1.513 1.352m2.888.459c.24 0 .31-.16.332-.252c.012-.035.012-.092.012-.126V10.28h.87v2.464c0 .069 0 .195-.01.23c-.058.641-.562.847-1.193.847c-.63 0-1.134-.206-1.192-.848c0-.034-.011-.16-.011-.229V10.28h.87v2.533c0 .046 0 .091.012.126c0 .091.07.252.31.252m7.152-.034c.252 0 .332-.16.355-.253c.011-.034.011-.091.011-.126v-.493h-.355v-.504H24v.917c0 .069 0 .115-.011.23c-.058.63-.597.847-1.204.847s-1.146-.217-1.203-.848c-.012-.114-.012-.16-.012-.229v-1.444c0-.057.012-.172.012-.23c.08-.641.596-.847 1.203-.847s1.135.206 1.203.848c.012.103.012.229.012.229v.115h-.86v-.195s0-.08-.011-.126c-.012-.08-.08-.252-.344-.252c-.252 0-.32.16-.344.252c-.011.045-.011.103-.011.16v1.57c0 .046 0 .092.011.126c0 .092.092.253.333.253" fill="currentColor"></path></svg>
</div>
<div className="group flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer">

<span className="iconify text-[#F40009] h-14 w-auto drop-shadow-sm" data-icon="simple-icons:coca-cola" style={{}}></span>
</div>
<div className="group flex items-center justify-center hover:scale-110 transition-all duration-500 cursor-pointer">

<svg aria-hidden="true" className="text-slate-700" data-icon="simple-icons:apple" height="56" role="img" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04c-2.04.027-3.91 1.183-4.961 3.014c-2.117 3.675-.546 9.103 1.519 12.09c1.013 1.454 2.208 3.09 3.792 3.039c1.52-.065 2.09-.987 3.935-.987c1.831 0 2.35.987 3.96.948c1.637-.026 2.676-1.48 3.676-2.948c1.156-1.688 1.636-3.325 1.662-3.415c-.039-.013-3.182-1.221-3.22-4.857c-.026-3.04 2.48-4.494 2.597-4.559c-1.429-2.09-3.623-2.324-4.39-2.376c-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83c-1.207.052-2.662.805-3.532 1.818c-.78.896-1.454 2.338-1.273 3.714c1.338.104 2.715-.688 3.559-1.701" fill="currentColor"></path></svg>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-slate-900 text-white border-slate-800" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="text-2xl font-bold tracking-tighter uppercase mb-6 block">28<span className="text-red-500" style={{}}>Zirveye</span>Dogru</span>
<p className="text-sm max-w-sm leading-relaxed text-slate-400" style={{}}>
                            Qusarın dağlarında unudulmaz bir təcrübə. Qaçış, iradə və təbiət bir arada. Bizi izləyin və bu macəranın bir hissəsi olun.
                        </p>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300" style={{}}>Linklər</h4>
<ul className="space-y-3 text-sm text-slate-400" style={{}}>
<li><a className="transition hover:text-white" href="#">Haqqımızda</a></li>
<li><a className="transition hover:text-white" href="#">Marşrutlar</a></li>
<li><a className="transition hover:text-white" href="#">Qaydalar</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-300" style={{}}>Əlaqə</h4>
<ul className="space-y-3 text-sm text-slate-400" style={{}}>
<li>info@28zirveye.az</li>
<li>+994 50 000 00 00</li>
<li>Bakı, Azərbaycan</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800" style={{}}>
<p className="text-slate-500 text-xs" style={{}}>© 2028 Bütün hüquqlar qorunur.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-slate-500 transition transform hover:scale-110 hover:text-white" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="text-slate-500 transition transform hover:scale-110 hover:text-white" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-500 transition transform hover:scale-110 hover:text-white" href="#" style={{}}><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
</div>
</footer>
</main>

<section className="hidden min-h-screen pt-24 pb-12 bg-slate-50" id="registration-section" style={{}}>
<div className="max-w-2xl mx-auto px-4">
<button className="flex items-center text-sm font-medium text-slate-500 mb-8 transition group hover:text-slate-900" onclick="goHome()" style={{}}>
<svg aria-hidden="true" className="iconify mr-2 group-hover:-translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-left" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Ana səhifəyə qayıt
            </button>
<div className="rounded-3xl shadow-xl border overflow-hidden bg-white shadow-slate-200/50 border-slate-100" style={{}}>
<div className="px-8 py-8 relative overflow-hidden bg-slate-900" style={{}}>
<div className="absolute top-0 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 bg-red-600" style={{}}></div>
<h2 className="text-2xl font-bold relative z-10 tracking-tight text-white">Qeydiyyat Formu</h2>
<p className="text-sm mt-2 relative z-10 text-slate-400" style={{}}>Məlumatlarınızı dəqiq doldurun</p>
</div>
<form className="p-8 space-y-6" id="regForm" onsubmit="event.preventDefault(); goToPayment();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{}}>Ad</label>
<input className="w-full rounded-xl border p-3.5 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition border-gray-200 bg-slate-50" placeholder="Adınız" required="" style={{}} type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{}}>Soyad</label>
<input className="w-full rounded-xl border p-3.5 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition border-gray-200 bg-slate-50" placeholder="Soyadınız" required="" style={{}} type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{}}>Doğum tarixi</label>
<input className="w-full rounded-xl border p-3.5 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition border-gray-200 bg-slate-50 text-slate-600" required="" style={{}} type="date"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{}}>Cins</label>
<div className="flex space-x-4 mt-2">
<label className="flex items-center space-x-2 cursor-pointer group">
<div className="w-5 h-5 rounded-full border flex items-center justify-center group-hover:border-red-500 border-gray-300" style={{}}>
<input checked="" className="appearance-none w-3 h-3 rounded-full bg-transparent checked:bg-red-500" name="gender" style={{}} type="radio"/>
</div>
<span className="text-sm font-medium text-slate-600" style={{}}>Kişi</span>
</label>
<label className="flex items-center space-x-2 cursor-pointer group">
<div className="w-5 h-5 rounded-full border flex items-center justify-center group-hover:border-red-500 border-gray-300" style={{}}>
<input className="appearance-none w-3 h-3 rounded-full bg-transparent checked:bg-red-500" name="gender" style={{}} type="radio"/>
</div>
<span className="text-sm font-medium text-slate-600" style={{}}>Qadın</span>
</label>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{}}>Kateqoriya / Məsafə</label>
<div className="relative">
<select className="w-full rounded-xl border p-3.5 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition appearance-none font-medium border-gray-200 bg-slate-50 text-slate-700" style={{}}>
<option>11 km (35 AZN)</option>
<option>22 km (50 AZN)</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{}}>Telefon</label>
<input className="w-full rounded-xl border p-3.5 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition border-gray-200 bg-slate-50" placeholder="+994 50 000 00 00" required="" style={{}} type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{}}>Email</label>
<input className="w-full rounded-xl border p-3.5 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition border-gray-200 bg-slate-50" placeholder="mail@example.com" required="" style={{}} type="email"/>
</div>
</div>
<div className="pt-6 border-t flex justify-end border-gray-100" style={{}}>
<button className="hover:bg-red-500 font-medium py-3.5 px-10 rounded-full shadow-lg shadow-red-500/25 transition-all transform active:scale-95 flex items-center bg-red-600 text-white" style={{}} type="submit">
                            Ödənişə keç <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>

<section className="hidden min-h-screen pt-24 pb-12 bg-slate-50" id="payment-section" style={{}}>
<div className="max-w-lg mx-auto px-4">
<button className="flex items-center text-sm font-medium text-slate-500 mb-8 transition group hover:text-slate-900" onclick="openRegistration()" style={{}}>
<svg aria-hidden="true" className="iconify mr-2 group-hover:-translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-left" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Geri qayıt
            </button>
<div className="rounded-3xl shadow-xl border p-8 bg-white shadow-slate-200/50 border-slate-100" style={{}}>
<div className="flex justify-between items-center mb-8">
<h2 className="text-xl font-bold tracking-tight text-slate-900" style={{}}>Ödəniş</h2>
<div className="p-2 rounded-lg bg-slate-100 text-slate-600" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:credit-card" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="mb-8 p-4 rounded-xl border border-red-100 bg-red-50" style={{}}>
<div className="flex justify-between items-center mb-2">
<span className="text-sm text-slate-600" style={{}}>Məbləğ</span>
<span className="text-lg font-bold text-red-600" style={{}}>35.00 AZN</span>
</div>
<div className="text-xs text-slate-500" style={{}}>11 km Qaçış - Standart Paket</div>
</div>
<form className="space-y-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{}}>Kart nömrəsi</label>
<div className="relative">
<input className="w-full rounded-xl border p-3.5 pl-12 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition font-mono border-gray-200 bg-slate-50" placeholder="0000 0000 0000 0000" style={{}} type="text"/>
<div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:credit-card" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{}}>Bitmə tarixi</label>
<input className="w-full rounded-xl border p-3.5 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition font-mono border-gray-200 bg-slate-50" placeholder="MM/YY" style={{}} type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wide" style={{}}>CVV</label>
<input className="w-full rounded-xl border p-3.5 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition font-mono border-gray-200 bg-slate-50" placeholder="123" style={{}} type="text"/>
</div>
</div>
<div className="pt-4">
<button className="w-full hover:bg-red-500 font-medium py-4 rounded-xl shadow-lg shadow-red-500/25 transition-all transform active:scale-95 bg-red-600 text-white" style={{}} type="button">
                            Ödənişi Təsdiqlə
                        </button>
</div>
<div className="flex justify-center items-center gap-4 mt-6 opacity-50 grayscale">
<svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:visa" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M11.026 13.913L12.396 5.48h2.247l-1.37 8.433zm6.331-8.324c-.655 0-1.222.37-1.464 1.054l-4.148 9.947h2.366l.473-1.313h2.895l.27 1.313h2.091L18.42 5.589zM15.03 11.26l.758-3.627c-.015.023 1.121 2.973 1.139 3.018l.128.61zM7.18 5.48H4.896c-.34 0-.547.195-.547.474c.038.563 2.155 3.033 4.28 6.941l-1.077 5.018H9.98L13.75 5.48zm-6.248.334c.15.04.577.106 1.033.106c1.196 0 1.94-.633 1.96-1.543c.018-.67-.396-1.181-1.267-1.636c-.528-.31-1.343-.547-1.875-.705c-.687-.202-1.02-.628-1.02-1.17c0-.986 1.054-1.678 2.62-1.678c.866 0 1.5.093 1.903.185v2.603c-.26-.062-.647-.15-1.118-.15c-1.328 0-2.074.65-2.097 1.62c-.018.777.466 1.258 1.488 1.765c.57.308 1.485.603 1.903.951c.548.438" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:mastercard" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 12.007c0-2.484 1.008-4.736 2.64-6.38a9.05 9.05 0 0 0-5.28-1.68C4.18 3.947 0 8.127 0 13.287c0 5.16 4.18 9.34 9.36 9.34c2.04 0 3.92-.68 5.48-1.82a8.98 8.98 0 0 1-2.84-8.8m11.96-6.38a9.01 9.01 0 0 0-5.28 1.68a9.04 9.04 0 0 0-2.64 6.38c0 3.28 1.74 6.18 4.38 7.86a9.05 9.05 0 0 0 3.54.72c5.18 0 9.36-4.18 9.36-9.34c0-5.16-4.18-9.34-9.36-9.34" fill="currentColor"></path></svg>
</div>
</form>
</div>
</div>
</section>



    </>
  );
}
