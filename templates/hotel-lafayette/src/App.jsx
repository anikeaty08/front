import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.hero-slide');
            let currentSlide = 0;
            
            if (slides.length > 1) {
                setInterval(() => {
                    slides[currentSlide].classList.replace('opacity-100', 'opacity-0');
                    currentSlide = (currentSlide + 1) % slides.length;
                    slides[currentSlide].classList.replace('opacity-0', 'opacity-100');
                }, 5000); // Mění fotku každých 5 vteřin
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-slate-900 text-white/80 py-2 hidden md:block">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs font-normal">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="tel:+420585436444">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                    +420 585 436 444
                </a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="mailto:recepce@lafayette.cz">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    recepce@lafayette.cz
                </a>
<span className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                    Alšova 8, Olomouc
                </span>
</div>
<div className="flex items-center gap-4">
<a className="text-white font-medium" href="#">CZ</a>
<a className="hover:text-white transition-colors" href="#">EN</a>
<a className="hover:text-white transition-colors" href="#">DE</a>
</div>
</div>
</div>

<nav className="w-full bg-white border-b border-black/5 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-24">

<div className="flex-shrink-0 flex items-center">
<a href="#">
<img alt="Hotel Lafayette" className="h-12 w-auto object-contain" src="https://www.lafayette.cz/wp-content/uploads/2016/11/logo-1tn.png"/>
</a>
</div>

<div className="hidden lg:flex space-x-8 items-center">
<a className="text-sm font-medium text-amber-700 uppercase tracking-wide" href="#">Úvod</a>
<a className="text-sm font-normal text-slate-600 hover:text-amber-700 uppercase tracking-wide transition-colors" href="#">Ubytování</a>
<a className="text-sm font-normal text-slate-600 hover:text-amber-700 uppercase tracking-wide transition-colors" href="#">Restaurace</a>
<a className="text-sm font-normal text-slate-600 hover:text-amber-700 uppercase tracking-wide transition-colors" href="#">Služby</a>
<a className="text-sm font-normal text-slate-600 hover:text-amber-700 uppercase tracking-wide transition-colors" href="#">Galerie</a>
<a className="text-sm font-normal text-slate-600 hover:text-amber-700 uppercase tracking-wide transition-colors" href="#">Kontakt</a>
<a className="ml-4 bg-amber-700 text-white px-6 py-3 text-sm font-medium uppercase tracking-wide hover:bg-amber-800 transition-colors" href="#">
                        Rezervace
                    </a>
</div>

<div className="lg:hidden flex items-center">
<button className="text-slate-900 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<header className="relative h-[70vh] min-h-[500px] flex flex-col justify-center overflow-hidden bg-slate-900">
<div className="absolute inset-0 z-0" id="hero-slider">
<img alt="Hotel Lafayette Slider 1" className="hero-slide absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 opacity-100" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'" src="https://www.lafayette.cz/wp-content/uploads/2016/11/slide1.jpg" />
<img alt="Hotel Lafayette Slider 2" className="hero-slide absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 opacity-0" onerror="this.src='https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=2574&amp;auto=format&amp;fit=crop'" src="https://www.lafayette.cz/wp-content/uploads/2016/11/slide2.jpg"/>
<img alt="Hotel Lafayette Slider 3" className="hero-slide absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 opacity-0" onerror="this.src='https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop'" src="https://www.lafayette.cz/wp-content/uploads/2016/11/slide3.jpg"/>
<div className="absolute inset-0 bg-slate-900/40 z-10"></div>
</img></div>
<div className="relative z-20 text-center px-4 max-w-4xl mx-auto pointer-events-none">
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-4 drop-shadow-md">
                Boutique Hotel v srdci Olomouce
            </h1>
<p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto drop-shadow-md">
                Tradice, elegance a osobní přístup pro váš dokonalý pobyt.
            </p>
</div>
</header>

<div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-20">
<div className="bg-white shadow-xl shadow-black/10 flex flex-col lg:flex-row border border-black/5">
<div className="grid grid-cols-1 md:grid-cols-4 w-full divide-y md:divide-y-0 md:divide-x divide-slate-100">

<div className="relative group cursor-pointer p-4 hover:bg-slate-50 transition-colors">
<label className="block text-xs font-normal text-slate-500 mb-1 uppercase tracking-wide">Příjezd</label>
<div className="flex items-center justify-between text-slate-900">
<span className="text-base font-medium">12. Října 2023</span>
<iconify-icon className="text-amber-700" icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
</div>

<div className="relative group cursor-pointer p-4 hover:bg-slate-50 transition-colors">
<label className="block text-xs font-normal text-slate-500 mb-1 uppercase tracking-wide">Odjezd</label>
<div className="flex items-center justify-between text-slate-900">
<span className="text-base font-medium">15. Října 2023</span>
<iconify-icon className="text-amber-700" icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
</div>

<div className="relative group cursor-pointer p-4 hover:bg-slate-50 transition-colors">
<label className="block text-xs font-normal text-slate-500 mb-1 uppercase tracking-wide">Hosté</label>
<div className="flex items-center justify-between text-slate-900 relative">
<select className="w-full appearance-none bg-transparent text-base font-medium focus:outline-none cursor-pointer pr-8">
<option>2 Dospělí</option>
<option>1 Dospělý</option>
<option>2 Dospělí, 1 Dítě</option>
</select>
<iconify-icon className="text-amber-700 absolute right-0 pointer-events-none" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>

<div className="relative group p-4 hover:bg-slate-50 transition-colors">
<label className="block text-xs font-normal text-slate-500 mb-1 uppercase tracking-wide">Promo kód</label>
<div className="flex items-center justify-between text-slate-900">
<input className="w-full bg-transparent text-base font-medium placeholder:text-slate-300 focus:outline-none" placeholder="Zadejte kód" type="text"/>
</div>
</div>
</div>
<button className="w-full lg:w-auto bg-amber-700 text-white px-8 py-5 text-sm font-medium uppercase tracking-wide hover:bg-amber-800 transition-colors whitespace-nowrap flex items-center justify-center gap-2">
                Zjistit cenu
                <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<section className="py-16 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-6 uppercase">
                        Vítejte v Hotelu Lafayette
                    </h2>
<div className="w-16 h-0.5 bg-amber-700 mb-8"></div>
<p className="text-base font-normal text-slate-600 leading-relaxed mb-6">
                        Hotel Lafayette se nachází v blízkosti historického centra města Olomouce. Naše filozofie spočívá v osobním přístupu k hostům a snaze vytvořit pro ně domácké prostředí, ať už cestují za obchodem nebo za odpočinkem.
                    </p>
<p className="text-base font-normal text-slate-600 leading-relaxed mb-8">
                        Všechny pokoje jsou vkusně a komfortně zařízeny masivním dřevěným nábytkem, který podtrhuje historický ráz budovy. Součástí hotelu je také vyhlášená restaurace s letní terasou a bezpečné uzavřené parkoviště.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 uppercase tracking-wide hover:text-amber-800 transition-colors" href="#">
                        Více o hotelu
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Hotel Interior" className="w-full h-64 object-cover" onerror="this.src='https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&amp;w=2574&amp;auto=format&amp;fit=crop'" src="https://www.lafayette.cz/wp-content/uploads/2016/11/galerie1.jpg"/>
<img alt="Restaurant" className="w-full h-64 object-cover mt-8" onerror="this.src='https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?q=80&amp;w=2664&amp;auto=format&amp;fit=crop'" src="https://www.lafayette.cz/wp-content/uploads/2016/11/galerie2.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-black/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4 uppercase">
                    Ubytování
                </h2>
<div className="w-16 h-0.5 bg-amber-700 mx-auto mb-6"></div>
<p className="text-base font-normal text-slate-600">
                    Vyberte si z naší nabídky elegantně zařízených pokojů s historickým šarmem.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white group flex flex-col border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Jednolůžkový pokoj" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.src='https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&amp;w=2574&amp;auto=format&amp;fit=crop'" src="https://www.lafayette.cz/wp-content/uploads/2016/11/pokoj1.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Jednolůžkový pokoj</h3>
<p className="text-sm font-normal text-slate-500 mb-6 line-clamp-2">Komfortní pokoj vybavený stylovým masivním nábytkem, ideální pro obchodní cestující.</p>
<div className="flex items-center gap-6 mb-8 mt-auto border-t border-b border-slate-100 py-3">
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-amber-700" icon="solar:bed-linear" width="18"></iconify-icon>
                                1 Lůžko
                            </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-amber-700" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                                1 Osoba
                            </div>
</div>
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-normal text-slate-500 uppercase tracking-wide">Cena od</span>
<span className="text-xl font-medium text-slate-900">1 850 Kč <span className="text-sm font-normal text-slate-500">/ noc</span></span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="py-3 px-4 border border-slate-200 text-xs font-medium uppercase tracking-wide text-slate-900 hover:bg-slate-50 transition-colors text-center">
                                Detail
                            </button>
<button className="py-3 px-4 bg-amber-700 text-xs font-medium uppercase tracking-wide text-white hover:bg-amber-800 transition-colors text-center">
                                Rezervovat
                            </button>
</div>
</div>
</div>

<div className="bg-white group flex flex-col border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Dvoulůžkový pokoj" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.src='https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&amp;w=2670&amp;auto=format&amp;fit=crop'" src="https://www.lafayette.cz/wp-content/uploads/2016/11/pokoj2.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Dvoulůžkový pokoj</h3>
<p className="text-sm font-normal text-slate-500 mb-6 line-clamp-2">Prostorný a světlý pokoj s možností oddělených postelí nebo manželské postele.</p>
<div className="flex items-center gap-6 mb-8 mt-auto border-t border-b border-slate-100 py-3">
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-amber-700" icon="solar:bed-linear" width="18"></iconify-icon>
                                Manželská
                            </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-amber-700" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                                2 Osoby
                            </div>
</div>
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-normal text-slate-500 uppercase tracking-wide">Cena od</span>
<span className="text-xl font-medium text-slate-900">2 450 Kč <span className="text-sm font-normal text-slate-500">/ noc</span></span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="py-3 px-4 border border-slate-200 text-xs font-medium uppercase tracking-wide text-slate-900 hover:bg-slate-50 transition-colors text-center">
                                Detail
                            </button>
<button className="py-3 px-4 bg-amber-700 text-xs font-medium uppercase tracking-wide text-white hover:bg-amber-800 transition-colors text-center">
                                Rezervovat
                            </button>
</div>
</div>
</div>

<div className="bg-white group flex flex-col border border-black/5 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
<div className="aspect-[4/3] relative overflow-hidden">
<img alt="Apartmá" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onerror="this.src='https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'" src="https://www.lafayette.cz/wp-content/uploads/2016/11/pokoj3.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Apartmá Lafayette</h3>
<p className="text-sm font-normal text-slate-500 mb-6 line-clamp-2">Luxusní apartmá s oddělenou obývací částí, koupelnou s rohovou vanou a nadstandardním vybavením.</p>
<div className="flex items-center gap-6 mb-8 mt-auto border-t border-b border-slate-100 py-3">
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-amber-700" icon="solar:sofa-linear" width="18"></iconify-icon>
                                Obývák
                            </div>
<div className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-amber-700" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                                2-4 Osoby
                            </div>
</div>
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-normal text-slate-500 uppercase tracking-wide">Cena od</span>
<span className="text-xl font-medium text-slate-900">3 200 Kč <span className="text-sm font-normal text-slate-500">/ noc</span></span>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="py-3 px-4 border border-slate-200 text-xs font-medium uppercase tracking-wide text-slate-900 hover:bg-slate-50 transition-colors text-center">
                                Detail
                            </button>
<button className="py-3 px-4 bg-amber-700 text-xs font-medium uppercase tracking-wide text-white hover:bg-amber-800 transition-colors text-center">
                                Rezervovat
                            </button>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 uppercase tracking-wide hover:text-amber-800 transition-colors" href="#">
                    Zobrazit všechny pokoje
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="flex flex-col md:flex-row min-h-[500px]">
<div className="md:w-1/2 relative min-h-[300px]">
<img alt="Restaurace Lafayette" className="absolute inset-0 w-full h-full object-cover" onerror="this.src='https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop'" src="https://www.lafayette.cz/wp-content/uploads/2016/11/restaurace.jpg"/>
</div>
<div className="md:w-1/2 bg-slate-900 flex items-center justify-center p-12 lg:p-24 text-white">
<div className="max-w-md">
<h2 className="text-3xl font-medium tracking-tight mb-4 uppercase">Restaurace &amp; Bar</h2>
<div className="w-16 h-0.5 bg-amber-700 mb-6"></div>
<p className="text-base font-light text-white/80 leading-relaxed mb-8">
                    Vychutnejte si kulinářské speciality v naší elegantní restauraci. Zaměřujeme se na tradiční českou i mezinárodní kuchyni, připravovanou z těch nejkvalitnějších čerstvých surovin.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm font-normal text-white/90">
<iconify-icon className="text-amber-700" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Bohaté bufetové snídaně
                    </li>
<li className="flex items-center gap-3 text-sm font-normal text-white/90">
<iconify-icon className="text-amber-700" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Polední menu
                    </li>
<li className="flex items-center gap-3 text-sm font-normal text-white/90">
<iconify-icon className="text-amber-700" icon="solar:check-circle-linear" width="20"></iconify-icon>
                        Letní terasa ve dvoře
                    </li>
</ul>
<a className="inline-block px-6 py-3 border border-amber-700 text-amber-700 text-sm font-medium uppercase tracking-wide hover:bg-amber-700 hover:text-white transition-colors" href="#">
                    Více o restauraci
                </a>
</div>
</div>
</section>

<footer className="bg-slate-950 text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<div className="mb-6">
<img alt="Hotel Lafayette" className="h-10 w-auto object-contain grayscale opacity-80" src="https://www.lafayette.cz/wp-content/uploads/2016/11/logo-1tn.png"/>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-white/70 font-light">
<iconify-icon className="text-amber-700 shrink-0" icon="solar:map-point-linear" width="20"></iconify-icon>
                            Alšova 8<br/>779 00 Olomouc<br/>Česká republika
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<iconify-icon className="text-amber-700 shrink-0" icon="solar:phone-linear" width="20"></iconify-icon>
                            +420 585 436 444
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70 font-light">
<iconify-icon className="text-amber-700 shrink-0" icon="solar:letter-linear" width="20"></iconify-icon>
                            recepce@lafayette.cz
                        </li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Rychlé odkazy</h4>
<ul className="space-y-3">
<li><a className="text-sm font-light text-white/70 hover:text-amber-700 transition-colors" href="#">Úvod</a></li>
<li><a className="text-sm font-light text-white/70 hover:text-amber-700 transition-colors" href="#">Ubytování</a></li>
<li><a className="text-sm font-light text-white/70 hover:text-amber-700 transition-colors" href="#">Ceník</a></li>
<li><a className="text-sm font-light text-white/70 hover:text-amber-700 transition-colors" href="#">Fotogalerie</a></li>
<li><a className="text-sm font-light text-white/70 hover:text-amber-700 transition-colors" href="#">Kontakt</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Informace</h4>
<ul className="space-y-3">
<li><a className="text-sm font-light text-white/70 hover:text-amber-700 transition-colors" href="#">Všeobecné obchodní podmínky</a></li>
<li><a className="text-sm font-light text-white/70 hover:text-amber-700 transition-colors" href="#">Zásady zpracování osobních údajů</a></li>
<li><a className="text-sm font-light text-white/70 hover:text-amber-700 transition-colors" href="#">Reklamační řád</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-6 uppercase tracking-wide">Newsletter</h4>
<p className="text-sm font-light text-white/70 mb-4">
                        Přihlaste se k odběru novinek a získejte informace o speciálních akcích.
                    </p>
<form className="flex flex-col gap-3">
<input className="bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-amber-700 transition-colors" placeholder="Váš e-mail" type="email"/>
<button className="bg-amber-700 text-white px-4 py-3 text-sm font-medium uppercase tracking-wide hover:bg-amber-800 transition-colors" type="submit">
                            Odebírat
                        </button>
</form>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs font-light text-white/50">
                    © 2023 Hotel Lafayette Olomouc. Všechna práva vyhrazena.
                </p>
</div>
</div>
</footer>



    </>
  );
}
