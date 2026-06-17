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



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        const testimonialSlides = [
          { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb9b4b89-2c58-4cec-9d29-6de9fa699dbb_1600w.jpg", id: "01" },
          { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg", id: "02" },
          { img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/223529a8-3655-4526-9daa-40b68dff304a_1600w.jpg", id: "03" }
        ];
        let currentTestimonialIdx = 0;

        function changeTestimonialSlide(direction) {
          currentTestimonialIdx = (currentTestimonialIdx + direction + testimonialSlides.length) % testimonialSlides.length;
          const imgEl = document.getElementById('project-slide-img');
          const numEl = document.getElementById('slide-number');
          
          if(imgEl && numEl) {
            imgEl.style.opacity = '0';
            numEl.style.opacity = '0';
            numEl.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                imgEl.src = testimonialSlides[currentTestimonialIdx].img;
                numEl.innerText = testimonialSlides[currentTestimonialIdx].id;
                
                imgEl.onload = () => {
                    imgEl.style.opacity = '1';
                };
                // Fallback
                if(imgEl.complete) imgEl.style.opacity = '1';

                numEl.style.opacity = '1';
                numEl.style.transform = 'translateY(0)';
            }, 200);
          }
        }
      


        const testimonialSlides = [
          { img: "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80", id: "01" },
          { img: "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80", id: "02" },
          { img: "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80", id: "03" }
        ];
        let currentTestimonialIdx = 0;

        function changeTestimonialSlide(direction) {
          currentTestimonialIdx = (currentTestimonialIdx + direction + testimonialSlides.length) % testimonialSlides.length;
          const imgEl = document.getElementById('project-slide-img');
          const numEl = document.getElementById('slide-number');
          
          if(imgEl && numEl) {
            imgEl.style.opacity = '0';
            numEl.style.opacity = '0';
            numEl.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
                imgEl.src = testimonialSlides[currentTestimonialIdx].img;
                numEl.innerText = testimonialSlides[currentTestimonialIdx].id;
                
                imgEl.onload = () => {
                    imgEl.style.opacity = '1';
                };
                // Fallback
                if(imgEl.complete) imgEl.style.opacity = '1';

                numEl.style.opacity = '1';
                numEl.style.transform = 'translateY(0)';
            }, 200);
          }
        }
      


          function showIndustry(industry) {
            const industries = ['healthcare', 'fintech', 'retail', 'social', 'gaming'];
            const labels = {
              'healthcare': 'Health Care',
              'fintech': 'FinTech',
              'retail': 'Retail & eCommerce',
              'social': 'Social Media',
              'gaming': 'Gaming'
            };
            
            industries.forEach(ind => {
              const content = document.getElementById('content-' + ind);
              const tab = document.getElementById('tab-' + ind);
              
              if (ind === industry) {
                content.classList.remove('hidden');
                tab.className = 'text-sm font-medium text-white border-indigo-500 border-b-2 px-8 py-4 relative';
                tab.innerHTML = '<div class="bg-gradient-to-t from-indigo-500/30 via-indigo-500/0 to-indigo-500/0 absolute top-0 right-0 bottom-0 left-0"></div><span class="relative flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:check-circle-bold-duotone" class="iconify iconify--solar text-indigo-700"><path fill="currentColor" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" opacity=".5"></path><path fill="currentColor" d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0"></path></svg>' + labels[ind] + '</span>';
              } else {
                content.classList.add('hidden');
                tab.className = 'text-sm font-medium text-gray-400 hover:text-white transition-colors px-8 py-4 relative flex items-center gap-2';
                tab.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" data-icon="solar:alt-arrow-right-linear" class="iconify iconify--solar text-indigo-700"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m9 5l6 7l-6 7"></path></svg>' + labels[ind];
              }
            });
          }
        


        const projectData = {
          '2020': {
            title: 'Neon Horizon',
            subtitle: 'Commercial',
            desc: 'An award-winning commercial spot featuring liquid simulations, kinetic typography, and high-energy pacing.',
            tags: ['3D MOTION', 'ADVERTISING', 'VFX'],
            img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg'
          },
          '2019': {
            title: 'Cyber System',
            subtitle: 'Game Trailer',
            desc: 'A dystopian urban landscape rendered in real-time for the global launch of a major triple-A gaming title.',
            tags: ['ENVIRONMENT', 'UNREAL ENGINE', 'CINEMATIC'],
            img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/46ceb0ec-b3fa-4f16-8a70-bbd217ee77a9_1600w.jpg'
          },
          '2018': {
            title: 'Fluid Identity',
            subtitle: 'Rebranding',
            desc: 'Organic fluid simulations created to represent the dynamic and evolving nature of a fintech startup.',
            tags: ['SIMULATION', 'FLUIDS', 'BRANDING'],
            img: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92cff667-f259-4342-a0aa-f51b804f4d5c_1600w.webp'
          },
          '2017': {
            title: 'Digital Mind',
            subtitle: 'Short Film',
            desc: 'An experimental short film exploring the boundaries between digital reality and human consciousness.',
            tags: ['EXPERIMENTAL', 'NARRATIVE', 'ART DIRECTION'],
            img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80'
          }
        };

        let currentActiveYear = '2020';
        const yearsList = ['2020', '2019', '2018', '2017'];

        function updateProjectTab(year) {
          if (!projectData[year]) return;
          currentActiveYear = year;

          // Update Tabs Visuals
          const tabs = document.querySelectorAll('.year-tab');
          tabs.forEach(tab => {
            if (tab.getAttribute('data-year') === year) {
              tab.classList.remove('text-gray-600', 'hover:text-gray-400', 'border-transparent');
              tab.classList.add('text-white', 'border-blue-500');
            } else {
              tab.classList.remove('text-white', 'border-blue-500');
              tab.classList.add('text-gray-600', 'hover:text-gray-400', 'border-transparent');
            }
          });

          // Update Content
          const data = projectData[year];
          const imgEl = document.getElementById('project-display-image');
          const titleEl = document.getElementById('project-title');
          const subtitleEl = document.getElementById('project-subtitle');
          const descEl = document.getElementById('project-description');
          const tagsEl = document.getElementById('project-tags');

          // Fade out image then switch
          imgEl.style.opacity = '0.5';
          setTimeout(() => {
            imgEl.src = data.img;
            imgEl.onload = () => { imgEl.style.opacity = '1'; };
            // Fallback if cached
            if(imgEl.complete) imgEl.style.opacity = '1';
          }, 150);

          titleEl.textContent = data.title;
          subtitleEl.textContent = data.subtitle;
          descEl.textContent = data.desc;

          // Rebuild tags
          tagsEl.innerHTML = data.tags.map(tag => 
            `<span class="px-4 py-2 rounded-lg bg-[#1A1130] text-xs font-semibold tracking-wide text-purple-300 border border-purple-500/20">${tag}</span>`
          ).join('');
        }

        function navigateProject(direction) {
          const currentIndex = yearsList.indexOf(currentActiveYear);
          // Direction 1 (Right Arrow) -> Next item in array (older year)
          // Direction -1 (Left Arrow) -> Previous item in array (newer year)
          let newIndex = currentIndex + direction;
          
          if (newIndex >= yearsList.length) newIndex = 0;
          if (newIndex < 0) newIndex = yearsList.length - 1;
          
          updateProjectTab(yearsList[newIndex]);
        }
      
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>
</div>

<nav className="absolute top-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-2xl font-bold tracking-tight text-white">Nexara</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-widest text-gray-400 uppercase">
<a className="px-4 py-2 rounded-full border border-white/20 text-white bg-white/5" href="#">
          Home
        </a>
<a className="transition-colors hover:text-indigo-400" href="#">Services</a>
<a className="transition-colors hover:text-indigo-400" href="#">Process</a>
<a className="transition-colors hover:text-indigo-400" href="#">Clients</a>
<a className="transition-colors hover:text-indigo-400" href="#">Blog</a>
<a className="transition-colors hover:text-indigo-400" href="#">Contacts</a>
</div>
<div className="md:hidden">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:hamburger-menu-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" fill="currentColor" opacity=".5"></path>
<path d="M18.75 8a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75m0 4a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h12a.75.75 0 0 1 .75.75" fill="currentColor"></path>
</svg>
</div>
</nav>

<section className="min-h-screen flex overflow-hidden pt-20 relative items-center">

<div className="blur-[120px] -z-10 bg-purple-600/20 w-3/4 h-3/4 rounded-full absolute top-0 right-0" style={{}}></div>
<div className="container md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="space-y-8 relative z-10">
<h1 className="text-7xl md:text-9xl font-semibold tracking-tighter leading-none text-glow">
            Nexara
          </h1>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.3)] border-indigo-500/50 text-indigo-400">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:clapperboard-play-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 12c0-1.237 0-2.311.026-3.25h19.948C22 9.689 22 10.763 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M15 14.5c0-.633-.662-1.06-1.986-1.915c-1.342-.866-2.013-1.299-2.514-.98c-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896s1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5M12 2c1.845 0 3.33 0 4.54.088L13.098 7.25H8.401l3.5-5.25zM3.464 3.464c1.253-1.252 3.158-1.433 6.631-1.46L6.599 7.25H2.104c.147-1.764.503-2.928 1.36-3.786M21.896 7.25c-.148-1.764-.503-2.928-1.36-3.786c-.598-.597-1.344-.95-2.338-1.16L14.901 7.25z" fill="currentColor"></path></svg>
</div>
<p className="text-xl md:text-2xl font-medium tracking-tight text-gray-200">
              Motion Design
              <br/>
              &amp; Video Advertising
            </p>
</div>
<div className="flex gap-3 mt-8">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
<span className="w-2 h-2 rounded-full bg-gray-600"></span>
<span className="w-2 h-2 rounded-full bg-gray-600"></span>
<span className="w-2 h-2 rounded-full bg-gray-600"></span>
</div>
</div>
<div className="lg:h-[600px] w-full h-[400px] relative">

<img alt="3D Abstract Tech" className="mask-image-gradient opacity-90 w-[800px] h-[500px] object-cover rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/185523a5-78f0-49be-97e5-ed268e1c27be_1600w.png"/>

<div className="absolute top-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 animate-bounce" style={{animationDuration: '3s'}}>
<svg aria-hidden="true" className="iconify text-4xl iconify--solar text-indigo-400" data-icon="solar:videocamera-record-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z" fill="currentColor"></path><path clip-rule="evenodd" d="M2.908 5.462C2 6.57 2 8.212 2 11.5v1c0 3.287 0 4.931.908 6.038a4 4 0 0 0 .554.554C4.57 20 6.212 20 9.5 20c3.287 0 4.931 0 6.038-.908q.304-.25.554-.554C17 17.43 17 15.788 17 12.5v-1c0-3.287 0-4.931-.908-6.038a4 4 0 0 0-.554-.554C14.43 4 12.788 4 9.5 4c-3.287 0-4.931 0-6.038.908a4 4 0 0 0-.554.554" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M14 8.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0" fill="currentColor"></path></svg>
</div>
<div className="absolute bottom-20 left-10 p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 animate-bounce" style={{animationDuration: '4s'}}>
<svg aria-hidden="true" className="iconify text-4xl iconify--solar text-indigo-700" data-icon="solar:play-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="m15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118" fill="currentColor"></path></svg>
</div>
</div>
</div>
</section>

<div className="w-full max-w-7xl mt-12 mr-auto mb-24 ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="relative">
<div className="text-center [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<h2 className="sm:text-6xl lg:text-7xl leading-none uppercase text-5xl font-medium text-white/95 tracking-tight" style={{maskImage: 'linear-gradient(130deg, transparent, black 0%, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 0%, black 45%, transparent)'}}>
            VISUAL
          </h2>
<h2 className="sm:text-6xl lg:text-7xl leading-none bg-clip-text uppercase text-5xl font-medium text-transparent tracking-tight bg-gradient-to-r mt-1 from-indigo-400 to-indigo-500" style={{maskImage: 'linear-gradient(80deg, transparent, black 0%, black 25%, transparent)', WebkitMaskImage: 'linear-gradient(80deg, transparent, black 0%, black 25%, transparent)'}}>
            MASTERY
          </h2>
<div className="flex gap-2 mt-6 items-center text-indigo-500/40">
<span className="text-base font-sans">+</span>
<div className="h-px flex-1 bg-gradient-to-r from-transparent to-transparent via-indigo-500/30"></div>
<span className="text-base font-sans">+</span>
</div>
<p className="sm:text-2xl text-xl font-light text-gray-300/90 tracking-tight max-w-3xl mt-6 mr-auto ml-auto">
            Merging artistic vision with cutting-edge technology. We craft 
            immersive digital experiences that captivate and inspire.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll mt-10 gap-x-6 gap-y-6">
<div className="overflow-hidden transition-colors duration-300 group bg-white/5 border-white/10 border rounded-2xl hover:border-indigo-500/30">
<img alt="Dark Digital Texture" className="sm:h-80 lg:h-[360px] transition-transform duration-700 group-hover:scale-110 w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d3f4658-ecfd-47b7-8318-ab5e0f7dba77_800w.webp"/>
</div><div className="overflow-hidden transition-colors duration-300 group bg-white/5 border-white/10 border rounded-2xl hover:border-indigo-500/30">
<img alt="Futuristic Tech Structure" className="sm:h-80 lg:h-[360px] transition-transform duration-700 group-hover:scale-110 w-full h-72 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d963998-2fd7-427e-b64c-bafbf13d0089_800w.webp"/>
</div><div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-colors duration-300 group hover:border-indigo-500/30">
<img alt="Abstract 3D Shape" className="w-full h-72 sm:h-80 lg:h-[360px] object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3fe99b5d-b8c6-478f-87cc-af66f707abe4_800w.webp"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-colors duration-300 group hover:border-indigo-500/30">
<img alt="Fluid Motion Simulation" className="w-full h-72 sm:h-80 lg:h-[360px] object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b43a74e-89c1-4fbf-be6c-89a315c72d49_800w.webp" style={{}}/>
</div>
</div>
</div>
</div><section className="pt-24 pb-24 relative">
<style>
        @keyframes fadeSlideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-entry {
          opacity: 0;
          animation: fadeSlideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        /* Custom class to hide border gradient on hover if needed, or rely on z-index/bg-coverage */
      </style>
<div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
<div className="flex justify-between items-end mb-16 animate-entry" style={{animationDelay: '0.1s'}}>
<div className="">
<h6 className="uppercase block text-xs font-bold text-indigo-400 tracking-widest mb-3">
              What We Offer
            </h6>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Our Services
            </h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="group hover:bg-gray-100 hover:text-[#120824] hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)] hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-500 flex flex-col text-center bg-gradient-to-b rounded-3xl pt-8 pr-8 pb-8 pl-8 relative items-center border border-transparent animate-entry from-indigo-500/0 via-indigo-500/5 to-indigo-500/0" style={{animationDelay: '0.2s', position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.4))', '--border-radius-before': '24px'}}>
<div className="w-20 h-20 group-hover:w-24 group-hover:h-24 rounded-full group-hover:bg-white flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(8,145,178,0.2)] group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 bg-indigo-900/20">
<svg aria-hidden="true" className="iconify text-4xl group-hover:text-5xl transition-all duration-500 iconify--solar text-indigo-400 group-hover:text-indigo-500" data-icon="solar:layers-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" fill="currentColor"></path><path clip-rule="evenodd" d="M2 8c0 .494.993.89 2.979 1.685l2.808 1.124C9.773 11.603 10.767 12 12 12s2.227-.397 4.213-1.191l2.808-1.124C21.007 8.891 22 8.494 22 8s-.993-.89-2.979-1.685l-2.808-1.123C14.227 4.397 13.233 4 12 4s-2.227.397-4.213 1.192L4.98 6.315C2.993 7.109 2 7.506 2 8" fill="currentColor" fill-rule="evenodd"></path><path d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10l-2.021.809C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z" fill="currentColor" opacity=".7"></path><path d="m5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14l-2.021.809C14.227 15.603 13.233 16 12 16s-2.227-.397-4.213-1.191z" fill="currentColor" opacity=".4"></path></svg>
</div>
<h3 className="text-lg font-semibold leading-tight mb-8 group-hover:text-purple-900 group-hover:text-2xl group-hover:font-bold transition-all duration-300">
              2D &amp; 3D
              
              Animation
            </h3>
<div className="mt-auto w-full flex justify-center">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:hidden transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="hidden group-hover:flex w-full py-3 px-6 rounded-full font-semibold items-center justify-center gap-2 transition-all duration-300 hover:gap-3 hover:shadow-lg bg-indigo-400 hover:bg-indigo-300 text-indigo-950 hover:shadow-indigo-400/30">
                Learn more
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>

<div className="flex flex-col transform lg:-translate-y-4 hover:lg:-translate-y-6 animate-entry hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)] transition-all duration-500 z-10 text-[#120824] text-center bg-gray-100 rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl items-center" style={{animationDelay: '0.3s'}}>
<div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-500 hover:scale-110 hover:rotate-3">
<svg aria-hidden="true" className="iconify text-5xl iconify--solar text-indigo-700" data-icon="solar:videocamera-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M2 11.5c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554C17 6.57 17 8.212 17 11.5v1c0 3.287 0 4.931-.908 6.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5z" fill="currentColor" opacity=".5"></path>
<path d="m17 9.5l.658-.329c1.946-.973 2.92-1.46 3.63-1.02c.712.44.712 1.528.712 3.703v.292c0 2.176 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02L17 14.5z" fill="currentColor">
</path>
</svg>
</div>
<h3 className="leading-tight text-2xl font-bold text-purple-900 mb-2">
              Promo Video

              Production
            </h3>
<div className="w-full mt-8">
<button className="w-full py-3 px-6 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:gap-3 hover:shadow-lg bg-indigo-400 hover:bg-indigo-300 text-indigo-950 hover:shadow-indigo-400/30">
                Learn more
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>

<div className="group hover:bg-gray-100 hover:text-[#120824] hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)] hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-500 flex flex-col text-center bg-gradient-to-b rounded-3xl pt-8 pr-8 pb-8 pl-8 relative items-center border border-transparent animate-entry from-indigo-500/0 via-indigo-500/5 to-indigo-500/0" style={{animationDelay: '0.4s', position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.4))', '--border-radius-before': '24px'}}>
<div className="w-20 h-20 group-hover:w-24 group-hover:h-24 rounded-full group-hover:bg-white flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(8,145,178,0.2)] group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 bg-indigo-900/20">
<svg aria-hidden="true" className="iconify text-4xl group-hover:text-5xl transition-all duration-500 iconify--solar text-indigo-400 group-hover:text-indigo-500" data-icon="solar:magic-stick-3-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51c.012-.014.555.503.568.49l4-4c.013-.013-.504-.556-.49-.568L7.922 3.845a2.883 2.883 0 0 0-4.077 0m1.288 11.462a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z" fill="currentColor" opacity=".5"></path><path d="M19.967 9.13a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273z" fill="currentColor" opacity=".2"></path><path d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274z" fill="currentColor" opacity=".7"></path><path d="M10.568 6.49c-.012.014-.555-.503-.568-.49l-4 4c-.013.013.504.556.49.568l9.588 9.587a2.883 2.883 0 1 0 4.078-4.077z" fill="currentColor"></path></svg>
</div>
<h3 className="text-lg font-semibold leading-tight mb-8 group-hover:text-purple-900 group-hover:text-2xl group-hover:font-bold transition-all duration-300">
              Visual Effects
              
              (VFX)
            </h3>
<div className="mt-auto w-full flex justify-center">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:hidden transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="hidden group-hover:flex w-full py-3 px-6 rounded-full font-semibold items-center justify-center gap-2 transition-all duration-300 hover:gap-3 hover:shadow-lg bg-indigo-400 hover:bg-indigo-300 text-indigo-950 hover:shadow-indigo-400/30">
                Learn more
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>

<div className="group hover:bg-gray-100 hover:text-[#120824] hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)] hover:-translate-y-4 hover:scale-[1.02] hover:z-20 transition-all duration-500 flex flex-col text-center bg-gradient-to-b rounded-3xl pt-8 pr-8 pb-8 pl-8 relative items-center border border-transparent animate-entry from-indigo-500/0 via-indigo-500/5 to-indigo-500/0" style={{animationDelay: '0.5s', position: 'relative', -BorderGradient: 'linear-gradient(45deg, rgba(59, 130, 246, 0.4), rgba(59, 130, 246, 0), rgba(59, 130, 246, 0.4))', '--border-radius-before': '24px'}}>
<div className="w-20 h-20 group-hover:w-24 group-hover:h-24 rounded-full group-hover:bg-white flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(8,145,178,0.2)] group-hover:shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 bg-indigo-900/20">
<svg aria-hidden="true" className="iconify text-4xl group-hover:text-5xl transition-all duration-500 iconify--solar text-indigo-400 group-hover:text-indigo-500" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path><path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path></svg>
</div>
<h3 className="text-lg font-semibold leading-tight mb-8 group-hover:text-purple-900 group-hover:text-2xl group-hover:font-bold transition-all duration-300">
              Motion
              
              Branding
            </h3>
<div className="mt-auto w-full flex justify-center">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:hidden transition-all duration-300">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="hidden group-hover:flex w-full py-3 px-6 rounded-full font-semibold items-center justify-center gap-2 transition-all duration-300 hover:gap-3 hover:shadow-lg bg-indigo-400 hover:bg-indigo-300 text-indigo-950 hover:shadow-indigo-400/30">
                Learn more
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-gradient-to-b from-white/0 via-white/5 to-white/0 pt-24 pb-24 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10"></div>
<div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
<style>
      @keyframes dashFlow {
        0% { background-position: 0 0; }
        100% { background-position: 24px 0; }
      }
      .animate-flow-dash {
        background-image: linear-gradient(90deg, rgba(59, 130, 246, 0.5) 50%, transparent 50%);
        background-size: 24px 2px;
        animation: dashFlow 1s linear infinite;
      }
    </style>

<div className="text-center max-w-3xl mx-auto mb-20">
<h6 className="uppercase block text-xs font-bold text-indigo-400 tracking-widest mb-3">
        How It Works
      </h6>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
        From Concept to Final Render
      </h2>
<p className="text-gray-400 text-sm leading-relaxed">
        We believe in a transparent, collaborative process. Here is how we turn your abstract ideas into award-winning motion graphics efficiently and creatively.
      </p>
</div>

<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] -z-10">

<div className="absolute inset-0 border-t border-dashed border-white/10 opacity-30"></div>

<div className="absolute inset-0 w-full h-full animate-flow-dash [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)] opacity-80"></div>
</div>

<div className="relative flex flex-col items-center text-center group cursor-default">
<div className="w-24 h-24 rounded-full bg-[#1A1130] border border-white/10 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] group-hover:border-indigo-500/50">
<svg aria-hidden="true" className="iconify text-3xl iconify--solar transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 text-indigo-700" data-icon="solar:clipboard-list-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15.998v-6c0-2.828 0-4.242-.879-5.121C19.353 4.109 18.175 4.012 16 4H8c-2.175.012-3.353.109-4.121.877C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122c.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878c.879-.88.879-2.293.879-5.122" fill="currentColor" opacity=".5"></path><path d="M8 3.5A1.5 1.5 0 0 1 9.5 2h5A1.5 1.5 0 0 1 16 3.5v1A1.5 1.5 0 0 1 14.5 6h-5A1.5 1.5 0 0 1 8 4.5z" fill="currentColor"></path><path clip-rule="evenodd" d="M6.25 10.5A.75.75 0 0 1 7 9.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.25 14a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75m-3.5 3.5a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m3.5 0a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path></svg>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-[#120824] font-bold text-sm shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-white bg-indigo-500 group-hover:text-indigo-600">01</div>
</div>
<h3 className="text-xl font-semibold text-white mb-3 transition-colors group-hover:text-indigo-400">Brief &amp; Script</h3>
<p className="text-gray-400 text-sm leading-relaxed px-4 transition-colors group-hover:text-gray-300">
          We start by diving deep into your brand's vision. We craft a compelling script and storyboard that outlines the narrative structure before a single pixel is moved.
        </p>
</div>

<div className="relative flex flex-col items-center text-center group cursor-default">
<div className="w-24 h-24 rounded-full bg-[#1A1130] border border-white/10 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] group-hover:border-indigo-400/50">
<svg aria-hidden="true" className="iconify text-4xl iconify--solar transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3 text-indigo-400" data-icon="solar:palette-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.75 19a.75.75 0 0 1-.75.75H5a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 .75.75" fill="currentColor"></path><path d="M10 18V6c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.093C8.1 2 7.4 2 6 2s-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093C2 3.9 2 4.6 2 6v12c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 22 4.6 22 6 22s2.1 0 2.635-.273a2.5 2.5 0 0 0 1.093-1.092C10 20.1 10 19.4 10 18" fill="currentColor" opacity=".4"></path><path d="M10 8.243V18c0 .919 0 1.536-.077 2.003l3.299-3.299l5.838-6.09c.973-1.003 1.46-1.505 1.636-2.08a2.5 2.5 0 0 0-.011-1.503C20.5 6.458 20 5.958 19 4.959c-.9-.886-1.352-1.33-1.88-1.514a2.5 2.5 0 0 0-1.353-.085c-.547.118-1.049.502-2.053 1.27L13 5.243zm-1.997 13.68H8v.003z" fill="currentColor" opacity=".7"></path><path d="M15.814 14H17.9c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C21.9 15.9 21.9 16.6 21.9 18s0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.092C20 22 19.3 22 17.9 22H6c.917 0 1.534 0 2-.077v.003l.003-.003c.245-.04.448-.102.632-.195a2.5 2.5 0 0 0 1.093-1.093c.093-.184.155-.387.195-.632l3.299-3.299z" fill="currentColor"></path></svg>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-[#120824] font-bold text-sm shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-white bg-indigo-400 group-hover:text-indigo-600">02</div>
</div>
<h3 className="text-xl font-semibold text-white mb-3 transition-colors group-hover:text-indigo-400">Design &amp; Motion</h3>
<p className="text-gray-400 text-sm leading-relaxed px-4 transition-colors group-hover:text-gray-300">
          Our designers create high-fidelity style frames. Once approved, our animators bring the visuals to life with fluid, eye-catching movement and physics.
        </p>
</div>

<div className="relative flex flex-col items-center text-center group cursor-default">
<div className="w-24 h-24 rounded-full bg-[#1A1130] border border-white/10 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 ease-out group-hover:scale-110 group-hover:border-purple-500/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]">
<svg aria-hidden="true" className="iconify text-4xl text-purple-500 iconify--solar transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3" data-icon="solar:rocket-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m15.502 14.367l5.03-5.014c.724-.722 1.087-1.083 1.277-1.543C22 7.351 22 6.84 22 5.82v-.49c0-1.57 0-2.355-.49-2.843C21.022 2 20.235 2 18.659 2h-.489c-1.024 0-1.537 0-1.997.19s-.823.551-1.547 1.274l-5.03 5.014c-.846.844-1.371 1.367-1.574 1.873c-.064.16-.097.317-.097.483c0 .69.557 1.245 1.671 2.356l.15.149l1.754-1.78a.645.645 0 0 1 .919.906l-1.76 1.785l.119.117c1.114 1.11 1.67 1.666 2.362 1.666q.228 0 .447-.081c.519-.191 1.048-.72 1.916-1.585m2.363-5.888c-.652.65-1.71.65-2.363 0a1.66 1.66 0 0 1 0-2.356c.653-.65 1.71-.65 2.363 0s.653 1.705 0 2.356M2.774 12.481a.76.76 0 0 1 0 1.074l-.156.155a.34.34 0 0 0 0 .48a.34.34 0 0 0 .483 0l1.713-1.71a.76.76 0 0 1 1.072 1.075l-1.712 1.71a1.86 1.86 0 0 1-2.629 0a1.857 1.857 0 0 1 0-2.629l.156-.155a.76.76 0 0 1 1.073 0m4.523 4.215c.293.3.288.78-.012 1.073l-1.73 1.692a.759.759 0 0 1-1.061-1.085l1.73-1.692a.76.76 0 0 1 1.073.012m4.184 1.422a.76.76 0 0 1 0 1.074l-1.713 1.71a.34.34 0 0 0 0 .48c.134.133.35.133.484 0l.156-.155A.759.759 0 0 1 11.48 22.3l-.155.155a1.86 1.86 0 0 1-2.63 0a1.857 1.857 0 0 1 0-2.629l1.713-1.71a.76.76 0 0 1 1.073.001" fill="currentColor" fill-rule="evenodd"></path><path d="M10.846 5.41L8.658 7.59c-.402.401-.77.769-1.062 1.101a5 5 0 0 0-.532.706l-.022-.021l-.08-.08a4.2 4.2 0 0 0-1.319-.865l-.106-.042l-.325-.13a.658.658 0 0 1-.223-1.077c.963-.96 2.12-2.114 2.679-2.346a2.9 2.9 0 0 1 1.537-.197c.47.07.915.311 1.641.77m3.736 11.484c.176.18.293.306.399.44q.21.268.373.567c.123.223.218.462.408.939c.155.388.67.491.968.193l.073-.072c.963-.96 2.12-2.114 2.353-2.67a2.9 2.9 0 0 0 .197-1.534c-.07-.468-.312-.912-.772-1.636l-2.195 2.189c-.411.41-.789.786-1.13 1.08a5 5 0 0 1-.674.504m-6.896-2.33a.759.759 0 1 0-1.073-1.073L4.47 15.632a.759.759 0 1 0 1.074 1.074zm2.809 2.806a.759.759 0 1 0-1.073-1.073l-2.128 2.127a.76.76 0 0 0 1.074 1.074z" fill="currentColor" opacity=".5"></path></svg>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:bg-white group-hover:text-purple-600">03</div>
</div>
<h3 className="text-xl font-semibold text-white mb-3 transition-colors group-hover:text-purple-400">Render &amp; Delivery</h3>
<p className="text-gray-400 text-sm leading-relaxed px-4 transition-colors group-hover:text-gray-300">
          We polish every frame with VFX, sound design, and color grading, delivering the final assets optimized for your specific platforms and formats.
        </p>
</div>
</div>

<div className="mt-20 flex justify-center">
<a className="group inline-flex items-center gap-3 text-sm font-semibold text-white/80 hover:text-white transition-colors border-b border-transparent pb-1 hover:border-indigo-500" href="#">
<span className="">Explore our detailed documentation</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</div>
</section>

<section className="pt-20 pb-20">
<div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
<div className="glass-panel md:p-16 overflow-hidden rounded-3xl pt-10 pr-10 pb-10 pl-10 relative">

<div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px]"></div>
<div className="flex mb-8 items-center justify-between">
<span className="uppercase block text-xs font-bold text-indigo-400 tracking-widest mb-3">
              They Talk About Us
            </span>
<div className="flex gap-2 text-xs font-mono text-gray-400">
<span className="text-white transition-all duration-300" id="slide-number">01</span>
              / 03
            </div>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="">
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight mb-10">
                Our video campaigns have generated over
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  500 million views
                </span>
                to date.
              </h3>
<button className="bg-gradient-to-r text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all from-indigo-400 hover:from-indigo-300 to-indigo-500 hover:to-indigo-400">
                Start a Project
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
<div className="flex flex-col gap-8 w-full lg:max-w-lg ml-auto">

<div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-white/5 group">
<div className="absolute inset-0 bg-gradient-to-t from-[#120824]/60 via-transparent to-transparent z-10 pointer-events-none"></div>
<img alt="Project Visual" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105" id="project-slide-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4afb5c9-c4af-4be7-99ac-8966a83af87e_1600w.webp" style={{}}/>

<div className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-bold uppercase tracking-wider text-white/90">Featured</span>
</div>
</div>

<div className="flex items-center justify-between gap-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center font-bold border border-white/10 bg-indigo-900/50 text-indigo-400">
                    Nx
                  </div>
<div className="">
<p className="text-sm font-semibold text-white">Renne Franchi</p>
<p className="text-xs font-medium tracking-wide uppercase text-indigo-700">
                      CEO at Nexara
                    </p>
</div>
</div>
<div className="flex gap-3">
<button className="flex hover:bg-white/10 transition-colors group w-12 h-12 border-white/10 border rounded-full items-center justify-center" onclick="changeTestimonialSlide(-1)">
<svg className="text-gray-400 group-hover:text-white transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="flex hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] transition-all group bg-gradient-to-br to-purple-600 from-indigo-500 w-12 h-12 rounded-full items-center justify-center" onclick="changeTestimonialSlide(1)">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

</div>

</section>

<section className="pt-20 pb-20">
<div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-12">
          Industries
        </h2>

<div className="flex flex-wrap border-white/10 border-b mb-12">
<button className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-8 py-4 relative flex items-center gap-2" id="tab-healthcare" onclick="showIndustry('healthcare')">
<svg aria-hidden="true" className="iconify iconify--solar text-indigo-700" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
            Health Care
          </button>
<button className="text-sm font-medium text-white border-b-2 px-8 py-4 relative border-indigo-500" id="tab-fintech" onclick="showIndustry('fintech')">
<div className="bg-gradient-to-t absolute top-0 right-0 bottom-0 left-0 from-indigo-500/30 via-indigo-500/0 to-indigo-500/0"></div>
<span className="relative flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--solar text-indigo-700" data-icon="solar:check-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10" fill="currentColor" opacity=".5"></path>
<path d="M16.03 8.97a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor"></path>
</svg>
              FinTech
            </span>
</button>
<button className="hover:text-white transition-colors flex gap-2 text-sm font-medium text-gray-400 pt-4 pr-8 pb-4 pl-8 relative gap-x-2 gap-y-2 items-center" id="tab-retail" onclick="showIndustry('retail')">
<svg aria-hidden="true" className="iconify iconify--solar text-indigo-700" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
            Retail &amp; eCommerce
          </button>
<button className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-8 py-4 relative flex items-center gap-2" id="tab-social" onclick="showIndustry('social')">
<svg aria-hidden="true" className="iconify iconify--solar text-indigo-700" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
            Social Media
          </button>
<button className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-8 py-4 relative flex items-center gap-2" id="tab-gaming" onclick="showIndustry('gaming')">
<svg aria-hidden="true" className="iconify iconify--solar text-indigo-700" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
            Gaming
          </button>
</div>

<div className="hidden grid lg:grid-cols-2 gap-16 items-center" id="content-healthcare">
<div className="space-y-6">
<span className="text-xs font-bold tracking-widest uppercase text-indigo-700">
              MOTION FOR:
            </span>
<h3 className="text-5xl font-semibold tracking-tight">Health Care</h3>
<p className="text-gray-300 leading-relaxed text-lg max-w-lg">
              Compelling medical animations and healthcare explainers. We simplify complex procedures and scientific concepts into clear, empathetic visual narratives.
            </p>
<div className="pt-4">
<button className="bg-gradient-to-r text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all from-indigo-400 hover:from-indigo-300 to-indigo-500 hover:to-indigo-400">
                Become a Partner
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<div className="relative h-[400px] flex items-center justify-center">
<div className="absolute inset-0 bg-emerald-600/20 rounded-full blur-[100px]"></div>
<div className="relative w-64 h-64 md:w-80 md:h-80">
<img className="w-full h-full object-cover border-emerald-400/30 border rounded-full shadow-[0_0_50px_rgba(16,185,129,0.4)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f278718-4945-48d2-82b9-ba317e8535f8_800w.png" style={{}}/>
<div className="absolute inset-0 rounded-full border border-emerald-500/30 scale-125 rotate-45"></div>
<div className="border rounded-full absolute top-0 right-0 bottom-0 left-0 -rotate-12 scale-150 border-indigo-500/20"></div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-center" id="content-fintech">
<div className="space-y-6">
<span className="uppercase block text-xs font-bold text-indigo-400 tracking-widest mb-3">
              MOTION FOR:
            </span>
<h3 className="text-5xl font-semibold tracking-tight">FinTech</h3>
<p className="text-gray-300 leading-relaxed text-lg max-w-lg">
              High-impact video ads for financial technology products. We
              transform complex data into engaging visual stories that build
              trust and convert users.
            </p>
<div className="pt-4">
<button className="bg-gradient-to-r text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all from-indigo-400 hover:from-indigo-300 to-indigo-500 hover:to-indigo-400">
                Become a Partner
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<div className="relative h-[400px] flex items-center justify-center">
<div className="absolute inset-0 bg-purple-600/20 rounded-full blur-[100px]" style={{}}></div>
<div className="md:w-80 md:h-80 w-64 h-64 relative" style={{}}>
<img className="w-full h-full object-cover border-purple-400/30 border rounded-full shadow-[0_0_50px_rgba(168,85,247,0.4)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8e56a64-7a8b-4604-abff-2cd875b03093_800w.png"/>
<div className="border-purple-500/30 border rounded-full absolute top-0 right-0 bottom-0 left-0 rotate-45 scale-125"></div>
<div className="border-indigo-500/20 border rounded-full absolute top-0 right-0 bottom-0 left-0 -rotate-12 scale-150"></div>
</div>
</div>
</div>
<div className="hidden grid lg:grid-cols-2 gap-16 items-center" id="content-retail">
<div className="space-y-6">
<span className="text-xs font-bold tracking-widest uppercase text-indigo-700">
              MOTION FOR:
            </span>
<h3 className="text-5xl font-semibold tracking-tight">Retail &amp; eCommerce</h3>
<p className="text-gray-300 leading-relaxed text-lg max-w-lg">
              Product showcases and promotional videos that drive conversions. We create stunning visuals that highlight features and inspire purchase decisions.
            </p>
<div className="pt-4">
<button className="bg-gradient-to-r text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all from-indigo-400 hover:from-indigo-300 to-indigo-500 hover:to-indigo-400">
                Become a Partner
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<div className="relative h-[400px] flex items-center justify-center">
<div className="absolute inset-0 bg-orange-600/20 rounded-full blur-[100px]"></div>
<div className="relative w-64 h-64 md:w-80 md:h-80">
<img className="w-full h-full object-cover border-orange-400/30 border rounded-full shadow-[0_0_50px_rgba(249,115,22,0.4)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11acf8f4-821b-4d2f-b2a4-a8321d5c8b90_800w.png"/>
<div className="border-orange-500/30 border rounded-full absolute top-0 right-0 bottom-0 left-0 rotate-45 scale-125"></div>
<div className="border rounded-full absolute top-0 right-0 bottom-0 left-0 -rotate-12 scale-150 border-indigo-500/20"></div>
</div>
</div>
</div>
<div className="hidden grid lg:grid-cols-2 gap-16 items-center" id="content-social">
<div className="space-y-6">
<span className="text-xs font-bold tracking-widest uppercase text-indigo-700">
              MOTION FOR:
            </span>
<h3 className="text-5xl font-semibold tracking-tight">Social Media</h3>
<p className="text-gray-300 leading-relaxed text-lg max-w-lg">
              Scroll-stopping content for every platform. We design viral-ready videos optimized for engagement, shares, and brand awareness across all social channels.
            </p>
<div className="pt-4">
<button className="bg-gradient-to-r text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all from-indigo-400 hover:from-indigo-300 to-indigo-500 hover:to-indigo-400">
                Become a Partner
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<div className="relative h-[400px] flex items-center justify-center">
<div className="absolute inset-0 bg-pink-600/20 rounded-full blur-[100px]"></div>
<div className="relative w-64 h-64 md:w-80 md:h-80">
<img className="w-full h-full object-cover border-pink-400/30 border rounded-full shadow-[0_0_50px_rgba(236,72,153,0.4)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af62d2a2-5a9c-4e46-8ac6-ddbcf07769d1_3840w.png"/>
<div className="absolute inset-0 rounded-full border border-pink-500/30 scale-125 rotate-45"></div>
<div className="border rounded-full absolute top-0 right-0 bottom-0 left-0 -rotate-12 scale-150 border-indigo-500/20"></div>
</div>
</div>
</div>
<div className="hidden grid lg:grid-cols-2 gap-16 items-center" id="content-gaming">
<div className="space-y-6">
<span className="text-xs font-bold tracking-widest uppercase text-indigo-700">
              MOTION FOR:
            </span>
<h3 className="text-5xl font-semibold tracking-tight">Gaming</h3>
<p className="text-gray-300 leading-relaxed text-lg max-w-lg">
              Cinematic trailers and in-game promotional content. We bring game worlds to life with dynamic action sequences and immersive storytelling.
            </p>
<div className="pt-4">
<button className="bg-gradient-to-r text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all from-indigo-400 hover:from-indigo-300 to-indigo-500 hover:to-indigo-400">
                Become a Partner
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
</div>
</div>
<div className="relative h-[400px] flex items-center justify-center">
<div className="absolute inset-0 bg-red-600/20 rounded-full blur-[100px]"></div>
<div className="relative w-64 h-64 md:w-80 md:h-80">
<img className="w-full h-full object-cover border-red-400/30 border rounded-full shadow-[0_0_50px_rgba(239,68,68,0.4)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b8cef7b-3fe1-4668-a65b-f1cb8ef8bf50_3840w.png" style={{}}/>
<div className="absolute inset-0 rounded-full border border-red-500/30 scale-125 rotate-45"></div>
<div className="border rounded-full absolute top-0 right-0 bottom-0 left-0 -rotate-12 scale-150 border-indigo-500/20"></div>
</div>
</div>
</div>

</div>
</section>

<section className="bg-black/20 pt-20 pb-20">
<div className="container md:px-12 mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2 gap-12 items-start">

<div className="relative rounded-3xl overflow-hidden aspect-square border border-white/5 group">
<img className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" id="project-display-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#120824] via-transparent to-transparent opacity-60"></div>
</div>

<div className="pt-8">

<div className="flex gap-8 mb-12 border-b border-white/10 pb-4 overflow-x-auto" id="year-tabs-container">
<button className="year-tab text-2xl font-bold text-white pb-4 border-b-2 inline-block bg-transparent cursor-pointer focus:outline-none transition-colors border-indigo-500" data-year="2020" onclick="updateProjectTab('2020')">
                2020
              </button>
<button className="year-tab text-2xl font-bold text-gray-600 hover:text-gray-400 pb-4 border-b-2 inline-block border-transparent bg-transparent cursor-pointer focus:outline-none transition-colors" data-year="2019" onclick="updateProjectTab('2019')">
                2019
              </button>
<button className="year-tab text-2xl font-bold text-gray-600 hover:text-gray-400 pb-4 border-b-2 inline-block border-transparent bg-transparent cursor-pointer focus:outline-none transition-colors" data-year="2018" onclick="updateProjectTab('2018')">
                2018
              </button>
<button className="year-tab text-2xl font-bold text-gray-600 hover:text-gray-400 pb-4 border-b-2 inline-block border-transparent bg-transparent cursor-pointer focus:outline-none transition-colors" data-year="2017" onclick="updateProjectTab('2017')">
                2017
              </button>
</div>
<span className="uppercase block text-xs font-bold text-indigo-400 tracking-widest mb-3">
              Latest Projects:
            </span>
<div className="flex justify-between items-start">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight leading-none mb-8">
<span className="block" id="project-title">Neon Horizon</span>
<span className="block text-3xl text-gray-500 font-light mt-2" id="project-subtitle">Commercial</span>
</h2>

<div className="flex flex-col gap-3 gap-x-3 gap-y-3">
<button className="flex transform hover:scale-105 transition-transform cursor-pointer border-none text-white bg-gradient-to-br to-purple-600 from-indigo-500 w-14 h-14 rounded-full items-center justify-center" onclick="navigateProject(1)">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<button className="flex hover:bg-white/10 transition-colors group w-14 h-14 rounded-full items-center justify-center" onclick="navigateProject(1)" style={{position: 'relative', -BorderGradient: 'linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1))', '--border-radius-before': '9999px'}}>
<svg aria-hidden="true" className="iconify iconify--solar text-xl w-[20px] h-[20px]" data-icon="solar:alt-arrow-right-linear" data-icon-replaced="true" data-icon-set="solar" data-solar="alt-arrow-left-linear" height="20" role="img" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 5l-6 7l6 7" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
<div className="flex flex-wrap gap-3 mb-8" id="project-tags">
<span className="px-4 py-2 rounded-lg bg-[#1A1130] text-xs font-semibold tracking-wide text-purple-300 border border-purple-500/20">
                3D MOTION
              </span>
<span className="px-4 py-2 rounded-lg bg-[#1A1130] text-xs font-semibold tracking-wide text-purple-300 border border-purple-500/20">
                ADVERTISING
              </span>
<span className="px-4 py-2 rounded-lg bg-[#1A1130] text-xs font-semibold tracking-wide text-purple-300 border border-purple-500/20">
                VFX
              </span>
</div>
<p className="text-gray-400 text-lg mb-10 max-w-md" id="project-description">
              An award-winning commercial spot featuring liquid simulations,
              kinetic typography, and high-energy pacing.
            </p>
<div className="flex items-center gap-6">
<button className="font-semibold py-3 px-8 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all cursor-pointer border-none bg-indigo-400 hover:bg-indigo-300 text-indigo-950">
                Details
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</button>
<a className="text-sm font-semibold flex items-center gap-2 transition-colors text-white hover:text-indigo-400" href="#">
                All Projects
                <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:alt-arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m9 5l6 7l-6 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</div>
</div>
</div>

</section><section className="py-24 relative overflow-hidden">

<div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] -z-10 translate-y-1/2 -translate-x-1/2 bg-indigo-500/5"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10 -translate-y-1/2 translate-x-1/2"></div>
<div className="container mx-auto px-6 md:px-12">

<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="uppercase block text-xs font-bold text-indigo-400 tracking-widest mb-3">
          Insight &amp; Trends
        </span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
          Thoughts on Motion,
          
          Design &amp; Technology.
        </h2>
</div>
<a className="group hidden md:flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white transition-colors border-b border-transparent pb-1 hover:border-indigo-400" href="#">
<span>View all articles</span>
<svg className="transform group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<a className="group flex flex-col gap-6" href="#">
<div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-[#1A1130]">
<div className="absolute inset-0 transition-colors z-10 bg-indigo-500/0 group-hover:bg-indigo-500/10"></div>
<img alt="Abstract 3D Shape" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1507a6b-726e-4eed-9ef1-db945b5aeb27_1600w.webp" style={{}}/>

<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider uppercase text-white">
              Tutorial
            </span>
</div>
</div>
<div>
<div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-3">
<span className="text-gray-400">Oct 24, 2023</span>
<span className="w-1 h-1 rounded-full bg-gray-600"></span>
<span>5 min read</span>
</div>
<h3 className="text-xl font-semibold text-white leading-tight mb-3 transition-colors group-hover:text-indigo-400">
            Simulating Abstract Fluids in Cinema 4D
          </h3>
<p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            A step-by-step guide to creating organic, flowing liquid simulations for high-end product visualization.
          </p>
</div>
</a>

<a className="group flex flex-col gap-6" href="#">
<div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-[#1A1130]">
<div className="transition-colors z-10 absolute top-0 right-0 bottom-0 left-0 group-hover:bg-indigo-500/10 bg-indigo-500/0"></div>
<img alt="Glass Texture" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f02561fa-8d19-4407-a323-4aa0ea040f8e_1600w.webp"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider uppercase text-white">
              Design
            </span>
</div>
</div>
<div className="">
<div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-3">
<span className="text-gray-400">Nov 02, 2023</span>
<span className="w-1 h-1 rounded-full bg-gray-600"></span>
<span>3 min read</span>
</div>
<h3 className="text-xl font-semibold text-white leading-tight mb-3 transition-colors group-hover:text-indigo-500">
            The Resurgence of Glassmorphism 2.0
          </h3>
<p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            How transparency and background blur are reshaping modern interface design and motion graphics.
          </p>
</div>
</a>

<a className="group flex flex-col gap-6" href="#">
<div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/5 bg-[#1A1130]">
<div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 transition-colors z-10"></div>
<img alt="Dark Texture" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/68353342-2ec3-4136-9401-e209e0d89c22_1600w.webp"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-bold tracking-wider uppercase text-white">
              Industry
            </span>
</div>
</div>
<div>
<div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-3">
<span className="text-gray-400">Nov 15, 2023</span>
<span className="w-1 h-1 rounded-full bg-gray-600"></span>
<span>7 min read</span>
</div>
<h3 className="text-xl font-semibold text-white leading-tight mb-3 group-hover:text-purple-400 transition-colors">
            Navigating the AI Revolution in Motion
          </h3>
<p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
            Exploring how generative tools are augmenting the workflow of traditional animators rather than replacing them.
          </p>
</div>
</a>
</div>

<div className="relative rounded-3xl bg-gradient-to-r from-[#1A1130] to-[#0e061c] border border-white/5 p-8 md:p-12 overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] bg-indigo-500/10"></div>
<div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
<div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Join our creative digest
          </h3>
<p className="text-gray-400 text-sm leading-relaxed max-w-md">
            Get exclusive tutorials, free project files, and industry insights delivered straight to your inbox every week.
          </p>
</div>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all focus:border-indigo-400 focus:ring-indigo-400" placeholder="Enter your email" type="email"/>
<button className="bg-white text-[#120824] hover:bg-gray-100 font-semibold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-colors flex items-center justify-center gap-2 whitespace-nowrap" type="button">
            Subscribe
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<line x1="22" x2="11" y1="2" y2="13"></line>
<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 bg-[#0e061c]">
<div className="container mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-2">
<span className="text-2xl font-bold tracking-tight text-white">
              Nexara
            </span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-xs font-bold tracking-widest text-white uppercase">
<a className="px-5 py-2 rounded-full border border-white/20 shadow-[0_0_10px_rgba(34,211,238,0.2)] text-indigo-400" href="#">
              Home
            </a>
<a className="transition-colors hover:text-indigo-400" href="#">
              Services
            </a>
<a className="transition-colors hover:text-indigo-400" href="#">
              Industries
            </a>
<a className="transition-colors hover:text-indigo-400" href="#">
              Clients
            </a>
</div>
<div className="text-right">
<span className="block text-sm font-semibold mb-4">
              Our Social Networks:
            </span>
<div className="flex gap-4 justify-end">
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-indigo-500 hover:border-indigo-500" href="#">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:chat-round-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M7.456 3.09A10 10 0 0 0 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.764.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.134A9.96 9.96 0 0 0 12 22c4.885 0 8.952-3.503 9.826-8.134A9 9 0 0 1 7.456 3.09" fill="currentColor"></path>
<path d="M21.826 13.866q.172-.909.174-1.866c0-5.523-4.477-10-10-10a9.96 9.96 0 0 0-4.544 1.09a9 9 0 0 0 14.37 10.776" fill="currentColor" opacity=".5"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-indigo-500 hover:border-indigo-500" href="#">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:camera-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21" fill="currentColor" opacity=".5"></path>
<path d="M17.556 9.272a.826.826 0 0 0-.833.819c0 .452.373.818.833.818h1.111c.46 0 .834-.367.834-.818a.826.826 0 0 0-.834-.819z" fill="currentColor"></path>
<path clip-rule="evenodd" d="M12 9.272c-2.3 0-4.166 1.832-4.166 4.091s1.865 4.091 4.167 4.091c2.3 0 4.166-1.831 4.166-4.09s-1.865-4.092-4.166-4.092m0 1.637c-1.38 0-2.5 1.099-2.5 2.454s1.12 2.455 2.5 2.455c1.381 0 2.5-1.099 2.5-2.455c0-1.355-1.119-2.454-2.5-2.454" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-indigo-500 hover:border-indigo-500" href="#">
<span className="iconify" data-icon="solar:facebook-bold-duotone"></span>
</a>
<a className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all hover:bg-indigo-500 hover:border-indigo-500" href="#">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:plain-2-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5.796 18.204L21.512 2.488c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.114.495.362.938.704 1.289" fill="currentColor" fill-rule="evenodd"></path>
<path d="m17.498 18.486l3.13-9.392c1.25-3.745 1.873-5.617.885-6.606L5.797 18.204c.348.356.794.617 1.296.74c.5.122 1.153.033 2.46-.144l.071-.01c.369-.05.553-.075.73-.064c.32.02.63.124.898.303c.147.099.278.23.541.493l.251.251c1.51 1.51 2.266 2.265 3.067 2.226c.22-.01.438-.062.64-.151c.734-.323 1.072-1.336 1.747-3.362" fill="currentColor" opacity=".5"></path>
</svg>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/5 pt-8">
<p>NEXARA © 2020</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-400" href="#">Privacy Policy</a>
<a className="hover:text-gray-400" href="#">Terms &amp; Conditions</a>
<a className="hover:text-gray-400" href="#">Security</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
