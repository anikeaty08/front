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



        function openVideoModal(url) {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('modal-iframe');
            
            // Append autoplay to the URL
            const autoplayUrl = url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
            
            iframe.src = autoplayUrl;
            modal.classList.remove('hidden');
            
            // Force reflow to enable transition
            void modal.offsetWidth;
            
            modal.classList.remove('opacity-0');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeVideoModal() {
            const modal = document.getElementById('video-modal');
            const iframe = document.getElementById('modal-iframe');
            
            modal.classList.add('opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                iframe.src = ''; // Stop video
                document.body.style.overflow = ''; // Restore scrolling
            }, 500);
        }

        // Close on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeVideoModal();
            }
        });
    


        lucide.createIcons();
    
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
      

<div className="flex flex-col md:flex-row w-full h-auto md:h-screen shrink-0 relative z-10">

<div className="relative w-full md:w-1/2 h-[50vh] md:h-full bg-neutral-900 overflow-hidden shrink-0">

<img alt="Isabella Vance Portrait" className="contrast-125 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0 grayscale brightness-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aadb9b4d-f5b2-46b9-8ae9-ee5568d82f43_1600w.jpg?w=800&amp;q=80"/>

<div className="md:p-8 flex flex-col bg-center transition-all duration-700 ease-in-out hover:grayscale-0 contrast-125 z-10 bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aadb9b4d-f5b2-46b9-8ae9-ee5568d82f43_1600w.jpg?w=800&amp;q=80')] bg-cover pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 brightness-90 justify-between">

<div className="text-[10px] leading-relaxed uppercase mix-blend-none md:text-xs font-semibold text-slate-50 tracking-wide">2025 PORTFOLIO
</div>

<div className="text-[10px] md:text-xs uppercase mix-blend-none font-semibold text-white/90 tracking-widest max-w-[200px]">PAINTING A MILLION WORDS WITH LIGHT</div>
</div>
</div>

<div className="md:w-1/2 md:h-full flex flex-col md:p-8 lg:p-12 shrink-0 bg-white w-full h-auto pt-6 pr-6 pb-6 pl-6 relative justify-between">

<div className="flex md:mb-0 w-full mb-12 items-start justify-between">

<div className="text-right w-full py-2">
<img alt="Multimedia Studio" className="inline-block object-auto md:h-12 w-auto h-[42px] relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8b373fa-6bac-4024-9bbb-0c3b3ab64931_3840w.png?w=800&amp;q=80"/>
</div>
</div>

<div className="flex flex-col flex-grow md:pb-0 md:pt-40 pt-12 pb-12 justify-center">

<div className="relative">


<h1 className="uppercase leading-[0.9] md:text-4xl lg:text-5xl xl:text-5xl text-3xl font-semibold text-black tracking-tight max-w-3xl relative">We don’t just capture images. We translate light into meaning, memory, and motion. Telling stories about faith, joy, pain, culture and beauty with visuals.</h1>
</div>
</div>

<div className="hidden md:block h-8"></div>
</div>
</div>

<section className="flex flex-col min-h-screen bg-[#F2F1EC] w-full pt-20 pb-0 relative" id="works">

<div className="px-6 md:px-8 mb-16 w-full max-w-[1920px] mx-auto">
<div className="text-[10px] uppercase font-semibold text-neutral-400 tracking-widest">[SELECTED WORKS]</div>
</div>

<div className="overflow-x-auto overflow-y-hidden no-scrollbar md:px-8 flex md:gap-10 snap-x w-full pr-6 pb-32 pl-6 gap-x-4 gap-y-4 items-start">

<div className="flex flex-col w-[260px] md:w-[320px] shrink-0 snap-start group cursor-pointer">

<div className="flex flex-col justify-between h-20 mb-6 border-t border-transparent group-hover:border-black transition-colors duration-300 pt-2">
<span className="text-xs font-semibold text-black">01.</span>
<div className="mt-auto">
<h3 className="leading-tight text-sm font-semibold text-black tracking-tight">WIFE</h3>
<p className="text-[10px] uppercase group-hover:text-black transition-colors font-medium text-neutral-500 tracking-wide mt-1">[PERSONAL WORK]</p>
</div>
</div>

<div className="w-full h-[380px] overflow-hidden bg-neutral-100">
<img alt="Stella Artois" className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c97125f-10be-4437-9152-6543040e8f05_800w.jpg?w=800&amp;q=80"/>
</div>
</div>

<div className="flex flex-col w-[260px] md:w-[320px] shrink-0 snap-start group cursor-pointer">
<div className="flex flex-col group-hover:border-black transition-colors duration-300 h-20 border-transparent border-t mb-6 pt-2 justify-between">
<span className="text-xs font-semibold text-black">02.</span>
<div className="mt-auto">
<h3 className="leading-tight text-sm font-semibold text-black tracking-tight">T39</h3>
<p className="text-[10px] uppercase group-hover:text-black transition-colors font-medium text-neutral-500 tracking-wide mt-1">[CLIENT WORK]</p>
</div>
</div>
<div className="w-full h-[380px] overflow-hidden bg-neutral-100">
<img alt="Logitech" className="group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a446e6e3-40be-4956-bee2-355635137bc1_800w.jpg"/>
</div>
</div>

<div className="flex flex-col w-[400px] md:w-[500px] shrink-0 snap-start group cursor-pointer">
<div className="flex flex-col justify-between h-20 mb-6 border-t border-transparent group-hover:border-black transition-colors duration-300 pt-2">
<span className="text-xs font-semibold text-black">03.</span>
<div className="mt-auto">
<h3 className="leading-tight text-sm font-semibold text-black tracking-tight">WE ARE ALL WE HAVE BTS SHOOT</h3>
<p className="text-[10px] uppercase group-hover:text-black transition-colors font-medium text-neutral-500 tracking-wide mt-1">[PERSONAL WORK]</p>
</div>
</div>

<div className="w-full h-[600px] overflow-hidden bg-neutral-100 relative">
<img alt="Louis Poulsen" className="transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3eec2069-718d-40ca-a992-f82546b8186a_1600w.png?w=800&amp;q=80"/>
</div>
</div>

<div className="flex flex-col w-[260px] md:w-[320px] shrink-0 snap-start group cursor-pointer">
<div className="flex flex-col justify-between h-20 mb-6 border-t border-transparent group-hover:border-black transition-colors duration-300 pt-2">
<span className="text-xs font-semibold text-black">04.</span>
<div className="mt-auto">
<h3 className="leading-tight text-sm font-semibold text-black tracking-tight">KADUNA MARATHON</h3>
<p className="text-[10px] text-neutral-500 font-medium uppercase tracking-wide mt-1 group-hover:text-black transition-colors">[CLIENT WORK]</p>
</div>
</div>
<div className="w-full h-[380px] overflow-hidden bg-neutral-100">
<img alt="Glossier" className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d1b2381-d36d-482e-9103-3c38ff60c261_800w.jpg?w=800&amp;q=80"/>
</div>
</div>

<div className="flex flex-col w-[260px] md:w-[320px] shrink-0 snap-start group cursor-pointer">
<div className="flex flex-col justify-between h-20 mb-6 border-t border-transparent group-hover:border-black transition-colors duration-300 pt-2">
<span className="text-xs font-semibold text-black">05.</span>
<div className="mt-auto">
<h3 className="leading-tight text-sm font-semibold text-black tracking-tight">BIG JESS</h3>
<p className="text-[10px] text-neutral-500 font-medium uppercase tracking-wide mt-1 group-hover:text-black transition-colors">[CLIENT WORK]</p>
</div>
</div>
<div className="w-full h-[380px] overflow-hidden bg-neutral-100">
<img alt="SONA" className="group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4edefd70-c98c-437c-80b5-bb6dcd807167_800w.jpg"/>
</div>
</div>

<div className="flex flex-col w-[260px] md:w-[320px] shrink-0 snap-start group cursor-pointer pr-8">
<div className="flex flex-col justify-between h-20 mb-6 border-t border-transparent group-hover:border-black transition-colors duration-300 pt-2">
<span className="text-xs font-semibold text-black">06.</span>
<div className="mt-auto">
<h3 className="leading-tight text-sm font-semibold text-black tracking-tight">HEALING SOUNDS</h3>
<p className="text-[10px] uppercase group-hover:text-black transition-colors font-medium text-neutral-500 tracking-wide mt-1">[PERSONAL WORK]</p>
</div>
</div>
<div className="w-full h-[380px] overflow-hidden bg-neutral-100">
<img alt="SESE" className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/21247a85-7ceb-4d4c-a11f-300d0e4fca08_800w.jpg"/>
</div>
</div>
<div className="flex flex-col w-[260px] md:w-[320px] shrink-0 snap-start group cursor-pointer pr-8">
<div className="flex flex-col justify-between h-20 mb-6 border-t border-transparent group-hover:border-black transition-colors duration-300 pt-2">
<span className="text-xs font-semibold text-black">07.</span>
<div className="mt-auto">
<h3 className="leading-tight text-sm font-semibold text-black tracking-tight">MR. INCREDIBLE</h3>
<p className="text-[10px] uppercase group-hover:text-black transition-colors font-medium text-neutral-500 tracking-wide mt-1">[CLIENT WORK]</p>
</div>
</div>
<div className="w-full h-[380px] overflow-hidden bg-neutral-100">
<img alt="Aesop Signature" className="transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08325f08-9370-4b33-a225-6867bb761671_800w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="flex flex-col bg-white w-full pt-20 pb-32 relative" id="video-works">

<div aria-modal="true" className="fixed inset-0 z-[9999] hidden opacity-0 transition-opacity duration-500 ease-in-out" id="video-modal" role="dialog">

<div className="absolute inset-0 bg-black/90 backdrop-blur-md" onclick="closeVideoModal()"></div>

<button className="absolute top-6 right-6 z-[10000] text-white/70 hover:text-white transition-colors duration-200 group p-2" onclick="closeVideoModal()">
<span className="sr-only">Close modal</span>
<svg className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>

<div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 pointer-events-none">
<div className="w-full max-w-7xl aspect-video relative shadow-2xl pointer-events-auto bg-black overflow-hidden rounded-sm">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" id="modal-iframe" src="" title="Video Player"></iframe>
</div>
</div>
</div>



<div className="px-6 md:px-8 mb-16 w-full max-w-[1920px] mx-auto">
<div className="text-[10px] font-semibold uppercase tracking-widest text-neutral-400">[MOTION &amp; FILM]</div>
</div>

<div className="md:px-8 grid grid-cols-1 md:grid-cols-2 w-full max-w-[1920px] mr-auto ml-auto pr-6 pl-6 gap-x-10 gap-y-20">

<div className="flex flex-col w-full group">
<div className="flex flex-col justify-between h-20 mb-6 border-t border-neutral-200 group-hover:border-black transition-colors duration-300 pt-2">
<span className="text-xs font-semibold text-black">08.</span>
<div className="mt-auto">
<h3 className="text-sm font-semibold leading-tight tracking-tight text-black">Kinetic Typography</h3>
<p className="text-[10px] text-neutral-500 font-medium uppercase tracking-wide mt-1 group-hover:text-black transition-colors">[SHOWREEL]</p>
</div>
</div>
<div className="w-full aspect-video bg-neutral-900 overflow-hidden relative cursor-pointer group/video" onclick="openVideoModal('https://www.youtube.com/embed/tO01J-M3g0U')">
<img alt="Kinetic Typography" className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 group-hover/video:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1614850523060-8da1d56ae167?w=1600&amp;q=80"/>

<div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform duration-500 ease-out shadow-lg">
<svg className="w-8 h-8 text-white ml-1" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>
</div>

<div className="flex flex-col w-full group">
<div className="flex flex-col group-hover:border-black transition-colors duration-300 h-20 border-neutral-200 border-t mb-6 pt-2 justify-between">
<span className="text-xs font-semibold text-black">09.</span>
<div className="mt-auto">
<h3 className="text-sm font-semibold leading-tight tracking-tight text-black">Abstract Dynamics</h3>
<p className="text-[10px] text-neutral-500 font-medium uppercase tracking-wide mt-1 group-hover:text-black transition-colors">[ART DIRECTION]</p>
</div>
</div>
<div className="w-full aspect-video bg-neutral-900 overflow-hidden relative cursor-pointer group/video" onclick="openVideoModal('https://www.youtube.com/embed/LXb3EKWsInQ')">
<img alt="Abstract Dynamics" className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 group-hover/video:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform duration-500 ease-out shadow-lg">
<svg className="w-8 h-8 text-white ml-1" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>
</div>

<div className="flex flex-col w-full group">
<div className="flex flex-col justify-between h-20 mb-6 border-t border-neutral-200 group-hover:border-black transition-colors duration-300 pt-2">
<span className="text-xs font-semibold text-black">10.</span>
<div className="mt-auto">
<h3 className="text-sm font-semibold leading-tight tracking-tight text-black">Digital Frontiers</h3>
<p className="text-[10px] uppercase group-hover:text-black transition-colors font-medium text-neutral-500 tracking-wide mt-1">[INSTALLATION]</p>
</div>
</div>
<div className="w-full aspect-video bg-neutral-900 overflow-hidden relative cursor-pointer group/video" onclick="openVideoModal('https://www.youtube.com/embed/ysz5S6PUM-U')">
<img alt="Digital Frontiers" className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 group-hover/video:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform duration-500 ease-out shadow-lg">
<svg className="w-8 h-8 text-white ml-1" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>
</div>

<div className="flex flex-col w-full group">
<div className="flex flex-col group-hover:border-black transition-colors duration-300 h-20 border-neutral-200 border-t mb-6 pt-2 justify-between">
<span className="text-xs font-semibold text-black">11.</span>
<div className="mt-auto">
<h3 className="text-sm font-semibold leading-tight tracking-tight text-black">Future Interfaces</h3>
<p className="text-[10px] text-neutral-500 font-medium uppercase tracking-wide mt-1 group-hover:text-black transition-colors">[UI MOTION]</p>
</div>
</div>
<div className="w-full aspect-video bg-neutral-900 overflow-hidden relative cursor-pointer group/video" onclick="openVideoModal('https://www.youtube.com/embed/Q4Xcfy3rRZs')">
<img alt="Future Interfaces" className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 group-hover/video:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors duration-500"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform duration-500 ease-out shadow-lg">
<svg className="w-8 h-8 text-white ml-1" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>
</div>

<div className="flex flex-col w-full group">
<div className="flex flex-col group-hover:border-black transition-colors duration-300 h-20 border-neutral-200 border-t mb-6 pt-2 justify-between">
<span className="text-xs font-semibold text-black">12.</span>
<div className="mt-auto">
<h3 className="text-sm font-semibold leading-tight tracking-tight text-black">Neural Synthetics</h3>
<p className="text-[10px] text-neutral-500 font-medium uppercase tracking-wide mt-1 group-hover:text-black transition-colors">[AI RESEARCH]</p>
</div>
</div>
<div className="w-full aspect-video bg-neutral-900 overflow-hidden relative cursor-pointer group/video" onclick="openVideoModal('https://www.youtube.com/embed/LXb3EKWsInQ')">
<img alt="Neural Synthetics" className="w-full h-full object-cover opacity-80 group-hover/video:opacity-100 group-hover/video:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover/video:bg-black/10 transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover/video:scale-110 transition-transform duration-500 ease-out shadow-lg">
<svg className="w-8 h-8 text-white ml-1" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-8 overflow-hidden text-black bg-[#F2F1EC] w-full pt-24 pr-6 pb-24 pl-6 relative" id="contact">
<div className="max-w-[1920px] mx-auto w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-20">

<div className="flex flex-col w-full lg:w-2/3">

<div className="font-instrument-serif text-[18vw] lg:text-[14vw] leading-[0.8] tracking-tighter uppercase mix-blend-darken select-none">
<div className="" style={{}}>Get in</div>
<div className="flex gap-2 md:gap-6 gap-x-2 gap-y-2 items-center">
<img alt="Logo Placeholder" className="h-[8.5vw] lg:w-[11vw] lg:h-[7vw] shrink-0 w-[14vw] object-contain mt-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/210eccfb-66fd-4bba-80f9-05715c6ad1b9_1600w.png?w=800&amp;q=80"/>
<span className="">Touch</span>
</div>
</div>

<div className="mt-20 lg:mt-32">
<a className="text-xl md:text-3xl lg:text-4xl font-normal border-b border-black pb-1 hover:text-neutral-600 hover:border-neutral-600 transition-colors inline-block font-inter" href="mailto:create@multimudia.studio">
                        create@multimudia.studio
                    </a>
</div>
</div>

<div className="flex flex-col w-full lg:w-1/3 mt-8 lg:mt-4 space-y-12 lg:pl-12">

<p className="text-lg md:text-xl font-normal leading-relaxed text-neutral-800 max-w-md font-inter">
                    We genuinely care about you and your vision. Let us know how we can serve you better.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">


<div className="flex flex-col space-y-4">
</div>
</div>
</div>
</div>
<div className="h-24"></div> 
</section>


    </>
  );
}
