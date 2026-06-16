import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Nunito', 'sans-serif'],
},
colors: {
purple: {
500: '#a855f7',
600: '#9333ea',
900: '#581c87',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'medium': '0 8px 30px rgba(0,0,0,0.08)',
}
}
}
}



        // Loader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.querySelector('.loader').classList.add('hidden');
            }, 800);
        });

        // Custom Cursor Logic
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');

        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Add some lag to the outline for smooth effect
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effects for cursor
        const interactables = document.querySelectorAll('a, button, input, textarea');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hovered');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hovered');
            });
        });

        // Mobile Menu
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if(isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
                menuBtn.children[0].classList.add('rotate-45', 'translate-y-1.5');
                menuBtn.children[1].classList.add('-rotate-45', '-translate-y-1.5');
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
                menuBtn.children[0].classList.remove('rotate-45', 'translate-y-1.5');
                menuBtn.children[1].classList.remove('-rotate-45', '-translate-y-1.5');
            }
        });

        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
                menuBtn.children[0].classList.remove('rotate-45', 'translate-y-1.5');
                menuBtn.children[1].classList.remove('-rotate-45', '-translate-y-1.5');
            });
        });

        // Reveal Animations using Intersection Observer
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('animate-reveal')) {
                        entry.target.style.transform = 'translateY(0)';
                    }
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-reveal').forEach(el => {
            el.style.transition = 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)';
            observer.observe(el);
        });

        // Horizontal Scroll Interaction
        const slider = document.getElementById('worksContainer');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
        });

        // Buttons for horizontal scroll
        document.getElementById('scrollLeft').addEventListener('click', () => {
            slider.scrollBy({ left: -400, behavior: 'smooth' });
        });
        document.getElementById('scrollRight').addEventListener('click', () => {
            slider.scrollBy({ left: 400, behavior: 'smooth' });
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('py-4');
                navbar.classList.remove('py-6');
            } else {
                navbar.classList.add('py-6');
                navbar.classList.remove('py-4');
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot hidden md:block"></div>
<div className="cursor-outline hidden md:block"></div>

<div className="loader">
<div className="text-3xl font-bold tracking-tighter text-purple-500 animate-pulse">endur.</div>
</div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 transition-all duration-300" id="navbar">
<div className="flex justify-between items-center max-w-[1600px] mx-auto">
<a className="text-2xl font-bold tracking-tighter hover:text-purple-500 transition-colors z-50 relative group" href="#">
                endur<span className="text-purple-500">.</span>
</a>
<div className="hidden md:flex gap-8 items-center bg-white/80 backdrop-blur-md px-8 py-3 rounded-full shadow-soft border border-gray-100">
<a className="nav-link text-sm font-semibold text-gray-600 hover:text-black" href="#approach">Approach</a>
<a className="nav-link text-sm font-semibold text-gray-600 hover:text-black" href="#work">Innovations</a>
<a className="nav-link text-sm font-semibold text-gray-600 hover:text-black" href="#services">Expertise</a>
<a className="bg-black text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-purple-500 transition-colors duration-300 shadow-md" href="#contact">
                    Start a Project
                </a>
</div>

<button className="md:hidden z-50 flex flex-col gap-1.5 p-2" id="menuBtn">
<span className="w-6 h-0.5 bg-black rounded-full transition-all"></span>
<span className="w-6 h-0.5 bg-black rounded-full transition-all"></span>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-white z-40 flex flex-col justify-center items-center gap-8 opacity-0 pointer-events-none transition-opacity duration-500" id="mobileMenu">
<a className="text-3xl font-bold hover:text-purple-500" href="#approach">Approach</a>
<a className="text-3xl font-bold hover:text-purple-500" href="#work">Innovations</a>
<a className="text-3xl font-bold hover:text-purple-500" href="#services">Expertise</a>
<a className="text-3xl font-bold text-purple-500" href="#contact">Contact</a>
</div>

<section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden bg-zinc-50">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-100 rounded-full blur-[120px] opacity-50"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-purple-100 shadow-soft mb-8 opacity-0 animate-fade-in-up" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
<span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-widest text-gray-500">Longevity Consultancy</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 text-slate-900">
<span className="block overflow-hidden"><span className="block translate-y-full animate-reveal" style={{animationDelay: '0.2s'}}>Designing for the</span></span>
<span className="block overflow-hidden"><span className="block translate-y-full animate-reveal text-purple-500" style={{animationDelay: '0.3s'}}>100-year life.</span></span>
</h1>
<p className="max-w-xl mx-auto text-lg md:text-xl text-gray-500 font-medium leading-relaxed opacity-0 animate-fade-in-up mb-10" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
                We are an innovation consultancy merging bio-science and digital product design to extend human potential.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
<a className="px-8 py-4 bg-black text-white rounded-full font-bold shadow-medium hover:bg-purple-500 hover:shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2" href="#work">
                    Our Work
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="px-8 py-4 bg-white text-black border border-gray-200 rounded-full font-bold shadow-soft hover:border-purple-200 transition-all duration-300" href="#about">
                    The Methodology
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'forwards'}}>
<span className="text-xs font-bold uppercase tracking-widest text-gray-400">Scroll</span>
<div className="w-[1px] h-12 bg-gray-200 overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-1/2 bg-purple-500 animate-scroll-line"></div>
</div>
</div>
</section>

<div className="py-8 bg-white border-y border-gray-100 overflow-hidden">
<div className="flex gap-12 whitespace-nowrap animate-marquee items-center opacity-50">
<span className="text-4xl font-bold text-transparent stroke-text" style={{WebkitTextStroke: '1px #e5e7eb', color: 'transparent'}}>HEALTHSPAN</span>
<iconify-icon className="text-purple-500 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-bold text-gray-300">BIO-WEARABLES</span>
<iconify-icon className="text-purple-500 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-bold text-transparent stroke-text" style={{WebkitTextStroke: '1px #e5e7eb', color: 'transparent'}}>GENOMICS</span>
<iconify-icon className="text-purple-500 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-bold text-gray-300">PREVENTATIVE TECH</span>
<iconify-icon className="text-purple-500 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-bold text-transparent stroke-text" style={{WebkitTextStroke: '1px #e5e7eb', color: 'transparent'}}>HEALTHSPAN</span>
<iconify-icon className="text-purple-500 text-2xl" icon="solar:star-linear"></iconify-icon>
<span className="text-4xl font-bold text-gray-300">BIO-WEARABLES</span>
<iconify-icon className="text-purple-500 text-2xl" icon="solar:star-linear"></iconify-icon>
</div>
</div>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto" id="approach">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="sticky top-32">
<div className="inline-block px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest mb-6">
                    Our Philosophy
                </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                    We bridge the gap between <span className="text-purple-500">science</span> and <span className="text-purple-500">lifestyle.</span>
</h2>
</div>
<div className="space-y-12 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
<p>
                    Aging is complex, but the user experience shouldn't be. At endur, we translate cutting-edge longevity research into intuitive digital products that people actually want to use.
                </p>
<p>
                    From metabolic tracking interfaces to AI-driven health span coaching, we partner with biotech firms and wellness startups to define the next generation of human health interfaces.
                </p>
<div className="grid grid-cols-2 gap-8 pt-8">
<div className="p-6 bg-white rounded-2xl shadow-soft border border-gray-50 group hover:border-purple-200 transition-colors">
<iconify-icon className="text-4xl text-purple-500 mb-4 group-hover:scale-110 transition-transform" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-xl font-bold text-black mb-2">Data-Driven</h3>
<p className="text-sm text-gray-500">Biometric feedback loops tailored for behavioral change.</p>
</div>
<div className="p-6 bg-white rounded-2xl shadow-soft border border-gray-50 group hover:border-purple-200 transition-colors">
<iconify-icon className="text-4xl text-purple-500 mb-4 group-hover:scale-110 transition-transform" icon="solar:heart-pulse-linear"></iconify-icon>
<h3 className="text-xl font-bold text-black mb-2">Human-Centric</h3>
<p className="text-sm text-gray-500">Design that respects biology and cognitive load.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white overflow-hidden rounded-t-[3rem]" id="work">
<div className="px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-6 max-w-[1600px] mx-auto">
<div>
<h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Innovations</h2>
<p className="text-gray-400 max-w-md">Pioneering products defining the future of wellness and longevity.</p>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition-all" id="scrollLeft">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition-all" id="scrollRight">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="overflow-x-auto hide-scrollbar pl-6 md:pl-12 cursor-grab active:cursor-grabbing" id="worksContainer">
<div className="flex gap-8 w-max pr-12 pb-10">

<div className="w-[85vw] md:w-[600px] group relative">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-800 mb-6 relative">
<img alt="Bio-wearable Interface" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
<span className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 block">Mobile App</span>
<h3 className="text-3xl font-bold">Vitalis Monitor</h3>
</div>
</div>
<p className="text-gray-400 text-lg">A real-time metabolic monitoring interface for high-performance athletes.</p>
</div>

<div className="w-[85vw] md:w-[600px] group relative">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-800 mb-6 relative">
<img alt="Cyberpunk Lab" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
<span className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 block">Web Platform</span>
<h3 className="text-3xl font-bold">Genome Key</h3>
</div>
</div>
<p className="text-gray-400 text-lg">Democratizing access to DNA insights with a secure, user-first dashboard.</p>
</div>

<div className="w-[85vw] md:w-[600px] group relative">
<div className="aspect-[4/3] rounded-3xl overflow-hidden bg-gray-800 mb-6 relative">
<img alt="Abstract Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
<span className="text-purple-400 text-xs font-bold uppercase tracking-widest mb-2 block">Smart Device</span>
<h3 className="text-3xl font-bold">Oura Connect</h3>
</div>
</div>
<p className="text-gray-400 text-lg">Integrated sleep tracking ecosystem for the modern bedroom.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-[1200px] mx-auto" id="services">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold mb-4">Our Expertise</h2>
<p className="text-gray-500">Holistic development for the longevity sector.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-[2rem] shadow-soft hover:shadow-medium hover:-translate-y-2 transition-all duration-300 border border-gray-50">
<div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-8">
<iconify-icon icon="solar:smartphone-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-4">Product Design</h3>
<p className="text-gray-500 leading-relaxed mb-6">UI/UX for health applications that require high trust and low friction. We make complex bio-data accessible.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm font-semibold text-gray-700">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Mobile &amp; Web Apps
                    </li>
<li className="flex items-center gap-2 text-sm font-semibold text-gray-700">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Wearable Interfaces
                    </li>
</ul>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-medium border-2 border-purple-500 relative transform md:-translate-y-4 z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Most Popular</div>
<div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center text-white mb-8">
<iconify-icon icon="solar:code-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-4">Development</h3>
<p className="text-gray-500 leading-relaxed mb-6">Full-stack engineering with a focus on data security, HIPAA compliance, and real-time sensor integration.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm font-semibold text-gray-700">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> React / Native
                    </li>
<li className="flex items-center gap-2 text-sm font-semibold text-gray-700">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> IoT Integration
                    </li>
</ul>
</div>

<div className="bg-white p-10 rounded-[2rem] shadow-soft hover:shadow-medium hover:-translate-y-2 transition-all duration-300 border border-gray-50">
<div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-8">
<iconify-icon icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-4">Venture Strategy</h3>
<p className="text-gray-500 leading-relaxed mb-6">We help longevity founders define their MVP, identify market fit, and scale from prototype to series A.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm font-semibold text-gray-700">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Go-to-Market
                    </li>
<li className="flex items-center gap-2 text-sm font-semibold text-gray-700">
<iconify-icon className="text-purple-500" icon="solar:check-circle-linear"></iconify-icon> Technical Advisory
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden" id="contact">
<div className="gradient-blob top-0 right-0 w-[600px] h-[600px] translate-x-1/3 -translate-y-1/3"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center">
<h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Ready to build the future?</h2>
<p className="text-xl text-gray-500 mb-12">Let's create products that add years to life and life to years.</p>
<form className="max-w-lg mx-auto space-y-6 text-left">
<div className="group">
<label className="block text-sm font-bold text-gray-700 mb-2 pl-4">Your Name</label>
<input className="w-full bg-gray-50 border-none rounded-full py-4 px-6 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all shadow-inner" placeholder="John Doe" type="text"/>
</div>
<div className="group">
<label className="block text-sm font-bold text-gray-700 mb-2 pl-4">Email Address</label>
<input className="w-full bg-gray-50 border-none rounded-full py-4 px-6 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all shadow-inner" placeholder="john@company.com" type="email"/>
</div>
<div className="group">
<label className="block text-sm font-bold text-gray-700 mb-2 pl-4">Project Details</label>
<textarea className="w-full bg-gray-50 border-none rounded-3xl py-4 px-6 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all shadow-inner h-32 resize-none" placeholder="Tell us about your vision..."></textarea>
</div>
<button className="w-full py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-purple-600 transition-colors shadow-medium flex justify-center items-center gap-2 group" type="submit">
                    Send Inquiry
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12 px-6 md:px-12">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="text-center md:text-left">
<a className="text-2xl font-bold tracking-tighter mb-2 block" href="#">endur.</a>
<p className="text-gray-500 text-sm">© 2024 Endur Innovations LLC.</p>
</div>
<div className="flex gap-8">
<a className="text-gray-500 hover:text-purple-500 transition-colors" href="#"><iconify-icon icon="mdi:twitter" width="24"></iconify-icon></a>
<a className="text-gray-500 hover:text-purple-500 transition-colors" href="#"><iconify-icon icon="mdi:linkedin" width="24"></iconify-icon></a>
<a className="text-gray-500 hover:text-purple-500 transition-colors" href="#"><iconify-icon icon="mdi:instagram" width="24"></iconify-icon></a>
</div>
<div className="flex gap-6 text-sm font-semibold text-gray-600">
<a className="hover:text-black" href="#">Privacy</a>
<a className="hover:text-black" href="#">Terms</a>
</div>
</div>
</footer>

<style>
        /* Additional Animation Keyframes */
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes scroll-line {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-scroll-line {
            animation: scroll-line 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
    </style>

    </>
  );
}
