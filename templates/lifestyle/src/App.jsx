import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
dark: '#0B0C24',
purple: '#4F46E5',
orange: '#FF5722',
light: '#E2E8F0'
}
},
fontSize: {
xs: '0.8rem',
sm: '0.925rem',
base: '1.05rem',
lg: '1.175rem',
xl: '1.35rem',
'2xl': '1.6rem',
'3xl': '2rem',
'4xl': '2.5rem',
'5xl': '3.25rem',
'6xl': '4rem',
}
}
}
}



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


    (function() {
      let lastScrollY = window.scrollY;
      const brandingArea = document.getElementById('branding-area');
      
      function updateHeader() {
        const currentScrollY = window.scrollY;
        
        // Thresholds
        const hideThreshold = 100;

        if (currentScrollY > lastScrollY && currentScrollY > hideThreshold) {
          // SCROLL DOWN: Hide Title
          brandingArea.style.maxHeight = '0px';
          brandingArea.style.opacity = '0';
          brandingArea.style.paddingTop = '0px';
          brandingArea.style.paddingBottom = '0px';
        } else if (currentScrollY < lastScrollY || currentScrollY <= hideThreshold) {
          // SCROLL UP or AT TOP: Show Title
          brandingArea.style.maxHeight = '500px';
          brandingArea.style.opacity = '1';
          // Reset paddings to class values (via empty string)
          brandingArea.style.paddingTop = ''; 
          brandingArea.style.paddingBottom = '';
        }
        
        lastScrollY = currentScrollY;
      }

      // Throttled scroll listener
      let ticking = false;
      window.addEventListener('scroll', function() {
        if (!ticking) {
          window.requestAnimationFrame(function() {
            updateHeader();
            ticking = false;
          });
          ticking = true;
        }
      });
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute invert-0 hue-rotate-90 saturate-50 opacity-50" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="x6cbPWi9roeeiZ8cuBu3"></div>

</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-[800px] bg-gradient-to-b from-white to-transparent opacity-100"></div>
<div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse bg-slate-100/60" style={{}}></div>
<div className="absolute bottom-40 left-[-100px] w-[600px] h-[600px] mix-blend-multiply filter blur-[100px] opacity-70 bg-rose-50/60" style={{}}></div>

<iconify-icon className="absolute top-24 left-12 text-slate-300 opacity-60 w-8 h-8" icon="solar:camera-minimalistic-bold-duotone" style={{}}></iconify-icon>
<iconify-icon className="absolute top-48 right-12 text-slate-300 opacity-60 w-6 h-6" icon="solar:sun-2-bold-duotone" style={{}}></iconify-icon>
</div>

<nav className="flex flex-col z-50 sticky transition-all duration-300 font-manrope bg-white/95 w-full border-slate-200/50 border-b top-0 shadow-sm backdrop-blur-md">

<div className="md:px-12 bg-[#f9f7f4]/80 w-full border-[#eceae6] border-b pt-3 pr-6 pb-3 pl-6 relative transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden" id="utility-bar">
<div className="flex flex-col md:flex-row gap-4 max-w-7xl mr-auto ml-auto gap-x-4 gap-y-4 items-center justify-between">

<div className="flex flex-wrap justify-center gap-6 text-[11px] font-medium tracking-[0.15em] text-slate-500 uppercase" style={{}}>
<a className="hover:text-slate-900 transition-colors font-geist" href="/" style={{}}>Home</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="#" style={{}}>Blog</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="#" style={{}}>Stories</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="#" style={{}}>Shop</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="#" style={{}}>Media</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="#" style={{}}>Connect</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="#" style={{}}>Help</a>
</div>

<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<div className="flex items-center gap-5 text-slate-400" style={{}}>
<a className="hover:text-slate-900 transition-colors" href="#" style={{}}><iconify-icon className="w-3.5 h-3.5" icon="fa6-brands:instagram"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#" style={{}}><iconify-icon className="w-3.5 h-3.5" icon="fa6-brands:facebook-f"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#" style={{}}><iconify-icon className="w-3.5 h-3.5" icon="fa6-brands:twitter"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#" style={{}}><iconify-icon className="w-3.5 h-3.5" icon="fa6-brands:youtube"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#" style={{}}><iconify-icon className="w-3.5 h-3.5" icon="fa6-brands:pinterest-p"></iconify-icon></a>
<a className="hover:text-slate-900 transition-colors" href="#" style={{}}><iconify-icon className="w-3.5 h-3.5" icon="fa6-solid:rss"></iconify-icon></a>
</div>
<div className="hidden md:flex relative items-center">
<input className="focus:border-slate-200 transition-colors text-[10px] placeholder:text-slate-400 outline-none text-slate-600 tracking-widest bg-white/80 w-48 border-transparent border rounded-sm pt-1.5 pr-8 pb-1.5 pl-3" placeholder="SEARCH ARTICLES ..." style={{}} type="text"/>
<button className="absolute right-2.5 text-slate-400 hover:text-slate-600" style={{}}>
<iconify-icon className="w-3 h-3" icon="fa6-solid:magnifying-glass"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="flex w-full items-center justify-center overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] md:py-8 pt-8 pb-8 origin-top opacity-100 max-h-[500px]" id="branding-area" style={{maxHeight: '0px', paddingTop: '0px', paddingBottom: '0px'}}>
<a className="group flex flex-col md:flex-row items-center md:items-baseline gap-2 md:gap-5 select-none pr-4 pl-4" href="#">
<span className="text-3xl md:text-[3.5rem] leading-none tracking-[0.1em] text-slate-500 uppercase font-playfair" style={{}}>The</span>
<span className="text-5xl md:text-[5.5rem] leading-none text-slate-800 -rotate-2 transform px-2 group-hover:-rotate-3 transition-transform duration-300 font-playfair" style={{}}>Daily</span>
<span className="text-3xl md:text-[3.5rem] leading-none tracking-[0.1em] text-slate-500 uppercase font-playfair" style={{}}>Muse</span>
</a>
</div>

<div className="w-full border-t border-b border-slate-200/80 sticky top-0 z-40 bg-white/95 backdrop-blur-md" style={{}}>
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex justify-between md:justify-center items-center py-4 md:py-5">

<button className="md:hidden text-slate-600 hover:text-slate-900" style={{}}>
<iconify-icon className="w-6 h-6" icon="heroicons:bars-3-bottom-left"></iconify-icon>
</button>

<div className="hidden md:flex items-center gap-10 text-[11px] font-semibold tracking-[0.15em] text-slate-600 uppercase font-manrope" style={{}}>
<a className="text-slate-400 hover:text-rose-500 transition-colors" href="#" style={{}}>
<iconify-icon className="w-3.5 h-3.5 mb-0.5" icon="fa6-solid:house"></iconify-icon>
</a>
<a className="hover:text-rose-500 transition-colors relative group font-geist" href="#" style={{}}>
            Featured
            <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{}}></span>
</a>
<a className="hover:text-rose-500 transition-colors relative group font-geist" href="#" style={{}}>
            Travel
            <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{}}></span>
</a>
<a className="hover:text-rose-500 transition-colors relative group font-geist" href="#" style={{}}>
            Style
            <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{}}></span>
</a>
<div className="group relative flex items-center gap-1 cursor-pointer hover:text-rose-500 transition-colors font-geist" style={{}}>
            Living
            <iconify-icon className="w-2 h-2 text-slate-300 group-hover:text-rose-500" icon="fa6-solid:caret-down" style={{}}></iconify-icon>
<span className="absolute -bottom-5 left-0 w-full h-0.5 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{}}></span>
</div>
<div className="group relative flex items-center gap-1 cursor-pointer hover:text-rose-500 transition-colors font-geist" style={{}}>
            Wellness
            <iconify-icon className="w-2 h-2 text-slate-300 group-hover:text-rose-500" icon="fa6-solid:caret-down" style={{}}></iconify-icon>
<span className="absolute -bottom-5 left-0 w-full h-0.5 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{}}></span>
</div>
<a className="hover:text-rose-500 transition-colors relative group font-geist" href="#" style={{}}>
            Gear
            <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{}}></span>
</a>
<a className="hover:text-rose-500 transition-colors relative group font-geist" href="#" style={{}}>
            Shop
            <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{}}></span>
</a>
<div className="group relative flex items-center gap-1 cursor-pointer hover:text-rose-500 transition-colors font-geist" style={{}}>
            Community
            <iconify-icon className="w-2 h-2 text-slate-300 group-hover:text-rose-500" icon="fa6-solid:caret-down" style={{}}></iconify-icon>
<span className="absolute -bottom-5 left-0 w-full h-0.5 bg-rose-500 opacity-0 group-hover:opacity-100 transition-opacity" style={{}}></span>
</div>
<a className="hover:text-rose-500 transition-colors ml-4 text-slate-400" href="#" style={{}}>
<iconify-icon className="w-3.5 h-3.5" icon="fa6-solid:cart-shopping"></iconify-icon>
</a>
</div>

<button className="md:hidden text-slate-600" style={{}}>
<iconify-icon className="w-5 h-5" icon="heroicons:magnifying-glass"></iconify-icon>
</button>
</div>
</div>
</div>

</nav>

<section className="z-10 md:px-12 md:pt-20 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-24 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div className="flex flex-col items-start gap-2">
<span className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-500 font-geist">
              Welcome to The Daily Muse
            </span>
<h1 className="text-5xl md:text-6xl text-slate-900 tracking-tight leading-[1.1] font-playfair font-medium">
              Curate Your
              <br/>
<span className="inline-block text-rose-400 transform -rotate-2 origin-bottom-left mt-2 font-playfair font-medium">
                Perfect Lifestyle
              </span>
</h1>
</div>
<p className="text-lg md:text-xl text-slate-600 max-w-md leading-relaxed font-playfair font-medium">
            Join a diverse community of creatives and explorers dedicated to
            finding beauty in the everyday and living intentionally.
          </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="group hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex font-bold tracking-widest uppercase text-xs text-white bg-slate-900 hover:bg-rose-500 pt-4 pr-8 pb-4 pl-8 gap-3 items-center font-geist rounded-sm">
              Read Latest Stories
              <iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="relative h-[500px] flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr filter blur-[80px] opacity-40 transform scale-75 from-rose-100 to-slate-200"></div>
<div className="relative w-full h-full flex items-center justify-center group">

<div className="relative z-10 transform transition-transform duration-700 group-hover:scale-[1.02] rotate-[-2deg] group-hover:rotate-0">
<div className="absolute inset-0 border-[12px] border-white/90 z-20 pointer-events-none shadow-xl"></div>
<img alt="Lifestyle Travel" className="w-80 h-96 object-cover shadow-2xl bg-white" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute top-20 right-10 bg-white border border-slate-100 p-5 z-20 w-48 shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
<div className="text-[10px] font-bold uppercase tracking-wider mb-2 text-rose-400 font-geist">
                New Post
              </div>
<div className="text-slate-900 font-semibold leading-tight mb-3 font-playfair text-lg">
                Morning
                <br/>
                Routine
              </div>
<div className="flex items-end justify-between border-t border-slate-100 pt-3">
<span className="text-[10px] font-bold tracking-widest uppercase text-slate-400 font-geist">Read Now</span>
<iconify-icon className="w-4 h-4 text-rose-400" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-0 right-10 flex gap-3 z-30">
<button className="w-12 h-12 bg-white border border-slate-100 flex items-center justify-center hover:border-rose-300 hover:text-rose-500 transition shadow-sm text-slate-400">
<iconify-icon className="w-5 h-5" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-12 h-12 bg-white border border-slate-100 flex items-center justify-center hover:border-rose-300 hover:text-rose-500 transition shadow-sm text-slate-400">
<iconify-icon className="w-5 h-5" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden opacity-30 px-6 pointer-events-none">
<div className="flex gap-2">
<svg className="w-full h-2 text-rose-300" fill="none" preserveaspectratio="none" viewbox="0 0 1200 20" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10 L110 0 L120 10 L130 0 L140 10 L150 0 L160 10 L170 0 L180 10 L190 0 L200 10 L210 0 L220 10 L230 0 L240 10 L250 0 L260 10 L270 0 L280 10 L290 0 L300 10 L310 0 L320 10 L330 0 L340 10 L350 0 L360 10 L370 0 L380 10 L390 0 L400 10 L410 0 L420 10 L430 0 L440 10 L450 0 L460 10 L470 0 L480 10 L490 0 L500 10 L510 0 L520 10 L530 0 L540 10 L550 0 L560 10 L570 0 L580 10 L590 0 L600 10 L610 0 L620 10 L630 0 L640 10 L650 0 L660 10 L670 0 L680 10 L690 0 L700 10 L710 0 L720 10 L730 0 L740 10 L750 0 L760 10 L770 0 L780 10 L790 0 L800 10 L810 0 L820 10 L830 0 L840 10 L850 0 L860 10 L870 0 L880 10 L890 0 L900 10 L910 0 L920 10 L930 0 L940 10 L950 0 L960 10 L970 0 L980 10 L990 0 L1000 10 L1010 0 L1020 10 L1030 0 L1040 10 L1050 0 L1060 10 L1070 0 L1080 10 L1090 0 L1100 10 L1110 0 L1120 10 L1130 0 L1140 10 L1150 0 L1160 10 L1170 0 L1180 10 L1190 0 L1200 10" stroke="currentColor" strokeWidth="1"></path>
</svg>
</div>
</div>
</section>
<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-24">

<div className="space-y-12">

<div className="text-center space-y-2">
<div className="flex items-center justify-center gap-3 text-slate-900" style={{}}>
<span className="text-5xl text-rose-400 transform -rotate-2 origin-bottom-right font-playfair font-medium" style={{}}>
              featured
            </span>
<span className="text-sm font-semibold tracking-[0.2em] uppercase mt-2 font-geist">
              From The Blog
            </span>
</div>
</div>

<div className="grid md:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="bg-white p-4 pb-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100" style={{}}>
<div className="relative overflow-hidden aspect-[4/3] mb-8">
<div className="absolute inset-0 border-[12px] border-white/90 z-20 pointer-events-none"></div>
<img alt="Travel Zodiac" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1540544660406-6a69dacb2804?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="text-center px-4">
<h3 className="text-xl text-slate-800 leading-tight mb-6 font-playfair font-medium" style={{}}>
                Top Destinations for 2026
                <br/>
<span className="text-slate-500 font-playfair font-medium" style={{}}>
                  Curated for Adventure
                </span>
</h3>
<div className="w-12 h-px bg-slate-200 mx-auto mb-6" style={{}}></div>
<a className="inline-block text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-rose-500 transition-colors font-geist" href="#" style={{}}>
                Explore Now
              </a>
</div>
</div>

<div className="bg-white p-4 pb-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100" style={{}}>
<div className="relative overflow-hidden aspect-[4/3] mb-8">
<div className="absolute inset-0 border-[12px] border-white/90 z-20 pointer-events-none"></div>
<img alt="Travel Blog Guide" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d25470c5-c654-4a36-94a1-8b34b5cdb243_800w.webp" style={{}}/>
</div>
<div className="text-center px-4">
<h3 className="text-xl text-slate-800 leading-tight mb-6 font-playfair font-medium" style={{}}>
                Mastering the Art of
                <br/>
<span className="text-slate-500 font-playfair font-medium" style={{}}>
                  Solo Travel Photography
                </span>
</h3>
<div className="w-12 h-px bg-slate-200 mx-auto mb-6" style={{}}></div>
<a className="inline-block text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-rose-500 transition-colors font-geist" href="#" style={{}}>
                Read Guide
              </a>
</div>
</div>

<div className="bg-white p-4 pb-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100" style={{}}>
<div className="relative overflow-hidden aspect-[4/3] mb-8">
<div className="absolute inset-0 border-[12px] border-white/90 z-20 pointer-events-none"></div>
<img alt="Bucket List" className="transform group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/41d72f04-274b-493d-9ffd-2227758265f0_800w.jpg"/>
</div>
<div className="text-center px-4">
<h3 className="text-xl text-slate-800 leading-tight mb-6 font-playfair font-medium" style={{}}>
                The Ultimate Summer
                <br/>
<span className="text-slate-500 font-playfair font-medium" style={{}}>Itinerary 2026</span>
</h3>
<div className="w-12 h-px bg-slate-200 mx-auto mb-6" style={{}}></div>
<a className="inline-block text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-rose-500 transition-colors font-geist" href="#" style={{}}>
                View Plans
              </a>
</div>
</div>
</div>
</div>

<div className="w-full overflow-hidden opacity-30">
<div className="flex gap-2">
<svg className="w-full h-2 text-rose-300" fill="none" preserveaspectratio="none" style={{}} viewbox="0 0 1200 20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10 L110 0 L120 10 L130 0 L140 10 L150 0 L160 10 L170 0 L180 10 L190 0 L200 10 L210 0 L220 10 L230 0 L240 10 L250 0 L260 10 L270 0 L280 10 L290 0 L300 10 L310 0 L320 10 L330 0 L340 10 L350 0 L360 10 L370 0 L380 10 L390 0 L400 10 L410 0 L420 10 L430 0 L440 10 L450 0 L460 10 L470 0 L480 10 L490 0 L500 10 L510 0 L520 10 L530 0 L540 10 L550 0 L560 10 L570 0 L580 10 L590 0 L600 10 L610 0 L620 10 L630 0 L640 10 L650 0 L660 10 L670 0 L680 10 L690 0 L700 10 L710 0 L720 10 L730 0 L740 10 L750 0 L760 10 L770 0 L780 10 L790 0 L800 10 L810 0 L820 10 L830 0 L840 10 L850 0 L860 10 L870 0 L880 10 L890 0 L900 10 L910 0 L920 10 L930 0 L940 10 L950 0 L960 10 L970 0 L980 10 L990 0 L1000 10 L1010 0 L1020 10 L1030 0 L1040 10 L1050 0 L1060 10 L1070 0 L1080 10 L1090 0 L1100 10 L1110 0 L1120 10 L1130 0 L1140 10 L1150 0 L1160 10 L1170 0 L1180 10 L1190 0 L1200 10" stroke="currentColor" strokeWidth="1"></path>
</svg>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-12 gap-x-12 gap-y-12 items-start">

<div className="lg:col-span-8">
<div className="bg-[#F5F2EA] relative p-6 md:p-10 shadow-lg rotate-[-1deg]">

<div className="absolute inset-0 opacity-30 pointer-events-none bg-cover bg-center bg-[url(default)]"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 h-full">

<div className="md:w-5/12 relative pt-4">

<div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/60 rotate-2 z-20 backdrop-blur-sm shadow-sm" style={{}}></div>
<div className="bg-white p-3 shadow-md rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
<div className="aspect-[3/4] overflow-hidden bg-slate-200 relative group" style={{}}>
<img alt="Isabella Profile" className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/582afef4-b810-47b8-a047-8b3597c323e1_800w.webp" style={{}}/>

<div className="absolute bottom-0 right-0 w-24 h-24 text-white/80 pointer-events-none translate-y-4 translate-x-4">
<iconify-icon height="100%" icon="solar:leaf-bold-duotone" width="100%"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden md:block w-px border-l-2 border-dashed border-slate-300/60 self-stretch my-4" style={{}}></div>

<div className="md:w-7/12 flex flex-col relative pt-2">

<div className="absolute top-0 right-0 w-20 h-24 border-4 border-slate-300/40 p-1 rotate-6 opacity-60" style={{}}>
<div className="w-full h-full border border-slate-300/40 flex items-center justify-center" style={{}}>
<div className="text-center">
<div className="text-[8px] uppercase tracking-widest text-slate-400 font-geist" style={{}}>
                        Post
                      </div>
<div className="text-[8px] uppercase tracking-widest text-slate-400 font-geist" style={{}}>
                        Card
                      </div>
</div>
</div>
<div className="absolute -left-8 top-4 w-32 h-12">
<svg className="w-full h-full text-slate-300 fill-none stroke-current" style={{}} viewbox="0 0 200 50">
<path d="M0 25 Q 10 10, 20 25 T 40 25 T 60 25 T 80 25 T 100 25" strokeWidth="2"></path>
<path d="M0 35 Q 10 20, 20 35 T 40 35 T 60 35 T 80 35 T 100 35" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none -translate-x-4 -translate-y-2">
<div className="w-full h-full border border-slate-900 flex items-center justify-center rotate-[-15deg]" style={{}}>
<span className="text-[8px] font-bold uppercase tracking-widest font-geist">
                      Air Mail
                    </span>
</div>
</div>
<div className="mt-8 md:mt-20 text-center md:text-left z-10">
<h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 text-center font-geist" style={{}}>
                    About Isabella
                  </h4>
<p className="text-slate-600 text-sm leading-relaxed text-center mb-8 font-serif italic font-geist" style={{}}>
                    "Hi there, I'm Bella! A former graphic designer from NYC who traded pixel-perfect layouts for passport stamps. I'm currently based in Lisbon and have explored over 45 countries solo!"
                  </p>
<div className="flex justify-center">
<button className="bg-[#D6Cfc7] hover:bg-[#c5beB6] text-white text-[10px] font-bold uppercase tracking-[0.15em] px-8 py-3 transition-colors shadow-sm font-geist">
                      Read My Journey
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6 pt-4">
<div className="flex items-end gap-3 mb-2">
<span className="text-5xl text-slate-800 -mb-2 font-playfair font-medium" style={{}}>
              travel
            </span>
<span className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-500 mb-1 font-geist" style={{}}>
              Smart
            </span>
</div>
<div className="bg-white p-2 shadow-lg border border-slate-100 rotate-1 transition-transform hover:rotate-0 duration-500" style={{}}>
<div className="aspect-square bg-slate-100 overflow-hidden relative" style={{}}>
<img alt="Travel" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" style={{}}></div>
</div>
</div>
<div className="space-y-4 pt-2">
<p className="text-xs leading-relaxed text-slate-500 font-geist" style={{}}>
              Master the art of luxury travel on a budget using smart planning and local insights.
            </p>
<div className="space-y-1">
<a className="group flex items-center justify-between py-3 px-4 bg-slate-50 hover:bg-rose-50 transition-colors border border-slate-100" href="#" style={{}}>
<span className="text-xs font-medium text-slate-600 group-hover:text-rose-600 font-geist" style={{}}>
                  The Ultimate Solo Travel Guide
                </span>
<iconify-icon className="text-slate-400 group-hover:text-rose-500 group-hover:translate-x-1 transition-all" icon="solar:alt-arrow-right-linear" style={{}}></iconify-icon>
</a>
<a className="group flex items-center justify-between py-3 px-4 bg-slate-50 hover:bg-rose-50 transition-colors border border-slate-100" href="#" style={{}}>
<span className="text-xs font-medium text-slate-600 group-hover:text-rose-600 font-geist" style={{}}>
                  Budgeting for Long-Term Trips
                </span>
<iconify-icon className="text-slate-400 group-hover:text-rose-500 group-hover:translate-x-1 transition-all" icon="solar:alt-arrow-right-linear" style={{}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-24">
<div className="space-y-12">

<div className="text-center space-y-6">
<div className="flex flex-col md:flex-row items-center justify-center gap-3 text-slate-900">
<span className="text-5xl md:text-6xl text-rose-400 transform -rotate-2 origin-bottom-right font-playfair font-medium tracking-tight">
          Mindful Living
        </span>
<span className="text-sm font-semibold tracking-[0.2em] uppercase mt-2 font-geist text-slate-500">
          &amp; Travel Guides
        </span>
</div>
<p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed font-geist">
        Dive into immersive travel guides and wellness tips that bring together leading creators and industry visionaries to shape your daily routine.
      </p>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-4 pb-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100">
<div className="relative overflow-hidden aspect-[4/3] mb-8">
<div className="absolute inset-0 border-[12px] border-white/90 z-20 pointer-events-none"></div>
<img alt="Health &amp; Nutrition" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04c36bec-6a5c-4089-b2d8-9984e9ef8e4f_800w.webp"/>
</div>
<div className="text-center px-4">
<h3 className="text-xl text-slate-800 leading-tight mb-6 font-playfair font-medium tracking-tight">
            Health &amp; Nutrition
            </h3>
<div className="w-12 h-px bg-slate-200 mx-auto mb-6"></div>
<a className="inline-block text-[10px] font-semibold tracking-widest uppercase text-slate-400 hover:text-rose-500 transition-colors font-geist" href="#">
            Read Article
          </a>
</div>
</div>

<div className="bg-white p-4 pb-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100">
<div className="relative overflow-hidden aspect-[4/3] mb-8">
<div className="absolute inset-0 border-[12px] border-white/90 z-20 pointer-events-none"></div>
<img alt="Career &amp; Productivity" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a042a19-645a-4b4a-99d8-ee5365581abc_800w.jpg"/>
</div>
<div className="text-center px-4">
<h3 className="text-xl text-slate-800 leading-tight mb-6 font-playfair font-medium tracking-tight">
            Career &amp; Productivity
            <br/>
<span className="text-slate-500 font-playfair font-medium text-base">
              Trending
            </span>
</h3>
<div className="w-12 h-px bg-slate-200 mx-auto mb-6"></div>
<a className="inline-block text-[10px] font-semibold tracking-widest uppercase text-slate-400 hover:text-rose-500 transition-colors font-geist" href="#">
            Read Article
          </a>
</div>
</div>

<div className="bg-white p-4 pb-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100">
<div className="relative overflow-hidden aspect-[4/3] mb-8">
<div className="absolute inset-0 border-[12px] border-white/90 z-20 pointer-events-none"></div>
<img alt="Design Diaries" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a770c41-641b-4378-92d4-4d0a9a4e1dda_800w.jpg"/>
</div>
<div className="text-center px-4">
<h3 className="text-xl text-slate-800 leading-tight mb-6 font-playfair font-medium tracking-tight">
            Design Diaries
            <br/>
<span className="text-slate-500 font-playfair font-medium text-base">
              New
            </span>
</h3>
<div className="w-12 h-px bg-slate-200 mx-auto mb-6"></div>
<a className="inline-block text-[10px] font-semibold tracking-widest uppercase text-slate-400 hover:text-rose-500 transition-colors font-geist" href="#">
            Read Article
          </a>
</div>
</div>
</div>
</div>

<div className="w-full overflow-hidden opacity-30">
<div className="flex gap-2">
<svg className="w-full h-2 text-rose-300" fill="none" preserveaspectratio="none" viewbox="0 0 1200 20" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10 L110 0 L120 10 L130 0 L140 10 L150 0 L160 10 L170 0 L180 10 L190 0 L200 10 L210 0 L220 10 L230 0 L240 10 L250 0 L260 10 L270 0 L280 10 L290 0 L300 10 L310 0 L320 10 L330 0 L340 10 L350 0 L360 10 L370 0 L380 10 L390 0 L400 10 L410 0 L420 10 L430 0 L440 10 L450 0 L460 10 L470 0 L480 10 L490 0 L500 10 L510 0 L520 10 L530 0 L540 10 L550 0 L560 10 L570 0 L580 10 L590 0 L600 10 L610 0 L620 10 L630 0 L640 10 L650 0 L660 10 L670 0 L680 10 L690 0 L700 10 L710 0 L720 10 L730 0 L740 10 L750 0 L760 10 L770 0 L780 10 L790 0 L800 10 L810 0 L820 10 L830 0 L840 10 L850 0 L860 10 L870 0 L880 10 L890 0 L900 10 L910 0 L920 10 L930 0 L940 10 L950 0 L960 10 L970 0 L980 10 L990 0 L1000 10 L1010 0 L1020 10 L1030 0 L1040 10 L1050 0 L1060 10 L1070 0 L1080 10 L1090 0 L1100 10 L1110 0 L1120 10 L1130 0 L1140 10 L1150 0 L1160 10 L1170 0 L1180 10 L1190 0 L1200 10" stroke="currentColor" strokeWidth="1"></path>
</svg>
</div>
</div>
</section>

<section className="overflow-hidden flex flex-col w-full z-10 pt-32 pb-32 relative items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
<h2 className="text-[15vw] md:text-[20vw] text-slate-900 opacity-[0.03] leading-none tracking-tighter text-center whitespace-nowrap font-playfair font-medium" style={{}}>
          LIFE
          <br/>
          STYLE
        </h2>
</div>

<div className="relative z-20 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-t shadow-[0_20px_60px_-15px_rgba(45,212,191,0.5)] flex items-center justify-center transform hover:scale-105 transition-transform duration-700 to-slate-300 from-slate-400" style={{}}>
<div className="absolute inset-2 bg-slate-50 flex items-center justify-center overflow-hidden" style={{}}>
<iconify-icon className="w-48 h-48 animate-pulse text-slate-500" icon="solar:cup-hot-bold-duotone" style={{}}></iconify-icon>

<div className="-translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent to-slate-100/50 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19886223-5914-489b-ba8e-8716a30190a0_800w.webp)] bg-cover bg-center absolute top-1/2 left-1/2"></div>
</div>
</div>

<div className="glass-strong mt-[-40px] relative z-30 px-2 py-2 flex items-center gap-4 md:gap-8 max-w-2xl mx-6 shadow-2xl shadow-slate-300/50" style={{}}>
<div className="flex flex-col pl-6">
<div className="flex text-xs text-slate-500" style={{}}>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" style={{}}></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" style={{}}></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" style={{}}></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" style={{}}></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" style={{}}></iconify-icon>
</div>
<span className="text-[10px] text-slate-500 font-medium uppercase tracking-wide mt-1 font-geist" style={{}}>
            Editor's Choice
          </span>
</div>
<div className="h-8 w-px bg-slate-200" style={{}}></div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 flex items-center justify-center transition shadow-md bg-slate-500 hover:bg-slate-600" style={{}}>
<iconify-icon className="text-white w-5 h-5 ml-0.5" icon="solar:play-bold"></iconify-icon>
</button>
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase tracking-wide font-bold font-geist" style={{}}>
              Watch
            </span>
<span className="text-xs text-slate-900 font-medium font-geist" style={{}}>
              Morning Routine
            </span>
</div>
</div>
<div className="ml-auto">
<button className="text-white px-6 py-2.5 rounded-full text-sm font-medium transition flex items-center gap-2 bg-slate-500 hover:bg-slate-600 font-geist" style={{}}>
            Subscribe
            <iconify-icon className="w-4 h-4" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>
<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 bg-white font-manrope">

<div className="text-center mb-16 md:mb-24">
<h2 className="md:text-5xl uppercase text-3xl font-medium text-gray-500 tracking-[0.2em] font-playfair">
      Discover Global Destinations
    </h2>
</div>
<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-3 flex flex-col gap-10">

<div className="border p-8 bg-white relative border-gray-200" style={{}}>
<h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-gray-400 font-geist" style={{}}>
          Click to Expand
        </h3>
<ul className="space-y-5">
<li className="group flex items-center gap-3 hover:text-rose-400 cursor-pointer transition-colors duration-300 text-gray-400" style={{}}>
<span className="font-serif italic text-rose-200 font-bold w-4 text-sm font-geist" style={{}}>1</span>
<div className="w-1.5 h-1.5 rotate-45 bg-rose-100 group-hover:bg-rose-400 transition-colors" style={{}}></div>
<span className="text-[10px] uppercase group-hover:translate-x-1 transition-transform font-bold tracking-widest font-geist">Africa</span>
</li>
<li className="group flex items-center gap-3 hover:text-rose-400 cursor-pointer transition-colors duration-300 text-gray-400" style={{}}>
<span className="font-serif italic text-rose-200 font-bold w-4 text-sm font-geist" style={{}}>2</span>
<div className="w-1.5 h-1.5 rotate-45 bg-rose-100 group-hover:bg-rose-400 transition-colors" style={{}}></div>
<span className="text-[10px] font-bold tracking-widest uppercase group-hover:translate-x-1 transition-transform font-geist">Asia</span>
</li>
<li className="group flex items-center gap-3 hover:text-rose-400 cursor-pointer transition-colors duration-300 text-gray-400" style={{}}>
<span className="font-serif italic text-rose-200 font-bold w-4 text-sm font-geist" style={{}}>3</span>
<div className="w-1.5 h-1.5 rotate-45 bg-rose-100 group-hover:bg-rose-400 transition-colors" style={{}}></div>
<span className="text-[10px] font-bold tracking-widest uppercase group-hover:translate-x-1 transition-transform font-geist">The Caribbean</span>
</li>
<li className="group flex items-center gap-3 hover:text-rose-400 cursor-pointer transition-colors duration-300 text-gray-400" style={{}}>
<span className="font-serif italic text-rose-200 font-bold w-4 text-sm font-geist" style={{}}>4</span>
<div className="w-1.5 h-1.5 rotate-45 bg-rose-100 group-hover:bg-rose-400 transition-colors" style={{}}></div>
<span className="text-[10px] font-bold tracking-widest uppercase group-hover:translate-x-1 transition-transform font-geist">Central America</span>
</li>
</ul></div>
<span className="text-[10px] font-bold tracking-widest uppercase group-hover:translate-x-1 transition-transform font-geist">South America</span>
</div>

<div className="relative mt-4 pl-4 hidden md:block">

<div className="absolute -left-6 -top-6 w-28 h-28 rounded-full border flex items-center justify-center -rotate-12 backdrop-blur-[1px] z-20 shadow-sm pointer-events-none border-gray-300 bg-gray-50/50" style={{}}>
<div className="absolute inset-1 rounded-full border border-dashed border-gray-300" style={{}}></div>
<div className="text-[9px] font-bold text-center tracking-[0.2em] leading-relaxed uppercase text-gray-500 font-geist" style={{}}>
            Currently<br/>Traveling<br/>In:
          </div>
<div className="absolute -top-1 left-1/2 -translate-x-1/2 text-gray-400" style={{}}>
<svg className="w-3 h-3" fill="currentColor" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"></path></svg>
</div>
</div>

<div className="ml-10 border rounded-2xl p-6 relative bg-white rotate-3 shadow-md min-w-[160px] border-gray-400" style={{}}>
<div className="absolute top-2 right-2 w-12 h-8 border opacity-50 border-gray-200" style={{}}></div>
<div className="uppercase text-sm font-bold text-gray-600 tracking-[0.2em] text-center mt-2 font-geist">Singapore</div>
<div className="w-full h-px mt-6 relative bg-gray-300" style={{}}>
<div className="absolute left-0 bottom-1 w-full h-px bg-gray-300" style={{}}></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-9 relative">

<div className="flex flex-col md:flex-row gap-6 mb-12">

<div className="w-full md:w-1/3 bg-gradient-to-b p-3 px-4 flex justify-between items-center text-xs font-bold tracking-widest border shadow-sm cursor-pointer transition-colors from-gray-100 to-gray-50 text-gray-500 border-gray-200 hover:bg-gray-50" style={{}}>
<span className="font-geist">BY DESTINATION</span>
<svg className="text-gray-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="m7 15 5 5 5-5"></path><path d="m7 9 5-5 5 5"></path></svg>
</div>

<div className="w-full md:w-2/3 bg-[#fcfbf9] p-3 px-4 flex justify-between items-center text-xs tracking-wide border-b text-gray-400 border-gray-200" style={{}}>
<span className="font-geist">SEARCH THE SITE ...</span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
</div>


<div className="aspect-[16/30] md:aspect-[16/9] overflow-hidden md:overflow-visible bg-white w-full rounded-lg relative">

<div className="absolute inset-0 opacity-[0.07] pointer-events-none select-none">

<img alt="World Map" className="w-full h-full object-contain grayscale" src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg" style={{}}/>
</div>

<div className="absolute top-[10%] left-[5%] md:left-[10%] w-24 md:w-28 group z-10 cursor-pointer">
<div className="bg-white p-1.5 md:p-2 shadow-lg rotate-[-2deg] group-hover:rotate-0 group-hover:scale-110 group-hover:z-50 transition-all duration-300 ease-out border shadow-gray-200 border-gray-100" style={{}}>
<div className="aspect-square overflow-hidden bg-gray-100" style={{}}>
<img alt="North America" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&amp;w=300&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
<div className="absolute -right-2 -top-2 w-6 h-6 bg-[#eaddcf] rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-sm border border-white font-geist">7</div>
<div className="text-center text-[8px] font-bold tracking-[0.15em] text-[#eaddcf] mt-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity font-geist">North America</div>
</div>

<div className="absolute top-[45%] left-[10%] md:left-[15%] w-20 md:w-24 group z-20 cursor-pointer">
<div className="bg-white p-1.5 shadow-lg rotate-[3deg] group-hover:rotate-0 group-hover:scale-110 group-hover:z-50 transition-all duration-300 border shadow-gray-200 border-gray-100" style={{}}>
<div className="aspect-square overflow-hidden bg-gray-100" style={{}}>
<img alt="Central America" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a881c16-60f5-4b04-a280-3c22e6064240_320w.jpg"/>
</div>
</div>
<div className="-left-2 -bottom-2 flex text-[9px] font-bold text-white bg-[#eaddcf] w-5 h-5 border-white border rounded-full absolute shadow-sm items-center justify-center font-geist">4</div>
<div className="text-[8px] uppercase group-hover:opacity-100 transition-opacity font-bold text-[#eaddcf] tracking-[0.15em] text-center opacity-0 mt-1 font-geist">Central America</div>
</div>

<div className="absolute top-[35%] left-[25%] md:left-[28%] w-20 md:w-24 group z-20 cursor-pointer">
<div className="bg-white p-1.5 shadow-lg rotate-[-4deg] group-hover:rotate-0 group-hover:scale-110 group-hover:z-50 transition-all duration-300 border shadow-gray-200 border-gray-100" style={{}}>
<div className="aspect-square overflow-hidden bg-gray-100" style={{}}>
<img alt="Caribbean" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://images.unsplash.com/photo-1500759285222-a95626b934cb?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute -right-2 top-1/2 w-5 h-5 bg-[#eaddcf] rounded-full flex items-center justify-center text-[9px] text-white font-bold shadow-sm border border-white font-geist">3</div>
<div className="text-center text-[8px] font-bold tracking-[0.15em] text-[#eaddcf] mt-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity font-geist">The Caribbean</div>
</div>

<div className="absolute bottom-[10%] left-[20%] md:left-[28%] w-24 md:w-28 group z-10 cursor-pointer">
<div className="bg-white p-1.5 md:p-2 shadow-lg rotate-[2deg] group-hover:rotate-0 group-hover:scale-110 group-hover:z-50 transition-all duration-300 border shadow-gray-200 border-gray-100" style={{}}>
<div className="aspect-square overflow-hidden bg-gray-100" style={{}}>
<img alt="South America" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute -left-2 top-1/2 w-6 h-6 bg-[#eaddcf] rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-sm border border-white font-geist">9</div>
<div className="text-center text-[8px] font-bold tracking-[0.15em] text-[#eaddcf] mt-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity font-geist">South America</div>
</div>

<div className="absolute top-[8%] left-[45%] md:left-[50%] w-24 md:w-28 group z-10 cursor-pointer">
<div className="bg-white p-1.5 md:p-2 shadow-lg rotate-[3deg] group-hover:rotate-0 group-hover:scale-110 group-hover:z-50 transition-all duration-300 border shadow-gray-200 border-gray-100" style={{}}>
<div className="aspect-square overflow-hidden bg-gray-100" style={{}}>
<img alt="Europe" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute -left-2 -top-1 w-6 h-6 bg-[#eaddcf] rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-sm border border-white font-geist">5</div>
<div className="text-center text-[8px] font-bold tracking-[0.15em] text-[#eaddcf] mt-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity font-geist">Europe</div>
</div>

<div className="absolute bottom-[15%] left-[50%] md:left-[55%] w-24 md:w-28 group z-10 cursor-pointer">
<div className="bg-white p-1.5 md:p-2 shadow-lg rotate-[-2deg] group-hover:rotate-0 group-hover:scale-110 group-hover:z-50 transition-all duration-300 border shadow-gray-200 border-gray-100" style={{}}>
<div className="aspect-square overflow-hidden bg-gray-100" style={{}}>
<img alt="Africa" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute -left-3 top-1/2 w-6 h-6 bg-[#eaddcf] rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-sm border border-white font-geist">1</div>
<div className="text-center text-[8px] font-bold tracking-[0.15em] text-[#eaddcf] mt-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity font-geist">Africa</div>
</div>

<div className="absolute top-[35%] right-[25%] md:right-[30%] w-20 md:w-24 group z-20 cursor-pointer">
<div className="bg-white p-1.5 shadow-lg rotate-[4deg] group-hover:rotate-0 group-hover:scale-110 group-hover:z-50 transition-all duration-300 border shadow-gray-200 border-gray-100" style={{}}>
<div className="aspect-square overflow-hidden bg-gray-100" style={{}}>
<img alt="Middle East" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e25c261-bade-44fc-98c3-cb5c1914c055_320w.webp"/>
</div>
</div>
<div className="absolute -left-2 -bottom-2 w-5 h-5 bg-[#eaddcf] rounded-full flex items-center justify-center text-[9px] text-white font-bold shadow-sm border border-white font-geist">6</div>
<div className="text-center text-[8px] font-bold tracking-[0.15em] text-[#eaddcf] mt-1 uppercase opacity-0 group-hover:opacity-100 transition-opacity font-geist">The Middle East</div>
</div>

<div className="absolute top-[25%] right-[5%] md:right-[10%] w-24 md:w-28 group z-10 cursor-pointer">
<div className="bg-white p-1.5 md:p-2 shadow-lg rotate-[-3deg] group-hover:rotate-0 group-hover:scale-110 group-hover:z-50 transition-all duration-300 border shadow-gray-200 border-gray-100" style={{}}>
<div className="aspect-square overflow-hidden bg-gray-100" style={{}}>
<img alt="Asia" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute -left-3 top-1/2 w-6 h-6 bg-[#eaddcf] rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-sm border border-white font-geist">2</div>
<div className="text-center text-[8px] font-bold tracking-[0.15em] text-[#eaddcf] mt-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity font-geist">Asia</div>
</div>

<div className="absolute bottom-[5%] right-[10%] md:right-[15%] w-24 md:w-28 group z-10 cursor-pointer">
<div className="bg-white p-1.5 md:p-2 shadow-lg rotate-[2deg] group-hover:rotate-0 group-hover:scale-110 group-hover:z-50 transition-all duration-300 border shadow-gray-200 border-gray-100" style={{}}>
<div className="aspect-square overflow-hidden bg-gray-100" style={{}}>
<img alt="Oceania" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute top-0 -left-2 w-6 h-6 bg-[#eaddcf] rounded-full flex items-center justify-center text-[10px] text-white font-bold shadow-sm border border-white font-geist">8</div>
<div className="text-center text-[8px] font-bold tracking-[0.15em] text-[#eaddcf] mt-2 uppercase opacity-0 group-hover:opacity-100 transition-opacity font-geist">Oceania</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-24 space-y-12">

<div className="text-center space-y-6 mb-12">
<div className="flex flex-col md:flex-row items-center justify-center gap-3 text-slate-900">
<span className="text-5xl md:text-6xl text-rose-400 transform -rotate-2 origin-bottom-right font-playfair font-medium tracking-tight">
            Community
          </span>
<span className="text-sm font-semibold tracking-[0.2em] uppercase mt-2 font-geist text-slate-500">
            Newsletter &amp; Events
          </span>
</div>
<p className="text-slate-600 max-w-2xl mx-auto text-base leading-relaxed font-geist text-center">
          Join 150k+ subscribers and stay updated with our latest podcast episodes, travel archives, and brand collaborations.
        </p>
</div>
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-3 space-y-10 pt-4">

<div className="flex items-start gap-4 group">
<div className="w-12 h-12 bg-white border border-slate-100 shadow-sm flex items-center justify-center shrink-0 text-rose-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="w-6 h-6" icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon>
</div>
<div>
<h4 className="text-2xl text-slate-800 font-playfair font-medium">150k+</h4>
<p className="text-xs font-bold tracking-widest uppercase text-slate-400 mt-1 font-geist">
                Subscribers
              </p>
</div>
</div>

<div className="flex items-start gap-4 group">
<div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center shrink-0 text-rose-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="w-6 h-6" icon="solar:map-point-bold-duotone"></iconify-icon>
</div>
<div>
<h4 className="text-xl text-slate-800 font-playfair font-medium">
                Studio
              </h4>
<p className="text-xs font-bold tracking-widest uppercase text-slate-400 mt-1 font-geist">
                London, UK
              </p>
</div>
</div>

<div className="flex items-start gap-4 group">
<div className="w-12 h-12 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center shrink-0 text-rose-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="w-6 h-6" icon="solar:calendar-bold-duotone"></iconify-icon>
</div>
<div className="">
<h4 className="text-xl text-slate-800 font-playfair font-medium">
                Next Meet
              </h4>
<p className="text-xs font-bold tracking-widest uppercase text-slate-400 mt-1 font-geist">
                Oct 12, 2024
              </p>
</div>
</div>

<div className="pt-6 space-y-3">
<button className="w-full bg-slate-800 text-white py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-rose-500 transition-colors flex items-center justify-center gap-2 font-geist">
              Join Community
            </button>
<button className="w-full bg-white text-slate-600 border border-slate-200 py-3.5 text-xs font-bold uppercase tracking-widest hover:border-rose-400 hover:text-rose-500 transition-colors flex items-center justify-center gap-2 font-geist">
              View Calendar
            </button>
</div>
</div>

<div className="lg:col-span-9 grid md:grid-cols-3 gap-6">

<div className="bg-white p-4 pb-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100">
<div className="relative overflow-hidden aspect-[4/3] mb-8">
<div className="absolute inset-0 border-[12px] border-white/90 z-20 pointer-events-none"></div>
<img alt="Podcast" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2aa98f9-eb91-46dd-8335-6eef0cfa77f2_800w.webp"/>
</div>
<div className="text-center px-4">
<h3 className="text-xl text-slate-800 leading-tight mb-6 font-playfair font-medium tracking-tight">
                Podcast
                <br/>
<span className="text-slate-500 font-playfair font-medium text-base">
                  Episodes
                </span>
</h3>
<div className="w-12 h-px bg-slate-200 mx-auto mb-6"></div>
<a className="inline-block text-[10px] font-semibold tracking-widest uppercase text-slate-400 hover:text-rose-500 transition-colors font-geist" href="#">
                Listen Now
              </a>
</div>
</div>

<div className="bg-white p-4 pb-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100">
<div className="relative overflow-hidden aspect-[4/3] mb-8">
<div className="absolute inset-0 border-[12px] border-white/90 z-20 pointer-events-none"></div>
<img alt="Travel Archive" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/399950e5-4341-47b5-87b5-de896cd4df06_800w.webp"/>
</div>
<div className="text-center px-4">
<h3 className="text-xl text-slate-800 leading-tight mb-6 font-playfair font-medium tracking-tight">
                Travel
                <br/>
<span className="text-slate-500 font-playfair font-medium text-base">
                  Archive
                </span>
</h3>
<div className="w-12 h-px bg-slate-200 mx-auto mb-6"></div>
<a className="inline-block text-[10px] font-semibold tracking-widest uppercase text-slate-400 hover:text-rose-500 transition-colors font-geist" href="#">
                Visit Archive
              </a>
</div>
</div>

<div className="bg-white p-4 pb-8 shadow-sm hover:shadow-xl transition-all duration-500 group border border-slate-100">
<div className="relative overflow-hidden aspect-[4/3] mb-8">
<div className="absolute inset-0 border-[12px] border-white/90 z-20 pointer-events-none"></div>
<img alt="Brand Collabs" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23fdf272-8cb8-4eda-bf7f-4bde76400a77_800w.jpg"/>
</div>
<div className="text-center px-4">
<h3 className="text-xl text-slate-800 leading-tight mb-6 font-playfair font-medium tracking-tight">
                Brand
                <br/>
<span className="text-slate-500 font-playfair font-medium text-base">
                  Collabs
                </span>
</h3>
<div className="w-12 h-px bg-slate-200 mx-auto mb-6"></div>
<a className="inline-block text-[10px] font-semibold tracking-widest uppercase text-slate-400 hover:text-rose-500 transition-colors font-geist" href="#">
                Partner Up
              </a>
</div>
</div>
</div>
</div>

<div className="w-full overflow-hidden opacity-30">
<div className="flex gap-2">
<svg className="w-full h-2 text-rose-300" fill="none" preserveaspectratio="none" viewbox="0 0 1200 20" xmlns="http://www.w3.org/2000/svg">
<path d="M0 10 L10 0 L20 10 L30 0 L40 10 L50 0 L60 10 L70 0 L80 10 L90 0 L100 10 L110 0 L120 10 L130 0 L140 10 L150 0 L160 10 L170 0 L180 10 L190 0 L200 10 L210 0 L220 10 L230 0 L240 10 L250 0 L260 10 L270 0 L280 10 L290 0 L300 10 L310 0 L320 10 L330 0 L340 10 L350 0 L360 10 L370 0 L380 10 L390 0 L400 10 L410 0 L420 10 L430 0 L440 10 L450 0 L460 10 L470 0 L480 10 L490 0 L500 10 L510 0 L520 10 L530 0 L540 10 L550 0 L560 10 L570 0 L580 10 L590 0 L600 10 L610 0 L620 10 L630 0 L640 10 L650 0 L660 10 L670 0 L680 10 L690 0 L700 10 L710 0 L720 10 L730 0 L740 10 L750 0 L760 10 L770 0 L780 10 L790 0 L800 10 L810 0 L820 10 L830 0 L840 10 L850 0 L860 10 L870 0 L880 10 L890 0 L900 10 L910 0 L920 10 L930 0 L940 10 L950 0 L960 10 L970 0 L980 10 L990 0 L1000 10 L1010 0 L1020 10 L1030 0 L1040 10 L1050 0 L1060 10 L1070 0 L1080 10 L1090 0 L1100 10 L1110 0 L1120 10 L1130 0 L1140 10 L1150 0 L1160 10 L1170 0 L1180 10 L1190 0 L1200 10" stroke="currentColor" strokeWidth="1"></path>
</svg>
</div>
</div>
</section>

<section className="z-10 md:px-12 font-manrope max-w-7xl border-slate-200 border-t mx-auto px-6 py-24 relative">

<div className="text-center mb-16 md:mb-24">
<h2 className="md:text-5xl uppercase text-3xl font-medium text-gray-500 tracking-[0.2em] font-playfair">
      Reader Stories
    </h2>
</div>
<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-3 flex flex-col gap-10">

<div className="border p-8 bg-white relative border-gray-200">
<h3 className="text-[10px] font-bold tracking-[0.2em] uppercase mb-8 text-gray-400 font-geist">
          Featured Community
        </h3>
<ul className="space-y-5">
<li className="group flex items-center gap-3 hover:text-rose-400 cursor-pointer transition-colors duration-300 text-gray-400">
<span className="font-serif italic text-rose-200 font-bold w-4 text-sm font-geist">1</span>
<div className="w-1.5 h-1.5 rotate-45 bg-rose-100 group-hover:bg-rose-400 transition-colors"></div>
<span className="text-[10px] uppercase group-hover:translate-x-1 transition-transform font-bold tracking-widest font-geist">Elena Rodriguez</span>
</li>
<li className="group flex items-center gap-3 hover:text-rose-400 cursor-pointer transition-colors duration-300 text-gray-400">
<span className="font-serif italic text-rose-200 font-bold w-4 text-sm font-geist">2</span>
<div className="w-1.5 h-1.5 rotate-45 bg-rose-100 group-hover:bg-rose-400 transition-colors"></div>
<span className="text-[10px] font-bold tracking-widest uppercase group-hover:translate-x-1 transition-transform font-geist">Marcus Chen</span>
</li>
<li className="group flex items-center gap-3 hover:text-rose-400 cursor-pointer transition-colors duration-300 text-gray-400">
<span className="font-serif italic text-rose-200 font-bold w-4 text-sm font-geist">3</span>
<div className="w-1.5 h-1.5 rotate-45 bg-rose-100 group-hover:bg-rose-400 transition-colors"></div>
<span className="text-[10px] font-bold tracking-widest uppercase group-hover:translate-x-1 transition-transform font-geist">Community Meetups</span>
</li>
</ul>
</div>

<div className="relative mt-4 pl-4 hidden md:block">

<div className="absolute -left-6 -top-6 w-28 h-28 rounded-full border flex items-center justify-center -rotate-12 backdrop-blur-[1px] z-20 shadow-sm pointer-events-none border-gray-300 bg-gray-50/50">
<div className="absolute inset-1 rounded-full border border-dashed border-gray-300"></div>
<div className="text-[9px] font-bold text-center tracking-[0.2em] leading-relaxed uppercase text-gray-500 font-geist">
            Reader<br/>Satisfaction<br/>Score
          </div>
<div className="absolute -top-1 left-1/2 -translate-x-1/2 text-gray-400">
<iconify-icon className="w-3 h-3" icon="solar:heart-bold"></iconify-icon>
</div>
</div>

<div className="ml-10 border rounded-2xl p-6 relative bg-white rotate-3 shadow-md min-w-[160px] border-gray-400">
<div className="absolute top-2 right-2 w-12 h-8 border opacity-50 border-gray-200"></div>
<div className="uppercase text-4xl font-medium text-gray-600 tracking-tight text-center mt-2 font-playfair">98%</div>
<div className="w-full h-px mt-6 relative bg-gray-300">
<div className="absolute left-0 bottom-1 w-full h-px bg-gray-300"></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-9 relative">


<div className="aspect-[16/30] md:aspect-[16/9] overflow-hidden md:overflow-visible bg-white w-full rounded-lg relative border border-gray-100/50">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px]"></div>

<div className="absolute top-[10%] left-[5%] md:left-[8%] w-56 md:w-72 group z-20 cursor-pointer">
<div className="bg-white p-2 md:p-3 shadow-lg rotate-[-2deg] group-hover:rotate-0 group-hover:scale-105 group-hover:z-50 transition-all duration-300 ease-out border shadow-gray-200/60 border-gray-100">
<div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-3 relative">
<img alt="Elena Rodriguez" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51bd3fc7-1291-4e60-b1aa-f24d56d7d37a_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="px-2 pb-1">
<p className="text-[11px] leading-relaxed text-gray-500 font-serif italic mb-3">"LoveBlog Life completely changed how I view my morning routine. The wellness guides are practical and beautiful."</p>
<div className="flex justify-between items-end border-t border-gray-100 pt-2">
<span className="text-[9px] font-bold uppercase tracking-widest text-gray-800 font-geist">Elena Rodriguez</span>
<span className="text-[8px] text-gray-400 font-geist tracking-wide">DIGITAL NOMAD</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-[8%] right-[5%] md:right-[20%] w-56 md:w-72 group z-30 cursor-pointer">
<div className="bg-white p-2 md:p-3 shadow-lg rotate-[3deg] group-hover:rotate-0 group-hover:scale-105 group-hover:z-50 transition-all duration-300 ease-out border shadow-gray-200/60 border-gray-100">
<div className="aspect-[4/3] overflow-hidden bg-gray-100 mb-3 relative">
<img alt="Marcus Chen" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265ef229-059a-430b-b72b-0c721470692c_800w.jpg"/>
</div>
<div className="px-2 pb-1">
<p className="text-[11px] leading-relaxed text-gray-500 font-serif italic mb-3">"The interior design archives gave me the confidence to start my own studio. It's more than a blog; it's a toolkit."</p>
<div className="flex justify-between items-end border-t border-gray-100 pt-2">
<span className="text-[9px] font-bold uppercase tracking-widest text-gray-800 font-geist">Marcus Chen</span>
<span className="text-[8px] text-gray-400 font-geist tracking-wide">FOUNDER</span>
</div>
</div>
</div>
</div>

<div className="absolute top-[5%] right-[5%] md:right-[5%] w-32 md:w-40 group z-10 cursor-pointer hidden md:block">
<div className="bg-white p-1.5 md:p-2 shadow-lg rotate-[4deg] group-hover:rotate-0 group-hover:scale-110 group-hover:z-50 transition-all duration-300 ease-out border shadow-gray-200/60 border-gray-100">
<div className="aspect-square overflow-hidden bg-gray-100 mb-2">
<img alt="Community Meetups" className="w-full h-full object-cover sepia-[0.15] group-hover:sepia-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bacbb16c-0771-4661-a188-5880a28d3f1f_320w.webp"/>
</div>
<div className="text-center pb-1">
<span className="text-[8px] font-bold uppercase tracking-widest text-gray-400 font-geist">Meetups</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
<iconify-icon className="w-48 h-48 text-rose-300" icon="solar:quote-up-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-20 pb-10 relative overflow-hidden" style={{}}>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 text-2xl font-medium font-playfair mb-6" href="#">TheDailyMuse</a>
<p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6 font-geist" style={{}}>
              A digital sanctuary for those seeking inspiration in travel,
              wellness, and design.
            </p>
<div className="flex gap-4">
<a className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition" href="#" style={{}}>
<iconify-icon className="w-4 h-4" icon="simple-icons:twitter"></iconify-icon>
</a>
<a className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition" href="#" style={{}}>
<iconify-icon className="w-4 h-4" icon="simple-icons:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition" href="#" style={{}}>
<iconify-icon className="w-4 h-4" icon="simple-icons:linkedin"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-slate-500 font-geist" style={{}}>
              Explore
            </h4>
<ul className="space-y-4 text-sm text-slate-400" style={{}}>
<li className="">
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Travel Guides
                </a>
</li>
<li className="">
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Wellness
                </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Interiors
                </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Food &amp; Drink
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-slate-500 font-geist" style={{}}>
              Community
            </h4>
<ul className="space-y-4 text-sm text-slate-400" style={{}}>
<li>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Events
                </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Podcast
                </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Newsletter
                </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Shop
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-sm uppercase tracking-wider text-slate-500 font-geist" style={{}}>
              About
            </h4>
<ul className="space-y-4 text-sm text-slate-400" style={{}}>
<li>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Our Story
                </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Careers
                </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Contact
                </a>
</li>
<li>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
                  Press Kit
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" style={{}}>
<p className="text-xs text-slate-500 font-geist" style={{}}>
            © 2024 LoveBlog Lifestyle. All rights reserved.
          </p>
<div className="flex gap-6 text-xs text-slate-500" style={{}}>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
              Privacy Policy
            </a>
<a className="hover:text-white transition font-geist" href="#" style={{}}>
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
