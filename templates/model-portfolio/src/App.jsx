import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      // Intersection Observer for Animations
      const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Optional: Unobserve after animation if you only want it once
            // observer.unobserve(entry.target); 
          }
        });
      }, observerOptions);

      document.querySelectorAll('.reveal-item').forEach((el) => {
        observer.observe(el);
      });

      // Flashlight / Spotlight Effect Logic
      document.querySelectorAll('.spotlight-group').forEach(group => {
        group.addEventListener('mousemove', (e) => {
          const rect = group.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          group.style.setProperty('--mouse-x', `${x}px`);
          group.style.setProperty('--mouse-y', `${y}px`);
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="spotlight-group overflow-hidden group reveal-item bg-gray-900 w-full h-[800px] max-w-[1500px] ring-white/5 ring-1 rounded-[32px] relative shadow-2xl is-visible" style={{-MouseX: '838px', -MouseY: '4px'}}>
<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="bg-gradient-to-br from-indigo-500/10 via-purple-500/5 opacity-30 absolute top-0 right-0 bottom-0 left-0 to-blue-500/10"></div>
<img alt="Background" className="transition-transform duration-[2000ms] group-hover:scale-105 opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cc57394-5081-450f-b228-64acb9eb7536_3840w.png" style={{maskImage: 'linear-gradient(transparent, black 25%, black 100%, transparent)'}}/>
<div className="bg-gradient-to-t from-[#0f0f11] via-[#0f0f11]/40 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<nav className="spotlight-content z-20 flex md:px-10 md:py-8 reveal-item delay-100 text-sm font-medium tracking-wide w-full pt-6 pr-6 pb-6 pl-6 absolute top-0 left-0 items-center justify-between is-visible">
<div className="flex items-center">
<a className="inline-flex items-center justify-center bg-center w-[80px] h-[50px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/579d434c-5e5e-4e56-98d5-3a26b10de9db_320w.png)] bg-cover rounded" href="#"></a>
<div className="hidden md:flex items-center gap-8 text-gray-400">
<a className="hover:text-white transition-colors" href="#work">Portfolio</a>
<a className="hover:text-white transition-colors" href="#about">Bio</a>
<a className="hover:text-white transition-colors" href="#expertise">Services</a>
</div>
</div>
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] focus:outline-none sm:w-auto text-sm font-medium text-white w-full h-[54px] rounded-full pt-4 pr-8 pb-4 pl-8 relative items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2))', -BorderRadiusBefore: '9999px'}}>
<style>
            @keyframes beam-spin { to { transform: rotate(360deg); } }
            @keyframes lines-slide {
                0% { background-position: 0 0; }
                100% { background-position: 24px 0; }
            }
          </style>
<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#3b82f6_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#050505]"></div>
</div>
<div className="overflow-hidden bg-[#0A0A0A] rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
<div className="bg-gradient-to-b from-blue-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="opacity-[0.07] mix-blend-plus-lighter absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 8px)', backgroundSize: '24px 100%', animation: 'lines-slide 1.5s linear infinite'}}></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-blue-500/20 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-blue-500/40"></div>
</div>
<span className="transition-colors group-hover:text-white uppercase font-semibold text-white/90 tracking-tight z-10 relative">Book Suki</span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</nav>
<div className="spotlight-content md:p-12 lg:p-16 flex flex-col lg:flex-row w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 gap-x-12 gap-y-12 items-end justify-between">
<div className="max-w-4xl z-10">
<h1 className="reveal-item delay-200 md:text-7xl lg:text-8xl xl:text-9xl leading-[0.9] text-6xl font-medium text-white tracking-tighter mb-8 is-visible">
        Suki <span className="block md:inline font-normal text-gray-400 font-serif-italic">Kimura</span></h1>
<p className="reveal-item delay-300 leading-relaxed md:text-base text-lg font-light text-gray-400 max-w-lg is-visible">
        Professional fashion, runway, and commercial model based in New
        York. Bringing elegance, versatility, and energy to every frame.
      </p>
</div>
</div>
<div className="z-10 md:p-12 lg:p-16 flex flex-col pt-6 pr-6 pb-6 pl-6 absolute right-0 bottom-0 items-end">
<div className="flex gap-x-8 gap-y-4 items-center">
<a className="group relative flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-[7px] border-none bg-transparent transition-all duration-300 hover:scale-105" href="#">
<span className="z-20 flex h-full w-full items-center justify-center rounded-[10px] border border-[rgba(156,156,156,0.466)] bg-transparent backdrop-blur-[4px] tracking-[0.8px] transition-all duration-300 group-hover:bg-[rgba(156,156,156,0.466)]">
<svg className="fill-white h-[1.5em]" fill="white" height="1.5em" viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
</svg>
</span>
<span className="absolute -z-10 h-full w-full origin-bottom rotate-0 rounded-[10px] bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] transition-all duration-300 group-hover:rotate-[35deg]"></span>
</a>
<a className="group flex cursor-pointer items-center justify-center border-none transition-all duration-300 hover:scale-105 bg-transparent w-[45px] h-[45px] z-20 rounded-[7px] relative" href="#">
<span className="z-20 flex items-center justify-center backdrop-blur-[0px] transition-all duration-300 group-hover:bg-[rgba(156,156,156,0.466)] group-hover:backdrop-blur-[4px] tracking-[0.8px] bg-transparent w-full h-full border-[rgba(156,156,156,0.466)] border rounded-[10px]">
<svg className="fill-white h-[1.7em]" height="1.7em" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
</svg>
</span>
<span className="absolute -z-10 h-full w-full origin-bottom rotate-0 rounded-[10px] bg-[#444448] transition-all duration-300 group-hover:rotate-[35deg]"></span>
</a>
<a className="group relative flex h-[45px] w-[45px] cursor-pointer items-center justify-center rounded-[7px] border-none bg-transparent transition-all duration-300 hover:scale-105" href="#">
<span className="z-20 flex items-center justify-center backdrop-blur-[0px] transition-all duration-300 group-hover:border-[rgba(216,216,216,0.466)] group-hover:bg-[rgba(190,190,190,0.466)] group-hover:backdrop-blur-[4px] tracking-[0.8px] bg-transparent w-full h-full border-[rgba(156,156,156,0.466)] border rounded-[10px] relative">
<svg className="fill-white h-[1.6em]" height="1.6em" viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
</svg>
</span>
<span className="absolute -z-10 h-full w-full origin-bottom rotate-0 rounded-[10px] bg-[#0077b5] transition-all duration-300 group-hover:rotate-[35deg]"></span>
</a>
</div>
</div>
</section>

<section className="spotlight-group overflow-hidden md:p-16 bg-gradient-to-br from-white/10 via-white/0 to-white/10 from-white/20 to-white/20 w-full h-[1200px] max-w-[1500px] rounded-[32px] ring-0 pt-8 pr-8 pb-8 pl-8 relative reveal-item" id="work">
<div className="spotlight-content grid grid-cols-1 md:grid-cols-2 mb-16 pb-8">
<div className="col-span-1 reveal-item">
<h1 className="leading-[0.9] md:text-7xl lg:text-8xl xl:text-8xl text-6xl font-medium text-white tracking-tighter mb-8">
        Featured <span className="block md:inline font-normal text-gray-400 font-serif-italic">Work</span></h1>
<div className="text-white text-sm font-light mt-4 opacity-50">
        // PROJECTS &amp; CASE STUDIES
      </div>
</div>
<div className="col-span-1 self-end md:text-right mt-8 md:mt-0 reveal-item delay-200">
<span className="text-sm font-medium tracking-widest uppercase mb-1 block text-blue-400">
        01
      </span>
<p className="text-white/70 max-w-sm ml-auto text-lg font-light">
        A curated collection of my most impactful and innovative creative projects.
      </p>
</div>
</div>
<div className="spotlight-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 items-stretch">

<div className="spotlight-group group cursor-pointer transition-all duration-500 lg:hover:translate-y-[-10px] h-full flex flex-col rounded-[22px] p-2 bg-white/5 reveal-item delay-100">
<div className="spotlight-content transition-all duration-300 flex flex-col h-full">
<div className="h-[260px] md:h-[320px] overflow-hidden w-full rounded-[18px] mb-4 relative">
<div className="group-hover:bg-transparent transition-colors bg-black/20 z-20 absolute inset-0 pointer-events-none"></div>
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3d61db3-fc8d-4ce9-8453-5093563afc5c_1600w.webp"/>
<img alt="Project 1 Hover" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/701df31a-c515-4c85-b9ef-cfd4c2dffecd_1600w.webp"/>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div>
<h3 className="text-xl font-medium text-white mb-1 transition-colors group-hover:text-blue-400">
              Vogue Editorial
            </h3>
<p className="text-gray-500 text-sm">Fashion • 2024</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-gray-400">
              Print
            </span>
</div>
</div>
</div>
</div>

<div className="spotlight-group group cursor-pointer lg:-mt-8 lg:mb-4 transition-all duration-500 lg:hover:translate-y-[-10px] h-full flex flex-col rounded-[22px] p-2 bg-white/5 reveal-item delay-200">
<div className="spotlight-content transition-all duration-300 flex flex-col h-full">
<div className="w-full h-[260px] md:h-[320px] rounded-[18px] overflow-hidden relative mb-4">
<div className="group-hover:bg-transparent transition-colors bg-black/20 z-20 absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cb5b994-b7c5-44d5-975f-f63e4a780d45_1600w.webp"/>
<img alt="Project 2 Hover" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf6ef5a0-4049-48d1-a3ab-186aa8a0ab73_1600w.webp"/>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div className="">
<h3 className="text-xl font-medium text-white mb-1 transition-colors group-hover:text-blue-400">
              Paris Fashion Week
            </h3>
<p className="text-gray-500 text-sm">Runway • 2023</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-gray-400">
              Walk
            </span>
</div>
</div>
</div>
</div>

<div className="spotlight-group group cursor-pointer transition-all duration-500 lg:hover:translate-y-[-10px] h-full flex flex-col rounded-[22px] p-2 bg-white/5 reveal-item delay-300">
<div className="spotlight-content transition-all duration-300 flex flex-col h-full">
<div className="w-full h-[260px] md:h-[320px] rounded-[18px] overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-20 pointer-events-none"></div>
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4eca907a-2a81-4567-881c-c9ffb18568fb_1600w.webp"/>
<img alt="Project 3 Hover" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13e56bf0-b0d7-4495-94e5-5def94d81791_1600w.webp"/>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div className="">
<h3 className="text-xl font-medium text-white mb-1 transition-colors group-hover:text-blue-400">
              Zara Collection
            </h3>
<p className="text-gray-500 text-sm">Commercial • 2023</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-gray-400">
              Retail
            </span>
</div>
</div>
</div>
</div>

<div className="spotlight-group group cursor-pointer transition-all duration-500 lg:hover:translate-y-[-10px] h-full flex flex-col rounded-[22px] p-2 bg-white/5 reveal-item delay-100">
<div className="spotlight-content transition-all duration-300 flex flex-col h-full">
<div className="w-full h-[260px] md:h-[320px] rounded-[18px] overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-20 pointer-events-none"></div>
<img alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6fd253c9-179a-4d42-afc9-6a8afe2dbd6f_1600w.webp"/>
<img alt="Project 4 Hover" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92cff667-f259-4342-a0aa-f51b804f4d5c_1600w.webp"/>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div>
<h3 className="text-xl font-medium text-white mb-1 transition-colors group-hover:text-blue-400">
              Sephora Beauty
            </h3>
<p className="text-gray-500 text-sm">Campaign • 2024</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-gray-400">
              Beauty
            </span>
</div>
</div>
</div>
</div>

<div className="spotlight-group group cursor-pointer lg:-mt-8 transition-all duration-500 lg:hover:translate-y-[-10px] h-full flex flex-col rounded-[22px] p-2 bg-white/5 reveal-item delay-200">
<div className="spotlight-content transition-all duration-300 flex flex-col h-full">
<div className="w-full h-[260px] md:h-[320px] rounded-[18px] overflow-hidden relative mb-4">
<div className="group-hover:bg-transparent transition-colors z-20 bg-black/20 absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
<img alt="Project 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4dbba718-e4cd-4922-b903-62a7d30c1572_1600w.webp"/>
<img alt="Project 5 Hover" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0cc2f34-bd10-4618-883f-33d5ffb7c3cf_1600w.webp"/>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div className="">
<h3 className="text-xl font-medium text-white mb-1 transition-colors group-hover:text-blue-400">
              Elle Magazine
            </h3>
<p className="text-gray-500 text-sm">Editorial • 2023</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-gray-400">
              Cover
            </span>
</div>
</div>
</div>
</div>

<div className="spotlight-group group cursor-pointer transition-all duration-500 lg:hover:translate-y-[-10px] h-full flex flex-col rounded-[22px] p-2 bg-white/5 reveal-item delay-300">
<div className="spotlight-content transition-all duration-300 flex flex-col h-full">
<div className="w-full h-[260px] md:h-[320px] rounded-[18px] overflow-hidden relative mb-4">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-20 pointer-events-none"></div>
<img alt="Project 6" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/483ecda8-47be-4bbe-a327-2672a412811f_1600w.webp"/>
<img alt="Project 6 Hover" className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1086346-2938-4365-a7f0-0d927bdcfb96_1600w.jpg"/>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div>
<h3 className="text-xl font-medium text-white mb-1 transition-colors group-hover:text-blue-400">
              Nike Sport
            </h3>
<p className="text-gray-500 text-sm">Lifestyle • 2024</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded-full border border-white/10 text-[10px] uppercase tracking-wider text-gray-400">
              Fitness
            </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="spotlight-group overflow-hidden bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full max-w-[1500px] rounded-[32px] ring-0 relative reveal-item" id="about">
<div className="spotlight-content overflow-hidden md:p-16 w-full max-w-[1500px] rounded-[32px] ring-white/5 ring-1 pt-8 pr-8 pb-8 pl-8 relative" id="about-me">
<div className="grid grid-cols-1 md:grid-cols-2 mb-16 pb-8">
<div className="col-span-1 reveal-item">
<h1 className="leading-[0.9] md:text-7xl xl:text-8xl lg:text-7xl text-6xl font-medium text-white tracking-tighter mb-8">About <span className="block md:inline font-normal text-gray-400 font-serif-italic">Suki</span></h1>
<div className="text-white text-sm font-light mt-4 opacity-50">
              // INTRO &amp; PHILOSOPHY
            </div>
</div>
<div className="col-span-1 self-end md:text-right mt-8 md:mt-0 reveal-item delay-200">
<span className="uppercase block text-sm font-medium tracking-widest mb-1 text-blue-400">02</span>
<p className="text-white/70 max-w-sm ml-auto text-lg font-light">
              Model, muse, and visual storyteller. A glimpse into my journey and professional background.
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:p-8 md:grid-cols-3 md:gap-16 bg-gradient-to-br from-black/10 to-black/0 rounded-3xl pt-4 pr-4 pb-4 pl-4 gap-x-8 gap-y-8 reveal-item delay-200">
<div className="min-h-[400px] lg:min-h-[600px] overflow-hidden w-full rounded-3xl relative">
<img alt="Portrait" className="transition-all duration-700 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e95bbfe6-01df-4204-9400-aaa01d8b6a3f_1600w.png"/>
<div className="absolute bottom-8 left-8">
<div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl w-64">
<div className="flex items-center gap-3 mb-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-white">Available for work</span>
</div>
<p className="text-xs text-gray-300 leading-relaxed">
                  Currently based in San Francisco, working with clients globally.
                </p>
</div>
</div>
</div>
<div className="col-span-1 md:col-span-2">
<h3 className="text-3xl md:text-5xl font-medium text-white mb-8 leading-tight reveal-item delay-100">
              I combine natural presence with professional discipline.
            </h3>
<div className="space-y-6 text-gray-400 text-lg font-light leading-relaxed mb-10 reveal-item delay-200">
<p>I'm a professional model working with top agencies and brands worldwide.</p>
<p>My approach is deeply rooted in expression, bringing a unique energy to every shoot. Whether on the runway or in front of the lens, I strive to embody the designer's vision.</p>
<p>My philosophy is simple: versatility is key. From high fashion to commercial lifestyle, I adapt to tell the story through movement and expression.</p>
</div>
<div className="grid grid-cols-3 gap-8 border-t border-white/5 pt-8 reveal-item delay-300">
<div>
<span className="block text-4xl font-extrabold text-white mb-1">5'10"</span>
<span className="text-sm text-gray-500 uppercase tracking-wider">Height</span>
</div>
<div>
<span className="block text-4xl font-extrabold text-white mb-1">34-24-35</span>
<span className="text-sm text-gray-500 uppercase tracking-wider">Measurements</span>
</div>
<div>
<span className="block text-4xl font-extrabold text-white mb-1">Black</span>
<span className="text-sm text-gray-500 uppercase tracking-wider">Eyes</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="spotlight-group overflow-hidden md:p-16 bg-gradient-to-br from-white/10 via-white/0 to-white/10 w-full max-w-[1500px] rounded-[32px] ring-0 pt-8 pr-8 pb-8 pl-8 relative reveal-item" id="experience">
<div className="spotlight-content grid grid-cols-1 md:grid-cols-2 mb-16 pb-8">
<div className="col-span-1 reveal-item">
<h1 className="leading-[0.9] md:text-7xl xl:text-8xl lg:text-7xl text-5xl font-medium text-white tracking-tighter mb-8">
            Agency <span className="block md:inline font-normal text-gray-400 font-serif-italic">Experience</span>
</h1>
<div className="text-white text-sm font-light mt-4 opacity-50">
            // SKILLS &amp; TIMELINE
          </div>
</div>
<div className="col-span-1 self-end md:text-right mt-8 md:mt-0 reveal-item delay-200">
<span className="uppercase block text-sm font-medium tracking-widest mb-1 text-blue-400">03</span>
<p className="text-white/70 max-w-sm ml-auto text-lg font-light">
            A timeline of my agency representation and key career milestones.
          </p>
</div>
</div>
<div className="spotlight-content md:px-6 flex md:justify-around text-[10px] md:text-xs uppercase sticky z-20 font-bold text-black tracking-widest bg-white w-full mb-0 pt-3 pr-4 pb-3 pl-4 top-0 items-center justify-between rounded-lg reveal-item delay-300">
<span className="cursor-pointer hover:opacity-60 transition-opacity">Representation</span>
<span className="cursor-pointer hover:opacity-60 transition-opacity hidden md:block">Freelance Projects</span>
<span className="cursor-pointer hover:opacity-60 transition-opacity">Location</span>
<span className="cursor-pointer hover:opacity-60 transition-opacity hidden md:block">International</span>
</div>
<div className="spotlight-content flex flex-col w-full mt-4">

<div className="group relative py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer reveal-item delay-100">
<div className="flex flex-col md:grid md:grid-cols-[25%_20%_35%_20%] md:items-center justify-between gap-2 px-2 md:px-4">
<div className="w-full">
<h3 className="text-xl md:text-2xl font-medium text-white transition-colors group-hover:text-blue-400">Elite Model Mgmt</h3>
</div>
<div className="w-full">
<span className="text-sm md:text-base text-gray-500 font-mono group-hover:text-white transition-colors">2022 - Present</span>
</div>
<div className="w-full">
<span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors">Signed Model</span>
</div>
<div className="w-full text-left md:text-right">
<span className="text-sm md:text-base text-gray-500 uppercase tracking-wider transition-colors group-hover:text-blue-400">New York, USA</span>
</div>
</div>
</div>
<div className="group relative py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer reveal-item delay-200">
<div className="flex flex-col md:grid md:grid-cols-[25%_20%_35%_20%] md:items-center justify-between gap-2 px-2 md:px-4">
<div className="w-full">
<h3 className="text-xl md:text-2xl font-medium text-white transition-colors group-hover:text-blue-400">IMG London</h3>
</div>
<div className="w-full">
<span className="text-sm md:text-base text-gray-500 font-mono group-hover:text-white transition-colors">2020 - 2022</span>
</div>
<div className="w-full">
<span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors">Development Board</span>
</div>
<div className="w-full text-left md:text-right">
<span className="text-sm md:text-base text-gray-500 uppercase tracking-wider transition-colors group-hover:text-blue-400">London, UK</span>
</div>
</div>
</div>
<div className="group relative py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer reveal-item delay-300">
<div className="flex flex-col md:grid md:grid-cols-[25%_20%_35%_20%] md:items-center justify-between gap-2 px-2 md:px-4">
<div className="w-full">
<h3 className="text-xl md:text-2xl font-medium text-white transition-colors group-hover:text-blue-400">Ford Models</h3>
</div>
<div className="w-full">
<span className="text-sm md:text-base text-gray-500 font-mono group-hover:text-white transition-colors">2018 - 2020</span>
</div>
<div className="w-full">
<span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors">Runway Division</span>
</div>
<div className="w-full text-left md:text-right">
<span className="text-sm md:text-base text-gray-500 uppercase tracking-wider transition-colors group-hover:text-blue-400">Paris, France</span>
</div>
</div>
</div>
<div className="group relative py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer reveal-item delay-100">
<div className="flex flex-col md:grid md:grid-cols-[25%_20%_35%_20%] md:items-center justify-between gap-2 px-2 md:px-4">
<div className="w-full">
<h3 className="text-xl md:text-2xl font-medium text-white transition-colors group-hover:text-blue-400">Freelance</h3>
</div>
<div className="w-full">
<span className="text-sm md:text-base text-gray-500 font-mono group-hover:text-white transition-colors">2016 - 2018</span>
</div>
<div className="w-full">
<span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors">Commercial Talent</span>
</div>
<div className="w-full text-left md:text-right">
<span className="text-sm md:text-base text-gray-500 uppercase tracking-wider transition-colors group-hover:text-blue-400">Miami, USA</span>
</div>
</div>
</div>
<div className="group relative py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors cursor-pointer reveal-item delay-200">
<div className="flex flex-col md:grid md:grid-cols-[25%_20%_35%_20%] md:items-center justify-between gap-2 px-2 md:px-4">
<div className="w-full">
<h3 className="text-xl md:text-2xl font-medium text-white transition-colors group-hover:text-blue-400">Scouted</h3>
</div>
<div className="w-full">
<span className="text-sm md:text-base text-gray-500 font-mono group-hover:text-white transition-colors">2014 - 2016</span>
</div>
<div className="w-full">
<span className="text-base md:text-lg text-gray-300 group-hover:text-white transition-colors">New Face</span>
</div>
<div className="w-full text-left md:text-right">
<span className="text-sm md:text-base text-gray-500 uppercase tracking-wider transition-colors group-hover:text-blue-400">Chicago, USA</span>
</div>
</div>
</div>
</div>
</section>

<section className="spotlight-group md:p-20 overflow-hidden flex flex-col text-center bg-gradient-to-br from-white/10 to-white/0 w-full max-w-[1500px] ring-white/5 ring-1 rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative items-center reveal-item" id="contact">
<div className="absolute inset-0 z-0">
<div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe className="" frameborder="0" height="100%" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div>
</div>
<div className="spotlight-content relative z-10 max-w-2xl reveal-item delay-100">
<h2 className="text-5xl md:text-7xl font-medium text-white mb-8 tracking-tight">
          Let's work
          <br/>
<span className="text-gray-500 font-serif-italic">together.</span>
</h2>
<p className="text-gray-400 text-lg mb-10">
          Have a project in mind? Let's create something extraordinary.
        </p>
<a className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform duration-300 mb-20" href="mailto:bookings@sarahwilliams.com">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
          bookings@sarahwilliams.com
        </a>
<div className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5 pt-10 w-full md:w-[800px]">
<div className="flex gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Instagram</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">Dribbble</a>
</div>
<p className="text-gray-600 text-sm">
            © 2024 Portfolio. All rights reserved.
          </p>
</div>
</div>
</section>


    </>
  );
}
