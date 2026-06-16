import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Theme Toggle
            const toggleBtn = document.getElementById('theme-toggle');
            const html = document.documentElement;
            
            // Check saved theme
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                html.classList.add('dark');
            }

            toggleBtn.addEventListener('click', () => {
                html.classList.toggle('dark');
                localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
            });

            // Mobile Menu
            const menuBtn = document.getElementById('menu-btn');
            const closeMenu = document.getElementById('close-menu');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            function toggleMenu() {
                mobileMenu.classList.toggle('translate-x-full');
                document.body.classList.toggle('overflow-hidden');
            }

            menuBtn.addEventListener('click', toggleMenu);
            closeMenu.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

            // FAQ Accordion
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const btn = item.querySelector('button');
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.faq-icon');

                btn.addEventListener('click', () => {
                    const isOpen = content.style.maxHeight;
                    
                    // Close others
                    faqItems.forEach(otherItem => {
                        otherItem.querySelector('.faq-content').style.maxHeight = null;
                        otherItem.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
                    });

                    if (!isOpen) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        icon.style.transform = 'rotate(180deg)';
                    }
                });
            });

            // Scroll Reveals (Intersection Observer)
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealItems = document.querySelectorAll('.reveal-item, .reveal-on-scroll');
            // Add basic class to items not in hero that just have utility class
            document.querySelectorAll('.reveal-on-scroll').forEach(el => {
                el.classList.add('reveal-item');
            });

            revealItems.forEach(item => observer.observe(item));

            // Mobile Sticky CTA Logic
            const hero = document.querySelector('section'); // First section
            const pricing = document.getElementById('pricing');
            const mobileCta = document.getElementById('mobile-cta');

            window.addEventListener('scroll', () => {
                const heroBottom = hero.getBoundingClientRect().bottom;
                const pricingTop = pricing.getBoundingClientRect().top;
                
                // Show after hero, hide at pricing
                if (heroBottom < 0 && pricingTop > window.innerHeight) {
                    mobileCta.classList.remove('translate-y-full');
                } else {
                    mobileCta.classList.add('translate-y-full');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-[var(--border)] transition-colors duration-300" style={{backgroundColor: 'var(--bg)', backdropFilter: 'blur(10px)'}}>
<div className="wide:max-w-[1248px] md:px-8 md:h-[72px] flex h-16 max-w-[1120px] mr-auto ml-auto pr-5 pl-5 items-center justify-between">

<a className="font-display font-medium text-lg md:text-xl tracking-tight text-[var(--text)]" href="#">
                The Mandala of Stillness
            </a>

<div className="hidden lg:flex items-center gap-8 text-[var(--muted)] text-sm font-medium">
<a className="hover:text-[var(--accent)] transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-[var(--accent)] transition-colors" href="#preview">Preview</a>
<a className="hover:text-[var(--accent)] transition-colors" href="#contents">Contents</a>
<a className="hover:text-[var(--accent)] transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-[var(--accent)] transition-colors" href="#faq">FAQ</a>
<a className="hover:text-[var(--accent)] transition-colors" href="#">Xiao Dong</a>
</div>

<div className="flex items-center gap-4">

<button aria-label="Toggle Dark Mode" className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors p-1" id="theme-toggle">
<iconify-icon className="hidden dark:block" icon="solar:sun-2-linear" width="24"></iconify-icon>
<iconify-icon className="block dark:hidden" icon="solar:moon-linear" width="24"></iconify-icon>
</button>

<a className="hidden sm:flex btn-shimmer relative overflow-hidden items-center gap-2 bg-[var(--accent)] text-[var(--bg)] px-5 h-11 rounded-full font-semibold text-[15px] hover:brightness-105 transition-all active:scale-95 focus:ring-2 ring-[var(--accent)] ring-offset-2 animate-breath" href="https://welegent.gumroad.com/l/Stillness">
<span className="">Buy on Gumroad</span>
</a>

<button className="lg:hidden text-[var(--text)] p-1" id="menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-[var(--bg)] transform translate-x-full transition-transform duration-300 flex flex-col pt-24 px-6" id="mobile-menu">
<a className="mobile-link text-2xl font-display py-4 border-b border-[var(--border)] text-[var(--text)]" href="#benefits">Benefits</a>
<a className="mobile-link text-2xl font-display py-4 border-b border-[var(--border)] text-[var(--text)]" href="#preview">Preview</a>
<a className="mobile-link text-2xl font-display py-4 border-b border-[var(--border)] text-[var(--text)]" href="#contents">Contents</a>
<a className="mobile-link text-2xl font-display py-4 border-b border-[var(--border)] text-[var(--text)]" href="#pricing">Pricing</a>
<a className="mt-8 flex justify-center items-center w-full bg-[var(--accent)] text-[var(--bg)] h-12 rounded-full font-semibold text-lg" href="https://welegent.gumroad.com/l/Stillness">
            Buy on Gumroad
        </a>
<button className="absolute top-5 right-5 text-[var(--text)]" id="close-menu">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>

<section className="md:pt-40 md:pb-24 overflow-hidden pt-32 pb-14 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full mandala-bg -z-10 pointer-events-none"></div>
<div className="max-w-[1120px] wide:max-w-[1248px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 flex flex-col gap-6 md:gap-8 text-center lg:text-left">
<h1 className="reveal-item text-[40px] leading-[1.1] md:text-[64px] md:leading-[1.05] text-[var(--text)] tracking-tight font-display">
                    The Mandala of Stillness
                </h1>
<h2 className="reveal-item text-[28px] leading-[1.2] md:text-[40px] md:leading-[1.15] text-[var(--muted)] font-display" style={{transitionDelay: '100ms'}}>
                    How Tibetan Architecture Creates Calm
                </h2>
<p className="reveal-item text-base md:text-lg leading-relaxed text-[var(--muted)]" style={{transitionDelay: '200ms'}}>
                    A photo-first, watercolor-styled journey that turns Tibetan light, shadow, and sacred space into practical calm — for your nervous system, your home, and your mind.
                </p>
<div className="reveal-item flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2" style={{transitionDelay: '300ms'}}>
<a className="btn-shimmer relative overflow-hidden inline-flex items-center justify-center bg-[var(--accent)] text-[var(--bg)] px-8 h-11 rounded-full font-semibold text-[15px] hover:brightness-105 transition-all active:scale-95 shadow-lg shadow-[var(--accent-glow)]" href="https://welegent.gumroad.com/l/Stillness">
                        Buy on Gumroad
                    </a>
<a className="inline-flex items-center justify-center border border-[var(--border)] text-[var(--text)] px-8 h-11 rounded-full font-medium text-[15px] hover:bg-[var(--surface2)] transition-colors" href="#preview">
                        See Preview
                    </a>
</div>
<p className="reveal-item text-xs text-[var(--muted)] mt-2 opacity-80" style={{transitionDelay: '400ms'}}>
                    Built from original field photography, transformed into a cohesive watercolor style.
                </p>
</div>

<div className="lg:col-span-6 reveal-item" style={{transitionDelay: '500ms'}}>
<div className="relative w-full aspect-[3/4] md:aspect-[4/3] lg:aspect-[3/4] max-w-md lg:max-w-none mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{boxShadow: '0 20px 40px var(--border)'}}>

<div className="flex text-[var(--muted)] flex-col gap-4 border-[var(--border)] bg-center w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a135dea-9952-4548-b5ff-9738d5ec348e_1600w.webp)] bg-cover border pt-8 pr-8 pb-8 pl-8 gap-x-4 gap-y-4 items-center justify-center">
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-24 border-y border-[var(--border)] bg-[var(--surface2)]/50" id="benefits">
<div className="max-w-[1120px] wide:max-w-[1248px] mx-auto px-5 md:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="flex items-center gap-3 bg-[var(--surface)] p-3 px-5 rounded-full border border-[var(--border)] shadow-sm reveal-on-scroll reveal-item">
<iconify-icon className="text-[var(--accent)]" icon="solar:soundwave-square-linear" width="20"></iconify-icon>
<span className="text-[var(--text)] text-sm font-medium">Less noise</span>
</div>

<div className="flex items-center gap-3 bg-[var(--surface)] p-3 px-5 rounded-full border border-[var(--border)] shadow-sm reveal-on-scroll reveal-item">
<iconify-icon className="text-[var(--accent)]" icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
<span className="text-[var(--text)] text-sm font-medium">More grounding</span>
</div>

<div className="flex items-center gap-3 bg-[var(--surface)] p-3 px-5 rounded-full border border-[var(--border)] shadow-sm reveal-on-scroll reveal-item">
<iconify-icon className="text-[var(--accent)]" icon="solar:target-linear" width="20"></iconify-icon>
<span className="text-[var(--text)] text-sm font-medium">A clear center</span>
</div>

<div className="flex items-center gap-3 bg-[var(--surface)] p-3 px-5 rounded-full border border-[var(--border)] shadow-sm reveal-on-scroll reveal-item">
<iconify-icon className="text-[var(--accent)]" icon="solar:hourglass-line-linear" width="20"></iconify-icon>
<span className="text-[var(--text)] text-sm font-medium">Gentle acceptance</span>
</div>

<div className="flex items-center gap-3 bg-[var(--surface)] p-3 px-5 rounded-full border border-[var(--border)] shadow-sm reveal-on-scroll reveal-item">
<iconify-icon className="text-[var(--accent)]" icon="solar:walking-round-linear" width="20"></iconify-icon>
<span className="text-[var(--text)] text-sm font-medium">Calm in motion</span>
</div>

<div className="flex items-center gap-3 bg-[var(--surface)] p-3 px-5 rounded-full border border-[var(--border)] shadow-sm reveal-on-scroll reveal-item">
<iconify-icon className="text-[var(--accent)]" icon="solar:mountains-linear" width="20"></iconify-icon>
<span className="text-[var(--text)] text-sm font-medium">Wider perspective</span>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-24">
<div className="max-w-[1120px] wide:max-w-[1248px] mx-auto px-5 md:px-8">
<div className="mb-12 md:mb-16">
<h2 className="font-display text-3xl md:text-[40px] text-[var(--text)] mb-4 tracking-tight reveal-on-scroll reveal-item">What's inside the journey</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<article className="bg-[var(--surface)] p-6 md:p-8 rounded-2xl border border-[var(--border)] hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg reveal-on-scroll reveal-item">
<div className="w-10 h-10 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[var(--accent)] mb-6">
<iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display text-xl text-[var(--text)] mb-3">Photo-first PDF</h3>
<p className="text-[var(--muted)] text-sm leading-relaxed">Watercolor-styled images from Ganzi, Aba, and Lhasa with minimal text to set a deep mood.</p>
</article>

<article className="bg-[var(--surface)] p-6 md:p-8 rounded-2xl border border-[var(--border)] hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg reveal-on-scroll reveal-item" style={{transitionDelay: '100ms'}}>
<div className="w-10 h-10 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[var(--accent)] mb-6">
<iconify-icon icon="solar:notebook-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display text-xl text-[var(--text)] mb-3">6 Chapters</h3>
<p className="text-[var(--muted)] text-sm leading-relaxed">Translating sacred space into universal psychological language like boundaries, shadow, and awe.</p>
</article>

<article className="bg-[var(--surface)] p-6 md:p-8 rounded-2xl border border-[var(--border)] hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg reveal-on-scroll reveal-item" style={{transitionDelay: '200ms'}}>
<div className="w-10 h-10 rounded-full bg-[var(--surface2)] flex items-center justify-center text-[var(--accent)] mb-6">
<iconify-icon icon="solar:cup-hot-linear" width="20"></iconify-icon>
</div>
<h3 className="font-display text-xl text-[var(--text)] mb-3">Micro-practices</h3>
<p className="text-[var(--muted)] text-sm leading-relaxed">Actionable 2–10 minute habits you can use immediately to ground yourself.</p>
</article>
</div>
</div>
</section>

<section className="md:py-24 pt-14 pb-14" id="preview">
<div className="max-w-[1120px] wide:max-w-[1248px] mx-auto px-5 md:px-8">
<h2 className="font-display text-3xl md:text-[40px] text-[var(--text)] mb-12 tracking-tight reveal-on-scroll reveal-item">A glimpse of the stillness</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="group reveal-on-scroll reveal-item">
<div className="aspect-[4/5] w-full bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden relative mb-3 hover:-translate-y-1 transition-transform duration-300">
<div className="flex text-[var(--muted)] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7071ba8-5603-4b88-8880-d2c41836393c_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-xs uppercase tracking-widest">Preview 4:5</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent opacity-0 dark:opacity-100 pointer-events-none"></div>
</div>
<p className="text-xs text-[var(--muted)]">Thick walls, soft hearts</p>
</div>

<div className="group reveal-on-scroll reveal-item" style={{transitionDelay: '100ms'}}>
<div className="aspect-[4/5] w-full bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden relative mb-3 hover:-translate-y-1 transition-transform duration-300">
<div className="flex text-[var(--muted)] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/989ef56d-4328-4570-87b0-d01c36ac0999_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-xs uppercase tracking-widest">Preview 4:5</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent opacity-0 dark:opacity-100 pointer-events-none"></div>
</div>
<p className="text-xs text-[var(--muted)]">Light entering the temple</p>
</div>

<div className="group reveal-on-scroll reveal-item" style={{transitionDelay: '200ms'}}>
<div className="aspect-[4/5] w-full bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden relative mb-3 hover:-translate-y-1 transition-transform duration-300">
<div className="flex text-[var(--muted)] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df485151-3ef6-4254-bb26-c9ea4110f9df_800w.jpg)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-xs uppercase tracking-widest">Preview 4:5</span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent opacity-0 dark:opacity-100 pointer-events-none"></div>
</div>
<p className="text-xs text-[var(--muted)]">The rhythm of the corridor</p>
</div>
</div>
<div className="mt-8 text-center">
<a className="text-sm text-[var(--muted)] border-b border-transparent hover:border-[var(--muted)] transition-colors" href="https://welegent.gumroad.com/l/Stillness">Download PDF Sample</a>
</div>
</div>
</section>

<section className="py-14 md:py-24" id="contents">
<div className="max-w-[720px] mx-auto px-5 md:px-8">
<h2 className="font-display text-3xl md:text-[40px] text-[var(--text)] mb-12 tracking-tight text-center reveal-on-scroll reveal-item">Table of Contents</h2>
<div className="space-y-8">

<div className="flex gap-6 reveal-on-scroll reveal-item">
<div className="w-[2px] bg-[var(--accent-glow)] shrink-0 h-auto rounded-full"></div>
<div>
<h4 className="font-display text-xl text-[var(--text)] mb-1">Chapter 1 — Grounded</h4>
<p className="text-sm text-[var(--muted)]">Thick Walls, Soft Hearts (boundaries &amp; safety)</p>
</div>
</div>

<div className="flex gap-6 reveal-on-scroll reveal-item">
<div className="w-[2px] bg-[var(--accent-glow)] shrink-0 h-auto rounded-full"></div>
<div>
<h4 className="font-display text-xl text-[var(--text)] mb-1">Chapter 2 — A Center Holds</h4>
<p className="text-sm text-[var(--muted)]">Mandala as a Map for Calm (order &amp; integration)</p>
</div>
</div>

<div className="flex gap-6 reveal-on-scroll reveal-item">
<div className="w-[2px] bg-[var(--accent-glow)] shrink-0 h-auto rounded-full"></div>
<div>
<h4 className="font-display text-xl text-[var(--text)] mb-1">Chapter 3 — Less Light, More Clarity</h4>
<p className="text-sm text-[var(--muted)]">Shadow as deep rest</p>
</div>
</div>

<div className="flex gap-6 reveal-on-scroll reveal-item">
<div className="w-[2px] bg-[var(--accent-glow)] shrink-0 h-auto rounded-full"></div>
<div>
<h4 className="font-display text-xl text-[var(--text)] mb-1">Chapter 4 — Impermanence</h4>
<p className="text-sm text-[var(--muted)]">When Materials Teach the Heart (acceptance &amp; time)</p>
</div>
</div>

<div className="flex gap-6 reveal-on-scroll reveal-item">
<div className="w-[2px] bg-[var(--accent-glow)] shrink-0 h-auto rounded-full"></div>
<div>
<h4 className="font-display text-xl text-[var(--text)] mb-1">Chapter 5 — The Circle That Calms</h4>
<p className="text-sm text-[var(--muted)]">Walking as Meditation (rhythm &amp; ritual)</p>
</div>
</div>

<div className="flex gap-6 reveal-on-scroll reveal-item">
<div className="w-[2px] bg-[var(--accent-glow)] shrink-0 h-auto rounded-full"></div>
<div>
<h4 className="font-display text-xl text-[var(--text)] mb-1">Chapter 6 — Awe</h4>
<p className="text-sm text-[var(--muted)]">When the Horizon Expands, the Mind Softens</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-24 bg-[var(--surface2)]/30 border-y border-[var(--border)]">
<div className="max-w-[1120px] wide:max-w-[1248px] mx-auto px-5 md:px-8">
<h2 className="font-display text-3xl md:text-[40px] text-[var(--text)] mb-12 tracking-tight reveal-on-scroll reveal-item">Designed for your schedule</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] reveal-on-scroll reveal-item">
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold tracking-wider text-[var(--accent)] uppercase">Quick Mode</span>
<span className="text-xs text-[var(--muted)]">2-3 min</span>
</div>
<p className="text-sm text-[var(--text)] leading-relaxed">Open any chapter. Stare at the full-page image. Do the first micro-practice. Read one quote.</p>
</div>

<div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] reveal-on-scroll reveal-item" style={{transitionDelay: '100ms'}}>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold tracking-wider text-[var(--accent2)] uppercase">Night Mode</span>
<span className="text-xs text-[var(--muted)]">5-10 min</span>
</div>
<p className="text-sm text-[var(--text)] leading-relaxed">Dim the room. Try the "sensory diet" or "one-beam meditation". Read one classic line.</p>
</div>

<div className="bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border)] reveal-on-scroll reveal-item" style={{transitionDelay: '200ms'}}>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-semibold tracking-wider text-[var(--success)] uppercase">Deep Mode</span>
<span className="text-xs text-[var(--muted)]">15-25 min</span>
</div>
<p className="text-sm text-[var(--text)] leading-relaxed">Read one chapter. Do two practices. Journal: "What do I need today — boundaries, center, or awe?"</p>
</div>
</div>
</div>
</section>

<section className="py-14 md:py-24">
<div className="max-w-[1120px] mx-auto px-5 md:px-8">
<div className="bg-[var(--accent2)]/10 rounded-3xl p-8 md:p-12 border border-[var(--border)] reveal-on-scroll reveal-item">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="font-display text-2xl md:text-3xl text-[var(--text)] mb-4">Included Bonuses</h2>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-[var(--accent)] mt-1" icon="solar:wallpaper-linear" width="20"></iconify-icon>
<div>
<span className="text-xs text-[var(--muted)]">High-res desktops &amp; mobile backgrounds.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[var(--accent)] mt-1" icon="solar:card-2-linear" width="20"></iconify-icon>
<div>
<span className="text-xs text-[var(--muted)]">Printable reminders for Boundaries, Center, Rhythm, etc.</span>
</div>
</li>
</ul>
</div>
<div className="grid grid-cols-2 gap-4 opacity-80">

<div className="aspect-[3/4] border-[var(--border)] flex text-[var(--muted)] text-xs bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a689cc36-b928-42c6-9c2e-eeffd965458b_800w.webp)] bg-cover bg-center border rounded-xl items-center justify-center">Card 1</div>
<div className="aspect-[3/4] border-[var(--border)] flex text-[var(--muted)] text-xs bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab64d72a-52f7-4cec-ad8c-06d178674998_800w.webp)] bg-cover bg-center border rounded-xl mt-8 items-center justify-center">Card 2</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 pt-14 pb-14" id="pricing">
<div className="max-w-[1120px] wide:max-w-[1248px] mx-auto px-5 md:px-8">
<h2 className="font-display text-3xl md:text-[40px] text-[var(--text)] mb-12 tracking-tight text-center reveal-on-scroll reveal-item">
            Choose your stillness</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

<div className="p-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] min-h-[420px] flex flex-col reveal-on-scroll reveal-item">
<h3 className="font-display text-xl text-[var(--text)]">Basic</h3>
<div className="mt-4 mb-6">
<span className="md:text-4xl text-[var(--text)] text-3xl font-display">$19.99</span>
</div>
<p className="text-sm text-[var(--muted)] mb-8 h-12">Just the core book in high-resolution PDF format.</p>
<a className="flex items-center justify-center border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface2)] transition-colors text-sm font-medium w-full h-11 border rounded-full mb-8" href="https://welegent.gumroad.com/l/Stillness">
                    Buy Basic
                </a>
<ul className="space-y-3 text-sm text-[var(--muted)] mt-auto">
<li className="flex gap-2"><iconify-icon className="text-[var(--accent)]" icon="solar:check-circle-linear"></iconify-icon> The Book (PDF)</li>
</ul>
</div>

<div className="border-[var(--accent)] min-h-[420px] flex flex-col z-10 reveal-on-scroll reveal-item border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[var(--border)] scale-105" style={{transitionDelay: '100ms'}}>
<div className="-translate-x-1/2 -translate-y-1/2 text-[var(--bg)] uppercase text-xs font-semibold tracking-wide rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-0 left-1/2">
        Most Popular</div>
<h3 className="font-display text-xl text-[var(--text)]">Plus</h3>
<div className="mt-4 mb-6">
<span className="md:text-4xl text-[var(--text)] text-3xl font-display">$45</span>
</div>
<p className="text-[var(--muted)] text-sm h-12 mb-8">The complete visual experience for your devices.</p>
<a className="btn-shimmer relative overflow-hidden w-full h-11 flex items-center justify-center rounded-full bg-[var(--accent)] text-[var(--bg)] font-semibold text-sm hover:brightness-105 transition-all mb-8" href="https://welegent.gumroad.com/l/Mandala">
        Buy Plus
    </a>
<ul className="space-y-3 text-sm text-[var(--muted)] mt-auto">
<li className="flex gap-2"><iconify-icon className="text-[var(--accent)]" icon="solar:check-circle-linear"></iconify-icon> The Book (PDF)</li>
<li className="flex gap-2"><iconify-icon className="text-[var(--accent)]" icon="solar:check-circle-linear"></iconify-icon> Wallpaper Pack</li>
</ul>
</div>

<div className="border-[var(--border)] min-h-[420px] flex flex-col reveal-on-scroll reveal-item border rounded-2xl pt-8 pr-8 pb-8 pl-8" style={{transitionDelay: '200ms'}}>
<h3 className="text-[var(--text)] text-xl font-display">Image Collector</h3>
<div className="mt-4 mb-6">
<span className="md:text-4xl text-[var(--text)] text-3xl font-display">$29.99</span>
</div>
<p className="text-sm text-[var(--muted)] mb-8 h-12">The full toolkit for bringing calm into your reality.
                </p>
<a className="flex items-center justify-center border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface2)] transition-colors text-sm font-medium w-full h-11 border rounded-full mb-8" href="https://welegent.gumroad.com/l/image">
                    Buy Collector
                </a>
<ul className="space-y-3 text-sm text-[var(--muted)] mt-auto">
<li className="flex gap-2 gap-x-2 gap-y-2"><iconify-icon className="text-[var(--accent)]" icon="solar:check-circle-linear"></iconify-icon>All Images In Book</li>
<li className="flex gap-2 gap-x-2 gap-y-2"><iconify-icon className="text-[var(--accent)]" icon="solar:check-circle-linear"></iconify-icon> Return Cards</li>
</ul>
</div>
</div>
<p className="text-center text-xs text-[var(--muted)] mt-8">Instant download • Personal use • High-res PDF</p>
</div>
</section>

<section className="md:py-24 border-y border-[var(--border)] pt-14 pb-14" id="faq">
<div className="max-w-[720px] mx-auto px-5 md:px-8">
<h2 className="font-display text-3xl md:text-[40px] text-[var(--text)] mb-12 tracking-tight text-center reveal-on-scroll reveal-item">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="faq-item border border-[var(--border)] rounded-xl bg-[var(--surface)] overflow-hidden reveal-on-scroll reveal-item">
<button className="w-full flex items-center justify-between p-5 text-left text-[var(--text)] font-medium hover:bg-[var(--surface2)]/50 transition-colors">
<span>Is this an academic book?</span>
<iconify-icon className="faq-icon transition-transform duration-300" height="20" icon="solar:alt-arrow-down-linear" style={{color: 'rgb(20, 20, 20)'}} width="20"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<div className="p-5 pt-0 text-sm text-[var(--muted)] leading-relaxed max-w-[65ch]">
                            No. While based on real architectural principles, the focus is emotional, visual, and practical. It's designed to be felt, not studied.
                        </div>
</div>
</div>

<div className="faq-item border border-[var(--border)] rounded-xl bg-[var(--surface)] overflow-hidden reveal-on-scroll reveal-item">
<button className="w-full flex items-center justify-between p-5 text-left text-[var(--text)] font-medium hover:bg-[var(--surface2)]/50 transition-colors">
<span>Do I need to be Buddhist?</span>
<iconify-icon className="faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<div className="p-5 pt-0 text-sm text-[var(--muted)] leading-relaxed max-w-[65ch]">
                            No. The book uses universal psychological language. We translate concepts like "Mandala" into order and center, accessible to anyone.
                        </div>
</div>
</div>

<div className="faq-item border border-[var(--border)] rounded-xl bg-[var(--surface)] overflow-hidden reveal-on-scroll reveal-item">
<button className="w-full flex items-center justify-between p-5 text-left text-[var(--text)] font-medium hover:bg-[var(--surface2)]/50 transition-colors">
<span>Can I print it?</span>
<iconify-icon className="faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<div className="p-5 pt-0 text-sm text-[var(--muted)] leading-relaxed max-w-[65ch]">
                            Yes. The PDF is high-resolution. You can print it for personal use to enjoy away from screens.
                        </div>
</div>
</div>

<div className="faq-item border border-[var(--border)] rounded-xl bg-[var(--surface)] overflow-hidden reveal-on-scroll reveal-item">
<button className="w-full flex items-center justify-between p-5 text-left text-[var(--text)] font-medium hover:bg-[var(--surface2)]/50 transition-colors">
<span>Is it a travel guide?</span>
<iconify-icon className="faq-icon transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300">
<div className="p-5 pt-0 text-sm text-[var(--muted)] leading-relaxed max-w-[65ch]">
                            There are no itineraries or hotel recommendations. It treats these regions as spaces of calm, not destinations to conquer.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[var(--surface2)] -z-20"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full mandala-bg -z-10 opacity-50"></div>
<div className="max-w-[600px] mx-auto px-6 text-center">
<h2 className="font-display text-3xl md:text-4xl text-[var(--text)] mb-6 leading-tight reveal-on-scroll reveal-item">
                This book won’t tell you how to win at life. It will simply offer a place to return.
            </h2>
<p className="text-[var(--muted)] mb-10 text-lg reveal-on-scroll reveal-item">
                Through light, shadow, order, and the quiet intelligence of space.
            </p>
<div className="reveal-on-scroll reveal-item">
<a className="btn-shimmer relative overflow-hidden inline-flex items-center justify-center bg-[var(--accent)] text-[var(--bg)] px-10 h-12 rounded-full font-semibold text-lg hover:brightness-105 transition-all shadow-xl shadow-[var(--accent-glow)]" href="https://welegent.gumroad.com/l/Stillness">
                    Buy now to come back to stillness
                </a>
</div>
</div>
</section>

<footer className="py-12 border-t border-[var(--border)] bg-[var(--bg)]">
<div className="max-w-[1120px] wide:max-w-[1248px] mx-auto px-5 md:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="font-display font-medium text-[var(--text)]">The Mandala of Stillness</span>
<p className="text-xs text-[var(--muted)] mt-2">© 2026 aura.build. All rights reserved.</p>
</div>
<div className="flex gap-6 text-sm text-[var(--muted)]">
<a className="hover:text-[var(--accent)] transition-colors" href="https://welegent.gumroad.com/l/Stillness">Gumroad</a>
<a className="hover:text-[var(--accent)] transition-colors" href="#">Contact</a>
</div>
</div>
<div className="text-center md:text-right mt-6 md:mt-2">
<p className="text-[10px] text-[var(--muted)] opacity-60">For personal use only. Please don’t redistribute.</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 w-full bg-[var(--surface)] border-t border-[var(--border)] p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] z-40 transform transition-transform duration-300 md:hidden" id="mobile-cta">
<a className="flex items-center justify-center w-full bg-[var(--accent)] text-[var(--bg)] h-12 rounded-full font-semibold shadow-lg" href="https://welegent.gumroad.com/l/Stillness">
            Buy on Gumroad
        </a>
</div>



    </>
  );
}
