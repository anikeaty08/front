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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Animations with Intersection Observer
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Add active state to skyline opacity if it's the footer
                    if (entry.target.tagName.toLowerCase() === 'svg' && entry.target.hasAttribute('preserveAspectRatio')) {
                        entry.target.style.opacity = '0.15';
                    }
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal, .svg-draw-in').forEach((el) => {
            observer.observe(el);
        });

        // Copy to clipboard functionality
        function copyText(elementId) {
            const text = document.getElementById(elementId).innerText.replace(/\s+/g, '');
            navigator.clipboard.writeText(text).then(() => {
                const toast = document.getElementById('toast');
                toast.classList.add('show');
                setTimeout(() => { toast.classList.remove('show'); }, 3000);
            }).catch(err => { console.error('Failed to copy: ', err); });
        }

        // Cinematic 3D Carousel Logic
        document.addEventListener("DOMContentLoaded", () => {
            const track = document.getElementById('carousel-track');
            const cards = Array.from(document.querySelectorAll('.carousel-3d-card'));
            const btnPrev = document.getElementById('btn-prev-3d');
            const btnNext = document.getElementById('btn-next-3d');
            const progressBars = document.querySelectorAll('#carousel-progress div');
            
            let currentIndex = 0;
            let autoPlayInterval;
            
            // Function to update carousel state
            function updateCarousel(index) {
                // Keep index within bounds
                if (index < 0) index = 0;
                if (index >= cards.length) index = cards.length - 1;
                
                currentIndex = index;
                
                // Update 3D classes
                cards.forEach((card, i) => {
                    card.classList.remove('active', 'prev', 'next', 'far-prev', 'far-next');
                    
                    if (i === currentIndex) {
                        card.classList.add('active');
                    } else if (i === currentIndex - 1) {
                        card.classList.add('prev');
                    } else if (i === currentIndex + 1) {
                        card.classList.add('next');
                    } else if (i < currentIndex - 1) {
                        card.classList.add('far-prev');
                    } else if (i > currentIndex + 1) {
                        card.classList.add('far-next');
                    }
                });
                
                // Update Progress bars
                progressBars.forEach((bar, i) => {
                    if (i === currentIndex) {
                        bar.classList.remove('bg-[#C9A84C]/30', 'w-[20px]');
                        bar.classList.add('bg-[#C9A84C]', 'w-[60px]');
                    } else {
                        bar.classList.remove('bg-[#C9A84C]', 'w-[60px]');
                        bar.classList.add('bg-[#C9A84C]/30', 'w-[20px]');
                    }
                });

                // For mobile: scroll active into view
                if (window.innerWidth < 768) {
                    cards[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }
            }

            // Controls
            if (btnPrev && btnNext) {
                btnPrev.addEventListener('click', () => { resetAutoPlay(); updateCarousel(currentIndex - 1); });
                btnNext.addEventListener('click', () => { resetAutoPlay(); updateCarousel(currentIndex + 1); });
            }

            // Click adjacent to navigate
            cards.forEach((card, i) => {
                card.addEventListener('click', () => {
                    if (window.innerWidth >= 768 && currentIndex !== i) {
                        resetAutoPlay();
                        updateCarousel(i);
                    }
                });
            });

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') { resetAutoPlay(); updateCarousel(currentIndex - 1); }
                else if (e.key === 'ArrowRight') { resetAutoPlay(); updateCarousel(currentIndex + 1); }
            });

            // Auto-advance
            function startAutoPlay() {
                autoPlayInterval = setInterval(() => {
                    if (currentIndex >= cards.length - 1) {
                        updateCarousel(0); // loop
                    } else {
                        updateCarousel(currentIndex + 1);
                    }
                }, 5000);
            }
            function resetAutoPlay() {
                clearInterval(autoPlayInterval);
                startAutoPlay();
            }
            
            // Pause on hover
            if (track) {
                track.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
                track.addEventListener('mouseleave', startAutoPlay);
            }

            // Mobile scroll sync to progress dots
            if (track) {
                track.addEventListener('scroll', () => {
                    if (window.innerWidth < 768) {
                        const scrollLeft = track.scrollLeft;
                        const cardWidth = cards[0].offsetWidth;
                        const newIndex = Math.round(scrollLeft / cardWidth);
                        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
                            currentIndex = newIndex;
                            updateCarousel(currentIndex);
                        }
                    }
                }, { passive: true });
            }

            // Initialize
            updateCarousel(0);
            startAutoPlay();
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
      

<div className="fixed inset-0 z-50 film-grain pointer-events-none"></div>

<header className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-black py-20">
<div className="absolute inset-0 w-full h-full">
<div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#4a0611] to-[#1A1A1A] scale-105 transition-transform duration-[20000ms] ease-out hover:scale-110"></div>
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#960c23]/40 via-transparent to-transparent opacity-80 mix-blend-screen"></div>
<div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[#C9A84C]/20 via-transparent to-transparent opacity-60 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-black/40"></div>
</div>
<div className="relative z-10 flex flex-col items-center justify-center text-center px-6 w-full flex-grow">

<svg className="w-[60px] h-[60px] text-[#C9A84C] mb-8 hero-elem animate-[fade-in_0.8s_ease-out_0s_forwards]" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="45"></circle>
<circle cx="50" cy="50" r="35"></circle>
<path d="M50 5 L50 15 M50 85 L50 95 M5 50 L15 50 M85 50 L95 50 M18 18 L25 25 M75 75 L82 82 M18 82 L25 75 M75 25 L82 18"></path>
</svg>
<p className="uppercase text-[11px] font-light text-[#F5EFE0] tracking-[0.3em] mb-12 opacity-70 hero-elem animate-[fade-in_0.8s_ease-out_0s_forwards]">The Wedding Of</p>
<div className="relative flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[clamp(72px,10vw,140px)] font-serif font-light tracking-[0.08em] [text-shadow:0_2px_40px_rgba(150,12,35,0.3)] text-white leading-none z-10 w-full">
<span className="inline-block hero-elem animate-[slide-in-left_0.8s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">Benjamin</span>
<span className="inline-block text-[0.6em] text-[#C9A84C] italic align-[-0.1em] hero-elem animate-[scale-up-fade_0.8s_cubic-bezier(0.16,1,0.3,1)_0.7s_forwards]">&amp;</span>
<span className="inline-block hero-elem animate-[slide-in-right_0.8s_cubic-bezier(0.16,1,0.3,1)_0.7s_forwards]">Angelin</span>

<svg className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] max-w-[600px] h-[40px] pointer-events-none" fill="none" viewbox="0 0 400 30">
<path className="animate-[draw-path_1.2s_ease-in-out_1s_forwards]" d="M10,20 Q200,-5 390,25" stroke="#C9A84C" stroke-dasharray="400" stroke-dashoffset="400" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<p className="text-[#FAF7F2] text-xs uppercase tracking-[0.3em] mt-20 hero-elem animate-[fade-in_0.8s_ease-out_1.3s_forwards]">Sunday · 31 May 2026</p>
</div>
<div className="flex flex-col w-full z-10 pt-16 px-6 relative items-center hero-elem animate-[fade-in-up_0.8s_ease-out_1.6s_forwards]">
<p className="text-[#FAF7F2]/80 text-sm mb-2 font-light italic font-serif">Dear,</p>
<p className="text-2xl font-serif tracking-tight mb-10 font-normal text-white">Guest Name</p>
<a className="group relative inline-flex items-center justify-center gap-4 px-8 py-4 border border-[#960c23] text-[#FAF7F2] rounded-full overflow-hidden transition-all duration-700 hover:bg-[#960c23]" href="#couple">
<span className="relative z-10 text-xs tracking-[0.2em] uppercase font-light">Open Invitation</span>
<iconify-icon className="relative z-10 text-lg transition-transform duration-500 group-hover:translate-y-1" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</header>
<main>

<div className="w-full bg-[#F5EFE0] py-8 flex justify-center border-b border-[#C9A84C]/20">
<svg className="w-64 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 200 20">
<line x1="0" x2="200" y1="10" y2="10"></line>
<polygon points="100,2 108,10 100,18 92,10"></polygon>
<polygon points="70,5 75,10 70,15 65,10"></polygon>
<polygon points="130,5 135,10 130,15 125,10"></polygon>
<polygon points="40,6 44,10 40,14 36,10"></polygon>
<polygon points="160,6 164,10 160,14 156,10"></polygon>
</svg>
</div>

<section className="py-32 bg-[#F5EFE0] relative overflow-hidden" id="couple">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-8 lg:gap-24 relative">
<div className="flex flex-col items-center text-center scroll-reveal scroll-slide-left">
<div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full border border-[#C9A84C] p-2">
<div className="w-full h-full rounded-full border-[0.5px] border-[#C9A84C]/50 p-1">
<div className="w-full h-full rounded-full overflow-hidden relative group">
<div className="w-full h-full bg-gradient-to-tr from-[#1A1A1A] via-[#2a2a2a] to-[#4a0611] group-hover:scale-105 transition-transform duration-1000"></div>
</div>
</div>
</div>
<h2 className="font-serif text-4xl tracking-tight text-[#1A1A1A] mb-2 font-normal">Benjamin</h2>
<p className="text-[#960c23] text-xs uppercase tracking-[0.2em] font-light">The Groom</p>
</div>
<div className="hidden md:flex flex-col items-center justify-center scroll-reveal scroll-scale-up" style={{transitionDelay: '150ms'}}>
<span className="font-serif text-7xl italic text-[#C9A84C] font-light">&amp;</span>
</div>
<div className="flex flex-col items-center text-center scroll-reveal scroll-slide-right" style={{transitionDelay: '300ms'}}>
<div className="relative w-64 h-64 md:w-80 md:h-80 mb-8 rounded-full border border-[#C9A84C] p-2">
<div className="w-full h-full rounded-full border-[0.5px] border-[#C9A84C]/50 p-1">
<div className="w-full h-full rounded-full overflow-hidden relative group">
<div className="w-full h-full bg-gradient-to-bl from-[#1A1A1A] via-[#2a2a2a] to-[#4a0611] group-hover:scale-105 transition-transform duration-1000"></div>
</div>
</div>
</div>
<h2 className="font-serif text-4xl tracking-tight text-[#1A1A1A] mb-2 font-normal">Angelin</h2>
<p className="text-[#960c23] text-xs uppercase tracking-[0.2em] font-light">The Bride</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#FAF7F2] relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 scroll-reveal scroll-slide-up flex flex-col items-center">

<svg className="w-[40px] h-[40px] text-[#C9A84C] mb-6" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="45"></circle><circle cx="50" cy="50" r="35"></circle>
<path d="M50 5 L50 15 M50 85 L50 95 M5 50 L15 50 M85 50 L95 50 M18 18 L25 25 M75 75 L82 82 M18 82 L25 75 M75 25 L82 18"></path>
</svg>
<h2 className="font-serif text-5xl tracking-tight text-[#960c23] italic font-normal mb-6">Our Journey</h2>
<p className="text-[#1A1A1A] text-sm font-light max-w-lg mx-auto leading-relaxed">Two paths destined to cross, creating a story written in the stars and grounded in profound love.</p>
</div>

<div className="relative w-full mb-12">

<button aria-label="Previous Slide" className="hidden md:flex absolute top-[calc(50%-1.25rem)] left-0 w-10 h-10 rounded-full border border-[#960c23] text-[#960c23] items-center justify-center hover:bg-[#960c23] hover:text-[#F5EFE0] transition-colors duration-300 z-20" id="btn-prev-3d">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button aria-label="Next Slide" className="hidden md:flex absolute top-[calc(50%-1.25rem)] right-0 w-10 h-10 rounded-full border border-[#960c23] text-[#960c23] items-center justify-center hover:bg-[#960c23] hover:text-[#F5EFE0] transition-colors duration-300 z-20" id="btn-next-3d">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<div className="carousel-3d-wrapper flex md:flex overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar gap-6 md:gap-0 px-6 md:px-0" id="carousel-track">
<div className="carousel-3d-track w-full flex">

<div className="carousel-3d-card active flex-shrink-0 w-[85vw] snap-center bg-[#F5EFE0] border border-[#C9A84C]/40 flex flex-col" data-index="0">
<div className="block visible h-[200px] w-full relative bg-gradient-to-br from-[#3d0510] to-[#960c23] rounded-t-[8px]">
<div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/15 via-transparent to-transparent opacity-60 rounded-t-[8px]"></div>
</div>
<div className="h-auto p-6 flex flex-col items-center text-center justify-center flex-grow bg-[#F5EFE0] rounded-b-[8px]">
<p className="text-[#C9A84C] text-[10px] tracking-[0.15em] uppercase mb-3 font-light">December 2021</p>
<h4 className="font-serif text-[28px] tracking-tight text-[#960c23] italic font-normal mb-3">First Meeting</h4>
<svg className="w-16 mb-4 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 4">
<line x1="0" x2="45" y1="2" y2="2"></line><line x1="55" x2="100" y1="2" y2="2"></line><circle cx="50" cy="2" fill="#C9A84C" r="2"></circle>
</svg>
<p className="text-[13px] text-[#1A1A1A] font-light leading-[1.8]">A serendipitous encounter where a brief conversation felt like reuniting with an old friend.</p>
</div>
</div>

<div className="carousel-3d-card next flex-shrink-0 w-[85vw] snap-center bg-[#F5EFE0] border border-[#C9A84C]/40 flex flex-col" data-index="1">
<div className="block visible h-[200px] w-full relative bg-gradient-to-br from-[#960c23] to-[#6b1020] rounded-t-[8px]">
<div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/15 via-transparent to-transparent opacity-60 rounded-t-[8px]"></div>
</div>
<div className="h-auto p-6 flex flex-col items-center text-center justify-center flex-grow bg-[#F5EFE0] rounded-b-[8px]">
<p className="text-[#C9A84C] text-[10px] tracking-[0.15em] uppercase mb-3 font-light">March 2022</p>
<h4 className="font-serif text-[28px] tracking-tight text-[#960c23] italic font-normal mb-3">First Date</h4>
<svg className="w-16 mb-4 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 4">
<line x1="0" x2="45" y1="2" y2="2"></line><line x1="55" x2="100" y1="2" y2="2"></line><circle cx="50" cy="2" fill="#C9A84C" r="2"></circle>
</svg>
<p className="text-[13px] text-[#1A1A1A] font-light leading-[1.8]">A quiet dinner that turned into hours of conversation neither of us wanted to end.</p>
</div>
</div>

<div className="carousel-3d-card far-next flex-shrink-0 w-[85vw] snap-center bg-[#F5EFE0] border border-[#C9A84C]/40 flex flex-col" data-index="2">
<div className="block visible h-[200px] w-full relative bg-gradient-to-br from-[#3d0510] to-[#960c23] rounded-t-[8px]">
<div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/15 via-transparent to-transparent opacity-60 rounded-t-[8px]"></div>
</div>
<div className="h-auto p-6 flex flex-col items-center text-center justify-center flex-grow bg-[#F5EFE0] rounded-b-[8px]">
<p className="text-[#C9A84C] text-[10px] tracking-[0.15em] uppercase mb-3 font-light">June 2023</p>
<h4 className="font-serif text-[28px] tracking-tight text-[#960c23] italic font-normal mb-3">The Proposal</h4>
<svg className="w-16 mb-4 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 4">
<line x1="0" x2="45" y1="2" y2="2"></line><line x1="55" x2="100" y1="2" y2="2"></line><circle cx="50" cy="2" fill="#C9A84C" r="2"></circle>
</svg>
<p className="text-[13px] text-[#1A1A1A] font-light leading-[1.8]">Under the stars, with shaking hands and a full heart, the question was asked.</p>
</div>
</div>

<div className="carousel-3d-card far-next flex-shrink-0 w-[85vw] snap-center bg-[#F5EFE0] border border-[#C9A84C]/40 flex flex-col" data-index="3">
<div className="block visible h-[200px] w-full relative bg-gradient-to-br from-[#960c23] to-[#6b1020] rounded-t-[8px]">
<div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/15 via-transparent to-transparent opacity-60 rounded-t-[8px]"></div>
</div>
<div className="h-auto p-6 flex flex-col items-center text-center justify-center flex-grow bg-[#F5EFE0] rounded-b-[8px]">
<p className="text-[#C9A84C] text-[10px] tracking-[0.15em] uppercase mb-3 font-light">September 2023</p>
<h4 className="font-serif text-[28px] tracking-tight text-[#960c23] italic font-normal mb-3">Our Engagement</h4>
<svg className="w-16 mb-4 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 4">
<line x1="0" x2="45" y1="2" y2="2"></line><line x1="55" x2="100" y1="2" y2="2"></line><circle cx="50" cy="2" fill="#C9A84C" r="2"></circle>
</svg>
<p className="text-[13px] text-[#1A1A1A] font-light leading-[1.8]">We said yes to forever, surrounded by the people we love most.</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-[32px] relative z-20" id="carousel-progress">
<div className="h-1 bg-[#C9A84C] transition-all duration-300 w-[60px]" data-target="0"></div>
<div className="h-1 bg-[#C9A84C]/30 transition-all duration-300 w-[20px]" data-target="1"></div>
<div className="h-1 bg-[#C9A84C]/30 transition-all duration-300 w-[20px]" data-target="2"></div>
<div className="h-1 bg-[#C9A84C]/30 transition-all duration-300 w-[20px]" data-target="3"></div>
</div>
</div>
</section>

<div className="w-full bg-[#FAF7F2] py-8 flex justify-center z-20 relative border-b border-[#C9A84C]/20">
<svg className="w-64 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 200 20">
<line x1="0" x2="200" y1="10" y2="10"></line>
<polygon points="100,2 108,10 100,18 92,10"></polygon>
<polygon points="70,5 75,10 70,15 65,10"></polygon>
<polygon points="130,5 135,10 130,15 125,10"></polygon>
<polygon points="40,6 44,10 40,14 36,10"></polygon>
<polygon points="160,6 164,10 160,14 156,10"></polygon>
</svg>
</div>

<section className="py-32 bg-batak-grid" style={{minHeight: '600px', display: 'block', visibility: 'visible', zIndex: '1', position: 'relative', backgroundColor: '#960c23 !important'}}>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<h2 className="font-serif text-[48px] text-[#F5EFE0] italic font-normal text-center mb-[60px]">The Celebration</h2>
<div style={{display: 'flex', flexDirection: 'row', gap: '32px', justifyContent: 'center', flexWrap: 'wrap'}}>

<div className="text-center relative flex flex-col justify-center items-center" style={{minWidth: '280px', maxWidth: '480px', minHeight: '400px', padding: '48px 40px', visibility: 'visible', opacity: '1', background: '#F5EFE0', color: '#1A1A1A', border: '1px solid #C9A84C', borderRadius: '4px'}}>

<svg className="w-16 h-16 text-[#C9A84C] absolute top-2 left-2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path>
<path d="M 10,26 L 10,10 L 26,10"></path>
<circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<svg className="w-16 h-16 text-[#C9A84C] absolute top-2 right-2 rotate-90 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<svg className="w-16 h-16 text-[#C9A84C] absolute bottom-2 left-2 -rotate-90 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<svg className="w-16 h-16 text-[#C9A84C] absolute bottom-2 right-2 rotate-180 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<h3 className="font-serif text-[36px] tracking-tight text-[#960c23] mb-8 italic font-normal mt-4">Holy Matrimony</h3>
<div className="flex flex-col items-center space-y-6 text-[#1A1A1A]">
<div className="flex flex-col items-center">
<iconify-icon className="text-2xl text-[#C9A84C] mb-2" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-light uppercase tracking-[0.1em]">10:00 AM</p>
</div>
<div className="flex flex-col items-center mb-4">
<iconify-icon className="text-2xl text-[#C9A84C] mb-2" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-light uppercase tracking-[0.1em] mb-1">CATHEDRAL PARISH</p>
<p className="text-xs text-[#1A1A1A]/70 font-light">Central District, Jakarta</p>
</div>
</div>
</div>

<div className="text-center relative flex flex-col justify-center items-center" style={{minWidth: '280px', maxWidth: '480px', minHeight: '400px', padding: '48px 40px', visibility: 'visible', opacity: '1', background: '#F5EFE0', color: '#1A1A1A', border: '1px solid #C9A84C', borderRadius: '4px'}}>

<svg className="w-16 h-16 text-[#C9A84C] absolute top-2 left-2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<svg className="w-16 h-16 text-[#C9A84C] absolute top-2 right-2 rotate-90 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<svg className="w-16 h-16 text-[#C9A84C] absolute bottom-2 left-2 -rotate-90 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<svg className="w-16 h-16 text-[#C9A84C] absolute bottom-2 right-2 rotate-180 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<h3 className="font-serif text-[36px] tracking-tight text-[#960c23] mb-8 italic font-normal mt-4">Holy Reception</h3>
<div className="flex flex-col items-center space-y-6 text-[#1A1A1A]">
<div className="flex flex-col items-center">
<iconify-icon className="text-2xl text-[#C9A84C] mb-2" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-light uppercase tracking-[0.1em]">18:00 PM</p>
</div>
<div className="flex flex-col items-center mb-4">
<iconify-icon className="text-2xl text-[#C9A84C] mb-2" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-sm font-light uppercase tracking-[0.1em] mb-1">THE GRAND BALLROOM</p>
<p className="text-xs text-[#1A1A1A]/70 font-light">Luxury Avenue, Jakarta</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-[#FAF7F2] pt-[100px] flex justify-center border-t border-[#C9A84C]/20">
<svg className="w-64 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 200 20">
<path d="M0,10 C30,-5 70,25 100,10 C130,-5 170,25 200,10"></path>
<circle cx="50" cy="10" fill="currentColor" r="1.5"></circle>
<circle cx="150" cy="10" fill="currentColor" r="1.5"></circle>
</svg>
</div>

<section className="pb-[100px] bg-[#FAF7F2] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 scroll-reveal scroll-slide-up">
<h2 className="font-serif text-5xl tracking-tight text-[#960c23] italic font-normal">Moments</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 auto-rows-[250px] md:auto-rows-[400px]">
<div className="col-span-2 row-span-2 overflow-hidden group scroll-reveal scroll-pop-in relative" style={{transitionDelay: '0ms'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] via-[#3a0813] to-[#4a0611] transition-transform duration-[2000ms] group-hover:scale-105"></div>
</div>
<div className="overflow-hidden group scroll-reveal scroll-pop-in relative" style={{transitionDelay: '80ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-[#2a2a2a] via-[#4a0611] to-[#1A1A1A] transition-transform duration-[2000ms] group-hover:scale-105"></div>
</div>
<div className="overflow-hidden group scroll-reveal scroll-pop-in relative" style={{transitionDelay: '160ms'}}>
<div className="absolute inset-0 bg-gradient-to-tl from-[#1A1A1A] via-[#4a0611] to-[#2a2a2a] transition-transform duration-[2000ms] group-hover:scale-105"></div>
</div>
<div className="overflow-hidden group scroll-reveal scroll-pop-in relative" style={{transitionDelay: '240ms'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-[#4a0611] via-[#1A1A1A] to-[#3a0813] transition-transform duration-[2000ms] group-hover:scale-105"></div>
</div>
<div className="col-span-2 overflow-hidden group scroll-reveal scroll-pop-in relative" style={{transitionDelay: '320ms'}}>
<div className="absolute inset-0 bg-gradient-to-bl from-[#1A1A1A] via-[#3a0813] to-[#4a0611] transition-transform duration-[2000ms] group-hover:scale-105"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#960c23] text-[#F5EFE0] relative flex flex-col items-center">
<div className="max-w-2xl mx-auto px-6 w-full text-center relative z-10">

<div className="flex justify-center scroll-reveal scroll-slide-up">
<svg className="w-[40px] h-[40px] text-[#C9A84C] mb-8" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="45"></circle><circle cx="50" cy="50" r="35"></circle>
<path d="M50 5 L50 15 M50 85 L50 95 M5 50 L15 50 M85 50 L95 50 M18 18 L25 25 M75 75 L82 82 M18 82 L25 75 M75 25 L82 18"></path>
</svg>
</div>
<h2 className="font-serif text-5xl tracking-tight mb-16 italic font-normal text-white scroll-reveal scroll-slide-up">Will you be joining us?</h2>
<div className="relative p-10 md:p-14 border border-[#C9A84C]/30 bg-[#960c23] scroll-reveal scroll-slide-up svg-draw-in">

<svg className="w-16 h-16 text-[#C9A84C] absolute top-2 left-2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<svg className="w-16 h-16 text-[#C9A84C] absolute top-2 right-2 rotate-90 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<svg className="w-16 h-16 text-[#C9A84C] absolute bottom-2 left-2 -rotate-90 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<svg className="w-16 h-16 text-[#C9A84C] absolute bottom-2 right-2 rotate-180 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,32 L 4,4 L 32,4"></path><path d="M 10,26 L 10,10 L 26,10"></path><circle cx="10" cy="10" fill="currentColor" r="2"></circle>
</svg>
<form className="space-y-10 text-left">
<div className="space-y-2 scroll-reveal scroll-slide-up" style={{transitionDelay: '100ms'}}>
<input className="w-full bg-transparent border-b border-[#C9A84C]/40 py-3 text-[#F5EFE0] placeholder-[#F5EFE0]/40 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm font-light rounded-none" placeholder="Full Name" type="text"/>
</div>
<div className="space-y-2 scroll-reveal scroll-slide-up" style={{transitionDelay: '200ms'}}>
<input className="w-full bg-transparent border-b border-[#C9A84C]/40 py-3 text-[#F5EFE0] placeholder-[#F5EFE0]/40 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm font-light rounded-none" placeholder="Email Address" type="email"/>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 pt-4 scroll-reveal scroll-slide-up" style={{transitionDelay: '300ms'}}>
<label className="relative flex items-center gap-3 cursor-pointer group">
<input checked="" className="peer sr-only" name="attendance" type="radio"/>
<div className="w-4 h-4 rounded-full border border-[#C9A84C] flex items-center justify-center peer-checked:bg-[#C9A84C] transition-all"></div>
<span className="text-sm font-light tracking-[0.1em] uppercase">Joyfully Accept</span>
</label>
<label className="relative flex items-center gap-3 cursor-pointer group">
<input className="peer sr-only" name="attendance" type="radio"/>
<div className="w-4 h-4 rounded-full border border-[#C9A84C]/50 flex items-center justify-center peer-checked:border-[#C9A84C] peer-checked:bg-[#C9A84C] transition-all group-hover:border-[#C9A84C]"></div>
<span className="text-sm font-light tracking-[0.1em] uppercase opacity-60 peer-checked:opacity-100">Regretfully Decline</span>
</label>
</div>
<div className="space-y-2 pt-4 scroll-reveal scroll-slide-up" style={{transitionDelay: '400ms'}}>
<textarea className="w-full bg-transparent border-b border-[#C9A84C]/40 py-3 text-[#F5EFE0] placeholder-[#F5EFE0]/40 focus:outline-none focus:border-[#C9A84C] transition-colors text-sm font-light resize-none rounded-none" placeholder="Message (Optional)" rows="2"></textarea>
</div>
<div className="pt-8 flex justify-center scroll-reveal scroll-slide-up" style={{transitionDelay: '500ms'}}>
<button className="px-12 py-4 bg-[#960c23] border border-[#C9A84C] text-[#C9A84C] text-xs uppercase tracking-[0.2em] hover:bg-[#C9A84C] hover:text-[#960c23] transition-colors duration-500 font-light rounded-none" type="button">
                                Send Reply
                            </button>
</div>
</form>
</div>
</div>
</section>

<div className="w-full bg-[#F5EFE0] pt-[100px] flex justify-center">
<svg className="w-64 text-[#C9A84C]" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 200 20">
<path d="M0,10 C30,-5 70,25 100,10 C130,-5 170,25 200,10"></path>
<circle cx="50" cy="10" fill="currentColor" r="1.5"></circle>
<circle cx="150" cy="10" fill="currentColor" r="1.5"></circle>
</svg>
</div>

<section className="pb-[100px] bg-[#F5EFE0] relative">
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="scroll-reveal scroll-slide-up mt-12">
<h2 className="font-serif text-5xl tracking-tight text-[#960c23] italic font-normal mb-4">Wedding Gift</h2>
<p className="text-[#1A1A1A] text-sm font-light italic font-serif">Your presence is our greatest gift. But if you wish to bless us further:</p>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-16 relative">

<div className="flex-1 w-full max-w-sm flex flex-col items-center bg-[#FAF7F2] p-10 border border-[#C9A84C]/30 relative scroll-reveal scroll-flip-in svg-draw-in">

<svg className="w-12 h-12 text-[#C9A84C] absolute top-2 left-2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,24 L 4,4 L 24,4"></path><path d="M 8,20 L 8,8 L 20,8"></path>
</svg>
<svg className="w-12 h-12 text-[#C9A84C] absolute top-2 right-2 rotate-90 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,24 L 4,4 L 24,4"></path><path d="M 8,20 L 8,8 L 20,8"></path>
</svg>
<svg className="w-12 h-12 text-[#C9A84C] absolute bottom-2 left-2 -rotate-90 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,24 L 4,4 L 24,4"></path><path d="M 8,20 L 8,8 L 20,8"></path>
</svg>
<svg className="w-12 h-12 text-[#C9A84C] absolute bottom-2 right-2 rotate-180 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,24 L 4,4 L 24,4"></path><path d="M 8,20 L 8,8 L 20,8"></path>
</svg>
<h3 className="text-sm uppercase tracking-[0.2em] font-light mb-8 text-[#1A1A1A]">Bank Transfer</h3>
<div className="space-y-8 w-full">
<div>
<p className="text-xs uppercase tracking-[0.1em] text-[#960c23] mb-1 font-normal">BCA</p>
<p className="font-serif text-2xl tracking-widest text-[#1A1A1A] mb-1" id="bca-account">123 456 7890</p>
<p className="text-xs font-light text-[#1A1A1A]/70 mb-3 uppercase">Benjamin Wijaya</p>
<button className="text-[0.65rem] uppercase tracking-[0.1em] text-[#C9A84C] border-b border-[#C9A84C] pb-1 hover:text-[#960c23] hover:border-[#960c23] transition-colors" onclick="copyText('bca-account')">Tap to Copy</button>
</div>
<div>
<p className="text-xs uppercase tracking-[0.1em] text-[#960c23] mb-1 font-normal">Mandiri</p>
<p className="font-serif text-2xl tracking-widest text-[#1A1A1A] mb-1" id="mandiri-account">098 765 4321</p>
<p className="text-xs font-light text-[#1A1A1A]/70 mb-3 uppercase">Angelin Manurung</p>
<button className="text-[0.65rem] uppercase tracking-[0.1em] text-[#C9A84C] border-b border-[#C9A84C] pb-1 hover:text-[#960c23] hover:border-[#960c23] transition-colors" onclick="copyText('mandiri-account')">Tap to Copy</button>
</div>
</div>
</div>

<div className="flex-1 w-full max-w-sm flex flex-col items-center bg-[#FAF7F2] p-10 border border-[#C9A84C]/30 relative scroll-reveal scroll-flip-in svg-draw-in" style={{transitionDelay: '200ms'}}>

<svg className="w-12 h-12 text-[#C9A84C] absolute top-2 left-2 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,24 L 4,4 L 24,4"></path><path d="M 8,20 L 8,8 L 20,8"></path>
</svg>
<svg className="w-12 h-12 text-[#C9A84C] absolute top-2 right-2 rotate-90 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,24 L 4,4 L 24,4"></path><path d="M 8,20 L 8,8 L 20,8"></path>
</svg>
<svg className="w-12 h-12 text-[#C9A84C] absolute bottom-2 left-2 -rotate-90 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,24 L 4,4 L 24,4"></path><path d="M 8,20 L 8,8 L 20,8"></path>
</svg>
<svg className="w-12 h-12 text-[#C9A84C] absolute bottom-2 right-2 rotate-180 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1.2" viewbox="0 0 64 64">
<path d="M 4,24 L 4,4 L 24,4"></path><path d="M 8,20 L 8,8 L 20,8"></path>
</svg>
<h3 className="text-sm uppercase tracking-[0.2em] font-light mb-8 text-[#1A1A1A]">Things We'd Love</h3>
<ul className="space-y-4 text-sm font-light text-[#1A1A1A]/80 mb-12 flex-grow flex flex-col justify-center">
<li>Kitchen appliances</li>
<li>Home décor &amp; linen</li>
<li>Travel vouchers</li>
<li>Experience gifts</li>
</ul>
<a className="px-8 py-3 border border-[#960c23] text-[#960c23] text-[0.65rem] uppercase tracking-[0.2em] hover:bg-[#960c23] hover:text-[#F5EFE0] transition-colors duration-500 font-light rounded-none mt-auto" href="#">
                            View Registry
                        </a>
</div>
</div>
<div className="mt-20 scroll-reveal scroll-slide-up" style={{transitionDelay: '300ms'}}>
<p className="text-xs font-light text-[#1A1A1A]/60 italic font-serif">
                        Kindly transfer gifts before or on the wedding day.<br/>
                        For inquiries, contact +62 812 3456 7890
                    </p>
</div>
</div>
</section>

<footer className="pt-16 pb-8 bg-[#1A1A1A] text-center flex flex-col items-center relative overflow-hidden">
<h2 className="font-serif text-3xl tracking-tight mb-6 font-normal text-white relative z-10">Benjamin &amp; Angelin</h2>
<p className="text-[#C9A84C] text-[0.65rem] uppercase tracking-[0.3em] font-light mb-6 relative z-10">31 May 2026</p>
<svg className="w-16 text-[#C9A84C] mb-6 relative z-10" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 4">
<line x1="0" x2="100" y1="2" y2="2"></line>
<circle cx="50" cy="2" fill="#C9A84C" r="1.5"></circle>
</svg>
<p className="text-xs italic font-serif font-light text-white/40 mb-12 relative z-10">With love &amp; gratitude</p>

<svg className="w-full h-32 absolute bottom-0 left-0 text-[#F5EFE0] opacity-15 pointer-events-none scroll-reveal" fill="currentColor" preserveaspectratio="xMidYMax slice" style={{transition: 'opacity 1.5s ease-out', opacity: '0'}} viewbox="0 0 1000 100">

<path d="M495,100 L495,80 L498,80 L498,30 L500,20 L502,30 L502,80 L505,80 L505,100 Z"></path>

<rect height="40" width="40" x="100" y="60"></rect>
<rect height="50" width="35" x="150" y="50"></rect>
<rect height="30" width="50" x="200" y="70"></rect>
<rect height="55" width="25" x="270" y="45"></rect>
<rect height="20" width="60" x="310" y="80"></rect>
<rect height="45" width="45" x="390" y="55"></rect>
<rect height="15" width="30" x="450" y="85"></rect>
<rect height="35" width="30" x="530" y="65"></rect>
<rect height="60" width="45" x="580" y="40"></rect>
<rect height="25" width="50" x="640" y="75"></rect>
<rect height="50" width="35" x="710" y="50"></rect>
<rect height="20" width="60" x="760" y="80"></rect>
<rect height="45" width="40" x="840" y="55"></rect>
<rect height="30" width="30" x="900" y="70"></rect>
</svg>
</footer>
</main>

<div className="fixed bottom-8 left-1/2 z-50 bg-[#960c23] text-[#F5EFE0] px-6 py-3 text-xs tracking-widest uppercase shadow-2xl border border-[#C9A84C]/30 font-light" id="toast">
        Copied to clipboard
    </div>



    </>
  );
}
