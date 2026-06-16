import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Navbar Scroll Effect
        const nav = document.getElementById('main-nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('open');
            mobileMenu.classList.toggle('translate-x-full');
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Intersection Observer for Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach((element) => {
            observer.observe(element);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full top-0 z-50 px-6 md:px-12 lg:px-20 py-6 flex justify-between items-center" id="main-nav">

<a className="flex items-center gap-2 group" href="#">
<div className="h-10 w-10 bg-red-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform duration-300">
<span className="font-heading font-bold text-xl tracking-tighter">V</span>
</div>
<span className="font-heading text-xl font-bold tracking-tight" id="nav-logo-text">VINTA</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm font-medium hover:text-red-400" href="#home">Home</a>
<a className="nav-link text-sm font-medium hover:text-red-400" href="#services">Services</a>
<a className="nav-link text-sm font-medium hover:text-red-400" href="#products">Products</a>
<a className="nav-link text-sm font-medium hover:text-red-400" href="#projects">Projects</a>
<a className="nav-link text-sm font-medium hover:text-red-400" href="#contact">Contact</a>
</div>

<button className="md:hidden nav-link" id="menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</nav>

<div className="fixed inset-y-0 right-0 w-64 bg-white/95 backdrop-blur-xl shadow-2xl z-[60] transform translate-x-full flex flex-col p-8" id="mobile-menu">
<div className="flex justify-end mb-8">
<button className="text-slate-800 hover:text-red-600 transition-colors" id="close-menu-btn">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-6">
<a className="text-lg font-heading font-semibold text-slate-900 hover:text-red-600 mobile-link" href="#home">Home</a>
<a className="text-lg font-heading font-semibold text-slate-900 hover:text-red-600 mobile-link" href="#services">Services</a>
<a className="text-lg font-heading font-semibold text-slate-900 hover:text-red-600 mobile-link" href="#products">Products</a>
<a className="text-lg font-heading font-semibold text-slate-900 hover:text-red-600 mobile-link" href="#projects">Projects</a>
<a className="text-lg font-heading font-semibold text-slate-900 hover:text-red-600 mobile-link" href="#contact">Contact</a>
</div>
</div>

<header className="relative min-h-screen w-full flex items-center px-6 md:px-12 lg:px-20 overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Modern Roofing" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&amp;w=2569&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-900/50 to-transparent"></div>
</div>

<div className="relative z-10 max-w-4xl mt-16 animate-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6">
<iconify-icon className="text-red-500" height="16" icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase">ISO 9001 Certified Engineering</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-semibold text-white mb-6 tracking-tight">
                Engineering Excellence. <br/>
<span className="text-slate-300">Superior Roofing.</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
                We deliver industrial-grade roofing solutions, precision profile sheets, and robust construction services designed to withstand the elements.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="h-12 px-8 rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20" href="#products">
<span>View Products</span>
<iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="h-12 px-8 rounded-lg border border-white text-white hover:bg-white hover:text-slate-900 font-semibold flex items-center justify-center gap-2 transition-all duration-300" href="#projects">
<span>Our Projects</span>
</a>
</div>
</div>
</header>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-zinc-50" id="products">
<div className="max-w-[1600px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-on-scroll">
<div>
<h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Our Expertise</h4>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">Industrial Solutions</h2>
</div>
<p className="max-w-md text-slate-600 leading-relaxed">
                    Engineered for durability and precision. Our product line defines the standard for modern construction materials.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-on-scroll delay-100 flex flex-col h-full">
<div className="h-64 overflow-hidden relative">
<img alt="Tile Roofing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1632759132698-38600d810a90?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg p-2 text-slate-900">
<iconify-icon height="24" icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
</div>
<div className="p-8 flex-grow flex flex-col">
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Vinta Tile Roofing</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Premium ceramic and composite tiles designed for thermal efficiency and aesthetic longevity.</p>
<div className="mt-auto border-t border-slate-100 pt-6">
<div className="flex justify-between items-center text-sm font-medium text-slate-600 font-mono">
<span>Warranty</span>
<span className="text-slate-900">25 Years</span>
</div>
<div className="flex justify-between items-center text-sm font-medium text-slate-600 font-mono mt-2">
<span>Load Rating</span>
<span className="text-slate-900">&gt;200kg/m²</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-on-scroll delay-200 flex flex-col h-full">
<div className="h-64 overflow-hidden relative">
<img alt="Profile Sheets" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg p-2 text-slate-900">
<iconify-icon height="24" icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
</div>
<div className="p-8 flex-grow flex flex-col">
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Profile Sheets</h3>
<p className="text-slate-500 mb-6 leading-relaxed">High-tensile zinc-aluminium alloy coated steel sheets. Perfect for industrial warehousing.</p>
<div className="mt-auto border-t border-slate-100 pt-6">
<div className="flex justify-between items-center text-sm font-medium text-slate-600 font-mono">
<span>Thickness</span>
<span className="text-slate-900">0.47mm</span>
</div>
<div className="flex justify-between items-center text-sm font-medium text-slate-600 font-mono mt-2">
<span>Coating</span>
<span className="text-slate-900">AZ150</span>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-on-scroll delay-300 flex flex-col h-full">
<div className="h-64 overflow-hidden relative">
<img alt="Rainwater Systems" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://plus.unsplash.com/premium_photo-1678811112870-07cf90b5030e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-lg p-2 text-slate-900">
<iconify-icon height="24" icon="solar:water-drops-linear" width="24"></iconify-icon>
</div>
</div>
<div className="p-8 flex-grow flex flex-col">
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Rainwater Solutions</h3>
<p className="text-slate-500 mb-6 leading-relaxed">Integrated guttering and drainage systems engineered to manage heavy tropical precipitation.</p>
<div className="mt-auto border-t border-slate-100 pt-6">
<div className="flex justify-between items-center text-sm font-medium text-slate-600 font-mono">
<span>Material</span>
<span className="text-slate-900">uPVC / Zinc</span>
</div>
<div className="flex justify-between items-center text-sm font-medium text-slate-600 font-mono mt-2">
<span>Capacity</span>
<span className="text-slate-900">High Flow</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-20 bg-white" id="projects">
<div className="max-w-[1600px] mx-auto">
<div className="mb-16 animate-on-scroll">
<h4 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-3">Portfolio</h4>
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight">Recent Completions</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer animate-on-scroll delay-100">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600596542815-e328700336f4?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">The Horizon Villa</h3>
<p className="text-red-100 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Full Roofing &amp; Gutter System</p>
<div className="mt-4 w-8 h-8 rounded-full border border-white flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer animate-on-scroll delay-200">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Kandy Industrial Park</h3>
<p className="text-red-100 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Profile Sheet Installation</p>
<div className="mt-4 w-8 h-8 rounded-full border border-white flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer animate-on-scroll delay-300">
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-red-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
<h3 className="text-white text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Ella Eco Resort</h3>
<p className="text-red-100 mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Composite Tiling</p>
<div className="mt-4 w-8 h-8 rounded-full border border-white flex items-center justify-center text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-slate-900 font-semibold hover:text-red-600 transition-colors inline-flex items-center gap-2 group">
                    View All Projects 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-24 px-6 md:px-12 lg:px-20" id="contact">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

<div className="animate-on-scroll">
<div className="flex items-center gap-2 mb-8">
<div className="h-8 w-8 bg-red-600 rounded flex items-center justify-center text-white">
<span className="font-heading font-bold text-lg">V</span>
</div>
<span className="font-heading text-xl font-bold text-white tracking-tight">VINTA ENGINEERING</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight">Ready to build something lasting?</h2>
<p className="text-slate-400 mb-10 text-lg">Contact our engineering team for a site assessment or product quotation.</p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-slate-800 rounded-full text-red-500">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h5 className="text-white font-medium">Headquarters</h5>
<p className="text-slate-400 text-sm mt-1">128 Industrial Zone, Badulla Road,<br/>Uva Province, Sri Lanka</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-slate-800 rounded-full text-red-500">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h5 className="text-white font-medium">Phone</h5>
<p className="text-slate-400 text-sm mt-1">+94 77 123 4567</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 p-8 md:p-10 rounded-2xl border border-slate-800 animate-on-scroll delay-200">
<form className="flex flex-col gap-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-400">First Name</label>
<input className="bg-slate-900 border border-slate-700 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" placeholder="John" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-400">Last Name</label>
<input className="bg-slate-900 border border-slate-700 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-400">Email Address</label>
<input className="bg-slate-900 border border-slate-700 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-400">Project Type</label>
<select className="bg-slate-900 border border-slate-700 rounded-lg h-12 px-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors appearance-none">
<option>Residential Roofing</option>
<option>Industrial Sheets</option>
<option>Rainwater Systems</option>
<option>General Consultation</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-400">Message</label>
<textarea className="bg-slate-900 border border-slate-700 rounded-lg h-32 p-4 text-white focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-colors resize-none" placeholder="Tell us about your project requirements..."></textarea>
</div>
<button className="mt-2 h-12 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-red-900/20" type="button">
                        Send Request
                    </button>
</form>
</div>
</div>
<div className="max-w-[1600px] mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
<p>© 2024 Vinta Engineering. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
