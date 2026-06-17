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
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
dark: '#010101',
purple: '#983AD6',
pink: '#FA93FA',
mid: '#C967E8'
}
},
backgroundImage: {
'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
'primary-gradient': 'linear-gradient(135deg, #FA93FA 0%, #C967E8 50%, #983AD6 100%)',
},
animation: {
'infinite-scroll': 'infinite-scroll 40s linear infinite',
'blob': 'blob 7s infinite',
},
keyframes: {
'infinite-scroll': {
from: { transform: 'translateX(0)' },
to: { transform: 'translateX(-50%)' },
},
blob: {
"0%": { transform: "translate(0px, 0px) scale(1)" },
"33%": { transform: "translate(30px, -50px) scale(1.1)" },
"66%": { transform: "translate(-20px, 20px) scale(0.9)" },
"100%": { transform: "translate(0px, 0px) scale(1)" }
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const video = document.getElementById('hero-video');
            const source = 'https://customer-cbeadsgr09pnsezs.cloudflarestream.com/697945ca6b876878dba3b23fbd2f1561/manifest/video.m3u8';
            const fallback = '/_videos/v1/f0c78f536d5f21a047fb7792723a36f9d647daa1';

            if (Hls.isSupported()) {
                const hls = new Hls({
                    autoStartLoad: true,
                    capLevelToPlayerSize: true,
                    debug: false
                });
                hls.loadSource(source);
                hls.attachMedia(video);
                hls.on(Hls.Events.MANIFEST_PARSED, function() {
                    video.play().catch(e => console.log('Autoplay prevented:', e));
                });
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                // Native HLS support (Safari)
                video.src = source;
                video.addEventListener('loadedmetadata', function() {
                    video.play();
                });
            } else {
                // MP4 Fallback
                video.src = fallback;
                video.play();
            }
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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-purple/20 rounded-full blur-[120px] -z-10 opacity-30 pointer-events-none animate-blob"></div>
<div className="fixed top-[-100px] left-1/4 w-[600px] h-[400px] bg-brand-pink/10 rounded-full blur-[100px] -z-10 opacity-20 pointer-events-none delay-2000 animate-blob"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#010101]/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-primary-gradient flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:cube-linear"></iconify-icon>
</div>
<span className="font-medium text-white tracking-tight">Kuda MFB</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
<a className="hover:text-white transition-colors" href="#">Personal</a>
<a className="hover:text-white transition-colors" href="#">Business</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
<a className="hover:text-white transition-colors" href="#">Help</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-white/80 transition-colors" href="#">Log in</a>
<button className="hover:bg-white/90 transition-colors text-xs font-semibold text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4">Join Kuda</button>
</div>
</div>
</nav>

<main className="md:pt-48 flex flex-col z-10 pt-32 pb-0 relative items-center justify-center">

<div className="group relative inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel hover:bg-white/5 transition-all duration-300 cursor-pointer mb-8">
<div className="relative flex items-center justify-center w-5 h-5 rounded-full overflow-hidden bg-white/5 shadow-[0_0_10px_rgba(201,103,232,0.4)]">
<div className="absolute inset-0 bg-primary-gradient opacity-20"></div>
<iconify-icon className="text-brand-mid text-xs relative z-10" icon="solar:bolt-linear"></iconify-icon>
</div>
<span className="group-hover:text-white transition-colors text-xs font-medium text-slate-300 pr-1">Fully Licensed by the CBN</span>
<iconify-icon className="text-slate-500 text-xs group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="z-20 text-center max-w-5xl mr-auto ml-auto pr-4 pl-4 relative">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] md:leading-[0.95] mb-6">
<span className="block text-white">Get more</span>
<span className="block text-gradient-primary pt-8 pb-8">with Kuda.</span>
</h1>
<p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-10 tracking-tight">
                We turn bold ideas into modern designs that don’t just look amazing, they grow your business fast.
            </p>

<div className="flex flex-col sm:flex-row mb-20 gap-x-4 gap-y-4 items-center justify-center">
<div className="glass-btn-wrapper p-[1px] group">
<button className="flex gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 text-black bg-white rounded-full pt-2 pr-2 pb-2 pl-5 relative gap-x-3 gap-y-3 items-center">
<span className="text-sm font-medium tracking-tight">Download App</span>
<div className="w-8 h-8 rounded-full bg-primary-gradient flex items-center justify-center text-white group-hover:scale-105 transition-transform">
<iconify-icon className="" height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="relative w-full max-w-[1600px] mx-auto -mt-24 md:-mt-48 z-10 pointer-events-none">

<div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#010101] to-transparent z-20"></div>

<div className="relative w-full aspect-video md:aspect-[2.35/1] overflow-hidden mix-blend-screen opacity-90">
<video autoplay="" className="w-full h-full object-cover scale-[1.01]" id="hero-video" loop="" muted="" playsinline="" src="blob:https://www.aura.build/55ba7676-8251-4160-9e3a-43432b826f0c">
</video>

<div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#010101] via-[#010101]/80 to-transparent z-20"></div>
</div>
</div>
</main>

<section className="relative z-30 -mt-24 border-t border-white/5 bg-black/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 h-24 md:h-20 flex flex-col md:flex-row items-center">

<div className="w-full md:w-auto py-4 md:py-0 flex items-center justify-center md:justify-start md:pr-8 md:border-r md:border-white/10 shrink-0">
<span className="text-sm font-medium text-white/40 tracking-tight whitespace-nowrap">Powering the best teams</span>
</div>

<div className="w-full overflow-hidden mask-linear-fade relative">

<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#010101] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#010101] to-transparent z-10"></div>
<div className="flex animate-infinite-scroll w-max items-center">

<div className="flex items-center gap-12 md:gap-16 px-8">
<img alt="OpenAI" className="h-6 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://html.tailus.io/blocks/customers/openai.svg"/>
<img alt="Nvidia" className="h-5 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://html.tailus.io/blocks/customers/nvidia.svg"/>
<img alt="GitHub" className="h-7 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/>
<img alt="Netflix" className="h-5 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
<img alt="IBM" className="h-6 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"/>
<img alt="Google" className="h-6 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
<img alt="GE" className="h-7 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="flex items-center gap-12 md:gap-16 px-8">
<img alt="OpenAI" className="h-6 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://html.tailus.io/blocks/customers/openai.svg"/>
<img alt="Nvidia" className="h-5 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://html.tailus.io/blocks/customers/nvidia.svg"/>
<img alt="GitHub" className="h-7 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"/>
<img alt="Netflix" className="h-5 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"/>
<img alt="IBM" className="h-6 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"/>
<img alt="Google" className="h-6 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
<img alt="GE" className="h-7 w-auto brightness-0 invert opacity-50 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>




    </>
  );
}
