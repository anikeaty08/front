import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        // Simple Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
                menuBtn.innerHTML = '<span class="iconify" data-icon="lucide:x" data-width="24" data-height="24"></span>';
            } else {
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'auto';
                menuBtn.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="24" data-height="24"></span>';
            }
        });

        // Close menu when a link is clicked
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = 'auto';
                menuBtn.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="24" data-height="24"></span>';
            });
        });

        // Sticky Nav Blur Effect on Scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('bg-zinc-950/90', 'border-white/5');
                nav.classList.remove('bg-zinc-950/0', 'border-transparent');
            } else {
                nav.classList.remove('bg-zinc-950/90', 'border-white/5');
                nav.classList.add('bg-zinc-950/0', 'border-transparent');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="K7xzrAoejHe2lHXqTJzm"></div></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16 md:h-20">

<a className="text-lg md:text-xl font-semibold tracking-tighter text-white uppercase z-50" href="#">
                    Mankind &amp; Co
                </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-white transition-colors" href="#blog">Journal</a>
<a className="px-4 py-2 bg-white text-zinc-950 rounded-full hover:bg-zinc-200 transition-colors font-semibold" href="#contact">
                        Book Appointment
                    </a>
</div>

<button className="md:hidden text-white z-50 focus:outline-none" id="menu-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="fixed inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center space-y-8 opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-menu">
<a className="text-2xl text-white font-medium tracking-tight mobile-link" href="#about">About</a>
<a className="text-2xl text-white font-medium tracking-tight mobile-link" href="#services">Services</a>
<a className="text-2xl text-white font-medium tracking-tight mobile-link" href="#reviews">Reviews</a>
<a className="text-2xl text-white font-medium tracking-tight mobile-link" href="#blog">Journal</a>
<a className="text-2xl text-white font-medium tracking-tight mobile-link" href="#contact">Contact</a>
<a className="px-8 py-3 bg-white text-zinc-950 rounded-full font-semibold mobile-link" href="#">Book Now</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-zinc-900 to-transparent opacity-50 -z-10 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-400 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Open daily until 18:30
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-6 leading-[1.1]">
                Precision Cuts.<br/>
                Timeless Style.
            </h1>
<p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed font-light">
                Experience refined grooming at Mankind &amp; Co. We blend traditional craftsmanship with modern aesthetics to elevate your confidence.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-zinc-950 font-semibold rounded-md hover:bg-zinc-200 transition-all flex items-center justify-center gap-2" href="#contact">
                    Book an Appointment
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-md hover:border-zinc-700 transition-all text-center" href="#services">
                    View Services
                </a>
</div>
</div>
</header>

<section className="px-6 pb-24">
<div className="max-w-7xl mx-auto">
<div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden border border-white/10 bg-zinc-900 group">

<img alt="Mankind &amp; Co Shop Interior" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=2948&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
<p className="text-white text-sm uppercase tracking-widest font-medium opacity-80">Located in Tallaght</p>
<p className="text-white text-xl font-medium mt-1">Belgard Square West</p>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-4">
<div className="flex text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star-half" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-sm font-medium">
<span className="text-white block">4.6/5 Rating</span>
<span className="text-zinc-500">Based on 62 reviews</span>
</div>
</div>
<div className="h-px w-full md:w-px md:h-12 bg-white/10"></div>
<div className="text-center md:text-left">
<p className="text-sm text-zinc-400 font-medium">Trusted by the Tallaght community</p>
</div>
<div className="h-px w-full md:w-px md:h-12 bg-white/10"></div>
<div className="flex items-center gap-6 opacity-40 grayscale">

<span className="text-lg font-bold tracking-tighter">BARBER<span className="font-light">CO</span></span>
<span className="text-lg font-bold tracking-tighter">TRIM<span className="font-light">MAG</span></span>
<span className="text-lg font-bold tracking-tighter">DUBLIN<span className="font-light">LIFE</span></span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold text-white tracking-tight">The Process</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-lg border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar-check-2" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4m8-4v4m5 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8M3 10h18m-5 10l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Book your appointment</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Reserve your spot online or call us directly. We value your time.</p>
</div>

<div className="group p-8 rounded-lg border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scissors" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Choose your style</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Consult with our experts to find a cut that suits your face shape.</p>
</div>

<div className="group p-8 rounded-lg border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-colors">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smile" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Walk out sharp</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Leave feeling refreshed, confident, and ready for anything.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900/30 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Services Menu</h2>
<p className="text-zinc-400 mb-8 leading-relaxed max-w-md">
                    Our services are designed for the modern man. Whether it's a quick tidy-up or a complete grooming package, we deliver consistency and quality.
                </p>
<div className="relative rounded-lg overflow-hidden h-64 md:h-80 w-full border border-white/10">
<img alt="Barber Tools" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="flex flex-col justify-center space-y-6">

<div className="flex justify-between items-baseline group border-b border-white/5 pb-4">
<div>
<h4 className="text-white font-medium text-lg group-hover:text-zinc-300 transition-colors">Haircut</h4>
<p className="text-xs text-zinc-500 mt-1">Consultation, wash, cut &amp; style</p>
</div>
<span className="text-white font-medium">€25</span>
</div>

<div className="flex justify-between items-baseline group border-b border-white/5 pb-4">
<div>
<div className="flex items-center gap-2">
<h4 className="text-white font-medium text-lg group-hover:text-zinc-300 transition-colors">Skin Fade</h4>
<span className="text-[10px] uppercase bg-white text-zinc-950 px-1.5 py-0.5 rounded font-bold tracking-wide">Popular</span>
</div>
<p className="text-xs text-zinc-500 mt-1">Zero/foil finish, sharp lines</p>
</div>
<span className="text-white font-medium">€30</span>
</div>

<div className="flex justify-between items-baseline group border-b border-white/5 pb-4">
<div>
<h4 className="text-white font-medium text-lg group-hover:text-zinc-300 transition-colors">Beard Trim</h4>
<p className="text-xs text-zinc-500 mt-1">Sculpting and line up</p>
</div>
<span className="text-white font-medium">€15</span>
</div>

<div className="flex justify-between items-baseline group border-b border-white/5 pb-4">
<div>
<h4 className="text-white font-medium text-lg group-hover:text-zinc-300 transition-colors">Hot Towel Shave</h4>
<p className="text-xs text-zinc-500 mt-1">Traditional straight razor shave</p>
</div>
<span className="text-white font-medium">€35</span>
</div>

<div className="flex justify-between items-baseline group pb-4">
<div>
<h4 className="text-white font-medium text-lg group-hover:text-zinc-300 transition-colors">The Mankind Full Package</h4>
<p className="text-xs text-zinc-500 mt-1">Haircut, beard trim &amp; hot towel</p>
</div>
<span className="text-white font-medium">€55</span>
</div>
<div className="pt-6">
<a className="inline-flex items-center text-sm font-medium text-white hover:text-zinc-300 transition-colors border-b border-transparent hover:border-zinc-300 pb-0.5" href="#contact">
                        Book Service <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden" id="reviews">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-12">Client Reviews</h2>
<div className="flex space-x-6 overflow-x-auto no-scrollbar pb-8">

<div className="min-w-[300px] md:min-w-[400px] p-6 rounded-lg bg-zinc-900 border border-white/5">
<div className="flex gap-1 text-white mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-zinc-300 mb-6 italic leading-relaxed">"Best barber in Tallaght. The attention to detail is unmatched. I walk out feeling like a new man every time."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-semibold text-white">JD</div>
<span className="text-sm font-medium text-white">John D.</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] p-6 rounded-lg bg-zinc-900 border border-white/5">
<div className="flex gap-1 text-white mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-zinc-300 mb-6 italic leading-relaxed">"Great atmosphere and professional service. The skin fade is always on point. Highly recommend Mankind &amp; Co."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-semibold text-white">MM</div>
<span className="text-sm font-medium text-white">Michael M.</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] p-6 rounded-lg bg-zinc-900 border border-white/5">
<div className="flex gap-1 text-white mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify iconify--lucide" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-zinc-300 mb-6 italic leading-relaxed">"Professional, clean, and top-class skills. It's hard to find a barber who actually listens to what you want."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-semibold text-white">CO</div>
<span className="text-sm font-medium text-white">Conor O.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5" id="about">
<div className="max-w-4xl mx-auto text-center">
<span className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4 block">Our Philosophy</span>
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8">Craftsmanship in the heart of Tallaght.</h2>
<p className="text-lg text-zinc-400 leading-relaxed mb-10">
                At Mankind &amp; Co, we believe that a haircut is more than just a routine—it's a ritual. 
                Located in Belgard Square, our mission is to provide a space where men can relax, connect, 
                and leave looking their absolute best. We combine old-school barbering values with contemporary techniques.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
<div className="text-center">
<h3 className="text-3xl font-semibold text-white mb-1">600+</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wider">Clients</p>
</div>
<div className="text-center">
<h3 className="text-3xl font-semibold text-white mb-1">5+</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wider">Years Exp.</p>
</div>
<div className="text-center">
<h3 className="text-3xl font-semibold text-white mb-1">7 Days</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wider">Open Weekly</p>
</div>
<div className="text-center">
<h3 className="text-3xl font-semibold text-white mb-1">100%</h3>
<p className="text-xs text-zinc-500 uppercase tracking-wider">Satisfaction</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="blog">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-white tracking-tight mb-2">The Journal</h2>
<p className="text-zinc-400">Insights on grooming, style, and culture.</p>
</div>
<a className="hidden md:inline-flex text-sm text-white border-b border-white/20 pb-1 hover:border-white transition-colors" href="#">View All Articles</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-md border border-white/10 mb-4">
<img alt="Beard Care" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-zinc-500 font-medium mb-2 block">Grooming</span>
<h3 className="text-lg font-medium text-white group-hover:text-zinc-300 transition-colors mb-2">Essential Beard Care Routine</h3>
<p className="text-sm text-zinc-400 line-clamp-2">How to maintain a healthy, sharp-looking beard between visits.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-md border border-white/10 mb-4">
<img alt="Fade Styles" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&amp;w=2728&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-zinc-500 font-medium mb-2 block">Style</span>
<h3 className="text-lg font-medium text-white group-hover:text-zinc-300 transition-colors mb-2">Which Fade Suits You?</h3>
<p className="text-sm text-zinc-400 line-clamp-2">Understanding the difference between skin, drop, and taper fades.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-md border border-white/10 mb-4">
<img alt="Hair Products" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-zinc-500 font-medium mb-2 block">Products</span>
<h3 className="text-lg font-medium text-white group-hover:text-zinc-300 transition-colors mb-2">Pomade vs. Clay vs. Wax</h3>
<p className="text-sm text-zinc-400 line-clamp-2">Choosing the right product for your hair texture and desired hold.</p>
</article>

<article className="group cursor-pointer">
<div className="aspect-[4/3] w-full overflow-hidden rounded-md border border-white/10 mb-4">
<img alt="Barber Pole" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-zinc-500 font-medium mb-2 block">Culture</span>
<h3 className="text-lg font-medium text-white group-hover:text-zinc-300 transition-colors mb-2">History of the Barber Pole</h3>
<p className="text-sm text-zinc-400 line-clamp-2">The surprising origins behind the iconic red, white, and blue symbol.</p>
</article>
</div>
</div>
</section>


<footer className="bg-zinc-950 pt-20 pb-10 px-6 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-xl font-semibold tracking-tighter text-white uppercase mb-6 block" href="#">Mankind &amp; Co</a>
<p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Setting the standard for male grooming in Dublin. Precision, style, and confidence in every cut.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-zinc-400">
<li className="flex items-start gap-2">
<svg aria-hidden="true" className="iconify mt-0.5 shrink-0 iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span>Apartment 6, Unit F2,Belgard Square West,Tallaght, Dublin<span className="text-zinc-600">(Near Talbot House)</span></span>
</li>
<li className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
<svg aria-hidden="true" className="iconify shrink-0 iconify--lucide" data-icon="lucide:phone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            (01) 561 6665
                        </li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4">Opening Hours</h4>
<ul className="space-y-2 text-sm text-zinc-400">
<li className="flex justify-between">
<span>Monday - Friday</span>
<span className="text-white">09:30 - 18:30</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-white">09:00 - 18:00</span>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4">Ready to look sharp?</h4>
<p className="text-zinc-500 text-sm mb-4">Book your appointment online in seconds.</p>
<a className="block w-full py-3 bg-white text-zinc-950 text-center font-semibold rounded hover:bg-zinc-200 transition-colors" href="#">
                        Book Appointment
                    </a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-xs">© 2023 Mankind &amp; Co Barber Shop. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
