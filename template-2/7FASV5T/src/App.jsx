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

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

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
  
}
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
      

<header bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:1905,&quot;h&quot;:66,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--bg)/0.6] backdrop-blur-xl">
<div bis_size="{&quot;x&quot;:312,&quot;y&quot;:0,&quot;w&quot;:1280,&quot;h&quot;:64,&quot;abs_x&quot;:312,&quot;abs_y&quot;:43}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:0,&quot;w&quot;:1216,&quot;h&quot;:64,&quot;abs_x&quot;:344,&quot;abs_y&quot;:43}" className="flex h-16 items-center justify-between">

<a bis_size="{&quot;x&quot;:344,&quot;y&quot;:10,&quot;w&quot;:176,&quot;h&quot;:44,&quot;abs_x&quot;:344,&quot;abs_y&quot;:53}" className="group flex items-center gap-3" href="#">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:14,&quot;w&quot;:36,&quot;h&quot;:36,&quot;abs_x&quot;:344,&quot;abs_y&quot;:57}" className="relative grid h-9 w-9 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)] transition-transform duration-200 group-hover:scale-[1.03] group-hover:shadow-[0_0_0_2px_rgba(34,211,238,0.15)]">
<svg bis_size="{&quot;x&quot;:352,&quot;y&quot;:22,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:352,&quot;abs_y&quot;:65}" className="lucide lucide-brain-circuit h-5 w-5 text-[var(--accent)]" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:354,&quot;y&quot;:23,&quot;w&quot;:8,&quot;h&quot;:16,&quot;abs_x&quot;:354,&quot;abs_y&quot;:66}"></path><path bis_size="{&quot;x&quot;:360,&quot;y&quot;:29,&quot;w&quot;:2,&quot;h&quot;:3,&quot;abs_x&quot;:360,&quot;abs_y&quot;:72}"></path><path bis_size="{&quot;x&quot;:357,&quot;y&quot;:26,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:357,&quot;abs_y&quot;:69}"></path><path bis_size="{&quot;x&quot;:355,&quot;y&quot;:30,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:355,&quot;abs_y&quot;:73}"></path><path bis_size="{&quot;x&quot;:355,&quot;y&quot;:36,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:355,&quot;abs_y&quot;:79}"></path><path bis_size="{&quot;x&quot;:362,&quot;y&quot;:32,&quot;w&quot;:3,&quot;h&quot;:0,&quot;abs_x&quot;:362,&quot;abs_y&quot;:75}"></path><path bis_size="{&quot;x&quot;:362,&quot;y&quot;:37,&quot;w&quot;:6,&quot;h&quot;:2,&quot;abs_x&quot;:362,&quot;abs_y&quot;:80}"></path><path bis_size="{&quot;x&quot;:362,&quot;y&quot;:28,&quot;w&quot;:6,&quot;h&quot;:0,&quot;abs_x&quot;:362,&quot;abs_y&quot;:71}"></path><path bis_size="{&quot;x&quot;:365,&quot;y&quot;:24,&quot;w&quot;:1,&quot;h&quot;:4,&quot;abs_x&quot;:365,&quot;abs_y&quot;:67}"></path><circle bis_size="{&quot;x&quot;:365,&quot;y&quot;:32,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:365,&quot;abs_y&quot;:75}" cx="16" cy="13"></circle><circle bis_size="{&quot;x&quot;:367,&quot;y&quot;:24,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:367,&quot;abs_y&quot;:67}" cx="18" cy="3"></circle><circle bis_size="{&quot;x&quot;:368,&quot;y&quot;:39,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:368,&quot;abs_y&quot;:82}" cx="20" cy="21"></circle><circle bis_size="{&quot;x&quot;:368,&quot;y&quot;:28,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:368,&quot;abs_y&quot;:71}" cx="20" cy="8"></circle></svg>
</div>
<div bis_size="{&quot;x&quot;:392,&quot;y&quot;:10,&quot;w&quot;:128,&quot;h&quot;:44,&quot;abs_x&quot;:392,&quot;abs_y&quot;:53}" className="leading-tight">
<div bis_size="{&quot;x&quot;:392,&quot;y&quot;:10,&quot;w&quot;:128,&quot;h&quot;:28,&quot;abs_x&quot;:392,&quot;abs_y&quot;:53}" className="text-lg font-semibold tracking-tight">DATA ENVY</div>
<div bis_size="{&quot;x&quot;:392,&quot;y&quot;:38,&quot;w&quot;:128,&quot;h&quot;:16,&quot;abs_x&quot;:392,&quot;abs_y&quot;:81}" className="text-xs text-[var(--text-dim)]">Technology Innovation</div>
</div>
</a>

<nav bis_size="{&quot;x&quot;:873,&quot;y&quot;:14,&quot;w&quot;:686,&quot;h&quot;:36,&quot;abs_x&quot;:873,&quot;abs_y&quot;:57}" className="hidden items-center gap-7 md:flex">
<a bis_size="{&quot;x&quot;:873,&quot;y&quot;:22,&quot;w&quot;:40,&quot;h&quot;:20,&quot;abs_x&quot;:873,&quot;abs_y&quot;:65}" className="text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#about">About</a>
<a bis_size="{&quot;x&quot;:942,&quot;y&quot;:22,&quot;w&quot;:60,&quot;h&quot;:20,&quot;abs_x&quot;:942,&quot;abs_y&quot;:65}" className="text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#divisions">Divisions</a>
<a bis_size="{&quot;x&quot;:1030,&quot;y&quot;:22,&quot;w&quot;:69,&quot;h&quot;:20,&quot;abs_x&quot;:1030,&quot;abs_y&quot;:65}" className="text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#innovation">Innovation</a>
<a bis_size="{&quot;x&quot;:1128,&quot;y&quot;:22,&quot;w&quot;:114,&quot;h&quot;:20,&quot;abs_x&quot;:1128,&quot;abs_y&quot;:65}" className="text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#droid">DROID Challenge</a>
<a bis_size="{&quot;x&quot;:1271,&quot;y&quot;:22,&quot;w&quot;:52,&quot;h&quot;:20,&quot;abs_x&quot;:1271,&quot;abs_y&quot;:65}" className="text-sm font-medium text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#contact">Contact</a>
<button aria-label="Toggle color theme" bis_size="{&quot;x&quot;:1352,&quot;y&quot;:16,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:1352,&quot;abs_y&quot;:59}" className="relative inline-flex items-center justify-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] transition hover:text-[var(--text)] hover:shadow-[0_0_0_2px_rgba(124,58,237,0.15)]" id="themeToggle">
<svg bis_size="{&quot;x&quot;:1360,&quot;y&quot;:24,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1360,&quot;abs_y&quot;:67}" className="lucide lucide-moon w-[16px] h-[16px]" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1362,&quot;y&quot;:26,&quot;w&quot;:11,&quot;h&quot;:11,&quot;abs_x&quot;:1362,&quot;abs_y&quot;:69}"></path></svg>
<svg bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="lucide lucide-sun hidden h-4 w-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" cx="12 cy="></circle><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path></svg>
</button>
<a bis_size="{&quot;x&quot;:1412,&quot;y&quot;:14,&quot;w&quot;:148,&quot;h&quot;:36,&quot;abs_x&quot;:1412,&quot;abs_y&quot;:57}" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-black/90 transition will-change-transform hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" href="#contact">
<svg bis_size="{&quot;x&quot;:1432,&quot;y&quot;:24,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1432,&quot;abs_y&quot;:67}" className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1433,&quot;y&quot;:25,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:1433,&quot;abs_y&quot;:68}"></path><path bis_size="{&quot;x&quot;:1445,&quot;y&quot;:25,&quot;w&quot;:0,&quot;h&quot;:2,&quot;abs_x&quot;:1445,&quot;abs_y&quot;:68}"></path><path bis_size="{&quot;x&quot;:1444,&quot;y&quot;:26,&quot;w&quot;:2,&quot;h&quot;:0,&quot;abs_x&quot;:1444,&quot;abs_y&quot;:69}"></path><circle bis_size="{&quot;x&quot;:1433,&quot;y&quot;:36,&quot;w&quot;:2,&quot;h&quot;:2,&quot;abs_x&quot;:1433,&quot;abs_y&quot;:79}" cx="4" cy="20"></circle></svg>
            Get in Touch
          </a>
</nav>

<button bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="md:hidden inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] hover:text-[var(--text)]" id="mobileMenuBtn">
<svg bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path></svg>
</button>
</div>
</div>

<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="md:hidden hidden border-t border-[var(--border)] bg-[var(--bg)]" id="mobileMenu">
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="flex flex-col gap-3">
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="rounded-lg px-3 py-2 text-sm text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]" href="#about">About</a>
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="rounded-lg px-3 py-2 text-sm text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]" href="#divisions">Divisions</a>
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="rounded-lg px-3 py-2 text-sm text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]" href="#innovation">Innovation</a>
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="rounded-lg px-3 py-2 text-sm text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]" href="#droid">DROID Challenge</a>
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="rounded-lg px-3 py-2 text-sm text-[var(--text-dim)] hover:bg-[var(--surface)] hover:text-[var(--text)]" href="#contact">Contact</a>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="mt-2 flex items-center justify-between">
<a bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2 text-sm font-medium text-black/90 hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" href="#contact">
<svg bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><circle bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" cx="4" cy="20"></circle></svg>
              Get in Touch
            </a>
<button bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] hover:text-[var(--text)]" id="themeToggleMobile">
<svg bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="lucide lucide-moon h-4 w-4" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path></svg>
<svg bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="lucide lucide-sun hidden h-4 w-4" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" cx="12" cy="12"></circle><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path></svg>
</button>
</div>
</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:64,&quot;w&quot;:1905,&quot;h&quot;:1,&quot;abs_x&quot;:0,&quot;abs_y&quot;:107}" className="h-px w-full bg-gradient-to-r from-[var(--accent)]/40 via-transparent to-[var(--violet)]/40"></div>
</header>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:66,&quot;w&quot;:1905,&quot;h&quot;:681,&quot;abs_x&quot;:0,&quot;abs_y&quot;:109}" className="relative overflow-hidden">
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:66,&quot;w&quot;:1905,&quot;h&quot;:681,&quot;abs_x&quot;:0,&quot;abs_y&quot;:109}" className="absolute inset-0 pointer-events-none">
<div bis_size="{&quot;x&quot;:712,&quot;y&quot;:-214,&quot;w&quot;:1200,&quot;h&quot;:1200,&quot;abs_x&quot;:712,&quot;abs_y&quot;:-171}" className="radial-glow -top-40 left-1/2"></div>
</div>
<div bis_size="{&quot;x&quot;:312,&quot;y&quot;:66,&quot;w&quot;:1280,&quot;h&quot;:680,&quot;abs_x&quot;:312,&quot;abs_y&quot;:109}" className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 md:pt-24 lg:pt-28">
<div bis_size="{&quot;x&quot;:336,&quot;y&quot;:178,&quot;w&quot;:1232,&quot;h&quot;:472,&quot;abs_x&quot;:336,&quot;abs_y&quot;:221}" className="grid items-center gap-12 lg:grid-cols-2">

<div bis_size="{&quot;x&quot;:336,&quot;y&quot;:215,&quot;w&quot;:592,&quot;h&quot;:396,&quot;abs_x&quot;:336,&quot;abs_y&quot;:258}" className="relative">
<h1 bis_size="{&quot;x&quot;:336,&quot;y&quot;:215,&quot;w&quot;:592,&quot;h&quot;:134,&quot;abs_x&quot;:336,&quot;abs_y&quot;:258}" className="text-4xl sm:text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight leading-[1.05]">
            Where Innovation Meets Intelligence
          </h1>
<p bis_size="{&quot;x&quot;:336,&quot;y&quot;:370,&quot;w&quot;:592,&quot;h&quot;:84,&quot;abs_x&quot;:336,&quot;abs_y&quot;:413}" className="mt-5 max-w-2xl text-base sm:text-lg text-[var(--text-dim)]">
            Powering the future with smart, secure, and connected solutions. From AI-driven insights to cutting-edge robotics, we transform ideas into reality.
          </p>
<div bis_size="{&quot;x&quot;:336,&quot;y&quot;:486,&quot;w&quot;:592,&quot;h&quot;:46,&quot;abs_x&quot;:336,&quot;abs_y&quot;:529}" className="mt-8 flex flex-col gap-3 sm:flex-row">
<a bis_size="{&quot;x&quot;:336,&quot;y&quot;:486,&quot;w&quot;:214,&quot;h&quot;:46,&quot;abs_x&quot;:336,&quot;abs_y&quot;:529}" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black/90 transition hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" href="#divisions">
<svg bis_size="{&quot;x&quot;:360,&quot;y&quot;:501,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:360,&quot;abs_y&quot;:544}" className="lucide lucide-layout-dashboard h-4 w-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect bis_size="{&quot;x&quot;:362,&quot;y&quot;:503,&quot;w&quot;:4,&quot;h&quot;:6,&quot;abs_x&quot;:362,&quot;abs_y&quot;:546}" height="9" rx="1" width="7"></rect><rect bis_size="{&quot;x&quot;:369,&quot;y&quot;:503,&quot;w&quot;:4,&quot;h&quot;:3,&quot;abs_x&quot;:369,&quot;abs_y&quot;:546}" height="5" rx="1" width="7"></rect><rect bis_size="{&quot;x&quot;:369,&quot;y&quot;:509,&quot;w&quot;:4,&quot;h&quot;:6,&quot;abs_x&quot;:369,&quot;abs_y&quot;:552}" height="9" rx="1" width="7"></rect><rect bis_size="{&quot;x&quot;:362,&quot;y&quot;:511,&quot;w&quot;:4,&quot;h&quot;:3,&quot;abs_x&quot;:362,&quot;abs_y&quot;:554}" height="5" rx="1" width="7"></rect></svg>
              Explore Our Divisions
            </a>
<a bis_size="{&quot;x&quot;:563,&quot;y&quot;:486,&quot;w&quot;:177,&quot;h&quot;:46,&quot;abs_x&quot;:563,&quot;abs_y&quot;:529}" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--text)] transition hover:border-[color:var(--accent)] hover:shadow-[0_0_24px_rgba(20,184,166,0.2)]" href="#contact">
<svg bis_size="{&quot;x&quot;:588,&quot;y&quot;:501,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:588,&quot;abs_y&quot;:544}" className="lucide lucide-handshake h-4 w-4 text-[var(--accent)]" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:595,&quot;y&quot;:511,&quot;w&quot;:3,&quot;h&quot;:2,&quot;abs_x&quot;:595,&quot;abs_y&quot;:554}"></path><path bis_size="{&quot;x&quot;:593,&quot;y&quot;:503,&quot;w&quot;:9,&quot;h&quot;:9,&quot;abs_x&quot;:593,&quot;abs_y&quot;:546}"></path><path bis_size="{&quot;x&quot;:601,&quot;y&quot;:503,&quot;w&quot;:1,&quot;h&quot;:7,&quot;abs_x&quot;:601,&quot;abs_y&quot;:546}"></path><path bis_size="{&quot;x&quot;:589,&quot;y&quot;:503,&quot;w&quot;:6,&quot;h&quot;:12,&quot;abs_x&quot;:589,&quot;abs_y&quot;:546}"></path><path bis_size="{&quot;x&quot;:590,&quot;y&quot;:503,&quot;w&quot;:5,&quot;h&quot;:0,&quot;abs_x&quot;:590,&quot;abs_y&quot;:546}"></path></svg>
              Partner with Us
            </a>
</div>

<div bis_size="{&quot;x&quot;:336,&quot;y&quot;:572,&quot;w&quot;:592,&quot;h&quot;:40,&quot;abs_x&quot;:336,&quot;abs_y&quot;:615}" className="mt-10 flex gap-3 text-[var(--text-dim)]">
<div bis_size="{&quot;x&quot;:336,&quot;y&quot;:572,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:336,&quot;abs_y&quot;:615}" className="floating animation-delay-0 grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)]" style={{animation: `floatSlow 6s ease-in-out infinite`}}>
<svg bis_size="{&quot;x&quot;:346,&quot;y&quot;:582,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:346,&quot;abs_y&quot;:625}" className="lucide lucide-cpu h-5 w-5 text-[var(--accent)]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:356,&quot;y&quot;:598,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:356,&quot;abs_y&quot;:641}"></path><path bis_size="{&quot;x&quot;:356,&quot;y&quot;:583,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:356,&quot;abs_y&quot;:626}"></path><path bis_size="{&quot;x&quot;:360,&quot;y&quot;:598,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:360,&quot;abs_y&quot;:641}"></path><path bis_size="{&quot;x&quot;:360,&quot;y&quot;:583,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:360,&quot;abs_y&quot;:626}"></path><path bis_size="{&quot;x&quot;:348,&quot;y&quot;:592,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:348,&quot;abs_y&quot;:635}"></path><path bis_size="{&quot;x&quot;:348,&quot;y&quot;:596,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:348,&quot;abs_y&quot;:639}"></path><path bis_size="{&quot;x&quot;:348,&quot;y&quot;:588,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:348,&quot;abs_y&quot;:631}"></path><path bis_size="{&quot;x&quot;:363,&quot;y&quot;:592,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:363,&quot;abs_y&quot;:635}"></path><path bis_size="{&quot;x&quot;:363,&quot;y&quot;:596,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:363,&quot;abs_y&quot;:639}"></path><path bis_size="{&quot;x&quot;:363,&quot;y&quot;:588,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:363,&quot;abs_y&quot;:631}"></path><path bis_size="{&quot;x&quot;:352,&quot;y&quot;:598,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:352,&quot;abs_y&quot;:641}"></path><path bis_size="{&quot;x&quot;:352,&quot;y&quot;:583,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:352,&quot;abs_y&quot;:626}"></path><rect bis_size="{&quot;x&quot;:349,&quot;y&quot;:585,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:349,&quot;abs_y&quot;:628}" height="16" rx="2" width="16"></rect><rect bis_size="{&quot;x&quot;:353,&quot;y&quot;:588,&quot;w&quot;:6,&quot;h&quot;:6,&quot;abs_x&quot;:353,&quot;abs_y&quot;:631}" height="8" rx="1" width="8"></rect></svg>
</div>
<div bis_size="{&quot;x&quot;:388,&quot;y&quot;:572,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:388,&quot;abs_y&quot;:615}" className="floating animation-delay-200 grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)]" style={{animation: `floatSlow 7s ease-in-out infinite`}}>
<svg bis_size="{&quot;x&quot;:398,&quot;y&quot;:582,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:398,&quot;abs_y&quot;:625}" className="lucide lucide-bot h-5 w-5 text-[var(--accent2)]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:405,&quot;y&quot;:585,&quot;w&quot;:3,&quot;h&quot;:3,&quot;abs_x&quot;:405,&quot;abs_y&quot;:628}"></path><rect bis_size="{&quot;x&quot;:401,&quot;y&quot;:588,&quot;w&quot;:13,&quot;h&quot;:10,&quot;abs_x&quot;:401,&quot;abs_y&quot;:631}" height="12" rx="2" width="16"></rect><path bis_size="{&quot;x&quot;:400,&quot;y&quot;:593,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:400,&quot;abs_y&quot;:636}"></path><path bis_size="{&quot;x&quot;:415,&quot;y&quot;:593,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:415,&quot;abs_y&quot;:636}"></path><path bis_size="{&quot;x&quot;:411,&quot;y&quot;:593,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:411,&quot;abs_y&quot;:636}"></path><path bis_size="{&quot;x&quot;:406,&quot;y&quot;:593,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:406,&quot;abs_y&quot;:636}"></path></svg>
</div>
<div bis_size="{&quot;x&quot;:440,&quot;y&quot;:572,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:440,&quot;abs_y&quot;:615}" className="floating animation-delay-400 grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)]" style={{animation: `floatSlow 5.5s ease-in-out infinite`}}>
<svg bis_size="{&quot;x&quot;:450,&quot;y&quot;:582,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:450,&quot;abs_y&quot;:625}" className="lucide lucide-wifi h-5 w-5 text-[var(--violet)]" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:460,&quot;y&quot;:598,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:460,&quot;abs_y&quot;:641}"></path><path bis_size="{&quot;x&quot;:452,&quot;y&quot;:586,&quot;w&quot;:16,&quot;h&quot;:3,&quot;abs_x&quot;:452,&quot;abs_y&quot;:629}"></path><path bis_size="{&quot;x&quot;:454,&quot;y&quot;:590,&quot;w&quot;:11,&quot;h&quot;:2,&quot;abs_x&quot;:454,&quot;abs_y&quot;:633}"></path><path bis_size="{&quot;x&quot;:457,&quot;y&quot;:594,&quot;w&quot;:5,&quot;h&quot;:1,&quot;abs_x&quot;:457,&quot;abs_y&quot;:637}"></path></svg>
</div>
<div bis_size="{&quot;x&quot;:492,&quot;y&quot;:572,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:492,&quot;abs_y&quot;:615}" className="floating animation-delay-600 grid h-10 w-10 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)]" style={{animation: `floatSlow 6.5s ease-in-out infinite`}}>
<svg bis_size="{&quot;x&quot;:502,&quot;y&quot;:582,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:502,&quot;abs_y&quot;:625}" className="lucide lucide-shield-check h-5 w-5 text-[var(--accent)]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:505,&quot;y&quot;:583,&quot;w&quot;:13,&quot;h&quot;:16,&quot;abs_x&quot;:505,&quot;abs_y&quot;:626}"></path><path bis_size="{&quot;x&quot;:510,&quot;y&quot;:590,&quot;w&quot;:5,&quot;h&quot;:3,&quot;abs_x&quot;:510,&quot;abs_y&quot;:633}"></path></svg>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:976,&quot;y&quot;:178,&quot;w&quot;:592,&quot;h&quot;:472,&quot;abs_x&quot;:976,&quot;abs_y&quot;:221}" className="relative">
<div bis_size="{&quot;x&quot;:976,&quot;y&quot;:178,&quot;w&quot;:592,&quot;h&quot;:444,&quot;abs_x&quot;:976,&quot;abs_y&quot;:221}" className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl ring-1 ring-[var(--border)] bg-[var(--bg-muted)]">
<video autoPlay bis_size="{&quot;x&quot;:976,&quot;y&quot;:178,&quot;w&quot;:592,&quot;h&quot;:444,&quot;abs_x&quot;:976,&quot;abs_y&quot;:221}" className="absolute inset-0 h-full w-full opacity-80 object-cover" loop muted playsInline poster="">
<source bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

<div bis_size="{&quot;x&quot;:976,&quot;y&quot;:178,&quot;w&quot;:592,&quot;h&quot;:444,&quot;abs_x&quot;:976,&quot;abs_y&quot;:221}" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(20,184,166,0.12),transparent_60%)]"></div>
<div bis_size="{&quot;x&quot;:976,&quot;y&quot;:178,&quot;w&quot;:592,&quot;h&quot;:444,&quot;abs_x&quot;:976,&quot;abs_y&quot;:221}" className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_98%,rgba(20,184,166,0.15)_100%),repeating-linear-gradient(0deg,transparent,transparent_22px,rgba(255,255,255,0.04)_24px),repeating-linear-gradient(90deg,transparent,transparent_22px,rgba(255,255,255,0.04)_24px)] mix-blend-screen"></div>
</div>
<p bis_size="{&quot;x&quot;:976,&quot;y&quot;:634,&quot;w&quot;:592,&quot;h&quot;:16,&quot;abs_x&quot;:976,&quot;abs_y&quot;:677}" className="mt-3 text-xs text-[var(--text-dim)]">Looping stock animation with subtle overlays.</p>
</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:746,&quot;w&quot;:1905,&quot;h&quot;:1,&quot;abs_x&quot;:0,&quot;abs_y&quot;:789}" className="divider-glow"></div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:747,&quot;w&quot;:1905,&quot;h&quot;:685,&quot;abs_x&quot;:0,&quot;abs_y&quot;:790}" className="relative py-16 sm:py-20" id="about">
<div bis_size="{&quot;x&quot;:312,&quot;y&quot;:827,&quot;w&quot;:1280,&quot;h&quot;:460,&quot;abs_x&quot;:312,&quot;abs_y&quot;:870}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 bis_size="{&quot;x&quot;:344,&quot;y&quot;:827,&quot;w&quot;:1216,&quot;h&quot;:72,&quot;abs_x&quot;:344,&quot;abs_y&quot;:870}" className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">Redefining Technology Excellence</h2>
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:939,&quot;w&quot;:1216,&quot;h&quot;:206,&quot;abs_x&quot;:344,&quot;abs_y&quot;:982}" className="mt-10 grid gap-6 md:grid-cols-3">

<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:939,&quot;w&quot;:389,&quot;h&quot;:206,&quot;abs_x&quot;:344,&quot;abs_y&quot;:982}" className="glass group rounded-2xl p-6 transition hover:scale-[1.02] hover:shadow-[var(--shadow-neon)]">
<div bis_size="{&quot;x&quot;:369,&quot;y&quot;:964,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1007}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:381,&quot;y&quot;:976,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:381,&quot;abs_y&quot;:1019}" className="lucide lucide-target h-5 w-5 text-[var(--accent)]" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size="{&quot;x&quot;:383,&quot;y&quot;:977,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:383,&quot;abs_y&quot;:1020}" cx="12" cy="12"></circle><circle bis_size="{&quot;x&quot;:386,&quot;y&quot;:981,&quot;w&quot;:10,&quot;h&quot;:10,&quot;abs_x&quot;:386,&quot;abs_y&quot;:1024}" cx="12" cy="12"></circle><circle bis_size="{&quot;x&quot;:389,&quot;y&quot;:984,&quot;w&quot;:3,&quot;h&quot;:3,&quot;abs_x&quot;:389,&quot;abs_y&quot;:1027}" cx="12" cy="12"></circle></svg>
</div>
<h3 bis_size="{&quot;x&quot;:369,&quot;y&quot;:1024,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1067}" className="text-xl font-semibold tracking-tight">Mission</h3>
<p bis_size="{&quot;x&quot;:369,&quot;y&quot;:1060,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1103}" className="mt-2 text-sm text-[var(--text-dim)]">Deliver secure, intelligent systems that empower organizations, accelerate innovation, and create lasting impact.</p>
</div>
<div bis_size="{&quot;x&quot;:757,&quot;y&quot;:939,&quot;w&quot;:389,&quot;h&quot;:206,&quot;abs_x&quot;:757,&quot;abs_y&quot;:982}" className="glass group rounded-2xl p-6 transition hover:scale-[1.02] hover:shadow-[var(--shadow-neon)]">
<div bis_size="{&quot;x&quot;:782,&quot;y&quot;:964,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:782,&quot;abs_y&quot;:1007}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:794,&quot;y&quot;:976,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:794,&quot;abs_y&quot;:1019}" className="lucide lucide-scan-line h-5 w-5 text-[var(--accent2)]" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:797,&quot;y&quot;:978,&quot;w&quot;:3,&quot;h&quot;:3,&quot;abs_x&quot;:797,&quot;abs_y&quot;:1021}"></path><path bis_size="{&quot;x&quot;:808,&quot;y&quot;:978,&quot;w&quot;:3,&quot;h&quot;:3,&quot;abs_x&quot;:808,&quot;abs_y&quot;:1021}"></path><path bis_size="{&quot;x&quot;:808,&quot;y&quot;:990,&quot;w&quot;:3,&quot;h&quot;:3,&quot;abs_x&quot;:808,&quot;abs_y&quot;:1033}"></path><path bis_size="{&quot;x&quot;:797,&quot;y&quot;:990,&quot;w&quot;:3,&quot;h&quot;:3,&quot;abs_x&quot;:797,&quot;abs_y&quot;:1033}"></path><path bis_size="{&quot;x&quot;:800,&quot;y&quot;:986,&quot;w&quot;:8,&quot;h&quot;:0,&quot;abs_x&quot;:800,&quot;abs_y&quot;:1029}"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:782,&quot;y&quot;:1024,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:782,&quot;abs_y&quot;:1067}" className="text-xl font-semibold tracking-tight">Vision</h3>
<p bis_size="{&quot;x&quot;:782,&quot;y&quot;:1060,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:782,&quot;abs_y&quot;:1103}" className="mt-2 text-sm text-[var(--text-dim)]">Advance Africa’s digital transformation through trustworthy AI, resilient infrastructure, and human-centered design.</p>
</div>
<div bis_size="{&quot;x&quot;:1171,&quot;y&quot;:939,&quot;w&quot;:389,&quot;h&quot;:206,&quot;abs_x&quot;:1171,&quot;abs_y&quot;:982}" className="glass group rounded-2xl p-6 transition hover:scale-[1.02] hover:shadow-[var(--shadow-neon)]">
<div bis_size="{&quot;x&quot;:1196,&quot;y&quot;:964,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:1007}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--surface)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:1208,&quot;y&quot;:976,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1208,&quot;abs_y&quot;:1019}" className="lucide lucide-beaker h-5 w-5 text-[var(--violet)]" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1211,&quot;y&quot;:978,&quot;w&quot;:12,&quot;h&quot;:0,&quot;abs_x&quot;:1211,&quot;abs_y&quot;:1021}"></path><path bis_size="{&quot;x&quot;:1213,&quot;y&quot;:978,&quot;w&quot;:10,&quot;h&quot;:15,&quot;abs_x&quot;:1213,&quot;abs_y&quot;:1021}"></path><path bis_size="{&quot;x&quot;:1213,&quot;y&quot;:987,&quot;w&quot;:10,&quot;h&quot;:0,&quot;abs_x&quot;:1213,&quot;abs_y&quot;:1030}"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:1196,&quot;y&quot;:1024,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:1067}" className="text-xl font-semibold tracking-tight">Innovation</h3>
<p bis_size="{&quot;x&quot;:1196,&quot;y&quot;:1060,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:1103}" className="mt-2 text-sm text-[var(--text-dim)]">From rapid prototyping to production at scale—our labs translate ambitious ideas into reliable products.</p>
</div>
</div>

<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:1185,&quot;w&quot;:1216,&quot;h&quot;:102,&quot;abs_x&quot;:344,&quot;abs_y&quot;:1228}" className="mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:grid-cols-4">
<div bis_size="{&quot;x&quot;:369,&quot;y&quot;:1210,&quot;w&quot;:279,&quot;h&quot;:52,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1253}" className="text-center">
<div bis_size="{&quot;x&quot;:369,&quot;y&quot;:1210,&quot;w&quot;:279,&quot;h&quot;:32,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1253}" className="text-2xl font-semibold tracking-tight"><span bis_size="{&quot;x&quot;:501,&quot;y&quot;:1211,&quot;w&quot;:15,&quot;h&quot;:29,&quot;abs_x&quot;:501,&quot;abs_y&quot;:1254}" className="counter" data-target="6">0</span></div>
<div bis_size="{&quot;x&quot;:369,&quot;y&quot;:1246,&quot;w&quot;:279,&quot;h&quot;:16,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1289}" className="mt-1 text-xs text-[var(--text-dim)]">Core Divisions</div>
</div>
<div bis_size="{&quot;x&quot;:665,&quot;y&quot;:1210,&quot;w&quot;:279,&quot;h&quot;:52,&quot;abs_x&quot;:665,&quot;abs_y&quot;:1253}" className="text-center">
<div bis_size="{&quot;x&quot;:665,&quot;y&quot;:1210,&quot;w&quot;:279,&quot;h&quot;:32,&quot;abs_x&quot;:665,&quot;abs_y&quot;:1253}" className="text-2xl font-semibold tracking-tight"><span bis_size="{&quot;x&quot;:789,&quot;y&quot;:1211,&quot;w&quot;:15,&quot;h&quot;:29,&quot;abs_x&quot;:789,&quot;abs_y&quot;:1254}" className="counter" data-target="100">0</span>+</div>
<div bis_size="{&quot;x&quot;:665,&quot;y&quot;:1246,&quot;w&quot;:279,&quot;h&quot;:16,&quot;abs_x&quot;:665,&quot;abs_y&quot;:1289}" className="mt-1 text-xs text-[var(--text-dim)]">Projects Delivered</div>
</div>
<div bis_size="{&quot;x&quot;:960,&quot;y&quot;:1210,&quot;w&quot;:279,&quot;h&quot;:52,&quot;abs_x&quot;:960,&quot;abs_y&quot;:1253}" className="text-center">
<div bis_size="{&quot;x&quot;:960,&quot;y&quot;:1210,&quot;w&quot;:279,&quot;h&quot;:32,&quot;abs_x&quot;:960,&quot;abs_y&quot;:1253}" className="text-2xl font-semibold tracking-tight">R<span bis_size="{&quot;x&quot;:1092,&quot;y&quot;:1211,&quot;w&quot;:15,&quot;h&quot;:29,&quot;abs_x&quot;:1092,&quot;abs_y&quot;:1254}" className="counter" data-target="350">0</span>K</div>
<div bis_size="{&quot;x&quot;:960,&quot;y&quot;:1246,&quot;w&quot;:279,&quot;h&quot;:16,&quot;abs_x&quot;:960,&quot;abs_y&quot;:1289}" className="mt-1 text-xs text-[var(--text-dim)]">Competition Prize</div>
</div>
<div bis_size="{&quot;x&quot;:1256,&quot;y&quot;:1210,&quot;w&quot;:279,&quot;h&quot;:52,&quot;abs_x&quot;:1256,&quot;abs_y&quot;:1253}" className="text-center">
<div bis_size="{&quot;x&quot;:1256,&quot;y&quot;:1210,&quot;w&quot;:279,&quot;h&quot;:32,&quot;abs_x&quot;:1256,&quot;abs_y&quot;:1253}" className="text-2xl font-semibold tracking-tight"><span bis_size="{&quot;x&quot;:1376,&quot;y&quot;:1211,&quot;w&quot;:15,&quot;h&quot;:29,&quot;abs_x&quot;:1376,&quot;abs_y&quot;:1254}" className="counter" data-target="24">0</span>/<span bis_size="{&quot;x&quot;:1400,&quot;y&quot;:1211,&quot;w&quot;:15,&quot;h&quot;:29,&quot;abs_x&quot;:1400,&quot;abs_y&quot;:1254}" className="counter" data-target="7">0</span></div>
<div bis_size="{&quot;x&quot;:1256,&quot;y&quot;:1246,&quot;w&quot;:279,&quot;h&quot;:16,&quot;abs_x&quot;:1256,&quot;abs_y&quot;:1289}" className="mt-1 text-xs text-[var(--text-dim)]">Innovation Focus</div>
</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:1351,&quot;w&quot;:1905,&quot;h&quot;:1,&quot;abs_x&quot;:0,&quot;abs_y&quot;:1394}" className="mt-16 divider-glow"></div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:1432,&quot;w&quot;:1905,&quot;h&quot;:879,&quot;abs_x&quot;:0,&quot;abs_y&quot;:1475}" className="py-16 sm:py-20" id="divisions">
<div bis_size="{&quot;x&quot;:312,&quot;y&quot;:1512,&quot;w&quot;:1280,&quot;h&quot;:654,&quot;abs_x&quot;:312,&quot;abs_y&quot;:1555}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:1512,&quot;w&quot;:672,&quot;h&quot;:104,&quot;abs_x&quot;:344,&quot;abs_y&quot;:1555}" className="max-w-2xl">
<h2 bis_size="{&quot;x&quot;:344,&quot;y&quot;:1512,&quot;w&quot;:672,&quot;h&quot;:72,&quot;abs_x&quot;:344,&quot;abs_y&quot;:1555}" className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">Our Core Divisions</h2>
<p bis_size="{&quot;x&quot;:344,&quot;y&quot;:1596,&quot;w&quot;:672,&quot;h&quot;:20,&quot;abs_x&quot;:344,&quot;abs_y&quot;:1639}" className="mt-3 text-sm text-[var(--text-dim)]">Six specialized divisions working together to deliver comprehensive solutions.</p>
</div>
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:1656,&quot;w&quot;:1216,&quot;h&quot;:510,&quot;abs_x&quot;:344,&quot;abs_y&quot;:1699}" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:1656,&quot;w&quot;:389,&quot;h&quot;:243,&quot;abs_x&quot;:344,&quot;abs_y&quot;:1699}" className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size="{&quot;x&quot;:369,&quot;y&quot;:1681,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1724}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:381,&quot;y&quot;:1693,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:381,&quot;abs_y&quot;:1736}" className="lucide lucide-code-2 h-5 w-5 text-[var(--accent)]" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:396,&quot;y&quot;:1699,&quot;w&quot;:3,&quot;h&quot;:6,&quot;abs_x&quot;:396,&quot;abs_y&quot;:1742}"></path><path bis_size="{&quot;x&quot;:383,&quot;y&quot;:1699,&quot;w&quot;:3,&quot;h&quot;:6,&quot;abs_x&quot;:383,&quot;abs_y&quot;:1742}"></path><path bis_size="{&quot;x&quot;:389,&quot;y&quot;:1696,&quot;w&quot;:4,&quot;h&quot;:13,&quot;abs_x&quot;:389,&quot;abs_y&quot;:1739}"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:369,&quot;y&quot;:1741,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1784}" className="text-lg font-semibold tracking-tight">DEV-SED</h3>
<p bis_size="{&quot;x&quot;:369,&quot;y&quot;:1773,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1816}" className="mt-1 text-xs text-[var(--text-dim)]">Software Engineering</p>
<p bis_size="{&quot;x&quot;:369,&quot;y&quot;:1797,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1840}" className="mt-2 text-sm text-[var(--text-dim)]">Cloud-native apps, APIs, and developer platforms with reliability and performance built-in.</p>
<a bis_size="{&quot;x&quot;:369,&quot;y&quot;:1853,&quot;w&quot;:100,&quot;h&quot;:20,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1896}" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size="{&quot;x&quot;:454,&quot;y&quot;:1855,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:454,&quot;abs_y&quot;:1898}" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:457,&quot;y&quot;:1863,&quot;w&quot;:9,&quot;h&quot;:0,&quot;abs_x&quot;:457,&quot;abs_y&quot;:1906}"></path><path bis_size="{&quot;x&quot;:462,&quot;y&quot;:1858,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:462,&quot;abs_y&quot;:1901}"></path></svg></a>
</div>
<div bis_size="{&quot;x&quot;:757,&quot;y&quot;:1656,&quot;w&quot;:389,&quot;h&quot;:243,&quot;abs_x&quot;:757,&quot;abs_y&quot;:1699}" className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size="{&quot;x&quot;:782,&quot;y&quot;:1681,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:782,&quot;abs_y&quot;:1724}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:794,&quot;y&quot;:1693,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:794,&quot;abs_y&quot;:1736}" className="lucide lucide-brain h-5 w-5 text-[var(--accent2)]" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:804,&quot;y&quot;:1697,&quot;w&quot;:0,&quot;h&quot;:10,&quot;abs_x&quot;:804,&quot;abs_y&quot;:1740}"></path><path bis_size="{&quot;x&quot;:802,&quot;y&quot;:1700,&quot;w&quot;:5,&quot;h&quot;:3,&quot;abs_x&quot;:802,&quot;abs_y&quot;:1743}"></path><path bis_size="{&quot;x&quot;:799,&quot;y&quot;:1694,&quot;w&quot;:10,&quot;h&quot;:3,&quot;abs_x&quot;:799,&quot;abs_y&quot;:1737}"></path><path bis_size="{&quot;x&quot;:809,&quot;y&quot;:1697,&quot;w&quot;:2,&quot;h&quot;:4,&quot;abs_x&quot;:809,&quot;abs_y&quot;:1740}" className=""></path><path bis_size="{&quot;x&quot;:809,&quot;y&quot;:1701,&quot;w&quot;:3,&quot;h&quot;:6,&quot;abs_x&quot;:809,&quot;abs_y&quot;:1744}"></path><path bis_size="{&quot;x&quot;:798,&quot;y&quot;:1707,&quot;w&quot;:13,&quot;h&quot;:3,&quot;abs_x&quot;:798,&quot;abs_y&quot;:1750}"></path><path bis_size="{&quot;x&quot;:796,&quot;y&quot;:1701,&quot;w&quot;:3,&quot;h&quot;:6,&quot;abs_x&quot;:796,&quot;abs_y&quot;:1744}"></path><path bis_size="{&quot;x&quot;:797,&quot;y&quot;:1697,&quot;w&quot;:2,&quot;h&quot;:4,&quot;abs_x&quot;:797,&quot;abs_y&quot;:1740}"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:782,&quot;y&quot;:1741,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:782,&quot;abs_y&quot;:1784}" className="text-lg font-semibold tracking-tight">DATA-AID</h3>
<p bis_size="{&quot;x&quot;:782,&quot;y&quot;:1773,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:782,&quot;abs_y&quot;:1816}" className="mt-1 text-xs text-[var(--text-dim)]">AI & Data Science</p>
<p bis_size="{&quot;x&quot;:782,&quot;y&quot;:1797,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:782,&quot;abs_y&quot;:1840}" className="mt-2 text-sm text-[var(--text-dim)]">Predictive modeling, MLOps, and decision intelligence to unlock actionable insights.</p>
<a bis_size="{&quot;x&quot;:782,&quot;y&quot;:1853,&quot;w&quot;:100,&quot;h&quot;:20,&quot;abs_x&quot;:782,&quot;abs_y&quot;:1896}" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size="{&quot;x&quot;:867,&quot;y&quot;:1855,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:867,&quot;abs_y&quot;:1898}" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:870,&quot;y&quot;:1863,&quot;w&quot;:9,&quot;h&quot;:0,&quot;abs_x&quot;:870,&quot;abs_y&quot;:1906}"></path><path bis_size="{&quot;x&quot;:875,&quot;y&quot;:1858,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:875,&quot;abs_y&quot;:1901}"></path></svg></a>
</div>
<div bis_size="{&quot;x&quot;:1171,&quot;y&quot;:1656,&quot;w&quot;:389,&quot;h&quot;:243,&quot;abs_x&quot;:1171,&quot;abs_y&quot;:1699}" className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size="{&quot;x&quot;:1196,&quot;y&quot;:1681,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:1724}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:1208,&quot;y&quot;:1693,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1208,&quot;abs_y&quot;:1736}" className="lucide lucide-bot h-5 w-5 text-[var(--accent)]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1214,&quot;y&quot;:1696,&quot;w&quot;:3,&quot;h&quot;:3,&quot;abs_x&quot;:1214,&quot;abs_y&quot;:1739}"></path><rect bis_size="{&quot;x&quot;:1211,&quot;y&quot;:1699,&quot;w&quot;:13,&quot;h&quot;:10,&quot;abs_x&quot;:1211,&quot;abs_y&quot;:1742}" height="12" rx="2" width="16"></rect><path bis_size="{&quot;x&quot;:1209,&quot;y&quot;:1704,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:1209,&quot;abs_y&quot;:1747}"></path><path bis_size="{&quot;x&quot;:1224,&quot;y&quot;:1704,&quot;w&quot;:1,&quot;h&quot;:0,&quot;abs_x&quot;:1224,&quot;abs_y&quot;:1747}"></path><path bis_size="{&quot;x&quot;:1220,&quot;y&quot;:1703,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:1220,&quot;abs_y&quot;:1746}"></path><path bis_size="{&quot;x&quot;:1215,&quot;y&quot;:1703,&quot;w&quot;:0,&quot;h&quot;:1,&quot;abs_x&quot;:1215,&quot;abs_y&quot;:1746}"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:1196,&quot;y&quot;:1741,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:1784}" className="text-lg font-semibold tracking-tight">DROID</h3>
<p bis_size="{&quot;x&quot;:1196,&quot;y&quot;:1773,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:1816}" className="mt-1 text-xs text-[var(--text-dim)]">Robotics & Embedded Systems</p>
<p bis_size="{&quot;x&quot;:1196,&quot;y&quot;:1797,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:1840}" className="mt-2 text-sm text-[var(--text-dim)]">Autonomous systems, edge compute, and IoT devices engineered for the field.</p>
<a bis_size="{&quot;x&quot;:1196,&quot;y&quot;:1853,&quot;w&quot;:100,&quot;h&quot;:20,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:1896}" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size="{&quot;x&quot;:1280,&quot;y&quot;:1855,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1280,&quot;abs_y&quot;:1898}" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1284,&quot;y&quot;:1863,&quot;w&quot;:9,&quot;h&quot;:0,&quot;abs_x&quot;:1284,&quot;abs_y&quot;:1906}"></path><path bis_size="{&quot;x&quot;:1288,&quot;y&quot;:1858,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:1288,&quot;abs_y&quot;:1901}"></path></svg></a>
</div>
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:1923,&quot;w&quot;:389,&quot;h&quot;:243,&quot;abs_x&quot;:344,&quot;abs_y&quot;:1966}" className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size="{&quot;x&quot;:369,&quot;y&quot;:1948,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:369,&quot;abs_y&quot;:1991}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:381,&quot;y&quot;:1960,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:381,&quot;abs_y&quot;:2003}" className="lucide lucide-radio h-5 w-5 text-[var(--violet)]" data-lucide="radio" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:395,&quot;y&quot;:1966,&quot;w&quot;:1,&quot;h&quot;:7,&quot;abs_x&quot;:395,&quot;abs_y&quot;:2009}"></path><path bis_size="{&quot;x&quot;:397,&quot;y&quot;:1964,&quot;w&quot;:2,&quot;h&quot;:11,&quot;abs_x&quot;:397,&quot;abs_y&quot;:2007}"></path><path bis_size="{&quot;x&quot;:383,&quot;y&quot;:1964,&quot;w&quot;:2,&quot;h&quot;:11,&quot;abs_x&quot;:383,&quot;abs_y&quot;:2007}"></path><path bis_size="{&quot;x&quot;:386,&quot;y&quot;:1966,&quot;w&quot;:1,&quot;h&quot;:7,&quot;abs_x&quot;:386,&quot;abs_y&quot;:2009}"></path><circle bis_size="{&quot;x&quot;:389,&quot;y&quot;:1968,&quot;w&quot;:3,&quot;h&quot;:3,&quot;abs_x&quot;:389,&quot;abs_y&quot;:2011}" cx="12" cy="12"></circle></svg>
</div>
<h3 bis_size="{&quot;x&quot;:369,&quot;y&quot;:2008,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:369,&quot;abs_y&quot;:2051}" className="text-lg font-semibold tracking-tight">NETCOM</h3>
<p bis_size="{&quot;x&quot;:369,&quot;y&quot;:2040,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:369,&quot;abs_y&quot;:2083}" className="mt-1 text-xs text-[var(--text-dim)]">Telecommunications Infrastructure</p>
<p bis_size="{&quot;x&quot;:369,&quot;y&quot;:2064,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:369,&quot;abs_y&quot;:2107}" className="mt-2 text-sm text-[var(--text-dim)]">Fiber, 5G, and satellite backbones for resilient connectivity across regions.</p>
<a bis_size="{&quot;x&quot;:369,&quot;y&quot;:2120,&quot;w&quot;:100,&quot;h&quot;:20,&quot;abs_x&quot;:369,&quot;abs_y&quot;:2163}" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size="{&quot;x&quot;:454,&quot;y&quot;:2122,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:454,&quot;abs_y&quot;:2165}" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:457,&quot;y&quot;:2130,&quot;w&quot;:9,&quot;h&quot;:0,&quot;abs_x&quot;:457,&quot;abs_y&quot;:2173}"></path><path bis_size="{&quot;x&quot;:462,&quot;y&quot;:2125,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:462,&quot;abs_y&quot;:2168}"></path></svg></a>
</div>
<div bis_size="{&quot;x&quot;:757,&quot;y&quot;:1923,&quot;w&quot;:389,&quot;h&quot;:243,&quot;abs_x&quot;:757,&quot;abs_y&quot;:1966}" className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size="{&quot;x&quot;:782,&quot;y&quot;:1948,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:782,&quot;abs_y&quot;:1991}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:794,&quot;y&quot;:1960,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:794,&quot;abs_y&quot;:2003}" className="lucide lucide-shield h-5 w-5 text-[var(--accent)]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:798,&quot;y&quot;:1961,&quot;w&quot;:13,&quot;h&quot;:16,&quot;abs_x&quot;:798,&quot;abs_y&quot;:2004}"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:782,&quot;y&quot;:2008,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:782,&quot;abs_y&quot;:2051}" className="text-lg font-semibold tracking-tight">CyberSentinel</h3>
<p bis_size="{&quot;x&quot;:782,&quot;y&quot;:2040,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:782,&quot;abs_y&quot;:2083}" className="mt-1 text-xs text-[var(--text-dim)]">Cybersecurity</p>
<p bis_size="{&quot;x&quot;:782,&quot;y&quot;:2064,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:782,&quot;abs_y&quot;:2107}" className="mt-2 text-sm text-[var(--text-dim)]">Threat detection, zero-trust architecture, and continuous red/blue teaming.</p>
<a bis_size="{&quot;x&quot;:782,&quot;y&quot;:2120,&quot;w&quot;:100,&quot;h&quot;:20,&quot;abs_x&quot;:782,&quot;abs_y&quot;:2163}" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size="{&quot;x&quot;:867,&quot;y&quot;:2122,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:867,&quot;abs_y&quot;:2165}" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:870,&quot;y&quot;:2130,&quot;w&quot;:9,&quot;h&quot;:0,&quot;abs_x&quot;:870,&quot;abs_y&quot;:2173}"></path><path bis_size="{&quot;x&quot;:875,&quot;y&quot;:2125,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:875,&quot;abs_y&quot;:2168}"></path></svg></a>
</div>
<div bis_size="{&quot;x&quot;:1171,&quot;y&quot;:1923,&quot;w&quot;:389,&quot;h&quot;:243,&quot;abs_x&quot;:1171,&quot;abs_y&quot;:1966}" className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.4),0_10px_30px_rgba(34,211,238,0.12)]">
<div bis_size="{&quot;x&quot;:1196,&quot;y&quot;:1948,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:1991}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:1208,&quot;y&quot;:1960,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1208,&quot;abs_y&quot;:2003}" className="lucide lucide-flask-conical h-5 w-5 text-[var(--violet)]" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1211,&quot;y&quot;:1961,&quot;w&quot;:13,&quot;h&quot;:16,&quot;abs_x&quot;:1211,&quot;abs_y&quot;:2004}"></path><path bis_size="{&quot;x&quot;:1213,&quot;y&quot;:1972,&quot;w&quot;:9,&quot;h&quot;:0,&quot;abs_x&quot;:1213,&quot;abs_y&quot;:2015}"></path><path bis_size="{&quot;x&quot;:1215,&quot;y&quot;:1961,&quot;w&quot;:5,&quot;h&quot;:0,&quot;abs_x&quot;:1215,&quot;abs_y&quot;:2004}"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:1196,&quot;y&quot;:2008,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:2051}" className="text-lg font-semibold tracking-tight">ISRC</h3>
<p bis_size="{&quot;x&quot;:1196,&quot;y&quot;:2040,&quot;w&quot;:339,&quot;h&quot;:16,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:2083}" className="mt-1 text-xs text-[var(--text-dim)]">Strategic Innovation & Research</p>
<p bis_size="{&quot;x&quot;:1196,&quot;y&quot;:2064,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:2107}" className="mt-2 text-sm text-[var(--text-dim)]">Foresight, prototyping, and tech transfer bridging labs to market.</p>
<a bis_size="{&quot;x&quot;:1196,&quot;y&quot;:2120,&quot;w&quot;:100,&quot;h&quot;:20,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:2163}" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">Learn More <svg bis_size="{&quot;x&quot;:1280,&quot;y&quot;:2122,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1280,&quot;abs_y&quot;:2165}" className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1284,&quot;y&quot;:2130,&quot;w&quot;:9,&quot;h&quot;:0,&quot;abs_x&quot;:1284,&quot;abs_y&quot;:2173}"></path><path bis_size="{&quot;x&quot;:1288,&quot;y&quot;:2125,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:1288,&quot;abs_y&quot;:2168}"></path></svg></a>
</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:2230,&quot;w&quot;:1905,&quot;h&quot;:1,&quot;abs_x&quot;:0,&quot;abs_y&quot;:2273}" className="mt-16 divider-glow"></div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:2311,&quot;w&quot;:1905,&quot;h&quot;:802,&quot;abs_x&quot;:0,&quot;abs_y&quot;:2354}" className="py-16 sm:py-20" id="droid">
<div bis_size="{&quot;x&quot;:312,&quot;y&quot;:2391,&quot;w&quot;:1280,&quot;h&quot;:577,&quot;abs_x&quot;:312,&quot;abs_y&quot;:2434}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:2391,&quot;w&quot;:1216,&quot;h&quot;:577,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2434}" className="grid gap-10 lg:grid-cols-2">

<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:2391,&quot;w&quot;:588,&quot;h&quot;:577,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2434}" className="">
<h2 bis_size="{&quot;x&quot;:344,&quot;y&quot;:2391,&quot;w&quot;:588,&quot;h&quot;:144,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2434}" className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">DROID Innovation Challenge</h2>
<p bis_size="{&quot;x&quot;:344,&quot;y&quot;:2547,&quot;w&quot;:588,&quot;h&quot;:60,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2590}" className="mt-3 text-sm text-[var(--text-dim)]">A continent-wide challenge empowering teams to build real-world robotics and embedded solutions. R350,000 prize pool and access to mentorship, labs, and deployment support.</p>
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:2631,&quot;w&quot;:588,&quot;h&quot;:46,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2674}" className="mt-6 flex flex-col gap-3 sm:flex-row">
<a bis_size="{&quot;x&quot;:344,&quot;y&quot;:2631,&quot;w&quot;:311,&quot;h&quot;:46,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2674}" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-black/90 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" href="#">
<svg bis_size="{&quot;x&quot;:368,&quot;y&quot;:2646,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:368,&quot;abs_y&quot;:2689}" className="lucide lucide-trophy h-4 w-4" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:373,&quot;y&quot;:2655,&quot;w&quot;:2,&quot;h&quot;:4,&quot;abs_x&quot;:373,&quot;abs_y&quot;:2698}"></path><path bis_size="{&quot;x&quot;:377,&quot;y&quot;:2655,&quot;w&quot;:2,&quot;h&quot;:4,&quot;abs_x&quot;:377,&quot;abs_y&quot;:2698}"></path><path bis_size="{&quot;x&quot;:380,&quot;y&quot;:2648,&quot;w&quot;:2,&quot;h&quot;:3,&quot;abs_x&quot;:380,&quot;abs_y&quot;:2691}"></path><path bis_size="{&quot;x&quot;:371,&quot;y&quot;:2660,&quot;w&quot;:10,&quot;h&quot;:0,&quot;abs_x&quot;:371,&quot;abs_y&quot;:2703}"></path><path bis_size="{&quot;x&quot;:372,&quot;y&quot;:2647,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:372,&quot;abs_y&quot;:2690}"></path><path bis_size="{&quot;x&quot;:369,&quot;y&quot;:2648,&quot;w&quot;:2,&quot;h&quot;:3,&quot;abs_x&quot;:369,&quot;abs_y&quot;:2691}"></path></svg>
              Learn More About DROID Challenge
            </a>
<a bis_size="{&quot;x&quot;:667,&quot;y&quot;:2631,&quot;w&quot;:220,&quot;h&quot;:46,&quot;abs_x&quot;:667,&quot;abs_y&quot;:2674}" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 text-sm font-medium text-[var(--text)] hover:border-[color:var(--accent)] hover:shadow-[0_0_24px_rgba(20,184,166,0.2)]" href="#">
<svg bis_size="{&quot;x&quot;:692,&quot;y&quot;:2646,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:692,&quot;abs_y&quot;:2689}" className="lucide lucide-download h-4 w-4 text-[var(--accent)]" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:700,&quot;y&quot;:2648,&quot;w&quot;:0,&quot;h&quot;:8,&quot;abs_x&quot;:700,&quot;abs_y&quot;:2691}"></path><path bis_size="{&quot;x&quot;:694,&quot;y&quot;:2656,&quot;w&quot;:12,&quot;h&quot;:4,&quot;abs_x&quot;:694,&quot;abs_y&quot;:2699}"></path><path bis_size="{&quot;x&quot;:697,&quot;y&quot;:2652,&quot;w&quot;:6,&quot;h&quot;:3,&quot;abs_x&quot;:697,&quot;abs_y&quot;:2695}"></path></svg>
              Download Prospectus
            </a>
</div>

<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:2701,&quot;w&quot;:588,&quot;h&quot;:34,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2744}" className="mt-6 flex flex-wrap gap-3">
<span bis_size="{&quot;x&quot;:344,&quot;y&quot;:2701,&quot;w&quot;:97,&quot;h&quot;:34,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2744}" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--text-dim)]">
<svg bis_size="{&quot;x&quot;:361,&quot;y&quot;:2710,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:361,&quot;abs_y&quot;:2753}" className="lucide lucide-megaphone h-4 w-4 text-[var(--accent2)]" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:363,&quot;y&quot;:2712,&quot;w&quot;:12,&quot;h&quot;:9,&quot;abs_x&quot;:363,&quot;abs_y&quot;:2755}"></path><path bis_size="{&quot;x&quot;:365,&quot;y&quot;:2719,&quot;w&quot;:3,&quot;h&quot;:5,&quot;abs_x&quot;:365,&quot;abs_y&quot;:2762}"></path><path bis_size="{&quot;x&quot;:366,&quot;y&quot;:2714,&quot;w&quot;:0,&quot;h&quot;:5,&quot;abs_x&quot;:366,&quot;abs_y&quot;:2757}"></path></svg> Teaser
            </span>
<span bis_size="{&quot;x&quot;:453,&quot;y&quot;:2701,&quot;w&quot;:129,&quot;h&quot;:34,&quot;abs_x&quot;:453,&quot;abs_y&quot;:2744}" className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/40 bg-[color:var(--accent)/0.08] px-4 py-2 text-xs font-medium text-[var(--accent)]">
<svg bis_size="{&quot;x&quot;:470,&quot;y&quot;:2710,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:470,&quot;abs_y&quot;:2753}" className="lucide lucide-mail-plus h-4 w-4" data-lucide="mail-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:471,&quot;y&quot;:2712,&quot;w&quot;:13,&quot;h&quot;:10,&quot;abs_x&quot;:471,&quot;abs_y&quot;:2755}"></path><path bis_size="{&quot;x&quot;:471,&quot;y&quot;:2714,&quot;w&quot;:13,&quot;h&quot;:3,&quot;abs_x&quot;:471,&quot;abs_y&quot;:2757}"></path><path bis_size="{&quot;x&quot;:483,&quot;y&quot;:2720,&quot;w&quot;:0,&quot;h&quot;:4,&quot;abs_x&quot;:483,&quot;abs_y&quot;:2763}"></path><path bis_size="{&quot;x&quot;:481,&quot;y&quot;:2722,&quot;w&quot;:4,&quot;h&quot;:0,&quot;abs_x&quot;:481,&quot;abs_y&quot;:2765}"></path></svg> Applications
            </span>
<span bis_size="{&quot;x&quot;:594,&quot;y&quot;:2701,&quot;w&quot;:91,&quot;h&quot;:34,&quot;abs_x&quot;:594,&quot;abs_y&quot;:2744}" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-medium text-[var(--text-dim)]">
<svg bis_size="{&quot;x&quot;:611,&quot;y&quot;:2710,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:611,&quot;abs_y&quot;:2753}" className="lucide lucide-flag h-4 w-4 text-[var(--violet)]" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:614,&quot;y&quot;:2711,&quot;w&quot;:10,&quot;h&quot;:13,&quot;abs_x&quot;:614,&quot;abs_y&quot;:2754}"></path></svg> Finals
            </span>
</div>

<form bis_size="{&quot;x&quot;:344,&quot;y&quot;:2759,&quot;w&quot;:588,&quot;h&quot;:70,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2802}" className="mt-6">
<label bis_size="{&quot;x&quot;:343,&quot;y&quot;:2758,&quot;w&quot;:1,&quot;h&quot;:1,&quot;abs_x&quot;:343,&quot;abs_y&quot;:2801}" className="sr-only" htmlFor="notify-email">Notify Me</label>
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:2759,&quot;w&quot;:588,&quot;h&quot;:46,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2802}" className="flex flex-col gap-3 sm:flex-row">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:2759,&quot;w&quot;:446,&quot;h&quot;:46,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2802}" className="relative flex-1">
<svg bis_size="{&quot;x&quot;:356,&quot;y&quot;:2774,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:356,&quot;abs_y&quot;:2817}" className="lucide lucide-mail pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-dim)]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:357,&quot;y&quot;:2778,&quot;w&quot;:13,&quot;h&quot;:3,&quot;abs_x&quot;:357,&quot;abs_y&quot;:2821}"></path><rect bis_size="{&quot;x&quot;:357,&quot;y&quot;:2776,&quot;w&quot;:13,&quot;h&quot;:10,&quot;abs_x&quot;:357,&quot;abs_y&quot;:2819}" height="16" rx="2" width="20"></rect></svg>
<input bis_size="{&quot;x&quot;:344,&quot;y&quot;:2759,&quot;w&quot;:446,&quot;h&quot;:46,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2802}" className="w-full rounded-full border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-4 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)] outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="notify-email" placeholder="Email address" type="email" />
</div>
<button bis_size="{&quot;x&quot;:803,&quot;y&quot;:2759,&quot;w&quot;:129,&quot;h&quot;:46,&quot;abs_x&quot;:803,&quot;abs_y&quot;:2802}" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-medium text-black/90 hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" type="submit">
<svg bis_size="{&quot;x&quot;:823,&quot;y&quot;:2774,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:823,&quot;abs_y&quot;:2817}" className="lucide lucide-bell-ring h-4 w-4" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:829,&quot;y&quot;:2788,&quot;w&quot;:2,&quot;h&quot;:0,&quot;abs_x&quot;:829,&quot;abs_y&quot;:2831}"></path><path bis_size="{&quot;x&quot;:836,&quot;y&quot;:2775,&quot;w&quot;:1,&quot;h&quot;:4,&quot;abs_x&quot;:836,&quot;abs_y&quot;:2818}"></path><path bis_size="{&quot;x&quot;:825,&quot;y&quot;:2775,&quot;w&quot;:11,&quot;h&quot;:10,&quot;abs_x&quot;:825,&quot;abs_y&quot;:2818}"></path><path bis_size="{&quot;x&quot;:824,&quot;y&quot;:2775,&quot;w&quot;:1,&quot;h&quot;:4,&quot;abs_x&quot;:824,&quot;abs_y&quot;:2818}"></path></svg>
                Notify Me
              </button>
</div>
<p bis_size="{&quot;x&quot;:344,&quot;y&quot;:2813,&quot;w&quot;:588,&quot;h&quot;:16,&quot;abs_x&quot;:344,&quot;abs_y&quot;:2856}" className="mt-2 text-xs text-[var(--text-dim)]">Coming 2026 — Innovation awaits.</p>
</form>
</div>

<div bis_size="{&quot;x&quot;:972,&quot;y&quot;:2391,&quot;w&quot;:588,&quot;h&quot;:577,&quot;abs_x&quot;:972,&quot;abs_y&quot;:2434}" className="relative">
<div bis_size="{&quot;x&quot;:972,&quot;y&quot;:2391,&quot;w&quot;:588,&quot;h&quot;:577,&quot;abs_x&quot;:972,&quot;abs_y&quot;:2434}" className="glass rounded-2xl p-5 ring-1 ring-[var(--border)]">

<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:2412,&quot;w&quot;:546,&quot;h&quot;:307,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2455}" className="relative overflow-hidden rounded-xl ring-1 ring-[var(--border)] bg-[var(--bg-muted)]">
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:2412,&quot;w&quot;:546,&quot;h&quot;:307,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2455}" className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]"></div>
<video autoPlay bis_size="{&quot;x&quot;:993,&quot;y&quot;:2412,&quot;w&quot;:546,&quot;h&quot;:307,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2455}" className="aspect-video w-full object-cover opacity-90" loop muted playsInline poster="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop">
<source bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" src="https://videos.pexels.com/video-files/8364699/8364699-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:2412,&quot;w&quot;:546,&quot;h&quot;:307,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2455}" className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.5))]"></div>
<div bis_size="{&quot;x&quot;:1005,&quot;y&quot;:2683,&quot;w&quot;:191,&quot;h&quot;:24,&quot;abs_x&quot;:1005,&quot;abs_y&quot;:2726}" className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs text-white ring-1 ring-white/10 backdrop-blur">
<svg bis_size="{&quot;x&quot;:1017,&quot;y&quot;:2688,&quot;w&quot;:14,&quot;h&quot;:14,&quot;abs_x&quot;:1017,&quot;abs_y&quot;:2731}" className="h-3.5 w-3.5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polygon bis_size="{&quot;x&quot;:1020,&quot;y&quot;:2689,&quot;w&quot;:8,&quot;h&quot;:10,&quot;abs_x&quot;:1020,&quot;abs_y&quot;:2732}" points="5 3 19 12 5 21 5 3"></polygon></svg>
                Previous Finals Highlights
              </div>
</div>

<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:2739,&quot;w&quot;:546,&quot;h&quot;:58,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2782}" className="mt-5">
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:2739,&quot;w&quot;:546,&quot;h&quot;:20,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2782}" className="flex items-center gap-2">
<span bis_size="{&quot;x&quot;:993,&quot;y&quot;:2739,&quot;w&quot;:43,&quot;h&quot;:20,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2782}" className="text-sm font-semibold tracking-tight">Tracks</span>
<span bis_size="{&quot;x&quot;:1045,&quot;y&quot;:2748,&quot;w&quot;:494,&quot;h&quot;:1,&quot;abs_x&quot;:1045,&quot;abs_y&quot;:2791}" className="h-px flex-1 bg-[var(--border)]"></span>
</div>
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:2771,&quot;w&quot;:546,&quot;h&quot;:26,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2814}" className="mt-3 flex flex-wrap gap-2">
<span bis_size="{&quot;x&quot;:993,&quot;y&quot;:2771,&quot;w&quot;:77,&quot;h&quot;:26,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2814}" className="rounded-full border border-[var(--accent)]/40 bg-[color:var(--accent)/0.08] px-3 py-1 text-xs font-medium text-[var(--accent)]">AgriTech</span>
<span bis_size="{&quot;x&quot;:1079,&quot;y&quot;:2771,&quot;w&quot;:90,&quot;h&quot;:26,&quot;abs_x&quot;:1079,&quot;abs_y&quot;:2814}" className="rounded-full border border-[var(--violet)]/40 bg-[color:var(--violet)/0.08] px-3 py-1 text-xs font-medium text-[var(--violet)]">HealthTech</span>
<span bis_size="{&quot;x&quot;:1177,&quot;y&quot;:2771,&quot;w&quot;:81,&quot;h&quot;:26,&quot;abs_x&quot;:1177,&quot;abs_y&quot;:2814}" className="rounded-full border border-[var(--accent2)]/40 bg-[color:var(--accent2)/0.08] px-3 py-1 text-xs font-medium text-[var(--accent2)]">CivicTech</span>
<span bis_size="{&quot;x&quot;:1267,&quot;y&quot;:2771,&quot;w&quot;:87,&quot;h&quot;:26,&quot;abs_x&quot;:1267,&quot;abs_y&quot;:2814}" className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--text-dim)]">GreenTech</span>
</div>
</div>

<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:2817,&quot;w&quot;:546,&quot;h&quot;:90,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2860}" className="mt-5 grid gap-3 sm:grid-cols-2">
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:2817,&quot;w&quot;:267,&quot;h&quot;:90,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2860}" className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
<div bis_size="{&quot;x&quot;:1010,&quot;y&quot;:2834,&quot;w&quot;:233,&quot;h&quot;:56,&quot;abs_x&quot;:1010,&quot;abs_y&quot;:2877}" className="flex items-start gap-3">
<div bis_size="{&quot;x&quot;:1010,&quot;y&quot;:2834,&quot;w&quot;:24,&quot;h&quot;:36,&quot;abs_x&quot;:1010,&quot;abs_y&quot;:2877}" className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:1014,&quot;y&quot;:2844,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1014,&quot;abs_y&quot;:2887}" className="h-4 w-4 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1022,&quot;y&quot;:2845,&quot;w&quot;:0,&quot;h&quot;:13,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:2888}"></path><path bis_size="{&quot;x&quot;:1019,&quot;y&quot;:2852,&quot;w&quot;:6,&quot;h&quot;:3,&quot;abs_x&quot;:1019,&quot;abs_y&quot;:2895}"></path></svg>
</div>
<div bis_size="{&quot;x&quot;:1047,&quot;y&quot;:2834,&quot;w&quot;:196,&quot;h&quot;:56,&quot;abs_x&quot;:1047,&quot;abs_y&quot;:2877}">
<div bis_size="{&quot;x&quot;:1047,&quot;y&quot;:2834,&quot;w&quot;:196,&quot;h&quot;:20,&quot;abs_x&quot;:1047,&quot;abs_y&quot;:2877}" className="text-sm font-medium">Hardware Stipends</div>
<p bis_size="{&quot;x&quot;:1047,&quot;y&quot;:2858,&quot;w&quot;:196,&quot;h&quot;:32,&quot;abs_x&quot;:1047,&quot;abs_y&quot;:2901}" className="mt-1 text-xs text-[var(--text-dim)]">Components, dev kits, and fab time for prototypes.</p>
</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:1272,&quot;y&quot;:2817,&quot;w&quot;:267,&quot;h&quot;:90,&quot;abs_x&quot;:1272,&quot;abs_y&quot;:2860}" className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
<div bis_size="{&quot;x&quot;:1289,&quot;y&quot;:2834,&quot;w&quot;:233,&quot;h&quot;:56,&quot;abs_x&quot;:1289,&quot;abs_y&quot;:2877}" className="flex items-start gap-3">
<div bis_size="{&quot;x&quot;:1289,&quot;y&quot;:2834,&quot;w&quot;:23,&quot;h&quot;:36,&quot;abs_x&quot;:1289,&quot;abs_y&quot;:2877}" className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:1293,&quot;y&quot;:2844,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1293,&quot;abs_y&quot;:2887}" className="h-4 w-4 text-[var(--accent2)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect bis_size="{&quot;x&quot;:1295,&quot;y&quot;:2846,&quot;w&quot;:4,&quot;h&quot;:4,&quot;abs_x&quot;:1295,&quot;abs_y&quot;:2889}" height="7" rx="1" width="7"></rect><rect bis_size="{&quot;x&quot;:1302,&quot;y&quot;:2846,&quot;w&quot;:4,&quot;h&quot;:4,&quot;abs_x&quot;:1302,&quot;abs_y&quot;:2889}" height="7" rx="1" width="7"></rect><rect bis_size="{&quot;x&quot;:1302,&quot;y&quot;:2853,&quot;w&quot;:4,&quot;h&quot;:4,&quot;abs_x&quot;:1302,&quot;abs_y&quot;:2896}" height="7" rx="1" width="7"></rect><rect bis_size="{&quot;x&quot;:1295,&quot;y&quot;:2853,&quot;w&quot;:4,&quot;h&quot;:4,&quot;abs_x&quot;:1295,&quot;abs_y&quot;:2896}" height="7" rx="1" width="7"></rect></svg>
</div>
<div bis_size="{&quot;x&quot;:1325,&quot;y&quot;:2834,&quot;w&quot;:197,&quot;h&quot;:56,&quot;abs_x&quot;:1325,&quot;abs_y&quot;:2877}">
<div bis_size="{&quot;x&quot;:1325,&quot;y&quot;:2834,&quot;w&quot;:197,&quot;h&quot;:20,&quot;abs_x&quot;:1325,&quot;abs_y&quot;:2877}" className="text-sm font-medium">Mentorship & Labs</div>
<p bis_size="{&quot;x&quot;:1325,&quot;y&quot;:2858,&quot;w&quot;:197,&quot;h&quot;:32,&quot;abs_x&quot;:1325,&quot;abs_y&quot;:2901}" className="mt-1 text-xs text-[var(--text-dim)]">Guidance from engineers plus access to testing labs.</p>
</div>
</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:2927,&quot;w&quot;:546,&quot;h&quot;:20,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2970}" className="mt-5 flex items-center justify-between gap-3">
<a bis_size="{&quot;x&quot;:993,&quot;y&quot;:2927,&quot;w&quot;:97,&quot;h&quot;:20,&quot;abs_x&quot;:993,&quot;abs_y&quot;:2970}" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent2)] hover:underline" href="#">
                View Rules
                <svg bis_size="{&quot;x&quot;:1075,&quot;y&quot;:2929,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1075,&quot;abs_y&quot;:2972}" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1078,&quot;y&quot;:2937,&quot;w&quot;:9,&quot;h&quot;:0,&quot;abs_x&quot;:1078,&quot;abs_y&quot;:2980}"></path><path bis_size="{&quot;x&quot;:1083,&quot;y&quot;:2932,&quot;w&quot;:4,&quot;h&quot;:9,&quot;abs_x&quot;:1083,&quot;abs_y&quot;:2975}"></path></svg>
</a>
<span bis_size="{&quot;x&quot;:1241,&quot;y&quot;:2929,&quot;w&quot;:297,&quot;h&quot;:16,&quot;abs_x&quot;:1241,&quot;abs_y&quot;:2972}" className="text-xs text-[var(--text-dim)]">Open to students, startups, and independent makers</span>
</div>
</div>
</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:3032,&quot;w&quot;:1905,&quot;h&quot;:1,&quot;abs_x&quot;:0,&quot;abs_y&quot;:3075}" className="mt-16 divider-glow"></div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:3113,&quot;w&quot;:1905,&quot;h&quot;:665,&quot;abs_x&quot;:0,&quot;abs_y&quot;:3156}" className="py-16 sm:py-20" id="innovation">
<div bis_size="{&quot;x&quot;:312,&quot;y&quot;:3193,&quot;w&quot;:1280,&quot;h&quot;:440,&quot;abs_x&quot;:312,&quot;abs_y&quot;:3236}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:3193,&quot;w&quot;:672,&quot;h&quot;:104,&quot;abs_x&quot;:344,&quot;abs_y&quot;:3236}" className="max-w-2xl">
<h2 bis_size="{&quot;x&quot;:344,&quot;y&quot;:3193,&quot;w&quot;:672,&quot;h&quot;:72,&quot;abs_x&quot;:344,&quot;abs_y&quot;:3236}" className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">Innovation In Motion</h2>
<p bis_size="{&quot;x&quot;:344,&quot;y&quot;:3277,&quot;w&quot;:672,&quot;h&quot;:20,&quot;abs_x&quot;:344,&quot;abs_y&quot;:3320}" className="mt-3 text-sm text-[var(--text-dim)]">We blend research-grade rigor with product pragmatism to move fast—safely.</p>
</div>
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:3337,&quot;w&quot;:1216,&quot;h&quot;:206,&quot;abs_x&quot;:344,&quot;abs_y&quot;:3380}" className="mt-10 grid gap-6 md:grid-cols-3">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:3337,&quot;w&quot;:389,&quot;h&quot;:206,&quot;abs_x&quot;:344,&quot;abs_y&quot;:3380}" className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-neon)]">
<div bis_size="{&quot;x&quot;:369,&quot;y&quot;:3362,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:369,&quot;abs_y&quot;:3405}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:381,&quot;y&quot;:3374,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:381,&quot;abs_y&quot;:3417}" className="h-5 w-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:384,&quot;y&quot;:3376,&quot;w&quot;:5,&quot;h&quot;:5,&quot;abs_x&quot;:384,&quot;abs_y&quot;:3419}"></path><path bis_size="{&quot;x&quot;:393,&quot;y&quot;:3376,&quot;w&quot;:5,&quot;h&quot;:5,&quot;abs_x&quot;:393,&quot;abs_y&quot;:3419}"></path><path bis_size="{&quot;x&quot;:393,&quot;y&quot;:3385,&quot;w&quot;:5,&quot;h&quot;:5,&quot;abs_x&quot;:393,&quot;abs_y&quot;:3428}"></path><path bis_size="{&quot;x&quot;:384,&quot;y&quot;:3385,&quot;w&quot;:5,&quot;h&quot;:5,&quot;abs_x&quot;:384,&quot;abs_y&quot;:3428}"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:369,&quot;y&quot;:3422,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:369,&quot;abs_y&quot;:3465}" className="text-lg font-semibold tracking-tight">AI Pipelines</h3>
<p bis_size="{&quot;x&quot;:369,&quot;y&quot;:3458,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:369,&quot;abs_y&quot;:3501}" className="mt-2 text-sm text-[var(--text-dim)]">From data ingestion to model serving with observability, drift detection, and human-in-the-loop feedback.</p>
</div>
<div bis_size="{&quot;x&quot;:757,&quot;y&quot;:3337,&quot;w&quot;:389,&quot;h&quot;:206,&quot;abs_x&quot;:757,&quot;abs_y&quot;:3380}" className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-neon)]">
<div bis_size="{&quot;x&quot;:782,&quot;y&quot;:3362,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:782,&quot;abs_y&quot;:3405}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:794,&quot;y&quot;:3374,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:794,&quot;abs_y&quot;:3417}" className="h-5 w-5 text-[var(--violet)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle bis_size="{&quot;x&quot;:796,&quot;y&quot;:3375,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:796,&quot;abs_y&quot;:3418}" cx="12" cy="12"></circle><path bis_size="{&quot;x&quot;:796,&quot;y&quot;:3384,&quot;w&quot;:16,&quot;h&quot;:0,&quot;abs_x&quot;:796,&quot;abs_y&quot;:3427}"></path><path bis_size="{&quot;x&quot;:804,&quot;y&quot;:3375,&quot;w&quot;:3,&quot;h&quot;:16,&quot;abs_x&quot;:804,&quot;abs_y&quot;:3418}"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:782,&quot;y&quot;:3422,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:782,&quot;abs_y&quot;:3465}" className="text-lg font-semibold tracking-tight">Digital Twins</h3>
<p bis_size="{&quot;x&quot;:782,&quot;y&quot;:3458,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:782,&quot;abs_y&quot;:3501}" className="mt-2 text-sm text-[var(--text-dim)]">High-fidelity simulation to validate robotics and network deployments before they touch the real world.</p>
</div>
<div bis_size="{&quot;x&quot;:1171,&quot;y&quot;:3337,&quot;w&quot;:389,&quot;h&quot;:206,&quot;abs_x&quot;:1171,&quot;abs_y&quot;:3380}" className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-neon)]">
<div bis_size="{&quot;x&quot;:1196,&quot;y&quot;:3362,&quot;w&quot;:44,&quot;h&quot;:44,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:3405}" className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:1208,&quot;y&quot;:3374,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:1208,&quot;abs_y&quot;:3417}" className="h-5 w-5 text-[var(--accent2)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1211,&quot;y&quot;:3375,&quot;w&quot;:13,&quot;h&quot;:16,&quot;abs_x&quot;:1211,&quot;abs_y&quot;:3418}"></path><path bis_size="{&quot;x&quot;:1215,&quot;y&quot;:3382,&quot;w&quot;:5,&quot;h&quot;:3,&quot;abs_x&quot;:1215,&quot;abs_y&quot;:3425}"></path></svg>
</div>
<h3 bis_size="{&quot;x&quot;:1196,&quot;y&quot;:3422,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:3465}" className="text-lg font-semibold tracking-tight">Secure by Design</h3>
<p bis_size="{&quot;x&quot;:1196,&quot;y&quot;:3458,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:1196,&quot;abs_y&quot;:3501}" className="mt-2 text-sm text-[var(--text-dim)]">Zero-trust defaults, SBOM tracking, and continuous assurance baked into every layer of delivery.</p>
</div>
</div>

<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:3583,&quot;w&quot;:1216,&quot;h&quot;:50,&quot;abs_x&quot;:344,&quot;abs_y&quot;:3626}" className="mt-10 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]">
<div bis_size="{&quot;x&quot;:345,&quot;y&quot;:3584,&quot;w&quot;:2428,&quot;h&quot;:48,&quot;abs_x&quot;:345,&quot;abs_y&quot;:3627}" className="flex w-[200%] animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
<div bis_size="{&quot;x&quot;:345,&quot;y&quot;:3584,&quot;w&quot;:1214,&quot;h&quot;:48,&quot;abs_x&quot;:345,&quot;abs_y&quot;:3627}" className="flex w-1/2 items-center justify-around gap-10 px-6 py-4 text-xs text-[var(--text-dim)]">
<span bis_size="{&quot;x&quot;:419,&quot;y&quot;:3600,&quot;w&quot;:81,&quot;h&quot;:16,&quot;abs_x&quot;:419,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:419,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:419,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-[var(--accent)]"></span> Kubernetes</span>
<span bis_size="{&quot;x&quot;:641,&quot;y&quot;:3600,&quot;w&quot;:47,&quot;h&quot;:16,&quot;abs_x&quot;:641,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:641,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:641,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-[var(--violet)]"></span> ROS2</span>
<span bis_size="{&quot;x&quot;:830,&quot;y&quot;:3600,&quot;w&quot;:62,&quot;h&quot;:16,&quot;abs_x&quot;:830,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:830,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:830,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-[var(--accent2)]"></span> PyTorch</span>
<span bis_size="{&quot;x&quot;:1033,&quot;y&quot;:3600,&quot;w&quot;:41,&quot;h&quot;:16,&quot;abs_x&quot;:1033,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:1033,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:1033,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-emerald-400"></span> Rust</span>
<span bis_size="{&quot;x&quot;:1215,&quot;y&quot;:3600,&quot;w&quot;:32,&quot;h&quot;:16,&quot;abs_x&quot;:1215,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:1215,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:1215,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-sky-400"></span> Go</span>
<span bis_size="{&quot;x&quot;:1388,&quot;y&quot;:3600,&quot;w&quot;:96,&quot;h&quot;:16,&quot;abs_x&quot;:1388,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:1388,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:1388,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-fuchsia-400"></span> WebAssembly</span>
</div>
<div bis_size="{&quot;x&quot;:1559,&quot;y&quot;:3584,&quot;w&quot;:1214,&quot;h&quot;:48,&quot;abs_x&quot;:1559,&quot;abs_y&quot;:3627}" className="flex w-1/2 items-center justify-around gap-10 px-6 py-4 text-xs text-[var(--text-dim)]">
<span bis_size="{&quot;x&quot;:1633,&quot;y&quot;:3600,&quot;w&quot;:81,&quot;h&quot;:16,&quot;abs_x&quot;:1633,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:1633,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:1633,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-[var(--accent)]"></span> Kubernetes</span>
<span bis_size="{&quot;x&quot;:1855,&quot;y&quot;:3600,&quot;w&quot;:47,&quot;h&quot;:16,&quot;abs_x&quot;:1855,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:1855,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:1855,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-[var(--violet)]"></span> ROS2</span>
<span bis_size="{&quot;x&quot;:2044,&quot;y&quot;:3600,&quot;w&quot;:62,&quot;h&quot;:16,&quot;abs_x&quot;:2044,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:2044,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:2044,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-[var(--accent2)]"></span> PyTorch</span>
<span bis_size="{&quot;x&quot;:2247,&quot;y&quot;:3600,&quot;w&quot;:41,&quot;h&quot;:16,&quot;abs_x&quot;:2247,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:2247,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:2247,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-emerald-400"></span> Rust</span>
<span bis_size="{&quot;x&quot;:2429,&quot;y&quot;:3600,&quot;w&quot;:32,&quot;h&quot;:16,&quot;abs_x&quot;:2429,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:2429,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:2429,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-sky-400"></span> Go</span>
<span bis_size="{&quot;x&quot;:2602,&quot;y&quot;:3600,&quot;w&quot;:96,&quot;h&quot;:16,&quot;abs_x&quot;:2602,&quot;abs_y&quot;:3643}" className="inline-flex items-center gap-2"><span bis_size="{&quot;x&quot;:2602,&quot;y&quot;:3604,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:2602,&quot;abs_y&quot;:3647}" className="h-2 w-2 rounded-full bg-fuchsia-400"></span> WebAssembly</span>
</div>
</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:3697,&quot;w&quot;:1905,&quot;h&quot;:1,&quot;abs_x&quot;:0,&quot;abs_y&quot;:3740}" className="mt-16 divider-glow"></div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:3778,&quot;w&quot;:1905,&quot;h&quot;:643,&quot;abs_x&quot;:0,&quot;abs_y&quot;:3821}" className="py-16 sm:py-20" id="contact">
<div bis_size="{&quot;x&quot;:312,&quot;y&quot;:3858,&quot;w&quot;:1280,&quot;h&quot;:418,&quot;abs_x&quot;:312,&quot;abs_y&quot;:3901}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:3858,&quot;w&quot;:1216,&quot;h&quot;:418,&quot;abs_x&quot;:344,&quot;abs_y&quot;:3901}" className="grid gap-8 lg:grid-cols-2">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:3858,&quot;w&quot;:592,&quot;h&quot;:418,&quot;abs_x&quot;:344,&quot;abs_y&quot;:3901}" className="">
<h2 bis_size="{&quot;x&quot;:344,&quot;y&quot;:3858,&quot;w&quot;:592,&quot;h&quot;:72,&quot;abs_x&quot;:344,&quot;abs_y&quot;:3901}" className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-tight">Let’s Build What’s Next</h2>
<p bis_size="{&quot;x&quot;:344,&quot;y&quot;:3942,&quot;w&quot;:592,&quot;h&quot;:20,&quot;abs_x&quot;:344,&quot;abs_y&quot;:3985}" className="mt-3 text-sm text-[var(--text-dim)]">Tell us about your challenge. Our team will get back within 2 business days.</p>
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:3986,&quot;w&quot;:592,&quot;h&quot;:70,&quot;abs_x&quot;:344,&quot;abs_y&quot;:4029}" className="mt-6 grid gap-3 sm:grid-cols-2">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:3986,&quot;w&quot;:290,&quot;h&quot;:70,&quot;abs_x&quot;:344,&quot;abs_y&quot;:4029}" className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
<div bis_size="{&quot;x&quot;:361,&quot;y&quot;:4003,&quot;w&quot;:36,&quot;h&quot;:36,&quot;abs_x&quot;:361,&quot;abs_y&quot;:4046}" className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:371,&quot;y&quot;:4013,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:371,&quot;abs_y&quot;:4056}" className="h-4 w-4 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:372,&quot;y&quot;:4017,&quot;w&quot;:13,&quot;h&quot;:4,&quot;abs_x&quot;:372,&quot;abs_y&quot;:4060}"></path><rect bis_size="{&quot;x&quot;:372,&quot;y&quot;:4016,&quot;w&quot;:13,&quot;h&quot;:9,&quot;abs_x&quot;:372,&quot;abs_y&quot;:4059}" height="14" rx="2" width="20"></rect></svg>
</div>
<div bis_size="{&quot;x&quot;:409,&quot;y&quot;:4005,&quot;w&quot;:128,&quot;h&quot;:32,&quot;abs_x&quot;:409,&quot;abs_y&quot;:4048}" className="text-xs">
<div bis_size="{&quot;x&quot;:409,&quot;y&quot;:4005,&quot;w&quot;:128,&quot;h&quot;:16,&quot;abs_x&quot;:409,&quot;abs_y&quot;:4048}" className="font-medium">hello@dataenvy.africa</div>
<div bis_size="{&quot;x&quot;:409,&quot;y&quot;:4021,&quot;w&quot;:128,&quot;h&quot;:16,&quot;abs_x&quot;:409,&quot;abs_y&quot;:4064}" className="text-[var(--text-dim)]">Drop us a line</div>
</div>
</div>
<div bis_size="{&quot;x&quot;:646,&quot;y&quot;:3986,&quot;w&quot;:290,&quot;h&quot;:70,&quot;abs_x&quot;:646,&quot;abs_y&quot;:4029}" className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
<div bis_size="{&quot;x&quot;:663,&quot;y&quot;:4003,&quot;w&quot;:36,&quot;h&quot;:36,&quot;abs_x&quot;:663,&quot;abs_y&quot;:4046}" className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--bg)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:673,&quot;y&quot;:4013,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:673,&quot;abs_y&quot;:4056}" className="h-4 w-4 text-[var(--accent2)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:674,&quot;y&quot;:4015,&quot;w&quot;:13,&quot;h&quot;:12,&quot;abs_x&quot;:674,&quot;abs_y&quot;:4058}"></path></svg>
</div>
<div bis_size="{&quot;x&quot;:711,&quot;y&quot;:4005,&quot;w&quot;:148,&quot;h&quot;:32,&quot;abs_x&quot;:711,&quot;abs_y&quot;:4048}" className="text-xs">
<div bis_size="{&quot;x&quot;:711,&quot;y&quot;:4005,&quot;w&quot;:148,&quot;h&quot;:16,&quot;abs_x&quot;:711,&quot;abs_y&quot;:4048}" className="font-medium">+27 (0) 21 555 0101</div>
<div bis_size="{&quot;x&quot;:711,&quot;y&quot;:4021,&quot;w&quot;:148,&quot;h&quot;:16,&quot;abs_x&quot;:711,&quot;abs_y&quot;:4064}" className="text-[var(--text-dim)]">Mon–Fri, 9:00–17:00 SAST</div>
</div>
</div>
</div>
</div>

<form bis_size="{&quot;x&quot;:968,&quot;y&quot;:3858,&quot;w&quot;:592,&quot;h&quot;:418,&quot;abs_x&quot;:968,&quot;abs_y&quot;:3901}" className="glass rounded-2xl p-6 ring-1 ring-[var(--border)]" id="contactForm">
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:3883,&quot;w&quot;:542,&quot;h&quot;:368,&quot;abs_x&quot;:993,&quot;abs_y&quot;:3926}" className="grid gap-4 sm:grid-cols-2">
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:3883,&quot;w&quot;:263,&quot;h&quot;:58,&quot;abs_x&quot;:993,&quot;abs_y&quot;:3926}" className="sm:col-span-1">
<label bis_size="{&quot;x&quot;:993,&quot;y&quot;:3883,&quot;w&quot;:263,&quot;h&quot;:16,&quot;abs_x&quot;:993,&quot;abs_y&quot;:3926}" className="mb-1 block text-xs text-[var(--text-dim)]" htmlFor="name">Full Name</label>
<input bis_size="{&quot;x&quot;:993,&quot;y&quot;:3903,&quot;w&quot;:263,&quot;h&quot;:38,&quot;abs_x&quot;:993,&quot;abs_y&quot;:3946}" className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="name" name="name" placeholder="Lesedi M." required type="text" />
</div>
<div bis_size="{&quot;x&quot;:1272,&quot;y&quot;:3883,&quot;w&quot;:263,&quot;h&quot;:58,&quot;abs_x&quot;:1272,&quot;abs_y&quot;:3926}" className="sm:col-span-1">
<label bis_size="{&quot;x&quot;:1272,&quot;y&quot;:3883,&quot;w&quot;:263,&quot;h&quot;:16,&quot;abs_x&quot;:1272,&quot;abs_y&quot;:3926}" className="mb-1 block text-xs text-[var(--text-dim)]" htmlFor="email">Email</label>
<input bis_size="{&quot;x&quot;:1272,&quot;y&quot;:3903,&quot;w&quot;:263,&quot;h&quot;:38,&quot;abs_x&quot;:1272,&quot;abs_y&quot;:3946}" className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="email" name="email" placeholder="you@company.com" required type="email" />
</div>
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:3957,&quot;w&quot;:263,&quot;h&quot;:58,&quot;abs_x&quot;:993,&quot;abs_y&quot;:4000}" className="sm:col-span-1">
<label bis_size="{&quot;x&quot;:993,&quot;y&quot;:3957,&quot;w&quot;:263,&quot;h&quot;:16,&quot;abs_x&quot;:993,&quot;abs_y&quot;:4000}" className="mb-1 block text-xs text-[var(--text-dim)]" htmlFor="company">Company</label>
<input bis_size="{&quot;x&quot;:993,&quot;y&quot;:3977,&quot;w&quot;:263,&quot;h&quot;:38,&quot;abs_x&quot;:993,&quot;abs_y&quot;:4020}" className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="company" name="company" placeholder="Acme Ltd." type="text" />
</div>
<div bis_size="{&quot;x&quot;:1272,&quot;y&quot;:3957,&quot;w&quot;:263,&quot;h&quot;:58,&quot;abs_x&quot;:1272,&quot;abs_y&quot;:4000}" className="sm:col-span-1">
<label bis_size="{&quot;x&quot;:1272,&quot;y&quot;:3957,&quot;w&quot;:263,&quot;h&quot;:16,&quot;abs_x&quot;:1272,&quot;abs_y&quot;:4000}" className="mb-1 block text-xs text-[var(--text-dim)]" htmlFor="topic">Topic</label>
<select bis_size="{&quot;x&quot;:1272,&quot;y&quot;:3977,&quot;w&quot;:263,&quot;h&quot;:38,&quot;abs_x&quot;:1272,&quot;abs_y&quot;:4020}" className="w-full appearance-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="topic" name="topic">
<option bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}">General Inquiry</option>
<option bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}">Partnership</option>
<option bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}">Project Estimate</option>
<option bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}">DROID Challenge</option>
</select>
</div>
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:4031,&quot;w&quot;:542,&quot;h&quot;:144,&quot;abs_x&quot;:993,&quot;abs_y&quot;:4074}" className="sm:col-span-2">
<label bis_size="{&quot;x&quot;:993,&quot;y&quot;:4031,&quot;w&quot;:542,&quot;h&quot;:16,&quot;abs_x&quot;:993,&quot;abs_y&quot;:4074}" className="mb-1 block text-xs text-[var(--text-dim)]" htmlFor="message">Message</label>
<textarea bis_size="{&quot;x&quot;:993,&quot;y&quot;:4051,&quot;w&quot;:542,&quot;h&quot;:118,&quot;abs_x&quot;:993,&quot;abs_y&quot;:4094}" className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm outline-none transition focus:border-[color:var(--accent)] focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]" id="message" name="message" placeholder="How can we help?" required rows="5"></textarea>
</div>
<div bis_size="{&quot;x&quot;:993,&quot;y&quot;:4191,&quot;w&quot;:542,&quot;h&quot;:60,&quot;abs_x&quot;:993,&quot;abs_y&quot;:4234}" className="sm:col-span-2 flex items-center justify-between">
<label bis_size="{&quot;x&quot;:993,&quot;y&quot;:4205,&quot;w&quot;:389,&quot;h&quot;:32,&quot;abs_x&quot;:993,&quot;abs_y&quot;:4248}" className="inline-flex items-center gap-2 text-xs text-[var(--text-dim)]">
<input bis_size="{&quot;x&quot;:993,&quot;y&quot;:4213,&quot;w&quot;:14,&quot;h&quot;:16,&quot;abs_x&quot;:993,&quot;abs_y&quot;:4256}" className="h-4 w-4 rounded border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] focus:ring-[var(--accent)]" id="consent" type="checkbox" />
                I agree to the processing of my data as described in the privacy policy.
              </label>
<button bis_size="{&quot;x&quot;:1382,&quot;y&quot;:4191,&quot;w&quot;:152,&quot;h&quot;:60,&quot;abs_x&quot;:1382,&quot;abs_y&quot;:4234}" className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-black/90 transition hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(34,211,238,0.35)]" type="submit">
                Send Message
                <svg bis_size="{&quot;x&quot;:1500,&quot;y&quot;:4213,&quot;w&quot;:14,&quot;h&quot;:16,&quot;abs_x&quot;:1500,&quot;abs_y&quot;:4256}" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1502,&quot;y&quot;:4215,&quot;w&quot;:12,&quot;h&quot;:12,&quot;abs_x&quot;:1502,&quot;abs_y&quot;:4258}"></path></svg>
</button>
</div>
<p bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="hidden sm:col-span-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300" id="contactSuccess">Thanks! We received your message and will reply shortly.</p>
</div>
</form>
</div>
</div>
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:4340,&quot;w&quot;:1905,&quot;h&quot;:1,&quot;abs_x&quot;:0,&quot;abs_y&quot;:4383}" className="mt-16 divider-glow"></div>
</section>

<footer bis_size="{&quot;x&quot;:0,&quot;y&quot;:4421,&quot;w&quot;:1905,&quot;h&quot;:165,&quot;abs_x&quot;:0,&quot;abs_y&quot;:4464}" className="border-t border-[var(--border)] py-10">
<div bis_size="{&quot;x&quot;:312,&quot;y&quot;:4462,&quot;w&quot;:1280,&quot;h&quot;:84,&quot;abs_x&quot;:312,&quot;abs_y&quot;:4505}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:4462,&quot;w&quot;:1216,&quot;h&quot;:84,&quot;abs_x&quot;:344,&quot;abs_y&quot;:4505}" className="grid gap-8 sm:grid-cols-3">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:4462,&quot;w&quot;:384,&quot;h&quot;:84,&quot;abs_x&quot;:344,&quot;abs_y&quot;:4505}">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:4462,&quot;w&quot;:384,&quot;h&quot;:36,&quot;abs_x&quot;:344,&quot;abs_y&quot;:4505}" className="flex items-center gap-3">
<div bis_size="{&quot;x&quot;:344,&quot;y&quot;:4462,&quot;w&quot;:36,&quot;h&quot;:36,&quot;abs_x&quot;:344,&quot;abs_y&quot;:4505}" className="grid h-9 w-9 place-items-center rounded-full bg-[var(--surface)] ring-1 ring-[var(--border)]">
<svg bis_size="{&quot;x&quot;:352,&quot;y&quot;:4470,&quot;w&quot;:20,&quot;h&quot;:20,&quot;abs_x&quot;:352,&quot;abs_y&quot;:4513}" className="h-5 w-5 text-[var(--accent)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:354,&quot;y&quot;:4471,&quot;w&quot;:8,&quot;h&quot;:16,&quot;abs_x&quot;:354,&quot;abs_y&quot;:4514}"></path><path bis_size="{&quot;x&quot;:362,&quot;y&quot;:4480,&quot;w&quot;:3,&quot;h&quot;:0,&quot;abs_x&quot;:362,&quot;abs_y&quot;:4523}"></path><path bis_size="{&quot;x&quot;:362,&quot;y&quot;:4476,&quot;w&quot;:6,&quot;h&quot;:0,&quot;abs_x&quot;:362,&quot;abs_y&quot;:4519}"></path></svg>
</div>
<div bis_size="{&quot;x&quot;:392,&quot;y&quot;:4462,&quot;w&quot;:206,&quot;h&quot;:36,&quot;abs_x&quot;:392,&quot;abs_y&quot;:4505}">
<div bis_size="{&quot;x&quot;:392,&quot;y&quot;:4462,&quot;w&quot;:206,&quot;h&quot;:20,&quot;abs_x&quot;:392,&quot;abs_y&quot;:4505}" className="text-sm font-semibold tracking-tight">DATA ENVY</div>
<div bis_size="{&quot;x&quot;:392,&quot;y&quot;:4482,&quot;w&quot;:206,&quot;h&quot;:16,&quot;abs_x&quot;:392,&quot;abs_y&quot;:4525}" className="text-xs text-[var(--text-dim)]">Where Innovation Meets Intelligence</div>
</div>
</div>
<p bis_size="{&quot;x&quot;:344,&quot;y&quot;:4514,&quot;w&quot;:384,&quot;h&quot;:32,&quot;abs_x&quot;:344,&quot;abs_y&quot;:4557}" className="mt-4 text-xs text-[var(--text-dim)]">Smart, secure, and connected solutions across AI, software, robotics, telecom, cybersecurity, and research.</p>
</div>
<nav bis_size="{&quot;x&quot;:760,&quot;y&quot;:4462,&quot;w&quot;:384,&quot;h&quot;:84,&quot;abs_x&quot;:760,&quot;abs_y&quot;:4505}" className="grid grid-cols-2 gap-6 text-sm">
<div bis_size="{&quot;x&quot;:760,&quot;y&quot;:4462,&quot;w&quot;:180,&quot;h&quot;:84,&quot;abs_x&quot;:760,&quot;abs_y&quot;:4505}" className="space-y-2">
<a bis_size="{&quot;x&quot;:760,&quot;y&quot;:4462,&quot;w&quot;:180,&quot;h&quot;:20,&quot;abs_x&quot;:760,&quot;abs_y&quot;:4505}" className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#about">About</a>
<a bis_size="{&quot;x&quot;:760,&quot;y&quot;:4490,&quot;w&quot;:180,&quot;h&quot;:20,&quot;abs_x&quot;:760,&quot;abs_y&quot;:4533}" className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#divisions">Divisions</a>
<a bis_size="{&quot;x&quot;:760,&quot;y&quot;:4518,&quot;w&quot;:180,&quot;h&quot;:20,&quot;abs_x&quot;:760,&quot;abs_y&quot;:4561}" className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#innovation">Innovation</a>
</div>
<div bis_size="{&quot;x&quot;:964,&quot;y&quot;:4462,&quot;w&quot;:180,&quot;h&quot;:84,&quot;abs_x&quot;:964,&quot;abs_y&quot;:4505}" className="space-y-2">
<a bis_size="{&quot;x&quot;:964,&quot;y&quot;:4462,&quot;w&quot;:180,&quot;h&quot;:20,&quot;abs_x&quot;:964,&quot;abs_y&quot;:4505}" className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#droid">DROID Challenge</a>
<a bis_size="{&quot;x&quot;:964,&quot;y&quot;:4490,&quot;w&quot;:180,&quot;h&quot;:20,&quot;abs_x&quot;:964,&quot;abs_y&quot;:4533}" className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#contact">Contact</a>
<a bis_size="{&quot;x&quot;:964,&quot;y&quot;:4518,&quot;w&quot;:180,&quot;h&quot;:20,&quot;abs_x&quot;:964,&quot;abs_y&quot;:4561}" className="block text-[var(--text-dim)] transition hover:text-[var(--text)]" href="#">Privacy</a>
</div>
</nav>
<div bis_size="{&quot;x&quot;:1176,&quot;y&quot;:4462,&quot;w&quot;:384,&quot;h&quot;:84,&quot;abs_x&quot;:1176,&quot;abs_y&quot;:4505}" className="flex flex-col items-start gap-4 sm:items-end">
<div bis_size="{&quot;x&quot;:1408,&quot;y&quot;:4462,&quot;w&quot;:152,&quot;h&quot;:32,&quot;abs_x&quot;:1408,&quot;abs_y&quot;:4505}" className="flex items-center gap-2">
<button bis_size="{&quot;x&quot;:1408,&quot;y&quot;:4462,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:1408,&quot;abs_y&quot;:4505}" className="inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] hover:text-[var(--text)]" id="themeToggleFooter">
<svg bis_size="{&quot;x&quot;:1416,&quot;y&quot;:4470,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1416,&quot;abs_y&quot;:4513}" className="moon h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1418,&quot;y&quot;:4472,&quot;w&quot;:11,&quot;h&quot;:11,&quot;abs_x&quot;:1418,&quot;abs_y&quot;:4515}"></path></svg>
<svg bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" className="sun hidden h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}" cx="12" cy="12"></circle><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path><path bis_size="{&quot;x&quot;:0,&quot;y&quot;:0,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:0,&quot;abs_y&quot;:43}"></path></svg>
</button>
<a aria-label="GitHub" bis_size="{&quot;x&quot;:1448,&quot;y&quot;:4462,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:1448,&quot;abs_y&quot;:4505}" className="inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] transition hover:text-[var(--text)]" href="#">
<svg bis_size="{&quot;x&quot;:1456,&quot;y&quot;:4470,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1456,&quot;abs_y&quot;:4513}" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1457,&quot;y&quot;:4471,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:1457,&quot;abs_y&quot;:4514}"></path></svg>
</a>
<a aria-label="LinkedIn" bis_size="{&quot;x&quot;:1488,&quot;y&quot;:4462,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:1488,&quot;abs_y&quot;:4505}" className="inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] transition hover:text-[var(--text)]" href="#">
<svg bis_size="{&quot;x&quot;:1496,&quot;y&quot;:4470,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1496,&quot;abs_y&quot;:4513}" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1496,&quot;y&quot;:4470,&quot;w&quot;:16,&quot;h&quot;:15,&quot;abs_x&quot;:1496,&quot;abs_y&quot;:4513}"></path></svg>
</a>
<a aria-label="X/Twitter" bis_size="{&quot;x&quot;:1528,&quot;y&quot;:4462,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:1528,&quot;abs_y&quot;:4505}" className="inline-flex items-center rounded-full p-2 text-[var(--text-dim)] ring-1 ring-[var(--border)] transition hover:text-[var(--text)]" href="#">
<svg bis_size="{&quot;x&quot;:1536,&quot;y&quot;:4470,&quot;w&quot;:16,&quot;h&quot;:16,&quot;abs_x&quot;:1536,&quot;abs_y&quot;:4513}" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path bis_size="{&quot;x&quot;:1537,&quot;y&quot;:4471,&quot;w&quot;:13,&quot;h&quot;:13,&quot;abs_x&quot;:1537,&quot;abs_y&quot;:4514}"></path></svg>
</a>
</div>
<p bis_size="{&quot;x&quot;:1343,&quot;y&quot;:4510,&quot;w&quot;:217,&quot;h&quot;:16,&quot;abs_x&quot;:1343,&quot;abs_y&quot;:4553}" className="text-xs text-[var(--text-dim)]">© <span bis_size="{&quot;x&quot;:1357,&quot;y&quot;:4510,&quot;w&quot;:29,&quot;h&quot;:15,&quot;abs_x&quot;:1357,&quot;abs_y&quot;:4553}" id="year">2025</span> Data Envy. All rights reserved.</p>
</div>
</div>
</div>
</footer>



    </>
  );
}
