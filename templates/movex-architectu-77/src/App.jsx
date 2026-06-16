import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Reveal animation
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        
                        // Counter animation
                        const counters = entry.target.querySelectorAll('.counter');
                        counters.forEach(counter => {
                            if(counter.classList.contains('counted')) return;
                            counter.classList.add('counted');
                            
                            const target = +counter.getAttribute('data-target');
                            const duration = 1500; // 1.5 seconds
                            let startTimestamp = null;
                            
                            const step = (timestamp) => {
                                if (!startTimestamp) startTimestamp = timestamp;
                                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                                // easeOutQuart formula for smooth deceleration
                                const easeProgress = 1 - Math.pow(1 - progress, 4);
                                
                                counter.innerText = Math.floor(easeProgress * target);
                                
                                if (progress < 1) {
                                    window.requestAnimationFrame(step);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            window.requestAnimationFrame(step);
                        });

                        observer.unobserve(entry.target);
                    }
                });
            }, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            });

            document.querySelectorAll('.scroll-reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-[#FCFCFC]/80 backdrop-blur-md border-b border-neutral-200/50">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter uppercase text-neutral-900" href="#">
                M O V E X .
            </a>
<nav className="hidden md:flex items-center space-x-8">
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Work</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Studio</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Process</a>
<a className="text-sm font-normal text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Journal</a>
</nav>
<div className="flex items-center space-x-4">
<a className="hidden md:inline-flex items-center justify-center h-8 px-4 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors" href="#contact">
                    Inquire
                </a>
<button className="md:hidden text-neutral-900 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>
<main>

<section className="relative pt-40 pb-24 md:pt-64 md:pb-32 lg:min-h-[90vh] flex flex-col justify-end">

<div className="absolute inset-0 z-0 bg-neutral-900">
<img alt="Hero Architecture Background" className="w-full h-full object-cover select-none pointer-events-none opacity-80" src="https://i.ibb.co/hRNsR8gZ/Whats-App-Image-2026-03-08-at-5-33-47-PM.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10"></div>
</div>

<div className="relative z-10 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-end">
<div className="lg:col-span-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-semibold tracking-tighter text-white">
                            Designing spaces<br/>that endure.
                        </h1>
</div>
<div className="lg:col-span-4 flex flex-col items-start lg:items-end lg:text-right scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
<p className="text-base text-neutral-200 max-w-sm font-normal leading-relaxed mb-6 lg:mb-8">
                            We are a residential architecture studio focused on creating timeless, structural environments tailored to modern living.
                        </p>
<a className="inline-flex items-center group space-x-2 text-sm font-medium text-white border-b border-white/40 hover:border-white pb-1 transition-colors" href="#">
<span>Explore our philosophy</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-y border-neutral-200/50 bg-neutral-50/50 overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
<div className="flex flex-col scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-2"><span className="counter" data-target="2010">0</span></span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Founded</span>
</div>
<div className="flex flex-col scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-2"><span className="counter" data-target="85">0</span>+</span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Projects Built</span>
</div>
<div className="flex flex-col scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-2"><span className="counter" data-target="12">0</span></span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">AIA Awards</span>
</div>
<div className="flex flex-col scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-2">LA</span>
<span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Based In</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-6 md:space-y-0">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">Selected Works</h2>

<div className="inline-flex items-center p-1 bg-neutral-100/80 rounded-full border border-neutral-200/60 backdrop-blur-sm self-start md:self-auto scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100">
<button className="px-5 py-1.5 rounded-full bg-white shadow-sm border border-neutral-200/50 text-xs font-medium text-neutral-900 transition-all">
                        All Works
                    </button>
<button className="px-5 py-1.5 rounded-full text-xs font-normal text-neutral-500 hover:text-neutral-900 transition-all">
                        Interiors
                    </button>
<button className="px-5 py-1.5 rounded-full text-xs font-normal text-neutral-500 hover:text-neutral-900 transition-all">
                        Exteriors
                    </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<a className="group block cursor-pointer scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out" href="#">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 mb-5 relative">
<img alt="Oakwood Residence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-1">Oakwood Residence</h3>
<p className="text-sm font-normal text-neutral-500">Beverly Hills, CA</p>
</div>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>

<a className="group block cursor-pointer md:mt-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200" href="#">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 mb-5 relative">
<img alt="Valley Pavilion" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-1">Valley Pavilion</h3>
<p className="text-sm font-normal text-neutral-500">Studio City, CA</p>
</div>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>

<a className="group block cursor-pointer scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out" href="#">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 mb-5 relative">
<img alt="Canyon Retreat" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-1">Canyon Retreat</h3>
<p className="text-sm font-normal text-neutral-500">Malibu, CA</p>
</div>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>

<a className="group block cursor-pointer md:mt-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200" href="#">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-neutral-200 mb-5 relative">
<img alt="Minimalist Loft" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1400&amp;q=80"/>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-1">Minimalist Loft</h3>
<p className="text-sm font-normal text-neutral-500">Downtown LA, CA</p>
</div>
<iconify-icon className="text-xl text-neutral-400 group-hover:text-neutral-900 transition-colors" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</a>
</div>
<div className="mt-16 text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<a className="inline-flex items-center justify-center h-10 px-6 rounded-full bg-white border border-neutral-200 text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors shadow-sm" href="#">
                    View Complete Archive
                </a>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-900 text-white overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-6">Our Approach</h2>
<p className="text-base text-neutral-400 font-normal leading-relaxed max-w-md">
                        We believe that rigorous design process yields intuitive spaces. Our methodology ensures that every project is a direct response to its context and the lives of its inhabitants.
                    </p>
</div>
<div className="flex flex-col">

<div className="group py-6 border-b border-neutral-800 flex items-start gap-6 cursor-default scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100">
<span className="text-sm font-medium text-neutral-500 font-mono w-6 pt-1">01</span>
<div>
<h4 className="text-xl font-medium tracking-tight mb-2 group-hover:text-neutral-300 transition-colors">Site &amp; Context</h4>
<p className="text-sm font-normal text-neutral-400 leading-relaxed">Comprehensive analysis of the physical environment, micro-climate, and surrounding architectural vernacular to inform initial concepts.</p>
</div>
</div>

<div className="group py-6 border-b border-neutral-800 flex items-start gap-6 cursor-default scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
<span className="text-sm font-medium text-neutral-500 font-mono w-6 pt-1">02</span>
<div>
<h4 className="text-xl font-medium tracking-tight mb-2 group-hover:text-neutral-300 transition-colors">Spatial Planning</h4>
<p className="text-sm font-normal text-neutral-400 leading-relaxed">Developing logical flow and structural volume. We prioritize natural light, sightlines, and practical living requirements.</p>
</div>
</div>

<div className="group py-6 border-b border-neutral-800 flex items-start gap-6 cursor-default scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300">
<span className="text-sm font-medium text-neutral-500 font-mono w-6 pt-1">03</span>
<div>
<h4 className="text-xl font-medium tracking-tight mb-2 group-hover:text-neutral-300 transition-colors">Materiality</h4>
<p className="text-sm font-normal text-neutral-400 leading-relaxed">Selecting tactile, enduring materials that age gracefully and ground the structure in its natural surroundings.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto overflow-hidden" id="contact">
<div className="max-w-2xl mx-auto w-full">
<div className="mb-12 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Start a Project</h2>
<p className="text-base text-neutral-500 font-normal">Tell us about your property and vision. We will be in touch shortly to discuss the possibilities.</p>
</div>
<form className="space-y-8 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500" htmlFor="first-name">First Name</label>
<input className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900 transition-colors" id="first-name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500" htmlFor="last-name">Last Name</label>
<input className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900 transition-colors" id="last-name" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500" htmlFor="email-contact">Email Address</label>
<input className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900 transition-colors" id="email-contact" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-500" htmlFor="message">Project Details</label>
<textarea className="w-full bg-transparent border-b border-neutral-300 py-2 text-sm text-neutral-900 outline-none focus:border-neutral-900 transition-colors resize-none" id="message" required="" rows="4"></textarea>
</div>
<div className="pt-4">
<button className="inline-flex items-center justify-center h-10 px-8 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-colors w-full md:w-auto" type="submit">
                            Submit Inquiry
                        </button>
</div>
</form>
</div>
</section>
</main>

<footer className="pt-24 pb-8 px-6 md:px-12 max-w-screen-2xl mx-auto border-t border-neutral-200/50 overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
<div className="lg:col-span-2 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out">
<a className="text-2xl font-semibold tracking-tighter uppercase text-neutral-900 block mb-6" href="#">
                    M O V E X .
                </a>
<p className="text-sm text-neutral-500 max-w-xs mb-8">
                    An architectural practice dedicated to the art of residential living spaces.
                </p>

<form className="max-w-sm relative group">
<label className="sr-only" htmlFor="newsletter">Subscribe to journal</label>
<input className="w-full bg-transparent border-b border-neutral-300 py-2.5 pl-0 pr-8 text-sm text-neutral-900 outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400" id="newsletter" placeholder="Subscribe to our journal" required="" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 transition-colors" type="submit">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
<div className="flex flex-col space-y-4 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-100">
<h5 className="text-xs font-medium text-neutral-900 uppercase tracking-widest mb-2">Studio</h5>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">About Us</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Team</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Careers</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Press</a>
</div>
<div className="flex flex-col space-y-4 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-200">
<h5 className="text-xs font-medium text-neutral-900 uppercase tracking-widest mb-2">Connect</h5>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Instagram</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Pinterest</a>
<a className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors" href="#">hello@movex.studio</a>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-200/50 scroll-reveal opacity-0 translate-y-8 transition-all duration-1000 ease-out delay-300">
<p className="text-xs text-neutral-400 mb-4 md:mb-0">
                © 2024 Movex Architecture Studio. All rights reserved.
            </p>
<div className="flex items-center space-x-6">
<a className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-400 hover:text-neutral-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
