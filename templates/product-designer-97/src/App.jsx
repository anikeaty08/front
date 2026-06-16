import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const triggers = document.querySelectorAll('.hover-trigger');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        triggers.forEach(trigger => {
            trigger.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            trigger.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
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
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up, .reveal-text').forEach(el => {
            observer.observe(el);
        });

        // Reveal Text on Load
        window.addEventListener('load', () => {
            const reveals = document.querySelectorAll('header .reveal-text');
            reveals.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, 100 * index);
            });
        });

        // Simple Time Widget
        function updateTime() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
            document.getElementById('time').textContent = timeString;
        }
        setInterval(updateTime, 1000);
        updateTime();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden md:block" id="cursor"></div>

<nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300" id="navbar">
<a className="text-lg font-semibold tracking-tighter uppercase z-50 hover-trigger" data-cursor="hover" href="#">
            Alex Morgan®
        </a>
<div className="hidden md:flex gap-8 items-center bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
<a className="text-sm font-medium hover:text-white/60 transition-colors hover-trigger" href="#work">Work</a>
<a className="text-sm font-medium hover:text-white/60 transition-colors hover-trigger" href="#about">About</a>
<a className="text-sm font-medium hover:text-white/60 transition-colors hover-trigger" href="#services">Services</a>
<span className="text-white/20">|</span>
<a className="text-sm font-medium hover:text-white/60 transition-colors hover-trigger" href="#contact">Contact</a>
</div>
<button className="md:hidden text-white hover-trigger">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<header className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12 pt-32 overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
<div className="w-full h-full bg-gradient-to-b from-neutral-800 to-transparent blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
</div>
<div className="max-w-7xl w-full mx-auto relative z-10">
<div className="mb-8 flex items-center gap-2 fade-up">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-sm font-medium tracking-wide uppercase text-neutral-400">Available for new projects</span>
</div>
<h1 className="text-5xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] text-white mb-12">
<span className="block reveal-text">Designing</span>
<span className="block reveal-text" style={{transitionDelay: '0.1s'}}>Digital Products</span>
<span className="block reveal-text text-neutral-500" style={{transitionDelay: '0.2s'}}>That Scale.</span>
</h1>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end fade-up" style={{transitionDelay: '0.4s'}}>
<div className="md:col-span-5 text-lg md:text-xl text-neutral-400 leading-relaxed font-light">
                    I help forward-thinking companies build strategic, high-performance digital experiences. Focusing on clarity, utility, and aesthetic precision.
                </div>
<div className="md:col-span-7 flex flex-wrap gap-4 md:justify-end">
<a className="group relative px-8 py-4 bg-white text-black rounded-lg overflow-hidden hover-trigger transition-transform active:scale-95" href="#work">
<span className="relative z-10 font-semibold tracking-tight">View Projects</span>
<div className="absolute inset-0 bg-neutral-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</a>
<a className="px-8 py-4 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors hover-trigger font-medium tracking-tight flex items-center gap-2" href="#contact">
                        Let's Talk
                        <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
</div>
</header>

<section className="py-24 px-6 md:px-12 border-t border-white/5" id="work">
<div className="max-w-7xl w-full mx-auto">
<div className="flex justify-between items-end mb-20 fade-up">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter">Selected Work</h2>
<span className="hidden md:block text-neutral-500 text-sm">(2021 — 2024)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-20">

<article className="group cursor-none hover-trigger fade-up">
<div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900 relative mb-6">
<img alt="Fintech Dashboard" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 scale-hover-img" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-4">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-1 group-hover:text-white transition-colors text-neutral-200">Nebula Finance</h3>
<p className="text-neutral-500 text-sm">Fintech • Product Design</p>
</div>
<iconify-icon className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</article>

<article className="group cursor-none hover-trigger fade-up md:mt-24">
<div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900 relative mb-6">
<img alt="AI Interface" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 scale-hover-img" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-4">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-1 group-hover:text-white transition-colors text-neutral-200">Vortex AI</h3>
<p className="text-neutral-500 text-sm">SaaS • UI/UX Strategy</p>
</div>
<iconify-icon className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</article>

<article className="group cursor-none hover-trigger fade-up">
<div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900 relative mb-6">
<img alt="E-commerce" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 scale-hover-img" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-4">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-1 group-hover:text-white transition-colors text-neutral-200">Lumina Mode</h3>
<p className="text-neutral-500 text-sm">E-commerce • Design System</p>
</div>
<iconify-icon className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</article>

<article className="group cursor-none hover-trigger fade-up md:mt-24">
<div className="w-full aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900 relative mb-6">
<img alt="Mobile App" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 scale-hover-img" src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-4">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-1 group-hover:text-white transition-colors text-neutral-200">Chronos</h3>
<p className="text-neutral-500 text-sm">Productivity • Mobile App</p>
</div>
<iconify-icon className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</div>
</article>
</div>
<div className="mt-20 text-center">
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white border-b border-transparent hover:border-white transition-all pb-1 hover-trigger" href="#">
                    View All Archives
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-white/5 bg-[#080808]" id="about">
<div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4 fade-up">
<h2 className="text-sm font-semibold tracking-widest text-neutral-500 uppercase mb-4">About Me</h2>
<div className="w-full h-[300px] md:h-[400px] bg-neutral-800 rounded-lg overflow-hidden relative">
<img alt="Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="md:col-span-8 flex flex-col justify-between fade-up">
<div>
<h3 className="text-3xl md:text-5xl font-medium tracking-tighter leading-tight mb-8">
                        Merging aesthetic purity with functional depth to create digital products that feel inevitable.
                    </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-neutral-400 font-light leading-relaxed">
<p>
                            With over 6 years of experience in the digital space, I specialize in dissecting complex problems and reconstructing them into intuitive, beautiful interfaces. I don't just design screens; I design systems that scale.
                        </p>
<p>
                            My philosophy is rooted in "reduction to the essential." By stripping away the unnecessary, we uncover the true purpose of a product, ensuring every pixel serves a user need or a business goal.
                        </p>
</div>
</div>
<div className="mt-12">
<h4 className="text-white font-medium mb-6 border-b border-white/10 pb-2 inline-block">Toolkit &amp; Stack</h4>
<div className="flex flex-wrap gap-3">
<span className="px-4 py-2 border border-white/10 rounded-full text-sm text-neutral-300 hover:bg-white hover:text-black transition-colors cursor-default">Figma</span>
<span className="px-4 py-2 border border-white/10 rounded-full text-sm text-neutral-300 hover:bg-white hover:text-black transition-colors cursor-default">Protopie</span>
<span className="px-4 py-2 border border-white/10 rounded-full text-sm text-neutral-300 hover:bg-white hover:text-black transition-colors cursor-default">Spline</span>
<span className="px-4 py-2 border border-white/10 rounded-full text-sm text-neutral-300 hover:bg-white hover:text-black transition-colors cursor-default">Webflow</span>
<span className="px-4 py-2 border border-white/10 rounded-full text-sm text-neutral-300 hover:bg-white hover:text-black transition-colors cursor-default">React/Tailwind</span>
<span className="px-4 py-2 border border-white/10 rounded-full text-sm text-neutral-300 hover:bg-white hover:text-black transition-colors cursor-default">Linear</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-white/5" id="services">
<div className="max-w-7xl w-full mx-auto">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-16 fade-up">Expertise</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 overflow-hidden rounded-lg">

<div className="bg-[#050505] p-8 md:p-12 hover:bg-[#0a0a0a] transition-colors group cursor-none hover-trigger">
<iconify-icon className="text-neutral-500 mb-6 group-hover:text-white transition-colors" icon="solar:devices-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Product Design</h3>
<p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400">
                        End-to-end product design from conceptualization to developer handoff. Focus on scalability and usability.
                    </p>
</div>

<div className="bg-[#050505] p-8 md:p-12 hover:bg-[#0a0a0a] transition-colors group cursor-none hover-trigger">
<iconify-icon className="text-neutral-500 mb-6 group-hover:text-white transition-colors" icon="solar:layers-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Design Systems</h3>
<p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400">
                        Creating robust, tokenized design libraries that ensure consistency and speed up development cycles.
                    </p>
</div>

<div className="bg-[#050505] p-8 md:p-12 hover:bg-[#0a0a0a] transition-colors group cursor-none hover-trigger">
<iconify-icon className="text-neutral-500 mb-6 group-hover:text-white transition-colors" icon="solar:code-circle-linear" width="32"></iconify-icon>
<h3 className="text-xl font-semibold mb-3 tracking-tight">No-Code Dev</h3>
<p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-400">
                        Building pixel-perfect, interactive websites using Webflow or Framer with custom code integration.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-white/5">
<div className="max-w-4xl w-full mx-auto text-center fade-up">
<iconify-icon className="text-white/20 mb-8 mx-auto" icon="solar:quote-up-linear" width="40"></iconify-icon>
<blockquote className="text-2xl md:text-4xl font-medium tracking-tight leading-tight mb-8">
                "Alex has a rare ability to translate complex business requirements into elegant, high-performing design solutions. The best investment we made this year."
            </blockquote>
<cite className="not-italic flex flex-col items-center">
<span className="text-white font-semibold tracking-tight">Sarah Jenkins</span>
<span className="text-neutral-500 text-sm mt-1">CTO, Nebula Finance</span>
</cite>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-white/5 bg-[#080808]" id="contact">
<div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
<div className="fade-up">
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter mb-6">Let's work together.</h2>
<p className="text-xl text-neutral-400 font-light mb-12 max-w-md">
                    Currently accepting new projects for Q4 2024. Reach out for inquiries or just to say hello.
                </p>
<div className="flex flex-col gap-4">
<a className="text-lg flex items-center gap-3 hover:text-white text-neutral-300 transition-colors hover-trigger" href="mailto:hello@alexmorgan.design">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                        hello@alexmorgan.design
                    </a>
<a className="text-lg flex items-center gap-3 hover:text-white text-neutral-300 transition-colors hover-trigger" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
                        LinkedIn
                    </a>
<a className="text-lg flex items-center gap-3 hover:text-white text-neutral-300 transition-colors hover-trigger" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
                        Twitter / X
                    </a>
</div>
</div>
<div className="fade-up" style={{transitionDelay: '0.2s'}}>
<form className="space-y-8">
<div className="relative z-0 w-full group">
<input className="custom-input block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-neutral-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" id="name" name="name" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-lg text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="name">Your Name</label>
</div>
<div className="relative z-0 w-full group">
<input className="custom-input block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-neutral-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer" id="email" name="email" placeholder=" " required="" type="email"/>
<label className="peer-focus:font-medium absolute text-lg text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="email">Email Address</label>
</div>
<div className="relative z-0 w-full group">
<textarea className="custom-input block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-neutral-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer resize-none" id="message" name="message" placeholder=" " required="" rows="4"></textarea>
<label className="peer-focus:font-medium absolute text-lg text-neutral-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="message">Tell me about your project</label>
</div>
<button className="group relative px-8 py-4 bg-white text-black rounded-lg overflow-hidden w-full md:w-auto hover-trigger" type="submit">
<span className="relative z-10 font-semibold tracking-tight">Send Message</span>
<div className="absolute inset-0 bg-neutral-200 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
</button>
</form>
</div>
</div>
</section>

<footer className="py-8 px-6 md:px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-neutral-600 text-sm">© 2024 Alex Morgan. All Rights Reserved.</span>
<div className="flex gap-4">
<span className="text-neutral-600 text-sm">Local time: <span id="time">00:00</span></span>
</div>
</footer>


    </>
  );
}
