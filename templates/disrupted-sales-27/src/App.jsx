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



        // Initialize Lucide icons
        lucide.createIcons();

        // Parallax Scroll Effect
        document.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const layers = document.querySelectorAll('.parallax-layer');

            layers.forEach(layer => {
                const speed = parseFloat(layer.getAttribute('data-speed')) || 0;
                const yPos = -(scrollY * speed);
                layer.style.transform = `translateY(${yPos}px)`;
            });
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] blur-[120px] rounded-full mix-blend-multiply animate-pulse bg-purple-200/40"></div>
<div className="absolute top-0 left-0 w-full h-full pixel-grid opacity-50"></div>

<div className="parallax-layer absolute top-[10%] left-[5%] w-16 h-16 bg-blue-200/50" data-speed="0.2" style={{transform: 'translateY(0px)'}}></div>
<div className="parallax-layer absolute top-[15%] left-[8%] w-16 h-16 bg-blue-300/30" data-speed="0.3" style={{transform: 'translateY(0px)'}}></div>
<div className="parallax-layer absolute bottom-[20%] right-[10%] w-24 h-24 bg-blue-200/60" data-speed="-0.2" style={{transform: 'translateY(0px)'}}></div>
<div className="parallax-layer absolute top-[40%] right-[5%] w-12 h-12 bg-purple-200/50" data-speed="0.1" style={{transform: 'translateY(0px)'}}></div>
<div className="parallax-layer absolute bottom-[10%] left-[15%] w-20 h-20 bg-blue-200/40" data-speed="0.4" style={{transform: 'translateY(0px)'}}></div>

<div className="absolute top-0 right-0 w-64 h-64 flex flex-wrap opacity-30">
<div className="w-12 h-12 m-1 bg-blue-400" style={{}}></div>
<div className="w-12 h-12 bg-transparent m-1"></div>
<div className="w-12 h-12 m-1 bg-blue-300" style={{}}></div>
<div className="w-12 h-12 m-1 bg-blue-200" style={{}}></div>
</div>
<div className="absolute bottom-0 left-0 w-64 h-64 flex flex-wrap-reverse opacity-30">
<div className="w-12 h-12 m-1 bg-blue-400" style={{}}></div>
<div className="w-12 h-12 m-1 bg-blue-300" style={{}}></div>
<div className="w-12 h-12 bg-transparent m-1"></div>
<div className="w-12 h-12 m-1 bg-blue-200" style={{}}></div>
</div>
</div>

<nav className="z-50 flex w-full max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="flex space-x-4 items-center">

<svg className="fill-current w-[28px] h-[28px]" data-icon-replaced="true" data-icon-set="logos" data-logos="angellist" height="28" strokeWidth="2" style={{color: 'rgb(15, 23, 42)', width: '28px', height: '28px'}} viewbox="0 0 256 369" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M214.9 157.358c15.265 2.348 25.834 9.394 31.706 18.789c5.871 9.394 9.394 25.835 9.394 46.972c0 42.275-12.917 77.505-38.752 104.514c-25.835 27.01-58.716 41.1-98.642 41.1c-15.267 0-30.533-2.348-45.799-8.22c-15.266-5.87-27.009-14.091-37.578-23.485c-11.743-10.57-21.137-23.487-27.009-35.23C3.523 288.881 0 275.963 0 263.046c0-14.092 3.523-25.835 9.394-34.055s16.44-12.918 29.358-16.44c-2.348-5.872-4.697-10.57-5.871-15.267c-1.175-3.523-2.349-7.045-2.349-9.394c0-7.046 3.523-15.266 11.743-23.486s15.266-11.743 22.312-11.743c3.523 0 5.872 0 9.395 1.174s7.046 2.348 11.743 5.871c-10.569-35.229-21.138-64.587-27.01-84.55s-8.22-32.88-8.22-41.101c0-10.569 2.349-18.789 8.22-24.66C63.414 3.522 71.634 0 81.029 0c15.266 0 35.229 35.23 59.89 106.862c4.697 11.744 7.045 21.138 9.394 28.184c2.349-4.697 4.697-12.918 8.22-22.312C183.192 42.275 204.33 7.046 220.771 7.046c8.22 0 15.266 2.348 21.137 8.22c4.698 5.872 8.22 14.092 8.22 23.486c0 7.046-2.348 21.138-8.22 41.101c-7.046 19.964-15.266 45.798-27.009 77.505M34.054 260.698c2.349 2.348 5.872 7.045 9.395 12.917C54.018 288.88 64.587 297.1 73.982 297.1c3.523 0 5.871-1.174 8.22-3.523c2.348-2.349 3.523-4.697 3.523-5.872c0-2.348-1.175-7.045-4.697-12.917s-8.22-12.917-14.092-19.963c-7.046-8.22-12.918-15.266-16.44-18.79c-4.698-3.522-8.22-5.87-10.57-5.87c-5.871 0-11.743 3.522-16.44 9.394s-7.046 14.091-7.046 22.312c0 7.045 1.175 14.091 4.698 23.486c3.523 8.22 8.22 17.614 15.266 25.835c10.568 11.743 22.312 22.312 37.578 29.357c15.266 7.046 30.532 10.57 49.32 10.57c32.881 0 59.89-11.744 82.203-36.404c22.312-24.661 32.88-55.193 32.88-92.771c0-11.743-1.174-19.963-2.348-27.01c-1.175-7.045-4.698-11.742-8.22-14.091c-7.046-5.872-19.964-10.569-39.927-15.266s-41.101-7.046-62.239-7.046c-5.871 0-10.568 1.174-12.917 3.523q-3.523 3.524-3.523 10.569c0 11.743 5.872 19.963 18.789 24.66c12.917 4.698 34.055 8.22 62.239 8.22h10.568c2.349 0 4.698 1.175 5.872 2.35c1.174 2.348 2.349 4.696 2.349 8.22c-2.35 2.348-8.22 5.871-17.615 9.394s-15.266 7.046-19.963 10.569c-10.57 7.046-18.79 16.44-24.661 27.009s-9.395 19.963-9.395 29.358c0 5.871 1.175 11.743 3.523 19.963q3.524 12.33 3.523 14.092v4.697c-7.046 0-12.917-4.697-17.614-12.917s-5.872-18.79-5.872-32.881v-2.349c-1.174 1.174-2.348 2.349-3.523 2.349c-1.174 0-2.348 1.174-4.697 1.174h-4.697c-1.175 0-2.349-1.174-4.698-1.174c0 2.348 1.175 3.523 1.175 5.871v4.698c0 5.871-2.349 11.743-7.046 16.44q-7.046 7.046-17.615 7.046c-10.569 0-21.137-4.697-32.88-15.266c-10.57-10.569-16.44-19.964-16.44-30.532c0-2.349 0-3.523 1.173-4.698c0-5.871 1.175-7.045 2.349-8.22m76.33 5.87c2.349 0 5.872-1.174 8.22-3.522c2.35-2.349 3.523-5.872 3.523-8.22c0-3.523-2.348-10.57-7.045-22.312c-4.698-11.743-10.57-23.486-17.615-34.055c-4.697-8.22-10.569-15.266-15.266-18.79c-4.697-4.697-9.395-5.87-14.092-5.87c-3.523 0-7.046 2.348-11.743 7.045s-5.872 8.22-5.872 12.917c0 3.523 2.349 10.57 5.872 18.79c4.697 8.22 9.394 16.44 16.44 25.834C79.853 247.78 86.9 256 93.945 261.872c7.046 2.348 11.743 4.697 16.44 4.697m24.66-122.128l-28.183-78.679c-7.045-19.963-11.743-34.055-16.44-39.926c-3.523-5.872-7.046-9.395-11.743-9.395c-3.523 0-5.872 1.175-8.22 3.523c-3.523 3.523-4.698 7.046-4.698 11.743c0 8.22 3.523 21.138 9.395 39.927s15.266 44.624 27.01 75.156c1.173-2.349 2.348-3.523 4.696-3.523c2.349-1.174 4.698-1.174 7.046-1.174h5.872c3.523 1.174 8.22 1.174 15.266 2.348m28.184 76.33c-7.046 0-14.091-1.174-21.137-2.348s-12.918-2.349-18.79-4.697c2.35 5.871 4.698 10.569 7.047 16.44s3.523 10.569 4.697 16.44c3.523-4.697 8.22-9.394 12.917-14.091c5.872-4.697 10.57-8.22 15.266-11.743m34.055-68.11c11.744-30.532 19.964-56.366 27.01-76.33c5.871-19.963 9.394-31.706 9.394-36.403c0-4.698-1.174-8.22-3.523-11.744c-2.348-2.348-4.697-3.522-8.22-3.522c-4.697 0-9.395 3.522-14.092 11.743s-10.569 19.963-16.44 37.578l-25.835 72.807z"></path></svg>

</div>
<button className="p-3 rounded-full hover:scale-105 transition-transform bg-slate-900 text-white" style={{}}>
<svg className="lucide lucide-menu w-5 h-5 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<main className="min-h-[120vh] flex flex-col overflow-hidden w-full z-10 pt-12 pb-32 relative items-center justify-start">

<div className="parallax-layer absolute top-20 right-[10%] md:right-[15%] z-20" data-speed="-0.05" style={{transform: 'translateY(0px)'}}>
<img alt="Face" className="md:w-28 md:h-28 w-20 h-20 object-cover border-white border-4 rounded-full shadow-xl rotate-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df5ea66b-35c7-4560-805d-82197bc89d86_320w.webp" style={{}}/>
</div>

<div className="parallax-layer absolute bottom-[20%] left-[5%] md:left-[10%] z-20" data-speed="0.08" style={{transform: 'translateY(0px)'}}>
<div className="relative">
<img alt="Face" className="md:w-40 md:h-40 w-24 h-24 object-cover border-white border-4 rounded-full shadow-xl -rotate-3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaf5a301-1330-416d-a976-390e8be1e69a_800w.webp"/>
</div>
</div>

<div className="parallax-layer absolute top-[35%] left-[2%] md:left-[15%] z-10" data-speed="-0.1" style={{transform: 'translateY(0px)'}}>
<img alt="Face" className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover border-4 shadow-lg rotate-12 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdf84b9f-c475-4ada-8b00-aa3c4d95ca04_320w.webp" style={{}}/>
</div>

<div className="parallax-layer absolute bottom-[25%] right-[5%] z-20" data-speed="0.12" style={{transform: 'translateY(0px)'}}>
<img alt="Face" className="w-28 h-28 md:w-44 md:h-44 rounded-full object-cover border-4 shadow-xl rotate-[-6deg] border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_800w.webp" style={{}}/>
</div>

<div className="relative mb-6 group cursor-default parallax-layer" data-speed="0.02" style={{transform: 'translateY(0px)'}}>
<div className="absolute -left-2 -top-2 w-3 h-3 bg-blue-500 rounded-full z-10" style={{}}></div>
<div className="absolute -right-2 -top-2 w-3 h-3 bg-blue-500 rounded-full z-10" style={{}}></div>
<div className="absolute -left-2 -bottom-2 w-3 h-3 bg-blue-500 rounded-full z-10" style={{}}></div>
<div className="absolute -right-2 -bottom-2 w-3 h-3 bg-blue-500 rounded-full z-10" style={{}}></div>
<div className="backdrop-blur-sm border px-8 py-2 md:px-12 md:py-4 bg-blue-400/20 border-blue-400" style={{}}>
<h2 className="md:text-5xl uppercase text-2xl font-light text-black tracking-widest drop-shadow-sm">
                    WEB 3.0 DIED
                </h2>
</div>

<div className="absolute top-0 left-0 w-full h-full border-t border-b border-blue-500 pointer-events-none" style={{}}></div>
</div>

<div className="text-center flex flex-col items-center leading-[0.85] md:leading-[0.8] z-30 mix-blend-darken">
<h1 className="text-[14vw] md:text-[11rem] font-medium tracking-tighter parallax-layer text-slate-900" data-speed="0.05" style={{transform: 'translateY(0px)'}}>
                disrupted
            </h1>
<div className="flex flex-wrap justify-center items-baseline gap-4 md:gap-8 w-full parallax-layer" data-speed="0.07" style={{transform: 'translateY(0px)'}}>
<h1 className="text-[14vw] md:text-[11rem] font-medium tracking-tighter text-slate-900" style={{}}>
                    the sales
                </h1>
</div>
<div className="flex flex-col md:flex-row items-center justify-center relative parallax-layer" data-speed="0.09" style={{transform: 'translateY(0px)'}}>
<h1 className="text-[14vw] md:text-[11rem] font-medium tracking-tighter z-10 text-slate-900" style={{}}>
                    pipeline
                </h1>

<div className="md:absolute md:-right-24 md:top-10 mt-4 md:mt-0 bg-[#00FF00] px-4 py-1 md:px-6 md:py-2 -rotate-6 shadow-lg border z-20 hover:rotate-0 transition-transform duration-300 border-black">
<span className="text-lg md:text-3xl font-sans tracking-tight block whitespace-nowrap text-black">(vol. 03)</span>
</div>
</div>
<div className="mt-12 md:mt-16 parallax-layer" data-speed="0.12" style={{transform: 'translateY(0px)'}}>
<p className="font-serif-italic text-6xl md:text-9xl drop-shadow-sm text-slate-900" style={{}}>
                    What's next?
                </p>
</div>
</div>
</main>

<div className="fixed bottom-8 right-8 z-50">
<button className="w-14 h-14 backdrop-blur rounded-full border shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-200 group bg-white/80 border-slate-200 hover:bg-white" style={{}}>
<svg className="lucide lucide-share-2 w-6 h-6 stroke-[1.5] group-hover:text-blue-600 text-slate-800" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>



    </>
  );
}
