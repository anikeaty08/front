import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Initialize icons with stroke width 1.5
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Mobile nav toggle
      const menuBtn = document.getElementById('menuBtn');
      const mobileNav = document.getElementById('mobileNav');
      menuBtn?.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
      });

      // Search interactions
      const searchInput = document.getElementById('searchInput');
      const searchBtn = document.getElementById('searchBtn');
      searchBtn?.addEventListener('click', () => {
        if (!searchInput.value.trim()) {
          searchInput.focus();
          return;
        }
        alert('Buscar: ' + searchInput.value.trim());
      });
      document.querySelectorAll('button.rounded-full.text-sm').forEach(tag => {
        tag.addEventListener('click', () => {
          searchInput.value = tag.textContent.trim();
          searchInput.focus();
        });
      });

      // I18N for header and footer (updated)
      const I18N = {
        es: {
          'nav.home': 'Inicio',
          'nav.categories': 'Categorías',
          'nav.search': 'Buscar',
          'nav.pricing': 'Precios',
          'nav.clientaccess': 'Acceso para Clientes',
          'footer.termsService': 'Términos del Servicio',
          'footer.privacyPolicy': 'Política de Privacidad',
          'footer.licenseTypes': 'Tipos de Licencias',
          'footer.cookiePolicy': 'Política de Cookies',
          'footer.rights': 'Todos los derechos reservados.'
        },
        en: {
          'nav.home': 'Home',
          'nav.categories': 'Categories',
          'nav.search': 'Search',
          'nav.pricing': 'Pricing',
          'nav.clientaccess': 'Client Access',
          'footer.termsService': 'Terms of Service',
          'footer.privacyPolicy': 'Privacy Policy',
          'footer.licenseTypes': 'License Types',
          'footer.cookiePolicy': 'Cookie Policy',
          'footer.rights': 'All rights reserved.'
        }
      };

      function applyTranslations(locale) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          const value = I18N[locale]?.[key];
          if (value) el.textContent = value;
        });
      }

      function updateLangButtons(locale) {
        document.querySelectorAll('.lang-btn').forEach(btn => {
          const active = btn.getAttribute('data-lang') === locale;
          btn.setAttribute('aria-pressed', active ? 'true' : 'false');
          btn.classList.toggle('bg-white/10', active);
          btn.classList.toggle('text-white', active);
          btn.classList.toggle('text-slate-300', !active);
        });
      }

      function setLocale(locale) {
        const lang = (locale === 'en' || locale === 'es') ? locale : 'es';
        localStorage.setItem('locale', lang);
        document.documentElement.setAttribute('lang', lang);
        applyTranslations(lang);
        updateLangButtons(lang);
      }

      // Detect preferred locale
      const saved = localStorage.getItem('locale');
      const preferred = saved || ((navigator.language || 'es').toLowerCase().startsWith('en') ? 'en' : 'es');
      setLocale(preferred);

      // Bind language buttons
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          setLocale(lang);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_-10%_-10%,rgba(59,130,246,0.15),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_120%_120%,rgba(16,185,129,0.12),transparent_60%)]"></div>
</div>

<header className="relative">
<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30">
<svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12 2l7.794 4.5v9L12 20 4.206 15.5v-9L12 2z"></path>
<path d="M12 7v10M6.5 9.75l11 6.5M17.5 9.75l-11 6.5" opacity=".5"></path>
</svg>
</span>
<span className="text-xl tracking-tight font-semibold">EPGEX</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-slate-300 hover:text-white transition" data-i18n="nav.home" href="#">Inicio</a>
<a className="text-slate-300 hover:text-white transition" data-i18n="nav.categories" href="#">Categorías</a>
<a className="text-slate-300 hover:text-white transition" data-i18n="nav.search" href="#">Buscar</a>
<a className="text-slate-300 hover:text-white transition" data-i18n="nav.pricing" href="#">Precios</a>

<div className="inline-flex items-center rounded-lg ring-1 ring-white/10 bg-white/5 p-0.5">
<button aria-pressed="true" className="lang-btn px-2.5 py-1.5 text-xs rounded-md text-white bg-white/10" data-lang="es" type="button">ES</button>
<button aria-pressed="false" className="lang-btn px-2.5 py-1.5 text-xs rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition" data-lang="en" type="button">EN</button>
</div>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-slate-100 hover:bg-white/10 ring-1 ring-white/10 transition" href="#">
<i className="h-4 w-4" data-lucide="log-in"></i>
<span className="font-medium" data-i18n="nav.clientaccess">Acceso para Clientes</span>
</a>
</div>

<button aria-label="Abrir menú" className="md:hidden inline-flex items-center justify-center rounded-lg px-3 py-2 ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition" id="menuBtn">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</nav>

<div className="md:hidden mx-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl hidden" id="mobileNav">
<div className="p-3 flex flex-col">
<a className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200" data-i18n="nav.home" href="#">Inicio</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200" data-i18n="nav.categories" href="#">Categorías</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200" data-i18n="nav.search" href="#">Buscar</a>
<a className="px-3 py-2 rounded-lg hover:bg-white/5 text-slate-200" data-i18n="nav.pricing" href="#">Precios</a>
<a className="mt-1 inline-flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-slate-100 hover:bg-white/10 ring-1 ring-white/10 transition" href="#">
<i className="h-4 w-4" data-lucide="log-in"></i>
<span className="font-medium" data-i18n="nav.clientaccess">Acceso para Clientes</span>
</a>

<div className="my-2 h-px bg-white/10"></div>

<div className="inline-flex items-center rounded-lg ring-1 ring-white/10 bg-white/5 p-0.5 self-start">
<button aria-pressed="true" className="lang-btn px-2.5 py-1.5 text-xs rounded-md text-white bg-white/10" data-lang="es" type="button">ES</button>
<button aria-pressed="false" className="lang-btn px-2.5 py-1.5 text-xs rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition" data-lang="en" type="button">EN</button>
</div>
</div>
</div>
</header>

<main className="relative">
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16 grid lg:grid-cols-2 gap-10 items-center">

<div className="relative">
<h1 className="text-5xl sm:text-6xl tracking-tight font-semibold leading-[1.05]">
            Fotos excepcionales,<br className="hidden sm:block"/> excelencia en cada píxel
          </h1>
<p className="mt-5 text-lg sm:text-xl text-slate-300">
            El destino preferido para encontrar fotos de alta calidad listas para tus proyectos creativos.
          </p>

<div className="mt-8">
<div className="group relative max-w-xl">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 blur-2xl opacity-0 group-focus-within:opacity-100 transition"></div>
<div className="relative flex items-center gap-3 rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-3.5">
<i className="h-5 w-5 text-slate-300" data-lucide="search"></i>
<input className="w-full bg-transparent placeholder:text-slate-400 text-slate-100 focus:outline-none" id="searchInput" placeholder="Buscar fotos (montañas, retratos, minimal, 3D…)" type="text"/>
<button className="inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-3.5 py-2 text-white transition" id="searchBtn">
<span className="hidden sm:inline font-medium">Buscar</span>
<i className="h-4 w-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="mt-4 flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-200">Montañas</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-200">Retrato</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-200">Minimal</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-200">Render 3D</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 text-slate-200">Arquitectura</button>
</div>
</div>

<p className="mt-6 text-slate-400">
            Selección curada, licencias simples y una experiencia rápida para equipos creativos.
          </p>
</div>

<div className="relative">
<div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-emerald-400/10 rounded-[28px] blur-2xl"></div>
<div className="relative overflow-hidden rounded-[24px] ring-1 ring-white/10 bg-slate-900/50">
<div className="p-2">
<img alt="Exploradora en terrazas de arroz al atardecer" className="w-full h-[420px] sm:h-[520px] lg:h-[560px] object-cover rounded-[20px]" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=1600&amp;auto=format&amp;fit=crop';" src="hero.jpg"/>
</div>

<div className="pointer-events-none absolute bottom-4 left-4 right-4">
<div className="inline-flex items-center gap-3 rounded-2xl bg-slate-900/60 backdrop-blur-md ring-1 ring-white/10 px-3.5 py-2.5">
<img alt="" className="h-7 w-7 rounded-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm font-medium leading-tight">Autora destacada</p>
<p className="text-xs text-slate-300">Colección: Aventuras al aire libre</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span>4K Ready</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-14">
<div className="rounded-2xl border border-white/10 bg-slate-900/40 px-6 py-4 text-center">
<p className="text-slate-300">
            La plataforma de referencia para fotos de stock de alta calidad y curación editorial.
          </p>
</div>
</section>
</main>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400">© <span id="year"></span> EPGEX. <span data-i18n="footer.rights">Todos los derechos reservados.</span></p>
<div className="flex items-center gap-5 text-slate-300">
<a className="hover:text-white transition inline-flex items-center gap-2" href="#">
<i className="h-4 w-4" data-lucide="file-text"></i>
<span data-i18n="footer.termsService">Términos del Servicio</span>
</a>
<a className="hover:text-white transition inline-flex items-center gap-2" href="#">
<i className="h-4 w-4" data-lucide="shield"></i>
<span data-i18n="footer.privacyPolicy">Política de Privacidad</span>
</a>
<a className="hover:text-white transition inline-flex items-center gap-2" href="#">
<i className="h-4 w-4" data-lucide="badge-check"></i>
<span data-i18n="footer.licenseTypes">Tipos de Licencias</span>
</a>
<a className="hover:text-white transition inline-flex items-center gap-2" href="#">
<i className="h-4 w-4" data-lucide="cookie"></i>
<span data-i18n="footer.cookiePolicy">Política de Cookies</span>
</a>

<div className="inline-flex items-center rounded-lg ring-1 ring-white/10 bg-white/5 p-0.5">
<button aria-pressed="true" className="lang-btn px-2.5 py-1.5 text-xs rounded-md text-white bg-white/10" data-lang="es" type="button">ES</button>
<button aria-pressed="false" className="lang-btn px-2.5 py-1.5 text-xs rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition" data-lang="en" type="button">EN</button>
</div>
</div>
</div>
</footer>




    </>
  );
}
