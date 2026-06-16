import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);

      const scroller = ".snap-container";

      // Initial Hero Animation
      const tl = gsap.timeline();
      tl.to(".gsap-hero", { y: 0, opacity: 1, duration: 1.5, ease: "power3.out", delay: 0.5 })
        .to(".gsap-hero-btn", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=1");

      // Scroll Reveals
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
          const reveals = section.querySelectorAll(".gsap-reveal");
          if(reveals.length > 0) {
              gsap.to(reveals, {
                  scrollTrigger: {
                      trigger: section,
                      scroller: scroller,
                      start: "top 60%",
                      toggleActions: "play none none reverse",
                  },
                  y: 0,
                  x: 0,
                  scale: 1,
                  opacity: 1,
                  duration: 1,
                  stagger: 0.2,
                  ease: "power3.out"
              });
          }
      });
    


      // Hero Word Rotation
      const words = ["LOFT", "BULLES", "MARBRE", "VAPEUR"];
      let wordIndex = 0;
      const wordSpan = document.getElementById('hero-word');
      if(wordSpan) {
          setInterval(() => {
              wordIndex = (wordIndex + 1) % words.length;
              gsap.to(wordSpan, { opacity: 0, y: -20, duration: 0.5, onComplete: () => {
                  wordSpan.innerText = words[wordIndex];
                  gsap.fromTo(wordSpan, { y: 20 }, { opacity: 0.9, y: 0, duration: 0.5 });
              }});
          }, 2500);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="marble-bg"></div>

<nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
<div className="display text-xl tracking-tighter font-semibold pointer-events-auto cursor-pointer">
        DREAM LOFT
      </div>
<a className="pointer-events-auto btn-gold px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform" href="#booking">
        Réserver
      </a>
</nav>

<main className="snap-container relative w-full">

<section className="flex flex-col items-center justify-center" id="hero">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://res.cloudinary.com/doaxw7zoz/video/upload/v1769197985/hero_spa_video_hdrs7j.mp4"></video>
<div className="absolute inset-0 bg-black/40"></div>
</div>
<div className="relative z-10 text-center px-4 flex flex-col items-center gap-6">
<h1 className="display text-[15vw] md:text-[9vw] leading-[0.85] gsap-hero text-white tracking-tighter opacity-0 mix-blend-overlay translate-y-10">
            DREAM
            <br/>
<span className="italic text-[#D4AF37] opacity-90" id="hero-word">
              LOFT
            </span>
</h1>
<div className="flex flex-col md:flex-row gap-4 mt-8 opacity-0 translate-y-10 gsap-hero-btn">
<a className="btn-gold uppercase flex items-center gap-3 transition-transform hover:scale-105 text-xs font-semibold tracking-widest rounded-sm pt-4 pr-8 pb-4 pl-8" href="#booking">
<span className="">Profiter</span>
<iconify-icon className="" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="group px-8 py-4 rounded-sm border border-white/20 backdrop-blur-md bg-white/5 font-medium tracking-widest text-xs uppercase text-white hover:bg-white/10 transition-all flex items-center gap-3" href="tel:0612345678">
<iconify-icon className="text-[#D4AF37]" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span>Contact</span>
</a>
</div>
<p className="mt-8 text-white/60 font-light tracking-[0.2em] uppercase text-[10px] animate-pulse">
            Hébergement de Luxe à Valentigney
          </p>
</div>

<div className="absolute bottom-8 animate-pulse z-10 opacity-70">
<img alt="Découvrir" className="w-6 h-6 object-contain" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769298997/verre_trinquer_zj6ygn.png"/>
</div>
</section>
<section className="z-20 flex flex-col bg-[#050505] h-auto border-white/5 border-b pt-16 pb-16 relative justify-center">
<div className="max-w-7xl mx-auto px-6 mb-16 w-full">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
<div className="p-4">
<p className="display text-4xl text-[#D4AF37] mb-2">+ 150</p>
<p className="text-xs uppercase tracking-widest text-zinc-400">
                Séjours en 2 ans
              </p>
</div>
<div className="p-4">
<div className="flex items-center justify-center gap-2 mb-2">
<span className="display text-4xl text-[#D4AF37]">4,93</span>
<span className="text-xl text-[#D4AF37]">/5</span>
</div>
<p className="text-xs uppercase tracking-widest text-zinc-400">
                Moyenne attribuée par nos Convives
              </p>
</div>
<div className="p-4">
<p className="display text-4xl text-[#D4AF37] mb-2">100%</p>
<p className="text-xs uppercase tracking-widest text-zinc-400">
                Check-in/out Simple et Pro
              </p>
</div>
</div>
</div>
<div className="w-full overflow-hidden">
<div className="flex gap-6 animate-marquee w-max px-6">

<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/ANGELINE_h80kjw.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "Très bel appartement, jaccuzi très bien, tout est réuni pour
                  passer une excellent moment."
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Angéline - Déc 2025
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/RYAN_dycpyq.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "🌟 Séjour exceptionnel ! Le jacuzzi et le sauna sont de vrais
                  atouts, parfaitement entretenus."
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Ryan - Août 2025
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/MANON_vrrdc3.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "Toutes les explications étaient claires, nous recommandons
                  les yeux fermés !"
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Manon - Mai 2025
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/DEHAN_ka0apm.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "L'hôte Adil était très accueillant. Le logement était
                  impeccable et correspondait bien à la description."
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Dehan - Jan 2026
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/ELOISE_hgwpgr.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "Vraiment une belle découverte, tout était là pour nous
                  satisfaire. Le lieu classe avec tout ce qu’il fallait."
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Eloïse - Avril 2025
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/CECILE_fwbb3d.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "Tout est propre, beau et neuf. Le logement est bien isolé, il
                  fait bon. Je conseille fortement !"
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Cecile - Fév 2025
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/GUILAUME_w0zbsz.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "Adil est très acceuillant et sympatique. Le logement est très
                  propre et chaleureux.😀"
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Guillaume - Juil 2025
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/JUSTIN_dh1lzc.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "Nous avons passé un agréable séjour. En cas de problème, il a
                  toujours aidé rapidement."
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Justin - Jan 2026
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/PETRA_ecercn.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "Hôte super sympathique. Logement exactement comme prévu. Nous
                  serions ravis d'y retourner !🤗"
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Petra - Déc 2024
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/WASSIM_ystlve.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "Merci pour les extras et la propreté remarquable du logement
                  et du spa."
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Wassim - Fév 2024
                </p>
</div>
</div>

<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/ANGELINE_h80kjw.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "Très bel appartement, jaccuzi très bien, tout est réuni pour
                  passer une excellent moment."
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Angéline - Déc 2025
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/RYAN_dycpyq.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "🌟 Séjour exceptionnel ! Le jacuzzi et le sauna sont de vrais
                  atouts, parfaitement entretenus."
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Ryan - Août 2025
                </p>
</div>
</div>
<div className="bg-gris-texture border border-[#22D3EE] p-6 rounded-[20%] review-card flex gap-4 text-left items-start">
<img className="w-10 h-10 rounded-full object-cover" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769293640/MANON_vrrdc3.avif"/>
<div className="text-sm">
<p className="text-white italic mb-2">
                  "Toutes les explications étaient claires, nous recommandons
                  les yeux fermés !"
                </p>
<p className="text-xs text-[#D4AF37] uppercase tracking-widest">
                  Manon - Mai 2025
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="grid md:grid-cols-2 bg-gris-texture">

<div className="md:h-full order-1 overflow-hidden group w-full h-[40vh] border-white/5 border-r relative">
<img alt="Salon" className="w-full h-full object-cover grayscale-[20%] brightness-75 group-hover:scale-105 transition-transform duration-[2s] ease-out" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769202618/sejour_igkmzx.png"/>
</div>

<div className="md:h-full order-2 flex md:p-16 w-full h-auto pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="w-full max-w-lg gsap-reveal opacity-0 translate-x-8">
<h2 className="display text-4xl md:text-5xl mb-6 tracking-tight text-white">
              ESPACE OUVERT

              <span className="italic text-[#D4AF37]">LUXUEUX</span>
</h2>
<p className="text-zinc-400 font-light leading-loose text-sm md:text-base mb-8">
              Un mélange de Glamour &amp; Convivialité où tous les équipements
              sont pensés pour un lâcher prise total.
            </p>
<div className="grid grid-cols-2 gap-4">
<div className="glass-pearl p-4 text-center border border-white/5 hover:border-[#D4AF37]/30 transition-colors cursor-default">
<span className="text-xs uppercase tracking-widest text-white">
                  .Télévision 4K.
                </span>
</div>
<div className="glass-pearl p-4 text-center border border-white/5 hover:border-[#D4AF37]/30 transition-colors cursor-default">
<span className="text-xs uppercase tracking-widest text-white">
                  .Billard.
                </span>
</div>
<div className="glass-pearl p-4 text-center border border-white/5 hover:border-[#D4AF37]/30 transition-colors cursor-default">
<span className="text-xs uppercase tracking-widest text-white">
                  .Système Audio Premium.
                </span>
</div>
<div className="glass-pearl p-4 text-center border border-white/5 hover:border-[#D4AF37]/30 transition-colors cursor-default">
<span className="text-xs uppercase tracking-widest text-white">
                  .PS5.
                </span>
</div>
</div>
</div>
</div>
</section>
<section className="py-14 bg-[#0a0a0a] border-y border-white/5 flex flex-col items-center justify-center text-center gap-6 h-auto">
<div className="">
<h3 className="display text-2xl text-white mb-2">BESOIN DE SOUFFLER ?</h3>
<p className="text-[#D4AF37] text-sm uppercase tracking-widest">
            Arrivée dès 18h00 - Départ avant 11h00
          </p>
</div>
<a className="btn-gold px-12 py-3 rounded-sm font-bold tracking-widest text-xs uppercase hover:scale-105 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.3)]" href="#booking">
          RÉSERVER
        </a>
<div className="flex flex-wrap justify-center gap-4 text-[10px] text-zinc-500 uppercase tracking-widest">
<span className="">.Paiement en Ligne.</span>
<span>.Paiement sur Place.</span>
<span>.Empreinte Bancaire Sécurisée.</span>
</div>
</section>

<section className="grid md:grid-cols-2 bg-gris-texture">

<div className="relative h-auto md:h-full w-full order-2 md:order-1 flex items-center justify-center p-8 md:p-16">
<div className="w-full max-w-md gsap-reveal opacity-0 -translate-x-8">
<h2 className="display text-4xl md:text-6xl mb-6 tracking-tight text-white">
              SUITE

              <span className="italic text-[#D4AF37]">PRESTIGE</span>
</h2>
<p className="text-xl text-white font-display italic mb-8 border-l-2 border-[#D4AF37] pl-4">
              "Une suite digne d'un 3🌟étoile"
            </p>
<div className="glass-pearl p-6 rounded-sm mb-8 bg-white/5 border-[#D4AF37]">
<p className="text-zinc-300 font-light italic text-sm mb-0">
                "Nous avons déconnecté pendant 2 jours!!! 😉👍"
              </p>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-zinc-300 text-xs uppercase tracking-widest">
<div className="w-1 h-1 bg-[#D4AF37] rounded-full"></div>
                .Lit King Size.
              </li>
<li className="flex items-center gap-4 text-zinc-300 text-xs uppercase tracking-widest">
<div className="w-1 h-1 bg-[#D4AF37] rounded-full"></div>
                .Isolation Phonique Absolue.
              </li>
<li className="flex items-center gap-4 text-zinc-300 text-xs uppercase tracking-widest">
<div className="w-1 h-1 bg-[#D4AF37] rounded-full"></div>
                .Draps en Satin.
              </li>
</ul>
</div>
</div>

<div className="relative h-[40vh] md:h-full w-full order-1 md:order-2 overflow-hidden border-l border-white/5 group">
<img alt="Chambre" className="w-full h-full object-cover brightness-[0.6] group-hover:scale-110 transition-transform duration-[3s] ease-in-out" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769202618/chambre_xiz0um.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
</div>
</section>
<section className="py-20 bg-[url('https://res.cloudinary.com/doaxw7zoz/image/upload/v1769202618/cuisine_regj8o.png')] bg-cover bg-center relative h-auto">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
<div className="relative z-10 text-center flex flex-col items-center gap-6 p-4">
<h3 className="display text-4xl text-white">UN PETIT CREUX ?</h3>
<p className="text-zinc-300 text-sm max-w-md font-light">
            Pizzas ou Burgers en livraison - sans bouger du lit
          </p>
<a className="mt-4 btn-gold px-10 py-4 rounded-sm uppercase tracking-widest text-xs font-bold hover:scale-105 transition-transform" href="#">
            Commander
          </a>
</div>
</section>

<section className="grid md:grid-cols-2 bg-gris-texture">

<div className="relative h-auto md:h-full w-full flex flex-col items-center justify-center p-8 md:p-16 border-r border-white/5">
<div className="w-full max-w-md gsap-reveal opacity-0 translate-y-8">
<h2 className="display text-3xl md:text-5xl mb-6 tracking-tight text-white">
              SAUNA
              <span className="text-[#D4AF37]">NORVEGIEN</span>
</h2>
<p className="text-zinc-400 font-light mb-10 leading-relaxed">
              Le clou du spectacle pour une Détente en amoureux.
            </p>
<div className="glass-pearl p-8 rounded-sm border border-white/5 relative">
<div className="flex gap-1 text-[#D4AF37] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-white italic text-lg font-display mb-6 leading-relaxed">
                "Beau logement. Hôte très sympa. Nous avons adoré le Sauna."
              </p>
<div className="flex items-center gap-3">
<span className="h-[1px] w-8 bg-[#D4AF37]"></span>
<span className="text-xs uppercase tracking-widest text-zinc-500">
                  Barbara - Décembre 2024
                </span>
</div>
</div>
</div>
</div>

<div className="relative h-[40vh] md:h-full w-full overflow-hidden">
<img alt="Sauna" className="w-full h-full object-cover brightness-75 hover:scale-105 transition-transform duration-[2s]" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769202618/sauna_cegzyn.png"/>
</div>
</section>

<section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
<div className="absolute inset-0 grid grid-cols-2">
<img className="w-full h-full object-cover opacity-60" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769202618/salon_ebzjzi.png"/>
<img className="w-full h-full object-cover opacity-60" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769202618/cuisine_regj8o.png"/>
</div>
<div className="absolute inset-0 z-0 animate-bg-fade opacity-0">
<img className="w-full h-full object-cover brightness-50" src="https://res.cloudinary.com/doaxw7zoz/image/upload/v1769202619/salle_de_bain_ck6we9.png"/>
</div>
<div className="relative z-10 p-6 w-full max-w-3xl">
<div className="glass-panel p-10 md:p-16 text-center border border-white/10 backdrop-blur-xl rounded-sm shadow-2xl">
<h2 className="display text-4xl md:text-6xl text-white mb-8 tracking-tight">
              La Fusion entre le Calme &amp; le Luxe
            </h2>
<div className="flex flex-wrap justify-center gap-3 md:gap-6 text-xs uppercase tracking-widest text-[#D4AF37] mb-10">
<span>.Douche Italienne.</span>
<span>.Cuisine Moderne.</span>
<span>.Salon Tout Confort.</span>
</div>
<button className="btn-gold w-full md:w-auto px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase hover:scale-105 transition-transform">
              JE RÉSERVE MA NUIT
            </button>
<p className="mt-8 text-[10px] text-zinc-400 uppercase tracking-[0.3em]">
              TOUT EST PENSÉ POUR VOUS ASSURER UN SEJOUR MÉMORABLE
            </p>
</div>
</div>
</section>
</main>



    </>
  );
}
