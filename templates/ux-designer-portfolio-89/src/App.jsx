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



        // Simple Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'auto';
            }
        }

        btn.addEventListener('click', toggleMenu);
    
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
      

<nav className="fixed w-full z-50 glass-nav border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="text-xl font-semibold tracking-tighter text-gray-900 z-50" href="#">
                    ALEX<span className="text-gray-400">.</span>
</a>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium hover:text-gray-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-gray-900 transition-colors" href="#projects">Work</a>
<a className="px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all shadow-sm hover:shadow-md" href="#contact">
                        Let's Talk
                    </a>
</div>

<button className="md:hidden z-50 text-gray-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<a className="text-2xl font-medium text-gray-900 tracking-tight" href="#about" onclick="toggleMenu()">About</a>
<a className="text-2xl font-medium text-gray-900 tracking-tight" href="#services" onclick="toggleMenu()">Services</a>
<a className="text-2xl font-medium text-gray-900 tracking-tight" href="#projects" onclick="toggleMenu()">Work</a>
<a className="text-2xl font-medium text-gray-900 tracking-tight" href="#contact" onclick="toggleMenu()">Contact</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-0">
<div className="absolute top-20 left-20 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-20 right-20 w-96 h-96 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 text-center lg:text-left">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white shadow-sm mb-8 fade-up">
<span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
<span className="text-xs font-medium text-gray-600 uppercase tracking-wide">Available for new projects</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-6 fade-up delay-100">
                        Designing Digital Experiences That <span className="text-gray-400">Convert.</span>
</h1>
<p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed fade-up delay-200">
                        I craft user-centric interfaces and scalable design systems for startups and established brands. Blending aesthetics with functionality to solve real problems.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 fade-up delay-300">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 hover:-translate-y-0.5 transition-all shadow-lg shadow-gray-200" href="#projects">
                            View Projects
                        </a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all" href="#contact">
                            Hire Me
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="flex-1 w-full max-w-md lg:max-w-full fade-up delay-300">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/5] lg:aspect-square">
<img alt="Portrait" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="text-center text-xs font-medium text-gray-400 uppercase tracking-widest mb-8">Trusted by innovative teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
<iconify-icon className="text-gray-800" icon="lucide:hexagon" width="32"></iconify-icon>
<iconify-icon className="text-gray-800" icon="lucide:triangle" width="32"></iconify-icon>
<iconify-icon className="text-gray-800" icon="lucide:circle" width="32"></iconify-icon>
<iconify-icon className="text-gray-800" icon="lucide:square" width="32"></iconify-icon>
<iconify-icon className="text-gray-800" icon="lucide:diamond" width="32"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-6">Beyond the Pixels</h2>
<div className="space-y-4 text-gray-500 leading-relaxed">
<p>
                            With over 6 years of experience in digital product design, I bridge the gap between creative vision and technical implementation. My philosophy is simple: clarity above all else.
                        </p>
<p>
                            I specialize in building clean, accessible, and scalable design systems that allow product teams to move faster. From complex SaaS dashboards to high-conversion marketing sites, I bring a systematic approach to creativity.
                        </p>
</div>
<div className="mt-8 flex flex-wrap gap-3">
<span className="inline-flex items-center px-3 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">
<iconify-icon className="mr-1.5" icon="lucide:figma" width="14"></iconify-icon> Figma
                        </span>
<span className="inline-flex items-center px-3 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">
<iconify-icon className="mr-1.5" icon="lucide:framer" width="14"></iconify-icon> Framer
                        </span>
<span className="inline-flex items-center px-3 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs font-medium text-gray-600">
<iconify-icon className="mr-1.5" icon="lucide:code-2" width="14"></iconify-icon> Webflow
                        </span>
</div>
<div className="mt-10">
<button className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                            Download Resume
                            <iconify-icon icon="lucide:download" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
<h3 className="text-4xl font-semibold text-gray-900 tracking-tight mb-1">6+</h3>
<p className="text-sm text-gray-500">Years Experience</p>
</div>
<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
<h3 className="text-4xl font-semibold text-gray-900 tracking-tight mb-1">45+</h3>
<p className="text-sm text-gray-500">Projects Launched</p>
</div>
<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 col-span-2">
<h3 className="text-xl font-medium text-gray-900 mb-2">Focus Areas</h3>
<ul className="space-y-2">
<li className="flex items-center text-sm text-gray-500">
<iconify-icon className="mr-2 text-gray-900" icon="lucide:check" width="14"></iconify-icon> UI/UX Design
                            </li>
<li className="flex items-center text-sm text-gray-500">
<iconify-icon className="mr-2 text-gray-900" icon="lucide:check" width="14"></iconify-icon> Interaction Design
                            </li>
<li className="flex items-center text-sm text-gray-500">
<iconify-icon className="mr-2 text-gray-900" icon="lucide:check" width="14"></iconify-icon> Design Systems
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-t border-gray-100" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">What I Can Offer</h2>
<p className="text-gray-500">Comprehensive design solutions tailored to help your business grow and stand out in a crowded digital landscape.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-gray-900 text-white flex items-center justify-center mb-6">
<iconify-icon icon="lucide:layout-template" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">UI Design</h3>
<p className="text-sm text-gray-500 leading-relaxed">Clean, modern interfaces that prioritize visual hierarchy and aesthetic appeal.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-900 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">UX Research</h3>
<p className="text-sm text-gray-500 leading-relaxed">User-centered problem solving, wireframing, and usability testing.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-900 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:monitor" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Web Design</h3>
<p className="text-sm text-gray-500 leading-relaxed">Responsive, fast-loading websites built with modern technologies.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-gray-100 text-gray-900 flex items-center justify-center mb-6">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Branding</h3>
<p className="text-sm text-gray-500 leading-relaxed">Visual identity, logo design, and brand guidelines for consistency.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Selected Work</h2>
<p className="text-gray-500">A curation of projects ranging from SaaS platforms to e-commerce experiences.</p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors" href="#">
                    View Dribbble
                    <iconify-icon className="ml-1" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group">
<div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 aspect-[4/3] mb-6">
<img alt="Fintech App" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-900 border border-gray-100">2023</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2">Lumina Fintech Dashboard</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">A comprehensive financial dashboard designed to simplify complex data visualization for enterprise users.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs font-medium text-gray-600 px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-md">Figma</span>
<span className="text-xs font-medium text-gray-600 px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-md">React</span>
</div>
</div>
</div>
<div className="flex gap-4">
<button className="text-sm font-medium text-gray-900 hover:underline decoration-gray-300 underline-offset-4">View Case Study</button>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 aspect-[4/3] mb-6">
<img alt="SaaS Platform" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2015&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-gray-900 border border-gray-100">2023</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight mb-2">Vortex Analytics</h3>
<p className="text-sm text-gray-500 mb-4 line-clamp-2">End-to-end UX research and UI design for a marketing analytics SaaS platform focused on user retention.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="text-xs font-medium text-gray-600 px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-md">UX Research</span>
<span className="text-xs font-medium text-gray-600 px-2.5 py-1 bg-gray-50 border border-gray-100 rounded-md">UI Design</span>
</div>
</div>
</div>
<div className="flex gap-4">
<button className="text-sm font-medium text-gray-900 hover:underline decoration-gray-300 underline-offset-4">View Case Study</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 p-32 bg-gray-800 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-16 text-center">Client Feedback</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm">
<iconify-icon className="text-gray-500 mb-6" icon="lucide:quote" width="24"></iconify-icon>
<p className="text-gray-300 mb-8 leading-relaxed">"Alex has an incredible eye for detail. The UI refresh completely transformed our user engagement metrics. Highly professional and easy to work with."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<h4 className="text-sm font-medium text-white">Sarah Jenkins</h4>
<p className="text-xs text-gray-500">Product Manager, TechFlow</p>
</div>
</div>
</div>

<div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm">
<iconify-icon className="text-gray-500 mb-6" icon="lucide:quote" width="24"></iconify-icon>
<p className="text-gray-300 mb-8 leading-relaxed">"The branding and web design package exceeded our expectations. Alex managed to capture our company ethos perfectly in visual form."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<h4 className="text-sm font-medium text-white">Michael Ross</h4>
<p className="text-xs text-gray-500">Founder, Stride</p>
</div>
</div>
</div>

<div className="p-8 bg-gray-800/50 rounded-2xl border border-gray-700 backdrop-blur-sm">
<iconify-icon className="text-gray-500 mb-6" icon="lucide:quote" width="24"></iconify-icon>
<p className="text-gray-300 mb-8 leading-relaxed">"Exceptional delivery speed without compromising quality. The design system implemented saved our dev team hundreds of hours."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-700"></div>
<div>
<h4 className="text-sm font-medium text-white">Elena Rodriguez</h4>
<p className="text-xs text-gray-500">CTO, Nova</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-6">Let's Create Something<br/>Extraordinary Together</h2>
<p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">Ready to elevate your digital presence? I'm currently accepting new projects for Q4. Let's discuss your goals.</p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1" href="#contact">
                Start a Project
            </a>
</div>
</section>

<footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-100" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
<div>
<a className="text-xl font-semibold tracking-tighter text-gray-900 mb-6 block" href="#">
                        ALEX<span className="text-gray-400">.</span>
</a>
<p className="text-gray-500 max-w-sm mb-8">
                        Crafting pixel-perfect, user-centric digital experiences for forward-thinking brands.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all" href="#">
<iconify-icon icon="lucide:dribbble" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:items-end justify-center">
<p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Contact</p>
<a className="text-2xl lg:text-3xl font-medium text-gray-900 hover:text-gray-600 transition-colors tracking-tight" href="mailto:hello@alexmorgan.design">
                        hello@alexmorgan.design
                    </a>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400">© 2023 Alex Morgan. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm text-gray-400 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-gray-400 hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
