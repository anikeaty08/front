import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        // Icons
        window.addEventListener('DOMContentLoaded', () => {
            if (window.lucide && window.lucide.createIcons) {
                lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
            }

            // Initialize scroll animations
            initScrollAnimations();
        });

        // Scroll-triggered animations
        function initScrollAnimations() {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const element = entry.target;
                        
                        // Add the appropriate animation class
                        if (element.classList.contains('animate-fade-in-up')) {
                            element.style.animation = element.style.animation || 'fadeInUp 0.8s ease-out forwards';
                        } else if (element.classList.contains('animate-fade-in-down')) {
                            element.style.animation = element.style.animation || 'fadeInDown 0.8s ease-out forwards';
                        } else if (element.classList.contains('animate-fade-in-left')) {
                            element.style.animation = element.style.animation || 'fadeInLeft 0.8s ease-out forwards';
                        } else if (element.classList.contains('animate-fade-in-right')) {
                            element.style.animation = element.style.animation || 'fadeInRight 0.8s ease-out forwards';
                        } else if (element.classList.contains('animate-fade-in-scale')) {
                            element.style.animation = element.style.animation || 'fadeInScale 0.8s ease-out forwards';
                        } else if (element.classList.contains('animate-blur-in')) {
                            element.style.animation = element.style.animation || 'blurIn 1s ease-out forwards';
                        }
                        
                        // Stop observing this element
                        observer.unobserve(element);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            animatedElements.forEach(el => {
                observer.observe(el);
            });
        }

        // Scroll progress
        const progressEl = document.getElementById('scroll-progress');
        function setProgress() {
            const h = document.documentElement;
            const st = h.scrollTop || document.body.scrollTop;
            const sh = h.scrollHeight - h.clientHeight;
            progressEl.style.width = (sh ? (st / sh) * 100 : 0) + '%';
        }
        setProgress();
        window.addEventListener('scroll', setProgress, { passive: true });

        // Header hide on scroll
        const header = document.getElementById('site-header');
        let lastY = window.pageYOffset;
        window.addEventListener('scroll', () => {
            const y = window.pageYOffset;
            if (y > lastY && y > 80) header.classList.add('-translate-y-full');
            else header.classList.remove('-translate-y-full');
            lastY = y;
        }, { passive: true });

        // Smooth scroll
        function smoothScrollTo(targetId) {
            const el = document.querySelector(targetId);
            if (!el) return;
            const headerH = header?.offsetHeight || 64;
            const top = el.getBoundingClientRect().top + window.pageYOffset - headerH + 6;
            window.scrollTo({ top, behavior: 'smooth' });
        }

        document.querySelectorAll('a[href^="#"]:not([data-mobile-link])').forEach((a) => {
            a.addEventListener('click', (e) => {
                const href = a.getAttribute('href');
                const target = href && document.querySelector(href);
                if (!href || !target) return;
                e.preventDefault();
                smoothScrollTo(href);
            });
        });

        // Scroll spy
        const sections = ['#overview', '#about', '#projects', '#services', '#contact'];
        const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
        const mobileLinks = Array.from(document.querySelectorAll('[data-mobile-link]'));
        
        function setActive(href) {
            [...navLinks, ...mobileLinks].forEach((link) => {
                const isActive = link.getAttribute('href') === href;
                link.classList.toggle('text-white', isActive);
            });
        }

        const spy = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) setActive('#' + entry.target.id);
            });
        }, { rootMargin: '-45% 0px -50% 0px', threshold: 0.01 });

        sections.forEach((id) => {
            const el = document.querySelector(id);
            if (el) spy.observe(el);
        });

        // Mobile panel
        const navToggle = document.getElementById('nav-toggle');
        const mobilePanel = document.getElementById('mobile-panel');
        const overlay = mobilePanel?.querySelector('[data-close-overlay]');
        const menuIcon = navToggle?.querySelector('[data-lucide="menu"]');
        const closeIcon = navToggle?.querySelector('[data-lucide="x"]');

        function setMobileOpen(open) {
            if (!mobilePanel) return;
            navToggle?.setAttribute('aria-expanded', String(open));
            document.body.style.overflow = open ? 'hidden' : '';
            mobilePanel.style.pointerEvents = open ? 'auto' : 'none';
            mobilePanel.style.opacity = open ? '1' : '0';
            const sheet = mobilePanel.querySelector('.absolute.inset-x-0.top-0');
            if (sheet) {
                sheet.style.transform = open ? 'translateY(0)' : 'translateY(-8px)';
                sheet.style.opacity = open ? '1' : '0';
            }
            if (menuIcon && closeIcon) {
                menuIcon.classList.toggle('hidden', open);
                closeIcon.classList.toggle('hidden', !open);
            }
        }

        navToggle?.addEventListener('click', () => {
            const open = navToggle.getAttribute('aria-expanded') !== 'true';
            setMobileOpen(open);
        });

        overlay?.addEventListener('click', () => setMobileOpen(false));
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') setMobileOpen(false);
        });

        document.querySelectorAll('[data-mobile-link]').forEach((a) => {
            a.addEventListener('click', () => setMobileOpen(false));
        });

        // Performance chart
        (function initPerformanceChart() {
            const ctx = document.getElementById('performanceChart')?.getContext('2d');
            if (!ctx || typeof Chart === 'undefined') return;

            const gradient = ctx.createLinearGradient(0, 0, 0, 80);
            gradient.addColorStop(0, 'rgba(34,197,94,0.35)');
            gradient.addColorStop(1, 'rgba(34,197,94,0.02)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['', '', '', '', '', '', ''],
                    datasets: [{
                        data: [85, 90, 88, 95, 96, 97, 98],
                        tension: 0.35,
                        fill: true,
                        backgroundColor: gradient,
                        borderColor: '#22c55e',
                        borderWidth: 1.5,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: { enabled: false }
                    },
                    scales: {
                        x: { display: false },
                        y: { display: false }
                    }
                }
            });
        })();

        // Footer year
        document.getElementById('year').textContent = new Date().getFullYear().toString();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-15"><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="p7Ff6pfTrb5Gs59C7nLC"></div></div>

<div className="fixed top-0 left-0 h-[2px] bg-gradient-to-r w-0 z-[60] from-blue-400 to-purple-400" id="scroll-progress" style={{width: '59.2186%'}}></div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-transform duration-300 bg-black/70 border-white/5 animate-on-scroll animate-fade-in-down" id="site-header">
<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
<div className="h-full flex items-center justify-between">

<a className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] to-indigo-600">
<span className="text-sm font-semibold" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>DS</span>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>Debjit Sarkar</span>
</a>

<div className="hidden md:flex items-center gap-1 rounded-full border px-2 border-white/10">
<a className="px-3 py-2 text-sm transition text-gray-300 hover:text-white" data-nav-link="" href="#about">About</a>
<a className="transition hover:text-white text-sm text-gray-300 pt-2 pr-3 pb-2 pl-3" data-nav-link="" href="#projects">Projects</a>
<a className="px-3 py-2 text-sm transition text-gray-300 hover:text-white" data-nav-link="" href="#services">Services</a>
<a className="px-3 py-2 text-sm transition text-gray-300 hover:text-white" data-nav-link="" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 text-black hover:bg-gray-200" href="#contact">
                        Hire Me
                    </a>
<button aria-controls="mobile-panel" aria-expanded="false" className="md:hidden p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-900" id="nav-toggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x w-5 h-5 hidden" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</nav>

<div className="md:hidden fixed inset-0 z-40 pointer-events-none opacity-0 transition-opacity duration-200" id="mobile-panel">
<div className="absolute inset-0 bg-black/80" data-close-overlay=""></div>
<div className="absolute inset-x-0 top-0 border-b p-4 transform -translate-y-2 opacity-0 transition-all duration-200 bg-black border-white/10">
<div className="flex flex-col gap-2 mt-16">
<a className="px-3 py-2 text-sm transition text-gray-300 hover:text-white" data-mobile-link="" href="#about">About</a>
<a className="px-3 py-2 text-sm transition text-gray-300 hover:text-white text-white" data-mobile-link="" href="#projects">Projects</a>
<a className="px-3 py-2 text-sm transition text-gray-300 hover:text-white" data-mobile-link="" href="#services">Services</a>
<a className="px-3 py-2 text-sm transition text-gray-300 hover:text-white" data-mobile-link="" href="#contact">Contact</a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden sm:pt-28 pt-24 pb-14">

<div className="absolute top-0 left-0 w-full h-full -z-10" data-us-project="ju5gjGnrRr5Ud4fAt7eh"></div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col gap-10 lg:gap-16 text-center items-center">
<div className="max-w-4xl mx-auto">
<span className="text-xs uppercase tracking-wider text-blue-300/90 animate-on-scroll animate-fade-in-up delay-100">Available for freelance</span>
<h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight animate-on-scroll animate-blur-in delay-200" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
                        Building digital experiences that <span className="bg-gradient-to-r bg-clip-text text-transparent from-blue-400 to-purple-400">scale</span>.
                    </h1>
<p className="mt-6 text-lg max-w-2xl mx-auto text-gray-300 animate-on-scroll animate-fade-in-up delay-400">
                        Full-stack developer specializing in React, Next.js, and modern web technologies. 
                        I turn complex problems into simple, beautiful solutions.
                    </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center animate-on-scroll animate-fade-in-up delay-500">
<a className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-400 text-black hover:bg-blue-300" href="#projects">
                            View Work
                            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 transition-all border rounded-full px-5 py-3 backdrop-blur-lg hover:bg-white/10 text-gray-100 bg-white/5 border-white/10" href="#about">
                            About Me
                            <svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</a>
</div>
<div className="mt-8 flex items-center gap-6 justify-center animate-on-scroll animate-fade-in-up delay-600">
<div className="flex -space-x-2">
<img alt="" className="w-9 h-9 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&amp;q=80" style={{}}/>
<img alt="" className="w-9 h-9 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&amp;q=80" style={{}}/>
<img alt="" className="w-9 h-9 rounded-full border-2 object-cover border-black" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=160&amp;q=80"/>
<div className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-xs font-semibold border-black bg-blue-400 text-black">
                                50+
                            </div>
</div>
<div>
<p className="text-sm text-gray-100">50+ projects delivered</p>
<p className="text-sm text-gray-400">5+ years experience</p>
</div>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-6 animate-on-scroll animate-fade-in-scale delay-700">
<div className="relative overflow-hidden border rounded-2xl shadow-2xl backdrop-blur-lg bg-gray-900/50 border-white/10">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-code w-4 h-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</span>
<p className="text-sm">Portfolio.tsx</p>
</div>
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs ring-1 bg-emerald-400/10 text-emerald-300 ring-emerald-400/20">
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                                    Built with React
                                </span>
</div>
</div>

<div className="grid md:grid-cols-2 gap-0">

<div className="border-r p-4 border-white/10 bg-gray-950/50">
<div className="space-y-2 font-mono text-sm">
<div className="text-purple-400">import <span className="text-blue-400">React</span> from <span className="text-green-400">'react'</span>;</div>
<div className="text-purple-400">import <span className="text-blue-400">{ NextPage }</span> from <span className="text-green-400">'next'</span>;</div>
<div className="mt-4 text-blue-400">const <span className="text-yellow-400">Portfolio</span>: <span className="text-emerald-400">NextPage</span> = () =&gt; {</div>
<div className="ml-4 text-purple-400">return (</div>
<div className="ml-8 text-gray-300">&lt;<span className="text-red-400">div</span> <span className="text-blue-400">className</span>=<span className="text-green-400">"portfolio"</span>&gt;</div>
<div className="ml-12 text-gray-300">&lt;<span className="text-red-400">h1</span>&gt;Amazing Projects&lt;/<span className="text-red-400">h1</span>&gt;</div>
<div className="ml-8 text-gray-300">&lt;/<span className="text-red-400">div</span>&gt;</div>
<div className="ml-4 text-purple-400">);</div>
<div className="text-blue-400">};</div>
</div>

<div className="mt-6 rounded-lg border p-3 border-white/10 bg-black/40">
<div className="flex items-center justify-between">
<p className="text-xs text-gray-300">Performance Score</p>
<span className="text-xs text-gray-400"><span className="text-emerald-400">98/100</span></span>
</div>
<div className="mt-2 h-12 w-full">
<canvas height="48" id="performanceChart" style={{display: 'block', boxSizing: 'border-box', height: '48px', width: '452px'}} width="452"></canvas>
</div>
</div>
</div>

<div className="p-4">
<div className="flex items-center justify-between mb-4">
<p className="text-sm font-medium">Tech Stack</p>
<span className="text-xs text-gray-400">5+ years</span>
</div>
<div className="space-y-3">

<div className="flex items-center gap-3 rounded-lg border px-3 py-2 bg-white/5 border-white/10">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
<svg className="lucide lucide-code w-4 h-4 text-blue-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm leading-snug">React &amp; Next.js</p>
<div className="w-full rounded-full h-1.5 mt-1 bg-gray-800">
<div className="h-1.5 rounded-full bg-blue-400" style={{width: '95%'}}></div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded bg-blue-400/10 text-blue-300">Expert</span>
</div>
<div className="flex items-center gap-3 rounded-lg border px-3 py-2 bg-white/5 border-white/10">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
<svg className="lucide lucide-server w-4 h-4 text-emerald-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<div className="flex-1">
<p className="text-sm leading-snug">Node.js &amp; APIs</p>
<div className="w-full rounded-full h-1.5 mt-1 bg-gray-800">
<div className="h-1.5 rounded-full bg-emerald-400" style={{width: '90%'}}></div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded bg-emerald-400/10 text-emerald-300">Expert</span>
</div>
<div className="flex items-center gap-3 rounded-lg border px-3 py-2 bg-white/5 border-white/10">
<div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
<svg className="lucide lucide-database w-4 h-4 text-purple-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm leading-snug">Database Design</p>
<div className="w-full rounded-full h-1.5 mt-1 bg-gray-800">
<div className="h-1.5 rounded-full bg-purple-400" style={{width: '85%'}}></div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded bg-purple-400/10 text-purple-300">Advanced</span>
</div>
<div className="flex items-center gap-3 rounded-lg border px-3 py-2 bg-white/5 border-white/10">
<div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center">
<svg className="lucide lucide-smartphone w-4 h-4 text-yellow-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="flex-1">
<p className="text-sm leading-snug">Mobile Development</p>
<div className="w-full rounded-full h-1.5 mt-1 bg-gray-800">
<div className="h-1.5 rounded-full bg-yellow-400" style={{width: '80%'}}></div>
</div>
</div>
<span className="text-xs px-2 py-0.5 rounded bg-yellow-400/10 text-yellow-300">Advanced</span>
</div>
</div>

<div className="mt-4 grid grid-cols-2 gap-3 text-center">
<div className="rounded-lg border p-3 border-white/10 bg-black/40">
<p className="text-lg font-semibold">50+</p>
<p className="text-xs text-gray-400">Projects</p>
</div>
<div className="rounded-lg border p-3 border-white/10 bg-black/40">
<p className="text-lg font-semibold">5+</p>
<p className="text-xs text-gray-400">Years</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-950" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-5">
<p className="text-sm uppercase tracking-wider text-blue-300/90 animate-on-scroll animate-fade-in-up">About Me</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight text-white animate-on-scroll animate-blur-in delay-100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
                        Passionate developer with a focus on quality
                    </h2>
<p className="mt-4 text-gray-300 animate-on-scroll animate-fade-in-up delay-200">
                        I'm a full-stack developer with 5+ years of experience creating scalable web applications 
                        and mobile solutions. I specialize in modern frontend frameworks and love turning 
                        complex problems into simple, beautiful designs.
                    </p>
<p className="mt-4 text-gray-300 animate-on-scroll animate-fade-in-up delay-300">
                        Currently available for freelance projects and consulting work. 
                        Let's build something amazing together.
                    </p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="group rounded-xl border p-4 transition-colors border-white/10 bg-black/40 hover:bg-black/50 animate-on-scroll animate-fade-in-left delay-400">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
<svg className="lucide lucide-code w-4 h-4 text-blue-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h3 className="text-sm font-medium">Frontend</h3>
<p className="text-xs mt-1 text-gray-400">React, Next.js, Vue</p>
</div>
<div className="group rounded-xl border p-4 transition-colors border-white/10 bg-black/40 hover:bg-black/50 animate-on-scroll animate-fade-in-right delay-500">
<div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3">
<svg className="lucide lucide-server w-4 h-4 text-emerald-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<h3 className="text-sm font-medium">Backend</h3>
<p className="text-xs mt-1 text-gray-400">Node.js, Python</p>
</div>
<div className="group rounded-xl border p-4 transition-colors border-white/10 bg-black/40 hover:bg-black/50 animate-on-scroll animate-fade-in-left delay-600">
<div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
<svg className="lucide lucide-database w-4 h-4 text-purple-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-sm font-medium">Database</h3>
<p className="text-xs mt-1 text-gray-400">MongoDB, PostgreSQL</p>
</div>
<div className="group rounded-xl border p-4 transition-colors border-white/10 bg-black/40 hover:bg-black/50 animate-on-scroll animate-fade-in-right delay-700">
<div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-3">
<svg className="lucide lucide-smartphone w-4 h-4 text-yellow-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-sm font-medium">Mobile</h3>
<p className="text-xs mt-1 text-gray-400">React Native</p>
</div>
</div>
</div>
<div className="lg:col-span-7 animate-on-scroll animate-fade-in-right delay-400">
<div className="relative">
<img alt="Developer workspace" className="rounded-2xl shadow-2xl w-full" src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent rounded-2xl from-black/20"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16" id="projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6 mb-8">
<div>
<p className="text-sm uppercase tracking-wider text-blue-300/90 animate-on-scroll animate-fade-in-up">Portfolio</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight text-white animate-on-scroll animate-blur-in delay-100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
                        Featured Projects
                    </h2>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-2xl border bg-gradient-to-b overflow-hidden transition-colors cursor-pointer border-white/10 from-gray-950 to-black hover:border-white/20 animate-on-scroll animate-fade-in-up delay-200">
<div className="aspect-video bg-gradient-to-br from-blue-500 relative overflow-hidden to-purple-600">
<img alt="E-commerce Platform" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&amp;h=225&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium mb-2">E-commerce Platform</h3>
<p className="text-sm mb-4 text-gray-400">Modern shopping experience with React, Node.js, and Stripe integration.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-blue-500/20 text-xs rounded-md text-blue-300">React</span>
<span className="px-2 py-1 bg-green-500/20 text-xs rounded-md text-green-300">Node.js</span>
<span className="px-2 py-1 bg-purple-500/20 text-xs rounded-md text-purple-300">MongoDB</span>
</div>
</div>
</div>

<div className="group rounded-2xl border bg-gradient-to-b overflow-hidden transition-colors cursor-pointer border-white/10 from-gray-950 to-black hover:border-white/20 animate-on-scroll animate-fade-in-up delay-400">
<div className="aspect-video bg-gradient-to-br from-emerald-500 relative overflow-hidden to-blue-600">
<img alt="Task Management App" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&amp;h=225&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium mb-2">Task Management App</h3>
<p className="text-sm mb-4 text-gray-400">Collaborative project management with real-time updates.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-blue-500/20 text-xs rounded-md text-blue-300">Next.js</span>
<span className="px-2 py-1 bg-yellow-500/20 text-xs rounded-md text-yellow-300">Firebase</span>
<span className="px-2 py-1 bg-red-500/20 text-xs rounded-md text-red-300">TypeScript</span>
</div>
</div>
</div>

<div className="group rounded-2xl border bg-gradient-to-b overflow-hidden transition-colors cursor-pointer border-white/10 from-gray-950 to-black hover:border-white/20 animate-on-scroll animate-fade-in-up delay-600">
<div className="aspect-video bg-gradient-to-br from-orange-500 relative overflow-hidden to-pink-600">
<img alt="Analytics Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&amp;h=225&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="p-5">
<h3 className="text-lg font-medium mb-2">Analytics Dashboard</h3>
<p className="text-sm mb-4 text-gray-400">Real-time data visualization with interactive charts.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-blue-500/20 text-xs rounded-md text-blue-300">Vue.js</span>
<span className="px-2 py-1 bg-green-500/20 text-xs rounded-md text-green-300">D3.js</span>
<span className="px-2 py-1 bg-purple-500/20 text-xs rounded-md text-purple-300">Python</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-gray-950" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-6 mb-8">
<div>
<p className="text-sm uppercase tracking-wider text-blue-300/90 animate-on-scroll animate-fade-in-up">Services</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight text-white animate-on-scroll animate-blur-in delay-100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
                        What I can help you with
                    </h2>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group rounded-xl border p-6 transition-colors border-white/10 bg-black/40 hover:bg-black/50 animate-on-scroll animate-fade-in-left delay-200">
<div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-code w-5 h-5 text-blue-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2">Web Development</h3>
<p className="text-sm text-gray-400">Modern, responsive websites and web applications using React, Next.js, and cutting-edge technologies.</p>
</div>
<div className="group rounded-xl border p-6 transition-colors border-white/10 bg-black/40 hover:bg-black/50 animate-on-scroll animate-fade-in-up delay-400">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-smartphone w-5 h-5 text-emerald-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2">Mobile Apps</h3>
<p className="text-sm text-gray-400">Cross-platform mobile applications with React Native and native development for iOS and Android.</p>
</div>
<div className="group rounded-xl border p-6 transition-colors border-white/10 bg-black/40 hover:bg-black/50 animate-on-scroll animate-fade-in-right delay-600">
<div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
<svg className="lucide lucide-database w-5 h-5 text-purple-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-lg font-medium mb-2">Backend Development</h3>
<p className="text-sm text-gray-400">Scalable APIs, databases, and server infrastructure using Node.js, Python, and cloud services.</p>
</div>
</div>
</div>
</section>

<section className="py-16" id="contact">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<p className="text-sm uppercase tracking-wider text-blue-300/90 animate-on-scroll animate-fade-in-up">Get In Touch</p>
<h2 className="mt-2 text-3xl lg:text-4xl tracking-tight text-white animate-on-scroll animate-blur-in delay-100" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif', fontWeight: '600'}}>
                    Let's work together
                </h2>
<p className="mt-4 text-lg max-w-2xl mx-auto text-gray-300 animate-on-scroll animate-fade-in-up delay-200">
                    Have a project in mind? I'd love to hear about it. 
                    Let's discuss how we can bring your ideas to life.
                </p>
</div>
<div className="rounded-2xl border bg-gradient-to-b p-8 border-white/10 from-gray-950 to-black animate-on-scroll animate-fade-in-scale delay-300">
<form className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium mb-2">Name</label>
<input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors bg-black/40 border-white/10" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-sm font-medium mb-2">Email</label>
<input className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors bg-black/40 border-white/10" placeholder="your@email.com" type="email"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium mb-2">Project Details</label>
<textarea className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors bg-black/40 border-white/10" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<div className="md:col-span-2">
<button className="w-full px-6 py-3 rounded-lg font-medium transition-all hover:scale-[1.02] flex items-center justify-center gap-2 bg-blue-400 text-black hover:bg-blue-300" type="submit">
                            Send Message
                            <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t bg-black border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div className="md:col-span-2 animate-on-scroll animate-fade-in-left">
<a className="flex items-center gap-2" href="#overview">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 shadow-[inset_0_0_0_2px_rgba(255,255,255,0.06)] to-indigo-600">
<span className="text-sm font-semibold">DS</span>
</span>
<span className="text-lg tracking-tight" style={{fontFamily: '\'Plus Jakarta Sans\', Inter, sans-serif'}}>Debjit Sarkar</span>
</a>
<p className="mt-3 text-sm max-w-md text-gray-400">
                        Full-stack developer specializing in modern web technologies and scalable solutions.
                    </p>
</div>
<div className="animate-on-scroll animate-fade-in-up delay-200">
<h4 className="text-sm font-medium">Services</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="hover:text-gray-200" href="#services">Web Development</a></li>
<li><a className="hover:text-gray-200" href="#services">Mobile Apps</a></li>
<li><a className="hover:text-gray-200" href="#services">Backend APIs</a></li>
</ul>
</div>
<div className="animate-on-scroll animate-fade-in-right delay-400">
<h4 className="text-sm font-medium">Connect</h4>
<ul className="mt-3 space-y-2 text-sm text-gray-400">
<li><a className="flex items-center gap-2 hover:text-gray-200" href="#"><svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> GitHub</a></li>
<li><a className="flex items-center gap-2 hover:text-gray-200" href="#"><svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> LinkedIn</a></li>
<li><a className="flex items-center gap-2 hover:text-gray-200" href="#contact"><svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Email</a></li>
</ul>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500">
                    © <span id="year">2025</span> Debjit Sarkar. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-xs text-gray-500">
<a className="inline-flex items-center gap-1 hover:text-gray-300" href="#overview">
                        Back to top
                        <svg className="lucide lucide-arrow-up w-3 h-3" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
