import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
letterSpacing: {
tightest: '-0.02em',
},
colors: {
wood: {
50: '#F9F7F5',
100: '#EBE5DE',
200: '#DCD3C9',
300: '#C5B5A5',
400: '#A48F7A',
500: '#8B6E56',  /* Primary Warm Brown */
600: '#6F5442',
700: '#543D30',
800: '#3E2B22',  /* Dark Text */
900: '#2A1D17',
},
cream: '#FBF9F6',
},
backgroundImage: {
'grain': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E')",
}
}
}
}



        // Gallery Toggle Function
        function toggleGallery() {
            const gallery = document.getElementById('hidden-gallery');
            const btnText = document.getElementById('btn-text');
            const btnIcon = document.getElementById('btn-icon');
            
            if (gallery.classList.contains('is-open')) {
                gallery.classList.remove('is-open');
                btnText.textContent = "Zobrazit více realizací";
                btnIcon.style.transform = "rotate(0deg)";
                // Optional: Scroll back to top of gallery area lightly
                document.getElementById('galerie').scrollIntoView({ behavior: 'smooth' });
            } else {
                gallery.classList.add('is-open');
                btnText.textContent = "Skrýt galerii";
                btnIcon.style.transform = "rotate(180deg)";
            }
        }

        // Scroll Animation Observer
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
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
            
            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-sm');
                    navbar.classList.add('bg-white/95');
                } else {
                    navbar.classList.remove('shadow-sm');
                    navbar.classList.remove('bg-white/95');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 bg-grain mix-blend-multiply opacity-60"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-wood-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
<a className="flex flex-col group" href="#">
<span className="font-serif text-2xl lg:text-3xl text-wood-900 leading-none tracking-tight group-hover:text-wood-600 transition-colors">VM nábytek</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-wood-500 font-semibold mt-1">Interiéry na míru</span>
</a>
<div className="hidden lg:flex items-center gap-10">
<a className="text-sm font-medium text-wood-600 hover:text-wood-900 tracking-wide transition-colors" href="#o-nas">O NÁS</a>
<a className="text-sm font-medium text-wood-600 hover:text-wood-900 tracking-wide transition-colors" href="#sluzby">SLUŽBY</a>
<a className="text-sm font-medium text-wood-600 hover:text-wood-900 tracking-wide transition-colors" href="#galerie">REALIZACE</a>
<a className="bg-wood-800 text-wood-50 px-6 py-2.5 text-sm font-medium hover:bg-wood-700 transition-all duration-300 shadow-lg shadow-wood-900/10" href="#kontakt">
                    Kontaktovat
                </a>
</div>
<button aria-label="Menu" className="lg:hidden text-wood-800">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden z-10">

<div className="absolute inset-0 z-0">
<img alt="Moderní interiér s dřevěnými prvky" className="w-full h-full object-cover object-center brightness-[0.85] scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aabac76d-ac03-47b1-be1c-fca16fa43e96_3840w.jpg"/>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-wood-900/40 z-10 pointer-events-none"></div>

<div className="relative z-20 text-center max-w-4xl px-6 reveal-on-scroll">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-wood-50 text-xs tracking-[0.15em] uppercase font-semibold mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-wood-200"></span>
                Jindřichův Hradec &amp; Okolí
            </div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] mb-8 drop-shadow-sm">
                Domov, který <br/> <span className="text-wood-100 italic font-light pr-2">má duši.</span>
</h1>
<p className="text-wood-100/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
                Od návrhu po montáž. Vyrábíme kuchyně, vestavěné skříně a nábytek, který spojuje precizní řemeslo s vaším životním stylem.
            </p>
<div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
<a className="min-w-[200px] bg-wood-100 text-wood-900 px-8 py-4 text-sm tracking-wider font-semibold hover:bg-white transition-all duration-300 shadow-xl shadow-black/10" href="#kontakt">
                    NEZÁVAZNÁ POPTÁVKA
                </a>
<a className="min-w-[200px] flex items-center justify-center gap-2 text-white border border-white/40 px-8 py-4 text-sm tracking-wider font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm" href="#sluzby">
                    NAŠE SLUŽBY
                </a>
</div>
</div>
</header>

<section className="py-24 lg:py-32 relative z-10 bg-cream" id="o-nas">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<span className="text-wood-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">O společnosti VM Nábytek</span>
<h2 className="font-serif text-4xl md:text-5xl text-wood-900 tracking-tight leading-none mb-8">
                        Poctivé řemeslo <br/><span className="italic text-wood-600">z jižních Čech.</span>
</h2>
<div className="space-y-6 text-wood-700/80 font-light text-lg leading-relaxed">
<p>
                            V srdci Jindřichova Hradce píšeme příběh společnosti <strong>VM nábytek, s.r.o.</strong>, kde se tradiční truhlářské postupy snoubí s moderním designem. Nejsme jen výrobci nábytku; jsme tvůrci prostoru, ve kterém žijete.
                        </p>
<p>
                            Naše dílna "Na Piketě" je místem, kde se surové dřevo mění v trvalé hodnoty. Zakládáme si na osobním přístupu ke každému zákazníkovi – ať už potřebujete vybavit malý dětský pokoj, nebo realizovat kompletní interiér luxusní vily.
                        </p>
</div>
<div className="mt-10 pt-8 border-t border-wood-200 grid grid-cols-2 gap-8">
<div>
<span className="font-serif text-3xl text-wood-800 block mb-1">100%</span>
<span className="text-xs uppercase tracking-widest text-wood-500 font-semibold">Česká výroba</span>
</div>
<div>
<span className="font-serif text-3xl text-wood-800 block mb-1">Komplexní</span>
<span className="text-xs uppercase tracking-widest text-wood-500 font-semibold">Služby od A do Z</span>
</div>
</div>
</div>

<div className="relative reveal-on-scroll transition-delay-200">
<div className="aspect-[4/5] overflow-hidden bg-wood-200">
<img alt="Truhlářská dílna detail práce" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1737740068972-d3457e694bac?w=1600&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -left-8 w-48 h-48 bg-wood-100 p-8 hidden md:flex flex-col justify-center items-center text-center shadow-lg">
<svg aria-hidden="true" data-icon="lucide:award" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
<p className="font-serif text-lg leading-tight text-wood-800">Kvalita bez kompromisů</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-wood-50 relative z-10 border-t border-wood-200/50" id="sluzby">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<span className="text-wood-500 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Naše Specializace</span>
<h2 className="font-serif text-4xl md:text-5xl text-wood-900 tracking-tight">Co pro vás vytvoříme</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-white border border-wood-100 hover:border-wood-300 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-500 reveal-on-scroll">
<div className="w-12 h-12 bg-wood-100 text-wood-700 flex items-center justify-center rounded-sm mb-6 group-hover:bg-wood-800 group-hover:text-wood-100 transition-colors">
<span className="iconify" data-icon="lucide:ruler-compass" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="font-serif text-2xl text-wood-900 mb-4">Zakázková výroba</h3>
<p className="text-wood-600/90 text-sm leading-relaxed mb-6 font-light">
                        Specializujeme se na kuchyně na míru, vestavěné skříně a atypický interiérový nábytek. Každý milimetr prostoru využijeme efektivně a esteticky.
                    </p>
<ul className="space-y-2">
<li className="flex items-center text-xs font-medium text-wood-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-3"></span> Kuchyňské linky
                        </li>
<li className="flex items-center text-xs font-medium text-wood-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-3"></span> Vestavby
                        </li>
</ul>
</div>

<div className="group p-8 bg-white border border-wood-100 hover:border-wood-300 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-500 reveal-on-scroll transition-delay-100">
<div className="w-12 h-12 bg-wood-100 text-wood-700 flex items-center justify-center rounded-sm mb-6 group-hover:bg-wood-800 group-hover:text-wood-100 transition-colors">
<svg aria-hidden="true" data-icon="lucide:armchair" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
</div>
<h3 className="font-serif text-2xl text-wood-900 mb-4">Prodejna &amp; Showroom</h3>
<p className="text-wood-600/90 text-sm leading-relaxed mb-6 font-light">
                        V naší prodejně v Jindřichově Hradci nabízíme široký sortiment bytového zařízení. Od kvalitních matrací a roštů až po sedací soupravy a dětské pokoje.
                    </p>
<ul className="space-y-2">
<li className="flex items-center text-xs font-medium text-wood-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-3"></span> Postele a matrace
                        </li>
<li className="flex items-center text-xs font-medium text-wood-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-3"></span> Sedací soupravy
                        </li>
</ul>
</div>

<div className="group p-8 bg-white border border-wood-100 hover:border-wood-300 hover:shadow-xl hover:shadow-wood-900/5 transition-all duration-500 reveal-on-scroll transition-delay-200">
<div className="w-12 h-12 bg-wood-100 text-wood-700 flex items-center justify-center rounded-sm mb-6 group-hover:bg-wood-800 group-hover:text-wood-100 transition-colors">
<svg aria-hidden="true" data-icon="lucide:hammer" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="font-serif text-2xl text-wood-900 mb-4">Kompletní realizace</h3>
<p className="text-wood-600/90 text-sm leading-relaxed mb-6 font-light">
                        Postaráme se o vše. Od prvotního návrhu a vizualizace, přes precizní výrobu v naší dílně, až po profesionální montáž a následný servis u vás doma.
                    </p>
<ul className="space-y-2">
<li className="flex items-center text-xs font-medium text-wood-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-3"></span> Návrh interiéru
                        </li>
<li className="flex items-center text-xs font-medium text-wood-500 uppercase tracking-wide">
<span className="w-1.5 h-1.5 bg-wood-400 rounded-full mr-3"></span> Doprava a montáž
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-wood-900 text-wood-50 relative z-10 overflow-hidden" id="galerie">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll">
<div>
<span className="text-wood-400 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Inspirace</span>
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight">Vybrané realizace</h2>
</div>
<p className="text-wood-300/80 max-w-sm text-sm font-light leading-relaxed">
                    Prohlédněte si ukázku naší práce. Každý projekt je originál, vytvořený s citem pro detail a funkčnost.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
<div className="group relative aspect-[4/3] overflow-hidden cursor-zoom-in reveal-on-scroll">
<img alt="Kuchyně na míru" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="font-serif text-2xl text-white italic">Kuchyně na míru</p>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden cursor-zoom-in reveal-on-scroll transition-delay-100">
<img alt="Obývací stěna" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="font-serif text-2xl text-white italic">Obývací pokoje</p>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden cursor-zoom-in reveal-on-scroll transition-delay-200">
<img alt="Ložnice postel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1758977403403-c51ef509e788?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="font-serif text-2xl text-white italic">Ložnice &amp; Matrace</p>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden cursor-zoom-in reveal-on-scroll">
<img alt="Vestavěná skříň" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1675325152993-b3a5fa7f0356?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="font-serif text-2xl text-white italic">Vestavěné skříně</p>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden cursor-zoom-in reveal-on-scroll transition-delay-100">
<img alt="Dětský pokoj" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1653971858625-9cb23d0dca80?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="font-serif text-2xl text-white italic">Dětské pokoje</p>
</div>
</div>
<div className="group relative aspect-[4/3] overflow-hidden cursor-zoom-in reveal-on-scroll transition-delay-200">
<img alt="Detail dřeva" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1758448511421-debb41f3e621?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<p className="font-serif text-2xl text-white italic">Detail zpracování</p>
</div>
</div>
</div>

<div className="gallery-expand grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="hidden-gallery">


<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&amp;w=600"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&amp;w=600"/></div>

<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&amp;w=600"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&amp;w=600"/></div>

<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&amp;w=600"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?q=80&amp;w=600"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/></div>

<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&amp;w=600"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&amp;w=600"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?q=80&amp;w=600"/></div>

<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1615529162924-f8605388461d?q=80&amp;w=600"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=600"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=600"/></div>
<div className="aspect-square bg-wood-800 overflow-hidden"><img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=600"/></div>
</div>

<div className="mt-12 text-center">
<button className="inline-flex items-center gap-3 border border-white/30 px-8 py-3 text-sm tracking-widest uppercase hover:bg-white hover:text-wood-900 transition-all duration-300" id="gallery-toggle" onclick="toggleGallery()">
<span id="btn-text">Zobrazit více realizací</span>
<svg aria-hidden="true" data-icon="lucide:arrow-down" data-width="20" height="20" id="btn-icon" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 bg-cream relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<h2 className="font-serif text-3xl md:text-4xl text-wood-900 text-center mb-16 tracking-tight">Co říkají naši zákazníci</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 shadow-sm border-t-2 border-wood-400 reveal-on-scroll">
<div className="flex text-wood-500 mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-wood-700/80 text-sm italic mb-6 leading-relaxed">
                        "Nechali jsme si od VM Nábytek dělat celou kuchyň a výsledek předčil očekávání. Skvělá komunikace, precizní montáž a dřevo vypadá nádherně. Doporučuji každému, kdo hledá kvalitu."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-wood-200 rounded-full flex items-center justify-center text-wood-600 font-serif font-bold">J</div>
<span className="text-xs font-bold uppercase tracking-wide text-wood-900">Jana Pospíšilová</span>
</div>
</div>

<div className="bg-white p-8 shadow-sm border-t-2 border-wood-400 reveal-on-scroll transition-delay-100">
<div className="flex text-wood-500 mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-wood-700/80 text-sm italic mb-6 leading-relaxed">
                        "Profesionální přístup od návrhu až po realizaci. Koupili jsme zde i matrace a spí se na nich jako v bavlnce. Je vidět, že svému řemeslu opravdu rozumí."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-wood-200 rounded-full flex items-center justify-center text-wood-600 font-serif font-bold">P</div>
<span className="text-xs font-bold uppercase tracking-wide text-wood-900">Petr Dvořák</span>
</div>
</div>

<div className="bg-white p-8 shadow-sm border-t-2 border-wood-400 reveal-on-scroll transition-delay-200">
<div className="flex text-wood-500 mb-4">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-wood-700/80 text-sm italic mb-6 leading-relaxed">
                        "Oceňuji férové jednání a dodržení termínů, což dnes není samozřejmost. Vestavěná skříň je bytelná, krásná a přesně podle našich představ."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-wood-200 rounded-full flex items-center justify-center text-wood-600 font-serif font-bold">M</div>
<span className="text-xs font-bold uppercase tracking-wide text-wood-900">Martin Kovář</span>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pb-24 relative" id="kontakt">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal-on-scroll">
<span className="text-wood-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Kontakt</span>
<h2 className="font-serif text-4xl text-wood-900 tracking-tight mb-8">Kde nás najdete</h2>
<div className="space-y-8 mb-12">

<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 bg-white border border-wood-200 flex items-center justify-center text-wood-600 rounded-sm">
<svg aria-hidden="true" data-icon="lucide:hammer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<div>
<h4 className="font-serif text-xl text-wood-900 mb-1">Dílna a sídlo</h4>
<p className="text-wood-600 text-sm mb-1">Na Piketě 535, 377 01 Jindřichův Hradec II</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 bg-white border border-wood-200 flex items-center justify-center text-wood-600 rounded-sm">
<svg aria-hidden="true" data-icon="lucide:store" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></g></svg>
</div>
<div>
<h4 className="font-serif text-xl text-wood-900 mb-1">Prodejna nábytku</h4>
<p className="text-wood-600 text-sm mb-1">Jarošovská 53/II, 377 01 Jindřichův Hradec</p>
</div>
</div>

<div className="flex gap-4">
<div className="w-10 h-10 shrink-0 bg-white border border-wood-200 flex items-center justify-center text-wood-600 rounded-sm">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="font-serif text-xl text-wood-900 mb-1">Spojte se s námi</h4>
<div className="flex flex-col gap-1 text-sm text-wood-600">
<a className="hover:text-wood-900 transition-colors" href="tel:+420606666102">+420 606 666 102</a>
<a className="hover:text-wood-900 transition-colors" href="tel:+420380123286">+420 380 123 286</a>
<a className="hover:text-wood-900 transition-colors mt-1 underline decoration-wood-300 underline-offset-4" href="mailto:vm-nabytek@vm-nabytek.cz">vm-nabytek@vm-nabytek.cz</a>
</div>
</div>
</div>
</div>

<div className="w-full h-48 bg-wood-200 grayscale rounded-sm overflow-hidden relative group">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2618.3371900188095!2d14.998!3d49.144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDA4JzM4LjQiTiAxNMKwNTknNTIuOCJF!5e0!3m2!1scs!2scz!4v1600000000000!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-white p-8 lg:p-12 shadow-xl shadow-wood-900/5 rounded-sm reveal-on-scroll">
<h3 className="font-serif text-2xl text-wood-900 mb-6">Napište nám</h3>
<form className="space-y-6">
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="name">Jméno a Příjmení</label>
<input className="w-full bg-wood-50 border-b border-wood-200 p-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300" id="name" placeholder="Jan Novák" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="phone">Telefon</label>
<input className="w-full bg-wood-50 border-b border-wood-200 p-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300" id="phone" placeholder="+420 ..." required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="email">Email</label>
<input className="w-full bg-wood-50 border-b border-wood-200 p-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300" id="email" placeholder="vas@email.cz" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="message">Vaše zpráva</label>
<textarea className="w-full bg-wood-50 border-b border-wood-200 p-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300 resize-none" id="message" placeholder="O jaký typ nábytku máte zájem?" required="" rows="4"></textarea>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-1 w-4 h-4 text-wood-600 border-wood-300 rounded focus:ring-wood-500" id="consent" required="" type="checkbox"/>
<label className="text-xs text-wood-500 leading-relaxed" htmlFor="consent">
                                Souhlasím se zpracováním osobních údajů pro účely vyřízení poptávky.
                            </label>
</div>
<button className="w-full bg-wood-800 text-white font-medium text-sm tracking-wide py-4 hover:bg-wood-700 transition-colors shadow-lg shadow-wood-900/10 flex items-center justify-center gap-2" type="submit">
                            ODESLAT POPTÁVKU
                            <svg aria-hidden="true" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-wood-900 text-wood-200/60 py-12 relative z-10 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<h5 className="font-serif text-2xl text-white tracking-tight mb-2">VM nábytek, s.r.o.</h5>
<p className="text-xs max-w-xs leading-relaxed">
                        Společnost zapsaná v obchodním rejstříku. <br/>
                        IČ: 26080206
                    </p>
</div>
<div className="flex gap-6">
<a className="text-xs hover:text-white transition-colors" href="#o-nas">O NÁS</a>
<a className="text-xs hover:text-white transition-colors" href="#sluzby">SLUŽBY</a>
<a className="text-xs hover:text-white transition-colors" href="#kontakt">KONTAKT</a>
</div>
<div className="flex gap-4">
<a className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:facebook" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
</div>
</div>
<div className="border-t border-white/5 mt-12 pt-8 text-[10px] text-center md:text-left flex flex-col md:flex-row justify-between gap-4">
<span>© 2024 VM nábytek, s.r.o. Všechna práva vyhrazena.</span>
<span className="">Design: Bley</span>
</div>
</div>
</footer>



    </>
  );
}
