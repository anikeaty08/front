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
serif: ['Playfair Display', 'serif'],
},
colors: {
wood: {
50: '#FAF7F2',
100: '#F0EBE3',
200: '#E2D5C3',
300: '#CDB598',
400: '#B5926B',
500: '#9C754D',
600: '#855E3A',
700: '#6B492D',
800: '#523824',
900: '#3D2A1D',
950: '#261A12',
}
},
letterSpacing: {
tightest: '-0.025em',
},
backgroundImage: {
'grain': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.06%22/%3E%3C/svg%3E')",
},
screens: {
'xs': '475px',
'3xl': '1920px',
},
animation: {
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            
            // 1. Reveal Animation Observer
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 // Trigger when 15% visible
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-up, .reveal-scale, .reveal-text');
            revealElements.forEach(el => observer.observe(el));

            // 2. Navbar Glass Effect on Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-wood-50/90', 'backdrop-blur-md', 'border-wood-200/50', 'shadow-sm');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('bg-wood-50/90', 'backdrop-blur-md', 'border-wood-200/50', 'shadow-sm');
                    navbar.classList.add('border-transparent');
                }
            });

            // 3. Parallax Effect for Hero Background
            const heroBg = document.getElementById('hero-bg');
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
                if (scrollPosition < 800) {
                    // Move background slower than scroll
                    heroBg.style.transform = `translateY(${scrollPosition * 0.4}px) scale(1.05)`;
                }
            });
            
            // 4. Magnetic Buttons (Micro-interaction)
            const buttons = document.querySelectorAll('.magnetic-btn');
            
            buttons.forEach(btn => {
                btn.addEventListener('mousemove', (e) => {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                });

                btn.addEventListener('mouseleave', () => {
                    btn.style.transform = 'translate(0px, 0px)';
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none bg-grain mix-blend-multiply opacity-60"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-500 border-b border-transparent" id="navbar">
<div className="md:px-12 md:h-24 flex h-20 max-w-[1920px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex flex-col group relative z-50" href="#">
<span className="font-serif font-semibold text-xl md:text-2xl tracking-tight text-wood-950 leading-none group-hover:text-wood-600 transition-colors duration-300">TRUHLÁŘSTVÍ HOŠEK</span>
<span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-wood-500 mt-1 font-medium group-hover:tracking-[0.25em] transition-all duration-300">Horní Žďár</span>
</a>

<div className="hidden lg:flex items-center gap-10 xl:gap-14">
<a className="text-sm font-medium text-wood-700 hover:text-wood-500 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-wood-500 hover:after:w-full after:transition-all after:duration-300" href="#o-nas">O nás</a>
<a className="text-sm font-medium text-wood-700 hover:text-wood-500 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-wood-500 hover:after:w-full after:transition-all after:duration-300" href="#sluzby">Výroba</a>
<a className="text-sm font-medium text-wood-700 hover:text-wood-500 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-wood-500 hover:after:w-full after:transition-all after:duration-300" href="#galerie">Galerie</a>
<a className="magnetic-btn group relative px-6 py-2.5 overflow-hidden rounded-sm bg-wood-900 text-wood-50 shadow-lg shadow-wood-900/20 transition-all hover:shadow-wood-900/40 hover:-translate-y-0.5" href="#kontakt" style={{transform: 'translate(0px, 0px)'}}>
<div className="absolute inset-0 w-full h-full transition-all duration-500 ease-out transform translate-x-full bg-wood-700 group-hover:translate-x-0"></div>
<span className="relative text-sm font-medium tracking-wide flex items-center gap-2">
                        Poptat výrobu
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
</div>

<div className="lg:hidden relative z-50">
<input className="peer hidden" id="mobile-menu-toggle" type="checkbox"/>
<label className="cursor-pointer text-wood-900 p-2 block hover:scale-110 transition-transform" htmlFor="mobile-menu-toggle">
<svg aria-hidden="true" data-icon="lucide:menu" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</label>

<div className="fixed inset-0 bg-wood-50/95 backdrop-blur-xl z-40 translate-x-full peer-checked:translate-x-0 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col items-center justify-center gap-8 text-2xl">
<label className="absolute top-6 right-6 p-2 cursor-pointer hover:rotate-90 transition-transform duration-300" htmlFor="mobile-menu-toggle">
<svg aria-hidden="true" data-icon="lucide:x" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</label>
<a className="font-serif text-wood-900 hover:text-wood-600 transform hover:scale-110 transition-all" href="#o-nas" onclick="document.getElementById('mobile-menu-toggle').checked = false">O nás</a>
<a className="font-serif text-wood-900 hover:text-wood-600 transform hover:scale-110 transition-all" href="#sluzby" onclick="document.getElementById('mobile-menu-toggle').checked = false">Výroba</a>
<a className="font-serif text-wood-900 hover:text-wood-600 transform hover:scale-110 transition-all" href="#galerie" onclick="document.getElementById('mobile-menu-toggle').checked = false">Galerie</a>
<a className="font-serif text-wood-600 transform hover:scale-110 transition-all" href="#kontakt" onclick="document.getElementById('mobile-menu-toggle').checked = false">Kontakt</a>
</div>
</div>
</div>
</nav>

<header className="min-h-[700px] flex overflow-hidden w-full h-screen pt-20 relative items-center justify-center">

<div className="z-0 overflow-hidden absolute top-0 right-0 bottom-0 left-0 w-full h-full">

<img alt="Dílna truhlářství pozadí" className="object-center transition-transform duration-100 ease-linear brightness-[0.60] w-[110%] h-[110%] object-cover absolute top-[-5%] right-[-5%] bottom-[-5%] left-[-5%]" id="hero-bg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0125256d-cd64-4f95-a8aa-57362f8951ad_1600w.webp"/>
<div className="bg-gradient-to-b from-wood-950/40 via-transparent to-wood-50/90 absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
</div>
<div className="z-10 md:px-12 flex flex-col text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="reveal-up delay-100 mb-8 md:mb-10">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-wood-200/20 bg-wood-950/30 backdrop-blur-md text-wood-100 text-[10px] md:text-xs tracking-[0.2em] uppercase shadow-xl">
<span className="w-1.5 h-1.5 rounded-full bg-wood-400 animate-pulse"></span>
                    Založeno 2003
                </div>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tight leading-[1.1] mb-8 drop-shadow-2xl">
<div className="reveal-text overflow-hidden"><span>Dřevo má svou paměť.</span></div>
<div className="reveal-text overflow-hidden delay-200"><span className="italic text-wood-200 font-light">My mu dáváme tvar.</span></div>
</h1>
<div className="reveal-up delay-300 max-w-2xl mx-auto mb-12">
<p className="text-wood-100 text-lg md:text-xl font-light leading-relaxed opacity-90 drop-shadow-md">
                    Specializujeme se na zakázkovou výrobu z masivu. Od špaletových oken pro historické domy po moderní interiérové dveře a nábytek.
                </p>
</div>
<div className="reveal-up delay-400 flex flex-col sm:flex-row gap-5 justify-center items-center w-full">
<a className="magnetic-btn w-full sm:w-auto min-w-[200px] bg-wood-100 text-wood-950 px-8 py-4 rounded-sm font-semibold tracking-wide hover:bg-white transition-all duration-300 shadow-xl shadow-black/20 flex items-center justify-center gap-2 group hover:scale-[1.02]" href="#kontakt">
                    Nezávazná poptávka
                    <svg aria-hidden="true" data-icon="lucide:arrow-right-circle" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m12 16l4-4l-4-4m-4 4h8"></path></g></svg>
</a>
<a className="magnetic-btn w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 text-white border border-white/20 px-8 py-4 rounded-sm font-medium hover:bg-white/5 transition-colors backdrop-blur-sm hover:border-white/40" href="#sluzby">
                    Naše služby
                    <svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-wood-900/50 flex flex-col items-center gap-2 opacity-0 animate-[float_3s_ease-in-out_2s_infinite_forwards]">
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-wood-400 to-transparent"></div>
</div>
</header>

<section className="py-24 md:py-32 lg:py-40 relative z-10 overflow-hidden" id="o-nas">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

<div className="relative grid grid-cols-2 gap-4 md:gap-6 reveal-scale">
<div className="space-y-4 md:space-y-6 mt-12 md:mt-16">
<img alt="Práce se dřevem" className="w-full h-48 md:h-80 object-cover rounded-sm shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/350f4f03-b9ad-4176-a31f-ca7f2f7a32e2_800w.jpg"/>
</div>
<div className="space-y-4 md:space-y-6">
<img alt="Detail truhlářské práce" className="w-full h-64 md:h-96 object-cover rounded-sm shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8151d076-fb4a-4510-9549-3e33a686b512_800w.jpg"/>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-wood-900 text-wood-50 p-6 md:p-10 rounded-full w-32 h-32 md:w-48 md:h-48 flex flex-col items-center justify-center text-center shadow-2xl shadow-wood-900/30 border-8 border-wood-50 z-10 animate-float">
<span className="font-serif text-3xl md:text-5xl italic">20+</span>
<span className="text-[10px] md:text-xs uppercase tracking-widest mt-1 md:mt-2 text-wood-300">Let praxe</span>
</div>
</div>

<div className="lg:pl-10">
<span className="reveal-up text-wood-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">O Michalu Hoškovi</span>
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-wood-950 tracking-tight mb-8 leading-[1.1]">
<div className="reveal-text overflow-hidden"><span>Kde kvantita ustupuje</span></div>
<div className="reveal-text overflow-hidden delay-100"><span className="italic text-wood-600">poctivé kvalitě</span></div>
</h2>
<div className="space-y-6 text-stone-600 font-light text-lg md:text-xl leading-relaxed">
<p className="reveal-up delay-200">
                            Truhlářství jsem založil v roce 2003 s jasnou vizí: vrátit do řemesla pečlivost, která se v dnešní uspěchané době často vytrácí. Sídlíme v Horním Žďáru u Jindřichova Hradce, kde navazujeme na tradici jihočeského řemesla.
                        </p>
<p className="reveal-up delay-300">
                            Nejsem továrna na nábytek. Jsem truhlář, který si zakládá na osobním jednání. Každé dveře, každé okno i schodiště prochází mýma rukama. Vím, že na mé výrobky se často čeká déle – ale věřte mi, že výsledek, který bude sloužit desítky let, za to stojí.
                        </p>
</div>
<div className="mt-12 pt-8 border-t border-wood-200 flex flex-col sm:flex-row gap-8 reveal-up delay-400">
<div className="group cursor-default">
<h4 className="font-serif text-xl text-wood-900 mb-2 group-hover:text-wood-600 transition-colors">Michal Hošek</h4>
<p className="text-sm text-wood-500 uppercase tracking-wider">Majitel &amp; Mistr truhlář</p>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-wood-100 flex items-center justify-center text-wood-600 group-hover:bg-wood-200 group-hover:scale-110 transition-all duration-300">
<svg aria-hidden="true" data-icon="lucide:award" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg>
</div>
<p className="text-sm text-stone-500 max-w-[200px] leading-tight">Záruka precizního zpracování a pozáručního servisu.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 lg:py-40 bg-wood-100/50 relative z-10 border-y border-wood-200/50 overflow-hidden" id="sluzby">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-wood-200/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
<div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
<span className="reveal-up text-wood-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Naše specializace</span>
<h2 className="reveal-up delay-100 font-serif text-4xl md:text-5xl lg:text-7xl text-wood-950 tracking-tight mb-6">Zakázková výroba</h2>
<p className="reveal-up delay-200 text-stone-600 text-lg md:text-xl font-light">
                    Nevyrábíme "skladovky". Každý kus je originál navržený přesně pro váš dům či byt.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="reveal-up delay-100 group bg-wood-50 p-8 md:p-10 rounded-sm border border-wood-200 hover:border-wood-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-wood-900/10 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-wood-100/0 to-wood-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-56 md:h-64 -mx-10 -mt-10 mb-10 overflow-hidden relative">
<div className="absolute inset-0 bg-wood-950/10 group-hover:bg-wood-950/0 transition-colors z-10"></div>
<img alt="Interiérové dveře" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b1c5f29-cb7f-4c01-86dc-4d9e5bcffaee_800w.jpg"/>
</div>
<div className="relative z-10 flex-grow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-2xl md:text-3xl text-wood-900 group-hover:text-wood-600 transition-colors">Interiérové dveře</h3>
<svg aria-hidden="true" data-icon="lucide:door-open" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 border-b border-wood-200 pb-6 group-hover:border-wood-300 transition-colors">
                            Vyrábíme masivní i sendvičové dveře včetně obložkových zárubní. Od rustikálního stylu po moderní hladké linie.
                        </p>
<ul className="space-y-3 text-sm text-stone-500 font-medium">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:scale-150 transition-transform"></span>Obložkové zárubně na míru</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:scale-150 transition-transform"></span>Důraz na zvukovou izolaci</li>
</ul>
</div>
</div>

<div className="reveal-up delay-200 group bg-wood-50 p-8 md:p-10 rounded-sm border border-wood-200 hover:border-wood-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-wood-900/10 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-wood-100/0 to-wood-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-56 md:h-64 -mx-10 -mt-10 mb-10 overflow-hidden relative">
<div className="absolute inset-0 bg-wood-950/10 group-hover:bg-wood-950/0 transition-colors z-10"></div>
<img alt="Špaletová okna" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="relative z-10 flex-grow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-2xl md:text-3xl text-wood-900 group-hover:text-wood-600 transition-colors">Špaletová okna</h3>
<svg aria-hidden="true" data-icon="lucide:app-window" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M10 4v4M2 8h20M6 4v4"></path></g></svg>
</div>
<p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 border-b border-wood-200 pb-6 group-hover:border-wood-300 transition-colors">
                            Specializace na tradiční špaletová okna pro historické objekty a chalupy. Zachováváme původní vzhled s moderní funkčností.
                        </p>
<ul className="space-y-3 text-sm text-stone-500 font-medium">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:scale-150 transition-transform"></span>Věrné historické repliky</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:scale-150 transition-transform"></span>Kvalitní kování a těsnění</li>
</ul>
</div>
</div>

<div className="reveal-up delay-300 group bg-wood-50 p-8 md:p-10 rounded-sm border border-wood-200 hover:border-wood-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-wood-900/10 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-wood-100/0 to-wood-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-56 md:h-64 -mx-10 -mt-10 mb-10 overflow-hidden relative">
<div className="absolute inset-0 bg-wood-950/10 group-hover:bg-wood-950/0 transition-colors z-10"></div>
<img alt="Dřevěné schody" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="relative z-10 flex-grow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-2xl md:text-3xl text-wood-900 group-hover:text-wood-600 transition-colors">Schody a zábradlí</h3>
<svg aria-hidden="true" data-icon="lucide:layers" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 border-b border-wood-200 pb-6 group-hover:border-wood-300 transition-colors">
                            Dominanta interiéru. Samonosná schodiště nebo obklady betonových stupňů z tvrdého dřeva (dub, jasan, buk).
                        </p>
<ul className="space-y-3 text-sm text-stone-500 font-medium">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:scale-150 transition-transform"></span>Bezpečné a ergonomické</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:scale-150 transition-transform"></span>Soustružené zábradlí</li>
</ul>
</div>
</div>

<div className="reveal-up delay-100 group bg-wood-50 p-8 md:p-10 rounded-sm border border-wood-200 hover:border-wood-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-wood-900/10 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-wood-100/0 to-wood-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-56 md:h-64 -mx-10 -mt-10 mb-10 overflow-hidden relative">
<div className="absolute inset-0 bg-wood-950/10 group-hover:bg-wood-950/0 transition-colors z-10"></div>
<img alt="Nábytek na míru" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8e23e728-2efe-40f7-8f11-67e3611d5945_1600w.webp"/>
</div>
<div className="relative z-10 flex-grow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-2xl md:text-3xl text-wood-900 group-hover:text-wood-600 transition-colors">Nábytek na míru</h3>
<svg aria-hidden="true" data-icon="lucide:armchair" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
</div>
<p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 border-b border-wood-200 pb-6 group-hover:border-wood-300 transition-colors">
                            Vestavěné skříně, kuchyňské linky a solitérní nábytek z masivu. Maximální využití prostoru a jedinečný design.
                        </p>
<ul className="space-y-3 text-sm text-stone-500 font-medium">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:scale-150 transition-transform"></span>Kuchyně a vestavby</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:scale-150 transition-transform"></span>Přírodní oleje a laky</li>
</ul>
</div>
</div>

<div className="reveal-up delay-200 group bg-wood-50 p-8 md:p-10 rounded-sm border border-wood-200 hover:border-wood-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-wood-900/10 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full md:col-span-2 lg:col-span-1">
<div className="absolute inset-0 bg-gradient-to-br from-wood-100/0 to-wood-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="h-56 md:h-64 -mx-10 -mt-10 mb-10 overflow-hidden relative">
<div className="absolute inset-0 bg-wood-950/10 group-hover:bg-wood-950/0 transition-colors z-10"></div>
<img alt="Dřevěná vrata" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 flex-grow">
<div className="flex justify-between items-start mb-4">
<h3 className="font-serif text-2xl md:text-3xl text-wood-900 group-hover:text-wood-600 transition-colors">Venkovní vrata</h3>
<svg aria-hidden="true" data-icon="lucide:warehouse" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"></path><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8zM6 13h12M6 17h12"></path></g></svg>
</div>
<p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 border-b border-wood-200 pb-6 group-hover:border-wood-300 transition-colors">
                            Robustní vjezdová vrata a brány, které odolají povětrnostním vlivům a podtrhnou charakter vašeho domu.
                        </p>
<ul className="space-y-3 text-sm text-stone-500 font-medium">
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:scale-150 transition-transform"></span>Odolné dřeviny (modřín)</li>
<li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-wood-400 rounded-full group-hover:scale-150 transition-transform"></span>Kovářské doplňky</li>
</ul>
</div>
</div>

<div className="reveal-up delay-300 bg-wood-900 p-8 md:p-10 rounded-sm flex flex-col justify-center items-center text-center relative overflow-hidden group cursor-pointer hover:bg-wood-800 transition-colors duration-500">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 mix-blend-overlay"></div>

<div className="absolute -top-[100px] -left-[100px] w-[200px] h-[200px] bg-white/10 blur-[50px] rounded-full group-hover:top-[50%] group-hover:left-[50%] transition-all duration-1000 ease-in-out"></div>
<div className="relative z-10">
<div className="w-16 h-16 rounded-full bg-wood-800 border border-wood-700 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-wood-700 transition-all duration-300">
<svg aria-hidden="true" data-icon="lucide:hammer" data-strokeWidth="1.5" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="font-serif text-2xl md:text-3xl text-white mb-3">Máte atypický požadavek?</h3>
<p className="text-wood-200 text-sm md:text-base mb-8">Jsme zvyklí řešit výzvy. Ozvěte se nám s vaší představou.</p>
<a className="inline-block border border-wood-400 text-wood-50 px-8 py-3 rounded-sm hover:bg-wood-400 hover:text-wood-950 transition-all duration-300 text-sm font-medium tracking-wide" href="#kontakt">
                            Kontaktovat
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 lg:py-40 bg-wood-50 relative z-10" id="galerie">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="reveal-up">
<span className="text-wood-600 text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Reference</span>
<h2 className="font-serif text-4xl md:text-6xl text-wood-950 tracking-tight">Ukázky naší práce</h2>
</div>
<div className="hidden md:block w-32 md:w-64 h-[1px] bg-wood-200 mb-4 origin-left scale-x-0 transition-transform duration-1000 delay-500 reveal-active" style={{transform: 'scaleX(1)'}}></div>
<p className="reveal-up delay-100 text-stone-500 text-sm md:text-base max-w-sm text-right md:text-left">
                    Prohlédněte si výběr z realizací. Každá fotka je důkazem pečlivosti, kterou věnujeme detailům.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] lg:auto-rows-[350px] gap-4 md:gap-6">

<div className="reveal-scale md:row-span-2 relative group overflow-hidden rounded-sm cursor-zoom-in">
<img alt="Detail dřeva" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-wood-950/20 group-hover:bg-wood-950/0 transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white">
<span className="text-xs uppercase tracking-widest block mb-1">Detail</span>
<span className="font-serif text-xl">Struktura dřeva</span>
</div>
</div>

<div className="reveal-scale delay-100 relative group overflow-hidden rounded-sm cursor-zoom-in">
<img alt="Dřevěná podlaha a nábytek" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-wood-950/20 group-hover:bg-wood-950/0 transition-colors duration-500"></div>
</div>

<div className="reveal-scale delay-200 relative group overflow-hidden rounded-sm cursor-zoom-in">
<img alt="Kuchyně masiv" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-wood-950/20 group-hover:bg-wood-950/0 transition-colors duration-500"></div>
</div>

<div className="reveal-scale delay-100 md:col-span-2 relative group overflow-hidden rounded-sm cursor-zoom-in">
<img alt="Schodiště" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-wood-950/20 group-hover:bg-wood-950/0 transition-colors duration-500"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-white">
<span className="text-xs uppercase tracking-widest block mb-1">Realizace</span>
<span className="font-serif text-xl">Masivní schodiště</span>
</div>
</div>

<div className="reveal-scale delay-200 md:row-span-2 relative group overflow-hidden rounded-sm cursor-zoom-in">
<img alt="Vchodové dveře" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-wood-950/20 group-hover:bg-wood-950/0 transition-colors duration-500"></div>
</div>

<div className="reveal-scale delay-100 relative group overflow-hidden rounded-sm cursor-zoom-in">
<img alt="Truhlářská dílna" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-wood-950/20 group-hover:bg-wood-950/0 transition-colors duration-500"></div>
</div>

<div className="reveal-scale delay-200 relative group overflow-hidden rounded-sm cursor-zoom-in">
<img alt="Nábytek detail" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-wood-950/20 group-hover:bg-wood-950/0 transition-colors duration-500"></div>
</div>
</div>

<div className="mt-16 text-center reveal-up">
<a className="inline-flex items-center justify-center gap-3 bg-white border border-wood-200 text-wood-900 px-10 py-4 rounded-sm font-medium hover:bg-wood-50 hover:border-wood-400 hover:shadow-lg transition-all duration-300 shadow-sm group" href="#">
<svg aria-hidden="true" data-icon="lucide:grid" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18M3 15h18M9 3v18m6-18v18"></path></g></svg>
                    Zobrazit celou galerii (30+ fotografií)
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 lg:py-40 bg-wood-950 text-wood-50 relative z-10 border-t-[6px] border-wood-600" id="kontakt">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

<div className="flex flex-col justify-center">
<span className="reveal-up text-wood-400 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Kontakt</span>
<h2 className="font-serif text-4xl md:text-6xl text-white tracking-tight mb-8 leading-tight">
<div className="reveal-text overflow-hidden"><span>Zastavte se</span></div>
<div className="reveal-text overflow-hidden delay-100"><span>v dílně</span></div>
</h2>
<p className="reveal-up delay-200 text-wood-200 font-light mb-12 max-w-lg leading-relaxed text-lg">
                        Sídlíme kousek od Jindřichova Hradce. Nejlepší je zavolat předem a domluvit si schůzku. Rádi vám ukážeme vzorky dřeva a probereme vaši představu.
                    </p>
<div className="space-y-10">

<div className="reveal-up delay-300 flex gap-6 group">
<div className="w-14 h-14 rounded-sm bg-wood-800/30 flex items-center justify-center shrink-0 border border-wood-700 group-hover:border-wood-500 group-hover:bg-wood-800 transition-all duration-300">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h4 className="text-xl font-serif text-white mb-2">Truhlářství Michal Hošek</h4>
<p className="text-wood-300 text-base leading-relaxed group-hover:text-wood-200 transition-colors">Horní Žďár 90377 01 Jindřichův Hradec</p>
</div>
</div>

<div className="reveal-up delay-400 flex gap-6 group">
<div className="w-14 h-14 rounded-sm bg-wood-800/30 flex items-center justify-center shrink-0 border border-wood-700 group-hover:border-wood-500 group-hover:bg-wood-800 transition-all duration-300">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-xl font-serif text-white mb-2">Zavolejte nám</h4>
<a className="text-wood-300 text-xl hover:text-white transition-colors block" href="tel:+420777068430">+420 777 068 430</a>
<p className="text-wood-500 text-xs mt-1">Po-Pá: 7:00 – 16:00</p>
</div>
</div>

<div className="reveal-up delay-500 flex gap-6 group">
<div className="w-14 h-14 rounded-sm bg-wood-800/30 flex items-center justify-center shrink-0 border border-wood-700 group-hover:border-wood-500 group-hover:bg-wood-800 transition-all duration-300">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="26" height="26" role="img" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<h4 className="text-xl font-serif text-white mb-2">Napište nám</h4>
<a className="text-wood-300 text-xl hover:text-white transition-colors block" href="mailto:mihosek@email.cz">mihosek@email.cz</a>
</div>
</div>
</div>
</div>

<div className="reveal-scale delay-200 bg-wood-50 p-8 md:p-12 rounded-sm shadow-2xl shadow-black/50 relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-wood-200/20 rounded-bl-full pointer-events-none"></div>
<h3 className="text-wood-950 font-serif text-3xl mb-8">Poptávkový formulář</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="text-xs font-bold uppercase text-wood-500 tracking-wider ml-1 mb-1 block group-focus-within:text-wood-800 transition-colors" htmlFor="name">Jméno</label>
<input className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-4 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all rounded-t-sm" id="name" placeholder="Váš jméno" type="text"/>
</div>
<div className="group">
<label className="text-xs font-bold uppercase text-wood-500 tracking-wider ml-1 mb-1 block group-focus-within:text-wood-800 transition-colors" htmlFor="phone">Telefon</label>
<input className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-4 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all rounded-t-sm" id="phone" placeholder="+420 ..." type="tel"/>
</div>
</div>
<div className="group">
<label className="text-xs font-bold uppercase text-wood-500 tracking-wider ml-1 mb-1 block group-focus-within:text-wood-800 transition-colors" htmlFor="email">Email</label>
<input className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-4 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all rounded-t-sm" id="email" placeholder="vas@email.cz" type="email"/>
</div>
<div className="group">
<label className="text-xs font-bold uppercase text-wood-500 tracking-wider ml-1 mb-1 block group-focus-within:text-wood-800 transition-colors" htmlFor="message">O co máte zájem?</label>
<textarea className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-4 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all rounded-t-sm resize-none" id="message" placeholder="Popište stručně svou představu..." rows="4"></textarea>
</div>
<div className="pt-2">
<label className="flex items-center gap-3 cursor-pointer group select-none">
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border-2 border-wood-300 rounded-sm peer-checked:bg-wood-600 peer-checked:border-wood-600 transition-all"></div>
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs text-stone-500 group-hover:text-wood-600 transition-colors">Souhlasím se zpracováním osobních údajů.</span>
</label>
</div>
<button className="magnetic-btn w-full bg-wood-800 text-white font-medium py-5 px-6 rounded-sm hover:bg-wood-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg group hover:shadow-xl hover:shadow-wood-900/30" type="submit">
                            Odeslat nezávaznou poptávku
                            <svg aria-hidden="true" data-icon="lucide:send" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<div className="w-full h-80 md:h-[500px] bg-stone-200 relative grayscale contrast-[0.9] border-t border-wood-800 group overflow-hidden">
<iframe allowfullscreen="" className="opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2606.357774776518!2d15.0116893!3d49.1264421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b5d9c288f6b9b%3A0x400af0f6615b130!2sHorn%C3%AD%20%C5%BD%C4%8F%C3%A1r%2090%2C%20377%2001%20Jind%C5%99ich%C5%AFv%20Hradec!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
<div className="absolute inset-0 bg-wood-900/20 pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
</div>

<footer className="bg-wood-950 py-16 border-t border-wood-900 relative z-10 text-center md:text-left text-wood-400 text-sm">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="font-serif text-2xl text-white tracking-tight mb-2">TRUHLÁŘSTVÍ HOŠEK</span>
<p className="opacity-60">Poctivé řemeslo z jižních Čech od roku 2003.</p>
</div>
<div className="flex flex-wrap justify-center gap-8 font-medium">
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all" href="#o-nas">O nás</a>
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all" href="#sluzby">Služby</a>
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all" href="#galerie">Galerie</a>
<a className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all" href="#kontakt">Kontakt</a>
</div>
<div className="text-xs text-wood-600 flex flex-col md:flex-row items-center gap-4">
<span>© 2023 Michal Hošek</span>
<span className="hidden md:inline">•</span>
<span>Designed with precision</span>
</div>
</div>
</footer>



    </>
  );
}
