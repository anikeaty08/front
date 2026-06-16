import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Theme handling
    (function() {
      const root = document.documentElement;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      const stored = localStorage.getItem('theme');
      const setTheme = (mode) => {
        root.setAttribute('data-theme', mode);
        localStorage.setItem('theme', mode);
        // Toggle icon visibility for all toggles
        document.querySelectorAll('#themeToggle, #themeToggleMobile, #themeToggleFooter').forEach(btn => {
          const moon = btn.querySelector('.lucide-moon, .moon');
          const sun = btn.querySelector('.lucide-sun, .sun');
          const isDark = mode === 'dark';
          if (moon && sun) {
            if (isDark) { sun.classList.add('hidden'); moon.classList.remove('hidden'); }
            else { sun.classList.remove('hidden'); moon.classList.add('hidden'); }
          }
        });
      };
      const initial = stored || (prefersDark.matches ? 'dark' : 'light');
      setTheme(initial);
      prefersDark.addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) setTheme(e.matches ? 'dark' : 'light');
      });
      ['themeToggle','themeToggleMobile','themeToggleFooter'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('click', () => {
          setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
        });
      });
    })();

    // Mobile menu
    (function() {
      const btn = document.getElementById('mobileMenuBtn');
      const menu = document.getElementById('mobileMenu');
      if (btn && menu) {
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));
        // Close on link click
        menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.add('hidden')));
      }
    })();

    // Counters animation
    (function() {
      const counters = document.querySelectorAll('.counter');
      if (!counters.length) return;
      const duration = 1200;
      const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
      const animateCounter = (el) => {
        const target = parseFloat(el.getAttribute('data-target')) || 0;
        const start = 0;
        const startTime = performance.now();
        const step = (now) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const value = Math.floor(easeOutCubic(progress) * (target - start) + start);
          el.textContent = value.toLocaleString();
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.counter').forEach(animateCounter);
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      const statsSection = document.querySelector('#about');
      if (statsSection) io.observe(statsSection);
    })();

    // Forms (prevent actual submit in demo)
    document.getElementById('contactForm')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const consent = document.getElementById('consent');
      const success = document.getElementById('contactSuccess');
      if (consent && !consent.checked) {
        alert('Please agree to the privacy policy to continue.');
        return;
      }
      if (success) {
        success.classList.remove('hidden');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setTimeout(() => success.classList.add('hidden'), 5000);
      }
      e.target.reset();
    });

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header bis_size='{"x":0,"y":0,"w":1905,"h":66,"abs_x":0,"abs_y":43}' className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--bg)/0.6] backdrop-blur-xl">
<div bis_size='{"x":312,"y":0,"w":1280,"h":64,"abs_x":312,"abs_y":43}' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":344,"y":0,"w":1216,"h":64,"abs_x":344,"abs_y":43}' className="flex h-16 items-center justify-between">

<a bis_size='{"x":344,"y":10,"w":176,"h":44,"abs_x":344,"abs_y":53}' className="group flex items-center gap-3" href="#">
<div bis_size='{"x":344,"y":14,"w":36,"h":36,"abs_x":344,"abs_y":57}' className="relative grid h-9 w-9 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)] transition-transform duration-200 group-hover:scale-[1.03] group-hover:shadow-[0_0_0_2px_rgba(34,211,238,0.15)]">
<svg bis_size='{"x":352,"y":22,"w":20,"h":20,"abs_x":352,"abs_y":65}' className="lucide lucide-brain-circuit h-5 w-5 text-[var(--accent)]" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":354,"y":23,"w":8,"h":16,"abs_x":354,"abs_y":66}' d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path bis_size='{"x":360,"y":29,"w":2,"h":3,"abs_x":360,"abs_y":72}' d="M9 13a4.5 4.5 0 0 0 3-4"></path><path bis_size='{"x":357,"y":26,"w":0,"h":1,"abs_x":357,"abs_y":69}' d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path bis_size='{"x":355,"y":30,"w":0,"h":0,"abs_x":355,"abs_y":73}' d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path bis_size='{"x":355,"y":36,"w":1,"h":0,"abs_x":355,"abs_y":79}' d="M6 18a4 4 0 0 1-1.967-.516"></path><path bis_size='{"x":362,"y":32,"w":3,"h":0,"abs_x":362,"abs_y":75}' d="M12 13h4"></path><path bis_size='{"x":362,"y":37,"w":6,"h":2,"abs_x":362,"abs_y":80}' d="M12 18h6a2 2 0 0 1 2 2v1"></path><path bis_size='{"x":362,"y":28,"w":6,"h":0,"abs_x":362,"abs_y":71}' d="M12 8h8"></path><path bis_size='{"x":365,"y":24,"w":1,"h":4,"abs_x":365,"abs_y":67}' d="M16 8V5a2 2 0 0 1 2-2"></path><circle bis_size='{"x":365,"y":32,"w":0,"h":0,"abs_x":365,"abs_y":75}' cx="16" cy="13" r=".5"></circle><circle bis_size='{"x":367,"y":24,"w":0,"h":0,"abs_x":367,"abs_y":67}' cx="18" cy="3" r=".5"></circle><circle bis_size='{"x":368,"y":39,"w":0,"h":0,"abs_x":368,"abs_y":82}' cx="20" cy="21" r=".5"></circle><circle bis_size='{"x":368,"y":28,"w":0,"h":0,"abs_x":368,"abs_y":71}' cx="20" cy="8" r=".5"></circle></svg>
</div>
<div bis_size='{"x":392,"y":10,"w":128,"h":44,"abs_x":392,"abs_y":53}' className="leading-tight">
<div bis_size='{"x":392,"y":10,"w":128,"h":28,"abs_x":392,"abs_y":53}' className="text-lg font-semibold tracking-tight">DATA ENVY</div>
<div bis_size='{"x":392,"y":38,"w":128,"h":16,"abs_x":392,"abs_y":81}' className="text-xs text-[var(--text-dim)]">Technology Innovation</div>
</div>
</a>

<nav bis_size='{"x":873,"y":14,"w":686,"h":36,"abs_x":873,"abs_y":57}' className="hidden items-center gap-7 md:flex">
<a bis_size='{"x":873,"y":22,"w":40,"h":20,"abs_x":873,"abs_y":65}' className="text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#about">About</a>
<a bis_size='{"x":942,"y":22,"w":60,"h":20,"abs_x":942,"abs_y":65}' className="text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#divisions">Divisions</a>
<a bis_size='{"x":1030,"y":22,"w":69,"h":20,"abs_x":1030,"abs_y":65}' className="text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#innovation">Innovation</a>
<a bis_size='{"x":1128,"y":22,"w":114,"h":20,"abs_x":1128,"abs_y":65}' className="text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#droid">DROID Challenge</a>
<a bis_size='{"x":1271,"y":22,"w":52,"h":20,"abs_x":1271,"abs_y":65}' className="text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#contact">Contact</a>
<button aria-label="Toggle color theme" bis_size='{"x":1352,"y":16,"w":32,"h":32,"abs_x":1352,"abs_y":59}' className="relative inline-flex items-center justify-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] transition hover:text-[var(--text)] hover:shadow-[0_0_0_2px_rgba(124,58,237,0.15)]" id="themeToggle">
<svg bis_size='{"x":1360,"y":24,"w":16,"h":16,"abs_x":1360,"abs_y":67}' className="lucide lucide-moon w-[16px] h-[16px]" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1362,"y":26,"w":11,"h":11,"abs_x":1362,"abs_y":69}' d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="lucide lucide-sun hidden h-4 w-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle 12"="" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' cx="12 cy=" r="4"></circle><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M12 2v2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M12 20v2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m4.93 4.93 1.41 1.41"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m17.66 17.66 1.41 1.41"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M2 12h2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M20 12h2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m6.34 17.66-1.41 1.41"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
<a bis_size='{"x":1412,"y":14,"w":148,"h":36,"abs_x":1412,"abs_y":57}' className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-black/90 transition will-change-transform hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" href="#contact">
<svg bis_size='{"x":1432,"y":24,"w":16,"h":16,"abs_x":1432,"abs_y":67}' className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1433,"y":25,"w":13,"h":13,"abs_x":1433,"abs_y":68}' d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path bis_size='{"x":1445,"y":25,"w":0,"h":2,"abs_x":1445,"abs_y":68}' d="M20 2v4"></path><path bis_size='{"x":1444,"y":26,"w":2,"h":0,"abs_x":1444,"abs_y":69}' d="M22 4h-4"></path><circle bis_size='{"x":1433,"y":36,"w":2,"h":2,"abs_x":1433,"abs_y":79}' cx="4" cy="20" r="2"></circle></svg>
            Get in Touch
          </a>
</nav>

<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="md:hidden inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] hover:text-[var(--text)]" id="mobileMenuBtn">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M4 12h16"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M4 18h16"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="md:hidden hidden border-t border-[var(--border)] bg-[var(--bg)]" id="mobileMenu">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="flex flex-col gap-3">
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="rounded-lg px-3 py-2 text-sm text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]" href="#about">About</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="rounded-lg px-3 py-2 text-sm text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]" href="#divisions">Divisions</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="rounded-lg px-3 py-2 text-sm text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]" href="#innovation">Innovation</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="rounded-lg px-3 py-2 text-sm text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]" href="#droid">DROID Challenge</a>
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="rounded-lg px-3 py-2 text-sm text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]" href="#contact">Contact</a>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="mt-2 flex items-center justify-between">
<a bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-black/90 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" href="#contact">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M20 2v4"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M22 4h-4"></path><circle bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' cx="4" cy="20" r="2"></circle></svg>
              Get in Touch
            </a>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] hover:text-[var(--text)]" id="themeToggleMobile">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="lucide lucide-moon h-4 w-4" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="lucide lucide-sun hidden h-4 w-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' cx="12" cy="12" r="4"></circle><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M12 2v2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M12 20v2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m4.93 4.93 1.41 1.41"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m17.66 17.66 1.41 1.41"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M2 12h2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M20 12h2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m6.34 17.66-1.41 1.41"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":64,"w":1905,"h":1,"abs_x":0,"abs_y":107}' className="h-px w-full bg-gradient-to-r from-[var(--accent)]/40 via-transparent to-[var(--violet)]/40"></div>
</header>

<section bis_size='{"x":0,"y":66,"w":1905,"h":681,"abs_x":0,"abs_y":109}' className="relative overflow-hidden">
<div bis_size='{"x":0,"y":66,"w":1905,"h":681,"abs_x":0,"abs_y":109}' className="absolute inset-0 pointer-events-none">
<div bis_size='{"x":712,"y":-214,"w":1200,"h":1200,"abs_x":712,"abs_y":-171}' className="radial-glow -top-40 left-1/2"></div>
</div>
<div bis_size='{"x":312,"y":66,"w":1280,"h":680,"abs_x":312,"abs_y":109}' className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 md:pt-24 lg:pt-28">
<div bis_size='{"x":336,"y":178,"w":1232,"h":472,"abs_x":336,"abs_y":221}' className="grid items-center gap-12 lg:grid-cols-2">

<div bis_size='{"x":336,"y":215,"w":592,"h":396,"abs_x":336,"abs_y":258}' className="relative">
<h1 bis_size='{"x":336,"y":215,"w":592,"h":134,"abs_x":336,"abs_y":258}' className="text-4xl sm:text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.05]">
            Where Innovation Meets Intelligence
          </h1>
<p bis_size='{"x":336,"y":370,"w":592,"h":84,"abs_x":336,"abs_y":413}' className="mt-5 max-w-2xl text-base sm:text-lg text-[var(--text-dim)]">
            Powering the future with smart, secure, and connected solutions. From AI-driven insights to cutting-edge robotics, we transform ideas into reality.
          </p>
<div bis_size='{"x":336,"y":486,"w":592,"h":46,"abs_x":336,"abs_y":529}' className="mt-8 flex flex-col gap-3 sm:flex-row">
<a bis_size='{"x":336,"y":486,"w":214,"h":46,"abs_x":336,"abs_y":529}' className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black/90 transition hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" href="#divisions">
<svg bis_size='{"x":360,"y":501,"w":16,"h":16,"abs_x":360,"abs_y":544}' className="lucide lucide-layout-dashboard h-4 w-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect bis_size='{"x":362,"y":503,"w":4,"h":6,"abs_x":362,"abs_y":546}' height="9" rx="1" width="7" x="3" y="3"></rect><rect bis_size='{"x":369,"y":503,"w":4,"h":3,"abs_x":369,"abs_y":546}' height="5" rx="1" width="7" x="14" y="3"></rect><rect bis_size='{"x":369,"y":509,"w":4,"h":6,"abs_x":369,"abs_y":552}' height="9" rx="1" width="7" x="14" y="12"></rect><rect bis_size='{"x":362,"y":511,"w":4,"h":3,"abs_x":362,"abs_y":554}' height="5" rx="1" width="7" x="3" y="16"></rect></svg>
              Explore Our Divisions
            </a>
<a bis_size='{"x":563,"y":486,"w":177,"h":46,"abs_x":563,"abs_y":529}' className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[color:var(--accent)] hover:shadow-[0_0_24px_rgba(20,184,166,0.2)]" href="#contact">
<svg bis_size='{"x":588,"y":501,"w":16,"h":16,"abs_x":588,"abs_y":544}' className="lucide lucide-handshake h-4 w-4 text-[var(--accent)]" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":595,"y":511,"w":3,"h":2,"abs_x":595,"abs_y":554}' d="m11 17 2 2a1 1 0 1 0 3-3"></path><path bis_size='{"x":593,"y":503,"w":9,"h":9,"abs_x":593,"abs_y":546}' d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path bis_size='{"x":601,"y":503,"w":1,"h":7,"abs_x":601,"abs_y":546}' d="m21 3 1 11h-2"></path><path bis_size='{"x":589,"y":503,"w":6,"h":12,"abs_x":589,"abs_y":546}' d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path bis_size='{"x":590,"y":503,"w":5,"h":0,"abs_x":590,"abs_y":546}' d="M3 4h8"></path></svg>
              Partner with Us
            </a>
</div>

<div bis_size='{"x":336,"y":572,"w":592,"h":40,"abs_x":336,"abs_y":615}' className="mt-10 flex gap-3 text-[var(--text-dim)]">
<div bis_size='{"x":336,"y":572,"w":40,"h":40,"abs_x":336,"abs_y":615}' className="floating animation-delay-0 grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)]" style={{animation: 'floatSlow 6s ease-in-out infinite'}}>
<svg bis_size='{"x":346,"y":582,"w":20,"h":20,"abs_x":346,"abs_y":625}' className="lucide lucide-cpu h-5 w-5 text-[var(--accent)]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":356,"y":598,"w":0,"h":1,"abs_x":356,"abs_y":641}' d="M12 20v2"></path><path bis_size='{"x":356,"y":583,"w":0,"h":1,"abs_x":356,"abs_y":626}' d="M12 2v2"></path><path bis_size='{"x":360,"y":598,"w":0,"h":1,"abs_x":360,"abs_y":641}' d="M17 20v2"></path><path bis_size='{"x":360,"y":583,"w":0,"h":1,"abs_x":360,"abs_y":626}' d="M17 2v2"></path><path bis_size='{"x":348,"y":592,"w":1,"h":0,"abs_x":348,"abs_y":635}' d="M2 12h2"></path><path bis_size='{"x":348,"y":596,"w":1,"h":0,"abs_x":348,"abs_y":639}' d="M2 17h2"></path><path bis_size='{"x":348,"y":588,"w":1,"h":0,"abs_x":348,"abs_y":631}' d="M2 7h2"></path><path bis_size='{"x":363,"y":592,"w":1,"h":0,"abs_x":363,"abs_y":635}' d="M20 12h2"></path><path bis_size='{"x":363,"y":596,"w":1,"h":0,"abs_x":363,"abs_y":639}' d="M20 17h2"></path><path bis_size='{"x":363,"y":588,"w":1,"h":0,"abs_x":363,"abs_y":631}' d="M20 7h2"></path><path bis_size='{"x":352,"y":598,"w":0,"h":1,"abs_x":352,"abs_y":641}' d="M7 20v2"></path><path bis_size='{"x":352,"y":583,"w":0,"h":1,"abs_x":352,"abs_y":626}' d="M7 2v2"></path><rect bis_size='{"x":349,"y":585,"w":13,"h":13,"abs_x":349,"abs_y":628}' height="16" rx="2" width="16" x="4" y="4"></rect><rect bis_size='{"x":353,"y":588,"w":6,"h":6,"abs_x":353,"abs_y":631}' height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<div bis_size='{"x":388,"y":572,"w":40,"h":40,"abs_x":388,"abs_y":615}' className="floating animation-delay-200 grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)]" style={{animation: 'floatSlow 7s ease-in-out infinite'}}>
<svg bis_size='{"x":398,"y":582,"w":20,"h":20,"abs_x":398,"abs_y":625}' className="lucide lucide-bot h-5 w-5 text-[var(--accent2)]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":405,"y":585,"w":3,"h":3,"abs_x":405,"abs_y":628}' d="M12 8V4H8"></path><rect bis_size='{"x":401,"y":588,"w":13,"h":10,"abs_x":401,"abs_y":631}' height="12" rx="2" width="16" x="4" y="8"></rect><path bis_size='{"x":400,"y":593,"w":1,"h":0,"abs_x":400,"abs_y":636}' d="M2 14h2"></path><path bis_size='{"x":415,"y":593,"w":1,"h":0,"abs_x":415,"abs_y":636}' d="M20 14h2"></path><path bis_size='{"x":411,"y":593,"w":0,"h":1,"abs_x":411,"abs_y":636}' d="M15 13v2"></path><path bis_size='{"x":406,"y":593,"w":0,"h":1,"abs_x":406,"abs_y":636}' d="M9 13v2"></path></svg>
</div>
<div bis_size='{"x":440,"y":572,"w":40,"h":40,"abs_x":440,"abs_y":615}' className="floating animation-delay-400 grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)]" style={{animation: 'floatSlow 5.5s ease-in-out infinite'}}>
<svg bis_size='{"x":450,"y":582,"w":20,"h":20,"abs_x":450,"abs_y":625}' className="lucide lucide-wifi h-5 w-5 text-[var(--violet)]" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":460,"y":598,"w":0,"h":0,"abs_x":460,"abs_y":641}' d="M12 20h.01"></path><path bis_size='{"x":452,"y":586,"w":16,"h":3,"abs_x":452,"abs_y":629}' d="M2 8.82a15 15 0 0 1 20 0"></path><path bis_size='{"x":454,"y":590,"w":11,"h":2,"abs_x":454,"abs_y":633}' d="M5 12.859a10 10 0 0 1 14 0"></path><path bis_size='{"x":457,"y":594,"w":5,"h":1,"abs_x":457,"abs_y":637}' d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<div bis_size='{"x":492,"y":572,"w":40,"h":40,"abs_x":492,"abs_y":615}' className="floating animation-delay-600 grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)]" style={{animation: 'floatSlow 6.5s ease-in-out infinite'}}>
<svg bis_size='{"x":502,"y":582,"w":20,"h":20,"abs_x":502,"abs_y":625}' className="lucide lucide-shield-check h-5 w-5 text-[var(--accent)]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":505,"y":583,"w":13,"h":16,"abs_x":505,"abs_y":626}' d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path bis_size='{"x":510,"y":590,"w":5,"h":3,"abs_x":510,"abs_y":633}' d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>

<div bis_size='{"x":976,"y":178,"w":592,"h":472,"abs_x":976,"abs_y":221}' className="relative">
<div bis_size='{"x":976,"y":178,"w":592,"h":444,"abs_x":976,"abs_y":221}' className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-[var(--border)] bg-[var(--bg-muted)]">
<video autoplay="" bis_size='{"x":976,"y":178,"w":592,"h":444,"abs_x":976,"abs_y":221}' className="absolute inset-0 h-full w-full opacity-80 object-cover" loop="" muted="" playsinline="" poster="">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>

<div bis_size='{"x":976,"y":178,"w":592,"h":444,"abs_x":976,"abs_y":221}' className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.12),transparent_60%)]"></div>
<div bis_size='{"x":976,"y":178,"w":592,"h":444,"abs_x":976,"abs_y":221}' className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_98%,rgba(20,184,166,0.15)_100%),repeating-linear-gradient(0deg,transparent,transparent_22px,rgba(255,255,255,0.04)_24px),repeating-linear-gradient(90deg,transparent,transparent_22px,rgba(255,255,255,0.04)_24px)] mix-blend-screen"></div>
</div>
<p bis_size='{"x":976,"y":634,"w":592,"h":16,"abs_x":976,"abs_y":677}' className="mt-3 text-xs text-[var(--text-dim)]">Looping stock animation with subtle overlays.</p>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":746,"w":1905,"h":1,"abs_x":0,"abs_y":789}' className="divider-glow"></div>
</section>

<section bis_size='{"x":0,"y":747,"w":1905,"h":685,"abs_x":0,"abs_y":790}' className="relative py-16 sm:py-20" id="about">
<div bis_size='{"x":312,"y":827,"w":1280,"h":460,"abs_x":312,"abs_y":870}' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 bis_size='{"x":344,"y":827,"w":1216,"h":72,"abs_x":344,"abs_y":870}' className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">Redefining Technology Excellence</h2>
<div bis_size='{"x":344,"y":939,"w":1216,"h":206,"abs_x":344,"abs_y":982}' className="mt-10 grid gap-6 md:grid-cols-3">

<div bis_size='{"x":344,"y":939,"w":389,"h":206,"abs_x":344,"abs_y":982}' className="glass group rounded-2xl p-6 transition hover:scale-[1.02] hover:shadow-[var(--shadow-neon)]">
<div bis_size='{"x":369,"y":964,"w":44,"h":44,"abs_x":369,"abs_y":1007}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":381,"y":976,"w":20,"h":20,"abs_x":381,"abs_y":1019}' className="lucide lucide-target h-5 w-5 text-[var(--accent)]" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size='{"x":383,"y":977,"w":16,"h":16,"abs_x":383,"abs_y":1020}' cx="12" cy="12" r="10"></circle><circle bis_size='{"x":386,"y":981,"w":10,"h":10,"abs_x":386,"abs_y":1024}' cx="12" cy="12" r="6"></circle><circle bis_size='{"x":389,"y":984,"w":3,"h":3,"abs_x":389,"abs_y":1027}' cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 bis_size='{"x":369,"y":1024,"w":339,"h":28,"abs_x":369,"abs_y":1067}' className="text-xl font-semibold tracking-tight">Mission</h3>
<p bis_size='{"x":369,"y":1060,"w":339,"h":60,"abs_x":369,"abs_y":1103}' className="mt-2 text-sm text-[var(--text-dim)]">Deliver secure, intelligent systems that empower organizations, accelerate innovation, and create lasting impact.</p>
</div>
<div bis_size='{"x":757,"y":939,"w":389,"h":206,"abs_x":757,"abs_y":982}' className="glass group rounded-2xl p-6 transition hover:scale-[1.02] hover:shadow-[var(--shadow-neon)]">
<div bis_size='{"x":782,"y":964,"w":44,"h":44,"abs_x":782,"abs_y":1007}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":794,"y":976,"w":20,"h":20,"abs_x":794,"abs_y":1019}' className="lucide lucide-scan-line h-5 w-5 text-[var(--accent2)]" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":797,"y":978,"w":3,"h":3,"abs_x":797,"abs_y":1021}' d="M3 7V5a2 2 0 0 1 2-2h2"></path><path bis_size='{"x":808,"y":978,"w":3,"h":3,"abs_x":808,"abs_y":1021}' d="M17 3h2a2 2 0 0 1 2 2v2"></path><path bis_size='{"x":808,"y":990,"w":3,"h":3,"abs_x":808,"abs_y":1033}' d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path bis_size='{"x":797,"y":990,"w":3,"h":3,"abs_x":797,"abs_y":1033}' d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path bis_size='{"x":800,"y":986,"w":8,"h":0,"abs_x":800,"abs_y":1029}' d="M7 12h10"></path></svg>
</div>
<h3 bis_size='{"x":782,"y":1024,"w":339,"h":28,"abs_x":782,"abs_y":1067}' className="text-xl font-semibold tracking-tight">Vision</h3>
<p bis_size='{"x":782,"y":1060,"w":339,"h":60,"abs_x":782,"abs_y":1103}' className="mt-2 text-sm text-[var(--text-dim)]">Advance Africa’s digital transformation through trustworthy AI, resilient infrastructure, and human-centered design.</p>
</div>
<div bis_size='{"x":1171,"y":939,"w":389,"h":206,"abs_x":1171,"abs_y":982}' className="glass group rounded-2xl p-6 transition hover:scale-[1.02] hover:shadow-[var(--shadow-neon)]">
<div bis_size='{"x":1196,"y":964,"w":44,"h":44,"abs_x":1196,"abs_y":1007}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":1208,"y":976,"w":20,"h":20,"abs_x":1208,"abs_y":1019}' className="lucide lucide-beaker h-5 w-5 text-[var(--violet)]" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1211,"y":978,"w":12,"h":0,"abs_x":1211,"abs_y":1021}' d="M4.5 3h15"></path><path bis_size='{"x":1213,"y":978,"w":10,"h":15,"abs_x":1213,"abs_y":1021}' d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path bis_size='{"x":1213,"y":987,"w":10,"h":0,"abs_x":1213,"abs_y":1030}' d="M6 14h12"></path></svg>
</div>
<h3 bis_size='{"x":1196,"y":1024,"w":339,"h":28,"abs_x":1196,"abs_y":1067}' className="text-xl font-semibold tracking-tight">Innovation</h3>
<p bis_size='{"x":1196,"y":1060,"w":339,"h":60,"abs_x":1196,"abs_y":1103}' className="mt-2 text-sm text-[var(--text-dim)]">From rapid prototyping to production at scale—our labs translate ambitious ideas into reliable products.</p>
</div>
</div>

<div bis_size='{"x":344,"y":1185,"w":1216,"h":102,"abs_x":344,"abs_y":1228}' className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:grid-cols-4">
<div bis_size='{"x":369,"y":1210,"w":279,"h":52,"abs_x":369,"abs_y":1253}' className="text-center">
<div bis_size='{"x":369,"y":1210,"w":279,"h":32,"abs_x":369,"abs_y":1253}' className="text-2xl font-semibold tracking-tight"><span bis_size='{"x":501,"y":1211,"w":15,"h":29,"abs_x":501,"abs_y":1254}' className="counter" data-target="6">0</span></div>
<div bis_size='{"x":369,"y":1246,"w":279,"h":16,"abs_x":369,"abs_y":1289}' className="mt-1 text-xs text-[var(--text-dim)]">Core Divisions</div>
</div>
<div bis_size='{"x":665,"y":1210,"w":279,"h":52,"abs_x":665,"abs_y":1253}' className="text-center">
<div bis_size='{"x":665,"y":1210,"w":279,"h":32,"abs_x":665,"abs_y":1253}' className="text-2xl font-semibold tracking-tight"><span bis_size='{"x":789,"y":1211,"w":15,"h":29,"abs_x":789,"abs_y":1254}' className="counter" data-target="100">0</span>+</div>
<div bis_size='{"x":665,"y":1246,"w":279,"h":16,"abs_x":665,"abs_y":1289}' className="mt-1 text-xs text-[var(--text-dim)]">Projects Delivered</div>
</div>
<div bis_size='{"x":960,"y":1210,"w":279,"h":52,"abs_x":960,"abs_y":1253}' className="text-center">
<div bis_size='{"x":960,"y":1210,"w":279,"h":32,"abs_x":960,"abs_y":1253}' className="text-2xl font-semibold tracking-tight">R<span bis_size='{"x":1092,"y":1211,"w":15,"h":29,"abs_x":1092,"abs_y":1254}' className="counter" data-target="350">0</span>K</div>
<div bis_size='{"x":960,"y":1246,"w":279,"h":16,"abs_x":960,"abs_y":1289}' className="mt-1 text-xs text-[var(--text-dim)]">Competition Prize</div>
</div>
<div bis_size='{"x":1256,"y":1210,"w":279,"h":52,"abs_x":1256,"abs_y":1253}' className="text-center">
<div bis_size='{"x":1256,"y":1210,"w":279,"h":32,"abs_x":1256,"abs_y":1253}' className="text-2xl font-semibold tracking-tight"><span bis_size='{"x":1376,"y":1211,"w":15,"h":29,"abs_x":1376,"abs_y":1254}' className="counter" data-target="24">0</span>/<span bis_size='{"x":1400,"y":1211,"w":15,"h":29,"abs_x":1400,"abs_y":1254}' className="counter" data-target="7">0</span></div>
<div bis_size='{"x":1256,"y":1246,"w":279,"h":16,"abs_x":1256,"abs_y":1289}' className="mt-1 text-xs text-[var(--text-dim)]">Innovation Focus</div>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":1351,"w":1905,"h":1,"abs_x":0,"abs_y":1394}' className="mt-16 divider-glow"></div>
</section>

<section bis_size='{"x":0,"y":1432,"w":1905,"h":879,"abs_x":0,"abs_y":1475}' className="py-16 sm:py-20" id="divisions">
<div bis_size='{"x":312,"y":1512,"w":1280,"h":654,"abs_x":312,"abs_y":1555}' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":344,"y":1512,"w":672,"h":104,"abs_x":344,"abs_y":1555}' className="max-w-2xl">
<h2 bis_size='{"x":344,"y":1512,"w":672,"h":72,"abs_x":344,"abs_y":1555}' className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">Our Core Divisions</h2>
<p bis_size='{"x":344,"y":1596,"w":672,"h":20,"abs_x":344,"abs_y":1639}' className="mt-3 text-sm text-[var(--text-dim)]">Six specialized divisions working together to deliver comprehensive solutions.</p>
</div>
<div bis_size='{"x":344,"y":1656,"w":1216,"h":510,"abs_x":344,"abs_y":1699}' className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div bis_size='{"x":344,"y":1656,"w":389,"h":243,"abs_x":344,"abs_y":1699}' className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size='{"x":369,"y":1681,"w":44,"h":44,"abs_x":369,"abs_y":1724}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":381,"y":1693,"w":20,"h":20,"abs_x":381,"abs_y":1736}' className="lucide lucide-code-2 h-5 w-5 text-[var(--accent)]" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":396,"y":1699,"w":3,"h":6,"abs_x":396,"abs_y":1742}' d="m18 16 4-4-4-4"></path><path bis_size='{"x":383,"y":1699,"w":3,"h":6,"abs_x":383,"abs_y":1742}' d="m6 8-4 4 4 4"></path><path bis_size='{"x":389,"y":1696,"w":4,"h":13,"abs_x":389,"abs_y":1739}' d="m14.5 4-5 16"></path></svg>
</div>
<h3 bis_size='{"x":369,"y":1741,"w":339,"h":28,"abs_x":369,"abs_y":1784}' className="text-lg font-semibold tracking-tight">DEV-SED</h3>
<p bis_size='{"x":369,"y":1773,"w":339,"h":16,"abs_x":369,"abs_y":1816}' className="mt-1 text-xs text-[var(--text-dim)]">Software Engineering</p>
<p bis_size='{"x":369,"y":1797,"w":339,"h":40,"abs_x":369,"abs_y":1840}' className="mt-2 text-sm text-[var(--text-dim)]">Cloud-native apps, APIs, and developer platforms with reliability and performance built-in.</p>
<a bis_size='{"x":369,"y":1853,"w":100,"h":20,"abs_x":369,"abs_y":1896}' className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size='{"x":454,"y":1855,"w":16,"h":16,"abs_x":454,"abs_y":1898}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":457,"y":1863,"w":9,"h":0,"abs_x":457,"abs_y":1906}' d="M5 12h14"></path><path bis_size='{"x":462,"y":1858,"w":4,"h":9,"abs_x":462,"abs_y":1901}' d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div bis_size='{"x":757,"y":1656,"w":389,"h":243,"abs_x":757,"abs_y":1699}' className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size='{"x":782,"y":1681,"w":44,"h":44,"abs_x":782,"abs_y":1724}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":794,"y":1693,"w":20,"h":20,"abs_x":794,"abs_y":1736}' className="lucide lucide-brain h-5 w-5 text-[var(--accent2)]" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":804,"y":1697,"w":0,"h":10,"abs_x":804,"abs_y":1740}' d="M12 18V5"></path><path bis_size='{"x":802,"y":1700,"w":5,"h":3,"abs_x":802,"abs_y":1743}' d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path bis_size='{"x":799,"y":1694,"w":10,"h":3,"abs_x":799,"abs_y":1737}' d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path bis_size='{"x":809,"y":1697,"w":2,"h":4,"abs_x":809,"abs_y":1740}' className="" d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path bis_size='{"x":809,"y":1701,"w":3,"h":6,"abs_x":809,"abs_y":1744}' d="M18 18a4 4 0 0 0 2-7.464"></path><path bis_size='{"x":798,"y":1707,"w":13,"h":3,"abs_x":798,"abs_y":1750}' d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path bis_size='{"x":796,"y":1701,"w":3,"h":6,"abs_x":796,"abs_y":1744}' d="M6 18a4 4 0 0 1-2-7.464"></path><path bis_size='{"x":797,"y":1697,"w":2,"h":4,"abs_x":797,"abs_y":1740}' d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<h3 bis_size='{"x":782,"y":1741,"w":339,"h":28,"abs_x":782,"abs_y":1784}' className="text-lg font-semibold tracking-tight">DATA-AID</h3>
<p bis_size='{"x":782,"y":1773,"w":339,"h":16,"abs_x":782,"abs_y":1816}' className="mt-1 text-xs text-[var(--text-dim)]">AI &amp; Data Science</p>
<p bis_size='{"x":782,"y":1797,"w":339,"h":40,"abs_x":782,"abs_y":1840}' className="mt-2 text-sm text-[var(--text-dim)]">Predictive modeling, MLOps, and decision intelligence to unlock actionable insights.</p>
<a bis_size='{"x":782,"y":1853,"w":100,"h":20,"abs_x":782,"abs_y":1896}' className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size='{"x":867,"y":1855,"w":16,"h":16,"abs_x":867,"abs_y":1898}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":870,"y":1863,"w":9,"h":0,"abs_x":870,"abs_y":1906}' d="M5 12h14"></path><path bis_size='{"x":875,"y":1858,"w":4,"h":9,"abs_x":875,"abs_y":1901}' d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div bis_size='{"x":1171,"y":1656,"w":389,"h":243,"abs_x":1171,"abs_y":1699}' className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size='{"x":1196,"y":1681,"w":44,"h":44,"abs_x":1196,"abs_y":1724}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":1208,"y":1693,"w":20,"h":20,"abs_x":1208,"abs_y":1736}' className="lucide lucide-bot h-5 w-5 text-[var(--accent)]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1214,"y":1696,"w":3,"h":3,"abs_x":1214,"abs_y":1739}' d="M12 8V4H8"></path><rect bis_size='{"x":1211,"y":1699,"w":13,"h":10,"abs_x":1211,"abs_y":1742}' height="12" rx="2" width="16" x="4" y="8"></rect><path bis_size='{"x":1209,"y":1704,"w":1,"h":0,"abs_x":1209,"abs_y":1747}' d="M2 14h2"></path><path bis_size='{"x":1224,"y":1704,"w":1,"h":0,"abs_x":1224,"abs_y":1747}' d="M20 14h2"></path><path bis_size='{"x":1220,"y":1703,"w":0,"h":1,"abs_x":1220,"abs_y":1746}' d="M15 13v2"></path><path bis_size='{"x":1215,"y":1703,"w":0,"h":1,"abs_x":1215,"abs_y":1746}' d="M9 13v2"></path></svg>
</div>
<h3 bis_size='{"x":1196,"y":1741,"w":339,"h":28,"abs_x":1196,"abs_y":1784}' className="text-lg font-semibold tracking-tight">DROID</h3>
<p bis_size='{"x":1196,"y":1773,"w":339,"h":16,"abs_x":1196,"abs_y":1816}' className="mt-1 text-xs text-[var(--text-dim)]">Robotics &amp; Embedded Systems</p>
<p bis_size='{"x":1196,"y":1797,"w":339,"h":40,"abs_x":1196,"abs_y":1840}' className="mt-2 text-sm text-[var(--text-dim)]">Autonomous systems, edge compute, and IoT devices engineered for the field.</p>
<a bis_size='{"x":1196,"y":1853,"w":100,"h":20,"abs_x":1196,"abs_y":1896}' className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size='{"x":1280,"y":1855,"w":16,"h":16,"abs_x":1280,"abs_y":1898}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1284,"y":1863,"w":9,"h":0,"abs_x":1284,"abs_y":1906}' d="M5 12h14"></path><path bis_size='{"x":1288,"y":1858,"w":4,"h":9,"abs_x":1288,"abs_y":1901}' d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div bis_size='{"x":344,"y":1923,"w":389,"h":243,"abs_x":344,"abs_y":1966}' className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size='{"x":369,"y":1948,"w":44,"h":44,"abs_x":369,"abs_y":1991}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":381,"y":1960,"w":20,"h":20,"abs_x":381,"abs_y":2003}' className="lucide lucide-radio h-5 w-5 text-[var(--violet)]" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":395,"y":1966,"w":1,"h":7,"abs_x":395,"abs_y":2009}' d="M16.247 7.761a6 6 0 0 1 0 8.478"></path><path bis_size='{"x":397,"y":1964,"w":2,"h":11,"abs_x":397,"abs_y":2007}' d="M19.075 4.933a10 10 0 0 1 0 14.134"></path><path bis_size='{"x":383,"y":1964,"w":2,"h":11,"abs_x":383,"abs_y":2007}' d="M4.925 19.067a10 10 0 0 1 0-14.134"></path><path bis_size='{"x":386,"y":1966,"w":1,"h":7,"abs_x":386,"abs_y":2009}' d="M7.753 16.239a6 6 0 0 1 0-8.478"></path><circle bis_size='{"x":389,"y":1968,"w":3,"h":3,"abs_x":389,"abs_y":2011}' cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 bis_size='{"x":369,"y":2008,"w":339,"h":28,"abs_x":369,"abs_y":2051}' className="text-lg font-semibold tracking-tight">NETCOM</h3>
<p bis_size='{"x":369,"y":2040,"w":339,"h":16,"abs_x":369,"abs_y":2083}' className="mt-1 text-xs text-[var(--text-dim)]">Telecommunications Infrastructure</p>
<p bis_size='{"x":369,"y":2064,"w":339,"h":40,"abs_x":369,"abs_y":2107}' className="mt-2 text-sm text-[var(--text-dim)]">Fiber, 5G, and satellite backbones for resilient connectivity across regions.</p>
<a bis_size='{"x":369,"y":2120,"w":100,"h":20,"abs_x":369,"abs_y":2163}' className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size='{"x":454,"y":2122,"w":16,"h":16,"abs_x":454,"abs_y":2165}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":457,"y":2130,"w":9,"h":0,"abs_x":457,"abs_y":2173}' d="M5 12h14"></path><path bis_size='{"x":462,"y":2125,"w":4,"h":9,"abs_x":462,"abs_y":2168}' d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div bis_size='{"x":757,"y":1923,"w":389,"h":243,"abs_x":757,"abs_y":1966}' className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size='{"x":782,"y":1948,"w":44,"h":44,"abs_x":782,"abs_y":1991}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":794,"y":1960,"w":20,"h":20,"abs_x":794,"abs_y":2003}' className="lucide lucide-shield h-5 w-5 text-[var(--accent)]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":798,"y":1961,"w":13,"h":16,"abs_x":798,"abs_y":2004}' d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 bis_size='{"x":782,"y":2008,"w":339,"h":28,"abs_x":782,"abs_y":2051}' className="text-lg font-semibold tracking-tight">CyberSentinel</h3>
<p bis_size='{"x":782,"y":2040,"w":339,"h":16,"abs_x":782,"abs_y":2083}' className="mt-1 text-xs text-[var(--text-dim)]">Cybersecurity</p>
<p bis_size='{"x":782,"y":2064,"w":339,"h":40,"abs_x":782,"abs_y":2107}' className="mt-2 text-sm text-[var(--text-dim)]">Threat detection, zero-trust architecture, and continuous red/blue teaming.</p>
<a bis_size='{"x":782,"y":2120,"w":100,"h":20,"abs_x":782,"abs_y":2163}' className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size='{"x":867,"y":2122,"w":16,"h":16,"abs_x":867,"abs_y":2165}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":870,"y":2130,"w":9,"h":0,"abs_x":870,"abs_y":2173}' d="M5 12h14"></path><path bis_size='{"x":875,"y":2125,"w":4,"h":9,"abs_x":875,"abs_y":2168}' d="m12 5 7 7-7 7"></path></svg></a>
</div>
<div bis_size='{"x":1171,"y":1923,"w":389,"h":243,"abs_x":1171,"abs_y":1966}' className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size='{"x":1196,"y":1948,"w":44,"h":44,"abs_x":1196,"abs_y":1991}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":1208,"y":1960,"w":20,"h":20,"abs_x":1208,"abs_y":2003}' className="lucide lucide-flask-conical h-5 w-5 text-[var(--violet)]" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1211,"y":1961,"w":13,"h":16,"abs_x":1211,"abs_y":2004}' d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path bis_size='{"x":1213,"y":1972,"w":9,"h":0,"abs_x":1213,"abs_y":2015}' d="M6.453 15h11.094"></path><path bis_size='{"x":1215,"y":1961,"w":5,"h":0,"abs_x":1215,"abs_y":2004}' d="M8.5 2h7"></path></svg>
</div>
<h3 bis_size='{"x":1196,"y":2008,"w":339,"h":28,"abs_x":1196,"abs_y":2051}' className="text-lg font-semibold tracking-tight">ISRC</h3>
<p bis_size='{"x":1196,"y":2040,"w":339,"h":16,"abs_x":1196,"abs_y":2083}' className="mt-1 text-xs text-[var(--text-dim)]">Strategic Innovation &amp; Research</p>
<p bis_size='{"x":1196,"y":2064,"w":339,"h":40,"abs_x":1196,"abs_y":2107}' className="mt-2 text-sm text-[var(--text-dim)]">Foresight, prototyping, and tech transfer bridging labs to market.</p>
<a bis_size='{"x":1196,"y":2120,"w":100,"h":20,"abs_x":1196,"abs_y":2163}' className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size='{"x":1280,"y":2122,"w":16,"h":16,"abs_x":1280,"abs_y":2165}' className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1284,"y":2130,"w":9,"h":0,"abs_x":1284,"abs_y":2173}' d="M5 12h14"></path><path bis_size='{"x":1288,"y":2125,"w":4,"h":9,"abs_x":1288,"abs_y":2168}' d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":2230,"w":1905,"h":1,"abs_x":0,"abs_y":2273}' className="mt-16 divider-glow"></div>
</section>

<section bis_size='{"x":0,"y":2311,"w":1905,"h":802,"abs_x":0,"abs_y":2354}' className="py-16 sm:py-20" id="droid">
<div bis_size='{"x":312,"y":2391,"w":1280,"h":577,"abs_x":312,"abs_y":2434}' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":344,"y":2391,"w":1216,"h":577,"abs_x":344,"abs_y":2434}' className="grid gap-10 lg:grid-cols-2">

<div bis_size='{"x":344,"y":2391,"w":588,"h":577,"abs_x":344,"abs_y":2434}' className="">
<h2 bis_size='{"x":344,"y":2391,"w":588,"h":144,"abs_x":344,"abs_y":2434}' className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">DROID Innovation Challenge</h2>
<p bis_size='{"x":344,"y":2547,"w":588,"h":60,"abs_x":344,"abs_y":2590}' className="mt-3 text-sm text-[var(--text-dim)]">A continent-wide challenge empowering teams to build real-world robotics and embedded solutions. R350,000 prize pool and access to mentorship, labs, and deployment support.</p>
<div bis_size='{"x":344,"y":2631,"w":588,"h":46,"abs_x":344,"abs_y":2674}' className="mt-6 flex flex-col gap-3 sm:flex-row">
<a bis_size='{"x":344,"y":2631,"w":311,"h":46,"abs_x":344,"abs_y":2674}' className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black/90 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" href="#">
<svg bis_size='{"x":368,"y":2646,"w":16,"h":16,"abs_x":368,"abs_y":2689}' className="lucide lucide-trophy h-4 w-4" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":373,"y":2655,"w":2,"h":4,"abs_x":373,"abs_y":2698}' d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path bis_size='{"x":377,"y":2655,"w":2,"h":4,"abs_x":377,"abs_y":2698}' d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path bis_size='{"x":380,"y":2648,"w":2,"h":3,"abs_x":380,"abs_y":2691}' d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path bis_size='{"x":371,"y":2660,"w":10,"h":0,"abs_x":371,"abs_y":2703}' d="M4 22h16"></path><path bis_size='{"x":372,"y":2647,"w":8,"h":8,"abs_x":372,"abs_y":2690}' d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path bis_size='{"x":369,"y":2648,"w":2,"h":3,"abs_x":369,"abs_y":2691}' d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
              Learn More About DROID Challenge
            </a>
<a bis_size='{"x":667,"y":2631,"w":220,"h":46,"abs_x":667,"abs_y":2674}' className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--text)] hover:border-[color:var(--accent)] hover:shadow-[0_0_24px_rgba(20,184,166,0.2)]" href="#">
<svg bis_size='{"x":692,"y":2646,"w":16,"h":16,"abs_x":692,"abs_y":2689}' className="lucide lucide-download h-4 w-4 text-[var(--accent)]" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":700,"y":2648,"w":0,"h":8,"abs_x":700,"abs_y":2691}' d="M12 15V3"></path><path bis_size='{"x":694,"y":2656,"w":12,"h":4,"abs_x":694,"abs_y":2699}' d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path bis_size='{"x":697,"y":2652,"w":6,"h":3,"abs_x":697,"abs_y":2695}' d="m7 10 5 5 5-5"></path></svg>
              Download Prospectus
            </a>
</div>

<div bis_size='{"x":344,"y":2701,"w":588,"h":34,"abs_x":344,"abs_y":2744}' className="mt-6 flex flex-wrap gap-3">
<span bis_size='{"x":344,"y":2701,"w":97,"h":34,"abs_x":344,"abs_y":2744}' className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--text-dim)]">
<svg bis_size='{"x":361,"y":2710,"w":16,"h":16,"abs_x":361,"abs_y":2753}' className="lucide lucide-megaphone h-4 w-4 text-[var(--accent2)]" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":363,"y":2712,"w":12,"h":9,"abs_x":363,"abs_y":2755}' d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path bis_size='{"x":365,"y":2719,"w":3,"h":5,"abs_x":365,"abs_y":2762}' d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path bis_size='{"x":366,"y":2714,"w":0,"h":5,"abs_x":366,"abs_y":2757}' d="M8 6v8"></path></svg> Teaser
            </span>
<span bis_size='{"x":453,"y":2701,"w":129,"h":34,"abs_x":453,"abs_y":2744}' className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[color:var(--accent)/0.08] px-4 py-2 text-xs font-medium text-[var(--accent)]">
<svg bis_size='{"x":470,"y":2710,"w":16,"h":16,"abs_x":470,"abs_y":2753}' className="lucide lucide-mail-plus h-4 w-4" data-lucide="mail-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":471,"y":2712,"w":13,"h":10,"abs_x":471,"abs_y":2755}' d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path bis_size='{"x":471,"y":2714,"w":13,"h":3,"abs_x":471,"abs_y":2757}' d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path bis_size='{"x":483,"y":2720,"w":0,"h":4,"abs_x":483,"abs_y":2763}' d="M19 16v6"></path><path bis_size='{"x":481,"y":2722,"w":4,"h":0,"abs_x":481,"abs_y":2765}' d="M16 19h6"></path></svg> Applications
            </span>
<span bis_size='{"x":594,"y":2701,"w":91,"h":34,"abs_x":594,"abs_y":2744}' className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--text-dim)]">
<svg bis_size='{"x":611,"y":2710,"w":16,"h":16,"abs_x":611,"abs_y":2753}' className="lucide lucide-flag h-4 w-4 text-[var(--violet)]" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":614,"y":2711,"w":10,"h":13,"abs_x":614,"abs_y":2754}' d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"></path></svg> Finals
            </span>
</div>

<form bis_size='{"x":344,"y":2759,"w":588,"h":70,"abs_x":344,"abs_y":2802}' className="mt-6">
<label bis_size='{"x":343,"y":2758,"w":1,"h":1,"abs_x":343,"abs_y":2801}' className="sr-only" htmlFor="notify-email">Notify Me</label>
<div bis_size='{"x":344,"y":2759,"w":588,"h":46,"abs_x":344,"abs_y":2802}' className="flex flex-col gap-3 sm:flex-row">
<div bis_size='{"x":344,"y":2759,"w":446,"h":46,"abs_x":344,"abs_y":2802}' className="relative flex-1">
<svg bis_size='{"x":356,"y":2774,"w":16,"h":16,"abs_x":356,"abs_y":2817}' className="lucide lucide-mail pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-dim)]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":357,"y":2778,"w":13,"h":3,"abs_x":357,"abs_y":2821}' d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect bis_size='{"x":357,"y":2776,"w":13,"h":10,"abs_x":357,"abs_y":2819}' height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input bis_size='{"x":344,"y":2759,"w":446,"h":46,"abs_x":344,"abs_y":2802}' className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-4 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="notify-email" placeholder="Email address" type="email"/>
</div>
<button bis_size='{"x":803,"y":2759,"w":129,"h":46,"abs_x":803,"abs_y":2802}' className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-black/90 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" type="submit">
<svg bis_size='{"x":823,"y":2774,"w":16,"h":16,"abs_x":823,"abs_y":2817}' className="lucide lucide-bell-ring h-4 w-4" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":829,"y":2788,"w":2,"h":0,"abs_x":829,"abs_y":2831}' d="M10.268 21a2 2 0 0 0 3.464 0"></path><path bis_size='{"x":836,"y":2775,"w":1,"h":4,"abs_x":836,"abs_y":2818}' d="M22 8c0-2.3-.8-4.3-2-6"></path><path bis_size='{"x":825,"y":2775,"w":11,"h":10,"abs_x":825,"abs_y":2818}' d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path bis_size='{"x":824,"y":2775,"w":1,"h":4,"abs_x":824,"abs_y":2818}' d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg>
                Notify Me
              </button>
</div>
<p bis_size='{"x":344,"y":2813,"w":588,"h":16,"abs_x":344,"abs_y":2856}' className="mt-2 text-xs text-[var(--text-dim)]">Coming 2026 — Innovation awaits.</p>
</form>
</div>

<div bis_size='{"x":972,"y":2391,"w":588,"h":577,"abs_x":972,"abs_y":2434}' className="relative">
<div bis_size='{"x":972,"y":2391,"w":588,"h":577,"abs_x":972,"abs_y":2434}' className="glass rounded-2xl p-5 ring-1 ring-[var(--border)]">

<div bis_size='{"x":993,"y":2412,"w":546,"h":307,"abs_x":993,"abs_y":2455}' className="relative overflow-hidden rounded-xl ring-1 ring-[var(--border)] bg-[var(--bg-muted)]">
<div bis_size='{"x":993,"y":2412,"w":546,"h":307,"abs_x":993,"abs_y":2455}' className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]"></div>
<video autoplay="" bis_size='{"x":993,"y":2412,"w":546,"h":307,"abs_x":993,"abs_y":2455}' className="aspect-video w-full object-cover opacity-90" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop">
<source bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' src="https://videos.pexels.com/video-files/8364699/8364699-uhd_2560_1440_30fps.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
              </video>
<div bis_size='{"x":993,"y":2412,"w":546,"h":307,"abs_x":993,"abs_y":2455}' className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.5))]"></div>
<div bis_size='{"x":1005,"y":2683,"w":191,"h":24,"abs_x":1005,"abs_y":2726}' className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-white ring-1 ring-white/10 backdrop-blur">
<svg bis_size='{"x":1017,"y":2688,"w":14,"h":14,"abs_x":1017,"abs_y":2731}' className="h-3.5 w-3.5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon bis_size='{"x":1020,"y":2689,"w":8,"h":10,"abs_x":1020,"abs_y":2732}' points="5 3 19 12 5 21 5 3"></polygon></svg>
                Previous Finals Highlights
              </div>
</div>

<div bis_size='{"x":993,"y":2739,"w":546,"h":58,"abs_x":993,"abs_y":2782}' className="mt-5">
<div bis_size='{"x":993,"y":2739,"w":546,"h":20,"abs_x":993,"abs_y":2782}' className="flex items-center gap-2">
<span bis_size='{"x":993,"y":2739,"w":43,"h":20,"abs_x":993,"abs_y":2782}' className="text-sm font-semibold tracking-tight">Tracks</span>
<span bis_size='{"x":1045,"y":2748,"w":494,"h":1,"abs_x":1045,"abs_y":2791}' className="h-px flex-1 bg-[var(--border)]"></span>
</div>
<div bis_size='{"x":993,"y":2771,"w":546,"h":26,"abs_x":993,"abs_y":2814}' className="mt-3 flex flex-wrap gap-2">
<span bis_size='{"x":993,"y":2771,"w":77,"h":26,"abs_x":993,"abs_y":2814}' className="rounded-full border border-[var(--accent)]/40 bg-[color:var(--accent)/0.08] px-3 py-1 text-xs font-medium text-[var(--accent)]">AgriTech</span>
<span bis_size='{"x":1079,"y":2771,"w":90,"h":26,"abs_x":1079,"abs_y":2814}' className="rounded-full border border-[var(--violet)]/40 bg-[color:var(--violet)/0.08] px-3 py-1 text-xs font-medium text-[var(--violet)]">HealthTech</span>
<span bis_size='{"x":1177,"y":2771,"w":81,"h":26,"abs_x":1177,"abs_y":2814}' className="rounded-full border border-[var(--accent2)]/40 bg-[color:var(--accent2)/0.08] px-3 py-1 text-xs font-medium text-[var(--accent2)]">CivicTech</span>
<span bis_size='{"x":1267,"y":2771,"w":87,"h":26,"abs_x":1267,"abs_y":2814}' className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--text-dim)]">GreenTech</span>
</div>
</div>

<div bis_size='{"x":993,"y":2817,"w":546,"h":90,"abs_x":993,"abs_y":2860}' className="mt-5 grid gap-3 sm:grid-cols-2">
<div bis_size='{"x":993,"y":2817,"w":267,"h":90,"abs_x":993,"abs_y":2860}' className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
<div bis_size='{"x":1010,"y":2834,"w":233,"h":56,"abs_x":1010,"abs_y":2877}' className="flex items-start gap-3">
<div bis_size='{"x":1010,"y":2834,"w":24,"h":36,"abs_x":1010,"abs_y":2877}' className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":1014,"y":2844,"w":16,"h":16,"abs_x":1014,"abs_y":2887}' className="h-4 w-4 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1022,"y":2845,"w":0,"h":13,"abs_x":1022,"abs_y":2888}' d="M12 2v20"></path><path bis_size='{"x":1019,"y":2852,"w":6,"h":3,"abs_x":1019,"abs_y":2895}' d="m7 12 5 5 5-5"></path></svg>
</div>
<div bis_size='{"x":1047,"y":2834,"w":196,"h":56,"abs_x":1047,"abs_y":2877}'>
<div bis_size='{"x":1047,"y":2834,"w":196,"h":20,"abs_x":1047,"abs_y":2877}' className="text-sm font-medium">Hardware Stipends</div>
<p bis_size='{"x":1047,"y":2858,"w":196,"h":32,"abs_x":1047,"abs_y":2901}' className="mt-1 text-xs text-[var(--text-dim)]">Components, dev kits, and fab time for prototypes.</p>
</div>
</div>
</div>
<div bis_size='{"x":1272,"y":2817,"w":267,"h":90,"abs_x":1272,"abs_y":2860}' className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
<div bis_size='{"x":1289,"y":2834,"w":233,"h":56,"abs_x":1289,"abs_y":2877}' className="flex items-start gap-3">
<div bis_size='{"x":1289,"y":2834,"w":23,"h":36,"abs_x":1289,"abs_y":2877}' className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":1293,"y":2844,"w":16,"h":16,"abs_x":1293,"abs_y":2887}' className="h-4 w-4 text-[var(--accent2)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect bis_size='{"x":1295,"y":2846,"w":4,"h":4,"abs_x":1295,"abs_y":2889}' height="7" rx="1" width="7" x="3" y="3"></rect><rect bis_size='{"x":1302,"y":2846,"w":4,"h":4,"abs_x":1302,"abs_y":2889}' height="7" rx="1" width="7" x="14" y="3"></rect><rect bis_size='{"x":1302,"y":2853,"w":4,"h":4,"abs_x":1302,"abs_y":2896}' height="7" rx="1" width="7" x="14" y="14"></rect><rect bis_size='{"x":1295,"y":2853,"w":4,"h":4,"abs_x":1295,"abs_y":2896}' height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<div bis_size='{"x":1325,"y":2834,"w":197,"h":56,"abs_x":1325,"abs_y":2877}'>
<div bis_size='{"x":1325,"y":2834,"w":197,"h":20,"abs_x":1325,"abs_y":2877}' className="text-sm font-medium">Mentorship &amp; Labs</div>
<p bis_size='{"x":1325,"y":2858,"w":197,"h":32,"abs_x":1325,"abs_y":2901}' className="mt-1 text-xs text-[var(--text-dim)]">Guidance from engineers plus access to testing labs.</p>
</div>
</div>
</div>
</div>
<div bis_size='{"x":993,"y":2927,"w":546,"h":20,"abs_x":993,"abs_y":2970}' className="mt-5 flex items-center justify-between gap-3">
<a bis_size='{"x":993,"y":2927,"w":97,"h":20,"abs_x":993,"abs_y":2970}' className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">
                View Rules
                <svg bis_size='{"x":1075,"y":2929,"w":16,"h":16,"abs_x":1075,"abs_y":2972}' className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1078,"y":2937,"w":9,"h":0,"abs_x":1078,"abs_y":2980}' d="M5 12h14"></path><path bis_size='{"x":1083,"y":2932,"w":4,"h":9,"abs_x":1083,"abs_y":2975}' d="m12 5 7 7-7 7"></path></svg>
</a>
<span bis_size='{"x":1241,"y":2929,"w":297,"h":16,"abs_x":1241,"abs_y":2972}' className="text-xs text-[var(--text-dim)]">Open to students, startups, and independent makers</span>
</div>
</div>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":3032,"w":1905,"h":1,"abs_x":0,"abs_y":3075}' className="mt-16 divider-glow"></div>
</section>

<section bis_size='{"x":0,"y":3113,"w":1905,"h":665,"abs_x":0,"abs_y":3156}' className="py-16 sm:py-20" id="innovation">
<div bis_size='{"x":312,"y":3193,"w":1280,"h":440,"abs_x":312,"abs_y":3236}' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":344,"y":3193,"w":672,"h":104,"abs_x":344,"abs_y":3236}' className="max-w-2xl">
<h2 bis_size='{"x":344,"y":3193,"w":672,"h":72,"abs_x":344,"abs_y":3236}' className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">Innovation In Motion</h2>
<p bis_size='{"x":344,"y":3277,"w":672,"h":20,"abs_x":344,"abs_y":3320}' className="mt-3 text-sm text-[var(--text-dim)]">We blend research-grade rigor with product pragmatism to move fast—safely.</p>
</div>
<div bis_size='{"x":344,"y":3337,"w":1216,"h":206,"abs_x":344,"abs_y":3380}' className="mt-10 grid gap-6 md:grid-cols-3">
<div bis_size='{"x":344,"y":3337,"w":389,"h":206,"abs_x":344,"abs_y":3380}' className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-neon)]">
<div bis_size='{"x":369,"y":3362,"w":44,"h":44,"abs_x":369,"abs_y":3405}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":381,"y":3374,"w":20,"h":20,"abs_x":381,"abs_y":3417}' className="h-5 w-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":384,"y":3376,"w":5,"h":5,"abs_x":384,"abs_y":3419}' d="M3 3h7v7H3z"></path><path bis_size='{"x":393,"y":3376,"w":5,"h":5,"abs_x":393,"abs_y":3419}' d="M14 3h7v7h-7z"></path><path bis_size='{"x":393,"y":3385,"w":5,"h":5,"abs_x":393,"abs_y":3428}' d="M14 14h7v7h-7z"></path><path bis_size='{"x":384,"y":3385,"w":5,"h":5,"abs_x":384,"abs_y":3428}' d="M3 14h7v7H3z"></path></svg>
</div>
<h3 bis_size='{"x":369,"y":3422,"w":339,"h":28,"abs_x":369,"abs_y":3465}' className="text-lg font-semibold tracking-tight">AI Pipelines</h3>
<p bis_size='{"x":369,"y":3458,"w":339,"h":60,"abs_x":369,"abs_y":3501}' className="mt-2 text-sm text-[var(--text-dim)]">From data ingestion to model serving with observability, drift detection, and human-in-the-loop feedback.</p>
</div>
<div bis_size='{"x":757,"y":3337,"w":389,"h":206,"abs_x":757,"abs_y":3380}' className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-neon)]">
<div bis_size='{"x":782,"y":3362,"w":44,"h":44,"abs_x":782,"abs_y":3405}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":794,"y":3374,"w":20,"h":20,"abs_x":794,"abs_y":3417}' className="h-5 w-5 text-[var(--violet)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle bis_size='{"x":796,"y":3375,"w":16,"h":16,"abs_x":796,"abs_y":3418}' cx="12" cy="12" r="10"></circle><path bis_size='{"x":796,"y":3384,"w":16,"h":0,"abs_x":796,"abs_y":3427}' d="M2 12h20"></path><path bis_size='{"x":804,"y":3375,"w":3,"h":16,"abs_x":804,"abs_y":3418}' d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10"></path></svg>
</div>
<h3 bis_size='{"x":782,"y":3422,"w":339,"h":28,"abs_x":782,"abs_y":3465}' className="text-lg font-semibold tracking-tight">Digital Twins</h3>
<p bis_size='{"x":782,"y":3458,"w":339,"h":60,"abs_x":782,"abs_y":3501}' className="mt-2 text-sm text-[var(--text-dim)]">High-fidelity simulation to validate robotics and network deployments before they touch the real world.</p>
</div>
<div bis_size='{"x":1171,"y":3337,"w":389,"h":206,"abs_x":1171,"abs_y":3380}' className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-neon)]">
<div bis_size='{"x":1196,"y":3362,"w":44,"h":44,"abs_x":1196,"abs_y":3405}' className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":1208,"y":3374,"w":20,"h":20,"abs_x":1208,"abs_y":3417}' className="h-5 w-5 text-[var(--accent2)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1211,"y":3375,"w":13,"h":16,"abs_x":1211,"abs_y":3418}' d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path bis_size='{"x":1215,"y":3382,"w":5,"h":3,"abs_x":1215,"abs_y":3425}' d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 bis_size='{"x":1196,"y":3422,"w":339,"h":28,"abs_x":1196,"abs_y":3465}' className="text-lg font-semibold tracking-tight">Secure by Design</h3>
<p bis_size='{"x":1196,"y":3458,"w":339,"h":60,"abs_x":1196,"abs_y":3501}' className="mt-2 text-sm text-[var(--text-dim)]">Zero-trust defaults, SBOM tracking, and continuous assurance baked into every layer of delivery.</p>
</div>
</div>

<div bis_size='{"x":344,"y":3583,"w":1216,"h":50,"abs_x":344,"abs_y":3626}' className="mt-10 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
<div bis_size='{"x":345,"y":3584,"w":2428,"h":48,"abs_x":345,"abs_y":3627}' className="flex w-[200%] animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
<div bis_size='{"x":345,"y":3584,"w":1214,"h":48,"abs_x":345,"abs_y":3627}' className="flex w-1/2 items-center justify-around gap-10 px-6 py-4 text-xs text-[var(--text-dim)]">
<span bis_size='{"x":419,"y":3600,"w":81,"h":16,"abs_x":419,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":419,"y":3604,"w":8,"h":8,"abs_x":419,"abs_y":3647}' className="h-2 w-2 rounded-full bg-[var(--accent)]"></span> Kubernetes</span>
<span bis_size='{"x":641,"y":3600,"w":47,"h":16,"abs_x":641,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":641,"y":3604,"w":8,"h":8,"abs_x":641,"abs_y":3647}' className="h-2 w-2 rounded-full bg-[var(--violet)]"></span> ROS2</span>
<span bis_size='{"x":830,"y":3600,"w":62,"h":16,"abs_x":830,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":830,"y":3604,"w":8,"h":8,"abs_x":830,"abs_y":3647}' className="h-2 w-2 rounded-full bg-[var(--accent2)]"></span> PyTorch</span>
<span bis_size='{"x":1033,"y":3600,"w":41,"h":16,"abs_x":1033,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":1033,"y":3604,"w":8,"h":8,"abs_x":1033,"abs_y":3647}' className="h-2 w-2 rounded-full bg-emerald-400"></span> Rust</span>
<span bis_size='{"x":1215,"y":3600,"w":32,"h":16,"abs_x":1215,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":1215,"y":3604,"w":8,"h":8,"abs_x":1215,"abs_y":3647}' className="h-2 w-2 rounded-full bg-sky-400"></span> Go</span>
<span bis_size='{"x":1388,"y":3600,"w":96,"h":16,"abs_x":1388,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":1388,"y":3604,"w":8,"h":8,"abs_x":1388,"abs_y":3647}' className="h-2 w-2 rounded-full bg-fuchsia-400"></span> WebAssembly</span>
</div>
<div bis_size='{"x":1559,"y":3584,"w":1214,"h":48,"abs_x":1559,"abs_y":3627}' className="flex w-1/2 items-center justify-around gap-10 px-6 py-4 text-xs text-[var(--text-dim)]">
<span bis_size='{"x":1633,"y":3600,"w":81,"h":16,"abs_x":1633,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":1633,"y":3604,"w":8,"h":8,"abs_x":1633,"abs_y":3647}' className="h-2 w-2 rounded-full bg-[var(--accent)]"></span> Kubernetes</span>
<span bis_size='{"x":1855,"y":3600,"w":47,"h":16,"abs_x":1855,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":1855,"y":3604,"w":8,"h":8,"abs_x":1855,"abs_y":3647}' className="h-2 w-2 rounded-full bg-[var(--violet)]"></span> ROS2</span>
<span bis_size='{"x":2044,"y":3600,"w":62,"h":16,"abs_x":2044,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":2044,"y":3604,"w":8,"h":8,"abs_x":2044,"abs_y":3647}' className="h-2 w-2 rounded-full bg-[var(--accent2)]"></span> PyTorch</span>
<span bis_size='{"x":2247,"y":3600,"w":41,"h":16,"abs_x":2247,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":2247,"y":3604,"w":8,"h":8,"abs_x":2247,"abs_y":3647}' className="h-2 w-2 rounded-full bg-emerald-400"></span> Rust</span>
<span bis_size='{"x":2429,"y":3600,"w":32,"h":16,"abs_x":2429,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":2429,"y":3604,"w":8,"h":8,"abs_x":2429,"abs_y":3647}' className="h-2 w-2 rounded-full bg-sky-400"></span> Go</span>
<span bis_size='{"x":2602,"y":3600,"w":96,"h":16,"abs_x":2602,"abs_y":3643}' className="inline-flex items-center gap-2"><span bis_size='{"x":2602,"y":3604,"w":8,"h":8,"abs_x":2602,"abs_y":3647}' className="h-2 w-2 rounded-full bg-fuchsia-400"></span> WebAssembly</span>
</div>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":3697,"w":1905,"h":1,"abs_x":0,"abs_y":3740}' className="mt-16 divider-glow"></div>
</section>

<section bis_size='{"x":0,"y":3778,"w":1905,"h":643,"abs_x":0,"abs_y":3821}' className="py-16 sm:py-20" id="contact">
<div bis_size='{"x":312,"y":3858,"w":1280,"h":418,"abs_x":312,"abs_y":3901}' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":344,"y":3858,"w":1216,"h":418,"abs_x":344,"abs_y":3901}' className="grid gap-8 lg:grid-cols-2">
<div bis_size='{"x":344,"y":3858,"w":592,"h":418,"abs_x":344,"abs_y":3901}' className="">
<h2 bis_size='{"x":344,"y":3858,"w":592,"h":72,"abs_x":344,"abs_y":3901}' className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">Let’s Build What’s Next</h2>
<p bis_size='{"x":344,"y":3942,"w":592,"h":20,"abs_x":344,"abs_y":3985}' className="mt-3 text-sm text-[var(--text-dim)]">Tell us about your challenge. Our team will get back within 2 business days.</p>
<div bis_size='{"x":344,"y":3986,"w":592,"h":70,"abs_x":344,"abs_y":4029}' className="mt-6 grid gap-3 sm:grid-cols-2">
<div bis_size='{"x":344,"y":3986,"w":290,"h":70,"abs_x":344,"abs_y":4029}' className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
<div bis_size='{"x":361,"y":4003,"w":36,"h":36,"abs_x":361,"abs_y":4046}' className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":371,"y":4013,"w":16,"h":16,"abs_x":371,"abs_y":4056}' className="h-4 w-4 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":372,"y":4017,"w":13,"h":4,"abs_x":372,"abs_y":4060}' d="m22 7-10 7L2 7"></path><rect bis_size='{"x":372,"y":4016,"w":13,"h":9,"abs_x":372,"abs_y":4059}' height="14" rx="2" width="20" x="2" y="5"></rect></svg>
</div>
<div bis_size='{"x":409,"y":4005,"w":128,"h":32,"abs_x":409,"abs_y":4048}' className="text-xs">
<div bis_size='{"x":409,"y":4005,"w":128,"h":16,"abs_x":409,"abs_y":4048}' className="font-medium">hello@dataenvy.africa</div>
<div bis_size='{"x":409,"y":4021,"w":128,"h":16,"abs_x":409,"abs_y":4064}' className="text-[var(--text-dim)]">Drop us a line</div>
</div>
</div>
<div bis_size='{"x":646,"y":3986,"w":290,"h":70,"abs_x":646,"abs_y":4029}' className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
<div bis_size='{"x":663,"y":4003,"w":36,"h":36,"abs_x":663,"abs_y":4046}' className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":673,"y":4013,"w":16,"h":16,"abs_x":673,"abs_y":4056}' className="h-4 w-4 text-[var(--accent2)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":674,"y":4015,"w":13,"h":12,"abs_x":674,"abs_y":4058}' d="M22 16.92V19a2 2 0 0 1-2.18 2 19.72 19.72 0 0 1-8.63-3.07 19.29 19.29 0 0 1-6-6A19.72 19.72 0 0 1 2 5.18 2 2 0 0 1 4 3h2.09A2 2 0 0 1 8 4.72a12.66 12.66 0 0 0 .7 2.2 2 2 0 0 1-.45 2.11L7.1 9.18a16 16 0 0 0 6 6l.15-.15a2 2 0 0 1 2.11-.45 12.66 12.66 0 0 0 2.2.7A2 2 0 0 1 20.91 16.92z"></path></svg>
</div>
<div bis_size='{"x":711,"y":4005,"w":148,"h":32,"abs_x":711,"abs_y":4048}' className="text-xs">
<div bis_size='{"x":711,"y":4005,"w":148,"h":16,"abs_x":711,"abs_y":4048}' className="font-medium">+27 (0) 21 555 0101</div>
<div bis_size='{"x":711,"y":4021,"w":148,"h":16,"abs_x":711,"abs_y":4064}' className="text-[var(--text-dim)]">Mon–Fri, 9:00–17:00 SAST</div>
</div>
</div>
</div>
</div>

<form bis_size='{"x":968,"y":3858,"w":592,"h":418,"abs_x":968,"abs_y":3901}' className="glass rounded-2xl p-6 ring-1 ring-[var(--border)]" id="contactForm">
<div bis_size='{"x":993,"y":3883,"w":542,"h":368,"abs_x":993,"abs_y":3926}' className="grid gap-4 sm:grid-cols-2">
<div bis_size='{"x":993,"y":3883,"w":263,"h":58,"abs_x":993,"abs_y":3926}' className="sm:col-span-1">
<label bis_size='{"x":993,"y":3883,"w":263,"h":16,"abs_x":993,"abs_y":3926}' className="mb-1 block text-xs text-[var(--text-dim)]" htmlFor="name">Full Name</label>
<input bis_size='{"x":993,"y":3903,"w":263,"h":38,"abs_x":993,"abs_y":3946}' className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="name" name="name" placeholder="Lesedi M." required="" type="text"/>
</div>
<div bis_size='{"x":1272,"y":3883,"w":263,"h":58,"abs_x":1272,"abs_y":3926}' className="sm:col-span-1">
<label bis_size='{"x":1272,"y":3883,"w":263,"h":16,"abs_x":1272,"abs_y":3926}' className="mb-1 block text-xs text-[var(--text-dim)]" htmlFor="email">Email</label>
<input bis_size='{"x":1272,"y":3903,"w":263,"h":38,"abs_x":1272,"abs_y":3946}' className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div bis_size='{"x":993,"y":3957,"w":263,"h":58,"abs_x":993,"abs_y":4000}' className="sm:col-span-1">
<label bis_size='{"x":993,"y":3957,"w":263,"h":16,"abs_x":993,"abs_y":4000}' className="mb-1 block text-xs text-[var(--text-dim)]" htmlFor="company">Company</label>
<input bis_size='{"x":993,"y":3977,"w":263,"h":38,"abs_x":993,"abs_y":4020}' className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="company" name="company" placeholder="Acme Ltd." type="text"/>
</div>
<div bis_size='{"x":1272,"y":3957,"w":263,"h":58,"abs_x":1272,"abs_y":4000}' className="sm:col-span-1">
<label bis_size='{"x":1272,"y":3957,"w":263,"h":16,"abs_x":1272,"abs_y":4000}' className="mb-1 block text-xs text-[var(--text-dim)]" htmlFor="topic">Topic</label>
<select bis_size='{"x":1272,"y":3977,"w":263,"h":38,"abs_x":1272,"abs_y":4020}' className="w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="topic" name="topic">
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>General Inquiry</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>Partnership</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>Project Estimate</option>
<option bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}'>DROID Challenge</option>
</select>
</div>
<div bis_size='{"x":993,"y":4031,"w":542,"h":144,"abs_x":993,"abs_y":4074}' className="sm:col-span-2">
<label bis_size='{"x":993,"y":4031,"w":542,"h":16,"abs_x":993,"abs_y":4074}' className="mb-1 block text-xs text-[var(--text-dim)]" htmlFor="message">Message</label>
<textarea bis_size='{"x":993,"y":4051,"w":542,"h":118,"abs_x":993,"abs_y":4094}' className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="message" name="message" placeholder="How can we help?" required="" rows="5"></textarea>
</div>
<div bis_size='{"x":993,"y":4191,"w":542,"h":60,"abs_x":993,"abs_y":4234}' className="sm:col-span-2 flex items-center justify-between">
<label bis_size='{"x":993,"y":4205,"w":389,"h":32,"abs_x":993,"abs_y":4248}' className="inline-flex items-center gap-2 text-xs text-[var(--text-dim)]">
<input bis_size='{"x":993,"y":4213,"w":14,"h":16,"abs_x":993,"abs_y":4256}' className="h-4 w-4 rounded border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] focus:ring-[var(--accent)]" id="consent" type="checkbox"/>
                I agree to the processing of my data as described in the privacy policy.
              </label>
<button bis_size='{"x":1382,"y":4191,"w":152,"h":60,"abs_x":1382,"abs_y":4234}' className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-black/90 transition hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" type="submit">
                Send Message
                <svg bis_size='{"x":1500,"y":4213,"w":14,"h":16,"abs_x":1500,"abs_y":4256}' className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1502,"y":4215,"w":12,"h":12,"abs_x":1502,"abs_y":4258}' d="m22 2-7 20-4-9-9-4 20-7z"></path></svg>
</button>
</div>
<p bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="hidden sm:col-span-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300" id="contactSuccess">Thanks! We received your message and will reply shortly.</p>
</div>
</form>
</div>
</div>
<div bis_size='{"x":0,"y":4340,"w":1905,"h":1,"abs_x":0,"abs_y":4383}' className="mt-16 divider-glow"></div>
</section>

<footer bis_size='{"x":0,"y":4421,"w":1905,"h":165,"abs_x":0,"abs_y":4464}' className="border-t border-[var(--border)] py-10">
<div bis_size='{"x":312,"y":4462,"w":1280,"h":84,"abs_x":312,"abs_y":4505}' className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":344,"y":4462,"w":1216,"h":84,"abs_x":344,"abs_y":4505}' className="grid gap-8 sm:grid-cols-3">
<div bis_size='{"x":344,"y":4462,"w":384,"h":84,"abs_x":344,"abs_y":4505}'>
<div bis_size='{"x":344,"y":4462,"w":384,"h":36,"abs_x":344,"abs_y":4505}' className="flex items-center gap-3">
<div bis_size='{"x":344,"y":4462,"w":36,"h":36,"abs_x":344,"abs_y":4505}' className="grid h-9 w-9 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)]">
<svg bis_size='{"x":352,"y":4470,"w":20,"h":20,"abs_x":352,"abs_y":4513}' className="h-5 w-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":354,"y":4471,"w":8,"h":16,"abs_x":354,"abs_y":4514}' d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path bis_size='{"x":362,"y":4480,"w":3,"h":0,"abs_x":362,"abs_y":4523}' d="M12 13h4"></path><path bis_size='{"x":362,"y":4476,"w":6,"h":0,"abs_x":362,"abs_y":4519}' d="M12 8h8"></path></svg>
</div>
<div bis_size='{"x":392,"y":4462,"w":206,"h":36,"abs_x":392,"abs_y":4505}'>
<div bis_size='{"x":392,"y":4462,"w":206,"h":20,"abs_x":392,"abs_y":4505}' className="text-sm font-semibold tracking-tight">DATA ENVY</div>
<div bis_size='{"x":392,"y":4482,"w":206,"h":16,"abs_x":392,"abs_y":4525}' className="text-xs text-[var(--text-dim)]">Where Innovation Meets Intelligence</div>
</div>
</div>
<p bis_size='{"x":344,"y":4514,"w":384,"h":32,"abs_x":344,"abs_y":4557}' className="mt-4 text-xs text-[var(--text-dim)]">Smart, secure, and connected solutions across AI, software, robotics, telecom, cybersecurity, and research.</p>
</div>
<nav bis_size='{"x":760,"y":4462,"w":384,"h":84,"abs_x":760,"abs_y":4505}' className="grid grid-cols-2 gap-6 text-sm">
<div bis_size='{"x":760,"y":4462,"w":180,"h":84,"abs_x":760,"abs_y":4505}' className="space-y-2">
<a bis_size='{"x":760,"y":4462,"w":180,"h":20,"abs_x":760,"abs_y":4505}' className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#about">About</a>
<a bis_size='{"x":760,"y":4490,"w":180,"h":20,"abs_x":760,"abs_y":4533}' className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#divisions">Divisions</a>
<a bis_size='{"x":760,"y":4518,"w":180,"h":20,"abs_x":760,"abs_y":4561}' className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#innovation">Innovation</a>
</div>
<div bis_size='{"x":964,"y":4462,"w":180,"h":84,"abs_x":964,"abs_y":4505}' className="space-y-2">
<a bis_size='{"x":964,"y":4462,"w":180,"h":20,"abs_x":964,"abs_y":4505}' className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#droid">DROID Challenge</a>
<a bis_size='{"x":964,"y":4490,"w":180,"h":20,"abs_x":964,"abs_y":4533}' className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#contact">Contact</a>
<a bis_size='{"x":964,"y":4518,"w":180,"h":20,"abs_x":964,"abs_y":4561}' className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#">Privacy</a>
</div>
</nav>
<div bis_size='{"x":1176,"y":4462,"w":384,"h":84,"abs_x":1176,"abs_y":4505}' className="flex flex-col items-start gap-4 sm:items-end">
<div bis_size='{"x":1408,"y":4462,"w":152,"h":32,"abs_x":1408,"abs_y":4505}' className="flex items-center gap-2">
<button bis_size='{"x":1408,"y":4462,"w":32,"h":32,"abs_x":1408,"abs_y":4505}' className="inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] hover:text-[var(--text)]" id="themeToggleFooter">
<svg bis_size='{"x":1416,"y":4470,"w":16,"h":16,"abs_x":1416,"abs_y":4513}' className="moon h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1418,"y":4472,"w":11,"h":11,"abs_x":1418,"abs_y":4515}' d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="sun hidden h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' cx="12" cy="12" r="4"></circle><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M12 2v2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M12 20v2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m4.93 4.93 1.41 1.41"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m17.66 17.66 1.41 1.41"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M2 12h2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M20 12h2"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m6.34 17.66-1.41 1.41"></path><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
<a aria-label="GitHub" bis_size='{"x":1448,"y":4462,"w":32,"h":32,"abs_x":1448,"abs_y":4505}' className="inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] transition hover:text-[var(--text)]" href="#">
<svg bis_size='{"x":1456,"y":4470,"w":16,"h":16,"abs_x":1456,"abs_y":4513}' className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1457,"y":4471,"w":13,"h":13,"abs_x":1457,"abs_y":4514}' d="M12 2a10 10 0 0 0-3.162 19.493c.5.092.684-.217.684-.482 0-.237-.01-1.024-.015-1.857-2.782.604-3.369-1.19-3.369-1.19-.454-1.154-1.11-1.462-1.11-1.462-.907-.62.069-.607.069-.607 1.003.07 1.53 1.03 1.53 1.03.892 1.529 2.341 1.087 2.91.832.091-.646.35-1.087.636-1.337-2.222-.253-4.555-1.111-4.555-4.944 0-1.091.39-1.985 1.029-2.684-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.56 9.56 0 0 1 12 6.844c.85.004 1.706.115 2.506.337 1.91-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65.64.699 1.028 1.593 1.028 2.684 0 3.842-2.337 4.687-4.565 4.936.359.309.679.918.679 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.69.481A10 10 0 0 0 12 2z"></path></svg>
</a>
<a aria-label="LinkedIn" bis_size='{"x":1488,"y":4462,"w":32,"h":32,"abs_x":1488,"abs_y":4505}' className="inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] transition hover:text-[var(--text)]" href="#">
<svg bis_size='{"x":1496,"y":4470,"w":16,"h":16,"abs_x":1496,"abs_y":4513}' className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1496,"y":4470,"w":16,"h":15,"abs_x":1496,"abs_y":4513}' d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0zM8 8h4.8v2.2h.1C13.84 8.9 15.4 8 17.8 8 22.6 8 24 10.9 24 15.4V24h-5v-7.4c0-1.8 0-4.2-2.6-4.2-2.6 0-3 2-3 4.1V24H8z"></path></svg>
</a>
<a aria-label="X/Twitter" bis_size='{"x":1528,"y":4462,"w":32,"h":32,"abs_x":1528,"abs_y":4505}' className="inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] transition hover:text-[var(--text)]" href="#">
<svg bis_size='{"x":1536,"y":4470,"w":16,"h":16,"abs_x":1536,"abs_y":4513}' className="h-4 w-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1537,"y":4471,"w":13,"h":13,"abs_x":1537,"abs_y":4514}' d="M18.244 2H21l-6.5 7.43L22 22h-6.828l-5.35-7.02L7.22 22H3l6.9-7.89L2 2h6.914l4.834 6.42L18.244 2zm-1.196 18h1.77L7.01 4H5.13l11.918 16z"></path></svg>
</a>
</div>
<p bis_size='{"x":1343,"y":4510,"w":217,"h":16,"abs_x":1343,"abs_y":4553}' className="text-xs text-[var(--text-dim)]">© <span bis_size='{"x":1357,"y":4510,"w":29,"h":15,"abs_x":1357,"abs_y":4553}' id="year">2025</span> Data Envy. All rights reserved.</p>
</div>
</div>
</div>
</footer>



    </>
  );
}
