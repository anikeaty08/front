import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuLinks = document.querySelectorAll('.menu-link');

        function toggleMenu() {
            const isClosed = mobileMenu.classList.contains('translate-x-full');
            if (isClosed) {
                mobileMenu.classList.remove('translate-x-full');
            } else {
                mobileMenu.classList.add('translate-x-full');
            }
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeMenuBtn.addEventListener('click', toggleMenu);
        
        // Close menu when a link is clicked
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
            });
        });

        // Gallery Tabs Logic
        const tabPhotos = document.getElementById('tab-photos');
        const tabVideos = document.getElementById('tab-videos');
        const galleryPhotos = document.getElementById('gallery-photos');
        const galleryVideos = document.getElementById('gallery-videos');

        tabPhotos.addEventListener('click', () => {
            // Style active tab
            tabPhotos.classList.add('bg-zinc-700', 'text-white', 'shadow-sm');
            tabPhotos.classList.remove('text-zinc-400');
            tabVideos.classList.remove('bg-zinc-700', 'text-white', 'shadow-sm');
            tabVideos.classList.add('text-zinc-400');

            // Show content
            galleryPhotos.classList.remove('hidden');
            galleryPhotos.classList.add('grid');
            galleryVideos.classList.add('hidden');
            galleryVideos.classList.remove('grid');
        });

        tabVideos.addEventListener('click', () => {
            // Style active tab
            tabVideos.classList.add('bg-zinc-700', 'text-white', 'shadow-sm');
            tabVideos.classList.remove('text-zinc-400');
            tabPhotos.classList.remove('bg-zinc-700', 'text-white', 'shadow-sm');
            tabPhotos.classList.add('text-zinc-400');

            // Show content
            galleryVideos.classList.remove('hidden');
            galleryVideos.classList.add('grid');
            galleryPhotos.classList.add('hidden');
            galleryPhotos.classList.remove('grid');
        });

        // Lazy Loading Simulation for Production Readiness
        document.addEventListener("DOMContentLoaded", function() {
            const lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

            if ("IntersectionObserver" in window) {
                let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            let lazyImage = entry.target;
                            lazyImage.src = lazyImage.dataset.src;
                            lazyImage.classList.remove("lazy");
                            lazyImageObserver.unobserve(lazyImage);
                        }
                    });
                });

                lazyImages.forEach(function(lazyImage) {
                    lazyImageObserver.observe(lazyImage);
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-white text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<span className="bg-brand text-dark w-6 h-6 flex items-center justify-center rounded-sm text-xs font-bold">A</span>
                Aashirwaad
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#plans">Membership</a>
<a className="hover:text-white transition-colors" href="#trainers">Trainers</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
<a className="px-4 py-2 bg-white text-dark rounded-full font-semibold hover:bg-zinc-200 transition-colors" href="#join">Join Now</a>
</div>

<button className="md:hidden text-white" id="menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-dark z-40 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col pt-20 px-6 gap-6" id="mobile-menu">
<a className="text-xl font-medium text-white menu-link" href="#about">About</a>
<a className="text-xl font-medium text-white menu-link" href="#plans">Membership</a>
<a className="text-xl font-medium text-white menu-link" href="#trainers">Trainers</a>
<a className="text-xl font-medium text-white menu-link" href="#contact">Contact</a>
<hr className="border-zinc-800"/>
<a className="text-xl font-semibold text-brand menu-link" href="#join">Join Now</a>
<button className="absolute top-5 right-6 text-white" id="close-menu">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-end pb-20 md:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym Interior" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<div className="max-w-2xl animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-brand mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
                    Open 5:00 AM - 11:00 PM
                </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter leading-[0.9] mb-6">
                    Forge Your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Best Self.</span>
</h1>

<p className="text-lg text-zinc-400 mb-8 max-w-lg leading-relaxed">
                    Premium equipment, expert guidance, and a community driven by results. Welcome to Aashirwaad Gym.
                </p>

<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 bg-brand text-dark font-semibold rounded-lg hover:bg-lime-300 transition-all" href="#plans">
                        View Membership Plans
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 text-white font-medium rounded-lg hover:bg-zinc-800 transition-all" href="#about">
                        About Us
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-900 bg-surface" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Redefining Fitness <br/> Since 2015</h2>
<div className="space-y-6 text-zinc-400 leading-relaxed">
<p>
                        At Aashirwaad Gym, we believe fitness is not just a destination but a way of life. Located in the heart of the city, we have been empowering the local community to achieve their health goals through disciplined training and nutritional guidance.
                    </p>
<p>
                        Our mission is simple: provide a raw, energetic, and supportive environment where beginners become pros.
                    </p>
</div>

<div className="grid grid-cols-2 gap-6 mt-10">
<div className="p-4 rounded-xl bg-dark border border-zinc-800">
<iconify-icon className="text-brand mb-2" icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
<div className="text-2xl font-semibold text-white tracking-tight">500+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Active Members</div>
</div>
<div className="p-4 rounded-xl bg-dark border border-zinc-800">
<iconify-icon className="text-brand mb-2" icon="solar:dumbbells-linear" width="28"></iconify-icon>
<div className="text-2xl font-semibold text-white tracking-tight">50+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wider">Machines</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden group">
<img alt="Gym Floor" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?q=80&amp;w=2232&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-dark">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">The Space</h2>
<p className="text-zinc-500 mt-2">Where the work gets done.</p>
</div>

<div className="flex bg-surface p-1 rounded-lg border border-zinc-800 w-fit">
<button className="px-5 py-2 rounded-md text-sm font-medium transition-all bg-zinc-700 text-white shadow-sm" id="tab-photos">Photos</button>
<button className="px-5 py-2 rounded-md text-sm font-medium transition-all text-zinc-400 hover:text-white" id="tab-videos">Videos</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]" id="gallery-photos">
<div className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-xl">
<img alt="Gym wide shot" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
</div>
<div className="relative group overflow-hidden rounded-xl">
<img alt="Weights" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group overflow-hidden rounded-xl">
<img alt="Cardio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="hidden grid-cols-1 md:grid-cols-2 gap-4" id="gallery-videos">
<div className="aspect-video bg-surface rounded-xl flex items-center justify-center border border-zinc-800">
<iconify-icon className="text-zinc-600" icon="solar:play-circle-linear" width="48"></iconify-icon>
<span className="ml-2 text-zinc-500">Facility Tour (Video Placeholder)</span>
</div>
<div className="aspect-video bg-surface rounded-xl flex items-center justify-center border border-zinc-800">
<iconify-icon className="text-zinc-600" icon="solar:play-circle-linear" width="48"></iconify-icon>
<span className="ml-2 text-zinc-500">Training Montage (Video Placeholder)</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-y border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">Targeted Routines</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-dark border border-zinc-800 rounded-2xl p-6 hover:border-brand/50 transition-colors cursor-pointer">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-dark transition-colors">
<iconify-icon icon="solar:flame-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Weight Loss</h3>
<p className="text-sm text-zinc-400">High intensity cardio &amp; HIIT focus.</p>
<div className="mt-4 flex items-center text-xs text-brand font-medium">
                        View 8 Exercises <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group relative bg-dark border border-zinc-800 rounded-2xl p-6 hover:border-brand/50 transition-colors cursor-pointer">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-dark transition-colors">
<iconify-icon icon="solar:dumbbell-large-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Muscle Gain</h3>
<p className="text-sm text-zinc-400">Hypertrophy focused isolation work.</p>
<div className="mt-4 flex items-center text-xs text-brand font-medium">
                        View 12 Exercises <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group relative bg-dark border border-zinc-800 rounded-2xl p-6 hover:border-brand/50 transition-colors cursor-pointer">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-dark transition-colors">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Strength</h3>
<p className="text-sm text-zinc-400">Powerlifting basics and compounds.</p>
<div className="mt-4 flex items-center text-xs text-brand font-medium">
                        View 5 Exercises <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group relative bg-dark border border-zinc-800 rounded-2xl p-6 hover:border-brand/50 transition-colors cursor-pointer">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-dark transition-colors">
<iconify-icon icon="solar:meditation-round-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Flexibility</h3>
<p className="text-sm text-zinc-400">Yoga and mobility drills.</p>
<div className="mt-4 flex items-center text-xs text-brand font-medium">
                        View 10 Exercises <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark relative overflow-hidden" id="plans">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Invest In Yourself</h2>
<p className="text-zinc-400">No hidden fees. Just results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="bg-surface border border-zinc-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
<h3 className="text-xl font-semibold text-white">Monthly</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">₹1,500</span>
<span className="text-zinc-500 text-sm">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm text-zinc-300">
<iconify-icon className="text-brand mr-3" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Gym Access (6AM - 10PM)
                        </li>
<li className="flex items-center text-sm text-zinc-300">
<iconify-icon className="text-brand mr-3" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Locker Facility
                        </li>
<li className="flex items-center text-sm text-zinc-300">
<iconify-icon className="text-brand mr-3" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            General Trainer Support
                        </li>
</ul>
<button className="w-full py-3 border border-zinc-700 rounded-lg text-white font-medium hover:bg-zinc-800 transition-colors">Choose Monthly</button>
</div>

<div className="bg-surface border-2 border-brand p-8 rounded-2xl relative shadow-2xl shadow-brand/10 hover:-translate-y-2 transition-transform duration-300">
<div className="absolute top-0 right-0 bg-brand text-dark text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">MOST POPULAR</div>
<h3 className="text-xl font-semibold text-white">Quarterly</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">₹4,000</span>
<span className="text-zinc-500 text-sm">/3 months</span>
</div>
<p className="text-xs text-brand mb-6">Save ₹500 instantly</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm text-zinc-300">
<iconify-icon className="text-brand mr-3" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Full Day Access
                        </li>
<li className="flex items-center text-sm text-zinc-300">
<iconify-icon className="text-brand mr-3" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            1 Free Personal Training Session
                        </li>
<li className="flex items-center text-sm text-zinc-300">
<iconify-icon className="text-brand mr-3" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Diet Consultation (Basic)
                        </li>
</ul>
<button className="w-full py-3 bg-brand text-dark font-semibold rounded-lg hover:bg-lime-300 transition-colors">Choose Quarterly</button>
</div>

<div className="bg-surface border border-zinc-800 p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
<h3 className="text-xl font-semibold text-white">Yearly</h3>
<div className="mt-4 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">₹12,000</span>
<span className="text-zinc-500 text-sm">/year</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center text-sm text-zinc-300">
<iconify-icon className="text-brand mr-3" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            All Access Pass
                        </li>
<li className="flex items-center text-sm text-zinc-300">
<iconify-icon className="text-brand mr-3" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Unlimited Steam Bath
                        </li>
<li className="flex items-center text-sm text-zinc-300">
<iconify-icon className="text-brand mr-3" icon="solar:check-circle-linear" width="18"></iconify-icon>
                            Advanced Diet Plan
                        </li>
</ul>
<button className="w-full py-3 border border-zinc-700 rounded-lg text-white font-medium hover:bg-zinc-800 transition-colors">Choose Yearly</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="trainers">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">Meet The Coaches</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative overflow-hidden rounded-xl bg-dark border border-zinc-800">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="text-lg font-semibold text-white">Rahul Verma</h4>
<p className="text-xs text-brand uppercase tracking-wide mb-2">Head Coach</p>
<p className="text-sm text-zinc-400">8+ years exp in bodybuilding &amp; competition prep.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-dark border border-zinc-800">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47f49b0d-1be8-4430-a2fc-b609967ba7fc_800w.webp"/>
</div>
<div className="p-4">
<h4 className="text-lg font-semibold text-white">Sriya Patel</h4>
<p className="text-xs text-brand uppercase tracking-wide mb-2">Yoga &amp; Mobility</p>
<p className="text-sm text-zinc-400">Certified Yoga Alliance instructor.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-dark border border-zinc-800">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="text-lg font-semibold text-white">Vikram Singh</h4>
<p className="text-xs text-brand uppercase tracking-wide mb-2">Strength &amp; Conditioning</p>
<p className="text-sm text-zinc-400">Specialist in functional training.</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-dark border border-zinc-800">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Trainer" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4">
<h4 className="text-lg font-semibold text-white">Anjali K.</h4>
<p className="text-xs text-brand uppercase tracking-wide mb-2">Zumba &amp; Cardio</p>
<p className="text-sm text-zinc-400">High energy group class expert.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12">Member Stories</h2>

<div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">

<div className="min-w-[300px] md:min-w-[400px] bg-surface p-8 rounded-2xl border border-zinc-800 snap-center">
<div className="flex gap-1 text-brand mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 italic mb-6">"Best gym in the area. The equipment is top notch and the trainers actually pay attention to your form unlike other places."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold">A</div>
<div>
<p className="text-sm font-semibold text-white">Amit Sharma</p>
<p className="text-xs text-zinc-500">Member since 2021</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-surface p-8 rounded-2xl border border-zinc-800 snap-center">
<div className="flex gap-1 text-brand mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<p className="text-zinc-300 italic mb-6">"Lost 10kgs in 3 months thanks to Rahul sir's guidance. The vibe is very energetic, especially in the evenings."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold">P</div>
<div>
<p className="text-sm font-semibold text-white">Priya Das</p>
<p className="text-xs text-zinc-500">Weight Loss Program</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] bg-surface p-8 rounded-2xl border border-zinc-800 snap-center">
<div className="flex gap-1 text-brand mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-zinc-300 italic mb-6">"Affordable pricing for the quality they offer. Very clean changing rooms and locker facilities."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-white font-bold">R</div>
<div>
<p className="text-sm font-semibold text-white">Rohan K.</p>
<p className="text-xs text-zinc-500">Student Plan</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Visit Us</h2>
<p className="text-zinc-400 mb-8">Ready to start? Drop by for a free tour.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-dark border border-zinc-800 rounded-lg text-brand">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Address</h4>
<p className="text-sm text-zinc-400">12, Station Road, Opp. City Mall,Indore, Madhya Pradesh 452001</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-dark border border-zinc-800 rounded-lg text-brand">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Phone</h4>
<p className="text-sm text-zinc-400">+91 98765 43210</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-dark border border-zinc-800 rounded-lg text-brand">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Email</h4>
<p className="text-sm text-zinc-400">hello@aashirwaadgym.com</p>
</div>
</div>
</div>
<a className="mt-10 inline-flex items-center justify-center w-full md:w-auto px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20bd5a] transition-all" href="https://wa.me/919876543210">
<iconify-icon className="mr-2" icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
                    Chat on WhatsApp
                </a>
</div>

<div className="h-[300px] md:h-auto w-full bg-zinc-800 rounded-2xl overflow-hidden relative">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.057424619376!2d75.8577!3d22.7196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQzJzEwLjYiTiA3NcKwNTEnMjcuNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" style={{border: '0', filter: 'grayscale(1) invert(1)'}} width="100%"></iframe>
</div>
</div>
</section>

<footer className="bg-dark border-t border-zinc-900 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-white text-lg font-semibold tracking-tighter uppercase flex items-center gap-2 mb-4" href="#">
<span className="bg-brand text-dark w-6 h-6 flex items-center justify-center rounded-sm text-xs font-bold">A</span>
                        Aashirwaad
                    </a>
<p className="text-sm text-zinc-500">Your daily dose of fitness, tailored for results.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Gym</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-brand transition-colors" href="#about">About</a></li>
<li><a className="hover:text-brand transition-colors" href="#trainers">Trainers</a></li>
<li><a className="hover:text-brand transition-colors" href="#gallery-photos">Gallery</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Membership</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-brand transition-colors" href="#plans">Plans</a></li>
<li><a className="hover:text-brand transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Corporate</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Socials</h4>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:youtube-linear" width="24"></iconify-icon></a>
</div>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2023 Aashirwaad Gym. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
