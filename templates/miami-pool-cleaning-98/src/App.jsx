import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Language Switcher Logic
        const langToggle = document.getElementById('lang-toggle');
        const body = document.body;
        
        // Load saved preference
        const savedLang = localStorage.getItem('miamiPoolsLang') || 'es';
        if (savedLang === 'en') {
            body.classList.remove('lang-es');
            body.classList.add('lang-en');
        }

        langToggle.addEventListener('click', () => {
            if (body.classList.contains('lang-es')) {
                body.classList.remove('lang-es');
                body.classList.add('lang-en');
                localStorage.setItem('miamiPoolsLang', 'en');
            } else {
                body.classList.remove('lang-en');
                body.classList.add('lang-es');
                localStorage.setItem('miamiPoolsLang', 'es');
            }
        });

        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Intersection Observer for Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed z-50 transition-all duration-300 bg-[#fffff5]/95 border-sky-100 border-b top-0 right-0 left-0 shadow-sm backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-24 items-center justify-between">

<div className="flex-shrink-0 cursor-pointer group" onclick="window.scrollTo(0,0)">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-sky-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-waves w-6 h-6" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<span className="text-xl font-bold tracking-tight text-blue-900 font-geist">Miami<span className="text-sky-500 font-geist">Pools</span></span>
</div>
</div>

<nav className="hidden lg:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors" href="#services">
<span className="lang-es font-geist">Servicios</span><span className="lang-en font-geist">Services</span>
</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors" href="#testimonials">
<span className="lang-es font-geist">Testimonios</span><span className="lang-en font-geist">Testimonials</span>
</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors" href="#pricing">
<span className="lang-es font-geist">Precios</span><span className="lang-en font-geist">Pricing</span>
</a>
<a className="text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors" href="#guarantees">
<span className="lang-es font-geist">Garantías</span><span className="lang-en font-geist">Guarantees</span>
</a>
</nav>

<div className="flex items-center gap-4">

<button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 hover:bg-sky-100 transition-colors text-xs font-bold uppercase tracking-wider text-sky-600 border border-sky-200" id="lang-toggle">
<span className="lang-es font-geist">ES</span><span className="lang-en font-geist">EN</span>
<svg aria-hidden="true" className="lucide lucide-globe w-3.5 h-3.5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</button>

<a className="hidden lg:flex px-6 py-2.5 bg-sky-500 text-white text-sm font-bold rounded-full hover:bg-sky-600 transition-transform hover:scale-105 shadow-md shadow-sky-400/30 items-center gap-2" href="#contact">
<span className="lang-es font-geist">¡Hablemos!</span><span className="lang-en font-geist">Let's Talk!</span>
</a>

<button className="lg:hidden p-2 text-gray-600 hover:text-blue-500" id="mobile-menu-btn">
<svg aria-hidden="true" className="lucide lucide-menu w-7 h-7" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden border-b border-sky-100 px-4 py-6 space-y-4 shadow-xl absolute w-full rounded-b-3xl bg-[#f4f4f4]" id="mobile-menu">
<a className="block text-lg font-medium text-gray-700 pl-2 border-l-4 border-transparent hover:border-sky-400 hover:bg-sky-50 py-2 transition-all" href="#services">
<span className="lang-es font-geist">Servicios</span><span className="lang-en font-geist">Services</span>
</a>
<a className="block text-lg font-medium text-gray-700 pl-2 border-l-4 border-transparent hover:border-sky-400 hover:bg-sky-50 py-2 transition-all" href="#testimonials">
<span className="lang-es font-geist">Testimonios</span><span className="lang-en font-geist">Testimonials</span>
</a>
<a className="block text-lg font-medium text-gray-700 pl-2 border-l-4 border-transparent hover:border-sky-400 hover:bg-sky-50 py-2 transition-all" href="#pricing">
<span className="lang-es font-geist">Precios</span><span className="lang-en font-geist">Pricing</span>
</a>
<a className="block text-lg font-medium text-gray-700 pl-2 border-l-4 border-transparent hover:border-sky-400 hover:bg-sky-50 py-2 transition-all" href="#contact">
<span className="lang-es font-geist">¡Hablemos!</span><span className="lang-en font-geist">Let's Talk!</span>
</a>
</div>
</header>
<main className="">

<section className="relative min-h-screen flex items-center pt-24 overflow-hidden" id="hero">

<div className="absolute inset-0 z-0">
<img alt="Crystal clear pool" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1727579674528-600120447183?w=3840&amp;q=80"/>

<div className="bg-gradient-to-br from-[#1E3A8A]/85 via-[#1E3A8A]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="sm:px-6 lg:px-8 z-10 w-full max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4 relative">
<div className="fade-in-up max-w-3xl visible">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium mb-6">
<span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
<span className="lang-es font-geist">Sirviendo a familias en Miami-Dade</span><span className="lang-en font-geist">Serving Miami-Dade families</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-8 drop-shadow-sm">
<span className="lang-es font-space-grotesk font-semibold">Disfrute su Piscina,<br/><span className="text-sky-300 font-space-grotesk font-semibold">Nosotros la Cuidamos</span></span>
<span className="lang-en font-space-grotesk font-semibold">Enjoy Your Pool,<br/><span className="text-sky-300 font-space-grotesk font-semibold">We'll Take Care of It</span></span>
</h1>
<p className="text-xl md:text-2xl text-blue-50 mb-10 font-normal leading-relaxed max-w-2xl">
<span className="lang-es font-space-grotesk font-semibold">Servicio honesto y familiar para nuestros vecinos en Kendall, Coral Gables y Doral. Agua cristalina, sin estrés.</span>
<span className="lang-en font-space-grotesk font-semibold">Honest, family-run service for our neighbors in Kendall, Coral Gables, and Doral. Crystal clear water, zero stress.</span>
</p>
<div className="flex flex-col sm:flex-row gap-5 mb-12">
<a className="inline-flex justify-center items-center hover:bg-sky-500 transition-all shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-1 text-lg font-bold text-white bg-sky-400 rounded-2xl pt-5 pr-8 pb-5 pl-8 shadow-xl" href="tel:3055550123">
<svg aria-hidden="true" className="lucide lucide-phone w-6 h-6 mr-3" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="lang-es font-geist">Llamar Ahora</span><span className="lang-en font-geist">Call Now</span>
</a>
<a className="inline-flex justify-center items-center hover:bg-sky-50 transition-all hover:-translate-y-1 text-lg font-bold text-blue-900 bg-white border-white/20 border rounded-2xl pt-5 pr-8 pb-5 pl-8 shadow-xl" href="https://wa.me/13055550123">
<svg aria-hidden="true" className="lucide lucide-message-circle text-blue-800 w-[24px] h-[24px] mr-3" data-icon-replaced="true" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="lang-es font-geist">Manda un Mensaje</span><span className="lang-en font-geist">Send a Message</span>
</a>
</div>

<div className="flex flex-wrap gap-6 inline-flex text-sm font-medium text-blue-100 bg-blue-950/50 border-white/10 border rounded-2xl px-4 py-4 backdrop-blur-sm gap-x-6 gap-y-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-geist">4.9/5 (67 Reviews)</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-shield-check w-5 h-5 text-sky-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="lang-es font-geist">Licenciados &amp; Asegurados</span><span className="lang-en font-geist">Licensed &amp; Insured</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent opacity-20"></div>
</section>

<section className="py-24 bg-white relative" id="problems">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
<span className="text-sky-500 font-bold tracking-wider text-sm uppercase bg-sky-100/50 border border-sky-200 px-3 py-1 rounded-full mb-4 inline-block">
<span className="lang-es font-geist">¿Problemas Comunes?</span><span className="lang-en font-geist">Common Issues?</span>
</span>
<h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
<span className="lang-es font-space-grotesk font-semibold">¿Le Suena Familiar?</span>
<span className="lang-en font-space-grotesk font-semibold">Does This Sound Familiar?</span>
</h2>
<p className="text-gray-600 text-xl leading-relaxed">
<span className="lang-es font-geist">No tiene que seguir frustrándose. Merece un servicio que le dé paz mental, no dolores de cabeza.</span>
<span className="lang-en font-geist">You don't have to keep struggling. You deserve a service that gives you peace of mind, not headaches.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-8 bg-gray rounded-[2rem] hover:bg-blue-50 transition-colors duration-300 fade-in-up group shadow-sm hover:shadow-lg hover:shadow-blue-500/10 border border-sky-200 hover:border-blue-100">
<div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-droplets w-7 h-7" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">
<span className="lang-es font-geist">Piscina Verde</span><span className="lang-en font-geist">Green Pool Again</span>
</h3>
<p className="text-gray-600 text-base leading-relaxed">
<span className="lang-es font-geist">Su piscina se pone verde porque los químicos nunca están balanceados. Gasta más en arreglos que en servicio.</span>
<span className="lang-en font-geist">Your pool turns green constantly because chemicals are never balanced correctly. You spend more on fixes than service.</span>
</p>
</div>

<div className="p-8 bg-gray rounded-[2rem] hover:bg-blue-50 transition-colors duration-300 fade-in-up group shadow-sm hover:shadow-lg hover:shadow-blue-500/10 border border-sky-200 hover:border-blue-100">
<div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-phone-off w-7 h-7" data-lucide="phone-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"></path><path d="M22 2 2 22"></path><path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"></path></svg>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">
<span className="lang-es font-geist">Técnico Fantasma</span><span className="lang-en font-geist">Ghost Technician</span>
</h3>
<p className="text-gray-600 text-base leading-relaxed">
<span className="lang-es font-geist">Llama cuando tiene emergencia, pero desaparecen. Nunca sabe si van a venir esta semana o no.</span>
<span className="lang-en font-geist">You call during an emergency, but they disappeared. You never know if they are coming this week or not.</span>
</p>
</div>

<div className="p-8 bg-gray rounded-[2rem] hover:bg-blue-50 transition-colors duration-300 fade-in-up group shadow-sm hover:shadow-lg hover:shadow-blue-500/10 border border-sky-200 hover:border-blue-100">
<div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-trending-up w-7 h-7" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">
<span className="lang-es font-geist">Precios Sorpresa</span><span className="lang-en font-geist">Price Surprises</span>
</h3>
<p className="text-gray-600 text-base leading-relaxed">
<span className="lang-es font-geist">Comenzó pagando $80, ahora paga $130 sin explicación. Cada factura trae una sorpresa nueva.</span>
<span className="lang-en font-geist">Started paying $80, now paying $130 with no explanation. Every invoice brings a new surprise.</span>
</p>
</div>

<div className="p-8 bg-gray rounded-[2rem] hover:bg-blue-50 transition-colors duration-300 fade-in-up group shadow-sm hover:shadow-lg hover:shadow-blue-500/10 border border-sky-200 hover:border-blue-100">
<div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-users w-7 h-7" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">
<span className="lang-es font-geist">Extraños en Casa</span><span className="lang-en font-geist">Strangers at Home</span>
</h3>
<p className="text-gray-600 text-base leading-relaxed">
<span className="lang-es font-geist">Esta semana vino Juan, la próxima alguien nuevo. Nadie conoce su piscina ni sus preferencias.</span>
<span className="lang-en font-geist">This week Juan came, next week someone new. No one knows your pool or your preferences.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-[#E0F2FE] to-[#DBEAFE]" id="services" style={{}}>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-16 fade-in-up">
<span className="text-sky-600 font-bold tracking-wider text-sm uppercase bg-white/80 px-3 py-1 rounded-full backdrop-blur-sm">
<span className="lang-es font-geist">Nuestra Promesa</span><span className="lang-en font-geist">Our Promise</span>
</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-blue-900 mt-4 mb-6">
<span className="lang-es font-space-grotesk font-semibold">Así Mantenemos Su Piscina Perfecta</span>
<span className="lang-en font-space-grotesk font-semibold">This Is How We Keep Your Pool Perfect</span>
</h2>
<p className="text-fray-800 text-xl">
<span className="lang-es font-geist">Entendemos que su piscina es el corazón de su hogar. La tratamos como si fuera nuestra.</span>
<span className="lang-en font-geist">We understand your pool is the heart of your home. We treat it like it's our own.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="flex gap-6 fade-in-up bg-white/60 p-6 rounded-[2rem] backdrop-blur-sm border border-white/50 shadow-sm hover:bg-white transition-colors">
<div className="flex-shrink-0 w-16 h-16 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-500 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-sparkles w-8 h-8" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div>
<h3 className="text-xl font-bold mb-3 text-blue-900">
<span className="lang-es font-geist">Agua Cristalina Garantizada</span><span className="lang-en font-geist">Crystal Clear Water Guaranteed</span>
</h3>
<p className="text-gray-600 leading-relaxed mb-4">
<span className="lang-es font-geist">Visitamos el mismo día, a la misma hora. Balance perfecto de cloro y pH. Si no está cristalina, regresamos gratis.</span>
<span className="lang-en font-geist">We visit the same day, same time. Perfect balance of chlorine and pH. If it's not clear, we return for free.</span>
</p>
<ul className="space-y-2 text-sm text-gray-500 font-medium">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> <span className="lang-es font-geist">Limpieza de superficie y paredes</span><span className="lang-en font-geist">Surface &amp; wall cleaning</span></li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> <span className="lang-es font-geist">Aspirado profundo</span><span className="lang-en font-geist">Deep vacuuming</span></li>
</ul>
</div>
</div>

<div className="flex gap-6 fade-in-up bg-white/60 p-6 rounded-[2rem] backdrop-blur-sm border border-white/50 shadow-sm hover:bg-white transition-colors" style={{}}>
<div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-wrench w-8 h-8" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-bold mb-3 text-blue-900">
<span className="lang-es font-geist">Cuidado Preventivo</span><span className="lang-en font-geist">Preventive Care</span>
</h3>
<p className="text-gray-600 leading-relaxed mb-4">
<span className="lang-es font-geist">Revisamos bomba y filtros en cada visita. Identificamos problemas antes de que sean reparaciones costosas.</span>
<span className="lang-en font-geist">We check pumps and filters every visit. We identify issues before they become expensive repairs.</span>
</p>
<ul className="space-y-2 text-sm text-gray-500 font-medium">
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> <span className="lang-es font-geist">Inspección de bomba y motor</span><span className="lang-en font-geist">Pump &amp; motor inspection</span></li>
<li className="flex items-center gap-2"><svg aria-hidden="true" className="lucide lucide-check-circle-2 w-5 h-5 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> <span className="lang-es font-geist">Limpieza de canastas</span><span className="lang-en font-geist">Basket cleaning</span></li>
</ul>
</div>
</div>

<div className="flex gap-6 fade-in-up bg-white/60 p-6 rounded-[2rem] backdrop-blur-sm border border-white/50 shadow-sm hover:bg-white transition-colors" style={{}}>
<div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-smartphone w-8 h-8" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold mb-3 text-blue-900">
<span className="lang-es font-geist">Reporte Digital con Foto</span><span className="lang-en font-geist">Digital Report with Photo</span>
</h3>
<p className="text-gray-600 leading-relaxed mb-4">
<span className="lang-es font-geist">Después del servicio, recibe un WhatsApp con foto de su piscina limpia. Comunicación clara en español o inglés.</span>
<span className="lang-en font-geist">After service, receive a WhatsApp with a photo of your clean pool. Clear communication in Spanish or English.</span>
</p>
</div>
</div>

<div className="flex gap-6 fade-in-up bg-white/60 p-6 rounded-[2rem] backdrop-blur-sm border border-white/50 shadow-sm hover:bg-white transition-colors" style={{}}>
<div className="flex-shrink-0 w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-zap w-8 h-8" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<h3 className="text-xl font-bold mb-3 text-blue-900">
<span className="lang-es font-geist">Emergencias en 24 Horas</span><span className="lang-en font-geist">24-Hour Emergency Response</span>
</h3>
<p className="text-gray-600 leading-relaxed mb-4">
<span className="lang-es font-geist">Si tiene un evento o tormenta, estamos disponibles. Respondemos en menos de 24 horas, incluidos fines de semana.</span>
<span className="lang-en font-geist">If you have an event or storm, we are available. We respond in less than 24 hours, including weekends.</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f4f4f4] pt-24 pb-36" id="testimonials">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
<span className="lang-es font-space-grotesk font-semibold">Vecinos Felices</span><span className="lang-en font-space-grotesk font-semibold">Happy Neighbors</span>
</h2>
<p className="mt-4 text-gray-800 text-lg">
<span className="lang-es font-geist">Más de 200 familias en Miami confían en nosotros.</span><span className="lang-en font-geist">Over 200 Miami families trust us.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-[2rem] shadow-sm shadow-orange-900/5 border border-white fade-in-up hover:-translate-y-1 transition-transform">
<div className="flex items-center gap-1 text-yellow-400 mb-6">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 italic mb-8 leading-relaxed text-lg">
<span className="lang-es font-geist">"Antes mi piscina se ponía verde cada dos semanas. Desde que Carlos empezó, el agua está cristalina. Siempre manda foto por WhatsApp. Vale cada centavo."</span>
<span className="lang-en font-geist">"My pool used to turn green every two weeks. Since Carlos started, the water has been crystal clear. He always sends a photo via WhatsApp. Worth every penny."</span>
</p>
<div className="flex items-center gap-4 border-t border-gray-100 pt-6">
<div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden ring-2 ring-orange-100">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div>
<div className="font-bold text-gray-900 font-geist">María García</div>
<div className="text-xs text-gray-500 uppercase tracking-wide font-medium font-geist">Coral Gables</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm shadow-orange-900/5 border border-white fade-in-up hover:-translate-y-1 transition-transform" style={{}}>
<div className="flex items-center gap-1 text-yellow-400 mb-6">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 italic mb-8 leading-relaxed text-lg">
<span className="lang-es font-geist">"Tuve tres compañías diferentes en dos años. Nadie cumplía. Carlos viene sin falta cada jueves a las 9am. Finalmente encontramos alguien confiable."</span>
<span className="lang-en font-geist">"I had three different companies in two years. No one delivered. Carlos comes without fail every Thursday at 9am. We finally found someone reliable."</span>
</p>
<div className="flex items-center gap-4 border-t border-gray-100 pt-6">
<div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden ring-2 ring-orange-100">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="">
<div className="font-bold text-gray-900 font-geist">Roberto Hernández</div>
<div className="text-xs text-gray-500 uppercase tracking-wide font-medium font-geist">Kendall</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm shadow-orange-900/5 border border-white fade-in-up hover:-translate-y-1 transition-transform" style={{}}>
<div className="flex items-center gap-1 text-yellow-400 mb-6">
<svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg aria-hidden="true" className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 italic mb-8 leading-relaxed text-lg">
<span className="lang-es font-geist">"Lo que más me gusta es que me explican todo en español. Carlos me enseñó a identificar si algo está mal con la bomba. Es como tener familia cuidando tu casa."</span>
<span className="lang-en font-geist">"What I like most is they explain everything in Spanish. Carlos taught me how to identify if something is wrong with the pump. It's like having family watching your home."</span>
</p>
<div className="flex items-center gap-4 border-t border-gray-100 pt-6">
<div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden ring-2 ring-orange-100">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div>
<div className="font-bold text-gray-900 font-geist">Ana Rodríguez</div>
<div className="text-xs text-gray-500 uppercase tracking-wide font-medium font-geist">Hialeah</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
<span className="lang-es font-space-grotesk font-semibold">Precios Claros y Justos</span><span className="lang-en font-space-grotesk font-semibold">Clear &amp; Fair Pricing</span>
</h2>
<p className="mt-4 text-gray-600">
<span className="lang-es font-geist">Sin cargos escondidos. Sin sorpresas.</span><span className="lang-en font-geist">No hidden fees. No surprises.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-[2rem] border border-gray-200 bg-gray-50/50 fade-in-up hover:border-sky-200 transition-colors">
<h3 className="text-xl font-bold text-gray-900 mb-2">
<span className="lang-es font-geist">Básico</span><span className="lang-en font-geist">Basic</span>
</h3>
<div className="text-4xl text-gray-900 mb-6 font-space-grotesk font-semibold">$85<span className="text-base font-normal text-gray-500 font-geist">/mo</span></div>
<p className="text-sm text-gray-500 mb-8 font-medium">
<span className="lang-es font-geist">Para piscinas pequeñas (quincenal).</span><span className="lang-en font-geist">For small pools (bi-weekly).</span>
</p>
<a className="block w-full py-3 px-4 bg-white border border-gray-200 text-gray-900 font-bold text-center rounded-xl hover:bg-sky-50 hover:border-sky-100 transition-colors" href="#contact">
<span className="lang-es font-geist">Seleccionar</span><span className="lang-en font-geist">Select</span>
</a>
<ul className="mt-8 space-y-4 text-sm text-gray-600">
<li className="flex gap-3"><svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-sky-500 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> <span className="lang-es font-geist">Visita cada 2 semanas</span><span className="lang-en font-geist">Visit every 2 weeks</span></li>
<li className="flex gap-3"><svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-sky-500 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> <span className="lang-es font-geist">Limpieza básica</span><span className="lang-en font-geist">Basic cleaning</span></li>
</ul>
</div>

<div className="p-8 rounded-[2rem] border-2 border-sky-400 relative shadow-xl shadow-sky-500/10 bg-white scale-105 z-10 fade-in-up" style={{}}>
<div className="absolute top-0 right-0 left-0 -mt-4 flex justify-center">
<span className="bg-gradient-to-r from-blue-400 to-sky-300 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-md" style={{}}>
<span className="lang-es font-geist">Recomendado</span><span className="lang-en font-geist">Recommended</span>
</span>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-2">
<span className="lang-es font-geist">Estándar</span><span className="lang-en font-geist">Standard</span>
</h3>
<div className="text-4xl text-gray-900 mb-6 font-space-grotesk font-semibold">$110<span className="text-base font-normal text-gray-500 font-geist">/mo</span></div>
<p className="text-sm text-gray-500 mb-8 font-medium">
<span className="lang-es font-geist">Servicio semanal completo.</span><span className="lang-en font-geist">Complete weekly service.</span>
</p>
<a className="block w-full py-3.5 px-4 bg-sky-400 text-white font-bold text-center rounded-xl hover:bg-sky-500 transition-colors shadow-lg shadow-sky-400/30" href="#contact">
<span className="lang-es font-geist">Solicitar Ahora</span><span className="lang-en font-geist">Request Now</span>
</a>
<ul className="mt-8 space-y-4 text-sm text-gray-700 font-medium">
<li className="flex gap-3"><svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-sky-500 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> <span className="lang-es font-geist">Medición exacta</span><span className="lang-en font-geist">Precise Checks</span>
</li>
<li className="flex gap-3"><svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-sky-500 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> <span className="lang-es font-geist">Químicos incluidos</span><span className="lang-en font-geist">Chemicals included</span></li>
</ul>
</div>

<div className="p-8 rounded-[2rem] border border-gray-200 bg-gray-50/50 fade-in-up hover:border-sky-200 transition-colors" style={{}}>
<h3 className="text-xl font-bold text-gray-900 mb-2 font-geist">Premium</h3>
<div className="text-4xl text-gray-900 mb-6 font-space-grotesk font-semibold">$145<span className="text-base font-normal text-gray-500 font-geist">/mo</span></div>
<p className="text-sm text-gray-500 mb-8 font-medium">
<span className="lang-es font-geist">Todo incluido + filtro.</span><span className="lang-en font-geist">All inclusive + filter.</span>
</p>
<a className="block w-full py-3 px-4 bg-white border border-gray-200 text-gray-900 font-bold text-center rounded-xl hover:bg-sky-50 hover:border-sky-100 transition-colors" href="#contact">
<span className="lang-es font-geist">Seleccionar</span><span className="lang-en font-geist">Select</span>
</a>
<ul className="mt-8 space-y-4 text-sm text-gray-600">
<li className="flex gap-3"><svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-sky-500 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> <span className="lang-es font-geist">Todo lo del plan Estándar</span><span className="lang-en font-geist">All Standard features</span></li>
<li className="flex gap-3"><svg aria-hidden="true" className="lucide lucide-check w-5 h-5 text-sky-500 flex-shrink-0" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> <span className="lang-es font-geist">Limpieza de filtro mensual</span><span className="lang-en font-geist">Monthly filter cleaning</span></li>
</ul>
</div>
</div>

<div className="mt-12 rounded-2xl p-6 flex gap-4 items-start border border-sky-100 bg-[#f4f4f4]/30">
<div className="bg-sky-100 p-2 rounded-full">
<svg aria-hidden="true" className="lucide lucide-lightbulb w-6 h-6 text-sky-500 flex-shrink-0" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
</div>
<p className="text-sm text-gray-700 leading-relaxed pt-1">
<span className="lang-es font-geist"> Un solo tratamiento de shock cuesta $200-$400. Con nuestro servicio de $110/mes, previene problemas todo el año. La inversión se paga sola.</span>
<span className="lang-en font-geist"> A single shock treatment costs $200-$400. With our $110/mo service, you prevent issues all year. It pays for itself.</span>
</p>
</div>
</div>
</section>

<section className="py-24 bg-[#f4f4f4]" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 fade-in-up">
<span className="text-sky-600 font-bold tracking-wider text-sm uppercase mb-2 inline-block">
<span className="lang-es font-geist">Sobre Nosotros</span><span className="lang-en font-geist">About Us</span>
</span>
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
<span className="lang-es font-space-grotesk font-semibold">Familia Sirviendo Familias Desde 2012</span>
<span className="lang-en font-space-grotesk font-semibold">Family Serving Families Since 2012</span>
</h2>
<div className="prose prose-blue text-gray-600 mb-8 text-lg leading-relaxed">
<p className="mb-4">
<span className="lang-es font-geist">Soy Carlos Mendoza. Comencé este negocio porque vi que muchas familias no recibían el servicio que merecían: técnicos que no hablaban español, precios cambiantes y promesas rotas.</span>
<span className="lang-en font-geist">I'm Carlos Mendoza. I started this business because I saw many families weren't getting the service they deserved: techs who didn't speak Spanish, changing prices, and broken promises.</span>
</p>
<p>
<span className="lang-es font-geist">Decidí crear algo diferente. Un negocio donde el precio de hoy es el mismo del año que viene, y donde explicamos todo claramente. Hoy servimos a más de 200 familias en Miami-Dade.</span>
<span className="lang-en font-geist">I decided to create something different. A business where today's price is next year's price, and where we explain everything clearly. Today we serve over 200 families in Miami-Dade.</span>
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-badge-check w-6 h-6 text-sky-500" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-semibold text-gray-800 font-geist">Lic. #CPC1234567</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-shield w-6 h-6 text-sky-500" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="font-semibold text-gray-800 font-geist">$1M Insurance</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-award w-6 h-6 text-sky-500" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="font-semibold text-gray-800 font-geist">CPO Certified</span>
</div>
<div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-blue-50 shadow-sm">
<svg aria-hidden="true" className="lucide lucide-heart-handshake w-6 h-6 text-sky-500" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
<span className="font-semibold text-gray-800 font-geist">Local Business</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 fade-in-up">
<div className="relative">
<div className="absolute inset-0 bg-sky-200 rounded-[2rem] rotate-3 transform translate-y-2 translate-x-2"></div>
<img alt="Carlos Mendoza and Team" className="aspect-[4/3] w-full border-white border-4 rounded-[2rem] relative shadow-xl" src="https://images.unsplash.com/photo-1614144477821-9daf217ae100?w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="guarantees">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
<span className="lang-es font-space-grotesk font-semibold">Nuestras Garantías</span><span className="lang-en font-space-grotesk font-semibold">Our Guarantees</span>
</h2>
<p className="mt-4 text-gray-600">
<span className="lang-es font-geist">Nosotros asumimos todo el riesgo.</span><span className="lang-en font-geist">We assume all the risk.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 border border-gray-200 rounded-[2rem] hover:border-sky-300 hover:bg-sky-50 transition-all fade-in-up">
<div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-5">
<svg aria-hidden="true" className="lucide lucide-gem w-6 h-6" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<h3 className="font-bold text-lg mb-2 text-gray-900"><span className="lang-es font-geist">Agua Cristalina</span><span className="lang-en font-geist">Crystal Clear</span></h3>
<p className="text-sm text-gray-600 leading-relaxed"><span className="lang-es font-geist">Si no está perfecta, regresamos gratis hasta que lo esté.</span><span className="lang-en font-geist">If it's not perfect, we return for free until it is.</span></p>
</div>
<div className="p-8 border border-gray-200 rounded-[2rem] hover:border-sky-300 hover:bg-sky-50 transition-all fade-in-up">
<div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-5">
<svg aria-hidden="true" className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="font-bold text-lg mb-2 text-gray-900"><span className="lang-es font-geist">Respuesta 24h</span><span className="lang-en font-geist">24h Response</span></h3>
<p className="text-sm text-gray-600 leading-relaxed"><span className="lang-es font-geist">Si no respondemos en 24h a su emergencia, mes gratis.</span><span className="lang-en font-geist">If we don't reply in 24h to emergency, free month.</span></p>
</div>
<div className="p-8 border border-gray-200 rounded-[2rem] hover:border-sky-300 hover:bg-sky-50 transition-all fade-in-up">
<div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-5">
<svg aria-hidden="true" className="lucide lucide-calendar-check w-6 h-6" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="font-bold text-lg mb-2 text-gray-900"><span className="lang-es font-geist">60 Días de Prueba</span><span className="lang-en font-geist">60 Day Trial</span></h3>
<p className="text-sm text-gray-600 leading-relaxed"><span className="lang-es font-geist">Si no está feliz en 2 meses, le devolvemos su dinero.</span><span className="lang-en font-geist">If not happy in 2 months, money back.</span></p>
</div>
<div className="p-8 border border-gray-200 rounded-[2rem] hover:border-sky-300 hover:bg-sky-50 transition-all fade-in-up">
<div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-5">
<svg aria-hidden="true" className="lucide lucide-lock w-6 h-6" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<h3 className="font-bold text-lg mb-2 text-gray-900"><span className="lang-es font-geist">Precio Fijo 12 Meses</span><span className="lang-en font-geist">Fixed Price 12 Mo</span></h3>
<p className="text-sm text-gray-600 leading-relaxed"><span className="lang-es font-geist">El precio que cotizamos hoy no sube por un año.</span><span className="lang-en font-geist">Quote price won't go up for a year.</span></p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f4f4f4]" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-bold text-center mb-12 tracking-tight text-gray-900">
<span className="lang-es font-space-grotesk font-semibold">Preguntas Frecuentes</span><span className="lang-en font-space-grotesk font-semibold">Frequently Asked Questions</span>
</h2>
<div className="space-y-4 fade-in-up">
<details className="group bg-white rounded-2xl shadow-sm border border-sky-100 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-2 open:ring-sky-200 open:ring-offset-2">
<summary className="flex items-center justify-between cursor-pointer text-gray-900 font-bold hover:text-sky-600 transition-colors">
<span className="lang-es font-geist">¿Ustedes traen los químicos?</span><span className="lang-en font-geist">Do you bring the chemicals?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 text-base leading-relaxed pl-2 border-l-2 border-sky-200">
<span className="lang-es font-geist">Sí, en los planes Estándar y Premium nosotros traemos todo (cloro, ácido, bicarbonato). Usted no se preocupa por nada. En el Básico, usted los compra.</span>
<span className="lang-en font-geist">Yes, in Standard and Premium plans we bring everything (chlorine, acid, soda ash). You worry about nothing. In Basic, you buy them.</span>
</p>
</details>
<details className="group bg-white rounded-2xl shadow-sm border border-sky-100 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-2 open:ring-sky-200 open:ring-offset-2">
<summary className="flex items-center justify-between cursor-pointer text-gray-900 font-bold hover:text-sky-600 transition-colors">
<span className="lang-es font-geist">¿Qué pasa si mi piscina está verde ahora?</span><span className="lang-en font-geist">What if my pool is green right now?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 text-base leading-relaxed pl-2 border-l-2 border-sky-200">
<span className="lang-es font-geist">Hay un costo inicial de "Green-to-Clean" ($150-$300) una sola vez. Después, la mantenemos perfecta con la mensualidad regular.</span>
<span className="lang-en font-geist">There is a one-time "Green-to-Clean" fee ($150-$300). Afterwards, we keep it perfect with the regular monthly fee.</span>
</p>
</details>
<details className="group bg-white rounded-2xl shadow-sm border border-sky-100 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-2 open:ring-sky-200 open:ring-offset-2">
<summary className="flex items-center justify-between cursor-pointer text-gray-900 font-bold hover:text-sky-600 transition-colors">
<span className="lang-es font-geist">¿Hay contrato a largo plazo?</span><span className="lang-en font-geist">Is there a long-term contract?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 text-base leading-relaxed pl-2 border-l-2 border-sky-200">
<span className="lang-es font-geist">No. Puede cancelar cuando quiera. Queremos que se quede porque está feliz, no porque está obligado.</span>
<span className="lang-en font-geist">No. You can cancel whenever you want. We want you to stay because you're happy, not because you're forced.</span>
</p>
</details>
<details className="group bg-white rounded-2xl shadow-sm border border-sky-100 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:ring-2 open:ring-sky-200 open:ring-offset-2">
<summary className="flex items-center justify-between cursor-pointer text-gray-900 font-bold hover:text-sky-600 transition-colors">
<span className="lang-es font-geist">¿Hablan español?</span><span className="lang-en font-geist">Do you speak Spanish?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-gray-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-4 text-gray-600 text-base leading-relaxed pl-2 border-l-2 border-sky-200">
<span className="lang-es font-geist">Sí, perfectamente. Todo nuestro equipo es bilingüe.</span>
<span className="lang-en font-geist">Yes, perfectly. Our entire team is bilingual.</span>
</p>
</details>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-gray-100" id="areas">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h3 className="text-xl font-semibold text-gray-900 mb-8 flex items-center justify-center gap-2">
<svg aria-hidden="true" className="lucide lucide-map-pin text-sky-400 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="lang-es font-geist">Servimos en Miami-Dade</span><span className="lang-en font-geist">Serving Miami-Dade</span>
</h3>
<div className="flex flex-wrap gap-3 text-sm font-medium text-gray-600 gap-x-3 gap-y-3 justify-center">
<span className="font-geist bg-gray-50 border-gray-100 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm">Kendall</span>
<span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 font-geist">Coral Gables</span>
<span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 font-geist">Hialeah</span>
<span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 font-geist">Doral</span>
<span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 font-geist">Pinecrest</span>
<span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 font-geist">South Miami</span>
<span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 font-geist">Westchester</span>
<span className="px-4 py-2 bg-gray-50 rounded-full border border-gray-100 font-geist">Sweetwater</span>
</div>
</div>
</section>

<section className="bg-[#f4f4f4] pt-24 pb-24" id="contact">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-white fade-in-up">
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="p-8 md:p-12 bg-blue-50/50 flex flex-col justify-between relative overflow-hidden">

<div className="absolute top-0 left-0 w-100 h-100 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-blue-900">
<span className="lang-es font-space-grotesk font-semibold">Hablemos Hoy</span><span className="lang-en font-space-grotesk font-semibold">Let's Talk Today</span>
</h2>
<p className="text-gray-600 mb-8 text-lg">
<span className="lang-es font-geist">¿Listo para olvidarse de la limpieza de su piscina? Estamos aquí para ayudarle.</span>
<span className="lang-en font-geist">Ready to forget about cleaning your pool? We are here to help you.</span>
</p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="tel:3055550123">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-sky-500 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<div className="text-sm text-gray-500 font-medium"><span className="lang-es font-geist">Llámenos</span><span className="lang-en font-geist">Call Us</span></div>
<span className="text-lg font-bold text-gray-800 group-hover:text-sky-500 transition-colors font-geist">305-555-0123</span>
</div>
</a>
<a className="flex items-center gap-4 group" href="mailto:carlos@miamipools.com">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-sky-500 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<div className="text-sm text-gray-500 font-medium font-geist">Email</div>
<span className="text-lg font-bold text-gray-800 group-hover:text-sky-500 transition-colors font-geist">carlos@miamipools.com</span>
</div>
</a>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-sky-500">
<svg aria-hidden="true" className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div className="text-gray-600 font-medium">
<div className="font-geist">Mon-Fri: 8am - 6pm</div>
<div className="font-geist">Sat: 9am - 3pm</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-8 md:p-12 bg-white">
<h3 className="text-xl font-bold text-gray-900 mb-6">
<span className="lang-es font-geist">Solicite Cotización Gratis</span><span className="lang-en font-geist">Request Free Quote</span>
</h3>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Gracias! Le contactaremos pronto / Thank you! We will contact you soon.');">
<div>
<label className="block text-sm font-bold text-gray-700 mb-2 pl-1">
<span className="lang-es font-geist">Nombre</span><span className="lang-en font-geist">Name</span>
</label>
<input className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2 pl-1">
<span className="lang-es font-geist">Teléfono</span><span className="lang-en font-geist">Phone</span>
</label>
<input className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-bold text-gray-700 mb-2 pl-1">
<span className="lang-es font-geist">Ciudad</span><span className="lang-en font-geist">City</span>
</label>
<select className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-all">
<option className="font-geist">Kendall</option>
<option className="font-geist">Coral Gables</option>
<option className="font-geist">Hialeah</option>
<option className="font-geist">Doral</option>
<option className="font-geist">Other</option>
</select>
</div>
<div className="pt-4">
<button className="w-full py-4 bg-sky-400 hover:bg-sky-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-sky-400/30 hover:shadow-sky-400/50 transition-all hover:-translate-y-1" type="submit">
<span className="lang-es font-geist">Enviar Solicitud</span>
<span className="lang-en font-geist">Send Request</span>
</button>
</div>
<p className="text-xs text-center text-gray-400 mt-4">
<span className="lang-es font-geist">Cero spam. Promesa de vecino.</span>
<span className="lang-en font-geist">Zero spam. Neighbor's promise.</span>
</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-center">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
<span className="lang-es font-space-grotesk font-semibold">No Siga Luchando con Piscina Verde</span>
<span className="lang-en font-space-grotesk font-semibold">Stop Struggling With a Green Pool</span>
</h2>
<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
<span className="lang-es font-geist">Su piscina debería ser alegría, no frustración. Únase a las 200+ familias felices hoy.</span>
<span className="lang-en font-geist">Your pool should be joy, not frustration. Join 200+ happy families today.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="px-8 py-4 bg-sky-500 hover:bg-sky-700 text-white font-bold rounded-2xl transition-all shadow-xl hover:-translate-y-1" href="#contact">
<span className="lang-es font-geist">Sí, Quiero Agua Cristalina</span>
<span className="lang-en font-geist">Yes, I Want Clear Water</span>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-blue-50/50 border-blue-100 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-white">
<svg aria-hidden="true" className="lucide lucide-waves w-5 h-5" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<span className="font-bold text-blue-900 text-lg font-geist">Miami<span className="text-sky-500 font-geist">Pools</span></span>
</div>
<p className="text-sm text-gray-500 max-w-xs font-medium">
<span className="lang-es font-geist">Servicio profesional y familiar de limpieza de piscinas en Miami-Dade. Licenciados y asegurados.</span>
<span className="lang-en font-geist">Professional &amp; family-owned pool cleaning service in Miami-Dade. Licensed and insured.</span>
</p>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-4"><span className="lang-es font-geist">Contacto</span><span className="lang-en font-geist">Contact</span></h4>
<ul className="space-y-2 text-sm text-gray-600 font-medium">
<li className="font-geist">305-555-0123</li>
<li className="font-geist">carlos@miamipools.com</li>
</ul>
</div>
<div>
<h4 className="font-bold text-gray-900 mb-4"><span className="lang-es font-geist">Legal</span><span className="lang-en font-geist">Legal</span></h4>
<ul className="space-y-2 text-sm text-gray-600 font-medium">
<li><a className="hover:text-sky-500 transition-colors font-geist" href="#">Privacy Policy</a></li>
<li><a className="hover:text-sky-500 transition-colors font-geist" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-blue-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-gray-400 font-medium font-geist">© 2026 Miami Pools Cleaning Service. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-gray-400 hover:text-blue-600 transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-gray-400 hover:text-pink-600 transition-colors" href="#"><svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all hover:scale-110 group" href="https://wa.me/13055550123">
<svg aria-hidden="true" className="lucide lucide-message-circle w-8 h-8" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-4 py-2 rounded-xl text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
<span className="lang-es font-geist">Chat rápido</span><span className="lang-en font-geist">Quick Chat</span>
</span>
</a>


    </>
  );
}
