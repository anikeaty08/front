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
      

<header className="fixed top-0 w-full z-50 bg-white border-b border-black h-16 sm:h-20 flex items-center justify-between px-4 sm:px-8 transition-all">

<div className="flex-1">
<a className="font-serif text-xl sm:text-2xl tracking-tighter font-semibold hover:opacity-70 transition-opacity" href="#">
                NOWA GŁOWA
            </a>
</div>

<nav className="hidden md:flex gap-12 flex-1 justify-center">
<a className="text-xs tracking-widest uppercase hover-underline-animation" href="#sklep">Sklep</a>
<a className="text-xs tracking-widest uppercase hover-underline-animation" href="#o-nas">O Wydawnictwie</a>
<a className="text-xs tracking-widest uppercase hover-underline-animation" href="#kontakt">Kontakt</a>
</nav>

<div className="flex-1 flex justify-end">
<button className="text-xs tracking-widest uppercase flex items-center gap-2 hover:opacity-70 transition-opacity">
<span>KOSZYK (0)</span>
</button>
</div>

<button className="md:hidden ml-4">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</header>

<main className="pt-16 sm:pt-20">

<section className="min-h-[85vh] flex flex-col md:flex-row border-b border-black">

<div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-12 py-12 md:border-r border-black relative">
<div className="max-w-xl mx-auto md:mx-0">
<span className="block font-sans text-xs tracking-widest mb-6 uppercase">Nowość Wydawnicza</span>
<h1 className="text-5xl sm:text-6xl md:text-7xl leading-[1.1] tracking-tight mb-8">
                        Książki, które <br/> <i className="font-serif italic">zmieniają</i> <br/> perspektywę.
                    </h1>
<p className="font-sans text-sm sm:text-base leading-relaxed max-w-md mb-10 font-light">
                        Literatura faktu, która wymyka się schematom. Odkryj wydawnicze ramię Latającej Szkoły i zanurz się w historiach, które budują nową rzeczywistość.
                    </p>
<a className="inline-block border border-black px-8 py-4 text-xs tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300" href="#product-highlight">
                        Zobacz premierę
                    </a>
</div>
</div>

<div className="w-full md:w-1/2 bg-gray-50 h-[50vh] md:h-auto relative overflow-hidden group">
<img alt="Okładka książki artystyczna" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="border-b border-black" id="sklep">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<article className="group relative border-b md:border-b-0 md:border-r border-black p-8 sm:p-12 hover:bg-neutral-50 transition-colors cursor-pointer">
<div className="aspect-[3/4] w-full bg-neutral-100 mb-8 overflow-hidden border border-black/10">
<img alt="BANY" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col items-center text-center">
<h3 className="font-serif text-2xl font-semibold mb-2 tracking-tight group-hover:underline decoration-1 underline-offset-4">BANY</h3>
<p className="text-sm font-light mb-4">Agata Dutkowska</p>
<span className="text-sm font-medium">49,00 zł</span>
</div>
<a aria-label="Zobacz produkt" className="absolute inset-0 z-10" href="#product-view"></a>
</article>

<article className="group relative border-b md:border-b-0 lg:border-r border-black p-8 sm:p-12 hover:bg-neutral-50 transition-colors cursor-pointer">
<div className="aspect-[3/4] w-full bg-neutral-100 mb-8 overflow-hidden border border-black/10">
<img alt="KRUS&amp;LOVE" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col items-center text-center">
<h3 className="font-serif text-2xl font-semibold mb-2 tracking-tight group-hover:underline decoration-1 underline-offset-4">KRUS&amp;LOVE</h3>
<p className="text-sm font-light mb-4">Małgorzata Rant</p>
<span className="text-sm font-medium">44,00 zł</span>
</div>
<a aria-label="Zobacz produkt" className="absolute inset-0 z-10" href="#product-view"></a>
</article>

<article className="group relative border-black p-8 sm:p-12 hover:bg-neutral-50 transition-colors cursor-pointer">
<div className="aspect-[3/4] w-full bg-neutral-100 mb-8 overflow-hidden border border-black/10">
<img alt="Zeszyt Ćwiczeń" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col items-center text-center">
<h3 className="font-serif text-2xl font-semibold mb-2 tracking-tight group-hover:underline decoration-1 underline-offset-4">LATAJĄCY ZESZYT</h3>
<p className="text-sm font-light mb-4">Praca Zbiorowa</p>
<span className="text-sm font-medium">35,00 zł</span>
</div>
<a aria-label="Zobacz produkt" className="absolute inset-0 z-10" href="#product-view"></a>
</article>
</div>
</section>

<section className="flex flex-col md:flex-row border-b border-black" id="product-view">

<div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-black bg-neutral-50 relative min-h-[60vh] md:min-h-screen p-8 sm:p-20 flex items-center justify-center">
<img alt="BANY Detal" className="max-w-full max-h-[80vh] shadow-xl shadow-black/5 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-full md:w-1/2 p-8 sm:p-16 lg:p-24 flex flex-col justify-center bg-white">
<div className="mb-2">
<span className="text-xs uppercase tracking-widest border border-black px-2 py-1 inline-block">Best seller</span>
</div>
<h1 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-2 tracking-tight leading-none">BANY</h1>
<h2 className="font-sans text-base sm:text-lg font-light mb-8">Agata Dutkowska</h2>
<p className="font-sans text-sm sm:text-base font-light leading-relaxed mb-10 max-w-md">
                    To nie jest kolejna książka o biznesie. To manifest wolności w tworzeniu własnej ścieżki. "Bany" dekonstruuje mity o sukcesie i zaprasza do świata, gdzie intuicja spotyka się z pragmatyzmem. Obowiązkowa lektura dla każdej absolwentki Szkoły.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
<span className="font-serif text-3xl sm:text-4xl">49,00 zł</span>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<iconify-icon className="text-black" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-black">Dostępna od ręki</span>
</div>
</div>

<button className="w-full sm:w-auto bg-black text-white px-12 py-5 text-sm tracking-widest uppercase hover:bg-white hover:text-black border border-black transition-colors duration-300 flex items-center justify-center gap-3 group">
                    Kup teraz
                    <iconify-icon className="transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="mt-8 text-xs text-neutral-400 font-light flex gap-4">
<span>Bezpieczna płatność przez Stripe</span>
<span>Wysyłka w 24h</span>
</div>
</div>
</section>

<section className="py-24 sm:py-32 px-6 border-b border-black text-center">
<blockquote className="max-w-3xl mx-auto">
<p className="font-serif text-2xl sm:text-3xl md:text-4xl italic leading-tight mb-8">
                    „Czytanie to akt buntu przeciwko przeciętności. W Nowej Głowie wydajemy tylko to, co sami chcielibyśmy czytać nocami.”
                </p>
<footer className="text-xs tracking-widest uppercase not-italic">— Zespół Latającej Szkoły</footer>
</blockquote>
</section>
</main>

<footer className="bg-white text-black">
<div className="grid grid-cols-1 md:grid-cols-2 border-b border-black">

<div className="p-8 sm:p-16 md:border-r border-black flex flex-col justify-center">
<h3 className="font-serif text-2xl mb-6">Newsletter</h3>
<p className="text-sm font-light mb-6 max-w-sm">Zapisz się, aby otrzymywać informacje o premierach i ekskluzywne fragmenty nadchodzących książek.</p>
<form className="flex flex-col sm:flex-row gap-0 sm:gap-0 max-w-md w-full">
<input className="w-full bg-transparent border-b border-black py-3 px-0 text-sm focus:outline-none focus:border-black placeholder:text-neutral-400 rounded-none appearance-none" placeholder="TWÓJ E-MAIL" type="email"/>
<button className="mt-4 sm:mt-0 sm:ml-4 border-b border-black py-3 px-0 text-sm tracking-widest uppercase hover:opacity-60 text-left sm:text-center whitespace-nowrap" type="button">
                        Zapisz
                    </button>
</form>
</div>

<div className="p-8 sm:p-16 flex flex-col justify-between">
<div className="grid grid-cols-2 gap-8 mb-12 md:mb-0">
<div>
<h4 className="text-xs tracking-widest uppercase mb-6 font-semibold">Sklep</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Książki</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">E-booki</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Pakiety</a></li>
</ul>
</div>
<div>
<h4 className="text-xs tracking-widest uppercase mb-6 font-semibold">Informacje</h4>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Regulamin</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Polityka Prywatności</a></li>
<li><a className="hover:underline decoration-1 underline-offset-4" href="#">Wysyłka i zwroty</a></li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
<p className="text-xs font-light opacity-60">
                        Wydawnictwo Latającej Szkoły © 2023
                    </p>
<div className="flex gap-4">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="py-4 px-4 text-center">
<p className="text-[10px] tracking-widest uppercase opacity-50">Designed for Nowa Głowa</p>
</div>
</footer>

    </>
  );
}
