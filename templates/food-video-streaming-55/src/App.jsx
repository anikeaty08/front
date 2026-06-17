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
// Add any custom theme extensions here if needed
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-white/20 supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-1" href="#">
                    LEZZET.
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-orange-500 transition-colors" href="#">Tarifler</a>
<a className="hover:text-orange-500 transition-colors" href="#">Şefler</a>
<a className="hover:text-orange-500 transition-colors" href="#">Video Akışı</a>
<a className="hover:text-orange-500 transition-colors" href="#">Trendler</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 text-slate-400 hover:text-slate-900 transition-colors relative">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border border-white"></span>
</button>
<button className="hidden sm:flex items-center gap-2 bg-slate-900 text-white pl-1 pr-3 py-1 rounded-full text-xs font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-[10px]">EA</div>
                    Hesabım
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-20 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob"></div>
<div className="absolute top-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl mix-blend-multiply filter opacity-70 animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/50 border border-slate-200 text-xs font-medium text-slate-600 backdrop-blur-sm shadow-sm">
<iconify-icon className="text-orange-500" icon="solar:star-fall-linear" width="16"></iconify-icon>
                        Haftanın Trend Şefi: Can Obsesi
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1]">
                        Mutfakta <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Sanat Yarat.</span>
</h1>
<p className="text-lg text-slate-500 font-light max-w-md leading-relaxed">
                        Influencer şeflerden özel video tarifleri keşfedin. Modern mutfak kültürünü 3 boyutlu bir deneyimle yaşayın.
                    </p>
<div className="flex items-center gap-4">
<button className="px-6 py-3 bg-slate-900 text-white rounded-xl text-sm font-medium shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center gap-2 group">
                            Keşfetmeye Başla
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50 transition-all flex items-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                            Tanıtımı İzle
                        </button>
</div>
</div>

<div className="relative h-[500px] perspective-1000 flex items-center justify-center lg:justify-end">

<div className="absolute right-10 top-10 w-72 h-96 bg-white rounded-3xl shadow-2xl border border-slate-100 transform rotate-6 opacity-60 scale-90 transition-transform duration-700 hover:rotate-3"></div>

<div className="absolute right-5 top-5 w-72 h-96 bg-white rounded-3xl shadow-2xl border border-slate-100 transform -rotate-3 opacity-80 scale-95 transition-transform duration-700 hover:-rotate-1">
<div className="h-full w-full rounded-3xl bg-slate-50 flex items-center justify-center overflow-hidden relative">
<img alt="Salad" className="object-cover w-full h-full opacity-50 grayscale" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="relative w-72 h-96 bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden transform transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_30px_60px_-12px_rgba(249,115,22,0.3)]">

<div className="relative h-3/5 w-full bg-slate-100 overflow-hidden">
<img alt="Pizza" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-black/10 flex items-center justify-center">
<div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 cursor-pointer hover:scale-110 transition-transform">
<iconify-icon className="text-white ml-1" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-md rounded-lg text-white text-[10px] font-medium flex items-center gap-1">
<iconify-icon icon="solar:videocamera-record-linear" width="12"></iconify-icon>
                                CANLI
                            </div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h3 className="font-semibold text-slate-900">Napoli Usulü Pizza</h3>
<div className="flex items-center gap-1 text-xs text-orange-500 font-medium">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
                                    4.9
                                </div>
</div>
<p className="text-xs text-slate-400 mb-4 line-clamp-2 font-light">
                                İtalya'nın kalbinden gelen geleneksel hamur teknikleri ile evde mükemmel pizza.
                            </p>
<div className="flex items-center gap-2">
<img alt="Chef" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-900">Chef Marco</span>
<span className="text-[10px] text-slate-400">@marcocooks</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-100 bg-white/50 backdrop-blur-sm sticky top-16 z-40">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
<button className="flex-shrink-0 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-medium shadow-lg shadow-slate-900/10 transition-transform hover:scale-105">
                    Tümü
                </button>
<button className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-medium hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50/50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:leaf-linear" width="14"></iconify-icon>
                    Vegan
                </button>
<button className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-medium hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50/50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:cup-hot-linear" width="14"></iconify-icon>
                    Kahvaltı
                </button>
<button className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-medium hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50/50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:chef-hat-linear" width="14"></iconify-icon>
                    Ana Yemekler
                </button>
<button className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-medium hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50/50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:donut-linear" width="14"></iconify-icon>
                    Tatlılar
                </button>
<button className="flex-shrink-0 px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl text-xs font-medium hover:border-orange-200 hover:text-orange-600 hover:bg-orange-50/50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:bottle-linear" width="14"></iconify-icon>
                    İçecekler
                </button>
</div>
</div>
</section>

<main className="max-w-7xl mx-auto px-6 py-12">

<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Popüler Tarifler</h2>
<p className="text-sm text-slate-400 font-light mt-1">Bu hafta en çok denenen lezzetler</p>
</div>
<a className="text-xs font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1" href="#">
                Tümünü Gör <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4">
<img alt="Food" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-slate-900 shadow-sm flex items-center gap-1">
<iconify-icon className="text-orange-500" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                        25 dk
                    </div>

<button className="absolute bottom-3 right-3 w-8 h-8 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Avokado &amp; Yumurta Tost</h3>
<div className="flex items-center justify-between mt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-xs font-medium text-slate-500">Seda Mutfakta</span>
</div>
<div className="flex items-center gap-3 text-slate-400">
<div className="flex items-center gap-1 text-xs">
<iconify-icon icon="solar:fire-linear" width="14"></iconify-icon>
                                320 kcal
                             </div>
<div className="flex items-center gap-1 text-xs">
<iconify-icon icon="solar:chef-hat-linear" width="14"></iconify-icon>
                                Kolay
                             </div>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4">
<img alt="Food" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-slate-900 shadow-sm flex items-center gap-1">
<iconify-icon className="text-orange-500" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                        45 dk
                    </div>
<button className="absolute bottom-3 right-3 w-8 h-8 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Yaban Mersinli Pankek</h3>
<div className="flex items-center justify-between mt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-xs font-medium text-slate-500">Gurme John</span>
</div>
<div className="flex items-center gap-3 text-slate-400">
<div className="flex items-center gap-1 text-xs">
<iconify-icon icon="solar:fire-linear" width="14"></iconify-icon>
                                450 kcal
                             </div>
<div className="flex items-center gap-1 text-xs">
<iconify-icon icon="solar:chef-hat-linear" width="14"></iconify-icon>
                                Orta
                             </div>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl p-3 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 hover:-translate-y-1">
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4">
<img alt="Food" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-slate-900 shadow-sm flex items-center gap-1">
<iconify-icon className="text-orange-500" icon="solar:clock-circle-linear" width="14"></iconify-icon>
                        15 dk
                    </div>
<button className="absolute bottom-3 right-3 w-8 h-8 bg-white/30 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-red-500 transition-all">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon>
</button>
</div>
<div className="px-2 pb-2">
<h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">Sağlıklı Bowl Kasesi</h3>
<div className="flex items-center justify-between mt-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
</div>
<span className="text-xs font-medium text-slate-500">Diyetisyen Elif</span>
</div>
<div className="flex items-center gap-3 text-slate-400">
<div className="flex items-center gap-1 text-xs">
<iconify-icon icon="solar:fire-linear" width="14"></iconify-icon>
                                210 kcal
                             </div>
<div className="flex items-center gap-1 text-xs">
<iconify-icon icon="solar:chef-hat-linear" width="14"></iconify-icon>
                                Kolay
                             </div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20">
<div className="flex items-end justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:videocamera-record-linear"></iconify-icon>
                        Aktüel Videolar
                    </h2>
<p className="text-sm text-slate-400 font-light mt-1">Influencerların mutfağından anlık paylaşımlar</p>
</div>
</div>
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-10">

<div className="relative min-w-[240px] h-[400px] rounded-3xl overflow-hidden shadow-lg group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
<img alt="Video" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center border border-white/30">
<iconify-icon className="text-white ml-0.5" icon="solar:play-linear" width="16"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<span className="text-white text-xs font-medium">@barista_cem</span>
</div>
<p className="text-white text-sm font-medium leading-tight">Mükemmel latte art nasıl yapılır? ☕️</p>
</div>
</div>

<div className="relative min-w-[240px] h-[400px] rounded-3xl overflow-hidden shadow-lg group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
<img alt="Video" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center border border-white/30">
<iconify-icon className="text-white ml-0.5" icon="solar:play-linear" width="16"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<span className="text-white text-xs font-medium">@ezgitarifler</span>
</div>
<p className="text-white text-sm font-medium leading-tight">5 dakikada pratik akşam yemeği 🍝</p>
</div>
</div>

<div className="relative min-w-[240px] h-[400px] rounded-3xl overflow-hidden shadow-lg group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
<img alt="Video" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center border border-white/30">
<iconify-icon className="text-white ml-0.5" icon="solar:play-linear" width="16"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=100"/>
<span className="text-white text-xs font-medium">@somonmaster</span>
</div>
<p className="text-white text-sm font-medium leading-tight">Balık pişirmenin püf noktaları 🐟</p>
</div>
</div>

<div className="relative min-w-[240px] h-[400px] rounded-3xl overflow-hidden shadow-lg group cursor-pointer hover:-translate-y-2 transition-transform duration-300">
<img alt="Video" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md w-8 h-8 rounded-full flex items-center justify-center border border-white/30">
<iconify-icon className="text-white ml-0.5" icon="solar:play-linear" width="16"></iconify-icon>
</div>
<div className="absolute bottom-0 left-0 p-5 w-full">
<div className="flex items-center gap-2 mb-2">
<img alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="text-white text-xs font-medium">@greenkitchen</span>
</div>
<p className="text-white text-sm font-medium leading-tight">Vegan beslenme tüyoları 🥑</p>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-slate-100 py-12 mt-12">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-slate-900" href="#">LEZZET.</a>
<p className="text-xs text-slate-400 mt-2 font-light">
                    Modern mutfak kültürü ve influencer tarifleri için buluşma noktası.
                </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Keşfet</h4>
<ul className="space-y-2 text-xs text-slate-500 font-light">
<li><a className="hover:text-orange-500" href="#">Popüler Tarifler</a></li>
<li><a className="hover:text-orange-500" href="#">Haftanın Şefleri</a></li>
<li><a className="hover:text-orange-500" href="#">Video Akışı</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Topluluk</h4>
<ul className="space-y-2 text-xs text-slate-500 font-light">
<li><a className="hover:text-orange-500" href="#">İçerik Üretici Ol</a></li>
<li><a className="hover:text-orange-500" href="#">Etkinlikler</a></li>
<li><a className="hover:text-orange-500" href="#">Destek</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Bülten</h4>
<div className="flex gap-2">
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs outline-none focus:border-orange-500 transition-colors" placeholder="E-posta adresi" type="text"/>
<button className="bg-slate-900 text-white rounded-lg px-3 py-2 text-xs hover:bg-slate-800">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</footer>

    </>
  );
}
