import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // 1. MENU TOGGLE
        const menuToggle = document.getElementById('menu-toggle');
        const menuOverlay = document.getElementById('menu-overlay');
        const menuIcon = menuToggle.querySelector('iconify-icon');
        const menuText = menuToggle.querySelector('span');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
                menuOverlay.classList.add('open');
                menuIcon.setAttribute('icon', 'lucide:x');
                if(menuText) menuText.textContent = "Close";
                document.body.style.overflow = 'hidden';
            } else {
                menuOverlay.classList.remove('open');
                menuIcon.setAttribute('icon', 'lucide:menu');
                if(menuText) menuText.textContent = "Menu";
                document.body.style.overflow = '';
            }
        }
        menuToggle.addEventListener('click', toggleMenu);

        // 2. CURSOR LOGIC
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');
        let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

        if (window.matchMedia("(pointer: fine)").matches) {
            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
            });

            function animateCursor() {
                followerX += (mouseX - followerX) * 0.15;
                followerY += (mouseY - followerY) * 0.15;
                follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
                requestAnimationFrame(animateCursor);
            }
            animateCursor();

            const triggers = document.querySelectorAll('.hover-trigger, a, button');
            triggers.forEach(trigger => {
                trigger.addEventListener('mouseenter', () => {
                    follower.style.width = '60px';
                    follower.style.height = '60px';
                    follower.style.border = '1px solid var(--accent)';
                    follower.style.backgroundColor = 'var(--accent-dim)';
                    cursor.style.width = '4px';
                    cursor.style.height = '4px';
                });
                trigger.addEventListener('mouseleave', () => {
                    follower.style.width = '32px';
                    follower.style.height = '32px';
                    follower.style.border = '1px solid rgba(255,255,255,0.3)';
                    follower.style.backgroundColor = 'transparent';
                    cursor.style.width = '8px';
                    cursor.style.height = '8px';
                });
            });
        } else {
            cursor.style.display = 'none';
            follower.style.display = 'none';
        }

        // 3. SCROLL REVEAL
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>
<div className="cursor" style={{transform: 'translate(77px, 54px) translate(-50%, -50%)', width: '8px', height: '8px'}}></div>
<div className="cursor-follower" style={{transform: 'translate(0px, 0px) translate(-50%, -50%)', width: '32px', height: '32px', border: '1px solid rgba(255, 255, 255, 0.3)', backgroundColor: 'transparent'}}></div>

<nav className="">
<a className="nav-logo hover-trigger tracking-tighter" href="#">MAVRIX<span className="text-[var(--accent)]">GLOBAL</span></a>
<div className="flex items-center gap-6">
<a className="hidden md:block text-xs uppercase tracking-[0.2em] font-semibold text-[var(--text-main)] hover:text-[var(--accent)] transition-colors hover-trigger" href="#contact">Contact</a>
<button className="hover-trigger flex items-center gap-2 group focus:outline-none" id="menu-toggle">
<span className="text-xs uppercase tracking-[0.2em] font-semibold group-hover:text-[var(--accent)] transition-colors duration-300 hidden md:block">Menu</span>
<div className="p-2 border border-white/10 rounded-full group-hover:border-[var(--accent)] group-hover:rotate-90 transition-all duration-500 bg-white/5 backdrop-blur-sm">
<iconify-icon height="18" icon="lucide:menu" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</button>
</div>
</nav>

<div className="menu-overlay" id="menu-overlay">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto w-full">
<div className="flex flex-col justify-center">
<span className="label">Navigation</span>
<a className="menu-link hover-trigger" href="#about" onclick="toggleMenu()">About</a>
<a className="menu-link hover-trigger" href="#vision" onclick="toggleMenu()">Strategic Vision</a>
<a className="menu-link hover-trigger" href="#services" onclick="toggleMenu()">Real Estate</a>
<a className="menu-link hover-trigger" href="#market" onclick="toggleMenu()">Market Entry</a>
<a className="menu-link hover-trigger" href="#business" onclick="toggleMenu()">Business Setup</a>
<a className="menu-link hover-trigger" href="#partners" onclick="toggleMenu()">Partnerships</a>
</div>
<div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-[var(--border)] pt-8 md:pt-0 md:pl-12">
<span className="label">Connect</span>
<p className="text-[var(--text-muted)] font-light mb-8 max-w-sm">
                    Connecting Australia &amp; the GCC through structured commercial pathways.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-3 text-[var(--text-main)]">
<iconify-icon className="text-[var(--accent)]" icon="lucide:map-pin"></iconify-icon>
<span className="text-sm font-light">Australia | UAE | GCC Region</span>
</div>
<div className="flex items-center gap-3 text-[var(--text-main)]">
<iconify-icon className="text-[var(--accent)]" icon="lucide:mail"></iconify-icon>
<span className="text-sm font-light">hello@mavrixglobal.com</span>
</div>
</div>
</div>
</div>
</div>

<header className="section h-screen items-start justify-end pb-20 overflow-hidden">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none grayscale contrast-125 mix-blend-screen" loop="" muted="" playsinline="">
<source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4"/>
</video>
<div className="relative z-10 w-full max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end border-b border-[var(--border)] pb-8 mb-8 reveal active">
<div className="">
<span className="label mb-2 block">Australia <span className="mx-2 text-[var(--text-muted)]">//</span> GCC</span>
<h1 className="display-xl tracking-tighter">Mavrix<br/>Global</h1>
</div>
<div className="max-w-md pb-4 md:text-right">
<p className="text-lg md:text-xl font-light text-[var(--text-main)] leading-relaxed">
                        Beyond Borders. Linking Markets. <br/><span className="text-[var(--text-muted)]">Building Futures.</span>
</p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-8 justify-between text-sm text-[var(--text-muted)] font-mono reveal active" style={{transitionDelay: '0.2s'}}>
<div className="flex gap-4">
<span>[ EST. STRATEGY ]</span>
<span>[ INT. GATEWAY ]</span>
</div>
<div className="animate-pulse text-[var(--accent)]">
                    ● OPERATIONAL
                </div>
</div>
</div>
</header>

<section className="section-auto bg-[#0A0A0A]" id="about">
<div className="max-w-[1600px] mx-auto w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
<div className="lg:col-span-4 reveal">
<span className="label">The Mandate</span>
<h2 className="heading-lg tracking-tight mb-8">Bridging Markets. <br/><span className="text-[var(--text-muted)]">Enabling Growth.</span></h2>
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[var(--accent)] hover:text-white transition-colors hover-trigger group" href="#vision">
                        Our Vision
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-down-right"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8 reveal" style={{transitionDelay: '0.1s'}}>
<p className="text-xl md:text-2xl font-light leading-relaxed text-[var(--text-muted)] mb-12">
                        Mavrix Global is a strategic business platform connecting enterprises, developers, and commercial stakeholders between Australia and the Gulf Cooperation Council (GCC). 
                        <span className="text-[var(--text-main)]">We provide a single, integrated gateway</span> for organizations seeking structured market access, regional presence, and long-term operational growth.
                    </p>
</div>
</div>
</div>
</section>

<section className="section-auto bg-[#0F0F0F] border-t border-[var(--border)]" id="vision">
<div className="max-w-[1600px] mx-auto w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 reveal">
<div>
<span className="label">Our Mission</span>
<h2 className="heading-lg tracking-tight mb-8">Strategic Vision</h2>
<p className="text-[var(--text-muted)] text-lg font-light leading-relaxed mb-8">
                        Our mission is to connect Australia with the GCC region through investment, real estate, and enterprise growth — building a long-term ecosystem that supports:
                    </p>
<p className="text-[var(--text-main)] font-display text-xl leading-relaxed">
                        By bridging these two high-growth regions, we aim to position the company as the leading cross-border business and investment platform between Australia and the Middle East.
                    </p>
</div>
<div className="flex flex-col justify-center gap-px bg-[var(--border)] border border-[var(--border)]">

<div className="bg-[var(--surface)] p-8 hover:bg-[var(--bg)] transition-colors group hover-trigger">
<div className="flex items-start justify-between mb-4">
<iconify-icon className="text-[var(--accent)]" icon="lucide:trending-up" width="24"></iconify-icon>
<iconify-icon className="text-[var(--text-muted)] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" icon="lucide:arrow-right"></iconify-icon>
</div>
<h3 className="font-display text-xl text-[var(--text-main)] mb-1">Investors</h3>
<p className="text-sm text-[var(--text-muted)] font-light">Seeking cross-border diversification.</p>
</div>

<div className="bg-[var(--surface)] p-8 hover:bg-[var(--bg)] transition-colors group hover-trigger">
<div className="flex items-start justify-between mb-4">
<iconify-icon className="text-[var(--accent)]" icon="lucide:globe-2" width="24"></iconify-icon>
<iconify-icon className="text-[var(--text-muted)] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" icon="lucide:arrow-right"></iconify-icon>
</div>
<h3 className="font-display text-xl text-[var(--text-main)] mb-1">Entrepreneurs</h3>
<p className="text-sm text-[var(--text-muted)] font-light">Pursuing global expansion.</p>
</div>

<div className="bg-[var(--surface)] p-8 hover:bg-[var(--bg)] transition-colors group hover-trigger">
<div className="flex items-start justify-between mb-4">
<iconify-icon className="text-[var(--accent)]" icon="lucide:store" width="24"></iconify-icon>
<iconify-icon className="text-[var(--text-muted)] -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" icon="lucide:arrow-right"></iconify-icon>
</div>
<h3 className="font-display text-xl text-[var(--text-main)] mb-1">Brands</h3>
<p className="text-sm text-[var(--text-muted)] font-light">Looking to scale internationally.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-[var(--border)]" id="services">
<div className="service-row">

<div className="service-panel hover-trigger group">
<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
<img alt="Architecture" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10">
<span className="label">01 // Property</span>
<h3 className="heading-lg tracking-tight mb-6 group-hover:text-[var(--accent)] transition-colors">Real Estate<br/>Facilitation</h3>
<p className="text-[var(--text-muted)] font-light max-w-md mb-8">
                        Structured access to commercial and residential opportunities between Australia and the GCC. We act as facilitators, not brokers, ensuring clear transaction pathways through licensed professionals.
                    </p>
</div>
<div className="relative z-10 w-full">
<ul className="service-list">
<li>Verified Listings <span>Commercial &amp; Residential</span></li>
<li>Property Management <span>Tenant &amp; Maint.</span></li>
<li>Asset Conversion <span>Holiday Homes</span></li>
<li>Portfolio Strategy <span>Resale &amp; Reinvest</span></li>
</ul>
<div className="mt-8 flex gap-4 text-xs uppercase tracking-widest text-[var(--text-muted)]">
<span>• Developer Intros</span>
<span>• Legal Coordination</span>
</div>
</div>
</div>

<div className="service-panel hover-trigger group bg-[#0F0F0F]" id="market">
<div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
<img alt="Global Connection" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10">
<span className="label">02 // Expansion</span>
<h3 className="heading-lg tracking-tight mb-6 group-hover:text-[var(--accent)] transition-colors">Market Entry<br/>Support</h3>
<p className="text-[var(--text-muted)] font-light max-w-md mb-8">
                        Entering a new region requires local understanding and trusted relationships. We map entry pathways for brands moving between Australia and the GCC.
                    </p>
</div>
<div className="relative z-10 w-full">
<ul className="service-list">
<li>Aus Brands → GCC <span>Setup &amp; Launch</span></li>
<li>GCC Brands → Aus <span>Compliance &amp; Retail</span></li>
<li>Feasibility <span>Market Studies</span></li>
<li>Logistics <span>Warehousing &amp; E-com</span></li>
</ul>
<div className="mt-8 flex gap-4 text-xs uppercase tracking-widest text-[var(--text-muted)]">
<span>• Strategy</span>
<span>• Partner Alignment</span>
</div>
</div>
</div>
</div>
</section>

<section id="business">
<div className="service-row">

<div className="service-panel hover-trigger group">
<div className="relative z-10">
<span className="label">03 // Structure</span>
<h3 className="heading-lg tracking-tight mb-6 group-hover:text-[var(--accent)] transition-colors">Business Setup<br/>&amp; Licensing</h3>
<p className="text-[var(--text-muted)] font-light max-w-md mb-8">
                        From concept to operational presence. We support formation in Dubai, KSA, Qatar, and Australia through licensed providers.
                    </p>
</div>
<div className="relative z-10 w-full">
<ul className="service-list">
<li>Company Formation <span>Freezone &amp; Mainland</span></li>
<li>Banking Support <span>Corporate Accounts</span></li>
<li>Residency <span>Visa &amp; PRO Services</span></li>
<li>Compliance <span>Tax &amp; Regulatory</span></li>
</ul>
</div>
</div>

<div className="service-panel hover-trigger group bg-[#0F0F0F]">
<div className="relative z-10">
<span className="label">04 // Scale</span>
<h3 className="heading-lg tracking-tight mb-6 group-hover:text-[var(--accent)] transition-colors">Franchise<br/>&amp; Brand Growth</h3>
<p className="text-[var(--text-muted)] font-light max-w-md mb-8">
                        Scalable growth across borders. We focus on master franchise introductions, territory alignment, and brand localization.
                    </p>
</div>
<div className="relative z-10 w-full">
<ul className="service-list">
<li>Partner Sourcing <span>Master Franchisees</span></li>
<li>Readiness <span>Market Screening</span></li>
<li>Localization <span>Brand Adaptation</span></li>
<li>Roadmap <span>Expansion Strategy</span></li>
</ul>
</div>
</div>
</div>
</section>

<section className="section-auto border-b border-[var(--border)]" id="partners">
<div className="max-w-[1600px] mx-auto w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 reveal">
<div>
<span className="label">Network</span>
<h2 className="heading-lg tracking-tight mb-8">Our Partnerships<br/>&amp; Alliances</h2>
<p className="text-xl text-[var(--text-muted)] font-light leading-relaxed mb-8">
                        A Network Built Over <span className="text-[var(--text-main)] font-medium">25+ Years.</span>
</p>
<p className="text-[var(--text-muted)] font-light max-w-md mb-12">
                        This network is the result of decades of operational presence, not transactional activity. Our platform is supported by long-standing alliances across the region.
                    </p>
<div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[var(--accent)]">
<iconify-icon icon="lucide:handshake" width="16"></iconify-icon>
<span>Established Relationships</span>
</div>
</div>
<div className="flex flex-col gap-8 justify-center">

<div className="border-l border-[var(--border)] pl-8">
<span className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4 block">Key Regions</span>
<div className="grid grid-cols-2 gap-y-3 gap-x-8 font-display text-lg">
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div> The UAE</div>
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div> Dubai</div>
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div> Saudi Arabia</div>
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div> Qatar</div>
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div> Bahrain</div>
<div className="flex items-center gap-2"><div className="w-1 h-1 bg-[var(--accent)] rounded-full"></div> Oman</div>
</div>
</div>

<div className="border-l border-[var(--border)] pl-8 pt-8 border-t border-[var(--border)] lg:border-t-0">
<span className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4 block">Sector Alliances</span>
<ul className="space-y-2 text-[var(--text-main)] font-light">
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--text-muted)]" icon="lucide:check-circle-2" width="14"></iconify-icon> Real estate developers</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--text-muted)]" icon="lucide:check-circle-2" width="14"></iconify-icon> Corporate groups</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--text-muted)]" icon="lucide:check-circle-2" width="14"></iconify-icon> Legal &amp; advisory firms</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--text-muted)]" icon="lucide:check-circle-2" width="14"></iconify-icon> Business service providers</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[var(--text-muted)]" icon="lucide:check-circle-2" width="14"></iconify-icon> Franchise operators</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="section-auto bg-[#050505]">
<div className="max-w-[1600px] mx-auto w-full reveal">
<span className="label block text-center mb-12">Our Principles</span>
<div className="flex flex-wrap justify-center gap-6 md:gap-12 text-center md:text-left">
<div className="flex flex-col items-center gap-3 group px-4">
<div className="p-3 border border-[var(--border)] rounded-full text-[var(--accent)] bg-[var(--surface)] group-hover:border-[var(--accent)] transition-colors">
<iconify-icon icon="lucide:shield" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide uppercase text-[var(--text-main)]">Compliance-first<br/>Execution</span>
</div>
<div className="hidden md:block w-px h-16 bg-[var(--border)]"></div>
<div className="flex flex-col items-center gap-3 group px-4">
<div className="p-3 border border-[var(--border)] rounded-full text-[var(--accent)] bg-[var(--surface)] group-hover:border-[var(--accent)] transition-colors">
<iconify-icon icon="lucide:users" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide uppercase text-[var(--text-main)]">Partner-led<br/>Delivery</span>
</div>
<div className="hidden md:block w-px h-16 bg-[var(--border)]"></div>
<div className="flex flex-col items-center gap-3 group px-4">
<div className="p-3 border border-[var(--border)] rounded-full text-[var(--accent)] bg-[var(--surface)] group-hover:border-[var(--accent)] transition-colors">
<iconify-icon icon="lucide:focus" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide uppercase text-[var(--text-main)]">Clear Role<br/>Definition</span>
</div>
<div className="hidden md:block w-px h-16 bg-[var(--border)]"></div>
<div className="flex flex-col items-center gap-3 group px-4">
<div className="p-3 border border-[var(--border)] rounded-full text-[var(--accent)] bg-[var(--surface)] group-hover:border-[var(--accent)] transition-colors">
<iconify-icon icon="lucide:infinity" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide uppercase text-[var(--text-main)]">Long-term<br/>Relationship Focus</span>
</div>
<div className="hidden md:block w-px h-16 bg-[var(--border)]"></div>
<div className="flex flex-col items-center gap-3 group px-4">
<div className="p-3 border border-[var(--border)] rounded-full text-[var(--accent)] bg-[var(--surface)] group-hover:border-[var(--accent)] transition-colors">
<iconify-icon icon="lucide:lock" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide uppercase text-[var(--text-main)]">Confidentiality<br/>&amp; Discretion</span>
</div>
</div>
</div>
</section>

<footer className="section items-center justify-center text-center border-t border-[var(--border)]" id="contact">
<div className="reveal">
<span className="label text-[var(--text-muted)]">Initiate Dialogue</span>
<h2 className="display-xl hover-trigger tracking-tighter mb-8 cursor-pointer group">
<span className="group-hover:text-white transition-colors duration-500">Connect</span>
</h2>
<p className="text-[var(--text-muted)] font-light max-w-lg mx-auto mb-12">
                If your organisation is exploring cross-border expansion or investment, Mavrix Global offers a structured, professional starting point.
            </p>
<a className="inline-block border border-[var(--border)] px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)] transition-all duration-300" href="mailto:contact@mavrixglobal.com">
                Contact Us
            </a>
<div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-[var(--text-muted)] border-t border-[var(--border)] pt-8 max-w-4xl mx-auto text-left md:text-center">
<div>
<strong className="block text-[var(--text-main)] mb-2 font-display uppercase tracking-widest">Office</strong>
                    Australia-based HQ<br/>GCC Regional Hubs
                </div>
<div>
<strong className="block text-[var(--text-main)] mb-2 font-display uppercase tracking-widest">Legal</strong>
                    Privacy Policy<br/>Terms of Service
                </div>
<div>
<strong className="block text-[var(--text-main)] mb-2 font-display uppercase tracking-widest">Disclaimer</strong>
                    Mavrix Global is not a financial advisory firm.<br/>We do not manage investments or offer securities.
                </div>
</div>
<div className="mt-12 text-[10px] uppercase tracking-widest opacity-30">
                © 2024 Mavrix Global. All Rights Reserved.
            </div>
</div>
</footer>



    </>
  );
}
