import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Lucide icons
    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide && window.lucide.createIcons) {
        window.lucide.createIcons();
      }
    });

    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Scroll progress
    const progress = document.getElementById('progress');
    const setProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      progress.style.width = pct + '%';
    };
    setProgress();
    window.addEventListener('scroll', setProgress, { passive: true });
    window.addEventListener('resize', setProgress);

    // Cursor glow
    const glow = document.getElementById('cursorGlow');
    window.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });

    // Parallax blobs
    const blobR = document.getElementById('blobR');
    const blobL = document.getElementById('blobL');
    window.addEventListener('mousemove', (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      blobR.style.transform = `translate(${x}px, ${y}px)`;
      blobL.style.transform = `translate(${-x}px, ${-y}px)`;
    });

    // In-view animations
    const animated = document.querySelectorAll('[data-animate]');
    animated.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity 600ms ease, transform 600ms ease';
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    animated.forEach((el) => io.observe(el));

    // Services dropdown (desktop)
    const servicesBtn = document.getElementById('servicesButton');
    const servicesMenu = document.getElementById('servicesMenu');
    if (servicesBtn && servicesMenu) {
      const closeServices = () => {
        servicesMenu.classList.add('hidden');
        servicesBtn.setAttribute('aria-expanded', 'false');
      };
      servicesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        servicesMenu.classList.toggle('hidden');
        const expanded = servicesBtn.getAttribute('aria-expanded') === 'true';
        servicesBtn.setAttribute('aria-expanded', String(!expanded));
      });
      document.addEventListener('click', (e) => {
        if (!servicesMenu.contains(e.target) && e.target !== servicesBtn) {
          closeServices();
        }
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeServices();
      });
    }

    // Mobile menu + services
    const openMenu = document.getElementById('openMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    if (openMenu && mobileMenu) {
      openMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
    const mobileServicesBtn = document.getElementById('mobileServicesBtn');
    const mobileServicesMenu = document.getElementById('mobileServicesMenu');
    if (mobileServicesBtn && mobileServicesMenu) {
      mobileServicesBtn.addEventListener('click', () => {
        mobileServicesMenu.classList.toggle('hidden');
      });
    }

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id && id.length > 1) {
          const el = document.querySelector(id);
          if (el) {
            e.preventDefault();
            const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        }
      });
    });

    // Forms (demo handling)
    const auditForm = document.getElementById('auditForm');
    const auditSuccess = document.getElementById('auditSuccess');
    if (auditForm) {
      auditForm.addEventListener('submit', (e) => {
        e.preventDefault();
        auditSuccess.classList.remove('hidden');
        auditForm.reset();
      });
    }
    const contactForm = document.getElementById('contactForm');
    const contactSuccess = document.getElementById('contactSuccess');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        contactSuccess.classList.remove('hidden');
        contactForm.reset();
      });
    }

    // KPI Chart
    const ctx = document.getElementById('kpiChart')?.getContext('2d');
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 120);
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.4)');
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0.0)');
      const data = [12, 14, 13, 16, 17, 19, 23, 22, 25, 28, 27, 31];
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({ length: data.length }, (_, i) => i + 1),
          datasets: [{
            data,
            borderColor: 'rgb(52, 211, 153)',
            backgroundColor: gradient,
            fill: true,
            tension: 0.35,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: true, mode: 'index', intersect: false } },
          scales: {
            x: { display: false },
            y: { display: false }
          }
        }
      });

      // Gentle live updates
      setInterval(() => {
        const last = chart.data.datasets[0].data.slice(-1)[0] ?? 20;
        const next = Math.max(8, Math.min(40, last + (Math.random() * 6 - 3)));
        chart.data.labels.push(chart.data.labels.length + 1);
        chart.data.datasets[0].data.push(next);
        if (chart.data.labels.length > 24) {
          chart.data.labels.shift();
          chart.data.datasets[0].data.shift();
        }
        chart.update('none');
      }, 2200);
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10 hue-rotate-180"><iframe frameborder="0" height="100%" src="https://my.spline.design/untitled-f680ea749fc30deeb5eff5a8b15b2f63" width="100%"></iframe></div>

<div className="fixed top-0 left-0 h-[2px] bg-emerald-400/80 z-[60] w-0" id="progress" style={{width: '85.2352%'}}></div>
<div className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl z-0 hidden md:block" id="cursorGlow" style={{left: '445px', top: '118px'}}></div>
<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-50 border-b border-white/5 bg-emerald-950/70 backdrop-blur supports-[backdrop-filter]:bg-emerald-950/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a className="inline-flex items-center gap-3 group" href="#">
<span className="h-9 w-9 rounded-xl bg-white text-emerald-900 flex items-center justify-center tracking-tight text-sm font-semibold font-geist">JL</span>
<span className="text-base sm:text-lg font-medium tracking-tight group-hover:opacity-90 font-geist">Jordan Labs</span>
</a>

<nav className="hidden md:flex items-center gap-1">
<a className="px-3 py-2 rounded-full text-sm text-emerald-300 hover:text-white hover:bg-white/5 transition font-geist" href="#">Home</a>

<div className="relative">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm text-emerald-300 hover:text-white hover:bg-white/5 transition font-geist" id="servicesButton">
                Services
                <svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute left-0 mt-2 w-[320px] rounded-2xl border border-white/10 bg-emerald-900/95 backdrop-blur p-2 shadow-xl" id="servicesMenu">
<a className="flex items-start gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition" href="#foundation">
<svg className="lucide lucide-megaphone h-4 w-4" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
<div>
<div className="text-sm font-medium font-geist">Foundation</div>
<div className="text-xs text-emerald-400 font-geist">Strategy, site, content engine</div>
</div>
</a>
<a className="flex items-start gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition" href="#growth">
<svg className="lucide lucide-workflow h-4 w-4" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
<div>
<div className="text-sm font-medium font-geist">Growth Engines</div>
<div className="text-xs text-emerald-400 font-geist">Automation + nurture</div>
</div>
</a>
<a className="flex items-start gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition" href="#opshub">
<svg className="lucide lucide-layout-dashboard h-4 w-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<div>
<div className="text-sm font-medium font-geist">OpsHub</div>
<div className="text-xs text-emerald-400 font-geist">CompanyOS</div>
</div>
</a>
<a className="flex items-start gap-3 px-3 py-2 rounded-xl hover:bg-white/10 transition" href="#clario">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<div>
<div className="text-sm font-medium font-geist">Clario for Teams</div>
<div className="text-[11px] inline-flex items-center gap-1 text-cyan-300/90 font-geist">
<span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80"></span>
                      Beta
                    </div>
</div>
</a>
</div>
</div>
<a className="px-3 py-2 rounded-full text-sm text-emerald-300 hover:text-white hover:bg-white/5 transition font-geist" href="#work">Work</a>
<a className="px-3 py-2 rounded-full text-sm text-emerald-300 hover:text-white hover:bg-white/5 transition font-geist" href="#playbooks">Playbooks</a>
<a className="px-3 py-2 rounded-full text-sm text-emerald-300 hover:text-white hover:bg-white/5 transition font-geist" href="#studio">Studio</a>
<a className="px-3 py-2 rounded-full text-sm text-emerald-300 hover:text-white hover:bg-white/5 transition font-geist" href="#about">About</a>
<a className="px-3 py-2 rounded-full text-sm text-emerald-300 hover:text-white hover:bg-white/5 transition font-geist" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-emerald-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition font-geist" href="#audit">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Free Systems Audit
            </a>
<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 transition" id="openMenu">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-white/5" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4 grid grid-cols-2 gap-2">
<button className="col-span-2 inline-flex items-center justify-between px-3 py-2 rounded-xl text-sm text-emerald-200 bg-white/5 font-geist" id="mobileServicesBtn">
            Services
            <svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden col-span-2 space-y-2" id="mobileServicesMenu">
<a className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm bg-white/5 font-geist" href="#foundation">
<svg className="lucide lucide-megaphone h-4 w-4" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
              Foundation
            </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm bg-white/5 font-geist" href="#growth">
<svg className="lucide lucide-workflow h-4 w-4" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
              Growth Engines
            </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm bg-white/5 font-geist" href="#opshub">
<svg className="lucide lucide-layout-dashboard h-4 w-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
              OpsHub
            </a>
<a className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm bg-white/5 font-geist" href="#clario">
<svg className="lucide lucide-users h-4 w-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
              Clario for Teams (Beta)
            </a>
</div>
<a className="px-3 py-2 rounded-xl text-sm text-emerald-200 bg-white/5 font-geist" href="#work">Work</a>
<a className="px-3 py-2 rounded-xl text-sm text-emerald-200 bg-white/5 font-geist" href="#playbooks">Playbooks</a>
<a className="px-3 py-2 rounded-xl text-sm text-emerald-200 bg-white/5 font-geist" href="#studio">Studio</a>
<a className="px-3 py-2 rounded-xl text-sm text-emerald-200 bg-white/5 font-geist" href="#about">About</a>
<a className="px-3 py-2 rounded-xl text-sm text-emerald-200 bg-white/5 font-geist" href="#contact">Contact</a>
<a className="col-span-2 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-emerald-900 px-4 py-2 text-sm font-medium font-geist" href="#audit">
<svg className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Free Systems Audit
          </a>
</div>
</div>
</header>

<section className="relative" id="home">
<div className="absolute inset-0 -z-10">
<img alt="" className="w-full h-full object-cover opacity-[0.08]" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-emerald-950 to-emerald-950"></div>
<div aria-hidden="true" className="absolute -top-24 -right-16 h-72 w-72 bg-indigo-400/20 blur-3xl rounded-full transition-transform duration-300" id="blobR" style={{transform: 'translate(-3.63376px, -6.83221px)'}}></div>
<div aria-hidden="true" className="absolute top-20 -left-10 h-64 w-64 bg-sky-400/15 blur-3xl rounded-full transition-transform duration-300" id="blobL" style={{transform: 'translate(3.63376px, 6.83221px)'}}></div>
</div>
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-14 pr-4 pb-10 pl-4">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-emerald-100 font-geist">
<svg className="lucide lucide-cpu h-3.5 w-3.5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
              Applied-AI Venture Studio
            </div>
<h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl text-white font-geist font-semibold tracking-tight">
              Systems that sell while you sleep
            </h1>
<p className="mt-3 text-sm text-emerald-300 font-geist">Story. Systems. Software.</p>
<p className="mt-2 text-base sm:text-lg text-emerald-300 max-w-xl font-geist">
              We pair brand strategy with automation and lightweight software so your team moves from manual hustle to compounding outcomes.
            </p>
<div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full bg-white text-emerald-900 px-5 py-3 text-sm font-medium hover:opacity-90 transition font-geist" href="#audit">
<svg className="lucide lucide-scan-line h-4 w-4" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
                Get a Free Systems Audit
              </a>
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-5 py-3 text-sm font-medium hover:bg-white/15 transition font-geist" href="#work">
                See our work
                <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-10 hidden sm:flex items-center gap-2 text-emerald-400 text-xs font-geist">
<div className="h-px w-8 bg-white/10"></div>
              Scroll to explore the system
              <svg className="lucide lucide-chevrons-down h-3.5 w-3.5" data-lucide="chevrons-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m7 6 5 5 5-5"></path><path d="m7 13 5 5 5-5"></path></svg>
<div className="h-px w-8 bg-white/10"></div>
</div>

<div className="mt-12">
<div className="flex items-center gap-3 text-xs text-emerald-400 font-geist">
<div className="h-px w-8 bg-white/10"></div>
                Trusted by teams doing meaningful work
                <div className="h-px w-8 bg-white/10"></div>
</div>
<div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
<div className="h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xs text-emerald-300 font-geist">A Long Talk</div>
<div className="h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-[11px] text-emerald-300 text-center px-2 font-geist">CMR Pancreatic Cancer Initiative</div>
<div className="h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xs text-emerald-300 font-geist">Northstar Media</div>
<div className="h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-xs text-emerald-300 font-geist">Waypoint Labs</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative bg-emerald-900/60 border-white/10 border rounded-3xl pt-3 pr-3 pb-3 pl-3">
<div className="rounded-2xl border border-white/10 bg-emerald-950/50 overflow-hidden">
<div className="flex gap-2 border-white/10 border-b pt-2 pr-3 pb-2 pl-3 items-center">
<span className="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
<span className="h-2.5 w-2.5 bg-amber-500/80 rounded-full"></span>
<span className="h-2.5 w-2.5 bg-emerald-400/80 rounded-full"></span>
<span className="ml-auto text-[11px] text-emerald-400 font-geist">/flows/weekly-ops</span>
</div>
<div className="grid grid-cols-2 gap-4 p-4">
<div className="rounded-xl border border-white/10 bg-white/5 p-3 hover:translate-y-[-2px] transition will-change-transform">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-emerald-300 font-geist">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                        Intake
                      </div>
<span className="text-[10px] text-sky-300 font-geist">live</span>
</div>
<div className="mt-3 h-20 rounded-lg bg-emerald-900/70 border border-white/5"></div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-3 hover:translate-y-[-2px] transition will-change-transform">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-emerald-300 font-geist">
<svg className="lucide lucide-mail-check h-4 w-4" data-lucide="mail-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="m16 19 2 2 4-4"></path></svg>
                        Nurture
                      </div>
<span className="text-[10px] text-emerald-400 font-geist">queued</span>
</div>
<div className="mt-3 h-20 rounded-lg bg-emerald-900/70 border border-white/5"></div>
</div>
<div className="col-span-2 rounded-xl border border-white/10 bg-white/5 p-3 hover:translate-y-[-2px] transition will-change-transform">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-xs text-emerald-300 font-geist">
<svg className="lucide lucide-line-chart h-4 w-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                        Weekly KPI
                      </div>
<span className="text-[10px] text-emerald-400 font-geist">automated</span>
</div>
<div className="mt-3 rounded-lg bg-emerald-900/70 border border-white/5 p-2">
<div className="relative h-24">
<canvas height="192" id="kpiChart" style={{display: 'block', boxSizing: 'border-box', height: '96px', width: '384px'}} width="768"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-4 -right-4 hidden sm:flex">
<div className="h-24 w-24 rounded-2xl bg-sky-400/10 blur-2xl"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="what">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="text-center">
<h2 className="sm:text-4xl text-3xl text-white font-geist font-semibold tracking-tight">Story. Systems. Software.</h2>
<p className="mt-2 text-sm text-emerald-400 font-geist">Three pillars to launch momentum—and keep it compounding.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="rounded-3xl border border-white/10 bg-emerald-900/60 p-6 hover:translate-y-[-2px] transition will-change-transform">
<div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
<svg className="lucide lucide-file-text h-5 w-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold text-white font-geist">Story</h3>
<p className="mt-2 text-sm text-emerald-400 font-geist">Websites, landing pages, and copy that convert.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-emerald-900/60 p-6 hover:translate-y-[-2px] transition will-change-transform">
<div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
<svg className="lucide lucide-sliders-horizontal h-5 w-5" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><line x1="14" x2="14" y1="2" y2="6"></line><line x1="8" x2="8" y1="10" y2="14"></line><line x1="16" x2="16" y1="18" y2="22"></line></svg>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold text-white font-geist">Systems</h3>
<p className="mt-2 text-sm text-emerald-400 font-geist">CRM, funnels, nurture, analytics, and a weekly operating cadence.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-emerald-900/60 p-6 hover:translate-y-[-2px] transition will-change-transform">
<div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center">
<svg className="lucide lucide-bot h-5 w-5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="mt-4 text-xl tracking-tight font-semibold text-white font-geist">Software</h3>
<p className="mt-2 text-sm text-emerald-400 font-geist">Automations and custom dashboards built on n8n, OpenAI, Supabase, and Framer/React.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="services">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="text-center">
<h2 className="text-3xl sm:text-4xl text-white font-geist font-semibold tracking-tight">Pick a path—then we stack</h2>
<p className="mt-2 text-sm text-emerald-400 font-geist">Start where it moves the needle now. We’ll layer the rest as results land.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">

<a className="group rounded-3xl border border-white/10 bg-emerald-900/60 p-6 flex flex-col hover:border-white/20 hover:translate-y-[-2px] transition will-change-transform" href="#contact" id="foundation">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white font-geist">Foundation</h3>
<svg className="lucide lucide-megaphone h-5 w-5 text-emerald-300 group-hover:text-white" data-lucide="megaphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></path><path d="M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14"></path><path d="M8 6v8"></path></svg>
</div>
<p className="mt-2 text-sm text-emerald-300 font-geist">Brand voice, high-converting site, Content Engine.</p>
<div className="mt-3 text-xs text-emerald-400 font-geist">2–3 weeks</div>
<div className="mt-5 inline-flex items-center gap-2 text-sm text-white/90 font-geist">
              Explore
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>

<a className="group rounded-3xl border-2 border-white/20 bg-emerald-900 p-6 flex flex-col relative hover:translate-y-[-2px] transition will-change-transform" href="#contact" id="growth">
<span className="absolute -top-3 right-4 rounded-full bg-white text-emerald-900 text-xs px-2 py-1 font-medium font-geist">Popular</span>
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white font-geist">Growth Engines</h3>
<svg className="lucide lucide-workflow h-5 w-5 text-emerald-200" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<p className="mt-2 text-sm text-emerald-300 font-geist">Leadflow AI, Content Engine 2.0, Sales/Donor Co-Pilot, InsightHub.</p>
<div className="mt-3 text-xs text-emerald-400 font-geist">2–4 weeks</div>
<div className="mt-5 inline-flex items-center gap-2 text-sm text-emerald-900 bg-white rounded-full px-3 py-1.5 self-start font-geist">
              Build my engine
              <svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
</a>

<a className="group rounded-3xl border border-white/10 bg-emerald-900/60 p-6 flex flex-col hover:border-white/20 hover:translate-y-[-2px] transition will-change-transform" href="#contact" id="opshub">
<div className="flex items-center justify-between">
<h3 className="text-xl tracking-tight font-semibold text-white font-geist">OpsHub (CompanyOS)</h3>
<svg className="lucide lucide-layout-dashboard h-5 w-5 text-emerald-300 group-hover:text-white" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<p className="mt-2 text-sm text-emerald-300 font-geist">Your one-stop operations hub.</p>
<div className="mt-3 text-xs text-emerald-400 font-geist">4–8 weeks</div>
<div className="mt-5 inline-flex items-center gap-2 text-sm text-white/90 font-geist">
              Explore
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
<div className="mt-6 flex items-center justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/15 transition font-geist" href="#services">
            Explore Services
            <svg className="lucide lucide-chevrons-right h-4 w-4" data-lucide="chevrons-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 17 5-5-5-5"></path><path d="m13 17 5-5-5-5"></path></svg>
</a>
</div>

<div className="mt-6 rounded-3xl border border-white/10 bg-emerald-900/60 p-6 flex items-center justify-between" id="clario">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
<svg className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div>
<div className="text-sm font-medium font-geist">Clario for Teams</div>
<div className="text-xs text-emerald-400 font-geist">Context-aware assist for content ops and CRM updates</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] rounded-full bg-cyan-300/20 text-cyan-200 px-2 py-1 font-geist">Beta</span>
<a className="inline-flex items-center gap-2 rounded-full bg-white text-emerald-900 px-3 py-1.5 text-xs font-medium font-geist" href="#contact">
              Request access
              <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="relative" id="method">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="text-center">
<h2 className="text-3xl sm:text-4xl text-white font-geist font-semibold tracking-tight">The Jordan Labs Method</h2>
<p className="mt-2 text-sm text-emerald-400 font-geist">Discover → Design → Build → Prove → Scale</p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
<div className="rounded-3xl border border-white/10 bg-emerald-900/60 p-5 hover:translate-y-[-2px] transition will-change-transform">
<div className="flex items-center gap-2 text-xs text-emerald-400 font-geist">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg> Discover
            </div>
<p className="mt-2 text-sm text-emerald-300 font-geist">Audit the value chain. Shortlist the 3–5 automations that matter.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-emerald-900/60 p-5 hover:translate-y-[-2px] transition will-change-transform">
<div className="flex items-center gap-2 text-xs text-emerald-400 font-geist">
<svg className="lucide lucide-map h-4 w-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg> Design
            </div>
<p className="mt-2 text-sm text-emerald-300 font-geist">Map flows, prompts, data models, and UI.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-emerald-900/60 p-5 hover:translate-y-[-2px] transition will-change-transform">
<div className="flex items-center gap-2 text-xs text-emerald-400 font-geist">
<svg 0="" 24="" 24"="" className="lucide lucide-bot h-4 w-4" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24              viewBox=" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg> Build
            </div>
<p className="mt-2 text-sm text-emerald-300 font-geist">Ship the MVP workflow. Integrate CRM, automations, and dashboards.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-emerald-900/60 p-5 hover:translate-y-[-2px] transition will-change-transform">
<div className="flex items-center gap-2 text-xs text-emerald-400 font-geist">
<svg className="lucide lucide-line-chart h-4 w-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg> Prove
            </div>
<p className="mt-2 text-sm text-emerald-300 font-geist">Run a 2–4 week sprint. Measure lift and cut what doesn’t move metrics.</p>
</div>
<div className="rounded-3xl border border-white/10 bg-emerald-900/60 p-5 hover:translate-y-[-2px] transition will-change-transform">
<div className="flex items-center gap-2 text-xs text-emerald-400 font-geist">
<svg className="lucide lucide-rocket h-4 w-4" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg> Scale
            </div>
<p className="mt-2 text-sm text-emerald-300 font-geist">Lock wins into cadence. Expand to new channels and teams.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="work">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-3xl sm:text-4xl text-white font-geist font-semibold tracking-tight">Selected work</h2>
<p className="mt-2 text-sm text-emerald-400 font-geist">A few snapshots from recent systems and sites.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/10 text-white px-4 py-2 text-sm font-medium hover:bg-white/15 transition font-geist" href="#contact">
            Start a project
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-900/50">
<img alt="B2B SaaS growth site" className="h-52 w-full object-cover opacity-80 transition group-hover:scale-[1.03] group-hover:opacity-90" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-white font-geist font-semibold">B2B SaaS growth site</h3>
<p className="mt-1 text-sm text-emerald-300 font-geist">Narrative revamp + demo funnel + KPI ops cadence.</p>
<div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-geist">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">+38% CVR</span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">-42% CAC</span>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-900/50">
<img alt="OpsHub build for services firm" className="h-52 w-full object-cover opacity-80 transition group-hover:scale-[1.03] group-hover:opacity-90" src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-white font-geist font-semibold">OpsHub for services firm</h3>
<p className="mt-1 text-sm text-emerald-300 font-geist">CompanyOS: pipeline, capacity, billing, and reporting.</p>
<div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-geist">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">-12 hrs/wk ops</span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">NPS 73</span>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-900/50">
<img alt="Nonprofit content engine" className="h-52 w-full object-cover opacity-80 transition group-hover:scale-[1.03] group-hover:opacity-90" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-white font-geist font-semibold">Nonprofit content engine</h3>
<p className="mt-1 text-sm text-emerald-300 font-geist">Editorial OS + donor nurture + data-backed storytelling.</p>
<div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-geist">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">+3.4x reach</span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">+22% gifts</span>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-900/50">
<img alt="Analytics and KPI hub" className="h-52 w-full object-cover opacity-80 transition group-hover:scale-[1.03] group-hover:opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5">
<h3 className="text-white font-geist font-semibold">Analytics and KPI hub</h3>
<p className="mt-1 text-sm text-emerald-300 font-geist">One weekly dashboard to drive decisions and focus.</p>
<div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-geist">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">Ops cadence</span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">Auto reports</span>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-900/50">
<img alt="Leadflow AI + CRM" className="h-52 w-full object-cover opacity-80 transition group-hover:scale-[1.03] group-hover:opacity-90" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-white font-geist font-semibold">Leadflow AI + CRM</h3>
<p className="mt-1 text-sm text-emerald-300 font-geist">Prospect research, outreach, and follow-up—on autopilot.</p>
<div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-geist">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">+41% replies</span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">ICP fit ↑</span>
</div>
</div>
</article>
<article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-emerald-900/50">
<img alt="Developer docs + DX" className="h-52 w-full object-cover opacity-80 transition group-hover:scale-[1.03] group-hover:opacity-90" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<h3 className="text-white font-geist font-semibold">Developer docs + DX</h3>
<p className="mt-1 text-sm text-emerald-300 font-geist">API docs that SEO loves and devs actually read.</p>
<div className="mt-3 flex items-center gap-2 text-xs text-emerald-400 font-geist">
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">+29% demos</span>
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2 py-1">Time-to-value ↓</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative" id="playbooks">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="text-center">
<h2 className="text-3xl sm:text-4xl text-white font-geist font-semibold tracking-tight">Operator playbooks</h2>
<p className="mt-2 text-sm text-emerald-400 font-geist">Battle-tested checklists to spin up momentum fast.</p>
</div>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<a className="group rounded-3xl border border-white/10 bg-emerald-900/60 p-5 hover:border-white/20 hover:translate-y-[-2px] transition will-change-transform" href="#contact">
<div className="flex items-center gap-2 text-xs text-emerald-400 font-geist">
<svg className="lucide lucide-zap h-4 w-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2 3 14h7l-1 8 10-12h-7z"></path></svg>
              Quickstart
            </div>
<h3 className="mt-2 text-white font-geist font-semibold">Content Engine 2.0</h3>
<p className="mt-1 text-sm text-emerald-300 font-geist">From zero to consistent output in 14 days.</p>
</a>
<a className="group rounded-3xl border border-white/10 bg-emerald-900/60 p-5 hover:border-white/20 hover:translate-y-[-2px] transition will-change-transform" href="#contact">
<div className="flex items-center gap-2 text-xs text-emerald-400 font-geist">
<svg className="lucide lucide-send h-4 w-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
              Outreach
            </div>
<h3 className="mt-2 text-white font-geist font-semibold">Inbound-first funnel</h3>
<p className="mt-1 text-sm text-emerald-300 font-geist">Positioning, offers, and nurture that compounds.</p>
</a>
<a className="group rounded-3xl border border-white/10 bg-emerald-900/60 p-5 hover:border-white/20 hover:translate-y-[-2px] transition will-change-transform" href="#contact">
<div className="flex items-center gap-2 text-xs text-emerald-400 font-geist">
<svg className="lucide lucide-bar-chart-3 h-4 w-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
              Analytics
            </div>
<h3 className="mt-2 text-white font-geist font-semibold">Weekly operating cadence</h3>
<p className="mt-1 text-sm text-emerald-300 font-geist">Run one crisp meeting that runs the business.</p>
</a>
</div>
</div>
</section>

<section className="relative" id="audit">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div className="">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] text-emerald-100 font-geist">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Free Systems Audit
            </div>
<h3 className="mt-3 text-3xl sm:text-4xl text-white font-geist font-semibold tracking-tight">Find the 10% of work creating 90% of results</h3>
<p className="mt-2 text-sm text-emerald-300 font-geist">We’ll map your value chain, shortlist high-ROI automations, and show the first two plays to run.</p>
<ul className="mt-4 text-sm text-emerald-400 space-y-1 font-geist list-disc list-inside">
<li className="">30–45 min Zoom</li>
<li className="">Written brief within 48 hours</li>
<li>No obligation to engage</li>
</ul>
</div>
<form className="rounded-3xl border border-white/10 bg-emerald-900/60 p-6 space-y-4" id="auditForm">
<div>
<label className="block text-xs text-emerald-400 font-geist" htmlFor="name">Your name</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" id="name" name="name" placeholder="Jordan Lee" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-emerald-400 font-geist" htmlFor="email">Work email</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-emerald-400 font-geist">Priority area</label>
<div className="mt-2 grid grid-cols-2 gap-2">
<label className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
<input className="accent-emerald-400" name="priority" required="" type="radio" value="story"/>
<span className="font-geist">Story</span>
</label>
<label className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
<input className="accent-emerald-400" name="priority" type="radio" value="systems"/>
<span className="font-geist">Systems</span>
</label>
<label className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
<input className="accent-emerald-400" name="priority" type="radio" value="software"/>
<span className="font-geist">Software</span>
</label>
<label className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm">
<input className="accent-emerald-400" name="priority" type="radio" value="not-sure"/>
<span className="font-geist">Not sure yet</span>
</label>
</div>
</div>
<div>
<label className="block text-xs text-emerald-400 font-geist" htmlFor="notes">Context</label>
<textarea className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" id="notes" name="notes" placeholder="Share goals, bottlenecks, tools in play..." rows="3"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-emerald-900 px-4 py-2 text-sm font-medium hover:opacity-90 transition font-geist" type="submit">
              Book my audit
              <svg className="lucide lucide-calendar-check-2 h-4 w-4" data-lucide="calendar-check-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</button>
<p className="hidden text-center text-sm text-emerald-300 font-geist" id="auditSuccess">Thanks! We’ll reach out within one business day.</p>
</form>
</div>
</div>
</section>

<section className="relative" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="grid lg:grid-cols-3 gap-8 items-start">
<div className="lg:col-span-2">
<h2 className="text-3xl sm:text-4xl text-white font-geist font-semibold tracking-tight">Story. Systems. Software.</h2>
<p className="mt-3 text-sm text-emerald-300 font-geist max-w-2xl">Jordan Labs is an applied-AI venture studio. We pair narrative, automation, and lightweight software so small teams can punch above their weight—and stay there.</p>
<div className="mt-6 grid sm:grid-cols-3 gap-4">
<div className="rounded-2xl border border-white/10 bg-emerald-900/60 p-4">
<div className="text-2xl font-semibold text-white font-geist">8+</div>
<div className="text-xs text-emerald-400 font-geist">years shipping</div>
</div>
<div className="rounded-2xl border border-white/10 bg-emerald-900/60 p-4">
<div className="text-2xl font-geist font-semibold text-white">100k+</div>
<div className="text-xs text-emerald-400 font-geist">automations/day</div>
</div>
<div className="rounded-2xl border border-white/10 bg-emerald-900/60 p-4">
<div className="text-2xl font-geist font-semibold text-white">4.9★</div>
<div className="text-xs text-emerald-400 font-geist">client satisfaction</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-emerald-900/60 p-6">
<h3 className="text-white font-geist font-semibold">Stack</h3>
<ul className="mt-2 text-sm text-emerald-300 space-y-2 font-geist">
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> n8n + OpenAI for orchestration</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Supabase for data + auth</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Framer/React for frontends</li>
<li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span> Linear + Notion for ops</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative" id="contact">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12" data-animate="" style={{opacity: '1', transform: 'translateY(0px)', transition: 'opacity 600ms, transform 600ms'}}>
<div className="text-center">
<h2 className="text-3xl sm:text-4xl text-white font-geist font-semibold tracking-tight">Let’s build your growth system</h2>
<p className="mt-2 text-sm text-emerald-400 font-geist">Tell us a bit about your goals. We’ll reply within one business day.</p>
</div>
<form className="mt-8 mx-auto max-w-2xl rounded-3xl border border-white/10 bg-emerald-900/60 p-6 space-y-4" id="contactForm">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-emerald-400 font-geist" htmlFor="cname">Name</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" id="cname" name="cname" placeholder="Jordan Lee" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-emerald-400 font-geist" htmlFor="cemail">Email</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" id="cemail" name="cemail" placeholder="you@company.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-emerald-400 font-geist" htmlFor="ccompany">Company</label>
<input className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" id="ccompany" name="ccompany" placeholder="Acme Inc." type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-emerald-400 font-geist" htmlFor="cbudget">Budget</label>
<select className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50" id="cbudget" name="cbudget">
<option className="bg-emerald-900" value="under-10k">Under $10k</option>
<option className="bg-emerald-900" value="10-25k">$10k–$25k</option>
<option className="bg-emerald-900" value="25-50k">$25k–$50k</option>
<option className="bg-emerald-900" value="50k-plus">$50k+</option>
</select>
</div>
<div>
<label className="block text-xs text-emerald-400 font-geist" htmlFor="ctimeline">Timeline</label>
<select className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-400/50" id="ctimeline" name="ctimeline">
<option className="bg-emerald-900" value="asap">ASAP</option>
<option className="bg-emerald-900" value="30-60">30–60 days</option>
<option className="bg-emerald-900" value="60-90">60–90 days</option>
<option className="bg-emerald-900" value="flexible">Flexible</option>
</select>
</div>
</div>
<div>
<label className="block text-xs text-emerald-400 font-geist" htmlFor="cmessage">What would make this a win?</label>
<textarea className="mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-emerald-300/60 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" id="cmessage" name="cmessage" placeholder="A few bullets are great." rows="4"></textarea>
</div>
<div className="flex items-center justify-between gap-4">
<div className="text-xs text-emerald-400 font-geist">We’ll never share your info.</div>
<button className="inline-flex items-center gap-2 rounded-full bg-white text-emerald-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition font-geist" type="submit">
              Send message
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="hidden text-center text-sm text-emerald-300 font-geist" id="contactSuccess">Thanks! We’ll be in touch shortly.</p>
</form>
</div>
</section>

<footer className="mt-auto border-t border-white/5">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<span className="h-9 w-9 rounded-xl bg-white text-emerald-900 flex items-center justify-center tracking-tight text-sm font-semibold font-geist">JL</span>
<div>
<div className="text-white font-geist font-semibold">Jordan Labs</div>
<div className="text-xs text-emerald-400 font-geist">Applied-AI Venture Studio</div>
</div>
</div>
<nav className="flex items-center gap-4 text-sm">
<a className="text-emerald-300 hover:text-white transition font-geist" href="#home">Home</a>
<a className="text-emerald-300 hover:text-white transition font-geist" href="#services">Services</a>
<a className="text-emerald-300 hover:text-white transition font-geist" href="#work">Work</a>
<a className="text-emerald-300 hover:text-white transition font-geist" href="#playbooks">Playbooks</a>
<a className="text-emerald-300 hover:text-white transition font-geist" href="#about">About</a>
<a className="text-emerald-300 hover:text-white transition font-geist" href="#contact">Contact</a>
</nav>
</div>
<div className="mt-8 flex items-center justify-between text-xs text-emerald-400 font-geist">
<p>© <span id="year">2025</span> Jordan Labs. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
