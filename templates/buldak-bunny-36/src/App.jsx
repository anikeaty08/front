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



    document.getElementById('year').textContent = new Date().getFullYear();
  
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
      
<div className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-red-100 selection:bg-red-500/40 selection:text-red-50">

<header className="fixed top-0 inset-x-0 z-40 backdrop-blur border-b border-red-500/10 bg-black/60">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full border border-red-500/40 bg-gradient-to-br from-red-600 to-red-900 flex items-center justify-center shadow-[0_0_20px_rgba(248,113,113,0.7)]">
<span className="text-sm font-semibold tracking-tight text-red-50">BB</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight text-red-100 uppercase">Buldak Bunny</span>
<span className="text-xs text-red-400/70 tracking-wide">불닭 바니</span>
</div>
</div>
<nav className="hidden md:flex items-center gap-6 text-xs font-medium">
<a className="text-red-300/80 hover:text-red-200 transition-colors" href="#hero">Home</a>
<a className="text-red-300/80 hover:text-red-200 transition-colors" href="#split">About</a>
<a className="text-red-300/80 hover:text-red-200 transition-colors" href="#menu-preview">Menu</a>
<a className="text-red-300/80 hover:text-red-200 transition-colors" href="#contact">Contact</a>
<a className="text-red-100 bg-red-600/80 hover:bg-red-500 text-xs font-semibold tracking-tight rounded-full px-4 py-1.5 shadow-[0_0_18px_rgba(248,113,113,0.7)] transition-all" href="#order">Order Now</a>
</nav>
</div>
</header>
<main className="pt-16">

<section className="relative overflow-hidden" id="hero">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.2),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(127,29,29,0.7),_transparent_60%)]"></div>
<div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3731474/pexels-photo-3731474.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600')] bg-cover bg-center mix-blend-multiply opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
</div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 flex flex-col lg:flex-row items-center gap-12">
<div className="flex-1 space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-black/60 px-3 py-1 text-xs text-red-300/80 backdrop-blur shadow-[0_0_14px_rgba(248,113,113,0.4)]">
<span className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)]"></span>
<span>Seoul-style late night • Extra spicy</span>
</div>
<div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-red-100 drop-shadow-[0_0_25px_rgba(248,113,113,0.9)]">
<span className="block font-black tracking-tight leading-none" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Spoqa Han Sans Neo\', \'Noto Sans KR\', sans-serif'}}>
                  Buldak
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 via-red-300 to-red-500 drop-shadow-[0_0_35px_rgba(248,113,113,1)]">Bunny</span>
</span>
</h1>
<p className="mt-4 text-base sm:text-lg text-red-200/80 max-w-md">
                Neon-lit Korean street flavors, smoky fire chicken, and midnight ramyeon — all under one glowing sign.
              </p>
</div>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-red-600/90 hover:bg-red-500 text-xs sm:text-sm font-semibold tracking-tight text-red-50 px-6 py-2.5 shadow-[0_0_25px_rgba(248,113,113,0.8)] transition-all hover:shadow-[0_0_35px_rgba(248,113,113,0.9)]" href="#menu-preview">
                View Menu
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-red-500/70 bg-black/60 hover:bg-red-950/60 text-xs sm:text-sm font-medium tracking-tight text-red-200 px-6 py-2.5 shadow-[0_0_20px_rgba(248,113,113,0.6)] transition-all" href="#order">
                Order Now
              </a>
</div>
<div className="flex items-center gap-4 text-xs text-red-300/80">
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-red-400 shadow-[0_0_10px_rgba(248,113,113,0.9)]"></span>
<span>Open till 2AM · Tue–Sun</span>
</div>
<div className="hidden sm:flex items-center gap-1.5">
<i className="lucide lucide-flame w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
<span>Signature fire chicken &amp; street bites</span>
</div>
</div>
</div>
<div className="flex-1 w-full max-w-md lg:max-w-lg">
<div className="relative">
<div className="absolute -inset-6 rounded-full bg-red-700/20 blur-3xl opacity-80"></div>
<div className="relative rounded-3xl border border-red-500/40 bg-black/70 backdrop-blur shadow-[0_0_40px_rgba(248,113,113,0.7)] overflow-hidden">
<div className="aspect-square sm:aspect-[4/3] bg-black">
<img alt="Spicy Korean Buldak Dish" className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/3731471/pexels-photo-3731471.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-xs">
<div>
<p className="text-red-100 font-medium tracking-tight">Midnight Buldak Platter</p>
<p className="text-red-300/80">Charred fire chicken · rice cakes · melted cheese</p>
</div>
<div className="rounded-full border border-red-400/70 bg-black/70 px-3 py-1 text-[0.7rem] text-red-200 flex items-center gap-1 shadow-[0_0_18px_rgba(248,113,113,0.7)]">
<span>🔥🔥🔥</span>
<span>Very Hot</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="split">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden border border-red-700/60 shadow-[0_0_40px_rgba(127,29,29,0.8)] mx-4 sm:mx-6 lg:mx-8">

<div className="bg-black/95 px-6 sm:px-10 lg:px-12 py-10 sm:py-12 lg:py-14 flex flex-col justify-center gap-6">
<div>
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-red-100 mb-2" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Spoqa Han Sans Neo\', \'Noto Sans KR\', sans-serif'}}>
                Seoul heat, bunny vibes.
              </h2>
<p className="text-base sm:text-lg text-red-200/85 max-w-md">
                Buldak Bunny pairs the intensity of Korean fire chicken with playful street snacks, cold beer, and neon-lit ambiance straight out of Hongdae’s back alleys.
              </p>
</div>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center rounded-full bg-red-600/90 hover:bg-red-500 text-xs sm:text-sm font-semibold tracking-tight text-red-50 px-6 py-2.5 shadow-[0_0_24px_rgba(248,113,113,0.7)] transition-all" href="#menu-preview">
                Menu
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-red-500/70 bg-black/70 hover:bg-red-950/60 text-xs sm:text-sm font-medium tracking-tight text-red-200 px-6 py-2.5 shadow-[0_0_20px_rgba(248,113,113,0.6)] transition-all" href="#order">
                Order Now
              </a>
</div>
<div className="grid grid-cols-2 gap-4 text-xs text-red-300/80 max-w-xs">
<div>
<p className="font-medium tracking-tight text-red-100">Spice Levels</p>
<p>Mild to “call your friends” hot.</p>
</div>
<div>
<p className="font-medium tracking-tight text-red-100">Vibes</p>
<p>LED-lit, late-night, playlist on repeat.</p>
</div>
</div>
</div>

<div className="relative bg-gradient-to-br from-red-900 via-red-800 to-black flex items-center justify-center py-10 sm:py-12 lg:py-14">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(15,23,42,0.9) 0, transparent 60%), radial-gradient(circle at 90% 80%, rgba(15,23,42,0.9) 0, transparent 55%)'}}></div>
<div className="relative">
<div className="absolute -inset-10 rounded-full bg-red-500/40 blur-3xl opacity-80"></div>
<div className="relative w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 flex items-center justify-center">
<div className="w-full h-full rounded-full bg-black/80 border border-red-200/40 shadow-[0_0_60px_rgba(248,113,113,0.9)] overflow-hidden">
<img alt="Top view Korean spicy plate" className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/3731450/pexels-photo-3731450.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1600"/>
</div>
</div>
<div className="absolute -bottom-3 right-4 rounded-full bg-black/80 border border-red-400/60 px-3 py-1.5 text-[0.7rem] text-red-200 flex items-center gap-1.5 shadow-[0_0_24px_rgba(248,113,113,0.9)]">
<i className="lucide lucide-flame w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
<span>Signature Fire Plate</span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16 sm:mt-20 lg:mt-24" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl border border-red-700/70 bg-black/95 shadow-[0_0_32px_rgba(127,29,29,0.9)]">
<div className="px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-red-100 mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Spoqa Han Sans Neo\', \'Noto Sans KR\', sans-serif'}}>
                    Visit the Bunny Den
                  </h2>
<p className="text-base text-red-300/85">
                    Call, click, or drop by — the grill’s hot and the neon’s on.
                  </p>
</div>
<p className="text-xs text-red-400/80">
                  Open Tue–Sun · 5:00 PM – 2:00 AM
                </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-red-400">
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="lucide lucide-phone w-4 h-4 text-red-400" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-red-100 mb-1">Phone</p>
<a className="text-base text-red-300 hover:text-red-200 transition-colors" href="tel:+821012345678">
                      +82 10-1234-5678
                    </a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="lucide lucide-mail w-4 h-4 text-red-400" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-red-100 mb-1">Email</p>
<a className="text-base text-red-300 hover:text-red-200 transition-colors" href="mailto:hello@buldakbunny.kr">
                      hello@buldakbunny.kr
                    </a>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5">
<i className="lucide lucide-map-pin w-4 h-4 text-red-400" style={{strokeWidth: '1.5'}}></i>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-red-100 mb-1">Address</p>
<p className="text-base text-red-300">
                      27-3 Itaewon-ro, Yongsan-gu<br/>Seoul, South Korea
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16 sm:mt-20 lg:mt-24" id="menu-preview">
<div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-red-900 via-red-800 to-red-900 border border-red-700/80 shadow-[0_0_45px_rgba(248,113,113,0.9)] mx-4 sm:mx-6 lg:mx-8">
<div className="px-6 sm:px-10 lg:px-12 py-10 sm:py-12 lg:py-14">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-red-50 mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Spoqa Han Sans Neo\', \'Noto Sans KR\', sans-serif'}}>
                  Tonight’s Heat
                </h2>
<p className="text-base text-red-100/85">
                  A quick peek at the plates that keep our neon glowing.
                </p>
</div>
<p className="text-xs text-red-100/80">
                All prices in KRW · Custom spice levels available
              </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">

<article className="group relative rounded-2xl bg-black border border-red-500/60 shadow-[0_0_24px_rgba(127,29,29,0.9)] overflow-hidden hover:border-red-400 hover:shadow-[0_0_28px_rgba(248,113,113,0.9)] transition-all">
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.9),_transparent_60%)] transition-opacity"></div>
<div className="relative p-4 sm:p-5">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-sm font-semibold tracking-tight text-red-100">
                      Buldak Bunny Wings
                    </h3>
<span className="text-xs font-medium text-red-300">₩14,000</span>
</div>
<p className="text-sm text-red-300/90 mb-2">
                    Double-fried chicken wings drenched in our signature fire glaze.
                  </p>
<p className="text-[0.7rem] text-red-400/80 flex items-center gap-1">
<span>🔥🔥</span> medium–high heat
                  </p>
</div>
</article>
<article className="group relative rounded-2xl bg-black border border-red-500/60 shadow-[0_0_24px_rgba(127,29,29,0.9)] overflow-hidden hover:border-red-400 hover:shadow-[0_0_28px_rgba(248,113,113,0.9)] transition-all">
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.9),_transparent_60%)] transition-opacity"></div>
<div className="relative p-4 sm:p-5">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-sm font-semibold tracking-tight text-red-100">
                      Cheese Lava Buldak
                    </h3>
<span className="text-xs font-medium text-red-300">₩18,000</span>
</div>
<p className="text-sm text-red-300/90 mb-2">
                    Sizzling fire chicken buried under a blanket of molten mozzarella.
                  </p>
<p className="text-[0.7rem] text-red-400/80 flex items-center gap-1">
<span>🔥🔥🔥</span> very hot
                  </p>
</div>
</article>
<article className="group relative rounded-2xl bg-black border border-red-500/60 shadow-[0_0_24px_rgba(127,29,29,0.9)] overflow-hidden hover:border-red-400 hover:shadow-[0_0_28px_rgba(248,113,113,0.9)] transition-all">
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.9),_transparent_60%)] transition-opacity"></div>
<div className="relative p-4 sm:p-5">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-sm font-semibold tracking-tight text-red-100">
                      Neon Street Tteokbokki
                    </h3>
<span className="text-xs font-medium text-red-300">₩11,000</span>
</div>
<p className="text-sm text-red-300/90 mb-2">
                    Rice cakes in a thick gochujang broth with fish cake and scallions.
                  </p>
<p className="text-[0.7rem] text-red-400/80 flex items-center gap-1">
<span>🔥🔥</span> customizable spice
                  </p>
</div>
</article>
<article className="group relative rounded-2xl bg-black border border-red-500/60 shadow-[0_0_24px_rgba(127,29,29,0.9)] overflow-hidden hover:border-red-400 hover:shadow-[0_0_28px_rgba(248,113,113,0.9)] transition-all">
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.9),_transparent_60%)] transition-opacity"></div>
<div className="relative p-4 sm:p-5">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-sm font-semibold tracking-tight text-red-100">
                      Midnight Ramyeon Bowl
                    </h3>
<span className="text-xs font-medium text-red-300">₩9,500</span>
</div>
<p className="text-sm text-red-300/90 mb-2">
                    Chewy noodles, soft-boiled egg, seaweed, and a spicy house broth.
                  </p>
<p className="text-[0.7rem] text-red-400/80 flex items-center gap-1">
<span>🔥</span> mild–medium
                  </p>
</div>
</article>
<article className="group relative rounded-2xl bg-black border border-red-500/60 shadow-[0_0_24px_rgba(127,29,29,0.9)] overflow-hidden hover:border-red-400 hover:shadow-[0_0_28px_rgba(248,113,113,0.9)] transition-all">
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.9),_transparent_60%)] transition-opacity"></div>
<div className="relative p-4 sm:p-5">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-sm font-semibold tracking-tight text-red-100">
                      Bunny Bao Bites
                    </h3>
<span className="text-xs font-medium text-red-300">₩12,000</span>
</div>
<p className="text-sm text-red-300/90 mb-2">
                    Steamed buns stuffed with bulgogi, pickles, and chili mayo.
                  </p>
<p className="text-[0.7rem] text-red-400/80 flex items-center gap-1">
<span>🔥</span> gentle &amp; flavorful
                  </p>
</div>
</article>
<article className="group relative rounded-2xl bg-black border border-red-500/60 shadow-[0_0_24px_rgba(127,29,29,0.9)] overflow-hidden hover:border-red-400 hover:shadow-[0_0_28px_rgba(248,113,113,0.9)] transition-all">
<div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[radial-gradient(circle_at_top,_rgba(248,113,113,0.9),_transparent_60%)] transition-opacity"></div>
<div className="relative p-4 sm:p-5">
<div className="flex items-start justify-between gap-3 mb-2">
<h3 className="text-sm font-semibold tracking-tight text-red-100">
                      Soju &amp; Spark Mix
                    </h3>
<span className="text-xs font-medium text-red-300">₩7,000</span>
</div>
<p className="text-sm text-red-300/90 mb-2">
                    House-infused soju flights with citrus, berry, and chili twists.
                  </p>
<p className="text-[0.7rem] text-red-400/80 flex items-center gap-1">
<span>⚡</span> late-night favorite
                  </p>
</div>
</article>
</div>
<div className="mt-8 flex justify-center">
<a className="inline-flex items-center justify-center rounded-full bg-black/70 border border-red-200/70 hover:bg-red-950/70 text-xs sm:text-sm font-medium tracking-tight text-red-100 px-7 py-2.5 shadow-[0_0_24px_rgba(15,23,42,0.9)] transition-all" href="#menu-preview">
                See Full Menu
              </a>
</div>
</div>
</div>
</section>

<section className="mt-16 sm:mt-20 lg:mt-24" id="order">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10 items-start">
<div className="lg:col-span-2 space-y-4">
<h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-red-100" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Spoqa Han Sans Neo\', \'Noto Sans KR\', sans-serif'}}>
                Neon hotline.
              </h2>
<p className="text-base text-red-300/85">
                Questions, group bookings, collaborations, or just craving some buldak? Drop us a line and we’ll get back before your ramyeon gets cold.
              </p>
<div className="flex flex-col gap-2 text-xs text-red-400/80">
<p className="flex items-center gap-2">
<i className="lucide lucide-clock w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
<span>Average response time: under 2 hours during opening times.</span>
</p>
<p className="flex items-center gap-2">
<i className="lucide lucide-info w-3.5 h-3.5" style={{strokeWidth: '1.5'}}></i>
<span>For urgent reservations, call us directly.</span>
</p>
</div>
</div>
<div className="lg:col-span-3">
<div className="relative rounded-3xl border border-red-600/80 bg-black/80 backdrop-blur shadow-[0_0_40px_rgba(248,113,113,0.7)] overflow-hidden">
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'linear-gradient(135deg, rgba(248,113,113,0.2) 0, transparent 40%, transparent 60%, rgba(248,113,113,0.2) 100%), radial-gradient(circle at 0 0, rgba(248,113,113,0.3) 0, transparent 60%)'}}></div>
<form className="relative p-6 sm:p-8 space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-red-100" htmlFor="name">Name</label>
<input className="w-full rounded-xl border border-red-500/70 bg-black/80 text-sm text-red-100 placeholder:text-red-500/60 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-300 shadow-[0_0_18px_rgba(248,113,113,0.6)]" id="name" placeholder="Your name" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-red-100" htmlFor="email">Email</label>
<input className="w-full rounded-xl border border-red-500/70 bg-black/80 text-sm text-red-100 placeholder:text-red-500/60 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-300 shadow-[0_0_18px_rgba(248,113,113,0.6)]" id="email" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium tracking-tight text-red-100" htmlFor="message">Message</label>
<textarea className="w-full rounded-xl border border-red-500/70 bg-black/80 text-sm text-red-100 placeholder:text-red-500/60 px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-300 shadow-[0_0_18px_rgba(248,113,113,0.6)]" id="message" placeholder="Tell us what you’re craving or planning..." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
<button className="inline-flex items-center justify-center rounded-full bg-red-600/90 hover:bg-red-500 text-xs sm:text-sm font-semibold tracking-tight text-red-50 px-6 py-2.5 shadow-[0_0_26px_rgba(248,113,113,0.9)] transition-all" type="submit">
                      Send
                    </button>
<p className="text-[0.7rem] text-red-400/80">
                      By sending, you agree to be contacted about your inquiry.
                    </p>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16 sm:mt-20 lg:mt-24">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-3xl overflow-hidden border border-red-700/80 bg-black/95 shadow-[0_0_34px_rgba(15,23,42,0.9)]">
<div className="px-6 sm:px-10 lg:px-12 pt-8 pb-4 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<div>
<h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-red-100 mb-1" style={{fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Spoqa Han Sans Neo\', \'Noto Sans KR\', sans-serif'}}>
                  Find us in Seoul
                </h2>
<p className="text-base text-red-300/85">
                  Nestled between neon alleys and late-night karaoke rooms.
                </p>
</div>
<p className="text-xs text-red-400/80">
                Tap on the map for directions in your maps app.
              </p>
</div>
<div className="h-64 sm:h-72 lg:h-80 bg-black relative">

<iframe allowfullscreen="" className="w-full h-full grayscale-[40%] contrast-125" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.585491156915!2d126.99039407633528!3d37.53477402614001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3f263ddab8b%3A0x6515d58a3b161bba!2sItaewon%2C%20Yongsan-gu%2C%20Seoul!5e0!3m2!1sen!2skr!4v1700000000000" style={{filter: 'invert(90%) hue-rotate(180deg) saturate(120%)'}}>
</iframe>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/60"></div>
</div>
</div>
</div>
</section>

<footer className="mt-16 sm:mt-20 lg:mt-24 border-t border-red-900/60 bg-black">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-red-400/80">
<p className="text-center sm:text-left">
            © <span id="year"></span> Buldak Bunny. All rights reserved.
          </p>
<p className="text-center sm:text-right">
            Designed with <span className="text-red-400">❤️</span> by Buldak Bunny
          </p>
</div>
</footer>
</main>
</div>


    </>
  );
}
