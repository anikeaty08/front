import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
{
"@context": "https://schema.org",
"@type": "Organization",
"name": "Mister Fragrance",
"url": "https://misterfragrance.com",
"logo": "https://misterfragrance.com/logo.png",
"description": "Parfumerie de niche mixte. Fragrances haut de gamme pour tous.",
"contactPoint": {
"@type": "ContactPoint",
"contactType": "customer service",
"availableLanguage": "French",
"areaServed": "Worldwide"
}
}



tailwind.config = {
theme: {
extend: {
colors: {
'brand-bg': '#FDFBF7',
'brand-pink-light': '#F8D7DA',
'brand-pink-intense': '#D81B60',
'brand-gold': '#E8B4B8',
'brand-black': '#1A1A1A',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
animation: {
'marquee': 'marquee 25s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                    const perfumes = [
                        { name: "OUDH COCO", family: "Oriental gourmand", desc: "Oud précieux et noix de coco crémeuse", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600" },
                        { name: "CUIR ROUGE", family: "Cuir épicé", desc: "Cuir intense et épices ardentes", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=600" },
                        { name: "VANILLE", family: "Gourmand", desc: "Vanille bourbon enveloppante", img: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=600" },
                        { name: "FULL MOON", family: "Ambré musqué", desc: "Mystérieuse et nocturne — ambre et musc blanc", img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=600" },
                        { name: "BOIS INTENSE", family: "Boisé", desc: "Bois précieux et fumés — profondeur boisée", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600" },
                        { name: "AVENTURE", family: "Frais boisé", desc: "Frais et audacieux — agrumes et bois clairs", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=600" },
                        { name: "CUIR BLANC", family: "Cuir floral", desc: "Cuir lumineux et fleurs blanches", img: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=600" },
                        { name: "SWEET BOUQUET", family: "Floral fruité", desc: "Bouquet floral gourmand — pivoine et fruits", img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=600" },
                        { name: "VERT", family: "Vert frais", desc: "Thé blanc et figuier", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600" },
                        { name: "MALIKI", family: "Oriental rosé", desc: "Royale et envoûtante — rose damascène et oud", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=600" },
                        { name: "GRIS", family: "Iris boisé", desc: "Minérale et sophistiquée — iris et vétiver", img: "https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&fit=crop&q=80&w=600" },
                        { name: "RED DIAMOND", family: "Fruité chyprée", desc: "Précieux et flamboyant — fruits rouges et patchouli", img: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=600" },
                        { name: "CRAZY ROSEBERRY", family: "Floral fruité", desc: "Pétillante et fruitée — rose et baies sauvages", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=600" },
                        { name: "OR LIQUIDE", family: "Ambré solaire", desc: "Solaire et opulente — safran et ambre doré", img: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=600" }
                    ];

                    const track = document.getElementById('carouselTrack');
                    perfumes.forEach(p => {
                        const whatsappMsg = encodeURIComponent(`Bonjour Mister Fragrance, je souhaite commander ou avoir des informations sur le parfum ${p.name}.`);
                        const card = `
                            <div class="snap-center w-[80vw] md:w-[28vw] flex-shrink-0 flex flex-col group relative reveal">
                                <div class="aspect-[3/4] w-full bg-brand-bg mb-6 relative overflow-hidden rounded-sm">
                                    <div class="absolute inset-0 img-placeholder transition-transform duration-700 group-hover:scale-105">
                                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${p.name}" loading="lazy" class="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale-[20%] group-hover:grayscale-0 transition-all duration-700">
                                    </div>
                                    <!-- Hover Shadow -->
                                    <div class="absolute inset-0 shadow-[inset_0_0_50px_rgba(216,27,96,0)] group-hover:shadow-[inset_0_0_50px_rgba(216,27,96,0.15)] transition-shadow duration-500 pointer-events-none"></div>
                                </div>
                                <div class="px-2">
                                    <p class="text-[10px] uppercase tracking-[0.15em] text-brand-gold mb-2 font-medium">${p.family}</p>
                                    <h3 class="font-serif text-2xl tracking-tighter uppercase mb-2 group-hover:text-brand-pink-intense transition-colors">${p.name}</h3>
                                    <p class="text-xs font-light text-brand-black/60 mb-6 line-clamp-1">${p.desc}</p>
                                    
                                    <div class="flex gap-2">
                                        <a href="https://wa.me/33600000000?text=${whatsappMsg}" target="_blank" class="flex-1 bg-brand-bg border border-[#25D366]/30 text-[#25D366] py-3 rounded-sm flex justify-center items-center gap-2 text-xs uppercase tracking-wider hover:bg-[#25D366] hover:text-white transition-colors hover-target">
                                            <iconify-icon icon="solar:phone-linear" class="text-lg"></iconify-icon> <span class="hidden md:inline">WhatsApp</span>
                                        </a>
                                        <a href="https://www.snapchat.com/add/mr_gragranceoff" target="_blank" class="flex-1 bg-brand-bg border border-[#FFFC00]/50 text-brand-black py-3 rounded-sm flex justify-center items-center gap-2 text-xs uppercase tracking-wider hover:bg-[#FFFC00] transition-colors hover-target">
                                            <iconify-icon icon="solar:ghost-linear" class="text-lg"></iconify-icon> <span class="hidden md:inline">Snapchat</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        `;
                        track.insertAdjacentHTML('beforeend', card);
                    });
                


                    const testimonials = [
                        { text: "Une signature olfactive incroyable. Je ne porte plus que Oudh Coco.", name: "Alexandre" },
                        { text: "Le service sur WhatsApp est top. Conseillé sur-mesure pour trouver mon parfum idéal.", name: "Sarah" },
                        { text: "Livraison rapide en Suisse. Emballage très luxueux. Parfait.", name: "Camille" },
                        { text: "Bois Intense est une merveille. Mixte, profond, envoûtant.", name: "Julien" }
                    ];
                    
                    const renderTestimonials = () => {
                        let html = '';
                        testimonials.forEach(t => {
                            html += `
                            <div class="w-[300px] md:w-[400px] flex-shrink-0 bg-brand-bg p-8 rounded-sm whitespace-normal">
                                <div class="flex text-brand-gold mb-4 text-sm">
                                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                                    <iconify-icon icon="solar:star-bold"></iconify-icon>
                                </div>
                                <p class="font-serif text-lg md:text-xl italic mb-4">"${t.text}"</p>
                                <p class="text-xs uppercase tracking-widest text-brand-black/50">— ${t.name}</p>
                            </div>
                            `;
                        });
                        return html;
                    }
                    
                    document.write(renderTestimonials());
                    document.write(renderTestimonials()); // Duplicate for seamless loop
                


        // Preloader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('preloader').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('preloader').style.display = 'none';
                    // Trigger initial reveals
                    checkReveal();
                }, 800);
            }, 1500); // Wait for draw animation
        });

        // Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Custom Cursor
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        const hoverTargets = document.querySelectorAll('.hover-target, a, button');

        if(window.innerWidth > 768) {
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;

                // Add slight delay for outline
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 150, fill: "forwards" });
            });

            hoverTargets.forEach(target => {
                target.addEventListener('mouseenter', () => {
                    document.body.classList.add('cursor-hover');
                });
                target.addEventListener('mouseleave', () => {
                    document.body.classList.remove('cursor-hover');
                });
            });
        }

        // Scroll Reveal Animation with Intersection Observer
        const reveals = document.querySelectorAll('.reveal');
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            });
        }, revealOptions);

        reveals.forEach(reveal => {
            revealObserver.observe(reveal);
        });

        function checkReveal() {
            reveals.forEach(reveal => {
                const windowHeight = window.innerHeight;
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - 50) {
                    reveal.classList.add('active');
                }
            });
        }

        // Carousel Logic
        const track = document.getElementById('carouselTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const scrollProgress = document.getElementById('scrollProgress');

        if (track && prevBtn && nextBtn) {
            const scrollAmount = window.innerWidth > 768 ? window.innerWidth * 0.3 : window.innerWidth * 0.8;

            nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });

            prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            // Update Progress Bar
            track.addEventListener('scroll', () => {
                const maxScroll = track.scrollWidth - track.clientWidth;
                const scrollPercentage = (track.scrollLeft / maxScroll) * 100;
                // Minimum width of 25% (visual preference)
                scrollProgress.style.width = `${Math.max(25, scrollPercentage)}%`;
                scrollProgress.style.left = `${scrollPercentage > 0 ? (scrollPercentage * 0.75) : 0}%`;
            });

            // Auto-scroll lent
            let autoScrollInterval;
            const startAutoScroll = () => {
                autoScrollInterval = setInterval(() => {
                    if (track.scrollLeft >= (track.scrollWidth - track.clientWidth - 10)) {
                        track.scrollTo({ left: 0, behavior: 'smooth' });
                    } else {
                        track.scrollBy({ left: 1, behavior: 'auto' });
                    }
                }, 30);
            };

            const stopAutoScroll = () => clearInterval(autoScrollInterval);

            // Start auto-scroll after 3 seconds, stop on hover/touch
            setTimeout(startAutoScroll, 3000);
            track.addEventListener('mouseenter', stopAutoScroll);
            track.addEventListener('mouseleave', startAutoScroll);
            track.addEventListener('touchstart', stopAutoScroll);
            track.addEventListener('touchend', startAutoScroll);
            
            // Mouse drag to scroll
            let isDown = false;
            let startX;
            let scrollLeft;

            track.addEventListener('mousedown', (e) => {
                isDown = true;
                track.classList.add('active');
                startX = e.pageX - track.offsetLeft;
                scrollLeft = track.scrollLeft;
            });
            track.addEventListener('mouseleave', () => {
                isDown = false;
            });
            track.addEventListener('mouseup', () => {
                isDown = false;
            });
            track.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - track.offsetLeft;
                const walk = (x - startX) * 2; // Scroll-fast
                track.scrollLeft = scrollLeft - walk;
            });
        }

        // Cookie Banner Logic
        setTimeout(() => {
            if(!localStorage.getItem('cookiesAccepted')) {
                document.getElementById('cookieBanner').style.transform = 'translateY(0)';
            }
        }, 3000);

        function acceptCookies() {
            localStorage.setItem('cookiesAccepted', 'true');
            document.getElementById('cookieBanner').style.transform = 'translateY(150%)';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="preloader">
<svg fill="none" height="60" viewbox="0 0 200 60" width="200" xmlns="http://www.w3.org/2000/svg">
<text className="draw-text" dominant-baseline="middle" fill="none" fontFamily="Cormorant Garamond" fontSize="32" letter-spacing="0.1em" stroke="#1A1A1A" strokeWidth="1" text-anchor="middle" x="50%" y="50%">M.F.</text>
</svg>
</div>

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<div className="md:hidden fixed bottom-6 right-6 flex flex-col gap-3 z-50">
<a className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl hover-target" href="https://wa.me/33600000000" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" icon="solar:phone-linear"></iconify-icon>
</a>
<a className="w-14 h-14 rounded-full bg-[#FFFC00] text-black flex items-center justify-center shadow-xl hover-target" href="https://www.snapchat.com/add/mr_gragranceoff" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" icon="solar:ghost-linear"></iconify-icon>
</a>
</div>

<nav className="fixed w-full top-0 z-40 bg-brand-bg/80 backdrop-blur-md border-b border-brand-pink-light/30">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="text-xs uppercase tracking-[0.2em] font-light hidden md:block">
                Livraison Mondiale
            </div>
<a className="font-serif text-2xl tracking-tighter uppercase absolute left-1/2 -translate-x-1/2 hover-target" href="#">
                Mister Fragrance
            </a>
<div className="flex gap-4">
<a className="text-xs uppercase tracking-[0.1em] hover:text-brand-pink-intense transition-colors hover-target" href="#contact">Commander</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg to-brand-pink-light/20 -z-10"></div>

<div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-gold/40 rounded-full animate-float" style={{animationDelay: '0s'}}></div>
<div className="absolute top-1/3 right-1/4 w-3 h-3 bg-brand-gold/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-brand-gold/50 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase mb-6 reveal opacity-0 translate-y-10" style={{transitionDelay: '0.2s'}}>
                Mister Fragrance
            </h1>
<p className="text-lg md:text-2xl font-light text-brand-black/70 mb-12 reveal opacity-0 translate-y-10" style={{transitionDelay: '0.4s'}}>
                L'art du parfum — Une signature, une émotion.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-8 reveal opacity-0 translate-y-10" style={{transitionDelay: '0.6s'}}>
<a className="bg-brand-pink-intense text-white px-8 py-4 rounded-full text-sm uppercase tracking-[0.1em] hover:bg-black transition-colors duration-300 hover-target" href="#collection">
                    Découvrir la collection
                </a>
<a className="border border-brand-black text-brand-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.1em] hover:bg-brand-black hover:text-white transition-colors duration-300 hover-target" href="#contact">
                    Commander en direct
                </a>
</div>
<p className="text-xs text-brand-black/50 uppercase tracking-[0.05em] reveal opacity-0" style={{transitionDelay: '0.8s'}}>
                Commandes via WhatsApp &amp; Snapchat — Réponse rapide
            </p>
</div>

<div className="absolute bottom-12 w-full overflow-hidden border-y border-brand-pink-light/50 py-3 bg-brand-bg/50 backdrop-blur-sm">
<div className="whitespace-nowrap animate-marquee flex text-xs md:text-sm uppercase tracking-[0.2em] font-light text-brand-black/60">
<span className="mx-8">Livraison France</span> · <span className="mx-8">Europe</span> · <span className="mx-8">Monde entier</span> · 
                <span className="mx-8">Livraison France</span> · <span className="mx-8">Europe</span> · <span className="mx-8">Monde entier</span> · 
                <span className="mx-8">Livraison France</span> · <span className="mx-8">Europe</span> · <span className="mx-8">Monde entier</span> · 
                <span className="mx-8">Livraison France</span> · <span className="mx-8">Europe</span> · <span className="mx-8">Monde entier</span>
</div>
</div>

<div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<iconify-icon className="text-xl" icon="solar:arrow-down-linear"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
<div className="aspect-[4/5] w-full relative overflow-hidden ken-burns reveal img-placeholder rounded-sm">

<img alt="L'art de la fragrance" className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply" src="https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="reveal">
<h2 className="font-serif text-3xl md:text-5xl tracking-tighter mb-8">L'art de la fragrance</h2>
<p className="text-base md:text-xl font-light leading-relaxed text-brand-black/80 mb-8">
                    Chaque flacon est une invitation au voyage des sens. Des fragrances mixtes, conçues pour exprimer votre singularité, quel que soit votre style. Au-delà du genre, nous célébrons l'émotion brute.
                </p>
<div className="flex items-center gap-4 text-sm uppercase tracking-[0.1em]">
<span className="w-12 h-[1px] bg-brand-black"></span>
                    Mister Fragrance
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="collection">
<div className="max-w-7xl mx-auto px-6 mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6 reveal">
<div>
<h2 className="font-serif text-4xl md:text-6xl tracking-tighter mb-4">Notre Collection</h2>
<p className="font-light text-brand-black/60 text-sm md:text-base">Des signatures olfactives uniques pour toutes et tous.</p>
</div>
<div className="hidden md:flex gap-4">
<button className="w-12 h-12 rounded-full border border-brand-black/20 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all hover-target" id="prevBtn"><iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-12 h-12 rounded-full border border-brand-black/20 flex items-center justify-center hover:bg-brand-black hover:text-white transition-all hover-target" id="nextBtn"><iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="pl-6 md:pl-[calc((100vw-80rem)/2+1.5rem)] pb-12 relative">
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-10 no-scrollbar pb-10 cursor-grab active:cursor-grabbing" id="carouselTrack">


</div>

<div className="max-w-7xl mx-auto pr-6 mt-8 flex justify-center md:justify-start gap-2">
<div className="w-16 h-[2px] bg-brand-black/10 relative overflow-hidden rounded-full">
<div className="absolute top-0 left-0 h-full bg-brand-pink-intense w-1/4 rounded-full transition-all duration-300" id="scrollProgress"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-bg border-y border-brand-pink-light/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 md:gap-8 text-center">
<div className="reveal flex flex-col items-center">
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-gold text-3xl mb-6 shadow-sm">
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4">Qualité d'exception</h3>
<p className="text-sm font-light text-brand-black/70">Des concentrations généreuses pour un sillage marquant et une tenue longue durée.</p>
</div>
<div className="reveal flex flex-col items-center" style={{transitionDelay: '0.2s'}}>
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-gold text-3xl mb-6 shadow-sm">
<iconify-icon icon="solar:gem-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4">Signatures uniques</h3>
<p className="text-sm font-light text-brand-black/70">Des fragrances complexes et mixtes qui ne ressemblent à aucune autre.</p>
</div>
<div className="reveal flex flex-col items-center" style={{transitionDelay: '0.4s'}}>
<div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-brand-gold text-3xl mb-6 shadow-sm">
<iconify-icon icon="solar:chat-round-linear"></iconify-icon>
</div>
<h3 className="font-serif text-2xl tracking-tight mb-4">Service personnalisé</h3>
<p className="text-sm font-light text-brand-black/70">Un accompagnement sur-mesure pour choisir votre parfum via WhatsApp &amp; Snapchat.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">

<div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
<div className="relative w-[800px] h-[400px]">
<div className="map-dot top-[30%] left-[45%]"></div> 
<div className="map-dot top-[28%] left-[48%] animate-pulse" style={{animationDelay: '1s'}}></div> 
<div className="map-dot top-[40%] left-[20%] animate-pulse" style={{animationDelay: '2s'}}></div> 
<div className="map-dot top-[45%] left-[65%] animate-pulse" style={{animationDelay: '3s'}}></div> 
</div>
</div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<span className="text-xs uppercase tracking-[0.2em] text-brand-pink-intense font-medium mb-4 block reveal">Expédition Internationale</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tighter mb-16 reveal">Mister Fragrance voyage avec vous</h2>
<div className="grid md:grid-cols-3 gap-8 mb-16">
<div className="bg-white p-8 rounded-sm shadow-sm reveal">
<iconify-icon className="text-3xl text-brand-black/40 mb-4" icon="solar:map-point-linear"></iconify-icon>
<h4 className="font-serif text-xl tracking-tight mb-2">France</h4>
<p className="text-xs font-light text-brand-black/60">Livraison rapide partout en métropole et DOM-TOM.</p>
</div>
<div className="bg-white p-8 rounded-sm shadow-sm reveal" style={{transitionDelay: '0.2s'}}>
<iconify-icon className="text-3xl text-brand-black/40 mb-4" icon="solar:routing-2-linear"></iconify-icon>
<h4 className="font-serif text-xl tracking-tight mb-2">Europe</h4>
<p className="text-xs font-light text-brand-black/60">Expédition soignée dans toute l'Union Européenne.</p>
</div>
<div className="bg-white p-8 rounded-sm shadow-sm reveal" style={{transitionDelay: '0.4s'}}>
<iconify-icon className="text-3xl text-brand-black/40 mb-4" icon="solar:earth-linear"></iconify-icon>
<h4 className="font-serif text-xl tracking-tight mb-2">Monde entier</h4>
<p className="text-xs font-light text-brand-black/60">Vos parfums livrés où que vous soyez.</p>
</div>
</div>
<p className="text-sm font-light text-brand-black/60 mb-8 reveal">Emballage premium, suivi de colis, expédition discrète.</p>
<a className="inline-block border-b border-brand-black text-sm uppercase tracking-[0.1em] pb-1 hover:text-brand-pink-intense hover:border-brand-pink-intense transition-colors hover-target reveal" href="#contact">Demander les délais sur WhatsApp</a>
</div>
</section>

<section className="py-12 md:py-24 max-w-7xl mx-auto px-6">
<h2 className="font-serif text-2xl md:text-3xl tracking-tighter mb-10 text-center reveal">L'univers Mister Fragrance</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
<div className="col-span-2 row-span-2 img-placeholder rounded-sm overflow-hidden ken-burns reveal relative">
<img alt="Lifestyle 1" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" loading="lazy" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="img-placeholder rounded-sm overflow-hidden ken-burns reveal relative" style={{transitionDelay: '0.1s'}}>
<img alt="Lifestyle 2" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" loading="lazy" src="https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="img-placeholder rounded-sm overflow-hidden ken-burns reveal relative" style={{transitionDelay: '0.2s'}}>
<img alt="Lifestyle 3" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" loading="lazy" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="col-span-2 img-placeholder rounded-sm overflow-hidden ken-burns reveal relative" style={{transitionDelay: '0.3s'}}>
<img alt="Lifestyle 4" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply" loading="lazy" src="https://images.unsplash.com/photo-1590736969955-71cc94801759?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden border-t border-brand-pink-light/30">
<div className="text-center mb-16 reveal">
<h2 className="font-serif text-3xl md:text-4xl tracking-tighter">Ce qu'ils en disent</h2>
</div>
<div className="relative flex overflow-x-hidden group">
<div className="animate-marquee flex gap-8 whitespace-nowrap hover:[animation-play-state:paused]">


</div>
</div>
</section>

<section className="py-24 md:py-32 bg-brand-pink-light/40 relative overflow-hidden" id="contact">

<div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-[100px] opacity-50 pointer-events-none"></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-pink-intense rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-serif text-4xl md:text-6xl tracking-tighter mb-6 reveal">Pour commander,<br/> c'est par ici</h2>
<p className="text-base md:text-lg font-light text-brand-black/70 mb-12 max-w-2xl mx-auto reveal">
                Toutes les commandes se font directement avec nous, par WhatsApp ou Snapchat. Un accompagnement exclusif et un conseil personnalisé garanti.
            </p>
<div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-16 reveal">
<a className="w-full md:w-auto bg-[#25D366] text-white px-8 py-5 rounded-sm flex items-center justify-center gap-3 text-sm uppercase tracking-wider hover:-translate-y-1 hover:shadow-lg transition-all duration-300 hover-target" href="https://wa.me/33600000000?text=Bonjour%20Mister%20Fragrance,%20je%20souhaite%20passer%20une%20commande." target="_blank">
<iconify-icon className="text-2xl" icon="solar:phone-linear"></iconify-icon>
                    WhatsApp
                </a>
<a className="w-full md:w-auto bg-[#FFFC00] text-black px-8 py-5 rounded-sm flex items-center justify-center gap-3 text-sm uppercase tracking-wider hover:-translate-y-1 hover:shadow-lg transition-all duration-300 hover-target" href="https://www.snapchat.com/add/mr_gragranceoff" target="_blank">
<iconify-icon className="text-2xl" icon="solar:ghost-linear"></iconify-icon>
                    Snapchat : mr_gragranceoff
                </a>
</div>
<div className="flex flex-wrap justify-center gap-6 md:gap-12 text-xs uppercase tracking-widest text-brand-black/60 reveal">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-pink-intense text-base" icon="solar:check-circle-linear"></iconify-icon>
                    Livraison France · Europe · Monde
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-pink-intense text-base" icon="solar:box-minimalistic-linear"></iconify-icon>
                    Emballage soigné &amp; discret
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-pink-intense text-base" icon="solar:stopwatch-linear"></iconify-icon>
                    Réponse rapide
                </div>
</div>
</div>
</section>

<footer className="bg-brand-bg pt-20 pb-10 border-t border-brand-black/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="font-serif text-3xl tracking-tighter uppercase mb-6 inline-block hover-target" href="#">Mister Fragrance</a>
<p className="text-sm font-light text-brand-black/60 max-w-xs mb-6">
                        L'art du parfum. Des fragrances mixtes d'exception, livrées partout dans le monde.
                    </p>
<p className="text-xs uppercase tracking-widest text-brand-black font-medium">Livraison France · Europe · Monde entier</p>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest font-medium mb-6">Contact</h5>
<ul className="space-y-4 text-sm font-light text-brand-black/70">
<li><a className="hover:text-brand-pink-intense transition-colors hover-target flex items-center gap-2" href="https://www.snapchat.com/add/mr_gragranceoff" target="_blank"><iconify-icon icon="solar:ghost-linear"></iconify-icon> mr_gragranceoff</a></li>
<li><a className="hover:text-brand-pink-intense transition-colors hover-target flex items-center gap-2" href="https://wa.me/33600000000" target="_blank"><iconify-icon icon="solar:phone-linear"></iconify-icon> WhatsApp</a></li>
</ul>
</div>
<div>
<h5 className="text-xs uppercase tracking-widest font-medium mb-6">Informations</h5>
<ul className="space-y-4 text-sm font-light text-brand-black/70">
<li><a className="hover:text-brand-pink-intense transition-colors hover-target" href="#">Mentions légales</a></li>
<li><a className="hover:text-brand-pink-intense transition-colors hover-target" href="#">CGV &amp; Livraison</a></li>
<li><a className="hover:text-brand-pink-intense transition-colors hover-target" href="#">Politique de confidentialité</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-black/10 text-[10px] uppercase tracking-widest text-brand-black/40">
<p>Copyright © 2026 Mister Fragrance — Tous droits réservés</p>
<p className="mt-4 md:mt-0">Design &amp; Concept Olfactif</p>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-4 right-4 md:left-auto md:w-96 bg-white p-6 shadow-2xl z-50 rounded-sm translate-y-[150%] transition-transform duration-700 ease-out" id="cookieBanner">
<p className="text-xs font-light leading-relaxed mb-4">Nous utilisons des cookies pour assurer le bon fonctionnement du site et analyser notre audience, dans le respect de la vie privée.</p>
<div className="flex gap-2">
<button className="flex-1 bg-brand-black text-white py-2 text-xs uppercase tracking-wider hover:bg-brand-pink-intense transition-colors" onclick="acceptCookies()">Accepter</button>
<button className="flex-1 border border-brand-black/20 py-2 text-xs uppercase tracking-wider hover:bg-gray-50 transition-colors" onclick="acceptCookies()">Refuser</button>
</div>
</div>



    </>
  );
}
