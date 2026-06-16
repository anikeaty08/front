import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Custom Cursor / Particle Effect ---
        const canvas = document.getElementById('cursor-canvas');
        const ctx = canvas.getContext('2d');
        let particlesArray = [];
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const mouse = { x: null, y: null };
        let isMouseMoving = false;
        let timeout;

        window.addEventListener('mousemove', (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
            isMouseMoving = true;
            clearTimeout(timeout);
            
            // Add particles
            for(let i = 0; i < 2; i++) {
                particlesArray.push(new Particle());
            }

            timeout = setTimeout(() => {
                isMouseMoving = false;
            }, 100);
        });

        class Particle {
            constructor() {
                this.x = mouse.x + (Math.random() * 20 - 10);
                this.y = mouse.y + (Math.random() * 20 - 10);
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
                // Orange color matching the theme
                this.color = `rgba(249, 115, 22, 0.4)`;
                this.life = 100;
            }
            update() {
                this.x += this.speedX;
                this.y -= this.speedY + 0.5; // Slight upward drift like smoke
                this.size += 0.05;
                this.life -= 2;
            }
            draw() {
                ctx.fillStyle = `rgba(249, 115, 22, ${this.life/100 * 0.3})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
                if (particlesArray[i].life <= 0) {
                    particlesArray.splice(i, 1);
                    i--;
                }
            }
            requestAnimationFrame(animateParticles);
        }
        animateParticles();


        // --- Sticky Header Glassmorphism ---
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('glass', 'shadow-sm');
                header.classList.remove('py-4');
                header.classList.add('py-2');
            } else {
                header.classList.remove('glass', 'shadow-sm');
                header.classList.add('py-4');
                header.classList.remove('py-2');
            }
        });


        // --- GSAP Scroll Animations ---
        gsap.registerPlugin(ScrollTrigger);

        // Slide up and fade in elements
        gsap.utils.toArray('.reveal-up').forEach((elem) => {
            gsap.fromTo(elem, 
                { y: 40, opacity: 0 }, 
                {
                    y: 0, 
                    opacity: 1, 
                    duration: 1, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                    }
                }
            );
        });

        // Slide from left
        gsap.utils.toArray('.reveal-left').forEach((elem) => {
            gsap.fromTo(elem, 
                { x: -50, opacity: 0 }, 
                {
                    x: 0, 
                    opacity: 1, 
                    duration: 1, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 80%",
                    }
                }
            );
        });

        // Slide from right
        gsap.utils.toArray('.reveal-right').forEach((elem) => {
            gsap.fromTo(elem, 
                { x: 50, opacity: 0 }, 
                {
                    x: 0, 
                    opacity: 1, 
                    duration: 1, 
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 80%",
                    }
                }
            );
        });

        // Simple Parallax Effect for marked elements
        gsap.utils.toArray('.js-parallax').forEach((elem) => {
            const speed = elem.getAttribute('data-speed') || 0.5;
            gsap.to(elem, {
                y: () => (window.innerHeight - elem.getBoundingClientRect().top) * speed,
                ease: "none",
                scrollTrigger: {
                    trigger: elem,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="cursor-canvas"></canvas>

<div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
<div className="bg-glow w-[30rem] h-[30rem] bg-orange-500 top-[-10%] left-[-10%]"></div>
<div className="bg-glow w-[40rem] h-[40rem] bg-orange-400 top-[40%] right-[-15%] opacity-10"></div>
<div className="bg-glow w-[35rem] h-[35rem] bg-rose-400 bottom-[-10%] left-[20%] opacity-10"></div>
</div>

<header className="fixed w-full top-0 z-50 transition-all duration-300 py-4" id="header">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

<a className="text-2xl font-serif font-semibold tracking-tighter text-slate-900 flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm transition-transform group-hover:rotate-12 duration-300">MA</div>
<span className="hidden sm:block">Mubashir</span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium text-slate-500 hover:text-orange-500 transition-colors" href="#experience">Experience</a>
</nav>

<div className="hidden md:block">
<a className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium rounded-full bg-slate-900 text-white hover:bg-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5" href="#contact">
                    Let's Talk
                </a>
</div>

<button className="md:hidden text-slate-900 focus:outline-none">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">

<div className="reveal-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50/50 mb-8 backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium text-orange-600 uppercase tracking-widest">Available for projects</span>
</div>

<h1 className="reveal-up text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tighter text-slate-900 leading-tight mb-6">
                    Premium Agency <br className="hidden md:block"/>
<span className="italic text-slate-400 font-light">for</span>
<span className="bg-gradient-to-r from-orange-500 to-rose-500 clip-text">Creatives.</span>
</h1>

<div className="reveal-up flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base text-slate-500 font-medium mb-8">
<span>UI/UX Designer</span>
<span className="text-orange-300">•</span>
<span>Graphic Designer</span>
<span className="text-orange-300">•</span>
<span>Web Developer</span>
</div>

<p className="reveal-up text-base md:text-lg lg:text-xl text-slate-500 font-light leading-relaxed mb-10 max-w-2xl">
                    I design modern, user-focused digital experiences and high-impact brand visuals that help businesses grow and stand out online.
                </p>

<div className="reveal-up flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1" href="#portfolio">
                        View Portfolio
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-full bg-white text-slate-900 border border-slate-200 hover:border-orange-500 hover:text-orange-500 transition-all duration-300 hover:-translate-y-1" href="#about">
                        Hire Me
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-[#fafafa] to-transparent z-20 pointer-events-none"></div>
<div className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] w-[120%] md:w-[80%] h-[50vh] opacity-30 rounded-[3rem] overflow-hidden js-parallax" data-speed="0.2">
<img alt="Abstract Design" className="w-full h-full object-cover filter grayscale blur-[2px]" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 relative z-10" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-left relative">
<div className="absolute inset-0 bg-orange-500 rounded-3xl transform translate-x-4 translate-y-4 opacity-10"></div>
<div className="relative rounded-3xl overflow-hidden glass-card p-2 aspect-[4/5] group">
<img alt="Working on laptop" className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>

<div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6 shadow-xl animate-[bounce_4s_infinite]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
<iconify-icon className="text-2xl" icon="solar:star-fall-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Experience</p>
<p className="text-xl font-serif font-semibold text-slate-900 tracking-tight">3+ Years</p>
</div>
</div>
</div>
</div>

<div className="reveal-right">
<div className="inline-flex items-center gap-2 mb-6">
<span className="w-8 h-[1px] bg-orange-500"></span>
<span className="text-sm font-medium text-orange-500 tracking-wider uppercase">About Me</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tighter text-slate-900 mb-6">
                        I craft digital solutions that drive results.
                    </h2>
<div className="space-y-6 text-sm md:text-base text-slate-600 font-light leading-relaxed">
<p>
                            I am a passionate UI/UX and Graphic Designer with over <strong className="font-medium text-slate-900">3 years of experience</strong> in graphic design and 1+ year of specialized experience in UI design.
                        </p>
<p>
                            I specialize in creating clean, modern, and conversion-focused designs that not only look visually stunning but actively solve real business problems. Currently, I am working at Peak Corporate, designing user-centered digital products.
                        </p>
</div>
<div className="mt-10">
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-orange-500 text-white hover:bg-slate-900 transition-colors duration-300" href="#contact">
                            Get In Touch
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50/50 relative" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-up">
<div className="inline-flex items-center justify-center gap-2 mb-4">
<span className="w-8 h-[1px] bg-orange-500"></span>
<span className="text-sm font-medium text-orange-500 tracking-wider uppercase">Our Services</span>
<span className="w-8 h-[1px] bg-orange-500"></span>
</div>
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tighter text-slate-900 mb-4">
                    What I Do
                </h2>
<p className="text-sm text-slate-500 font-light">By streamlining the process and focusing on key milestones, we ensure your project is delivered with highest quality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-up glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 group">
<div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight text-slate-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">UI/UX Design</h3>
<ul className="space-y-3 text-sm text-slate-500 font-light mb-8">
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Website UI Design
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            SaaS Dashboard Design
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Mobile App UI Design
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Wireframing &amp; Prototyping
                        </li>
</ul>
</div>

<div className="reveal-up glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 group" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight text-slate-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">Graphic Design</h3>
<ul className="space-y-3 text-sm text-slate-500 font-light mb-8">
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Logo Design &amp; Identity
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Social Media Post Design
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Print &amp; Packaging Design
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Marketing Materials
                        </li>
</ul>
</div>

<div className="reveal-up glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-500 group" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-3xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight text-slate-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">Web Development</h3>
<ul className="space-y-3 text-sm text-slate-500 font-light mb-8">
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            WordPress Development
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Landing Page Design
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Figma to HTML/WP
                        </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-orange-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Website Redesign
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="experience">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="reveal-left">
<div className="inline-flex items-center gap-2 mb-8">
<span className="w-8 h-[1px] bg-orange-500"></span>
<span className="text-sm font-medium text-orange-500 tracking-wider uppercase">Career</span>
</div>
<h2 className="text-4xl font-serif font-medium tracking-tighter text-slate-900 mb-10">Experience</h2>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

<div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-orange-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative"></div>
<div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] glass-card p-6 rounded-2xl transition-all duration-300 hover:border-orange-200 hover:shadow-lg">
<span className="text-xs font-medium text-orange-500 mb-1 block">June 2023 - Present</span>
<h3 className="text-lg font-serif font-semibold text-slate-900 tracking-tight mb-1">UI/UX &amp; Graphic Designer</h3>
<p className="text-sm text-slate-500 font-medium mb-3">Peak Corporate</p>
<p className="text-xs text-slate-500 font-light leading-relaxed">Designed user-centered web and app interfaces, built wireframes and prototypes, and conducted UX improvements to boost engagement.</p>
</div>
</div>

<div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-orange-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative"></div>
<div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] glass-card p-6 rounded-2xl transition-all duration-300 hover:border-orange-200 hover:shadow-lg">
<span className="text-xs font-medium text-orange-500 mb-1 block">June 2023 - July 2024</span>
<h3 className="text-lg font-serif font-semibold text-slate-900 tracking-tight mb-1">UI &amp; UX Designer</h3>
<p className="text-sm text-slate-500 font-medium mb-3">LOGIC SAINT</p>
<p className="text-xs text-slate-500 font-light leading-relaxed">Created branding materials and worked closely with development teams to ensure high-quality digital product delivery.</p>
</div>
</div>
</div>
</div>

<div className="reveal-right">
<div className="inline-flex items-center gap-2 mb-8">
<span className="w-8 h-[1px] bg-orange-500"></span>
<span className="text-sm font-medium text-orange-500 tracking-wider uppercase">Learning</span>
</div>
<h2 className="text-4xl font-serif font-medium tracking-tighter text-slate-900 mb-10">Education</h2>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

<div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-slate-400 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative"></div>
<div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] glass-card p-6 rounded-2xl transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
<span className="text-xs font-medium text-slate-500 mb-1 block">2022 - 2023</span>
<h3 className="text-lg font-serif font-semibold text-slate-900 tracking-tight mb-1">Graphic Design Cert.</h3>
<p className="text-sm text-slate-500 font-medium mb-2">Naye Subah Foundation</p>
</div>
</div>

<div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-slate-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative"></div>
<div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] glass-card p-6 rounded-2xl transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
<span className="text-xs font-medium text-slate-500 mb-1 block">2022</span>
<h3 className="text-lg font-serif font-semibold text-slate-900 tracking-tight mb-1">Basic Computer Cert.</h3>
<p className="text-sm text-slate-500 font-medium mb-2">Naye Subah Foundation</p>
</div>
</div>

<div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-white bg-slate-200 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative"></div>
<div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] glass-card p-6 rounded-2xl transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
<span className="text-xs font-medium text-slate-500 mb-1 block">2023</span>
<h3 className="text-lg font-serif font-semibold text-slate-900 tracking-tight mb-1">Secondary Education</h3>
<p className="text-sm text-slate-500 font-medium mb-2">Karachi City Secondary School</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="portfolio">
<div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-up">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 mb-4">
<span className="w-8 h-[1px] bg-orange-500"></span>
<span className="text-sm font-medium text-orange-500 tracking-wider uppercase">Our Portfolio</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif font-medium tracking-tighter mb-4">
                        Selected Works
                    </h2>
<p className="text-sm text-slate-400 font-light">Explore some of my recent projects focusing on clean interfaces, smooth user experiences, and modern branding.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-white transition-colors duration-300 group" href="#">
                    View All Projects 
                    <span className="transform transition-transform group-hover:translate-x-1">→</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="reveal-up group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-800">
<img alt="Dashboard UI" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex gap-2 mb-3">
<span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md text-slate-200">UI/UX</span>
<span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md text-slate-200">SaaS</span>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight mb-2">Fintech Dashboard</h3>
<p className="text-sm text-slate-400 font-light line-clamp-2">A clean, data-heavy dashboard designed to simplify complex financial analytics for enterprise users.</p>
</div>
</div>

<div className="reveal-up group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-800 md:translate-y-12">
<img alt="Mobile App" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex gap-2 mb-3">
<span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md text-slate-200">Mobile</span>
<span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-md text-slate-200">App</span>
</div>
<h3 className="text-2xl font-serif font-medium tracking-tight mb-2">Health Tracking App</h3>
<p className="text-sm text-slate-400 font-light line-clamp-2">An intuitive mobile experience for users to track daily habits, workouts, and nutrition goals.</p>
</div>
</div>
</div>
<div className="mt-20 md:hidden flex justify-center">
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors duration-300" href="#">
                    View All Projects
                </a>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
<iconify-icon className="text-5xl mb-6 text-slate-900" icon="logos:upwork"></iconify-icon>
<h2 className="reveal-up text-3xl md:text-5xl font-serif font-medium tracking-tighter text-slate-900 mb-6">
                Available for Freelance on Upwork
            </h2>
<p className="reveal-up text-base text-slate-500 font-light max-w-2xl mx-auto mb-10">
                I am actively providing UI/UX and graphic design services on Upwork, working with international clients to deliver high-quality digital products. Check out my profile and client reviews.
            </p>
<a className="reveal-up inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-medium rounded-full bg-[#14A800] text-white hover:bg-[#108A00] transition-all duration-300 shadow-lg shadow-[#14A800]/20 hover:-translate-y-1" href="#">
                View My Upwork Profile
                <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-20 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16">
<div className="max-w-xl">
<h2 className="text-5xl md:text-7xl font-serif font-medium tracking-tighter text-slate-900 leading-tight mb-6">
                        Let's Build Something <span className="text-orange-500 italic">Great.</span>
</h2>
<p className="text-slate-500 font-light text-base md:text-lg">Have a project in mind? Let's discuss how we can help your brand grow through modern design.</p>
</div>
<div className="flex flex-col items-start md:items-end gap-4">
<a className="text-2xl font-serif tracking-tight text-slate-900 hover:text-orange-500 transition-colors" href="mailto:hello@example.com">hello@example.com</a>
<a className="text-lg text-slate-500 hover:text-orange-500 transition-colors" href="tel:+923302351223">+92 330 2351223</a>
</div>
</div>
<div className="border-t border-slate-200/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-6">
<a className="text-slate-400 hover:text-orange-500 transition-transform hover:scale-110" href="#"><iconify-icon className="text-xl" icon="solar:link-linear"></iconify-icon></a>
<a className="text-slate-400 hover:text-orange-500 transition-transform hover:scale-110" href="#"><iconify-icon className="text-xl" icon="pajamas:dribbble"></iconify-icon></a>
<a className="text-slate-400 hover:text-orange-500 transition-transform hover:scale-110" href="#"><iconify-icon className="text-xl" icon="pajamas:twitter"></iconify-icon></a>
</div>
<p className="text-xs text-slate-400 font-light">© 2026 Mubashir Abbas. All Rights Reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
