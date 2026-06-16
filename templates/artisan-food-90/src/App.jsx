import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Navbar Mix Blend Mode logic based on background
            // Keeping it simple with CSS mix-blend-difference, 
            // but hiding/showing on scroll direction is a nice modern touch
            let lastScroll = 0;
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                if (currentScroll <= 0) {
                    navbar.style.transform = 'translateY(0)';
                } else if (currentScroll > lastScroll) {
                    navbar.style.transform = 'translateY(-100%)'; // Hide on scroll down
                } else {
                    navbar.style.transform = 'translateY(0)'; // Show on scroll up
                }
                lastScroll = currentScroll;
            });

            // Hero Animation
            const heroTl = gsap.timeline();
            heroTl.from(".gsap-hero", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                delay: 0.2
            });

            // Hero Parallax Image
            gsap.to(".gsap-parallax", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: "header",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Fade Up Elements
            gsap.utils.toArray('.gsap-fade-up').forEach(elem => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    y: 40,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                });
            });

            // Image Reveal Animation (Editorial Section)
            gsap.utils.toArray('.gsap-image-reveal').forEach(container => {
                const img = container.querySelector('img');
                
                // Set initial state
                gsap.set(container, { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" });
                gsap.set(img, { scale: 1.2 });

                gsap.to(container, {
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                    duration: 1.5,
                    ease: "power4.inOut",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%",
                    }
                });

                gsap.to(img, {
                    scale: 1,
                    duration: 1.5,
                    ease: "power4.inOut",
                    scrollTrigger: {
                        trigger: container,
                        start: "top 80%",
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 mix-blend-difference text-white transition-transform duration-300 id=" navbar""="">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="text-lg tracking-tight uppercase font-medium" href="#">
                Heerkens
            </a>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm tracking-wide uppercase hover:opacity-70 transition-opacity" href="#">Assortiment</a>
<a className="text-sm tracking-wide uppercase hover:opacity-70 transition-opacity" href="#">Seizoen</a>
<a className="text-sm tracking-wide uppercase hover:opacity-70 transition-opacity" href="#">Keuken</a>
<a className="text-sm tracking-wide uppercase hover:opacity-70 transition-opacity" href="#">Over ons</a>
</div>

<div className="flex items-center gap-6">
<a className="hidden md:inline-block relative overflow-hidden group" href="#">
<span className="inline-block text-sm tracking-wide uppercase pb-1 border-b border-white/30 group-hover:border-white transition-colors duration-300">
                        Bestel via inOne
                    </span>
</a>
<button className="md:hidden">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full min-h-screen flex flex-col justify-end pb-24 md:pb-32 pt-32">
<div className="max-w-7xl mx-auto px-6 w-full relative z-10">
<div className="max-w-5xl">
<p className="gsap-hero text-xs font-medium tracking-[0.2em] uppercase text-[#1A3B2A]/70 mb-8 ml-1">Artisanale Groothandel</p>

<h1 className="text-6xl md:text-8xl lg:text-9xl text-[#1A3B2A] leading-[0.9] tracking-tighter mb-8">
<div className="overflow-hidden"><span className="block gsap-hero">Vers van</span></div>
<div className="overflow-hidden"><span className="block gsap-hero">het land.</span></div>
<div className="overflow-hidden">
<span className="block font-serif italic font-medium text-[#A26A42] tracking-normal pr-4 gsap-hero">
                            Elke dag op tijd.
                        </span>
</div>
</h1>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-16 lg:mt-24">
<div className="md:col-span-5 md:col-start-8">
<p className="gsap-hero text-base md:text-lg text-[#111827]/70 font-light leading-relaxed mb-8">
                            Uw betrouwbare partner in Nistelrode voor superieure kwaliteit, meebewegend met de seizoenen. Speciaal voor de professionele keuken.
                        </p>
<div className="gsap-hero flex items-center gap-6">
<a className="inline-flex items-center gap-3 text-sm tracking-wide uppercase font-medium text-[#1A3B2A] group" href="#">
                                Ontdek meer
                                <div className="w-8 h-[1px] bg-[#1A3B2A] group-hover:w-12 transition-all duration-300"></div>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-full md:w-2/3 h-full -z-10 overflow-hidden opacity-20 md:opacity-100">
<img alt="Fresh ingredients" className="w-full h-full object-cover object-center gsap-parallax" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86bb97d6-aa70-4db8-8a92-16a06460064c_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent"></div>
</div>
</header>

<section className="py-12 border-y border-[#1A3B2A]/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-between items-center gap-8 text-[#1A3B2A]">
<div className="gsap-fade-up text-xs font-medium tracking-[0.1em] uppercase">Dagelijkse levering</div>
<div className="gsap-fade-up text-[#1A3B2A]/20 hidden md:block">•</div>
<div className="gsap-fade-up text-xs font-medium tracking-[0.1em] uppercase">Eigen productiekeuken</div>
<div className="gsap-fade-up text-[#1A3B2A]/20 hidden lg:block">•</div>
<div className="gsap-fade-up text-xs font-medium tracking-[0.1em] uppercase">Persoonlijk contact</div>
<div className="gsap-fade-up text-[#1A3B2A]/20 hidden lg:block">•</div>
<div className="gsap-fade-up text-xs font-medium tracking-[0.1em] uppercase">Al 35 jaar specialist</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-[#FDFBF7]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
<div className="max-w-2xl">
<h2 className="gsap-fade-up text-5xl md:text-7xl text-[#1A3B2A] tracking-tighter leading-none mb-6">
                        Onze <span className="font-serif italic font-medium text-[#A26A42] tracking-normal">specialiteiten</span>
</h2>
<p className="gsap-fade-up text-lg text-[#111827]/60 font-light leading-relaxed max-w-md">
                        Van rauwe, onbewerkte producten direct van de teler tot panklaar gesneden groenten uit onze eigen snijkeuken.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-8">

<a className="group block cursor-pointer md:col-span-4 gsap-fade-up" href="#">
<div className="img-wrap aspect-[3/4] bg-[#EBE7DF] mb-8">
<img alt="Onbewerkt vers" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pr-6">
<span className="text-xs font-medium tracking-[0.1em] uppercase text-[#A26A42] mb-3 block">01</span>
<h3 className="text-3xl text-[#1A3B2A] tracking-tight mb-4">Onbewerkt Vers</h3>
<p className="text-sm text-[#111827]/60 font-light leading-relaxed mb-6">
                            Het mooiste fruit en de meest knapperige groenten, zorgvuldig geselecteerd bij onze vaste telers en leveranciers.
                        </p>
</div>
</a>

<a className="group block cursor-pointer md:col-span-4 md:mt-24 gsap-fade-up" href="#">
<div className="img-wrap aspect-[3/4] bg-[#EBE7DF] mb-8">
<img alt="Bewerkt vers" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0775f485-0f6c-4a87-805e-0a90e29c8a8c_1600w.png"/>
</div>
<div className="pr-6">
<span className="text-xs font-medium tracking-[0.1em] uppercase text-[#A26A42] mb-3 block">02</span>
<h3 className="text-3xl text-[#1A3B2A] tracking-tight mb-4">Eigen Snijkeuken</h3>
<p className="text-sm text-[#111827]/60 font-light leading-relaxed mb-6">
                            Panklaar, julienne, brunoise of een specifieke melange? Onze vakmensen snijden dagelijks vers op bestelling.
                        </p>
</div>
</a>

<a className="group block cursor-pointer md:col-span-4 gsap-fade-up" href="#">
<div className="img-wrap aspect-[3/4] bg-[#EBE7DF] mb-8">
<img alt="Seizoensassortiment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="pr-6">
<span className="text-xs font-medium tracking-[0.1em] uppercase text-[#A26A42] mb-3 block">03</span>
<h3 className="text-3xl text-[#1A3B2A] tracking-tight mb-4">Smaak van het Seizoen</h3>
<p className="text-sm text-[#111827]/60 font-light leading-relaxed mb-6">
                            Laat u inspireren door wat de natuur op dit moment te bieden heeft. Exclusieve producten voor een verrassend menu.
                        </p>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 bg-[#1A3B2A] text-[#FDFBF7] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

<div className="lg:col-span-5 lg:col-start-2 order-2 lg:order-1 relative z-10">
<span className="gsap-fade-up inline-block text-[#A26A42] text-xs font-medium tracking-[0.2em] uppercase mb-8">Heerkens Magazine</span>
<h2 className="gsap-fade-up text-5xl md:text-6xl tracking-tighter leading-[1.1] mb-8">
                        Ontwaak met <br/>
<span className="font-serif italic text-[#A26A42] tracking-normal">de Lente</span>
</h2>
<p className="gsap-fade-up text-base text-[#FDFBF7]/70 font-light leading-relaxed mb-10">
                        Terwijl de aarde opwarmt, ontluikt een nieuw palet aan smaken. In onze nieuwste editie doken we in de wereld van de eerste witte asperges, knapperige peultjes en wilde raapsteeltjes. 
                    </p>
<a className="gsap-fade-up inline-flex items-center gap-4 text-sm tracking-wide uppercase font-medium group" href="#">
<span className="w-10 h-[1px] bg-[#FDFBF7] group-hover:w-16 transition-all duration-300"></span>
                        Lees de editie
                    </a>
</div>

<div className="lg:col-span-6 lg:col-start-7 order-1 lg:order-2">
<div className="img-wrap aspect-square lg:aspect-[4/5] w-full max-w-lg mx-auto lg:ml-auto gsap-image-reveal">
<img alt="Spring harvest" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-[#FDFBF7]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
<div className="lg:pr-12">
<h2 className="gsap-fade-up text-4xl md:text-5xl text-[#1A3B2A] tracking-tighter leading-[1.1] mb-10">
                        Geworteld in <span className="font-serif italic text-[#A26A42] tracking-normal">kwaliteit</span>,<br/>gebouwd op vertrouwen.
                    </h2>
<div className="gsap-fade-up space-y-6 text-base text-[#111827]/60 font-light leading-relaxed max-w-lg">
<p>
                            Bij Heerkens Vers geloven we niet in massaproductie zonder ziel. Al meer dan 35 jaar voorzien wij de horeca in regio Nistelrode en ver daarbuiten van de allerbeste AGF-producten.
                        </p>
<p>
                            Wat begon als een passie voor het product, is uitgegroeid tot een gespecialiseerde groothandel waar ambacht centraal staat. We kennen onze telers, we kennen onze klanten en we begrijpen de druk van de professionele keuken.
                        </p>
</div>
</div>
<div className="flex flex-col gap-12 md:gap-16 pt-4">
<div className="gsap-fade-up border-t border-[#1A3B2A]/10 pt-8">
<span className="text-[#A26A42] font-serif italic text-2xl mb-4 block">01.</span>
<h3 className="text-2xl text-[#1A3B2A] tracking-tight mb-4">Persoonlijk contact</h3>
<p className="text-sm text-[#111827]/60 font-light leading-relaxed max-w-md">
                            Geen anoniem callcenter, maar korte lijnen met vaste contactpersonen die meedenken met uw menu en uitdagingen.
                        </p>
</div>
<div className="gsap-fade-up border-t border-[#1A3B2A]/10 pt-8">
<span className="text-[#A26A42] font-serif italic text-2xl mb-4 block">02.</span>
<h3 className="text-2xl text-[#1A3B2A] tracking-tight mb-4">Ongeëvenaarde versheid</h3>
<p className="text-sm text-[#111827]/60 font-light leading-relaxed max-w-md">
                            Door ons efficiënte logistieke netwerk belandt de oogst vaak al binnen 24 uur in uw keuken. Verser kan niet.
                        </p>
</div>
<div className="gsap-fade-up border-t border-[#1A3B2A]/10 pt-8">
<span className="text-[#A26A42] font-serif italic text-2xl mb-4 block">03.</span>
<h3 className="text-2xl text-[#1A3B2A] tracking-tight mb-4">Maatwerk in logistiek</h3>
<p className="text-sm text-[#111827]/60 font-light leading-relaxed max-w-md">
                            Wij leveren wanneer het u uitkomt. Betrouwbaar, accuraat en met zorg tot in uw koeling gebracht.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A3B2A] text-[#FDFBF7] pt-32 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-32">
<h2 className="text-6xl md:text-8xl lg:text-9xl tracking-tighter leading-none mb-8">
                    Let's <span className="font-serif italic text-[#A26A42] tracking-normal">connect.</span>
</h2>
<a className="inline-flex items-center gap-6 text-sm tracking-wide uppercase font-medium group hover:text-[#A26A42] transition-colors" href="#">
                    Word direct klant
                    <div className="w-12 h-[1px] bg-current group-hover:w-20 transition-all duration-300"></div>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 text-sm font-light text-[#FDFBF7]/60">
<div className="lg:col-span-4">
<a className="inline-block text-xl tracking-tight text-[#FDFBF7] uppercase font-medium mb-8" href="#">
                        Heerkens
                    </a>
<p className="leading-relaxed max-w-xs">
                        De artisanale groothandel voor de horeca. Waar kwaliteit, versheid en een persoonlijke benadering samenkomen.
                    </p>
</div>
<div className="lg:col-span-2 lg:col-start-7">
<h4 className="text-[#FDFBF7] font-medium tracking-[0.1em] uppercase mb-8 text-xs">Navigatie</h4>
<ul className="space-y-4">
<li><a className="hover:text-[#FDFBF7] transition-colors" href="#">Assortiment</a></li>
<li><a className="hover:text-[#FDFBF7] transition-colors" href="#">Seizoen</a></li>
<li><a className="hover:text-[#FDFBF7] transition-colors" href="#">Productiekeuken</a></li>
<li><a className="hover:text-[#FDFBF7] transition-colors" href="#">Over ons</a></li>
</ul>
</div>
<div className="lg:col-span-3">
<h4 className="text-[#FDFBF7] font-medium tracking-[0.1em] uppercase mb-8 text-xs">Contact</h4>
<ul className="space-y-4">
<li>Heerkens Vers B.V.</li>
<li>Laar 12, 5388 HG Nistelrode</li>
<li className="pt-4"><a className="hover:text-[#FDFBF7] transition-colors" href="mailto:info@heerkensvers.nl">info@heerkensvers.nl</a></li>
<li><a className="hover:text-[#FDFBF7] transition-colors" href="tel:+31412611222">0412 - 61 12 22</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#FDFBF7]/40 font-light">
<p>© 2024 Heerkens Vers.</p>
<div className="flex gap-8">
<a className="hover:text-[#FDFBF7] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#FDFBF7] transition-colors" href="#">Voorwaarden</a>
<a className="hover:text-[#FDFBF7] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#FDFBF7] transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
