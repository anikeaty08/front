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



    (function() {
      const images = [
        "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80",
        "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80",
        "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80"
      ];
      
      let currentIndex = 0;
      let interval;
      const duration = 3000;
      
      const container = document.querySelector('[data-element-id="aura-emk0tmw0oci7vqz0"]');
      if(!container) return;
      
      const slides = container.querySelectorAll('.showroom-slide');
      const progressBar = container.querySelector('#slide-progress');
      
      // Locate the Left Column Image (Previous Sibling in DOM structure)
      let leftImage = null;
      try {
        // Find the parent grid container to locate the left sibling
        const gridWrapper = container.closest('.grid');
        if (gridWrapper && gridWrapper.children.length > 0) {
          // Assuming the image is in the first child of the grid
          leftImage = gridWrapper.children[0].querySelector('img');
        }
      } catch(e) { console.warn('Showroom image synchronization target not found'); }
      
      function startTimer() {
        if(progressBar) {
          // Reset animation
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
          void progressBar.offsetWidth; // Force reflow
          // Start animation
          progressBar.style.transition = `width ${duration}ms linear`;
          progressBar.style.width = '100%';
        }
        
        clearInterval(interval);
        interval = setInterval(() => {
          changeShowroomSlide(1);
        }, duration);
      }
      
      function updateState(index) {
        // Update Text Slides
        slides.forEach((slide, i) => {
          if (i === index) {
            slide.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none', 'z-0', 'invisible');
            slide.classList.add('opacity-100', 'translate-y-0', 'z-10', 'visible');
          } else {
            slide.classList.remove('opacity-100', 'translate-y-0', 'z-10', 'visible');
            slide.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none', 'z-0', 'invisible');
          }
        });
        
        // Update Left Image Crossfade
        if (leftImage && images[index]) {
          // Pre-load next image
          const nextImg = new Image();
          nextImg.src = images[index];
          
          nextImg.onload = () => {
            leftImage.style.transition = 'opacity 0.3s ease-in-out';
            leftImage.style.opacity = '0';
            
            setTimeout(() => {
              leftImage.src = images[index];
              leftImage.onload = () => { leftImage.style.opacity = '1'; };
              // Safety fallback
              setTimeout(() => { leftImage.style.opacity = '1'; }, 50);
            }, 300);
          };
        }
      }
      
      // Global function for buttons
      window.changeShowroomSlide = function(dir) {
        currentIndex = (currentIndex + dir + images.length) % images.length;
        updateState(currentIndex);
        startTimer();
      }
      
      // Init
      startTimer();
      // Preload images
      images.forEach(src => { const img = new Image(); img.src = src; });
    })();
  
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
      

<nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="lg:hidden p-2 -ml-2 text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<a className="z-50 relative" href="#">
<img alt="CHAIRPARK" className="w-auto h-4" src="https://chairpark.com/image/icons/CHAIRPARK.svg"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#">Brands</a>
<a className="hover:text-stone-900 transition-colors" href="#">Chairs</a>
<a className="hover:text-stone-900 transition-colors" href="#">Desks</a>
<a className="hover:text-stone-900 transition-colors" href="#">
            Showroom
          </a>
<a className="hover:text-stone-900 transition-colors" href="#">Journal</a>
</div>

<div className="flex items-center gap-4 text-stone-600">
<button className="hover:text-stone-900 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</button>
<button className="hover:text-stone-900 transition-colors relative">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-stone-900 rounded-full"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-16 min-h-screen flex flex-col justify-center overflow-hidden">
<div className="z-0 absolute top-0 right-0 bottom-0 left-0">

<img alt="Premium Ergonomic Chair" className="object-center opacity-95 w-full h-full object-cover" src="https://www.okamura.com/wp-content/themes/okamura/assets/images/home/footer_pc.webp?w=800&amp;q=80"/>
<div className="bg-gradient-to-r from-[#FDFCF8]/90 via-[#FDFCF8]/40 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="fade-in-up max-w-xl flex flex-col justify-center h-full">
<div className="z-10 relative">
<span className="inline-flex items-center gap-2 py-1 px-3 border border-stone-200 rounded-full text-xs font-medium tracking-wider uppercase text-stone-600 mb-8 bg-white/60 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
              New Arrival
            </span>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-6xl text-stone-900 tracking-tight font-serif mb-8" style={{}}>Aeron <i className="font-serif font-light text-stone-500">Remastered.</i></h1>
<p className="leading-relaxed text-lg font-light text-stone-700 max-w-md mb-10">
              The evolution of an ergonomic revolution. Now featuring 8Z Pellicle suspension for unprecedented comfort and support in every posture.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-stone-50 hover:bg-stone-800 transition-colors text-sm font-medium tracking-wide" href="#">
                Configure Yours
              </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-stone-300 bg-white/50 backdrop-blur-sm hover:bg-white text-stone-900 transition-colors text-sm font-medium tracking-wide" href="#">
                Watch Video
              </a>
</div>
</div>

<div className="flex items-center justify-between w-full max-w-md border-t border-stone-900/10 pt-6">
<div className="flex items-center gap-3">
<button className="group flex items-center justify-center w-10 h-10 rounded-full border border-stone-300 bg-white/50 backdrop-blur-sm hover:bg-stone-900 hover:border-stone-900 transition-all">
<svg className="lucide lucide-arrow-left text-stone-600 group-hover:text-white transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="group flex hover:bg-stone-900 hover:border-stone-900 transition-all bg-white/50 w-10 h-10 border-stone-300 border rounded-full backdrop-blur-sm items-center justify-center">
<svg className="lucide lucide-arrow-right text-stone-600 group-hover:text-white transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="flex items-center gap-3">
<span className="text-xs font-medium text-stone-900 font-mono">01</span>
<div className="w-16 h-px bg-stone-300 relative overflow-hidden rounded-full">
<div className="absolute top-0 left-0 h-full w-1/3 bg-stone-900 rounded-full"></div>
</div>
<span className="text-xs font-medium text-stone-400 font-mono">04</span>
</div>
</div>
</div>

<div className="hidden lg:flex justify-end items-end h-full fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="bg-white/80 backdrop-blur-md p-6 border border-stone-100 max-w-xs">
<p className="font-serif text-2xl tracking-tight mb-1">
              Aeron Remastered
            </p>
<p className="text-sm text-stone-500 mb-4">Herman Miller</p>
<div className="flex items-center justify-between border-t border-stone-200 pt-4">
<span className="text-sm font-medium">$1,850</span>
<button className="text-stone-900 hover:text-stone-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-[#FDFCF8]">
<div className="max-w-3xl mx-auto px-6 text-center">
<svg aria-hidden="true" className="iconify mx-auto mb-8 text-stone-400 iconify--lucide" data-icon="lucide:armchair" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
<h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight tracking-tight mb-8">
          "We believe a chair is not just furniture, but the foundation of your
          daily performance and well-being."
        </h2>
<div className="flex justify-center">
<a className="group inline-flex items-center text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors uppercase tracking-widest border-b border-transparent hover:border-stone-900 pb-1" href="#">
            Our Philosophy
            <svg aria-hidden="true" className="iconify ml-2 group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="border-y border-stone-200 bg-white">
<div className="grid grid-cols-1 lg:grid-cols-2">
<div className="relative h-[60vh] lg:h-auto overflow-hidden group">
<img alt="Chairpark Showroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col lg:p-16 group bg-[#F5F5F4] h-full pt-8 pr-8 pb-8 pl-8 relative justify-center">

<div className="relative z-10 w-full max-w-lg mx-auto lg:mx-0">

<div className="mb-8">
<span className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-2 block font-sans">
        The Offline Experience
      </span>
<div className="h-px w-8 bg-stone-300"></div>
</div>

<div className="grid grid-cols-1 grid-rows-1 relative min-h-[320px]">

<div className="showroom-slide col-start-1 row-start-1 transition-all duration-500 ease-out z-10 opacity-100 translate-y-0 visible" data-index="0">
<h2 className="md:text-5xl leading-none text-4xl text-stone-900 tracking-tight font-serif mb-3">Daechi-dong</h2>
<div className="flex items-center gap-2 text-stone-500 text-sm font-medium tracking-wide mb-6 uppercase">
<svg className="text-stone-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Gangnam-gu, Seoul
        </div>
<p className="leading-relaxed text-base font-light text-stone-600 max-w-md mb-8">
          Located in the heart of Seoul's education district, our Daechi showroom offers a focused environment to experience premium ergonomics designed for deep work and study.
        </p>
<a className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors group/btn" href="#">
          View Details
          <svg className="group-hover/btn:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="showroom-slide col-start-1 row-start-1 transition-all duration-500 ease-out opacity-0 translate-y-4 invisible pointer-events-none z-0" data-index="1">
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight leading-none mb-3">
          Seongsu-dong
        </h2>
<div className="flex items-center gap-2 text-stone-500 text-sm font-medium tracking-wide mb-6 uppercase">
<svg className="text-stone-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Seongdong-gu, Seoul
        </div>
<p className="text-stone-600 leading-relaxed mb-8 font-light text-base max-w-md">
          Housed in a converted industrial warehouse, the Seongsu location blends heritage architecture with modern seating innovation, featuring our widest range of creative workspace setups.
        </p>
<a className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors group/btn" href="#">
          View Details
          <svg className="group-hover/btn:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="showroom-slide col-start-1 row-start-1 transition-all duration-500 ease-out opacity-0 translate-y-4 invisible pointer-events-none z-0" data-index="2">
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight leading-none mb-3">
          Hannam-dong
        </h2>
<div className="flex items-center gap-2 text-stone-500 text-sm font-medium tracking-wide mb-6 uppercase">
<svg className="text-stone-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Yongsan-gu, Seoul
        </div>
<p className="text-stone-600 leading-relaxed mb-8 font-light text-base max-w-md">
          Our flagship gallery in Hannam-dong showcases the complete collection in a curated, art-filled residential setting, offering private fitting consultations by appointment.
        </p>
<a className="inline-flex items-center gap-2 px-6 py-3.5 bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors group/btn" href="#">
          View Details
          <svg className="group-hover/btn:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="mt-8 flex items-center gap-6">

<div className="flex-1 h-px bg-stone-300 relative overflow-hidden rounded-full">
<div className="absolute top-0 left-0 h-full bg-stone-900 w-0" id="slide-progress"></div>
</div>

<div className="flex gap-2">
<button aria-label="Previous" className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center bg-white/50 backdrop-blur-sm hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 group" onclick="changeShowroomSlide(-1)">
<svg className="group-hover:-translate-x-0.5 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button aria-label="Next" className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center bg-white/50 backdrop-blur-sm hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all duration-300 group" onclick="changeShowroomSlide(1)">
<svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>


</div>
</div>
</section>

<section className="max-w-screen-2xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<h2 className="text-3xl font-serif text-stone-900 tracking-tight">
          Curated Categories
        </h2>
<a className="hidden md:inline-flex items-center text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
          View All
          <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:arrow-up-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-200 border border-stone-200">

<a className="group relative bg-[#FDFCF8] p-8 md:p-12 hover:bg-white transition-colors flex flex-col items-center justify-center text-center h-64" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors mb-4 iconify--lucide" data-icon="lucide:armchair" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
<span className="text-lg font-serif tracking-tight text-stone-900">
            Task Chairs
          </span>
<span className="text-xs text-stone-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            Shop Now
          </span>
</a>

<a className="group relative bg-[#FDFCF8] p-8 md:p-12 hover:bg-white transition-colors flex flex-col items-center justify-center text-center h-64" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors mb-4 iconify--lucide" data-icon="lucide:monitor" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
<span className="text-lg font-serif tracking-tight text-stone-900">
            Desks
          </span>
<span className="text-xs text-stone-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            Shop Now
          </span>
</a>

<a className="group relative bg-[#FDFCF8] p-8 md:p-12 hover:bg-white transition-colors flex flex-col items-center justify-center text-center h-64" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors mb-4 iconify--lucide" data-icon="lucide:lamp-desk" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5l5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994l-2.5-2.5a1 1 0 0 1 0-1.414zm3.914 2.5l-3.414 3.414M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path><path d="m9.086 6.5l-4.793 4.793a1 1 0 0 0-.18 1.17L7 18"></path></g></svg>
<span className="text-lg font-serif tracking-tight text-stone-900">
            Lighting
          </span>
<span className="text-xs text-stone-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            Shop Now
          </span>
</a>

<a className="group relative bg-[#FDFCF8] p-8 md:p-12 hover:bg-white transition-colors flex flex-col items-center justify-center text-center h-64" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors mb-4 iconify--lucide" data-icon="lucide:keyboard" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10m-9-4h.01"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<span className="text-lg font-serif tracking-tight text-stone-900">
            Accessories
          </span>
<span className="text-xs text-stone-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            Shop Now
          </span>
</a>

<a className="group relative bg-[#FDFCF8] p-8 md:p-12 hover:bg-white transition-colors flex flex-col items-center justify-center text-center h-64" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors mb-4 iconify--lucide" data-icon="lucide:sofa" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"></path><path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m16-2v2M12 4v9"></path></g></svg>
<span className="text-lg font-serif tracking-tight text-stone-900">
            Lounge
          </span>
<span className="text-xs text-stone-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            Shop Now
          </span>
</a>

<a className="group relative bg-[#FDFCF8] p-8 md:p-12 hover:bg-white transition-colors flex flex-col items-center justify-center text-center h-64" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors mb-4 iconify--lucide" data-icon="lucide:users" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<span className="text-lg font-serif tracking-tight text-stone-900">
            Meeting
          </span>
<span className="text-xs text-stone-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            Shop Now
          </span>
</a>

<a className="group relative bg-[#FDFCF8] p-8 md:p-12 hover:bg-white transition-colors flex flex-col items-center justify-center text-center h-64" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors mb-4 iconify--lucide" data-icon="lucide:briefcase" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
<span className="text-lg font-serif tracking-tight text-stone-900">
            Executive
          </span>
<span className="text-xs text-stone-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            Shop Now
          </span>
</a>

<a className="group relative bg-[#FDFCF8] p-8 md:p-12 hover:bg-white transition-colors flex flex-col items-center justify-center text-center h-64" href="#">
<svg aria-hidden="true" className="iconify text-stone-400 group-hover:text-stone-900 transition-colors mb-4 iconify--lucide" data-icon="lucide:percent" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 5L5 19"></path><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></g></svg>
<span className="text-lg font-serif tracking-tight text-stone-900">
            Refurbished
          </span>
<span className="text-xs text-stone-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
            Shop Now
          </span>
</a>
</div>
</section>

<section className="py-24 bg-stone-100">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div className="space-y-4">
<svg aria-hidden="true" className="iconify text-stone-900 iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
<h3 className="text-xl font-serif text-stone-900 tracking-tight">
              Unrivaled Curation
            </h3>
<p className="text-sm text-stone-600 leading-relaxed max-w-xs">
              We don't sell everything. We strictly select products that meet
              our high standards for ergonomics, durability, and aesthetic
              value.
            </p>
</div>

<div className="space-y-4">
<svg aria-hidden="true" className="iconify text-stone-900 iconify--lucide" data-icon="lucide:ruler" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-xl font-serif text-stone-900 tracking-tight">
              Precision Fitting
            </h3>
<p className="text-sm text-stone-600 leading-relaxed max-w-xs">
              A chair is only as good as its fit. Our data-driven approach
              ensures you find the model that aligns with your biometrics.
            </p>
</div>

<div className="space-y-4">
<svg aria-hidden="true" className="iconify text-stone-900 iconify--lucide" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<h3 className="text-xl font-serif text-stone-900 tracking-tight">
              Verified Authenticity
            </h3>
<p className="text-sm text-stone-600 leading-relaxed max-w-xs">
              As official partners of global brands, every piece comes with full
              manufacturer warranties and our authenticity guarantee.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-screen-2xl mx-auto">
<div className="mb-16 text-center">
<span className="text-xs font-medium tracking-widest uppercase text-stone-500 mb-4 block">
          Selection
        </span>
<h2 className="text-4xl font-serif text-stone-900 tracking-tight">
          Essential Seating
        </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="bg-stone-100 aspect-[3/4] mb-6 overflow-hidden relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-cover" src="https://eustore.hermanmiller.com/cdn/shop/products/02-Herman_Miller-Aeron-Graphite-Standard_a161a6ce-32c0-44a0-b1e6-86334b44b702.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-white p-2 shadow-sm rounded-full">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<h3 className="text-lg font-serif text-stone-900 tracking-tight">
            Aeron Graphite
          </h3>
<p className="text-sm text-stone-500 mb-2">Herman Miller</p>
<p className="text-sm font-medium text-stone-900">$1,695</p>
</div>

<div className="group cursor-pointer">
<div className="bg-stone-100 aspect-[3/4] mb-6 overflow-hidden relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-cover" src="https://www.spacelogic.co.kr/web/product/medium/202507/73bf16da7255f4a4b50de0cd5aef9daf.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-white p-2 shadow-sm rounded-full">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<h3 className="text-lg font-serif text-stone-900 tracking-tight">
            Gesture Wrapped
          </h3>
<p className="text-sm text-stone-500 mb-2">Steelcase</p>
<p className="text-sm font-medium text-stone-900">$1,350</p>
</div>

<div className="group cursor-pointer">
<div className="bg-stone-100 aspect-[3/4] mb-6 overflow-hidden relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-cover" src="https://www.spacelogic.co.kr/web/product/medium/202507/810530c8b3532a76769b34664f9b9376.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-white p-2 shadow-sm rounded-full">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<h3 className="text-lg font-serif text-stone-900 tracking-tight">
            Freedom Headrest
          </h3>
<p className="text-sm text-stone-500 mb-2">Humanscale</p>
<p className="text-sm font-medium text-stone-900">$1,299</p>
</div>

<div className="group cursor-pointer">
<div className="bg-stone-100 aspect-[3/4] mb-6 overflow-hidden relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-cover" src="https://www.spacelogic.co.kr/web/product/medium/202506/7dc73a57688cf3d9024f900ede75497d.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-white p-2 shadow-sm rounded-full">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<h3 className="text-lg font-serif text-stone-900 tracking-tight">
            Fern Knit
          </h3>
<p className="text-sm text-stone-500 mb-2">Haworth</p>
<p className="text-sm font-medium text-stone-900">$1,150</p>
</div>


<div className="group cursor-pointer">
<div className="bg-stone-100 aspect-[3/4] mb-6 overflow-hidden relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-cover" src="https://www.spacelogic.co.kr/web/product/medium/202507/31b8bfcd6951719b2eec3e84a18bd6ce.jpg?w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-serif text-stone-900 tracking-tight">
            Cosm High Back
          </h3>
<p className="text-sm text-stone-500 mb-2">Herman Miller</p>
<p className="text-sm font-medium text-stone-900">$1,495</p>
</div>

<div className="group cursor-pointer">
<div className="bg-stone-100 aspect-[3/4] mb-6 overflow-hidden relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-cover" src="https://www.spacelogic.co.kr/web/product/medium/202507/269a0b7652d8301940ae027f48ca4191.jpg?w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-serif text-stone-900 tracking-tight">
            Embody Gaming
          </h3>
<p className="text-sm text-stone-500 mb-2">Herman Miller x Logitech</p>
<p className="text-sm font-medium text-stone-900">$1,995</p>
</div>

<div className="group cursor-pointer">
<div className="bg-stone-100 aspect-[3/4] mb-6 overflow-hidden relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-cover" src="https://www.spacelogic.co.kr/web/product/medium/202506/34aa1aaab97b7842cd53829733d9d815.jpg?w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-serif text-stone-900 tracking-tight">
            Diffrient World
          </h3>
<p className="text-sm text-stone-500 mb-2">Humanscale</p>
<p className="text-sm font-medium text-stone-900">$950</p>
</div>

<div className="group cursor-pointer">
<div className="bg-stone-100 aspect-[3/4] mb-6 overflow-hidden relative">
<img alt="Chair" className="group-hover:scale-105 transition-transform duration-500 mix-blend-multiply w-full h-full object-cover" src="https://www.spacelogic.co.kr/web/product/medium/202507/5ae6ef4a47d68b67a592e133e5b54657.jpg?w=800&amp;q=80"/>
</div>
<h3 className="text-lg font-serif text-stone-900 tracking-tight">
            Leap V2
          </h3>
<p className="text-sm text-stone-500 mb-2">Steelcase</p>
<p className="text-sm font-medium text-stone-900">$1,220</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-block px-8 py-3 border border-stone-300 hover:border-stone-900 text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium tracking-wide" href="#">
          View Full Collection
        </a>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-200">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-serif text-stone-900 tracking-tight">
            Client Experiences
          </h2>
<div className="flex gap-2">
<svg aria-hidden="true" className="iconify text-stone-900 iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-stone-900 iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-stone-900 iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-stone-900 iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-stone-900 iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
<thead className="text-stone-400 font-medium border-b border-stone-100">
<tr className="">
<th className="pb-4 font-normal w-1/6">User</th>
<th className="pb-4 font-normal w-1/6">Body Profile</th>
<th className="pb-4 font-normal w-1/6">Profession</th>
<th className="pb-4 font-normal w-1/4">Model Chosen</th>
<th className="pb-4 font-normal w-1/4">Verdict</th>
</tr>
</thead>
<tbody className="text-stone-600">

<tr className="border-b border-stone-50 group hover:bg-stone-50 transition-colors">
<td className="py-6 font-medium text-stone-900">Sarah J.</td>
<td className="py-6 font-light text-stone-500">168cm / 58kg</td>
<td className="py-6">Graphic Designer</td>
<td className="py-6 text-stone-900">Herman Miller Cosm</td>
<td className="py-6 pr-4 text-stone-500 line-clamp-1">
                  "The auto-harmonic tilt is a game changer for long creative
                  sessions."
                </td>
</tr>

<tr className="border-b border-stone-50 group hover:bg-stone-50 transition-colors">
<td className="py-6 font-medium text-stone-900">David C.</td>
<td className="py-6 font-light text-stone-500">182cm / 85kg</td>
<td className="py-6">Software Engineer</td>
<td className="py-6 text-stone-900">Steelcase Gesture</td>
<td className="py-6 pr-4 text-stone-500">
                  "Supports my back perfectly in every posture, even reclining."
                </td>
</tr>

<tr className="border-b border-stone-50 group hover:bg-stone-50 transition-colors">
<td className="py-6 font-medium text-stone-900">Elena R.</td>
<td className="py-6 font-light text-stone-500">160cm / 52kg</td>
<td className="py-6">Writer</td>
<td className="py-6 text-stone-900">Humanscale Freedom</td>
<td className="py-6 pr-4 text-stone-500">
                  "Minimal adjustments needed. It just works with my body."
                </td>
</tr>

<tr className="border-b border-stone-50 group hover:bg-stone-50 transition-colors">
<td className="py-6 font-medium text-stone-900">Marcus T.</td>
<td className="py-6 font-light text-stone-500">190cm / 95kg</td>
<td className="py-6">Architect</td>
<td className="py-6 text-stone-900">Herman Miller Aeron C</td>
<td className="py-6 pr-4 text-stone-500">
                  "Size C was the perfect recommendation from the showroom
                  staff."
                </td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<footer className="bg-[#1c1917] text-[#FDFCF8] pt-24 pb-12">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="lg:col-span-2">
<a className="mb-6 block" href="#">
<img alt="CHAIRPARK" className="w-auto h-8 object-cover bg-center invert brightness-0" src="https://chairpark.com/image/logo-full-f.png?w=800&amp;q=80"/>
</a>
<p className="text-stone-400 text-sm leading-relaxed max-w-sm">
              Defining the standard for workspace ergonomics. We curate the
              world's finest chairs to elevate how you work, think, and create.
            </p>
<div className="mt-8 flex gap-4">
<a className="text-stone-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-stone-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-stone-400 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-6">Shop</h4>
<ul className="space-y-4 text-sm text-stone-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  All Chairs
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Desks</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Lighting
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Accessories
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-sm text-stone-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Showroom
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Journal
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Support</h4>
<ul className="space-y-4 text-sm text-stone-400">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Shipping &amp; Returns
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Warranty
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  B2B Solutions
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500">
<p>© 2024 Chairpark Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-300" href="#">Privacy Policy</a>
<a className="hover:text-stone-300" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
