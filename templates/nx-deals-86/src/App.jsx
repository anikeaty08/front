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



      // Initialize icons with 1.5 stroke width
      function renderIcons() {
        if (window.lucide) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      }

      // Utility: show/hide modal + backdrop
      function openModal(id) {
        const el = document.getElementById(id);
        const backdrop = document.getElementById('backdrop');
        el.classList.remove('hidden');
        el.classList.add('flex');
        backdrop.classList.remove('pointer-events-none', 'opacity-0');
        backdrop.classList.add('opacity-100');
      }
      function closeModal(id) {
        const el = document.getElementById(id);
        const backdrop = document.getElementById('backdrop');
        el.classList.add('hidden');
        el.classList.remove('flex');
        backdrop.classList.add('pointer-events-none', 'opacity-0');
        backdrop.classList.remove('opacity-100');
      }

      // Account state
      const state = {
        user: null,
      };

      function nextMonthBoundary() {
        const d = new Date();
        const next = new Date(d.getFullYear(), d.getMonth() + 1, 1);
        return next;
      }

      function formatDate(d) {
        return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
      }

      function computeMonthlyOffer() {
        // Simple deterministic monthly rotation based on year+month
        const now = new Date();
        const key = now.getFullYear() * 100 + (now.getMonth() + 1);
        const offers = [
          { title: '60% off any accessory', desc: 'Apply at checkout on select accessories. One-time use this month.' },
          { title: '$25 instant credit', desc: 'Credit applies on orders over $100 this month only.' },
          { title: 'Free 2‑day shipping', desc: 'Automatically applied to your next order this month.' },
          { title: '40% off top-seller', desc: 'Exclusive discount on our best-selling item of the month.' },
          { title: 'Buy 1, get 1 50% off', desc: 'Mix & match eligible items all month.' },
          { title: '30% off sitewide', desc: 'Limited-time sitewide discount for members.' },
        ];
        const sel = offers[key % offers.length];
        return sel;
      }

      function updateRevealDates() {
        const next = nextMonthBoundary();
        const label = 'Next update: ' + formatDate(next);
        const nextUpdateLabel = document.getElementById('nextUpdateLabel');
        const nextReveal = document.getElementById('nextReveal');
        const nextRevealSmall = document.getElementById('nextRevealSmall');
        if (nextUpdateLabel) nextUpdateLabel.textContent = label;
        if (nextReveal) nextReveal.textContent = formatDate(next);
        if (nextRevealSmall) nextRevealSmall.textContent = formatDate(next);
      }

      function setAuthUI() {
        const locked = document.getElementById('mysteryLocked');
        const content = document.getElementById('mysteryContent');
        const headerRevealBtn = document.getElementById('headerRevealBtn');
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const mobileLoginBtn = document.getElementById('mobileLoginBtn');
        const mobileSignupBtn = document.getElementById('mobileSignupBtn');
        const accountMenu = document.getElementById('accountMenu');
        const accountEmail = document.getElementById('accountEmail');
        const accountEmailMenu = document.getElementById('accountEmailMenu');

        if (state.user) {
          locked.classList.add('hidden');
          content.classList.remove('hidden');
          headerRevealBtn?.classList.add('hidden');
          loginBtn?.classList.add('hidden');
          signupBtn?.classList.add('hidden');
          mobileLoginBtn?.classList.add('hidden');
          mobileSignupBtn?.classList.add('hidden');
          accountMenu?.classList.remove('hidden');
          if (accountEmail) accountEmail.textContent = state.user.email;
          if (accountEmailMenu) accountEmailMenu.textContent = state.user.email;

          // Fill offer
          const { title, desc } = computeMonthlyOffer();
          document.getElementById('mysteryTitle').textContent = title;
          document.getElementById('mysteryDesc').textContent = desc;
        } else {
          locked.classList.remove('hidden');
          content.classList.add('hidden');
          headerRevealBtn?.classList.remove('hidden');
          loginBtn?.classList.remove('hidden');
          signupBtn?.classList.remove('hidden');
          mobileLoginBtn?.classList.remove('hidden');
          mobileSignupBtn?.classList.remove('hidden');
          accountMenu?.classList.add('hidden');
        }
      }

      function loadUser() {
        try {
          const raw = localStorage.getItem('nx_user');
          state.user = raw ? JSON.parse(raw) : null;
        } catch (e) {
          state.user = null;
        }
        setAuthUI();
      }

      function saveUser(user) {
        localStorage.setItem('nx_user', JSON.stringify(user));
        state.user = user;
        setAuthUI();
      }

      function clearUser() {
        localStorage.removeItem('nx_user');
        state.user = null;
        setAuthUI();
      }

      // Event wiring
      document.addEventListener('DOMContentLoaded', () => {
        renderIcons();
        updateRevealDates();
        loadUser();
        document.getElementById('year').textContent = new Date().getFullYear();

        // Toggle mobile drawer
        const mobileBtn = document.getElementById('mobileMenuBtn');
        const mobileDrawer = document.getElementById('mobileDrawer');
        mobileBtn?.addEventListener('click', () => {
          const open = mobileDrawer.style.maxHeight && mobileDrawer.style.maxHeight !== '0px';
          mobileDrawer.style.maxHeight = open ? '0px' : '260px';
        });

        // Header buttons
        document.getElementById('signupBtn')?.addEventListener('click', () => openModal('signupModal'));
        document.getElementById('loginBtn')?.addEventListener('click', () => openModal('loginModal'));
        document.getElementById('mobileSignupBtn')?.addEventListener('click', () => openModal('signupModal'));
        document.getElementById('mobileLoginBtn')?.addEventListener('click', () => openModal('loginModal'));
        document.getElementById('headerRevealBtn')?.addEventListener('click', () => openModal('loginModal'));

        // Mystery buttons
        document.getElementById('unlockSignup')?.addEventListener('click', () => openModal('signupModal'));
        document.getElementById('unlockLogin')?.addEventListener('click', () => openModal('loginModal'));
        document.getElementById('ctaReveal')?.addEventListener('click', (e) => {
          // Let anchor navigate to section; also nudge auth
          if (!state.user) setTimeout(() => openModal('signupModal'), 300);
        });

        // Close modal handlers
        document.querySelectorAll('[data-close]').forEach((btn) => {
          btn.addEventListener('click', (e) => {
            const id = btn.getAttribute('data-close');
            closeModal(id);
          });
        });
        document.getElementById('backdrop').addEventListener('click', () => {
          closeModal('signupModal');
          closeModal('loginModal');
        });

        // Toggle password visibility
        document.querySelectorAll('[data-toggle]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-toggle');
            const input = document.getElementById(id);
            const icon = btn.querySelector('i');
            if (input.type === 'password') {
              input.type = 'text';
              icon.setAttribute('data-lucide', 'eye-off');
            } else {
              input.type = 'password';
              icon.setAttribute('data-lucide', 'eye');
            }
            renderIcons();
          });
        });

        // Account dropdown
        const accountBtn = document.getElementById('accountBtn');
        const accountDropdown = document.getElementById('accountDropdown');
        accountBtn?.addEventListener('click', () => {
          const isHidden = accountDropdown.classList.contains('hidden');
          accountDropdown.classList.toggle('hidden', !isHidden);
        });
        document.addEventListener('click', (e) => {
          if (!document.getElementById('accountMenu').contains(e.target)) {
            accountDropdown?.classList.add('hidden');
          }
        });
        document.getElementById('logoutBtn')?.addEventListener('click', () => {
          clearUser();
          accountDropdown?.classList.add('hidden');
        });

        // Forms
        document.getElementById('signupForm')?.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = e.target.querySelector('input[type="email"]').value.trim();
          if (!email) return;
          saveUser({ email });
          closeModal('signupModal');
          // Smooth scroll to mystery
          document.getElementById('mystery').scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('loginForm')?.addEventListener('submit', (e) => {
          e.preventDefault();
          const email = document.getElementById('loginEmail').value.trim();
          if (!email) return;
          saveUser({ email });
          closeModal('loginModal');
          document.getElementById('mystery').scrollIntoView({ behavior: 'smooth' });
        });
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
      

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity" id="backdrop"></div>

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">

<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-white/10 ring-1 ring-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
<span className="text-sm font-semibold tracking-tight">NX</span>
</div>
<span className="text-sm text-white/70 group-hover:text-white transition-colors">Deals</span>
</a>

<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#products">Products</a>
<a className="text-sm text-white/70 hover:text-white transition-colors inline-flex items-center gap-1.5" href="#mystery">
                Mystery Promo
                <i className="w-4 h-4" data-lucide="sparkles"></i>
</a>
<a className="text-sm text-white/70 hover:text-white transition-colors" href="#how-it-works">How it works</a>
</nav>

<div className="flex items-center gap-2">
<button className="hidden md:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" id="headerRevealBtn">
<i className="w-4 h-4" data-lucide="gift"></i>
                Reveal Mystery
              </button>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-white/0 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" id="loginBtn">
<i className="w-4 h-4" data-lucide="log-in"></i>
                Log in
              </button>
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-indigo-500 hover:bg-indigo-400 text-black ring-1 ring-indigo-400/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" id="signupBtn">
<i className="w-4 h-4" data-lucide="user-plus"></i>
                Sign up
              </button>
<div className="hidden relative" id="accountMenu">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" id="accountBtn">
<i className="w-4 h-4" data-lucide="user"></i>
<span className="truncate max-w-[120px] text-white/80" id="accountEmail"></span>
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="absolute right-0 mt-2 w-56 rounded-lg bg-neutral-900 ring-1 ring-white/10 shadow-xl p-1 hidden" id="accountDropdown">
<div className="px-3 py-2">
<p className="text-xs text-white/50">Signed in as</p>
<p className="text-sm text-white/80 truncate" id="accountEmailMenu"></p>
</div>
<div className="my-1 h-px bg-white/10"></div>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm text-white/80 hover:text-white hover:bg-white/5 focus:outline-none" id="logoutBtn">
<i className="w-4 h-4" data-lucide="log-out"></i>
                    Log out
                  </button>
</div>
</div>
</div>

<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md bg-white/0 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden origin-top overflow-hidden max-h-0 transition-[max-height] duration-300" id="mobileDrawer">
<div className="px-4 pb-4 border-t border-white/5">
<nav className="flex flex-col gap-2 pt-3">
<a className="text-sm text-white/80 hover:text-white px-3 py-2 rounded-md hover:bg-white/5" href="#products">Products</a>
<a className="text-sm text-white/80 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 inline-flex items-center gap-2" href="#mystery">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                Mystery Promo
              </a>
<a className="text-sm text-white/80 hover:text-white px-3 py-2 rounded-md hover:bg-white/5" href="#how-it-works">How it works</a>
<div className="h-px bg-white/10 my-2"></div>
<div className="flex gap-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm bg-white/0 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all" id="mobileLoginBtn">
<i className="w-4 h-4" data-lucide="log-in"></i>
                  Log in
                </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm bg-indigo-500 hover:bg-indigo-400 text-black ring-1 ring-indigo-400/40 transition-all" id="mobileSignupBtn">
<i className="w-4 h-4" data-lucide="user-plus"></i>
                  Sign up
                </button>
</div>
</nav>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0 -z-10">
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.18),transparent_70%)]"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
<i className="w-4 h-4" data-lucide="badge-percent"></i>
              Hot deals updated daily
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              Save on 10 curated products — then unlock the monthly Mystery Promo
            </h1>
<p className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl">
              Sign up to reveal an exclusive offer that changes every month. It’s limited, eye-catching, and worth the click.
            </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm bg-indigo-500 hover:bg-indigo-400 text-black ring-1 ring-indigo-400/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" href="#mystery" id="ctaReveal">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                Reveal Mystery Promo
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" href="#products">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
                Browse Products
              </a>
<div className="flex items-center gap-2 text-xs text-white/50">
<i className="w-4 h-4" data-lucide="shield-check"></i>
                No spam. One email to confirm.
              </div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16" id="products">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Today’s Promotions</h2>
<p className="text-sm text-white/60 mt-1">Handpicked products, limited-time discounts.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors" href="#mystery">
            Don’t miss the Mystery Promo
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">


<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all bg-neutral-900/40">
<div className="relative">
<img alt="Wireless Noise-Cancelling Headphones" className="h-48 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/90 text-black text-xs px-2.5 py-1 ring-1 ring-indigo-300/60">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
                25% off
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Wireless Noise-Cancelling Headphones</h3>
<p className="text-sm text-white/60 mt-1">Immersive sound with 30h battery.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold">$149</span>
<span className="text-xs text-white/50 line-through">$199</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                    Details
                    <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all bg-neutral-900/40">
<div className="relative">
<img alt="Smart Home Speaker" className="h-48 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/90 text-black text-xs px-2.5 py-1 ring-1 ring-indigo-300/60">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
                30% off
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Smart Home Speaker</h3>
<p className="text-sm text-white/60 mt-1">Room-filling sound with voice control.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold">$69</span>
<span className="text-xs text-white/50 line-through">$99</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                    Details
                    <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all bg-neutral-900/40">
<div className="relative">
<img alt="Ergonomic Office Chair" className="h-48 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/90 text-black text-xs px-2.5 py-1 ring-1 ring-indigo-300/60">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
                18% off
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Ergonomic Office Chair</h3>
<p className="text-sm text-white/60 mt-1">Lumbar support with breathable mesh.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold">$229</span>
<span className="text-xs text-white/50 line-through">$279</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                    Details
                    <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all bg-neutral-900/40">
<div className="relative">
<img alt="Mechanical Keyboard" className="h-48 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/90 text-black text-xs px-2.5 py-1 ring-1 ring-indigo-300/60">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
                15% off
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Mechanical Keyboard</h3>
<p className="text-sm text-white/60 mt-1">Hot-swappable switches, RGB backlight.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold">$102</span>
<span className="text-xs text-white/50 line-through">$120</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                    Details
                    <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all bg-neutral-900/40">
<div className="relative">
<img alt="4K Monitor 27-inch" className="h-48 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/90 text-black text-xs px-2.5 py-1 ring-1 ring-indigo-300/60">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
                22% off
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">4K Monitor 27-inch</h3>
<p className="text-sm text-white/60 mt-1">Crisp IPS panel with HDR support.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold">$389</span>
<span className="text-xs text-white/50 line-through">$499</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                    Details
                    <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all bg-neutral-900/40">
<div className="relative">
<img alt="Fitness Smartwatch" className="h-48 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/90 text-black text-xs px-2.5 py-1 ring-1 ring-indigo-300/60">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
                20% off
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Fitness Smartwatch</h3>
<p className="text-sm text-white/60 mt-1">Heart rate, GPS, and sleep insights.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold">$159</span>
<span className="text-xs text-white/50 line-through">$199</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                    Details
                    <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all bg-neutral-900/40">
<div className="relative">
<img alt="Gaming Mouse Pro" className="h-48 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/90 text-black text-xs px-2.5 py-1 ring-1 ring-indigo-300/60">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
                28% off
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Gaming Mouse Pro</h3>
<p className="text-sm text-white/60 mt-1">Low-latency sensor, 7 programmable keys.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold">$43</span>
<span className="text-xs text-white/50 line-through">$59</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                    Details
                    <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all bg-neutral-900/40">
<div className="relative">
<img alt="Portable SSD 1TB" className="h-48 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/90 text-black text-xs px-2.5 py-1 ring-1 ring-indigo-300/60">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
                26% off
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Portable SSD 1TB</h3>
<p className="text-sm text-white/60 mt-1">USB-C Gen2 speeds in your pocket.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold">$109</span>
<span className="text-xs text-white/50 line-through">$149</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                    Details
                    <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all bg-neutral-900/40">
<div className="relative">
<img alt="Drone Mini 4K" className="h-48 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/90 text-black text-xs px-2.5 py-1 ring-1 ring-indigo-300/60">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
                12% off
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Drone Mini 4K</h3>
<p className="text-sm text-white/60 mt-1">Compact, stabilized 4K footage.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold">$439</span>
<span className="text-xs text-white/50 line-through">$499</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                    Details
                    <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</article>

<article className="group rounded-xl overflow-hidden ring-1 ring-white/10 hover:ring-white/20 transition-all bg-neutral-900/40">
<div className="relative">
<img alt="Espresso Maker Pro" className="h-48 w-full object-cover group-hover:opacity-95 transition-opacity" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-indigo-500/90 text-black text-xs px-2.5 py-1 ring-1 ring-indigo-300/60">
<i className="w-3.5 h-3.5" data-lucide="badge-percent"></i>
                35% off
              </div>
</div>
<div className="p-4">
<h3 className="font-medium tracking-tight">Espresso Maker Pro</h3>
<p className="text-sm text-white/60 mt-1">Barista-quality shots at home.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-baseline gap-2">
<span className="text-lg font-semibold">$259</span>
<span className="text-xs text-white/50 line-through">$399</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-xs bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                    Add
                  </button>
<button className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-white transition-colors">
                    Details
                    <i className="w-3.5 h-3.5" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>
</article>
</div>
</section>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px bg-white/10"></div>
</div>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16" id="mystery">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Monthly Mystery Promotion</h2>
<span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
<i className="w-3.5 h-3.5" data-lucide="calendar-clock"></i>
              Updates monthly
            </span>
</div>
<p className="hidden sm:block text-sm text-white/50" id="nextUpdateLabel"></p>
</div>
<div className="relative mt-6 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-neutral-900/40">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_20%,rgba(99,102,241,0.25),transparent_70%)]"></div>

<div className="relative px-6 sm:px-10 py-10 sm:py-14" id="mysteryLocked">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 rounded-md bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs text-white/70">
<i className="w-4 h-4" data-lucide="lock"></i>
                Locked — sign up or log in to reveal
              </div>
<h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
                This month’s secret deal is waiting for you
              </h3>
<p className="mt-3 text-white/70">
                Join free in seconds to unlock the limited-time mystery offer. It resets monthly, so don’t miss out.
              </p>
<ul className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/70">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i>
                  Exclusive discount
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i>
                  Limited stock
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-400" data-lucide="check-circle-2"></i>
                  Refreshes monthly
                </li>
</ul>
<div className="mt-6 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm bg-indigo-500 hover:bg-indigo-400 text-black ring-1 ring-indigo-400/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400" id="unlockSignup">
<i className="w-4 h-4" data-lucide="user-plus"></i>
                  Sign up to reveal
                </button>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" id="unlockLogin">
<i className="w-4 h-4" data-lucide="log-in"></i>
                  I already have an account
                </button>
<span className="text-xs text-white/50">Next reveal: <span id="nextRevealSmall">—</span></span>
</div>
</div>

<div className="absolute -right-6 sm:-right-8 -top-6 sm:-top-8 rotate-12">
<div className="rounded-xl bg-indigo-500 text-black px-4 py-2 ring-1 ring-black/10 shadow-xl shadow-indigo-500/30">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span className="text-sm font-medium tracking-tight">Up to 60% off</span>
</div>
</div>
</div>
</div>

<div className="hidden relative px-6 sm:px-10 py-10 sm:py-14" id="mysteryContent">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<div className="inline-flex items-center gap-2 rounded-md bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-400/30 px-3 py-1.5 text-xs">
<i className="w-4 h-4" data-lucide="unlock"></i>
                  Unlocked — exclusive for members
                </div>
<h3 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
<span className="text-white">Mystery Promo:</span>
<span className="text-emerald-300" id="mysteryTitle">Loading...</span>
</h3>
<p className="mt-3 text-white/70" id="mysteryDesc">Loading description...</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm bg-emerald-400 hover:bg-emerald-300 text-black ring-1 ring-emerald-300/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
<i className="w-4 h-4" data-lucide="gift"></i>
                    Claim Offer
                  </button>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-white/20 transition-all" href="#products">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
                    Continue shopping
                  </a>
<span className="text-xs text-white/50">Resets on <span id="nextReveal">—</span></span>
</div>
</div>
<div className="lg:col-span-1">
<div className="relative rounded-xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Mystery product preview" className="h-56 w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
<div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 text-white/80 text-xs px-2.5 py-1 ring-1 ring-white/10">
<i className="w-3.5 h-3.5 text-amber-300" data-lucide="flame"></i>
                    Limited time
                  </div>
</div>
<div className="mt-5 rounded-xl ring-1 ring-white/10 p-4 bg-neutral-900/40">
<h4 className="font-medium tracking-tight">What’s inside?</h4>
<ul className="mt-3 space-y-2 text-sm text-white/70">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check"></i>
                      Members-only pricing
                    </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check"></i>
                      Priority inventory
                    </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-300" data-lucide="check"></i>
                      One claim per account
                    </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16" id="how-it-works">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How the Mystery Promo works</h2>
<div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
<div className="rounded-xl ring-1 ring-white/10 bg-neutral-900/40 p-5">
<div className="flex items-center gap-2 text-white/80">
<i className="w-5 h-5" data-lucide="user-plus"></i>
<span className="text-sm font-medium">Create your account</span>
</div>
<p className="mt-2 text-sm text-white/60">It’s quick and free. We’ll use your email to save access to the monthly deal.</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-neutral-900/40 p-5">
<div className="flex items-center gap-2 text-white/80">
<i className="w-5 h-5" data-lucide="unlock"></i>
<span className="text-sm font-medium">Unlock and reveal</span>
</div>
<p className="mt-2 text-sm text-white/60">Once signed in, the mystery card reveals the current month’s offer instantly.</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-neutral-900/40 p-5">
<div className="flex items-center gap-2 text-white/80">
<i className="w-5 h-5" data-lucide="calendar-days"></i>
<span className="text-sm font-medium">Refreshes every month</span>
</div>
<p className="mt-2 text-sm text-white/60">Deals rotate monthly. Come back to check what’s new.</p>
</div>
</div>
</section>

<footer className="mt-auto border-t border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-white/10 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-[11px] font-semibold tracking-tight">NX</span>
</div>
<p className="text-xs text-white/50">© <span id="year"></span> NX Deals. All rights reserved.</p>
</div>
<div className="flex items-center gap-4 text-xs text-white/50">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="inline-flex items-center gap-1 hover:text-white transition-colors" href="#mystery">
                Mystery Promo
                <i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
</a>
</div>
</div>
</div>
</footer>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="signupModal">
<div className="w-full max-w-md rounded-2xl bg-neutral-900 ring-1 ring-white/10 shadow-2xl overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white/80" data-lucide="user-plus"></i>
<h3 className="text-sm font-medium">Create your account</h3>
</div>
<button className="rounded-md p-1 hover:bg-white/5 focus:outline-none" data-close="signupModal">
<i className="w-5 h-5 text-white/70" data-lucide="x"></i>
</button>
</div>
<form className="px-5 py-4 space-y-4" id="signupForm">
<div>
<label className="block text-xs text-white/60 mb-1">Email</label>
<input className="w-full rounded-md bg-neutral-800/70 border border-white/10 px-3 py-2 text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-white/60 mb-1">Password</label>
<div className="relative">
<input className="w-full rounded-md bg-neutral-800/70 border border-white/10 px-3 py-2 pr-10 text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="signupPassword" minlength="6" placeholder="••••••••" required="" type="password"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/5" data-toggle="signupPassword" type="button">
<i className="w-4 h-4 text-white/60" data-lucide="eye"></i>
</button>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm bg-indigo-500 hover:bg-indigo-400 text-black ring-1 ring-indigo-400/40 transition-all" type="submit">
<i className="w-4 h-4" data-lucide="sparkles"></i>
            Create account &amp; reveal
          </button>
<p className="text-xs text-white/50">By continuing, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>
<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="loginModal">
<div className="w-full max-w-md rounded-2xl bg-neutral-900 ring-1 ring-white/10 shadow-2xl overflow-hidden">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-white/80" data-lucide="log-in"></i>
<h3 className="text-sm font-medium">Welcome back</h3>
</div>
<button className="rounded-md p-1 hover:bg-white/5 focus:outline-none" data-close="loginModal">
<i className="w-5 h-5 text-white/70" data-lucide="x"></i>
</button>
</div>
<form className="px-5 py-4 space-y-4" id="loginForm">
<div>
<label className="block text-xs text-white/60 mb-1">Email</label>
<input className="w-full rounded-md bg-neutral-800/70 border border-white/10 px-3 py-2 text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="loginEmail" placeholder="you@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-white/60 mb-1">Password</label>
<div className="relative">
<input className="w-full rounded-md bg-neutral-800/70 border border-white/10 px-3 py-2 pr-10 text-sm placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-indigo-500" id="loginPassword" minlength="6" placeholder="••••••••" required="" type="password"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/5" data-toggle="loginPassword" type="button">
<i className="w-4 h-4 text-white/60" data-lucide="eye"></i>
</button>
</div>
</div>
<div className="flex items-center justify-between">
<a className="text-xs text-white/50 hover:text-white/70" href="#">Forgot password?</a>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm bg-indigo-500 hover:bg-indigo-400 text-black ring-1 ring-indigo-400/40 transition-all" type="submit">
<i className="w-4 h-4" data-lucide="unlock"></i>
            Log in &amp; reveal
          </button>
</form>
</div>
</div>


    </>
  );
}
