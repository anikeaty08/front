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
colors: {
cream: '#FDFCF8',
savor: '#F3EFE0',
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
}
},
borderRadius: {
'4xl': '2rem',
}
}
}
}



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    
                    // Update the sidebar navigation colors
                    const id = entry.target.getAttribute('id');
                    document.querySelectorAll('.nav-link').forEach(link => {
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.replace('text-stone-300', 'text-stone-900');
                        } else {
                            link.classList.replace('text-stone-900', 'text-stone-300');
                        }
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-item').forEach(item => {
            observer.observe(item);
        });
    });



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
            
            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('py-0', 'shadow-sm', 'bg-white/95');
                } else {
                    navbar.classList.remove('py-0', 'shadow-sm', 'bg-white/95');
                }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component w-full absolute top-0 hue-rotate-15 saturate-150 brightness-125 h-[700px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="opxjeAzlg0dkUUVGEZri"></div>

</div></div></div>

<nav className="fixed z-50 transition-all duration-500 bg-white/80 w-full border-stone-100 border-b top-0 backdrop-blur-xl" id="navbar">
<div className="flex h-20 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-6 text-stone-900">
<button className="hover:opacity-60 transition-opacity p-2 rounded-full hover:bg-stone-100">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</button>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
<a className="flex items-center gap-2 group" href="#">
<span className="serif text-3xl font-semibold text-stone-900 tracking-tighter">Madge</span>
</a>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#why-madge">About Us</a>
<a className="hover:text-stone-900 transition-colors" href="#reservations">Reservations</a>
</div>
<button className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                    Order Now
                </button>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center rounded-b-[3rem] shadow-sm z-10">
<div className="absolute inset-0 z-0">
<img alt="Exquisite Plating" className="w-full h-full object-cover object-center scale-105 animate-[pulse_15s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1729394405518-eaf2a0203aa7?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-stone-950/20"></div>
<div className="bg-gradient-to-t from-stone-900/60 to-transparent absolute bottom-0 w-full h-1/2"></div>
</div>
<div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto flex flex-col items-center mt-20">
<h1 className="animate-fade-in-up animation-delay-100 md:text-9xl leading-[0.85] text-7xl font-normal tracking-tighter mb-8">Feel the <br/> <span className="serif font-light italic text-stone-100">Good Taste from Scratch</span></h1>
<div className="animate-fade-in-up animation-delay-200 flex flex-col md:flex-row items-center gap-4 mt-8">
<a className="bg-white text-stone-900 px-8 py-4 rounded-full font-medium text-base hover:bg-stone-100 transition-colors min-w-[180px]" href="#menu">View Menu</a>
<a className="group relative overflow-hidden hover:bg-white/20 transition-colors min-w-[180px] text-base font-medium text-white bg-white/10 border-white/20 border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm" href="#reservations">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out -skew-x-12"></div>
<span className="relative z-10">Book a Table</span>
</a>
</div>
</div>
</header>

<section className="-mt-12 overflow-hidden text-white bg-stone-900 pt-44 pb-32 relative">

<div className="absolute inset-0 z-0">
<img alt="Dark Sauce Background" className="w-full h-full object-cover opacity-60 mix-blend-overlay" src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-stone-900 via-stone-900/80 to-stone-900 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-end">

<div className="reveal">
<h2 className="text-7xl md:text-9xl font-playfair text-cream leading-[0.85] tracking-tighter">
                        Curated <br/>
<span className="italic font-light opacity-80">Hits</span>
</h2>
</div>

<div className="flex flex-col items-start md:items-end gap-8 pb-2 reveal delay-100">
<p className="text-xl md:text-2xl text-stone-300 font-light max-w-md md:text-right leading-relaxed">
                        Pure, versatile, sustainably-sourced ingredients crafted into unforgettable moments.
                    </p>
<button className="bg-savor text-stone-900 px-6 py-3 rounded hover:bg-white transition-colors text-sm font-medium tracking-wide flex items-center gap-3 shadow-[0_0_20px_rgba(243,239,224,0.1)]">
                        Menu <span className="w-8 h-px bg-stone-400"></span> Full List
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-8">

<div className="reveal delay-100 group relative glass-card rounded-3xl p-3 transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl relative bg-stone-800">
<img alt="Truffle Risotto" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
<span className="text-xs font-bold uppercase tracking-wide text-white">Vegetarian</span>
</div>
<div className="absolute bottom-4 right-4 bg-savor text-stone-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            GHS 280.00
                        </div>
</div>
<div className="p-4 pt-6">
<h3 className="text-3xl font-serif font-medium text-cream leading-none mb-3">Truffle Risotto</h3>
<p className="text-stone-400 text-sm font-normal leading-relaxed mb-6 line-clamp-2">
                            Arborio rice slowly cooked with aged parmesan reggiano and topped with generous fresh black truffle shavings.
                        </p>
<button className="w-full py-3.5 rounded-full bg-stone-800/50 border border-stone-700 text-stone-200 font-medium text-sm uppercase tracking-wide hover:bg-savor hover:text-stone-900 hover:border-savor transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                            Add to Order
                            <svg className="group-hover/btn:rotate-90 transition-transform duration-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
</div>

<div className="reveal delay-200 group relative glass-card rounded-3xl p-3 transition-all duration-500 hover:-translate-y-2 md:translate-y-8 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl relative bg-stone-800">
<img alt="Wagyu A5" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1663610561489-3fbc54a0e606?w=1600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-savor px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
<span className="text-xs font-bold uppercase tracking-wide text-stone-900">Signature</span>
</div>
<div className="absolute bottom-4 right-4 bg-savor text-stone-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            GHS 950.00
                        </div>
</div>
<div className="p-4 pt-6">
<h3 className="text-3xl font-serif font-medium text-cream leading-none mb-3">Wagyu A5 Pizza (Signature)</h3>
<p className="text-stone-400 text-sm font-normal leading-relaxed mb-6 line-clamp-2">
                            Artisan stone-baked pizza topped with premium A5 Japanese Wagyu beef, fresh mozzarella, slow-roasted tomatoes.
                        </p>
<button className="w-full py-3.5 rounded-full bg-savor text-stone-900 font-semibold text-sm uppercase tracking-wide hover:bg-white transition-all duration-300 flex items-center justify-center gap-2">
                            Add to Order
                            <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
</div>

<div className="reveal delay-300 group relative glass-card rounded-3xl p-3 transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl relative bg-stone-800">
<img alt="Lobster Ravioli" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1672636402078-4b957a572e4e?w=1600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
<span className="text-xs font-bold uppercase tracking-wide text-white">Seafood</span>
</div>
<div className="absolute bottom-4 right-4 bg-savor text-stone-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            GHS 450.00
                        </div>
</div>
<div className="p-4 pt-6">
<h3 className="text-3xl font-serif font-medium text-cream leading-none mb-3">Lobster Ravioli</h3>
<p className="text-stone-400 text-sm font-normal leading-relaxed mb-6 line-clamp-2">
                            Handcrafted ravioli generously filled with fresh lobster meat, tossed in a delicate saffron cream sauce.
                        </p>
<button className="w-full py-3.5 rounded-full bg-stone-800/50 border border-stone-700 text-stone-200 font-medium text-sm uppercase tracking-wide hover:bg-savor hover:text-stone-900 hover:border-savor transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                            Add to Order
                            <svg className="group-hover/btn:rotate-90 transition-transform duration-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
</div>

<div className="reveal delay-100 group relative glass-card rounded-3xl p-3 transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl relative bg-stone-800">
<img alt="Pan Seared Sea Bass" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1460306855393-0410f61241c7?w=1600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
<span className="text-xs font-bold uppercase tracking-wide text-white">Fish</span>
</div>
<div className="absolute bottom-4 right-4 bg-savor text-stone-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            GHS 320.00
                        </div>
</div>
<div className="p-4 pt-6">
<h3 className="text-3xl font-serif font-medium text-cream leading-none mb-3">Pan-Seared Sea Bass</h3>
<p className="text-stone-400 text-sm font-normal leading-relaxed mb-6 line-clamp-2">
                            Crispy skin wild-caught sea bass served over a bed of roasted seasonal vegetables and lemon butter sauce.
                        </p>
<button className="w-full py-3.5 rounded-full bg-stone-800/50 border border-stone-700 text-stone-200 font-medium text-sm uppercase tracking-wide hover:bg-savor hover:text-stone-900 hover:border-savor transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                            Add to Order
                            <svg className="group-hover/btn:rotate-90 transition-transform duration-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
</div>

<div className="reveal delay-200 group relative glass-card rounded-3xl p-3 transition-all duration-500 hover:-translate-y-2 md:translate-y-8 shadow-[0_0_40px_rgba(0,0,0,0.2)]">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl relative bg-stone-800">
<img alt="Herb Crusted Lamb" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1674669520816-c3c5615dfe51?w=1600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
<span className="text-xs font-bold uppercase tracking-wide text-white">Meat</span>
</div>
<div className="absolute bottom-4 right-4 bg-savor text-stone-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            GHS 380.00
                        </div>
</div>
<div className="p-4 pt-6">
<h3 className="text-3xl font-serif font-medium text-cream leading-none mb-3">Herb Crusted Lamb</h3>
<p className="text-stone-400 text-sm font-normal leading-relaxed mb-6 line-clamp-2">
                            New Zealand lamb rack coated in fresh herbs and dijon mustard, roasted to perfection and served with mint jus.
                        </p>
<button className="w-full py-3.5 rounded-full bg-stone-800/50 border border-stone-700 text-stone-200 font-medium text-sm uppercase tracking-wide hover:bg-savor hover:text-stone-900 hover:border-savor transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                            Add to Order
                            <svg className="group-hover/btn:rotate-90 transition-transform duration-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
</div>

<div className="reveal delay-300 group relative glass-card rounded-3xl p-3 transition-all duration-500 hover:-translate-y-2">
<div className="aspect-[4/3] w-full overflow-hidden rounded-2xl relative bg-stone-800">
<img alt="Dark Chocolate Ganache" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1705472017435-7a820b01f36c?w=1600&amp;q=80"/>
<div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span>
<span className="text-xs font-bold uppercase tracking-wide text-white">Dessert</span>
</div>
<div className="absolute bottom-4 right-4 bg-savor text-stone-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            GHS 180.00
                        </div>
</div>
<div className="p-4 pt-6">
<h3 className="text-3xl font-serif font-medium text-cream leading-none mb-3">Dark Chocolate Tart</h3>
<p className="text-stone-400 text-sm font-normal leading-relaxed mb-6 line-clamp-2">
                            Rich 70% dark chocolate ganache in a crisp almond pastry shell, finished with sea salt and gold leaf.
                        </p>
<button className="w-full py-3.5 rounded-full bg-stone-800/50 border border-stone-700 text-stone-200 font-medium text-sm uppercase tracking-wide hover:bg-savor hover:text-stone-900 hover:border-savor transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                            Add to Order
                            <svg className="group-hover/btn:rotate-90 transition-transform duration-300" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#f9f5eb] text-[#2d1b14] px-6 relative z-10" id="why-madge">
<div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-20">
<div className="lg:w-2/5 lg:sticky lg:top-32 self-start h-fit mb-20 lg:mb-0">
<span className="text-xs font-bold text-stone-400 uppercase tracking-[0.3em] mb-6 block">The Experience</span>
<h2 className="text-6xl md:text-8xl tracking-tighter leading-[0.85] mb-8 font-serif">
                Why eat <br/>at <span className="italic text-stone-400">Madge</span>.
            </h2>
<p className="text-lg text-stone-600 max-w-sm leading-relaxed mb-10">
                A culinary journey isn't just about the plate; it's about the heritage, the heat, and the heart behind every bite.
            </p>
<div className="hidden lg:flex flex-col gap-4 border-l border-stone-200 ml-1">
<a className="nav-link pl-4 text-sm font-bold uppercase tracking-widest text-stone-900 transition-colors" href="#source">01. The Source</a>
<a className="nav-link pl-4 text-sm font-bold uppercase tracking-widest text-stone-300 transition-colors" href="#craft">02. The Craft</a>
<a className="nav-link pl-4 text-sm font-bold uppercase tracking-widest text-stone-300 transition-colors" href="#vibe">03. The Vibe</a>
</div>
</div>
<div className="lg:w-3/5 flex flex-col gap-48">
<div className="reveal-item opacity-0 translate-y-10 transition-all duration-1000" id="source">
<div className="relative w-full aspect-[4/5] mb-8 overflow-hidden rounded-sm shadow-2xl">
<img alt="Fresh organic produce" className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="max-w-md">
<h3 className="text-3xl font-serif mb-4">Real ingredients, real flavor.</h3>
<p className="text-stone-500 leading-relaxed italic font-serif text-lg">"We source from artisans who believe in the old ways."</p>
<p className="text-stone-500 mt-4">No shortcuts, just the pure essence of the land brought to your table. Every tomato, every herb, every drop of oil has a name and a story behind it.</p>
</div>
</div>
<div className="reveal-item opacity-0 translate-y-10 transition-all duration-1000" id="craft">
<div className="flex gap-4 mb-8">
<div className="w-1/2 aspect-square rounded-sm overflow-hidden translate-y-16 shadow-lg">
<img alt="Handmade details" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-1/2 aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
<img alt="Chef plating" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="max-w-md mt-24">
<h3 className="text-3xl font-serif mb-4">The Art of the Slow.</h3>
<p className="text-stone-500 leading-relaxed">
                        Our kitchen operates on the rhythm of the seasons. From 48-hour fermentations to hand-rolled pastas, we honor the time it takes to create perfection.
                    </p>
</div>
</div>
<div className="reveal-item opacity-0 translate-y-10 transition-all duration-1000 pb-32" id="vibe">
<div className="relative w-full aspect-video mb-8 overflow-hidden rounded-sm shadow-2xl">
<img alt="Moody restaurant atmosphere" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="max-w-md">
<h3 className="text-3xl font-serif mb-4">A Table for Memories.</h3>
<p className="text-stone-500 leading-relaxed">
                        Madge is designed to be an extension of your home. Dim lights, soft linens, and the hum of shared stories—this is where the journey finds its home.
                    </p>
</div>
</div>
</div>
</div>
</section>


<section className="relative py-32 w-full block overflow-hidden z-30 min-h-[500px] flex items-center" id="press-elegant">
<div className="absolute inset-0 z-0">
<img alt="Culinary Craft" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-950/85 mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-6 w-full">
<div className="text-center mb-24 reveal">
<h2 className="text-5xl md:text-8xl font-playfair italic tracking-tight text-cream">
                In the press
            </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24 items-center justify-items-center">
<div className="w-full max-w-[180px] md:max-w-[220px] flex justify-center reveal delay-100">
<img alt="Fast Company" className="w-full h-14 md:h-16 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-500 scale-110" src="https://www.vectorlogo.zone/logos/fastcompany/fastcompany-ar21.svg"/>
</div>
<div className="w-full max-w-[140px] md:max-w-[170px] flex justify-center reveal delay-200">
<img alt="Axios" className="w-full h-10 md:h-12 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-500 scale-110" src="https://www.vectorlogo.zone/logos/axios/axios-ar21.svg"/>
</div>
<div className="w-full max-w-[200px] md:max-w-[240px] flex justify-center reveal delay-300">
<img alt="Bloomberg" className="w-full h-10 md:h-12 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-500 scale-125" src="https://www.vectorlogo.zone/logos/bloomberg/bloomberg-ar21.svg"/>
</div>
<div className="w-full max-w-[220px] md:max-w-[280px] flex justify-center reveal delay-400">
<img alt="The Guardian" className="w-full h-14 md:h-16 object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-500 scale-115" src="https://www.vectorlogo.zone/logos/theguardian/theguardian-ar21.svg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden rounded-t-[3rem] -mt-10 relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.03)]" id="chef">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/2 relative reveal">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200 relative z-10">
<img alt="Chef Adrian" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&amp;w=2577&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg border border-stone-100">
<div className="flex items-center justify-between text-stone-900">
<div>
<h5 className="font-serif text-lg leading-none mb-1">Adrian Moretti</h5>
<span className="text-xs text-stone-500 uppercase tracking-wider">Executive Chef</span>
</div>
<svg className="text-stone-900" fill="none" height="30" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 reveal delay-200">
<div className="flex items-center gap-2 mb-4">
<span className="h-px w-8 bg-stone-400"></span>
<span className="text-xs uppercase tracking-[0.2em] font-bold text-stone-500">The Visionary</span>
</div>
<h2 className="text-5xl md:text-7xl tracking-tighter font-normal mb-8">Meet Adrian <span className="italic text-stone-400 serif">Moretti</span></h2>
<p className="text-stone-500 text-xl font-light leading-relaxed mb-6">
                        Chef Adrian Moretti, the culinary mastermind behind Madge, brings over two decades of experience from the world's most prestigious kitchens. 
                    </p>
<div className="mt-10">
<a className="inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white rounded-full text-sm font-bold uppercase tracking-wide hover:bg-stone-700 transition-colors w-full md:w-auto" href="#">
                            Read Full Bio
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-100 px-6 text-center" id="reservations">
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-4xl md:text-6xl tracking-tighter font-normal mb-6">Reserve Your Table</h2>
<p className="text-stone-500 text-xl font-light mb-10">
                Immerse yourself in an unforgettable dining experience. 
            </p>
<form className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-white p-2 rounded-[2rem] shadow-sm border border-stone-200 mb-8">
<div className="relative flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-stone-100">
<svg className="text-stone-400 mr-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<select className="w-full bg-transparent outline-none text-stone-600 font-medium cursor-pointer appearance-none">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>Large Party</option>
</select>
</div>
<div className="relative flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-stone-100">
<svg className="text-stone-400 mr-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<input className="w-full bg-transparent outline-none text-stone-600 font-medium" onfocus="(this.type='date')" placeholder="Date" type="text"/>
</div>
<button className="bg-stone-900 text-white px-6 py-4 rounded-3xl hover:bg-stone-800 transition-colors font-bold uppercase text-sm tracking-wide" type="button">
                    Check
                </button>
</form>
</div>
</section>

<footer className="bg-stone-950 text-stone-400 py-20 rounded-t-[3rem] -mt-10 relative z-30">
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="serif text-3xl text-white font-medium">Madge</span>
</a>
<p className="text-sm font-light leading-relaxed max-w-xs mb-6 text-stone-500">
                    A celebration of flavor, texture, and the joy of gathering.
                </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explore</h4>
<ul className="space-y-3 font-medium text-sm">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Menus</a></li>
<li><a className="hover:text-white transition-colors" href="#">Private Dining</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Hours</h4>
<ul className="space-y-3 font-medium text-sm">
<li className="flex justify-between"><span>Mon - Thu</span> <span>5pm - 10pm</span></li>
<li className="flex justify-between text-white"><span>Fri - Sat</span> <span>5pm - 11pm</span></li>
<li className="flex justify-between"><span>Sunday</span> <span>4pm - 9pm</span></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Find Us</h4>
<p className="text-sm font-medium leading-relaxed">
                     1024 Culinary Ave,
                     Metropolis, NY 10012
                 </p>
</div>
</div>
<div className="max-w-screen-2xl mx-auto px-6 mt-16 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-stone-600">
<p>© 2025 Madge Restaurant.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
