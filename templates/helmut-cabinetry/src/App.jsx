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



        // Initialize Lucide icons
        lucide.createIcons();
        
        // Simple scroll reveal effect
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('section').forEach(section => {
                section.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-8');
                observer.observe(section);
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
      

<header className="md:px-12 lg:px-16 flex flex-col-reverse md:flex-row md:items-end z-40 bg-white w-full border-zinc-100 border-b pt-8 pr-6 pb-6 pl-6 relative gap-x-6 gap-y-6 items-start justify-between">

<nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-600 hover:text-zinc-900 font-normal tracking-tight uppercase">
<a className="hover:text-zinc-900 transition-colors duration-300 tracking-widest font-geist" href="#" style={{}}>Kitchen</a>
<a className="hover:text-zinc-900 transition-colors duration-300 tracking-widest font-geist" href="#" style={{}}>Bath</a>
<a className="hover:text-zinc-900 transition-colors duration-300 tracking-widest font-geist" href="#" style={{}}>Living</a>
<a className="hover:text-zinc-900 transition-colors duration-300 tracking-widest font-geist" href="#" style={{}}>Projects</a>
<a className="hover:text-zinc-900 transition-colors duration-300 tracking-widest font-geist" href="#" style={{}}>Blog</a>
</nav>

<div className="self-start md:self-end md:mb-0 mb-4">
<svg className="block w-[160px] h-[40px] text-zinc-900" fill="none" height="40" viewbox="0 0 160 40" width="160" xmlns="http://www.w3.org/2000/svg">
<text className="font-geist" fill="currentColor" fontFamily="'Instrument Serif', serif" fontSize="42" font-weight="400" letter-spacing="-1.5" style={{}} text-anchor="end" x="100%" y="80%">Helmut</text>
</svg>
</div>
</header>

<main className="w-full">

<div className="md:px-12 lg:px-16 pt-16 pr-6 pb-12 pl-6">
<div className="max-w-screen-xl mb-16">
<h1 className="md:text-6xl lg:text-7xl leading-[1] text-5xl font-normal italic text-zinc-900 tracking-tighter font-serif-display mb-8 font-geist" style={{}}>
<span className="not-italic font-geist" style={{}}>World Class</span> <br/> Cabinetry.
                </h1>
<div className="max-w-2xl space-y-3">
<p className="md:text-xl text-lg font-light text-zinc-500 leading-relaxed font-geist" style={{}}>
                        Bespoke cabinetry designed in South Dakota. We bridge the gap between traditional craftsmanship and modern living spaces.
                    </p>
</div>

<div className="mt-10">
<a className="inline-flex items-center gap-2 hover:border-zinc-900 transition-all duration-300 uppercase text-sm font-medium text-zinc-900 tracking-wide font-geist border-zinc-300 border-b pb-1" href="#">Get started with an estimate</a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-2 w-full h-[70vh] min-h-[500px]">

<div className="lg:col-span-5 w-full h-full relative overflow-hidden group bg-zinc-50">
<img alt="Minimalist Kitchen Detail" className="object-center group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[10%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93816515-318c-4330-a74c-01f3e2d1814e_1600w.jpg"/>
</div>

<div className="lg:col-span-7 w-full h-full relative overflow-hidden group bg-zinc-50">
<img alt="Loft Kitchen Interior" className="object-center group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[0%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1af2d6a3-b894-432e-9d94-8854536e3758_1600w.jpg"/>
</div>
</div>
</div>

<section className="md:px-12 lg:px-16 transition-all duration-1000 border-zinc-100 border-t pt-24 pr-6 pb-24 pl-6 opacity-0 translate-y-8">
<div className="flex flex-col md:flex-row mb-12 items-end justify-between">
<h2 className="md:text-5xl text-4xl text-zinc-900 tracking-tight font-serif-display font-geist" style={{}}>Curated Spaces</h2>
<a className="hidden md:block text-sm text-zinc-500 hover:text-zinc-900 transition-colors underline decoration-zinc-300 underline-offset-4 font-geist" href="#" style={{}}>View all rooms</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">

<a className="group block" href="#">
<div className="aspect-[4/5] overflow-hidden bg-zinc-100 mb-6 relative">
<img alt="The Kitchen" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/53042bd8-c3e7-4fed-867e-379dd156b574_800w.jpg" style={{}}/>
</div>
<h3 className="text-2xl font-serif-display text-zinc-900 mb-2 font-geist" style={{}}>The Kitchen</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-geist" style={{}}>Functional elegance for the heart of the home.</p>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] overflow-hidden bg-zinc-100 mb-6 relative">
<img alt="The Bath" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f69f650-fe6e-4cc2-bb4f-e57e9b4432ae_800w.jpg" style={{}}/>
</div>
<h3 className="text-2xl font-serif-display text-zinc-900 mb-2 font-geist" style={{}}>The Bath</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-geist" style={{}}>Serene sanctuaries crafted with stone and wood.</p>
</a>

<a className="group block" href="#">
<div className="aspect-[4/5] overflow-hidden bg-zinc-100 mb-6 relative">
<img alt="Living &amp; Dressing" className="group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d11916d-52b7-447d-893f-0470c420835d_800w.jpg"/>
</div>
<h3 className="text-2xl text-zinc-900 font-serif-display mb-2 font-geist" style={{}}>Laundry &amp; Closets</h3>
<p className="leading-relaxed text-sm text-zinc-500 font-geist" style={{}}>Organized luxury for your wardrobe and lounge.</p>
</a>
</div>
<div className="mt-12 md:hidden">
<a className="block text-center text-sm text-zinc-900 border border-zinc-200 py-3 uppercase tracking-widest font-geist" href="#" style={{}}>View all rooms</a>
</div>
</section>

<section className="md:px-12 lg:px-16 transition-all duration-1000 bg-zinc-50 pt-24 pr-6 pb-24 pl-6 opacity-0 translate-y-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-center">
<div className="order-2 lg:order-1">
<span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-6 block font-geist" style={{}}>Our Philosophy</span>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl text-zinc-900 font-serif-display mb-8 font-geist" style={{}}>
                        Design that feels  <i className="text-zinc-600 font-geist" style={{}}>like home.</i>
</h2>
<p className="leading-relaxed text-lg font-light text-zinc-600 max-w-md mb-8 font-geist" style={{}}>
                        We believe that cabinetry is the architecture of daily life. Every drawer, hinge, and surface is considered to ensure it serves a purpose while elevating the aesthetic of your space.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-zinc-700 text-sm font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-zinc-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Sustainably sourced timber
                        </li>
<li className="flex items-center gap-3 text-zinc-700 text-sm font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-zinc-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Hand-finished in South Dakota
                        </li>
<li className="flex items-center gap-3 text-zinc-700 text-sm font-geist" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-zinc-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Lifetime hardware warranty
                        </li>
</ul>
<a className="inline-block bg-zinc-900 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-zinc-800 transition-colors font-geist" href="#" style={{}}>
                        Read our story
                    </a>
</div>
<div className="order-1 lg:order-2 relative aspect-square lg:aspect-[4/5]">
<img alt="Craftsmanship" className="grayscale-[20%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bb43d64-b04e-46a2-9748-860020c9958f_1600w.jpg" style={{}}/>
</div>
</div>
</section>

<section className="py-24 md:px-12 lg:px-16 px-6 border-t border-zinc-200 transition-all duration-1000 opacity-0 translate-y-8">
<div className="max-w-screen-xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="flex flex-col items-start space-y-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-2">
<svg className="lucide lucide-pencil-ruler w-5 h-5 text-zinc-700" data-lucide="pencil-ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path><path d="m8 6 2-2"></path><path d="m18 16 2-2"></path><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</div>
<h3 className="text-xl font-serif-display text-zinc-900 font-geist" style={{}}>Tailored Design</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-geist" style={{}}>
                            Our designers work closely with you to create a layout that maximizes both utility and beauty, specific to your home's architecture.
                        </p>
</div>

<div className="flex flex-col items-start space-y-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-2">
<svg className="lucide lucide-hammer w-5 h-5 text-zinc-700" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<h3 className="text-xl font-serif-display text-zinc-900 font-geist" style={{}}>Precision Build</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-geist" style={{}}>
                            Crafted in our dedicated workshop using a blend of modern CNC technology and traditional hand-tool techniques.
                        </p>
</div>

<div className="flex flex-col items-start space-y-4">
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center mb-2">
<svg className="lucide lucide-truck w-5 h-5 text-zinc-700" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<h3 className="text-xl font-serif-display text-zinc-900 font-geist" style={{}}>White Glove Delivery</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-geist" style={{}}>
                            We handle logistics and installation to ensure the final fit is millimeter-perfect, respecting your home throughout the process.
                        </p>
</div>
</div>
</div>
</section>

<section className="relative w-full h-[60vh] overflow-hidden transition-all duration-1000 opacity-0 translate-y-8">
<img alt="Lifestyle" className="font-geist w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e683d9f9-e6fc-4039-8248-9d3fc96cb65a_3840w.jpg"/>
<div className="flex text-center bg-black/30 pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-6xl font-serif-display text-white mb-6 font-geist" style={{}}>The Soul of the Home
        </h2>
<a className="inline-block border border-white/50 text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-zinc-900 transition-all duration-300 backdrop-blur-sm font-geist" href="#" style={{}}>
            Start your project
        </a>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-zinc-100 pt-20 pb-10 md:px-12 lg:px-16 px-6">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">

<div className="lg:col-span-2 pr-8">
<a className="block mb-6 text-2xl font-serif-display text-zinc-900 font-geist" href="#" style={{}}>Helmut</a>
<p className="text-sm text-zinc-500 leading-relaxed mb-8 max-w-xs font-geist" style={{}}>
                     Elevating everyday rituals through exceptional cabinetry and thoughtful design. Based in South Dakota, serving the world.
                 </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="pinterest"></i></a>
</div>
</div>

<div className="">
<h4 className="text-xs font-semibold tracking-widest uppercase text-zinc-900 mb-6 font-geist" style={{}}>Explore</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-geist">
<li className=""><a className="hover:text-zinc-900 transition-colors font-geist" href="#" style={{}}>Kitchens</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors font-geist" href="#" style={{}}>Bathrooms</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors font-geist" href="#" style={{}}>Living Spaces</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-semibold tracking-widest uppercase text-zinc-900 mb-6 font-geist" style={{}}>Company</h4>
<ul className="space-y-4 text-sm text-zinc-500 font-geist">
<li className=""><a className="hover:text-zinc-900 transition-colors font-geist" href="#" style={{}}>About Us</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors font-geist" href="#" style={{}}>Craftsmanship</a></li>
<li><a className="hover:text-zinc-900 transition-colors font-geist" href="#" style={{}}>Sustainability</a></li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-xs font-semibold tracking-widest uppercase text-zinc-900 mb-6 font-geist" style={{}}>Newsletter</h4>
<p className="text-xs text-zinc-500 mb-4 font-geist" style={{}}>Design inspiration and news from our workshop.</p>
<form className="flex flex-col gap-2">
<input className="w-full bg-zinc-50 border border-zinc-200 px-4 py-2 text-sm focus:outline-none focus:border-zinc-400 font-geist placeholder:text-zinc-400" placeholder="Email address" type="email"/>
<button className="w-full bg-zinc-900 text-white px-4 py-2 text-sm hover:bg-zinc-800 transition-colors uppercase tracking-wider text-xs font-geist" style={{}} type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-zinc-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-400 font-geist">
<p className="font-geist" style={{}}>© 2024 Helmut Cabinetry. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-600 font-geist" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-zinc-600 font-geist" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</footer>

<div className="fixed bottom-8 right-8 z-50">
<button className="bg-white border border-zinc-200 hover:border-zinc-900 text-zinc-900 w-12 h-12 flex items-center justify-center transition-all duration-300 shadow-lg shadow-zinc-200/50 rounded-full">
<svg className="lucide lucide-arrow-up w-5 h-5" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>


    </>
  );
}
