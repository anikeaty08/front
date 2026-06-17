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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
colors: {
treely: {
primary: '#06818E',
secondary: '#359D9E',
text: '#334669',
subtext: '#858E96',
bg1: '#F9F5F1',
bg2: '#F4F0FE'
}
}
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



    (function() {
      const counterEl = document.getElementById('live-tree-counter');
      if (!counterEl) return;

      // Configuration
      const startCount = 500000;
      const initialTarget = 500124; // Initial rapid animation target
      const duration = 2500; // Animation duration in ms
      
      const formatNumber = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      };

      // Animation function
      const animateCount = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease out
          
          const current = Math.floor(progress * (end - start) + start);
          element.innerHTML = formatNumber(current);
          
          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            // Start the "Live" slow incrementation after initial animation
            startLiveUpdates(element, end);
          }
        };
        window.requestAnimationFrame(step);
      };

      // Simulates live updates
      const startLiveUpdates = (element, currentCount) => {
        let count = currentCount;
        
        const update = () => {
          // Random delay between 2s and 6s
          const nextUpdate = Math.random() * 4000 + 2000;
          
          setTimeout(() => {
            count += 1;
            element.innerHTML = formatNumber(count);
            
            // Pulse color effect on change
            element.classList.add('text-[#06818E]', 'scale-105');
            setTimeout(() => {
              element.classList.remove('text-[#06818E]', 'scale-105');
            }, 200);
            
            update();
          }, nextUpdate);
        };
        
        update();
      };

      // Intersection Observer to trigger only when visible
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCount(counterEl, startCount, initialTarget, duration);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });

      observer.observe(counterEl);
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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] hero-glow pointer-events-none z-0"></div>

<nav className="fixed z-50 glass-nav w-full border-[#334669]/5 border-b top-0">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<img alt="Treely" className="w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebe92ae3-c4e0-41bd-b322-36e298f9b502_320w.png"/>
</div>


<div className="hidden md:flex gap-4 items-center">
</div>

<button className="md:hidden text-[#334669]">
<svg className="lucide lucide-menu w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(51, 70, 105)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<main className="overflow-hidden z-10 max-h-min pt-48 pb-16 relative md:pt-48">
<div className="flex flex-col text-center max-w-7xl rounded-3xl mr-auto ml-auto pr-6 pl-6 items-center">

<div className="inline-flex gap-2 animate-fade-in-up text-sm font-bold text-[#06818E] bg-[#06818E]/5 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center border-[#06818E]/20">
<svg className="lucide lucide-leaf w-3 h-3" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
<span className="" style={{}}>Marchez pour la planète</span>
</div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-extrabold text-[#334669] tracking-tight max-w-5xl mr-auto mb-6 ml-auto">Merci ! Nous avons bien reçu votre demande.</h1>

<p className="md:text-xl leading-relaxed text-lg font-medium text-[#858E96] max-w-2xl mr-auto mb-10 ml-auto" style={{}}>Notre équipe vous recontacte dans les brefs délais.</p>

<div className="w-full max-w-sm mx-auto mb-16 relative z-20" data-component="live-counter">

<div className="flex flex-col items-center justify-center group transition-all duration-500">

<div className="flex items-center gap-2 mb-1 opacity-90 group-hover:opacity-100 transition-opacity">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#06818E]"></span>
</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-[#06818E]">En direct</span>
</div>

<div className="flex items-center gap-3 py-1">
<div className="text-[#06818E] group-hover:scale-110 transition-transform duration-300">
</div>
<div className="relative inline-block">
<span className="text-5xl md:text-6xl font-extrabold text-[#334669] tracking-tight tabular-nums leading-none block" id="live-tree-counter">
            500 000
            </span>
</div>
</div>

<p className="text-sm font-medium text-[#858E96] mt-1">Arbres plantés par les entreprises</p>
</div>

<div className="absolute -top-4 -right-4 w-24 h-24 bg-[#359D9E] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
<div className="-bottom-4 -left-4 filter animate-blob animation-delay-2000 bg-[#06818E] opacity-10 mix-blend-multiply w-24 h-24 rounded-full absolute blur-3xl"></div>
<style>
    @keyframes shimmer {
      100% { transform: translateX(100%); }
    }
    .animate-blob {
      animation: blob 7s infinite;
    }
    .animation-delay-2000 {
      animation-delay: 2s;
    }
    @keyframes blob {
      0% { transform: translate(0px, 0px) scale(1); }
      33% { transform: translate(30px, -50px) scale(1.1); }
      66% { transform: translate(-20px, 20px) scale(0.9); }
      100% { transform: translate(0px, 0px) scale(1); }
    }
  </style>

</div>

<div className="md:h-[450px] w-full h-[280px] max-w-[760px] mt-8 mr-auto mb-8 ml-auto relative perspective-[2500px]">

<div className="absolute top/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#359D9E]/15 blur-[80px] rounded-full pointer-events-none"></div>

<img alt="App Screen Left" className="md:left-[22%] md:w-[200px] -translate-x-[110%] md:-translate-x-[60%] transition-transform duration-700 hover:z-40 hover:-translate-y-4 hover:rotate-[-5deg] hidden md:block z-10 w-[200px] h-auto object-cover rounded-[2rem] absolute top-6 left-1/2 translate-y-8 rotate-[-12deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc0e1f75-c86e-44db-a329-082bf0fb4a13_800w.png"/>

<img alt="App Screen Center" className="md:w-[220px] -translate-x-1/2 z-30 md:rounded-[2.5rem] transition-transform duration-700 hover:-translate-y-6 w-[160px] h-auto object-cover rounded-[1.5rem] absolute top-0 left-1/2 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/00cc7967-b0bc-4d84-9310-9bda52743aa0_800w.png"/>

<img alt="App Screen Right" className="md:left-[78%] md:w-[200px] -translate-x-[0%] md:-translate-x-[40%] z-10 transition-transform duration-700 hover:z-40 hover:-translate-y-4 hover:rotate-[5deg] hidden md:block w-[200px] h-auto object-cover bg-center rounded-[2rem] absolute top-6 left-1/2 translate-y-8 rotate-[12deg]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb12707d-0fb7-44f1-aa8c-d991551e6b1e_800w.png"/>
</div>
</div>
</main>

<section className="overflow-hidden bg-[#F9F5F1] z-20 border-slate-100 border-t pt-12 pb-12 relative">
<style className="">
        @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-50%);
            }
        }
        .logos-scroll {
            animation: scroll 25s linear infinite;
        }
        .logos-scroll:hover {
            animation-play-state: paused;
        }
      </style>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="lg:text-4xl leading-tight text-3xl font-bold text-[#334669] tracking-tight mb-3">Rejoignez +450 entreprises qui agissent déjà pour le bien-être de la planète</h2>
<p className="font-light text-[#858E96]">
            (et celui de leurs collaborateurs)
          </p>
</div>
</div>

<div className="relative w-full overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9F5F1] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F9F5F1] to-transparent z-10 pointer-events-none"></div>

<div className="flex logos-scroll gap-x-16 gap-y-16 items-center" style={{width: 'max-content', animation: 'scroll 25s linear infinite'}}>

<div className="flex shrink-0 pr-8 pl-8 gap-x-16 gap-y-16 items-center">
<img alt="Spotify" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5648bcb-5dff-4c87-9993-a7d285832392_320w.png"/>
<img alt="Amazon" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/635e4fc9-dd0b-4199-9964-a70623ef002e_320w.png"/>
<img alt="Google" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4b53e3c-1cc4-4355-9927-916d5c9bc78f_320w.png"/>
<img alt="Netflix" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4452f0a-a5dd-4304-a686-017e274c85f2_320w.png"/>
<img alt="Microsoft" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e9369b8e-ae87-4048-999b-4cd821bd8822_320w.png"/>
<img alt="Airbnb" className="hover:grayscale-0 hover:opacity-100 transition-all bg-center opacity-60 w-auto h-8 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ee9f616-f970-4e71-81f7-718a3f792690_320w.png"/>
</div>

<div className="flex gap-16 shrink-0 pr-8 pl-8 items-center">
<img alt="Spotify" className="hover:grayscale-0 hover:opacity-100 transition-all bg-center opacity-60 w-auto h-8 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5648bcb-5dff-4c87-9993-a7d285832392_800w.png"/>
<img alt="Amazon" className="hover:grayscale-0 hover:opacity-100 transition-all bg-center opacity-60 w-auto h-8 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/635e4fc9-dd0b-4199-9964-a70623ef002e_320w.png"/>
<img alt="Google" className="hover:grayscale-0 hover:opacity-100 transition-all bg-center opacity-60 w-auto h-8 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4b53e3c-1cc4-4355-9927-916d5c9bc78f_320w.png"/>
<img alt="Netflix" className="hover:grayscale-0 hover:opacity-100 transition-all bg-center opacity-60 w-auto h-6 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4452f0a-a5dd-4304-a686-017e274c85f2_320w.png"/>
<img alt="Microsoft" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e9369b8e-ae87-4048-999b-4cd821bd8822_320w.png"/>
<img alt="Apple" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ee9f616-f970-4e71-81f7-718a3f792690_320w.png"/>
</div>

<div className="flex gap-16 shrink-0 pr-8 pl-8 gap-x-16 gap-y-16 items-center">
<img alt="Spotify" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5648bcb-5dff-4c87-9993-a7d285832392_320w.png"/>
<img alt="Amazon" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/635e4fc9-dd0b-4199-9964-a70623ef002e_320w.png"/>
<img alt="Google" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a4b53e3c-1cc4-4355-9927-916d5c9bc78f_320w.png"/>
<img alt="Netflix" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4452f0a-a5dd-4304-a686-017e274c85f2_320w.png"/>
<img alt="Microsoft" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e9369b8e-ae87-4048-999b-4cd821bd8822_320w.png"/>
<img alt="Apple" className="hover:grayscale-0 hover:opacity-100 transition-all opacity-60 w-auto h-8 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ee9f616-f970-4e71-81f7-718a3f792690_320w.png"/>
</div>
</div>
</div>
</section>

<footer className="text-[#334669] bg-white border-slate-100 border-t pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex mb-6 gap-x-2 gap-y-2 items-center">
<img alt="Treely" className="w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebe92ae3-c4e0-41bd-b322-36e298f9b502_320w.png"/>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-slate-100 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-xs font-medium text-[#858E96]" style={{}}>© 2025 Treely. Tous droits réservés.</p>
</div>
</div>
</footer>

    </>
  );
}
