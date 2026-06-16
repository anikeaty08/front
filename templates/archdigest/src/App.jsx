import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Mobile Menu Logic ---
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
            } else {
                menu.classList.add('translate-x-full');
            }
        }

        // --- Grid/List View Logic ---
        function setView(view) {
            const container = document.getElementById('projects-container');
            const btnGrid = document.getElementById('btn-grid');
            const btnList = document.getElementById('btn-list');
            const items = document.querySelectorAll('.project-item');
            const imgContainers = document.querySelectorAll('.project-img-container');

            // Apply fade out
            container.classList.add('opacity-0');

            setTimeout(() => {
                if (view === 'list') {
                    // Switch to List View
                    container.classList.remove('grid-cols-1', 'lg:grid-cols-2');
                    container.classList.add('flex', 'flex-col', 'gap-12');
                    
                    // Reset styling on buttons
                    btnGrid.className = "w-12 h-12 rounded-xl border border-[#3F3E3A]/10 flex items-center justify-center hover:bg-[#3F3E3A] hover:text-[#F2F0E9] transition-colors";
                    btnList.className = "w-12 h-12 rounded-xl border border-[#3F3E3A]/10 flex items-center justify-center bg-[#3F3E3A] text-[#F2F0E9] transition-colors";

                    // Adjust items for list view (horizontal layout)
                    items.forEach(item => {
                        item.classList.add('lg:flex', 'lg:gap-8', 'lg:items-center');
                        item.classList.remove('lg:mt-24'); // Remove staggering
                    });
                    imgContainers.forEach(div => {
                        div.classList.remove('mb-6');
                        div.classList.add('lg:w-1/2', 'lg:mb-0');
                    });
                    
                } else {
                    // Switch to Grid View
                    container.classList.remove('flex', 'flex-col', 'gap-12');
                    container.classList.add('grid-cols-1', 'lg:grid-cols-2');

                    // Reset styling on buttons
                    btnGrid.className = "w-12 h-12 rounded-xl border border-[#3F3E3A]/10 flex items-center justify-center bg-[#3F3E3A] text-[#F2F0E9] transition-colors";
                    btnList.className = "w-12 h-12 rounded-xl border border-[#3F3E3A]/10 flex items-center justify-center hover:bg-[#3F3E3A] hover:text-[#F2F0E9] transition-colors";

                    // Reset items
                    items.forEach((item, index) => {
                        item.classList.remove('lg:flex', 'lg:gap-8', 'lg:items-center');
                        if (index === 1) item.classList.add('lg:mt-24'); // Re-add stagger
                    });
                    imgContainers.forEach(div => {
                        div.classList.add('mb-6');
                        div.classList.remove('lg:w-1/2', 'lg:mb-0');
                    });
                }
                
                // Fade back in
                container.classList.remove('opacity-0');
            }, 300);
        }

        // --- Carousel Logic (Smooth) ---
        const cards = [
            { title: "Urban Study", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14422859-2c3e-444b-911b-03aae8342fd5_800w.webp", category: "Concept" },
            { title: "Villa Helix", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e70a40f-3f85-4179-ae7c-ae8ce4783151_800w.webp", category: "Residential" },
            { title: "Civic Center", img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af52b42f-fdfa-4e05-8c55-9ffebb3e83c9_800w.webp", category: "Public" }
        ];

        let currentIndex = 1;
        let isAnimating = false;

        function updateDOM() {
            const leftIdx = (currentIndex - 1 + cards.length) % cards.length;
            const centerIdx = currentIndex;
            const rightIdx = (currentIndex + 1) % cards.length;

            const leftEl = document.getElementById('card-left');
            const centerEl = document.getElementById('card-center');
            const rightEl = document.getElementById('card-right');

            // Apply content
            const setContent = (el, idx, isCenter) => {
                const img = el.querySelector('img');
                img.src = cards[idx].img;
                if(isCenter) {
                    el.querySelector('h3').textContent = cards[idx].title;
                    el.querySelector('span').textContent = cards[idx].category;
                } else {
                    el.querySelector('p').textContent = cards[idx].title;
                }
            };

            setContent(leftEl, leftIdx, false);
            setContent(centerEl, centerIdx, true);
            setContent(rightEl, rightIdx, false);
        }

        function rotateCarousel(direction) {
            if (isAnimating) return;
            isAnimating = true;

            const leftEl = document.getElementById('card-left');
            const centerEl = document.getElementById('card-center');
            const rightEl = document.getElementById('card-right');

            // Visual transition states
            centerEl.style.opacity = '0';
            centerEl.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                if (direction === 'next') {
                    currentIndex = (currentIndex + 1) % cards.length;
                } else {
                    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                }
                
                updateDOM();
                
                // Restore center
                centerEl.style.opacity = '1';
                centerEl.style.transform = 'scale(1)';
                
                isAnimating = false;
            }, 600); // Matches CSS transition duration
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="" id="wrapper">

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style>
    .gradient-blur {
      position: fixed;
      z-index: 30;
      inset: 0 0 auto 0;
      height: 12%;
      pointer-events: none;
    }

    .gradient-blur>div,
    .gradient-blur::before,
    .gradient-blur::after {
      position: absolute;
      inset: 0;
    }

    .gradient-blur::before {
      content: "";
      z-index: 1;
      backdrop-filter: blur(0.5px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 1) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 0) 37.5%);
    }

    .gradient-blur>div:nth-of-type(1) {
      z-index: 2;
      backdrop-filter: blur(1px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 12.5%,
          rgba(0, 0, 0, 1) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 0) 50%);
    }

    .gradient-blur>div:nth-of-type(2) {
      z-index: 3;
      backdrop-filter: blur(2px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 25%,
          rgba(0, 0, 0, 1) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 0) 62.5%);
    }

    .gradient-blur>div:nth-of-type(3) {
      z-index: 4;
      backdrop-filter: blur(4px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 37.5%,
          rgba(0, 0, 0, 1) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 0) 75%);
    }

    .gradient-blur>div:nth-of-type(4) {
      z-index: 5;
      backdrop-filter: blur(8px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 50%,
          rgba(0, 0, 0, 1) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 0) 87.5%);
    }

    .gradient-blur>div:nth-of-type(5) {
      z-index: 6;
      backdrop-filter: blur(16px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 62.5%,
          rgba(0, 0, 0, 1) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 0) 100%);
    }

    .gradient-blur>div:nth-of-type(6) {
      z-index: 7;
      backdrop-filter: blur(32px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 1) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }

    .gradient-blur::after {
      content: "";
      z-index: 8;
      backdrop-filter: blur(64px);
      mask: linear-gradient(to top,
          rgba(0, 0, 0, 0) 87.5%,
          rgba(0, 0, 0, 1) 100%);
    }
  </style>
</div>

<div className="fixed inset-0 bg-[#0F0F11]/95 backdrop-blur-xl z-[60] transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center gap-8" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 text-[#E4E4E7]" onclick="toggleMenu()">
<iconify-icon className="text-3xl" icon="lucide:x" strokeWidth="1.5"></iconify-icon>
</button>
<a className="text-3xl text-[#E4E4E7] hover:text-white font-playfair font-medium tracking-tight" href="#" style={{}}>Projects</a>
<a className="text-3xl text-[#E4E4E7] hover:text-white font-playfair font-medium tracking-tight" href="#" style={{}}>Studio</a>
<a className="text-3xl text-[#E4E4E7] hover:text-white font-playfair font-medium tracking-tight" href="#" style={{}}>Contact</a>
</div>

<nav className="fixed lg:px-12 flex bg-gradient-to-b from-black/40 to-transparent w-full z-50 pt-6 pr-6 pb-6 pl-6 top-0 left-0 items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-xl text-[#E4E4E7]" icon="lucide:drafting-compass" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-serif text-lg font-medium tracking-tight text-[#E4E4E7] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Arch<span className="text-[#A1A1AA] font-serif italic font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Digest</span></span>
</div>
<div className="hidden md:flex items-center gap-1 p-1 bg-white/5 border border-white/5 rounded-xl backdrop-blur-md">
<a className="px-5 py-2 text-xs font-medium text-[#E4E4E7] bg-white/10 rounded-lg transition-all shadow-sm font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Projects</a>
<a className="px-5 py-2 text-xs font-medium text-[#A1A1AA] hover:text-[#E4E4E7] hover:bg-white/5 rounded-lg transition-all font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Studio</a>
<a className="px-5 py-2 text-xs font-medium text-[#A1A1AA] hover:text-[#E4E4E7] hover:bg-white/5 rounded-lg transition-all font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-[#E4E4E7] hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="lucide:search" strokeWidth="1.5"></iconify-icon>
</button>
<button className="md:hidden p-2 text-[#E4E4E7]" onclick="toggleMenu()">
<iconify-icon className="text-2xl" icon="lucide:menu" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="flex flex-col lg:flex-row lg:px-12 lg:gap-20 border-white/5 border-b pt-32 pr-6 pb-20 pl-6 relative gap-x-12 gap-y-12">

<div className="flex-1 flex flex-col z-10 justify-center">
<div className="flex lg:mt-44 mt-0 mb-10 gap-x-4 gap-y-4 items-center">
<span className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Est. 1984</span>
<div className="h-px w-12 bg-white/10"></div>
<span className="font-mono text-xs uppercase tracking-widest text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Brutalist &amp; Modern</span>
</div>
<h1 className="text-6xl lg:text-8xl leading-[0.95] mb-8 text-[#E4E4E7] font-playfair font-medium tracking-tight" style={{}}>
                Form Follows <br/>
<span className="italic text-white/30 font-playfair tracking-tight" style={{}}>Function</span>
</h1>
<p className="text-lg text-[#A1A1AA] max-w-md leading-relaxed font-light mb-12 border-l border-white/10 pl-6 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                Exploring the intersection of spatial dynamics and material integrity. We design spaces that breathe, endure, and inspire through minimalist geometry.
            </p>

<div className="mt-auto grid grid-cols-3 gap-4">
<div className="group cursor-pointer">
<div className="aspect-square rounded-xl overflow-hidden mb-3 relative border border-white/10">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/588ff515-542e-4057-9122-0b57118b3e74_800w.webp"/>
</div>
<p className="text-xs text-[#E4E4E7] font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>The Louvre</p>
<p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Paris</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-square rounded-xl overflow-hidden mb-3 relative border border-white/10">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92f79571-c9ab-4ba6-827b-8845c8060486_800w.webp"/>
</div>
<p className="text-xs text-[#E4E4E7] font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Vatican Hall</p>
<p className="text-[10px] text-[#A1A1AA] uppercase tracking-wider font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Rome</p>
</div>
<div className="flex flex-col justify-end pb-6">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all group">
<iconify-icon className="text-xl group-hover:translate-y-1 transition-transform" icon="lucide:arrow-down" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:w-[50%] flex flex-col justify-center relative z-10 mt-12 lg:mt-0">
<div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 group">
<img alt="Architecture Main" className="transition-transform duration-[1.5s] group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df7a2dd9-504b-4462-9e25-8f9322d8a718_1600w.webp"/>
<div className="bg-gradient-to-t from-[#0F0F11] via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 p-10">
<div className="flex items-end justify-between">
<div className="">
<div className="flex items-center gap-2 mb-3">
<span className="px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-widest bg-white/10 backdrop-blur-md text-white border border-white/10 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Featured</span>
</div>
<h2 className="text-4xl text-[#E4E4E7] mb-2 font-playfair font-medium tracking-tight" style={{}}>Concrete &amp; Light</h2>
<p className="text-[#A1A1AA] text-sm font-light max-w-[250px] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>A study in brutalist forms interacting with natural illumination.</p>
</div>
<button className="px-6 py-3 bg-white text-[#0F0F11] text-sm font-semibold rounded-lg hover:bg-[#A1A1AA] transition-colors flex items-center gap-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                            View Project
                            <iconify-icon className="text-base" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F2F0E9] text-[#3F3E3A] py-24 px-6 lg:px-12">
<div className="flex flex-col lg:flex-row justify-between items-end mb-16">
<div className="">
<h2 className="lg:text-6xl leading-none text-5xl font-medium text-[#3F3E3A] font-playfair mb-4 tracking-tight" style={{}}>
                    Selected Works
                </h2>
<p className="text-[#3F3E3A]/60 max-w-sm text-sm leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Curated collection of residential and commercial projects defined by clean lines and sustainable materials.
                </p>
</div>
<div className="flex gap-4 mt-8 lg:mt-0">
<button className="w-12 h-12 rounded-xl border border-[#3F3E3A]/10 flex items-center justify-center bg-[#3F3E3A] text-[#F2F0E9] transition-colors" id="btn-grid" onclick="setView('grid')">
<iconify-icon className="text-xl" icon="lucide:grid-3x3" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-xl border border-[#3F3E3A]/10 flex items-center justify-center hover:bg-[#3F3E3A] hover:text-[#F2F0E9] transition-colors" id="btn-list" onclick="setView('list')">
<iconify-icon className="text-xl" icon="lucide:list" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="projects-container">

<div className="group cursor-pointer project-item">
<div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#3F3E3A]/5 project-img-container">
<img alt="Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a82ca5b-ffa7-4e34-81d1-7b20a0bbd06d_1600w.webp"/>
<div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest rounded-md text-[#3F3E3A] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Interior</div>
</div>
<div className="flex justify-between items-start border-t border-[#E6E4DC] pt-5 project-details">
<div>
<h3 className="text-2xl text-[#3F3E3A] mb-1 group-hover:opacity-70 transition-opacity font-playfair font-medium tracking-tight" style={{}}>The Stone House</h3>
<p className="text-xs text-[#3F3E3A]/50 font-mono uppercase tracking-wider font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Copenhagen, Denmark</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-[#3F3E3A] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>2023</p>
</div>
</div>
</div>

<div className="group cursor-pointer lg:mt-24 project-item">
<div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 bg-[#3F3E3A]/5 project-img-container">
<img alt="Structure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3bddd261-7b06-4b0b-b492-db3a866ae985_800w.webp"/>
<div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest rounded-md text-[#3F3E3A] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Restoration</div>
</div>
<div className="flex justify-between items-start border-t border-[#E6E4DC] pt-5 project-details">
<div className="">
<h3 className="text-2xl text-[#3F3E3A] mb-1 group-hover:opacity-70 transition-opacity font-playfair font-medium tracking-tight" style={{}}>Archive Museum</h3>
<p className="text-xs text-[#3F3E3A]/50 font-mono uppercase tracking-wider font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Berlin, Germany</p>
</div>
<div className="text-right">
<p className="text-sm font-medium text-[#3F3E3A] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>2022</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden flex flex-col text-[#44403C] bg-[#E7E5E4] pt-32 pr-0 pb-32 pl-0 relative justify-center">
<div className="px-6 lg:px-12 mb-12 flex justify-between items-end">
<div className="">
<span className="text-xs font-bold uppercase tracking-widest text-[#44403C]/40 mb-2 block font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Portfolio</span>
<h2 className="text-4xl lg:text-5xl text-[#44403C] font-playfair font-medium tracking-tight" style={{}}>Current Drafts</h2>
</div>

<div className="flex gap-2">
<button className="w-12 h-12 rounded-lg border border-[#44403C]/10 bg-[#F5F5F4] hover:bg-white transition-colors flex items-center justify-center text-[#44403C]" onclick="rotateCarousel('prev')">
<iconify-icon className="text-lg" icon="lucide:arrow-left" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-lg border border-[#44403C]/10 bg-[#F5F5F4] hover:bg-white transition-colors flex items-center justify-center text-[#44403C]" onclick="rotateCarousel('next')">
<iconify-icon className="text-lg" icon="lucide:arrow-right" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-visible w-full h-[500px] relative items-center justify-center" id="carousel-container">

<div className="carousel-card absolute w-[300px] lg:w-[400px] h-[450px] bg-white rounded-2xl shadow-lg opacity-40 scale-90 -translate-x-[60%] z-10 overflow-hidden cursor-pointer" id="card-left" onclick="rotateCarousel('prev')">
<img alt="Plan" className="w-full h-full object-cover grayscale sepia-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14422859-2c3e-444b-911b-03aae8342fd5_800w.webp"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/50 to-transparent">
<p className="text-white font-serif text-xl font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Urban Study</p>
</div>
</div>

<div className="carousel-card absolute w-[300px] lg:w-[400px] h-[450px] bg-white rounded-2xl shadow-2xl scale-100 z-20 overflow-hidden" id="card-center">
<img alt="Plan" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e70a40f-3f85-4179-ae7c-ae8ce4783151_800w.webp"/>
<div className="absolute inset-0 border-[12px] border-white/10"></div>
<div className="absolute bottom-0 left-0 p-8 w-full bg-white border-t border-[#E7E5E4]">
<div className="flex justify-between items-center">
<div>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#A1A1AA] mb-1 block font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Residential</span>
<h3 className="text-2xl text-[#44403C] font-playfair font-medium tracking-tight" style={{}}>Villa Helix</h3>
</div>
<div className="w-10 h-10 rounded-full bg-[#F5F5F4] flex items-center justify-center">
<iconify-icon className="text-[#44403C]" icon="lucide:plus" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="carousel-card absolute w-[300px] lg:w-[400px] h-[450px] bg-white rounded-2xl shadow-lg opacity-40 scale-90 translate-x-[60%] z-10 overflow-hidden cursor-pointer" id="card-right" onclick="rotateCarousel('next')">
<img alt="Plan" className="w-full h-full object-cover grayscale sepia-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5323bb36-ee4e-4aa0-a014-ac8c26c0bcf9_800w.webp"/>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black/50 to-transparent">
<p className="text-white font-serif text-xl font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Civic Center</p>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-12">
<div className="w-2 h-2 rounded-full bg-[#44403C]"></div>
<div className="w-2 h-2 rounded-full bg-[#A1A1AA]"></div>
<div className="w-2 h-2 rounded-full bg-[#A1A1AA]"></div>
</div>
</section><section className="lg:px-12 text-[#0F0F11] bg-white border-gray-100 border-b pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

<div className="">
<span className="text-xs font-bold uppercase tracking-widest text-[#A1A1AA] mb-4 flex items-center gap-2 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
<iconify-icon className="text-lg text-[#0F0F11]" icon="solar:cup-star-bold-duotone"></iconify-icon>
                Accolades
            </span>
<h2 className="text-5xl lg:text-6xl mb-6 text-[#0F0F11] leading-[1.1] font-playfair font-medium tracking-tight" style={{}}>
                Recognition &amp; Impact
            </h2>
<p className="text-[#A1A1AA] text-lg leading-relaxed font-light mb-12 max-w-md font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                Our designs shape skylines and communities. We are honored when our commitment to spatial integrity resonates with the global design industry.
            </p>

<div className="w-full">
<div className="flex justify-between text-[10px] font-bold text-[#A1A1AA]/60 uppercase tracking-widest mb-6 border-b border-gray-100 pb-2">
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Organization</span>
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Year</span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#0F0F11] font-semibold text-lg">
<iconify-icon className="text-xl" icon="simple-icons:archdaily"></iconify-icon>
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>ArchDaily</span>
</div>
<span className="text-xs text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Building of the Year — Cultural</span>
</div>
<span className="font-mono text-sm text-[#0F0F11]/60 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>2025</span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#0F0F11] font-semibold text-lg">
<iconify-icon className="text-xl" icon="simple-icons:dezeen"></iconify-icon>
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Dezeen Awards</span>
</div>
<span className="text-xs text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Sustainable Studio of the Year</span>
</div>
<span className="font-mono text-sm text-[#0F0F11]/60 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>2024</span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#0F0F11] font-semibold text-lg">
<iconify-icon className="text-xl" icon="ph:trophy-fill"></iconify-icon>
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Pritzker Prize</span>
</div>
<span className="text-xs text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Laureate — Lifetime Achievement</span>
</div>
<span className="font-mono text-sm text-[#0F0F11]/60 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>2024</span>
</div>

<div className="group flex items-center justify-between py-5 border-b border-gray-100 hover:bg-gray-50/50 transition-colors cursor-default -mx-2 px-2 rounded-lg">
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-3 text-[#0F0F11] font-semibold text-lg">
<iconify-icon className="text-xl" icon="mdi:decagram"></iconify-icon>
<span className="font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Mies van der Rohe</span>
</div>
<span className="text-xs text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>European Union Prize</span>
</div>
<span className="font-mono text-sm text-[#0F0F11]/60 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>2023</span>
</div>
</div>
</div>

<div className="bg-[#FAFAFA] rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-200/50">

<div className="h-72 w-full overflow-hidden relative group">
<img alt="Award Winning Project" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92fa848d-fed5-4735-b284-fe79a795072d_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0F0F11]/80 to-transparent"></div>
<div className="absolute bottom-6 left-8 text-white">
<span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 backdrop-blur-md px-3 py-1 rounded-full mb-3 inline-block border border-white/10 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Project of the Year</span>
<h3 className="text-3xl font-playfair font-medium tracking-tight" style={{}}>The Helix Tower</h3>
</div>
</div>

<div className="p-8 lg:p-10">
<div className="mb-10">
<h4 className="text-2xl text-[#0F0F11] mb-3 font-playfair font-medium tracking-tight" style={{}}>Urban Regeneration 2024</h4>
<p className="text-[#A1A1AA] text-sm leading-relaxed font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Our flagship restoration project in Oslo set unprecedented standards for adaptive reuse, achieving net-zero status within six months of operation.
                    </p>
</div>
<div className="space-y-8">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E4E4E7]/30 flex items-center justify-center text-[#0F0F11] group-hover:bg-[#0F0F11] group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:leaf-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#0F0F11] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Carbon Offset</span>
<span className="text-xs text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Annual reduction</span>
</div>
</div>
<span className="text-4xl text-[#0F0F11] font-playfair font-medium tracking-tight" style={{}}>84%</span>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E4E4E7]/30 flex items-center justify-center text-[#0F0F11] group-hover:bg-[#0F0F11] group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#0F0F11] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Community</span>
<span className="text-xs text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Daily visitors</span>
</div>
</div>
<span className="text-4xl text-[#0F0F11] font-playfair font-medium tracking-tight" style={{}}>2.5M</span>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E4E4E7]/30 flex items-center justify-center text-[#0F0F11] group-hover:bg-[#0F0F11] group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:graph-up-bold-duotone"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-[#0F0F11] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Efficiency</span>
<span className="text-xs text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Energy surplus</span>
</div>
</div>
<span className="text-4xl text-[#0F0F11] font-playfair font-medium tracking-tight" style={{}}>165%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:pl-12 lg:pr-12 lg:pt-24 lg:pb-48 text-[#0F0F11] text-center bg-white z-20 pt-24 pr-12 pb-48 pl-12 relative items-center">
<h2 className="text-4xl lg:text-5xl mb-4 font-playfair font-medium tracking-tight" style={{}}>Subscribe to our newsletter</h2>
<p className="text-[#A1A1AA] text-sm lg:text-base max-w-lg mb-10 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Sign up today and get a free catalog of our top 100 architectural designs.</p>
<div className="w-full max-w-md flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-[#A1A1AA]" icon="lucide:mail" strokeWidth="1.5"></iconify-icon>
</div>
<input className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0F0F11]/20 transition-all placeholder:text-[#A1A1AA]" placeholder="Enter your email address" type="email"/>
</div>
<button className="bg-[#0F0F11] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-black/90 transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                Get started
            </button>
</div>
<div className="flex items-center gap-3 mt-8">
<span className="text-xs text-[#A1A1AA] font-medium font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Our architects are ready to help!</span>
<div className="flex -space-x-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=5"/>
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=9"/>
</div>
</div>
</section>

<div className="bg-[#000000] relative">


<div className="relative z-30 mx-4 lg:mx-auto max-w-6xl -mt-16 transform lg:-translate-y-12">
<div className="bg-gradient-to-r from-[#1A1A1A] to-[#0A0A0A] rounded-[2rem] p-8 lg:p-16 overflow-hidden relative shadow-2xl border border-white/10">

<div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-40">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>

<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px', maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 70%)'}}></div>
</div>
<div className="relative z-10 max-w-xl">
<h3 className="text-3xl lg:text-5xl text-white mb-4 leading-tight font-playfair font-medium tracking-tight" style={{}}>
                        Experience superior 
                        architecture design
                    </h3>
<p className="text-[#A1A1AA] text-sm lg:text-base mb-8 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        150+ international awards won for sustainable innovation.
                    </p>
<button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Get started
                    </button>
</div>
</div>
</div>

<footer className="pt-12 lg:pt-24 pb-12 px-6 lg:px-12 text-[#E4E4E7]">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-20">

<div className="lg:w-1/3">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-xl text-white" icon="lucide:drafting-compass" strokeWidth="1.5"></iconify-icon>
<span className="font-serif text-lg font-medium text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>ArchDigest</span>
</div>
<div className="space-y-2 text-sm">
<div className="flex justify-between max-w-[200px]">
<span className="text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Phone number</span>
<span className="text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>1-800-201-1019</span>
</div>
<div className="flex justify-between max-w-[280px]">
<span className="text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Email</span>
<span className="text-white font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>support@archdigest.com</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 lg:flex-1">
<div>
<h4 className="text-white font-medium text-sm mb-4 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Quick links</h4>
<ul className="space-y-3 text-sm text-[#A1A1AA]">
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Pricing</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Resources</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>About us</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>FAQ</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Contact us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Social</h4>
<ul className="space-y-3 text-sm text-[#A1A1AA]">
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Facebook</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Instagram</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>LinkedIn</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Twitter</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Youtube</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4 font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>Legal</h4>
<ul className="space-y-3 text-sm text-[#A1A1AA]">
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Terms of service</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Privacy policy</a></li>
<li><a className="hover:text-white transition-colors font-geist" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Cookie policy</a></li>
</ul>
</div>
</div>
</div>

<div className="border-t border-white/10 pt-8 text-center lg:text-left">
<p className="text-xs text-[#A1A1AA] font-geist" style={{transition: 'outline 0.1s ease-in-out'}}>© 2024 ArchDigest. All rights reserved.</p>
</div>
</footer>
</div>


    </>
  );
}
