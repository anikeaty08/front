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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
wood: {
50: '#F9F7F4',
100: '#F0EBE3',
200: '#E2D6C6',
300: '#CDBCA6',
400: '#B09678',
500: '#947452',
600: '#7A5C40',
700: '#614732',
800: '#4A3628',
900: '#382920',
950: '#241A14',
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.07%22/%3E%3C/svg%3E')",
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
}
}
}
}



                    // Simple script to inject 20 images to keep HTML clean
                    const galleryContainer = document.getElementById('extra-gallery');
                    const images = [
                        'photo-1588854337221-4cf9fa96059c', 'photo-1600585154526-990dced4db0d', 'photo-1600607686527-6fb886090705', 
                        'photo-1600566752355-35792bedcfe1', 'photo-1503602642458-232111445657', 'photo-1616486338812-3dadae4b4ace',
                        'photo-1618221195710-dd6b41faaea6', 'photo-1616137466211-f939a420be84', 'photo-1615529182904-14819c35db37',
                        'photo-1595514020180-8c24f4129f71', 'photo-1595428774223-ef52624120d2', 'photo-1533090481720-856c6e3c1fdc',
                        'photo-1502005229762-cf1b2da7c5d6', 'photo-1505691938895-1758d7feb511', 'photo-1517705008128-361805f42e86',
                        'photo-1501183638710-841dd1904471', 'photo-1513694203232-719a280e022f', 'photo-1540932296774-3ed69c3a9640',
                        'photo-1598300042247-d088f8ab3a91', 'photo-1600210492486-724fe5c67fb0'
                    ];
                    
                    images.forEach((imgId, index) => {
                        const div = document.createElement('div');
                        div.className = 'group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in';
                        div.innerHTML = `
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0">
                            <div class="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
                        `;
                        galleryContainer.appendChild(div);
                    });
                


        // Gallery expansion logic
        function toggleGallery() {
            const extra = document.getElementById('extra-gallery');
            const btnText = document.getElementById('gallery-btn-text');
            const btnIcon = document.getElementById('gallery-btn-icon');
            
            if (!extra.classList.contains('expanded')) {
                extra.classList.add('expanded');
                btnText.innerText = 'Skrýt galerii';
                btnIcon.classList.add('rotate-180');
            } else {
                extra.classList.remove('expanded');
                btnText.innerText = 'Zobrazit více realizací';
                btnIcon.classList.remove('rotate-180');
                // Scroll back to top of gallery slightly
                document.getElementById('galerie').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
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
      

<div className="fixed inset-0 z-0 pointer-events-none bg-noise mix-blend-multiply opacity-60"></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="lg:px-12 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group z-50 relative" href="#">
<div className="w-10 h-10 bg-wood-800 text-wood-50 flex items-center justify-center rounded-sm shadow-lg shadow-wood-200/50 group-hover:bg-wood-700 transition-colors">
<span className="font-serif font-bold text-xl">V</span>
</div>
<div className="flex flex-col">
<span className="text-wood-900 leading-none text-xl font-semibold tracking-tight font-serif">Truhlářství Viktor Vlk</span>
<span className="text-[10px] tracking-[0.2em] uppercase text-wood-500 mt-1 font-medium">Horní Skrýchov</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 lg:gap-12">
<a className="text-sm font-medium text-wood-700/80 hover:text-wood-900 transition-colors tracking-wide" href="#o-nas">Příběh</a>
<a className="text-sm font-medium text-wood-700/80 hover:text-wood-900 transition-colors tracking-wide" href="#sluzby">Služby</a>
<a className="text-sm font-medium text-wood-700/80 hover:text-wood-900 transition-colors tracking-wide" href="#galerie">Realizace</a>
<a className="group relative px-6 py-2.5 bg-wood-800 text-wood-50 text-sm font-medium rounded-sm overflow-hidden shadow-lg shadow-wood-300/50 transition-all hover:shadow-xl hover:shadow-wood-400/40" href="#kontakt">
<span className="relative z-10 flex items-center gap-2">
                        Poptat výrobu
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<div className="absolute inset-0 bg-wood-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</a>
</div>

<button className="md:hidden text-wood-900 p-2 z-50 relative" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden absolute top-0 left-0 w-full h-screen bg-wood-50 flex flex-col items-center justify-center gap-8 z-40 md:hidden" id="mobile-menu">
<a className="font-serif text-3xl text-wood-900" href="#o-nas" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Příběh</a>
<a className="font-serif text-3xl text-wood-900" href="#sluzby" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Služby</a>
<a className="font-serif text-3xl text-wood-900" href="#galerie" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Realizace</a>
<a className="text-lg bg-wood-800 text-white px-8 py-3 rounded-sm" href="#kontakt" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Kontakt</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden z-10">

<div className="absolute inset-0 z-0">
<img alt="Detail opracování dřeva v dílně" className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1675063715178-7b7795b6e025?w=3840&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-b from-wood-50/90 via-transparent to-wood-950/80"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
<div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="inline-block py-1 px-3 border border-wood-200/30 bg-white/10 backdrop-blur-sm rounded-full text-wood-100 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
                    Zakázkové truhlářství Vlk
                </span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-wood-50 tracking-tight leading-[1.05] mb-8 animate-fade-in-up drop-shadow-lg" style={{animationDelay: '0.2s'}}>
                Kde dřevo získává<br/>
<span className="italic text-wood-200 font-light">duši a tvar</span>
</h1>
<p className="text-wood-100/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                Rodinná dílna Viktora Vlka. Tvoříme poctivá schodiště, dveře a masivní nábytek, který s vámi zestárne do krásy.
            </p>
<div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<a className="min-w-[200px] bg-wood-100 text-wood-900 px-8 py-4 rounded-sm font-semibold hover:bg-white transition-all duration-300 shadow-xl shadow-black/20 hover:scale-[1.02]" href="#kontakt">
                    Nezávazná poptávka
                </a>
<a className="min-w-[200px] flex items-center justify-center gap-2 text-wood-100 border border-wood-200/30 px-8 py-4 rounded-sm font-medium hover:bg-wood-900/40 transition-colors backdrop-blur-sm" href="#galerie">
                    Prohlédnout práci
                </a>
</div>
</div>
</header>

<section className="py-24 md:py-32 relative z-10 bg-wood-50" id="o-nas">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="reveal-on-scroll">
<span className="text-wood-600 text-xs font-bold tracking-widest uppercase mb-4 block flex items-center gap-2">
<span className="w-8 h-[1px] bg-wood-400"></span>
                        O nás
                    </span>
<h2 className="font-serif text-4xl md:text-5xl text-wood-900 tracking-tight mb-8">
                        Nejsme továrna.<br/>Jsme truhlářská dílna.
                    </h2>
<div className="space-y-6 text-wood-700/80 text-lg leading-relaxed font-light">
<p>
                            Jmenuji se <strong>Viktor Vlk</strong> a dřevo mě provází celým životem. V naší dílně v Horním Skrýchově nevyrábíme anonymní kusy nábytku. Každý projekt je osobní dialog mezi materiálem a vaším prostorem.
                        </p>
<p>
                            Věříme v poctivost řemesla, které se nikam nežene. Vůně čerstvě ohoblovaného dubu, přesnost spoje, který drží bez hřebíků, a povrchová úprava, které se chcete dotýkat. To je naše definice kvality.
                        </p>
<p>
                            Ať už jde o složité samonosné schodiště nebo jídelní stůl pro celou rodinu, vždy dbáme na to, aby výsledek sloužil nejen vám, ale i dalším generacím.
                        </p>
</div>
<div className="mt-10 pt-10 border-t border-wood-200 flex items-center gap-6">
<div className="flex -space-x-4">

<div className="w-12 h-12 rounded-full bg-wood-200 border-2 border-wood-50 flex items-center justify-center text-wood-700">
<svg aria-hidden="true" data-icon="lucide:hammer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<div className="w-12 h-12 rounded-full bg-wood-300 border-2 border-wood-50 flex items-center justify-center text-wood-800">
<svg aria-hidden="true" data-icon="lucide:ruler" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-12 h-12 rounded-full bg-wood-400 border-2 border-wood-50 flex items-center justify-center text-wood-900">
<svg aria-hidden="true" data-icon="lucide:thumbs-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div>
<p className="text-wood-900 font-serif italic text-lg">"Kvalita je, když se vrací zákazník, ne zboží."</p>
<p className="text-xs uppercase tracking-wider text-wood-500 mt-1">— Viktor Vlk, Majitel</p>
</div>
</div>
</div>

<div className="relative reveal-on-scroll delay-200">
<div className="absolute -top-4 -right-4 w-32 h-32 bg-wood-200/50 rounded-sm -z-10"></div>
<div className="absolute -bottom-6 -left-6 w-48 h-48 border border-wood-300 rounded-sm -z-10"></div>
<img alt="Viktor Vlk v dílně" className="w-full h-auto object-cover rounded-sm shadow-2xl shadow-wood-900/10 grayscale-[10%] sepia-[15%] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1968d33c-2959-4831-9ac0-1d168c8a1d28_3840w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-wood-100/50 relative z-10" id="sluzby">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<span className="text-wood-600 text-xs font-bold tracking-widest uppercase mb-3 block">Naše specializace</span>
<h2 className="font-serif text-4xl md:text-5xl text-wood-900 tracking-tight mb-6">Co pro vás vyrobíme</h2>
<p className="text-wood-700/80 text-lg font-light">
                    Od hrubého prkna až po finální montáž u vás doma. Zaměřujeme se na zakázkovou výrobu, kde standardní řešení nestačí.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-wood-50 p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-wood-200/60 reveal-on-scroll">
<div className="w-14 h-14 bg-wood-100 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-wood-800 group-hover:text-wood-50 transition-colors">
<svg aria-hidden="true" data-icon="lucide:footprints" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62c-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">Dřevěná schodiště</h3>
<p className="text-wood-600 text-sm leading-relaxed mb-4">
                        Samonosná schodiště, která se stanou dominantou interiéru, nebo precizní obklady betonových schodů.
                    </p>
<ul className="text-xs text-wood-500 space-y-2 border-t border-wood-200 pt-4">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Samonosné konstrukce</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Zábradlí na míru</li>
</ul>
</div>

<div className="group bg-wood-50 p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-wood-200/60 reveal-on-scroll delay-100">
<div className="w-14 h-14 bg-wood-100 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-wood-800 group-hover:text-wood-50 transition-colors">
<svg aria-hidden="true" data-icon="lucide:door-open" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">Dveře a zárubně</h3>
<p className="text-wood-600 text-sm leading-relaxed mb-4">
                        Interiérové i vchodové dveře z masivu. Včetně výroby a montáže obložkových zárubní pro dokonalý detail.
                    </p>
<ul className="text-xs text-wood-500 space-y-2 border-t border-wood-200 pt-4">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Masivní rámové</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Vysoká bezpečnost</li>
</ul>
</div>

<div className="group bg-wood-50 p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-wood-200/60 reveal-on-scroll delay-200">
<div className="w-14 h-14 bg-wood-100 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-wood-800 group-hover:text-wood-50 transition-colors">
<svg aria-hidden="true" data-icon="lucide:armchair" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
</div>
<h3 className="font-serif text-xl text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">Nábytek z masivu</h3>
<p className="text-wood-600 text-sm leading-relaxed mb-4">
                        Stoly, které přežijí věky, postele, skříně a solitéry. Nábytek navržený pro váš konkrétní prostor.
                    </p>
<ul className="text-xs text-wood-500 space-y-2 border-t border-wood-200 pt-4">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Olej / Lak / Vosk</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Tradiční spoje</li>
</ul>
</div>

<div className="group bg-wood-50 p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-wood-200/60 reveal-on-scroll delay-300">
<div className="w-14 h-14 bg-wood-100 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-wood-800 group-hover:text-wood-50 transition-colors">
<svg aria-hidden="true" data-icon="lucide:pencil-ruler" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M13 7L8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13m1-7l2-2m8 12l2-2m-3-3l4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">Atypická výroba</h3>
<p className="text-wood-600 text-sm leading-relaxed mb-4">
                        Máte specifické přání? Vyrobíme cokoliv, co technologie dřeva dovolí. Kompletní realizace interiérů.
                    </p>
<ul className="text-xs text-wood-500 space-y-2 border-t border-wood-200 pt-4">
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Zaměření na místě</li>
<li className="flex items-center gap-2"><svg aria-hidden="true" data-icon="lucide:check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>Odborná montáž</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative z-10" id="galerie">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-on-scroll">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-on-scroll">
<div className="w-full md:w-auto">
<span className="text-wood-600 text-xs font-bold tracking-widest uppercase mb-3 block">Fotogalerie</span>
<h2 className="font-serif text-4xl text-wood-900 tracking-tight">Vybrané realizace</h2>
</div>
<p className="text-wood-500 text-sm max-w-sm text-left w-full md:w-auto">
                        Inspirujte se naší prací. Každý kus je originál.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
<div className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-zoom-in reveal-on-scroll">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-serif text-lg">Masivní schodiště</p>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-zoom-in reveal-on-scroll delay-100">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-serif text-lg">Obývací stěna</p>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-zoom-in reveal-on-scroll delay-200">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-serif text-lg">Kuchyně na míru</p>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-zoom-in reveal-on-scroll">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-serif text-lg">Dubové dveře</p>
</div>
</div>
<div className="group relative aspect-[4/3] md:col-span-2 lg:col-span-2 overflow-hidden rounded-sm cursor-zoom-in reveal-on-scroll delay-100">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-serif text-lg">Kompletní interiér</p>
</div>
</div>
</div>

<div className="gallery-content grid grid-cols-2 md:grid-cols-4 gap-4" id="extra-gallery">


<div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div><div className="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-wood-900/0 group-hover:bg-wood-900/10 transition-colors"></div>
</div>
</div>

<div className="mt-12 text-center reveal-on-scroll">
<button className="group inline-flex items-center gap-2 text-wood-900 border-b border-wood-900 pb-1 hover:text-wood-600 hover:border-wood-600 transition-all text-sm font-semibold tracking-wide uppercase" onclick="toggleGallery()">
<span id="gallery-btn-text">Zobrazit více realizací</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" id="gallery-btn-icon" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 bg-wood-100/30 border-t border-wood-200">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<h2 className="font-serif text-3xl md:text-4xl text-wood-900 text-center mb-16 reveal-on-scroll">Co o nás říkají zákazníci</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow reveal-on-scroll">
<div className="flex text-wood-500 mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-wood-700/90 italic mb-6 leading-relaxed">"Nechali jsme si od pana Vlka vyrobit schodiště i vchodové dveře. Precizní práce, vše sedí na milimetr. Oceňuji hlavně dodržení termínu a čistotu po montáži."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-wood-100 rounded-full flex items-center justify-center font-serif font-bold text-wood-700">P</div>
<div>
<p className="font-semibold text-wood-900 text-sm">Petr Novotný</p>
<p className="text-xs text-wood-400">Jindřichův Hradec</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow reveal-on-scroll delay-100">
<div className="flex text-wood-500 mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-wood-700/90 italic mb-6 leading-relaxed">"Skvělá domluva a férové jednání. Potřebovali jsme atypický stůl z masivu a výsledek předčil očekávání. Krásné dřevo, perfektní povrchová úprava."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-wood-100 rounded-full flex items-center justify-center font-serif font-bold text-wood-700">J</div>
<div>
<p className="font-semibold text-wood-900 text-sm">Jana Dvořáková</p>
<p className="text-xs text-wood-400">Třeboň</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow reveal-on-scroll delay-200">
<div className="flex text-wood-500 mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-wood-700/90 italic mb-6 leading-relaxed">"Dlouho jsme hledali truhláře, který umí staré poctivé řemeslo. Pan Vlk je odborník na svém místě. Doporučuji všem, kdo chtějí kvalitu."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-wood-100 rounded-full flex items-center justify-center font-serif font-bold text-wood-700">M</div>
<div>
<p className="font-semibold text-wood-900 text-sm">Martin Svoboda</p>
<p className="text-xs text-wood-400">Dačice</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-wood-900 text-wood-50 py-24 relative overflow-hidden" id="kontakt">

<div className="absolute top-0 right-0 w-1/3 h-full bg-wood-800/30 skew-x-12 transform translate-x-20"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="reveal-on-scroll">
<span className="text-wood-400 text-xs font-bold tracking-widest uppercase mb-4 block">Kontakt</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-8">Zastavte se za námi<br/>v dílně</h2>
<p className="text-wood-200/80 mb-12 font-light max-w-md">
                        Máte představu o svém projektu? Zavolejte nám nebo napište. Rádi s vámi probereme materiály, ukážeme vzorky a připravíme kalkulaci.
                    </p>
<div className="space-y-8">
<div className="flex items-start gap-4 group">
<div className="p-3 rounded-sm bg-wood-800 group-hover:bg-wood-700 transition-colors">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div className="">
<h4 className="text-lg font-serif mb-1">Adresa dílny</h4>
<p className="text-wood-300 font-light">Horní Skrýchov 20377 01 Jindřichův Hradec</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 rounded-sm bg-wood-800 group-hover:bg-wood-700 transition-colors">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-lg font-serif mb-1">Telefon</h4>
<a className="text-wood-300 font-light hover:text-white transition-colors block text-lg" href="tel:+420777904730">+420 777 904 730</a>
<span className="text-xs text-wood-500">Viktor Vlk</span>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 rounded-sm bg-wood-800 group-hover:bg-wood-700 transition-colors">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<h4 className="text-lg font-serif mb-1">Email</h4>
<a className="text-wood-300 font-light hover:text-white transition-colors" href="mailto:viktor.vlk@seznam.cz">viktor.vlk@seznam.cz</a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-wood-800">
<p className="text-xs text-wood-500 uppercase tracking-widest">Fakturační údaje</p>
<p className="text-wood-400 mt-2 font-mono text-sm">IČ: 72149922</p>
</div>
</div>

<div className="reveal-on-scroll delay-100">
<form className="bg-wood-50 p-8 md:p-10 rounded-sm shadow-2xl shadow-black/30">
<h3 className="text-wood-900 font-serif text-2xl mb-6">Napište nám</h3>
<div className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="name">Jméno</label>
<input className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300 rounded-t-sm" id="name" placeholder="Váš jméno" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="phone">Telefon</label>
<input className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300 rounded-t-sm" id="phone" placeholder="+420" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="email">Email</label>
<input className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300 rounded-t-sm" id="email" placeholder="vas@email.cz" type="email"/>
</div>
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="message">O co máte zájem?</label>
<textarea className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300 rounded-t-sm resize-none" id="message" placeholder="Popište stručně svou poptávku..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3 mt-4">
<input className="mt-1 accent-wood-600" id="consent" type="checkbox"/>
<label className="text-xs text-wood-500" htmlFor="consent">Souhlasím se zpracováním osobních údajů pro účely komunikace.</label>
</div>
<button className="w-full mt-4 bg-wood-800 text-white font-medium py-4 px-6 rounded-sm hover:bg-wood-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg" type="submit">
                                Odeslat zprávu
                                <svg aria-hidden="true" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<div className="w-full h-80 grayscale invert-[0.1] contrast-[0.9]">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.583489810842!2d15.02263437691882!3d49.16781997138334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d14ea1740685b%3A0x6b69324706598379!2sHorn%C3%AD%20Skr%C3%BDchov%2020%2C%20377%2001%20Jind%C5%99ich%C5%AFv%20Hradec!5e0!3m2!1scs!2scz!4v1709845612345!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
</div>

<footer className="bg-wood-950 py-12 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="font-serif text-2xl text-wood-50 tracking-tight">Truhlářství Vlk</span>
<p className="text-wood-600 text-xs font-mono mt-2">© 2026 Všechna práva vyhrazena. BLEY.cz</p>
</div>
<div className="flex flex-col md:flex-row gap-6 md:gap-10 text-center md:text-right">
<a className="text-wood-400 hover:text-white text-sm transition-colors" href="#o-nas">O nás</a>
<a className="text-wood-400 hover:text-white text-sm transition-colors" href="#sluzby">Služby</a>
<a className="text-wood-400 hover:text-white text-sm transition-colors" href="#kontakt">Kontakt</a>
</div>
</div>
</footer>



    </>
  );
}
