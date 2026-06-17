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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
                navbar.classList.remove('py-4');
                navbar.classList.add('py-2');
            } else {
                navbar.classList.remove('bg-white/95', 'backdrop-blur-md', 'shadow-sm');
                navbar.classList.remove('py-2');
                navbar.classList.add('py-4');
            }
        });

        // Horizontal Scroll Gallery Logic (Mouse Wheel + Drag)
        const slider = document.getElementById('gallery-carousel');
        let isDown = false;
        let startX;
        let scrollLeft;

        // Mouse Wheel Horizontal Scroll
        slider.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                slider.scrollLeft += e.deltaY;
            }
        });

        // Drag Functionality
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('cursor-grabbing');
            slider.classList.remove('cursor-grab');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('cursor-grabbing');
            slider.classList.add('cursor-grab');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('cursor-grabbing');
            slider.classList.add('cursor-grab');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            slider.scrollLeft = scrollLeft - walk;
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
      

<div className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-noise"></div>

<nav className="sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

<a className="text-2xl md:text-3xl text-starbucks-green tracking-tight font-serif font-semibold relative group" href="/">
                Flower Girl Coffee
            </a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-starbucks-green transition-colors" href="#home">Home</a>
<a className="hover:text-starbucks-green transition-colors" href="#about">About</a>
<a className="hover:text-starbucks-green transition-colors" href="#menu">Menu</a>
<a className="hover:text-starbucks-green transition-colors" href="#popular">Popular Items</a>
<a className="hover:text-starbucks-green transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-starbucks-green transition-colors" href="#booking">Booking</a>
<a className="hover:text-starbucks-green transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-starbucks-green transition-colors" href="#location">Location</a>
<a className="hover:text-starbucks-green transition-colors flex items-center gap-1" href="https://www.instagram.com/flowergirlcoffee" target="_blank">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> Instagram
                </a>
</div>

<button className="lg:hidden text-stone-700">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>
<main className="relative z-10">

<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Glasshouse Cafe Interior" className="brightness-[0.85] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60caff71-1b91-4e5d-8b46-f91c3f12945c_3840w.png" style={{}}/>
</div>
<div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto fade-in-up">
<h1 className="md:text-7xl leading-tight text-5xl font-medium tracking-tight font-serif mb-6">
                    Flower Girl Coffee
                </h1>
<p className="text-lg md:text-xl font-light mb-10 tracking-wide text-stone-100 max-w-2xl mx-auto">
                    A calm glasshouse café in Sunway Geo.
                </p>
<a className="inline-flex items-center gap-2 bg-white text-starbucks-green hover:bg-stone-100 px-8 py-3 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="https://www.instagram.com/flowergirlcoffee" target="_blank">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> View Instagram
                </a>
</div>
</section>

<section className="pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

<div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/5] md:aspect-square order-2 md:order-1">
<img alt="Coffee Pour" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0466b41-da4e-4130-b80b-4ba381b54203_1600w.png" style={{}}/>
</div>

<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-starbucks-green tracking-tight">
                            The Glasshouse Experience
                        </h2>
<div className="w-16 h-1 bg-emerald-800/20 rounded-full"></div>
<p className="text-stone-600 leading-relaxed text-lg font-light">
                            Nestled in Sunway Geo, Flower Girl Coffee offers a sanctuary from the bustle of the city. Our glasshouse architecture invites natural light to dance across your table, creating the perfect backdrop for quiet reflection or intimate conversations.
                        </p>
<p className="text-stone-600 leading-relaxed text-lg font-light">
                            We pride ourselves on our signature roasted blends and artisanal pastries. Whether you are here for a morning pick-me-up or a lazy afternoon photoshoot, our space is designed to be your home away from home.
                        </p>
<div className="pt-4">
<a className="text-emerald-800 font-medium hover:text-emerald-600 transition-colors inline-flex items-center gap-2 border-b border-emerald-800/30 pb-0.5 hover:border-emerald-600" href="#menu">
                                Explore Our Offerings <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-stone-100 border-t pt-20 pb-20" id="menu">
<div className="text-center mb-12">
<h2 className="text-4xl font-medium text-stone-900 tracking-tight font-serif mb-3">Our Menu</h2>
<p className="text-stone-500 text-sm tracking-wide uppercase">Full menu coming soon — temporary placeholder</p>
</div>
<div className="w-full max-w-7xl mx-auto px-4 md:px-0">

<img alt="Flower Girl Coffee Menu" className="w-full h-auto rounded-sm shadow-sm opacity-90 grayscale-[0.1] object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d839543-8767-4c5e-b437-a95639e6cdbb_3840w.png" style={{}}/>
</div>
</section>

<section className="bg-[#F5F5F3] pt-24 pb-24" id="popular">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-starbucks-green mb-4 tracking-tight">Popular Items</h2>
<p className="text-stone-500">A few customer favourites at Flower Girl Coffee</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-full flex flex-col">
<div className="aspect-square overflow-hidden">
<img alt="Rose Latte" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf27e957-c12e-4df0-95e2-124ee0752268_800w.png" style={{}}/>
</div>
<div className="flex flex-col flex-grow pt-6 pr-6 pb-6 pl-6">
<h3 className="text-lg font-semibold text-stone-900 font-serif mb-2">signature Latte</h3>
<p className="leading-relaxed text-sm text-stone-500">Our signature espresso infused  velvety steamed milk.</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-full flex flex-col">
<div className="aspect-square overflow-hidden">
<img alt="Almond Croissant" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b411dca1-5b31-437f-a6dd-c375a87d5111_800w.png"/>
</div>
<div className="flex flex-col flex-grow pt-6 pr-6 pb-6 pl-6">
<h3 className="text-lg font-semibold text-stone-900 font-serif mb-2">Ultimate Burger</h3>
<p className="leading-relaxed text-sm text-stone-500">tasty burger with toasted buns and premium beef patty, serve with crispy fries</p>
</div>
</div>

<div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer h-full flex flex-col">
<div className="aspect-square overflow-hidden">
<img alt="Avocado Toast" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebf35c15-1899-419e-9edc-d6dc30201eb7_800w.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-lg font-semibold text-stone-900 font-serif mb-2">Spagetti Carbonara </h3>
<p className="leading-relaxed text-sm text-stone-500">Italian classic, angel hair pasta serve with creamy white sauce and mushrooms</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="gallery">
<div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between">
<div>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-stone-900 tracking-tight">Gallery</h2>
<p className="text-stone-500 mt-2">Scroll horizontally to explore our space</p>
</div>

<div className="hidden md:flex gap-2 text-stone-400">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<svg className="lucide lucide-mouse-pointer-2 w-5 h-5" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="absolute left-0 top-[200px] bottom-0 w-12 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-[200px] bottom-0 w-12 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>


<div className="flex overflow-x-auto gap-6 px-6 md:px-[max(2rem,calc((100vw-80rem)/2))] pb-12 snap-x snap-mandatory hide-scrollbar cursor-grab active:cursor-grabbing" id="gallery-carousel">

<div className="relative snap-center shrink-0 w-[80vw] md:w-[400px] aspect-[4/5] rounded-xl overflow-hidden shadow-lg select-none">
<img alt="Cafe Interior" className="w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-white font-serif tracking-wide">Interior</span>
</div>

<div className="relative snap-center shrink-0 w-[80vw] md:w-[400px] aspect-[4/5] rounded-xl overflow-hidden shadow-lg select-none">
<img alt="Latte Art" className="w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-white font-serif tracking-wide">Latte Art</span>
</div>

<div className="relative snap-center shrink-0 w-[80vw] md:w-[400px] aspect-[4/5] rounded-xl overflow-hidden shadow-lg select-none">
<img alt="Pastries" className="w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-white font-serif tracking-wide">Fresh Bakes</span>
</div>

<div className="relative snap-center shrink-0 w-[80vw] md:w-[400px] aspect-[4/5] rounded-xl overflow-hidden shadow-lg select-none">
<img alt="Coffee Beans" className="w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-white font-serif tracking-wide">Premium Beans</span>
</div>

<div className="relative snap-center shrink-0 w-[80vw] md:w-[400px] aspect-[4/5] rounded-xl overflow-hidden shadow-lg select-none">
<img alt="Greenery" className="w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-white font-serif tracking-wide">Greenery</span>
</div>

<div className="relative snap-center shrink-0 w-[80vw] md:w-[400px] aspect-[4/5] rounded-xl overflow-hidden shadow-lg select-none">
<img alt="Cozy Corner" className="w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-white font-serif tracking-wide">Cozy Corner</span>
</div>

<div className="relative snap-center shrink-0 w-[80vw] md:w-[400px] aspect-[4/5] rounded-xl overflow-hidden shadow-lg select-none">
<img alt="Espresso Machine" className="w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-white font-serif tracking-wide">Craft</span>
</div>

<div className="relative snap-center shrink-0 w-[80vw] md:w-[400px] aspect-[4/5] rounded-xl overflow-hidden shadow-lg select-none">
<img alt="Sunlight" className="w-full h-full object-cover pointer-events-none" src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<span className="absolute bottom-4 left-4 text-white font-serif tracking-wide">Sunlight</span>
</div>
</div>
</section>


<section className="pt-24 pb-24" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-center text-starbucks-green mb-16 tracking-tight">Customer Reviews</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2">
<div className="flex text-[#Cba258] mb-4">
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-stone-600 mb-6 italic">"The most beautiful cafe in Sunway. The natural light is amazing for photos and the coffee is top tier."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center font-serif text-stone-500 font-bold">A</div>
<div>
<h4 className="text-sm font-bold text-stone-900">Amanda Lee</h4>
<span className="text-xs text-stone-400">Local Guide</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 delay-100">
<div className="flex text-[#Cba258] mb-4">
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-stone-600 mb-6 italic">"A hidden gem. The rose latte is a must-try. I love coming here to work on weekdays."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center font-serif text-stone-500 font-bold">J</div>
<div>
<h4 className="text-sm font-bold text-stone-900">Jason T.</h4>
<span className="text-xs text-stone-400">Coffee Enthusiast</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-500 transform hover:-translate-y-2 delay-200">
<div className="flex text-[#Cba258] mb-4">
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star fill-current w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-stone-600 mb-6 italic">"Perfect venue for our small engagement party. The staff went above and beyond."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center font-serif text-stone-500 font-bold">S</div>
<div>
<h4 className="text-sm font-bold text-stone-900">Sarah K.</h4>
<span className="text-xs text-stone-400">Event Planner</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-200" id="location">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h2 className="text-4xl font-serif font-medium text-starbucks-green tracking-tight">Find Us</h2>
<div className="space-y-4 text-stone-600">
<div className="flex items-start gap-4">
<svg className="lucide lucide-map-pin w-6 h-6 text-emerald-800 shrink-0 mt-1" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="">
<h4 className="font-semibold text-stone-900">Address</h4>
<p className="">Sunway Geo Avenue, Jalan Lagoon Selatan,<br/>Bandar Sunway, 47500 Selangor, Malaysia</p>
</div>
</div>
<div className="flex items-start gap-4">
<svg className="lucide lucide-clock w-6 h-6 text-emerald-800 shrink-0 mt-1" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div>
<h4 className="font-semibold text-stone-900">Opening Hours</h4>
<p>Mon - Sun: 8:30 AM – 10:00 PM</p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 border border-stone-300 bg-white hover:bg-stone-50 text-stone-800 px-6 py-3 rounded-full text-sm font-medium transition-colors" href="https://www.google.com/maps/place/Flower+Girl+Coffee+-+Sunway+Geo/" target="_blank">
                        Get Directions
                    </a>
</div>
<div className="w-full h-[400px] bg-stone-100 rounded-xl overflow-hidden shadow-inner">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0342636906236!2d101.60946231475713!3d3.069799997764619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4c8f8b3d6eff%3A0x6b3f7f8f8b3d6eff!2sSunway%20Geo%20Avenue!5e0!3m2!1sen!2smy!4v1645426173004!5m2!1sen!2smy" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>
</main>

<footer className="bg-white text-stone-500 py-12 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:items-start items-center">
<span className="font-serif text-lg text-starbucks-green font-medium">Flower Girl Coffee</span>
<span className="text-xs mt-1">© 2025 All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="hover:text-starbucks-green transition-colors" href="#">Privacy</a>
<a className="hover:text-starbucks-green transition-colors" href="#">Terms</a>
</div>
<a className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors" href="https://www.instagram.com/flowergirlcoffee" target="_blank">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</footer>



    </>
  );
}
