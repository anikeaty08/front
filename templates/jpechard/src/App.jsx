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



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
      });

      const menuToggle = document.getElementById('menuToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          const icon = menuToggle.querySelector('svg');
          if (icon) {
            const isMenu = icon.getAttribute('data-icon') === 'menu';
            menuToggle.innerHTML = isMenu
              ? '<i data-lucide="x" style="width:18px;height:18px;stroke-width:1.5"></i>'
              : '<i data-lucide="menu" style="width:18px;height:18px;stroke-width:1.5"></i>';
            lucide.createIcons();
          }
        });

        mobileMenu.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
        });
      }

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const targetId = anchor.getAttribute('href');
          if (targetId && targetId.length > 1) {
            const el = document.querySelector(targetId);
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        });
      });

      const searchInput = document.getElementById('projectSearch');
      const projectCards = Array.from(document.querySelectorAll('.project-card'));
      const filterButtons = Array.from(document.querySelectorAll('.project-filter'));
      let activeFilter = 'all';

      function applyProjectFilters() {
        const q = (searchInput?.value || '').toLowerCase().trim();
        projectCards.forEach(card => {
          const tags = (card.getAttribute('data-tags') || '').toLowerCase();
          const text = card.innerText.toLowerCase();
          const matchSearch = !q || text.includes(q) || tags.includes(q);
          const matchFilter = activeFilter === 'all' || tags.includes(activeFilter);
          const show = matchSearch && matchFilter;
          card.style.display = show ? '' : 'none';
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', applyProjectFilters);
      }
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          activeFilter = btn.dataset.filter || 'all';
          filterButtons.forEach(b => b.classList.remove('ring-2', 'ring-cyan-500'));
          btn.classList.add('ring-2', 'ring-cyan-500');
          applyProjectFilters();
        });
      });
      const defaultFilter = document.querySelector('.project-filter[data-filter="all"]');
      if (defaultFilter) defaultFilter.classList.add('ring-2', 'ring-cyan-500');

      const revealEls = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

      if ('IntersectionObserver' in window) {
        revealEls.forEach(el => io.observe(el));
      } else {
        revealEls.forEach(el => el.classList.remove('opacity-0', 'translate-y-4'));
      }

      // Initial render for projects
      applyProjectFilters();

      // Accessibility state for filter buttons
      filterButtons.forEach(b => b.setAttribute('aria-pressed', 'false'));
      if (defaultFilter) defaultFilter.setAttribute('aria-pressed', 'true');
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          filterButtons.forEach(b => b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
        });
      });

      // Ensure external links are safe
      document.querySelectorAll('a[target="_blank"]').forEach(a => {
        if (!a.rel) a.rel = 'noopener noreferrer';
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
      
<header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-2" href="#home">
<div className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-800 bg-slate-900 text-slate-100 shadow-sm transition">
<span className="text-sm font-semibold tracking-tight">JP</span>
</div>
<span className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition">Johan Pechard</span>
</a>
<nav className="hidden items-center gap-1 md:flex">
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#home">Accueil</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#skills">Compétences</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#projects">Projets</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#experience">Expériences</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#career">Projet pro</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#veille">Veille</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#interests">Centres d’intérêt</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#links">Liens utiles</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden md:inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-100 shadow-sm hover:bg-slate-800 hover:border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#contact">
<i data-lucide="mail" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
              Me contacter
            </a>
<a className="hidden md:inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#projects">
<i data-lucide="folder-code" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
              Projets
            </a>
<button aria-label="Ouvrir le menu" className="inline-flex items-center justify-center rounded-md border border-slate-800 bg-slate-900 p-2 text-slate-100 shadow-sm hover:bg-slate-800 hover:border-slate-700 md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" id="menuToggle">
<i data-lucide="menu" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</button>
</div>
</div>
<div className="hidden border-t border-slate-800/70 py-3 md:hidden" id="mobileMenu">
<nav className="grid gap-1">
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#home">Accueil</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#skills">Compétences</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#projects">Projets</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#experience">Expériences</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#career">Projet professionnel</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#veille">Veille</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#interests">Centres d’intérêt</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#links">Liens utiles</a>
<a className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#contact">Contact</a>
</nav>
</div>
</div>
</header>
<main className="pt-24" id="home">
<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 lg:py-20">
<div className="order-2 md:order-1">
<div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-sm reveal opacity-0 translate-y-4 transition duration-700">
<img alt="Logo Jpechard" className="h-80 w-full object-contain p-8 bg-slate-950" src="assets/jpechard-logo.png"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-950/95 to-transparent px-4 pb-4 pt-16">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 shadow-sm text-slate-200">
<i data-lucide="user" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-100">Johan Pechard</p>
<p className="text-xs text-slate-400">Étudiant en BTS SIO SISR</p>
</div>
</div>
<a className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-slate-200 shadow-sm hover:bg-slate-800 hover:border-slate-700 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950" href="#links">
<i data-lucide="share-2" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                    Liens
                  </a>
</div>
</div>
</div>
<div className="order-1 space-y-6 md:order-2 reveal opacity-0 translate-y-4 transition duration-700">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200 shadow-sm">
<i data-lucide="shield" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                Systèmes &amp; Réseaux
              </div>
<h1 className="text-4xl tracking-tight font-semibold text-slate-100 sm:text-5xl">
                Johan Pechard — Étudiant en BTS SIO SISR
              </h1>
<p className="text-lg text-slate-400">
                Passionné par les technologies réseaux, la cybersécurité et l’assistance utilisateur. Futur administrateur systèmes &amp; réseaux.
              </p>
<div className="flex flex-wrap items-center gap-3 pt-2">
<a className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#projects">
<i data-lucide="rocket" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                  Voir les projets
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-100 shadow-sm hover:bg-slate-800 hover:border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" download="" href="CV_Jean_Pechard.pdf">
<i data-lucide="file-down" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                  Télécharger le CV
                </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-100 shadow-sm hover:bg-slate-800 hover:border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#contact">
<i data-lucide="mail" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                  Me contacter
                </a>
</div>
<div className="flex flex-wrap gap-3 pt-4">
<a className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-slate-100 transition" href="#skills">
<i data-lucide="layers" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                  Compétences
                </a>
<span className="text-slate-600">•</span>
<a className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-slate-100 transition" href="#experience">
<i data-lucide="briefcase" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                  Expériences
                </a>
<span className="text-slate-600">•</span>
<a className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-slate-100 transition" href="#links">
<i data-lucide="link-2" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                  Liens utiles
                </a>
</div>
</div>
</div>
</div>
</section>
<section className="border-t border-slate-800/70 bg-slate-950 py-16" id="skills">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-10 reveal opacity-0 translate-y-4 transition duration-700">
<h2 className="text-3xl tracking-tight font-semibold text-slate-100">Compétences</h2>
<p className="mt-2 text-slate-400">Réseaux, systèmes, programmation et outils techniques.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700">
<div className="mb-4 flex items-center gap-2">
<i data-lucide="network" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Réseaux</h3>
</div>
<ul className="space-y-4">
<li>
<div className="flex items-center justify-between text-sm text-slate-300"><span>Configuration</span><span>80%</span></div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: '80%'}}></div>
</div>
</li>
<li>
<div className="flex items-center justify-between text-sm text-slate-300"><span>Maintenance</span><span>75%</span></div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: '75%'}}></div>
</div>
</li>
<li>
<div className="flex items-center justify-between text-sm text-slate-300"><span>Sécurité</span><span>70%</span></div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: '70%'}}></div>
</div>
</li>
<li className="text-sm text-slate-400">Cisco • IPv4/IPv6 • VLANs</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700 delay-100">
<div className="mb-4 flex items-center gap-2">
<i data-lucide="server" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Systèmes</h3>
</div>
<ul className="space-y-4">
<li>
<div className="flex items-center justify-between text-sm text-slate-300"><span>Windows</span><span>80%</span></div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: '80%'}}></div>
</div>
</li>
<li>
<div className="flex items-center justify-between text-sm text-slate-300"><span>Linux</span><span>70%</span></div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: '70%'}}></div>
</div>
</li>
<li>
<div className="flex items-center justify-between text-sm text-slate-300"><span>Active Directory</span><span>65%</span></div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: '65%'}}></div>
</div>
</li>
<li className="text-sm text-slate-400">Virtualisation • Hyper-V • Proxmox</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700 delay-200">
<div className="mb-4 flex items-center gap-2">
<i data-lucide="code-2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Programmation</h3>
</div>
<ul className="space-y-4">
<li>
<div className="flex items-center justify-between text-sm text-slate-300"><span>Bash</span><span>75%</span></div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: '75%'}}></div>
</div>
</li>
<li>
<div className="flex items-center justify-between text-sm text-slate-300"><span>PHP</span><span>60%</span></div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: '60%'}}></div>
</div>
</li>
<li>
<div className="flex items-center justify-between text-sm text-slate-300"><span>HTML/CSS</span><span>80%</span></div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: '80%'}}></div>
</div>
</li>
<li>
<div className="flex items-center justify-between text-sm text-slate-300"><span>SQL</span><span>65%</span></div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div className="h-2 rounded-full bg-cyan-600" style={{width: '65%'}}></div>
</div>
</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700 delay-300">
<div className="mb-4 flex items-center gap-2">
<i data-lucide="tool" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Outils</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 shadow-sm"><i data-lucide="activity" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>Wireshark</span>
<span className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 shadow-sm"><i data-lucide="router" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>Packet Tracer</span>
<span className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 shadow-sm"><i data-lucide="square-code" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>VS Code</span>
<span className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 shadow-sm"><i data-lucide="git-branch" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>Git</span>
<span className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-2.5 py-1 text-xs font-medium text-slate-200 shadow-sm"><i data-lucide="waveform" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>Audacity</span>
</div>
</div>
</div>
</div>
</section>
<section className="border-t border-slate-800/70 bg-slate-950 py-16" id="projects">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-8 items-end justify-between gap-4 md:flex reveal opacity-0 translate-y-4 transition duration-700">
<div>
<h2 className="text-3xl tracking-tight font-semibold text-slate-100">Projets</h2>
<p className="mt-2 text-slate-400">Sélection de travaux avec descriptions, technologies et dépôts associés.</p>
</div>
<div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
<div className="relative">
<i className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" data-lucide="search" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900 pl-9 pr-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 sm:w-72 transition" id="projectSearch" placeholder="Rechercher un projet..." type="search"/>
</div>
<div className="flex flex-wrap gap-2">
<button className="project-filter inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" data-filter="all">
<i data-lucide="sparkles" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>Tout
                </button>
<button className="project-filter inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" data-filter="réseaux">Réseaux</button>
<button className="project-filter inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" data-filter="systèmes">Systèmes</button>
<button className="project-filter inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" data-filter="dev">Dev</button>
<button className="project-filter inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" data-filter="créatif">Créatif</button>
</div>
</div>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" id="projectGrid">
<article className="project-card group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700" data-tags="réseaux,bash,systèmes,dev">
<div className="relative">
<img alt="Sécurité SSH et logs d’authentification" className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-2 top-2 flex gap-1">
<span className="rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-slate-200 shadow">Bash</span>
<span className="rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-slate-200 shadow">Réseaux</span>
</div>
</div>
<div className="p-4">
<h3 className="text-base font-semibold tracking-tight text-slate-100">Script d’authentification Bash avec auth.log</h3>
<p className="mt-2 text-sm text-slate-400">Surveillance des tentatives et alertes, parsing de logs, sécurité SSH.</p>
<div className="mt-3 flex flex-wrap gap-2 text-xs">
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Bash</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Linux</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Regex</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition" href="https://github.com/" target="_blank">
<i data-lucide="github" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                    GitHub
                  </a>
<a className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-slate-100 transition" href="#contact">
<i data-lucide="external-link" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                    Détails
                  </a>
</div>
</div>
</article>
<article className="project-card group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700 delay-100" data-tags="dev,php,sql">
<div className="relative">
<img alt="Code PHP" className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-2 top-2 flex gap-1">
<span className="rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-slate-200 shadow">PHP</span>
<span className="rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-slate-200 shadow">SQLite</span>
</div>
</div>
<div className="p-4">
<h3 className="text-base font-semibold tracking-tight text-slate-100">Site web PHP/SQLite de gestion d’étudiants</h3>
<p className="mt-2 text-sm text-slate-400">CRUD étudiants, authentification simple, validations côté serveur.</p>
<div className="mt-3 flex flex-wrap gap-2 text-xs">
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">PHP</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">SQLite</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">HTML/CSS</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition" href="https://github.com/" target="_blank">
<i data-lucide="github" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                    GitHub
                  </a>
<a className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-slate-100 transition" href="#contact">
<i data-lucide="external-link" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                    Démo
                  </a>
</div>
</div>
</article>
<article className="project-card group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700 delay-200" data-tags="créatif,audio,signal">
<div className="relative">
<img alt="Signal audio" className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-2 top-2 flex gap-1">
<span className="rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-slate-200 shadow">Audacity</span>
<span className="rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-slate-200 shadow">Analyse spectrale</span>
</div>
</div>
<div className="p-4">
<h3 className="text-base font-semibold tracking-tight text-slate-100">Traitement du signal (analyse spectrale, modulation)</h3>
<p className="mt-2 text-sm text-slate-400">Étude de fréquences, filtrage et visualisation pour différents signaux.</p>
<div className="mt-3 flex flex-wrap gap-2 text-xs">
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">FFT</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">DSP</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition" href="https://github.com/" target="_blank">
<i data-lucide="github" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                    GitHub
                  </a>
<a className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-slate-100 transition" href="#contact">
<i data-lucide="external-link" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                    Rapport
                  </a>
</div>
</div>
</article>
<article className="project-card group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700 delay-300" data-tags="créatif,video,écologie,marketing">
<div className="relative">
<img alt="Voiture écologique" className="h-40 w-full object-cover transition duration-300 group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute left-2 top-2 flex gap-1">
<span className="rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-slate-200 shadow">Créatif</span>
<span className="rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-medium text-slate-200 shadow">Écologie</span>
</div>
</div>
<div className="p-4">
<h3 className="text-base font-semibold tracking-tight text-slate-100">Slow &amp; Curious – parodie écologique de Fast &amp; Furious</h3>
<p className="mt-2 text-sm text-slate-400">Projet fun autour de la mobilité douce et de l’impact environnemental.</p>
<div className="mt-3 flex flex-wrap gap-2 text-xs">
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Montage</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Storyboard</span>
</div>
<div className="mt-4 flex items-center justify-between">
<a className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition" href="https://github.com/" target="_blank">
<i data-lucide="github" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                    GitHub
                  </a>
<a className="inline-flex items-center gap-1 text-sm text-slate-300 hover:text-slate-100 transition" href="#contact">
<i data-lucide="external-link" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                    Vidéo
                  </a>
</div>
</div>
</article>
</div>
</div>
</section>
<section className="border-t border-slate-800/70 bg-slate-950 py-16" id="experience">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-10 reveal opacity-0 translate-y-4 transition duration-700">
<h2 className="text-3xl tracking-tight font-semibold text-slate-100">Expériences professionnelles</h2>
<p className="mt-2 text-slate-400">Stages, formations et alternances.</p>
</div>
<div className="relative reveal opacity-0 translate-y-4 transition duration-700">
<div className="absolute left-3 top-0 h-full w-px bg-slate-800 sm:left-4"></div>
<div className="space-y-8">
<div className="relative pl-10 sm:pl-12">
<span className="absolute left-0 top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-cyan-400 shadow-sm sm:left-1">
<i data-lucide="briefcase" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</span>
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm hover:shadow transition">
<div className="flex flex-wrap items-center justify-between gap-2">
<h3 className="text-base font-semibold tracking-tight text-slate-100">Alternant réseaux — Mairie de Fougères</h3>
<span className="text-xs text-slate-500">2024–2026</span>
</div>
<p className="mt-2 text-sm text-slate-400">Alternance en administration réseaux au sein des services informatiques. Missions: configuration et suivi des caméras de la ville, gestion des VLANs et commutateurs, déploiement de points d’accès Wi‑Fi, supervision et dépannage niveau 2, documentation technique.</p>
<div className="mt-3 flex flex-wrap gap-2 text-xs">
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Réseaux</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Caméras IP</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">VLAN</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Wi‑Fi</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Supervision</span>
</div>
</div>
</div>
<div className="relative pl-10 sm:pl-12">
<span className="absolute left-0 top-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-cyan-400 shadow-sm sm:left-1">
<i data-lucide="graduation-cap" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
</span>
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm hover:shadow transition">
<div className="flex flex-wrap items-center justify-between gap-2">
<h3 className="text-base font-semibold tracking-tight text-slate-100">BTS SIO option SISR — ESUP Rennes</h3>
<span className="text-xs text-slate-500">2024–2026</span>
</div>
<p className="mt-2 text-sm text-slate-400">Parcours orienté administration systèmes et réseaux: routage et segmentation (VLAN), services Windows/Linux, virtualisation et sauvegardes, sécurité et supervision. Travaux pratiques et projets tutorés pour préparer le métier d’administrateur.</p>
<div className="mt-3 flex flex-wrap gap-2 text-xs">
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Réseaux</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Systèmes</span>
<span className="rounded-full border border-slate-800 bg-slate-900 px-2 py-1 text-slate-200">Cybersécurité</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-t border-slate-800/70 bg-slate-950 py-16" id="career">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">
<div className="md:col-span-2 reveal opacity-0 translate-y-4 transition duration-700">
<h2 className="text-3xl tracking-tight font-semibold text-slate-100">Projet professionnel</h2>
<p className="mt-3 text-slate-400">Je souhaite aller à l’EN pour poursuivre mes études. Actuellement en BTS SIO option SISR à l’ESUP Rennes, je m’oriente vers l’administration systèmes et réseaux, avec un fort intérêt pour la cybersécurité et le support technique.</p>
<div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-200 shadow-sm">
<i data-lucide="target" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                Objectif: Administrateur systèmes &amp; réseaux
              </div>
</div>
<div className="reveal opacity-0 translate-y-4 transition duration-700">
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm">
<div className="mb-3 flex items-center gap-2">
<i data-lucide="compass" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Axes de progression</h3>
</div>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="check-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                    Conteneurs &amp; Cloud (Docker, Kubernetes)
                  </li>
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="check-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                    Automatisation (Bash, Ansible)
                  </li>
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="check-circle" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                    Sécurité (audit, hardening)
                  </li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section className="border-t border-slate-800/70 bg-slate-950 py-16" id="veille">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-10 reveal opacity-0 translate-y-4 transition duration-700">
<h2 className="text-3xl tracking-tight font-semibold text-slate-100">Veille informatique</h2>
<p className="mt-2 text-slate-400">Comment je m’informe et reste à jour sur les technologies, la cybersécurité et les bonnes pratiques.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm reveal opacity-0 translate-y-4 transition duration-700">
<div className="mb-3 flex items-center gap-2">
<i data-lucide="rss" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Sources principales</h3>
</div>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="newspaper" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                  News: CERT-FR, The Register, BleepingComputer, ZDNet (rubrique sécurité)
                </li>
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="shield-alert" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                  Vulnérabilités: CVE, NVD, Mitre, bulletins éditeurs (Microsoft, Cisco)
                </li>
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="youtube" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                  Vidéos: LiveOverflow, NetworkChuck, Les Joies du Code (sélection)
                </li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm reveal opacity-0 translate-y-4 transition duration-700 delay-100">
<div className="mb-3 flex items-center gap-2">
<i data-lucide="workflow" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Outils &amp; méthodes</h3>
</div>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="inbox" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                  Newsletters hebdo (SANS, Daily Swig, TL;DR) pour un résumé régulier
                </li>
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="rss" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                  Flux RSS centralisés (Feedly) avec tags par thème (réseaux, sysadmin, sécu)
                </li>
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="bell-ring" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                  Alertes: Google Alerts pour mots-clés techniques et produits suivis
                </li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm reveal opacity-0 translate-y-4 transition duration-700 delay-200">
<div className="mb-3 flex items-center gap-2">
<i data-lucide="calendar-check-2" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Rythme de veille</h3>
</div>
<ul className="space-y-2 text-sm text-slate-300">
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="clock" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                  Quotidien: 15–20 min de tri (flux RSS, titres, CVE critiques)
                </li>
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="book-open-text" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                  Hebdo: lecture approfondie et prise de notes (Obsidian)
                </li>
<li className="flex items-start gap-2">
<i className="mt-0.5 text-cyan-500" data-lucide="git-branch" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
                  Pratique: tests en VM/lab (scripts, services, durcissement)
                </li>
</ul>
</div>
</div>
</div>
</section>
<section className="border-t border-slate-800/70 bg-slate-950 py-16" id="interests">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-10 reveal opacity-0 translate-y-4 transition duration-700">
<h2 className="text-3xl tracking-tight font-semibold text-slate-100">Centres d’intérêt</h2>
<p className="mt-2 text-slate-400">Quelques passions qui me motivent au quotidien.</p>
</div>
<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
<div className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400">
<i data-lucide="music-3" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm font-medium text-slate-200">Musique</span>
</div>
<div className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700 delay-100">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400">
<i data-lucide="car" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm font-medium text-slate-200">Automobile</span>
</div>

<div className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700 delay-300">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400">
<i data-lucide="cpu" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm font-medium text-slate-200">Technologies</span>
</div>
<div className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700 delay-400">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400">
<i data-lucide="film" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm font-medium text-slate-200">Cinéma</span>
</div>
<div className="group flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm hover:shadow transition reveal opacity-0 translate-y-4 duration-700 delay-500">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400">
<i data-lucide="megaphone" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</span>
<span className="text-sm font-medium text-slate-200">Marketing digital</span>
</div>
</div>
</div>
</section>
<section className="border-t border-slate-800/70 bg-slate-950 py-16" id="links">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-10 reveal opacity-0 translate-y-4 transition duration-700">
<h2 className="text-3xl tracking-tight font-semibold text-slate-100">Liens utiles</h2>
<p className="mt-2 text-slate-400">Retrouvez mes profils et contactez-moi facilement.</p>
</div>
<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
<div className="space-y-4 reveal opacity-0 translate-y-4 transition duration-700">
<a className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm hover:shadow transition" href="https://www.linkedin.com/" target="_blank">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400">
<i data-lucide="linkedin" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-100">LinkedIn</p>
<p className="text-xs text-slate-400">Réseau professionnel</p>
</div>
</div>
<i className="text-slate-500 group-hover:text-slate-300 transition" data-lucide="arrow-up-right" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</a>
<a className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm hover:shadow transition" href="https://github.com/" target="_blank">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400">
<i data-lucide="github" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-100">GitHub</p>
<p className="text-xs text-slate-400">Dépôts et code source</p>
</div>
</div>
<i className="text-slate-500 group-hover:text-slate-300 transition" data-lucide="arrow-up-right" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</a>
<a className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm hover:shadow transition" href="mailto:johan.pechard@example.com">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400">
<i data-lucide="mail" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-100">E-mail</p>
<p className="text-xs text-slate-400">johan.pechard@example.com</p>
</div>
</div>
<i className="text-slate-500 group-hover:text-slate-300 transition" data-lucide="arrow-up-right" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</a>
<a className="group flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-4 shadow-sm hover:shadow transition" download="" href="CV_Jean_Pechard.pdf">
<div className="flex items-center gap-3">
<span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-950 text-cyan-400">
<i data-lucide="file-text" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
</span>
<div>
<p className="text-sm font-medium text-slate-100">Télécharger mon CV</p>
<p className="text-xs text-slate-400">PDF — actualisé</p>
</div>
</div>
<i className="text-slate-500 group-hover:text-slate-300 transition" data-lucide="download" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
</a>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-900 p-5 shadow-sm reveal opacity-0 translate-y-4 transition duration-700" id="contact">
<div className="mb-4 flex items-center gap-2">
<i data-lucide="inbox" style={{width: '20px', height: '20px', strokeWidth: '1.5'}}></i>
<h3 className="text-lg font-semibold tracking-tight text-slate-100">Me contacter</h3>
</div>
<form action="mailto:johan.pechard@example.com" className="space-y-3" enctype="text/plain" method="post">
<div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
<div>
<label className="mb-1 block text-xs font-medium text-slate-400">Nom</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" name="Nom" placeholder="Votre nom" required="" type="text"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-400">E-mail</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" name="Email" placeholder="vous@exemple.com" required="" type="email"/>
</div>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-400">Sujet</label>
<input className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" name="Sujet" placeholder="Sujet du message" type="text"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-slate-400">Message</label>
<textarea className="w-full rounded-lg border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-100 shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" name="Message" placeholder="Votre message..." required="" rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<p className="text-xs text-slate-500">Je réponds généralement sous 24–48h.</p>
<button className="inline-flex items-center gap-2 rounded-lg bg-cyan-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" type="submit">
<i data-lucide="send" style={{width: '18px', height: '18px', strokeWidth: '1.5'}}></i>
                    Envoyer
                  </button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-800/70 bg-slate-950">
<div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
<div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
<p className="text-sm text-slate-400">© 2025 Johan Pechard – Tous droits réservés</p>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-1 rounded-md border border-slate-800 bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-200 shadow-sm hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ring-offset-2 ring-offset-slate-950 transition" href="#home">
<i data-lucide="arrow-up" style={{width: '16px', height: '16px', strokeWidth: '1.5'}}></i>
              Haut de page
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
