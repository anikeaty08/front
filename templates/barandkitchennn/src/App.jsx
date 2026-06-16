import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Slideshow Logic
        const slides = document.querySelectorAll('.slide-image');
        const indicator = document.getElementById('slide-indicator');
        let currentSlide = 0;

        function nextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
            indicator.textContent = `0${currentSlide + 1} / 0${slides.length}`;
        }

        setInterval(nextSlide, 4000);

        // Scroll Animation Logic (Intersection Observer)
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-enter-active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-trigger').forEach(el => {
            observer.observe(el);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-noise"></div>

<header className="fixed top-0 w-full z-40 mix-blend-difference text-white px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative w-8 h-8 border border-white/30 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
<i className="w-4 h-4" data-lucide="droplet"></i>
</div>
<span className="font-bold tracking-tight uppercase text-sm">Three Drops</span>
</div>
<button className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
<i className="w-4 h-4" data-lucide="globe"></i>
<span className="text-xs font-medium uppercase tracking-widest">Reserve</span>
</button>
</header>

<main className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

<div className="relative pt-24 pb-12 px-6 lg:px-12 flex flex-col justify-between border-r border-white/10 z-10 bg-[#0a0a0a]">
<div className="space-y-2">

<div className="group border-b border-white/20 py-4 cursor-pointer">
<div className="flex items-center justify-between">
<h1 className="font-['Anton'] text-7xl lg:text-8xl text-white uppercase tracking-tight group-hover:text-rose-500 transition-colors duration-300 leading-[0.9]">
                            Our Menu
                        </h1>
<i className="w-8 h-8 lg:w-12 lg:h-12 text-white/50 group-hover:text-white transition-transform duration-300 group-hover:rotate-90" data-lucide="plus"></i>
</div>
</div>
<div className="group border-b border-white/20 py-4 cursor-pointer">
<div className="flex items-center justify-between">
<h1 className="font-['Anton'] text-7xl lg:text-8xl text-white uppercase tracking-tight group-hover:text-rose-500 transition-colors duration-300 leading-[0.9]">
                            Crafts
                        </h1>
<i className="w-8 h-8 lg:w-12 lg:h-12 text-white/50 group-hover:text-white transition-transform duration-300 group-hover:rotate-90" data-lucide="plus"></i>
</div>
</div>
<div className="group border-b border-white/20 py-4 cursor-pointer">
<div className="flex items-center justify-between">
<h1 className="font-['Anton'] text-7xl lg:text-8xl text-white uppercase tracking-tight group-hover:text-rose-500 transition-colors duration-300 leading-[0.9]">
                            Events
                        </h1>
<i className="w-8 h-8 lg:w-12 lg:h-12 text-white/50 group-hover:text-white transition-transform duration-300 group-hover:rotate-90" data-lucide="plus"></i>
</div>
</div>
<div className="group border-b border-white/20 py-4 cursor-pointer">
<div className="flex items-center justify-between">
<h1 className="font-['Anton'] text-7xl lg:text-8xl text-white uppercase tracking-tight group-hover:text-rose-500 transition-colors duration-300 leading-[0.9]">
                            About Us
                        </h1>
<i className="w-8 h-8 lg:w-12 lg:h-12 text-white/50 group-hover:text-rose-500 transition-transform duration-300 group-hover:scale-110" data-lucide="x"></i>
</div>

<div className="pt-8 pb-4 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="bg-[#f0eadd] text-black p-6 rounded-sm transform hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between h-48 group/card">
<div>
<span className="bg-black text-white px-2 py-0.5 text-xs font-bold uppercase">Philosophy</span>
<h3 className="font-['Anton'] text-3xl leading-none mt-2 uppercase tracking-tight">Farm to Glass</h3>
</div>
<p className="text-sm font-medium leading-tight opacity-80">Locally sourced botanicals for the modern palate.</p>
</div>

<div className="bg-[#1a1a1a] border border-white/20 text-white p-6 rounded-sm transform hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between h-48 relative overflow-hidden">

<div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
<i className="w-32 h-32" data-lucide="wine"></i>
</div>
<div>
<span className="bg-rose-500 text-white px-2 py-0.5 text-xs font-bold uppercase">New</span>
<h3 className="font-['Anton'] text-3xl leading-none mt-2 uppercase tracking-tight">Summer Mix</h3>
</div>
<p className="text-sm font-medium leading-tight text-gray-400">The 2024 cocktail roster is finally here.</p>
</div>
</div>
</div>
</div>

<div className="mt-12 lg:mt-24">
<a className="inline-flex items-center justify-between w-full bg-white text-black py-4 px-6 font-['Anton'] text-2xl uppercase tracking-wide hover:bg-rose-500 hover:text-white transition-colors duration-300 group" href="#">
<span>Book A Table Now</span>
<i className="group-hover:translate-x-2 transition-transform duration-300" data-lucide="arrow-right"></i>
</a>
<div className="flex justify-between items-end mt-12 text-sm font-medium text-gray-500">
<div className="flex flex-col gap-1">
<span className="text-white mb-2 font-bold uppercase">Locations</span>
<a className="hover:text-rose-500 transition-colors" href="#">Downtown</a>
<a className="hover:text-rose-500 transition-colors" href="#">Westside</a>
</div>
<div className="flex gap-4">
<a className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="bg-white/10 p-2 rounded-full hover:bg-white hover:text-black transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
</div>
</div>

<div className="relative h-[60vh] lg:h-auto overflow-hidden bg-gray-900 border-l border-white/10">

<div className="absolute inset-0 w-full h-full" id="slideshow-container">

<img alt="Cocktail" className="slide-image active brightness-75 contrast-125 saturate-50" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>

<img alt="Roasted Chicken" className="slide-image brightness-75 contrast-125 saturate-50" src="https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>

<img alt="Bar Interior" className="slide-image brightness-75 contrast-125 saturate-50" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-1/2 left-6 lg:left-12 transform -translate-y-1/2 z-20 pointer-events-none mix-blend-overlay opacity-80">
<h2 className="font-['Anton'] text-[10rem] lg:text-[14rem] leading-none text-white tracking-tighter opacity-30 vertical-text">
                    TASTE
                </h2>
</div>
<div className="absolute bottom-6 right-6 z-30">
<div className="bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono border border-white/20 text-white">
<span id="slide-indicator">01 / 03</span>
</div>
</div>
</div>
</main>

<section className="relative bg-[#f4f4f0] text-black py-24 border-t border-black">
<div className="px-6 lg:px-12 mb-12 flex items-end justify-between fade-enter scroll-trigger">
<div>
<p className="font-mono text-sm mb-2 text-rose-600 uppercase tracking-widest font-semibold">Curated Selection</p>
<h2 className="font-['Anton'] text-6xl lg:text-8xl uppercase tracking-tight leading-none">
                    Weekly <br/>Highlights
                </h2>
</div>
<div className="hidden lg:block">
<i className="w-12 h-12 text-black" data-lucide="move-right"></i>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-6 lg:px-12 pb-12 no-scrollbar snap-x snap-mandatory fade-enter scroll-trigger delay-100">

<div className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer">
<div className="aspect-[4/5] bg-black overflow-hidden relative mb-4">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-2 py-1 uppercase">Signatures</div>
</div>
<div className="flex justify-between items-start border-t-2 border-black pt-4">
<div>
<h3 className="font-['Anton'] text-3xl uppercase tracking-tight">The Smoky Old Fashioned</h3>
<p className="text-gray-600 font-medium text-sm mt-1">Bourbon, maple, hickory smoke</p>
</div>
<span className="font-bold text-xl">₹1,450</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer">
<div className="aspect-[4/5] bg-black overflow-hidden relative mb-4">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-2 py-1 uppercase">Entree</div>
</div>
<div className="flex justify-between items-start border-t-2 border-black pt-4">
<div>
<h3 className="font-['Anton'] text-3xl uppercase tracking-tight">Truffle Roast Chicken</h3>
<p className="text-gray-600 font-medium text-sm mt-1">Wild mushroom, thyme jus, mash</p>
</div>
<span className="font-bold text-xl">₹1,850</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer">
<div className="aspect-[4/5] bg-black overflow-hidden relative mb-4">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-2 py-1 uppercase">Limited</div>
</div>
<div className="flex justify-between items-start border-t-2 border-black pt-4">
<div>
<h3 className="font-['Anton'] text-3xl uppercase tracking-tight">Hibiscus Sour</h3>
<p className="text-gray-600 font-medium text-sm mt-1">Gin, egg white, hibiscus syrup</p>
</div>
<span className="font-bold text-xl">₹1,200</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[400px] snap-center group cursor-pointer">
<div className="aspect-[4/5] bg-black overflow-hidden relative mb-4 flex items-center justify-center">
<div className="text-center p-8 border-4 border-white">
<h4 className="font-['Anton'] text-5xl text-white uppercase mb-2">Full Menu</h4>
<div className="w-12 h-1 bg-rose-500 mx-auto"></div>
</div>
<img className="absolute inset-0 w-full h-full object-cover -z-10 brightness-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start border-t-2 border-black pt-4">
<div>
<h3 className="font-['Anton'] text-3xl uppercase tracking-tight">Explore More</h3>
<p className="text-gray-600 font-medium text-sm mt-1">View our complete dining options</p>
</div>
<i className="w-8 h-8" data-lucide="arrow-right-circle"></i>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white pt-24 pb-12 px-6 lg:px-12 border-t border-white/10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 fade-enter scroll-trigger">
<div className="col-span-1 md:col-span-2">
<h2 className="font-['Anton'] text-6xl lg:text-8xl uppercase leading-none mb-6">
                    Random <br/>Answers
                </h2>
<div className="flex gap-4 mt-8">
<button className="bg-white text-black px-6 py-3 font-bold uppercase hover:bg-rose-500 hover:text-white transition-colors duration-300">FAQ</button>
<button className="border border-white text-white px-6 py-3 font-bold uppercase hover:bg-white hover:text-black transition-colors duration-300">Careers</button>
</div>
</div>
<div className="col-span-1 flex flex-col justify-end">
<div className="space-y-4 font-medium text-gray-400">
<p className="text-white text-xl">Three Drops</p>
<p>123 Culinary Ave,<br/>Metropolis, NY 10012</p>
<p>hello@threedrops.com</p>
<p>+1 (555) 019-2834</p>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-xs font-medium text-gray-600 uppercase tracking-widest">
<p>© 2024 Three Drops Bar &amp; Kitchen.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</footer>


    </>
  );
}
