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
      
{
"@context": "https://schema.org",
"@type": "HairSalon",
"name": "Barbershop BASRI",
"image": "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f888c22f-5792-46b3-939f-4e3a5d37a532_1600w.png",
"url": "https://barbershopbasri.com/",
"telephone": "+359896068010",
"email": "basribarbershop25@gmail.com",
"priceRange": "лв лв",
"aggregateRating": {
"@type": "AggregateRating",
"ratingValue": "4.9",
"reviewCount": "153"
},
"location": [
{
"@type": "HairSalon",
"name": "Barbershop BASRI – Тракия",
"telephone": "+359896068010",
"address": {
"@type": "PostalAddress",
"streetAddress": "ул. Шипка 27",
"addressLocality": "Пловдив",
"postalCode": "4023",
"addressCountry": "BG"
},
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
"opens": "09:00",
"closes": "19:00"
},
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Sunday"],
"opens": "09:00",
"closes": "17:00"
}
]
},
{
"@type": "HairSalon",
"name": "Barbershop BASRI – Център",
"telephone": "+359895244330",
"address": {
"@type": "PostalAddress",
"streetAddress": "бул. Пещерско шосе 19",
"addressLocality": "Пловдив",
"postalCode": "4002",
"addressCountry": "BG"
}
}
]
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  /* FB Dropdowns */
  const fbDropdowns = [
    { button: 'fb-dropdown-header', menu: 'fb-dropdown-menu-header' }
  ];
  fbDropdowns.forEach(({ button, menu }) => {
    const btn = document.getElementById(button);
    const dropdown = document.getElementById(menu);
    if (btn && dropdown) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('hidden');
      });
    }
  });
  document.addEventListener('click', () => {
    fbDropdowns.forEach(({ menu }) => {
      const dropdown = document.getElementById(menu);
      if (dropdown && !dropdown.classList.contains('hidden')) dropdown.classList.add('hidden');
    });
  });

  /* Splash screen */
  (function() {
    const splash = document.getElementById('splash');
    const logo   = document.getElementById('splashLogo');
    if (!splash || !logo) return;
    const stop = (e) => { e.preventDefault(); e.stopPropagation(); };
    ['click','pointerdown','pointerup','touchstart','touchend','keydown','wheel'].forEach(evt => splash.addEventListener(evt, stop, { passive: false }));
    const body = document.body, docEl = document.documentElement;
    const scrollY = window.scrollY || 0;
    docEl.classList.add('overflow-hidden'); body.style.overflow = 'hidden';
    const HOLD_MS = 900, SLIDE_MS = 1200, EXTRA_MS = 120;
    function unlock() { body.style.overflow = ''; docEl.classList.remove('overflow-hidden'); window.scrollTo(0, scrollY); }
    function run() {
      setTimeout(() => splash.classList.add('slide-up'), HOLD_MS);
      setTimeout(() => { splash.remove(); unlock(); }, HOLD_MS + SLIDE_MS + EXTRA_MS);
    }
    if (logo.complete && logo.naturalWidth > 0) run();
    else { logo.addEventListener('load', run, { once: true }); logo.addEventListener('error', () => { splash.remove(); unlock(); }, { once: true }); }
  })();

  /* Reviews carousel */
  (function() {
    const data = [
      { name: 'Асен Пейчев',          stars: '★★★★★', text: '„Много приятно отношение. Всеки път излизам доволен."' },
      { name: 'Константин Костадинов', stars: '★★★★★', text: '„Хигиена и качество. Клиент съм от години — винаги на ниво."' },
      { name: 'Бранимир Бояджиев',    stars: '★★★★★', text: '„Страхотен екип. 3 години клиент — без изненади, само резултат."' },
      { name: 'Величка Спасова',      stars: '★★★★★', text: '„Професионалисти. Коректно отношение и отлична услуга."' },
      { name: 'Али Мустафа',          stars: '★★★★★', text: '„Много съм доволен — майсторска работа и топ обслужване."' },
    ];
    const stage = document.getElementById('reviews-stage');
    if (!stage) return;
    const prev = document.getElementById('reviews-prev'), next = document.getElementById('reviews-next');
    const prevM = document.getElementById('reviews-prev-m'), nextM = document.getElementById('reviews-next-m');
    const indicator = document.getElementById('reviews-indicator'), totalEl = document.getElementById('reviews-total');
    let start = 0;
    function perView() { return window.matchMedia('(min-width: 768px)').matches ? 3 : 1; }
    function clampStart() { const pv = perView(), max = Math.max(0, data.length - pv); if (start < 0) start = 0; if (start > max) start = max; }
    function cardHTML(item) {
      return `<article class="rounded-2xl border border-white/10 bg-black/20 p-6"><div class="flex items-center justify-between gap-4"><p class="text-white font-semibold">${item.name}</p><p class="text-[#c5aa65] text-sm tracking-tight">${item.stars}</p></div><p class="text-sm text-white/70 mt-3 leading-relaxed">${item.text}</p></article>`;
    }
    function setButtons() {
      const pv = perView(), max = Math.max(0, data.length - pv), atStart = start === 0, atEnd = start === max;
      [prev, prevM].forEach(btn => { if (!btn) return; btn.disabled = atStart; btn.classList.toggle('opacity-40', atStart); btn.classList.toggle('pointer-events-none', atStart); });
      [next, nextM].forEach(btn => { if (!btn) return; btn.disabled = atEnd; btn.classList.toggle('opacity-40', atEnd); btn.classList.toggle('pointer-events-none', atEnd); });
      if (indicator) indicator.textContent = String(start + 1);
      if (totalEl) totalEl.textContent = String(data.length);
    }
    function render() {
      clampStart();
      const pv = perView();
      stage.className = 'grid gap-6 ' + (pv === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1');
      stage.innerHTML = data.slice(start, start + pv).map(cardHTML).join('');
      setButtons();
    }
    function go(d) { start += d; render(); }
    function bind(btn, d) { if (btn) btn.addEventListener('click', () => go(d)); }
    bind(prev, -1); bind(next, 1); bind(prevM, -1); bind(nextM, 1);
    window.addEventListener('resize', render, { passive: true });
    render();
  })();
  


    (function() {
      const el = document.getElementById('footer-year');
      if (el) el.textContent = new Date().getFullYear();
    })();

    /* FIX #1: Legal modal functions renamed — no longer conflicts with booking modal */
    function openLegalModal(id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove('hidden');
    }
    function closeLegalModal(id) {
      const el = document.getElementById(id);
      if (el) el.classList.add('hidden');
    }
  


  (function() {
    const banner = document.getElementById('cookie-banner');
    const dismiss = document.getElementById('cookie-dismiss');
    try {
      if (!localStorage.getItem('cookieConsent')) banner.classList.remove('hidden');
    } catch(e) {
      banner.classList.remove('hidden');
    }
    dismiss.addEventListener('click', () => {
      try { localStorage.setItem('cookieConsent', '1'); } catch(e) {}
      banner.classList.add('hidden');
    });
  })();




/* =========================
   SetMore Booking Links
   TODO: Paste your SetMore URLs below when ready.
   Once added, all "Запази час" buttons will open the booking page directly.
========================= */
const FRESHA_LINKS = {
salon1: 'https://www.fresha.com/a/barbershop-basri-plovdiv-filibe-ulitsa-shipka-27-js8945yy?pId=2841083',
salon2: 'https://www.fresha.com/a/barbershop-basri-2-plovdiv-filibe-bulevard-peshtersko-shose-19-ccl45jb4?pId=2841083',
};


/* =========================
   Locations data
   FIX: mapLink now points to Google Business Profile
========================= */
const locations = {
  salon1: {
    name:      'Салон 1 – Тракия',
    shortName: 'Тракия',
    address:   'ул. „Шипка" 27, 4023 Пловдив (Капитан Бураго)',
    phone:     '089 606 8010',
    phoneClean:'0896068010',
    mapLink:   'https://share.google/hk0y3U46fvyuWF5uR',
    reviews:   '153+',
  },
  salon2: {
    name:      'Салон 2 – Център',
    shortName: 'Център',
    address:   'бул. „Пещерско шосе" 19, 4002 Пловдив (Център)',
    phone:     '089 524 4330',
    phoneClean:'0895244330',
    mapLink:   'https://share.google/wNrKbO1DqQ7OiD76J',
    reviews:   '52+',
  },
};
window.locations = locations;

let currentLocId = null;

/* =========================
   Phone helpers
========================= */
function formatBulgarianPhoneForDisplay(clean) {
  if (!clean || clean.length !== 10) return clean || '';
  return clean.slice(0,3) + ' ' + clean.slice(3,6) + ' ' + clean.slice(6);
}

function phoneToE164_BG(clean) {
  if (!clean) return '';
  clean = String(clean).replace(/\D/g, '');
  if (clean.startsWith('0')) clean = clean.slice(1);
  return '+359' + clean;
}

function getActiveLocationId() {
  return currentLocId || null;
}

/* FIX #2: applyPhoneToLink now preserves <a> elements and updates their href */
function applyPhoneToLink(element, locId) {
  const data = locations[locId];
  if (!data) return element;
  const display = data.phone || formatBulgarianPhoneForDisplay(data.phoneClean);
  const e164    = phoneToE164_BG(data.phoneClean);
  element.textContent = display;
  return element;
}

function syncAllPhoneLinks() {
  document.querySelectorAll('[data-call]').forEach((el) => {
    const mode = el.getAttribute('data-call');
    if (mode === 'salon1' || mode === 'salon2') {
      applyPhoneToLink(el, mode);
      return;
    }
    if (mode === 'current') {
      const activeId = getActiveLocationId();
      if (!activeId) return;
      applyPhoneToLink(el, activeId);
    }
  });
}
window.syncAllPhoneLinks = syncAllPhoneLinks;
window.addEventListener('DOMContentLoaded', syncAllPhoneLinks);

/* =========================
   Icons
========================= */
function refreshIcons() {
  try {
    if (window.lucide && typeof window.lucide.createIcons === 'function') window.lucide.createIcons();
  } catch (_) {}
}
document.addEventListener('DOMContentLoaded', refreshIcons);

/* =========================
   Scroll lock
========================= */
let savedScrollPosition = 0;
function lockScroll(lock) {
  if (lock) {
    savedScrollPosition = window.scrollY || 0;
    document.documentElement.classList.add('overflow-hidden');
    document.body.classList.add('overflow-hidden');
    document.body.style.position = 'fixed';
    document.body.style.top  = `-${savedScrollPosition}px`;
    document.body.style.left = '0'; document.body.style.right = '0'; document.body.style.width = '100%';
  } else {
    document.body.style.position = ''; document.body.style.top = '';
    document.body.style.left = ''; document.body.style.right = ''; document.body.style.width = '';
    document.body.classList.remove('overflow-hidden');
    document.documentElement.classList.remove('overflow-hidden');
    const docEl = document.documentElement;
    const prev  = docEl.style.scrollBehavior;
    docEl.style.scrollBehavior = 'auto';
    window.scrollTo(0, savedScrollPosition);
    requestAnimationFrame(() => { docEl.style.scrollBehavior = prev; });
  }
}
window.lockScroll = lockScroll;

/* =========================
   Scroll helpers
========================= */
function getHeaderOffset() {
  const header = document.querySelector('header');
  return header ? header.offsetHeight : 96;
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset();
  window.scrollTo({ top: y, behavior: 'smooth' });
}
window.scrollToId = scrollToId;

function scrollToLocation() {
  scrollToId('locations');
  const loc = document.getElementById('locations');
  if (!loc) return;
  setTimeout(() => { loc.classList.add('bg-white/5'); setTimeout(() => loc.classList.remove('bg-white/5'), 280); }, 420);
}
window.scrollToLocation = scrollToLocation;

/* =========================
   Mobile menu
========================= */
function isMobileMenuOpen() {
  const menu = document.getElementById('mobile-menu');
  return !!menu && !menu.classList.contains('translate-x-full');
}

let menuScrollPosition = 0;
function toggleMobileMenu(open) {
  const menu = document.getElementById('mobile-menu');
  if (!menu) return;
  const closed    = menu.classList.contains('translate-x-full');
  const shouldOpen = typeof open === 'boolean' ? open : closed;

  if (shouldOpen) {
    menuScrollPosition = window.scrollY || 0;
    document.body.style.position = 'fixed';
    document.body.style.top  = `-${menuScrollPosition}px`;
    document.body.style.left = '0'; document.body.style.right = '0'; document.body.style.width = '100%';
    document.documentElement.style.overflow = 'hidden';
    menu.classList.remove('translate-x-full', 'pointer-events-none');
    menu.setAttribute('aria-hidden', 'false');
    refreshIcons();
  } else {
    menu.classList.add('translate-x-full');
    menu.setAttribute('aria-hidden', 'true');
    window.setTimeout(() => {
      menu.classList.add('pointer-events-none');
      document.body.style.position = ''; document.body.style.top = '';
      document.body.style.left = ''; document.body.style.right = ''; document.body.style.width = '';
      document.documentElement.style.overflow = '';
      const docEl = document.documentElement, prev = docEl.style.scrollBehavior;
      docEl.style.scrollBehavior = 'auto';
      window.scrollTo(0, menuScrollPosition);
      requestAnimationFrame(() => { docEl.style.scrollBehavior = prev; });
    }, 320);
  }
}
window.toggleMobileMenu = toggleMobileMenu;

/* =========================
   Navigation
========================= */
function navigateToSection(eOrHash, maybeHash) {
  let e = null, hash = null;
  if (typeof eOrHash === 'string') hash = eOrHash;
  else { e = eOrHash || null; hash = maybeHash; }
  if (e && typeof e.preventDefault === 'function') e.preventDefault();
  if (isMobileMenuOpen()) toggleMobileMenu(false);
  window.setTimeout(() => {
    if (!hash || !hash.startsWith('#')) return;
    const id = hash.slice(1);
    if (!id) return;
    scrollToId(id);
  }, isMobileMenuOpen() ? 360 : 0);
}
window.navigateToSection = navigateToSection;

document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link) return;
  const href = link.getAttribute('href') || '';
  if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http://') || href.startsWith('https://')) return;
  if (href.startsWith('#')) {
    const id = href.slice(1);
    if (!id) { e.preventDefault(); return; }
    if (id.startsWith('booking_')) return;
    e.preventDefault();
    if (link.closest('#mobile-menu')) {
      e.stopPropagation();
      toggleMobileMenu(false);
      window.setTimeout(() => scrollToId(id), 360);
    } else {
      scrollToId(id);
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && isMobileMenuOpen()) toggleMobileMenu(false);
});

/* =========================
   Location selection
========================= */
function selectLocation(id) {
  currentLocId = id;
  window.currentLocId = currentLocId;
  const data = locations[id];
  if (!data) return;

  /* Card highlight */
  ['card-salon1','card-salon2'].forEach(cid => {
    const card = document.getElementById(cid);
    if (!card) return;
    card.classList.remove('border-accent');
    card.classList.add('border-white/5');
  });
  const active = document.getElementById(`card-${id}`);
  if (active) { active.classList.remove('border-white/5'); active.classList.add('border-accent'); }

  /* Sync mobile select */
  const mobileSelect = document.getElementById('mobile-location');
  if (mobileSelect) mobileSelect.value = id;

  /* Show details panel */
  const detailsPanel = document.getElementById('location-details');
  if (detailsPanel) detailsPanel.classList.remove('hidden');

  const t = document.getElementById('detail-title');
  const a = document.getElementById('detail-address');
  const g = document.getElementById('detail-gmaps-link');

  if (t) t.textContent = data.name;
  if (a) a.textContent = data.address;
  if (g) g.href = data.mapLink;

  /* Mobile: scroll to details */
  if (window.innerWidth < 768 && detailsPanel) setTimeout(() => scrollToId('location-details'), 0);

  requestAnimationFrame(() => {
    syncAllPhoneLinks();
    refreshIcons();
  });

document.getElementById('img-salon1').classList.add('hidden');
document.getElementById('img-salon2').classList.add('hidden');
document.getElementById('img-' + id).classList.remove('hidden');

}
window.selectLocation = selectLocation;

/* =========================
   FIX #13: handleMainCta — no modal.
   Opens SetMore when configured, otherwise scrolls to contact (phone visible).
========================= */
function handleMainCta() {
  const link = currentLocId && SETMORE_LINKS[currentLocId];
  if (link) {
    window.open(link, '_blank', 'noopener,noreferrer');
    return;
  }
  if (!currentLocId) {
    /* No location selected — scroll to location cards with visual hint */
    scrollToId('locations');
    setTimeout(() => {
      ['card-salon1','card-salon2'].forEach(id => {
        const card = document.getElementById(id);
        if (!card) return;
        card.style.transition = 'box-shadow 0.35s ease';
        card.style.boxShadow  = '0 0 0 2px rgba(197,170,101,0.5)';
        setTimeout(() => { card.style.boxShadow = ''; }, 850);
      });
    }, 450);
  } else {
    /* Location selected but SetMore not yet configured — scroll to contact/phone */
    scrollToId('contact');
  }
}
window.handleMainCta = handleMainCta;

/* =========================
   Bind all booking CTAs
========================= */
function bindBookingCtas() {
  document.querySelectorAll('[data-booking-cta]').forEach((el) => {
    const newEl = el.cloneNode(true);
    el.parentNode.replaceChild(newEl, el);
    newEl.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      handleMainCta();
    });
  });
}

/* =========================
   Mobile menu helpers
========================= */
window.handleLocationChange = function(value) {
  if (!value) return;
  toggleMobileMenu(false);
  window.setTimeout(() => {
    const link = SETMORE_LINKS[value];
    if (link) window.open(link, '_blank', 'noopener,noreferrer');
    else scrollToId('locations');
  }, 360);
};
window.handleBookingClick = function() {
  toggleMobileMenu(false);
  window.setTimeout(() => handleMainCta(), 360);
};

/* =========================
   Team section
========================= */
function updateTeamSection() {
  const t1 = document.getElementById('team-salon1');
  const t2 = document.getElementById('team-salon2');
  const subtitle = document.getElementById('team-subtitle');
  if (!t1 || !t2) return;
  t1.classList.add('hidden'); t2.classList.add('hidden');
  if (!currentLocId) {
    if (subtitle) subtitle.textContent = 'Избери локация, за да видиш екипа.';
    return;
  }
  if (currentLocId === 'salon1') {
    t1.classList.remove('hidden');
    if (subtitle) subtitle.textContent = 'Екип – Тракия (4 бръснари)';
  } else if (currentLocId === 'salon2') {
    t2.classList.remove('hidden');
    if (subtitle) subtitle.textContent = 'Екип – Център (собственик + 2 бръснари)';
  }
}

/* =========================
   Services section
REMOVED
========================= */


/* =========================
   Navigate from mobile menu
========================= */
function navigateFromMenu(sectionId) {
  toggleMobileMenu(false);
  setTimeout(() => scrollToId(sectionId), 360);
}
window.navigateFromMenu = navigateFromMenu;

/* =========================
   DOMContentLoaded init
========================= */
window.addEventListener('DOMContentLoaded', () => {
  refreshIcons();
  bindBookingCtas();
  syncAllPhoneLinks();

  /* Global scroll reveal */
(function initGlobalScrollReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -4% 0px' });

    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.closest('#mobile-menu') || el.closest('#gallery-lightbox')) return;
      io.observe(el);
    });
  })();

  /* Gallery: show more + lightbox */
  (function initGallery() {
    const grid        = document.getElementById('gallery-grid');
    const moreBtn     = document.getElementById('gallery-more');
    const collapseBtn = document.getElementById('gallery-collapse');
    const lightbox    = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('gallery-lightbox-img');
    if (!grid || !moreBtn || !collapseBtn || !lightbox || !lightboxImg) return;

    function showExtra() {
      grid.querySelectorAll('.gallery-extra').forEach(el => el.classList.remove('hidden'));
      moreBtn.classList.add('hidden');
      collapseBtn.classList.remove('hidden');
    }

    function hideExtra() {
      grid.querySelectorAll('.gallery-extra').forEach(el => el.classList.add('hidden'));
      collapseBtn.classList.add('hidden');
      moreBtn.classList.remove('hidden');
      document.getElementById('gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    moreBtn.addEventListener('click', (e) => { e.preventDefault(); showExtra(); });
    collapseBtn.addEventListener('click', (e) => { e.preventDefault(); hideExtra(); });

    grid.addEventListener('click', (e) => {
      const item = e.target.closest('.gallery-item');
      if (!item) return;
      const full = item.getAttribute('data-full');
      const img  = item.querySelector('img');
      lightboxImg.src = full || (img ? img.src : '');
      lightbox.classList.remove('hidden');
      lockScroll(true);
    });

    lightbox.addEventListener('click', (e) => {
      if (!e.target.closest('[data-close]')) return;
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
      lockScroll(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key !== 'Escape' || lightbox.classList.contains('hidden')) return;
      lightbox.classList.add('hidden');
      lightboxImg.src = '';
      lockScroll(false);
    });
  })();
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
      

<header className="fixed z-[80] bg-[#151515]/80 w-full border-white/5 border-b top-0 backdrop-blur-md">
<div className="md:px-8 md:h-24 flex md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-10 lg:gap-x-16 reveal h-20 max-w-7xl mx-auto px-4 items-center justify-between is-in">

<div className="flex min-w-0 items-center gap-3 text-white md:justify-start">

<a aria-label="Към началото" className="md:hidden text-sm font-semibold uppercase tracking-widest text-white font-geist" href="#hero" onclick="navigateToSection(event,'#hero')">
        Barbershop BASRI<span className="text-[#c5aa65] font-geist">.</span>
</a>

<nav className="hidden md:flex flex-nowrap whitespace-nowrap uppercase lg:gap-x-5 text-xs font-medium text-white/80 tracking-tighter gap-x-5 items-center">
<a className="whitespace-nowrap transition-colors hover:text-[#c5aa65] font-geist" href="#locations">Локации</a>
<a className="whitespace-nowrap transition-colors hover:text-[#c5aa65] font-geist" href="#services">Услуги</a>
<a className="whitespace-nowrap transition-colors hover:text-[#c5aa65] font-geist" href="#gallery">Галерия</a>
<a className="whitespace-nowrap transition-colors hover:text-[#c5aa65] font-geist" href="#contact">Контакти</a>
</nav>
</div>

<div className="hidden md:flex justify-center">
<a aria-label="Към началото" className="" href="#hero">
<img alt="BASRI" className="select-none w-auto max-w-[340px] lg:max-w-[420px] xl:max-w-[520px] cursor-pointer h-20 object-contain drop-shadow-[0_14px_40px_rgba(0,0,0,0.85)]" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f888c22f-5792-46b3-939f-4e3a5d37a532_1600w.png"/>
</a>
</div>

<div className="flex gap-2 md:gap-4 items-center justify-end md:justify-end">

<div className="hidden md:flex gap-2 items-center relative">

<div className="relative" id="fb-dropdown-header-container">
<button aria-label="Facebook Basri" className="w-10 h-10 rounded-full border border-white/15 bg-black/20 flex items-center justify-center text-white/90 transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/40 hover:ring-inset" id="fb-dropdown-header">
<svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</button>
<div className="absolute hidden bg-black/90 border border-white/10 rounded-md mt-2 py-2 w-48 z-50 shadow-lg" id="fb-dropdown-menu-header">
<a className="block px-4 py-2 text-white hover:bg-[#c5aa65]/20 transition-colors text-sm font-geist" href="https://www.facebook.com/berber.basri" rel="noopener noreferrer" target="_blank">Berber Basri</a>
<a className="block px-4 py-2 text-white hover:bg-[#c5aa65]/20 transition-colors text-sm font-geist" href="https://www.facebook.com/p/Fenomen-Barber-Basri-100066342683508/" rel="noopener noreferrer" target="_blank">Fenomen Barber Basri</a>
</div>
</div>

<a aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/15 bg-black/20 flex items-center justify-center text-white/90 transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/40 hover:ring-inset" href="https://www.instagram.com/barbershop_basri/" rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>

<button className="hidden md:inline-flex uppercase transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/40 hover:ring-inset text-xs font-semibold text-white tracking-widest bg-black/20 border-white/20 border rounded-full px-5 py-2.5 items-center justify-center font-geist" data-booking-cta="">
        Запази час
      </button>

<button aria-label="Меню" className="md:hidden flex w-11 h-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/40 hover:ring-inset" onclick="toggleMobileMenu(true)" type="button">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path>
</svg>
</button>
</div>
</div>
</header>

<div aria-hidden="true" className="fixed inset-0 z-[90] md:hidden translate-x-full pointer-events-none transition-transform duration-300 bg-[#151515] text-white flex flex-col" id="mobile-menu">
<div className="h-20 px-6 flex items-center justify-between border-b border-white/10 bg-[#151515]/95 backdrop-blur-md flex-shrink-0">
<a aria-label="Към началото" className="text-sm font-semibold uppercase tracking-widest text-white font-geist" href="#hero" onclick="navigateToSection(event,'#hero')">
      Barbershop BASRI<span className="text-accent font-geist">.</span>
</a>
<button aria-label="Затвори" className="text-white/80 hover:text-accent transition-colors" onclick="toggleMobileMenu(false)" type="button">
<svg className="w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="flex-1 px-6 py-6 overflow-hidden">
<div className="max-w-[420px] mx-auto h-full flex flex-col text-center">

<div className="mb-4">
<p className="text-[11px] uppercase tracking-widest text-white/55 mb-2 font-geist">Избери локация</p>
<div className="relative">
<select className="w-full appearance-none rounded-full px-4 py-3 text-sm bg-black/25 border border-white/15 text-white/90" id="mobile-location" onchange="handleLocationChange(this.value)">
<option className="font-geist" selected="" value="">Локация</option>
<option className="font-geist" value="salon1">Тракия</option>
<option className="font-geist" value="salon2">Център</option>
</select>
<svg className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<nav className="flex-1 flex flex-col justify-center items-stretch text-center">
<button className="py-3 text-lg font-semibold rounded-xl hover:text-[#c5aa65] hover:bg-white/5 transition-all font-geist" onclick="navigateFromMenu('about')">За нас</button>
<div className="h-px bg-white/10"></div>
<button className="py-3 text-lg font-semibold rounded-xl hover:text-[#c5aa65] hover:bg-white/5 transition-all font-geist" onclick="navigateFromMenu('services')">Услуги</button>
<div className="h-px bg-white/10"></div>
<button className="py-3 text-lg font-semibold rounded-xl hover:text-[#c5aa65] hover:bg-white/5 transition-all font-geist" onclick="navigateFromMenu('team')">Екип</button>
<div className="h-px bg-white/10"></div>
<button className="py-3 text-lg font-semibold rounded-xl hover:text-[#c5aa65] hover:bg-white/5 transition-all font-geist" onclick="navigateFromMenu('gallery')">Галерия</button>
<div className="h-px bg-white/10"></div>
<button className="py-3 text-lg font-semibold rounded-xl hover:text-[#c5aa65] hover:bg-white/5 transition-all font-geist" onclick="navigateFromMenu('contact')">Контакти</button>
</nav>
<div className="my-4 h-px bg-white/10"></div>

<button className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-white/20 bg-black/20 text-white hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/40 hover:ring-inset transition-all duration-200 font-geist" onclick="handleBookingClick()" type="button">
        Запази час
      </button>
<div className="my-4 h-px bg-white/10"></div>

<div className="flex gap-3 mt-4 items-center justify-center flex-wrap">
<a aria-label="Facebook – Berber Basri" className="w-10 h-10 rounded-full border border-white/10 bg-black/20 flex items-center justify-center text-white/80 transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset" href="https://www.facebook.com/berber.basri" rel="noopener noreferrer" target="_blank">
<svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a aria-label="Facebook – Fenomen Barber Basri" className="w-10 h-10 rounded-full border border-white/10 bg-black/20 flex items-center justify-center text-white/80 transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset" href="https://www.facebook.com/p/Fenomen-Barber-Basri-100066342683508/" rel="noopener noreferrer" target="_blank">
<svg fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 bg-black/20 flex items-center justify-center text-white/80 transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset" href="https://www.instagram.com/barbershop_basri/" rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
<div className="mt-4 text-xs text-white/40 font-geist">BASRI • Пловдив</div>
</div>
</div>
</div>

<section className="relative h-[100dvh] md:h-screen pt-24 flex items-center justify-center overflow-hidden" id="hero">
<div className="absolute inset-0 z-0">
<img alt="Barbershop Atmosphere" className="w-full h-full object-cover scale-125 object-[center_12%]" decoding="async" draggable="false" fetchpriority="high" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d96b167-fbf8-4a07-b7d5-b2e669123f76_3840w.png"/>
<div className="absolute inset-0 bg-black/55"></div>
<div className="bg-gradient-to-t from-black/45 via-transparent to-black/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 md:px-8 -translate-y-6 sm:-translate-y-10 md:-translate-y-12 text-center w-full max-w-5xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="md:hidden flex justify-center mb-6">
<img alt="BASRI" className="select-none w-[74vw] h-auto max-w-[380px] object-contain drop-shadow-[0_18px_55px_rgba(0,0,0,0.85)]" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f888c22f-5792-46b3-939f-4e3a5d37a532_3840w.png"/>
</div>
<h1 className="leading-[1.08] text-white tracking-tight text-[clamp(1.35rem,5.2vw,3.75rem)] font-playfair font-medium">
      Тишина. <span className="text-accent font-playfair font-medium">Прецизност.</span> <span className="text-accent font-playfair font-medium">Резултат.</span>
</h1>
<p className="mt-4 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto font-light font-geist">
      Две локации в Пловдив. <span className="text-accent/90 font-geist">Професионално</span> бръснарство без компромис.
    </p>
<div className="flex mt-7 justify-center">
<button className="text-xs sm:text-sm font-semibold uppercase tracking-widest px-7 py-3 rounded-full border bg-black/20 text-white border-white/25 transition-colors duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] font-geist" data-booking-cta="">
        Запази час
      </button>
</div>
<div className="mt-5 text-xs text-white/65">
<a className="hover:text-accent transition-colors font-geist" href="#services">Услуги</a>
<span className="mx-2 text-white/25 select-none font-geist">•</span>
<a className="hover:text-accent transition-colors font-geist" href="#gallery">Галерия</a>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-[#121212] pt-20 pb-20 reveal" id="about">
<div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-14 md:mb-16 reveal">
<p className="text-[#c5aa65] uppercase tracking-[0.35em] text-xs md:text-sm mb-4 font-geist">Предимства</p>
<h2 className="text-4xl md:text-6xl tracking-tight text-white leading-tight font-playfair font-medium">Защо клиентите избират BASRI</h2>
<p className="mt-5 text-base md:text-lg text-white/60 font-geist">15+ години опит • 2 локации • 4.9★ от Google</p>
</div>
<div className="md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 reveal max-w-7xl mr-auto ml-auto pr-4 pl-4 gap-x-12 gap-y-12 items-start">
<div className="hidden order-1 text-center">
<h2 className="text-3xl tracking-tight text-white font-playfair font-medium">Защо клиентите избират BASRI</h2>
</div>
<div className="order-2 md:order-1">
<div className="w-full aspect-[4/5] rounded-2xl overflow-hidden relative ring-1 ring-white/10 reveal">
<img alt="Barber Tools" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" decoding="async" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c0c98bc-7e35-47cc-91e1-62dfe9e69183_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-black/10"></div>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
</div>
</div>
<div className="order-3 md:order-2">
<h2 className="hidden text-3xl md:text-4xl tracking-tight text-white mb-6 font-playfair font-medium">Защо клиентите избират BASRI</h2>
<ul className="text-light/90 space-y-5">
<li className="flex items-start gap-3">
<svg className="mt-0.5 w-6 h-6 shrink-0 text-[#c5aa65]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526">
</path>
<circle cx="12" cy="8" r="6"></circle>
</svg>
<div className="">
<p className="text-white font-semibold font-geist">Правим го както трябва от първия път</p>
<p className="md:hidden text-sm text-white/70 leading-relaxed mt-1 font-geist">Западно обучение. Резултатът личи
        веднага.</p>
<p className="hidden md:block text-sm text-white/70 leading-relaxed mt-1 font-geist">Обучени в Германия, Австрия и
        Швейцария—нашите бръснари разбират визията ти, дори когато не можеш да я обясниш с думи. Излизаш доволен, не
        „ами окей".</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 w-6 h-6 shrink-0 text-[#c5aa65]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6h4"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<div className="">
<p className="text-white font-semibold font-geist">Влизаш и излизаш без загуба на време</p>
<p className="md:hidden text-sm text-white/70 leading-relaxed mt-1 font-geist">Онлайн час. Точно време. Готов си.</p>
<p className="hidden md:block text-sm text-white/70 leading-relaxed mt-1 font-geist">Резервираш онлайн. Идваш навреме.
        Получаваш перфектна услуга. Продължаваш с деня си. Толкова просто.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 w-6 h-6 shrink-0 text-[#c5aa65]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a4 4 0 0 1-4 4H7l-4 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"></path>
</svg>
<div className="">
<p className="text-white font-semibold font-geist">Атмосфера без напрежение</p>
<p className="md:hidden text-sm text-white/70 leading-relaxed mt-1 font-geist">Разговор или тишина — ти избираш.</p>
<p className="hidden md:block text-sm text-white/70 leading-relaxed mt-1 font-geist">Нашият екип усеща какво ти
        трябва—съвет за стила, приятелски разговор или просто тишина и фокус. Ти задаваш тона.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 w-6 h-6 shrink-0 text-[#c5aa65]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m17 2 4 4-4 4"></path>
<path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
<path d="m7 22-4-4 4-4"></path>
<path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
</svg>
<div className="">
<p className="text-white font-semibold font-geist">Постоянство, на което разчиташ</p>
<p className="md:hidden text-sm text-white/70 leading-relaxed mt-1 font-geist">Всеки път — същото високо ниво.</p>
<p className="hidden md:block text-sm text-white/70 leading-relaxed mt-1 font-geist">Всяко посещение е като
        предишното—същата прецизност, същата грижа. Без лоши дни, без изненади. Знаеш какво получаваш.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 w-6 h-6 shrink-0 text-[#c5aa65]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<div className="">
<p className="text-white font-semibold font-geist">Хигиена без компромис</p>
<p className="md:hidden text-sm text-white/70 leading-relaxed mt-1 font-geist">Стерилно. Нови консумативи. Всеки път.
      </p>
<p className="hidden md:block text-sm text-white/70 leading-relaxed mt-1 font-geist">Стерилизация на всеки инструмент.
        Нови консумативи за всеки клиент. Защото здравето на кожата ти не е преговорно.</p>
</div>
</li>
<li className="flex items-start gap-3">
<svg className="mt-0.5 w-6 h-6 shrink-0 text-[#c5aa65]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
</path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<div className="">
<p className="text-white font-semibold font-geist">Две адреса, един стандарт</p>
<p className="md:hidden text-sm text-white/70 leading-relaxed mt-1 font-geist">Избери локация. Качеството е еднакво.
      </p>

<p className="hidden md:block text-sm text-white/70 leading-relaxed mt-1 font-geist">Избери по-удобната локация.
        Качеството е идентично навсякъде.</p>
</div>
</li>
</ul>
<div className="mt-10 flex justify-center md:justify-start">
<button className="sm:text-sm uppercase transition-colors duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] text-xs font-semibold text-white tracking-widest bg-black/20 border-white/25 border rounded-full pt-3 pr-7 pb-3 pl-7 font-geist" data-booking-cta="">
          Избери локация и резервирай
        </button>
</div>
</div>
</div>
</section>

<div className="bg-[#121212] pt-10 pb-10 relative">
<div className="max-w-7xl mx-auto px-4 md:px-8 reveal">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
</div>
</div>

<section className="scroll-mt-24 md:py-24 reveal bg-[#111111] border-white/10 border-b pt-20 pb-20" id="locations">
<div className="md:px-8 reveal max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12 md:mb-14">
<p className="text-[#c5aa65] font-bold uppercase tracking-[0.35em] text-[11px] md:text-xs font-geist">Локации</p>
<h2 className="mt-4 md:mt-5 text-white tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl font-playfair font-medium">
        Изберете Вашия салон</h2>
<p className="mt-4 md:mt-5 mx-auto max-w-[46rem] text-white/55 leading-relaxed text-base sm:text-lg md:text-xl font-geist">
        Изберете удобна локация и запазете час директно</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto reveal">

<a className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-[#c5aa65]/60 transition-all duration-300 reveal min-h-[520px] flex flex-col justify-end" href="https://www.fresha.com/a/barbershop-basri-plovdiv-filibe-ulitsa-shipka-27-js8945yy?pId=2841083" id="card-salon1" rel="noopener noreferrer" target="_blank">

<div className="absolute inset-0 z-0">
<img alt="Салон 1 – Тракия" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0a3351c1-8d20-4642-b742-aeeae9f95a0b_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20"></div>
</div>

<div className="absolute top-5 left-5 flex items-center gap-1.5 bg-black/50 border border-white/10 rounded-full px-3 py-1 backdrop-blur-sm z-20">
<svg className="text-[#c5aa65]" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<span className="text-white text-xs font-geist">4.9 (153+ отзива)</span>
</div>

<div className="relative z-10 p-7 flex flex-col gap-4">

<div className="">
<h3 className="text-2xl font-semibold text-white font-geist mb-1">Салон 1 – Тракия</h3>
<p className="text-sm text-white/60 font-geist">ул. „Шипка" 27, кв. Капитан Бураго, 4023 Пловдив</p>
</div>

<div className="h-px bg-white/10"></div>

<div className="grid grid-cols-2 gap-3">
<div className="flex items-start gap-2">
<svg className="text-[#c5aa65] mt-0.5 shrink-0" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle>
</svg>
<div className="">
<p className="text-white/40 text-[10px] uppercase tracking-widest font-geist mb-0.5">Пон – Съб</p>
<p className="text-white text-xs font-geist">09:00 – 19:00</p>
</div>
</div>
<div className="flex items-start gap-2">
<svg className="text-[#c5aa65] mt-0.5 shrink-0" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle>
</svg>
<div>
<p className="text-white/40 text-[10px] uppercase tracking-widest font-geist mb-0.5">Неделя</p>
<p className="text-white text-xs font-geist">09:00 – 17:00</p>
</div>
</div>
<div className="flex items-start gap-2 col-span-2">
<svg className="text-[#c5aa65] mt-0.5 shrink-0" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
<div className="">
<p className="text-white/40 text-[10px] uppercase tracking-widest font-geist mb-0.5">Телефон</p>
<p className="text-white text-xs font-geist">089 606 8010</p>
</div>
</div>
</div>

<div className="group-hover:brightness-110 transition-all duration-200 text-sm font-semibold text-black font-geist text-center bg-[#c5aa65] w-full rounded-xl mt-1 pt-3 pb-3 flex items-center justify-center gap-2">
  Запази час тук
  <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
</div>
</a>

<a className="group relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-[#c5aa65]/60 transition-all duration-300 reveal min-h-[520px] flex flex-col justify-end" href="https://www.fresha.com/a/barbershop-basri-2-plovdiv-filibe-bulevard-peshtersko-shose-19-ccl45jb4?pId=2841083" id="card-salon2" rel="noopener noreferrer" target="_blank">

<div className="absolute inset-0 z-0">
<img alt="Салон 2 – Център" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5254b3f1-625a-4f5e-9e23-fdb7e757b068_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20"></div>
</div>

<div className="absolute top-5 left-5 flex items-center gap-1.5 bg-black/50 border border-white/10 rounded-full px-3 py-1 backdrop-blur-sm z-20">
<svg className="text-[#c5aa65]" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
</path>
</svg>
<span className="text-white text-xs font-geist">4.9 (52+ отзива)</span>
</div>

<div className="relative z-10 p-7 flex flex-col gap-4">

<div className="">
<h3 className="text-2xl font-semibold text-white font-geist mb-1">Салон 2 – Център</h3>
<p className="text-sm text-white/60 font-geist">бул. „Пещерско шосе" 19, 4002 Пловдив</p>
</div>

<div className="h-px bg-white/10"></div>

<div className="grid grid-cols-2 gap-3">
<div className="flex items-start gap-2">
<svg className="text-[#c5aa65] mt-0.5 shrink-0" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle>
</svg>
<div className="">
<p className="text-white/40 text-[10px] uppercase tracking-widest font-geist mb-0.5">Пон – Съб</p>
<p className="text-white text-xs font-geist">09:00 – 19:00</p>
</div>
</div>
<div className="flex items-start gap-2">
<svg className="text-[#c5aa65] mt-0.5 shrink-0" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle>
</svg>
<div>
<p className="text-white/40 text-[10px] uppercase tracking-widest font-geist mb-0.5">Неделя</p>
<p className="text-white text-xs font-geist">09:00 – 17:00</p>
</div>
</div>
<div className="flex items-start gap-2 col-span-2">
<svg className="text-[#c5aa65] mt-0.5 shrink-0" fill="none" height="15" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
<div className="">
<p className="text-white/40 text-[10px] uppercase tracking-widest font-geist mb-0.5">Телефон</p>
<p className="text-white text-xs font-geist">089 524 4330</p>
</div>
</div>
</div>

<div className="group-hover:brightness-110 transition-all duration-200 text-sm font-semibold text-black font-geist text-center bg-[#c5aa65] w-full rounded-xl mt-1 pt-3 pb-3 flex items-center justify-center gap-2">
  Запази час тук
  <svg fill="none" height="15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="15" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
</div>
</a>
</div>
</div>
</section>
<section className="md:py-24 scroll-mt-24 border-y reveal bg-[#121212] border-white/5 pt-20 pb-20" id="services">
<div className="md:px-8 reveal max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
<p className="text-[#c5aa65] font-bold uppercase tracking-[0.35em] text-[11px] md:text-xs font-geist">Услуги</p>
<h2 className="leading-[1.05] sm:text-5xl md:text-6xl text-4xl font-medium text-white tracking-tight font-playfair">
        Стил, който говори сам
      </h2>
<p className="max-w-[46rem] text-white/55 leading-relaxed text-base sm:text-lg md:text-xl font-geist">
        Прецизно изпълнение • висок клас инструменти и козметика
      </p>
<div className="mt-2 text-sm text-white/40 font-geist">Цени за двете локации</div>
</div>
<div className="reveal">

<div className="space-y-3 lg:hidden">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
<div className="border-b border-white/10 px-4 py-3">
<h3 className="font-geist text-sm font-semibold uppercase tracking-[0.16em] text-[#c5aa65]">Подстригване</h3>
</div>
<div className="divide-y divide-white/10">
<div className="flex items-start justify-between gap-4 px-4 py-4">
<div className="min-w-0">
<h4 className="font-geist text-base font-semibold text-white">Подстригване с един номер</h4>
<p className="mt-1 font-geist text-xs leading-relaxed text-white/55">
                  Бързо и прецизно — един номер по цялата глава.
                </p>
</div>
<div className="shrink-0 text-right">
<div className="font-geist text-base font-semibold text-white">€10</div>
<div className="font-geist text-xs text-white/45">19.56 лв</div>
</div>
</div>
<div className="flex items-start justify-between gap-4 px-4 py-4">
<div className="min-w-0">
<h4 className="font-geist text-base font-semibold text-white">Бръснене на глава + шейвър + бръснач</h4>
<p className="mt-1 font-geist text-xs leading-relaxed text-white/55">
                  Машинно и ръчно бръснене за перфектен завършек.
                </p>
</div>
<div className="shrink-0 text-right">
<div className="font-geist text-base font-semibold text-white">€13</div>
<div className="font-geist text-xs text-white/45">25.43 лв</div>
</div>
</div>
<div className="flex items-start justify-between gap-4 px-4 py-4">
<div className="min-w-0">
<h4 className="font-geist text-base font-semibold text-white">Подстригване + измиване + изсушаване</h4>
<p className="mt-1 font-geist text-xs leading-relaxed text-white/55">
                  Пълна грижа за косата в едно посещение.
                </p>
</div>
<div className="shrink-0 text-right">
<div className="font-geist text-base font-semibold text-white">€13</div>
<div className="font-geist text-xs text-white/45">25.43 лв</div>
</div>
</div>
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
<div className="border-b border-white/10 px-4 py-3">
<h3 className="font-geist text-sm font-semibold uppercase tracking-[0.16em] text-[#c5aa65]">Брада и бръснене
            </h3>
</div>
<div className="divide-y divide-white/10">
<div className="flex items-start justify-between gap-4 px-4 py-4">
<div className="min-w-0">
<h4 className="font-geist text-base font-semibold text-white">Бръснене + афтършейв + крем</h4>
<p className="mt-1 font-geist text-xs leading-relaxed text-white/55">
                  Класическо бръснене с пълен следпроцедурен ритуал.
                </p>
</div>
<div className="shrink-0 text-right">
<div className="font-geist text-base font-semibold text-white">€10</div>
<div className="font-geist text-xs text-white/45">19.56 лв</div>
</div>
</div>
<div className="flex items-start justify-between gap-4 px-4 py-4">
<div className="min-w-0">
<h4 className="font-geist text-base font-semibold text-white">Оформяне + афтършейв + крем</h4>
<p className="mt-1 font-geist text-xs leading-relaxed text-white/55">
                  Прецизно оформяне с финален афтършейв ритуал.
                </p>
</div>
<div className="shrink-0 text-right">
<div className="font-geist text-base font-semibold text-white">€10</div>
<div className="font-geist text-xs text-white/45">19.56 лв</div>
</div>
</div>
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
<div className="border-b border-white/10 px-4 py-3">
<h3 className="font-geist text-sm font-semibold uppercase tracking-[0.16em] text-[#c5aa65]">Лице и маска</h3>
</div>
<div className="divide-y divide-white/10">
<div className="flex items-start justify-between gap-4 px-4 py-4">
<div className="min-w-0">
<h4 className="font-geist text-base font-semibold text-white">Кола маска на лице + крем</h4>
<p className="mt-1 font-geist text-xs leading-relaxed text-white/55">
                  Почистване на лице с успокояващ финален крем.
                </p>
</div>
<div className="shrink-0 text-right">
<div className="font-geist text-base font-semibold text-white">€5</div>
<div className="font-geist text-xs text-white/45">9.78 лв</div>
</div>
</div>
<div className="flex items-start justify-between gap-4 px-4 py-4">
<div className="min-w-0">
<h4 className="font-geist text-base font-semibold text-white">Кола маска + уши + нос</h4>
<p className="mt-1 font-geist text-xs leading-relaxed text-white/55">
                  Пълно почистване — маска, уши и нос.
                </p>
</div>
<div className="shrink-0 text-right">
<div className="font-geist text-base font-semibold text-white">€5</div>
<div className="font-geist text-xs text-white/45">9.78 лв</div>
</div>
</div>
</div>
</div>
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
<div className="border-b border-white/10 px-4 py-3">
<h3 className="font-geist text-sm font-semibold uppercase tracking-[0.16em] text-[#c5aa65]">Вежди</h3>
</div>
<div className="divide-y divide-white/10">
<div className="flex items-start justify-between gap-4 px-4 py-4">
<div className="min-w-0">
<h4 className="font-geist text-base font-semibold text-white">Оформяне на вежди + крем</h4>
<p className="mt-1 font-geist text-xs leading-relaxed text-white/55">
                  Фина корекция с хидратиращ финален крем.
                </p>
</div>
<div className="shrink-0 text-right">
<div className="font-geist text-base font-semibold text-white">€5</div>
<div className="font-geist text-xs text-white/45">9.78 лв</div>
</div>
</div>
</div>
</div>
<div className="sm:col-span-2">
<div className="relative overflow-hidden rounded-2xl border border-[#c5aa65]/30 bg-gradient-to-br from-[#c5aa65]/[0.06] to-black/30 p-6 transition-all duration-300 hover:border-[#c5aa65]/55 hover:shadow-[0_0_40px_rgba(197,170,101,0.08)]">
<div className="pointer-events-none absolute -top-10 -left-10 h-44 w-44 rounded-full bg-[#c5aa65]/10 blur-3xl">
</div>
<div className="relative">
<div className="inline-flex items-center gap-1.5 bg-[#c5aa65]/15 border border-[#c5aa65]/30 rounded-full px-3 py-1 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#c5aa65] inline-block"></span>
<span className="text-[#c5aa65] text-[10px] font-semibold uppercase tracking-[0.2em] font-geist">Пакет &amp; Спести €4</span>
</div>
<div className="flex items-start justify-between gap-4">
<div>
<h3 className="text-white font-semibold text-lg font-geist leading-snug">Пълен пакет 6-в-1</h3>
<p className="text-white/50 text-xs mt-1 font-geist">Цялостна грижа в едно посещение.</p>
</div>
<div className="shrink-0 text-right">
<div className="text-white/35 text-sm line-through font-geist">€34</div>
<div className="flex items-baseline gap-1.5 mt-0.5">
<span className="text-[#c5aa65] text-3xl font-bold font-geist leading-none">€30</span>
</div>
<div className="text-white/50 text-xs font-geist">~58.50 лв</div>
</div>
</div>
<ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Фейд / Подстригване</li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Брада — оформяне или бръснене</li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Кола маска</li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Оформяне на вежди</li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Измиване на коса</li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Сушене и стайлинг</li>
</ul>
</div>
</div>
</div>
</div>

<div className="hidden lg:grid lg:grid-cols-3 gap-4">
<div className="group bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors reveal">
<div className="mb-4">
<span className="text-[#c5aa65] text-[10px] font-semibold uppercase tracking-[0.18em] font-geist">Подстригване</span>
</div>
<h3 className="text-white font-semibold text-lg font-geist">Подстригване с един номер</h3>
<p className="text-white/50 text-xs mt-2 leading-relaxed font-geist">Бързо и прецизно — един номер по цялата
            глава.</p>
<div className="text-sm mt-4">
<span className="text-white font-semibold font-geist">€10</span><span className="text-white/40 font-geist"> / </span><span className="text-white/70 font-geist">19.56 лв</span>
</div>
</div>
<div className="group bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors reveal">
<div className="mb-4">
<span className="text-[#c5aa65] text-[10px] font-semibold uppercase tracking-[0.18em] font-geist">Брада и бръснене</span>
</div>
<h3 className="text-white font-semibold text-lg font-geist">Бръснене + афтършейв + крем</h3>
<p className="text-white/50 text-xs mt-2 leading-relaxed font-geist">Класическо бръснене с пълен следпроцедурен
            ритуал.</p>
<div className="mt-4 text-sm">
<span className="text-white font-semibold font-geist">€10</span><span className="text-white/40 font-geist"> / </span><span className="text-white/70 font-geist">19.56 лв</span>
</div>
</div>
<div className="group bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors reveal">
<div className="mb-4">
<span className="text-[#c5aa65] text-[10px] font-semibold uppercase tracking-[0.18em] font-geist">Лице и маска</span>
</div>
<h3 className="text-white font-semibold text-lg font-geist">Кола маска на лице + крем</h3>
<p className="text-white/50 text-xs mt-2 leading-relaxed font-geist">Почистване на лице с успокояващ финален крем.
          </p>
<div className="mt-4 text-sm">
<span className="text-white font-semibold font-geist">€5</span><span className="text-white/40 font-geist"> / </span><span className="text-white/70 font-geist">9.78 лв</span>
</div>
</div>
<div className="group bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors reveal">
<div className="mb-4">
<span className="text-[#c5aa65] text-[10px] font-semibold uppercase tracking-[0.18em] font-geist">Лице и маска</span>
</div>
<h3 className="text-white font-semibold text-lg font-geist">Кола маска + уши + нос</h3>
<p className="text-white/50 text-xs mt-2 leading-relaxed font-geist">Пълно почистване — маска, уши и нос.</p>
<div className="mt-4 text-sm">
<span className="text-white font-semibold font-geist">€5</span><span className="text-white/40 font-geist"> / </span><span className="text-white/70 font-geist">9.78 лв</span>
</div>
</div>
<div className="group bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors reveal">
<div className="mb-4">
<span className="text-[#c5aa65] text-[10px] font-semibold uppercase tracking-[0.18em] font-geist">Вежди</span>
</div>
<h3 className="text-white font-semibold text-lg font-geist">Оформяне на вежди + крем</h3>
<p className="text-white/50 text-xs mt-2 leading-relaxed font-geist">Фина корекция с хидратиращ финален крем.</p>
<div className="mt-4 text-sm">
<span className="text-white font-semibold font-geist">€5</span><span className="text-white/40 font-geist"> / </span><span className="text-white/70 font-geist">9.78 лв</span>
</div>
</div>
<div className="group bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors reveal">
<div className="mb-4">
<span className="text-[#c5aa65] text-[10px] font-semibold uppercase tracking-[0.18em] font-geist">Подстригване</span>
</div>
<h3 className="text-white font-semibold text-lg font-geist">Бръснене на глава + шейвър + бръснач</h3>
<p className="text-white/50 text-xs mt-2 leading-relaxed font-geist">Машинно и ръчно бръснене за перфектен
            завършек.</p>
<div className="mt-4 text-sm">
<span className="text-white font-semibold font-geist">€13</span><span className="text-white/40 font-geist"> / </span><span className="text-white/70 font-geist">25.43 лв</span>
</div>
</div>
<div className="group bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors reveal">
<div className="mb-4">
<span className="text-[#c5aa65] text-[10px] font-semibold uppercase tracking-[0.18em] font-geist">Подстригване</span>
</div>
<h3 className="text-white font-semibold text-lg font-geist">Подстригване + измиване + изсушаване</h3>
<p className="text-white/50 text-xs mt-2 leading-relaxed font-geist">Пълна грижа за косата в едно посещение.</p>
<div className="mt-4 text-sm">
<span className="text-white font-semibold font-geist">€13</span><span className="text-white/40 font-geist"> / </span><span className="text-white/70 font-geist">25.43 лв</span>
</div>
</div>
<div className="group bg-black/20 p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-colors reveal">
<div className="mb-4">
<span className="text-[#c5aa65] text-[10px] font-semibold uppercase tracking-[0.18em] font-geist">Брада и бръснене</span>
</div>
<h3 className="text-white font-semibold text-lg font-geist">Оформяне + афтършейв + крем</h3>
<p className="text-white/50 text-xs mt-2 leading-relaxed font-geist">Прецизно оформяне с финален афтършейв ритуал.
          </p>
<div className="mt-4 text-sm">
<span className="text-white font-semibold font-geist">€10</span><span className="text-white/40 font-geist"> / </span><span className="text-white/70 font-geist">19.56 лв</span>
</div>
</div>
<div className="lg:col-span-3">
<div className="relative h-full rounded-2xl border border-[#c5aa65]/30 bg-gradient-to-br from-[#c5aa65]/[0.06] to-black/30 p-6 overflow-hidden transition-all duration-300 hover:border-[#c5aa65]/55 hover:shadow-[0_0_40px_rgba(197,170,101,0.08)] reveal">
<div className="pointer-events-none absolute -top-10 -left-10 w-44 h-44 rounded-full bg-[#c5aa65]/10 blur-3xl">
</div>
<div className="inline-flex items-center gap-1.5 bg-[#c5aa65]/15 border border-[#c5aa65]/30 rounded-full px-3 py-1 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-[#c5aa65] inline-block"></span>
<span className="text-[#c5aa65] text-[10px] font-semibold uppercase tracking-[0.2em] font-geist">Пакет &amp; Спести €4</span>
</div>
<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
<div className="flex-1">
<h3 className="text-white font-semibold text-lg font-geist leading-snug">Пълен пакет 6-в-1</h3>
<p className="text-white/50 text-xs mt-1 font-geist">Цялостна грижа в едно посещение.</p>
<ul className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1.5 reveal">
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Фейд / Подстригване
                  </li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Брада — оформяне или бръснене
                  </li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Кола маска
                  </li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Оформяне на вежди
                  </li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Измиване на коса
                  </li>
<li className="flex items-center gap-2 text-sm text-white/70 font-geist">
<span className="w-1 h-1 rounded-full bg-[#c5aa65] shrink-0"></span>Сушене и стайлинг
                  </li>
</ul>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-4 shrink-0">
<div className="sm:text-right">
<div className="text-white/35 text-sm line-through font-geist">€34</div>
<div className="flex items-baseline gap-1.5 mt-0.5">
<span className="text-[#c5aa65] text-3xl font-bold font-geist leading-none">€30</span>
<span className="text-white/50 text-sm font-geist">/ ~58.50 лв</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-xs sm:text-sm font-semibold uppercase tracking-widest border border-white/20 bg-black/20 text-white transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/40 hover:ring-inset font-geist" data-booking-cta="">
        Запази час сега
        <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<div className="text-xs text-white/50 font-geist">
        Цените са ориентировъчни. Точните цени и налични часове са в онлайн резервацията.
      </div>
</div>
</div>
</section>

<section className="scroll-mt-24 reveal bg-[#121212] border-white/5 border-b pt-20 pb-20" id="team">
<div className="max-w-7xl mx-auto px-4 md:px-8 reveal">
<div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
<p className="text-[#c5aa65] font-bold uppercase tracking-[0.35em] text-[11px] md:text-xs font-geist">Екип</p>
<h2 className="text-white tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl font-playfair font-medium">
        Кой ще се погрижи за теб</h2>
<p className="max-w-[46rem] text-white/55 leading-relaxed text-base sm:text-lg md:text-xl font-geist">Професионалисти
        от двете ни локации — всеки с характер и занаят.</p>
</div>

<div className="flex items-center gap-4 mb-6">
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-[#c5aa65] text-[11px] uppercase tracking-[0.35em] font-geist font-bold">Тракия</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">

<div className="team-card rounded-2xl border border-white/10 bg-black/20 overflow-hidden reveal">
<div className="relative aspect-[4/3]">
<img alt="Басри – Собственик" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ac29b0-f4d8-43a9-8938-979d9d18c0e9_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
</div>
<div className="p-5">
<p className="text-white font-semibold font-geist">Басри</p>
<p className="text-[#c5aa65] text-xs font-medium mt-0.5 font-geist uppercase tracking-widest">Собственик • Главен
            бръснар</p>
<p className="text-white/55 text-xs mt-2 leading-relaxed font-geist">Визия. Занаят. Резултат.</p>
</div>
</div>

<div className="team-card rounded-2xl border border-white/10 bg-black/20 overflow-hidden reveal">
<div className="relative aspect-[4/3]">
<img alt="Иван – Бръснар" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14dc60ac-c29c-4541-8f05-4f699867359e_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
</div>
<div className="p-5">
<p className="text-white font-semibold font-geist">Иван</p>
<p className="text-white/50 text-xs font-medium mt-0.5 font-geist uppercase tracking-widest">Бръснар</p>
<p className="text-white/55 text-xs mt-2 leading-relaxed font-geist">Чист стил. Всеки път.</p>
</div>
</div>

<div className="team-card rounded-2xl border border-white/10 bg-black/20 overflow-hidden reveal">
<div className="relative aspect-[4/3]">
<img alt="Ахмед – Бръснар" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb728c6c-0413-41dc-ae54-9d3403b8a3e1_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
</div>
<div className="p-5">
<p className="text-white font-semibold font-geist">Ахмед</p>
<p className="text-white/50 text-xs font-medium mt-0.5 font-geist uppercase tracking-widest">Бръснар</p>
<p className="text-white/55 text-xs mt-2 leading-relaxed font-geist">Прецизен. Фокусиран. Надежден.</p>
</div>
</div>

<div className="team-card rounded-2xl border border-white/10 bg-black/20 overflow-hidden reveal">
<div className="relative aspect-[4/3]">
<img alt="Серафим – Бръснар" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ea5db3d-5063-4be2-8f83-7cc88355e0bc_3840w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
</div>
<div className="p-5">
<p className="text-white font-semibold font-geist">Серафим</p>
<p className="text-white/50 text-xs font-medium mt-0.5 font-geist uppercase tracking-widest">Бръснар</p>
<p className="text-white/55 text-xs mt-2 leading-relaxed font-geist">Детайлът е приоритет.</p>
</div>
</div>
</div>

<div className="flex items-center gap-4 mt-12 mb-6">
<div className="h-px flex-1 bg-white/10"></div>
<span className="text-[#c5aa65] text-[11px] uppercase tracking-[0.35em] font-geist font-bold">Център</span>
<div className="h-px flex-1 bg-white/10"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto reveal">

<div className="team-card rounded-2xl border border-white/10 bg-black/20 overflow-hidden reveal">
<div className="relative aspect-[4/3]">
<img alt="Борис – Бръснар" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/119afe0b-5e58-419a-ae06-9e4370ad670b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
</div>
<div className="p-6">
<p className="text-white font-semibold font-geist">Борис</p>
<p className="text-white/50 text-xs font-medium mt-0.5 font-geist uppercase tracking-widest">Бръснар</p>
<p className="text-white/55 text-xs mt-2 leading-relaxed font-geist">Стил без компромис.</p>
</div>
</div>

<div className="team-card rounded-2xl border border-white/10 bg-black/20 overflow-hidden reveal">
<div className="relative aspect-[4/3]">
<img alt="Джани – Бръснар" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/368b4265-cf3c-48a7-ab03-74e2d0263101_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
</div>
<div className="p-6">
<p className="text-white font-semibold font-geist">Джани</p>
<p className="text-white/50 text-xs font-medium mt-0.5 font-geist uppercase tracking-widest">Бръснар</p>
<p className="text-white/55 text-xs mt-2 leading-relaxed font-geist">Бърз. Точен. Ангажиран.</p>
</div>
</div>
</div>
<div className="mt-12 flex justify-center">
<button className="text-xs sm:text-sm font-semibold uppercase tracking-widest px-7 py-3 rounded-full border bg-black/20 text-white border-white/25 transition-colors duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] font-geist" data-booking-cta="">
        Запази час при нашия екип
      </button>
</div>
</div>
</section>

<section className="scroll-mt-24 reveal bg-[#121212] border-white/5 border-b pt-20 pb-20" id="gallery">
<div className="md:px-8 reveal max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col items-center text-center gap-4 mb-10 md:mb-14">
<p className="text-[#c5aa65] font-bold uppercase tracking-[0.35em] text-[11px] md:text-xs font-geist">Галерия</p>
<h2 className="text-white tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl font-playfair font-medium">
        Реална работа. Реални кадри.</h2>
<p className="max-w-[46rem] text-white/55 leading-relaxed text-base sm:text-lg md:text-xl font-geist">Подстригвания,
        бради и атмосфера — без филтри.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 reveal" id="gallery-grid">

<button className="gallery-item group aspect-square relative overflow-hidden rounded-xl ring-1 ring-white/10 reveal" data-full="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0f04fff-e300-41d1-9a64-a17b6bd6da10_800w.png" type="button">
<img alt="BASRI галерия 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0f04fff-e300-41d1-9a64-a17b6bd6da10_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
</button>
<button className="gallery-item group aspect-square relative overflow-hidden rounded-xl ring-1 ring-white/10 reveal" data-full="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/037e418e-aa79-4609-b459-7c6727f9f90f_800w.png" type="button">
<img alt="BASRI галерия 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/037e418e-aa79-4609-b459-7c6727f9f90f_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
</button>
<button className="gallery-item group aspect-square relative overflow-hidden rounded-xl ring-1 ring-white/10 reveal" data-full="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11f6290d-cfd5-4170-a798-6dca806a99f5_800w.png" type="button">
<img alt="BASRI галерия 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11f6290d-cfd5-4170-a798-6dca806a99f5_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
</button>
<button className="gallery-item group aspect-square relative overflow-hidden rounded-xl ring-1 ring-white/10 reveal" data-full="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3878ba6-8d35-4f61-a9e2-4e7d42bddf25_800w.png" type="button">
<img alt="BASRI галерия 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3878ba6-8d35-4f61-a9e2-4e7d42bddf25_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
</button>

<button className="gallery-item gallery-extra hidden group aspect-square relative overflow-hidden rounded-xl ring-1 ring-white/10 reveal" data-full="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92af1414-b5fa-4237-9a08-f8a4d0489b16_800w.png" type="button">
<img alt="BASRI галерия 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92af1414-b5fa-4237-9a08-f8a4d0489b16_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
</button>
<button className="gallery-item gallery-extra hidden group aspect-square relative overflow-hidden rounded-xl ring-1 ring-white/10 reveal" data-full="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1037c509-a2b0-4ee6-a044-c8d8c9cb3b28_800w.webp" type="button">
<img alt="BASRI галерия 6" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a13f1f0-49c6-4291-8f3d-fdf40f96af06_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
</button>
<button className="gallery-item gallery-extra hidden group aspect-square relative overflow-hidden rounded-xl ring-1 ring-white/10 reveal" data-full="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c36ce42-1874-47d1-ae49-76dca7996b8e_3840w.png" type="button">
<img alt="BASRI галерия 7" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c36ce42-1874-47d1-ae49-76dca7996b8e_3840w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
</button>
<button className="gallery-item gallery-extra hidden group aspect-square relative overflow-hidden rounded-xl ring-1 ring-white/10 reveal" data-full="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5313e35e-77ad-4588-b4bc-d53957f69378_800w.png" type="button">
<img alt="BASRI галерия 8" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06] grayscale-[20%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5313e35e-77ad-4588-b4bc-d53957f69378_800w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-70 group-hover:opacity-90 transition-opacity"></div>
</button>
</div>

<div className="mt-8 flex justify-center gap-3">
<button className="text-xs sm:text-sm font-semibold uppercase tracking-widest px-7 py-3 rounded-full border bg-black/20 text-white border-white/25 transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset font-geist" id="gallery-more">
        Покажи още
      </button>
<button className="hidden text-xs sm:text-sm font-semibold uppercase tracking-widest px-7 py-3 rounded-full border bg-black/20 text-white border-white/25 transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset font-geist" id="gallery-collapse">
        Скрий
      </button>
</div>
</div>

<div aria-modal="true" className="fixed inset-0 z-[110] hidden" id="gallery-lightbox" role="dialog">
<div className="absolute inset-0 bg-black/90 backdrop-blur-sm" data-close=""></div>
<div className="relative z-10 w-full h-full flex items-center justify-center p-4">
<div className="relative max-w-5xl w-full">
<img alt="BASRI снимка" className="w-full max-h-[80vh] object-contain rounded-2xl ring-1 ring-white/10" id="gallery-lightbox-img" src=""/>
<button aria-label="Затвори" className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-black/60 border border-white/15 text-white flex items-center justify-center hover:bg-black/80 transition-colors font-geist" data-close="" type="button">✕</button>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 bg-[#121212] pt-20 pb-20 border-white/5 border-b reveal" id="reviews">
<div className="md:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 reveal">
<div className="text-center mb-10 md:mb-14">
<p className="uppercase text-[11px] md:text-xs font-bold text-[#c5aa65] tracking-[0.35em] font-geist mb-2">Отзиви</p>
<h2 className="text-white tracking-tight leading-[1.05] text-4xl sm:text-5xl md:text-6xl font-playfair font-medium">Какво казват клиентите</h2>
<p className="max-w-[46rem] mx-auto mt-4 text-white/55 leading-relaxed text-base sm:text-lg md:text-xl font-geist">Реални мнения от Google • общи за двете локации</p>
</div>
<div className="relative">

<button aria-label="Предишен отзив" className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-11 h-11 rounded-full border border-white/15 bg-black/40 text-white/90 items-center justify-center hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset transition opacity-40 pointer-events-none" disabled="" id="reviews-prev" type="button">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6"></path></svg>
</button>
<button aria-label="Следващ отзив" className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-11 h-11 rounded-full border border-white/15 bg-black/40 text-white/90 items-center justify-center hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset transition" id="reviews-next" type="button">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6"></path></svg>
</button>

<div className="md:hidden flex items-center justify-center gap-3 mb-4">
<button aria-label="Предишен отзив" className="w-11 h-11 rounded-full border border-white/15 bg-black/40 text-white/90 flex items-center justify-center hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset transition opacity-40 pointer-events-none" disabled="" id="reviews-prev-m" type="button">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6"></path></svg>
</button>
<div className="text-xs text-white/50">
<span className="font-geist" id="reviews-indicator">1</span><span className="text-white/25 font-geist"> / </span><span className="font-geist" id="reviews-total">5</span>
</div>
<button aria-label="Следващ отзив" className="w-11 h-11 rounded-full border border-white/15 bg-black/40 text-white/90 flex items-center justify-center hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset transition" id="reviews-next-m" type="button">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6"></path></svg>
</button>
</div>
<div className="mx-auto max-w-full md:max-w-[1128px]">
<div className="grid gap-6 grid-cols-1 md:grid-cols-3" id="reviews-stage"><article className="rounded-2xl border border-white/10 bg-black/20 p-6"><div className="flex items-center justify-between gap-4"><p className="text-white font-semibold">Асен Пейчев</p><p className="text-[#c5aa65] text-sm tracking-tight">★★★★★</p></div><p className="text-sm text-white/70 mt-3 leading-relaxed">„Много приятно отношение. Всеки път излизам доволен."</p></article><article className="rounded-2xl border border-white/10 bg-black/20 p-6"><div className="flex items-center justify-between gap-4"><p className="text-white font-semibold">Константин Костадинов</p><p className="text-[#c5aa65] text-sm tracking-tight">★★★★★</p></div><p className="text-sm text-white/70 mt-3 leading-relaxed">„Хигиена и качество. Клиент съм от години — винаги на ниво."</p></article><article className="rounded-2xl border border-white/10 bg-black/20 p-6"><div className="flex items-center justify-between gap-4"><p className="text-white font-semibold">Бранимир Бояджиев</p><p className="text-[#c5aa65] text-sm tracking-tight">★★★★★</p></div><p className="text-sm text-white/70 mt-3 leading-relaxed">„Страхотен екип. 3 години клиент — без изненади, само резултат."</p></article></div>
</div>
</div>

<div className="flex flex-row flex-wrap gap-x-4 gap-y-2 mt-6 items-center justify-center w-full">
<a className="text-xs text-white/50 hover:text-[#c5aa65] transition-colors font-geist underline underline-offset-2" href="https://share.google/hk0y3U46fvyuWF5uR" rel="noopener noreferrer" target="_blank">
        153+ отзива – Тракия →
      </a>
<span className="text-white/20 hidden sm:inline">•</span>
<a className="text-xs text-white/50 hover:text-[#c5aa65] transition-colors font-geist underline underline-offset-2" href="https://share.google/wNrKbO1DqQ7OiD76J" rel="noopener noreferrer" target="_blank">
        52+ отзива – Център →
      </a>
</div>
<div className="mt-8 flex justify-center">
<button className="text-xs sm:text-sm font-semibold uppercase tracking-widest px-7 py-3 rounded-full border bg-black/20 text-white border-white/25 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset transition-all duration-200 font-geist" data-booking-cta="">
        Запази час
      </button>
</div>
</div>

</section>

<section className="scroll-mt-24 md:pt-20 bg-[#121212] border-white/5 border-t pt-16 pb-10 reveal" id="contact">
<div className="md:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 reveal">
<div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 reveal">

<div className="md:col-span-4">
<a aria-label="Към началото" className="inline-block" href="#hero">
<img alt="Barbershop BASRI" className="h-10 md:h-12 w-auto object-contain select-none opacity-95 cursor-pointer" draggable="false" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f888c22f-5792-46b3-939f-4e3a5d37a532_3840w.png"/>
</a>
<p className="leading-relaxed text-sm text-white/70 max-w-sm mt-4 font-geist">Тишина, прецизност и безупречен резултат. Западен стандарт — в Пловдив.</p>
<div className="mt-6">
<button className="w-full sm:w-auto inline-flex items-center justify-center uppercase transition-all duration-200 text-xs font-semibold tracking-widest text-white bg-black/20 border border-white/15 rounded-full px-6 py-3 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset font-geist" data-booking-cta="" type="button">
            Запази час
          </button>
</div>

<div className="flex mt-4 gap-3 items-center flex-wrap">
<a aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 bg-black/20 flex items-center justify-center text-white/80 transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset" href="https://www.instagram.com/barbershop_basri/" rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Facebook – Berber Basri" className="w-10 h-10 rounded-full border border-white/10 bg-black/20 flex items-center justify-center text-white/80 transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset" href="https://www.facebook.com/berber.basri" rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="Facebook – Fenomen Barber Basri" className="w-10 h-10 rounded-full border border-white/10 bg-black/20 flex items-center justify-center text-white/80 transition-all duration-200 hover:border-[#c5aa65] hover:text-[#c5aa65] hover:ring-2 hover:ring-[#c5aa65]/30 hover:ring-inset" href="https://www.facebook.com/p/Fenomen-Barber-Basri-100066342683508/" rel="noopener noreferrer" target="_blank">
<svg className="w-5 h-5" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>

<div className="md:col-span-5">
<p className="uppercase text-base font-bold text-[#c5aa65] tracking-widest text-center mb-4 font-geist">Локации</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal">

<div className="bg-black/20 border border-white/10 rounded-2xl p-5 reveal">
<p className="text-white font-semibold font-geist">Салон – Тракия</p>
<p className="text-sm text-white/70 mt-1 font-geist">ул. „Шипка" 27, 4023 Пловдив</p>
<div className="mt-4 space-y-2 text-sm">

<span className="flex items-center gap-2 text-white/80 font-geist" data-call="salon1">089 606 8010</span>
<p className="text-xs text-white/55 mt-3 font-geist">Пон–Съб: 09:00–19:00 • Нед: 09:00–17:00</p>
</div>
</div>

<div className="bg-black/20 border border-white/10 rounded-2xl p-5 reveal">
<p className="text-white font-semibold font-geist">Салон – Център</p>
<p className="text-sm text-white/70 mt-1 font-geist">бул. „Пещерско шосе" 19, 4002 Пловдив</p>
<div className="mt-4 space-y-2 text-sm">
<span className="flex items-center gap-2 text-white/80 font-geist" data-call="salon2">089 524 4330</span>
<p className="text-xs text-white/55 mt-3 font-geist">Пон–Съб: 09:00–19:00 • Нед: 09:00–17:00</p>
</div>
</div>
</div>
<div className="text-xs text-white/50 text-center mt-5 font-geist">
          За цени/резервация по локация: <button className="text-[#c5aa65] hover:underline font-geist" onclick="scrollToLocation()">избери салон</button>.
        </div>
</div>

<div className="md:col-span-3 md:text-right flex flex-col justify-between h-full">
<div className="items-center justify-center">
<p className="uppercase text-xs text-[#c5aa65] tracking-widest font-geist mb-4 text-center md:text-right">Страници</p>
<nav className="flex flex-row flex-wrap justify-center md:flex-col md:justify-end md:gap-3 md:items-end text-sm text-white/70 gap-x-4 gap-y-2">
<a className="hover:text-white transition-colors font-geist" href="#about">За нас</a>
<a className="hover:text-white transition-colors font-geist" href="#gallery">Галерия</a>
<a className="hover:text-white transition-colors font-geist" href="#services">Услуги</a>
<a className="hover:text-white transition-colors font-geist" href="#team">Екип</a>
<a className="hover:text-white transition-colors font-geist" href="#locations">Локации</a>
</nav>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-t border-white/10 mt-12 pt-6 pb-4 text-xs text-white/40 font-geist">
<p className="text-center md:text-left">
        © <span id="footer-year">2026</span> Barbershop BASRI. Всички права запазени.
        <span className="block md:inline">Професионално бръснарство. Без компромис в детайла.</span>
</p>

<div className="flex flex-wrap justify-center md:justify-end gap-3 mt-2 md:mt-0">
<button className="hover:text-[#c5aa65] transition-colors" onclick="openLegalModal('privacy')">Политика за поверителност</button>
<button className="hover:text-[#c5aa65] transition-colors" onclick="openLegalModal('cookies')">Бисквитки</button>
<button className="hover:text-[#c5aa65] transition-colors" onclick="openLegalModal('terms')">Общи условия</button>
<button className="hover:text-[#c5aa65] transition-colors" onclick="openLegalModal('imprint')">Информация за компанията</button>
</div>
</div>
</div>

<div id="legal-modals">
<div className="legal-modal hidden fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" id="privacy">
<div className="bg-[#1e1e1e] w-full max-w-3xl p-6 rounded-2xl border border-white/10 overflow-y-auto max-h-[90vh] shadow-lg">
<h2 className="text-xl font-semibold text-white mb-4 font-geist">Политика за поверителност</h2>
<div className="text-white/80 text-sm space-y-3 font-geist leading-relaxed">
<p><strong className="text-white">Администратор на данни:</strong> Barbershop Basri, гр. Пловдив, България. Контакт: basribarbershop25@gmail.com</p>
<p><strong className="text-white">Какви данни събираме:</strong> При посещение на сайта могат да се събират технически данни (IP адрес, браузър, устройство) чрез аналитични инструменти. Не събираме лични данни без изрично съгласие.</p>
<p><strong className="text-white">Цели и правно основание:</strong> Данните се обработват за подобряване на услугите на сайта (легитимен интерес, чл. 6, ал. 1, б. „е" от GDPR) и за аналитични цели (съгласие, чл. 6, ал. 1, б. „а" от GDPR).</p>
<p><strong className="text-white">Трети страни:</strong> Можем да използваме Google Analytics за анализ на трафика. Google може да обработва данни съгласно своята политика за поверителност.</p>
<p><strong className="text-white">Срок на съхранение:</strong> Аналитичните данни се съхраняват до 26 месеца. Технически логове — до 30 дни.</p>
<p><strong className="text-white">Вашите права:</strong> Имате право на достъп, коригиране, изтриване, ограничаване на обработката, преносимост и възражение. За упражняване на права: basribarbershop25@gmail.com</p>
<p><strong className="text-white">Жалби:</strong> Можете да подадете жалба до Комисията за защита на личните данни (КЗЛД), www.cpdp.bg.</p>
</div>
<button className="mt-4 px-4 py-2 rounded-lg bg-[#c5aa65] text-black font-semibold hover:bg-[#b79f5b] transition-all font-geist" onclick="closeLegalModal('privacy')">Затвори</button>
</div>
</div>
<div className="legal-modal hidden fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" id="cookies">
<div className="bg-[#1e1e1e] w-full max-w-3xl p-6 rounded-2xl border border-white/10 overflow-y-auto max-h-[90vh] shadow-lg">
<h2 className="text-xl font-semibold text-white mb-4 font-geist">Политика за бисквитки</h2>
<div className="text-white/80 text-sm space-y-3 font-geist leading-relaxed">
<p><strong className="text-white">Строго необходими бисквитки:</strong> Осигуряват основната функционалност на сайта (напр. запаметяване на избраната локация, управление на сесията). Не могат да бъдат изключени.</p>
<p><strong className="text-white">Аналитични бисквитки:</strong> Използват се за разбиране как посетителите взаимодействат със сайта (напр. Google Analytics). Изискват Вашето съгласие.</p>
<p><strong className="text-white">Маркетингови бисквитки:</strong> Могат да се използват за показване на персонализирани реклами. Изискват Вашето изрично съгласие.</p>
<p><strong className="text-white">Управление на бисквитки:</strong> Можете да оттеглите или промените съгласието си по всяко време чрез настройките на браузъра си или като се свържете с нас на basribarbershop25@gmail.com.</p>
</div>
<button className="mt-4 px-4 py-2 rounded-lg bg-[#c5aa65] text-black font-semibold hover:bg-[#b79f5b] transition-all font-geist" onclick="closeLegalModal('cookies')">Затвори</button>
</div>
</div>
<div className="legal-modal hidden fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" id="terms">
<div className="bg-[#1e1e1e] w-full max-w-3xl p-6 rounded-2xl border border-white/10 overflow-y-auto max-h-[90vh] shadow-lg">
<h2 className="text-xl font-semibold text-white mb-4 font-geist">Общи условия</h2>
<div className="text-white/80 text-sm space-y-3 font-geist leading-relaxed">
<p><strong className="text-white">Ползване на сайта:</strong> Настоящият сайт е собственост на Barbershop Basri. Ползването му означава приемане на тези условия.</p>
<p><strong className="text-white">Резервации:</strong> Онлайн резервациите са предварителни заявки. Barbershop Basri си запазва правото да откаже или промени час при обективна невъзможност. При неявяване без предварително уведомление повече от 2 пъти, салонът може да откаже бъдещи резервации.</p>
<p><strong className="text-white">Цени:</strong> Публикуваните цени са ориентировъчни. Точните цени се потвърждават при резервация или на място. Запазваме правото да ги актуализираме без предизвестие.</p>
<p><strong className="text-white">Интелектуална собственост:</strong> Всички текстове, изображения и лога на сайта са собственост на Barbershop Basri и не могат да се използват без разрешение.</p>
<p><strong className="text-white">Отговорност:</strong> Barbershop Basri не носи отговорност за технически прекъсвания на сайта или за загуби, настъпили в резултат на ползването му.</p>
<p><strong className="text-white">Контакт:</strong> basribarbershop25@gmail.com</p>
</div>
<button className="mt-4 px-4 py-2 rounded-lg bg-[#c5aa65] text-black font-semibold hover:bg-[#b79f5b] transition-all font-geist" onclick="closeLegalModal('terms')">Затвори</button>
</div>
</div>
<div className="legal-modal hidden fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" id="imprint">
<div className="bg-[#1e1e1e] w-full max-w-3xl p-6 rounded-2xl border border-white/10 overflow-y-auto max-h-[90vh] shadow-lg">
<h2 className="text-xl font-semibold text-white mb-4 font-geist">Информация за компанията</h2>
<div className="text-white/80 text-sm space-y-3 font-geist leading-relaxed">
<p><strong className="text-white">Наименование:</strong> Barbershop Basri</p>
<p><strong className="text-white">Дейност:</strong> Фризьорски и бръснарски услуги</p>
<p><strong className="text-white">Адреси:</strong><br/>
            Салон Тракия: ул. „Шипка" 27, 4023 Пловдив<br/>
            Салон Център: бул. „Пещерско шосе" 19, 4002 Пловдив
          </p>
<p><strong className="text-white">Телефони:</strong><br/>
            Тракия: 089 606 8010<br/>
            Център: 089 524 4330
          </p>
<p><strong className="text-white">Имейл:</strong> basribarbershop25@gmail.com</p>
<p className="text-white/50 text-xs">За актуална регистрационна информация (БУЛСТАТ/ЕИК) се свържете с нас директно.</p>
</div>
<button className="mt-4 px-4 py-2 rounded-lg bg-[#c5aa65] text-black font-semibold hover:bg-[#b79f5b] transition-all font-geist" onclick="closeLegalModal('imprint')">Затвори</button>
</div>
</div>
</div>

</section>


<div className="fixed bottom-[72px] left-4 right-4 md:left-auto md:right-8 md:bottom-8 bg-black/90 text-white/90 border border-white/10 rounded-lg px-4 py-3 z-[9999] flex flex-row items-center justify-between gap-4 shadow-lg font-geist hidden" id="cookie-banner">
<p className="text-xs text-white/70 font-geist">Сайтът използва бисквитки за основна функционалност.</p>
<button className="shrink-0 px-4 py-1.5 rounded-full bg-[#c5aa65] text-black text-xs font-semibold hover:bg-[#b79f5b] transition-all font-geist" id="cookie-dismiss">OK</button>
</div>




    </>
  );
}
