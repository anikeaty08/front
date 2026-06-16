import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuBtn = document.getElementById('mobile-menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        // Function toggles the menu open/closed state
        function toggleMenu() {
            const isOpen = mobileMenu.getAttribute('data-open') === 'true';
            mobileMenu.setAttribute('data-open', !isOpen);
            document.body.style.overflow = !isOpen ? 'hidden' : '';
        }

        // Attach event listener only to button if not using inline onclick
        // Note: Inline onclick="toggleMenu()" is used on links to ensure closure
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0">

<img alt="Yoga Studio Atmosphere" className="object-center brightness-[0.85] contrast-[0.95] saturate-[0.8] w-full h-full object-cover" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70"></div>
<div className="absolute inset-0 bg-stone-950/30"></div>
</div>

<div className="fixed inset-0 z-[60] bg-stone-950/95 backdrop-blur-xl transform translate-x-full transition-transform duration-500 ease-out flex flex-col items-center justify-center opacity-0 invisible data-[open=true]:translate-x-0 data-[open=true]:opacity-100 data-[open=true]:visible" id="mobile-menu">
<button className="absolute top-6 right-6 text-stone-400 hover:text-white transition-colors p-2" id="close-menu-btn" onclick="toggleMenu()">
<iconify-icon height="32" icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
<nav className="flex flex-col items-center gap-8 text-2xl font-serif-custom italic text-stone-300">

<a className="hover:text-white transition-colors" href="#services" onclick="toggleMenu()">Classes</a>
<a className="hover:text-white transition-colors" href="#special-offers" onclick="toggleMenu()">Workshops</a>
<a className="hover:text-white transition-colors" href="#about-studio" onclick="toggleMenu()">The Studio</a>
<a className="hover:text-white transition-colors" href="#visit-us" onclick="toggleMenu()">Contact</a>
</nav>
<div className="mt-12 w-16 h-px bg-stone-800"></div>
<button className="mt-12 uppercase hover:bg-[#3d4d41] hover:border-stone-400 transition-all duration-300 text-xs font-normal text-white tracking-[0.15em] bg-[#4A5D4F]/80 border-[#647a6a] border rounded-sm pt-4 pr-10 pb-4 pl-10 shadow-xl" onclick="toggleMenu()">
            Book Class
        </button>
</div>

<header className="fixed z-50 flex md:px-12 lg:px-20 xl:px-24 transition-all duration-300 backdrop-blur-[2px] bg-gradient-to-b from-stone-900/90 to-transparent w-full pt-6 pr-6 pb-6 pl-6 top-0 right-0 left-0 items-center justify-between">
<div className="flex items-center gap-3 select-none cursor-pointer group relative z-50">
<div className="relative flex items-center justify-center">
<iconify-icon className="text-stone-200 transition-transform duration-700 ease-out group-hover:rotate-180" height="32" icon="solar:lotus-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="font-display text-lg tracking-tight text-white group-hover:text-stone-200 transition-colors">
                    Ahana
                </span>
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-stone-300 font-light">
                    Yoga Studio
                </span>
</div>
</div>
<nav className="hidden lg:flex text-sm font-light text-stone-200 tracking-wide gap-x-10 gap-y-10 items-center">
<div className="group flex cursor-pointer gap-1.5 hover:text-white transition-colors relative gap-x-1.5 gap-y-1.5 items-center">
<a href="#services">Classes</a>
<iconify-icon className="opacity-70 group-hover:rotate-180 transition-transform duration-300" height="14" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>

<div className="absolute top-full left-0 pt-6 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 z-50 ease-out pointer-events-none group-hover:pointer-events-auto">
<div className="bg-stone-900/95 backdrop-blur-md border border-stone-800 shadow-2xl rounded-sm py-2 flex flex-col">
<a className="px-5 py-2.5 text-xs uppercase tracking-wider text-stone-400 hover:text-white hover:bg-stone-800/50 transition-colors flex items-center justify-between group/item" href="#">
                            Vinyasa Flow
                            <iconify-icon className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-stone-200" height="12" icon="solar:arrow-right-linear" strokeWidth="1.5" width="12"></iconify-icon>
</a>
<a className="px-5 py-2.5 text-xs uppercase tracking-wider text-stone-400 hover:text-white hover:bg-stone-800/50 transition-colors flex items-center justify-between group/item" href="#">
                            Yin &amp; Restore
                            <iconify-icon className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-stone-200" height="12" icon="solar:arrow-right-linear" strokeWidth="1.5" width="12"></iconify-icon>
</a>
<a className="px-5 py-2.5 text-xs uppercase tracking-wider text-stone-400 hover:text-white hover:bg-stone-800/50 transition-colors flex items-center justify-between group/item" href="#">
                            Meditation
                            <iconify-icon className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-stone-200" height="12" icon="solar:arrow-right-linear" strokeWidth="1.5" width="12"></iconify-icon>
</a>
<div className="h-px bg-stone-800 my-1 mx-4"></div>
<a className="px-5 py-2.5 text-xs uppercase tracking-wider text-stone-300 hover:text-white hover:bg-stone-800/50 transition-colors" href="#">
                            Full Schedule
                        </a>
</div>
</div>
</div>
<a className="hover:text-white transition-colors" href="#special-offers">
                Workshops
            </a>
<a className="hover:text-white transition-colors" href="#about-studio">
                The Studio
            </a>
<a className="hover:text-white transition-colors" href="#visit-us">Contact</a>
</nav>
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<button className="hidden md:block uppercase hover:bg-[#3d4d41] hover:border-stone-400 transition-all duration-300 shadow-stone-950/20 text-xs font-normal text-white tracking-[0.15em] bg-[#4A5D4F]/80 border-[#647a6a] border rounded-sm pt-3 pr-8 pb-3 pl-8 shadow-xl backdrop-blur-md">
                Book Class
            </button>
<button className="lg:hidden text-white relative z-50 p-2 -mr-2" id="mobile-menu-toggle" onclick="toggleMenu()">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</header>

<div className="relative z-10 w-full flex flex-col">

<section className="min-h-screen flex flex-col md:px-12 lg:px-20 xl:px-24 pt-20 md:pt-32 pr-6 pb-12 pl-6 relative justify-end">
<div className="flex flex-col md:flex-row md:items-start md:mb-32 w-full mb-10 gap-x-12 gap-y-12 justify-between">
<div className="max-w-xl">
<p className="md:text-4xl leading-relaxed text-2xl font-light italic text-stone-100 tracking-wide font-cormorant">
                        Inhale the future. Exhale the past.
                        Find stillness in the movement.
                    </p>
</div>
<div className="flex flex-col gap-6 text-base md:text-lg font-light text-stone-200 md:text-right border-l md:border-l-0 md:border-r border-stone-500/30 pl-6 md:pr-6 md:pl-0">
<div className="space-y-1">
<h3 className="font-normal text-white tracking-tight">
                            Jalan Pantai Batu Bolong,
                        </h3>
<p className="opacity-90">Canggu, Bali 80361</p>
</div>
<div className="space-y-1">
<div className="flex flex-col md:flex-row md:justify-end gap-2 md:gap-8">
<span className="opacity-70">Mon–Fri:</span>
<span className="text-white font-normal">06:00–20:00</span>
</div>
<div className="flex flex-col md:flex-row md:justify-end gap-2 md:gap-8">
<span className="opacity-70">Sat–Sun:</span>
<span className="text-white font-normal">07:00–18:00</span>
</div>
</div>
</div>
</div>
<div className="relative w-full">
<div className="mb-2 md:mb-[-1.5%] relative z-10 pl-1 md:pl-4">
<h2 className="font-serif-custom text-3xl md:text-5xl italic tracking-tight text-white font-light">
                        Sanctuary of Breath
                    </h2>
</div>
<h1 className="md:text-left text-[15vw] leading-[0.75] bg-clip-text md:-ml-4 select-none z-20 text-transparent tracking-tight font-display text-center bg-gradient-to-b from-stone-100 to-stone-500/10 opacity-30 mix-blend-overlay w-full relative">
                    AHANA
                </h1>

<div className="absolute bottom-[-20%] right-[-5%] z-10 w-[60vw] md:w-[35vw] pointer-events-none opacity-40 mix-blend-soft-light">
<svg className="w-full h-full stroke-stone-200" fill="none" strokeWidth="0.8" viewbox="0 0 400 500">
<path d="M350 500 C350 500 300 300 100 200" strokeLinecap="round"></path>
<path d="M180 250 C100 250 50 180 60 120 C100 100 180 150 180 250 Z"></path>
<path d="M60 120 C120 185 180 250 180 250" stroke-dasharray="2 4"></path>
<path d="M220 300 C150 280 120 220 130 180 C180 180 220 300 220 300 Z"></path>
</svg>
</div>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden md:block">
<iconify-icon className="text-white" height="20" icon="solar:arrow-down-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</section>

<section className="relative bg-stone-900 py-24 px-6 md:px-12 lg:px-24 border-t border-stone-800/50">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative group">
<div className="absolute inset-0 bg-[#4A5D4F] rounded-sm transform translate-x-3 translate-y-3 opacity-20 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>

<img alt="Yoga Practice" className="relative z-10 w-full h-[600px] object-cover grayscale-[30%] rounded-sm brightness-90 contrast-[1.1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2 space-y-8">
<span className="text-xs font-normal uppercase tracking-[0.2em] text-[#8e9f92]">
                        Our Philosophy
                    </span>
<h2 className="font-serif-custom text-4xl md:text-5xl lg:text-6xl text-stone-100 font-light leading-tight">
                        Union of body, mind, and
                        <span className="italic text-stone-400">spirit.</span>
</h2>
<p className="text-lg text-stone-400 font-light leading-relaxed max-w-lg">
                        We believe yoga is more than just poses; it is a pathway to self-discovery. 
                        Our studio honors the ancient traditions while creating a space for modern 
                        practitioners to ground themselves and find balance amidst the chaos.
                    </p>
<div className="pt-4 flex flex-col sm:flex-row gap-8 font-light text-stone-300">
<div className="flex items-center gap-3">
<div className="p-2 rounded-full border border-stone-700 bg-stone-800/50 text-[#8e9f92]">
<iconify-icon height="16" icon="solar:leaf-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-sm tracking-wide">Sustainable Space</span>
</div>
<div className="flex items-center gap-3">
<div className="p-2 rounded-full border border-stone-700 bg-stone-800/50 text-[#8e9f92]">
<iconify-icon height="16" icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<span className="text-sm tracking-wide">Community Focus</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-stone-950 py-32 px-6 md:px-12 lg:px-24" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="space-y-4">
<h2 className="font-display text-3xl md:text-4xl text-white tracking-tight">
                        Signature Classes
                    </h2>
<p className="text-stone-400 font-light max-w-md">
                        Curated flows designed to challenge your body and calm your mind.
                    </p>
</div>
<a className="group flex items-center gap-2 text-sm uppercase tracking-widest text-stone-400 hover:text-white transition-colors" href="#">
                    View Schedule
                    <iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative bg-stone-900 border border-stone-800 p-8 md:p-10 hover:border-stone-600 transition-all duration-500 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-stone-400 font-light" height="32" icon="solar:flame-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between space-y-8">
<div className="">
<span className="text-xs font-normal text-[#8e9f92] uppercase tracking-wider block mb-3">
                                Dynamic
                            </span>
<h3 className="font-serif-custom text-3xl text-stone-200 group-hover:text-white transition-colors">
                                Vinyasa Flow
                            </h3>
<p className="mt-4 text-stone-500 font-light leading-relaxed group-hover:text-stone-400 transition-colors text-sm">
                                A rhythmic style where movement is synchronized with breath. 
                                Build heat, endurance, and flexibility in this energizing session.
                            </p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
<span className="text-sm text-stone-400">60 Mins</span>
<span className="text-lg font-serif-custom italic text-white">
                                Moderate
                            </span>
</div>
</div>
</div>

<div className="group relative bg-stone-900 border border-stone-800 p-8 md:p-10 hover:border-stone-600 transition-all duration-500 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-stone-400 font-light" height="32" icon="solar:moon-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between space-y-8">
<div className="">
<span className="text-xs font-normal text-[#8e9f92] uppercase tracking-wider block mb-3">
                                Restorative
                            </span>
<h3 className="font-serif-custom text-3xl text-stone-200 group-hover:text-white transition-colors">
                                Yin &amp; Restore
                            </h3>
<p className="mt-4 text-stone-500 font-light leading-relaxed group-hover:text-stone-400 transition-colors text-sm">
                                Slow-paced postures held for longer periods to target connective tissues.
                                A meditative practice to release deep-seated tension.
                            </p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
<span className="text-sm text-stone-400">75 Mins</span>
<span className="text-lg font-serif-custom italic text-white">
                                Gentle
                            </span>
</div>
</div>
</div>

<div className="group relative bg-stone-900 border border-stone-800 p-8 md:p-10 hover:border-stone-600 transition-all duration-500 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
<iconify-icon className="text-stone-400 font-light" height="32" icon="solar:stars-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="h-full flex flex-col justify-between space-y-8">
<div>
<span className="text-xs font-normal text-[#8e9f92] uppercase tracking-wider block mb-3">
                                Mindfulness
                            </span>
<h3 className="font-serif-custom text-3xl text-stone-200 group-hover:text-white transition-colors">
                                Guided Meditation
                            </h3>
<p className="mt-4 text-stone-500 font-light leading-relaxed group-hover:text-stone-400 transition-colors text-sm">
                                Deep stillness and mental clarity. Incorporates breathwork and 
                                sound healing bowls to bring the nervous system into balance.
                            </p>
</div>
<div className="flex items-center justify-between pt-6 border-t border-stone-800 group-hover:border-stone-700 transition-colors">
<span className="text-sm text-stone-400">45 Mins</span>
<span className="text-lg font-serif-custom italic text-white">
                                All Levels
                            </span>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 lg:px-24 overflow-hidden bg-stone-900 border-stone-800 border-t pt-24 pr-6 pb-24 pl-6 relative" id="special-offers">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4A5D4F]/5 to-transparent pointer-events-none"></div>
<div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
<span className="text-xs font-normal uppercase tracking-[0.2em] text-[#8e9f92]">
                    Exclusive
                </span>
<h2 className="font-serif-custom text-4xl md:text-5xl text-stone-100 font-light mt-4 mb-6">
                    Start Your Journey
                </h2>
<p className="text-stone-400 font-light">
                    Special packages curated for new students and dedicated practitioners alike.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 z-10 relative gap-x-8 gap-y-8">

<div className="relative group overflow-hidden bg-stone-950 border border-stone-800/50 hover:border-stone-700 transition-all duration-500">
<div className="aspect-[3/2] overflow-hidden">
<img alt="Group Yoga" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative">
<div className="text-[0.65rem] uppercase z-10 font-semibold text-white tracking-widest bg-[#4A5D4F] pt-1.5 pr-3 pb-1.5 pl-3 absolute top-6 right-6 shadow-lg">
                            New Students
                        </div>
<h3 className="text-2xl text-stone-200 font-serif-custom mb-3">
                            Intro Unlimited
                        </h3>
<p className="leading-relaxed group-hover:text-stone-300 transition-colors text-sm font-light text-stone-400 mb-8">
                            Experience 30 days of unlimited access to all yoga and meditation 
                            classes to find your perfect rhythm.
                        </p>
<div className="hidden flex items-center justify-between mt-auto border-t border-stone-900/50 pt-6">
<span className="text-stone-300 font-serif-custom italic text-xl">
                                $50
                                <span className="text-xs font-sans text-stone-600 line-through not-italic ml-2">
                                    $120
                                </span>
</span>
<button className="text-xs uppercase tracking-widest text-white border-b border-transparent hover:border-white transition-all pb-0.5">
                                Join Now
                            </button>
</div>
</div>
</div>

<div className="relative group overflow-hidden bg-stone-950 border border-stone-800/50 hover:border-stone-700 transition-all duration-500">
<div className="aspect-[3/2] overflow-hidden">
<img alt="Sunrise Yoga" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85]" src="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=800&amp;q=80"/>
</div>
<div className="flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative">
<div className="text-[0.65rem] uppercase z-10 font-semibold text-white tracking-widest bg-[#4A5D4F] pt-1.5 pr-3 pb-1.5 pl-3 absolute top-6 right-6 shadow-lg">
                            Workshop
                        </div>
<h3 className="group-hover:text-white transition-colors text-2xl text-stone-200 font-serif-custom mb-3">
                            Sunrise Awakening
                        </h3>
<p className="leading-relaxed group-hover:text-stone-300 transition-colors text-sm font-light text-stone-400 mb-8">
                            A 2-hour immersive workshop focusing on sun salutations, 
                            breathwork, and setting intentions for the season ahead.
                        </p>
<div className="hidden flex items-center justify-between mt-auto border-t border-stone-900/50 pt-6">
<span className="text-stone-300 font-serif-custom italic text-xl">
                                $35
                            </span>
<button className="text-xs uppercase tracking-widest text-white border-b border-transparent hover:border-white transition-all pb-0.5">
                                Reserve Spot
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-950 border-t border-stone-900" id="about-studio">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5 space-y-8 lg:sticky lg:top-32">
<span className="text-xs font-normal uppercase tracking-[0.2em] text-[#8e9f92]">
                        About The Space
                    </span>
<h2 className="font-serif-custom text-4xl md:text-5xl text-stone-100 font-light leading-tight">
                        Designed for
                        <span className="italic text-stone-500">connection.</span>
</h2>
<div className="space-y-6 text-stone-400 font-light leading-relaxed">
<p>
                            Ahana Yoga Studio was born from a desire to create a sanctuary
                            where the noise of the modern world simply falls away.
                        </p>
<p>
                            Our architecture embraces the raw beauty of Bali—using
                            reclaimed teak floors, bamboo ventilation, and abundant natural light
                            to harmonize your practice with the elements.
                        </p>
</div>
<div className="grid grid-cols-2 gap-6 pt-4">
<div>
<span className="block text-3xl font-serif-custom text-stone-200 mb-1">
                                3
                            </span>
<span className="text-xs uppercase tracking-wider text-stone-600">
                                Practice Shalas
                            </span>
</div>
<div>
<span className="block text-3xl font-serif-custom text-stone-200 mb-1">
                                15+
                            </span>
<span className="text-xs uppercase tracking-wider text-stone-600">
                                Expert Teachers
                            </span>
</div>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 gap-4">
<img alt="Studio Detail" className="w-full h-64 object-cover rounded-sm brightness-75 hover:brightness-90 transition-all duration-500" src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&amp;q=80"/>
<img alt="Meditation Corner" className="w-full h-64 object-cover rounded-sm brightness-75 hover:brightness-90 transition-all duration-500 mt-12" src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&amp;q=80"/>
<img alt="Yoga Props" className="w-full h-64 object-cover rounded-sm brightness-75 hover:brightness-90 transition-all duration-500" src="https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=600&amp;q=80"/>
<img alt="Practice Space" className="w-full h-64 object-cover rounded-sm brightness-75 hover:brightness-90 transition-all duration-500 mt-12" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&amp;q=80"/>
</div>
</div>
</section>

<section className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
<img alt="Meditation Sunset" className="absolute inset-0 w-full h-full object-cover brightness-[0.4] grayscale-[20%]" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/50"></div>
<div className="relative z-10 text-center px-6 max-w-2xl mx-auto space-y-6">
<iconify-icon className="text-stone-400/50 mx-auto" height="40" icon="solar:quote-up-linear" strokeWidth="1.5" width="40"></iconify-icon>
<p className="font-serif-custom text-3xl md:text-5xl text-stone-100 italic font-light leading-snug">
                    "A place where the soul finds its breath and the body finds its home."
                </p>
<p className="text-sm font-normal uppercase tracking-[0.2em] text-stone-400 pt-4">
                    Yoga Journal
                </p>
</div>
</section>

<section className="bg-stone-900 py-24 px-6 md:px-12 lg:px-24 border-t border-stone-800" id="visit-us">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

<div className="space-y-10">
<div>
<span className="text-xs font-normal uppercase tracking-[0.2em] text-[#8e9f92]">
                            Visit Us
                        </span>
<h2 className="font-serif-custom text-4xl md:text-5xl text-stone-100 font-light mt-4 mb-6 leading-tight">
                            Find your way to
                            <span className="italic text-stone-500">center.</span>
</h2>
<p className="text-stone-400 font-light leading-relaxed max-w-md">
                            We are located in the heart of Canggu. Drop by for a class, 
                            a cup of herbal tea, or to speak with our community.
                        </p>
</div>
<div className="space-y-8">

<div className="space-y-3">
<div className="flex items-center gap-3 text-stone-200">
<iconify-icon className="text-[#8e9f92]" height="20" icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-normal tracking-wide">Class Schedule</span>
</div>
<div className="pl-8 grid gap-2 text-stone-400 font-light">
<div className="flex justify-between max-w-xs border-b border-stone-800/50 pb-2 border-dashed">
<span>Mon – Fri</span>
<span className="text-stone-300">06:00 – 20:00</span>
</div>
<div className="flex justify-between max-w-xs pt-1">
<span>Sat – Sun</span>
<span className="text-stone-300">07:00 – 18:00</span>
</div>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3 text-stone-200">
<iconify-icon className="text-[#8e9f92]" height="20" icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-normal tracking-wide">
                                    Location &amp; Contact
                                </span>
</div>
<div className="pl-8 flex flex-col items-start gap-4">
<p className="text-stone-400 font-light">
                                    Jalan Pantai Batu Bolong, Canggu, Bali 80361
                                </p>
<div className="flex flex-wrap gap-4">
<a className="flex items-center gap-2 px-5 py-2.5 border border-stone-700 rounded-sm hover:bg-[#4A5D4F] hover:border-[#4A5D4F] hover:text-white transition-all duration-300 text-stone-300 text-sm tracking-wide group" href="https://wa.me/6281234567890">
<iconify-icon className="group-hover:scale-110 transition-transform" height="16" icon="solar:chat-line-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                        WhatsApp
                                    </a>
<a className="flex items-center gap-2 px-5 py-2.5 border border-stone-700 rounded-sm hover:bg-stone-800 hover:text-white transition-all duration-300 text-stone-300 text-sm tracking-wide group" href="tel:+6281234567890">
<iconify-icon className="group-hover:scale-110 transition-transform" height="16" icon="solar:phone-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                        Call Us
                                    </a>
</div>
</div>
</div>

<div className="bg-stone-950/40 p-6 border-l-2 border-[#4A5D4F] mt-8">
<h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2">
                                Studio Etiquette
                            </h4>
<p className="text-xs text-stone-600 leading-relaxed font-light">
                                Please arrive 10 minutes before class starts to settle in. 
                                Late arrivals may not be admitted once the session has begun to ensure tranquility.
                            </p>
</div>
</div>
</div>

<div className="h-full min-h-[450px] w-full bg-stone-800 relative rounded-sm overflow-hidden border border-stone-800 group">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:filter-none" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15775.66779471549!2d115.1228468!3d-8.6511479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2387e078c52d3%3A0x6b8d96277f7223e7!2sJalan%20Pantai%20Batu%20Bolong%2C%20Canggu%2C%20Bali!5e0!3m2!1sen!2sid!4v1629812345678" style={{border: '0', filter: 'grayscale(1) contrast(1.2) brightness(0.7)'}} width="100%"></iframe>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-stone-950 to-transparent pointer-events-none">
<div className="inline-flex items-center gap-2 bg-stone-900/90 backdrop-blur-md px-4 py-2 rounded-sm border border-stone-700/50 text-stone-300 text-xs tracking-wider">
<iconify-icon height="12" icon="solar:map-point-linear" strokeWidth="1.5" width="12"></iconify-icon>
                            Open in Maps
                        </div>
</div>
</div>
</div>
</section>
<footer className="bg-stone-950 pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-stone-800">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

<div className="space-y-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-400" height="24" icon="solar:lotus-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="font-display text-lg tracking-tight text-stone-200">
                            Ahana
                        </span>
</div>
<p className="text-stone-500 font-light text-sm leading-relaxed max-w-xs">
                        An oasis of grounding in the heart of Canggu, dedicated to 
                        holistic wellness through movement and mindfulness.
                    </p>
</div>

<div className="space-y-6">
<h4 className="text-xs font-normal text-stone-300 uppercase tracking-wider">
                        Studio
                    </h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li>
<a className="hover:text-[#8e9f92] transition-colors" href="#">
                                Our Teachers
                            </a>
</li>
<li>
<a className="hover:text-[#8e9f92] transition-colors" href="#">
                                Schedule
                            </a>
</li>
<li>
<a className="hover:text-[#8e9f92] transition-colors" href="#">
                                Memberships
                            </a>
</li>
<li>
<a className="hover:text-[#8e9f92] transition-colors" href="#">
                                Blog
                            </a>
</li>
</ul>
</div>

<div className="space-y-6">
<h4 className="text-xs font-normal text-stone-300 uppercase tracking-wider">
                        Connect
                    </h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li>Jalan Pantai Batu Bolong</li>
<li>Canggu, Bali 80361</li>
<li className="pt-2">
<a className="hover:text-white transition-colors" href="mailto:hello@ahanayoga.com">
                                hello@ahanayoga.com
                            </a>
</li>
<li>+62 812 3456 7890</li>
</ul>
</div>

<div className="space-y-6">
<h4 className="text-xs font-normal text-stone-300 uppercase tracking-wider">
                        Newsletter
                    </h4>
<form className="space-y-4">
<p className="text-xs text-stone-500 font-light">
                            Subscribe for weekly flows and workshop updates.
                        </p>
<div className="relative">
<input className="w-full bg-stone-900 border border-stone-800 text-stone-300 text-sm px-4 py-3 focus:outline-none focus:border-[#4A5D4F] transition-colors placeholder:text-stone-700" placeholder="Email Address" type="email"/>
<button className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-stone-500 hover:text-white transition-colors" type="button">
<iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-stone-900">
<p className="text-xs text-stone-600 font-light">
                    © 2024 Ahana Yoga Studio. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-stone-600 hover:text-stone-400 transition-colors" href="#">
<iconify-icon height="16" icon="solar:camera-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-stone-600 hover:text-stone-400 transition-colors" href="#">
<iconify-icon height="16" icon="solar:facebook-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-stone-600 hover:text-stone-400 transition-colors" href="#">
<iconify-icon height="16" icon="solar:plain-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</footer>
</div>

<a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] flex items-center justify-center w-14 h-14 bg-[#4A5D4F] text-white rounded-full shadow-2xl hover:bg-[#3d4d41] hover:scale-105 transition-all duration-300 group border border-[#647a6a]" href="https://wa.me/6281234567890" target="_blank">
<iconify-icon height="28" icon="solar:chat-line-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div className="absolute right-full mr-4 bg-stone-900/90 backdrop-blur border border-stone-800 text-stone-200 text-[0.65rem] px-3 py-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none uppercase tracking-widest font-normal">
            Chat with us
        </div>
</a>



    </>
  );
}
