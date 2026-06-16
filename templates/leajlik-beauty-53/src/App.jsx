import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();
        
        // Smooth Reveal on Scroll Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-fade-up').forEach((el) => {
            // el.style.animationPlayState = 'paused'; // Uncomment to pause until scroll
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5728dc1c-bd62-44f1-8064-53a5f40e4e62_320w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-neutral-50 to-neutral-100"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-neutral-100/50 blur-[100px] rounded-full opacity-60"></div>
</div>

<nav className="fixed w-full z-50 top-0 transition-all duration-300 border-b border-transparent bg-white/80 backdrop-blur-md">
<div className="flex h-20 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<button className="md:hidden p-2 -ml-2 text-neutral-500 hover:text-neutral-900">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="hover:text-neutral-900 transition-colors" href="#shop">E-Shop</a>
<a className="hover:text-neutral-900 transition-colors" href="#about">About</a>
</div>

<a className="absolute left-1/2 -translate-x-1/2 group" href="#">
<div className="flex flex-col items-center">
<svg className="transition-transform duration-500 group-hover:scale-105 w-[40px] h-[40px]" data-icon-replaced="true" fill="none" height="40" strokeWidth="2" style={{width: '40px', height: '40px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 100 100" width="40" xmlns="http://www.g.org/2000/svg">
<path className="" d="M65 15 L35 65 C25 85 15 75 25 55 L75 25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path>
</svg>
</div>
</a>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors" href="#">
<span>Gift Cards</span>
</a>
<a className="hidden md:flex items-center justify-center px-5 py-2 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md" href="#">
                    Book Now
                </a>
<button className="md:hidden p-2 -mr-2 text-neutral-900">
<svg className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</button>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-20 relative">

<section className="max-w-6xl mx-auto px-6 text-center">
<div className="animate-fade-up" style={{animationPlayState: 'running'}}>
<span className="inline-flex items-center px-3 py-1 mb-6 text-xs font-medium tracking-wider uppercase text-neutral-500 border border-neutral-200 rounded-full bg-white/50 backdrop-blur-sm">

<span className="w-1.5 h-1.5 rounded-full bg-[#F37021] mr-2"></span>
                    Premium Beauty Services
                </span>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-playfair tracking-tight text-neutral-900 leading-[0.9] mb-8">
                    Beauty,<br/>Refined.
                </h1>
<p className="max-w-xl mx-auto text-lg md:text-xl text-neutral-500 font-light leading-relaxed mb-10">
                    Experience Leajlik. A sanctuary for modern aesthetics, tailored treatments, and effortless elegance.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
<button className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full transition-all hover:bg-neutral-800 hover:scale-[1.02] shadow-lg shadow-neutral-200/50">
<span className="font-medium">Book Appointment</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full sm:w-auto group flex items-center justify-center gap-3 px-8 py-4 bg-white text-neutral-900 border border-neutral-200 rounded-full transition-all hover:border-neutral-300 hover:bg-neutral-50">
<svg className="lucide lucide-message-circle w-4 h-4 text-neutral-400 group-hover:text-[#F37021] transition-colors" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="font-medium">WhatsApp Us</span>
</button>
</div>
</div>
</section>

<section className="mt-24 max-w-6xl mx-auto px-6 animate-fade-up delay-100" style={{animationPlayState: 'running'}}>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden">
<div className="bg-white p-8 flex flex-col items-center text-center group hover:bg-neutral-50 transition-colors">
<div className="mb-4 p-3 rounded-full bg-neutral-100 text-neutral-900">
<svg className="lucide lucide-calendar-check w-6 h-6 stroke-[1.5]" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-playfair font-medium text-neutral-900 mb-1">Easy Booking</h3>
<p className="text-sm text-neutral-500">Reserve your spot online or via chat instantly.</p>
</div>
<div className="bg-white p-8 flex flex-col items-center text-center group hover:bg-neutral-50 transition-colors">
<div className="mb-4 p-3 rounded-full bg-neutral-100 text-neutral-900">
<svg className="lucide lucide-gift w-6 h-6 stroke-[1.5]" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<h3 className="text-lg font-playfair font-medium text-neutral-900 mb-1">Send a Gift</h3>
<p className="text-sm text-neutral-500">Digital gift cards for those you cherish.</p>
<a className="mt-4 text-xs font-medium underline decoration-neutral-300 underline-offset-4 hover:text-neutral-600 hover:decoration-[#F37021] transition-all" href="#">Purchase Now</a>
</div>
<div className="bg-white p-8 flex flex-col items-center text-center group hover:bg-neutral-50 transition-colors">
<div className="mb-4 p-3 rounded-full bg-neutral-100 text-neutral-900">
<svg className="lucide lucide-shopping-bag w-6 h-6 stroke-[1.5]" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<h3 className="text-lg font-playfair font-medium text-neutral-900 mb-1">Curated Shop</h3>
<p className="text-sm text-neutral-500">Professional products delivered to your door.</p>
</div>
</div>
</section>

<section className="mt-32 max-w-6xl mx-auto px-6" id="services">
<div className="flex items-end justify-between mb-12 animate-fade-up delay-200" style={{animationPlayState: 'running'}}>
<div>
<h2 className="text-3xl md:text-4xl font-playfair font-medium tracking-tight text-neutral-900">Our Menu</h2>
<p className="mt-2 text-neutral-500 font-light">Expert care designed for your well-being.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium border-b border-neutral-300 pb-0.5 hover:text-neutral-600 hover:border-neutral-900 transition-all" href="#">
                    View Full Price List <svg className="lucide lucide-arrow-up-right w-3 h-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-up delay-200" style={{animationPlayState: 'running'}}>

<div className="group p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-all duration-300 cursor-pointer flex flex-col justify-between h-64">
<div className="flex justify-between items-start">
<svg className="lucide lucide-scissors w-8 h-8 stroke-[1.2] text-neutral-900" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
<span className="opacity-0 group-hover:opacity-100 transition-opacity">

<svg className="lucide lucide-arrow-right w-5 h-5 text-neutral-400 group-hover:text-[#F37021] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<div>
<h3 className="text-xl font-playfair font-medium text-neutral-900">Hair Artistry</h3>
<ul className="mt-4 space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Cuts &amp; Styling</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Color Correction</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Treatments</li>
</ul>
</div>
</div>

<div className="group p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-all duration-300 cursor-pointer flex flex-col justify-between h-64">
<div className="flex justify-between items-start">
<svg className="lucide lucide-sparkles w-8 h-8 stroke-[1.2] text-neutral-900" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-right w-5 h-5 text-neutral-400 group-hover:text-[#F37021] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<div>
<h3 className="text-xl font-playfair font-medium text-neutral-900">Facial Spa</h3>
<ul className="mt-4 space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Deep Cleansing</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Hydrafacial</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Anti-aging</li>
</ul>
</div>
</div>

<div className="group p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-all duration-300 cursor-pointer flex flex-col justify-between h-64">
<div className="flex justify-between items-start">
<svg className="lucide lucide-palette w-8 h-8 stroke-[1.2] text-neutral-900" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<span className="opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-right w-5 h-5 text-neutral-400 group-hover:text-[#F37021] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<div>
<h3 className="text-xl font-playfair font-medium text-neutral-900">Nail Care</h3>
<ul className="mt-4 space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Manicure</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Pedicure</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Nail Art</li>
</ul>
</div>
</div>

<div className="group p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-all duration-300 cursor-pointer flex flex-col justify-between h-64">
<div className="flex justify-between items-start">
<svg className="lucide lucide-heart-handshake w-8 h-8 stroke-[1.2] text-neutral-900" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
<span className="opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-right w-5 h-5 text-neutral-400 group-hover:text-[#F37021] transition-colors" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</div>
<div>
<h3 className="text-xl font-playfair font-medium text-neutral-900">Wellness</h3>
<ul className="mt-4 space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Massage</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Body Scrubs</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-neutral-300"></span>Consultation</li>
</ul>
</div>
</div>
</div>
</section>

<section className="mt-32 px-6" id="shop">
<div className="max-w-6xl mx-auto bg-neutral-900 rounded-3xl overflow-hidden text-white relative animate-fade-up delay-200" style={{animationPlayState: 'running'}}>

<div className="absolute -top-24 -right-24 w-96 h-96 bg-neutral-800 rounded-full opacity-50 blur-3xl"></div>
<div className="absolute -bottom-24 -left-24 w-96 h-96 bg-neutral-800 rounded-full opacity-50 blur-3xl"></div>
<div className="relative z-10 py-20 px-8 md:px-16 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-800/50 backdrop-blur mb-8">

<span className="w-2 h-2 rounded-full bg-[#F37021] animate-pulse"></span>
<span className="text-xs font-medium tracking-wide uppercase text-neutral-300">Shop Online</span>
</div>
<h2 className="text-4xl md:text-6xl font-playfair tracking-tight mb-6">Bring the Salon Home</h2>
<p className="max-w-xl mx-auto text-neutral-400 text-lg font-light mb-10">
                        Discover our curated selection of premium skincare, haircare, and wellness products used by our professionals.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 bg-white text-neutral-900 rounded-full font-medium hover:bg-neutral-100 transition-colors">
                            Visit E-Shop
                        </button>
<button className="px-8 py-3 border border-neutral-700 text-white rounded-full font-medium hover:bg-neutral-800 transition-colors">
                            View Best Sellers
                        </button>
</div>
</div>
</div>
</section>

<footer className="mt-32 border-t border-neutral-200 bg-white">
<div className="max-w-6xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<svg className="text-neutral-900" fill="none" height="30" viewbox="0 0 100 100" width="30">
<path d="M65 15 L35 65 C25 85 15 75 25 55 L75 25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6"></path>
</svg>
<span className="text-2xl font-playfair font-medium tracking-tight">Leajlik</span>
</div>
<p className="text-neutral-500 font-light max-w-sm">
                            Redefining beauty standards through exceptional service and attention to detail. Join us for a transformative experience.
                        </p>
<div className="flex gap-4 mt-6">
<a className="p-2 rounded-full border border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-all" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="p-2 rounded-full border border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-all" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="p-2 rounded-full border border-neutral-200 text-neutral-500 hover:border-neutral-900 hover:text-neutral-900 transition-all" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="font-medium text-sm mb-6 text-neutral-900">Explore</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Services Menu</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Book Appointment</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Purchase Gift Card</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-6 text-neutral-900">Contact</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-4 h-4 mt-0.5 shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>123 Beauty Avenue,Fashion District, NY</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-phone w-4 h-4 shrink-0" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>+1 (555) 000-0000</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-mail w-4 h-4 shrink-0" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>hello@leajlik.com</span>
</li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 Leajlik Salon. All rights reserved.</p>
<div className="flex gap-6 text-xs text-neutral-400">
<a className="hover:text-neutral-900" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>


    </>
  );
}
