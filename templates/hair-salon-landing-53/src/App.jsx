import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
<a className="text-xl tracking-tighter font-medium uppercase border border-black px-3 py-1 hover:bg-black hover:text-white transition-colors duration-500" href="#">
                Silhouette
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-zinc-500">
<a className="hover:text-black transition-colors" href="#cenik">Ceník</a>
<a className="hover:text-black transition-colors" href="#inspirace">Inspirace</a>
<a className="hover:text-black transition-colors" href="#kontakt">Kontakt</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium border-b border-transparent hover:border-black transition-all pb-0.5" href="tel:+420123456789">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>+420 123 456 789</span>
</a>

<button className="md:hidden text-zinc-800">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute inset-0 pointer-events-none opacity-10">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="hair-strand" d="M10,0 Q15,50 10,100" fill="none" stroke="black" strokeWidth="0.2"></path>
<path className="hair-strand" d="M20,0 Q25,50 20,100" fill="none" stroke="black" strokeWidth="0.1"></path>
<path className="hair-strand" d="M30,0 Q20,50 30,100" fill="none" stroke="black" strokeWidth="0.3"></path>
<path className="hair-strand" d="M40,0 Q45,50 40,100" fill="none" stroke="black" strokeWidth="0.1"></path>
<path className="hair-strand" d="M50,0 Q60,50 50,100" fill="none" stroke="black" strokeWidth="0.2"></path>
<path className="hair-strand" d="M60,0 Q55,50 60,100" fill="none" stroke="black" strokeWidth="0.3"></path>
<path className="hair-strand" d="M70,0 Q80,50 70,100" fill="none" stroke="black" strokeWidth="0.1"></path>
<path className="hair-strand" d="M80,0 Q75,50 80,100" fill="none" stroke="black" strokeWidth="0.2"></path>
<path className="hair-strand" d="M90,0 Q95,50 90,100" fill="none" stroke="black" strokeWidth="0.1"></path>
</svg>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
<div className="reveal-text flex justify-center mb-6 text-zinc-400">
<iconify-icon icon="solar:scissors-square-linear" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<h1 className="reveal-text delay-100 text-5xl md:text-7xl lg:text-8xl tracking-tighter font-light mb-6 text-zinc-900">
                Umění<br/><span className="font-normal italic">Detailu</span>
</h1>
<p className="reveal-text delay-200 text-lg md:text-xl text-zinc-500 font-light tracking-wide max-w-lg mx-auto mb-10">
                Prémiová péče o vlasy v srdci města. Kde se preciznost střihu potkává s elegancí stylu.
            </p>
<div className="reveal-text delay-300 flex flex-col md:flex-row gap-4 justify-center items-center">
<a className="bg-zinc-900 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-zinc-700 transition-colors duration-300 w-full md:w-auto" href="#kontakt">
                    Rezervovat termín
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400">
<iconify-icon icon="solar:arrow-down-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 bg-zinc-50" id="cenik">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-light mb-4">Ceník Služeb</h2>
<div className="w-12 h-px bg-zinc-300 mx-auto"></div>
</div>
<div className="grid md:grid-cols-2 gap-16 md:gap-24">

<div>
<h3 className="text-xl tracking-tight font-normal mb-8 flex items-center gap-3 text-zinc-800">
<iconify-icon icon="solar:user-heart-linear" width="20"></iconify-icon> Dámský střih
                    </h3>
<ul className="space-y-6">
<li className="flex justify-between items-baseline border-b border-zinc-200 pb-2 group hover:border-zinc-400 transition-colors">
<span className="text-zinc-600 font-light group-hover:text-black transition-colors">Střih &amp; Foukaná (krátké)</span>
<span className="text-sm font-medium tracking-wide">950 Kč</span>
</li>
<li className="flex justify-between items-baseline border-b border-zinc-200 pb-2 group hover:border-zinc-400 transition-colors">
<span className="text-zinc-600 font-light group-hover:text-black transition-colors">Střih &amp; Foukaná (dlouhé)</span>
<span className="text-sm font-medium tracking-wide">1 250 Kč</span>
</li>
<li className="flex justify-between items-baseline border-b border-zinc-200 pb-2 group hover:border-zinc-400 transition-colors">
<span className="text-zinc-600 font-light group-hover:text-black transition-colors">Barvení (komplet)</span>
<span className="text-sm font-medium tracking-wide">od 1 800 Kč</span>
</li>
<li className="flex justify-between items-baseline border-b border-zinc-200 pb-2 group hover:border-zinc-400 transition-colors">
<span className="text-zinc-600 font-light group-hover:text-black transition-colors">Balayage / Melír</span>
<span className="text-sm font-medium tracking-wide">od 2 500 Kč</span>
</li>
<li className="flex justify-between items-baseline border-b border-zinc-200 pb-2 group hover:border-zinc-400 transition-colors">
<span className="text-zinc-600 font-light group-hover:text-black transition-colors">Regenerační kúra</span>
<span className="text-sm font-medium tracking-wide">550 Kč</span>
</li>
</ul>
</div>

<div>
<h3 className="text-xl tracking-tight font-normal mb-8 flex items-center gap-3 text-zinc-800">
<iconify-icon icon="solar:user-hands-linear" width="20"></iconify-icon> Pánský střih
                    </h3>
<ul className="space-y-6">
<li className="flex justify-between items-baseline border-b border-zinc-200 pb-2 group hover:border-zinc-400 transition-colors">
<span className="text-zinc-600 font-light group-hover:text-black transition-colors">Klasický střih</span>
<span className="text-sm font-medium tracking-wide">550 Kč</span>
</li>
<li className="flex justify-between items-baseline border-b border-zinc-200 pb-2 group hover:border-zinc-400 transition-colors">
<span className="text-zinc-600 font-light group-hover:text-black transition-colors">Střih strojkem</span>
<span className="text-sm font-medium tracking-wide">350 Kč</span>
</li>
<li className="flex justify-between items-baseline border-b border-zinc-200 pb-2 group hover:border-zinc-400 transition-colors">
<span className="text-zinc-600 font-light group-hover:text-black transition-colors">Úprava vousů &amp; Hot Towel</span>
<span className="text-sm font-medium tracking-wide">450 Kč</span>
</li>
<li className="flex justify-between items-baseline border-b border-zinc-200 pb-2 group hover:border-zinc-400 transition-colors">
<span className="text-zinc-600 font-light group-hover:text-black transition-colors">Komplet (Vlasy + Vousy)</span>
<span className="text-sm font-medium tracking-wide">850 Kč</span>
</li>
<li className="flex justify-between items-baseline border-b border-zinc-200 pb-2 group hover:border-zinc-400 transition-colors">
<span className="text-zinc-600 font-light group-hover:text-black transition-colors">Dětský střih (do 10 let)</span>
<span className="text-sm font-medium tracking-wide">350 Kč</span>
</li>
</ul>
</div>
</div>
<p className="mt-12 text-xs text-zinc-400 text-center font-light">* Ceny jsou orientační a mohou se lišit dle náročnosti úkonu a spotřeby materiálu.</p>
</div>
</section>

<section className="py-0 bg-white" id="inspirace">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<div className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
<img alt="Pánský střih" className="w-full h-full object-cover grayscale transition duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;bg=000000"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
<img alt="Dámský střih" className="w-full h-full object-cover grayscale transition duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;bg=000000"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
<img alt="Pánský střih" className="w-full h-full object-cover grayscale transition duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
<img alt="Dámský střih" className="w-full h-full object-cover grayscale transition duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;bg=000000"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
<img alt="Pánský střih" className="w-full h-full object-cover grayscale transition duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;bg=000000"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden bg-zinc-100">
<img alt="Dámský střih" className="w-full h-full object-cover grayscale transition duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=800&amp;auto=format&amp;fit=crop&amp;bg=000000"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
</div>
</div>
</section>

<footer className="bg-black text-white py-20 border-t border-zinc-900" id="kontakt">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">

<div className="space-y-12">
<div>
<h2 className="text-3xl tracking-tight font-light mb-8">Kontakt</h2>
<div className="space-y-6 text-zinc-400 font-light">
<div className="flex items-start gap-4">
<iconify-icon className="mt-1 text-white" icon="solar:map-point-linear" width="20"></iconify-icon>
<div>
<p className="text-white text-lg mb-1">Dlouhá 24</p>
<p>110 00 Praha 1</p>
</div>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-white" icon="solar:phone-linear" width="20"></iconify-icon>
<a className="hover:text-white transition-colors text-lg" href="tel:+420123456789">+420 123 456 789</a>
</div>
<div className="flex items-center gap-4">
<iconify-icon className="text-white" icon="solar:letter-linear" width="20"></iconify-icon>
<a className="hover:text-white transition-colors text-lg" href="mailto:info@silhouettestudio.cz">info@silhouettestudio.cz</a>
</div>
</div>
</div>
<div>
<h3 className="text-sm uppercase tracking-widest text-zinc-500 mb-4">Otevírací doba</h3>
<div className="grid grid-cols-2 max-w-xs text-sm text-zinc-300 gap-y-2">
<span>Po - Pá</span>
<span className="text-right">9:00 - 20:00</span>
<span>Sobota</span>
<span className="text-right">10:00 - 16:00</span>
<span>Neděle</span>
<span className="text-right">Zavřeno</span>
</div>
</div>
<a className="inline-flex items-center gap-3 text-white border border-zinc-800 px-6 py-3 hover:bg-white hover:text-black transition-all duration-300" href="https://instagram.com" target="_blank">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-wide">Sledujte nás na Instagramu</span>
</a>
</div>

<div className="w-full h-80 md:h-full min-h-[400px] bg-zinc-900 relative grayscale invert filter opacity-90 overflow-hidden border border-zinc-800">

<div className="absolute inset-0 opacity-20">

<div className="absolute top-1/2 left-0 w-full h-2 bg-zinc-500 transform -translate-y-1/2 rotate-3"></div>
<div className="absolute top-0 left-1/3 w-2 h-full bg-zinc-500 transform -skew-x-12"></div>
<div className="absolute top-1/4 left-0 w-full h-1 bg-zinc-600"></div>
<div className="absolute bottom-1/3 right-0 w-1/2 h-1 bg-zinc-600"></div>

<div className="absolute top-1/4 left-1/4 w-20 h-20 bg-zinc-700/50"></div>
<div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-zinc-700/50"></div>
</div>

<div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
<div className="relative">
<iconify-icon className="text-white drop-shadow-lg" icon="solar:map-point-bold" width="48"></iconify-icon>
<span className="absolute top-0 right-0 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
</span>
</div>
<div className="bg-black text-white text-xs px-2 py-1 mt-1 font-medium tracking-wide border border-zinc-700 shadow-xl">
                            SILHOUETTE
                        </div>
</div>
<div className="absolute bottom-4 right-4 bg-black text-white text-xs px-3 py-1 border border-zinc-800">
                        Map Data © 2024
                   </div>
</div>
</div>
<div className="border-t border-zinc-900 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 font-light">
<p>© 2024 Silhouette Studio. Všechna práva vyhrazena.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Ochrana údajů</a>
<a className="hover:text-zinc-400" href="#">Obchodní podmínky</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
