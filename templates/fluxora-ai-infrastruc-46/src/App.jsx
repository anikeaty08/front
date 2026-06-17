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



/* Animation on Scroll */
(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



  document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    // --- MOBILE MENU LOGIC ---
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const iconMenu = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        const isClosed = mobileMenu.classList.contains('closed');
        
        if (isClosed) {
            mobileMenu.classList.remove('closed');
            mobileMenu.classList.add('open');
            // Animate Icons
            iconMenu.style.opacity = '0';
            iconMenu.style.transform = 'scale(0.8) rotate(90deg)';
            iconClose.style.opacity = '1';
            iconClose.style.transform = 'scale(1) rotate(0deg)';
        } else {
            mobileMenu.classList.remove('open');
            mobileMenu.classList.add('closed');
            // Animate Icons
            iconMenu.style.opacity = '1';
            iconMenu.style.transform = 'scale(1) rotate(0deg)';
            iconClose.style.opacity = '0';
            iconClose.style.transform = 'scale(0.8) rotate(-90deg)';
        }
    }

    if(mobileBtn) {
        mobileBtn.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // --- TESTIMONIAL SLIDER LOGIC ---
    const avatars = document.querySelectorAll('.testimonial-avatar');
    const quoteEl = document.getElementById('testimonial-quote');
    const authorEl = document.getElementById('testimonial-author');
    let currentIndex = 0;
    let autoRotateInterval;
    const rotateDelay = 4000; 

    function showTestimonial(index) {
        if (!avatars[index]) return;

        avatars.forEach(av => {
            const img = av.querySelector('img');
            img.classList.remove('scale-110', 'ring-2', 'ring-purple-500', 'shadow-[0_0_20px_rgba(168,85,247,0.4)]', 'opacity-100', 'grayscale-0');
            img.classList.add('ring-1', 'ring-white/10', 'opacity-40', 'grayscale'); 
        });

        const activeImg = avatars[index].querySelector('img');
        activeImg.classList.remove('ring-1', 'ring-white/10', 'opacity-40', 'grayscale');
        activeImg.classList.add('scale-110', 'ring-2', 'ring-purple-500', 'shadow-[0_0_20px_rgba(168,85,247,0.4)]', 'opacity-100', 'grayscale-0');

        const newQuote = avatars[index].getAttribute('data-quote');
        const newAuthor = avatars[index].getAttribute('data-author');
        const newRole = avatars[index].getAttribute('data-role');

        const quoteTextP = quoteEl.querySelector('p');
        
        quoteTextP.style.opacity = '0';
        authorEl.style.opacity = '0';

        setTimeout(() => {
            quoteTextP.innerHTML = newQuote;
            authorEl.innerHTML = `<p class="text-base sm:text-lg text-white font-medium">${newAuthor} <span class="text-purple-300/80 font-normal block sm:inline sm:ml-2">${newRole}</span></p>`;
            quoteTextP.style.opacity = '1';
            authorEl.style.opacity = '1';
        }, 300);
    }

    function startAutoRotate() {
        stopAutoRotate();
        autoRotateInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % avatars.length;
            showTestimonial(currentIndex);
        }, rotateDelay);
    }

    function stopAutoRotate() {
        if (autoRotateInterval) clearInterval(autoRotateInterval);
    }

    avatars.forEach((avatar, index) => {
        avatar.addEventListener('mouseenter', () => {
            stopAutoRotate();
            currentIndex = index;
            showTestimonial(currentIndex);
        });
        avatar.addEventListener('mouseleave', () => {
            startAutoRotate();
        });
        avatar.addEventListener('click', () => {
            stopAutoRotate();
            currentIndex = index;
            showTestimonial(currentIndex);
             setTimeout(startAutoRotate, 6000); 
        });
    });

    startAutoRotate();
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
      

<header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-neutral-950/70 backdrop-blur-xl transition-all duration-300">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-2 group z-50 relative" href="#">
<span className="inline-flex items-center justify-center bg-white/5 w-8 h-8 rounded-lg backdrop-blur border border-white/10 group-hover:border-purple-500/30 transition-colors">
<svg className="lucide lucide-sparkles w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-base font-bold tracking-tight text-white group-hover:opacity-90 transition-opacity font-jakarta">Zodi</span>
</a>

<div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/5 shadow-inner">
<a className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200" href="#about">O Zodi</a>
<a className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200" href="#testimonials">Dla kogo</a>
<a className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200" href="#how-it-works">Jak to działa</a>
<a className="px-4 py-1.5 text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200" href="#education">Edukacja</a>
</div>

<div className="flex items-center gap-3 z-50 relative">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
</span>
<span className="text-xs text-purple-200 font-medium">v2.0 Live</span>
</div>
<button className="hidden md:inline-flex items-center justify-center rounded-full border-gradient bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.03)]" onclick="document.querySelector('#waitlist-btn').scrollIntoView({behavior: 'smooth'})">
          Dołącz
        </button>

<button className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors relative z-50" id="mobile-menu-btn">
<span className="sr-only">Otwórz menu</span>
<svg className="lucide lucide-menu w-6 h-6 transition-transform duration-300" fill="none" height="24" id="icon-menu" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg className="lucide lucide-x w-6 h-6 absolute top-2 left-2 opacity-0 scale-75 transition-all duration-300" fill="none" height="24" id="icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 12"></path></svg>
</button>
</div>
</div>
</nav>

<div className="absolute top-16 left-0 right-0 bg-neutral-950/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden closed shadow-2xl h-[calc(100vh-64px)] overflow-y-auto" id="mobile-menu">
<div className="flex flex-col space-y-4">
<a className="mobile-link text-lg font-medium text-neutral-300 hover:text-white py-2 border-b border-white/5" href="#about">O Zodi</a>
<a className="mobile-link text-lg font-medium text-neutral-300 hover:text-white py-2 border-b border-white/5" href="#testimonials">Dla kogo</a>
<a className="mobile-link text-lg font-medium text-neutral-300 hover:text-white py-2 border-b border-white/5" href="#how-it-works">Jak to działa</a>
<a className="mobile-link text-lg font-medium text-neutral-300 hover:text-white py-2 border-b border-white/5" href="#education">Edukacja</a>
<div className="pt-4">
<button className="mobile-link w-full flex items-center justify-center gap-2 rounded-full border-gradient bg-white/10 px-4 py-3 text-base font-semibold text-white transition-all active:scale-95" onclick="document.querySelector('#waitlist-btn').scrollIntoView({behavior: 'smooth'})">
          Dołącz do Zodi
          <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="mt-auto pt-8">
<p className="text-xs text-neutral-500 text-center">Zodi © 2024</p>
</div>
</div>
</div>
</header>
<div className="bg-center fixed w-full h-screen bg-cover top-0" data-alpha-mask="83" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74cd2533-99ad-409f-a8a1-047b1521a45e_3840w.jpg")', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 83%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 83%, transparent)'}}></div>

<div className="aura-background-component z-0 w-full h-screen absolute top-0 saturate-50 brightness-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<div className="fixed -z-10 overflow-hidden top-0 right-0 bottom-0 left-0">
<video autoplay="" className="w-full h-full object-cover absolute grayscale saturate-50 brightness-50" loop="" muted="" playsinline="" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}>
<source className="" src="https://cdn.coverr.co/videos/coverr-abstract-particles-floating-5158/1080p.mp4" type="video/mp4"/>
</video>
<div className="bg-neutral-950/60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<main className="z-10 relative pt-20"> 
<section className="font-medium max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-24 pl-4 space-y-6 sm:px-6 md:pb-24 lg:px-8 lg:pb-24 lg:pt-24">

<div className="grid grid-cols-1 auto-rows-[200px] md:mt-16 md:grid-cols-6 md:gap-6 lg:grid-cols-12 lg:mt-32 overflow-hidden gap-4 font-geist h-[20px] mt-16" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 60%, transparent)'}}>
</div>
<div className="[animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate text-center">
<h1 className="bg-clip-text sm:text-5xl md:text-6xl lg:text-7xl text-4xl font-bold text-slate-100 tracking-tighter font-jakarta bg-slate-300 max-w-xs max-h-none border-slate-50 rounded-sm mr-auto ml-auto pt-2 pb-6 scale-100">Zodi</h1>
<h1 className="bg-clip-text sm:text-5xl md:text-6xl lg:text-7xl text-4xl text-transparent tracking-tighter bg-gradient-to-r from-[#E348A0] via-[#a23fcc]/95 to-[#803AE9] max-w-4xl max-h-none mr-auto ml-auto pt-2 pb-2 scale-100">Influencer marketing, w jednym czacie.</h1>
<p className="sm:text-base text-base text-neutral-300 max-w-3xl mt-5 mr-auto ml-auto leading-relaxed">ZODI ograrnie influencer marketing za Ciebie. Tworzysz brief, wybierasz influencerów, wyceniasz świadczenia i zarządzasz kampanią — wszystko w jednej rozmowie. Bez Excela, bez chaosu.</p>

<div className="flex flex-col sm:flex-row mt-10 gap-x-4 gap-y-4 items-center justify-center">
<div className="inline-block group relative">
<button className="inline-flex gap-2 border-gradient hover:text-white transition-all hover:-translate-y-0.5 text-sm font-medium text-white/90 bg-white/10 rounded-full py-3 px-6 backdrop-blur-xl items-center shadow-lg" onclick="document.querySelector('#waitlist-btn').scrollIntoView({behavior: 'smooth'})" style={{borderRadius: '9999px'}}>
            Dołącz do listy oczekujących
            <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<span aria-hidden="true" className="pointer-events-none -bottom-3 z-0 -translate-x-1/2 transition-opacity duration-300 ease-out group-hover:opacity-100 opacity-0 w-44 h-6 rounded-full absolute left-1/2" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(59, 130, 246, .55), rgba(59, 130, 246, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-10 pr-4 pb-20 pl-4 relative sm:px-6 lg:px-8 lg:pb-12 lg:pt-16" id="testimonials">
<div className="overflow-hidden sm:p-8 border-gradient ring-white/10 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur" style={{background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)', borderRadius: '24px'}}>
<div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl bg-purple-500/10" style={{}}></div>

<div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center mb-12 animate">
<div className="mb-6">
<div className="flex text-[13px] sm:text-sm uppercase font-medium text-purple-400 tracking-tight items-center justify-between">
<span className="">OPINIE</span>
<span className="">(02)</span>
</div>
<div className="mt-2 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
</div>
<div className="flex flex-col sm:flex-row sm:items-end sm:items-center sm:justify-between mb-0">
<h2 className="text-3xl sm:text-4xl md:text-5xl text-white text-left mt-0 tracking-tighter">
            Co mówią nasi klienci
          </h2>
<p className="text-sm sm:text-base text-slate-300 text-left max-w-[42ch]" style={{}}>Prawdziwe opinie od zespołów używających Zodi do skalowania kampanii influencerskich.</p>
</div>
</div>

<section className="relative [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="overflow-hidden ring-white/10 ring-1 rounded-3xl p-6 sm:p-10 relative backdrop-blur border-gradient" style={{minHeight: '540px', background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)', borderRadius: '24px'}}>

<div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
<div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full blur-3xl bg-purple-500/10" style={{}}></div>
<div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-3xl bg-purple-400/10" style={{}}></div>

<div className="absolute top-6 left-6 opacity-10 text-white">
<span className="iconify" data-height="64" data-icon="solar:quote-down-circle-bold-duotone" data-width="64"></span>
</div>

<div className="flex flex-col justify-between h-full relative z-10" style={{minHeight: '420px'}}>

<blockquote className="relative text-center max-w-5xl mx-auto flex-1 flex items-center justify-center py-8" id="testimonial-quote">
<p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white tracking-tighter transition-opacity duration-300 opacity-100">
                Zodi całkowicie
                <span className="bg-clip-text text-transparent tracking-tighter bg-gradient-to-br from-[#7a3ad9] to-[#ff57e9]">zmieniło sposób</span>
                prowadzenia naszych kampanii. Pozwala nam skupić się na strategii i relacjach.
              </p>
</blockquote>

<div className="mt-4 text-center mb-10 transition-opacity duration-300 opacity-100" id="testimonial-author">
<p className="text-base sm:text-lg text-white font-medium">
                Anna Nowak <span className="text-purple-300/80 font-normal block sm:inline sm:ml-2">Head of Marketing, BrandX</span>
</p>
</div>

<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 border-t border-white/5">

<div className="testimonial-avatar group relative cursor-pointer" data-author="Anna Nowak" data-index="0" data-quote="Zodi całkowicie &lt;span className='bg-clip-text text-transparent tracking-tighter bg-gradient-to-br from-[#7a3ad9] to-[#ff57e9]'&gt;zmieniło sposób&lt;/span&gt; prowadzenia naszych kampanii. Pozwala nam skupić się na strategii i relacjach." data-role="Head of Marketing, BrandX">
<img alt="Anna Nowak" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-2 ring-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 scale-110 opacity-100 grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_320w.jpg"/>
</div>

<div className="testimonial-avatar group relative cursor-pointer" data-author="Michał Kowalski" data-index="1" data-quote="Automatyzacja w Zodi &lt;span className='text-purple-400 tracking-tighter'&gt;zaoszczędziła nam mnóstwo godzin&lt;/span&gt; tygodniowo. Nasz zespół jest bardziej produktywny, a my możemy skupić się na &lt;span className='text-purple-400 tracking-tighter'&gt;strategii marki&lt;/span&gt;." data-role="CEO, StartBoost">
<img alt="Michał Kowalski" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-1 ring-white/10 transition-all duration-300 hover:ring-white/30 hover:scale-105 opacity-40 grayscale hover:opacity-100 hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c9aa348-4474-47a8-8f1e-3fe52ac8d2b9_320w.webp"/>
</div>

<div className="testimonial-avatar group relative cursor-pointer" data-author="Ewa Rogowska" data-index="2" data-quote="Przejście na Zodi to była &lt;span className='text-purple-400 tracking-tighter'&gt;najlepsza decyzja&lt;/span&gt; w tym roku. Konfiguracja kampanii jest banalnie prosta, a współpraca z twórcami &lt;span className='text-purple-400 tracking-tighter'&gt;nigdy nie była lepsza&lt;/span&gt;." data-role="Influencer Manager, GlowUp">
<img alt="Ewa Rogowska" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-1 ring-white/10 transition-all duration-300 hover:ring-white/30 hover:scale-105 opacity-40 grayscale hover:opacity-100 hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
</div>

<div className="testimonial-avatar group relative cursor-pointer" data-author="Dawid Kamiński" data-index="3" data-quote="Inteligentne dobieranie twórców w Zodi pomaga nam &lt;span className='text-purple-400 tracking-tighter'&gt;docierać do idealnej grupy&lt;/span&gt; szybciej i pewniej. Raportowanie w czasie rzeczywistym to &lt;span className='text-purple-400 tracking-tighter'&gt;game-changer&lt;/span&gt;." data-role="Marketing Lead, TechCore">
<img alt="Dawid Kamiński" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-1 ring-white/10 transition-all duration-300 hover:ring-white/30 hover:scale-105 opacity-40 grayscale hover:opacity-100 hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a90aa9b5-558b-479a-9570-1ceaa6005110_320w.jpg"/>
</div>

<div className="testimonial-avatar group relative cursor-pointer" data-author="Justyna Park" data-index="4" data-quote="Od briefu po finalny raport, Zodi sprawia, że wszystko jest &lt;span className='text-purple-400 tracking-tighter'&gt;proste i efektywne&lt;/span&gt;. Skróciliśmy czas planowania o 40%, a satysfakcja twórców &lt;span className='text-purple-400 tracking-tighter'&gt;wzrosła&lt;/span&gt;." data-role="Operations Director, Nexus Group">
<img alt="Justyna Park" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-1 ring-white/10 transition-all duration-300 hover:ring-white/30 hover:scale-105 opacity-40 grayscale hover:opacity-100 hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eae5dceb-fa80-4934-b110-86decb2f64ac_320w.webp"/>
</div>

<div className="testimonial-avatar group relative cursor-pointer" data-author="Aleksandra Tomczyk" data-index="5" data-quote="Przejrzystość i inteligentne powiadomienia w Zodi pomagają nam być na bieżąco bez &lt;span className='text-purple-400 tracking-tighter'&gt;ciągłego sprawdzania&lt;/span&gt;. Proces akceptacji treści jest płynniejszy." data-role="Social Media Manager, Studio Bright">
<img alt="Aleksandra Tomczyk" className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-1 ring-white/10 transition-all duration-300 hover:ring-white/30 hover:scale-105 opacity-40 grayscale hover:opacity-100 hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d4bf47a-eb10-4503-a4f3-1940c4118868_320w.webp" style={{}}/>
</div>

<div className="testimonial-avatar group relative cursor-pointer" data-author="Roksana F." data-index="6" data-quote="Zodi stało się &lt;span className='text-purple-400 tracking-tighter'&gt;jedynym źródłem prawdy&lt;/span&gt; dla całego naszego zespołu. Planowanie, egzekucja i raportowanie są w jednym miejscu." data-role="Growth VP, Growth Co">
<img alt="Roksana F." className="h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover ring-1 ring-white/10 transition-all duration-300 hover:ring-white/30 hover:scale-105 opacity-40 grayscale hover:opacity-100 hover:grayscale-0" src="https://images.unsplash.com/photo-1544717305-2782549b5136?w=96&amp;h=96&amp;fit=crop&amp;crop=faces"/>
</div>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 mb-24 relative" id="about">
<div className="pointer-events-none absolute -z-10 inset-0">
<div className="absolute -top-10 -left-10 h-80 w-80 rounded-full blur-3xl bg-purple-500/10" style={{}}></div>
<div className="absolute bottom-0 right-1/3 h-64 w-64 rounded-full blur-3xl bg-purple-400/10" style={{}}></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

<div className="[animation:fadeSlideIn_0.5s_ease-out_0s_both] animate-on-scroll border-gradient bg-gradient-to-br rounded-[28px] p-2 animate from-purple-500/10 via-purple-500/5 to-purple-300/10" style={{}}>
<div className="overflow-hidden rounded-[22px] bg-black/30 ring-1 ring-white/10">
<img alt="AI platform" className="md:h-[520px] w-full h-[320px] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44282daa-1513-456b-8858-9ce959226ba1_1600w.webp" style={{}}/>
</div>
</div>

<div className="[animation:fadeSlideIn_0.5s_ease-out_0.1s_both] animate-on-scroll animate">
<div className="inline-flex items-center gap-2 text-sm text-purple-200/80" style={{}}>
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/10 bg-purple-500/15" style={{}}>
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="">O Zodi</span>
</div>
<h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter">
          Inteligentna platforma, wyjątkowe wyniki.
        </h2>
<p className="mt-5 text-base md:text-lg leading-relaxed text-white/70 max-w-2xl">
          Zodi łączy zaawansowaną technologię AI z intuicyjnym designem, aby pomóc Ci budować i skalować kampanie szybciej. Nasza platforma daje zespołom pełną kontrolę nad relacjami z twórcami.
        </p>
<div className="mt-8">
<a className="group inline-flex items-center gap-2 hover:opacity-90 transition-opacity border-gradient text-sm font-medium text-slate-50 bg-gradient-to-tr from-[#4e18a0] via-[#8551b8] to-[#ff57e9] rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_8px_30px_rgba(59,130,246,0.25)]" href="#" style={{borderRadius: '9999px'}}>Poznaj naszą historię<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-black/10 text-black">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-white" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span></a>
</div>

<div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 [animation:fadeSlideIn_0.5s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
<h3 className="text-base tracking-tight text-white font-semibold leading-none">Błyskawiczny start</h3>
<p className="mt-3 text-sm text-neutral-400" style={{}}>Uruchamiaj kampanie w minuty, nie miesiące.</p>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
<h3 className="text-base tracking-tight text-white font-semibold leading-none">Moc AI</h3>
<p className="mt-3 text-sm text-neutral-400" style={{}}>Zaawansowane algorytmy dobierają najlepszych twórców.</p>
</div>
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 border-gradient">
<h3 className="text-base tracking-tight text-white font-semibold leading-none">Pełna skalowalność</h3>
<p className="mt-3 text-sm text-neutral-400" style={{}}>Pełna kontrola i infrastruktura, która rośnie razem z Tobą.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 relative" id="how-it-works">
<div className="border-gradient sm:p-8 rounded-3xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur" style={{background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)', borderRadius: '24px'}}>

<div className="flex gap-6 pr-1 pl-1 items-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white tracking-tighter">Jak to działa.</h2>
<span aria-hidden="true" aria-orientation="vertical" className="w-px bg-white/20 h-10" role="separator"></span>
<p className="sm:text-base text-sm text-slate-300 mt-1 tracking-tight" style={{}}>Trzy proste kroki do sukcesu</p>
</div>
<div className="h-px bg-white/20 mt-4"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 mt-6 sm:mt-8 relative items-stretch">

<div className="lg:col-span-4 border-gradient rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate" style={{background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)'}}>
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-neutral-950 text-xs sm:text-sm text-white tracking-tight" style={{borderRadius: '9999px'}}>KROK 1</span>
<div className="relative h-48 sm:h-56 rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
<div className="absolute inset-0 p-4 sm:p-6">
<div className="bg-neutral-900/90 border border-white/10 rounded-xl p-4 w-full shadow-2xl" style={{}}>
<div className="flex items-center gap-2 mb-3">
<svg className="lucide lucide-file-text w-4 h-4 text-neutral-500" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<div className="h-2 w-24 bg-white/80 rounded"></div>
</div>
<div className="h-2 w-full bg-white/10 rounded mb-2"></div>
<div className="h-2 w-4/5 bg-white/10 rounded mb-2"></div>
<div className="h-2 w-3/4 bg-white/10 rounded mb-3"></div>
<div className="flex gap-2">
<div className="h-6 w-16 rounded-lg flex items-center justify-center bg-purple-400/20" style={{}}>
<div className="h-1 w-8 rounded bg-purple-400" style={{}}></div>
</div>
<div className="h-6 w-20 bg-white/10 rounded-lg"></div>
</div>
</div>
</div>
</div>
<h3 className="mt-6 text-3xl sm:text-4xl text-white tracking-tighter">Stwórz brief</h3>
<p className="sm:text-base text-sm text-neutral-300 tracking-tight max-w-[52ch] mt-2">Po prostu zdefiniuj cel kampanii, budżet i grupę docelową. Nasz system zrozumie Twoje potrzeby.</p>
</div>

<div className="lg:col-span-4 border-gradient rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate" style={{background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)'}}>
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-neutral-950 text-xs sm:text-sm text-white tracking-tight" style={{borderRadius: '9999px'}}>KROK 2</span>
<div className="relative h-48 sm:h-56 rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-br from-white/5 to-white/0 p-4">
<div className="grid grid-cols-2 gap-3 h-full">
<div className="bg-neutral-900/80 border border-white/10 rounded-lg p-3 shadow-sm" style={{}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-message-circle w-3 h-3 text-neutral-500" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<div className="h-1.5 w-12 rounded bg-purple-400" style={{}}></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-white/20 rounded"></div>
<div className="h-1 w-4/5 bg-white/20 rounded"></div>
<div className="h-1 w-3/4 bg-white/20 rounded"></div>
</div>
</div>
<div className="bg-neutral-900/80 border border-white/10 rounded-lg p-3 shadow-sm" style={{}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-users w-3 h-3 text-neutral-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div className="h-1.5 w-10 rounded bg-purple-400" style={{}}></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-white/20 rounded"></div>
<div className="h-1 w-5/6 bg-white/20 rounded"></div>
<div className="h-1 w-2/3 bg-white/20 rounded"></div>
</div>
</div>
<div className="bg-neutral-900/80 border border-white/10 rounded-lg p-3 shadow-sm" style={{}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-target w-3 h-3 text-neutral-500" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<div className="h-1.5 w-14 rounded bg-purple-400" style={{}}></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-white/20 rounded"></div>
<div className="h-1 w-4/5 bg-white/20 rounded"></div>
<div className="h-1 w-3/5 bg-white/20 rounded"></div>
</div>
</div>
<div className="bg-neutral-900/80 border border-white/10 rounded-lg p-3 shadow-sm" style={{}}>
<div className="flex items-center gap-2 mb-2">
<svg className="lucide lucide-layers w-3 h-3 text-neutral-500" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<div className="h-1.5 w-8 rounded bg-purple-400" style={{}}></div>
</div>
<div className="space-y-1">
<div className="h-1 w-full bg-white/20 rounded"></div>
<div className="h-1 w-3/4 bg-white/20 rounded"></div>
<div className="h-1 w-4/5 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>
<h3 className="mt-6 text-3xl sm:text-4xl text-white tracking-tighter">AI dobiera twórców</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-[52ch] tracking-tight" style={{}}>Nasz algorytm AI przeszukuje bazę i dopasowuje idealnych influencerów do Twojej marki w kilka sekund.</p>
</div>

<div className="lg:col-span-4 border-gradient rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate" style={{background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)'}}>
<span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/20 bg-neutral-950 text-xs sm:text-sm text-white tracking-tight" style={{borderRadius: '9999px'}}>KROK 3</span>
<div className="relative h-48 sm:h-56 rounded-2xl bg-white/5 border border-white/10 overflow-hidden p-4">
<div className="w-full h-full rounded-xl overflow-hidden bg-neutral-900/80 border border-white/10 p-3" style={{}}>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-lg flex items-center justify-center bg-purple-400/20" style={{}}>
<svg className="lucide lucide-refresh-cw w-3 h-3 text-purple-400" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<div className="h-2 w-16 bg-white/80 rounded"></div>
</div>
<div className="w-4 h-4 rounded-full bg-purple-400" style={{}}></div>
</div>
<div className="grid grid-cols-3 gap-2 mb-3">
<div className="border rounded p-2 text-center bg-purple-400/10 border-purple-400/20" style={{}}>
<svg className="lucide lucide-message-square w-3 h-3 text-purple-400 mx-auto mb-1" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<div className="h-1 w-8 rounded mx-auto bg-purple-400" style={{}}></div>
</div>
<div className="border rounded p-2 text-center bg-purple-400/10 border-purple-400/20" style={{}}>
<svg className="lucide lucide-mail w-3 h-3 text-purple-400 mx-auto mb-1" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div className="h-1 w-6 rounded mx-auto bg-purple-400" style={{}}></div>
</div>
<div className="border rounded p-2 text-center bg-purple-400/10 border-purple-400/20" style={{}}>
<svg className="lucide lucide-bar-chart-2 w-3 h-3 text-purple-400 mx-auto mb-1" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<div className="h-1 w-10 rounded mx-auto bg-purple-400" style={{}}></div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 mb-3">
<div className="border rounded p-2 text-center bg-purple-400/10 border-purple-400/20" style={{}}>
<svg className="lucide lucide-message-square w-3 h-3 text-purple-400 mx-auto mb-1" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<div className="h-1 w-8 rounded mx-auto bg-purple-400" style={{}}></div>
</div>
<div className="text-center border rounded p-2 bg-purple-400/10 border-purple-400/20" style={{}}>
<svg className="lucide lucide-mail w-3 h-3 text-purple-400 mx-auto mb-1" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div className="h-1 w-6 rounded mx-auto bg-purple-400" style={{}}></div>
</div>
<div className="border rounded p-2 text-center bg-purple-400/10 border-purple-400/20" style={{}}>
<svg className="lucide lucide-bar-chart-2 w-3 h-3 text-purple-400 mx-auto mb-1" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
<div className="h-1 w-10 rounded mx-auto bg-purple-400" style={{}}></div>
</div>
</div>
</div>
</div>
<h3 className="mt-6 text-3xl sm:text-4xl text-white tracking-tighter">Publikuj i mierz</h3>
<p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-[52ch] tracking-tight" style={{}}>Zatwierdzaj treści, publikuj i śledź wyniki swoich kampanii w czasie rzeczywistym dzięki automatycznej analityce.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 relative" id="waitlist-btn">
<div className="rounded-3xl border-gradient p-6 sm:p-8 backdrop-blur" style={{background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)', borderRadius: '24px'}}>

<div className="h-px bg-white/10 mt-4"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 sm:gap-16 mt-6 sm:mt-8">

<div className="lg:col-span-6 [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<h1 className="text-[44px] sm:text-5xl md:text-6xl leading-[1.05] text-zinc-100 tracking-tighter mb-2">Dołącz do Zodi</h1>
<p className="text-zinc-400 text-base mb-8">Wypełnij formularz, aby uzyskać wcześniejszy dostęp.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-base font-semibold text-neutral-300 tracking-tight ml-1" htmlFor="fname">Imię</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-neutral-600" id="fname" placeholder="Jan" type="text"/>
</div>
<div className="space-y-2">
<label className="text-base font-semibold text-neutral-300 tracking-tight ml-1" htmlFor="lname">Nazwisko</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-neutral-600" id="lname" placeholder="Kowalski" type="text"/>
</div>
</div>
<div className="space-y-2">
<div className="relative">
<select className="appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all cursor-pointer text-sm text-white bg-white/5 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="jobtitle">
<option className="bg-neutral-900 text-neutral-500" disabled="" selected="" value="">Wybierz stanowisko</option>
<option className="bg-neutral-900" value="owner">Właściciel / Founder</option>
<option className="bg-neutral-900" value="ceo">CEO / Prezes</option>
<option className="bg-neutral-900" value="director">Dyrektor / Head of</option>
<option className="bg-neutral-900" value="manager">Manager</option>
<option className="bg-neutral-900" value="specialist">Specjalista</option>
<option className="bg-neutral-900" value="sales">Sprzedaż</option>
<option className="bg-neutral-900" value="marketing">Marketing</option>
<option className="bg-neutral-900" value="it">IT / Produkt</option>
<option className="bg-neutral-900" value="ops">Administracja / Operacje</option>
<option className="bg-neutral-900" value="freelance">Freelancer / Konsultant</option>
<option className="bg-neutral-900" value="other">Inne</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
<svg className="lucide lucide-chevron-down w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-base font-semibold text-neutral-300 tracking-tight ml-1" htmlFor="company">Nazwa firmy</label>
<input className="focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-neutral-600 text-sm text-white bg-white/5 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" id="company" placeholder="Twoja firma" type="text"/>
</div>
<div className="space-y-2">
<label className="text-base font-semibold text-neutral-300 tracking-tight ml-1" htmlFor="email">E-mail</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-neutral-600" id="email" placeholder="jan@example.com" type="email"/>
</div>

<div className="flex items-start gap-3 pt-2">
<div className="relative flex items-center h-5">
<input className="peer h-4 w-4 shrink-0 cursor-pointer appearance-none rounded border border-neutral-600 bg-neutral-800 checked:border-purple-500 checked:bg-purple-500 hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30 transition-all" id="terms" type="checkbox"/>
<svg className="lucide lucide-check absolute left-0 top-0 h-4 w-4 hidden peer-checked:block text-white pointer-events-none p-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<label className="leading-4 select-none cursor-pointer text-base text-neutral-400 tracking-tight" htmlFor="terms">
                 Akceptuję warunki - <a className="text-white hover:text-purple-300 hover:underline transition-colors" href="#">Regulamin</a> i <a className="hover:text-purple-300 hover:underline transition-colors text-white" href="#">Polityka prywatności</a>.
              </label>
</div>
<div className="pt-4 flex justify-start">
<button className="group inline-flex gap-2 hover:opacity-90 transition-all border-gradient hover:bg-neutral-200 text-base font-semibold text-slate-950 tracking-tight bg-white w-3/4 rounded-full px-6 py-3.5 shadow-[0_1px_2px_rgba(0,0,0,0.1)] gap-x-2 gap-y-2 items-center justify-center" style={{borderRadius: '9999px'}} type="submit">
                Dołącz
                <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>

<div className="lg:col-span-6 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="relative mx-auto w-full max-w-[860px]" style={{filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.6))'}}>
<div className="rounded-[28px] bg-neutral-900/60 ring-1 ring-white/10 p-3" style={{}}>
<div className="relative overflow-hidden rounded-[22px] bg-neutral-950 border border-white/10" style={{}}>
<div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
<span className="h-3 w-3 rounded-full bg-zinc-700"></span>
<span className="h-3 w-3 rounded-full bg-zinc-700/70"></span>
<span className="h-3 w-3 rounded-full bg-zinc-700/50"></span>
</div>
<div className="p-4 sm:p-6">
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300" style={{}}>
<img alt="Project" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1764162051223-8c4a22d682c4?w=320&amp;q=80" style={{}}/>
<div className="bg-gradient-to-b from-black/0 via-black/20 to-black/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300" style={{}}>
<img alt="Project" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1530047139082-5435ca3c4614?w=320&amp;q=80" style={{}}/>
<div className="bg-gradient-to-b from-black/0 via-black/20 to-black/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 md:row-span-2 hover:scale-105 transition-transform duration-300" style={{}}>
<img alt="Project" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1753162661178-dc4bd78b4cc5?w=320&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300" style={{}}>
<img alt="Project" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1713371660818-f4cc63909a78?w=320&amp;q=80" style={{}}/>
<div className="bg-gradient-to-b from-black/0 via-black/20 to-black/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900 hover:scale-105 transition-transform duration-300" style={{}}>
<img alt="Project" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1507762650978-d61dd200297f?w=320&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/50"></div>
</div>
</div>
</div>
<div className="pointer-events-none absolute -right-24 bottom-0 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
<div className="pointer-events-none absolute -left-24 -top-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32 mb-16" id="education">
<div className="rounded-3xl border-gradient p-8 sm:p-12 backdrop-blur" style={{background: 'linear-gradient(225deg,rgba(255,255,255,0.0) 0%,rgba(255,255,255,0.05) 50%,rgba(255,255,255,0.0) 100%)', borderRadius: '24px'}}>
<div className="flex flex-col md:flex-row justify-between gap-12">

<div className="max-w-sm">
<a className="flex items-center gap-3 mb-4" href="#">
<span className="inline-flex items-center justify-center bg-white/10 w-9 h-9 rounded-full backdrop-blur border-gradient" style={{borderRadius: '9999px'}}>
<svg className="lucide lucide-sparkles w-4 h-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Zodi</span>
</a>
<p className="text-sm text-neutral-400" style={{}}>Napędzamy nową falę influencer marketingu dzięki inteligentnej infrastrukturze i AI.</p>
</div>

<div className="flex flex-col sm:flex-row gap-12 sm:gap-24">
<div>
<h4 className="text-sm font-semibold text-white mb-4">Menu</h4>
<ul className="space-y-3 text-sm text-neutral-400" style={{}}>
<li className=""><a className="hover:text-white transition-colors" href="#about">O Zodi</a></li>
<li><a className="hover:text-white transition-colors" href="#testimonials">Dla kogo</a></li>
<li><a className="hover:text-white transition-colors" href="#how-it-works">Jak to działa</a></li>
<li><a className="hover:text-white transition-colors" href="#education">Edukacja</a></li>
</ul>
</div>
</div>
</div>
<div className="h-px bg-white/10 my-8"></div>
<div className="flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-400" style={{}}>© 2025 Generation 9. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-neutral-400 hover:text-white transition-colors" href="#" style={{}}>
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
