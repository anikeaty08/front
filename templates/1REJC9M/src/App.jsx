import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all animation elements
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .fade-in');
  animatedElements.forEach(el => observer.observe(el));
});

// Section tracking and navigation
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const sectionNumber = document.getElementById('section-number');

function updateActiveSection() {
  const scrollPosition = window.pageYOffset + window.innerHeight / 2;
  
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      // Update navigation
      navLinks.forEach(link => {
        link.classList.remove('border-white', 'opacity-100');
        link.classList.add('border-transparent', 'opacity-70');
      });
      
      const activeLink = document.querySelector(`[data-section="${section.id}"]`);
      if (activeLink) {
        activeLink.classList.remove('border-transparent', 'opacity-70');
        activeLink.classList.add('border-white', 'opacity-100');
      }
      
      // Update section number
      if (sectionNumber) {
        sectionNumber.textContent = String(index + 1).padStart(2, '0');
      }
    }
  });
}

// Hero background fade
function handleHeroBackground() {
  const scrolled = window.pageYOffset;
  const heroHeight = window.innerHeight;
  const heroBg = document.getElementById('hero-bg');
  
  if (scrolled > heroHeight * 0.8) {
    heroBg.style.opacity = '0.3';
  } else {
    heroBg.style.opacity = '1';
  }
}

// Main scroll handler
function handleScroll() {
  updateActiveSection();
  handleHeroBackground();
}

// Smooth scroll for navigation links
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// See My Work button click handler
const seeMyWorkBtn = document.querySelector('button[type="button"]');
if (seeMyWorkBtn) {
  seeMyWorkBtn.addEventListener('click', () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}

// Initialize
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', () => {
  updateActiveSection();
  handleHeroBackground();
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-center -z-10 transition-opacity duration-700 bg-cover" id="hero-bg" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cb157054-620a-4023-8af4-73869ab9ec33_3840w.jpg")', opacity: '1'}}></div>

<nav className="fixed top-0 w-full z-50 sm:px-8 lg:px-12 pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm">
<span className="text-xl font-medium tracking-tight font-playfair">Jessica Chen</span>
</div>
<button className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-medium font-geist">Contact</span>
</button>
</div>
</nav>

<aside className="fixed left-6 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-40 hidden md:block">
<nav className="space-y-3 text-sm leading-6">
<a className="nav-link block hover:opacity-80 transition-all duration-300 font-medium font-geist border-l-2 hover:border-white/30 pl-4 -ml-4 border-white opacity-100" data-section="home" href="#home">Home</a>
<a className="nav-link block hover:opacity-80 transition-all duration-300 font-medium font-geist border-l-2 hover:border-white/30 pl-4 -ml-4 border-transparent opacity-70" data-section="projects" href="#projects">Projects</a>
<a className="nav-link block hover:opacity-80 transition-all duration-300 font-medium font-geist border-l-2 hover:border-white/30 pl-4 -ml-4 border-transparent opacity-70" data-section="process" href="#process">Process</a>
<a className="nav-link block hover:opacity-80 transition-all duration-300 font-medium font-geist border-l-2 hover:border-white/30 pl-4 -ml-4 border-transparent opacity-70" data-section="about" href="#about">About</a>
<a className="nav-link block hover:opacity-80 transition-all duration-300 font-medium font-geist border-l-2 hover:border-white/30 pl-4 -ml-4 border-transparent opacity-70" data-section="contact" href="#contact">Contact</a>
</nav>
<div className="h-px w-12 bg-neutral-400/60 mt-16"></div>
<button className="group flex gap-2 hover:opacity-70 transition-opacity text-sm text-neutral-300 font-geist items-center mt-8">
<span className="">See My Work</span>
<div className="transition-transform duration-300 group-hover:translate-x-0.5">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-big-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(212, 212, 212)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M15 6v6h4l-7 7-7-7h4V6h6z"></path></svg>
</div>
</button>
</aside>

<aside className="fixed right-6 sm:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-40 hidden md:block">
<div className="flex items-center justify-end mb-8">
<div className="mr-3 h-px w-10 bg-neutral-400/60"></div>
<div className="text-sm font-medium font-geist" id="section-number">01</div>
</div>

<div className="flex flex-col items-end gap-4">
<a className="p-2 rounded-full hover:bg-white/10 transition-colors" href="#">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="hover:bg-white/10 transition-colors rounded-full pt-2 pr-2 pb-2 pl-2" href="#">
<svg className="" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="p-2 rounded-full hover:bg-white/10 transition-colors" href="#">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</aside>
<main className="relative">

<section className="section min-h-screen flex sm:px-8 lg:px-12 pr-6 pl-6 items-center justify-center" id="home">

<div className="pointer-events-none absolute inset-0">
<span className="absolute -left-20 top-10 h-px w-[140%] rotate-[20deg] bg-neutral-600/20"></span>
<span className="absolute -right-24 top-1/3 h-px w-[150%] -rotate-[18deg] bg-neutral-600/20"></span>
<span className="absolute -left-10 bottom-12 h-px w-[130%] rotate-[10deg] bg-neutral-600/15"></span>
</div>
<div className="w-full max-w-7xl mx-auto">
<div className="grid grid-cols-12 gap-6">
<div className="col-span-12 md:col-span-10 md:col-start-2 flex flex-col justify-center">
<div className="space-y-8">
<div className="fade-in-up flex items-start gap-5 md:gap-6">
<h1 className="leading-none text-[44px] sm:text-[56px] md:text-[74px] lg:text-[88px] xl:text-[110px] font-light tracking-tighter font-playfair">Jessica Chen</h1>
</div>
<div className="fade-in-up stagger-delay-1 flex gap-5 md:gap-6 items-center">
<h2 className="leading-none text-[44px] sm:text-[56px] md:text-[74px] lg:text-[88px] xl:text-[110px] font-light tracking-tighter font-playfair">Product Designer</h2>
</div>
<p className="fade-in-up stagger-delay-2 max-w-sm md:text-base leading-relaxed text-lg font-medium text-neutral-50/90 font-geist mt-4">
              I craft intuitive digital experiences that solve real problems through thoughtful design and user-centered thinking.
            </p>
<div className="fade-in-up stagger-delay-3">
<button className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))'}} type="button">
<span className="flex items-center justify-center gap-2 text-sm leading-none min-w-[140px] w-full h-full transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 rounded-lg pt-3 pr-5 pb-3 pl-5">
<span className="">View Work</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="px-6 sm:px-8 lg:px-12 py-32">
<div className="fade-in-up max-w-4xl mx-auto text-center">
<p className="text-2xl md:text-3xl font-light font-playfair text-neutral-300 leading-relaxed">
        "Good design is obvious. Great design is transparent."
      </p>
</div>
</div>

<section className="section min-h-screen px-6 sm:px-8 lg:px-12 py-20" id="projects">
<div className="w-full max-w-7xl mx-auto">
<div className="grid grid-cols-12 gap-6 bg-neutral-950/90 border-neutral-800 border rounded-3xl pt-24 pb-24">
<div className="col-span-12 md:col-span-10 md:col-start-2">
<div className="fade-in-up mb-16">
<h2 className="text-[44px] sm:text-[56px] md:text-[74px] font-light tracking-tighter font-playfair mb-6">Selected Work</h2>
<p className="text-lg text-neutral-300/90 font-geist max-w-2xl">
              A curated collection of projects showcasing my approach to solving complex design challenges across various industries.
            </p>
</div>
<div className="space-y-24">

<div className="fade-in-up grid grid-cols-12 gap-8 items-center">
<div className="col-span-12 lg:col-span-6">
<div className="aspect-[4/3] flex bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ec0c68fa-cafb-4fe2-894e-0d9f5bbd7e29_1600w.jpg)] bg-cover border-neutral-800/50 border rounded-lg items-center justify-center">
<span className="text-neutral-500 font-geist">Project Image</span>
</div>
</div>
<div className="col-span-12 lg:col-span-6">
<div className="space-y-6">
<div className="text-sm uppercase tracking-wide text-neutral-400 font-geist">Mobile App / 2024</div>
<h3 className="text-3xl font-light font-playfair">FinanceFlow</h3>
<p className="text-neutral-300/80 leading-relaxed font-geist">
                    A comprehensive financial management app that simplifies budgeting and expense tracking through intelligent categorization and insightful analytics.
                  </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs font-geist">UX Research</span>
<span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs font-geist">Mobile Design</span>
<span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs font-geist">Prototyping</span>
</div>
<button className="text-sm font-medium hover:opacity-70 transition-opacity font-geist">
                    View Case Study →
                  </button>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-1 grid grid-cols-12 gap-8 items-center">
<div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
<div className="space-y-6">
<div className="text-sm uppercase tracking-wide text-neutral-400 font-geist">Web Platform / 2023</div>
<h3 className="text-3xl font-light font-playfair">HealthConnect</h3>
<p className="text-neutral-300/80 leading-relaxed font-geist">
                    A telehealth platform connecting patients with healthcare providers, featuring intuitive scheduling and seamless video consultations.
                  </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs font-geist">Web Design</span>
<span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs font-geist">User Testing</span>
<span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs font-geist">Design System</span>
</div>
<button className="text-sm font-medium hover:opacity-70 transition-opacity font-geist">
                    View Case Study →
                  </button>
</div>
</div>
<div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
<div className="aspect-[4/3] flex bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9cd1d4fc-703c-4e4d-a54e-9c08b0644568_1600w.jpg)] bg-cover border-neutral-800/50 border rounded-lg items-center justify-center">
<span className="text-neutral-500 font-geist">Project Image</span>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-2 grid grid-cols-12 gap-8 items-center">
<div className="col-span-12 lg:col-span-6">
<div className="aspect-[4/3] flex bg-neutral-900 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/507d47d1-d71f-465b-b833-073b5ed3cdfa_1600w.jpg)] bg-cover border-neutral-800/50 border rounded-lg items-center justify-center">
<span className="text-neutral-500 font-geist">Project Image</span>
</div>
</div>
<div className="col-span-12 lg:col-span-6">
<div className="space-y-6">
<div className="text-sm uppercase tracking-wide text-neutral-400 font-geist">Dashboard / 2023</div>
<h3 className="text-3xl font-light font-playfair">DataViz Pro</h3>
<p className="text-neutral-300/80 leading-relaxed font-geist">
                    An advanced analytics dashboard that transforms complex data into actionable insights through intuitive visualizations and interactive reports.
                  </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs font-geist">Data Visualization</span>
<span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs font-geist">Dashboard Design</span>
<span className="px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-full text-xs font-geist">UX Strategy</span>
</div>
<button className="text-sm font-medium hover:opacity-70 transition-opacity font-geist">
                    View Case Study →
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="px-6 sm:px-8 lg:px-12 py-32">
<div className="fade-in-up max-w-4xl mx-auto text-center">
<p className="text-2xl md:text-3xl font-light font-playfair text-neutral-300 leading-relaxed">
        "The details are not the details. They make the design."
      </p>
</div>
</div>

<section className="section min-h-screen px-6 sm:px-8 lg:px-12 py-20" id="process">
<div className="w-full max-w-7xl mx-auto">
<div className="grid grid-cols-12 gap-6 bg-neutral-950/90 border-neutral-800 border rounded-3xl pt-24 pb-24">
<div className="col-span-12 md:col-span-10 md:col-start-2">
<div className="fade-in-up mb-16">
<h2 className="text-[44px] sm:text-[56px] md:text-[74px] font-light tracking-tighter font-playfair mb-6">My Process</h2>
<p className="text-lg text-neutral-300/90 font-geist max-w-2xl">
              A structured approach to design that ensures every solution is grounded in user needs and business objectives.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="fade-in-up bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30eeab2d-e97c-4b45-b740-6695c7862813_1600w.jpg)] bg-cover border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-sm font-medium font-geist">01</div>
<h3 className="text-2xl font-light font-playfair">Research &amp; Discovery</h3>
</div>
<p className="text-neutral-300/80 leading-relaxed font-geist pl-16">
                Deep dive into user needs, business goals, and market landscape through interviews, surveys, and competitive analysis to establish a solid foundation.
              </p>
<div className="pl-16">
<div className="space-y-2 text-sm text-neutral-400 font-geist">
<div className="">• User interviews &amp; surveys</div>
<div className="">• Competitive analysis</div>
<div className="">• Stakeholder workshops</div>
<div className="">• Requirements gathering</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-1 border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-sm font-medium font-geist">02</div>
<h3 className="text-2xl font-light font-playfair">Define &amp; Strategize</h3>
</div>
<p className="text-neutral-300/80 leading-relaxed font-geist pl-16">
                Synthesize research findings into actionable insights, define user personas, and establish clear design principles and success metrics.
              </p>
<div className="pl-16">
<div className="space-y-2 text-sm text-neutral-400 font-geist">
<div className="">• User personas &amp; journeys</div>
<div className="">• Problem definition</div>
<div className="">• Design principles</div>
<div className="">• Success metrics</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-2 border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-sm font-medium font-geist">03</div>
<h3 className="text-2xl font-light font-playfair">Ideate &amp; Prototype</h3>
</div>
<p className="text-neutral-300/80 leading-relaxed font-geist pl-16">
                Generate multiple solutions through sketching and ideation, then create low to high-fidelity prototypes for testing and validation.
              </p>
<div className="pl-16">
<div className="space-y-2 text-sm text-neutral-400 font-geist">
<div className="">• Sketching &amp; wireframes</div>
<div className="">• Information architecture</div>
<div className="">• Interactive prototypes</div>
<div className="">• Design iterations</div>
</div>
</div>
</div>

<div className="fade-in-up stagger-delay-3 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d332ff93-b258-4594-bf65-7ccd8793ff59_1600w.jpg)] bg-cover border-zinc-800 border rounded-2xl pt-6 pr-6 pb-6 pl-6 space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center text-sm font-medium font-geist">04</div>
<h3 className="text-2xl font-light font-playfair">Test &amp; Refine</h3>
</div>
<p className="text-neutral-300/80 leading-relaxed font-geist pl-16">
                Validate designs through user testing, gather feedback, and iterate based on insights to ensure the solution meets user needs effectively.
              </p>
<div className="pl-16">
<div className="space-y-2 text-sm text-neutral-400 font-geist">
<div className="">• Usability testing</div>
<div className="">• A/B testing</div>
<div className="">• Design handoff</div>
<div className="">• Post-launch analysis</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="px-6 sm:px-8 lg:px-12 py-32">
<div className="fade-in-up max-w-4xl mx-auto text-center">
<p className="text-2xl md:text-3xl font-light font-playfair text-neutral-300 leading-relaxed">
        "Design is not just what it looks like. Design is how it works."
      </p>
</div>
</div>

<section className="section min-h-screen sm:px-8 lg:px-12 pt-20 pr-6 pb-20 pl-6 space-y-12" id="about">
<div className="w-full max-w-7xl mr-auto ml-auto space-y-20">
<div className="fade-in-up grid grid-cols-12 gap-6 bg-neutral-950/90 bg-[url(https://cdn.midjourney.com/cca4a777-b940-403d-a868-cd7fe9a80700/0_3.png?w=800&amp;q=80)] bg-cover border-neutral-800 border rounded-3xl pt-24 pb-24">
<div className="col-span-12 md:col-span-10 md:col-start-2">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-light tracking-tighter font-playfair mb-8">About Me</h2>
<div className="space-y-6 text-neutral-300/90 leading-relaxed font-geist">
<p className="">
                  I'm a product designer with over 6 years of experience creating digital experiences that bridge the gap between user needs and business goals. My background in psychology gives me unique insights into user behavior and motivation.
                </p>
<p className="">
                  I believe great design is invisible – it should feel natural and intuitive while solving real problems. I'm passionate about accessibility, inclusive design, and creating products that make technology more human.
                </p>
<p className="">
                  When I'm not designing, you'll find me exploring local coffee shops, practicing photography, or hiking with my rescue dog Luna.
                </p>
</div>
</div>
<div className="space-y-1 items-end">
</div>
</div>
</div>
</div>
<section className="fade-in-up stagger-delay-1 relative z-10">
<div className="max-w-7xl bg-neutral-950/90 border-neutral-800 border rounded-3xl mr-auto ml-auto pt-24 pr-24 pb-24 pl-24">
<div className="mb-8">
<h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-light tracking-tighter font-playfair mb-8" style={{}}>Skills &amp; Expertise</h2>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" id="industry-cards">

<div className="fade-in-up relative rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/40 hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group" style={{transform: 'none', opacity: '1'}}>
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-emerald-400/30 group-hover:bg-emerald-400/10 transition-all duration-300">
<svg className="lucide lucide-layers w-[20px] h-[20px] text-zinc-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
<span className="text-xs text-neutral-500 font-sans group-hover:text-emerald-400 transition-colors" style={{}}>01</span>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight font-sans group-hover:text-emerald-200 transition-colors" style={{}}>UX/UI Design</h3>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors font-sans" style={{}}>Creating intuitive interfaces and user experiences through wireframing, prototyping, and visual design.</p>
</div>

<div className="fade-in-up stagger-delay-1 relative ring-1 ring-white/10 supports-[backdrop-filter]:bg-neutral-900/40 bg-neutral-900/60 rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group" style={{transform: 'none', opacity: '1'}}>
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-emerald-400/30 group-hover:bg-emerald-400/10 transition-all duration-300">
<svg className="lucide lucide-users w-[20px] h-[20px] text-zinc-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="m22 21-2-2"></path><circle cx="20" cy="16" r="3"></circle></svg>
</div>
<span className="text-xs text-neutral-500 font-sans group-hover:text-emerald-400 transition-colors" style={{}}>02</span>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight font-sans group-hover:text-emerald-200 transition-colors" style={{}}>User Research</h3>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors font-sans" style={{}}>Conducting user interviews, surveys, and usability testing to inform design decisions with data-driven insights.</p>
</div>

<div className="fade-in-up stagger-delay-2 relative overflow-hidden ring-1 ring-emerald-400/30 bg-neutral-900/70 rounded-3xl pt-6 pr-6 pb-6 pl-6 hover:bg-neutral-900/90 hover:ring-emerald-400/50 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group" style={{transform: 'none', opacity: '1'}}>
<span className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/30 font-sans group-hover:bg-emerald-400/20 group-hover:text-emerald-200 transition-all" style={{}}>
                Core Specialty
              </span>
<h3 className="mb-2 text-xl font-semibold tracking-tight font-sans group-hover:text-emerald-200 transition-colors" style={{}}>Design Systems</h3>
<p className="group-hover:text-neutral-200 transition-colors text-sm text-neutral-300 mb-4" style={{}}>Building scalable design systems and component libraries that ensure consistency across products and teams.</p>
<button className="inline-flex items-center gap-2 rounded-xl bg-neutral-800 px-4 py-2 text-xs font-medium text-neutral-100 ring-1 ring-white/10 hover:bg-neutral-700 hover:scale-105 transition-all duration-200 font-sans">
                View Portfolio
                <svg className="lucide lucide-arrow-right h-4 w-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="fade-in-up stagger-delay-3 relative rounded-3xl bg-neutral-900/60 p-6 ring-1 ring-white/10 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/40 hover:bg-neutral-900/80 hover:ring-white/20 hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer group" style={{transform: 'none', opacity: '1'}}>
<div className="mb-4 flex items-center justify-between">
<div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 group-hover:ring-emerald-400/30 group-hover:bg-emerald-400/10 transition-all duration-300">
<svg className="lucide lucide-code w-[20px] h-[20px] text-zinc-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16,18 22,12 16,6"></polyline><polyline points="8,6 2,12 8,18"></polyline></svg>
</div>
<span className="text-xs text-neutral-500 font-sans group-hover:text-emerald-400 transition-colors" style={{}}>04</span>
</div>
<h3 className="mb-2 text-lg font-semibold tracking-tight font-sans group-hover:text-emerald-200 transition-colors" style={{}}>Prototyping</h3>
<p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors font-sans" style={{}}>Building interactive prototypes using Figma, Framer, and code to validate ideas and communicate designs effectively.</p>
</div>
</div>

<div className="fade-in-up stagger-delay-4 mt-8 p-6 bg-neutral-900/40 rounded-2xl ring-1 ring-white/10">
<h4 className="text-lg font-semibold font-sans mb-4 text-neutral-200">Tools &amp; Technologies</h4>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-2 bg-neutral-800/50 rounded-lg text-sm font-sans text-neutral-300">Figma</span>
<span className="px-3 py-2 bg-neutral-800/50 rounded-lg text-sm font-sans text-neutral-300">Adobe Creative Suite</span>
<span className="px-3 py-2 bg-neutral-800/50 rounded-lg text-sm font-sans text-neutral-300">Sketch</span>
<span className="px-3 py-2 bg-neutral-800/50 rounded-lg text-sm font-sans text-neutral-300">Principle</span>
<span className="px-3 py-2 bg-neutral-800/50 rounded-lg text-sm font-sans text-neutral-300">Framer</span>
<span className="px-3 py-2 bg-neutral-800/50 rounded-lg text-sm font-sans text-neutral-300">HTML/CSS</span>
<span className="px-3 py-2 bg-neutral-800/50 rounded-lg text-sm font-sans text-neutral-300">JavaScript</span>
<span className="px-3 py-2 bg-neutral-800/50 rounded-lg text-sm font-sans text-neutral-300">React</span>
</div>
</div>
</div>
</section>
</div>
</section>

<div className="px-6 sm:px-8 lg:px-12 py-32">
<div className="fade-in-up max-w-4xl mx-auto text-center">
<p className="text-2xl md:text-3xl font-light font-playfair text-neutral-300 leading-relaxed">
        "Every great design begins with an even better story."
      </p>
</div>
</div>

<section className="section min-h-screen sm:px-8 lg:px-12 pt-20 pr-6 pb-20 pl-6" id="contact">
<div className="w-full max-w-7xl mx-auto">
<div className="fade-in-up grid grid-cols-12 gap-6 bg-neutral-950/90 border-neutral-800 border rounded-3xl pt-20 pb-20">
<div className="col-span-12 md:col-span-10 md:col-start-2">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-light tracking-tighter font-playfair mb-8">Let's Work Together</h2>
<div className="space-y-6 text-neutral-300/90 leading-relaxed font-geist">
<p className="">
                  I'm always excited to take on new challenges and collaborate with amazing teams. Whether you have a project in mind or just want to chat about design, I'd love to hear from you.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<svg className="text-neutral-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span className="font-geist">jessica.chen@email.com</span>
</div>
<div className="flex items-center gap-4">
<svg className="text-neutral-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span className="font-geist">+1 (555) 123-4567</span>
</div>
<div className="flex items-center gap-4">
<svg className="text-neutral-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="font-geist">San Francisco, CA</span>
</div>
</div>
</div>
</div>
<div className="fade-in-right space-y-8">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="">
<label className="block text-sm font-medium font-geist mb-2">Name</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white font-geist" placeholder="Your name" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium font-geist mb-2">Email</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white font-geist" placeholder="your@email.com" type="email"/>
</div>
</div>
<div className="">
<label className="block text-sm font-medium font-geist mb-2">Subject</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white font-geist" placeholder="Project inquiry" type="text"/>
</div>
<div className="">
<label className="block text-sm font-medium font-geist mb-2">Message</label>
<textarea className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 text-white font-geist resize-none" placeholder="Tell me about your project..." rows="6"></textarea>
</div>
<button className="group relative inline-flex shadow-[0_8px_16px_-4px_rgba(255,255,255,0.05)] hover:shadow-[0_12px_20px_-6px_rgba(255,255,255,0.1)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-lg pt-[1px] pr-[1px] pb-[1px] pl-[1px] items-center justify-center" style={{backgroundImage: 'linear-gradient(144deg,rgba(255,255,255,0.3), rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.2))'}} type="submit">
<span className="flex items-center justify-center gap-2 text-sm leading-none min-w-[140px] w-full h-full transition-colors duration-300 group-hover:bg-black/50 font-medium bg-black/80 rounded-lg pt-3 pr-6 pb-3 pl-6">
<span className="">Send Message</span>
<svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-black/50 border-neutral-800/50 border-t pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
<div className="text-sm text-neutral-400 font-geist">
      © 2024 Jessica Chen. All rights reserved.
    </div>
<div className="flex items-center gap-6">
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-geist" href="#">Privacy Policy</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors font-geist" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
