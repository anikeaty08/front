import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px 0px -10% 0px',
                threshold: 0
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = "1";
                        entry.target.style.transform = "translateY(0)";
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll(".reveal-el").forEach(el => {
                el.style.opacity = "0";
                el.style.transform = "translateY(3rem)";
                el.style.transition = "opacity 2s cubic-bezier(0.16, 1, 0.3, 1), transform 2s cubic-bezier(0.16, 1, 0.3, 1)";
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="film-grain"></div>

<a className="fixed md:bottom-12 md:right-12 z-50 uppercase hover:scale-95 hover:bg-[#06140f] transition-all duration-1000 flex items-center justify-center text-xs text-stone-100 tracking-widest bg-[#0a1c15]/90 border border-stone-100/10 w-28 h-28 rounded-full right-6 bottom-6 shadow-2xl backdrop-blur-md reveal-el delay-1000" href="#book">
        Entrer
    </a>

<nav className="absolute z-40 w-full top-0 left-0 mix-blend-difference text-stone-100 reveal-el">
<div className="flex h-32 max-w-screen-2xl mx-auto px-6 md:px-16 items-center justify-between">
<a className="block text-xs tracking-[0.4em] uppercase font-extralight opacity-80 hover:opacity-100 transition-opacity duration-700" href="#">
                Le Melville
            </a>
<div className="hidden md:flex gap-16 text-xs font-extralight tracking-[0.3em] uppercase opacity-80">
<a className="hover:opacity-100 transition-opacity duration-700" href="#experience">Menu</a>
<a className="hover:opacity-100 transition-opacity duration-700" href="#program">Agenda</a>
</div>
<button className="md:hidden flex items-center opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030806]">
<div className="absolute inset-0 z-0">
<img alt="Ambiance nocturne" className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_20s_ease-in-out_infinite] blur-[1px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c85aa17c-69e3-4a03-9c41-3a2c5eb8f518_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#030806]/80"></div>
</div>
<div className="z-10 w-full px-6 text-center relative mt-24 reveal-el">
<h1 className="text-massive font-extralight text-stone-50 tracking-tighter font-serif">
                L'art du secret.<br/>La note juste.<br/><span className="italic text-stone-400">L'instant.</span>
</h1>
</div>
</header>

<section className="py-32 md:py-64 bg-stone-50 px-6">
<div className="max-w-4xl mx-auto text-center reveal-el">
<h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-stone-900 font-extralight leading-tight tracking-tighter">
                Il est des lieux qui ne se cherchent pas.<br/>
<span className="italic text-stone-400">Ils s'éprouvent.</span>
</h2>
</div>
</section>

<section className="pb-32 md:pb-64" id="experience">

<div className="max-w-screen-2xl mx-auto px-6 md:px-16 mb-48 flex flex-col md:flex-row items-center gap-16 md:gap-32">
<div className="w-full md:w-5/12 img-container group h-[70vh] md:h-[90vh] reveal-el">
<img alt="Pianiste de jazz" className="w-full h-full object-cover image-zoom grayscale-[30%]" src="https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
</div>
<div className="w-full md:w-6/12 flex flex-col items-start pt-12 md:pt-0 md:-ml-12 z-10 reveal-el delay-200">
<h3 className="font-serif text-huge tracking-tighter text-stone-900 mb-8 lg:mb-16">Résonance.</h3>
<p className="text-stone-500 text-xl md:text-3xl font-extralight font-serif italic leading-relaxed max-w-lg">
                    Le premier accord brise la nuit. Le piano frissonne, le temps s'efface. L'improvisation devient la seule boussole.
                </p>
</div>
</div>

<div className="bg-[#050e0a] text-stone-50 py-48 md:py-64 my-32 md:my-64 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0,transparent_100%)]"></div>
<div className="max-w-screen-2xl mx-auto px-6 md:px-16 flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32 relative z-10">
<div className="w-full md:w-5/12 img-container group h-[60vh] md:h-[80vh] reveal-el">
<img alt="Cocktail signature" className="w-full h-full object-cover image-zoom opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/160dc0a2-f888-4312-a832-c6225c83c05b_1600w.png"/>
</div>
<div className="w-full md:w-6/12 flex flex-col items-start md:items-end md:text-right pt-12 md:pt-0 md:-mr-12 reveal-el delay-200">
<h3 className="font-serif text-huge tracking-tighter mb-8 lg:mb-16">L'Élixir.</h3>
<p className="text-stone-400 text-xl md:text-3xl font-extralight font-serif italic leading-relaxed max-w-lg">
                        Notes ambrées, reflets d'émeraude. Le tintement de la glace rythme les confidences. Un parfum subtil qui prolonge l'instant.
                    </p>
</div>
</div>
</div>

<div className="max-w-screen-2xl mx-auto px-6 md:px-16 mt-48 flex flex-col md:flex-row items-center gap-16 md:gap-32">
<div className="w-full md:w-5/12 img-container group h-[70vh] md:h-[90vh] reveal-el">
<img alt="Plat gastronomique" className="w-full h-full object-cover image-zoom grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b30be0e9-ccda-4cf9-bc69-dedb9ac153cc_1600w.png"/>
</div>
<div className="w-full md:w-6/12 flex flex-col items-start pt-12 md:pt-0 md:-ml-12 z-10 reveal-el delay-200">
<h3 className="font-serif text-huge tracking-tighter text-stone-900 mb-8 lg:mb-16">Le Geste.</h3>
<p className="text-stone-500 text-xl md:text-3xl font-extralight font-serif italic leading-relaxed max-w-lg">
                    Une poésie brute. L'éclat d'une saveur inattendue dans la pénombre, où chaque assiette devient une partition.
                </p>
</div>
</div>
</section>

<section className="py-48 md:py-72 bg-[#020504] text-stone-100 px-6">
<div className="max-w-4xl mx-auto text-center reveal-el">
<p className="text-xs tracking-[0.5em] uppercase text-stone-500 mb-16 opacity-70 font-extralight">L'Atmosphère</p>
<h2 className="font-serif text-4xl md:text-7xl font-extralight leading-tight tracking-tighter text-stone-300">
                Le monde extérieur s'efface.<br/>
<span className="italic text-stone-500">Il ne reste que la nuit et vous.</span>
</h2>
</div>
</section>

<section className="py-48 md:py-72 bg-stone-50" id="program">
<div className="max-w-5xl mx-auto px-6 md:px-16">
<h2 className="font-serif text-huge tracking-tighter text-stone-900 font-extralight leading-none mb-32 md:mb-48 text-center reveal-el">
                Ce soir.
            </h2>
<div className="flex flex-col">

<div className="group flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-stone-200 cursor-pointer reveal-el">
<span className="text-xs tracking-[0.3em] text-stone-400 uppercase font-extralight md:w-1/4 mb-4 md:mb-0 transition-colors duration-700 group-hover:text-stone-900">24 Oct</span>
<h4 className="font-serif text-4xl md:text-7xl tracking-tighter text-stone-900 md:w-1/2 text-left md:text-center transition-all duration-700 ease-out group-hover:translate-x-4 md:group-hover:translate-x-0 group-hover:italic opacity-80 group-hover:opacity-100">Trio Nuances</h4>
<span className="text-xs text-stone-400 font-extralight tracking-widest md:w-1/4 text-left md:text-right mt-4 md:mt-0 transition-colors duration-700 group-hover:text-stone-900">PIANO</span>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-stone-200 cursor-pointer reveal-el">
<span className="text-xs tracking-[0.3em] text-stone-400 uppercase font-extralight md:w-1/4 mb-4 md:mb-0 transition-colors duration-700 group-hover:text-stone-900">25 Oct</span>
<h4 className="font-serif text-4xl md:text-7xl tracking-tighter text-stone-900 md:w-1/2 text-left md:text-center transition-all duration-700 ease-out group-hover:translate-x-4 md:group-hover:translate-x-0 group-hover:italic opacity-80 group-hover:opacity-100">Sarah Léon</h4>
<span className="text-xs text-stone-400 font-extralight tracking-widest md:w-1/4 text-left md:text-right mt-4 md:mt-0 transition-colors duration-700 group-hover:text-stone-900">VOCAL</span>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between py-12 md:py-16 border-b border-stone-200 cursor-pointer reveal-el">
<span className="text-xs tracking-[0.3em] text-stone-400 uppercase font-extralight md:w-1/4 mb-4 md:mb-0 transition-colors duration-700 group-hover:text-stone-900">26 Oct</span>
<h4 className="font-serif text-4xl md:text-7xl tracking-tighter text-stone-900 md:w-1/2 text-left md:text-center transition-all duration-700 ease-out group-hover:translate-x-4 md:group-hover:translate-x-0 group-hover:italic opacity-80 group-hover:opacity-100">Nuits Cubaines</h4>
<span className="text-xs text-stone-400 font-extralight tracking-widest md:w-1/4 text-left md:text-right mt-4 md:mt-0 transition-colors duration-700 group-hover:text-stone-900">LATIN</span>
</div>
</div>
</div>
</section>

<section className="py-48 md:py-72 bg-stone-100 px-6 relative" id="book">
<div className="max-w-2xl mx-auto text-center reveal-el">
<p className="text-xs tracking-[0.4em] uppercase text-stone-400 mb-16 opacity-70 font-extralight">Le Privilège</p>
<h2 className="text-5xl md:text-8xl tracking-tighter font-serif mb-32 font-extralight text-stone-900">
                Prendre place.
            </h2>
<form className="flex flex-col gap-20 justify-center w-full">
<div className="w-full border-b border-stone-300 pb-4 group focus-within:border-stone-900 transition-colors duration-700">
<input className="w-full bg-transparent border-0 text-stone-900 text-2xl md:text-5xl font-serif text-center font-extralight placeholder:text-stone-300 transition-colors cursor-pointer italic" placeholder="Quand souhaitez-vous venir ?" readonly="" type="text"/>
</div>
<div className="w-full border-b border-stone-300 pb-4 group focus-within:border-stone-900 transition-colors duration-700">
<select className="w-full bg-transparent border-0 text-stone-900 text-2xl md:text-5xl font-serif text-center font-extralight transition-colors cursor-pointer text-center-last">
<option className="text-stone-300 hidden" disabled="" selected="" value="">Pour combien de personnes ?</option>
<option className="text-stone-900 text-xl">Une table pour deux</option>
<option className="text-stone-900 text-xl">Quelques intimes (3-4)</option>
<option className="text-stone-900 text-xl">Privatiser le lieu</option>
</select>
</div>
</form>
</div>
</section>

<footer className="bg-[#020504] text-stone-100 pt-32 pb-16 px-6 md:px-16">
<div className="flex flex-col md:flex-row md:items-end justify-between max-w-screen-2xl mx-auto gap-y-16 reveal-el">
<div>
<p className="font-serif text-3xl md:text-5xl tracking-tighter mb-8 font-extralight text-stone-300">Le Melville</p>
<p className="text-stone-500 font-extralight text-xs tracking-[0.2em] uppercase leading-loose opacity-70">
                    28 Rue Jean Mermoz<br/>Paris VIII
                </p>
</div>
<div className="flex flex-col md:flex-row gap-12 text-xs text-stone-500 font-extralight tracking-[0.3em] uppercase">
<a className="hover:text-stone-100 transition-colors duration-700" href="#">La Carte</a>
<a className="hover:text-stone-100 transition-colors duration-700" href="#">Instagram</a>
<a className="hover:text-stone-100 transition-colors duration-700" href="#">Confidentialité</a>
</div>
</div>
</footer>



    </>
  );
}
