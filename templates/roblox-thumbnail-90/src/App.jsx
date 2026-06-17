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



tailwind.config = {
darkMode: 'class',
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
page: '#0f0202', // Deep red/black bg
card: '#140505', // Card bg
stroke: '#2b0b0b',
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
},
red: {
400: '#f87171',
500: '#ef4444',
600: '#dc2626',
900: '#7f1d1d',
950: '#450a0a',
}
},
animation: {
'scroll': 'scroll 30s linear infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



      // Page Router Logic
      function switchPage(pageId) {
          document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
          const target = document.getElementById(pageId + '-page');
          if(target) target.classList.remove('hidden');

          document.querySelectorAll('.nav-link').forEach(el => {
              if(el.dataset.target === pageId) {
                  el.classList.remove('text-red-200/60');
                  el.classList.add('text-red-400');
              } else if(el.dataset.target) {
                  el.classList.add('text-red-200/60');
                  el.classList.remove('text-red-400');
              }
          });
          window.scrollTo(0,0);
      }

      // Lightbox Logic
      function openLightbox(element) {
          const img = element.querySelector('img');
          const modal = document.getElementById('image-modal');
          const modalImg = document.getElementById('modal-img');
          
          if(img && modal && modalImg) {
              modalImg.src = img.src;
              modal.classList.remove('hidden');
              document.body.style.overflow = 'hidden';
          }
      }

      function closeLightbox() {
          const modal = document.getElementById('image-modal');
          if(modal) {
              modal.classList.add('hidden');
              document.body.style.overflow = '';
          }
      }

      // Slider Logic
      const range = document.getElementById('slider-range');
      if(range) {
          const container = document.getElementById('slider-container');
          const beforeImage = document.getElementById('before-image');
          const beforeImageInner = document.getElementById('before-image-inner');
          const handle = document.getElementById('slider-handle');

          function updateSlider(val) {
              const percentage = val + '%';
              beforeImage.style.width = percentage;
              handle.style.left = percentage;
          }

          range.addEventListener('input', (e) => updateSlider(e.target.value));

          function resizeInnerImage() {
              if(container && beforeImageInner) {
                  beforeImageInner.style.width = container.offsetWidth + 'px';
              }
          }
          window.addEventListener('resize', resizeInnerImage);
          window.addEventListener('load', resizeInnerImage);
          setTimeout(resizeInnerImage, 100); 
      }

      // Default load
      switchPage('about');
    
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
      

<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0f0202]/80 backdrop-blur-xl">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
<div className="flex gap-2 items-center cursor-pointer group" onclick="switchPage('home')">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-500/20 group-hover:scale-105 transition-transform">
<iconify-icon className="" icon="solar:gallery-bold" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold text-white tracking-tight">
            StrawBerrie
          </span>
</div>
<div className="hidden gap-8 md:flex gap-x-8 gap-y-8">
<button className="nav-link text-sm font-medium transition-colors hover:text-red-400 text-red-200/60" data-target="home" onclick="switchPage('home')">Home</button>
<button className="nav-link transition-colors hover:text-red-400 text-sm font-medium text-red-200/60" data-target="work" onclick="switchPage('work')">Work</button>
<button className="nav-link transition-colors hover:text-red-400 text-sm font-medium text-red-400" data-target="about" onclick="switchPage('about')">About</button>
<button className="nav-link transition-colors hover:text-red-400 text-sm font-medium text-red-200/60" data-target="pricing" onclick="switchPage('pricing')">Pricing</button>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex group relative items-center gap-2 rounded-full border border-red-500/20 bg-red-950/30 px-4 py-2 text-sm font-medium transition-all hover:border-red-500/50 hover:bg-red-900/40 hover:text-red-200 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)]" onclick="switchPage('contact')">
<span>Get In Contact</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

    \
      
<div className="pointer-events-none absolute inset-0 -z-10 flex justify-center overflow-hidden fixed">
<div className="absolute top-[-10%] h-[600px] w-[600px] rounded-full bg-red-600/10 blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-red-800/5 blur-[100px]"></div>
</div>

<div className="page-section bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-[#5f0c0c] to-[#000000] hidden" id="home-page">

<section className="lg:px-8 text-center max-w-7xl mr-auto ml-auto pt-12 pb-16">
<div className="inline-flex gap-2 bg-red-950/20 border-red-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
</span>
<span className="uppercase text-xs font-semibold text-red-200/80 tracking-wide">
              Comms Open
            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight max-w-5xl mx-auto leading-[1.1]" style={{}}></h1>
<p className="leading-relaxed md:text-xl text-lg text-red-200/60 max-w-2xl mt-8 mr-auto ml-auto"></p>

<div className="mx-auto mt-16 max-w-5xl relative z-10">
<div className="group aspect-video overflow-hidden rounded-2xl bg-black w-full border border-white/10 relative shadow-2xl shadow-red-900/10" id="slider-container">

<div className="absolute inset-0 h-full w-full">
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c530632-4b7d-4223-a649-667760a106ce_1600w.png"/>
<div className="absolute right-4 top-4 rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/10">
                  After
                </div>
</div>

<div className="absolute inset-0 h-full w-[50%] overflow-hidden border-r border-red-500 bg-zinc-900" id="before-image" style={{width: '79%'}}>
<img className="absolute left-0 top-0 h-full max-w-none object-cover opacity-60 mix-blend-luminosity grayscale" id="before-image-inner" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d0a93c1-18e1-4fe1-8533-cfe3a89b9240_1600w.png" style={{width: '0px'}}/>
<div className="absolute left-4 top-4 rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md border border-white/10">
                  Before
                </div>
</div>

<input className="z-20 cursor-ew-resize opacity-0 w-full h-full absolute top-0 right-0 bottom-0 left-0" id="slider-range" max="100" min="0" type="range" value="50"/>
<div className="absolute inset-y-0 left-[50%] z-10 flex w-1 translate-x-[-50%] items-center justify-center bg-red-500 shadow-[0_0_20px_rgba(239,68,68,1)]" id="slider-handle" style={{left: '79%'}}>
<div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-600 text-white shadow-lg">
<iconify-icon icon="solar:code-scan-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-black/40 border-white/5 pt-10 pb-10 backdrop-blur-sm">
<div className="mask-linear-fade w-full relative">
<div className="flex w-max animate-scroll items-center gap-10 px-4">

<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/JHWxizq4bp3UeVw2_coQFmt-5AOy1ZaMIEjREGvJvBtcELNk5m6nREjfFAeJ6GdC83CTS3gC=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Applino</span>
<span className="text-xs font-medium text-red-400">450K+ Subs</span>
</div>
</div>
<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/_OBhSQ9nErhDSB551EJo0seJjEhWZI-_ugC8Q5bMMPWlTW3F7O58B-9BDtiZpN5_cAJikEa4=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Mitch</span>
<span className="text-xs font-medium text-red-400">320K+ Subs</span>
</div>
</div>
<div className="flex gap-4 hover:bg-white/10 hover:border-red-500/30 transition-colors bg-white/5 border-white/5 border rounded-full pt-3 pr-8 pb-3 pl-3 gap-x-4 gap-y-4 items-center">
<img className="w-12 h-12 object-cover bg-center rounded-full" src="https://yt3.googleusercontent.com/U-K2bHiszqmU1g7gmTlMR4a17hCxj81Aq35voFtttXnDe6EimU3Z0-uV1Thm_nAs9vHWC9UWTg=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Foltyn</span>
<span className="text-xs font-medium text-red-400" style={{}}>10M+ Subs</span>
</div>
</div>
<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="w-12 h-12 rounded-full" src="https://yt3.googleusercontent.com/ytc/AIdro_nroVvwtUqkQbxr22X8bpy06QeirDqlvMC8zEave3fWaIA=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">TanqR</span>
<span className="text-xs font-medium text-red-400" style={{}}>5M+ Subs</span>
</div>
</div>
<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/oQg70kTmsY4uPuTsZgKm_bn2QGdEeHRVQQTo9vKoPgAcgzTAhWY97ra_nWjbqttdXxtcDuMOdw=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Uzoth</span>
<span className="text-xs font-medium text-red-400" style={{}}>4M+ Subs</span>
</div>
</div>

<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/JHWxizq4bp3UeVw2_coQFmt-5AOy1ZaMIEjREGvJvBtcELNk5m6nREjfFAeJ6GdC83CTS3gC=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Applino</span>
<span className="text-xs font-medium text-red-400" style={{}}>150K+ Subs</span>
</div>
</div>
<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/_OBhSQ9nErhDSB551EJo0seJjEhWZI-_ugC8Q5bMMPWlTW3F7O58B-9BDtiZpN5_cAJikEa4=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Mitch</span>
<span className="text-xs font-medium text-red-400">2M+ Subs</span>
</div>
</div>
<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="w-12 h-12 object-cover bg-center rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57a07b43-c57c-4856-b55b-af4449889bc2_320w.jpg"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Foltyn</span>
<span className="bg-center text-xs font-medium text-red-400">10M+ Subs</span>
</div>
</div>
<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/ytc/AIdro_nroVvwtUqkQbxr22X8bpy06QeirDqlvMC8zEave3fWaIA=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">TanqR</span>
<span className="text-xs font-medium text-red-400">5M+ Subs</span>
</div>
</div>
<div className="flex gap-4 hover:bg-white/10 hover:border-red-500/30 transition-colors bg-white/5 border-white/5 border rounded-full pt-3 pr-8 pb-3 pl-3 gap-x-4 gap-y-4 items-center">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/oQg70kTmsY4uPuTsZgKm_bn2QGdEeHRVQQTo9vKoPgAcgzTAhWY97ra_nWjbqttdXxtcDuMOdw=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Uzoth</span>
<span className="text-xs font-medium text-red-400">4M+ Subs</span>
</div>
</div>

<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/JHWxizq4bp3UeVw2_coQFmt-5AOy1ZaMIEjREGvJvBtcELNk5m6nREjfFAeJ6GdC83CTS3gC=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Applino</span>
<span className="text-xs font-medium text-red-400">150K+ Subs</span>
</div>
</div>
<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/_OBhSQ9nErhDSB551EJo0seJjEhWZI-_ugC8Q5bMMPWlTW3F7O58B-9BDtiZpN5_cAJikEa4=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Mitch</span>
<span className="text-xs font-medium text-red-400">2m+ Subs</span>
</div>
</div>
<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="w-12 h-12 object-cover bg-center rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57a07b43-c57c-4856-b55b-af4449889bc2_320w.jpg"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Foltyn</span>
<span className="text-xs font-medium text-red-400">4.2M+ Subs</span>
</div>
</div>
<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/ytc/AIdro_nroVvwtUqkQbxr22X8bpy06QeirDqlvMC8zEave3fWaIA=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">TanqR</span>
<span className="text-xs font-medium text-red-400">3.1M+ Subs</span>
</div>
</div>
<div className="flex items-center gap-4 rounded-full border border-white/5 bg-white/5 py-3 pl-3 pr-8 hover:bg-white/10 hover:border-red-500/30 transition-colors">
<img className="h-12 w-12 rounded-full" src="https://yt3.googleusercontent.com/oQg70kTmsY4uPuTsZgKm_bn2QGdEeHRVQQTo9vKoPgAcgzTAhWY97ra_nWjbqttdXxtcDuMOdw=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="flex flex-col">
<span className="text-base font-bold text-white">Uzoth</span>
<span className="text-xs font-medium text-red-400">1.5M+ Subs</span>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-8 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="flex mb-10 items-end justify-between">
<div className="">
<h2 className="text-2xl font-semibold text-white tracking-tight">Recent work</h2>
<p className="text-sm text-red-400 font-medium mt-1">Updates weekly!</p>
</div>
<button className="text-xs font-semibold uppercase tracking-wider text-white/50 hover:text-white transition-colors flex items-center gap-1" onclick="switchPage('work')">
              View All <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group aspect-[16/9] cursor-pointer overflow-hidden transition-all hover:border-red-500/50 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.4)] border-white/10 border rounded-2xl relative" onclick="switchPage('work')">
<img className="transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4b1ce50a-b97e-46cb-89db-339348f6a358_800w.png"/>
<div className="group-hover:opacity-40 transition-opacity bg-center opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="group-hover:translate-y-0 transition-transform pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 translate-y-2">
<span className="inline-block text-[10px] uppercase font-bold text-white tracking-wider bg-red-600 rounded-md mb-2 pt-0.5 pr-2 pb-0.5 pl-2 shadow-lg" style={{}}>300K Views</span>
<h3 className="leading-tight text-lg font-semibold text-white" style={{}}>Philhood</h3>
</div>
</div>

<div className="group aspect-[16/9] cursor-pointer overflow-hidden transition-all hover:border-red-500/50 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.4)] border-white/10 border rounded-2xl relative" onclick="switchPage('work')">
<img className="transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c530632-4b7d-4223-a649-667760a106ce_800w.png"/>
<div className="group-hover:opacity-40 transition-opacity bg-center opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
<span className="inline-block text-[10px] uppercase font-bold text-white tracking-wider bg-purple-600 rounded-md mb-2 pt-0.5 pr-2 pb-0.5 pl-2 shadow-lg" style={{}}>200k Views (20x Outlier)</span>
<h3 className="leading-tight text-lg font-semibold text-white">StrawBerrie Creates</h3>
</div>
</div>

<div className="group aspect-[16/9] cursor-pointer overflow-hidden transition-all hover:border-red-500/50 hover:shadow-[0_0_40px_-10px_rgba(220,38,38,0.4)] border-white/10 border rounded-2xl relative" onclick="switchPage('work')">
<img className="transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14dcee7e-bb3f-4265-afab-ec38a7200eda_800w.png"/>
<div className="group-hover:opacity-40 transition-opacity bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-500/10 via-blue-500/0 to-blue-500/10 opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="group-hover:translate-y-0 transition-transform pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 translate-y-2">
<span className="inline-block text-[10px] uppercase font-bold text-white tracking-wider bg-blue-600 rounded-md mb-2 pt-0.5 pr-2 pb-0.5 pl-2 shadow-lg" style={{}}>2M Views</span>
<h3 className="leading-tight text-lg font-semibold text-white" style={{}}>Foltyn</h3>
</div>
</div>
</div>
</section>

<section className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pb-32 pl-6">
<div className="mb-10">
<h2 className="text-2xl font-semibold text-white tracking-tight">Client Feedback</h2>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 gap-x-6 gap-y-6">

<div className="break-inside-avoid rounded-2xl border border-white/5 bg-black p-6 hover:border-red-500/20 transition-colors">
<div className="flex items-center gap-3 mb-4">
<img className="w-10 h-10 object-cover bg-center border-white/10 border rounded-full" src="https://yt3.googleusercontent.com/ytc/AIdro_nroVvwtUqkQbxr22X8bpy06QeirDqlvMC8zEave3fWaIA=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="">
<h4 className="text-sm font-semibold text-white">Tanqr</h4>
<p className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium">YouTuber</p>
</div>
<div className="ml-auto flex text-yellow-500 gap-0.5 text-[10px]">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="leading-relaxed text-sm text-zinc-400" style={{}}>"You understand my style and can work greatly together with my other thumbnail artist."</p>
</div>

<div className="break-inside-avoid hover:border-red-500/20 transition-colors bg-black border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex gap-3 mb-4 gap-x-3 gap-y-3 items-center">
<img className="w-10 h-10 border-white/10 border rounded-full" src="https://yt3.googleusercontent.com/_OBhSQ9nErhDSB551EJo0seJjEhWZI-_ugC8Q5bMMPWlTW3F7O58B-9BDtiZpN5_cAJikEa4=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80"/>
<div className="">
<h4 className="text-sm font-semibold text-white" style={{}}>IrfanDesigns</h4>
<p className="text-[10px] uppercase font-medium text-zinc-500 tracking-wider">thumbnail artist</p>
</div>
<div className="flex gap-0.5 text-[10px] text-yellow-500 ml-auto gap-x-0.5 gap-y-0.5">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<svg className="w-[10px] h-[10px]" data-icon-replaced="true" data-icon-set="solar" data-solar="star-bold" height="10" strokeWidth="2" style={{width: '10px', height: '10px', color: 'rgb(234, 179, 8)'}} viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path className="" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg className="w-[10px] h-[10px]" data-icon-replaced="true" data-icon-set="solar" data-solar="star-bold" height="10" icon="lucide:star" strokeWidth="2" style={{width: '10px', height: '10px', color: 'rgb(234, 179, 8)'}} viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="#eab308"></path></svg>
</div>
</div>
<p className="leading-relaxed text-sm text-zinc-400">"Strawberrie is the most reliable designer I've worked with so far, we've been working together for 5 months and there isn't a day he sends "sh*t work", would really recommend him!."</p>
</div>

<div className="break-inside-avoid hover:border-red-500/20 transition-colors bg-black border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-4">
<div className="flex text-blue-500 w-10 h-10 bg-[url(https://yt3.googleusercontent.com/oQg70kTmsY4uPuTsZgKm_bn2QGdEeHRVQQTo9vKoPgAcgzTAhWY97ra_nWjbqttdXxtcDuMOdw=s160-c-k-c0x00ffffff-no-rj?w=800&amp;q=80)] bg-cover bg-center border-blue-500/20 border rounded-full items-center justify-center">
<span className="text-xs font-bold"></span>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white">Uzoth</h4>
<p className="text-[10px] uppercase font-medium text-zinc-500 tracking-wider">Youtuber</p>
</div>
<div className="ml-auto flex text-yellow-500 gap-0.5 text-[10px]">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" height="10" icon="solar:star-bold" style={{color: 'rgb(234, 179, 8)'}} width="10"></iconify-icon>
</div>
</div>
<p className="leading-relaxed text-sm text-zinc-400" style={{}}>"Placeholder."</p>
</div>


</div>
</section>
</div>

<div className="page-section hidden" id="work-page">
<section className="mx-auto max-w-7xl px-6 lg:px-8 pb-32 pt-10">
<div className="mb-10 text-center">
<h2 className="text-4xl font-medium tracking-tight text-white">
              Portfolio
            </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black" onclick="openLightbox(this)">
<img className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=1200"/>
</div>

<div className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black" onclick="openLightbox(this)">
<img className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black" onclick="openLightbox(this)">
<img className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&amp;w=1200"/>
</div>

<div className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black" onclick="openLightbox(this)">
<img className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black" onclick="openLightbox(this)">
<img className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&amp;w=1200"/>
</div>

<div className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black" onclick="openLightbox(this)">
<img className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&amp;w=1200"/>
</div>
</div>
</section>
</div>

<div className="page-section bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-[#8f0000] via-red-600/0 to-[#1f0000]" id="about-page">
<section className="mx-auto max-w-7xl px-6 lg:px-8 pb-32 pt-10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="col-span-1 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-card p-8 text-center hover:border-red-500/20 transition-colors">
<span className="text-4xl font-bold text-white mb-2">5+</span>
<span className="text-xs uppercase tracking-wider text-red-200/50 font-medium">Years Experience</span>
</div>

<div className="col-span-1 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-card p-8 text-center hover:border-red-500/20 transition-colors">
<span className="text-4xl font-bold text-white mb-2">100M+</span>
<span className="text-xs uppercase tracking-wider text-red-200/50 font-medium">Total Views</span>
</div>

<div className="col-span-1 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-card p-8 text-center hover:border-red-500/20 transition-colors">
<span className="text-4xl font-bold text-white mb-2">100+</span>
<span className="text-xs uppercase tracking-wider text-red-200/50 font-medium">Clients</span>
</div>

<div className="col-span-1 flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-card p-8 text-center hover:border-red-500/20 transition-colors">
<span className="text-4xl font-bold text-white mb-2">24h</span>
<span className="text-xs uppercase tracking-wider text-red-200/50 font-medium">Avg. Turnaround</span>
</div>

<div className="col-span-2 md:col-span-4 rounded-2xl border border-white/10 bg-card p-8 md:p-12 hover:border-red-500/20 transition-colors flex flex-col md:flex-row gap-10 items-start">
<div className="flex-1 space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-black/20 px-3 py-1">
<span className="relative flex h-2 w-2">
<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
</span>
<span className="text-xs font-medium uppercase tracking-wide text-red-300">
                      GMT+1 (Winter) / GMT+2 (Summer)
                    </span>
</div>
<h2 className="text-3xl font-medium text-white">Behind the Thumbnails</h2>
<p className="text-lg text-red-200/70 leading-relaxed">
                   My name is <span className="text-white font-semibold">StrawBerrie</span>. I specialize in creating high-retention visual assets for the Roblox platform. By combining 3D rendering with advanced composition techniques, I help creators turn impressions into clicks.
                 </p>
</div>
<div className="w-full md:w-auto flex flex-col gap-4">
<h3 className="text-sm font-medium uppercase tracking-widest text-zinc-500">Software</h3>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 rounded-lg border border-white/5 bg-black/40 px-4 py-2 text-zinc-300">
<iconify-icon icon="simple-icons:roblox"></iconify-icon> Roblox
                    </div>
<div className="flex items-center gap-2 rounded-lg border border-white/5 bg-black/40 px-4 py-2 text-zinc-300">
<iconify-icon icon="simple-icons:blender"></iconify-icon> Blender
                    </div>
<div className="flex items-center gap-2 rounded-lg border border-white/5 bg-black/40 px-4 py-2 text-zinc-300">
<iconify-icon icon="simple-icons:adobephotoshop"></iconify-icon> Photoshop
                    </div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="pricing-page">
<section className="mx-auto max-w-7xl px-6 lg:px-8 pb-32 pt-10">
<div className="mb-16 text-center">
<h2 className="text-4xl font-medium tracking-tight text-white md:text-5xl">Simple Pricing</h2>
<p className="mt-4 text-xl text-red-200/60">Professional quality with fast turnaround times.</p>
</div>
<div className="grid grid-cols-1 gap-8 md:grid-cols-3">

<div className="rounded-3xl border border-white/5 bg-card p-8 transition-all hover:border-red-500/30">
<h3 className="text-lg font-medium text-white">Realistic</h3>
<p className="mt-4 flex items-baseline gap-x-2">
<span className="text-4xl font-bold tracking-tight text-white">$50</span>
<span className="text-base text-zinc-400">/thumbnail</span>
</p>
<ul className="mt-8 space-y-3 text-sm leading-6 text-zinc-300" role="list">
<li className="flex gap-x-3"><iconify-icon className="text-red-500" icon="solar:check-circle-bold"></iconify-icon> ~36h Delivery Time</li>
<li className="flex gap-x-3"><iconify-icon className="text-red-500" icon="solar:check-circle-bold"></iconify-icon> 2 Revisions</li>
</ul>
<button className="mt-8 w-full block rounded-md bg-white/5 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/10 ring-1 ring-inset ring-white/10" onclick="switchPage('contact')">Get In Contact</button>
</div>

<div className="relative rounded-3xl border border-red-500 bg-red-900/10 p-8 shadow-2xl shadow-red-900/20 transform scale-105 z-10">
<div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-red-500 px-3 py-1 text-center text-xs font-medium text-white">Most Popular</div>
<h3 className="text-lg font-medium text-white">Priority</h3>
<p className="mt-4 flex items-baseline gap-x-2">
<span className="text-4xl font-bold tracking-tight text-white">$60</span>
<span className="text-base text-red-200/60">/thumbnail</span>
</p>
<ul className="mt-8 space-y-3 text-sm leading-6 text-white" role="list">
<li className="flex gap-x-3"><iconify-icon className="text-red-400" icon="solar:check-circle-bold"></iconify-icon> ~24h Delivery Time</li>
<li className="flex gap-x-3"><iconify-icon className="text-red-400" icon="solar:check-circle-bold"></iconify-icon> Dedicated Slot</li>
</ul>
<button className="mt-8 w-full block rounded-md bg-red-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500" onclick="switchPage('contact')">Get In Contact</button>
</div>

<div className="rounded-3xl border border-white/5 bg-card p-8 transition-all hover:border-red-500/30">
<h3 className="text-lg font-medium text-white">Cartoony</h3>
<p className="mt-4 flex items-baseline gap-x-2">
<span className="text-4xl font-bold tracking-tight text-white">$40</span>
<span className="text-base text-zinc-400">/thumbnail</span>
</p>
<ul className="mt-8 space-y-3 text-sm leading-6 text-zinc-300" role="list">
<li className="flex gap-x-3"><iconify-icon className="text-red-500" icon="solar:check-circle-bold"></iconify-icon> ~36h Delivery Time</li>
<li className="flex gap-x-3"><iconify-icon className="text-red-500" icon="solar:check-circle-bold"></iconify-icon> High Quality Renders</li>
</ul>
<button className="mt-8 w-full block rounded-md bg-white/5 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-white/10 ring-1 ring-inset ring-white/10" onclick="switchPage('contact')">Get In Contact</button>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="contact-page">
<section className="mx-auto max-w-3xl px-6 lg:px-8 pb-32 pt-10">
<div className="mb-10 text-center">
<h2 className="text-4xl font-medium tracking-tight text-white">Start a Project</h2>
<p className="mt-4 text-zinc-400">Ready to level up your channel? Fill out the form below.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-card p-8">
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Message Sent!');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Name / Channel</label>
<input className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-zinc-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="e.g. StrawBerrie" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
<input className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-zinc-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="you@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Commission Type</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500">
<option>Realistic Thumbnail ($50)</option>
<option>Priority Bundle ($60)</option>
<option>Cartoony Thumbnail ($40)</option>
<option>Other / Custom</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-sm font-medium text-zinc-400 mb-2">Project Details</label>
<textarea className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white placeholder-zinc-600 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" placeholder="Tell me about your video idea, style preferences, etc..." rows="4"></textarea>
</div>
<button className="w-full rounded-lg bg-red-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 hover:bg-red-500 transition-colors" type="submit">
                    Send Request
                </button>
<p className="text-center text-xs text-zinc-600 mt-4">
                    Alternatively, contact me via Discord: <span className="text-zinc-400">@strawberrie</span>
</p>
</form>
</div>
</section>
</div>
<footer className="mt-auto border-t border-white/5 bg-[#0a0101] py-12">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs leading-5 text-zinc-500">
            © 2024 StrawBerrie. All rights reserved.
          </p>
<div className="flex gap-6 text-zinc-500">
<a className="hover:text-red-400" href="#"><iconify-icon icon="brandico:twitter-bird"></iconify-icon></a>
<a className="hover:text-red-400" href="#"><iconify-icon icon="brandico:instagram"></iconify-icon></a>
<a className="hover:text-red-400" href="#"><iconify-icon icon="brandico:youtube"></iconify-icon></a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden bg-black/90 backdrop-blur-sm" id="image-modal" onclick="closeLightbox()">
<div className="absolute right-6 top-6 cursor-pointer text-white/50 hover:text-white">
<iconify-icon icon="solar:close-circle-bold" width="40"></iconify-icon>
</div>
<div className="flex h-full w-full items-center justify-center p-4">
<img className="max-h-[90vh] max-w-full rounded-lg shadow-2xl shadow-red-900/20 object-contain" id="modal-img" src=""/>
</div>
</div>


    </>
  );
}
