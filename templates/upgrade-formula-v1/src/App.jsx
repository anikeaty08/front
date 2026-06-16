import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      (function() {
        const wrapper = document.currentScript.parentElement;
        const track = wrapper.querySelector('#track');
        const prevBtn = wrapper.querySelector('#prev-btn');
        const nextBtn = wrapper.querySelector('#next-btn');
        const dots = wrapper.querySelectorAll('#track-dots button');
        const slides = track.querySelectorAll('.snap-start');
        
        const gap = 24; 
        const lastIndex = slides.length - 1;
        
        // State Management
        const updateState = () => {
          if (!track || slides.length === 0) return;
          
          // Calculate active index
          // We use the center of the viewport to determine which slide is "active" 
          // to handle the transition logic robustly.
          const trackRect = track.getBoundingClientRect();
          const scrollLeft = track.scrollLeft;
          const slideWidth = slides[0].offsetWidth;
          
          // Current precise index (float)
          // Adjust logic: Find closest slide to left edge + padding offset
          let activeIndex = 0;
          let minDiff = Infinity;
          
          // Account for the current padding in calculation
          const currentPaddingLeft = parseFloat(window.getComputedStyle(track).paddingLeft) || 0;

          slides.forEach((slide, index) => {
            // Distance from left edge of track content area
            const slideLeft = slide.offsetLeft;
            const diff = Math.abs(slideLeft - (scrollLeft + currentPaddingLeft));
            
            if (diff < minDiff) {
              minDiff = diff;
              activeIndex = index;
            }
          });

          // --- APPLY STATE RULES ---
          
          // 1. Arrow Visibility
          if (activeIndex === 0) {
            prevBtn.classList.add('hidden-btn');
            nextBtn.classList.remove('hidden-btn');
          } else if (activeIndex === lastIndex) {
            prevBtn.classList.remove('hidden-btn');
            nextBtn.classList.add('hidden-btn');
          } else {
            prevBtn.classList.remove('hidden-btn');
            nextBtn.classList.remove('hidden-btn');
          }

          // 2. Viewport Padding (Dynamic)
          // Using style directly to enforce pixel-perfect rules
          if (activeIndex === 0) {
            track.style.paddingLeft = '32px';
            track.style.paddingRight = '0px';
          } else if (activeIndex === lastIndex) {
            track.style.paddingLeft = '0px';
            track.style.paddingRight = '32px';
          } else {
            track.style.paddingLeft = '0px';
            track.style.paddingRight = '0px';
          }

          // 3. Dots
          dots.forEach((dot, idx) => {
            if (idx === activeIndex) {
              dot.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-[#171a20]';
            } else {
              dot.className = 'w-2 h-2 rounded-full transition-all duration-300 bg-gray-300 hover:bg-gray-400';
            }
          });
        };

        // Vertical Positioning
        const updateArrowPosition = () => {
          const firstImage = wrapper.querySelector('.slide-image-container');
          if (firstImage) {
            const height = firstImage.offsetHeight;
            const topPos = height / 2;
            prevBtn.style.top = `${topPos}px`;
            nextBtn.style.top = `${topPos}px`;
          }
        };

        // Navigation Actions
        const getActiveIndex = () => {
           // Simple retrieval for click handlers based on current dots
           let index = 0;
           dots.forEach((dot, i) => {
             if (dot.classList.contains('bg-[#171a20]')) index = i;
           });
           return index;
        };

        const slideTo = (index) => {
          if (index < 0) index = 0;
          if (index > lastIndex) index = lastIndex;
          
          const targetSlide = slides[index];
          if (!targetSlide) return;

          // Determine target padding based on destination index
          let targetPaddingLeft = 0;
          if (index === 0) targetPaddingLeft = 32;
          
          // Scroll to position: Slide Offset - Target Padding
          // This ensures the slide snaps exactly where the padding starts (or edge if 0)
          const scrollPos = targetSlide.offsetLeft - targetPaddingLeft;
          
          track.scrollTo({
            left: scrollPos,
            behavior: 'smooth'
          });
          
          // We manually call updateState shortly after start to ensure UI responsiveness,
          // though the scroll listener will handle the bulk.
          // Force update padding immediately to avoid layout jump at end of scroll?
          // No, better to let scroll listener handle it naturally or update styles pre-emptively.
          // Updating styles pre-emptively might cause jump. Let's rely on scroll.
        };

        // Event Listeners
        prevBtn.addEventListener('click', () => {
          const current = getActiveIndex();
          slideTo(current - 1);
        });

        nextBtn.addEventListener('click', () => {
          const current = getActiveIndex();
          slideTo(current + 1);
        });
        
        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => slideTo(index));
        });

        // Initialize
        if (track) {
          // Debounced scroll listener for performance
          let timeout;
          track.addEventListener('scroll', () => {
             window.requestAnimationFrame(updateState);
          });
          
          const observer = new ResizeObserver(() => {
            updateArrowPosition();
            updateState();
          });
          observer.observe(track);
          
          // Initial Call
          setTimeout(() => {
            updateArrowPosition();
            updateState();
          }, 50);
        }
      })();
    


      document.addEventListener('DOMContentLoaded', () => {
          const container = document.getElementById('slides-container');
          const prevBtn = document.getElementById('prev-btn');
          const nextBtn = document.getElementById('next-btn');
          const dots = document.querySelectorAll('#pagination-dots button');
          const slides = container.querySelectorAll('.snap-start');

          const scrollAmount = () => {
               return container.offsetWidth >= 1200 ? (container.offsetWidth / 2) : container.offsetWidth;
          };

          if(prevBtn && nextBtn) {
              prevBtn.addEventListener('click', () => {
                  container.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
              });
              nextBtn.addEventListener('click', () => {
                  container.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
              });
          }

          dots.forEach((dot, index) => {
              dot.addEventListener('click', () => {
                  slides[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
              });
          });

          const updateState = () => {
              if(prevBtn && nextBtn) {
                  prevBtn.disabled = container.scrollLeft <= 5;
                  nextBtn.disabled = container.scrollLeft >= container.scrollWidth - container.clientWidth - 5;
                  prevBtn.style.opacity = prevBtn.disabled ? '0.3' : '1';
                  nextBtn.style.opacity = nextBtn.disabled ? '0.3' : '1';
              }

              const center = container.scrollLeft + (container.offsetWidth / 2);
              let closestIndex = 0;
              let minDiff = Infinity;
              slides.forEach((slide, index) => {
                  const slideCenter = slide.offsetLeft + (slide.offsetWidth / 2);
                  const diff = Math.abs(center - slideCenter);
                  if(diff < minDiff) {
                      minDiff = diff;
                      closestIndex = index;
                  }
              });
              dots.forEach((dot, i) => {
                  if(i === closestIndex) {
                      dot.classList.remove('bg-gray-300', 'hover:bg-gray-400');
                      dot.classList.add('bg-[#171a20]');
                  } else {
                      dot.classList.add('bg-gray-300', 'hover:bg-gray-400');
                      dot.classList.remove('bg-[#171a20]');
                  }
              });
          };

          container.addEventListener('scroll', () => window.requestAnimationFrame(updateState));
          updateState();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<header className="flex min-[1200px]:px-12 min-[1200px]:sticky z-50 transition-none bg-white w-full h-[56px] border-transparent border-b pr-6 pl-6 top-0 items-center justify-between">

<div className="flex-shrink-0 flex items-center z-10">
<a className="group flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 rounded-sm" href="/">

<span className="text-[#171a20] font-semibold text-base tracking-tight leading-none">
            Upgrade Formula
          </span>
</a>
</div>


<nav className="hidden min-[1200px]:flex items-center justify-center absolute left-0 right-0 mx-auto pointer-events-none">
<ul className="flex items-center gap-1 pointer-events-auto">
<li className="">
<a className="inline-flex items-center px-4 py-1 rounded text-sm font-medium text-[#171a20] bg-transparent transition-all duration-300 ease-in-out hover:bg-black/5 hover:backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2" href="#process">
              How it works
            </a>
</li>
<li className="">
<a className="inline-flex items-center px-4 py-1 rounded text-sm font-medium text-[#171a20] bg-transparent transition-all duration-300 ease-in-out hover:bg-black/5 hover:backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2" href="#results">
              Results
            </a>
</li>
<li className="">
<a className="inline-flex items-center px-4 py-1 rounded text-sm font-medium text-[#171a20] bg-transparent transition-all duration-300 ease-in-out hover:bg-black/5 hover:backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2" href="#pricing">
              Pricing
            </a>
</li>
<li>
<a className="inline-flex items-center px-4 py-1 rounded text-sm font-medium text-[#171a20] bg-transparent transition-all duration-300 ease-in-out hover:bg-black/5 hover:backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2" href="#faq">
              FAQ
            </a>
</li>
</ul>
</nav>

<div className="flex items-center justify-end gap-4 z-10">

<a className="hidden min-[480px]:inline-flex items-center px-4 py-1 rounded text-sm font-medium text-[#171a20] bg-transparent transition-all duration-300 ease-in-out hover:bg-black/5 hover:backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 whitespace-nowrap" href="#start">
          Get Started
        </a>

<button className="min-[1200px]:hidden inline-flex items-center justify-center p-2 rounded text-[#171a20] bg-gray-100/50 hover:bg-gray-200/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400">
<span className="text-xs font-medium sr-only">Menu</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</header>

<main className="min-[1200px]:py-32 w-full max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="md:space-y-12 space-y-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#171a20]">
      What do you want?
    </h2>
</div>
<div className="group relative">
<div className="relative -mx-6 md:mx-0 isolate">
<style>
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .nav-btn {
          width: 40px; height: 40px;
          background-color: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
          color: #171a20;
          border-radius: 50%;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 30;
          cursor: pointer;
          position: absolute;
          /* Positioning handled by JS/Classes */
        }
        .nav-btn:hover { background-color: #ffffff; transform: scale(1.05) translateY(-50%); box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15); }
        .nav-btn:active { transform: scale(0.95) translateY(-50%); }
        .nav-btn.hidden-btn { display: none !important; }

        @media (max-width: 768px) {
          .nav-btn { width: 36px; height: 36px; }
        }
      </style>


<button aria-label="Previous slide" className="nav-btn left-4 transform -translate-y-1/2 hidden-btn" id="prev-btn">
<svg className="lucide lucide-arrow-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>

<button aria-label="Next slide" className="nav-btn right-4 transform -translate-y-1/2" id="next-btn">
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>


<div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar w-full pl-8 pr-0 gap-6 pb-12 items-start transition-[padding] duration-300 ease-in-out" id="track">

<div className="snap-start shrink-0 w-[85%] md:w-[46%] relative group cursor-pointer" data-index="0">
<div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100 relative slide-image-container">
<img alt="Better Relationship" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
<div className="mt-6 flex flex-col items-start pr-2">
<div className="w-full flex items-center justify-between">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#171a20]">Better Relationship</h3>
<svg className="text-gray-400 transition-colors duration-300 group-hover:text-[#171a20] transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="mt-2 text-base text-gray-500 leading-relaxed max-w-md">Deepen connections with science-backed emotional intelligence tools designed for modern life.</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85%] md:w-[46%] relative group cursor-pointer" data-index="1">
<div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100 relative slide-image-container">
<img alt="Better Career" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
<div className="mt-6 flex flex-col items-start pr-2">
<div className="w-full flex items-center justify-between">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#171a20]">Better Career</h3>
<svg className="text-gray-400 transition-colors duration-300 group-hover:text-[#171a20] transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="mt-2 text-base text-gray-500 leading-relaxed max-w-md">Accelerate your professional growth with strategic performance frameworks and mentorship.</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85%] md:w-[46%] relative group cursor-pointer" data-index="2">
<div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100 relative slide-image-container">
<img alt="Better Team" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
<div className="mt-6 flex flex-col items-start pr-2">
<div className="w-full flex items-center justify-between">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#171a20]">Better Team</h3>
<svg className="text-gray-400 transition-colors duration-300 group-hover:text-[#171a20] transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="mt-2 text-base text-gray-500 leading-relaxed max-w-md">Align your organization with unified goals, transparent communication, and shared purpose.</p>
</div>
</div>

<div className="snap-start shrink-0 w-[85%] md:w-[46%] relative group cursor-pointer" data-index="3">
<div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-gray-100 relative slide-image-container">
<img alt="Better Finances" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=2160&amp;q=80"/>
</div>
<div className="mt-6 flex flex-col items-start pr-2">
<div className="w-full flex items-center justify-between">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-[#171a20]">Better Finances</h3>
<svg className="text-gray-400 transition-colors duration-300 group-hover:text-[#171a20] transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="mt-2 text-base text-gray-500 leading-relaxed max-w-md">Master your wealth mindset and build sustainable financial freedom for the long term.</p>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-2" id="track-dots">
<button aria-label="Go to slide 1" className="w-2 h-2 rounded-full transition-all duration-300 bg-[#171a20]" data-index="0"></button>
<button aria-label="Go to slide 2" className="w-2 h-2 rounded-full transition-all duration-300 bg-gray-300 hover:bg-gray-400" data-index="1"></button>
<button aria-label="Go to slide 3" className="w-2 h-2 rounded-full transition-all duration-300 bg-gray-300 hover:bg-gray-400" data-index="2"></button>
<button aria-label="Go to slide 4" className="w-2 h-2 rounded-full transition-all duration-300 bg-gray-300 hover:bg-gray-400" data-index="3"></button>
</div>
</div>

</div>
</div>
</main>


    </>
  );
}
