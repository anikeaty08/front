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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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
      

<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300">
<div className="max-w-[1600px] mx-auto px-6 py-6 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="text-white opacity-90 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:mountains-linear" width="32"></iconify-icon>
</div>
<span className="text-white tracking-tighter text-xl uppercase opacity-90 group-hover:opacity-100 transition-opacity font-oswald font-normal">Aetheria.</span>
</div>

<div className="hidden md:flex items-center gap-12 text-sm font-medium tracking-wide text-white/80">
<a className="hover:text-white transition-colors font-sans" href="#">Sanctuary</a>
<a className="hover:text-white transition-colors font-sans" href="#">Experience</a>
<a className="hover:text-white transition-colors font-sans" href="#">Wellness</a>
<a className="hover:text-white transition-colors font-sans" href="#">Journal</a>
</div>

<button className="glass px-6 py-3 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2 font-sans">
                Reserve Stay
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</nav>

<header className="relative w-full h-[110vh] overflow-hidden bg-stone-900">

<div className="absolute inset-0">
<img alt="Forest Cabin" className="w-full h-full object-cover opacity-80 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57356633-8b8e-481d-84eb-9b43ea8306e1_1600w.jpg"/>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-stone-900"></div>

<div className="absolute top-[25%] left-[10%] hidden lg:block z-10 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="glass-dark p-4 rounded-2xl max-w-xs transform hover:-translate-y-2 transition-transform duration-500">
<div className="relative rounded-lg overflow-hidden mb-4 h-40 w-full group">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/309407a0-e40c-4d1d-b1f9-bf12967acf91_800w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center cursor-pointer hover:bg-white/40 transition-colors">
<iconify-icon className="text-white" icon="solar:play-circle-bold-duotone" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-start justify-between">
<div>
<p className="text-xs text-white/60 uppercase tracking-widest mb-1 font-sans">Architecture</p>
<p className="text-white font-serif text-lg leading-tight font-sans">Eco-Architected Forest Suites</p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-32 left-0 w-full px-6 z-20">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
<div className="lg:col-span-8">
<h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter mb-8 font-oswald font-normal [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
                        DISCONNECT <br/>
<span className="text-white/80 pr-4 font-oswald font-normal">to</span> RECONNECT.
                    </h1>
</div>
<div className="lg:col-span-4 lg:mb-4 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<p className="text-white/70 text-lg leading-relaxed mb-8 max-w-md font-sans">
                        Aetheria is where earth meets sky — a private eco-resort hidden beneath the constellations, designed for the modern traveler who seeks serenity, intention, and beauty in every detail.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-white text-stone-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-200 transition-colors flex items-center gap-2 font-sans">
                            Explore The Property
                            <iconify-icon icon="solar:map-arrow-right-bold-duotone" width="18"></iconify-icon>
</button>
<button className="glass px-8 py-4 rounded-full text-white text-sm font-medium hover:bg-white/10 transition-colors font-sans">
                            View Availability
                        </button>
</div>
</div>
</div>
</div>
</header>

<section className="py-20 border-b border-stone-200 bg-white">
<div className="max-w-[1600px] mx-auto px-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<p className="text-center text-sm uppercase tracking-widest text-stone-400 mb-12 font-medium font-sans">Preferred retreat for visionaries from</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon className="text-stone-800" icon="simple-icons:spacex" width="48"></iconify-icon>
<iconify-icon className="text-stone-800" icon="simple-icons:tesla" width="48"></iconify-icon>
<iconify-icon className="text-stone-800" icon="simple-icons:uber" width="48"></iconify-icon>
<iconify-icon className="text-stone-800" icon="simple-icons:nasa" width="56"></iconify-icon>
<iconify-icon className="text-stone-800" icon="simple-icons:apple" width="48"></iconify-icon>
<iconify-icon className="text-stone-800" icon="simple-icons:notion" width="48"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1 relative [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<iconify-icon className="text-green-800/80 mb-8" icon="solar:leaf-bold-duotone" width="48"></iconify-icon>
<h2 className="text-5xl md:text-7xl text-stone-900 mb-10 leading-[1.05] tracking-tight font-oswald font-normal">
                        ROOTED IN NATURE. <br/>
<span className="text-stone-400 font-oswald font-normal">DESIGNED FOR STILLNESS.</span>
</h2>
<div className="flex flex-col gap-10 pl-6 border-l border-stone-200">
<div>
<h3 className="text-lg font-medium text-stone-900 mb-3 flex items-center gap-2 font-sans">
<iconify-icon className="text-stone-400" icon="solar:meditation-round-bold-duotone"></iconify-icon>
                                Intentional Living
                            </h3>
<p className="text-lg text-stone-500 leading-relaxed max-w-md font-sans">
                                A modern escape for those who crave stillness, space, and something real. Tucked deep in forested hills, our off-grid suites are designed to disappear into nature.
                            </p>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-3 flex items-center gap-2 font-sans">
<iconify-icon className="text-stone-400" icon="solar:cup-hot-bold-duotone"></iconify-icon>
                                Culinary Calm
                            </h3>
<p className="text-lg text-stone-500 leading-relaxed max-w-md font-sans">
                                From locally sourced breakfasts to private dining on your deck, every meal is an exploration of the region's raw beauty and flavor.
                            </p>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center gap-3 text-stone-900 font-medium border-b border-stone-900 pb-1 hover:text-stone-600 hover:border-stone-600 transition-colors font-sans" href="#">
                            Read Our Philosophy
                            <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="order-1 lg:order-2 relative h-[800px] w-full [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">

<div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-[2rem] overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5afdad6c-7e1b-4657-b1dd-dfce19941dbf_1600w.jpg"/>
</div>

<div className="absolute bottom-12 left-0 w-[45%] h-[50%] rounded-[1.5rem] overflow-hidden shadow-2xl border-8 border-white">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/03036a3c-54ad-4e0d-acc3-f208870cc961_800w.webp"/>
<div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-semibold uppercase tracking-wide text-stone-800 font-sans">Now Booking</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-900 text-stone-200">
<div className="max-w-[1600px] mx-auto px-6">
<div className="flex flex-col items-center text-center mb-24 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<span className="text-xs font-semibold tracking-[0.2em] text-stone-400 uppercase mb-4 font-sans">Accommodations</span>
<h2 className="text-5xl md:text-6xl text-white tracking-tight mb-6 font-oswald font-normal">Featured Suites <span className="text-stone-500 font-oswald font-normal">&amp;</span> Experiences</h2>
<p className="text-stone-400 max-w-lg text-lg font-sans">Minimal architecture, private soaking decks, and panoramic skylights designed for stargazing.</p>
</div>

<div className="relative w-full h-[80vh] rounded-[2rem] overflow-hidden group cursor-pointer [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">

<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02ec3fdf-4f8c-4433-b2c6-9793000d7100_1600w.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-10 md:p-20 flex flex-col md:flex-row items-end justify-between gap-8">
<div>
<div className="flex items-center gap-4 mb-6">
<span className="bg-white/10 backdrop-blur border border-white/20 px-3 py-1 rounded-full text-xs font-medium text-white uppercase tracking-wider font-sans">
                                4 Guests
                            </span>
<span className="bg-white/10 backdrop-blur border border-white/20 px-3 py-1 rounded-full text-xs font-medium text-white uppercase tracking-wider font-sans">
                                120m²
                            </span>
</div>
<h3 className="text-5xl md:text-8xl text-white tracking-tighter mb-4 font-oswald font-normal">Stargazer Suite.</h3>
<p className="text-white/70 max-w-md text-lg font-sans">
                            Our signature suite featuring a retractable glass ceiling above the master bed and a cantilevered hot tub.
                        </p>
</div>
<div className="flex items-center gap-6">
<button className="w-16 h-16 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-stone-900 transition-all duration-300">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-stone-900 hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="absolute top-10 right-10">
<div className="bg-stone-900/40 backdrop-blur-md border border-white/10 p-1 rounded-full">
<div className="bg-white rounded-full p-3">
<iconify-icon className="text-stone-900" icon="solar:heart-bold-duotone" width="20"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
<div className="group relative h-[400px] rounded-[2rem] overflow-hidden [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a3489106-d494-4dba-8d00-0a075d1b1f67_1600w.webp"/>
<div className="absolute inset-0 p-10 flex flex-col justify-end">
<h4 className="text-3xl text-white mb-2 font-oswald font-normal">The Forest Spa</h4>
<div className="w-0 group-hover:w-16 h-0.5 bg-white transition-all duration-500"></div>
</div>
</div>
<div className="group relative h-[400px] rounded-[2rem] overflow-hidden [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d06adc6-da59-4b96-80c3-e385d919c51b_1600w.webp"/>
<div className="absolute inset-0 p-10 flex flex-col justify-end">
<h4 className="text-3xl text-white mb-2 font-oswald font-normal">Wild Dining</h4>
<div className="w-0 group-hover:w-16 h-0.5 bg-white transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 text-white pt-24 pb-12 border-t border-white/10">
<div className="max-w-[1600px] mx-auto px-6 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

<div className="md:col-span-4 flex flex-col items-start">
<div className="flex items-center gap-2 mb-6">
<iconify-icon icon="solar:mountains-linear" width="32"></iconify-icon>
<span className="text-xl uppercase font-oswald tracking-widest text-white">Aetheria.</span>
</div>
<p className="text-stone-400 text-sm leading-relaxed max-w-sm font-sans mb-8">
                        A sanctuary for the soul, hidden in the heart of the ancient forest. Disconnect from the noise, reconnect with yourself.
                    </p>
<div className="flex gap-4">

<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="font-sans font-medium text-sm text-white mb-6">Resort</h4>
<ul className="space-y-4 text-sm text-stone-400 font-sans">
<li><a className="hover:text-white transition-colors" href="#">Villas</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dining</a></li>
<li><a className="hover:text-white transition-colors" href="#">Spa &amp; Wellness</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gallery</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="font-sans font-medium text-sm text-white mb-6">Experiences</h4>
<ul className="space-y-4 text-sm text-stone-400 font-sans">
<li><a className="hover:text-white transition-colors" href="#">Forest Bathing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Stargazing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hiking Trails</a></li>
<li><a className="hover:text-white transition-colors" href="#">Private Events</a></li>
</ul>
</div>

<div className="md:col-span-4">
<h4 className="font-sans font-medium text-sm text-white mb-6">Newsletter</h4>
<p className="text-stone-400 text-sm mb-4 font-sans">Subscribe to receive seasonal updates and exclusive retreat offers.</p>
<form className="flex gap-2">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 w-full text-sm text-white focus:outline-none focus:border-white/30 font-sans placeholder:text-stone-600 transition-colors" placeholder="Email address" type="email"/>
<button className="bg-white text-stone-950 px-6 py-3 rounded-lg text-sm font-medium hover:bg-stone-200 transition-colors font-sans" type="button">Join</button>
</form>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-500 font-sans uppercase tracking-wider">
<p>© 2024 Aetheria Resorts. All rights reserved.</p>
<div className="flex gap-8">
<a className="hover:text-stone-300 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-stone-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
