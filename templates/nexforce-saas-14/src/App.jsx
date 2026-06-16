import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
},
extend: {
animation: {
'scroll': 'scroll 40s linear infinite',
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
'glow-pulse': 'glowPulse 2s ease-in-out infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
glowPulse: {
'0%, 100%': { boxShadow: '0 0 8px rgba(59, 130, 246, 0.6), 0 0 16px rgba(59, 130, 246, 0.4)' },
'50%': { boxShadow: '0 0 12px rgba(59, 130, 246, 0.8), 0 0 24px rgba(59, 130, 246, 0.5)' },
},
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

      // Theme Toggle
      const html = document.documentElement;
      const themeSwitch = document.getElementById('theme-toggle-switch');
      const themeRow = document.getElementById('theme-toggle-row');
      const themeText = document.getElementById('theme-text');
      const mobileThemeSwitch = document.getElementById('mobile-theme-toggle');

      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }

      function updateThemeText() {
        if (html.classList.contains('dark')) {
          themeText.textContent = 'Modo Claro';
        } else {
          themeText.textContent = 'Modo Escuro';
        }
      }
      updateThemeText();

      function toggleTheme() {
        html.classList.toggle('dark');
        localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
        updateThemeText();
      }

      themeSwitch.addEventListener('click', (e) => { e.stopPropagation(); toggleTheme(); });
      themeRow.addEventListener('click', toggleTheme);
      mobileThemeSwitch.addEventListener('click', toggleTheme);

      // Language expandable dropdown
      const langToggleBtn = document.getElementById('lang-toggle-btn');
      const langExpandable = document.getElementById('lang-expandable');
      const langArrow = document.getElementById('lang-arrow');
      const currentLangFlag = document.getElementById('current-lang-flag');
      const currentLangText = document.getElementById('current-lang-text');

      langToggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langExpandable.classList.toggle('expanded');
        langArrow.style.transform = langExpandable.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0deg)';
      });

      document.querySelectorAll('.lang-option-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          currentLangFlag.textContent = btn.getAttribute('data-flag');
          currentLangText.textContent = btn.getAttribute('data-name');
          langExpandable.classList.remove('expanded');
          langArrow.style.transform = 'rotate(0deg)';
        });
      });

      document.querySelectorAll('.mobile-lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.mobile-lang-option').forEach(b => {
            b.classList.remove('text-white'); b.classList.add('text-white/50'); b.style.borderColor = 'transparent';
          });
          btn.classList.remove('text-white/50'); btn.classList.add('text-white'); btn.style.borderColor = 'rgba(255,255,255,0.2)';
        });
      });

      // Mobile menu
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileCloseBtn = document.getElementById('mobile-close-btn');
      const mobileSheet = document.getElementById('mobile-sheet');

      const openMobileMenu = () => {
        mobileSheet.style.display = 'block';
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => { mobileSheet.classList.add('open'); });
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      };
      const closeMobileMenu = () => {
        mobileSheet.classList.remove('open');
        document.body.style.overflow = 'auto';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        setTimeout(() => { mobileSheet.style.display = 'none'; }, 400);
      };
      mobileMenuBtn.addEventListener('click', openMobileMenu);
      mobileCloseBtn.addEventListener('click', closeMobileMenu);
      window.addEventListener('resize', () => { if (window.innerWidth > 1024) closeMobileMenu(); });

      // ==================== ORBITING CIRCLES JS ====================
      const orbitData = [
        {
          radius: 310,
          speed: 2,
          reverse: false,
          icons: [
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vue-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vite-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/spotify-icon.svg",
          ],
          prefix: "o1"
        },
        {
          radius: 390,
          speed: 2,
          reverse: true,
          icons: [
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/typescript-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-icon.svg",
          ],
          prefix: "o2"
        },
        {
          radius: 470,
          speed: 2,
          reverse: false,
          icons: [
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/notion-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/github-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/slack-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/laravel-icon.svg",
          ],
          prefix: "o3"
        },
        {
          radius: 550,
          speed: 1,
          reverse: true,
          icons: [
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/gatsby-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/dropbox-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/brave-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vscode-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/sketch-icon.svg",
            "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg",
          ],
          prefix: "o4"
        }
      ];

      // Create single image per orbit icon element
      orbitData.forEach(orbit => {
        orbit.icons.forEach((src, i) => {
          const el = document.getElementById(`${orbit.prefix}-i${i}`);
          if (el) {
            // Clear any existing content first
            el.innerHTML = '';
            const img = document.createElement('img');
            img.src = src;
            img.alt = '';
            el.appendChild(img);
          }
        });
      });

      // Animate orbiting icons with JS
      let startTime = null;

      function animateOrbits(timestamp) {
        if (!startTime) startTime = timestamp;
        const elapsed = (timestamp - startTime) / 1000;

        orbitData.forEach(orbit => {
          const count = orbit.icons.length;
          const diameter = orbit.radius * 2;
          const centerX = diameter / 2;
          const centerY = diameter / 2;
          const direction = orbit.reverse ? -1 : 1;
          const angularSpeed = (orbit.speed * 2 * Math.PI) / 60;

          orbit.icons.forEach((src, i) => {
            const el = document.getElementById(`${orbit.prefix}-i${i}`);
            if (!el) return;

            const baseAngle = (i / count) * 2 * Math.PI;
            const currentAngle = baseAngle + direction * angularSpeed * elapsed;

            const x = centerX + orbit.radius * Math.cos(currentAngle);
            const y = centerY + orbit.radius * Math.sin(currentAngle);

            el.style.left = x + 'px';
            el.style.top = y + 'px';

            // Counter-rotate the image to keep it upright
            const img = el.querySelector('img');
            if (img) {
              const angleDeg = direction * angularSpeed * elapsed * (180 / Math.PI);
              img.style.transform = `rotate(${-angleDeg}deg)`;
            }
          });
        });

        requestAnimationFrame(animateOrbits);
      }

      requestAnimationFrame(animateOrbits);

      // Intersection Observer
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

      document.querySelectorAll('section').forEach(section => { section.style.opacity = '1'; });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg" href="#main-content">
      Skip to main content
    </a>

<nav aria-label="Main navigation" className="fixed top-0 z-50 w-full transition-colors duration-500 bg-white dark:bg-zinc-950" id="main-navbar" role="navigation">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-zinc-200 dark:border-zinc-800">
<div className="flex items-center justify-between gap-3.5 py-5">

<a className="flex items-center gap-2 text-lg font-semibold tracking-tighter focus-ring rounded-lg" href="#">
<div className="w-8 h-8 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-zinc-900 shadow-sm">
<svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<span className="hidden md:inline-block text-sm font-bold tracking-tight text-zinc-900 dark:text-white">
              NEXFORCE
            </span>
</a>

<div className="hidden lg:flex items-center">
<ul className="flex items-center gap-1">
<li className="nav-item">
<button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors bg-transparent">
                  Soluções
                  <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50">
<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-2" style={{width: '22rem'}}>
<div className="p-3 pb-2">
<span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        Soluções
                      </span>
</div>
<ul>
<li>
<a className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors" href="#">
<div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-lg text-zinc-600 dark:text-zinc-300" icon="solar:shop-2-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white leading-normal">
                              Nexforce Marketplace
                            </h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal mt-0.5">
                              Distribuição de software com compliance fiscal
                            </p>
</div>
</a>
</li>
<li>
<a className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors" href="#">
<div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-lg text-zinc-600 dark:text-zinc-300" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white leading-normal">
                              Nexforce Agents
                            </h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal mt-0.5">
                              Agentes de IA para automação inteligente
                            </p>
</div>
</a>
</li>
<li>
<a className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors" href="#">
<div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-lg text-zinc-600 dark:text-zinc-300" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white leading-normal">
                              Nexforce Services
                            </h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal mt-0.5">
                              Implementação e consultoria especializada
                            </p>
</div>
</a>
</li>
</ul>
</div>
</div>
</li>
<li className="nav-item">
<button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors bg-transparent">
                  Company
                  <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 mt-2 z-50">
<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-2" style={{width: '22rem'}}>
<div className="p-3 pb-2">
<span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                        Company
                      </span>
</div>
<ul>
<li>
<a className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors" href="#">
<div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-5 h-5 text-zinc-600 dark:text-zinc-300" data-lucide="info" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white leading-normal">
                              Sobre a Nexforce
                            </h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal mt-0.5">
                              Nossa missão, visão e valores
                            </p>
</div>
</a>
</li>
<li>
<a className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors" href="#">
<div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-5 h-5 text-zinc-600 dark:text-zinc-300" data-lucide="handshake" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white leading-normal">
                              Seja um Parceiro
                            </h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal mt-0.5">
                              Programa para fabricantes de software
                            </p>
</div>
</a>
</li>
<li>
<a className="flex items-start gap-3 rounded-xl px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors" href="#">
<div className="w-9 h-9 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="w-5 h-5 text-zinc-600 dark:text-zinc-300" data-lucide="store" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 dark:text-white leading-normal">
                              Seja um Revendedor
                            </h3>
<p className="text-xs text-zinc-500 dark:text-zinc-400 leading-normal mt-0.5">
                              Revenda soluções e ganhe comissões
                            </p>
</div>
</a>
</li>
</ul>
</div>
</div>
</li>
<li>
<a className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white rounded-lg transition-colors inline-flex items-center" href="#">
                  Recursos
                </a>
</li>
</ul>
</div>

<div className="flex items-center gap-3.5">
<div className="login-dropdown hidden sm:block">
<button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors bg-transparent">
                Log in
                <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="login-menu absolute top-full right-0 mt-2 z-50">
<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl p-2" style={{width: '17rem'}}>
<div className="p-3 pb-2">
<span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      Conta
                    </span>
</div>
<a className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors" href="#">
<iconify-icon className="text-xl text-zinc-600 dark:text-zinc-300" icon="solar:shop-2-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900 dark:text-white">
                      Entrar em Marketplace
                    </span>
</a>
<a className="flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors" href="#">
<iconify-icon className="text-xl text-zinc-600 dark:text-zinc-300" icon="solar:widget-2-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-900 dark:text-white">
                      Entrar em Procurement
                    </span>
</a>
<div className="h-px bg-zinc-200 dark:bg-zinc-800 mx-3 my-1"></div>
<div className="p-3 pb-2">
<span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      Aparência
                    </span>
</div>
<div className="flex items-center justify-between rounded-xl px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer" id="theme-toggle-row">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-zinc-600 dark:text-zinc-300 block dark:hidden" icon="solar:moon-linear" id="theme-icon-light"></iconify-icon>
<iconify-icon className="text-xl text-zinc-600 dark:text-zinc-300 hidden dark:block" icon="solar:sun-linear" id="theme-icon-dark"></iconify-icon>
<span className="text-sm font-medium text-zinc-900 dark:text-white" id="theme-text">
                        Modo Escuro
                      </span>
</div>
<div aria-checked="false" aria-label="Toggle dark mode" className="theme-switch" id="theme-toggle-switch" role="switch" tabindex="0"></div>
</div>
<div className="h-px bg-zinc-200 dark:bg-zinc-800 mx-3 my-1"></div>
<div className="p-3 pb-2">
<span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">
                      Idioma
                    </span>
</div>
<div className="px-3 pb-2">
<button className="flex items-center justify-between w-full rounded-xl px-3 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors" id="lang-toggle-btn">
<div className="flex items-center gap-2">
<span id="current-lang-flag">🇧🇷</span>
<span className="text-sm font-medium text-zinc-900 dark:text-white" id="current-lang-text">
                          Português
                        </span>
</div>
<iconify-icon className="text-sm text-zinc-500 dark:text-zinc-400 transition-transform" icon="solar:alt-arrow-down-linear" id="lang-arrow"></iconify-icon>
</button>
<div className="lang-expandable mt-1" id="lang-expandable">
<div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-xl p-1 space-y-1">
<button className="lang-option-item flex items-center gap-2 w-full rounded-lg px-3 py-2.5 text-left" data-flag="🇺🇸" data-lang="en" data-name="English">
<span>🇺🇸</span>
<span className="text-sm font-medium text-zinc-900 dark:text-white">
                            English
                          </span>
</button>
<button className="lang-option-item flex items-center gap-2 w-full rounded-lg px-3 py-2.5 text-left" data-flag="🇪🇸" data-lang="es" data-name="Español">
<span>🇪🇸</span>
<span className="text-sm font-medium text-zinc-900 dark:text-white">
                            Español
                          </span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
<a className="btn-primary inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium focus-ring whitespace-nowrap" href="#">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
<span className="hidden sm:inline">Agendar Reunião</span>
</a>
<button aria-expanded="false" aria-label="Open menu" className="lg:hidden w-9 h-9 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors focus-ring" id="mobile-menu-btn">
<iconify-icon aria-hidden="true" className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="mobile-sheet fixed inset-0 z-[600] h-screen w-full bg-zinc-900 dark:bg-zinc-950 text-white overflow-y-auto" id="mobile-sheet" style={{display: 'none'}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
<div className="flex justify-end pt-5">
<button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" id="mobile-close-btn">
<iconify-icon className="text-xl text-white" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col justify-between gap-24 pt-16">
<div className="grid grid-cols-2 gap-x-4 gap-y-10">
<div className="col-span-2 flex flex-col gap-4">
<div className="text-xs text-white/40 uppercase tracking-wider">
                Soluções
              </div>
<ul className="flex flex-col gap-3">
<li>
<a className="text-2xl font-medium text-white hover:text-white/80 transition-colors" href="#">
                    Nexforce Marketplace
                  </a>
</li>
<li>
<a className="text-2xl font-medium text-white hover:text-white/80 transition-colors" href="#">
                    Nexforce Agents
                  </a>
</li>
<li>
<a className="text-2xl font-medium text-white hover:text-white/80 transition-colors" href="#">
                    Nexforce Services
                  </a>
</li>
</ul>
</div>
<div className="flex flex-col gap-4">
<div className="text-xs text-white/40 uppercase tracking-wider">
                Company
              </div>
<ul className="flex flex-col gap-3">
<li>
<a className="text-base font-medium text-white hover:text-white/80 transition-colors" href="#">
                    Sobre a Nexforce
                  </a>
</li>
<li>
<a className="text-base font-medium text-white hover:text-white/80 transition-colors" href="#">
                    Seja um Parceiro
                  </a>
</li>
<li>
<a className="text-base font-medium text-white hover:text-white/80 transition-colors" href="#">
                    Seja um Revendedor
                  </a>
</li>
</ul>
</div>
<div className="flex flex-col gap-4">
<div className="text-xs text-white/40 uppercase tracking-wider">
                Recursos
              </div>
<ul className="flex flex-col gap-3">
<li>
<a className="text-base font-medium text-white hover:text-white/80 transition-colors" href="#">
                    Recursos
                  </a>
</li>
</ul>
<div className="text-xs text-white/40 uppercase tracking-wider mt-6">
                Conta
              </div>
<ul className="flex flex-col gap-3">
<li>
<a className="text-base font-medium text-white hover:text-white/80 transition-colors" href="#">
                    Entrar
                  </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col gap-6">
<div className="flex items-center justify-between">
<span className="text-sm font-medium text-white/60">Modo Escuro</span>
<div aria-checked="false" aria-label="Toggle dark mode" className="theme-switch" id="mobile-theme-toggle" role="switch" tabindex="0"></div>
</div>
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-white/60">Idioma</span>
<div className="flex gap-1.5">
<button className="mobile-lang-option px-3 py-1.5 rounded-lg text-xs font-medium text-white border border-white/20 transition-colors" data-lang="pt">
                  PT
                </button>
<button className="mobile-lang-option px-3 py-1.5 rounded-lg text-xs font-medium text-white/50 border border-transparent hover:border-white/20 transition-colors" data-lang="en">
                  EN
                </button>
<button className="mobile-lang-option px-3 py-1.5 rounded-lg text-xs font-medium text-white/50 border border-transparent hover:border-white/20 transition-colors" data-lang="es">
                  ES
                </button>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="text-xs text-white/40 uppercase tracking-wider">
                Social
              </div>
<div className="flex gap-6">
<a className="text-white hover:text-white/80 transition-colors font-medium" href="#">
                  Linkedin
                </a>
<a className="text-white hover:text-white/80 transition-colors font-medium" href="#">
                  Twitter
                </a>
<a className="text-white hover:text-white/80 transition-colors font-medium" href="#">
                  Facebook
                </a>
</div>
</div>
</div>
</div>
</div>
</div>

<main className="" id="main-content">

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white dark:bg-zinc-950">
<div className="absolute inset-0 z-0 bg-[length:32px_32px] bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] pointer-events-none" style={{maskImage: 'radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)', WebkitMaskImage: 'radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)'}}></div>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h1 className="animate-slide-up gradient-text leading-[1.1] sm:text-5xl lg:text-6xl xl:text-6xl text-4xl font-bold tracking-tight mb-6">
              IA para Comprar, Implementar &amp; Operar Softwares
            </h1>
<p className="dark:text-zinc-400 leading-relaxed animate-slide-up sm:text-lg text-lg text-zinc-600 max-w-2xl mr-auto mb-10 ml-auto">
              Reduza em até 50% o custo de softwares internacionais, implemente
              com especialistas e automatize a operação com agentes de IA.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up">
<a className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm focus-ring" href="#">
<iconify-icon aria-hidden="true" className="text-lg" icon="solar:calendar-linear"></iconify-icon>
                Agendar Reunião
              </a>
<a className="btn-ai w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm focus-ring" href="#">
<i className="w-4 h-4 text-blue-500" data-lucide="sparkles"></i>
                Falar com IA
              </a>
</div>
</div>

<div className="animate-slide-up mt-12 mb-6">
<div className="relative w-full max-w-7xl mx-auto overflow-hidden mask-gradient flex flex-col gap-8">
<div className="flex items-center gap-12 sm:gap-16 animate-scroll w-max">
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:box-bold"></iconify-icon>
<span className="font-semibold text-lg">Vercel</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-bold"></iconify-icon>
<span className="font-semibold text-lg">Linear</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:command-bold"></iconify-icon>
<span className="font-semibold text-lg">Raycast</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:figma-bold"></iconify-icon>
<span className="font-semibold text-lg">Figma</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:atom-bold"></iconify-icon>
<span className="font-semibold text-lg">React</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:chat-square-code-bold"></iconify-icon>
<span className="font-semibold text-lg">Slack</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:box-bold"></iconify-icon>
<span className="font-semibold text-lg">Vercel</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-bold"></iconify-icon>
<span className="font-semibold text-lg">Linear</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:command-bold"></iconify-icon>
<span className="font-semibold text-lg">Raycast</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:figma-bold"></iconify-icon>
<span className="font-semibold text-lg">Figma</span>
</div>
</div>
<div className="flex items-center gap-12 sm:gap-16 animate-scroll w-max" style={{animationDirection: 'reverse'}}>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:database-bold"></iconify-icon>
<span className="font-semibold text-lg">Supabase</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:server-bold"></iconify-icon>
<span className="font-semibold text-lg">AWS</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:cloud-bold"></iconify-icon>
<span className="font-semibold text-lg">Google Cloud</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:code-bold"></iconify-icon>
<span className="font-semibold text-lg">GitHub</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-bold"></iconify-icon>
<span className="font-semibold text-lg">Auth0</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:database-bold"></iconify-icon>
<span className="font-semibold text-lg">Supabase</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:server-bold"></iconify-icon>
<span className="font-semibold text-lg">AWS</span>
</div>
<div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
<iconify-icon className="text-2xl" icon="solar:cloud-bold"></iconify-icon>
<span className="font-semibold text-lg">Google Cloud</span>
</div>
</div>
</div>
</div>

<div className="mt-20 animate-slide-up">
<div className="relative max-w-5xl mx-auto">
<div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl shadow-zinc-900/10 dark:shadow-black/50 overflow-hidden">
<div className="h-12 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 flex items-center px-4 gap-3">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
</div>
<div className="aspect-video bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center">
<span className="text-zinc-400 dark:text-zinc-600 text-sm">
                    Product Demo GIF
                  </span>
</div>
</div>
<div className="absolute -inset-4 bg-gradient-to-r from-zinc-200/50 via-zinc-300/30 to-zinc-200/50 dark:from-zinc-800/50 dark:via-zinc-700/30 dark:to-zinc-800/50 blur-3xl -z-10 rounded-3xl opacity-50"></div>
</div>
</div>
</div>
</section>

<div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>
<section className="lg:py-32 dark:bg-zinc-950 bg-white pt-24 pb-24">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<span className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
              SOLUÇÕES
            </span>
<h2 className="sm:text-4xl lg:text-5xl dark:text-white text-3xl font-semibold text-zinc-900 tracking-tight mb-6">
              Um Ecossistema Completo
            </h2>
<p className="dark:text-zinc-400 text-lg text-zinc-600 max-w-2xl mr-auto ml-auto">
              Tudo que você precisa para escalar, em um só lugar
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">
<article className="card-hover bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 group">
<div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" icon="solar:shop-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">
                Nexforce Marketplace
              </h3>
<p className="dark:text-zinc-400 leading-relaxed text-base text-zinc-600 mb-6">
                Contrate e gerencie softwares em uma única plataforma. Pague em
                Reais e economize até 50%.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#">
                Explorar Marketplace
                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>
<article className="card-hover bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 group">
<div className="w-16 h-16 rounded-2xl dark:bg-zinc-900 flex items-center justify-center mb-6 bg-zinc-100">
<iconify-icon className="text-3xl text-zinc-900 dark:text-white" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="dark:text-white text-xl font-semibold text-zinc-900 mb-4">
                Nexforce Agents
              </h3>
<p className="dark:text-zinc-400 leading-relaxed text-base text-zinc-600 mb-6">
                Agentes de IA para automatizar desenvolvimento, processos e
                operação dos seus softwares.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#">
                Testar Agents
                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>
<article className="card-hover bg-white dark:bg-zinc-950 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8">
<div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-zinc-900 dark:text-white" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="dark:text-white text-xl font-semibold text-zinc-900 mb-4">
                Nexforce Services
              </h3>
<p className="dark:text-zinc-400 leading-relaxed text-base text-zinc-600 mb-6">
                Consultoria especializada para acelerar implementações, otimizar
                operações e extrair mais valor dos seus softwares.
              </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors" href="#">
                Conhecer Services
                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>
</div>
</div>
</section>
<div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>

<section className="lg:py-32 dark:bg-zinc-950 bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
<div className="order-2 lg:order-1">
<span className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
                Para Clientes
              </span>
<h2 className="sm:text-4xl lg:text-5xl dark:text-white leading-tight text-3xl font-semibold text-zinc-900 tracking-tight mb-6">
                Menos custo, mais controle
              </h2>
<p className="dark:text-zinc-400 leading-relaxed text-lg text-zinc-600 mb-8">
                IA aplicada para otimizar todo o ciclo de vida dos softwares
                internacionais, da compra à operação.
              </p>
<ul className="mb-8 space-y-4">
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="dark:text-zinc-300 text-zinc-700">
                    Compra, pagamento e gestão em um só lugar
                  </span>
</li>
<li className="flex gap-3 items-start">
<div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="dark:text-zinc-300 text-zinc-700">
                    Operação automatizada com agentes de IA
                  </span>
</li>
<li className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center flex-shrink-0 mt-0.5">
<iconify-icon className="text-sm" icon="solar:check-circle-bold"></iconify-icon>
</div>
<span className="dark:text-zinc-300 text-zinc-700">
                    Implementação e otimização com especialistas
                  </span>
</li>
</ul>
<a className="btn-primary inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm focus-ring" href="#">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
                Falar com Consultor
              </a>
</div>
<div className="order-1 lg:order-2">
<div className="relative">
<div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl aspect-[4/3] flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-6xl text-zinc-300 dark:text-zinc-600 mb-3" icon="solar:monitor-linear"></iconify-icon>
<p className="text-zinc-400 dark:text-zinc-500 text-sm">
                      Dashboard Preview
                    </p>
</div>
</div>
<div className="absolute -inset-4 bg-zinc-300/30 dark:bg-zinc-700/30 blur-3xl -z-10 rounded-3xl"></div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="">
<div className="relative">
<div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl aspect-[4/3] flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-6xl text-zinc-300 dark:text-zinc-600 mb-3" icon="solar:chart-2-linear"></iconify-icon>
<p className="text-zinc-400 dark:text-zinc-500 text-sm">
                      Analytics Dashboard
                    </p>
</div>
</div>
<div className="absolute -inset-4 bg-zinc-300/30 dark:bg-zinc-700/30 blur-3xl -z-10 rounded-3xl"></div>
</div>
</div>
<div className="">
<span className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
                Para Fabricantes
              </span>
<h2 className="sm:text-4xl lg:text-5xl dark:text-white leading-tight text-3xl font-semibold text-zinc-900 tracking-tight mb-6">
                Sua operação completa na América Latina
              </h2>
<p className="dark:text-zinc-400 leading-relaxed text-lg text-zinc-600 mb-8">
                Assumimos distribuição, cobrança, implementação e operação para
                acelerar sua expansão em LATAM.
              </p>
<div className="grid grid-cols-3 gap-6 mb-8">
<div className="">
<p className="dark:text-white text-3xl font-bold text-zinc-900">
                    50%
                  </p>
<p className="dark:text-zinc-400 text-sm text-zinc-500">
                    Economia para clientes
                  </p>
</div>
<div>
<p className="dark:text-white text-3xl font-bold text-zinc-900">
                    35%
                  </p>
<p className="dark:text-zinc-400 text-sm text-zinc-500">
                    Menor custo operacional
                  </p>
</div>
<div>
<p className="dark:text-white text-3xl font-bold text-zinc-900">
                    150+
                  </p>
<p className="dark:text-zinc-400 text-sm text-zinc-500">
                    Fabricantes parcerias
                  </p>
</div>
</div>
<a className="btn-primary inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium text-sm focus-ring" href="#">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
                Falar com Especialista
              </a>
</div>
</div>
</div>
</section>

<div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>
<section className="py-24 lg:py-32 overflow-hidden bg-white dark:bg-zinc-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
<div className="text-center max-w-2xl mx-auto">
<span className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
              Depoimentos
            </span>
<h2 className="sm:text-4xl dark:text-white text-3xl font-semibold text-zinc-900 tracking-tight">
              O que dizem nossos clientes
            </h2>
</div>
</div>
<div className="flex flex-col gap-8 relative gap-x-8 gap-y-8">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>
<div className="flex w-max animate-scroll gap-6">
<article className="w-[380px] p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                "Os agentes da Nexforce reduziram nosso CAC em 65% no primeiro
                mês. A entrada na LATAM foi imediata e sem fricção."
              </blockquote>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=sarah"/>
<div>
<p className="font-medium text-zinc-900 dark:text-white text-sm">
                    Sarah Chen
                  </p>
<p className="text-zinc-500 text-sm">CTO, TechFlow</p>
</div>
</div>
</article>
<article className="w-[380px] p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                "A economia em licenças de software pagou o custo da plataforma
                10x. O compliance fiscal é perfeito."
              </blockquote>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=mark"/>
<div>
<p className="font-medium text-zinc-900 dark:text-white text-sm">
                    Mark Davis
                  </p>
<p className="text-zinc-500 text-sm">VP Operations, ScaleUp</p>
</div>
</div>
</article>
<article className="w-[380px] p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                "Os agentes da Nexforce reduziram nosso CAC em 65% no primeiro
                mês. A entrada na LATAM foi imediata e sem fricção."
              </blockquote>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=sarah"/>
<div>
<p className="font-medium text-zinc-900 dark:text-white text-sm">
                    Sarah Chen
                  </p>
<p className="text-zinc-500 text-sm">CTO, TechFlow</p>
</div>
</div>
</article>
</div>
<div className="flex w-max animate-scroll gap-6" style={{animationDirection: 'reverse'}}>
<article className="w-[380px] p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                "Dobramos nossa receita de revenda empacotando serviços com
                licenças através do programa de parceiros da Nexforce."
              </blockquote>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=elena"/>
<div>
<p className="font-medium text-zinc-900 dark:text-white text-sm">
                    Elena Rodriguez
                  </p>
<p className="text-zinc-500 text-sm">Founder, DigitalEdge</p>
</div>
</div>
</article>
<article className="w-[380px] p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                "The cost savings on SaaS subscriptions alone paid for the
                platform fee 10x over. Highly recommend."
              </blockquote>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=james"/>
<div>
<p className="font-medium text-zinc-900 dark:text-white text-sm">
                    James Wilson
                  </p>
<p className="text-sm text-zinc-500">Product Lead, Fintech Co</p>
</div>
</div>
</article>
<article className="w-[380px] p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm">
<div className="flex items-center gap-1 mb-4 text-yellow-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<blockquote className="text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
                "Dobramos nossa receita de revenda empacotando serviços com
                licenças através do programa de parceiros da Nexforce."
              </blockquote>
<div className="flex items-center gap-3">
<img alt="" className="w-10 h-10 rounded-full object-cover" src="https://i.pravatar.cc/150?u=elena"/>
<div>
<p className="font-medium text-zinc-900 dark:text-white text-sm">
                    Elena Rodriguez
                  </p>
<p className="text-zinc-500 text-sm">Founder, DigitalEdge</p>
</div>
</div>
</article>
</div>
</div>
</section>
<div className="h-px bg-zinc-200 dark:bg-zinc-800"></div>

<section className="lg:py-32 overflow-hidden dark:bg-zinc-950 bg-white pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center z-20 relative mb-8">
<span className="inline-block text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-4">
              TRANSFORMAÇÃO
            </span>
<h2 className="sm:text-5xl md:text-6xl dark:text-white leading-tight text-4xl font-semibold text-zinc-900 tracking-tight">
              Centralize seus softwares.
              <br/>
              Reduza custos. Ganhe escala.
            </h2>
</div>

<div className="relative w-full overflow-hidden" style={{height: '520px'}}>
<div className="absolute left-1/2 -translate-x-1/2" id="orbits-wrapper" style={{top: '0', width: '1200px', height: '1200px'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
<svg fill="none" height="36" viewbox="0 0 40 36" width="40">
<path className="fill-zinc-900 dark:fill-white" d="M20 0L40 36H0L20 0Z"></path>
</svg>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200 dark:border-zinc-800" style={{width: '620px', height: '620px'}}>
<div className="absolute inset-0">
<div className="orbit-icon" id="o1-i0"></div>
<div className="orbit-icon" id="o1-i1"></div>
<div className="orbit-icon" id="o1-i2"></div>
<div className="orbit-icon" id="o1-i3"></div>
<div className="orbit-icon" id="o1-i4"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200 dark:border-zinc-800" style={{width: '780px', height: '780px'}}>
<div className="absolute inset-0">
<div className="orbit-icon" id="o2-i0"></div>
<div className="orbit-icon" id="o2-i1"></div>
<div className="orbit-icon" id="o2-i2"></div>
<div className="orbit-icon" id="o2-i3"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200 dark:border-zinc-800" style={{width: '940px', height: '940px'}}>
<div className="absolute inset-0">
<div className="orbit-icon" id="o3-i0"></div>
<div className="orbit-icon" id="o3-i1"></div>
<div className="orbit-icon" id="o3-i2"></div>
<div className="orbit-icon" id="o3-i3"></div>
<div className="orbit-icon" id="o3-i4"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-200 dark:border-zinc-800" style={{width: '1100px', height: '1100px'}}>
<div className="absolute inset-0">
<div className="orbit-icon" id="o4-i0"></div>
<div className="orbit-icon" id="o4-i1"></div>
<div className="orbit-icon" id="o4-i2"></div>
<div className="orbit-icon" id="o4-i3"></div>
<div className="orbit-icon" id="o4-i4"></div>
<div className="orbit-icon" id="o4-i5"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white dark:from-zinc-950 to-transparent z-10 pointer-events-none"></div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm focus-ring" href="#">
<iconify-icon aria-hidden="true" className="text-lg" icon="solar:calendar-linear"></iconify-icon>
                Agendar Reunião
              </a>
<a className="btn-ai w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm focus-ring" href="#">
<i className="w-4 h-4 text-blue-500" data-lucide="sparkles"></i>
                Falar com IA
              </a>
</div>
</div>
</div>
</section>
</main>

<footer className="dark:bg-zinc-950 dark:border-zinc-800 lg:pt-24 lg:pb-24 bg-white border-zinc-200 border-t pt-16 pb-16" role="contentinfo">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
<div className="flex w-full flex-col justify-between gap-6 lg:items-start">
<div className="flex items-center gap-2 lg:justify-start">
<a className="flex items-center gap-2 focus-ring rounded-lg" href="#">
<div className="w-8 h-8 bg-zinc-900 dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-zinc-900 shadow-sm">
<svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
</a>
<h2 className="text-xl font-semibold text-zinc-900 dark:text-white tracking-tight">
                Nexforce
              </h2>
</div>
<p className="dark:text-zinc-400 leading-relaxed text-sm text-zinc-500 max-w-[70%]">
              Agentes de IA para comprar, implementar &amp; operar softwares.
            </p>
<ul className="flex items-center space-x-4 text-zinc-400 dark:text-zinc-500">
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</li>
</ul>
</div>
<div className="grid w-full gap-6 md:grid-cols-3 lg:gap-12">
<div>
<h3 className="mb-4 font-bold text-sm text-zinc-900 dark:text-white">
                Soluções
              </h3>
<ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a className="font-medium" href="#">Nexforce Marketplace</a>
</li>
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a className="font-medium" href="#">Nexforce Agents</a>
</li>
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a className="font-medium" href="#">Nexforce Services</a>
</li>
</ul>
</div>
<div>
<h3 className="mb-4 font-bold text-sm text-zinc-900 dark:text-white">
                Company
              </h3>
<ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a className="font-medium" href="#">Sobre a Nexforce</a>
</li>
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a className="font-medium" href="#">Seja um Parceiro</a>
</li>
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a className="font-medium" href="#">Seja um Revendedor</a>
</li>
</ul>
</div>
<div>
<h3 className="mb-4 font-bold text-sm text-zinc-900 dark:text-white">
                Recursos
              </h3>
<ul className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a className="font-medium" href="#">Artigos</a>
</li>
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a className="font-medium" href="#">Notícias</a>
</li>
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a className="font-medium" href="#">Vídeos</a>
</li>
</ul>
</div>
</div>
</div>
<div className="mt-8 flex flex-col justify-between gap-4 border-t border-zinc-200 dark:border-zinc-800 py-8 text-xs font-medium text-zinc-500 dark:text-zinc-400 md:flex-row md:items-center md:text-left">
<p className="order-2 lg:order-1">© Nexforce. All rights reserved.</p>
<ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:gap-4">
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a href="#">Terms and Conditions</a>
</li>
<li className="hover:text-zinc-900 dark:hover:text-white transition-colors">
<a href="#">Privacy Policy</a>
</li>
</ul>
</div>
</div>
</footer>


    </>
  );
}
