import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Theme Toggle ---
            const htmlTag = document.documentElement;
            const toggleBtns = [document.getElementById('themeToggle'), document.getElementById('themeToggleMobile')];
            
            // Check preference
            if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                htmlTag.classList.add('light');
                htmlTag.classList.remove('dark');
            } else {
                htmlTag.classList.add('dark');
                htmlTag.classList.remove('light');
            }

            toggleBtns.forEach(btn => {
                if(btn) {
                    btn.addEventListener('click', () => {
                        htmlTag.classList.toggle('light');
                        htmlTag.classList.toggle('dark');
                        localStorage.theme = htmlTag.classList.contains('light') ? 'light' : 'dark';
                    });
                }
            });

            // --- Mobile Menu Toggle ---
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileMenu = document.getElementById('mobileMenu');
            
            if(mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }

            // Close mobile menu on link click
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });

            // --- Hero Headline Staggered Animation ---
            // Respects prefers-reduced-motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            
            if (!prefersReducedMotion) {
                const heroHeadline = document.getElementById('heroHeadline');
                if (heroHeadline) {
                    const text = heroHeadline.innerHTML;
                    // Split by <br> or spaces, keeping HTML tags intact
                    const splitByBr = text.split('<br>');
                    let newHTML = '';
                    
                    splitByBr.forEach((line, index) => {
                        const words = line.trim().split(' ');
                        words.forEach((word, wordIndex) => {
                            if(word.length > 0) {
                                // Calculate staggered delay
                                const delay = (index * 4 + wordIndex) * 80;
                                newHTML += `<span class="hero-word" style="animation-delay: ${delay}ms">${word}</span> `;
                            }
                        });
                        if (index < splitByBr.length - 1) {
                            newHTML += '<br>';
                        }
                    });
                    heroHeadline.innerHTML = newHTML;
                }
            }

            // --- Scroll Animations (Intersection Observer) ---
            if (!prefersReducedMotion) {
                const observerOptions = {
                    root: null,
                    rootMargin: '0px 0px -10% 0px',
                    threshold: 0.1
                };

                const observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target); // Run once
                        }
                    });
                }, observerOptions);

                document.querySelectorAll('.fade-in-up').forEach(el => {
                    observer.observe(el);
                });
            } else {
                // If reduced motion, show immediately
                document.querySelectorAll('.fade-in-up').forEach(el => {
                    el.style.opacity = '1';
                    el.style.transform = 'none';
                    el.style.transition = 'none';
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg)]/90 backdrop-blur-md border-b border-[var(--border)] transition-colors duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-[5rem]">

<div className="flex-shrink-0">
<a className="font-heading font-semibold text-[clamp(1.25rem,2vw,1.5rem)] tracking-tight text-[var(--text-pri)] flex items-center gap-2" href="#">
<iconify-icon className="text-[var(--accent)]" icon="solar:settings-bold"></iconify-icon>
                        IMM
                    </a>
</div>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)] hover:underline decoration-[var(--accent)] decoration-2 underline-offset-8 transition-all" href="#services">Services</a>
<a className="text-sm font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)] hover:underline decoration-[var(--accent)] decoration-2 underline-offset-8 transition-all" href="#capabilities">Capabilities</a>
<a className="text-sm font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)] hover:underline decoration-[var(--accent)] decoration-2 underline-offset-8 transition-all" href="#quality">Quality</a>
<a className="text-sm font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)] hover:underline decoration-[var(--accent)] decoration-2 underline-offset-8 transition-all" href="#training">Training</a>
<a className="text-sm font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)] hover:underline decoration-[var(--accent)] decoration-2 underline-offset-8 transition-all" href="#experience">Experience</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<button aria-label="Toggle Theme" className="p-2 text-[var(--text-sec)] hover:text-[var(--accent)] transition-colors" id="themeToggle">
<iconify-icon className="text-xl hidden dark:block" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl block dark:hidden" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</button>
<a className="text-sm font-medium text-[var(--text-pri)] hover:text-[var(--accent)] transition-colors" href="tel:928-965-6524">928-965-6524</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 bg-[var(--accent)] text-[var(--graphite)] text-sm font-medium rounded-[4px] hover:scale-[1.02] hover:bg-[var(--accent-hover)] transition-all duration-200" href="#contact">
                        Request a Quote
                    </a>
</div>

<div className="flex md:hidden items-center gap-4">
<button aria-label="Toggle Theme" className="p-2 text-[var(--text-sec)]" id="themeToggleMobile">
<iconify-icon className="text-xl hidden dark:block" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl block dark:hidden" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-[var(--text-pri)] p-2" id="mobileMenuBtn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-[var(--surface)] border-b border-[var(--border)] px-4 pt-2 pb-6 space-y-4" id="mobileMenu">
<a className="block text-base font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)]" href="#services">Services</a>
<a className="block text-base font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)]" href="#capabilities">Capabilities</a>
<a className="block text-base font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)]" href="#quality">Quality</a>
<a className="block text-base font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)]" href="#training">Training</a>
<a className="block text-base font-medium text-[var(--text-sec)] hover:text-[var(--text-pri)]" href="#experience">Experience</a>
<div className="pt-4 border-t border-[var(--border)] flex flex-col gap-3">
<a className="block text-base font-medium text-[var(--text-pri)]" href="tel:928-965-6524">Call: 928-965-6524</a>
<a className="inline-flex items-center justify-center px-4 py-3 bg-[var(--accent)] text-[var(--graphite)] text-base font-medium rounded-[4px]" href="#contact">
                    Request a Quote
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-[8rem] pb-16 lg:pt-[12rem] lg:pb-24 overflow-hidden border-b border-[var(--border)]">

<div className="absolute inset-0 z-0 bg-[var(--bg)]">
<img alt="Heavy Mining Equipment" className="w-full h-full object-cover opacity-20 dark:opacity-30 mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-[var(--bg)]/40"></div>
<div className="absolute inset-0 bg-diagonal-pattern"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-4xl">
<p className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold tracking-[0.18em] uppercase text-[var(--text-sec)] mb-6 flex items-center gap-3">
<span className="w-8 h-[2px] bg-[var(--accent)]"></span>
                        Independent Mine Maintenance
                    </p>
<h1 className="font-heading font-bold text-[clamp(2.625rem,7vw,5.25rem)] leading-[0.95] tracking-tight text-[var(--text-pri)] mb-8 uppercase" id="heroHeadline">
                        Less Downtime.<br/>More Production.
                    </h1>
<p className="text-[clamp(1rem,1.5vw,1.125rem)] text-[var(--text-sec)] font-normal leading-relaxed max-w-2xl mb-10 fade-in-up">
                        Independent Mine Maintenance provides field service, fabrication, welding, inspections, rebuilds, and precision machining for mining and construction operations across Arizona, Nevada, and New Mexico.
                    </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 fade-in-up" style={{transitionDelay: '200ms'}}>
<a className="inline-flex items-center justify-center px-8 py-4 bg-[var(--accent)] text-[var(--graphite)] text-base font-medium rounded-[4px] hover:scale-[1.02] hover:bg-[var(--accent-hover)] transition-all duration-200" href="#contact">
                            Request a Quote
                        </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[var(--text-pri)] border border-[var(--border)] text-base font-medium rounded-[4px] hover:scale-[1.02] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 gap-2" href="tel:928-965-6524">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                            Call 928-965-6524
                        </a>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] border border-[var(--border)] rounded-[4px] overflow-hidden mt-16 fade-in-up" style={{transitionDelay: '400ms'}}>
<div className="bg-[var(--surface)] p-6">
<div className="text-[var(--text-sec)] text-xs font-semibold uppercase tracking-widest mb-2 border-b border-[var(--accent)] pb-1 inline-block">Founded</div>
<div className="font-heading text-2xl font-semibold text-[var(--text-pri)] mt-2">2012</div>
</div>
<div className="bg-[var(--surface)] p-6">
<div className="text-[var(--text-sec)] text-xs font-semibold uppercase tracking-widest mb-2 border-b border-[var(--accent)] pb-1 inline-block">Technicians</div>
<div className="font-heading text-2xl font-semibold text-[var(--text-pri)] mt-2">11 Specialized</div>
</div>
<div className="bg-[var(--surface)] p-6">
<div className="text-[var(--text-sec)] text-xs font-semibold uppercase tracking-widest mb-2 border-b border-[var(--accent)] pb-1 inline-block">Structure</div>
<div className="font-heading text-2xl font-semibold text-[var(--text-pri)] mt-2">Employee-Owned</div>
</div>
<div className="bg-[var(--surface)] p-6">
<div className="text-[var(--text-sec)] text-xs font-semibold uppercase tracking-widest mb-2 border-b border-[var(--accent)] pb-1 inline-block">Service Area</div>
<div className="font-heading text-2xl font-semibold text-[var(--text-pri)] mt-2">AZ / NV / NM</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[var(--bg)] border-b border-[var(--border)]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="fade-in-up">
<p className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold tracking-[0.18em] uppercase text-[var(--text-sec)] mb-4">About IMM</p>
<h2 className="font-heading font-semibold text-[clamp(1.875rem,4vw,3.25rem)] leading-[1] tracking-tight text-[var(--text-pri)] mb-6 uppercase">
                            Built for the <span className="text-[var(--accent)]">harshest</span> conditions.
                        </h2>
<div className="space-y-6 text-[var(--text-sec)] text-[clamp(1rem,1vw,1.125rem)] leading-relaxed">
<p>Founded in 2012 in Arizona, Independent Mine Maintenance operates on an employee-owned basis. We understand that in heavy industry, ownership drives accountability, and accountability drives results.</p>
<p>Our specialized team is capable of executing complete equipment rebuilds, managing large plant outages, delivering responsive field service, and performing precise field machining. We don't just fix equipment; we engineer reliability into it.</p>
<div className="p-6 border-l-2 border-[var(--accent)] bg-[var(--surface)] mt-8">
<p className="text-[var(--text-pri)] font-medium">Our core promise is simple: engineered reliability, reduced downtime, improved machine availability, improved production, and lower operating costs.</p>
</div>
</div>
</div>
<div className="relative h-[25rem] lg:h-[35rem] w-full rounded-[4px] overflow-hidden border border-[var(--border)] fade-in-up">
<img alt="Welding Sparks" className="w-full h-full object-cover mix-blend-luminosity opacity-80" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 border-[4px] border-[var(--bg)]"></div>
<div className="absolute inset-0 border border-[var(--border)]"></div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[var(--surface-alt)] border-b border-[var(--border)]" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 fade-in-up">
<p className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold tracking-[0.18em] uppercase text-[var(--text-sec)] mb-4">Core Capabilities</p>
<h2 className="font-heading font-semibold text-[clamp(1.875rem,4vw,3.25rem)] leading-[1] tracking-tight text-[var(--text-pri)] uppercase">
                        Industrial <span className="text-[var(--accent)]">Services</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[var(--surface)] border border-[var(--border)] rounded-[4px] p-8 hover:border-[var(--accent)] transition-colors duration-300 flex flex-col fade-in-up group">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:truck-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-[clamp(1.25rem,1.5vw,1.5rem)] text-[var(--text-pri)] mb-4 uppercase tracking-tight">Field Service</h3>
<p className="text-[var(--text-sec)] text-sm leading-relaxed mt-auto">Comprehensive field support for diesel engine diagnosis, hydraulic systems, air systems, and emergency breakdown recovery.</p>
</div>

<div className="bg-[var(--surface)] border border-[var(--border)] rounded-[4px] p-8 hover:border-[var(--accent)] transition-colors duration-300 flex flex-col fade-in-up group">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:spanner-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-[clamp(1.25rem,1.5vw,1.5rem)] text-[var(--text-pri)] mb-4 uppercase tracking-tight">Equipment Rebuilds</h3>
<p className="text-[var(--text-sec)] text-sm leading-relaxed mt-auto">Complete overhauls for hydraulic and electric mining shovels, rotary blasthole drills, sonic drills, and top hammer drills.</p>
</div>

<div className="bg-[var(--surface)] border border-[var(--border)] rounded-[4px] p-8 hover:border-[var(--accent)] transition-colors duration-300 flex flex-col fade-in-up group">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:layers-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-[clamp(1.25rem,1.5vw,1.5rem)] text-[var(--text-pri)] mb-4 uppercase tracking-tight">Crushing &amp; Conveyor</h3>
<p className="text-[var(--text-sec)] text-sm leading-relaxed mt-auto">Maintenance and repair of crushing systems, conveyors, crusher chutes, jaw crushers, and cone crushers.</p>
</div>

<div className="bg-[var(--surface)] border border-[var(--border)] rounded-[4px] p-8 hover:border-[var(--accent)] transition-colors duration-300 flex flex-col fade-in-up group">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:flame-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-[clamp(1.25rem,1.5vw,1.5rem)] text-[var(--text-pri)] mb-4 uppercase tracking-tight">Welding &amp; Fabrication</h3>
<p className="text-[var(--text-sec)] text-sm leading-relaxed mt-auto">On-site welding, stainless steel and aluminum repair, vehicle frame repair, tank repair, and structure modifications.</p>
</div>

<div className="bg-[var(--surface)] border border-[var(--border)] rounded-[4px] p-8 hover:border-[var(--accent)] transition-colors duration-300 flex flex-col fade-in-up group">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:ruler-cross-pen-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-[clamp(1.25rem,1.5vw,1.5rem)] text-[var(--text-pri)] mb-4 uppercase tracking-tight">Precision Machining</h3>
<p className="text-[var(--text-sec)] text-sm leading-relaxed mt-auto">Expert on-site field machining including precision line boring from 1.5 inch up to 12 inch diameters.</p>
</div>

<div className="bg-[var(--surface)] border border-[var(--border)] rounded-[4px] p-8 hover:border-[var(--accent)] transition-colors duration-300 flex flex-col fade-in-up group">
<iconify-icon className="text-3xl text-[var(--accent)] mb-6" icon="solar:clipboard-check-linear"></iconify-icon>
<h3 className="font-heading font-semibold text-[clamp(1.25rem,1.5vw,1.5rem)] text-[var(--text-pri)] mb-4 uppercase tracking-tight">Preventative Maint.</h3>
<p className="text-[var(--text-sec)] text-sm leading-relaxed mt-auto">Scheduled inspections, liner package installations, and comprehensive equipment or structure relocations.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[var(--bg)] border-b border-[var(--border)]" id="capabilities">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 fade-in-up">
<p className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold tracking-[0.18em] uppercase text-[var(--text-sec)] mb-4">Technical Specs</p>
<h2 className="font-heading font-semibold text-[clamp(1.875rem,4vw,3.25rem)] leading-[1] tracking-tight text-[var(--text-pri)] mb-6 uppercase">
                            Equipment &amp; <span className="text-[var(--accent)]">Experience</span>
</h2>
<p className="text-[var(--text-sec)] text-base mb-8">Our technicians possess deep OEM-level familiarity with the critical assets that drive mine site production.</p>
</div>
<div className="lg:col-span-8 flex flex-col gap-8 fade-in-up">

<div className="border border-[var(--border)] rounded-[4px] bg-[var(--surface)] overflow-hidden">
<div className="border-b border-[var(--border)] bg-[var(--surface-alt)] px-6 py-4 flex items-center justify-between">
<span className="font-heading font-semibold uppercase text-[var(--text-pri)] tracking-wide">Equipment Expertise</span>
<iconify-icon className="text-[var(--text-sec)] text-xl" icon="solar:settings-linear"></iconify-icon>
</div>
<div className="p-6">
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
<li className="flex items-start gap-3 text-[var(--text-sec)] text-sm">
<iconify-icon className="text-[var(--accent)] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        Hydraulic Mining Shovels
                                    </li>
<li className="flex items-start gap-3 text-[var(--text-sec)] text-sm">
<iconify-icon className="text-[var(--accent)] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        Electric Mining Shovels
                                    </li>
<li className="flex items-start gap-3 text-[var(--text-sec)] text-sm">
<iconify-icon className="text-[var(--accent)] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        Rotary Blasthole Drills
                                    </li>
<li className="flex items-start gap-3 text-[var(--text-sec)] text-sm">
<iconify-icon className="text-[var(--accent)] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        Sonic &amp; Top Hammer Drills
                                    </li>
<li className="flex items-start gap-3 text-[var(--text-sec)] text-sm">
<iconify-icon className="text-[var(--accent)] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        Heavy Duty Trucks &amp; Support
                                    </li>
<li className="flex items-start gap-3 text-[var(--text-sec)] text-sm">
<iconify-icon className="text-[var(--accent)] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        Industrial Diesel Engines
                                    </li>
<li className="flex items-start gap-3 text-[var(--text-sec)] text-sm">
<iconify-icon className="text-[var(--accent)] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        Hydraulic and Air Systems
                                    </li>
<li className="flex items-start gap-3 text-[var(--text-sec)] text-sm">
<iconify-icon className="text-[var(--accent)] mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                        Caterpillar Equipment
                                    </li>
</ul>
</div>
</div>

<div className="border border-[var(--border)] rounded-[4px] bg-[var(--surface)] overflow-hidden">
<div className="border-b border-[var(--border)] bg-[var(--surface-alt)] px-6 py-4 flex items-center justify-between">
<span className="font-heading font-semibold uppercase text-[var(--text-pri)] tracking-wide">Mine-Site Departments Served</span>
<iconify-icon className="text-[var(--text-sec)] text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="p-6">
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 border border-[var(--border)] rounded-[4px] text-sm text-[var(--text-pri)] bg-[var(--surface-alt)]">Shovel and Drill</span>
<span className="px-4 py-2 border border-[var(--border)] rounded-[4px] text-sm text-[var(--text-pri)] bg-[var(--surface-alt)]">Heavy Duty Truck Shop</span>
<span className="px-4 py-2 border border-[var(--border)] rounded-[4px] text-sm text-[var(--text-pri)] bg-[var(--surface-alt)]">Crush and Convey</span>
<span className="px-4 py-2 border border-[var(--border)] rounded-[4px] text-sm text-[var(--text-pri)] bg-[var(--surface-alt)]">Light Duty Truck Shop</span>
<span className="px-4 py-2 border border-[var(--border)] rounded-[4px] text-sm text-[var(--text-pri)] bg-[var(--surface-alt)]">Acid Plant / Hydromet</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[var(--surface-alt)] border-b border-[var(--border)]" id="experience">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in-up">
<p className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold tracking-[0.18em] uppercase text-[var(--text-sec)] mb-4">Trusted By Industry</p>
<h2 className="font-heading font-semibold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1] tracking-tight text-[var(--text-pri)] uppercase">
                        Certified Support &amp; <span className="text-[var(--accent)]">Client</span> Roster
                    </h2>
</div>

<div className="mb-20 fade-in-up">
<h3 className="text-center text-sm font-semibold text-[var(--text-sec)] uppercase tracking-widest mb-8">Authorized / Certified Support For</h3>
<div className="flex flex-wrap justify-center gap-4 lg:gap-8">
<div className="px-8 py-4 border border-[var(--border)] bg-[var(--surface)] rounded-[4px] flex items-center justify-center min-w-[140px]">
<span className="font-heading font-bold text-xl text-[var(--text-pri)] tracking-wide uppercase">Manitex</span>
</div>
<div className="px-8 py-4 border border-[var(--border)] bg-[var(--surface)] rounded-[4px] flex items-center justify-center min-w-[140px]">
<span className="font-heading font-bold text-xl text-[var(--text-pri)] tracking-wide uppercase">Prinoth</span>
</div>
<div className="px-8 py-4 border border-[var(--border)] bg-[var(--surface)] rounded-[4px] flex items-center justify-center min-w-[140px]">
<span className="font-heading font-bold text-xl text-[var(--text-pri)] tracking-wide uppercase">Palfinger</span>
</div>
<div className="px-8 py-4 border border-[var(--border)] bg-[var(--surface)] rounded-[4px] flex items-center justify-center min-w-[140px]">
<span className="font-heading font-bold text-xl text-[var(--text-pri)] tracking-wide uppercase">Carco</span>
</div>
</div>
</div>

<div className="border-t border-[var(--border)] pt-16 fade-in-up">
<h3 className="text-center text-sm font-semibold text-[var(--text-sec)] uppercase tracking-widest mb-10">Serving Operations Including</h3>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 text-center">
<div className="text-[var(--text-pri)] font-medium text-base">FMI Morenci</div>
<div className="text-[var(--text-pri)] font-medium text-base">FMI Safford</div>
<div className="text-[var(--text-pri)] font-medium text-base">Freeport-McMoRan</div>
<div className="text-[var(--text-pri)] font-medium text-base">Southwest Energy</div>
<div className="text-[var(--text-pri)] font-medium text-base">BHP Billiton</div>
<div className="text-[var(--text-pri)] font-medium text-base">Western Mesquite</div>
<div className="text-[var(--text-pri)] font-medium text-base">Prinoth</div>
<div className="text-[var(--text-pri)] font-medium text-base">Manitex</div>
</div>
<div className="text-center mt-12">
<p className="inline-block px-6 py-2 border border-[var(--border)] bg-[var(--surface)] text-sm text-[var(--text-sec)] italic rounded-[4px]">References available on request.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[var(--bg)] border-b border-[var(--border)]" id="quality">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-16 fade-in-up">
<p className="text-[clamp(0.75rem,1vw,0.875rem)] font-semibold tracking-[0.18em] uppercase text-[var(--text-sec)] mb-4">Standards</p>
<h2 className="font-heading font-semibold text-[clamp(1.875rem,4vw,3.25rem)] leading-[1] tracking-tight text-[var(--text-pri)] uppercase mb-6">
                        Quality, Safety, and <span className="text-[var(--accent)]">Compliance</span> Built Into Every Job
                    </h2>
<p className="text-[var(--text-sec)] text-base">IMM adheres to a stringent quality management approach based on ISO 9001:2015 principles. We guarantee precision through documentation, rigorous inspections, and strict non-conformance management, ensuring all records are retained for a minimum of 5 years.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12 fade-in-up">

<div className="bg-[var(--surface)] border border-[var(--border)] p-6 rounded-[4px]">
<div className="w-10 h-10 border border-[var(--accent)] flex items-center justify-center text-[var(--accent)] font-heading font-bold text-lg mb-4 rounded-[2px]">01</div>
<h3 className="font-heading font-semibold text-lg text-[var(--text-pri)] uppercase mb-2">Inbound Material</h3>
<p className="text-[var(--text-sec)] text-sm">Rigorous verification of incoming materials and consumables to ensure they meet technical specifications before any work begins.</p>
</div>

<div className="bg-[var(--surface)] border border-[var(--border)] p-6 rounded-[4px]">
<div className="w-10 h-10 border border-[var(--accent)] flex items-center justify-center text-[var(--accent)] font-heading font-bold text-lg mb-4 rounded-[2px]">02</div>
<h3 className="font-heading font-semibold text-lg text-[var(--text-pri)] uppercase mb-2">In-Process Inspection</h3>
<p className="text-[var(--text-sec)] text-sm">Continuous monitoring and testing during fabrication, machining, and rebuild phases to guarantee adherence to tolerances.</p>
</div>

<div className="bg-[var(--surface)] border border-[var(--border)] p-6 rounded-[4px]">
<div className="w-10 h-10 border border-[var(--accent)] flex items-center justify-center text-[var(--accent)] font-heading font-bold text-lg mb-4 rounded-[2px]">03</div>
<h3 className="font-heading font-semibold text-lg text-[var(--text-pri)] uppercase mb-2">Final Inspection</h3>
<p className="text-[var(--text-sec)] text-sm">Comprehensive functional and structural sign-off, backed by complete documentation and certified personnel review.</p>
</div>
</div>
<div className="bg-[var(--surface)] border border-[var(--border)] rounded-[4px] p-8 fade-in-up">
<h4 className="font-heading font-semibold text-[var(--text-pri)] uppercase mb-6 border-b border-[var(--border)] pb-4">Codes &amp; Standards Competency</h4>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
<div className="flex items-center gap-2 text-[var(--text-pri)] font-mono text-sm bg-[var(--bg)] px-3 py-2 border border-[var(--border)] rounded-[2px]">
<span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span> AWS D1.1
                        </div>
<div className="flex items-center gap-2 text-[var(--text-pri)] font-mono text-sm bg-[var(--bg)] px-3 py-2 border border-[var(--border)] rounded-[2px]">
<span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span> API 1104
                        </div>
<div className="flex items-center gap-2 text-[var(--text-pri)] font-mono text-sm bg-[var(--bg)] px-3 py-2 border border-[var(--border)] rounded-[2px]">
<span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span> ASME Sec IX
                        </div>
<div className="flex items-center gap-2 text-[var(--text-pri)] font-mono text-sm bg-[var(--bg)] px-3 py-2 border border-[var(--border)] rounded-[2px]">
<span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span> ISO 3834
                        </div>
<div className="flex items-center gap-2 text-[var(--text-pri)] font-mono text-sm bg-[var(--bg)] px-3 py-2 border border-[var(--border)] rounded-[2px]">
<span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span> SSPC-SP 10
                        </div>
<div className="flex items-center gap-2 text-[var(--text-pri)] font-mono text-sm bg-[var(--bg)] px-3 py-2 border border-[var(--border)] rounded-[2px]">
<span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span> SSPC-PA 1
                        </div>
<div className="flex items-center gap-2 text-[var(--text-pri)] font-mono text-sm bg-[var(--bg)] px-3 py-2 border border-[var(--border)] rounded-[2px]">
<span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span> PCI Guidelines
                        </div>
<div className="flex items-center gap-2 text-[var(--text-pri)] font-mono text-sm bg-[var(--bg)] px-3 py-2 border border-[var(--border)] rounded-[2px]">
<span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span> Weld Certs
                        </div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[var(--surface-alt)] border-b border-[var(--border)]" id="training">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 fade-in-up">
<div className="max-w-xl">
<h2 className="font-heading font-semibold text-[clamp(1.5rem,3vw,2rem)] leading-[1] tracking-tight text-[var(--text-pri)] uppercase mb-4">
<span className="text-[var(--accent)]">Operational</span> Readiness
                        </h2>
<p className="text-[var(--text-sec)] text-sm">Beyond repair, IMM provides operator training and structures preventative maintenance programs to keep your fleet running longer and safer.</p>
</div>
<div className="flex flex-wrap gap-4">
<div className="bg-[var(--surface)] border border-[var(--border)] px-5 py-3 rounded-[4px] flex items-center gap-3">
<iconify-icon className="text-[var(--accent)] text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wide text-[var(--text-pri)]">Operator Training</span>
</div>
<div className="bg-[var(--surface)] border border-[var(--border)] px-5 py-3 rounded-[4px] flex items-center gap-3">
<iconify-icon className="text-[var(--accent)] text-xl" icon="solar:calendar-linear"></iconify-icon>
<span className="text-sm font-medium uppercase tracking-wide text-[var(--text-pri)]">Maintenance Plans</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-[var(--bg)] relative overflow-hidden" id="contact">

<div className="absolute inset-0 bg-diagonal-pattern z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="fade-in-up">
<h2 className="font-heading font-semibold text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-tight text-[var(--text-pri)] uppercase mb-8">
                            Talk to IMM about your next <span className="text-[var(--accent)]">shutdown</span>, rebuild, or field repair.
                        </h2>
<div className="space-y-6 mb-10">
<a className="flex items-center gap-4 group" href="tel:928-965-6524">
<div className="w-12 h-12 border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center rounded-[4px] group-hover:border-[var(--accent)] transition-colors">
<iconify-icon className="text-xl text-[var(--accent)]" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-[var(--text-sec)] uppercase tracking-widest mb-1">Direct Line</div>
<div className="text-xl font-medium text-[var(--text-pri)]">928-965-6524</div>
</div>
</a>
<a className="flex items-center gap-4 group" href="mailto:imm_arizona@yahoo.com">
<div className="w-12 h-12 border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center rounded-[4px] group-hover:border-[var(--accent)] transition-colors">
<iconify-icon className="text-xl text-[var(--accent)]" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-[var(--text-sec)] uppercase tracking-widest mb-1">Email</div>
<div className="text-xl font-medium text-[var(--text-pri)]">imm_arizona@yahoo.com</div>
</div>
</a>
</div>
</div>
<div className="bg-[var(--surface)] border border-[var(--border)] p-6 sm:p-8 rounded-[4px] fade-in-up" style={{transitionDelay: '200ms'}}>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-[var(--text-sec)] uppercase tracking-wider mb-2">Name</label>
<input className="w-full bg-[var(--surface-alt)] border border-[var(--border)] rounded-[4px] px-4 py-3 text-[var(--text-pri)] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-shadow" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--text-sec)] uppercase tracking-wider mb-2">Company</label>
<input className="w-full bg-[var(--surface-alt)] border border-[var(--border)] rounded-[4px] px-4 py-3 text-[var(--text-pri)] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-shadow" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-[var(--text-sec)] uppercase tracking-wider mb-2">Phone</label>
<input className="w-full bg-[var(--surface-alt)] border border-[var(--border)] rounded-[4px] px-4 py-3 text-[var(--text-pri)] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-shadow" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--text-sec)] uppercase tracking-wider mb-2">Email</label>
<input className="w-full bg-[var(--surface-alt)] border border-[var(--border)] rounded-[4px] px-4 py-3 text-[var(--text-pri)] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-shadow" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-[var(--text-sec)] uppercase tracking-wider mb-2">Mine Site / Location</label>
<input className="w-full bg-[var(--surface-alt)] border border-[var(--border)] rounded-[4px] px-4 py-3 text-[var(--text-pri)] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-shadow" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--text-sec)] uppercase tracking-wider mb-2">Urgency</label>
<select className="w-full bg-[var(--surface-alt)] border border-[var(--border)] rounded-[4px] px-4 py-3 text-[var(--text-pri)] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-shadow appearance-none">
<option>Standard Maintenance</option>
<option>Upcoming Shutdown</option>
<option>Emergency Breakdown</option>
</select>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--text-sec)] uppercase tracking-wider mb-2">Service Needed</label>
<input className="w-full bg-[var(--surface-alt)] border border-[var(--border)] rounded-[4px] px-4 py-3 text-[var(--text-pri)] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-shadow" placeholder="e.g. Line boring, Shovel rebuild..." type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-[var(--text-sec)] uppercase tracking-wider mb-2">Message</label>
<textarea className="w-full bg-[var(--surface-alt)] border border-[var(--border)] rounded-[4px] px-4 py-3 text-[var(--text-pri)] text-sm focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-shadow" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-[var(--accent)] text-[var(--graphite)] text-base font-semibold uppercase tracking-wide rounded-[4px] hover:bg-[var(--accent-hover)] transition-colors mt-4" type="submit">
                                Submit Request
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[var(--surface-alt)] border-t border-[var(--border)] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="font-heading font-semibold text-2xl tracking-tight text-[var(--text-pri)] flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-[var(--accent)]" icon="solar:settings-bold"></iconify-icon>
                        IMM
                    </a>
<p className="text-[var(--text-sec)] text-sm leading-relaxed">
                        Field service, fabrication, welding, inspections, rebuilds, and machining for mining and construction operations.
                    </p>
</div>
<div>
<h4 className="font-heading font-semibold text-[var(--text-pri)] uppercase mb-4 tracking-wide text-sm">Navigation</h4>
<ul className="space-y-2 text-sm text-[var(--text-sec)]">
<li><a className="hover:text-[var(--accent)] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[var(--accent)] transition-colors" href="#capabilities">Capabilities</a></li>
<li><a className="hover:text-[var(--accent)] transition-colors" href="#quality">Quality</a></li>
<li><a className="hover:text-[var(--accent)] transition-colors" href="#experience">Experience</a></li>
</ul>
</div>
<div>
<h4 className="font-heading font-semibold text-[var(--text-pri)] uppercase mb-4 tracking-wide text-sm">Service Region</h4>
<ul className="space-y-2 text-sm text-[var(--text-sec)]">
<li>Arizona</li>
<li>Nevada</li>
<li>New Mexico</li>
</ul>
</div>
<div>
<h4 className="font-heading font-semibold text-[var(--text-pri)] uppercase mb-4 tracking-wide text-sm">Contact</h4>
<ul className="space-y-2 text-sm text-[var(--text-sec)]">
<li><a className="hover:text-[var(--accent)] transition-colors" href="tel:928-965-6524">928-965-6524</a></li>
<li><a className="hover:text-[var(--accent)] transition-colors" href="mailto:imm_arizona@yahoo.com">imm_arizona@yahoo.com</a></li>
<li className="mt-4"><span className="inline-block w-full text-xs opacity-50 border-t border-[var(--border)] pt-2">[Editable Address Field in CMS]</span></li>
</ul>
</div>
</div>
<div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[var(--text-sec)] text-xs">© 2012-2023 Independent Mine Maintenance. All rights reserved.</p>
<div className="text-[var(--text-sec)] text-xs">Employee-Owned</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 p-4 bg-[var(--surface)] border-t border-[var(--border)] md:hidden z-50 flex gap-2">
<a className="flex-1 inline-flex items-center justify-center py-3 bg-[var(--surface-alt)] text-[var(--text-pri)] border border-[var(--border)] text-sm font-semibold uppercase rounded-[4px]" href="tel:928-965-6524">
            Call Now
        </a>
<a className="flex-1 inline-flex items-center justify-center py-3 bg-[var(--accent)] text-[var(--graphite)] text-sm font-semibold uppercase rounded-[4px]" href="#contact">
            Quote
        </a>
</div>



    </>
  );
}
