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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300">
<div className="max-w-screen-2xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="text-2xl tracking-tighter text-neutral-900" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>
                GB
            </a>

<ul className="hidden md:flex items-center space-x-8 text-sm text-neutral-600">
<li className=""><a className="hover:text-neutral-900 transition-colors" href="#">Home</a></li>

<li className="relative group py-8">
<button className="flex hover:text-neutral-900 transition-colors focus:outline-none gap-x-1 gap-y-1 items-center">
                        Portfolio
                        <iconify-icon className="text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-48 bg-white border border-neutral-100 shadow-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
<ul className="py-2">
<li><a className="block px-6 py-2 hover:bg-neutral-50 hover:text-neutral-900 transition-colors" href="#">Rainforests</a></li>
<li><a className="block px-6 py-2 hover:bg-neutral-50 hover:text-neutral-900 transition-colors" href="#">Avian</a></li>
<li><a className="block px-6 py-2 hover:bg-neutral-50 hover:text-neutral-900 transition-colors" href="#">Macro</a></li>
<li><a className="block px-6 py-2 hover:bg-neutral-50 hover:text-neutral-900 transition-colors" href="#">Monochrome</a></li>
</ul>
</div>
</li>
<li className=""><a className="hover:text-neutral-900 transition-colors" href="#">Workshops</a></li>
<li className=""><a className="hover:text-neutral-900 transition-colors" href="#">About</a></li>
<li className=""><a className="hover:text-neutral-900 transition-colors" href="#">Blog</a></li>
<li className=""><a className="hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>

<button className="md:hidden text-neutral-900 focus:outline-none">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900">

<img alt="Cloud forest canopy" className="opacity-80 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54f05e5a-473b-4c7a-a73a-e0e67f2cbb01_1600w.webp"/>

<div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
<span className="block uppercase text-xs text-white/70 tracking-widest mb-4">Donde el tiempo se rinde ante la luz</span>
<h1 className="md:text-6xl lg:text-7xl leading-tight text-4xl font-medium text-slate-50 tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Testigo visual de lo extraordinario</h1>
<a className="inline-block border-b border-white/50 text-white text-sm pb-1 hover:border-white transition-colors duration-300" href="#">
                Explore the Gallery
            </a>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
<button className="w-1.5 h-1.5 rounded-full bg-white transition-opacity"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white/70 transition-opacity"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white/40 hover:bg-white/70 transition-opacity"></button>
</div>
</header>

<section className="md:py-32 md:px-12 max-w-screen-2xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Curated Collections</h2>
<p className="text-sm text-neutral-500 max-w-xl mt-4 mr-auto ml-auto">A selection of thematic works exploring the intricate details and vast landscapes of neotropical environments.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">

<a className="group relative block aspect-[3/4] overflow-hidden bg-neutral-100" href="#">
<img alt="Avian photography" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="group-hover:bg-black/40 transition-colors duration-500 flex bg-black/10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
<h3 className="text-white text-2xl font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Avian
    </h3>
<span className="text-white/80 text-xs mt-2 block">View Gallery</span>
</div>
</div>
</a>

<a className="group relative block aspect-[3/4] overflow-hidden bg-neutral-100 lg:-mt-12" href="#">
<img alt="Landscape photography" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
<div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
<h3 className="text-white text-2xl font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Landscapes</h3>
<span className="text-white/80 text-xs mt-2 block">View Gallery</span>
</div>
</div>
</a>

<a className="group relative block aspect-[3/4] overflow-hidden bg-neutral-100" href="#">
<img alt="Macro photography" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518365050014-70fe7232897f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
<div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
<h3 className="text-white text-2xl font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Macro</h3>
<span className="text-white/80 text-xs mt-2 block">View Gallery</span>
</div>
</div>
</a>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 hover:bg-neutral-50 transition-colors text-sm text-neutral-900 border-neutral-200 border pt-3 pr-6 pb-3 pl-6" href="#">
                View Complete Archive
            </a>
</div>
</section>

<section className="py-24 md:py-32 bg-neutral-50 px-6 md:px-12">
<div className="max-w-screen-2xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Workshops &amp; Tours</h2>
<p className="text-sm text-neutral-500 max-w-md">Join intimate groups in exclusive locations to refine your craft under expert guidance.</p>
</div>
<a className="text-sm text-neutral-900 border-b border-neutral-300 pb-1 hover:border-neutral-900 transition-colors whitespace-nowrap" href="#">
                    See All Dates
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="bg-white border border-neutral-100 group cursor-pointer hover:border-neutral-200 transition-colors">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Costa Rica Tour" className="transition-transform duration-700 group-hover:scale-105 w-full h-full" src="https://images.unsplash.com/photo-1516663713099-37eb6d60c825?w=800&amp;q=80"/>
</div>
<div className="p-6 md:p-8">
<span className="text-xs text-neutral-400 mb-2 block">Nov 12 - Nov 20, 2024</span>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Costa Rica: Cloud Forests &amp; Wildlife</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">Focus on hummingbirds, quetzals, and macro photography in the high-altitude cloud forests.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">2 Spots Remaining</span>
<span className="text-sm text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Details</span>
</div>
</div>
</div>

<div className="bg-white border border-neutral-100 group cursor-pointer hover:border-neutral-200 transition-colors">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Ecuador Tour" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="p-6 md:p-8">
<span className="text-xs text-neutral-400 mb-2 block">Feb 05 - Feb 14, 2025</span>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Ecuador: Amazon Basin Masterclass</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">Deep dive into multi-flash setups and photographing elusive species in primary rainforest.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Waitlist Available</span>
<span className="text-sm text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Details</span>
</div>
</div>
</div>

<div className="bg-white border border-neutral-100 group cursor-pointer hover:border-neutral-200 transition-colors hidden lg:block">
<div className="aspect-[4/3] overflow-hidden relative">
<img alt="Private Tuition" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6 md:p-8">
<span className="text-xs text-neutral-400 mb-2 block">Year-Round</span>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Custom Private Tuition</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">Tailored one-on-one experiences focusing on specific techniques, from composition to post-processing.</p>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400">Flexible Dates</span>
<span className="text-sm text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Inquire</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white text-center">
<div className="max-w-3xl mx-auto">
<iconify-icon className="text-3xl text-neutral-300 mb-8 mx-auto block" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-xl md:text-2xl font-normal leading-relaxed text-neutral-800 mb-8" style={{fontFamily: '\'Playfair Display\', serif', fontStyle: 'italic'}}>
                "Traveling with this team completely changed how I see light in the forest. The technical instruction was invaluable, but the emphasis on artistic vision is what truly elevated my portfolio."
            </p>
<div className="flex flex-col items-center">
<span className="text-sm text-neutral-900 font-medium tracking-tight mb-1">Sarah Jenkins</span>
<span className="text-xs text-neutral-500">Costa Rica Workshop Participant</span>
</div>
</div>
</section>

<footer className="border-t border-neutral-100 bg-white pt-16 pb-8 px-6 md:px-12">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
<div className="text-center md:text-left">
<a className="text-2xl tracking-tighter text-neutral-900 block mb-4" href="#" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    GB
                </a>
<p className="text-xs text-neutral-500 max-w-xs">Dedicated to the conservation and artistic documentation of neotropical biodiversity.</p>
</div>
<div className="flex space-x-8 text-sm text-neutral-500">
<div className="flex flex-col space-y-3">
<a className="hover:text-neutral-900 transition-colors" href="#">Portfolio</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Workshops</a>
<a className="hover:text-neutral-900 transition-colors" href="#">About</a>
</div>
<div className="flex flex-col space-y-3">
<a className="hover:text-neutral-900 transition-colors" href="#">Blog</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Contact</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Newsletter</a>
</div>
</div>
<div className="flex items-center space-x-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:global-linear"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2024 GB Photography. All rights reserved.</p>
<div className="flex space-x-4">
<a className="hover:text-neutral-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
