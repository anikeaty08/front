import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        // Data Source
        const artwork = [
            { id: 1, title: "Recursive Memory", year: "2023", src: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80&w=800" },
            { id: 2, title: "Analog Void", year: "2022", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800" },
            { id: 3, title: "Chromatic Echo", year: "2024", src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=800" },
            { id: 4, title: "Fractured Time", year: "2023", src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800" },
            { id: 5, title: "Static Dreams", year: "2022", src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=800" },
            { id: 6, title: "Geometry of Soul", year: "2023", src: "https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&fit=crop&q=80&w=800" },
            { id: 7, title: "Noir Glitch", year: "2021", src: "https://images.unsplash.com/photo-1620641788421-7f1c338e620d?auto=format&fit=crop&q=80&w=800" },
            { id: 8, title: "Sepia Algorithm", year: "2024", src: "https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&fit=crop&q=80&w=800" },
            { id: 9, title: "Neural Past", year: "2023", src: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800" },
            { id: 10, title: "Digital Silence", year: "2024", src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
            { id: 11, title: "Faded Horizon", year: "2023", src: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800" },
            { id: 1, title: "Recursive Memory", year: "2023", src: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80&w=800" },
            { id: 2, title: "Analog Void", year: "2022", src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800" },
            { id: 3, title: "Chromatic Echo", year: "2024", src: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=800" },
            { id: 4, title: "Fractured Time", year: "2023", src: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800" },
            { id: 5, title: "Static Dreams", year: "2022", src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=800" },
            { id: 6, title: "Geometry of Soul", year: "2023", src: "https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&fit=crop&q=80&w=800" },
            { id: 7, title: "Noir Glitch", year: "2021", src: "https://images.unsplash.com/photo-1620641788421-7f1c338e620d?auto=format&fit=crop&q=80&w=800" },
            { id: 8, title: "Sepia Algorithm", year: "2024", src: "https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&fit=crop&q=80&w=800" },
            { id: 9, title: "Neural Past", year: "2023", src: "https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&fit=crop&q=80&w=800" },
            { id: 10, title: "Digital Silence", year: "2024", src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" },
            { id: 11, title: "Faded Horizon", year: "2023", src: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800" }
        ];

        const grid = document.getElementById('gallery-grid');
        document.getElementById('year').textContent = new Date().getFullYear();

        // 1. Render Gallery with Reveal Classes
        artwork.forEach((art, index) => {
            const card = document.createElement('div');
            // 'overflow-hidden' on container is essential for the parallax image effect
            card.className = 'reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5';
            card.onclick = () => openLightbox(index);

            card.innerHTML = `
                <div class="relative w-full h-auto overflow-hidden">
                    <div class="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>
                    <!-- Parallax Img Class added -->
                    <img src="${art.src}" alt="${art.title}" class="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()">
                    
                    <!-- Subtle Gradient Overlay -->
                    <div class="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <!-- Text Overlay -->
                    <div class="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                        <h2 class="text-white text-sm font-medium tracking-tight">${art.title}</h2>
                        <p class="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono">${art.year}</p>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        // 2. Intersection Observer for "Appear" Effect
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Small delay based on column/index for staggered feel
                    setTimeout(() => {
                        entry.target.classList.add('reveal-visible');
                    }, 50); 
                    observer.unobserve(entry.target);
                } 
            });
        }, { threshold: 0.1, rootMargin: "50px" });

        // Observe Intro & Cards
        observer.observe(document.getElementById('intro'));
        document.querySelectorAll('.reveal-item').forEach((el) => observer.observe(el));


        // 3. Scroll Parallax Effect (The "Move Slightly" effect)
        // Moves the image inside the card based on scroll position
        let requestID;
        const parallaxImages = document.querySelectorAll('.parallax-img');
        
        function updateParallax() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            parallaxImages.forEach(img => {
                const rect = img.parentElement.getBoundingClientRect();
                
                // Only animate if in view
                if (rect.bottom > 0 && rect.top < windowHeight) {
                    // Calculate distance from center of viewport
                    const distanceFromCenter = (windowHeight / 2) - (rect.top + rect.height / 2);
                    
                    // Apply subtle translation (slower than scroll)
                    // The 1.15 scale in CSS gives us room to move vertically without showing edges
                    const moveY = distanceFromCenter * -0.08; 
                    
                    img.style.transform = `scale(1.15) translateY(${moveY}px)`;
                }
            });
            requestID = requestAnimationFrame(updateParallax);
        }

        // Start Parallax Loop
        requestID = requestAnimationFrame(updateParallax);


        // 4. Lightbox Logic
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxTitle = document.getElementById('lightbox-title');
        const lightboxYear = document.getElementById('lightbox-year');
        let currentIndex = 0;

        function openLightbox(index) {
            currentIndex = index;
            updateLightboxContent();
            lightbox.classList.remove('hidden-modal');
            lightbox.classList.add('visible-modal');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.remove('visible-modal');
            lightbox.classList.add('hidden-modal');
            document.body.style.overflow = '';
        }

        function updateLightboxContent() {
            const art = artwork[currentIndex];
            // Reset animation state
            lightboxImg.style.opacity = '0.5';
            lightboxImg.style.transform = 'scale(0.96)';
            
            setTimeout(() => {
                lightboxImg.src = art.src;
                lightboxTitle.innerText = art.title;
                lightboxYear.innerText = art.year;
                
                lightboxImg.onload = () => {
                    lightboxImg.style.opacity = '1';
                    lightboxImg.style.transform = 'scale(1)';
                };
            }, 150);
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % artwork.length;
            updateLightboxContent();
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + artwork.length) % artwork.length;
            updateLightboxContent();
        }

        document.getElementById('close-btn').addEventListener('click', closeLightbox);
        document.getElementById('next-btn').addEventListener('click', (e) => { e.stopPropagation(); nextImage(); });
        document.getElementById('prev-btn').addEventListener('click', (e) => { e.stopPropagation(); prevImage(); });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('visible-modal')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component w-full absolute top-0 hue-rotate-15 saturate-150 brightness-125 h-[700px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-scene-id="id-q4l7qx52cpqmtb9iu5hw4t" data-us-initialized="true" data-us-project="opxjeAzlg0dkUUVGEZri"><canvas aria-label="Unicorn Studio Scene" height="1050" role="img" style={{width: '1274px', height: '700px'}} width="1911"></canvas></div>

</div></div></div>

<header className="fixed top-0 w-full z-40 bg-neutral-950/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

<a className="text-xs font-semibold tracking-widest text-white uppercase hover:text-neutral-300 transition-colors font-space-grotesk" href="#" style={{}}>
                Jorge's Digital Art
            </a>

<div className="flex gap-5">
<button className="text-neutral-500 hover:text-white transition-colors group">
<svg aria-hidden="true" className="iconify group-hover:scale-110 transition-transform duration-300 iconify--lucide" data-height="18" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</button>
<button className="text-neutral-500 hover:text-white transition-colors group">
<svg aria-hidden="true" className="iconify group-hover:scale-110 transition-transform duration-300 iconify--lucide" data-height="18" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</button>
</div>
</div>
</header>

<main className="pt-36 pb-24 px-6 max-w-7xl mx-auto">

<section className="mb-32 max-w-3xl reveal-item reveal-visible" id="intro">
<h1 className="text-4xl md:text-6xl tracking-tighter text-white mb-6 leading-[1.05] font-dm-sans font-light" style={{transition: 'outline 0.1s ease-in-out'}}>
                Chaos &amp; <br className="hidden md:block"/>
<span className="text-neutral-500 font-dm-sans font-light" style={{transition: 'outline 0.1s ease-in-out'}}>Nostalgia.</span>
</h1>
<p className="text-sm md:text-base text-neutral-400 font-normal leading-relaxed max-w-xl tracking-wide font-space-grotesk" style={{}}>
                A visual exploration where mathematical precision meets the impermanence of memory. Bridging the gap between recursive fractal geometry and the texture of forgotten photography.
            </p>
</section>


<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6" id="gallery-grid">

<div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Recursive Memory" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(29.2406px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Recursive Memory</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Analog Void" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(12.72px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Analog Void</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Chromatic Echo" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(14.8px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Chromatic Echo</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Fractured Time" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(16.88px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Fractured Time</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Static Dreams" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(18.96px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Static Dreams</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Geometry of Soul" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(21.04px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Geometry of Soul</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Noir Glitch" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1620641788421-7f1c338e620d?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(23.12px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Noir Glitch</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2021</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Sepia Algorithm" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(25.2px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Sepia Algorithm</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Neural Past" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(29.2797px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Neural Past</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Digital Silence" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(12.72px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Digital Silence</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Faded Horizon" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(14.8px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Faded Horizon</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Recursive Memory" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(16.88px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Recursive Memory</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Analog Void" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(18.96px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Analog Void</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Chromatic Echo" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(21.04px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Chromatic Echo</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Fractured Time" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(15.9775px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Fractured Time</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Static Dreams" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(38.6059px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Static Dreams</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Geometry of Soul" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(10.64px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Geometry of Soul</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Noir Glitch" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1620641788421-7f1c338e620d?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(12.72px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Noir Glitch</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2021</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Sepia Algorithm" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(14.8px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Sepia Algorithm</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Neural Past" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(16.88px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Neural Past</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Digital Silence" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(18.96px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Digital Silence</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5 reveal-visible">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Faded Horizon" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&amp;fit=crop&amp;q=80&amp;w=800" style={{transform: 'scale(1.15) translateY(21.04px)'}}/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Faded Horizon</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Recursive Memory" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Recursive Memory</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Analog Void" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Analog Void</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Chromatic Echo" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Chromatic Echo</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Fractured Time" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Fractured Time</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Static Dreams" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Static Dreams</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Geometry of Soul" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Geometry of Soul</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Noir Glitch" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1620641788421-7f1c338e620d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Noir Glitch</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2021</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Sepia Algorithm" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Sepia Algorithm</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Neural Past" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Neural Past</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Digital Silence" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Digital Silence</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Faded Horizon" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Faded Horizon</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Recursive Memory" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Recursive Memory</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Analog Void" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Analog Void</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Chromatic Echo" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Chromatic Echo</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Fractured Time" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Fractured Time</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Static Dreams" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Static Dreams</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Geometry of Soul" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Geometry of Soul</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Noir Glitch" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1620641788421-7f1c338e620d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Noir Glitch</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2021</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Sepia Algorithm" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Sepia Algorithm</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Neural Past" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Neural Past</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Digital Silence" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Digital Silence</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Faded Horizon" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Faded Horizon</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Recursive Memory" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Recursive Memory</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Analog Void" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Analog Void</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Chromatic Echo" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Chromatic Echo</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Fractured Time" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Fractured Time</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Static Dreams" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Static Dreams</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Geometry of Soul" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Geometry of Soul</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Noir Glitch" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1620641788421-7f1c338e620d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Noir Glitch</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2021</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Sepia Algorithm" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Sepia Algorithm</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Neural Past" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Neural Past</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Digital Silence" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Digital Silence</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Faded Horizon" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Faded Horizon</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Recursive Memory" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Recursive Memory</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Analog Void" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Analog Void</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Chromatic Echo" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Chromatic Echo</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Fractured Time" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Fractured Time</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Static Dreams" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Static Dreams</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2022</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Geometry of Soul" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1509281373149-e957c629640d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Geometry of Soul</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">
<div className="absolute inset-0 bg-neutral-800 animate-pulse z-0 pointer-events-none"></div>

<img alt="Noir Glitch" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1620641788421-7f1c338e620d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Noir Glitch</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2021</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Sepia Algorithm" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Sepia Algorithm</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Neural Past" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Neural Past</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Digital Silence" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Digital Silence</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2024</p>
</div>
</div>
</div><div className="reveal-item break-inside-avoid mb-6 relative group cursor-zoom-in overflow-hidden rounded-sm bg-neutral-900 border border-white/5">
<div className="relative w-full h-auto overflow-hidden">

<img alt="Faded Horizon" className="parallax-img relative z-10 w-full h-auto grayscale-[40%] group-hover:grayscale-0" loading="lazy" onload="this.previousElementSibling.remove()" src="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>

<div className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

<div className="absolute bottom-0 left-0 w-full p-5 z-30 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
<h2 className="text-white text-sm font-medium tracking-tight font-space-grotesk" style={{}}>Faded Horizon</h2>
<p className="text-neutral-400 text-[10px] tracking-widest mt-1 uppercase font-mono font-space-grotesk" style={{}}>2023</p>
</div>
</div>
</div></div>
</main>

<footer className="border-t border-white/5 py-12 px-6 bg-neutral-950">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-[10px] tracking-widest uppercase text-neutral-600 font-medium font-space-grotesk" style={{}}>
                © <span className="font-space-grotesk" id="year" style={{}}>2025</span> Jorge's Digital Art
            </div>
<div className="flex gap-6 text-[10px] tracking-widest uppercase text-neutral-600 font-medium">
<a className="hover:text-white transition-colors font-space-grotesk" href="#" style={{}}>Imprint</a>
<a className="hover:text-white transition-colors font-space-grotesk" href="#" style={{}}>Privacy</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 bg-neutral-950/95 flex items-center justify-center hidden-modal backdrop-blur-md" id="lightbox">

<button className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-transform hover:rotate-90 duration-300 z-50 p-2" id="close-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:x" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-white transition-all z-50 hidden md:block p-4 group hover:-translate-x-1" id="prev-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="32" data-icon="lucide:arrow-left" data-strokeWidth="1" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-neutral-600 hover:text-white transition-all z-50 hidden md:block p-4 group hover:translate-x-1" id="next-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="32" data-icon="lucide:arrow-right" data-strokeWidth="1" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-12">
<img alt="" className="max-h-[80vh] max-w-full object-contain shadow-2xl rounded-sm transition-transform duration-500 select-none" id="lightbox-img" src=""/>

<div className="absolute bottom-10 left-0 w-full text-center pointer-events-none space-y-2">
<h3 className="text-lg font-medium text-white tracking-tight drop-shadow-md" id="lightbox-title"></h3>
<p className="text-xs text-neutral-500 font-mono tracking-widest uppercase drop-shadow-md" id="lightbox-year"></p>
</div>
</div>
</div>


    </>
  );
}
