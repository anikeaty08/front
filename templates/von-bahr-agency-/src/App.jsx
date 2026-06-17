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
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
'vbglow-green': '#00ff99',
'vbglow-blue': '#0066ff',
'vb-navy': '#05050A',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
screens: {
'xs': '375px',
},
animation: {
'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
pulseGlow: {
'0%, 100%': { opacity: 0.3 },
'50%': { opacity: 0.6 },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        const routes = {
            '/': { view: 'view-home' },
            '/kontakt': { view: 'view-home', section: 'contact' },
            '/portfolio': { view: 'view-portfolio' },
            '/priser': { view: 'view-pricing' },
            '/case/imsdal': { view: 'view-case', data: 'imsdal' },
            '/case/alex': { view: 'view-case', data: 'alex' }
        };

        const caseData = {
            imsdal: {
                title: "Imsdal Water",
                subtitle: "Kampanjsajt och Identitet",
                image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
                imageStyle: "object-contain p-8 md:p-0 md:object-cover",
                desc: "En ren och klar digital upplevelse. Fokus på enkelhet och natur.",
                tags: ["Webbdesign", "Strategi", "Identitet"]
            },
            alex: {
                title: "DJ Alex",
                subtitle: "Artistportfolio och Bokning",
                image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
                imageStyle: "object-cover object-top",
                desc: "En dynamisk portfolio som lyfter varumärket. Förenklar hela bokningsprocessen.",
                tags: ["Webbdesign", "Bokningssystem", "UX/UI"]
            }
        };

        function route(event, path) {
            if (event) event.preventDefault();
            window.history.pushState({}, '', path);
            handleRoute();
        }

        function handleRoute() {
            const path = window.location.pathname;
            const routeInfo = routes[path] || routes['/'];
            
            document.querySelectorAll('.page-view').forEach(view => {
                view.classList.remove('active');
            });
            
            document.getElementById(routeInfo.view).classList.add('active');
            
            if (routeInfo.section) {
                setTimeout(() => {
                    const el = document.getElementById(routeInfo.section);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
        }

        window.addEventListener('popstate', handleRoute);
        
        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
                menu.classList.add('translate-x-0');
            } else {
                closeMobileMenu();
            }
        }

        function closeMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.remove('translate-x-0');
            menu.classList.add('translate-x-full');
        }

        function openModal(id) {
            document.getElementById(id).classList.add('active');
        }

        function closeModal(id) {
            document.getElementById(id).classList.remove('active');
        }

        function toggleFaq(btn) {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('iconify-icon');
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        }
        
        function openLegalModal(type) {
            openModal('modal-legal');
        }
        
        function setLanguage(lang) {}
        function openCase(id) {}
        function handleAuditSubmit(e) { e.preventDefault(); }
        function resetContactForm() {}
        
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.fade-up-element').forEach((el) => {
                observer.observe(el);
            });
        });
    


    window.NordAssistConfig = {
    clientId: 'nils-7d84f635',
    dashboardUrl: 'https://app.getnordassist.com',
};

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
      
<nav className="fixed top-0 left-0 right-0 z-[100] bg-white/80 dark:bg-vb-navy/80 backdrop-blur-xl border-b border-slate-100 dark:border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-3 md:py-0 h-auto md:h-20 flex items-center justify-between relative">
<a className="group flex flex-col items-start justify-center leading-none select-none relative cursor-pointer z-[101] min-w-[120px]" href="/" onclick="route(event, '/')">
<span className="md:text-sm uppercase text-xs font-medium text-slate-900 dark:text-white tracking-[0.2em] block whitespace-nowrap transition-colors" role="button">VON BAHR</span>
<span className="text-[10px] font-normal tracking-[0.4em] text-slate-500 uppercase mt-1 group-hover:text-slate-800 dark:group-hover:text-slate-400 transition-colors block ml-[1px]">AGENCY</span>
</a>
<div className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 -translate-x-1/2">
<a className="text-xs font-normal text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-300 uppercase tracking-widest" href="/" onclick="route(event, '/')">Start</a>
<a className="text-xs font-normal text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-300 uppercase tracking-widest" data-i18n="nav_portfolio" href="/portfolio" onclick="route(event, '/portfolio')">Portfolio</a>
<a className="text-xs font-normal text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors duration-300 uppercase tracking-widest" data-i18n="nav_pricing" href="/priser" onclick="route(event, '/priser')">Priser</a>
</div>
<div className="flex items-center gap-4 md:gap-6 z-[101]">
<div className="hidden md:flex items-center gap-3 text-[10px] font-medium tracking-widest uppercase">
<button className="transition-colors text-slate-900 dark:text-white" id="lang-sv" onclick="setLanguage('sv')">SV</button>
<span className="text-slate-300 dark:text-slate-700">|</span>
<button className="transition-colors text-slate-400 hover:text-slate-900 dark:text-slate-600 dark:hover:text-white" id="lang-en" onclick="setLanguage('en')">EN</button>
</div>
<button className="text-slate-400 hover:text-slate-900 dark:text-slate-500 dark:hover:text-white transition-colors duration-300 focus:outline-none p-2 rounded-full active:bg-slate-100 dark:active:bg-slate-800/50" onclick="toggleTheme()">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="20"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-linear" width="20"></iconify-icon>
</button>
<button className="md:hidden text-slate-900 dark:text-white flex items-center justify-center p-2 -mr-2 z-[102] relative pointer-events-auto active:scale-95 transition-transform" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<div className="fixed inset-0 z-[90] bg-white/95 dark:bg-vb-navy/95 backdrop-blur-2xl translate-x-full md:hidden flex flex-col pt-24 pb-10 px-6 overflow-y-auto h-screen" id="mobile-menu">
<div className="flex flex-col gap-8 items-center mt-10">
<a className="text-2xl font-normal text-slate-900 dark:text-white tracking-tight active:text-slate-500 transition-colors" href="/" onclick="route(event, '/'); closeMobileMenu();">Start</a>
<a className="text-2xl font-normal text-slate-900 dark:text-white tracking-tight active:text-slate-500 transition-colors" data-i18n="nav_portfolio" href="/portfolio" onclick="route(event, '/portfolio'); closeMobileMenu();">Portfolio</a>
<a className="text-2xl font-normal text-slate-900 dark:text-white tracking-tight active:text-slate-500 transition-colors" data-i18n="nav_pricing" href="/priser" onclick="route(event, '/priser'); closeMobileMenu();">Priser</a>
</div>
<div className="mt-auto flex flex-col items-center gap-8 w-full pb-8">
<div className="flex items-center gap-6 text-xs font-medium tracking-widest uppercase">
<button className="transition-colors text-slate-900 dark:text-white" onclick="setLanguage('sv'); closeMobileMenu();">SV</button>
<span className="text-slate-300 dark:text-slate-700">|</span>
<button className="transition-colors text-slate-400 hover:text-slate-900 dark:text-slate-600 dark:hover:text-white" onclick="setLanguage('en'); closeMobileMenu();">EN</button>
</div>
<button className="w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-vb-navy text-sm font-medium rounded-full flex items-center justify-center gap-2 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] active:scale-[0.98]" onclick="openModal('modal-audit'); closeMobileMenu();">
<span data-i18n="hero_cta_primary">Få en kostnadsfri granskning</span>
</button>
</div>
</div>
<main className="flex-grow pt-[4.5rem] md:pt-20">
<div className="page-view active" id="view-home">

<section className="relative min-h-[75vh] md:min-h-[85vh] flex flex-col justify-center items-center pt-16 pb-24 md:pt-32 px-6 overflow-hidden bg-white dark:bg-vb-navy transition-colors duration-300 border-b border-slate-100 dark:border-white/5">
<div className="relative z-10 w-full max-w-[1000px] mx-auto text-center flex flex-col items-center">
<div className="relative z-10 mx-auto flex items-center justify-center mb-3 md:mb-4 animate-fade-in">
<img alt="Von Bahr Agency" className="relative w-48 md:w-56 lg:w-60 h-auto object-contain dark:invert block" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6953b66-05ef-4877-9f44-1f13f6237abd_800w.png"/>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-5 md:mb-6 animate-fade-in" data-i18n="hero_title" style={{animationDelay: '0.1s'}}>Vi bygger företagshemsidor som säljer.</h1>
<p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-normal leading-[1.6] max-w-[700px] mx-auto mb-4 md:mb-5 animate-fade-in" data-i18n="hero_subtitle_1" style={{animationDelay: '0.2s'}}>Inte bara snygg design. Med inbyggd AI som svarar, kvalificerar och bokar kunder – dygnet runt.</p>
<p className="text-sm md:text-base text-slate-400 dark:text-slate-500 font-light max-w-[600px] mx-auto mb-8 md:mb-10 animate-fade-in" data-i18n="hero_subtitle_2" style={{animationDelay: '0.3s'}}>För företag som vill växa snabbare utan att missa affärer.</p>
<div className="flex items-center justify-center w-full animate-fade-in" style={{animationDelay: '0.4s'}}>
<button className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-medium text-white dark:text-vb-navy bg-slate-900 dark:bg-white h-14 rounded-full px-10 transition-all duration-300 ease-out hover:-translate-y-[2px] hover:bg-slate-800 dark:hover:bg-slate-100 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_20px_rgba(255,255,255,0.1)] active:scale-[0.98] shadow-sm" onclick="openModal('modal-audit')">
<span data-i18n="hero_cta_primary">Få en kostnadsfri granskning</span>
</button>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white dark:bg-vb-navy relative transition-colors duration-300 border-y border-slate-100 dark:border-white/5" id="services">
<div className="max-w-[1200px] mx-auto">
<div className="text-left mb-16 md:mb-20 fade-up-element is-visible" style={{transitionDelay: '0ms'}}>
<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400 mb-4 block" data-i18n="value_label">Affärsvärde</span>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 dark:text-white leading-[1.1] transition-colors duration-300 max-w-3xl" data-i18n="value_title">Från besökare till kund</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
<div className="fade-up-element" style={{transitionDelay: '100ms'}}>
<div className="group flex flex-col items-start p-8 rounded-2xl bg-white dark:bg-vb-navy border border-slate-100 dark:border-white/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_-12px_rgba(34,197,94,0.04)] hover:border-[#22c55e]/30 dark:hover:border-[#22c55e]/30 h-full">
<div className="text-slate-400 dark:text-slate-500 transition-all duration-500 ease-out group-hover:text-[#22c55e] group-hover:scale-110 group-hover:drop-shadow-[0_8px_16px_rgba(34,197,94,0.4)] mb-8">
<iconify-icon icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight transition-colors mb-3" data-i18n="value_1_title">Rätt budskap</h3>
<p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-light" data-i18n="value_1_desc">Besökaren förstår omedelbart ert erbjudande och nästa steg. Inga otydligheter. Bara ren klarhet.</p>
</div>
</div>
</div>
<div className="fade-up-element" style={{transitionDelay: '200ms'}}>
<div className="group flex flex-col items-start p-8 rounded-2xl bg-white dark:bg-vb-navy border border-slate-100 dark:border-white/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_-12px_rgba(34,197,94,0.04)] hover:border-[#22c55e]/30 dark:hover:border-[#22c55e]/30 h-full">
<div className="text-slate-400 dark:text-slate-500 transition-all duration-500 ease-out group-hover:text-[#22c55e] group-hover:scale-110 group-hover:drop-shadow-[0_8px_16px_rgba(34,197,94,0.4)] mb-8">
<iconify-icon icon="solar:crown-star-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight transition-colors mb-3" data-i18n="value_2_title">Premiumkänsla</h3>
<p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-light" data-i18n="value_2_desc">En design som bygger förtroende och lyfter varumärkets värde från första ögonkastet.</p>
</div>
</div>
</div>
<div className="fade-up-element" style={{transitionDelay: '300ms'}}>
<div className="group flex flex-col items-start p-8 rounded-2xl bg-white dark:bg-vb-navy border border-slate-100 dark:border-white/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_-12px_rgba(34,197,94,0.04)] hover:border-[#22c55e]/30 dark:hover:border-[#22c55e]/30 h-full">
<div className="text-slate-400 dark:text-slate-500 transition-all duration-500 ease-out group-hover:text-[#22c55e] group-hover:scale-110 group-hover:drop-shadow-[0_8px_16px_rgba(34,197,94,0.4)] mb-8">
<iconify-icon icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight transition-colors mb-3" data-i18n="value_3_title">Snabb process</h3>
<p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-light" data-i18n="value_3_desc">Från första analys till färdig lansering. Vi arbetar effektivt och helt utan krångel.</p>
</div>
</div>
</div>
<div className="fade-up-element" style={{transitionDelay: '0ms'}}>
<div className="group flex flex-col items-start p-8 rounded-2xl bg-white dark:bg-vb-navy border border-slate-100 dark:border-white/5 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_20px_40px_-12px_rgba(34,197,94,0.04)] hover:border-[#22c55e]/30 dark:hover:border-[#22c55e]/30 h-full">
<div className="text-slate-400 dark:text-slate-500 transition-all duration-500 ease-out group-hover:text-[#22c55e] group-hover:scale-110 group-hover:drop-shadow-[0_8px_16px_rgba(34,197,94,0.4)] mb-8">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight transition-colors mb-3" data-i18n="value_4_title">Långsiktigt ansvar</h3>
<p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-light" data-i18n="value_4_desc">Vi tar hand om säkerhet, uppdateringar och förbättringar. Din webbplats presterar över tid.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[120px] md:py-[160px] px-6 bg-[#ffffff] dark:bg-vb-navy transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="flex flex-col items-start text-left">
<img alt="Nordassist" className="md:w-[140px] dark:invert w-[120px] object-cover bg-center mb-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d557156d-2da3-41a5-8f1d-73015a5adc11_320w.png?w=800&amp;q=80"/>
<h2 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight text-[#0d1117] dark:text-white leading-[1.1] mb-6">
                            Din nya medarbetare.<br/>Alltid redo.
                        </h2>
<p className="text-base md:text-lg text-[#6e6e73] dark:text-slate-400 font-normal leading-relaxed mb-8 max-w-lg">
                            Nova är din AI-assistent som ingår i Care-paketet. Den svarar på frågor, samlar leads och lär sig din verksamhet — utan att du behöver göra någonting.
                        </p>
<div className="text-[11px] text-[#6e6e73] dark:text-slate-500 font-medium uppercase tracking-widest bg-slate-50 dark:bg-white/5 px-4 py-2 rounded-full border border-slate-100 dark:border-white/5">
                            Ingår i care paketen
                        </div>
</div>
<div className="flex flex-col gap-10 md:gap-12">
<div className="group flex items-start gap-5">
<div className="text-slate-400 dark:text-slate-500 flex-shrink-0 mt-1 transition-all duration-500 ease-out group-hover:text-[#22c55e] group-hover:scale-[1.12] group-hover:drop-shadow-[0_0px_12px_rgba(34,197,94,0.3)]">
<iconify-icon icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-[#0d1117] dark:text-white tracking-tight mb-2">Svarar direkt</h3>
<p className="text-sm leading-relaxed text-[#6e6e73] dark:text-slate-400">Besökaren frågar kl 03:00. Får svar på 2 sekunder. Du missar aldrig en affär igen.</p>
</div>
</div>
<div className="group flex items-start gap-5">
<div className="text-slate-400 dark:text-slate-500 flex-shrink-0 mt-1 transition-all duration-500 ease-out group-hover:text-[#22c55e] group-hover:scale-[1.12] group-hover:drop-shadow-[0_0px_12px_rgba(34,197,94,0.3)]">
<iconify-icon icon="solar:inbox-in-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-[#0d1117] dark:text-white tracking-tight mb-2">Samlar leads automatiskt</h3>
<p className="text-sm leading-relaxed text-[#6e6e73] dark:text-slate-400">Namn, e-post och vad de behöver hamnar direkt i ditt dashboard. Ingen manuell hantering.</p>
</div>
</div>
<div className="group flex items-start gap-5">
<div className="text-slate-400 dark:text-slate-500 flex-shrink-0 mt-1 transition-all duration-500 ease-out group-hover:text-[#22c55e] group-hover:scale-[1.12] group-hover:drop-shadow-[0_0px_12px_rgba(34,197,94,0.3)]">
<iconify-icon icon="solar:lightbulb-minimalistic-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-[#0d1117] dark:text-white tracking-tight mb-2">Lär sig din verksamhet</h3>
<p className="text-sm leading-relaxed text-[#6e6e73] dark:text-slate-400">Nova vet vad du säljer, vad det kostar och hur du vill sälja. Inte en generisk bot — din bot.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-20 pb-24 md:pt-32 md:pb-40 px-6 bg-white dark:bg-vb-navy transition-colors duration-300 border-t border-slate-100 dark:border-white/5" id="process">
<div className="max-w-5xl mx-auto">
<div className="mb-16 md:mb-24 text-center fade-up-element flex flex-col items-center">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 dark:text-white mb-4 transition-colors" data-i18n="process_title">Vår process</h2>
<p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-light leading-[1.8] max-w-xl" data-i18n="process_desc">Enkel, rak och resultatdriven. Inga onödiga möten.</p>
</div>
<div className="flex flex-col relative z-10 border-t border-slate-100 dark:border-white/5 max-w-3xl mx-auto">

<div className="flex items-start gap-5 md:gap-6 py-5 md:py-8 border-b border-slate-100 dark:border-white/5 fade-up-element group cursor-default" style={{transitionDelay: '50ms'}}>
<div className="text-slate-500 flex-shrink-0 mt-0.5 transition-all duration-[250ms] ease-out group-hover:text-[#22c55e] group-hover:scale-[1.08] group-hover:drop-shadow-[0_4px_12px_rgba(34,197,94,0.35)]">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5 md:gap-2">
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight">Inledande analys</h3>
<p className="text-sm md:text-base font-light text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">Vi kartlägger er digitala närvaro och identifierar konkret affärspotential. Inget gissande.</p>
</div>
</div>

<div className="flex items-start gap-5 md:gap-6 py-5 md:py-8 border-b border-slate-100 dark:border-white/5 fade-up-element group cursor-default" style={{transitionDelay: '150ms'}}>
<div className="text-slate-500 flex-shrink-0 mt-0.5 transition-all duration-[250ms] ease-out group-hover:text-[#22c55e] group-hover:scale-[1.08] group-hover:drop-shadow-[0_4px_12px_rgba(34,197,94,0.35)]">
<iconify-icon icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5 md:gap-2">
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight">Tydlig åtgärdsplan</h3>
<p className="text-sm md:text-base font-light text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">En exakt plan med fast pris och tydliga milstolpar. Helt utan dolda avgifter.</p>
</div>
</div>

<div className="flex items-start gap-5 md:gap-6 py-5 md:py-8 border-b border-slate-100 dark:border-white/5 fade-up-element group cursor-default" style={{transitionDelay: '250ms'}}>
<div className="text-slate-500 flex-shrink-0 mt-0.5 transition-all duration-[250ms] ease-out group-hover:text-[#22c55e] group-hover:scale-[1.08] group-hover:drop-shadow-[0_4px_12px_rgba(34,197,94,0.35)]">
<iconify-icon icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5 md:gap-2">
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight">Snabb leverans</h3>
<p className="text-sm md:text-base font-light text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">Vi designar, bygger och lanserar er nya digitala plattform – ofta inom två veckor.</p>
</div>
</div>

<div className="flex items-start gap-5 md:gap-6 py-5 md:py-8 border-b border-slate-100 dark:border-white/5 fade-up-element group cursor-default" style={{transitionDelay: '350ms'}}>
<div className="text-slate-500 flex-shrink-0 mt-0.5 transition-all duration-[250ms] ease-out group-hover:text-[#22c55e] group-hover:scale-[1.08] group-hover:drop-shadow-[0_4px_12px_rgba(34,197,94,0.35)]">
<iconify-icon icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<div className="flex flex-col gap-1.5 md:gap-2">
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight">Löpande optimering</h3>
<p className="text-sm md:text-base font-light text-slate-500 dark:text-slate-400 leading-relaxed max-w-2xl">Vi sköter teknisk drift, säkerhet och uppdateringar för varaktig prestanda.</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 dark:bg-vb-navy dark:border-white/5 transition-colors duration-300 bg-white border-slate-100 border-t pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="relative order-1 md:order-1">
<div className="aspect-[4/5] rounded-lg overflow-hidden bg-slate-50 dark:bg-[#030305] relative w-full group">
<img alt="Nils von Bahr" className="contrast-[1.05] brightness-[0.95] transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ff24cd8-9317-4238-8ed4-8f8309cc8812_1600w.png?w=800&amp;q=80"/>
</div>
</div>
<div className="order-2 md:order-2 flex flex-col justify-center">
<span className="uppercase block text-[10px] font-medium text-slate-400 tracking-[0.2em] mb-4" data-i18n="about_label">Strategi &amp; Design</span>
<div className="text-xl font-serif italic tracking-wider text-slate-900 dark:text-white mb-6">Nils von Bahr</div>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.2]" data-i18n="about_title">Jag hjälper företag att få fler kunder, inte bara fler besökare.</h2>
<p className="text-sm md:text-base font-light text-slate-500 dark:text-slate-400 leading-relaxed" data-i18n="about_text">Design utan syfte är dekoration. Jag strukturerar ert erbjudande så att kunden förstår, litar på er och agerar. Allt som inte leder till ett beslut skalas bort.</p>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 bg-white dark:bg-vb-navy flex items-center justify-center relative overflow-hidden transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
<div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center w-full fade-up-element">
<div className="w-16 h-[1px] bg-slate-200 dark:bg-white/10 mb-10 md:mb-12"></div>
<blockquote className="text-xl md:text-2xl font-serif italic font-light text-slate-800 dark:text-slate-200 leading-[1.6] md:leading-[1.8] tracking-normal mb-6 md:mb-8 max-w-3xl px-4" data-i18n="outcome_quote">
                        "Framgång handlar sällan om mer trafik. Det handlar om att ta hand om de besökare som redan hittat dit."
                    </blockquote>
<div className="text-[10px] font-medium tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 mb-16 md:mb-20">
                        FOUNDER, VON BAHR AGENCY
                    </div>
<div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 text-[10px] font-medium tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500">
<span>MODERN DESIGN</span>
<span className="hidden md:block text-slate-300 dark:text-slate-600">·</span>
<span>TYDLIG STRUKTUR</span>
<span className="hidden md:block text-slate-300 dark:text-slate-600">·</span>
<span>LÅNGSIKTIG PRESTANDA</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white dark:bg-vb-navy transition-colors duration-300 border-t border-slate-100 dark:border-white/5" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 dark:text-white mb-12 md:mb-16 text-center leading-[1.1]">Vanliga frågor</h2>
<div className="border-t border-slate-200 dark:border-white/10">
<div className="border-b border-slate-200 dark:border-white/10">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-base font-medium text-slate-900 dark:text-white tracking-tight group-hover:text-slate-500 transition-colors">Vad kostar en hemsida?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<p className="pb-6 text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">Priset beror på scope men vi arbetar alltid med fast pris — inga dolda avgifter. Boka en kostnadsfri analys så får du en exakt offert inom 24 timmar.</p>
</div>
</div>
<div className="border-b border-slate-200 dark:border-white/10">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-base font-medium text-slate-900 dark:text-white tracking-tight group-hover:text-slate-500 transition-colors">Hur lång tid tar det?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<p className="pb-6 text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">Vi bygger och lanserar inom två veckor från godkänd offert.</p>
</div>
</div>
<div className="border-b border-slate-200 dark:border-white/10">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-base font-medium text-slate-900 dark:text-white tracking-tight group-hover:text-slate-500 transition-colors">Vad händer efter att sidan är live?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<p className="pb-6 text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">Vi sköter drift, uppdateringar och löpande optimering via vårt Care-paket — du behöver inte göra någonting.</p>
</div>
</div>
<div className="border-b border-slate-200 dark:border-white/10">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-base font-medium text-slate-900 dark:text-white tracking-tight group-hover:text-slate-500 transition-colors">Behöver jag vara tekniskt kunnig?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<p className="pb-6 text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">Nej. Vi hanterar allt det tekniska. Du godkänner design och innehåll — resten sköter vi.</p>
</div>
</div>
<div className="border-b border-slate-200 dark:border-white/10">
<button className="w-full py-6 flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-base font-medium text-slate-900 dark:text-white tracking-tight group-hover:text-slate-500 transition-colors">Kan jag ha kvar min gamla domän?</span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<p className="pb-6 text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed">Ja, vi hjälper dig att koppla din befintliga domän till den nya sidan utan driftstopp.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-white dark:bg-vb-navy text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden border-t border-slate-100 dark:border-white/5" id="contact">
<div className="max-w-xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 leading-[1.1]" data-i18n="contact_title">Redo att ta nästa steg?</h2>
<p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-light mb-10 md:mb-12" data-i18n="contact_desc">Få en kostnadsfri analys av er webbplats inom 24 timmar.</p>
<form action="https://formspree.io/f/mvzbzjej" className="text-left" id="contact-form" method="POST" novalidate="">
<input name="_subject" type="hidden" value="Kontaktförfrågan Webbplats"/>
<div className="space-y-6 transition-opacity duration-300" id="contact-form-fields">
<div className="space-y-2">
<label className="text-[10px] font-medium text-slate-500 uppercase tracking-widest" data-i18n="form_name" htmlFor="name">Namn</label>
<input className="w-full py-3 bg-transparent input-minimal text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none" id="name" name="name" placeholder="Ditt namn" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-medium text-slate-500 uppercase tracking-widest" data-i18n="form_email" htmlFor="email">E-post</label>
<input className="w-full py-3 bg-transparent input-minimal text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none" id="email" name="email" placeholder="din@epost.se" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-medium text-slate-500 uppercase tracking-widest" data-i18n="form_website" htmlFor="website">Hemsida</label>
<input className="w-full py-3 bg-transparent input-minimal text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none" id="website" inputmode="url" name="website" placeholder="dittföretag.se" type="text"/>
</div>
<div className="pt-8">
<button className="w-full h-14 bg-slate-900 dark:bg-white text-white dark:text-vb-navy text-sm font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-70 group" id="submit-btn" type="submit">
<span data-i18n="form_btn">Skicka förfrågan</span>
<iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="mt-4 text-sm font-light text-red-400 text-center hidden" id="contact-error"></p>
</div>
</div>
<div className="hidden flex-col items-center justify-center text-center py-12 animate-fade-in min-h-[300px]" id="contact-success-message">
<div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-emerald-500 dark:text-vbglow-green">
<iconify-icon icon="solar:check-circle-linear" width="48"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 dark:text-white mb-3 tracking-tight">Mottaget.</h3>
<p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto text-sm leading-relaxed mb-8 font-light">
                                Vi återkommer med er analys inom ett dygn.
                            </p>
<button className="px-6 py-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs font-medium hover:bg-slate-50 dark:hover:bg-white/5 transition-colors" onclick="resetContactForm()" type="button">
                                Skicka en till
                            </button>
</div>
</form>
</div>
</section>
</div>
<div className="page-view" id="view-portfolio">
<section className="relative pt-32 md:pt-40 pb-10 md:pb-16 px-6 bg-white dark:bg-vb-navy flex flex-col items-center transition-colors duration-300">
<div className="relative z-10 max-w-[960px] mx-auto text-center flex flex-col items-center">
<div className="flex flex-col items-center mb-6 md:mb-8 select-none animate-fade-in">
<span className="text-[10px] font-medium tracking-[0.2em] text-slate-400 uppercase">PORTFOLIO</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 dark:text-white mb-6 md:mb-8 leading-[1.1] transition-colors" data-i18n="portfolio_title">Utvalda arbeten</h1>
</div>
</section>
<section className="px-6 pb-20 md:pb-32 bg-white dark:bg-vb-navy transition-colors duration-300 min-h-[50vh]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group cursor-pointer active:scale-[0.98] transition-transform duration-300" onclick="openCase('imsdal')">
<div className="relative overflow-hidden rounded-lg bg-slate-50 dark:bg-[#030305] aspect-[4/3] border border-slate-100 dark:border-white/5 mb-5 transition-colors">
<img alt="Imsdal" className="object-cover w-full h-full transition duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1 group-hover:text-slate-500 transition-colors">Imsdal Water</h3>
<p className="text-slate-500 text-sm font-light">Kampanjsajt och Identitet</p>
</div>
<div className="group cursor-pointer active:scale-[0.98] transition-transform duration-300" onclick="openCase('alex')">
<div className="relative overflow-hidden rounded-lg bg-slate-100 dark:bg-[#030305] aspect-[4/3] border border-slate-100 dark:border-white/5 mb-5 transition-colors">
<img alt="DJ Alex" className="object-cover object-top w-full h-full transition duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1 group-hover:text-slate-500 transition-colors">DJ Alex</h3>
<p className="text-slate-500 text-sm font-light">Artistportfolio och Bokning</p>
</div>
</div>
</div>
</section>
</div>
<div className="page-view" id="view-case">
<div id="case-content"></div>
</div>
<div className="page-view" id="view-pricing">
<section className="min-h-screen relative bg-white dark:bg-vb-navy pb-20 md:pb-32 transition-colors duration-300">
<div className="relative z-10 max-w-[1200px] mx-auto px-6 pt-28 md:pt-32">
<div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
<div className="mb-6 md:mb-8 flex flex-col items-center gap-1.5 select-none">
<span className="text-[10px] font-medium tracking-[0.25em] text-slate-500 uppercase" data-i18n="pricing_label">Investering</span>
</div>
<h1 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] transition-colors" data-i18n="pricing_title">Tydliga priser.<br/>Långsiktigt värde.</h1>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
<div className="flex flex-col p-8 bg-slate-50 dark:bg-[#030305] rounded-2xl border border-slate-100 dark:border-white/5 h-full">
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest mb-6 block">START</span>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-3xl font-normal text-slate-900 dark:text-white">4 900</span> <span className="text-sm text-slate-400 font-light">kr</span>
</div>
<h3 className="text-base font-medium text-slate-900 dark:text-white tracking-tight mb-8" data-i18n="price_start_title">Ny webbplats</h3>
<button className="w-full py-3 border border-slate-200 dark:border-white/10 rounded-full text-xs font-medium hover:bg-white dark:hover:bg-white/5 transition-colors active:scale-[0.98] mt-auto" onclick="openModal('modal-start')">Läs mer</button>
</div>
<div className="flex flex-col p-8 bg-slate-900 dark:bg-black rounded-2xl border border-slate-800 dark:border-white/10 h-full mt-4 lg:-mt-6 lg:mb-[-1.5rem] lg:py-14 z-10 shadow-2xl relative overflow-hidden group">
<span className="text-[10px] font-medium text-white/50 uppercase tracking-widest mb-6 block relative z-10">GROW</span>
<div className="flex items-baseline gap-1 mb-4 relative z-10">
<span className="text-3xl font-normal text-white">9 900</span>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-8 relative z-10" data-i18n="price_grow_title">Tillväxt och skalning</h3>
<button className="w-full py-3 bg-white text-slate-900 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors active:scale-[0.98] mt-auto relative z-10" onclick="route(event, '/kontakt')">Kontakta oss</button>
</div>
</div>
</div>
</section>
</div>
</main>
<footer className="bg-white dark:bg-vb-navy py-6 md:py-8 border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-normal text-slate-500 dark:text-slate-500 tracking-wide uppercase">
<span>© 2026 Von Bahr Agency</span>
<div className="flex gap-6">
<button className="hover:text-slate-900 dark:hover:text-white transition-colors py-1 cursor-pointer bg-transparent border-none p-0" onclick="openLegalModal('privacy')" type="button">Integritet</button>
<button className="hover:text-slate-900 dark:hover:text-white transition-colors py-1 cursor-pointer bg-transparent border-none p-0" onclick="openLegalModal('terms')" type="button">Villkor</button>
</div>
</div>
</footer>

<div className="modal fixed inset-0 z-[120] flex items-end md:items-center justify-center sm:p-4" id="modal-start">
<div className="absolute inset-0 bg-slate-900/40 dark:bg-vb-navy/80 backdrop-blur-sm transition-opacity" onclick="closeModal('modal-start')"></div>
<div className="modal-content relative bg-white dark:bg-[#030305] rounded-t-2xl md:rounded-2xl w-full md:max-w-lg shadow-2xl border border-slate-100 dark:border-white/5 overflow-hidden max-h-[85vh] flex flex-col">
<div className="p-6 md:p-8 border-b border-slate-100 dark:border-white/5 flex justify-between items-start bg-slate-50 dark:bg-white/5">
<div>
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">START</span>
<h3 className="text-xl font-medium text-slate-900 dark:text-white tracking-tight mt-2" data-i18n="price_start_title">Ny webbplats</h3>
<div className="mt-2 text-slate-500 dark:text-slate-400 font-light text-sm">4 900 kr · exkl. moms</div>
</div>
<button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-2 -mr-2 -mt-2" onclick="closeModal('modal-start')">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>
<div className="p-6 md:p-8 overflow-y-auto">
<h4 className="text-[10px] font-medium text-slate-900 dark:text-white uppercase tracking-wider mb-6" data-i18n="modal_included">Detta ingår</h4>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm font-light text-slate-600 dark:text-slate-400"><iconify-icon className="text-emerald-500 dark:text-vbglow-green shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> <span data-i18n="start_point_1">Stilren och modern design</span></li>
<li className="flex items-start gap-3 text-sm font-light text-slate-600 dark:text-slate-400"><iconify-icon className="text-emerald-500 dark:text-vbglow-green shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> <span data-i18n="start_point_2">Tydligt anpassat budskap</span></li>
<li className="flex items-start gap-3 text-sm font-light text-slate-600 dark:text-slate-400"><iconify-icon className="text-emerald-500 dark:text-vbglow-green shrink-0 mt-0.5" icon="solar:check-circle-linear" width="20"></iconify-icon> <span data-i18n="start_point_3">Felfri mobilupplevelse</span></li>
</ul>
<a className="block w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-vb-navy text-sm font-medium rounded-full hover:bg-slate-800 dark:hover:bg-slate-200 transition-all text-center active:scale-[0.98]" href="/kontakt" onclick="closeModal('modal-start'); route(event, '/kontakt');">
<span data-i18n="form_btn">Skicka förfrågan</span>
</a>
</div>
</div>
</div>
<div aria-modal="true" className="modal fixed inset-0 z-[120] flex items-center justify-center p-4 transition-all duration-300" id="modal-audit" role="dialog">
<div className="absolute inset-0 bg-slate-900/40 dark:bg-vb-navy/80 backdrop-blur-sm transition-opacity" onclick="closeModal('modal-audit')"></div>
<div className="modal-content relative bg-white dark:bg-[#030305] border border-slate-100 dark:border-white/5 rounded-2xl w-full max-w-[500px] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden transform transition-all duration-300">
<button className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors z-10 rounded-full hover:bg-slate-50 dark:hover:bg-white/5" onclick="closeModal('modal-audit')">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="overflow-y-auto p-8 md:p-10 scrollbar-hide">
<div className="transition-opacity duration-300" id="audit-form-container">
<div className="mb-8 text-center md:text-left">
<h3 className="text-2xl font-medium text-slate-900 dark:text-white tracking-tight mb-3">Få en kostnadsfri analys</h3>
<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-light">
                            Fyll i uppgifterna nedan. Vi återkommer med konkreta förslag för er webbplats.
                        </p>
</div>
<form className="space-y-6" id="audit-form" onsubmit="handleAuditSubmit(event)">
<input name="_subject" type="hidden" value="Kostnadsfri granskning"/>
<div className="space-y-2">
<label className="text-[10px] font-medium text-slate-500 uppercase tracking-widest block" htmlFor="audit-name">Namn</label>
<input className="w-full py-2 bg-transparent input-minimal text-slate-900 dark:text-white text-sm focus:outline-none" id="audit-name" name="name" placeholder="Ditt namn" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-medium text-slate-500 uppercase tracking-widest block" htmlFor="audit-email">E-post</label>
<input className="w-full py-2 bg-transparent input-minimal text-slate-900 dark:text-white text-sm focus:outline-none" id="audit-email" name="email" placeholder="din@epost.se" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-medium text-slate-500 uppercase tracking-widest block" htmlFor="audit-website">Hemsida</label>
<input className="w-full py-2 bg-transparent input-minimal text-slate-900 dark:text-white text-sm focus:outline-none" id="audit-website" name="website" placeholder="dittföretag.se" type="text"/>
</div>
<div className="pt-6">
<button className="w-full h-12 bg-slate-900 dark:bg-white text-white dark:text-vb-navy text-sm font-medium rounded-full transition-all hover:bg-slate-800 dark:hover:bg-slate-200 active:scale-[0.98] flex items-center justify-center gap-2 group" id="audit-submit-btn" type="submit">
<span>Få min analys</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="hidden mt-4 text-[11px] text-red-400 text-center font-normal uppercase tracking-wide" id="audit-error">
                                Något gick fel. Testa igen.
                            </div>
</div>
</form>
</div>
<div className="hidden flex-col items-center justify-center text-center py-10 animate-fade-in" id="audit-success">
<div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-emerald-500 dark:text-vbglow-green">
<iconify-icon icon="solar:check-circle-linear" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2 tracking-tight">Tack.</h3>
<p className="text-slate-500 dark:text-slate-400 max-w-xs mx-auto text-sm font-light">Vi återkommer inom ett dygn.</p>
</div>
</div>
</div>
</div>
<div aria-modal="true" className="modal fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6" id="modal-legal" role="dialog">
<div className="absolute inset-0 bg-slate-900/40 dark:bg-vb-navy/80 backdrop-blur-sm transition-opacity" onclick="closeModal('modal-legal')"></div>
<div className="modal-content relative bg-white dark:bg-[#030305] border border-slate-100 dark:border-white/5 rounded-2xl w-full max-w-[600px] shadow-2xl flex flex-col max-h-[80vh] overflow-hidden transform transition-all duration-300 scale-95 opacity-0">
<div className="px-8 py-6 border-b border-slate-100 dark:border-white/5 flex items-center justify-between bg-slate-50 dark:bg-transparent">
<h3 className="text-lg font-medium text-slate-900 dark:text-white tracking-tight" id="legal-title"></h3>
<button className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus:outline-none" onclick="closeModal('modal-legal')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-8 overflow-y-auto text-sm leading-relaxed text-slate-500 dark:text-slate-400 font-light space-y-4" id="legal-body"></div>
</div>
</div>





    </>
  );
}
