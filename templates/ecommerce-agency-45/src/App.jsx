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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('carouselTrack');
            const nextBtn = document.getElementById('nextBtn');
            const prevBtn = document.getElementById('prevBtn');

            if (track && nextBtn && prevBtn) {
                nextBtn.addEventListener('click', () => {
                    const cardWidth = track.firstElementChild.offsetWidth;
                    const gap = 24; // matches gap-6 (6 * 4px)
                    track.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
                });

                prevBtn.addEventListener('click', () => {
                    const cardWidth = track.firstElementChild.offsetWidth;
                    const gap = 24; 
                    track.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
                });
            }
        });
    


        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('carouselTrack');
            const nextBtn = document.getElementById('nextBtn');
            const prevBtn = document.getElementById('prevBtn');

            if (track && nextBtn && prevBtn) {
                nextBtn.addEventListener('click', () => {
                    const cardWidth = track.firstElementChild.offsetWidth;
                    const gap = 24; // matches gap-6 (6 * 4px)
                    track.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
                });

                prevBtn.addEventListener('click', () => {
                    const cardWidth = track.firstElementChild.offsetWidth;
                    const gap = 24; 
                    track.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
                });
            }
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
      

<header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex gap-3 items-center">
<img alt="InteractOne" className="h-10 w-auto object-contain" src="https://interactone.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/logo-web2x-trans-1.png"/>
</div>

<nav className="hidden lg:flex items-center gap-8">
<div className="flex items-center gap-1 cursor-pointer group">
<span className="text-[15px] font-medium text-slate-700 group-hover:text-[#b91c1c] transition-colors">Platforms | Solutions</span>
<iconify-icon className="text-slate-400 group-hover:text-[#b91c1c] transition-colors" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="flex items-center gap-1 cursor-pointer group">
<span className="text-[15px] font-medium text-slate-700 group-hover:text-[#b91c1c] transition-colors">Digital Marketing Services</span>
<iconify-icon className="text-slate-400 group-hover:text-[#b91c1c] transition-colors" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<a className="text-[15px] font-medium text-slate-700 hover:text-[#b91c1c] transition-colors" href="#">Our Work</a>
<a className="text-[15px] font-medium text-slate-700 hover:text-[#b91c1c] transition-colors" href="#">Blog</a>
<a className="text-[15px] font-medium text-slate-700 hover:text-[#b91c1c] transition-colors" href="#">About</a>
</nav>

<div className="hidden lg:block">
<button className="bg-[#b91c1c] hover:bg-[#991b1b] text-white px-6 py-2.5 text-sm font-medium tracking-wide uppercase shadow-sm hover:shadow-md transition-all transform active:scale-95 rounded-none">
                    Contact
                </button>
</div>

<button className="lg:hidden text-slate-700">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<main className="pt-20">
<section className="hero-bg min-h-[85vh] flex overflow-hidden relative items-center" style={{backgroundColor: '#383b44', backgroundImage: 'linear-gradient(to right, rgba(23, 25, 29, 0.98) 0%, rgba(23, 25, 29, 0.9) 45%, rgba(23, 25, 29, 0.2) 75%, rgba(23, 25, 29, 0) 100%), url(\'https: //interactone.com/wp-content/uploads/2026/02/young-asian-shopper.jpg\')', backgroundSize: 'cover', backgroundPosition: '0% 0%, calc(80% + 250px) center', backgroundRepeat: 'no-repeat'}}>

<div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'0.4\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}>
</div>
<div className="lg:py-24 z-10 w-full max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl space-y-8">
<div className="space-y-4">
<p className="uppercase text-xs font-medium text-gray-300 tracking-[0.15em]">Since 1998 – Elevating
                        eCommerce B2B &amp; B2C Brands</p>
<h1 className="lg:text-6xl leading-[1.1] text-5xl text-white tracking-tight">Strategy first.<br/> Building the future with AI.
                    </h1>

<div className="w-16 h-0.5 bg-[#b91c1c] mt-6 mb-8"></div>
</div>
<p className="lg:text-xl leading-relaxed text-lg font-light text-gray-300 max-w-xl">We work with brands
                    where performance, not promises, matters. <a className="text-white font-medium underline decoration-white/30 underline-offset-4 hover:decoration-white transition-colors" href="#">Learn more</a> about how we build with AI.</p>

<div className="flex flex-wrap gap-8 opacity-90 pt-8 gap-x-8 gap-y-8 items-center">

<div className="flex gap-2 text-white gap-x-2 gap-y-2 items-center">
<img alt="Shopify" className="h-8 w-auto object-contain" src="https://interactone.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/shopify-logo-white.png"/>
</div>

<div className="flex gap-2 text-white gap-x-2 gap-y-2 items-center">
<img alt="Magento" className="h-8 w-auto object-contain" src="https://interactone.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/magento-logo-white.png"/>
</div>

<div className="flex gap-2 text-white gap-x-2 gap-y-2 items-center">
<img alt="Google Adswords" className="h-8 w-auto object-contain" src="https://interactone.com/wp-content/uploads/2026/02/google-adwords-certified-professional-logo-trim-black-white.png"/>
</div>
</div>
</div>

<div></div>
</div>
</div>
</section>

<section className="z-20 bg-[#a51d22] relative">
<div className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

<div className="lg:col-span-4">
<h2 className="text-white text-3xl lg:text-4xl font-semibold leading-tight tracking-tight">
                            InteractOne by<br/>the Numbers
                        </h2>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

<div className="space-y-1">
<div className="lg:text-6xl text-5xl font-semibold text-white tracking-tight">28+</div>
<p className="text-xs uppercase tracking-widest text-red-200 font-medium">Years in Business</p>
</div>

<div className="space-y-1">
<div className="lg:text-6xl text-5xl font-semibold text-white tracking-tight">500+</div>
<p className="uppercase text-xs font-medium text-red-200 tracking-widest">Projects Completed</p>
</div>

<div className="space-y-1">
<div className="text-5xl lg:text-6xl text-white font-semibold tracking-tight">$1.4B</div>
<div className="flex flex-col">
<p className="text-xs uppercase tracking-widest text-red-200 font-medium">Billion in Annual Client</p>
<p className="text-xs uppercase tracking-widest text-red-200 font-medium">Merchant Revenue</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-gray-50 border-gray-200 border-b pt-20 pb-20">

<div className="text-center max-w-7xl mr-auto mb-16 ml-auto pr-6 pl-6">
<h2 className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight mb-8">
                    Trusted by over 250+ brands and organizations
                </h2>
<div className="h-0.5 w-16 bg-[#b91c1c] mx-auto"></div>
</div>

<div className="relative w-full">

<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

<div className="flex overflow-hidden">

<div className="flex min-w-full shrink-0 lg:gap-24 animate-scroll pt-2 pr-8 pb-2 pl-8 gap-x-16 gap-y-16 items-center justify-around">
<img alt="Putco" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/Sam-Villa.png?w=800&amp;q=80"/>
<img alt="Sam Villa" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/Solaray-Vitamins.png?w=800&amp;q=80"/>
<img alt="Shoe Sensation" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/Shoe-Sensation-2.png?w=800&amp;q=80"/>
<img alt="Solaray" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/Solaray-Vitamins.png?w=800&amp;q=80"/>
<img alt="Upper Deck" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/Upper-Deck.png?w=800&amp;q=80"/>
<img alt="Sporty's" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/sportys-1.png?w=800&amp;q=80"/>
</div>

<div aria-hidden="true" className="flex min-w-full shrink-0 lg:gap-24 animate-scroll pt-2 pr-8 pb-2 pl-8 gap-x-16 gap-y-16 items-center justify-around">
<img alt="Putco" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/Sam-Villa.png?w=800&amp;q=80"/>
<img alt="Sam Villa" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/Solaray-Vitamins.png?w=800&amp;q=80"/>
<img alt="Shoe Sensation" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/Shoe-Sensation-2.png?w=800&amp;q=80"/>
<img alt="Solaray" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/Solaray-Vitamins.png?w=800&amp;q=80"/>
<img alt="Upper Deck" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/Upper-Deck.png?w=800&amp;q=80"/>
<img alt="Sporty's" className="md:h-28 hover:opacity-100 transition-opacity opacity-90 w-auto h-24 object-contain" src="https://interactone.com/wp-content/uploads/sportys-1.png?w=800&amp;q=80"/>
</div>
</div>
</div>

<style>
                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }
                @keyframes scroll {
                    from { transform: translateX(0); }
                    to { transform: translateX(-100%); }
                }
                /* Pause on hover for better UX */
                .flex:hover .animate-scroll {
                    animation-play-state: paused;
                }
            </style>
</section><section className="bg-gray-50 py-24 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">
<h3 className="text-[#b91c1c] font-bold text-xs uppercase tracking-[0.2em] mb-4">Sound Familiar?</h3>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight font-sans">
                Challenges We Hear Every Day
            </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full rounded-none">
<svg aria-hidden="true" className="w-10 h-10 text-[#b91c1c] mb-6 flex-shrink-0" fill="currentColor" viewbox="0 0 24 24">
<path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"></path>
</svg>
<p className="text-slate-700 text-lg leading-relaxed font-medium">
                    "It feels like we’re stuck. We’re not shrinking, but we’re definitely not growing either."
                </p>
</div>

<div className="bg-white p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full rounded-none">
<svg aria-hidden="true" className="w-10 h-10 text-[#b91c1c] mb-6 flex-shrink-0" fill="currentColor" viewbox="0 0 24 24">
<path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"></path>
</svg>
<p className="text-slate-700 text-lg leading-relaxed font-medium">
                    "Competitors are moving faster digitally, and we’re playing catch-up."
                </p>
</div>

<div className="bg-white p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full rounded-none">
<svg aria-hidden="true" className="w-10 h-10 text-[#b91c1c] mb-6 flex-shrink-0" fill="currentColor" viewbox="0 0 24 24">
<path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"></path>
</svg>
<p className="text-slate-700 text-lg leading-relaxed font-medium">
                    "Amazon is eating our lunch."
                </p>
</div>

<div className="bg-white p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full rounded-none">
<svg aria-hidden="true" className="w-10 h-10 text-[#b91c1c] mb-6 flex-shrink-0" fill="currentColor" viewbox="0 0 24 24">
<path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"></path>
</svg>
<p className="text-slate-700 text-lg leading-relaxed font-medium">
                    "Our B2B portal is clunky and hard to use."
                </p>
</div>

<div className="bg-white p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full rounded-none">
<svg aria-hidden="true" className="w-10 h-10 text-[#b91c1c] mb-6 flex-shrink-0" fill="currentColor" viewbox="0 0 24 24">
<path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"></path>
</svg>
<p className="text-slate-700 text-lg leading-relaxed font-medium">
                    "We’re stuck with a legacy system that’s slowing us down."
                </p>
</div>

<div className="bg-white p-10 shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full rounded-none">
<svg aria-hidden="true" className="w-10 h-10 text-[#b91c1c] mb-6 flex-shrink-0" fill="currentColor" viewbox="0 0 24 24">
<path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z"></path>
</svg>
<p className="text-slate-700 text-lg leading-relaxed font-medium">
                    "We’re spending way too much time and money on patching and upgrading our website."
                </p>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-white pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">

<div className="relative min-h-[600px] lg:min-h-full h-full w-full">

<div className="absolute inset-0 overflow-hidden shadow-2xl rounded-none">
<img alt="Cincinnati Skyline and River" className="contrast-[1.1] filter w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1700241956176-82ec52cb2872?w=1600&amp;q=80"/>
</div>

<div className="absolute bottom-6 right-6 w-[85%] sm:w-80 bg-[#a51d22] p-8 sm:p-10 shadow-[0_20px_50px_rgba(165,29,34,0.3)] z-10 rounded-none">
<h3 className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">Since 1998</h3>
<p className="text-white/90 text-[15px] sm:text-base font-medium leading-snug">
                        Building Smarter, Stronger eCommerce Brands from Cincinnati.
                    </p>
</div>
</div>

<div className="flex flex-col justify-center">
<h2 className="md:text-4xl text-3xl font-bold text-slate-900 tracking-tight mb-6">Your trusted eCommerce partner.</h2>

<div className="h-1.5 w-24 bg-[#a51d22] mb-10 rounded-none"></div>
<div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
<p className="">
            We’re a senior-level team of developers, marketers, designers, and strategists based in Cincinnati, delivering <span className="font-medium text-[#a51d22] bg-red-50 px-1 rounded-none">white-glove</span> service you won’t find at most agencies. <span className="font-medium text-[#a51d22] bg-red-50 px-1 rounded-none">No offshore shortcuts</span>. No inflated promises. Just honest, enterprise-level work rooted in Midwestern values.
        </p>
<p className="">
            We drive sustainable growth by helping our clients stand out - because when customers are delighted, results follow. And when you need help, you’ll talk to <span className="font-medium text-[#a51d22] bg-red-50 px-1 rounded-none">real experts in the USA</span> - never a script, never a handoff.
        </p>
<p className="">
  From complex B2B integrations to scalable digital marketing, we make the hardest parts of eCommerce feel easy.
  <span className="font-medium text-[#a51d22] bg-red-50 pr-1 pl-1 rounded-none">Our clients stay with us for years </span>because
  we operate like an extension of their team.
</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 mt-14 pt-2">

<div className="flex flex-col items-start gap-4 group cursor-default">
<div className="text-[#a51d22]">
<svg className="lucide lucide-circle-check-big" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-xs font-bold text-slate-900 uppercase tracking-widest leading-normal">Brand<br/>Strategy</span>
</div>

<div className="flex flex-col items-start gap-4 group cursor-default">
<div className="text-[#a51d22]">
<svg className="lucide lucide-presentation" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
</div>
<span className="text-xs font-bold text-slate-900 uppercase tracking-widest leading-normal">Digital<br/>Marketing</span>
</div>

<div className="flex flex-col items-start gap-4 group cursor-default">
<div className="text-[#a51d22]">
<svg className="lucide lucide-file-text" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<span className="text-xs font-bold text-slate-900 uppercase tracking-widest leading-normal">Enterprise<br/>B2B</span>
</div>

<div className="flex flex-col items-start gap-4 group cursor-default">
<div className="text-[#a51d22]">
<svg className="lucide lucide-code-2" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<span className="text-xs font-bold text-slate-900 uppercase tracking-widest leading-normal">Development</span>
</div>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-gray-50 border-gray-100 border-t pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative overflow-hidden">

<div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none overflow-hidden">

<svg className="absolute -left-12 -bottom-24 h-[600px] w-[300px] text-emerald-900/5 transform -rotate-12" fill="none" viewbox="0 0 300 600" xmlns="http://www.w3.org/2000/svg">
<path d="M50 600C50 600 50 400 150 300C250 200 150 100 200 0" stroke="currentColor" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<path d="M150 300 Q 130 280 140 260 Q 160 250 170 280" fill="currentColor" opacity="0.6"></path>
<path d="M100 450 Q 80 430 90 410 Q 110 400 120 430" fill="currentColor" opacity="0.6"></path>
<path d="M200 150 Q 220 130 210 110 Q 190 100 180 130" fill="currentColor" opacity="0.6"></path>
</svg>

<svg className="absolute -right-20 top-0 h-[500px] w-[300px] text-emerald-900/5 transform rotate-180" fill="none" viewbox="0 0 300 600" xmlns="http://www.w3.org/2000/svg">
<path d="M50 600C50 600 50 400 150 300C250 200 150 100 200 0" stroke="currentColor" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M150 300 Q 130 280 140 260 Q 160 250 170 280" fill="currentColor" opacity="0.6"></path>
<path d="M200 150 Q 220 130 210 110 Q 190 100 180 130" fill="currentColor" opacity="0.6"></path>
</svg>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/10 to-transparent"></div>
</div>

<div className="max-w-3xl mx-auto text-center mb-20 relative z-10">
<h3 className="text-[#b91c1c] font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-2">
            Complete Lifecycle Support
        </h3>
<h2 className="md:text-5xl text-3xl font-semibold text-slate-900 tracking-tight font-serif mb-6 flex items-center justify-center gap-3">
            We Know How to Grow
            <svg className="lucide lucide-sprout text-emerald-600 mb-1" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M7 20h10"></path><path d="M10 20c5.5-2.5.8-6.4 3-10"></path><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path></svg>
</h2>
<p className="leading-relaxed text-lg font-light text-slate-600">
            From building world-class storefronts to replatforming complex data and driving revenue through paid and organic channels, we handle every stage of your eCommerce journey.
        </p>
</div>

<div className="grid md:grid-cols-3 gap-8 items-start relative z-10">

<div className="bg-white/80 backdrop-blur-sm p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200 hover:shadow-[0_8px_24px_rgba(16,185,129,0.1)] hover:border-emerald-500/30 transition-all duration-300 group h-full flex flex-col rounded-none">
<div className="flex justify-between items-center mb-6">
<h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">Make</h3>
<div className="w-14 h-14 bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300 rounded-none shrink-0 ml-4">
<svg className="lucide lucide-layers" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></svg>
</div>
</div>
<p className="text-slate-600 mb-8 leading-relaxed font-light">
                We design and engineer eCommerce platforms that perform under pressure. Every site is fast, intuitive, and structured to convert—today and as you grow. Our team specializes in <span className="font-medium text-slate-900">Shopify Plus</span> and <span className="font-medium text-slate-900">Magento (Adobe Commerce)</span>.
            </p>
<div className="mt-auto space-y-4">
<div className="w-full h-px bg-gradient-to-r from-gray-100 via-emerald-100 to-gray-100 mb-6"></div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Conversion-focused UI/UX design</span>
</li>
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="">Scalable front/back-end development</span>
</li>
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="">Ongoing maintenance &amp; support</span>
</li>
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Custom features &amp; integrations</span>
</li>
</ul>
</div>
</div>

<div className="bg-white/80 backdrop-blur-sm p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-200 hover:shadow-[0_8px_24px_rgba(16,185,129,0.1)] hover:border-emerald-500/30 transition-all duration-300 group h-full flex flex-col rounded-none">
<div className="flex justify-between items-center mb-6">
<h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">Migrate</h3>
<div className="w-14 h-14 bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300 rounded-none shrink-0 ml-4">
<svg className="lucide lucide-arrow-left-right" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path className="" d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
</div>
</div>
<p className="text-slate-600 mb-8 leading-relaxed font-light">
                When your current platform limits growth, we help you move forward—without disruption. We manage full-scale replatforming projects so your team can stay focused on running the business while we handle the technical heavy lifting.
            </p>
<div className="mt-auto space-y-4">
<div className="w-full h-px bg-gradient-to-r from-gray-100 via-emerald-100 to-gray-100 mb-6"></div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Secure data migration (Any Platform)</span>
</li>
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="">Preservation of SEO equity</span>
</li>
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Architecture built for scale</span>
</li>
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="">Minimal downtime transition</span>
</li>
</ul>
</div>
</div>

<div className="hover:shadow-[0_8px_24px_rgba(16,185,129,0.1)] hover:border-emerald-500/30 transition-all duration-300 group flex flex-col bg-white/80 backdrop-blur-sm h-full border-gray-200 border pt-8 pr-8 pb-8 pl-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] rounded-none">
<div className="flex justify-between items-center mb-6">
<h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">Market</h3>
<div className="w-14 h-14 bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300 rounded-none shrink-0 ml-4">
<svg className="lucide lucide-trending-up" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
</div>
<p className="text-slate-600 mb-8 leading-relaxed font-light">
                A great platform is only valuable if the right customers find it. We align organic and paid marketing strategies to drive qualified traffic, improve visibility, and turn demand into measurable revenue growth.
            </p>
<div className="mt-auto space-y-4">
<div className="w-full h-px bg-gradient-to-r from-gray-100 via-emerald-100 to-gray-100 mb-6"></div>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path className="" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="">Search Engine Optimization (SEO &amp; AEO)</span>
</li>
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span className="">Paid media management (PPC)</span>
</li>
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Email marketing &amp; lifecycle</span>
</li>
<li className="flex items-start gap-3 text-[15px] text-slate-700">
<svg className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<span>Amazon marketplace strategy</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-white border-gray-100 border-b pt-24 pb-24 relative">

<div className="absolute inset-0 pointer-events-none select-none z-0">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<svg className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 text-slate-200/80 opacity-60" fill="none" preserveaspectratio="none" viewbox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg">
<path d="M-100 300 C 200 300, 400 100, 720 300 C 1040 500, 1240 300, 1540 300" stroke="currentColor" stroke-dasharray="6 6" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>

<div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-red-50/50 blur-[100px] rounded-full"></div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="max-w-3xl mb-16">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">How we do it.</h2>
<p className="text-xl text-slate-600 font-light leading-relaxed">
                A proven process. A team you can trust. Results you can measure.
            </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 border border-gray-100 bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-red-100 transition-all duration-300 rounded-none relative">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight pr-4">Research</h3>
<div className="shrink-0">
<svg className="lucide lucide-search text-[#b91c1c] group-hover:scale-110 transition-transform duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
</div>
</div>
<p className="text-slate-600 leading-relaxed font-light">
                    We lead with research, testing, and strategy development designed to help our clients rise above the noise and get noticed.
                </p>
</div>

<div className="group p-8 border border-gray-100 bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-red-100 transition-all duration-300 rounded-none relative">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight pr-4">Certified Experts</h3>
<div className="shrink-0">
<svg className="lucide lucide-award text-[#b91c1c] group-hover:scale-110 transition-transform duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
</div>
</div>
<p className="text-slate-600 leading-relaxed font-light">
                    PMI certified project managers, Magento certifications, Shopify certifications/partnerships. Our team is stacked with specialists.
                </p>
</div>

<div className="group p-8 border border-gray-100 bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-red-100 transition-all duration-300 rounded-none relative">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight pr-4">White-Glove Service</h3>
<div className="shrink-0">
<svg className="lucide lucide-heart text-[#b91c1c] group-hover:scale-110 transition-transform duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path className="" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
</div>
<p className="text-slate-600 leading-relaxed font-light">
                    Expect fast response times, detailed updates, and a team that treats your business like their own.
                </p>
</div>

<div className="group p-8 border border-gray-100 bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-red-100 transition-all duration-300 rounded-none relative">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight pr-4">Regular Meetings</h3>
<div className="shrink-0">
<svg className="lucide lucide-users text-[#b91c1c] group-hover:scale-110 transition-transform duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
</div>
<p className="text-slate-600 leading-relaxed font-light">
                    Consistent face time with our team to keep initiatives moving and ensure alignment at every stage.
                </p>
</div>

<div className="group p-8 border border-gray-100 bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-red-100 transition-all duration-300 rounded-none relative">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight pr-4">On-Shore Talent</h3>
<div className="shrink-0">
<svg className="lucide lucide-map-pin text-[#b91c1c] group-hover:scale-110 transition-transform duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
<p className="text-slate-600 leading-relaxed font-light">
                    Based in the U.S., no outsourcing. You work directly with seasoned developers, marketers, and strategists.
                </p>
</div>

<div className="group p-8 border border-gray-100 bg-white hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-red-100 transition-all duration-300 rounded-none relative">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight pr-4">Custom Solutions</h3>
<div className="shrink-0">
<svg className="lucide lucide-hexagon text-[#b91c1c] group-hover:scale-110 transition-transform duration-300" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
<p className="text-slate-600 leading-relaxed font-light">
                    We thrive on complexity. High-SKU catalogs, custom integrations, or performance-heavy sites.
                </p>
</div>
</div>
</div>
</section><section className="w-full bg-slate-900 border-b border-gray-100 relative z-20">
<div className="grid grid-cols-1 md:grid-cols-3 w-full">

<div className="col-span-1 md:col-span-3 py-16 px-6 md:px-12 text-center border-b border-white/10">
<h2 className="md:text-5xl text-3xl font-bold text-white tracking-tight font-sans">A glimpse of our work.</h2>
<div className="h-1 w-20 bg-[#b91c1c] mx-auto mt-6 rounded-none"></div>
</div>

<a className="group block md:col-span-2 md:h-[385px] overflow-hidden h-[280px] relative" href="https://interactone.com/project/lancer-skincare-shopify-case-study/">

<div className="absolute inset-0 bg-gray-900">
<img alt="Lancer Skin Care Products" className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://lancerskincare.com/cdn/shop/files/Blog-Header-SkinBarrier.jpg"/>
</div>

<div className="transition-opacity duration-300 group-hover:opacity-60 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0">
</div>

<div className="absolute top-0 left-0 p-8 md:p-10 z-10 w-full">
<h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight drop-shadow-md">Lancer Skincare</h3>
<div className="h-1 w-12 bg-white/30 mt-4 rounded-none transition-all duration-300 group-hover:w-20 group-hover:bg-[#b91c1c]">
</div>
<p className="mt-4 text-white/90 font-medium text-xs uppercase tracking-widest opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
      Shopify Plus • Strategy</p>
</div>
</a>

<a className="group block md:col-span-1 md:h-[385px] overflow-hidden h-[280px] border-white/10 border-l relative" href="https://interactone.com/project/magento-case-study-sportys/">
<div className="absolute inset-0 bg-gray-900">
<img alt="Sporty's Wright Bros" className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://www.sportys.com//media/catalog/product/cache/aa1e99c7c52b59ff91c9edb49f6532be/5/5/5512-web-002.jpg?q=80&amp;w=1470&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="transition-opacity duration-300 group-hover:opacity-60 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="md:p-10 z-10 w-full pt-8 pr-8 pb-8 pl-8 absolute top-0 left-0">
<h3 className="md:text-2xl text-xl font-bold text-white tracking-tight drop-shadow-md">Sporty's</h3>
<div className="h-1 w-12 bg-white/30 mt-4 rounded-none transition-all duration-300 group-hover:w-20 group-hover:bg-[#b91c1c]">
</div>
<p className="uppercase transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-xs font-medium text-white/90 tracking-widest opacity-0 mt-4 translate-y-4">Enterprise B2C • Multi-Site</p>
</div>
</a>

<a className="group block md:col-span-1 md:h-[385px] overflow-hidden h-[280px] border-white/10 border-t relative" href="https://interactone.com/project/magento-case-study-acgbrands/">
<div className="absolute inset-0 bg-gray-900">
<img alt="ACG Brands Automotive" className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://www.acgbrands.com/en_US/media/corporate/home_nebo_image.jpg?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60">
</div>
<div className="md:p-10 z-10 w-full pt-8 pr-8 pb-8 pl-8 absolute top-0 left-0">
<h3 className="md:text-2xl text-xl font-bold text-white tracking-tight drop-shadow-md">ACG Brands</h3>
<div className="h-1 w-12 bg-white/30 mt-4 rounded-none transition-all duration-300 group-hover:w-20 group-hover:bg-[#b91c1c]">
</div>
<p className="uppercase transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-xs font-medium text-white/90 tracking-widest opacity-0 mt-4 translate-y-4">Enterprise B2B &amp; B2C • Multi-Site</p>
</div>
</a>

<a className="group block md:col-span-1 md:h-[385px] overflow-hidden h-[280px] border-white/10 border-t border-l relative" href="https://interactone.com/project/watsons/">
<div className="absolute inset-0 bg-gray-900">
<img alt="Watsons Home &amp; Patio" className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://www.watsons.com/media/wysiwyg/CLP_Spas_2.jpg?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60">
</div>
<div className="md:p-10 z-10 w-full pt-8 pr-8 pb-8 pl-8 absolute top-0 left-0">
<h3 className="text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-md">Watsons</h3>
<div className="h-1 w-12 bg-white/30 mt-4 rounded-none transition-all duration-300 group-hover:w-20 group-hover:bg-[#b91c1c]">
</div>
<p className="uppercase transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-xs font-medium text-white/90 tracking-widest opacity-0 mt-4 translate-y-4">B2C  •  Omni-channel</p>
</div>
</a>

<a className="group relative block md:col-span-1 h-[280px] md:h-[385px] overflow-hidden border-l border-t border-white/10" href="https://interactone.com/project/magento-case-study-seiko/">
<div className="absolute inset-0 bg-gray-900">
<img alt="Seiko Watches" className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://grandseikoboutique.us/cdn/shop/files/Grand_Seiko_Hi-Beat_36000_Automatic_Chronograph_SLGC001_KV.jpg?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="transition-opacity duration-300 group-hover:opacity-60 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute top-0 left-0 p-8 md:p-10 z-10 w-full">
<h3 className="text-xl md:text-2xl font-bold text-white tracking-tight drop-shadow-md">Seiko</h3>
<div className="h-1 w-12 bg-white/30 mt-4 rounded-none transition-all duration-300 group-hover:w-20 group-hover:bg-[#b91c1c]">
</div>
<p className="uppercase transform transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-xs font-medium text-white/90 tracking-widest opacity-0 mt-4 translate-y-4">B2C • Brand Experience</p>
</div>
</a>
</div>
</section><section aria-label="Client Testimonials" className="overflow-hidden group/carousel bg-gray-50 border-gray-200 border-b pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6">
<div className="max-w-3xl">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight mb-6">Here's what our clients say about us...</h2>
<div className="h-1.5 w-24 bg-[#b91c1c] rounded-none"></div>
</div>
<a className="group inline-flex items-center gap-2 text-[15px] font-medium text-[#b91c1c] hover:text-[#8a181c] transition-colors mb-2" href="https://interactone.com/testimonials/">
            View more
            <svg className="lucide lucide-arrow-right transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="relative">

<div className="absolute top-1/2 -left-4 -translate-y-1/2 z-20 hidden md:flex">
<button aria-label="Previous testimonial" className="w-12 h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center text-slate-700 hover:text-[#b91c1c] hover:border-red-100 transition-all duration-300 transform hover:scale-110 focus:outline-none rounded-none" id="prevBtn">
<svg className="lucide lucide-chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
</div>
<div className="absolute top-1/2 -right-4 -translate-y-1/2 z-20 hidden md:flex">
<button aria-label="Next testimonial" className="w-12 h-12 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 flex items-center justify-center text-slate-700 hover:text-[#b91c1c] hover:border-red-100 transition-all duration-300 transform hover:scale-110 focus:outline-none rounded-none" id="nextBtn">
<svg className="lucide lucide-chevron-right w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(185, 28, 28)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide [&amp;::-webkit-scrollbar]:hidden scroll-smooth -mx-6 md:mx-0 md:px-0 pr-6 pb-8 pl-6 gap-x-6 gap-y-6" id="carouselTrack" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="min-w-[85vw] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center">
<div className="hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col bg-white h-full border-gray-100 border rounded-none pt-8 pr-8 pb-8 pl-8 relative shadow-[0_2px_12px_rgba(0,0,0,0.04)]">

<div className="absolute top-8 right-8 text-red-50">
<svg className="opacity-100" fill="currentColor" height="48" stroke="none" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v-3zm10 0h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v-3z">
</path>
</svg>
</div>
<div className="mb-8">

<img alt="Sam Villa" className="h-10 w-auto object-contain mb-6 block" src="https://interactone.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2025/01/sam-villa-logo-sm.png?w=800&amp;q=80"/>
<p className="leading-relaxed text-lg font-light text-slate-600">“Thank you so much for our Magento migration. It
            was one of the most seamless software migrations I’ve experienced in my career. Now we have a beautiful site
            and are extremely happy with everything, I’m so happy our paths crossed.”</p>
</div>
<div className="flex gap-4 border-gray-100 border-t mt-auto pt-6 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm font-semibold text-slate-900">Petro Wood</div>
<div className="text-xs text-slate-500">CFO at Allvus LLC, dba Sam Villa</div>
</div>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center">
<div className="hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col bg-white h-full border-gray-100 border pt-8 pr-8 pb-8 pl-8 relative shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-none">
<div className="absolute top-8 right-8 text-red-50">
<svg className="" fill="currentColor" height="48" stroke="none" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v-3zm10 0h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v-3z"></path>
</svg>
</div>
<div className="mb-8">

<img alt="US Air Force Museum Foundation" className="h-10 w-auto object-contain mb-6 block" src="https://interactone.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2025/01/air-force-museum-foundation.png?w=800&amp;q=80"/>
<p className="leading-relaxed text-lg font-light text-slate-600">“InteractOne has been nothing short of absolutely
            exceptional to work with on our (new eCommerce website) project.”“InteractOne has been nothing short of
            absolutely exceptional to work with on our (new eCommerce website) project.”</p>
</div>
<div className="flex gap-4 border-gray-100 border-t mt-auto pt-6 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm font-semibold text-slate-900">John Flynn</div>
<div className="text-xs text-slate-500">eCommerce Specialist at US Air Force Museum Foundation</div>
</div>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center">
<div className="hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col bg-white h-full border-gray-100 border pt-8 pr-8 pb-8 pl-8 relative shadow-[0_2px_12px_rgba(0,0,0,0.04)] rounded-none">
<div className="absolute top-8 right-8 text-red-50">
<svg className="" fill="currentColor" height="48" stroke="none" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v-3zm10 0h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v-3z"></path></svg>
</div>
<div className="mb-8">

<img alt="Block Midland Group" className="h-10 w-auto object-contain mb-6 block" src="https://interactone.com/wp-content/uploads/2025/01/block-midland-grp-logo-sm.png"/>
<p className="leading-relaxed text-lg font-light text-slate-600">“I found Interactone after a terrible experience with the Web Developer who built and launched our Magento website. What a difference it makes to connect with a team of people that know what they are doing. I’ve been unable to give them a task they cannot handle..."</p>
</div>
<div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm font-semibold text-slate-900">Jerry Bergquist</div>
<div className="text-xs text-slate-500">Director of eCommerce at Block Midland, Inc (formerly Block and Company, Inc.)</div>
</div>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center">
<div className="bg-white p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 h-full flex flex-col relative rounded-none">
<div className="absolute top-8 right-8 text-red-50">
<svg fill="currentColor" height="48" stroke="none" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v-3zm10 0h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v-3z"></path></svg>
</div>
<div className="mb-8">

<img alt="Island Inn Sanibel" className="h-10 w-auto object-contain mb-6 block" src="https://interactone.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2025/01/islandinn-logo-sm.png?w=800&amp;q=80"/>
<p className="leading-relaxed text-lg font-light text-slate-600">“We have been working with the InteractOne team for over a decade now and I believe that speaks volumes. In the ever-evolving areas of eCommerce, website development and internet marketing, having a dedicated partner that can be relied upon to provide superior service...”</p>
</div>
<div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm font-semibold text-slate-900">Chris Davison</div>
<div className="text-xs text-slate-500">CEO, Island Inn Sanibel</div>
</div>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center">
<div className="hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col bg-white h-full border-gray-100 border rounded-none pt-8 pr-8 pb-8 pl-8 relative shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
<div className="absolute top-8 right-8 text-red-50">
<svg fill="currentColor" height="48" stroke="none" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v-3zm10 0h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4v-3z"></path></svg>
</div>
<div className="mb-8">

<img alt="Versa Valves" className="h-10 w-auto object-contain mb-6 block" src="https://interactone.com/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2025/01/versa-logo-sm.png?w=800&amp;q=80"/>
<p className="leading-relaxed text-lg font-light text-slate-600">“We had a great experience working with InteractOne to upgrade our Magento Adobe Commerce platform. They not only delivered outstanding results but also exceeded our expectations by completing the project on time and under budget..."</p>
</div>
<div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="">
<div className="text-sm font-semibold text-slate-900">Debra Purdy</div>
<div className="text-xs text-slate-500">Marketing Manager at Versa Valves</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-8 md:hidden">
<div className="w-2 h-2 bg-[#b91c1c] rounded-none"></div>
<div className="w-2 h-2 bg-gray-200 rounded-none"></div>
<div className="w-2 h-2 bg-gray-200 rounded-none"></div>
<div className="w-2 h-2 bg-gray-200 rounded-none"></div>
<div className="w-2 h-2 bg-gray-200 rounded-none"></div>
</div>
</div>


</div>


</section><section className="bg-[#7f1d1d] py-24 text-white border-t border-white/10 relative overflow-hidden">

<div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center">

<div className="lg:col-span-5 space-y-6">
<h3 className="text-red-100/90 font-bold text-xs uppercase tracking-[0.2em]">Industries We Serve</h3>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white">
                    From complex B2B integrations to scalable digital marketing, we make the hardest parts of eCommerce feel easy.
                </h2>
</div>

<div className="lg:col-span-7 w-full">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6">

<div className="flex items-center gap-4 group">
<div className="shrink-0 rounded-full border border-white/20 p-1 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-check-circle text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-lg font-medium text-white">Healthcare</span>
</div>

<div className="flex items-center gap-4 group">
<div className="shrink-0 rounded-full border border-white/20 p-1 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-check-circle text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-lg font-medium text-white">Hydraulics</span>
</div>

<div className="flex items-center gap-4 group">
<div className="shrink-0 rounded-full border border-white/20 p-1 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-check-circle text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-lg font-medium text-white">Beauty &amp; Wellness</span>
</div>

<div className="flex items-center gap-4 group">
<div className="shrink-0 rounded-full border border-white/20 p-1 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-check-circle text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-lg font-medium text-white">Manufacturing</span>
</div>

<div className="flex items-center gap-4 group">
<div className="shrink-0 rounded-full border border-white/20 p-1 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-check-circle text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-lg font-medium text-white">Apparel</span>
</div>

<div className="flex items-center gap-4 group">
<div className="shrink-0 rounded-full border border-white/20 p-1 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-check-circle text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-lg font-medium text-white">Home &amp; Furniture</span>
</div>

<div className="flex items-center gap-4 group">
<div className="shrink-0 rounded-full border border-white/20 p-1 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-check-circle text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-lg font-medium text-white">Automotive</span>
</div>

<div className="flex items-center gap-4 group">
<div className="shrink-0 rounded-full border border-white/20 p-1 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-check-circle text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-lg font-medium text-white">Hardware</span>
</div>

<div className="flex items-center gap-4 group">
<div className="shrink-0 rounded-full border border-white/20 p-1 group-hover:bg-white/10 transition-colors duration-300">
<svg className="lucide lucide-check-circle text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<span className="text-lg font-medium text-white">Industrial</span>
</div>
</div>
</div>
</div>
</div>
</section><section className="bg-white py-24 border-t border-gray-100 relative">
<div className="max-w-4xl mx-auto px-6">

<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight font-sans">
                FAQs
            </h2>
</div>

<div className="space-y-4">

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 bg-gray-50 cursor-pointer select-none transition-colors hover:bg-gray-100">
<h3 className="text-[17px] font-semibold text-slate-800 pr-4">What makes InteractOne different from other eCommerce marketing agencies?</h3>
<div className="text-[#b91c1c] transition-transform duration-300 group-open:rotate-180 shrink-0">
<svg className="lucide lucide-chevron-down w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{color: 'rgb(185, 28, 28)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-gray-50 text-slate-600 leading-relaxed font-light">
<p>Unlike many agencies that focus on just one piece of the puzzle, we handle the entire eCommerce lifecycle—from complex development and integrations to growth marketing. We are 100% US-based in Cincinnati, Ohio, meaning you never have to deal with offshore handoffs or time zone barriers. Our "strategy first" approach ensures every line of code and every marketing dollar is tied to a measurable business outcome.</p>
</div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 bg-gray-50 cursor-pointer select-none transition-colors hover:bg-gray-100">
<h3 className="text-[17px] font-semibold text-slate-800 pr-4">Do you work with both B2B and B2C merchants?</h3>
<div className="text-[#b91c1c] transition-transform duration-300 group-open:rotate-180 shrink-0">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-gray-50 text-slate-600 leading-relaxed font-light">
<p>Yes. We have deep expertise in both sectors. For B2B, we specialize in complex ERP integrations, customer-specific pricing, and bulk ordering workflows. For B2C, we focus on high-performance storefronts, user experience (UX), and conversion rate optimization (CRO) to drive direct consumer sales.</p>
</div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 bg-gray-50 cursor-pointer select-none transition-colors hover:bg-gray-100">
<h3 className="text-[17px] font-semibold text-slate-800 pr-4">What platforms do you support?</h3>
<div className="text-[#b91c1c] transition-transform duration-300 group-open:rotate-180 shrink-0">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-gray-50 text-slate-600 leading-relaxed font-light">
<p>We are certified partners and experts in Adobe Commerce (Magento), Shopify Plus, and BigCommerce. We also support WordPress/WooCommerce for specific use cases. Our team can help you determine which platform is best suited for your specific catalog size, transaction volume, and feature requirements.</p>
</div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 bg-gray-50 cursor-pointer select-none transition-colors hover:bg-gray-100">
<h3 className="text-[17px] font-semibold text-slate-800 pr-4">Do you require long-term contracts?</h3>
<div className="text-[#b91c1c] transition-transform duration-300 group-open:rotate-180 shrink-0">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-gray-50 text-slate-600 leading-relaxed font-light">
<p>We believe in earning your business every month. While we offer retainer agreements for ongoing support and marketing to ensure resource availability, we structure our partnerships based on value delivered, not locking you in. Most of our clients stay with us for years because of the results we achieve, not because of a contract clause.</p>
</div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 bg-gray-50 cursor-pointer select-none transition-colors hover:bg-gray-100">
<h3 className="text-[17px] font-semibold text-slate-800 pr-4">Will I have a dedicated point of contact?</h3>
<div className="text-[#b91c1c] transition-transform duration-300 group-open:rotate-180 shrink-0">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-gray-50 text-slate-600 leading-relaxed font-light">
<p>Absolutely. You will work directly with a dedicated Project Manager based in our Cincinnati office. We don't use ticket-system barriers; you'll have regular meetings, phone access, and a clear line of communication with the people actually doing the work on your site.</p>
</div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 bg-gray-50 cursor-pointer select-none transition-colors hover:bg-gray-100">
<h3 className="text-[17px] font-semibold text-slate-800 pr-4">Do you offer ongoing support?</h3>
<div className="text-[#b91c1c] transition-transform duration-300 group-open:rotate-180 shrink-0">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-gray-50 text-slate-600 leading-relaxed font-light">
<p>Yes. eCommerce is never "finished." We offer flexible support retainers that cover security patches, platform updates, bug fixes, and continuous feature enhancements. We act as your technical insurance policy to keep your revenue stream flowing smoothly.</p>
</div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 bg-gray-50 cursor-pointer select-none transition-colors hover:bg-gray-100">
<h3 className="text-[17px] font-semibold text-slate-800 pr-4">Where is your team located?</h3>
<div className="text-[#b91c1c] transition-transform duration-300 group-open:rotate-180 shrink-0">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-gray-50 text-slate-600 leading-relaxed font-light">
<p>We are proudly headquartered in Cincinnati, Ohio. Every strategist, developer, designer, and marketer you work with is a full-time employee located here in the USA. We do not outsource our core services.</p>
</div>
</details>

<details className="group [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between gap-4 p-6 bg-gray-50 cursor-pointer select-none transition-colors hover:bg-gray-100">
<h3 className="text-[17px] font-semibold text-slate-800 pr-4">What services do you offer?</h3>
<div className="text-[#b91c1c] transition-transform duration-300 group-open:rotate-180 shrink-0">
<svg className="lucide lucide-chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</summary>
<div className="px-6 pb-6 pt-2 bg-gray-50 text-slate-600 leading-relaxed font-light">
<p>We offer end-to-end eCommerce solutions including: Website Design &amp; Development, Platform Migration (Replatforming), Systems Integration (ERP/CRM/PIM), SEO (Search Engine Optimization), PPC (Pay-Per-Click Advertising), Email Marketing, and Conversion Rate Optimization.</p>
</div>
</details>
</div>
</div>
</section><div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-80" role="presentation"></div>
</main>

<div className="sans-serif-headers">

<section className="bg-white py-20 relative z-10 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-x-24 gap-y-16">

<div className="space-y-8">
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Let’s Talk Commerce</h2>
<p className="text-lg text-slate-600 leading-relaxed font-light">
                                Ready to grow smarter, scale faster, and simplify your eCommerce operation? 
                                We’d love to learn more about your challenges and explore how we can help.
                            </p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full px-4 py-3 bg-white border border-gray-200 text-slate-800 placeholder:text-gray-400 focus:outline-none focus:border-[#a51d22] focus:ring-1 focus:ring-[#a51d22] transition-all font-light rounded-none" placeholder="Name" type="text"/>
<input className="w-full px-4 py-3 bg-white border border-gray-200 text-slate-800 placeholder:text-gray-400 focus:outline-none focus:border-[#a51d22] focus:ring-1 focus:ring-[#a51d22] transition-all font-light rounded-none" placeholder="Phone" type="text"/>
</div>
<input className="w-full px-4 py-3 bg-white border border-gray-200 text-slate-800 placeholder:text-gray-400 focus:outline-none focus:border-[#a51d22] focus:ring-1 focus:ring-[#a51d22] transition-all font-light rounded-none" placeholder="Email" type="email"/>
<textarea className="w-full px-4 py-3 bg-white border border-gray-200 text-slate-800 placeholder:text-gray-400 focus:outline-none focus:border-[#a51d22] focus:ring-1 focus:ring-[#a51d22] transition-all font-light resize-none rounded-none" placeholder="Tell us about your goals and challenges" rows="5"></textarea>
<button className="w-full bg-[#a51d22] hover:bg-[#8a181c] text-white font-semibold tracking-wider uppercase py-4 transition-all shadow-sm hover:shadow-md mt-2 rounded-none" type="button">
                                Contact Us
                            </button>
</form>
</div>

<div className="pt-2 lg:pl-8">
<h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-10">Here’s how to get started:</h3>
<div className="space-y-10">

<div className="flex gap-6">
<div className="flex-shrink-0 w-8 h-8 bg-[#a51d22] text-white flex items-center justify-center font-bold text-sm leading-none pt-0.5 rounded-none">1</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1 leading-tight">Schedule a consultation</h4>
<p className="text-[15px] text-slate-600 font-light">Contact us or schedule a time with our team.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 w-8 h-8 bg-[#a51d22] text-white flex items-center justify-center font-bold text-sm leading-none pt-0.5 rounded-none">2</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1 leading-tight">Tell us your goals</h4>
<p className="text-[15px] text-slate-600 font-light">Share your challenges and where you want to go.</p>
</div>
</div>

<div className="flex gap-6">
<div className="flex-shrink-0 w-8 h-8 bg-[#a51d22] text-white flex items-center justify-center font-bold text-sm leading-none pt-0.5 rounded-none">3</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1 leading-tight">Get tailored solutions</h4>
<p className="text-[15px] text-slate-600 font-light">Receive a roadmap for your online store's growth.</p>
</div>
</div>
</div>
<div className="h-px bg-gray-100 my-10 w-full"></div>
<div className="space-y-1">
<p className="text-slate-800 font-semibold text-[15px]">Phone (USA): <a className="text-[#a51d22] hover:text-[#8a181c] transition-colors" href="tel:5134693362">(513) 469-3362</a></p>
<p className="text-slate-500 font-light text-[15px]">250 East Fifth Street 15th Floor PMB 664, Cincinnati, OH 45202</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 pt-16 pb-12">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="">
<h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Platforms | Solutions</h4>
<div className="w-8 h-0.5 bg-[#a51d22] mb-6 rounded-none"></div>
<ul className="space-y-3">
<li><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">Shopify</a></li>
<li><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">Magento &amp; Adobe Commerce</a></li>
<li><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">BigCommerce</a></li>
<li><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">Wordpress</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Digital Marketing Services</h4>
<div className="w-8 h-0.5 bg-[#a51d22] mb-6 rounded-none"></div>
<ul className="space-y-3">
<li><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">SEO | Organic</a></li>
<li className=""><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">PPC | Paid</a></li>
<li className=""><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">Email Marketing</a></li>
<li><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">Content Creation</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-bold text-slate-800 uppercase tracking-widest mb-4">Company</h4>
<div className="w-8 h-0.5 bg-[#a51d22] mb-6 rounded-none"></div>
<ul className="space-y-3">
<li className=""><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">Our Work</a></li>
<li className=""><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">Blog</a></li>
<li><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">About</a></li>
<li className=""><a className="text-[15px] font-medium text-slate-600 hover:text-[#a51d22] transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div className="lg:pl-6">
<div className="flex gap-5 mb-8">
<a className="text-slate-900 hover:text-[#a51d22] transition-colors" href="#"><iconify-icon className="" icon="mdi:linkedin" width="26"></iconify-icon></a>
<a className="text-slate-900 hover:text-[#a51d22] transition-colors" href="#"><iconify-icon icon="mdi:youtube" width="26"></iconify-icon></a>
<a className="text-slate-900 hover:text-[#a51d22] transition-colors" href="#"><iconify-icon className="" icon="mdi:facebook" width="26"></iconify-icon></a>
<a className="text-slate-900 hover:text-[#a51d22] transition-colors" href="#"><iconify-icon className="" icon="pajamas:twitter" width="22"></iconify-icon></a>
</div>
<a className="text-[#a51d22] text-sm font-medium hover:underline mb-10 block" href="#">Subscribe to our Newsletter</a>
<div className="space-y-6">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<img alt="Adobe Solution Partner Bronze" className="h-12 w-auto grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100" src="https://interactone.com/wp-content/uploads/Adobe_Solution_Partner_Bronze.png"/>
</div>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<img alt="BigCommerce Partner" className="h-10 w-auto object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100" src="https://interactone.com/wp-content/uploads/Partner_Wordmark-Main.png"/>
</div>
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<img alt="Shopify Partner" className="h-10 w-auto object-contain grayscale opacity-80 transition-all duration-300 hover:grayscale-0 hover:opacity-100" src="https://interactone.com/wp-content/uploads/shopify-partner-logo.jpg"/>
</div>
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<img alt="Google Partner" className="transition-all duration-300 hover:grayscale-0 hover:opacity-100 opacity-80 w-auto h-10 object-contain grayscale" src="https://interactone.com/wp-content/uploads/google-partner-e1654694065607.png"/>
</div>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
<p>© 2025 All rights reserved InteractOne, Inc.</p>
<div className="flex gap-6">
<a className="hover:text-[#a51d22] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#a51d22] transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
