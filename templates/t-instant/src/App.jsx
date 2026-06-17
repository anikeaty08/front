import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// ── Typing animation ──────────────────────────────────────────────
const messages = [
  "🇨🇭 Fabrication suisse — Livraison rapide partout en Europe",
  "✅ Produit breveté et testé par l'EPFL",
  "🔧 Montage sans soudure — 7 diamètres disponibles"
];
let msgIndex = 0, charIndex = 0, isDeleting = false;
const el = document.getElementById('typingText');
function type() {
  const msg = messages[msgIndex];
  el.textContent = isDeleting ? msg.substring(0, charIndex--) : msg.substring(0, charIndex++);
  if (!isDeleting && charIndex === msg.length + 1) { setTimeout(() => isDeleting = true, 2000); }
  else if (isDeleting && charIndex === 0) { isDeleting = false; msgIndex = (msgIndex + 1) % messages.length; }
  setTimeout(type, isDeleting ? 40 : 60);
}
type();

// ── Scroll indicator ──────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('scrollIndicator').style.width = pct + '%';
});

// ── Thumbnail gallery with arrow navigation ───────────────────────
const thumbSrcs = [
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17db51a3-31c2-49df-97a4-8fbec543c804_320w.png",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81c1f0ea-851d-4a63-b718-022e49bc3a52_1600w.png",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17db51a3-31c2-49df-97a4-8fbec543c804_320w.png",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81c1f0ea-851d-4a63-b718-022e49bc3a52_1600w.png",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17db51a3-31c2-49df-97a4-8fbec543c804_320w.png",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81c1f0ea-851d-4a63-b718-022e49bc3a52_1600w.png",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17db51a3-31c2-49df-97a4-8fbec543c804_320w.png",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg",
  "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81c1f0ea-851d-4a63-b718-022e49bc3a52_1600w.png"
];

const THUMB_SIZE = 80;   // px width of each thumb
const THUMB_GAP  = 8;    // px gap between thumbs
const STEP       = THUMB_SIZE + THUMB_GAP;

const track    = document.getElementById('thumbTrack');
const prevBtn  = document.getElementById('thumbPrev');
const nextBtn  = document.getElementById('thumbNext');
const mainImg  = document.getElementById('mainProductImage');

let activeIndex  = 0;
let offsetIndex  = 0;   // how many thumbs we've scrolled past

// Build thumbs
thumbSrcs.forEach((src, i) => {
  const btn = document.createElement('button');
  btn.className = 'gallery-thumb flex-shrink-0' + (i === 0 ? ' active' : '');
  btn.style.width  = THUMB_SIZE + 'px';
  btn.style.height = THUMB_SIZE + 'px';
  btn.dataset.index = i;
  const img = document.createElement('img');
  img.src = src;
  img.alt = 'Vue ' + (i + 1);
  img.className = 'w-full h-full object-cover';
  btn.appendChild(img);
  btn.addEventListener('click', () => selectThumb(i));
  track.appendChild(btn);
});

function selectThumb(i) {
  document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
  track.children[i].classList.add('active');
  activeIndex = i;
  mainImg.src = thumbSrcs[i];
}

function getVisibleCount() {
  // measure available width of the track container
  const containerW = track.parentElement.offsetWidth;
  return Math.floor((containerW + THUMB_GAP) / STEP);
}

function updateArrows() {
  const visible = getVisibleCount();
  prevBtn.disabled = offsetIndex <= 0;
  nextBtn.disabled = offsetIndex >= thumbSrcs.length - visible;
}

function slide(dir) {
  const visible = getVisibleCount();
  const maxOffset = thumbSrcs.length - visible;
  offsetIndex = Math.max(0, Math.min(maxOffset, offsetIndex + dir));
  track.style.transform = `translateX(-${offsetIndex * STEP}px)`;
  updateArrows();
}

prevBtn.addEventListener('click', () => slide(-1));
nextBtn.addEventListener('click', () => slide(1));

// Init arrow state
updateArrows();
window.addEventListener('resize', updateArrows);

// ── Dimension data ────────────────────────────────────────────────
const dimData = {
  '3/8':   { sorties: ['F. 3/8" (17mm)'] },
  '1/2':   { sorties: ['F. 3/8" (17mm)'] },
  '3/4':   { sorties: ['F. 1/2" (21mm)'] },
  '1':     { sorties: ['F. 1/2" (21mm)', 'M. 3/4" (27mm)'] },
  '1_1/4': { sorties: ['F. 1/2" (21mm)', 'M. 3/4" (27mm)'] },
  '1_1/2': { sorties: ['F. 1/2" (21mm)', 'M. 3/4" (27mm)'] },
  '2':     { sorties: ['F. 1/2" (21mm)', 'F. 3/4" (27mm)', 'M. 1" (33mm)'] }
};

function updateDimPanel(dim) {
  const data = dimData[dim];
  const container = document.getElementById('sortiesContainer');
  container.innerHTML = '';
  data.sorties.forEach(s => {
    const tag = document.createElement('span');
    tag.className = 'compat-tag';
    tag.innerHTML = `<iconify-icon icon="solar:pipe-linear" width="13" height="13" style="stroke-width:1.5"></iconify-icon>${s}`;
    container.appendChild(tag);
  });
  if (window.Iconify) Iconify.scan(container);
  const panel = document.getElementById('dimDetailPanel');
  panel.classList.remove('dim-detail-panel');
  void panel.offsetWidth;
  panel.classList.add('dim-detail-panel');
}

updateDimPanel('3/8');

document.getElementById('dimPills').addEventListener('click', e => {
  const btn = e.target.closest('.dim-pill');
  if (!btn) return;
  document.querySelectorAll('.dim-pill').forEach(p => p.classList.remove('selected'));
  btn.classList.add('selected');
  updateDimPanel(btn.dataset.dim);
});

// ── Add to cart ───────────────────────────────────────────────────
document.getElementById('addToCartBtn').addEventListener('click', () => {
  const count = document.getElementById('cartCount');
  count.classList.add('cart-bounce');
  count.textContent = parseInt(count.textContent) + 1;
  setTimeout(() => count.classList.remove('cart-bounce'), 500);

  const notif = document.createElement('div');
  notif.className = 'notification-enter bg-white border border-neutral-200 rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 text-sm font-medium min-w-[240px]';
  notif.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="18" height="18" class="text-green-500" style="stroke-width:1.5"></iconify-icon>Ajouté au panier`;
  document.getElementById('notificationContainer').appendChild(notif);
  setTimeout(() => { notif.classList.add('notification-exit'); setTimeout(() => notif.remove(), 300); }, 2500);
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div className="scroll-indicator" id="scrollIndicator" style={{width: '100%'}}></div>
<div className="fixed top-4 right-4 z-50 space-y-2" id="notificationContainer"></div>

<div className="w-full bg-neutral-900 text-white overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
<p className="text-[13px] sm:text-sm font-medium tracking-tight font-sans typing-animation" id="typingText"></p>
</div>
</div>

<header className="bg-white border-neutral-200 border-b sticky top-0 z-40 backdrop-blur-sm bg-white/95">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
<div className="flex-1"></div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-md hover:bg-neutral-100 transition-all duration-200 hover:scale-110 ripple" id="accountBtn">
<iconify-icon height="20" icon="solar:user-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="relative hover:bg-neutral-100 transition-all duration-200 hover:scale-110 ripple rounded-md p-2">
<iconify-icon height="20" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<span className="absolute -top-2 -right-2 bg-neutral-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center" id="cartCount">2</span>
</button>
</div>
</div>
<div className="border-t border-neutral-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2">
<nav className="flex items-center gap-2 text-sm text-neutral-600">
<span className="font-medium text-neutral-900 font-sans"></span>
</nav>
</div>
</div>
</header>

<main className="fade-in">

<section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="slide-up">
<div className="flex items-center gap-4 mb-6">
<div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{background: '#D52B1E'}}>
<svg height="40" viewbox="0 0 32 32" width="40" xmlns="http://www.w3.org/2000/svg">
<rect fill="white" height="20" width="6" x="13" y="6"></rect>
<rect fill="white" height="6" width="20" x="6" y="13"></rect>
</svg>
</div>
<div>
<h1 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{fontFamily: '\'Geist\', sans-serif'}}>
<span style={{color: '#D52B1E'}}>T</span>-Instant
                </h1>
<p className="text-neutral-300 text-lg mt-1" style={{fontFamily: '\'Geist\', sans-serif'}}>Fabrication Suisse · Breveté · Testé EPFL</p>
</div>
</div>
<p className="text-xl text-neutral-200 leading-relaxed mb-4" style={{fontFamily: '\'Geist\', sans-serif'}}>
              Collier de raccordement INSTANT-T – Fabrication Suisse, Breveté
            </p>
<p className="text-base text-neutral-300 leading-relaxed mb-5" style={{fontFamily: '\'Geist\', sans-serif'}}>
              Système unique de raccordement pour eau sanitaire, chauffage, air comprimé et plus encore. Fabriqué en Suisse et breveté, l'INSTANT-T permet une dérivation rapide et fiable sans soudure ni outillage spécial.
            </p>
<div className="bg-white/10 rounded-xl p-5 mb-8 border border-white/20">
<h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide" style={{fontFamily: '\'Geist\', sans-serif'}}>Caractéristiques techniques</h3>
<ul className="space-y-2 text-sm text-neutral-200" style={{fontFamily: '\'Geist\', sans-serif'}}>
<li className="flex items-center gap-2">
<iconify-icon className="text-white/70 flex-shrink-0" height="16" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Pression de service : <span className="text-white font-medium">50 bar</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white/70 flex-shrink-0" height="16" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Température max : <span className="text-white font-medium">100°C</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white/70 flex-shrink-0" height="16" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Compatible : <span className="text-white font-medium">acier, cuivre, plastique</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white/70 flex-shrink-0" height="16" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Disponible en <span className="text-white font-medium">7 diamètres × 12 versions</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-white/70 flex-shrink-0" height="16" icon="solar:check-square-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Corps en <span className="text-white font-medium">alliage Zamak5</span> · Joint néoprène renforcé
                </li>
</ul>
</div>
<div className="flex flex-wrap gap-4">
<button className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-all duration-300 hover:scale-105" style={{fontFamily: '\'Geist\', sans-serif'}}>
                Voir les produits
                <iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 hover:scale-105" style={{fontFamily: '\'Geist\', sans-serif'}}>
<iconify-icon height="20" icon="solar:document-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                Fiche technique
              </button>
</div>
</div>
<div className="relative slide-up" style={{animationDelay: '0.2s'}}>
<div className="aspect-square bg-gradient-to-br from-neutral-800 to-neutral-700 rounded-3xl p-8 hover:scale-105 transition-transform duration-500">
<img alt="T-Instant produit vedette" className="w-full h-full object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg"/>
</div>
<div className="absolute top-4 left-4 flex flex-col gap-2">
<span className="inline-flex items-center gap-1.5 bg-white/95 text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
<iconify-icon className="text-green-600" height="14" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                Breveté
              </span>
<span className="inline-flex items-center gap-1.5 bg-white/95 text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
<iconify-icon className="text-blue-600" height="14" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                Testé EPFL
              </span>
<span className="inline-flex items-center gap-1.5 bg-white/95 text-neutral-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
<iconify-icon className="text-amber-500" height="14" icon="solar:star-linear" style={{strokeWidth: '1.5'}} width="14"></iconify-icon>
                Swiss Made
              </span>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-neutral-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
<div className="flex items-center justify-center gap-2 text-sm text-neutral-700">
<iconify-icon className="text-green-600" height="18" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-medium">Produit Suisse breveté</span>
</div>
<div className="flex items-center justify-center gap-2 text-sm text-neutral-700">
<iconify-icon className="text-blue-600" height="18" icon="solar:test-tube-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-medium">Testé par l'EPFL</span>
</div>
<div className="flex items-center justify-center gap-2 text-sm text-neutral-700 col-span-2 sm:col-span-1">
<iconify-icon className="text-orange-500" height="18" icon="solar:fire-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="font-medium">Jusqu'à 100°C / 50 bar</span>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

<div className="fade-in">
<div className="aspect-square bg-neutral-100 rounded-2xl mb-4 overflow-hidden">
<img alt="T-Instant collier de raccordement" className="product-zoom w-full h-full object-cover" id="mainProductImage" onmouseout="this.style.filter='contrast(1.08) brightness(1.06) saturate(1.15) drop-shadow(0 8px 24px rgba(0,0,0,0.13))'" onmouseover="this.style.filter='contrast(1.12) brightness(1.09) saturate(1.2) drop-shadow(0 12px 32px rgba(0,0,0,0.18))'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81c1f0ea-851d-4a63-b718-022e49bc3a52_1600w.png" style={{objectFit: 'cover', objectPosition: 'center center', filter: 'contrast(1.08) brightness(1.06) saturate(1.15) drop-shadow(rgba(0, 0, 0, 0.13) 0px 8px 24px)', transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), filter 0.4s'}}/>
</div>

<div className="relative flex items-center gap-2">

<button aria-label="Précédent" className="flex-shrink-0 w-8 h-8 rounded-lg border border-neutral-200 bg-white flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed" disabled="" id="thumbPrev">
<iconify-icon height="16" icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>

<div className="flex-1 overflow-hidden">
<div className="flex gap-2 transition-transform duration-300 ease-in-out" id="thumbTrack">

<button className="gallery-thumb flex-shrink-0 active" data-index="0" style={{width: '80px', height: '80px'}}><img alt="Vue 1" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17db51a3-31c2-49df-97a4-8fbec543c804_320w.png"/></button><button className="gallery-thumb flex-shrink-0" data-index="1" style={{width: '80px', height: '80px'}}><img alt="Vue 2" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg"/></button><button className="gallery-thumb flex-shrink-0" data-index="2" style={{width: '80px', height: '80px'}}><img alt="Vue 3" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81c1f0ea-851d-4a63-b718-022e49bc3a52_1600w.png"/></button><button className="gallery-thumb flex-shrink-0" data-index="3" style={{width: '80px', height: '80px'}}><img alt="Vue 4" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17db51a3-31c2-49df-97a4-8fbec543c804_320w.png"/></button><button className="gallery-thumb flex-shrink-0" data-index="4" style={{width: '80px', height: '80px'}}><img alt="Vue 5" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg"/></button><button className="gallery-thumb flex-shrink-0" data-index="5" style={{width: '80px', height: '80px'}}><img alt="Vue 6" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81c1f0ea-851d-4a63-b718-022e49bc3a52_1600w.png"/></button><button className="gallery-thumb flex-shrink-0" data-index="6" style={{width: '80px', height: '80px'}}><img alt="Vue 7" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17db51a3-31c2-49df-97a4-8fbec543c804_320w.png"/></button><button className="gallery-thumb flex-shrink-0" data-index="7" style={{width: '80px', height: '80px'}}><img alt="Vue 8" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg"/></button><button className="gallery-thumb flex-shrink-0" data-index="8" style={{width: '80px', height: '80px'}}><img alt="Vue 9" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81c1f0ea-851d-4a63-b718-022e49bc3a52_1600w.png"/></button><button className="gallery-thumb flex-shrink-0" data-index="9" style={{width: '80px', height: '80px'}}><img alt="Vue 10" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17db51a3-31c2-49df-97a4-8fbec543c804_320w.png"/></button><button className="gallery-thumb flex-shrink-0" data-index="10" style={{width: '80px', height: '80px'}}><img alt="Vue 11" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fdbbeb3-36ec-475f-8227-1bc9b7fa96a2_800w.jpg"/></button><button className="gallery-thumb flex-shrink-0" data-index="11" style={{width: '80px', height: '80px'}}><img alt="Vue 12" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81c1f0ea-851d-4a63-b718-022e49bc3a52_1600w.png"/></button></div>
</div>

<button aria-label="Suivant" className="flex-shrink-0 w-8 h-8 rounded-lg border border-neutral-200 bg-white flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed" id="thumbNext">
<iconify-icon height="16" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</div>
</div>

<div className="fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center rounded-md bg-green-100 text-green-800 text-sm px-2.5 py-1 font-medium">En stock</span>
<span className="inline-flex items-center rounded-md bg-blue-100 text-blue-800 text-sm px-2.5 py-1 font-medium">Swiss Made</span>
<span className="inline-flex items-center rounded-md bg-amber-100 text-amber-800 text-sm px-2.5 py-1 font-medium">Breveté</span>
</div>
<h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-2" style={{fontFamily: '\'Geist\', sans-serif'}}>
            Collier <span style={{color: '#D52B1E'}}>T</span>-Instant
          </h1>
<p className="text-neutral-500 text-base mb-4" style={{fontFamily: '\'Geist\', sans-serif'}}>Collier de raccordement instantané — dérivation sans soudure</p>
<div className="flex items-baseline gap-4 mb-8">
<span className="text-3xl font-bold text-neutral-900" style={{fontFamily: '\'Geist\', sans-serif'}}>À partir de CHF 43.–</span>
</div>

<div className="mb-2">
<p className="text-sm font-semibold text-neutral-900 mb-3" style={{fontFamily: '\'Geist\', sans-serif'}}>
              Sélectionnez le diamètre du tuyau
            </p>
<div className="flex flex-wrap gap-2 mb-6" id="dimPills">
<button className="dim-pill selected" data-dim="3/8">3/8" — 17 mm</button>
<button className="dim-pill" data-dim="1/2">1/2" — 21 mm</button>
<button className="dim-pill" data-dim="3/4">3/4" — 27 mm</button>
<button className="dim-pill" data-dim="1">1" — 33 mm</button>
<button className="dim-pill" data-dim="1_1/4">1"¼ — 42 mm</button>
<button className="dim-pill" data-dim="1_1/2">1"½ — 48 mm</button>
<button className="dim-pill" data-dim="2">2" — 60 mm</button>
</div>

<div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 space-y-5 dim-detail-panel" id="dimDetailPanel">
<div>
<p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2.5">Sorties disponibles</p>
<div className="flex flex-wrap gap-2" id="sortiesContainer"><span className="compat-tag"><iconify-icon height="13" icon="solar:pipe-linear" style={{strokeWidth: '1.5'}} width="13"></iconify-icon>F. 3/8" (17mm)</span></div>
</div>
<div className="border-t border-neutral-200"></div>
<div>
<p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2.5">Matériaux &amp; construction</p>
<ul className="space-y-1.5 text-sm text-neutral-600 font-sans">
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" height="15" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
                    Corps : <strong className="text-neutral-900 ml-1">Alliage de zinc Zamak5</strong>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" height="15" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
                    Joint : <strong className="text-neutral-900 ml-1">Néoprène renforcé</strong> — parfaite étanchéité
                  </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5 flex-shrink-0" height="15" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
                    Fixation : <strong className="text-neutral-900 ml-1">2 vis imbus M8</strong> en acier inoxydable
                  </li>
</ul>
</div>
<div className="border-t border-neutral-200"></div>
<div>
<p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2.5">Applications</p>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl p-3">
<div className="flex flex-shrink-0 w-7 h-7 rounded-lg items-center justify-center" style={{background: 'linear-gradient(135deg, #dbeafe 0%, #fee2e2 100%)', border: '1px solid #e5e7eb'}}>
<svg fill="none" height="15" stroke="url(#waterGrad)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="waterGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#2563eb', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#dc2626', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
</svg>
</div>
<div>
<p className="text-xs font-semibold text-neutral-900 font-sans">Eau sanitaire</p>
<p className="text-xs text-neutral-400 font-sans">Froide &amp; chaude</p>
</div>
</div>
<div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl p-3">
<div className="w-7 h-7 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-neutral-600" height="15" icon="solar:temperature-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-neutral-900 font-sans">Chauffage</p>
<p className="text-xs text-neutral-400 font-sans">Radiateurs &amp; planchers</p>
</div>
</div>
<div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl p-3">
<div className="w-7 h-7 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-neutral-600" height="15" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-neutral-900 font-sans">Incendie</p>
<p className="text-xs text-neutral-400 font-sans">Sprinklers &amp; réseaux</p>
</div>
</div>
<div className="flex items-center gap-2 bg-white border border-neutral-200 rounded-xl p-3">
<div className="w-7 h-7 bg-neutral-100 rounded-lg flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-neutral-600" height="15" icon="solar:cloud-linear" style={{strokeWidth: '1.5'}} width="15"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-neutral-900 font-sans">Air comprimé</p>
<p className="text-xs text-neutral-400 font-sans">Réseaux industriels</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-neutral-800 transition-all duration-300 hover:scale-[1.02] ripple" id="addToCartBtn" style={{fontFamily: '\'Geist\', sans-serif'}}>
<iconify-icon height="20" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
              Ajouter au panier
            </button>
<button className="inline-flex items-center justify-center gap-2 border border-neutral-200 px-5 py-3.5 rounded-xl font-medium hover:bg-neutral-50 transition-all duration-300 ripple" style={{fontFamily: '\'Geist\', sans-serif'}}>
<iconify-icon height="20" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
              Favoris
            </button>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
