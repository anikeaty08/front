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
      
{
"@context": "https://schema.org",
"@type": "MusicGroup",
"name": "Dopsy Flow",
"alternateName": "DF",
"description": "Music artist creating cinematic and atmospheric sounds.",
"image": "https://images.unsplash.com/photo-1516280440502-6c56c221d607?q=80&w=2800&auto=format&fit=crop",
"sameAs": [
"https://instagram.com",
"https://youtube.com",
"https://spotify.com"
]
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons with 1.5 stroke width as requested
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        

        document.addEventListener('DOMContentLoaded', () => {
            
            // --- 1. HERO ANIMATIONS ---
            const tlHero = gsap.timeline();
            tlHero.fromTo('.hero-title', 
                { y: 50, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.2 }
            )
            .fromTo('.hero-player',
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            )
            .fromTo('.hero-btns a',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
                "-=0.4"
            );

            // Hero Image Parallax (moves slower than scroll)
            gsap.to('.hero-img', {
                scale: 1.08,
                yPercent: 25,
                ease: "none",
                scrollTrigger: {
                    trigger: '#hero',
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            // --- 2. ABOUT REVEAL ---
            gsap.fromTo('.about-quote',
                { opacity: 0, x: -30 },
                {
                    opacity: 1, x: 0, duration: 1,
                    scrollTrigger: {
                        trigger: '#about',
                        start: "top 60%",
                    }
                }
            );

        // Staggered role lines slide up on scroll
        gsap.utils.toArray(".role-line").forEach((line, i) => {
        gsap.to(line, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        delay: i * 0.15,
        scrollTrigger: {
        trigger: ".roles-stack",
        start: "top 80%",
        toggleActions: "play none none none"
        }
        });
        });
        
        // Bio paragraph fades in after roles
        gsap.to(".about-text", {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
        trigger: ".about-text",
        start: "top 85%",
        toggleActions: "play none none none"
        }
        });
        
        // Parallax on the roles stack
        gsap.to(".roles-stack", {
        yPercent: -12,
        ease: "none",
        scrollTrigger: {
        trigger: ".roles-stack",
        start: "top bottom",
        end: "bottom top",
        scrub: true
        }
        });

            // --- 3. DISCOGRAPHY PARALLAX & FILTER ---
            // Subtle gradient background shift
            gsap.to('.bg-gradient-shift', {
                backgroundPosition: "0% 100%",
                ease: "none",
                scrollTrigger: {
                    trigger: '#discography',
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            // Parallax on alternating columns (simplistic approach based on mt classes in HTML)
            // We use standard scroll reveal for all cards
            gsap.utils.toArray('.disco-item').forEach((item, i) => {
                gsap.fromTo(item, 
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                        }
                    }
                );
            });

            // Filtering Logic
            const filterBtns = document.querySelectorAll('.filter-controls button');
            const items = document.querySelectorAll('.disco-item');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active button styles
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-neutral-800', 'text-neutral-50', 'border-yellow-600');
                        b.classList.add('bg-transparent', 'text-neutral-400', 'border-neutral-800');
                    });
                    btn.classList.add('bg-neutral-800', 'text-neutral-50', 'border-yellow-600');
                    btn.classList.remove('bg-transparent', 'text-neutral-400', 'border-neutral-800');

                    const filter = btn.getAttribute('data-filter');

                    items.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            gsap.to(item, { opacity: 1, scale: 1, display: 'flex', duration: 0.4 });
                        } else {
                            gsap.to(item, { opacity: 0, scale: 0.9, display: 'none', duration: 0.4 });
                        }
                    });
                    // Refresh ScrollTrigger after layout shift
                    setTimeout(() => ScrollTrigger.refresh(), 450);
                });
            });

            // --- 4. VISUALS HORIZONTAL SCROLL ---
            const visualsContainer = document.querySelector('.horizontal-scroll-container');
            const track = document.querySelector('.horizontal-track');
            
            // Calculate how far to move the track
            function getScrollAmount() {
                let trackWidth = track.scrollWidth;
                return -(trackWidth - window.innerWidth + 100); // 100px buffer
            }

            const tween = gsap.to(track, {
                x: getScrollAmount,
                ease: "none"
            });

            ScrollTrigger.create({
                trigger: visualsContainer,
                start: "top top",
                end: () => `+=${getScrollAmount() * -1}`,
                pin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true
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
      

<div bis_label="style" bis_size='{"x":0,"y":959,"w":1520,"h":652,"abs_x":0,"abs_y":1001}' className="fixed mix-blend-overlay z-10 top-0 right-0 bottom-0 left-0">
</div>
<main bis_size='{"x":0,"y":0,"w":1520,"h":5013,"abs_x":0,"abs_y":42}' className="z-10">

<section bis_size='{"x":0,"y":0,"w":1520,"h":872,"abs_x":0,"abs_y":42}' className="min-h-screen flex flex-col lg:flex-row overflow-hidden bg-center z-10 bg-neutral-950 w-full relative" id="hero">

<div bis_size='{"x":0,"y":0,"w":760,"h":872,"abs_x":0,"abs_y":42}' className="lg:w-1/2 min-h-screen flex flex-col md:px-16 lg:px-24 z-10 w-full pt-32 pr-8 pb-16 pl-8 relative justify-center">
<header bis_size='{"x":96,"y":128,"w":568,"h":0,"abs_x":96,"abs_y":170}' className="mb-auto">
</header>
<div bis_size='{"x":96,"y":176,"w":568,"h":584,"abs_x":96,"abs_y":218}' className="mt-12 mb-12">
<h1 bis_size='{"x":96,"y":176,"w":568,"h":320,"abs_x":96,"abs_y":218}' className="md:text-8xl lg:text-[10rem] leading-none uppercase hero-title text-7xl font-semibold text-neutral-50 tracking-tighter font-display drop-shadow-2xl">
                        Dopsy<br bis_size='{"x":485,"y":136,"w":0,"h":237,"abs_x":485,"abs_y":178}'/><span bis_size='{"x":96,"y":296,"w":308,"h":237,"abs_x":96,"abs_y":338}' className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-100 to-neutral-600">Flow</span>
</h1>
<div bis_size='{"x":96,"y":544,"w":448,"h":132,"abs_x":96,"abs_y":586}' className="mt-1 max-w-md hero-player">
<p bis_size='{"x":96,"y":544,"w":448,"h":20,"abs_x":96,"abs_y":586}' className="text-sm tracking-tight font-semibold uppercase text-neutral-400 mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="disc-3"></i> Latest Release
                        </p>

<div bis_size='{"x":96,"y":580,"w":448,"h":96,"abs_x":96,"abs_y":622}' className="w-full h-24 bg-neutral-900 rounded-xl border border-neutral-800 flex items-center px-4 gap-4 overflow-hidden relative z-20 group cursor-pointer hover:border-neutral-700 transition-colors">
<img alt="Album Cover" bis_size='{"x":112,"y":596,"w":64,"h":64,"abs_x":112,"abs_y":638}' className="w-16 h-16 object-cover rounded-md" src="https://res.cloudinary.com/skymandoyle/image/upload/q_auto/f_auto/v1775138458/dopsyflow/ab67616d0000b273d001eeea7492454ada4d18b5_ldndaq.jpg"/>
<div bis_size='{"x":192,"y":604,"w":278,"h":48,"abs_x":192,"abs_y":646}' className="flex-1 min-w-0">
<h3 bis_size='{"x":192,"y":604,"w":278,"h":28,"abs_x":192,"abs_y":646}' className="truncate text-xl font-semibold tracking-tight">
                                    Beautiful Girls</h3>
<p bis_size='{"x":192,"y":632,"w":278,"h":20,"abs_x":192,"abs_y":674}' className="text-sm text-neutral-400 truncate">
                                    Dopsy Flow</p>
</div>
<div bis_size='{"x":487,"y":608,"w":40,"h":40,"abs_x":487,"abs_y":650}' className="flex group-hover:scale-105 transition-transform bg-green-500 w-10 h-10 rounded-full items-center justify-center">
<i className="w-5 h-5 text-black" data-lucide="play"></i>
</div>
</div>
</div>
<div bis_size='{"x":96,"y":716,"w":568,"h":44,"abs_x":96,"abs_y":758}' className="flex flex-wrap items-center gap-4 hero-btns mt-10">
<span bis_size='{"x":96,"y":728,"w":107,"h":20,"abs_x":96,"abs_y":770}' className="text-sm font-semibold tracking-widest text-neutral-400 uppercase">Listen Now:</span>
<div bis_size='{"x":219,"y":716,"w":156,"h":44,"abs_x":219,"abs_y":758}' className="flex items-center gap-3">
<a aria-label="Spotify" bis_size='{"x":219,"y":716,"w":44,"h":44,"abs_x":219,"abs_y":758}' className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#1DB954] hover:border-[#1DB954] transition-colors duration-300" href="https://open.spotify.com/artist/3kdXVl3uUenZ0ctMpULhg8?si=UZzQs2tTRwqoIl_daxlkng">
<i bis_size='{"x":232,"y":724,"w":17,"h":28,"abs_x":232,"abs_y":766}' className="fa-brands fa-spotify text-lg"></i>
</a>
<a aria-label="Apple Music" bis_size='{"x":275,"y":716,"w":44,"h":44,"abs_x":275,"abs_y":758}' className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#fc3c44] hover:border-[#fc3c44] transition-colors duration-300" href="https://music.apple.com/us/artist/dopsy-flow/1262493479">
<i bis_size='{"x":290,"y":724,"w":13,"h":28,"abs_x":290,"abs_y":766}' className="fa-brands fa-apple text-lg"></i>
</a>
<a aria-label="YouTube Music" bis_size='{"x":331,"y":716,"w":44,"h":44,"abs_x":331,"abs_y":758}' className="w-11 h-11 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-[#FF0000] hover:border-[#FF0000] transition-colors duration-300" href="https://music.youtube.com/channel/UCBJwoeTI0pork1MQx8qX_HA?si=l9Mqc3o3Q84VjKsC">
<i bis_size='{"x":343,"y":724,"w":20,"h":28,"abs_x":343,"abs_y":766}' className="fa-brands fa-youtube text-lg"></i>
</a>
</div>
</div>
</div>
</div>

<div bis_size='{"x":760,"y":0,"w":760,"h":652,"abs_x":760,"abs_y":42}' className="lg:relative lg:w-1/2 lg:h-screen overflow-hidden hero-img-container w-full h-[60vh] absolute top-0 right-0 bottom-0 left-0">


<img alt="Dopsy Flow Editorial" bis_size='{"x":760,"y":52,"w":760,"h":783,"abs_x":760,"abs_y":94}' className="hero-img w-full h-[140%] object-cover object-center absolute top-[-20%] left-0" src="https://res.cloudinary.com/skymandoyle/image/upload/q_auto/f_auto/v1775141314/dopsyflow/SaveClip.App_588310490_18546159502025796_8617327752297329200_n_vli3f4.jpg"/>
</div>
</section>

<section bis_size='{"x":0,"y":872,"w":1520,"h":652,"abs_x":0,"abs_y":914}' className="min-h-screen flex overflow-hidden pt-32 pb-32 relative items-center justify-center" id="about">

<div bis_size='{"x":0,"y":872,"w":1520,"h":652,"abs_x":0,"abs_y":914}' className="absolute inset-0 z-0 overflow-hidden">
<img alt="About Image" bis_size='{"x":0,"y":872,"w":1520,"h":652,"abs_x":0,"abs_y":914}' className="w-full h-full object-cover animate-kenburns opacity-30" src="https://res.cloudinary.com/skymandoyle/image/upload/q_auto/f_auto/v1775141421/dopsyflow/SaveClip.App_588870696_18546159478025796_571128474280873282_n_dqi2m8.jpg"/>
<div bis_size='{"x":0,"y":872,"w":1520,"h":652,"abs_x":0,"abs_y":914}' className="absolute inset-0 bg-neutral-950/80 backdrop-blur-[2px]">
</div>
</div>
<div bis_size='{"x":0,"y":1054,"w":1520,"h":288,"abs_x":0,"abs_y":1096}' className="relative z-10 mx-auto px-8 w-full">
<div bis_size='{"x":32,"y":1054,"w":1456,"h":288,"abs_x":32,"abs_y":1096}' className="grid grid-cols-1 lg:grid-cols-12 items-center">
<div bis_size='{"x":32,"y":1054,"w":849,"h":288,"abs_x":32,"abs_y":1096}' className="lg:col-span-7 relative">

<div bis_size='{"x":32,"y":1033,"w":849,"h":288,"abs_x":32,"abs_y":1075}' className="roles-stack">
<div bis_size='{"x":32,"y":1033,"w":849,"h":96,"abs_x":32,"abs_y":1075}' className="role-line relative z-10 font-display text-6xl md:text-8xl tracking-tighter leading-tight font-semibold text-yellow-600 translate-y-full opacity-0">
                                Singer
                            </div>
<div bis_size='{"x":32,"y":1129,"w":849,"h":96,"abs_x":32,"abs_y":1171}' className="role-line relative z-10 font-display text-6xl md:text-8xl tracking-tighter leading-tight font-semibold text-yellow-600 translate-y-full opacity-0 pl-12 md:pl-24">
                                Songwriter
                            </div>
<div bis_size='{"x":32,"y":1225,"w":849,"h":95,"abs_x":32,"abs_y":1267}' className="role-line relative z-10 font-display text-6xl md:text-8xl tracking-tighter leading-tight font-semibold text-yellow-600 translate-y-full opacity-0">
                                Audio Engineer
                            </div>
</div>
</div>

<div bis_size='{"x":881,"y":1114,"w":606,"h":168,"abs_x":881,"abs_y":1156}' className="lg:col-span-5 space-y-8 about-text-container">

<p bis_size='{"x":881,"y":1114,"w":606,"h":168,"abs_x":881,"abs_y":1156}' className="text-lg md:text-xl text-neutral-400 leading-relaxed about-text opacity-0">
                            I went professional in 2016, broke through with my debut single
                            <em bis_size='{"x":881,"y":1144,"w":99,"h":24,"abs_x":881,"abs_y":1186}' className="">The Latest</em>
                            in 2018, and hit 25,000+
                            organic streams on
                            <em bis_size='{"x":881,"y":1172,"w":89,"h":24,"abs_x":881,"abs_y":1214}' className="">Addiction</em>
                            in 2020 no promo, just the music. Since then I've collaborated
                            internationally, dropped my debut E.P., signed with Africunia Records, and been featured on
                            Wazobia FM, Cool FM,
                            Rhythm FM, Silverbird TV and more.
                        </p>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1524,"w":1520,"h":1558,"abs_x":0,"abs_y":1566}' className="min-h-screen disco-section pt-32 pb-32 relative" id="discography" style={{backgroundPosition: '0% 0%'}}>
<div bis_size='{"x":120,"y":1652,"w":1280,"h":1302,"abs_x":120,"abs_y":1694}' className="max-w-7xl mx-auto px-8">
<div bis_size='{"x":152,"y":1652,"w":1216,"h":140,"abs_x":152,"abs_y":1694}' className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
<div bis_size='{"x":152,"y":1652,"w":507,"h":140,"abs_x":152,"abs_y":1694}'>
<h2 bis_size='{"x":152,"y":1652,"w":507,"h":96,"abs_x":152,"abs_y":1694}' className="font-display text-6xl md:text-8xl tracking-tighter uppercase font-semibold text-neutral-50">
                            Discography</h2>

</div>

<div bis_size='{"x":1090,"y":1755,"w":277,"h":37,"abs_x":1090,"abs_y":1797}' className="flex flex-wrap gap-2 filter-controls">
<button bis_size='{"x":1090,"y":1755,"w":66,"h":37,"abs_x":1090,"abs_y":1797}' className="px-6 py-2 rounded-full border border-neutral-700 bg-neutral-800 text-neutral-50 text-sm tracking-tight font-semibold hover:border-yellow-600 transition-colors active-filter" data-filter="all">All</button>
<button bis_size='{"x":1164,"y":1755,"w":98,"h":37,"abs_x":1164,"abs_y":1797}' className="px-6 py-2 rounded-full border border-neutral-800 bg-transparent text-neutral-400 text-sm tracking-tight font-semibold hover:border-neutral-500 hover:text-neutral-50 transition-colors" data-filter="album">Albums</button>
<button bis_size='{"x":1271,"y":1755,"w":96,"h":37,"abs_x":1271,"abs_y":1797}' className="px-6 py-2 rounded-full border border-neutral-800 bg-transparent text-neutral-400 text-sm tracking-tight font-semibold hover:border-neutral-500 hover:text-neutral-50 transition-colors" data-filter="single">Singles</button>
</div>
</div>

<div bis_size='{"x":152,"y":1872,"w":1216,"h":1082,"abs_x":152,"abs_y":1914}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 disco-grid">

<div bis_size='{"x":152,"y":1922,"w":373,"h":581,"abs_x":152,"abs_y":1964}' className="disco-item album group relative flex flex-col" data-category="album">
<div bis_size='{"x":152,"y":1922,"w":373,"h":373,"abs_x":152,"abs_y":1964}' className="relative aspect-square overflow-hidden rounded-sm bg-neutral-900 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(202,138,4,0.3)]">
<img alt="Album" bis_size='{"x":152,"y":1922,"w":373,"h":373,"abs_x":152,"abs_y":1964}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://res.cloudinary.com/skymandoyle/image/upload/q_auto/f_auto/v1775138458/dopsyflow/ab67616d0000b273d001eeea7492454ada4d18b5_ldndaq.jpg"/>
<div bis_size='{"x":152,"y":1922,"w":373,"h":373,"abs_x":152,"abs_y":1964}' className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
<a bis_size='{"x":314,"y":2085,"w":48,"h":48,"abs_x":314,"abs_y":2127}' className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:scale-110 transition-transform text-black" href="#"><i className="w-5 h-5 ml-1" data-lucide="play"></i></a>
</div>
</div>
<div bis_size='{"x":152,"y":2320,"w":373,"h":56,"abs_x":152,"abs_y":2362}' className="mt-6 flex justify-between items-start">
<div bis_size='{"x":152,"y":2320,"w":184,"h":56,"abs_x":152,"abs_y":2362}'>
<h3 bis_size='{"x":152,"y":2320,"w":184,"h":32,"abs_x":152,"abs_y":2362}' className="text-2xl font-semibold tracking-tight text-neutral-50 group-hover:text-yellow-500 transition-colors">
                                    Beautiful Girls</h3>
<p bis_size='{"x":152,"y":2356,"w":184,"h":20,"abs_x":152,"abs_y":2398}' className="text-sm text-neutral-500 font-semibold uppercase tracking-widest mt-1">
                                    Single</p>
</div>
<span bis_size='{"x":488,"y":2320,"w":37,"h":28,"abs_x":488,"abs_y":2362}' className="text-lg font-display text-neutral-400">2023</span>
</div>
</div>

<div bis_size='{"x":573,"y":2050,"w":373,"h":453,"abs_x":573,"abs_y":2092}' className="disco-item single group relative flex flex-col md:mt-24 lg:mt-32" data-category="single">
<div bis_size='{"x":573,"y":2050,"w":373,"h":373,"abs_x":573,"abs_y":2092}' className="relative aspect-square overflow-hidden rounded-sm bg-neutral-900 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]">
<img alt="Single" bis_size='{"x":573,"y":2050,"w":373,"h":373,"abs_x":573,"abs_y":2092}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter group-hover:grayscale-0" src="https://res.cloudinary.com/skymandoyle/image/upload/q_auto/f_auto/v1775149587/dopsyflow/ab67616d0000b273b52b03c4385bd8c23663fe20_qssbma.jpg"/>
<div bis_size='{"x":573,"y":2050,"w":373,"h":373,"abs_x":573,"abs_y":2092}' className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
<a bis_size='{"x":735,"y":2213,"w":48,"h":48,"abs_x":735,"abs_y":2255}' className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:scale-110 transition-transform text-black" href="#"><i className="w-5 h-5 ml-1" data-lucide="play"></i></a>
</div>
</div>
<div bis_size='{"x":573,"y":2448,"w":373,"h":56,"abs_x":573,"abs_y":2490}' className="mt-6 flex justify-between items-start">
<div bis_size='{"x":573,"y":2448,"w":128,"h":56,"abs_x":573,"abs_y":2490}'>
<h3 bis_size='{"x":573,"y":2448,"w":128,"h":32,"abs_x":573,"abs_y":2490}' className="text-2xl font-semibold tracking-tight text-neutral-50 group-hover:text-white transition-colors">
                                    Answers</h3>
<p bis_size='{"x":573,"y":2484,"w":128,"h":20,"abs_x":573,"abs_y":2526}' className="text-sm text-neutral-500 font-semibold uppercase tracking-widest mt-1">
                                    Single</p>
</div>
<span bis_size='{"x":909,"y":2448,"w":37,"h":28,"abs_x":909,"abs_y":2490}' className="text-lg font-display text-neutral-400">2023</span>
</div>
</div>

<div bis_size='{"x":994,"y":1970,"w":373,"h":533,"abs_x":994,"abs_y":2012}' className="disco-item single group relative flex flex-col lg:mt-12" data-category="single">
<div bis_size='{"x":994,"y":1970,"w":373,"h":373,"abs_x":994,"abs_y":2012}' className="relative aspect-square overflow-hidden rounded-sm bg-neutral-900 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]">
<img alt="Single" bis_size='{"x":994,"y":1970,"w":373,"h":373,"abs_x":994,"abs_y":2012}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://res.cloudinary.com/skymandoyle/image/upload/q_auto/f_auto/v1775149634/dopsyflow/ab67616d0000b27323c92caedc06579431735040_hzqwzz.jpg"/>
<div bis_size='{"x":994,"y":1970,"w":373,"h":373,"abs_x":994,"abs_y":2012}' className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
<a bis_size='{"x":1157,"y":2133,"w":48,"h":48,"abs_x":1157,"abs_y":2175}' className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:scale-110 transition-transform text-black" href="#"><i className="w-5 h-5 ml-1" data-lucide="play"></i></a>
</div>
</div>
<div bis_size='{"x":994,"y":2368,"w":373,"h":56,"abs_x":994,"abs_y":2410}' className="mt-6 flex justify-between items-start">
<div bis_size='{"x":994,"y":2368,"w":182,"h":56,"abs_x":994,"abs_y":2410}'>
<h3 bis_size='{"x":994,"y":2368,"w":182,"h":32,"abs_x":994,"abs_y":2410}' className="text-2xl font-semibold tracking-tight text-neutral-50 group-hover:text-white transition-colors">
                                    Best In Beauty</h3>
<p bis_size='{"x":994,"y":2404,"w":182,"h":20,"abs_x":994,"abs_y":2446}' className="text-sm text-neutral-500 font-semibold uppercase tracking-widest mt-1">
                                    Single</p>
</div>
<span bis_size='{"x":1330,"y":2368,"w":37,"h":28,"abs_x":1330,"abs_y":2410}' className="text-lg font-display text-neutral-400">2022</span>
</div>
</div>

<div bis_size='{"x":152,"y":2552,"w":373,"h":453,"abs_x":152,"abs_y":2594}' className="disco-item album group relative flex flex-col" data-category="album">
<div bis_size='{"x":152,"y":2552,"w":373,"h":373,"abs_x":152,"abs_y":2594}' className="relative aspect-square overflow-hidden rounded-sm bg-neutral-900 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(202,138,4,0.3)]">
<img alt="Album" bis_size='{"x":152,"y":2552,"w":373,"h":373,"abs_x":152,"abs_y":2594}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://res.cloudinary.com/skymandoyle/image/upload/q_auto/f_auto/v1775149681/dopsyflow/ab67616d0000b273cc677a3fd198638ef809c099_vbpunt.jpg"/>
<div bis_size='{"x":152,"y":2552,"w":373,"h":373,"abs_x":152,"abs_y":2594}' className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
<a bis_size='{"x":314,"y":2714,"w":48,"h":48,"abs_x":314,"abs_y":2756}' className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center hover:scale-110 transition-transform text-black" href="#"><i className="w-5 h-5 ml-1" data-lucide="play"></i></a>
</div>
</div>
<div bis_size='{"x":152,"y":2949,"w":373,"h":56,"abs_x":152,"abs_y":2991}' className="mt-6 flex justify-between items-start">
<div bis_size='{"x":152,"y":2949,"w":89,"h":56,"abs_x":152,"abs_y":2991}'>
<h3 bis_size='{"x":152,"y":2949,"w":89,"h":32,"abs_x":152,"abs_y":2991}' className="text-2xl font-semibold tracking-tight text-neutral-50 group-hover:text-yellow-500 transition-colors">
                                    What You Mean</h3>
<p bis_size='{"x":152,"y":2985,"w":89,"h":20,"abs_x":152,"abs_y":3027}' className="text-sm text-neutral-500 font-semibold uppercase tracking-widest mt-1">
                                    Single</p>
</div>
<span bis_size='{"x":490,"y":2949,"w":34,"h":28,"abs_x":490,"abs_y":2991}' className="text-lg font-display text-neutral-400">2021</span>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3083,"w":1520,"h":1930,"abs_x":0,"abs_y":3125}' className="overflow-hidden bg-neutral-950 relative" id="visuals">
<div bis_size='{"x":0,"y":3083,"w":768,"h":1930,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: 'auto', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1930px', padding: '0px 0px 906px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="pin-spacer" style={{order: '0', placeSelf: 'auto', gridArea: 'auto', zIndex: 'auto', float: 'none', flexShrink: '1', display: 'flex', margin: '0px', inset: '0px auto auto 0px', position: 'relative', flexBasis: 'auto', overflow: 'visible', boxSizing: 'border-box', width: '768px', height: '1024px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3083,"w":768,"h":1024,"abs_x":0,"abs_y":3125}' className="horizontal-scroll-container h-screen flex flex-col justify-center" style={{inset: '0px auto auto 0px', margin: '0px', maxWidth: '768px', width: '768px', maxHeight: '1024px', height: '768px', padding: '0px'}}>
<div bis_size='{"x":0,"y":3221,"w":768,"h":72,"abs_x":0,"abs_y":3263}' className="px-8 md:px-16 lg:px-24 mb-12 flex-shrink-0">
<h2 bis_size='{"x":96,"y":3221,"w":576,"h":72,"abs_x":96,"abs_y":3263}' className="font-display text-5xl md:text-7xl tracking-tighter uppercase font-semibold text-neutral-50">
                                                                                                                                                            Videos
                                                                                                                                                        </h2>
</div>

<div bis_size='{"x":0,"y":3341,"w":2308,"h":628,"abs_x":0,"abs_y":3383}' className="horizontal-track flex gap-8 px-8 md:px-16 lg:px-24 pb-16 w-max">

<div bis_size='{"x":96,"y":3341,"w":684,"h":564,"abs_x":96,"abs_y":3383}' className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 group">
<div bis_size='{"x":96,"y":3341,"w":684,"h":384,"abs_x":96,"abs_y":3383}' className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-2">
<div bis_size='{"x":104,"y":3349,"w":666,"h":367,"abs_x":104,"abs_y":3391}' className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer">
<img alt="Video Thumbnail" bis_size='{"x":104,"y":3349,"w":666,"h":367,"abs_x":104,"abs_y":3391}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://res.cloudinary.com/skymandoyle/image/upload/q_auto/f_auto/v1775149741/dopsyflow/ab67616d0000b27380eba762bc415dd76ea36bfc_h78sgj.jpg"/>
<div bis_size='{"x":104,"y":3349,"w":666,"h":367,"abs_x":104,"abs_y":3391}' className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
<div bis_size='{"x":398,"y":3493,"w":80,"h":80,"abs_x":398,"abs_y":3535}' className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white ml-2" data-lucide="play"></i>
</div>
</div>
</div>
</div>
<h3 bis_size='{"x":96,"y":3749,"w":684,"h":32,"abs_x":96,"abs_y":3791}' className="mt-6 text-2xl font-semibold tracking-tight text-neutral-100">
                                                                                                                                                                Butterfly
                                                                                                                                                                
                                                                                                                                                                (Official
                                                                                                                                                                Video)
                                                                                                                                                            </h3>
<p bis_size='{"x":96,"y":3789,"w":684,"h":20,"abs_x":96,"abs_y":3831}' className="text-neutral-500 text-sm mt-2">
                                                                                                                                                                Directed
                                                                                                                                                                by
                                                                                                                                                                D
                                                                                                                                                                F
                                                                                                                                                            </p>
</div>

<div bis_size='{"x":812,"y":3437,"w":684,"h":468,"abs_x":812,"abs_y":3479}' className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 group mt-12 lg:mt-24">
<div bis_size='{"x":812,"y":3437,"w":684,"h":384,"abs_x":812,"abs_y":3479}' className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-2">
<div bis_size='{"x":820,"y":3445,"w":666,"h":367,"abs_x":820,"abs_y":3487}' className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer">
<img alt="Video Thumbnail" bis_size='{"x":820,"y":3445,"w":666,"h":367,"abs_x":820,"abs_y":3487}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://res.cloudinary.com/skymandoyle/image/upload/q_auto/f_auto/v1775149634/dopsyflow/ab67616d0000b27323c92caedc06579431735040_hzqwzz.jpg"/>
<div bis_size='{"x":820,"y":3445,"w":666,"h":367,"abs_x":820,"abs_y":3487}' className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
<div bis_size='{"x":1114,"y":3589,"w":80,"h":80,"abs_x":1114,"abs_y":3631}' className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white ml-2" data-lucide="play"></i>
</div>
</div>
</div>
</div>
<h3 bis_size='{"x":812,"y":3845,"w":684,"h":32,"abs_x":812,"abs_y":3887}' className="mt-6 text-2xl font-semibold tracking-tight text-neutral-100">
                                                                                                                                                                Best In Beauty
                                                                                                                                    
                                                                                                                                                                (Live
                                                                                                                                                                Video)
                                                                                                                                                            </h3>
<p bis_size='{"x":812,"y":3885,"w":684,"h":20,"abs_x":812,"abs_y":3927}' className="text-neutral-500 text-sm mt-2">
                                                                                                                                                                Live
                                                                                                                                                                from
                                                                                                                                                                London
                                                                                                                                                            </p>
</div>

<div bis_size='{"x":1528,"y":3341,"w":684,"h":564,"abs_x":1528,"abs_y":3383}' className="w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 group">
<div bis_size='{"x":1528,"y":3341,"w":684,"h":384,"abs_x":1528,"abs_y":3383}' className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 p-2">
<div bis_size='{"x":1536,"y":3349,"w":666,"h":367,"abs_x":1536,"abs_y":3391}' className="relative w-full h-full rounded-xl overflow-hidden cursor-pointer">
<img alt="Video Thumbnail" bis_size='{"x":1536,"y":3349,"w":666,"h":367,"abs_x":1536,"abs_y":3391}' className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 filter sepia-[.3]" src="https://res.cloudinary.com/skymandoyle/image/upload/q_auto/f_auto/v1775149587/dopsyflow/ab67616d0000b273b52b03c4385bd8c23663fe20_qssbma.jpg"/>
<div bis_size='{"x":1536,"y":3349,"w":666,"h":367,"abs_x":1536,"abs_y":3391}' className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors">
<div bis_size='{"x":1830,"y":3493,"w":80,"h":80,"abs_x":1830,"abs_y":3535}' className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white ml-2" data-lucide="play"></i>
</div>
</div>
</div>
</div>
<h3 bis_size='{"x":1528,"y":3749,"w":684,"h":32,"abs_x":1528,"abs_y":3791}' className="mt-6 text-2xl font-semibold tracking-tight text-neutral-100">
                          Answers
                                                                                                                                                            </h3>
<p bis_size='{"x":1528,"y":3789,"w":684,"h":20,"abs_x":1528,"abs_y":3831}' className="text-neutral-500 text-sm mt-2">
                                                                                                                                                                A
                                                                                                                                                                Visual
                                                                                                                                                                Experience
                                                                                                                                                            </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer bis_size='{"x":0,"y":5013,"w":1520,"h":655,"abs_x":0,"abs_y":5055}' className="relative bg-black text-white pt-32 pb-16 overflow-hidden min-h-[60vh] flex flex-col justify-end border-t border-neutral-900">

<div bis_size='{"x":0,"y":5061,"w":1520,"h":560,"abs_x":0,"abs_y":5103}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
<h2 bis_size='{"x":0,"y":5061,"w":1520,"h":560,"abs_x":0,"abs_y":5103}' className="font-display text-[15rem] md:text-[25rem] lg:text-[35rem] leading-none text-white/[0.02] font-semibold tracking-tighter whitespace-nowrap">
                D F</h2>
</div>
<div bis_size='{"x":120,"y":5142,"w":1280,"h":462,"abs_x":120,"abs_y":5184}' className="relative z-10 max-w-7xl mx-auto w-full px-8">
<div bis_size='{"x":152,"y":5142,"w":1216,"h":92,"abs_x":152,"abs_y":5184}' className="mb-20 text-center">
<h3 bis_size='{"x":152,"y":5142,"w":1216,"h":48,"abs_x":152,"abs_y":5184}' className="text-6xl md:text-8xl font-display uppercase tracking-tight font-semibold text-neutral-300 mb-4">
                    Connect</h3>

</div>

<div bis_size='{"x":152,"y":5314,"w":1216,"h":141,"abs_x":152,"abs_y":5356}' className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 mb-24">
<a bis_size='{"x":152,"y":5314,"w":176,"h":141,"abs_x":152,"abs_y":5356}' className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 hover:border-yellow-600/50" href="#">
<i bis_size='{"x":220,"y":5347,"w":40,"h":40,"abs_x":220,"abs_y":5389}' className="fa-brands fa-instagram text-4xl text-center w-10 h-10 mb-4 text-neutral-400 group-hover:text-yellow-500 transition-colors"></i>
<span bis_size='{"x":207,"y":5403,"w":64,"h":20,"abs_x":207,"abs_y":5445}' className="text-sm font-semibold tracking-tight text-neutral-300 group-hover:text-white">Instagram</span>
</a>
<a bis_size='{"x":360,"y":5314,"w":176,"h":141,"abs_x":360,"abs_y":5356}' className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 hover:border-white/30" href="#">
<i className="fa-brands fa-tiktok text-4xl text-center w-10 h-10 mb-4 text-neutral-400 group-hover:text-white transition-colors"></i>
<span bis_size='{"x":426,"y":5403,"w":42,"h":20,"abs_x":426,"abs_y":5445}' className="text-sm font-semibold tracking-tight text-neutral-300 group-hover:text-white">TikTok</span>
</a>
<a bis_size='{"x":568,"y":5314,"w":176,"h":141,"abs_x":568,"abs_y":5356}' className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 hover:border-[#FF0000]/50" href="#">
<i bis_size='{"x":636,"y":5347,"w":40,"h":40,"abs_x":636,"abs_y":5389}' className="fa-brands fa-youtube text-4xl text-center w-10 h-10 mb-4 text-neutral-400 group-hover:text-[#FF0000] transition-colors"></i>
<span bis_size='{"x":627,"y":5403,"w":56,"h":20,"abs_x":627,"abs_y":5445}' className="text-sm font-semibold tracking-tight text-neutral-300 group-hover:text-white">YouTube</span>
</a>
<a bis_size='{"x":776,"y":5314,"w":176,"h":141,"abs_x":776,"abs_y":5356}' className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 hover:border-[#1DB954]/50" href="#">

<i className="fa-brands fa-spotify text-4xl text-center w-10 h-10 mb-4 text-neutral-400 group-hover:text-[#1DB954] transition-colors"></i>
<span bis_size='{"x":840,"y":5403,"w":46,"h":20,"abs_x":840,"abs_y":5445}' className="text-sm font-semibold tracking-tight text-neutral-300 group-hover:text-white">Spotify</span>
</a>
<a bis_size='{"x":984,"y":5314,"w":176,"h":141,"abs_x":984,"abs_y":5356}' className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 hover:border-[#FA243C]/50" href="#">
<i className="fa-brands fa-apple text-4xl text-center w-10 h-10 mb-4 text-neutral-400 group-hover:text-[#FA243C] transition-colors"></i>
<span bis_size='{"x":1031,"y":5403,"w":80,"h":20,"abs_x":1031,"abs_y":5445}' className="text-sm font-semibold tracking-tight text-neutral-300 group-hover:text-white">Apple Music</span>
</a>
<a bis_size='{"x":1192,"y":5314,"w":176,"h":141,"abs_x":1192,"abs_y":5356}' className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 hover:border-white/30" href="#">
<i className="fa-brands fa-youtube text-4xl text-center w-10 h-10 mb-4 text-neutral-400 group-hover:text-white transition-colors"></i>
<span bis_size='{"x":1249,"y":5403,"w":61,"h":20,"abs_x":1249,"abs_y":5445}' className="text-sm font-semibold tracking-tight text-neutral-300 group-hover:text-white">YT Music</span>
</a>
</div>

</div>
</footer>



    </>
  );
}
