import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init Icons
      lucide.createIcons();

      // --- Navigation ---
      const menuBtn = document.getElementById('menu-btn');
      const closeMenuBtn = document.getElementById('close-menu-btn');
      const navOverlay = document.getElementById('nav-overlay');

      function toggleMenu() {
          const isOpen = navOverlay.classList.contains('open');
          if (isOpen) {
              navOverlay.classList.remove('open');
              document.body.style.overflow = '';
          } else {
              navOverlay.classList.add('open');
              document.body.style.overflow = 'hidden';
          }
      }

      menuBtn.addEventListener('click', toggleMenu);
      closeMenuBtn.addEventListener('click', toggleMenu);

      // --- Reveal Animation ---
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  entry.target.classList.remove('reveal-init');
              }
          });
      }, { threshold: 0.1 });

      document.querySelectorAll('.reveal-element').forEach((el) => {
          el.classList.add('reveal-init');
          observer.observe(el);
      });

      // --- Rating Slider ---
      const track = document.getElementById('slider-track');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      let slideIndex = 0;
      const totalSlides = 3; 

      function updateSlider() {
          const cardWidth = track.firstElementChild.offsetWidth; 
          const gap = 24; 
          const moveAmount = (cardWidth + gap) * slideIndex;
          track.style.transform = `translateX(-${moveAmount}px)`;
      }

      nextBtn.addEventListener('click', () => {
          if (slideIndex < totalSlides - 1) {
              slideIndex++;
              updateSlider();
          }
      });

      prevBtn.addEventListener('click', () => {
          if (slideIndex > 0) {
              slideIndex--;
              updateSlider();
          }
      });
      
      // Handle resize for slider
      window.addEventListener('resize', updateSlider);

      // --- Services Dynamic Animation ---
      const serviceText = document.getElementById('service-text');
      const progressBar = document.getElementById('progress-bar');
      const bgs = [
          document.getElementById('service-bg-1'),
          document.getElementById('service-bg-2'),
          document.getElementById('service-bg-3')
      ];

      const services = [
          { text: "Selling" },
          { text: "Buying" },
          { text: "Investing" }
      ];

      let serviceIndex = 0;
      const duration = 6000; 

      function animateService() {
          // Text
          serviceText.classList.remove('anim-text-enter');
          serviceText.classList.add('anim-text-exit');

          setTimeout(() => {
              serviceText.textContent = services[serviceIndex].text;
              serviceText.classList.remove('anim-text-exit');
              serviceText.classList.add('anim-text-enter');
          }, 600); 

          // Image
          bgs.forEach((bg, idx) => {
              bg.style.opacity = idx === serviceIndex ? '1' : '0';
          });

          // Bar
          progressBar.style.transition = 'none';
          progressBar.style.width = '0%';
          void progressBar.offsetWidth; // Force reflow
          progressBar.style.transition = `width ${duration}ms linear`;
          progressBar.style.width = '100%';

          serviceIndex = (serviceIndex + 1) % services.length;
      }

      // Initial State
      serviceText.textContent = services[0].text;
      progressBar.style.transition = `width ${duration}ms linear`;
      progressBar.style.width = '100%';
      serviceIndex = 1; 

      setInterval(animateService, duration);


      // --- FAQ Accordion ---
      const accordions = document.querySelectorAll('.accordion-item');

      accordions.forEach(item => {
          const header = item.querySelector('.accordion-header');
          const content = item.querySelector('.accordion-content');
          const iconBg = item.querySelector('.accordion-icon');

          header.addEventListener('click', () => {
              const isActive = item.classList.contains('active');

              accordions.forEach(otherItem => {
                  otherItem.classList.remove('active');
                  otherItem.querySelector('.accordion-content').style.maxHeight = 0;
                  otherItem.querySelector('.accordion-icon').classList.remove('bg-zinc-900', 'text-white');
                  otherItem.querySelector('.accordion-icon').classList.add('bg-zinc-50', 'text-zinc-900');
                  otherItem.classList.remove('shadow-lg');
              });

              if (!isActive) {
                  item.classList.add('active');
                  item.classList.add('shadow-lg');
                  content.style.maxHeight = content.scrollHeight + "px";
                  iconBg.classList.remove('bg-zinc-50', 'text-zinc-900');
                  iconBg.classList.add('bg-zinc-900', 'text-white');
              }
          });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6">
<div className="glass-panel flex gap-4 rounded-full p-2 shadow-sm items-center justify-between max-w-4xl w-full">

<button className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-zinc-100 hover:bg-zinc-50 transition-colors group" id="menu-btn">
<svg className="lucide lucide-menu text-zinc-900 group-hover:scale-105 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>

<div className="px-4 font-semibold tracking-tight text-sm md:text-base text-zinc-900 uppercase">
          Fellwock Group
        </div>

<a className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs md:text-sm font-medium flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10" href="#contact">
          Get in Touch
          <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<div className="fixed inset-0 bg-[#FAFAFA] z-[60] flex flex-col opacity-0 invisible" id="nav-overlay">
<div className="absolute top-6 right-6 md:top-8 md:right-8">
<button className="flex hover:scale-105 transition-transform bg-white w-12 h-12 rounded-full shadow-lg items-center justify-center border border-zinc-100" id="close-menu-btn">
<svg className="lucide lucide-x text-zinc-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 flex items-center justify-center">
<div className="flex flex-col items-center gap-6 md:gap-8 text-center" id="nav-links">
<a className="text-3xl md:text-5xl font-medium tracking-tight hover:text-zinc-500 transition-colors" href="#">Find a Home</a>
<a className="text-3xl md:text-5xl font-medium tracking-tight hover:text-zinc-500 transition-colors" href="#">Sell Your Home</a>
<a className="text-3xl md:text-5xl font-medium tracking-tight hover:text-zinc-500 transition-colors" href="#">Zillow Profile</a>
<a className="text-3xl md:text-5xl font-medium tracking-tight hover:text-zinc-500 transition-colors" href="#">About Terri</a>
<a className="text-3xl md:text-5xl font-medium tracking-tight hover:text-zinc-500 transition-colors" href="#contact">Contact</a>
</div>
</div>
</div>

<header className="relative w-full h-screen min-h-[650px] flex flex-col justify-center items-center overflow-hidden bg-zinc-50">

<div className="absolute inset-0 z-0">

<img alt="Spring TX Luxury Home" className="opacity-100 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2853&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-zinc-900/10"></div>
<div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
</div>

<div className="relative z-10 flex flex-col items-center w-full max-w-[95vw] pointer-events-none select-none text-white mix-blend-overlay">
<h1 className="flex flex-col items-center leading-[0.9] tracking-tighter">
<span className="text-[14vw] xl:text-[200px] font-semibold reveal-element visible">
            Fellwock
          </span>
<span className="text-[6vw] xl:text-[90px] self-end -mt-[2vw] mr-[12%] font-light italic reveal-element visible" style={{transitionDelay: '150ms'}}>
            Group
          </span>
</h1>
</div>
<div className="absolute bottom-12 left-0 right-0 flex justify-center z-20 reveal-element visible" style={{transitionDelay: '300ms'}}>
<div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 flex items-center gap-4 shadow-xl">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-medium text-zinc-800 uppercase tracking-wide">Spring, TX Real Estate</span>
</div>
</div>
</div>
</header>

<section className="-mt-16 relative z-20 px-6 md:px-12 xl:px-24 pb-24 max-w-[1400px] mx-auto">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-zinc-100 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 reveal-element reveal-init">

<div className="flex flex-col justify-center gap-2 md:border-r border-zinc-100 md:pr-12">
<div className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">
            20+
          </div>
<div className="text-sm md:text-base text-zinc-500 font-normal leading-snug">
            Years of experience in the Greater Houston area.
          </div>
</div>

<div className="flex flex-col justify-center gap-2 md:border-r border-zinc-100 md:px-12">
<div className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">
            Top 1%
          </div>
<div className="text-sm md:text-base text-zinc-500 font-normal leading-snug">
            Recognized performance in Spring, TX real estate sales.
          </div>
</div>

<div className="flex flex-col justify-center gap-2 md:pl-12">
<div className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">
            Zillow
          </div>
<div className="text-sm md:text-base text-zinc-500 font-normal leading-snug">
            Verified Premier Agent profile and 5-star reviews.
          </div>
</div>
</div>
</section>

<section className="px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto mb-32">
<div className="mb-16 reveal-element reveal-init">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.1]">
          Why choose Terri?
          <span className="text-zinc-400 block mt-2">Local expertise, global reach.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer reveal-element reveal-init border border-zinc-200">
<img className="w-full h-full object-cover hover-card-bg opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full inline-block mb-3">
<span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Integrity</span>
</div>
<p className="text-white text-sm font-medium leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
               Honest guidance through every step of your real estate journey in Spring, TX.
            </p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer lg:translate-y-12 reveal-element reveal-init border border-zinc-200">
<img className="w-full h-full object-cover hover-card-bg opacity-90" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full inline-block mb-3">
<span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Local Knowledge</span>
</div>
<p className="text-white text-sm font-medium leading-relaxed opacity-90">
              Specialized knowledge of Aldine Westfield and surrounding neighborhoods.
            </p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer reveal-element reveal-init border border-zinc-200">
<img className="w-full h-full object-cover hover-card-bg opacity-90" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full inline-block mb-3">
<span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Negotiation</span>
</div>
<p className="text-white text-sm font-medium leading-relaxed opacity-90">
              Securing the best possible value for your property with proven strategies.
            </p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer lg:translate-y-12 reveal-element reveal-init border border-zinc-200">
<img className="w-full h-full object-cover hover-card-bg opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full inline-block mb-3">
<span className="text-xs font-semibold text-zinc-900 uppercase tracking-wider">Results</span>
</div>
<p className="text-white text-sm font-medium leading-relaxed opacity-90">
              A track record of successful closings and satisfied families.
            </p>
</div>
</div>
</div>

<div className="mt-24 flex flex-col sm:flex-row gap-4 items-center justify-start reveal-element reveal-init">
<a className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium text-base hover:bg-zinc-800 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto text-center shadow-lg shadow-zinc-900/10" href="#contact">
          Schedule Consultation
        </a>
<a className="bg-white border border-zinc-200 text-zinc-900 px-8 py-4 rounded-full font-medium text-base flex items-center justify-center gap-2 hover:border-zinc-300 transition-all duration-300 w-full sm:w-auto group" href="#">
          View Zillow Profile
          <svg className="lucide lucide-external-link transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
</a>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100 overflow-hidden relative" id="testimonials">
<div className="px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 reveal-element reveal-init">
<h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-[1.1]">
            Verified Client
            <span className="text-zinc-400">Experiences</span>
</h2>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-200" id="prevBtn">
<svg className="lucide lucide-arrow-left" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border border-zinc-200 bg-white flex items-center justify-center hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-all duration-200" id="nextBtn">
<svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="overflow-hidden">
<div className="flex gap-6 transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]" id="slider-track">

<div className="min-w-full md:min-w-[480px] flex flex-col bg-white h-[320px] border border-zinc-200 rounded-2xl p-8 relative justify-between hover:shadow-lg transition-shadow">
<div>
<div className="flex gap-1 text-zinc-900 mb-6">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-lg md:text-xl font-medium leading-relaxed text-zinc-800 tracking-tight">
                    “Terri was professional, knowledgeable, and always available. She made selling our home in Spring incredibly easy.”
                  </p>
</div>
<div className="flex items-center gap-3 mt-6">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-semibold text-xs">SM</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Sarah M.</div>
<div className="text-xs text-zinc-400">Sold in Spring, TX</div>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[480px] flex flex-col bg-white h-[320px] border border-zinc-200 rounded-2xl p-8 relative justify-between hover:shadow-lg transition-shadow">
<div>
<div className="flex gap-1 text-zinc-900 mb-6">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-lg md:text-xl font-medium leading-relaxed text-zinc-800 tracking-tight">
                     “Highly recommended. The Fellwock Group understands the local market better than anyone we spoke with.”
                   </p>
</div>
<div className="flex items-center gap-3 mt-6">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-semibold text-xs">JR</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Jason R.</div>
<div className="text-xs text-zinc-400">Bought in Spring, TX</div>
</div>
</div>
</div>

<div className="min-w-full md:min-w-[480px] flex flex-col bg-white h-[320px] border border-zinc-200 rounded-2xl p-8 relative justify-between hover:shadow-lg transition-shadow">
<div>
<div className="flex gap-1 text-zinc-900 mb-6">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
<p className="text-lg md:text-xl font-medium leading-relaxed text-zinc-800 tracking-tight">
                     “Transparent and trustworthy. Terri fought for our best interests every step of the way.”
                   </p>
</div>
<div className="flex items-center gap-3 mt-6">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500 font-semibold text-xs">BP</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Brian P.</div>
<div className="text-xs text-zinc-400">Sold in Spring, TX</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 text-center md:text-left">
<a className="text-xs font-semibold uppercase tracking-wide text-zinc-400 hover:text-zinc-600 transition-colors" href="#">Read all reviews on Zillow →</a>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto px-4 md:px-12 xl:px-24 mb-32 pt-24">
<div className="relative h-[70vh] min-h-[550px] rounded-3xl overflow-hidden shadow-2xl reveal-element bg-zinc-900 border border-zinc-800">

<div className="absolute inset-0 w-full h-full transition-opacity duration-1000 opacity-100" id="service-bg-1">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 w-full h-full transition-opacity duration-1000 opacity-0" id="service-bg-2">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 w-full h-full transition-opacity duration-1000 opacity-0" id="service-bg-3">
<img className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-6">
<p className="text-sm font-medium uppercase tracking-widest text-zinc-400 mb-4">Expertise in</p>
<div className="relative h-[120px] md:h-[150px] w-full flex justify-center items-center overflow-hidden">
<h2 className="text-5xl md:text-8xl font-medium leading-none tracking-tight" id="service-text">Selling</h2>
</div>

<div className="absolute bottom-16 w-[200px] h-[2px] bg-white/20 rounded-full overflow-hidden">
<div className="h-full bg-white w-0 rounded-full" id="progress-bar" style={{width: '100%'}}></div>
</div>
</div>
</div>
</section>

<section className="py-12 px-6 md:px-12 xl:px-24 max-w-[1400px] mx-auto mb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
<div className="reveal-element reveal-init">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.1] text-zinc-900">
            Common questions
          </h2>
<p className="mt-6 text-zinc-500 text-lg leading-relaxed max-w-sm">
             Navigating the Spring, TX market can be complex. We're here to simplify it for you.
          </p>
</div>
<div className="space-y-4 reveal-element reveal-init">

<div className="accordion-item bg-white rounded-2xl border border-zinc-200 transition-all duration-300">
<button className="accordion-header w-full flex justify-between items-start text-left p-6 md:p-8 gap-4">
<span className="text-lg font-medium tracking-tight text-zinc-900">What areas do you serve?</span>
<div className="bg-zinc-50 p-2 rounded-full shrink-0 accordion-icon">
<svg className="lucide lucide-chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content px-6 md:px-8">
<div className="pb-8 text-zinc-500 text-base leading-relaxed">
                We specialize in Spring, TX, specifically the Aldine Westfield corridor and surrounding Greater Houston neighborhoods.
              </div>
</div>
</div>

<div className="accordion-item bg-white rounded-2xl border border-zinc-200 transition-all duration-300">
<button className="accordion-header w-full flex justify-between items-start text-left p-6 md:p-8 gap-4">
<span className="text-lg font-medium tracking-tight text-zinc-900">How do I get a home valuation?</span>
<div className="bg-zinc-50 p-2 rounded-full shrink-0 accordion-icon">
<svg className="lucide lucide-chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content px-6 md:px-8">
<div className="pb-8 text-zinc-500 text-base leading-relaxed">
                Simply contact us through the form below or call us directly. We provide a comprehensive market analysis tailored to your specific property features.
              </div>
</div>
</div>

<div className="accordion-item bg-white rounded-2xl border border-zinc-200 transition-all duration-300">
<button className="accordion-header w-full flex justify-between items-start text-left p-6 md:p-8 gap-4">
<span className="text-lg font-medium tracking-tight text-zinc-900">Do I need a Zillow profile to work with you?</span>
<div className="bg-zinc-50 p-2 rounded-full shrink-0 accordion-icon">
<svg className="lucide lucide-chevron-down" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</button>
<div className="accordion-content px-6 md:px-8">
<div className="pb-8 text-zinc-500 text-base leading-relaxed">
                Not at all. While we showcase our reviews on Zillow, we work with all clients personally and directly.
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-8 px-6 md:px-12 xl:px-24 rounded-t-[40px] shadow-[0_-10px_60px_rgba(0,0,0,0.03)] relative mt-12 border-t border-zinc-100" id="contact">
<div className="max-w-[1400px] mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24">

<div className="lg:col-span-4 space-y-6">
<h4 className="text-2xl font-semibold text-zinc-900 tracking-tight">Fellwock Group</h4>
<p className="text-zinc-500 leading-relaxed max-w-sm">
              Your trusted real estate partner in Spring, TX. Dedicated to integrity, results, and personal service.
            </p>
<div className="pt-4">
<div className="flex items-start gap-3 mb-4 text-zinc-600">
<svg className="lucide lucide-map-pin mt-1 text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>23221 Aldine Westfield,<br/>Spring, TX</span>
</div>
<div className="flex items-center gap-3 mb-4 text-zinc-600">
<svg className="lucide lucide-phone text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<a className="hover:text-zinc-900 transition-colors" href="tel:7132498202">(713) 249-8202</a>
</div>
<div className="flex items-center gap-3 text-zinc-600">
<svg className="lucide lucide-mail text-zinc-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<a className="hover:text-zinc-900 transition-colors" href="mailto:tfellwock@hotmail.com">tfellwock@hotmail.com</a>
</div>
</div>
</div>

<div className="lg:col-span-2 space-y-6">
<h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Services</h4>
<ul className="space-y-3 text-base text-zinc-600">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Buy a Home</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Sell a Home</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Valuation</a></li>
</ul>
</div>

<div className="lg:col-span-2 space-y-6">
<h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Company</h4>
<ul className="space-y-3 text-base text-zinc-600">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About Terri</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Zillow Profile</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="lg:col-span-4 space-y-6 bg-zinc-50 p-8 rounded-3xl border border-zinc-100">
<h4 className="text-lg font-semibold text-zinc-900">Let's start a conversation</h4>
<form className="space-y-4">
<div>
<input className="w-full bg-white border border-zinc-200 py-3 px-4 rounded-xl text-zinc-900 placeholder:text-zinc-400 outline-none transition-all text-sm" placeholder="Your email address" type="email"/>
</div>
<div>
<textarea className="w-full bg-white border border-zinc-200 py-3 px-4 rounded-xl text-zinc-900 placeholder:text-zinc-400 outline-none transition-all text-sm resize-none" placeholder="How can we help?" rows="3"></textarea>
</div>
<button className="w-full bg-zinc-900 text-white py-3 rounded-xl hover:bg-zinc-800 transition-colors font-medium text-sm flex justify-center items-center gap-2 group" type="submit">
                  Send Message
                  <svg className="lucide lucide-send group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</form>
</div>
</div>
<div className="h-px w-full bg-zinc-100 mb-8"></div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-400">
<p>© 2025 Fellwock Group. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
</div>
</div>
</div>

<div className="w-full flex justify-center mt-12 pb-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
<h1 className="text-[18vw] font-bold leading-none tracking-tighter whitespace-nowrap">
          FELLWOCK
        </h1>
</div>
</footer>


    </>
  );
}
