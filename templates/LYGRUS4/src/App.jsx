import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        lucide.createIcons();
        
        // Add smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/animatedbackgroundgradientforweb-jvJDeBWjMvShkjPKxPRUswLq" width="100%"></iframe></div>

<nav className="fixed top-0 w-full backdrop-blur-lg border-b z-50 initial-hidden animate-fade-up bg-black/80 border-gray-900">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="text-xl font-semibold tracking-tight">Studio</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium transition-colors text-gray-400 hover:text-gray-100" href="#work">Work</a>
<a className="text-sm font-medium transition-colors text-gray-400 hover:text-gray-100" href="#services">Services</a>
<a className="text-sm font-medium transition-colors text-gray-400 hover:text-gray-100" href="#about">About</a>
<a className="text-sm font-medium transition-colors text-gray-400 hover:text-gray-100" href="#contact">Contact</a>
</div>
<button className="md:hidden">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="lg:px-8 pt-32 pr-6 pb-20 pl-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-4xl mx-auto">
<h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 initial-hidden animate-fade-up-delay-1">
                    We craft digital experiences that matter
                </h1>
<p className="text-xl mb-12 max-w-2xl mx-auto initial-hidden animate-fade-up-delay-2 text-gray-400">
                    A creative studio specializing in product design, web development, photography, motion design, and branding.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center initial-hidden animate-fade-up-delay-3">
<button className="px-8 py-3 rounded-lg font-medium transition-colors bg-white text-black hover:bg-gray-200">
                        View Our Work
                    </button>
<button className="border px-8 py-3 rounded-lg font-medium transition-colors border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-950">
                        Start a Project
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-gray-950" id="work">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center initial-hidden animate-fade-up">
                Featured Work
            </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="group cursor-pointer initial-hidden animate-fade-up-delay-1">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-500 bg-gray-800">
<img alt="Product Design" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&amp;h=600&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
<p className="mb-4 text-gray-400">Product Design, Web Development</p>
<div className="flex items-center text-sm font-medium group-hover:text-gray-900 transition-colors">
                        View Case Study
                        <svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="group cursor-pointer initial-hidden animate-fade-up-delay-2">
<div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-500 bg-gray-800">
<img alt="Branding" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&amp;h=600&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold mb-2">Brand Identity</h3>
<p className="mb-4 text-gray-400">Branding, Motion Design</p>
<div className="flex items-center text-sm font-medium group-hover:text-gray-900 transition-colors">
                        View Case Study
                        <svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8" id="services">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center initial-hidden animate-fade-up">
                What We Do
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="p-8 border rounded-2xl hover:shadow-lg transition-all duration-300 initial-hidden animate-fade-up-delay-1 border-gray-800 hover:border-gray-700">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-900">
<svg className="lucide lucide-monitor w-6 h-6 text-blue-400" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<h3 className="text-xl font-semibold mb-4">Product Design</h3>
<p className="text-gray-400">Creating intuitive and beautiful digital products that users love to interact with.</p>
</div>
<div className="p-8 border rounded-2xl hover:shadow-lg transition-all duration-300 initial-hidden animate-fade-up-delay-2 border-gray-800 hover:border-gray-700">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-green-900">
<svg className="lucide lucide-code w-6 h-6 text-green-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4">Web Development</h3>
<p className="text-gray-400">Building fast, responsive, and scalable web applications with modern technologies.</p>
</div>
<div className="p-8 border rounded-2xl hover:shadow-lg transition-all duration-300 initial-hidden animate-fade-up-delay-3 border-gray-800 hover:border-gray-700">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-purple-900">
<svg className="lucide lucide-camera w-6 h-6 text-purple-400" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-4">Photography</h3>
<p className="text-gray-400">Capturing compelling visuals that tell your brand's story and connect with audiences.</p>
</div>
<div className="p-8 border rounded-2xl hover:shadow-lg transition-all duration-300 initial-hidden animate-fade-up-delay-1 border-gray-800 hover:border-gray-700">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-orange-900">
<svg className="lucide lucide-play w-6 h-6 text-orange-400" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-4">Motion Design</h3>
<p className="text-gray-400">Bringing ideas to life through engaging animations and motion graphics.</p>
</div>
<div className="p-8 border rounded-2xl hover:shadow-lg transition-all duration-300 initial-hidden animate-fade-up-delay-2 border-gray-800 hover:border-gray-700">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-pink-900">
<svg className="lucide lucide-palette w-6 h-6 text-pink-400" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-4">Branding</h3>
<p className="text-gray-400">Developing distinctive brand identities that resonate with your target audience.</p>
</div>
<div className="p-8 border rounded-2xl hover:shadow-lg transition-all duration-300 initial-hidden animate-fade-up-delay-3 border-gray-800 hover:border-gray-700">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-indigo-900">
<svg className="lucide lucide-users w-6 h-6 text-indigo-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-4">Consultation</h3>
<p className="text-gray-400">Strategic guidance to help your business grow and succeed in the digital landscape.</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8 bg-gray-950" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="initial-hidden animate-fade-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                        We're a team of creators, builders, and dreamers
                    </h2>
<p className="text-lg mb-8 text-gray-400">
                        Founded in 2020, Studio has been at the forefront of digital innovation, helping brands create meaningful connections with their audiences through exceptional design and development.
                    </p>
<div className="flex items-center space-x-8">
<div>
<div className="text-2xl font-bold">50+</div>
<div className="text-sm text-gray-400">Projects Completed</div>
</div>
<div>
<div className="text-2xl font-bold">25+</div>
<div className="text-sm text-gray-400">Happy Clients</div>
</div>
<div>
<div className="text-2xl font-bold">4</div>
<div className="text-sm text-gray-400">Years Experience</div>
</div>
</div>
</div>
<div className="initial-hidden animate-fade-up-delay-1">
<div className="aspect-square rounded-2xl overflow-hidden bg-gray-800">
<img alt="Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&amp;h=600&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-8" id="contact">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 initial-hidden animate-fade-up">
                Ready to start your project?
            </h2>
<p className="text-lg mb-12 initial-hidden animate-fade-up-delay-1 text-gray-400">
                Let's discuss how we can help bring your vision to life.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center initial-hidden animate-fade-up-delay-2">
<button className="px-8 py-3 rounded-lg font-medium transition-colors bg-white text-black hover:bg-gray-200">
                    Get in Touch
                </button>
<button className="border px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center border-gray-700 text-gray-300 hover:border-gray-600 hover:bg-gray-950">
<svg className="lucide lucide-mail w-4 h-4 mr-2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                    hello@studio.com
                </button>
</div>
</div>
</section>

<footer className="py-16 px-6 lg:px-8 border-t border-gray-800">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center">
<div className="text-xl font-semibold tracking-tight mb-4 md:mb-0">Studio</div>
<div className="flex items-center space-x-6">
<a className="transition-colors text-gray-400 hover:text-gray-100" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="transition-colors text-gray-400 hover:text-gray-100" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="transition-colors text-gray-400 hover:text-gray-100" href="#">
<svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
<div className="mt-8 pt-8 border-t text-center text-sm border-gray-800 text-gray-400">
                © 2024 Studio. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
