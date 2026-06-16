import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // Parallax hero background
    const heroBg = document.getElementById('hero-bg');
    window.addEventListener('scroll', () => {
      const y = window.scrollY * 0.2;
      heroBg.style.transform = `translateY(${y}px) scale(1.05)`;
    }, { passive: true });

    // Intersection reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('opacity-100', 'translate-y-0');
          e.target.classList.remove('opacity-0', 'translate-y-6');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => {
      el.classList.add('opacity-0','translate-y-6','transition','duration-700');
      observer.observe(el);
    });

    // Tilt effect
    function attachTilt(card) {
      let rect;
      function onMove(e) {
        rect = rect || card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rx = (0.5 - y) * 8;
        const ry = (x - 0.5) * 12;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      }
      function onLeave() {
        card.style.transform = 'perspective(900px) rotateX(0) rotateY(0)';
        rect = null;
      }
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    }
    document.querySelectorAll('.tilt-card').forEach(attachTilt);

    // Carousel
    const track = document.getElementById('carousel-track');
    const prev = document.getElementById('carousel-prev');
    const next = document.getElementById('carousel-next');
    let index = 0;
    function updateCarousel() {
      const cardWidth = track.children[0].getBoundingClientRect().width + 16; // width + gap
      track.style.transform = `translateX(${-index * cardWidth}px)`;
    }
    function maxIndex() {
      const visible = Math.floor(track.parentElement.getBoundingClientRect().width / (track.children[0].getBoundingClientRect().width + 16));
      return Math.max(0, track.children.length - visible);
    }
    prev.addEventListener('click', () => { index = Math.max(0, index - 1); updateCarousel(); });
    next.addEventListener('click', () => { index = Math.min(maxIndex(), index + 1); updateCarousel(); });
    let autoplay = setInterval(() => { index = (index >= maxIndex()) ? 0 : index + 1; updateCarousel(); }, 3500);
    document.getElementById('carousel').addEventListener('mouseenter', () => clearInterval(autoplay));
    document.getElementById('carousel').addEventListener('mouseleave', () => autoplay = setInterval(() => { index = (index >= maxIndex()) ? 0 : index + 1; updateCarousel(); }, 3500));
    window.addEventListener('resize', updateCarousel);

    // Genres filter with animated underline
    const pills = Array.from(document.querySelectorAll('.genre-pill'));
    const underline = document.getElementById('tab-underline');
    function moveUnderline(el) {
      const r = el.getBoundingClientRect();
      const pr = el.parentElement.getBoundingClientRect();
      underline.style.width = r.width + 'px';
      underline.style.left = (r.left - pr.left) + 'px';
      underline.style.top = (r.top - pr.top) + 'px';
    }
    function activatePill(el) {
      pills.forEach(p => {
        if (p === el) {
          p.classList.remove('bg-white/5','text-slate-300');
          p.classList.add('bg-white/10','text-white');
        } else {
          p.classList.remove('bg-white/10','text-white');
          p.classList.add('bg-white/5','text-slate-300');
        }
      });
      moveUnderline(el);
    }
    const gameCards = Array.from(document.querySelectorAll('[data-genre], .grid > .group')).filter(el => el !== document.querySelector('.grid > .group:not([data-genre])')); // include those with genre
    function filterGenre(g) {
      document.querySelectorAll('.grid > .group').forEach(card => {
        const genre = (card.getAttribute('data-genre') || 'action').toLowerCase();
        const show = g === 'all' || genre === g;
        card.style.transition = 'opacity 400ms, transform 400ms';
        card.style.opacity = show ? '1' : '0';
        card.style.transform = show ? 'scale(1)' : 'scale(0.98)';
        card.style.pointerEvents = show ? 'auto' : 'none';
        card.style.position = show ? 'static' : 'absolute';
      });
      // restore layout after animation
      setTimeout(() => {
        document.querySelectorAll('.grid > .group').forEach(card => {
          const genre = (card.getAttribute('data-genre') || 'action').toLowerCase();
          const show = g === 'all' || genre === g;
          card.style.position = show ? 'static' : 'absolute';
        });
      }, 420);
    }
    pills.forEach(p => p.addEventListener('click', () => {
      activatePill(p);
      filterGenre(p.dataset.genre);
    }));
    // init
    activatePill(document.querySelector('.genre-pill[data-genre="all"]'));

    // Add to cart interactions
    let cartCount = 0;
    const badge = document.getElementById('cart-badge');
    const pulse = document.getElementById('cart-pulse');
    function bumpCart() {
      cartCount++;
      badge.textContent = cartCount;
      pulse.classList.remove('opacity-0');
      pulse.classList.add('opacity-100');
      badge.animate([
        { transform: 'scale(1)' },
        { transform: 'scale(1.25)' },
        { transform: 'scale(1)' }
      ], { duration: 300, easing: 'cubic-bezier(0.22,1,0.36,1)' });
      setTimeout(() => pulse.classList.add('opacity-0'), 300);
    }
    document.querySelectorAll('[data-add]').forEach(btn => btn.addEventListener('click', bumpCart));

    // Modal auth
    const openLogin = document.getElementById('open-login');
    const closeLogin = document.getElementById('close-login');
    const modal = document.getElementById('auth-modal');
    const tabLogin = document.getElementById('tab-login');
    const tabSignup = document.getElementById('tab-signup');
    const formLogin = document.getElementById('login-form');
    const formSignup = document.getElementById('signup-form');

    function showModal() {
      modal.classList.remove('hidden');
      modal.querySelector('.rounded-xl').style.transform = 'translateY(12px)';
      modal.querySelector('.rounded-xl').style.opacity = '0';
      requestAnimationFrame(() => {
        modal.querySelector('.rounded-xl').style.transition = 'all 350ms cubic-bezier(0.22,1,0.36,1)';
        modal.querySelector('.rounded-xl').style.transform = 'translateY(0)';
        modal.querySelector('.rounded-xl').style.opacity = '1';
      });
    }
    function hideModal() {
      const card = modal.querySelector('.rounded-xl');
      card.style.transform = 'translateY(12px)';
      card.style.opacity = '0';
      setTimeout(() => modal.classList.add('hidden'), 200);
    }
    openLogin.addEventListener('click', showModal);
    closeLogin.addEventListener('click', hideModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) hideModal(); });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal(); });

    tabLogin.addEventListener('click', () => {
      tabLogin.className = 'px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white text-sm';
      tabSignup.className = 'px-3 py-2 rounded-md bg-white/5 border border-white/10 text-slate-300 text-sm';
      formLogin.classList.remove('hidden');
      formSignup.classList.add('hidden');
    });
    tabSignup.addEventListener('click', () => {
      tabSignup.className = 'px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white text-sm';
      tabLogin.className = 'px-3 py-2 rounded-md bg-white/5 border border-white/10 text-slate-300 text-sm';
      formSignup.classList.remove('hidden');
      formLogin.classList.add('hidden');
    });

    // Card flip toggle via Details button (mobile/tap friendly)
    document.querySelectorAll('.flip-toggle').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.group');
        card.classList.toggle('flipped');
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0b0f1a]/70 border-b border-white/5">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.35)]">
<span className="text-white text-lg tracking-tight" style={{fontFamily: '\'Orbitron\',sans-serif', fontWeight: '600'}}>NX</span>
</div>
<span className="text-slate-100 text-lg tracking-tight hidden sm:block" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '500'}}>NEONX Store</span>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="text-slate-300/90 hover:text-white transition-colors duration-200" href="#">Home</a>
<a className="text-slate-300/90 hover:text-white transition-colors duration-200" href="#">Store</a>
<a className="text-slate-300/90 hover:text-white transition-colors duration-200" href="#">New</a>
<a className="text-slate-300/90 hover:text-white transition-colors duration-200" href="#">Deals</a>
</div>

<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center rounded-lg bg-white/5 border border-white/10 overflow-hidden focus-within:ring-2 focus-within:ring-fuchsia-500/40">
<i className="w-4 h-4 text-slate-400 ml-3" data-lucide="search"></i>
<input className="bg-transparent placeholder:text-slate-500 px-3 py-2.5 text-sm text-slate-100 focus:outline-none" placeholder="Search games" type="text"/>
</div>
<button className="px-3 py-2 rounded-md text-sm bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors" id="open-login" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '500'}}>Login</button>
<button className="relative p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors" id="cart-btn">
<i className="w-5 h-5 text-slate-200" data-lucide="shopping-cart"></i>
<span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-fuchsia-500 text-[10px] leading-[18px] text-white text-center shadow-[0_0_18px_rgba(217,70,239,0.65)]" id="cart-badge">0</span>
<span className="pointer-events-none absolute -top-1 -right-1 inline-flex h-[18px] w-[18px] rounded-full bg-fuchsia-500/50 animate-ping opacity-0" id="cart-pulse"></span>
</button>
</div>
</nav>
</header>

<section className="relative overflow-hidden">

<div className="absolute inset-0" id="hero-bg">
<img alt="Cinematic sci-fi backdrop" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(124,58,237,0.25),rgba(0,0,0,0))]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f1a]/40 to-[#0b0f1a]"></div>
</div>

<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32 flex flex-col md:flex-row items-center gap-10">
<div className="w-full md:w-1/2 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"></span>
          Featured Drop
        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.25)]" style={{fontFamily: '\'Orbitron\',sans-serif', fontWeight: '600'}}>
          Enter The Neon Frontier
        </h1>
<p className="mt-4 text-slate-300/90 text-base sm:text-lg max-w-xl">
          Experience next‑gen action with hyper‑real visuals, adaptive AI, and a synthwave-fueled universe. Pre-order now for exclusive skins and early access.
        </p>
<div className="mt-8 flex items-center gap-4">
<a className="group relative inline-flex items-center gap-3 rounded-lg px-5 py-3 text-slate-900 transition-transform will-change-transform hover:-translate-y-0.5" href="#" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '600', background: 'linear-gradient(135deg,#f0abfc, #a78bfa 40%, #22d3ee 100%)', boxShadow: '0 0 40px rgba(168,85,247,0.45)'}}>
<span className="absolute inset-0 rounded-lg ring-2 ring-fuchsia-400/50 group-hover:ring-cyan-300/70 transition-all"></span>
<i className="w-5 h-5 text-slate-900" data-lucide="play-circle"></i>
            Play Trailer
          </a>
<button className="px-5 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white transition-colors" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '500'}}>
            Add to Wishlist
          </button>
</div>

<div className="mt-10 grid grid-cols-3 max-w-md gap-6 text-center">
<div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur reveal">
<div className="text-2xl text-white tracking-tight" style={{fontFamily: '\'Orbitron\',sans-serif', fontWeight: '600'}}>120+</div>
<div className="text-xs text-slate-400">New Releases</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur reveal">
<div className="text-2xl text-white tracking-tight" style={{fontFamily: '\'Orbitron\',sans-serif', fontWeight: '600'}}>4K</div>
<div className="text-xs text-slate-400">Ultra Assets</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur reveal">
<div className="text-2xl text-white tracking-tight" style={{fontFamily: '\'Orbitron\',sans-serif', fontWeight: '600'}}>HDR</div>
<div className="text-xs text-slate-400">Cinematic</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 reveal">

<div className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-lg shadow-[0_0_80px_rgba(59,130,246,0.15)] tilt-card" style={{perspective: '1100px'}}>
<div className="relative">
<img alt="Featured game art" className="w-full h-[340px] object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0b0f1a] via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-5">
<div className="flex items-center justify-between">
<div>
<h3 className="text-xl tracking-tight text-white" style={{fontFamily: '\'Orbitron\',sans-serif', fontWeight: '600'}}>NEON FRONTIER</h3>
<p className="text-sm text-slate-300/80">Action • Sci‑Fi • Open World</p>
</div>
<button className="px-4 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white transition-colors border border-fuchsia-300/30" data-add="featured" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '500'}}>
                  $69.99
                </button>
</div>
</div>
</div>
</div>
<p className="mt-3 text-xs text-slate-400">Tip: Hover to feel the subtle 3D tilt.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
<div className="flex items-end justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white" style={{fontFamily: '\'Orbitron\',sans-serif', fontWeight: '600'}}>New Releases</h2>
<div className="flex gap-2">
<button className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors" id="carousel-prev"><i className="w-5 h-5 text-slate-200" data-lucide="chevron-left"></i></button>
<button className="p-2 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-colors" id="carousel-next"><i className="w-5 h-5 text-slate-200" data-lucide="chevron-right"></i></button>
</div>
</div>
<div className="mt-5 bg-white/5 border border-white/10 rounded-xl p-4 overflow-hidden">
<div className="relative" id="carousel">
<div className="flex gap-4 will-change-transform transition-transform duration-700 ease-out" id="carousel-track">


<div className="min-w-[240px] max-w-[240px] rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all tilt-card">
<div className="relative">
<img alt="Cyber Racer" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Racing</span>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<p className="text-sm text-white tracking-tight" style={{fontWeight: '600', fontFamily: '\'Manrope\',sans-serif'}}>Cyber Racer</p>
<span className="text-sm text-sky-300">$39.99</span>
</div>
<button className="mt-2 w-full py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors" data-add="">Add to cart</button>
</div>
</div>
<div className="min-w-[240px] max-w-[240px] rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all tilt-card">
<div className="relative">
<img alt="Arc Mage" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">RPG</span>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<p className="text-sm text-white tracking-tight" style={{fontWeight: '600', fontFamily: '\'Manrope\',sans-serif'}}>Arc Mage</p>
<span className="text-sm text-sky-300">$59.99</span>
</div>
<button className="mt-2 w-full py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors" data-add="">Add to cart</button>
</div>
</div>
<div className="min-w-[240px] max-w-[240px] rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all tilt-card">
<div className="relative">
<img alt="Void Tactics" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Strategy</span>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<p className="text-sm text-white tracking-tight" style={{fontWeight: '600', fontFamily: '\'Manrope\',sans-serif'}}>Void Tactics</p>
<span className="text-sm text-sky-300">$29.99</span>
</div>
<button className="mt-2 w-full py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors" data-add="">Add to cart</button>
</div>
</div>
<div className="min-w-[240px] max-w-[240px] rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all tilt-card">
<div className="relative">
<img alt="Indie Bloom" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Indie</span>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<p className="text-sm text-white tracking-tight" style={{fontWeight: '600', fontFamily: '\'Manrope\',sans-serif'}}>Indie Bloom</p>
<span className="text-sm text-sky-300">$14.99</span>
</div>
<button className="mt-2 w-full py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors" data-add="">Add to cart</button>
</div>
</div>
<div className="min-w-[240px] max-w-[240px] rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all tilt-card">
<div className="relative">
<img alt="Mecha Assault" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Action</span>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<p className="text-sm text-white tracking-tight" style={{fontWeight: '600', fontFamily: '\'Manrope\',sans-serif'}}>Mecha Assault</p>
<span className="text-sm text-sky-300">$49.99</span>
</div>
<button className="mt-2 w-full py-2 text-sm rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors" data-add="">Add to cart</button>
</div>
</div>
</div>
</div>
<p className="text-xs text-slate-400 mt-3">Auto-plays and pauses on hover. Use arrows to navigate.</p>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
<div className="flex items-center justify-between">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white" style={{fontFamily: '\'Orbitron\',sans-serif', fontWeight: '600'}}>Explore by Genre</h2>
</div>
<div className="relative mt-4 bg-white/5 border border-white/10 rounded-xl p-2">
<div className="relative flex flex-wrap gap-2" id="genre-tabs">
<button className="genre-pill px-3 py-1.5 rounded-md text-sm bg-white/10 border border-white/10 text-white hover:bg-white/15 transition-colors" data-genre="all" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '500'}}>All</button>
<button className="genre-pill px-3 py-1.5 rounded-md text-sm bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors" data-genre="action" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '500'}}>Action</button>
<button className="genre-pill px-3 py-1.5 rounded-md text-sm bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors" data-genre="rpg" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '500'}}>RPG</button>
<button className="genre-pill px-3 py-1.5 rounded-md text-sm bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors" data-genre="indie" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '500'}}>Indie</button>
<button className="genre-pill px-3 py-1.5 rounded-md text-sm bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors" data-genre="racing" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '500'}}>Racing</button>
<button className="genre-pill px-3 py-1.5 rounded-md text-sm bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition-colors" data-genre="strategy" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '500'}}>Strategy</button>

<span className="absolute h-8 rounded-md -z-10 transition-all duration-300" id="tab-underline" style={{boxShadow: '0 0 28px rgba(168,85,247,0.35), inset 0 0 0 1px rgba(255,255,255,0.08)', background: 'linear-gradient(135deg,rgba(240,171,252,0.15),rgba(167,139,250,0.15))'}}></span>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-8">
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

<div className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden reveal tilt-card">
<div className="relative">
<img alt="Night Runner" className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(60% 40% at 60% 80%, rgba(34,211,238,0.25), transparent 60%)'}}></div>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Action</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-white tracking-tight" style={{fontFamily: '\'Manrope\',sans-serif', fontWeight: '600'}}>Night Runner</h3>
<span className="text-sky-300">$49.99</span>
</div>
<p className="text-sm text-slate-400 mt-1">Fast-paced urban battles under neon skies.</p>
<div className="mt-4 flex items-center justify-between">
<button className="px-3 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white text-sm transition-colors border border-fuchsia-300/30" data-add="">Add to cart</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm flip-toggle">Details</button>
</div>
</div>

<div className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-500 group-[.flipped]:opacity-100 bg-black/70 backdrop-blur-md p-4">
<div className="h-full flex flex-col justify-between">
<div>
<h4 className="text-white tracking-tight" style={{fontFamily: '\'Manrope\',sans-serif', fontWeight: '600'}}>Night Runner</h4>
<p className="text-sm text-slate-300 mt-2">Parkour combat, reactive AI, dynamic soundtrack. Supports 120 FPS.</p>
</div>
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">Singleplayer</span>
<span className="text-xs px-2 py-1 rounded bg-white/10 border border-white/10">Controller</span>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden reveal tilt-card" data-genre="rpg">
<div className="relative">
<img alt="Elder Realms" className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">RPG</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-white tracking-tight" style={{fontFamily: '\'Manrope\',sans-serif', fontWeight: '600'}}>Elder Realms</h3>
<span className="text-sky-300">$59.99</span>
</div>
<p className="text-sm text-slate-400 mt-1">Forge destinies in a living fantasy world.</p>
<div className="mt-4 flex items-center justify-between">
<button className="px-3 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white text-sm transition-colors border border-fuchsia-300/30" data-add="">Add to cart</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm flip-toggle">Details</button>
</div>
</div>
</div>
<div className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden reveal tilt-card" data-genre="indie">
<div className="relative">
<img alt="Pixel Harbor" className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Indie</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-white tracking-tight" style={{fontFamily: '\'Manrope\',sans-serif', fontWeight: '600'}}>Pixel Harbor</h3>
<span className="text-sky-300">$12.99</span>
</div>
<p className="text-sm text-slate-400 mt-1">Cozy exploration with relaxing synth vibes.</p>
<div className="mt-4 flex items-center justify-between">
<button className="px-3 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white text-sm transition-colors border border-fuchsia-300/30" data-add="">Add to cart</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm flip-toggle">Details</button>
</div>
</div>
</div>
<div className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden reveal tilt-card" data-genre="racing">
<div className="relative">
<img alt="Neon Drift" className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Racing</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-white tracking-tight" style={{fontFamily: '\'Manrope\',sans-serif', fontWeight: '600'}}>Neon Drift</h3>
<span className="text-sky-300">$34.99</span>
</div>
<p className="text-sm text-slate-400 mt-1">Street circuits lit by radiant holograms.</p>
<div className="mt-4 flex items-center justify-between">
<button className="px-3 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white text-sm transition-colors border border-fuchsia-300/30" data-add="">Add to cart</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm flip-toggle">Details</button>
</div>
</div>
</div>
<div className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden reveal tilt-card" data-genre="strategy">
<div className="relative">
<img alt="Star Forge" className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Strategy</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-white tracking-tight" style={{fontFamily: '\'Manrope\',sans-serif', fontWeight: '600'}}>Star Forge</h3>
<span className="text-sky-300">$27.99</span>
</div>
<p className="text-sm text-slate-400 mt-1">Command fleets with tactical precision.</p>
<div className="mt-4 flex items-center justify-between">
<button className="px-3 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white text-sm transition-colors border border-fuchsia-300/30" data-add="">Add to cart</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm flip-toggle">Details</button>
</div>
</div>
</div>
<div className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden reveal tilt-card" data-genre="action">
<div className="relative">
<img alt="Shadow Ops" className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Action</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-white tracking-tight" style={{fontFamily: '\'Manrope\',sans-serif', fontWeight: '600'}}>Shadow Ops</h3>
<span className="text-sky-300">$44.99</span>
</div>
<p className="text-sm text-slate-400 mt-1">Stealth meets high-octane firefights.</p>
<div className="mt-4 flex items-center justify-between">
<button className="px-3 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white text-sm transition-colors border border-fuchsia-300/30" data-add="">Add to cart</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm flip-toggle">Details</button>
</div>
</div>
</div>
<div className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden reveal tilt-card" data-genre="rpg">
<div className="relative">
<img alt="Mythborne" className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">RPG</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-white tracking-tight" style={{fontFamily: '\'Manrope\',sans-serif', fontWeight: '600'}}>Mythborne</h3>
<span className="text-sky-300">$54.99</span>
</div>
<p className="text-sm text-slate-400 mt-1">Epic questlines and branching narratives.</p>
<div className="mt-4 flex items-center justify-between">
<button className="px-3 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white text-sm transition-colors border border-fuchsia-300/30" data-add="">Add to cart</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm flip-toggle">Details</button>
</div>
</div>
</div>
<div className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden reveal tilt-card" data-genre="indie">
<div className="relative">
<img alt="Solar Seeds" className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1536924430914-91f9e2041b83?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Indie</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-white tracking-tight" style={{fontFamily: '\'Manrope\',sans-serif', fontWeight: '600'}}>Solar Seeds</h3>
<span className="text-sky-300">$9.99</span>
</div>
<p className="text-sm text-slate-400 mt-1">Chill farming meets astro exploration.</p>
<div className="mt-4 flex items-center justify-between">
<button className="px-3 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white text-sm transition-colors border border-fuchsia-300/30" data-add="">Add to cart</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm flip-toggle">Details</button>
</div>
</div>
</div>
<div className="group relative rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all overflow-hidden reveal tilt-card" data-genre="strategy">
<div className="relative">
<img alt="Hex Dominion" className="h-48 w-full object-cover group-hover:scale-[1.03] transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="absolute top-3 left-3 text-xs px-2 py-1 rounded bg-black/60 border border-white/10">Strategy</span>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<h3 className="text-white tracking-tight" style={{fontFamily: '\'Manrope\',sans-serif', fontWeight: '600'}}>Hex Dominion</h3>
<span className="text-sky-300">$24.99</span>
</div>
<p className="text-sm text-slate-400 mt-1">Hex-based warfare with roguelite depth.</p>
<div className="mt-4 flex items-center justify-between">
<button className="px-3 py-2 rounded-md bg-fuchsia-500/90 hover:bg-fuchsia-400 text-white text-sm transition-colors border border-fuchsia-300/30" data-add="">Add to cart</button>
<button className="px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-sm flip-toggle">Details</button>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-16 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-400 flex items-center justify-center">
<span className="text-white text-sm tracking-tight" style={{fontFamily: '\'Orbitron\',sans-serif', fontWeight: '600'}}>NX</span>
</div>
<p className="text-sm text-slate-400">© 2025 NEONX. All rights reserved.</p>
</div>
<div className="flex items-center gap-5">
<a className="text-slate-400 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#">Support</a>
<a className="text-slate-400 hover:text-white transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i> <span>Social</span>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden" id="auth-modal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
<div className="relative mx-auto max-w-md w-full mt-24 p-6">
<div className="rounded-xl bg-white/5 border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.25)]">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<h3 className="text-lg tracking-tight text-white" style={{fontFamily: '\'Orbitron\',sans-serif', fontWeight: '600'}}>Welcome Back</h3>
<button className="p-2 rounded-md hover:bg-white/10 transition-colors" id="close-login">
<i className="w-4 h-4 text-slate-300" data-lucide="x"></i>
</button>
</div>
<div className="p-5">
<div className="grid grid-cols-2 gap-2 mb-4">
<button className="px-3 py-2 rounded-md bg-white/10 border border-white/10 text-white text-sm" id="tab-login">Login</button>
<button className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-slate-300 text-sm" id="tab-signup">Sign up</button>
</div>
<form className="space-y-3" id="login-form">
<div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3">
<i className="w-4 h-4 text-slate-400" data-lucide="mail"></i>
<input className="flex-1 bg-transparent py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Email" type="email"/>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3">
<i className="w-4 h-4 text-slate-400" data-lucide="lock"></i>
<input className="flex-1 bg-transparent py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Password" type="password"/>
</div>
<button className="w-full py-3 rounded-lg text-slate-900" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '600', background: 'linear-gradient(135deg,#f0abfc, #a78bfa 40%, #22d3ee 100%)', boxShadow: '0 0 30px rgba(168,85,247,0.35)'}} type="submit">
              Continue
            </button>
</form>
<form className="space-y-3 hidden" id="signup-form">
<div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3">
<i className="w-4 h-4 text-slate-400" data-lucide="user"></i>
<input className="flex-1 bg-transparent py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Username" type="text"/>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3">
<i className="w-4 h-4 text-slate-400" data-lucide="mail"></i>
<input className="flex-1 bg-transparent py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Email" type="email"/>
</div>
<div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3">
<i className="w-4 h-4 text-slate-400" data-lucide="lock"></i>
<input className="flex-1 bg-transparent py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Password" type="password"/>
</div>
<button className="w-full py-3 rounded-lg text-slate-900" style={{fontFamily: '\'Poppins\',sans-serif', fontWeight: '600', background: 'linear-gradient(135deg,#f0abfc, #a78bfa 40%, #22d3ee 100%)', boxShadow: '0 0 30px rgba(168,85,247,0.35)'}} type="submit">
              Create Account
            </button>
</form>
</div>
</div>
</div>
</div>



    </>
  );
}
