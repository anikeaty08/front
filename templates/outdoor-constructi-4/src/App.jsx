import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer for Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elementsToReveal = document.querySelectorAll('.reveal');
            elementsToReveal.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav bis_size='{"x":0,"y":1733,"w":1633,"h":81,"abs_x":0,"abs_y":1776}' className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-slate-900/80 backdrop-blur-md">
<div bis_size='{"x":176,"y":1733,"w":1280,"h":80,"abs_x":176,"abs_y":1776}' className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div bis_size='{"x":200,"y":1749,"w":263,"h":48,"abs_x":200,"abs_y":1792}' className="flex gap-2 reveal text-white gap-x-2 gap-y-2 items-center active">
<img alt="PPC Outdoor Living logo" bis_size='{"x":200,"y":1749,"w":96,"h":48,"abs_x":200,"abs_y":1792}' className="w-[24px] h-[24px] object-cover bg-center rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd6bd127-ec61-471c-b522-577d8e261ed6_320w.png" style={{width: '96px', height: '48px'}}/>
<span bis_size='{"x":304,"y":1759,"w":159,"h":28,"abs_x":304,"abs_y":1802}' className="text-lg font-medium tracking-tight">PPC Outdoor Living</span>
</div>
<div bis_size='{"x":785,"y":1763,"w":217,"h":20,"abs_x":785,"abs_y":1806}' className="hidden md:flex gap-8 text-sm text-slate-300 font-medium">
<a bis_size='{"x":785,"y":1763,"w":54,"h":20,"abs_x":785,"abs_y":1806}' className="hover:text-white transition-colors" href="#projects">Projects</a>
<a bis_size='{"x":872,"y":1763,"w":58,"h":20,"abs_x":872,"abs_y":1806}' className="hover:text-white transition-colors" href="#services">Services</a>
<a bis_size='{"x":962,"y":1763,"w":40,"h":20,"abs_x":962,"abs_y":1806}' className="hover:text-white transition-colors" href="#about">About</a>
</div>
<a bis_size='{"x":1324,"y":1755,"w":108,"h":36,"abs_x":1324,"abs_y":1798}' className="hidden md:block bg-white text-slate-900 px-5 py-2.5 rounded-full text-xs font-medium hover:bg-emerald-50 transition-colors reveal active" href="#contact">
                Get a Quote
            </a>
</div>
</nav>

<header bis_size='{"x":0,"y":0,"w":1633,"h":954,"abs_x":0,"abs_y":43}' className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-slate-900 text-white overflow-hidden">

<div bis_size='{"x":0,"y":0,"w":1633,"h":954,"abs_x":0,"abs_y":43}' className="absolute inset-0 z-0">
<img alt="Luxury Decking Sydney" bis_size='{"x":0,"y":0,"w":1633,"h":954,"abs_x":0,"abs_y":43}' className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":0,"y":0,"w":1633,"h":954,"abs_x":0,"abs_y":43}' className="bg-gradient-to-b from-black/40 via-black/60 to-black absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div bis_size='{"x":176,"y":206,"w":1280,"h":541,"abs_x":176,"abs_y":249}' className="z-10 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pl-6 relative">
<div bis_size='{"x":200,"y":286,"w":768,"h":461,"abs_x":200,"abs_y":329}' className="max-w-3xl">
<div bis_size='{"x":200,"y":286,"w":768,"h":20,"abs_x":200,"abs_y":329}' className="flex items-center gap-2 mb-6 text-emerald-400 text-sm font-medium tracking-wide uppercase reveal active">
<span bis_size='{"x":200,"y":292,"w":8,"h":8,"abs_x":200,"abs_y":335}' className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Sydney's Premier Outdoor Builder
                </div>
<h1 bis_size='{"x":200,"y":330,"w":768,"h":144,"abs_x":200,"abs_y":373}' className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8 reveal stagger-1 active">
                    Building your dream <br bis_size='{"x":855,"y":322,"w":0,"h":87,"abs_x":855,"abs_y":365}'/>
<span bis_size='{"x":200,"y":394,"w":619,"h":87,"abs_x":200,"abs_y":437}' className="text-emerald-400">outdoor sanctuary.</span>
</h1>
<p bis_size='{"x":200,"y":506,"w":672,"h":96,"abs_x":200,"abs_y":549}' className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-2xl mb-12 reveal stagger-2 active">
                    Specializing in high-end pergolas, carports, and timber decking. We transform Sydney backyards into functional living spaces.
                </p>

<div bis_size='{"x":200,"y":618,"w":672,"h":56,"abs_x":200,"abs_y":661}' className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 reveal stagger-2 active">
<a bis_size='{"x":200,"y":618,"w":220,"h":44,"abs_x":200,"abs_y":661}' className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-900 px-6 py-3 text-sm font-medium transition-colors hover:bg-emerald-50 w-full sm:w-auto" href="#contact">
                        Get a Quote
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-900/5">
<svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a bis_size='{"x":424,"y":618,"w":220,"h":44,"abs_x":424,"abs_y;:661}' className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 text-white px-6 py-3 text-sm font-medium transition-colors hover:bg-white/10 w-full sm:w-auto" href="#projects">
                        View Projects
                        <svg className="lucide lucide-images w-4 h-4" data-lucide="images" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16"></path><path d="M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2"></path><circle cx="13" cy="7" fill="currentColor" r="1"></circle><rect height="14" rx="2" width="14" x="8" y="2"></rect></svg>
</a>
</div>

<div bis_size='{"x":200,"y":650,"w":768,"h":97,"abs_x":200,"abs_y":693}' className="flex flex-col sm:flex-row gap-8 sm:gap-16 border-t border-white/20 pt-8 reveal stagger-3 active">
<div bis_size='{"x":200,"y":683,"w":132,"h":64,"abs_x":200,"abs_y":726}'>
<span bis_size='{"x":200,"y":683,"w":132,"h":40,"abs_x":200,"abs_y":726}' className="block text-4xl font-medium tracking-tight">15+</span>
<span bis_size='{"x":200,"y":727,"w":132,"h":20,"abs_x":200,"abs_y":770}' className="text-sm text-slate-400 mt-1 block">Years of Experience</span>
</div>
<div bis_size='{"x":397,"y":683,"w":120,"h":64,"abs_x":397,"abs_y":726}' className="">
<span bis_size='{"x":397,"y":683,"w":120,"h":40,"abs_x":397,"abs_y":726}' className="block text-4xl font-medium tracking-tight">850+</span>
<span bis_size='{"x":397,"y":727,"w":120,"h":20,"abs_x":397,"abs_y":770}' className="text-sm text-slate-400 mt-1 block">Projects Delivered</span>
</div>
</div>
</div>
</div>
</header>

<section bis_size='{"x":0,"y":954,"w":1633,"h":871,"abs_x":0,"abs_y":997}' className="py-24 md:py-32 bg-white" id="about">
<div bis_size='{"x":176,"y":1082,"w":1280,"h":615,"abs_x":176,"abs_y":1125}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":200,"y":1082,"w":1232,"h":615,"abs_x":200,"abs_y":1125}' className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div bis_size='{"x":200,"y":1082,"w":368,"h":615,"abs_x":200,"abs_y":1125}' className="lg:col-span-4 reveal">
<span bis_size='{"x":200,"y":1083,"w":108,"h":25,"abs_x":200,"abs_y":1126}' className="border border-slate-200 px-3 py-1 rounded-md text-xs font-medium text-slate-500 uppercase tracking-wide">Who we are</span>
</div>
<div bis_size='{"x":632,"y":1082,"w":800,"h":615,"abs_x":632,"abs_y":1125}' className="lg:col-span-8">
<h2 bis_size='{"x":632,"y":1082,"w":800,"h":120,"abs_x":632,"abs_y":1125}' className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-10 leading-tight reveal">
                        Expert craftsmanship for Sydney's outdoor lifestyle. Residential, Commercial, and Landscape Projects.
                    </h2>
<div bis_size='{"x":632,"y":1266,"w":800,"h":431,"abs_x":632,"abs_y":1309}' className="grid md:grid-cols-2 gap-12 mt-16">
<div bis_size='{"x":632,"y":1266,"w":376,"h":191,"abs_x":632,"abs_y":1309}' className="reveal stagger-1">
<div bis_size='{"x":632,"y":1266,"w":40,"h":40,"abs_x":632,"abs_y":1309}' className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-6">
<svg bis_size='{"x":642,"y":1276,"w":20,"h":20,"abs_x":642,"abs_y":1319}' className="lucide lucide-ruler text-slate-900 w-5 h-5" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
</div>
<h3 bis_size='{"x":632,"y":1330,"w":376,"h":28,"abs_x":632,"abs_y":1373}' className="text-lg font-medium text-slate-900 mb-3">Custom Design</h3>
<p bis_size='{"x":632,"y":1370,"w":376,"h":87,"abs_x":632,"abs_y":1413}' className="text-lg text-slate-500 leading-relaxed">
                                Every home is unique. We design pergolas and patios that seamlessly integrate with your existing architecture and landscape.
                            </p>
</div>
<div bis_size='{"x":1056,"y":1266,"w":376,"h":191,"abs_x":1056,"abs_y":1309}' className="reveal stagger-2">
<div bis_size='{"x":1056,"y":1266,"w":40,"h":40,"abs_x":1056,"abs_y":1309}' className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-6">
<svg bis_size='{"x":1066,"y":1276,"w":20,"h":20,"abs_x":1066,"abs_y":1319}' className="lucide lucide-shield-check text-slate-900 w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 bis_size='{"x":1056,"y":1330,"w":376,"h":28,"abs_x":1056,"abs_y":1373}' className="text-lg font-medium text-slate-900 mb-3">Quality Materials</h3>
<p bis_size='{"x":1056,"y":1370,"w":376,"h":87,"abs_x":1056,"abs_y":1413}' className="text-lg text-slate-500 leading-relaxed">
                                We use only premium Australian timber and weather-resistant materials to ensure your project withstands the elements.
                            </p>
</div>
<div bis_size='{"x":632,"y":1505,"w":376,"h":191,"abs_x":632,"abs_y":1548}' className="reveal stagger-3">
<div bis_size='{"x":632,"y":1505,"w":40,"h":40,"abs_x":632,"abs_y":1548}' className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center mb-6">
<svg bis_size='{"x":642,"y":1515,"w":20,"h":20,"abs_x":642,"abs_y":1558}' className="lucide lucide-hard-hat text-slate-900 w-5 h-5" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M14 6a6 6 0 0 1 6 6v3"></path><path d="M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></svg>
</div>
<h3 bis_size='{"x":632,"y":1569,"w":376,"h":28,"abs_x":632,"abs_y":1612}' className="text-lg font-medium text-slate-900 mb-3">Local Expertise</h3>
<p bis_size='{"x":632,"y":1609,"w":376,"h":87,"abs_x":632,"abs_y":1652}' className="text-lg text-slate-500 leading-relaxed">
                                Fully licensed and insured in NSW. We handle all council approvals and compliance requirements for your peace of mind.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1825,"w":1633,"h":919,"abs_x":0,"abs_y":1868}' className="py-24 bg-slate-950 text-white" id="projects">
<div bis_size='{"x":176,"y":1921,"w":1280,"h":727,"abs_x":176,"abs_y":1964}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":200,"y":1921,"w":1232,"h":88,"abs_x":200,"abs_y":1964}' className="flex justify-between items-end mb-16 reveal">
<div bis_size='{"x":200,"y":1921,"w":436,"h":88,"abs_x":200,"abs_y":1964}' className="">
<span bis_size='{"x":200,"y":1922,"w":139,"h":25,"abs_x":200,"abs_y":1965}' className="border border-white/20 px-3 py-1 rounded-md text-xs font-medium text-slate-400 uppercase tracking-wide">Selected Works</span>
<h2 bis_size='{"x":200,"y":1969,"w":436,"h":40,"abs_x":200,"abs_y":2012}' className="text-3xl md:text-4xl font-medium mt-6 tracking-tight">Our latest transformations.</h2>
</div>
<a bis_size='{"x":1298,"y":1989,"w":133,"h":20,"abs_x":1298,"abs_y":2032}' className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">
                    View all projects <svg bis_size='{"x":1416,"y":1991,"w":16,"h":16,"abs_x":1416,"abs_y":2034}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div bis_size='{"x":200,"y":2073,"w":1232,"h":575,"abs_x":200,"abs_y":2116}' className="grid md:grid-cols-3 gap-8">

<div bis_size='{"x":200,"y":2073,"w":389,"h":575,"abs_x":200,"abs_y":2116}' className="group cursor-pointer reveal stagger-1">
<div bis_size='{"x":200,"y":2073,"w":389,"h":486,"abs_x":200,"abs_y":2116}' className="overflow-hidden rounded-lg mb-6 aspect-[4/5] relative">
<img alt="Pergola in Bondi" bis_size='{"x":200,"y":2073,"w":389,"h":486,"abs_x":200,"abs_y":2116}' className="transform group-hover:scale-105 transition duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3665590f-4d26-4c5c-9461-b5d349d20a13_800w.jpg"/>
<div bis_size='{"x":200,"y":2073,"w":389,"h":486,"abs_x":200,"abs_y":2116}' className="group-hover:bg-black/20 transition duration-500 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div bis_size='{"x":200,"y":2584,"w":389,"h":65,"abs_x":200,"abs_y":2627}' className="flex justify-between items-start border-t border-white/10 pt-4">
<div bis_size='{"x":200,"y":2601,"w":202,"h":48,"abs_x":200,"abs_y":2644}'>
<span bis_size='{"x":200,"y":2601,"w":202,"h":16,"abs_x":200,"abs_y":2644}' className="text-xs text-slate-400 mb-1 block">Bondi, NSW</span>
<h3 bis_size='{"x":200,"y":2621,"w":202,"h":28,"abs_x":200,"abs_y":2664}' className="text-lg font-medium">Modern Timber Pergola</h3>
</div>
</div>
</div>

<div bis_size='{"x":621,"y":2073,"w":389,"h":575,"abs_x":621,"abs_y":2116}' className="group cursor-pointer reveal stagger-2">
<div bis_size='{"x":621,"y":2073,"w":389,"h":486,"abs_x":621,"abs_y":2116}' className="overflow-hidden rounded-lg mb-6 aspect-[4/5] relative">
<img alt="Decking in Mosman" bis_size='{"x":621,"y":2073,"w":389,"h":486,"abs_x":621,"abs_y":2116}' className="transform group-hover:scale-105 transition duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa69bdae-c8b9-43ba-b5ce-6a62b53393ca_800w.jpg"/>
<div bis_size='{"x":621,"y":2073,"w":389,"h":486,"abs_x":621,"abs_y":2116}' className="group-hover:bg-black/20 transition duration-500 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div bis_size='{"x":621,"y":2584,"w":389,"h":65,"abs_x":621,"abs_y":2627}' className="flex justify-between items-start border-t border-white/10 pt-4">
<div bis_size='{"x":621,"y":2601,"w":233,"h":48,"abs_x":621,"abs_y":2644}'>
<span bis_size='{"x":621,"y":2601,"w":233,"h":16,"abs_x":621,"abs_y":2644}' className="text-xs text-slate-400 mb-1 block">Mosman, NSW</span>
<h3 bis_size='{"x":621,"y":2621,"w":233,"h":28,"abs_x":621,"abs_y":2664}' className="text-lg font-medium">Multi-level Hardwood Deck</h3>
</div>
</div>
</div>

<div bis_size='{"x":1043,"y":2073,"w":389,"h":575,"abs_x":1043,"abs_y":2116}' className="group cursor-pointer reveal stagger-3">
<div bis_size='{"x":1043,"y":2073,"w":389,"h":486,"abs_x":1043,"abs_y":2116}' className="overflow-hidden rounded-lg mb-6 aspect-[4/5] relative">
<img alt="Sunroom in Surrey Hills" bis_size='{"x":1043,"y":2073,"w":389,"h":486,"abs_x":1043,"abs_y":2116}' className="transform group-hover:scale-105 transition duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90429762-6490-4925-9204-0a759572f255_800w.jpg"/>
<div bis_size='{"x":1043,"y":2073,"w":389,"h":486,"abs_x":1043,"abs_y":2116}' className="group-hover:bg-black/20 transition duration-500 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div bis_size='{"x":1043,"y":2584,"w":389,"h":65,"abs_x":1043,"abs_y":2627}' className="flex justify-between items-start border-t border-white/10 pt-4">
<div bis_size='{"x":1043,"y":2601,"w":213,"h":48,"abs_x":1043,"abs_y":2644}'>
<span bis_size='{"x":1043,"y":2601,"w":213,"h":16,"abs_x":1043,"abs_y":2644}' className="text-xs text-slate-400 mb-1 block">Surry Hills, NSW</span>
<h3 bis_size='{"x":1043,"y":2621,"w":213,"h":28,"abs_x":1043,"abs_y":2664}' className="text-lg font-medium">Glass Enclosed Sunroom</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2745,"w":1633,"h":792,"abs_x":0,"abs_y":2788}' className="py-24 bg-white overflow-hidden">
<div bis_size='{"x":176,"y":2841,"w":1280,"h":600,"abs_x":176,"abs_y":2884}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":200,"y":2841,"w":1232,"h":600,"abs_x":200,"abs_y":2884}' className="grid lg:grid-cols-2 gap-20 items-center">
<div bis_size='{"x":200,"y":2892,"w":576,"h":496,"abs_x":200,"abs_y":2935}' className="reveal">
<span bis_size='{"x":200,"y":2893,"w":145,"h":25,"abs_x":200,"abs_y":2936}' className="border border-slate-200 px-3 py-1 rounded-md text-xs font-medium text-slate-500 uppercase tracking-wide">Our Commitment</span>
<h2 bis_size='{"x":200,"y":2940,"w":576,"h":80,"abs_x":200,"abs_y":2983}' className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mt-6 mb-8">Why Sydney homeowners choose PPC.</h2>
<p bis_size='{"x":200,"y":3052,"w":576,"h":87,"abs_x":200,"abs_y":3095}' className="text-lg text-slate-500 mb-10 leading-relaxed">
                        At PPC Outdoor Living, we understand that renovating your outdoor area is a significant investment. We prioritize transparency, punctuality, and structural integrity in every build.
                    </p>
<div bis_size='{"x":200,"y":3180,"w":576,"h":56,"abs_x":200,"abs_y":3223}' className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
<div bis_size='{"x":200,"y":3180,"w":272,"h":20,"abs_x":200,"abs_y":3223}' className="flex items-center gap-3">
<svg bis_size='{"x":200,"y":3180,"w":20,"h":20,"abs_x":200,"abs_y":3223}' className="lucide lucide-check-circle-2 w-5 h-5 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span bis_size='{"x":232,"y":3180,"w":177,"h":20,"abs_x":232,"abs_y":3223}' className="text-sm font-medium text-slate-700">Council Approval Handling</span>
</div>
<div bis_size='{"x":504,"y":3180,"w":272,"h":20,"abs_x":504,"abs_y":3223}' className="flex items-center gap-3">
<svg bis_size='{"x":504,"y":3180,"w":20,"h":20,"abs_x":504,"abs_y":3223}' className="lucide lucide-check-circle-2 w-5 h-5 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span bis_size='{"x":536,"y":3180,"w":139,"h":20,"abs_x":536,"abs_y":3223}' className="text-sm font-medium text-slate-700">On-Time, On-Budget</span>
</div>
<div bis_size='{"x":200,"y":3216,"w":272,"h":20,"abs_x":200,"abs_y":3259}' className="flex items-center gap-3">
<svg bis_size='{"x":200,"y":3216,"w":20,"h":20,"abs_x":200,"abs_y":3259}' className="lucide lucide-check-circle-2 w-5 h-5 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span bis_size='{"x":232,"y":3216,"w":164,"h":20,"abs_x":232,"abs_y":3259}' className="text-sm font-medium text-slate-700">Master Builders Member</span>
</div>
<div bis_size='{"x":504,"y":3216,"w":272,"h":20,"abs_x":504,"abs_y":3259}' className="flex items-center gap-3">
<svg bis_size='{"x":504,"y":3216,"w":20,"h":20,"abs_x":504,"abs_y":3259}' className="lucide lucide-check-circle-2 w-5 h-5 text-emerald-600" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span bis_size='{"x":536,"y":3216,"w":131,"h":20,"abs_x":536,"abs_y":3259}' className="text-sm font-medium text-slate-700">Structural Warranty</span>
</div>
</div>
<div bis_size='{"x":200,"y":3284,"w":576,"h":105,"abs_x":200,"abs_y":3327}' className="grid grid-cols-2 gap-12 border-t border-slate-100 pt-10">
<div bis_size='{"x":200,"y":3325,"w":264,"h":64,"abs_x":200,"abs_y":3368}'>
<span bis_size='{"x":200,"y":3325,"w":264,"h":40,"abs_x":200,"abs_y":3368}' className="block text-4xl font-medium text-slate-900 tracking-tight">100%</span>
<span bis_size='{"x":200,"y":3373,"w":264,"h":16,"abs_x":200,"abs_y":3416}' className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-2 block">Client Satisfaction</span>
</div>
<div bis_size='{"x":512,"y":3325,"w":264,"h":64,"abs_x":512,"abs_y":3368}'>
<span bis_size='{"x":512,"y":3325,"w":264,"h":40,"abs_x":512,"abs_y":3368}' className="block text-4xl font-medium text-slate-900 tracking-tight">25+</span>
<span bis_size='{"x":512,"y":3373,"w":264,"h":16,"abs_x":512,"abs_y":3416}' className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-2 block">Licensed Contractors</span>
</div>
</div>
</div>
<div bis_size='{"x":856,"y":2841,"w":576,"h":600,"abs_x":856,"abs_y":2884}' className="relative h-[600px] w-full reveal stagger-2">
<img alt="Construction Worker" bis_size='{"x":856,"y":2841,"w":576,"h":600,"abs_x":856,"abs_y":2884}' className="w-full h-full object-cover rounded-sm absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa69bdae-c8b9-43ba-b5ce-6a62b53393ca_1600w.jpg"/>

<div bis_size='{"x":888,"y":3311,"w":384,"h":98,"abs_x":888,"abs_y":3354}' className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 border border-slate-100 shadow-xl max-w-sm rounded-sm">
<div bis_size='{"x":913,"y":3336,"w":334,"h":48,"abs_x":913,"abs_y":3379}' className="flex items-center gap-4">
<div bis_size='{"x":913,"y":3336,"w":48,"h":48,"abs_x":913,"abs_y":3379}' className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700">
<svg bis_size='{"x":925,"y":3348,"w":24,"h":24,"abs_x":925,"abs_y":3391}' className="lucide lucide-hard-hat w-6 h-6" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M14 6a6 6 0 0 1 6 6v3"></path><path d="M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></svg>
</div>
<div bis_size='{"x":977,"y":3340,"w":224,"h":40,"abs_x":977,"abs_y":3383}'>
<p bis_size='{"x":977,"y":3340,"w":224,"h":20,"abs_x":977,"abs_y":3383}' className="text-sm font-medium text-slate-900">Safety First</p>
<p bis_size='{"x":977,"y":3360,"w":224,"h":20,"abs_x":977,"abs_y":3403}' className="text-sm text-slate-500">Fully compliant with AU standards</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3537,"w":1633,"h":910,"abs_x":0,"abs_y":3580}' className="py-24 bg-slate-50" id="services">
<div bis_size='{"x":176,"y":3633,"w":1280,"h":718,"abs_x":176,"abs_y":3676}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":200,"y":3633,"w":1232,"h":718,"abs_x":200,"abs_y":3676}' className="grid lg:grid-cols-12 gap-16">
<div bis_size='{"x":200,"y":3633,"w":368,"h":718,"abs_x":200,"abs_y":3676}' className="lg:col-span-4 reveal">
<div bis_size='{"x":200,"y":3633,"w":368,"h":355,"abs_x":200,"abs_y":3676}' className="sticky top-32">
<span bis_size='{"x":200,"y":3634,"w":123,"h":25,"abs_x":200,"abs_y":3677}' className="border border-slate-300 px-3 py-1 rounded-md text-xs font-medium text-slate-600 uppercase tracking-wide">Our Expertise</span>
<h2 bis_size='{"x":200,"y":3681,"w":368,"h":120,"abs_x":200,"abs_y":3724}' className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mt-6 mb-6">Comprehensive outdoor construction services.</h2>
<p bis_size='{"x":200,"y":3825,"w":368,"h":87,"abs_x":200,"abs_y":3868}' className="text-lg text-slate-500 mb-8 leading-relaxed">
                            From initial planning to final touches, our skilled team is dedicated to delivering excellence in every project aspect.
                        </p>
<a bis_size='{"x":200,"y":3944,"w":215,"h":44,"abs_x":200,"abs_y":3987}' className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors" href="#contact">
                            Request Consultation <svg bis_size='{"x":375,"y":3958,"w":16,"h":16,"abs_x":375,"abs_y":4001}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div bis_size='{"x":632,"y":3633,"w":800,"h":718,"abs_x":632,"abs_y":3676}' className="lg:col-span-8">
<div bis_size='{"x":632,"y":3633,"w":800,"h":718,"abs_x":632,"abs_y":3676}' className="space-y-0">

<div bis_size='{"x":632,"y":3633,"w":800,"h":179,"abs_x":632,"abs_y":3676}' className="group py-10 border-b border-slate-200 reveal">
<div bis_size='{"x":632,"y":3673,"w":800,"h":98,"abs_x":632,"abs_y":3716}' className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span bis_size='{"x":632,"y":3679,"w":16,"h":20,"abs_x":632,"abs_y":3722}' className="text-sm font-mono text-slate-400">01</span>
<div bis_size='{"x":697,"y":3673,"w":735,"h":98,"abs_x":697,"abs_y":3716}' className="flex-1">
<h3 bis_size='{"x":697,"y":3673,"w":735,"h":28,"abs_x":697,"abs_y":3716}' className="text-xl font-medium text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">Pergolas &amp; Patios</h3>
<p bis_size='{"x":697,"y":3713,"w":735,"h":58,"abs_x":697,"abs_y":3756}' className="text-lg text-slate-500 leading-relaxed">
                                        Custom-designed structures to provide shade and style. Available in timber, steel, or aluminum finishes to match your home's aesthetic.
                                    </p>
</div>
</div>
</div>

<div bis_size='{"x":632,"y":3812,"w":800,"h":179,"abs_x":632,"abs_y":3855}' className="group py-10 border-b border-slate-200 reveal">
<div bis_size='{"x":632,"y":3852,"w":800,"h":98,"abs_x":632,"abs_y":3895}' className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span bis_size='{"x":632,"y":3858,"w":16,"h":20,"abs_x":632,"abs_y":3901}' className="text-sm font-mono text-slate-400">02</span>
<div bis_size='{"x":697,"y":3852,"w":735,"h":98,"abs_x":697,"abs_y":3895}' className="flex-1">
<h3 bis_size='{"x":697,"y":3852,"w":735,"h":28,"abs_x":697,"abs_y":3895}' className="text-xl font-medium text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">Timber &amp; Composite Decking</h3>
<p bis_size='{"x":697,"y":3892,"w":735,"h":58,"abs_x":697,"abs_y":3935}' className="text-lg text-slate-500 leading-relaxed">
                                        Expertise in laying strong, durable foundations to support various structures. We work with Merbau, Spotted Gum, and premium composite boards.
                                    </p>
</div>
</div>
</div>

<div bis_size='{"x":632,"y":3992,"w":800,"h":179,"abs_x":632,"abs_y":4035}' className="group py-10 border-b border-slate-200 reveal">
<div bis_size='{"x":632,"y":4032,"w":800,"h":98,"abs_x":632,"abs_y":4075}' className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span bis_size='{"x":632,"y":4038,"w":16,"h":20,"abs_x":632,"abs_y":4081}' className="text-sm font-mono text-slate-400">03</span>
<div bis_size='{"x":697,"y":4032,"w":735,"h":98,"abs_x":697,"abs_y":4075}' className="flex-1">
<h3 bis_size='{"x":697,"y":4032,"w":735,"h":28,"abs_x":697,"abs_y":4075}' className="text-xl font-medium text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">Carports</h3>
<p bis_size='{"x":697,"y":4072,"w":735,"h":58,"abs_x":697,"abs_y":4115}' className="text-lg text-slate-500 leading-relaxed">
                                        Protect your vehicles with a stylish carport that adds value to your property. Integrated storage solutions available.
                                    </p>
</div>
</div>
</div>

<div bis_size='{"x":632,"y":4171,"w":800,"h":179,"abs_x":632,"abs_y":4214}' className="group py-10 border-b border-slate-200 reveal">
<div bis_size='{"x":632,"y":4211,"w":800,"h":98,"abs_x":632,"abs_y":4254}' className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
<span bis_size='{"x":632,"y":4217,"w":16,"h":20,"abs_x":632,"abs_y":4260}' className="text-sm font-mono text-slate-400">04</span>
<div bis_size='{"x":697,"y":4211,"w":735,"h":98,"abs_x":697,"abs_y":4254}' className="flex-1">
<h3 bis_size='{"x":697,"y":4211,"w":735,"h":28,"abs_x":697,"abs_y":4254}' className="text-xl font-medium text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors">Sunrooms</h3>
<p bis_size='{"x":697,"y":4251,"w":735,"h":58,"abs_x":697,"abs_y":4294}' className="text-lg text-slate-500 leading-relaxed">
                                        Expand your indoor living space outwards. Insulated roofing and glass wall systems for year-round comfort.
                                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4447,"w":1633,"h":826,"abs_x":0,"abs_y":4490}' className="py-32 bg-slate-950 text-white border-t border-white/5">
<div bis_size='{"x":368,"y":4576,"w":896,"h":332,"abs_x":368,"abs_y":4619}' className="max-w-4xl mx-auto px-6 text-center reveal">
<div bis_size='{"x":392,"y":4576,"w":848,"h":40,"abs_x":392,"abs_y":4619}' className="flex justify-center -space-x-3 mb-8">
<img alt="User" bis_size='{"x":768,"y":4576,"w":40,"h":40,"abs_x":768,"abs_y":4619}' className="w-10 h-10 rounded-full border-2 border-slate-950" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<img alt="User" bis_size='{"x":796,"y":4576,"w":40,"h":40,"abs_x":796,"abs_y":4619}' className="w-10 h-10 rounded-full border-2 border-slate-950" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div bis_size='{"x":824,"y":4576,"w":40,"h":40,"abs_x":824,"abs_y":4619}' className="w-10 h-10 rounded-full border-2 border-slate-950 bg-emerald-600 flex items-center justify-center text-xs font-bold">+99</div>
</div>
<div bis_size='{"x":392,"y":4648,"w":848,"h":20,"abs_x":392,"abs_y":4691}' className="mb-8 text-sm text-slate-400 uppercase tracking-widest font-semibold">Trusted by Sydney Families</div>
<h3 bis_size='{"x":392,"y":4700,"w":848,"h":144,"abs_x":392,"abs_y":4743}' className="text-2xl md:text-3xl font-medium leading-relaxed mb-10">
                "PPC Outdoor Living exceeded our expectations in every way. Their attention to detail on our new deck and pergola was evident throughout. We couldn't be happier with the result."
            </h3>
<div bis_size='{"x":392,"y":4884,"w":848,"h":24,"abs_x":392,"abs_y":4927}' className="text-base text-slate-400">
<span bis_size='{"x":658,"y":4886,"w":121,"h":20,"abs_x":658,"abs_y":4929}' className="text-white font-medium">Sarah &amp; Mark T.</span> — Homeowners, Coogee
            </div>
</div>
<div bis_size='{"x":176,"y":5004,"w":1280,"h":141,"abs_x":176,"abs_y":5047}' className="max-w-7xl mx-auto px-6 mt-24 border-t border-white/10 pt-16 reveal">
<p bis_size='{"x":200,"y":5069,"w":1232,"h":16,"abs_x":200,"abs_y":5112}' className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-8">Our Suppliers</p>
<div bis_size='{"x":200,"y":5117,"w":1232,"h":28,"abs_x":200,"abs_y":5160}' className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div bis_size='{"x":200,"y":5117,"w":220,"h":28,"abs_x":200,"abs_y":5160}' className="flex items-center gap-2 font-bold text-xl"><svg bis_size='{"x":200,"y":5119,"w":24,"h":24,"abs_x":200,"abs_y":5162}' className="lucide lucide-layers w-6 h-6" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg> JamesHardie</div>
<div bis_size='{"x":453,"y":5117,"w":220,"h":28,"abs_x":453,"abs_y":5160}' className="flex items-center gap-2 font-bold text-xl"><svg bis_size='{"x":453,"y":5119,"w":24,"h":24,"abs_x":453,"abs_y":5162}' className="lucide lucide-hexagon w-6 h-6" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg> Colorbond</div>
<div bis_size='{"x":706,"y":5117,"w":220,"h":28,"abs_x":706,"abs_y":5160}' className="flex items-center gap-2 font-bold text-xl"><svg bis_size='{"x":706,"y":5119,"w":24,"h":24,"abs_x":706,"abs_y":5162}' className="lucide lucide-triangle w-6 h-6" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg> Stratco</div>
<div bis_size='{"x":958,"y":5117,"w":220,"h":28,"abs_x":958,"abs_y":5160}' className="flex items-center gap-2 font-bold text-xl"><svg bis_size='{"x":958,"y":5119,"w":24,"h":24,"abs_x":958,"abs_y":5162}' className="lucide lucide-box w-6 h-6" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> Trex</div>
<div bis_size='{"x":1211,"y":5117,"w":220,"h":28,"abs_x":1211,"abs_y":5160}' className="flex items-center gap-2 font-bold text-xl"><svg bis_size='{"x":1211,"y":5119,"w":24,"h":24,"abs_x":1211,"abs_y":5162}' className="lucide lucide-circle w-6 h-6" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg> Dulux</div>
</div>
</div>
</section>



<section bis_size='{"x":0,"y":5972,"w":1633,"h":768,"abs_x":0,"abs_y":6015}' className="py-24 bg-slate-50 relative overflow-hidden" id="contact">
<div bis_size='{"x":176,"y":6068,"w":1280,"h":576,"abs_x":176,"abs_y":6111}' className="max-w-7xl mx-auto px-6 relative z-10">
<div bis_size='{"x":200,"y":6068,"w":1232,"h":576,"abs_x":200,"abs_y":6111}' className="grid lg:grid-cols-12 gap-16">

<div bis_size='{"x":200,"y":6068,"w":476,"h":576,"abs_x":200,"abs_y":6111}' className="lg:col-span-5 reveal">
<span bis_size='{"x":200,"y":6069,"w":173,"h":25,"abs_x":200,"abs_y":6112}' className="border border-slate-300 px-3 py-1 rounded-md text-xs font-medium text-slate-600 uppercase tracking-wide">Let's Work Together</span>
<h2 bis_size='{"x":200,"y":6116,"w":476,"h":80,"abs_x":200,"abs_y":6159}' className="text-4xl font-medium text-slate-900 tracking-tight mt-6 mb-6">Ready to build your dream project?</h2>
<p bis_size='{"x":200,"y":6220,"w":476,"h":87,"abs_x":200,"abs_y":6263}' className="text-lg text-slate-500 mb-12 leading-relaxed">
                        Whether you have a clear vision or need guidance to bring your ideas to life, PPC Outdoor Living is here to help. Fill out the form to request a free site inspection.
                    </p>

<div bis_size='{"x":200,"y":6356,"w":476,"h":200,"abs_x":200,"abs_y":6399}' className="opacity-20 pointer-events-none select-none">
<svg bis_size='{"x":200,"y":6356,"w":300,"h":200,"abs_x":200,"abs_y":6399}' className="text-slate-900" fill="none" height="200" stroke="currentColor" strokeWidth="1" viewbox="0 0 300 200" width="300">
<path bis_size='{"x":210,"y":6546,"w":280,"h":0,"abs_x":210,"abs_y":6589}' d="M10 190 H290"></path>
<path bis_size='{"x":240,"y":6396,"w":220,"h":150,"abs_x":240,"abs_y":6439}' d="M40 190 V100 L150 40 L260 100 V190"></path>
<path bis_size='{"x":310,"y":6486,"w":80,"h":60,"abs_x":310,"abs_y":6529}' d="M110 190 V130 H190 V190"></path>
<path bis_size='{"x":270,"y":6456,"w":160,"h":0,"abs_x":270,"abs_y":6499}' d="M70 100 H90 M210 100 H230"></path>
</svg>
</div>
</div>

<div bis_size='{"x":740,"y":6068,"w":692,"h":576,"abs_x":740,"abs_y":6111}' className="lg:col-span-7 reveal stagger-1">
<div bis_size='{"x":740,"y":6068,"w":692,"h":576,"abs_x":740,"abs_y":6111}' className="bg-white p-8 md:p-10 shadow-sm border border-slate-200 rounded-sm">
<h3 bis_size='{"x":781,"y":6109,"w":610,"h":28,"abs_x":781,"abs_y":6152}' className="text-xl font-medium text-slate-900 mb-8">Get in touch with us today!</h3>
<form bis_size='{"x":781,"y":6169,"w":610,"h":434,"abs_x":781,"abs_y":6212}' className="space-y-6">
<div bis_size='{"x":781,"y":6169,"w":610,"h":73,"abs_x":781,"abs_y":6212}' className="grid grid-cols-2 gap-6">
<div bis_size='{"x":781,"y":6169,"w":293,"h":73,"abs_x":781,"abs_y":6212}' className="space-y-2">
<label bis_size='{"x":781,"y":6175,"w":72,"h":15,"abs_x":781,"abs_y":6218}' className="text-xs font-medium text-slate-500 uppercase">First Name</label>
<input bis_size='{"x":781,"y":6201,"w":293,"h":41,"abs_x":781,"abs_y":6244}' className="w-full border-b border-slate-300 py-2 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300 bg-transparent" placeholder="John" type="text"/>
</div>
<div bis_size='{"x":1098,"y":6169,"w":293,"h":73,"abs_x":1098,"abs_y":6212}' className="space-y-2">
<label bis_size='{"x":1098,"y":6175,"w":69,"h":15,"abs_x":1098,"abs_y":6218}' className="text-xs font-medium text-slate-500 uppercase">Last Name</label>
<input bis_size='{"x":1098,"y":6201,"w":293,"h":41,"abs_x":1098,"abs_y":6244}' className="w-full border-b border-slate-300 py-2 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300 bg-transparent" placeholder="Doe" type="text"/>
</div>
</div>
<div bis_size='{"x":781,"y":6266,"w":610,"h":73,"abs_x":781,"abs_y":6309}' className="grid grid-cols-2 gap-6">
<div bis_size='{"x":781,"y":6266,"w":293,"h":73,"abs_x":781,"abs_y":6309}' className="space-y-2">
<label bis_size='{"x":781,"y":6272,"w":36,"h":15,"abs_x":781,"abs_y":6315}' className="text-xs font-medium text-slate-500 uppercase">Email</label>
<input bis_size='{"x":781,"y":6298,"w":293,"h":41,"abs_x":781,"abs_y":6341}' className="w-full border-b border-slate-300 py-2 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300 bg-transparent" placeholder="john@example.com" type="email"/>
</div>
<div bis_size='{"x":1098,"y":6266,"w":293,"h":73,"abs_x":1098,"abs_y":6309}' className="space-y-2">
<label bis_size='{"x":1098,"y":6272,"w":97,"h":15,"abs_x":1098,"abs_y":6315}' className="text-xs font-medium text-slate-500 uppercase">Phone Number</label>
<input bis_size='{"x":1098,"y":6298,"w":293,"h":41,"abs_x":1098,"abs_y":6341}' className="w-full border-b border-slate-300 py-2 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300 bg-transparent" placeholder="+61 400 000 000" type="tel"/>
</div>
</div>
<div bis_size='{"x":781,"y":6363,"w":610,"h":160,"abs_x":781,"abs_y":6406}' className="space-y-2">
<label bis_size='{"x":781,"y":6369,"w":57,"h":15,"abs_x":781,"abs_y":6412}' className="text-xs font-medium text-slate-500 uppercase">Message</label>
<textarea bis_size='{"x":781,"y":6395,"w":610,"h":122,"abs_x":781,"abs_y":6438}' className="w-full border border-slate-200 p-3 text-slate-900 focus:outline-none focus:border-slate-900 transition-colors placeholder:text-slate-300 bg-slate-50 rounded-sm resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<div bis_size='{"x":781,"y":6547,"w":610,"h":56,"abs_x":781,"abs_y":6590}' className="flex justify-end pt-4">
<button bis_size='{"x":1210,"y":6563,"w":181,"h":40,"abs_x":1210,"abs_y":6606}' className="bg-slate-900 text-white px-8 py-3 rounded-sm text-xs font-medium tracking-wide uppercase hover:bg-emerald-600 transition-colors flex items-center gap-2" type="button">
                                    Send Message <svg bis_size='{"x":1347,"y":6577,"w":12,"h":12,"abs_x":1347,"abs_y":6620}' className="lucide lucide-send w-3 h-3" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":6740,"w":1633,"h":696,"abs_x":0,"abs_y":6783}' className="py-24 bg-white">
<div bis_size='{"x":432,"y":6836,"w":768,"h":504,"abs_x":432,"abs_y":6879}' className="max-w-3xl mx-auto px-6">
<div bis_size='{"x":456,"y":6836,"w":720,"h":84,"abs_x":456,"abs_y":6879}' className="mb-12 reveal">
<span bis_size='{"x":456,"y":6837,"w":50,"h":25,"abs_x":456,"abs_y":6880}' className="border border-slate-200 px-3 py-1 rounded-md text-xs font-medium text-slate-500 uppercase tracking-wide">FAQ</span>
<h2 bis_size='{"x":456,"y":6884,"w":720,"h":36,"abs_x":456,"abs_y":6927}' className="text-3xl font-medium text-slate-900 tracking-tight mt-6">Frequently Asked Questions</h2>
</div>
<div bis_size='{"x":456,"y":6968,"w":720,"h":212,"abs_x":456,"abs_y":7011}' className="space-y-4">
<details bis_size='{"x":456,"y":6968,"w":720,"h":41,"abs_x":456,"abs_y":7011}' className="group border-b border-slate-200 pb-4 cursor-pointer reveal stagger-1">
<summary bis_size='{"x":456,"y":6968,"w":720,"h":24,"abs_x":456,"abs_y":7011}' className="flex justify-between items-center font-medium text-slate-900 list-none">
<span bis_size='{"x":456,"y":6968,"w":394,"h":24,"abs_x":456,"abs_y":7011}'>What types of construction projects do you handle?</span>
<span bis_size='{"x":1160,"y":6972,"w":16,"h":16,"abs_x":1160,"abs_y":7015}' className="transition group-open:rotate-180"><svg bis_size='{"x":1160,"y":6972,"w":16,"h":16,"abs_x":1160,"abs_y":7015}' className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></span>
</summary>
<div bis_size='{"x":0,"y":1733,"w":0,"h":0,"abs_x":0,"abs_y":1776}' className="text-slate-500 mt-3 text-lg leading-relaxed">
                        We specialize in outdoor living structures including pergolas, carports, timber and composite decking, patios, and sunrooms.
                    </div>
</details>
<details bis_size='{"x":456,"y":7025,"w":720,"h":41,"abs_x":456,"abs_y":7068}' className="group border-b border-slate-200 pb-4 cursor-pointer reveal stagger-2">
<summary bis_size='{"x":456,"y":7025,"w":720,"h":24,"abs_x":456,"abs_y":7068}' className="flex justify-between items-center font-medium text-slate-900 list-none">
<span bis_size='{"x":456,"y":7025,"w":256,"h":24,"abs_x":456,"abs_y":7068}'>Do you handle council approvals?</span>
<span bis_size='{"x":1160,"y":7029,"w":16,"h":16,"abs_x":1160,"abs_y":7072}' className="transition group-open:rotate-180"><svg bis_size='{"x":1160,"y":7029,"w":16,"h":16,"abs_x":1160,"abs_y":7072}' className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></span>
</summary>
<div bis_size='{"x":0,"y":1733,"w":0,"h":0,"abs_x":0,"abs_y":1776}' className="text-slate-500 mt-3 text-lg leading-relaxed">
                        Yes, we handle the entire process from design drafting to submitting DA or CDC applications with your local council.
                    </div>
</details>
<details bis_size='{"x":456,"y":7082,"w":720,"h":41,"abs_x":456,"abs_y":7125}' className="group border-b border-slate-200 pb-4 cursor-pointer reveal stagger-3">
<summary bis_size='{"x":456,"y":7082,"w":720,"h":24,"abs_x":456,"abs_y":7125}' className="flex justify-between items-center font-medium text-slate-900 list-none">
<span bis_size='{"x":456,"y":7082,"w":224,"h":24,"abs_x":456,"abs_y":7125}'>What is your typical timeline?</span>
<span bis_size='{"x":1160,"y":7086,"w":16,"h":16,"abs_x":1160,"abs_y":7129}' className="transition group-open:rotate-180"><svg bis_size='{"x":1160,"y":7086,"w":16,"h":16,"abs_x":1160,"abs_y":7129}' className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></span>
</summary>
<div bis_size='{"x":0,"y":1733,"w":0,"h":0,"abs_x":0,"abs_y":1776}' className="text-slate-500 mt-3 text-lg leading-relaxed">
                        Timelines vary by project size and council approval times. Typically, construction takes 1-3 weeks once approvals are received.
                    </div>
</details>
<details bis_size='{"x":456,"y":7139,"w":720,"h":41,"abs_x":456,"abs_y":7182}' className="group border-b border-slate-200 pb-4 cursor-pointer reveal stagger-1">
<summary bis_size='{"x":456,"y":7139,"w":720,"h":24,"abs_x":456,"abs_y":7182}' className="flex justify-between items-center font-medium text-slate-900 list-none">
<span bis_size='{"x":456,"y":7139,"w":230,"h":24,"abs_x":456,"abs_y":7182}'>Are you licensed and insured?</span>
<span bis_size='{"x":1160,"y":7143,"w":16,"h":16,"abs_x":1160,"abs_y":7186}' className="transition group-open:rotate-180"><svg bis_size='{"x":1160,"y":7143,"w":16,"h":16,"abs_x":1160,"abs_y":7186}' className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg></span>
</summary>
<div bis_size='{"x":0,"y":1733,"w":0,"h":0,"abs_x":0,"abs_y":1776}' className="text-slate-500 mt-3 text-lg leading-relaxed">
                        Absolutely. We are fully licensed builders in NSW and carry comprehensive Home Warranty Insurance for all projects over $20,000.
                    </div>
</details>
</div>
<div bis_size='{"x":456,"y":7244,"w":720,"h":96,"abs_x":456,"abs_y":7287}' className="mt-16 reveal">
<h4 bis_size='{"x":456,"y":7244,"w":720,"h":24,"abs_x":456,"abs_y":7287}' className="font-medium text-slate-900 mb-2">You have different questions?</h4>
<p bis_size='{"x":456,"y":7276,"w":720,"h":24,"abs_x":456,"abs_y":7319}' className="text-slate-500 mb-4">Our team will answer all your questions; we ensure a quick response.</p>
<a bis_size='{"x":456,"y":7320,"w":182,"h":17,"abs_x":456,"abs_y":7363}' className="text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors" href="tel:+61123456789">Call us: +61 (123) 456 7890</a>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":7436,"w":1633,"h":647,"abs_x":0,"abs_y":7479}' className="bg-slate-950 text-slate-400 py-20 border-t border-white/5">
<div bis_size='{"x":176,"y":7517,"w":1280,"h":486,"abs_x":176,"abs_y":7560}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":200,"y":7517,"w":1232,"h":96,"abs_x":200,"abs_y":7560}' className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
<div bis_size='{"x":200,"y":7517,"w":592,"h":96,"abs_x":200,"abs_y":7560}' className="col-span-1 lg:col-span-2">
<h3 bis_size='{"x":200,"y":7517,"w":592,"h":32,"abs_x":200,"abs_y":7560}' className="text-2xl font-medium text-white tracking-tight mb-6">Looking to expand your living space?</h3>
<a bis_size='{"x":200,"y":7573,"w":135,"h":40,"abs_x":200,"abs_y":7616}' className="bg-white text-slate-950 px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-emerald-400 transition-colors inline-block" href="#contact">
                        Get a Quote
                    </a>
</div>
<div bis_size='{"x":840,"y":7517,"w":272,"h":96,"abs_x":840,"abs_y":7560}'>

</div>

<div bis_size='{"x":1160,"y":7517,"w":272,"h":96,"abs_x":1160,"abs_y":7560}' className="opacity-20 hidden lg:block">
<svg bis_size='{"x":1160,"y":7517,"w":96,"h":96,"abs_x":1160,"abs_y":7560}' className="lucide lucide-building w-24 h-24 stroke-1" data-lucide="building" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</div>
</div>
<div bis_size='{"x":200,"y":7693,"w":1232,"h":213,"abs_x":200,"abs_y":7736}' className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-12 text-sm">
<div bis_size='{"x":200,"y":7742,"w":278,"h":164,"abs_x":200,"abs_y":7785}' className="col-span-2 md:col-span-1">
<div bis_size='{"x":200,"y":7742,"w":278,"h":20,"abs_x":200,"abs_y":7785}' className="flex items-center gap-2 text-white mb-4">
<svg bis_size='{"x":200,"y":7742,"w":20,"h":20,"abs_x":200,"abs_y":7785}' className="lucide lucide-hammer w-5 h-5 text-emerald-500" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
<span bis_size='{"x":228,"y":7742,"w":86,"h":20,"abs_x":228,"abs_y":7785}' className="font-medium">PPC Outdoor</span>
</div>
<p bis_size='{"x":200,"y":7778,"w":278,"h":68,"abs_x":200,"abs_y":7821}' className="leading-relaxed mb-4">Expert Construction Services for Residential, Commercial, and Landscape Projects in Sydney.</p>
<div bis_size='{"x":200,"y":7862,"w":278,"h":16,"abs_x":200,"abs_y":7905}' className="flex gap-4">
<a bis_size='{"x":200,"y":7862,"w":16,"h":16,"abs_x":200,"abs_y":7905}' className="hover:text-white transition-colors" href="#"><svg bis_size='{"x":200,"y":7862,"w":16,"h":16,"abs_x":200,"abs_y":7905}' className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a bis_size='{"x":232,"y":7862,"w":16,"h":16,"abs_x":232,"abs_y":7905}' className="hover:text-white transition-colors" href="#"><svg bis_size='{"x":232,"y":7862,"w":16,"h":16,"abs_x":232,"abs_y":7905}' className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a bis_size='{"x":264,"y":7862,"w":16,"h":16,"abs_x":264,"abs_y":7905}' className="hover:text-white transition-colors" href="#"><svg bis_size='{"x":264,"y":7862,"w":16,"h":16,"abs_x":264,"abs_y":7905}' className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div bis_size='{"x":518,"y":7742,"w":278,"h":164,"abs_x":518,"abs_y":7785}'>
<h4 bis_size='{"x":518,"y":7742,"w":278,"h":16,"abs_x":518,"abs_y":7785}' className="text-white font-medium mb-4 uppercase text-xs tracking-wider">Contact Info</h4>
<p bis_size='{"x":518,"y":7774,"w":278,"h":20,"abs_x":518,"abs_y":7817}' className="mb-2">123 George Street,Sydney, NSW 2000</p>
<p bis_size='{"x":518,"y":7802,"w":278,"h":20,"abs_x":518,"abs_y":7845}' className="mb-4">Australia</p>
<p bis_size='{"x":518,"y":7838,"w":278,"h":20,"abs_x":518,"abs_y":7881}' className="text-white">hello@ppcoutdoor.com.au</p>
<p bis_size='{"x":518,"y":7862,"w":278,"h":20,"abs_x":518,"abs_y":7905}' className="text-white mt-1">(02) 9999 8888</p>
</div>
<div bis_size='{"x":836,"y":7742,"w":278,"h":164,"abs_x":836,"abs_y":7785}'>
<h4 bis_size='{"x":836,"y":7742,"w":278,"h":16,"abs_x":836,"abs_y":7785}' className="text-white font-medium mb-4 uppercase text-xs tracking-wider">Pages</h4>
<ul bis_size='{"x":836,"y":7774,"w":278,"h":132,"abs_x":836,"abs_y":7817}' className="space-y-2">
<li bis_size='{"x":836,"y":7774,"w":278,"h":20,"abs_x":836,"abs_y":7817}'><a bis_size='{"x":836,"y":7775,"w":61,"h":17,"abs_x":836,"abs_y":7818}' className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li bis_size='{"x":836,"y":7802,"w":278,"h":20,"abs_x":836,"abs_y":7845}'><a bis_size='{"x":836,"y":7803,"w":53,"h":17,"abs_x":836,"abs_y":7846}' className="hover:text-white transition-colors" href="#projects">Projects</a></li>
<li bis_size='{"x":836,"y":7830,"w":278,"h":20,"abs_x":836,"abs_y":7873}'><a bis_size='{"x":836,"y":7831,"w":57,"h":17,"abs_x":836,"abs_y":7874}' className="hover:text-white transition-colors" href="#services">Services</a></li>
<li bis_size='{"x":836,"y":7858,"w":278,"h":20,"abs_x":836,"abs_y":7901}'><a bis_size='{"x":836,"y":7859,"w":51,"h":17,"abs_x":836,"abs_y":7902}' className="hover:text-white transition-colors" href="#contact">Contact</a></li>
<li bis_size='{"x":836,"y":7886,"w":278,"h":20,"abs_x":836,"abs_y":7929}'><a bis_size='{"x":836,"y":7887,"w":26,"h":17,"abs_x":836,"abs_y":7930}' className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div bis_size='{"x":1154,"y":7742,"w":278,"h":164,"abs_x":1154,"abs_y":7785}'>
<h4 bis_size='{"x":1154,"y":7742,"w":278,"h":16,"abs_x":1154,"abs_y":7785}' className="text-white font-medium mb-4 uppercase text-xs tracking-wider">Legal</h4>
<ul bis_size='{"x":1154,"y":7774,"w":278,"h":48,"abs_x":1154,"abs_y":7817}' className="space-y-2">
<li bis_size='{"x":1154,"y":7774,"w":278,"h":20,"abs_x":1154,"abs_y":7817}'><a bis_size='{"x":1154,"y":7775,"w":92,"h":17,"abs_x":1154,"abs_y":7818}' className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li bis_size='{"x":1154,"y":7802,"w":278,"h":20,"abs_x":1154,"abs_y":7845}'><a bis_size='{"x":1154,"y":7803,"w":129,"h":17,"abs_x":1154,"abs_y":7846}' className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
</ul>
</div>
</div>
<div bis_size='{"x":200,"y":7954,"w":1232,"h":49,"abs_x":200,"abs_y":7997}' className="border-t border-white/10 mt-12 pt-8 flex justify-between items-center text-xs">
<p bis_size='{"x":200,"y":7987,"w":271,"h":16,"abs_x":200,"abs_y":8030}'>© 2024 PPC Outdoor Living. All rights reserved.</p>
<p bis_size='{"x":1273,"y":7987,"w":159,"h":16,"abs_x":1273,"abs_y":8030}'>Designed for Sydney Living.</p>
</div>
</div>
</footer>



    </>
  );
}
