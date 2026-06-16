import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Cursor Logic
        const dot = document.getElementById('cursor-dot');
        const ring = document.getElementById('cursor-ring');
        
        window.addEventListener('mousemove', (e) => {
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
            
            // Add slight delay to ring for smooth effect
            setTimeout(() => {
                ring.style.left = `${e.clientX}px`;
                ring.style.top = `${e.clientY}px`;
            }, 50);
        });

        // Scroll Reveal Logic
        const revealElements = document.querySelectorAll('.reveal-element');
        const observerOptions = { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => revealObserver.observe(el));

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('border-b', 'border-[#222222]');
            } else {
                navbar.classList.remove('border-b', 'border-[#222222]');
            }
        });

        // Mobile Menu Toggle
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let menuOpen = false;

        mobileBtn.addEventListener('click', () => {
            menuOpen = !menuOpen;
            if (menuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('opacity-100', 'pointer-events-auto');
                mobileBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>';
            } else {
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>';
            }
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuOpen = false;
                mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                mobileBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>';
            });
        });

        // Simple Router for Single Page App Demo
        const routes = ['home', 'work', 'services', 'about', 'blog', 'contact'];
        
        function handleRouting() {
            let hash = window.location.hash.replace('#', '') || 'home';
            if (!routes.includes(hash)) hash = 'home';

            // Hide all pages
            document.querySelectorAll('.page-view').forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('page-transition');
            });

            // Show selected page
            const targetPage = document.getElementById(`page-${hash}`);
            if (targetPage) {
                targetPage.classList.remove('hidden');
                // Trigger reflow to restart animation
                void targetPage.offsetWidth;
                targetPage.classList.add('page-transition');
            }

            // Update Active Nav Link
            document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active', 'text-[#F5F5F0]'));
            const activeLink = document.querySelector(`.nav-link[href="#${hash}"]`);
            if(activeLink) activeLink.classList.add('active', 'text-[#F5F5F0]');

            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Re-trigger scroll reveal for newly visible elements
            const newRevealElements = targetPage.querySelectorAll('.reveal-element');
            newRevealElements.forEach(el => {
                el.classList.remove('visible');
                revealObserver.observe(el);
            });
        }

        window.addEventListener('hashchange', handleRouting);
        window.addEventListener('load', handleRouting);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="hidden md:block pointer-events-none" id="cursor-dot"></div>
<div className="hidden md:block pointer-events-none" id="cursor-ring"></div>

<nav className="fixed top-0 w-full h-16 z-50 bg-[#0F0F0F] transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<a className="font-display font-bold text-xl tracking-tight z-50" href="#home">
<span className="text-[#F5F5F0]">Olivia</span><span className="text-[#7C3AED]">Tech</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9CA3AF]">
<a className="nav-link relative hover:text-[#F5F5F0] transition-colors" href="#work">Work</a>
<span className="text-[#333]">·</span>
<a className="nav-link relative hover:text-[#F5F5F0] transition-colors" href="#services">Services</a>
<span className="text-[#333]">·</span>
<a className="nav-link relative hover:text-[#F5F5F0] transition-colors" href="#about">About</a>
<span className="text-[#333]">·</span>
<a className="nav-link relative hover:text-[#F5F5F0] transition-colors" href="#blog">Blog</a>
</div>
<a className="hidden md:flex items-center justify-center bg-[#F59E0B] text-[#111111] font-semibold text-sm h-9 px-5 rounded-md btn-hover z-50" href="#contact">
                Start a Project
            </a>

<button className="md:hidden text-[#F5F5F0] z-50" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[#0F0F0F] flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300 z-40" id="mobile-menu">
<a className="mobile-link text-3xl font-display font-bold text-[#F5F5F0] hover:text-[#7C3AED] transition-colors" href="#work">Work</a>
<a className="mobile-link text-3xl font-display font-bold text-[#F5F5F0] hover:text-[#7C3AED] transition-colors" href="#services">Services</a>
<a className="mobile-link text-3xl font-display font-bold text-[#F5F5F0] hover:text-[#7C3AED] transition-colors" href="#about">About</a>
<a className="mobile-link text-3xl font-display font-bold text-[#F5F5F0] hover:text-[#7C3AED] transition-colors" href="#blog">Blog</a>
<a className="mobile-link mt-8 bg-[#F59E0B] text-[#111111] font-semibold text-base h-12 px-8 rounded-md flex items-center justify-center" href="#contact">Start a Project</a>
</div>
</nav>

<main className="pt-16" id="app-root">



<div className="page-view" id="page-home">

<section className="relative min-h-[90vh] bg-[#0F0F0F] flex items-center py-24 md:py-40 overflow-hidden">
<div className="bg-grain"></div>

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7C3AED] rounded-full blur-[120px] opacity-[0.08] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#F59E0B] rounded-full blur-[100px] opacity-[0.05] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
<div className="lg:col-span-7 flex flex-col items-start">
<span className="reveal-element text-[#7C3AED] uppercase text-xs tracking-[0.14em] font-medium mb-6">Premium Digital Agency — India</span>
<h1 className="reveal-element font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-[#F5F5F0] leading-[1.05] mb-8" style={{transitionDelay: '0.08s'}}>
                            We build digital products startups are proud to ship.
                        </h1>
<p className="reveal-element text-[#9CA3AF] text-lg md:text-xl max-w-lg leading-relaxed mb-10" style={{transitionDelay: '0.16s'}}>
                            Websites. Ecommerce. Mobile apps. Web apps. AI products. If your startup needs it built and built right — this is where you start.
                        </p>
<div className="reveal-element flex flex-col sm:flex-row gap-4 w-full sm:w-auto" style={{transitionDelay: '0.24s'}}>
<a className="flex items-center justify-center bg-[#F59E0B] text-[#111111] font-semibold text-sm px-8 h-[52px] rounded-md btn-hover" href="#work">
                                See Our Work <span className="ml-2">→</span>
</a>
<a className="flex items-center justify-center border-[1.5px] border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-all duration-200 font-semibold text-sm px-8 h-[52px] rounded-md" href="#process">
                                How We Work
                            </a>
</div>
<p className="reveal-element text-[#6B7280] text-xs mt-8 font-medium" style={{transitionDelay: '0.32s'}}>
                            20+ products shipped · India &amp; beyond · 98% client retention
                        </p>
</div>
<div className="lg:col-span-5 relative h-[500px] hidden md:block float-anim reveal-element" style={{transitionDelay: '0.4s'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full perspective-[1000px]">

<div className="absolute inset-0 transform rotate-x-[15deg] rotate-y-[-20deg] rotate-z-[5deg]">

<div className="absolute top-10 right-0 w-[400px] h-[250px] bg-[#1A1A1A] border border-[#333] rounded-lg shadow-2xl overflow-hidden flex flex-col">
<div className="h-4 border-b border-[#333] flex items-center px-2 gap-1 bg-[#222]">
<div className="w-1.5 h-1.5 rounded-full bg-[#444]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#444]"></div>
</div>
<div className="flex-1 p-4 flex flex-col gap-2 relative">
<div className="absolute inset-0 bg-[#7C3AED] opacity-[0.15] blur-xl"></div>
<div className="w-full h-8 bg-[#333] rounded"></div>
<div className="flex gap-2 flex-1">
<div className="w-1/3 h-full bg-[#222] rounded"></div>
<div className="w-2/3 h-full bg-[#333] rounded"></div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-10 w-[180px] h-[360px] bg-[#1A1A1A] border border-[#333] rounded-[1.5rem] shadow-2xl overflow-hidden flex flex-col transform translate-z-[50px]">
<div className="h-6 flex justify-center items-end pb-1 bg-[#1A1A1A] z-10"><div className="w-12 h-3 bg-[#0F0F0F] rounded-b-xl"></div></div>
<div className="flex-1 p-3 flex flex-col gap-3 relative">
<div className="absolute inset-0 bg-[#7C3AED] opacity-[0.2] blur-lg"></div>
<div className="w-full h-24 bg-[#333] rounded-lg"></div>
<div className="flex gap-2"><div className="w-1/2 h-16 bg-[#222] rounded-lg"></div><div className="w-1/2 h-16 bg-[#222] rounded-lg"></div></div>
<div className="w-full h-12 bg-[#333] rounded-lg mt-auto"></div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-8 left-0 w-full flex justify-center reveal-element z-10" style={{transitionDelay: '0.6s'}}>
<p className="text-sm italic text-[#6B7280] max-w-lg text-center px-6">
                        But building something great starts with understanding what's broken. Here's what most startups are dealing with.
                    </p>
</div>
</section>
<hr className="border-[#E5E4DF] border-t"/>

<section className="bg-[#FAFAF8] py-24 md:py-40 text-[#111111]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal-element">
<span className="text-[#7C3AED] uppercase text-xs tracking-[0.14em] font-medium mb-4 block">The Reality Check</span>
<h2 className="font-display font-bold text-4xl md:text-6xl max-w-3xl leading-[1.1]">
                            Bad software doesn't announce itself. It just quietly costs you everything.
                        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#F4F3EF] border border-[#E5E4DF] rounded-2xl p-8 md:p-10 card-hover-light reveal-element">
<div className="font-display font-extrabold text-6xl md:text-7xl text-[#7C3AED] mb-6">4.2s</div>
<h3 className="font-semibold text-base mb-3">Average startup website load time.</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">
                                53% of your visitors are gone before the page finishes. You're buying traffic you'll never see.
                            </p>
</div>

<div className="bg-[#F4F3EF] border border-[#E5E4DF] rounded-2xl p-8 md:p-10 card-hover-light reveal-element" style={{transitionDelay: '0.1s'}}>
<div className="font-display font-extrabold text-6xl md:text-7xl text-[#7C3AED] mb-6">70%</div>
<h3 className="font-semibold text-base mb-3">Of ecommerce carts get abandoned.</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">
                                A confusing checkout. A missing payment option. A slow redirect. Every one of these is fixable. Most aren't fixed.
                            </p>
</div>

<div className="bg-[#F4F3EF] border border-[#E5E4DF] rounded-2xl p-8 md:p-10 card-hover-light reveal-element" style={{transitionDelay: '0.2s'}}>
<div className="font-display font-extrabold text-6xl md:text-7xl text-[#7C3AED] mb-6">60s</div>
<h3 className="font-semibold text-base mb-3">To decide if your app is worth keeping.</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">
                                First-time users make that call in under a minute. If your onboarding fails them, they don't give you a second chance.
                            </p>
</div>
</div>
<p className="text-sm italic text-[#6B7280] text-center mt-24 reveal-element">
                        This is exactly the territory we work in. Here is what we build — and what each one transforms.
                    </p>
</div>
</section>
<hr className="border-[#222222] border-t"/>

<section className="bg-[#0F0F0F] py-24 md:py-40 relative overflow-hidden" id="services-section">
<div className="bg-grain"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-24 reveal-element">
<span className="text-[#7C3AED] uppercase text-xs tracking-[0.14em] font-medium mb-4 block">Six Capabilities</span>
<h2 className="font-display font-bold text-4xl md:text-6xl text-[#F5F5F0] max-w-3xl leading-[1.1]">
                            Every service is a transformation. Not just a deliverable.
                        </h2>
</div>
<div className="flex flex-col gap-32 md:gap-48">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal-element">
<div className="order-2 lg:order-1 relative h-[400px] bg-[#1A1A1A] border border-[#222] rounded-2xl flex items-center justify-center overflow-hidden">
<div className="absolute w-[200px] h-[200px] bg-[#7C3AED] blur-[80px] opacity-20 rounded-full"></div>
<iconify-icon className="text-[#333] relative z-10" icon="solar:laptop-minimalistic-linear" width="120"></iconify-icon>
</div>
<div className="order-1 lg:order-2 flex flex-col items-start">
<span className="font-mono text-xs text-[#7C3AED] mb-4">01 /</span>
<h3 className="font-display font-bold text-3xl text-[#F5F5F0] mb-4">Websites &amp; Landing Pages</h3>
<p className="text-base text-[#9CA3AF] font-medium mb-6">From a forgettable link <span className="text-[#7C3AED]">→</span> To the page that makes someone trust you in 5 seconds.</p>
<p className="text-base text-[#9CA3AF] leading-relaxed mb-6">
                                    Your website is your first handshake, your pitch deck, and your proof — all at the same time. We build fast, opinionated websites that communicate your value instantly. No fluff. No templates. Every element earns its place.
                                </p>
<ul className="text-sm text-[#F5F5F0] flex flex-col gap-2 mb-8">
<li>— Sub-2 second load time on real devices</li>
<li>— Conversion-optimised layout and copy structure</li>
<li>— SEO-ready architecture that compounds over time</li>
</ul>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-[#1F1F1F] border border-[#333] text-[#9CA3AF] rounded-full text-[11px] px-3 py-1">Next.js</span>
<span className="bg-[#1F1F1F] border border-[#333] text-[#9CA3AF] rounded-full text-[11px] px-3 py-1">Tailwind CSS</span>
<span className="bg-[#1F1F1F] border border-[#333] text-[#9CA3AF] rounded-full text-[11px] px-3 py-1">Framer</span>
</div>
<a className="text-[#7C3AED] text-sm font-medium group flex items-center" href="#work">
                                    See related work <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal-element">
<div className="flex flex-col items-start">
<span className="font-mono text-xs text-[#7C3AED] mb-4">02 /</span>
<h3 className="font-display font-bold text-3xl text-[#F5F5F0] mb-4">Ecommerce Apps</h3>
<p className="text-base text-[#9CA3AF] font-medium mb-6">From a cart people abandon <span className="text-[#7C3AED]">→</span> To a checkout they actually complete.</p>
<p className="text-base text-[#9CA3AF] leading-relaxed mb-6">
                                    Ecommerce is won and lost in micro-moments — a slow image load, a missing payment method, a confusing return policy. We fix each one. Then we build the upsell flows that increase what each order is worth.
                                </p>
<ul className="text-sm text-[#F5F5F0] flex flex-col gap-2 mb-8">
<li>— Shopify and fully custom builds</li>
<li>— Cart recovery and post-purchase flows</li>
<li>— Multi-gateway payment integration</li>
</ul>
<div className="flex flex-wrap gap-2 mb-8">
<span className="bg-[#1F1F1F] border border-[#333] text-[#9CA3AF] rounded-full text-[11px] px-3 py-1">Shopify</span>
<span className="bg-[#1F1F1F] border border-[#333] text-[#9CA3AF] rounded-full text-[11px] px-3 py-1">Stripe</span>
</div>
</div>
<div className="relative h-[400px] bg-[#1A1A1A] border border-[#222] rounded-2xl flex items-center justify-center overflow-hidden">
<div className="absolute w-[200px] h-[200px] bg-[#7C3AED] blur-[80px] opacity-20 rounded-full"></div>
<iconify-icon className="text-[#333] relative z-10" icon="solar:cart-large-minimalistic-linear" width="120"></iconify-icon>
</div>
</div>
</div>
<div className="mt-24 text-center reveal-element">
<a className="inline-flex items-center justify-center border-[1.5px] border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white transition-all duration-200 font-semibold text-sm px-8 h-[52px] rounded-md" href="#services">
                            View All Capabilities
                        </a>
</div>
<p className="text-sm italic text-[#6B7280] text-center mt-24 reveal-element">
                        Promises are easy. Here's what we've actually shipped.
                    </p>
</div>
</section>
<hr className="border-[#E5E4DF] border-t"/>

<section className="bg-[#FAFAF8] py-24 md:py-40 text-[#111111]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 reveal-element">
<div>
<span className="text-[#7C3AED] uppercase text-xs tracking-[0.14em] font-medium mb-4 block">Selected Work</span>
<h2 className="font-display font-bold text-4xl md:text-6xl max-w-2xl leading-[1.1]">
                                Products we've shipped. Numbers we stand behind.
                            </h2>
</div>
<p className="text-[#6B7280] text-lg font-medium">We let outcomes do the talking.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#F4F3EF] border border-[#E5E4DF] rounded-2xl overflow-hidden card-hover-light group reveal-element">
<div className="h-48 md:h-56 bg-[#E5E4DF] w-full overflow-hidden relative">
<div className="absolute inset-0 bg-[#0F0F0F] opacity-5"></div>
<img alt="Dashboard" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-8">
<div className="flex gap-2 mb-4">
<span className="bg-[#EDE9FE] text-[#5B21B6] rounded-full text-[11px] px-3 py-1 font-medium">Web App</span>
</div>
<h3 className="font-display font-bold text-xl mb-2">Fintech Dashboard</h3>
<p className="text-sm font-semibold text-[#7C3AED] mb-3">+40% user retention in 30 days</p>
<p className="text-[#6B7280] text-sm mb-6 line-clamp-2">Complete architectural rewrite and UI overhaul for a high-volume trading platform.</p>
<a className="text-[#7C3AED] text-sm font-medium flex items-center" href="#work">
                                    View Case Study <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>

<div className="bg-[#F4F3EF] border border-[#E5E4DF] rounded-2xl overflow-hidden card-hover-light group reveal-element" style={{transitionDelay: '0.1s'}}>
<div className="h-48 md:h-56 bg-[#E5E4DF] w-full overflow-hidden relative">
<img alt="Mobile App" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-8">
<div className="flex gap-2 mb-4">
<span className="bg-[#EDE9FE] text-[#5B21B6] rounded-full text-[11px] px-3 py-1 font-medium">Mobile App</span>
</div>
<h3 className="font-display font-bold text-xl mb-2">HealthTrack Native</h3>
<p className="text-sm font-semibold text-[#7C3AED] mb-3">4.9 App Store Rating</p>
<p className="text-[#6B7280] text-sm mb-6 line-clamp-2">Offline-first mobile application built with React Native for daily habit tracking.</p>
<a className="text-[#7C3AED] text-sm font-medium flex items-center" href="#work">
                                    View Case Study <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>

<div className="bg-[#F4F3EF] border border-[#E5E4DF] rounded-2xl overflow-hidden card-hover-light group reveal-element" style={{transitionDelay: '0.2s'}}>
<div className="h-48 md:h-56 bg-[#E5E4DF] w-full overflow-hidden relative">
<img alt="Ecommerce" className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-8">
<div className="flex gap-2 mb-4">
<span className="bg-[#EDE9FE] text-[#5B21B6] rounded-full text-[11px] px-3 py-1 font-medium">Ecommerce</span>
</div>
<h3 className="font-display font-bold text-xl mb-2">Luxe &amp; Co Store</h3>
<p className="text-sm font-semibold text-[#7C3AED] mb-3">-2.1s average load time</p>
<p className="text-[#6B7280] text-sm mb-6 line-clamp-2">Custom headless Shopify build focusing on visual storytelling and instant checkout.</p>
<a className="text-[#7C3AED] text-sm font-medium flex items-center" href="#work">
                                    View Case Study <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
</div>
<div className="mt-16 text-center reveal-element">
<a className="inline-flex items-center text-[#7C3AED] font-semibold text-sm group" href="#work">
                            View all 20+ projects <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
<p className="text-sm italic text-[#6B7280] text-center mt-24 reveal-element">
                        Seeing what we've built is one thing. Seeing how we build it is what makes founders choose us.
                    </p>
</div>
</section>
<hr className="border-[#222222] border-t"/>

<section className="bg-[#0F0F0F] py-24 md:py-40 relative">
<div className="bg-grain"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 reveal-element">
<span className="text-[#7C3AED] uppercase text-xs tracking-[0.14em] font-medium mb-4 block">The Process</span>
<h2 className="font-display font-bold text-4xl md:text-6xl text-[#F5F5F0] max-w-3xl leading-[1.1]">
                            What working with us actually feels like — week by week.
                        </h2>
</div>
<div className="flex flex-col lg:flex-row gap-6 overflow-x-auto pb-8 hide-scrollbar">

<div className="min-w-[280px] lg:flex-1 bg-[#1A1A1A] border border-[#222] rounded-2xl p-8 flex flex-col reveal-element">
<div className="font-display font-extrabold text-5xl text-[#7C3AED] mb-2">1</div>
<span className="text-xs text-[#6B7280] mb-4">Week 1</span>
<h3 className="font-semibold text-lg text-[#F5F5F0] mb-3">Discovery</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed mb-6 flex-1">
                                We listen more than we talk. Goals, audience, competitors, constraints. Everything is mapped before a single pixel is designed or a line of code is written.
                            </p>
<div className="h-[1px] bg-[#333] w-full mb-4"></div>
<p className="font-serif italic text-sm text-[#7C3AED]">"Someone finally gets what we're trying to build."</p>
</div>

<div className="min-w-[280px] lg:flex-1 bg-[#1A1A1A] border border-[#222] rounded-2xl p-8 flex flex-col reveal-element" style={{transitionDelay: '0.1s'}}>
<div className="font-display font-extrabold text-5xl text-[#7C3AED] mb-2">2</div>
<span className="text-xs text-[#6B7280] mb-4">Weeks 2–3</span>
<h3 className="font-semibold text-lg text-[#F5F5F0] mb-3">Design</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed mb-6 flex-1">
                                Wireframes, UI design in Figma, and a component library starts. You see and approve every screen before we build it.
                            </p>
<div className="h-[1px] bg-[#333] w-full mb-4"></div>
<p className="font-serif italic text-sm text-[#7C3AED]">"I can see exactly what we're making — and I love it."</p>
</div>

<div className="min-w-[280px] lg:flex-1 bg-[#1A1A1A] border border-[#222] rounded-2xl p-8 flex flex-col reveal-element" style={{transitionDelay: '0.2s'}}>
<div className="font-display font-extrabold text-5xl text-[#7C3AED] mb-2">3</div>
<span className="text-xs text-[#6B7280] mb-4">Weeks 3–7</span>
<h3 className="font-semibold text-lg text-[#F5F5F0] mb-3">Development</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed mb-6 flex-1">
                                Agile sprints with weekly video demos. A shared Notion board you can check anytime. No black boxes, no surprises.
                            </p>
<div className="h-[1px] bg-[#333] w-full mb-4"></div>
<p className="font-serif italic text-sm text-[#7C3AED]">"Progress is visible every week. I'm not anxious about the deadline."</p>
</div>
</div>
<p className="text-sm italic text-[#6B7280] text-center mt-24 reveal-element">
                        Behind every project is one person who's accountable for all of it.
                    </p>
</div>
</section>
<hr className="border-[#E5E4DF] border-t"/>

<section className="bg-[#FAFAF8] py-24 md:py-40 text-[#111111]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-element">
<span className="text-[#7C3AED] uppercase text-xs tracking-[0.14em] font-medium mb-4 block">Who Builds This</span>
<h2 className="font-display font-bold text-4xl md:text-5xl max-w-lg leading-[1.1] mb-8">
                            Hi. I'm Pritam. I built OliviaTech because I kept watching great ideas fail on bad software.
                        </h2>
<div className="text-[#6B7280] text-base leading-[1.8] flex flex-col gap-6 max-w-lg">
<p>
                                I'm Pritam — founder and CTO. I've been building on the internet since college, and somewhere between my third freelance project and my first real startup, I figured out what separates digital products that grow from ones that quietly die.
                            </p>
<p>
                                It's not the tech stack. It's not the design tool. It's whether someone who deeply cares about both was in the room when the real decisions were made. That's the gap I built this agency to fill.
                            </p>
<p>
                                We're small by choice. Every client works directly with me or someone senior. No account managers. No juniors assigned after the pitch.
                            </p>
</div>
<div className="flex gap-6 mt-8">
<a className="text-[#6B7280] hover:text-[#7C3AED] transition-colors" href="#"><iconify-icon icon="solar:github-linear" width="24"></iconify-icon></a>
<a className="text-[#6B7280] hover:text-[#7C3AED] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="24"></iconify-icon></a>
<a className="text-[#6B7280] hover:text-[#7C3AED] transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="24"></iconify-icon></a>
</div>
</div>
<div className="relative h-[500px] lg:h-[600px] w-full reveal-element" style={{transitionDelay: '0.2s'}}>
<img alt="Pritam Priyadarsi" className="w-full h-full object-cover rounded-2xl grayscale contrast-125" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</section>
<hr className="border-[#222222] border-t"/>

<section className="bg-[#0F0F0F] py-24 md:py-40 relative">
<div className="bg-grain"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 text-center reveal-element">
<span className="text-[#7C3AED] uppercase text-xs tracking-[0.14em] font-medium mb-4 block">Client Stories</span>
<h2 className="font-display font-bold text-4xl md:text-5xl text-[#F5F5F0]">Don't take our word for it.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#1A1A1A] border border-[#222] rounded-2xl p-8 flex flex-col reveal-element">
<div className="flex gap-1 mb-6 text-[#7C3AED]">
<iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon>
</div>
<p className="font-serif italic text-lg text-[#F5F5F0] leading-[1.7] flex-1 mb-8">
                                "We wasted 4 months with another agency before finding OliviaTech. Pritam's team rebuilt our core platform in 6 weeks. Fast, clean, and exactly what we needed to close our seed round."
                            </p>
<div className="h-[1px] bg-[#333] w-full mb-6"></div>
<div className="flex flex-col">
<span className="font-semibold text-sm text-[#F5F5F0]">Sarah Jenkins</span>
<span className="text-sm text-[#6B7280]">Founder, Vault</span>
</div>
</div>

<div className="bg-[#1A1A1A] border border-[#222] rounded-2xl p-8 flex flex-col reveal-element" style={{transitionDelay: '0.1s'}}>
<div className="flex gap-1 mb-6 text-[#7C3AED]">
<iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon>
</div>
<p className="font-serif italic text-lg text-[#F5F5F0] leading-[1.7] flex-1 mb-8">
                                "The level of technical clarity is unmatched. They don't just write code; they act as a technical co-founder. The AI MVP they built is now processing 10k requests daily."
                            </p>
<div className="h-[1px] bg-[#333] w-full mb-6"></div>
<div className="flex flex-col">
<span className="font-semibold text-sm text-[#F5F5F0]">Michael Chen</span>
<span className="text-sm text-[#6B7280]">CEO, Nexus AI</span>
</div>
</div>

<div className="bg-[#1A1A1A] border border-[#222] rounded-2xl p-8 flex flex-col reveal-element" style={{transitionDelay: '0.2s'}}>
<div className="flex gap-1 mb-6 text-[#7C3AED]">
<iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon><iconify-icon icon="solar:record-circle-bold" width="12"></iconify-icon>
</div>
<p className="font-serif italic text-lg text-[#F5F5F0] leading-[1.7] flex-1 mb-8">
                                "Our ecommerce conversion rate jumped 2.4x after they redesigned the checkout flow. Zero downtime during the migration. True professionals."
                            </p>
<div className="h-[1px] bg-[#333] w-full mb-6"></div>
<div className="flex flex-col">
<span className="font-semibold text-sm text-[#F5F5F0]">Emma Watson</span>
<span className="text-sm text-[#6B7280]">Director, Bloom&amp;Co</span>
</div>
</div>
</div>
<p className="text-sm italic text-[#6B7280] text-center mt-24 reveal-element">
                        If you've read this far — you're the kind of founder we build for. Let's talk.
                    </p>
</div>
</section>
<hr className="border-[#E5E4DF] border-t"/>


<section className="bg-[#FAFAF8] py-32 md:py-48 relative overflow-hidden">
<div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
<h2 className="font-display font-extrabold text-5xl md:text-6xl text-[#111111] text-center leading-[1.1] mb-6 tracking-tight reveal-element">
                        Tell us what you're building. We'll tell you how to make it something people remember.
                    </h2>
<p className="text-lg text-[#6B7280] text-center max-w-xl mb-12 reveal-element" style={{transitionDelay: '0.1s'}}>
                        No sales pitch. No vague proposal. One honest conversation about your product and what it could become.
                    </p>
<form className="w-full max-w-2xl flex flex-col gap-4 reveal-element" style={{transitionDelay: '0.2s'}}>
<textarea className="w-full bg-[#F4F3EF] border border-[#E5E4DF] focus:border-[#7C3AED] focus:outline-none rounded-xl p-4 text-[#111] placeholder:text-[#9CA3AF] resize-none h-32 transition-colors" placeholder="Describe your project or problem — 2 or 3 sentences is plenty"></textarea>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full bg-[#F4F3EF] border border-[#E5E4DF] focus:border-[#7C3AED] focus:outline-none rounded-xl p-4 text-[#111] placeholder:text-[#9CA3AF] transition-colors h-14" placeholder="Name" type="text"/>
<input className="w-full bg-[#F4F3EF] border border-[#E5E4DF] focus:border-[#7C3AED] focus:outline-none rounded-xl p-4 text-[#111] placeholder:text-[#9CA3AF] transition-colors h-14" placeholder="Email" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<select className="w-full bg-[#F4F3EF] border border-[#E5E4DF] focus:border-[#7C3AED] focus:outline-none rounded-xl p-4 text-[#111] transition-colors h-14 appearance-none cursor-pointer">
<option disabled="" selected="" value="">Budget Range</option>
<option value="10-25k">$10k - $25k</option>
<option value="25-50k">$25k - $50k</option>
<option value="50k+">$50k+</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="relative">
<select className="w-full bg-[#F4F3EF] border border-[#E5E4DF] focus:border-[#7C3AED] focus:outline-none rounded-xl p-4 text-[#111] transition-colors h-14 appearance-none cursor-pointer">
<option disabled="" selected="" value="">Timeline</option>
<option value="asap">ASAP</option>
<option value="1-3m">1 - 3 months</option>
<option value="flexible">Flexible</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-[#F59E0B] text-[#111] font-semibold text-base h-14 rounded-lg mt-2 btn-hover hover:bg-[#D97706] transition-colors" type="button">
                            Send My Brief →
                        </button>
</form>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 text-xs text-[#6B7280] reveal-element" style={{transitionDelay: '0.3s'}}>
<span>— We reply within 24 hours</span>
<span className="hidden md:inline">·</span>
<span>— First call is always free</span>
<span className="hidden md:inline">·</span>
<span>— We've shipped 20+ products like yours</span>
</div>
</div>
</section>
</div>



<div className="page-view hidden" id="page-about">

<section className="bg-[#0F0F0F] pt-32 pb-24 px-6">
<div className="max-w-4xl mx-auto text-center reveal-element">
<h1 className="font-display font-bold text-5xl md:text-6xl text-[#F5F5F0] leading-[1.1]">
                        OliviaTech exists because the right agency didn't.
                    </h1>
</div>
</section>

<section className="bg-[#FAFAF8] py-24 px-6 text-[#111111]">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
<p className="font-serif italic text-2xl md:text-3xl text-[#7C3AED] leading-relaxed reveal-element">
                        "I saw founders paying premium prices for bloated templates and messy code. They were buying liabilities, not assets."
                    </p>
<div className="text-[#6B7280] text-base leading-relaxed flex flex-col gap-6 reveal-element" style={{transitionDelay: '0.1s'}}>
<p>Before OliviaTech, I spent years fixing architecture that other agencies had shipped to unsuspecting startups. Founders would raise a seed round, hire an expensive design shop, and get handed a beautiful Figma file backed by a fragile, unscalable codebase.</p>
<p>I started this agency to be the technical partner founders actually need. We don't just build to spec; we build to scale. If an idea won't work in the real world, we tell you on day one.</p>
</div>
</div>
</section>

<section className="bg-[#0F0F0F] py-32 px-6">
<div className="max-w-4xl mx-auto flex flex-col gap-24">
<div className="reveal-element">
<h2 className="font-display font-bold text-3xl text-[#F5F5F0] mb-4">We ship things we'd use ourselves.</h2>
<p className="font-serif italic text-lg text-[#7C3AED] mb-4">"Good enough" is the enemy of great software.</p>
<p className="text-[#9CA3AF] text-base leading-relaxed">We don't cut corners on architecture to meet an artificial deadline. If we wouldn't be proud to put our name on it in public, it doesn't leave our staging environment.</p>
</div>
<div className="reveal-element">
<h2 className="font-display font-bold text-3xl text-[#F5F5F0] mb-4">We communicate like humans, not agencies.</h2>
<p className="font-serif italic text-lg text-[#7C3AED] mb-4">No corporate speak. No hiding behind account managers.</p>
<p className="text-[#9CA3AF] text-base leading-relaxed">You speak directly to the people building your product. If something is broken, we tell you. If a feature is a waste of your budget, we'll suggest cutting it.</p>
</div>
</div>
</section>
</div>



<div className="page-view hidden" id="page-work">
<section className="bg-[#0F0F0F] pt-32 pb-24 px-6 text-center"><h1 className="font-display font-bold text-5xl text-[#F5F5F0]">Selected Work</h1></section>
<section className="bg-[#FAFAF8] py-32 px-6 text-center text-[#111]"><p>Portfolio grid loading...</p></section>
</div>
<div className="page-view hidden" id="page-services">
<section className="bg-[#0F0F0F] pt-32 pb-24 px-6 text-center"><h1 className="font-display font-bold text-5xl text-[#F5F5F0]">Capabilities</h1></section>
<section className="bg-[#FAFAF8] py-32 px-6 text-center text-[#111]"><p>Services loading...</p></section>
</div>
<div className="page-view hidden" id="page-blog">
<section className="bg-[#0F0F0F] pt-32 pb-24 px-6 text-center"><h1 className="font-display font-bold text-5xl text-[#F5F5F0]">Journal</h1></section>
<section className="bg-[#FAFAF8] py-32 px-6 text-center text-[#111]"><p>Articles loading...</p></section>
</div>
<div className="page-view hidden" id="page-contact">
<section className="bg-[#0F0F0F] pt-32 pb-24 px-6 text-center"><h1 className="font-display font-bold text-5xl text-[#F5F5F0]">Let's Talk</h1></section>
<section className="bg-[#FAFAF8] py-32 px-6 text-center text-[#111]"><p>Form loading...</p></section>
</div>
</main>

<footer className="bg-[#0F0F0F] border-t border-[#222222] pt-20 pb-8 z-20 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1 flex flex-col gap-6">
<a className="font-display font-bold text-xl tracking-tight" href="#home">
<span className="text-[#F5F5F0]">Olivia</span><span className="text-[#7C3AED]">Tech</span>
</a>
<p className="text-sm text-[#6B7280] leading-relaxed pr-4">
                        Building digital products for startups that are done settling.
                    </p>
<div className="flex gap-4">
<a className="text-[#6B7280] hover:text-[#7C3AED] transition-colors" href="#"><iconify-icon icon="solar:github-linear" width="20"></iconify-icon></a>
<a className="text-[#6B7280] hover:text-[#7C3AED] transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" width="20"></iconify-icon></a>
<a className="text-[#6B7280] hover:text-[#7C3AED] transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="flex flex-col gap-4">
<span className="text-[#F5F5F0] font-semibold text-sm mb-2">Navigation</span>
<a className="text-sm text-[#6B7280] hover:text-[#F5F5F0] transition-colors w-fit nav-link" href="#work">Work</a>
<a className="text-sm text-[#6B7280] hover:text-[#F5F5F0] transition-colors w-fit nav-link" href="#services">Services</a>
<a className="text-sm text-[#6B7280] hover:text-[#F5F5F0] transition-colors w-fit nav-link" href="#about">About</a>
<a className="text-sm text-[#6B7280] hover:text-[#F5F5F0] transition-colors w-fit nav-link" href="#blog">Blog</a>
</div>

<div className="flex flex-col gap-4">
<span className="text-[#F5F5F0] font-semibold text-sm mb-2">Capabilities</span>
<a className="text-sm text-[#6B7280] hover:text-[#F5F5F0] transition-colors" href="#">Websites</a>
<a className="text-sm text-[#6B7280] hover:text-[#F5F5F0] transition-colors" href="#">Ecommerce</a>
<a className="text-sm text-[#6B7280] hover:text-[#F5F5F0] transition-colors" href="#">Mobile Apps</a>
<a className="text-sm text-[#6B7280] hover:text-[#F5F5F0] transition-colors" href="#">Web Apps</a>
<a className="text-sm text-[#6B7280] hover:text-[#F5F5F0] transition-colors" href="#">AI MVPs</a>
</div>

<div className="flex flex-col gap-4">
<span className="text-[#F5F5F0] font-semibold text-sm mb-2">Contact</span>
<a className="text-sm text-[#6B7280] hover:text-[#F5F5F0] transition-colors" href="mailto:hello@oliviatech.com">hello@oliviatech.com</a>
<p className="text-sm text-[#6B7280]">Bengaluru, India</p>
</div>
</div>

<div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-[#6B7280]">© 2026 OliviaTech · Built in India</span>
<div className="flex gap-6">
<a className="text-xs text-[#6B7280] hover:text-[#F5F5F0] transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-[#6B7280] hover:text-[#F5F5F0] transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
