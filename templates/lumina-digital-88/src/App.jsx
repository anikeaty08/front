import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Spring Animations on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('spring-hidden');
                    entry.target.classList.add('spring-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animated-section').forEach(el => {
            observer.observe(el);
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuBackdrop = document.getElementById('menu-backdrop');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu(show) {
            if (show) {
                mobileMenu.classList.remove('menu-hidden');
                mobileMenu.classList.add('menu-visible');
                setTimeout(() => {
                    menuBackdrop.classList.remove('opacity-0');
                    menuBackdrop.classList.add('opacity-100');
                }, 10);
            } else {
                menuBackdrop.classList.remove('opacity-100');
                menuBackdrop.classList.add('opacity-0');
                setTimeout(() => {
                    mobileMenu.classList.remove('menu-visible');
                    mobileMenu.classList.add('menu-hidden');
                }, 300);
            }
        }

        menuBtn.addEventListener('click', () => toggleMenu(true));
        closeMenuBtn.addEventListener('click', () => toggleMenu(false));
        menuBackdrop.addEventListener('click', () => toggleMenu(false));
        mobileLinks.forEach(link => link.addEventListener('click', () => toggleMenu(false)));

        // Form Validation
        const form = document.getElementById('contactForm');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;
            
            // Name
            const name = document.getElementById('name');
            if (name.value.trim().length < 2) {
                document.getElementById('error-name').classList.remove('hidden');
                name.classList.add('border-red-500/50', 'bg-red-500/5');
                isValid = false;
            } else {
                document.getElementById('error-name').classList.add('hidden');
                name.classList.remove('border-red-500/50', 'bg-red-500/5');
            }

            // Email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                document.getElementById('error-email').classList.remove('hidden');
                email.classList.add('border-red-500/50', 'bg-red-500/5');
                isValid = false;
            } else {
                document.getElementById('error-email').classList.add('hidden');
                email.classList.remove('border-red-500/50', 'bg-red-500/5');
            }

            // Message
            const message = document.getElementById('message');
            if (message.value.trim().length < 5) {
                document.getElementById('error-message').classList.remove('hidden');
                message.classList.add('border-red-500/50', 'bg-red-500/5');
                isValid = false;
            } else {
                document.getElementById('error-message').classList.add('hidden');
                message.classList.remove('border-red-500/50', 'bg-red-500/5');
            }

            // Terms
            const terms = document.getElementById('terms');
            if (!terms.checked) {
                document.getElementById('error-terms').classList.remove('hidden');
                isValid = false;
            } else {
                document.getElementById('error-terms').classList.add('hidden');
            }

            if (isValid) {
                const btn = form.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon> Sending...';
                btn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    form.reset();
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    const success = document.getElementById('success-message');
                    success.classList.remove('hidden');
                    setTimeout(() => success.classList.add('hidden'), 5000);
                }, 1500);
            }
        });

        // Scroll to Top
        const scrollBtn = document.getElementById('scrollToTop');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollBtn.classList.remove('translate-y-20', 'opacity-0');
            } else {
                scrollBtn.classList.add('translate-y-20', 'opacity-0');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 bg-gradient-to-tr from-white to-zinc-500 rounded-full"></div>
                LUMINA
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#what-we-do">Services</a>
<a className="hover:text-white transition-colors" href="#collection">Collection</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<button className="md:hidden text-white p-2" id="menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-50 menu-hidden transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col justify-end" id="mobile-menu">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 transition-opacity duration-500" id="menu-backdrop"></div>

<div className="relative bg-gradient-to-t from-zinc-900 to-zinc-950 border-t border-zinc-800 rounded-t-[2rem] p-8 pb-12 w-full max-h-[85vh] overflow-y-auto no-scrollbar shadow-2xl shadow-indigo-500/10">
<div className="flex justify-between items-center mb-8">
<span className="text-white text-lg font-medium tracking-tight">Menu</span>
<button className="bg-zinc-800/50 rounded-full p-2 text-white hover:bg-zinc-700 transition-colors" id="close-menu-btn">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-2">
<a className="mobile-link text-2xl font-normal text-zinc-300 py-4 border-b border-zinc-800/50 hover:text-white hover:pl-2 transition-all" href="#about">About</a>
<a className="mobile-link text-2xl font-normal text-zinc-300 py-4 border-b border-zinc-800/50 hover:text-white hover:pl-2 transition-all" href="#what-we-do">What We Do</a>
<a className="mobile-link text-2xl font-normal text-zinc-300 py-4 border-b border-zinc-800/50 hover:text-white hover:pl-2 transition-all" href="#story">Our Story</a>
<a className="mobile-link text-2xl font-normal text-zinc-300 py-4 border-b border-zinc-800/50 hover:text-white hover:pl-2 transition-all" href="#collection">Collection</a>
<a className="mobile-link text-2xl font-normal text-zinc-300 py-4 border-b border-zinc-800/50 hover:text-white hover:pl-2 transition-all" href="#projects">Projects</a>
<a className="mobile-link text-2xl font-normal text-zinc-300 py-4 border-b border-zinc-800/50 hover:text-white hover:pl-2 transition-all" href="#achievements">Achievements</a>
<a className="mobile-link text-2xl font-normal text-zinc-300 py-4 border-b border-zinc-800/50 hover:text-white hover:pl-2 transition-all" href="#testimonials">Testimonials</a>
<a className="mobile-link text-2xl font-normal text-indigo-400 py-4 hover:text-indigo-300 hover:pl-2 transition-all" href="#contact">Contact Us</a>
</div>
</div>
</div>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-zinc-900" id="about">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center animated-section spring-hidden">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
<span className="flex h-2 w-2 rounded-full bg-indigo-500"></span>
<span className="text-xs font-medium text-zinc-300 uppercase tracking-wide">About Us</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                Crafting digital <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">realities for the future.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10 font-light">
                We are a collective of thinkers and makers. We build minimal, efficient, and aesthetically pleasing digital solutions that stand the test of time.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center">
<a className="px-6 py-3 bg-white text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors" href="#projects">View Work</a>
<a className="px-6 py-3 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-full hover:bg-zinc-800 transition-colors" href="#story">Read Story</a>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6" id="what-we-do">
<div className="max-w-7xl mx-auto">
<div className="mb-16 animated-section spring-hidden">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">What we do</h2>
<p className="text-zinc-500 max-w-md">Our expertise lies in the intersection of design and technology.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/50 animated-section spring-hidden" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 text-white border border-zinc-800">
<iconify-icon icon="solar:pallete-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Product Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">User-centric interfaces that feel natural and intuitive, focusing on accessibility and aesthetics.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/50 animated-section spring-hidden" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 text-white border border-zinc-800">
<iconify-icon icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Development</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Clean, scalable code architecture using modern frameworks to build robust applications.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:bg-zinc-900/50 animated-section spring-hidden" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-6 text-white border border-zinc-800">
<iconify-icon icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Growth</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Data-driven strategies to amplify reach, optimize conversion, and scale your digital presence.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 border-y border-zinc-900 bg-zinc-950/50" id="story">
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center animated-section spring-hidden">
<div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-6">Our Story</h2>
<div className="space-y-8 relative pl-6 border-l border-zinc-800">
<div className="relative">
<div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-zinc-900 bg-zinc-600"></div>
<p className="text-xs font-mono text-zinc-500 mb-1">2018</p>
<h4 className="text-white font-medium">The Beginning</h4>
<p className="text-sm text-zinc-400 mt-2">Started as a duo in a small garage, fueled by coffee and code.</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-zinc-900 bg-zinc-400"></div>
<p className="text-xs font-mono text-zinc-500 mb-1">2020</p>
<h4 className="text-white font-medium">Expansion</h4>
<p className="text-sm text-zinc-400 mt-2">Grew to a team of 10, working with international startups.</p>
</div>
<div className="relative">
<div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full border-2 border-zinc-900 bg-white"></div>
<p className="text-xs font-mono text-zinc-500 mb-1">2023</p>
<h4 className="text-white font-medium">Global Reach</h4>
<p className="text-sm text-zinc-400 mt-2">Established headquarters and launched our proprietary design system.</p>
</div>
</div>
</div>
<div className="relative h-96 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-900 to-zinc-950"></div>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-zinc-800 w-32 h-32 opacity-20 scale-[2]" icon="solar:verified-check-linear" width="128"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6" id="collection">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 animated-section spring-hidden">
<div>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">Our Collection</h2>
<p className="text-zinc-500 text-sm">Curated digital assets and resources.</p>
</div>
<a className="text-sm text-white border-b border-zinc-700 pb-0.5 hover:border-white transition-all mt-4 md:mt-0" href="#">View All</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 animated-section spring-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-white text-sm font-medium">UI Kit v2</p>
<p className="text-xs text-zinc-400">Figma Resource</p>
</div>
<div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:figma-linear" width="48"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 animated-section spring-hidden" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-white text-sm font-medium">Icon Set</p>
<p className="text-xs text-zinc-400">SVG Library</p>
</div>
<div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:album-linear" width="48"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 animated-section spring-hidden" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-white text-sm font-medium">Dark Theme</p>
<p className="text-xs text-zinc-400">VS Code</p>
</div>
<div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:moon-stars-linear" width="48"></iconify-icon>
</div>
</div>

<div className="group relative aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 animated-section spring-hidden" style={{transitionDelay: '300ms'}}>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity"></div>
<div className="absolute bottom-4 left-4 z-20">
<p className="text-white text-sm font-medium">3D Pack</p>
<p className="text-xs text-zinc-400">Blender Files</p>
</div>
<div className="w-full h-full bg-zinc-800 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
<iconify-icon className="text-zinc-600" icon="solar:box-minimalistic-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 border-t border-zinc-900" id="projects">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-12 text-center animated-section spring-hidden">Featured Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group animated-section spring-hidden">
<div className="w-full h-64 md:h-80 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 mb-6 relative">
<div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-indigo-500/10 transition-colors"></div>
<div className="flex items-center justify-center h-full">
<span className="text-zinc-700 font-mono text-4xl group-hover:scale-110 transition-transform duration-700">A/01</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl text-white font-medium mb-1">Aerospace FinTech</h3>
<p className="text-sm text-zinc-500">Dashboard • React</p>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="group animated-section spring-hidden" style={{transitionDelay: '150ms'}}>
<div className="w-full h-64 md:h-80 bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 mb-6 relative">
<div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors"></div>
<div className="flex items-center justify-center h-full">
<span className="text-zinc-700 font-mono text-4xl group-hover:scale-110 transition-transform duration-700">N/04</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl text-white font-medium mb-1">Nexus AI</h3>
<p className="text-sm text-zinc-500">Branding • Website</p>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 bg-zinc-900/20" id="achievements">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-800/50">
<div className="animated-section spring-hidden">
<p className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">50+</p>
<p className="text-sm text-zinc-500 uppercase tracking-widest">Projects</p>
</div>
<div className="animated-section spring-hidden" style={{transitionDelay: '100ms'}}>
<p className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">12</p>
<p className="text-sm text-zinc-500 uppercase tracking-widest">Awards</p>
</div>
<div className="animated-section spring-hidden" style={{transitionDelay: '200ms'}}>
<p className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">5y</p>
<p className="text-sm text-zinc-500 uppercase tracking-widest">Experience</p>
</div>
<div className="animated-section spring-hidden" style={{transitionDelay: '300ms'}}>
<p className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-2">98%</p>
<p className="text-sm text-zinc-500 uppercase tracking-widest">Satisfaction</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6" id="testimonials">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-16 text-center animated-section spring-hidden">Client Voices</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors animated-section spring-hidden">
<div className="mb-6 text-indigo-400">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<p className="text-zinc-300 mb-6 text-lg leading-relaxed">"The attention to detail Lumina provides is unmatched. They transformed our vague ideas into a concrete, beautiful product."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white">ES</div>
<div>
<p className="text-white text-sm font-medium">Elena Smith</p>
<p className="text-xs text-zinc-500">CEO, Vertex</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors animated-section spring-hidden" style={{transitionDelay: '150ms'}}>
<div className="mb-6 text-indigo-400">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<p className="text-zinc-300 mb-6 text-lg leading-relaxed">"Incredibly professional team. The spring animations and interactions they added to our site increased engagement by 40%."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white">MK</div>
<div>
<p className="text-white text-sm font-medium">Marcus Kane</p>
<p className="text-xs text-zinc-500">CTO, Orbit</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-950 border border-zinc-900 hover:border-zinc-800 transition-colors animated-section spring-hidden" style={{transitionDelay: '300ms'}}>
<div className="mb-6 text-indigo-400">
<iconify-icon icon="solar:stars-minimalistic-linear" width="24"></iconify-icon>
</div>
<p className="text-zinc-300 mb-6 text-lg leading-relaxed">"Clean code, fast delivery, and a design that looks modern yet timeless. Highly recommended for startups."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-white">JL</div>
<div>
<p className="text-white text-sm font-medium">Jessica Lee</p>
<p className="text-xs text-zinc-500">Founder, Mode</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 px-6 border-t border-zinc-900" id="contact">
<div className="max-w-xl mx-auto animated-section spring-hidden">
<div className="text-center mb-10">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-3">Get in touch</h2>
<p className="text-zinc-500">Let's build something extraordinary together.</p>
</div>
<form className="space-y-4" id="contactForm" novalidate="">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-zinc-500 ml-1" htmlFor="name">Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-zinc-700 text-sm" id="name" placeholder="John Doe" required="" type="text"/>
<p className="text-red-500 text-xs hidden mt-1" id="error-name">Please enter your name</p>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 ml-1" htmlFor="email">Email</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-zinc-700 text-sm" id="email" placeholder="john@example.com" required="" type="email"/>
<p className="text-red-500 text-xs hidden mt-1" id="error-email">Please enter a valid email</p>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 ml-1" htmlFor="message">Message</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-all placeholder:text-zinc-700 text-sm resize-none" id="message" placeholder="Tell us about your project..." required="" rows="4"></textarea>
<p className="text-red-500 text-xs hidden mt-1" id="error-message">Message cannot be empty</p>
</div>

<div className="flex items-center gap-3 pt-2">
<label className="relative flex items-center cursor-pointer group">
<input className="peer sr-only" id="terms" required="" type="checkbox"/>
<div className="w-5 h-5 border border-zinc-700 rounded bg-zinc-900 peer-checked:bg-indigo-600 peer-checked:border-indigo-600 transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 scale-75" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-zinc-500 ml-2 group-hover:text-zinc-400 transition-colors">I agree to the privacy policy</span>
</label>
</div>
<p className="text-red-500 text-xs hidden" id="error-terms">You must agree to continue</p>
<button className="w-full bg-white text-zinc-950 font-medium py-3.5 rounded-lg hover:bg-zinc-200 transition-all mt-4 flex items-center justify-center gap-2 group" type="submit">
<span>Send Message</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-2-linear"></iconify-icon>
</button>
<div className="hidden p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center" id="success-message">
                    Message sent successfully. We'll be in touch.
                </div>
</form>
</div>
</section>

<footer className="py-8 border-t border-zinc-900 text-center">
<p className="text-xs text-zinc-600">© 2023 Lumina Digital. All rights reserved.</p>
</footer>

<button aria-label="Scroll to top" className="fixed bottom-6 right-6 z-30 p-3 bg-zinc-800 text-white rounded-full shadow-lg border border-zinc-700 translate-y-20 opacity-0 transition-all duration-500 hover:bg-zinc-700 flex items-center justify-center" id="scrollToTop">
<iconify-icon icon="solar:alt-arrow-up-linear" width="20"></iconify-icon>
</button>


    </>
  );
}
