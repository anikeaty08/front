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



        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
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
      


<nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-white drop-shadow-md bg-gradient-to-b from-black/20 to-transparent transition-all duration-300">
<a className="font-serif text-xl md:text-2xl italic tracking-tight font-medium" href="#">ArtbyAnuvaa</a>
<div className="hidden md:flex gap-8 text-xs font-semibold tracking-widest uppercase">
<a className="hover:text-neutral-200 transition-colors" href="#collection">Collection</a>
<a className="hover:text-neutral-200 transition-colors" href="#about">Artist</a>
<a className="hover:text-neutral-200 transition-colors" href="#commissions">Commissions</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-widest uppercase border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all" href="#commissions">
            Enquire
        </a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<header className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-black/30 z-10"></div>
<img alt="Textured Art by Anuvaa" className="w-full h-full object-cover object-center animate-ken-burns" src="https://static.wixstatic.com/media/c837a6_b095d72027a54154b8382b8fdbb8dcad~mv2.jpg"/>
</div>
<div className="relative z-20 text-center text-white px-6 reveal active">
<p className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-4 opacity-100">Bespoke Textured Art</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-8 leading-tight">
                Art designed<br/>
<span className="italic font-normal opacity-95">to belong.</span>
</h1>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
<a className="bg-white text-black px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-neutral-100 transition-colors shadow-lg" href="#collection">
                    View Collection
                </a>
<a className="text-white border-b-2 border-white pb-1 text-xs font-bold tracking-widest uppercase hover:text-neutral-200 hover:border-neutral-200 transition-colors shadow-sm" href="#commissions">
                    Commission a Piece
                </a>
</div>
</div>
<div className="absolute bottom-8 left-0 w-full flex justify-between px-6 md:px-12 text-white text-xs tracking-widest uppercase z-20 font-medium">
<span>Based in New Delhi</span>
<span className="animate-bounce">Scroll</span>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#FAFAFA]">
<div className="max-w-4xl mx-auto text-center reveal">
<p className="text-lg md:text-2xl font-serif italic text-neutral-400 mb-6">"Where each canvas is an invitation to feel."</p>
<p className="text-sm md:text-base font-light text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                We create bespoke, textured artworks designed to elevate space. From minimalist abstracts to deeply layered compositions, every piece is thoughtfully crafted to become a quiet statement — soulful, sophisticated, and timeless.
            </p>
</div>
</section>

<section className="px-4 md:px-12 pb-20" id="collection">
<div className="flex justify-between items-end mb-12 reveal">
<h2 className="text-3xl md:text-4xl font-serif text-neutral-900">The Collection</h2>
<div className="hidden md:flex gap-4">
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-900 border-b border-black cursor-pointer">All</span>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-black cursor-pointer transition-colors">Abstract</span>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-black cursor-pointer transition-colors">Realism</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

<article className="group cursor-pointer reveal">
<div className="img-container relative aspect-[4/5] bg-neutral-100 mb-4">
<img alt="Abstract Flow" className="w-full h-full object-cover img-zoom" src="https://static.wixstatic.com/media/c837a6_be6de0aeaeb5463fbb8b512d2ad7afa9~mv2.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Ethereal Motion</h3>
<p className="text-xs text-neutral-500 font-light mt-1">Acrylic &amp; Gold Leaf on Canvas</p>
</div>
</div>
</article>

<article className="group cursor-pointer reveal delay-100">
<div className="img-container relative aspect-[4/5] bg-neutral-100 mb-4">
<img alt="King of Jungle" className="w-full h-full object-cover img-zoom grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-neutral-900/90 text-white backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-medium">
                        Sold
                    </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">The Roar Within</h3>
<p className="text-xs text-neutral-500 font-light mt-1">Detailed Acrylic Realism</p>
</div>
</div>
</article>

<article className="group cursor-pointer reveal delay-200">
<div className="img-container relative aspect-[4/5] bg-neutral-100 mb-4">
<img alt="Krishna" className="w-full h-full object-cover img-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Divine Serenity</h3>
<p className="text-xs text-neutral-500 font-light mt-1">Mixed Media Portrait</p>
</div>
</div>
</article>

<article className="group cursor-pointer reveal">
<div className="img-container relative aspect-[4/5] bg-neutral-100 mb-4">
<img alt="Within the Lines" className="w-full h-full object-cover img-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        Commission
                    </div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Within The Lines</h3>
<p className="text-xs text-neutral-500 font-light mt-1">Texture Paste on Canvas</p>
</div>
</div>
</article>

<article className="group cursor-pointer reveal delay-100">
<div className="img-container relative aspect-[4/5] bg-neutral-100 mb-4">
<img alt="Custom Sneakers" className="w-full h-full object-cover img-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Wearable Art</h3>
<p className="text-xs text-neutral-500 font-light mt-1">Hand-painted Sneakers</p>
</div>
</div>
</article>

<article className="group cursor-pointer reveal delay-200">
<div className="img-container relative aspect-[4/5] bg-neutral-100 mb-4">
<img alt="Golden Silence" className="w-full h-full object-cover img-zoom" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Golden Silence</h3>
<p className="text-xs text-neutral-500 font-light mt-1">Contemporary Knife Art</p>
</div>
</div>
</article>

<article className="group cursor-pointer reveal">
<div className="img-container relative aspect-[4/5] bg-neutral-100 mb-4">

<img alt="Botanical Texture" className="w-full h-full object-cover img-zoom grayscale sepia-[.5]" src="https://static.wixstatic.com/media/c837a6_b095d72027a54154b8382b8fdbb8dcad~mv2.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Faded Botanicals</h3>
<p className="text-xs text-neutral-500 font-light mt-1">Plaster &amp; Acrylic</p>
</div>
</div>
</article>

<article className="group cursor-pointer reveal delay-100">
<div className="img-container relative aspect-[4/5] bg-neutral-100 mb-4">
<img alt="The Gaze" className="w-full h-full object-cover img-zoom scale-125 object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Amber Gaze</h3>
<p className="text-xs text-neutral-500 font-light mt-1">Wildlife Study</p>
</div>
</div>
</article>

<article className="group cursor-pointer reveal delay-200">
<div className="img-container relative aspect-[4/5] bg-neutral-900 mb-4 overflow-hidden">
<div className="w-full h-full bg-neutral-800 flex items-center justify-center text-neutral-600">
<img alt="Midnight" className="w-full h-full object-cover img-zoom opacity-50 mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg text-neutral-900 group-hover:underline decoration-neutral-300 underline-offset-4">Midnight Ripples</h3>
<p className="text-xs text-neutral-500 font-light mt-1">Textured Abstract</p>
</div>
</div>
</article>
</div>
<div className="mt-16 text-center">
<a className="inline-block border border-neutral-200 px-8 py-3 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all" href="#commissions">
                View Full Archive
            </a>
</div>
</section>

<section className="border-t border-neutral-200 overflow-hidden bg-white">

<div className="py-12 border-b border-neutral-100 relative">
<div className="marquee-container">
<div className="marquee-content">
<span className="text-6xl md:text-8xl font-serif text-neutral-100 uppercase tracking-tighter mx-4">Follow us on Instagram</span>
<span className="text-6xl md:text-8xl font-serif text-neutral-900 italic mx-4">@ArtbyAnuvaa</span>
<span className="text-6xl md:text-8xl font-serif text-neutral-100 uppercase tracking-tighter mx-4">Behind the scenes</span>
<span className="text-6xl md:text-8xl font-serif text-neutral-900 italic mx-4">@ArtbyAnuvaa</span>
<span className="text-6xl md:text-8xl font-serif text-neutral-100 uppercase tracking-tighter mx-4">Follow us on Instagram</span>
<span className="text-6xl md:text-8xl font-serif text-neutral-900 italic mx-4">@ArtbyAnuvaa</span>
</div>

<div aria-hidden="true" className="marquee-content">
<span className="text-6xl md:text-8xl font-serif text-neutral-100 uppercase tracking-tighter mx-4">Follow us on Instagram</span>
<span className="text-6xl md:text-8xl font-serif text-neutral-900 italic mx-4">@ArtbyAnuvaa</span>
<span className="text-6xl md:text-8xl font-serif text-neutral-100 uppercase tracking-tighter mx-4">Behind the scenes</span>
<span className="text-6xl md:text-8xl font-serif text-neutral-900 italic mx-4">@ArtbyAnuvaa</span>
<span className="text-6xl md:text-8xl font-serif text-neutral-100 uppercase tracking-tighter mx-4">Follow us on Instagram</span>
<span className="text-6xl md:text-8xl font-serif text-neutral-900 italic mx-4">@ArtbyAnuvaa</span>
</div>
</div>
</div>

<div className="py-16 text-center bg-neutral-50 px-6">
<p className="text-sm font-light text-neutral-500 mb-6 max-w-lg mx-auto">Join our community to see the process behind the paintings, latest commissions, and studio updates.</p>
<a className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-3 rounded-full text-xs font-semibold tracking-widest uppercase hover:bg-neutral-800 transition-colors" href="https://instagram.com/artbyanuvaa" target="_blank">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
                Follow on Instagram
            </a>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100" id="about">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 reveal">
<div className="img-container aspect-[4/5] bg-neutral-100">
<img alt="Anuvaa" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="order-1 md:order-2 reveal delay-100">
<span className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4 block">The Artist</span>
<h2 className="text-3xl md:text-5xl font-serif text-neutral-900 mb-8 leading-tight">Living the art<br/><i className="font-light">I once dreamed of.</i></h2>
<p className="text-sm font-light text-neutral-600 leading-relaxed mb-6">
                        From a wild vision to a masterpiece. My work is an exploration of texture, layers, and the silent stories that emerge when color meets canvas. 
                    </p>
<p className="text-sm font-light text-neutral-600 leading-relaxed mb-10">
                         Whether it's the regal gaze of a tiger or the abstract chaos of modern life, I strive to create pieces that don't just hang on a wall, but live within the home.
                    </p>
<img alt="Signature" className="h-12 opacity-50 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-neutral-900 text-neutral-50 text-center" id="commissions">
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-4xl md:text-6xl font-serif mb-6">Commission a Masterpiece</h2>
<p className="text-neutral-400 font-light mb-12 leading-relaxed">
                Looking for something specific? We specialize in creating bespoke artworks tailored to your interior design and personal aesthetic.
            </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center">
<a className="flex items-center justify-center gap-3 bg-white text-neutral-900 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-neutral-200 transition-colors" href="https://wa.me/919810360638" target="_blank">
<iconify-icon icon="logos:whatsapp-icon" width="16"></iconify-icon>
                    Chat on WhatsApp
                </a>
<a className="flex items-center justify-center gap-3 border border-neutral-700 text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors" href="mailto:artbyanuvaa@gmail.com">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    Email Us
                </a>
</div>
<p className="text-[10px] text-neutral-600 mt-8 tracking-wide uppercase">New Delhi, India • Worldwide Shipping</p>
</div>
</section>

<footer className="py-12 px-6 md:px-12 border-t border-neutral-200 bg-white">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<span className="font-serif text-lg font-medium">ArtbyAnuvaa</span>
<div className="flex gap-6">
<a className="text-neutral-400 hover:text-black transition-colors" href="https://instagram.com/artbyanuvaa" target="_blank">
<iconify-icon icon="mdi:instagram" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#">
<iconify-icon icon="mdi:facebook" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-black transition-colors" href="#">
<iconify-icon icon="mdi:pinterest" width="20"></iconify-icon>
</a>
</div>
<div className="text-[10px] text-neutral-400 font-medium tracking-widest uppercase text-center md:text-right">
                © 2025 ArtbyAnuvaa<br/>
<a className="hover:text-neutral-600" href="#">Privacy Policy</a>
</div>
</div>
</footer>


    </>
  );
}
