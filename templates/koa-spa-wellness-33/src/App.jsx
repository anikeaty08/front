import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Scroll Reveal Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: Stop observing once revealed
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Parallax Effect for big images
        window.addEventListener('scroll', () => {
            const parallaxImages = document.querySelectorAll('.parallax-img');
            parallaxImages.forEach(img => {
                const speed = 0.5;
                const yPos = -(window.scrollY * speed / 10);
                img.style.transform = `translateY(${yPos}px) scale(1.1)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-stone-50/80 backdrop-blur-md border-b border-transparent" id="navbar">
<div className="max-w-[1400px] mx-auto px-6 py-6 flex justify-between items-center">
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#">About</a>
<a className="hover:text-stone-900 transition-colors" href="#">Treatments</a>
<a className="hover:text-stone-900 transition-colors" href="#">Location</a>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center leading-none group cursor-pointer">
<span className="block font-serif text-3xl tracking-tight group-hover:scale-105 transition-transform duration-500">Koa</span>
<span className="block font-serif text-3xl tracking-tight group-hover:scale-105 transition-transform duration-500 delay-75">Spa</span>
</div>
<div>
<button className="border border-stone-800 px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-stone-800 hover:text-white transition-all duration-300 rounded-sm">
                    Book Your Moment of Calm
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

<div className="absolute top-1/3 left-0 w-full h-96 bg-slate-200/60 -z-10 reveal"></div>
<div className="max-w-[1400px] mx-auto px-6 relative">
<div className="flex flex-col items-center justify-center">

<div className="relative z-0 mt-12 w-full max-w-md md:max-w-lg aspect-[3/4] group">
<div className="w-full h-full overflow-hidden rounded-t-[10rem] shadow-2xl transition-transform duration-1000 ease-out group-hover:scale-[1.02]">
<img alt="Spa View" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="absolute top-1/4 w-full text-center z-10 pointer-events-none mix-blend-multiply">
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-stone-900 reveal delay-200">
                        Where the ocean <br/>
<span className="italic font-light">slows time.</span>
</h1>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 max-w-4xl mx-auto px-6 text-center">
<h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-tight text-stone-800 reveal">
            Inspired by the spirit of Hawaii, <br/>
            we honor the art of <span className="text-stone-400 font-light italic">presence, <br/> stillness, warmth, and nature</span>
</h2>
</section>

<section className="w-full reveal">
<div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
<img alt="Relaxed face in sun" className="w-full h-full object-cover object-center parallax-img" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</section>

<section className="py-24 max-w-[1400px] mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 md:gap-24">

<div className="flex gap-6 items-start reveal">
<div className="shrink-0 w-12 h-12 rounded-full border border-slate-300 bg-slate-100 flex items-center justify-center text-slate-500 font-serif italic text-lg">
                    ks
                </div>
<div>
<p className="text-lg text-stone-600 leading-relaxed">
                        Koa Spa was born from a simple belief — that true wellness begins with slowing down. Nestled in the heart of Waikiki, we offer a space where the rush of everyday life fades into the background. Our treatments are designed to help you reconnect with your body and mind through the art of touch, guided by care, warmth, and intention.
                    </p>
</div>
</div>

<div className="flex gap-6 items-start reveal delay-100">
<div className="shrink-0 w-12 h-12 rounded-full border border-rose-200 bg-rose-50 flex items-center justify-center text-rose-400 font-serif italic text-lg">
                    §
                </div>
<div>
<p className="text-lg text-stone-600 leading-relaxed">
                        Every detail at Koa Spa — from our natural materials and gentle color palette to the rhythm of each session — reflects Hawaii's serene spirit. Here, quality and care come first. We don't just offer massages; we create moments of renewal that leave you deeply relaxed, refreshed, and in harmony with yourself.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-[1400px] mx-auto px-6">
<h2 className="font-serif text-5xl md:text-6xl text-center mb-20 tracking-tight reveal">Signature Treatments</h2>
<div className="grid md:grid-cols-3 gap-8 md:gap-12">

<div className="group cursor-pointer reveal hover:-translate-y-2 transition-transform duration-500">
<div className="aspect-[3/3.5] overflow-hidden rounded-t-[10rem] mb-8 relative">
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500 z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl tracking-tight mb-3">HAWAIIAN LOMI LOMI</h3>
<p className="text-stone-500 text-sm mb-6 max-w-xs mx-auto">An ancient Hawaiian massage technique using rhythmic and flowing strokes</p>
<button className="border border-stone-300 px-6 py-2 text-xs uppercase tracking-widest hover:border-stone-800 transition-colors">Book Massage</button>
</div>
</div>

<div className="group cursor-pointer reveal delay-100 hover:-translate-y-2 transition-transform duration-500">
<div className="aspect-[3/3.5] overflow-hidden rounded-t-[10rem] mb-8 relative">
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500 z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl tracking-tight mb-3">HOT STONE THERAPY</h3>
<p className="text-stone-500 text-sm mb-6 max-w-xs mx-auto">Smooth, heated stones placed on key points to melt away tension and stress</p>
<button className="border border-stone-300 px-6 py-2 text-xs uppercase tracking-widest hover:border-stone-800 transition-colors">Book Massage</button>
</div>
</div>

<div className="group cursor-pointer reveal delay-200 hover:-translate-y-2 transition-transform duration-500">
<div className="aspect-[3/3.5] overflow-hidden rounded-t-[10rem] mb-8 relative">
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/0 transition-colors duration-500 z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-center">
<h3 className="font-serif text-2xl tracking-tight mb-3">DEEP TISSUE RELEASE</h3>
<p className="text-stone-500 text-sm mb-6 max-w-xs mx-auto">Targeted pressure to release chronic muscle tension and restore mobility</p>
<button className="border border-stone-300 px-6 py-2 text-xs uppercase tracking-widest hover:border-stone-800 transition-colors">Book Massage</button>
</div>
</div>
</div>

<div className="flex justify-center gap-3 mt-16">
<div className="w-2 h-2 rounded-full bg-stone-800"></div>
<div className="w-2 h-2 rounded-full bg-stone-300"></div>
<div className="w-2 h-2 rounded-full bg-stone-300"></div>
<div className="w-2 h-2 rounded-full bg-stone-300"></div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6">
<h2 className="font-serif text-7xl md:text-9xl tracking-tighter mb-16 reveal">Step into calm.</h2>
<div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

<div className="lg:col-span-4 space-y-8 sticky top-32 reveal">
<p className="text-lg text-stone-600 leading-relaxed">
                        The moment you enter Koa Spa, time slows. The air carries a hint of ocean breeze and gentle notes of essential oils. Soft textures, warm light, and natural materials create a space that feels effortlessly grounding, designed to ease your senses even before your treatment begins.
                    </p>
<p className="text-lg text-stone-600 leading-relaxed">
                        Every detail is intentional. The sound of water, the quiet rhythm of movement, the simplicity of the space; each element invites you to let go. It's more than a spa visit; it's an experience of stillness, connection, and care that lingers long after you leave.
                    </p>
<div className="pt-4">
<button className="border border-stone-800 px-8 py-3 text-xs uppercase tracking-widest hover:bg-stone-800 hover:text-white transition-all duration-300">
                            Book Your Moment of Calm
                        </button>
</div>
</div>

<div className="lg:col-span-8 relative">
<div className="grid grid-cols-2 gap-8 items-end">

<div className="reveal delay-100">
<img className="w-full aspect-[3/4] object-cover rounded-t-[8rem]" src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-2 md:col-span-1 reveal delay-200">
<img className="w-full aspect-square md:aspect-[4/5] object-cover" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-2 mt-[-20%] z-10 relative reveal delay-300">
<img className="w-full h-80 md:h-96 object-cover border-8 border-stone-50" src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="w-full h-[500px] bg-slate-100 relative overflow-hidden group">

<img alt="Waikiki Map" className="w-full h-full object-cover object-center opacity-40 grayscale contrast-125" src="https://i.imgur.com/kS9e8yG.png"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:-translate-y-[calc(50%+10px)] transition-transform duration-300">
<div className="w-4 h-4 bg-stone-800 rounded-full animate-ping absolute"></div>
<div className="w-4 h-4 bg-stone-800 rounded-full border-2 border-white relative z-10"></div>
<div className="mt-2 bg-white px-3 py-1 text-xs font-semibold shadow-lg rounded-sm whitespace-nowrap">Kailua-Kona</div>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 mt-12">
<h2 className="font-serif text-4xl uppercase tracking-widest text-stone-800 mb-6">Find your calm in the heart of Waikiki.</h2>
<div className="max-w-xl">
<p className="text-lg text-stone-600 leading-relaxed">
                    Our studio is nestled just steps from the ocean — a peaceful retreat surrounded by the gentle rhythm of island life. Whether you're visiting Hawaii or call it home, we welcome you to slow down, breathe deeply, and let go.
                </p>
</div>
</div>
</section>

<footer className="bg-slate-200/50 py-20 mt-20 border-t border-stone-200">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">

<div className="flex gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#">About</a>
<a className="hover:text-stone-900 transition-colors" href="#">Treatments</a>
<a className="hover:text-stone-900 transition-colors" href="#">Location</a>
</div>

<div className="text-center leading-none">
<span className="block font-serif text-4xl tracking-tight text-stone-400">Koa</span>
<span className="block font-serif text-4xl tracking-tight text-stone-400">Spa</span>
</div>

<div>
<button className="border border-stone-800 px-6 py-2.5 text-xs uppercase tracking-widest bg-transparent hover:bg-stone-800 hover:text-white transition-all duration-300">
                    Book Your Moment of Calm
                </button>
</div>
</div>
<div className="text-center mt-20 text-stone-400 text-xs tracking-wide">
            Design &amp; Development By Into Place Design
        </div>
</footer>



    </>
  );
}
