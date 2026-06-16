import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
}
},
transitionDuration: {
'2000': '2000ms',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-active');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-wrapper, .reveal-scale');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-stone-900 text-stone-50 text-xs py-2 text-center tracking-wide font-medium z-50 relative">
        Complimentary consultation with every first visit. Book now.
    </div>

<nav className="sticky top-0 z-40 w-full bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">

<button className="lg:hidden text-stone-800 p-1">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>

<a className="text-xl md:text-2xl font-serif tracking-tighter text-stone-900 font-medium z-10" href="#">
                LUMIERA
            </a>

<div className="hidden lg:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#about">Atelier</a>
<a className="hover:text-stone-900 transition-colors" href="#stylists">Stylists</a>
<a className="hover:text-stone-900 transition-colors" href="#journal">Journal</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-stone-600 transition-colors" href="#">Sign in</a>
<a className="bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium tracking-wide hover:bg-stone-800 transition-all duration-300 transform hover:scale-[1.02]" href="#book">
                    Book Appointment
                </a>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Luxury Hair Model" className="w-full h-full object-cover object-center brightness-[0.85] scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&amp;w=2069&amp;auto=format&amp;fit=crop" style={{animation: 'none', transition: 'transform 10s ease'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-stone-50/20"></div>
</div>

<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto space-y-8">
<p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase opacity-90 hero-fade-up" style={{animationDelay: '0.1s'}}>Premium Hair Design</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.1] hero-fade-up" style={{animationDelay: '0.3s'}}>
                Effortless beauty,<br/>refined by nature.
            </h1>
<div className="pt-4 flex justify-center gap-4 hero-fade-up" style={{animationDelay: '0.5s'}}>
<button className="bg-white text-stone-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors">
                    Explore Services
                </button>
<button className="backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
                    Watch Film
                </button>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-stone-50 overflow-hidden" id="about">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 order-2 md:order-1">
<h2 className="reveal-wrapper text-3xl md:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
                    We believe hair is an extension of your spirit.
                </h2>
<div className="space-y-6 text-stone-600 font-light text-lg leading-relaxed">
<p className="reveal-wrapper delay-100">
                        At Lumiera, we merge contemporary techniques with timeless aesthetics. Our atelier is a sanctuary designed for those who appreciate the subtle art of perfection.
                    </p>
<p className="reveal-wrapper delay-200">
                        From precision cuts to bespoke coloring, every session is a personalized journey tailored to enhance your natural allure.
                    </p>
</div>
<div className="pt-4 reveal-wrapper delay-300">
<a className="inline-flex items-center gap-2 text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors text-sm font-medium tracking-wide" href="#">
                        Read our story <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
<div className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden rounded-sm reveal-scale">
<img alt="Salon Interior Details" className="object-cover w-full h-full hover:scale-110 transition-transform duration-[2000ms]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-wrapper">
<div className="space-y-3">
<p className="text-xs font-medium tracking-widest text-stone-500 uppercase">Our Expertise</p>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">Curated Services</h2>
</div>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#">View full price list →</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">

<div className="group cursor-pointer reveal-wrapper delay-100">
<div className="overflow-hidden mb-6 aspect-[3/4] relative rounded-sm">
<img alt="Cut &amp; Style" className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1978&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl font-serif text-stone-900">Cut &amp; Style</h3>
<span className="text-sm text-stone-500 font-light">from $85</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed">Precision architecture for your hair, tailored to your bone structure and lifestyle.</p>
</div>

<div className="group cursor-pointer reveal-wrapper delay-200">
<div className="overflow-hidden mb-6 aspect-[3/4] relative rounded-sm">
<img alt="Color &amp; Gloss" className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl font-serif text-stone-900">Color &amp; Gloss</h3>
<span className="text-sm text-stone-500 font-light">from $120</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed">Bespoke color formulation using organic ingredients for luminous, healthy shine.</p>
</div>

<div className="group cursor-pointer reveal-wrapper delay-300">
<div className="overflow-hidden mb-6 aspect-[3/4] relative rounded-sm">
<img alt="Treatments" className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl font-serif text-stone-900">Spa Treatments</h3>
<span className="text-sm text-stone-500 font-light">from $60</span>
</div>
<p className="text-stone-500 text-sm leading-relaxed">Restorative rituals including scalp massages and deep conditioning masks.</p>
</div>
</div>
</div>
</section>

<section className="relative py-32 md:py-48 bg-stone-200 overflow-hidden">
<div className="absolute inset-0">
<img alt="Texture" className="w-full h-full object-cover opacity-60 grayscale mix-blend-multiply fixed-bg scale-110 motion-safe:animate-[pulse_15s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-screen-md mx-auto text-center px-6 reveal-wrapper">
<span className="iconify mx-auto mb-6 text-stone-800" data-icon="lucide:quote" data-width="32"></span>
<blockquote className="text-2xl md:text-4xl font-serif text-stone-900 italic leading-snug tracking-tight">
                "The most luxurious salon experience I've ever had. The attention to detail is unmatched and the atmosphere is pure serenity."
            </blockquote>
<cite className="block mt-8 text-sm font-medium tracking-widest uppercase text-stone-700 not-italic">— Eleanor Vance, Vogue</cite>
</div>
</section>

<section className="py-24 bg-stone-50" id="stylists">
<div className="max-w-screen-xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-wrapper">
<h2 className="text-3xl md:text-4xl font-serif text-stone-900 tracking-tight mb-4">Meet the Artisans</h2>
<p className="text-stone-500 font-light">Masters of their craft, dedicated to revealing your best self.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="text-center group reveal-wrapper delay-0">
<div className="aspect-[4/5] rounded-sm overflow-hidden mb-4 relative">
<img alt="Stylist" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=1961&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-serif text-stone-900">Sarah Jenkins</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Creative Director</p>
</div>

<div className="text-center group reveal-wrapper delay-100">
<div className="aspect-[4/5] rounded-sm overflow-hidden mb-4 relative">
<img alt="Stylist" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-serif text-stone-900">Mikaela Ross</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Color Specialist</p>
</div>

<div className="text-center group reveal-wrapper delay-200">
<div className="aspect-[4/5] rounded-sm overflow-hidden mb-4 relative">
<img alt="Stylist" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-serif text-stone-900">Elise D'Amico</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Senior Stylist</p>
</div>

<div className="text-center group reveal-wrapper delay-300">
<div className="aspect-[4/5] rounded-sm overflow-hidden mb-4 relative">
<img alt="Stylist" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-serif text-stone-900">Julian Reed</h3>
<p className="text-xs text-stone-500 uppercase tracking-widest mt-1">Texture Expert</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="book">
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal-wrapper">
<h2 className="text-3xl md:text-5xl font-serif text-stone-900 tracking-tight mb-6">Begin your transformation</h2>
<p className="text-stone-500 text-lg mb-8 font-light">
                    Select your preferences below and we will contact you to finalize your appointment.
                </p>
<div className="grid grid-cols-2 gap-8 text-sm">
<div className="reveal-wrapper delay-100">
<h4 className="font-medium text-stone-900 mb-2">Location</h4>
<p className="text-stone-500 leading-relaxed">
                            1284 Rue De Luxe,<br/>
                            Paris, France 75001
                        </p>
</div>
<div className="reveal-wrapper delay-100">
<h4 className="font-medium text-stone-900 mb-2">Hours</h4>
<p className="text-stone-500 leading-relaxed">
                            Mon - Fri: 9am — 8pm<br/>
                            Sat: 10am — 6pm
                        </p>
</div>
<div className="reveal-wrapper delay-200">
<h4 className="font-medium text-stone-900 mb-2">Contact</h4>
<p className="text-stone-500 leading-relaxed">
                            bonjour@lumiera.com<br/>
                            +33 1 23 45 67 89
                        </p>
</div>
<div className="reveal-wrapper delay-200">
<h4 className="font-medium text-stone-900 mb-2">Social</h4>
<div className="flex gap-3 text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="hover:text-stone-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="18"></span></a>
</div>
</div>
</div>
</div>

<form className="space-y-6 bg-stone-50 p-8 md:p-10 rounded-sm reveal-wrapper delay-200">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-stone-500">First Name</label>
<input className="w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors placeholder-stone-300" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-stone-500">Last Name</label>
<input className="w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors placeholder-stone-300" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium uppercase tracking-wider text-stone-500">Email Address</label>
<input className="w-full bg-transparent border-b border-stone-300 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors placeholder-stone-300" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-3 pt-4">
<label className="text-xs font-medium uppercase tracking-wider text-stone-500">Interested Services</label>
<div className="flex flex-wrap gap-4">
<label className="flex items-center gap-2 cursor-pointer group">
<input type="checkbox"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Haircut</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input type="checkbox"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Coloring</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input type="checkbox"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Styling</span>
</label>
<label className="flex items-center gap-2 cursor-pointer group">
<input type="checkbox"/>
<span className="text-sm text-stone-600 group-hover:text-stone-900">Treatment</span>
</label>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-stone-900 text-stone-50 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-stone-800 transition-all flex justify-center items-center gap-2 group" type="button">
                        Request Appointment
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</form>
</div>
</section>

<footer className="bg-stone-950 text-stone-400 py-16 text-sm">
<div className="max-w-screen-xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 reveal-wrapper">
<div className="space-y-4 col-span-1 md:col-span-1">
<a className="text-2xl font-serif text-stone-50 tracking-tighter block mb-4" href="#">LUMIERA</a>
<p className="leading-relaxed font-light text-stone-500">
                        Elevating hair care to an art form. Sustainable beauty for the modern muse.
                    </p>
</div>
<div>
<h4 className="text-stone-50 font-medium mb-6">Explore</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-stone-200 transition-colors" href="#">Services Menu</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Our Stylists</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-50 font-medium mb-6">Legal</h4>
<ul className="space-y-3 font-light">
<li><a className="hover:text-stone-200 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Cookie Settings</a></li>
</ul>
</div>
<div>
<h4 className="text-stone-50 font-medium mb-6">Subscribe</h4>
<p className="font-light mb-4 text-xs">Join our newsletter for exclusive offers and beauty tips.</p>
<div className="flex border-b border-stone-800 pb-2">
<input className="bg-transparent w-full focus:outline-none text-stone-200 placeholder-stone-700 font-light" placeholder="Email address" type="email"/>
<button className="text-stone-500 hover:text-stone-200 transition-colors">
<span className="iconify" data-icon="lucide:send" data-width="16"></span>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-900 text-xs font-light text-stone-600">
<p>© 2024 Lumiera Salon. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 md:mt-0">
<span>Designed with precision</span>
<a className="hover:text-stone-400" href="#">Back to top</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
