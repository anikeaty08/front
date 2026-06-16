import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        if (window.matchMedia("(pointer: fine)").matches) {
            document.addEventListener('mousemove', (e) => {
                requestAnimationFrame(() => {
                    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
                });
            });

            // Hover effects for cursor
            const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursor.classList.add('w-12', 'h-12', 'bg-[#22d3ee]/20');
                    cursor.children[0].classList.add('scale-50');
                });
                el.addEventListener('mouseleave', () => {
                    cursor.classList.remove('w-12', 'h-12', 'bg-[#22d3ee]/20');
                    cursor.children[0].classList.remove('scale-50');
                });
            });
        }

        // Typing Effect
        const phrases = [
            "Innovating Ideas.",
            "Empowering Technology.",
            "Building The Future."
        ];
        let currentPhraseIndex = 0;
        let isDeleting = false;
        let text = '';
        const typingSpeed = 100;
        const deletingSpeed = 50;
        const pauseTime = 2000;
        const typeWriterElement = document.getElementById('typewriter');

        function type() {
            const fullText = phrases[currentPhraseIndex];
            
            if (isDeleting) {
                text = fullText.substring(0, text.length - 1);
            } else {
                text = fullText.substring(0, text.length + 1);
            }

            typeWriterElement.textContent = text;

            let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

            if (!isDeleting && text === fullText) {
                typeSpeed = pauseTime;
                isDeleting = true;
            } else if (isDeleting && text === '') {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                typeSpeed = 500; // Pause before typing next word
            }

            setTimeout(type, typeSpeed);
        }
        
        // Start typing effect slightly delayed
        setTimeout(type, 1000);

        // Scroll Reveal Animation (Intersection Observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = entry.target.style.transform.replace(/translate[XY]\([-]?\d+px\)|scale\([\d.]+\)/, 'translate(0) scale(1)');
                    
                    // Trigger counter animation if it has counter children
                    const counters = entry.target.querySelectorAll('.counter');
                    if (counters.length > 0) {
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000;
                            const increment = target / (duration / 16); // 60fps
                            let current = 0;

                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                        });
                        // Prevent re-triggering counter
                        counter.classList.remove('counter'); 
                    }
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-anim').forEach((el) => {
            observer.observe(el);
        });

        // Navbar styling on scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('py-2');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-6 h-6 rounded-full border border-[#22d3ee]/50 pointer-events-none z-[100] transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out flex items-center justify-center backdrop-blur-sm bg-[#22d3ee]/10 hidden md:flex" id="cursor">
<div className="w-1.5 h-1.5 bg-[#22d3ee] rounded-full"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none opacity-20" style={{backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', backgroundSize: '4rem 4rem', maskImage: 'radial-gradient(circle at center, black, transparent 80%)', WebkitMaskImage: 'radial-gradient(circle at center, black, transparent 80%)'}}></div>

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#1e3a8a]/30 blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[50%] rounded-full bg-[#8b5cf6]/20 blur-[120px] pointer-events-none z-0"></div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/70 backdrop-blur-md border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 flex items-center justify-center">
<div className="absolute inset-0 bg-[#0ea5e9] rounded-full group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-1 border-2 border-white rounded-full opacity-30"></div>

<div className="absolute w-0.5 h-4 bg-white top-2 left-3 transform -rotate-45"></div>
<div className="absolute w-1.5 h-1.5 border-2 border-white rounded-full top-1 left-2"></div>

<div className="absolute w-0.5 h-4 bg-white bottom-2 right-3 transform -rotate-45"></div>
<div className="absolute w-1.5 h-1.5 border-2 border-white rounded-full bottom-1 right-2"></div>

<svg className="w-[40px] h-[40px] z-10 absolute top-0 right-0 bottom-0 left-0 drop-shadow-[0_0_5px_rgba(239,68,68,0.8)]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{color: 'rgb(239, 68, 68)', width: '40px', height: '40px'}} viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M 0 20 L 10 20 L 14 10 L 18 30 L 22 5 L 28 32 L 32 20 L 40 20" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="2" cy="20" fill="white" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
<circle cx="38" cy="20" fill="white" r="2" stroke="currentColor" strokeWidth="1.5"></circle>
</svg>
</div>
<div className="flex flex-col">
<span className="flex items-center text-2xl font-medium italic text-white tracking-tight">
<span className="text-[#1d4ed8]">π</span>-tech
                    </span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#audience">Audience</a>
<a className="text-sm font-normal text-slate-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="relative group hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[#22d3ee]/50 overflow-hidden" href="#contact">
<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#22d3ee] pointer-events-none group-hover:opacity-50 transition-opacity"></span>
<span className="relative flex items-center gap-2">Explore Lab <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i></span>
</a>
<button className="md:hidden text-white p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden z-10">
<div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">

<svg className="w-[800px] h-[800px] animate-[spin_60s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="0.2" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="40" stroke-dasharray="4 2"></circle>
<circle cx="50" cy="50" r="30" stroke-dasharray="1 4" strokeWidth="0.5"></circle>
<circle cx="50" cy="50" r="20" stroke-dasharray="10 2"></circle>
<path d="M 10 50 L 90 50 M 50 10 L 50 90" stroke-dasharray="2 4"></path>
<rect height="60" strokeWidth="0.1" transform="rotate(45 50 50)" width="60" x="20" y="20"></rect>
</svg>
</div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-20 reveal-anim" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-[pulse_2s_ease-in-out_infinite]"></span>
<span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Research &amp; Development Hub</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Innovating The Future <br className="hidden md:block"/> of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22d3ee] to-[#8b5cf6]">Technology</span>
</h1>
<div className="h-10 mb-8 flex justify-center items-center">
<p className="text-xl md:text-2xl font-light text-slate-400 tracking-tight" id="typewriter">Innovating Ideas</p><span className="w-0.5 h-6 ml-1 bg-[#22d3ee] animate-[pulse_1s_step-end_infinite]"></span>
</div>
<p className="text-lg md:text-xl font-light text-slate-500 max-w-2xl mx-auto mb-12">
                Research | Development | Innovation | Education
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#030712] text-sm font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]" href="#services">
                    Explore Services
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group" href="#contact">
                    Start Your Project
                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-xs font-light tracking-wide text-slate-500">Scroll to explore</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
</div>
</section>

<section className="py-32 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a0f1a]/50" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal-anim" style={{opacity: '0', transform: 'translateX(-30px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Pioneering Next-Gen Solutions</h2>
<p className="text-lg font-light text-slate-400 leading-relaxed mb-6">
                        Pi-Tech is a premier Research and Development based company strategically focused on creating and developing innovative ideas that push the boundaries of current technology.
                    </p>
<p className="text-lg font-light text-slate-400 leading-relaxed mb-8">
                        Our primary aim is to provide a robust platform for gaining profound knowledge of current and emerging technologies. We empower working professionals, college students, and school students to transition from theoretical concepts to practical, industry-ready implementations.
                    </p>
<div className="flex items-center gap-4 text-sm font-medium text-[#22d3ee]">
<i className="w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i> Empowering through innovation
                    </div>
</div>
<div className="grid grid-cols-2 gap-4 reveal-anim" style={{opacity: '0', transform: 'translateX(30px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'}}>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center items-start group hover:border-[#22d3ee]/30 transition-colors">
<i className="w-6 h-6 text-[#8b5cf6] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="cpu" strokeWidth="1.5"></i>
<div className="text-4xl font-medium tracking-tight text-white mb-1 counter" data-target="500">0</div>
<div className="text-sm font-light text-slate-500">Projects Delivered</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center items-start group hover:border-[#22d3ee]/30 transition-colors">
<i className="w-6 h-6 text-[#22d3ee] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="blocks" strokeWidth="1.5"></i>
<div className="text-4xl font-medium tracking-tight text-white mb-1 counter" data-target="50">0</div>
<div className="text-sm font-light text-slate-500">Technologies Covered</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center items-start group hover:border-[#22d3ee]/30 transition-colors">
<i className="w-6 h-6 text-[#10b981] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="users" strokeWidth="1.5"></i>
<div className="text-4xl font-medium tracking-tight text-white mb-1"><span className="counter" data-target="10">0</span>k+</div>
<div className="text-sm font-light text-slate-500">Students Guided</div>
</div>

<div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-center items-start group hover:border-[#22d3ee]/30 transition-colors">
<i className="w-6 h-6 text-[#f59e0b] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" data-lucide="lightbulb" strokeWidth="1.5"></i>
<div className="text-4xl font-medium tracking-tight text-white mb-1 counter" data-target="100">0</div>
<div className="text-sm font-light text-slate-500">Innovations</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-anim" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Core Research Areas</h2>
<p className="text-lg font-light text-slate-400 max-w-2xl mx-auto">Comprehensive development and prototype solutions designed for modern engineering challenges.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:border-[#22d3ee]/40 transition-all duration-500 hover:-translate-y-2 reveal-anim" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'}}>

<div className="absolute -top-24 -right-24 w-48 h-48 bg-[#22d3ee] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-[#22d3ee]/10 flex items-center justify-center mb-6 border border-[#22d3ee]/20 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-[#22d3ee]" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">IoT &amp; Electronics R&amp;D</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#22d3ee] transition-colors shrink-0" data-lucide="zap" strokeWidth="1.5"></i>
                            IoT &amp; Non-IoT Project Design
                        </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#22d3ee] transition-colors shrink-0" data-lucide="factory" strokeWidth="1.5"></i>
                            Commercial &amp; Non-Commercial
                        </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#22d3ee] transition-colors shrink-0" data-lucide="graduation-cap" strokeWidth="1.5"></i>
                            College &amp; School Minor/Major
                        </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#22d3ee] transition-colors shrink-0" data-lucide="flask-conical" strokeWidth="1.5"></i>
                            Science Project Prototypes
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:border-[#8b5cf6]/40 transition-all duration-500 hover:-translate-y-2 reveal-anim" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'}}>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-[#8b5cf6] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-[#8b5cf6]/10 flex items-center justify-center mb-6 border border-[#8b5cf6]/20 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-[#8b5cf6]" data-lucide="code-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">Software Development</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#8b5cf6] transition-colors shrink-0" data-lucide="smartphone" strokeWidth="1.5"></i>
                            Custom Application Builds
                        </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#8b5cf6] transition-colors shrink-0" data-lucide="database" strokeWidth="1.5"></i>
                            Research-Based Solutions
                        </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#8b5cf6] transition-colors shrink-0" data-lucide="bot" strokeWidth="1.5"></i>
                            Automation Systems
                        </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#8b5cf6] transition-colors shrink-0" data-lucide="server" strokeWidth="1.5"></i>
                            Scalable Architecture
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] overflow-hidden hover:border-[#10b981]/40 transition-all duration-500 hover:-translate-y-2 reveal-anim" style={{opacity: '0', transform: 'translateY(30px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'}}>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-[#10b981] rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-[#10b981]/10 flex items-center justify-center mb-6 border border-[#10b981]/20 group-hover:scale-110 transition-transform duration-500">
<i className="w-6 h-6 text-[#10b981]" data-lucide="layout-template" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-4">Website Development</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#10b981] transition-colors shrink-0" data-lucide="globe" strokeWidth="1.5"></i>
                            Modern Business Websites
                        </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#10b981] transition-colors shrink-0" data-lucide="book-open" strokeWidth="1.5"></i>
                            Educational Platforms
                        </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#10b981] transition-colors shrink-0" data-lucide="user-square-2" strokeWidth="1.5"></i>
                            Tech Portfolio Websites
                        </li>
<li className="flex items-start gap-3 text-lg font-light text-slate-400 group-hover:text-slate-300 transition-colors">
<i className="w-5 h-5 mt-0.5 text-slate-600 group-hover:text-[#10b981] transition-colors shrink-0" data-lucide="sparkles" strokeWidth="1.5"></i>
                            Interactive Web Experiences
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-y border-white/5 bg-[#0a0f1a]/30" id="audience">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-center text-white mb-16 reveal-anim" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>Empowering Innovators Across Levels</h2>
<div className="flex flex-wrap justify-center gap-6">

<div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm reveal-anim" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'}}>
<div className="w-10 h-10 rounded-full bg-[#22d3ee]/20 flex items-center justify-center"><i className="w-5 h-5 text-[#22d3ee]" data-lucide="briefcase" strokeWidth="1.5"></i></div>
<span className="text-lg font-normal text-slate-300">Working Professionals</span>
</div>
<div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm reveal-anim" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'}}>
<div className="w-10 h-10 rounded-full bg-[#8b5cf6]/20 flex items-center justify-center"><i className="w-5 h-5 text-[#8b5cf6]" data-lucide="graduation-cap" strokeWidth="1.5"></i></div>
<span className="text-lg font-normal text-slate-300">College Students</span>
</div>
<div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm reveal-anim" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'}}>
<div className="w-10 h-10 rounded-full bg-[#10b981]/20 flex items-center justify-center"><i className="w-5 h-5 text-[#10b981]" data-lucide="backpack" strokeWidth="1.5"></i></div>
<span className="text-lg font-normal text-slate-300">School Students</span>
</div>
<div className="flex items-center gap-4 px-6 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm reveal-anim" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'}}>
<div className="w-10 h-10 rounded-full bg-[#f59e0b]/20 flex items-center justify-center"><i className="w-5 h-5 text-[#f59e0b]" data-lucide="flask-conical" strokeWidth="1.5"></i></div>
<span className="text-lg font-normal text-slate-300">Researchers</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16 text-center reveal-anim" style={{opacity: '0', transform: 'translateY(20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>The Pi-Tech Advantage</h2>
<div className="relative border-l border-white/10 ml-6 md:ml-0 space-y-12 pb-8">
<div className="relative pl-8 md:pl-12 reveal-anim" style={{opacity: '0', transform: 'translateX(-20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#030712] border border-[#22d3ee] flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#22d3ee]"></div>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Research-Driven Approach</h3>
<p className="text-lg font-light text-slate-400">We don't just build; we research, test, and innovate to ensure the solutions are cutting-edge.</p>
</div>
<div className="relative pl-8 md:pl-12 reveal-anim" style={{opacity: '0', transform: 'translateX(-20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'}}>
<div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#030712] border border-[#8b5cf6] flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#8b5cf6]"></div>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Industry-Oriented Learning</h3>
<p className="text-lg font-light text-slate-400">Bridging the gap between academic theory and practical industry requirements.</p>
</div>
<div className="relative pl-8 md:pl-12 reveal-anim" style={{opacity: '0', transform: 'translateX(-20px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'}}>
<div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-[#030712] border border-[#10b981] flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#10b981]"></div>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Prototype to Production</h3>
<p className="text-lg font-light text-slate-400">Comprehensive support from raw idea formulation to tangible prototype development.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 px-6">
<div className="max-w-5xl mx-auto rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center reveal-anim" style={{opacity: '0', transform: 'scale(0.95)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a]/40 via-[#030712] to-[#8b5cf6]/20 z-0"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] z-0 opacity-50"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-8">
<i className="w-8 h-8 text-white" data-lucide="rocket" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Have an Idea? Let's Build It Together.</h2>
<p className="text-lg font-light text-slate-400 max-w-2xl mx-auto mb-10">Turn your visionary concepts into engineered reality with our dedicated R&amp;D team.</p>
<a className="px-8 py-4 rounded-full bg-[#22d3ee] text-[#030712] text-sm font-medium hover:bg-[#67e8f9] transition-colors shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] flex items-center gap-2" href="#contact">
                    Start Innovation
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-32 relative z-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal-anim" style={{opacity: '0', transform: 'translateX(-30px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Connect with the Lab</h2>
<p className="text-lg font-light text-slate-400 mb-12">Reach out to discuss your project requirements, academic needs, or innovative ideas.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
<i className="w-5 h-5 text-slate-300 group-hover:text-[#22d3ee] transition-colors" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-light text-slate-300">innovate@pi-tech.com</span>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
<i className="w-5 h-5 text-slate-300 group-hover:text-[#22d3ee] transition-colors" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-light text-slate-300">Tech Innovation Park, Block B</span>
</div>
</div>

<div className="mt-12 w-full h-48 rounded-2xl border border-white/10 bg-[#0a0f1a] overflow-hidden relative opacity-80 mix-blend-screen">
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(#22d3ee 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#22d3ee] rounded-full animate-ping"></div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
</div>
</div>

<div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md reveal-anim" style={{opacity: '0', transform: 'translateX(30px)', transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'}}>
<form className="space-y-8" onsubmit="event.preventDefault();">
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-white/20 pb-2 pt-6 text-white text-lg focus:outline-none focus:border-[#22d3ee] placeholder-transparent transition-colors" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#22d3ee]" htmlFor="name">Full Name</label>
</div>
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-white/20 pb-2 pt-6 text-white text-lg focus:outline-none focus:border-[#22d3ee] placeholder-transparent transition-colors" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#22d3ee]" htmlFor="email">Email Address</label>
</div>

<div className="relative group">
<select className="peer w-full bg-transparent border-b border-white/20 pb-2 pt-6 text-white text-lg focus:outline-none focus:border-[#22d3ee] appearance-none cursor-pointer" id="interest">
<option className="bg-[#030712] text-slate-500" disabled="" selected="" value="">Select Area of Interest</option>
<option className="bg-[#030712]" value="iot">IoT &amp; Electronics</option>
<option className="bg-[#030712]" value="software">Software Development</option>
<option className="bg-[#030712]" value="web">Website Development</option>
<option className="bg-[#030712]" value="other">Other Research</option>
</select>
<label className="absolute left-0 top-2 text-xs text-[#22d3ee]" htmlFor="interest">Area of Interest</label>
<i className="w-4 h-4 absolute right-0 top-8 text-slate-500 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="relative group">
<textarea className="peer w-full bg-transparent border-b border-white/20 pb-2 pt-6 text-white text-lg focus:outline-none focus:border-[#22d3ee] placeholder-transparent transition-colors resize-none" id="message" placeholder="Message" rows="3"></textarea>
<label className="absolute left-0 top-2 text-sm text-slate-500 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-6 peer-focus:top-2 peer-focus:text-xs peer-focus:text-[#22d3ee]" htmlFor="message">Project Details</label>
</div>
<button className="w-full py-4 rounded-xl bg-white text-[#030712] text-sm font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 group" type="submit">
<span>Submit Request</span>
<i className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" data-lucide="send" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-[#030712] pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight font-medium text-white flex items-center italic">
<span className="text-[#1d4ed8]">π</span>-tech
                </span>
</div>
<p className="text-sm font-light text-slate-500">© 2024 Pi-Tech Research &amp; Development. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="github" strokeWidth="1.5"></i>
</a>
</div>
</div>
</footer>

<button className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-tr from-[#22d3ee] to-[#3b82f6] shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center justify-center z-50 hover:scale-105 transition-transform">
<i className="w-6 h-6 text-white" data-lucide="bot" strokeWidth="1.5"></i>
<span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-[#030712] rounded-full"></span>
</button>


    </>
  );
}
