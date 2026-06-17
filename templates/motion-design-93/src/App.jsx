import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // 1. Hamburger Menu & Navigation Dropdown Logic
            const menuBtn = document.getElementById('menu-toggle');
            const navDropdown = document.getElementById('nav-dropdown');
            const l1 = document.getElementById('line-1');
            const l2 = document.getElementById('line-2');
            const l3 = document.getElementById('line-3');
            let menuOpen = false;

            const toggleMenu = (e) => {
                if(e) e.stopPropagation();
                menuOpen = !menuOpen;
                if (menuOpen) {
                    navDropdown.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-2');
                    navDropdown.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
                    // Morph hamburger to 'X'
                    l1.classList.add('translate-y-[5.5px]', 'rotate-45');
                    l2.classList.add('opacity-0', 'translate-x-4');
                    l3.classList.add('-translate-y-[5.5px]', '-rotate-45');
                } else {
                    navDropdown.classList.add('opacity-0', 'pointer-events-none', '-translate-y-2');
                    navDropdown.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
                    // Revert hamburger
                    l1.classList.remove('translate-y-[5.5px]', 'rotate-45');
                    l2.classList.remove('opacity-0', 'translate-x-4');
                    l3.classList.remove('-translate-y-[5.5px]', '-rotate-45');
                }
            };

            menuBtn.addEventListener('click', toggleMenu);
            
            // Close dropdown when a link is clicked
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => { if(menuOpen) toggleMenu(); });
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (menuOpen && !menuBtn.contains(e.target) && !navDropdown.contains(e.target)) {
                    toggleMenu();
                }
            });

            // 2. YouTube Modal Logic for Projects
            const youtubeModal = document.getElementById('youtube-modal');
            const youtubeIframe = document.getElementById('youtube-iframe');
            const closeModalBtn = document.getElementById('close-modal');

            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('click', () => {
                    const url = card.getAttribute('data-youtube-url');
                    if(url) {
                        youtubeIframe.src = url;
                        youtubeModal.classList.remove('hidden');
                        youtubeModal.classList.add('flex');
                        setTimeout(() => youtubeModal.classList.remove('opacity-0'), 10);
                    }
                });
            });

            const closeModal = () => {
                youtubeModal.classList.add('opacity-0');
                setTimeout(() => {
                    youtubeModal.classList.add('hidden');
                    youtubeModal.classList.remove('flex');
                    youtubeIframe.src = '';
                }, 300);
            };

            closeModalBtn.addEventListener('click', closeModal);
            youtubeModal.addEventListener('click', (e) => {
                if(e.target === youtubeModal) closeModal();
            });

            // 3. Scroll-triggered Autoplay for Success Videos
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const video = entry.target;
                    if (entry.isIntersecting) {
                        if (!video.src) video.src = video.dataset.src;
                        video.play().catch(e => console.log('Autoplay blocked', e));
                    } else {
                        video.pause();
                    }
                });
            }, { threshold: 0.3 });

            document.querySelectorAll('.scroll-autoplay-video').forEach(vid => {
                videoObserver.observe(vid);
            });

            // 4. Fade Up & Counter Animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const animateElements = document.querySelectorAll('.animate-on-scroll');
            
            animateElements.forEach(el => {
                el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
            });

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');

                        const counters = entry.target.querySelectorAll('.counter-value');
                        counters.forEach(counter => {
                            if(counter.classList.contains('animated')) return;
                            counter.classList.add('animated');

                            const target = +counter.getAttribute('data-target');
                            const duration = 2000;
                            const frameRate = 16;
                            const totalFrames = duration / frameRate;
                            const increment = target / totalFrames;
                            let current = 0;

                            const updateCounter = () => {
                                current += increment;
                                if (current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                        });

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            animateElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="sticky top-0 w-full z-[60] bg-black/80 backdrop-blur-md border-b border-zinc-900/80 transition-all duration-300">
<nav className="w-full max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
<div className="flex items-center gap-3">

<img alt="Reso VFX Logo" className="w-8 h-8 rounded-full object-cover" src="https://placehold.co/100x100/10b981/000000?text=RV"/>
<span className="text-lg font-semibold tracking-tight text-white">Reso VFX</span>
</div>
<div className="flex gap-4 items-center relative">

<button className="group relative w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-zinc-900 transition-colors z-[60]" id="menu-toggle">
<div className="flex flex-col justify-center items-center w-5 h-4 gap-[4px] overflow-hidden">
<span className="w-[18px] h-[1.5px] bg-zinc-400 block transition-all duration-300 transform origin-center" id="line-1"></span>
<span className="w-[18px] h-[1.5px] bg-zinc-400 block transition-all duration-300 group-hover:translate-x-1" id="line-2"></span>
<span className="w-[18px] h-[1.5px] bg-zinc-400 block transition-all duration-300 transform origin-center" id="line-3"></span>
</div>
</button>

<div className="absolute top-[3.5rem] right-0 w-56 bg-zinc-950 border border-zinc-800/80 rounded-2xl shadow-2xl opacity-0 pointer-events-none transition-all duration-200 transform -translate-y-2 flex flex-col p-2 z-[60]" id="nav-dropdown">
<a className="nav-link px-4 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors" href="#projects">Projects</a>
<a className="nav-link px-4 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors" href="#worked-with">Worked With</a>
<a className="nav-link px-4 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors" href="#request">Request a Project</a>
<a className="nav-link px-4 py-2.5 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-lg transition-colors" href="#about">About Me</a>
</div>
</div>
</nav>
</header>

<div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm hidden items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="youtube-modal">
<button className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors" id="close-modal">
<iconify-icon height="36" icon="solar:close-circle-linear" width="36"></iconify-icon>
</button>
<div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative border border-zinc-800">
<iframe allow="autoplay; encrypted-media" allowfullscreen="" className="absolute inset-0 w-full h-full border-0" id="youtube-iframe"></iframe>
</div>
</div>

<main className="relative w-full flex flex-col items-center pt-28 pb-32 overflow-hidden border-b border-zinc-900/50" id="about">

<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" loop="" muted="" playsinline="">

<source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black pointer-events-none"></div>

<div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-center animate-on-scroll">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Premium Motion Content for<br/>Brands That Move Fast <span className="inline-block w-3 h-3 bg-red-500 rounded-full ml-2 align-middle"></span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-10">
                I craft high-converting visual experiences for innovative brands and creators.
            </p>
<a className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-base hover:bg-zinc-200 transition-all duration-300 inline-flex items-center gap-2" href="https://cal.com/resovfx/gtkeo-get-to-know-each-other" rel="noopener noreferrer" target="_blank">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Book A Strategy Call
            </a>
</div>
</main>

<section className="w-full py-16 bg-black border-b border-zinc-900/50" id="worked-with">
<div className="w-full max-w-6xl mx-auto flex flex-col items-center">
<p className="text-sm font-medium text-zinc-600 mb-10 uppercase tracking-widest text-center px-6">Recognized by</p>
<div className="w-full relative overflow-hidden flex items-center justify-center marquee-container" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>

<div className="flex animate-marquee w-max opacity-50 hover:opacity-100 transition-opacity duration-500">

<div className="flex items-center gap-16 pr-16">

<img alt="Brand 1" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+1"/>
<img alt="Brand 2" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+2"/>
<img alt="Brand 3" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+3"/>
<img alt="Brand 4" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+4"/>

<img alt="Brand 1" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+1"/>
<img alt="Brand 2" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+2"/>
<img alt="Brand 3" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+3"/>
<img alt="Brand 4" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+4"/>
</div>

<div className="flex items-center gap-16 pr-16">
<img alt="Brand 1" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+1"/>
<img alt="Brand 2" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+2"/>
<img alt="Brand 3" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+3"/>
<img alt="Brand 4" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+4"/>
<img alt="Brand 1" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+1"/>
<img alt="Brand 2" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+2"/>
<img alt="Brand 3" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+3"/>
<img alt="Brand 4" className="h-7 w-auto object-contain" src="https://placehold.co/120x40/000000/a1a1aa?text=Brand+4"/>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 animate-on-scroll" id="projects">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="project-card aspect-video bg-[#ff2a5f] rounded-2xl p-6 flex items-center justify-center relative overflow-hidden group cursor-pointer border border-zinc-800/50 hover:border-zinc-700 transition-colors" data-youtube-url="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
<iconify-icon className="text-white opacity-80 group-hover:scale-110 transition-transform duration-500" height="32" icon="solar:star-linear" width="32"></iconify-icon>
</div>

<div className="project-card aspect-video bg-zinc-900 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden group cursor-pointer border border-zinc-800/50 hover:border-zinc-700 transition-colors" data-youtube-url="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
<div className="absolute inset-0 bg-gradient-to-br from-green-900/40 to-black/80"></div>
<h3 className="text-2xl font-semibold tracking-tight text-green-400 relative z-10 group-hover:scale-105 transition-transform duration-500">grow your<br/>wealth</h3>
</div>

<div className="project-card aspect-video bg-zinc-900 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden group cursor-pointer border border-zinc-800/50 hover:border-zinc-700 transition-colors" data-youtube-url="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-blue-400/20"></div>
<div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-300 to-white blur-xl opacity-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
<iconify-icon className="text-white relative z-10" height="40" icon="solar:global-linear" width="40"></iconify-icon>
</div>

<div className="project-card aspect-video bg-zinc-900 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden group cursor-pointer border border-zinc-800/50 hover:border-zinc-700 transition-colors" data-youtube-url="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
<div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-black/80"></div>
<span className="text-lg font-medium tracking-tight text-white relative z-10 flex items-center gap-2"><iconify-icon className="text-yellow-400" height="20" icon="solar:bolt-linear" width="20"></iconify-icon> dynamic</span>
</div>

<div className="project-card aspect-video bg-white rounded-2xl p-6 flex items-center justify-center relative overflow-hidden group cursor-pointer border border-zinc-200" data-youtube-url="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNlNWU1ZTUiLz48L3N2Zz4=')] opacity-50"></div>
<div className="flex items-center gap-2 relative z-10">
<div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center"><iconify-icon className="text-white" height="16" icon="solar:play-linear" width="16"></iconify-icon></div>
<span className="text-xl font-semibold tracking-tight text-black">studio</span>
</div>
</div>

<div className="project-card aspect-video bg-[#f0f0ff] rounded-2xl p-6 flex items-center justify-center relative overflow-hidden group cursor-pointer border border-zinc-200" data-youtube-url="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1">
<h3 className="text-2xl font-semibold tracking-tight text-indigo-500 group-hover:scale-105 transition-transform duration-500">mosh</h3>
</div>
</div>
</section>

<section className="w-full max-w-4xl mx-auto px-6 py-20 text-center animate-on-scroll">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">Want to see more work?</h2>
<button className="px-6 py-2 rounded-full border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-900 transition-colors mb-16">
            View More
        </button>
<div className="grid grid-cols-3 gap-8 divide-x divide-zinc-800">
<div className="flex flex-col items-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-white flex">
                    +<span className="counter-value" data-target="47">0</span>
</div>
<span className="text-sm font-medium text-zinc-500 mt-2">Selected Works</span>
</div>
<div className="flex flex-col items-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-white flex">
                    +<span className="counter-value" data-target="147">0</span>
</div>
<span className="text-sm font-medium text-zinc-500 mt-2">Satisfied Clients</span>
</div>
<div className="flex flex-col items-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tight text-white flex">
                    +<span className="counter-value" data-target="25">0</span><span className="text-3xl mt-1">M</span>
</div>
<span className="text-sm font-medium text-zinc-500 mt-2">Views</span>
</div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-24">
<div className="text-center mb-16 animate-on-scroll">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Success You Can See</h2>
<p className="text-base text-zinc-400">A glimpse into our most successful projects and transformations.</p>
</div>
<div className="space-y-24">

<div className="flex flex-col md:flex-row items-center gap-12 animate-on-scroll">
<div className="w-full md:w-1/2">
<div className="aspect-video w-full bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden relative group">

<video className="scroll-autoplay-video w-full h-full object-cover" data-src="https://www.w3schools.com/html/mov_bbb.mp4" loop="" muted="" playsinline=""></video>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
<iconify-icon className="text-white" height="20" icon="solar:pulse-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">FanBasis</h3>
</div>
<p className="text-base text-zinc-400 leading-relaxed">
                        Redesigning the fan engagement platform. We created a dynamic visual identity and promotional motion content that increased user retention by 40% in the first quarter.
                    </p>
<div className="flex gap-6 pt-4 border-t border-zinc-800/50">
<div>
<div className="text-xl font-semibold tracking-tight text-white">+8</div>
<div className="text-sm font-medium text-zinc-500">Average open rate increase</div>
</div>
<div>
<div className="text-xl font-semibold tracking-tight text-white">+17</div>
<div className="text-sm font-medium text-zinc-500">Sign-ups from new campaign</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 animate-on-scroll">
<div className="w-full md:w-1/2">
<div className="aspect-video w-full bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden relative group">

<video className="scroll-autoplay-video w-full h-full object-cover" data-src="https://www.w3schools.com/html/mov_bbb.mp4" loop="" muted="" playsinline=""></video>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
<span className="text-white font-semibold tracking-tight text-lg">M</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">MakeUGC</h3>
</div>
<p className="text-base text-zinc-400 leading-relaxed">
                        A community-driven platform for user-generated content creators. We delivered a series of fast-paced, highly engaging social media assets that drove immediate acquisition.
                    </p>
<div className="space-y-3 pt-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">4x increased engagement on videos</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">12 viral assets created in Q1</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">10s videos optimized for TikTok</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 animate-on-scroll">
<div className="w-full md:w-1/2">
<div className="aspect-video w-full bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden relative group">

<video className="scroll-autoplay-video w-full h-full object-cover" data-src="https://www.w3schools.com/html/mov_bbb.mp4" loop="" muted="" playsinline=""></video>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6">
<div className="flex items-center gap-3">
<h3 className="text-2xl font-semibold tracking-tight text-white">White &amp; Co Real Estate</h3>
</div>
<p className="text-base text-zinc-400 leading-relaxed">
                        Premium property tours that feel like cinematic experiences. By elevating the visual standard, we helped reduce average time on market for luxury listings.
                    </p>
<div className="flex flex-wrap gap-2 pt-2">
<span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">Property Tours</span>
<span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">Cinematography</span>
<span className="px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300">Social Ads</span>
</div>
<div className="pt-4 border-t border-zinc-800/50 mt-4">
<div className="text-xl font-semibold tracking-tight text-white">+13</div>
<div className="text-sm font-medium text-zinc-500">Short-form marketing videos</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-3xl mx-auto px-6 py-24 animate-on-scroll" id="request">
<div className="text-center mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-2">Request a Project</h2>
<p className="text-base text-zinc-500">Fill out the form below to get an estimated timeline and quote.</p>
</div>
<form className="space-y-6 bg-zinc-950 p-8 rounded-3xl border border-zinc-800/50 shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 block">Name*</label>
<input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 block">Company Name*</label>
<input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="Acme Inc." type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 block">Email*</label>
<input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 block">Phone Number</label>
<input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-2 relative">
<label className="text-sm font-medium text-zinc-400 block">What's Your Estimated Budget?*</label>
<div className="relative">
<select className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-base text-white appearance-none focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all cursor-pointer">
<option className="text-zinc-600" disabled="" selected="" value="">Select budget range...</option>
<option value="5k-10k">$5k - $10k</option>
<option value="10k-25k">$10k - $25k</option>
<option value="25k+">$25k+</option>
</select>
<iconify-icon className="text-zinc-500 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2 relative">
<label className="text-sm font-medium text-zinc-400 block">What services are you looking for?*</label>
<div className="relative">
<select className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-base text-white appearance-none focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all cursor-pointer">
<option disabled="" selected="" value="">Select services...</option>
<option value="motion">Motion Graphics</option>
<option value="editing">Video Editing</option>
<option value="full">Full Production</option>
</select>
<iconify-icon className="text-zinc-500 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400 block">Project Details*</label>
<textarea className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-base text-white placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all resize-none" placeholder="Tell me a bit about your goals, timelines, and any references you like..." rows="4"></textarea>
</div>
<div className="pt-4 flex justify-center">
<button className="px-8 py-3 bg-white text-black rounded-full font-medium text-base hover:bg-zinc-200 transition-colors w-full md:w-auto" type="submit">
                    Submit Project Request
                </button>
</div>
</form>
</section>

<footer className="w-full max-w-4xl mx-auto px-6 py-24 text-center border-t border-zinc-900 mt-12 animate-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">
            Shoot me a DM, let's<br/>discuss your next project
        </h2>

<div className="flex justify-center gap-6 mb-12">

<a className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 transition-all group" href="https://discord.com/users/1016830391652466778" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" height="24" icon="simple-icons:discord" width="24"></iconify-icon>
</a>

<a className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 transition-all group" href="https://x.com/reso_vfx" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" height="20" icon="simple-icons:x" width="20"></iconify-icon>
</a>

<a className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 transition-all group" href="mailto:Resovfx@gmail.com" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" height="26" icon="solar:letter-linear" width="26"></iconify-icon>
</a>

<a className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 hover:border-zinc-700 transition-all group" href="https://wa.me/message/WQAJCBZOUOTYH1" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors" height="24" icon="simple-icons:whatsapp" width="24"></iconify-icon>
</a>
</div>

<a className="w-max mx-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white rounded-full font-medium text-base hover:bg-zinc-800 transition-all flex items-center gap-2" href="https://cal.com/resovfx/gtkeo-get-to-know-each-other" rel="noopener noreferrer" target="_blank">
            Schedule a Call <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<p className="text-sm text-zinc-600 mt-20">
            © 2024 Reso VFX. All rights reserved.
        </p>
</footer>



    </>
  );
}
