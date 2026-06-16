import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'scroll': 'scroll 40s linear infinite',
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Hero Slider Logic
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.slider-dot');
        const totalSlides = slides.length;
        let slideInterval;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.remove('slide-inactive');
                    slide.classList.add('slide-active');
                    dots[i].classList.remove('bg-white/20');
                    dots[i].classList.add('bg-white');
                } else {
                    slide.classList.remove('slide-active');
                    slide.classList.add('slide-inactive');
                    dots[i].classList.remove('bg-white');
                    dots[i].classList.add('bg-white/20');
                }
            });
            currentSlide = index;
        }

        function changeSlide(index) {
            clearInterval(slideInterval);
            showSlide(index);
            startSlider();
        }

        function nextSlide() {
            let next = (currentSlide + 1) % totalSlides;
            showSlide(next);
        }

        function startSlider() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        // Scroll Reveal Animation (Intersection Observer)
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('py-2');
            }
        });

        // Initialize
        startSlider();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300" id="navbar">
<div className="absolute inset-0 bg-white/70 backdrop-blur-xl border-b border-slate-200/50"></div>
<div className="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="group flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-sm group-hover:rotate-12 transition-transform duration-300">
                    4S
                </div>
<span className="text-lg font-bold tracking-tight text-slate-900 uppercase">
                    4Seasons
                </span>
</a>
<div className="hidden md:flex items-center space-x-1 bg-slate-100/50 p-1 rounded-full border border-slate-200/50 backdrop-blur-sm">
<a className="px-5 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all duration-300" href="#about">About</a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all duration-300" href="#services">Services</a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all duration-300" href="#approach">Approach</a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 rounded-full hover:bg-white hover:text-slate-900 hover:shadow-sm transition-all duration-300" href="#gallery">Gallery</a>
</div>
<button className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 px-5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-900/20">
<span>Contact Us</span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>

<button className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-200 p-6 absolute w-full top-20 left-0 shadow-xl fade-in-up" id="mobile-menu">
<div className="flex flex-col space-y-4 text-sm font-medium text-slate-600">
<a className="block hover:text-slate-900" href="#about">About</a>
<a className="block hover:text-slate-900" href="#services">Services</a>
<a className="block hover:text-slate-900" href="#approach">Approach</a>
<a className="block hover:text-slate-900" href="#gallery">Gallery</a>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center bg-slate-950">

<div className="absolute inset-0 w-full h-full" id="slider-container">
<div className="slide absolute inset-0 slide-active">
<img alt="Catering" className="slide-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="slide absolute inset-0 slide-inactive">
<img alt="Industrial Operations" className="slide-image w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="slide absolute inset-0 slide-inactive">
<img alt="Camp Management" className="slide-image w-full h-full object-cover" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-50"></div>
</div>

<div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-10">
<div className="opacity-0 animate-fade-in-up">
<div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold text-white mb-8 tracking-wide uppercase hover:bg-white/20 transition-colors cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    Operational Since 2016
                </div>
</div>
<h1 className="md:text-7xl lg:text-8xl text-5xl font-semibold tracking-tighter text-white mb-8 leading-[0.95] drop-shadow-sm">
<span className="block opacity-0 animate-fade-in-up delay-100">Integrated Support</span>
<span className="block opacity-0 animate-fade-in-up delay-200 text-slate-300">Demanding Environments</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in-up delay-300">
                The complete infrastructure to keep camps functioning smoothly and safely across Iraq. Catering, logistics, and management combined.
            </p>
<div className="mt-10 flex justify-center gap-4 opacity-0 animate-fade-in-up delay-300">
<button className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-semibold text-sm overflow-hidden">
<span className="relative z-10">Discover Services</span>
<div className="absolute inset-0 bg-slate-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</button>
</div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
<button className="slider-dot w-12 h-1 rounded-full bg-white transition-all" onclick="changeSlide(0)"></button>
<button className="slider-dot w-12 h-1 rounded-full bg-white/20 hover:bg-white/40 transition-all" onclick="changeSlide(1)"></button>
<button className="slider-dot w-12 h-1 rounded-full bg-white/20 hover:bg-white/40 transition-all" onclick="changeSlide(2)"></button>
</div>
</section>

<section className="py-32 px-6 relative">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight mb-12 leading-tight reveal">
                We create environments where employees can <span className="text-slate-400">rest, work, and thrive</span>.
            </h2>
<div className="grid md:grid-cols-2 gap-12 text-slate-500 leading-relaxed reveal delay-100">
<div className="space-y-6">
<p>
                        4Seasons specializes in integrated catering, camp management, and logistical support for oil and gas operations across Iraq. Since 2016, we have been delivering essential services that support field teams in remote and demanding environments.
                    </p>
<p>
                        From large-scale catering and accommodation operations to cleaning, laundry, water services, transportation, and maintenance, we provide the complete infrastructure needed to keep camps functioning smoothly.
                    </p>
</div>
<div className="space-y-6">
<p>
                        Our work is centered on creating clean, comfortable, and well-managed environments. Each service we offer is designed to improve operational continuity, enhance workforce well-being, and support productivity.
                    </p>
<div className="pl-6 border-l-2 border-slate-900 py-2">
<p className="font-medium text-slate-900 text-lg">
                            4Seasons handles the details that keep your operations moving.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div className="max-w-xl">
<span className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3 block">Our Expertise</span>
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight">Comprehensive Support</h2>
</div>
<p className="text-slate-500 max-w-xs text-sm mb-1">
                    End-to-end services required for the daily operation of remote camps and project sites.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-100 hover:bg-slate-900 transition-colors duration-500 reveal cursor-default">
<div className="absolute inset-0">
<img alt="Catering" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative h-full p-8 flex flex-col justify-between z-10">
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-slate-900 mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:utensils" data-width="24"></span>
</div>
<div>
<h3 className="text-2xl font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors">Industrial Catering</h3>
<p className="text-slate-600 group-hover:text-slate-300 transition-colors max-w-md">Large-scale food service ensuring nutrition and variety. We serve thousands of meals daily with strict hygiene standards.</p>
</div>
</div>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal delay-100 flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:tent" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Camp Operations</h3>
<p className="text-sm text-slate-500">Comprehensive workforce accommodation management and hospitality tailored to remote sites.</p>
</div>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:truck" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Logistics Supply</h3>
<p className="text-sm text-slate-500">Transportation, supply chain management, and reliable logistical support for remote locations.</p>
</div>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal delay-100 flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:sparkles" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Cleaning &amp; Hygiene</h3>
<p className="text-sm text-slate-500">Professional housekeeping, laundry services, and strict hygiene protocols.</p>
</div>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-slate-300 hover:shadow-xl transition-all duration-300 reveal delay-200 flex flex-col justify-between">
<div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:droplet" data-width="24"></span>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Water &amp; Waste</h3>
<p className="text-sm text-slate-500">Water purification, supply management, and environmentally responsible waste disposal.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="approach">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 mb-6 text-emerald-400 font-medium tracking-wide text-sm uppercase">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    How We Work
                </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">
                    Built on consistency, <br/> driven by quality.
                </h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<span className="font-bold text-white">01</span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Rigorous Standards</h3>
<p className="text-slate-400 font-light leading-relaxed">All staff—chefs, supervisors, and technical teams—operate under documented ISO-aligned procedures.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<span className="font-bold text-white">02</span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Workforce Focus</h3>
<p className="text-slate-400 font-light leading-relaxed">We prioritize nutrition and comfort, knowing that a well-supported team is a productive team.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
<span className="font-bold text-white">03</span>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Remote Capability</h3>
<p className="text-slate-400 font-light leading-relaxed">Specialized logistics and supply chains designed specifically for Iraq's challenging remote environments.</p>
</div>
</div>
</div>
</div>

<div className="relative reveal delay-200">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors">
<div className="text-4xl font-bold text-white mb-1">2016</div>
<div className="text-sm text-slate-400">Established</div>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors aspect-square flex flex-col justify-end overflow-hidden group">
<img alt="Worker" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<div className="text-lg font-medium text-white">Safety First</div>
<div className="text-xs text-slate-400 mt-1">Zero compromise</div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="bg-emerald-600 p-6 rounded-2xl border border-emerald-500 aspect-square flex flex-col justify-between group overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<span className="iconify text-white relative z-10" data-icon="lucide:check-circle" data-width="32"></span>
<div className="relative z-10">
<div className="text-3xl font-bold text-white">100%</div>
<div className="text-sm text-emerald-100">Client Compliance</div>
</div>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors">
<div className="text-4xl font-bold text-white mb-1">24/7</div>
<div className="text-sm text-slate-400">Support Operations</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 overflow-hidden" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Life on Site</h2>
<div className="hidden md:flex gap-2">
<button className="p-2 rounded-full border border-slate-200 hover:bg-white transition-colors" onclick="document.querySelector('.scroll-container').scrollBy({left: -300, behavior: 'smooth'})">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<button className="p-2 rounded-full border border-slate-200 hover:bg-white transition-colors" onclick="document.querySelector('.scroll-container').scrollBy({left: 300, behavior: 'smooth'})">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>
<div className="scroll-container flex gap-6 overflow-x-auto pb-8 px-6 -mx-6 scroll-smooth scrollbar-hide snap-x" style={{WebkitOverflowScrolling: 'touch'}}>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[300px] rounded-2xl overflow-hidden relative group">
<img alt="Logistics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?q=80&amp;w=2009&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Logistics Fleet</p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[300px] rounded-2xl overflow-hidden relative group">
<img alt="Camp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Remote Accommodation</p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[300px] rounded-2xl overflow-hidden relative group">
<img alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Hygienic Kitchens</p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[300px] rounded-2xl overflow-hidden relative group">
<img alt="Food" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Quality Ingredients</p>
</div>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[400px] h-[300px] rounded-2xl overflow-hidden relative group">
<img alt="Site" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<p className="text-white font-medium">Site Management</p>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="text-2xl font-bold tracking-tight text-slate-900 uppercase block mb-6">4Seasons</span>
<p className="text-slate-500 max-w-sm leading-relaxed">
                        Integrated catering and camp management solutions for the oil and gas industry in Iraq. Committed to quality, safety, and comfort.
                    </p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Catering</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Camp Management</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Logistics</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Maintenance</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>info@4seasons-iq.com</li>
<li>+964 770 000 0000</li>
<li>Basra, Iraq</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<span className="text-xs text-slate-400">© 2024 4Seasons. All rights reserved.</span>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-slate-900 hover:-translate-y-1 transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-900 hover:-translate-y-1 transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="text-slate-400 hover:text-slate-900 hover:-translate-y-1 transition-all duration-300" href="#">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
