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
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
900: '#1c1917',
},
amber: {
800: '#92400e',
900: '#78350f',
},
},
letterSpacing: {
tighter: '-0.05em',
tight: '-0.025em',
widest: '0.25em',
},
}
}
}



        // Intersection Observer for Fade Up Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-text');
            elements.forEach(el => observer.observe(el));

            // Parallax Effect for Hero Image
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                const parallaxBg = document.querySelector('.parallax-bg img');
                if (parallaxBg) {
                    parallaxBg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/359765c0-a68b-475b-a4dc-ae4ce51b78db_3840w.jpg?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>



<div className="noise-overlay"></div>

<nav className="fixed z-40 md:px-12 md:py-8 flex text-stone-200 mix-blend-difference w-full pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<div className="uppercase text-sm font-medium tracking-widest">Renascentia</div>
<div className="hidden md:flex gap-8 text-xs font-light tracking-wide gap-x-8 gap-y-8">
<a className="hover:opacity-70 transition-opacity" href="#">Philosophy</a>
<a className="hover:opacity-70 transition-opacity" href="#">Collection</a>
<a className="hover:opacity-70 transition-opacity" href="#">Science</a>
</div>
<button className="md:hidden">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
<div className="hidden md:block text-xs font-light tracking-wide">Cart (0)</div>
</nav>

<header className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-stone-900">

<div className="absolute inset-0 z-0 parallax-bg">
<img alt="Renascentia Model" className="w-full h-full object-cover opacity-90 scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/359765c0-a68b-475b-a4dc-ae4ce51b78db_3840w.jpg?w=800&amp;q=80" style={{transformOrigin: 'center 30%', transform: 'translateY(0px) scale(1.1)'}}/>
</div>

<div className="z-10 bg-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-20 flex flex-col text-center max-w-4xl pr-6 pl-6 relative items-center">
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] reveal-text text-5xl font-normal text-white tracking-tighter font-serif mb-6">The Science of <br/> <span className="font-light italic opacity-90" style={{}}>Rebirth</span>.</h1>
<p className="md:text-base leading-relaxed reveal-text text-sm font-light text-stone-200 tracking-wide max-w-lg mb-10 visible">
                Unlock the architectural integrity of your skin. Bio-identical formulas designed to reset your cellular clock, not just cover it.
            </p>
<a className="group reveal-text visible" href="#collection">
<button className="text-white border border-white/20 px-8 py-3 text-xs tracking-widest uppercase hover:scale-105 transition-transform duration-500 ease-out backdrop-blur-sm">
                    [ Begin the Ritual ]
                </button>
</a>
</div>
<div className="absolute bottom-8 right-8 z-20 hidden md:block reveal-text visible">
<p className="text-stone-300 text-[10px] tracking-widest uppercase opacity-70">
                Formulated in Zurich  Proven by Biology
            </p>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
<div className="bg-stone-100 flex flex-col justify-center p-12 md:p-24 lg:p-32 order-2 md:order-1">
<div className="max-w-md">
<h2 className="font-serif text-3xl md:text-4xl text-zinc-900 mb-8 tracking-tight reveal-text">
                    Time is not the enemy. <br/><span className="text-zinc-500 italic">Oxidation is.</span>
</h2>
<div className="w-12 h-[1px] bg-zinc-300 mb-8 reveal-text"></div>
<p className="text-zinc-600 text-sm leading-7 font-light mb-6 reveal-text">
                    Modern living is an assault on the skin barrier. Pollution, blue light, and stress fragment the collagen matrix, leading to a dull, tired complexion. Most skincare simply paints over the cracks.
                </p>
<p className="text-zinc-600 text-sm leading-7 font-light reveal-text">
                    At Renascentia, we believe your skin doesn't need to be covered. It needs to be reminded of how to function.
                </p>
</div>
</div>
<div className="relative h-[50vh] md:h-auto overflow-hidden order-1 md:order-2 bg-stone-200">
<img alt="Organic Stone Texture" className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 transition-transform duration-[2s] ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</section>

<section className="bg-white py-24 px-6 md:px-12 border-b border-stone-100">
<div className="max-w-6xl mx-auto">
<div className="mb-20 max-w-2xl">
<span className="text-[10px] tracking-widest uppercase text-zinc-400 mb-4 block reveal-text">Our Methodology</span>
<h2 className="font-serif text-3xl md:text-4xl text-zinc-900 mb-6 tracking-tight reveal-text">Bio-Mimicry: The Renascentia Method</h2>
<p className="text-zinc-500 text-sm font-light leading-relaxed reveal-text">
                    Our formulas are "bio-identical"—meaning they share the exact molecular structure of the lipids found in healthy, youthful skin. Your cells don’t fight our ingredients; they recognize them.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group border border-stone-200 bg-stone-50 p-10 hover:border-zinc-300 transition-colors duration-500 reveal-text">
<div className="mb-8 text-zinc-800">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="28" data-icon="lucide:flask-conical" data-width="28" height="28" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="font-serif text-xl mb-3 tracking-tight">The Catalyst</h3>
<p className="text-zinc-500 text-xs leading-6 font-light">
                        Rare botanical extracts engineered to trigger collagen synthesis at the dermal layer.
                    </p>
</div>

<div className="group border border-stone-200 bg-stone-50 p-10 hover:border-zinc-300 transition-colors duration-500 reveal-text">
<div className="mb-8 text-zinc-800">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="28" data-icon="lucide:shield-check" data-width="28" height="28" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 tracking-tight">The Shield</h3>
<p className="text-zinc-500 text-xs leading-6 font-light">
                        Advanced peptides that fortify the lipid barrier, preventing transepidermal water loss.
                    </p>
</div>

<div className="group border border-stone-200 bg-stone-50 p-10 hover:border-zinc-300 transition-colors duration-500 reveal-text">
<div className="mb-8 text-zinc-800">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="28" data-icon="lucide:sparkles" data-width="28" height="28" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
</div>
<h3 className="font-serif text-xl mb-3 tracking-tight">The Result</h3>
<p className="text-zinc-500 text-xs leading-6 font-light">
                        Skin that is visibly plumper, significantly calmer, and radically renewed from within.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-stone-50 py-32 px-6 md:px-12" id="collection">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-16 border-b border-zinc-200 pb-6 reveal-text">
<h2 className="font-serif text-3xl text-zinc-900 tracking-tight">The Essentials</h2>
<a className="text-xs uppercase tracking-widest text-zinc-500 hover:text-zinc-900 transition-colors" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">

<div className="group cursor-pointer reveal-text">
<div className="relative w-full aspect-[4/5] bg-stone-200 overflow-hidden mb-6">
<img alt="The Serum" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply"></div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg text-zinc-900">The Serum</h3>
<span className="text-xs font-medium text-zinc-600">$120</span>
</div>
<p className="text-xs text-zinc-500 mb-4 font-light">Cellular Awakening Concentrate</p>
<p className="text-[10px] text-zinc-400 mb-6 italic">"A morning command for your collagen."</p>
<button className="text-xs uppercase tracking-widest text-zinc-900 btn-underline pb-1 hover:text-zinc-700 transition-colors">
                        Shop Now
                    </button>
</div>

<div className="group cursor-pointer reveal-text">
<div className="relative w-full aspect-[4/5] bg-stone-200 overflow-hidden mb-6">
<img alt="The Cream" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&amp;w=1760&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply"></div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg text-zinc-900">The Cream</h3>
<span className="text-xs font-medium text-zinc-600">$95</span>
</div>
<p className="text-xs text-zinc-500 mb-4 font-light">Nightly Architecture Repair</p>
<p className="text-[10px] text-zinc-400 mb-6 italic">"Rebuild the barrier while you sleep."</p>
<button className="text-xs uppercase tracking-widest text-zinc-900 btn-underline pb-1 hover:text-zinc-700 transition-colors">
                        Shop Now
                    </button>
</div>

<div className="group cursor-pointer reveal-text">
<div className="relative w-full aspect-[4/5] bg-stone-200 overflow-hidden mb-6">
<img alt="The Essence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply"></div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="font-serif text-lg text-zinc-900">The Essence</h3>
<span className="text-xs font-medium text-zinc-600">$65</span>
</div>
<p className="text-xs text-zinc-500 mb-4 font-light">pH Balancing Nectar</p>
<p className="text-[10px] text-zinc-400 mb-6 italic">"The first breath for your skin."</p>
<button className="text-xs uppercase tracking-widest text-zinc-900 btn-underline pb-1 hover:text-zinc-700 transition-colors">
                        Shop Now
                    </button>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900 text-stone-100 py-32 px-6 md:px-12 flex flex-col items-center text-center">
<div className="max-w-3xl reveal-text">
<svg aria-hidden="true" className="iconify text-stone-600 mx-auto mb-10 iconify--lucide" data-height="32" data-icon="lucide:quote" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
<blockquote className="font-serif text-2xl md:text-3xl font-light leading-snug tracking-tight mb-10">
                "I’ve tried everything from La Mer to Augustinus Bader. Renascentia is the first time I felt my skin actually change texture, rather than just feeling moisturized."
            </blockquote>
</div>
<div className="w-16 h-[1px] bg-zinc-800 my-16 reveal-text"></div>
<div className="max-w-3xl reveal-text">
<blockquote className="font-serif text-2xl md:text-3xl font-light leading-snug tracking-tight mb-10">
                "Clinical efficacy wrapped in an aesthetic masterpiece. It looks as good on my shelf as it feels on my face."
            </blockquote>
</div>
</section>

<footer className="bg-stone-100 pt-24 pb-12 px-6 md:px-12 border-t border-stone-200">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
<div className="max-w-sm reveal-text">
<h4 className="font-serif text-xl mb-4 text-zinc-900">Return to your best self.</h4>
<p className="text-zinc-500 text-xs leading-relaxed mb-8 font-light">
                    Join the inner circle. Receive scientific insights, early access to small-batch releases, and guidance on the art of aging well.
                </p>
<form className="flex items-end gap-4 w-full border-b border-zinc-300 pb-2 focus-within:border-zinc-800 transition-colors duration-300">
<input className="bg-transparent w-full text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none font-light" placeholder="Email Address" type="email"/>
<button className="text-xs uppercase tracking-widest text-zinc-900 hover:text-amber-900 transition-colors whitespace-nowrap" type="button">
                        [ Join ]
                    </button>
</form>
</div>
<div className="flex gap-12 md:gap-24 reveal-text">
<div className="flex flex-col gap-3">
<span className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Brand</span>
<a className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors font-light" href="#">Manifesto</a>
<a className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors font-light" href="#">Ingredients</a>
<a className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors font-light" href="#">Clinical Data</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-[10px] uppercase tracking-widest text-zinc-400 mb-2">Connect</span>
<a className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors font-light" href="#">Instagram</a>
<a className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors font-light" href="#">Contact</a>
<a className="text-xs text-zinc-600 hover:text-zinc-900 transition-colors font-light" href="#">Stockists</a>
</div>
</div>
</div>
<div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-stone-200 flex justify-between items-center">
<div className="text-[10px] text-zinc-400 font-light">
                © 2024 Renascentia Zurich. All rights reserved.
            </div>
<div className="text-zinc-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:droplet" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
</div>
</footer>


    </>
  );
}
