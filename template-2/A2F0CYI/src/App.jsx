import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}

    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('-translate-y-full');
        });

        // Close mobile menu when clicking links
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('-translate-y-full');
            });
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Progress bar and section highlighting
        function updateProgressAndHighlight() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            
            document.getElementById('progress-bar').style.width = progress + '%';

            // Highlight current section in side navigation
            const sections = document.querySelectorAll('section[id]');
            const sideNavLinks = document.querySelectorAll('.side-nav-link');
            
            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.offsetHeight;
                
                if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id');
                }
            });

            sideNavLinks.forEach(link => {
                const targetSection = link.getAttribute('data-section');
                const dot = link.querySelector('div');
                
                if (targetSection === currentSection) {
                    dot.classList.remove('bg-white/30');
                    dot.classList.add('bg-white/80');
                } else {
                    dot.classList.remove('bg-white/80');
                    dot.classList.add('bg-white/30');
                }
            });
        }

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0px)';
                }
            });
        }, observerOptions);

        // Observe all sections except hero and work (which are already visible)
        document.querySelectorAll('#services, #experience, #testimonials, #contact').forEach(section => {
            observer.observe(section);
        });

        // Event listeners
        window.addEventListener('scroll', updateProgressAndHighlight);
        window.addEventListener('load', updateProgressAndHighlight);

        // Initialize lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      <div className="aura-background-component top-0 w-full h-screen -z-10 absolute"><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<header className="bg-black/80 backdrop-blur-xl w-full fixed top-0 z-50 border-b border-white/10">
<nav className="max-w-7xl mx-auto px-6">
<div className="flex h-16 items-center justify-between">

<div className="flex items-center">
<a className="text-xl font-semibold tracking-tight" href="#">Alex Cole</a>
</div>

<div className="hidden md:flex gap-6 absolute left-1/2 -translate-x-1/2 text-sm items-center">
<a className="nav-link group relative inline-flex items-center hover:text-white whitespace-nowrap text-sm py-2 px-1 text-white/80 transition-colors duration-200" href="#work">
        Work
        <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="nav-link group relative inline-flex items-center hover:text-white whitespace-nowrap text-sm py-2 px-1 text-white/80 transition-colors duration-200" href="#about">
        About
        <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="nav-link group relative inline-flex items-center hover:text-white whitespace-nowrap text-sm py-2 px-1 text-white/80 transition-colors duration-200" href="#services">
        Services
        <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<a className="nav-link group relative inline-flex items-center hover:text-white whitespace-nowrap text-sm py-2 px-1 text-white/80 transition-colors duration-200" href="#contact">
        Contact
        <span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
</div>

<div className="flex gap-3 items-center">
<a className="group relative inline-flex items-center hover:text-white whitespace-nowrap text-sm text-white/80 py-2 px-2" href="/resume.pdf">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">Resume</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">Resume</span>
</span>
<span className="pointer-events-none absolute left-0 -bottom-0.5 h-[2px] w-full origin-left scale-x-0 bg-white/70 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
</a>
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-semibold text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-xl pt-[12px] pr-[20px] pb-[12px] pl-[20px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center">

<span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md rounded-xl font-geist">Let's Talk</span>

<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium font-geist opacity-0 rounded-xl blur-md">Let's Talk</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-xl"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-xl"></span>
</button>

<button className="md:hidden p-2" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<div className="md:hidden fixed inset-x-0 top-16 bg-black/95 backdrop-blur-xl border-b border-white/10 transform -translate-y-full transition-transform duration-300 ease-out" id="mobile-menu">
<nav className="px-6 py-6">
<div className="space-y-4">
<a className="mobile-nav-link block text-lg font-medium text-white/80 hover:text-white transition-colors" href="#work">Work</a>
<a className="mobile-nav-link block text-lg font-medium text-white/80 hover:text-white transition-colors" href="#about">About</a>
<a className="mobile-nav-link block text-lg font-medium text-white/80 hover:text-white transition-colors" href="#services">Services</a>
<a className="mobile-nav-link block text-lg font-medium text-white/80 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</nav>
</div>
</header>

<div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 transition-all duration-150 ease-out" id="progress-bar" style={{width: `84.7265%`}}></div>

<aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block">
<nav className="space-y-6">
<div className="space-y-4">
<a className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white" data-section="hero" href="#hero">
<div className="w-2 h-2 rounded-full transition-all duration-300 hover:bg-white/60 bg-white/30"></div>
<span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Home</span>
</a>
<a className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white" data-section="work" href="#work">
<div className="w-2 h-2 rounded-full transition-all duration-300 hover:bg-white/60 bg-white/30"></div>
<span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Work</span>
</a>
<a className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white" data-section="about" href="#about">
<div className="w-2 h-2 rounded-full transition-all duration-300 hover:bg-white/60 bg-white/30"></div>
<span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">About</span>
</a>
<a className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white" data-section="services" href="#services">
<div className="w-2 h-2 rounded-full transition-all duration-300 hover:bg-white/60 bg-white/30"></div>
<span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Services</span>
</a>
<a className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white" data-section="experience" href="#experience">
<div className="w-2 h-2 rounded-full transition-all duration-300 hover:bg-white/60 bg-white/80"></div>
<span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Experience</span>
</a>
<a className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white" data-section="testimonials" href="#testimonials">
<div className="w-2 h-2 rounded-full transition-all duration-300 hover:bg-white/60 bg-white/60 bg-white/30"></div>
<span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Testimonials</span>
</a>
<a className="side-nav-link group flex items-center gap-3 transition-all duration-300 hover:text-white" data-section="contact" href="#contact">
<div className="w-2 h-2 rounded-full transition-all duration-300 hover:bg-white/60 bg-white/30"></div>
<span className="text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">Contact</span>
</a>
</div>
<div className="w-px h-12 bg-white/20 ml-0.5"></div>
<div className="space-y-3">
<a className="block text-white/40 hover:text-white/80 transition-colors" href="https://github.com">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="block text-white/40 hover:text-white/80 transition-colors" href="https://linkedin.com">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="block text-white/40 hover:text-white/80 transition-colors" href="https://twitter.com">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="block text-white/40 hover:text-white/80 transition-colors" href="https://dribbble.com">
<svg className="lucide lucide-dribbble w-4 h-4" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
</div>
</nav>
</aside>

<main className="relative">
<section className="min-h-screen flex pt-16 items-center" id="hero">
<div className="max-w-7xl mx-auto px-6 w-full">
<div className="grid xl:grid-cols-12 gap-6 items-center">

<div className="hidden xl:block xl:col-span-3">
<div className="space-y-8">
<div className="">
<h3 className="text-xs font-medium text-white/60 uppercase tracking-wider mb-3">Specialties</h3>
<ul className="text-sm text-white/70 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-white/50 rounded-full"></div>
                                        Frontend Development
                                    </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-white/50 rounded-full"></div>
                                        UI/UX Design
                                    </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-white/50 rounded-full"></div>
                                        Creative Coding
                                    </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-white/50 rounded-full"></div>
                                        Web Animations
                                    </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-white/50 rounded-full"></div>
                                        Brand Identity
                                    </li>
</ul>
</div>
<div>
<h3 className="text-xs font-medium text-white/60 uppercase tracking-wider mb-3">Currently</h3>
<p className="text-sm text-white/70">Available for freelance projects & full-time opportunities</p>
<div className="flex items-center gap-2 mt-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs text-green-400">Open to work</span>
</div>
</div>
</div>
</div>

<div className="xl:col-span-9">
<div className="max-w-4xl">
<div className="mb-6">
<span className="inline-flex items-center gap-2 text-sm font-medium text-white/80 bg-white/10 ring-1 ring-white/10 rounded-full px-3 py-1">
<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    Available for new projects
                                </span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.9] font-medium tracking-tight mb-6">
                                Creative Developer<br />
<span className="text-neutral-50/70">& Digital Designer</span>
</h1>
<p className="text-lg leading-relaxed font-normal text-white/80 max-w-2xl mb-8">
                                I craft digital experiences that blend beautiful design with seamless functionality. 
                                Specializing in modern web technologies, interactive animations, and user-centered design 
                                that makes brands memorable and products delightful to use.
                            </p>

<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="group relative inline-flex items-center justify-center hover:scale-95 transition-transform duration-300 ease-out text-sm font-medium text-black bg-white ring-black/10 ring-1 rounded-lg py-3 px-6" href="#work">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">View My Work</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">View My Work</span>
</span>
<svg className="lucide lucide-arrow-down w-4 h-4 ml-2" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-semibold text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-xl pt-[12px] pr-[20px] pb-[12px] pl-[20px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center">

<span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md rounded-xl font-geist">About Me</span>

<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium font-geist opacity-0 rounded-xl blur-md">About Me</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-xl"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-xl"></span>
</button>
<a className="group relative inline-flex items-center justify-center gap-2 hover:bg-white/5 text-sm font-medium text-white/80 hover:text-white transition-colors py-3 px-6" href="mailto:hello@alexchen.dev">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<div className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">hello@alexchen.dev</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">hello@alexchen.dev</span>
</div>
</a>
</div>

<div className="grid grid-cols-3 gap-8 max-w-md">
<div className="">
<p className="text-3xl font-semibold tracking-tight text-white mb-1">50+</p>
<p className="text-sm text-white/60">Projects Completed</p>
</div>
<div className="">
<p className="text-3xl font-semibold tracking-tight text-white mb-1">5+</p>
<p className="text-sm text-white/60">Years Experience</p>
</div>
<div className="">
<p className="text-3xl font-semibold tracking-tight text-white mb-1">25+</p>
<p className="text-sm text-white/60">Happy Clients</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-white/10 border-t pt-24 pb-24" id="work" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.6s ease-out, transform 0.6s ease-out`}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="sm:text-4xl md:text-5xl leading-[1.05] text-3xl font-medium tracking-tight mb-4">
                        Featured Work
                    </h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto">
                        A selection of recent projects showcasing my expertise in design and development
                    </p>
</div>
<div className="grid lg:grid-cols-2 gap-8 mb-12">

<article className="group overflow-hidden hover:bg-white/[0.03] transition-all duration-500 ring-white/10 ring-1 rounded-xl">
<div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute inset-0 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/db127e05-8c5a-4002-9a45-18c89436e905_1600w.jpg)] bg-cover items-center justify-center">
<button className="flex group-hover:scale-110 transition-transform text-black bg-white/20 w-16 h-16 border-0 ring-black/5 ring-0 rounded-full backdrop-blur-sm items-center justify-center">
<svg className="lucide lucide-play ml-1 w-[24px] h-[24px] text-neutral-50" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`, width: `24px`, height: `24px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="absolute top-4 right-4">
<span className="text-xs bg-black/50 text-white px-2 py-1 rounded backdrop-blur-sm">Live Project</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-medium text-white/90">E-commerce Platform</h3>
<a className="text-white/60 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<p className="text-sm text-white/70 mb-4 leading-relaxed">Modern React-based shopping experience with custom animations, seamless checkout flow, and advanced filtering capabilities. Built for scalability and performance.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">React</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">TypeScript</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">GSAP</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Node.js</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Stripe</span>
</div>
<div className="flex items-center gap-4 text-xs text-white/60">
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>2024</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>TechCorp Inc.</span>
</div>
</div>
</div>
</article>

<article className="group overflow-hidden hover:bg-white/[0.03] transition-all duration-500 ring-white/10 ring-1 rounded-xl">
<div className="aspect-video relative overflow-hidden bg-gradient-to-br from-orange-500 via-red-500 to-pink-600">
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute inset-0 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/422957f1-8df2-4c14-b16b-6a5798e09b5b_1600w.jpg)] bg-cover items-center justify-center">
<button className="flex group-hover:scale-110 transition-transform text-black bg-white/20 w-16 h-16 border-0 ring-black/5 ring-0 rounded-full backdrop-blur-sm items-center justify-center">
<svg className="lucide lucide-play ml-1 w-[24px] h-[24px] text-neutral-50" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`, width: `24px`, height: `24px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="absolute top-4 right-4">
<span className="text-xs bg-black/50 text-white px-2 py-1 rounded backdrop-blur-sm">Case Study</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-medium text-white/90">FinTech Brand Identity</h3>
<a className="text-white/60 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<p className="text-sm text-white/70 mb-4 leading-relaxed">Complete visual identity and digital presence for a fintech startup, including logo design, brand guidelines, and responsive web application with complex data visualization.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Figma</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Next.js</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Framer Motion</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">D3.js</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Branding</span>
</div>
<div className="flex items-center gap-4 text-xs text-white/60">
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>2024</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>PayFlow</span>
</div>
</div>
</div>
</article>

<article className="group overflow-hidden hover:bg-white/[0.03] transition-all duration-500 ring-white/10 ring-1 rounded-xl">
<div className="aspect-video relative overflow-hidden bg-gradient-to-br from-green-500 via-teal-500 to-blue-600">
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute inset-0 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9d2e8bbf-cec8-4dfd-a76d-6fc5e8c50d64_1600w.jpg)] bg-cover items-center justify-center">
<button className="flex group-hover:scale-110 transition-transform text-black bg-white/20 w-16 h-16 border-0 ring-black/5 ring-0 rounded-full backdrop-blur-sm items-center justify-center">
<svg className="lucide lucide-play ml-1 w-[24px] h-[24px] text-neutral-50" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`, width: `24px`, height: `24px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="absolute top-4 right-4">
<span className="text-xs bg-black/50 text-white px-2 py-1 rounded backdrop-blur-sm">Award Winner</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-medium text-white/90">Creative Portfolio Site</h3>
<a className="text-white/60 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<p className="text-sm text-white/70 mb-4 leading-relaxed">Interactive portfolio website featuring WebGL animations, smooth scroll effects, and creative transitions. Optimized for performance while maintaining visual impact.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Three.js</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">WebGL</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">GSAP</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Vanilla JS</span>
</div>
<div className="flex items-center gap-4 text-xs text-white/60">
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span>2023</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>Creative Agency</span>
</div>
</div>
</div>
</article>

<article className="group overflow-hidden hover:bg-white/[0.03] transition-all duration-500 ring-white/10 ring-1 rounded-xl">
<div className="aspect-video relative overflow-hidden bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500">
<div className="absolute inset-0 bg-black/20"></div>
<div className="absolute inset-0 flex bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7ee361ca-4978-4130-bab8-b605105c04b4_1600w.jpg)] bg-cover items-center justify-center">
<button className="flex group-hover:scale-110 transition-transform text-black bg-white/20 w-16 h-16 border-0 ring-black/5 ring-0 rounded-full backdrop-blur-sm items-center justify-center">
<svg className="lucide lucide-play ml-1 w-[24px] h-[24px] text-neutral-50" data-icon-replaced="true" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`, width: `24px`, height: `24px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="absolute top-4 right-4">
<span className="text-xs bg-black/50 text-white px-2 py-1 rounded backdrop-blur-sm">Open Source</span>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-medium text-white/90">Design System & UI Kit</h3>
<a className="text-white/60 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
</a>
</div>
<p className="text-sm text-white/70 mb-4 leading-relaxed">Comprehensive design system with 50+ components, design tokens, and documentation. Built for consistency and scalability across multiple products.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Figma</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Storybook</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">React</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Design Tokens</span>
</div>
<div className="flex items-center gap-4 text-xs text-white/60">
<div className="flex items-center gap-1">
<svg className="lucide lucide-calendar w-3 h-3" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="">2023</span>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-user w-3 h-3" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span>Open Source</span>
</div>
</div>
</div>
</article>
</div>
<div className="text-center">
<a className="group relative inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors" href="#">
<span className="relative overflow-hidden">
<span className="block transition-transform duration-300 ease-out group-hover:-translate-y-full">View All Projects</span>
<span className="block absolute inset-0 transition-transform duration-300 ease-out group-hover:translate-y-0 translate-y-full">View All Projects</span>
</span>
<svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="relative border-white/10 border-t pt-24 pb-24" id="about" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.6s ease-out, transform 0.6s ease-out`}}>
<div className="bg-gradient-to-r from-[#ffffff]/10 to-[#ffffff]/0 max-w-5xl rounded-3xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4">
<div className="grid lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5 bg-gradient-to-b from-[#ffffff]/10 to-[#ffffff]/0 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="mb-6">
<div className="w-full h-64 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-xl overflow-hidden ring-1 ring-white/10 mb-4">
<img alt="Alex Chen Portrait" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f0f33052-7e87-44a7-9c52-a02692aceec9_800w.jpg" />
</div>

</div>
<h2 className="text-2xl sm:text-3xl md:text-4xl leading-[1.05] font-medium tracking-tight mb-4">
                    About Me
                </h2>
<div className="space-y-3 text-sm leading-relaxed text-white/80">
<p className="">
                        I'm a passionate creative developer with 5+ years of experience crafting digital experiences that seamlessly blend aesthetics with functionality. My journey began in graphic design, but I quickly fell in love with the endless possibilities of code.
                    </p>
<p className="">
                        Today, I specialize in building modern web applications, designing intuitive user interfaces, and creating interactive experiences that captivate and engage users. I believe great design should be accessible, performant, and meaningful.
                    </p>
<p className="">
                        When I'm not coding or designing, you'll find me exploring new creative techniques, contributing to open-source projects, or sharing knowledge with the design and development community.
                    </p>
</div>
</div>
<div className="lg:col-span-7">
<div className="grid md:grid-cols-2 gap-4">

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-lg p-4">
<h3 className="text-base font-medium mb-3 flex items-center gap-2">
<svg className="lucide lucide-code-2 w-4 h-4 text-white/70" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                            Technical Skills
                        </h3>
<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-xs text-white/80">React & Next.js</span>
<span className="text-xs text-white/60">Expert</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/80">TypeScript</span>
<span className="text-xs text-white/60">Advanced</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/80">UI/UX Design</span>
<span className="text-xs text-white/60">Expert</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/80">GSAP & Animations</span>
<span className="text-xs text-white/60">Advanced</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/80">Three.js & WebGL</span>
<span className="text-xs text-white/60">Intermediate</span>
</div>
</div>
</div>

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-lg p-4">
<h3 className="text-base font-medium mb-3 flex items-center gap-2">
<i className="w-4 h-4 text-white/70" data-lucide="tool" style={{strokeWidth: `1.5px`}}></i>
                            Tools & Software
                        </h3>
<div className="grid grid-cols-2 gap-1">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">Figma</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">VS Code</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">Adobe CC</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">Blender</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">Git</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">Docker</span>
</div>
</div>

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-lg p-4">
<h3 className="text-base font-medium mb-3 flex items-center gap-2">
<svg className="lucide lucide-graduation-cap w-4 h-4 text-white/70" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
                            Education
                        </h3>
<div className="space-y-2">
<div className="">
<p className="text-xs font-medium text-white/90">Computer Science, BS</p>
<p className="text-xs text-white/60">Stanford University • 2019</p>
</div>
<div className="">
<p className="text-xs font-medium text-white/90">UX Design Certificate</p>
<p className="text-xs text-white/60">Google Career Certificates • 2020</p>
</div>
</div>
</div>

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-lg p-4">
<h3 className="text-base font-medium mb-3 flex items-center gap-2">
<svg className="lucide lucide-heart w-4 h-4 text-white/70" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
                            Interests
                        </h3>
<div className="flex flex-wrap gap-1">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Photography</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Hiking</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Music</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Gaming</span>
</div>
</div>
</div><div className="grid md:grid-cols-2 gap-4 py-3">

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-lg p-4">
<h3 className="text-base font-medium mb-3 flex items-center gap-2">
<svg className="lucide lucide-star w-4 h-4 text-white/70" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
            Core Expertise
        </h3>
<div className="space-y-2">
<div className="flex justify-between items-center">
<span className="text-xs text-white/80">JavaScript & Vue.js</span>
<span className="text-xs text-white/60">Expert</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/80">Python & Django</span>
<span className="text-xs text-white/60">Expert</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/80">Brand Strategy</span>
<span className="text-xs text-white/60">Expert</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/80">Motion Graphics</span>
<span className="text-xs text-white/60">Advanced</span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-white/80">Mobile Design</span>
<span className="text-xs text-white/60">Advanced</span>
</div>
</div>
</div>

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-lg p-4">
<h3 className="text-base font-medium mb-3 flex items-center gap-2">
<svg className="lucide lucide-layers w-4 h-4 text-white/70" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
            Tech Stack
        </h3>
<div className="grid grid-cols-2 gap-1">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">Vue.js</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">Node.js</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">Python</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">MongoDB</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">AWS</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded text-center">GraphQL</span>
</div>
</div>

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-lg p-4">
<h3 className="text-base font-medium mb-3 flex items-center gap-2">
<svg className="lucide lucide-award w-4 h-4 text-white/70" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
            Certifications
        </h3>
<div className="space-y-2">
<div className="">
<p className="text-xs font-medium text-white/90">AWS Certified Solutions Architect</p>
<p className="text-xs text-white/60">Amazon Web Services • 2023</p>
</div>
<div className="">
<p className="text-xs font-medium text-white/90">Certified Scrum Master</p>
<p className="text-xs text-white/60">Scrum Alliance • 2022</p>
</div>
</div>
</div>

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-lg p-4">
<h3 className="text-base font-medium mb-3 flex items-center gap-2">
<svg className="lucide lucide-trophy w-4 h-4 text-white/70" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
            Recognition
        </h3>
<div className="flex flex-wrap gap-1">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Awwwards Winner</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">CSS Awards</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Dev Speaker</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Tech Mentor</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 border-t border-white/10" id="services" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.6s ease-out, transform 0.6s ease-out`}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight mb-4">
                        What I Do
                    </h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto">
                        I offer a comprehensive range of services to help bring your digital vision to life
                    </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex bg-neutral-50/5 w-12 h-12 border-neutral-50/20 border rounded-lg mb-4 items-center justify-center">
<svg className="lucide lucide-code-2 w-6 h-6 text-white" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3">Frontend Development</h3>
<p className="text-sm text-white/70 mb-4 leading-relaxed">Building responsive, performant web applications with modern technologies like React, Next.js, and TypeScript. Focus on clean code and optimal user experience.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">React</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Next.js</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">TypeScript</span>
</div>
</article>
<article className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex bg-neutral-50/5 w-12 h-12 border-neutral-50/20 border rounded-lg mb-4 items-center justify-center">
<svg className="lucide lucide-palette w-6 h-6 text-white" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-lg font-medium mb-3">UI/UX Design</h3>
<p className="text-sm text-white/70 mb-4 leading-relaxed">Creating intuitive user interfaces and seamless user experiences through research, prototyping, and testing. Design systems and brand consistency are key focuses.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Figma</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Prototyping</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">User Testing</span>
</div>
</article>
<article className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex bg-neutral-50/5 w-12 h-12 border-neutral-50/20 border rounded-lg mb-4 items-center justify-center">
<svg className="lucide lucide-zap w-6 h-6 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3">Creative Coding</h3>
<p className="text-sm text-white/70 mb-4 leading-relaxed">Crafting interactive experiences and animations that bring designs to life using GSAP, Three.js, and Canvas. Making the web more engaging and memorable.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">GSAP</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Three.js</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">WebGL</span>
</div>
</article>
<article className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex bg-neutral-50/5 w-12 h-12 border-neutral-50/20 border rounded-lg mb-4 items-center justify-center">
<svg className="lucide lucide-smartphone w-6 h-6 text-white" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3">Mobile Development</h3>
<p className="text-sm text-white/70 mb-4 leading-relaxed">Building cross-platform mobile applications with React Native and Progressive Web Apps. Ensuring consistent experience across all devices and platforms.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">React Native</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">PWA</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Expo</span>
</div>
</article>
<article className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex bg-neutral-50/5 w-12 h-12 border-neutral-50/20 border rounded-lg mb-4 items-center justify-center">
<svg className="lucide lucide-layers w-6 h-6 text-white" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg font-medium mb-3">Brand Identity</h3>
<p className="text-sm text-white/70 mb-4 leading-relaxed">Developing comprehensive brand identities including logo design, visual guidelines, and digital asset creation. Helping brands tell their story visually.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Logo Design</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Brand Guidelines</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Visual Identity</span>
</div>
</article>
<article className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6 hover:bg-white/[0.05] transition-colors">
<div className="flex bg-neutral-50/5 w-12 h-12 border-neutral-50/20 border rounded-lg mb-4 items-center justify-center">
<svg className="lucide lucide-users w-6 h-6 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-medium mb-3">Consulting & Training</h3>
<p className="text-sm text-white/70 mb-4 leading-relaxed">Providing strategic guidance on design systems, frontend architecture, and team processes. Training teams on modern development practices and design thinking.</p>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Strategy</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Workshops</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Mentoring</span>
</div>
</article>
</div>
</div>
</section>

<section className="relative py-24 border-t border-white/10" id="experience" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.6s ease-out, transform 0.6s ease-out`}}>
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight mb-4">
                        Experience
                    </h2>
<p className="text-lg text-white/70">
                        My professional journey and key milestones
                    </p>
</div>
<div className="space-y-8">

<div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-px before:h-full before:bg-white/20">
<div className="absolute -left-1 top-0 w-2 h-2 bg-white rounded-full"></div>
<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
<h3 className="text-lg font-medium text-white/90">Senior Frontend Developer</h3>
<span className="text-sm text-white/60">2022 - Present</span>
</div>
<p className="text-sm text-white/70 font-medium mb-2">TechCorp Inc. • San Francisco, CA</p>
<p className="text-sm text-white/70 leading-relaxed mb-4">
                                Leading frontend development for multiple high-traffic web applications. Architected and implemented design system used across 15+ products. Mentored junior developers and established best practices for React development.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">React</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">TypeScript</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Next.js</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Leadership</span>
</div>
</div>
</div>

<div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:w-px before:h-full before:bg-white/20">
<div className="absolute -left-1 top-0 w-2 h-2 bg-white/60 rounded-full"></div>
<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
<h3 className="text-lg font-medium text-white/90">Full-Stack Developer</h3>
<span className="text-sm text-white/60">2020 - 2022</span>
</div>
<p className="text-sm text-white/70 font-medium mb-2">StartupXYZ • Remote</p>
<p className="text-sm text-white/70 leading-relaxed mb-4">
                                Built and maintained full-stack applications from concept to production. Collaborated closely with designers to implement pixel-perfect UIs. Optimized application performance resulting in 40% faster load times.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">React</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Node.js</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">PostgreSQL</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">AWS</span>
</div>
</div>
</div>

<div className="relative pl-8">
<div className="absolute -left-1 top-0 w-2 h-2 bg-white/40 rounded-full"></div>
<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
<h3 className="text-lg font-medium text-white/90">UI/UX Designer & Developer</h3>
<span className="text-sm text-white/60">2019 - 2020</span>
</div>
<p className="text-sm text-white/70 font-medium mb-2">Design Studio ABC • New York, NY</p>
<p className="text-sm text-white/70 leading-relaxed mb-4">
                                Designed and developed websites for various clients ranging from small businesses to Fortune 500 companies. Specialized in creating responsive designs and implementing complex animations.
                            </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">Figma</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">JavaScript</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">GSAP</span>
<span className="text-xs bg-white/10 ring-1 ring-white/10 text-white/80 px-2 py-1 rounded">WordPress</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-white/10 border-t pt-24 pb-24" id="testimonials" style={{opacity: `1`, transform: `translateY(0px)`, transition: `opacity 0.6s ease-out, transform 0.6s ease-out`}}>
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight mb-4">
                        What Clients Say
                    </h2>
<p className="text-lg text-white/70">
                        Testimonials from some amazing people I've had the pleasure to work with
                    </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-white/80 mb-4 leading-relaxed">"Alex transformed our digital presence completely. His design sense and technical expertise are unmatched. The website he created exceeded all our expectations."</p>
<div className="flex items-center gap-3">
<div className="flex w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a31dbf91-204f-4185-a78a-a8bd2e46454a_320w.jpg)] bg-cover rounded-full items-center justify-center">
</div>
<div className="">
<p className="text-sm font-medium text-white/90">Sarah Mitchell</p>
<p className="text-xs text-white/60">CEO, TechStartup</p>
</div>
</div>
</div>

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-white/80 mb-4 leading-relaxed">"Alex transformed our digital presence completely. His design sense and technical expertise are unmatched. The website he created exceeded all our expectations."</p>
<div className="flex items-center gap-3">
<div className="flex w-10 h-10 bg-cover rounded-full items-center justify-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5533c972-d56c-4275-9cf7-d2442845b2cb_320w.jpg)] bg-center">
</div>
<div className="">
<p className="text-sm font-medium text-white/90">Michael Johnson</p>
<p className="text-xs text-white/60">Creative Director, Design Co</p>
</div>
</div>
</div>

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-yellow-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-white/80 mb-4 leading-relaxed">"Working with Alex was a game-changer for our startup. His attention to detail and ability to translate complex ideas into beautiful, functional designs is remarkable."</p>
<div className="flex items-center gap-3">
<div className="flex w-10 h-10 bg-cover rounded-full items-center justify-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/fc856f12-4738-4299-91f7-4f7be1502a47_320w.jpg)] bg-center">
</div>
<div className="">
<p className="text-sm font-medium text-white/90">Emily Rodriguez</p>
<p className="text-xs text-white/60">Founder, Innovation Labs</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 border-t border-white/10" id="contact" style={{opacity: `0`, transform: `translateY(30px)`, transition: `opacity 0.6s ease-out, transform 0.6s ease-out`}}>
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] font-medium tracking-tight mb-4">
                        Let's Work Together
                    </h2>
<p className="text-lg text-white/70 max-w-2xl mx-auto">
                        Ready to bring your vision to life? Get in touch and let's create something amazing together.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="space-y-8">
<div>
<h3 className="text-lg font-medium mb-6">Get In Touch</h3>
<div className="space-y-4">
<a className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors" href="mailto:hello@alexchen.dev">
<div className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 rounded-lg items-center justify-center group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<p className="text-sm font-medium">Email</p>
<p className="text-sm text-white/60">hello@alexchen.dev</p>
</div>
</a>
<a className="group flex items-center gap-3 text-white/80 hover:text-white transition-colors" href="tel:+1234567890">
<div className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 rounded-lg items-center justify-center group-hover:bg-white/10 transition-colors">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<p className="text-sm font-medium">Phone</p>
<p className="text-sm text-white/60">+1 (555) 123-4567</p>
</div>
</a>
<div className="flex items-center gap-3 text-white/80">
<div className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 rounded-lg items-center justify-center">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<p className="text-sm font-medium">Location</p>
<p className="text-sm text-white/60">San Francisco, CA</p>
</div>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-medium mb-6">Follow Me</h3>
<div className="flex gap-3">
<a className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 rounded-lg items-center justify-center transition-colors" href="#">
<svg className="lucide lucide-github w-4 h-4" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 rounded-lg items-center justify-center transition-colors" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 rounded-lg items-center justify-center transition-colors" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="flex w-10 h-10 bg-white/5 ring-1 ring-white/10 hover:bg-white/10 rounded-lg items-center justify-center transition-colors" href="#">
<svg className="lucide lucide-dribbble w-4 h-4" data-lucide="dribbble" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: `1.5px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path><path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path><path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path></svg>
</a>
</div>
</div>
</div>

<div className="bg-white/[0.03] ring-1 ring-white/10 rounded-xl p-6">
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-white/80 mb-2" htmlFor="name">Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" id="name" name="name" placeholder="Your name" type="text" />
</div>
<div>
<label className="block text-sm font-medium text-white/80 mb-2" htmlFor="email">Email</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" id="email" name="email" placeholder="your@email.com" type="email" />
</div>
</div>
<div>
<label className="block text-sm font-medium text-white/80 mb-2" htmlFor="subject">Subject</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors" id="subject" name="subject" placeholder="Project inquiry" type="text" />
</div>
<div>
<label className="block text-sm font-medium text-white/80 mb-2" htmlFor="message">Message</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors resize-none" id="message" name="message" placeholder="Tell me about your project..." rows="5"></textarea>
</div>
<button className="group relative inline-flex min-w-full cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:text-white overflow-hidden font-semibold text-white/70 tracking-tight bg-white/5 border-white/10 border rounded-xl pt-[12px] pr-[20px] pb-[12px] pl-[20px] shadow-[0_2.8px_2.2px_rgba(0,0,0,0.3),_0_6.7px_5.3px_rgba(0,0,0,0.35),_0_12.5px_10px_rgba(0,0,0,0.4)] items-center justify-center" type="submit">

<span className="relative z-10 font-medium transition-all duration-500 ease-out group-hover:transform group-hover:translate-y-8 group-hover:opacity-0 group-hover:blur-md rounded-xl font-geist">Send Message</span>

<span className="absolute inset-0 z-10 flex items-center justify-center transition-all duration-300 ease-in-out transform -translate-y-8 group-hover:translate-y-0 group-hover:opacity-100 group-hover:blur-none font-medium font-geist opacity-0 rounded-xl blur-md">Send Message</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px] rounded-xl"></span>

<span aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-[100%] group-hover:opacity-60 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] pointer-events-none bg-gradient-to-t from-white/10 via-white/5 to-transparent rounded-xl"></span>
</button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="relative py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold">Alex Cole</span>
<span className="text-white/60">© 2024</span>
</div>
<div className="flex items-center gap-6 text-sm text-white/60">
<a className="hover:text-white transition-colors" href="/privacy">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="/terms">Terms of Service</a>
<a className="hover:text-white transition-colors" href="/cookies">Cookie Policy</a>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10 text-center">
<p className="text-sm text-white/50">
                    Built with passion using modern web technologies. 
                    <span className="text-white/70">Made with ❤️ in San Francisco</span>
</p>
</div>
</div>
</footer>



    </>
  );
}
