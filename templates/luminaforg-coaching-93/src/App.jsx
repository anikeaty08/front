import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Theme Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const htmlElement = document.documentElement;

        // Check for saved theme preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
        setTheme(currentTheme);

        themeToggleBtn.addEventListener('click', () => {
            currentTheme = currentTheme === 'light' ? 'dark' : 'light';
            setTheme(currentTheme);
        });

        function setTheme(theme) {
            htmlElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            if (theme === 'dark') {
                themeIcon.setAttribute('icon', 'solar:sun-2-line-duotone');
            } else {
                themeIcon.setAttribute('icon', 'solar:moon-line-duotone');
            }
        }

        // Mobile Menu Logic
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });

        // Scroll Reveal Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Run once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="UtvhDctN8AjL6tvf1yKd"></div>

</div></div>

<div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--primary-teal)] opacity-5 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--accent-gold)] opacity-5 blur-[120px]"></div>
</div>

<header className="fixed top-0 w-full h-[80px] z-50 bg-[var(--nav-bg)] backdrop-blur-md border-b border-[var(--border-subtle)] transition-colors duration-400">
<div className="flex h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-2xl text-[var(--primary-teal)] group-hover:text-[var(--accent-gold)] transition-colors" icon="solar:glow-line-duotone"></iconify-icon>
<span className="font-serif font-semibold text-xl tracking-tight text-[var(--text-main)]">LuminaForge</span>
</a>

<nav className="hidden md:flex gap-8 text-[var(--text-muted)] text-sm font-medium gap-x-8 gap-y-8 items-center">
<a className="hover:text-[var(--text-main)] transition-colors" href="/home">Home</a>
<a className="hover:text-[var(--text-main)] transition-colors" href="/service">Services</a>
<a className="hover:text-[var(--text-main)] transition-colors" href="/about">About</a>
<a className="hover:text-[var(--text-main)] transition-colors" href="/insight">Insights</a>
<a className="hover:text-[var(--text-main)] transition-colors" href="/contact">Contact
</a>
</nav>

<div className="flex items-center gap-4 text-sm">

<button aria-label="Toggle Dark Mode" className="p-2 rounded-full hover:bg-[var(--bg-surface)] text-[var(--text-main)] transition-colors flex items-center justify-center" id="theme-toggle">
<iconify-icon className="text-xl" icon="solar:sun-2-line-duotone" id="theme-icon"></iconify-icon>
</button>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[var(--accent-gold)] text-white font-medium hover:scale-105 hover:shadow-[0_0_15px_var(--glow-gold)] transition-all duration-300" href="#contact">
                    Book Discovery Call
                </a>

<button className="md:hidden p-2 text-[var(--text-main)]" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-line-duotone"></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-[80px] left-0 w-full bg-[var(--bg-surface)] border-b border-[var(--border-subtle)] shadow-xl flex-col py-4 px-6 gap-4 z-40 text-sm" id="mobile-menu">
<a className="text-[var(--text-muted)] hover:text-[var(--text-main)] py-2 border-b border-[var(--border-subtle)]" href="#home">Home</a>
<a className="text-[var(--text-muted)] hover:text-[var(--text-main)] py-2 border-b border-[var(--border-subtle)]" href="#services">Services</a>
<a className="text-[var(--text-muted)] hover:text-[var(--text-main)] py-2 border-b border-[var(--border-subtle)]" href="#about">About</a>
<a className="text-[var(--text-muted)] hover:text-[var(--text-main)] py-2 border-b border-[var(--border-subtle)]" href="#insights">Insights</a>
<a className="inline-flex items-center justify-center w-full mt-2 px-6 py-3 rounded-full bg-[var(--accent-gold)] text-white font-medium" href="#contact">
                Book Discovery Call
            </a>
</div>
</header>

<section className="min-h-screen flex overflow-hidden pt-[80px] relative items-center justify-center" id="home">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 z-10 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 gap-x-12 gap-y-12 items-center">

<div className="flex flex-col gap-8 reveal active">
<div className="flex flex-col gap-4">
<span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--primary-teal)]">Holistic Peak Transformation</span>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-[var(--text-main)] text-5xl font-semibold tracking-tight font-serif">
                        Illuminate Your Path.<br/>
<span className="text-[var(--text-muted)]">Forge Your Future.</span>
</h1>
</div>
<p className="text-lg md:text-xl text-[var(--text-muted)] max-w-lg font-light">
                    Fitness. Health. Business. Life Mastery. Elevate every dimension of your existence with holistic coaching designed for high-achievers.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--accent-gold)] text-white font-medium text-sm hover:scale-105 hover:shadow-[0_0_20px_var(--glow-gold)] transition-all duration-300" href="#contact">
                        Start Your Transformation
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[var(--border-subtle)] text-[var(--text-main)] font-medium text-sm hover:border-[var(--primary-teal)] hover:text-[var(--primary-teal)] hover:bg-[var(--glow-teal)] transition-all duration-300" href="#resources">
                        Download Free Guide
                    </a>
</div>

<div className="pt-12 border-t border-[var(--border-subtle)] mt-4">
<p className="text-xs text-[var(--text-muted)] mb-4 font-medium uppercase tracking-wider">Trusted by High-Achievers Worldwide</p>
<div className="flex gap-6 opacity-60 grayscale items-center flex-wrap">
<iconify-icon className="text-2xl text-[var(--text-main)]" icon="solar:buildings-line-duotone"></iconify-icon>
<iconify-icon className="text-2xl text-[var(--text-main)]" icon="solar:global-line-duotone"></iconify-icon>
<iconify-icon className="text-2xl text-[var(--text-main)]" icon="solar:cup-star-line-duotone"></iconify-icon>
<iconify-icon className="text-2xl text-[var(--text-main)]" icon="solar:shield-check-line-duotone"></iconify-icon>
</div>
</div>
</div>

<div className="relative w-full h-[500px] lg:h-[700px] reveal delay-200 active">
<div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl bg-[var(--bg-surface-alt)]">
<img alt="LuminaForge Coach" className="w-full h-full object-cover object-top mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/7e5a48f3-c2f2-4588-8f22-259764a5d0fb/1600w.png"/>
<div className="opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute top-1/4 -right-4 w-16 h-16 rounded-full bg-[var(--accent-gold)] blur-3xl opacity-20"></div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 relative reveal active">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl ring-4 ring-[var(--primary-teal)]/20 relative z-10 group">
<img alt="Coach Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
</div>
<div className="absolute -top-4 -right-4 w-24 h-24 bg-[var(--bg-surface-alt)] rounded-full flex items-center justify-center shadow-lg z-20 reveal delay-200 active">
<div className="text-center">
<span className="block text-xl font-semibold font-serif text-[var(--accent-gold)]">10+</span>
<span className="block text-[10px] uppercase tracking-wider text-[var(--text-muted)]">Years</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 flex flex-col gap-6 reveal delay-100 active">
<h2 className="font-serif font-semibold text-3xl md:text-5xl tracking-tight text-[var(--text-main)]">
                        Meet Your Guide to Peak Transformation
                    </h2>
<div className="energy-line-horizontal w-16"></div>
<div className="text-sm md:text-base text-[var(--text-muted)] space-y-4 font-light leading-relaxed">
<p className="">
                            True mastery isn't found in a single discipline. It exists at the intersection of <span className="text-[var(--primary-teal)] font-medium">physical vitality, mental resilience, and strategic execution</span>. I spent a decade isolating these fields before realizing they are inextricably linked.
                        </p>
<p className="">
                            As a former elite athlete turned serial entrepreneur, I experienced the burnout of unbalanced success. My journey to reclaim health while scaling businesses birthed the LuminaForge philosophy. 
                        </p>
<p className="">
                            Today, I partner with executives, founders, and driven individuals to forge a reality where <span className="text-[var(--primary-teal)] font-medium">peak physical health fuels exponential business growth</span>, and deep mentorship aligns action with ultimate life purpose. Over 500+ clients have redefined their absolute limits through this holistic approach.
                        </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-main)] group" href="#services">
                            Explore My Methodology 
                            <iconify-icon className="text-[var(--primary-teal)] group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-line-duotone"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[var(--bg-surface-alt)] relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-xs uppercase tracking-[0.2em] font-medium text-[var(--accent-gold)] mb-2 block">The Framework</span>
<h2 className="font-serif font-semibold text-3xl md:text-5xl tracking-tight text-[var(--text-main)]">
                    Four Pillars of Peak Transformation
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-[var(--bg-surface)] p-8 md:p-10 rounded-2xl shadow-sm border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_var(--glow-gold)] transition-all duration-300 group reveal">
<div className="w-14 h-14 rounded-full bg-[var(--bg-base)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary-teal)] transition-colors">
<iconify-icon className="text-2xl text-[var(--primary-teal)] group-hover:text-white" icon="solar:dumbbell-large-minimalistic-line-duotone"></iconify-icon>
</div>
<h3 className="font-serif font-semibold text-2xl text-[var(--text-main)] mb-3">Fitness Mastery</h3>
<p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                        Build an unbreakable physical foundation. Tailored strength, conditioning, and mobility protocols designed for longevity and immediate energy output.
                    </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-[var(--primary-teal)] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--accent-gold)] hover:after:w-full after:transition-all after:duration-300 pb-1" href="#">
                        Explore This Pillar <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-[var(--bg-surface)] p-8 md:p-10 rounded-2xl shadow-sm border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_var(--glow-gold)] transition-all duration-300 group reveal delay-100">
<div className="w-14 h-14 rounded-full bg-[var(--bg-base)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary-teal)] transition-colors">
<iconify-icon className="text-2xl text-[var(--primary-teal)] group-hover:text-white" icon="solar:heart-pulse-line-duotone"></iconify-icon>
</div>
<h3 className="font-serif font-semibold text-2xl text-[var(--text-main)] mb-3">Health Optimization</h3>
<p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                        Deep dive into bio-metrics, nutrition, sleep hygiene, and recovery tactics. We optimize your internal systems for sustained cognitive and physical clarity.
                    </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-[var(--primary-teal)] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--accent-gold)] hover:after:w-full after:transition-all after:duration-300 pb-1" href="#">
                        Explore This Pillar <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-[var(--bg-surface)] p-8 md:p-10 rounded-2xl shadow-sm border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_var(--glow-gold)] transition-all duration-300 group reveal">
<div className="w-14 h-14 rounded-full bg-[var(--bg-base)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary-teal)] transition-colors">
<iconify-icon className="text-2xl text-[var(--primary-teal)] group-hover:text-white" icon="solar:chart-square-line-duotone"></iconify-icon>
</div>
<h3 className="font-serif font-semibold text-2xl text-[var(--text-main)] mb-3">Business Acceleration</h3>
<p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                        Leverage your newfound energy into strategic business growth. Executive coaching focusing on leadership, systems, and high-leverage decision making.
                    </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-[var(--primary-teal)] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--accent-gold)] hover:after:w-full after:transition-all after:duration-300 pb-1" href="#">
                        Explore This Pillar <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-[var(--bg-surface)] p-8 md:p-10 rounded-2xl shadow-sm border border-[var(--border-subtle)] hover:border-[var(--accent-gold)]/50 hover:-translate-y-2 hover:shadow-[0_10px_30px_var(--glow-gold)] transition-all duration-300 group reveal delay-100">
<div className="w-14 h-14 rounded-full bg-[var(--bg-base)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary-teal)] transition-colors">
<iconify-icon className="text-2xl text-[var(--primary-teal)] group-hover:text-white" icon="solar:star-fall-line-duotone"></iconify-icon>
</div>
<h3 className="font-serif font-semibold text-2xl text-[var(--text-main)] mb-3">Life Mentorship</h3>
<p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                        Align your daily actions with your core purpose. Overcome limiting beliefs, design a life of fulfillment, and forge a legacy that outlasts your achievements.
                    </p>
<a className="inline-flex items-center gap-2 text-xs font-medium text-[var(--primary-teal)] relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[var(--accent-gold)] hover:after:w-full after:transition-all after:duration-300 pb-1" href="#">
                        Explore This Pillar <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 md:mb-24 reveal">
<h2 className="font-serif font-semibold text-3xl md:text-5xl tracking-tight text-[var(--text-main)]">
                    The LuminaForge Method
                </h2>
<p className="mt-4 text-sm md:text-base text-[var(--text-muted)] max-w-2xl mx-auto">A systematic, three-phase journey moving you from your current baseline to absolute peak performance.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-teal)] to-transparent opacity-30"></div>

<div className="md:hidden absolute top-[10%] bottom-[10%] left-8 w-[1px] bg-gradient-to-b from-transparent via-[var(--primary-teal)] to-transparent opacity-30"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">

<div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:text-center reveal">
<div className="w-16 h-16 shrink-0 rounded-full bg-[var(--bg-surface)] border-2 border-[var(--primary-teal)] flex items-center justify-center shadow-[0_0_15px_var(--glow-teal)]">
<span className="font-serif font-semibold text-xl text-[var(--text-main)]">01</span>
</div>
<div>
<h4 className="font-serif font-semibold text-xl text-[var(--text-main)] mb-2">Assess &amp; Architect</h4>
<p className="text-sm text-[var(--text-muted)] leading-relaxed">Comprehensive audit of your current physical, mental, and professional state. We identify bottlenecks and architect a bespoke blueprint.</p>
</div>
</div>

<div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:text-center reveal delay-100">
<div className="shrink-0 border-[var(--primary-teal)] flex text-white w-16 h-16 border-2 rounded-full shadow-[0_0_15px_var(--glow-teal)] items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:hammer-line-duotone"></iconify-icon>
<span className="font-serif font-semibold text-xl text-[var(--text-main)]">02</span>
</div>
<div className="">
<h4 className="font-serif font-semibold text-xl text-[var(--text-main)] mb-2">Forge in the Fire</h4>
<p className="text-sm text-[var(--text-muted)] leading-relaxed">Rigorous execution of the blueprint. Rebuilding habits, optimizing health markers, and applying intensive business strategies through daily accountability.</p>
</div>
</div>

<div className="flex flex-row md:flex-col items-start md:items-center gap-6 md:text-center reveal delay-200">
<div className="w-16 h-16 shrink-0 rounded-full bg-[var(--bg-surface)] border-2 border-[var(--accent-gold)] flex items-center justify-center shadow-[0_0_15px_var(--glow-gold)]">
<span className="font-serif font-semibold text-xl text-[var(--accent-gold)]">03</span>
</div>
<div>
<h4 className="font-serif font-semibold text-xl text-[var(--text-main)] mb-2">Ascend to Peak</h4>
<p className="text-sm text-[var(--text-muted)] leading-relaxed">Integration of the new baseline. You operate with sustained high energy, clear purpose, and self-managing systems. The transformation becomes your permanent identity.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[var(--bg-surface-alt)] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal">
<div>
<h2 className="font-serif font-semibold text-3xl md:text-5xl tracking-tight text-[var(--text-main)]">
                        Real Transformations
                    </h2>
<p className="mt-4 text-sm text-[var(--text-muted)] max-w-md">Proof of process. See what happens when dedication meets the right methodology.</p>
</div>
<div className="flex gap-2">

<button className="w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center hover:bg-[var(--bg-surface)] text-[var(--text-main)] transition-colors"><iconify-icon icon="solar:alt-arrow-left-line-duotone"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-[var(--border-subtle)] flex items-center justify-center hover:bg-[var(--bg-surface)] text-[var(--text-main)] transition-colors"><iconify-icon icon="solar:alt-arrow-right-line-duotone"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-[var(--bg-surface)] rounded-2xl overflow-hidden shadow-sm border border-[var(--border-subtle)] group reveal">
<div className="h-64 overflow-hidden relative">
<img alt="Client Marcus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Executive</div>
</div>
<div className="p-6">
<p className="text-sm italic text-[var(--text-muted)] mb-4 font-serif leading-relaxed">
                            "I was scaling my company but destroying my health. LuminaForge helped me <span className="text-[var(--accent-gold)] font-medium">lose 15kg while doubling our revenue</span>. I have more energy now at 45 than I did at 25."
                        </p>
<div className="pt-4 border-t border-[var(--border-subtle)]">
<h4 className="font-medium text-sm text-[var(--text-main)]">Marcus T.</h4>
<p className="text-xs text-[var(--primary-teal)] mt-1">Tech Founder</p>
</div>
</div>
</div>

<div className="bg-[var(--bg-surface)] rounded-2xl overflow-hidden shadow-sm border border-[var(--border-subtle)] group reveal delay-100">
<div className="h-64 overflow-hidden relative">
<img alt="Client Sarah" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Entrepreneur</div>
</div>
<div className="p-6">
<p className="text-sm italic text-[var(--text-muted)] mb-4 font-serif leading-relaxed">
                            "The holistic approach is a game-changer. Rebuilding my fitness baseline somehow unlocked a level of strategic clarity that <span className="text-[var(--accent-gold)] font-medium">saved my agency from burnout</span>."
                        </p>
<div className="pt-4 border-t border-[var(--border-subtle)]">
<h4 className="font-medium text-sm text-[var(--text-main)]">Sarah K.</h4>
<p className="text-xs text-[var(--primary-teal)] mt-1">Creative Director</p>
</div>
</div>
</div>

<div className="bg-[var(--bg-surface)] rounded-2xl overflow-hidden shadow-sm border border-[var(--border-subtle)] group reveal delay-200 md:hidden lg:block">
<div className="h-64 overflow-hidden relative">
<img alt="Client David" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-gray-900 text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Athlete</div>
</div>
<div className="p-6">
<p className="text-sm italic text-[var(--text-muted)] mb-4 font-serif leading-relaxed">
                            "Transitioning from professional sports to business left me lost. The mentorship phase realigned my purpose. <span className="text-[var(--accent-gold)] font-medium">Gained muscle, lost fat, found direction.</span>"
                        </p>
<div className="pt-4 border-t border-[var(--border-subtle)]">
<h4 className="font-medium text-sm text-[var(--text-main)]">David R.</h4>
<p className="text-xs text-[var(--primary-teal)] mt-1">Former Pro Athlete / Investor</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif font-semibold text-3xl md:text-5xl tracking-tight text-[var(--text-main)] text-center mb-16 reveal">
                What My Clients Say
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-shadow reveal">
<div className="flex gap-1 text-[var(--accent-gold)] mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[var(--text-main)] mb-6 font-medium leading-relaxed">"The most comprehensive coaching program I've ever experienced. It's not just workouts; it's a complete operating system for life."</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=150&amp;h=150&amp;q=80"/>
<div>
<p className="text-xs font-semibold text-[var(--text-main)]">Elena M.</p>
<p className="text-[10px] text-[var(--text-muted)]">VP of Marketing</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-shadow reveal delay-100">
<div className="flex gap-1 text-[var(--accent-gold)] mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[var(--text-main)] mb-6 font-medium leading-relaxed">"I came for the business strategies but stayed for the health optimization. My productivity has easily 3x'd since dialing in my sleep and nutrition protocols."</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<p className="text-xs font-semibold text-[var(--text-main)]">James P.</p>
<p className="text-[10px] text-[var(--text-muted)]">CEO</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm hover:shadow-md transition-shadow reveal delay-200">
<div className="flex gap-1 text-[var(--accent-gold)] mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-[var(--text-main)] mb-6 font-medium leading-relaxed">"Before LuminaForge, I felt fragmented. Now, my physical training, my business goals, and my personal life are entirely aligned. Worth every penny."</p>
<div className="flex items-center gap-4 mt-auto">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<p className="text-xs font-semibold text-[var(--text-main)]">Michael C.</p>
<p className="text-[10px] text-[var(--text-muted)]">Consultant</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-20 pb-20 relative" id="insights">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif font-semibold text-3xl md:text-5xl tracking-tight text-[var(--text-main)] mb-12 md:mb-16 reveal">
                Insights for Your Journey
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<a className="group block reveal" href="#">
<div className="bg-[var(--bg-surface)] rounded-2xl overflow-hidden shadow-sm border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
<div className="h-48 overflow-hidden">
<img alt="Training" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-[var(--primary-teal)] font-semibold mb-2">Protocol</span>
<h4 className="font-serif font-semibold text-lg text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">The 4-Day Executive Training Split</h4>
<p className="text-xs text-[var(--text-muted)] mb-4 line-clamp-2">Maximize hypertrophy and cardiovascular capacity with minimal time investment tailored for busy schedules.</p>
<span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-[var(--text-main)] group-hover:text-[var(--accent-gold)] transition-colors">
                                Read Article <iconify-icon icon="solar:arrow-right-line-duotone"></iconify-icon>
</span>
</div>
</div>
</a>

<a className="group block reveal delay-100" href="#">
<div className="bg-[var(--bg-surface)] rounded-2xl overflow-hidden shadow-sm border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
<div className="h-48 overflow-hidden">
<img alt="Data" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-6 flex-1 flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-[var(--primary-teal)] font-semibold mb-2">Podcast</span>
<h4 className="font-serif font-semibold text-lg text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">Bio-hacking Deep Sleep for Founders</h4>
<p className="text-xs text-[var(--text-muted)] mb-4 line-clamp-2">Listen to the latest episode where we break down temperature control, light exposure, and supplementation for REM sleep.</p>
<span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-[var(--text-main)] group-hover:text-[var(--accent-gold)] transition-colors">
                                Listen Now <iconify-icon icon="solar:play-circle-line-duotone"></iconify-icon>
</span>
</div>
</div>
</a>

<a className="group block reveal delay-200" href="#">
<div className="bg-[var(--bg-surface)] rounded-2xl overflow-hidden shadow-sm border border-[var(--border-subtle)] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
<div className="h-48 overflow-hidden flex items-center justify-center bg-[var(--bg-surface-alt)] relative">
<div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-teal)]/20 to-transparent"></div>
<iconify-icon className="text-6xl text-[var(--primary-teal)] opacity-50" icon="solar:document-text-line-duotone"></iconify-icon>
</div>
<div className="p-6 flex-1 flex flex-col">
<span className="text-[10px] uppercase tracking-wider text-[var(--accent-gold)] font-semibold mb-2">Free Guide</span>
<h4 className="font-serif font-semibold text-lg text-[var(--text-main)] mb-2 group-hover:text-[var(--accent-gold)] transition-colors">The LuminaForge Morning Blueprint</h4>
<p className="text-xs text-[var(--text-muted)] mb-4 line-clamp-2">Download the exact 60-minute routine used by top clients to dominate the day before it begins.</p>
<span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-[var(--text-main)] group-hover:text-[var(--accent-gold)] transition-colors">
                                Download <iconify-icon icon="solar:download-square-line-duotone"></iconify-icon>
</span>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-[var(--bg-surface-alt)] to-[var(--bg-base)]" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[var(--primary-teal)] opacity-5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="font-serif font-semibold text-4xl md:text-6xl tracking-tight text-[var(--text-main)] mb-6">
                Ready to Forge Your Peak Life?
            </h2>
<p className="text-base md:text-lg text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">
                Transformation requires a decision. Book your complimentary 45-minute discovery call today to see if the LuminaForge method aligns with your vision.
            </p>
<button className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[var(--accent-gold)] text-white font-semibold text-base hover:scale-105 hover:shadow-[0_0_25px_var(--glow-gold)] transition-all duration-300">
                Book Your Discovery Call Now
            </button>
<p className="mt-4 text-xs text-[var(--text-muted)]">*Limited spots available per quarter to ensure intensive 1-on-1 focus.</p>

<div className="mt-20 text-left max-w-2xl mx-auto border-t border-[var(--border-subtle)] pt-10">
<h3 className="font-serif font-medium text-2xl text-[var(--text-main)] mb-8 text-center">Frequently Asked Questions</h3>
<div className="space-y-4">

<details className="group bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-[var(--text-main)] hover:text-[var(--primary-teal)] transition-colors">
<span className="">How does holistic coaching differ from standard fitness coaching?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-lg text-[var(--text-muted)]" icon="solar:alt-arrow-down-line-duotone"></iconify-icon>
</span>
</summary>
<div className="text-[var(--text-muted)] text-sm p-5 pt-0 leading-relaxed bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
                            Standard coaching isolates physical results. LuminaForge recognizes that your physical capacity directly dictates your business performance and mental clarity. We build your fitness program specifically to enhance your energy for executive decision-making and life leadership.
                        </div>
</details>

<details className="group bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-[var(--text-main)] hover:text-[var(--primary-teal)] transition-colors">
<span className="">What is the typical time commitment required?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-lg text-[var(--text-muted)]" icon="solar:alt-arrow-down-line-duotone"></iconify-icon>
</span>
</summary>
<div className="text-[var(--text-muted)] text-sm p-5 pt-0 leading-relaxed bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
                            Our protocols are built for extremely busy individuals. While the integration requires mental focus, the actual physical and structural time commitment is optimized for ROI—typically 4-5 hours a week of focused physical training, plus a 1-hour weekly strategy call.
                        </div>
</details>

<details className="group bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-[var(--text-main)] hover:text-[var(--primary-teal)] transition-colors">
<span>Do you provide specific business consulting?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-lg text-[var(--text-muted)]" icon="solar:alt-arrow-down-line-duotone"></iconify-icon>
</span>
</summary>
<div className="text-[var(--text-muted)] text-sm p-5 pt-0 leading-relaxed bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
                            We focus on the 'operator' behind the business. While we don't act as a fractional CMO or CFO, we heavily coach on leadership, operational systems, boundary setting, and energy management to allow you to scale your business more effectively.
                        </div>
</details>

<details className="group bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-[var(--text-main)] hover:text-[var(--primary-teal)] transition-colors">
<span>Is the program fully customized?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-lg text-[var(--text-muted)]" icon="solar:alt-arrow-down-line-duotone"></iconify-icon>
</span>
</summary>
<div className="text-[var(--text-muted)] text-sm p-5 pt-0 leading-relaxed bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
                            100%. Phase 1 (Assess &amp; Architect) involves extensive onboarding where we analyze your current biometrics, schedule, business demands, and personal goals to construct a bespoke framework unique to your exact situation.
                        </div>
</details>

<details className="group bg-[var(--bg-surface)] rounded-xl border border-[var(--border-subtle)] overflow-hidden">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-[var(--text-main)] hover:text-[var(--primary-teal)] transition-colors">
<span>Where do the coaching sessions take place?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="text-lg text-[var(--text-muted)]" icon="solar:alt-arrow-down-line-duotone"></iconify-icon>
</span>
</summary>
<div className="text-[var(--text-muted)] text-sm p-5 pt-0 leading-relaxed bg-[var(--bg-surface)] border-t border-[var(--border-subtle)]">
                            The program is delivered globally via premium digital infrastructure. We utilize private video consulting, a custom mobile app for tracking protocols, and direct asynchronous messaging for daily accountability.
                        </div>
</details>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-4 group" href="#">
<iconify-icon className="text-2xl text-teal-500" icon="solar:glow-line-duotone"></iconify-icon>
<span className="font-serif font-semibold text-xl tracking-tight text-white">LuminaForge</span>
</a>
<p className="text-xs text-slate-400 leading-relaxed mb-6">
                        Holistic peak transformation coaching for high-achievers. Elevating fitness, health, business, and life mastery.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-600 transition-all" href="#"><iconify-icon icon="solar:camera-line-duotone"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-600 transition-all" href="#"><iconify-icon icon="solar:case-round-line-duotone"></iconify-icon></a>
<a className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-600 transition-all" href="#"><iconify-icon icon="solar:play-circle-line-duotone"></iconify-icon></a>
</div>
</div>

<div>
<h5 className="text-white font-medium text-sm mb-4">The Methodology</h5>
<ul className="space-y-3 text-xs text-slate-400">
<li><a className="hover:text-teal-400 transition-colors" href="#">Fitness Mastery</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Health Optimization</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Business Acceleration</a></li>
<li><a className="hover:text-teal-400 transition-colors" href="#">Life Mentorship</a></li>
</ul>
</div>

<div className="">
<h5 className="text-white font-medium text-sm mb-4">Company</h5>
<ul className="space-y-3 text-xs text-slate-400">
<li className=""><a className="hover:text-teal-400 transition-colors" href="#about">About</a></li>
<li className=""><a className="hover:text-teal-400 transition-colors" href="#insights">Insights &amp; Podcast</a></li>
<li className=""><a className="hover:text-teal-400 transition-colors" href="#">Services</a></li>
<li className=""><a className="hover:text-teal-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h5 className="text-white font-medium text-sm mb-4">Connect</h5>
<ul className="space-y-3 text-xs text-slate-400">
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500" icon="solar:letter-line-duotone"></iconify-icon> forge@luminaforge.com</li>
<li className="flex items-center gap-2"><iconify-icon className="text-teal-500" icon="solar:phone-calling-line-duotone"></iconify-icon> +1 (555) 019-2026</li>
<li className="flex items-start gap-2 mt-2"><iconify-icon className="text-teal-500 shrink-0 mt-0.5" icon="solar:map-point-line-duotone"></iconify-icon> Global Digital Delivery<br/>HQ: Austin, TX</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-500">© 2026 LuminaForge Coaching. All Rights Reserved.</p>
<div className="flex gap-4 text-[10px] text-slate-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
