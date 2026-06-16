import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gold: {
400: '#FACC15', // Amber-400 base
500: '#EAB308',
glow: 'rgba(250, 204, 21, 0.15)'
}
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
}
}
}
}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // Initialize Lucide Icons
        lucide.createIcons();

        // 1. Intersection Observer for Fade-in Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-up').forEach(el => {
            observer.observe(el);
        });

        // 2. Image Comparison Slider Logic
        const sliderContainer = document.getElementById('image-comparison-slider');
        const overlay = document.getElementById('slider-overlay');
        const handle = document.getElementById('slider-handle');
        let isDown = false;

        // Function to move the slider based on x position
        function moveSlider(x) {
            const rect = sliderContainer.getBoundingClientRect();
            let position = ((x - rect.left) / rect.width) * 100;

            // Clamp values
            if (position < 0) position = 0;
            if (position > 100) position = 100;

            overlay.style.width = `${position}%`;
            handle.style.left = `${position}%`;
        }

        // Mouse Events
        sliderContainer.addEventListener('mousedown', () => isDown = true);
        window.addEventListener('mouseup', () => isDown = false);
        window.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            moveSlider(e.clientX);
        });

        // Touch Events (Mobile)
        sliderContainer.addEventListener('touchstart', () => isDown = true);
        window.addEventListener('touchend', () => isDown = false);
        window.addEventListener('touchmove', (e) => {
            if (!isDown) return;
            moveSlider(e.touches[0].clientX);
        });
        
        // Click to jump
        sliderContainer.addEventListener('click', (e) => {
            moveSlider(e.clientX);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-md" style={{}}>
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<svg className="lucide lucide-gem w-6 h-6 text-gold-400 group-hover:text-gold-500 transition-colors" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
<span className="text-xl font-medium tracking-tight text-white group-hover:text-gold-400 transition-colors duration-300">Treasure Tours</span>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-black bg-gold-400 rounded-full hover:bg-gold-500 transition-all duration-300 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_25px_rgba(250,204,21,0.5)] transform hover:-translate-y-0.5" href="#contact">
                Book Now
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Las Vegas Night" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{objectPosition: 'center bottom'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" style={{}}></div>
<div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center px-6 pt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/30 bg-gold-500/10 text-gold-400 text-sm font-medium mb-6 fade-up visible">
<svg className="lucide lucide-star w-3 h-3 fill-gold-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                Voted #1 Luxury Experience
            </div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] fade-up delay-100 text-5xl font-medium text-white tracking-tight mb-6 visible">Treasure Tours
</h1>
<p className="text-lg md:text-2xl text-slate-400 max-w-2xl mx-auto mb-10 font-light fade-up delay-200 visible" style={{}}>
                Discover the treasure of the desert. Exclusive access to the hidden gems of Las Vegas and beyond.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-up delay-300 visible">
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-white/10 text-white rounded-lg transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm group" href="#tours">
                    Explore Tours
                    <svg className="lucide lucide-chevron-down w-5 h-5 group-hover:translate-y-1 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</div>
</header>

<section className="py-24 relative bg-slate-950" id="tours" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 fade-up">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Curated Expeditions</h2>
<p className="text-lg text-slate-400" style={{}}>Select your next adventure from our premium collection.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">


<div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/10 cursor-pointer fade-up">
<img alt="City Tour" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-60 transition-opacity bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<div className="flex justify-between items-end">
<div className="">
<p className="text-gold-400 text-sm font-medium mb-1">Urban Luxury</p>
<h3 className="text-2xl font-medium tracking-tight text-white">Las Vegas City Tour</h3>
<p className="text-slate-400 text-sm mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300" style={{}}>Diamond in the Desert</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/10 cursor-pointer fade-up delay-100">
<img alt="Jungle Palace" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-gold-400 text-sm font-medium mb-1">Exotic</p>
<h3 className="text-2xl font-medium tracking-tight text-white">Jungle Palace Tour</h3>
<p className="text-slate-400 text-sm mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300" style={{}}>Siegfried &amp; Roy Legacy</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/10 cursor-pointer fade-up delay-200">
<img alt="Hoover Dam" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="group-hover:opacity-60 transition-opacity bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div className="">
<p className="text-gold-400 text-sm font-medium mb-1">Engineering Marvel</p>
<h3 className="text-2xl font-medium tracking-tight text-white">Hoover Dam Tour</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/10 cursor-pointer fade-up">
<img alt="Gold Mine" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="group-hover:opacity-60 transition-opacity bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-gold-400 text-sm font-medium mb-1">History</p>
<h3 className="text-2xl font-medium tracking-tight text-white">Gold Mine Tour</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/10 cursor-pointer fade-up delay-100">
<img alt="Valley of Fire" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1548232979-6c557ee14752?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-gold-400 text-sm font-medium mb-1">Nature</p>
<h3 className="text-2xl font-medium tracking-tight text-white">Valley of Fire</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/10 cursor-pointer fade-up delay-200">
<img alt="Area 51" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-gold-400 text-sm font-medium mb-1">Mystery</p>
<h3 className="text-2xl font-medium tracking-tight text-white">Area 51</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/10 cursor-pointer fade-up">
<img alt="Death Valley" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-gold-400 text-sm font-medium mb-1">Extreme</p>
<h3 className="text-2xl font-medium tracking-tight text-white">Death Valley</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/10 cursor-pointer fade-up delay-100">
<img alt="Helicopter" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-gold-400 text-sm font-medium mb-1">Aerial View</p>
<h3 className="text-2xl font-medium tracking-tight text-white">Grand Canyon Helicopter</h3>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative h-[400px] rounded-xl overflow-hidden border border-white/10 cursor-pointer fade-up delay-200">
<img alt="Shooting" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<p className="text-gold-400 text-sm font-medium mb-1">Adrenaline</p>
<h3 className="text-2xl font-medium tracking-tight text-white">Shooting Experience</h3>
<p className="text-slate-400 text-sm mt-1 opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300" style={{}}>Indoor/Outdoor • Tank Options</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-gold-400 group-hover:text-black transition-colors">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 text-center fade-up">
<a className="inline-flex items-center text-lg text-white hover:text-gold-400 transition-colors border-b border-transparent hover:border-gold-400 pb-1" href="#contact">
                    Book Corporate &amp; Group Tours (10+ people)
                    <svg className="lucide lucide-arrow-right w-5 h-5 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative overflow-hidden border-y border-white/5" style={{}}>
<div className="absolute inset-0 bg-grid-pattern bg-grid opacity-10"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 fade-up">
<span className="text-gold-400 uppercase tracking-widest text-xs font-semibold">Upgrade Your Reality</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mt-3">The VIP Experience</h2>
<p className="text-lg text-slate-400 mt-4" style={{}}>Drag to reveal the difference between standard and gold access.</p>
</div>

<div className="fade-up delay-100 h-[500px] w-full shadow-2xl shadow-gold-500/10">
<div className="comparison-slider" id="image-comparison-slider">

<img alt="VIP Vegas" className="comparison-item grayscale-0 filter brightness-110 saturate-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute top-8 right-8 bg-gold-500 text-black px-4 py-1 font-bold text-xs uppercase rounded-full">VIP Experience</div>

<div className="comparison-overlay" id="slider-overlay">
<img alt="Standard Vegas" className="absolute top-0 left-0 h-full w-full max-w-none grayscale filter brightness-50 contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{width: '200%'}}/> 
<div className="absolute top-8 left-8 bg-white/20 text-white backdrop-blur-md px-4 py-1 font-bold text-xs uppercase rounded-full">Standard View</div>
</div>

<div className="handle-circle" id="slider-handle" style={{left: '50%'}}>
<svg className="lucide lucide-chevrons-left-right w-5 h-5 text-black" data-lucide="chevrons-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 7-5 5 5 5"></path><path d="m15 7 5 5-5 5"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 fade-up">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">Scenic Flight Routes</h2>
<p className="text-lg text-slate-400" style={{}}>See the world from a higher perspective.</p>
</div>
<div className="hidden md:block">
<svg className="lucide lucide-plane w-10 h-10 text-white/20" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">


<div className="aspect-square rounded-lg overflow-hidden bg-slate-900 fade-up" style={{}}>
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:opacity-80" src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-slate-900 fade-up delay-100" style={{}}>
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-slate-900 fade-up delay-200" style={{}}>
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-slate-900 fade-up" style={{}}>
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-slate-900 fade-up delay-100" style={{}}>
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-slate-900 fade-up delay-200" style={{}}>
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:opacity-80" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-slate-900 fade-up" style={{}}>
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-slate-900 fade-up delay-100" style={{}}>
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden bg-slate-900 fade-up delay-200" style={{}}>
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-950 border-t border-white/5" id="contact" style={{}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-slate-950 to-slate-950 pointer-events-none" style={{}}></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12 fade-up">
<div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-cyan-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-gold-500/20" style={{}}>
<svg className="lucide lucide-ticket w-8 h-8 text-black" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Secure Your Seat</h2>
<p className="text-lg text-slate-400 mt-2" style={{}}>Fill out the form below to request a booking.</p>
</div>
<form className="space-y-6 fade-up delay-100">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300" style={{}}>Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all" placeholder="John Doe" style={{}} type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300" style={{}}>Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all" placeholder="john@example.com" style={{}} type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300" style={{}}>Preferred Date</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all dark-date-input" style={{}} type="date"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300" style={{}}>Guests</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all" min="1" placeholder="2" style={{}} type="number"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300" style={{}}>Select Tour</label>
<div className="relative">
<select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white appearance-none focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all cursor-pointer">
<option className="bg-slate-900" style={{}} value="">Select an experience...</option>
<option className="bg-slate-900" style={{}} value="city">Las Vegas City Tour - Diamond in the Desert</option>
<option className="bg-slate-900" style={{}} value="jungle">Jungle Palace Tour - Siegfried &amp; Roy</option>
<option className="bg-slate-900" style={{}} value="hoover">Hoover Dam Tour</option>
<option className="bg-slate-900" style={{}} value="goldmine">Gold Mine Tour</option>
<option className="bg-slate-900" style={{}} value="valley">Valley of Fire</option>
<option className="bg-slate-900" style={{}} value="area51">Area 51</option>
<option className="bg-slate-900" style={{}} value="deathvalley">Death Valley</option>
<option className="bg-slate-900" style={{}} value="helicopter">Grand Canyon Helicopter Tour</option>
<option className="bg-slate-900" style={{}} value="shooting">Las Vegas Shooting Experience</option>
<option className="bg-slate-900" style={{}} value="corporate">Corporate &amp; Group Tours (10+)</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-300" style={{}}>Message (Optional)</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all" placeholder="Any special requirements?" rows="4" style={{}}></textarea>
</div>
<button className="w-full bg-gold-400 text-black font-semibold py-4 rounded-lg hover:bg-gold-500 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 text-lg flex items-center justify-center gap-2" type="submit">
                    Request Booking
                    <svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
</section>

<footer className="bg-black py-12 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-4">
<svg className="lucide lucide-gem w-5 h-5 text-gold-400" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
<span className="text-lg font-medium text-white">Treasure Tours</span>
</div>
<p className="text-slate-500 text-sm max-w-xs" style={{}}>
                        The premiere luxury tour operator in Las Vegas. 
                        Unforgettable experiences tailored for the elite traveler.
                    </p>
</div>
<div className="flex flex-col gap-4 text-center md:text-right">
<a className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-end" href="mailto:vip@treasuretours.vegas" style={{}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> vip@treasuretours.vegas
                    </a>
<a className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 justify-center md:justify-end" href="tel:+17025550199" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +1 (702) 555-0199
                    </a>
<p className="text-slate-500 text-sm" style={{}}>
                        3000 Las Vegas Blvd S, Las Vegas, NV 89109
                    </p>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600" style={{}}>
<p>© 2023 Treasure Tours Las Vegas. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-400" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-slate-400" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
