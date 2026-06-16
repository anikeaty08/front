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
colors: {
wood: {
50: '#FAF9F6',  /* Off-white / Bone */
100: '#F5F2EB', /* Cream */
200: '#E6DDD0', /* Light Beige */
300: '#D4C5B0', /* Sand */
400: '#AD9A85', /* Taupe */
500: '#8C7A6B', /* Warm Grey */
600: '#6B5848', /* Light Brown */
700: '#4A3B32', /* Deep Brown */
800: '#362B25', /* Charcoal Brown */
900: '#1F1915', /* Nearly Black */
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E')",
},
letterSpacing: {
'tightest': '-0.03em',
},
animation: {
'slow-pan': 'pan 20s ease-in-out infinite alternate',
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
pan: {
'0%': { transform: 'scale(1.05)' },
'100%': { transform: 'scale(1.15)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            // Scroll Reveal Animation
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // Navbar Background Transition
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-wood-50/90', 'shadow-sm', 'border-wood-200');
                    navbar.classList.remove('border-transparent');
                } else {
                    navbar.classList.remove('bg-wood-50/90', 'shadow-sm', 'border-wood-200');
                    navbar.classList.add('border-transparent');
                }
            });

            // Mobile Menu Logic
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const links = document.querySelectorAll('.mobile-link');
            let isOpen = false;

            btn.addEventListener('click', () => {
                isOpen = !isOpen;
                if(isOpen) {
                    menu.classList.remove('translate-x-full');
                    document.body.style.overflow = 'hidden';
                    btn.innerHTML = '<span class="iconify" data-icon="lucide:x" data-width="24"></span>';
                } else {
                    menu.classList.add('translate-x-full');
                    document.body.style.overflow = 'auto';
                    btn.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="24"></span>';
                }
            });

            links.forEach(link => {
                link.addEventListener('click', () => {
                    isOpen = false;
                    menu.classList.add('translate-x-full');
                    document.body.style.overflow = 'auto';
                    btn.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="24"></span>';
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none bg-noise mix-blend-multiply opacity-100"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-500 border-b backdrop-blur-sm" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">
<a className="group relative z-50 flex flex-col justify-center" href="#">
<span className="font-serif text-2xl md:text-3xl tracking-tight leading-none group-hover:opacity-70 transition-opacity text-wood-900">JA-VOR</span>
<span className="text-[10px] uppercase tracking-[0.25em] text-wood-500 font-medium">Jan Vorhemus</span>
</a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium hover:text-wood-500 transition-colors relative group text-wood-800" href="#pribeh">
                    Příběh
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-wood-500 transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-medium hover:text-wood-500 transition-colors relative group text-wood-800" href="#sluzby">
                    Výroba
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-wood-500 transition-all group-hover:w-full"></span>
</a>
<a className="text-sm font-medium hover:text-wood-500 transition-colors relative group text-wood-800" href="#galerie">
                    Realizace
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-wood-500 transition-all group-hover:w-full"></span>
</a>
<a className="ml-4 px-6 py-3 rounded-[2px] text-sm font-medium tracking-wide hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 bg-wood-900 text-wood-50 hover:bg-wood-700 hover:shadow-wood-900/10" href="#kontakt">
                    Nezávazná poptávka
                </a>
</div>

<button aria-label="Menu" className="md:hidden relative z-50 p-2 text-wood-900" id="mobile-menu-btn">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="fixed inset-0 z-40 transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col justify-center items-center gap-8 bg-wood-100" id="mobile-menu">
<a className="font-serif text-4xl hover:text-wood-500 hover:italic transition-all mobile-link text-wood-900" href="#pribeh">Příběh</a>
<a className="font-serif text-4xl hover:text-wood-500 hover:italic transition-all mobile-link text-wood-900" href="#sluzby">Výroba</a>
<a className="font-serif text-4xl hover:text-wood-500 hover:italic transition-all mobile-link text-wood-900" href="#galerie">Realizace</a>
<a className="font-serif text-4xl hover:text-wood-500 hover:italic transition-all mobile-link text-wood-900" href="#kontakt">Kontakt</a>
</div>
</nav>

<header className="relative w-full h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Detail opracování dřeva" className="w-full h-full object-cover animate-slow-pan opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8283748-bbd5-41b3-9267-63bec4a6bb0b_3840w.webp"/>

<div className="absolute inset-0 bg-gradient-to-b via-transparent from-wood-50/10 to-wood-50"></div>
<div className="mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 text-center max-w-5xl mt-20 mr-auto ml-auto pr-6 pl-6 relative">
<div className="reveal">
<p className="inline-block text-xs font-semibold tracking-[0.3em] uppercase mb-6 backdrop-blur-md px-4 py-2 border rounded-full text-wood-600 bg-wood-50/80 border-wood-200">
                    Zakázkové truhlářství Jindřichův Hradec
                </p>
</div>
<h1 className="reveal stagger-1 md:text-7xl lg:text-8xl leading-[0.9] text-wood-900 text-5xl tracking-tight font-serif mb-8 drop-shadow-sm" style={{}}>Dřevo, které vypráví <br/> <span className="text-wood-600 font-light italic">váš příběh.</span></h1>
<p className="reveal stagger-2 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed text-wood-700">
                Od návrhu po montáž. Vytváříme interiéry s úctou k materiálu a důrazem na detail. Kuchyně, skříně a nábytek, který vydrží generace.
            </p>
<div className="reveal stagger-3 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group min-w-[180px] px-8 py-4 rounded-[2px] font-medium tracking-wide transition-all flex items-center justify-center gap-2 bg-wood-900 text-wood-50 hover:bg-wood-800" href="#sluzby">
                    Co vyrábíme
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="group min-w-[180px] backdrop-blur-sm border px-8 py-4 rounded-[2px] font-medium tracking-wide transition-all bg-white/50 border-wood-300 text-wood-900 hover:bg-white" href="#kontakt">
                    Konzultace zdarma
                </a>
</div>
</div>

<a className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 transition-colors animate-bounce duration-[2000ms] text-wood-400 hover:text-wood-900" href="#pribeh">
<svg aria-hidden="true" data-icon="lucide:arrow-down" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</header>

<section className="py-24 md:py-32 relative z-10" id="pribeh">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1">
<span className="block text-xs font-bold tracking-[0.25em] text-wood-500 uppercase mb-4 reveal">O dílně Ja-Vor</span>
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 reveal stagger-1 text-wood-900">
                        Tam, kde se řemeslo potkává s <span className="italic text-wood-600">precizností.</span>
</h2>
<div className="space-y-6 text-lg font-light leading-relaxed reveal stagger-2 text-wood-700">
<p className="">
                            Jmenuji se <strong>Jan Vorhemus</strong> a pod značkou Ja-Vor se věnuji zakázkové výrobě nábytku. Nejsme velká továrna, ale poctivá dílna, kde každý kus prochází mýma rukama.
                        </p>
<p className="">
                            Specializuji se na kompletní realizace interiérů. Mým cílem není jen vyrobit "skříň", ale vytvořit funkční a estetický prvek, který dokonale zapadne do vašeho domova. Nabízím komplexní službu: od prvotního zaměření a 3D návrhu, přes výběr materiálů a barev, až po precizní výrobu a finální montáž u vás doma.
                        </p>
<p>
                            Jako fyzická osoba (IČ: 03902137) si zakládám na osobním přístupu, spolehlivosti a kvalitě, za kterou se mohu podepsat.
                        </p>
</div>
<div className="mt-12 pt-8 border-t reveal stagger-3 flex items-center gap-4 border-wood-200">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-wood-200 text-wood-800">
<svg aria-hidden="true" data-icon="lucide:hammer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<div>
<p className="text-sm font-semibold uppercase tracking-wide text-wood-900">Jan Vorhemus</p>
<p className="text-xs text-wood-500">Majitel &amp; Mistr truhlář</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative reveal">
<div className="aspect-[4/5] rounded-[2px] overflow-hidden relative shadow-2xl group bg-wood-200 shadow-wood-900/10">
<img alt="Práce se dřevem" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 -left-6 md:-left-12 p-6 shadow-xl border-l-4 max-w-[200px] bg-wood-50 border-wood-600">
<p className="font-serif text-3xl leading-none mb-1 text-wood-900">10+</p>
<p className="text-xs text-wood-500 uppercase tracking-wider font-semibold">Let zkušeností</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-y bg-wood-100 border-wood-200/50" id="sluzby">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<span className="block text-xs font-bold tracking-[0.25em] text-wood-500 uppercase mb-4">Co pro vás vyrobíme</span>
<h2 className="font-serif text-4xl md:text-5xl mb-6 text-wood-900">Realizace na klíč</h2>
<p className="text-lg font-light text-wood-600">
                    Specializujeme se na interiérový nábytek. Ať už potřebujete vybavit celý dům nebo jen jeden pokoj, navrhneme řešení, které bude fungovat.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="group p-8 md:p-10 border hover:shadow-xl transition-all duration-300 reveal stagger-1 rounded-[2px] relative overflow-hidden bg-wood-50 border-wood-200/50 hover:border-wood-300 hover:shadow-wood-900/5">
<div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110 bg-wood-100"></div>
<svg aria-hidden="true" data-icon="lucide:chef-hat" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589a5 5 0 0 0-9.186 0a4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1ZM6 17h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-serif text-2xl mb-3 relative z-10 group-hover:text-wood-600 transition-colors text-wood-900">Kuchyně na míru</h3>
<p className="font-light text-sm leading-relaxed mb-6 text-wood-600">
                        Srdce domova přesně podle vašich představ. Moderní i rustikální styl, kvalitní kování Blum, odolné pracovní desky a ergonomické uspořádání pro radost z vaření.
                    </p>
<ul className="text-xs font-medium text-wood-500 space-y-2 border-t pt-4 border-wood-200">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-wood-400"></span>Vestavné spotřebiče</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-wood-400"></span>Doživotní záruka na kování</li>
</ul>
</div>

<div className="group p-8 md:p-10 border hover:shadow-xl transition-all duration-300 reveal stagger-2 rounded-[2px] relative overflow-hidden bg-wood-50 border-wood-200/50 hover:border-wood-300 hover:shadow-wood-900/5">
<div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110 bg-wood-100"></div>
<svg aria-hidden="true" data-icon="lucide:door-closed" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h.01M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14m-4 0h20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-serif text-2xl mb-3 relative z-10 group-hover:text-wood-600 transition-colors text-wood-900">Vestavěné skříně</h3>
<p className="font-light text-sm leading-relaxed mb-6 text-wood-600">
                        Maximální využití úložného prostoru. Vestavby do podkroví, předsíňové stěny i šatny. Široký výběr dekorů lamina, dýhy či lakovaných povrchů.
                    </p>
<ul className="text-xs font-medium text-wood-500 space-y-2 border-t pt-4 border-wood-200">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-wood-400"></span>Posuvné i křídlové systémy</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-wood-400"></span>Vnitřní organizéry</li>
</ul>
</div>

<div className="group p-8 md:p-10 border hover:shadow-xl transition-all duration-300 reveal stagger-3 rounded-[2px] relative overflow-hidden bg-wood-50 border-wood-200/50 hover:border-wood-300 hover:shadow-wood-900/5">
<div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110 bg-wood-100"></div>
<svg aria-hidden="true" data-icon="lucide:rocking-chair" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m3.5 2l3 10.5H18m-8.5 0l-4 7.5m9.5-7.5l3.5 7.5M2.75 18a13 13 0 0 0 18.5 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-serif text-2xl mb-3 relative z-10 group-hover:text-wood-600 transition-colors text-wood-900">Dětské pokoje</h3>
<p className="font-light text-sm leading-relaxed mb-6 text-wood-600">
                        Bezpečný a kreativní prostor pro vaše děti. Rostoucí nábytek, patrové postele, psací stoly a úložné boxy na hračky. Barevné kombinace na přání.
                    </p>
<ul className="text-xs font-medium text-wood-500 space-y-2 border-t pt-4 border-wood-200">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-wood-400"></span>Zdravotně nezávadné laky</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-wood-400"></span>Bezpečné hrany</li>
</ul>
</div>

<div className="group p-8 md:p-10 border hover:shadow-xl transition-all duration-300 reveal stagger-1 rounded-[2px] relative overflow-hidden bg-wood-50 border-wood-200/50 hover:border-wood-300 hover:shadow-wood-900/5">
<div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110 bg-wood-100"></div>
<svg aria-hidden="true" data-icon="lucide:bed" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-serif text-2xl mb-3 relative z-10 group-hover:text-wood-600 transition-colors text-wood-900">Postele a ložnice</h3>
<p className="font-light text-sm leading-relaxed mb-6 text-wood-600">
                        Masivní postele, které nevržou. Noční stolky, komody a toaletní stolky. Důraz na pevnost konstrukce a krásu přírodního dřeva.
                    </p>
<ul className="text-xs font-medium text-wood-500 space-y-2 border-t pt-4 border-wood-200">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-wood-400"></span>Masivní dřevo</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-wood-400"></span>Olejované povrchy</li>
</ul>
</div>

<div className="group p-8 md:p-10 border hover:shadow-xl transition-all duration-300 reveal stagger-2 rounded-[2px] relative overflow-hidden bg-wood-50 border-wood-200/50 hover:border-wood-300 hover:shadow-wood-900/5">
<div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-110 bg-wood-100"></div>
<svg aria-hidden="true" data-icon="lucide:bath" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M10 4L8 6m9 13v2M2 12h20M7 19v2M9 5L7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-serif text-2xl mb-3 relative z-10 group-hover:text-wood-600 transition-colors text-wood-900">Koupelnový nábytek</h3>
<p className="font-light text-sm leading-relaxed mb-6 text-wood-600">
                        Skříňky pod umyvadlo a doplňkový nábytek odolný vůči vlhkosti. Elegantní řešení, která promění koupelnu v domácí wellness.
                    </p>
<ul className="text-xs font-medium text-wood-500 space-y-2 border-t pt-4 border-wood-200">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-wood-400"></span>Vlhkosti odolné materiály</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-wood-400"></span>PUR lepení hran</li>
</ul>
</div>

<div className="group p-8 md:p-10 border transition-all duration-300 reveal stagger-3 rounded-[2px] flex flex-col justify-center items-center text-center relative overflow-hidden bg-wood-900 border-wood-900">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
<svg aria-hidden="true" data-icon="lucide:message-square-plus" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zM12 8v6m-3-3h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-serif text-2xl mb-3 text-wood-50">Máte jiný nápad?</h3>
<p className="font-light text-sm leading-relaxed mb-8 text-wood-300">
                        Vyrábíme také knihovny, stoly, obklady stěn a atypické solitéry. Ozvěte se nám.
                    </p>
<a className="inline-block border px-6 py-2 rounded-[2px] text-sm transition-colors border-wood-600 text-wood-50 hover:bg-wood-800" href="#kontakt">
                        Napsat poptávku
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 bg-wood-50" id="galerie">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
<div>
<span className="block text-xs font-bold tracking-[0.25em] text-wood-500 uppercase mb-3">Galerie</span>
<h2 className="font-serif text-4xl md:text-5xl text-wood-900">Vybrané realizace</h2>
</div>
<p className="font-light text-sm max-w-sm text-right md:text-left text-wood-600">
                    Prohlédněte si detaily naší práce. Fotografie jsou autentické z domovů našich spokojených klientů.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[300px] gap-4">

<div className="md:col-span-2 relative group overflow-hidden rounded-[2px] cursor-zoom-in reveal stagger-1">
<img alt="Moderní kuchyně" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1639457370010-fd216069a5ae?w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 from-wood-900/60">
<div>
<p className="font-serif text-xl text-wood-50">Moderní kuchyně</p>
<p className="text-xs uppercase tracking-widest text-wood-300">Dub + Antracit</p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-[2px] cursor-zoom-in reveal stagger-2">
<img alt="Detail dřeva" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 from-wood-900/60">
<div>
<p className="font-serif text-xl text-wood-50">Pracovna</p>
<p className="text-xs uppercase tracking-widest text-wood-300">Detail zpracování</p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-[2px] cursor-zoom-in reveal stagger-3">
<img alt="Ložnice" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 from-wood-900/60">
<div>
<p className="font-serif text-xl text-wood-50">Ložnice</p>
<p className="text-xs uppercase tracking-widest text-wood-300">Masivní postel</p>
</div>
</div>
</div>

<div className="lg:row-span-2 relative group overflow-hidden rounded-[2px] cursor-zoom-in reveal stagger-1">
<img alt="Vestavěná skříň" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1611048268330-53de574cae3b?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 from-wood-900/60">
<div>
<p className="font-serif text-xl text-wood-50">Šatna</p>
<p className="text-xs uppercase tracking-widest text-wood-300">Vestavba na míru</p>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-[2px] cursor-zoom-in reveal stagger-2">
<img alt="Vstupní hala" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8 from-wood-900/60">
<div>
<p className="font-serif text-xl text-wood-50">Předsíň</p>
<p className="text-xs uppercase tracking-widest text-wood-300">Botník a věšák</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal">
<button className="inline-flex items-center gap-2 border-b pb-1 font-medium transition-all border-wood-900 text-wood-900 hover:text-wood-600 hover:border-wood-600">
                    Zobrazit více fotografií
                    <svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t-4 bg-wood-900 text-wood-50 border-wood-600" id="kontakt">
<div className="max-w-[1400px] mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

<div className="flex flex-col justify-center">
<span className="block text-xs font-bold tracking-[0.25em] uppercase mb-4 reveal text-wood-400">Kontakt</span>
<h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 reveal stagger-1">
                        Pojďme tvořit <br/> <span className="italic text-wood-400">společně.</span>
</h2>
<p className="font-light text-lg mb-12 reveal stagger-2 text-wood-200">
                        Máte představu o novém nábytku? Zavolejte mi nebo napište. Rád se s vámi potkám, zaměřím prostor a připravím nezávaznou nabídku.
                    </p>
<div className="space-y-8 reveal stagger-3">
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-[2px] flex items-center justify-center shrink-0 border group-hover:border-wood-500 transition-colors bg-wood-800 border-wood-700">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h4 className="text-lg font-serif mb-1 text-white">Adresa dílny</h4>
<p className="font-light text-wood-400">28. října 528377 01 Jindřichův Hradec</p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-[2px] flex items-center justify-center shrink-0 border group-hover:border-wood-500 transition-colors bg-wood-800 border-wood-700">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-lg font-serif mb-1 text-white">Telefon</h4>
<a className="transition-colors font-light text-xl tracking-wide text-wood-400 hover:text-white" href="tel:+420723478247">+420 723 478 247</a>
<p className="text-xs mt-1 text-wood-600">Po-Pá: 8:00 - 17:00</p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-12 h-12 rounded-[2px] flex items-center justify-center shrink-0 border group-hover:border-wood-500 transition-colors bg-wood-800 border-wood-700">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<h4 className="text-lg font-serif mb-1 text-white">Email</h4>
<a className="transition-colors font-light text-xl text-wood-400 hover:text-white" href="mailto:Ja-Vor@centrum.cz">Ja-Vor@centrum.cz</a>
<div className="mt-1">
<a className="text-wood-500 transition-colors text-sm hover:text-wood-300" href="mailto:ja-vor@ja-vor.cz">ja-vor@ja-vor.cz</a>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-[2px] p-8 md:p-12 shadow-2xl relative overflow-hidden reveal stagger-2 bg-wood-100">
<div className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-50 pointer-events-none bg-wood-200"></div>
<h3 className="font-serif text-3xl mb-8 text-wood-900">Napište nám</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-wood-500 tracking-wider ml-1" htmlFor="name">Jméno</label>
<input className="w-full border p-4 focus:outline-none focus:border-wood-600 focus:ring-1 focus:ring-wood-600 transition-all rounded-[2px] bg-white border-wood-300 text-wood-900" id="name" placeholder="Jan Novák" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-wood-500 tracking-wider ml-1" htmlFor="phone">Telefon</label>
<input className="w-full border p-4 focus:outline-none focus:border-wood-600 focus:ring-1 focus:ring-wood-600 transition-all rounded-[2px] bg-white border-wood-300 text-wood-900" id="phone" placeholder="+420 ..." type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-wood-500 tracking-wider ml-1" htmlFor="email">Email</label>
<input className="w-full border p-4 focus:outline-none focus:border-wood-600 focus:ring-1 focus:ring-wood-600 transition-all rounded-[2px] bg-white border-wood-300 text-wood-900" id="email" placeholder="vas@email.cz" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-wood-500 tracking-wider ml-1" htmlFor="message">O co máte zájem?</label>
<textarea className="w-full border p-4 focus:outline-none focus:border-wood-600 focus:ring-1 focus:ring-wood-600 transition-all rounded-[2px] resize-none bg-white border-wood-300 text-wood-900" id="message" placeholder="Popište svou představu... (kuchyně, skříň, postel)" rows="4"></textarea>
</div>
<div className="flex items-center gap-3 pt-2">
<input className="w-5 h-5 cursor-pointer accent-wood-700" id="consent" type="checkbox"/>
<label className="text-sm cursor-pointer select-none text-wood-600" htmlFor="consent">Souhlasím se zpracováním osobních údajů pro účely poptávky.</label>
</div>
<button className="w-full font-medium py-5 px-6 rounded-[2px] transition-all shadow-lg flex items-center justify-center gap-3 group bg-wood-900 text-wood-50 hover:bg-wood-800" type="submit">
                            Odeslat poptávku
                            <svg aria-hidden="true" data-icon="lucide:send" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<div className="w-full h-[400px] grayscale filter contrast-[0.9] border-t relative group overflow-hidden border-wood-800">
<iframe allowfullscreen="" className="group-hover:grayscale-0 transition-all duration-700" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.168925567556!2d15.006095!3d49.1442123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b5d9284242639%3A0xc3927d70459c5d15!2s28.%20%C5%99%C3%ADjna%20528%2C%20377%2001%20Jind%C5%99ich%C5%AFv%20Hradec!5e0!3m2!1scs!2scz!4v1700000000000!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none group-hover:bg-transparent transition-colors bg-wood-900/10"></div>
</div>

<footer className="py-16 border-t relative z-10 text-center md:text-left text-sm bg-wood-950 text-wood-400 border-wood-900">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="font-serif text-2xl tracking-tight mb-2 text-wood-100">JA-VOR</span>
<p className="opacity-60">Fyzická osoba dle živnostenského zákona</p>
<p className="opacity-60">IČ: 03902137 | Jan Vorhemus</p>
</div>
<div className="flex gap-8 font-medium">
<a className="transition-colors hover:text-wood-100" href="#pribeh">Příběh</a>
<a className="transition-colors hover:text-wood-100" href="#sluzby">Výroba</a>
<a className="transition-colors hover:text-wood-100" href="#galerie">Galerie</a>
<a className="transition-colors hover:text-wood-100" href="#kontakt">Kontakt</a>
</div>
<div className="text-xs text-wood-700">
<p>© 2023 Ja-Vor. Všechna práva vyhrazena.</p>
<p className="mt-1">Webdesign s citem pro detail.</p>
</div>
</div>
</footer>



    </>
  );
}
