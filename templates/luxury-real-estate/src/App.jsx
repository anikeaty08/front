import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Vertical Text Clip Slide Down (Hero Title)
            const heroTitle = document.getElementById('hero-title');
            if (heroTitle) {
                const text = heroTitle.textContent.trim();
                heroTitle.innerHTML = '';
                
                // Split by words first to prevent breaking words across lines
                const words = text.split(/\s+/);
                
                words.forEach((word, index) => {
                    const wordSpan = document.createElement('span');
                    wordSpan.className = 'inline-block whitespace-nowrap'; // Keeps the word intact
                    
                    // Split the word into characters for the animation effect
                    word.split('').forEach(char => {
                        const outerSpan = document.createElement('span');
                        outerSpan.className = 'inline-block overflow-hidden align-bottom pb-1 -mb-1';
                        const innerSpan = document.createElement('span');
                        innerSpan.className = 'inline-block translate-y-[120%] hero-char';
                        innerSpan.textContent = char;
                        outerSpan.appendChild(innerSpan);
                        wordSpan.appendChild(outerSpan);
                    });
                    
                    heroTitle.appendChild(wordSpan);
                    
                    // Add space after word if it's not the last word
                    if (index < words.length - 1) {
                        heroTitle.appendChild(document.createTextNode(' '));
                    }
                });

                gsap.to('.hero-char', {
                    y: '0%',
                    stagger: 0.02,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: 0.2
                });
            }

            // 2. Masked Staggered Word Reveal (About Us)
            const aboutText = document.getElementById('about-text');
            if (aboutText) {
                const words = aboutText.textContent.trim().split(/\s+/);
                aboutText.innerHTML = '';
                words.forEach(word => {
                    const outerSpan = document.createElement('span');
                    outerSpan.className = 'inline-block overflow-hidden align-bottom pb-2 -mb-2 mr-2'; // mr-2 for word spacing
                    const innerSpan = document.createElement('span');
                    innerSpan.className = 'inline-block translate-y-[120%] about-word';
                    innerSpan.textContent = word;
                    outerSpan.appendChild(innerSpan);
                    aboutText.appendChild(outerSpan);
                });

                gsap.to('.about-word', {
                    scrollTrigger: {
                        trigger: aboutText,
                        start: 'top 85%',
                    },
                    y: '0%',
                    stagger: 0.015,
                    duration: 0.8,
                    ease: 'power3.out'
                });
            }

            // 3. Parallax Scrolling
            gsap.utils.toArray('.parallax-bg').forEach(bg => {
                gsap.to(bg, {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: bg.parentElement,
                        start: "top bottom", 
                        end: "bottom top",
                        scrub: true
                    }
                });
            });

            // 4. Card Carousel Logic
            const cards = Array.from(document.querySelectorAll('.card-slide'));
            const btnNext = document.getElementById('next-card');
            const btnPrev = document.getElementById('prev-card');
            let currentIndex = 0;

            function updateCards() {
                cards.forEach((card, index) => {
                    card.className = 'absolute inset-0 card-slide'; // reset
                    if (index === currentIndex) {
                        card.classList.add('card-active');
                    } else if (index === (currentIndex + 1) % cards.length) {
                        card.classList.add('card-next');
                    } else {
                        card.classList.add('card-hidden');
                    }
                });
            }

            function nextCard() {
                currentIndex = (currentIndex + 1) % cards.length;
                updateCards();
            }

            function prevCard() {
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                updateCards();
            }

            if(btnNext && btnPrev) {
                btnNext.addEventListener('click', nextCard);
                btnPrev.addEventListener('click', prevCard);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full max-w-7xl mx-auto border-x border-stone-200/60">
<div className="w-full h-full grid-lines"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<nav className="flex items-center justify-between py-6 lg:py-8">
<div className="text-xl font-normal tracking-tight">AuraEstates</div>
<div className="hidden md:flex items-center gap-8 text-base font-light text-stone-600">
<span className="flex items-center gap-2"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> +1 (555) 284-9102</span>
</div>
<button className="flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-sm font-normal hover:bg-stone-800 transition-colors">
                Menu <iconify-icon className="text-lg" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</nav>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 pt-12 lg:pt-20 pb-24 items-center min-h-[80vh]">
<div className="max-w-2xl">
<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tight font-normal leading-[1.1] text-stone-800" id="hero-title">
                    Curate your perfect environment.
                </h1>
<p className="mt-8 text-lg sm:text-xl text-stone-500 font-light leading-relaxed max-w-lg">
                    Navigate a meticulously selected portfolio of architectural spaces designed to elevate your daily routine and personal aesthetic.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">

<button className="relative group rounded-full p-[1px] overflow-hidden bg-stone-200 inline-flex transition-transform hover:scale-[1.02]">
<span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E7E5E4_0%,#292524_50%,#E7E5E4_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<span className="relative w-full h-full bg-[#F8F7F5] group-hover:bg-[#FAF9F8] transition-colors rounded-full px-8 py-4 flex items-center justify-center gap-3 text-base font-normal">
                            Explore Collection <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Client" className="w-12 h-12 rounded-full border-2 border-[#F8F7F5] object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e8dcc2a-cfdf-4807-888e-d6488bf7387d_320w.webp"/>
<img alt="Client" className="w-12 h-12 rounded-full border-2 border-[#F8F7F5] object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp"/>
<img alt="Client" className="w-12 h-12 rounded-full border-2 border-[#F8F7F5] object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b69128d6-8393-4270-a8e7-2c933bf498bf_320w.webp"/>
</div>
<div className="text-sm font-light">
<div className="flex text-stone-800 gap-0.5">
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-stone-500 mt-1 block">Trusted globally</span>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden bg-stone-200">
<img alt="Modern House" className="absolute inset-0 w-full h-full object-cover parallax-bg scale-[1.15] sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5327e46d-6195-4493-8fcb-a391f9adaad5_1600w.webp"/>

<div className="absolute top-8 left-8 bg-[#FAF9F8]/90 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-white/40">
<p className="text-xs text-stone-500 font-normal">Limited Offer</p>
<p className="text-2xl font-normal tracking-tight mt-1">15% Off</p>
<button className="mt-3 text-xs font-normal border border-stone-200 px-3 py-1.5 rounded-full hover:bg-stone-50">Inquire</button>
</div>
<div className="absolute bottom-8 right-8 bg-[#FAF9F8]/90 backdrop-blur-sm p-5 rounded-2xl shadow-sm border border-white/40 max-w-[200px]">
<p className="text-xs text-stone-500 font-normal">The Ridge House</p>
<p className="text-xl font-normal tracking-tight mt-1">$2,850,000</p>
<p className="text-xs text-stone-400 mt-2 leading-relaxed">Contemporary masterpiece with panoramic valley views.</p>
</div>
<div className="absolute top-1/2 right-8 -translate-y-1/2 bg-[#FAF9F8]/90 backdrop-blur-sm p-3 rounded-2xl shadow-sm border border-white/40 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center"><iconify-icon className="text-sm" icon="solar:play-linear"></iconify-icon></div>
<span className="text-xs font-normal pr-2">Virtual Tour</span>
</div>
</div>
</section>
</div>

<div className="w-full border-y border-stone-200/60 bg-[#FAF9F8] py-12 overflow-hidden flex relative z-10">
<div className="flex whitespace-nowrap animate-marquee items-center">

<div className="flex gap-20 items-center px-10">
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>

<div className="flex gap-20 items-center px-10">
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon className="text-stone-300" height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</div>
</div>

<section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
<div>
<span className="text-xs font-normal text-stone-400 tracking-widest uppercase flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-stone-800"></span> 01 · Highlights
                </span>
<h2 className="text-3xl sm:text-4xl tracking-tight font-normal text-stone-900">Featured Residences</h2>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors" id="prev-card"><iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors" id="next-card"><iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="relative h-[600px] w-full card-rotator overflow-hidden rounded-[2rem]">

<div className="absolute inset-0 card-slide card-active" data-index="0">
<div className="w-full h-full bg-[#FAF9F8] rounded-[2rem] border border-stone-200/60 overflow-hidden flex flex-col shadow-sm">
<div className="relative h-2/3 w-full overflow-hidden">
<img alt="House" className="w-full h-full object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00cbf3d5-c57a-44b4-8ff1-669b2228ff09_3840w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F8]/90 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center text-sm font-normal border border-white/40">
<span className="flex items-center gap-2 text-stone-700"><iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon> 4 Beds</span>
<span className="flex items-center gap-2 text-stone-700"><iconify-icon className="text-lg" icon="solar:bath-linear"></iconify-icon> 3 Baths</span>
<span className="flex items-center gap-2 text-stone-700"><iconify-icon className="text-lg" icon="solar:ruler-linear"></iconify-icon> 3,200 sqft</span>
</div>
</div>
<div className="flex-1 p-8 flex flex-col justify-between">
<div>
<h3 className="text-2xl font-normal tracking-tight text-stone-900">The Glass Pavilion</h3>
<p className="text-stone-500 text-base mt-2 font-light">742 Evergreen Terrace, Portland OR</p>
</div>
<div className="flex justify-between items-end">
<span className="text-2xl font-normal tracking-tight text-stone-900">$1,450,000</span>
<button className="text-sm font-normal border-b border-stone-900 pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors">Details</button>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 card-slide card-next" data-index="1">
<div className="w-full h-full bg-[#FAF9F8] rounded-[2rem] border border-stone-200/60 overflow-hidden flex flex-col shadow-sm">
<div className="relative h-2/3 w-full overflow-hidden">
<img alt="House" className="w-full h-full object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e95c120c-4095-44e5-84e0-a99494a6c22b_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F8]/90 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center text-sm font-normal border border-white/40">
<span className="flex items-center gap-2 text-stone-700"><iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon> 5 Beds</span>
<span className="flex items-center gap-2 text-stone-700"><iconify-icon className="text-lg" icon="solar:bath-linear"></iconify-icon> 4.5 Baths</span>
<span className="flex items-center gap-2 text-stone-700"><iconify-icon className="text-lg" icon="solar:ruler-linear"></iconify-icon> 4,500 sqft</span>
</div>
</div>
<div className="flex-1 p-8 flex flex-col justify-between">
<div>
<h3 className="text-2xl font-normal tracking-tight text-stone-900">Oakwood Estate</h3>
<p className="text-stone-500 text-base mt-2 font-light">1200 Oak Lane, Austin TX</p>
</div>
<div className="flex justify-between items-end">
<span className="text-2xl font-normal tracking-tight text-stone-900">$3,200,000</span>
<button className="text-sm font-normal border-b border-stone-900 pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors">Details</button>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 card-slide card-hidden" data-index="2">
<div className="w-full h-full bg-[#FAF9F8] rounded-[2rem] border border-stone-200/60 overflow-hidden flex flex-col shadow-sm">
<div className="relative h-2/3 w-full overflow-hidden">
<img alt="House" className="w-full h-full object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/838f503d-a3fc-48b8-8498-40e9fcbf33cd_1600w.jpg"/>
<div className="absolute bottom-4 left-4 right-4 bg-[#FAF9F8]/90 backdrop-blur-md rounded-2xl p-4 flex justify-between items-center text-sm font-normal border border-white/40">
<span className="flex items-center gap-2 text-stone-700"><iconify-icon className="text-lg" icon="solar:bed-linear"></iconify-icon> 3 Beds</span>
<span className="flex items-center gap-2 text-stone-700"><iconify-icon className="text-lg" icon="solar:bath-linear"></iconify-icon> 2 Baths</span>
<span className="flex items-center gap-2 text-stone-700"><iconify-icon className="text-lg" icon="solar:ruler-linear"></iconify-icon> 2,100 sqft</span>
</div>
</div>
<div className="flex-1 p-8 flex flex-col justify-between">
<div>
<h3 className="text-2xl font-normal tracking-tight text-stone-900">Minimalist Haven</h3>
<p className="text-stone-500 text-base mt-2 font-light">88 Zenith Blvd, Seattle WA</p>
</div>
<div className="flex justify-between items-end">
<span className="text-2xl font-normal tracking-tight text-stone-900">$950,000</span>
<button className="text-sm font-normal border-b border-stone-900 pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors">Details</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#FAF9F8] rounded-[3rem] shadow-sm border border-stone-200/60">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
<div className="lg:col-span-5 flex flex-col justify-between">
<span className="text-xs font-normal text-stone-400 tracking-widest uppercase flex items-center gap-2 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-stone-800"></span> 02 · Philosophy
                </span>

<p className="text-2xl sm:text-3xl lg:text-4xl font-light leading-[1.3] tracking-tight text-stone-900" id="about-text">
                    We approach real estate as an art form. It's not just about square footage, but how a space makes you feel, connect, and grow. Our advisory is built on absolute transparency and design-forward thinking.
                </p>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 lg:pt-0">
<div className="bg-stone-50 p-8 rounded-3xl border border-stone-200/60 flex flex-col items-start transition-colors hover:bg-stone-100/50">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 mb-6 text-stone-700">
<iconify-icon className="text-xl" icon="solar:stars-linear"></iconify-icon>
</div>
<h4 className="text-xl font-normal tracking-tight mb-3 text-stone-900">Curated Selection</h4>
<p className="text-base text-stone-500 font-light leading-relaxed">We filter out the noise, presenting only properties that meet rigorous standards of design, quality, and location.</p>
</div>
<div className="bg-stone-50 p-8 rounded-3xl border border-stone-200/60 flex flex-col items-start transition-colors hover:bg-stone-100/50 sm:translate-y-8">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 mb-6 text-stone-700">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</div>
<h4 className="text-xl font-normal tracking-tight mb-3 text-stone-900">Private Network</h4>
<p className="text-base text-stone-500 font-light leading-relaxed">Gain access to off-market opportunities and exclusive listings through our deep industry connections and discreet channels.</p>
</div>
<div className="bg-stone-50 p-8 rounded-3xl border border-stone-200/60 flex flex-col items-start transition-colors hover:bg-stone-100/50">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 mb-6 text-stone-700">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h4 className="text-xl font-normal tracking-tight mb-3 text-stone-900">Seamless Process</h4>
<p className="text-base text-stone-500 font-light leading-relaxed">From initial viewing to final closing, our team orchestrates every detail to ensure a frictionless and enjoyable experience.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
<span className="text-xs font-normal text-stone-400 tracking-widest uppercase flex items-center gap-2 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-stone-800"></span> 03 · Perspectives
        </span>
<h2 className="text-3xl sm:text-4xl tracking-tight font-normal text-stone-900 mb-12">Client Experiences</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#FAF9F8] p-8 rounded-3xl border border-stone-200/60 flex flex-col justify-between hover:bg-stone-50/80 transition-colors">
<div>
<div className="flex text-stone-800 gap-0.5 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-stone-600 font-light leading-relaxed mb-8">"The attention to detail and access to off-market properties completely changed our search. They understood exactly what we were looking for."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Sarah Jenkins" className="w-12 h-12 rounded-full border border-stone-200 object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1e8dcc2a-cfdf-4807-888e-d6488bf7387d_320w.webp"/>
<div>
<p className="text-sm font-normal text-stone-900">Sarah Jenkins</p>
<p className="text-xs font-light text-stone-500 mt-0.5">Tech Executive</p>
</div>
</div>
</div>

<div className="bg-[#FAF9F8] p-8 rounded-3xl border border-stone-200/60 flex flex-col justify-between hover:bg-stone-50/80 transition-colors">
<div>
<div className="flex text-stone-800 gap-0.5 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-stone-600 font-light leading-relaxed mb-8">"Acquiring our family home through Aura was a masterclass in professionalism. Every negotiation was handled with utmost discretion."</p>
</div>
<div className="flex items-center gap-4">
<img alt="David Chen" className="w-12 h-12 rounded-full border border-stone-200 object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_320w.webp"/>
<div>
<p className="text-sm font-normal text-stone-900">David Chen</p>
<p className="text-xs font-light text-stone-500 mt-0.5">Architect</p>
</div>
</div>
</div>

<div className="bg-[#FAF9F8] p-8 rounded-3xl border border-stone-200/60 flex flex-col justify-between hover:bg-stone-50/80 transition-colors">
<div>
<div className="flex text-stone-800 gap-0.5 mb-6">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base text-stone-600 font-light leading-relaxed mb-8">"Aura doesn't just sell real estate; they curate lifestyles. The team's aesthetic sensibility matched our vision perfectly."</p>
</div>
<div className="flex items-center gap-4">
<img alt="Elena Rostova" className="w-12 h-12 rounded-full border border-stone-200 object-cover sepia-[.15]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b69128d6-8393-4270-a8e7-2c933bf498bf_320w.webp"/>
<div>
<p className="text-sm font-normal text-stone-900">Elena Rostova</p>
<p className="text-xs font-light text-stone-500 mt-0.5">Gallery Director</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 w-full max-w-[95%] mx-auto mb-24 rounded-[3rem] overflow-hidden h-[60vh] min-h-[500px] flex items-center justify-center text-center">
<div className="absolute inset-0 bg-stone-900/40 z-10 mix-blend-multiply"></div>
<img alt="Architecture" className="absolute inset-0 w-full h-full object-cover parallax-bg brightness-[0.7] scale-[1.15] sepia-[.30]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e42bb99a-1498-4503-88a2-da4046b8f2bd_3840w.jpg"/>
<div className="relative z-20 flex flex-col items-center px-4">
<span className="text-xs font-normal text-stone-200 tracking-widest uppercase flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-stone-200"></span> 04 · Connect
            </span>
<h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white mb-10 max-w-3xl leading-[1.1]">
                Begin the search for your next chapter.
            </h2>
<a className="bg-[#FAF9F8] text-stone-900 rounded-full px-8 py-4 flex items-center justify-center gap-3 text-base font-normal hover:scale-105 transition-transform" href="#contact-section">
                Contact Advisory <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24" id="contact-section">
<div className="bg-[#FAF9F8] rounded-[3rem] shadow-sm border border-stone-200/60 overflow-hidden flex flex-col lg:flex-row">

<div className="lg:w-5/12 p-10 sm:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200/60">
<div>
<span className="text-xs font-normal text-stone-400 tracking-widest uppercase flex items-center gap-2 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-stone-800"></span> 05 · Inquiries
                    </span>
<h2 className="text-3xl sm:text-4xl tracking-tight font-normal text-stone-900 mb-6">Start the conversation.</h2>
<p className="text-base text-stone-500 font-light leading-relaxed mb-12">Whether you are acquiring a new asset or seeking to list your current property, our advisory team is ready to assist.</p>
</div>
<div className="space-y-6 text-sm font-light text-stone-600">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200/50 flex items-center justify-center text-stone-900"><iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon></div>
<span>1200 Architecture Blvd, Suite 400<br/>Los Angeles, CA 90012</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200/50 flex items-center justify-center text-stone-900"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon></div>
<span>advisory@auraestates.com</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200/50 flex items-center justify-center text-stone-900"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon></div>
<span>+1 (555) 284-9102</span>
</div>
</div>
</div>

<div className="lg:w-7/12 p-10 sm:p-16 bg-white">
<form className="space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-normal text-stone-500">First Name</label>
<input className="bg-transparent border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all text-stone-900" placeholder="Jane" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-normal text-stone-500">Last Name</label>
<input className="bg-transparent border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all text-stone-900" placeholder="Doe" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-normal text-stone-500">Email Address</label>
<input className="bg-transparent border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all text-stone-900" placeholder="jane@example.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-normal text-stone-500">Property Interest</label>
<div className="relative">
<select className="w-full bg-transparent border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all text-stone-900 appearance-none">
<option disabled="" selected="" value="">Select an option...</option>
<option value="buy">Acquiring a property</option>
<option value="sell">Selling a property</option>
<option value="consult">General Consultation</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-normal text-stone-500">Message</label>
<textarea className="bg-transparent border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all text-stone-900 resize-none" placeholder="Tell us about your requirements..." rows="4"></textarea>
</div>
<button className="mt-4 bg-stone-900 text-stone-50 rounded-full px-8 py-3.5 text-sm font-normal hover:bg-stone-800 transition-colors w-full sm:w-auto flex items-center justify-center gap-2" type="button">
                        Submit Inquiry <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row justify-between items-center text-sm font-light text-stone-500 border-t border-stone-200/60 mt-12">
<p>© 2024 Aura Estates. All rights reserved.</p>
<div className="flex gap-6 mt-4 sm:mt-0">
<a className="hover:text-stone-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-stone-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-stone-900 transition-colors" href="#">LinkedIn</a>
</div>
</footer>


    </>
  );
}
