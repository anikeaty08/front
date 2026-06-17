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



        let currentLang = 'en';
        
        const translations = {
            en: {
                heroTitle: 'Connect Your Heart <br> with the <span class="text-gold-gradient">Holy Quran</span>',
                heroSub: 'Expert one-on-one online Quran classes for kids and adults. Master Tajweed, Hifz, and Arabic from the comfort of your home.',
                heroCtaPri: 'Book Free Trial',
                heroCtaSec: 'View Courses',
                svc1Title: 'Nazra & Tajweed',
                svc1Desc: 'Learn to read the Quran fluently with correct pronunciation (Makharij) and Tajweed rules.',
                svc1Btn: 'Start Reading',
                svc2Title: 'Hifz (Memorization)',
                svc2Desc: 'A structured program to help you memorize the Holy Quran by heart with regular revision.',
                svc2Btn: 'Start Memorizing',
                svc3Title: 'Arabic & Islamic Studies',
                svc3Desc: 'Understand the language of the Quran and learn essential Duas, Salah, and Hadith.',
                svc3Btn: 'Learn Arabic',
                formTitle: 'Book Your Free Class',
                formSub: 'Fill the form. We will contact you shortly.',
                formBtn: 'Schedule Now',
                formMicro: 'We respect your privacy. No spam. Secure data.'
            },
            es: {
                // Using Arabic/English context for the "second language" logic as requested by theme
                heroTitle: 'Conecta Tu Corazón <br> con el <span class="text-gold-gradient">Sagrado Corán</span>',
                heroSub: 'Clases de Corán en línea personalizadas para niños y adultos. Aprende Tajweed, Hifz y Árabe desde la comodidad de tu hogar.',
                heroCtaPri: 'Prueba Gratis',
                heroCtaSec: 'Ver Cursos',
                svc1Title: 'Nazra y Tajweed',
                svc1Desc: 'Aprende a leer el Corán con fluidez, pronunciación correcta y reglas de Tajweed.',
                svc1Btn: 'Empezar a Leer',
                svc2Title: 'Hifz (Memorización)',
                svc2Desc: 'Un programa estructurado para ayudarte a memorizar el Sagrado Corán con revisión regular.',
                svc2Btn: 'Empezar a Memorizar',
                svc3Title: 'Árabe y Estudios Islámicos',
                svc3Desc: 'Entiende el idioma del Corán y aprende Duas esenciales, Salah y Hadices.',
                svc3Btn: 'Aprender Árabe',
                formTitle: 'Reserva Tu Clase Gratis',
                formSub: 'Llena el formulario. Te contactaremos pronto.',
                formBtn: 'Agendar Ahora',
                formMicro: 'Respetamos tu privacidad. Sin spam. Datos seguros.'
            }
        };

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            const t = translations[currentLang];
            
            // Toggle UI
            const dot = document.getElementById('lang-dot');
            const langActive = document.getElementById('lang-active');
            const langIndicator = document.getElementById('lang-indicator');
            
            if(currentLang === 'es') {
                dot.style.transform = 'translateX(100%)';
                langActive.innerText = 'AR';
                langIndicator.innerText = 'EN';
            } else {
                dot.style.transform = 'translateX(0)';
                langActive.innerText = 'EN';
                langIndicator.innerText = 'AR';
            }

            // Update Text
            document.getElementById('hero-title').innerHTML = t.heroTitle;
            document.getElementById('hero-sub').innerText = t.heroSub;
            document.getElementById('hero-cta-pri').innerText = t.heroCtaPri;
            document.getElementById('hero-cta-sec').innerText = t.heroCtaSec;
            
            document.getElementById('svc-1-title').innerText = t.svc1Title;
            document.getElementById('svc-1-desc').innerText = t.svc1Desc;
            document.getElementById('svc-1-btn').innerText = t.svc1Btn;
            
            document.getElementById('svc-2-title').innerText = t.svc2Title;
            document.getElementById('svc-2-desc').innerText = t.svc2Desc;
            document.getElementById('svc-2-btn').innerText = t.svc2Btn;
            
            document.getElementById('svc-3-title').innerText = t.svc3Title;
            document.getElementById('svc-3-desc').innerText = t.svc3Desc;
            document.getElementById('svc-3-btn').innerText = t.svc3Btn;
            
            document.getElementById('form-title').innerText = t.formTitle;
            document.getElementById('form-sub').innerText = t.formSub;
            document.getElementById('form-btn').innerText = t.formBtn;
            document.getElementById('form-micro').innerText = t.formMicro;
        }
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#011812]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:border-amber-500/50 transition-colors">
<iconify-icon className="text-amber-400 text-xl" icon="solar:book-2-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-widest uppercase text-white">Al-Huda</span>
<span className="text-[0.65rem] text-slate-400 tracking-wide">QURAN • HIFZ • ARABIC</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-amber-400 transition-colors" href="#courses">Courses</a>
<a className="hover:text-amber-400 transition-colors" href="#method">Methodology</a>
<a className="hover:text-amber-400 transition-colors" href="#testimonials">Reviews</a>
<a className="hover:text-amber-400 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-6">

<button className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors" onclick="toggleLanguage()">
<span className="opacity-50 font-serif" id="lang-indicator">عربي</span>
<div className="w-8 h-4 rounded-full border border-slate-600 relative flex items-center px-0.5">
<div className="w-3 h-3 bg-amber-400 rounded-full shadow-sm transition-all translate-x-0" id="lang-dot"></div>
</div>
<span className="text-amber-400" id="lang-active">EN</span>
</button>
<a className="hidden sm:block px-5 py-2.5 bg-white text-[#011812] rounded-full text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-all hover:scale-105" href="#contact">
                    Free Trial
                </a>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0 opacity-30">

<img alt="Islamic Architecture" className="w-full h-full object-cover animate-drift" src="https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#011812] via-[#011812]/80 to-[#011812]/40"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#011812]/90 via-transparent to-[#011812]/90"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-10">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-md mb-8">
<iconify-icon className="text-amber-400" icon="solar:diploma-verified-linear"></iconify-icon>
<span className="text-xs font-medium text-amber-200 uppercase tracking-widest" id="hero-badge">Certified Tutors. Female Sisters Available.</span>
</div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-6" id="hero-title">
                    Connect Your Heart <br/> with the <span className="text-gold-gradient">Holy Quran</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto mb-10 leading-relaxed" id="hero-sub">
                    Expert one-on-one online Quran classes for kids and adults. Master Tajweed, Hifz, and Arabic from the comfort of your home.
                </p>
<div className="flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-[#011812] rounded-lg font-bold hover:bg-amber-400 transition-all hover:translate-y-[-2px] shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)]" href="#contact" id="hero-cta-pri">
                        Book Free Trial
                    </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-lg font-medium hover:border-white/50 hover:bg-white/5 transition-all" href="#courses" id="hero-cta-sec">
                        View Courses
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-slate-400">Scroll</span>
<iconify-icon className="text-white" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</header>

<section className="border-y overflow-hidden z-20 bg-[#00100c] border-white/5 pt-8 pb-8 relative">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-12 mb-8">
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
<iconify-icon className="text-amber-500 text-lg" icon="solar:user-check-rounded-linear"></iconify-icon>
<span>Azhar Certified Tutors</span>
</div>
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
<iconify-icon className="text-amber-500 text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span className="">Flexible 24/7 Schedule</span>
</div>
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
<iconify-icon className="text-amber-500 text-lg" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<span>Interactive 1-on-1 Classes</span>
</div>
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
<iconify-icon className="text-amber-500 text-lg" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span>Female Tutors for Sisters</span>
</div>
<div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
<iconify-icon className="text-amber-500 text-lg" icon="solar:chat-round-check-linear"></iconify-icon>
<span className="">Multilingual Support</span>
</div>
</div>

<div className="flex justify-center items-center gap-8 md:gap-24 opacity-40 mix-blend-screen border-t border-white/5 pt-6">
<div className="text-center">
<span className="block text-2xl font-bold text-white tracking-tight">5,000+</span>
<span className="text-[10px] uppercase tracking-widest text-amber-500">Students</span>
</div>
<div className="text-center">
<span className="block text-2xl font-bold text-white tracking-tight">150+</span>
<span className="text-[10px] uppercase text-amber-500 tracking-widest">Expert Tutors</span>
</div>
<div className="text-center">
<span className="block text-2xl font-bold text-white tracking-tight">100%</span>
<span className="text-[10px] uppercase tracking-widest text-amber-500">Satisfaction</span>
</div>
</div>
</div>
</section>

<section className="bg-[#011812] pt-24 pb-24 relative" id="courses">
<div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900/5 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="col-span-1 md:col-span-3 w-full mt-16 mb-8 relative">

<div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent opacity-50 blur-3xl rounded-full pointer-events-none"></div>

<div className="text-center mb-12 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-950/30 backdrop-blur-md mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
<span className="text-[10px] font-semibold text-amber-200 uppercase tracking-widest">Flexible Monthly Plans</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Learning Path</span></h2>
<p className="text-slate-400 font-light max-w-xl mx-auto text-sm leading-relaxed">Select a specialized course tailored to your goals. All plans include 1-on-1 private tutoring and flexible scheduling.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

<div className="group relative flex flex-col bg-[#022019] border border-white/5 hover:border-amber-500/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/20">
<div className="mb-6">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Noorani Qaida</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light h-10">Perfect for beginners to learn alphabets and basic pronunciation.</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">$35</span>
<span className="text-xs text-slate-500">/ month</span>
</div>
<div className="text-[10px] text-amber-500/80 mt-1 uppercase tracking-wider font-medium">8 Classes Monthly</div>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Arabic Alphabets</span>
</li>
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Basic Makharij</span>
</li>
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Connecting Letters</span>
</li>
</ul>
<a className="uppercase hover:bg-amber-500 hover:text-[#011812] hover:border-amber-500 transition-all text-xs font-semibold text-white tracking-wider text-center bg-white/5 w-full border-white/10 border rounded-lg pt-2.5 pb-2.5" href="/tajweed-rules">
                Select Plan
            </a>
</div>

<div className="group relative flex flex-col bg-gradient-to-b from-[#032b22] to-[#022019] border border-amber-500/30 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/30">
<div className="absolute top-0 right-0 p-3">
<span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-widest bg-amber-500 text-[#011812]">Popular</span>
</div>
<div className="mb-6">
<div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:stars-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Rules of Tajweed</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light h-10">Master the rules of recitation for beautiful and correct reading.</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">$45</span>
<span className="text-xs text-slate-500">/ month</span>
</div>
<div className="text-[10px] text-amber-500/80 mt-1 uppercase tracking-wider font-medium">8 Classes Monthly</div>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Advanced Pronunciation</span>
</li>
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Ghunnah &amp; Ikhfa Rules</span>
</li>
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Melodious Recitation</span>
</li>
</ul>
<a className="w-full py-2.5 rounded-lg bg-amber-500 text-[#011812] text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-all text-center shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]" href="#contact">
                Select Plan
            </a>
</div>

<div className="group relative flex flex-col bg-[#022019] border border-white/5 hover:border-amber-500/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/20">
<div className="mb-6">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Quran Translation</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light h-10">Understand the meaning of the Holy Quran word-by-word.</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">$55</span>
<span className="text-xs text-slate-500">/ month</span>
</div>
<div className="text-[10px] text-amber-500/80 mt-1 uppercase tracking-wider font-medium">8 Classes Monthly</div>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Word-to-Word Meaning</span>
</li>
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="">Basic Tafseer</span>
</li>
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Contextual Understanding</span>
</li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider hover:bg-amber-500 hover:text-[#011812] hover:border-amber-500 transition-all text-center" href="#contact">
                Select Plan
            </a>
</div>

<div className="group relative flex flex-col bg-[#022019] border border-white/5 hover:border-amber-500/40 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-900/20">
<div className="mb-6">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:smile-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2">Islamic Studies</h3>
<p className="text-xs text-slate-400 leading-relaxed font-light h-10">Essential Islamic knowledge tailored engagingly for children.</p>
</div>
<div className="mb-6 pb-6 border-b border-white/5">
<div className="flex items-baseline gap-1">
<span className="text-2xl font-semibold text-white tracking-tight">$40</span>
<span className="text-xs text-slate-500">/ month</span>
</div>
<div className="text-[10px] text-amber-500/80 mt-1 uppercase tracking-wider font-medium">8 Classes Monthly</div>
</div>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Daily Masnoon Duas</span>
</li>
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Stories of Prophets</span>
</li>
<li className="flex items-start gap-2.5 text-xs text-slate-300">
<iconify-icon className="text-emerald-500 text-sm mt-px shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span>Practical Salah Learning</span>
</li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 bg-white/5 text-white text-xs font-semibold uppercase tracking-wider hover:bg-amber-500 hover:text-[#011812] hover:border-amber-500 transition-all text-center" href="#contact">
                Select Plan
            </a>
</div>
</div>
</div>


</div>
</div>
</section>

<section className="py-24 bg-[#00100c] border-y border-white/5" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="relative">
<div className="w-16 h-16 mx-auto rounded-full bg-[#011812] border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-6 shadow-lg shadow-amber-900/20">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">1. Book a Free Trial</h4>
<p className="text-slate-400 text-sm font-light">Fill the form to schedule your complimentary session.</p>

<div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-amber-500/30 to-transparent"></div>
</div>
<div className="relative">
<div className="w-16 h-16 mx-auto rounded-full bg-[#011812] border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-6 shadow-lg shadow-amber-900/20">
<iconify-icon icon="solar:videocamera-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">2. Meet Your Tutor</h4>
<p className="text-slate-400 text-sm font-light">Assess the level and get a personalized study plan.</p>

<div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-amber-500/30 to-transparent"></div>
</div>
<div className="">
<div className="w-16 h-16 mx-auto rounded-full bg-[#011812] border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-6 shadow-lg shadow-amber-900/20">
<iconify-icon className="" icon="solar:play-circle-linear"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-white mb-2">3. Start Learning</h4>
<p className="text-slate-400 text-sm font-light">Join regular classes from your laptop or phone.</p>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-medium tracking-wide" href="#contact">
                    Start Your Journey <iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#011812]" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-white mb-16 tracking-tight">Student &amp; Parent Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#022019]/50 p-8 rounded-xl border border-white/5 backdrop-blur-sm">
<div className="flex text-amber-500 gap-0.5 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">"My son started with zero knowledge of Arabic. Now he reads the Quran with proper Tajweed. The tutor is very patient."</p>
<p className="text-white text-xs font-semibold uppercase tracking-wider">Sister Fatima A.</p>
</div>

<div className="bg-[#022019]/50 p-8 rounded-xl border border-white/5 backdrop-blur-sm">
<div className="flex text-amber-500 gap-0.5 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">"As a busy professional, the flexible schedule allows me to pursue my Hifz goals early in the morning before work."</p>
<p className="text-white text-xs font-semibold uppercase tracking-wider">Brother Ahmed K.</p>
</div>

<div className="bg-[#022019]/50 p-8 rounded-xl border border-white/5 backdrop-blur-sm">
<div className="flex text-amber-500 gap-0.5 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 text-sm font-light leading-relaxed mb-6">"The online platform is easy to use and the female tutors made my daughter feel very comfortable from day one."</p>
<p className="text-white text-xs font-semibold uppercase tracking-wider">The Khan Family</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-[#00100c]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="hidden lg:block">
<h2 className="text-4xl font-medium text-white mb-6 tracking-tight">Ready to begin?</h2>
<p className="text-slate-400 font-light mb-10 text-lg">Book your free trial class today. Meet your tutor and see how easy it is to learn online.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#022019] border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:calendar-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">3 Day Free Trial</h4>
<p className="text-slate-500 text-sm">No credit card required. Try before you commit.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#022019] border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:shield-user-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Secure &amp; Private</h4>
<p className="text-slate-500 text-sm">Classes are private and secure via Zoom/Skype.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-[#022019] border border-white/10 flex items-center justify-center text-amber-400 shrink-0">
<iconify-icon icon="solar:global-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Global Access</h4>
<p className="text-slate-500 text-sm">We teach students in USA, UK, Canada &amp; Australia.</p>
</div>
</div>
</div>
</div>

<div className="bg-[#011812] p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] relative group">

<div className="absolute -inset-[1px] bg-gradient-to-br from-amber-500/20 to-transparent rounded-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="mb-8">
<h3 className="text-2xl font-medium text-white mb-2" id="form-title">Book Your Free Class</h3>
<p className="text-sm text-slate-400" id="form-sub">Fill the form. We will contact you shortly.</p>
</div>
<form className="space-y-4">
<input className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm" placeholder="Student Name / Nombre" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm" placeholder="Phone / Teléfono" type="tel"/>
<input className="form-input w-full px-4 py-3 rounded-lg text-white placeholder-slate-500 text-sm" placeholder="Email" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<select className="form-input w-full px-4 py-3 rounded-lg text-slate-300 text-sm appearance-none cursor-pointer">
<option>Course: Noorani Qaida</option>
<option>Course: Tajweed</option>
<option>Course: Hifz (Memorization)</option>
<option>Course: Arabic Language</option>
</select>
<select className="form-input w-full px-4 py-3 rounded-lg text-slate-300 text-sm appearance-none cursor-pointer">
<option>Tutor: Male Brother</option>
<option>Tutor: Female Sister</option>
<option>Tutor: Any</option>
</select>
</div>

<div className="flex gap-6 py-2">
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-amber-400">
<div className="w-2 h-2 rounded-full bg-amber-400 opacity-100"></div>
</div>
<span className="text-xs text-slate-300">English</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-slate-600 flex items-center justify-center group-hover:border-amber-400">
<div className="w-2 h-2 rounded-full bg-amber-400 opacity-0"></div>
</div>
<span className="text-xs text-slate-300 font-serif">عربي (Arabic)</span>
</label>
</div>
<button className="w-full py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-[#011812] font-bold rounded-lg transition-all shadow-lg shadow-amber-900/20 mt-2 text-sm tracking-wide" id="form-btn" type="button">
                            Schedule Now
                        </button>
<p className="text-center text-[10px] text-slate-600 mt-4 uppercase tracking-wider" id="form-micro">
                            We respect your privacy. No spam. Secure data.
                        </p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#00100c] border-t border-white/5" id="faq">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white text-center mb-12 tracking-tight">Common Questions</h2>
<div className="space-y-4">

<details className="group bg-[#011812] rounded-lg border border-white/5 overflow-hidden open:border-amber-500/30 transition-colors">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-200 text-sm font-medium hover:text-amber-400 transition-colors">
<span>Do you have female tutors?</span>
<iconify-icon className="text-xl text-slate-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed font-light">
                        Yes, we have a dedicated team of qualified female tutors for sisters and children to ensure a comfortable learning environment.
                    </div>
</details>
<details className="group bg-[#011812] rounded-lg border border-white/5 overflow-hidden open:border-amber-500/30 transition-colors">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-200 text-sm font-medium hover:text-amber-400 transition-colors">
<span>Is the trial class really free?</span>
<iconify-icon className="text-xl text-slate-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed font-light">
                        Yes! The first 3 days are completely free. You can meet your tutor, assess the teaching style, and then decide to continue. No credit card needed.
                    </div>
</details>
<details className="group bg-[#011812] rounded-lg border border-white/5 overflow-hidden open:border-amber-500/30 transition-colors">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-200 text-sm font-medium hover:text-amber-400 transition-colors">
<span>What apps do you use for teaching?</span>
<iconify-icon className="text-xl text-slate-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed font-light">
                        We conduct classes via Zoom, Skype, or Google Meet, depending on what is most convenient for the student. We also provide screen sharing for digital books.
                    </div>
</details>
<details className="group bg-[#011812] rounded-lg border border-white/5 overflow-hidden open:border-amber-500/30 transition-colors">
<summary className="flex justify-between items-center p-5 cursor-pointer text-slate-200 text-sm font-medium hover:text-amber-400 transition-colors">
<span>What is the age limit for students?</span>
<iconify-icon className="text-xl text-slate-500 group-open:rotate-45 transition-transform" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="px-5 pb-5 text-slate-400 text-sm leading-relaxed font-light">
                        We accept students as young as 4 years old up to adults of any age. Our curriculum is customized based on the age and level of the student.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-[#011812] border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-amber-400 text-2xl" icon="solar:book-2-linear"></iconify-icon>
<span className="text-lg font-bold text-white tracking-widest uppercase">Al-Huda</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm mb-6">
                        Your trusted partner for learning the Holy Quran online. Dedicated to spreading the light of knowledge to Muslims worldwide.
                    </p>

<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-[#011812] transition-colors" href="#"><iconify-icon icon="solar:facebook-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-[#011812] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-[#011812] transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Courses</h5>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-amber-400 transition-colors" href="#">Noorani Qaida</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Quran Reading (Nazra)</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Tajweed Rules</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h5>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:phone-linear"></iconify-icon> +1 (555) 786-0000</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:letter-linear"></iconify-icon> admissions@alhuda.com</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:map-point-linear"></iconify-icon> Online (Global)</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
<p>© 2023 Al-Huda Quran Academy. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#">Privacy Policy</a>
<a className="hover:text-slate-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
