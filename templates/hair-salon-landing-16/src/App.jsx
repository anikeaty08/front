import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Setup Text Animation (Char by Char)
        document.addEventListener('DOMContentLoaded', () => {
            const heading = document.querySelector('.reveal-text-trigger');
            if(heading) {
                const text = heading.innerText;
                heading.innerHTML = '';
                heading.classList.add('reveal-text'); // Add styling class
                
                // Split logic while preserving line breaks
                const lines = text.split('\n');
                lines.forEach((line, lineIndex) => {
                    const lineDiv = document.createElement('div');
                    line.split('').forEach((char, index) => {
                        const span = document.createElement('span');
                        span.innerText = char;
                        span.style.animationDelay = `${(index * 0.03) + (lineIndex * 0.5)}s`;
                        lineDiv.appendChild(span);
                    });
                    heading.appendChild(lineDiv);
                });
            }

            // Scroll Reveal Observer
            const observerOptions = {
                root: null,
                threshold: 0.1,
                rootMargin: "0px"
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scroll-visible');
                        
                        // Handle Curtain effect
                        if(entry.target.classList.contains('curtain-container')) {
                            setTimeout(() => {
                                entry.target.classList.add('curtain-active');
                            }, 200);
                        }
                    }
                });
            }, observerOptions);

            const hiddenElements = document.querySelectorAll('.scroll-hidden');
            hiddenElements.forEach((el) => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="liquid-bg"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 mix-blend-difference text-white flex justify-between items-center backdrop-blur-[2px]">
<div className="tracking-tighter text-lg font-medium tracking-[0.2em]">ATELIER PURE</div>
<button className="group flex items-center gap-2 text-sm font-light tracking-wide hover:opacity-70 transition-opacity">
<span>MENÜ</span>
<iconify-icon className="text-white" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<header className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Model Portrait" className="w-full h-full object-cover grayscale opacity-60 scale-105 animate-[liquidMove_30s_infinite_alternate]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505]"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
<h1 className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter text-white mb-6 leading-none reveal-text-trigger">
                Dein Stil. <br/> Deine Signatur.
            </h1>
<p className="text-lg md:text-xl text-neutral-300 font-light tracking-wide mb-10 opacity-0 animate-[textFadeIn_1s_ease-out_1s_forwards]">
                Atelier Pure – Die Kunst des modernen Haarstylings.
            </p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-white/10 transition-all duration-500 group opacity-0 animate-[textFadeIn_1s_ease-out_1.5s_forwards]" href="#booking">
<span className="text-sm font-medium tracking-wide">Termin vereinbaren</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</header>

<section className="py-32 md:py-48 px-6 bg-[#050505] relative z-20">
<div className="max-w-2xl mx-auto text-center scroll-hidden">
<span className="block text-xs font-medium tracking-[0.2em] text-neutral-500 mb-8 uppercase">Philosophie</span>
<h2 className="text-4xl md:text-6xl font-light tracking-tighter text-white mb-8">Pure Ästhetik.</h2>
<p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                Wir glauben daran, dass wahre Schönheit in der Reduktion liegt. In präzisen Schnitten, die Ihre Persönlichkeit unterstreichen, und in Farben, die so lebendig sind wie Sie selbst. Kein Überfluss, nur Essenz.
            </p>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-[#050505] relative z-20">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16 scroll-hidden">
<h3 className="text-3xl font-light tracking-tight text-white">Services</h3>
<span className="text-xs text-neutral-500 tracking-widest uppercase">Preise &amp; Leistungen</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

<div className="scroll-hidden group relative p-8 h-96 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:bg-white/[0.04] transition-all duration-700">
<div className="absolute top-8 right-8 text-neutral-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:scissors-linear" width="32"></iconify-icon>
</div>
<div className="absolute bottom-8 left-8">
<h4 className="text-2xl font-light text-white mb-2">Cut &amp; Style</h4>
<p className="text-sm text-neutral-400 font-light mb-4 w-3/4">Präzisionshaarschnitte inklusive Kopfmassage und Styling.</p>
<span className="inline-block text-sm font-medium text-white border-b border-white/20 pb-1">ab 80€</span>
</div>
</div>

<div className="scroll-hidden md:col-span-1 group relative p-8 h-96 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:bg-white/[0.04] transition-all duration-700 delay-100">
<div className="absolute top-8 right-8 text-neutral-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<div className="absolute bottom-8 left-8">
<h4 className="text-2xl font-light text-white mb-2">Coloration &amp; Balayage</h4>
<p className="text-sm text-neutral-400 font-light mb-4 w-3/4">Individuelle Farbkonzepte, Glossing und Freihandtechniken.</p>
<span className="inline-block text-sm font-medium text-white border-b border-white/20 pb-1">ab 150€</span>
</div>
</div>

<div className="scroll-hidden group relative p-8 h-96 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm overflow-hidden hover:bg-white/[0.04] transition-all duration-700 delay-200">
<div className="absolute top-8 right-8 text-neutral-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:spa-candle-linear" width="32"></iconify-icon>
</div>
<div className="absolute bottom-8 left-8">
<h4 className="text-2xl font-light text-white mb-2">Treatments &amp; Pflege</h4>
<p className="text-sm text-neutral-400 font-light mb-4 w-3/4">Intensive Regeneration für Haarstruktur und Glanz.</p>
<span className="inline-block text-sm font-medium text-white border-b border-white/20 pb-1">ab 40€</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-8 bg-[#050505] relative z-20">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-20 scroll-hidden">
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-white">Das Team</h3>
</div>
<div className="flex flex-col md:flex-row justify-between gap-12 items-center">

<div className="scroll-hidden text-center group cursor-pointer w-full md:w-1/3">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border border-white/10">
<img alt="Stylist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-xl font-normal text-white mb-1">Elena Koch</h4>
<span className="text-xs tracking-widest uppercase text-neutral-500">Master Stylist</span>
</div>

<div className="scroll-hidden text-center group cursor-pointer w-full md:w-1/3 delay-100">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border border-white/10">
<img alt="Stylist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-xl font-normal text-white mb-1">David Weber</h4>
<span className="text-xs tracking-widest uppercase text-neutral-500">Color Expert</span>
</div>

<div className="scroll-hidden text-center group cursor-pointer w-full md:w-1/3 delay-200">
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border border-white/10">
<img alt="Stylist" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-xl font-normal text-white mb-1">Sarah Meyer</h4>
<span className="text-xs tracking-widest uppercase text-neutral-500">Creative Director</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 bg-[#050505] relative z-20">
<div className="max-w-7xl mx-auto mb-16 px-4 scroll-hidden">
<h3 className="text-3xl font-light tracking-tight text-white">Lookbook</h3>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-w-7xl mx-auto space-y-6">

<div className="break-inside-avoid scroll-hidden curtain-container cursor-none group">
<div className="curtain-overlay"></div>
<img alt="Look" className="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid scroll-hidden curtain-container cursor-none group">
<div className="curtain-overlay"></div>
<img alt="Look" className="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="break-inside-avoid scroll-hidden curtain-container cursor-none group">
<div className="curtain-overlay"></div>
<img alt="Look" className="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid scroll-hidden curtain-container cursor-none group">
<div className="curtain-overlay"></div>
<img alt="Look" className="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid scroll-hidden curtain-container cursor-none group">
<div className="curtain-overlay"></div>
<img alt="Look" className="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid scroll-hidden curtain-container cursor-none group">
<div className="curtain-overlay"></div>
<img alt="Look" className="w-full rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1620331317312-74b88bf40907?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-16 border-y border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:opacity-100 transition-opacity duration-700">

<h4 className="text-xl font-serif tracking-widest text-white">ORIBE</h4>
<h4 className="text-xl font-sans font-bold tracking-tighter text-white">KÉRASTASE</h4>
<h4 className="text-xl font-sans font-light tracking-[0.3em] text-white">OLAPLEX</h4>
<h4 className="text-xl font-mono tracking-tighter text-white">AVEDA</h4>
</div>
</div>
</section>

<section className="py-24 px-4 bg-[#050505]">
<div className="max-w-5xl mx-auto scroll-hidden">
<div className="flex justify-between items-center mb-10 px-4">
<h3 className="text-xl font-light text-white flex items-center gap-2">
<iconify-icon icon="solar:camera-linear"></iconify-icon> @atelierpure_
                </h3>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">FOLGEN</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-1">

<div className="relative aspect-square bg-neutral-900 group overflow-hidden">
<img alt="Insta" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
</div>

<div className="relative aspect-square bg-neutral-900 group overflow-hidden">
<img alt="Insta" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
</div>

<div className="relative aspect-square bg-neutral-900 group overflow-hidden">
<img alt="Insta" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
</div>

<div className="relative aspect-square bg-neutral-900 group overflow-hidden">
<img alt="Insta" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
<iconify-icon icon="solar:heart-linear" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<span className="block text-xs font-medium tracking-[0.2em] text-neutral-500 mb-12 uppercase">Stimmen</span>
<div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-8 pb-8">

<div className="snap-center shrink-0 w-full md:w-[600px] p-8 border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-sm">
<div className="flex gap-1 text-white mb-6">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-2xl md:text-3xl font-light leading-snug text-neutral-200 mb-6">"Endlich ein Salon, der versteht, was 'weniger ist mehr' bedeutet. Der Schnitt ist absolut perfekt."</p>
<cite className="text-sm font-medium text-neutral-500 not-italic">— Julia M., Berlin</cite>
</div>

<div className="snap-center shrink-0 w-full md:w-[600px] p-8 border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-sm">
<div className="flex gap-1 text-white mb-6">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-2xl md:text-3xl font-light leading-snug text-neutral-200 mb-6">"Die Atmosphäre ist unglaublich beruhigend. Ein echtes Premium-Erlebnis von A bis Z."</p>
<cite className="text-sm font-medium text-neutral-500 not-italic">— Thomas K., München</cite>
</div>

<div className="snap-center shrink-0 w-full md:w-[600px] p-8 border border-white/5 rounded-3xl bg-white/[0.02] backdrop-blur-sm">
<div className="flex gap-1 text-white mb-6">
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="16"></iconify-icon>
</div>
<p className="text-2xl md:text-3xl font-light leading-snug text-neutral-200 mb-6">"Meine Balayage hat noch nie so natürlich ausgesehen. Ich bin begeistert."</p>
<cite className="text-sm font-medium text-neutral-500 not-italic">— Sophie L., Hamburg</cite>
</div>
</div>
</div>
</section>

<footer className="relative py-32 px-6 bg-[#050505] border-t border-white/10" id="booking">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white mb-8">Bereit für Ihren<br/>neuen Look?</h2>
<button className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full hover:bg-neutral-200 transition-colors duration-300 mb-16">
<span className="text-base font-medium tracking-wide">Jetzt Buchen</span>
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</button>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left border-t border-white/10 pt-16">
<div>
<h5 className="text-white font-medium mb-4">Besuchen Sie uns</h5>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Atelier Pure<br/>
                        Maximilianstraße 12<br/>
                        80539 München
                    </p>
</div>
<div>
<h5 className="text-white font-medium mb-4">Öffnungszeiten</h5>
<p className="text-neutral-500 text-sm leading-relaxed">
                        Mo - Fr: 10:00 - 20:00<br/>
                        Sa: 09:00 - 18:00<br/>
                        So: Geschlossen
                    </p>
</div>
<div>
<h5 className="text-white font-medium mb-4">Kontakt</h5>
<p className="text-neutral-500 text-sm leading-relaxed">
                        +49 (0) 89 123 456 78<br/>
                        hello@atelierpure.de
                    </p>
<div className="flex gap-4 mt-4 md:justify-start justify-center">
<iconify-icon className="text-white hover:text-neutral-400 cursor-pointer" icon="solar:instagram-linear" width="20"></iconify-icon>
<iconify-icon className="text-white hover:text-neutral-400 cursor-pointer" icon="solar:facebook-linear" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="mt-24 text-center">
<p className="text-xs text-neutral-700 uppercase tracking-widest">© 2024 Atelier Pure. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
