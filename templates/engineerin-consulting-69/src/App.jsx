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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
black: '#080808',
surface: '#101010',
'surface-2': '#181818',
border: '#242424',
gold: '#CFB991',
'gold-dim': 'rgba(207, 185, 145, 0.15)',
'gold-line': 'rgba(207, 185, 145, 0.35)',
'text-primary': '#F0EDE8',
'text-secondary': '#8A8680',
'text-muted': '#4A4744',
},
fontFamily: {
display: ['"Cormorant Garamond"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
mono: ['"JetBrains Mono"', 'monospace'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Cursor Logic
        const cursor = document.getElementById('custom-cursor');
        const hoverTargets = document.querySelectorAll('.hover-target, a, button, input, textarea, select');

        if (window.matchMedia("(pointer: fine)").matches) {
            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            hoverTargets.forEach(target => {
                target.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
                target.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
            });
        }

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-surface', 'border-gold-line');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('bg-surface', 'border-gold-line');
                navbar.classList.add('border-transparent');
            }
        });

        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            document.body.classList.toggle('overflow-hidden');
            
            if(!mobileMenu.classList.contains('hidden')) {
                mobileBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="24" stroke-width="1.5"></iconify-icon>';
            } else {
                mobileBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" stroke-width="1.5"></iconify-icon>';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                document.body.classList.remove('overflow-hidden');
                mobileBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="24" stroke-width="1.5"></iconify-icon>';
            });
        });

        // Intersection Observer for Reveals
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Multi-step Form Logic
        function updateProgress(step) {
            for(let i=1; i<=4; i++) {
                const prog = document.getElementById(`prog-${i}`);
                if(i <= step) {
                    prog.classList.add('bg-gold');
                    prog.classList.remove('bg-border');
                } else {
                    prog.classList.remove('bg-gold');
                    prog.classList.add('bg-border');
                }
            }
        }

        function showStep(step) {
            document.querySelectorAll('.form-step').forEach(el => {
                el.classList.add('opacity-0', 'pointer-events-none');
                el.classList.remove('opacity-100', 'pointer-events-auto');
            });
            const activeStep = document.getElementById(`step-${step}`);
            activeStep.classList.remove('opacity-0', 'pointer-events-none');
            activeStep.classList.add('opacity-100', 'pointer-events-auto');
            updateProgress(step);
        }

        function nextStep(step) { showStep(step); }
        function prevStep(step) { showStep(step); }

        // Button selection toggles in Step 2
        document.querySelectorAll('#step-2 button.border').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('border-gold');
                this.classList.toggle('text-gold');
                this.classList.toggle('bg-gold-dim');
            });
        });

    
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
      
<div className="noise-overlay"></div>
<div id="custom-cursor"></div>

<nav className="fixed w-full top-0 z-50 transition-colors duration-300 border-b border-transparent" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">

<a className="font-sans font-medium text-lg tracking-tighter text-text-primary hover-target" href="#">
                ESC
            </a>

<div className="hidden md:flex items-center space-x-12 font-sans text-xs tracking-widest text-text-secondary uppercase">
<a className="nav-link hover:text-text-primary transition-colors hover-target" href="#about">About</a>
<a className="nav-link hover:text-text-primary transition-colors hover-target" href="#services">Services</a>
<a className="nav-link hover:text-text-primary transition-colors hover-target" href="#team">Team</a>
<a className="nav-link hover:text-text-primary transition-colors hover-target" href="#apply">Apply</a>
<a className="bg-gold text-black px-6 py-3 hover:bg-white transition-colors duration-300 hover-target font-normal text-text-primary hover:text-black" href="#partner">Partner With Us</a>
</div>

<button className="md:hidden text-gold hover-target" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-black z-40 hidden flex-col justify-center items-center space-y-8" id="mobile-menu">
<a className="font-display text-4xl tracking-tight text-text-primary hover-target mobile-link" href="#about">About</a>
<a className="font-display text-4xl tracking-tight text-text-primary hover-target mobile-link" href="#services">Services</a>
<a className="font-display text-4xl tracking-tight text-text-primary hover-target mobile-link" href="#team">Team</a>
<a className="font-display text-4xl tracking-tight text-text-primary hover-target mobile-link" href="#apply">Apply</a>
<a className="font-display text-4xl tracking-tight text-gold hover-target mobile-link" href="#partner">Partner</a>
</div>

<header className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 overflow-hidden">
<div className="max-w-[1400px] w-full mx-auto relative z-10">
<div className="relative w-full md:w-[60%] mb-12 reveal">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold-line -z-10"></div>
<h2 className="font-sans text-xs text-gold tracking-widest uppercase bg-black inline-block pr-6">
                    Engineering Strategies Consulting
                </h2>
</div>
<h1 className="font-display font-light text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-text-primary mb-10 reveal delay-1">
                Where Engineering<br/>Meets Strategy<span className="text-gold">.</span>
</h1>
<p className="font-sans font-light text-base md:text-lg text-text-secondary max-w-2xl mb-16 reveal delay-2 leading-relaxed">
                We deliver technical execution and operational intelligence to corporate partners, built by Purdue's elite engineering and business talent.
            </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center font-sans text-xs tracking-widest uppercase reveal delay-3">
<a className="border border-gold text-gold px-8 py-4 hover:bg-gold hover:text-black transition-colors duration-300 hover-target font-normal" href="#apply">
                    Apply to Join
                </a>
<a className="text-text-primary hover:text-gold transition-colors duration-300 flex items-center gap-2 hover-target group font-normal" href="#partner">
                    Partner With Us
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 font-sans text-xs text-text-muted tracking-widest uppercase">
<div className="w-[1px] h-12 bg-border relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gold scroll-line"></div>
</div>
<span>Scroll</span>
</div>
</header>

<div className="w-full bg-surface-2 border-y border-gold-line py-4 marquee-container">
<div className="marquee-content font-sans text-xs text-gold tracking-widest uppercase">
            REAL-WORLD PROJECTS  ·  STUDENT-LED EXECUTION  ·  CORPORATE PARTNERSHIPS  ·  PURDUE UNIVERSITY  ·  EST. 2026  ·  
            REAL-WORLD PROJECTS  ·  STUDENT-LED EXECUTION  ·  CORPORATE PARTNERSHIPS  ·  PURDUE UNIVERSITY  ·  EST. 2026  · 
        </div>
</div>

<section className="py-40 px-6 md:px-12 max-w-[1400px] mx-auto" id="about">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

<div className="lg:col-span-7 reveal">
<h2 className="font-display font-light text-5xl tracking-tight text-text-primary mb-12">
                    A Consulting Group Built for the Real World.
                </h2>
<div className="space-y-6 text-text-secondary text-sm md:text-base leading-relaxed mb-16">
<p>
                        Engineering Strategies Consulting (ESC) operates beyond the theoretical. We are an intensive, selectively sourced student consultancy at Purdue University Indianapolis, functioning as an extension of our corporate partners' strategic teams.
                    </p>
<p>
                        We bridge the critical gap between complex technical engineering and high-level business strategy. Our teams analyze, optimize, and execute on challenges where purely technical or purely operational approaches fall short.
                    </p>
</div>
<hr className="border-t border-gold-line w-24 mb-12"/>
<p className="font-display italic text-3xl tracking-tight text-text-primary font-light">
                    "Technical skills are most powerful when paired with business execution."
                </p>
</div>

<div className="lg:col-span-5 flex flex-col gap-6 reveal delay-1">

<div className="bg-surface-2 border border-border border-l-[3px] border-l-gold p-8 flex flex-col justify-between h-48 group hover:bg-surface transition-colors duration-300">
<span className="font-mono text-5xl text-gold font-light">06</span>
<span className="font-sans text-xs text-text-secondary tracking-widest uppercase">Founding Members</span>
</div>

<div className="bg-surface-2 border border-border border-l-[3px] border-l-gold p-8 flex flex-col justify-between h-48 group hover:bg-surface transition-colors duration-300">
<span className="font-mono text-5xl text-gold font-light">∞</span>
<span className="font-sans text-xs text-text-secondary tracking-widest uppercase">Real Corporate Projects</span>
</div>

<div className="bg-surface-2 border border-border border-l-[3px] border-l-gold p-8 flex flex-col justify-between h-48 group hover:bg-surface transition-colors duration-300">
<span className="font-mono text-5xl text-gold font-light">100%</span>
<span className="font-sans text-xs text-text-secondary tracking-widest uppercase">Student Led</span>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-12 max-w-[1400px] mx-auto border-t border-border" id="services">
<div className="mb-24 reveal">
<h3 className="font-sans text-xs text-gold tracking-widest uppercase mb-6">Our Practice Areas</h3>
<h2 className="font-display font-light text-5xl md:text-6xl tracking-tight text-text-primary max-w-3xl">
                Consulting at the Intersection of Engineering and Business.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border reveal delay-1">

<div className="bg-surface-2 p-12 relative group hover:bg-gold-dim transition-colors duration-500">
<div className="absolute left-0 top-0 w-[2px] h-full bg-gold scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></div>
<div className="font-display italic text-3xl text-gold mb-8">I</div>
<h4 className="font-sans font-normal text-xl text-text-primary mb-4 tracking-tight">Data Analytics &amp; Intelligence</h4>
<p className="text-sm text-text-secondary leading-relaxed">Transforming raw operational data into actionable strategic insights to drive efficiency and competitive advantage.</p>
</div>

<div className="bg-surface-2 p-12 relative group hover:bg-gold-dim transition-colors duration-500">
<div className="absolute left-0 top-0 w-[2px] h-full bg-gold scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></div>
<div className="font-display italic text-3xl text-gold mb-8">II</div>
<h4 className="font-sans font-normal text-xl text-text-primary mb-4 tracking-tight">Operational Strategy</h4>
<p className="text-sm text-text-secondary leading-relaxed">Evaluating and redesigning core business operations to align technical capabilities with market demands.</p>
</div>

<div className="bg-surface-2 p-12 relative group hover:bg-gold-dim transition-colors duration-500">
<div className="absolute left-0 top-0 w-[2px] h-full bg-gold scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></div>
<div className="font-display italic text-3xl text-gold mb-8">III</div>
<h4 className="font-sans font-normal text-xl text-text-primary mb-4 tracking-tight">Process Optimization</h4>
<p className="text-sm text-text-secondary leading-relaxed">Streamlining manufacturing, supply chain, and development pipelines using lean engineering principles.</p>
</div>

<div className="bg-surface-2 p-12 relative group hover:bg-gold-dim transition-colors duration-500">
<div className="absolute left-0 top-0 w-[2px] h-full bg-gold scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></div>
<div className="font-display italic text-3xl text-gold mb-8">IV</div>
<h4 className="font-sans font-normal text-xl text-text-primary mb-4 tracking-tight">Project Management</h4>
<p className="text-sm text-text-secondary leading-relaxed">End-to-end oversight of complex technical deployments, ensuring milestones meet rigorous quality standards.</p>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-12 bg-surface border-y border-border overflow-hidden">
<div className="max-w-[1400px] mx-auto text-center mb-24 reveal">
<h2 className="font-display font-light text-5xl tracking-tight text-text-primary">The ESC Engagement Model</h2>
</div>
<div className="max-w-[1400px] mx-auto relative reveal delay-1">

<div className="hidden md:block absolute top-6 left-[10%] w-[80%] h-[1px] border-t border-dashed border-gold-line z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

<div className="flex flex-col items-center text-center bg-surface relative">
<div className="w-12 h-12 bg-black border border-gold flex items-center justify-center font-mono text-gold mb-8">01</div>
<h4 className="font-sans text-xs text-text-primary tracking-widest uppercase mb-4">Identify Challenge</h4>
<p className="text-sm text-text-secondary leading-relaxed">Scoping the technical and business parameters of the client's operational friction.</p>
</div>

<div className="flex flex-col items-center text-center bg-surface relative">
<div className="w-12 h-12 bg-black border border-gold flex items-center justify-center font-mono text-gold mb-8">02</div>
<h4 className="font-sans text-xs text-text-primary tracking-widest uppercase mb-4">Assemble Team</h4>
<p className="text-sm text-text-secondary leading-relaxed">Curating a bespoke task force of engineering and strategy talent suited for the domain.</p>
</div>

<div className="flex flex-col items-center text-center bg-surface relative">
<div className="w-12 h-12 bg-black border border-gold flex items-center justify-center font-mono text-gold mb-8">03</div>
<h4 className="font-sans text-xs text-text-primary tracking-widest uppercase mb-4">Execute &amp; Deliver</h4>
<p className="text-sm text-text-secondary leading-relaxed">Rigorous analysis followed by actionable implementation plans and technical handoffs.</p>
</div>

<div className="flex flex-col items-center text-center bg-surface relative">
<div className="w-12 h-12 bg-black border border-gold flex items-center justify-center font-mono text-gold mb-8">04</div>
<h4 className="font-sans text-xs text-text-primary tracking-widest uppercase mb-4">Debrief &amp; Grow</h4>
<p className="text-sm text-text-secondary leading-relaxed">Internal synthesis of project learnings to continuously elevate our institutional capability.</p>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-12 max-w-[1400px] mx-auto" id="team">
<div className="mb-24 reveal">
<h3 className="font-sans text-xs text-gold tracking-widest uppercase mb-6">Leadership</h3>
<h2 className="font-display font-light text-5xl tracking-tight text-text-primary">The Operating Committee.</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 reveal delay-1">

<div className="flex flex-col group hover-target">
<div className="w-full aspect-square pattern-bg mb-6 grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
<h4 className="font-display font-normal text-2xl tracking-tight text-text-primary mb-1">Owen Hernly</h4>
<p className="font-sans text-xs text-gold tracking-widest uppercase mb-2">President</p>
<div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
<p className="text-text-secondary text-xs">Founding Member</p>
<a className="text-gold hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="flex flex-col group hover-target">
<div className="w-full aspect-square pattern-bg mb-6 grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
<h4 className="font-display font-normal text-2xl tracking-tight text-text-primary mb-1">Andre Rego</h4>
<p className="font-sans text-xs text-gold tracking-widest uppercase mb-2">Treasurer</p>
<div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
<p className="text-text-secondary text-xs">EE '28</p>
<a className="text-gold hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="flex flex-col group hover-target">
<div className="w-full aspect-square pattern-bg mb-6 grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
<h4 className="font-display font-normal text-2xl tracking-tight text-text-primary mb-1">Gregory Stutz</h4>
<p className="font-sans text-xs text-gold tracking-widest uppercase mb-2">Faculty Advisor</p>
<div className="flex justify-between items-center mt-auto pt-4 border-t border-border">
<p className="text-text-secondary text-xs">Purdue University</p>
<a className="text-gold hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
</div>
</div>

<a className="flex flex-col group hover-target h-full" href="#apply">
<div className="w-full aspect-square border border-border flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-500">
<iconify-icon className="text-border group-hover:text-gold transition-colors duration-500" icon="solar:add-circle-linear" width="32"></iconify-icon>
</div>
<h4 className="font-display font-normal text-2xl tracking-tight text-text-muted group-hover:text-text-primary transition-colors mb-1">Your Name Here</h4>
<p className="font-sans text-xs text-border group-hover:text-gold tracking-widest uppercase transition-colors">Apply Now</p>
</a>
</div>
</section>

<section className="py-40 bg-surface border-y border-border" id="apply">
<div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">

<div className="reveal">
<h2 className="font-display font-light text-5xl tracking-tight text-text-primary mb-8">Join the Consulting Floor.</h2>
<p className="text-base text-text-secondary mb-12 max-w-md leading-relaxed">
                    We select individuals who demonstrate rigorous analytical thinking, technical proficiency, and the drive to solve high-stakes corporate challenges.
                </p>
<div className="inline-flex items-center gap-3 border border-border px-4 py-2 bg-black">
<div className="w-2 h-2 bg-gold animate-pulse"></div>
<span className="font-sans text-[10px] text-text-primary tracking-widest uppercase font-normal">Applications Open</span>
</div>
</div>

<div className="reveal delay-1 relative">

<div className="flex gap-2 mb-12">
<div className="h-[2px] flex-1 bg-gold transition-all duration-300" id="prog-1"></div>
<div className="h-[2px] flex-1 bg-border transition-all duration-300" id="prog-2"></div>
<div className="h-[2px] flex-1 bg-border transition-all duration-300" id="prog-3"></div>
<div className="h-[2px] flex-1 bg-border transition-all duration-300" id="prog-4"></div>
</div>
<form className="relative min-h-[400px]" id="apply-form" onsubmit="event.preventDefault();">

<div className="form-step absolute inset-0 w-full transition-opacity duration-300" id="step-1">
<h3 className="font-sans text-xs text-gold tracking-widest uppercase mb-8">01. Background</h3>
<div className="space-y-6">
<input className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all" placeholder="Full Name" type="text"/>
<input className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all" placeholder="Purdue Email" type="email"/>
<div className="grid grid-cols-2 gap-6">
<input className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all" placeholder="Major" type="text"/>
<select className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all appearance-none cursor-pointer">
<option className="bg-surface text-text-muted" disabled="" selected="" value="">Year</option>
<option className="bg-surface" value="fr">Freshman</option>
<option className="bg-surface" value="so">Sophomore</option>
<option className="bg-surface" value="jr">Junior</option>
<option className="bg-surface" value="sr">Senior</option>
</select>
</div>
</div>
<div className="mt-12 flex justify-end">
<button className="text-gold font-sans font-normal text-xs tracking-widest uppercase hover:text-white transition-colors hover-target flex items-center gap-2" onclick="nextStep(2)" type="button">
                                Continue <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="form-step absolute inset-0 w-full opacity-0 pointer-events-none transition-opacity duration-300" id="step-2">
<h3 className="font-sans text-xs text-gold tracking-widest uppercase mb-8">02. Alignment</h3>
<p className="text-sm text-text-secondary mb-6">Select areas of interest (multiple allowed):</p>
<div className="flex flex-wrap gap-4 mb-8">
<button className="border border-border px-4 py-2 text-sm text-text-secondary hover:border-gold hover:text-gold transition-colors hover-target focus:bg-gold-dim focus:border-gold focus:text-gold" type="button">Data Analytics</button>
<button className="border border-border px-4 py-2 text-sm text-text-secondary hover:border-gold hover:text-gold transition-colors hover-target focus:bg-gold-dim focus:border-gold focus:text-gold" type="button">Strategy</button>
<button className="border border-border px-4 py-2 text-sm text-text-secondary hover:border-gold hover:text-gold transition-colors hover-target focus:bg-gold-dim focus:border-gold focus:text-gold" type="button">Process Optimization</button>
<button className="border border-border px-4 py-2 text-sm text-text-secondary hover:border-gold hover:text-gold transition-colors hover-target focus:bg-gold-dim focus:border-gold focus:text-gold" type="button">Project Mgmt</button>
</div>
<select className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all appearance-none cursor-pointer">
<option className="bg-surface text-text-muted" disabled="" selected="" value="">Weekly Availability</option>
<option className="bg-surface" value="5-10">5 - 10 Hours</option>
<option className="bg-surface" value="10-15">10 - 15 Hours</option>
<option className="bg-surface" value="15+">15+ Hours</option>
</select>
<div className="mt-12 flex justify-between items-center">
<button className="text-text-muted font-sans font-normal text-xs tracking-widest uppercase hover:text-white transition-colors hover-target flex items-center gap-2" onclick="prevStep(1)" type="button">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                            </button>
<button className="text-gold font-sans font-normal text-xs tracking-widest uppercase hover:text-white transition-colors hover-target flex items-center gap-2" onclick="nextStep(3)" type="button">
                                Continue <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="form-step absolute inset-0 w-full opacity-0 pointer-events-none transition-opacity duration-300" id="step-3">
<h3 className="font-sans text-xs text-gold tracking-widest uppercase mb-8">03. Insights</h3>
<div className="space-y-6">
<textarea className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all resize-none" placeholder="Why ESC? (Keep it concise, under 150 words)" rows="3"></textarea>
<textarea className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all resize-none" placeholder="Describe a complex project or challenge you've tackled." rows="3"></textarea>
</div>
<div className="mt-12 flex justify-between items-center">
<button className="text-text-muted font-sans font-normal text-xs tracking-widest uppercase hover:text-white transition-colors hover-target flex items-center gap-2" onclick="prevStep(2)" type="button">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                            </button>
<button className="text-gold font-sans font-normal text-xs tracking-widest uppercase hover:text-white transition-colors hover-target flex items-center gap-2" onclick="nextStep(4)" type="button">
                                Continue <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="form-step absolute inset-0 w-full opacity-0 pointer-events-none transition-opacity duration-300" id="step-4">
<h3 className="font-sans text-xs text-gold tracking-widest uppercase mb-8">04. Credentials</h3>
<div className="border border-dashed border-border p-12 text-center hover:border-gold transition-colors duration-300 cursor-pointer hover-target mb-12 bg-transparent hover:bg-gold-dim">
<iconify-icon className="text-gold mb-4" icon="solar:document-add-linear" width="32"></iconify-icon>
<p className="font-sans text-xs text-text-primary tracking-widest uppercase mb-2">Upload Resume</p>
<p className="text-xs text-text-secondary">PDF format only, max 5MB.</p>
</div>
<div className="mt-12 flex justify-between items-center">
<button className="text-text-muted font-sans font-normal text-xs tracking-widest uppercase hover:text-white transition-colors hover-target flex items-center gap-2" onclick="prevStep(3)" type="button">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back
                            </button>
<button className="bg-gold text-black px-8 py-4 font-sans font-normal text-xs tracking-widest uppercase hover:bg-white transition-colors hover-target" type="submit">
                                Submit Application
                            </button>
</div>
</div>
</form>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-12 max-w-[800px] mx-auto text-center reveal" id="partner">
<h3 className="font-sans text-xs text-gold tracking-widest uppercase mb-6">Corporate Inquiry</h3>
<h2 className="font-display font-light text-5xl tracking-tight text-text-primary mb-6">
            Bring a Challenge. We'll Deliver Results.
        </h2>
<p className="text-base text-text-secondary mb-16 leading-relaxed">
            ESC partners with industry leaders to execute high-impact engineering and strategic projects. Contact our partnership team to scope an engagement.
        </p>
<form className="text-left space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all" placeholder="Company Name" type="text"/>
<input className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all" placeholder="Contact Name" type="text"/>
</div>
<input className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all" placeholder="Corporate Email" type="email"/>
<textarea className="w-full bg-transparent border-b border-border py-4 px-2 text-sm text-text-primary placeholder-text-muted hover-target transition-all resize-none" placeholder="Briefly describe the operational or technical challenge." rows="4"></textarea>
<button className="w-full bg-gold text-black py-5 font-sans font-normal text-xs tracking-widest uppercase hover:bg-white transition-colors hover-target mt-8" type="submit">
                Initiate Conversation
            </button>
</form>
</section>

<footer className="bg-[#040404] border-t border-gold-line py-20 px-6 md:px-12">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

<div>
<a className="font-sans font-medium text-lg tracking-tighter text-text-primary block mb-4" href="#">ESC</a>
<p className="text-sm text-text-secondary max-w-xs leading-relaxed">Where Engineering Meets Strategy. Purdue University Indianapolis.</p>
</div>

<div className="flex flex-col space-y-4 font-sans text-xs tracking-widest uppercase text-text-secondary">
<a className="hover:text-gold transition-colors hover-target w-max" href="#about">About</a>
<a className="hover:text-gold transition-colors hover-target w-max" href="#services">Services</a>
<a className="hover:text-gold transition-colors hover-target w-max" href="#team">Team</a>
</div>

<div className="flex flex-col space-y-4 font-sans text-xs tracking-widest uppercase text-text-secondary">
<a className="hover:text-gold transition-colors hover-target w-max" href="#apply">Apply</a>
<a className="hover:text-gold transition-colors hover-target w-max" href="#partner">Partner</a>
<a className="hover:text-gold transition-colors hover-target w-max mt-4 block lowercase font-sans tracking-normal" href="mailto:contact@esc-purdue.org">contact@esc-purdue.org</a>
</div>
</div>
<div className="max-w-[1400px] mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
<p className="font-sans text-[10px] text-text-muted tracking-widest uppercase text-center md:text-left">
                © 2026 Engineering Strategies Consulting at Purdue University Indianapolis
            </p>
<div className="flex gap-4">
<a className="text-text-muted hover:text-gold transition-colors hover-target" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
