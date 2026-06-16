import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: {
50: '#f5f3ff',
100: '#ede9fe',
200: '#ddd6fe',
300: '#c4b5fd',
400: '#a78bfa',
500: '#8b5cf6', // Brand Purple
600: '#7c3aed',
700: '#6d28d9',
800: '#5b21b6',
900: '#4c1d95',
950: '#2e1065',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        /**
         * Theme Management
         * Handles toggling between Dark and Light modes using localStorage and system preferences.
         */
        const themeToggle = document.getElementById('theme-toggle');
        const html = document.documentElement;

        // Check local storage or system preference
        function initTheme() {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                html.classList.add('dark');
            } else {
                html.classList.remove('dark');
            }
        }
        initTheme();

        themeToggle.addEventListener('click', () => {
            html.classList.toggle('dark');
            localStorage.theme = html.classList.contains('dark') ? 'dark' : 'light';
        });

        /**
         * Single Page Application (SPA) Navigation Logic
         * Handles showing/hiding sections without page reload.
         */
        function navigateTo(pageId) {
            // Safety check: ensure pageId is a string to prevent injection
            if (typeof pageId !== 'string') return;

            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('block');
            });

            // Show target section
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('block');
                
                // Trigger animation reset for fade-in effects
                const content = target.querySelector('.animate-slide-up');
                if(content) {
                    content.style.animation = 'none';
                    content.offsetHeight; /* trigger reflow */
                    content.style.animation = null; 
                }
            }

            // Update Active State on Navigation Links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                if (link.dataset.target === pageId) {
                    link.classList.add('text-primary-600', 'dark:text-white');
                    link.classList.remove('text-neutral-500', 'dark:text-neutral-400');
                } else {
                    link.classList.remove('text-primary-600', 'dark:text-white');
                    link.classList.add('text-neutral-500', 'dark:text-neutral-400');
                }
            });

            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Initialize Home Page
        document.addEventListener('DOMContentLoaded', () => {
            navigateTo('home');
        });

        /**
         * Mobile Menu Toggle
         */
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (mobileBtn && mobileMenu) {
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-neutral-200 dark:border-white/10 bg-white/80 dark:bg-neutral-950/80 glass-panel transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-white flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg" href="#" onclick="navigateTo('home'); return false;">
<div className="w-8 h-8 bg-neutral-100 dark:bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-200 dark:border-white/10 group-hover:border-primary-500 transition-colors">
<span className="text-primary-600 dark:text-primary-400 font-bold">A</span>
</div>
<span>ALEX<span className="text-neutral-400">DEV</span></span>
</a>

<nav className="hidden md:flex items-center gap-8">
<button className="nav-link text-sm font-medium hover:text-primary-600 dark:hover:text-white transition-colors text-primary-600 dark:text-white focus:outline-none focus-visible:text-primary-600" data-target="home" onclick="navigateTo('home')">Home</button>
<button className="nav-link hover:text-primary-600 dark:text-neutral-400 dark:hover:text-white transition-colors focus:outline-none focus-visible:text-primary-600 dark:text-indigo-400 text-sm font-medium text-neutral-500" data-target="about" onclick="navigateTo('about')">About</button>
<button className="nav-link text-sm font-medium text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-white transition-colors focus:outline-none focus-visible:text-primary-600 text-indigo-500 dark:text-indigo-400" data-target="services" onclick="navigateTo('services')">Services</button>
<button className="nav-link text-sm font-medium text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-white transition-colors focus:outline-none focus-visible:text-primary-600 text-indigo-500 dark:text-indigo-400" data-target="portfolio" onclick="navigateTo('portfolio')">Portfolio</button>
<button className="nav-link text-sm font-medium text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-white transition-colors focus:outline-none focus-visible:text-primary-600 text-indigo-500 dark:text-indigo-400" data-target="blog" onclick="navigateTo('blog')">Blog</button>
<button className="nav-link text-sm font-medium text-neutral-500 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-white transition-colors focus:outline-none focus-visible:text-primary-600 text-indigo-500 dark:text-indigo-400" data-target="contact" onclick="navigateTo('contact')">Contact</button>
</nav>

<div className="flex items-center gap-4">

<button aria-label="Toggle Dark Mode" className="p-2 rounded-full text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-white/5 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/50" id="theme-toggle">
<iconify-icon className="dark:hidden" height="20" icon="lucide:sun" width="20"></iconify-icon>
<iconify-icon className="hidden dark:block" height="20" icon="lucide:moon" width="20"></iconify-icon>
</button>

<button aria-label="Open Menu" className="md:hidden p-2 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-md" id="mobile-menu-btn">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-white/10 p-4 shadow-xl" id="mobile-menu">
<div className="flex flex-col gap-4">
<button className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-300 py-2" onclick="navigateTo('home')">Home</button>
<button className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-300 py-2" onclick="navigateTo('about')">About</button>
<button className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-300 py-2" onclick="navigateTo('services')">Services</button>
<button className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-300 py-2" onclick="navigateTo('portfolio')">Portfolio</button>
<button className="text-left text-sm font-medium text-neutral-600 dark:text-neutral-300 py-2" onclick="navigateTo('contact')">Contact</button>
</div>
</div>
</header>

<main className="pt-16 min-h-screen relative">

<div aria-hidden="true" className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] opacity-50 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] opacity-50 dark:opacity-10 mix-blend-multiply dark:mix-blend-screen"></div>
</div>

<section className="page-section px-0 block" id="home">

<div className="min-h-[calc(100vh-64px)] flex flex-col pr-6 pl-6 relative items-center justify-center">
<div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up" style={{}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-white/5 backdrop-blur-sm select-none">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
</span>
<span className="text-xs font-medium text-neutral-600 dark:text-neutral-300 tracking-wide uppercase">Available for hire</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 dark:text-white leading-[1.1]">
                        Building digital <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-red-400 dark:from-primary-400 dark:to-white">experiences</span> that matter.
                    </h1>
<p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                        I'm Alex, a Full Stack Developer specializing in building exceptional digital experiences. I craft clean, responsive, and performance-optimized websites.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-primary-500/25 flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:ring-offset-neutral-950" onclick="navigateTo('portfolio')">
                            View Work
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white dark:bg-transparent border border-neutral-200 dark:border-white/20 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-white/5 rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-neutral-500" onclick="navigateTo('contact')">
                            Contact Me
                        </button>
</div>
</div>

<div className="absolute bottom-12 left-0 w-full opacity-40 grayscale hover:grayscale-0 transition-all duration-500 pointer-events-none select-none">
<div className="flex justify-center gap-8 md:gap-16 flex-wrap px-6">
<iconify-icon height="24" icon="lucide:code-2" width="24"></iconify-icon>
<iconify-icon height="24" icon="lucide:layout" width="24"></iconify-icon>
<iconify-icon height="24" icon="lucide:smartphone" width="24"></iconify-icon>
<iconify-icon height="24" icon="lucide:database" width="24"></iconify-icon>
<iconify-icon height="24" icon="lucide:server" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="py-24 px-6 border-t border-neutral-200 dark:border-white/5 bg-white dark:bg-neutral-950/50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">What I Do</h2>
<p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">Comprehensive design and development solutions tailored to your needs.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group">
<div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-primary-600 dark:text-primary-400" height="24" icon="lucide:monitor" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3 tracking-tight">Web Development</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Building fast, responsive, and secure websites using modern technologies like React, Next.js, and Tailwind CSS.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group">
<div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-primary-600 dark:text-primary-400" height="24" icon="lucide:layout-template" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3 tracking-tight">UI/UX Design</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Creating intuitive and aesthetically pleasing interfaces that drive user engagement and conversion.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group">
<div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-primary-600 dark:text-primary-400" height="24" icon="lucide:shopping-bag" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3 tracking-tight">E-Commerce</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Developing robust online stores with secure payment integration, inventory management, and smooth checkout flows.</p>
</div>
</div>
</div>
</div>

<div className="py-24 px-6 border-t border-neutral-200 dark:border-white/5 bg-neutral-50/50 dark:bg-white/[0.02]">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">Selected Works</h2>
<p className="text-neutral-500 dark:text-neutral-400">A curated list of projects I've worked on recently.</p>
</div>
<button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline flex items-center gap-1 focus:outline-none" onclick="navigateTo('portfolio')">View All Projects <iconify-icon height="16" icon="lucide:arrow-right" width="16"></iconify-icon></button>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-video border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
<div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
<span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
</div>
<div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" height="48" icon="lucide:layout" width="48"></iconify-icon>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors">Fintech Dashboard</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">SaaS, Dashboard, Finance</p>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-primary-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-video border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
<div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
<span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
</div>
<div className="w-full h-full bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" height="48" icon="lucide:smartphone" width="48"></iconify-icon>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors">E-Commerce Mobile App</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Mobile, React Native, Shopping</p>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-primary-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden py-24 px-6" id="about">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="space-y-8 animate-slide-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">About Me</h2>
<div className="space-y-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
<p>
                                With over 5 years of experience in web development, I have refined my skills in creating seamless online experiences. My journey began with simple HTML pages and has evolved into building complex, scalable applications for startups and enterprise clients.
                            </p>
<p>
                                I believe that design is not just about how things look, but how they work. I approach every project with a focus on user experience, performance, and accessibility.
                            </p>
</div>

<div className="space-y-4 pt-4">
<h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">Technical Skills</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/5">JavaScript (ES6+)</span>
<span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/5">React / Next.js</span>
<span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/5">Tailwind CSS</span>
<span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/5">Node.js</span>
<span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/5">PostgreSQL</span>
<span className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/5">Figma</span>
</div>
</div>
</div>

<div className="relative pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-12 animate-slide-up" style={{animationDelay: '0.1s'}}>
<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-primary-500 ring-4 ring-white dark:ring-neutral-950"></span>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white">Senior Front-end Engineer</h3>
<p className="text-sm text-primary-600 dark:text-primary-400 mb-2">TechCorp Inc. • 2021 - Present</p>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Leading the frontend team, re-architecting the core product using Next.js, and implementing a new design system.</p>
</div>
<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-white dark:ring-neutral-950"></span>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white">Web Developer</h3>
<p className="text-sm text-primary-600 dark:text-primary-400 mb-2">Creative Studio • 2019 - 2021</p>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Developed high-performance marketing websites for varied clients. Focused on animations and SEO optimization.</p>
</div>
<div className="relative">
<span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-700 ring-4 ring-white dark:ring-neutral-950"></span>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white">Freelance Developer</h3>
<p className="text-sm text-primary-600 dark:text-primary-400 mb-2">Remote • 2018 - 2019</p>
<p className="text-sm text-neutral-500 dark:text-neutral-400">Worked with small businesses to establish their online presence through custom WordPress themes and static sites.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden py-24 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 animate-slide-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-4">What I Do</h2>
<p className="text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">Comprehensive design and development solutions tailored to your needs.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 animate-slide-up">
<div className="p-8 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group">
<div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-primary-600 dark:text-primary-400" height="24" icon="lucide:monitor" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3 tracking-tight">Web Development</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Building fast, responsive, and secure websites using modern technologies like React, Next.js, and Tailwind CSS.</p>
</div>
<div className="p-8 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group">
<div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-primary-600 dark:text-primary-400" height="24" icon="lucide:layout-template" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3 tracking-tight">UI/UX Design</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Creating intuitive and aesthetically pleasing interfaces that drive user engagement and conversion.</p>
</div>
<div className="p-8 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 hover:-translate-y-1 hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 group">
<div className="w-12 h-12 bg-white dark:bg-neutral-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-primary-600 dark:text-primary-400" height="24" icon="lucide:shopping-bag" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3 tracking-tight">E-Commerce</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">Developing robust online stores with secure payment integration, inventory management, and smooth checkout flows.</p>
</div>
</div>
</div>
</section>

<section className="page-section hidden py-24 px-6" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-slide-up">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white mb-2">Selected Works</h2>
<p className="text-neutral-500 dark:text-neutral-400">A curated list of projects I've worked on recently.</p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full text-xs font-medium bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary-500">All</button>
<button className="px-4 py-2 rounded-full text-xs font-medium bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-primary-500">Design</button>
<button className="px-4 py-2 rounded-full text-xs font-medium bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-primary-500">Development</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 animate-slide-up">
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-video border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
<div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
<span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
</div>
<div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" height="48" icon="lucide:layout" width="48"></iconify-icon>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors">Fintech Dashboard</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">SaaS, Dashboard, Finance</p>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-primary-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-video border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
<div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
<span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
</div>
<div className="w-full h-full bg-gradient-to-br from-cyan-900 to-blue-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" height="48" icon="lucide:smartphone" width="48"></iconify-icon>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors">E-Commerce Mobile App</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Mobile, React Native, Shopping</p>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-primary-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-video border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
<div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
<span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
</div>
<div className="w-full h-full bg-gradient-to-br from-emerald-900 to-teal-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" height="48" icon="lucide:map" width="48"></iconify-icon>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors">Travel Agency Portal</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Web Design, Branding</p>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-primary-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-video border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900">
<div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
<span className="bg-white/20 backdrop-blur-md text-white px-6 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Project</span>
</div>
<div className="w-full h-full bg-gradient-to-br from-red-900 to-cyan-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="text-white/20" height="48" icon="lucide:music" width="48"></iconify-icon>
</div>
</div>
<div className="mt-4 flex justify-between items-start">
<div>
<h3 className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors">Music Streaming Web App</h3>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">Next.js, API Integration</p>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-primary-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" icon="lucide:arrow-up-right"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden py-24 px-6" id="blog">
<div className="max-w-3xl mx-auto space-y-12">
<div className="text-center mb-12 animate-slide-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">Thoughts</h2>
<p className="text-neutral-500 dark:text-neutral-400 mt-2">Writing about design, code, and the future of the web.</p>
</div>
<article className="group relative flex flex-col items-start hover:bg-neutral-50 dark:hover:bg-white/5 p-6 -mx-6 rounded-2xl transition-colors duration-300 cursor-pointer">
<div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
<time datetime="2023-10-12">Oct 12, 2023</time>
<span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
<span>Development</span>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors tracking-tight">
                        Optimizing Next.js Applications for Maximum Performance
                    </h3>
<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                        A deep dive into server-side rendering, static site generation, and how to utilize the latest features in Next.js 14 to speed up your web apps.
                    </p>
<div className="mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1">
                        Read Article <iconify-icon height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
</div>
</article>
<article className="group relative flex flex-col items-start hover:bg-neutral-50 dark:hover:bg-white/5 p-6 -mx-6 rounded-2xl transition-colors duration-300 cursor-pointer">
<div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
<time datetime="2023-09-28">Sep 28, 2023</time>
<span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
<span>Design</span>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors tracking-tight">
                        The Evolution of Minimalist Web Design
                    </h3>
<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                        How big tech companies like Linear and Vercel are shaping the aesthetic of modern SaaS products through typography and spacing.
                    </p>
<div className="mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1">
                        Read Article <iconify-icon height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
</div>
</article>
<article className="group relative flex flex-col items-start hover:bg-neutral-50 dark:hover:bg-white/5 p-6 -mx-6 rounded-2xl transition-colors duration-300 cursor-pointer">
<div className="flex items-center gap-3 text-xs text-neutral-500 dark:text-neutral-400 mb-3">
<time datetime="2023-08-15">Aug 15, 2023</time>
<span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600"></span>
<span>Career</span>
</div>
<h3 className="text-xl font-medium text-neutral-900 dark:text-white group-hover:text-primary-500 transition-colors tracking-tight">
                        Moving from Freelancing to Full-time Engineering
                    </h3>
<p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                        Lessons learned, challenges faced, and why structure can be liberating for creative developers.
                    </p>
<div className="mt-4 text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1">
                        Read Article <iconify-icon height="16" icon="lucide:chevron-right" width="16"></iconify-icon>
</div>
</article>
</div>
</section>

<section className="page-section hidden py-24 px-6" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-12 animate-slide-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">Get in Touch</h2>
<p className="text-neutral-500 dark:text-neutral-400 mt-2">Have a project in mind? Let's build something amazing together.</p>
</div>
<form className="space-y-6 bg-neutral-50 dark:bg-white/5 p-8 rounded-2xl border border-neutral-200 dark:border-white/10 shadow-sm" onsubmit="event.preventDefault(); alert('Message sent securely! (Demo only)');">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400" htmlFor="name">Name</label>
<input autocomplete="name" className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-primary-500 dark:focus:border-primary-500 outline-none py-2 text-neutral-900 dark:text-white transition-colors" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400" htmlFor="email">Email</label>
<input autocomplete="email" className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-primary-500 dark:focus:border-primary-500 outline-none py-2 text-neutral-900 dark:text-white transition-colors" id="email" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400" htmlFor="subject">Subject</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-primary-500 dark:focus:border-primary-500 outline-none py-2 text-neutral-900 dark:text-white transition-colors appearance-none cursor-pointer" id="subject" name="subject">
<option className="text-neutral-900 bg-white">General Inquiry</option>
<option className="text-neutral-900 bg-white">Project Proposal</option>
<option className="text-neutral-900 bg-white">Freelance</option>
</select>
<iconify-icon className="absolute right-0 top-3 text-neutral-400 pointer-events-none" icon="lucide:chevron-down"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400" htmlFor="message">Message</label>
<textarea className="w-full bg-transparent border-b border-neutral-300 dark:border-neutral-700 focus:border-primary-500 dark:focus:border-primary-500 outline-none py-2 text-neutral-900 dark:text-white transition-colors resize-none" id="message" name="message" placeholder="Tell me about your project..." required="" rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-primary-500/20 mt-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:ring-offset-neutral-900" type="submit">
                        Send Message
                    </button>
</form>
<div className="mt-12 flex justify-center gap-6">

<a aria-label="GitHub" className="text-neutral-500 hover:text-primary-500 transition-colors" href="https://github.com" rel="noopener noreferrer" target="_blank">
<iconify-icon height="24" icon="lucide:github" width="24"></iconify-icon>
</a>
<a aria-label="Twitter" className="text-neutral-500 hover:text-primary-500 transition-colors" href="https://twitter.com" rel="noopener noreferrer" target="_blank">
<iconify-icon height="24" icon="lucide:twitter" width="24"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-neutral-500 hover:text-primary-500 transition-colors" href="https://linkedin.com" rel="noopener noreferrer" target="_blank">
<iconify-icon height="24" icon="lucide:linkedin" width="24"></iconify-icon>
</a>
<a aria-label="Email" className="text-neutral-500 hover:text-primary-500 transition-colors" href="mailto:hello@example.com">
<iconify-icon height="24" icon="lucide:mail" width="24"></iconify-icon>
</a>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950 py-8 px-6 mt-auto">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-neutral-500 dark:text-neutral-400">© 2023 AlexDev. All rights reserved.</p>
<div className="flex gap-6 text-sm font-medium text-neutral-600 dark:text-neutral-400">
<a className="hover:text-primary-500 transition-colors" href="#">Privacy</a>
<a className="hover:text-primary-500 transition-colors" href="#">Terms</a>
<a className="hover:text-primary-500 transition-colors" href="#">Sitemap</a>
</div>
</div>
</footer>



    </>
  );
}
