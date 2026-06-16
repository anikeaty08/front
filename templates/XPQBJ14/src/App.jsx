import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    // Animations
    window.addEventListener('DOMContentLoaded', () => {
      gsap.utils.toArray('.fade-in').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          delay: 0.21 + i * 0.09,
          duration: 0.9,
          ease: "power3.out"
        });
        el.classList.add('visible');
      });
    });

    // Modal logic
    const modalBg = document.getElementById('modal-bg');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('modal-close');
    let lastActive = null;
    let zoomAnim = null;

    document.querySelectorAll('.card-clickable').forEach(card => {
      card.addEventListener('click', function(e) {
        let img = card.querySelector('.bw-img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;
        modalBg.classList.remove('hidden');
        modalBg.setAttribute('aria-hidden', 'false');
        setTimeout(() => modalImg.focus(), 120);

        // Animate image only: subtle pan+zoom
        gsap.set(modalImg, {scale:1.01, x:0, y:0, opacity:0});
        gsap.to(modalImg, {opacity:1, duration:0.5, ease:"power2.out"});
        // Kill previous, then animate pan+zoom
        if (zoomAnim) zoomAnim.kill();
        zoomAnim = gsap.to(modalImg, {
          scale:1.17,
          x: '2vw',
          y: '-1.5vw',
          duration: 8,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1
        });
      });
      card.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          card.click();
        }
      });
      card.addEventListener('click', () => lastActive = card);
    });

    function closeModal() {
      gsap.to(modalImg, {opacity:0, scale:0.98, y:20, duration:0.28, ease:"power2.in", onComplete:()=> {
        modalBg.classList.add('hidden');
        modalBg.setAttribute('aria-hidden', 'true');
        modalImg.src='';
        if (zoomAnim) zoomAnim.kill();
        setTimeout(()=>{ if(lastActive) lastActive.focus(); }, 180);
      }});
    }

    closeBtn.addEventListener('click', closeModal);
    modalBg.addEventListener('click', function(e){
      if(e.target === modalBg) closeModal();
    });
    document.addEventListener('keydown', function(e){
      if(!modalBg.classList.contains('hidden') && (e.key === 'Escape' || e.key === 'Esc')) closeModal();
    });
    // Fechar clicando na imagem
    modalImg.addEventListener('click', closeModal);

    // Acessibilidade: fecha com tecla Enter na imagem
    modalImg.addEventListener('keydown', function(e){
      if(e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') closeModal();
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full px-6 py-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-white/80 to-white/40 flex items-center justify-center shadow-lg">
<svg className="text-black w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="9"></circle>
<path d="m8 13 2.5-2.5a2 2 0 0 1 2.8 0L16 13"></path>
</svg>
</div>
<span className="text-2xl font-semibold tracking-tight">blancnoir</span>
</div>
<nav className="flex items-center gap-6">
<a className="text-sm font-medium hover:underline" href="#">Gallery</a>
<a className="text-sm font-medium hover:underline" href="#">Shop</a>
<a className="text-sm font-medium hover:underline" href="#">Contact</a>
<button className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition font-medium border border-white/10 shadow fast-buy">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
        Carrinho
      </button>
</nav>
</header>

<main className="flex-1 flex flex-col items-center w-full px-4 sm:px-8 py-4 md:py-8 max-w-6xl mx-auto">
<section className="w-full mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex-1">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 fade-in">Black &amp; White <span className="bg-gradient-to-r from-white via-gray-400 to-black text-transparent bg-clip-text">Photography</span></h1>
<p className="text-lg text-white/60 mb-6 fade-in">Fine art monochrome prints and clothing by <span className="font-medium">Léo Martin</span>. Crafted with light, shadow &amp; soul. <br/>Scroll, drag, and explore the motion.</p>
<button className="fast-buy px-5 py-3 bg-white/10 border border-white/20 rounded-lg font-medium text-white hover:bg-white/20 transition fade-in">
<i className="w-4 h-4 inline-block mr-2" data-lucide="arrow-down"></i>
          Shop Collection
        </button>
</div>
<div className="hidden md:block flex-1 fade-in">
<div className="w-full max-w-xs mx-auto rounded-2xl overflow-hidden shadow-2xl glass border border-white/10">
<img alt="Gallery hero" className="w-full h-72 object-cover bw-img" src="https://neompzltxilcimodyvpd.supabase.co/storage/v1/object/public/flou//O4Q0iVKJrJTIaD5Bgino07xc7Nk.avif"/>
</div>
</div>
</section>
<div className="border-b border-white/10 mb-10"></div>

<section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group fade-in">
<div aria-label="Ver Louvre Reflections" className="card-clickable bg-gradient-to-br from-white/5 via-black/20 to-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col glass relative outline-none transition-all duration-300" role="button" tabindex="0">
<div className="relative">
<img alt="Monochrome Print 1" className="bw-img w-full h-64 object-cover transition-all duration-400" data-modal-img="Louvre Reflections" src="https://neompzltxilcimodyvpd.supabase.co/storage/v1/object/public/flou//O4Q0iVKJrJTIaD5Bgino07xc7Nk.avif"/>
<div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-black/80 text-xs tracking-tight font-medium border border-white/10">New Print</div>
</div>
<div className="flex-1 flex flex-col px-5 py-4">
<h2 className="text-xl font-semibold tracking-tight mb-1">Louvre Reflections</h2>
<p className="text-white/60 text-sm mb-4">Fine art giclée print.<br/>30x40cm, 50x70cm</p>
<div className="flex items-end justify-between mt-auto">
<span className="text-lg font-medium">$89</span>
<button className="fast-buy px-4 py-2 rounded-lg bg-white/10 border border-white/20 font-semibold text-white transition hover:bg-white/20 hover:outline hover:outline-2 hover:outline-white flex items-center gap-2">
<i className="w-4 h-4" data-lucide="zap"></i>
                Fast Buy
              </button>
</div>
</div>
</div>
</div>

<div className="group fade-in">
<div aria-label="Ver Shadow Tee" className="card-clickable bg-gradient-to-br from-white/5 via-black/30 to-black/60 border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col glass relative outline-none transition-all duration-300" role="button" tabindex="0">
<div className="relative">
<img alt="BW Shirt" className="bw-img w-full h-64 object-cover transition-all duration-400" data-modal-img="Shadow Tee" src="https://neompzltxilcimodyvpd.supabase.co/storage/v1/object/public/flou//CAKNHpmOuwd0UrABgtMmGYovZ3U.avif"/>
<div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-black/80 text-xs tracking-tight font-medium border border-white/10">Shirt</div>
</div>
<div className="flex-1 flex flex-col px-5 py-4">
<h2 className="text-xl font-semibold tracking-tight mb-1">Shadow Tee</h2>
<p className="text-white/60 text-sm mb-4">Organic cotton, S–XL.<br/>Signature print.</p>
<div className="flex items-end justify-between mt-auto">
<span className="text-lg font-medium">$39</span>
<button className="fast-buy px-4 py-2 rounded-lg bg-white/10 border border-white/20 font-semibold text-white transition hover:bg-white/20 hover:outline hover:outline-2 hover:outline-white flex items-center gap-2">
<i className="w-4 h-4" data-lucide="zap"></i>
                Fast Buy
              </button>
</div>
</div>
</div>
</div>

<div className="group fade-in">
<div aria-label="Ver Midnight City" className="card-clickable bg-gradient-to-br from-white/5 via-black/20 to-black/50 border border-white/10 rounded-2xl overflow-hidden shadow-xl flex flex-col glass relative outline-none transition-all duration-300" role="button" tabindex="0">
<div className="relative">
<img alt="Monochrome Print 2" className="bw-img w-full h-64 object-cover transition-all duration-400" data-modal-img="Midnight City" src="https://neompzltxilcimodyvpd.supabase.co/storage/v1/object/public/flou//86a934e5-34d8-44b5-8d4e-c3538dfb2400.jpeg"/>
<div className="absolute top-2 right-2 px-3 py-1 rounded-full bg-black/80 text-xs tracking-tight font-medium border border-white/10">Limited</div>
</div>
<div className="flex-1 flex flex-col px-5 py-4">
<h2 className="text-xl font-semibold tracking-tight mb-1">Midnight City</h2>
<p className="text-white/60 text-sm mb-4">Signed edition, 20x30cm.<br/>Only 50 prints.</p>
<div className="flex items-end justify-between mt-auto">
<span className="text-lg font-medium">$129</span>
<button className="fast-buy px-4 py-2 rounded-lg bg-white/10 border border-white/20 font-semibold text-white transition hover:bg-white/20 hover:outline hover:outline-2 hover:outline-white flex items-center gap-2">
<i className="w-4 h-4" data-lucide="zap"></i>
                Fast Buy
              </button>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="w-full border-t border-white/10 pt-12 pb-6 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
<div>
      © 2024 Léo Martin. Monochrome Art Shop.
    </div>
<div className="flex items-center gap-4">
<a className="hover:underline" href="#">Instagram</a>
<a className="hover:underline" href="#">Privacy</a>
<a className="hover:underline" href="#">Terms</a>
</div>
</footer>

<div aria-hidden="true" aria-modal="true" className="fixed inset-0 flex items-center justify-center modal-bg hidden" id="modal-bg" role="dialog" tabindex="-1">
<button aria-label="Fechar imagem" className="modal-close absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 z-50 focus:outline-none" id="modal-close">
<i className="w-6 h-6 text-white" data-lucide="x"></i>
</button>
<img alt="" className="modal-img-fullscreen" id="modal-img" src="" tabindex="0" />
</img></div>


    </>
  );
}
