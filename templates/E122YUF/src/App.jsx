import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Init icons
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Swatch data (pastel)
      const pastelSets = [
        ['#FECACA','#FDE68A','#A7F3D0','#BAE6FD','#E9D5FF'],
        ['#FBCFE8','#FDE68A','#BBF7D0','#BFDBFE','#DDD6FE'],
        ['#FED7AA','#FECACA','#FDE68A','#C7D2FE','#A7F3D0'],
        ['#FFE4E6','#FEF3C7','#D1FAE5','#E0E7FF','#E9D5FF'],
        ['#FDE2E4','#FAD2E1','#E2ECE9','#DEE2FF','#CDE5FD'],
        ['#FFD6E0','#FAF2A1','#CFF5E7','#D6E5FA','#EAD6F5']
      ];

      const swatchWrap = document.getElementById('swatchWrap');
      const canvasCard = document.getElementById('canvasCard');
      const accentBtn = document.getElementById('accentBtn');
      const shufflePalette = document.getElementById('shufflePalette');

      let activeSet = 0;
      let selectedAccent = pastelSets[0][0];

      function renderSwatches(setIndex=0) {
        swatchWrap.innerHTML = '';
        pastelSets[setIndex].forEach((hex, i) => {
          const btn = document.createElement('button');
          btn.className = 'group aspect-square rounded-md border border-slate-200 hover:ring-2 hover:ring-slate-300 transition-all';
          btn.style.background = hex;
          btn.title = hex;
          btn.addEventListener('click', () => {
            selectedAccent = hex;
            accentBtn.style.borderColor = hex;
            accentBtn.style.color = '#0f172a';
            canvasCard.style.boxShadow = `0 10px 30px -12px ${hex}80`;
            canvasCard.style.borderColor = hex;
          });
          swatchWrap.appendChild(btn);
          if (i === 0) {
            // set initial accent
            selectedAccent = hex;
            accentBtn.style.borderColor = hex;
            canvasCard.style.boxShadow = `0 10px 30px -12px ${hex}80`;
            canvasCard.style.borderColor = hex;
          }
        });
      }
      renderSwatches(activeSet);

      shufflePalette.addEventListener('click', () => {
        activeSet = (activeSet + 1) % pastelSets.length;
        renderSwatches(activeSet);
      });

      // Soft mode toggle
      const softToggle = document.getElementById('softToggle');
      const softKnob = document.getElementById('softKnob');
      let softOn = false;
      softToggle.addEventListener('click', () => {
        softOn = !softOn;
        if (softOn) {
          softToggle.classList.remove('bg-slate-100','border-slate-300');
          softToggle.classList.add('bg-emerald-200/60','border-emerald-300');
          softKnob.style.transform = 'translateX(22px)';
          canvasCard.style.filter = 'blur(0.0px)';
          canvasCard.style.background = 'rgba(255,255,255,0.86)';
        } else {
          softToggle.classList.remove('bg-emerald-200/60','border-emerald-300');
          softToggle.classList.add('bg-slate-100','border-slate-300');
          softKnob.style.transform = 'translateX(4px)';
          canvasCard.style.filter = 'blur(0px)';
          canvasCard.style.background = '';
        }
      });

      // Gallery palettes
      const galleryPalettes = document.getElementById('galleryPalettes');
      const applyGalleryPalette = document.getElementById('applyGalleryPalette');
      let gallerySelected = 0;

      function renderGallery() {
        galleryPalettes.innerHTML = '';
        pastelSets.forEach((set, idx) => {
          const tile = document.createElement('button');
          tile.className = 'group rounded-xl border border-slate-200 bg-white p-2 hover:border-slate-300 transition-colors text-left';
          tile.setAttribute('data-index', idx);
          const row = document.createElement('div');
          row.className = 'flex items-center gap-2';
          set.forEach(hex => {
            const sw = document.createElement('span');
            sw.className = 'h-8 w-8 rounded-md border border-white ring-1 ring-slate-200';
            sw.style.background = hex;
            row.appendChild(sw);
          });
          const label = document.createElement('div');
          label.className = 'mt-2 text-xs text-slate-600';
          label.textContent = `Set #${idx+1}`;
          tile.appendChild(row);
          tile.appendChild(label);
          tile.addEventListener('click', () => {
            gallerySelected = idx;
            Array.from(galleryPalettes.children).forEach(c => c.classList.remove('ring-2','ring-slate-300'));
            tile.classList.add('ring-2','ring-slate-300');
          });
          galleryPalettes.appendChild(tile);
          if (idx === 0) {
            tile.classList.add('ring-2','ring-slate-300');
          }
        });
      }
      renderGallery();

      applyGalleryPalette.addEventListener('click', () => {
        activeSet = gallerySelected;
        renderSwatches(activeSet);
      });

      // Carousel controls
      const track = document.getElementById('carouselTrack');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const prevBtnM = document.getElementById('prevBtnM');
      const nextBtnM = document.getElementById('nextBtnM');

      function cardWidth() {
        // Use first child width plus gap for consistent step
        const first = track.children[0];
        const gap = parseInt(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '16');
        return first.getBoundingClientRect().width + gap;
      }

      function step(dir = 1) {
        track.scrollBy({ left: dir * cardWidth(), behavior: 'smooth' });
      }

      [prevBtn, prevBtnM].forEach(btn => btn && btn.addEventListener('click', () => step(-1)));
      [nextBtn, nextBtnM].forEach(btn => btn && btn.addEventListener('click', () => step(1)));

      // New canvas button interaction
      document.getElementById('newCanvasBtn').addEventListener('click', () => {
        const hex = selectedAccent || '#A7F3D0';
        canvasCard.style.borderColor = hex;
        canvasCard.style.boxShadow = `0 12px 40px -16px ${hex}90`;
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center text-sm tracking-tighter">PD</div>
<div className="hidden sm:flex items-center gap-6">
<button className="text-sm text-slate-700 hover:text-slate-900 transition-colors">Templates</button>
<button className="text-sm text-slate-700 hover:text-slate-900 transition-colors">Components</button>
<button className="text-sm text-slate-900">Examples</button>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 rounded-lg border border-slate-200 bg-white pl-2 pr-3 py-1.5 shadow-sm hover:shadow transition-shadow">
<i className="h-4 w-4 text-slate-400" data-lucide="search"></i>
<input className="outline-none text-sm placeholder:text-slate-400 w-56" placeholder="Search colors, templates..."/>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:border-slate-300 hover:bg-slate-50 transition-colors">
<i className="h-4 w-4" data-lucide="plus"></i>
            New
          </button>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10 opacity-70">
<div className="absolute -top-20 -left-16 h-56 w-56 rounded-full bg-rose-200 blur-3xl"></div>
<div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-sky-200 blur-3xl"></div>
<div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-emerald-200 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="space-y-4">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
              Create serene, pastel-perfect designs
            </h1>
<p className="text-slate-600 text-base sm:text-lg">
              Explore curated examples, build palettes, and compose elegant layouts with soft, tactile UI.
            </p>
<div className="flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 sm:px-5 py-2.5 text-sm sm:text-base hover:bg-slate-800 shadow-sm hover:shadow transition-all" id="newCanvasBtn">
<i className="h-4 w-4" data-lucide="paintbrush"></i>
                New canvas
              </button>
<a className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 sm:px-5 py-2.5 text-sm sm:text-base hover:bg-slate-50 hover:border-slate-400 transition-all" href="#examples">
<i className="h-4 w-4" data-lucide="images"></i>
                Browse examples
              </a>
</div>
<div className="flex items-center gap-4 pt-2">
<div className="flex -space-x-3">
<img alt="" className="h-8 w-8 rounded-full border border-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full border border-white" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-8 w-8 rounded-full border border-white" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=160&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-sm text-slate-600">4.9/5 by designers</span>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-3 sm:p-4 shadow-sm">
<div className="flex items-center justify-between px-2 pb-3">
<div className="flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-rose-300"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-300"></span>
<span className="h-2.5 w-2.5 rounded-full bg-emerald-300"></span>
</div>
<div className="flex items-center gap-2">
<button className="h-8 w-8 grid place-items-center rounded-lg hover:bg-slate-100"><i className="h-4 w-4" data-lucide="undo-2"></i></button>
<button className="h-8 w-8 grid place-items-center rounded-lg hover:bg-slate-100"><i className="h-4 w-4" data-lucide="redo-2"></i></button>
<button className="h-8 w-8 grid place-items-center rounded-lg hover:bg-slate-100"><i className="h-4 w-4" data-lucide="settings-2"></i></button>
</div>
</div>
<div className="grid sm:grid-cols-5 gap-4">

<div className="sm:col-span-1">
<div className="rounded-xl border border-slate-200 bg-white p-2 sm:p-3">
<div className="grid grid-cols-4 sm:grid-cols-1 gap-2">
<button className="group h-10 w-full rounded-lg border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center transition-colors" title="Select">
<i className="h-4 w-4 text-slate-600 group-hover:text-slate-900" data-lucide="mouse-pointer-2"></i>
</button>
<button className="group h-10 w-full rounded-lg border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center transition-colors" title="Shapes">
<i className="h-4 w-4 text-slate-600 group-hover:text-slate-900" data-lucide="square"></i>
</button>
<button className="group h-10 w-full rounded-lg border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center transition-colors" title="Text">
<i className="h-4 w-4 text-slate-600 group-hover:text-slate-900" data-lucide="type"></i>
</button>
<button className="group h-10 w-full rounded-lg border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center transition-colors" title="Layers">
<i className="h-4 w-4 text-slate-600 group-hover:text-slate-900" data-lucide="layers"></i>
</button>
</div>
</div>
<div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-700">Soft mode</span>

<button className="relative inline-flex h-6 w-11 items-center rounded-full border border-slate-300 bg-slate-100 transition-all outline-none ring-0" id="softToggle">
<span className="sr-only">Toggle soft mode</span>
<span className="inline-block h-4 w-4 translate-x-1 rounded-full bg-white shadow border border-slate-300 transition-transform" id="softKnob"></span>
</button>
</div>
</div>
</div>

<div className="sm:col-span-3">
<div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" id="canvasCard">
<div className="absolute inset-0 pointer-events-none rounded-2xl"></div>
<div className="h-56 rounded-xl bg-gradient-to-br from-rose-100 via-amber-100 to-sky-100 border border-slate-200 flex items-center justify-center">
<div className="text-center">
<p className="text-sm text-slate-600">Artboard</p>
<p className="text-2xl font-semibold tracking-tight text-slate-900">Pastel Poster</p>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<button className="rounded-lg border border-slate-200 bg-white py-2 text-sm hover:bg-slate-50">Align</button>
<button className="rounded-lg border border-slate-200 bg-white py-2 text-sm hover:bg-slate-50" id="accentBtn">Accent</button>
<button className="rounded-lg border border-slate-200 bg-white py-2 text-sm hover:bg-slate-50">Export</button>
</div>
</div>
</div>

<div className="sm:col-span-1">
<div className="rounded-xl border border-slate-200 bg-white p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-sm text-slate-700">Palette</span>
<button className="h-8 w-8 grid place-items-center rounded-lg border border-slate-200 hover:bg-slate-50" id="shufflePalette">
<i className="h-4 w-4" data-lucide="shuffle"></i>
</button>
</div>
<div className="grid grid-cols-5 gap-2" id="swatchWrap">

</div>
</div>
<div className="mt-3 rounded-xl border border-slate-200 bg-white p-3">
<p className="text-xs text-slate-500">Tip: Click a swatch to set the accent on your canvas.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14" id="examples">
<div className="flex items-end justify-between mb-4 sm:mb-6">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Examples</h2>
<p className="text-slate-600 text-sm sm:text-base">Swipe through pastel templates and layouts.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="h-9 w-9 grid place-items-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50" id="prevBtn">
<i className="h-5 w-5" data-lucide="chevron-left"></i>
</button>
<button className="h-9 w-9 grid place-items-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50" id="nextBtn">
<i className="h-5 w-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
<div className="relative">
<div className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4" id="carouselTrack">

<article className="snap-center shrink-0 w-[88%] xs:w-[80%] sm:w-[420px] md:w-[520px] rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
<div className="h-48 sm:h-60 bg-gradient-to-br from-rose-100 via-violet-100 to-sky-100 relative">
<img alt="" className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-70" src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 border border-slate-200">
<span className="h-2 w-2 rounded-full bg-rose-300"></span>
<span className="text-xs text-slate-700">Poster</span>
</div>
</div>
<div className="p-4 sm:p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Soft Spring Poster</h3>
<p className="text-sm text-slate-600 mt-1">A clean hero with pastel gradients and gentle type.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1.5">
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#FECACA'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#FDE68A'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#A7F3D0'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#BFDBFE'}}></span>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50">Use</button>
</div>
</div>
</article>

<article className="snap-center shrink-0 w-[88%] xs:w-[80%] sm:w-[420px] md:w-[520px] rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
<div className="h-48 sm:h-60 bg-gradient-to-br from-emerald-100 via-sky-100 to-indigo-100 relative">
<img alt="" className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-70" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 border border-slate-200">
<span className="h-2 w-2 rounded-full bg-emerald-300"></span>
<span className="text-xs text-slate-700">Landing</span>
</div>
</div>
<div className="p-4 sm:p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Calm Product Teaser</h3>
<p className="text-sm text-slate-600 mt-1">Minimal layout with soft cards, ideal for launches.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1.5">
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#A7F3D0'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#BAE6FD'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#E9D5FF'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#FDE68A'}}></span>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50">Use</button>
</div>
</div>
</article>

<article className="snap-center shrink-0 w-[88%] xs:w-[80%] sm:w-[420px] md:w-[520px] rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
<div className="h-48 sm:h-60 bg-gradient-to-br from-fuchsia-100 via-rose-100 to-amber-100 relative">
<img alt="" className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-70" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 border border-slate-200">
<span className="h-2 w-2 rounded-full bg-fuchsia-300"></span>
<span className="text-xs text-slate-700">Brand Kit</span>
</div>
</div>
<div className="p-4 sm:p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Pastel Identity Pack</h3>
<p className="text-sm text-slate-600 mt-1">Logo grid, color tokens, and type scales included.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1.5">
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#FBCFE8'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#FECACA'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#FDE68A'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#A5B4FC'}}></span>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50">Use</button>
</div>
</div>
</article>

<article className="snap-center shrink-0 w-[88%] xs:w-[80%] sm:w-[420px] md:w-[520px] rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
<div className="h-48 sm:h-60 bg-gradient-to-br from-sky-100 via-indigo-100 to-violet-100 relative">
<img alt="" className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-70" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 border border-slate-200">
<span className="h-2 w-2 rounded-full bg-sky-300"></span>
<span className="text-xs text-slate-700">Dashboard</span>
</div>
</div>
<div className="p-4 sm:p-5">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Gentle Analytics</h3>
<p className="text-sm text-slate-600 mt-1">Soft cards and calm contrast for metrics.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex -space-x-1.5">
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#BAE6FD'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#E9D5FF'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#DDD6FE'}}></span>
<span className="h-5 w-5 rounded ring-2 ring-white" style={{background: '#C7D2FE'}}></span>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm hover:bg-slate-50">Use</button>
</div>
</div>
</article>
</div>

<div className="mt-3 flex sm:hidden items-center justify-center gap-2">
<button className="h-9 w-9 grid place-items-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50" id="prevBtnM">
<i className="h-5 w-5" data-lucide="chevron-left"></i>
</button>
<button className="h-9 w-9 grid place-items-center rounded-lg border border-slate-200 bg-white hover:bg-slate-50" id="nextBtnM">
<i className="h-5 w-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
<div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-6">
<div className="flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900">Curated pastel palettes</h3>
<p className="text-sm text-slate-600">Tap to apply as your working set.</p>
</div>
<button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50" id="applyGalleryPalette">
<i className="h-4 w-4" data-lucide="palette"></i>
            Apply
          </button>
</div>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3" id="galleryPalettes">

</div>
</div>
</section>
<footer className="border-t border-slate-200/70">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-sm text-slate-500">© 2025 Pastel Design Studio</p>
<div className="flex items-center gap-4">
<a className="text-sm text-slate-600 hover:text-slate-900" href="#">Docs</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#">Changelog</a>
<a className="text-sm text-slate-600 hover:text-slate-900" href="#">Support</a>
</div>
</div>
</footer>


    </>
  );
}
