import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            // Loader Animation
            const loader = document.getElementById('loader');
            const loaderBar = document.getElementById('loader-bar');
            
            setTimeout(() => {
                loaderBar.style.width = '100%';
            }, 100);

            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    initAnimations();
                }, 700);
            }, 1500);

            function initAnimations() {
                // Parallax Hero
                gsap.to(".parallax-img", {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#home",
                        start: "top top",
                        end: "bottom top",
                        scrub: true
                    }
                });

                // Background Kanji Scroll Logic
                const kanji = document.querySelector('.background-kanji');
                const kanjiText = document.querySelector('.background-kanji__text');
                
                if(kanji && kanjiText) {
                     gsap.to(kanji, {
                        height: "100%",
                        ease: "none",
                        scrollTrigger: {
                            trigger: "body",
                            start: "top top",
                            end: "bottom bottom",
                            scrub: 0.5
                        }
                    });
                }

                // Reveal Animations
                const revealElements = document.querySelectorAll(".reveal-up");
                revealElements.forEach((element) => {
                    gsap.to(element, {
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        },
                        y: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: "power3.out"
                    });
                });

                // Navbar Hide/Show
                let lastScroll = 0;
                const nav = document.getElementById('navbar');
                
                window.addEventListener('scroll', () => {
                    const currentScroll = window.pageYOffset;
                    if (currentScroll > 50 && currentScroll > lastScroll) {
                        nav.style.transform = 'translateY(-100%)';
                    } else {
                        nav.style.transform = 'translateY(0)';
                    }
                    lastScroll = currentScroll;
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[#0a0a0a] z-[100] flex flex-col items-center justify-center transition-opacity duration-700" id="loader">
<div className="japanese text-6xl text-gold mb-4">乾杯</div>
<div className="h-[1px] w-24 bg-white/20 overflow-hidden">
<div className="h-full w-0 bg-gold transition-all duration-1000 ease-out" id="loader-bar"></div>
</div>
</div>

<div className="grain"></div>

<nav className="fixed top-0 left-0 w-full z-40 transition-all duration-500 nav-glass py-5" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<a className="flex items-center gap-3 group" href="#">
<span className="japanese text-2xl text-gold group-hover:text-white transition-colors">乾杯</span>
<div className="flex flex-col">
<span className="font-serif uppercase text-sm tracking-[0.2em] text-white">Kampai</span>
<span className="text-[9px] uppercase tracking-[0.3em] text-white/40">Hamburg</span>
</div>
</a>

<ul className="hidden md:flex items-center gap-12">
<li><a className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors" href="#philosophy">Philosophie</a></li>
<li><a className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors" href="#specials">Specials</a></li>
<li><a className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors" href="#menu">Karte</a></li>
<li><a className="text-xs uppercase tracking-[0.2em] text-white/60 hover:text-gold transition-colors" href="#info">Info</a></li>
</ul>
<a className="hidden md:block px-6 py-2 border border-gold/30 text-xs uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-black transition-all duration-500" href="#info">
                Reserve
            </a>

<button className="md:hidden text-gold">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="relative">

<div className="hidden lg:block background-kanji h-full">
<div className="background-kanji__text">寿司の芸術鮮度匠心技美味極上職人魂伝統革新四季折々海の恵み一期一会</div>
</div>

<section className="relative h-screen w-full overflow-hidden flex items-center justify-center" id="home">
<div className="absolute inset-0 z-0">

<img alt="Sushi Counter" className="w-full h-[120%] object-cover opacity-50 parallax-img" src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&amp;w=2525&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-[#0a0a0a]"></div>
</div>
<div className="relative z-10 text-center px-6">
<div className="japanese text-[15vw] md:text-[8rem] text-gold/90 leading-none mb-2 opacity-0 reveal-up">乾杯</div>
<h1 className="text-4xl md:text-6xl font-light tracking-tight text-cream mb-6 opacity-0 reveal-up delay-100">
                    Kampai Sushi Bar
                </h1>
<div className="flex items-center justify-center gap-4 opacity-0 reveal-up delay-200">
<div className="h-[1px] w-12 bg-gold/50"></div>
<p className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/60">Inh. Hiroshi Sumikawa</p>
<div className="h-[1px] w-12 bg-gold/50"></div>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 reveal-up delay-500">
<span className="text-[9px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
<div className="w-[1px] h-16 bg-gradient-to-b from-gold to-transparent"></div>
</div>
</section>

<section className="relative py-24 md:py-32 px-6 bg-[#0a0a0a]" id="philosophy">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="relative aspect-[3/4] md:aspect-[4/5] reveal-up">
<div className="absolute -top-4 -left-4 w-full h-full border border-gold/20 z-0"></div>
<img alt="Chef Craft" className="relative z-10 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&amp;w=1632&amp;auto=format&amp;fit=crop"/>
</div>
<div className="reveal-up">
<span className="text-xs uppercase tracking-[0.3em] text-gold mb-4 block flex items-center gap-2">
<span className="w-8 h-[1px] bg-gold"></span> Tradition
                    </span>
<h2 className="text-3xl md:text-5xl font-light leading-tight text-white mb-8">
                        Authentic Japanese <br/>
<span className="serif italic text-gold">Craftsmanship</span>
</h2>
<p className="text-white/60 font-light leading-relaxed mb-8">
                        Willkommen bei Kampai. Unter der Leitung von Hiroshi Sumikawa bringen wir die Essenz der japanischen Sushi-Kunst in den Hamburger Berg. Jedes Stück wird mit höchster Präzision und Hingabe zubereitet.
                    </p>
<div className="flex items-center gap-4">
<span className="japanese text-2xl text-gold">澄川 博</span>
<span className="text-xs uppercase tracking-widest text-white/40">Hiroshi Sumikawa</span>
</div>
</div>
</div>
</section>

<section className="relative py-24 bg-[#0f0f0f] border-t border-white/5 overflow-hidden" id="specials">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end reveal-up">
<div>
<span className="text-xs uppercase tracking-[0.3em] text-gold mb-2 block">Empfehlung</span>
<h2 className="text-3xl md:text-4xl font-light text-white">Kampai <span className="serif italic text-white/50">Specials</span></h2>
</div>
<div className="hidden md:flex gap-2 text-white/40">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</div>

<div className="menu-scroll-container pb-8 reveal-up">

<div className="flex-none w-[320px] md:w-[400px] group cursor-pointer">
<div className="aspect-[4/3] bg-[#1a1a1a] overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-gold px-3 py-1 text-sm tracking-widest font-serif">30€</div>
</div>
<h3 className="text-xl font-light text-white mb-2 group-hover:text-gold transition-colors">Kampai Special Box</h3>
<ul className="text-sm text-white/50 font-light space-y-1">
<li>1 x Vorspeise (Überraschung)</li>
<li>1 x California Roll (6 Stück)</li>
<li>6 x Nigiri (Überraschung)</li>
</ul>
</div>

<div className="flex-none w-[320px] md:w-[400px] group cursor-pointer">
<div className="aspect-[4/3] bg-[#1a1a1a] overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1558985250-27a406d64cb3?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-gold px-3 py-1 text-sm tracking-widest font-serif">25€</div>
</div>
<h3 className="text-xl font-light text-white mb-2 group-hover:text-gold transition-colors">Kampai Veggie Box</h3>
<ul className="text-sm text-white/50 font-light space-y-1">
<li>1 x Vorspeise (Überraschung)</li>
<li>2 x Veggie Rolls (Überraschung, 12 Stück)</li>
<li>4 x Veggie Nigiri (Überraschung)</li>
</ul>
</div>

<div className="flex-none w-[320px] md:w-[400px] group cursor-pointer">
<div className="aspect-[4/3] bg-[#1a1a1a] overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-gold px-3 py-1 text-sm tracking-widest font-serif">45€</div>
</div>
<h3 className="text-xl font-light text-white mb-2 group-hover:text-gold transition-colors">Sashimi Moriawase</h3>
<p className="text-sm text-white/50 font-light">
                        Premium assortment of raw fish, 12 pieces. Chef's daily selection.
                    </p>
</div>
</div>
</section>

<section className="relative py-24 px-6 bg-[#0a0a0a]" id="menu">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20 reveal-up">
<span className="japanese text-4xl text-gold/20 mb-2 block">品書き</span>
<h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">Speisekarte</h2>
</div>

<div className="grid md:grid-cols-2 gap-x-20 gap-y-16">

<div className="reveal-up">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-xl font-serif italic text-gold">Vorspeisen</h3>
<div className="h-[1px] flex-grow bg-white/10"></div>
</div>
<ul className="space-y-6">
<li className="flex justify-between items-baseline group">
<div>
<span className="text-white group-hover:text-gold transition-colors font-light">Seetang Salat</span>
</div>
<span className="text-white/40 font-light text-sm">5€</span>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-white group-hover:text-gold transition-colors font-light">Sunomono</span>
<span className="block text-xs text-white/30">Eingelegtes Gemüse</span>
</div>
<span className="text-white/40 font-light text-sm">5€</span>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-white group-hover:text-gold transition-colors font-light">Edamame</span>
<span className="block text-xs text-white/30">Jap. Bohnen</span>
</div>
<span className="text-white/40 font-light text-sm">5€</span>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-white group-hover:text-gold transition-colors font-light">Jap. Omelett</span>
</div>
<span className="text-white/40 font-light text-sm">5€</span>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-white group-hover:text-gold transition-colors font-light">Kimpira Gobo</span>
<span className="block text-xs text-white/30">Schwarzwurzel pikant gekocht</span>
</div>
<span className="text-white/40 font-light text-sm">5€</span>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-white group-hover:text-gold transition-colors font-light">Spinat mit Sesamsauce</span>
</div>
<span className="text-white/40 font-light text-sm">5€</span>
</li>
<li className="flex justify-between items-baseline group">
<div>
<span className="text-white group-hover:text-gold transition-colors font-light">Blanchierter Lachs</span>
<span className="block text-xs text-white/30">mit Porree</span>
</div>
<span className="text-white/40 font-light text-sm">5€</span>
</li>
</ul>
</div>

<div className="reveal-up">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-xl font-serif italic text-gold">Nigiri <span className="text-xs font-sans not-italic text-white/30 ml-2 tracking-widest">(2 Stück)</span></h3>
<div className="h-[1px] flex-grow bg-white/10"></div>
</div>
<ul className="grid grid-cols-1 gap-y-4">

<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Thunfisch</span><span className="text-gold text-sm">8.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Lachs</span><span className="text-gold text-sm">8€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Yellowtail</span><span className="text-gold text-sm">9€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Wolfsbarsch</span><span className="text-gold text-sm">7.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Makrele</span><span className="text-gold text-sm">7.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Spicy Thunfisch</span><span className="text-gold text-sm">7.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Flambierter Lachs</span><span className="text-gold text-sm">8.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Flambierte Scholle</span><span className="text-gold text-sm">7.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Gebratener Aal</span><span className="text-gold text-sm">9€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Jakobsmuschel</span><span className="text-gold text-sm">9€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Roter Kaviar (Lachs)</span><span className="text-gold text-sm">9€</span></li>
</ul>
</div>

<div className="reveal-up">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-xl font-serif italic text-gold">Maki <span className="text-xs font-sans not-italic text-white/30 ml-2 tracking-widest">(6 Stück)</span></h3>
<div className="h-[1px] flex-grow bg-white/10"></div>
</div>
<ul className="grid grid-cols-1 gap-y-4">
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Thunfisch</span><span className="text-gold text-sm">8€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Lachs</span><span className="text-gold text-sm">7.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Surimi</span><span className="text-gold text-sm">6.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Gebratener Aal</span><span className="text-gold text-sm">8.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Crispy Lachs</span><span className="text-gold text-sm">8.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Spicy Thunfisch</span><span className="text-gold text-sm">8€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">California (Surimi)</span><span className="text-gold text-sm">7.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">California (Thunfisch)</span><span className="text-gold text-sm">9€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">California (Lachs)</span><span className="text-gold text-sm">8.5€</span></li>
<li className="flex justify-between items-baseline border-b border-dashed border-white/5 pb-1"><span className="text-white font-light">Avocado</span><span className="text-gold text-sm">6€</span></li>
</ul>
</div>

<div className="reveal-up">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-xl font-serif italic text-gold">Getränke</h3>
<div className="h-[1px] flex-grow bg-white/10"></div>
</div>
<div className="space-y-8">
<div>
<h4 className="text-xs uppercase tracking-widest text-white/40 mb-3">Alkoholfrei</h4>
<ul className="space-y-2">
<li className="flex justify-between text-sm"><span className="text-white/80 font-light">Mineralwasser / Still (0.25l)</span> <span className="text-gold">3.5€</span></li>
<li className="flex justify-between text-sm"><span className="text-white/80 font-light">Coca Cola light (0.2l)</span> <span className="text-gold">3.5€</span></li>
<li className="flex justify-between text-sm"><span className="text-white/80 font-light">Jap. Grüner Tee / Jasmintee</span> <span className="text-gold">4€</span></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-white/40 mb-3">Alkoholisch</h4>
<ul className="space-y-2">
<li className="flex justify-between text-sm"><span className="text-white/80 font-light">Kirin Bier (0.33l)</span> <span className="text-gold">4.5€</span></li>
<li className="flex justify-between text-sm"><span className="text-white/80 font-light">Sake (Kalt/Warm)</span> <span className="text-gold">7€</span></li>
<li className="flex justify-between text-sm"><span className="text-white/80 font-light">Weißwein</span> <span className="text-gold">7€</span></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 border-t border-white/5 bg-[#0f0f0f]" id="info">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-4 space-y-12 reveal-up">
<div>
<span className="text-xs uppercase tracking-[0.3em] text-gold block mb-4">Location</span>
<h2 className="text-4xl font-light text-white mb-6">Besuchen <span className="serif italic text-white/50">Sie Uns</span></h2>
<p className="text-white/50 font-light leading-relaxed">
                                Ein Ort der Ruhe und des Genusses inmitten von Hamburg. Authentische japanische Küche, serviert mit Tradition.
                            </p>
</div>
<div className="space-y-8">
<div className="group">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-gold" icon="solar:clock-circle-linear"></iconify-icon>
<h4 className="text-xs uppercase tracking-[0.2em] text-white">Öffnungszeiten</h4>
</div>
<p className="text-xl text-white font-light">MI - SA <span className="text-gold">18:00 - 22:00</span></p>
<p className="text-sm text-white/40 mt-1">SO - DI Geschlossen</p>
</div>
<div className="group">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-gold" icon="solar:map-point-linear"></iconify-icon>
<h4 className="text-xs uppercase tracking-[0.2em] text-white">Adresse</h4>
</div>
<p className="text-lg text-white/80 font-light">
                                    Hamburger Berg 25<br/>
                                    20359 Hamburg<br/>
                                    GERMANY
                                </p>
</div>
<div className="group">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-gold" icon="solar:phone-calling-linear"></iconify-icon>
<h4 className="text-xs uppercase tracking-[0.2em] text-white">Kontakt</h4>
</div>
<a className="text-lg text-white/80 font-light hover:text-gold transition-colors" href="mailto:info@kampai-hamburg.de">
                                    info@kampai-hamburg.de
                                </a>
</div>
</div>
</div>

<div className="lg:col-span-8 h-[500px] w-full reveal-up delay-100 relative overflow-hidden group">
<div className="absolute inset-0 border border-white/10 z-10 pointer-events-none group-hover:border-gold/30 transition-colors"></div>
<iframe allowfullscreen="" className="map-grayscale w-full h-full" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.478839845196!2d9.95758331612443!3d53.54924398002194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f6f04363d6b%3A0x4256246415513576!2sHamburger%20Berg%2025%2C%2020359%20Hamburg%2C%20Germany!5e0!3m2!1sen!2sus!4v1646215849521!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="relative py-12 px-6 border-t border-white/5 bg-black overflow-hidden">

<div className="absolute top-0 right-10 text-[10rem] text-gold/5 japanese pointer-events-none leading-none select-none">鯨</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
<div className="text-center md:text-left">
<span className="japanese text-2xl text-gold block mb-1">乾杯</span>
<p className="text-xs text-white/30 tracking-widest uppercase">© 2024 Kampai Sushi Bar Hamburg</p>
</div>
<div className="flex gap-8">
<a className="text-white/40 hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-white/40 hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
<div className="flex gap-6 text-xs text-white/30 uppercase tracking-widest">
<a className="hover:text-gold transition-colors" href="#">Impressum</a>
<a className="hover:text-gold transition-colors" href="#">Datenschutz</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
