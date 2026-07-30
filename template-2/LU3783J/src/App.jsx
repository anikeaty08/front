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
      
      // Icon init
      function refreshIcons() {
        if (window.lucide) {
          lucide.createIcons();
        }
      }

      // Simple SPA Router
      const PAGES = {
        home: document.querySelector('main[data-page="home"]'),
        services: document.querySelector('main[data-page="services"]'),
        servicesDetails: document.querySelector('main[data-page="services-details"]'),
        projects: document.querySelector('main[data-page="projects"]'),
        project: document.querySelector('main[data-page="project"]'),
      };

      function showPage(key) {
        Object.values(PAGES).forEach(el => el.classList.add('hidden'));
        if (PAGES[key]) PAGES[key].classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
        refreshIcons();
      }

      // Project data
      const PROJECTS = [
        {
          slug: 'lakeside-modern-residence',
          title: 'Lakeside Modern Residence',
          location: 'Lakeview, OR',
          type: 'Custom Home',
          size: '3,800 sq ft',
          cover: 'https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2000&auto=format&fit=crop',
          images: [
            'https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=2000&auto=format&fit=crop'
          ],
          summary: 'Passive-solar modern home with lake views, high-performance envelope, and custom millwork.',
          highlights: ['Passive solar orientation', 'Triple-pane glazing', 'Custom walnut cabinetry', 'Radiant floors'],
          stats: { timeline: '12 months', completion: '2024', energy: 'HERS 45' }
        },
        {
          slug: 'bright-scandinavian-kitchen',
          title: 'Bright Scandinavian Kitchen',
          location: 'Brookline, MA',
          type: 'Renovation',
          size: '320 sq ft',
          cover: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop',
          images: [
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2000&auto=format&fit=crop'
          ],
          summary: 'Light-filled kitchen with oak fronts, quartz, and efficient storage.',
          highlights: ['Custom oak fronts', 'Quartz surfaces', 'Hidden pantry', 'Under-cabinet lighting'],
          stats: { timeline: '6 weeks', completion: '2023', energy: 'LED throughout' }
        },
        {
          slug: 'mid-century-exterior-refresh',
          title: 'Mid-Century Exterior Refresh',
          location: 'Boulder, CO',
          type: 'Renovation',
          size: 'Exterior',
          cover: 'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2000&auto=format&fit=crop',
          images: [
            'https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop'
          ],
          summary: 'New cladding, windows, and soffit lighting revive a mid-century gem.',
          highlights: ['Cedar rainscreen', 'Black-framed windows', 'Soffit LEDs', 'New entry canopy'],
          stats: { timeline: '9 weeks', completion: '2022', energy: 'U-factor 0.28 windows' }
        },
        {
          slug: 'serene-spa-bathroom',
          title: 'Serene Spa Bathroom',
          location: 'Seattle, WA',
          type: 'Renovation',
          size: '120 sq ft',
          cover: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000&auto=format&fit=crop',
          images: [
            'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1584622781444-3f9a162f4d3a?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1560448075-bb4caa6c8d1d?q=80&w=2000&auto=format&fit=crop'
          ],
          summary: 'Spa-like retreat with terrazzo floor, walk-in shower, and heated towel bars.',
          highlights: ['Terrazzo tile', 'Frameless glass', 'Heated floors', 'Brass fixtures'],
          stats: { timeline: '5 weeks', completion: '2023', energy: 'Low-flow fixtures' }
        },
        {
          slug: 'warm-timber-addition',
          title: 'Warm Timber Addition',
          location: 'Austin, TX',
          type: 'Addition',
          size: '600 sq ft',
          cover: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop',
          images: [
            'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop'
          ],
          summary: 'Great-room addition with exposed beams and seamless indoor–outdoor flow.',
          highlights: ['Glulam beams', '12’ sliders', 'Skylights', 'Deck integration'],
          stats: { timeline: '14 weeks', completion: '2022', energy: 'Low-E glazing' }
        },
        {
          slug: 'net-zero-retrofit',
          title: 'Net-Zero Retrofit',
          location: 'Madison, WI',
          type: 'Energy',
          size: 'Whole-home',
          cover: 'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80',
          images: [
            'https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1617195737492-7f4d2c9b1c95?q=80&w=2000&auto=format&fit=crop'
          ],
          summary: 'Deep energy retrofit ready for solar—tight envelope and all-electric systems.',
          highlights: ['Air sealing', 'Heat pump HVAC', 'ERV ventilation', 'Induction cooking'],
          stats: { timeline: '10 weeks', completion: '2024', energy: 'Net-zero ready' }
        }
      ];

      // Render Projects Grid
      function renderProjectsGrid(filter) {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;
        const items = PROJECTS.filter(p => !filter || p.type === filter);
        grid.innerHTML = items.map(p => `
          <a href="#/project/${p.slug}" class="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:-translate-y-1 hover:shadow-sm transition-all">
            <div class="aspect-[16/10] overflow-hidden bg-neutral-100">
              <img src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-5">
              <div class="flex items-center gap-2 text-xs text-neutral-600">
                <i data-lucide="map-pin" class="w-4 h-4"></i>${p.location}
              </div>
              <h3 class="mt-2 text-lg font-semibold tracking-tight">${p.title}</h3>
              <p class="mt-1 text-sm text-neutral-700">${p.type}${p.size ? ' • ' + p.size : ''}</p>
            </div>
          </a>
        `).join('');
        refreshIcons();
      }

      // Render Project Detail
      function renderProjectDetail(slug) {
        const p = PROJECTS.find(x => x.slug === slug);
        const article = document.getElementById('projectArticle');
        if (!p || !article) return;
        article.innerHTML = `
          <section class="relative">
            <div class="aspect-[16/7] bg-neutral-100">
              <img src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" alt="${p.title}" class="w-full h-full object-cover" />
            </div>
            <div class="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
              <div class="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
                <div class="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <a href="#/projects" class="inline-flex items-center gap-2 text-xs text-neutral-600 hover:text-neutral-900 transition-colors">
                      <i data-lucide="arrow-left" class="w-4 h-4"></i>
                      Back to projects
                    </a>
                    <h1 class="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">${p.title}</h1>
                    <div class="mt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-600">
                      <span class="inline-flex items-center gap-1"><i data-lucide="map-pin" class="w-4 h-4"></i>${p.location}</span>
                      <span class="inline-flex items-center gap-1"><i data-lucide="tag" class="w-4 h-4"></i>${p.type}</span>
                      ${p.size ? `<span class="inline-flex items-center gap-1"><i data-lucide="maximize" class="w-4 h-4"></i>${p.size}</span>` : ''}
                    </div>
                  </div>
                  <div class="grid grid-cols-3 gap-3">
                    <div class="rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-center">
                      <p class="text-[11px] text-neutral-600">Timeline</p>
                      <p class="text-sm font-medium">${p.stats.timeline}</p>
                    </div>
                    <div class="rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-center">
                      <p class="text-[11px] text-neutral-600">Completed</p>
                      <p class="text-sm font-medium">${p.stats.completion}</p>
                    </div>
                    <div class="rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-center">
                      <p class="text-[11px] text-neutral-600">Performance</p>
                      <p class="text-sm font-medium">${p.stats.energy}</p>
                    </div>
                  </div>
                </div>
                <p class="mt-4 text-neutral-700">${p.summary}</p>

                <div class="mt-6 grid md:grid-cols-3 gap-4">
                  ${p.images.map(src => `
                    <div class="rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100">
                      <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="${p.title} photo" class="w-full h-full object-cover aspect-[16/10]" loading="lazy" />
                    </div>
                  `).join('')}
                </div>

                <div class="mt-6">
                  <p class="text-sm font-medium tracking-tight">Highlights</p>
                  <ul class="mt-2 grid sm:grid-cols-2 gap-2 text-sm text-neutral-700">
                    ${p.highlights.map(h => `
                      <li class="flex items-center gap-2">
                        <i data-lucide="check" class="w-4 h-4 text-emerald-600"></i>${h}
                      </li>
                    `).join('')}
                  </ul>
                </div>

                <div class="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#quote" class="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">
                    <i data-lucide="calendar" class="w-4 h-4"></i>
                    Start a similar project
                  </a>
                  <a href="#/projects" class="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all">
                    <i data-lucide="images" class="w-4 h-4"></i>
                    See more work
                  </a>
                </div>
              </div>
            </div>
          </section>
        `;
        refreshIcons();
      }

      // Router
      function handleRoute() {
        const hash = window.location.hash || '#';
        const path = hash.replace('#', '');

        if (path.startsWith('/project/')) {
          const slug = path.replace('/project/', '');
          showPage('project');
          renderProjectDetail(slug);
          return;
        }

        if (path === '/services/details') {
          showPage('servicesDetails');
          return;
        }

        if (path === '/services') {
          showPage('services');
          return;
        }

        if (path === '/projects') {
          showPage('projects');
          renderProjectsGrid();
          return;
        }

        if (path === '/process') {
          showPage('home');
          // Delay scroll to ensure layout is painted
          setTimeout(() => {
            const el = document.querySelector('section#process');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 0);
          return;
        }

        // Anchor sections (e.g., #quote, #testimonials)
        if (path && !path.startsWith('/')) {
          showPage('home');
          setTimeout(() => {
            const el = document.querySelector(path);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 0);
          return;
        }

        // Default
        showPage('home');
      }

      window.addEventListener('hashchange', handleRoute);
      window.addEventListener('load', () => {
        // Init year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Mobile menu
        const mobileBtn = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileBtn && mobileMenu) {
          mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
          });
          // Close on link click
          mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => mobileMenu.classList.add('hidden'));
          });
        }

        // Form submission (quote)
        document.querySelectorAll('section#quote form').forEach(form => {
          form.addEventListener('submit', (e) => {
            e.preventDefault();
            const success = form.parentElement.querySelector('#formSuccess') || document.getElementById('formSuccess');
            if (success) {
              success.classList.remove('hidden');
              setTimeout(() => success.classList.add('hidden'), 5000);
            }
            form.reset();
          });
        });

        // Newsletter
        const newsForm = document.getElementById('newsletterForm');
        const newsSuccess = document.getElementById('newsletterSuccess');
        if (newsForm && newsSuccess) {
          newsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            newsSuccess.classList.remove('hidden');
            setTimeout(() => newsSuccess.classList.add('hidden'), 5000);
            newsForm.reset();
          });
        }

        // Projects page filters
        document.querySelectorAll('.proj-filter').forEach(btn => {
          btn.addEventListener('click', () => {
            renderProjectsGrid(btn.getAttribute('data-filter'));
          });
        });
        const allBtn = document.getElementById('projectsFilterAll');
        if (allBtn) allBtn.addEventListener('click', () => renderProjectsGrid());

        refreshIcons();
        handleRoute();
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
      

<div className="w-full bg-neutral-900 text-neutral-100">
<div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
<p className="text-xs sm:text-sm">Summer booking window now open — secure your 2025 build slot.</p>
<a className="hidden sm:inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-300 hover:text-emerald-200 transition-colors" href="#quote">
<i className="w-4 h-4" data-lucide="calendar"></i>
          Book a consultation
        </a>
</div>
</div>

<header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a aria-label="Home" className="inline-flex items-center gap-2 group" href="#">
<div className="h-7 w-7 rounded-md bg-neutral-900 text-white grid place-items-center tracking-tighter text-[11px] font-semibold">HB</div>
<span className="text-sm sm:text-base font-medium tracking-tight">Haven Build Co.</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#/services">Services</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#/projects">Projects</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#/process">Process</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#testimonials">Reviews</a>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#quote">Get a Quote</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone"></i>
            (123) 456-7890
          </a>
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium tracking-tight hover:bg-neutral-800 hover:shadow-sm hover:-translate-y-0.5 transition-all" href="#quote">
<i className="w-4 h-4" data-lucide="mail"></i>
            Request Quote
          </a>
</div>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-neutral-200 hover:border-neutral-300 hover:bg-white transition-colors" id="mobileMenuButton">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden border-t border-neutral-200 bg-white" id="mobileMenu">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
<a className="text-sm py-2" href="#/services">Services</a>
<a className="text-sm py-2" href="#/projects">Projects</a>
<a className="text-sm py-2" href="#/process">Process</a>
<a className="text-sm py-2" href="#testimonials">Reviews</a>
<a className="text-sm py-2" href="#quote">Get a Quote</a>
<div className="pt-2 border-t border-neutral-200">
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="tel:+1234567890">
<i className="w-4 h-4" data-lucide="phone"></i>
              (123) 456-7890
            </a>
</div>
</div>
</div>
</header>


<main data-page="home">

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<img alt="Modern home exterior" className="w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2000&auto=format&fit=crop" />
</div>
<div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs text-neutral-700 shadow-sm backdrop-blur">
<i className="w-4 h-4 text-emerald-600" data-lucide="badge-check"></i>
              Licensed • Insured • 10-Year Structural Warranty
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl tracking-tight font-semibold mt-6 text-neutral-900">
              Build and renovate with precision, transparency, and care.
            </h1>
<p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed">
              From custom new builds to thoughtful renovations, we deliver craftsmanship you can feel—on time and on budget.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium tracking-tight hover:bg-neutral-800 hover:shadow hover:-translate-y-0.5 transition-all" href="#quote">
<i className="w-5 h-5" data-lucide="hammer"></i>
                Start your project
              </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-medium tracking-tight text-neutral-900 hover:bg-neutral-50 hover:border-neutral-400 transition-all" href="#/projects">
<i className="w-5 h-5" data-lucide="images"></i>
                See our work
              </a>
</div>
<div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2 text-sm text-neutral-700">
<i className="w-4 h-4 text-neutral-800" data-lucide="home"></i>
                  Custom homes
                </div>
<p className="mt-2 text-2xl font-semibold tracking-tight">180+</p>
<p className="text-xs text-neutral-600">Delivered since 2014</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2 text-sm text-neutral-700">
<i className="w-4 h-4 text-neutral-800" data-lucide="ruler"></i>
                  Renovations
                </div>
<p className="mt-2 text-2xl font-semibold tracking-tight">320+</p>
<p className="text-xs text-neutral-600">Kitchen, bath & full-home</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2 text-sm text-neutral-700">
<i className="w-4 h-4 text-neutral-800" data-lucide="clock"></i>
                  On-time delivery
                </div>
<p className="mt-2 text-2xl font-semibold tracking-tight">98%</p>
<p className="text-xs text-neutral-600">Projects completed as scheduled</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="flex items-center gap-2 text-sm text-neutral-700">
<i className="w-4 h-4 text-neutral-800" data-lucide="star"></i>
                  Client rating
                </div>
<p className="mt-2 text-2xl font-semibold tracking-tight">4.9/5</p>
<p className="text-xs text-neutral-600">Across 250+ reviews</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="services">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">What we do</h2>
<p className="mt-2 text-neutral-700">End-to-end expertise, crystal-clear budgets, and a dedicated crew.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm rounded-md border border-neutral-300 bg-white px-4 py-2 hover:bg-neutral-50 hover:border-neutral-400 transition-all" href="#quote">
<i className="w-4 h-4" data-lucide="file-pen"></i>
            Get an estimate
          </a>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group rounded-xl border border-neutral-200 bg-white p-6 hover:-translate-y-1 hover:shadow-sm transition-all">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="home"></i>
</div>
<span className="text-xs text-neutral-600">Design–Build</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Custom Homes</h3>
<p className="mt-2 text-sm text-neutral-700">Architectural guidance, permitting, and impeccable builds tailored to your life.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Fixed-price options</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Site planning</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-6 hover:-translate-y-1 hover:shadow-sm transition-all">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="ruler"></i>
</div>
<span className="text-xs text-neutral-600">Interior</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Kitchens & Baths</h3>
<p className="mt-2 text-sm text-neutral-700">High-use spaces, upgraded. Cabinetry, tile, plumbing, and custom finishes.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> 3D layouts</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Premium materials</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-6 hover:-translate-y-1 hover:shadow-sm transition-all">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="paintbrush"></i>
</div>
<span className="text-xs text-neutral-600">Exterior</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Additions & Facades</h3>
<p className="mt-2 text-sm text-neutral-700">Expand your footprint or refresh curb appeal without compromising style.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Structural engineering</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Siding & roofing</li>
</ul>
</div>
<div className="group rounded-xl border border-neutral-200 bg-white p-6 hover:-translate-y-1 hover:shadow-sm transition-all">
<div className="flex items-center justify-between">
<div className="h-10 w-10 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="leaf"></i>
</div>
<span className="text-xs text-neutral-600">Efficiency</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Energy Upgrades</h3>
<p className="mt-2 text-sm text-neutral-700">Insulation, windows, HVAC, and smart systems for comfort and savings.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Rebates & credits</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Air sealing</li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="projects">
<div className="flex items-end justify-between gap-6">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Featured projects</h2>
<p className="mt-2 text-neutral-700">A selection of recent builds and transformations.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all">
<i className="w-4 h-4" data-lucide="filter"></i>
              Filter
            </button>
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all">
<i className="w-4 h-4" data-lucide="grid-3x3"></i>
              All
            </button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:-translate-y-1 hover:shadow-sm transition-all" href="#/project/lakeside-modern-residence">
<div className="aspect-[16/10] overflow-hidden bg-neutral-100">
<img alt="Lakeside modern home" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1502005097973-6a7082348e28?q=80&w=2000&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-600">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                Lakeview, OR
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Lakeside Modern Residence</h3>
<p className="mt-1 text-sm text-neutral-700">3,800 sq ft • Custom new build • Passive solar</p>
</div>
</a>
<a className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:-translate-y-1 hover:shadow-sm transition-all" href="#/project/bright-scandinavian-kitchen">
<div className="aspect-[16/10] overflow-hidden bg-neutral-100">
<img alt="Kitchen renovation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-600">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                Brookline, MA
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Bright Scandinavian Kitchen</h3>
<p className="mt-1 text-sm text-neutral-700">Renovation • Custom cabinetry • Quartz surfaces</p>
</div>
</a>
<a className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:-translate-y-1 hover:shadow-sm transition-all" href="#/project/mid-century-exterior-refresh">
<div className="aspect-[16/10] overflow-hidden bg-neutral-100">
<img alt="Exterior renovation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2000&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-600">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                Boulder, CO
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Mid-Century Exterior Refresh</h3>
<p className="mt-1 text-sm text-neutral-700">Facade • Windows • Energy upgrades</p>
</div>
</a>
<a className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:-translate-y-1 hover:shadow-sm transition-all" href="#/project/serene-spa-bathroom">
<div className="aspect-[16/10] overflow-hidden bg-neutral-100">
<img alt="Bathroom renovation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-600">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                Seattle, WA
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Serene Spa Bathroom</h3>
<p className="mt-1 text-sm text-neutral-700">Renovation • Heated floors • Walk-in shower</p>
</div>
</a>
<a className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:-translate-y-1 hover:shadow-sm transition-all" href="#/project/warm-timber-addition">
<div className="aspect-[16/10] overflow-hidden bg-neutral-100">
<img alt="Addition project" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2000&auto=format&fit=crop" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-600">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                Austin, TX
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Warm Timber Addition</h3>
<p className="mt-1 text-sm text-neutral-700">Great room • Skylights • Indoor–outdoor flow</p>
</div>
</a>
<a className="group rounded-xl overflow-hidden border border-neutral-200 bg-white hover:-translate-y-1 hover:shadow-sm transition-all" href="#/project/net-zero-retrofit">
<div className="aspect-[16/10] overflow-hidden bg-neutral-100">
<img alt="Energy retrofit" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-600">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                Madison, WI
              </div>
<h3 className="mt-2 text-lg font-semibold tracking-tight">Net-Zero Retrofit</h3>
<p className="mt-1 text-sm text-neutral-700">Insulation • Heat pump • Solar-ready</p>
</div>
</a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="process">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Our process</h2>
<p className="mt-2 text-neutral-700">Clarity from day one. You’ll always know what’s next.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 gap-8">

<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="message-square"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">1. Consult</h3>
<p className="text-sm text-neutral-700">We listen, learn, and align on goals, scope, and budget.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="pencil-ruler"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">2. Plan & Design</h3>
<p className="text-sm text-neutral-700">Permits, drawings, selections, and an ironclad schedule.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="wrench"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">3. Build</h3>
<p className="text-sm text-neutral-700">Dedicated crew, clean site, and proactive communication.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="shield-check"></i>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">4. Deliver & Support</h3>
<p className="text-sm text-neutral-700">Final walkthrough, warranties, and post-project care.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="testimonials">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Clients love working with us</h2>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=120&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium tracking-tight">Ava Thompson</p>
<p className="text-xs text-neutral-600">Kitchen Renovation</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-800 leading-relaxed">
              Transparent costs, zero surprises. The crew was respectful and meticulous. We love our new kitchen!
            </p>
<div className="mt-4 flex gap-1 text-amber-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=120&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium tracking-tight">Marcus Lee</p>
<p className="text-xs text-neutral-600">Custom Home</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-800 leading-relaxed">
              The schedule was spot on and the craftsmanship top-tier. Communication was excellent throughout.
            </p>
<div className="mt-4 flex gap-1 text-amber-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star-half"></i>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<img alt="Client portrait" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=120&auto=format&fit=crop" />
<div>
<p className="text-sm font-medium tracking-tight">Priya Desai</p>
<p className="text-xs text-neutral-600">Exterior Refresh</p>
</div>
</div>
<p className="mt-4 text-sm text-neutral-800 leading-relaxed">
              Our home looks brand new. The team handled permits and inspections seamlessly. Highly recommend!
            </p>
<div className="mt-4 flex gap-1 text-amber-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6">
<div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ready to talk about your home?</h3>
<p className="mt-2 text-neutral-700">Book a free 30-minute consultation to get ideas, timelines, and a ballpark budget.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium tracking-tight hover:bg-neutral-800 hover:shadow hover:-translate-y-0.5 transition-all" href="#quote">
<i className="w-5 h-5" data-lucide="calendar-plus"></i>
            Book now
          </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20" id="quote">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Request a quote</h2>
<p className="mt-2 text-neutral-700">Tell us about your project. We’ll follow up within one business day.</p>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

<form className="lg:col-span-2 rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-700">First name</label>
<input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow" placeholder="Jamie" type="text" />
</div>
<div>
<label className="text-sm text-neutral-700">Last name</label>
<input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow" placeholder="Rivera" type="text" />
</div>
<div>
<label className="text-sm text-neutral-700">Email</label>
<input className="mt-1 w-full rounded-md border border-neutral- 300 bg-white px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow" placeholder="you@example.com" type="email" />
</div>
<div>
<label className="text-sm text-neutral-700">Phone</label>
<input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow" placeholder="(555) 123-4567" type="tel" />
</div>
<div>
<label className="text-sm text-neutral-700">Project type</label>
<select className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow">
<option>Custom Home</option>
<option>Kitchen Renovation</option>
<option>Bathroom Renovation</option>
<option>Addition</option>
<option>Exterior Refresh</option>
<option>Energy Upgrade</option>
<option>Other</option>
</select>
</div>
<div>
<label className="text-sm text-neutral-700">Project location</label>
<input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow" placeholder="City, State" type="text" />
</div>
<div>
<label className="text-sm text-neutral-700">Preferred start</label>
<select className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow">
<option>As soon as possible</option>
<option>Within 3 months</option>
<option>3–6 months</option>
<option>6–12 months</option>
<option>12+ months</option>
</select>
</div>
<div>
<label className="text-sm text-neutral-700">Estimated budget</label>
<select className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow">
<option>$25k–$50k</option>
<option>$50k–$100k</option>
<option>$100k–$250k</option>
<option>$250k–$500k</option>
<option>$500k+</option>
<option>Still exploring</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-neutral-700">How did you hear about us?</label>
<input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow" placeholder="Referral, Google, Instagram, etc." type="text" />
</div>
<div className="sm:col-span-2">
<label className="text-sm text-neutral-700">Project details</label>
<textarea className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow" placeholder="Tell us about the space, goals, timeline, and any must-haves." rows="5"></textarea>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-neutral-700">Upload files (optional)</label>
<label className="mt-1 flex flex-col items-center justify-center gap-2 rounded-md border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center hover:border-neutral-400 transition-colors cursor-pointer">
<i className="w-5 h-5 text-neutral-700" data-lucide="upload-cloud"></i>
<span className="text-xs text-neutral-600">Drag & drop plans or photos, or click to browse</span>
<input className="sr-only" multiple="" type="file" />
</label>
</div>
</div>
<div className="mt-6 flex flex-col gap-4">
<div className="flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900/20" id="consent" required type="checkbox" />
<label className="text-sm text-neutral-700" htmlFor="consent">I agree to be contacted about my inquiry and understand this is a free, no‑obligation consultation.</label>
</div>
<div className="hidden">
<label className="text-sm">Leave this field empty</label>
<input autocomplete="off" className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-sm" tabindex="-1" type="text" />
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-neutral-900 text-white px-5 py-3 text-sm font-medium tracking-tight hover:bg-neutral-800 hover:shadow-sm hover:-translate-y-0.5 transition-all" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                Submit request
              </button>
<p className="hidden text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-3 py-2" id="formSuccess">Thanks—your request has been received. We’ll be in touch within one business day.</p>
</div>
</form>

<aside className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="phone-call"></i>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Talk to a project lead</p>
<a className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="tel:+1234567890">(123) 456-7890</a>
</div>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-2 text-xs text-neutral-700">
<i className="w-4 h-4 text-emerald-600" data-lucide="badge-check"></i>
                  Licensed & insured
                </div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-2 text-xs text-neutral-700">
<i className="w-4 h-4 text-emerald-600" data-lucide="file-check-2"></i>
                  Permit support
                </div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-2 text-xs text-neutral-700">
<i className="w-4 h-4 text-emerald-600" data-lucide="calendar-clock"></i>
                  On-time delivery
                </div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-2 text-xs text-neutral-700">
<i className="w-4 h-4 text-emerald-600" data-lucide="shield"></i>
                  10-year warranty
                </div>
</div>
</div>
<div className="mt-6 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
<p className="text-sm font-medium tracking-tight">Office hours</p>
<p className="mt-1 text-sm text-neutral-700">Mon–Fri, 8:00am–5:00pm</p>
<p className="text-xs text-neutral-600">Response time: under 24 hours</p>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm rounded-md border border-neutral-300 bg-white px-4 py-2 hover:bg-neutral-50 hover:border-neutral-400 transition-all" href="#/projects">
<i className="w-4 h-4" data-lucide="images"></i>
                Browse recent projects
              </a>
</div>
</aside>
</div>
</section>
</main>

<main className="hidden" data-page="services">
<section className="max-w-7xl mx-auto px-6 py-16">
<div className="max-w-3xl">
<p className="text-xs uppercase tracking-wider text-neutral-500">Services</p>
<h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">Design–build for every stage of homeownership</h1>
<p className="mt-3 text-neutral-700">From concept to keys, our in-house team coordinates architecture, engineering, permitting, and construction.</p>
<div className="mt-4">
<a className="inline-flex items-center gap-2 text-sm rounded-md border border-neutral-300 bg-white px-4 py-2 hover:bg-neutral-50 hover:border-neutral-400 transition-all" href="#/services/details">
<i className="w-4 h-4" data-lucide="file-text"></i>
              Service details
            </a>
</div>
</div>

<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="construction"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Fixed + cost-plus options</h3>
</div>
<p className="mt-2 text-sm text-neutral-700">We tailor contract type to your risk profile and scope—full transparency either way.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Line-item budgets</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Open-book purchasing</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Weekly updates</li>
</ul>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="clipboard-check"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Permits & inspections</h3>
</div>
<p className="mt-2 text-sm text-neutral-700">We coordinate city submittals, engineering, and all inspections to keep you stress-free.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Code-compliant plans</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Scheduled inspections</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Close-out package</li>
</ul>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-100 grid place-items-center">
<i className="w-5 h-5 text-neutral-800" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight">Warranty & care</h3>
</div>
<p className="mt-2 text-sm text-neutral-700">Every project includes workmanship guarantees and dedicated post-project support.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> 10-year structural</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> 2-year systems</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> 1-year finishes</li>
</ul>
</div>
</div>

<div className="mt-10 grid md:grid-cols-4 gap-4">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<p className="text-xs text-neutral-600">Kitchen refresh</p>
<p className="mt-1 text-xl font-semibold tracking-tight">$35k–$75k</p>
<p className="text-xs text-neutral-600">4–8 weeks</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<p className="text-xs text-neutral-600">Full bathroom</p>
<p className="mt-1 text-xl font-semibold tracking-tight">$25k–$60k</p>
<p className="text-xs text-neutral-600">3–6 weeks</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<p className="text-xs text-neutral-600">Additions</p>
<p className="mt-1 text-xl font-semibold tracking-tight">$120k–$350k</p>
<p className="text-xs text-neutral-600">8–20 weeks</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<p className="text-xs text-neutral-600">Custom homes</p>
<p className="mt-1 text-xl font-semibold tracking-tight">$450k+</p>
<p className="text-xs text-neutral-600">6–12+ months</p>
</div>
</div>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors" href="#/services/details">
<i className="w-4 h-4" data-lucide="book-open"></i>
            Explore detailed scopes
          </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all" href="#quote">
<i className="w-4 h-4" data-lucide="calendar"></i>
            Get a tailored estimate
          </a>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-20">
<div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
<div className="flex items-center justify-between flex-wrap gap-3">
<h2 className="text-2xl font-semibold tracking-tight">Frequently asked questions</h2>
<a className="inline-flex items-center gap-2 text-sm rounded-md border border-neutral-300 bg-white px-4 py-2 hover:bg-neutral-50 hover:border-neutral-400 transition-all" href="#quote">
<i className="w-4 h-4" data-lucide="message-circle"></i>
              Ask a question
            </a>
</div>
<div className="mt-6 divide-y divide-neutral-200">
<details className="py-4 group">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Do you work with outside architects?</span>
<i className="w-4 h-4 text-neutral-600 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<p className="mt-3 text-sm text-neutral-700">Yes—we frequently collaborate with independent architects and designers, or we can lead design in-house depending on scope.</p>
</details>
<details className="py-4 group">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">How accurate are your estimates?</span>
<i className="w-4 h-4 text-neutral-600 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<p className="mt-3 text-sm text-neutral-700">Our preconstruction process produces a detailed, line-item estimate and a clear allowance schedule. Typical variance is under 5% with fixed scope.</p>
</details>
<details className="py-4 group">
<summary className="flex cursor-pointer list-none items-center justify-between">
<span className="text-sm font-medium">Are you licensed and insured?</span>
<i className="w-4 h-4 text-neutral-600 group-open:rotate-45 transition-transform" data-lucide="plus"></i>
</summary>
<p className="mt-3 text-sm text-neutral-700">Yes—state license #HB-10427. We carry general liability, workers’ compensation, and umbrella coverage.</p>
</details>
</div>
</div>
</section>
</main>

<main className="hidden" data-page="services-details">
<section className="max-w-7xl mx-auto px-6 py-16">
<div className="grid lg:grid-cols-[260px,1fr] gap-10">

<aside className="hidden lg:block">
<div className="sticky top-24 rounded-xl border border-neutral-200 bg-white p-4">
<p className="text-xs uppercase tracking-wider text-neutral-500">On this page</p>
<nav className="mt-3 grid gap-2 text-sm">
<a className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900" href="#custom-homes"><i className="w-4 h-4" data-lucide="home"></i>Custom Homes</a>
<a className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900" href="#kitchens-baths"><i className="w-4 h-4" data-lucide="ruler"></i>Kitchens & Baths</a>
<a className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900" href="#additions-facades"><i className="w-4 h-4" data-lucide="paintbrush"></i>Additions & Facades</a>
<a className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900" href="#energy-upgrades"><i className="w-4 h-4" data-lucide="leaf"></i>Energy Upgrades</a>
</nav>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors" href="#quote">
<i className="w-4 h-4" data-lucide="calendar"></i>
                  Request a consult
                </a>
</div>
</div>
</aside>

<div className="space-y-14">

<section className="scroll-mt-24" id="custom-homes">
<div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
<div className="aspect-[16/6] bg-neutral-100">
<img alt="Custom home exterior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start justify-between gap-4 flex-wrap">
<h2 className="text-2xl font-semibold tracking-tight">Custom Homes</h2>
<div className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs">
<i className="w-4 h-4" data-lucide="timer"></i> Typical: 8–14 months
                    </div>
</div>
<p className="mt-3 text-neutral-700">Full-service design–build with integrated architecture, engineering, and construction management.</p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Starting at</p>
<p className="text-xl font-semibold tracking-tight">$450k+</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Delivery</p>
<p className="text-xl font-semibold tracking-tight">Fixed or cost-plus</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Warranty</p>
<p className="text-xl font-semibold tracking-tight">10 years structural</p>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-2 gap-6">
<div>
<p className="text-sm font-medium">Included</p>
<ul className="mt-2 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Schematic + permit drawings</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Structural engineering</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-emerald-600" data-lucide="check"></i> Vendor & trade management</li>
</ul>
</div>
<div>
<p className="text-sm font-medium">Popular options</p>
<ul className="mt-2 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-neutral-700" data-lucide="plus"></i> Passive house envelope</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-neutral-700" data-lucide="plus"></i> Solar + battery backup</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-neutral-700" data-lucide="plus"></i> Smart home package</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="kitchens-baths">
<div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
<div className="aspect-[16/6] bg-neutral-100">
<img alt="Kitchen renovation" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop" />
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start justify-between gap-4 flex-wrap">
<h2 className="text-2xl font-semibold tracking-tight">Kitchens & Baths</h2>
<div className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs">
<i className="w-4 h-4" data-lucide="timer"></i> Typical: 3–10 weeks
                    </div>
</div>
<p className="mt-3 text-neutral-700">Transform high-use spaces with durable materials and thoughtful storage.</p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Kitchen</p>
<p className="text-xl font-semibold tracking-tight">$35k–$120k</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Bathroom</p>
<p className="text-xl font-semibold tracking-tight">$25k–$80k</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Design</p>
<p className="text-xl font-semibold tracking-tight">3D layouts & selections</p>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="additions-facades">
<div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
<div className="aspect-[16/6] bg-neutral-100">
<img alt="Home addition" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2000&auto=format&fit=crop" />
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start justify-between gap-4 flex-wrap">
<h2 className="text-2xl font-semibold tracking-tight">Additions & Facades</h2>
<div className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs">
<i className="w-4 h-4" data-lucide="timer"></i> Typical: 8–20 weeks
                    </div>
</div>
<p className="mt-3 text-neutral-700">Add space or refresh the face of your home without compromising structural integrity.</p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Addition</p>
<p className="text-xl font-semibold tracking-tight">$120k–$350k</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Facade refresh</p>
<p className="text-xl font-semibold tracking-tight">$25k–$90k</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Engineering</p>
<p className="text-xl font-semibold tracking-tight">Included</p>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="energy-upgrades">
<div className="rounded-2xl overflow-hidden border border-neutral-200 bg-white">
<div className="aspect-[16/6] bg-neutral-100">
<img alt="Energy upgrades" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start justify-between gap-4 flex-wrap">
<h2 className="text-2xl font-semibold tracking-tight">Energy Upgrades</h2>
<div className="inline-flex items-center gap-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs">
<i className="w-4 h-4" data-lucide="timer"></i> Typical: 1–6 weeks
                    </div>
</div>
<p className="mt-3 text-neutral-700">Improve comfort and reduce utility costs with high-impact efficiency upgrades.</p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Insulation + air sealing</p>
<p className="text-xl font-semibold tracking-tight">$4k–$18k</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Heat pump systems</p>
<p className="text-xl font-semibold tracking-tight">$8k–$22k</p>
</div>
<div className="rounded-lg border border-neutral-200 p-4">
<p className="text-xs text-neutral-600">Rebates & credits</p>
<p className="text-xl font-semibold tracking-tight">Guidance included</p>
</div>
</div>
</div>
</div>
</section>

<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors" href="#quote">
<i className="w-4 h-4" data-lucide="hammer"></i>
                Start your project
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all" href="#/projects">
<i className="w-4 h-4" data-lucide="images"></i>
                View inspiration
              </a>
</div>
</div>
</div>
</section>
</main>

<main className="hidden" data-page="projects">
<section className="max-w-7xl mx-auto px-6 py-16">
<div className="flex items-end justify-between gap-6">
<div>
<p className="text-xs uppercase tracking-wider text-neutral-500">Portfolio</p>
<h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight">Our recent work</h1>
<p className="mt-2 text-neutral-700">Browse custom homes, renovations, additions, and energy upgrades.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all" id="projectsFilterAll">
<i className="w-4 h-4" data-lucide="grid-3x3"></i>
              All
            </button>
<button className="proj-filter inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all" data-filter="Custom Home">
<i className="w-4 h-4" data-lucide="home"></i>
              Custom Homes
            </button>
<button className="proj-filter inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all" data-filter="Renovation">
<i className="w-4 h-4" data-lucide="wrench"></i>
              Renovations
            </button>
<button className="proj-filter inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all" data-filter="Addition">
<i className="w-4 h-4" data-lucide="plus-square"></i>
              Additions
            </button>
<button className="proj-filter inline-flex items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm hover:bg-neutral-50 hover:border-neutral-400 transition-all" data-filter="Energy">
<i className="w-4 h-4" data-lucide="leaf"></i>
              Energy
            </button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="projectsGrid">

</div>
</section>
</main>

<main className="hidden" data-page="project">
<article id="projectArticle">

</article>
</main>

<footer className="mt-20 border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<div className="inline-flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-neutral-900 text-white grid place-items-center tracking-tighter text-[11px] font-semibold">HB</div>
<span className="text-sm font-medium tracking-tight">Haven Build Co.</span>
</div>
<p className="mt-3 text-sm text-neutral-700">Premium home building and renovation across the Pacific Northwest and beyond.</p>
<div className="mt-4 flex gap-3">
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="tel:+1234567890"><i className="w-4 h-4" data-lucide="phone"></i>(123) 456-7890</a>
<a className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-neutral-900 transition-colors" href="#quote"><i className="w-4 h-4" data-lucide="mail"></i>Request quote</a>
</div>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Company</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-neutral-900 transition-colors" href="#/services">Services</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#/projects">Projects</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#/process">Process</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#testimonials">Reviews</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Legal</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><span className="cursor-default">Licensed • Insured</span></li>
<li><span className="cursor-default">10-Year Structural Warranty</span></li>
</ul>
</div>
<div>
<p className="text-sm font-medium tracking-tight">Newsletter</p>
<form className="mt-3 flex gap-2" id="newsletterForm">
<input aria-label="Email address" className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 transition-shadow" placeholder="you@example.com" required type="email" />
<button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">
<i className="w-4 h-4" data-lucide="send"></i>
              Join
            </button>
</form>
<p className="hidden mt-2 text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-1" id="newsletterSuccess">Thanks! Please check your inbox to confirm.</p>
</div>
</div>
<div className="border-t border-neutral-200">
<div className="max-w-7xl mx-auto px-6 py-6 text-xs text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-3">
<p>© <span id="year"></span> Haven Build Co. All rights reserved.</p>
<p>Built with care in the PNW.</p>
</div>
</div>
</footer>



    </>
  );
}
