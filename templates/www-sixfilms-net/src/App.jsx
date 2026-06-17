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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5 transition-colors duration-300">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

<div className="flex items-center gap-8">
<a className="text-xl sm:text-2xl font-semibold tracking-tighter text-red-600 uppercase flex items-center" href="#">
                    SIXFILMS
                </a>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-white hover:text-red-500 transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Movies</a>
<a className="hover:text-white transition-colors" href="#">TV Series</a>
<a className="hover:text-white transition-colors flex items-center gap-1" href="#">
                        Agasobanuye <span className="px-1.5 py-0.5 rounded bg-red-600/20 text-red-500 text-[0.65rem] uppercase tracking-wide">New</span>
</a>
</nav>
</div>

<div className="flex items-center gap-4 sm:gap-6">

<button className="text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-xl sm:text-2xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<div className="relative group hidden sm:block">
<button className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors py-2">
<iconify-icon className="text-lg" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>Lang</span>
<iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute right-0 top-full mt-1 w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right overflow-hidden z-50">
<div className="p-1.5 flex flex-col">
<button className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
<span className="text-base">🇷🇼</span> Kinyarwanda
                            </button>
<button className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
<span className="text-base">🇺🇸</span> English
                            </button>
<button className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
<span className="text-base">🇹🇿</span> Kiswahili
                            </button>
<button className="flex items-center gap-3 w-full px-3 py-2 text-left text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
<span className="text-base">🇫🇷</span> Français
                            </button>
</div>
</div>
</div>

<button className="md:hidden text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow">
<section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden pt-16">

<div className="absolute inset-0 w-full h-full">
<img alt="Hero Background" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/80 to-zinc-950"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent"></div>
</div>

<div className="flex flex-col sm:mt-0 text-center max-w-4xl z-10 mt-12 mr-auto ml-auto pr-4 pl-4 relative items-center">
<span className="px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-medium uppercase tracking-wider mb-6 flex items-center gap-2 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    Trending Now
                </span>
<h1 className="sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-3xl font-semibold text-white tracking-tight mb-6 drop-shadow-2xl">
                    SIXFILMS - Filime nshya z'Agasobanuye n'izindi zose kuri buri wese.
                </h1>
<p className="text-base sm:text-lg md:text-xl text-zinc-300 mb-10 max-w-3xl leading-relaxed drop-shadow-md">
                    Reba cyangwa u-download-inge filime zigezweho mu rurimi ushaka: Kinyarwanda, Kiswahili, English, na French. Byose ni ubuntu!
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-red-600 hover:bg-red-500 text-white font-medium py-3.5 px-8 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] active:scale-95">
<iconify-icon className="text-xl" icon="solar:play-bold"></iconify-icon>
                        Tangira Kureba
                    </button>
<button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-medium py-3.5 px-8 rounded-full flex items-center justify-center gap-2.5 transition-all duration-300 backdrop-blur-md border border-white/10 hover:border-white/20 active:scale-95">
<iconify-icon className="text-xl" icon="solar:download-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Download-Filime
                    </button>
</div>
</div>
</section>

<section className="max-w-screen-2xl mx-auto px-4 py-8">
<div className="w-full bg-zinc-900/50 border border-white/5 rounded-2xl flex flex-col items-center justify-center py-6 px-4 text-center overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-widest mb-2">Advertisement</span>
<div className="w-full max-w-3xl h-24 sm:h-32 bg-zinc-800/50 rounded-lg border border-white/5 border-dashed flex items-center justify-center text-zinc-500 text-sm">
                    Native Ads (Adsterra) Container
                </div>
</div>
</section>

<section className="max-w-screen-2xl mx-auto px-4 py-8 sm:py-12">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
<iconify-icon className="text-red-500 text-2xl" icon="solar:flame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Zigezweho (Trending)
                </h2>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group" href="#">
                    View All 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">

<div className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer">
<img alt="Movie Poster" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[0.65rem] font-medium text-white uppercase tracking-wider">
                        HD
                    </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center backdrop-blur-md transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white line-clamp-1 mb-1 shadow-black drop-shadow-md">The Dark Horizon</h3>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span>2024</span>
<div className="flex items-center gap-1 text-amber-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-zinc-300 font-medium">8.4</span>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer">
<img alt="Movie Poster" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 text-amber-500 text-[0.65rem] font-medium uppercase tracking-wider">
                        4K
                    </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center backdrop-blur-md transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white line-clamp-1 mb-1 shadow-black drop-shadow-md">Neon City Runners</h3>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span>2023</span>
<div className="flex items-center gap-1 text-amber-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-zinc-300 font-medium">7.9</span>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer hidden sm:block">
<img alt="Movie Poster" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center backdrop-blur-md transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white line-clamp-1 mb-1 shadow-black drop-shadow-md">Silent Echo</h3>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span>2024</span>
<div className="flex items-center gap-1 text-amber-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-zinc-300 font-medium">9.1</span>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer hidden md:block">
<img alt="Movie Poster" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
<div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm border border-white/10 text-[0.65rem] font-medium text-white uppercase tracking-wider">
                        HD
                    </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center backdrop-blur-md transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white line-clamp-1 mb-1 shadow-black drop-shadow-md">The Last Code</h3>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span>2022</span>
<div className="flex items-center gap-1 text-amber-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-zinc-300 font-medium">6.8</span>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer hidden lg:block">
<img alt="Movie Poster" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
<div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-red-600 text-[0.65rem] font-medium text-white uppercase tracking-wider shadow-lg">
                        Dubbed
                    </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center backdrop-blur-md transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h3 className="text-sm font-medium text-white line-clamp-1 mb-1 shadow-black drop-shadow-md">Agasobanuye: Vengeance</h3>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span>2024</span>
<div className="flex items-center gap-1 text-amber-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-zinc-300 font-medium">8.0</span>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[2/3] rounded-xl overflow-hidden bg-zinc-900 cursor-pointer hidden xl:block">
<div className="absolute inset-0 bg-zinc-800 animate-pulse"></div>
<img alt="Movie Poster" className="w-full h-full object-cover relative z-10 transform group-hover:scale-110 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 z-20"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
<div className="w-12 h-12 rounded-full bg-red-600/90 text-white flex items-center justify-center backdrop-blur-md transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
<iconify-icon className="text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 z-30">
<h3 className="text-sm font-medium text-white line-clamp-1 mb-1 shadow-black drop-shadow-md">Beyond Earth</h3>
<div className="flex items-center justify-between text-xs text-zinc-400">
<span>2023</span>
<div className="flex items-center gap-1 text-amber-500">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-zinc-300 font-medium">7.5</span>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="mt-12 bg-zinc-950 border-t border-white/5 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-zinc-800/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-screen-2xl mx-auto px-4 py-16 sm:py-24">
<div className="text-center mb-16">
<a className="text-2xl font-semibold tracking-tighter text-zinc-300 uppercase inline-block mb-4" href="#">
                    SIXFILMS
                </a>
<p className="text-sm text-zinc-500">Global Entertainment, Localized Experience.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

<div className="flex flex-col gap-3 group">
<h4 className="text-sm font-medium text-white flex items-center gap-2 group-hover:text-red-400 transition-colors">
<span className="text-lg">🇷🇼</span> Kinyarwanda
                    </h4>
<p className="text-xs sm:text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        Abo turi bo:<br/>
                        Murakaza neza kuri SIXFILMS.net! Tuguha filime nshya zisobanuye n'izindi mpuzamahanga mu buryo bwihuta kandi bugaragara neza. Reba cyangwa u-downloade-inge ku buntu mu rurimi wihitiyemo.
                    </p>
</div>

<div className="flex flex-col gap-3 group">
<h4 className="text-sm font-medium text-white flex items-center gap-2 group-hover:text-red-400 transition-colors">
<span className="text-lg">🇺🇸</span> English
                    </h4>
<p className="text-xs sm:text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        About Us:<br/>
                        Welcome to SIXFILMS.net! Your ultimate destination for the latest movies and dubbed content. Enjoy high-speed streaming and free downloads in multiple languages. Quality entertainment, anywhere, anytime.
                    </p>
</div>

<div className="flex flex-col gap-3 group">
<h4 className="text-sm font-medium text-white flex items-center gap-2 group-hover:text-red-400 transition-colors">
<span className="text-lg">🇹🇿</span> Kiswahili
                    </h4>
<p className="text-xs sm:text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        Kuhusu Sisi:<br/>
                        Karibu SIXFILMS.net! Tunakupa filamu mpya na zilizotafsiriwa kwa ubora wa hali ya juu. Tazama au pakua bila malipo katika lugha unayopenda. Burudani bora kiganjani mwako.
                    </p>
</div>

<div className="flex flex-col gap-3 group">
<h4 className="text-sm font-medium text-white flex items-center gap-2 group-hover:text-red-400 transition-colors">
<span className="text-lg">🇫🇷</span> Français
                    </h4>
<p className="text-xs sm:text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                        À Propos:<br/>
                        Bienvenue sur SIXFILMS.net ! Votre plateforme préférée pour les derniers films et contenus doublés. Profitez du streaming rapide et du téléchargement gratuit en plusieurs langues.
                    </p>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
<p>© 2024 SIXFILMS.net. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">DMCA</a>
</div>
</div>
</div>
</footer>
<style>
        /* Optional keyframes for subtle ad shimmer effect */
        @keyframes shimmer {
            100% {
                transform: translateX(100%);
            }
        }
    </style>

    </>
  );
}
