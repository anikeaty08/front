import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Logic
        const openBtn = document.getElementById('open-menu');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuLinks = mobileMenu.querySelectorAll('a');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when menu open
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            }
        }

        openBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        menuLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[#EBE8E3] z-50 transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col" id="mobile-menu">
<div className="flex items-center justify-between h-20 px-6 border-b grid-lines">
<div className="flex items-center space-x-4">
<i className="w-6 h-6 rotate-180" data-lucide="triangle" strokeWidth="1"></i>
<span className="text-sm uppercase tracking-widest leading-tight">Ātma<br/>Wellness</span>
</div>
<button className="p-2" id="close-menu">
<i className="w-6 h-6" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<nav className="flex-1 flex flex-col justify-center items-center space-y-8 text-2xl tracking-tight uppercase">
<a className="hover:text-[#8B876B] transition-colors" href="#stay">Stay</a>
<a className="hover:text-[#8B876B] transition-colors" href="#wellness">Wellness</a>
<a className="hover:text-[#8B876B] transition-colors" href="#experiences">Experiences</a>
<a className="hover:text-[#8B876B] transition-colors" href="#journal">Journal</a>
<a className="hover:text-[#8B876B] transition-colors" href="#about">About</a>
</nav>
</div>

<header className="flex border-b grid-lines h-20 text-sm uppercase tracking-widest items-stretch relative z-40 bg-[#EBE8E3]">

<div className="w-auto md:w-64 border-r grid-lines flex items-center px-6 shrink-0">
<a className="flex items-center space-x-4 group" href="#">
<i className="w-6 h-6 rotate-180 group-hover:scale-110 transition-transform" data-lucide="triangle" strokeWidth="1"></i>
<div className="hidden md:block text-xs leading-tight">
                    Ātma<br/>Wellness Hotel
                </div>
</a>
</div>

<nav className="flex-1 hidden lg:flex justify-center items-center space-x-16">
<a className="hover:text-[#8B876B] transition-colors" href="#stay">Stay</a>
<a className="hover:text-[#8B876B] transition-colors" href="#wellness">Wellness</a>
<a className="hover:text-[#8B876B] transition-colors" href="#experiences">Experiences</a>
<a className="hover:text-[#8B876B] transition-colors" href="#journal">Journal</a>
<a className="hover:text-[#8B876B] transition-colors" href="#about">About</a>
</nav>

<div className="flex-1 lg:hidden"></div>

<a className="hidden md:flex w-64 bg-dark text-light items-center justify-center space-x-4 hover:bg-black transition-colors shrink-0" href="#book">
<span>Book your stay</span>
<div className="w-3 h-3 rounded-full bg-accent"></div>
</a>

<button className="lg:hidden px-6 flex items-center justify-center border-l grid-lines hover:bg-gray-100 transition-colors" id="open-menu">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</header>
<main className="flex-1 flex flex-col">

<section className="flex flex-col border-b grid-lines relative">

<div className="flex flex-col lg:flex-row min-h-[70vh]">

<div className="w-full lg:w-[55%] border-r-0 lg:border-r grid-lines p-8 md:p-16 lg:p-24 flex flex-col justify-center relative order-2 lg:order-1">

<div className="hidden md:block absolute top-16 right-32 w-12 h-12 bg-accent rounded-full animate-pulse opacity-80"></div>
<p className="text-xs uppercase tracking-[0.2em] mb-16 md:mb-32 leading-relaxed">
                        A sanctuary<br/>for body, mind<br/>&amp; soul
                    </p>
<h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] tracking-tight leading-[1.05] mb-12 uppercase text-[#1C1B1A]">
                        Wellness<br/>
                        is not a luxury.<br/>
                        It's a <span className="font-serif italic lowercase tracking-normal text-[#1C1B1A]">return.</span>
</h1>
<a className="inline-flex items-center text-xs uppercase tracking-widest space-x-3 group mt-auto lg:mt-0" href="#philosophy">
<span>Discover our philosophy</span>
<i className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors" data-lucide="circle-dot" strokeWidth="1"></i>
</a>
</div>

<div className="w-full lg:w-[45%] relative bg-[#D7D4C8] flex min-h-[50vh] lg:min-h-0 order-1 lg:order-2 overflow-hidden">

<div className="absolute inset-y-0 right-12 left-0 lg:left-12 top-0 lg:top-12 overflow-hidden hero-curve">
<img alt="Minimalist architectural pool" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000" src="https://images.unsplash.com/photo-1590490359683-658d3d23f972?q=80&amp;w=2874&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute right-0 inset-y-0 w-12 border-l grid-lines flex flex-col items-center justify-between py-8 bg-[#EBE8E3] lg:bg-transparent z-10">
<div className="w-3 h-3 rounded-full border border-gray-400 mt-8"></div>
<div className="flex-1 flex items-center justify-center">
<span className="text-xs uppercase tracking-[0.2em] whitespace-nowrap transform -rotate-90 text-gray-500">Take a deep breath</span>
</div>
<div className="w-px h-16 bg-gray-300 mb-8"></div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row border-t grid-lines">
<div className="w-full md:w-1/4 border-r-0 md:border-r grid-lines p-8 flex items-end">
<div className="text-5xl tracking-tight leading-none text-[#1C1B1A]">01</div>
<div className="w-16 h-px bg-gray-300 mx-4 mb-2"></div>
<div className="text-sm mb-1">/ 03</div>
</div>
<div className="w-full md:w-[20%] border-r-0 md:border-r grid-lines h-48 md:h-auto bg-dark overflow-hidden">
<img alt="Woman's shoulder" className="w-full h-full object-cover opacity-80 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full md:w-[30%] border-r-0 md:border-r grid-lines p-8 flex flex-col justify-center">
<ul className="text-xs uppercase tracking-widest space-y-2 text-gray-600">
<li>Curated stays.</li>
<li>Holistic wellness.</li>
<li>Conscious luxury.</li>
</ul>
</div>
<div className="w-full md:flex-1 p-8 flex items-center justify-center relative cursor-pointer group hover:bg-[#E2DFD8] transition-colors">
<span className="text-xs uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors">Scroll to explore</span>
<div className="absolute right-12 w-px h-8 bg-gray-300"></div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 lg:px-24 border-b grid-lines flex flex-col lg:flex-row gap-16 lg:gap-32 items-center" id="philosophy">
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-8">
                    Rooted in ancient wisdom, designed for modern tranquility.
                </h2>
<div className="w-12 h-px bg-[#1E1D1B] mb-8"></div>
<p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                    Ātma is more than a destination; it is a philosophy materialized. We believe that true luxury lies in the space to reconnect with oneself. Every element of our architecture, our rituals, and our natural surroundings is intentionally crafted to guide you back to balance.
                </p>
</div>
<div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden">
<img alt="Peaceful nature scene" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="border-b grid-lines" id="stay">
<div className="flex items-center justify-between p-6 md:p-12 border-b grid-lines">
<h3 className="text-2xl md:text-3xl tracking-tight">The Spaces</h3>
<a className="text-xs uppercase tracking-widest flex items-center space-x-2 hover:text-[#8B876B] transition-colors" href="#">
<span>View all</span>
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2">

<div className="border-b md:border-b-0 md:border-r grid-lines group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden relative">
<img alt="Minimalist bedroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2900&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="p-8 flex justify-between items-end">
<div>
<div className="text-xs uppercase tracking-widest text-gray-500 mb-2">45 sqm / Forest View</div>
<h4 className="text-xl tracking-tight">The Canopy Suite</h4>
</div>
<i className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden relative">
<img alt="Luxury bathroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<div className="p-8 flex justify-between items-end">
<div>
<div className="text-xs uppercase tracking-widest text-gray-500 mb-2">80 sqm / Private Pool</div>
<h4 className="text-xl tracking-tight">The Ātma Pavilion</h4>
</div>
<i className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="bg-dark text-light border-b border-[#333] flex flex-col md:flex-row" id="wellness">
<div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#333]">
<span className="text-accent text-xs uppercase tracking-[0.2em] mb-8 block">Holistic Healing</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-12">
                    Surrender to<br/>the stillness.
                </h2>
<p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-md">
                    Our spa treatments draw from indigenous rituals and medicinal botany, offering a profound sensory journey designed to restore cellular harmony.
                </p>
<div className="flex items-center space-x-6">
<a className="text-xs uppercase tracking-widest border-b border-gray-600 pb-1 hover:border-light transition-colors" href="#">Explore Rituals</a>
</div>
</div>
<div className="w-full md:w-1/2 aspect-square md:aspect-auto relative overflow-hidden">
<img alt="Spa treatment" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1E1D1B] via-transparent to-transparent"></div>
</div>
</section>

<section className="border-b grid-lines bg-[#EBE8E3]" id="experiences">
<div className="grid grid-cols-1 md:grid-cols-3">
<div className="col-span-1 border-b md:border-b-0 md:border-r grid-lines p-12 lg:p-16 flex flex-col justify-between">
<div>
<h3 className="text-2xl tracking-tight mb-4">Curated Experiences</h3>
<p className="text-gray-600 leading-relaxed">Immerse yourself in the landscape. From silent dawn hikes to sunset meditation, our experiences are guided by the rhythms of nature.</p>
</div>
<div className="mt-12 flex space-x-2">

<div className="w-8 h-px bg-black"></div>
<div className="w-8 h-px bg-gray-300"></div>
<div className="w-8 h-px bg-gray-300"></div>
</div>
</div>
<div className="col-span-1 border-b md:border-b-0 md:border-r grid-lines aspect-square group relative overflow-hidden cursor-pointer">
<img alt="Yoga outdoors" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=2802&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<div className="text-xs uppercase tracking-widest mb-2">Daily</div>
<h4 className="text-xl tracking-tight">Morning Vinyasa</h4>
</div>
</div>
<div className="col-span-1 aspect-square group relative overflow-hidden cursor-pointer">
<img alt="Forest walk" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&amp;w=2850&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<div className="text-xs uppercase tracking-widest mb-2">Guided</div>
<h4 className="text-xl tracking-tight">Forest Bathing</h4>
</div>
</div>
</div>
</section>

<section className="border-b grid-lines flex flex-col md:flex-row h-auto md:h-[80vh]">
<div className="w-full md:w-1/2 h-[50vh] md:h-full relative border-b md:border-b-0 md:border-r grid-lines overflow-hidden group">
<img alt="Healthy food" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="w-full md:w-1/2 p-12 lg:p-24 flex flex-col justify-center items-start bg-[#EBE8E3]">
<h2 className="text-4xl md:text-5xl tracking-tight mb-8">Nourishment as Medicine.</h2>
<p className="text-lg text-gray-600 leading-relaxed mb-12">
                    Our culinary philosophy is simple: seasonal, hyper-local, and deeply respectful of the earth. We collaborate with regional farmers to bring vitality to every plate, creating meals that energize and heal.
                </p>
<button className="flex items-center space-x-4 border border-[#1E1D1B] px-8 py-4 hover:bg-[#1E1D1B] hover:text-white transition-colors duration-300">
<span className="text-xs uppercase tracking-widest">View Menu</span>
</button>
</div>
</section>

<section className="border-b grid-lines py-24 px-6 md:px-12 lg:px-24" id="journal">
<div className="flex items-end justify-between mb-16">
<h3 className="text-3xl md:text-4xl tracking-tight">The Journal</h3>
<a className="hidden md:block text-xs uppercase tracking-widest border-b border-[#1E1D1B] pb-1 hover:text-[#8B876B] hover:border-[#8B876B] transition-colors" href="#">Read all entries</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<article className="group cursor-pointer flex flex-col">
<div className="aspect-[3/2] overflow-hidden mb-6">
<img alt="Journal cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="text-xs text-gray-500 uppercase tracking-widest mb-3">Wellness • Oct 12</div>
<h4 className="text-xl tracking-tight mb-3 group-hover:text-[#8B876B] transition-colors">The Art of Mindful Breathing</h4>
<p className="text-gray-600 line-clamp-2 mt-auto">Discover how simple breathwork techniques can profoundly shift your nervous system into a state of deep rest.</p>
</article>

<article className="group cursor-pointer flex flex-col">
<div className="aspect-[3/2] overflow-hidden mb-6">
<img alt="Journal cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs text-gray-500 uppercase tracking-widest mb-3">Nature • Sep 28</div>
<h4 className="text-xl tracking-tight mb-3 group-hover:text-[#8B876B] transition-colors">Foraging for Wild Teas</h4>
<p className="text-gray-600 line-clamp-2 mt-auto">A guide to identifying and preparing healing infusions from the flora surrounding our sanctuary.</p>
</article>

<article className="group cursor-pointer flex flex-col">
<div className="aspect-[3/2] overflow-hidden mb-6">
<img alt="Journal cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="text-xs text-gray-500 uppercase tracking-widest mb-3">Architecture • Sep 10</div>
<h4 className="text-xl tracking-tight mb-3 group-hover:text-[#8B876B] transition-colors">Designing for Serenity</h4>
<p className="text-gray-600 line-clamp-2 mt-auto">An interview with our lead architect on the intention behind Ātma's minimalist aesthetic.</p>
</article>
</div>
<a className="block md:hidden text-center mt-12 text-xs uppercase tracking-widest border-b border-[#1E1D1B] pb-1 inline-block mx-auto" href="#">Read all entries</a>
</section>

<footer className="bg-[#EBE8E3] pt-24 border-t grid-lines">
<div className="px-6 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

<div className="col-span-1 lg:col-span-1">
<div className="flex items-center space-x-4 mb-8">
<i className="w-8 h-8 rotate-180" data-lucide="triangle" strokeWidth="1"></i>
<span className="text-xl tracking-tight uppercase">Ātma</span>
</div>
<p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                        A sanctuary for those seeking a return to themselves through nature, design, and conscious living.
                    </p>
</div>

<div className="col-span-1">
<h5 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Explore</h5>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-[#8B876B] transition-colors" href="#">The Spaces</a></li>
<li><a className="hover:text-[#8B876B] transition-colors" href="#">Holistic Spa</a></li>
<li><a className="hover:text-[#8B876B] transition-colors" href="#">Culinary Concept</a></li>
<li><a className="hover:text-[#8B876B] transition-colors" href="#">Journal</a></li>
<li><a className="hover:text-[#8B876B] transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="col-span-1">
<h5 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Visit</h5>
<address className="not-italic text-sm text-gray-600 leading-relaxed space-y-4">
<p>Valle de Guadalupe,<br/>Baja California, Mexico</p>
<p><a className="hover:text-[#8B876B] transition-colors" href="mailto:reserve@atmawellness.com">reserve@atmawellness.com</a><br/>
<a className="hover:text-[#8B876B] transition-colors" href="tel:+521234567890">+52 123 456 7890</a></p>
</address>
</div>

<div className="col-span-1 lg:col-span-1">
<h5 className="text-xs uppercase tracking-widest text-gray-400 mb-6">Newsletter</h5>
<p className="text-sm text-gray-600 mb-6">Sign up for reflections on wellness and exclusive invitations.</p>
<form className="relative group">
<input className="w-full bg-transparent border-b border-gray-400 py-3 text-sm focus:outline-none focus:border-[#1E1D1B] transition-colors placeholder:text-gray-400 pr-10" placeholder="Email address" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-[#1E1D1B] transition-colors" type="submit">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>

<div className="border-t grid-lines px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 uppercase tracking-widest">
<p>© 2024 Ātma Wellness Hotel. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-[#1E1D1B] transition-colors" href="#">Instagram</a>
<a className="hover:text-[#1E1D1B] transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</footer>
</main>


    </>
  );
}
