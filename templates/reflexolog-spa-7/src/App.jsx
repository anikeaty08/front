import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.add('hidden');
            });
        });

        // Horizontal Scroll Buttons
        const scrollContainer = document.getElementById('gallery-container');
        document.getElementById('scrollLeft').addEventListener('click', () => {
            scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
        });
        document.getElementById('scrollRight').addEventListener('click', () => {
            scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
        });

        // Lightbox Logic
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        function openLightbox(element) {
            const img = element.querySelector('img');
            lightboxImg.src = img.src;
            lightbox.classList.remove('hidden');
            lightbox.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent scrolling bg
        }

        function closeLightbox() {
            lightbox.classList.add('hidden');
            lightbox.classList.remove('flex');
            document.body.style.overflow = 'auto';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-stone-100" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex-shrink-0 flex items-center">
<a className="uppercase text-xl font-medium text-stone-800 tracking-tight" href="#">
                        Footsie<span className="block text-sm font-light leading-none tracking-wide text-stone-500">Reflexology</span>
</a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-stone-800 hover:bg-stone-700 transition-all shadow-sm hover:shadow-md" href="#contact">
                        Book Now
                    </a>
<button className="md:hidden p-2 rounded-md text-stone-600 hover:text-stone-900 focus:outline-none" id="mobile-menu-btn">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-stone-100 absolute w-full" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
<a className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg" href="#home">Home</a>
<a className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg" href="#services">Services</a>
<a className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg" href="#about">About</a>
<a className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg" href="#gallery">Gallery</a>
<a className="block px-3 py-3 text-base font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-lg" href="#contact">Contact</a>
<a className="mt-4 block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-stone-800 hover:bg-stone-700" href="#contact">Book Now</a>
</div>
</div>
</nav>

<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Spa Atmosphere" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-stone-50/0 via-stone-50/10 to-stone-50"></div>
</div>
<div className="z-10 sm:px-6 lg:px-8 text-center max-w-4xl mr-auto ml-auto pt-20 pr-4 pl-4 relative">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white drop-shadow-sm mb-6 font-serif">
                Relax &amp; Recharge at <br className="hidden md:block"/> Footsie Reflexology
            </h1><span className="inline-block uppercase text-xs font-medium text-stone-800 tracking-wide bg-white/30 border-white/40 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
                Kihei, Maui
            </span>
<p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-stone-100 font-light drop-shadow-md">
                Experience authentic Foot Reflexology, Deep Tissue, Lomi Lomi, and therapeutic massage in a serene island sanctuary.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-sm font-medium rounded-full text-stone-900 bg-white hover:bg-stone-100 transition-all shadow-lg hover:shadow-xl min-w-[160px]" href="#services">
                    Book a Session
                </a>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-white text-sm font-medium rounded-full text-white hover:bg-white hover:text-stone-900 transition-all backdrop-blur-sm min-w-[160px]" href="#about">
                    Learn More
                </a>
</div>
</div>
</section>

<section className="bg-stone-50 pt-24 pb-24 relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight font-serif">Our Treatments</h2>
<p className="mt-4 text-stone-500 font-light">
                    Restorative therapies designed to relieve stress, improve circulation, and promote deep relaxation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-stone-50 rounded-xl text-stone-800 group-hover:bg-stone-100 transition-colors">
<svg aria-hidden="true" data-icon="lucide:footprints" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62c-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-medium text-stone-400">60m • $60</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">Foot Reflexology</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 flex-grow">
                        Relieve stress and improve circulation with targeted pressure points on the feet that correspond to body systems.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-stone-800 hover:text-stone-600 transition-colors mt-auto" href="#contact">
                        Book Now <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-stone-50 rounded-xl text-stone-800 group-hover:bg-stone-100 transition-colors">
<svg aria-hidden="true" data-icon="lucide:activity" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-medium text-stone-400">60m • $80</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">Deep Tissue Massage</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 flex-grow">
                        Deep, focused work to release muscle tension, knots, and trigger points in the deeper layers of muscle tissue.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-stone-800 hover:text-stone-600 transition-colors mt-auto" href="#contact">
                        Book Now <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-stone-50 rounded-xl text-stone-800 group-hover:bg-stone-100 transition-colors">
<svg aria-hidden="true" data-icon="lucide:waves" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm font-medium text-stone-400">60m • $75</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">Hawaiian Lomi Lomi</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 flex-grow">
                        Traditional Hawaiian massage using long, flowing strokes with forearms and hands for a rhythmic, relaxing experience.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-stone-800 hover:text-stone-600 transition-colors mt-auto" href="#contact">
                        Book Now <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-stone-50 rounded-xl text-stone-800 group-hover:bg-stone-100 transition-colors">
<svg aria-hidden="true" data-icon="lucide:smile" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path></g></svg>
</div>
<span className="text-sm font-medium text-stone-400">60m • $75</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">Swedish Massage</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 flex-grow">
                        A classic full-body massage using gentle techniques to relax the entire body and quiet the mind.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-stone-800 hover:text-stone-600 transition-colors mt-auto" href="#contact">
                        Book Now <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-stone-50 rounded-xl text-stone-800 group-hover:bg-stone-100 transition-colors">
<svg aria-hidden="true" data-icon="lucide:flower-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path></g></svg>
</div>
<span className="text-sm font-medium text-stone-400">60m • $85</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">Aromatherapy</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 flex-grow">
                        Enhance your massage with essential oils derived from plants to improve physical and emotional well-being.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-stone-800 hover:text-stone-600 transition-colors mt-auto" href="#contact">
                        Book Now <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-stone-100 flex flex-col">
<div className="flex items-start justify-between mb-4">
<div className="p-3 bg-stone-50 rounded-xl text-stone-800 group-hover:bg-stone-100 transition-colors">
<svg aria-hidden="true" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<span className="text-sm font-medium text-stone-400">60m • $80</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-2">Chinese Tui Na</h3>
<p className="text-sm text-stone-500 leading-relaxed mb-6 flex-grow">
                        A therapeutic form of massage that uses rhythmic compression along energy channels of the body.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-stone-800 hover:text-stone-600 transition-colors mt-auto" href="#contact">
                        Book Now <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-stone-500">Also offering: Chair Massage, Trigger Point, Myofascial Release, and Lymphatic Drainage.</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
<img alt="Massage Therapist Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&amp;w=2149&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-100 rounded-full -z-10"></div>
<div className="absolute -top-6 -left-6 w-24 h-24 bg-stone-50 rounded-full -z-10"></div>
</div>
<div>
<span className="text-stone-500 font-medium tracking-wide uppercase text-xs mb-2 block">Our Story</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight font-serif mb-6">
                        A Sanctuary in Kihei
                    </h2>
<p className="text-stone-600 mb-6 font-light leading-relaxed">
                        At Footsie Reflexology, we believe that relaxation is a vital part of health. Located in the heart of Kihei, our tranquil environment is designed to transport you away from the hustle of daily life.
                    </p>
<p className="text-stone-600 mb-8 font-light leading-relaxed">
                        Our team of professional therapists is dedicated to providing relief from stress, tension, and pain through expert touch. Whether you are a local resident or a visitor to Maui, our mission is to help you find balance and rejuvenation.
                    </p>
<div className="flex items-center gap-4 text-sm font-medium text-stone-800">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Licensed Therapists</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:check-circle-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span>Clean Environment</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 overflow-hidden" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight font-serif">The Experience</h2>
<p className="mt-2 text-stone-500 font-light">Glimpse into our peaceful space.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 rounded-full border border-stone-200 hover:bg-white hover:shadow-sm transition-all text-stone-600" id="scrollLeft">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="p-2 rounded-full border border-stone-200 hover:bg-white hover:shadow-sm transition-all text-stone-600" id="scrollRight">
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-4 sm:px-6 lg:px-8 pb-8 hide-scroll cursor-grab active:cursor-grabbing" id="gallery-container">

<div className="flex-none w-80 md:w-96 snap-center">
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer" onclick="openLightbox(this)">
<img alt="Treatment Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:maximize-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-80 md:w-96 snap-center">
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer" onclick="openLightbox(this)">
<img alt="Foot Massage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:maximize-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-80 md:w-96 snap-center">
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer" onclick="openLightbox(this)">
<img alt="Relaxing Detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:maximize-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-80 md:w-96 snap-center">
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer" onclick="openLightbox(this)">
<img alt="Spa Oils" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:maximize-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="flex-none w-80 md:w-96 snap-center">
<div className="aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer" onclick="openLightbox(this)">
<img alt="Aromatherapy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<svg aria-hidden="true" data-icon="lucide:maximize-2" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-medium text-center text-stone-900 tracking-tight font-serif mb-16">Guest Reviews</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-stone-50 p-8 rounded-2xl relative">
<span className="text-4xl text-stone-300 font-serif absolute top-4 left-6">“</span>
<div className="flex gap-1 mb-4 text-yellow-500/80">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 font-light mb-6 italic">
                        Absolutely the best foot massage I've ever had. After hiking all week, my feet were killing me, but this provided instant relief from my Achilles pain.
                    </p>
<div className="font-medium text-stone-900 text-sm">– Sarah J.</div>
</div>

<div className="bg-stone-50 p-8 rounded-2xl relative">
<span className="text-4xl text-stone-300 font-serif absolute top-4 left-6">“</span>
<div className="flex gap-1 mb-4 text-yellow-500/80">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 font-light mb-6 italic">
                        Clean, quiet environment and very professional staff. The Deep Tissue massage really worked out the knots in my back. Highly recommended.
                    </p>
<div className="font-medium text-stone-900 text-sm">– Michael T.</div>
</div>

<div className="bg-stone-50 p-8 rounded-2xl relative md:block hidden">
<span className="text-4xl text-stone-300 font-serif absolute top-4 left-6">“</span>
<div className="flex gap-1 mb-4 text-yellow-500/80">
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-fill="currentColor" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 font-light mb-6 italic">
                        A hidden gem in Kihei! The prices are reasonable and the skill level of the therapists is top-notch. I felt like a new person walking out.
                    </p>
<div className="font-medium text-stone-900 text-sm">– Emily R.</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-sm">

<div className="p-8 md:p-12">
<h2 className="text-3xl font-medium text-stone-900 tracking-tight font-serif mb-2">Get in Touch</h2>
<p className="text-stone-500 font-light mb-8">Fill out the form below to request a booking or ask a question.</p>
<form action="#" className="space-y-6">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="name">Name</label>
<input className="block w-full rounded-lg border-stone-200 bg-stone-50 p-3 text-stone-900 focus:border-stone-500 focus:ring-stone-500 sm:text-sm outline-none border transition-colors" id="name" placeholder="Your name" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="email">Email</label>
<input className="block w-full rounded-lg border-stone-200 bg-stone-50 p-3 text-stone-900 focus:border-stone-500 focus:ring-stone-500 sm:text-sm outline-none border transition-colors" id="email" placeholder="email@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="phone">Phone</label>
<input className="block w-full rounded-lg border-stone-200 bg-stone-50 p-3 text-stone-900 focus:border-stone-500 focus:ring-stone-500 sm:text-sm outline-none border transition-colors" id="phone" placeholder="(808) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="message">Message</label>
<textarea className="block w-full rounded-lg border-stone-200 bg-stone-50 p-3 text-stone-900 focus:border-stone-500 focus:ring-stone-500 sm:text-sm outline-none border transition-colors" id="message" placeholder="I would like to book a foot reflexology session..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-full text-white bg-stone-800 hover:bg-stone-700 transition-all shadow-sm" type="button">
                            Send Message
                        </button>
</form>
</div>

<div className="bg-stone-50 p-8 md:p-12 border-l border-stone-100 flex flex-col justify-between">
<div className="space-y-8">
<div>
<h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide mb-3">Visit Us</h3>
<p className="text-stone-600 font-light flex gap-3 items-start">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
                                1819 S Kihei Rd Ste B113Kihei, HI 96753
                            </p>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide mb-3">Call Us</h3>
<p className="text-stone-600 font-light flex gap-3 items-center">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<a className="hover:text-stone-900 transition-colors" href="tel:8088798898">(808) 879-8898</a>
</p>
</div>
<div>
<h3 className="text-sm font-semibold text-stone-900 uppercase tracking-wide mb-3">Hours</h3>
<p className="text-stone-600 font-light">
                                Daily: 10:00 AM – 9:00 PM
                            </p>
</div>
</div>

<div className="mt-8 rounded-xl overflow-hidden shadow-sm h-64 w-full bg-stone-200 relative">
<iframe allowfullscreen="" className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" frameborder="0" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3755.7954942944747!2d-156.4468686851239!3d20.73014198616118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7954da4fb3800001%3A0x1234567890abcdef!2s1819%20S%20Kihei%20Rd%20Ste%20B113%2C%20Kihei%2C%20HI%2096753!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-medium tracking-tight text-stone-50 uppercase" href="#">
                        Footsie<span className="block text-sm font-light leading-none tracking-wide text-stone-500">Reflexology</span>
</a>
<p className="mt-4 text-sm font-light text-stone-500">
                        Rejuvenating Kihei, one step at a time.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-100 uppercase tracking-wider mb-4">Services</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Foot Reflexology</a></li>
<li><a className="hover:text-white transition-colors" href="#">Deep Tissue</a></li>
<li><a className="hover:text-white transition-colors" href="#">Lomi Lomi</a></li>
<li><a className="hover:text-white transition-colors" href="#">Swedish Massage</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-100 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-2 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-stone-100 uppercase tracking-wider mb-4">Social</h4>
<div className="flex space-x-4">
<a className="hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="hover:text-white transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
<div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-light text-stone-600">
<p>© 2023 Footsie Reflexology. All rights reserved.</p>
<p className="mt-2 md:mt-0">Designed with relaxation in mind.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-black/90 hidden items-center justify-center p-4 backdrop-blur-sm" id="lightbox" onclick="closeLightbox()">
<button className="absolute top-6 right-6 text-white hover:text-stone-300 z-10" onclick="closeLightbox()">
<svg aria-hidden="true" data-icon="lucide:x" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<img alt="Gallery Full" className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl" id="lightbox-img" src=""/>
</div>



    </>
  );
}
