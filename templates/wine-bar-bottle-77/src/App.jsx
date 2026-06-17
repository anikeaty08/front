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
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
// Updated to Londrina Solid
londrina: ['Londrina Solid', 'cursive'],
},
colors: {
primary: '#8B2332',      /* Primary Red */
darkRed: '#5C1A1B',      /* Dark Red */
background: '#FAF5F0',   /* Warm Cream */
surface: '#FFFFFF',      /* Off-White */
textMain: '#1A1A1A',     /* Dark Charcoal */
textMuted: '#6B5E5A',    /* Muted Warm Gray */
blush: '#F0E0D8',        /* Soft Blush */
},
letterSpacing: {
'widest': '0.15em',
'editorial': '0.05em',
},
backgroundImage: {
'gradient-fade': 'linear-gradient(to top, #FAF5F0 0%, transparent 100%)',
}
}
}
}

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
      

<nav className="fixed flex transition-all duration-300 border-blush/50 w-full z-50 border-b pt-6 pr-8 pb-6 pl-8 top-0 backdrop-blur-md items-center justify-between">

<a className="group relative z-50" href="#">

<h1 className="text-4xl text-primary font-londrina tracking-wide font-light">Vine.</h1>
</a>

<div className="hidden md:flex gap-10 text-amber-100 gap-x-10 gap-y-10 items-center">
<a className="text-xs uppercase tracking-widest hover:text-primary transition-colors duration-300 font-sans" href="#about">About</a>
<a className="text-xs uppercase tracking-widest hover:text-primary transition-colors duration-300 font-sans" href="#offerings">Shop</a>
<a className="text-xs uppercase tracking-widest hover:text-primary transition-colors duration-300 font-sans" href="#menu">Menu</a>
<a className="text-xs uppercase tracking-widest hover:text-primary transition-colors duration-300 font-sans" href="#locations">Locations</a>
</div>

<div className="flex items-center gap-6">
<a className="hover:text-primary transition-colors" href="https://instagram.com/vineflowersandwine" target="_blank">
<iconify-icon className="" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<button aria-label="Menu" className="md:hidden flex items-center justify-center hover:text-primary transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="min-h-screen flex overflow-hidden pt-20 pr-6 pl-6 relative items-center justify-center">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Vine Bermondsey Interior" className="select-none animate-[kenburns_20s_infinite_alternate] opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8f7d6b9d-f4c0-40b8-9c5a-abbe058a48f4_1600w.png"/>
<div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
<div className="bg-red-950 opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 text-surface text-center max-w-4xl mr-auto ml-auto relative space-y-8">
<span className="inline-block md:text-sm uppercase animate-[fadeIn_1s_ease-out_0.5s_both] text-xs font-medium text-red-300 tracking-[0.3em] font-sans opacity-90 mb-4">Bermondsey Street, London</span>

<h1 className="md:text-9xl lg:text-[10rem] leading-[0.85] animate-[fadeIn_1s_ease-out_0.2s_both] text-surface text-7xl font-light text-orange-300 tracking-wide font-londrina">
                Vine
            </h1>
<div className="h-px w-24 bg-surface/50 mx-auto my-8"></div>
<p className="text-surface/90 leading-relaxed animate-[fadeIn_1s_ease-out_0.8s_both] md:text-xl text-base font-light text-orange-300 tracking-wide font-sans max-w-2xl mr-auto ml-auto">
                Wine · Beer · Spirits · Cigars · Flowers
            </p>
<div className="pt-12 animate-[fadeIn_1s_ease-out_1s_both]">
<a className="group inline-flex flex-col items-center gap-2 text-xs uppercase tracking-widest hover:text-blush transition-colors duration-300" href="#intro">
<span className="text-red-300 font-sans">Discover</span>
<iconify-icon className="animate-bounce" height="20" icon="solar:arrow-down-linear" style={{color: 'rgb(252, 165, 165)'}} width="20"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="md:py-32 bg-red-950 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="intro">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 md:pr-12">
<span className="text-primary text-xs uppercase tracking-widest font-semibold font-sans">Our Philosophy</span>

<h2 className="md:text-6xl text-textMain leading-none text-5xl font-light text-stone-300 tracking-wide font-londrina">
                    Authentically European, <span className="text-primary font-londrina">Uniquely Bermondsey.</span>
</h2>
<div className="space-y-6 text-textMuted font-light text-lg leading-relaxed">
<p className="text-stone-400 font-sans">
                        Nestled at 126 Bermondsey Street, Vine is more than just a shop—it’s an extension of your living room. We believe in the simple, authentic lifestyle centered around community and craft.
                    </p>
<p className="text-stone-400 font-sans">
                        Whether you’re stopping by for a bouquet of fresh flowers, selecting a bottle for dinner, or settling in for a glass of red with no corkage fee, our doors are open daily from 11am to 10pm.
                    </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 border-primary text-primary uppercase hover:text-darkRed hover:border-darkRed transition-colors text-sm text-red-400 tracking-widest font-sans border-b pb-1" href="#locations">
                        Visit Us <iconify-icon className="" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="relative aspect-[4/5] overflow-hidden rounded-sm group">
<img alt="Wine pouring" className="img-reveal w-full h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc286101-ae00-4f79-9fad-0ff96078f24e_1600w.png"/>
<div className="absolute inset-0 border-[1px] border-surface/20 m-4 pointer-events-none"></div>
</div>
</div>
</section>

<section className="border-y border-blush/30 bg-orange-200 pt-24 pr-6 pb-24 pl-6" id="offerings">
<div className="text-center max-w-7xl mr-auto mb-16 ml-auto">
<span className="uppercase text-textMuted text-xs text-red-900 tracking-widest font-sans">Curated Selection</span>

<h2 className="md:text-5xl text-textMain text-4xl font-light text-red-950 tracking-wide font-londrina mt-3">The Collection</h2>
</div>
<div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-blush/30 border border-blush/30">

<div className="group relative aspect-[3/4] bg-background overflow-hidden cursor-pointer">
<img alt="Wine" className="w-full h-full object-cover img-reveal opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/40 transition-colors duration-500 bg-black/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63f7b0dd-7e5e-4ed9-873f-10caad337674_800w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 right-8 text-surface transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 lg:text-red-300">

<h3 className="text-3xl font-light tracking-wide font-londrina mb-2">Wine</h3>
<p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans">Old World &amp; New</p>
</div>
</div>

<div className="group relative aspect-[3/4] bg-background overflow-hidden cursor-pointer">
<img alt="Spirits" className="w-full h-full object-cover img-reveal opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/40 transition-colors duration-500 bg-black/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/794a8dbd-fe2b-4b90-a73c-1113227cfd30_800w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-surface transform group-hover:translate-y-0 transition-transform duration-500 text-red-300 absolute right-8 bottom-8 left-8 translate-y-2">

<h3 className="text-3xl font-light tracking-wide font-londrina mb-2">Beer &amp; Spirits</h3>
<p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans">Craft &amp; Classic</p>
</div>
</div>

<div className="group aspect-[3/4] overflow-hidden cursor-pointer relative">
<img alt="Cigars" className="img-reveal group-hover:opacity-100 opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1610476362995-dff7b9a4e4c1?w=800&amp;q=80"/>
<div className="group-hover:bg-black/40 transition-colors duration-500 bg-center bg-black/20 bg-[url(https://images.unsplash.com/photo-1610476362995-dff7b9a4e4c1?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-surface transform group-hover:translate-y-0 transition-transform duration-500 text-red-300 absolute right-8 bottom-8 left-8 translate-y-2">

<h3 className="lg:bg-clip-text lg:text-transparent text-3xl font-light tracking-wide font-londrina bg-red-300 mb-2">Cigars</h3>
<p className="uppercase group-hover:opacity-100 transition-opacity duration-500 delay-100 -translate-y-2 text-xs text-red-300 tracking-widest font-sans opacity-0 translate-y-1">Finest Selection</p>
</div>
</div>

<div className="group relative aspect-[3/4] bg-background overflow-hidden cursor-pointer">
<img alt="Flowers" className="w-full h-full object-cover img-reveal opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:bg-black/40 transition-colors duration-500 bg-black/20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53372eb7-3571-4b3f-be2b-a0c268ec23b5_800w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-surface transform group-hover:translate-y-0 transition-transform duration-500 text-red-300 absolute right-8 bottom-8 left-8 translate-y-2">

<h3 className="text-3xl mb-2 font-londrina tracking-wide font-light">Flowers</h3>
<p className="text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-sans">Fresh Daily</p>
</div>
</div>
</div>
</section>


<section className="bg-red-950 max-w-7xl mx-auto px-6 py-24">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 gap-x-8 gap-y-8 items-center">

<div className="md:col-span-4 space-y-8 order-2 md:order-1">
<div className="space-y-2">
<span className="text-primary text-xs uppercase tracking-widest font-sans">The Vibe</span>

<h2 className="md:text-5xl text-4xl font-light text-stone-300 tracking-wide font-londrina">Drink In or Take Away</h2>
</div>
<p className="text-textMuted leading-relaxed font-light text-stone-400 font-sans">
                    We keep it simple. The price on the shelf is the price you pay to drink in. No corkage fees, no hidden costs. Just great wine, good company, and a relaxed atmosphere.
                </p>
<ul className="space-y-4 pt-4">
<li className="flex gap-4 text-textMain text-sm text-stone-50 gap-x-4 gap-y-4 items-center">
<iconify-icon className="text-primary text-lg" icon="solar:wineglass-linear"></iconify-icon>
<span className="font-sans">No Corkage Fee</span>
</li>
<li className="flex gap-4 text-textMain text-sm text-stone-50 gap-x-4 gap-y-4 items-center">
<iconify-icon className="text-primary text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="font-sans">Community Focused</span>
</li>
<li className="flex gap-4 text-textMain text-sm text-stone-50 gap-x-4 gap-y-4 items-center">
<iconify-icon className="text-primary text-lg" icon="solar:clock-circle-linear"></iconify-icon>
<span className="font-sans">Open Daily 11am-10pm</span>
</li>
</ul>
</div>

<div className="md:col-span-8 grid grid-cols-2 gap-4 order-1 md:order-2">
<div className="space-y-4 mt-12">
<div className="aspect-[3/4] overflow-hidden rounded-sm w-full">
<img alt="Wine Bar Evening" className="img-reveal w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8508fe60-9d3a-4f42-bcb4-e7bdd8d8cd0c_800w.png"/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-[3/4] overflow-hidden rounded-sm w-full">
<img alt="Pouring Wine" className="img-reveal w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34683707-439a-4c92-952b-36980df73b10_800w.png"/>
</div>
<div className="aspect-square overflow-hidden rounded-sm w-full bg-blush/20 p-8 flex items-center justify-center text-center">

<p className="text-primary leading-tight text-3xl font-light tracking-wide font-londrina">"A neighborhood gem."</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-blush/30 bg-orange-200 border-t px-6 py-24" id="locations">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<span className="uppercase text-textMuted text-xs text-red-900 tracking-widest font-sans">Find Us</span>

<h2 className="md:text-5xl text-4xl font-light text-red-950 tracking-wide font-londrina mt-3">Our Locations</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-x-12 gap-y-12">

<article className="group bg-background p-10 border border-blush/30 hover:border-primary/30 transition-colors duration-500">
<div className="h-64 overflow-hidden mb-8 relative">
<img alt="Vine Bermondsey Street" className="group-hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c65bf2a-f538-4d40-af5e-cf6753a1bad6_800w.png"/>
<div className="absolute top-4 left-4 bg-surface px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-primary font-sans">The Original</div>
</div>

<h3 className="text-3xl text-primary mb-2 font-londrina tracking-wide font-light">Vine</h3>
<p className="text-sm text-textMain mb-6 font-sans">126 Bermondsey Street, London SE1 3TX</p>
<div className="border-t border-blush/50 pt-6 space-y-4">
<div className="flex justify-between text-sm">
<span className="text-textMuted font-sans">Mon - Sun</span>
<span className="font-medium font-sans">11:00 am – 10:00 pm</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-blush/50 flex gap-4">
<a className="flex-1 py-3 border border-textMain/10 text-center text-xs uppercase tracking-widest hover:bg-primary hover:text-surface hover:border-primary transition-all font-sans" href="https://maps.google.com" target="_blank">Directions</a>
<a className="flex-1 py-3 border border-textMain/10 text-center text-xs uppercase tracking-widest hover:bg-primary hover:text-surface hover:border-primary transition-all font-sans" href="tel:+442070000000">Call</a>
</div>
</article>

<article className="group bg-background p-10 border border-blush/30 hover:border-primary/30 transition-colors duration-500">
<div className="h-64 overflow-hidden mb-8 relative">
<img alt="Vine Bar Bermondsey Square" className="group-hover:grayscale-0 transition-all duration-700 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c94aba2f-7de8-40e2-bcdc-054f9c14fd1f_800w.png"/>
<div className="absolute top-4 left-4 bg-surface px-3 py-1 text-[10px] uppercase tracking-widest font-semibold text-primary font-sans">The Sister Bar</div>
</div>

<h3 className="text-3xl text-primary mb-2 font-londrina tracking-wide font-light">Vine Bar</h3>
<p className="text-sm text-textMain mb-6 font-sans">1 Bermondsey Square, London SE1 3UN</p>
<div className="border-t border-blush/50 pt-6 space-y-4">
<div className="flex text-sm justify-between">
<span className="text-textMuted font-sans">Tue - Sat</span>
<span className="font-medium font-sans">5:00 pm – 11:00 pm</span>
</div>
<div className="flex justify-between text-sm text-textMuted">
<span className="font-sans">Sun - Mon</span>
<span className="font-sans">Closed</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-blush/50 flex gap-4">
<a className="flex-1 py-3 border border-textMain/10 text-center text-xs uppercase tracking-widest hover:bg-primary hover:text-surface hover:border-primary transition-all font-sans" href="https://maps.google.com" target="_blank">Directions</a>
<a className="flex-1 py-3 border border-textMain/10 text-center text-xs uppercase tracking-widest hover:bg-primary hover:text-surface hover:border-primary transition-all font-sans" href="tel:+442070000000">Call</a>
</div>
</article>
</div>
</div>
</section>

<section className="border-blush/30 bg-red-950 max-w-7xl border-t mx-auto px-6 py-24">
<div className="flex justify-between items-end mb-10">
<div className="">

<h2 className="text-3xl text-primary font-londrina tracking-wide font-light">@vineflowersandwine</h2>
</div>
<a className="text-xs uppercase tracking-widest hover:text-primary transition-colors font-sans" href="#">Follow Us</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-surface overflow-hidden group">
<img alt="Social 1" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29582049-bdeb-447f-8628-2da673668662_800w.png"/>
</div>
<div className="aspect-square bg-surface overflow-hidden group">
<img alt="Social 2" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8436e60f-900b-4da8-b02f-f2b2594860be_800w.png"/>
</div>
<div className="aspect-square bg-surface overflow-hidden group">
<img alt="Social 3" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6569195-e29f-44c8-b6e8-3e2988f5df8d_800w.png"/>
</div>
<div className="aspect-square bg-surface overflow-hidden group">
<img alt="Social 4" className="group-hover:scale-110 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7288747-a4ad-4415-8004-0aec67e7722d_800w.png"/>
</div>
</div>
</section>

<footer className="bg-primary text-surface pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-1 space-y-6">

<h2 className="text-4xl font-londrina tracking-wide font-light">Vine.</h2>
<p className="text-sm font-light text-surface/80 leading-relaxed max-w-xs font-sans">
                    Authentic European lifestyle on Bermondsey Street. Wine, beer, cigars, and flowers.
                </p>
<div className="flex gap-4">
<a className="hover:text-blush transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-blush transition-colors" href="#"><iconify-icon icon="simple-icons:facebook" width="18"></iconify-icon></a>
</div>
</div>
<div className="md:col-span-1">
<h4 className="text-xs uppercase tracking-widest mb-6 opacity-70 font-sans">Explore</h4>
<ul className="space-y-3 text-sm font-light">
<li className=""><a className="hover:text-blush transition-colors font-sans" href="#">Our Story</a></li>
<li className=""><a className="hover:text-blush transition-colors font-sans" href="#">Shop Selection</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-xs uppercase tracking-widest mb-6 opacity-70 font-sans">Stay in the Loop</h4>
<p className="text-2xl font-serif italic mb-6 font-sans">Join our community for news on tastings and new arrivals.</p>
<form className="flex border-b border-surface/30 pb-2">
<input className="bg-transparent w-full outline-none placeholder-surface/50 text-surface font-light" placeholder="Email Address" type="email"/>
<button className="text-xs uppercase tracking-widest hover:text-blush transition-colors font-sans">Subscribe</button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-surface/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-surface/60">
<p className="font-sans">© 2024 Vine Bermondsey.</p>
<div className="flex gap-6">
<a className="hover:text-surface font-sans" href="#">Privacy Policy</a>
<a className="hover:text-surface font-sans" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
