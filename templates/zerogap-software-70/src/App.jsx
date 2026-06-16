import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
            } else {
                nav.classList.remove('shadow-lg');
            }
        });

        // Intersection Observer for fade-in animations
        const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="text-lg font-semibold tracking-tighter text-white" href="#">zerogap</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#process">Process</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#testimonials">Testimonials</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium bg-white text-neutral-950 px-4 py-2 rounded-lg hover:bg-neutral-200 transition-colors" href="#contact">
                        Start a project
                        <iconify-icon height="16" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<button className="md:hidden text-white" id="mobileMenuBtn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden border-t border-white/5 bg-neutral-950/95 backdrop-blur-xl" id="mobileMenu">
<div className="px-6 py-4 space-y-3">
<a className="block text-sm text-neutral-400 hover:text-white py-2" href="#services">Services</a>
<a className="block text-sm text-neutral-400 hover:text-white py-2" href="#work">Work</a>
<a className="block text-sm text-neutral-400 hover:text-white py-2" href="#process">Process</a>
<a className="block text-sm text-neutral-400 hover:text-white py-2" href="#testimonials">Testimonials</a>
<a className="block text-sm text-neutral-400 hover:text-white py-2" href="#contact">Contact</a>
<a className="inline-flex items-center gap-2 text-sm font-medium bg-white text-neutral-950 px-4 py-2 rounded-lg mt-2" href="#contact">Start a project</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-16">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15" style={{background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)'}}></div>
<div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full opacity-10" style={{background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)'}}></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-xs text-neutral-300 font-medium">Available for new projects</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] max-w-5xl mx-auto">
                Zero Gap Between
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent"> Your Idea &amp; Execution</span>
</h1>
<p className="mt-6 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed font-light">
                We build premium digital experiences that scale your business — from idea to deployment, with zero compromises.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium bg-white text-neutral-950 px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors" href="#contact">
                    Schedule Meeting
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-medium border border-white/10 bg-white/5 px-6 py-3 rounded-lg hover:bg-white/10 transition-colors" href="">
                    Request a Demo
                </a>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight">50+</div>
<div className="text-xs text-neutral-500 mt-1">Projects delivered</div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight">7+</div>
<div className="text-xs text-neutral-500 mt-1">Years of experience</div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight">98%</div>
<div className="text-xs text-neutral-500 mt-1">Client satisfaction</div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight">24/7</div>
<div className="text-xs text-neutral-500 mt-1">Support Available</div>
</div>
<div>
<div className="text-2xl sm:text-3xl font-semibold tracking-tight">5★</div>
<div className="text-xs text-neutral-500 mt-1">Average Rating</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl">
<p className="text-xs text-indigo-400 uppercase tracking-widest font-medium mb-4">Services</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Everything you need to ship great software</h2>
<p className="mt-4 text-neutral-400 leading-relaxed">We offer end-to-end software development services, from strategy and design to development and ongoing support.</p>
</div>
<div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:palette-round-linear" style={{color: '#818cf8'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Product Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">User research, wireframing, UI/UX design, prototyping, and design systems that scale with your product.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:code-square-linear" style={{color: '#22d3ee'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Web Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Full-stack web applications built with modern frameworks — React, Next.js, Node.js, and more.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:smartphone-linear" style={{color: '#a78bfa'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Mobile Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Native and cross-platform mobile apps for iOS and Android using React Native and Flutter.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:cloud-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Cloud &amp; DevOps</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Infrastructure setup, CI/CD pipelines, cloud migration, and scalable architecture on AWS, GCP, or Azure.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:chart-square-linear" style={{color: '#fbbf24'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">AI &amp; Data</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Machine learning models, AI integrations, data pipelines, and intelligent automation for your business.</p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:palette-linear" style={{color: '#ec4899'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Graphic Designing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Brand identity, UI visuals, marketing creatives, and design systems crafted to elevate your digital presence.
                </p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
<div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:cloud-upload-linear" style={{color: '#6366f1'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Deployment &amp; Hosting</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                    Secure cloud deployment, CI/CD pipelines, performance optimization, and scalable hosting infrastructure.
                </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl">
<p className="text-xs text-indigo-400 uppercase tracking-widest font-medium mb-4">Selected Work</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Projects we're proud of</h2>
<p className="mt-4 text-neutral-400 leading-relaxed">A curated selection of projects that showcase our craft, technical depth, and collaborative approach.</p>
</div>
<div className="mt-16 grid md:grid-cols-2 gap-6">

<div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="aspect-[16/10] bg-gradient-to-br from-indigo-500/20 to-violet-500/20 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-xl bg-neutral-900/80 border border-white/10 shadow-2xl flex items-center justify-center">
<div className="text-center">
<div className="text-xl font-semibold tracking-tighter text-indigo-300">FinFlow</div>
<div className="text-xs text-neutral-500 mt-1">Financial Dashboard</div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">Fintech</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">Web App</span>
</div>
<h3 className="text-base font-medium mb-2">FinFlow — Real-time Financial Platform</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Built a comprehensive financial management platform with real-time analytics, portfolio tracking, and automated reporting.</p>
</div>
</div>

<div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="aspect-[16/10] bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-xl bg-neutral-900/80 border border-white/10 shadow-2xl flex items-center justify-center">
<div className="text-center">
<div className="text-xl font-semibold tracking-tighter text-cyan-300">MediSync</div>
<div className="text-xs text-neutral-500 mt-1">Healthcare Platform</div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">Healthcare</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">Mobile</span>
</div>
<h3 className="text-base font-medium mb-2">MediSync — Healthcare Coordination</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Developed a HIPAA-compliant healthcare platform connecting patients and providers with seamless appointment management.</p>
</div>
</div>

<div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="aspect-[16/10] bg-gradient-to-br from-amber-500/20 to-rose-500/20 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-xl bg-neutral-900/80 border border-white/10 shadow-2xl flex items-center justify-center">
<div className="text-center">
<div className="text-xl font-semibold tracking-tighter text-amber-300">NexaComm</div>
<div className="text-xs text-neutral-500 mt-1">E-Commerce</div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">E-Commerce</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">Full-stack</span>
</div>
<h3 className="text-base font-medium mb-2">NexaComm — Modern Commerce Platform</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Engineered a high-performance e-commerce platform handling 50k+ daily transactions with sub-second page loads.</p>
</div>
</div>

<div className="group relative rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden hover:border-white/10 transition-all duration-300">
<div className="aspect-[16/10] bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-xl bg-neutral-900/80 border border-white/10 shadow-2xl flex items-center justify-center">
<div className="text-center">
<div className="text-xl font-semibold tracking-tighter text-violet-300">Orbiter</div>
<div className="text-xs text-neutral-500 mt-1">SaaS Platform</div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-2 mb-3">
<span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">SaaS</span>
<span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">AI</span>
</div>
<h3 className="text-base font-medium mb-2">Orbiter — AI-Powered Project Management</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Created an AI-driven project management tool with smart task allocation, predictive timelines, and team insights.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl">
<p className="text-xs text-indigo-400 uppercase tracking-widest font-medium mb-4">Our Process</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">How we work together</h2>
<p className="mt-4 text-neutral-400 leading-relaxed">A proven methodology refined over 120+ projects. Transparent, iterative, and focused on delivering results.</p>
</div>
<div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="relative">
<div className="text-7xl font-semibold text-white/[0.03] absolute -top-6 -left-1 tracking-tight">01</div>
<div className="relative pt-8">
<div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:lightbulb-linear" style={{color: '#818cf8'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Discovery</h3>
<p className="text-sm text-neutral-400 leading-relaxed">We dive deep into your business, understand your goals, users, and technical constraints to define the right solution.</p>
</div>
</div>
<div className="relative">
<div className="text-7xl font-semibold text-white/[0.03] absolute -top-6 -left-1 tracking-tight">02</div>
<div className="relative pt-8">
<div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:pen-new-round-linear" style={{color: '#a78bfa'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed">We craft intuitive interfaces and experiences through wireframes, prototypes, and iterative design reviews.</p>
</div>
</div>
<div className="relative">
<div className="text-7xl font-semibold text-white/[0.03] absolute -top-6 -left-1 tracking-tight">03</div>
<div className="relative pt-8">
<div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:programming-linear" style={{color: '#22d3ee'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Develop</h3>
<p className="text-sm text-neutral-400 leading-relaxed">We build in agile sprints with weekly demos, clean code, thorough testing, and continuous integration.</p>
</div>
</div>
<div className="relative">
<div className="text-7xl font-semibold text-white/[0.03] absolute -top-6 -left-1 tracking-tight">04</div>
<div className="relative pt-8">
<div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
<iconify-icon height="20" icon="solar:rocket-2-linear" style={{color: '#34d399'}} width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2">Launch &amp; Scale</h3>
<p className="text-sm text-neutral-400 leading-relaxed">We deploy, monitor, and optimize — then provide ongoing support and enhancements as your product grows.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto">
<p className="text-xs text-indigo-400 uppercase tracking-widest font-medium mb-4">Tech Stack</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built with modern tools</h2>
<p className="mt-4 text-neutral-400 leading-relaxed">We use the best technologies to ensure performance, scalability, and developer experience.</p>
</div>
<div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
<div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
<iconify-icon height="28" icon="solar:code-square-linear" style={{color: '#60a5fa'}} width="28"></iconify-icon>
<span className="text-xs text-neutral-400">React</span>
</div>
<div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
<iconify-icon height="28" icon="solar:server-square-linear" style={{color: '#34d399'}} width="28"></iconify-icon>
<span className="text-xs text-neutral-400">Next.js</span>
</div>
<div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
<iconify-icon height="28" icon="solar:database-linear" style={{color: '#818cf8'}} width="28"></iconify-icon>
<span className="text-xs text-neutral-400">SQL</span>
</div>
<div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
<iconify-icon height="28" icon="solar:cloud-bolt-linear" style={{color: '#fbbf24'}} width="28"></iconify-icon>
<span className="text-xs text-neutral-400">AWS</span>
</div>
<div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
<iconify-icon height="28" icon="solar:layers-linear" style={{color: '#fb7185'}} width="28"></iconify-icon>
<span className="text-xs text-neutral-400">TypeScript</span>
</div>
<div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
<iconify-icon height="28" icon="solar:widget-linear" style={{color: '#a78bfa'}} width="28"></iconify-icon>
<span className="text-xs text-neutral-400">Flutter</span>
</div>
<div className="flex flex-col items-center gap-3 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all">
<iconify-icon height="28" icon="mdi:language-python" style={{color: '#60a5fa'}} width="28"></iconify-icon>
<span className="text-xs text-neutral-400">Python</span>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl">
<p className="text-xs text-indigo-400 uppercase tracking-widest font-medium mb-4">Testimonials</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What our clients say</h2>
</div>
<div className="mt-16 grid md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-1 mb-4">
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6">"ZeroGap delivered our platform 2 weeks ahead of schedule. Their technical expertise and communication were exceptional. They felt like an extension of our team."</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-xs font-medium">SK</div>
<div>
<div className="text-sm font-medium">Sarah Kim</div>
<div className="text-xs text-neutral-500">CTO, FinFlow</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-1 mb-4">
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6">"We've worked with several agencies before, but ZeroGap stands apart. Their attention to detail in both design and code quality is remarkable. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-xs font-medium">MR</div>
<div>
<div className="text-sm font-medium">Marcus Rodriguez</div>
<div className="text-xs text-neutral-500">CEO, NexaComm</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-1 mb-4">
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
<iconify-icon height="14" icon="solar:star-bold" style={{color: '#fbbf24'}} width="14"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 leading-relaxed mb-6">"The team at ZeroGap turned our complex healthcare requirements into an elegant, user-friendly application. They navigated HIPAA compliance with ease."</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center text-xs font-medium">EP</div>
<div>
<div className="text-sm font-medium">Emily Parker</div>
<div className="text-xs text-neutral-500">VP Product, MediSync</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden">

<div className="absolute inset-0 opacity-20" style={{background: 'radial-gradient(ellipse at top right, #6366f1 0%, transparent 50%), radial-gradient(ellipse at bottom left, #06b6d4 0%, transparent 50%)'}}></div>
<div className="relative grid lg:grid-cols-2 gap-12 p-8 sm:p-12 lg:p-16">
<div>
<p className="text-xs text-indigo-400 uppercase tracking-widest font-medium mb-4">Start a project</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let's build something great together</h2>
<p className="mt-4 text-neutral-400 leading-relaxed">Tell us about your project and we'll get back to you within 24 hours with a game plan.</p>
<div className="mt-8 space-y-4">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="solar:letter-linear" style={{color: '#818cf8'}} width="18"></iconify-icon>
<span className="text-sm text-neutral-300">zerogaptechofficial@gmail.com</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="solar:phone-linear" style={{color: '#818cf8'}} width="18"></iconify-icon>
<span className="text-sm text-neutral-300">+91 7000198762 / 7303855170</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="solar:map-point-linear" style={{color: '#818cf8'}} width="18"></iconify-icon>
<span className="text-sm text-neutral-300">Available WorldWide</span>
</div>
</div>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); document.getElementById('successMsg').classList.remove('hidden');">
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs text-neutral-500 mb-1.5 font-medium">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-1.5 font-medium">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all" placeholder="you@company.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-1.5 font-medium">Company</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all" placeholder="Your company" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-1.5 font-medium">Budget range</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-neutral-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all appearance-none cursor-pointer" style={{backgroundImage: 'none'}}>
<option value="">Select a range</option>
<option value="10-25">₹10,000 – ₹25,000</option>
<option value="25-50">₹25,000 – ₹50,000</option>
<option value="50-100">₹50,000 – ₹1,00,000</option>
<option value="100-300">₹1,00,000 – ₹3,00,00</option>
<option value="300-500">₹3,00,000 – ₹5,00,00</option>
<option value="500+">₹5,00,000+</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-1.5 font-medium">Tell us about your project</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all resize-none" placeholder="Describe your project, goals, and timeline..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 text-sm font-medium bg-white text-neutral-950 px-6 py-3 rounded-lg hover:bg-neutral-200 transition-colors" type="submit">
                            Send message
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<div className="hidden text-sm text-emerald-400 text-center pt-2 flex items-center justify-center gap-2" id="successMsg">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Message sent! We'll be in touch soon.
                        </div>
</form>
</div>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
<div className="sm:col-span-2 lg:col-span-1">
<a className="text-lg font-semibold tracking-tighter" href="#">zerogap</a>
<p className="mt-3 text-sm text-neutral-500 leading-relaxed max-w-xs">We design and build exceptional software for companies that want to make a difference.</p>
<div className="flex items-center gap-4 mt-5">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:chat-round-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:global-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs text-neutral-500 uppercase tracking-widest font-medium mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs text-neutral-500 uppercase tracking-widest font-medium mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Product Design</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Web Development</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Mobile Development</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Cloud &amp; DevOps</a></li>
</ul>
</div>
<div>
<h4 className="text-xs text-neutral-500 uppercase tracking-widest font-medium mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2026 ZeroGap. All rights reserved.</p>
<p className="text-xs text-neutral-600">Designed &amp; built with care.</p>
</div>
</div>
</footer>


    </>
  );
}
