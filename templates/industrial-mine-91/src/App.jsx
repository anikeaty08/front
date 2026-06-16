import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())


        // Theme Toggle Logic
        const body = document.body;
        const themeBtn = document.getElementById('themeToggle');
        const mobileThemeBtn = document.getElementById('mobileThemeToggle');
        const darkIcons = document.querySelectorAll('.dark-icon');
        const lightIcons = document.querySelectorAll('.light-icon');

        let isLightMode = false;
        
        function updateThemeUI() {
            if (isLightMode) {
                body.classList.add('light-mode');
                darkIcons.forEach(icon => icon.classList.remove('hidden'));
                lightIcons.forEach(icon => icon.classList.add('hidden'));
            } else {
                body.classList.remove('light-mode');
                darkIcons.forEach(icon => icon.classList.add('hidden'));
                lightIcons.forEach(icon => icon.classList.remove('hidden'));
            }
        }

        function toggleTheme() {
            isLightMode = !isLightMode;
            updateThemeUI();
        }

        themeBtn.addEventListener('click', toggleTheme);
        mobileThemeBtn.addEventListener('click', toggleTheme);

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const closeMenuBtn = document.getElementById('closeMenuBtn');
        const mobileDrawer = document.getElementById('mobileDrawer');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileDrawer.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

        // Scroll Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(element => {
            observer.observe(element);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-grit"></div>

<header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-base)]/95 backdrop-blur-md border-b border-[var(--border-color)] transition-colors duration-300">
<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 h-[4.5rem] flex items-center justify-between">

<a className="relative z-10 flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-[var(--accent-yellow)] flex items-center justify-center rounded-[2px] text-[var(--text-cta)] font-bold heading-font tracking-tight text-[1.25rem]">
                    I
                </div>
<span className="heading-font font-bold tracking-tighter text-[1.5rem] uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors duration-200">
                    IMM
                </span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-[0.875rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#services">Services</a>
<a className="text-[0.875rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#capabilities">Capabilities</a>
<a className="text-[0.875rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#quality">Quality</a>
<a className="text-[0.875rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#training">Training</a>
<a className="text-[0.875rem] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#experience">Experience</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<button aria-label="Toggle Theme" className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-center justify-center rounded-[2px]" id="themeToggle">
<iconify-icon className="text-[1.25rem] dark-icon hidden" icon="solar:moon-linear"></iconify-icon>
<iconify-icon className="text-[1.25rem] light-icon" icon="solar:sun-linear"></iconify-icon>
</button>
<a className="text-[0.875rem] font-semibold text-[var(--text-primary)] tracking-wide hover:text-[var(--accent-yellow)] transition-colors" href="tel:928-965-6524">
                    928-965-6524
                </a>
<a className="bg-[var(--accent-yellow)] text-[var(--text-cta)] text-[0.9375rem] font-semibold px-5 py-2.5 rounded-[2px] tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200" href="#contact">
                    Request a Quote
                </a>
</div>

<button aria-label="Open Menu" className="lg:hidden p-2 text-[var(--text-primary)] hover:text-[var(--accent-yellow)] transition-colors" id="mobileMenuBtn">
<iconify-icon className="text-[1.5rem]" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 z-[60] bg-[var(--bg-base)] transform translate-x-full transition-transform duration-300 lg:hidden flex flex-col border-l border-[var(--border-color)]" id="mobileDrawer">
<div className="h-[4.5rem] px-4 flex items-center justify-between border-b border-[var(--border-color)]">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[var(--accent-yellow)] flex items-center justify-center rounded-[2px] text-[var(--text-cta)] font-bold heading-font tracking-tight text-[1.25rem]">I</div>
<span className="heading-font font-bold tracking-tighter text-[1.5rem] uppercase text-[var(--text-primary)]">IMM</span>
</div>
<button className="p-2 text-[var(--text-primary)] hover:text-[var(--accent-yellow)] transition-colors" id="closeMenuBtn">
<iconify-icon className="text-[1.5rem]" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<nav className="flex flex-col p-6 gap-6">
<a className="text-[1.125rem] font-medium text-[var(--text-primary)] mobile-link" href="#services">Services</a>
<a className="text-[1.125rem] font-medium text-[var(--text-primary)] mobile-link" href="#capabilities">Capabilities</a>
<a className="text-[1.125rem] font-medium text-[var(--text-primary)] mobile-link" href="#quality">Quality</a>
<a className="text-[1.125rem] font-medium text-[var(--text-primary)] mobile-link" href="#training">Training</a>
<a className="text-[1.125rem] font-medium text-[var(--text-primary)] mobile-link" href="#experience">Experience</a>
<div className="h-px w-full bg-[var(--border-color)] my-2"></div>
<a className="text-[1.125rem] font-medium text-[var(--text-primary)] flex items-center gap-3" href="tel:928-965-6524">
<iconify-icon className="text-[var(--accent-yellow)]" icon="solar:phone-calling-linear"></iconify-icon>
                Call 928-965-6524
            </a>
<a className="bg-[var(--accent-yellow)] text-[var(--text-cta)] text-center text-[1rem] font-semibold px-6 py-3.5 rounded-[2px] mt-4" href="#contact">
                Request a Quote
            </a>
<button className="flex items-center gap-3 text-[1rem] font-medium text-[var(--text-secondary)] mt-4 hover:text-[var(--text-primary)]" id="mobileThemeToggle">
<iconify-icon className="text-[1.25rem]" icon="solar:moon-linear"></iconify-icon>
                Toggle Theme
            </button>
</nav>
</div>

<main className="relative z-10 pt-[4.5rem]">

<section className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-center border-b border-[var(--border-color)] bg-[var(--bg-base)]">

<div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
<img alt="Heavy mining equipment" className="w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-[var(--bg-base)]/80 to-transparent"></div>
</div>
<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-24 w-full">
<div className="max-w-[50rem]">
<div className="flex items-center gap-3 mb-6 fade-up">
<span className="w-6 h-[2px] bg-[var(--accent-yellow)]"></span>
<p className="text-[0.75rem] md:text-[0.875rem] uppercase font-bold tracking-[0.18em] text-[var(--text-primary)]">
                            Independent Mine Maintenance
                        </p>
</div>
<h1 className="heading-font text-[clamp(2.625rem,7vw,5.25rem)] font-bold leading-[0.95] tracking-tight text-[var(--text-primary)] mb-8 uppercase">
<span className="stagger-word" style={{animationDelay: '0.1s'}}>Less</span>
<span className="stagger-word" style={{animationDelay: '0.2s'}}>Downtime.</span><br/>
<span className="stagger-word" style={{animationDelay: '0.3s'}}>More</span>
<span className="stagger-word bg-[var(--accent-yellow)] text-[var(--text-cta)] px-3 pb-1 -ml-1 mt-1 rounded-[2px]" style={{animationDelay: '0.4s'}}>Production.</span>
</h1>
<p className="text-[1rem] md:text-[1.125rem] font-medium text-[var(--text-secondary)] leading-[1.65] mb-10 max-w-[40rem] fade-up" style={{transitionDelay: '0.5s'}}>
                        Independent Mine Maintenance provides field service, fabrication, welding, inspections, rebuilds, and precision machining for mining and construction operations across Arizona, Nevada, and New Mexico.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 fade-up" style={{transitionDelay: '0.6s'}}>
<a className="flex items-center justify-center text-center bg-[var(--accent-yellow)] text-[var(--text-cta)] text-[0.9375rem] md:text-[1rem] font-semibold px-8 py-3.5 rounded-[2px] tracking-wide hover:scale-[1.02] transition-transform duration-200" href="#contact">
                            Request a Quote
                        </a>
<a className="flex items-center justify-center text-center bg-transparent border border-[var(--border-color)] text-[var(--text-primary)] text-[0.9375rem] md:text-[1rem] font-semibold px-8 py-3.5 rounded-[2px] tracking-wide hover:bg-[var(--accent-yellow)] hover:border-[var(--accent-yellow)] hover:text-[var(--text-cta)] transition-colors duration-200" href="tel:928-965-6524">
                            Call 928-965-6524
                        </a>
</div>
</div>
</div>

<div className="w-full mt-auto relative z-10 border-t border-[var(--border-color)] bg-[var(--bg-surface)]">
<div className="max-w-[80rem] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-[var(--border-color)]">
<div className="p-6 md:p-8 flex flex-col justify-center items-center text-center">
<span className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] uppercase tracking-wide">Founded 2012</span>
<span className="w-6 h-[2px] bg-[var(--accent-yellow)] mt-3"></span>
</div>
<div className="p-6 md:p-8 flex flex-col justify-center items-center text-center">
<span className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] uppercase tracking-wide">11 Specialized Techs</span>
<span className="w-6 h-[2px] bg-[var(--accent-yellow)] mt-3"></span>
</div>
<div className="p-6 md:p-8 flex flex-col justify-center items-center text-center">
<span className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] uppercase tracking-wide">Employee-Owned</span>
<span className="w-6 h-[2px] bg-[var(--accent-yellow)] mt-3"></span>
</div>
<div className="p-6 md:p-8 flex flex-col justify-center items-center text-center">
<span className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] uppercase tracking-wide">AZ / NV / NM</span>
<span className="w-6 h-[2px] bg-[var(--accent-yellow)] mt-3"></span>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 border-b border-[var(--border-color)] bg-[var(--bg-base)]" id="why-imm">
<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="fade-up">
<div className="flex items-center gap-3 mb-4">
<span className="w-6 h-[2px] bg-[var(--accent-yellow)]"></span>
<p className="text-[0.75rem] md:text-[0.875rem] uppercase font-bold tracking-[0.18em] text-[var(--text-primary)]">Why IMM</p>
</div>
<h2 className="heading-font text-[clamp(1.875rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-tight text-[var(--text-primary)] mb-6 uppercase">
                            Operational <span className="bg-[var(--accent-yellow)] text-[var(--text-cta)] px-2 mx-[-4px] rounded-[2px] inline-block">Certainty</span> in Critical Conditions
                        </h2>
<div className="space-y-6 text-[1rem] md:text-[1.125rem] text-[var(--text-secondary)] font-medium leading-[1.65]">
<p>Founded in 2012 in Arizona, Independent Mine Maintenance operates on an employee-owned basis. Our commitment is directly tied to the success and uptime of your operations.</p>
<p>We deploy a specialized team capable of executing complete equipment rebuilds, large plant outages, rapid field service, and precision machining on-site.</p>
<p className="text-[var(--text-primary)] border-l-2 border-[var(--accent-yellow)] pl-5 py-1">
                                Our core promise: Unwavering reliability, reduced downtime, maximized machine availability, and lower overall operating costs.
                            </p>
</div>
</div>
<div className="relative fade-up w-full max-w-lg mx-auto lg:max-w-none">

<div className="absolute inset-0 border border-[var(--accent-yellow)] translate-x-3 translate-y-3 rounded-[2px]"></div>

<div className="absolute w-24 h-24 -bottom-6 -right-6 pattern-weave z-0"></div>
<img alt="Industrial welding operation" className="relative z-10 w-full aspect-[4/3] object-cover grayscale opacity-90 border border-[var(--border-color)] rounded-[2px]" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 border-b border-[var(--border-color)] bg-[var(--bg-surface)]" id="services">
<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-[40rem] mx-auto mb-16 fade-up">
<div className="flex items-center justify-center gap-3 mb-4">
<span className="w-6 h-[2px] bg-[var(--accent-yellow)]"></span>
<p className="text-[0.75rem] md:text-[0.875rem] uppercase font-bold tracking-[0.18em] text-[var(--text-primary)]">Core Capabilities</p>
<span className="w-6 h-[2px] bg-[var(--accent-yellow)]"></span>
</div>
<h2 className="heading-font text-[clamp(1.875rem,4vw,3.25rem)] font-bold leading-[1] tracking-tight text-[var(--text-primary)] uppercase">
                        Heavy Industrial Services
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[var(--bg-base)] border border-[var(--border-color)] p-8 rounded-[2px] group hover:border-[var(--accent-yellow)] transition-colors duration-300 fade-up">
<iconify-icon className="text-[2rem] text-[var(--accent-yellow)] mb-6" icon="solar:settings-linear"></iconify-icon>
<h3 className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wide">Field Service</h3>
<p className="text-[0.9375rem] md:text-[1rem] text-[var(--text-secondary)] leading-[1.65]">
                            Rapid response for hydraulic and electric mining shovels, rotary blasthole drills, sonic drills, and diesel engine diagnosis and repair.
                        </p>
</div>

<div className="bg-[var(--bg-base)] border border-[var(--border-color)] p-8 rounded-[2px] group hover:border-[var(--accent-yellow)] transition-colors duration-300 fade-up" style={{transitionDelay: '0.1s'}}>
<iconify-icon className="text-[2rem] text-[var(--accent-yellow)] mb-6" icon="solar:box-minimalistic-linear"></iconify-icon>
<h3 className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wide">Equipment Rebuilds</h3>
<p className="text-[0.9375rem] md:text-[1rem] text-[var(--text-secondary)] leading-[1.65]">
                            Comprehensive overhauls for hydraulic systems, air systems, heavy-duty support equipment, and full machine rebuilds.
                        </p>
</div>

<div className="bg-[var(--bg-base)] border border-[var(--border-color)] p-8 rounded-[2px] group hover:border-[var(--accent-yellow)] transition-colors duration-300 fade-up" style={{transitionDelay: '0.2s'}}>
<iconify-icon className="text-[2rem] text-[var(--accent-yellow)] mb-6" icon="solar:layers-minimalistic-linear"></iconify-icon>
<h3 className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wide">Crushing &amp; Conveyors</h3>
<p className="text-[0.9375rem] md:text-[1rem] text-[var(--text-secondary)] leading-[1.65]">
                            Maintenance for crushing systems, conveyors, crusher chutes, jaw crushers, cone crushers, and precise liner package installations.
                        </p>
</div>

<div className="bg-[var(--bg-base)] border border-[var(--border-color)] p-8 rounded-[2px] group hover:border-[var(--accent-yellow)] transition-colors duration-300 fade-up" style={{transitionDelay: '0.3s'}}>
<iconify-icon className="text-[2rem] text-[var(--accent-yellow)] mb-6" icon="solar:bolt-linear"></iconify-icon>
<h3 className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wide">Welding &amp; Fabrication</h3>
<p className="text-[0.9375rem] md:text-[1rem] text-[var(--text-secondary)] leading-[1.65]">
                            Certified on-site welding, stainless steel and aluminum repair, vehicle/frame repair, tank repair, and structure modifications.
                        </p>
</div>

<div className="bg-[var(--bg-base)] border border-[var(--border-color)] p-8 rounded-[2px] group hover:border-[var(--accent-yellow)] transition-colors duration-300 fade-up" style={{transitionDelay: '0.4s'}}>
<iconify-icon className="text-[2rem] text-[var(--accent-yellow)] mb-6" icon="solar:ruler-angular-linear"></iconify-icon>
<h3 className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wide">Precision Machining</h3>
<p className="text-[0.9375rem] md:text-[1rem] text-[var(--text-secondary)] leading-[1.65]">
                            Expert precision field machining and on-site line boring ranging from 1.5 inch to 12 inch diameters to restore factory tolerances.
                        </p>
</div>

<div className="bg-[var(--bg-base)] border border-[var(--border-color)] p-8 rounded-[2px] group hover:border-[var(--accent-yellow)] transition-colors duration-300 fade-up" style={{transitionDelay: '0.5s'}}>
<iconify-icon className="text-[2rem] text-[var(--accent-yellow)] mb-6" icon="solar:clipboard-check-linear"></iconify-icon>
<h3 className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wide">Preventative Maint.</h3>
<p className="text-[0.9375rem] md:text-[1rem] text-[var(--text-secondary)] leading-[1.65]">
                            Scheduled inspections, equipment and structure relocations, and structured maintenance programs to prevent catastrophic failures.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 border-b border-[var(--border-color)] bg-[var(--bg-base)] relative overflow-hidden" id="capabilities">

<div className="absolute right-0 top-0 w-64 h-full pattern-weave opacity-10 pointer-events-none"></div>
<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

<div className="flex-1 fade-up">
<div className="flex items-center gap-3 mb-4">
<span className="w-6 h-[2px] bg-[var(--accent-yellow)]"></span>
<p className="text-[0.75rem] md:text-[0.875rem] uppercase font-bold tracking-[0.18em] text-[var(--text-primary)]">Technical Scope</p>
</div>
<h2 className="heading-font text-[clamp(1.875rem,3vw,2.5rem)] font-bold leading-[1] tracking-tight text-[var(--text-primary)] mb-8 uppercase">
                            Equipment Experience
                        </h2>
<ul className="flex flex-col border-t border-[var(--border-color)]">
<li className="py-4 border-b border-[var(--border-color)] flex items-center justify-between group">
<span className="text-[1rem] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">Hydraulic Mining Shovels</span>
<iconify-icon className="text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="py-4 border-b border-[var(--border-color)] flex items-center justify-between group">
<span className="text-[1rem] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">Electric Mining Shovels</span>
<iconify-icon className="text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="py-4 border-b border-[var(--border-color)] flex items-center justify-between group">
<span className="text-[1rem] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">Rotary Blasthole Drills</span>
<iconify-icon className="text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="py-4 border-b border-[var(--border-color)] flex items-center justify-between group">
<span className="text-[1rem] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">Sonic &amp; Top Hammer Drills</span>
<iconify-icon className="text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="py-4 border-b border-[var(--border-color)] flex items-center justify-between group">
<span className="text-[1rem] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">Heavy Duty Trucks &amp; Support</span>
<iconify-icon className="text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="py-4 border-b border-[var(--border-color)] flex items-center justify-between group">
<span className="text-[1rem] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">Diesel Engines (Diagnostics/Repair)</span>
<iconify-icon className="text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="py-4 border-b border-[var(--border-color)] flex items-center justify-between group">
<span className="text-[1rem] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">Hydraulic and Air Systems</span>
<iconify-icon className="text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
<li className="py-4 border-b border-[var(--border-color)] flex items-center justify-between group">
<span className="text-[1rem] font-medium text-[var(--text-primary)] group-hover:text-[var(--accent-yellow)] transition-colors">Caterpillar Equipment</span>
<iconify-icon className="text-[var(--text-secondary)] group-hover:text-[var(--accent-yellow)] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</li>
</ul>
</div>

<div className="flex-1 fade-up" style={{transitionDelay: '0.2s'}}>
<div className="flex items-center gap-3 mb-4">
<span className="w-6 h-[2px] bg-[var(--accent-yellow)]"></span>
<p className="text-[0.75rem] md:text-[0.875rem] uppercase font-bold tracking-[0.18em] text-[var(--text-primary)]">Operations Focus</p>
</div>
<h2 className="heading-font text-[clamp(1.875rem,3vw,2.5rem)] font-bold leading-[1] tracking-tight text-[var(--text-primary)] mb-8 uppercase">
                            Departments Served
                        </h2>
<div className="flex flex-wrap gap-3">
<span className="border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] px-4 py-2 text-[0.875rem] font-medium rounded-[2px]">Shovel and Drill</span>
<span className="border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] px-4 py-2 text-[0.875rem] font-medium rounded-[2px]">Heavy Duty Truck Shop</span>
<span className="border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] px-4 py-2 text-[0.875rem] font-medium rounded-[2px]">Crush and Convey</span>
<span className="border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] px-4 py-2 text-[0.875rem] font-medium rounded-[2px]">Light Duty Truck Shop</span>
<span className="border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-primary)] px-4 py-2 text-[0.875rem] font-medium rounded-[2px]">Acid Plant / Hydromet</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-[var(--border-color)] bg-[var(--bg-surface-elevated)]" id="experience">
<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
<div className="flex items-center justify-center gap-3 mb-4 fade-up">
<span className="w-6 h-[2px] bg-[var(--accent-yellow)]"></span>
<p className="text-[0.75rem] md:text-[0.875rem] uppercase font-bold tracking-[0.18em] text-[var(--text-primary)]">Certified &amp; Trusted</p>
<span className="w-6 h-[2px] bg-[var(--accent-yellow)]"></span>
</div>
<div className="mb-16 fade-up">
<h3 className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-secondary)] mb-6 uppercase tracking-wide">Authorized Support For</h3>
<div className="flex flex-wrap justify-center gap-6 md:gap-12">
<span className="text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] tracking-widest uppercase">Manitex</span>
<span className="text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] tracking-widest uppercase">Prinoth</span>
<span className="text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] tracking-widest uppercase">Palfinger</span>
<span className="text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-primary)] tracking-widest uppercase">Carco</span>
</div>
</div>
<div className="fade-up" style={{transitionDelay: '0.2s'}}>
<h3 className="heading-font text-[1.25rem] md:text-[1.5rem] font-bold text-[var(--text-secondary)] mb-6 uppercase tracking-wide">Industrial Operations Served</h3>
<div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-[50rem] mx-auto mb-8 text-[0.9375rem] md:text-[1rem] text-[var(--text-primary)] font-medium">
<span className="px-3 border-r border-[var(--border-color)] last:border-0">FMI Morenci</span>
<span className="px-3 border-r border-[var(--border-color)] last:border-0">FMI Safford</span>
<span className="px-3 border-r border-[var(--border-color)] last:border-0">Freeport-McMoRan</span>
<span className="px-3 border-r border-[var(--border-color)] last:border-0">Southwest Energy</span>
<span className="px-3 border-r border-[var(--border-color)] last:border-0">BHP Billiton</span>
<span className="px-3 border-r border-[var(--border-color)] last:border-0">Western Mesquite</span>
</div>
<p className="text-[0.875rem] text-[var(--text-secondary)] italic">References available on request.</p>
</div>
</div>
</section>

<section className="py-20 lg:py-32 border-b border-[var(--border-color)] bg-[var(--bg-base)]" id="quality">
<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-[45rem] mb-16 fade-up">
<div className="flex items-center gap-3 mb-4">
<span className="w-6 h-[2px] bg-[var(--accent-yellow)]"></span>
<p className="text-[0.75rem] md:text-[0.875rem] uppercase font-bold tracking-[0.18em] text-[var(--text-primary)]">Standards &amp; Compliance</p>
</div>
<h2 className="heading-font text-[clamp(1.875rem,4vw,3.25rem)] font-bold leading-[1] tracking-tight text-[var(--text-primary)] mb-6 uppercase">
                        Quality, Safety, and Compliance Built Into Every Job
                    </h2>
<p className="text-[1rem] md:text-[1.125rem] text-[var(--text-secondary)] font-medium leading-[1.65]">
                        IMM operates under a stringent quality management approach based on ISO 9001:2015 principles. We maintain rigorous weld certifications, comprehensive documentation, strict non-conformance management, and retain all job records for a minimum of 5 years.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

<div className="border border-[var(--border-color)] p-6 rounded-[2px] bg-[var(--bg-surface)] fade-up">
<div className="w-10 h-10 bg-[var(--accent-yellow)] text-[var(--text-cta)] flex items-center justify-center rounded-[2px] font-bold mb-5 heading-font text-[1.25rem]">1</div>
<h4 className="heading-font text-[1.125rem] font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Inbound Material Insp.</h4>
<p className="text-[0.875rem] text-[var(--text-secondary)]">Verification of all materials and consumables against job specifications before work begins.</p>
</div>

<div className="border border-[var(--border-color)] p-6 rounded-[2px] bg-[var(--bg-surface)] fade-up" style={{transitionDelay: '0.1s'}}>
<div className="w-10 h-10 bg-[var(--accent-yellow)] text-[var(--text-cta)] flex items-center justify-center rounded-[2px] font-bold mb-5 heading-font text-[1.25rem]">2</div>
<h4 className="heading-font text-[1.125rem] font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide">In-Process Inspection</h4>
<p className="text-[0.875rem] text-[var(--text-secondary)]">Continuous monitoring and measurement during machining, welding, and assembly phases.</p>
</div>

<div className="border border-[var(--border-color)] p-6 rounded-[2px] bg-[var(--bg-surface)] fade-up" style={{transitionDelay: '0.2s'}}>
<div className="w-10 h-10 bg-[var(--accent-yellow)] text-[var(--text-cta)] flex items-center justify-center rounded-[2px] font-bold mb-5 heading-font text-[1.25rem]">3</div>
<h4 className="heading-font text-[1.125rem] font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Final Inspection</h4>
<p className="text-[0.875rem] text-[var(--text-secondary)]">Rigorous testing and sign-off ensuring compliance with structural and operational tolerances.</p>
</div>
</div>

<div className="border-t border-[var(--border-color)] pt-12 fade-up">
<h4 className="text-[0.875rem] uppercase font-bold tracking-[0.1em] text-[var(--text-primary)] mb-6">Governing Standards &amp; Guidelines</h4>
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
<div className="flex items-center gap-3">
<iconify-icon className="text-[var(--accent-yellow)] text-[1.25rem]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[0.9375rem] text-[var(--text-secondary)] font-medium">AWS D1.1</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[var(--accent-yellow)] text-[1.25rem]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[0.9375rem] text-[var(--text-secondary)] font-medium">API 1104</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[var(--accent-yellow)] text-[1.25rem]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[0.9375rem] text-[var(--text-secondary)] font-medium">ASME Section IX</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[var(--accent-yellow)] text-[1.25rem]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[0.9375rem] text-[var(--text-secondary)] font-medium">ISO 3834</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[var(--accent-yellow)] text-[1.25rem]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[0.9375rem] text-[var(--text-secondary)] font-medium">SSPC-SP 10</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[var(--accent-yellow)] text-[1.25rem]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[0.9375rem] text-[var(--text-secondary)] font-medium">SSPC-PA 1</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-[var(--accent-yellow)] text-[1.25rem]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[0.9375rem] text-[var(--text-secondary)] font-medium">PCI Guidelines</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-b border-[var(--border-color)] bg-[var(--bg-surface)]" id="training">
<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 fade-up">
<div className="max-w-[30rem]">
<h2 className="heading-font text-[1.5rem] md:text-[2rem] font-bold text-[var(--text-primary)] mb-4 uppercase leading-tight">Training &amp; Planning</h2>
<p className="text-[0.9375rem] text-[var(--text-secondary)] leading-relaxed">Beyond repair, IMM partners with your operational teams to build competence and resilience through structured knowledge transfer.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<div className="border border-[var(--border-color)] bg-[var(--bg-base)] px-6 py-4 rounded-[2px] flex items-center gap-3">
<iconify-icon className="text-[var(--accent-yellow)] text-[1.5rem]" icon="solar:user-speak-linear"></iconify-icon>
<span className="font-semibold text-[0.9375rem]">Operator Training</span>
</div>
<div className="border border-[var(--border-color)] bg-[var(--bg-base)] px-6 py-4 rounded-[2px] flex items-center gap-3">
<iconify-icon className="text-[var(--accent-yellow)] text-[1.5rem]" icon="solar:calendar-linear"></iconify-icon>
<span className="font-semibold text-[0.9375rem]">Maintenance Plans</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-[var(--bg-base)] relative" id="contact">
<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
<div className="fade-up">
<h2 className="heading-font text-[clamp(2.25rem,5vw,4rem)] font-bold leading-[0.95] tracking-tight text-[var(--text-primary)] mb-8 uppercase">
                            Talk to IMM About Your Next Shutdown, Rebuild, or Field Repair
                        </h2>
<div className="space-y-6 mb-12">
<a className="flex items-center gap-4 group w-max" href="tel:928-965-6524">
<div className="w-12 h-12 border border-[var(--border-color)] flex items-center justify-center rounded-[2px] text-[var(--text-primary)] group-hover:bg-[var(--accent-yellow)] group-hover:border-[var(--accent-yellow)] group-hover:text-[var(--text-cta)] transition-colors duration-200">
<iconify-icon className="text-[1.5rem]" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-[0.75rem] uppercase text-[var(--text-secondary)] font-bold tracking-widest mb-1">Direct Line</p>
<p className="text-[1.25rem] font-bold text-[var(--text-primary)]">928-965-6524</p>
</div>
</a>
<a className="flex items-center gap-4 group w-max" href="mailto:imm_arizona@yahoo.com">
<div className="w-12 h-12 border border-[var(--border-color)] flex items-center justify-center rounded-[2px] text-[var(--text-primary)] group-hover:bg-[var(--accent-yellow)] group-hover:border-[var(--accent-yellow)] group-hover:text-[var(--text-cta)] transition-colors duration-200">
<iconify-icon className="text-[1.5rem]" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-[0.75rem] uppercase text-[var(--text-secondary)] font-bold tracking-widest mb-1">Email</p>
<p className="text-[1.125rem] font-bold text-[var(--text-primary)]">imm_arizona@yahoo.com</p>
</div>
</a>
</div>
</div>

<div className="bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 md:p-8 rounded-[2px] fade-up relative overflow-hidden" style={{transitionDelay: '0.2s'}}>

<div className="absolute inset-0 pattern-weave opacity-5 pointer-events-none"></div>
<form action="#" className="space-y-5 relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-[0.8125rem] font-bold text-[var(--text-primary)] mb-1.5 uppercase tracking-wide">Name</label>
<input className="w-full px-4 py-3 rounded-[2px] text-[0.9375rem]" required="" type="text"/>
</div>
<div>
<label className="block text-[0.8125rem] font-bold text-[var(--text-primary)] mb-1.5 uppercase tracking-wide">Company</label>
<input className="w-full px-4 py-3 rounded-[2px] text-[0.9375rem]" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-[0.8125rem] font-bold text-[var(--text-primary)] mb-1.5 uppercase tracking-wide">Phone</label>
<input className="w-full px-4 py-3 rounded-[2px] text-[0.9375rem]" required="" type="tel"/>
</div>
<div>
<label className="block text-[0.8125rem] font-bold text-[var(--text-primary)] mb-1.5 uppercase tracking-wide">Email</label>
<input className="w-full px-4 py-3 rounded-[2px] text-[0.9375rem]" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-[0.8125rem] font-bold text-[var(--text-primary)] mb-1.5 uppercase tracking-wide">Mine Site / Location</label>
<input className="w-full px-4 py-3 rounded-[2px] text-[0.9375rem]" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-[0.8125rem] font-bold text-[var(--text-primary)] mb-1.5 uppercase tracking-wide">Service Needed</label>
<select className="w-full px-4 py-3 rounded-[2px] text-[0.9375rem] appearance-none">
<option value="">Select Service...</option>
<option value="field">Field Service</option>
<option value="rebuild">Equipment Rebuild</option>
<option value="machining">Precision Machining</option>
<option value="welding">Welding / Fab</option>
<option value="other">Other</option>
</select>
</div>
<div>
<label className="block text-[0.8125rem] font-bold text-[var(--text-primary)] mb-1.5 uppercase tracking-wide">Urgency</label>
<select className="w-full px-4 py-3 rounded-[2px] text-[0.9375rem] appearance-none">
<option value="routine">Routine</option>
<option value="shutdown">Planned Shutdown</option>
<option value="emergency">Emergency / Down</option>
</select>
</div>
</div>
<div>
<label className="block text-[0.8125rem] font-bold text-[var(--text-primary)] mb-1.5 uppercase tracking-wide">Message</label>
<textarea className="w-full px-4 py-3 rounded-[2px] text-[0.9375rem] resize-none" rows="4"></textarea>
</div>
<button className="w-full bg-[var(--accent-yellow)] text-[var(--text-cta)] text-[1rem] font-bold px-6 py-4 rounded-[2px] tracking-wide hover:scale-[1.01] transition-transform duration-200 mt-2" type="submit">
                                Send Request
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[var(--bg-surface-elevated)] border-t border-[var(--border-color)] py-12">
<div className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-[var(--accent-yellow)] flex items-center justify-center rounded-[2px] text-[var(--text-cta)] font-bold heading-font tracking-tight text-[1rem]">I</div>
<span className="heading-font font-bold tracking-tighter text-[1.25rem] uppercase text-[var(--text-primary)]">IMM</span>
</div>
<p className="text-[0.9375rem] text-[var(--text-secondary)] max-w-[25rem] leading-relaxed">
                        Field service, fabrication, welding, inspections, rebuilds, and machining for mining and construction operations.
                    </p>
</div>
<div>
<h4 className="text-[0.875rem] font-bold text-[var(--text-primary)] uppercase tracking-wide mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a className="text-[0.9375rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#services">Services</a></li>
<li><a className="text-[0.9375rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#capabilities">Capabilities</a></li>
<li><a className="text-[0.9375rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#quality">Quality &amp; Safety</a></li>
<li><a className="text-[0.9375rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="#experience">Experience</a></li>
</ul>
</div>
<div>
<h4 className="text-[0.875rem] font-bold text-[var(--text-primary)] uppercase tracking-wide mb-4">Contact</h4>
<ul className="space-y-2">
<li><a className="text-[0.9375rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="tel:928-965-6524">928-965-6524</a></li>
<li><a className="text-[0.9375rem] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" href="mailto:imm_arizona@yahoo.com">imm_arizona@yahoo.com</a></li>
<li className="text-[0.9375rem] text-[var(--text-secondary)] mt-4">Serving AZ / NV / NM</li>
</ul>
</div>
</div>
<div className="border-t border-[var(--border-color)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[0.8125rem] text-[var(--text-secondary)]">©  Independent Mine Maintenance. All rights reserved.</p>
<p className="text-[0.8125rem] text-[var(--text-secondary)]">Employee Owned &amp; Operated</p>
</div>
</div>
</footer>



    </>
  );
}
