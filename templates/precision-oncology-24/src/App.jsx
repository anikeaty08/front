import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
body: ['"Inter"', 'system-ui', 'sans-serif'],
mono: ['"IBM Plex Mono"', 'monospace'],
},
colors: {
primary: '#111214',
secondary: '#5A5D63',
accent: '#00BFA5',
background: '#F8F8F6',
surface: '#FFFFFF',
},
transitionTimingFunction: {
'clinical': 'cubic-bezier(0.16, 1, 0.3, 1)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // Check for reduced motion preference
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

            // 1. Intersection Observer for Reveals
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        // Trigger inner animations if needed
                        if (!prefersReducedMotion) {
                            // Phase bars
                            const bars = entry.target.querySelectorAll('.phase-fill');
                            bars.forEach(bar => {
                                const targetWidth = bar.getAttribute('data-width');
                                bar.style.transform = `scaleX(${targetWidth})`;
                            });

                            // Phase dots
                            const dots = entry.target.querySelectorAll('.animate-clinical-pulse');
                            dots.forEach(dot => {
                                dot.style.opacity = '1';
                            });

                            // Number Counters
                            const counters = entry.target.querySelectorAll('.data-counter:not(.counted)');
                            counters.forEach(counter => {
                                counter.classList.add('counted');
                                const target = parseFloat(counter.getAttribute('data-target'));
                                const decimals = parseInt(counter.getAttribute('data-decimals') || 0);
                                animateValue(counter, 0, target, 2000, decimals);
                            });
                        } else {
                            // Fallback for reduced motion: instantly set values
                            const bars = entry.target.querySelectorAll('.phase-fill');
                            bars.forEach(bar => { bar.style.transform = `scaleX(${bar.getAttribute('data-width')})`; });
                            
                            const counters = entry.target.querySelectorAll('.data-counter:not(.counted)');
                            counters.forEach(counter => {
                                counter.classList.add('counted');
                                const target = parseFloat(counter.getAttribute('data-target'));
                                const decimals = parseInt(counter.getAttribute('data-decimals') || 0);
                                counter.textContent = decimals > 0 ? target.toFixed(decimals) : target.toLocaleString();
                            });
                        }

                        observer.unobserve(entry.target); // Trigger once
                    }
                });
            }, observerOptions);

            // Observe all animation targets
            document.querySelectorAll('.reveal-element, .draw-line').forEach(el => {
                observer.observe(el);
            });

            // 2. Number Counter Logic
            function animateValue(obj, start, end, duration, decimals) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    
                    // easeOut cubic
                    const easeProgress = 1 - Math.pow(1 - progress, 3);
                    let current = start + easeProgress * (end - start);
                    
                    if (decimals > 0) {
                        obj.textContent = current.toFixed(decimals);
                    } else {
                        obj.textContent = Math.floor(current).toLocaleString();
                    }
                    
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        // Ensure exact final value
                        obj.textContent = decimals > 0 ? end.toFixed(decimals) : end.toLocaleString();
                    }
                };
                window.requestAnimationFrame(step);
            }

            // 3. Navbar scroll effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-surface', 'border-b-primary/10');
                    navbar.classList.remove('bg-transparent', 'border-transparent');
                } else {
                    navbar.classList.remove('bg-surface', 'border-b-primary/10');
                    navbar.classList.add('bg-transparent', 'border-transparent');
                }
            });

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-[9999] opacity-[0.025] mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent border-b border-transparent" id="navbar">
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] h-20 flex items-center justify-between">
<a className="font-display font-semibold text-[clamp(1.2rem,1.5vw,1.5rem)] tracking-[0.08em] uppercase text-primary" href="#">
                OLVEX
            </a>
<div className="hidden lg:flex items-center gap-10">
<a className="font-display font-medium text-[0.8rem] tracking-tight hover:text-accent transition-colors" href="#science">SCIENCE</a>
<a className="font-display font-medium text-[0.8rem] tracking-tight hover:text-accent transition-colors" href="#pipeline">PIPELINE</a>
<a className="font-display font-medium text-[0.8rem] tracking-tight hover:text-accent transition-colors" href="#team">TEAM</a>
<a className="font-display font-medium text-[0.8rem] tracking-tight hover:text-accent transition-colors" href="#publications">PUBLICATIONS</a>
</div>
<a className="hidden lg:inline-flex items-center gap-2 px-[clamp(1.25rem,2.5vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] font-mono text-[0.75rem] font-medium uppercase tracking-[0.1em] text-surface bg-accent rounded-none hover:bg-primary focus:outline focus:outline-1 focus:outline-accent focus:outline-offset-2 transition-all duration-250" href="#partner">
                PARTNER INQUIRIES
            </a>
<button className="lg:hidden text-primary">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-16 flex items-center">
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center relative">

<div className="lg:col-span-5 relative z-10 flex flex-col justify-center reveal-element">
<h1 className="font-display font-light text-[clamp(2.75rem,5.5vw,5.5rem)] leading-[1.05] tracking-[-0.03em] text-primary mb-6">
                        PRECISION ONCOLOGY.<br/>MEASURED IN OUTCOMES.
                    </h1>
<p className="font-body text-[clamp(0.9rem,1vw,1rem)] leading-[1.75] text-secondary max-w-[50ch] mb-10">
                        OLVEX engineers targeted therapies against validated oncogenic drivers — with Phase II evidence to prove efficacy in patient populations where current standards fail.
                    </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2.5 px-[clamp(1.25rem,2.5vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] font-mono text-[0.75rem] font-medium uppercase tracking-[0.1em] text-surface bg-accent hover:bg-primary transition-all duration-250" href="#evidence">
                            ACCESS CLINICAL DATA
                        </a>
<a className="inline-flex items-center gap-2 px-[clamp(1.25rem,2.5vw,2rem)] py-[clamp(0.75rem,1.5vw,1rem)] font-mono text-[0.75rem] font-medium uppercase tracking-[0.1em] text-primary bg-transparent border border-primary/20 hover:border-primary/60 transition-all duration-250" href="#pipeline">
                            View Pipeline →
                        </a>
</div>
<div className="mt-12 flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-none bg-primary"></div>
<span className="font-mono text-[0.7rem] uppercase tracking-[0.08em] text-secondary">
                            Phase II data published in The Lancet Oncology. 3 IND approvals.
                        </span>
</div>
</div>

<div className="lg:col-span-7 lg:-ml-8 relative z-20 mt-12 lg:mt-0 reveal-element" style={{transitionDelay: '0.2s'}}>

<div className="bg-surface border border-primary/10 p-[clamp(2rem,3vw,3rem)] shadow-[0_20px_40px_rgba(17,18,20,0.03)] border-t-2 border-t-accent w-full group transition-all duration-500 hover:-translate-y-1">
<div className="flex justify-between items-start mb-12">
<div>
<span className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-secondary block mb-2">Primary Endpoint Reached</span>
<h3 className="font-display font-medium text-[clamp(1.25rem,2vw,1.75rem)] tracking-tight">OLX-401 Cohort A</h3>
</div>

<div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] px-3 py-1 border border-accent/30 text-accent flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-accent animate-clinical-pulse"></div>
                                PHASE II
                            </div>
</div>

<div className="grid grid-cols-2 gap-8 mb-8">
<div>
<div className="font-mono text-[clamp(2rem,3vw,2.5rem)] font-medium tracking-tight text-accent mb-1 data-counter" data-decimals="1" data-target="68.4">0.0</div>
<div className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-secondary">Objective Response Rate (%)</div>
</div>
<div>
<div className="font-mono text-[clamp(2rem,3vw,2.5rem)] font-medium tracking-tight text-primary mb-1 data-counter" data-decimals="1" data-target="14.2">0.0</div>
<div className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-secondary">Median OS (Months)</div>
</div>
</div>
<div className="h-px bg-primary/10 w-full mb-8 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-accent draw-line"></div>
</div>
<div className="flex justify-between items-end">
<div>
<div className="font-mono text-[1.25rem] font-medium tracking-tight text-primary mb-1 data-counter" data-decimals="0" data-target="84">0</div>
<div className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-secondary">Patient Cohort (n)</div>
</div>
<a className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-primary hover:text-accent transition-colors flex items-center gap-1" href="#">
                                FULL REPORT <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-primary/10 draw-line"></div>
</section>

<section className="bg-surface border-b border-primary/10" id="evidence">
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-primary/10">
<div className="p-8 lg:p-12 reveal-element flex flex-col justify-center">
<div className="font-mono text-[clamp(2.5rem,4vw,3.5rem)] font-medium tracking-tight text-primary mb-4 flex items-baseline">
<span className="data-counter text-accent" data-decimals="1" data-target="68.4">0.0</span><span className="text-accent">%</span>
</div>
<div className="font-body font-medium text-[clamp(0.9rem,1vw,1rem)] text-primary mb-1">Objective response rate.</div>
<div className="font-mono text-[0.75rem] text-secondary tracking-[0.08em]">Phase II, n=84</div>
</div>
<div className="p-8 lg:p-12 reveal-element flex flex-col justify-center" style={{transitionDelay: '0.1s'}}>
<div className="font-mono text-[clamp(2.5rem,4vw,3.5rem)] font-medium tracking-tight text-primary mb-4 flex items-baseline">
<span className="data-counter" data-decimals="1" data-target="14.2">0.0</span><span className="text-[clamp(1rem,1.5vw,1.5rem)] ml-2 text-secondary">mo</span>
</div>
<div className="font-body font-medium text-[clamp(0.9rem,1vw,1rem)] text-primary mb-1">Median overall survival.</div>
<div className="font-mono text-[0.75rem] text-secondary tracking-[0.08em]">vs 8.1mo standard of care</div>
</div>
<div className="p-8 lg:p-12 reveal-element flex flex-col justify-center" style={{transitionDelay: '0.2s'}}>
<div className="font-mono text-[clamp(2.5rem,4vw,3.5rem)] font-medium tracking-tight text-primary mb-4">
<span className="data-counter" data-decimals="0" data-target="3">0</span>
</div>
<div className="font-body font-medium text-[clamp(0.9rem,1vw,1rem)] text-primary mb-1">Active IND approvals.</div>
<div className="font-mono text-[0.75rem] text-secondary tracking-[0.08em]">FDA, EMA, PMDA</div>
</div>
<div className="p-8 lg:p-12 reveal-element flex flex-col justify-center" style={{transitionDelay: '0.3s'}}>
<div className="font-mono text-[clamp(2.5rem,4vw,3.5rem)] font-medium tracking-tight text-primary mb-4">
<span className="data-counter" data-decimals="0" data-target="847">0</span>
</div>
<div className="font-body font-medium text-[clamp(0.9rem,1vw,1rem)] text-primary mb-1">Patients enrolled to date.</div>
<div className="font-mono text-[0.75rem] text-secondary tracking-[0.08em]">Across 6 clinical sites</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vw,12rem)] relative border-b border-primary/10" id="science">
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
<div className="mb-24 reveal-element">
<span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-accent inline-block mb-6">[02] THE SCIENCE</span>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-8">
<h2 className="font-display font-light text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-primary mb-6">
                            ONE TARGET. VALIDATED ACROSS THREE TUMOR TYPES.
                        </h2>
<p className="font-body text-[clamp(0.9rem,1vw,1rem)] leading-[1.75] text-secondary max-w-[64ch]">
                            OLX-401 selectively inhibits the KRAS G12C oncogenic driver — the most prevalent undruggable mutation in solid tumors. Three independent clinical datasets confirm durable response.
                        </p>
</div>
</div>
</div>
<div className="space-y-16 lg:space-y-24">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start reveal-element relative">
<div className="hidden lg:block absolute top-6 left-0 w-full h-px bg-primary/10 -z-10 draw-line"></div>
<div className="lg:col-span-4 bg-background py-4 lg:py-0 lg:pr-8">
<span className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-primary block">
                            OLX-401 MECHANISM
                        </span>
<span className="font-mono text-[0.65rem] text-secondary mt-1 block">TGT-K-01</span>
</div>
<div className="lg:col-span-8 bg-background lg:pl-8 py-4 lg:py-0">
<p className="font-body text-[clamp(1rem,1.25vw,1.25rem)] leading-[1.6] text-primary mb-6 max-w-[64ch]">
                            Covalent irreversible inhibition of KRAS G12C in the inactive GDP-bound state. Selectivity ratio: &gt;1000-fold versus wild-type KRAS in cellular assays.
                        </p>
<a className="font-mono text-[0.75rem] uppercase tracking-[0.08em] border-b border-primary/30 pb-1 text-primary hover:text-accent hover:border-accent transition-colors" href="#">
                            View Assay Data
                        </a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start reveal-element relative">
<div className="hidden lg:block absolute top-6 left-0 w-full h-px bg-primary/10 -z-10 draw-line"></div>

<div className="lg:col-span-8 lg:order-2 bg-background lg:pl-8 py-4 lg:py-0">
<p className="font-body text-[clamp(1rem,1.25vw,1.25rem)] leading-[1.6] text-primary mb-6 max-w-[64ch]">
                            Combination approach with SHP2 inhibitor prevents the adaptive feedback activation that limits single-agent KRAS inhibitors. No acquired resistance observed at 12-month follow-up in Phase I cohort.
                        </p>
<a className="font-mono text-[0.75rem] uppercase tracking-[0.08em] border-b border-primary/30 pb-1 text-primary hover:text-accent hover:border-accent transition-colors" href="#">
                            Review Resistance Profile
                        </a>
</div>
<div className="lg:col-span-4 lg:order-1 bg-background py-4 lg:py-0 lg:pr-8">
<span className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-primary block">
                            RESISTANCE PATHWAY COVERAGE
                        </span>
<span className="font-mono text-[0.65rem] text-secondary mt-1 block">CMB-S-02</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start reveal-element relative">
<div className="hidden lg:block absolute top-6 left-0 w-full h-px bg-primary/10 -z-10 draw-line"></div>
<div className="lg:col-span-4 bg-background py-4 lg:py-0 lg:pr-8">
<span className="font-mono text-[0.75rem] uppercase tracking-[0.08em] text-primary block">
                            BIOMARKER STRATEGY
                        </span>
<span className="font-mono text-[0.65rem] text-secondary mt-1 block">BMRK-D-03</span>
</div>
<div className="lg:col-span-8 bg-background lg:pl-8 py-4 lg:py-0">
<p className="font-body text-[clamp(1rem,1.25vw,1.25rem)] leading-[1.6] text-primary mb-6 max-w-[64ch]">
                            ctDNA monitoring as a pharmacodynamic biomarker enables early response assessment within 21 days of treatment initiation. Validated in 3 retrospective cohorts.
                        </p>
<a className="font-mono text-[0.75rem] uppercase tracking-[0.08em] border-b border-primary/30 pb-1 text-primary hover:text-accent hover:border-accent transition-colors" href="#">
                            Access Methodology
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vw,12rem)] bg-surface border-b border-primary/10" id="pipeline">
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
<div className="mb-16 reveal-element">
<span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-accent inline-block mb-6">[03]</span>
<h2 className="font-display font-light text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-primary">
                    PIPELINE.
                </h2>
</div>

<div className="hidden lg:grid grid-cols-12 gap-8 pb-4 border-b border-primary/20 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-secondary">
<div className="col-span-4">Program / Indication / Modality</div>
<div className="col-span-8">Development Phase / Status</div>
</div>

<div className="flex flex-col">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-8 lg:py-10 border-b border-primary/10 items-center reveal-element">
<div className="lg:col-span-4 flex flex-col gap-2">
<div className="flex items-center gap-3">
<span className="font-mono text-[1rem] font-medium text-primary">OLX-401</span>
<span className="font-mono text-[0.65rem] px-2 py-0.5 bg-primary/5 text-primary">Small molecule inhibitor</span>
</div>
<span className="font-body text-[0.9rem] text-secondary">NSCLC (KRAS G12C)</span>
</div>
<div className="lg:col-span-8 flex flex-col gap-4">
<div className="flex justify-between items-end font-mono text-[0.7rem] uppercase tracking-[0.08em]">
<span className="text-accent font-medium">Phase II</span>
<span className="text-secondary">PARTNER: Academic Medical Center</span>
</div>

<div className="h-px bg-primary/10 w-full relative">

<div className="absolute top-[-3px] left-0 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] left-1/3 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] left-2/3 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] right-0 w-px h-2 bg-primary/20"></div>

<div className="absolute top-0 left-0 h-full bg-accent phase-fill transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left scale-x-0" data-width="0.66"></div>

<div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-none animate-clinical-pulse opacity-0 transition-opacity duration-300 delay-1000" style={{left: '66%'}}></div>
</div>
<div className="flex justify-between font-mono text-[0.6rem] text-primary/40 mt-1">
<span>PRE</span>
<span>PH I</span>
<span>PH II</span>
<span>PH III</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-8 lg:py-10 border-b border-primary/10 items-center reveal-element">
<div className="lg:col-span-4 flex flex-col gap-2">
<div className="flex items-center gap-3">
<span className="font-mono text-[1rem] font-medium text-primary">OLX-402</span>
<span className="font-mono text-[0.65rem] px-2 py-0.5 bg-primary/5 text-primary">Combination (OLX-401 + SHP2i)</span>
</div>
<span className="font-body text-[0.9rem] text-secondary">Pancreatic adenocarcinoma</span>
</div>
<div className="lg:col-span-8 flex flex-col gap-4">
<div className="flex justify-between items-end font-mono text-[0.7rem] uppercase tracking-[0.08em]">
<span className="text-accent font-medium">Phase I/II</span>
<span className="text-secondary">Status: Enrollment open</span>
</div>
<div className="h-px bg-primary/10 w-full relative">
<div className="absolute top-[-3px] left-0 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] left-1/3 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] left-2/3 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] right-0 w-px h-2 bg-primary/20"></div>
<div className="absolute top-0 left-0 h-full bg-accent phase-fill transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left scale-x-0" data-width="0.45"></div>
<div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-none animate-clinical-pulse opacity-0 transition-opacity duration-300 delay-1000" style={{left: '45%'}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-8 lg:py-10 border-b border-primary/10 items-center reveal-element">
<div className="lg:col-span-4 flex flex-col gap-2">
<div className="flex items-center gap-3">
<span className="font-mono text-[1rem] font-medium text-primary">OLX-403</span>
<span className="font-mono text-[0.65rem] px-2 py-0.5 bg-primary/5 text-primary">Small molecule inhibitor</span>
</div>
<span className="font-body text-[0.9rem] text-secondary">Colorectal (KRAS G12C)</span>
</div>
<div className="lg:col-span-8 flex flex-col gap-4">
<div className="flex justify-between items-end font-mono text-[0.7rem] uppercase tracking-[0.08em]">
<span className="text-accent font-medium">Phase I</span>
<span className="text-secondary">Status: Dose escalation</span>
</div>
<div className="h-px bg-primary/10 w-full relative">
<div className="absolute top-[-3px] left-0 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] left-1/3 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] left-2/3 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] right-0 w-px h-2 bg-primary/20"></div>
<div className="absolute top-0 left-0 h-full bg-accent phase-fill transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left scale-x-0" data-width="0.15"></div>
<div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-none animate-clinical-pulse opacity-0 transition-opacity duration-300 delay-1000" style={{left: '15%'}}></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 py-8 lg:py-10 items-center reveal-element">
<div className="lg:col-span-4 flex flex-col gap-2">
<div className="flex items-center gap-3">
<span className="font-mono text-[1rem] font-medium text-primary">OLX-501</span>
<span className="font-mono text-[0.65rem] px-2 py-0.5 bg-primary/5 text-primary">Next-generation inhibitor</span>
</div>
<span className="font-body text-[0.9rem] text-secondary">NSCLC (KRAS G12D)</span>
</div>
<div className="lg:col-span-8 flex flex-col gap-4">
<div className="flex justify-between items-end font-mono text-[0.7rem] uppercase tracking-[0.08em]">
<span className="text-accent font-medium">Preclinical</span>
<span className="text-secondary">IND targeted: Q3 2026</span>
</div>
<div className="h-px bg-primary/10 w-full relative">
<div className="absolute top-[-3px] left-0 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] left-1/3 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] left-2/3 w-px h-2 bg-primary/20"></div>
<div className="absolute top-[-3px] right-0 w-px h-2 bg-primary/20"></div>
<div className="absolute top-0 left-0 h-full bg-accent phase-fill transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left scale-x-0" data-width="0.05"></div>
<div className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent rounded-none animate-clinical-pulse opacity-0 transition-opacity duration-300 delay-1000" style={{left: '5%'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vw,12rem)] border-b border-primary/10" id="team">
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
<div className="mb-16 reveal-element">
<span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-accent inline-block mb-6">[04]</span>
<h2 className="font-display font-light text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-primary">
                    THE TEAM.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

<div className="reveal-element">
<div className="aspect-[4/5] w-full max-w-[400px] mb-8 relative bg-primary/5 overflow-hidden">

<img alt="Dr. Sarah Okonkwo" className="w-full h-full object-cover filter grayscale contrast-[1.15] brightness-90" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="font-display font-medium text-[clamp(1.25rem,2vw,1.75rem)] tracking-tight text-primary mb-2">DR. SARAH OKONKWO, MD PhD</h3>
<p className="font-mono text-[0.75rem] text-secondary leading-relaxed mb-6 max-w-[40ch]">
                        Professor of Medical Oncology, Dana-Farber Cancer Institute. KRAS biology pioneer, 140+ peer-reviewed publications.
                    </p>
<div className="pl-4 border-l border-accent py-1">
<p className="font-body text-[clamp(0.9rem,1vw,1rem)] italic text-primary leading-relaxed max-w-[45ch]">
                            "We don't pursue targets because they're druggable. We pursue them because the biology demands it."
                        </p>
</div>
</div>

<div className="reveal-element" style={{transitionDelay: '0.2s'}}>
<div className="aspect-[4/5] w-full max-w-[400px] mb-8 relative bg-primary/5 overflow-hidden">
<img alt="Dr. James Varga" className="w-full h-full object-cover filter grayscale contrast-[1.15] brightness-90" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="font-display font-medium text-[clamp(1.25rem,2vw,1.75rem)] tracking-tight text-primary mb-2">DR. JAMES VARGA, PhD</h3>
<p className="font-mono text-[0.75rem] text-secondary leading-relaxed mb-6 max-w-[40ch]">
                        Former Head of Oncology Chemistry, Genentech. 22 years IND-enabling research.
                    </p>
<div className="pl-4 border-l border-accent py-1">
<p className="font-body text-[clamp(0.9rem,1vw,1rem)] italic text-primary leading-relaxed max-w-[45ch]">
                            "Every structural decision in OLX-401 is documented, rationalized, and reproducible. That's how drugs get approved."
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vw,12rem)] bg-surface border-b border-primary/10" id="publications">
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
<div className="mb-16 reveal-element w-full">
<div className="h-px w-full bg-primary/10 mb-16 draw-line origin-left"></div>
<span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-accent inline-block mb-6">[05]</span>
<h2 className="font-display font-light text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-primary">
                    PRIMARY EVIDENCE.
                </h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="flex flex-col gap-8 reveal-element">
<article className="p-8 border border-primary/10 hover:border-primary/30 transition-colors bg-background group cursor-pointer">
<div className="font-mono text-[0.7rem] text-secondary mb-4 flex justify-between">
<span>The Lancet Oncology</span>
<span>2025</span>
</div>
<h4 className="font-body font-medium text-[1rem] leading-[1.5] text-primary mb-8 group-hover:text-accent transition-colors">
                            Durable response to OLX-401 in KRAS G12C-mutated NSCLC: Phase II results.
                        </h4>
<span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-primary flex items-center gap-2">
                            VIEW PAPER <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</article>
<article className="p-8 border border-primary/10 hover:border-primary/30 transition-colors bg-background group cursor-pointer">
<div className="font-mono text-[0.7rem] text-secondary mb-4 flex justify-between">
<span>NEJM Evidence</span>
<span>2023</span>
</div>
<h4 className="font-body font-medium text-[1rem] leading-[1.5] text-primary mb-8 group-hover:text-accent transition-colors">
                            Phase I dose-escalation study of OLX-401 in refractory solid tumors.
                        </h4>
<span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-primary flex items-center gap-2">
                            VIEW PAPER <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</article>
</div>

<div className="flex flex-col gap-8 reveal-element" style={{transitionDelay: '0.1s'}}>
<article className="p-8 border border-primary/10 hover:border-primary/30 transition-colors bg-background group cursor-pointer h-full lg:min-h-[300px] flex flex-col justify-between">
<div>
<div className="font-mono text-[0.7rem] text-secondary mb-4 flex justify-between">
<span>Nature Medicine</span>
<span>2024</span>
</div>
<h4 className="font-body font-medium text-[1rem] leading-[1.5] text-primary mb-8 group-hover:text-accent transition-colors">
                                Combination KRAS/SHP2 inhibition prevents adaptive resistance in solid tumors.
                            </h4>
</div>
<span className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-primary flex items-center gap-2 mt-auto">
                            VIEW PAPER <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</article>
</div>

<div className="reveal-element h-full" style={{transitionDelay: '0.2s'}}>
<article className="p-8 lg:p-12 border-t-2 border-t-accent border-x border-b border-primary/10 bg-white h-full shadow-[0_20px_40px_rgba(17,18,20,0.02)] group cursor-pointer flex flex-col relative overflow-hidden">

<div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
<iconify-icon height="120" icon="solar:document-text-linear" width="120"></iconify-icon>
</div>
<div className="mb-auto relative z-10">
<div className="inline-block font-mono text-[0.6rem] px-2 py-1 bg-accent/10 text-accent mb-6">FEATURED PUBLICATION</div>
<div className="font-mono text-[0.75rem] text-secondary mb-4 flex justify-between border-b border-primary/10 pb-4">
<span>Cancer Cell</span>
<span>2024</span>
</div>
<h4 className="font-display font-medium text-[clamp(1.25rem,1.5vw,1.5rem)] leading-[1.3] text-primary mb-6 group-hover:text-accent transition-colors">
                                KRAS G12C inhibitor OLX-401: mechanism, selectivity, and clinical translation.
                            </h4>
<p className="font-mono text-[0.75rem] text-secondary leading-relaxed mb-8">
                                Abstract: We report the discovery and characterization of OLX-401, a highly selective covalent inhibitor locking KRAS G12C in the inactive state. Preclinical models demonstrate profound and durable tumor regression without wild-type KRAS toxicity...
                            </p>
</div>
<div className="pt-8 border-t border-primary/10 relative z-10">
<span className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.1em] text-accent flex items-center gap-2">
                                VIEW PAPER <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</span>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="py-[clamp(6rem,10vw,12rem)] relative" id="partner">
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
<div className="lg:col-span-5 reveal-element">
<span className="font-mono text-[0.6rem] font-medium uppercase tracking-[0.18em] text-accent inline-block mb-6">[06]</span>
<h2 className="font-display font-light text-[clamp(2.5rem,4vw,4rem)] leading-[1.05] tracking-[-0.03em] text-primary mb-6">
                        COLLABORATE<br/>WITH OLVEX.
                    </h2>
<p className="font-body text-[clamp(0.9rem,1vw,1rem)] leading-[1.75] text-secondary max-w-[45ch]">
                        We engage with academic medical centers, pharmaceutical partners, and institutional investors through a structured intake process. All inquiries receive a response within 5 business days.
                    </p>
</div>
<div className="lg:col-span-7 lg:pl-16 reveal-element" style={{transitionDelay: '0.2s'}}>
<div className="bg-surface border border-primary/10 p-[clamp(2rem,3vw,3rem)] shadow-sm">
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-secondary">FULL NAME</label>
<input className="w-full bg-background border border-primary/20 px-4 py-3 font-body text-[0.9rem] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors rounded-none" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-secondary">INSTITUTION / ORGANIZATION</label>
<input className="w-full bg-background border border-primary/20 px-4 py-3 font-body text-[0.9rem] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors rounded-none" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-secondary">EMAIL ADDRESS</label>
<input className="w-full bg-background border border-primary/20 px-4 py-3 font-body text-[0.9rem] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors rounded-none" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-secondary">INQUIRY TYPE</label>
<div className="relative">
<select className="w-full bg-background border border-primary/20 px-4 py-3 font-body text-[0.9rem] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors rounded-none cursor-pointer" required="">
<option disabled="" selected="" value="">Select an option...</option>
<option value="clinical">Clinical Site Partnership</option>
<option value="licensing">Licensing Inquiry</option>
<option value="investment">Investment Inquiry</option>
<option value="science">Scientific Collaboration</option>
<option value="other">Other</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-secondary">MESSAGE</label>
<textarea className="w-full bg-background border border-primary/20 px-4 py-3 font-body text-[0.9rem] focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors rounded-none resize-none" required="" rows="3"></textarea>
</div>
<button className="w-full bg-accent text-white font-mono text-[0.75rem] font-medium uppercase tracking-[0.1em] py-4 hover:bg-primary transition-colors focus:outline focus:outline-1 focus:outline-accent focus:outline-offset-2 rounded-none mt-4" type="submit">
                                SUBMIT INQUIRY
                            </button>
<p className="font-mono text-[0.6rem] text-secondary/60 text-center mt-4">
                                All submissions are reviewed by our Business Development team. We do not share inquiry data with third parties.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-surface border-t border-primary/10 pt-20 pb-8 relative overflow-hidden">

<div className="absolute bottom-[-10%] left-0 w-full pointer-events-none select-none z-0 overflow-hidden flex justify-center">
<span className="font-display font-light text-[22vw] leading-none tracking-tight text-primary opacity-[0.02]">
                OLVEX
            </span>
</div>
<div className="max-w-[clamp(70rem,92vw,96rem)] mx-auto px-[clamp(1.5rem,5vw,4rem)] relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">

<div className="lg:col-span-5 flex flex-col gap-6">
<span className="font-display font-medium text-[1.5rem] tracking-[0.08em] text-primary">OLVEX</span>
<div>
<h5 className="font-mono text-[0.75rem] font-medium uppercase tracking-[0.08em] text-primary mb-2">OLVEX DATA UPDATES</h5>
<p className="font-body text-[0.85rem] text-secondary mb-4">Clinical data, publication alerts, and regulatory milestones.</p>
<form className="flex w-full max-w-[400px]" onsubmit="event.preventDefault();">
<input className="w-full bg-background border border-primary/20 border-r-0 px-4 py-2 font-body text-[0.8rem] focus:outline-none focus:border-accent rounded-none" placeholder="Institutional Email" required="" type="email"/>
<button className="bg-primary text-white font-mono text-[0.65rem] uppercase tracking-[0.1em] px-6 hover:bg-accent transition-colors rounded-none border border-primary hover:border-accent" type="submit">
                                SUBSCRIBE
                            </button>
</form>
</div>
</div>

<div className="lg:col-span-3 lg:col-start-7 flex flex-col gap-3 font-mono text-[0.7rem] uppercase tracking-[0.08em]">
<a className="text-secondary hover:text-accent transition-colors w-fit" href="#science">SCIENCE</a>
<a className="text-secondary hover:text-accent transition-colors w-fit" href="#pipeline">PIPELINE</a>
<a className="text-secondary hover:text-accent transition-colors w-fit" href="#team">TEAM</a>
<a className="text-secondary hover:text-accent transition-colors w-fit" href="#publications">PUBLICATIONS</a>
<a className="text-secondary hover:text-accent transition-colors w-fit mt-2" href="#partner">PARTNER</a>
</div>

<div className="lg:col-span-3 flex flex-col justify-between gap-8">
<div className="flex gap-8 font-mono text-[0.7rem] uppercase tracking-[0.08em]">
<div className="flex flex-col gap-3">
<a className="text-secondary hover:text-primary transition-colors" href="#">PRESS</a>
<a className="text-secondary hover:text-primary transition-colors" href="#">CAREERS</a>
<a className="text-secondary hover:text-primary transition-colors" href="#">EVENTS</a>
</div>
<div className="flex flex-col gap-3">
<a className="text-secondary hover:text-primary transition-colors" href="#">LEGAL</a>
<a className="text-secondary hover:text-primary transition-colors" href="#">PRIVACY</a>
<a className="text-secondary hover:text-primary transition-colors" href="#">REGULATORY</a>
</div>
</div>
<a className="inline-flex items-center gap-2 px-6 py-3 font-mono text-[0.7rem] font-medium uppercase tracking-[0.1em] text-surface bg-accent hover:bg-primary transition-all duration-250 w-fit" href="#pipeline">
                        View full pipeline →
                    </a>
</div>
</div>
<div className="pt-8 border-t border-primary/10">
<p className="font-mono text-[0.6rem] text-secondary/60 leading-relaxed max-w-[100ch]">
                    OLVEX Therapeutics © 2026. All pipeline data reflects most recent clinical updates. For regulatory filings, refer to official submissions. The information provided is for informational purposes only and does not constitute medical advice or an offer to sell securities.
                </p>
</div>
</div>
</footer>



    </>
  );
}
