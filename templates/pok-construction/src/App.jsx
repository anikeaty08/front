import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // --- HERO SLIDER LOGIC ---
        (function() {
            const slides = document.querySelectorAll('#hero-slides .hero-slide');
            const dots = document.querySelectorAll('#hero-dots button');
            let currentSlide = 0;
            const totalSlides = slides.length;
            let slideInterval;

            function updateSlide(index) {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.remove('opacity-0', 'z-0');
                        slide.classList.add('opacity-100', 'z-10');
                        const vid = slide.querySelector('video');
                        if(vid) vid.play().catch(e => {}); 
                    } else {
                        slide.classList.remove('opacity-100', 'z-10');
                        slide.classList.add('opacity-0', 'z-0');
                        const vid = slide.querySelector('video');
                        if(vid) vid.pause();
                    }
                });
                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.remove('bg-transparent', 'opacity-60');
                        dot.classList.add('bg-white', 'opacity-100');
                    } else {
                        dot.classList.remove('bg-white', 'opacity-100');
                        dot.classList.add('bg-transparent', 'opacity-60');
                    }
                });
                currentSlide = index;
            }

            window.changeSlide = function(index) {
                clearInterval(slideInterval);
                updateSlide(index);
                startInterval();
            };

            function startInterval() {
                slideInterval = setInterval(() => {
                    let next = (currentSlide + 1) % totalSlides;
                    updateSlide(next);
                }, 6000);
            }

            startInterval();
            updateSlide(0);
        })();

        // --- STICKY NAV LOGIC ---
        window.addEventListener('scroll', () => {
            const header = document.getElementById('main-header');
            if (window.scrollY > 50) {
                header.classList.add('bg-slate-900/95', 'backdrop-blur-md', 'shadow-lg');
                header.classList.remove('bg-gradient-to-b', 'from-black/50', 'to-transparent');
            } else {
                header.classList.remove('bg-slate-900/95', 'backdrop-blur-md', 'shadow-lg');
                header.classList.add('bg-gradient-to-b', 'from-black/50', 'to-transparent');
            }
        });

        // --- COUNTER LOGIC ---
        (function() {
            const counters = document.querySelectorAll('.counter-value');
            const animateCounter = (counter) => {
                const targetAttr = counter.getAttribute('data-target');
                if (targetAttr === '∞') {
                    counter.innerText = '∞';
                    return;
                }
                const target = +targetAttr;
                let count = 0;
                const inc = Math.max(1, target / 50); 
                const updateCount = () => {
                    if(count < target) {
                        count += inc;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 30); 
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounter(entry.target);
                        observer.unobserve(entry.target); 
                    }
                });
            }, { threshold: 0.5 }); 

            counters.forEach(counter => {
                observer.observe(counter);
            });
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/50 to-transparent" id="main-header">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="flex items-center font-bold text-2xl tracking-tighter text-white">
<div className="relative w-8 h-8 mr-2">
<div className="absolute inset-0 border-4 border-red-500 rounded-full"></div>
</div>
<span className="text-white text-3xl font-['Urbanist']">P</span>
<span className="text-[#006CAF] text-3xl font-['Urbanist']">O</span>
<span className="text-[#006CAF] text-3xl font-['Urbanist']">K</span>
<span className="ml-2 text-white/90 text-sm font-bold uppercase tracking-widest mt-1 font-['Urbanist']">Construction</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 font-['Urbanist']">
<a className="text-sm font-bold text-white hover:text-[#006CAF] transition-colors tracking-wide" href="#">Home</a>
<div className="group relative">
<a className="text-sm font-bold text-white/90 hover:text-white transition-colors flex items-center gap-1 tracking-wide" href="#">About <i className="w-3 h-3" data-lucide="chevron-down"></i></a>
<div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 hidden group-hover:block text-slate-800 border border-slate-100">
<a className="block px-4 py-2 text-sm hover:bg-slate-50" href="#">The Team</a>
<a className="block px-4 py-2 text-sm hover:bg-slate-50" href="#">The Company</a>
</div>
</div>
<a className="text-sm font-bold text-white/90 hover:text-white transition-colors tracking-wide" href="#">Services</a>
<a className="text-sm font-bold text-white/90 hover:text-white transition-colors tracking-wide" href="#">Projects</a>
<a className="text-sm font-bold text-white/90 hover:text-white transition-colors tracking-wide" href="#">Careers</a>
<button className="text-white hover:text-[#006CAF] transition-colors">
<i className="w-5 h-5" data-lucide="search" style={{strokeWidth: '1.5'}}></i>
</button>
</nav>
</div>
</header>

<section className="relative h-[85vh] bg-black overflow-hidden" id="hero">
<div className="absolute inset-0 w-full h-full" id="hero-slides">
<div className="hero-slide absolute inset-0 opacity-100 z-10">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg">
<source src="https://cdn.pixabay.com/video/2021/11/24/95488-651173036_small.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/30"></div>
</div>
<div className="hero-slide absolute inset-0 opacity-0 z-0">
<video className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg">
<source src="https://cdn.pixabay.com/video/2019/04/07/22289-332721994_small.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/30"></div>
</div>
<div className="hero-slide absolute inset-0 opacity-0 z-0">
<video className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg">
<source src="https://cdn.pixabay.com/video/2022/10/10/134323-761379022_small.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/30"></div>
</div>
<div className="hero-slide absolute inset-0 opacity-0 z-0">
<video className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg">
<source src="https://cdn.pixabay.com/video/2023/01/07/145533-789437858_small.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/30"></div>
</div>
</div>

<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
<div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-10 rounded-full shadow-2xl border border-white/20">
<div className="flex items-center font-bold text-5xl md:text-6xl tracking-tighter">
<div className="relative w-12 h-12 md:w-16 md:h-16 mr-3">
<div className="absolute inset-0 border-[6px] border-red-500 rounded-full"></div>
</div>
<span className="text-white drop-shadow-lg font-['Urbanist']">POK</span>
</div>
<span className="text-white/90 text-sm md:text-base font-extrabold uppercase tracking-[0.3em] mt-2 text-shadow-sm font-['Urbanist']">Construction</span>
</div>
</div>

<div className="absolute bottom-10 right-10 z-30 flex gap-3" id="hero-dots">
<button className="w-3 h-3 rounded-full border-2 border-white/80 bg-white opacity-100 transition-all duration-300 hover:bg-white hover:opacity-100" onclick="changeSlide(0)"></button>
<button className="w-3 h-3 rounded-full border-2 border-white/80 bg-transparent opacity-60 transition-all duration-300 hover:bg-white hover:opacity-100" onclick="changeSlide(1)"></button>
<button className="w-3 h-3 rounded-full border-2 border-white/80 bg-transparent opacity-60 transition-all duration-300 hover:bg-white hover:opacity-100" onclick="changeSlide(2)"></button>
<button className="w-3 h-3 rounded-full border-2 border-white/80 bg-transparent opacity-60 transition-all duration-300 hover:bg-white hover:opacity-100" onclick="changeSlide(3)"></button>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 bg-white relative">

<div className="mb-12">
<h1 className="font-['Urbanist'] text-[#006CAF] text-[56px] md:text-[116px] leading-[1] font-bold tracking-tight">
                A Concierge<br/>
                Experience in<br/>
                Hotel Renovations
            </h1>
</div>

<div className="w-full border-t border-slate-200 mb-10"></div>

<div className="grid md:grid-cols-3 gap-12 mb-16">
<div className="md:col-span-2">
<p className="font-['Urbanist'] text-[26px] leading-[1.2] text-slate-800">
                    Embark on a hotel renovation journey that transcends expectations, offering a concierge-like service that caters to every detail of your vision with unprecedented care and dedication.
                </p>
</div>
<div className="md:col-span-1 flex justify-start md:justify-end items-start pt-2">
<a className="inline-flex items-center font-['Urbanist'] text-slate-900 font-bold text-sm uppercase tracking-wide border-b border-slate-900 pb-1 hover:text-[#006CAF] hover:border-[#006CAF] transition-colors" href="#">
                    All Services <i className="w-4 h-4 ml-2" data-lucide="arrow-up-right" style={{strokeWidth: '2'}}></i>
</a>
</div>
</div>

<div className="grid md:grid-cols-3 gap-y-3 gap-x-8 mb-24 font-['Roboto'] text-[16px] text-slate-800">
<div className="flex items-start gap-3">
<i className="w-3 h-3 mt-1.5 stroke-[3]" data-lucide="plus"></i>
<span>Fairfield Inn &amp; Suites Tallahassee, FL</span>
</div>
<div className="flex items-start gap-3">
<i className="w-3 h-3 mt-1.5 stroke-[3]" data-lucide="plus"></i>
<span>DoubleTree Disney Springs, FL</span>
</div>
<div className="flex items-start gap-3">
<i className="w-3 h-3 mt-1.5 stroke-[3]" data-lucide="plus"></i>
<span>Homewood Suites Raleigh/Durham, NC</span>
</div>
<div className="flex items-start gap-3">
<i className="w-3 h-3 mt-1.5 stroke-[3]" data-lucide="plus"></i>
<span>Hampton Inn &amp; Suites Mobile, AL</span>
</div>
<div className="flex items-start gap-3">
<i className="w-3 h-3 mt-1.5 stroke-[3]" data-lucide="plus"></i>
<span>Courtyard by Marriott Plantation, FL</span>
</div>
<div className="flex items-start gap-3">
<i className="w-3 h-3 mt-1.5 stroke-[3]" data-lucide="plus"></i>
<span>Hilton Garden Inn Gainesville, FL</span>
</div>
<div className="flex items-start gap-3">
<i className="w-3 h-3 mt-1.5 stroke-[3]" data-lucide="plus"></i>
<span>Homewood Suites Gainesville, FL</span>
</div>
<div className="flex items-start gap-3">
<i className="w-3 h-3 mt-1.5 stroke-[3]" data-lucide="plus"></i>
<span>Homewood Suites Miami Airport, FL</span>
</div>
<div className="flex items-start gap-3">
<i className="w-3 h-3 mt-1.5 stroke-[3]" data-lucide="plus"></i>
<span>Courtyard by Marriott Atl/Duluth, GA</span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" id="stats-section">
<div className="counter-item">
<div className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-[#006CAF] font-['Urbanist'] leading-none mb-4 counter-value" data-target="3266">0</div>
<div className="w-full border-b border-slate-300 mb-6"></div>
<div className="text-sm font-['Urbanist'] font-[800] uppercase tracking-widest text-slate-800">Renovated Rooms</div>
</div>
<div className="counter-item">
<div className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-[#006CAF] font-['Urbanist'] leading-none mb-4 counter-value" data-target="44">0</div>
<div className="w-full border-b border-slate-300 mb-6"></div>
<div className="text-sm font-['Urbanist'] font-[800] uppercase tracking-widest text-slate-800">Completed Renovations</div>
</div>
<div className="counter-item">
<div className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-[#006CAF] font-['Urbanist'] leading-none mb-4 counter-value" data-target="5">0</div>
<div className="w-full border-b border-slate-300 mb-6"></div>
<div className="text-sm font-['Urbanist'] font-[800] uppercase tracking-widest text-slate-800">Ongoing Projects</div>
</div>
<div className="counter-item">
<div className="text-[60px] md:text-[80px] lg:text-[100px] font-bold text-[#006CAF] font-['Urbanist'] leading-none mb-4 counter-value" data-target="∞">0</div>
<div className="w-full border-b border-slate-300 mb-6"></div>
<div className="text-sm font-['Urbanist'] font-[800] uppercase tracking-widest text-slate-800">Value Added</div>
</div>
</div>
</section>

<section className="bg-slate-950 py-24 relative overflow-hidden">
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<h2 className="text-white/80 text-2xl font-semibold mb-2 font-['Urbanist']">POK Construction</h2>
<p className="text-slate-400 mb-16 font-['Roboto']">Trusted by leading hospitality brands</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 hover:opacity-100 transition-all duration-500">
<div className="text-white text-xl font-serif text-center">
<div className="text-3xl border border-white/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-1">C</div>
<span className="uppercase text-xs tracking-widest">Crowne Plaza</span>
</div>
<div className="text-white text-center">
<div className="text-2xl font-serif tracking-widest">CURIO</div>
<div className="text-[0.6rem] uppercase tracking-widest mt-1">Collection by Hilton</div>
</div>
<div className="text-white text-center flex flex-col items-center">
<i className="w-8 h-8 mb-1" data-lucide="tree-deciduous"></i>
<div className="font-serif tracking-widest text-sm">DOUBLETREE</div>
</div>
<div className="text-white text-center border-l border-white/20 pl-4">
<div className="font-serif text-sm tracking-widest">EMBASSY</div>
<div className="font-sans font-bold text-lg tracking-widest">SUITES</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white">
<div className="max-w-7xl mx-auto text-left">
<h2 className="text-[50px] md:text-[116px] font-bold text-[#006CAF] font-['Urbanist'] tracking-tight leading-[1] mb-8">
                Leading Intentionally<br/>through Positive<br/>Engagement
            </h2>
<p className="font-['Urbanist'] text-[26px] text-slate-800 max-w-5xl leading-tight mb-8">
                Fostering a collaborative and uplifting environment where team members feel valued and inspired to contribute their best, POK motivates, empowers, and creates a shared sense of purpose among individuals, ultimately driving collective success.
            </p>
<a className="inline-flex items-center text-sm font-bold text-[#006CAF] hover:text-blue-800 transition-colors uppercase tracking-wider font-['Urbanist']" href="#">
                Our Story <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="relative h-[600px] w-full group overflow-hidden bg-slate-900">
<img alt="Hotel Exterior" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-20 left-6 md:left-20 text-white z-10">
<h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-['Urbanist']">Hilton Garden Inn Huntsville</h3>
<p className="text-xl font-light text-white/90 font-['Roboto']">Alabama</p>
</div>
<div className="absolute bottom-10 right-6 md:right-20 flex gap-4 overflow-x-auto pb-4 z-20 scrollbar-hide">
<div className="w-32 h-20 rounded-lg overflow-hidden border-2 border-white shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
<div className="w-32 h-20 rounded-lg overflow-hidden border border-white/30 shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all">
<img className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-left mb-16">
<h2 className="text-[50px] md:text-[116px] font-bold text-[#006CAF] font-['Urbanist'] tracking-tight leading-[1] mb-6">
                    Meet the Leadership
                </h2>
<p className="font-['Urbanist'] text-[26px] text-slate-800 max-w-4xl leading-tight">
                    Behind every triumph is an exceptional team, but it starts with deeply committed leaders to set the goals, the pace and share a clear vision.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-0">

<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300">
<div className="absolute inset-0 bg-slate-200">
<img alt="David Martinez" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute inset-x-0 bottom-0 bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out border-t border-slate-100">
<div className="flex flex-col items-start text-left">
<h3 className="text-2xl font-bold text-slate-900 tracking-tight font-['Urbanist']">David Martinez</h3>
<p className="text-base font-medium text-slate-500 mb-4 font-['Roboto']">CEO</p>
<div className="flex items-center gap-5">
<a className="text-slate-400 hover:text-[#006CAF] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-slate-400 hover:text-[#006CAF] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300">
<div className="absolute inset-0 bg-slate-200">
<img alt="Carlos Mercado" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute inset-x-0 bottom-0 bg-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out border-t border-slate-100">
<div className="flex flex-col items-start text-left">
<h3 className="text-2xl font-bold text-slate-900 tracking-tight font-['Urbanist']">Carlos Mercado</h3>
<p className="text-base font-medium text-slate-500 mb-4 font-['Roboto']">Vice President</p>
<div className="flex items-center gap-5">
<a className="text-slate-400 hover:text-[#006CAF] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="phone" style={{strokeWidth: '1.5'}}></i>
</a>
<a className="text-slate-400 hover:text-[#006CAF] transition-colors" href="#">
<i className="w-5 h-5" data-lucide="mail" style={{strokeWidth: '1.5'}}></i>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 flex items-center justify-center bg-slate-900">
<img alt="Interior View" className="absolute inset-0 w-full h-full object-cover opacity-30" src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center text-white px-6">
<h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 font-['Urbanist']">Have a project in mind?</h2>
<button className="bg-white/10 border border-white/40 text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-10 rounded-full transition-all duration-300 backdrop-blur-sm flex items-center mx-auto gap-3 font-['Urbanist'] text-lg">
                Let's Talk <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-16 text-sm border-t border-slate-900 font-['Roboto']">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1">
<div className="flex items-center gap-1 mb-6">
<span className="text-white font-bold text-2xl font-['Urbanist']">P</span>
<span className="text-[#006CAF] font-bold text-2xl font-['Urbanist']">O</span>
<span className="text-[#006CAF] font-bold text-2xl font-['Urbanist']">K</span>
</div>
<p className="text-xs leading-relaxed text-slate-500 font-medium">
                    © 2025 POK Construction.<br/>
                    Licensed and Insured.<br/>
                    All Rights Reserved.
                </p>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-4 font-['Urbanist'] uppercase tracking-wider">Offices</h4>
<p className="leading-relaxed text-sm font-medium">
                    Houston, TX<br/>
                    Charleston, SC<br/>
                    Miami, FL
                </p>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-4 font-['Urbanist'] uppercase tracking-wider">Contact</h4>
<p className="leading-relaxed text-sm font-medium">
                    1-800-POK-CNST<br/>
                    info@pokconstruction.com
                </p>
</div>
<div className="col-span-1 flex justify-end items-end">
<button className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#006CAF] hover:text-white transition-colors">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</button>
</div>
</div>
</footer>


    </>
  );
}
