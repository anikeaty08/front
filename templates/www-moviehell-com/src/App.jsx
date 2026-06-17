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



        function openVideo(videoId) {
            const modal = document.getElementById('videoModal');
            const player = document.getElementById('youtubePlayer');
            
            player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1&fs=1`;
            
            modal.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
            modal.classList.add('flex', 'opacity-100', 'pointer-events-auto');
            
            document.body.style.overflow = 'hidden';
        }

        function closeVideo() {
            const modal = document.getElementById('videoModal');
            const player = document.getElementById('youtubePlayer');
            
            modal.classList.remove('opacity-100', 'pointer-events-auto');
            modal.classList.add('opacity-0', 'pointer-events-none');
            
            setTimeout(() => {
                modal.classList.remove('flex');
                modal.classList.add('hidden');
                player.src = ''; 
                document.body.style.overflow = 'auto'; 
            }, 300);
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                const modal = document.getElementById('videoModal');
                if(!modal.classList.contains('hidden')) {
                    closeVideo();
                }
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
      

<nav className="fixed top-0 w-full z-50 transition-colors duration-500 bg-gradient-to-b from-black/90 via-black/50 to-transparent flex items-center justify-between px-4 py-4 md:px-12">
<div className="flex items-center gap-8 md:gap-12">
<a className="text-red-700 font-semibold text-2xl md:text-3xl tracking-tighter hover:text-red-600 transition-colors" href="#">MOVIEHELL</a>
<ul className="hidden lg:flex items-center gap-5 text-sm font-medium text-zinc-300">
<li><a className="text-white hover:text-zinc-400 transition-colors" href="#">Ana Sayfa</a></li>
<li><a className="hover:text-zinc-400 transition-colors" href="#">Diziler</a></li>
<li><a className="hover:text-zinc-400 transition-colors" href="#">Filmler</a></li>
<li><a className="hover:text-zinc-400 transition-colors" href="#">Korku Kuşağı</a></li>
<li><a className="hover:text-zinc-400 transition-colors" href="#">Yeni ve Popüler</a></li>
<li><a className="hover:text-zinc-400 transition-colors" href="#">Listem</a></li>
</ul>
</div>
<div className="flex items-center gap-4 md:gap-6 text-zinc-100">
<button className="hover:text-zinc-400 transition-colors flex items-center justify-center">
<iconify-icon className="text-xl md:text-2xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hidden lg:block text-sm font-medium hover:text-zinc-400 transition-colors">Kategori</button>
<button className="hover:text-zinc-400 transition-colors flex items-center justify-center relative">
<iconify-icon className="text-xl md:text-2xl" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full"></span>
</button>
<div className="flex items-center gap-2 cursor-pointer group">
<img alt="Profil" className="w-8 h-8 rounded object-cover border border-transparent group-hover:border-zinc-400 transition-colors" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<iconify-icon className="hidden lg:block text-zinc-400 group-hover:text-white transition-colors" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</nav>

<header className="relative w-full h-[65vh] md:h-[85vh] lg:h-[95vh] overflow-hidden bg-black">
<img alt="Öne Çıkan Film" className="absolute inset-0 w-full h-full object-cover object-center opacity-80 scale-105" src="https://images.unsplash.com/photo-1505635552518-3448ff116af3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 hero-vignette"></div>
<div className="absolute inset-x-0 bottom-0 h-32 md:h-64 hero-bottom-fade"></div>
<div className="absolute bottom-[15%] md:bottom-[25%] left-4 md:left-12 w-[90%] md:w-[60%] lg:w-[45%] flex flex-col gap-4 md:gap-6 z-10">
<div className="flex flex-col gap-1">
<div className="flex items-center gap-2 text-zinc-300 text-xs md:text-sm font-semibold tracking-widest uppercase">
<span className="text-red-700 text-base md:text-lg">M</span> Orijinal İçerik
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-none shadow-sm drop-shadow-lg">
                    CEHENNEM<br/>KAPILARI
                </h1>
</div>
<p className="text-sm md:text-base lg:text-lg text-zinc-300 font-normal drop-shadow-md line-clamp-3 md:line-clamp-4 max-w-2xl leading-relaxed">
                Terk edilmiş bir kasabada mahsur kalan bir grup genç, geceleri uyanan kadim bir kötülükle yüzleşmek zorundadır. Hayatta kalmak için karanlığın kalbine inmeleri gerekecek. Korku sınırlarını zorlayan bu yapımı kaçırmayın.
            </p>
<div className="flex items-center gap-3 md:gap-4 mt-2">
<button className="bg-white text-black px-4 md:px-8 py-2 md:py-3 rounded flex items-center justify-center gap-2 font-medium text-sm md:text-base hover:bg-zinc-200 transition-colors w-auto shadow-lg" onclick="openVideo('zSWdZVtXT7E')">
<iconify-icon className="text-xl md:text-2xl text-black" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Hemen İzle
                </button>
<button className="bg-zinc-600/60 text-white px-4 md:px-8 py-2 md:py-3 rounded flex items-center justify-center gap-2 font-medium text-sm md:text-base hover:bg-zinc-500/80 transition-colors backdrop-blur-md w-auto">
<iconify-icon className="text-xl md:text-2xl" icon="solar:info-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Detaylar
                </button>
</div>
</div>
<div className="hidden md:flex absolute bottom-[25%] right-0 bg-zinc-900/90 backdrop-blur-sm border-l-4 border-red-700 px-4 py-2 text-sm font-medium items-center text-zinc-100 shadow-xl">
            18+ Şiddet, Korku
        </div>
</header>

<main className="relative z-20 pb-20 -mt-10 md:-mt-24 lg:-mt-32 space-y-8 md:space-y-12">

<section className="pl-4 md:pl-12">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-zinc-100 mb-2 md:mb-4 px-1">Moviehell'de Popüler</h2>
<div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 pr-4 md:pr-12">

<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('b9EkMc79ZSU')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 bg-red-700 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded flex items-center gap-1 z-20"><span className="text-xs">M</span> FİLM</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Kayıp Zaman</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2023 • Bilim Kurgu</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('Di310WS8zLk')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Karanlık Orman</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2022 • Gerilim</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('oqxA15ApZ1I')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 bg-red-700 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded flex items-center gap-1 z-20"><span className="text-xs">M</span> DİZİ</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Gece Yarısı Ayini</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">1 Sezon • Korku</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('ndl1W4ltcmg')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Son Sığınak</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2024 • Aksiyon</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('rrwycJ08PSA')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Sis</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2021 • Gizem</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('V0XOApF5nLU')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Görünmez Kaza</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2023 • Dram</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('zSWdZVtXT7E')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 bg-red-700 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded flex items-center gap-1 z-20"><span className="text-xs">M</span> DİZİ</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Yıldızların Ötesi</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">3 Sezon • Fantastik</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('b9EkMc79ZSU')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Kırmızı Alarm</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2022 • Macera</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="pl-4 md:pl-12">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-red-600 mb-2 md:mb-4 px-1 drop-shadow-sm">Korku ve Gerilim Kuşağı</h2>
<div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 pr-4 md:pr-12">
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('_InqQJRqGW4')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505635552518-3448ff116af3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Terk Edilmiş Ev</h3>
<p className="text-zinc-300 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2024 • Doğaüstü Korku</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('KPLWWIOCOOQ')">
<img alt="Film" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 bg-red-700 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded flex items-center gap-1 z-20"><span className="text-xs">M</span> FİLM</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Ruh Kapanı</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2021 • Psikolojik Gerilim</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('b9EkMc79ZSU')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Kanlı Ay</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2020 • Slasher</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('oqxA15ApZ1I')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Derin Sular</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2023 • Gerilim</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('rrwycJ08PSA')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 bg-red-700 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded flex items-center gap-1 z-20"><span className="text-xs">M</span> DİZİ</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Karanlık Vadi</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2 Sezon • Korku</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('V0XOApF5nLU')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1508169351866-777fc0047ac5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Ayna Kırıkları</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2019 • Psikolojik</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="pl-4 md:pl-12">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-zinc-100 mb-2 md:mb-4 px-1">Aksiyon ve Macera</h2>
<div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 pr-4 md:pr-12">
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('zSWdZVtXT7E')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 bg-red-700 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded flex items-center gap-1 z-20"><span className="text-xs">M</span> FİLM</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Kızıl Gökyüzü</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2023 • Uzay Macerası</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('ndl1W4ltcmg')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Son Görev</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2022 • Macera</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('V0XOApF5nLU')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Hız Sınırı</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2021 • Otomobil Aksiyon</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('rrwycJ08PSA')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Yabani Doğada</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2018 • Hayatta Kalma</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('b9EkMc79ZSU')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute top-2 left-2 bg-red-700 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded flex items-center gap-1 z-20"><span className="text-xs">M</span> DİZİ</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Mars Kolonisi</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">1 Sezon • Aksiyon/Bilim Kurgu</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="flex-none w-[140px] md:w-[220px] lg:w-[280px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800" onclick="openVideo('Di310WS8zLk')">
<img alt="Film" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1533158307587-828f0a76ef46?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-2 left-3 right-3 z-10">
<h3 className="text-white font-medium text-sm truncate drop-shadow-md">Kentsel Savaş</h3>
<p className="text-zinc-400 text-xs truncate opacity-0 group-hover:opacity-100 transition-opacity">2024 • Sokak Çatışması</p>
</div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
<iconify-icon className="text-white drop-shadow-lg text-4xl md:text-5xl" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="pl-4 md:pl-12">
<h2 className="text-base md:text-lg font-semibold tracking-tight text-zinc-100 mb-2 md:mb-4 px-1">İzlemeye Devam Et</h2>
<div className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 pr-4 md:pr-12">

<div className="flex-none w-[160px] md:w-[240px] lg:w-[300px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800 flex flex-col" onclick="openVideo('rrwycJ08PSA')">
<div className="relative flex-grow">
<img alt="Film" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1508169351866-777fc0047ac5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
<div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center bg-black/50 hover:bg-white hover:text-black transition-colors">
<iconify-icon className="text-2xl" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900 h-10 w-full flex items-center justify-between px-3 relative border-t border-zinc-800">
<div className="absolute top-0 left-0 w-full h-[2px] bg-zinc-700">
<div className="h-full bg-red-700 w-[66%]"></div>
</div>
<span className="text-xs font-medium text-zinc-300">Cehennem Kapıları - S1:B4 "Karanlık Yüz"</span>
<iconify-icon className="text-zinc-400 hover:text-white text-lg" icon="solar:info-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-none w-[160px] md:w-[240px] lg:w-[300px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800 flex flex-col" onclick="openVideo('ndl1W4ltcmg')">
<div className="relative flex-grow">
<img alt="Film" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
<div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center bg-black/50 hover:bg-white hover:text-black transition-colors">
<iconify-icon className="text-2xl" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900 h-10 w-full flex items-center justify-between px-3 relative border-t border-zinc-800">
<div className="absolute top-0 left-0 w-full h-[2px] bg-zinc-700">
<div className="h-full bg-red-700 w-[25%]"></div>
</div>
<span className="text-xs font-medium text-zinc-300">Hız Sınırı</span>
<iconify-icon className="text-zinc-400 hover:text-white text-lg" icon="solar:info-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-none w-[160px] md:w-[240px] lg:w-[300px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800 flex flex-col" onclick="openVideo('b9EkMc79ZSU')">
<div className="relative flex-grow">
<img alt="Film" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
<div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center bg-black/50 hover:bg-white hover:text-black transition-colors">
<iconify-icon className="text-2xl" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900 h-10 w-full flex items-center justify-between px-3 relative border-t border-zinc-800">
<div className="absolute top-0 left-0 w-full h-[2px] bg-zinc-700">
<div className="h-full bg-red-700 w-[85%]"></div>
</div>
<span className="text-xs font-medium text-zinc-300">Karanlık Orman</span>
<iconify-icon className="text-zinc-400 hover:text-white text-lg" icon="solar:info-circle-linear"></iconify-icon>
</div>
</div>

<div className="flex-none w-[160px] md:w-[240px] lg:w-[300px] aspect-video relative group cursor-pointer card-hover rounded-md overflow-hidden bg-zinc-800 flex flex-col" onclick="openVideo('oqxA15ApZ1I')">
<div className="relative flex-grow">
<img alt="Film" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
<div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center bg-black/50 hover:bg-white hover:text-black transition-colors">
<iconify-icon className="text-2xl" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="bg-zinc-900 h-10 w-full flex items-center justify-between px-3 relative border-t border-zinc-800">
<div className="absolute top-0 left-0 w-full h-[2px] bg-zinc-700">
<div className="h-full bg-red-700 w-[10%]"></div>
</div>
<span className="text-xs font-medium text-zinc-300">Kayıp Zaman</span>
<iconify-icon className="text-zinc-400 hover:text-white text-lg" icon="solar:info-circle-linear"></iconify-icon>
</div>
</div>
</div>
</section>
</main>

<footer className="max-w-5xl mx-auto px-4 py-8 md:py-12 mt-10 text-zinc-500 text-sm">
<div className="flex gap-4 mb-6">
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:facebook-linear"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:instagram-linear"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon className="text-2xl" icon="solar:youtube-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
<a className="hover:underline" href="#">Seslendirme ve Alt Yazı</a>
<a className="hover:underline" href="#">Sesli Betimleme</a>
<a className="hover:underline" href="#">Yardım Merkezi</a>
<a className="hover:underline" href="#">Hediye Kartları</a>
<a className="hover:underline" href="#">Medya Merkezi</a>
<a className="hover:underline" href="#">Yatırımcı İlişkileri</a>
<a className="hover:underline" href="#">İş İmkanları</a>
<a className="hover:underline" href="#">Kullanım Koşulları</a>
<a className="hover:underline" href="#">Gizlilik</a>
<a className="hover:underline" href="#">Yasal Hükümler</a>
<a className="hover:underline" href="#">Çerez Tercihleri</a>
<a className="hover:underline" href="#">Kurumsal Bilgiler</a>
<a className="hover:underline" href="#">Bize Ulaşın</a>
</div>
<button className="border border-zinc-500 text-zinc-400 hover:text-white hover:border-white transition-colors px-3 py-1.5 text-xs mb-4">
            Hizmet Kodu
        </button>
<p className="text-xs">© 2024 MOVIEHELL, Inc.</p>
</footer>

<div className="fixed inset-0 z-[100] bg-black hidden flex-col items-center justify-center opacity-0 pointer-events-none" id="videoModal">

<button className="absolute top-4 right-4 md:top-8 md:right-8 z-[110] text-zinc-400 hover:text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-all flex items-center justify-center group" onclick="closeVideo()">
<iconify-icon className="text-4xl" icon="solar:close-circle-linear"></iconify-icon>
</button>

<div className="w-full h-full max-w-[100vw] max-h-[100vh] relative">
<iframe allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen="" className="absolute top-0 left-0 w-full h-full border-0" id="youtubePlayer" src="">
</iframe>
</div>
</div>



    </>
  );
}
