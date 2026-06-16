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
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-reveal').forEach((element) => {
                observer.observe(element);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24f7ce7f-876a-4421-9791-0b4228247bb4_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 transition-all">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-slate-900 font-medium text-xl tracking-tighter flex items-center gap-2" href="#">
                GHC
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-light text-slate-500">
<a className="hover:text-purple-600 transition-colors" href="#o-nas">O nás</a>
<a className="hover:text-purple-600 transition-colors" href="#galerie">Galerie</a>
<a className="hover:text-purple-600 transition-colors" href="#proc-my">Proč my</a>
<a className="hover:text-purple-600 transition-colors" href="#kontakt">Kontakt</a>
</nav>
<button className="md:hidden text-slate-500 text-2xl flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="md:pt-52 md:pb-32 overflow-hidden flex min-h-[85vh] pt-40 pb-24 relative items-center justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-purple-200/30 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center z-10 scroll-reveal transition-all duration-1000 ease-out">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
                Get Hot Candles
            </h1>
<h2 className="text-xl md:text-2xl text-purple-600 font-light mb-8 tracking-tight">
                Svíčky inspirované míchanými drinky
            </h2>
<p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto mb-12 font-light leading-relaxed">
                Vytváříme originální vůně, které přinášejí jedinečnou atmosféru do vašeho prostoru.
            </p>
<div className="flex items-center justify-center">
<a className="px-8 py-3.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-purple-600 transition-all shadow-lg hover:shadow-purple-500/25 flex items-center gap-2" href="#o-nas">
                    Zjistit více
                    <iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 relative bg-white border-y border-slate-100" id="o-nas">
<div className="max-w-4xl mx-auto px-6 text-center scroll-reveal transition-all duration-1000 ease-out delay-100">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-8">
                O nás
            </h2>
<div className="space-y-6 text-slate-500 font-light text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
<p>
                    Zaměřujeme se na ručně vyráběné svíčky s pečlivým důrazem na každý detail.
                </p>
<p>
                    Inspirujeme se barovou kulturou, míchanými drinky a jejich nezaměnitelnými vůněmi. Převádíme tyto komplexní tóny do vosku, aby provoněly váš domov.
                </p>
<p>
                    Naším cílem je vytvořit příjemnou, uvolněnou atmosféru, ať už po dlouhém pracovním dni, nebo při setkání s přáteli.
                </p>
</div>
</div>
</section>

<section className="py-24 relative" id="galerie">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 scroll-reveal transition-all duration-1000 ease-out">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-4">
                    Naše tvorba
                </h2>
<p className="text-slate-500 text-sm font-light">
                    Vizuální ukázka naší práce a atmosféry.
                </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

<div className="group aspect-square overflow-hidden flex scroll-reveal transition-all duration-1000 ease-out bg-slate-50 border-slate-200/60 border rounded-2xl relative items-center justify-center">
<img alt="Two Orange Drinks in Champagne Flutes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0d6dd41-f802-4f40-a93b-4ca2baa9a967_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>

<div className="group aspect-square rounded-2xl bg-slate-50 border border-slate-200/60 overflow-hidden relative flex items-center justify-center scroll-reveal transition-all duration-1000 ease-out delay-100">
<img alt="Two Layered Latte Glasses on Café Table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb79c9af-e4a8-4b28-bd8e-1651bde1dee0_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>

<div className="group aspect-square rounded-2xl bg-slate-50 border border-slate-200/60 overflow-hidden relative flex items-center justify-center scroll-reveal transition-all duration-1000 ease-out delay-200">
<img alt="Cocktail Menu Flat Lay with Citrus and Candles" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c417cdb-22c1-4f7a-a470-80719f8bafac_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>

<div className="group aspect-square rounded-2xl bg-slate-50 border border-slate-200/60 overflow-hidden relative flex items-center justify-center scroll-reveal transition-all duration-1000 ease-out">
<img alt="Beer Mug Candles on Rustic Surface" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ef63be0-8906-47ef-bf06-97810046b03c_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>

<div className="group aspect-square rounded-2xl bg-slate-50 border border-slate-200/60 overflow-hidden relative flex items-center justify-center scroll-reveal transition-all duration-1000 ease-out delay-100">
<img alt="Green Gel Candle in Glass Holder" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f41e7649-91d8-4968-b9b5-d916b228fca4_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</div>

<div className="group aspect-square rounded-2xl bg-slate-50 border border-slate-200/60 overflow-hidden relative flex items-center justify-center scroll-reveal transition-all duration-1000 ease-out delay-200">
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<iconify-icon className="text-4xl text-slate-300 group-hover:text-purple-300 transition-colors duration-500" icon="solar:gallery-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-purple-50/50 border-y border-purple-100/50 relative" id="proc-my">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 md:gap-8 text-center">
<div className="space-y-4 scroll-reveal transition-all duration-1000 ease-out">
<div className="w-14 h-14 mx-auto rounded-full bg-white border border-purple-100 flex items-center justify-center text-purple-600 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 tracking-tight text-lg">Originální koncept</h3>
<p className="text-sm text-slate-500 font-light max-w-xs mx-auto">Netradiční spojení světa barů a interiérových vůní do jednoho celku.</p>
</div>
<div className="space-y-4 scroll-reveal transition-all duration-1000 ease-out delay-100">
<div className="w-14 h-14 mx-auto rounded-full bg-white border border-purple-100 flex items-center justify-center text-purple-600 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:hand-stars-linear"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 tracking-tight text-lg">Kvalitní zpracování</h3>
<p className="text-sm text-slate-500 font-light max-w-xs mx-auto">Pečlivá ruční výroba a výběr prémiových materiálů pro čisté hoření.</p>
</div>
<div className="space-y-4 scroll-reveal transition-all duration-1000 ease-out delay-200">
<div className="w-14 h-14 mx-auto rounded-full bg-white border border-purple-100 flex items-center justify-center text-purple-600 mb-6 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:wineglass-linear"></iconify-icon>
</div>
<h3 className="font-medium text-slate-900 tracking-tight text-lg">Jedinečné vůně</h3>
<p className="text-sm text-slate-500 font-light max-w-xs mx-auto">Autentické a sofistikované vůně inspirované vašimi oblíbenými drinky.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white" id="kontakt">
<div className="max-w-xl mx-auto px-6 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-3">
                    Kontaktujte nás
                </h2>
<p className="text-slate-500 text-sm font-light">
                    Máte dotaz nebo zájem o spolupráci? Napište nám.
                </p>
</div>
<form className="space-y-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-600 ml-1">Jméno</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-purple-300 focus:ring-2 focus:ring-purple-100" placeholder="Vaše jméno" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-600 ml-1">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-purple-300 focus:ring-2 focus:ring-purple-100" placeholder="vas@email.cz" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-600 ml-1">Zpráva</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all focus:bg-white focus:border-purple-300 focus:ring-2 focus:ring-purple-100 resize-none" placeholder="Jak vám můžeme pomoci?" rows="4"></textarea>
</div>
<button className="w-full py-3.5 px-4 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-purple-600 transition-colors shadow-sm" type="button">
                    Odeslat zprávu
                </button>
</form>
</div>
</section>

<footer className="border-t border-slate-200 py-12 bg-slate-50">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
<a className="text-slate-900 font-medium text-xl tracking-tighter" href="#">
                    GHC
                </a>
<nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-light text-slate-500">
<a className="hover:text-purple-600 transition-colors" href="#">Instagram</a>
<a className="hover:text-purple-600 transition-colors" href="#">Facebook</a>
<a className="hover:text-purple-600 transition-colors" href="#">Ochrana soukromí</a>
</nav>
</div>
<div className="text-center text-xs text-slate-400 font-light">
<p>© 2024 Get Hot Candles. Všechna práva vyhrazena.</p>
</div>
</div>
</footer>



    </>
  );
}
