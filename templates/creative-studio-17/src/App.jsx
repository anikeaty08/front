import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
royal: '#002366',
beige: '#F5F5DC',
dark: '#020617',
brand: '#0066FF',
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
animation: {
'float': 'float 20s ease-in-out infinite',
'float-reverse': 'floatReverse 25s ease-in-out infinite',
'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
'33%': { transform: 'translate(30px, -50px) rotate(10deg)' },
'66%': { transform: 'translate(-20px, 20px) rotate(-5deg)' },
},
floatReverse: {
'0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
'33%': { transform: 'translate(-30px, 50px) rotate(-10deg)' },
'66%': { transform: 'translate(20px, -20px) rotate(5deg)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        const menuToggle = document.getElementById('menu-toggle');
        const navbar = document.getElementById('navbar-sticky');
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('hidden');
        });
    


        // Portfolio Filter Logic
        document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const items = document.querySelectorAll('.project-item');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-royal', 'text-white', 'shadow-lg');
                        b.classList.add('text-beige/60');
                    });
                    
                    btn.classList.remove('text-beige/60');
                    btn.classList.add('bg-royal', 'text-white', 'shadow-lg');

                    const filterValue = btn.getAttribute('data-filter');

                    items.forEach(item => {
                        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                            item.animate([
                                { transform: 'scale(0.95)', opacity: 0 },
                                { transform: 'scale(1)', opacity: 1 }
                            ], { duration: 400, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' });
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });

            // Intersection Observer for Scroll Animations
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-item').forEach(el => observer.observe(el));

            // Mouse Follower
            const cursor = document.getElementById('cursor-glow');
            document.addEventListener('mousemove', (e) => {
                const x = e.clientX;
                const y = e.clientY;
                cursor.style.left = x + 'px';
                cursor.style.top = y + 'px';
            });
        });

        // Advanced Particle System on Canvas
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.2;
                this.vy = (Math.random() - 0.5) * 0.2;
                this.size = Math.random() * 2;
                this.alpha = Math.random() * 0.5;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = `rgba(245, 245, 220, ${this.alpha})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const particleCount = Math.floor(window.innerWidth / 10); // Responsive density
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        resize();
        initParticles();
        animateParticles();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-glow hidden md:block" id="cursor-glow"></div>

<canvas id="bg-canvas"></canvas>

<div className="blob-cont">
<div className="blob blob-1"></div>
<div className="blob blob-2"></div>
<div className="blob blob-3"></div>
</div>

<nav className="fixed start-0 w-full border-b border-white/5 top-0 backdrop-blur-xl z-50 bg-dark/50 supports-[backdrop-filter]:bg-dark/20">
<div className="flex flex-wrap max-w-7xl mx-auto py-4 px-6 items-center justify-between">
<a className="flex items-center gap-2 group relative z-50" href="#">

<div className="w-[180px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08b388fa-4641-48b3-afad-f80cbfc41138_800w.png)] bg-contain bg-no-repeat bg-left invert-0 opacity-90 hover:opacity-100 transition-opacity"></div>
</a>
<div className="flex md:order-2 space-x-3">
<a className="hidden md:inline-flex items-center justify-center text-dark bg-beige hover:bg-white focus:ring-4 focus:ring-royal/30 font-semibold rounded-full text-xs px-6 py-2.5 transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_-3px_rgba(245,245,220,0.3)]" href="#contact">
                    Let's Talk
                </a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-beige/70 rounded-lg md:hidden hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-royal/50" data-collapse-toggle="navbar-sticky" id="menu-toggle" type="button">
<span className="sr-only">Open main menu</span>
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-white/5 rounded-2xl bg-white/5 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a aria-current="page" className="block py-2 px-3 text-white rounded md:bg-transparent md:text-white md:p-0 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-brand after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left" href="#home">Home</a>
</li>
<li>
<a className="block py-2 px-3 text-beige/60 hover:text-white rounded md:hover:bg-transparent md:p-0 transition-colors" href="#about">About</a>
</li>
<li>
<a className="block py-2 px-3 text-beige/60 hover:text-white rounded md:hover:bg-transparent md:p-0 transition-colors" href="#services">Services</a>
</li>
<li>
<a className="block py-2 px-3 text-beige/60 hover:text-white rounded md:hover:bg-transparent md:p-0 transition-colors" href="#portfolio">Work</a>
</li>
</ul>
</div>
</div>
</nav>



<section className="min-h-screen flex flex-col pt-20 relative items-center justify-center overflow-hidden" id="home">
<div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-royal/20 via-dark to-dark opacity-50"></div>
<div className="text-center max-w-5xl z-10 px-6 space-y-8 mt-[-5vh]">
<div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-royal/30 bg-royal/10 text-xs font-medium tracking-wide text-blue-200 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Available for new projects
                </div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-[1.05] animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                Designing Visual <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-royal to-blue-600">Experiences.</span>
</h1>
<p className="text-lg md:text-xl text-beige/60 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                Olacreatives helps brands speak loud, clear, and creatively through strategic identity and immersive web design.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-royal hover:bg-brand text-white text-sm font-semibold rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(0,35,102,0.6)] hover:shadow-[0_0_30px_-5px_rgba(0,102,255,0.6)] hover:-translate-y-1" href="#portfolio">
                    View Portfolio
                </a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/10 hover:border-beige/50 hover:bg-white/5 text-beige text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 group hover:-translate-y-1" href="#contact">
                    Start a Project
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 animate-bounce duration-[2000ms]">
<span className="text-[10px] uppercase tracking-[0.2em] text-beige/50">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-beige/50 to-transparent"></div>
</div>
</section>

<section className="max-w-7xl mx-auto py-24 px-6" id="about">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative group reveal-item">
<div className="absolute -inset-1 bg-gradient-to-tr from-brand to-royal rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-dark border border-white/10 aspect-[4/5] rounded-xl overflow-hidden">
<img alt="Ola Creative Studio" className="group-hover:scale-105 transition duration-700 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26f5f3f7-606a-4e42-aca0-48e1c173a1f4_1600w.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8">
<div className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest text-brand border border-brand/30 rounded-full bg-brand/10 uppercase">
                            Based in Nigeria
                        </div>
<h3 className="text-3xl font-medium tracking-tight text-white">Ola Creatives</h3>
<p className="text-beige/50 text-sm mt-2">Strategic Design Partner</p>
</div>
</div>
</div>
<div className="space-y-8 reveal-item stagger-delay-1">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                    Transforming ideas into <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-royal">stunning visuals.</span>
</h2>
<div className="space-y-6 text-beige/70 text-lg leading-relaxed font-light">
<p>
                        I'm Ola, a creative brand and web designer with a passion for digital craftsmanship. I don't just design; I strategize.
                    </p>
<p>
                        With a blend of deep market understanding and artistic creativity, I help ambitious businesses connect, convert, and stand out in a crowded digital space. From the first pixel to the final launch, I focus on the details that make a brand unforgettable.
                    </p>
</div>
<div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
<div>
<span className="block text-4xl font-semibold text-white mb-1">3+</span>
<span className="text-xs text-beige/40 uppercase tracking-widest font-medium">Years Exp.</span>
</div>
<div>
<span className="block text-4xl font-semibold text-white mb-1">50+</span>
<span className="text-xs text-beige/40 uppercase tracking-widest font-medium">Projects</span>
</div>
<div>
<span className="block text-4xl font-semibold text-white mb-1">100%</span>
<span className="text-xs text-beige/40 uppercase tracking-widest font-medium">Satisfaction</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="services">
<div className="absolute inset-0 bg-white/[0.02] skew-y-1 transform origin-top-left -z-10 h-full w-full"></div>
<div className="max-w-7xl mx-auto">
<div className="mb-20 md:flex md:justify-between md:items-end reveal-item">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Services provided</h2>
<p className="text-beige/60 text-lg font-light">Comprehensive design solutions tailored to elevate your business presence online and offline.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-brand hover:text-white transition-colors mt-6 md:mt-0" href="#contact">
                    Get a quote <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-[300px] group cursor-pointer reveal-item stagger-delay-1">
<div className="w-14 h-14 rounded-xl bg-royal/20 flex items-center justify-center text-blue-400 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:pen-tool" data-strokeWidth="1.5" data-width="26"></span>
</div>
<div>
<h3 className="text-xl font-medium mb-3 text-white">Brand Identity</h3>
<p className="text-sm text-beige/50 leading-relaxed">Logo design, visual systems, and brand guidelines that tell your story with precision.</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-[300px] group cursor-pointer reveal-item stagger-delay-2">
<div className="w-14 h-14 rounded-xl bg-royal/20 flex items-center justify-center text-blue-400 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:monitor" data-strokeWidth="1.5" data-width="26"></span>
</div>
<div>
<h3 className="text-xl font-medium mb-3 text-white">Web Design</h3>
<p className="text-sm text-beige/50 leading-relaxed">Responsive WordPress websites designed for performance, accessibility, and high conversion.</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-[300px] group cursor-pointer reveal-item stagger-delay-3">
<div className="w-14 h-14 rounded-xl bg-royal/20 flex items-center justify-center text-blue-400 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:share-2" data-strokeWidth="1.5" data-width="26"></span>
</div>
<div>
<h3 className="text-xl font-medium mb-3 text-white">Social Graphics</h3>
<p className="text-sm text-beige/50 leading-relaxed">Engaging content design for Instagram, LinkedIn, and Facebook campaigns that stop the scroll.</p>
</div>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col justify-between h-[300px] group cursor-pointer reveal-item" style={{transitionDelay: '400ms'}}>
<div className="w-14 h-14 rounded-xl bg-royal/20 flex items-center justify-center text-blue-400 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
<span className="iconify" data-icon="lucide:printer" data-strokeWidth="1.5" data-width="26"></span>
</div>
<div>
<h3 className="text-xl font-medium mb-3 text-white">Print Material</h3>
<p className="text-sm text-beige/50 leading-relaxed">Flyers, brochures, and marketing collateral that leaves a physical impact on your audience.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="portfolio">
<div className="text-center mb-16 reveal-item">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">Selected Work</h2>

<div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 rounded-full border border-white/5 backdrop-blur-md" id="portfolio-filters">
<button className="filter-btn active px-6 py-2.5 rounded-full text-xs font-medium bg-royal text-white shadow-lg transition-all duration-300" data-filter="all">All Work</button>
<button className="filter-btn px-6 py-2.5 rounded-full text-xs font-medium text-beige/60 hover:text-white hover:bg-white/5 transition-all duration-300" data-filter="branding">Branding</button>
<button className="filter-btn px-6 py-2.5 rounded-full text-xs font-medium text-beige/60 hover:text-white hover:bg-white/5 transition-all duration-300" data-filter="web">Web Design</button>
<button className="filter-btn px-6 py-2.5 rounded-full text-xs font-medium text-beige/60 hover:text-white hover:bg-white/5 transition-all duration-300" data-filter="print">Print</button>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" id="portfolio-grid">

<div className="project-item group relative overflow-hidden rounded-2xl aspect-[4/3] bg-dark border border-white/5 cursor-pointer reveal-item" data-category="web">
<img alt="Web Project" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h4 className="text-2xl font-medium text-white translate-y-4 group-hover:translate-y-0 transition duration-300">Fintech Dashboard</h4>
<p className="text-sm text-brand font-medium mt-2 translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">Web Design • UI/UX</p>
</div>
</div>

<div className="project-item group relative overflow-hidden rounded-2xl aspect-[4/3] bg-dark border border-white/5 cursor-pointer reveal-item stagger-delay-1" data-category="branding">
<img alt="Branding Project" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h4 className="text-2xl font-medium text-white translate-y-4 group-hover:translate-y-0 transition duration-300">Apex Logistics</h4>
<p className="text-sm text-brand font-medium mt-2 translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">Brand Identity</p>
</div>
</div>

<div className="project-item group relative overflow-hidden rounded-2xl aspect-[4/3] bg-dark border border-white/5 cursor-pointer reveal-item stagger-delay-2" data-category="print">
<img alt="Print Project" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h4 className="text-2xl font-medium text-white translate-y-4 group-hover:translate-y-0 transition duration-300">Summer Festival</h4>
<p className="text-sm text-brand font-medium mt-2 translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">Flyer Design</p>
</div>
</div>

<div className="project-item group relative overflow-hidden rounded-2xl aspect-[4/3] bg-dark border border-white/5 cursor-pointer reveal-item" data-category="web">
<img alt="Web Project" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h4 className="text-2xl font-medium text-white translate-y-4 group-hover:translate-y-0 transition duration-300">Estate Portfolio</h4>
<p className="text-sm text-brand font-medium mt-2 translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">WordPress Dev</p>
</div>
</div>

<div className="project-item group relative overflow-hidden rounded-2xl aspect-[4/3] bg-dark border border-white/5 cursor-pointer reveal-item stagger-delay-1" data-category="branding">
<img alt="Branding Project" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h4 className="text-2xl font-medium text-white translate-y-4 group-hover:translate-y-0 transition duration-300">Urban Coffee</h4>
<p className="text-sm text-brand font-medium mt-2 translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">Packaging &amp; Logo</p>
</div>
</div>

<div className="project-item group relative overflow-hidden rounded-2xl aspect-[4/3] bg-dark border border-white/5 cursor-pointer reveal-item stagger-delay-2" data-category="print">
<img alt="Print Project" className="w-full h-full object-cover transition duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h4 className="text-2xl font-medium text-white translate-y-4 group-hover:translate-y-0 transition duration-300">Corporate Brochure</h4>
<p className="text-sm text-brand font-medium mt-2 translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">Print Design</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-y border-white/5 py-24 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between reveal-item">
<h2 className="text-2xl font-medium tracking-tight">Client Words</h2>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
</div>

<div className="relative w-full overflow-hidden">
<div className="flex gap-6 px-6 animate-[float_40s_linear_infinite] hover:pause">

<div className="flex gap-6 min-w-max">

<div className="w-[350px] md:w-[450px] glass-card rounded-xl p-8 cursor-grab active:cursor-grabbing">
<div className="flex gap-1 text-yellow-500 mb-6 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-beige/80 italic mb-8 text-lg font-light leading-relaxed">"Ola completely transformed our online presence. The brand strategy was on point and the website design is world-class."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/10">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08b388fa-4641-48b3-afad-f80cbfc41138_320w.png"/>
</div>
<div>
<p className="text-sm font-semibold text-white">Jide Davies</p>
<p className="text-xs text-beige/50">CEO, TechNaija</p>
</div>
</div>
</div>

<div className="w-[350px] md:w-[450px] glass-card rounded-xl p-8 cursor-grab active:cursor-grabbing">
<div className="flex gap-1 text-yellow-500 mb-6 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-beige/80 italic mb-8 text-lg font-light leading-relaxed">"Professional, creative, and timely. The flyers for our campaign were exactly what we needed to get attention."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center font-bold text-brand border border-brand/20">AO</div>
<div>
<p className="text-sm font-semibold text-white">Amara Okeke</p>
<p className="text-xs text-beige/50">Marketing Lead, GlowUp</p>
</div>
</div>
</div>

<div className="w-[350px] md:w-[450px] glass-card rounded-xl p-8 cursor-grab active:cursor-grabbing">
<div className="flex gap-1 text-yellow-500 mb-6 text-sm">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
<p className="text-beige/80 italic mb-8 text-lg font-light leading-relaxed">"The new logo perfectly captures our brand essence. Highly recommend Olacreatives for any design work."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center font-bold text-brand border border-brand/20">TA</div>
<div>
<p className="text-sm font-semibold text-white">Tunde Adebayo</p>
<p className="text-xs text-beige/50">Founder, UrbanEat</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="contact">
<div className="grid lg:grid-cols-2 gap-16">
<div className="reveal-item">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8">Let's build something <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-royal">bold together.</span></h2>
<p className="text-beige/60 text-lg mb-12 font-light max-w-md">
                    Have a project in mind? Fill out the form or reach out directly. I'm currently accepting new projects for Q3.
                </p>
<div className="space-y-8">
<a className="flex items-center gap-5 text-beige hover:text-white transition-colors group" href="mailto:olacreatives9@gmail.com">
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand group-hover:bg-brand/10 transition-all">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<span className="text-lg">olacreatives9@gmail.com</span>
</a>
<div className="flex gap-4 pt-4">
<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand text-beige hover:text-white transition-all hover:-translate-y-1" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand text-beige hover:text-white transition-all hover:-translate-y-1" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand hover:border-brand text-beige hover:text-white transition-all hover:-translate-y-1" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
</div>
</div>
</div>

<div className="glass-card p-10 rounded-3xl shadow-2xl reveal-item stagger-delay-1">
<form action="#" className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-beige/40 uppercase tracking-widest" htmlFor="name">Name</label>
<input className="w-full px-4 py-3.5 rounded-xl custom-input text-white placeholder-white/20" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-beige/40 uppercase tracking-widest" htmlFor="email">Email</label>
<input className="w-full px-4 py-3.5 rounded-xl custom-input text-white placeholder-white/20" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-beige/40 uppercase tracking-widest" htmlFor="project">Interest</label>
<div className="relative">
<select className="w-full px-4 py-3.5 rounded-xl custom-input text-white appearance-none bg-dark focus:bg-dark" id="project">
<option>Brand Identity</option>
<option>Web Design</option>
<option>Graphic Design</option>
<option>Other</option>
</select>
<span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-beige/50">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-beige/40 uppercase tracking-widest" htmlFor="message">Details</label>
<textarea className="w-full px-4 py-3.5 rounded-xl custom-input text-white placeholder-white/20" id="message" placeholder="Tell me about your goals..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-white text-dark hover:bg-brand hover:text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-brand/25 mt-4 flex items-center justify-center gap-2 group" type="submit">
                        Send Message
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:send" data-width="16"></span>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/5 pt-16 pb-12 px-6 bg-dark">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-2">
<div className="w-[140px] h-[28px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08b388fa-4641-48b3-afad-f80cbfc41138_800w.png)] bg-contain bg-no-repeat invert-0 opacity-60 hover:opacity-100 transition-opacity"></div>
</div>
<div className="text-center md:text-right">
<p className="text-beige/30 text-xs uppercase tracking-widest">© 2024 Olacreatives. All rights reserved.</p>
</div>
</div>
</footer>

<a className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg shadow-green-900/50 transition-all hover:scale-110 group" href="#">
<span className="iconify text-white group-hover:rotate-12 transition-transform" data-icon="lucide:message-circle" data-strokeWidth="2" data-width="28"></span>
<span className="absolute right-0 top-0 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-[#25D366]"></span>
</span>
</a>



    </>
  );
}
