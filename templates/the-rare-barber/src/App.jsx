import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
        
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/50">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="text-amber-500">THE</span> RARE BARBER
                </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#home">Home</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex px-5 py-2.5 bg-amber-500 text-neutral-950 text-sm font-medium rounded hover:bg-amber-400 transition-colors" href="#contact">
                    Book Now
                </a>
<button className="md:hidden text-white" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>

<div className="hidden md:hidden bg-neutral-900 border-t border-neutral-800" id="mobileMenu">
<div className="px-6 py-4 flex flex-col gap-4">
<a className="text-sm text-neutral-300 hover:text-white" href="#home">Home</a>
<a className="text-sm text-neutral-300 hover:text-white" href="#about">About</a>
<a className="text-sm text-neutral-300 hover:text-white" href="#services">Services</a>
<a className="text-sm text-neutral-300 hover:text-white" href="#gallery">Gallery</a>
<a className="text-sm text-neutral-300 hover:text-white" href="#contact">Contact</a>
<a className="px-5 py-2.5 bg-amber-500 text-neutral-950 text-sm font-medium rounded text-center" href="#contact">Book Now</a>
</div>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden relative items-center justify-center" id="home">
<div className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1920&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-center max-w-5xl z-10 mr-auto ml-auto pt-20 pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-8">
<svg className="lucide lucide-scissors w-4 h-4 text-amber-500" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
<span className="text-xs text-amber-500 font-medium tracking-wide uppercase">Premium Grooming Since 2015</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Where Style Meets <span className="text-amber-500">Precision</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light">
                Experience the art of traditional barbering with a modern twist. Premium cuts, hot towel shaves, and grooming excellence.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-amber-500 text-neutral-950 font-medium rounded hover:bg-amber-400 transition-all hover:scale-105" href="#contact">
                    Book Your Appointment
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 text-white font-medium rounded hover:border-neutral-500 transition-colors" href="#services">
                    View Services
                </a>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-amber-500/30 transition-colors">
<svg className="lucide lucide-scissors w-8 h-8 text-amber-500" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
<span className="text-sm text-neutral-300">Haircuts</span>
</div>
<div className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-amber-500/30 transition-colors">
<svg className="lucide lucide-sparkles w-8 h-8 text-amber-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm text-neutral-300">Hot Shaves</span>
</div>
<div className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-amber-500/30 transition-colors">
<svg className="lucide lucide-droplets w-8 h-8 text-amber-500" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<span className="text-sm text-neutral-300">Beard Care</span>
</div>
<div className="flex flex-col items-center gap-3 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg hover:border-amber-500/30 transition-colors">
<svg className="lucide lucide-gem w-8 h-8 text-amber-500" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
<span className="text-sm text-neutral-300">VIP Treatment</span>
</div>
</div>
</div>
<div className="-translate-x-1/2 animate-bounce absolute bottom-10 left-1/2">
<svg className="lucide lucide-chevron-down text-neutral-500 w-6 h-6" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-900" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square overflow-hidden rounded-lg">
<img alt="Barber at work" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1643264784408-46018714f4bd?w=1600&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-amber-500 p-8 rounded-lg hidden md:block">
<p className="text-4xl font-semibold text-neutral-950 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>10+</p>
<p className="text-sm text-neutral-900">Years of Excellence</p>
</div>
</div>
<div className="">
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">About Us</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Crafting Confidence, One Cut at a Time
                    </h2>
<p className="text-neutral-400 mb-6 leading-relaxed">
                        Founded in 2015, The Rare Barber has established itself as a premier destination for men's grooming. Our master barbers combine traditional techniques with contemporary styles to deliver an unparalleled experience.
                    </p>
<p className="text-neutral-400 mb-8 leading-relaxed">
                        We believe every man deserves to look and feel his best. Our mission is to provide exceptional grooming services in a welcoming atmosphere where craftsmanship and attention to detail are paramount.
                    </p>
<div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-neutral-800">
<div>
<p className="text-3xl font-semibold text-amber-500 tracking-tight">5000+</p>
<p className="text-sm text-neutral-500">Happy Clients</p>
</div>
<div>
<p className="text-3xl font-semibold text-amber-500 tracking-tight">8</p>
<p className="text-sm text-neutral-500">Expert Barbers</p>
</div>
<div>
<p className="text-3xl font-semibold text-amber-500 tracking-tight">15+</p>
<p className="text-sm text-neutral-500">Awards Won</p>
</div>
</div>
<div className="mt-8 flex items-center gap-4">
<svg className="lucide lucide-award w-10 h-10 text-amber-500" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<div>
<p className="font-medium text-white">Excellence in Craftsmanship</p>
<p className="text-sm text-neutral-500">Voted Best Barbershop 2024</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Our Services</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Premium Grooming Services
                </h2>
<p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                    From classic cuts to luxury treatments, we offer a full range of services tailored to your style.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-amber-500/50 transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg className="lucide lucide-scissors w-7 h-7 text-amber-500" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3">Classic Haircut</h3>
<p className="text-neutral-400 text-sm mb-4">Precision cut with consultation, shampoo, and styling. Tailored to your face shape and lifestyle.</p>
<div className="flex items-center justify-between">
<span className="text-2xl font-semibold text-amber-500">R150</span>
<span className="text-xs text-neutral-500">45 min</span>
</div>
</div>

<div className="group p-8 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-amber-500/50 transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg className="lucide lucide-sparkles w-7 h-7 text-amber-500" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-3">Hot Towel Shave</h3>
<p className="text-neutral-400 text-sm mb-4">Traditional straight razor shave with hot towels, premium oils, and soothing aftercare treatment.</p>
<div className="flex items-center justify-between">
<span className="text-2xl font-semibold text-amber-500">R200</span>
<span className="text-xs text-neutral-500">60 min</span>
</div>
</div>

<div className="group p-8 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-amber-500/50 transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg className="lucide lucide-user w-7 h-7 text-amber-500" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-medium mb-3">Beard Trim &amp; Shape</h3>
<p className="text-neutral-400 text-sm mb-4">Expert beard sculpting and trimming with hot towel treatment and premium beard oil application.</p>
<div className="flex items-center justify-between">
<span className="text-2xl font-semibold text-amber-500">R100</span>
<span className="text-xs text-neutral-500">30 min</span>
</div>
</div>

<div className="group p-8 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-amber-500/50 transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg className="lucide lucide-crown w-7 h-7 text-amber-500" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3">The Rare Experience</h3>
<p className="text-neutral-400 text-sm mb-4">Complete grooming package: haircut, hot shave, beard care, facial massage, and styling.</p>
<div className="flex items-center justify-between">
<span className="text-2xl font-semibold text-amber-500">R450</span>
<span className="text-xs text-neutral-500">90 min</span>
</div>
</div>

<div className="group p-8 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-amber-500/50 transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg className="lucide lucide-zap w-7 h-7 text-amber-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium mb-3">Hair Design &amp; Color</h3>
<p className="text-neutral-400 text-sm mb-4">Custom hair designs, patterns, and professional coloring services for the bold gentleman.</p>
<div className="flex items-center justify-between">
<span className="text-2xl font-semibold text-amber-500">R250+</span>
<span className="text-xs text-neutral-500">60+ min</span>
</div>
</div>

<div className="group p-8 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-amber-500/50 transition-all hover:-translate-y-1">
<div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<svg className="lucide lucide-smile w-7 h-7 text-amber-500" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-xl font-medium mb-3">Kids Haircut</h3>
<p className="text-neutral-400 text-sm mb-4">Gentle, patient service for our younger clients. Fun experience with professional results.</p>
<div className="flex items-center justify-between">
<span className="text-2xl font-semibold text-amber-500">R100</span>
<span className="text-xs text-neutral-500">30 min</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-900" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Our Work</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Gallery of Excellence
                </h2>
<p className="text-neutral-400 mt-4 max-w-2xl mx-auto">
                    Browse our portfolio showcasing the artistry and skill of our master barbers.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-4">
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Haircut style 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&amp;q=80"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Haircut style 2" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1633990700440-30a1f452a95b?w=800&amp;q=80"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer md:row-span-2">
<img alt="Haircut style 3" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1545921772-ec7d64bc0bba?w=800&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden group cursor-pointer rounded-lg">
<img alt="Haircut style 4" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1662123844664-7235ecbb4e53?w=800&amp;q=80"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Haircut style 5" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1643837832861-ba85d3b046d9?w=800&amp;q=80"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Barbershop interior" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1616044306381-488214cf2fd3?w=800&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden group cursor-pointer rounded-lg">
<img alt="Barber tools" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544215897-e4a5eeae9cc1?w=800&amp;q=80"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Haircut style 6" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1705976062088-5433328c2dcd?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Testimonials</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    What Our Clients Say
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 bg-neutral-900 border border-neutral-800 rounded-lg">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 mb-6">"Best barbershop I've ever been to. The attention to detail is incredible, and the atmosphere is unmatched. I won't go anywhere else."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
<span className="text-amber-500 font-medium">TM</span>
</div>
<div>
<p className="text-sm font-medium">Thabo Mokoena</p>
<p className="text-xs text-neutral-500">Regular Client</p>
</div>
</div>
</div>
<div className="p-8 bg-neutral-900 border border-neutral-800 rounded-lg">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 mb-6">"The Rare Experience package is worth every rand. Hot towel shave, perfect fade, and left feeling like a new man. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
<span className="text-amber-500 font-medium">SN</span>
</div>
<div>
<p className="text-sm font-medium">Sipho Ndlovu</p>
<p className="text-xs text-neutral-500">VIP Member</p>
</div>
</div>
</div>
<div className="p-8 bg-neutral-900 border border-neutral-800 rounded-lg">
<div className="flex items-center gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-500 fill-amber-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-neutral-300 mb-6">"Professional, skilled, and genuinely passionate about their craft. My beard has never looked better. These guys are true artists."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
<span className="text-amber-500 font-medium">KM</span>
</div>
<div>
<p className="text-sm font-medium">Kabelo Mthembu</p>
<p className="text-xs text-neutral-500">3 Year Client</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-900" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div className="">
<span className="text-amber-500 text-sm font-medium tracking-wide uppercase">Contact Us</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mt-4 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Book Your Visit
                    </h2>
<p className="text-neutral-400 mb-10">
                        Ready to experience the difference? Book your appointment today or reach out with any questions.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-map-pin w-5 h-5 text-amber-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="font-medium mb-1">Visit Us</h4>
<p className="text-neutral-400 text-sm">123 Nelson Mandela Drive, Suite 100Sandton, Johannesburg 2196</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-phone w-5 h-5 text-amber-500" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h4 className="font-medium mb-1">Call Us</h4>
<p className="text-neutral-400 text-sm">011 123 4567</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-mail w-5 h-5 text-amber-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h4 className="font-medium mb-1">Email Us</h4>
<p className="text-neutral-400 text-sm">hello@therarebarber.co.za</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-clock w-5 h-5 text-amber-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h4 className="font-medium mb-1">Hours</h4>
<p className="text-neutral-400 text-sm">Mon - Fri: 9AM - 8PMSat: 9AM - 6PM | Sun: 10AM - 4PM</p>
</div>
</div>
</div>
</div>
<div className="bg-neutral-950 p-8 md:p-10 rounded-lg border border-neutral-800">
<h3 className="text-2xl font-semibold tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Send Us a Message</h3>
<form className="space-y-5">
<div>
<label className="block text-sm text-neutral-400 mb-2">Full Name</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors" placeholder="Thabo Mokoena" type="text"/>
</div>
<div className="grid sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm text-neutral-400 mb-2">Email</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors" placeholder="thabo@example.co.za" type="email"/>
</div>
<div>
<label className="block text-sm text-neutral-400 mb-2">Phone</label>
<input className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors" placeholder="082 000 0000" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm text-neutral-400 mb-2">Service Interested In</label>
<select className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none cursor-pointer">
<option value="">Select a service</option>
<option value="haircut">Classic Haircut - R150</option>
<option value="shave">Hot Towel Shave - R200</option>
<option value="beard">Beard Trim &amp; Shape - R100</option>
<option value="rare">The Rare Experience - R450</option>
<option value="design">Hair Design &amp; Color - R250+</option>
<option value="kids">Kids Haircut - R100</option>
</select>
</div>
<div>
<label className="block text-sm text-neutral-400 mb-2">Message</label>
<textarea className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded text-white placeholder-neutral-600 focus:outline-none focus:border-amber-500 transition-colors resize-none" placeholder="Tell us about your grooming needs..." rows="4"></textarea>
</div>
<button className="w-full px-6 py-4 bg-amber-500 text-neutral-950 font-medium rounded hover:bg-amber-400 transition-colors" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-800">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid md:grid-cols-4 gap-10">
<div className="md:col-span-2">
<a className="text-2xl font-semibold tracking-tighter" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>
<span className="text-amber-500">THE</span> RARE BARBER
                    </a>
<p className="text-neutral-500 mt-4 max-w-sm text-sm">
                        Premium grooming services for the modern gentleman. Where style meets precision, and every cut tells a story.
                    </p>
<div className="flex items-center gap-4 mt-6">
<a className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center hover:border-amber-500/50 transition-colors" href="#">
<svg className="lucide lucide-instagram w-4 h-4 text-neutral-400" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center hover:border-amber-500/50 transition-colors" href="#">
<svg className="lucide lucide-facebook w-4 h-4 text-neutral-400" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center hover:border-amber-500/50 transition-colors" href="#">
<svg className="lucide lucide-twitter w-4 h-4 text-neutral-400" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="font-medium mb-4">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-amber-500 transition-colors" href="#home">Home</a></li>
<li><a className="text-sm text-neutral-500 hover:text-amber-500 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-neutral-500 hover:text-amber-500 transition-colors" href="#services">Services</a></li>
<li><a className="text-sm text-neutral-500 hover:text-amber-500 transition-colors" href="#gallery">Gallery</a></li>
<li><a className="text-sm text-neutral-500 hover:text-amber-500 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-amber-500 transition-colors" href="#services">Classic Haircut</a></li>
<li><a className="text-sm text-neutral-500 hover:text-amber-500 transition-colors" href="#services">Hot Towel Shave</a></li>
<li><a className="text-sm text-neutral-500 hover:text-amber-500 transition-colors" href="#services">Beard Care</a></li>
<li><a className="text-sm text-neutral-500 hover:text-amber-500 transition-colors" href="#services">VIP Experience</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-600">© 2025 The Rare Barber. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
