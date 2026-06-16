import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Utilities
      const $ = (sel, ctx = document) => ctx.querySelector(sel);
      const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

      // Mobile nav toggle
      $('#mobileMenu')?.addEventListener('click', () => {
        const panel = $('#mobilePanel');
        panel.classList.toggle('hidden');
      });
      // Close mobile panel when navigating
      $$('#mobilePanel a').forEach(a => a.addEventListener('click', () => $('#mobilePanel').classList.add('hidden')));

      // Lightbox
      const lightbox = $('#lightbox');
      const lightboxImg = $('#lightboxImg');
      const zoomToggle = $('#zoomToggle');
      let zoomed = false;

      // Use the same image that's shown in the gallery for zoom
      $$('#gallery [data-lightbox-src]').forEach(btn => {
        btn.addEventListener('click', () => {
          const imgEl = btn.querySelector('img');
          const src = imgEl?.src || btn.getAttribute('data-lightbox-src');
          lightboxImg.src = src;
          lightbox.classList.remove('hidden');
          zoomed = false;
          lightboxImg.style.transform = 'scale(1)';
          zoomToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M15 15l6 6"></path>
              <circle cx="10" cy="10" r="7"></circle>
              <path d="M7 10h6M10 7v6"></path>
            </svg>`;
        });
      });
      $('#closeLightbox')?.addEventListener('click', () => lightbox.classList.add('hidden'));
      lightbox?.addEventListener('click', (e) => {
        if (e.target === lightbox) lightbox.classList.add('hidden');
      });
      zoomToggle?.addEventListener('click', () => {
        zoomed = !zoomed;
        lightboxImg.style.transform = zoomed ? 'scale(1.5)' : 'scale(1)';
        zoomToggle.innerHTML = zoomed
          ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 15l6 6"></path><circle cx="10" cy="10" r="7"></circle><path d="M13 10H7"/></svg>`
          : `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 15l6 6"></path><circle cx="10" cy="10" r="7"></circle><path d="M7 10h6M10 7v6"></path></svg>`;
      });

      // Featured Artists scroller controls
      const scroller = $('#artistsScroller');
      $('#artistsPrev')?.addEventListener('click', () => scroller.scrollBy({ left: -240, behavior: 'smooth' }));
      $('#artistsNext')?.addEventListener('click', () => scroller.scrollBy({ left: 240, behavior: 'smooth' }));

      // Customiser
      const frameBorder = $('#frameBorder');
      const frameContainer = $('#frameContainer');
      const frameName = $('#frameName');
      const summaryFrame = $('#summaryFrame');
      const thicknessInput = $('#thickness');
      const thicknessVal = $('#thicknessVal');
      const summaryThickness = $('#summaryThickness');
      const priceEl = $('#price');
      const summaryPrice = $('#summaryPrice');

      const basePrice = 1200;
      let currentFrame = 'black';
      let currentThickness = parseInt(thicknessInput.value, 10);

      function applyFrameStyle(frame) {
        let color = '#111';
        let outline = '#161616';
        let inset = 'inset 0 0 0';
        switch (frame) {
          case 'black':
            color = '#111';
            outline = '#161616';
            inset = 'inset 0 0 0 2px #000';
            break;
          case 'gold':
            color = '#1a1307';
            outline = '#C8A24E';
            inset = 'inset 0 0 0 2px #C8A24E';
            break;
          case 'white':
            color = '#fff';
            outline = 'rgba(255,255,255,0.8)';
            inset = 'inset 0 0 0 2px rgba(255,255,255,0.9)';
            break;
          case 'walnut':
            color = '#4a2f23';
            outline = '#5a3a2c';
            inset = 'inset 0 0 0 2px #6b4634';
            break;
        }
        const borderPx = currentThickness;
        frameBorder.style.border = `${borderPx}px solid ${outline}`;
        frameBorder.style.borderRadius = '12px';
        frameBorder.style.boxShadow = `${inset}, 0 8px 24px rgba(0,0,0,0.35)`;
        frameContainer.style.padding = Math.max(6, 24 - Math.min(borderPx, 18)) + 'px';
        frameBorder.style.background = color === '#fff' ? '#fff' : 'transparent';
      }

      function updatePrice() {
        const thicknessAdd = Math.max(0, currentThickness - 6) * 3;
        let multiplier = 1;
        if (currentFrame === 'gold') multiplier = 1.12;
        if (currentFrame === 'walnut') multiplier = 1.06;
        if (currentFrame === 'white') multiplier = 1.02;
        const price = Math.round((basePrice * multiplier + thicknessAdd) / 10) * 10;
        priceEl.textContent = `$${price.toLocaleString()}`;
        summaryPrice.textContent = `$${price.toLocaleString()}`;
      }

      // Init
      applyFrameStyle(currentFrame);
      updatePrice();

      // Frame option selection
      $$('#frameCarousel button').forEach(btn => {
        btn.addEventListener('click', () => {
          $$('#frameCarousel button').forEach(b => b.classList.remove('ring-2', 'ring-[#C8A24E]/60'));
          btn.classList.add('ring-2', 'ring-[#C8A24E]/60');
          currentFrame = btn.getAttribute('data-frame');
          const name = btn.getAttribute('data-name');
          frameName.textContent = name;
          summaryFrame.textContent = name;
          applyFrameStyle(currentFrame);
          updatePrice();
        });
      });

      // Thickness slider sync
      function styleRangeThumb(input) {
        const val = (input.value - input.min) / (input.max - input.min);
        input.style.background = `linear-gradient(to right, #C8A24E ${val * 100}%, rgba(255,255,255,0) ${val * 100}%)`;
      }
      thicknessInput.addEventListener('input', (e) => {
        currentThickness = parseInt(e.target.value, 10);
        thicknessVal.textContent = `${currentThickness} mm`;
        summaryThickness.textContent = `${currentThickness} mm`;
        applyFrameStyle(currentFrame);
        updatePrice();
        styleRangeThumb(thicknessInput);
      });
      styleRangeThumb(thicknessInput);

      // Add to cart
      let cartCount = 0;
      $('#addToCart').addEventListener('click', () => {
        cartCount += 1;
        $('#cartCount').textContent = cartCount;
        const btn = $('#addToCart');
        btn.classList.add('scale-95');
        setTimeout(() => btn.classList.remove('scale-95'), 120);
      });

      // Save config (simple toast)
      $('#saveConfig').addEventListener('click', () => {
        const toast = document.createElement('div');
        toast.className = 'fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-sm text-white/90 backdrop-blur';
        toast.textContent = 'Configuration saved.';
        document.body.appendChild(toast);
        setTimeout(() => { toast.remove(); }, 1800);
      });

      // Year
      $('#year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed inset-x-0 top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 rounded-full border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30">
<nav className="flex items-center justify-between px-4 py-3 sm:px-6">
<a className="group inline-flex items-center gap-2" href="#hero">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0b0e0f] font-semibold tracking-tight">ES</div>
<span className="sr-only">Eastern Suburbs Art Group</span>
</a>
<ul className="hidden md:flex items-center gap-8 text-sm text-white/80">
<li><a className="hover:text-white transition-colors" href="#artists">Artists</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#gallery">Gallery</a></li>
<li><a className="hover:text-white transition-colors" href="#customiser">Customiser</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#shows">Shows</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#about">About</a></li>
</ul>
<div className="flex items-center gap-3">
<button className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors" id="openSearch">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<span className="hidden lg:inline">Search</span>
</button>
<button className="relative rounded-full border border-[#C8A24E]/30 bg-[#C8A24E]/10 px-3 py-1.5 text-[#C8A24E] hover:bg-[#C8A24E]/20 transition-colors" id="cartBtn">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
<span className="absolute -right-1.5 -top-1.5 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-[#C8A24E] px-1 text-xs text-[#0b0e0f] font-medium" id="cartCount">0</span>
</button>
<button className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition" id="mobileMenu">

<svg className="h-5 w-5 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>
</nav>
</div>
</div>

<div className="md:hidden hidden" id="mobilePanel">
<div className="mx-auto mt-2 max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur">
<ul className="grid divide-y divide-white/5 text-white/80">
<li><a className="block px-5 py-3 hover:bg-white/5" href="#artists">Artists</a></li>
<li><a className="block px-5 py-3 hover:bg-white/5" href="#gallery">Gallery</a></li>
<li><a className="block px-5 py-3 hover:bg-white/5" href="#customiser">Customiser</a></li>
<li><a className="block px-5 py-3 hover:bg-white/5" href="#shows">Shows</a></li>
<li><a className="block px-5 py-3 hover:bg-white/5" href="#about">About</a></li>
</ul>
</div>
</div>
</div>
</header>

<section className="relative min-h-[88vh] w-full overflow-hidden" id="hero">
<img alt="Contemporary artwork" className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1581337204873-ef36aa186caa?w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0b0e0f]"></div>
<div className="relative flex min-h-[88vh] max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pb-24 pl-4 items-end">
<div className="max-w-3xl">
<h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight text-white/95 drop-shadow-sm">Where Eastern Suburbs Art Comes Alive</h1>
<p className="mt-5 max-w-xl text-base sm:text-lg text-white/70">Curated contemporary works by emerging and established artists. Discover, collect, and customise with museum-grade frames.</p>
<div className="mt-8 flex items-center gap-4">
<a className="group inline-flex items-center gap-2 hover:bg-[#C8A24E]/20 hover:shadow-[0_10px_30px_rgba(200,162,78,0.25)] transition text-sm font-medium text-[#C8A24E] tracking-tight bg-[#C8A24E]/10 border-[#C8A24E] border rounded-full pt-3 pr-5 pb-3 pl-5" href="#artists">
              Explore Artists
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10 transition" href="#gallery">
              View Gallery
            </a>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative" id="artists">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="flex mb-8 items-end justify-between">
<div className="">
<h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-white">Featured Artists</h2>
<p className="mt-2 text-sm sm:text-base text-white/60">A curated roster across painting, sculpture, and new media.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition" id="artistsPrev">
<svg className="h-4 w-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition" id="artistsNext">
<svg className="h-4 w-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
<div className="relative -mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 pt-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent" id="artistsScroller">

<div className="group relative snap-start shrink-0 w-[120px] sm:w-[140px]">
<div className="relative mx-auto h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] overflow-hidden rounded-full border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
<img alt="Artist Ava" className="h-full w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=320&amp;q=80"/>
<img alt="Artwork preview by Ava" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 text-center">
<p className="text-sm font-medium tracking-tight text-white">Ava Liang</p>
<p className="text-xs text-white/50">Gestural</p>
</div>
</div>
<div className="group relative snap-start shrink-0 w-[120px] sm:w-[140px]">
<div className="relative h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.35)] border-white/10 border rounded-full mr-auto ml-auto">
<img alt="Artist Julian" className="h-full w-full transition-transform duration-500 group-hover:scale-105 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Artwork preview by Julian" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 text-center">
<p className="text-sm font-medium tracking-tight text-white">Julian Park</p>
<p className="text-xs text-white/50">Abstract</p>
</div>
</div>
<div className="group relative snap-start shrink-0 w-[120px] sm:w-[140px]">
<div className="relative mx-auto h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] overflow-hidden rounded-full border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
<img alt="Artist Sienna" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Artwork preview by Sienna" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" src="https://images.unsplash.com/photo-1508919801845-fc2ae1bc2a28?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 text-center">
<p className="text-sm font-medium tracking-tight text-white">Sienna Oak</p>
<p className="text-xs text-white/50">Minimal</p>
</div>
</div>
<div className="group relative snap-start shrink-0 w-[120px] sm:w-[140px]">
<div className="relative mx-auto h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] overflow-hidden rounded-full border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
<img alt="Artist Marco" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Artwork preview by Marco" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 text-center">
<p className="text-sm font-medium tracking-tight text-white">Marco Ely</p>
<p className="text-xs text-white/50">Sculpture</p>
</div>
</div>
<div className="group relative snap-start shrink-0 w-[120px] sm:w-[140px]">
<div className="relative mx-auto h-[120px] w-[120px] sm:h-[140px] sm:w-[140px] overflow-hidden rounded-full border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
<img alt="Artist Noor" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Artwork preview by Noor" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 text-center">
<p className="text-sm font-medium tracking-tight text-white">Noor Hale</p>
<p className="text-xs text-white/50">Monochrome</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="gallery">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="mb-8">
<h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-white">Gallery Experience</h2>
<p className="sm:text-base text-sm text-white/60 mt-2">Frameless, high-resolution works you can zoom into.</p>
</div>
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

<button className="group relative overflow-hidden outline outline-1 outline-white/10 bg-black/20 rounded-md" data-lightbox-src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
<img alt="Painting of a mountain and trees" className="h-72 w-full transition-transform duration-700 group-hover:scale-[1.03] object-cover" src="https://images.unsplash.com/photo-1715628283682-22da01c0aa5f?w=800&amp;q=80"/>
</button>
<button className="group relative overflow-hidden rounded-md bg-black/20 outline outline-1 outline-white/10" data-lightbox-src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
<img alt="Gallery piece 2" className="h-72 w-full transition-transform duration-700 group-hover:scale-[1.03] object-cover" src="https://images.unsplash.com/photo-1615184697985-c9bde1b07da7?w=800&amp;q=80"/>
</button>
<button className="group relative overflow-hidden rounded-md bg-black/20 outline outline-1 outline-white/10" data-lightbox-src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
<img alt="Gallery piece 3" className="h-72 w-full transition-transform duration-700 group-hover:scale-[1.03] object-cover" src="https://images.unsplash.com/photo-1577720643360-00432b40139c?w=800&amp;q=80"/>
</button>
<button className="group relative overflow-hidden rounded-md bg-black/20 outline outline-1 outline-white/10" data-lightbox-src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
<img alt="Gallery piece 4" className="h-72 w-full transition-transform duration-700 group-hover:scale-[1.03] object-cover" src="https://images.unsplash.com/photo-1695844918823-8ec54d7d839c?w=800&amp;q=80"/>
</button>
<button className="group relative overflow-hidden rounded-md bg-black/20 outline outline-1 outline-white/10" data-lightbox-src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
<img alt="Gallery piece 5" className="h-72 w-full transition-transform duration-700 group-hover:scale-[1.03] object-cover" src="https://images.unsplash.com/photo-1584285405429-136bf988919c?w=800&amp;q=80"/>
</button>
<button className="group relative overflow-hidden rounded-md bg-black/20 outline outline-1 outline-white/10" data-lightbox-src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&amp;w=1400&amp;auto=format&amp;fit=crop">
<img alt="Gallery piece 6" className="h-72 w-full transition-transform duration-700 group-hover:scale-[1.03] object-cover" src="https://images.unsplash.com/photo-1524664399170-77e7118fdb6d?w=800&amp;q=80"/>
</button>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="lightbox">
<div className="absolute inset-0 bg-black/80"></div>
<div className="relative mx-auto flex h-full max-w-6xl items-center justify-center px-4">
<div className="relative w-full rounded-xl border border-white/10 bg-black/60 p-2 backdrop-blur">
<div className="relative overflow-hidden rounded-lg">
<img alt="Zoomed artwork" className="max-h-[80vh] w-full select-none object-contain transition-transform duration-300" id="lightboxImg" src=""/>
<button className="absolute right-2 top-2 inline-flex items-center justify-center rounded-full border border-white/20 bg-black/50 p-2 text-white/80 hover:bg-white/10" id="zoomToggle">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 15l6 6"></path>
<circle cx="10" cy="10" r="7"></circle>
<path d="M7 10h6M10 7v6"></path>
</svg>
</button>
<button className="absolute left-2 top-2 inline-flex items-center justify-center rounded-full border border-white/20 bg-black/50 p-2 text-white/80 hover:bg-white/10" id="closeLightbox">

<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<section className="relative" id="customiser">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
<div className="">
<h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-white">Artwork Customiser</h2>
<p className="mt-2 text-sm sm:text-base text-white/60">Select a frame and thickness. See live updates and add to cart.</p>
</div>
<div className="text-right">
<p className="text-sm text-white/50">Edition of 50 • Archival pigment</p>
<p className="mt-1 text-xl font-semibold tracking-tight text-white" id="price">$1,200</p>
</div>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

<div className="sm:p-6 bg-gradient-to-b from-white/[0.03] to-transparent border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="relative mx-auto aspect-[4/3] w-full max-w-[720px] overflow-hidden rounded-xl bg-[#0f1416] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">

<div className="absolute inset-0 flex items-center justify-center p-6 sm:p-10 transition-[padding] duration-300" id="frameContainer" style={{padding: '18px'}}>
<div className="relative h-full w-full rounded-lg" id="frameBorder" style={{boxShadow: 'rgb(0, 0, 0) 0px 0px 0px 2px inset, rgba(0, 0, 0, 0.35) 0px 8px 24px', border: '6px solid rgb(22, 22, 22)', borderRadius: '12px', background: 'transparent'}}>
<img alt="Customisable artwork" className="pointer-events-none h-full w-full select-none rounded-[6px] object-cover" id="artPreview" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
<p className="mt-3 text-center text-xs text-white/50">Tip: Click image to toggle zoom when in gallery; customiser shows true frame proportions.</p>
</div>

<div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-6">

<div>
<div className="mb-3 flex items-center justify-between">
<h3 className="font-serif text-lg tracking-tight text-white">Frame</h3>
<span className="text-sm text-white/60" id="frameName">Slim Black</span>
</div>
<div className="relative grid grid-cols-4 gap-3 sm:grid-cols-6" id="frameCarousel">

<button className="group relative rounded-lg border border-white/10 bg-black/60 p-2 ring-2 ring-[#C8A24E]/60" data-frame="black" data-name="Slim Black">
<div className="aspect-square w-full rounded-md bg-[#111] outline outline-4 outline-[#161616] shadow-[inset_0_0_0_2px_#000,0_6px_16px_rgba(0,0,0,0.5)]"></div>
<span className="mt-2 block text-center text-xs text-white/70">Black</span>
</button>

<button className="group relative rounded-lg border border-white/10 bg-black/40 p-2 hover:ring-2 hover:ring-[#C8A24E]/60 transition" data-frame="gold" data-name="Ornate Gold">
<div className="aspect-square w-full rounded-md bg-[#1a1307] outline outline-4 outline-[#C8A24E] shadow-[inset_0_0_0_2px_#C8A24E,0_6px_16px_rgba(200,162,78,0.4)]"></div>
<span className="mt-2 block text-center text-xs text-white/70">Gold</span>
</button>

<button className="group relative rounded-lg border border-white/10 bg-black/40 p-2 hover:ring-2 hover:ring-[#C8A24E]/60 transition" data-frame="white" data-name="Modern White">
<div className="aspect-square w-full rounded-md bg-white outline outline-4 outline-white/80 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.9),0_6px_16px_rgba(0,0,0,0.25)]"></div>
<span className="mt-2 block text-center text-xs text-white/70">White</span>
</button>

<button className="group relative rounded-lg border border-white/10 bg-black/40 p-2 hover:ring-2 hover:ring-[#C8A24E]/60 transition" data-frame="walnut" data-name="Walnut Wood">
<div className="aspect-square w-full rounded-md bg-[#4a2f23] outline outline-4 outline-[#5a3a2c] shadow-[inset_0_0_0_2px_#6b4634,0_6px_16px_rgba(0,0,0,0.35)]"></div>
<span className="mt-2 block text-center text-xs text-white/70">Walnut</span>
</button>

<button className="group relative rounded-lg border border-white/10 bg-black/60 p-2 hover:ring-2 hover:ring-[#C8A24E]/60 transition" data-frame="black" data-name="Slim Black">
<div className="aspect-square w-full rounded-md bg-[#111] outline outline-4 outline-[#161616] shadow-[inset_0_0_0_2px_#000,0_6px_16px_rgba(0,0,0,0.5)]"></div>
<span className="mt-2 block text-center text-xs text-white/70">Black</span>
</button>
<button className="group relative rounded-lg border border-white/10 bg-black/40 p-2 hover:ring-2 hover:ring-[#C8A24E]/60 transition" data-frame="gold" data-name="Ornate Gold">
<div className="aspect-square w-full rounded-md bg-[#1a1307] outline outline-4 outline-[#C8A24E] shadow-[inset_0_0_0_2px_#C8A24E,0_6px_16px_rgba(200,162,78,0.4)]"></div>
<span className="mt-2 block text-center text-xs text-white/70">Gold</span>
</button>
</div>
</div>

<div className="">
<div className="mb-3 flex items-center justify-between">
<h3 className="font-serif text-lg tracking-tight text-white">Thickness</h3>
<span className="text-sm text-white/60" id="thicknessVal">6 mm</span>
</div>
<div className="relative rounded-full border border-white/10 bg-white/5 px-4 py-5">
<div className="pointer-events-none absolute left-4 right-4 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-white/10"></div>
<input className="relative z-10 w-full appearance-none bg-transparent" id="thickness" max="32" min="2" style={{background: 'linear-gradient(to right, rgb(200, 162, 78) 13.3333%, rgba(255, 255, 255, 0) 13.3333%)'}} type="range" value="6"/>
<div className="pointer-events-none absolute left-4 right-4 top-1/2 -translate-y-1/2"></div>
</div>
<p className="mt-2 text-xs text-white/50">Slim for contemporary minimalism or thicker for a statement presence.</p>
</div>

<div className="mt-2 flex flex-wrap items-center gap-3">
<button className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#C8A24E] bg-[#C8A24E]/10 px-5 py-3 text-sm font-medium text-[#C8A24E] hover:bg-[#C8A24E]/20 hover:shadow-[0_10px_30px_rgba(200,162,78,0.25)] transition" id="addToCart">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
                Add to Cart
              </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 hover:bg-white/10 transition" id="saveConfig">

<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
</svg>
                Save Configuration
              </button>
</div>

<div className="mt-4 grid grid-cols-2 gap-4 rounded-xl border border-white/10 bg-black/30 p-4">
<div>
<p className="text-xs uppercase tracking-wide text-white/40">Frame</p>
<p className="mt-1 text-sm text-white/80" id="summaryFrame">Slim Black</p>
</div>
<div>
<p className="text-xs uppercase tracking-wide text-white/40">Thickness</p>
<p className="mt-1 text-sm text-white/80" id="summaryThickness">6 mm</p>
</div>
<div className="col-span-2">
<p className="text-xs uppercase tracking-wide text-white/40">Estimated Total</p>
<p className="mt-1 text-lg font-semibold tracking-tight" id="summaryPrice">$1,200</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#f5efe6] text-[#0b0e0f]" id="shows">
<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
<div className="mb-8">
<h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight">Upcoming Shows</h2>
<p className="mt-2 text-sm sm:text-base text-[#0b0e0f]/70">Join us for openings across the Eastern Suburbs.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
<article className="group overflow-hidden rounded-2xl border border-[#C8A24E]/40 bg-white shadow-[0_10px_25px_rgba(11,14,15,0.08)]">
<div className="relative">
<img alt="Exhibition image" className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
<div className="p-5">
<div className="mb-3 flex items-center gap-4 text-sm text-[#0b0e0f]/70">
<span className="inline-flex items-center gap-1.5">
<svg className="h-4 w-4 text-[#C8A24E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
                  12 Oct 2025
                </span>
<span className="inline-flex items-center gap-1.5">
<svg className="h-4 w-4 text-[#C8A24E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7Z"></path>
<circle cx="12" cy="9" r="2"></circle>
</svg>
                  Paddington
                </span>
</div>
<h3 className="font-serif text-xl tracking-tight">Thresholds: New Works</h3>
<a className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#C8A24E] bg-[#C8A24E]/10 px-4 py-2 text-sm text-[#0b0e0f] hover:bg-[#C8A24E]/20" href="#" style={{color: '#0b0e0f'}}>
                More Details
                <svg className="h-4 w-4 text-[#0b0e0f]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</article>
<article className="group overflow-hidden rounded-2xl border border-[#C8A24E]/40 bg-white shadow-[0_10px_25px_rgba(11,14,15,0.08)]">
<div className="relative">
<img alt="Exhibition image" className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
<div className="p-5">
<div className="mb-3 flex items-center gap-4 text-sm text-[#0b0e0f]/70">
<span className="inline-flex items-center gap-1.5">
<svg className="h-4 w-4 text-[#C8A24E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
                  02 Nov 2025
                </span>
<span className="inline-flex items-center gap-1.5">
<svg className="h-4 w-4 text-[#C8A24E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7Z"></path>
<circle cx="12" cy="9" r="2"></circle>
</svg>
                  Bondi
                </span>
</div>
<h3 className="font-serif text-xl tracking-tight">Coastal Forms</h3>
<a className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#C8A24E] bg-[#C8A24E]/10 px-4 py-2 text-sm text-[#0b0e0f] hover:bg-[#C8A24E]/20" href="#" style={{color: '#0b0e0f'}}>
                More Details
                <svg className="h-4 w-4 text-[#0b0e0f]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</article>
<article className="group overflow-hidden rounded-2xl border border-[#C8A24E]/40 bg-white shadow-[0_10px_25px_rgba(11,14,15,0.08)]">
<div className="relative">
<img alt="Exhibition image" className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
<div className="p-5">
<div className="mb-3 flex items-center gap-4 text-sm text-[#0b0e0f]/70">
<span className="inline-flex items-center gap-1.5">
<svg className="h-4 w-4 text-[#C8A24E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M16 2v4M8 2v4M3 10h18"></path>
</svg>
                  20 Dec 2025
                </span>
<span className="inline-flex items-center gap-1.5">
<svg className="h-4 w-4 text-[#C8A24E]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C8 2 5 5 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-4-3-7-7-7Z"></path>
<circle cx="12" cy="9" r="2"></circle>
</svg>
                  Double Bay
                </span>
</div>
<h3 className="font-serif text-xl tracking-tight">Nocturne</h3>
<a className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#C8A24E] bg-[#C8A24E]/10 px-4 py-2 text-sm text-[#0b0e0f] hover:bg-[#C8A24E]/20" href="#" style={{color: '#0b0e0f'}}>
                More Details
                <svg className="h-4 w-4 text-[#0b0e0f]" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</article>
</div>
</div>
</section>

<section className="relative bg-[#f9f8f5] text-[#0b0e0f]" id="about">
<div className="max-w-4xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="mb-8 text-center">
<h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight">About Eastern Suburbs Art Group</h2>
<p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-[#0b0e0f]/70">A collective of artists and curators fostering a vibrant art culture across the Eastern Suburbs. We champion thoughtful curation, ethical practices, and accessible collecting with best-in-class presentation.</p>
</div>
<div className="overflow-hidden rounded-2xl border border-[#0b0e0f]/10 bg-white">
<img alt="Studio monochrome" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="relative bg-[#0a0d0e]" id="footer">
<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
<div>
<div className="inline-flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0b0e0f] font-semibold tracking-tight">ES</div>
<p className="text-sm text-white/60">Eastern Suburbs Art Group</p>
</div>
<p className="mt-3 max-w-sm text-sm text-white/60">Luxurious, minimalist gallery experiences and collectable works.</p>
</div>
<div className="sm:col-span-2 flex items-center justify-between sm:justify-end gap-6">
<nav className="hidden sm:flex items-center gap-6 text-sm text-white/70">
<a className="hover:text-white" href="#artists">Artists</a>
<a className="hover:text-white" href="#gallery">Gallery</a>
<a className="hover:text-white" href="#customiser">Customiser</a>
<a className="hover:text-white" href="#shows">Shows</a>
<a className="hover:text-white" href="#about">About</a>
</nav>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A24E]/40 text-[#C8A24E] hover:bg-[#C8A24E]/10 transition" href="#">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="4" width="18" x="3" y="3"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<path d="M17.5 6.5h.01"></path>
</svg>
</a>
<a aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A24E]/40 text-[#C8A24E] hover:bg-[#C8A24E]/10 transition" href="#">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4l16 16M20 4 4 20"></path>
</svg>
</a>
<a aria-label="Facebook" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#C8A24E]/40 text-[#C8A24E] hover:bg-[#C8A24E]/10 transition" href="#">

<svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="mt-10 h-px w-full bg-white/10"></div>
<div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
<p className="text-xs text-white/50">© <span id="year">2025</span> Eastern Suburbs Art Group. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-white/50">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
<a className="hover:text-white" href="#">Contact</a>
</div>
</div>
</div>
</footer>


<style>
      /* Inline style tag is avoided per instruction; styling is done via inline and utility classes. */
    </style>

    </>
  );
}
