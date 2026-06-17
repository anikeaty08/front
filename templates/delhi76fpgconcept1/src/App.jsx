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
sans: ['DM Sans', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
black: '#0f0f0f',
red: '#D01B1B',
cream: '#F7F4EB',
accent: '#F4EBD0'
}
},
animation: {
'scroll': 'scroll 25s linear infinite',
'bounce-slow': 'bounce 3s infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
        
        // Simple scroll to anchor behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
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
      

<header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<nav className="flex w-full max-w-6xl items-center justify-between rounded-2xl bg-black px-6 py-4 shadow-2xl">
<a className="font-display text-xl font-semibold tracking-tighter text-white uppercase" href="#">
                DELHI<span className="text-brand-red">76</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider" href="#about">About</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider" href="#menu">Menu</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition-colors uppercase tracking-wider" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:block rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white uppercase tracking-wide hover:bg-white/20 transition-colors" href="#book">
                    Book Table
                </a>
<a className="rounded-lg bg-brand-red px-5 py-2 text-xs font-semibold text-white uppercase tracking-wide hover:bg-red-600 transition-colors shadow-lg shadow-red-900/20" href="#order">
                    Order Online
                </a>
</div>
</nav>
</header>
<main className="">

<section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-red pt-32 pb-20 text-center">

<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600 to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 flex flex-col items-center px-4">
<span className="mb-4 font-display text-sm font-semibold tracking-[0.2em] text-white/80 uppercase">
                    Coventry • Indian • Nepalese
                </span>
<h1 className="text-[5rem] sm:text-[8rem] md:text-[11rem] leading-[0.85] uppercase font-semibold text-white tracking-tighter font-display drop-shadow-2xl">
                    Delhi 76
                </h1>
<p className="mt-6 max-w-xl font-sans text-sm sm:text-base font-medium text-white/90 tracking-wide uppercase leading-relaxed">
                    76 Albany Road, Earlsdon, Coventry CV5 6JU
                </p>

<h2 className="mt-12 font-display text-3xl sm:text-5xl font-semibold uppercase tracking-tight text-brand-accent drop-shadow-lg">
                    Authentic Indian Curry
                </h2>

<div className="relative mt-8 mb-16 w-full max-w-3xl group cursor-pointer">
<div className="absolute inset-0 bg-black/20 blur-3xl rounded-full transform scale-75"></div>

<img alt="Authentic Indian Thali Feast" className="relative z-10 mx-auto h-[300px] sm:h-[450px] w-full object-cover rounded-[2.5rem] shadow-2xl border-4 border-white/10 rotate-[-2deg] hover:rotate-0 transition-all duration-700 ease-out brightness-105 contrast-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2fbd7a6c-3c9f-48f3-9405-e3bd7e4420b8_1600w.png"/>

<div className="absolute -bottom-6 -right-4 sm:right-10 z-20 animate-bounce-slow">
<div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-white text-brand-black shadow-xl border-4 border-brand-red">
<span className="text-xs font-semibold uppercase tracking-tighter">Rated</span>
<span className="font-display text-2xl font-semibold">4.8</span>
<div className="flex text-brand-red gap-0.5">
<svg className="lucide lucide-star h-2 w-2 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-2 w-2 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-2 w-2 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-2 w-2 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-2 w-2 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 relative z-20">
<a className="group inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-brand-red shadow-xl transition-all hover:bg-black hover:text-white" href="#menu">
<span>Explore Menu</span>
<svg className="lucide lucide-arrow-down h-4 w-4 transition-transform group-hover:translate-y-1" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-transparent px-8 py-3 font-display text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-white hover:text-brand-red hover:border-white" href="#book">
                        Book a Table
                    </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full leading-none">
<svg className="block w-full h-12 sm:h-24 text-brand-cream" preserveaspectratio="none" viewbox="0 0 1440 320">
<path d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,186.7C672,160,768,128,864,138.7C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="currentColor"></path>
</svg>
</div>
</section>

<div className="overflow-hidden border-b border-black/5 bg-brand-cream py-6">
<div className="flex animate-scroll whitespace-nowrap">
<div className="flex items-center gap-8 px-4">
<span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black/10">Authentic</span>
<span className="text-brand-red text-2xl">●</span>
<span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black">Indian Curry</span>
<span className="text-brand-red text-2xl">●</span>
<span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black/10">Nepalese Momos</span>
<span className="text-brand-red text-2xl">●</span>
<span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black">Tandoori Grill</span>
<span className="text-brand-red text-2xl">●</span>
<span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black/10">Vegan Options</span>
<span className="text-brand-red text-2xl">●</span>
<span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black">Gluten Free</span>
<span className="text-brand-red text-2xl">●</span>

<span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black/10">Authentic</span>
<span className="text-brand-red text-2xl">●</span>
<span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black">Indian Curry</span>
<span className="text-brand-red text-2xl">●</span>
<span className="font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight text-black/10">Nepalese Momos</span>
<span className="text-brand-red text-2xl">●</span>
</div>
</div>
</div>

<section className="bg-brand-cream px-4 py-20 sm:px-8" id="about">
<div className="mx-auto max-w-7xl">
<div className="mb-12 text-center md:text-left">
<h2 className="font-display text-4xl sm:text-5xl font-semibold uppercase text-brand-black leading-none">
                        Welcome to <span className="text-brand-red">Delhi 76</span>
</h2>
<p className="mt-4 max-w-2xl text-sm sm:text-base text-black/60">
                        We pride ourselves on blending traditional recipes with a modern touch, offering a rich menu that celebrates the unique culinary heritage of both India and Nepal.
                    </p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 h-auto lg:h-[800px]">

<div className="group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-8 shadow-lg transition-transform hover:-translate-y-1 lg:col-span-2 lg:row-span-1">
<div>
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-red/10 text-brand-red">
<svg className="lucide lucide-chef-hat h-5 w-5" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</div>
<h3 className="font-display text-2xl font-semibold uppercase tracking-tight text-brand-black">Culinary Heritage</h3>
<p className="mt-4 text-sm text-black/70 leading-relaxed">
                                From the aromatic spices of our signature Indian curries and sizzling tandoori grills to the delicate artistry of Nepalese momos and hearty Himalayan specialties, every dish is crafted with passion.
                            </p>
</div>
<div className="mt-6 flex gap-2">
<span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black/60">Fresh Ingredients</span>
<span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-black/60">Halal</span>
</div>
</div>

<div className="relative overflow-hidden rounded-[2rem] bg-black shadow-lg lg:col-span-1 lg:row-span-2 group">
<img alt="Momo" className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<h3 className="font-display text-3xl font-semibold uppercase leading-none text-white">FamousMomos</h3>
<p className="mt-2 text-xs text-white/70">A taste of the Himalayas.</p>
</div>
</div>

<div className="flex flex-col items-center justify-center rounded-[2rem] bg-brand-red p-8 text-center shadow-lg lg:col-span-1 lg:row-span-1 transition-transform hover:scale-[1.02]">
<h3 className="font-display text-3xl font-semibold uppercase text-white">OrderTakeaway</h3>
<p className="mt-2 text-xs font-medium text-white/80 uppercase tracking-widest">Coventry Delivery</p>
<a className="mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-brand-red shadow-md transition-colors hover:bg-black hover:text-white" href="#order">
<svg className="lucide lucide-arrow-right h-5 w-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="relative overflow-hidden rounded-[2rem] bg-black shadow-lg lg:col-span-1 lg:row-span-1 group">
<img alt="Ambience" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
<span className="font-display text-xl font-semibold uppercase text-white tracking-widest">Dine In</span>
</div>
</div>

<div className="flex flex-col justify-center rounded-[2rem] bg-brand-black p-8 text-white shadow-lg lg:col-span-2 lg:row-span-1">
<div className="flex items-center gap-3 text-brand-red mb-4">
<svg className="lucide lucide-vegan h-6 w-6" data-lucide="vegan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8q6 0 6-6-6 0-6 6"></path><path d="M17.41 3.59a10 10 0 1 0 3 3"></path><path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"></path></svg>
<svg className="lucide lucide-wheat-off h-6 w-6" data-lucide="wheat-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 22 10-10"></path><path d="m16 8-1.17 1.17"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"></path><path d="M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"></path><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"></path><path d="M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"></path><line x1="2" x2="22" y1="2" y2="22"></line></svg>
</div>
<h3 className="font-display text-2xl font-semibold uppercase tracking-tight">Dietary Friendly</h3>
<p className="mt-2 text-sm text-white/60">
                            We offer a wide range of options including vegetarian, vegan, and gluten-free dishes.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-4 sm:px-8 border-t border-black/5" id="menu">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-16">
<div>
<span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">The Menu</span>
<h2 className="mt-2 font-display text-5xl sm:text-7xl font-semibold uppercase tracking-tighter text-black leading-none">
                            Taste The<br/>Essence
                        </h2>
</div>
<div className="md:max-w-xs text-right md:text-left">
<p className="text-sm text-black/60">
                            From sizzling Tandoori dishes to traditional Nepalese specialities.
                        </p>
<a className="mt-4 inline-flex items-center gap-2 border-b border-black pb-0.5 text-xs font-semibold uppercase tracking-widest text-black hover:text-brand-red hover:border-brand-red transition-colors" href="#">
                            Download Full Menu
                        </a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="group">
<div className="mb-4 overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
<img alt="Chicken Curry" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-dashed border-black/20 pb-2">
<h3 className="font-display text-xl font-semibold uppercase text-black group-hover:text-brand-red transition-colors">Chicken Curry</h3>
<span className="font-mono text-sm font-semibold">£10.50</span>
</div>
<p className="mt-2 text-xs text-black/60 line-clamp-2">Aromatic spices, tender chicken breast, traditional sauce.</p>
</div>

<div className="group">
<div className="mb-4 overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
<img alt="Momos" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-dashed border-black/20 pb-2">
<h3 className="font-display text-xl font-semibold uppercase text-black group-hover:text-brand-red transition-colors">Nepalese Momos</h3>
<span className="font-mono text-sm font-semibold">£8.95</span>
</div>
<p className="mt-2 text-xs text-black/60 line-clamp-2">Steamed dumplings filled with spiced meat or vegetables, served with chutney.</p>
</div>

<div className="group">
<div className="mb-4 overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
<img alt="Biryani" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline border-b border-dashed border-black/20 pb-2">
<h3 className="font-display text-xl font-semibold uppercase text-black group-hover:text-brand-red transition-colors">Mutton Biryani</h3>
<span className="font-mono text-sm font-semibold">£12.95</span>
</div>
<p className="mt-2 text-xs text-black/60 line-clamp-2">Basmati rice cooked with marinated mutton and exotic spices.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-3 rounded-full bg-brand-black px-8 py-4 font-display text-sm font-semibold uppercase tracking-widest text-white transition-all hover:bg-brand-red" href="#order">
<span>View All Dishes</span>
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="bg-brand-black py-20 px-4 sm:px-8 text-white" id="book">
<div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
<div>
<span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-brand-red">Visit Us</span>
<h2 className="mt-2 font-display text-4xl sm:text-6xl font-semibold uppercase tracking-tight">Opening Hours</h2>
<p className="mt-4 text-white/60 max-w-md">Experience Delhi 76 in person. We recommend booking in advance for weekends.</p>
<div className="mt-10 space-y-6">
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<span className="font-display text-lg uppercase tracking-wide">Tue - Thu</span>
<span className="font-mono text-sm text-brand-red">17:00 – 22:30</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<span className="font-display text-lg uppercase tracking-wide">Fri - Sat</span>
<span className="font-mono text-sm text-brand-red">17:30 – 23:00</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-4">
<span className="font-display text-lg uppercase tracking-wide">Sunday</span>
<span className="font-mono text-sm text-brand-red">17:00 – 22:30</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-4 opacity-50">
<span className="font-display text-lg uppercase tracking-wide">Monday</span>
<span className="font-mono text-sm">Closed</span>
</div>
</div>
</div>
<div className="relative bg-brand-red rounded-[2rem] p-10 overflow-hidden text-center">
<div className="absolute top-0 right-0 p-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<h3 className="relative z-10 font-display text-3xl font-semibold uppercase mb-6">Book Your Table</h3>
<p className="relative z-10 text-sm text-white/90 mb-8 px-4">Reserve your spot for an unforgettable dining experience in Earlsdon.</p>
<form className="relative z-10 flex flex-col gap-4 max-w-xs mx-auto">
<input className="w-full bg-black/20 border-2 border-transparent focus:border-white outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-white/50 transition-colors" placeholder="Name" type="text"/>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-black/20 border-2 border-transparent focus:border-white outline-none rounded-xl px-4 py-3 text-sm text-white/80 transition-colors" type="date"/>
<input className="w-full bg-black/20 border-2 border-transparent focus:border-white outline-none rounded-xl px-4 py-3 text-sm text-white/80 transition-colors" type="time"/>
</div>
<button className="mt-2 w-full bg-white text-brand-red font-display font-semibold uppercase tracking-wider text-sm py-4 rounded-xl hover:bg-black hover:text-white transition-colors" type="button">
                            Confirm Booking
                        </button>
</form>
</div>
</div>
</section>

<section className="bg-brand-cream py-24 px-4 overflow-hidden" id="reviews">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 mb-6">
<span className="flex gap-1 text-brand-red">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</span>
<span className="text-[10px] font-semibold uppercase tracking-wider">Based on 675 Reviews</span>
</div>
<h2 className="font-display text-4xl sm:text-6xl font-semibold uppercase text-brand-black">Loved by Coventry</h2>
</div>
<div className="mx-auto max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">SC</div>
<div>
<h4 className="font-semibold text-sm">ShivaChenimeni</h4>
<p className="text-[10px] text-gray-400 uppercase">July 2025</p>
</div>
</div>
<div className="flex text-brand-red gap-0.5 mb-3">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-gray-600 leading-relaxed">"Amazing taste, very good place to vibe. Loved ambience. Must recommended and must visit for Indian food in Coventry."</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">BG</div>
<div>
<h4 className="font-semibold text-sm">Bhumika Gowda</h4>
<p className="text-[10px] text-gray-400 uppercase">June 2025</p>
</div>
</div>
<div className="flex text-brand-red gap-0.5 mb-3">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-gray-600 leading-relaxed">"One of the best spots for Indian food in Coventry. Delicious dishes, friendly staff, and a decent ambience."</p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-xs">RV</div>
<div>
<h4 className="font-semibold text-sm">Rishika Vijaykumar</h4>
<p className="text-[10px] text-gray-400 uppercase">June 2025</p>
</div>
</div>
<div className="flex text-brand-red gap-0.5 mb-3">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm text-gray-600 leading-relaxed">"Really good food. Clean and cozy ambiance. The starters and main course were really tasty."</p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 px-4 sm:px-8" id="faq">
<div className="mx-auto max-w-3xl">
<h2 className="mb-12 text-center font-display text-4xl font-semibold uppercase tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-2xl border border-black/10 bg-brand-cream p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="font-display text-lg font-semibold uppercase">Where is Delhi 76 located?</h3>
<span className="relative h-5 w-5 shrink-0">
<svg className="lucide lucide-plus absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-700">
                            Delhi 76 is located at 76 Albany Road, Earlsdon, Coventry CV5 6JU. We are easy to find and welcome guests from all over Coventry.
                        </p>
</details>
<details className="group rounded-2xl border border-black/10 bg-white p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="font-display text-lg font-semibold uppercase">Do you offer vegetarian and vegan options?</h3>
<span className="relative h-5 w-5 shrink-0">
<svg className="lucide lucide-plus absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-700">
                            Yes! We offer a wide range of options, including vegetarian, vegan, and gluten-free dishes, catering to all dietary preferences.
                        </p>
</details>
<details className="group rounded-2xl border border-black/10 bg-white p-6 [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
<h3 className="font-display text-lg font-semibold uppercase">Do you offer takeaway?</h3>
<span className="relative h-5 w-5 shrink-0">
<svg className="lucide lucide-plus absolute inset-0 opacity-100 group-open:opacity-0 transition-opacity" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus absolute inset-0 opacity-0 group-open:opacity-100 transition-opacity" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-gray-700">
                            Yes, we offer convenient Indian takeaway and Nepalese delivery in Coventry. Order online or call us.
                        </p>
</details>
</div>
</div>
</section>

<section className="bg-brand-red py-12 px-4 text-white">
<div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8 rounded-3xl border border-white/20 bg-white/10 p-8 md:p-12 backdrop-blur-sm">
<div>
<h3 className="font-display text-3xl sm:text-4xl font-semibold uppercase tracking-tight">App Coming Soon</h3>
<p className="mt-2 text-sm text-white/80 max-w-md">
                        Enjoy the authentic flavors of Delhi 76 wherever you are. Exclusive offers and seamless service just a tap away.
                    </p>
</div>
<div className="flex gap-4">
<button className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-apple h-5 w-5" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg> iOS Store
                    </button>
<button className="flex items-center gap-2 rounded-xl bg-black px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-white hover:text-black transition-colors">
<svg className="lucide lucide-play-circle h-5 w-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg> Android
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-8">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-20">
<div className="max-w-sm">
<a className="font-display text-3xl font-semibold tracking-tighter uppercase mb-6 block" href="#">
                        DELHI<span className="text-brand-red">76</span>
</a>
<p className="text-sm text-white/50 leading-relaxed">
                        Your go-to spot for authentic Nepali and Indian Dishes in Coventry. Blending tradition with a modern touch.
                    </p>
<div className="mt-6 flex gap-4">
<a className="hover:text-brand-red transition-colors" href="#"><svg className="lucide lucide-instagram h-5 w-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-brand-red transition-colors" href="#"><svg className="lucide lucide-facebook h-5 w-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="hover:text-brand-red transition-colors" href="#"><svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
<div>
<h4 className="font-display text-lg font-semibold uppercase tracking-wider mb-4 text-brand-red">Quick Links</h4>
<ul className="space-y-3 text-sm text-white/60">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#">Order Now</a></li>
<li><a className="hover:text-white transition-colors" href="#">Book A Table</a></li>
<li><a className="hover:text-white transition-colors" href="#">Menus</a></li>
</ul>
</div>
<div>
<h4 className="font-display text-lg font-semibold uppercase tracking-wider mb-4 text-brand-red">Find Us</h4>
</div>
<div>
<h4 className="font-display text-lg font-semibold uppercase tracking-wider mb-4 text-brand-red">Contact</h4>
<ul className="space-y-3 text-sm text-white/60">
<li>024 7667 2653</li>
<li>bhupender@hotmail.co.uk</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/30 uppercase tracking-widest">
<p>© Delhi 76 Coventry</p>
<div className="flex gap-6">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
